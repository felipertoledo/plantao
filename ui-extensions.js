/* ===========================================================
   VOVÔMINIC DOUTÔ — UI EXTENSIONS
   Camadas 1+2+3: Cmd+K, TOC, histórico, favoritos, atalhos,
                  tooltips, polimento, compare, notas, print
   =========================================================== */

(function(){
"use strict";

// =================================================================
// STORAGE HELPERS
// =================================================================
const STORAGE = {
  RECENT: "vm-recent",
  FAV: "vm-fav",
  NOTES: "vm-notes",
  DENSE: "vm-dense",
  COMPARE: "vm-compare-active"
};

function readJSON(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch(e) { return fallback; }
}
function writeJSON(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch(e) {}
}

// =================================================================
// HISTÓRICO (Recently viewed) — max 30 itens
// =================================================================
const MAX_RECENT = 30;
function addToRecent(type, id, label) {
  if (!id || !type) return;
  let recent = readJSON(STORAGE.RECENT, []);
  // remove se já existe
  recent = recent.filter(r => !(r.type === type && r.id === id));
  // adiciona no topo
  recent.unshift({ type, id, label, ts: Date.now() });
  // cap
  if (recent.length > MAX_RECENT) recent = recent.slice(0, MAX_RECENT);
  writeJSON(STORAGE.RECENT, recent);
}
function getRecent(limit) {
  const arr = readJSON(STORAGE.RECENT, []);
  return limit ? arr.slice(0, limit) : arr;
}
function clearRecent() {
  writeJSON(STORAGE.RECENT, []);
}

// =================================================================
// FAVORITOS / PINADOS
// =================================================================
function getFav() { return readJSON(STORAGE.FAV, []); }
function isFav(type, id) {
  return getFav().some(f => f.type === type && f.id === id);
}
function toggleFav(type, id, label) {
  let fav = getFav();
  const idx = fav.findIndex(f => f.type === type && f.id === id);
  if (idx >= 0) {
    fav.splice(idx, 1);
  } else {
    fav.unshift({ type, id, label, ts: Date.now() });
  }
  writeJSON(STORAGE.FAV, fav);
  return idx < 0; // true se acabou de fixar
}

// =================================================================
// ROTAS HELPERS — converter type+id em hash
// =================================================================
function routeFor(type, id) {
  switch(type) {
    case "pat": return "#/p/" + id;
    case "med": return "#/m/" + id;
    case "calc": return "#/c/" + id;
    case "flow": return "#/f/" + id;
    case "sis":  return "#/s/" + id;
    default: return "#/";
  }
}
function typeIcon(type) {
  return { pat:"🏥", med:"💊", calc:"🧮", flow:"🗺️", sis:"📁" }[type] || "📄";
}
function typeLabel(type) {
  return { pat:"Patologia", med:"Medicação", calc:"Calculadora", flow:"Fluxograma", sis:"Sistema" }[type] || "—";
}

// =================================================================
// CMD+K — PALETA DE COMANDO
// =================================================================
let cmdkBuilt = false;
let cmdkIndex = []; // [{ type, id, name, sis }]
let cmdkSelectedIdx = 0;
let cmdkLastResults = [];

function buildCmdkIndex() {
  cmdkIndex = [];
  if (typeof PATOLOGIAS !== "undefined") {
    PATOLOGIAS.forEach(p => cmdkIndex.push({ type:"pat", id:p.id, name:p.nome, sis:p.sis, sin:p.sin||[] }));
  }
  if (typeof MEDICACOES !== "undefined") {
    MEDICACOES.forEach(m => cmdkIndex.push({ type:"med", id:m.id, name:m.nome, sis:"med", sin:m.sin||[] }));
  }
  if (typeof CALCULADORAS !== "undefined") {
    CALCULADORAS.forEach(c => cmdkIndex.push({ type:"calc", id:c.id, name:c.nome, sis:c.sis||"", sin:[] }));
  }
  if (typeof FLOWS !== "undefined") {
    FLOWS.forEach(f => cmdkIndex.push({ type:"flow", id:f.id, name:f.nome, sis:f.sis||"", sin:[] }));
  }
}

function ensureCmdk() {
  if (cmdkBuilt) return;
  buildCmdkIndex();

  const backdrop = document.createElement("div");
  backdrop.className = "cmdk-backdrop";
  backdrop.id = "cmdk-backdrop";
  backdrop.innerHTML = `
    <div class="cmdk-modal" role="dialog" aria-label="Busca rápida">
      <div class="cmdk-input-wrap">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--ink-3)"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" class="cmdk-input" id="cmdk-input" placeholder="Buscar patologia, medicação, calculadora..." autofocus>
        <span class="cmdk-kbd-hint">ESC</span>
      </div>
      <div class="cmdk-results" id="cmdk-results"></div>
    </div>
  `;
  document.body.appendChild(backdrop);

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeCmdk();
  });
  document.getElementById("cmdk-input").addEventListener("input", (e) => {
    cmdkSelectedIdx = 0;
    renderCmdk(e.target.value);
  });
  cmdkBuilt = true;
}

function openCmdk() {
  ensureCmdk();
  document.getElementById("cmdk-backdrop").classList.add("open");
  const inp = document.getElementById("cmdk-input");
  inp.value = "";
  cmdkSelectedIdx = 0;
  setTimeout(() => inp.focus(), 50);
  renderCmdk("");
}
function closeCmdk() {
  const bd = document.getElementById("cmdk-backdrop");
  if (bd) bd.classList.remove("open");
}

function normCmd(s){ return (s||"").toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""); }

