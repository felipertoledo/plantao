#!/usr/bin/env python3
"""
Gerador de páginas estáticas SEO para Vovôminic Doutô.
Lê /tmp/snapshot.json e produz HTMLs pré-renderizados em /home/claude/plantao-flat/p/, /c/, /f/
Cada página:
  - HTML real (não SPA) com conteúdo indexável
  - Schema.org MedicalCondition / MedicalGuideline / SoftwareApplication
  - Open Graph + Twitter Cards
  - Canonical link
  - Breadcrumbs estruturados
  - Link de volta para o app SPA com o anchor correto
"""
import json
import os
import re
from html import escape
from datetime import datetime
from urllib.parse import quote

# Configuração
BASE_URL = "https://felipertoledo.github.io/plantao"
SITE_NAME = "Vovôminic Doutô"
SITE_TAGLINE = "Tudo o que chega à porta"
AUTHOR_NAME = "Felipe Ribeiro Toledo"
AUTHOR_HANDLE = "vovôminic"
AUTHOR_BIO_SHORT = "médico e nerd"
TODAY = datetime.now().strftime("%Y-%m-%d")

OUT_DIR = os.environ.get("SITE_DIR") or os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
SNAPSHOT = os.environ.get("SNAPSHOT") or os.path.join(os.path.dirname(__file__), "snapshot.json")
P_DIR = os.path.join(OUT_DIR, "p")  # patologias
C_DIR = os.path.join(OUT_DIR, "c")  # calculadoras
F_DIR = os.path.join(OUT_DIR, "f")  # fluxogramas
M_DIR = os.path.join(OUT_DIR, "m")  # medicações

# Nomes de sistemas pra meta tags
SIS_NOMES = {
    "cardio":"Cardiovascular","cron":"Crônico","derm":"Dermatologia",
    "docs":"Documentos legais","anaf":"Anafilaxia","anal":"Analgesia",
    "iot":"IOT/Sedação","vaso":"Vasoativo","endo":"Endocrinologia",
    "hidro":"Hidroeletrolítico","gi":"Gastrointestinal","hemo":"Hematologia",
    "gu":"Geniturinário","idoso":"Saúde do idoso","infecto":"Infectologia",
    "neuro":"Neurologia","gest":"Gestação","obst":"Obstetrícia",
    "oft":"Oftalmologia","ost":"Osteomuscular","pali":"Cuidados paliativos",
    "proc":"Procedimentos","psiq":"Psiquiatria","pulo":"Pulmonar/Respiratório",
    "rastreio":"Rastreamento oncológico","resp":"Respiratório","smen":"Saúde mental",
    "pec":"Peçonhentos","tox":"Toxicologia","trauma":"Trauma","vacina":"Vacinação",
}

GRAV_LABELS = {
    "alta":"Alta gravidade","media":"Média gravidade","baixa":"Baixa gravidade",
    "crit":"Crítica","warn":"Atenção","info":"Informativa",
}

CTX_LABELS = {
    "pa":"Pronto-Atendimento","ubs":"UBS / Atenção Primária",
}

def slug(s):
    """ID já é slug — só sanitiza."""
    s = re.sub(r'[^a-z0-9-]', '-', s.lower())
    s = re.sub(r'-+', '-', s).strip('-')
    return s

