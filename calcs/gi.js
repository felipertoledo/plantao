/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — calcs/gi.js
   10 calculadoras
   =========================================================== */

CALCS.push(
{
id:"alvarado", nome:"Alvarado (Apendicite)", sis:"gi",
desc:"Escala MANTRELS — probabilidade de apendicite aguda. 10 pontos. Útil para triagem; não substitui imagem em casos duvidosos.",
fields:[
{tipo:"bool", id:"m", label:"M — Migração da dor (epigástrio/periumbilical → FID)", peso:1},
{tipo:"bool", id:"a", label:"A — Anorexia", peso:1},
{tipo:"bool", id:"n", label:"N — Náusea ou vômito", peso:1},
{tipo:"bool", id:"t", label:"T — Tenderness (dor à palpação em FID)", peso:2},
{tipo:"bool", id:"r", label:"R — Rebound (descompressão dolorosa em FID)", peso:1},
{tipo:"bool", id:"e", label:"E — Elevação da temperatura (≥ 37,3°C)", peso:1},
{tipo:"bool", id:"l", label:"L — Leucocitose (> 10.000/mm³)", peso:2},
{tipo:"bool", id:"s", label:"S — Shift to left (neutrofilia > 75%)", peso:1},
],
calc:function(v){
  return ["m","a","n","t","r","e","l","s"].reduce((acc,k)=>acc+(parseInt(v[k]||0)),0);
},
interp:function(s){
  if(s<=3) return {risco:"≤3 — Baixa probabilidade", acao:"Apendicite improvável. Considerar diagnósticos alternativos (gastroenterite, ITU, doença ginecológica). Reavaliação seriada se dor persiste.", cor:"ok"};
  if(s<=4) return {risco:"4 — Indeterminado (baixo)", acao:"Observação seriada com reavaliação em 4-6h ou imagem (USG em mulheres/crianças, TC se necessário). Dieta zero.", cor:"info"};
  if(s<=6) return {risco:"5-6 — Possível apendicite", acao:"Imagem indicada: USG (especialmente jovens e mulheres), TC se USG inconclusivo. Cirurgião avisado. Dieta zero, hidratação venosa.", cor:"warn"};
  if(s<=8) return {risco:"7-8 — Provável apendicite", acao:"Avaliação cirúrgica urgente. Imagem (TC) para confirmar e descartar complicação. Iniciar ATB se sinais sistêmicos (ceftriaxona + metronidazol). Dieta zero.", cor:"warn"};
  return {risco:"9-10 — Apendicite muito provável", acao:"Cirurgia (apendicectomia) — pode dispensar imagem em homens jovens com quadro clássico. ATB profilático no centro cirúrgico. Imagem se dúvida diagnóstica ou suspeita de complicação (abscesso, perfuração).", cor:"crit"};
}
},
{
id:"bisap", nome:"BISAP", sis:"gi",
desc:"Estratificação de pancreatite aguda nas primeiras 24h.",
fields:[
{tipo:"bool", id:"b", label:"BUN > 25 mg/dL (ureia > 53)", peso:1},
{tipo:"bool", id:"i", label:"Impaired mental status (Glasgow < 15)", peso:1},
{tipo:"bool", id:"s", label:"SIRS (≥ 2 critérios)", peso:1},
{tipo:"bool", id:"a", label:"Age > 60 anos", peso:1},
{tipo:"bool", id:"p", label:"Pleural effusion (RX/USG/TC)", peso:1},
],
calc:function(v){
  let s=0;
  ["b","i","s","a","p"].forEach(k=>{ if(v[k]) s+=1; });
  return s;
},
interp:function(s){
  if(s<3) return {risco:"Baixo (< 2% mortalidade)", acao:"Manejo padrão", cor:"ok"};
  return {risco:"Alto (> 15% mortalidade)", acao:"UTI / observação intensiva", cor:"crit"};
}
},
{id:"bisap", nome:"BISAP — Gravidade da Pancreatite Aguda", sis:"gi",
desc:"Bedside Index for Severity in Acute Pancreatitis. Aplicar nas PRIMEIRAS 24H. Score ≥3 = pancreatite GRAVE (10-20% mortalidade) — UTI / acompanhamento próximo.",
fields:[
{tipo:"bool", id:"b", label:"BUN >25 mg/dL (Ureia >53) (+1)"},
{tipo:"bool", id:"i", label:"Impaired mental status — alteração consciência (GCS <15) (+1)"},
{tipo:"bool", id:"s", label:"SIRS — ≥2 dos critérios SIRS (Tax >38 ou <36, FC >90, FR >20 ou pCO₂ <32, leuco >12 ou <4 ou >10% bastões) (+1)"},
{tipo:"bool", id:"a", label:"Age — idade >60 anos (+1)"},
{tipo:"bool", id:"p", label:"Pleural effusion — derrame pleural na imagem (+1)"},
],
calc:function(v){
  let s = 0;
  ['b','i','s','a','p'].forEach(k => { if(v[k]) s+=1; });
  return s;
},
interp:function(s){
  if(s<=2) return {risco:`BISAP ${s} — Pancreatite LEVE-MODERADA (mortalidade <2%)`, acao:"Enfermaria. Hidratação vigorosa primeiras 24-48h (Ringer Lactato 250-500 mL/h, reavaliar). Analgesia (evitar AINE — preferir dipirona + opioide). Repouso digestivo até melhora da dor e queda de amilase/lipase. Investigar etiologia (USG vias biliares + perfil lipídico + cálcio + álcool).", cor:"ok"};
  if(s===3) return {risco:`BISAP ${s} — Pancreatite POTENCIALMENTE GRAVE (mortalidade 5-8%)`, acao:"⚠ Considerar UTI / unidade semi-intensiva. Hidratação vigorosa, controle de dor, observação rigorosa. TC abdome 48-72h se piora ou suspeita de complicação. ⚠ ATB profilático NÃO indicado em pancreatite estéril.", cor:"warn"};
  return {risco:`BISAP ${s} — Pancreatite GRAVE (mortalidade 10-20%)`, acao:"⚠ UTI. Suporte intensivo, hidratação dirigida por hemodinâmica, suporte ventilatório se SARA, RRT se IRA. ⚠ TC contrastada 72h para necrose. ATB se infecção confirmada (necrose infectada, colangite). Avaliação cirúrgica em coleções, necrosectomia tardia.", cor:"crit"};
}
},
{
id:"blatchford", nome:"Glasgow-Blatchford", sis:"gi",
desc:"Estratifica HDA — identifica pacientes de muito baixo risco que podem ser manejados ambulatorialmente.",
fields:[
{tipo:"select", id:"ur", label:"Ureia (mg/dL)",
  opts:[{val:0,label:"< 39",peso:0},{val:2,label:"39–48",peso:2},{val:3,label:"48–60",peso:3},{val:4,label:"60–150",peso:4},{val:6,label:"≥ 150",peso:6}]},
{tipo:"select", id:"hbh", label:"Hb (g/dL) — Homem",
  opts:[{val:0,label:"≥ 13 ou ♀",peso:0},{val:1,label:"12-13 (H)",peso:1},{val:3,label:"10-12 (H)",peso:3},{val:6,label:"< 10",peso:6}]},
{tipo:"select", id:"hbm", label:"Hb (g/dL) — Mulher (use 0 se H)",
  opts:[{val:0,label:"≥ 12 ou H já contado",peso:0},{val:1,label:"10-12 (M)",peso:1},{val:6,label:"< 10 (M)",peso:6}]},
{tipo:"select", id:"pas", label:"PAS",
  opts:[{val:0,label:"≥ 110",peso:0},{val:1,label:"100-109",peso:1},{val:2,label:"90-99",peso:2},{val:3,label:"< 90",peso:3}]},
{tipo:"bool", id:"fc", label:"FC ≥ 100", peso:1},
{tipo:"bool", id:"mel", label:"Melena", peso:1},
{tipo:"bool", id:"sin", label:"Síncope", peso:2},
{tipo:"bool", id:"hep", label:"Doença hepática", peso:2},
{tipo:"bool", id:"ic", label:"IC", peso:2},
],
calc:function(v){
  let s=0;
  s += parseInt(v.ur||0);
  s += parseInt(v.hbh||0);
  s += parseInt(v.hbm||0);
  s += parseInt(v.pas||0);
  if(v.fc) s+=1; if(v.mel) s+=1; if(v.sin) s+=2;
  if(v.hep) s+=2; if(v.ic) s+=2;
  return s;
},
interp:function(s){
  if(s===0) return {risco:"Muito baixo (0,5% mortalidade)", acao:"Considerar alta + EDA ambulatorial", cor:"ok"};
  if(s<=5) return {risco:"Baixo-moderado", acao:"Internar para EDA precoce (< 24h)", cor:"warn"};
  return {risco:"Alto", acao:"Internar — EDA urgente (< 12h), estabilização, IBP IV", cor:"crit"};
}
},
{
id:"child-pugh", nome:"Child-Pugh", sis:"gi",
desc:"Classificação prognóstica em cirrose. Avalia sobrevida e risco cirúrgico.",
fields:[
{tipo:"select", id:"a", label:"Ascite",
  opts:[{val:1,label:"Ausente",peso:1},{val:2,label:"Pequena/controlada",peso:2},{val:3,label:"Refratária",peso:3}]},
{tipo:"select", id:"b", label:"Bilirrubina (mg/dL)",
  opts:[{val:1,label:"< 2",peso:1},{val:2,label:"2-3",peso:2},{val:3,label:"> 3",peso:3}]},
{tipo:"select", id:"c", label:"Albumina (g/dL)",
  opts:[{val:1,label:"> 3,5",peso:1},{val:2,label:"2,8-3,5",peso:2},{val:3,label:"< 2,8",peso:3}]},
{tipo:"select", id:"d", label:"RNI",
  opts:[{val:1,label:"< 1,7",peso:1},{val:2,label:"1,7-2,3",peso:2},{val:3,label:"> 2,3",peso:3}]},
{tipo:"select", id:"e", label:"Encefalopatia",
  opts:[{val:1,label:"Ausente",peso:1},{val:2,label:"Grau 1-2",peso:2},{val:3,label:"Grau 3-4",peso:3}]},
],
calc:function(v){
  return parseInt(v.a||1)+parseInt(v.b||1)+parseInt(v.c||1)+parseInt(v.d||1)+parseInt(v.e||1);
},
interp:function(s){
  if(s<=6) return {risco:"Child A — sobrevida 1 ano 100%", acao:"Compensado", cor:"ok"};
  if(s<=9) return {risco:"Child B — sobrevida 1 ano 80%", acao:"Cuidado com fármacos hepatotóxicos; pré-transplante", cor:"warn"};
  return {risco:"Child C — sobrevida 1 ano 45%", acao:"Lista de transplante", cor:"crit"};
}
},
{id:"child-pugh", nome:"Child-Pugh — Cirrose", sis:"gi",
desc:"Classificação clássica de gravidade da cirrose. A (5-6), B (7-9), C (10-15). Cirurgia abdominal, transplante, prognóstico.",
fields:[
{tipo:"select", id:"bili", label:"Bilirrubina (mg/dL)", opts:[
{val:"1", label:"1 — < 2"},{val:"2", label:"2 — 2-3"},{val:"3", label:"3 — > 3"}
]},
{tipo:"select", id:"alb", label:"Albumina (g/dL)", opts:[
{val:"1", label:"1 — > 3,5"},{val:"2", label:"2 — 2,8-3,5"},{val:"3", label:"3 — < 2,8"}
]},
{tipo:"select", id:"inr", label:"INR", opts:[
{val:"1", label:"1 — < 1,7"},{val:"2", label:"2 — 1,7-2,3"},{val:"3", label:"3 — > 2,3"}
]},
{tipo:"select", id:"asc", label:"Ascite", opts:[
{val:"1", label:"1 — Ausente"},{val:"2", label:"2 — Leve (controlada com diurético)"},{val:"3", label:"3 — Moderada-grave (refratária)"}
]},
{tipo:"select", id:"enc", label:"Encefalopatia", opts:[
{val:"1", label:"1 — Ausente"},{val:"2", label:"2 — Grau I-II (leve)"},{val:"3", label:"3 — Grau III-IV (grave)"}
]},
],
calc:function(v){
  if (v.bili == null || v.alb == null || v.inr == null || v.asc == null || v.enc == null) return NaN;
  return ["bili","alb","inr","asc","enc"].reduce((s,k)=>s+parseInt(v[k]||1), 0);
},
interp:function(s){
  if (s == null || (typeof s === "number" && isNaN(s))) return {risco:"—", acao:"Preencha todos os campos acima.", cor:"info"};
  if(s<=6) return {risco:`Child A (${s} pontos)`, acao:"Sobrevida 1 ano ~100%. Cirurgia abdominal de baixo-moderado risco aceitável. Acompanhamento clínico.", cor:"ok"};
  if(s<=9) return {risco:`Child B (${s} pontos)`, acao:"Sobrevida 1 ano ~80%, 2 anos ~60%. CIRURGIA com risco elevado. Avaliar transplante se descompensação. Otimizar nutrição, ascite, encefalopatia.", cor:"warn"};
  return {risco:`Child C (${s} pontos)`, acao:"Sobrevida 1 ano ~45%, 2 anos ~35%. EVITAR cirurgia eletiva (mortalidade muito alta). Prioridade para transplante. UTI se descompensado.", cor:"crit"};
}
},
{
id:"meld", nome:"MELD", sis:"gi",
desc:"Mortalidade em 3 meses na cirrose. Lista de transplante. MELD = 9,57·ln(Cr) + 3,78·ln(BT) + 11,2·ln(RNI) + 6,43",
fields:[
{tipo:"num", id:"cr", label:"Creatinina (mg/dL)", hint:"se diálise 2x/sem use 4,0", unidade:"mg/dL"},
{tipo:"num", id:"bt", label:"Bilirrubina total", unidade:"mg/dL"},
{tipo:"num", id:"inr", label:"RNI", unidade:""},
],
calc:function(v){
  let cr=Math.max(1.0, parseFloat(v.cr||1.0));
  cr=Math.min(cr,4.0);
  const bt=Math.max(1.0, parseFloat(v.bt||1.0));
  const inr=Math.max(1.0, parseFloat(v.inr||1.0));
  const meld = 9.57*Math.log(cr) + 3.78*Math.log(bt) + 11.2*Math.log(inr) + 6.43;
  return Math.round(meld);
},
interp:function(s){
  if(s<10) return {risco:"~2% mortalidade em 3 meses", acao:"Acompanhamento ambulatorial", cor:"ok"};
  if(s<20) return {risco:"~6% mortalidade", acao:"Atenção ao referenciamento — pré-lista de transplante", cor:"warn"};
  if(s<30) return {risco:"~52% mortalidade", acao:"Considerar transplante hepático urgente", cor:"crit"};
  return {risco:"~71% mortalidade", acao:"Transplante hepático urgente — UTI", cor:"crit"};
}
},
{id:"meld-na", nome:"MELD-Na — Gravidade da Doença Hepática", sis:"gi",
desc:"Model for End-Stage Liver Disease com sódio. Predição de mortalidade em 3 meses. Usado em alocação de transplante hepático.",
fields:[
{tipo:"num", id:"bili", label:"Bilirrubina total (mg/dL)", min:0.1, max:50, step:0.1},
{tipo:"num", id:"inr", label:"INR", min:0.5, max:10, step:0.01},
{tipo:"num", id:"cr", label:"Creatinina (mg/dL)", min:0.1, max:15, step:0.1},
{tipo:"num", id:"na", label:"Sódio (mEq/L)", min:120, max:160, step:1},
{tipo:"bool", id:"dial", label:"Diálise em 2x na última semana"},
],
calc:function(v){
  if (v.bili == null || v.inr == null || v.cr == null || v.na == null) return NaN;
  let bili = Math.max(1, parseFloat(v.bili||1));
  let inr = Math.max(1, parseFloat(v.inr||1));
  let cr = parseFloat(v.cr||1);
  let na = parseInt(v.na||140);
  
  // Se diálise ≥2x: cr = 4.0
  if(v.dial) cr = 4.0;
  cr = Math.max(1, Math.min(cr, 4.0));
  na = Math.max(125, Math.min(na, 137));
  
  // MELD = 0.957 × ln(cr) + 0.378 × ln(bili) + 1.120 × ln(inr) + 0.643
  let meld = 0.957 * Math.log(cr) + 0.378 * Math.log(bili) + 1.120 * Math.log(inr) + 0.643;
  meld = Math.round(meld * 10);
  meld = Math.max(6, meld);
  
  // MELD-Na = MELD + 1.32 × (137 - Na) - [0.033 × MELD × (137 - Na)]
  if(meld > 11 && na < 137) {
    meld = meld + 1.32 * (137 - na) - (0.033 * meld * (137 - na));
  }
  return Math.min(40, Math.round(meld));
},
interp:function(s){
  if (s == null || (typeof s === "number" && isNaN(s))) return {risco:"—", acao:"Preencha todos os campos acima.", cor:"info"};
  if(s<10) return {risco:`MELD-Na ${s} — Baixo risco`, acao:"Mortalidade 3m ~2%. Acompanhamento ambulatorial.", cor:"ok"};
  if(s<20) return {risco:`MELD-Na ${s} — Moderado`, acao:"Mortalidade 3m ~6-20%. Avaliar para transplante. Otimizar.", cor:"info"};
  if(s<30) return {risco:`MELD-Na ${s} — Alto`, acao:"Mortalidade 3m ~20-50%. PRIORIDADE para transplante. Internação se descompensado.", cor:"warn"};
  return {risco:`MELD-Na ${s} — Muito alto`, acao:"Mortalidade 3m >50%. URGÊNCIA em transplante. UTI hepatológica.", cor:"crit"};
}
},
{
id:"ranson", nome:"Ranson — admissão", sis:"gi",
desc:"Mortalidade em pancreatite aguda. Critérios da admissão (somar com critérios 48h depois).",
fields:[
{tipo:"bool", id:"a", label:"Idade > 55 anos", peso:1},
{tipo:"bool", id:"b", label:"Leucócitos > 16.000", peso:1},
{tipo:"bool", id:"c", label:"Glicemia > 200 mg/dL", peso:1},
{tipo:"bool", id:"d", label:"LDH > 350 U/L", peso:1},
{tipo:"bool", id:"e", label:"AST > 250 U/L", peso:1},
],
calc:function(v){
  let s=0;
  ["a","b","c","d","e"].forEach(k=>{ if(v[k]) s+=1; });
  return s;
},
interp:function(s){
  if(s<3) return {risco:"Leve (< 3% mortalidade)", acao:"Tratamento padrão — hidratação moderada guiada por metas (WATERFALL)", cor:"ok"};
  if(s<5) return {risco:"Moderado (15% mortalidade)", acao:"UTI / monitoração estrita", cor:"warn"};
  return {risco:"Grave (40-100% mortalidade)", acao:"UTI obrigatória; ATB apenas se necrose infectada", cor:"crit"};
}
},
{
id:"rockall", nome:"Rockall (clínico)", sis:"gi",
desc:"Risco de óbito após HDA. Versão clínica (pré-endoscopia).",
fields:[
{tipo:"select", id:"a", label:"Idade",
  opts:[{val:0,label:"< 60",peso:0},{val:1,label:"60-79",peso:1},{val:2,label:"≥ 80",peso:2}]},
{tipo:"select", id:"b", label:"Estado hemodinâmico",
  opts:[{val:0,label:"PAS > 100, FC < 100",peso:0},{val:1,label:"PAS > 100, FC ≥ 100",peso:1},{val:2,label:"PAS < 100",peso:2}]},
{tipo:"select", id:"c", label:"Comorbidade",
  opts:[{val:0,label:"Nenhuma",peso:0},{val:2,label:"IC, DAC, comorbidade maior",peso:2},{val:3,label:"IRC, hepatopatia, neoplasia disseminada",peso:3}]},
],
calc:function(v){
  return parseInt(v.a||0)+parseInt(v.b||0)+parseInt(v.c||0);
},
interp:function(s){
  if(s===0) return {risco:"Muito baixo", acao:"Manejo ambulatorial possível", cor:"ok"};
  if(s<=2) return {risco:"Baixo-moderado", acao:"Internar para EDA", cor:"warn"};
  return {risco:"Alto", acao:"Internar UTI / observação, EDA urgente", cor:"crit"};
}
},
);