function searchCmdk(q) {
  if (cmdkIndex.length === 0) buildCmdkIndex();
  if (!q.trim()) {
    // mostrar recents quando vazio
    const recents = getRecent(8);
    return { kind:"recent", items: recents.map(r => {
      const item = cmdkIndex.find(i => i.type === r.type && i.id === r.id);
      return item || { type: r.type, id: r.id, name: r.label, sis: "—" };
    })};
  }
  const qN = normCmd(q);
  const results = [];
  for (const item of cmdkIndex) {
    const nameN = normCmd(item.name);
    const sinN = item.sin.map(normCmd);
    let score = 0;
    if (nameN.startsWith(qN)) score = 100;
    else if (nameN.includes(qN)) score = 70;
    else if (sinN.some(s => s.startsWith(qN))) score = 60;
    else if (sinN.some(s => s.includes(qN))) score = 45;
    else if (nameN.split(/\s+/).some(w => w.startsWith(qN))) score = 50;
    if (score > 0) results.push({...item, score});
  }
  results.sort((a,b) => b.score - a.score);
  return { kind:"search", items: results.slice(0, 30) };
}

function renderCmdk(q) {
  const r = searchCmdk(q);
  const wrap = document.getElementById("cmdk-results");
  if (!wrap) return;
  cmdkLastResults = r.items;
  if (r.items.length === 0) {
    wrap.innerHTML = `<div class="cmdk-empty">Nada encontrado para "<strong>${esc(q)}</strong>"</div>`;
    return;
  }
  const label = r.kind === "recent"
    ? `<div class="cmdk-group-label">Vistos recentemente</div>`
    : `<div class="cmdk-group-label">${r.items.length} resultado(s)</div>`;
  const items = r.items.map((it, i) => `
    <div class="cmdk-item ${i === cmdkSelectedIdx ? 'active' : ''}" data-idx="${i}"
         onclick="window.cmdk.go(${i})" onmouseover="window.cmdk.hover(${i})">
      <span class="cmdk-item-icon">${typeIcon(it.type)}</span>
      <div>
        <div>${esc(it.name)}</div>
        <div class="cmdk-item-sub">${typeLabel(it.type)} · ${esc(it.sis || "—")}</div>
      </div>
      <span class="cmdk-kbd-hint">↵</span>
    </div>
  `).join("");
  wrap.innerHTML = label + items;
}

function esc(s) {
  return String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
}

window.cmdk = {
  open: openCmdk,
  close: closeCmdk,
  go: (idx) => {
    const it = cmdkLastResults[idx];
    if (!it) return;
    closeCmdk();
    location.hash = routeFor(it.type, it.id);
  },
  hover: (idx) => {
    cmdkSelectedIdx = idx;
    document.querySelectorAll("#cmdk-results .cmdk-item").forEach((el,i) => {
      el.classList.toggle("active", i === idx);
    });
  }
};

// =================================================================
// TABLE OF CONTENTS (TOC) — lateral em desktop, drawer em mobile
// =================================================================
let tocCurrent = null;

function injectTOC() {
  // Encontrar todos h2 no #view
  const view = document.getElementById("view");
  if (!view) return removeTOC();
  const h2s = Array.from(view.querySelectorAll(".block > h2, h2"));
  if (h2s.length < 3) return removeTOC(); // só monta se tiver 3+ seções

  // Atribuir IDs aos h2 que não têm
  const items = h2s.map((h, i) => {
    if (!h.id) h.id = "toc-h2-" + i;
    return { id: h.id, text: h.textContent.trim() };
  });

  // remover anteriores
  removeTOC();

  // Rail (desktop)
  const rail = document.createElement("nav");
  rail.className = "toc-rail show";
  rail.id = "toc-rail";
  rail.innerHTML = `
    <div class="toc-rail-title">Nesta página</div>
    ${items.map(it => `<a href="#${it.id}" data-toc-id="${it.id}">${esc(it.text)}</a>`).join("")}
  `;
  document.body.appendChild(rail);

  // FAB (mobile)
  const fab = document.createElement("button");
  fab.className = "toc-fab show";
  fab.id = "toc-fab";
  fab.innerHTML = "≡";
  fab.title = "Índice desta página";
  fab.onclick = openTOCDrawer;
  document.body.appendChild(fab);

  // Drawer
  const drBd = document.createElement("div");
  drBd.className = "toc-drawer-backdrop";
  drBd.id = "toc-drawer-backdrop";
  drBd.onclick = closeTOCDrawer;
  document.body.appendChild(drBd);

  const dr = document.createElement("div");
  dr.className = "toc-drawer";
  dr.id = "toc-drawer";
  dr.innerHTML = `
    <h4>Índice — nesta página</h4>
    ${items.map(it => `<a href="#${it.id}" onclick="document.getElementById('toc-drawer').classList.remove('open');document.getElementById('toc-drawer-backdrop').classList.remove('open');">${esc(it.text)}</a>`).join("")}
  `;
  document.body.appendChild(dr);

  // Click handler nos links — scrollIntoView smooth
  rail.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const id = a.getAttribute("data-toc-id");
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  });

  // Highlight active section on scroll (intersection observer)
  tocCurrent = items[0] ? items[0].id : null;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const id = en.target.id;
        tocCurrent = id;
        rail.querySelectorAll("a").forEach(a => {
          a.classList.toggle("active", a.getAttribute("data-toc-id") === id);
        });
      }
    });
  }, { rootMargin: "-100px 0px -60% 0px" });
  items.forEach(it => {
    const el = document.getElementById(it.id);
    if (el) obs.observe(el);
  });
  window.__tocObs = obs;
}
function removeTOC() {
  const ids = ["toc-rail", "toc-fab", "toc-drawer", "toc-drawer-backdrop"];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.remove();
  });
  if (window.__tocObs) window.__tocObs.disconnect();
}
function openTOCDrawer() {
  const dr = document.getElementById("toc-drawer");
  const bd = document.getElementById("toc-drawer-backdrop");
  if (dr) dr.classList.add("open");
  if (bd) bd.classList.add("open");
}
function closeTOCDrawer() {
  const dr = document.getElementById("toc-drawer");
  const bd = document.getElementById("toc-drawer-backdrop");
  if (dr) dr.classList.remove("open");
  if (bd) bd.classList.remove("open");
}

