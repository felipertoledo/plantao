/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — CALCULADORAS ADICIONAIS
   12 escalas: CIWA-Ar, CAM-ICU, NIHSS, MEWS, NEWS2, Glasgow,
   APGAR, MELD-Na, Child-Pugh, HIT 4T, Ottawa, PERC, Geneva
   =========================================================== */

const CALCS_EXTRA = [

/* ============== CIWA-Ar — Abstinência Alcoólica ============== */
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

/* ============== CAM-ICU — Delirium na UTI ============== */
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

/* ============== NIHSS — Stroke Scale Interativo ============== */
{id:"nihss", nome:"NIHSS — National Institutes of Health Stroke Scale", sis:"neuro",
desc:"Escala completa para gravidade de AVC isquêmico. 11 itens, total 0-42. Decisão de trombólise + monitoramento evolutivo.",
fields:[
{tipo:"select", id:"1a", label:"1a. Nível de consciência", opts:[
{val:"0", label:"0 — Alerta"},{val:"1", label:"1 — Sonolento (responde a estímulo verbal)"},{val:"2", label:"2 — Estuporoso (responde a estímulo doloroso)"},{val:"3", label:"3 — Coma (sem resposta ou reflexa)"}
]},
{tipo:"select", id:"1b", label:"1b. Perguntas (mês atual, idade)", opts:[
{val:"0", label:"0 — Ambas corretas"},{val:"1", label:"1 — 1 correta"},{val:"2", label:"2 — Nenhuma correta"}
]},
{tipo:"select", id:"1c", label:"1c. Comandos (abrir/fechar olhos, abrir/fechar mão não-parética)", opts:[
{val:"0", label:"0 — Ambos corretos"},{val:"1", label:"1 — 1 correto"},{val:"2", label:"2 — Nenhum correto"}
]},
{tipo:"select", id:"2", label:"2. Olhar conjugado", opts:[
{val:"0", label:"0 — Normal"},{val:"1", label:"1 — Paralisia parcial do olhar"},{val:"2", label:"2 — Desvio forçado/paralisia total"}
]},
{tipo:"select", id:"3", label:"3. Campos visuais", opts:[
{val:"0", label:"0 — Sem perda visual"},{val:"1", label:"1 — Hemianopsia parcial"},{val:"2", label:"2 — Hemianopsia completa"},{val:"3", label:"3 — Hemianopsia bilateral (cegueira)"}
]},
{tipo:"select", id:"4", label:"4. Paralisia facial", opts:[
{val:"0", label:"0 — Movimentos simétricos"},{val:"1", label:"1 — Paralisia menor (apagamento sulco)"},{val:"2", label:"2 — Paralisia parcial (face inferior)"},{val:"3", label:"3 — Paralisia completa unilateral/bilateral"}
]},
{tipo:"select", id:"5a", label:"5a. Motor MS esquerdo (extensão 10s)", opts:[
{val:"0", label:"0 — Sem queda"},{val:"1", label:"1 — Queda em <10s, não atinge cama"},{val:"2", label:"2 — Algum esforço contra gravidade"},{val:"3", label:"3 — Sem esforço contra gravidade"},{val:"4", label:"4 — Sem movimento"}
]},
{tipo:"select", id:"5b", label:"5b. Motor MS direito", opts:[
{val:"0", label:"0 — Sem queda"},{val:"1", label:"1"},{val:"2", label:"2"},{val:"3", label:"3"},{val:"4", label:"4 — Sem movimento"}
]},
{tipo:"select", id:"6a", label:"6a. Motor MI esquerdo (30° por 5s)", opts:[
{val:"0", label:"0 — Sem queda"},{val:"1", label:"1"},{val:"2", label:"2"},{val:"3", label:"3"},{val:"4", label:"4 — Sem movimento"}
]},
{tipo:"select", id:"6b", label:"6b. Motor MI direito", opts:[
{val:"0", label:"0 — Sem queda"},{val:"1", label:"1"},{val:"2", label:"2"},{val:"3", label:"3"},{val:"4", label:"4 — Sem movimento"}
]},
{tipo:"select", id:"7", label:"7. Ataxia de membros (dedo-nariz, calcanhar-joelho)", opts:[
{val:"0", label:"0 — Sem ataxia"},{val:"1", label:"1 — Em 1 membro"},{val:"2", label:"2 — Em 2 membros"}
]},
{tipo:"select", id:"8", label:"8. Sensibilidade", opts:[
{val:"0", label:"0 — Normal"},{val:"1", label:"1 — Perda leve a moderada"},{val:"2", label:"2 — Perda severa/total"}
]},
{tipo:"select", id:"9", label:"9. Linguagem (afasia)", opts:[
{val:"0", label:"0 — Normal"},{val:"1", label:"1 — Afasia leve a moderada"},{val:"2", label:"2 — Afasia grave"},{val:"3", label:"3 — Mutismo / afasia global"}
]},
{tipo:"select", id:"10", label:"10. Disartria", opts:[
{val:"0", label:"0 — Normal"},{val:"1", label:"1 — Leve a moderada (entendível)"},{val:"2", label:"2 — Grave (ininteligível)"}
]},
{tipo:"select", id:"11", label:"11. Extinção / negligência", opts:[
{val:"0", label:"0 — Sem"},{val:"1", label:"1 — Em uma modalidade"},{val:"2", label:"2 — Em ≥2 modalidades"}
]},
],
calc:function(v){
  return ["1a","1b","1c","2","3","4","5a","5b","6a","6b","7","8","9","10","11"]
    .reduce((acc,k) => acc + parseInt(v[k]||0), 0);
},
interp:function(s){
  if(s===0) return {risco:`NIHSS ${s} — Sem déficit`, acao:"Sem evidência de AVC clinicamente significativo. Investigar diagnóstico diferencial (TIA, migrânea, hipoglicemia).", cor:"ok"};
  if(s<=4) return {risco:`NIHSS ${s} — AVC LEVE`, acao:"AVC menor. Trombólise se elegível (sintomas incapacitantes, dentro de 4,5h, sem CI). Considerar TIA. AAS após 24h de exclusão de hemorragia.", cor:"info"};
  if(s<=15) return {risco:`NIHSS ${s} — AVC MODERADO`, acao:"INDICAÇÃO de trombólise IV (alteplase 0,9 mg/kg, máx 90 mg) se <4,5h + sem CI. Considerar trombectomia mecânica se grande artéria + <24h em centro especializado.", cor:"warn"};
  if(s<=20) return {risco:`NIHSS ${s} — AVC MODERADO-GRAVE`, acao:"Trombólise + considerar TROMBECTOMIA mecânica em janela estendida (até 24h em casos selecionados, DAWN/DEFUSE-3). UTI neurológica. Avaliar contraindicações.", cor:"crit"};
  return {risco:`NIHSS ${s} — AVC GRAVE`, acao:"AVC extenso. Considerar trombólise + trombectomia. Avaliar prognóstico funcional. UTI. Discussão familiar sobre extensão de cuidados.", cor:"crit"};
}
},

/* ============== MEWS — Modified Early Warning Score ============== */
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

/* ============== NEWS2 — National Early Warning Score 2 ============== */
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

/* ============== Glasgow Interativo ============== */
{id:"gcs", nome:"Glasgow Coma Scale (GCS) — Interativo", sis:"neuro",
desc:"Escala de coma de Glasgow. 3 componentes: ocular, verbal, motor. Total 3-15. Padrão de avaliação neurológica e prognóstico em TCE.",
fields:[
{tipo:"select", id:"e", label:"Abertura ocular (E)", opts:[
{val:"4", label:"4 — Espontânea"},
{val:"3", label:"3 — Ao comando verbal"},
{val:"2", label:"2 — À dor"},
{val:"1", label:"1 — Sem abertura"},
]},
{tipo:"select", id:"v", label:"Resposta verbal (V)", opts:[
{val:"5", label:"5 — Orientado"},
{val:"4", label:"4 — Confuso"},
{val:"3", label:"3 — Palavras inapropriadas"},
{val:"2", label:"2 — Sons incompreensíveis"},
{val:"1", label:"1 — Nenhuma resposta"},
{val:"-1", label:"T — Intubado (não avaliável)"},
]},
{tipo:"select", id:"m", label:"Resposta motora (M)", opts:[
{val:"6", label:"6 — Obedece a comandos"},
{val:"5", label:"5 — Localiza dor"},
{val:"4", label:"4 — Retirada à dor"},
{val:"3", label:"3 — Flexão anormal (decorticação)"},
{val:"2", label:"2 — Extensão anormal (descerebração)"},
{val:"1", label:"1 — Sem resposta motora"},
]},
],
calc:function(v){
  if (v.e == null || v.v == null || v.m == null) return NaN;
  const e = parseInt(v.e||0);
  const vS = parseInt(v.v||0);
  const m = parseInt(v.m||0);
  // Verbal -1 = intubado
  if(vS === -1) return e + m; // ignorar V (T)
  return e + vS + m;
},
interp:function(s){
  if (s == null || (typeof s === "number" && isNaN(s))) return {risco:"—", acao:"Preencha todos os campos acima.", cor:"info"};
  if(s>=13) return {risco:`GCS ${s} — TCE LEVE`, acao:"Manejo conforme Canadian CT Head Rule. Observação 4-6h se TC indicada e normal. Alta com orientações se baixo risco.", cor:"ok"};
  if(s>=9) return {risco:`GCS ${s} — TCE MODERADO`, acao:"TC crânio OBRIGATÓRIA. Internação para observação. Reavaliação neurológica 1/1h. Avaliar IOT se queda do GCS.", cor:"warn"};
  return {risco:`GCS ${s} — TCE GRAVE`, acao:"IOT IMEDIATA (proteção VA) com sequência rápida + Cardiomonitorização + Acesso venoso + TC + Neurocirurgia. UTI. Manter PaCO2 35-40, PAS ≥110, SpO2 ≥94%, evitar hipoglicemia.", cor:"crit"};
}
},

/* ============== APGAR ============== */
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

/* ============== MELD-Na ============== */
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

/* ============== Child-Pugh ============== */
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

/* ============== HIT 4T Score ============== */
{id:"hit-4t", nome:"HIT 4T Score — Trombocitopenia Induzida por Heparina", sis:"hemo",
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

/* ============== Ottawa Ankle Rules ============== */
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

/* ============== PERC — Pulmonary Embolism Rule-out Criteria ============== */
{id:"perc", nome:"PERC — Critérios de Exclusão de TEP", sis:"cardio",
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

/* ============== Geneva Score Revisado ============== */
{id:"geneva", nome:"Geneva Score Revisado — TEP", sis:"cardio",
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

];

/* Adicionar ao array CALCS principal */
CALCS_EXTRA.forEach(c => {
  CALCS.push(c);
  CALCS_BY_ID[c.id] = c;
});
