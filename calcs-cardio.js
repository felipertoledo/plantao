/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — calcs/cardio.js
   11 calculadoras
   =========================================================== */

CALCS.push(
{
id:"chads-va", contexto:["pa","ubs"], nome:"CHA₂DS₂-VA", sis:"cardio",
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
{id:"geneva", contexto:["pa","ubs"], nome:"Geneva Score Revisado — TEP", sis:"cardio",
desc:"Alternativa ao Wells para probabilidade pré-teste de TEP. Vantagem: 100% objetivo (sem 'julgamento clínico'). Útil para padronização.",
fields:[
{tipo:"bool", id:"a", label:"Idade > 65 anos (+1)"},
{tipo:"bool", id:"b", label:"TVP ou TEP prévia (+3)"},
{tipo:"bool", id:"c", label:"Cirurgia ou fratura MMII em 1 mês (+2)"},
{tipo:"bool", id:"d", label:"Câncer ativo (+2)"},
{tipo:"bool", id:"e", label:"Dor unilateral em MI (+3)"},
{tipo:"bool", id:"f", label:"Hemoptise (+2)"},
{tipo:"select", id:"fc", label:"Frequência cardíaca", opts:[
{val:"0", label:"0 — < 75 bpm"},
{val:"3", label:"3 — 75-94 bpm"},
{val:"5", label:"5 — ≥ 95 bpm"},
]},
{tipo:"bool", id:"h", label:"Dor à palpação venosa profunda + edema unilateral (+4)"},
],
calc:function(v){
  let s = 0;
  if(v.a) s+=1; if(v.b) s+=3; if(v.c) s+=2; if(v.d) s+=2;
  if(v.e) s+=3; if(v.f) s+=2;
  s += parseInt(v.fc||0);
  if(v.h) s+=4;
  return s;
},
interp:function(s){
  if(s<=3) return {risco:`Geneva ${s} — Baixa probabilidade (~8%)`, acao:"D-dímero ajustado por idade. Se neg → exclui TEP. Considerar PERC se score 0-1.", cor:"ok"};
  if(s<=10) return {risco:`Geneva ${s} — Probabilidade intermediária (~28%)`, acao:"D-dímero. Se positivo → angio-TC pulmonar. Considerar anticoagulação empírica se delay >4h em alto risco.", cor:"warn"};
  return {risco:`Geneva ${s} — Alta probabilidade (~74%)`, acao:"Angio-TC pulmonar DIRETO (não usar D-dímero — não exclui). Iniciar anticoagulação empírica enquanto aguarda exame.", cor:"crit"};
}
},
{
id:"grace", contexto:["pa","ubs"], nome:"GRACE (simplificado)", sis:"cardio",
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
id:"hasbled", contexto:["pa","ubs"], nome:"HAS-BLED", sis:"cardio",
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
id:"heart", contexto:["pa","ubs"], nome:"HEART Score", sis:"cardio",
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
id:"killip", contexto:["pa","ubs"], nome:"Killip", sis:"cardio",
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
{id:"perc", contexto:["pa","ubs"], nome:"PERC — Critérios de Exclusão de TEP", sis:"cardio",
desc:"Em pacientes com BAIXA suspeita clínica de TEP (Wells/Geneva baixo), se TODOS os 8 critérios negativos → TEP excluído sem D-dímero. Útil para evitar testes adicionais.",
fields:[
{tipo:"bool", id:"a", label:"Idade ≥ 50 anos"},
{tipo:"bool", id:"b", label:"FC ≥ 100 bpm"},
{tipo:"bool", id:"c", label:"SpO2 < 95% em ar ambiente"},
{tipo:"bool", id:"d", label:"Edema unilateral de membro inferior"},
{tipo:"bool", id:"e", label:"Hemoptise"},
{tipo:"bool", id:"f", label:"Trauma recente ou cirurgia (4 semanas)"},
{tipo:"bool", id:"g", label:"História de TEP ou TVP prévia"},
{tipo:"bool", id:"h", label:"Uso de hormônio (estrogênio, anticoncepcional)"},
],
calc:function(v){
  return ["a","b","c","d","e","f","g","h"].reduce((s,k)=>s+(v[k]?1:0), 0);
},
interp:function(s){
  if(s===0) return {risco:"PERC NEGATIVO (todos critérios ausentes)", acao:"TEP EXCLUÍDO em paciente de baixa probabilidade pré-teste. Não solicitar D-dímero/angio-TC. Investigar outros diagnósticos.", cor:"ok"};
  return {risco:`PERC POSITIVO (${s}/8 critério${s>1?"s":""} presente${s>1?"s":""})`, acao:"PERC não exclui TEP. Prosseguir investigação: D-dímero ajustado idade (× 10 ng/mL se >50a). Se elevado → angio-TC pulmonar.", cor:"warn"};
}
},
{
id:"pesi", contexto:["pa","ubs"], nome:"PESI simplificado (sPESI)", sis:"cardio",
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
{
id:"timi", contexto:["pa","ubs"], nome:"TIMI Risk — SCA sem supra", sis:"cardio",
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
id:"wells-tep", contexto:["pa","ubs"], nome:"Wells — TEP (Tromboembolismo Pulmonar)", sis:"cardio",
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
id:"wells-tvp", contexto:["pa","ubs"], nome:"Wells — TVP (Trombose Venosa Profunda)", sis:"cardio",
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
);