// =================================================================
// PIN BUTTON + NOTAS — injetar no topo do conteúdo da patologia/med
// =================================================================
function injectPatHeader(type, id, label) {
  const view = document.getElementById("view");
  if (!view) return;
  // Procurar primeiro h1 ou block-header
  const h1 = view.querySelector("h1");
  if (!h1) return;
  if (view.querySelector(".pin-btn-wrap")) return; // já tem

  const wrap = document.createElement("div");
  wrap.className = "pin-btn-wrap";
  wrap.style.cssText = "display:flex; gap:0.5rem; margin: 0.5rem 0 1rem; flex-wrap: wrap; align-items: center;";

  const pinned = isFav(type, id);
  const pinBtn = document.createElement("button");
  pinBtn.className = "pin-btn" + (pinned ? " active" : "");
  pinBtn.innerHTML = `${pinned ? "★" : "☆"} ${pinned ? "Fixado" : "Fixar"}`;
  pinBtn.onclick = () => {
    const nowPinned = toggleFav(type, id, label);
    pinBtn.className = "pin-btn" + (nowPinned ? " active" : "");
    pinBtn.innerHTML = `${nowPinned ? "★" : "☆"} ${nowPinned ? "Fixado" : "Fixar"}`;
  };
  wrap.appendChild(pinBtn);

  // Botão imprimir
  const printBtn = document.createElement("button");
  printBtn.className = "pin-btn";
  printBtn.innerHTML = "🖨️ Imprimir";
  printBtn.onclick = () => window.print();
  wrap.appendChild(printBtn);

  // Botão densidade (modo consulta-rápida vs estudo)
  const isDense = readJSON(STORAGE.DENSE, false);
  const densBtn = document.createElement("button");
  densBtn.className = "pin-btn" + (isDense ? " active" : "");
  densBtn.innerHTML = isDense ? "📖 Modo estudo" : "⚡ Modo rápido";
  densBtn.title = "Alternar densidade visual (compacto vs amplo)";
  densBtn.onclick = () => {
    const cur = readJSON(STORAGE.DENSE, false);
    writeJSON(STORAGE.DENSE, !cur);
    applyDensity();
    densBtn.className = "pin-btn" + (!cur ? " active" : "");
    densBtn.innerHTML = !cur ? "📖 Modo estudo" : "⚡ Modo rápido";
  };
  wrap.appendChild(densBtn);

  // Botão comparar (se for medicação)
  if (type === "med") {
    const inCompare = (readJSON(STORAGE.COMPARE, []) || []).includes(id);
    const cmpBtn = document.createElement("button");
    cmpBtn.className = "pin-btn" + (inCompare ? " active" : "");
    cmpBtn.innerHTML = inCompare ? "✓ Comparando" : "⇄ Comparar";
    cmpBtn.onclick = () => {
      window.compareMed.toggle(id, label);
      const nowIn = (readJSON(STORAGE.COMPARE, []) || []).includes(id);
      cmpBtn.className = "pin-btn" + (nowIn ? " active" : "");
      cmpBtn.innerHTML = nowIn ? "✓ Comparando" : "⇄ Comparar";
    };
    wrap.appendChild(cmpBtn);
  }

  h1.parentNode.insertBefore(wrap, h1.nextSibling);
}

function injectNotes(type, id) {
  const view = document.getElementById("view");
  if (!view) return;
  if (view.querySelector(".notes-section")) return;

  const key = `${type}:${id}`;
  const notes = readJSON(STORAGE.NOTES, {});
  const cur = notes[key] || "";

  const section = document.createElement("section");
  section.className = "container notes-section";
  section.innerHTML = `
    <h3>📝 Minhas notas</h3>
    <textarea class="notes-textarea" id="notes-${esc(key)}" placeholder="Anote algo sobre este item (visível só neste dispositivo)...">${esc(cur)}</textarea>
    <div class="notes-hint">Salvo automaticamente · armazenado localmente no seu dispositivo</div>
  `;

  // Inserir no fim do view
  view.appendChild(section);

  const ta = section.querySelector("textarea");
  let timer = null;
  ta.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const notes = readJSON(STORAGE.NOTES, {});
      const val = ta.value.trim();
      if (val) notes[key] = val;
      else delete notes[key];
      writeJSON(STORAGE.NOTES, notes);
    }, 400);
  });
}

function applyDensity() {
  const isDense = readJSON(STORAGE.DENSE, false);
  document.body.classList.toggle("dense", !!isDense);
}

