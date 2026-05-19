/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — ENGINE PRINCIPAL
   Router por hash, render, busca fuzzy, toggle tema/modo
   =========================================================== */

/* SISTEMAS está definido em data1.js. Aqui adicionamos ordem de exibição. */
const SISTEMAS_ORD = {
  cardio:1, resp:2, neuro:3, gi:4, endo:5, gu:6, ost:7, psiq:8, hidro:9,
  infecto:10, anaf:11, tox:12, pec:13, hemo:14, vaso:15, iot:16, gest:17,
  obst:18, trauma:19, derm:20, oft:21, anal:22, pali:23,
  vacina:24, cron:25, smen:26, idoso:27, rastreio:28, ubs:29,
  pulo:30, conv:31, proc:32, docs:33, med:34
};
Object.keys(SISTEMAS_ORD).forEach(k => {
  if (SISTEMAS[k]) SISTEMAS[k].ord = SISTEMAS_ORD[k];
});

/* índice por id (montado após data files carregarem) */
const PATOLOGIAS_BY_ID = {};
PATOLOGIAS.forEach(p => { PATOLOGIAS_BY_ID[p.id] = p; });

/* ============== ESTADO ============== */
const STATE = {
  modo: localStorage.getItem("vm-modo") || "rapido",   // rapido | completo
  tema: localStorage.getItem("vm-tema") || "light",    // light | dark
};

/* ============== TEMA ============== */
function applyTheme() {
  document.documentElement.setAttribute("data-theme", STATE.tema);
  const ic = document.getElementById("themeIcon");
  if (!ic) return;
  if (STATE.tema === "dark") {
    ic.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
  } else {
    ic.innerHTML = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>';
  }
}
function toggleTheme() {
  STATE.tema = STATE.tema === "light" ? "dark" : "light";
  localStorage.setItem("vm-tema", STATE.tema);
  applyTheme();
}

/* ============== MODO RÁPIDO / COMPLETO ============== */
function setModo(m) {
  STATE.modo = m;
  localStorage.setItem("vm-modo", m);
  // re-render se está em uma patologia
  if (location.hash.startsWith("#/p/")) {
    const id = location.hash.replace("#/p/","");
    renderPatologia(id);
  }
}

/* ============== HELPERS DE RENDER ============== */
function esc(s) {
  if (s == null) return "";
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

/* safeHtml: escapa tudo MENOS tags inline seguras pré-aprovadas
   (strong, em, b, i, u, br, sub, sup, mark, code).
   Usado em campos curados (def, observações, mecanismo, alertas). */
const SAFE_TAGS = ["strong","em","b","i","u","br","sub","sup","mark","code"];
function safeHtml(s) {
  if (s == null) return "";
  let out = String(s)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;");
  // re-permitir tags da whitelist
  SAFE_TAGS.forEach(tag => {
    const reOpen  = new RegExp("&lt;" + tag + "&gt;", "gi");
    const reClose = new RegExp("&lt;/" + tag + "&gt;", "gi");
    const reSelf  = new RegExp("&lt;" + tag + "\\s*/&gt;", "gi"); // ex: <br/>
    out = out.replace(reOpen,  "<" + tag + ">")
             .replace(reClose, "</" + tag + ">")
             .replace(reSelf,  "<" + tag + "/>");
  });
  return out;
}

function gravBadge(g) {
  if (g === "alta")  return '<span class="badge badge-crit">alta</span>';
  if (g === "media") return '<span class="badge badge-warn">média</span>';
  return '<span class="badge badge-ok">baixa</span>';
}

/* richText: para campos longos estruturados (sus_tx, freire, p4, etc).
   Respeita quebras de linha simples (\n → <br>), quebras duplas (\n\n → novo parágrafo),
   e detecta padrões comuns:
   - Linhas começando com A), B), 1., 2. → cabeçalho de seção (negrito)
   - Linhas indentadas SEM bullet (texto importante) → sub-cabeçalho
   - Linhas começando com • → item de lista
   - Linhas iniciadas por espaços + - ou • → sub-item indentado
   Mantém safe tags (strong, em, etc.) via safeHtml. */
function richText(s) {
  if (s == null || s === "") return "";
  // Primeiro escapa HTML perigoso (mantém safe tags)
  const safe = safeHtml(s);

  // Divide por linhas em branco (separação de parágrafos)
  const blocks = safe.split(/\n\s*\n/);

  return blocks.map(block => {
    const lines = block.split('\n');
    let html = '';
    let inList = false;
    let inSubList = false;

    const closeLists = () => {
      let out = '';
      if (inSubList) { out += '</ul>'; inSubList = false; }
      if (inList)    { out += '</ul>'; inList = false; }
      return out;
    };

    for (const rawLine of lines) {
      const line = rawLine.replace(/\s+$/, '');
      if (!line.trim()) continue;

      // Detecta sub-bullet: começa com 2+ espaços + (- ou •)
      const subMatch = line.match(/^\s{2,}[-•]\s+(.*)$/);
      // Detecta bullet: começa com • (com 0-1 espaço) ou - no início
      const bulletMatch = line.match(/^[•-]\s+(.*)$/);
      // Detecta cabeçalho A) B) ou 1) 2) ou 1. 2.
      const headerMatch = line.match(/^([A-Z]\)|[0-9]+[.)])\s+(.*)$/);
      // Detecta sub-cabeçalho: linha indentada (2+ espaços) sem bullet, com letra inicial maiúscula
      const subHeaderMatch = line.match(/^\s{2,}([A-ZÀ-Ý][^\n]*?)$/) && !subMatch && !bulletMatch;

      if (subMatch) {
        // Bullet aninhado precisa estar dentro de um <li> de uma lista pai
        // Se não há lista pai aberta, criar uma com placeholder
        if (!inList) { html += '<ul class="rt-list"><li class="rt-li-noitem">'; inList = true; }
        if (!inSubList) { html += '<ul class="rt-sublist">'; inSubList = true; }
        html += '<li>' + subMatch[1] + '</li>';
      } else if (bulletMatch) {
        if (inSubList) { html += '</ul>'; inSubList = false; }
        if (!inList) { html += '<ul class="rt-list">'; inList = true; }
        else { /* feche o sub mas mantenha o pai */ }
        html += '<li>' + bulletMatch[1] + '</li>';
      } else if (headerMatch) {
        html += closeLists();
        html += '<div class="rt-head">' + headerMatch[1] + ' ' + headerMatch[2] + '</div>';
      } else if (subHeaderMatch) {
        html += closeLists();
        html += '<div class="rt-subhead">' + line.trim() + '</div>';
      } else {
        html += closeLists();
        html += '<div class="rt-line">' + line + '</div>';
      }
    }
    html += closeLists();
    return '<div class="rt-para">' + html + '</div>';
  }).join('');
}

function alertHTML(a) {
  // Aceita 3 schemas:
  //   {t, x}             — legado patologias
  //   {nivel, txt}       — medicações + novas patologias
  //   {tipo, t, d}       — vacina/PNI: tipo=nível, t=título, d=descrição
  let tipo, texto;
  if (a.tipo && a.d !== undefined) {
    // Schema 3: tipo+t(título)+d(descrição)
    tipo = a.tipo;
    const titulo = a.t ? `<strong>${safeHtml(a.t)}</strong> — ` : "";
    return `<div class="alert alert-${tipo === "crit" ? "crit" : tipo === "warn" ? "warn" : tipo === "ok" ? "ok" : "info"}"><span class="ai alert-ic">${tipo === "crit" ? "⚠" : tipo === "warn" ? "!" : tipo === "ok" ? "✓" : "ℹ"}</span><div>${titulo}${safeHtml(a.d || "")}</div></div>`;
  }
  tipo = a.t || a.nivel || "info";
  texto = a.x !== undefined ? a.x : a.txt;
  const cls = "alert-" + (tipo === "crit" ? "crit" : tipo === "warn" ? "warn" : tipo === "ok" ? "ok" : "info");
  const ic = tipo === "crit" ? "⚠" : tipo === "warn" ? "!" : tipo === "ok" ? "✓" : "ℹ";
  return `<div class="alert ${cls}"><span class="ai alert-ic">${ic}</span><div>${safeHtml(texto)}</div></div>`;
}

/* Renderização de prescrição.
   - Se nenhum item tem `etapa`, renderiza tabela única (legacy).
   - Se algum item tem `etapa`, agrupa visualmente em seções:
     inicial → escalonamento → leve/mod/intensa (analgesia) → adj → atb */
const ETAPA_LABELS = {
  "inicial":  { titulo: "① Medidas iniciais", cor: "#0EA5E9" },
  "escala":   { titulo: "② Tratamento específico — escalonamento", cor: "#DC2626" },
  "leve":     { titulo: "Dor leve (EVA 1-3) — Degrau 1 OMS", cor: "#22C55E" },
  "mod":      { titulo: "Dor moderada (EVA 4-6) — Degrau 2 OMS", cor: "#F59E0B" },
  "intensa":  { titulo: "Dor intensa (EVA 7-10) — Degrau 3 OMS", cor: "#DC2626" },
  "atb":      { titulo: "③ Antibioticoterapia", cor: "#16A34A" },
  "anticoag": { titulo: "③ Anticoagulação", cor: "#7C3AED" },
  "adj":      { titulo: "④ Adjuvantes / suporte", cor: "#475569" },
  "alta":     { titulo: "⑤ Alta / seguimento", cor: "#0891B2" },
};
const ETAPA_ORDER = ["inicial", "escala", "leve", "mod", "intensa", "atb", "anticoag", "adj", "alta"];

