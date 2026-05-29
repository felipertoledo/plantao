# ⚡ Bundling — item #3 (Performance)  ·  VERIFICADO NO REPO REAL

## Resultado medido no seu index.html real
- **97 → 16 tags `<script>`** (os **82 arquivos de dados → 1** `bundle-data.js`).
- `bundle-data.js` = ~4.1 MB, **JS válido** (node -c OK).
- Ordem garantida: `init.js → bundle-data.js → app.js` ✓
- **Bônus:** `pat-neuro-mfc-tier2.js` estava registrado **2×** no index (carga
  dupla). O bundler deduplica → corrige esse bug de brinde.
- Arquivos de UI (`ui-*.js`, `pdf-generator.js`, `indexes.js`) ficam **separados**
  de propósito (bundlar lógica é arriscado; o ganho grande está nos dados).

## Sinergia com o offline (#1) — confirmada
Seu `build_sw.py` monta o pré-cache **lendo as tags `<script>` do index.html**.
Depois do bundle, o index lista `bundle-data.js` (não os 91 JS), então o service
worker passa a cachear **1 arquivo de dados** em vez de 93. O cache offline
encolhe sozinho, sem tocar no SW.

## Como fica seguro / idempotente
- Varre o disco (fonte da verdade) → roda a cada push sem duplicar.
- Nunca apaga arquivo-fonte; só (re)gera `bundle-data.js` e ajusta o index.
- Prelude inicializa `PATOLOGIAS/MEDICACOES/CALCS/FLOWS` → ordem nunca quebra
  (mesmo que o `init.js` já as inicialize — é defensivo).
- Honra `SITE_DIR` igual aos outros scripts do pipeline.

## Deploy — 2 passos (ver PATCH-build.yml.md para o copia-e-cola exato)
1. Subir `tools/build_bundle.py` no repo.
2. Editar `.github/workflows/build.yml`: adicionar o passo do bundle **antes** do
   `build_sw` e incluir `bundle-data.js` no `git add`. Push → a Action faz o resto.

(Alternativa sem Action: rodar `python3 tools/build_bundle.py` local e subir
`bundle-data.js` + `index.html`.)