// =================================================================
// FOOTER da patologia/med: review-meta + diretriz refinada + print-footer
// =================================================================
function injectFooterMeta(type, id) {
  const view = document.getElementById("view");
  if (!view) return;
  if (view.querySelector(".review-meta")) return;

  // Buscar diretriz / fonte se houver
  let item = null;
  if (type === "pat" && typeof PATOLOGIAS !== "undefined") item = PATOLOGIAS.find(p => p.id === id);
  else if (type === "med" && typeof MEDICACOES !== "undefined") item = MEDICACOES.find(m => m.id === id);

  const diretriz = item && item.diretriz ? item.diretriz : null;

  if (diretriz) {
    // Tentar substituir o atual bloco de diretriz se existir; senão adicionar um novo
    // Procurar h2 com "Diretriz"
    const allH2 = view.querySelectorAll("h2");
    let dirH2 = null;
    allH2.forEach(h => {
      if (/diretriz|fonte|refer/i.test(h.textContent)) dirH2 = h;
    });
    if (!dirH2) {
      // Não tem bloco existente, adicionar um
      const block = document.createElement("section");
      block.className = "container";
      block.innerHTML = `
        <div class="block-diretriz">
          <h4>Diretriz / Referência</h4>
          <div class="diretriz-content">${esc(diretriz)}</div>
        </div>
      `;
      view.appendChild(block);
    }
  }

  // Review meta no rodapé
  const meta = document.createElement("div");
  meta.className = "container review-meta";
  const todayBR = new Date().toLocaleDateString("pt-BR");
  meta.innerHTML = `
    <span class="review-meta-item">📅 Conteúdo: revisão contínua</span>
    <span class="review-meta-item">✍️ Felipe Toledo · CRM-SP 216.986</span>
    <span class="review-meta-item">⚠ Apoio à decisão · não substitui julgamento clínico</span>
  `;
  view.appendChild(meta);

  // Print footer
  const pf = document.createElement("div");
  pf.className = "print-footer";
  pf.innerHTML = `
    <strong>Vovôminic Doutô — Guia Clínico</strong> · Felipe Ribeiro Toledo · CRM-SP 216.986<br>
    Impresso em ${todayBR} · felipertoledo.github.io/plantao<br>
    Material de apoio à decisão clínica. Não substitui julgamento clínico nem diretrizes locais.
  `;
  view.appendChild(pf);
}

// =================================================================
// TOOLTIPS DE SIGLAS
// =================================================================
const ACRO_DICT = {
  "DRC": "Doença Renal Crônica",
  "DRC G3": "Doença Renal Crônica estágio 3 (TFG 30-59)",
  "IRA": "Insuficiência Renal Aguda",
  "TFG": "Taxa de Filtração Glomerular",
  "RCV": "Risco Cardiovascular",
  "DAC": "Doença Arterial Coronariana",
  "IC": "Insuficiência Cardíaca",
  "ICFEr": "Insuficiência Cardíaca com Fração de Ejeção reduzida",
  "FE": "Fração de Ejeção",
  "FA": "Fibrilação Atrial",
  "SCA": "Síndrome Coronariana Aguda",
  "IAM": "Infarto Agudo do Miocárdio",
  "IAMCSST": "IAM com supradesnivelamento do segmento ST",
  "IAMSSST": "IAM sem supradesnivelamento do segmento ST",
  "TEV": "Tromboembolismo Venoso",
  "TVP": "Trombose Venosa Profunda",
  "TEP": "Tromboembolismo Pulmonar",
  "AVE": "Acidente Vascular Encefálico",
  "AVC": "Acidente Vascular Cerebral",
  "AIT": "Ataque Isquêmico Transitório",
  "HAS": "Hipertensão Arterial Sistêmica",
  "DM": "Diabetes Mellitus",
  "DM2": "Diabetes Mellitus tipo 2",
  "DPOC": "Doença Pulmonar Obstrutiva Crônica",
  "ITU": "Infecção do Trato Urinário",
  "IST": "Infecção Sexualmente Transmissível",
  "TB": "Tuberculose",
  "ILTB": "Infecção Latente por Tuberculose",
  "MS": "Ministério da Saúde",
  "PCDT": "Protocolo Clínico e Diretrizes Terapêuticas",
  "REMUME": "Relação Municipal de Medicamentos",
  "RENAME": "Relação Nacional de Medicamentos Essenciais",
  "PFPB": "Programa Farmácia Popular do Brasil",
  "CBAF": "Componente Básico da Assistência Farmacêutica",
  "CEAF": "Componente Especializado da Assistência Farmacêutica",
  "SAE": "Serviço de Atendimento Especializado",
  "UBS": "Unidade Básica de Saúde",
  "ESF": "Estratégia Saúde da Família",
  "ACS": "Agente Comunitário de Saúde",
  "APS": "Atenção Primária à Saúde",
  "MFC": "Medicina de Família e Comunidade",
  "PVHIV": "Pessoa Vivendo com HIV",
  "HSH": "Homens que fazem Sexo com Homens",
  "TARV": "Terapia Antirretroviral",
  "PrEP": "Profilaxia Pré-Exposição",
  "PEP": "Profilaxia Pós-Exposição",
  "P4": "Prevenção Quaternária",
  "PTS": "Projeto Terapêutico Singular",
  "MBE": "Medicina Baseada em Evidências",
  "DAA": "Antiviral de Ação Direta (HCV)",
  "DOAC": "Anticoagulante Oral Direto",
  "ACO": "Anticoncepcional Oral Combinado",
  "TRH": "Terapia de Reposição Hormonal",
  "DTN": "Defeito do Tubo Neural",
  "CCU": "Câncer do Colo do Útero",
  "CHC": "Carcinoma Hepatocelular",
  "CBC": "Carcinoma Basocelular",
  "CEC": "Carcinoma Espinocelular",
  "QA": "Queratose Actínica",
  "DAPT": "Dupla Antiagregação Plaquetária",
  "ICP": "Intervenção Coronariana Percutânea",
  "IECA": "Inibidor da Enzima Conversora de Angiotensina",
  "BRA": "Bloqueador do Receptor de Angiotensina",
  "ARNI": "Inibidor de Neprilisina + BRA",
  "AINE": "Anti-inflamatório Não Esteroidal",
  "IBP": "Inibidor de Bomba de Prótons",
  "ISRS": "Inibidor Seletivo de Recaptação de Serotonina",
  "DMARD": "Drug-Modifying Anti-Rheumatic Drug",
  "AR": "Artrite Reumatoide",
  "LES": "Lúpus Eritematoso Sistêmico",
  "AIJ": "Artrite Idiopática Juvenil",
  "HCQ": "Hidroxicloroquina",
  "MTX": "Metotrexato",
  "DMO": "Densidade Mineral Óssea",
  "BiRADS": "Breast Imaging-Reporting and Data System",
  "TIRADS": "Thyroid Imaging-Reporting and Data System",
  "MEEM": "Mini Exame do Estado Mental",
  "CDR": "Clinical Dementia Rating",
  "DPL": "Demência por Corpos de Lewy",
  "NNT": "Number Needed to Treat",
  "NNH": "Number Needed to Harm",
  "USPSTF": "U.S. Preventive Services Task Force",
  "ICSC": "Imunização contra HPV / Calendário SUS",
  "CIH": "Centro de Informações sobre Hanseníase",
  "PB": "Paucibacilar",
  "MB": "Multibacilar",
  "HPV": "Papilomavírus Humano",
  "HBV": "Vírus da Hepatite B",
  "HCV": "Vírus da Hepatite C",
  "EE": "Etinilestradiol",
  "LNG": "Levonorgestrel",
  "DIU": "Dispositivo Intrauterino",
  "CIAP-2": "Classificação Internacional de Atenção Primária 2",
  "CID-10": "Classificação Internacional de Doenças 10ª revisão",
  "TFD": "Tratamento Fora de Domicílio",
  "BPC": "Benefício de Prestação Continuada",
  "CRAS": "Centro de Referência de Assistência Social",
  "CREAS": "Centro de Referência Especializado de Assistência Social",
  "CAPS": "Centro de Atenção Psicossocial",
  "PNI": "Programa Nacional de Imunizações",
  "CRIE": "Centro de Referência para Imunobiológicos Especiais",
  "NIC": "Neoplasia Intraepitelial Cervical",
  "NIA": "Neoplasia Intraepitelial Anal",
  "G6PD": "Glicose-6-fosfato desidrogenase",
};

