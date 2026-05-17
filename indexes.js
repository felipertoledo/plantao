/* ===========================================================
   VOVÔMINIC DOUTÔ — Sistema de Filtro de Contexto
   Plantão (PA) / UBS / Tudo
   Persiste em localStorage. Filtra busca, sistemas, calcs.
   =========================================================== */

const CONTEXTO = {
  current: localStorage.getItem("vm-ctx") || "tudo",  // "pa" | "ubs" | "tudo"
};

/* Verifica se um item deve aparecer no contexto atual */
function itemFitContexto(item) {
  if (!item) return false;
  if (CONTEXTO.current === "tudo") return true;
  
  // Default heurística: se não tem contexto definido, assume PA (compat retroativa)
  const ctx = item.contexto || ["pa"];
  return ctx.includes(CONTEXTO.current);
}

/* Trocar contexto */
function setContexto(novo) {
  if (!["pa", "ubs", "tudo"].includes(novo)) return;
  CONTEXTO.current = novo;
  localStorage.setItem("vm-ctx", novo);
  
  // Rebuild search index com novo filtro
  if (typeof buildSearchIndex === "function") {
    SEARCH_INDEX = buildSearchIndex();
  }
  
  // Re-render página atual
  if (typeof routeFromHash === "function") routeFromHash();
}

/* Renderiza toggle UI — chamado pelo renderHome */
function ctxToggleHTML() {
  const c = CONTEXTO.current;
  return `
    <div class="ctx-toggle" role="tablist" aria-label="Contexto de uso">
      <button class="ctx-toggle-btn ${c==='pa'?'active':''}" data-ctx="pa" onclick="setContexto('pa')" role="tab" aria-selected="${c==='pa'}">
        ⚡ Plantão
      </button>
      <button class="ctx-toggle-btn ${c==='ubs'?'active':''}" data-ctx="ubs" onclick="setContexto('ubs')" role="tab" aria-selected="${c==='ubs'}">
        🌳 UBS
      </button>
      <button class="ctx-toggle-btn ${c==='tudo'?'active':''}" data-ctx="tudo" onclick="setContexto('tudo')" role="tab" aria-selected="${c==='tudo'}">
        ⚙ Tudo
      </button>
    </div>`;
}

/* Badge visual para item: mostra PA/UBS/Ambos */
function ctxBadgeHTML(item) {
  if (!item || !item.contexto) return '';
  const ctx = item.contexto;
  if (ctx.length >= 2) return '<span class="ctx-badge ctx-badge-ambos">PA+UBS</span>';
  if (ctx.includes("pa")) return '<span class="ctx-badge ctx-badge-pa">PA</span>';
  if (ctx.includes("ubs")) return '<span class="ctx-badge ctx-badge-ubs">UBS</span>';
  return '';
}
