# 🚀 Melhorias de alto impacto — SEO das medicações + Offline real

Duas das três alavancas de maior impacto, implementadas e testadas.

## ✅ O que foi feito

### 1. Offline de verdade (Service Worker real)
- **Antes:** SW gerado via Blob URL (escopo limitado → não cacheava a navegação de forma confiável; o site não abria offline na UBS).
- **Agora:** `service-worker.js` real na raiz que **pré-cacheia index.html + os 90 JS na 1ª visita**. Depois disso o site abre e navega **100% offline** — testado com simulação de install + fetch sem rede.
- `app.js` foi alterado para registrar o arquivo real (escopo relativo, funciona no subpath `/plantao/` do GitHub Pages).
- **Bônus:** como tudo fica em cache, as visitas seguintes ficam **instantâneas** — isso resolve a maior parte do problema de performance (as 91 requisições só pesam na 1ª visita).

### 2. SEO das medicações — 308 páginas novas
- **Antes:** 396 páginas de patologias indexáveis, **0 de medicações**.
- **Agora:** 308 páginas `/m/med-*.html`, cada uma com título otimizado ("Lurasidona — dose, indicações, efeitos | bula resumida"), meta description, **schema.org Drug**, e 12 seções ricas (dose, indicações, mecanismo, efeitos, interações, contraindicações, SUS...). É exatamente o que estudante busca no Google.
- **Sitemap saltou de 548 → 861 URLs.**

## 📦 Como subir — escolha UM caminho

### Caminho A (RECOMENDADO) — GitHub Action automática
Resolve a logística dos 308 arquivos E a desincronia sandbox↔produção de uma vez. Você continua editando `pat-*.js` / `meds-*.js` / `index.html` normalmente; a Action regenera SEO + service worker sozinha a cada push.

Suba apenas os arquivos da pasta **`deploy-automatico/`** (poucos):
1. `app.js` (substitui o atual)
2. `tools/make_snapshot.js`, `tools/generator.py`, `tools/build_sw.py` (novos)
3. `.github/workflows/build.yml` (novo)

Depois, **uma vez só**, habilite a permissão de escrita da Action:
- Settings → Actions → General → Workflow permissions → marque **"Read and write permissions"** → Save

No próximo push (ou rode manualmente em Actions → "Build SEO + Service Worker" → Run workflow), ela gera e commita sozinha: `p/`, `c/`, `f/`, `m/` (308), `sis/`, `sitemap.xml`, `robots.txt`, `service-worker.js`.

### Caminho B — Manual (sem Action)
Se preferir subir agora sem mexer em Action: use a pasta **`estaticos-gerados/`** (já tem as 308 páginas + sitemap + robots + service-worker.js prontos) e suba via `git`:
```
git add m/ sitemap.xml robots.txt service-worker.js app.js
git commit -m "feat: SEO medicações + service worker offline"
git push
```
(Subir 308 arquivos pela interface web é inviável — por isso a Action é melhor.)

## ⚠ Importante
- O `service-worker.js` tem uma **versão por hash**: sempre que mudar os JS, ele muda sozinho e invalida o cache antigo dos usuários. Com a Action, isso é automático. Manual, rode `python3 tools/build_sw.py` antes de subir.
- A 3ª alavanca (bundling dos 91 JS) **ficou em grande parte resolvida pelo service worker** — ver nota no chat.

## Validação
```
✓ 308 páginas de medicação · schema.org Drug · HTML válido
✓ Sitemap 861 URLs
✓ Service worker: install cacheia 92 assets · navegação + assets offline OK (testado)
✓ Scripts portáveis (rodam local e na Action)
✓ app.js / service-worker.js / generator.py — sintaxe validada
```
