/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — BIBLIOTECA DE MEDICAÇÕES (PARTE 2)
   25 medicações adicionais — vasopressores, sedativos, BNM,
   antiarrítmicos, anti-hipertensivos, ATBs, outros
   =========================================================== */

MEDICACOES.push(

/* ============== ADRENALINA ============== */
{id:"med-adrenalina", classe:"Vasopressor + broncodilatador — α/β-agonista", grupo:"vasopressor",
nome:"Adrenalina (Epinefrina)",
sin:["Epinefrina","Epi","Adre"],
formas:[
  "Ampola 1 mg/1 mL (1:1000) — para IM/SC/diluição IV",
  "Ampola 0,1 mg/1 mL (1:10.000) — IV em PCR (pouco disponível BR)",
  "Caneta autoinjetora 0,3 mg (EpiPen — não SUS)",
],
resumo:"Catecolamina endógena α/β potente. Padrão em PCR (FV/TV refratária, AESP, assistolia), anafilaxia, asma refratária, choque refratário.",
dose_rapida:"PCR: 1 mg IV cada 3-5 min | Anafilaxia: 0,3-0,5 mg IM",

doses:[
  {ind:"PCR (FV/TV/AESP/assistolia)", dose:"1 mg IV/IO cada 3-5 min", obs:"Sem dose máxima. AESP/assistolia: o quanto antes. FV/TV: após 2º choque."},
  {ind:"ANAFILAXIA (1ª linha)", dose:"0,3-0,5 mg IM coxa anterolateral (vasto lateral)", obs:"Repetir 5-15 min se necessário. NÃO atrasar para IV. Ped: 0,01 mg/kg IM."},
  {ind:"Anafilaxia refratária / choque", dose:"BIC 0,05-1 mcg/kg/min IV", obs:"Após 2-3 doses IM sem resposta. Via central preferida."},
  {ind:"Asma refratária / parada respiratória iminente", dose:"0,3-0,5 mg IM (1:1000) cada 20 min × 3", obs:"Broncodilatação + redução edema vascular."},
  {ind:"Bradicardia sintomática refratária à atropina", dose:"2-10 mcg/min IV em BIC", obs:"Alternativa a MP transcutâneo."},
  {ind:"Crupe moderado/grave", dose:"L-epinefrina 5 mL (1:1000) NBZ OU racêmica 0,5 mL em 3 mL SF", obs:"Observar ≥4h pós-NBZ (rebote)."},
  {ind:"Pediatria PCR", dose:"0,01 mg/kg IV/IO (máx 1 mg)", obs:"Mesmo intervalo de 3-5 min."},
],

ajustes:{
  irc:"Sem ajuste.",
  iht:"Sem ajuste.",
  idoso:"Cautela — maior risco isquemia. NÃO evitar em PCR/anafilaxia.",
  gestante:"Categoria C — USAR em anafilaxia (benefício > risco). Pode reduzir fluxo uteroplacentário.",
  aleita:"Compatível.",
  ped:"PCR: 0,01 mg/kg IV/IO (máx 1 mg). Anafilaxia: 0,01 mg/kg IM (máx 0,5 mg).",
},

mecanismo:"Agonista α1 + α2 + β1 + β2. Dose-dependente: baixas doses predomina β (DC, broncodilatação); altas doses predomina α (vasoconstrição). Em PCR: vasoconstrição (α1) melhora perfusão coronariana e cerebral durante RCP. Em anafilaxia: reverte broncoespasmo (β2), reduz edema (α1), aumenta DC (β1), estabiliza mastócitos.",

farmacocin:{
  absorc:"IV: imediata | IM: 5-10 min (mais rápida que SC) | SC: 10-15 min",
  distrib:"Ampla — atravessa pouco BBB (pequeno efeito SNC central)",
  metab:"MAO + COMT (hepático e periférico)",
  elimin:"Renal (metabólitos: ácido vanilmandélico, metanefrinas)",
  meiavida:"~2 min",
  ligacao:"Baixa",
},

espectro:[
  "EMERGÊNCIAS CARDÍACAS: PCR (FV/TV refrat, AESP, assist), bradiarritmia.",
  "ALERGIAS: anafilaxia (1ª linha), angioedema com obstrução de vias aéreas.",
  "RESPIRATÓRIO: asma com parada respiratória iminente, crupe moderado/grave.",
  "VASOPRESSOR: anafilaxia refratária, choque pós-cirurgia cardíaca.",
],

interacoes:[
  {droga:"β-bloqueadores não-seletivos", efeito:"Crise hipertensiva paradoxal + broncoconstrição. Em anafilaxia em β-bloq: usar GLUCAGON 1-5 mg IV bolus + BIC."},
  {droga:"IMAO", efeito:"Crise hipertensiva grave — reduzir dose 10×."},
  {droga:"Antidepressivos tricíclicos", efeito:"Potencializa efeito pressor — reduzir 50%."},
  {droga:"Halogenados (sevoflurano, halotano)", efeito:"Arritmia ventricular."},
],

efeitos:[
  {tipo:"comum", item:"Taquicardia, tremor, palpitação, cefaleia, ansiedade, sudorese, palidez"},
  {tipo:"sério", item:"Arritmias (FV, TV), IAM, AVC hemorrágico (HAS súbita), edema agudo pulmão"},
  {tipo:"raro", item:"Necrose por extravasamento, hiperglicemia transitória, acidose lática"},
],

alertas:[
  {nivel:"crit", txt:"PCR: sem dose máxima — repetir cada 3-5 min enquanto reanimação ativa. NÃO atrasar."},
  {nivel:"crit", txt:"ANAFILAXIA: IM > SC (absorção mais rápida e confiável). Face anterolateral coxa (vasto lateral) > deltoide. Em criança: face lateral coxa."},
  {nivel:"crit", txt:"IV PURA SÓ EM PCR ou hipotensão profunda — risco arritmia/IAM. Sempre diluída em BIC."},
  {nivel:"warn", txt:"Após anafilaxia: OBSERVAÇÃO ≥4-6h (reação bifásica em 5-20%). Idealmente internar."},
  {nivel:"warn", txt:"Em β-bloq + anafilaxia refratária: GLUCAGON 1-5 mg IV bolus + 5-15 mcg/min BIC (mecanismo independente de β-receptor)."},
  {nivel:"info", txt:"NÃO usar mesma seringa com bicarbonato (inativação química)."},
],

preparo:"PCR: PURA, 1 mg IV bolus seguido de flush 20 mL SF. BIC vasopressor: 4 mg em 250 mL SG 5% = 16 mcg/mL, iniciar 0,05 mcg/kg/min. NBZ crupe: L-epinefrina 5 mL (1:1000) pura. IM anafilaxia: PURA, dose 0,01 mg/kg (máx 0,5 mg).",

monitor:"PCR: ECG contínuo, capnografia (etCO2 >10 mmHg). Anafilaxia: PA, FC, SpO2, ausculta pulmonar, pele. BIC: PA invasiva ideal, monitorizar perfusão.",

diretriz:"AHA ACLS 2020. ERC Anaphylaxis 2021. SBP/ASBAI Anafilaxia. PARAMEDIC-2 trial (NEJM 2018).",
fluxo:null,
calcs:[],
},

/* ============== DOBUTAMINA ============== */
{id:"med-dobutamina", classe:"Inotrópico — β1-agonista", grupo:"vasopressor",
nome:"Dobutamina",
sin:["Dobutrex"],
formas:[
  "Ampola 250 mg/20 mL (12,5 mg/mL)",
  "Frasco 500 mg/20 mL",
],
resumo:"Inotrópico β1-seletivo. ↑contratilidade + leve vasodilatação periférica. Padrão em choque cardiogênico com baixo débito + IC descompensada.",
dose_rapida:"2,5-20 mcg/kg/min IV em BIC",

doses:[
  {ind:"Choque cardiogênico (baixo DC + congestão)", dose:"Iniciar 2,5-5 mcg/kg/min, titular 2,5 cada 10 min até DC ≥2,2 L/min/m²", obs:"Pode reduzir PA — associar a noradrenalina se hipotenso."},
  {ind:"IC descompensada Killip III-IV", dose:"2,5-10 mcg/kg/min", obs:"Adjunto a furosemida + vasodilatador (se PA permite)."},
  {ind:"Sepse com disfunção miocárdica", dose:"2,5-20 mcg/kg/min", obs:"Associada à noradrenalina quando DC inadequado apesar de NE+volume."},
  {ind:"Teste eco-stress farmacológico", dose:"5-40 mcg/kg/min em incrementos", obs:"Cardiologia. NÃO em emergência."},
  {ind:"Pediatria", dose:"2-20 mcg/kg/min", obs:"Acesso central preferível para BIC."},
],

ajustes:{
  irc:"Sem ajuste.",
  iht:"Sem ajuste rotineiro.",
  idoso:"Sem ajuste — monitorar arritmia mais cuidadosamente.",
  gestante:"Categoria B — preferir vs adrenalina se inotrópico necessário.",
  aleita:"Cautela; suspender lactação durante uso.",
  ped:"2-20 mcg/kg/min.",
},

mecanismo:"β1-agonista seletivo (com β2 leve). Ativa AMPc miocárdico → ↑Ca²⁺ intracelular → ↑força contração + leve cronotropismo. β2 vascular causa vasodilatação periférica que ↓pós-carga (efeito benéfico em IC). NÃO é vasopressor — pode ↓PA em hipovolêmico.",

farmacocin:{
  absorc:"IV imediata",
  distrib:"Ampla",
  metab:"COMT hepático",
  elimin:"Renal (metabólitos)",
  meiavida:"2 min",
  ligacao:"Baixa",
},

espectro:[
  "Choque cardiogênico com baixo débito.",
  "IC descompensada Killip III-IV.",
  "Sepse com disfunção miocárdica (associado a NE).",
  "Teste eco-stress (uso especializado).",
],

interacoes:[
  {droga:"β-bloqueadores", efeito:"Antagonismo — reduz efeito. Usar dose maior ou MILRINONA (mecanismo PDE-III, independente)."},
  {droga:"Halogenados", efeito:"Risco arritmia."},
  {droga:"Antidepressivos tricíclicos", efeito:"Arritmia — monitor ECG."},
],

efeitos:[
  {tipo:"comum", item:"Taquicardia, hipertensão (se sem hipovolemia), ectopia ventricular, palpitação, náusea"},
  {tipo:"sério", item:"Arritmias graves (FV, TV), hipotensão (em hipovolêmico), isquemia miocárdica"},
  {tipo:"raro", item:"Eosinofilia/miocardite (uso prolongado), tolerância em 72h por down-regulation receptores β"},
],

alertas:[
  {nivel:"crit", txt:"NÃO é vasopressor — em HIPOTENSÃO, SEMPRE associar a noradrenalina. Dobutamina isolada pode piorar PA."},
  {nivel:"crit", txt:"CONTRAINDICADO em cardiomiopatia hipertrófica obstrutiva e estenose subaórtica grave (aumenta gradiente)."},
  {nivel:"warn", txt:"TOLERÂNCIA em 72h (down-regulation β). Em IC crônica com β-bloq: considerar MILRINONA (mecanismo PDE-III)."},
  {nivel:"warn", txt:"Corrigir hipocalemia e hipomagnesemia ANTES (reduz risco arritmia)."},
  {nivel:"info", txt:"Em choque cardiogênico pós-IAM: BIA + dobutamina + NE pode ser ponte para revascularização/ECMO."},
],

preparo:"500 mg em 250 mL SG 5% = 2000 mcg/mL = 2 mg/mL. Para 70 kg @ 5 mcg/kg/min: 70×5 = 350 mcg/min = 10,5 mL/h. Compatível com SF. Cor levemente rosada normal — se vermelha/marrom, descartar.",

monitor:"ECG contínuo, PA, débito urinário, lactato. Em UTI: PA invasiva, SvO2, eco seriado. Eletrólitos 4-6/6h (K, Mg).",

diretriz:"ACC/AHA HF 2022. SBC Insuficiência Cardíaca 2018. Surviving Sepsis 2021.",
fluxo:null,
calcs:[],
},

/* ============== VASOPRESSINA ============== */
{id:"med-vasopressina", classe:"Vasopressor não-adrenérgico — análogo ADH", grupo:"vasopressor",
nome:"Vasopressina (ADH)",
sin:["AVP","ADH","Arginina-vasopressina","Pitressin"],
formas:[
  "Ampola 20 UI/mL",
  "Terlipressina (análogo prolongado — sangramento varicoso): Ampola 1 mg/8,5 mL",
],
resumo:"Vasopressor V1 não-adrenérgico. Adjuvante de NE em sepse refratária. DOSE FIXA, não titulada. Sinérgica com NE.",
dose_rapida:"0,03 UI/min IV em BIC FIXA (sepse refratária)",

doses:[
  {ind:"Choque séptico refratário (adjuvante)", dose:"0,03 UI/min IV BIC FIXA", obs:"ADICIONAR a NE quando NE >0,25-0,5 mcg/kg/min. Permite reduzir dose NE. NÃO usar isolada."},
  {ind:"Choque vasodilatador pós-cirurgia cardíaca", dose:"0,03-0,04 UI/min", obs:"Síndrome vasoplégica pós-CEC."},
  {ind:"Terlipressina — HDA varicoso", dose:"2 mg IV bolus 4/4h × 24-48h, depois 1 mg 4/4h × 3-5 dias", obs:"Análogo de ação prolongada. Reduz pressão portal. 1ª linha em HDA cirrótico."},
  {ind:"Terlipressina — Síndrome hepatorrenal tipo 1", dose:"1 mg IV 4/4h + albumina 1 g/kg D1, depois 20-40 g/d", obs:"Combinar com albumina obrigatoriamente."},
  {ind:"Diabetes insipidus central", dose:"5-10 UI IM/SC cada 4-6h", obs:"Preferir desmopressina (DDAVP) em uso crônico."},
],

ajustes:{
  irc:"Sem ajuste rotineiro.",
  iht:"Sem ajuste rotineiro. Terlipressina: cuidado em hepatopata grave.",
  idoso:"Sem ajuste; vigilância maior para isquemia.",
  gestante:"Categoria C — apenas se essencial. Terlipressina: evitar.",
  aleita:"Compatível em uso agudo.",
  ped:"Choque pediátrico: 0,0003-0,002 UI/kg/min (evidência limitada).",
},

mecanismo:"Em sepse há deficiência RELATIVA de vasopressina endógena. Receptor V1 vascular → vasoconstrição arteriolar PURA (mecanismo INDEPENDENTE de adrenérgicos). Sinérgica com NE. V2 renal causa retenção de água (antidiurético). Sem efeito cardíaco direto significativo.",

farmacocin:{
  absorc:"IV imediata; IM/SC: 5-15 min",
  distrib:"Ampla, baixa BBB",
  metab:"Hepático/renal (vasopressinase)",
  elimin:"Renal",
  meiavida:"10-35 min",
  ligacao:"Baixa",
},

espectro:[
  "Choque séptico refratário (ADJUVANTE a NE).",
  "Síndrome vasoplégica pós-CEC.",
  "Sangramento varicoso (terlipressina).",
  "Síndrome hepatorrenal tipo 1 (terlipressina).",
],

interacoes:[
  {droga:"Carbamazepina, clorpropamida", efeito:"Potencializa efeito antidiurético — monitor Na+."},
  {droga:"Lítio, demeclociclina", efeito:"Antagonismo (DI nefrogênico) — sem importância aguda."},
],

efeitos:[
  {tipo:"comum", item:"Náusea, cólica abdominal, cefaleia, palidez, sudorese, bradicardia paradoxal"},
  {tipo:"sério", item:"Isquemia mesentérica/digital/miocárdica, hiponatremia (retenção H2O), necrose por extravasamento"},
  {tipo:"raro", item:"Broncoespasmo (asma), reação anafilactoide"},
],

alertas:[
  {nivel:"crit", txt:"DOSE FIXA — NÃO TITULAR. 0,03 UI/min em sepse é a dose padrão (diferente de NE/dopamina que são tituladas)."},
  {nivel:"crit", txt:"VIA CENTRAL OBRIGATÓRIA — vasoconstrição potente → risco necrose por extravasamento."},
  {nivel:"warn", txt:"Sem benefício isolado em sepse — SEMPRE adjuvante de NE. Iniciar quando NE >0,25-0,5 mcg/kg/min."},
  {nivel:"warn", txt:"Monitorar débito urinário (efeito antidiurético V2) — pode mascarar resposta volêmica."},
  {nivel:"info", txt:"VASST trial (NEJM 2008): em sepse refratária, vasopressina 0,03 UI/min reduziu mortalidade em choque LEVE-MODERADO (não no grave)."},
],

preparo:"20 UI em 100 mL SF = 0,2 UI/mL. Iniciar 0,03 UI/min = 1,8 UI/h = 9 mL/h. Estável 24h. Não diluir em lactato.",

monitor:"PA, perfusão, lactato, débito urinário, Na+ (4-8/8h). Vigilância clínica para isquemia (digital, mesentérica, miocárdica).",

diretriz:"Surviving Sepsis 2021. ACC/AHA Cardiogenic Shock 2022. ESC HDA Cirrótica 2018. VASST trial.",
fluxo:null,
calcs:[],
},

/* ============== ATROPINA ============== */
{id:"med-atropina", classe:"Anticolinérgico — antagonista muscarínico", grupo:"vasopressor",
nome:"Atropina",
sin:["Atropion"],
formas:[
  "Ampola 0,25 mg/mL (1 mL)",
  "Ampola 0,5 mg/mL (1 mL)",
],
resumo:"Anticolinérgico — bloqueia receptor muscarínico. 1ª linha em bradiarritmia sintomática. Antídoto em intoxicação por organofosforados/carbamatos.",
dose_rapida:"Bradicardia: 0,5-1 mg IV cada 3-5 min (máx 3 mg)",

doses:[
  {ind:"Bradicardia sintomática", dose:"0,5-1 mg IV em bolus, repetir cada 3-5 min até máx 3 mg", obs:"NÃO usar dose <0,5 mg (bradicardia paradoxal). Se ineficaz: marcapasso transcutâneo / dopamina / adrenalina."},
  {ind:"PCR — assistolia/AESP (descontinuada)", dose:"—", obs:"AHA 2010 retirou da rotina (sem benefício). Apenas histórico."},
  {ind:"Reversão de bloqueio neuromuscular (com neostigmina)", dose:"0,015-0,02 mg/kg IV junto com neostigmina 0,04-0,07 mg/kg", obs:"Anestesia. Bloqueia efeitos muscarínicos da neostigmina (bradicardia, secreções)."},
  {ind:"Intoxicação por organofosforado/carbamato", dose:"2-5 mg IV cada 5-10 min até reverter secreções (alvo: ausculta pulmonar limpa, FC >80, midríase). Pode necessitar >50 mg total", obs:"Sem dose máxima. Combinar com pralidoxima 30 mg/kg IV em 30 min."},
  {ind:"Pré-medicação anti-sialagogo (cetamina, broncoscopia)", dose:"0,01 mg/kg IV (0,4-0,6 mg adulto)", obs:"Reduz secreções salivares e brônquicas."},
  {ind:"Pediatria — bradicardia", dose:"0,02 mg/kg IV/IO (mín 0,1 mg, máx 0,5 mg em criança, 1 mg em adolescente)", obs:"NÃO usar dose <0,1 mg (bradicardia paradoxal)."},
],

ajustes:{
  irc:"Sem ajuste.",
  iht:"Sem ajuste.",
  idoso:"Cautela — risco delirium anticolinérgico, retenção urinária, glaucoma agudo.",
  gestante:"Categoria C — usar se essencial (emergência).",
  aleita:"Pode reduzir lactação. Dose única aceita.",
  ped:"0,02 mg/kg (mín 0,1 mg, máx 0,5 mg em criança).",
},

mecanismo:"Antagonista competitivo dos receptores muscarínicos (M1-M5). Bloqueia ação da acetilcolina no SNA parassimpático e SNC. No coração: bloqueia M2 nodal → aumenta FC. Em SNC: dose alta causa delirium anticolinérgico. Em brônquios/glândulas: reduz secreções.",

farmacocin:{
  absorc:"IV imediato | IM: 10-15 min | VO: 30 min",
  distrib:"Ampla, atravessa BBB e placenta",
  metab:"Hepático (50%)",
  elimin:"Renal (50% inalterada)",
  meiavida:"2-4 h",
  ligacao:"~18%",
},

espectro:[
  "Bradiarritmias sintomáticas (1ª linha)",
  "Intoxicação por organofosforados/carbamatos (antídoto)",
  "Pré-medicação anti-sialagogo",
  "Antagonismo muscarínico em reversão BNM (com neostigmina)",
],

interacoes:[
  {droga:"Anticolinérgicos (antihistamínicos, tricíclicos)", efeito:"Soma de efeitos — risco delirium, retenção urinária, hipertermia."},
  {droga:"Inibidores acetilcolinesterase (donepezila)", efeito:"Antagonismo terapêutico — atropina reverte."},
  {droga:"Digoxina", efeito:"Atropina pode aumentar absorção digoxina."},
],

efeitos:[
  {tipo:"comum", item:"Boca seca, midríase, visão borrada, taquicardia, retenção urinária, constipação, palpitação"},
  {tipo:"sério", item:"Delirium anticolinérgico (especialmente idoso), glaucoma agudo, retenção urinária aguda, taquicardia grave"},
  {tipo:"raro", item:"Síndrome anticolinérgica: 'red as a beet, dry as a bone, hot as a hare, blind as a bat, mad as a hatter'"},
],

alertas:[
  {nivel:"crit", txt:"BRADICARDIA PARADOXAL: doses <0,5 mg em adulto (ou <0,1 mg em criança) causam bradicardia (efeito anticolinérgico parcial pré-juncional). SEMPRE ≥0,5 mg IV."},
  {nivel:"crit", txt:"INTOXICAÇÃO ORGANOFOSFORADO: sem dose máxima — titular até reversão de secreções (não FC). Alguns casos necessitam >100 mg."},
  {nivel:"warn", txt:"GLAUCOMA DE ÂNGULO FECHADO: contraindicação relativa — pode precipitar crise. Glaucoma de ângulo aberto: seguro."},
  {nivel:"warn", txt:"IDOSO: risco delirium anticolinérgico. Cuidado em uso prolongado/repetido."},
  {nivel:"info", txt:"Em BAV de 2º grau Mobitz II ou 3º grau: atropina NÃO reverte (bloqueio infra-nodal). Necessita marcapasso transcutâneo / β-agonista (dopamina/adrenalina)."},
],

preparo:"PURA, IV bolus. Para via central ou periférica. Em intoxicação organofosforado: pode preparar BIC 5 mg em 50 mL SF para infusão titulada (raro — bolus repetidos preferíveis).",

monitor:"ECG contínuo (FC, ritmo), nível consciência, débito urinário (retenção), pupilas, ausculta pulmonar (secreções em intoxicação).",

diretriz:"AHA ACLS 2020. Toxicologia clínica MS. PRAM (Pesticide Resistance and Mortality).",
fluxo:null,
calcs:[],
},

/* ============== MIDAZOLAM ============== */
{id:"med-midazolam", classe:"Benzodiazepínico de ação curta", grupo:"sedativo",
nome:"Midazolam",
sin:["Dormonid","Dormicum"],
formas:[
  "Ampola 5 mg/5 mL (1 mg/mL)",
  "Ampola 15 mg/3 mL (5 mg/mL) — mais usada",
  "Ampola 50 mg/10 mL (5 mg/mL) — para BIC",
  "Solução oral 2 mg/mL",
],
resumo:"BZD hidrossolúvel, início rápido, curta duração. Sedação procedural, status epilepticus, SRI, sedação UTI.",
dose_rapida:"Sedação: 1-2 mg IV bolus | Status: 10 mg IM (>40kg) ou 0,2 mg/kg IV",

doses:[
  {ind:"Sedação procedural (redução, cardioversão, EDA)", dose:"1-2 mg IV bolus, repetir 1 mg cada 2-3 min (máx 5 mg)", obs:"Idoso: 0,5-1 mg. Combinar com fentanil para analgesia."},
  {ind:"Status epilepticus — SEM acesso IV", dose:"10 mg IM (>40kg) OU 0,2 mg/kg IM/IN/bucal", obs:"RAMPART trial: IM tão eficaz quanto IV. Via preferida pré-hospitalar."},
  {ind:"Status epilepticus — COM acesso IV", dose:"0,2 mg/kg IV bolus (máx 10 mg), pode repetir após 5 min", obs:"Após 2 doses: passar para 2ª linha (fenitoína/levetiracetam)."},
  {ind:"Sedação contínua UTI", dose:"BIC 0,02-0,2 mg/kg/h (após bolus 0,02-0,05 mg/kg)", obs:"RASS alvo -2 a 0. PADIS: preferir dexmedetomidina/propofol (BZD piora delirium)."},
  {ind:"Pré-medicação SRI", dose:"0,05-0,1 mg/kg IV (3-5 mg adulto)", obs:"Combinar com fentanil. Sedação consciente para IOT."},
  {ind:"Abstinência alcoólica grave", dose:"2-4 mg IV cada 15-30 min titulado", obs:"Diazepam ou lorazepam alternativos (preferir lorazepam em hepatopata)."},
  {ind:"Pediatria — sedação", dose:"0,05-0,1 mg/kg IV (máx 5 mg)", obs:"VO pré-procedimento: 0,5 mg/kg (máx 20 mg)."},
],

ajustes:{
  irc:"ClCr <10: reduzir 50% (acúmulo de metabólitos ativos).",
  iht:"IH grave: reduzir 50-75% (meia-vida prolongada).",
  idoso:"Reduzir 50% — sensibilidade aumentada, meia-vida prolongada.",
  gestante:"Categoria D — uso 3º trimestre/parto causa síndrome 'floppy infant' no RN. USAR em status epilepticus mesmo assim.",
  aleita:"Dose única segura, cautela uso crônico.",
  ped:"0,05-0,1 mg/kg IV | 0,2 mg/kg IM/IN status | 0,5 mg/kg VO pré-procedimento.",
},

mecanismo:"BZD potencializa GABA-A no SNC → abertura canais Cl⁻ → hiperpolarização neuronal → ↓excitabilidade. Sítio alostérico distinto do GABA. Aumenta FREQUÊNCIA de abertura (vs barbitúricos que aumentam duração). Efeitos: ansiolítico, sedativo, anticonvulsivante, miorrelaxante, amnésico anterógrado.",

farmacocin:{
  absorc:"IV: 1-3 min | IM: 5-15 min | VO: 15-30 min | Intranasal: 5-10 min",
  distrib:"Lipossolúvel — atravessa BBB rápido (vs lorazepam mais lento)",
  metab:"Hepático CYP3A4 → α-hidroximidazolam (ativo) → glucuronidação",
  elimin:"Renal (metabólitos)",
  meiavida:"2-6h (mais longa em obesos, idosos, hepatopata)",
  ligacao:"96-97%",
},

espectro:[
  "Sedação procedural curta",
  "Status epilepticus (1ª linha — BZD)",
  "Pré-medicação SRI / IOT",
  "Sedação UTI (alternativa a propofol/dexmedetomidina)",
  "Abstinência alcoólica grave",
  "Agitação aguda (especialmente abstinência)",
],

interacoes:[
  {droga:"Opioides", efeito:"Sinergia depressora respiratória — reduzir 50%, monitor."},
  {droga:"Inibidores CYP3A4 (cetoconazol, claritromicina, ritonavir)", efeito:"↑ midazolam — sedação prolongada. Reduzir 50-75%."},
  {droga:"Indutores CYP3A4 (rifampicina, fenitoína)", efeito:"↓ efeito — aumentar dose."},
  {droga:"Álcool", efeito:"Potencializa depressão SNC."},
],

efeitos:[
  {tipo:"comum", item:"Sonolência, sedação prolongada, amnésia anterógrada, ataxia, hipotensão leve"},
  {tipo:"sério", item:"Depressão respiratória, apneia (especialmente IV rápido), hipotensão grave, reações paradoxais (agitação)"},
  {tipo:"raro", item:"Síndrome de abstinência se uso prolongado, delirium em idosos, broncoespasmo"},
],

alertas:[
  {nivel:"crit", txt:"DEPRESSÃO RESPIRATÓRIA + APNEIA — monitorização contínua SpO2/FR, ventilação assistida pronta, naloxona/flumazenil disponíveis."},
  {nivel:"crit", txt:"REVERSÃO: FLUMAZENIL 0,2 mg IV, repetir 0,3 mg/min (máx 3 mg). Duração curta (~1h) — RE-SEDAÇÃO possível. NÃO usar em paciente CRÔNICO de BZD (precipita convulsão)."},
  {nivel:"warn", txt:"UTI: BZD pioram DELIRIUM (PADIS guidelines 2018) — preferir dexmedetomidina/propofol. Se necessário BZD: lorazepam tem menos acúmulo que midazolam."},
  {nivel:"warn", txt:"USO PROLONGADO >7 dias: síndrome de abstinência (tremor, agitação, convulsão) — DESMAMAR 10-20%/dia."},
  {nivel:"info", txt:"IDOSO: meia-vida pode chegar a 12h por acúmulo — reduzir dose 50%, reavaliar frequentemente."},
],

preparo:"Bolus: pode ser puro ou diluído em SF 1:1. BIC: 50 mg em 90 mL SF = 0,5 mg/mL, iniciar 1-10 mL/h. Intranasal: 5 mg/mL pura, máx 1 mL/narina.",

monitor:"SpO2, FR, PA contínua durante sedação. RASS/Ramsay em UTI. CAM-ICU 1×/turno em UTI.",

diretriz:"ACEP Procedural Sedation 2014. Neurocritical Care Status Epilepticus 2016. PADIS UTI 2018. RAMPART trial.",
fluxo:null,
calcs:[],
},

/* ============== PROPOFOL ============== */
{id:"med-propofol", classe:"Hipnótico-sedativo IV", grupo:"sedativo",
nome:"Propofol",
sin:["Diprivan","Propovan"],
formas:[
  "Emulsão lipídica 10 mg/mL — frasco 20 mL (200 mg) ou 100 mL (1000 mg)",
  "Cor branca leitosa (emulsão óleo-água)",
],
resumo:"Sedativo hipnótico potente, início ultrarrápido. Sedação UTI, IOT, anestesia. Cuidado com hipotensão e síndrome de infusão (PRIS).",
dose_rapida:"Indução IOT: 1-2,5 mg/kg IV | BIC UTI: 5-50 mcg/kg/min",

doses:[
  {ind:"Indução IOT (SRI)", dose:"1-2,5 mg/kg IV bolus", obs:"Início <60 seg. Reduzir 25-50% em idoso/hipotenso/hipovolêmico. NÃO usar em choque (preferir cetamina/etomidato)."},
  {ind:"Sedação contínua UTI (paciente intubado)", dose:"5-50 mcg/kg/min IV BIC", obs:"RASS alvo -2 a 0. PADIS: preferível a BZD. Monitor triglicérides 72h."},
  {ind:"Sedação procedural curta", dose:"0,5-1 mg/kg IV bolus + 0,5 mg/kg PRN", obs:"Endoscopia, cardioversão. Ventilação preparada — depressão respiratória."},
  {ind:"Status epilepticus refratário", dose:"Bolus 1-2 mg/kg + BIC 1-10 mg/kg/h", obs:"IOT obrigatória. UTI com EEG. Risco PRIS se >4 mg/kg/h por >48h."},
  {ind:"↑PIC / TCE", dose:"BIC 10-50 mcg/kg/min", obs:"Reduz consumo O2 cerebral. Vantagem: reversão rápida para avaliação neurológica."},
  {ind:"Pediatria — sedação", dose:"Indução 2,5-3,5 mg/kg. BIC: cautela (risco PRIS aumentado). Evitar <2 meses.", obs:"Não 1ª escolha em pediatria por PRIS."},
],

ajustes:{
  irc:"Sem ajuste.",
  iht:"Sem ajuste rotineiro; cautela em IH grave.",
  idoso:"Reduzir 25-50% (sensibilidade aumentada, maior hipotensão).",
  gestante:"Categoria B — usar para cesariana. Atravessa placenta — depressão neonatal.",
  aleita:"Pequena quantidade — uso pontual aceito.",
  ped:"Indução 2,5-3,5 mg/kg. BIC com cautela (PRIS). Evitar <2 meses.",
},

mecanismo:"Potencializa receptor GABA-A no SNC → hiperpolarização → sedação profunda + amnésia. SEM efeito analgésico. Vasodilatação venosa/arterial direta → ↓pré-carga → ↓PA. Reduz consumo cerebral de O2 e PIC. Também inibe NMDA e canais Ca²⁺ tipo-T.",

farmacocin:{
  absorc:"IV apenas",
  distrib:"Altamente lipofílico — redistribuição rápida (cessar efeito rápido)",
  metab:"Hepático (glucuronidação) + extra-hepático (pulmão, rim)",
  elimin:"Renal (metabólitos inativos)",
  meiavida:"Eliminação 4-7h | Contexto-sensitive 30 min após BIC 24h",
  ligacao:"97-99%",
},

espectro:[
  "Indução de IOT (eletivo, paciente estável)",
  "Sedação UTI (preferida vs BZD — PADIS)",
  "Sedação procedural curta",
  "Status epilepticus refratário (IOT)",
  "↑PIC em TCE",
],

interacoes:[
  {droga:"Opioides + BZD", efeito:"Sinergia depressora respiratória — reduzir doses 30-50%."},
  {droga:"Anti-hipertensivos, β-bloq", efeito:"Hipotensão potencializada — volume + dose reduzida."},
  {droga:"Halogenados", efeito:"Hipotensão aditiva — reduzir doses."},
],

efeitos:[
  {tipo:"comum", item:"Hipotensão, dor à injeção, apneia transitória, bradicardia, mioclonia"},
  {tipo:"sério", item:"Síndrome de infusão do propofol (PRIS), acidose lática, rabdomiólise, pancreatite"},
  {tipo:"raro", item:"Reação anafilactoide, sepse por contaminação da emulsão (trocar equipo 12h)"},
],

alertas:[
  {nivel:"crit", txt:"SÍNDROME DE INFUSÃO DO PROPOFOL (PRIS): em uso >4 mg/kg/h por >48h → acidose lática, rabdomiólise, hipercalemia, IC, óbito. Manter <4 mg/kg/h se possível. Dosar CK e lactato seriado."},
  {nivel:"crit", txt:"HIPOTENSÃO importante — NÃO usar em CHOQUE/PCR (preferir etomidato ou cetamina). Pré-carga + dose reduzida em idoso/cardiopata."},
  {nivel:"crit", txt:"DEPRESSÃO RESPIRATÓRIA + APNEIA — preparar VA. NÃO usar em sedação consciente sem suporte ventilatório."},
  {nivel:"warn", txt:"SEM ANALGESIA — SEMPRE associar opioide se dor (fentanil/morfina)."},
  {nivel:"warn", txt:"HIPERTRIGLICERIDEMIA em uso prolongado — dosar triglicérides 72h. Risco pancreatite."},
  {nivel:"warn", txt:"TROCAR EQUIPO/SERINGA cada 12h — risco contaminação bacteriana (emulsão lipídica)."},
  {nivel:"info", txt:"DOR À INJEÇÃO em veia pequena — usar veia calibrosa OU pré-tratar com lidocaína 20-40 mg IV."},
],

preparo:"Pode ser usado PURO (10 mg/mL) ou diluído em SG 5% até 2 mg/mL. Trocar seringa/equipo cada 12h. NÃO misturar com outras drogas (emulsão).",

monitor:"PA invasiva ideal em BIC, ECG, SpO2, FR. CK + lactato + triglicérides 72h em BIC prolongada. RASS em UTI.",

diretriz:"PADIS UTI 2018. ASA Sedação Procedural. Neurocritical Care Refractory SE.",
fluxo:null,
calcs:[],
},

/* ============== CETAMINA ============== */
{id:"med-cetamina", classe:"Anestésico dissociativo + analgésico", grupo:"sedativo",
nome:"Cetamina",
sin:["Ketamin","Ketalar","Cetamax"],
formas:[
  "Ampola 50 mg/mL — 2 mL (100 mg) ou 10 mL (500 mg)",
  "Ampola 10 mg/mL",
],
resumo:"Anestésico dissociativo único — PRESERVA reflexos VA + estabilidade hemodinâmica + broncodilatação. IDEAL em asma grave, choque, queimadura, pediatria.",
dose_rapida:"IOT: 1-2 mg/kg IV | Procedural: 1-2 mg/kg IV ou 3-5 mg/kg IM | Analgesia: 0,1-0,3 mg/kg",

doses:[
  {ind:"Indução IOT — especialmente em ASMA, CHOQUE, QUEIMADURA", dose:"1-2 mg/kg IV em 1 min", obs:"PRESERVA reflexos. Broncodilata. Estabilidade hemodinâmica. ESCOLHA em hipotensão/asma grave."},
  {ind:"Sedação procedural pediátrica (padrão-ouro)", dose:"1-2 mg/kg IV bolus OU 3-5 mg/kg IM", obs:"Atropina 0,01 mg/kg pré (reduz sialorreia). Midazolam 0,05 mg/kg para reduzir disforia."},
  {ind:"Analgesia em dor refratária (sub-dissociativa)", dose:"0,1-0,3 mg/kg IV em 10 min OU 0,1 mg/kg/h BIC", obs:"Reduz necessidade de opioides. Dor neuropática, trauma, queimadura."},
  {ind:"Status asmáticus refratário", dose:"Bolus 1-2 mg/kg + BIC 1-3 mg/kg/h", obs:"Broncodilatação direta. Reduz consumo O2. Pode evitar IOT em casos selecionados."},
  {ind:"Sedação UTI (alternativa)", dose:"BIC 0,1-2 mg/kg/h", obs:"Útil em choque, asma, queimado. Sem depressão respiratória significativa."},
  {ind:"Agitação grave / contenção química (pré-hospitalar)", dose:"4-5 mg/kg IM (puro)", obs:"Início 3-5 min. Atropina + lorazepam para reações disfóricas."},
  {ind:"Pediatria sedação", dose:"1-2 mg/kg IV ou 3-5 mg/kg IM", obs:"PADRÃO-OURO em pediatria. ACEP."},
],

ajustes:{
  irc:"Sem ajuste rotineiro.",
  iht:"Reduzir em IH grave.",
  idoso:"Reduzir 25-30%. Maior risco reação emergência (disforia).",
  gestante:"Categoria B — pode usar em IOT/cesariana. Mantém PA materna.",
  aleita:"Compatível dose única; descartar leite 6-12h se uso pontual.",
  ped:"PADRÃO em sedação procedural. 1-2 mg/kg IV ou 3-5 mg/kg IM. Atropina pré.",
},

mecanismo:"Antagonista NMDA (glutamato) → bloqueia transmissão excitatória → 'anestesia dissociativa' (paciente desconectado mas com reflexos preservados). Estimulação simpática indireta → ↑PA, ↑FC, ↑DC. Broncodilatador direto (β2 + relaxa musc lisa). Analgesia em dose sub-anestésica via NMDA + μ-opioide fraco.",

farmacocin:{
  absorc:"IV: 30 seg | IM: 3-5 min | VO: 30 min | Intranasal: 5-10 min",
  distrib:"Lipossolúvel — atravessa BBB rápido",
  metab:"Hepático CYP3A4/CYP2B6 → norcetamina (ativa, 1/3 potência)",
  elimin:"Renal (90% metabólitos)",
  meiavida:"2-3h",
  ligacao:"~50%",
},

espectro:[
  "IOT em paciente HIPOTENSO/CHOQUE/ASMA/QUEIMADO — indução de escolha",
  "Sedação procedural pediátrica (padrão-ouro)",
  "Analgesia sub-dissociativa em dor refratária",
  "Status asmáticus (broncodilatação direta)",
  "Sedação UTI em pacientes com instabilidade",
  "Depressão refratária (esketamina spray nasal — uso especializado)",
],

interacoes:[
  {droga:"BZD", efeito:"Reduz disforia (favorável). Combinar 0,05 mg/kg midazolam pré em adulto."},
  {droga:"Opioides", efeito:"Sinergia analgésica útil; depressão SNC — reduzir doses."},
  {droga:"ISRS/IMAO", efeito:"Síndrome serotoninérgica — cautela."},
  {droga:"Halogenados", efeito:"Mascarar simpatomimético."},
],

efeitos:[
  {tipo:"comum", item:"↑PA/FC, sialorreia, lacrimação, nistagmo, mioclonia, náusea pós-procedimento, reação de emergência (disforia, alucinação — 20% adultos, menos em ped)"},
  {tipo:"sério", item:"Laringoespasmo (raro), apneia (dose alta IV rápida), aumento PIC (controverso atual — provável segurança), crise hipertensiva grave"},
  {tipo:"raro", item:"Síndrome serotoninérgica, cistite intersticial (uso crônico recreativo)"},
],

alertas:[
  {nivel:"crit", txt:"INDUTOR PREFERIDO em CHOQUE, ASMA GRAVE, QUEIMADO — preserva PA. NÃO causa hipotensão como propofol/etomidato (em sepse crônica reposo pode causar relativa)."},
  {nivel:"warn", txt:"REAÇÃO DE EMERGÊNCIA (disforia/alucinação): 20% adultos. PREVENIR com midazolam 0,5-1 mg IV pré. Ambiente calmo pós-procedimento."},
  {nivel:"warn", txt:"SIALORREIA AUMENTADA — PRÉ-TRATAR ATROPINA 0,01 mg/kg (especialmente pediatria, broncoscopia)."},
  {nivel:"warn", txt:"↑PA/FC — evitar em IAM/SCA ativo, dissecção aórtica, HAS maligna não-tratada. Controvérsia em ↑PIC: evidência recente sugere segurança em TCE estável."},
  {nivel:"info", txt:"DOSE SUB-DISSOCIATIVA (0,1-0,3 mg/kg) em 10 min: alternativa em dor refratária SEM opioide. Útil em queimado, trauma."},
  {nivel:"info", txt:"PEDIATRIA: 1ª linha em sedação procedural (segura, eficaz). ACEP padrão."},
],

preparo:"Bolus IV: puro ou diluído 1:10 em SF. BIC: 500 mg em 250 mL SF = 2 mg/mL. Intranasal: usar concentração alta (50 mg/mL), máx 1 mL/narina.",

monitor:"PA, FC (esperar ↑10-20%), SpO2, FR. Profundidade de sedação. Observação 1-2h pós-bolus.",

diretriz:"ACEP Procedural Sedation 2014. PALICC Pediatric Sedation. ECCS Asthma 2020.",
fluxo:null,
calcs:[],
},

/* ============== ETOMIDATO ============== */
{id:"med-etomidato", classe:"Hipnótico imidazólico", grupo:"sedativo",
nome:"Etomidato",
sin:["Hypnomidate","Amidato"],
formas:[
  "Ampola 20 mg/10 mL (2 mg/mL)",
],
resumo:"Hipnótico de início ultrarrápido com mínima alteração hemodinâmica. PRINCIPAL indutor IOT em paciente HEMODINAMICAMENTE INSTÁVEL. Cuidado: supressão adrenal.",
dose_rapida:"Indução IOT: 0,2-0,3 mg/kg IV em 30-60 seg",

doses:[
  {ind:"Indução IOT (SRI) — em INSTABILIDADE HEMODINÂMICA", dose:"0,2-0,3 mg/kg IV em 30-60 seg", obs:"Padrão em choque hipovolêmico/séptico. Início <30 seg. Mínima alteração PA/FC."},
  {ind:"Cardioversão sincronizada", dose:"0,1-0,15 mg/kg IV", obs:"Sedação rápida e estável. Alternativa a propofol em cardiopata."},
  {ind:"Pediatria", dose:"0,2-0,4 mg/kg IV", obs:"Cautela — risco supressão adrenal (importante em criança)."},
],

ajustes:{
  irc:"Sem ajuste.",
  iht:"Sem ajuste rotineiro.",
  idoso:"Reduzir 20-30%.",
  gestante:"Categoria C — uso emergencial em IOT obstétrica aceitável.",
  aleita:"Sem dados; dose única aceita.",
  ped:"0,2-0,4 mg/kg IV. Atenção à supressão adrenal.",
},

mecanismo:"Modula receptor GABA-A → hipnose rápida. Cardiovasculáriamente ESTÁVEL (mínima vasodilatação ou depressão miocárdica). Inibe 11-β-hidroxilase (síntese cortisol) → SUPRESSÃO ADRENAL transitória.",

farmacocin:{
  absorc:"IV apenas",
  distrib:"Lipossolúvel — rápida distribuição cerebral",
  metab:"Hepático (esterases)",
  elimin:"Renal (75% metabólitos) + biliar",
  meiavida:"Eliminação 2-5h | Efeito clínico 5-10 min",
  ligacao:"75%",
},

espectro:[
  "Indução de IOT em paciente HEMODINAMICAMENTE INSTÁVEL (choque)",
  "Sedação para cardioversão",
  "Procedimentos curtos com necessidade de estabilidade cardiovascular",
],

interacoes:[
  {droga:"Opioides", efeito:"Sinergia depressora — reduzir doses."},
  {droga:"BZD", efeito:"Sinergia depressora SNC."},
],

efeitos:[
  {tipo:"comum", item:"Mioclonia (30-60% — sem significado clínico), dor à injeção, náusea/vômito pós-operatório, supressão adrenal transitória (4-24h)"},
  {tipo:"sério", item:"Supressão adrenal prolongada em uso CRÔNICO (BIC) — controvérsia em sepse"},
  {tipo:"raro", item:"Reação anafilactoide, laringoespasmo, apneia (dose alta)"},
],

alertas:[
  {nivel:"crit", txt:"SUPRESSÃO ADRENAL transitória (4-24h) por inibição 11-β-hidroxilase. Controvérsia em SEPSE: estudo CORTICUS sugere associação com mortalidade — uso DOSE ÚNICA é provavelmente seguro, BIC contraindicado em sepse."},
  {nivel:"crit", txt:"INDUTOR DE ESCOLHA em CHOQUE/INSTABILIDADE HEMODINÂMICA — mínima alteração PA. Alternativa: cetamina (também estável)."},
  {nivel:"warn", txt:"MIOCLONIA na indução em 30-60% — sem significado clínico, mas pode mimetizar convulsão."},
  {nivel:"warn", txt:"DOR À INJEÇÃO em veia pequena — usar veia calibrosa OU pré-tratar com lidocaína."},
  {nivel:"info", txt:"NÃO usar BIC em paciente séptico — supressão adrenal pode piorar choque."},
],

preparo:"PURO IV bolus. Pode diluir em SF para reduzir dor de injeção. NÃO usar em BIC.",

monitor:"PA, FC, SpO2 durante indução. Mioclonia esperada — não tratar. Cortisol matinal se uso repetido em sepse.",

diretriz:"SBA IOT 2020. CORTICUS trial. Estudos de SRI em choque.",
fluxo:null,
calcs:[],
},

/* ============== FENTANIL ============== */
{id:"med-fentanil", classe:"Opioide sintético potente — μ-agonista", grupo:"analgesia",
nome:"Fentanil",
sin:["Fentanyl","Sublimaze"],
formas:[
  "Ampola 0,05 mg/mL (50 mcg/mL) — 2 mL, 5 mL, 10 mL",
  "Adesivo transdérmico 12,5/25/50/75/100 mcg/h (dor crônica)",
],
resumo:"Opioide 100× mais potente que morfina. Curta ação, SEM liberação histamínica. Padrão em SRI, sedação procedural, analgesia em instável.",
dose_rapida:"SRI: 2-3 mcg/kg IV | Procedural: 1-2 mcg/kg | BIC: 0,5-3 mcg/kg/h",

doses:[
  {ind:"Sedação procedural (analgesia)", dose:"1-2 mcg/kg IV em 5 min (50-100 mcg adulto)", obs:"Combinar com propofol/cetamina."},
  {ind:"IOT — SRI (analgesia pré-laringoscopia)", dose:"2-3 mcg/kg IV em 3 min antes da indução", obs:"Reduz resposta simpática à laringoscopia. Útil em ↑PIC, dissecção, SCA."},
  {ind:"Analgesia em UTI (BIC)", dose:"BIC 0,5-3 mcg/kg/h após bolus 1 mcg/kg", obs:"Padrão em intubado. Titular conforme BPS/CPOT."},
  {ind:"Dor aguda em emergência (não-procedural)", dose:"25-50 mcg IV cada 5-10 min titulado", obs:"Início rápido. Preferido em hipotensão/asma/anafilaxia (sem histamina)."},
  {ind:"Dor crônica (transdérmico)", dose:"12,5-100 mcg/h adesivo cada 72h", obs:"Iniciar APENAS em paciente já tolerante a opioides. NÃO opioide-naive."},
  {ind:"Pediatria — sedação", dose:"1-2 mcg/kg IV", obs:"BIC: 0,5-2 mcg/kg/h."},
],

ajustes:{
  irc:"Sem ajuste rotineiro; ClCr <30: acúmulo metabólitos possível (cautela em BIC).",
  iht:"Reduzir 25-50% em IH grave.",
  idoso:"Reduzir 50% — maior sensibilidade.",
  gestante:"Categoria C — depressão respiratória neonatal se uso periparto. Aceito em SRI obstétrica.",
  aleita:"Pequena quantidade no leite — dose única segura, cautela uso repetido.",
  ped:"1-2 mcg/kg IV; BIC 0,5-2 mcg/kg/h. RN: cautela.",
},

mecanismo:"Agonista μ-opioide forte (>κ, δ). Liga receptor μ → ↓liberação NT excitatórios (subst P, glutamato) + hiperpolarização → ↓transmissão dor. Lipossolúvel → atravessa BBB rápido (início ultrarrápido). NÃO libera histamina (vantagem em hipotenso, asma, anafilaxia).",

farmacocin:{
  absorc:"IV: 30 seg-1 min | IM: 7-15 min | TDS: 12-24h | Intranasal: 2-5 min",
  distrib:"Lipossolúvel — distribuição cerebral rápida",
  metab:"Hepático CYP3A4 → metabólitos inativos (norfentanil)",
  elimin:"Renal (75% metabólitos, <10% inalterado)",
  meiavida:"Eliminação 2-4h | Contexto-sensitivo após BIC 4h: 30-60 min",
  ligacao:"80-85%",
},

espectro:[
  "SRI (analgesia pré-laringoscopia) — padrão",
  "Sedação procedural (combinado com sedativo)",
  "Analgesia em UTI (BIC, paciente intubado)",
  "Dor aguda em hipotenso/asma/anafilaxia (sem histamina)",
  "Anestesia geral (uso especializado)",
],

interacoes:[
  {droga:"BZD", efeito:"Sinergia depressora — depressão respiratória, óbito. CDC warning. Reduzir 50%."},
  {droga:"Outros opioides", efeito:"Sinergia — não combinar; converter equianalgesia."},
  {droga:"Inibidores CYP3A4 (claritromicina, fluconazol)", efeito:"↑ fentanil — reduzir dose."},
  {droga:"ISRS/IMAO", efeito:"Síndrome serotoninérgica — cautela."},
],

efeitos:[
  {tipo:"comum", item:"Sedação, náusea/vômito, constipação, prurido, hipotensão leve, bradicardia"},
  {tipo:"sério", item:"Depressão respiratória, apneia, RIGIDEZ TORÁCICA (bolus rápido alto), hipotensão grave, dependência"},
  {tipo:"raro", item:"Síndrome serotoninérgica, hiperalgesia opioidérgica (uso crônico)"},
],

alertas:[
  {nivel:"crit", txt:"DEPRESSÃO RESPIRATÓRIA — monitor SpO2/FR, ventilação preparada. ANTÍDOTO: NALOXONA 0,04-0,4 mg IV titulada."},
  {nivel:"crit", txt:"RIGIDEZ TORÁCICA / CHEST WALL RIGIDITY: em bolus rápido >5 mcg/kg pode impedir ventilação. Tratar com BNM + ventilação assistida."},
  {nivel:"crit", txt:"NÃO USAR ADESIVO em OPIOIDE-NAIVE (overdose fatal). Apenas paciente JÁ TOLERANTE a opioides."},
  {nivel:"warn", txt:"BIC + BZD: sinergia depressora respiratória — reduzir AMBOS em 50%. CDC warning."},
  {nivel:"warn", txt:"ACÚMULO em BIC >72h — meia-vida contexto-sensitivo aumenta. Desmamar gradualmente."},
  {nivel:"info", txt:"VANTAGEM vs MORFINA: sem liberação histamínica — preferir em asma, anafilaxia, hipotensão, IRC."},
],

preparo:"Bolus: puro ou diluído 1:10 (50 mcg em 10 mL SF = 5 mcg/mL). BIC: 500 mcg em 90 mL SF = 5 mcg/mL, iniciar 0,5-3 mcg/kg/h.",

monitor:"SpO2, FR contínua. Escala de dor (NRS ou BPS/CPOT em VM). RASS em UTI. Naloxona disponível.",

diretriz:"ASA Sedação Procedural. PADIS UTI 2018. ACEP Pain Management 2017.",
fluxo:null,
calcs:[],
},

);
