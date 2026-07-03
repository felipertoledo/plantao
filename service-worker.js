/* ============================================================
   SERVICE WORKER — Vovôminic Doutô
   Gerado por build/build_sw.py — NÃO editar à mão.
   Versão (hash de conteúdo): cd14e31ebf96
   Estratégia:
     - Pré-cache de index.html + 13 JS na instalação → offline total.
     - Navegação (SPA): cache-first com fallback ao index.
     - Assets locais: stale-while-revalidate (rápido + atualiza em 2º plano).
     - CDN (jsPDF): cache-first com tentativa de rede.
   ============================================================ */

const CACHE = "vovominic-v-cd14e31ebf96";

const PRECACHE = [
  "./",
  "index.html",
  "init.js",
  "bundle-data.js",
  "ui-conversores.js",
  "ui-figuras-cardio.js",
  "indexes.js",
  "ui-ciap.js",
  "ui-figs-apply.js",
  "ui-contexto.js",
  "app.js",
  "ui-a11y.js",
  "ui-extensions.js",
  "pdf-generator.js",
  "ui-consulta.js"
];

const CDN_ASSETS = [
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
];

// INSTALL — pré-cacheia tudo (busca versões frescas com cache:reload)
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then(async (cache) => {
      // Locais: falha de 1 não derruba o resto
      await Promise.allSettled(
        PRECACHE.map((url) =>
          cache.add(new Request(url, { cache: "reload" })).catch(() => null)
        )
      );
      // CDN: cross-origin, no-cors (resposta opaca, mas cacheável)
      await Promise.allSettled(
        CDN_ASSETS.map((url) =>
          fetch(url, { mode: "no-cors" })
            .then((resp) => cache.put(url, resp))
            .catch(() => null)
        )
      );
      self.skipWaiting();
    })
  );
});

// ACTIVATE — remove caches de versões antigas
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// FETCH
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  // Navegação (SPA com hash) → tenta rede, cai pro index cacheado offline
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req).catch(() =>
        caches.match("index.html").then((r) => r || caches.match("./"))
      )
    );
    return;
  }

  // Assets locais → stale-while-revalidate
  if (sameOrigin) {
    event.respondWith(
      caches.open(CACHE).then((cache) =>
        cache.match(req).then((cached) => {
          const network = fetch(req)
            .then((resp) => {
              if (resp && resp.ok) cache.put(req, resp.clone());
              return resp;
            })
            .catch(() => cached);
          return cached || network;
        })
      )
    );
    return;
  }

  // Cross-origin (CDN) → cache-first, tenta rede se faltar
  event.respondWith(
    caches.match(req).then((cached) =>
      cached ||
      fetch(req)
        .then((resp) => {
          const clone = resp.clone();
          caches.open(CACHE).then((c) => c.put(req, clone)).catch(() => {});
          return resp;
        })
        .catch(() => cached)
    )
  );
});