def html_head(title, description, canonical_path, og_type="article", json_ld_extra=None):
    """Cabeçalho HTML comum a todas páginas estáticas."""
    title_full = f"{title} — {SITE_NAME}"
    canonical = f"{BASE_URL}{canonical_path}"
    
    # Schema.org base — WebSite + Person como autor
    schema_blocks = []
    schema_blocks.append({
        "@context":"https://schema.org",
        "@type":"WebSite",
        "name":SITE_NAME,
        "alternateName":"Plantão Vovôminic",
        "url":BASE_URL,
        "description":"Guia clínico de Pronto-Atendimento, UPA e UBS no SUS — adulto e idoso. Patologias, medicações, calculadoras e fluxogramas baseados em diretrizes brasileiras."
    })
    schema_blocks.append({
        "@context":"https://schema.org",
        "@type":"Person",
        "@id":f"{BASE_URL}/#author",
        "name":AUTHOR_NAME,
        "alternateName":AUTHOR_HANDLE,
        "description":AUTHOR_BIO_SHORT,
        "url":BASE_URL
    })
    if json_ld_extra:
        if isinstance(json_ld_extra, list):
            schema_blocks.extend(json_ld_extra)
        else:
            schema_blocks.append(json_ld_extra)
    
    json_ld = "\n".join(
        f'<script type="application/ld+json">{json.dumps(b, ensure_ascii=False)}</script>'
        for b in schema_blocks
    )
    
    return f'''<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{escape(title_full)}</title>
<meta name="description" content="{escape(description)}">
<link rel="canonical" href="{canonical}">
<meta name="author" content="{escape(AUTHOR_NAME)}">
<meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1">

<meta property="og:type" content="{og_type}">
<meta property="og:site_name" content="{SITE_NAME}">
<meta property="og:title" content="{escape(title)}">
<meta property="og:description" content="{escape(description)}">
<meta property="og:url" content="{canonical}">
<meta property="og:locale" content="pt_BR">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{escape(title)}">
<meta name="twitter:description" content="{escape(description)}">

<style>
:root {{
  --ink:#1a1d23; --ink-2:#3a4047; --ink-3:#6b727b; --rule:#d8dde3; --rule-2:#b8bec5;
  --bg:#fafaf7; --bg-elev:#fff; --bg-sunken:#f3f4f0;
  --accent:#a82a3a; --accent-2:#7c1f2b;
  --radius:8px; --maxw:780px;
  --font-display:Georgia,'Times New Roman',serif;
  --font-body:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
}}
* {{ box-sizing:border-box; }}
body {{ margin:0; padding:0; background:var(--bg); color:var(--ink); font-family:var(--font-body); line-height:1.55; }}
.container {{ max-width:var(--maxw); margin:0 auto; padding:1.5rem 1.1rem 3rem; }}
.bar {{ background:#1a1d23; color:#fff; padding:0.7rem 1.1rem; font-size:0.9rem; }}
.bar a {{ color:#fff; text-decoration:none; font-weight:500; }}
.bar a:hover {{ text-decoration:underline; }}
nav.crumb {{ font-size:0.82rem; color:var(--ink-3); margin-bottom:0.6rem; }}
nav.crumb a {{ color:var(--accent); text-decoration:none; }}
nav.crumb a:hover {{ text-decoration:underline; }}
.eyebrow {{ display:inline-block; font-size:0.75rem; text-transform:uppercase; letter-spacing:0.14em; color:var(--accent); font-weight:600; margin-bottom:0.5rem; border-bottom:1px solid var(--accent); padding-bottom:3px; }}
h1 {{ font-family:var(--font-display); font-size:2rem; letter-spacing:-0.02em; line-height:1.15; margin:0.2rem 0 0.7rem; }}
h2 {{ font-family:var(--font-display); font-size:1.35rem; margin:1.8rem 0 0.6rem; line-height:1.25; }}
h3 {{ font-size:1.05rem; margin:1.2rem 0 0.4rem; color:var(--ink); }}
p {{ margin:0.6rem 0; }}
.lead {{ font-size:1.08rem; color:var(--ink-2); margin:0.6rem 0 1rem; }}
.meta {{ display:flex; flex-wrap:wrap; gap:0.4rem; margin:0.8rem 0; font-size:0.83rem; }}
.tag {{ display:inline-block; padding:0.25rem 0.55rem; background:var(--bg-elev); border:1px solid var(--rule); border-radius:4px; color:var(--ink-2); }}
.tag.crit {{ background:#fbeaea; border-color:#e8c1c1; color:#7a1f1f; }}
.tag.warn {{ background:#fcf2dd; border-color:#e8d49a; color:#7a521f; }}
.tag.info {{ background:#e6f0fa; border-color:#bdd5ec; color:#1a466e; }}
.tag.ok {{ background:#e6f5ec; border-color:#b9d9c4; color:#1a5e2e; }}
ul, ol {{ padding-left:1.4rem; margin:0.5rem 0 1rem; }}
li {{ margin:0.35rem 0; }}
.callout {{ background:var(--bg-elev); border:1px solid var(--rule); border-left:3px solid var(--accent); border-radius:var(--radius); padding:0.85rem 1.1rem; margin:1rem 0; }}
.callout.crit {{ border-left-color:#a82a3a; background:#fdf3f3; }}
.callout.warn {{ border-left-color:#c89218; background:#fcf6e8; }}
.cite {{ font-size:0.85rem; color:var(--ink-3); margin-top:1.4rem; padding-top:1rem; border-top:1px solid var(--rule); }}
.app-cta {{ background:#1a1d23; color:#fff; padding:1.3rem 1.4rem; border-radius:var(--radius); margin:2rem 0 1.5rem; }}
.app-cta h3 {{ color:#fff; margin:0 0 0.4rem; }}
.app-cta p {{ color:#cfd2d6; margin:0 0 0.9rem; }}
.app-cta a {{ display:inline-block; padding:0.65rem 1.2rem; background:var(--accent); color:#fff; text-decoration:none; border-radius:6px; font-weight:500; }}
.app-cta a:hover {{ background:var(--accent-2); }}
footer {{ margin-top:3rem; padding-top:1.4rem; border-top:1px solid var(--rule); font-size:0.85rem; color:var(--ink-3); }}
footer a {{ color:var(--accent); text-decoration:none; }}
.sibling {{ display:flex; align-items:center; gap:0.85rem; padding:0.85rem 1rem; background:var(--bg-elev); border:1px solid var(--rule); border-left:3px solid #ec6191; border-radius:var(--radius); text-decoration:none; color:var(--ink); margin:1rem 0; }}
.sibling:hover {{ background:var(--bg-sunken); }}
.sibling .ic {{ width:36px; height:36px; border-radius:50%; background:rgba(236,97,145,0.12); color:#ec6191; display:flex; align-items:center; justify-content:center; font-size:1.2rem; flex-shrink:0; }}
.sibling .body {{ flex:1; min-width:0; }}
.sibling .k {{ font-size:0.78rem; color:var(--ink-3); display:block; }}
.sibling .t {{ font-size:0.96rem; font-weight:600; color:var(--ink); font-family:var(--font-display); }}
.sibling .arr {{ color:#ec6191; font-weight:600; }}
.related {{ margin:1.6rem 0; }}
.related h3 {{ font-size:0.92rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--ink-3); margin-bottom:0.5rem; }}
.related ul {{ list-style:none; padding:0; margin:0; display:flex; flex-wrap:wrap; gap:0.4rem; }}
.related li {{ margin:0; }}
.related a {{ display:inline-block; padding:0.3rem 0.7rem; background:var(--bg-elev); border:1px solid var(--rule); border-radius:4px; color:var(--ink-2); text-decoration:none; font-size:0.85rem; }}
.related a:hover {{ border-color:var(--accent); color:var(--accent); }}
.disclaimer {{ background:var(--bg-sunken); border:1px solid var(--rule); border-left:3px solid #c89218; border-radius:var(--radius); padding:0.9rem 1.1rem; margin:1.4rem 0; font-size:0.88rem; color:var(--ink-2); }}
.disclaimer strong {{ color:var(--ink); }}
.disclaimer-footer {{ font-size:0.82rem; color:var(--ink-3); padding:0.9rem 0; border-top:1px solid var(--rule); margin-top:1.2rem; }}
@media (prefers-color-scheme:dark) {{
  :root {{ --ink:#e8e8e3; --ink-2:#b0b4ba; --ink-3:#8d9197; --rule:#3a3e44; --rule-2:#525860; --bg:#15171a; --bg-elev:#1e2125; --bg-sunken:#26292d; --accent:#e8526a; --accent-2:#f47482; }}
  .tag.crit {{ background:#3a1818; border-color:#5e2828; color:#f0a0a0; }}
  .tag.warn {{ background:#3a2e10; border-color:#5e4a18; color:#f0c878; }}
  .tag.info {{ background:#152838; border-color:#244258; color:#7eb4dc; }}
  .tag.ok {{ background:#163020; border-color:#244e34; color:#88c898; }}
  .callout.crit {{ background:#2a1818; }}
  .callout.warn {{ background:#2a2210; }}
}}
</style>
{json_ld}
</head>
<body>
<div class="bar"><a href="{BASE_URL}/">← {SITE_NAME}</a> · por {AUTHOR_HANDLE}</div>
'''

