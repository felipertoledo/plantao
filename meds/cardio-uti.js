/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — meds/cardio-uti.js
   11 medicações
   Grupos: antiarritmico, vasopressor
   =========================================================== */

MEDICACOES.push(

/* ============== ANTIARRITMICO (2) ============== */

{id:"med-adenosina", contexto:["pa","ubs"], classe:"Antiarrítmico — nucleosídeo purínico", grupo:"antiarritmico",
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
{id:"med-amiodarona", contexto:["pa","ubs"], classe:"Antiarrítmico Classe III (predominante)", grupo:"antiarritmico",
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

/* ============== VASOPRESSOR (9) ============== */

{id:"med-adrenalina", contexto:["pa"], classe:"Vasopressor + broncodilatador — α/β-agonista", grupo:"vasopressor",
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
{id:"med-atropina", contexto:["pa"], classe:"Anticolinérgico — antagonista muscarínico", grupo:"vasopressor",
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
{id:"med-dobutamina", contexto:["pa"], classe:"Inotrópico — β1-agonista", grupo:"vasopressor",
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
{id:"med-esmolol", contexto:["pa"], classe:"β1-bloqueador IV — cardiosseletivo ultra-curto", grupo:"vasopressor",
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
{id:"med-hidralazina", contexto:["pa"], classe:"Vasodilatador arterial direto", grupo:"vasopressor",
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
{id:"med-nitroglicerina", contexto:["pa"], classe:"Vasodilatador venoso (predominante) — nitrato", grupo:"vasopressor",
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
{id:"med-nitroprussiato", contexto:["pa"], classe:"Vasodilatador arterial + venoso direto", grupo:"vasopressor",
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
{id:"med-noradrenalina", contexto:["pa"], classe:"Vasopressor — Catecolamina α1+β1", grupo:"vasopressor",
nome:"Noradrenalina",
sin:["norepinefrina","NA","NE","Levophed"],
formas:[
  "Ampola 4 mg/4 mL (1 mg/mL)",
  "Ampola 16 mg/16 mL",
],
resumo:"1ª LINHA em choque distributivo (sepse, anafilaxia refratária). Vasoconstrictor potente com leve aumento de débito. Pode ser periférico até 6h se central indisponível.",
dose_rapida:"0,05-2 mcg/kg/min IV BIC. Iniciar 0,1 mcg/kg/min, titular cada 5-10 min",

doses:[
  {ind:"Choque séptico (1ª linha)", dose:"0,05-2 mcg/kg/min IV BIC", obs:"Alvo PAM ≥65 mmHg. Iniciar PA invasiva quando possível. Adicionar vasopressina se NE >0,25-0,5 mcg/kg/min."},
  {ind:"Choque anafilático refratário", dose:"0,05-1 mcg/kg/min IV BIC", obs:"Após adrenalina IM falhar. NÃO substitui adrenalina IM/IV em anafilaxia."},
  {ind:"Choque neurogênico", dose:"0,05-1 mcg/kg/min IV BIC", obs:"Após volume. Combina com dopamina/dobutamina se bradicardia."},
  {ind:"Choque cardiogênico hipotenso", dose:"0,05-1 mcg/kg/min IV BIC", obs:"Combinar com dobutamina para inotropismo."},
  {ind:"Pediatria", dose:"0,05-2 mcg/kg/min IV BIC", obs:"Mesma dose mcg/kg/min. Acesso central preferível."},
],

ajustes:{
  irc:"Sem ajuste — não eliminada renalmente.",
  iht:"Sem ajuste — metabolizada por COMT/MAO em diversos tecidos.",
  idoso:"Iniciar 0,025-0,05 mcg/kg/min. Maior sensibilidade arritmogênica.",
  gestante:"Categoria C — usar se benefício > risco. Pode reduzir fluxo uterino. NÃO atrasa em choque materno.",
  aleita:"Compatível. Meia-vida ultracurta.",
  ped:"Iniciar 0,05 mcg/kg/min. Mesmos princípios do adulto.",
},

mecanismo:"Agonista predominante de receptor α1-adrenérgico (vasoconstrição arterial e venosa) + agonista β1 leve (efeito cronotrópico/inotrópico). Em doses baixas: predomina α1. Em altas: ativa β1 e β2.",

farmacocin:{
  absorc:"Apenas IV (não absorvida VO).",
  distrib:"Distribuição rápida nos tecidos com receptores α/β.",
  metab:"Metabolizada por COMT (catecol-O-metiltransferase) e MAO (monoamina oxidase) — ubíqua. Sem dependência de fígado.",
  elimin:"Metabolitos inativos (ácido vanilmandélico, metanefrinas) excretados na urina.",
  meiavida:"~2 minutos (ULTRACURTA). Efeito clínico em 1-2 min de infusão. Cessa em <5 min após parar BIC.",
  ligacao:"~50% à albumina.",
},

interacoes:[
  {droga:"IMAO", efeito:"Crise hipertensiva grave. CONTRAINDICAÇÃO RELATIVA — usar 1/10 da dose."},
  {droga:"Antidepressivos tricíclicos", efeito:"Potencializa pressor — reduzir dose 50%."},
  {droga:"β-bloqueador", efeito:"Pode causar HAS reflexa por bloqueio β-vasodilatador. Manter NE — não suspender β-bloq agudo."},
  {droga:"Anestésicos halogenados", efeito:"Sensibilização miocárdica a arritmias."},
  {droga:"Linezolida", efeito:"Inibe MAO — risco hipertensão."},
],

efeitos:[
  {tipo:"comum", item:"Hipertensão, taquicardia, ansiedade, cefaleia, palidez"},
  {tipo:"sério", item:"Arritmias (taquicardia atrial/ventricular). Necrose tecidual se extravasamento. Isquemia digital/mesentérica em dose alta."},
  {tipo:"raro", item:"Bradicardia reflexa em PA muito alta. Edema pulmonar não-cardiogênico."},
],

alertas:[
  {nivel:"crit", txt:"EXTRAVASAMENTO: aplicar FENTOLAMINA 5-10 mg em 10 mL SF infiltrado localmente (antídoto). Risco de necrose tecidual. Centralizar acesso assim que possível."},
  {nivel:"crit", txt:"Em sepse: combinar com VASOPRESSINA 0,03 U/min FIXA quando NE >0,25-0,5 mcg/kg/min — reduz necessidade de NE e mortalidade (VANISH trial)."},
  {nivel:"warn", txt:"Pode ser administrada por ACESSO PERIFÉRICO por até 6h se central indisponível (evidência atual, SCCM 2023). Preferir veia calibrosa proximal."},
  {nivel:"warn", txt:"NÃO usar como única terapia — sempre otimizar VOLUME primeiro (fluido challenge 30 mL/kg) e tratar causa subjacente."},
  {nivel:"info", txt:"DESMAME: reduzir 0,05 mcg/kg/min cada 30-60 min conforme tolerar (manter PAM ≥65)."},
],

preparo:"DILUIÇÃO PADRÃO: 4 ampolas (16 mg total) em 250 mL SG 5% = 64 mcg/mL. Alternativa: 8 mg em 250 mL = 32 mcg/mL. Para 70 kg paciente, 0,1 mcg/kg/min = 7 mcg/min = 6,5 mL/h (concentração 64 mcg/mL). PROTEGER DA LUZ (oxidação — vira castanha = descartar). Trocar bolsa cada 24h.",

monitor:"PA contínua (idealmente PAi), FC, ECG. Débito urinário (alvo ≥0,5 mL/kg/h). Lactato (queda = melhora perfusão). Função renal. Inspeção do acesso (extravasamento). Perfusão de extremidades.",

diretriz:"Surviving Sepsis Campaign 2021. ACC/AHA Cardiogenic Shock 2022. SBC Choque Cardiogênico. SOAP II trial (Lancet 2010).",
fluxo:null,
calcs:[],
},
{id:"med-vasopressina", contexto:["pa"], classe:"Vasopressor não-adrenérgico — análogo ADH", grupo:"vasopressor",
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
);
