/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — calcs/pali.js
   5 calculadoras
   =========================================================== */

CALCS.push(
{id:"ecog", nome:"ECOG Performance Status", sis:"pali",
desc:"Escala 0-5 mais usada em oncologia (Eastern Cooperative Oncology Group). Equivalente simplificado do KPS. ⚠ ECOG 3-4 = paciente predominantemente dependente — geralmente intervenções oncológicas curativas/agressivas suspensas; foco paliativo.",
fields:[
{tipo:"select", id:"ecog", label:"Selecione o ECOG", opts:[
{val:"0", label:"0 — Totalmente ativo, sem restrição de atividade pré-doença"},
{val:"1", label:"1 — Restrição em atividade física extenuante mas deambula, capaz de trabalho leve"},
{val:"2", label:"2 — Deambula, capaz de auto-cuidado, INCAPAZ de trabalhar; em pé >50% do tempo"},
{val:"3", label:"3 — Auto-cuidado LIMITADO; cama/cadeira >50% do tempo"},
{val:"4", label:"4 — Totalmente incapaz de auto-cuidado; TOTALMENTE acamado"},
{val:"5", label:"5 — Morto"},
]},
],
calc:function(v){
  return parseInt(v.ecog||0);
},
interp:function(s){
  if(s===0) return {risco:`ECOG 0 — Funcionalidade plena`, acao:"Equivale a KPS 90-100. Tratamento curativo/disease-modifier pleno. Paliativos integrados como camada de sintomas e planejamento.", cor:"ok"};
  if(s===1) return {risco:`ECOG 1 — Restrição leve`, acao:"Equivale a KPS 70-80. Tratamento ativo viável. Boa elegibilidade para protocolos quimioterápicos.", cor:"ok"};
  if(s===2) return {risco:`ECOG 2 — Independente para auto-cuidado mas incapaz de trabalho`, acao:"Equivale a KPS 50-60. ⚠ Borderline para quimioterapia agressiva. Paliativos integrados. Discutir metas, sintomas, diretivas. Prognóstico geralmente <6 meses em câncer avançado.", cor:"warn"};
  if(s===3) return {risco:`ECOG 3 — Dependente — cama/cadeira >50% tempo`, acao:"⚠ Equivale a KPS 30-40. ⚠ Quimioterapia agressiva geralmente CONTRAINDICADA — toxicidade > benefício. Foco paliativo predominante. SAD/EMAD/hospice. Diretivas antecipadas. Prognóstico geralmente <3 meses.", cor:"crit"};
  if(s===4) return {risco:`ECOG 4 — Totalmente acamado — dependência total`, acao:"⚠ ⚠ Equivale a KPS 10-20. FASE FINAL — semanas. Apenas medidas de CONFORTO. Suspender intervenções fúteis. KIT FIM DE VIDA. Via SC para drogas essenciais. Suporte família.", cor:"crit"};
  return {risco:`ECOG 5 — Morto`, acao:"—", cor:"crit"};
}
},
{id:"esas", nome:"ESAS — Edmonton Symptom Assessment System", sis:"pali",
desc:"Avaliação sistemática de 9 SINTOMAS em paliativos — cada um em escala 0-10 (0=sem sintoma, 10=pior possível). ⚠ NÃO é diagnóstico nem prognóstico — é ferramenta para ACOMPANHAR sintomas longitudinalmente e direcionar conduta. Reaplicar semanalmente ou conforme mudança clínica. Sintomas ≥4 demandam intervenção ativa.",
fields:[
{tipo:"select", id:"dor", label:"Dor (0=sem dor, 10=pior dor)", opts:[
{val:"0", label:"0 — Sem dor"},
{val:"1", label:"1"},{val:"2", label:"2"},{val:"3", label:"3"},
{val:"4", label:"4 — Dor moderada"},
{val:"5", label:"5"},{val:"6", label:"6"},
{val:"7", label:"7 — Dor importante"},
{val:"8", label:"8"},{val:"9", label:"9"},
{val:"10", label:"10 — Pior dor imaginável"},
]},
{tipo:"select", id:"cansaco", label:"Cansaço/fadiga (0=sem, 10=pior)", opts:[
{val:"0", label:"0"},{val:"1", label:"1"},{val:"2", label:"2"},{val:"3", label:"3"},
{val:"4", label:"4"},{val:"5", label:"5"},{val:"6", label:"6"},
{val:"7", label:"7"},{val:"8", label:"8"},{val:"9", label:"9"},{val:"10", label:"10"},
]},
{tipo:"select", id:"sono", label:"Sonolência (0=sem, 10=pior)", opts:[
{val:"0", label:"0"},{val:"1", label:"1"},{val:"2", label:"2"},{val:"3", label:"3"},
{val:"4", label:"4"},{val:"5", label:"5"},{val:"6", label:"6"},
{val:"7", label:"7"},{val:"8", label:"8"},{val:"9", label:"9"},{val:"10", label:"10"},
]},
{tipo:"select", id:"nausea", label:"Náusea (0=sem, 10=pior)", opts:[
{val:"0", label:"0"},{val:"1", label:"1"},{val:"2", label:"2"},{val:"3", label:"3"},
{val:"4", label:"4"},{val:"5", label:"5"},{val:"6", label:"6"},
{val:"7", label:"7"},{val:"8", label:"8"},{val:"9", label:"9"},{val:"10", label:"10"},
]},
{tipo:"select", id:"apetite", label:"Falta de apetite (0=apetite normal, 10=nenhum apetite)", opts:[
{val:"0", label:"0"},{val:"1", label:"1"},{val:"2", label:"2"},{val:"3", label:"3"},
{val:"4", label:"4"},{val:"5", label:"5"},{val:"6", label:"6"},
{val:"7", label:"7"},{val:"8", label:"8"},{val:"9", label:"9"},{val:"10", label:"10"},
]},
{tipo:"select", id:"dispneia", label:"Falta de ar / dispneia (0=sem, 10=pior)", opts:[
{val:"0", label:"0"},{val:"1", label:"1"},{val:"2", label:"2"},{val:"3", label:"3"},
{val:"4", label:"4"},{val:"5", label:"5"},{val:"6", label:"6"},
{val:"7", label:"7"},{val:"8", label:"8"},{val:"9", label:"9"},{val:"10", label:"10"},
]},
{tipo:"select", id:"depressao", label:"Tristeza/depressão (0=sem, 10=pior)", opts:[
{val:"0", label:"0"},{val:"1", label:"1"},{val:"2", label:"2"},{val:"3", label:"3"},
{val:"4", label:"4"},{val:"5", label:"5"},{val:"6", label:"6"},
{val:"7", label:"7"},{val:"8", label:"8"},{val:"9", label:"9"},{val:"10", label:"10"},
]},
{tipo:"select", id:"ansiedade", label:"Ansiedade (0=sem, 10=pior)", opts:[
{val:"0", label:"0"},{val:"1", label:"1"},{val:"2", label:"2"},{val:"3", label:"3"},
{val:"4", label:"4"},{val:"5", label:"5"},{val:"6", label:"6"},
{val:"7", label:"7"},{val:"8", label:"8"},{val:"9", label:"9"},{val:"10", label:"10"},
]},
{tipo:"select", id:"bemestar", label:"Bem-estar geral (0=ótimo, 10=péssimo)", opts:[
{val:"0", label:"0"},{val:"1", label:"1"},{val:"2", label:"2"},{val:"3", label:"3"},
{val:"4", label:"4"},{val:"5", label:"5"},{val:"6", label:"6"},
{val:"7", label:"7"},{val:"8", label:"8"},{val:"9", label:"9"},{val:"10", label:"10"},
]},
],
calc:function(v){
  let s = 0;
  const sintomas = ['dor','cansaco','sono','nausea','apetite','dispneia','depressao','ansiedade','bemestar'];
  for (const k of sintomas) s += parseInt(v[k]||0);
  return s;
},
interp:function(s){
  const max = 90;
  if(s<=10) return {risco:`ESAS total ${s}/${max} — Sintomas leves`, acao:"Acompanhamento de rotina. Reaplicar em 1-2 semanas. Manter o que está funcionando.", cor:"ok"};
  if(s<=30) return {risco:`ESAS total ${s}/${max} — Sintomas moderados`, acao:"⚠ Identificar sintoma(s) com score ≥4 e ENDEREÇAR especificamente: dor → ajustar analgesia/escada OMS; náusea → antiemético por mecanismo; dispneia → morfina baixa dose + ar fresco; ansiedade → lorazepam SOS + abordagem psicossocial; falta de apetite → não forçar, dexa curto prazo se indicado. Reaplicar em 1 semana.", cor:"warn"};
  return {risco:`ESAS total ${s}/${max} — Sintomas intensos / múltiplos`, acao:"⚠ ⚠ Sofrimento significativo. Acionar EQUIPE COMPLETA — médico, enfermagem, psicologia, assistente social, espiritualidade. Revisar TODOS os sintomas ≥4 com plano específico. Considerar reavaliar prognóstico (PPI/KPS). Sedação paliativa: somente se sintoma refratário (não responde a manejo otimizado) E paciente em fase final. Reaplicar ESAS em 2-3 dias.", cor:"crit"};
}
},
{id:"kps", nome:"Karnofsky Performance Status (KPS)", sis:"pali",
desc:"Escala de status funcional 0-100 (maior = melhor). ⚠ Útil em cuidados paliativos para prognóstico e elegibilidade. KPS ≤40 = paciente predominantemente acamado, dependente, geralmente prognóstico <6 meses. KPS ≤20 = fase ativa de morte (dias-semanas).",
fields:[
{tipo:"select", id:"kps", label:"Selecione o nível funcional", opts:[
{val:"100", label:"100 — Normal, sem queixas, sem evidência de doença"},
{val:"90", label:"90 — Atividade normal, sintomas/sinais menores de doença"},
{val:"80", label:"80 — Atividade normal com esforço, alguns sintomas"},
{val:"70", label:"70 — Cuida de si, incapaz de atividade normal ou trabalho"},
{val:"60", label:"60 — Requer assistência ocasional, capaz da maioria das necessidades pessoais"},
{val:"50", label:"50 — Requer assistência considerável e cuidados médicos frequentes"},
{val:"40", label:"40 — Incapacitado, requer cuidados especiais e assistência"},
{val:"30", label:"30 — Severamente incapacitado, indicada hospitalização (morte não iminente)"},
{val:"20", label:"20 — Muito doente, hospitalização necessária, suporte ativo necessário"},
{val:"10", label:"10 — Moribundo, processos fatais progredindo rapidamente"},
{val:"0", label:"0 — Morto"},
]},
],
calc:function(v){
  return parseInt(v.kps||0);
},
interp:function(s){
  if(s>=80) return {risco:`KPS ${s} — Funcionalidade preservada`, acao:"Paciente capaz de atividades normais. Tratamento curativo/disease-modifier viável. Cuidados paliativos como camada complementar (sintomas, comunicação) — não é foco exclusivo.", cor:"ok"};
  if(s>=60) return {risco:`KPS ${s} — Funcionalidade reduzida — independente parcial`, acao:"Cuidados paliativos integrados (modelo simultâneo). Discutir metas de cuidado. Atenção a sintomas (ESAS). Planejamento avançado de cuidados (DA). Suporte familiar. Em câncer avançado: prognóstico geralmente 3-6 meses.", cor:"warn"};
  if(s>=40) return {risco:`KPS ${s} — Dependente — predominantemente em cama/cadeira`, acao:"⚠ Cuidados paliativos como FOCO principal. ⚠ Prognóstico geralmente <3 meses em câncer avançado. Acionar SAD/EMAD/hospice. Diretivas antecipadas IMPRESCINDÍVEIS. Conferir DNR/DNI. Suspender intervenções fúteis (rastreamentos, exames sem mudança de conduta). Ajustar via SC para drogas essenciais.", cor:"crit"};
  if(s>=20) return {risco:`KPS ${s} — Acamado severo — fase final`, acao:"⚠ ⚠ FASE FINAL DA VIDA — semanas. Conforto absoluto. Suspender medicações fúteis (estatinas, anti-hipertensivos rotineiros, antiagregantes em prevenção primária, suplementos). Manter analgesia, antieméticos, anti-sialorreia. KIT FIM DE VIDA prescrito. Via SC. Comunicação clara com família sobre prognóstico iminente. SAD ativo.", cor:"crit"};
  return {risco:`KPS ${s} — Moribundo / fase ativa de morte`, acao:"⚠ ⚠ ⚠ ÚLTIMAS HORAS-DIAS. Aplicar protocolo de últimas horas. Manter apenas medicações de conforto via SC (morfina, midazolam, haloperidol, hioscina butilbrometo, levomepromazina). Hidratação suspensa ou volume mínimo. Acompanhar família — rituais, despedidas. Preparar declaração de óbito em domicílio (se SAD).", cor:"crit"};
}
},
{id:"medd", nome:"MEDD — Dose Equivalente Diária de Morfina (Conversor de Opioides)", sis:"pali",
desc:"Calcula a DOSE EQUIVALENTE DIÁRIA DE MORFINA VO (MEDD em mg/d) a partir de doses de outros opioides. ⚠ ⚠ Útil em ROTAÇÃO DE OPIOIDES — após calcular MEDD total, REDUZIR 25-50% no opioide novo (cross-tolerance INCOMPLETA). ⚠ METADONA tem conversão NÃO LINEAR — NÃO incluída neste calculador (requer especialista).",
fields:[
{tipo:"num", id:"morf_vo", label:"Morfina VO — mg/dia (somar todas tomadas)"},
{tipo:"num", id:"morf_sc", label:"Morfina SC/IV — mg/dia"},
{tipo:"num", id:"codeina", label:"Codeína VO — mg/dia"},
{tipo:"num", id:"tramadol", label:"Tramadol VO — mg/dia"},
{tipo:"num", id:"oxicodona", label:"Oxicodona VO — mg/dia"},
{tipo:"num", id:"hidromorfona", label:"Hidromorfona VO — mg/dia"},
{tipo:"num", id:"fentanil_td", label:"Fentanil adesivo TD — mcg/h (dose do patch)"},
{tipo:"num", id:"bupre_td", label:"Buprenorfina adesivo TD — mcg/h (dose do patch)"},
],
calc:function(v){
  let m = 0;
  m += parseFloat(v.morf_vo||0) * 1;
  m += parseFloat(v.morf_sc||0) * 3;
  m += parseFloat(v.codeina||0) * 0.15;
  m += parseFloat(v.tramadol||0) * 0.1;
  m += parseFloat(v.oxicodona||0) * 1.5;
  m += parseFloat(v.hidromorfona||0) * 4;
  m += parseFloat(v.fentanil_td||0) * 2.4;
  m += parseFloat(v.bupre_td||0) * 3;
  return Math.round(m);
},
interp:function(s){
  const reduzido25 = Math.round(s*0.75);
  const reduzido50 = Math.round(s*0.5);
  const morfSC = Math.round(s/3);
  if(s===0) return {risco:`MEDD 0 mg/d`, acao:"Nenhum opioide computado. Verifique entradas.", cor:"ok"};
  if(s<60) return {risco:`MEDD ≈ ${s} mg de morfina VO/dia (DOSE BAIXA-MODERADA)`, acao:`⚠ ROTAÇÃO de opioide: reduzir 25% → ${reduzido25} mg/d morfina VO equivalente. CONVERSÃO VO → SC: dividir por 3 → ${morfSC} mg/d morfina SC ÷ 4-6h. ⚠ Para dose de RESGATE: usar 10-15% da dose total diária a cada 4h PRN.`, cor:"ok"};
  if(s<120) return {risco:`MEDD ≈ ${s} mg de morfina VO/dia (DOSE MODERADA-ALTA)`, acao:`⚠ ROTAÇÃO: reduzir 25-33% (cross-tolerance) → ${reduzido25} mg/d ou inferior. SC equivalente: ~${morfSC} mg/d. Dose resgate: 10-15% do total a cada 4h PRN. ⚠ Reavaliar adjuvantes (gabapentina, dexa, ADT) — pode haver dor mista refratária.`, cor:"warn"};
  return {risco:`MEDD ≈ ${s} mg de morfina VO/dia (DOSE ALTA)`, acao:`⚠ ⚠ DOSE ALTA — considerar ROTAÇÃO DE OPIOIDE (cross-tolerance incompleta — reduzir 50% → ${reduzido50} mg/d ou menos). Considerar METADONA (especialista) ou via espinhal. Reavaliar componente neuropático/mecânico — adjuvantes essenciais. ⚠ Avaliar TOXICIDADE NEUROEXCITATÓRIA por opioide (mioclonia, alodinia, hiperalgesia) — sinal de necessidade rotação. SC: ~${morfSC} mg/d ÷ infusão contínua ou bolus 4-6h.`, cor:"crit"};
}
},
{id:"ppi", nome:"PPI — Palliative Prognostic Index", sis:"pali",
desc:"Índice prognóstico em câncer avançado — sobrevida em semanas. Usa Palliative Performance Scale (PPS, similar ao KPS) + ingesta oral + edema + dispneia em repouso + delirium. ⚠ PPI >6 = sobrevida <3 sem; PPI >4 = sobrevida <6 sem.",
fields:[
{tipo:"select", id:"pps", label:"PPS — Performance (similar ao KPS)", opts:[
{val:"0", label:"0 — PPS ≥60 (independente parcial-total)"},
{val:"2.5", label:"2,5 — PPS 30-50 (dependente, em cama/cadeira)"},
{val:"4", label:"4 — PPS 10-20 (acamado severo, moribundo)"},
]},
{tipo:"select", id:"ingesta", label:"Ingesta oral", opts:[
{val:"0", label:"0 — Normal (>1 refeição/dia)"},
{val:"1", label:"1 — Moderadamente reduzida (1 refeição/dia ou menos)"},
{val:"2.5", label:"2,5 — Muito reduzida (apenas bocados / colher) ou nada VO"},
]},
{tipo:"bool", id:"edema", label:"Edema presente (+1)"},
{tipo:"bool", id:"dispneia", label:"Dispneia em REPOUSO presente (+3,5)"},
{tipo:"bool", id:"delirium", label:"Delirium presente (excluindo causa reversível como opioide em dose alta) (+4)"},
],
calc:function(v){
  let s = 0;
  s += parseFloat(v.pps||0);
  s += parseFloat(v.ingesta||0);
  if(v.edema) s += 1;
  if(v.dispneia) s += 3.5;
  if(v.delirium) s += 4;
  return Math.round(s*10)/10;
},
interp:function(s){
  if(s<=2) return {risco:`PPI ${s} — Sobrevida estimada >6 semanas`, acao:"Prognóstico relativamente preservado para câncer avançado. Paliativos integrados. Discutir metas, planejamento de cuidados. Reavaliar a cada 1-2 semanas.", cor:"warn"};
  if(s<=4) return {risco:`PPI ${s} — Sobrevida estimada 3-6 semanas`, acao:"⚠ Prognóstico LIMITADO. Conferir diretivas antecipadas. Aprofundar comunicação com paciente/família — SPIKES. Suspender intervenções fúteis (estatinas, anticoag em prevenção primária, controle glicêmico/pressórico rígido). Foco em sintomas: ESAS. SAD/hospice. Reavaliar semanalmente.", cor:"crit"};
  return {risco:`PPI ${s} — Sobrevida estimada <3 semanas`, acao:"⚠ ⚠ FASE FINAL — dias a semanas. Foco em conforto absoluto. KIT FIM DE VIDA prescrito antecipadamente. Manter apenas medicações essenciais via SC quando VO inviável. Comunicação aberta com família — preparar para morte iminente. Suspender hidratação venosa rotineira (avaliar caso a caso conforme conforto). Avaliação diária.", cor:"crit"};
}
},
);
