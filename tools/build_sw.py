#!/usr/bin/env python3
"""
Gera service-worker.js REAL na raiz do site, com pré-cache de todos os
assets locais (index.html + JS), para funcionamento OFFLINE confiável.
Lê a lista de <script src> do index.html para manter sincronizado.

Uso: python3 build/build_sw.py
Rodar sempre que adicionar/remover arquivos JS.
"""
import re, os, hashlib

SITE = os.environ.get("SITE_DIR") or os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
INDEX = os.path.join(SITE, "index.html")

with open(INDEX, encoding="utf-8") as f:
    html = f.read()

# JS locais (ignora CDN http)
js_locais = [s for s in re.findall(r'<script src="([^"]+)"', html) if not s.startswith("http")]
# CDN (jsPDF) — cacheado à parte (cross-origin)
cdn = [s for s in re.findall(r'<script src="(https://[^"]+)"', html)]

# Assets a pré-cachear (paths relativos — funciona em subpath /plantao/ e local)
precache = ["./", "index.html"] + js_locais

# Hash do conteúdo dos arquivos → versão do cache (invalida quando algo muda)
h = hashlib.sha256()
h.update(html.encode("utf-8"))
for js in js_locais:
    p = os.path.join(SITE, js)
    if os.path.exists(p):
        with open(p, "rb") as f:
            h.update(f.read())
version = h.hexdigest()[:12]
cache_name = f"vovominic-v-{version}"

precache_json = ",\n  ".join(f'"{a}"' for a in precache)
cdn_json = ",\n  ".join(f'"{c}"' for c in cdn)

sw = f'''/* ============================================================
   SERVICE WORKER — Vovôminic Doutô
   Gerado por build/build_sw.py — NÃO editar à mão.
   Versão (hash de conteúdo): {version}
   Estratégia:
     - Pré-cache de index.html + {len(js_locais)} JS na instalação → offline total.
     - Navegação (SPA): cache-first com fallback ao index.
     - Assets locais: stale-while-revalidate (rápido + atualiza em 2º plano).
     - CDN (jsPDF): cache-first com tentativa de rede.
   ============================================================ */

const CACHE = "{cache_name}";

const PRECACHE = [
  {precache_json}
];

const CDN_ASSETS = [
  {cdn_json}
];

// INSTALL — pré-cacheia tudo (busca versões frescas com cache:reload)
self.addEventListener("install", (event) => {{
  event.waitUntil(
    caches.open(CACHE).then(async (cache) => {{
      // Locais: falha de 1 não derruba o resto
      await Promise.allSettled(
        PRECACHE.map((url) =>
          cache.add(new Request(url, {{ cache: "reload" }})).catch(() => null)
        )
      );
      // CDN: cross-origin, no-cors (resposta opaca, mas cacheável)
      await Promise.allSettled(
        CDN_ASSETS.map((url) =>
          fetch(url, {{ mode: "no-cors" }})
            .then((resp) => cache.put(url, resp))
            .catch(() => null)
        )
      );
      self.skipWaiting();
    }})
  );
}});

// ACTIVATE — remove caches de versões antigas
self.addEventListener("activate", (event) => {{
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
}});

// FETCH
self.addEventListener("fetch", (event) => {{
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  // Navegação (SPA com hash) → tenta rede, cai pro index cacheado offline
  if (req.mode === "navigate") {{
    event.respondWith(
      fetch(req).catch(() =>
        caches.match("index.html").then((r) => r || caches.match("./"))
      )
    );
    return;
  }}

  // Assets locais → stale-while-revalidate
  if (sameOrigin) {{
    event.respondWith(
      caches.open(CACHE).then((cache) =>
        cache.match(req).then((cached) => {{
          const network = fetch(req)
            .then((resp) => {{
              if (resp && resp.ok) cache.put(req, resp.clone());
              return resp;
            }})
            .catch(() => cached);
          return cached || network;
        }})
      )
    );
    return;
  }}

  // Cross-origin (CDN) → cache-first, tenta rede se faltar
  event.respondWith(
    caches.match(req).then((cached) =>
      cached ||
      fetch(req)
        .then((resp) => {{
          const clone = resp.clone();
          caches.open(CACHE).then((c) => c.put(req, clone)).catch(() => {{}});
          return resp;
        }})
        .catch(() => cached)
    )
  );
}});
'''

out = os.path.join(SITE, "service-worker.js")
with open(out, "w", encoding="utf-8") as f:
    f.write(sw)

print(f"✓ service-worker.js gerado")
print(f"  Versão (hash): {version}")
print(f"  Pré-cache: {len(precache)} assets locais (index + {len(js_locais)} JS)")
print(f"  CDN: {len(cdn)} ({', '.join(c.split('/')[-1] for c in cdn)})")
