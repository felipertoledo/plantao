/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — BIBLIOTECA DE MEDICAÇÕES (PARTE 4)
   17 anti-hipertensivos crônicos — conforme DBHA 2025 (SBC/SBH/SBN)
   Trio de ouro: iSRA (IECA/BRA), BCC diidropiridínico, Tiazídico
   =========================================================== */

MEDICACOES.push(

/* ============== TIAZÍDICOS ============== */

/* === HIDROCLOROTIAZIDA === */
{id:"med-hidroclorotiazida", classe:"Diurético tiazídico", grupo:"anti_hipertensivo",
nome:"Hidroclorotiazida (HCTZ)",
sin:["HCTZ","Clorana"],
formas:["Comprimidos 25 mg, 50 mg — SUS/REMUME","Combinações fixas: HCTZ+Losartana, HCTZ+Enalapril, HCTZ+Captopril"],
resumo:"Tiazídico clássico — trio de ouro DBHA 2025. Disponível SUS amplamente. Eficácia 24h é INFERIOR à clortalidona/indapamida (preferir essas se acessível).",
dose_rapida:"12,5-25 mg VO 1×/d (manhã, máx 50 mg/d)",

doses:[
{ind:"HAS — monoterapia ou combinada", dose:"12,5-25 mg VO 1×/d (manhã)", obs:"Dose >25 mg tem pouco ganho de eficácia mas ↑ efeitos colaterais. Combinar preferencialmente com iSRA ou BCC (DBHA 2025)."},
{ind:"Edema (IC leve, edema idiopático)", dose:"25-100 mg VO 1×/d", obs:"Para edema mais intenso/IRC: usar furosemida."},
{ind:"Pediatria — HAS", dose:"1-2 mg/kg/d VO 1×/d (máx 50 mg/d)", obs:"Uso especializado."},
{ind:"Prevenção nefrolitíase cálcica recorrente", dose:"25 mg/d", obs:"Reduz Ca²⁺ urinário."},
],

ajustes:{
irc:"INEFICAZ se TFG <30 — usar furosemida. TFG 30-60: funciona, eficácia reduzida.",
iht:"Cuidado em cirrótico — risco encefalopatia (hipocalemia + alcalose).",
idoso:"Iniciar 12,5 mg. Risco hiponatremia e hipocalemia maior.",
gestante:"Categoria B — geralmente evitada (reduz volume plasmático fetal). NÃO 1ª linha em pré-eclâmpsia.",
aleita:"Compatível em baixa dose. Pode reduzir leite em dose maior.",
ped:"1-2 mg/kg/d.",
},

mecanismo:"Inibe co-transportador Na⁺/Cl⁻ no túbulo contorcido distal → ↑excreção Na⁺/Cl⁻/H₂O. Em uso crônico, efeito anti-hipertensivo é principalmente VASODILATADOR direto. Aumenta excreção K⁺/Mg²⁺/H⁺ e RETÉM Ca²⁺ (útil em osteoporose).",

farmacocin:{
absorc:"VO: 60-80% (variável)",
distrib:"Ampla",
metab:"Mínimo",
elimin:"Renal (95% inalterada)",
meiavida:"6-15h",
ligacao:"~40%",
},

espectro:["HAS — trio de ouro DBHA 2025","Edema leve","Prevenção nefrolitíase cálcica","Diabetes insipidus nefrogênico (paradoxal)"],

interacoes:[
{droga:"AINE", efeito:"REDUZ efeito anti-hipertensivo + risco IRA. EVITAR."},
{droga:"iSRA (IECA/BRA)", efeito:"SINERGIA — combinação preferencial. Risco hipercalemia em volume baixo."},
{droga:"Lítio", efeito:"↑ nível lítio (toxicidade)."},
{droga:"Digoxina", efeito:"Hipocalemia ↑ toxicidade dig — repor K⁺."},
{droga:"Sulfonilureias", efeito:"Hiperglicemia leve."},
],

efeitos:[
{tipo:"comum", item:"Hipocalemia, hiponatremia, hiperuricemia (precipita gota), hiperglicemia leve, hipercalcemia, hipotensão postural, disfunção sexual"},
{tipo:"sério", item:"Hiponatremia grave em idoso (encefalopatia), pancreatite (raro), reação fotossensibilidade"},
{tipo:"raro", item:"Câncer de pele não-melanoma em uso prolongado, nefrite intersticial"},
],

alertas:[
{nivel:"crit", txt:"HIPONATREMIA grave em IDOSO: pode causar confusão, convulsão, óbito. Dosar Na+ basal + 2-4 semanas + 1 mês. Risco maior em ♀ idosa magra."},
{nivel:"warn", txt:"DBHA 2025: CLORTALIDONA e INDAPAMIDA são SUPERIORES à HCTZ em controle 24h e desfechos CV. Preferir se acessível."},
{nivel:"warn", txt:"TFG <30: INEFICAZ — usar FUROSEMIDA. TFG 30-60: ainda funciona em HAS, eficácia reduzida."},
{nivel:"info", txt:"FOTOPROTEÇÃO em uso prolongado — risco câncer de pele não-melanoma (estudo escandinavo)."},
],

preparo:"VO comprimido, manhã (evita noctúria). Com ou sem comida.",
monitor:"Na+, K+, ácido úrico, glicemia, creatinina basal + 2-4 sem + 6 meses + anual. PA. RAC anual em HAS+DM/IRC.",
diretriz:"DBHA 2025. ESC HTN 2024. AHA/ACC 2025.",
fluxo:null, calcs:[],
},

/* === CLORTALIDONA === */
{id:"med-clortalidona", classe:"Diurético tiazídico-like de longa ação", grupo:"anti_hipertensivo",
nome:"Clortalidona",
sin:["Hygroton","Higroton"],
formas:["Comprimidos 12,5 mg, 25 mg, 50 mg (uso isolado raro SUS — privada)"],
resumo:"Tiazídico-like de LONGA AÇÃO (T½ 40-60h). SUPERIOR à HCTZ em controle 24h e desfechos CV. PREFERIDA pela DBHA 2025 se disponível.",
dose_rapida:"12,5-25 mg VO 1×/d (manhã, máx 50 mg/d)",

doses:[
{ind:"HAS — PREFERIDA vs HCTZ se acessível", dose:"12,5-25 mg VO 1×/d (manhã)", obs:"Eficácia 1,5-2× maior que HCTZ na mesma dose."},
{ind:"HAS Resistente (4ª droga onde HCTZ falhou)", dose:"25-50 mg/d", obs:"Combinação com espironolactona após trio."},
{ind:"Prevenção AVC em idoso (SHEP trial)", dose:"12,5-25 mg/d", obs:"Evidência sólida de redução de desfechos CV."},
],

ajustes:{
irc:"INEFICAZ se TFG <30. TFG 30-60: funciona, eficácia reduzida.",
iht:"Cuidado — risco encefalopatia.",
idoso:"Iniciar 12,5 mg. PREFERIDA em idoso (SHEP trial).",
gestante:"Geralmente evitada.",
aleita:"Compatível dose baixa.",
ped:"Não rotina — preferir HCTZ.",
},

mecanismo:"Mecanismo idêntico ao tiazídico (inibe co-transportador Na⁺/Cl⁻ distal), MAS com T½ MUITO MAIOR (40-60h vs 6-15h da HCTZ) → cobertura 24h superior + maior redução de PA noturna (importante CV).",

farmacocin:{
absorc:"VO: ~65%",
distrib:"Ampla, liga eritrócitos",
metab:"Mínimo",
elimin:"Renal (50%)",
meiavida:"40-60h (vs HCTZ 6-15h)",
ligacao:"~75%",
},

espectro:["HAS — 1ª linha DBHA 2025 (preferida vs HCTZ)","HAS resistente","Prevenção AVC em idoso","Edema"],

interacoes:[
{droga:"AINE", efeito:"Reduz efeito + risco IRA — evitar."},
{droga:"iSRA", efeito:"SINERGIA — combinação preferencial."},
{droga:"Lítio", efeito:"↑ nível lítio."},
{droga:"Sulfonilureias", efeito:"Hiperglicemia."},
],

efeitos:[
{tipo:"comum", item:"Hipocalemia (MAIS pronunciada que HCTZ), hiponatremia, hiperuricemia, hiperglicemia, disfunção sexual"},
{tipo:"sério", item:"Hipocalemia grave, hiponatremia grave em idoso, alcalose"},
{tipo:"raro", item:"Câncer de pele não-melanoma em uso prolongado"},
],

alertas:[
{nivel:"crit", txt:"HIPOCALEMIA mais frequente que HCTZ — REPOR K+ proativamente (alimentos: banana, água-de-coco) OU associar poupador (losartana). Dosar K+ basal + 2 sem + 1 mês."},
{nivel:"warn", txt:"INDISPONIBILIDADE SUS é limitação — quando paciente tem acesso à farmácia privada, PREFERIR clortalidona vs HCTZ."},
{nivel:"info", txt:"DOSE: 12,5 mg clortalidona ≈ 25 mg HCTZ em potência. Eficácia 24h superior."},
],

preparo:"VO comprimido, manhã.",
monitor:"Na+, K+, ácido úrico, glicemia, creatinina basal + 2-4 sem + 6 meses.",
diretriz:"DBHA 2025. ALLHAT trial. SHEP trial.",
fluxo:null, calcs:[],
},

/* === INDAPAMIDA === */
{id:"med-indapamida", classe:"Diurético tiazídico-like (não-tiazídico estrutural)", grupo:"anti_hipertensivo",
nome:"Indapamida",
sin:["Natrilix","Indapen"],
formas:["Comprimidos 1,5 mg LP (mais usado) ou 2,5 mg — privada"],
resumo:"Tiazídico-like longa ação. Eficácia 24h excelente. EVIDÊNCIA SÓLIDA: HYVET (idoso ≥80a), PROGRESS (pós-AVC). Perfil metabólico melhor que HCTZ.",
dose_rapida:"1,5 mg LP VO 1×/d (manhã)",

doses:[
{ind:"HAS (alternativa à clortalidona)", dose:"1,5 mg LP VO 1×/d", obs:"Forma LP (liberação prolongada) preferida."},
{ind:"HAS em idoso ≥80a (HYVET)", dose:"1,5 mg LP", obs:"Demonstrou redução mortalidade e AVC em ≥80a."},
{ind:"Pós-AVC isquêmico (com perindopril)", dose:"1,5 mg + perindopril 4-8 mg", obs:"PROGRESS trial — redução AVC recorrente 28%."},
],

ajustes:{
irc:"INEFICAZ se TFG <30. TFG 30-60: funciona.",
iht:"Cuidado — risco encefalopatia.",
idoso:"PREFERIDA em idoso. Iniciar dose padrão.",
gestante:"Geralmente evitada.",
aleita:"Compatível dose baixa.",
ped:"Não rotina.",
},

mecanismo:"Mecanismo similar tiazídico (inibe co-transportador Na⁺/Cl⁻ distal), mas estrutura química diferente (indolina). Maior efeito VASODILATADOR direto → eficácia anti-hipertensiva sem necessidade de dose excessiva de diurese.",

farmacocin:{
absorc:"VO: ~95%",
distrib:"Ampla",
metab:"Hepático (CYP3A4)",
elimin:"Renal (60-70%) + fezes",
meiavida:"14-26h",
ligacao:"~75%",
},

espectro:["HAS — alternativa moderna","HAS em idoso ≥80a (HYVET)","Prevenção AVC recorrente (+ perindopril)","Edema leve"],

interacoes:[
{droga:"AINE", efeito:"Reduz efeito + risco IRA."},
{droga:"iSRA", efeito:"SINERGIA — combinação preferencial."},
{droga:"Lítio", efeito:"↑ lítio."},
{droga:"Drogas QT-longantes (macrolídeo, antifúngico)", efeito:"Risco Torsades em hipocalemia."},
],

efeitos:[
{tipo:"comum", item:"Hipocalemia (menor que clortalidona), hiponatremia, hiperuricemia leve, cefaleia"},
{tipo:"sério", item:"Hipocalemia grave, hiponatremia em idoso, prolongamento QT (raro)"},
{tipo:"raro", item:"Hepatite, fotossensibilidade"},
],

alertas:[
{nivel:"warn", txt:"PERFIL METABÓLICO MELHOR que HCTZ/clortalidona — menos hipocalemia, menos hiperglicemia. Boa escolha em DM2 + HAS."},
{nivel:"warn", txt:"PROLONGAMENTO QT em alta dose — cuidado com outros QT-longantes."},
{nivel:"info", txt:"PROGRESS trial: indapamida + perindopril após AVC reduz recorrência em 28%."},
],

preparo:"VO comprimido, manhã.",
monitor:"Na+, K+, ácido úrico, glicemia, creatinina basal + 2-4 sem + anual.",
diretriz:"DBHA 2025. HYVET (NEJM 2008). PROGRESS.",
fluxo:null, calcs:[],
},

/* ============== IECA ============== */

/* === CAPTOPRIL === */
{id:"med-captopril", classe:"IECA de curta ação — Inibidor da ECA", grupo:"anti_hipertensivo",
nome:"Captopril",
sin:["Capoten"],
formas:["Comprimidos 12,5 mg, 25 mg, 50 mg — SUS/REMUME"],
resumo:"IECA de curta ação. Útil em URGÊNCIA HIPERTENSIVA (VO/SL). NÃO é 1ª escolha para uso crônico (3-4×/d). Substituído por enalapril/ramipril em uso ambulatorial.",
dose_rapida:"Urgência: 25 mg VO/SL | Crônico: 25-50 mg VO 8/8h",

doses:[
{ind:"Urgência hipertensiva (sem LOA aguda)", dose:"25 mg VO ou sublingual; repetir 50 mg em 30-60 min se necessário", obs:"Início 15-30 min VO, 5-15 min SL. NÃO em emergência hipertensiva (preferir IV)."},
{ind:"HAS — manutenção", dose:"12,5-50 mg VO 8/8h ou 12/12h (máx 150 mg/d)", obs:"Posologia frequente — adesão ruim. Preferir enalapril/ramipril em crônico."},
{ind:"IC com FE reduzida", dose:"6,25 mg 8/8h, titular até 50 mg 8/8h", obs:"Reduz mortalidade. Em IC: preferível inibir SRAA mesmo com Cr até 30% acima basal."},
{ind:"Pós-IAM com disfunção VE", dose:"6,25 mg, depois 12,5-50 mg 8/8h", obs:"Iniciar nas primeiras 24h se PAS >100."},
{ind:"Teste de hiperaldosteronismo (off-label)", dose:"25-50 mg dose única, dosar aldosterona/renina 60-120 min", obs:"Investigação especializada."},
],

ajustes:{
irc:"ClCr 10-50: 75% da dose. ClCr <10: 50% da dose. Monitor K+ e creatinina (até ↑30% Cr basal é esperado e aceitável).",
iht:"Sem ajuste rotineiro.",
idoso:"Iniciar 6,25 mg. Risco hipotensão de 1ª dose e tonteira maior.",
gestante:"CATEGORIA D — TERATOGÊNICO. CONTRAINDICADO 2º e 3º trimestres (oligoidrâmnio, hipoplasia pulmonar). Trocar se gestação confirmada.",
aleita:"Compatível em dose baixa em mãe sem RN prematuro.",
ped:"0,3-2 mg/kg/dose 8/8h (uso especializado).",
},

mecanismo:"Inibe a enzima conversora de angiotensina (ECA) → bloqueia conversão de angiotensina I → angiotensina II → reduz vasoconstrição + redução de aldosterona + acúmulo de bradicinina (responsável por tosse seca e angioedema). Vasodilatação arterial e venosa, redução pré- e pós-carga.",

farmacocin:{
absorc:"VO: 60-75% (reduzida com comida — tomar 1h antes ou 2h após)",
distrib:"Pouca BBB",
metab:"Hepático parcial",
elimin:"Renal (95%)",
meiavida:"2-3h (curta!)",
ligacao:"25-30%",
},

espectro:["URGÊNCIA hipertensiva (VO/SL)","HAS crônica (mas posologia 8/8h limita adesão)","IC com FE reduzida (reduz mortalidade)","Pós-IAM com disfunção VE","Nefropatia diabética/hipertensiva"],

interacoes:[
{droga:"AINE", efeito:"REDUZ efeito + risco IRA aguda + hipercalemia. TRIPLE WHAMMY (iSRA + AINE + diurético) = nefrotóxico."},
{droga:"K+ suplementar, espironolactona", efeito:"HIPERCALEMIA — monitor K+."},
{droga:"Lítio", efeito:"↑ nível lítio."},
{droga:"BRA, alisquireno", efeito:"NÃO combinar — sem benefício, aumenta efeitos adversos (ONTARGET trial)."},
{droga:"Sacubitril (entresto)", efeito:"CONTRAINDICAÇÃO — angioedema. Wash-out 36h."},
],

efeitos:[
{tipo:"comum", item:"TOSSE SECA (10-15% — efeito de classe IECA, por bradicinina), tontura, hipotensão postural, hipercalemia leve, ↑ creatinina (até 30% aceitável)"},
{tipo:"sério", item:"ANGIOEDEMA (raro, 0,1-0,7%, mais comum em negros), IRA AGUDA (estenose arterial renal bilateral, hipovolemia), HIPERCALEMIA grave (IRC + K+ supl)"},
{tipo:"raro", item:"Neutropenia (captopril específico — dose alta), nefrite intersticial, disgeusia (perda paladar — captopril), proteinúria"},
],

alertas:[
{nivel:"crit", txt:"GESTAÇÃO: TERATOGÊNICO (categoria D). 2º-3º trimestres: oligoidrâmnio, hipoplasia pulmonar, óbito fetal. SE engravidar: SUSPENDER IMEDIATAMENTE. Pré-concepção: trocar para metildopa."},
{nivel:"crit", txt:"ANGIOEDEMA: pode ser fatal (vias aéreas). Maior risco em negros e história prévia. SUSPENDER definitivamente IECA (NÃO trocar por outro IECA — pode trocar por BRA com cautela, ou alternativa)."},
{nivel:"crit", txt:"ESTENOSE BILATERAL DE ARTÉRIA RENAL (ou unilateral em rim único): IECA causa IRA aguda — investigar se ↑Cr >30% após início."},
{nivel:"warn", txt:"TOSSE SECA: 10-15% — efeito de classe, NÃO desaparece. Trocar para BRA (losartana, valsartana) — sem bradicinina."},
{nivel:"warn", txt:"POSOLOGIA 8/8h em crônico = adesão ruim. PREFERIR enalapril (12/12h) ou ramipril (1×/d) em crônico."},
{nivel:"info", txt:"AUMENTO de Cr ATÉ 30% após início é ESPERADO e ACEITÁVEL — não suspender. >30%: investigar (estenose renal, hipovolemia, AINE)."},
],

preparo:"VO comprimido, em jejum (1h antes ou 2h após refeição — absorção 50% menor com comida).",
monitor:"PA, K+, creatinina basal + 1-2 sem + 1 mês + 6 meses. Tosse, sinais angioedema.",
diretriz:"DBHA 2025. ESC HF 2021. ACC/AHA HTN 2025.",
fluxo:null, calcs:[],
},

/* === ENALAPRIL === */
{id:"med-enalapril", classe:"IECA de meia ação", grupo:"anti_hipertensivo",
nome:"Enalapril",
sin:["Renitec","Vasopril","Eupressin"],
formas:["Comprimidos 5 mg, 10 mg, 20 mg — SUS/REMUME","Combinação fixa: enalapril + HCTZ"],
resumo:"IECA mais usado no SUS para uso crônico. Posologia 1-2×/d (boa adesão). Padrão em HAS + IC + nefroproteção.",
dose_rapida:"5-40 mg/d VO em 1-2 tomadas",

doses:[
{ind:"HAS — monoterapia ou combinada", dose:"5-10 mg VO 1×/d inicial; titular até 20-40 mg/d em 1 ou 2 tomadas", obs:"Padrão SUS. Combinar com BCC (anlodipino) ou tiazídico (HCTZ)."},
{ind:"IC com FE reduzida", dose:"2,5 mg 12/12h inicial; titular até 10-20 mg 12/12h (CONSENSUS dose alvo)", obs:"Reduz mortalidade (CONSENSUS, SOLVD)."},
{ind:"Pós-IAM com disfunção VE", dose:"2,5 mg 12/12h; titular até 10-20 mg 12/12h", obs:"Iniciar 24h pós-IAM se PAS >100."},
{ind:"Nefropatia diabética/proteinúrica", dose:"5-20 mg/d", obs:"Reduz proteinúria e progressão IRC. Monitor K+ e Cr."},
{ind:"Pediatria — HAS", dose:"0,08-0,5 mg/kg/d em 1-2 tomadas (máx 40 mg/d)", obs:"Uso especializado."},
],

ajustes:{
irc:"ClCr <30: reduzir 50%. ClCr <10: 25%. Monitor K+ e Cr.",
iht:"Sem ajuste rotineiro.",
idoso:"Iniciar 2,5-5 mg. Risco hipotensão de 1ª dose.",
gestante:"CATEGORIA D — TERATOGÊNICO 2º-3º trimestre. CONTRAINDICADO. Trocar se gestação.",
aleita:"Compatível em dose baixa.",
ped:"0,08-0,5 mg/kg/d.",
},

mecanismo:"Pró-droga (enalaprilato é o ativo). Inibe ECA → bloqueia angiotensina II → vasodilatação + ↓aldosterona. Mesma classe e efeitos do captopril, mas com posologia mais conveniente.",

farmacocin:{
absorc:"VO: 60% (não afetada por comida — vantagem vs captopril)",
distrib:"Ampla",
metab:"Hepático → enalaprilato (ativo)",
elimin:"Renal (60-80%)",
meiavida:"11h (enalaprilato — permite 1-2×/d)",
ligacao:"~50%",
},

espectro:["HAS crônica — 1ª linha SUS","IC com FE reduzida","Pós-IAM com disfunção VE","Nefroproteção em DM/HAS","Esclerodermia (renal crisis)"],

interacoes:[
{droga:"AINE", efeito:"REDUZ efeito + risco IRA + hipercalemia."},
{droga:"K+, espironolactona", efeito:"Hipercalemia — monitor."},
{droga:"Lítio", efeito:"↑ nível lítio."},
{droga:"BRA", efeito:"Não combinar (ONTARGET)."},
{droga:"Sacubitril/valsartana", efeito:"CONTRAINDICAÇÃO — wash-out 36h."},
],

efeitos:[
{tipo:"comum", item:"Tosse seca (10-15%), tontura, hipotensão, hipercalemia leve, ↑ Cr (até 30%)"},
{tipo:"sério", item:"Angioedema (raro), IRA aguda em estenose renal/hipovolemia, hipercalemia grave"},
{tipo:"raro", item:"Neutropenia, hepatite colestática, eritema multiforme"},
],

alertas:[
{nivel:"crit", txt:"GESTAÇÃO: TERATOGÊNICO categoria D. Se engravidar: SUSPENDER. Pré-concepção: trocar para metildopa."},
{nivel:"crit", txt:"ANGIOEDEMA: efeito de classe — pode ser fatal. SUSPENDER definitivamente IECA. Considerar BRA com cautela."},
{nivel:"warn", txt:"TOSSE SECA 10-15%: efeito de classe (bradicinina), trocar para BRA se intolerável."},
{nivel:"warn", txt:"TRIPLE WHAMMY: IECA + AINE + diurético = IRA aguda. EVITAR."},
{nivel:"info", txt:"AUMENTO Cr ATÉ 30% após início é ESPERADO. >30%: investigar."},
],

preparo:"VO comprimido, com ou sem alimento.",
monitor:"PA, K+, creatinina basal + 1-2 sem + 1 mês + 6 meses + anual.",
diretriz:"DBHA 2025. CONSENSUS trial. SOLVD.",
fluxo:null, calcs:[],
},

/* === RAMIPRIL === */
{id:"med-ramipril", classe:"IECA de longa ação", grupo:"anti_hipertensivo",
nome:"Ramipril",
sin:["Triatec","Naprix"],
formas:["Cápsulas 1,25 / 2,5 / 5 / 10 mg — privada/algum SUS"],
resumo:"IECA de LONGA ação (1×/d). Excelente evidência CV (HOPE trial — redução IAM/AVC/morte em alto risco). PREFERÍVEL ao enalapril quando acessível.",
dose_rapida:"2,5-10 mg VO 1×/d",

doses:[
{ind:"HAS — monoterapia ou combinada", dose:"2,5-5 mg VO 1×/d inicial; titular até 10 mg/d", obs:"Posologia 1×/d melhora adesão."},
{ind:"Prevenção CV em alto risco (HOPE trial)", dose:"10 mg VO 1×/d", obs:"Reduz IAM/AVC/morte CV em DM, doença vascular conhecida. Mesmo SEM HAS."},
{ind:"IC com FE reduzida", dose:"1,25-2,5 mg/d inicial; titular até 10 mg/d", obs:"Reduz mortalidade (AIRE trial pós-IAM)."},
{ind:"Pós-IAM com IC", dose:"2,5 mg 12/12h; titular até 5 mg 12/12h", obs:"AIRE trial."},
{ind:"Nefroproteção diabética", dose:"5-10 mg/d", obs:"Reduz proteinúria, progressão IRC."},
],

ajustes:{
irc:"ClCr <30: reduzir 50%. ClCr <10: 25%. Cuidado com K+.",
iht:"IH grave: reduzir dose 25-50%.",
idoso:"Iniciar 1,25 mg.",
gestante:"CATEGORIA D — CONTRAINDICADO 2º-3º trimestre.",
aleita:"Compatível em dose baixa.",
ped:"Uso especializado.",
},

mecanismo:"Pró-droga (ramiprilato é o ativo, T½ 13-17h). Inibe ECA → bloqueia angiotensina II. Efeitos tecidulares de ECA inibidor (cardioproteção e nefroproteção) potencialmente mais marcados que outros IECA.",

farmacocin:{
absorc:"VO: 50-60%",
distrib:"Ampla",
metab:"Hepático → ramiprilato (ativo)",
elimin:"Renal",
meiavida:"Ramipril 5h | Ramiprilato 13-17h (permite 1×/d)",
ligacao:"~73%",
},

espectro:["HAS crônica","Prevenção CV em alto risco (HOPE — DM, doença vascular)","IC com FE reduzida","Pós-IAM","Nefroproteção"],

interacoes:[
{droga:"AINE", efeito:"REDUZ efeito + IRA + hipercalemia."},
{droga:"K+, espironolactona", efeito:"Hipercalemia."},
{droga:"BRA, alisquireno", efeito:"Não combinar."},
{droga:"Sacubitril/valsartana", efeito:"CONTRAINDICAÇÃO."},
],

efeitos:[
{tipo:"comum", item:"Tosse seca (10-15%), tontura, hipotensão, hipercalemia, ↑Cr (≤30%)"},
{tipo:"sério", item:"Angioedema, IRA aguda, hipercalemia grave"},
{tipo:"raro", item:"Hepatite, neutropenia"},
],

alertas:[
{nivel:"crit", txt:"GESTAÇÃO: contraindicado 2º-3º trimestre."},
{nivel:"warn", txt:"HOPE trial: ramipril 10 mg em PACIENTE DE ALTO RISCO CV (DM, doença vascular) reduz IAM/AVC/morte CV ~25% — independente de HAS."},
{nivel:"info", txt:"VANTAGEM 1×/d vs enalapril (1-2×/d) — melhor adesão."},
],

preparo:"VO, com ou sem alimento.",
monitor:"PA, K+, creatinina basal + 1-2 sem + 1 mês + 6 meses.",
diretriz:"DBHA 2025. HOPE trial (NEJM 2000). AIRE trial.",
fluxo:null, calcs:[],
},

/* ============== BRA ============== */

/* === LOSARTANA === */
{id:"med-losartana", classe:"BRA — Bloqueador do Receptor da Angiotensina (AT1)", grupo:"anti_hipertensivo",
nome:"Losartana (Losartan)",
sin:["Cozaar","Aradois","Lopres"],
formas:["Comprimidos 50 mg, 100 mg — SUS/REMUME","Combinação fixa: losartana + HCTZ"],
resumo:"BRA mais usado no SUS. Sem tosse (ausência de bradicinina). 1ª linha em intolerância a IECA. Bom em nefropatia diabética, gota (efeito uricosúrico).",
dose_rapida:"50-100 mg VO 1×/d (máx 100 mg)",

doses:[
{ind:"HAS — monoterapia ou combinada", dose:"50 mg VO 1×/d inicial; titular até 100 mg/d", obs:"Dose única matinal. Combinar com HCTZ (combinação fixa SUS) ou anlodipino."},
{ind:"IC com FE reduzida (intolerância IECA)", dose:"25 mg/d inicial; titular até 100-150 mg/d (ELITE-II)", obs:"Mortalidade similar a captopril em IC."},
{ind:"Nefropatia diabética (DM2 com proteinúria)", dose:"50-100 mg/d", obs:"RENAAL trial — reduz progressão IRC."},
{ind:"AVC + HVE (hipertrofia VE)", dose:"50-100 mg/d", obs:"LIFE trial — superior a atenolol em prevenção desfechos CV em HAS com HVE."},
{ind:"HAS + gota recorrente (efeito uricosúrico único entre BRA)", dose:"50-100 mg/d", obs:"Única BRA que REDUZ ácido úrico — escolha em HAS + gota."},
{ind:"Pediatria — HAS", dose:"0,7-1,4 mg/kg/d (máx 100 mg/d)", obs:"Uso especializado."},
],

ajustes:{
irc:"ClCr <30: sem ajuste rotineiro mas monitor K+ e Cr. HD: dose pós-diálise.",
iht:"IH leve-moderada: 25 mg inicial. IH grave: cautela.",
idoso:"Sem ajuste mas iniciar 25 mg.",
gestante:"CATEGORIA D — TERATOGÊNICO (igual IECA). CONTRAINDICADO 2º-3º trimestre.",
aleita:"Evitar — sem dados suficientes.",
ped:"0,7-1,4 mg/kg/d.",
},

mecanismo:"Antagonista seletivo do receptor AT1 da angiotensina II → bloqueia ação da angiotensina II (vasoconstrição, liberação de aldosterona) SEM acumular bradicinina (diferente IECA). Por isso SEM tosse seca.",

farmacocin:{
absorc:"VO: 33% (1ª passagem hepática)",
distrib:"Ampla",
metab:"Hepático CYP2C9/CYP3A4 → EXP-3174 (metabólito ATIVO mais potente)",
elimin:"Fezes (60%) + Renal (35%)",
meiavida:"Losartana 2h | EXP-3174 6-9h (permite 1-2×/d)",
ligacao:">99%",
},

espectro:["HAS crônica — 1ª linha em intolerância IECA","IC com FE reduzida (alternativa)","Nefropatia diabética (RENAAL)","HVE em HAS (LIFE)","HAS + gota (uricosúrico)"],

interacoes:[
{droga:"AINE", efeito:"REDUZ efeito + IRA + hipercalemia."},
{droga:"K+, espironolactona", efeito:"Hipercalemia — monitor."},
{droga:"Lítio", efeito:"↑ lítio."},
{droga:"IECA", efeito:"Não combinar (ONTARGET)."},
{droga:"Rifampicina", efeito:"↓ losartana (indutor CYP)."},
{droga:"Fluconazol", efeito:"↓ conversão EXP-3174 — efeito reduzido."},
],

efeitos:[
{tipo:"comum", item:"Tontura, hiperсalemia leve, ↑Cr (até 30%), cefaleia, fadiga"},
{tipo:"sério", item:"Angioedema (RARO — muito menor que IECA, ~0,01-0,1%), IRA aguda em estenose renal/hipovolemia, hipercalemia grave"},
{tipo:"raro", item:"Hepatotoxicidade, anemia"},
],

alertas:[
{nivel:"crit", txt:"GESTAÇÃO: TERATOGÊNICO categoria D — IGUAL aos IECA. CONTRAINDICADO 2º-3º trimestre. Trocar para metildopa."},
{nivel:"warn", txt:"INTOLERÂNCIA A IECA por TOSSE: PRIMEIRA ESCOLHA é BRA — losartana NÃO causa tosse (sem bradicinina). ~80% dos pacientes toleram bem."},
{nivel:"warn", txt:"ANGIOEDEMA APÓS IECA: cautela ao trocar para BRA — embora raro, há cross-reativity. Discutir riscos."},
{nivel:"info", txt:"EFEITO URICOSÚRICO ÚNICO entre BRA: ESCOLHA em HAS + GOTA. Outras BRA não têm este efeito."},
],

preparo:"VO, com ou sem alimento.",
monitor:"PA, K+, creatinina basal + 1-2 sem + 1 mês + 6 meses + anual.",
diretriz:"DBHA 2025. LIFE trial. RENAAL trial.",
fluxo:null, calcs:[],
},

/* === VALSARTANA === */
{id:"med-valsartana", classe:"BRA — Bloqueador AT1", grupo:"anti_hipertensivo",
nome:"Valsartana (Valsartan)",
sin:["Diovan","Tareg"],
formas:["Comprimidos 40, 80, 160, 320 mg — privada","Combinação fixa: valsartana + HCTZ; valsartana + anlodipino; sacubitril + valsartana (Entresto)"],
resumo:"BRA com excelente evidência em IC (Val-HeFT, VALIANT pós-IAM). Componente do SACUBITRIL/VALSARTANA (Entresto) — pilar da IC moderna.",
dose_rapida:"80-320 mg/d VO 1-2×/d",

doses:[
{ind:"HAS", dose:"80-160 mg VO 1×/d; titular até 320 mg/d", obs:"Combinar com HCTZ (combinação fixa) ou anlodipino."},
{ind:"IC com FE reduzida (sem sacubitril)", dose:"40-160 mg 12/12h", obs:"Val-HeFT trial — alternativa a IECA."},
{ind:"Pós-IAM com IC ou disfunção VE", dose:"20-160 mg 12/12h", obs:"VALIANT trial — não inferior a captopril."},
{ind:"Sacubitril/valsartana (Entresto)", dose:"49/51 mg 12/12h, titular para 97/103 mg 12/12h (PARADIGM-HF)", obs:"PADRÃO em IC com FE reduzida moderna — REDUZ 20% mortalidade vs enalapril. Wash-out IECA 36h."},
],

ajustes:{
irc:"ClCr <30: monitor K+ e Cr.",
iht:"IH leve-moderada: 40 mg inicial. IH grave: cautela.",
idoso:"Iniciar 40-80 mg.",
gestante:"CATEGORIA D — contraindicado.",
aleita:"Evitar.",
ped:"1-2 mg/kg/d (uso especializado).",
},

mecanismo:"Antagonista seletivo AT1 — mesma classe da losartana. Não tem metabólito ativo (vs losartana — EXP-3174). Sem efeito uricosúrico.",

farmacocin:{
absorc:"VO: 23%",
distrib:"Ampla",
metab:"Hepático mínimo",
elimin:"Fezes (83%) + Renal",
meiavida:"6h",
ligacao:"~95%",
},

espectro:["HAS","IC com FE reduzida","Pós-IAM","Componente sacubitril/valsartana (Entresto) — IC FE reduzida moderna"],

interacoes:[
{droga:"AINE, K+, espironolactona, IECA", efeito:"Mesmas da losartana."},
{droga:"Sacubitril", efeito:"COMBINAÇÃO PADRÃO em IC — Entresto. NÃO combinar com IECA."},
],

efeitos:[
{tipo:"comum", item:"Tontura, hipercalemia, ↑Cr, cefaleia, fadiga"},
{tipo:"sério", item:"Angioedema (raro), IRA aguda, hipercalemia grave"},
{tipo:"raro", item:"Hepatotoxicidade"},
],

alertas:[
{nivel:"crit", txt:"GESTAÇÃO: contraindicado."},
{nivel:"warn", txt:"SACUBITRIL/VALSARTANA (Entresto): PADRÃO MODERNO de IC com FE reduzida (PARADIGM-HF — 20% redução mortalidade vs enalapril). Iniciar APÓS 36h sem IECA."},
{nivel:"info", txt:"SEM efeito uricosúrico — em HAS + gota, preferir LOSARTANA."},
],

preparo:"VO, com ou sem alimento.",
monitor:"PA, K+, creatinina basal + 1-2 sem + 1 mês + 6 meses.",
diretriz:"DBHA 2025. Val-HeFT. VALIANT. PARADIGM-HF.",
fluxo:null, calcs:[],
},

/* === TELMISARTANA === */
{id:"med-telmisartana", classe:"BRA — Bloqueador AT1 de LONGA ação", grupo:"anti_hipertensivo",
nome:"Telmisartana (Telmisartan)",
sin:["Micardis","Pritor"],
formas:["Comprimidos 40 mg, 80 mg — privada","Combinação: telmisartana + HCTZ; telmisartana + anlodipino"],
resumo:"BRA com a MAIOR meia-vida (24h). Excelente controle 24h. ONTARGET — não inferior a ramipril em prevenção CV. PPAR-γ parcial (benefício metabólico).",
dose_rapida:"40-80 mg VO 1×/d",

doses:[
{ind:"HAS", dose:"40 mg VO 1×/d inicial; titular até 80 mg/d", obs:"Cobertura 24h superior. Combinações fixas excelentes."},
{ind:"Prevenção CV em alto risco (alternativa a ramipril)", dose:"80 mg/d", obs:"ONTARGET trial — não inferior a ramipril (HOPE) em desfechos CV. Útil em intolerância a IECA."},
{ind:"DM2 + HAS (perfil metabólico favorável)", dose:"40-80 mg/d", obs:"PPAR-γ parcial — pode melhorar sensibilidade insulina."},
],

ajustes:{
irc:"Sem ajuste rotineiro (eliminação biliar).",
iht:"IH grave: contraindicada.",
idoso:"Sem ajuste.",
gestante:"CATEGORIA D — contraindicado.",
aleita:"Evitar.",
ped:"Não rotina.",
},

mecanismo:"Antagonista AT1 — mesma classe, mas MAIOR T½ (24h). Também ativa parcialmente PPAR-γ (receptor da glitazonas) → potencial efeito sensibilizador de insulina e melhora perfil lipídico (mas modesto).",

farmacocin:{
absorc:"VO: 42-58%",
distrib:"Ampla",
metab:"Hepático (glucuronidação)",
elimin:"Fezes (98%) — SEM eliminação renal significativa",
meiavida:"24h (a maior entre BRA!)",
ligacao:">99%",
},

espectro:["HAS — excelente cobertura 24h","Prevenção CV em alto risco (ONTARGET)","DM2 + HAS (perfil metabólico)","Nefroproteção"],

interacoes:[
{droga:"AINE, K+, IECA", efeito:"Como demais BRA."},
{droga:"Digoxina", efeito:"↑ digoxina ~50%."},
],

efeitos:[
{tipo:"comum", item:"Tontura, hipercalemia leve, ↑Cr leve, fadiga"},
{tipo:"sério", item:"Angioedema (raro), IRA aguda, hipercalemia grave"},
{tipo:"raro", item:"Hepatotoxicidade (IH grave: contraindicação)"},
],

alertas:[
{nivel:"crit", txt:"GESTAÇÃO: contraindicado."},
{nivel:"warn", txt:"T½ 24h — MELHOR cobertura noturna entre BRA. Útil em HAS com pico matinal/madrugada."},
{nivel:"info", txt:"ELIMINAÇÃO biliar (não renal) — útil em IRC avançada."},
{nivel:"info", txt:"PPAR-γ parcial: pode melhorar sensibilidade insulina. Benefício metabólico modesto mas real."},
],

preparo:"VO, com ou sem alimento.",
monitor:"PA, K+, creatinina basal + 1-2 sem + 1 mês + 6 meses.",
diretriz:"DBHA 2025. ONTARGET trial.",
fluxo:null, calcs:[],
},

/* ============== BCC DIIDROPIRIDÍNICOS ============== */

/* === ANLODIPINO === */
{id:"med-anlodipino", classe:"BCC diidropiridínico de longa ação", grupo:"anti_hipertensivo",
nome:"Anlodipino (Amlodipino)",
sin:["Norvasc","Pressat","Anlo"],
formas:["Comprimidos 5 mg, 10 mg — SUS/REMUME","Combinações fixas: anlodipino + losartana / valsartana / olmesartana"],
resumo:"BCC diidropiridínico mais usado no Brasil. Trio de ouro DBHA 2025. T½ longa (1×/d). Excelente em HAS, angina estável. Efeito principal: vasodilatação arterial.",
dose_rapida:"5-10 mg VO 1×/d",

doses:[
{ind:"HAS — monoterapia ou combinada", dose:"5 mg VO 1×/d inicial; titular até 10 mg/d", obs:"Combinação preferida: anlodipino + iSRA (ACCOMPLISH trial)."},
{ind:"Angina estável (vasoespástica ou crônica)", dose:"5-10 mg/d", obs:"Reduz consumo O2 + vasodilatação coronariana. Alternativa/adicional a β-bloq."},
{ind:"Doença de Raynaud", dose:"5-10 mg/d", obs:"Vasodilatador periférico."},
{ind:"Pediatria — HAS", dose:"0,1-0,6 mg/kg/d", obs:"Uso especializado."},
],

ajustes:{
irc:"Sem ajuste — metabolismo hepático.",
iht:"IH grave: iniciar 2,5 mg, titular lento.",
idoso:"Iniciar 2,5-5 mg.",
gestante:"Categoria C — pode usar em pré-eclâmpsia/HAS gestante quando metildopa insuficiente. Nifedipino retard é mais usado.",
aleita:"Compatível em dose baixa.",
ped:"0,1-0,6 mg/kg/d.",
},

mecanismo:"Bloqueia canais de Ca²⁺ tipo-L em musculatura lisa vascular (preferencial vs cardíaca) → vasodilatação ARTERIAL → ↓RVS → ↓PA. Mínimo efeito cardíaco (sem bradicardia, sem inotropismo negativo significativo). Vantagem vs verapamil/diltiazem.",

farmacocin:{
absorc:"VO: 60-65%",
distrib:"Ampla",
metab:"Hepático (CYP3A4) — completo",
elimin:"Renal (60% metabólitos)",
meiavida:"30-50h (!!) — permite 1×/d e estabilidade",
ligacao:">95%",
},

espectro:["HAS — trio de ouro (DBHA 2025)","Angina estável","Angina vasoespástica","Doença de Raynaud","HAS em gestante (alternativa)"],

interacoes:[
{droga:"Sinvastatina", efeito:"↑ sinvastatina (risco miopatia) — LIMITAR sinvastatina 20 mg/d. Preferir prava/rosuvastatina."},
{droga:"Inibidores CYP3A4 (claritromicina, cetoconazol, ritonavir)", efeito:"↑ anlodipino — risco hipotensão. Reduzir dose."},
{droga:"Indutores CYP3A4 (rifampicina, fenitoína, carbamazepina)", efeito:"↓ anlodipino."},
],

efeitos:[
{tipo:"comum", item:"EDEMA MALEOLAR (10-20%, dose-dependente — efeito de CLASSE BCC-DHP, NÃO é IC), rubor facial, cefaleia, fadiga, taquicardia leve"},
{tipo:"sério", item:"Hipotensão grave (raro), edema importante limitando atividade (trocar para outro), bradicardia paradoxal (raro)"},
{tipo:"raro", item:"Hiperplasia gengival, ginecomastia"},
],

alertas:[
{nivel:"crit", txt:"EDEMA MALEOLAR não é insuficiência cardíaca — é vasodilatação capilar pré-arteriolar SEM correspondente pós-capilar (vênulas). NÃO ADICIONAR DIURÉTICO (não funciona e desidrata). Manejo: (1) reduzir dose; (2) adicionar iSRA (combinação fixa anlodipino+losartana reduz edema 50%); (3) trocar para lercanidipino/manidipino (menos edema)."},
{nivel:"warn", txt:"ACCOMPLISH trial (NEJM 2008): combinação anlodipino + IECA foi SUPERIOR a IECA + HCTZ em desfechos CV em pacientes de alto risco. Preferir essa combinação."},
{nivel:"warn", txt:"BCC-DHP de curta ação (nifedipino simples) — NÃO USAR em HAS crônica (taquicardia reflexa, isquemia). Apenas nifedipino retard ou anlodipino."},
{nivel:"info", txt:"SEM contraindicação em IC com FE reduzida MODERNA (ao contrário de verapamil/diltiazem). PRAISE trial — neutro em desfechos."},
],

preparo:"VO comprimido, com ou sem alimento.",
monitor:"PA, FC, edema MMII basal + 4 sem + anual.",
diretriz:"DBHA 2025. ACCOMPLISH trial. ESC HTN 2024.",
fluxo:null, calcs:[],
},

/* === NIFEDIPINO RETARD === */
{id:"med-nifedipino", classe:"BCC diidropiridínico — formulação retard", grupo:"anti_hipertensivo",
nome:"Nifedipino retard (Oros)",
sin:["Adalat Oros","Adalat Retard"],
formas:["Comprimidos retard 20 mg (formulação Retard) ou 30/60 mg (Oros) — SUS/privada","Cápsula de liberação rápida — NÃO USAR EM HAS CRÔNICA"],
resumo:"BCC-DHP retardado. Útil em HAS gestacional (alternativa à metildopa) e angina vasoespástica. Cápsula rápida (sublingual) é PROIBIDA — causa isquemia.",
dose_rapida:"20 mg VO 12/12h (retard) ou 30 mg VO 1×/d (Oros)",

doses:[
{ind:"HAS — formulação RETARD apenas", dose:"20 mg 12/12h (Retard) ou 30 mg 1×/d (Oros)", obs:"NUNCA cápsula de liberação rápida (sublingual) — TAQUICARDIA REFLEXA + ISQUEMIA."},
{ind:"HAS na GESTAÇÃO / pré-eclâmpsia leve", dose:"10-20 mg VO 6-8h conforme PA", obs:"Alternativa à metildopa. NÃO é tocolítico em pré-eclâmpsia."},
{ind:"Crise hipertensiva em gestante / pré-eclâmpsia GRAVE", dose:"10 mg VO, repetir após 30 min se necessário (máx 30 mg)", obs:"Alternativa à hidralazina IV. Cuidado com sulfato de Mg (hipotensão grave)."},
{ind:"Angina vasoespástica (Prinzmetal)", dose:"30-60 mg/d retard", obs:"BCC-DHP é 1ª linha (vasodilatação coronariana)."},
{ind:"Trabalho de parto prematuro (tocólise off-label)", dose:"20 mg VO, depois 10-20 mg 4-6h", obs:"Mais efetivo que terbutalina."},
],

ajustes:{
irc:"Sem ajuste rotineiro.",
iht:"IH grave: reduzir 30-50%.",
idoso:"Iniciar dose mínima.",
gestante:"PODE USAR em HAS gestacional/pré-eclâmpsia (categoria C).",
aleita:"Compatível.",
ped:"Uso especializado.",
},

mecanismo:"Bloqueio canal Ca²⁺ tipo-L em musculatura lisa vascular — vasodilatação arterial preferencial. Mesma classe do anlodipino, mas T½ mais curta (forma retard prolonga ação).",

farmacocin:{
absorc:"Retard: gradual ao longo de 12h | Oros: 24h",
distrib:"Ampla",
metab:"Hepático (CYP3A4)",
elimin:"Renal (80%) e fezes",
meiavida:"Retard: 6-11h | Oros: prolongada por tecnologia OROS",
ligacao:"92-98%",
},

espectro:["HAS — formulação retard","HAS gestacional / pré-eclâmpsia","Angina vasoespástica","Tocólise off-label","Fenômeno de Raynaud"],

interacoes:[
{droga:"Inibidores CYP3A4", efeito:"↑ nifedipino — hipotensão."},
{droga:"Indutores CYP3A4", efeito:"↓ nifedipino."},
{droga:"Sulfato de magnésio (eclâmpsia)", efeito:"HIPOTENSÃO GRAVE + bloqueio neuromuscular — combinação requer monitor rigoroso."},
],

efeitos:[
{tipo:"comum", item:"Edema maleolar (igual anlodipino), rubor, cefaleia, palpitação, taquicardia leve, refluxo"},
{tipo:"sério", item:"Hipotensão grave (especialmente com sublingual!), bradicardia paradoxal, isquemia miocárdica reflexa"},
{tipo:"raro", item:"Hiperplasia gengival, ginecomastia"},
],

alertas:[
{nivel:"crit", txt:"CÁPSULA DE LIBERAÇÃO RÁPIDA (sublingual ou VO) é PROIBIDA em HAS — causa hipotensão abrupta + taquicardia reflexa + ISQUEMIA MIOCÁRDICA / AVC. Apenas formulações RETARD ou OROS."},
{nivel:"warn", txt:"GESTANTE em uso de NIFEDIPINO + SULFATO DE MAGNÉSIO (eclâmpsia): hipotensão grave + bloqueio neuromuscular. Combinação possível mas com monitor rigoroso (reflexo patelar, PA, FR)."},
{nivel:"warn", txt:"REFLUXO gastroesofágico é efeito conhecido — pode ser dose-limitante."},
{nivel:"info", txt:"ANLODIPINO é alternativa moderna superior em HAS crônica (1×/d, mais estável). Nifedipino retard ainda útil em gestação e angina vasoespástica."},
],

preparo:"VO comprimido — engolir INTEIRO (NÃO mastigar, partir ou abrir). Oros: a casca pode ser eliminada nas fezes (normal).",
monitor:"PA, FC, edema MMII basal + 4 sem.",
diretriz:"DBHA 2025. ACOG Pre-eclampsia 2020.",
fluxo:null, calcs:[],
},

/* ============== β-BLOQUEADORES ============== */

/* === ATENOLOL === */
{id:"med-atenolol", classe:"β1-bloqueador cardiosseletivo — ação intermediária", grupo:"anti_hipertensivo",
nome:"Atenolol",
sin:["Tenormin","Atenol"],
formas:["Comprimidos 25 mg, 50 mg, 100 mg — SUS/REMUME"],
resumo:"β-bloqueador mais usado SUS por acesso. Porém DBHA 2025 RETIROU-O do trio de ouro — apenas em indicações específicas (IAM, angina, FA, IC). Hidrofílico (atravessa pouco BBB).",
dose_rapida:"25-100 mg VO 1-2×/d (máx 100 mg/d)",

doses:[
{ind:"HAS — apenas se INDICAÇÃO ESPECÍFICA (não é 1ª linha em HAS isolada)", dose:"25-50 mg VO 1×/d (máx 100 mg/d)", obs:"DBHA 2025: β-bloq NÃO é mais 1ª linha em HAS sem comorbidade. Indicação: angina, FA, IC, pós-IAM."},
{ind:"Angina estável", dose:"50-100 mg/d", obs:"Reduz consumo O2. β-bloq é 1ª linha em angina."},
{ind:"FA com controle de FC", dose:"25-100 mg/d", obs:"Bisoprolol/metoprolol succinato são preferidos em IC com FA."},
{ind:"Pós-IAM", dose:"50-100 mg/d", obs:"Proteção CV 3-12 meses pós-IAM."},
{ind:"Pediatria — HAS / arritmia", dose:"0,5-1 mg/kg/d (máx 2 mg/kg/d)", obs:"Uso especializado."},
],

ajustes:{
irc:"ClCr 15-35: 50% da dose. ClCr <15: 25%.",
iht:"Sem ajuste (eliminação renal).",
idoso:"Iniciar 25 mg.",
gestante:"CATEGORIA D — risco RCIU se uso prolongado 2º-3º trimestre. EVITAR. Preferir metildopa, nifedipino.",
aleita:"Cautela — passa no leite, pode causar bradicardia/hipoglicemia em RN.",
ped:"0,5-1 mg/kg/d.",
},

mecanismo:"β1-bloqueador cardiosseletivo. Bloqueia β1 cardíaco → ↓FC + ↓DC + ↓contratilidade + ↓velocidade condução AV. HIDROFÍLICO — atravessa pouco BBB (menos efeitos centrais: pesadelos, depressão).",

farmacocin:{
absorc:"VO: 40-50%",
distrib:"Hidrofílico — pouca BBB",
metab:"Mínimo",
elimin:"Renal (90%)",
meiavida:"6-9h",
ligacao:"~3%",
},

espectro:["Angina estável (1ª linha)","Pós-IAM (proteção CV)","FA com controle FC","HAS COM COMORBIDADE (IAM, angina, FA, IC) — DBHA 2025 não recomenda em HAS isolada"],

interacoes:[
{droga:"BCC não-DHP (verapamil/diltiazem)", efeito:"Bradicardia/BAV grave — NÃO combinar."},
{droga:"Insulina/sulfonilureia", efeito:"Mascaramento de hipoglicemia (sintomas adrenérgicos)."},
{droga:"Outros β-bloq", efeito:"Não combinar."},
{droga:"AINE", efeito:"Reduz efeito anti-hipertensivo."},
],

efeitos:[
{tipo:"comum", item:"Bradicardia, fadiga, extremidades frias, tontura, broncoespasmo leve (em asmático), hipotensão postural, disfunção sexual"},
{tipo:"sério", item:"Bradicardia grave / BAV em paciente com bloqueio prévio, broncoespasmo grave em asma/DPOC com broncoespasmo ativo, IC aguda em disfunção VE grave, mascaramento de hipoglicemia em DM"},
{tipo:"raro", item:"Síndrome de retirada — rebote hipertensivo + taquicardia se suspenso abruptamente"},
],

alertas:[
{nivel:"crit", txt:"NÃO SUSPENDER ABRUPTAMENTE — síndrome de retirada (rebote HAS + taquicardia + risco IAM). Reduzir 50% por 1-2 semanas."},
{nivel:"crit", txt:"ASMA ATIVA com broncoespasmo: CONTRAINDICAÇÃO. DPOC estável: cautela (atenolol é β1-seletivo MAS perde seletividade em dose alta). Preferir nebivolol/bisoprolol."},
{nivel:"warn", txt:"DBHA 2025: ATENOLOL não é mais 1ª linha em HAS isolada (perdeu evidência). Continuar APENAS em paciente estável já em uso. Em NOVO diagnóstico HAS: preferir iSRA + BCC + tiazídico."},
{nivel:"warn", txt:"GESTAÇÃO: risco RCIU. EVITAR. Trocar para metildopa."},
{nivel:"warn", txt:"DM2 + HIPOGLICEMIAS frequentes: β-bloq mascara sintomas (tremor, palpitação). Considerar alternativa."},
{nivel:"info", txt:"LIFE trial: losartana foi SUPERIOR a atenolol em prevenção de desfechos CV em HAS com HVE."},
],

preparo:"VO comprimido, manhã.",
monitor:"PA, FC (manter ≥55), glicemia em DM, sintomas broncoespasmo.",
diretriz:"DBHA 2025. LIFE trial. ESC AF 2024.",
fluxo:null, calcs:[],
},

/* === BISOPROLOL === */
{id:"med-bisoprolol", classe:"β1-bloqueador altamente cardiosseletivo", grupo:"anti_hipertensivo",
nome:"Bisoprolol",
sin:["Concor","Concord","Lobivon"],
formas:["Comprimidos 1,25 / 2,5 / 5 / 10 mg — privada/algum SUS"],
resumo:"β-bloqueador altamente cardiosseletivo (maior β1-seletividade). Padrão MODERNO em IC com FE reduzida (CIBIS-II). FA com controle FC. Posologia 1×/d.",
dose_rapida:"2,5-10 mg VO 1×/d",

doses:[
{ind:"IC com FE reduzida (1ª linha — CIBIS-II)", dose:"1,25 mg/d inicial; titular DOBRANDO a cada 2-4 sem até 10 mg/d", obs:"REDUZ MORTALIDADE 34% (CIBIS-II). Iniciar APÓS estabilização hemodinâmica."},
{ind:"FA com controle de FC (especialmente IC)", dose:"2,5-10 mg/d", obs:"Preferido vs atenolol em FA + IC."},
{ind:"HAS — com indicação CV específica", dose:"2,5-10 mg/d", obs:"NÃO 1ª linha em HAS isolada (DBHA 2025)."},
{ind:"HAS resistente (4ª-5ª droga, alternativa à espironolactona)", dose:"5-10 mg/d", obs:"PATHWAY-2 trial — 2ª opção após espironolactona."},
],

ajustes:{
irc:"ClCr <40: iniciar 2,5 mg, máx 10 mg.",
iht:"Iniciar 2,5 mg.",
idoso:"Iniciar 1,25-2,5 mg.",
gestante:"Categoria C — preferir alternativa (metildopa, nifedipino).",
aleita:"Cautela — passa no leite.",
ped:"Não rotina.",
},

mecanismo:"β1-bloqueador altamente cardiosseletivo (maior seletividade β1/β2 entre os β-bloq). Lipossolubilidade intermediária. Em IC: reduz remodelamento + arritmias + estimulação simpática crônica.",

farmacocin:{
absorc:"VO: >90%",
distrib:"Intermediária BBB",
metab:"Hepático 50%",
elimin:"Renal 50% + fezes",
meiavida:"10-12h",
ligacao:"~30%",
},

espectro:["IC com FE reduzida (PADRÃO MODERNO — CIBIS-II)","FA com controle FC","Angina","HAS com indicação CV","HAS resistente (4ª droga, PATHWAY-2)"],

interacoes:[
{droga:"BCC não-DHP (verapamil/diltiazem)", efeito:"Bradicardia/BAV — NÃO combinar."},
{droga:"Outros β-bloq", efeito:"Não combinar."},
{droga:"Insulina/sulfonilureia", efeito:"Pode mascarar hipoglicemia (menos que atenolol, mais seletivo)."},
],

efeitos:[
{tipo:"comum", item:"Bradicardia, fadiga, extremidades frias, tontura, broncoespasmo (menor que atenolol)"},
{tipo:"sério", item:"Bradicardia grave, BAV, IC aguda em descompensação, broncoespasmo"},
{tipo:"raro", item:"Síndrome de retirada"},
],

alertas:[
{nivel:"crit", txt:"IC COM FE REDUZIDA: bisoprolol/carvedilol/metoprolol-SUCCINATO são os β-bloq COM EVIDÊNCIA de redução mortalidade. ATENOLOL e propranolol NÃO. NÃO trocar."},
{nivel:"warn", txt:"INICIAR em IC: APENAS APÓS estabilização (sem congestão importante, PAS >100, FC >70). Iniciar 1,25 mg, DOBRAR cada 2-4 semanas (start low, go slow)."},
{nivel:"warn", txt:"NÃO SUSPENDER abruptamente — risco descompensação IC + síndrome de retirada."},
{nivel:"info", txt:"CIBIS-II trial: bisoprolol reduziu mortalidade 34% em IC com FE reduzida — comparável ao carvedilol."},
],

preparo:"VO comprimido, manhã.",
monitor:"PA, FC, peso, sintomas IC.",
diretriz:"DBHA 2025. CIBIS-II trial. ESC HF 2021.",
fluxo:null, calcs:[],
},

/* === CARVEDILOL === */
{id:"med-carvedilol", classe:"α1 + β-bloqueador não-seletivo", grupo:"anti_hipertensivo",
nome:"Carvedilol",
sin:["Coreg","Dilatrend","Coritone"],
formas:["Comprimidos 3,125 / 6,25 / 12,5 / 25 mg — SUS/REMUME"],
resumo:"α1 + β-bloqueador (vasodilatador adicional). PADRÃO em IC com FE reduzida (US Carvedilol Trial, COPERNICUS). Preferido vs bisoprolol em alguns cenários.",
dose_rapida:"3,125-25 mg VO 12/12h",

doses:[
{ind:"IC com FE reduzida (1ª linha — COPERNICUS)", dose:"3,125 mg 12/12h inicial; DOBRAR cada 2 sem até 25 mg 12/12h (50 mg 12/12h se >85 kg)", obs:"REDUZ MORTALIDADE 35% em IC grave (COPERNICUS)."},
{ind:"Pós-IAM com disfunção VE (CAPRICORN)", dose:"6,25-25 mg 12/12h", obs:"Reduz mortalidade pós-IAM."},
{ind:"HAS — com indicação CV específica", dose:"6,25-25 mg 12/12h", obs:"NÃO 1ª linha em HAS isolada."},
{ind:"Cirrose com hipertensão portal (off-label — alternativa propranolol)", dose:"6,25-12,5 mg 12/12h", obs:"Reduz pressão portal — prevenção sangramento varicoso."},
],

ajustes:{
irc:"Sem ajuste.",
iht:"IH grave: CONTRAINDICADO.",
idoso:"Iniciar 3,125 mg.",
gestante:"Categoria C — evitar.",
aleita:"Cautela.",
ped:"Não rotina.",
},

mecanismo:"Bloqueador NÃO-SELETIVO de β1 + β2 + α1. β-bloqueio reduz FC/DC. α1-bloqueio causa VASODILATAÇÃO adicional → ↓pós-carga. Em IC: melhora hemodinâmica + reduz remodelamento. Antioxidante (efeito independente — possível benefício extra).",

farmacocin:{
absorc:"VO: 25-35% (1ª passagem hepática) — tomar com refeição (reduz hipotensão)",
distrib:"Ampla, lipossolúvel",
metab:"Hepático (CYP2D6) — extenso",
elimin:"Biliar (fezes)",
meiavida:"6-10h",
ligacao:">98%",
},

espectro:["IC com FE reduzida (PADRÃO — COPERNICUS)","Pós-IAM (CAPRICORN)","HAS com indicação CV","Hipertensão portal (off-label)"],

interacoes:[
{droga:"BCC não-DHP", efeito:"Bradicardia/BAV."},
{droga:"Inibidores CYP2D6 (fluoxetina, paroxetina)", efeito:"↑ carvedilol — hipotensão. Reduzir dose."},
{droga:"Digoxina", efeito:"↑ digoxina ~15%."},
{droga:"Ciclosporina", efeito:"↑ ciclosporina."},
],

efeitos:[
{tipo:"comum", item:"Tontura (especialmente 1ª dose — α-bloqueio), bradicardia, fadiga, hipotensão postural, broncoespasmo (não-seletivo!)"},
{tipo:"sério", item:"Hipotensão grave (especialmente 1ª dose), bradicardia/BAV, broncoespasmo em asma (CONTRAINDICAÇÃO), descompensação IC se iniciado mal"},
{tipo:"raro", item:"Hepatotoxicidade (suspender se ↑ TGO/TGP)"},
],

alertas:[
{nivel:"crit", txt:"ASMA ATIVA: CONTRAINDICADO (carvedilol é NÃO-SELETIVO, bloqueia β2 brônquico). DPOC com broncoespasmo: relativa. Preferir bisoprolol."},
{nivel:"crit", txt:"HIPOTENSÃO de 1ª DOSE (α-bloqueio): orientar tomar deitado em primeira dose. Reduzir risco com COMIDA (reduz absorção pico)."},
{nivel:"warn", txt:"INICIAR em IC: APÓS estabilização (sem congestão importante, PAS >100). Iniciar 3,125 mg, DOBRAR cada 2 sem (start low, go slow)."},
{nivel:"warn", txt:"COMER com cada dose — reduz pico de absorção e hipotensão postural."},
{nivel:"info", txt:"COPERNICUS trial: carvedilol em IC GRAVE (NYHA III-IV, FE <25%) reduziu mortalidade 35%."},
],

preparo:"VO comprimido, COM REFEIÇÃO (importante).",
monitor:"PA, FC, peso, sintomas IC. TGO/TGP.",
diretriz:"DBHA 2025. COPERNICUS. CAPRICORN. US Carvedilol Trial.",
fluxo:null, calcs:[],
},

/* === METOPROLOL SUCCINATO === */
{id:"med-metoprolol", classe:"β1-bloqueador cardiosseletivo — succinato (longa ação) ou tartarato (curta)", grupo:"anti_hipertensivo",
nome:"Metoprolol (succinato e tartarato)",
sin:["Selozok (succ)","Lopressor (tart)","Seloken"],
formas:["Succinato (XL/ZOK): 25, 50, 100, 190 mg — 1×/d","Tartarato: 25, 50, 100 mg — 12/12h"],
resumo:"β1-bloqueador cardiosseletivo. Succinato é PADRÃO em IC com FE reduzida (MERIT-HF). Tartarato é IV em emergência. Diferenciar: succ = crônico, tart = agudo.",
dose_rapida:"Succ: 25-200 mg 1×/d | Tart: 50-100 mg 12/12h | IV: 5 mg lento, repetir até 15 mg",

doses:[
{ind:"IC com FE reduzida — SUCCINATO (MERIT-HF)", dose:"Succinato 12,5-25 mg/d inicial; DOBRAR cada 2 sem até 200 mg/d", obs:"REDUZ MORTALIDADE 34% (MERIT-HF). Apenas succinato (longa ação) tem evidência em IC."},
{ind:"FA com controle FC (agudo IV)", dose:"5 mg IV em 2 min, repetir 5 mg a cada 5 min (máx 15 mg)", obs:"Tartarato apenas. Após: passar para VO."},
{ind:"FA com controle FC (crônico VO)", dose:"Tartarato 25-100 mg 12/12h OU succinato 50-200 mg/d", obs:"Equivalência aproximada: 50 mg tart 12/12h ≈ 100 mg succ/d."},
{ind:"Angina", dose:"Tartarato 50-100 mg 12/12h", obs:"Reduz consumo O2."},
{ind:"Pós-IAM", dose:"Succinato 25-200 mg/d", obs:"Proteção CV."},
{ind:"HAS — com indicação CV (não é 1ª linha em HAS isolada)", dose:"Succinato 25-100 mg/d", obs:"NÃO 1ª linha — DBHA 2025."},
],

ajustes:{
irc:"Sem ajuste (eliminação hepática).",
iht:"IH grave: reduzir 50%.",
idoso:"Iniciar dose menor.",
gestante:"Categoria C — preferir alternativa.",
aleita:"Cautela.",
ped:"Uso especializado.",
},

mecanismo:"β1-bloqueador cardiosseletivo (moderada). Bloqueia β1 cardíaco. Succinato tem liberação prolongada (efeito 24h). Tartarato é forma curta (4-6h).",

farmacocin:{
absorc:"VO: 50% (succinato) | 95% (tartarato)",
distrib:"Lipossolúvel — atravessa BBB",
metab:"Hepático CYP2D6 — variabilidade genética grande",
elimin:"Renal (95% metabólitos)",
meiavida:"Tartarato 3-7h | Succinato sustentado 24h",
ligacao:"~12%",
},

espectro:["IC com FE reduzida — SUCCINATO (MERIT-HF)","FA com controle FC (agudo IV / crônico VO)","Angina","Pós-IAM","HAS com indicação CV"],

interacoes:[
{droga:"BCC não-DHP", efeito:"Bradicardia/BAV — não combinar."},
{droga:"Inibidores CYP2D6 (fluoxetina, paroxetina, bupropiona)", efeito:"↑ metoprolol — hipotensão. Reduzir dose."},
{droga:"Outros β-bloq", efeito:"Não combinar."},
],

efeitos:[
{tipo:"comum", item:"Bradicardia, fadiga, hipotensão postural, broncoespasmo leve, distúrbios do sono (atravessa BBB), pesadelos"},
{tipo:"sério", item:"Bradicardia grave/BAV, broncoespasmo em asma, depressão (rara mas descrita)"},
{tipo:"raro", item:"Síndrome de retirada"},
],

alertas:[
{nivel:"crit", txt:"DIFERENCIAR SUCCINATO vs TARTARATO: APENAS o SUCCINATO (longa ação) tem evidência de redução de mortalidade em IC com FE reduzida (MERIT-HF). Tartarato 2x/d NÃO tem essa evidência."},
{nivel:"warn", txt:"ASMA ATIVA: contraindicação relativa (β1-seletivo, mas perde seletividade em alta dose). Preferir bisoprolol/nebivolol."},
{nivel:"warn", txt:"DBHA 2025: NÃO é 1ª linha em HAS isolada — apenas com indicação CV (IAM, angina, FA, IC)."},
{nivel:"info", txt:"CYP2D6 lentos (5-10% da população): metabolismo reduzido → ↑ efeito. Iniciar dose menor."},
],

preparo:"Succinato: VO comprimido, pode ser partido (cápsula contém microesferas). Manhã. Tartarato IV: bolus em 2 min, monitor ECG.",
monitor:"PA, FC, sintomas IC, sono.",
diretriz:"DBHA 2025. MERIT-HF. ESC HF 2021.",
fluxo:null, calcs:[],
},

/* ============== α-BLOQUEADOR + SIMPATOLÍTICO CENTRAL ============== */

/* === DOXAZOSINA === */
{id:"med-doxazosina", classe:"α1-bloqueador seletivo", grupo:"anti_hipertensivo",
nome:"Doxazosina",
sin:["Cardura","Carduran"],
formas:["Comprimidos 1, 2, 4, 8 mg — privada/algum SUS"],
resumo:"α1-bloqueador. 4ª/5ª droga em HAS resistente (PATHWAY-2). 1ª escolha em HAS + HBP (hiperplasia prostática benigna). NÃO é 1ª linha em HAS isolada (ALLHAT).",
dose_rapida:"1-4 mg VO 1×/d (manhã, à noite, ou ao deitar)",

doses:[
{ind:"HAS resistente (4ª-5ª droga após espironolactona)", dose:"1 mg VO 1×/d inicial; titular cada 1-2 sem até 4-8 mg/d", obs:"PATHWAY-2 trial — 3ª opção após espironolactona e bisoprolol."},
{ind:"HAS + HPB sintomática (1ª escolha combinada)", dose:"1-8 mg/d", obs:"Trata HAS + sintomas urinários (jato fraco, noctúria). Reduz IPSS."},
{ind:"Feocromocitoma — α-bloqueio pré-operatório", dose:"2-16 mg/d VO", obs:"Iniciar α antes de β-bloq (NUNCA contrário — risco crise hipertensiva paradoxal)."},
],

ajustes:{
irc:"Sem ajuste.",
iht:"Cautela.",
idoso:"Iniciar 1 mg ao deitar. RISCO ALTO de hipotensão postural / queda.",
gestante:"Categoria C — preferir alternativa.",
aleita:"Sem dados.",
ped:"Não rotina.",
},

mecanismo:"Antagonista seletivo do receptor α1-adrenérgico em musculatura lisa arterial e venosa → vasodilatação. Também relaxa musculatura lisa prostática e da uretra → melhora sintomas obstrutivos HPB.",

farmacocin:{
absorc:"VO: ~65%",
distrib:"Ampla",
metab:"Hepático (CYP3A4)",
elimin:"Biliar",
meiavida:"22h",
ligacao:"~98%",
},

espectro:["HAS resistente (4ª droga após espironolactona)","HAS + HPB sintomática (1ª escolha)","Feocromocitoma pré-operatório","Síndrome PTSD com pesadelos (off-label, prazosina mais usada)"],

interacoes:[
{droga:"Outros anti-hipertensivos", efeito:"Sinergia — hipotensão. Reduzir doses."},
{droga:"Sildenafil/tadalafil (PDE-5)", efeito:"Hipotensão grave. Aguardar 4-6h entre."},
{droga:"Inibidores CYP3A4", efeito:"↑ doxazosina."},
],

efeitos:[
{tipo:"comum", item:"FENÔMENO DE 1ª DOSE: hipotensão postural grave / síncope (especialmente em idoso). Tontura, cefaleia, fadiga, edema MMII"},
{tipo:"sério", item:"Síncope na 1ª dose, hipotensão postural recorrente, taquicardia reflexa, falência cardíaca em IC (ALLHAT)"},
{tipo:"raro", item:"Priapismo, incontinência urinária (relaxa esfíncter), síndrome de íris flácida intraoperatória (cirurgia catarata)"},
],

alertas:[
{nivel:"crit", txt:"FENÔMENO DE 1ª DOSE: hipotensão postural grave / síncope, principalmente em IDOSO. INICIAR 1 mg AO DEITAR. Aumentar lentamente. Orientar levantar lentamente."},
{nivel:"crit", txt:"ALLHAT trial (JAMA 2000): braço com doxazosina foi INTERROMPIDO por aumento de IC vs clortalidona. NÃO É 1ª LINHA em HAS isolada — apenas resistente ou HPB."},
{nivel:"warn", txt:"FEOCROMOCITOMA: SEMPRE iniciar α-bloqueio ANTES de β-bloqueio. Inversão (β antes de α) causa crise hipertensiva paradoxal (vasoconstrição α sem oposição)."},
{nivel:"warn", txt:"CIRURGIA DE CATARATA: avisar oftalmologista (síndrome de íris flácida — IFIS) — pode complicar cirurgia."},
{nivel:"info", txt:"PRAZOSINA é alternativa α-bloq com indicação específica em PTSD (pesadelos)."},
],

preparo:"VO comprimido, primeira dose AO DEITAR (reduz risco síncope).",
monitor:"PA em pé e deitado, sintomas posturais.",
diretriz:"DBHA 2025. PATHWAY-2 trial. ALLHAT.",
fluxo:null, calcs:[],
},

/* === METILDOPA === */
{id:"med-metildopa", classe:"Simpatolítico de ação central — agonista α2", grupo:"anti_hipertensivo",
nome:"Metildopa (α-metildopa)",
sin:["Aldomet"],
formas:["Comprimidos 250 mg, 500 mg — SUS/REMUME"],
resumo:"Simpatolítico central. 1ª LINHA EM HAS NA GESTAÇÃO (categoria B, longa experiência). Pouco usada fora da gestação por efeitos colaterais.",
dose_rapida:"250-500 mg VO 8/8h (máx 3 g/d)",

doses:[
{ind:"HAS na GESTAÇÃO (1ª linha)", dose:"250 mg VO 8/8h inicial; titular cada 2-3 dias até 500 mg 6/6h (máx 3 g/d)", obs:"PADRÃO em pré-eclâmpsia leve / HAS crônica em gestante. Categoria B — longa experiência (>50 anos)."},
{ind:"HAS resistente em paciente especiais", dose:"250-500 mg 12/12h", obs:"Pouco usada — efeitos colaterais ruins."},
{ind:"Crise hipertensiva em gestante (alternativa)", dose:"250-500 mg VO repetida 4-6h", obs:"Hidralazina IV é preferida em emergência."},
],

ajustes:{
irc:"Reduzir dose 50%.",
iht:"IH grave: CONTRAINDICADA.",
idoso:"Iniciar 250 mg 8/8h. Risco sedação alto.",
gestante:"CATEGORIA B — 1ª LINHA em HAS gestacional. Maior experiência.",
aleita:"Compatível — preferida em puérpera lactante.",
ped:"5-10 mg/kg/d.",
},

mecanismo:"Pró-droga — convertida em α-metilnoradrenalina no SNC → agonista α2 central → reduz tônus simpático periférico (vasoconstrição reduzida) e inibe descarga simpática. Não é efeito direto na PA periférica.",

farmacocin:{
absorc:"VO: 25-50%",
distrib:"BBB (efeito SNC)",
metab:"Hepático",
elimin:"Renal",
meiavida:"~2h (efeito clínico 12-24h)",
ligacao:"<20%",
},

espectro:["HAS na GESTAÇÃO (1ª linha)","HAS resistente (uso seletivo)"],

interacoes:[
{droga:"Lítio", efeito:"Toxicidade lítio."},
{droga:"IMAO", efeito:"Hipertensão paradoxal — CONTRAINDICADO."},
{droga:"Tricíclicos, simpaticomiméticos", efeito:"Reduz efeito metildopa."},
{droga:"Anestésicos (necessidade reduzida)", efeito:"Avisar anestesista pré-operatório."},
],

efeitos:[
{tipo:"comum", item:"SEDAÇÃO importante, fadiga, depressão, secura boca, hipotensão postural, retenção líquida, disfunção sexual, congestão nasal"},
{tipo:"sério", item:"Hepatite autoimune (raro), anemia hemolítica autoimune (Coombs+ em 10-20%, hemólise clínica em 0,02%), febre medicamentosa, miocardite"},
{tipo:"raro", item:"Síndrome lúpus-like, parkinsonismo, hiperprolactinemia, ginecomastia"},
],

alertas:[
{nivel:"crit", txt:"GESTAÇÃO: 1ª LINHA por excelência — categoria B, mais de 50 anos de uso. SEM evidência de teratogenicidade ou prejuízo fetal."},
{nivel:"warn", txt:"HEPATITE AUTOIMUNE: rara mas grave. Monitor TGO/TGP basal + 6-12 sem + se sintomas (icterícia, fadiga, dor abdominal). Se ↑ enzimas: suspender."},
{nivel:"warn", txt:"COOMBS POSITIVO em 10-20% — apenas 0,02% desenvolve hemólise clínica significativa. Hemograma basal + 6 meses."},
{nivel:"warn", txt:"SEDAÇÃO IMPORTANTE — limita uso em paciente que dirige/trabalho exige atenção. Pode interferir com vida cotidiana."},
{nivel:"info", txt:"PUÉRPERA com HAS: pode manter metildopa por compatibilidade com aleitamento. Trocar para outra classe quando lactação for cessada/menos dependente."},
],

preparo:"VO comprimido, com ou sem alimento.",
monitor:"PA, hemograma + Coombs basal + 6 meses, TGO/TGP basal + 6-12 sem.",
diretriz:"DBHA 2025. ACOG Hypertension in Pregnancy 2020.",
fluxo:null, calcs:[],
},

);