function rxRow(r) {
  const hasDose = r.do && String(r.do).trim();
  const hasVia = r.via && String(r.via).trim();
  // Linha narrativa (passo / instrução / orientação): sem dose E sem via
  if (!hasDose && !hasVia) {
    const obsHTML = r.o && String(r.o).trim() ? `<div class="rx-narr-obs">${safeHtml(r.o)}</div>` : "";
    return `
      <tr class="rx-narr">
        <td colspan="4"><div class="rx-narr-txt">${safeHtml(r.d)}</div>${obsHTML}</td>
      </tr>`;
  }
  return `
    <tr>
      <td><strong>${safeHtml(r.d)}</strong></td>
      <td class="mono">${safeHtml(r.do)}</td>
      <td class="cell-via">${esc(r.via)}</td>
      <td class="cell-obs">${safeHtml(r.o || "")}</td>
    </tr>`;
}

function rxTableInner(rows) {
  return `
    <div class="rx-wrap">
      <table class="rx">
        <colgroup>
          <col class="col-droga">
          <col class="col-dose">
          <col class="col-via">
          <col class="col-obs">
        </colgroup>
        <thead><tr><th>Droga</th><th>Dose</th><th>Via</th><th>Observação</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

function rxTable(rx) {
  if (!rx || !rx.length) return "";
  const anyEtapa = rx.some(r => r.etapa);
  if (!anyEtapa) {
    // legacy: tabela única
    return rxTableInner(rx.map(rxRow).join(""));
  }
  // Agrupar por etapa, mantendo ordem definida
  const groups = {};
  rx.forEach(r => {
    const e = r.etapa || "escala";
    if (!groups[e]) groups[e] = [];
    groups[e].push(r);
  });
  return ETAPA_ORDER.filter(e => groups[e]).map(e => {
    const label = ETAPA_LABELS[e] || { titulo: e, cor: "#475569" };
    const rows = groups[e].map(rxRow).join("");
    return `
      <div class="rx-etapa">
        <h3 class="rx-etapa-h" style="border-color:${label.cor}">${safeHtml(label.titulo)}</h3>
        ${rxTableInner(rows)}
      </div>`;
  }).join("");
}

function listHTML(arr, cls) {
  if (!arr || !arr.length) return "";
  return `<ul class="${cls||""}">${arr.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
}

function mecHTML(mec) {
  if (!mec || !mec.length) return "";
  const items = mec.map(m => {
    if (typeof m === "string") return `<li>${safeHtml(m)}</li>`;
    return `<li><strong>${safeHtml(m.d||"")}</strong>${m.x ? " — " + safeHtml(m.x) : ""}</li>`;
  }).join("");
  return `<ul class="mec-list">${items}</ul>`;
}

/* Renderização de imagens — fallback gracioso se URLs falharem.
   - Cada figure tem onerror que oculta a si mesma.
   - O bloco inteiro tem id único; checagem assíncrona esconde-o todo se NENHUMA imagem carregar. */
function imgsHTML(imgs, blockId) {
  if (!imgs || !imgs.length) return "";
  const figs = imgs.map((im, i) => `
    <figure class="fig">
      <img loading="lazy" src="${esc(im.src)}" alt="${esc(im.alt||"")}"
           onload="window.__imgLoaded && window.__imgLoaded('${blockId}', this)"
           onerror="this.closest('figure').style.display='none'">
      <figcaption>
        ${safeHtml(im.caption || im.alt || "")}
        ${im.source ? `<br><span class="fig-source">Fonte: ${safeHtml(im.source)}</span>` : ""}
      </figcaption>
    </figure>`).join("");
  return `<div class="figs-wrap">${figs}</div>`;
}

/* Helper global: marca bloco como tendo ao menos uma imagem carregada com sucesso */
window.__imgLoaded = function(blockId, img) {
  if (img && img.naturalWidth > 0) {
    const block = document.getElementById(blockId);
    if (block) block.dataset.loaded = "1";
  }
};

/* Após render, agendar verificação: se nenhuma imagem carregou em 4s, esconder o bloco inteiro */
function scheduleImgCheck(blockId) {
  setTimeout(() => {
    const block = document.getElementById(blockId);
    if (!block) return;
    if (block.dataset.loaded === "1") return;
    // checar manualmente (imagens cacheadas podem ter completed antes do onload registrar)
    const imgs = block.querySelectorAll("img");
    const anyOk = Array.from(imgs).some(i => i.complete && i.naturalWidth > 0);
    if (!anyOk) block.style.display = "none";
  }, 4000);
}

/* ============== ROUTER ============== */
function navigate(path) {
  if (path && path !== location.hash) {
    location.hash = path;
  }
  // Sempre chamar explicitamente — alguns webviews/mobile não disparam hashchange consistentemente
  routeFromHash();
}

function routeFromHash() {
  const h = location.hash.replace(/^#/, "") || "/";
  const parts = h.split("/").filter(Boolean);
  const sr = document.getElementById("searchResults");
  if (sr) { sr.innerHTML = ""; sr.classList.remove("visible","open"); }
  const si = document.getElementById("search");
  if (si) si.value = "";

  if (parts.length === 0) return renderHome();
  if (parts[0] === "p" && parts[1]) return renderPatologia(parts[1]);
  if (parts[0] === "c" && parts[1]) return renderCalc(parts[1]);
  if (parts[0] === "f" && parts[1]) return renderFlow(parts[1]);
  if (parts[0] === "s" && parts[1]) return renderSistema(parts[1]);
  if (parts[0] === "m" && parts[1]) return renderMedicacao(parts[1]);
  if (parts[0] === "meds") return renderMedicacoes();
  if (parts[0] === "calcs") return renderCalcs();
  if (parts[0] === "flows") return renderFlows();
  if (parts[0] === "sobre") return renderSobre();
  // Rotas custom de ui-extensions.js (histórico, comparador)
  if (parts[0] === "historico" || parts[0] === "compare") {
    const v = document.getElementById("view");
    if (v) v.innerHTML = '<section class="container"><p style="color:var(--ink-3)">Carregando...</p></section>';
    return; // ui-extensions render no afterRender
  }
  renderHome();
}

window.addEventListener("hashchange", routeFromHash);

/* ============== HOME ============== */
function renderHome() {
  window.scrollTo(0,0);
  
  // Filtra patologias e calcs pelo contexto atual
  const fitCtx = (typeof itemFitContexto === 'function') ? itemFitContexto : (() => true);
  const patsCtx = PATOLOGIAS.filter(fitCtx);
  const calcsCtx = CALCS.filter(fitCtx);
  const medsCtx = (typeof MEDICACOES !== 'undefined') ? MEDICACOES.filter(fitCtx) : [];
  
  // Categorias de sistemas para agrupamento visual da home
  const CATEGORIAS = [
    {
      id: 'pa',
      titulo: '🚨 Emergência & Plantão',
      legenda: 'Patologias agudas, prescrições prontas, fluxogramas',
      sistemas: ['cardio','resp','neuro','gi','endo','gu','ost','psiq','hidro',
                 'infecto','anaf','tox','pec','hemo','vaso','iot',
                 'gest','obst','trauma','derm','oft','anal','pali']
    },
    {
      id: 'mfc',
      titulo: '🌳 Atenção Primária / MFC',
      legenda: 'Cuidado longitudinal, PTS, prevenção quaternária',
      sistemas: ['cron','idoso','smen','vacina','rastreio','ubs']
    },
    {
      id: 'recursos',
      titulo: '📋 Recursos & Utilitários',
      legenda: 'Procedimentos, docs médico-legais, conversores',
      sistemas: ['proc','docs','pulo','conv','med']
    }
  ];

  const cardSisHTML = (k, s, ct) => `
      <button class="sys-card" onclick="navigate('#/s/${k}')" style="--sys-color:${s.cor}">
        <span class="sys-bar"></span>
        <div class="sys-card-body">
          <h3>${esc(s.nome)}</h3>
          <p>${ct} ${ct===1?"patologia":"patologias"}</p>
        </div>
      </button>`;

  const gruposHTML = CATEGORIAS.map(cat => {
    // Filtra os sistemas dessa categoria que TÊM patologias no contexto atual
    const sistemas = cat.sistemas
      .map(k => ({ k, s: SISTEMAS[k], ct: patsCtx.filter(p => p.sis === k).length }))
      .filter(item => item.s && item.ct > 0)
      // Ordem alfabética dentro da categoria
      .sort((a, b) => a.s.nome.localeCompare(b.s.nome, 'pt-BR'));

    if (!sistemas.length) return '';

    const cards = sistemas.map(({k,s,ct}) => cardSisHTML(k, s, ct)).join('');
    return `
      <div class="sys-group">
        <div class="sys-group-head">
          <h3 class="sys-group-title">${cat.titulo}</h3>
          <p class="sys-group-legenda">${cat.legenda}</p>
        </div>
        <div class="sys-grid">${cards}</div>
      </div>`;
  }).join('');

  const cardsSis = gruposHTML;

  const totalP = patsCtx.length;
  const totalC = calcsCtx.length;
  const totalF = FLOWS_LIST.length;
  const totalM = medsCtx.length;
  
  // Hero subtitle dinâmico pelo contexto
  const ctxNow = (typeof CONTEXTO !== 'undefined') ? CONTEXTO.current : 'tudo';
  const heroEyebrow = ctxNow === 'pa' ? 'Pronto-atendimento · UPA · Plantão · SUS'
                    : ctxNow === 'ubs' ? 'Atenção Primária · UBS · MFC · SUS'
                    : 'Pronto-atendimento · UPA · UBS · SUS';
  const heroLead = ctxNow === 'ubs'
    ? 'Patologias da APS com PTS estruturado, calendário vacinal PNI 2026, rastreamentos e prevenção quaternária. Cada conduta com fonte.'
    : ctxNow === 'pa'
    ? 'Patologias agudas, sub-agudas e descompensações que chegam ao plantão. Prescrição pronta, fluxograma decisional, calculadora à mão. Cada conduta com fonte.'
    : 'Da glicemia mal controlada ao infarto, do mal-estar à crise psiquiátrica. Conduta clínica em adulto e idoso, na linguagem real do plantão.';

  const v = document.getElementById("view");
  v.innerHTML = `
    <section class="hero">
      <div class="hero-inner">
        <span class="hero-eyebrow">${heroEyebrow}</span>
        <h1>Tudo o que chega<br>à porta.</h1>
        <p class="hero-lead">${heroLead}</p>
        <div class="hero-stats">
          <div><strong>${totalP}</strong><span>patologias</span></div>
          <div><strong>${totalC}</strong><span>calculadoras</span></div>
          <div><strong>${totalF}</strong><span>fluxogramas</span></div>
          ${totalM ? `<div><strong>${totalM}</strong><span>medicações</span></div>` : ""}
        </div>
        <div class="hero-actions">
          <button class="btn btn-primary" onclick="document.getElementById('search').focus()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
            <span>Buscar</span>
            <span class="kbd-hint" style="background:rgba(255,255,255,.18);color:#fff;border-color:rgba(255,255,255,.3)">/</span>
          </button>
          ${totalM ? `<button class="btn btn-ghost" onclick="navigate('#/meds')">℞ Medicações</button>` : ""}
          <button class="btn btn-ghost" onclick="navigate('#/calcs')">Calculadoras</button>
          <button class="btn btn-ghost" onclick="navigate('#/flows')">Fluxogramas</button>
          <button class="btn btn-ghost" onclick="navigate('#/sobre')">Como usar →</button>
        </div>
        <a class="hero-sibling" href="https://felipertoledo.github.io/Whitepobre2/" target="_blank" rel="noopener">
          <span class="hero-sibling-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/></svg>
          </span>
          <span class="hero-sibling-body">
            <span class="hero-sibling-kicker">Atende criança ou adolescente?</span>
            <span class="hero-sibling-title">WhitePobre · Pediatria de Bolso</span>
          </span>
          <span class="hero-sibling-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </section>

    ${typeof ctxToggleHTML === 'function' ? ctxToggleHTML() : ''}

    <section class="container">
      <div class="section-header">
        <h2>Por sistema</h2>
        <p class="lead">Toque para abrir as patologias do sistema</p>
      </div>
      <div class="sys-groups">${cardsSis}</div>
    </section>

    <section class="container">
      <div class="section-header"><h2>Atalhos críticos</h2></div>
      <div class="quick-grid">
        <button class="quick-card" onclick="navigate('#/f/acls-pcr')"><span class="quick-tag crit">PCR</span><span>ACLS — Parada</span></button>
        <button class="quick-card" onclick="navigate('#/f/sca')"><span class="quick-tag crit">SCA</span><span>IAM com supra</span></button>
        <button class="quick-card" onclick="navigate('#/f/avci')"><span class="quick-tag crit">AVC</span><span>Trombólise</span></button>
        <button class="quick-card" onclick="navigate('#/f/sepse')"><span class="quick-tag crit">Sepse</span><span>Hour-1 bundle</span></button>
        <button class="quick-card" onclick="navigate('#/f/cad')"><span class="quick-tag warn">CAD</span><span>Cetoacidose</span></button>
        <button class="quick-card" onclick="navigate('#/f/anafilaxia')"><span class="quick-tag crit">Anafilaxia</span><span>Adrenalina IM</span></button>
        <button class="quick-card" onclick="navigate('#/f/crise')"><span class="quick-tag warn">EME</span><span>Crise convulsiva</span></button>
        <button class="quick-card" onclick="navigate('#/f/hipercalemia')"><span class="quick-tag warn">K↑</span><span>Hipercalemia</span></button>
        <button class="quick-card" onclick="navigate('#/p/dissec')"><span class="quick-tag crit">Aorta</span><span>Dissecção</span></button>
        <button class="quick-card" onclick="navigate('#/p/tep')"><span class="quick-tag crit">TEP</span><span>TEP maciço</span></button>
        <button class="quick-card" onclick="navigate('#/c/qsofa')"><span class="quick-tag info">Calc</span><span>qSOFA</span></button>
        <button class="quick-card" onclick="navigate('#/c/sri')"><span class="quick-tag warn">SRI</span><span>Sequência rápida</span></button>
      </div>
    </section>

    <section class="container small">
      <div class="section-header"><h2>Princípios</h2></div>
      <div class="principles">
        <div><strong>Reconhecer.</strong> Sinais de gravidade antes de doses. Cada patologia traz a definição operacional e os "red flags".</div>
        <div><strong>Estabilizar.</strong> ABCDE primeiro. Dose certa, via certa, tempo certo. Sem floreio.</div>
        <div><strong>Documentar.</strong> Decisões irreversíveis (transferência, fibrinólise, depot) com respaldo medicolegal — texto-modelo no botão "documentação".</div>
        <div><strong>Recursos do SUS.</strong> CROSS para transferência. Sem TC local? Pense alternativa segura. Limitação é constante, não desculpa.</div>
      </div>
    </section>
  `;
}

/* ============== PATOLOGIA ============== */
function renderPatologia(id) {
  window.scrollTo(0,0);
  const p = PATOLOGIAS_BY_ID[id];
  const v = document.getElementById("view");
  if (!p) {
    v.innerHTML = `<section class="container"><h1>Não encontrado</h1><p>Patologia "${esc(id)}" não está no banco.</p><button class="btn btn-ghost" onclick="navigate('#/')">Voltar</button></section>`;
    return;
  }
  const sis = SISTEMAS[p.sis] || {nome:p.sis, cor:"#666"};
  const alertasHTML = (p.alertas || []).map(alertHTML).join("");
  const examesHTML = listHTML(p.exames, "exames-list");
  const isCompleto = STATE.modo === "completo";

  const completoHTML = isCompleto ? `
    ${p.intro ? `
    <div class="block">
      <h2>Introdução</h2>
      ${richText(p.intro)}
    </div>` : ""}
    <div class="block">
      <h2>Fisiopatologia</h2>
      ${richText(p.fisio || "Sem detalhe específico.")}
    </div>
    ${p.apresentacao ? `
    <div class="block">
      <h2>Apresentação clínica</h2>
      ${richText(p.apresentacao)}
    </div>` : ""}
    ${p.sintomas && p.sintomas.length ? `
    <div class="block">
      <h2>Sinais e sintomas</h2>
      ${listHTML(p.sintomas, "sintomas-list")}
    </div>` : ""}
    ${p.profilaxia ? `
    <div class="block">
      <h2>Profilaxia e cuidados</h2>
      ${richText(p.profilaxia)}
    </div>` : ""}
    ${p.freire ? `
    <div class="block block-freire">
      <h2>🗣️ Orientação ao paciente (lente freireana)</h2>
      ${richText(p.freire)}
    </div>` : ""}
    ${p.sus_tx ? `
    <div class="block">
      <h2>Tratamento no SUS</h2>
      ${richText(p.sus_tx)}
    </div>` : ""}
    ${p.padrao_ouro ? `
    <div class="block">
      <h2>Tratamento padrão-ouro</h2>
      ${richText(p.padrao_ouro)}
    </div>` : ""}
    ${p.prog ? `
    <div class="block">
      <h2>Prognóstico</h2>
      ${richText(p.prog)}
    </div>` : ""}
    ${p.acomp ? `
    <div class="block">
      <h2>Acompanhamento</h2>
      ${richText(p.acomp)}
    </div>` : ""}
    ${p.p4 ? `
    <div class="block block-p4">
      <h2>🛡️ Prevenção Quaternária</h2>
      ${richText(p.p4)}
    </div>` : ""}
    ${p.mec && p.mec.length ? `
    <div class="block">
      <h2>Mecanismo dos fármacos</h2>
      ${mecHTML(p.mec)}
    </div>` : ""}
    <div class="block">
      <h2>Diretriz</h2>
      <p class="lead">${safeHtml(p.diretriz || "—")}</p>
    </div>` : "";

  const fluxoBtn = p.fluxo ? `<button class="btn btn-ghost" onclick="navigate('#/f/${esc(p.fluxo)}')">Ver fluxograma →</button>` : "";

  const calcsBtn = (p.calcs && p.calcs.length) ? `
    <div class="block">
      <h2>Calculadoras relacionadas</h2>
      <div class="chips">
        ${p.calcs.map(cid => {
          const c = CALCS_BY_ID[cid];
          if (!c) return "";
          return `<button class="chip" onclick="navigate('#/c/${cid}')">${safeHtml(c.nome)} →</button>`;
        }).join("")}
      </div>
    </div>` : "";

  v.innerHTML = `
    <article class="container patologia">
      <nav class="bread">
        <a onclick="navigate('#/')">Início</a> ·
        <a onclick="navigate('#/s/${p.sis}')" style="color:${sis.cor}">${esc(sis.nome)}</a>
      </nav>
      <header class="pat-head">
        <div class="pat-head-meta">
          ${gravBadge(p.grav)}
          <span class="sis-tag" style="color:${sis.cor}">${esc(sis.nome)}</span>
          ${p.cid ? `<span class="code-badge code-cid" title="CID-10">${esc(p.cid)}</span>` : ""}
          ${p.ciap ? `<span class="code-badge code-ciap${p.ciapAuto ? ' code-ciap-auto' : ''}" title="CIAP-2 (Wonca)${p.ciapAuto ? ' — inferido automaticamente' : ''}">${esc(p.ciap)}</span>` : ""}
          ${typeof ctxBadgeHTML === 'function' ? ctxBadgeHTML(p) : ""}
        </div>
        <h1>${safeHtml(p.nome)}</h1>
        <p class="lead">${safeHtml(p.def)}</p>
      </header>

      <div class="mode-tabs">
        <button class="mode-tab ${STATE.modo==='rapido'?'active':''}" onclick="setModo('rapido')">⚡ Modo rápido</button>
        <button class="mode-tab ${STATE.modo==='completo'?'active':''}" onclick="setModo('completo')">📖 Modo completo</button>
        ${fluxoBtn}
      </div>

      ${alertasHTML ? `<div class="alerts">${alertasHTML}</div>` : ""}

      ${p.exames && p.exames.length ? `
      <div class="block">
        <h2>Exames essenciais</h2>
        ${examesHTML}
      </div>` : ""}

      ${p.figs && p.figs.length ? `
      <div class="block">
        <h2>Figuras explicativas</h2>
        ${p.figs.map(fid => renderFigura(fid)).join("")}
      </div>` : ""}

      ${p.imgs && p.imgs.length ? `
      <div class="block imgs-block" id="imgs-block-${p.id}">
        <h2>Imagens / radiologia</h2>
        ${imgsHTML(p.imgs, "imgs-block-" + p.id)}
      </div>` : ""}

      ${p.rx && p.rx.length ? `
      <div class="block">
        <h2>Prescrição</h2>
        ${rxTable(p.rx)}
      </div>` : ""}

      ${calcsBtn}
      ${completoHTML}

      <footer class="pat-foot">
        <p class="note">Doses individualizar por peso, função renal/hepática, idade e gestação. Conteúdo educacional — não substitui o julgamento clínico.</p>
        <div class="pat-foot-actions">
          <button class="btn btn-ghost" onclick="window.print()">🖨 Imprimir</button>
          <button class="btn btn-ghost" onclick="gerarCROSS('${p.id}')">📋 Gerar CROSS</button>
        </div>
      </footer>
    </article>
  `;
  if (p.imgs && p.imgs.length) scheduleImgCheck("imgs-block-" + p.id);
}

/* ============== GERADOR DE SOLICITAÇÃO CROSS ============== */
/* Gera texto formal pré-preenchido para solicitação de transferência via CROSS-SP.
   Usuário preenche dados específicos do paciente e copia para o sistema CROSS. */
window.gerarCROSS = function(patId) {
  const p = PATOLOGIAS_BY_ID[patId];
  if (!p) return;
  
  const today = new Date();
  const dt = today.toLocaleDateString("pt-BR") + " às " + today.toLocaleTimeString("pt-BR").slice(0,5);
  
  // Sugestão de recurso/especialidade conforme sistema
  const recursoSug = {
    "cardio": "Vaga de UTI cardiológica / Hemodinâmica / Cardiologista",
    "neuro": "Vaga UTI / Stroke center / Neurocirurgia / Neurologia",
    "resp": "Vaga UTI / Pneumologia",
    "gi": "Cirurgia geral / UTI",
    "gu": "Urologia / Nefrologia",
    "obst": "Maternidade de alto risco / UTI obstétrica",
    "trauma": "Trauma center / Neurocirurgia / Cirurgia geral / UTI",
    "infecto": "Infectologia / UTI",
    "psiq": "Hospital psiquiátrico / Leito psiquiátrico em hospital geral",
    "hemo": "Hematologia / Oncologia / UTI",
    "endo": "Endocrinologia / UTI",
    "iot": "UTI com vaga de ventilação mecânica",
    "ost": "Ortopedia",
    "anaf": "UTI / Alergia",
    "tox": "UTI / Toxicologia",
    "pec": "Centro de referência para acidentes peçonhentos / UTI",
    "oft": "Oftalmologia",
    "derm": "Dermatologia / Unidade de queimados (SJS/NET)",
    "gest": "Maternidade",
    "anal": "Suporte clínico",
    "pali": "Equipe de Cuidados Paliativos / Hospice / Atenção Domiciliar (SAD-EMAD)",
    "proc": "Conforme procedimento",
    "ubs": "Conforme avaliação",
  };
  const recurso = recursoSug[p.sis] || "A definir conforme avaliação";
  
  const template = `═══════════════════════════════════════════════
SOLICITAÇÃO DE TRANSFERÊNCIA — CROSS
═══════════════════════════════════════════════

DATA/HORA DA SOLICITAÇÃO: ${dt}

【 IDENTIFICAÇÃO 】
Nome do paciente: ________________________________
Idade: ___ anos     Sexo: (   ) M  (   ) F
RG/CNS: ___________________     Peso: ____ kg
Procedência: _____________________________________

【 HOSPITAL SOLICITANTE 】
Unidade: _________________________________________
Médico solicitante: ______________________________
CRM: __________________    Telefone: _____________

【 QUADRO CLÍNICO 】
Diagnóstico: ${p.nome.toUpperCase()}
Tempo de evolução: ________________________________

Resumo clínico:
${p.def}

Histórico relevante:
- HMA: ________________________________________
- HPP/comorbidades: ____________________________
- Medicações em uso: ___________________________
- Alergias: ____________________________________

【 SINAIS VITAIS / EXAME FÍSICO ATUAL 】
PA: _____ / _____ mmHg     FC: _____ bpm
FR: _____ irpm     SpO2: _____ %     Tax: _____ °C
Glasgow: _____     Glicemia capilar: _____ mg/dL
Exame físico relevante: __________________________
__________________________________________________

【 EXAMES REALIZADOS 】
${(p.exames || []).map(e => "- " + e).join("\n")}

Resultados disponíveis: __________________________
__________________________________________________

【 CONDUTA REALIZADA NESTA UNIDADE 】
- Acessos: _______________________________________
- Suporte ventilatório: __________________________
- Medicações administradas:
${(p.rx || []).slice(0, 6).map(r => "  • " + r.d + " — " + r.do + " " + (r.via || "")).join("\n")}
- Outras condutas: _______________________________

【 RECURSO/ESPECIALIDADE SOLICITADA 】
► ${recurso}

【 JUSTIFICATIVA PARA TRANSFERÊNCIA 】
- Nossa unidade NÃO dispõe de: ___________________
  (TC/RM, hemodinâmica, neurocirurgia, UTI especializada, etc.)
- Paciente necessita de: _________________________
- Risco da não-transferência: ____________________

【 ESTABILIDADE PARA TRANSPORTE 】
( ) Estável para transporte simples
( ) Necessita UTI móvel / médico
( ) Necessita ventilação mecânica de transporte
( ) Necessita drogas vasoativas em BIC

【 PRINCIPAIS ALERTAS DA CONDIÇÃO 】
${(p.alertas || []).filter(a => a.t === "crit").slice(0, 3).map(a => "⚠ " + a.x).join("\n\n")}

═══════════════════════════════════════════════
Assinatura do médico solicitante:

____________________________________
Nome / CRM
═══════════════════════════════════════════════`;

  // Abrir modal com textarea para copiar
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-head">
        <h3>📋 Solicitação CROSS — ${safeHtml(p.nome)}</h3>
        <button class="icon-btn" onclick="this.closest('.modal-overlay').remove()" aria-label="Fechar">✕</button>
      </div>
      <div class="modal-body">
        <p class="note">Texto pré-preenchido. Edite os campos com dados do paciente e copie para o sistema CROSS.</p>
        <textarea id="crossTextarea" class="cross-textarea" rows="30">${esc(template)}</textarea>
      </div>
      <div class="modal-foot">
        <button class="btn btn-primary" onclick="navigator.clipboard.writeText(document.getElementById('crossTextarea').value).then(()=>{this.textContent='✓ Copiado';setTimeout(()=>this.textContent='📋 Copiar texto',2000);})">📋 Copiar texto</button>
        <button class="btn btn-ghost" onclick="this.closest('.modal-overlay').remove()">Fechar</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
};

/* ============== SISTEMA — LISTA ============== */
function renderSistema(sk) {
  window.scrollTo(0,0);
  const s = SISTEMAS[sk];
  if (!s) return navigate("#/");
  const fitCtx = (typeof itemFitContexto === 'function') ? itemFitContexto : (() => true);
  const lista = PATOLOGIAS.filter(p => p.sis === sk && fitCtx(p))
    .sort((a,b) => {
      const ord = {alta:0, media:1, baixa:2};
      const da = ord[a.grav] ?? 2, db = ord[b.grav] ?? 2;
      if (da !== db) return da - db;
      return a.nome.localeCompare(b.nome,"pt-BR");
    });

  const cards = lista.map(p => `
    <button class="pat-card" onclick="navigate('#/p/${p.id}')">
      <div class="pat-card-head">${gravBadge(p.grav)}</div>
      <h3>${safeHtml(p.nome)}</h3>
      <p>${safeHtml(p.def.length > 140 ? p.def.slice(0,140)+"…" : p.def)}</p>
      ${p.fluxo ? '<span class="has-flow">↳ tem fluxograma</span>' : ""}
    </button>`).join("");

  // Calculadoras associadas a este sistema
  const calcsDoSis = (typeof CALCS !== "undefined" ? CALCS : []).filter(c => c.sis === sk);
  const calcCards = calcsDoSis.map(c => `
    <button class="pat-card" onclick="navigate('#/c/${c.id}')">
      <div class="pat-card-head"><span class="badge-cal">calculadora</span></div>
      <h3>${safeHtml(c.nome)}</h3>
      <p>${safeHtml(c.desc.length > 140 ? c.desc.slice(0,140)+"…" : c.desc)}</p>
    </button>`).join("");

  document.getElementById("view").innerHTML = `
    <section class="container">
      <nav class="bread"><a onclick="navigate('#/')">Início</a> · <span style="color:${s.cor}">${safeHtml(s.nome)}</span></nav>
      <h1 style="color:${s.cor}">${safeHtml(s.nome)}</h1>
      <p class="lead">${lista.length} ${lista.length===1?"patologia":"patologias"}${calcsDoSis.length?` • ${calcsDoSis.length} calculadora${calcsDoSis.length>1?"s":""}`:""}</p>
      ${lista.length ? `<div class="pat-grid">${cards}</div>` : ""}
      ${calcsDoSis.length ? `<h2 style="margin-top:1.5rem;color:${s.cor}">Calculadoras / escalas</h2><div class="pat-grid">${calcCards}</div>` : ""}
    </section>
  `;
}

/* ============== CALCULADORA ============== */
function renderCalc(id) {
  window.scrollTo(0,0);
  const c = CALCS_BY_ID[id];
  const v = document.getElementById("view");
  if (!c) {
    v.innerHTML = `<section class="container"><h1>Calculadora não encontrada</h1><button class="btn btn-ghost" onclick="navigate('#/calcs')">Ver todas</button></section>`;
    return;
  }
  const sis = SISTEMAS[c.sis] || {nome:c.sis, cor:"#666"};

  const fieldsHTML = c.fields.map(f => {
    if (f.tipo === "num") {
      return `<div class="calc-field">
        <label for="cf-${f.id}">${safeHtml(f.label)}</label>
        <input type="number" step="any" id="cf-${f.id}" data-id="${f.id}" data-tipo="num" oninput="recalcCalc('${c.id}')" placeholder="${esc(f.hint||"")}">
        ${f.unidade ? `<span class="calc-unit">${esc(f.unidade)}</span>` : ""}
      </div>`;
    }
    if (f.tipo === "bool") {
      return `<div class="calc-field calc-bool">
        <label>
          <input type="checkbox" id="cf-${f.id}" data-id="${f.id}" data-tipo="bool" data-peso="${f.peso||1}" onchange="recalcCalc('${c.id}')">
          <span>${safeHtml(f.label)}</span>
        </label>
      </div>`;
    }
    if (f.tipo === "select") {
      const opts = f.opts.map(o => `<option value="${o.val}">${esc(o.label)}</option>`).join("");
      return `<div class="calc-field">
        <label for="cf-${f.id}">${safeHtml(f.label)}</label>
        <select id="cf-${f.id}" data-id="${f.id}" data-tipo="select" onchange="recalcCalc('${c.id}')">
          <option value="">— selecione —</option>
          ${opts}
        </select>
      </div>`;
    }
    return "";
  }).join("");

  v.innerHTML = `
    <section class="container calc-page">
      <nav class="bread"><a onclick="navigate('#/')">Início</a> · <a onclick="navigate('#/calcs')">Calculadoras</a> · <span style="color:${sis.cor}">${esc(sis.nome)}</span></nav>
      <h1>${safeHtml(c.nome)}</h1>
      <p class="lead">${safeHtml(c.desc||"")}</p>

      <div class="calc-form">
        ${fieldsHTML}
      </div>

      <div class="calc-result" id="calc-result-${c.id}">
        <div class="calc-result-score"><span class="calc-score-label">Resultado</span><strong id="calc-score-${c.id}">—</strong></div>
        <div class="calc-result-interp" id="calc-interp-${c.id}">Preencha os campos acima.</div>
      </div>
    </section>
  `;
  // chamar uma vez sem inputs para limpar
  recalcCalc(c.id);
}

function recalcCalc(id) {
  const c = CALCS_BY_ID[id];
  if (!c) return;
  const v = {};
  c.fields.forEach(f => {
    const el = document.getElementById("cf-" + f.id);
    if (!el) return;
    if (f.tipo === "num") v[f.id] = el.value === "" ? null : parseFloat(el.value);
    else if (f.tipo === "bool") v[f.id] = el.checked ? (f.peso || 1) : 0;
    else if (f.tipo === "select") v[f.id] = el.value === "" ? null : parseFloat(el.value);
  });

  let res, interp;
  try {
    res = c.calc(v);
    interp = c.interp(res);
  } catch (e) {
    res = "—";
    interp = {risco:"—", acao:"Preencha os campos.", cor:"info"};
  }

  // formatar resultado: número, string, objeto
  let scoreText;
  if (res == null || (typeof res === "number" && isNaN(res))) scoreText = "—";
  else if (typeof res === "object") scoreText = res.label || JSON.stringify(res);
  else if (typeof res === "number") scoreText = (Number.isInteger(res) ? res : res.toFixed(2));
  else scoreText = String(res);

  document.getElementById("calc-score-" + id).textContent = scoreText;

  // Aplicar classe ao container para colorir a borda conforme estado
  const resultEl = document.getElementById("calc-result-" + id);
  if (resultEl) {
    resultEl.classList.remove("has-score","has-score-ok","has-score-warn","has-score-crit");
    if (scoreText !== "—") {
      const cor = (interp && interp.cor) || "info";
      if (cor === "ok") resultEl.classList.add("has-score-ok");
      else if (cor === "warn") resultEl.classList.add("has-score-warn");
      else if (cor === "crit") resultEl.classList.add("has-score-crit");
      else resultEl.classList.add("has-score");
    }
  }

  const interpEl = document.getElementById("calc-interp-" + id);
  if (!interp) {
    interpEl.innerHTML = "Preencha os campos.";
    return;
  }
  const cor = interp.cor || "info";
  const cls = "alert-" + (cor === "crit" ? "crit" : cor === "warn" ? "warn" : cor === "ok" ? "ok" : "info");
  interpEl.innerHTML = `
    <div class="alert ${cls}">
      <span class="alert-ic">${cor==="crit"?"⚠":cor==="warn"?"!":cor==="ok"?"✓":"ℹ"}</span>
      <div><strong>${esc(interp.risco||"")}</strong>${interp.acao ? "<br>" + esc(interp.acao) : ""}</div>
    </div>`;
}

/* ============== LISTA DE CALCULADORAS ============== */
function renderCalcs() {
  window.scrollTo(0,0);
  const fitCtx = (typeof itemFitContexto === 'function') ? itemFitContexto : (() => true);
  // agrupar por sistema (após filtro de contexto)
  const groups = {};
  CALCS.filter(fitCtx).forEach(c => { (groups[c.sis] = groups[c.sis] || []).push(c); });

  let html = "";
  Object.entries(SISTEMAS)
    .sort((a,b) => a[1].ord - b[1].ord)
    .forEach(([k,s]) => {
      const arr = groups[k];
      if (!arr || !arr.length) return;
      html += `<div class="calc-group">
        <h2 style="color:${s.cor}">${safeHtml(s.nome)}</h2>
        <div class="calc-list">
          ${arr.map(c => `
            <button class="calc-item" onclick="navigate('#/c/${c.id}')">
              <strong>${safeHtml(c.nome)}</strong>
              <span>${safeHtml(c.desc||"")}</span>
            </button>`).join("")}
        </div>
      </div>`;
    });

  document.getElementById("view").innerHTML = `
    <section class="container">
      <nav class="bread"><a onclick="navigate('#/')">Início</a> · Calculadoras</nav>
      <h1>Calculadoras</h1>
      <p class="lead">${CALCS.length} escores e calculadoras de uso imediato no plantão.</p>
      ${html}
    </section>
  `;
}

/* ============== FLUXOGRAMA ============== */
function renderFlow(id) {
  window.scrollTo(0,0);
  const f = FLOWS[id];
  const v = document.getElementById("view");
  if (!f) {
    v.innerHTML = `<section class="container"><h1>Fluxograma não encontrado</h1><button class="btn btn-ghost" onclick="navigate('#/flows')">Ver todos</button></section>`;
    return;
  }
  // patologias que apontam para este fluxo
  const related = PATOLOGIAS.filter(p => p.fluxo === id);

  v.innerHTML = `
    <section class="container flow-page">
      <nav class="bread"><a onclick="navigate('#/')">Início</a> · <a onclick="navigate('#/flows')">Fluxogramas</a></nav>
      <h1>${safeHtml(f.titulo)}</h1>
      <p class="lead">Decisão estruturada por etapas. Toque para ampliar / arraste para navegar.</p>

      <div class="flow-container">${f.svg}</div>

      <p class="note">Fonte: ${safeHtml(f.fonte)}</p>

      ${related.length ? `
      <div class="block">
        <h2>Patologias relacionadas</h2>
        <div class="chips">
          ${related.map(p => `<button class="chip" onclick="navigate('#/p/${p.id}')">${safeHtml(p.nome)} →</button>`).join("")}
        </div>
      </div>` : ""}

      <div class="actions-row">
        <button class="btn btn-ghost" onclick="window.print()">Imprimir</button>
        <button class="btn btn-ghost" onclick="navigate('#/flows')">← Voltar aos fluxogramas</button>
      </div>
    </section>
  `;
}

/* ============== LISTA DE FLUXOGRAMAS ============== */
function renderFlows() {
  window.scrollTo(0,0);
  const cards = FLOWS_LIST.map(id => {
    const f = FLOWS[id];
    const related = PATOLOGIAS.filter(p => p.fluxo === id);
    return `<button class="flow-card" onclick="navigate('#/f/${id}')">
      <h3>${safeHtml(f.titulo)}</h3>
      <p>${safeHtml(f.fonte)}</p>
      ${related.length ? `<span class="flow-card-tag">${related.length} ${related.length===1?"patologia":"patologias"}</span>` : ""}
    </button>`;
  }).join("");

  document.getElementById("view").innerHTML = `
    <section class="container">
      <nav class="bread"><a onclick="navigate('#/')">Início</a> · Fluxogramas</nav>
      <h1>Fluxogramas decisionais</h1>
      <p class="lead">${FLOWS_LIST.length} fluxogramas críticos com SVG interativo — print-friendly.</p>
      <div class="flow-grid">${cards}</div>
    </section>
  `;
}

/* ============== MEDICAÇÕES — Biblioteca ============== */
function renderMedicacoes() {
  window.scrollTo(0,0);
  const fitCtx = (typeof itemFitContexto === 'function') ? itemFitContexto : (() => true);
  // Agrupar por grupo (após filtro de contexto)
  const byGrupo = {};
  MEDICACOES.filter(fitCtx).forEach(m => {
    const g = m.grupo || "outros";
    if (!byGrupo[g]) byGrupo[g] = [];
    byGrupo[g].push(m);
  });
  const grupoNomes = {
    atb: "Antibióticos / Antifúngicos / Antivirais",
    anticoag: "Anticoagulantes",
    vasopressor: "Vasopressores / Inotrópicos",
    sedativo: "Sedativos / Anestésicos / BNM",
    analgesia: "Analgésicos / Opioides",
    antiarritmico: "Antiarrítmicos",
    anti_hipertensivo: "Anti-hipertensivos (HAS crônica)",
    antidiabetico: "Antidiabéticos / Insulinas (DM)",
    lipemiante: "Lipemiantes (Dislipidemia)",
    endocrino: "Endócrino / Metabólico / Diuréticos",
    cardio: "Cardiovascular",
    resp: "Respiratório / Broncodilatadores (crise)",
    bd: "Broncodilatadores crônicos (Asma / DPOC manutenção)",
    neuro: "Anticonvulsivantes / Neuro",
    psiq: "Psiquiátrico — Antidepressivos / Ansiolíticos / Hipnóticos",
    alergia: "Antialérgicos / Anti-histamínicos H1",
    pali: "Paliativos — adjuvantes / antieméticos / antimuscarínicos / laxativos",
    gi: "Gastrintestinal (IBPs, H2, antieméticos)",
    ost: "Osteomuscular / Gota / Antirreumáticos",
    outros: "Outros",
  };
  const ord = ["vasopressor","sedativo","analgesia","antiarritmico","anti_hipertensivo","antidiabetico","lipemiante","atb","anticoag","endocrino","cardio","resp","bd","neuro","psiq","alergia","pali","gi","ost","outros"];

  const sections = ord.filter(g => byGrupo[g]).map(g => {
    const cards = byGrupo[g].map(m => `
      <button class="med-card" onclick="navigate('#/m/${m.id}')">
        <div class="med-card-rx">℞</div>
        <div class="med-card-body">
          <h3>${safeHtml(m.nome)}</h3>
          <p>${safeHtml(m.classe || "")}</p>
          ${m.dose_rapida ? `<p class="med-card-dose">${esc(m.dose_rapida.slice(0,80))}${m.dose_rapida.length > 80 ? "…" : ""}</p>` : ""}
        </div>
      </button>
    `).join("");
    return `<h2 class="med-grupo">${esc(grupoNomes[g] || g)}</h2><div class="med-grid">${cards}</div>`;
  }).join("");

  document.getElementById("view").innerHTML = `
    <section class="container">
      <nav class="bread"><a onclick="navigate('#/')">Início</a> · Biblioteca de Medicações</nav>
      <h1>Biblioteca de Medicações ℞</h1>
      <p class="lead">${MEDICACOES.length} medicações de emergência com fisiopatologia, farmacocinética, doses por indicação, ajustes especiais (IRC/IH/idoso/gestante/pediatria), preparo, espectro, interações, efeitos adversos e alertas medicolegais.</p>
      ${sections}
    </section>
  `;
}

function renderMedicacao(id) {
  window.scrollTo(0,0);
  const m = MEDICACOES.find(x => x.id === id);
  const v = document.getElementById("view");
  if (!m) {
    v.innerHTML = `<section class="container"><h1>Medicação não encontrada</h1><button class="btn btn-ghost" onclick="navigate('#/meds')">Ver biblioteca</button></section>`;
    return;
  }

  // Doses por indicação
  const dosesHTML = (m.doses || []).map(d => `
    <tr>
      <td><strong>${esc(d.ind)}</strong></td>
      <td><code>${esc(d.dose)}</code></td>
      <td class="med-obs">${esc(d.obs || "")}</td>
    </tr>
  `).join("");

  // Ajustes
  const aj = m.ajustes || {};
  const ajustesHTML = `
    <table class="med-table med-ajustes">
      <tr><th>Insuf. Renal</th><td>${esc(aj.irc || "—")}</td></tr>
      <tr><th>Insuf. Hepática</th><td>${esc(aj.iht || "—")}</td></tr>
      <tr><th>Idoso</th><td>${esc(aj.idoso || "—")}</td></tr>
      <tr><th>Gestante</th><td>${esc(aj.gestante || "—")}</td></tr>
      <tr><th>Aleitamento</th><td>${esc(aj.aleita || "—")}</td></tr>
      <tr><th>Pediatria</th><td>${esc(aj.ped || "—")}</td></tr>
    </table>
  `;

  // Farmacocinética
  const fk = m.farmacocin || {};
  const fkHTML = `
    <dl class="med-fk">
      ${fk.absorc ? `<dt>Absorção</dt><dd>${esc(fk.absorc)}</dd>` : ""}
      ${fk.distrib ? `<dt>Distribuição</dt><dd>${esc(fk.distrib)}</dd>` : ""}
      ${fk.metab ? `<dt>Metabolismo</dt><dd>${esc(fk.metab)}</dd>` : ""}
      ${fk.elimin ? `<dt>Eliminação</dt><dd>${esc(fk.elimin)}</dd>` : ""}
      ${fk.meiavida ? `<dt>Meia-vida</dt><dd>${esc(fk.meiavida)}</dd>` : ""}
      ${fk.ligacao ? `<dt>Ligação proteica</dt><dd>${esc(fk.ligacao)}</dd>` : ""}
    </dl>
  `;

  // Espectro (para ATBs)
  const espectroHTML = m.espectro && m.espectro.length ? `
    <h2>Espectro de ação</h2>
    <ul class="med-list">${m.espectro.map(e => `<li>${esc(e)}</li>`).join("")}</ul>
  ` : "";

  // Interações
  const interacoesHTML = m.interacoes && m.interacoes.length ? `
    <h2>Interações importantes</h2>
    <table class="med-table">
      <thead><tr><th>Droga</th><th>Efeito</th></tr></thead>
      <tbody>${m.interacoes.map(i => `<tr><td><strong>${esc(i.droga)}</strong></td><td>${esc(i.efeito)}</td></tr>`).join("")}</tbody>
    </table>
  ` : "";

  // Efeitos adversos
  const tipoLabel = (t) => {
    if (t === "comum") return "Comuns";
    if (t === "sério_agudo") return "Sérios (agudos)";
    if (t === "sério_cronico") return "Sérios (crônicos)";
    if (t === "sério" || t === "grave") return "Sérios";
    return "Raros";
  };
  // Schema novo: m.efeitos = [{tipo, item}]
  // Schema antigo: m.ef_colats = {comuns:[], sérios:[], raros:[]} (objeto)
  let efeitosHTML = "";
  if (m.efeitos && m.efeitos.length) {
    efeitosHTML = `
      <h2>Efeitos adversos</h2>
      <table class="med-table med-efeitos">
        ${m.efeitos.map(e => `<tr><td class="med-tipo med-tipo-${e.tipo.split("_")[0]}">${tipoLabel(e.tipo)}</td><td>${esc(e.item)}</td></tr>`).join("")}
      </table>
    `;
  } else if (m.ef_colats && typeof m.ef_colats === "object") {
    const rows = [];
    const map = { "comuns": "comum", "sérios": "sério", "serios": "sério", "raros": "raro", "graves": "sério" };
    Object.entries(m.ef_colats).forEach(([cat, items]) => {
      const tipo = map[cat] || cat;
      const label = tipoLabel(tipo);
      const cls = tipo.split("_")[0];
      (items || []).forEach(item => {
        rows.push(`<tr><td class="med-tipo med-tipo-${cls}">${label}</td><td>${esc(item)}</td></tr>`);
      });
    });
    if (rows.length) {
      efeitosHTML = `<h2>Efeitos adversos</h2><table class="med-table med-efeitos">${rows.join("")}</table>`;
    }
  }

  // Alertas — schema novo: m.alertas = [{nivel, txt}]
  // Schema antigo: m.contraindicacoes = [strings] — convertemos para alertas crit
  let alertasArr = [];
  if (m.alertas && m.alertas.length) {
    alertasArr = m.alertas;
  } else if (m.contraindicacoes && m.contraindicacoes.length) {
    alertasArr = m.contraindicacoes.map(c => ({nivel:"crit", txt: "Contraindicado: " + c}));
  }
  const alertasHTML = alertasArr.length ? `
    <h2>⚠ Alertas medicolegais</h2>
    <div class="med-alertas">
      ${alertasArr.map(a => `<div class="alert alert-${a.nivel === "crit" ? "crit" : a.nivel === "warn" ? "warn" : "info"}">
        <span class="alert-ic">${a.nivel === "crit" ? "⚠" : a.nivel === "warn" ? "!" : "ℹ"}</span>
        <div>${esc(a.txt)}</div>
      </div>`).join("")}
    </div>
  ` : "";

  // Apresentações
  const formasHTML = m.formas && m.formas.length ? `
    <h2>Apresentações</h2>
    <ul class="med-list">${m.formas.map(f => `<li>${esc(f)}</li>`).join("")}</ul>
  ` : "";

  v.innerHTML = `
    <section class="container med-page">
      <nav class="bread"><a onclick="navigate('#/')">Início</a> · <a onclick="navigate('#/meds')">Medicações</a> · ${esc(m.classe || "")}</nav>

      <div class="med-header">
        <div class="med-rx">℞</div>
        <div>
          <h1>${safeHtml(m.nome)}</h1>
          ${m.sin && m.sin.length ? `<p class="med-sin">${m.sin.map(s => esc(s)).join(" · ")}</p>` : ""}
          <p class="med-classe">${esc(m.classe || "")}</p>
        </div>
      </div>

      ${m.resumo ? `<div class="med-resumo">${esc(m.resumo)}</div>` : ""}

      ${m.dose_rapida ? `
        <div class="med-dose-rapida">
          <span class="med-dose-label">DOSE RÁPIDA</span>
          <code>${esc(m.dose_rapida)}</code>
        </div>
      ` : ""}

      ${formasHTML}

      <h2>Doses por indicação</h2>
      <table class="med-table med-doses">
        <thead><tr><th>Indicação</th><th>Dose</th><th>Observação</th></tr></thead>
        <tbody>${dosesHTML}</tbody>
      </table>

      <h2>Ajustes especiais</h2>
      ${ajustesHTML}

      ${m.mecanismo ? `<h2>Mecanismo de ação</h2><p class="med-mecanismo">${esc(m.mecanismo)}</p>` : ""}

      <h2>Farmacocinética</h2>
      ${fkHTML}

      ${espectroHTML}

      ${m.preparo ? `<h2>Preparo / diluição</h2><p class="med-preparo">${esc(m.preparo)}</p>` : ""}

      ${interacoesHTML}

      ${efeitosHTML}

      ${alertasHTML}

      ${m.monitor ? `<h2>Monitorização</h2><p>${esc(m.monitor)}</p>` :
        (m.monit && m.monit.length ? `<h2>Monitorização</h2><ul class="med-list">${m.monit.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : "")}

      ${(m.gravidez || m.sus || m.remume) ? `
        <h2>Status legado</h2>
        <dl class="med-fk">
          ${m.gravidez ? `<dt>Categoria gestação (FDA)</dt><dd>${esc(m.gravidez)}</dd>` : ""}
          ${m.sus ? `<dt>Disponibilidade SUS</dt><dd>${esc(m.sus)}</dd>` : ""}
          ${m.remume ? `<dt>REMUME</dt><dd>${esc(m.remume)}</dd>` : ""}
        </dl>
      ` : ""}

      ${m.diretriz ? `<p class="med-diretriz"><strong>Referências:</strong> ${esc(m.diretriz)}</p>` :
        (m.referencias && m.referencias.length ? `<p class="med-diretriz"><strong>Referências:</strong> ${m.referencias.map(r => esc(r)).join("; ")}</p>` : "")}
    </section>
  `;
}

/* ============== SOBRE / COMO USAR ============== */
function renderSobre() {
  window.scrollTo(0,0);
  document.getElementById("view").innerHTML = `
    <section class="container small">
      <nav class="bread"><a onclick="navigate('#/')">Início</a> · Como usar</nav>
      <h1>Como usar este guia</h1>
      <p class="lead">Tudo que você precisa saber em 2 minutos para tirar o máximo proveito no plantão e na UBS.</p>

      <div class="block">
        <h2>O que é isto</h2>
        <p>Guia educacional brasileiro de pronto-atendimento e atenção primária, sem fins lucrativos, baseado em diretrizes nacionais (SBMFC, SBC, SBPT, ABP, FEBRASGO, SBP, SBD, SBIm, MS-PCDT, Butantan/Funasa) e internacionais (AHA/ACC, ESC, ADA/EASD, GINA, GOLD, Tokyo Guidelines, WSES, KDIGO, WAO/EAACI, IDSA, SSC, NICE, USPSTF).</p>
        <p>Cada conduta vem com sua diretriz fonte (autor, ano, DOI quando disponível) e foi pensada para a <strong>porta de entrada</strong> — adulto e idoso que chega ao plantão ou retorna à UBS. Para criança e adolescente, ver o site irmão <a href="https://felipertoledo.github.io/Whitepobre2/" target="_blank" rel="noopener"><strong>WhitePobre · Pediatria de Bolso</strong></a>.</p>
      </div>

      <div class="block">
        <h2>Quem fez isto</h2>
        <p><strong>Felipe Ribeiro Toledo</strong> — Médico de Família e Comunidade, <strong>CRM-SP 216.986</strong>, atuando na UBS de Estiva Gerbi (SP), bairro Ludi.</p>
        <p>Graduado pela Universidade Anhembi Morumbi (campus Mooca), com Residência em MFC pela USP, Mestrado e Doutorado em Atenção Primária à Saúde também pela USP, e título de especialista pela SBMFC. Pesquisador na interface entre clínica, território e pedagogia freireana aplicada à medicina.</p>
        <p>O Vovôminic Doutô é trabalho independente, sem fins lucrativos. Não recebe patrocínio de indústria farmacêutica nem operadora de saúde. O propósito é educacional — apoiar colegas em formação e em prática no SUS, especialmente em territórios com acesso restrito a referências atualizadas.</p>
      </div>

      <div class="block">
        <h2>Como contribuir</h2>
        <p>Encontrou erro, conduta desatualizada, fonte equivocada? Quer sugerir uma patologia, calculadora ou fluxograma? Quer reportar uma situação onde o guia ajudou (ou não ajudou) no plantão?</p>
        <p>O projeto melhora com retorno da prática. Contato pelo Instagram <strong>@vovôminic</strong> ou por e-mail <strong>felipertoledo@gmail.com</strong>.</p>
      </div>

      <div class="block">
        <h2>Prioridades dos cards (badges coloridos)</h2>
        <p>Cada patologia tem uma etiqueta de gravidade no canto superior do card. Indica o <strong>nível de ameaça à vida e urgência de ação</strong>:</p>
        <div class="prio-grid">
          <div class="prio-item">
            <span class="badge badge-crit">alta</span>
            <div>
              <strong>Vermelho — alta gravidade.</strong> Risco imediato à vida ou perda de função em horas. Exige reconhecimento e ação rápidos. Ex: SCA com supra, AVCi em janela, sepse, anafilaxia, CAD grave, status epilepticus, TEP maciço, dissecção, choque, hipercalemia &gt; 6,5, EAP, peçonhentos com manifestação sistêmica, intoxicações com instabilidade.
            </div>
          </div>
          <div class="prio-item">
            <span class="badge badge-warn">média</span>
            <div>
              <strong>Amarelo — gravidade intermediária.</strong> Pode se deteriorar; demanda investigação e tratamento estruturado no plantão, mas a janela de ação é de horas. Ex: pielonefrite, colelitíase, exacerbação de DPOC, urticária sem anafilaxia, urolitíase, lombalgia com bandeira vermelha, sangramento ginecológico, hemocomponentes.
            </div>
          </div>
          <div class="prio-item">
            <span class="badge badge-ok">baixa</span>
            <div>
              <strong>Verde — gravidade baixa.</strong> Quadros prevalentes, em geral autolimitados, mas você precisa <em>descartar</em> diagnósticos graves antes de classificar como "baixa". Ex: cefaleia tensional, faringoamigdalite viral, conjuntivite, candidíase em gestante, ansiedade situacional, rinite, mordeduras superficiais.
            </div>
          </div>
        </div>
        <p class="note">A gravidade é do quadro <em>típico</em>. Um paciente individual pode estar grave em uma patologia "baixa" (ex: faringite com sinais de epiglotite) — sempre prevaleça o exame clínico.</p>
      </div>

      <div class="block">
        <h2>Modos de leitura — Rápido vs Completo</h2>
        <p>Dentro de cada patologia, há um botão de alternância:</p>
        <ul class="mec-list">
          <li><strong>⚡ Modo rápido</strong> — mostra apenas o essencial para agir: definição operacional, alertas, exames mínimos e prescrição pronta. É a "cola de plantão". Padrão na primeira abertura.</li>
          <li><strong>📖 Modo completo</strong> — adiciona fisiopatologia, mecanismo molecular dos fármacos e a diretriz com referência. Para estudar entre atendimentos ou quando precisa explicar à equipe.</li>
        </ul>
        <p>Sua escolha fica salva no navegador.</p>
      </div>

      <div class="block">
        <h2>Como navegar</h2>
        <ul class="mec-list">
          <li><strong>Busca global</strong> — clique na barra superior ou aperte <span class="kbd-hint">/</span> (barra). Procura em nomes, sinônimos, definições, sistemas. Funciona com acentos ou sem. Resultados misturam patologias 📋, calculadoras 🧮 e fluxogramas 📊.</li>
          <li><strong>Sistemas</strong> — na home, role até "Por sistema". Cada card abre a lista de patologias daquele sistema, ordenadas por gravidade (alta primeiro).</li>
          <li><strong>Atalhos críticos</strong> — na home, blocos prontos para PCR, IAM, AVC, sepse, anafilaxia, EME, CAD e outros. Um clique → fluxograma.</li>
          <li><strong>Calculadoras</strong> — agrupadas por sistema na página <em>Calculadoras</em>. Resultado e interpretação atualizam em tempo real conforme você preenche.</li>
          <li><strong>Fluxogramas</strong> — 15 mapas decisionais em SVG, print-friendly. Cada um cita a diretriz-fonte.</li>
          <li><strong>Voltar</strong> — use a barra de navegação (breadcrumb) no topo de cada página, ou clique no logo "Vovôminic".</li>
          <li><strong>Imprimir</strong> — botão "Imprimir" dentro de patologia e fluxograma; o layout simplifica automaticamente.</li>
        </ul>
      </div>

      <div class="block">
        <h2>Atalhos de teclado</h2>
        <ul class="mec-list">
          <li><span class="kbd-hint">/</span> — foca a busca</li>
          <li><span class="kbd-hint">Esc</span> — fecha a busca</li>
        </ul>
      </div>

      <div class="block">
        <h2>Alertas — o que significa a cor</h2>
        <div class="alerts">
          ${alertHTML({t:"crit", x:"<strong>Crítico.</strong> Decisão irreversível, risco de óbito, ou contraindicação absoluta. Ex: 'NUNCA atrasar adrenalina IM na anafilaxia para puncionar acesso.'"})}
          ${alertHTML({t:"warn", x:"<strong>Atenção.</strong> Armadilha frequente ou condição que muda o manejo. Ex: 'β-bloqueador contraindicado em intoxicação por cocaína isolada.'"})}
          ${alertHTML({t:"ok",   x:"<strong>Confirmar / referência.</strong> Reforço de uma boa prática ou critério-padrão. Ex: 'PAS &lt; 185/110 antes de iniciar trombólise.'"})}
          ${alertHTML({t:"info", x:"<strong>Informativo.</strong> Contexto adicional, sem mudar conduta imediata."})}
        </div>
      </div>

      <div class="block">
        <h2>Tema</h2>
        <p>O ícone de sol/lua no canto superior direito alterna entre <strong>tema claro</strong> e <strong>escuro</strong>. Tema escuro é otimizado para uso noturno no plantão. A escolha fica salva no navegador.</p>
      </div>

      <div class="block">
        <h2>Limitações importantes</h2>
        <ul class="mec-list">
          <li>Este guia <strong>não substitui</strong> o julgamento clínico do médico.</li>
          <li>Doses precisam ser <em>individualizadas</em> por peso, função renal/hepática, idade, comorbidades e gestação.</li>
          <li>Pediatria: <strong>sempre recalcular por peso/superfície corporal</strong>.</li>
          <li>Gestantes/lactantes: confirmar categoria de risco antes de qualquer prescrição.</li>
          <li>Quando recursos forem limitados (sem TC local, sem hemodinâmica), use o CROSS para transferência e <strong>documente a indicação no prontuário</strong> antes da remoção.</li>
          <li>O conteúdo é atualizado pontualmente, mas <em>verifique a bula</em> antes de medicamentos com janela terapêutica estreita (digitálico, anticoagulantes, antiarrítmicos, fibrinolíticos).</li>
        </ul>
      </div>

      <div class="block">
        <h2>Atribuição</h2>
        <p>Imagens e referências, quando presentes: Radiopaedia (CC BY-NC-SA), DermNet (CC BY-NC-ND), LITFL (FOAM), CDC PHIL (domínio público), Wikimedia Commons. Atribuição completa no rodapé de cada figura.</p>
        <p class="note">Vovôminic Emergência é um projeto educacional, sem fins lucrativos. Sem coleta de dados pessoais. Funciona inteiramente offline depois de carregado.</p>
      </div>

      <div class="actions-row">
        <button class="btn btn-primary" onclick="navigate('#/')">← Voltar à home</button>
      </div>
    </section>
  `;
}

/* ============== BUSCA FUZZY PT-BR ============== */
function normStr(s) {
  return String(s||"").toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .replace(/[^a-z0-9\s]/g," ")
    .replace(/\s+/g," ").trim();
}

function buildSearchIndex() {
  const fitCtx = (typeof itemFitContexto === 'function') ? itemFitContexto : (() => true);
  const idx = [];
  PATOLOGIAS.filter(fitCtx).forEach(p => {
    const text = [p.nome, p.def, ...(p.sin||[]), SISTEMAS[p.sis]?.nome].filter(Boolean).join(" · ");
    idx.push({tipo:"p", id:p.id, nome:p.nome, sub:SISTEMAS[p.sis]?.nome||p.sis, search:normStr(text), grav:p.grav});
  });
  CALCS.filter(fitCtx).forEach(c => {
    const text = [c.nome, c.desc, SISTEMAS[c.sis]?.nome].filter(Boolean).join(" · ");
    idx.push({tipo:"c", id:c.id, nome:c.nome, sub:"Calc · " + (SISTEMAS[c.sis]?.nome||c.sis), search:normStr(text)});
  });
  FLOWS_LIST.forEach(fid => {
    const f = FLOWS[fid];
    if (typeof itemFitContexto === 'function' && !itemFitContexto(f)) return;
    const fonte = f.fonte || f.descricao || "";
    idx.push({tipo:"f", id:fid, nome:f.titulo, sub:"Fluxograma · " + fonte.split(";")[0], search:normStr(f.titulo + " " + fonte)});
  });
  if (typeof MEDICACOES !== "undefined") {
    MEDICACOES.filter(fitCtx).forEach(m => {
      const text = [m.nome, m.classe, ...(m.sin || []), m.resumo, m.dose_rapida].filter(Boolean).join(" · ");
      idx.push({tipo:"m", id:m.id, nome:m.nome, sub:"Medicação · " + (m.classe || ""), search:normStr(text)});
    });
  }
  return idx;
}

let SEARCH_INDEX = buildSearchIndex();

function searchFuzzy(q) {
  const nq = normStr(q);
  if (!nq) return [];
  const terms = nq.split(" ").filter(t => t.length >= 2);
  if (!terms.length) return [];

  const results = [];
  SEARCH_INDEX.forEach(item => {
    let score = 0;
    let matchedAll = true;
    terms.forEach(t => {
      if (item.search.includes(t)) {
        score += 10;
        // bonus se começa com o termo
        if (item.search.startsWith(t) || item.search.includes(" " + t)) score += 5;
        // bonus se está no nome
        if (normStr(item.nome).includes(t)) score += 15;
      } else {
        matchedAll = false;
      }
    });
    if (matchedAll && score > 0) {
      results.push({...item, score});
    }
  });

  results.sort((a,b) => b.score - a.score);
  return results.slice(0,12);
}

function renderSearchResults(results) {
  const box = document.getElementById("searchResults");
  if (!results.length) {
    box.innerHTML = '<div class="search-empty sr-empty">Nada encontrado. Tente outro termo.</div>';
    box.classList.add("visible","open");
    return;
  }
  box.innerHTML = results.map(r => {
    const path = r.tipo === "p" ? `#/p/${r.id}` : r.tipo === "c" ? `#/c/${r.id}` : r.tipo === "m" ? `#/m/${r.id}` : `#/f/${r.id}`;
    const ic = r.tipo === "p" ? "📋" : r.tipo === "c" ? "🧮" : r.tipo === "m" ? "℞" : "📊";
    const gr = r.grav ? gravBadge(r.grav) : "";
    return `<a class="search-item sr-item" onclick="navigate('${path}')">
      <span class="search-ic sr-icon">${ic}</span>
      <div class="search-info sr-content">
        <strong>${safeHtml(r.nome)}</strong>
        <span>${safeHtml(r.sub)}</span>
      </div>
      ${gr}
    </a>`;
  }).join("");
  box.classList.add("visible","open");
}

