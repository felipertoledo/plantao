/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — calcs/resp-infecto.js
   6 calculadoras
   =========================================================== */

CALCS.push(
{
id:"centor", contexto:["pa","ubs"], nome:"Centor / McIsaac", sis:"resp",
desc:"Probabilidade de faringite estreptocócica. Decisão sobre teste rápido e antibioticoterapia.",
fields:[
{tipo:"bool", id:"a", label:"Febre > 38°C", peso:1},
{tipo:"bool", id:"b", label:"Ausência de tosse", peso:1},
{tipo:"bool", id:"c", label:"Linfadenopatia cervical anterior dolorosa", peso:1},
{tipo:"bool", id:"d", label:"Exsudato amigdaliano", peso:1},
{tipo:"select", id:"e", label:"Idade",
  opts:[{val:1,label:"3-14 anos",peso:1},{val:0,label:"15-44 anos",peso:0},{val:-1,label:"≥ 45 anos",peso:-1}]},
],
calc:function(v){
  let s=0;
  ["a","b","c","d"].forEach(k=>{ if(v[k]) s+=1; });
  s += parseInt(v.e||0);
  return s;
},
interp:function(s){
  if(s<=1) return {risco:"Baixa (1-10%)", acao:"Não testar nem tratar", cor:"ok"};
  if(s<=3) return {risco:"Moderada (11-35%)", acao:"Realizar teste rápido / cultura. Tratar se positivo.", cor:"warn"};
  return {risco:"Alta (51-53%)", acao:"Tratamento empírico — penicilina benzatina 1.200.000 UI IM ou amoxicilina 50 mg/kg/d 10 dias", cor:"crit"};
}
},
{
id:"curb65", contexto:["pa","ubs"], nome:"CURB-65", sis:"resp",
desc:"Decisão de internação em PAC. Mortalidade em 30 dias.",
fields:[
{tipo:"bool", id:"c", label:"Confusão mental nova", peso:1},
{tipo:"bool", id:"u", label:"Ureia > 50 mg/dL (BUN > 19)", peso:1},
{tipo:"bool", id:"r", label:"FR ≥ 30 ipm", peso:1},
{tipo:"bool", id:"b", label:"PAS < 90 ou PAD ≤ 60", peso:1},
{tipo:"bool", id:"a", label:"Idade ≥ 65 anos", peso:1},
],
calc:function(v){
  let s=0;
  ["c","u","r","b","a"].forEach(k=>{ if(v[k]) s+=1; });
  return s;
},
interp:function(s){
  if(s<=1) return {risco:"Baixo (< 3%)", acao:"Tratamento ambulatorial (amoxicilina ± azitromicina)", cor:"ok"};
  if(s===2) return {risco:"Moderado (9%)", acao:"Internação curta ou observação", cor:"warn"};
  return {risco:"Alto (> 15%)", acao:"Internar — UTI se ≥ 4", cor:"crit"};
}
},
{
id:"mascc", contexto:["pa","ubs"], nome:"MASCC — Neutropenia febril", sis:"infecto",
desc:"Estratifica risco em neutropenia febril. ≥ 21 = baixo risco, pode considerar manejo ambulatorial.",
fields:[
{tipo:"select", id:"a", label:"Sintomas",
  opts:[{val:5,label:"Sem ou leves",peso:5},{val:3,label:"Moderados",peso:3},{val:0,label:"Graves",peso:0}]},
{tipo:"bool", id:"b", label:"Sem hipotensão (PAS > 90)", peso:5},
{tipo:"bool", id:"c", label:"Sem DPOC", peso:4},
{tipo:"bool", id:"d", label:"Tumor sólido OU sem infecção fúngica prévia", peso:4},
{tipo:"bool", id:"e", label:"Sem desidratação que requer fluidos", peso:3},
{tipo:"bool", id:"f", label:"Início ambulatorial (não internado)", peso:3},
{tipo:"bool", id:"g", label:"Idade < 60 anos", peso:2},
],
calc:function(v){
  let s=0;
  s += parseInt(v.a||0);
  if(v.b) s+=5;
  if(v.c) s+=4;
  if(v.d) s+=4;
  if(v.e) s+=3;
  if(v.f) s+=3;
  if(v.g) s+=2;
  return s;
},
interp:function(s){
  if(s>=21) return {risco:"Baixo risco", acao:"Considerar manejo ambulatorial com fluoroquinolona + amoxi-clav VO em serviço estruturado", cor:"ok"};
  return {risco:"Alto risco", acao:"Internar — ATB IV amplo espectro (cefepime ou pipe-tazo) em 1h após febre", cor:"crit"};
}
},
{
id:"qsofa", contexto:["pa","ubs"], nome:"qSOFA", sis:"infecto",
desc:"Triagem rápida fora da UTI para suspeita de sepse. ≥ 2 = pior prognóstico.",
fields:[
{tipo:"bool", id:"a", label:"FR ≥ 22 ipm", peso:1},
{tipo:"bool", id:"b", label:"Alteração do nível de consciência (Glasgow < 15)", peso:1},
{tipo:"bool", id:"c", label:"PAS ≤ 100 mmHg", peso:1},
],
calc:function(v){
  let s=0;
  ["a","b","c"].forEach(k=>{ if(v[k]) s+=1; });
  return s;
},
interp:function(s){
  if(s<2) return {risco:"Baixo risco de desfecho desfavorável", acao:"Reavaliar; não exclui sepse — manter alta suspeição clínica", cor:"ok"};
  return {risco:"Alto risco — mortalidade > 10%", acao:"Suspeitar de sepse → bundle 1h da SSC: lactato, hemoculturas, ATB amplo, cristaloide 30 mL/kg se hipotensão ou lactato ≥ 4, NE para PAM ≥ 65", cor:"crit"};
}
},
{id:"qsofa", contexto:["pa","ubs"], nome:"qSOFA — Triagem rápida de Sepse fora da UTI", sis:"infecto",
desc:"Quick SOFA. Aplicar em paciente com infecção SUSPEITA fora da UTI. ⚠ qSOFA ≥2 = ALTO risco de mortalidade — investigar SEPSE (SOFA completo, lactato, hemoculturas, ATB precoce). ⚠ NÃO é diagnóstico de sepse — é FERRAMENTA DE TRIAGEM.",
fields:[
{tipo:"select", id:"fr", label:"Frequência respiratória", opts:[
{val:"0", label:"0 — <22 ipm"},
{val:"1", label:"1 — ≥22 ipm"},
]},
{tipo:"select", id:"mc", label:"Estado mental", opts:[
{val:"0", label:"0 — Glasgow 15 (alerta)"},
{val:"1", label:"1 — Glasgow <15 (qualquer alteração)"},
]},
{tipo:"select", id:"pas", label:"Pressão arterial sistólica", opts:[
{val:"0", label:"0 — PAS >100 mmHg"},
{val:"1", label:"1 — PAS ≤100 mmHg"},
]},
],
calc:function(v){
  let s = 0;
  s += parseInt(v.fr||0);
  s += parseInt(v.mc||0);
  s += parseInt(v.pas||0);
  return s;
},
interp:function(s){
  if(s<2) return {risco:`qSOFA ${s} — Baixo risco`, acao:"Mantém investigação da infecção. Reavaliar serialmente — qSOFA pode subir. Considerar SIRS, NEWS2, hemograma, lactato, gasometria se suspeita clínica forte.", cor:"ok"};
  return {risco:`qSOFA ${s} — ALTO RISCO de mortalidade (≥2) — possível SEPSE`, acao:"⚠ ⚠ INVESTIGAR SEPSE: 2 HEMOCULTURAS + URINOCULTURA + outras culturas conforme foco. LACTATO sérico. ⚠ ANTIBIÓTICO EMPÍRICO em ≤1 hora (cobertura do foco suspeito). CRISTALOIDE 30 mL/kg em 3h se hipoperfusão. Reavaliar PA, perfusão, diurese. Calcular SOFA completo. ⚠ Comunicar ao plantonista/UTI.", cor:"crit"};
}
},
{
id:"sofa", contexto:["pa","ubs"], nome:"SOFA", sis:"infecto",
desc:"Disfunção orgânica em UTI. ↑ ≥ 2 pontos sobre basal define sepse (Sepsis-3).",
fields:[
{tipo:"select", id:"resp", label:"PaO₂/FiO₂",
  opts:[{val:0,label:"≥ 400",peso:0},{val:1,label:"< 400",peso:1},{val:2,label:"< 300",peso:2},{val:3,label:"< 200 c/ VM",peso:3},{val:4,label:"< 100 c/ VM",peso:4}]},
{tipo:"select", id:"coag", label:"Plaquetas (×10³/μL)",
  opts:[{val:0,label:"≥ 150",peso:0},{val:1,label:"< 150",peso:1},{val:2,label:"< 100",peso:2},{val:3,label:"< 50",peso:3},{val:4,label:"< 20",peso:4}]},
{tipo:"select", id:"hep", label:"Bilirrubina (mg/dL)",
  opts:[{val:0,label:"< 1,2",peso:0},{val:1,label:"1,2–1,9",peso:1},{val:2,label:"2,0–5,9",peso:2},{val:3,label:"6,0–11,9",peso:3},{val:4,label:"> 12",peso:4}]},
{tipo:"select", id:"cv", label:"Cardiovascular",
  opts:[
    {val:0,label:"PAM ≥ 70",peso:0},
    {val:1,label:"PAM < 70",peso:1},
    {val:2,label:"Dopa ≤ 5 ou dobuta",peso:2},
    {val:3,label:"Dopa > 5 ou NE/adre ≤ 0,1",peso:3},
    {val:4,label:"Dopa > 15 ou NE/adre > 0,1",peso:4}]},
{tipo:"select", id:"snc", label:"Glasgow",
  opts:[{val:0,label:"15",peso:0},{val:1,label:"13–14",peso:1},{val:2,label:"10–12",peso:2},{val:3,label:"6–9",peso:3},{val:4,label:"< 6",peso:4}]},
{tipo:"select", id:"ren", label:"Creatinina (mg/dL) ou diurese",
  opts:[{val:0,label:"< 1,2",peso:0},{val:1,label:"1,2–1,9",peso:1},{val:2,label:"2,0–3,4",peso:2},{val:3,label:"3,5–4,9 ou diurese < 500 mL/d",peso:3},{val:4,label:"> 5 ou < 200 mL/d",peso:4}]},
],
calc:function(v){
  return parseInt(v.resp||0)+parseInt(v.coag||0)+parseInt(v.hep||0)+parseInt(v.cv||0)+parseInt(v.snc||0)+parseInt(v.ren||0);
},
interp:function(s){
  if(s<2) return {risco:"Sem disfunção significativa", acao:"Reavaliar evolução", cor:"ok"};
  if(s<6) return {risco:"Disfunção orgânica — mortalidade ~10%", acao:"Sepse confirmada se infecção. Bundle SSC, UTI.", cor:"warn"};
  if(s<10) return {risco:"Disfunção moderada — mortalidade 15-20%", acao:"UTI obrigatória, terapia direcionada", cor:"crit"};
  return {risco:"Disfunção grave — mortalidade > 40-90%", acao:"UTI, suporte multiorgânico", cor:"crit"};
}
},
);
