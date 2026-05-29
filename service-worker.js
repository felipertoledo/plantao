/* ============================================================
   SERVICE WORKER — Vovôminic Doutô
   Gerado por build/build_sw.py — NÃO editar à mão.
   Versão (hash de conteúdo): 23caf32d68bf
   Estratégia:
     - Pré-cache de index.html + 93 JS na instalação → offline total.
     - Navegação (SPA): cache-first com fallback ao index.
     - Assets locais: stale-while-revalidate (rápido + atualiza em 2º plano).
     - CDN (jsPDF): cache-first com tentativa de rede.
   ============================================================ */

const CACHE = "vovominic-v-23caf32d68bf";

const PRECACHE = [
  "./",
  "index.html",
  "init.js",
  "pat-cardio.js",
  "pat-neuro.js",
  "pat-resp.js",
  "pat-gi.js",
  "pat-gu.js",
  "pat-endo-hidro.js",
  "pat-infecto.js",
  "pat-tox-pec.js",
  "pat-hemo.js",
  "pat-trauma.js",
  "pat-obst-gest.js",
  "pat-psiq.js",
  "pat-ost-derm-oft.js",
  "pat-pali.js",
  "pat-emerg-anaf.js",
  "pat-docs-legal.js",
  "pat-proc.js",
  "pat-pulo.js",
  "pat-vacina.js",
  "pat-ubs-vacina.js",
  "pat-cron.js",
  "pat-saude-mental-mfc.js",
  "pat-idoso-mfc.js",
  "pat-rastreio.js",
  "pat-cardio-mfc.js",
  "pat-osteo-mfc.js",
  "pat-gu-mfc.js",
  "pat-endo-mfc.js",
  "pat-gi-mfc.js",
  "pat-neuro-mfc.js",
  "pat-resp-mfc.js",
  "pat-infecto-mfc.js",
  "pat-derm-mfc.js",
  "pat-oft-mfc.js",
  "pat-obst-mfc.js",
  "pat-psiq-mfc-tier2.js",
  "pat-neuro-mfc-tier2.js",
  "pat-infecto-mfc-tier2.js",
  "pat-ost-reumato-mfc-tier2.js",
  "pat-gi-mfc-tier2.js",
  "pat-resp-mfc-tier2.js",
  "pat-endo-mfc-tier2.js",
  "pat-neuro-mfc-tier2.js",
  "meds-cardio-uti.js",
  "meds-anti-hipertensivos.js",
  "meds-anticoag-lipemiante.js",
  "meds-analgesia.js",
  "meds-sedacao.js",
  "meds-atb.js",
  "meds-neuro.js",
  "meds-psiq.js",
  "meds-resp.js",
  "meds-alergia.js",
  "meds-endo.js",
  "meds-gi.js",
  "meds-pali.js",
  "meds-ost.js",
  "meds-gineco.js",
  "meds-pcdt-infecto.js",
  "meds-derm.js",
  "calcs-cardio.js",
  "calcs-neuro.js",
  "calcs-resp-infecto.js",
  "calcs-gi.js",
  "calcs-hemo-hidro.js",
  "calcs-pali.js",
  "calcs-outros.js",
  "calcs-psiq.js",
  "calcs-geriatria.js",
  "calcs-aps.js",
  "calcs-dor-toracica.js",
  "calcs-aga.js",
  "ui-conversores.js",
  "flows-cardio-resp.js",
  "flows-emerg.js",
  "flows-pali.js",
  "flows-outros.js",
  "flows-mfc.js",
  "ui-figuras-cardio.js",
  "indexes.js",
  "ui-ciap.js",
  "ui-figs-apply.js",
  "ui-contexto.js",
  "meds-psiq-amp.js",
  "meds-psiq-extra.js",
  "meds-psiq-extra2.js",
  "pat-psiq-exame.js",
  "calcs-psiq-extra.js",
  "app.js",
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
