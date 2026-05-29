#!/usr/bin/env python3
"""
sync_index.py — registra automaticamente no index.html qualquer arquivo de
dados (pat-*.js, meds-*.js, calcs*.js, flows*.js) que esteja no repositório
mas SEM a tag <script> correspondente.

Garante que conteúdo novo nunca fique "invisível" por falta de registro.
Idempotente: rodar várias vezes não duplica nada.
Insere as tags faltantes logo ANTES de <script src="app.js"> (depois do
init.js e dos demais dados, antes do consumidor).

Uso: python3 tools/sync_index.py
Env: SITE_DIR (default = diretório pai de tools/)
"""
import os, re, sys

SITE = os.environ.get("SITE_DIR") or os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
INDEX = os.path.join(SITE, "index.html")

DATA_PREFIXES = ("pat-", "meds-", "calcs", "flows")
# Nunca registrar como "dados" (são consumidores / infra / não-dados):
EXCLUDE = {"app.js", "init.js", "service-worker.js"}

def is_data_file(fname):
    if fname in EXCLUDE:
        return False
    return fname.endswith(".js") and fname.startswith(DATA_PREFIXES)

def main():
    if not os.path.exists(INDEX):
        print(f"⚠ index.html não encontrado em {INDEX}", file=sys.stderr)
        return 1

    with open(INDEX, encoding="utf-8") as f:
        html = f.read()

    # Arquivos de dados presentes no repositório
    data_files = sorted(f for f in os.listdir(SITE) if is_data_file(f))

    # Já registrados no index
    registrados = set(re.findall(r'<script src="([^"]+\.js)"', html))

    faltando = [f for f in data_files if f not in registrados]

    if not faltando:
        print("✓ index.html já registra todos os arquivos de dados — nada a fazer.")
        return 0

    # Bloco a inserir, ordenado (pat- antes de meds- só por organização visual)
    novas_tags = "\n".join(f'<script src="{f}" defer></script>' for f in faltando)
    marcador_inicio = "<!-- auto-registrado por tools/sync_index.py -->"
    bloco = f"{marcador_inicio}\n{novas_tags}\n"

    # Ponto de inserção: imediatamente antes da tag do app.js (consumidor dos dados)
    m = re.search(r'([ \t]*)<script src="app\.js"[^>]*></script>', html)
    if m:
        indent = m.group(1)
        # Reindentar o bloco
        bloco_ind = "\n".join(indent + l if l else l for l in bloco.split("\n"))
        html = html[:m.start()] + bloco_ind + "\n" + html[m.start():]
    else:
        # Fallback: antes de </body>
        idx = html.rfind("</body>")
        if idx == -1:
            print("⚠ não achei <script app.js> nem </body> — abortando para não corromper.", file=sys.stderr)
            return 1
        html = html[:idx] + bloco + html[idx:]

    with open(INDEX, "w", encoding="utf-8") as f:
        f.write(html)

    print(f"✓ Registrados {len(faltando)} arquivo(s) que estavam faltando no index.html:")
    for f in faltando:
        print(f"    + {f}")
    return 0

if __name__ == "__main__":
    sys.exit(main())
