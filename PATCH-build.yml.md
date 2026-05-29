# 🔧 Patch do `.github/workflows/build.yml` (copia-e-cola)

Seu pipeline hoje é:
`sync_index → make_snapshot → generator (SEO) → build_sw → commit`

O bundler entra **entre o generator e o build_sw** (assim o SW lê o index já
bundlado). O `sync_index` continua igual (ele re-expande o index pros geradores;
o bundler colapsa no fim — o index commitado fica estável, sem loop).

## Edição 1 — adicionar o passo (logo APÓS "Gerar páginas SEO + sitemap" e ANTES de "Gerar service worker")

```yaml
      - name: Bundle de dados (82 -> 1)
        env:
          SITE_DIR: ${{ github.workspace }}
        run: python3 tools/build_bundle.py
```

## Edição 2 — incluir `bundle-data.js` no commit

No passo "Commitar arquivos gerados", troque a linha do `git add`:

```yaml
          git add index.html p c f m sis sitemap.xml robots.txt service-worker.js tools/snapshot.json
```
por:
```yaml
          git add index.html bundle-data.js p c f m sis sitemap.xml robots.txt service-worker.js tools/snapshot.json
```

## Edição 3 (opcional, cinto e suspensório) — paths-ignore

Em `on: push: paths-ignore:` pode adicionar:
```yaml
      - 'bundle-data.js'
```
Não é estritamente necessário (o commit já tem `[skip ci]`), mas evita qualquer
disparo extra.

## Pronto
Próximo push → a Action gera `bundle-data.js`, colapsa o index, o SW encolhe o
cache e o site passa a fazer ~16 requisições em vez de 97.