def html_footer():
    return f'''
<footer>
  <div class="disclaimer-footer">
    <strong>Aviso médico-legal:</strong> material educacional. Informações podem conter erros ou estar desatualizadas — sempre verifique nas diretrizes-fonte. A responsabilidade da prescrição é exclusivamente do médico assistente. O autor não se responsabiliza por decisões clínicas ou desfechos decorrentes do uso destas informações.
  </div>
  <p><strong>{SITE_NAME}</strong> — {SITE_TAGLINE}.</p>
  <p>Material educacional sem fins lucrativos. Cada conduta cita a diretriz fonte. Atualização contínua.</p>
  <p><a href="{BASE_URL}/">Página inicial</a> · <a href="{BASE_URL}/#/sobre">Sobre o projeto</a> · <a href="https://felipertoledo.github.io/Whitepobre2/">WhitePobre Pediatria (site irmão)</a></p>
</footer>
</body>
</html>'''

def render_alertas(alertas):
    """Renderiza lista de alertas estruturados."""
    if not alertas: return ""
    out = ['<h2>Alertas clínicos</h2>']
    for a in alertas:
        nivel = a.get("nivel") or a.get("t") or "info"
        txt = a.get("txt") or a.get("d") or a.get("x") or ""
        nivel_l = nivel.lower() if isinstance(nivel, str) else "info"
        cls = "crit" if nivel_l in ("crit","red","critico","critical") else ("warn" if nivel_l in ("warn","amarelo","atencao") else "info")
        out.append(f'<div class="callout {cls}"><p>{escape(txt)}</p></div>')
    return "\n".join(out)

def render_sintomas(sintomas):
    if not sintomas: return ""
    out = ['<h2>Apresentação clínica</h2><ul>']
    for s in sintomas:
        out.append(f'<li>{escape(s)}</li>')
    out.append('</ul>')
    return "\n".join(out)

def render_block(title, content):
    if not content: return ""
    return f'<h2>{escape(title)}</h2>\n<p>{escape(content)}</p>'

