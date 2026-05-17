/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — calcs/outros.js
   16 calculadoras
   =========================================================== */

CALCS.push(
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
{id:"apgar", nome:"APGAR — Avaliação do Recém-Nascido", sis:"gest",
desc:"Vitalidade do RN. Avaliar 1' e 5' após nascimento (e 10' se 5'<7). NÃO determina se ressuscitar (decisão clínica imediata).",
fields:[
{tipo:"select", id:"fc", label:"Frequência cardíaca", opts:[
{val:"0", label:"0 — Ausente"},
{val:"1", label:"1 — < 100 bpm"},
{val:"2", label:"2 — ≥ 100 bpm"},
]},
{tipo:"select", id:"resp", label:"Esforço respiratório", opts:[
{val:"0", label:"0 — Ausente"},
{val:"1", label:"1 — Lento, irregular, fraco"},
{val:"2", label:"2 — Bom choro, vigoroso"},
]},
{tipo:"select", id:"tonus", label:"Tônus muscular", opts:[
{val:"0", label:"0 — Flácido"},
{val:"1", label:"1 — Alguma flexão das extremidades"},
{val:"2", label:"2 — Movimentos ativos"},
]},
{tipo:"select", id:"reflex", label:"Irritabilidade reflexa (à aspiração/estímulo)", opts:[
{val:"0", label:"0 — Sem resposta"},
{val:"1", label:"1 — Careta"},
{val:"2", label:"2 — Tosse, espirro, choro vigoroso"},
]},
{tipo:"select", id:"cor", label:"Cor", opts:[
{val:"0", label:"0 — Cianose central ou palidez"},
{val:"1", label:"1 — Acrocianose (corpo rosado, extremidades cianóticas)"},
{val:"2", label:"2 — Totalmente rosado"},
]},
],
calc:function(v){
  return ["fc","resp","tonus","reflex","cor"].reduce((s,k)=>s+parseInt(v[k]||0), 0);
},
interp:function(s){
  if(s>=7) return {risco:`APGAR ${s} — Vitalidade adequada`, acao:"Cuidados de rotina: secar, contato pele-a-pele, clampear cordão 1-3 min, amamentar.", cor:"ok"};
  if(s>=4) return {risco:`APGAR ${s} — Depressão moderada`, acao:"Ventilação com máscara + O2. Reavaliar 30s. Persistência → considerar IOT. Aquecimento. Não atrasar reanimação por APGAR.", cor:"warn"};
  return {risco:`APGAR ${s} — Depressão grave`, acao:"REANIMAÇÃO NEONATAL completa: VPP + compressões torácicas se FC <60 + adrenalina 0,01-0,03 mg/kg IV/IO se FC<60 após 30s VPP+compressões. Não atrasar por avaliar.", cor:"crit"};
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
{id:"cam-icu", nome:"CAM-ICU — Delirium em UTI", sis:"iot",
desc:"Confusion Assessment Method for ICU. Detecta delirium em paciente UTI (mesmo intubado). Aplicar 1×/turno. Requer RASS ≥ -3.",
fields:[
{tipo:"bool", id:"f1", label:"FEATURE 1 — Início agudo de alteração mental OU curso flutuante nas últimas 24h"},
{tipo:"bool", id:"f2", label:"FEATURE 2 — DESATENÇÃO: paciente erra ≥3 ao apertar mão ao ouvir letra 'A' em 'SAVEAHAART' (10 letras, aperta nos A)"},
{tipo:"bool", id:"f3", label:"FEATURE 3 — PENSAMENTO DESORGANIZADO: erra ≥1 de 4 perguntas (Pedra flutua? Peixe no mar? 1 kg pesa mais que 2 kg? Martelo para cortar madeira?) OU não segue comando 2 dedos"},
{tipo:"bool", id:"f4", label:"FEATURE 4 — ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA (RASS ≠ 0)"},
],
calc:function(v){
  // Codificação binária: F1, F2, F3, F4 → 1 bit cada
  let code = 0;
  if(v.f1) code |= 8;
  if(v.f2) code |= 4;
  if(v.f3) code |= 2;
  if(v.f4) code |= 1;
  return code;
},
interp:function(s){
  const f1 = !!(s & 8), f2 = !!(s & 4), f3 = !!(s & 2), f4 = !!(s & 1);
  // Delirium: F1 + F2 + (F3 OU F4)
  if(f1 && f2 && (f3 || f4)) {
    return {risco:"DELIRIUM PRESENTE (CAM-ICU+)", 
      acao:"Buscar causa subjacente: hipóxia, infecção, distúrbio metabólico, retirada (álcool, BZD), medicações (anticolinérgicos, opioides, BZD). Manejo não-farmacológico: mobilização precoce, sono, óculos/aparelho auditivo, orientação repetida. Evitar BZD (piora). Considerar haloperidol 1-2 mg IV 6/6h se hiperativo perigoso; ou dexmedetomidina se necessita sedação.", 
      cor:"crit"};
  }
  if(!f1 && !f2 && !f3 && !f4) return {risco:"CAM-ICU NEGATIVO", acao:"Sem delirium. Manter rastreamento 1×/turno.", cor:"ok"};
  return {risco:"CAM-ICU NEGATIVO (sem critérios suficientes)", acao:"Para diagnóstico de delirium: necessário F1 + F2 + (F3 ou F4). Continuar avaliação.", cor:"info"};
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
{id:"ciwa-ar", nome:"CIWA-Ar — Abstinência Alcoólica", sis:"psiq",
desc:"Clinical Institute Withdrawal Assessment — alcohol revised. Avalia gravidade da abstinência e guia dose de benzodiazepínico. Aplicar a cada 1-4h.",
fields:[
{tipo:"select", id:"nausea", label:"Náusea/vômito", opts:[
{val:"0", label:"0 — Sem náusea/vômito"},
{val:"1", label:"1 — Leve náusea, sem vômito"},
{val:"4", label:"4 — Náusea intermitente com ânsia"},
{val:"7", label:"7 — Náusea constante, vômitos"},
]},
{tipo:"select", id:"tremor", label:"Tremor (braços estendidos, dedos abertos)", opts:[
{val:"0", label:"0 — Sem tremor"},
{val:"1", label:"1 — Não-visível, sentido na ponta dos dedos"},
{val:"4", label:"4 — Moderado, com braços estendidos"},
{val:"7", label:"7 — Severo, mesmo sem braços estendidos"},
]},
{tipo:"select", id:"sud", label:"Sudorese paroxística", opts:[
{val:"0", label:"0 — Pele seca"},
{val:"1", label:"1 — Umidade palmar visível"},
{val:"4", label:"4 — Gotículas óbvias na testa"},
{val:"7", label:"7 — Sudorese profusa"},
]},
{tipo:"select", id:"ans", label:"Ansiedade", opts:[
{val:"0", label:"0 — Sem ansiedade"},
{val:"1", label:"1 — Levemente ansioso"},
{val:"4", label:"4 — Moderadamente ansioso"},
{val:"7", label:"7 — Pânico agudo, similar a reação esquizofrênica"},
]},
{tipo:"select", id:"agit", label:"Agitação", opts:[
{val:"0", label:"0 — Atividade normal"},
{val:"1", label:"1 — Inquietação leve"},
{val:"4", label:"4 — Moderadamente inquieto"},
{val:"7", label:"7 — Andando, debatendo-se"},
]},
{tipo:"select", id:"tac", label:"Distúrbios táteis", opts:[
{val:"0", label:"0 — Nenhum"},
{val:"1", label:"1 — Leve prurido/parestesia"},
{val:"4", label:"4 — Alucinações táteis moderadas"},
{val:"7", label:"7 — Alucinações táteis contínuas"},
]},
{tipo:"select", id:"aud", label:"Distúrbios auditivos", opts:[
{val:"0", label:"0 — Não presentes"},
{val:"1", label:"1 — Sensibilidade leve"},
{val:"4", label:"4 — Alucinações moderadas"},
{val:"7", label:"7 — Alucinações contínuas"},
]},
{tipo:"select", id:"vis", label:"Distúrbios visuais", opts:[
{val:"0", label:"0 — Não presentes"},
{val:"1", label:"1 — Sensibilidade leve à luz"},
{val:"4", label:"4 — Alucinações moderadas"},
{val:"7", label:"7 — Alucinações contínuas"},
]},
{tipo:"select", id:"cef", label:"Cefaleia", opts:[
{val:"0", label:"0 — Não presente"},
{val:"1", label:"1 — Muito leve"},
{val:"4", label:"4 — Moderadamente intensa"},
{val:"7", label:"7 — Extremamente intensa"},
]},
{tipo:"select", id:"orient", label:"Orientação/sensorium", opts:[
{val:"0", label:"0 — Orientado, soma série"},
{val:"1", label:"1 — Não consegue somar, incerto da data"},
{val:"2", label:"2 — Desorientado em data (<2 dias)"},
{val:"3", label:"3 — Desorientado em data (>2 dias)"},
{val:"4", label:"4 — Desorientado em lugar/pessoa"},
]},
],
calc:function(v){
  return ["nausea","tremor","sud","ans","agit","tac","aud","vis","cef","orient"]
    .reduce((acc,k) => acc + parseInt(v[k]||0), 0);
},
interp:function(s){
  if(s<8) return {risco:`${s} — Abstinência LEVE`, acao:"Sem necessidade de tratamento farmacológico. Vigilância clínica. Reavaliar 4-8h. Hidratação + tiamina 100 mg IV/IM/d (prevenir Wernicke).", cor:"ok"};
  if(s<=15) return {risco:`${s} — Abstinência MODERADA`, acao:"Iniciar BZD: Diazepam 10-20 mg VO 4/4h ou Lorazepam 2-4 mg VO/IV 4/4h. Tiamina 100 mg/d. Reavaliar CIWA cada 1-2h. Considerar internação.", cor:"warn"};
  return {risco:`${s} — Abstinência GRAVE (risco delirium tremens)`, acao:"INTERNAÇÃO. BZD IV: Diazepam 10-20 mg IV cada 5-15 min até calmar, ou Lorazepam 2-4 mg IV. UTI se: instabilidade, convulsão, alucinose intensa, delirium tremens estabelecido. Tiamina 500 mg IV 8/8h × 2-3 dias.", cor:"crit"};
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
{id:"mews", nome:"MEWS — Modified Early Warning Score", sis:"iot",
desc:"Score de alerta precoce em enfermaria. Identifica pacientes em deterioração. 5 parâmetros — FR, FC, PAS, temperatura, AVPU.",
fields:[
{tipo:"num", id:"pas", label:"PAS (mmHg)", min:40, max:250, step:1},
{tipo:"num", id:"fc", label:"FC (bpm)", min:20, max:250, step:1},
{tipo:"num", id:"fr", label:"FR (irpm)", min:5, max:50, step:1},
{tipo:"num", id:"temp", label:"Temperatura (°C)", min:32, max:42, step:0.1},
{tipo:"select", id:"avpu", label:"Nível de consciência (AVPU)", opts:[
{val:"0", label:"A — Alerta"},
{val:"1", label:"V — Responde à voz"},
{val:"2", label:"P — Responde à dor"},
{val:"3", label:"U — Não responde"},
]},
],
calc:function(v){
  const pas = parseInt(v.pas||120);
  const fc = parseInt(v.fc||80);
  const fr = parseInt(v.fr||16);
  const temp = parseFloat(v.temp||36.5);
  const avpu = parseInt(v.avpu||0);
  
  let pts = 0;
  // PAS
  if(pas<70) pts += 3;
  else if(pas<=80) pts += 2;
  else if(pas<=100) pts += 1;
  else if(pas>=200) pts += 2;
  // FC
  if(fc<40) pts += 2;
  else if(fc<=50) pts += 1;
  else if(fc>=130) pts += 3;
  else if(fc>=110) pts += 2;
  else if(fc>=101) pts += 1;
  // FR
  if(fr<9) pts += 2;
  else if(fr>=30) pts += 3;
  else if(fr>=21) pts += 2;
  else if(fr>=15) pts += 1;
  // Temp
  if(temp<35) pts += 2;
  else if(temp>=38.5) pts += 2;
  // AVPU
  pts += avpu;
  return pts;
},
interp:function(s){
  if(s<=2) return {risco:`MEWS ${s} — Baixo risco`, acao:"Reavaliação rotineira. Manter monitorização padrão.", cor:"ok"};
  if(s<=3) return {risco:`MEWS ${s} — Risco moderado`, acao:"Reavaliar em 1-2h. Comunicar enfermagem. Considerar avaliação médica.", cor:"info"};
  if(s<=4) return {risco:`MEWS ${s} — Alerta`, acao:"AVALIAÇÃO MÉDICA imediata. Vigilância intensiva. Considerar transferência para área mais monitorada.", cor:"warn"};
  return {risco:`MEWS ${s} — ALTO RISCO de deterioração`, acao:"ACIONAR time de resposta rápida / UTI. Risco substancial de óbito iminente. Reavaliação contínua.", cor:"crit"};
}
},
{id:"news2", nome:"NEWS2 — National Early Warning Score 2", sis:"iot",
desc:"Versão padrão NHS (UK 2017) para alerta precoce. Inclui SpO2 + ar/O2. 7 parâmetros, 0-20 pontos.",
fields:[
{tipo:"num", id:"fr", label:"FR (irpm)", min:5, max:50, step:1},
{tipo:"num", id:"spo2", label:"SpO2 (%)", min:50, max:100, step:1},
{tipo:"bool", id:"o2", label:"Em suplementação de O2 (não em ar ambiente)"},
{tipo:"num", id:"pas", label:"PAS (mmHg)", min:40, max:250, step:1},
{tipo:"num", id:"fc", label:"FC (bpm)", min:20, max:250, step:1},
{tipo:"select", id:"consc", label:"Consciência", opts:[
{val:"0", label:"Alerta"},{val:"3", label:"Confuso novo / V / P / U"}
]},
{tipo:"num", id:"temp", label:"Temperatura (°C)", min:32, max:42, step:0.1},
],
calc:function(v){
  const fr = parseInt(v.fr||16);
  const spo2 = parseInt(v.spo2||98);
  const pas = parseInt(v.pas||120);
  const fc = parseInt(v.fc||80);
  const temp = parseFloat(v.temp||36.5);
  
  let pts = 0;
  // FR
  if(fr<=8) pts += 3;
  else if(fr<=11) pts += 1;
  else if(fr>=25) pts += 3;
  else if(fr>=21) pts += 2;
  // SpO2 (escala 1 — padrão)
  if(spo2<=91) pts += 3;
  else if(spo2<=93) pts += 2;
  else if(spo2<=95) pts += 1;
  // Suplementação O2
  if(v.o2) pts += 2;
  // PAS
  if(pas<=90) pts += 3;
  else if(pas<=100) pts += 2;
  else if(pas<=110) pts += 1;
  else if(pas>=220) pts += 3;
  // FC
  if(fc<=40) pts += 3;
  else if(fc<=50) pts += 1;
  else if(fc>=131) pts += 3;
  else if(fc>=111) pts += 2;
  else if(fc>=91) pts += 1;
  // Consciência
  pts += parseInt(v.consc||0);
  // Temp
  if(temp<=35) pts += 3;
  else if(temp>=39.1) pts += 2;
  else if(temp>=38.1) pts += 1;
  else if(temp<=36) pts += 1;
  return pts;
},
interp:function(s){
  if(s===0) return {risco:`NEWS2 ${s} — Baixo risco`, acao:"Avaliação rotineira (12/12h em enfermaria).", cor:"ok"};
  if(s<=4) return {risco:`NEWS2 ${s} — Baixo risco`, acao:"Reavaliação cada 4-6h. Comunicar enfermagem. Avaliação médica se único parâmetro = 3 pontos.", cor:"info"};
  if(s<=6) return {risco:`NEWS2 ${s} — Risco médio`, acao:"Avaliação MÉDICA URGENTE (em até 1h). Monitorização cada 1h. Considerar transferência para área monitorizada.", cor:"warn"};
  return {risco:`NEWS2 ${s} — Risco alto`, acao:"EMERGÊNCIA. Acionar time de resposta rápida + médico sênior IMEDIATO. Monitorização contínua. Considerar UTI.", cor:"crit"};
}
},
{id:"ottawa", nome:"Ottawa Ankle/Foot Rules — Indicação de RX", sis:"ost",
desc:"Reduz solicitação desnecessária de RX em trauma de tornozelo/pé. Sensibilidade ~98% para fratura clinicamente significativa. Adulto ≥18a com trauma agudo (<10 dias).",
fields:[
{tipo:"bool", id:"a", label:"Dor no maléolo (lateral ou medial)"},
{tipo:"bool", id:"a1", label:"+ Sensibilidade óssea na borda posterior ou ponta do maléolo (6 cm distais) — lateral OU medial"},
{tipo:"bool", id:"a2", label:"+ Incapacidade de sustentar peso (4 passos) imediatamente E na consulta"},
{tipo:"bool", id:"b", label:"Dor no médio-pé"},
{tipo:"bool", id:"b1", label:"+ Sensibilidade óssea base do 5° metatarso"},
{tipo:"bool", id:"b2", label:"+ Sensibilidade óssea no navicular"},
{tipo:"bool", id:"b3", label:"+ Incapacidade de sustentar peso (4 passos) imediatamente E na consulta"},
],
calc:function(v){
  // RX tornozelo se: A + (A1 OU A2)
  // RX pé se: B + (B1 OU B2 OU B3)
  let pts = 0;
  if(v.a && (v.a1 || v.a2)) pts += 1;
  if(v.b && (v.b1 || v.b2 || v.b3)) pts += 2;
  return pts;
},
interp:function(s){
  if(s===0) return {risco:"RX NÃO indicado", acao:"Sem critérios Ottawa. Probabilidade de fratura clínica <2%. Manejo conservador: RICE (repouso, gelo, compressão, elevação), analgesia, retorno se piora. Reavaliar em 7 dias se persistência.", cor:"ok"};
  if(s===1) return {risco:"RX TORNOZELO indicado", acao:"Solicitar RX tornozelo AP + perfil + mortise. Avaliar maléolos, articulação tibiotalar.", cor:"warn"};
  if(s===2) return {risco:"RX PÉ indicado", acao:"Solicitar RX pé AP + perfil + oblíqua. Avaliar base do 5° MT, navicular, tarsais.", cor:"warn"};
  return {risco:"RX TORNOZELO + PÉ indicados", acao:"Trauma misto. Solicitar ambos exames.", cor:"warn"};
}
},
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
);
