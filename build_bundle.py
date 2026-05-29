#!/usr/bin/env python3
"""
build_bundle.py  -  Concatena os arquivos de DADOS do site (pat-*.js, meds-*.js,
calcs*.js, flows*.js) num unico bundle-data.js e reescreve o index.html para
carregar 1 arquivo no lugar de dezenas. Reduz o numero de requisicoes HTTP
(91 -> ~3-5) SEM mexer nos arquivos-fonte, que voce continua editando normal.

Caracteristicas de seguranca:
  - GLOB no disco (fonte da verdade) -> idempotente, pode rodar a cada push.
  - Prelude de inicializacao dos arrays globais (PATOLOGIAS/MEDICACOES/CALCS/
    FLOWS) -> protege a ordem de carga independente de onde eram inicializados.
  - NUNCA apaga arquivo-fonte. Apenas (re)gera bundle-data.js e ajusta o index.
  - Insere o bundle ANTES da tag do app.js (o renderizador), garantindo que os
    dados existam quando o app roda. Ambos sao 'defer' -> ordem do documento.
  - Idempotente: rodar varias vezes deixa o index sempre com 1 tag de bundle.
"""
import re, sys, pathlib, glob, os

ROOT = pathlib.Path(os.environ.get("SITE_DIR")
                    or pathlib.Path(__file__).resolve().parent.parent)  # raiz do repo
INDEX = ROOT / "index.html"
BUNDLE_NAME = "bundle-data.js"
APP_JS = "app.js"   # renderizador/roteador; o bundle entra logo ANTES dele

# Padroes dos arquivos que empurram para os arrays globais (.push)
DATA_GLOBS = ["pat-*.js", "meds-*.js", "calcs*.js", "flows*.js",
              "data*.js", "conversores*.js"]   # data*/conversores: heranca emergencia

# arrays globais que os arquivos de dados populam
GLOBALS = ["PATOLOGIAS", "MEDICACOES", "CALCS", "FLOWS"]

SCRIPT_RE = re.compile(
    r'[ \t]*<script\b[^>]*\bsrc=["\']([^"\']+)["\'][^>]*>\s*</script>\s*\n?',
    re.IGNORECASE)

def base_of(src):
    return src.split("/")[-1].split("?")[0]

def is_data_src(src):
    b = base_of(src)
    if b == BUNDLE_NAME:
        return False
    return any(pathlib.PurePath(b).match(g) for g in DATA_GLOBS)

def collect_data_files():
    files = []
    seen = set()
    for g in DATA_GLOBS:
        for fp in sorted(ROOT.glob(g)):
            name = fp.name
            if name == BUNDLE_NAME or name in seen:
                continue
            seen.add(name)
            files.append(fp)
    return files

def main():
    if not INDEX.exists():
        print(f"x index.html nao encontrado em {INDEX}"); sys.exit(1)

    data_files = collect_data_files()
    if not data_files:
        print("i Nenhum arquivo de dados (pat-/meds-/calcs/flows) no disco. Nada a fazer.")
        return

    # 1) Montar o bundle: prelude de init + cada arquivo, em ordem deterministica
    prelude = ("/* " + BUNDLE_NAME + " - GERADO por tools/build_bundle.py. NAO editar a mao.\n"
               "   Edite os arquivos-fonte (pat-*.js, meds-*.js, ...) e rode o build. */\n"
               "(function(){\n"
               + "".join(f"  window.{g} = window.{g} || [];\n" for g in GLOBALS)
               + "})();\n")
    chunks = [prelude]
    for fp in data_files:
        chunks.append(f"\n/* ===== {fp.name} ===== */\n")
        chunks.append(fp.read_text(encoding="utf-8"))
        if not chunks[-1].endswith("\n"):
            chunks.append("\n")
    (ROOT / BUNDLE_NAME).write_text("".join(chunks), encoding="utf-8")
    kb = (ROOT / BUNDLE_NAME).stat().st_size // 1024
    print(f"OK  {BUNDLE_NAME} gerado: {len(data_files)} arquivos concatenados ({kb} KB)")

    # 2) Reescrever index.html
    html = INDEX.read_text(encoding="utf-8")
    tags = list(SCRIPT_RE.finditer(html))
    data_tags = [m for m in tags if is_data_src(m.group(1))]
    has_bundle = any(base_of(m.group(1)) == BUNDLE_NAME for m in tags)

    n_removed = len(data_tags)
    # remover todas as tags de dados individuais
    if data_tags:
        out, cursor = [], 0
        for m in data_tags:
            out.append(html[cursor:m.start()])
            cursor = m.end()
        out.append(html[cursor:])
        html = "".join(out)

    # garantir 1 tag de bundle, ANTES do app.js (ou antes de </body> como fallback)
    if not has_bundle:
        bundle_tag = f'  <script src="{BUNDLE_NAME}" defer></script>\n'
        app_re = re.compile(r'[ \t]*<script\b[^>]*\bsrc=["\'][^"\']*'
                            + re.escape(APP_JS) + r'["\'][^>]*>\s*</script>', re.IGNORECASE)
        m_app = app_re.search(html)
        if m_app:
            html = html[:m_app.start()] + bundle_tag + html[m_app.start():]
            anchor = f"antes de {APP_JS}"
        else:
            idx = html.lower().rfind("</body>")
            if idx == -1:
                idx = len(html)
            html = html[:idx] + bundle_tag + html[idx:]
            anchor = "antes de </body> (app.js nao localizado)"
        print(f"OK  tag <script {BUNDLE_NAME}> inserida ({anchor})")
    else:
        print(f"i  tag de bundle ja existia no index (mantida)")

    INDEX.write_text(html, encoding="utf-8")
    total_after = len([m for m in SCRIPT_RE.finditer(html)])
    print(f"OK  index.html: removidas {n_removed} tags de dados -> 1 bundle")
    print(f"    requisicoes de dados: {n_removed if n_removed else '(ja bundlado)'} -> 1")

if __name__ == "__main__":
    main()