def gerar_patologia(pat, sistemas_idx):
    """Gera HTML estático para uma patologia."""
    pid = pat["id"]
    nome = pat["nome"]
    sis = pat.get("sis","")
    sis_nome = SIS_NOMES.get(sis, sis)
    grav = pat.get("grav","")
    cid = pat.get("cid","")
    ciap = pat.get("ciap","")
    contexto = pat.get("contexto",[])
    ctx_lista = ", ".join(CTX_LABELS.get(c,c) for c in contexto)
    
    sinonimos = pat.get("sin",[])
    sin_str = ", ".join(sinonimos) if sinonimos else ""
    
    definicao = pat.get("def","")
    intro = pat.get("intro","")
    fisio = pat.get("fisio","")
    apresentacao = pat.get("apresentacao","")
    sintomas = pat.get("sintomas",[])
    profilaxia = pat.get("profilaxia","")
    freire = pat.get("freire","")
    sus_tx = pat.get("sus_tx","")
    padrao_ouro = pat.get("padrao_ouro","")
    prog = pat.get("prog","")
    acomp = pat.get("acomp","")
    p4 = pat.get("p4","")
    alertas = pat.get("alertas",[])
    diretriz = pat.get("diretriz","")
    
    # Lead para SEO — primeiros 160 chars de def, sem quebra
    lead_seo = re.sub(r'\s+', ' ', definicao)[:300]
    meta_description = f"{nome}. {lead_seo[:155]}".strip()[:160]
    if not meta_description.endswith('.'):
        meta_description = meta_description.rsplit(' ', 1)[0] + "."
    
    # Title otimizado
    cid_str = f" — CID {cid}" if cid else ""
    title_seo = f"{nome}{cid_str}"
    
    # Keywords implícitas
    keywords = [nome, sis_nome, "SUS", "UBS", "Pronto-Atendimento"] + sinonimos[:5]
    if cid: keywords.append(f"CID {cid}")
    if ciap: keywords.append(f"CIAP {ciap}")
    
    canonical_path = f"/p/{pid}.html"
    
    # Schema.org MedicalCondition
    medical_schema = {
        "@context":"https://schema.org",
        "@type":"MedicalCondition",
        "@id":f"{BASE_URL}{canonical_path}#condition",
        "name":nome,
        "alternateName":sinonimos[:5],
        "description":lead_seo[:500],
        "code":{
            "@type":"MedicalCode",
            "codeValue":cid,
            "codingSystem":"ICD-10"
        } if cid else None,
        "associatedAnatomy":{"@type":"AnatomicalSystem","name":sis_nome} if sis_nome else None,
        "signOrSymptom":[{"@type":"MedicalSignOrSymptom","name":s[:200]} for s in sintomas[:8]] if sintomas else None,
        "epidemiology":intro[:500] if intro else None,
        "pathophysiology":fisio[:500] if fisio else None,
        "possibleTreatment":{
            "@type":"MedicalTherapy",
            "name":"Tratamento conforme diretrizes brasileiras (SUS)",
            "description":sus_tx[:500] if sus_tx else None
        } if sus_tx else None,
        "guideline":{
            "@type":"MedicalGuideline",
            "evidenceLevel":"https://schema.org/EvidenceLevelA",
            "guidelineSubject":diretriz[:300] if diretriz else None
        } if diretriz else None,
        "author":{"@id":f"{BASE_URL}/#author"},
        "datePublished":TODAY,
        "dateModified":TODAY,
        "inLanguage":"pt-BR"
    }
    # Limpa nulls
    medical_schema = {k:v for k,v in medical_schema.items() if v is not None}
    
    # Article schema também (boost para Google News-like)
    article_schema = {
        "@context":"https://schema.org",
        "@type":"MedicalScholarlyArticle",
        "headline":title_seo[:110],
        "description":meta_description,
        "author":{"@id":f"{BASE_URL}/#author"},
        "publisher":{
            "@type":"Organization",
            "name":SITE_NAME,
            "url":BASE_URL
        },
        "datePublished":TODAY,
        "dateModified":TODAY,
        "mainEntityOfPage":f"{BASE_URL}{canonical_path}",
        "about":{"@id":f"{BASE_URL}{canonical_path}#condition"},
        "inLanguage":"pt-BR",
        "keywords":", ".join(keywords[:12])
    }
    
    # Breadcrumb
    breadcrumb = {
        "@context":"https://schema.org",
        "@type":"BreadcrumbList",
        "itemListElement":[
            {"@type":"ListItem","position":1,"name":SITE_NAME,"item":BASE_URL},
            {"@type":"ListItem","position":2,"name":sis_nome,"item":f"{BASE_URL}/#/sis/{sis}"},
            {"@type":"ListItem","position":3,"name":nome,"item":f"{BASE_URL}{canonical_path}"}
        ]
    }
    
    head = html_head(
        title=title_seo,
        description=meta_description,
        canonical_path=canonical_path,
        og_type="article",
        json_ld_extra=[medical_schema, article_schema, breadcrumb]
    )
    
    # CTA app
    app_link = f"{BASE_URL}/#/pat/{pid}"
    
    blocks = []
    blocks.append('<nav class="crumb">')
    blocks.append(f'<a href="{BASE_URL}/">Início</a> › <a href="{BASE_URL}/#/sis/{sis}">{escape(sis_nome)}</a> › <span>{escape(nome)}</span>')
    blocks.append('</nav>')
    
    blocks.append(f'<span class="eyebrow">{escape(sis_nome)}</span>')
    blocks.append(f'<h1>{escape(nome)}</h1>')
    
    if intro:
        blocks.append(f'<p class="lead">{escape(intro[:400])}</p>')
    
    # Tags
    meta_tags = []
    if cid: meta_tags.append(f'<span class="tag">CID {escape(cid)}</span>')
    if ciap: meta_tags.append(f'<span class="tag">CIAP {escape(ciap)}</span>')
    if grav:
        cls = "crit" if grav == "alta" else ("warn" if grav == "media" else "info")
        meta_tags.append(f'<span class="tag {cls}">{escape(GRAV_LABELS.get(grav, grav))}</span>')
    for c in contexto:
        meta_tags.append(f'<span class="tag">{escape(CTX_LABELS.get(c,c))}</span>')
    if meta_tags:
        blocks.append('<div class="meta">' + "".join(meta_tags) + '</div>')
    
    if sin_str:
        blocks.append(f'<p><strong>Sinônimos:</strong> {escape(sin_str)}.</p>')
    
    # CTA app
    blocks.append(f'''<div class="app-cta">
<h3>Abra a conduta interativa no app</h3>
<p>Calculadoras vinculadas, fluxograma decisional, prescrição pronta e referência cruzada com outras patologias.</p>
<a href="{app_link}">Abrir {escape(nome)} no app →</a>
</div>''')
    
    # Disclaimer médico
    blocks.append('''<div class="disclaimer">
<p><strong>⚠ Aviso médico-legal:</strong> material educacional para profissionais de saúde. As informações podem conter erros, omissões ou estar desatualizadas. <strong>Toda informação deve ser verificada</strong> nas diretrizes-fonte e em literatura atual antes de aplicar na prática. <strong>A responsabilidade da prescrição é exclusivamente do médico assistente</strong>, que avalia o paciente diretamente. O autor do site não se responsabiliza por decisões clínicas, eventos adversos ou desfechos decorrentes do uso destas informações.</p>
</div>''')
    
    if definicao:
        blocks.append(f'<h2>Definição</h2><p>{escape(definicao)}</p>')
    if fisio:
        blocks.append(f'<h2>Fisiopatologia</h2><p>{escape(fisio)}</p>')
    if apresentacao:
        blocks.append(f'<h2>Apresentação típica</h2><p>{escape(apresentacao)}</p>')
    if sintomas:
        blocks.append(render_sintomas(sintomas))
    if sus_tx:
        blocks.append(f'<h2>Conduta no SUS / UBS</h2><p>{escape(sus_tx)}</p>')
    if padrao_ouro:
        blocks.append(f'<h2>Padrão-ouro (referência ampliada)</h2><p>{escape(padrao_ouro)}</p>')
    if profilaxia:
        blocks.append(f'<h2>Prevenção</h2><p>{escape(profilaxia)}</p>')
    if alertas:
        blocks.append(render_alertas(alertas))
    if p4:
        blocks.append(f'<h2>Prevenção quaternária — o que evitar</h2><p>{escape(p4)}</p>')
    if freire:
        blocks.append(f'<h2>Abordagem ao paciente</h2><p>{escape(freire)}</p>')
    if prog:
        blocks.append(f'<h2>Prognóstico</h2><p>{escape(prog)}</p>')
    if acomp:
        blocks.append(f'<h2>Acompanhamento</h2><p>{escape(acomp)}</p>')
    if diretriz:
        blocks.append(f'<div class="cite"><strong>Diretrizes fonte:</strong> {escape(diretriz)}</div>')
    
    # Site irmão (WhitePobre)
    blocks.append(f'''<a class="sibling" href="https://felipertoledo.github.io/Whitepobre2/">
<span class="ic">⚕</span>
<span class="body">
<span class="k">Atende criança ou adolescente?</span>
<span class="t">WhitePobre · Pediatria de Bolso</span>
</span>
<span class="arr">→</span>
</a>''')
    
    # Patologias relacionadas (mesmo sistema)
    relacionadas = [p for p in sistemas_idx.get(sis,[]) if p["id"] != pid][:10]
    if relacionadas:
        blocks.append('<div class="related">')
        blocks.append(f'<h3>Outras condições em {escape(sis_nome)}</h3>')
        blocks.append('<ul>')
        for r in relacionadas:
            blocks.append(f'<li><a href="/p/{r["id"]}.html">{escape(r["nome"])}</a></li>')
        blocks.append('</ul>')
        blocks.append('</div>')
    
    body = '<div class="container">\n' + "\n".join(blocks) + '\n</div>'
    return head + body + html_footer()