function applyAcronymTooltips() {
  // Aplica tooltip apenas nos primeiros aparecimentos em cada bloco
  const view = document.getElementById("view");
  if (!view) return;
  const blocks = view.querySelectorAll(".block");

  // Construir regex com siglas (palavras inteiras, case-sensitive para evitar falsos positivos)
  const keys = Object.keys(ACRO_DICT).sort((a,b) => b.length - a.length);
  // Escapa cada chave para regex segura
  const escaped = keys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp("\\b(" + escaped.join("|") + ")\\b", "g");

  blocks.forEach(blk => {
    const seen = new Set();
    // Para cada nó de texto, substituir só primeiro ocorrência de cada sigla
    walkText(blk, (node) => {
      const text = node.nodeValue;
      if (!re.test(text)) { re.lastIndex = 0; return; }
      re.lastIndex = 0;
      // Encontrar matches e construir fragmento
      const parts = [];
      let lastIdx = 0;
      let m;
      while ((m = re.exec(text)) !== null) {
        if (seen.has(m[1])) continue;
        seen.add(m[1]);
        if (m.index > lastIdx) parts.push(document.createTextNode(text.slice(lastIdx, m.index)));
        const span = document.createElement("span");
        span.className = "acro";
        span.setAttribute("data-tip", ACRO_DICT[m[1]]);
        span.textContent = m[1];
        parts.push(span);
        lastIdx = m.index + m[1].length;
      }
      if (parts.length === 0) return;
      if (lastIdx < text.length) parts.push(document.createTextNode(text.slice(lastIdx)));
      const frag = document.createDocumentFragment();
      parts.forEach(p => frag.appendChild(p));
      node.parentNode.replaceChild(frag, node);
    });
  });
}
function walkText(root, fn) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => {
      // pular nodes dentro de elementos que já são tooltips ou code/script/style
      let p = n.parentElement;
      while (p) {
        if (["CODE","SCRIPT","STYLE","INPUT","TEXTAREA"].includes(p.tagName)) return NodeFilter.FILTER_REJECT;
        if (p.classList && p.classList.contains("acro")) return NodeFilter.FILTER_REJECT;
        p = p.parentElement;
      }
      return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  const nodes = [];
  let n;
  while ((n = walker.nextNode())) nodes.push(n);
  nodes.forEach(fn);
}