/* listener da busca */
let searchT;
document.getElementById("search").addEventListener("input", (e) => {
  clearTimeout(searchT);
  const q = e.target.value;
  if (!q) {
    document.getElementById("searchResults").classList.remove("visible","open");
    return;
  }
  searchT = setTimeout(() => {
    renderSearchResults(searchFuzzy(q));
  }, 60);
});

/* atalho "/" para focar busca */
document.addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA" && document.activeElement.tagName !== "SELECT") {
    e.preventDefault();
    document.getElementById("search").focus();
  }
  if (e.key === "Escape") {
    document.getElementById("searchResults").classList.remove("visible","open");
    document.getElementById("search").blur();
  }
});

/* fechar resultados ao clicar fora */
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-shell")) {
    document.getElementById("searchResults").classList.remove("visible","open");
  }
});

/* ============== PWA: Service Worker + Install Prompt ============== */
/* Service Worker via Blob URL — funciona em HTTPS/localhost (deploy GitHub Pages).
   Em file:// não funciona SW, mas o HTML já é self-contained = offline natural. */
window.__deferredInstallPrompt = null;
window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  window.__deferredInstallPrompt = e;
  // Botão de instalar aparece no topbar (renderizado pela home)
  const btn = document.getElementById("btnInstall");
  if (btn) btn.style.display = "inline-flex";
});