def gerar_calculadora(calc):
    cid = calc["id"]
    nome = calc["nome"]
    desc = calc.get("desc","")
    sis = calc.get("sis","")
    sis_nome = SIS_NOMES.get(sis, sis)
    contexto = calc.get("contexto",[])
    
    title_seo = f"Calculadora: {nome}"
    meta_description = f"{nome}. {desc[:140]}".strip()[:160]
    canonical_path = f"/c/{cid}.html"
    
    # SoftwareApplication schema
    app_schema = {
        "@context":"https://schema.org",
        "@type":"MedicalRiskCalculator",
        "name":nome,
        "description":desc[:500],
        "url":f"{BASE_URL}{canonical_path}",
        "applicationCategory":"MedicalApplication",
        "operatingSystem":"Any",
        "author":{"@id":f"{BASE_URL}/#author"},
        "datePublished":TODAY,
        "inLanguage":"pt-BR"
    }
    
    breadcrumb = {
        "@context":"https://schema.org",
        "@type":"BreadcrumbList",
        "itemListElement":[
            {"@type":"ListItem","position":1,"name":SITE_NAME,"item":BASE_URL},
            {"@type":"ListItem","position":2,"name":"Calculadoras","item":f"{BASE_URL}/#/calcs"},
            {"@type":"ListItem","position":3,"name":nome,"item":f"{BASE_URL}{canonical_path}"}
        ]
    }
    
    head = html_head(
        title=title_seo,
        description=meta_description,
        canonical_path=canonical_path,
        og_type="website",
        json_ld_extra=[app_schema, breadcrumb]
    )
    
    fields = calc.get("fields",[])
    
    blocks = []
    blocks.append('<nav class="crumb">')
    blocks.append(f'<a href="{BASE_URL}/">Início</a> › <a href="{BASE_URL}/#/calcs">Calculadoras</a> › <span>{escape(nome)}</span>')
    blocks.append('</nav>')
    
    blocks.append(f'<span class="eyebrow">Calculadora clínica</span>')
    blocks.append(f'<h1>{escape(nome)}</h1>')
    if desc:
        blocks.append(f'<p class="lead">{escape(desc[:500])}</p>')
    
    meta_tags = []
    if sis_nome: meta_tags.append(f'<span class="tag">{escape(sis_nome)}</span>')
    for c in contexto:
        meta_tags.append(f'<span class="tag">{escape(CTX_LABELS.get(c,c))}</span>')
    if meta_tags:
        blocks.append('<div class="meta">' + "".join(meta_tags) + '</div>')
    
    blocks.append(f'''<div class="app-cta">
<h3>Use a calculadora interativa no app</h3>
<p>Preenchimento dinâmico, cálculo automático, interpretação do escore com conduta sugerida.</p>
<a href="{BASE_URL}/#/calc/{cid}">Abrir calculadora →</a>
</div>''')
    
    if fields:
        blocks.append('<h2>Parâmetros avaliados</h2><ul>')
        for f in fields[:20]:
            label = f.get("label","")
            if label:
                blocks.append(f'<li>{escape(label)}</li>')
        blocks.append('</ul>')
    
    blocks.append(f'<h2>Sobre esta calculadora</h2>')
    blocks.append(f'<p>Esta é uma ferramenta de apoio à decisão clínica. Faz parte do <strong>{SITE_NAME}</strong>, guia clínico mantido por {AUTHOR_NAME} ({AUTHOR_HANDLE}) — {AUTHOR_BIO_SHORT}.</p>')
    blocks.append('''<div class="disclaimer">
<p><strong>⚠ Aviso médico-legal:</strong> calculadora de apoio educacional. O resultado deve ser interpretado em contexto clínico individualizado. <strong>Verifique sempre</strong> a fórmula e os valores de referência na fonte original. <strong>A responsabilidade da decisão clínica é exclusivamente do médico assistente.</strong> O autor não se responsabiliza por erros, omissões ou desfechos decorrentes do uso desta ferramenta.</p>
</div>''')
    
    body = '<div class="container">\n' + "\n".join(blocks) + '\n</div>'
    return head + body + html_footer()