// =================================================================
// COMPARADOR DE MEDICAÇÕES (até 3)
// =================================================================
function ensureCompareBar() {
  if (document.getElementById("compare-bar")) return;
  const bar = document.createElement("div");
  bar.id = "compare-bar";
  bar.className = "compare-bar";
  bar.innerHTML = `
    <div class="meds-list" id="compare-meds-list"></div>
    <button class="compare-add-btn active" id="compare-view-btn">Ver comparação</button>
    <button class="compare-add-btn" onclick="window.compareMed.clear()">Limpar</button>
  `;
  document.body.appendChild(bar);
  document.getElementById("compare-view-btn").onclick = () => {
    location.hash = "#/compare";
  };
}
function renderCompareBar() {
  ensureCompareBar();
  const list = readJSON(STORAGE.COMPARE, []);
  const bar = document.getElementById("compare-bar");
  const wrap = document.getElementById("compare-meds-list");
  if (!list || list.length === 0) { bar.classList.remove("show"); return; }
  if (typeof MEDICACOES === "undefined") return;
  wrap.innerHTML = list.map(id => {
    const med = MEDICACOES.find(m => m.id === id);
    if (!med) return "";
    return `<span class="compare-chip">${esc(med.nome)} <button onclick="window.compareMed.remove('${id}')" title="Remover">×</button></span>`;
  }).join("");
  bar.classList.add("show");
}
window.compareMed = {
  toggle: (id, label) => {
    let list = readJSON(STORAGE.COMPARE, []);
    if (list.includes(id)) list = list.filter(x => x !== id);
    else {
      if (list.length >= 3) {
        alert("Comparação máxima: 3 medicações. Remova uma antes de adicionar outra.");
        return;
      }
      list.push(id);
    }
    writeJSON(STORAGE.COMPARE, list);
    renderCompareBar();
  },
  remove: (id) => {
    let list = readJSON(STORAGE.COMPARE, []);
    list = list.filter(x => x !== id);
    writeJSON(STORAGE.COMPARE, list);
    renderCompareBar();
  },
  clear: () => {
    writeJSON(STORAGE.COMPARE, []);
    renderCompareBar();
  }
};

