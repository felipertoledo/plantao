/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — calcs/hemo-hidro.js
   9 calculadoras
   =========================================================== */

CALCS.push(
{
id:"aniongap", contexto:["pa","ubs"], nome:"Ânion Gap", sis:"hidro",
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
{id:"caprini", contexto:["pa","ubs"], nome:"Caprini — Risco de TEV em paciente cirúrgico", sis:"hemo",
desc:"Score para TROMBOEMBOLISMO VENOSO em pacientes CIRÚRGICOS. Estratifica risco e indica intensidade da profilaxia. Versão simplificada.",
fields:[
{tipo:"select", id:"idade", label:"Idade", opts:[
{val:"0", label:"0 — <41 anos"},
{val:"1", label:"1 — 41-60 anos"},
{val:"2", label:"2 — 61-74 anos"},
{val:"3", label:"3 — ≥75 anos"},
]},
{tipo:"bool", id:"a", label:"Cirurgia menor planejada (+1)"},
{tipo:"bool", id:"b", label:"IMC >25 (+1)"},
{tipo:"bool", id:"c", label:"Edema MMII / varizes (+1)"},
{tipo:"bool", id:"d", label:"Gestação ou puerpério (+1)"},
{tipo:"bool", id:"e", label:"História de aborto inexplicado/recorrente (+1)"},
{tipo:"bool", id:"f", label:"ACO ou TRH em uso (+1)"},
{tipo:"bool", id:"g", label:"Sepse / pneumonia (<1m) (+1)"},
{tipo:"bool", id:"h", label:"Função pulmonar anormal / DPOC (+1)"},
{tipo:"bool", id:"i", label:"IAM agudo (+1)"},
{tipo:"bool", id:"j", label:"ICC (<1m) (+1)"},
{tipo:"bool", id:"k", label:"Repouso no leito (paciente clínico) (+1)"},
{tipo:"bool", id:"l", label:"Cirurgia artroscópica (+2)"},
{tipo:"bool", id:"m", label:"Cirurgia laparoscópica >45 min (+2)"},
{tipo:"bool", id:"n", label:"Cirurgia aberta >45 min (+2)"},
{tipo:"bool", id:"o", label:"Malignidade ativa (+2)"},
{tipo:"bool", id:"p", label:"Confinamento ao leito >72h (+2)"},
{tipo:"bool", id:"q", label:"Imobilização (gesso) <1m (+2)"},
{tipo:"bool", id:"r", label:"Cateter venoso central (+2)"},
{tipo:"bool", id:"s", label:"TEV prévio (+3)"},
{tipo:"bool", id:"t", label:"História familiar de TEV (+3)"},
{tipo:"bool", id:"u", label:"Fator V Leiden / mutação protrombina / antifosfolípide / outras trombofilias (+3)"},
{tipo:"bool", id:"v", label:"AVC <1m (+5)"},
{tipo:"bool", id:"w", label:"Artroplastia eletiva (+5)"},
{tipo:"bool", id:"x", label:"Fratura quadril/pelve/perna (+5)"},
{tipo:"bool", id:"y", label:"Trauma raquimedular agudo <1m (+5)"},
],
calc:function(v){
  let s = parseInt(v.idade||0);
  ['a','b','c','d','e','f','g','h','i','j','k'].forEach(k => { if(v[k]) s+=1; });
  ['l','m','n','o','p','q','r'].forEach(k => { if(v[k]) s+=2; });
  ['s','t','u'].forEach(k => { if(v[k]) s+=3; });
  ['v','w','x','y'].forEach(k => { if(v[k]) s+=5; });
  return s;
},
interp:function(s){
  if(s===0) return {risco:`Caprini ${s} — RISCO MUITO BAIXO`, acao:"Deambulação precoce. Profilaxia farmacológica não indicada.", cor:"ok"};
  if(s<=2) return {risco:`Caprini ${s} — BAIXO RISCO`, acao:"Profilaxia MECÂNICA (meias compressão / CPI). Considerar farmacológica conforme contexto cirúrgico.", cor:"ok"};
  if(s<=4) return {risco:`Caprini ${s} — RISCO MODERADO`, acao:"Profilaxia FARMACOLÓGICA: enoxaparina 40 mg SC 1×/d OU HNF 5000 UI 8/8h. Considerar combinação mecânica + farmacológica.", cor:"warn"};
  return {risco:`Caprini ${s} — ALTO RISCO`, acao:"⚠ Profilaxia FARMACOLÓGICA + MECÂNICA combinada. Considerar PROLONGAR profilaxia até 4-5 sem pós-alta em cirurgia oncológica abdominal/pélvica ou artroplastia. Enoxaparina 40 mg/d (ou 30 mg 12/12h em alto risco).", cor:"crit"};
}
},
{
id:"cg", contexto:["pa","ubs"], nome:"Cockcroft-Gault", sis:"hidro",
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
id:"ckd-epi", contexto:["pa","ubs"], nome:"CKD-EPI 2021 (sem raça)", sis:"hidro",
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
{
id:"corr-na", contexto:["pa","ubs"], nome:"Correção de Na — Adrogué-Madias", sis:"hidro",
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
{id:"has-bled", contexto:["pa","ubs"], nome:"HAS-BLED — Risco de Sangramento em paciente em anticoagulação (FA)", sis:"hemo",
desc:"Avalia risco de sangramento maior em paciente com FA em anticoagulação. HAS-BLED ≥3 = alto risco — NÃO é razão para suspender anticoagulação, mas indica MONITORIZAÇÃO PRÓXIMA + correção de fatores reversíveis. Sempre comparar com CHA₂DS₂-VASc (risco trombótico).",
fields:[
{tipo:"bool", id:"h", label:"Hipertensão arterial NÃO controlada (PAS >160 mmHg) (+1)"},
{tipo:"bool", id:"a1", label:"Função renal alterada (cr >2,3 OU TFG <60 OU diálise) (+1)"},
{tipo:"bool", id:"a2", label:"Função hepática alterada (bilirrubina >2× OU TGO/TGP/FA >3×) (+1)"},
{tipo:"bool", id:"s", label:"AVC prévio (especialmente hemorrágico) (+1)"},
{tipo:"bool", id:"b", label:"Sangramento prévio ou predisposição (anemia significativa, sangramento ativo) (+1)"},
{tipo:"bool", id:"l", label:"Labilidade do INR (tempo no alvo terapêutico <60% em uso de warfarina) (+1)"},
{tipo:"bool", id:"e", label:"Idade >65 anos (+1)"},
{tipo:"bool", id:"d1", label:"Uso de drogas que aumentam sangramento (AAS, AINE, antiplaquetário, corticoide alto) (+1)"},
{tipo:"bool", id:"d2", label:"Uso de álcool (≥8 doses/sem) (+1)"},
],
calc:function(v){
  let s = 0;
  ['h','a1','a2','s','b','l','e','d1','d2'].forEach(k => { if(v[k]) s+=1; });
  return s;
},
interp:function(s){
  if(s<=2) return {risco:`HAS-BLED ${s} — Risco BAIXO-MODERADO de sangramento`, acao:"Anticoagulação geralmente segura. Manter monitorização habitual (INR mensal em warfarina; função renal a cada 6-12m em DOAC). Corrigir fatores reversíveis identificados.", cor:"ok"};
  return {risco:`HAS-BLED ${s} — ALTO RISCO de sangramento (≥3)`, acao:"⚠ NÃO É RAZÃO PARA SUSPENDER anticoagulação (a menos que CHA₂DS₂-VASc seja baixo). ⚠ Comparar com CHA₂DS₂-VASc — geralmente benefício de anticoagular > risco. ⚠ CORRIGIR fatores reversíveis: tratar HAS, suspender AAS/AINE se possível, reduzir álcool, ajustar varfarina para INR no alvo. Monitorização mais próxima. Considerar DOAC vs varfarina (DOAC tem menor risco AVCh).", cor:"warn"};
}
},
{id:"hit-4t", contexto:["pa","ubs"], nome:"HIT 4T Score — Trombocitopenia Induzida por Heparina", sis:"hemo",
desc:"Probabilidade pré-teste de HIT (trombocitopenia induzida por heparina, tipo II) em paciente sob uso de heparina + plaquetopenia. Guia investigação e troca de anticoagulante.",
fields:[
{tipo:"select", id:"throm", label:"Thrombocytopenia (queda)", opts:[
{val:"0", label:"0 — Queda <30% OU contagem <10k"},
{val:"1", label:"1 — Queda 30-50% OU contagem 10-19k"},
{val:"2", label:"2 — Queda >50% E contagem ≥20k (sem outra causa óbvia)"},
]},
{tipo:"select", id:"timing", label:"Timing (queda em relação ao início heparina)", opts:[
{val:"0", label:"0 — Queda <4 dias (sem exposição prévia recente)"},
{val:"1", label:"1 — Queda >10 dias OU início não claro"},
{val:"2", label:"2 — Queda 5-10 dias OU ≤1 dia após reexposição em últimos 30 dias"},
]},
{tipo:"select", id:"throms", label:"Thrombosis (trombose ou outra sequela)", opts:[
{val:"0", label:"0 — Nenhuma"},
{val:"1", label:"1 — Trombose progressiva/recorrente, lesão cutânea não-necrótica, suspeita não-confirmada"},
{val:"2", label:"2 — Nova trombose confirmada, necrose cutânea, reação aguda sistêmica pós-bolus IV de heparina"},
]},
{tipo:"select", id:"other", label:"oTher causes de trombocitopenia", opts:[
{val:"0", label:"0 — Outra causa DEFINIDA (sepse, drogas, MO)"},
{val:"1", label:"1 — Possível outra causa"},
{val:"2", label:"2 — Sem outra causa aparente"},
]},
],
calc:function(v){
  return ["throm","timing","throms","other"].reduce((s,k)=>s+parseInt(v[k]||0), 0);
},
interp:function(s){
  if(s<=3) return {risco:`Score ${s} — Baixa probabilidade (<5%)`, acao:"HIT improvável. Não suspender heparina rotineiramente. Investigar outras causas de plaquetopenia.", cor:"ok"};
  if(s<=5) return {risco:`Score ${s} — Probabilidade intermediária (10-30%)`, acao:"SUSPENDER heparina (HNF E HBPM) + iniciar anticoagulante alternativo: fondaparinux 7,5 mg SC/d OU argatroban OU bivalirudina. Solicitar PF4-anti-heparin antibody (ELISA). Confirmar com Serotonin Release Assay se ELISA+.", cor:"warn"};
  return {risco:`Score ${s} — Alta probabilidade (>50%)`, acao:"EMERGÊNCIA HEMATOLÓGICA. Suspender TODA heparina (incluindo flushes de acessos). Iniciar anticoagulante não-heparínico IMEDIATO (fondaparinux/argatroban). PF4 + Serotonin Release. NÃO USAR varfarina sem ponte (risco gangrena venosa). Hematologia.", cor:"crit"};
}
},
{
id:"osm", contexto:["pa","ubs"], nome:"Osmolaridade plasmática", sis:"hidro",
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
{id:"padua", contexto:["pa","ubs"], nome:"Padua — Risco de TEV em paciente clínico hospitalizado", sis:"hemo",
desc:"Predictive score para TROMBOEMBOLISMO VENOSO em pacientes CLÍNICOS hospitalizados (não-cirúrgicos). Indica profilaxia farmacológica. Padua ≥4 = ALTO risco — anticoagulação profilática.",
fields:[
{tipo:"bool", id:"a", label:"Câncer ativo (metastático, ou tratamento <6m) (+3)"},
{tipo:"bool", id:"b", label:"TEV prévio (excluir trombose venosa superficial) (+3)"},
{tipo:"bool", id:"c", label:"Mobilidade reduzida — repouso no leito ≥3 dias (+3)"},
{tipo:"bool", id:"d", label:"Trombofilia conhecida (deficiência AT, prot C/S, fator V Leiden, mutação protrombina, anticorpos antifosfolípide) (+3)"},
{tipo:"bool", id:"e", label:"Trauma ou cirurgia recente (≤1 mês) (+2)"},
{tipo:"bool", id:"f", label:"Idade ≥70 anos (+1)"},
{tipo:"bool", id:"g", label:"Insuficiência cardíaca e/ou respiratória (+1)"},
{tipo:"bool", id:"h", label:"IAM ou AVC agudo (+1)"},
{tipo:"bool", id:"i", label:"Infecção aguda e/ou doença reumatológica (+1)"},
{tipo:"bool", id:"j", label:"Obesidade (IMC ≥30) (+1)"},
{tipo:"bool", id:"k", label:"Tratamento hormonal em vigência (ACO, TRH) (+1)"},
],
calc:function(v){
  let s = 0;
  if(v.a) s+=3; if(v.b) s+=3; if(v.c) s+=3; if(v.d) s+=3;
  if(v.e) s+=2;
  if(v.f) s+=1; if(v.g) s+=1; if(v.h) s+=1; if(v.i) s+=1; if(v.j) s+=1; if(v.k) s+=1;
  return s;
},
interp:function(s){
  if(s<4) return {risco:`Padua ${s} — BAIXO RISCO de TEV`, acao:"Profilaxia farmacológica NÃO INDICADA rotineiramente. Profilaxia MECÂNICA (deambulação precoce, meias de compressão) em todos. Reavaliar diariamente.", cor:"ok"};
  return {risco:`Padua ${s} — ALTO RISCO de TEV (≥4)`, acao:"⚠ INDICAR profilaxia farmacológica: ENOXAPARINA 40 mg SC 1×/d OU HNF 5000 UI SC 8/8h. Avaliar contraindicações (sangramento ativo, plaquetopenia <50, IRC grave para enoxa). Em IRC grave: HNF é preferida. Reavaliar diariamente.", cor:"warn"};
}
},
);
