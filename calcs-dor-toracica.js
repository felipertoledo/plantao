/* ===========================================================
   VOVÔMINIC DOUTÔ — calcs/dor-toracica.js
   2 calculadoras de dor torácica
   ============================================================ */

CALCS.push(

{id:"classif-anginosa", contexto:["pa","ubs"], nome:"Classificação da Dor Torácica — Anginosa (Diamond-Forrester)", sis:"cardio",
desc:"Classifica a dor torácica conforme características clássicas em ANGINOSA TÍPICA, ATÍPICA ou NÃO-ANGINOSA. Pré-teste essencial para decisão de investigação. Critérios: (1) Dor/desconforto retroesternal de qualidade e duração típicas; (2) Provocada por esforço/estresse emocional; (3) Aliviada por repouso ou nitrato em <5 min. Todos 3 = típica; 2 = atípica; 0-1 = não-anginosa. Refinado pela probabilidade pré-teste por idade/sexo (CAD Consortium).",
fields:[
{tipo:"bool", id:"q1", label:"(1) Desconforto retroesternal de qualidade característica (aperto/peso/queimação/pressão) e duração típica (2-15 min)?"},
{tipo:"bool", id:"q2", label:"(2) Provocada por ESFORÇO físico ou estresse emocional?"},
{tipo:"bool", id:"q3", label:"(3) Aliviada por REPOUSO ou NITRATO em <5 min?"},
{tipo:"select", id:"idade", label:"Idade aproximada",
  opts:[{val:0,label:"<40 anos"},{val:1,label:"40-49 anos"},{val:2,label:"50-59 anos"},{val:3,label:"60-69 anos"},{val:4,label:"≥70 anos"}]},
{tipo:"select", id:"sexo", label:"Sexo",
  opts:[{val:0,label:"Masculino"},{val:1,label:"Feminino"}]},
{tipo:"bool", id:"diab", label:"Diabetes / DAC prévia / Múltiplos fatores de risco CV?"},
],
calc:function(v){
  let s = 0;
  if(v.q1) s++;
  if(v.q2) s++;
  if(v.q3) s++;
  return s;
},
interp:function(s,v){
  const idade = parseInt(v.idade||0);
  const sexFem = parseInt(v.sexo)===1;
  // Estimativa de probabilidade pré-teste (Diamond-Forrester adaptado / ESC 2019)
  let preteste = "";
  if(s===3){ // típica
    if(idade<=1) preteste = sexFem ? "~25-40%" : "~40-70%";
    else if(idade<=2) preteste = sexFem ? "~50-60%" : "~80-90%";
    else preteste = sexFem ? "~70-85%" : "~90-95%";
  } else if(s===2){ // atípica
    if(idade<=1) preteste = sexFem ? "~5-15%" : "~15-30%";
    else if(idade<=2) preteste = sexFem ? "~20-30%" : "~40-60%";
    else preteste = sexFem ? "~30-45%" : "~50-70%";
  } else { // não-anginosa
    if(idade<=1) preteste = sexFem ? "<5%" : "~5-10%";
    else if(idade<=2) preteste = sexFem ? "~10-15%" : "~20-30%";
    else preteste = sexFem ? "~15-25%" : "~25-40%";
  }
  const ajuste = v.diab ? " (⬆ por DM/DAC/RCV alto)" : "";
  if(s===3){
    return {risco:`ANGINOSA TÍPICA (3 critérios) — pré-teste ${preteste}${ajuste}`, acao:"⚠ Alta probabilidade de DAC. Se DOR ATUAL EM REPOUSO ou PROGRESSIVA = SCA — encaminhar PS imediato para ECG seriado + troponina. Se ESTÁVEL aos esforços = solicitar estratificação ambulatorial (TE, cintilografia, eco-stress, angio-TC) e cardio. Iniciar AAS+estatina+IECA+BB se DAC suspeita.", cor:"crit"};
  }
  if(s===2){
    return {risco:`ATÍPICA (2 critérios) — pré-teste ${preteste}${ajuste}`, acao:"Probabilidade intermediária. Investigação direcionada: ECG basal, lipidograma, glicemia, eco se sintomas. Considerar TE em pacientes com pré-teste intermediário. Ponderar diferenciais: DRGE, musculoesquelético, ansiedade, pericardite.", cor:"warn"};
  }
  return {risco:`NÃO-ANGINOSA (0-1 critérios) — pré-teste ${preteste}${ajuste}`, acao:"Baixa probabilidade de DAC. Investigar diferenciais: DRGE, musculoesquelético (síndrome de Tietze, costocondrite), ansiedade/pânico, dor neuropática, herpes-zoster pré-erupção, pleurite. Reavaliar se sintomas progredirem.", cor:"ok"};
}
},

{id:"indicacao-troponina", contexto:["pa","ubs"], nome:"Indicação de Troponina — Dor Torácica na UBS/PA", sis:"cardio",
desc:"Decisão clínica para solicitar troponina (e ECG seriado) em paciente com dor torácica. Troponina NÃO é exame de rotina ambulatorial em paciente assintomático ou com dor crônica reproduzível e estável. INDICADA em suspeita de SCA — todo paciente com red flags ou dor anginosa NOVA/em CRESCENDO/em REPOUSO precisa de ECG (não negociável) + troponina seriada (0h e 1-3h conforme protocolo hs-cTn).",
fields:[
{tipo:"bool", id:"anginosa", label:"Dor com características anginosas (típica ou atípica) NOVA, EM REPOUSO, ou EM CRESCENDO?", peso:3},
{tipo:"bool", id:"irradiacao", label:"Irradiação para braço E (especialmente), mandíbula, dorso?", peso:1},
{tipo:"bool", id:"sint_assoc", label:"Sintomas autonômicos: sudorese fria, náusea, dispneia, palidez, síncope?", peso:2},
{tipo:"bool", id:"rcv_alto", label:"Idade ≥45a (♂) ou ≥55a (♀) + ≥1 fator de risco CV (HAS, DM, dislipidemia, tabagismo, HX familiar precoce, DAC/DAP prévia)?", peso:2},
{tipo:"bool", id:"equiv_anginoso", label:"Equivalente anginoso (idoso/diabético/mulher): dispneia aos esforços nova, fadiga importante inexplicada, síncope?", peso:2},
{tipo:"bool", id:"hemodin", label:"Instabilidade hemodinâmica: PAS<90, taqui/bradicardia importante, dispneia em repouso, alteração consciência?", peso:5},
{tipo:"bool", id:"clara_nao_card", label:"Causa CLARAMENTE não-cardíaca: reproduzível à palpação MUSCULOESQUELÉTICA, herpes-zoster com vesículas, DRGE típico bem-conhecido, pleurite com atrito, dor crônica estável ano(s)?", peso:-3},
],
calc:function(v){
  let s = 0;
  if(v.anginosa) s += 3;
  if(v.irradiacao) s += 1;
  if(v.sint_assoc) s += 2;
  if(v.rcv_alto) s += 2;
  if(v.equiv_anginoso) s += 2;
  if(v.hemodin) s += 5;
  if(v.clara_nao_card) s -= 3;
  return s;
},
interp:function(s,v){
  if(v.hemodin){
    return {risco:"⚠ INSTABILIDADE HEMODINÂMICA — SCA grave / outras emergências (TEP, dissecção, EAP, tamponamento)", acao:"AMBULÂNCIA / TRANSFERÊNCIA PS imediata. NÃO PERDER TEMPO em UBS: ECG + acesso venoso + O2 se sat<94 + AAS 200 mg mastigado SE NÃO contraindicado + monitorização. Não esperar exame em UBS — referir transporte avançado.", cor:"crit"};
  }
  if(s>=5){
    return {risco:`Score ${s} — ALTO RISCO de SCA`, acao:"INDICADO ECG IMEDIATO + TROPONINA seriada (0h e 1-3h se hs-cTn / 0h, 3h, 6h se troponina convencional) + encaminhar PS / unidade com suporte. Se ECG com supra-ST = trombólise/ICP urgência. Iniciar terapia anti-isquêmica conforme protocolo SCA.", cor:"crit"};
  }
  if(s>=2){
    return {risco:`Score ${s} — Risco INTERMEDIÁRIO`, acao:"INDICADO ECG E TROPONINA seriada. Avaliar com ECG inicial — se normal ou inespecífico: encaminhar para unidade com troponina (PA/PS). Considerar HEART score / GRACE para estratificação adicional. Se sintoma resolvido e ECG/trop normais: estratificação ambulatorial pode ser opção (cardio).", cor:"warn"};
  }
  if(s>=0){
    return {risco:`Score ${s} — Risco BAIXO`, acao:"ECG é sempre BARATO e DEVE SER FEITO em qualquer dor torácica nova. Troponina geralmente NÃO indicada se quadro claramente baixo risco e ECG normal. Investigar diferenciais: DRGE, musculoesquelético, ansiedade, neuropático, zoster. Reavaliar se sintomas progredirem. Considerar HEART score para confirmar baixo risco.", cor:"ok"};
  }
  return {risco:`Score ${s} — Causa muito provavelmente NÃO-cardíaca`, acao:"Manejar conforme diferencial identificado (DRGE → IBP; musculoesquelético → AINE+repouso; ansiedade → manejo psicossocial). NÃO solicitar troponina em quadro claramente não-cardíaco. ECG pode ser feito para tranquilidade do paciente se houver dúvida residual.", cor:"ok"};
}
},

);