function renderCompareView() {
  const view = document.getElementById("view");
  if (!view) return;
  const list = readJSON(STORAGE.COMPARE, []);
  if (typeof MEDICACOES === "undefined") return;
  const meds = list.map(id => MEDICACOES.find(m => m.id === id)).filter(Boolean);

  if (meds.length === 0) {
    view.innerHTML = `<section class="container">
      <h1>Comparador de medicações</h1>
      <p class="lead">Nenhuma medicação selecionada para comparar.</p>
      <p>Abra uma medicação e clique em "⇄ Comparar" para adicioná-la. Você pode comparar até 3 simultaneamente.</p>
      <button class="btn btn-ghost" onclick="navigate('#/meds')">→ Lista de medicações</button>
    </section>`;
    return;
  }

  const cols = meds.length;
  function cell(med, field, label) {
    let val = med[field];
    if (Array.isArray(val)) val = val.map(x => typeof x === "string" ? x : (x.item || x.txt || JSON.stringify(x))).join("; ");
    if (typeof val === "object" && val !== null) {
      val = Object.entries(val).map(([k,v]) => `<strong>${esc(k)}:</strong> ${esc(v)}`).join("<br>");
    }
    return val ? `<dt>${esc(label)}</dt><dd>${val}</dd>` : "";
  }
  function ajustesCell(med) {
    if (!med.ajustes) return "";
    const lines = Object.entries(med.ajustes).map(([k,v]) => `<strong>${esc(k.toUpperCase())}:</strong> ${esc(v)}`).join("<br>");
    return `<dt>Ajustes</dt><dd>${lines}</dd>`;
  }

  view.innerHTML = `
    <section class="container">
      <h1>Comparador de medicações</h1>
      <p class="lead">Comparando ${cols} medicação(ões) lado a lado.</p>
      <div class="compare-grid cols-${cols}">
        ${meds.map(m => `
          <div class="compare-col">
            <h3>${esc(m.nome)}</h3>
            <div class="compare-classe">${esc(m.classe || "")}</div>
            <dl>
              ${cell(m, "resumo", "Resumo")}
              ${cell(m, "dose_rapida", "Dose rápida")}
              ${cell(m, "espectro", "Espectro / indicações")}
              ${ajustesCell(m)}
              ${cell(m, "mecanismo", "Mecanismo")}
              ${cell(m, "monitor", "Monitoração")}
              ${cell(m, "diretriz", "Diretriz / fonte")}
            </dl>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

// =================================================================
// HISTÓRICO COMPLETO (página)
// =================================================================
let historyFilter = "all";
function renderHistoryPage() {
  const view = document.getElementById("view");
  if (!view) return;
  const recents = getRecent();
  const filtered = historyFilter === "all" ? recents : recents.filter(r => r.type === historyFilter);

  view.innerHTML = `
    <section class="container">
      <h1>Histórico</h1>
      <p class="lead">${recents.length} item(ns) visto(s) recentemente neste dispositivo.</p>
      <div class="history-filter">
        <button class="${historyFilter==='all'?'active':''}" data-f="all">Todos</button>
        <button class="${historyFilter==='pat'?'active':''}" data-f="pat">🏥 Patologias</button>
        <button class="${historyFilter==='med'?'active':''}" data-f="med">💊 Medicações</button>
        <button class="${historyFilter==='calc'?'active':''}" data-f="calc">🧮 Calculadoras</button>
        <button class="${historyFilter==='flow'?'active':''}" data-f="flow">🗺️ Fluxos</button>
        ${recents.length > 0 ? `<button onclick="if(confirm('Limpar todo histórico?')){window.uiExt.clearHistory()}" style="margin-left:auto;">🗑️ Limpar</button>` : ""}
      </div>
      <div class="history-list">
        ${filtered.length === 0 ? `<p style="color:var(--ink-3);font-style:italic;">Nenhum item nesta categoria.</p>` :
          filtered.map(r => {
            const d = new Date(r.ts);
            const ago = relativeTime(d);
            return `
              <div class="history-row" onclick="location.hash='${routeFor(r.type, r.id)}'">
                <span class="ico">${typeIcon(r.type)}</span>
                <div>
                  <div>${esc(r.label || r.id)}</div>
                  <div style="font-size:0.75rem;color:var(--ink-3);">${typeLabel(r.type)}</div>
                </div>
                <span class="date">${ago}</span>
              </div>
            `;
          }).join("")
        }
      </div>
    </section>
  `;

  view.querySelectorAll(".history-filter button[data-f]").forEach(b => {
    b.onclick = () => {
      historyFilter = b.getAttribute("data-f");
      renderHistoryPage();
    };
  });
}
function relativeTime(date) {
  const now = Date.now();
  const diff = (now - date.getTime()) / 1000;
  if (diff < 60) return "agora";
  if (diff < 3600) return Math.floor(diff/60) + " min";
  if (diff < 86400) return Math.floor(diff/3600) + "h";
  if (diff < 86400 * 7) return Math.floor(diff/86400) + " dia(s)";
  return date.toLocaleDateString("pt-BR");
}

// =================================================================
// HOME — injetar chips "Fixados" e "Vistos recentemente"
// =================================================================
function injectHomePersonal() {
  const view = document.getElementById("view");
  if (!view) return;
  if (view.querySelector(".home-personal")) return;

  const fav = getFav();
  const recent = getRecent(8);
  if (fav.length === 0 && recent.length === 0) return;

  const personal = document.createElement("section");
  personal.className = "container home-personal";
  let html = "";
  if (fav.length > 0) {
    html += `<h3>★ Seus fixados</h3>
      <div class="chip-row">
        ${fav.slice(0, 12).map(f => `
          <a class="chip-link" href="${routeFor(f.type, f.id)}">
            <span class="chip-icon">${typeIcon(f.type)}</span>${esc(f.label || f.id)}
          </a>
        `).join("")}
      </div>`;
  }
  if (recent.length > 0) {
    html += `<h3>⏱ Vistos recentemente</h3>
      <div class="chip-row">
        ${recent.map(r => `
          <a class="chip-link" href="${routeFor(r.type, r.id)}">
            <span class="chip-icon">${typeIcon(r.type)}</span>${esc(r.label || r.id)}
          </a>
        `).join("")}
        <a class="chip-link" href="#/historico" style="color:var(--ink-3)">Ver tudo →</a>
      </div>`;
  }
  personal.innerHTML = html;

  // Inserir após primeiro .container (geralmente o hero)
  const firstContainer = view.querySelector(".container");
  if (firstContainer) firstContainer.after(personal);
  else view.appendChild(personal);
}

// =================================================================
// MODAL DE ATALHOS (?)
// =================================================================
function ensureShortcutModal() {
  if (document.getElementById("shortcut-modal")) return;
  const bd = document.createElement("div");
  bd.className = "shortcut-modal-backdrop";
  bd.id = "shortcut-modal-bd";
  bd.innerHTML = `
    <div class="shortcut-modal" id="shortcut-modal" role="dialog">
      <h2>⌨️ Atalhos de teclado</h2>
      <table>
        <tr><td><span class="kbd">⌘</span><span class="kbd">K</span> ou <span class="kbd">Ctrl</span><span class="kbd">K</span></td><td>Abrir paleta de busca</td></tr>
        <tr><td><span class="kbd">/</span></td><td>Focar barra de busca</td></tr>
        <tr><td><span class="kbd">G</span> + <span class="kbd">H</span></td><td>Ir para home</td></tr>
        <tr><td><span class="kbd">G</span> + <span class="kbd">M</span></td><td>Ir para medicações</td></tr>
        <tr><td><span class="kbd">G</span> + <span class="kbd">C</span></td><td>Ir para calculadoras</td></tr>
        <tr><td><span class="kbd">G</span> + <span class="kbd">F</span></td><td>Ir para fluxogramas</td></tr>
        <tr><td><span class="kbd">G</span> + <span class="kbd">U</span></td><td>Ir para Histórico</td></tr>
        <tr><td><span class="kbd">↑</span> <span class="kbd">↓</span></td><td>Navegar resultados</td></tr>
        <tr><td><span class="kbd">↵</span></td><td>Abrir resultado selecionado</td></tr>
        <tr><td><span class="kbd">Esc</span></td><td>Fechar paleta / modal</td></tr>
        <tr><td><span class="kbd">?</span></td><td>Esta ajuda</td></tr>
      </table>
      <p style="margin-top:1rem;font-size:0.85rem;color:var(--ink-3);">Atalhos não funcionam dentro de campos de texto.</p>
    </div>
  `;
  document.body.appendChild(bd);
  bd.addEventListener("click", (e) => {
    if (e.target === bd) bd.classList.remove("open");
  });
}
function openShortcutModal() {
  ensureShortcutModal();
  document.getElementById("shortcut-modal-bd").classList.add("open");
}
function closeShortcutModal() {
  const bd = document.getElementById("shortcut-modal-bd");
  if (bd) bd.classList.remove("open");
}

// =================================================================
// KEYBOARD SHORTCUTS GLOBAL
// =================================================================
let gPending = false; // estado para sequencias "G + ..."
function setupShortcuts() {
  document.addEventListener("keydown", (e) => {
    const tag = (e.target.tagName || "").toLowerCase();
    const isInput = tag === "input" || tag === "textarea" || e.target.isContentEditable;

    // Esc - fecha modais
    if (e.key === "Escape") {
      closeCmdk();
      closeShortcutModal();
      closeTOCDrawer();
      return;
    }

    // Cmd+K / Ctrl+K
    if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
      e.preventDefault();
      openCmdk();
      return;
    }

    // Tudo a seguir só fora de inputs
    if (isInput) return;

    // / — foca search
    if (e.key === "/") {
      const search = document.getElementById("globalSearch") || document.querySelector(".search-input");
      if (search) {
        e.preventDefault();
        search.focus();
      }
      return;
    }
    // ? — modal ajuda
    if (e.key === "?") {
      e.preventDefault();
      openShortcutModal();
      return;
    }
    // G + tecla
    if (e.key === "g" || e.key === "G") {
      gPending = true;
      setTimeout(() => { gPending = false; }, 800);
      return;
    }
    if (gPending) {
      gPending = false;
      const k = e.key.toLowerCase();
      if (k === "h") { location.hash = "#/"; e.preventDefault(); return; }
      if (k === "m") { location.hash = "#/meds"; e.preventDefault(); return; }
      if (k === "c") { location.hash = "#/calcs"; e.preventDefault(); return; }
      if (k === "f") { location.hash = "#/flows"; e.preventDefault(); return; }
      if (k === "u") { location.hash = "#/historico"; e.preventDefault(); return; }
    }
    // Cmdk paleta: setas + enter
    const cmdkOpen = document.getElementById("cmdk-backdrop") &&
                     document.getElementById("cmdk-backdrop").classList.contains("open");
    if (cmdkOpen) {
      if (e.key === "ArrowDown") {
        cmdkSelectedIdx = Math.min(cmdkSelectedIdx + 1, cmdkLastResults.length - 1);
        renderCmdkActive();
        e.preventDefault();
      } else if (e.key === "ArrowUp") {
        cmdkSelectedIdx = Math.max(cmdkSelectedIdx - 1, 0);
        renderCmdkActive();
        e.preventDefault();
      } else if (e.key === "Enter") {
        window.cmdk.go(cmdkSelectedIdx);
        e.preventDefault();
      }
    }
  });
  // Quando estiver dentro do cmdk input, setas funcionam mesmo "dentro de input":
  document.addEventListener("keydown", (e) => {
    if (e.target.id === "cmdk-input") {
      if (e.key === "ArrowDown") {
        cmdkSelectedIdx = Math.min(cmdkSelectedIdx + 1, cmdkLastResults.length - 1);
        renderCmdkActive();
        e.preventDefault();
      } else if (e.key === "ArrowUp") {
        cmdkSelectedIdx = Math.max(cmdkSelectedIdx - 1, 0);
        renderCmdkActive();
        e.preventDefault();
      } else if (e.key === "Enter") {
        window.cmdk.go(cmdkSelectedIdx);
        e.preventDefault();
      }
    }
  });
}
function renderCmdkActive() {
  document.querySelectorAll("#cmdk-results .cmdk-item").forEach((el,i) => {
    el.classList.toggle("active", i === cmdkSelectedIdx);
    if (i === cmdkSelectedIdx) el.scrollIntoView({ block: "nearest" });
  });
}

