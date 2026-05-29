#!/usr/bin/env python3
"""
build_bundle.py  -  Concatena os arquivos de DADOS (pat-*.js, meds-*.js,
calcs*.js, flows*.js) num unico bundle-data.js e reescreve o index.html para
carregar 1 arquivo no lugar de dezenas. Reduz requisicoes HTTP sem mexer nos
arquivos-fonte (que voce continua editando).

POSICAO CRITICA: o bundle e inserido LOGO APOS o init.js (que declara os arrays
PATOLOGIAS/MEDICACOES/CALCS e o objeto FLOWS) e ANTES de qualquer consumidor
(indexes.js faz FLOWS_LIST = Object.keys(FLOWS) no load; precisa rodar DEPOIS
dos dados). Inserir antes do app.js quebrava os fluxogramas.

Seguranca: GLOB no disco (idempotente), nunca apaga fonte, remove tags de dados
E qualquer tag de bundle antiga (reposiciona corretamente a cada execucao).
"""
import re, sys, pathlib, os

ROOT = pathlib.Path(os.environ.get("SITE_DIR")
                    or pathlib.Path(__file__).resolve().parent.parent)  # raiz do repo
INDEX = ROOT / "index.html"
BUNDLE_NAME = "bundle-data.js"
INIT_JS = "init.js"   # declara os arrays/objeto; o bundle entra logo DEPOIS dele
APP_JS = "app.js"     # fallback

DATA_GLOBS = ["pat-*.js", "meds-*.js", "calcs*.js", "flows*.js",
              "data*.js", "conversores*.js"]
GLOBALS = ["PATOLOGIAS", "MEDICACOES", "CALCS"]   # arrays (FLOWS e objeto -> nao pre-init aqui)

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
    files, seen = [], set()
    for g in DATA_GLOBS:
        for fp in sorted(ROOT.glob(g)):
            if fp.name == BUNDLE_NAME or fp.name in seen:
                continue
            seen.add(fp.name); files.append(fp)
    return files

def main():
    if not INDEX.exists():
        print(f"x index.html nao encontrado em {INDEX}"); sys.exit(1)

    data_files = collect_data_files()
    if not data_files:
        print("i Nenhum arquivo de dados no disco. Nada a fazer."); return

    # 1) Gerar bundle: prelude (so arrays; FLOWS e objeto, init.js cuida) + arquivos
    prelude = ("/* " + BUNDLE_NAME + " - GERADO por tools/build_bundle.py. NAO editar a mao.\n"
               "   Edite os arquivos-fonte (pat-*.js, meds-*.js, ...) e rode o build. */\n"
               "(function(){\n"
               + "".join(f"  window.{g} = window.{g} || [];\n" for g in GLOBALS)
               + "  window.FLOWS = window.FLOWS || {};\n"
               + "})();\n")
    chunks = [prelude]
    for fp in data_files:
        chunks.append(f"\n/* ===== {fp.name} ===== */\n")
        t = fp.read_text(encoding="utf-8")
        chunks.append(t if t.endswith("\n") else t + "\n")
    (ROOT / BUNDLE_NAME).write_text("".join(chunks), encoding="utf-8")
    kb = (ROOT / BUNDLE_NAME).stat().st_size // 1024
    print(f"OK  {BUNDLE_NAME}: {len(data_files)} arquivos concatenados ({kb} KB)")

    # 2) Reescrever index: remover TODAS as tags de dados E a tag de bundle antiga
    html = INDEX.read_text(encoding="utf-8")
    tags = list(SCRIPT_RE.finditer(html))
    to_remove = [m for m in tags if is_data_src(m.group(1)) or base_of(m.group(1)) == BUNDLE_NAME]
    n_data = sum(1 for m in tags if is_data_src(m.group(1)))
    if to_remove:
        out, cursor = [], 0
        for m in to_remove:
            out.append(html[cursor:m.start()]); cursor = m.end()
        out.append(html[cursor:])
        html = "".join(out)

    bundle_tag = f'  <script src="{BUNDLE_NAME}" defer></script>\n'

    # 3) Inserir o bundle LOGO APOS o init.js (antes de indexes.js e demais consumidores)
    init_re = re.compile(r'[ \t]*<script\b[^>]*\bsrc=["\'][^"\']*' + re.escape(INIT_JS)
                         + r'["\'][^>]*>\s*</script>[ \t]*\n?', re.IGNORECASE)
    m_init = init_re.search(html)
    if m_init:
        html = html[:m_init.end()] + bundle_tag + html[m_init.end():]
        anchor = f"apos {INIT_JS}"
    else:
        app_re = re.compile(r'[ \t]*<script\b[^>]*\bsrc=["\'][^"\']*' + re.escape(APP_JS)
                            + r'["\'][^>]*>\s*</script>', re.IGNORECASE)
        m_app = app_re.search(html)
        if m_app:
            html = html[:m_app.start()] + bundle_tag + html[m_app.start():]; anchor = f"antes de {APP_JS} (init.js nao achado)"
        else:
            idx = html.lower().rfind("</body>"); idx = idx if idx != -1 else len(html)
            html = html[:idx] + bundle_tag + html[idx:]; anchor = "antes de </body>"

    INDEX.write_text(html, encoding="utf-8")
    print(f"OK  tag de bundle posicionada: {anchor}")
    print(f"OK  index: removidas {n_data} tags de dados (+ bundle antigo se havia) -> 1 bundle")

if __name__ == "__main__":
    main()
