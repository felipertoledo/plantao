/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — BIBLIOTECA DE MEDICAÇÕES (PARTE 3)
   16 medicações adicionais: BNM, antihiper IV, antiarrit, ATB, outros
   =========================================================== */

MEDICACOES.push(

/* ============== SUCCINILCOLINA ============== */
{id:"med-succinilcolina", classe:"Bloqueador neuromuscular DESPOLARIZANTE", grupo:"sedativo",
nome:"Succinilcolina (Suxametônio)",
sin:["Quelicin","Suxametônio"],
formas:[
  "Ampola 100 mg/2 mL (50 mg/mL) — diluir antes de usar",
  "Frasco-pó 500 mg para reconstituir",
],
resumo:"BNM despolarizante de ULTRA-CURTA AÇÃO. Padrão em SRI quando reversão rápida é importante (via aérea difícil). Múltiplas contraindicações graves.",
dose_rapida:"1-1,5 mg/kg IV em bolus | Início 30-60 seg, duração 5-10 min",

doses:[
  {ind:"SRI — paralisia rápida", dose:"1-1,5 mg/kg IV em bolus rápido", obs:"Início 30-60 seg. Duração 5-10 min. Vantagem: retorno espontâneo se IOT falhar."},
  {ind:"BNM contínuo (raro)", dose:"NÃO usar em BIC — risco bloqueio fase II e malignos", obs:"Preferir rocurônio para uso prolongado."},
  {ind:"Pediatria — SRI", dose:"1,5-2 mg/kg IV (RN: 2-3 mg/kg)", obs:"Pré-tratar ATROPINA 0,02 mg/kg (risco bradiarritmia/assistolia em criança)."},
],

ajustes:{
  irc:"Sem ajuste — mas EVITAR em hipercalemia (ClCr <30 com K>5,5).",
  iht:"Sem ajuste rotineiro.",
  idoso:"Sem ajuste rotineiro.",
  gestante:"Categoria C — pode usar em IOT obstétrica (não atravessa significativa).",
  aleita:"Compatível.",
  ped:"1,5-2 mg/kg IV; RN 2-3 mg/kg. ATROPINA pré (0,02 mg/kg) para prevenir bradicardia.",
},

mecanismo:"Agonista nicotínico na placa motora — causa DESPOLARIZAÇÃO inicial (fasciculações) seguida de paralisia flácida. Metabolizada pela pseudocolinesterase plasmática (rápida) → diidrocolina + ácido succínico. Não há reversão farmacológica.",

farmacocin:{
  absorc:"IV apenas",
  distrib:"Fluido extracelular (não atravessa BBB)",
  metab:"Pseudocolinesterase plasmática (90%)",
  elimin:"Renal (10%)",
  meiavida:"Plasma: <1 min | Efeito clínico: 5-10 min",
  ligacao:"—",
},

espectro:[
  "SRI — quando paralisia ULTRA-RÁPIDA + REVERSÃO RÁPIDA são importantes",
  "Via aérea difícil prevista (paciente acorda se IOT falhar)",
  "Procedimentos curtíssimos (laringoscopia diagnóstica)",
],

interacoes:[
  {droga:"Inibidores acetilcolinesterase (neostigmina, donepezila)", efeito:"Prolonga succinilcolina drasticamente — evitar."},
  {droga:"Inibidores pseudocolinesterase (ecotiopato — colírio glaucoma, organofosforados)", efeito:"Paralisia prolongada — evitar."},
  {droga:"Halogenados", efeito:"Aumenta risco HIPERTERMIA MALIGNA (combinação clássica)."},
  {droga:"Magnésio IV", efeito:"Potencializa bloqueio — reduzir dose."},
],

efeitos:[
  {tipo:"comum", item:"Fasciculações (precedem paralisia), mialgia pós-procedimento (24-72h), bradicardia (especialmente 2ª dose, em criança), aumento PIC/PIO/intra-gástrica transitórios"},
  {tipo:"sério", item:"HIPERCALEMIA (libera K⁺ pela despolarização) — fatal em pacientes vulneráveis; HIPERTERMIA MALIGNA; bloqueio fase II (uso prolongado); apneia prolongada em deficiência de pseudocolinesterase"},
  {tipo:"raro", item:"Anafilaxia (mais frequente entre BNM), espasmo musseter (precursor HM)"},
],

alertas:[
  {nivel:"crit", txt:"HIPERCALEMIA FATAL em pacientes com: queimadura >24h, denervação (AVE, lesão medular, distrofia muscular), rabdomiólise, imobilização >5-7 dias, distrofia muscular de Duchenne (criança c/ paralisia inexplicada), sepse prolongada. Pode causar K↑ 5-10 mEq/L → PARADA. EVITAR! Usar rocurônio."},
  {nivel:"crit", txt:"HIPERTERMIA MALIGNA: febre, rigidez muscular maciça, hipercapnia inexplicada, acidose. TRATAR: dantrolene 2,5 mg/kg IV imediatamente + suspender halogenado + resfriamento. Susceptibilidade hereditária (RYR1) — história familiar é crítico."},
  {nivel:"crit", txt:"DEFICIÊNCIA DE PSEUDOCOLINESTERASE (1:3000): apneia prolongada (horas). Tratar com ventilação até reversão espontânea + plasma fresco congelado se urgente."},
  {nivel:"warn", txt:"BRADICARDIA/ASSISTOLIA em CRIANÇA (especialmente 2ª dose em <6 anos) — ATROPINA 0,02 mg/kg pré OBRIGATÓRIA."},
  {nivel:"warn", txt:"AUMENTO PIC/PIO transitório — evitar em lesão ocular aberta, hipertensão intracraniana grave (controvérsia atual: provavelmente seguro)."},
  {nivel:"info", txt:"FASCICULAÇÕES esperadas. Pré-tratar com pequena dose de rocurônio 0,06 mg/kg pode reduzir, mas raramente necessário."},
],

preparo:"Diluir 100 mg em 10 mL SF = 10 mg/mL. IV bolus rápido. CONFIRMAR ausência de contraindicações de hipercalemia ANTES.",

monitor:"ECG contínuo (K+ funcional), capnografia, train-of-four se disponível, temperatura (HM), CK pós-procedimento se mialgia.",

diretriz:"SBA SRI 2020. ASA Difficult Airway. MHAUS Malignant Hyperthermia.",
fluxo:null,
calcs:[],
},

/* ============== ROCURÔNIO ============== */
{id:"med-rocuronio", classe:"Bloqueador neuromuscular NÃO-DESPOLARIZANTE", grupo:"sedativo",
nome:"Rocurônio",
sin:["Esmeron","Zemuron"],
formas:[
  "Ampola 50 mg/5 mL (10 mg/mL)",
  "Ampola 100 mg/10 mL",
],
resumo:"BNM não-despolarizante de início rápido. Padrão em SRI especialmente em contraindicações da succinilcolina. Reversão com sugamadex (rápida) ou neostigmina.",
dose_rapida:"SRI: 1-1,2 mg/kg IV | Intermediário: 0,6 mg/kg | Manutenção: 0,15 mg/kg",

doses:[
  {ind:"SRI — paralisia rápida (alternativa à succinilcolina)", dose:"1-1,2 mg/kg IV bolus", obs:"Início 60-90 seg, duração 40-60 min. SEM contraindicações de hipercalemia."},
  {ind:"Indução em cirurgia eletiva", dose:"0,6 mg/kg IV", obs:"Início 90-120 seg, duração 30 min."},
  {ind:"Manutenção em VM", dose:"BIC 0,3-0,6 mg/kg/h ou bolus 0,15 mg/kg cada 20-30 min", obs:"Monitor TOF — manter 1-2 respostas (não paralisia total contínua se não necessário)."},
  {ind:"Pediatria — SRI", dose:"0,9-1,2 mg/kg IV", obs:"Sem necessidade de atropina pré (vs succinilcolina)."},
],

ajustes:{
  irc:"Reduzir manutenção (acúmulo); SRI inicial pode ser mantida.",
  iht:"IH grave: prolongamento significativo da duração — reduzir 25-50%.",
  idoso:"Duração mais prolongada — reduzir dose de manutenção.",
  gestante:"Categoria B — pode usar em cesariana.",
  aleita:"Compatível.",
  ped:"0,9-1,2 mg/kg SRI.",
},

mecanismo:"Antagonista competitivo dos receptores nicotínicos na placa motora (não despolariza). Bloqueia ação da acetilcolina → paralisia flácida progressiva. SEM fasciculações. SEM efeitos da succinilcolina (hipercalemia, HM, PIC).",

farmacocin:{
  absorc:"IV apenas",
  distrib:"Espaço extracelular",
  metab:"Hepático parcial",
  elimin:"Biliar (50%) > Renal (33%)",
  meiavida:"60-90 min",
  ligacao:"30%",
},

espectro:[
  "SRI — preferido em contraindicações da succinilcolina (hipercalemia, queimadura, denervação, HM)",
  "Indução em cirurgia eletiva",
  "Manutenção de paralisia em UTI (BIC)",
  "Cesariana (preferido em vez de succinilcolina por segurança)",
],

interacoes:[
  {droga:"Halogenados", efeito:"Potencializa bloqueio — reduzir dose 25-50%."},
  {droga:"Magnésio IV", efeito:"Potencializa significativamente — reduzir dose."},
  {droga:"Aminoglicosídeos", efeito:"Potencializa bloqueio (raro, mas relevante em uso prolongado)."},
  {droga:"Anticonvulsivantes crônicos (fenitoína, carbamazepina)", efeito:"Resistência ao bloqueio — aumentar dose."},
],

efeitos:[
  {tipo:"comum", item:"Reação anafilactoide rara (mais comum entre BNM não-despolarizantes), aumento leve FC, taquicardia"},
  {tipo:"sério", item:"Anafilaxia (incidência maior que cisatracúrio), bloqueio prolongado em IRC/IH grave, dor à injeção"},
  {tipo:"raro", item:"Recurarização após reversão inadequada"},
],

alertas:[
  {nivel:"crit", txt:"REVERSÃO RÁPIDA: SUGAMADEX 16 mg/kg IV reverte rocurônio em 1-3 min (incluindo dose SRI). Disponível em emergência via aérea difícil pós-SRI rocurônio."},
  {nivel:"crit", txt:"REVERSÃO PADRÃO: NEOSTIGMINA 0,04-0,07 mg/kg IV + atropina 0,015-0,02 mg/kg JUNTOS (atropina bloqueia bradicardia da neostigmina). Necessita TOF ≥2 respostas (não reverte paralisia total)."},
  {nivel:"warn", txt:"NÃO esquecer de SEDAR antes de paralisar — paciente paralisado MAS consciente é tortura. Combinar com fentanil/midazolam/propofol."},
  {nivel:"warn", txt:"IH GRAVE: duração pode ser 3-4× a normal — usar TOF, considerar cisatracúrio (eliminação Hofmann, independe de fígado/rim)."},
  {nivel:"info", txt:"Comparado à succinilcolina: início ligeiramente mais lento (60-90s vs 30-60s), duração muito mais longa (40-60 min vs 5-10 min). Sem opção de 'paciente acordar' se IOT falhar (sem sugamadex)."},
],

preparo:"PURO IV bolus em SRI. BIC manutenção: 250 mg em 250 mL SF = 1 mg/mL. Compatível com SF, SG, Ringer.",

monitor:"TOF (train-of-four) — alvo 1-2 respostas para manutenção. ECG, PA, SpO2, temperatura. Sedação adequada SEMPRE (BPS/CPOT).",

diretriz:"SBA BNM 2020. ASA Difficult Airway. ESAIC Sugammadex Guidelines.",
fluxo:null,
calcs:[],
},

/* ============== NITROPRUSSIATO ============== */
{id:"med-nitroprussiato", classe:"Vasodilatador arterial + venoso direto", grupo:"vasopressor",
nome:"Nitroprussiato de sódio",
sin:["Nipride","Nitropress"],
formas:[
  "Frasco-pó 50 mg para reconstituir (necessita proteção da luz)",
],
resumo:"Vasodilatador venoso e arterial potente, ação imediata e ultracurta. Padrão em emergências hipertensivas com necessidade de titulação fina. Risco de toxicidade por cianeto.",
dose_rapida:"0,25-10 mcg/kg/min IV em BIC titulada",

doses:[
  {ind:"Emergência hipertensiva (encefalopatia, ICA, DA, eclâmpsia severa)", dose:"Iniciar 0,25-0,5 mcg/kg/min, titular 0,5 cada 5 min", obs:"Alvo: reduzir PAM 20-25% em 1h. NÃO mais rápido (risco isquemia)."},
  {ind:"Dissecção aórtica aguda (combinado com β-bloq)", dose:"0,5-3 mcg/kg/min", obs:"OBRIGATÓRIO iniciar β-bloq (esmolol/labetalol) ANTES para controlar FC <60 e dP/dt — sem β-bloq, vasodilatação reflexa aumenta cisalhamento aórtico."},
  {ind:"ICA descompensada com PAS alta", dose:"0,3-1 mcg/kg/min", obs:"Reduz pré- E pós-carga. Útil em IC com EAP + HAS."},
  {ind:"Cirurgia cardíaca / hipotensão controlada", dose:"0,5-5 mcg/kg/min", obs:"Centro cirúrgico, sob monitor invasivo."},
],

ajustes:{
  irc:"REDUZIR DOSE e TEMPO de uso — tiocianato acumula (toxicidade). Evitar uso >48h ou ClCr <30.",
  iht:"Cuidado com toxicidade cianeto (metabolização) — limitar dose/tempo.",
  idoso:"Iniciar menor dose, titular lento — maior risco hipotensão.",
  gestante:"Categoria C — pode usar em eclâmpsia se outras opções falharam. Cuidado com tiocianato fetal.",
  aleita:"Cautela; uso pontual em emergência aceito.",
  ped:"0,3-8 mcg/kg/min.",
},

mecanismo:"Libera óxido nítrico (NO) → ↑GMPc → relaxamento musculatura lisa vascular (arterial e venosa). Diferente de NTG (predomínio venoso), NPS é equilíbrado arterial+venoso. NO também pode liberar cianeto (CN⁻) — metabolizado em tiocianato pelo fígado (necessita tiosulfato). Acúmulo de cianeto em uso prolongado/alta dose causa toxicidade.",

farmacocin:{
  absorc:"IV apenas",
  distrib:"Plasma",
  metab:"Hemácias → cianeto → fígado (rodanase) → tiocianato",
  elimin:"Renal (tiocianato)",
  meiavida:"Plasma 2 min | Tiocianato 3-4 dias (IRC: 8 dias)",
  ligacao:"—",
},

espectro:[
  "Emergências hipertensivas com necessidade de titulação fina (ICA, encefalopatia, dissecção)",
  "Dissecção aórtica (SEMPRE com β-bloq)",
  "Hipotensão controlada em cirurgia",
],

interacoes:[
  {droga:"Sildenafil/tadalafil (inibidores PDE-5)", efeito:"Hipotensão grave — evitar combinação (24-48h após sildenafil)."},
  {droga:"Outros anti-hipertensivos", efeito:"Hipotensão potencializada — reduzir doses."},
],

efeitos:[
  {tipo:"comum", item:"Hipotensão, taquicardia reflexa, náusea, sudorese, cefaleia, ansiedade"},
  {tipo:"sério", item:"TOXICIDADE POR CIANETO: acidose metabólica grave, confusão, convulsão, arritmia, óbito. TOXICIDADE TIOCIANATO: psicose, hipotireoidismo, hipóxia"},
  {tipo:"raro", item:"Meta-hemoglobinemia, hipóxia paradoxal (V/Q mismatch pulmonar)"},
],

alertas:[
  {nivel:"crit", txt:"TOXICIDADE POR CIANETO: suspeitar se acidose metabólica progressiva + lactato alto + saturação venosa elevada + confusão/convulsão. TRATAR: HIDROXOCOBALAMINA 5 g IV em 15 min OU nitrito de sódio 300 mg IV + tiosulfato de sódio 12,5 g IV. Suspender NPS imediatamente."},
  {nivel:"crit", txt:"DISSECÇÃO AÓRTICA: NUNCA usar NPS isolado — vasodilatação reflexa aumenta FC e força de cisalhamento aórtico. SEMPRE iniciar β-bloq ANTES (esmolol/labetalol). Alvo FC <60, PAS <120."},
  {nivel:"warn", txt:"PROTEGER DA LUZ — fotodegrada em <12h. Frasco e equipo cobertos (papel alumínio)."},
  {nivel:"warn", txt:"USO PROLONGADO (>48-72h) ou ALTA DOSE (>4 mcg/kg/min) → maior risco cianeto. Combinar com tiosulfato IV profilático em UTI."},
  {nivel:"warn", txt:"IRC: tiocianato acumula. Evitar em ClCr <30 ou diálise."},
],

preparo:"Reconstituir 50 mg em 2-3 mL SG 5%, depois diluir em 250 mL SG 5% = 200 mcg/mL. PROTEGER DA LUZ (frasco + equipo cobertos). Trocar bolsa cada 24h.",

monitor:"PA invasiva OBRIGATÓRIA em emergência hipertensiva. ECG, perfusão. Gasometria (acidose metabólica = cianeto). Tiocianato sérico se uso >48h.",

diretriz:"ESC Hypertension Emergencies 2023. AHA Aortic Dissection 2022.",
fluxo:null,
calcs:[],
},

/* ============== NITROGLICERINA ============== */
{id:"med-nitroglicerina", classe:"Vasodilatador venoso (predominante) — nitrato", grupo:"vasopressor",
nome:"Nitroglicerina (Tridil)",
sin:["NTG","GTN","Tridil","Nitronal"],
formas:[
  "Ampola 50 mg/10 mL (5 mg/mL) — IV (Tridil)",
  "Comprimido sublingual 0,4 mg",
  "Spray sublingual 0,4 mg/dose",
  "Adesivo transdérmico 5-15 mg/24h",
],
resumo:"Vasodilatador venoso predominante (também arterial em alta dose). 1ª linha em SCA com dor isquêmica e EAP. Pré-carga reduzida → ↓congestão pulmonar.",
dose_rapida:"SL: 0,4 mg cada 5 min até 3× | IV BIC: 5-200 mcg/min",

doses:[
  {ind:"SCA — dor isquêmica", dose:"SL 0,4 mg cada 5 min até 3 doses; persistir → BIC IV 5-10 mcg/min titulada até alívio dor ou redução PA 10%", obs:"Alvo: alívio dor + PAM > 65. NÃO usar se PAS <90 ou IAM VD."},
  {ind:"Edema Agudo de Pulmão (EAP)", dose:"BIC IV 10-20 mcg/min, titular ↑10 mcg cada 3-5 min até melhora dispneia ou PAS 100", obs:"Reduz pré-carga rapidamente. Combinar com VNI + furosemida. SUPER eficaz em EAP hipertensivo."},
  {ind:"Emergência hipertensiva (alternativa ao NPS)", dose:"BIC 5-100 mcg/min", obs:"Útil se SCA concomitante. Menos potente que NPS em arterial."},
  {ind:"ICC descompensada com PAS alta", dose:"BIC 5-50 mcg/min", obs:"Reduz pré- e pós-carga. Bom adjuvante."},
],

ajustes:{
  irc:"Sem ajuste.",
  iht:"Sem ajuste.",
  idoso:"Iniciar dose mais baixa, titular mais lento.",
  gestante:"Categoria B — pode usar em eclâmpsia/EAP gestante (off-label).",
  aleita:"Compatível.",
  ped:"0,25-1 mcg/kg/min IV (raro em emergência pediátrica).",
},

mecanismo:"Liberação de óxido nítrico (NO) endotelial → ↑GMPc → relaxamento musculatura lisa vascular. PREDOMÍNIO VENOSO em baixa dose (<40 mcg/min) — ↓pré-carga → ↓congestão pulmonar + ↓consumo O2. Em ALTA dose (>40 mcg/min) — também vasodilatação arterial → ↓pós-carga + alívio espasmo coronariano (especialmente em angina vasoespástica/Prinzmetal).",

farmacocin:{
  absorc:"SL: 1-3 min | IV: imediata | Adesivo: 12-24h",
  distrib:"Plasma",
  metab:"Hepático (extenso 1ª passagem) + reductase de nitrato",
  elimin:"Renal (metabólitos)",
  meiavida:"1-4 min (curtíssima)",
  ligacao:"60%",
},

espectro:[
  "SCA com dor isquêmica (1ª linha alívio sintomático)",
  "EAP hipertensivo (1ª linha)",
  "Emergência hipertensiva com SCA concomitante",
  "ICC descompensada com PAS alta",
  "Espasmo esofagiano agudo (alívio sintomático)",
],

interacoes:[
  {droga:"Sildenafil/tadalafil (inibidores PDE-5)", efeito:"HIPOTENSÃO GRAVE FATAL — CONTRAINDICADO. Aguardar 24h (sildenafil) ou 48h (tadalafil) antes de NTG."},
  {droga:"Heparina IV", efeito:"NTG pode reduzir efeito anticoagulante — monitorar TTPa, ajustar."},
  {droga:"Álcool", efeito:"Hipotensão potencializada."},
  {droga:"Outros anti-hipertensivos", efeito:"Hipotensão aditiva."},
],

efeitos:[
  {tipo:"comum", item:"Cefaleia pulsátil (40-60%), hipotensão postural, taquicardia reflexa, rubor facial, tontura"},
  {tipo:"sério", item:"Hipotensão grave (especialmente em IAM VD, hipovolêmico), bradicardia paradoxal, síncope"},
  {tipo:"raro", item:"Meta-hemoglobinemia (alta dose prolongada), tolerância em uso contínuo (intervalo 8-12h sem nitrato recomendado em uso crônico)"},
],

alertas:[
  {nivel:"crit", txt:"CONTRAINDICADO com SILDENAFIL/TADALAFIL (PDE-5) nas últimas 24-48h — hipotensão fatal. PERGUNTAR antes de prescrever."},
  {nivel:"crit", txt:"IAM DE VENTRÍCULO DIREITO (V3R com supra): vasodilatação venosa reduz pré-carga já comprometida → CHOQUE. EVITAR. Em IAM inferior: cuidado, fazer V3R/V4R sempre."},
  {nivel:"warn", txt:"HIPOVOLEMIA: corrigir volume ANTES (preferir SF 250-500 mL bolus). NTG em hipovolêmico → hipotensão grave."},
  {nivel:"warn", txt:"TOLERÂNCIA: efeito reduz em 24-48h de uso contínuo. Em uso crônico: intervalo 8-12h sem nitrato (transdérmico fora à noite)."},
  {nivel:"info", txt:"CEFALEIA é o efeito MAIS COMUM (40-60%) — sintoma de boa absorção, não de overdose."},
],

preparo:"BIC: 50 mg (1 amp Tridil) em 250 mL SG 5% = 200 mcg/mL. Para 10 mcg/min = 3 mL/h. USAR EQUIPO DE PVC ESPECIAL ou polietileno (PVC comum absorve NTG, reduz dose ~40%). SL: comprimido ou spray, paciente sentado (risco síncope).",

monitor:"PA contínua (idealmente invasiva em BIC), FC, ECG, perfusão. SpO2. Em EAP: ausculta + diurese.",

diretriz:"ESC ACS 2023. AHA STEMI 2013. ESC Acute Heart Failure 2021.",
fluxo:null,
calcs:[],
},

/* ============== ESMOLOL ============== */
{id:"med-esmolol", classe:"β1-bloqueador IV — cardiosseletivo ultra-curto", grupo:"vasopressor",
nome:"Esmolol",
sin:["Brevibloc","Brevbloc"],
formas:[
  "Ampola 100 mg/10 mL (10 mg/mL)",
  "Frasco 2500 mg/250 mL (10 mg/mL) — para BIC",
],
resumo:"β1-bloqueador IV ultracurta ação. Padrão em dissecção aórtica, tireotoxicose, FA com RVR pós-operatório, emergência hipertensiva com taquicardia.",
dose_rapida:"Bolus 500 mcg/kg IV em 1 min + BIC 50-200 mcg/kg/min",

doses:[
  {ind:"Dissecção aórtica (controle FC + dP/dt)", dose:"Bolus 500 mcg/kg + BIC 50-200 mcg/kg/min", obs:"Alvo FC <60, PAS <120 ANTES de iniciar vasodilatador (NPS). Esmolol é PREFERIDO (ajuste rápido)."},
  {ind:"Emergência hipertensiva com taquicardia", dose:"Bolus 500 mcg/kg + BIC titulada", obs:"Especialmente útil em tireotoxicose, feocromocitoma pós-α-bloq, peri-operatório."},
  {ind:"FA com RVR (controle agudo)", dose:"Bolus 500 mcg/kg + BIC 50-200 mcg/kg/min", obs:"Alternativa a metoprolol/diltiazem em pacientes que podem necessitar β-bloq curto (peri-op, instabilidade)."},
  {ind:"Tireotoxicose grave / crise tireoidiana", dose:"Bolus + BIC", obs:"Combina com propiltiouracil + iodeto + hidrocortisona."},
],

ajustes:{
  irc:"Sem ajuste — não metabolizado renalmente.",
  iht:"Sem ajuste rotineiro.",
  idoso:"Reduzir bolus inicial 25%.",
  gestante:"Categoria C — preferir labetalol/hidralazina em pré-eclâmpsia. Pode usar em taquicardia materna grave.",
  aleita:"Compatível em uso agudo.",
  ped:"100-500 mcg/kg/min IV (uso especializado).",
},

mecanismo:"β1-bloqueador cardiosseletivo. Bloqueia β1 cardíaco → ↓cronotropismo (FC) + ↓inotropismo (DC) + ↓velocidade condução AV. Efeito β2 mínimo (broncoconstrição limitada vs propranolol). Metabolizado por esterases plasmáticas em hemácias → ácido inativo. INDEPENDENTE de fígado/rim.",

farmacocin:{
  absorc:"IV apenas",
  distrib:"Plasma + fluido extracelular",
  metab:"Esterases plasmáticas (não-CYP)",
  elimin:"Renal (metabólitos)",
  meiavida:"9 min (!!) — efeito cessa em 10-20 min após suspender",
  ligacao:"55%",
},

espectro:[
  "Dissecção aórtica (controle FC + dP/dt)",
  "Emergência hipertensiva com taquicardia",
  "FA com RVR pós-operatório (titulação fina)",
  "Tireotoxicose grave",
  "Estimulação simpática perioperatória",
],

interacoes:[
  {droga:"Outros β-bloqueadores", efeito:"Bradicardia/BAV — não combinar."},
  {droga:"BCC não-DHP (verapamil, diltiazem)", efeito:"Bradicardia/BAV grave — combinar com extrema cautela."},
  {droga:"Digoxina", efeito:"Bradicardia aditiva — monitor."},
  {droga:"Anestésicos halogenados", efeito:"Depressão miocárdica aditiva."},
],

efeitos:[
  {tipo:"comum", item:"Hipotensão (esperada — titular), bradicardia, broncoespasmo leve em asmático/DPOC, náusea"},
  {tipo:"sério", item:"Bradicardia/BAV graves, hipotensão sintomática, broncoespasmo em asmático, IC aguda descompensada"},
  {tipo:"raro", item:"Confusão, fadiga, depressão (uso prolongado pouco comum)"},
],

alertas:[
  {nivel:"crit", txt:"BLOQUEIO AV: contraindicado em BAV 2°/3° grau sem MP. Bradicardia <50 inicial: contraindicação relativa."},
  {nivel:"crit", txt:"ASMA ATIVA / BRONCOESPASMO: contraindicação relativa — preferir labetalol (β-bloq + α-bloq) ou diltiazem se asma + emergência hipertensiva."},
  {nivel:"warn", txt:"DISSECÇÃO AÓRTICA: SEMPRE β-bloq ANTES de vasodilatador (NPS). Sem β-bloq, NPS isolado aumenta cisalhamento aórtico → expansão dissecção."},
  {nivel:"warn", txt:"IC AGUDA DESCOMPENSADA: contraindicado — pode precipitar choque cardiogênico."},
  {nivel:"info", txt:"VANTAGEM: meia-vida 9 min permite ajuste rápido — se hipotensão, suspender → efeito cessa em 10-20 min (vs metoprolol 3-5h)."},
],

preparo:"BIC: 2500 mg em 250 mL SF/SG 5% = 10 mg/mL. Para 70 kg @ 100 mcg/kg/min: 7 mg/min = 42 mL/h. Compatível com SF e SG.",

monitor:"PA invasiva preferencial, ECG contínuo (FC, BAV), perfusão, ausculta pulmonar (broncoespasmo). Glicemia (β-bloq pode mascarar hipoglicemia em diabético).",

diretriz:"AHA Aortic Dissection 2022. ESC Hypertension Emergencies 2023. ESC AF 2024.",
fluxo:null,
calcs:[],
},

/* ============== HIDRALAZINA ============== */
{id:"med-hidralazina", classe:"Vasodilatador arterial direto", grupo:"vasopressor",
nome:"Hidralazina",
sin:["Apresolina","Apresoline"],
formas:[
  "Ampola 20 mg/mL (1 mL)",
  "Comprimidos 25 mg, 50 mg (uso crônico)",
],
resumo:"Vasodilatador arterial seletivo. 1ª linha em pré-eclâmpsia/eclâmpsia grave (gestante). Alternativa em emergência hipertensiva. Causa taquicardia reflexa.",
dose_rapida:"Pré-eclâmpsia: 5-10 mg IV cada 20 min | Crônico: 25-100 mg VO 6/6h",

doses:[
  {ind:"Pré-eclâmpsia / eclâmpsia grave (PA ≥160/110)", dose:"5-10 mg IV bolus, repetir 20 mg cada 20 min (máx 30 mg total)", obs:"Alvo: PA 140-150/90-100. NÃO reduzir abruptamente (risco hipoperfusão fetal). 1ª linha gestante."},
  {ind:"Emergência hipertensiva (alternativa)", dose:"5-20 mg IV cada 20-40 min", obs:"Não preferida em geral (taquicardia reflexa, imprevisível) — preferir NPS/labetalol. Útil quando outros indisponíveis."},
  {ind:"IC com FE reduzida (afro-americano, intolerante a IECA)", dose:"VO 25-50 mg 8/8h (com isossorbida)", obs:"Combinação hidralazina+isossorbida (A-HeFT trial). Cardiologia."},
  {ind:"Pediatria — hipertensão grave", dose:"0,1-0,2 mg/kg IV cada 4-6h", obs:"Especializado."},
],

ajustes:{
  irc:"ClCr <30: aumentar intervalo (8/8h).",
  iht:"IH grave: reduzir dose e monitor.",
  idoso:"Sem ajuste mas cuidado com taquicardia reflexa.",
  gestante:"Categoria C — PREFERIDA em pré-eclâmpsia grave (longa experiência).",
  aleita:"Compatível.",
  ped:"0,1-0,2 mg/kg IV.",
},

mecanismo:"Vasodilatação arterial direta por mecanismo incompletamente esclarecido (provável liberação de NO + abertura canais K-ATP). PREDOMÍNIO ARTERIAL (vs nitratos que são venosos). Causa taquicardia reflexa (compensatória) + retenção de Na+/H2O.",

farmacocin:{
  absorc:"IV imediata | IM: 10-20 min | VO: 30 min (biodisp variável por acetilação)",
  distrib:"Ampla, atravessa placenta",
  metab:"Hepático (acetilação — 50% população 'acetiladores lentos' tem maior risco lúpus-like)",
  elimin:"Renal (metabólitos)",
  meiavida:"3-7h",
  ligacao:"85%",
},

espectro:[
  "Pré-eclâmpsia / eclâmpsia grave (1ª linha)",
  "Emergência hipertensiva (alternativa)",
  "IC com FE reduzida (combinada com isossorbida)",
  "HAS resistente em pediatria",
],

interacoes:[
  {droga:"Sulfato de magnésio (em eclâmpsia)", efeito:"Hipotensão potencializada — ajustar doses, monitor PA."},
  {droga:"AINE", efeito:"Reduz efeito anti-hipertensivo (retenção sódio)."},
  {droga:"β-bloqueadores", efeito:"Bom combinação (β-bloq controla taquicardia reflexa)."},
],

efeitos:[
  {tipo:"comum", item:"Taquicardia reflexa, cefaleia, rubor, palpitação, náusea, retenção sódio/H2O"},
  {tipo:"sério", item:"Hipotensão grave (especialmente em hipovolemia), isquemia miocárdica em coronariopata (taquicardia + ↑demanda)"},
  {tipo:"raro", item:"SÍNDROME LÚPUS-LIKE (uso crônico, especialmente acetiladores lentos) — artralgia, rash, febre, ANA+ (reversível)"},
],

alertas:[
  {nivel:"crit", txt:"PRÉ-ECLÂMPSIA: NÃO reduzir PA abruptamente — risco hipoperfusão fetal + descolamento prematuro placenta. Alvo 140-150/90-100 em 1-2h."},
  {nivel:"crit", txt:"DISSECÇÃO AÓRTICA: CONTRAINDICADO — taquicardia reflexa AUMENTA cisalhamento aórtico. Usar esmolol + NPS."},
  {nivel:"warn", txt:"DOENÇA CORONARIANA: cautela — taquicardia reflexa pode precipitar isquemia. Combinar com β-bloq."},
  {nivel:"warn", txt:"USO CRÔNICO: dosar ANA basal + anual. Síndrome lúpus-like em 5-10% (>200 mg/d), especialmente acetiladores lentos."},
  {nivel:"info", txt:"Em PRÉ-ECLÂMPSIA: hidralazina IV é tradicional, mas LABETALOL IV (10-20 mg IV cada 10 min) é alternativa moderna comparável (e melhor controle FC)."},
],

preparo:"Ampola 20 mg/mL. Pode ser puro IV bolus em 1-2 min OU diluir 20 mg em 20 mL SF/SG (1 mg/mL).",

monitor:"PA cada 5-10 min até estável, depois 15/15 min. FC, perfusão. Em gestante: BCF + monitorização contínua fetal. Sinais de IAM.",

diretriz:"ACOG Hypertension in Pregnancy 2020. SOGC Pre-eclampsia. AHA Heart Failure 2022.",
fluxo:null,
calcs:[],
},

/* ============== AMIODARONA ============== */
{id:"med-amiodarona", classe:"Antiarrítmico Classe III (predominante)", grupo:"antiarritmico",
nome:"Amiodarona",
sin:["Ancoron","Cordarone"],
formas:[
  "Ampola 150 mg/3 mL (50 mg/mL)",
  "Comprimidos 100 mg, 200 mg",
],
resumo:"Antiarrítmico de amplo espectro — TV, FA, PCR (FV/TV refratária). Múltiplos efeitos adversos crônicos (tireoide, pulmão, olho, fígado).",
dose_rapida:"PCR: 300 mg IV bolus | TV estável: 150 mg IV em 10 min + BIC",

doses:[
  {ind:"PCR — FV/TV sem pulso refratária", dose:"300 mg IV bolus, repetir 150 mg após 3-5 min se persistir", obs:"Após 3º choque desfibrilação + adrenalina. AHA ACLS."},
  {ind:"TV monomórfica estável", dose:"150 mg IV em 10 min; manter 1 mg/min × 6h, depois 0,5 mg/min × 18h", obs:"Dose total 24h ~1g. Considerar cardioversão se instabilidade."},
  {ind:"FA — reversão química (uso seletivo)", dose:"5 mg/kg IV em 30-60 min, depois manutenção", obs:"NÃO 1ª linha em FA estável (preferir diltiazem/β-bloq para controle FC). Útil em cardiopata, WPW."},
  {ind:"Profilaxia TV recorrente (CDI)", dose:"VO: ataque 400-600 mg/d × 4-6 sem, depois 200 mg/d", obs:"Cardiologia. Monitor tireoide, fígado, pulmão."},
  {ind:"Pediatria — PCR", dose:"5 mg/kg IV bolus", obs:"Arritmia estável: 5 mg/kg em 20-60 min."},
],

ajustes:{
  irc:"Sem ajuste.",
  iht:"Sem ajuste mas MONITOR TGO/TGP — risco hepatotoxicidade.",
  idoso:"Sem ajuste — maior incidência de hipotireoidismo.",
  gestante:"Categoria D — fetotoxicidade tireoidiana. Apenas se SEM alternativa.",
  aleita:"CONTRAINDICADO (concentra em leite, afeta tireoide neonato).",
  ped:"5 mg/kg PCR; 5 mg/kg em 20-60 min em arritmia estável.",
},

mecanismo:"Vaughan-Williams CLASSE III predominante: bloqueia canais K⁺ → prolonga repolarização e período refratário → interrompe reentrada. Também CLASSE I (Na⁺), CLASSE II (β-bloq), CLASSE IV (Ca²⁺) — pan-antiarrítmico. Antagonismo α e β adrenérgico.",

farmacocin:{
  absorc:"VO: 30-50% (variável)",
  distrib:"ENORME volume distribuição — acumula em tecidos lipídicos (pulmão, fígado, gordura, miocárdio)",
  metab:"Hepático CYP3A4 → desetilamiodarona (ativa, T½ ainda mais longa)",
  elimin:"Fezes/bile (SEM eliminação renal significativa)",
  meiavida:"IV: 9-36 dias (!!) | VO crônico: 25-100 dias",
  ligacao:"96%",
},

espectro:[
  "PCR — FV/TV refratária (1ª linha pós-3º choque + adrenalina)",
  "TV monomórfica estável",
  "FA — reversão química em cardiopata, WPW",
  "Profilaxia TV recorrente em CDI",
],

interacoes:[
  {droga:"Varfarina", efeito:"↑INR 50-100% — REDUZIR varfarina 30-50%, monitorar INR."},
  {droga:"Digoxina", efeito:"↑ digoxina 50-70% — REDUZIR digoxina 50%, dosar nível."},
  {droga:"Estatinas (sinvastatina, atorvastatina)", efeito:"↑ risco rabdomiólise — limitar sinvastatina 20 mg/d, preferir prava/rosuvastatina."},
  {droga:"β-bloq, BCC", efeito:"Bradicardia/BAV — cautela, monitor ECG."},
  {droga:"Macrolídeos, quinolonas, antipsicóticos", efeito:"QT longo, Torsades — evitar combinação."},
],

efeitos:[
  {tipo:"comum", item:"Bradicardia, hipotensão (IV), náusea, anorexia, constipação, fotossensibilidade, microdepósitos corneanos (assintomático)"},
  {tipo:"sério_agudo", item:"Bradiarritmia/BAV, hipotensão IV, hepatite aguda, QT longo (Torsades raro)"},
  {tipo:"sério_cronico", item:"TOXICIDADE PULMONAR (pneumonite/fibrose 1-15%), HIPO/HIPERTIREOIDISMO (10-15%), HEPATOTOXICIDADE, neuropatia periférica, pigmentação cutânea azul-acinzentada, ginecomastia"},
],

alertas:[
  {nivel:"crit", txt:"MEIA-VIDA ULTRA-LONGA: efeito persiste SEMANAS após suspender. Cuidado em interações tardias (varfarina, digoxina podem precisar ajuste 2-3 meses pós-suspensão)."},
  {nivel:"crit", txt:"FLEBITE intensa em via periférica — preferir VIA CENTRAL para BIC ≥24h."},
  {nivel:"warn", txt:"AVALIAÇÃO PRÉ-USO CRÔNICO: TSH, TGO/TGP, RX tórax, ECG, exame oftalmológico."},
  {nivel:"warn", txt:"MONITORIZAÇÃO crônica: TSH 6/6m, TGO/TGP 6/6m, RX/TC tórax anual, oftalmo anual. Vigilância clínica para tosse seca/dispneia (pneumonite)."},
  {nivel:"info", txt:"AMIODARONA contém 37% IODO — contraindicada em hipersensibilidade ao iodo. Risco disfunção tireoidiana em pacientes predisponentes."},
],

preparo:"Bolus PCR: 300 mg (2 amp) IV idealmente em 20 mL SG 5%. BIC inicial: 900 mg em 500 mL SG 5% = 1,8 mg/mL, correr 33 mL/h = 1 mg/min × 6h. Manutenção: depois 0,5 mg/min × 18h = 16,5 mL/h. DILUIR EM SG 5% (instável em SF).",

monitor:"ECG contínuo (QT, FC, ritmo), PA, transaminases (semanal em uso prolongado), TSH (basal + 6/6m crônico), RX tórax anual. Vigilância para tosse/dispneia.",

diretriz:"AHA ACLS 2020. ESC AF 2024. ACC/AHA Ventricular Arrhythmia 2017.",
fluxo:null,
calcs:[],
},

/* ============== ADENOSINA ============== */
{id:"med-adenosina", classe:"Antiarrítmico — nucleosídeo purínico", grupo:"antiarritmico",
nome:"Adenosina",
sin:["Adenocard","Striadyne"],
formas:[
  "Ampola 6 mg/2 mL (3 mg/mL)",
],
resumo:"Bloqueador AV transitório ultracurto. PADRÃO em TSV (TPSV reentrada nodal/AV) — interrompe circuito em segundos. Também diagnóstica em TV vs TSV-aberrante.",
dose_rapida:"6 mg IV bolus rápido + flush; se não reverter, 12 mg, repetir 12 mg",

doses:[
  {ind:"TSV (TPSV) — cardioversão química", dose:"6 mg IV RÁPIDO + flush 20 mL SF; se não reverter em 1-2 min: 12 mg; se ainda não: 12 mg adicional", obs:"VIA: cubital direita preferida (mais próxima coração). Levantar braço pós-bolus."},
  {ind:"Diagnóstico TSV vs TV (taquicardia regular complexo largo)", dose:"6-12 mg IV", obs:"Em TSV: reverte ou desmascara onda P/atriais. Em TV: sem efeito. Cuidado: pode degenerar para FV em WPW com FA."},
  {ind:"Pediatria — TSV", dose:"0,1 mg/kg (máx 6 mg); 2ª e 3ª dose 0,2 mg/kg (máx 12 mg)", obs:"Mesma técnica: rápido + flush."},
],

ajustes:{
  irc:"Sem ajuste — metabolismo intracelular ultra-rápido.",
  iht:"Sem ajuste.",
  idoso:"Sem ajuste rotineiro.",
  gestante:"Categoria C — segura em TSV materna; preferir em vez de outros antiarrítmicos.",
  aleita:"Compatível (meia-vida <10 seg).",
  ped:"0,1 mg/kg; 2ª/3ª 0,2 mg/kg.",
},

mecanismo:"Agonista receptor A1 adenosina → ↑K⁺ outward + ↓AMPc → hiperpolarização nodal → BLOQUEIO AV TRANSITÓRIO (5-10 seg) → interrompe circuito de reentrada nodal/AV. Efeito ULTRA-CURTO (meia-vida <10 seg — degradada por adenosina-deaminase em hemácias).",

farmacocin:{
  absorc:"IV apenas (bolus rápido)",
  distrib:"Intracelular rápido (hemácias)",
  metab:"Adenosina-deaminase (em hemácias e endotélio)",
  elimin:"Conversão intracelular (não excretada)",
  meiavida:"<10 segundos",
  ligacao:"—",
},

espectro:[
  "TSV (TPSV reentrada nodal/AV)",
  "Diagnóstico TV vs TSV-aberrante",
  "Teste de estresse farmacológico (uso especializado)",
  "Hipertensão pulmonar (vasodilatação seletiva — uso especializado)",
],

interacoes:[
  {droga:"Dipiridamol", efeito:"POTENCIALIZA muito — reduzir adenosina 75%."},
  {droga:"Carbamazepina", efeito:"Potencializa bloqueio AV — cautela."},
  {droga:"Cafeína, teofilina", efeito:"ANTAGONISTA — reduz efeito; pode necessitar dose maior. PERGUNTAR: 'tomou café/chá?'"},
],

efeitos:[
  {tipo:"comum", item:"Sensação de morte iminente, rubor, dispneia, dor torácica — TODOS TRANSITÓRIOS (<10 seg). AVISAR paciente antes!"},
  {tipo:"sério", item:"Pausa sinusal/assistolia transitória (5-15 seg — esperada), broncoespasmo (asma grave), FA com WPW pode degenerar para FV"},
  {tipo:"raro", item:"Bradicardia prolongada (raríssima), reação anafilactoide"},
],

alertas:[
  {nivel:"crit", txt:"BOLUS RÁPIDO + FLUSH ÚNICO via cubital direita: técnica crucial. Se feito devagar, adenosina degrada antes de chegar ao coração."},
  {nivel:"crit", txt:"FA com WPW (taquicardia irregular complexo largo): CONTRAINDICADA — adenosina pode bloquear nó AV permitindo via acessória conduzir 1:1 → FV. CARDIOVERSÃO ELÉTRICA."},
  {nivel:"crit", txt:"ASMA GRAVE: contraindicação relativa — broncoespasmo em 10-15%. Em TSV+asma: VERAPAMIL ou cardioversão."},
  {nivel:"warn", txt:"AVISAR PACIENTE: 'vai sentir desconforto torácico/falta de ar por 5-10 segundos, é normal e passa.' Reduz pânico."},
  {nivel:"warn", txt:"PAUSA SINUSAL/ASSISTOLIA 5-15 segundos é ESPERADA — desfibrilador pronto mas geralmente não necessita."},
  {nivel:"info", txt:"DOSE EM USUÁRIOS DE CAFEÍNA/TEOFILINA: pode necessitar 12 mg de início (efeito reduzido)."},
],

preparo:"PURA — NÃO diluir. 6 mg = 2 mL puro IV em 1-2 segundos + IMEDIATAMENTE 20 mL SF flush em bolus. Técnica de TORNEIRA EM Y (3-way stopcock) facilita.",

monitor:"ECG contínuo (registrar tira longa), PA, SpO2. Desfibrilador pronto.",

diretriz:"AHA ACLS 2020. ESC Supraventricular Tachycardia 2019.",
fluxo:null,
calcs:[],
},

/* ============== VANCOMICINA ============== */
{id:"med-vancomicina", classe:"Antibiótico — glicopeptídeo", grupo:"atb",
nome:"Vancomicina",
sin:["Vancocin","Vancomax"],
formas:[
  "Frasco-pó 500 mg, 1 g IV (reconstituir)",
  "Cápsulas 125 mg, 250 mg VO (apenas C. difficile)",
],
resumo:"Glicopeptídeo IV — gold standard MRSA. Cobre Gram+ resistentes. Necessita monitorização de nível sérico. NUNCA absorvida VO (uso oral apenas em C. difficile).",
dose_rapida:"15-20 mg/kg IV 12/12h (peso real até 100 kg) — monitor nível-vale",

doses:[
  {ind:"Infecção MRSA (PAC, ITU, bacteremia, pele)", dose:"15-20 mg/kg IV 12/12h (peso real até 100 kg); ataque 25-30 mg/kg em sepse grave", obs:"Alvo nível-vale: 15-20 mcg/mL em infecções graves; 10-15 em outras."},
  {ind:"Meningite bacteriana (cobertura empírica)", dose:"15-20 mg/kg IV 8/8h (alvo vale 15-20)", obs:"Combinada com ceftriaxona ± ampicilina ± dexa."},
  {ind:"Endocardite (Gram+ resistente)", dose:"15-20 mg/kg IV 12/12h, ajustar pela AUC/MIC", obs:"Duração 4-6 sem. Cardiologia/Infectologia."},
  {ind:"Sepse hospitalar / sepse com suspeita MRSA", dose:"25-30 mg/kg ataque + 15-20 mg/kg 12/12h", obs:"Combinar com pip-tazo ou meropenem."},
  {ind:"Colite por C. difficile (uso VO)", dose:"125 mg VO 6/6h × 10 dias", obs:"Quadros leves-moderados: pode usar metronidazol (mas vanco é preferida atual). Quadros graves: 500 mg 6/6h. NUNCA usar IV para C. diff."},
  {ind:"Pediatria", dose:"15 mg/kg IV 6/6h (60 mg/kg/d)", obs:"Ataque 20 mg/kg. Monitor nível."},
],

ajustes:{
  irc:"AJUSTAR conforme ClCr — ClCr 50-80: 12/12h; ClCr 20-50: 24/24h; ClCr <20 ou diálise: dose única + nível para repetir.",
  iht:"Sem ajuste rotineiro.",
  idoso:"Eliminação reduzida — ajustar por ClCr.",
  gestante:"Categoria C — atravessa placenta. Usar se benefício > risco em infecção grave.",
  aleita:"Compatível (não absorvida VO).",
  ped:"15 mg/kg IV 6/6h.",
},

mecanismo:"Glicopeptídeo bactericida — liga-se ao precursor D-Ala-D-Ala da parede celular bacteriana Gram+ → inibe síntese de peptidoglicano → lise bacteriana. NÃO age em Gram- (parede externa impede penetração).",

farmacocin:{
  absorc:"VO: NÃO absorvida (uso oral SOMENTE em C. difficile, ação local intestinal)",
  distrib:"Boa em tecidos (pulmão, ossos, articulações). Penetração SNC LIMITADA — necessita meninge inflamada + dose alta",
  metab:"Mínimo (excretada inalterada)",
  elimin:"Renal (90% inalterada por filtração glomerular)",
  meiavida:"4-11h (depende função renal)",
  ligacao:"30-50% (proteínas)",
},

espectro:[
  "Gram+ resistentes: MRSA, MRSE (S. epidermidis resistente), enterococos sensíveis (VRE não)",
  "C. difficile (uso VO)",
  "Estreptococos resistentes a penicilina",
  "NÃO cobre Gram- nem anaeróbios — combinar para cobertura ampla",
],

interacoes:[
  {droga:"Aminoglicosídeos", efeito:"Nefrotoxicidade aditiva — combinar com cautela, monitor ClCr."},
  {droga:"Pip-tazo", efeito:"Estudo recente sugere ↑risco IRA (vs cefepime+vanco) — cuidado em combinação."},
  {droga:"Furosemida", efeito:"Nefrotoxicidade/ototoxicidade aditiva."},
  {droga:"Heparina", efeito:"Incompatível em Y-site (precipitação)."},
],

efeitos:[
  {tipo:"comum", item:"Síndrome do Homem Vermelho (rubor cervical/facial por infusão rápida — liberação histamínica, NÃO é alergia)"},
  {tipo:"sério", item:"NEFROTOXICIDADE (10-25% — dose-dependente, especialmente nível-vale >20), OTOTOXICIDADE (zumbido, perda auditiva — alta dose prolongada), C. difficile super-infecção"},
  {tipo:"raro", item:"DRESS (rash + eosinofilia + sintomas sistêmicos), pancitopenia, hepatotoxicidade"},
],

alertas:[
  {nivel:"crit", txt:"SÍNDROME DO HOMEM VERMELHO (RED MAN SYNDROME): rubor cervical/facial + prurido + hipotensão por INFUSÃO RÁPIDA. NÃO é alergia (é liberação histamínica). PREVENIR: infundir em ≥60 min por dose. TRATAR: parar/desacelerar, anti-histamínico."},
  {nivel:"crit", txt:"NEFROTOXICIDADE — monitor CREATININA basal + 48-72h + semanal. Risco aumenta com: nível-vale >20, duração >7 dias, IRC prévia, combinação com pip-tazo ou aminoglicosídeo."},
  {nivel:"warn", txt:"NÍVEL-VALE (15-20 mcg/mL para sepse grave/SNC/endocardite; 10-15 para outras): dosar antes da 3ª-4ª dose (steady-state)."},
  {nivel:"warn", txt:"OBESIDADE: usar PESO REAL até 100 kg, depois fórmulas específicas (AUC). Subdosagem é problema comum."},
  {nivel:"info", txt:"VO NUNCA é absorvida — usar APENAS em C. difficile (ação local). Para infecção sistêmica: SEMPRE IV."},
],

preparo:"Reconstituir 500 mg em 10 mL ABD ou SF; diluir em 100 mL SF/SG 5% (5 mg/mL). Para 1 g: 250 mL. INFUNDIR EM 60 MIN (15 mg/min máximo). Compatível com SF e SG.",

monitor:"Creatinina basal + 48h + 2-3×/sem. Nível-vale (antes 3ª-4ª dose). Audiometria se uso >2 semanas em risco. Hemograma. Vigilância clínica para C. difficile.",

diretriz:"IDSA MRSA 2011/2020. IDSA Endocardite 2015. ASHP Vancomycin Therapeutic Monitoring 2020.",
fluxo:null,
calcs:[],
},

/* ============== PIPERACILINA-TAZOBACTAM ============== */
{id:"med-piptazo", classe:"Antibiótico — β-lactâmico + inibidor β-lactamase", grupo:"atb",
nome:"Piperacilina-Tazobactam",
sin:["Tazocin","Tazopen","PipTazo","Zosyn"],
formas:[
  "Frasco-pó 2,25 g (2g pip + 0,25g tazo)",
  "Frasco-pó 4,5 g (4g pip + 0,5g tazo) — mais usado",
],
resumo:"Penicilina antipseudomonas + inibidor β-lactamase. Padrão em sepse hospitalar, pneumonia hospitalar (PAH/PAVM), infecção abdominal grave, neutropenia febril.",
dose_rapida:"4,5 g IV 8/8h em infusão estendida 4h | Sepse grave: 4,5 g 6/6h",

doses:[
  {ind:"Sepse hospitalar / PAH / PAVM", dose:"4,5 g IV 6/6h ou 8/8h em infusão estendida 4h", obs:"Infusão estendida melhora T>MIC. Combinar com vanco se MRSA suspeita."},
  {ind:"Infecção intra-abdominal complicada (peritonite, abscesso)", dose:"4,5 g IV 6/6h ou 8/8h × 4-7 dias", obs:"Cobre Bacteroides + enterococos sensíveis + Gram-."},
  {ind:"Neutropenia febril", dose:"4,5 g IV 6/6h", obs:"Combinar com vanco se mucosite/sepse/cateter. Aminoglicosídeo se choque/multi-resistência."},
  {ind:"Pé diabético infectado grave", dose:"4,5 g IV 8/8h × 14-21 dias", obs:"Cobre flora polimicrobiana incluindo anaeróbios e Gram-."},
  {ind:"Pediatria", dose:"100 mg/kg/dose (pip) IV 8/8h", obs:"Máx 4,5 g/dose."},
],

ajustes:{
  irc:"ClCr 20-40: 4,5 g 8/8h; ClCr <20: 2,25 g 6/6h; HD: 2,25 g 8/8h + 0,75 g pós-HD.",
  iht:"Sem ajuste rotineiro.",
  idoso:"Ajustar por ClCr (CKD-EPI).",
  gestante:"Categoria B — segura.",
  aleita:"Compatível.",
  ped:"100 mg/kg/dose (pip) 8/8h.",
},

mecanismo:"PIPERACILINA: penicilina semissintética, liga PBPs → inibe síntese parede celular → lise. TAZOBACTAM: inibidor de β-lactamases (Tipo A: TEM, SHV) → protege piperacilina de hidrólise. JUNTOS cobrem amplo espectro Gram-, anaeróbios, enterococos sensíveis.",

farmacocin:{
  absorc:"IV apenas (sem absorção VO significativa)",
  distrib:"Boa em pulmão, peritônio, urina. Limitada em SNC.",
  metab:"Pip: 30% hepático. Tazo: 30% hepático.",
  elimin:"Renal (70-80%)",
  meiavida:"1h (curta — necessita doses frequentes/infusão estendida)",
  ligacao:"~30%",
},

espectro:[
  "Gram+: Estreptococos, enterococos sensíveis (NÃO VRE), Listeria",
  "Gram-: E. coli, Klebsiella (NÃO ESBL), Enterobacter, Serratia, Pseudomonas aeruginosa, Acinetobacter (alguns)",
  "Anaeróbios: B. fragilis, Clostridium (NÃO C. difficile)",
  "NÃO COBRE: MRSA, ESBL, VRE, Atypicos (Mycoplasma, Legionella)",
],

interacoes:[
  {droga:"Aminoglicosídeos", efeito:"INATIVAÇÃO MÚTUA in vitro — não administrar Y-site, infundir separado por ≥1h."},
  {droga:"Vancomicina", efeito:"Aumenta risco IRA aguda (estudo recente — cefepime+vanco pode ser preferido em ambiente com alto risco renal)."},
  {droga:"Probenecida", efeito:"Aumenta concentração pip-tazo (sem benefício clínico)."},
  {droga:"Varfarina", efeito:"Pode prolongar TP — monitor INR."},
],

efeitos:[
  {tipo:"comum", item:"Diarreia, náusea, rash, eosinofilia, ↑ transaminases, dor injeção"},
  {tipo:"sério", item:"Anafilaxia (rara), IRA aguda especialmente em combinação com vanco, C. difficile, neutropenia em uso prolongado >2 sem"},
  {tipo:"raro", item:"DRESS, Stevens-Johnson, encefalopatia em IRC, hipocalemia"},
],

alertas:[
  {nivel:"crit", txt:"PIP-TAZO + VANCO: estudos recentes sugerem ↑risco IRA aguda vs cefepime+vanco. Considerar alternativa em paciente com risco renal/já com função reduzida."},
  {nivel:"crit", txt:"ALERGIA A PENICILINA: reação cruzada possível — em anafilaxia IgE documentada à PNC, EVITAR (preferir carbapenem com cautela ou ATB não-β-lactâmico)."},
  {nivel:"warn", txt:"INFUSÃO ESTENDIDA (4h) melhora T>MIC para Pseudomonas — recomendação atual em sepse grave. Bolus 30 min apenas se não há infraestrutura."},
  {nivel:"warn", txt:"NÃO COBRE ESBL: em paciente com colonização ESBL prévia ou sepse hospitalar refratária, considerar ESCALONAMENTO para carbapenem (meropenem/imipenem)."},
  {nivel:"info", txt:"DOSE ALTA HIPONATRIA: pip-tazo 4,5 g tem ~12 mEq Na+/dose × 4 doses = 48 mEq/d. Em paciente com IC/IRC: monitor Na+ e volume."},
],

preparo:"Reconstituir 4,5 g em 20 mL SF; diluir em 100 mL SF/SG 5% (45 mg/mL). Infundir em 30 min (bolus padrão) ou ESTENDIDA em 4h (recomendado em sepse grave). Estável 24h.",

monitor:"Creatinina basal + 48-72h + semanal (especialmente com vanco). Hemograma (neutropenia uso prolongado). Sintomas C. difficile.",

diretriz:"IDSA HAP/VAP 2016. Surviving Sepsis 2021. IDSA Intra-Abdominal 2010.",
fluxo:null,
calcs:[],
},

/* ============== MEROPENEM ============== */
{id:"med-meropenem", classe:"Antibiótico — carbapenem", grupo:"atb",
nome:"Meropenem",
sin:["Meronem","Merrem"],
formas:[
  "Frasco-pó 500 mg, 1 g IV",
],
resumo:"Carbapenem de amplo espectro — Gram+/Gram-/anaeróbios incluindo ESBL e Pseudomonas. Reservado para infecções graves/multirresistentes. Penetra SNC.",
dose_rapida:"1-2 g IV 8/8h (infusão estendida 3h recomendada em sepse grave)",

doses:[
  {ind:"Sepse hospitalar / sepse multirresistente / pós-cirúrgica grave", dose:"1-2 g IV 8/8h em infusão estendida 3h", obs:"1ª linha em sepse com risco ESBL/Pseudomonas resistente. Reservar para indicações claras (evitar resistência KPC)."},
  {ind:"Meningite bacteriana (alternativa)", dose:"2 g IV 8/8h", obs:"Útil em Pseudomonas, alergia grave a β-lactâmicos, falência ceftriaxona. Combinar com vanco."},
  {ind:"Pneumonia hospitalar grave / PAVM com ESBL", dose:"1-2 g IV 8/8h em infusão 3h", obs:"Combinar com vanco se MRSA. Linezolida se Pseudomonas resistente a aminoglicosídeo."},
  {ind:"Infecção intra-abdominal complicada com sepse", dose:"1 g IV 8/8h × 4-7 dias", obs:"Especialmente se ESBL ou pós-cirúrgica."},
  {ind:"Neutropenia febril com choque", dose:"1-2 g IV 8/8h", obs:"Reservar para choque ou falência inicial pip-tazo."},
  {ind:"Pediatria", dose:"20-40 mg/kg/dose IV 8/8h (meningite: 40 mg/kg)", obs:"Máx 2 g/dose."},
],

ajustes:{
  irc:"ClCr 25-50: 1 g 12/12h; ClCr 10-25: 500 mg 12/12h; ClCr <10: 500 mg 24/24h; HD: 500 mg/d + dose extra pós-HD.",
  iht:"Sem ajuste.",
  idoso:"Ajustar por ClCr.",
  gestante:"Categoria B — segura em infecção grave.",
  aleita:"Compatível (excreção mínima).",
  ped:"20-40 mg/kg IV 8/8h.",
},

mecanismo:"Carbapenem — liga PBPs (especialmente PBP-2) → inibe síntese parede celular → lise. RESISTENTE à maioria das β-lactamases (incluindo ESBL e AmpC). Mecanismos de resistência: bombas de efluxo, alteração porinas (OprD em Pseudomonas), CARBAPENEMASES (KPC, NDM, OXA-48).",

farmacocin:{
  absorc:"IV apenas",
  distrib:"Excelente — tecidos, fluidos, SNC (especialmente com meninge inflamada)",
  metab:"Hidrólise enzimática (não-renal)",
  elimin:"Renal (70%)",
  meiavida:"1h",
  ligacao:"<2%",
},

espectro:[
  "Gram+: Estreptococos, enterococos sensíveis (NÃO E. faecium VRE), Listeria",
  "Gram-: Enterobacteriaceae incluindo ESBL/AmpC, Pseudomonas, Acinetobacter (parcial), H. influenzae",
  "Anaeróbios: B. fragilis e outros",
  "NÃO COBRE: MRSA, VRE, KPC/NDM, Stenotrophomonas, atípicos (Mycoplasma, Legionella, Chlamydia)",
],

interacoes:[
  {droga:"Ácido valproico", efeito:"REDUZ 60-100% nível valproato — RISCO DE CRISE EPILÉPTICA. Evitar combinação ou usar alternativa antiepiléptica (levetiracetam)."},
  {droga:"Probenecida", efeito:"Aumenta meropenem (sem benefício clínico)."},
  {droga:"Varfarina", efeito:"Pode aumentar INR — monitorar."},
],

efeitos:[
  {tipo:"comum", item:"Diarreia (5-10%), náusea, rash, dor injeção, eosinofilia, ↑ transaminases"},
  {tipo:"sério", item:"Convulsão em ↑PIC/IRC/dose alta, C. difficile, reação anafilactoide, neutropenia (uso prolongado)"},
  {tipo:"raro", item:"Stevens-Johnson, hepatite, pancitopenia"},
],

alertas:[
  {nivel:"crit", txt:"CONVULSÕES: incidência maior que outros carbapenens em pacientes com ↑PIC, IRC, dose alta (>2g/dose). Imipenem é PIOR — meropenem é o melhor escolha entre carbapenens para SNC."},
  {nivel:"crit", txt:"ÁCIDO VALPROICO: meropenem reduz nível valproato 60-100% — risco crise epiléptica. EVITAR. Trocar valproato por levetiracetam ANTES de iniciar meropenem."},
  {nivel:"warn", txt:"USO INDISCRIMINADO promove resistência a CARBAPENEMS (KPC, NDM). RESERVAR para infecções graves comprovadas/altamente suspeitas multirresistência."},
  {nivel:"warn", txt:"ALERGIA A PENICILINA: reação cruzada baixa (~1%). Em anafilaxia IgE documentada, cautela mas geralmente seguro com pré-medicação."},
  {nivel:"info", txt:"INFUSÃO ESTENDIDA (3h) melhora T>MIC e desfechos em sepse grave (especialmente Pseudomonas). Bolus 15-30 min apenas se infraestrutura limitada."},
],

preparo:"Reconstituir 1 g em 20 mL ABD; diluir em 50-100 mL SF (ou SG 5%, mas SF é preferida — menos instabilidade). Infundir em 15-30 min (bolus) ou 3h (estendida). NÃO armazenar reconstituído >1h (instável).",

monitor:"Creatinina, hemograma. Vigilância para C. difficile, convulsões, IRC.",

diretriz:"IDSA Sepsis 2024. IDSA HAP/VAP 2016. SBI Diretrizes carbapenens.",
fluxo:null,
calcs:[],
},

/* ============== FUROSEMIDA ============== */
{id:"med-furosemida", classe:"Diurético de alça", grupo:"endocrino",
nome:"Furosemida",
sin:["Lasix","Furosemil"],
formas:[
  "Ampola 20 mg/2 mL",
  "Comprimidos 40 mg",
],
resumo:"Diurético de alça potente. EAP, sobrecarga volêmica IC/IRC, hipercalemia (adjuvante), HAS resistente. Rápida ação IV.",
dose_rapida:"EAP: 40-80 mg IV bolus (dobrar se uso crônico) | IRC: 80-200 mg IV",

doses:[
  {ind:"Edema Agudo de Pulmão (EAP)", dose:"40-80 mg IV bolus (dose 2-2,5× a dose VO habitual se já usuário)", obs:"Combinar com VNI + nitrato. Resposta em 15-30 min. Repetir 80-200 mg após 1h se inadequada."},
  {ind:"IC descompensada com sobrecarga", dose:"40-200 mg IV cada 8-12h OU BIC 5-20 mg/h", obs:"BIC pode ser superior em casos refratários. Combinar com tiazídico se resistência (efeito sinérgico)."},
  {ind:"Sobrecarga volêmica IRC / nefrótica", dose:"80-500 mg IV (doses altas em IRC, resposta pode ser limitada)", obs:"ClCr <30: doses 200-500 mg necessárias. Combinar com tiazídico se resistência."},
  {ind:"Hipercalemia (adjuvante)", dose:"40-80 mg IV", obs:"Adjuvante a glico-insulina + Ca + β2 agonista. Promove K⁺ urinário."},
  {ind:"HAS resistente (uso crônico)", dose:"VO 40-80 mg/d (≥2× se IRC)", obs:"Combinada com IECA + tiazídico."},
  {ind:"Pediatria", dose:"0,5-2 mg/kg IV cada 6-12h (máx 6 mg/kg/d)", obs:"Bolus lento (em 1-2 min)."},
],

ajustes:{
  irc:"NECESSITA dose maior (resistência) — ClCr <30: doses 80-500 mg. ClCr <10: 200-500 mg.",
  iht:"Sem ajuste mas cuidado com encefalopatia hepática (diurese pode precipitar). Combinar espironolactona em cirrótico.",
  idoso:"Iniciar dose menor (20 mg), titular — risco desidratação/IRA pré-renal.",
  gestante:"Categoria C — usar apenas se essencial. Pode reduzir fluxo placentário em uso crônico.",
  aleita:"Compatível mas pode reduzir lactação.",
  ped:"0,5-2 mg/kg IV.",
},

mecanismo:"Inibe co-transportador Na⁺/K⁺/2Cl⁻ no ramo ascendente espesso da alça de Henle → reduz reabsorção de Na+/Cl⁻/K+/Ca²⁺/Mg²⁺ → diurese potente. Também tem efeito venodilatador imediato IV (antes da diurese) — útil em EAP.",

farmacocin:{
  absorc:"VO: 60-70% (variável, reduzida em IC/edema intestinal) | IV: imediata",
  distrib:"Plasma + fluido extracelular",
  metab:"Hepático parcial",
  elimin:"Renal (50-80% inalterada)",
  meiavida:"1-2h (normal) | 8-12h em IRC",
  ligacao:"95%",
},

espectro:[
  "EAP (1ª linha + VNI + nitrato)",
  "IC descompensada com sobrecarga",
  "Sobrecarga volêmica em IRC/nefrótica",
  "Hipercalemia (adjuvante)",
  "HAS resistente (uso crônico)",
  "Edema cerebral (em ↑PIC após manitol)",
],

interacoes:[
  {droga:"Aminoglicosídeos, vanco", efeito:"Nefrotoxicidade + ototoxicidade aditiva."},
  {droga:"Digoxina", efeito:"Furosemida causa hipocalemia/hipomagnesemia → ↑toxicidade digoxina. Suplementar K, Mg."},
  {droga:"Lítio", efeito:"↑ nível lítio (reduz excreção) — monitor."},
  {droga:"AINE", efeito:"REDUZ efeito furosemida (inibe prostaglandinas renais). Risco IRA aguda."},
  {droga:"Glicocorticoides", efeito:"Hipocalemia aditiva."},
],

efeitos:[
  {tipo:"comum", item:"Hipocalemia, hipomagnesemia, hiponatremia, hipocalcemia, alcalose metabólica (depleção H+), hipotensão postural, hiperuricemia (precipita gota)"},
  {tipo:"sério", item:"Hipocalemia grave → arritmia, desidratação grave, IRA pré-renal, encefalopatia hepática (cirrótico), surdez transitória/permanente (dose alta IV rápida)"},
  {tipo:"raro", item:"Pancreatite, nefrite intersticial, alergia (rara), Stevens-Johnson, fotossensibilidade"},
],

alertas:[
  {nivel:"crit", txt:"OTOTOXICIDADE: bolus IV rápido em dose alta (>200 mg em 5 min) ou em IRC pode causar surdez TRANSITÓRIA ou PERMANENTE. Infundir em 1-2 min OU BIC (4 mg/min máx)."},
  {nivel:"crit", txt:"HIPOCALEMIA: monitorar K+ basal + 24-48h + semanal. Repor se K <3,5. Cuidado em paciente com digoxina (potencializa toxicidade)."},
  {nivel:"warn", txt:"USO RESISTÊNCIA: em IC/IRC pode necessitar doses muito altas (200-500 mg). Combinar com TIAZÍDICO (hidroclorotiazida 25-50 mg ou metolazona 5-10 mg) — efeito sinérgico (bloqueio nefrônico sequencial)."},
  {nivel:"warn", txt:"CIRRÓTICO: combinar com espironolactona (5:2 furo:espiro) para evitar hipocalemia + encefalopatia. Diurese máx 0,5-1 kg/d (com ascite) ou 0,3-0,5 kg/d (sem)."},
  {nivel:"info", txt:"DOSE EQUIVALENTE: 40 mg VO ≈ 20 mg IV ≈ 40 mg bumetanida 1 mg ≈ torasemida 20 mg. Em IC descompensada IV é preferido (absorção VO reduzida por edema)."},
],

preparo:"Bolus: PURO IV em 1-2 min. BIC: 100 mg em 100 mL SF = 1 mg/mL, correr 5-20 mL/h. NÃO administrar em via com SG 5% sozinho (instável em pH ácido).",

monitor:"PA, FC, perfusão, peso diário. Creatinina + Na+ + K+ + Mg²⁺ basal + 24-48h + semanal. Diurese (peso + balanço). Audiometria se uso prolongado em risco.",

diretriz:"ESC Heart Failure 2021. KDIGO IRC. SBC IC.",
fluxo:null,
calcs:[],
},

/* ============== HIDROCORTISONA ============== */
{id:"med-hidrocortisona", classe:"Corticoide — glicocorticoide", grupo:"endocrino",
nome:"Hidrocortisona",
sin:["Solu-Cortef","Cortisol"],
formas:[
  "Frasco-pó 100 mg, 500 mg IV (succinato sódico)",
],
resumo:"Glicocorticoide de duração curta com atividade mineralocorticoide moderada. Padrão em insuficiência adrenal aguda, choque séptico refratário, anafilaxia (adjuvante).",
dose_rapida:"Insuf adrenal: 100 mg IV bolus + 50 mg 6/6h | Sepse refrat: 200 mg/d BIC",

doses:[
  {ind:"Insuficiência adrenal aguda / crise adrenal", dose:"100 mg IV bolus IMEDIATO, depois 50 mg IV 6/6h ou BIC 200 mg/24h", obs:"NÃO ATRASAR para confirmar diagnóstico — dose única não confunde teste cortisol matinal. Hidrocortisona é PREFERIDA (atividade mineralo + gluco)."},
  {ind:"Choque séptico refratário a vasopressor", dose:"BIC 200 mg/24h (50 mg IV 6/6h)", obs:"Quando NE >0,25 mcg/kg/min com PA inadequada. Reduzir gradualmente em 5-7 dias. SBC Sepsis."},
  {ind:"Anafilaxia (ADJUVANTE — não-1ª linha)", dose:"100-200 mg IV", obs:"NÃO substitui adrenalina (1ª linha) — útil para prevenir reação bifásica em 5-20% casos. Início efeito em 4-6h."},
  {ind:"Asma grave / status asmáticus", dose:"4 mg/kg IV bolus + 1-2 mg/kg 6/6h (alternativa a metilprednisolona)", obs:"Metilprednisolona 1 mg/kg é mais usada. Início efeito em 4-6h."},
  {ind:"Pediatria — insuf adrenal", dose:"2 mg/kg IV bolus + 1-2 mg/kg 6/6h", obs:"Considerar mineralocorticoide adicional (fludrocortisona) se insuf adrenal primária."},
],

ajustes:{
  irc:"Sem ajuste.",
  iht:"Sem ajuste rotineiro.",
  idoso:"Sem ajuste. Maior risco hiperglicemia e psicose.",
  gestante:"Categoria C — usar se essencial. Atravessa placenta menos que prednisolona.",
  aleita:"Compatível em dose única-baixa.",
  ped:"2 mg/kg IV bolus + 1-2 mg/kg 6/6h.",
},

mecanismo:"Glicocorticoide endógeno (cortisol é igual). Liga receptor citoplasmático → migra ao núcleo → modula transcrição de genes anti-inflamatórios (lipocortina-1, IL-10) e suprime pró-inflamatórios (NFκB, COX-2, citocinas). Em sepse refratária: restaura responsividade adrenérgica vascular. Atividade mineralocorticoide moderada (retenção Na+/H2O, perda K+).",

farmacocin:{
  absorc:"IV imediata | IM: 30-60 min | VO: rápida",
  distrib:"Ampla, atravessa placenta",
  metab:"Hepático",
  elimin:"Renal (metabólitos)",
  meiavida:"Plasma 1,5h | Biológica 8-12h",
  ligacao:"~80% (transcortina + albumina)",
},

espectro:[
  "Insuficiência adrenal aguda (1ª escolha — atividade mineralo+gluco)",
  "Choque séptico refratário (200 mg/d BIC)",
  "Anafilaxia (adjuvante — preventivo bifásica)",
  "Asma grave / status asmáticus (alternativa metilprednisolona)",
  "Edema cerebral (raro — preferir dexametasona)",
],

interacoes:[
  {droga:"Anticoagulantes (varfarina)", efeito:"Variável — monitor INR."},
  {droga:"AINE", efeito:"↑ risco úlcera/sangramento GI — gastroproteção."},
  {droga:"Hipoglicemiantes (incluindo insulina)", efeito:"Antagonismo — hiperglicemia, ajustar dose."},
  {droga:"Diuréticos não-poupadores K+", efeito:"Hipocalemia aditiva."},
],

efeitos:[
  {tipo:"comum", item:"Hiperglicemia (especialmente diabéticos), retenção sódio/H2O, hipocalemia, ↑PA, insônia, agitação, queimação na injeção rápida"},
  {tipo:"sério", item:"Psicose induzida (especialmente alta dose), úlcera/sangramento GI, infecção secundária (imunossupressão), miopatia, hiperglicemia grave, supressão eixo HHA em uso prolongado >2 sem"},
  {tipo:"raro", item:"Necrose avascular cabeça fêmur, catarata, glaucoma, osteoporose (uso prolongado)"},
],

alertas:[
  {nivel:"crit", txt:"INSUFICIÊNCIA ADRENAL AGUDA: NÃO ATRASAR! Dar 100 mg IV imediatamente em paciente com choque refratário + suspeita (Addison, sepse com supressão, uso crônico de corticoide com retirada abrupta). Dose única não interfere com cortisol matinal."},
  {nivel:"crit", txt:"USO PROLONGADO (>2 sem): JAMAIS suspender abruptamente — risco crise adrenal. DESMAMAR gradualmente em semanas."},
  {nivel:"warn", txt:"SEPSE REFRATÁRIA: hidrocortisona 200 mg/d em sepse refratária reduziu duração de choque (CORTICUS, ADRENAL trials) mas sem benefício mortalidade. Indicação atual: choque séptico com necessidade de vasopressor."},
  {nivel:"warn", txt:"HIPERGLICEMIA é COMUM — controlar glicemia capilar 6/6h, insulina conforme protocolo."},
  {nivel:"info", txt:"EQUIVALÊNCIA: hidrocortisona 100 mg = prednisolona 25 mg = metilprednisolona 20 mg = dexametasona 3,75 mg."},
],

preparo:"Reconstituir 100 mg em 2 mL ABD; diluir em 100 mL SF/SG 5%. Bolus em 5 min ou BIC. Compatível com SF e SG.",

monitor:"Glicemia capilar 6/6h, PA, Na+, K+. Sinais de sangramento GI. Vigilância infecção secundária. Hemograma. Sintomas psiquiátricos.",

diretriz:"Surviving Sepsis 2021. Endocrine Society Adrenal Crisis 2016. ERS/ATS Asthma.",
fluxo:null,
calcs:[],
},

/* ============== SULFATO DE MAGNÉSIO ============== */
{id:"med-sulfato-mg", classe:"Eletrólito + antiarrítmico + tocolítico + neuroprotetor", grupo:"endocrino",
nome:"Sulfato de Magnésio",
sin:["MgSO4","Sulfato magnésio"],
formas:[
  "Ampola 10% (100 mg/mL) — 10 mL = 1 g",
  "Ampola 50% (500 mg/mL) — 10 mL = 5 g",
],
resumo:"Eletrólito versátil com múltiplos usos em emergência: ECLÂMPSIA (1ª linha), TORSADES (1ª linha), ASMA grave, hipomagnesemia, neuroproteção fetal.",
dose_rapida:"Eclâmpsia: 4-6 g IV + 1-2 g/h | Asma: 2 g IV em 20 min | Torsades: 2 g IV bolus",

doses:[
  {ind:"ECLÂMPSIA — prevenção e tratamento de convulsão", dose:"DOSE DE ATAQUE: 4-6 g IV em 15-20 min. MANUTENÇÃO: 1-2 g/h BIC × 24h pós-parto", obs:"1ª LINHA — superior a fenitoína/diazepam (Magpie trial). Esquema Pritchard alternativo: 5g IM em cada glúteo + 4g IV ataque, depois 5g IM cada 4h."},
  {ind:"TORSADES DE POINTES (TV polimórfica)", dose:"2 g IV bolus em 1-2 min; repetir 2 g se persistir", obs:"1ª LINHA mesmo com Mg normal. Identificar e corrigir causa (QT longo, hipocalemia)."},
  {ind:"Asma grave / status asmáticus (adjuvante)", dose:"2 g IV em 20 min", obs:"Broncodilatador adjuvante. ASTHMA-2 estudo. Usar se resposta inadequada a NBZ + corticoide."},
  {ind:"Hipomagnesemia sintomática (cãibra, arritmia)", dose:"1-2 g IV em 30-60 min, repetir conforme necessário", obs:"Repor depois VO 5-10 mmol/d. Causa frequente subdiagnosticada."},
  {ind:"Neuroproteção fetal (prematuridade <32 sem)", dose:"4-6 g IV ataque + 1-2 g/h × 12-24h", obs:"Reduz risco paralisia cerebral. Indicado em trabalho parto prematuro <32 sem."},
  {ind:"Hipertensão arterial pulmonar / IAM (uso histórico)", dose:"—", obs:"NÃO recomendado mais (sem evidência)."},
],

ajustes:{
  irc:"REDUZIR DOSE — Mg é eliminado renalmente. ClCr <30: meia dose, monitor nível sérico. ClCr <10: contraindicado em manutenção (apenas bolus)",
  iht:"Sem ajuste rotineiro.",
  idoso:"Cautela — risco maior toxicidade. Monitor reflexos.",
  gestante:"Categoria D (em uso prolongado >5d pode causar desmineralização óssea fetal) — MAS é 1ª linha em eclâmpsia. Benefício > risco.",
  aleita:"Compatível.",
  ped:"Asma: 25-50 mg/kg IV (máx 2 g). Hipomag: 25-50 mg/kg IV.",
},

mecanismo:"COFATOR para >300 enzimas. Em eclâmpsia: bloqueia receptores NMDA → ↓excitotoxicidade neuronal + vasodilatação cerebral → previne convulsão. Em torsades: estabiliza membrana miocárdica + inibe canais Ca²⁺-tipo-L → ↓PAD. Em asma: relaxamento musculatura lisa brônquica + inibe liberação acetilcolina. Bloqueio neuromuscular em alta dose (efeito tipo BNM).",

farmacocin:{
  absorc:"IV imediata | IM: 30-60 min | VO: 30-40% (uso crônico)",
  distrib:"Ampla — atravessa placenta",
  metab:"Mínimo",
  elimin:"Renal (filtração glomerular)",
  meiavida:"Plasma rápida; efeito biológico horas",
  ligacao:"~30%",
},

espectro:[
  "Eclâmpsia (1ª linha — prevenção e tratamento convulsão)",
  "Torsades de Pointes (1ª linha)",
  "Asma grave (adjuvante)",
  "Hipomagnesemia sintomática",
  "Neuroproteção fetal (prematuridade)",
  "Pré-eclâmpsia grave (prevenção eclâmpsia)",
],

interacoes:[
  {droga:"Bloqueadores neuromusculares", efeito:"POTENCIALIZAÇÃO GRAVE — reduzir dose BNM 25-50%, monitor TOF."},
  {droga:"BCC (nifedipina)", efeito:"Hipotensão grave + bloqueio neuromuscular — cautela em eclâmpsia (mas combinação é usada — monitor)."},
  {droga:"Digoxina", efeito:"Hipomagnesemia potencializa toxicidade digoxina — repor Mg em paciente com dig."},
],

efeitos:[
  {tipo:"comum", item:"Calor/rubor durante infusão, náusea, sonolência, fraqueza, diaforese, palpitação"},
  {tipo:"sério", item:"DEPRESSÃO RESPIRATÓRIA (perda reflexo patelar antecede), BAV, hipotensão, paralisia, parada cardíaca em níveis tóxicos (>10 mg/dL)"},
  {tipo:"raro", item:"Hipocalcemia transitória (precipita Mg-Ca complexo)"},
],

alertas:[
  {nivel:"crit", txt:"MONITORIZAÇÃO NA INFUSÃO em ECLÂMPSIA: a cada 1h checar (1) REFLEXO PATELAR — perda é o primeiro sinal de toxicidade. SUSPENDER se ausente; (2) FR ≥12 — se <12 SUSPENDER; (3) Diurese ≥30 mL/h — se oligúria reduzir dose; (4) Nível sérico (alvo 4-7 mEq/L; >10 = toxicidade)."},
  {nivel:"crit", txt:"ANTÍDOTO em toxicidade: GLUCONATO DE CÁLCIO 10% 10 mL IV em 10 min. Suspender Mg. Suporte ventilatório se necessário."},
  {nivel:"crit", txt:"IRC GRAVE: Mg acumula — reduzir dose 50% ou contraindicar. ClCr <30: meia dose. ClCr <10: apenas bolus."},
  {nivel:"warn", txt:"BLOQUEIO NEUROMUSCULAR: pacientes com miastenia gravis ou em uso de BNM — risco de paralisia. EVITAR ou monitor rigoroso."},
  {nivel:"info", txt:"DOSE DE ECLÂMPSIA: ataque 4-6 g em 15-20 min (NÃO MAIS RÁPIDO — risco hipotensão/arritmia). Manutenção 1-2 g/h até 24h pós-parto. Continuar manutenção por 24h pós-última convulsão se ocorrer."},
],

preparo:"BIC manutenção: 24 g (40 mL da apr 10% ou 80 mL da apr 50% — 4 amp 10g cada) em 500 mL SF/SG 5%. Para 2 g/h: 42 mL/h. Bolus em emergência: pode diluir 2-4 g em 20 mL SF e correr em 1-2 min (torsades) ou 15-20 min (eclâmpsia, asma).",

monitor:"Reflexo patelar 1/1h, FR, PA, diurese, ECG. Nível sérico Mg 6-12/6h ou se sintomas tóxicos. Cálcio sérico (queda transitória). Hidratação.",

diretriz:"ACOG Hypertension in Pregnancy 2020. Magpie trial (Lancet 2002). AHA ACLS 2020 (Torsades). GINA 2024 (Asma).",
fluxo:null,
calcs:[],
},

/* ============== NALOXONA ============== */
{id:"med-naloxona", classe:"Antagonista opioide puro", grupo:"sedativo",
nome:"Naloxona",
sin:["Narcan","Nalone"],
formas:[
  "Ampola 0,4 mg/1 mL",
  "Spray nasal 4 mg/0,1 mL (não SUS)",
],
resumo:"Antagonista μ-opioide PURO. Reverte depressão respiratória/SNC induzida por opioides. Curta duração — risco RE-narcose se opioide tem T½ longo.",
dose_rapida:"0,04-0,4 mg IV titular cada 2-3 min até FR ≥12",

doses:[
  {ind:"Overdose opioide com depressão respiratória", dose:"0,04 mg IV inicial (paciente intoxicação aguda); titular 0,04 mg cada 2-3 min até FR ≥12 e SpO2 >94%", obs:"COMEÇAR COM DOSE BAIXA (0,04 mg) em usuário CRÔNICO para evitar SÍNDROME ABSTINÊNCIA aguda violenta. Dose alta 0,4-2 mg em PCR ou paciente naive."},
  {ind:"PCR opioide-induzido", dose:"0,4-2 mg IV bolus, repetir cada 2-3 min", obs:"Sem dose máxima em PCR."},
  {ind:"Reversão sedação iatrogênica em procedimento", dose:"0,1-0,2 mg IV titulado", obs:"Reverte com cuidado — manter analgesia preservada (titular)."},
  {ind:"BIC para opioide de ação prolongada (metadona, fentanil BIC)", dose:"BIC 0,4-4 mg/h", obs:"Naloxona meia-vida ~30-60 min — opioides longos precisam BIC contínua."},
  {ind:"Vias alternativas (sem acesso IV)", dose:"IM/SC 0,4-0,8 mg ou intranasal 4 mg", obs:"Pré-hospitalar. Início 2-5 min IM/IN."},
  {ind:"Pediatria", dose:"0,01 mg/kg IV (dose inicial; pode aumentar para 0,1 mg/kg se PCR)", obs:"RN com mãe usuária de opioide: 0,1 mg/kg."},
],

ajustes:{
  irc:"Sem ajuste.",
  iht:"Sem ajuste.",
  idoso:"Iniciar dose menor (0,04 mg) — sensibilidade aumentada.",
  gestante:"Categoria B — usar (depressão respiratória materna trata salvar mãe + feto).",
  aleita:"Compatível.",
  ped:"0,01-0,1 mg/kg IV.",
},

mecanismo:"Antagonista competitivo PURO dos receptores μ, κ, δ opioides (afinidade μ > κ > δ). Desloca agonistas opioides do receptor → reversão de depressão respiratória, sedação, miose, analgesia. SEM atividade intrínseca — não causa efeitos opioides.",

farmacocin:{
  absorc:"IV: 1-2 min | IM/SC: 2-5 min | Intranasal: 5-10 min",
  distrib:"Ampla, atravessa BBB rápido (lipossolúvel)",
  metab:"Hepático (glucuronidação)",
  elimin:"Renal (metabólitos)",
  meiavida:"30-90 min (!! curta vs muitos opioides)",
  ligacao:"~45%",
},

espectro:[
  "Overdose opioide com depressão respiratória",
  "PCR opioide-induzida",
  "Reversão sedação iatrogênica (procedimento)",
  "Diagnóstico diferencial em coma de causa desconhecida (teste empírico)",
],

interacoes:[
  {droga:"Buprenorfina", efeito:"Parcial reversão (buprenorfina é agonista parcial de alta afinidade) — pode necessitar dose alta naloxona ou suporte ventilatório."},
  {droga:"Opioides com atividade kappa", efeito:"Sem diferença significativa — naloxona reverte todos."},
],

efeitos:[
  {tipo:"comum", item:"AGITAÇÃO/ABSTINÊNCIA AGUDA em usuário crônico: ansiedade, taquicardia, hipertensão, midríase, sudorese, náusea/vômito, dor, lacrimação, bocejos. Pode ser violenta."},
  {tipo:"sério", item:"EDEMA AGUDO DE PULMÃO (raro, mas descrito), arritmia, convulsão, parada cardiorrespiratória paradoxal (descrita em uso muito alto IV rápido em paciente já hipóxico)"},
  {tipo:"raro", item:"Reação anafilactoide"},
],

alertas:[
  {nivel:"crit", txt:"USUÁRIO CRÔNICO de opioide: DOSE BAIXA inicial (0,04 mg) titulada — dose alta abrupta causa SÍNDROME DE ABSTINÊNCIA violenta (agitação, vômito, taquicardia, HAS) que pode causar mais dano que a overdose."},
  {nivel:"crit", txt:"RE-NARCOSE: naloxona dura 30-60 min — opioide tem T½ MAIS LONGA (metadona, oxycodona, fentanil). MANTER paciente em observação ≥4-6h. Considerar BIC naloxona em opioides longos."},
  {nivel:"warn", txt:"BUPRENORFINA: alta afinidade pelo receptor — reversão PARCIAL. Pode necessitar dose maior (até 10 mg) ou suporte ventilatório enquanto buprenorfina se dissocia."},
  {nivel:"warn", txt:"EDEMA AGUDO DE PULMÃO PARADOXAL (raro mas descrito) — provável por descarga adrenérgica súbita. Manejo: O2, VNI, diurético se necessário."},
  {nivel:"info", txt:"DIAGNÓSTICO DIFERENCIAL em COMA: 0,4-2 mg IV — se responde, sugere intoxicação opioide. Útil em emergência."},
],

preparo:"Bolus: PURO IV (0,4 mg/mL) ou diluído 0,4 mg em 10 mL SF (0,04 mg/mL) para titulação fina. BIC: 4 mg em 250 mL SF/SG = 16 mcg/mL, iniciar 0,4-4 mg/h.",

monitor:"FR, SpO2, FC, PA, nível consciência contínuo. Observação ≥4-6h pós-reversão (re-narcose). ECG.",

diretriz:"AHA ACLS 2020. CDC Opioid Overdose. WHO Naloxone Guidelines.",
fluxo:null,
calcs:[],
},

);