def gerar_fluxograma(fid, flow):
    nome = flow.get("titulo", fid)
    fonte = flow.get("fonte","")
    
    title_seo = f"Fluxograma: {nome}"
    meta_description = f"Fluxograma clínico — {nome}. {fonte[:120]}".strip()[:160]
    canonical_path = f"/f/{fid}.html"
    
    creative_schema = {
        "@context":"https://schema.org",
        "@type":"CreativeWork",
        "@subtype":"MedicalGuideline",
        "name":nome,
        "description":meta_description,
        "url":f"{BASE_URL}{canonical_path}",
        "author":{"@id":f"{BASE_URL}/#author"},
        "datePublished":TODAY,
        "inLanguage":"pt-BR"
    }
    breadcrumb = {
        "@context":"https://schema.org",
        "@type":"BreadcrumbList",
        "itemListElement":[
            {"@type":"ListItem","position":1,"name":SITE_NAME,"item":BASE_URL},
            {"@type":"ListItem","position":2,"name":"Fluxogramas","item":f"{BASE_URL}/#/flows"},
            {"@type":"ListItem","position":3,"name":nome,"item":f"{BASE_URL}{canonical_path}"}
        ]
    }
    
    head = html_head(
        title=title_seo,
        description=meta_description,
        canonical_path=canonical_path,
        og_type="article",
        json_ld_extra=[creative_schema, breadcrumb]
    )
    
    blocks = []
    blocks.append('<nav class="crumb">')
    blocks.append(f'<a href="{BASE_URL}/">Início</a> › <a href="{BASE_URL}/#/flows">Fluxogramas</a> › <span>{escape(nome)}</span>')
    blocks.append('</nav>')
    
    blocks.append(f'<span class="eyebrow">Fluxograma decisional</span>')
    blocks.append(f'<h1>{escape(nome)}</h1>')
    if fonte:
        blocks.append(f'<p class="lead">Baseado em {escape(fonte[:300])}.</p>')
    
    blocks.append(f'''<div class="app-cta">
<h3>Veja o fluxograma interativo no app</h3>
<p>Decisões clínicas visuais, com ramificações, alvos terapêuticos e referências cruzadas.</p>
<a href="{BASE_URL}/#/flow/{fid}">Abrir fluxograma →</a>
</div>''')
    
    blocks.append(f'<h2>Sobre este fluxograma</h2>')
    blocks.append(f'<p>Fluxograma clínico do <strong>{SITE_NAME}</strong>, guia mantido por {AUTHOR_NAME} ({AUTHOR_HANDLE}) — {AUTHOR_BIO_SHORT}.</p>')
    blocks.append('''<div class="disclaimer">
<p><strong>⚠ Aviso médico-legal:</strong> fluxograma de apoio educacional. <strong>Verifique sempre</strong> as decisões na diretriz-fonte. <strong>A responsabilidade da decisão clínica é exclusivamente do médico assistente</strong>, que avalia o paciente diretamente. O autor não se responsabiliza por erros, omissões ou desfechos decorrentes do uso deste material.</p>
</div>''')
    
    body = '<div class="container">\n' + "\n".join(blocks) + '\n</div>'
    return head + body + html_footer()


def gerar_indices(snap):
    """Gera índices por sistema (linkáveis pelo Google) — pasta /sis/"""
    sis_dir = os.path.join(OUT_DIR, "sis")
    os.makedirs(sis_dir, exist_ok=True)
    
    sistemas_pats = {}
    for p in snap["patologias"]:
        s = p.get("sis","")
        sistemas_pats.setdefault(s, []).append(p)
    
    for sis, pats in sistemas_pats.items():
        sis_nome = SIS_NOMES.get(sis, sis)
        title_seo = f"{sis_nome} — Patologias e condutas"
        meta_description = f"Índice de patologias de {sis_nome} no Pronto-Atendimento, UPA e UBS. {len(pats)} condições com conduta clínica detalhada."
        canonical_path = f"/sis/{sis}.html"
        
        breadcrumb = {
            "@context":"https://schema.org",
            "@type":"BreadcrumbList",
            "itemListElement":[
                {"@type":"ListItem","position":1,"name":SITE_NAME,"item":BASE_URL},
                {"@type":"ListItem","position":2,"name":sis_nome,"item":f"{BASE_URL}{canonical_path}"}
            ]
        }
        collection_schema = {
            "@context":"https://schema.org",
            "@type":"CollectionPage",
            "name":title_seo,
            "description":meta_description,
            "url":f"{BASE_URL}{canonical_path}",
            "author":{"@id":f"{BASE_URL}/#author"},
            "inLanguage":"pt-BR",
            "mainEntity":{
                "@type":"ItemList",
                "numberOfItems":len(pats),
                "itemListElement":[
                    {
                        "@type":"ListItem","position":i+1,
                        "url":f"{BASE_URL}/p/{p['id']}.html",
                        "name":p["nome"]
                    } for i,p in enumerate(pats)
                ]
            }
        }
        
        head = html_head(
            title=title_seo,
            description=meta_description,
            canonical_path=canonical_path,
            og_type="website",
            json_ld_extra=[collection_schema, breadcrumb]
        )
        
        blocks = []
        blocks.append('<nav class="crumb">')
        blocks.append(f'<a href="{BASE_URL}/">Início</a> › <span>{escape(sis_nome)}</span>')
        blocks.append('</nav>')
        blocks.append(f'<span class="eyebrow">Sistema</span>')
        blocks.append(f'<h1>{escape(sis_nome)}</h1>')
        blocks.append(f'<p class="lead">{len(pats)} condições clínicas com conduta detalhada para Pronto-Atendimento, UPA e UBS.</p>')
        
        # Lista
        pats_sorted = sorted(pats, key=lambda x: x["nome"])
        blocks.append('<ul>')
        for p in pats_sorted:
            blocks.append(f'<li><a href="/p/{p["id"]}.html"><strong>{escape(p["nome"])}</strong></a>'
                        + (f' — {escape(p.get("def","")[:140])}' if p.get("def") else '') + '</li>')
        blocks.append('</ul>')
        
        body = '<div class="container">\n' + "\n".join(blocks) + '\n</div>'
        with open(os.path.join(sis_dir, f"{sis}.html"), "w", encoding="utf-8") as f:
            f.write(head + body + html_footer())
    
    return list(sistemas_pats.keys())