window.installPWA = function() {
  if (!window.__deferredInstallPrompt) {
    alert("Para instalar manualmente:\n\n• Android/Chrome: Menu (⋮) → Adicionar à tela inicial\n• iPhone/Safari: Compartilhar (□↑) → Adicionar à Tela de Início\n• Desktop: ícone de instalação na barra de endereço");
    return;
  }
  window.__deferredInstallPrompt.prompt();
  window.__deferredInstallPrompt.userChoice.then(() => {
    window.__deferredInstallPrompt = null;
    const btn = document.getElementById("btnInstall");
    if (btn) btn.style.display = "none";
  });
};

/* Registrar Service Worker via Blob (sem precisar de arquivo separado).
   Cacheia tudo na 1ª visita; usa cache se offline. */
if ("serviceWorker" in navigator && location.protocol !== "file:") {
  const swSource = `
    const CACHE_NAME = "vovominic-er-v3";
    self.addEventListener("install", e => {
      e.waitUntil(caches.open(CACHE_NAME));
      self.skipWaiting();
    });
    self.addEventListener("activate", e => {
      e.waitUntil(
        caches.keys().then(keys => Promise.all(
          keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
        )).then(() => self.clients.claim())
      );
    });
    self.addEventListener("fetch", e => {
      if (e.request.method !== "GET") return;
      e.respondWith(
        caches.open(CACHE_NAME).then(cache =>
          cache.match(e.request).then(cached => {
            const fetchPromise = fetch(e.request).then(resp => {
              if (resp.ok && resp.type !== "opaque") cache.put(e.request, resp.clone());
              return resp;
            }).catch(() => cached);
            return cached || fetchPromise;
          })
        )
      );
    });
  `;
  try {
    const blob = new Blob([swSource], { type: "application/javascript" });
    const url = URL.createObjectURL(blob);
    navigator.serviceWorker.register(url).catch(() => { /* silencioso — fallback é HTML standalone */ });
  } catch (e) {
    // ignore
  }
}

/* ============== INICIALIZAÇÃO ============== */
window.addEventListener("load", () => {
  applyTheme();
  routeFromHash();
});
