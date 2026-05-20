/* ===========================================================
   VOVÔMINIC DOUTÔ — meds/psiq-amp.js
   15 medicações — Saúde Mental ampliada
   Grupos: antipsicotico-atipico, antipsicotico-tipico, benzodiazepinico,
           estabilizador-humor, antidepressivo-triciclico, antiparkinsoniano-extrap
   =========================================================== */

MEDICACOES.push(

/* ============== ANTIPSICÓTICOS ATÍPICOS (6) ============== */

{id:"med-risperidona", contexto:["ubs","pa"], classe:"Antipsicótico atípico — antagonista 5-HT2A/D2", grupo:"antipsicotico-atipico",
nome:"Risperidona",
sin:["Risperdal","Zargus","Riss"],
formas:["Comp 1, 2, 3 mg","Sol oral 1 mg/mL","Constra (LAI) 25, 37,5, 50 mg IM 15/15d"],
resumo:"Atípico de 1ª linha em esquizofrenia/transtorno bipolar. Efeitos extrapiramidais dose-dependentes (>4 mg/d). Hiperprolactinemia comum. Via CEAF.",
dose_rapida:"Esquizofrenia: 2-6 mg/d VO | Mania: 2-6 mg/d | Agitação geriátrica: 0,25-1 mg/d",

doses:[
  {ind:"Esquizofrenia / transtorno esquizoafetivo", dose:"Iniciar 2 mg/d, titular para 4-6 mg/d em 2-3 dias", obs:"Dose ideal 4-6 mg/d. >6 mg/d = ↑ EPS sem ganho terapêutico. Dose única ou 12/12h."},
  {ind:"Mania aguda no transtorno bipolar I", dose:"2-6 mg/d VO", obs:"Combinado com estabilizador (lítio, valproato). Reduzir/suspender em manutenção."},
  {ind:"Agitação na demência (uso curto, P4!)", dose:"0,25-0,5 mg 1-2x/d VO, titular cautelosa", obs:"⚠ Mortalidade cardiovascular ↑ em idosos com demência. Máx 2 mg/d. Reavaliar 4-6 sem para suspender."},
  {ind:"TEA / TOD em crianças/adolescentes (irritabilidade)", dose:"0,25-0,5 mg/d, titular até 1-2,5 mg/d conforme peso", obs:"NEUROPEDIATRIA/PSIQ INFANTIL. Monitor peso e metabólico."},
  {ind:"Esquizofrenia — Constra (LAI)", dose:"25-50 mg IM 15/15 dias", obs:"Iniciar com VO 2-4 sem antes. Cobrir transição 3 sem (depósito demora a atingir nível)."},
],

ajustes:{
  irc:"IRC moderada/grave: iniciar 0,5 mg 2x/d, titular lentamente. ClCr <30: máximo 2-4 mg/d.",
  iht:"Iniciar 0,5 mg 2x/d.",
  idoso:"DOSE BAIXA: 0,25-0,5 mg 1-2x/d. Risco cardiovascular em demência.",
  gestante:"Categoria C. Risco de sintomas extrapiramidais/abstinência neonatal no 3º trimestre. Usar se necessário.",
  aleita:"Pouco excretada — geralmente compatível (monitorar bebê).",
  ped:"Aprovada >5 anos para TEA. Doses baseadas em peso.",
},

mecanismo:"Antagonismo 5-HT2A > D2 (perfil atípico — menos EPS). Antagonismo α1 (hipotensão), H1 (sedação). Hiperprolactinemia importante por bloqueio D2 tuberoinfundibular.",

interacoes:[
  {droga:"Carbamazepina, fenitoína, rifampicina (indutores CYP3A)", efeito:"↓ risperidona — pode necessitar dose maior."},
  {droga:"Fluoxetina, paroxetina (inibidores CYP2D6)", efeito:"↑ risperidona — reduzir 50%."},
  {droga:"Anti-hipertensivos", efeito:"Hipotensão somativa, especialmente α-bloq."},
  {droga:"Levodopa", efeito:"Antagonismo — risperidona piora Parkinson."},
  {droga:"QT-prolongadores", efeito:"Cautela; risperidona prolonga QT modesto."},
],

efeitos:[
  {tipo:"comum", item:"Sedação, sonolência, hipotensão ortostática, ganho de peso (moderado), hiperprolactinemia (galactorreia, amenorreia, ginecomastia, disfunção sexual), constipação, tonteira."},
  {tipo:"sério", item:"EFEITOS EXTRAPIRAMIDAIS dose-dependentes (distonia, parkinsonismo, acatisia, discinesia tardia), SÍNDROME NEUROLÉPTICA MALIGNA (rara), QT longo, hipotensão grave, eventos cerebrovasculares em idoso demente."},
  {tipo:"metabólico", item:"Ganho de peso, ↑ glicemia, ↑ lipídeos (mas MENOR que olanzapina/quetiapina)."},
],

alertas:[
  {nivel:"crit",txt:"<strong>IDOSO COM DEMÊNCIA:</strong> ↑ mortalidade cardiovascular. Box warning FDA. Usar dose mínima, tempo mínimo, monitorar."},
  {nivel:"warn",txt:"Hiperprolactinemia é frequente: questionar galactorreia/amenorreia/disfunção sexual. Considera trocar para aripiprazol se sintomática."},
  {nivel:"warn",txt:"Monitorização metabólica: peso, circunferência abdominal, glicemia, lipidograma — basal e a cada 3-6 meses."},
  {nivel:"info",txt:"Inserida no CEAF — solicitar via Sec Estadual de Saúde com PCDT. Risperidona é o atípico mais acessível."},
],

remume:"CEAF (PCDT Esquizofrenia / Transtorno Bipolar). Não está no CBAF.",
preparo:"VO em qualquer horário (jejum ou alimentado). Sol oral útil em casos com dificuldade de adesão.",
monitor:"Peso, CA, PA, glicemia, lipidograma, prolactina (se sintomas), ECG (se cardiopatia), avaliação EPS (escala AIMS).",
diretriz:"MS — PCDT Esquizofrenia (2013/atualização). PCDT Transtorno Afetivo Bipolar. NICE CG178 (esquizofrenia). APA Guidelines.",
fluxo:null,
calcs:[],
},

{id:"med-olanzapina", contexto:["ubs","pa"], classe:"Antipsicótico atípico", grupo:"antipsicotico-atipico",
nome:"Olanzapina",
sin:["Zyprexa","Zotreal","Lanzap"],
formas:["Comp 2,5, 5, 10 mg","Comp orodispersível 5, 10 mg","Pó liofilizado IM 10 mg (agitação aguda)"],
resumo:"Atípico potente. ALTÍSSIMO ganho de peso e ↑ metabólico — pior perfil metabólico entre atípicos. Útil em esquizofrenia, mania, depressão psicótica. Via CEAF.",
dose_rapida:"Esquizofrenia/mania: 5-20 mg/d VO 1x/d (à noite) | Agitação IM: 10 mg",

doses:[
  {ind:"Esquizofrenia", dose:"5-10 mg/d iniciar, manutenção 10-20 mg/d VO 1x/d à noite", obs:"Tomada noturna pela sedação. Resposta em 2-4 sem."},
  {ind:"Mania aguda — bipolar I", dose:"10-15 mg/d, máx 20 mg/d", obs:"Mono OU combinado com lítio/valproato. Reavaliar em manutenção pelo perfil metabólico."},
  {ind:"Depressão bipolar — olanzapina + fluoxetina (Symbyax)", dose:"6/25 a 12/50 mg/d", obs:"Combinação com fluoxetina é aprovada FDA para depressão bipolar."},
  {ind:"Agitação aguda — IM (PA/psiq)", dose:"10 mg IM, pode repetir 5-10 mg em 2h se necessário (máx 30 mg/d)", obs:"Início 15-45 min. NÃO combinar com BZD parenteral (depressão respiratória)."},
  {ind:"Náusea quimiotrópica refratária / hiporexia oncológica", dose:"2,5-5 mg/d à noite", obs:"Uso off-label crescente em oncologia. Em palitivos: estimulante apetite e antiemético."},
],

ajustes:{
  irc:"Sem ajuste — eliminação hepática.",
  iht:"Cautela em insuf hepática grave. Iniciar 5 mg/d.",
  idoso:"Iniciar 2,5-5 mg/d. ↑ mortalidade em demência.",
  gestante:"Categoria C. Cautela.",
  aleita:"Pequena quantidade no leite — geralmente compatível com monitoramento.",
  ped:"Aprovada >13 anos (esquizofrenia, mania). Cautela pelo perfil metabólico em jovens.",
},

mecanismo:"Antagonismo D2/5-HT2A + atividade em múltiplos receptores (H1 — sedação e ganho de peso; M1 — efeitos anticolinérgicos; α1).",

interacoes:[
  {droga:"Tabagismo / carbamazepina", efeito:"↓↓ olanzapina (induzem CYP1A2) — pode precisar dose maior."},
  {droga:"Fluvoxamina", efeito:"↑↑ olanzapina (inibe CYP1A2) — reduzir."},
  {droga:"Diazepam parenteral", efeito:"NÃO combinar com olanzapina IM (depressão respiratória)."},
  {droga:"Anti-hipertensivos", efeito:"Hipotensão somativa."},
],

efeitos:[
  {tipo:"comum", item:"SEDAÇÃO importante, GANHO DE PESO substancial (>4 kg em 6 meses comum), hipotensão ortostática, constipação, boca seca, tonteira."},
  {tipo:"metabólico", item:"⚠ ALTÍSSIMO risco: ganho de peso, DM2 induzido, dislipidemia, síndrome metabólica. Pior atípico nesse quesito."},
  {tipo:"sério", item:"NMS (raro), QT longo, hepatotoxicidade, leucopenia, eventos cerebrovasculares em demente, hiperglicemia/cetoacidose nova."},
],

alertas:[
  {nivel:"crit",txt:"<strong>PERFIL METABÓLICO RUIM:</strong> peso ↑, glicemia ↑, lipídios ↑. Monitorar agressivamente. Considerar outras opções em paciente já metabólico."},
  {nivel:"crit",txt:"<strong>FUMANTE:</strong> tabagismo INDUZ metabolismo — paciente que para de fumar pode ter ↑↑↑ olanzapina (intoxicação). Ajustar dose."},
  {nivel:"warn",txt:"NÃO administrar olanzapina IM concomitante com BZD parenteral — risco depressão respiratória e morte."},
  {nivel:"info",txt:"Útil em paciente com agitação E sintomas negativos. Sedação noturna é vantagem em alguns casos."},
],

remume:"CEAF (PCDT Esquizofrenia). Não está no CBAF. Genéricos disponíveis a custo moderado.",
preparo:"VO única dose noturna preferida. Orodispersível útil em paciente que esconde comprimido. IM apenas em emergência.",
monitor:"Peso e CA (mensal nos 6 primeiros meses), glicemia/HbA1c, lipidograma — basal e a cada 3-6 meses. ECG se cardiopatia.",
diretriz:"MS — PCDT Esquizofrenia. PCDT Bipolar. APA Guidelines.",
fluxo:null,
calcs:[],
},

{id:"med-quetiapina", contexto:["ubs","pa"], classe:"Antipsicótico atípico", grupo:"antipsicotico-atipico",
nome:"Quetiapina",
sin:["Seroquel","Quetros","Astiapin"],
formas:["Comp 25, 50, 100, 200, 300 mg","XR (libração prolongada) 50, 150, 200, 300, 400 mg"],
resumo:"Atípico sedativo. Múltiplas indicações: esquizofrenia, bipolar (mania E depressão), depressão refratária (potencialização). Sedação dose-dependente. CEAF.",
dose_rapida:"Esquizofrenia: 400-800 mg/d | Mania: 400-800 | Depressão bipolar: 300 mg | Insônia (P4): 25-50 mg",

doses:[
  {ind:"Esquizofrenia", dose:"Iniciar 100 mg/d, titular para 400-800 mg/d em 4-7 dias, dividido 2x/d (IR) ou 1x/d (XR)", obs:"Dose terapêutica geralmente >400 mg/d."},
  {ind:"Mania aguda — bipolar", dose:"Iniciar 100 mg/d, titular para 400-800 mg/d", obs:"Resposta em 1-2 sem."},
  {ind:"Depressão bipolar", dose:"300 mg/d (300-600 mg/d)", obs:"Única monoterapia FDA-aprovada em depressão bipolar."},
  {ind:"Potencialização em depressão refratária", dose:"150-300 mg/d", obs:"Adjuvante a antidepressivo. ANTES de ECT/lítio em alguns casos."},
  {ind:"Insônia (USO OFF-LABEL — atenção P4!)", dose:"25-100 mg à noite", obs:"⚠ Uso disseminado mas EVIDÊNCIA FRACA e perfil de risco questionável. Evitar como 'sonífero' a longo prazo. Reservar a pacientes com transtorno psiquiátrico de base."},
],

ajustes:{
  irc:"Sem ajuste rotineiro — eliminação hepática.",
  iht:"Reduzir: iniciar 25 mg/d, titular lentamente.",
  idoso:"Iniciar 25-50 mg/d, titular 25-50 mg a cada 2-3 dias. Risco em demência.",
  gestante:"Categoria C. Cautela.",
  aleita:"Pequena quantidade — geralmente compatível com monitoramento.",
  ped:"Aprovada >10 anos (mania) e >13 (esquizofrenia).",
},

mecanismo:"Antagonismo D2/5-HT2A. Forte antagonismo H1 (sedação) e α1 (hipotensão). Metabólito ativo norquetiapina inibe transportador noradrenalina (efeito antidepressivo).",

interacoes:[
  {droga:"Indutores CYP3A4 (carbamazepina, fenitoína, rifampicina)", efeito:"↓↓ quetiapina — aumentar dose 4-5x."},
  {droga:"Inibidores CYP3A4 (cetoconazol, claritromicina, ritonavir)", efeito:"↑↑ quetiapina — reduzir 80%."},
  {droga:"Levodopa", efeito:"Antagonismo (mas quetiapina é melhor opção que outros antipsicóticos em Parkinson + psicose)."},
  {droga:"Anti-hipertensivos, álcool", efeito:"Hipotensão somativa, sedação."},
],

efeitos:[
  {tipo:"comum", item:"SEDAÇÃO (efeito principal — útil ou problema dependendo do objetivo), hipotensão ortostática, tonteira, boca seca, constipação, ganho de peso (moderado, <olanzapina), aumento de apetite."},
  {tipo:"sério", item:"NMS, QT longo (>800 mg/d), hipotireoidismo (raro), discinesia tardia, eventos CV em idoso demente, hepatite."},
  {tipo:"metabólico", item:"Risco intermediário — entre risperidona e olanzapina. Monitorar."},
],

alertas:[
  {nivel:"warn",txt:"Quetiapina como 'sonífero' (25-50 mg) é uso DISSEMINADO mas com EVIDÊNCIA FRACA e efeitos adversos reais (metabólicos, EPS raros). P4: questionar."},
  {nivel:"warn",txt:"SEDAÇÃO marcante na 1ª semana — orientar paciente, evitar dirigir, tomar à noite."},
  {nivel:"warn",txt:"Único atípico relativamente SEGURO em paciente com Parkinson e psicose (junto com clozapina). EVITAR outros."},
  {nivel:"info",txt:"Quetiapina XR permite dose única diária — melhor adesão."},
],

remume:"CEAF (PCDT Esquizofrenia, Bipolar). Genéricos disponíveis. NÃO está no CBAF.",
preparo:"VO. XR pela manhã ou noite (dose única); IR dividido 2x/d.",
monitor:"Peso, CA, glicemia, lipidograma. ECG em alta dose ou cardiopata. TSH (se sintomas).",
diretriz:"MS — PCDTs Esquizofrenia, Bipolar. APA, NICE.",
fluxo:null,
calcs:[],
},

{id:"med-aripiprazol", contexto:["ubs","pa"], classe:"Antipsicótico atípico — agonista parcial D2", grupo:"antipsicotico-atipico",
nome:"Aripiprazol",
sin:["Abilify","Aristab","Razapina"],
formas:["Comp 10, 15, 20, 30 mg","Sol oral 1 mg/mL","Maintena (LAI) 300, 400 mg IM mensal"],
resumo:"AGONISTA PARCIAL D2 — perfil único: menos EPS, menos hiperprolactinemia, neutro metabólico. Pode causar ATIVAÇÃO (insônia, acatisia). Esquizofrenia, bipolar, potencialização depressão. CEAF.",
dose_rapida:"Esquizofrenia: 10-30 mg/d | Bipolar: 15-30 mg/d | Adjuvante depressão: 2-15 mg/d",

doses:[
  {ind:"Esquizofrenia", dose:"10-15 mg/d, titular 15-30 mg/d", obs:"Dose única diária. Dose máxima 30 mg/d."},
  {ind:"Mania aguda — bipolar I", dose:"15-30 mg/d VO", obs:"Mono ou combinado."},
  {ind:"Manutenção bipolar", dose:"15-30 mg/d", obs:"Reduzir após estabilização."},
  {ind:"Potencialização em depressão refratária (TRD)", dose:"2-15 mg/d", obs:"Adjuvante a antidepressivo. Iniciar 2-5 mg, titular conforme resposta. Evidência boa."},
  {ind:"TEA / irritabilidade em criança (>6a)", dose:"2-10 mg/d", obs:"NEUROPEDIATRIA. Iniciar baixo, titular lentamente."},
  {ind:"Maintena LAI", dose:"400 mg IM mensal", obs:"Iniciar VO 2 sem antes. Estabilizar VO antes de LAI."},
],

ajustes:{
  irc:"Sem ajuste.",
  iht:"Sem ajuste rotineiro. Cautela.",
  idoso:"Iniciar 2-5 mg/d. Risco em demência.",
  gestante:"Categoria C.",
  aleita:"Pequena quantidade — compatível com cautela.",
  ped:"Aprovado >6 anos (TEA) e >13 (esquizofrenia/bipolar).",
},

mecanismo:"AGONISTA PARCIAL D2 (estabilizador dopaminérgico — bloqueia quando há excesso, estimula quando há deficiência). Agonista parcial 5-HT1A, antagonista 5-HT2A.",

interacoes:[
  {droga:"Inibidores CYP3A4 (cetoconazol, claritromicina)", efeito:"↑ aripiprazol — reduzir 50%."},
  {droga:"Inibidores CYP2D6 (fluoxetina, paroxetina, bupropiona)", efeito:"↑ aripiprazol — reduzir 50%."},
  {droga:"Indutores CYP3A4 (carbamazepina, rifampicina)", efeito:"↓ aripiprazol — dobrar dose."},
],

efeitos:[
  {tipo:"comum", item:"Acatisia (10-25% — perigosa, pode confundir com piora), ativação, insônia, ansiedade, cefaleia, náusea, agitação."},
  {tipo:"sério", item:"NMS, discinesia tardia (menos comum), pensamentos suicidas em jovens (FDA box), TRANSTORNOS DE CONTROLE DE IMPULSO (jogo patológico, hipersexualidade, comer compulsivo — paradoxal, descrito), QT longo (modesto)."},
  {tipo:"metabólico", item:"Quase neutro — pequeno ganho de peso, sem ↑ glicemia significativo. MELHOR perfil metabólico entre atípicos."},
],

alertas:[
  {nivel:"crit",txt:"<strong>ACATISIA:</strong> efeito adverso comum e desconfortável — sensação de inquietude motora interna, pode confundir com piora da doença ou ansiedade. Reconhecer e abordar (propranolol 10-20 mg 3x/d, BZD, redução de dose)."},
  {nivel:"warn",txt:"<strong>TRANSTORNOS DE CONTROLE DE IMPULSO:</strong> aripiprazol está associado a casos de jogo patológico, hipersexualidade, gastos compulsivos. Pesquisar ativamente. Suspender se ocorrer."},
  {nivel:"warn",txt:"ATIVANTE (não sedativo) — preferir tomada matinal. Pode causar insônia."},
  {nivel:"info",txt:"<strong>Melhor escolha</strong> em paciente com hiperprolactinemia (de outros antipsicóticos) ou síndrome metabólica."},
],

remume:"CEAF (PCDT Esquizofrenia, Bipolar, TEA). NÃO está no CBAF. Genéricos disponíveis.",
preparo:"VO uma vez ao dia, idealmente pela manhã (efeito ativante).",
monitor:"Peso e metabólico (menos crítico que outros atípicos), acatisia (questionar a cada visita inicial), controle de impulso.",
diretriz:"MS — PCDTs Esquizofrenia, Bipolar, TEA. APA, NICE.",
fluxo:null,
calcs:[],
},

{id:"med-clozapina", contexto:["ubs"], classe:"Antipsicótico atípico — esquizofrenia refratária", grupo:"antipsicotico-atipico",
nome:"Clozapina",
sin:["Leponex","Cloztia"],
formas:["Comp 25, 100 mg"],
resumo:"PADRÃO-OURO em esquizofrenia REFRATÁRIA (após ≥2 antipsicóticos sem resposta). ÚNICO antipsicótico com evidência clara para REDUÇÃO DE SUICÍDIO. RISCO DE AGRANULOCITOSE — monitorização hematológica obrigatória. CEAF com PCDT específico.",
dose_rapida:"Iniciar 12,5 mg/d, titular MUITO lentamente para 300-600 mg/d em 4-6 semanas",

doses:[
  {ind:"Esquizofrenia refratária", dose:"Dia 1: 12,5 mg | Dia 2: 25 mg | Aumentar 25-50 mg/dia até 300 mg em 2-3 sem | Manutenção 300-600 mg/d", obs:"Dose terapêutica 300-600 mg/d, dividida 2-3x/d. Nunca aumentar rápido — risco de convulsão, hipotensão, miocardite."},
  {ind:"Redução de risco suicida (psicose)", dose:"Como acima", obs:"ÚNICO antipsicótico com evidência consistente de redução de suicídio na esquizofrenia."},
  {ind:"Psicose em Parkinson", dose:"12,5-100 mg/d (doses muito menores que esquizofrenia)", obs:"Junto com quetiapina, único antipsicótico relativamente seguro em Parkinson."},
],

ajustes:{
  irc:"Cautela em IRC grave.",
  iht:"Cautela.",
  idoso:"Doses MUITO menores. Risco de hipotensão e quedas.",
  gestante:"Categoria B. Cautela; abstinência neonatal.",
  aleita:"Excretada — geralmente CONTRAINDICADA na lactação.",
  ped:"Aprovação restrita a casos refratários sob especialista.",
},

mecanismo:"Multiação: D2 (fraco — daí poucos EPS), D4, 5-HT2A, H1, α1, M (anti-colinérgico). Mecanismo único que sustenta sua eficácia em refratários.",

interacoes:[
  {droga:"Carbamazepina, ciprofloxacino, fluvoxamina", efeito:"⚠ Carbamazepina aumenta risco AGRANULOCITOSE — NÃO combinar. Outros afetam metabolismo."},
  {droga:"BZD parenteral", efeito:"⚠ Depressão respiratória / cardiocirculatória — NÃO combinar via parenteral."},
  {droga:"Tabagismo", efeito:"↓ clozapina (CYP1A2) — cessar tabagismo pode causar intoxicação por clozapina. AJUSTAR dose."},
  {droga:"Anti-hipertensivos", efeito:"Hipotensão somativa, especialmente no início."},
],

efeitos:[
  {tipo:"comum", item:"Sedação, sialorreia (90% — bizarra na clozapina), hipotensão ortostática, taquicardia, constipação importante (até íleo paralítico), enurese, ganho de peso."},
  {tipo:"crítico_hematológico", item:"⚠ AGRANULOCITOSE (1%) — fatal se não detectada. Monitorização semanal de hemograma OBRIGATÓRIA nos primeiros 6 meses, depois mensal."},
  {tipo:"sério", item:"MIOCARDITE (1ª-2ª semana — pesquisar dispneia, dor torácica, febre, troponina), CARDIOMIOPATIA, convulsão (dose-dependente >600 mg/d), CETOACIDOSE diabética nova, NMS, íleo paralítico, embolia pulmonar."},
],

alertas:[
  {nivel:"crit",txt:"<strong>HEMOGRAMA SEMANAL nos primeiros 6 MESES:</strong> Se neutrófilos <1500/mm³: investigar. <1000: suspender imediatamente. <500: emergência (agranulocitose). Após 6 meses: mensal."},
  {nivel:"crit",txt:"<strong>MIOCARDITE</strong> aguda nas primeiras 2-4 semanas: dispneia, dor torácica, taquicardia, febre, mal-estar — INVESTIGAR troponina e ECG, suspender. Mortalidade alta se não reconhecida."},
  {nivel:"crit",txt:"INTERROMPEU >48h: NÃO retomar dose anterior — recomeçar titulação lenta do zero (risco de hipotensão grave, convulsão)."},
  {nivel:"warn",txt:"<strong>CESSOU TABAGISMO:</strong> reduzir clozapina 30-50% nas primeiras semanas — risco intoxicação por queda da indução do CYP1A2."},
  {nivel:"warn",txt:"Constipação severa pode evoluir para ÍLEO — orientar dieta, hidratação, laxante se necessário. Em queixa: investigar."},
],

remume:"CEAF (PCDT Esquizofrenia — específico para refratários, com registro de hemograma). NÃO é prescrita na APS isoladamente — articular com psiquiatria. Mas pode ser dispensada e administrada no território.",
preparo:"VO. Dose noturna inicial pela sedação. Aumentos graduais.",
monitor:"<strong>HEMOGRAMA</strong> semanal × 6 meses, depois mensal. ECG basal e periódico. Peso, glicemia, lipídeos. Troponina/ECG se suspeita de miocardite. Função intestinal.",
diretriz:"MS — PCDT Esquizofrenia (clozapina em refratários). APA Guidelines. NICE.",
fluxo:null,
calcs:[],
},

{id:"med-paliperidona", contexto:["ubs"], classe:"Antipsicótico atípico — metabólito da risperidona", grupo:"antipsicotico-atipico",
nome:"Paliperidona",
sin:["Invega","Invega Sustenna","Invega Trinza","Invega Hafyera"],
formas:["Comp ER 1.5, 3, 6, 9 mg","LAI Sustenna (mensal) 39, 78, 117, 156, 234 mg IM","LAI Trinza (trimestral) 175, 263, 350, 525 mg IM","LAI Hafyera (semestral) 700, 1000 mg IM"],
resumo:"9-hidroxi-risperidona (metabólito ativo). Vantagem: FORMULAÇÕES INJETÁVEIS DE LONGA AÇÃO (mensal, trimestral, semestral) — adesão em esquizofrenia. Perfil semelhante à risperidona.",
dose_rapida:"VO: 3-12 mg/d | LAI mensal: 156 mg IM | LAI trimestral: pré-tratamento mensal × 4m, depois 350 mg trimestral",

doses:[
  {ind:"Esquizofrenia — VO", dose:"6 mg/d (3-12 mg/d) ER 1x/d", obs:"Não precisa titulação lenta — VO já com formulação de liberação."},
  {ind:"Transtorno esquizoafetivo", dose:"3-12 mg/d", obs:"Mono ou adjuvante."},
  {ind:"LAI MENSAL (Sustenna)", dose:"Dia 1: 234 mg IM | Dia 8: 156 mg IM | Manutenção: 39-234 mg IM 1x/mês", obs:"Aplicar em deltoide nos primeiros dois meses, depois glúteo. NÃO precisa cobertura VO."},
  {ind:"LAI TRIMESTRAL (Trinza)", dose:"Após ≥4 meses estabilizado com mensal: dose trimestral = 3,5× a dose mensal final (max 525 mg)", obs:"Aplicar a cada 3 meses. Adesão excelente."},
  {ind:"LAI SEMESTRAL (Hafyera)", dose:"Após estabilizado em mensal/trimestral: dose semestral 700 ou 1000 mg IM cada 6 meses", obs:"Adesão máxima. Disponibilidade Brasil limitada."},
],

ajustes:{
  irc:"⚠ AJUSTAR conforme ClCr: <80 reduzir; <50 limitar 3 mg/d VO; <30 não usar mensal injetável.",
  iht:"Sem ajuste em insuf hepática leve-moderada.",
  idoso:"Iniciar dose menor 3 mg/d.",
  gestante:"Categoria C. Cautela.",
  aleita:"Pequena quantidade no leite — monitorar bebê.",
  ped:"Aprovada >12 anos (esquizofrenia).",
},

mecanismo:"Como risperidona — antagonismo 5-HT2A/D2. Vantagem da formulação injetável: ABSORÇÃO LENTA E ESTÁVEL → níveis séricos uniformes.",

interacoes:[
  {droga:"Indutores CYP3A4/P-gp (carbamazepina)", efeito:"↓ paliperidona — pode necessitar dose maior."},
  {droga:"Anti-hipertensivos", efeito:"Hipotensão somativa."},
  {droga:"QT-prolongadores", efeito:"Cautela — paliperidona prolonga QT modesto."},
],

efeitos:[
  {tipo:"comum", item:"Como risperidona: hiperprolactinemia, EPS dose-dependentes, sedação, hipotensão ortostática, ganho de peso (moderado)."},
  {tipo:"sério", item:"NMS, QT longo, discinesia tardia, eventos CV em demente."},
  {tipo:"local_LAI", item:"Dor/nódulo no local da aplicação (geralmente leve, transitório)."},
],

alertas:[
  {nivel:"warn",txt:"LAI tem grande vantagem em ADERÊNCIA — preferir em paciente com história de abandono."},
  {nivel:"warn",txt:"AJUSTE RENAL importante — paliperidona é eliminada predominantemente renal (diferente de risperidona)."},
  {nivel:"info",txt:"Em mulher com hiperprolactinemia sintomática: considerar trocar para aripiprazol."},
],

remume:"CEAF (PCDT Esquizofrenia — LAI tem critérios específicos como falha de adesão documentada). NÃO está no CBAF. Custo alto.",
preparo:"VO ER em qualquer horário com ou sem alimento. LAI: instruções específicas do produto (volumes, sítio de aplicação).",
monitor:"Como risperidona. Função renal antes de iniciar LAI.",
diretriz:"MS — PCDT Esquizofrenia. APA.",
fluxo:null,
calcs:[],
},

/* ============== ANTIPSICÓTICO TÍPICO ============== */

{id:"med-clorpromazina", contexto:["ubs","pa"], classe:"Antipsicótico típico — fenotiazina", grupo:"antipsicotico-tipico",
nome:"Clorpromazina",
sin:["Amplictil","Longactil"],
formas:["Comp 25, 100 mg","Sol oral 4% (40 mg/mL)","Ampola 25 mg/5 mL"],
resumo:"Antipsicótico clássico de baixa potência. Forte SEDAÇÃO. Múltiplos usos: psicose, agitação, soluço refratário, êmese refratária, cefaleia em salvas. CBAF (FARMASUS).",
dose_rapida:"Psicose: 75-300 mg/d VO | Agitação aguda: 25-50 mg IM",

doses:[
  {ind:"Esquizofrenia / psicose crônica", dose:"75-300 mg/d VO, divididos 2-4x/d", obs:"Manutenção 100-200 mg/d. Doses até 800 mg/d em refratários (raro)."},
  {ind:"Agitação aguda / mania", dose:"25-50 mg IM, pode repetir a cada 4-6h (máx ~300 mg/d)", obs:"Cuidado: hipotensão postural — paciente deitado. NÃO IV em bolus."},
  {ind:"Soluço refratário (>48h)", dose:"25-50 mg 3-4x/d VO, IM ou IV lento", obs:"Indicação clássica."},
  {ind:"Êmese refratária (oncologia, pós-op)", dose:"25-50 mg 4-6/6h VO/IM", obs:"Ondansetrona é 1ª linha."},
],

ajustes:{
  irc:"Cautela em IRC grave.",
  iht:"Cautela — eliminação hepática.",
  idoso:"Doses BAIXAS (25 mg, titular). Risco hipotensão, queda, EPS.",
  gestante:"Categoria C. Cautela.",
  aleita:"Excretada — geralmente evitar.",
  ped:"Aprovada >1 ano. Doses por peso.",
},

mecanismo:"Antagonista D2 (forte), 5-HT2A, H1 (sedação), α1 (hipotensão), M (anticolinérgico). Baixa afinidade D2 vs haloperidol = menos EPS, mais sedação.",

interacoes:[
  {droga:"Outros depressores SNC (álcool, BZD, opioides)", efeito:"Sedação somativa."},
  {droga:"Anti-hipertensivos", efeito:"Hipotensão potencializada."},
  {droga:"QT-prolongadores", efeito:"⚠ Cautela — risco Torsades, evitar combinação."},
  {droga:"Anticolinérgicos", efeito:"Efeitos anticolinérgicos somativos (constipação, retenção urinária, confusão em idoso)."},
],

efeitos:[
  {tipo:"comum", item:"Sedação importante, hipotensão ortostática, fotossensibilidade cutânea, boca seca, constipação, ganho de peso, taquicardia."},
  {tipo:"sério", item:"EPS (menos que haloperidol), discinesia tardia, NMS, QT longo, hipotensão grave, colestase, agranulocitose (rara), retinopatia (uso prolongado alto)."},
  {tipo:"crônico", item:"Pigmentação cutânea acinzentada em fotoexpostos, fotossensibilidade marcante (orientar protetor solar)."},
],

alertas:[
  {nivel:"warn",txt:"HIPOTENSÃO POSTURAL: paciente deve receber dose IM deitado. Idoso: alto risco de queda."},
  {nivel:"warn",txt:"FOTOSSENSIBILIDADE marcante — orientar fotoproteção. Risco de queimadura solar com pouca exposição."},
  {nivel:"info",txt:"BAIXO custo, amplamente disponível, padrão FARMASUS — útil quando atípicos não acessíveis."},
  {nivel:"info",txt:"NÃO administrar IV em bolus — hipotensão grave. Se for usar IV, diluir e correr lento."},
],

remume:"CBAF (FARMASUS — controlada). 25 mg, 100 mg comprimido e ampola 25 mg/5 mL. Sol oral 4%.",
preparo:"VO com alimento (reduz irritação gástrica). IM profundo. Ampola pode ser administrada IM ou IV lento (diluído).",
monitor:"PA (postural), ECG (se uso prolongado ou alta dose), hemograma se prolongado, ALT/AST se sintomas.",
diretriz:"MS — REMUME (FARMASUS). PCDT Esquizofrenia. APA.",
fluxo:null,
calcs:[],
},

/* ============== BENZODIAZEPÍNICOS (4) ============== */

{id:"med-diazepam", contexto:["ubs","pa"], classe:"Benzodiazepínico — meia-vida longa", grupo:"benzodiazepinico",
nome:"Diazepam",
sin:["Valium","Dienpax","Compaz"],
formas:["Comp 5, 10 mg","Sol oral 2 mg/mL","Ampola 10 mg/2 mL"],
resumo:"BZD de meia-vida LONGA (T½ 20-100h com metabólitos). Usos: ansiedade aguda, convulsão (status), espasticidade, sedação procedimental, abstinência alcoólica. CBAF (FARMASUS).",
dose_rapida:"Ansiedade: 2-10 mg VO 2-4x/d | Status: 10 mg IV (repetir 5-10 mg) | Abstinência álcool: 10-20 mg cada 1-2h titulado",

doses:[
  {ind:"Crise de ansiedade (uso curto)", dose:"2-10 mg VO, repetir conforme necessário (máx ~30 mg/d)", obs:"USO CURTO 2-4 semanas — risco dependência."},
  {ind:"Status epilepticus / crise convulsiva prolongada", dose:"10 mg IV em 2 min, pode repetir 10 mg em 10-15 min (máx 30 mg)", obs:"Alternativa: 10 mg IM (absorção errática) ou 10 mg retal. Após controle: iniciar antiepiléptico de manutenção (fenitoína, levetiracetam)."},
  {ind:"Abstinência alcoólica (CIWA)", dose:"10-20 mg VO cada 1-2h titulado pela escala CIWA; alternativa fixa 10 mg 4x/d × 3 dias com redução", obs:"Esquema de carga sintoma-guiada é preferido. Evitar em hepatopata grave (preferir lorazepam)."},
  {ind:"Sedação procedimental leve", dose:"2-10 mg VO 30-60 min antes", obs:"Combinado com opioide reduz dose ambos."},
  {ind:"Espasticidade muscular", dose:"5-10 mg 3-4x/d VO", obs:"Uso limitado por sedação."},
],

ajustes:{
  irc:"Sem ajuste rotineiro.",
  iht:"⚠ EVITAR em insuf hepática grave (acumula) — preferir LORAZEPAM (sem metabólito ativo).",
  idoso:"Iniciar 2 mg, titular cautelosa. Risco de queda. Preferir lorazepam.",
  gestante:"Categoria D (especialmente 1º trimestre — risco fenda palatina). Síndrome de abstinência neonatal.",
  aleita:"Cuidado — acumula no bebê. Doses únicas/breves podem ser compatíveis.",
  ped:"Convulsão: 0,2-0,5 mg/kg IV/VR (máx 10 mg).",
},

mecanismo:"Agonista GABA-A — facilita abertura de canais Cl⁻ → hiperpolarização → inibição. Efeitos: ansiolítico, hipnótico, anticonvulsivante, miorrelaxante, amnésico anterógrado.",

interacoes:[
  {droga:"Álcool, opioides, outros depressores SNC", efeito:"⚠ Depressão respiratória e SNC somativa — alta letalidade em combinações."},
  {droga:"Inibidores CYP3A4 (cetoconazol, claritro, ritonavir)", efeito:"↑↑ diazepam (T½ ↑↑ ainda mais)."},
  {droga:"Cimetidina, omeprazol", efeito:"↑ diazepam (modesto)."},
],

efeitos:[
  {tipo:"comum", item:"Sedação, sonolência, fraqueza muscular, tonteira, ataxia, prejuízo cognitivo, amnésia anterógrada, em idosos: confusão."},
  {tipo:"sério", item:"DEPRESSÃO RESPIRATÓRIA (especialmente combinado com álcool/opioide), QUEDAS e fraturas em idoso, DEPENDÊNCIA + síndrome de abstinência (convulsões, delirium se retirada abrupta após uso prolongado)."},
],

alertas:[
  {nivel:"crit",txt:"<strong>USO PROLONGADO → DEPENDÊNCIA.</strong> Limitar a 2-4 semanas. Idoso: P4 — preferir antidepressivo para ansiedade crônica."},
  {nivel:"crit",txt:"<strong>RETIRADA ABRUPTA</strong> após uso crônico pode causar convulsão, delirium. Redução gradual (10-25% a cada 1-2 sem)."},
  {nivel:"warn",txt:"COMBINAÇÃO COM ÁLCOOL/OPIOIDE: alta letalidade. Sempre questionar uso."},
  {nivel:"warn",txt:"IDOSO: aumenta queda, fratura de quadril, confusão. Critérios de BEERS desaconselham — preferir alternativas (trazodona, ISRS, mirtazapina para ansiedade)."},
],

remume:"CBAF (FARMASUS) — receita azul B1. 5, 10 mg + sol oral + ampola.",
preparo:"VO ou IM (lento — absorção errática) ou IV LENTO 2-5 min em veia calibrosa.",
monitor:"SpO2, FR, nível de consciência em uso parenteral. Risco de queda em idoso.",
diretriz:"MS — REMUME (FARMASUS). NICE BZD. NIDA — uso e abuso de BZD.",
fluxo:null,
calcs:[],
},

{id:"med-clonazepam", contexto:["ubs"], classe:"Benzodiazepínico — meia-vida longa", grupo:"benzodiazepinico",
nome:"Clonazepam",
sin:["Rivotril","Frizium"],
formas:["Comp 0,5, 2 mg","Sol oral 2,5 mg/mL"],
resumo:"BZD de meia-vida intermediária-longa (T½ 18-50h). Usos: epilepsia (mioclônica, ausência), ansiedade, transtorno do pânico. POTENCIAL DE ABUSO ALTO no Brasil. CBAF (FARMASUS).",
dose_rapida:"Ansiedade/pânico: 0,5-2 mg/d VO | Epilepsia: titular 4-8 mg/d",

doses:[
  {ind:"Transtorno do pânico", dose:"0,25-0,5 mg 2x/d, titular para 1-4 mg/d em 1-2 semanas", obs:"Tem evidência específica em pânico. ISRS é 1ª linha; clonazepam é adjuvante na fase aguda."},
  {ind:"Transtorno de ansiedade generalizada (uso pontual)", dose:"0,5-2 mg/d em doses divididas", obs:"USO CURTO. Cronificação ≠ recomendada."},
  {ind:"Epilepsia — mioclônica, ausência", dose:"Iniciar 0,5 mg/d, titular cada 3-5d até 4-8 mg/d", obs:"NEUROLOGIA."},
  {ind:"Síndrome das pernas inquietas refratária", dose:"0,5-2 mg à noite", obs:"Quando agonistas dopaminérgicos não tolerados."},
  {ind:"Acatisia por antipsicóticos", dose:"0,5-2 mg/d", obs:"Pode tentar antes de propranolol/biperideno."},
],

ajustes:{
  irc:"Sem ajuste rotineiro.",
  iht:"Cautela em insuf hepática grave (acumula).",
  idoso:"DOSES MUITO BAIXAS. Critérios BEERS desaconselham. Preferir alternativas.",
  gestante:"Categoria D. Evitar.",
  aleita:"Excretado — geralmente evitar.",
  ped:"Epilepsia: doses ajustadas. Sob neuropediatria.",
},

mecanismo:"GABA-A agonista. Maior afinidade para subunidades relevantes em epilepsia — daí eficácia anticonvulsivante particular.",

interacoes:[
  {droga:"Álcool, opioides, outros depressores SNC", efeito:"⚠ Depressão somativa."},
  {droga:"Indutores enzimáticos (fenitoína, carbamazepina, fenobarbital)", efeito:"↓ clonazepam."},
  {droga:"Fluoxetina, fluvoxamina", efeito:"↑ clonazepam (interação modesta)."},
],

efeitos:[
  {tipo:"comum", item:"Sedação (forte na 1ª semana), fadiga, ataxia, dificuldade de concentração, problemas cognitivos, depressão (paradoxal em alguns), disfunção sexual."},
  {tipo:"sério", item:"DEPENDÊNCIA (alta — clonazepam é dos BZD com maior potencial de abuso), abstinência grave, depressão respiratória, ideação suicida (boxed warning conjunto com outros BZD)."},
],

alertas:[
  {nivel:"crit",txt:"<strong>USO PROLONGADO É EPIDEMIA NO BRASIL.</strong> Em paciente novo: questionar uso prévio. Em uso crônico: discutir desprescrição estruturada (redução 25%/mês ou menos)."},
  {nivel:"crit",txt:"NÃO suspender abruptamente após uso >4 semanas — risco convulsão, delirium, agitação."},
  {nivel:"warn",txt:"Pacientes em uso de OPIOIDES + clonazepam: risco de óbito por depressão respiratória. Evitar combinação."},
  {nivel:"info",txt:"Em ansiedade CRÔNICA: P4 — antidepressivo + psicoterapia > clonazepam crônico. Discutir."},
],

remume:"CBAF (FARMASUS) — receita azul B1.",
preparo:"VO. Sol oral útil em paciente que precisa titular finamente (deprescrição gradual).",
monitor:"Avaliação de dependência. Função cognitiva em idoso.",
diretriz:"MS — REMUME. NICE Anxiety Guidelines. NIDA.",
fluxo:null,
calcs:[],
},

{id:"med-lorazepam", contexto:["ubs","pa"], classe:"Benzodiazepínico — meia-vida intermediária", grupo:"benzodiazepinico",
nome:"Lorazepam",
sin:["Lorax","Mesmerin","Ativan"],
formas:["Comp 1, 2 mg","Ampola 2 mg/mL (raro Brasil)"],
resumo:"BZD de meia-vida INTERMEDIÁRIA (T½ 12-15h), sem metabólitos ativos — PREFERIDO em idoso e hepatopata. Usos: ansiedade aguda, abstinência alcoólica em hepatopata, status, sedação. CBAF irregular.",
dose_rapida:"Ansiedade: 0,5-2 mg VO 2-3x/d | Status (alternativa): 4 mg IV",

doses:[
  {ind:"Ansiedade aguda (uso curto)", dose:"0,5-2 mg VO 2-3x/d", obs:"Máx 10 mg/d. Uso curto 2-4 sem."},
  {ind:"Abstinência alcoólica em hepatopata grave", dose:"1-2 mg VO/IV cada 1-2h titulado pela CIWA", obs:"⚠ Preferido sobre diazepam em hepatopata (sem metabólitos ativos)."},
  {ind:"Status epilepticus (1ª linha em alguns guidelines)", dose:"4 mg IV em 2 min, repetir 4 mg em 10 min se necessário", obs:"Onde disponível, lorazepam IV tem evidência boa em status. Em Brasil, geralmente diazepam é mais disponível."},
  {ind:"Sedação procedimental leve", dose:"1-2 mg VO/SL 30-60 min antes", obs:"Tem absorção sublingual."},
  {ind:"Insônia (uso curto)", dose:"0,5-2 mg à noite", obs:"USO CURTO."},
],

ajustes:{
  irc:"Sem ajuste rotineiro.",
  iht:"<strong>PREFERIDO em hepatopata</strong> (conjugação direta, sem CYP) — sem ajuste em insuf hepática.",
  idoso:"<strong>PREFERIDO entre BZD</strong> em idoso (sem metabólitos ativos). Mas ainda assim doses baixas, uso curto.",
  gestante:"Categoria D.",
  aleita:"Pequena quantidade — evitar uso prolongado.",
  ped:"Status: 0,05-0,1 mg/kg IV.",
},

mecanismo:"GABA-A agonista. Metabolizado por conjugação direta (glucuronidação) sem CYP — daí seu uso em hepatopata.",

interacoes:[
  {droga:"Álcool, opioides, outros depressores SNC", efeito:"Depressão somativa."},
  {droga:"Probenecida", efeito:"↑ lorazepam (modesto)."},
  {droga:"Olanzapina IM", efeito:"⚠ NÃO combinar (depressão respiratória)."},
],

efeitos:[
  {tipo:"comum", item:"Sedação, ataxia, prejuízo cognitivo, amnésia."},
  {tipo:"sério", item:"Depressão respiratória, dependência (potencial < clonazepam), quedas em idoso."},
],

alertas:[
  {nivel:"info",txt:"<strong>PREFERIDO</strong> em idoso e hepatopata pela ausência de metabólitos ativos."},
  {nivel:"warn",txt:"Disponibilidade variável no SUS — em alguns estados está em FARMASUS, outros não. Confirmar localmente."},
  {nivel:"warn",txt:"Uso prolongado = dependência. Limitar e ter plano de retirada."},
],

remume:"FARMASUS em alguns estados (controlado B1). Disponibilidade IRREGULAR — confirmar com farmacêutico local.",
preparo:"VO ou SL. IV diluído (se disponível).",
monitor:"Como outros BZD.",
diretriz:"MS — REMUME (variável). NICE. ASAM (abstinência álcool).",
fluxo:null,
calcs:[],
},

{id:"med-nitrazepam", contexto:["ubs"], classe:"Benzodiazepínico — hipnótico", grupo:"benzodiazepinico",
nome:"Nitrazepam",
sin:["Mogadon","Sonebon"],
formas:["Comp 5 mg"],
resumo:"BZD hipnótico com meia-vida longa (T½ 18-30h) → ressaca matinal. Indicação: insônia (uso curto). CBAF (FARMASUS).",
dose_rapida:"Insônia: 5-10 mg à noite",

doses:[
  {ind:"Insônia de manutenção (uso curto)", dose:"5-10 mg 30 min antes de dormir", obs:"USO CURTO 2-4 sem. Ressaca matinal é comum (T½ longo)."},
],

ajustes:{
  irc:"Sem ajuste.",
  iht:"Cautela — preferir lorazepam.",
  idoso:"Doses 2,5-5 mg. <strong>Critérios BEERS desaconselham</strong> — preferir higiene do sono + alternativas.",
  gestante:"Categoria X (no rótulo brasileiro). Evitar.",
  aleita:"Excretado — evitar.",
  ped:"Não recomendado.",
},

mecanismo:"GABA-A agonista, com efeito hipnótico predominante.",

interacoes:[
  {droga:"Álcool, opioides, outros depressores SNC", efeito:"Depressão somativa."},
],

efeitos:[
  {tipo:"comum", item:"Ressaca matinal, fadiga, sonolência diurna, prejuízo cognitivo."},
  {tipo:"sério", item:"Depressão respiratória em combinação, queda em idoso, dependência."},
],

alertas:[
  {nivel:"warn",txt:"Insônia crônica: TCC-I (terapia cognitivo-comportamental para insônia) é 1ª linha. BZD como nitrazepam tem uso decrescente."},
  {nivel:"warn",txt:"Idoso: alto risco — preferir trazodona, mirtazapina, ou medidas não-farmacológicas."},
],

remume:"CBAF (FARMASUS) — receita azul B1.",
preparo:"VO 30 min antes de dormir.",
monitor:"Avaliação de dependência. Quedas em idoso.",
diretriz:"MS — REMUME. NICE Insomnia.",
fluxo:null,
calcs:[],
},

/* ============== ESTABILIZADOR DE HUMOR ============== */

{id:"med-litio-carbonato", contexto:["ubs"], classe:"Estabilizador de humor — sal de lítio", grupo:"estabilizador-humor",
nome:"Carbonato de lítio",
sin:["Carbolitium","Carbolim"],
formas:["Comp 300 mg","Comp CR (libração prolongada) 300, 450 mg"],
resumo:"PADRÃO-OURO no transtorno bipolar (mania E manutenção). ÚNICO estabilizador com evidência forte de REDUÇÃO DE SUICÍDIO. Janela terapêutica estreita — requer dosagem sérica. CBAF (FARMASUS).",
dose_rapida:"Mania aguda: 900-1800 mg/d VO | Manutenção: 600-1200 mg/d | Alvo sérico 0,6-1,2 mEq/L",

doses:[
  {ind:"Mania aguda — bipolar I", dose:"Iniciar 900-1200 mg/d, dividido 2-3x/d; titular para 0,8-1,2 mEq/L", obs:"Resposta em 1-2 sem. Combinar com antipsicótico ou BZD nas primeiras semanas para controle rápido."},
  {ind:"Manutenção do transtorno bipolar", dose:"600-1200 mg/d, alvo sérico 0,6-1,0 mEq/L", obs:"Preferir formulação CR (1x/d à noite). Manutenção pode ser por anos/vida toda."},
  {ind:"Potencialização em depressão refratária", dose:"600-900 mg/d, alvo 0,4-0,8 mEq/L", obs:"Adjuvante a antidepressivo. Evidência boa."},
  {ind:"Redução do suicídio (bipolar e depressão recorrente)", dose:"Como manutenção", obs:"ÚNICO estabilizador com evidência meta-analítica de redução de suicídio."},
],

ajustes:{
  irc:"⚠ AJUSTE OBRIGATÓRIO. ClCr <50: reduzir 50%. <30: evitar ou nefrologia.",
  iht:"Sem ajuste.",
  idoso:"Doses MENORES (50-75% da dose adulta). Alvo sérico mais baixo (0,4-0,8). Risco de toxicidade.",
  gestante:"Categoria D. Anomalia de Ebstein no 1º trimestre. Risco x benefício individualizado.",
  aleita:"CONTRAINDICADO — risco neurotóxico no bebê.",
  ped:"Aprovado >12 anos (mania).",
},

mecanismo:"Mecanismo multifatorial: inibe GSK-3β, modula sinalização IP3/PKC, estabiliza canais iônicos. Reduz neurotransmissão excitatória, aumenta neurotrofismo (BDNF).",

interacoes:[
  {droga:"AINE (especialmente ibuprofeno, indometacina), IECA, BRA, diuréticos tiazídicos, furosemida", efeito:"⚠ ↑↑ LÍTIO sérico — risco TOXICIDADE. Monitorar nível. Evitar AINE em uso crônico."},
  {droga:"Desidratação, dieta restritiva de sal, vômitos/diarreia", efeito:"⚠ ↑ lítio sérico (reabsorção tubular ↑). Risco toxicidade em pacientes com gastroenterite ou exercício extenuante."},
  {droga:"Antipsicóticos (haloperidol clássico)", efeito:"Combinação relatada com neurotoxicidade rara — vigiar."},
],

efeitos:[
  {tipo:"comum_terapêutico", item:"Tremor fino mãos (10-65%), poliuria/polidipsia (diabetes insipidus nefrogênico — 40%), ganho de peso, sintomas GI (náusea, diarreia), acne, sedação, fadiga, leve dificuldade cognitiva."},
  {tipo:"sério_crônico", item:"<strong>Disfunção tireoidiana</strong> (hipotireoidismo 10-20%), <strong>diabetes insipidus nefrogênico</strong>, <strong>nefrotoxicidade</strong> (DRC após uso prolongado), hiperparatireoidismo, dermatoses (psoríase agravada)."},
  {tipo:"intoxicação", item:"⚠ <strong>NÍVEL 1,5-2,5</strong> mEq/L: confusão, ataxia grosseira, tremor grosseiro, vômitos, miofasciculações. <strong>>2,5</strong>: convulsão, coma, arritmia, IRA. <strong>EMERGÊNCIA</strong> → hemodiálise se >4 mEq/L ou sintomas graves."},
],

alertas:[
  {nivel:"crit",txt:"<strong>JANELA TERAPÊUTICA ESTREITA:</strong> tóxico >1,5 mEq/L. Dosar nível sérico (vale 12h pós-dose) basal, a cada semana até estabilizar dose, depois a cada 3-6 meses."},
  {nivel:"crit",txt:"<strong>NÃO COMBINAR com AINE crônico, IECA, BRA, diurético tiazídico sem ajuste prévio e monitoramento.</strong> Em gastroenterite/desidratação: SUSPENDER temporariamente."},
  {nivel:"warn",txt:"Antes de iniciar: função renal, TSH, eletrólitos, ECG (se >50a ou cardiopata), gravidez (em mulheres em idade fértil)."},
  {nivel:"warn",txt:"Em manutenção: <strong>TSH e função renal a cada 6 meses</strong>. Suspender se DRC progressiva."},
  {nivel:"info",txt:"<strong>ÚNICA medicação com evidência clara de redução de suicídio.</strong> Vale informar paciente."},
],

remume:"CBAF (FARMASUS) — receita amarela A1 (controle). 300 mg comprimido.",
preparo:"VO com alimento (reduz GI). CR à noite (melhor adesão e menor pico).",
monitor:"<strong>Nível sérico</strong> (vale 12h pós-dose), TSH, função renal, peso. Estado mental, tremor, sintomas GI/neurológicos.",
diretriz:"MS — PCDT Transtorno Afetivo Bipolar. APA Bipolar. NICE CG185.",
fluxo:null,
calcs:[],
},

/* ============== ANTIDEPRESSIVOS TRICÍCLICOS (extras) ============== */

{id:"med-imipramina", contexto:["ubs"], classe:"Antidepressivo tricíclico — amina terciária", grupo:"antidepressivo-tca",
nome:"Imipramina",
sin:["Tofranil","Imipra"],
formas:["Comp 25, 75 mg"],
resumo:"TCA clássico. Usos: depressão (em desuso para 1ª linha), enurese noturna em criança, dor neuropática, transtorno do pânico. CBAF (FARMASUS).",
dose_rapida:"Depressão: 75-200 mg/d à noite | Enurese (criança >6a): 25-50 mg à noite",

doses:[
  {ind:"Depressão (uso restrito em 2ª-3ª linha)", dose:"Iniciar 25-50 mg/d, titular 75-200 mg/d à noite", obs:"ISRS é 1ª linha. TCA reservado a casos específicos ou intolerância."},
  {ind:"Enurese noturna em criança >6a", dose:"25-50 mg 1h antes de dormir × 3 meses", obs:"Avaliar resposta em 2-4 sem. Alarme noturno + enurese tem evidência superior."},
  {ind:"Dor neuropática", dose:"25-150 mg/d à noite", obs:"Amitriptilina é mais usada — perfil semelhante."},
  {ind:"Transtorno do pânico", dose:"Iniciar 25 mg, titular 100-200 mg/d", obs:"Eficácia comparável a ISRS, mas perfil de efeitos pior."},
],

ajustes:{
  irc:"Sem ajuste rotineiro.",
  iht:"Reduzir.",
  idoso:"Doses BAIXAS (10-25 mg, titular). Critérios BEERS desaconselham — efeitos anticolinérgicos.",
  gestante:"Categoria N (sem rotulação clara). Cautela.",
  aleita:"Pequena quantidade — geralmente compatível.",
  ped:"Aprovado >6 anos para enurese. Doses baseadas em idade/peso.",
},

mecanismo:"Inibe recaptação NA + 5-HT. Bloqueio H1 (sedação), M (anticolinérgico), α1 (hipotensão). Bloqueio canais Na cardíaco (efeito quinidínico — toxicidade em overdose).",

interacoes:[
  {droga:"IMAO", efeito:"⚠ CONTRAINDICADO 14 dias antes/depois — síndrome serotoninérgica, crise hipertensiva."},
  {droga:"ISRS (especialmente fluoxetina, paroxetina)", efeito:"↑↑ TCA — síndrome serotoninérgica."},
  {droga:"Antipsicóticos, anti-arrítmicos QT-prolongadores", efeito:"⚠ QT longo somativo, Torsades."},
  {droga:"Anticolinérgicos", efeito:"Efeitos anticolinérgicos somativos."},
  {droga:"Álcool, BZD", efeito:"Sedação somativa."},
],

efeitos:[
  {tipo:"anticolinérgico", item:"Boca seca, constipação, retenção urinária (atenção HPB), borramento visão, confusão mental (idoso)."},
  {tipo:"cardiovascular", item:"Hipotensão ortostática, taquicardia, prolongamento QT."},
  {tipo:"sério", item:"⚠ <strong>OVERDOSE LETAL</strong> (TCA tem janela tóxica estreita em superdose — arritmia, convulsão, coma). Ideação suicida em jovens (boxed warning). NMS raro."},
],

alertas:[
  {nivel:"crit",txt:"<strong>OVERDOSE LETAL:</strong> TCA é causa frequente de morte por intoxicação. Em paciente com ideação suicida, dispensar EM PEQUENAS QUANTIDADES."},
  {nivel:"warn",txt:"IDOSO: critérios BEERS — preferir alternativas (sertralina, nortriptilina — menor anticolinérgico). Em uso já estabelecido, considerar desprescrição."},
  {nivel:"warn",txt:"Antes de iniciar: ECG (verificar QTc). Cardiopata: cuidado."},
],

remume:"CBAF (FARMASUS) — receita azul B1.",
preparo:"VO à noite (sedação).",
monitor:"PA (ortostática), ECG basal, função intestinal (constipação).",
diretriz:"MS — REMUME (FARMASUS). APA.",
fluxo:null,
calcs:[],
},

{id:"med-clomipramina", contexto:["ubs"], classe:"Antidepressivo tricíclico — predomínio serotoninérgico", grupo:"antidepressivo-tca",
nome:"Clomipramina",
sin:["Anafranil","Clo"],
formas:["Comp 10, 25, 75 mg"],
resumo:"TCA com forte ação SEROTONINÉRGICA — PADRÃO em TOC (transtorno obsessivo-compulsivo). Também usada em depressão e dor neuropática. CBAF (FARMASUS).",
dose_rapida:"TOC: 100-250 mg/d | Depressão: 75-200 mg/d à noite",

doses:[
  {ind:"Transtorno obsessivo-compulsivo (TOC)", dose:"Iniciar 25 mg/d, titular para 100-250 mg/d em 2-4 semanas", obs:"<strong>PADRÃO clássico em TOC</strong> — ISRS (especialmente fluoxetina, sertralina em altas doses) são alternativos. Resposta TOC pode demorar 6-12 semanas."},
  {ind:"Depressão grave", dose:"75-200 mg/d à noite", obs:"Reserva — perfil de efeitos pior que ISRS."},
  {ind:"Dor neuropática (especialmente neuralgia diabética)", dose:"25-150 mg/d", obs:"Amitriptilina é mais usada."},
],

ajustes:{
  irc:"Sem ajuste rotineiro.",
  iht:"Reduzir.",
  idoso:"Doses BAIXAS. Critérios BEERS.",
  gestante:"Categoria C/D. Cautela.",
  aleita:"Pequena quantidade.",
  ped:"Aprovado >10 anos (TOC).",
},

mecanismo:"Inibe recaptação 5-HT (potente) + NA (menor que outros TCA). Bloqueio H1, M, α1.",

interacoes:["Como imipramina — IMAO contraindicado, cautela com ISRS, QT-prolongadores."],

efeitos:[
  {tipo:"anticolinérgico", item:"Boca seca, constipação, retenção urinária."},
  {tipo:"cardiovascular", item:"Hipotensão ortostática, QT longo."},
  {tipo:"sério", item:"⚠ Convulsão (CLOMIPRAMINA tem o MAIOR risco entre TCA — 1,5-2% em doses >250 mg/d), overdose letal, síndrome serotoninérgica em combinações."},
],

alertas:[
  {nivel:"crit",txt:"<strong>RISCO DE CONVULSÃO</strong> dose-dependente — limitar dose 250 mg/d. Evitar em epiléptico."},
  {nivel:"warn",txt:"TOC: resposta lenta (6-12 sem) — orientar paciente. NÃO mudar precocemente."},
],

remume:"CBAF (FARMASUS) — receita azul B1.",
preparo:"VO à noite.",
monitor:"PA, ECG, função intestinal. Sinais de convulsão em alta dose.",
diretriz:"MS — REMUME. APA TOC Guidelines.",
fluxo:null,
calcs:[],
},

/* ============== ANTIPARKINSONIANO EXTRAPIRAMIDAL ============== */

{id:"med-biperideno", contexto:["ubs","pa"], classe:"Anticolinérgico — antimuscarínico central", grupo:"antiparkinsoniano-extrap",
nome:"Biperideno",
sin:["Akineton","Cinetol"],
formas:["Comp 2 mg","Ampola 5 mg/mL (Akineton injetável)"],
resumo:"Anticolinérgico central — TRATAMENTO DE SINTOMAS EXTRAPIRAMIDAIS induzidos por antipsicóticos (distonia aguda, parkinsonismo iatrogênico). NÃO é antidepressivo. CBAF.",
dose_rapida:"Distonia aguda IM: 2,5-5 mg | Parkinsonismo: 2-4 mg/d VO",

doses:[
  {ind:"Distonia aguda por antipsicótico (emergência)", dose:"2,5-5 mg IM, pode repetir em 30 min se necessário", obs:"Resposta dramática em 10-20 min. Após resolução: VO 2-4 mg/d × 1-2 sem para prevenir recidiva."},
  {ind:"Parkinsonismo induzido por antipsicótico", dose:"2-4 mg/d VO, dividido 2-3x/d", obs:"Considerar reduzir antipsicótico ou trocar para um com menos EPS antes de adicionar biperideno."},
  {ind:"Acatisia (uso secundário)", dose:"2-4 mg/d", obs:"Resposta variável. Propranolol é geralmente preferido."},
],

ajustes:{
  irc:"Sem ajuste.",
  iht:"Cautela.",
  idoso:"⚠ <strong>EVITAR</strong> sempre que possível — efeitos anticolinérgicos centrais (confusão, delirium, queda). Critérios BEERS contraindicam.",
  gestante:"Categoria N. Cautela.",
  aleita:"Excretado — evitar.",
  ped:"Doses ajustadas.",
},

mecanismo:"Antagonismo MUSCARÍNICO central — restaura balance dopamina/acetilcolina nos gânglios da base.",

interacoes:[
  {droga:"Outros anticolinérgicos", efeito:"Efeitos somativos — confusão, retenção urinária, constipação, glaucoma de ângulo fechado."},
  {droga:"Antipsicóticos", efeito:"<strong>Reduz efeito</strong> dos antipsicóticos (paradoxalmente). Usar pelo MENOR tempo possível."},
  {droga:"Anti-histamínicos sedativos, TCA, opioides", efeito:"Anticolinérgico somativo."},
],

efeitos:[
  {tipo:"comum", item:"Boca seca, visão borrada, constipação, retenção urinária, taquicardia, sudorese reduzida (risco hipertermia em ambiente quente)."},
  {tipo:"sério", item:"⚠ DELIRIUM anticolinérgico em idoso. Glaucoma de ângulo fechado agudo. Retenção urinária. Hipertermia maligna. Pode mascarar discinesia tardia."},
  {tipo:"abuso", item:"⚠ Em alta dose: alucinações, euforia — potencial de abuso recreacional descrito."},
],

alertas:[
  {nivel:"crit",txt:"<strong>IDOSO:</strong> evitar — delirium e queda. Em ANCIÃO com EPS por antipsicótico: preferir trocar antipsicótico ou reduzir dose."},
  {nivel:"warn",txt:"Glaucoma de ângulo fechado: contraindicação. HPB: cuidado (retenção urinária)."},
  {nivel:"warn",txt:"NÃO usar profilaticamente em paciente novo em antipsicótico — só se EPS aparece."},
],

remume:"CBAF — 2 mg comprimido e ampola.",
preparo:"VO ou IM (distonia aguda).",
monitor:"Sinais de toxicidade anticolinérgica. Estado mental em idoso.",
diretriz:"MS — REMUME. APA Schizophrenia.",
fluxo:null,
calcs:[],
},

);