def gerar_sitemap(snap, sistemas_list):
    """Gera sitemap.xml com todas as URLs."""
    urls = []
    
    # Home
    urls.append((BASE_URL + "/", 1.0, "weekly"))
    
    # Patologias
    for p in snap["patologias"]:
        urls.append((f"{BASE_URL}/p/{p['id']}.html", 0.8, "monthly"))
    
    # Calculadoras
    for c in snap["calcs"]:
        urls.append((f"{BASE_URL}/c/{c['id']}.html", 0.7, "monthly"))
    
    # Fluxogramas
    for fid in snap["flows"].keys():
        urls.append((f"{BASE_URL}/f/{fid}.html", 0.7, "monthly"))
    
    # Medicações
    for m in snap["medicacoes"]:
        urls.append((f"{BASE_URL}/m/{m['id']}.html", 0.7, "monthly"))
    
    # Índices por sistema
    for sis in sistemas_list:
        urls.append((f"{BASE_URL}/sis/{sis}.html", 0.6, "weekly"))
    
    xml = ['<?xml version="1.0" encoding="UTF-8"?>']
    xml.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
    for url, priority, freq in urls:
        xml.append('  <url>')
        xml.append(f'    <loc>{escape(url)}</loc>')
        xml.append(f'    <lastmod>{TODAY}</lastmod>')
        xml.append(f'    <changefreq>{freq}</changefreq>')
        xml.append(f'    <priority>{priority:.1f}</priority>')
        xml.append('  </url>')
    xml.append('</urlset>')
    
    with open(os.path.join(OUT_DIR, "sitemap.xml"), "w", encoding="utf-8") as f:
        f.write("\n".join(xml))
    
    return len(urls)


def gerar_robots():
    content = f'''User-agent: *
Allow: /
Disallow: /node_modules/

Sitemap: {BASE_URL}/sitemap.xml
'''
    with open(os.path.join(OUT_DIR, "robots.txt"), "w") as f:
        f.write(content)


def gerar_medicacao(med):
    mid = med["id"]
    nome = med.get("nome", mid)
    classe = med.get("classe", "")
    resumo = med.get("resumo", "")
    dose_rapida = med.get("dose_rapida", "")
    sin = med.get("sin", [])
    formas = med.get("formas", [])
    contexto = med.get("contexto", [])
    grupo = med.get("grupo", "")
    sis_nome = SIS_NOMES.get(grupo, grupo)

    # Descrição SEO: o que estudantes buscam ("nome dose / para que serve")
    desc_base = resumo or classe
    # Limpar marcadores de alerta para meta description
    desc_clean = desc_base.replace("⚠", "").replace("  ", " ").strip()
    meta_description = f"{nome}: {classe}. {desc_clean}".strip()[:160]
    canonical_path = f"/m/{mid}.html"

    # Schema.org Drug
    rotas = []
    formas_txt = "; ".join(formas) if formas else ""
    drug_schema = {
        "@context": "https://schema.org",
        "@type": "Drug",
        "name": nome,
        "alternateName": sin[:5] if sin else None,
        "description": (resumo or classe)[:500],
        "activeIngredient": nome,
        "drugClass": classe or None,
        "dosageForm": formas_txt[:300] or None,
        "mechanismOfAction": med.get("mecanismo", "")[:500] or None,
        "url": f"{BASE_URL}{canonical_path}",
        "author": {"@id": f"{BASE_URL}/#author"},
        "inLanguage": "pt-BR",
    }
    drug_schema = {k: v for k, v in drug_schema.items() if v is not None}

    breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": SITE_NAME, "item": BASE_URL},
            {"@type": "ListItem", "position": 2, "name": "Medicações", "item": f"{BASE_URL}/#/meds"},
            {"@type": "ListItem", "position": 3, "name": nome, "item": f"{BASE_URL}{canonical_path}"},
        ],
    }

    head = html_head(
        title=f"{nome} — dose, indicações, efeitos | bula resumida",
        description=meta_description,
        canonical_path=canonical_path,
        og_type="article",
        json_ld_extra=[drug_schema, breadcrumb],
    )

    blocks = []
    blocks.append('<nav class="crumb">')
    blocks.append(f'<a href="{BASE_URL}/">Início</a> › <a href="{BASE_URL}/#/meds">Medicações</a> › <span>{escape(nome)}</span>')
    blocks.append('</nav>')

    blocks.append('<span class="eyebrow">Medicação — referência clínica</span>')
    blocks.append(f'<h1>{escape(nome)}</h1>')
    if classe:
        blocks.append(f'<p class="lead">{escape(classe)}</p>')

    meta_tags = []
    if sis_nome:
        meta_tags.append(f'<span class="tag">{escape(sis_nome)}</span>')
    for c in contexto:
        meta_tags.append(f'<span class="tag">{escape(CTX_LABELS.get(c, c))}</span>')
    if meta_tags:
        blocks.append('<div class="meta">' + "".join(meta_tags) + '</div>')

    if sin:
        blocks.append(f'<p><strong>Nomes comerciais / sinônimos:</strong> {escape(", ".join(sin[:8]))}</p>')

    if resumo:
        blocks.append(f'<h2>Resumo</h2><p>{escape(resumo[:800])}</p>')

    if dose_rapida:
        blocks.append(f'<div class="app-cta"><h3>Dose rápida</h3><p>{escape(dose_rapida)}</p></div>')

    # Indicações e doses
    doses = med.get("doses", [])
    if doses:
        blocks.append('<h2>Indicações e posologia</h2><ul>')
        for d in doses[:15]:
            ind = escape(d.get("ind", ""))
            dose = escape(d.get("dose", ""))
            obs = escape(d.get("obs", ""))
            linha = f'<li><strong>{ind}:</strong> {dose}'
            if obs:
                linha += f' <em>({obs})</em>'
            linha += '</li>'
            blocks.append(linha)
        blocks.append('</ul>')

    if formas:
        blocks.append('<h2>Apresentações</h2><ul>')
        for f_ in formas[:10]:
            blocks.append(f'<li>{escape(f_)}</li>')
        blocks.append('</ul>')

    # Ajustes
    ajustes = med.get("ajustes", {})
    if ajustes:
        rotulos = {"irc": "Insuficiência renal", "iht": "Insuficiência hepática", "idoso": "Idoso",
                   "gestante": "Gestação", "aleita": "Lactação", "ped": "Pediatria"}
        blocks.append('<h2>Ajustes em populações especiais</h2><ul>')
        for k, lab in rotulos.items():
            v = ajustes.get(k)
            if v:
                blocks.append(f'<li><strong>{lab}:</strong> {escape(str(v))}</li>')
        blocks.append('</ul>')

    mec = med.get("mecanismo", "")
    if mec:
        blocks.append(f'<h2>Mecanismo de ação</h2><p>{escape(mec)}</p>')

    # Efeitos colaterais
    ef = med.get("ef_colats", {})
    if isinstance(ef, dict):
        comuns = ef.get("comuns", [])
        serios = ef.get("sérios", ef.get("serios", []))
        if comuns:
            blocks.append('<h2>Efeitos colaterais comuns</h2><ul>')
            for e in comuns[:15]:
                blocks.append(f'<li>{escape(str(e))}</li>')
            blocks.append('</ul>')
        if serios:
            blocks.append('<h2>Efeitos colaterais graves</h2><ul>')
            for e in serios[:15]:
                blocks.append(f'<li>{escape(str(e))}</li>')
            blocks.append('</ul>')

    inter = med.get("interacoes", [])
    if inter:
        blocks.append('<h2>Interações medicamentosas</h2><ul>')
        for i in inter[:15]:
            blocks.append(f'<li>{escape(str(i))}</li>')
        blocks.append('</ul>')

    ci = med.get("contraindicacoes", [])
    if ci:
        blocks.append('<h2>Contraindicações</h2><ul>')
        for c in ci[:15]:
            blocks.append(f'<li>{escape(str(c))}</li>')
        blocks.append('</ul>')

    monit = med.get("monit", [])
    if monit:
        blocks.append('<h2>Monitoramento</h2><ul>')
        for m in monit[:10]:
            blocks.append(f'<li>{escape(str(m))}</li>')
        blocks.append('</ul>')

    grav = med.get("gravidez", "")
    if grav:
        blocks.append(f'<p><strong>Categoria na gestação:</strong> {escape(str(grav))}</p>')

    sus = med.get("sus", "")
    if sus:
        blocks.append(f'<h2>Disponibilidade no SUS</h2><p>{escape(str(sus))}</p>')

    blocks.append(f'''<div class="app-cta">
<h3>Ver no app interativo</h3>
<p>Ficha completa com busca, comparação de medicações e geração de receituário.</p>
<a href="{BASE_URL}/#/m/{mid}">Abrir no app →</a>
</div>''')

    refs = med.get("referencias", [])
    if refs:
        blocks.append('<h2>Referências</h2><ul>')
        for r in refs[:10]:
            blocks.append(f'<li>{escape(str(r))}</li>')
        blocks.append('</ul>')

    blocks.append('''<div class="disclaimer">
<p><strong>⚠ Aviso médico-legal:</strong> conteúdo educacional resumido — NÃO substitui a bula oficial nem o julgamento clínico. Doses, indicações e contraindicações devem ser <strong>sempre conferidas na fonte original e na bula vigente</strong> antes da prescrição. <strong>A responsabilidade da decisão é exclusivamente do médico prescritor.</strong> O autor não se responsabiliza por erros, omissões ou desfechos decorrentes do uso desta ferramenta.</p>
</div>''')

    body = '<div class="container">\n' + "\n".join(blocks) + '\n</div>'
    return head + body + html_footer()