// =================================================================
// HOOK: chamado após cada render do app
// =================================================================
function afterRender() {
  // Reaplicar densidade
  applyDensity();
  // Compare bar sempre visível se houver itens
  renderCompareBar();

  const hash = location.hash;

  // Rotas customizadas que SOBREESCREVEM render do app
  if (hash === "#/historico") { renderHistoryPage(); return; }
  if (hash === "#/compare")   { renderCompareView(); return; }

  // Patologia
  if (hash.startsWith("#/p/")) {
    const id = hash.slice(4);
    const p = typeof PATOLOGIAS !== "undefined" ? PATOLOGIAS.find(x => x.id === id) : null;
    if (p) {
      addToRecent("pat", id, p.nome);
      setTimeout(() => {
        injectPatHeader("pat", id, p.nome);
        injectTOC();
        applyAcronymTooltips();
        injectNotes("pat", id);
        injectFooterMeta("pat", id);
      }, 0);
    }
    return;
  }
  // Medicação
  if (hash.startsWith("#/m/")) {
    const id = hash.slice(4);
    const m = typeof MEDICACOES !== "undefined" ? MEDICACOES.find(x => x.id === id) : null;
    if (m) {
      addToRecent("med", id, m.nome);
      setTimeout(() => {
        injectPatHeader("med", id, m.nome);
        injectTOC();
        applyAcronymTooltips();
        injectNotes("med", id);
        injectFooterMeta("med", id);
      }, 0);
    }
    return;
  }
  // Calculadora
  if (hash.startsWith("#/c/")) {
    const id = hash.slice(4);
    const c = typeof CALCULADORAS !== "undefined" ? CALCULADORAS.find(x => x.id === id) : null;
    if (c) addToRecent("calc", id, c.nome);
    return;
  }
  // Fluxograma
  if (hash.startsWith("#/f/")) {
    const id = hash.slice(4);
    const f = typeof FLOWS !== "undefined" ? FLOWS.find(x => x.id === id) : null;
    if (f) addToRecent("flow", id, f.nome);
    return;
  }

  // Home — injetar painel pessoal
  if (hash === "#/" || hash === "" || hash === "#") {
    setTimeout(() => injectHomePersonal(), 0);
    return;
  }

  removeTOC();
}

// =================================================================
// EXPORTAR API GLOBAL
// =================================================================
window.uiExt = {
  afterRender,
  openCmdk,
  closeCmdk,
  openShortcutModal,
  getRecent,
  getFav,
  toggleFav,
  isFav,
  clearHistory: () => { clearRecent(); renderHistoryPage(); },
  buildCmdkIndex
};

// =================================================================
// INIT
// =================================================================
window.addEventListener("load", () => {
  setTimeout(() => {
    buildCmdkIndex();
    setupShortcuts();
    applyDensity();
    // First-render hook
    afterRender();
  }, 100);
});

// Hook ao hashchange
window.addEventListener("hashchange", () => {
  setTimeout(afterRender, 50);
});

})();
