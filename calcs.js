/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — CALCULADORAS DE PLANTÃO
   30 escores e calculadoras essenciais
   Estrutura: {id, nome, desc, sis, fields[], calc(v), interp(s)}
   Tipos de campo: 
     - {tipo:"num", id, label, hint, unidade}
     - {tipo:"bool", id, label, peso}
     - {tipo:"select", id, label, opts:[{val,label,peso}]}
   =========================================================== */

const CALCS = [
/* ============== CARDIOVASCULARES ============== */
{
id:"chads-va", nome:"CHA₂DS₂-VA", sis:"cardio",
desc:"Risco anual de AVC em FA não-valvar. Diretriz SBC 2025 substituiu CHA₂DS₂-VASc por CHA₂DS₂-VA (removeu sexo).",
fields:[
{tipo:"bool", id:"c", label:"Insuficiência cardíaca / disfunção VE", peso:1},
{tipo:"bool", id:"h", label:"Hipertensão arterial", peso:1},
{tipo:"select", id:"a", label:"Idade",
  opts:[{val:0,label:"< 65 anos",peso:0},{val:1,label:"65–74 anos",peso:1},{val:2,label:"≥ 75 anos",peso:2}]},
{tipo:"bool", id:"d", label:"Diabetes mellitus", peso:1},
{tipo:"bool", id:"s", label:"AVC / AIT / tromboembolismo prévio", peso:2},
{tipo:"bool", id:"v", label:"Doença vascular (IAM prévio, DAP, placa aórtica)", peso:1},
],
calc:function(v){
  let s=0;
  if(v.c) s+=1;
  if(v.h) s+=1;
  s += parseInt(v.a||0);
  if(v.d) s+=1;
  if(v.s) s+=2;
  if(v.v) s+=1;
  return s;
},
interp:function(s){
  if(s===0) return {risco:"Muito baixo (0,3%/ano)", acao:"Não anticoagular", cor:"ok"};
  if(s===1) return {risco:"Baixo–moderado (0,9%/ano)", acao:"Considerar anticoagulação (DOAC preferido)", cor:"warn"};
  if(s<=2) return {risco:"Moderado (2,9%/ano)", acao:"Anticoagular — DOAC preferido (apixabana/rivaroxabana/dabigatrana/edoxabana)", cor:"warn"};
  if(s<=4) return {risco:"Alto (4–7%/ano)", acao:"Anticoagular indefinidamente — DOAC preferido", cor:"crit"};
  return {risco:"Muito alto (≥ 9,8%/ano)", acao:"Anticoagular indefinidamente — DOAC ou varfarina (RNI 2-3)", cor:"crit"};
}
},

{
id:"hasbled", nome:"HAS-BLED", sis:"cardio",
desc:"Risco anual de sangramento maior com anticoagulação em FA. Não contraindica anticoagulação — sinaliza necessidade de modificar fatores reversíveis.",
fields:[
{tipo:"bool", id:"h", label:"Hipertensão não controlada (PAS > 160)", peso:1},
{tipo:"bool", id:"a", label:"Disfunção renal (Cr > 2,3 / diálise) ou hepática (cirrose, bili > 2x, TGO/TGP > 3x)", peso:1},
{tipo:"bool", id:"s", label:"AVC prévio", peso:1},
{tipo:"bool", id:"b", label:"Sangramento prévio ou predisposição", peso:1},
{tipo:"bool", id:"l", label:"RNI lábil (TTR < 60%) — se em varfarina", peso:1},
{tipo:"bool", id:"e", label:"Idoso (> 65 anos)", peso:1},
{tipo:"bool", id:"d1", label:"Drogas (AAS/AINE/antiagregantes)", peso:1},
{tipo:"bool", id:"d2", label:"Etilismo (≥ 8 doses/sem)", peso:1},
],
calc:function(v){
  let s=0;
  ["h","a","s","b","l","e","d1","d2"].forEach(k=>{ if(v[k]) s+=1; });
  return s;
},
interp:function(s){
  if(s<=2) return {risco:"Baixo (1,02–1,88%/ano)", acao:"Anticoagular normalmente; revisar fatores", cor:"ok"};
  if(s===3) return {risco:"Moderado (3,74%/ano)", acao:"Modificar fatores reversíveis (PA, AAS, álcool, RNI); seguimento próximo", cor:"warn"};
  return {risco:"Alto (≥ 8,7%/ano)", acao:"Anticoagular se CHA₂DS₂-VA ≥ 2 — modificar fatores e monitorar de perto", cor:"crit"};
}
},

{
id:"heart", nome:"HEART Score", sis:"cardio",
desc:"Risco de evento cardíaco maior (EAM/revascularização/morte) em 6 semanas em pacientes com dor torácica no PS.",
fields:[
{tipo:"select", id:"hist", label:"História",
  opts:[{val:0,label:"Pouco suspeita",peso:0},{val:1,label:"Moderada",peso:1},{val:2,label:"Altamente suspeita",peso:2}]},
{tipo:"select", id:"ecg", label:"ECG",
  opts:[{val:0,label:"Normal",peso:0},{val:1,label:"Repolarização inespecífica / BRE / MP",peso:1},{val:2,label:"Desvio ST significativo",peso:2}]},
{tipo:"select", id:"age", label:"Idade",
  opts:[{val:0,label:"< 45 anos",peso:0},{val:1,label:"45–64 anos",peso:1},{val:2,label:"≥ 65 anos",peso:2}]},
{tipo:"select", id:"rf", label:"Fatores de risco (HAS, DM, DLP, tabagismo, obesidade, HF, DAC prévia)",
  opts:[{val:0,label:"Nenhum",peso:0},{val:1,label:"1–2 fatores",peso:1},{val:2,label:"≥ 3 fatores ou DAC prévia",peso:2}]},
{tipo:"select", id:"tn", label:"Troponina",
  opts:[{val:0,label:"≤ limite normal",peso:0},{val:1,label:"1–3× limite normal",peso:1},{val:2,label:"> 3× limite normal",peso:2}]},
],
calc:function(v){
  return parseInt(v.hist||0)+parseInt(v.ecg||0)+parseInt(v.age||0)+parseInt(v.rf||0)+parseInt(v.tn||0);
},
interp:function(s){
  if(s<=3) return {risco:"Baixo — 1,7% MACE em 6 sem", acao:"Alta segura com seguimento ambulatorial", cor:"ok"};
  if(s<=6) return {risco:"Moderado — 16,6% MACE", acao:"Internar para observação seriada + provocação isquêmica", cor:"warn"};
  return {risco:"Alto — 50,1% MACE", acao:"Conduta invasiva precoce — cardiologia / hemodinâmica", cor:"crit"};
}
},

{
id:"timi", nome:"TIMI Risk — SCA sem supra", sis:"cardio",
desc:"Risco de óbito/IAM/revascularização urgente em 14 dias em AI/IAMSST.",
fields:[
{tipo:"bool", id:"a", label:"Idade ≥ 65 anos", peso:1},
{tipo:"bool", id:"b", label:"≥ 3 fatores de risco para DAC", peso:1},
{tipo:"bool", id:"c", label:"DAC conhecida (estenose ≥ 50%)", peso:1},
{tipo:"bool", id:"d", label:"Uso de AAS nos últimos 7 dias", peso:1},
{tipo:"bool", id:"e", label:"≥ 2 episódios anginosos em 24h", peso:1},
{tipo:"bool", id:"f", label:"Desvio de ST ≥ 0,5 mm", peso:1},
{tipo:"bool", id:"g", label:"Marcadores de necrose ↑", peso:1},
],
calc:function(v){
  let s=0;
  ["a","b","c","d","e","f","g"].forEach(k=>{ if(v[k]) s+=1; });
  return s;
},
interp:function(s){
  if(s<=2) return {risco:"Baixo (≤ 8% em 14 dias)", acao:"Tratamento conservador — estratificação não invasiva", cor:"ok"};
  if(s<=4) return {risco:"Intermediário (13–20%)", acao:"Estratégia invasiva precoce (< 72h)", cor:"warn"};
  return {risco:"Alto (≥ 26%)", acao:"Estratégia invasiva imediata (< 24h)", cor:"crit"};
}
},

{
id:"grace", nome:"GRACE (simplificado)", sis:"cardio",
desc:"Risco de óbito intra-hospitalar em SCA. Esta versão usa as variáveis principais com cálculo simplificado de pontos.",
fields:[
{tipo:"num", id:"idade", label:"Idade", hint:"anos", unidade:"a"},
{tipo:"num", id:"fc", label:"FC", hint:"bpm", unidade:"bpm"},
{tipo:"num", id:"pas", label:"PAS", hint:"mmHg", unidade:"mmHg"},
{tipo:"num", id:"cr", label:"Creatinina", hint:"mg/dL", unidade:"mg/dL"},
{tipo:"select", id:"killip", label:"Killip",
  opts:[{val:1,label:"I — sem IC"},{val:2,label:"II — crepitações basais / B3"},{val:3,label:"III — EAP"},{val:4,label:"IV — choque"}]},
{tipo:"bool", id:"pcr", label:"PCR à admissão"},
{tipo:"bool", id:"st", label:"Desvio de ST"},
{tipo:"bool", id:"mn", label:"Marcadores de necrose ↑"},
],
calc:function(v){
  let s=0;
  const idade=parseInt(v.idade||0);
  if(idade<40) s+=0; else if(idade<50) s+=18; else if(idade<60) s+=36;
  else if(idade<70) s+=55; else if(idade<80) s+=73; else if(idade<90) s+=91; else s+=100;
  const fc=parseInt(v.fc||0);
  if(fc<70) s+=0; else if(fc<90) s+=7; else if(fc<110) s+=13;
  else if(fc<150) s+=23; else if(fc<200) s+=36; else s+=46;
  const pas=parseInt(v.pas||0);
  if(pas<80) s+=63; else if(pas<100) s+=58; else if(pas<120) s+=47;
  else if(pas<140) s+=37; else if(pas<160) s+=26; else if(pas<200) s+=11; else s+=0;
  const cr=parseFloat(v.cr||0);
  if(cr<0.4) s+=2; else if(cr<0.8) s+=5; else if(cr<1.2) s+=8;
  else if(cr<1.6) s+=11; else if(cr<2.0) s+=14; else if(cr<4.0) s+=23; else s+=31;
  const k=parseInt(v.killip||1);
  s += [0,0,21,43,64][k];
  if(v.pcr) s+=43;
  if(v.st) s+=30;
  if(v.mn) s+=15;
  return s;
},
interp:function(s){
  if(s<=108) return {risco:"Baixo — < 1% mortalidade intra-hospitalar", acao:"Conservador — internar, observar", cor:"ok"};
  if(s<=140) return {risco:"Intermediário — 1–3%", acao:"Invasiva precoce (24-72h)", cor:"warn"};
  return {risco:"Alto — > 3%", acao:"Invasiva imediata (< 24h)", cor:"crit"};
}
},

{
id:"killip", nome:"Killip", sis:"cardio",
desc:"Classificação clínica de IC pós-IAM. Preditor de mortalidade.",
fields:[
{tipo:"select", id:"k", label:"Classe Killip",
  opts:[
    {val:1, label:"I — Sem sinais de IC"},
    {val:2, label:"II — Crepitações pulmonares / B3 / turgência jugular"},
    {val:3, label:"III — Edema agudo de pulmão"},
    {val:4, label:"IV — Choque cardiogênico"},
  ]},
],
calc:function(v){ return parseInt(v.k||1); },
interp:function(s){
  if(s===1) return {risco:"6% mortalidade em 30 dias", acao:"Tratamento padrão", cor:"ok"};
  if(s===2) return {risco:"17% mortalidade", acao:"Diuréticos, monitoração contínua", cor:"warn"};
  if(s===3) return {risco:"38% mortalidade", acao:"Diuréticos, vasodilatador, VNI, considerar UTI", cor:"crit"};
  return {risco:"81% mortalidade", acao:"UTI, vasopressor (NE), inotrópico (dobutamina), considerar suporte circulatório", cor:"crit"};
}
},

/* ============== TEP / TVP ============== */
{
id:"wells-tep", nome:"Wells — TEP (Tromboembolismo Pulmonar)", sis:"cardio",
desc:"Probabilidade clínica pré-teste para TEP. NÃO confundir com Wells-TVP (escala diferente, para trombose venosa profunda).",
fields:[
{tipo:"bool", id:"a", label:"Sinais clínicos de TVP", peso:3},
{tipo:"bool", id:"b", label:"TEP é o diagnóstico mais provável", peso:3},
{tipo:"bool", id:"c", label:"FC > 100 bpm", peso:1.5},
{tipo:"bool", id:"d", label:"Imobilização ≥ 3 dias / cirurgia em 4 sem", peso:1.5},
{tipo:"bool", id:"e", label:"TVP/TEP prévia", peso:1.5},
{tipo:"bool", id:"f", label:"Hemoptise", peso:1},
{tipo:"bool", id:"g", label:"Câncer ativo (tratamento ou paliação em 6 meses)", peso:1},
],
calc:function(v){
  let s=0;
  if(v.a) s+=3; if(v.b) s+=3;
  if(v.c) s+=1.5; if(v.d) s+=1.5; if(v.e) s+=1.5;
  if(v.f) s+=1; if(v.g) s+=1;
  return s;
},
interp:function(s){
  if(s<=4) return {risco:"TEP improvável", acao:"Solicitar D-dímero (ajustado por idade: ×10 ng/mL se >50a). Se neg, exclui. Se pos, angio-TC.", cor:"ok"};
  return {risco:"TEP provável", acao:"Solicitar angio-TC pulmonar direta (D-dímero NÃO indicado). Iniciar anticoagulação empírica se demora.", cor:"crit"};
}
},

{
id:"wells-tvp", nome:"Wells — TVP (Trombose Venosa Profunda)", sis:"cardio",
desc:"Probabilidade clínica pré-teste para TVP de MMII. NÃO confundir com Wells-TEP (escala diferente, para tromboembolismo pulmonar).",
fields:[
{tipo:"bool", id:"a", label:"Câncer ativo", peso:1},
{tipo:"bool", id:"b", label:"Paralisia/paresia/imobilização recente de MI", peso:1},
{tipo:"bool", id:"c", label:"Acamado > 3 dias / cirurgia maior em 12 sem", peso:1},
{tipo:"bool", id:"d", label:"Dor no trajeto venoso profundo", peso:1},
{tipo:"bool", id:"e", label:"Edema de toda a perna", peso:1},
{tipo:"bool", id:"f", label:"Perna com diferença > 3 cm vs contralateral (10 cm abaixo da tuberosidade tibial)", peso:1},
{tipo:"bool", id:"g", label:"Edema com cacifo na perna sintomática", peso:1},
{tipo:"bool", id:"h", label:"Veias colaterais superficiais (não varicosas)", peso:1},
{tipo:"bool", id:"i", label:"TVP prévia documentada", peso:1},
{tipo:"bool", id:"j", label:"Diagnóstico alternativo mais provável", peso:-2},
],
calc:function(v){
  let s=0;
  ["a","b","c","d","e","f","g","h","i"].forEach(k=>{ if(v[k]) s+=1; });
  if(v.j) s-=2;
  return s;
},
interp:function(s){
  if(s<=0) return {risco:"Baixa probabilidade (3%)", acao:"D-dímero. Se neg, exclui.", cor:"ok"};
  if(s<=2) return {risco:"Moderada (17%)", acao:"D-dímero alta sensibilidade ou USG Doppler", cor:"warn"};
  return {risco:"Alta (75%)", acao:"USG Doppler venoso direto", cor:"crit"};
}
},

{
id:"pesi", nome:"PESI simplificado (sPESI)", sis:"cardio",
desc:"Mortalidade em 30 dias após TEP confirmado. Sinaliza candidatos a manejo ambulatorial.",
fields:[
{tipo:"bool", id:"a", label:"Idade > 80 anos", peso:1},
{tipo:"bool", id:"b", label:"Câncer", peso:1},
{tipo:"bool", id:"c", label:"Doença cardiopulmonar crônica (IC, DPOC)", peso:1},
{tipo:"bool", id:"d", label:"FC ≥ 110 bpm", peso:1},
{tipo:"bool", id:"e", label:"PAS < 100 mmHg", peso:1},
{tipo:"bool", id:"f", label:"SpO₂ < 90%", peso:1},
],
calc:function(v){
  let s=0;
  ["a","b","c","d","e","f"].forEach(k=>{ if(v[k]) s+=1; });
  return s;
},
interp:function(s){
  if(s===0) return {risco:"Baixo (1,0% mortalidade 30d)", acao:"Considerar manejo ambulatorial / alta precoce com DOAC", cor:"ok"};
  return {risco:"Alto (10,9% mortalidade 30d)", acao:"Internação. Estratificar com biomarcadores (BNP/troponina) e ECO TT para disfunção VD.", cor:"crit"};
}
},

/* ============== SEPSE ============== */
{
id:"qsofa", nome:"qSOFA", sis:"infecto",
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

{
id:"sofa", nome:"SOFA", sis:"infecto",
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

/* ============== NEURO ============== */
{
id:"nihss", nome:"NIHSS", sis:"neuro",
desc:"Avaliação de gravidade no AVC isquêmico. Itens individuais com soma 0–42.",
fields:[
{tipo:"select", id:"i1a", label:"1a — Nível de consciência",
  opts:[{val:0,label:"Alerta"},{val:1,label:"Sonolento"},{val:2,label:"Estuporoso"},{val:3,label:"Comatoso"}]},
{tipo:"select", id:"i1b", label:"1b — Perguntas (mês, idade)",
  opts:[{val:0,label:"2 corretas"},{val:1,label:"1 correta"},{val:2,label:"Nenhuma"}]},
{tipo:"select", id:"i1c", label:"1c — Comandos (fechar olho, abrir mão)",
  opts:[{val:0,label:"2 corretos"},{val:1,label:"1 correto"},{val:2,label:"Nenhum"}]},
{tipo:"select", id:"i2", label:"2 — Olhar conjugado",
  opts:[{val:0,label:"Normal"},{val:1,label:"Paresia parcial"},{val:2,label:"Desvio fixo"}]},
{tipo:"select", id:"i3", label:"3 — Campo visual",
  opts:[{val:0,label:"Normal"},{val:1,label:"Hemianopsia parcial"},{val:2,label:"Hemianopsia completa"},{val:3,label:"Cegueira bilateral"}]},
{tipo:"select", id:"i4", label:"4 — Paresia facial",
  opts:[{val:0,label:"Normal"},{val:1,label:"Sutil"},{val:2,label:"Parcial"},{val:3,label:"Total uni ou bi"}]},
{tipo:"select", id:"i5a", label:"5a — Força MSD",
  opts:[{val:0,label:"Sem queda"},{val:1,label:"Queda < 10s"},{val:2,label:"Cai antes 10s"},{val:3,label:"Sem força contra gravidade"},{val:4,label:"Plégico"}]},
{tipo:"select", id:"i5b", label:"5b — Força MSE",
  opts:[{val:0,label:"Sem queda"},{val:1,label:"Queda < 10s"},{val:2,label:"Cai antes 10s"},{val:3,label:"Sem força contra gravidade"},{val:4,label:"Plégico"}]},
{tipo:"select", id:"i6a", label:"6a — Força MID",
  opts:[{val:0,label:"Sem queda"},{val:1,label:"Queda < 5s"},{val:2,label:"Cai antes 5s"},{val:3,label:"Sem força contra gravidade"},{val:4,label:"Plégico"}]},
{tipo:"select", id:"i6b", label:"6b — Força MIE",
  opts:[{val:0,label:"Sem queda"},{val:1,label:"Queda < 5s"},{val:2,label:"Cai antes 5s"},{val:3,label:"Sem força contra gravidade"},{val:4,label:"Plégico"}]},
{tipo:"select", id:"i7", label:"7 — Ataxia (índex-nariz/calcanhar-joelho)",
  opts:[{val:0,label:"Ausente"},{val:1,label:"Em 1 membro"},{val:2,label:"Em 2 ou mais"}]},
{tipo:"select", id:"i8", label:"8 — Sensibilidade",
  opts:[{val:0,label:"Normal"},{val:1,label:"Leve perda"},{val:2,label:"Perda grave/anestesia"}]},
{tipo:"select", id:"i9", label:"9 — Linguagem",
  opts:[{val:0,label:"Normal"},{val:1,label:"Afasia leve"},{val:2,label:"Afasia grave"},{val:3,label:"Mutismo / afasia global"}]},
{tipo:"select", id:"i10", label:"10 — Disartria",
  opts:[{val:0,label:"Normal"},{val:1,label:"Leve"},{val:2,label:"Grave / anártrico"}]},
{tipo:"select", id:"i11", label:"11 — Extinção / negligência",
  opts:[{val:0,label:"Sem"},{val:1,label:"Em 1 modalidade"},{val:2,label:"Em mais de 1"}]},
],
calc:function(v){
  let s=0;
  for(let k in v) s += parseInt(v[k]||0);
  return s;
},
interp:function(s){
  if(s===0) return {risco:"Sem déficit", acao:"Reavaliar — pode ser AIT", cor:"ok"};
  if(s<=4) return {risco:"AVC leve", acao:"Considerar trombólise IV se janela ≤ 4,5h e sem contraindicação (mesmo NIHSS baixo se déficit incapacitante)", cor:"warn"};
  if(s<=15) return {risco:"AVC moderado", acao:"Trombólise IV ≤ 4,5h. TC sem mismatch para trombectomia se oclusão de grande vaso e ≤ 24h.", cor:"crit"};
  if(s<=20) return {risco:"AVC moderado-grave", acao:"Trombólise + trombectomia (oclusão proximal)", cor:"crit"};
  return {risco:"AVC grave", acao:"Trombólise + trombectomia. Risco de transformação hemorrágica ↑.", cor:"crit"};
}
},

{
id:"abcd2", nome:"ABCD²", sis:"neuro",
desc:"Risco de AVC em 2 e 7 dias após AIT.",
fields:[
{tipo:"bool", id:"a", label:"Age — ≥ 60 anos", peso:1},
{tipo:"select", id:"b", label:"PA na admissão",
  opts:[{val:0,label:"< 140/90",peso:0},{val:1,label:"≥ 140/90",peso:1}]},
{tipo:"select", id:"c", label:"Clínica",
  opts:[{val:0,label:"Outra",peso:0},{val:1,label:"Disartria isolada",peso:1},{val:2,label:"Paresia unilateral",peso:2}]},
{tipo:"select", id:"d1", label:"Duração",
  opts:[{val:0,label:"< 10 min",peso:0},{val:1,label:"10–59 min",peso:1},{val:2,label:"≥ 60 min",peso:2}]},
{tipo:"bool", id:"d2", label:"DM", peso:1},
],
calc:function(v){
  let s=0;
  if(v.a) s+=1;
  s += parseInt(v.b||0);
  s += parseInt(v.c||0);
  s += parseInt(v.d1||0);
  if(v.d2) s+=1;
  return s;
},
interp:function(s){
  if(s<=3) return {risco:"Baixo (1% em 2 dias)", acao:"Investigação ambulatorial precoce (Holter, Doppler, ECO TE)", cor:"ok"};
  if(s<=5) return {risco:"Moderado (4,1%)", acao:"Internar — investigar etiologia + dupla antiagregação curto prazo", cor:"warn"};
  return {risco:"Alto (8,1%)", acao:"Internar imediatamente — UAVC, investigação completa", cor:"crit"};
}
},

{
id:"aspects", nome:"ASPECTS (TC)", sis:"neuro",
desc:"Avaliação de áreas isquêmicas precoces na TC sem contraste em AVC de circulação anterior (ACM). Pontuação 10 (normal) → 0 (infarto extenso). Cada uma das 10 regiões = 1 ponto, subtrair se hipodensa.",
fields:[
{tipo:"bool", id:"c", label:"Caudado hipodenso", peso:1},
{tipo:"bool", id:"l", label:"Lentiforme hipodenso", peso:1},
{tipo:"bool", id:"i", label:"Cápsula interna hipodensa", peso:1},
{tipo:"bool", id:"in", label:"Insular hipodensa", peso:1},
{tipo:"bool", id:"m1", label:"M1 (ACM anterior, infraganglionar) hipodensa", peso:1},
{tipo:"bool", id:"m2", label:"M2 (ACM lateral à ínsula) hipodensa", peso:1},
{tipo:"bool", id:"m3", label:"M3 (ACM posterior, infraganglionar) hipodensa", peso:1},
{tipo:"bool", id:"m4", label:"M4 (anterior, supraganglionar) hipodensa", peso:1},
{tipo:"bool", id:"m5", label:"M5 (lateral, supraganglionar) hipodensa", peso:1},
{tipo:"bool", id:"m6", label:"M6 (posterior, supraganglionar) hipodensa", peso:1},
],
calc:function(v){
  let s=10;
  ["c","l","i","in","m1","m2","m3","m4","m5","m6"].forEach(k=>{ if(v[k]) s-=1; });
  return s;
},
interp:function(s){
  if(s>=8) return {risco:"Núcleo isquêmico pequeno", acao:"Trombólise + trombectomia bem indicadas (≤ 6h ou ≤ 24h com mismatch)", cor:"ok"};
  if(s>=6) return {risco:"Núcleo intermediário", acao:"Trombectomia ainda benéfica em casos selecionados; ponderar riscos", cor:"warn"};
  return {risco:"Infarto extenso (> 1/3 ACM)", acao:"Trombólise/trombectomia geralmente contraindicadas — alto risco hemorrágico", cor:"crit"};
}
},

/* ============== HDA ============== */
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

/* ============== PANCREATITE ============== */
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

/* ============== PNEUMONIA ============== */
{
id:"curb65", nome:"CURB-65", sis:"resp",
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

/* ============== FARINGITE ============== */
{
id:"centor", nome:"Centor / McIsaac", sis:"resp",
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

/* ============== HEPATOLOGIA ============== */
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

/* ============== FUNÇÃO RENAL ============== */
{
id:"cg", nome:"Cockcroft-Gault", sis:"hidro",
desc:"Estimativa de clearance de creatinina. Útil para ajuste de doses.",
fields:[
{tipo:"num", id:"idade", label:"Idade", hint:"anos", unidade:"a"},
{tipo:"num", id:"peso", label:"Peso", hint:"kg", unidade:"kg"},
{tipo:"num", id:"cr", label:"Creatinina sérica", unidade:"mg/dL"},
{tipo:"select", id:"sex", label:"Sexo",
  opts:[{val:1,label:"Masculino"},{val:0.85,label:"Feminino"}]},
],
calc:function(v){
  const idade=parseFloat(v.idade||0);
  const peso=parseFloat(v.peso||0);
  const cr=parseFloat(v.cr||1);
  const sex=parseFloat(v.sex||1);
  if(cr===0||idade===0||peso===0) return 0;
  return Math.round(((140-idade)*peso*sex)/(72*cr));
},
interp:function(s){
  if(s>=90) return {risco:"Função renal normal", acao:"Doses padrão", cor:"ok"};
  if(s>=60) return {risco:"DRC estágio 2 — leve", acao:"Geralmente sem ajustes", cor:"ok"};
  if(s>=30) return {risco:"DRC estágio 3 — moderada", acao:"Ajustar várias drogas (DOACs, ATB, contraste)", cor:"warn"};
  if(s>=15) return {risco:"DRC estágio 4 — grave", acao:"Pré-diálise — múltiplos ajustes", cor:"crit"};
  return {risco:"DRC estágio 5 — falência", acao:"Diálise indicada", cor:"crit"};
}
},

{
id:"ckd-epi", nome:"CKD-EPI 2021 (sem raça)", sis:"hidro",
desc:"Taxa de filtração glomerular estimada. Padrão para estagiar DRC.",
fields:[
{tipo:"num", id:"cr", label:"Creatinina sérica", unidade:"mg/dL"},
{tipo:"num", id:"idade", label:"Idade", hint:"anos", unidade:"a"},
{tipo:"select", id:"sex", label:"Sexo",
  opts:[{val:"M",label:"Masculino"},{val:"F",label:"Feminino"}]},
],
calc:function(v){
  const cr=parseFloat(v.cr||1);
  const idade=parseFloat(v.idade||0);
  const sex=v.sex||"M";
  if(cr===0||idade===0) return 0;
  const k = sex==="F" ? 0.7 : 0.9;
  const alpha = sex==="F" ? -0.241 : -0.302;
  const sexFactor = sex==="F" ? 1.012 : 1;
  const minP = Math.pow(Math.min(cr/k,1), alpha);
  const maxP = Math.pow(Math.max(cr/k,1), -1.200);
  const tfg = 142 * minP * maxP * Math.pow(0.9938, idade) * sexFactor;
  return Math.round(tfg);
},
interp:function(s){
  if(s>=90) return {risco:"G1 — Normal", acao:"Doses padrão", cor:"ok"};
  if(s>=60) return {risco:"G2 — Leve", acao:"Doses padrão", cor:"ok"};
  if(s>=45) return {risco:"G3a — Leve a moderada", acao:"Ajustar DOACs, ATB", cor:"warn"};
  if(s>=30) return {risco:"G3b — Moderada a grave", acao:"Múltiplos ajustes; evitar AINEs, metformina", cor:"warn"};
  if(s>=15) return {risco:"G4 — Grave", acao:"Pré-diálise — nefrologista", cor:"crit"};
  return {risco:"G5 — Falência", acao:"Diálise indicada", cor:"crit"};
}
},

/* ============== ELETRÓLITOS ============== */
{
id:"corr-na", nome:"Correção de Na — Adrogué-Madias", sis:"hidro",
desc:"Variação esperada de Na sérico após 1 L de solução. Meta: ↑Na 6-8 mEq/L/24h (não exceder 10-12).",
fields:[
{tipo:"num", id:"naatual", label:"Na sérico atual", unidade:"mEq/L"},
{tipo:"num", id:"peso", label:"Peso", unidade:"kg"},
{tipo:"select", id:"sex", label:"Sexo / idade",
  opts:[
    {val:0.6,label:"Homem < 65a (0,6)"},
    {val:0.5,label:"Mulher / Homem ≥ 65a (0,5)"},
    {val:0.45,label:"Mulher ≥ 65a (0,45)"},
  ]},
{tipo:"select", id:"sol", label:"Solução escolhida",
  opts:[
    {val:513,label:"NaCl 3% (513 mEq/L)"},
    {val:154,label:"NaCl 0,9% (154 mEq/L)"},
    {val:77,label:"NaCl 0,45% (77 mEq/L)"},
    {val:0,label:"SG 5% (0 mEq/L)"},
  ]},
],
calc:function(v){
  const na=parseFloat(v.naatual||0);
  const peso=parseFloat(v.peso||0);
  const sex=parseFloat(v.sex||0.6);
  const sol=parseFloat(v.sol||0);
  if(peso===0) return 0;
  const act = peso*sex;
  const delta = (sol - na) / (act + 1);
  return Math.round(delta*10)/10;
},
interp:function(s){
  return {risco:`Δ Na = ${s} mEq/L por L de solução`, acao:"Calcular volume necessário para meta de 6-8 mEq/24h. NUNCA exceder 10 mEq/24h (risco de mielinólise pontina). Monitorar Na de 2/2h ou 4/4h na fase inicial.", cor:"info"};
}
},

{
id:"aniongap", nome:"Ânion Gap", sis:"hidro",
desc:"AG = Na − (Cl + HCO₃). Normal: 8–12 (sem K) ou 12–16 (com K). ↑ Ânion gap = acidose metabólica com gap.",
fields:[
{tipo:"num", id:"na", label:"Na", unidade:"mEq/L"},
{tipo:"num", id:"cl", label:"Cl", unidade:"mEq/L"},
{tipo:"num", id:"hco3", label:"HCO₃", unidade:"mEq/L"},
{tipo:"num", id:"alb", label:"Albumina (opcional para correção)", unidade:"g/dL"},
],
calc:function(v){
  const na=parseFloat(v.na||0);
  const cl=parseFloat(v.cl||0);
  const hco3=parseFloat(v.hco3||0);
  const alb=parseFloat(v.alb||4);
  let ag = na - (cl + hco3);
  if(alb && alb<4) ag = ag + 2.5*(4-alb);
  return Math.round(ag*10)/10;
},
interp:function(s){
  if(s<8) return {risco:"AG baixo (raro)", acao:"Considerar hipoalbuminemia, intoxicação por lítio/brometo, mieloma", cor:"info"};
  if(s<=12) return {risco:"AG normal", acao:"Se acidose: hiperclorêmica (diarreia, ATR, IRC)", cor:"ok"};
  if(s<=20) return {risco:"AG ↑ moderado", acao:"Investigar — MUDPILES/KULT (cetoacidose, lactato, IRC, intox)", cor:"warn"};
  return {risco:"AG ↑ muito alto", acao:"Provável intoxicação grave (metanol, etilenoglicol), CAD grave, ácidos exógenos", cor:"crit"};
}
},

{
id:"osm", nome:"Osmolaridade plasmática", sis:"hidro",
desc:"Osm = 2·Na + glicemia/18 + ureia/6 (mg/dL). Normal 285–295 mOsm/kg. Gap osm = Osm medida − Osm calculada (normal < 10).",
fields:[
{tipo:"num", id:"na", label:"Na", unidade:"mEq/L"},
{tipo:"num", id:"gli", label:"Glicemia", unidade:"mg/dL"},
{tipo:"num", id:"ur", label:"Ureia", unidade:"mg/dL"},
],
calc:function(v){
  const na=parseFloat(v.na||0);
  const gli=parseFloat(v.gli||0);
  const ur=parseFloat(v.ur||0);
  return Math.round(2*na + gli/18 + ur/6);
},
interp:function(s){
  if(s<285) return {risco:"Hiposmolar", acao:"Investigar hiponatremia hipotônica", cor:"warn"};
  if(s<=295) return {risco:"Normal", acao:"—", cor:"ok"};
  if(s<=320) return {risco:"Hiperosmolar leve-moderada", acao:"Pesquisar hiperglicemia, hipernatremia, ureia ↑", cor:"warn"};
  return {risco:"Hiperosmolar grave", acao:"EHH (osm > 320), intoxicações; risco de coma / convulsão", cor:"crit"};
}
},

/* ============== UTILITÁRIOS DE PRESCRIÇÃO ============== */
{
id:"ped-dose", nome:"Dose pediátrica", sis:"iot",
desc:"Calcula dose conforme peso. Útil para drogas com mg/kg.",
fields:[
{tipo:"num", id:"peso", label:"Peso da criança", unidade:"kg"},
{tipo:"num", id:"dosekg", label:"Dose por kg", hint:"mg/kg, mcg/kg, mL/kg etc", unidade:"/kg"},
{tipo:"num", id:"max", label:"Dose máxima (deixe 0 se sem limite)", unidade:""},
],
calc:function(v){
  const peso=parseFloat(v.peso||0);
  const dose=parseFloat(v.dosekg||0);
  const max=parseFloat(v.max||0);
  let total = peso*dose;
  if(max>0 && total>max) total = max;
  return Math.round(total*100)/100;
},
interp:function(s){
  return {risco:`Dose total: ${s}`, acao:"Confira diluição e velocidade de infusão; sempre prescrever em unidade explícita (mg, mcg, mL).", cor:"info"};
}
},

{
id:"gotas", nome:"Gotas/min", sis:"iot",
desc:"Converte volume e tempo em gotas/min ou microgotas/min.",
fields:[
{tipo:"num", id:"vol", label:"Volume total", unidade:"mL"},
{tipo:"num", id:"tempo", label:"Tempo de infusão", unidade:"h"},
{tipo:"select", id:"tipo", label:"Tipo de equipo",
  opts:[{val:20,label:"Gotas (1 mL = 20 gotas)"},{val:60,label:"Microgotas (1 mL = 60 microgotas)"}]},
],
calc:function(v){
  const vol=parseFloat(v.vol||0);
  const tempo=parseFloat(v.tempo||0);
  const tipo=parseFloat(v.tipo||20);
  if(tempo===0) return 0;
  return Math.round((vol*tipo)/(tempo*60));
},
interp:function(s){
  return {risco:`${s} gotas (ou microgotas) por minuto`, acao:"Verificar o tipo de equipo antes de prescrever a velocidade.", cor:"info"};
}
},

{
id:"vaso-bic", nome:"Infusão de vasoativa (BIC)", sis:"vaso",
desc:"Converte dose desejada (mcg/kg/min) em mL/h, dada a diluição.",
fields:[
{tipo:"num", id:"peso", label:"Peso", unidade:"kg"},
{tipo:"num", id:"dose", label:"Dose desejada", hint:"mcg/kg/min", unidade:"mcg/kg/min"},
{tipo:"num", id:"droga", label:"Massa da droga na bolsa", hint:"mg", unidade:"mg"},
{tipo:"num", id:"diluente", label:"Volume total da bolsa", unidade:"mL"},
],
calc:function(v){
  const peso=parseFloat(v.peso||0);
  const dose=parseFloat(v.dose||0);
  const droga=parseFloat(v.droga||0);
  const vol=parseFloat(v.diluente||0);
  if(droga===0||vol===0) return 0;
  const concMcgMl = (droga*1000)/vol;
  const mlh = (dose*peso*60)/concMcgMl;
  return Math.round(mlh*100)/100;
},
interp:function(s){
  return {risco:`${s} mL/h em bomba de infusão contínua`, acao:"Reavaliar concentração se mudou diluição ou usou outra droga. Use sempre via central para NE/adre em doses altas (>0,1 mcg/kg/min).", cor:"info"};
}
},

{
id:"mascc", nome:"MASCC — Neutropenia febril", sis:"infecto",
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
id:"ciwa", nome:"CIWA-Ar (abstinência alcoólica)", sis:"tox",
desc:"Avalia gravidade da abstinência. ≥ 10 = sintomática; ≥ 20 = grave.",
fields:[
{tipo:"select", id:"a", label:"Náusea/vômito",
  opts:[{val:0,label:"0 — ausente"},{val:2,label:"2 — náusea leve"},{val:4,label:"4 — náusea intermitente"},{val:7,label:"7 — vômitos constantes"}]},
{tipo:"select", id:"b", label:"Tremor",
  opts:[{val:0,label:"0 — sem"},{val:2,label:"2 — não visível, palpável"},{val:4,label:"4 — moderado c/ braços estendidos"},{val:7,label:"7 — grave mesmo s/ braços estendidos"}]},
{tipo:"select", id:"c", label:"Sudorese",
  opts:[{val:0,label:"0 — sem"},{val:2,label:"2 — palmar"},{val:4,label:"4 — gotas na fronte"},{val:7,label:"7 — encharcado"}]},
{tipo:"select", id:"d", label:"Ansiedade",
  opts:[{val:0,label:"0 — sem"},{val:2,label:"2 — leve"},{val:4,label:"4 — moderada"},{val:7,label:"7 — pânico agudo"}]},
{tipo:"select", id:"e", label:"Agitação",
  opts:[{val:0,label:"0 — normal"},{val:2,label:"2 — inquieto"},{val:4,label:"4 — moderada"},{val:7,label:"7 — andando, agitado"}]},
{tipo:"select", id:"f", label:"Distúrbios táteis",
  opts:[{val:0,label:"0 — sem"},{val:2,label:"2 — leves"},{val:4,label:"4 — moderados"},{val:7,label:"7 — alucinações"}]},
{tipo:"select", id:"g", label:"Distúrbios auditivos",
  opts:[{val:0,label:"0 — sem"},{val:2,label:"2 — leves"},{val:4,label:"4 — moderados"},{val:7,label:"7 — alucinações"}]},
{tipo:"select", id:"h", label:"Distúrbios visuais",
  opts:[{val:0,label:"0 — sem"},{val:2,label:"2 — leves"},{val:4,label:"4 — moderados"},{val:7,label:"7 — alucinações"}]},
{tipo:"select", id:"i", label:"Cefaleia",
  opts:[{val:0,label:"0 — sem"},{val:2,label:"2 — leve"},{val:4,label:"4 — moderada"},{val:7,label:"7 — muito grave"}]},
{tipo:"select", id:"j", label:"Orientação",
  opts:[{val:0,label:"0 — orientado, soma série"},{val:1,label:"1 — incerto na data"},{val:2,label:"2 — desorientado em data ≤ 2 dias"},{val:4,label:"4 — desorientado pessoa"}]},
],
calc:function(v){
  let s=0;
  ["a","b","c","d","e","f","g","h","i","j"].forEach(k=>{ s += parseInt(v[k]||0); });
  return s;
},
interp:function(s){
  if(s<10) return {risco:"Leve", acao:"Suporte; tiamina 300 mg/d; reavaliar em 1-2h", cor:"ok"};
  if(s<20) return {risco:"Moderada", acao:"Diazepam 10 mg VO 1/1h ou lorazepam 2 mg até CIWA < 10. Tiamina IM/IV.", cor:"warn"};
  return {risco:"Grave — risco de DT", acao:"Diazepam IV titulado, internar UTI se DT estabelecido; descartar trauma/sepse/encefalopatia hepática", cor:"crit"};
}
},

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
id:"imc", nome:"IMC — Índice de Massa Corporal", sis:"ubs",
desc:"Classificação de peso por IMC (WHO). Útil em UBS, prevenção, indicação cirurgia bariátrica.",
fields:[
{tipo:"num", id:"peso", label:"Peso (kg)", min:30, max:300, step:0.1},
{tipo:"num", id:"alt", label:"Altura (m)", min:0.5, max:2.5, step:0.01},
],
calc:function(v){
  const peso = parseFloat(v.peso||0);
  const alt = parseFloat(v.alt||0);
  if(!peso || !alt) return 0;
  return peso / (alt * alt);
},
interp:function(s){
  if(s<16) return {risco:"Magreza grave (<16)", acao:"Subnutrição severa. Avaliação clínica + nutricional + investigar causa.", cor:"crit"};
  if(s<17) return {risco:"Magreza moderada (16-17)", acao:"Subnutrição. Avaliação nutricional.", cor:"warn"};
  if(s<18.5) return {risco:"Magreza leve (17-18,5)", acao:"Baixo peso. Avaliar dieta e hábitos.", cor:"info"};
  if(s<25) return {risco:"Eutrófico (18,5-25)", acao:"Peso adequado. Manter estilo de vida saudável.", cor:"ok"};
  if(s<30) return {risco:"Sobrepeso (25-30)", acao:"Orientação dieta + atividade física. Risco CV aumentado.", cor:"info"};
  if(s<35) return {risco:"Obesidade grau I (30-35)", acao:"Tratamento médico. Considerar farmacoterapia (orlistat, liraglutide, semaglutide).", cor:"warn"};
  if(s<40) return {risco:"Obesidade grau II (35-40)", acao:"Risco alto. Indicação de bariátrica se comorbidade (DM, HAS, SAOS, dislipidemia).", cor:"warn"};
  return {risco:"Obesidade grau III / mórbida (≥40)", acao:"Indicação de bariátrica independente de comorbidade. Avaliação multidisciplinar.", cor:"crit"};
}
},

{
id:"framingham", nome:"Framingham — Risco CV em 10 anos", sis:"ubs",
desc:"Risco cardiovascular global (IAM/AVC fatal e não-fatal) em 10 anos. Adultos 30-74a sem doença CV prévia.",
fields:[
{tipo:"sel", id:"sexo", label:"Sexo", opcoes:[{v:"m",t:"Homem"},{v:"f",t:"Mulher"}]},
{tipo:"num", id:"idade", label:"Idade (anos)", min:30, max:74},
{tipo:"num", id:"col", label:"Colesterol total (mg/dL)", min:100, max:400},
{tipo:"num", id:"hdl", label:"HDL (mg/dL)", min:20, max:120},
{tipo:"num", id:"pas", label:"PAS (mmHg)", min:90, max:220},
{tipo:"bool", id:"trat", label:"Em tratamento anti-hipertensivo"},
{tipo:"bool", id:"fum", label:"Tabagista atual"},
{tipo:"bool", id:"dm", label:"Diabético"},
],
calc:function(v){
  // Simplificação do Framingham geral (D'Agostino 2008)
  // Retorna score numérico inteiro (pontos)
  const sexo = v.sexo || "m";
  const idade = parseInt(v.idade||0);
  const col = parseInt(v.col||0);
  const hdl = parseInt(v.hdl||0);
  const pas = parseInt(v.pas||0);
  const trat = v.trat ? 1 : 0;
  const fum = v.fum ? 1 : 0;
  const dm = v.dm ? 1 : 0;
  
  let pts = 0;
  if(sexo === "m"){
    // Idade
    if(idade>=70) pts += 11;
    else if(idade>=65) pts += 10;
    else if(idade>=60) pts += 8;
    else if(idade>=55) pts += 6;
    else if(idade>=50) pts += 4;
    else if(idade>=45) pts += 3;
    else if(idade>=40) pts += 2;
    else if(idade>=35) pts += 1;
    // CT
    if(col>=280) pts += 3;
    else if(col>=240) pts += 2;
    else if(col>=200) pts += 1;
    else if(col<160) pts -= 0;
    // HDL
    if(hdl>=60) pts -= 2;
    else if(hdl>=50) pts -= 1;
    else if(hdl<35) pts += 2;
    else if(hdl<45) pts += 1;
    // PAS
    const pasPts = pas>=160?(trat?5:3):pas>=140?(trat?4:2):pas>=130?(trat?3:1):pas>=120?(trat?2:0):0;
    pts += pasPts;
    // Fumo + DM
    if(fum) pts += 4;
    if(dm) pts += 3;
  } else {
    if(idade>=70) pts += 12;
    else if(idade>=65) pts += 11;
    else if(idade>=60) pts += 9;
    else if(idade>=55) pts += 7;
    else if(idade>=50) pts += 6;
    else if(idade>=45) pts += 4;
    else if(idade>=40) pts += 3;
    else if(idade>=35) pts += 2;
    if(col>=280) pts += 3;
    else if(col>=240) pts += 2;
    else if(col>=200) pts += 1;
    if(hdl>=60) pts -= 2;
    else if(hdl>=50) pts -= 1;
    else if(hdl<35) pts += 2;
    else if(hdl<45) pts += 1;
    const pasPts = pas>=160?(trat?6:4):pas>=140?(trat?5:3):pas>=130?(trat?4:2):pas>=120?(trat?3:1):0;
    pts += pasPts;
    if(fum) pts += 3;
    if(dm) pts += 4;
  }
  return pts;
},
interp:function(s){
  // Aproximação do % de risco em 10a
  let pct;
  if(s<=0) pct="<1%";
  else if(s<=5) pct="1-2%";
  else if(s<=9) pct="2-5%";
  else if(s<=12) pct="5-10%";
  else if(s<=14) pct="10-15%";
  else if(s<=16) pct="15-20%";
  else if(s<=18) pct="20-30%";
  else pct=">30%";
  
  if(s<=9) return {risco:`Baixo risco (${pct})`, acao:"Manter hábitos saudáveis. Reavaliar em 5 anos. SBC: estatina não rotineira; controlar PA + glicemia.", cor:"ok"};
  if(s<=14) return {risco:`Risco intermediário (${pct})`, acao:"SBC 2017: considerar estatina (LDL alvo <100). AAS apenas se outros fatores. PA <130/80 se DM. Otimizar estilo vida.", cor:"warn"};
  return {risco:`Alto risco (${pct})`, acao:"Estatina alta intensidade (LDL alvo <70 mg/dL). PA <130/80. AAS se sem contraindicação. Reavaliar anualmente.", cor:"crit"};
}
},

{
id:"rass", nome:"RASS — Sedação UTI", sis:"iot",
desc:"Richmond Agitation-Sedation Scale. Avaliação do nível de sedação/agitação em UTI. Alvo geralmente -2 a 0 (leve sedação a despertar).",
fields:[
{tipo:"sel", id:"r", label:"Nível observado", opcoes:[
{v:"4", t:"+4 — Combativo: violento, perigoso imediato à equipe"},
{v:"3", t:"+3 — Muito agitado: puxa/remove tubos, agressivo"},
{v:"2", t:"+2 — Agitado: movimentos frequentes não-propositais, briga com ventilador"},
{v:"1", t:"+1 — Inquieto: ansioso, mas movimentos não agressivos/vigorosos"},
{v:"0", t:"0 — Alerta e calmo"},
{v:"-1", t:"-1 — Sonolento: não totalmente alerta mas mantém abertura ocular >10s ao chamado"},
{v:"-2", t:"-2 — Sedação leve: abertura ocular breve (<10s) ao chamado"},
{v:"-3", t:"-3 — Sedação moderada: movimento ao chamado mas sem contato visual"},
{v:"-4", t:"-4 — Sedação profunda: sem resposta ao chamado, movimento ao estímulo físico"},
{v:"-5", t:"-5 — Não despertável: sem resposta ao chamado ou estímulo físico"},
]},
],
calc:function(v){ return parseInt(v.r||"0"); },
interp:function(s){
  if(s>=2) return {risco:"Agitação significativa", acao:"Avaliar dor (FENT/morfina), delirium (CAM-ICU), retirada (etanol, BZD). Considerar haloperidol/dexmedetomidina. Alvo: 0 a -2.", cor:"crit"};
  if(s===1) return {risco:"Inquietação leve", acao:"Avaliar conforto, dor, ansiedade. Tranquilizar. Pode estar adequado se em desmame.", cor:"warn"};
  if(s===0) return {risco:"Alerta e calmo (ideal)", acao:"Manter. Reavaliar a cada 4h.", cor:"ok"};
  if(s>=-2) return {risco:"Sedação leve (geralmente ideal)", acao:"Alvo na maioria dos pacientes em VM. Permite avaliação neurológica + interrupção diária da sedação.", cor:"ok"};
  if(s>=-3) return {risco:"Sedação moderada", acao:"Considerar reduzir sedação se possível — sedação profunda associada a delirium e maior tempo de VM.", cor:"warn"};
  return {risco:"Sedação profunda — excessiva", acao:"REDUZIR/SUSPENDER sedação se não houver indicação específica (HIC, SDRA com curare, hipotermia). Avaliar diariamente.", cor:"crit"};
}
},

{
id:"apache-simp", nome:"APACHE II — Simplificado", sis:"iot",
desc:"Escala simplificada de gravidade em UTI. Estimativa de mortalidade hospitalar. NOTE: APACHE II completo tem 12 variáveis fisiológicas — esta é versão didática.",
fields:[
{tipo:"num", id:"idade", label:"Idade (anos)", min:0, max:120},
{tipo:"num", id:"gcs", label:"Glasgow", min:3, max:15},
{tipo:"num", id:"pam", label:"PAM (mmHg)", min:30, max:200},
{tipo:"num", id:"fc", label:"FC (bpm)", min:30, max:200},
{tipo:"bool", id:"doencacron", label:"Doença crônica grave (cirrose, IC NYHA IV, DPOC severa, imunossupressão)"},
{tipo:"bool", id:"pos-op", label:"Pós-operatório de emergência"},
],
calc:function(v){
  const idade = parseInt(v.idade||0);
  const gcs = parseInt(v.gcs||15);
  const pam = parseInt(v.pam||80);
  const fc = parseInt(v.fc||80);
  
  let pts = 0;
  // Idade
  if(idade>=75) pts += 6;
  else if(idade>=65) pts += 5;
  else if(idade>=55) pts += 3;
  else if(idade>=45) pts += 2;
  // GCS (15 - GCS atual)
  pts += (15 - gcs);
  // PAM
  if(pam<50 || pam>=160) pts += 4;
  else if(pam<70 || pam>=130) pts += 2;
  // FC
  if(fc<40 || fc>=180) pts += 4;
  else if(fc<55 || fc>=140) pts += 3;
  else if(fc<70 || fc>=110) pts += 2;
  // Comorbidades
  if(v.doencacron) pts += 5;
  if(v["pos-op"]) pts += 2;
  return pts;
},
interp:function(s){
  let mort;
  if(s<=4) mort="<5%";
  else if(s<=9) mort="5-15%";
  else if(s<=14) mort="15-25%";
  else if(s<=19) mort="25-40%";
  else if(s<=24) mort="40-55%";
  else mort=">55%";
  
  if(s<=9) return {risco:`Baixa gravidade (mortalidade ~${mort})`, acao:"Cuidado de UTI padrão. Reavaliação periódica.", cor:"ok"};
  if(s<=19) return {risco:`Moderada (mortalidade ~${mort})`, acao:"Monitoração intensiva, otimização hemodinâmica. Discutir prognóstico com família.", cor:"warn"};
  return {risco:`Alta gravidade (mortalidade ~${mort})`, acao:"Cuidados máximos. Discussão de cuidados paliativos / limitação terapêutica conforme contexto familiar e diretivas.", cor:"crit"};
}
},

{
id:"audit-c", nome:"AUDIT-C — Rastreio Álcool", sis:"ubs",
desc:"Rastreio rápido de uso problemático de álcool em UBS. 3 perguntas (versão reduzida do AUDIT).",
fields:[
{tipo:"sel", id:"q1", label:"Com que frequência consome bebida alcoólica?", opcoes:[
{v:"0", t:"Nunca"},
{v:"1", t:"Mensal ou menos"},
{v:"2", t:"2-4 ×/mês"},
{v:"3", t:"2-3 ×/semana"},
{v:"4", t:"≥4 ×/semana"},
]},
{tipo:"sel", id:"q2", label:"Quantas doses num dia típico?", opcoes:[
{v:"0", t:"1-2"},
{v:"1", t:"3-4"},
{v:"2", t:"5-6"},
{v:"3", t:"7-9"},
{v:"4", t:"≥10"},
]},
{tipo:"sel", id:"q3", label:"Com que frequência consome ≥6 doses na mesma ocasião?", opcoes:[
{v:"0", t:"Nunca"},
{v:"1", t:"Menos que mensal"},
{v:"2", t:"Mensalmente"},
{v:"3", t:"Semanalmente"},
{v:"4", t:"Diário ou quase"},
]},
],
calc:function(v){
  return parseInt(v.q1||0) + parseInt(v.q2||0) + parseInt(v.q3||0);
},
interp:function(s){
  // Sexo-específicos: ≥4 H, ≥3 M (mas usando ≥4 como threshold conservador)
  if(s<3) return {risco:"Baixo risco (<3)", acao:"Sem critério para uso problemático. Reforçar moderação.", cor:"ok"};
  if(s<=4) return {risco:"Uso de risco (3-4 M, 3 H)", acao:"Aconselhamento breve. AUDIT completo recomendado. Acompanhar.", cor:"warn"};
  if(s<=7) return {risco:"Uso de risco aumentado (5-7)", acao:"Intervenção breve. Avaliar abuso/dependência. Considerar AUDIT completo. Acompanhamento.", cor:"warn"};
  return {risco:"Provável transtorno por uso de álcool (≥8)", acao:"Avaliação especializada (psicólogo/psiquiatra/CAPS-AD). Considerar abstinência supervisionada (sd. abstinência).", cor:"crit"};
}
},

{
id:"phq9", nome:"PHQ-9 — Rastreio Depressão", sis:"ubs",
desc:"Rastreio e monitoramento de depressão em adultos. Útil em UBS, ambulatório, ginecologia (pós-parto), oncologia.",
fields:[
{tipo:"sel", id:"q1", label:"Pouco interesse/prazer em fazer coisas?", opcoes:[
{v:"0", t:"Nenhum dia"},{v:"1", t:"Vários dias"},{v:"2", t:"Mais da metade dos dias"},{v:"3", t:"Quase todos os dias"}
]},
{tipo:"sel", id:"q2", label:"Triste, desanimado ou sem esperança?", opcoes:[
{v:"0", t:"Nenhum"},{v:"1", t:"Vários"},{v:"2", t:"Mais da metade"},{v:"3", t:"Quase todos"}
]},
{tipo:"sel", id:"q3", label:"Dificuldade para dormir / dormir demais?", opcoes:[
{v:"0", t:"Nenhum"},{v:"1", t:"Vários"},{v:"2", t:"Mais da metade"},{v:"3", t:"Quase todos"}
]},
{tipo:"sel", id:"q4", label:"Cansaço/falta de energia?", opcoes:[
{v:"0", t:"Nenhum"},{v:"1", t:"Vários"},{v:"2", t:"Mais da metade"},{v:"3", t:"Quase todos"}
]},
{tipo:"sel", id:"q5", label:"Apetite ruim ou comendo demais?", opcoes:[
{v:"0", t:"Nenhum"},{v:"1", t:"Vários"},{v:"2", t:"Mais da metade"},{v:"3", t:"Quase todos"}
]},
{tipo:"sel", id:"q6", label:"Sentindo-se mal consigo mesmo / fracasso?", opcoes:[
{v:"0", t:"Nenhum"},{v:"1", t:"Vários"},{v:"2", t:"Mais da metade"},{v:"3", t:"Quase todos"}
]},
{tipo:"sel", id:"q7", label:"Dificuldade para se concentrar?", opcoes:[
{v:"0", t:"Nenhum"},{v:"1", t:"Vários"},{v:"2", t:"Mais da metade"},{v:"3", t:"Quase todos"}
]},
{tipo:"sel", id:"q8", label:"Lentificação ou agitação observável?", opcoes:[
{v:"0", t:"Nenhum"},{v:"1", t:"Vários"},{v:"2", t:"Mais da metade"},{v:"3", t:"Quase todos"}
]},
{tipo:"sel", id:"q9", label:"Pensamentos de se machucar ou de morte?", opcoes:[
{v:"0", t:"Nenhum"},{v:"1", t:"Vários"},{v:"2", t:"Mais da metade"},{v:"3", t:"Quase todos"}
]},
],
calc:function(v){
  return ["q1","q2","q3","q4","q5","q6","q7","q8","q9"].reduce((s,k)=>s+parseInt(v[k]||0),0);
},
interp:function(s){
  // Q9 ≥1 = avaliar risco suicida SEMPRE
  if(s<5) return {risco:"Sem depressão (0-4)", acao:"Sem necessidade de tratamento. Reforço positivo.", cor:"ok"};
  if(s<10) return {risco:"Depressão leve (5-9)", acao:"Vigilância. Intervenção psicossocial. Reavaliar em 2-4 semanas. Atenção se Q9 ≥1.", cor:"info"};
  if(s<15) return {risco:"Depressão moderada (10-14)", acao:"Considerar tratamento (psicoterapia ou farmacoterapia — ISRS 1ª linha: sertralina, escitalopram). Reavaliar 2-4 sem.", cor:"warn"};
  if(s<20) return {risco:"Depressão moderada-grave (15-19)", acao:"Tratamento ativo: psicoterapia + ISRS. Considerar encaminhamento. Avaliar risco suicida (Q9).", cor:"warn"};
  return {risco:"Depressão grave (≥20)", acao:"Tratamento intensivo. Psiquiatra. Avaliar risco suicida URGENTE se Q9 ≥1.", cor:"crit"};
}
},

];

/* índice rápido por id */
const CALCS_BY_ID = {};
CALCS.forEach(c => CALCS_BY_ID[c.id] = c);