def main():
    with open(SNAPSHOT) as f:
        snap = json.load(f)
    
    # Index patologias por sistema (para "relacionadas")
    sistemas_idx = {}
    for p in snap["patologias"]:
        sis = p.get("sis","")
        sistemas_idx.setdefault(sis, []).append(p)
    
    os.makedirs(P_DIR, exist_ok=True)
    os.makedirs(C_DIR, exist_ok=True)
    os.makedirs(F_DIR, exist_ok=True)
    os.makedirs(M_DIR, exist_ok=True)
    
    # Patologias
    n_pat = 0
    for p in snap["patologias"]:
        html = gerar_patologia(p, sistemas_idx)
        with open(os.path.join(P_DIR, f"{p['id']}.html"), "w", encoding="utf-8") as f:
            f.write(html)
        n_pat += 1
    
    # Calculadoras
    n_calc = 0
    for c in snap["calcs"]:
        html = gerar_calculadora(c)
        with open(os.path.join(C_DIR, f"{c['id']}.html"), "w", encoding="utf-8") as f:
            f.write(html)
        n_calc += 1
    
    # Fluxogramas
    n_flow = 0
    for fid, flow in snap["flows"].items():
        html = gerar_fluxograma(fid, flow)
        with open(os.path.join(F_DIR, f"{fid}.html"), "w", encoding="utf-8") as f:
            f.write(html)
        n_flow += 1

    # Medicações
    n_med = 0
    for m in snap["medicacoes"]:
        html = gerar_medicacao(m)
        with open(os.path.join(M_DIR, f"{m['id']}.html"), "w", encoding="utf-8") as f:
            f.write(html)
        n_med += 1
    
    # Índices por sistema
    sistemas_list = gerar_indices(snap)
    
    # Sitemap
    n_urls = gerar_sitemap(snap, sistemas_list)
    
    # Robots
    gerar_robots()
    
    print(f"✓ {n_pat} patologias geradas em {P_DIR}")
    print(f"✓ {n_calc} calculadoras geradas em {C_DIR}")
    print(f"✓ {n_flow} fluxogramas gerados em {F_DIR}")
    print(f"✓ {n_med} medicações geradas em {M_DIR}")
    print(f"✓ {len(sistemas_list)} índices por sistema gerados em /sis/")
    print(f"✓ sitemap.xml com {n_urls} URLs")
    print(f"✓ robots.txt gerado")

if __name__ == "__main__":
    main()
