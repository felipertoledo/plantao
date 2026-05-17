/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — Aplicação de Figuras nas Patologias
   Mapeia figId → patologia. Aplicado após carregamento de PATOLOGIAS.
   =========================================================== */

(function() {
  // Map de patologia → array de figuras
  const FIG_MAP = {
    // ECG / arritmias
    "tsv": ["fig-tsv", "fig-ecg-onda-normal"],
    "tv": ["fig-coracao-derivacoes", "fig-acls-pcr"],
    "fa": ["fig-fa", "fig-coracao-derivacoes"],
    "brady": ["fig-bav-progressao", "fig-bav-completo"],
    
    // SCA / IAM
    "sca": ["fig-stemi-anterior", "fig-stemi-inferior", "fig-coracao-derivacoes", "fig-anatomia-coronarias", "fig-killip"],
    
    // IC / EAP
    "eap": ["fig-killip"],
    
    // Outras cardio
    "ehp": ["fig-coracao-derivacoes"],
    "dissec": ["fig-anatomia-coronarias"],
    "tep": ["fig-acls-pcr"],
    "hipertensao": [],
    "sincope": ["fig-bav-progressao", "fig-acls-pcr"],
    "pericardite": ["fig-ecg-onda-normal"],
    "endocardite": ["fig-sopros-focos"],
  };
  
  let count = 0;
  if (typeof PATOLOGIAS === 'undefined') return;
  
  for (const p of PATOLOGIAS) {
    if (FIG_MAP[p.id] && FIG_MAP[p.id].length) {
      p.figs = FIG_MAP[p.id];
      count++;
    }
  }
  
  // Debug (silencioso em produção)
  if (typeof window !== 'undefined' && window.__VOVO_DEBUG) {
    console.log(`[figs_apply] Aplicado em ${count} patologias`);
  }
})();
