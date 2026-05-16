/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — BIBLIOTECA DE MEDICAÇÕES (PARTE 5)
   14 hipoglicemiantes orais e injetáveis (DM2)
   Conforme Diretriz SBD 2025 + ADA 2025
   =========================================================== */

MEDICACOES.push(

/* ============== BIGUANIDA ============== */

{id:"med-metformina", classe:"Biguanida — sensibilizador insulínico hepático", grupo:"antidiabetico",
nome:"Metformina",
sin:["Glifage","Glucoformin","Dimefor","Glucophage"],
formas:["Comprimidos 500 mg, 850 mg, 1000 mg — SUS/REMUME","Liberação prolongada (XR/SR): 500, 750, 1000 mg — privada"],
resumo:"Sensibilizador insulínico hepático. 1ª linha em DM2 de baixo/intermediário risco CV (SBD 2025). Reduz HbA1c 1-2%. Neutra/positiva para peso. NÃO causa hipoglicemia.",
dose_rapida:"500 mg VO 12/12h inicial; titular até 850 mg 8/8h ou 1000 mg 12/12h (máx 2,5 g/d)",

doses:[
{ind:"DM2 — 1ª linha em RCV baixo/intermediário (SBD 2025 R3)", dose:"500 mg VO 12/12h com refeição × 1-2 sem; titular para 850 mg 12/12h, depois 850 mg 8/8h conforme tolerância", obs:"Dose máxima eficaz: 2-2,5 g/d (acima disso sem benefício, mais EA). Iniciar pequeno + titular = reduz intolerância GI."},
{ind:"DM2 com IMC ≥30 + RCV baixo", dose:"500-2500 mg/d", obs:"Considerar combinação com GLP-1/SGLT2 se obesidade significativa."},
{ind:"Pré-diabetes (alto risco DM2)", dose:"500-1000 mg 12/12h", obs:"DPP trial: reduziu 31% incidência DM2 (vs 58% com MEV). MEV ainda é 1ª linha."},
{ind:"Síndrome dos ovários policísticos (SOP)", dose:"500-1500 mg/d", obs:"Restaura ciclos menstruais, reduz hiperandrogenismo. Útil em SOP + obesidade."},
{ind:"Pediatria — DM2 (10-16 anos)", dose:"500 mg/d inicial, titular até 2 g/d", obs:"FDA aprovada ≥10 anos."},
],

ajustes:{
irc:"TFG 30-45: REDUZIR 50%, máx 1 g/d, MONITOR. TFG <30: CONTRAINDICADA (risco acidose lática).",
iht:"IH grave (sem álcool): contraindicada se aguda. Estável: cautela.",
idoso:"Iniciar 500 mg, titular lento. Dosar TFG anual.",
gestante:"CATEGORIA B — pode usar em DM gestacional (alternativa à insulina). SOP com gestação: manter no 1º trimestre. ADA 2025: insulina é padrão-ouro.",
aleita:"Compatível (baixa transferência).",
ped:"500-2000 mg/d em ≥10 anos.",
},

mecanismo:"Ativa AMP-quinase (AMPK) hepática → ↓gliconeogênese + ↑sensibilidade insulínica periférica (músculo). Reduz absorção intestinal de glicose. NÃO estimula secreção de insulina pelas células β → NÃO causa hipoglicemia em monoterapia. Efeito secundário benéfico: leve perda ou neutralidade ponderal.",

farmacocin:{
absorc:"VO: 50-60% (intestino delgado)",
distrib:"Não atravessa BBB",
metab:"NÃO metabolizada",
elimin:"Renal (90% inalterada — secreção tubular)",
meiavida:"4-9h",
ligacao:"Mínima",
},

espectro:["DM2 — 1ª linha em RCV baixo/intermediário","Pré-diabetes (alto risco)","SOP (sensibilizador insulínico)","DM gestacional (alternativa à insulina, off-label)","Combinada com qualquer outra classe"],

interacoes:[
{droga:"Contraste iodado IV (TC com contraste)", efeito:"SUSPENDER metformina 48h antes + dosar Cr pós-procedimento. Risco IRA + acidose lática."},
{droga:"Álcool", efeito:"↑ risco acidose lática. Orientar moderação. Em alcoolista crônico: contraindicada."},
{droga:"Cimetidina", efeito:"↑ metformina (competição secreção tubular)."},
{droga:"Diuréticos de alça, AINE", efeito:"↓ TFG → cuidado em descompensação aguda (gastroenterite com diarreia/desidratação) — SUSPENDER temporariamente."},
],

efeitos:[
{tipo:"comum", item:"Distúrbios GI: náusea, dor abdominal, DIARREIA (10-30%), gosto metálico, anorexia. Geralmente melhoram em 2-4 sem."},
{tipo:"sério", item:"ACIDOSE LÁTICA (rara, ~0,03/1000 pacientes-ano): em IRC, hipóxia, hepatopatia, alcoolismo, sepse. Letal em 30-50% se não tratada."},
{tipo:"raro", item:"Deficiência de B12 (uso prolongado >5 anos — 5-30%) — dosar anual, suplementar se baixa. Acidose lática associada a sepse/hipóxia."},
],

alertas:[
{nivel:"crit", txt:"ACIDOSE LÁTICA: SUSPEITAR em paciente com dor abdominal + náusea + dispneia + acidose metabólica de causa não-clara. Lactato >5 + pH <7,35 + biguanida no plasma. TRATAR: suspender + bicarbonato + HEMODIÁLISE (remove metformina). Mortalidade alta."},
{nivel:"crit", txt:"SUSPENSÃO em situações de risco: contraste iodado (48h antes/depois), sepse, IAM, IC descompensada, hipóxia, cirurgia maior, gastroenterite com desidratação. Reintroduzir após estabilização."},
{nivel:"crit", txt:"TFG <30 = CONTRAINDICAÇÃO. TFG 30-45: dose máx 1 g/d. TFG ≥45: dose plena. Monitor anual."},
{nivel:"warn", txt:"INTOLERÂNCIA GI: estratégia (1) iniciar 500 mg 1×/d × 1 sem, depois 12/12h; (2) tomar COM refeição; (3) forma XR/SR é melhor tolerada (privada); (4) se persiste >4 sem: trocar de classe."},
{nivel:"warn", txt:"DEFICIÊNCIA B12: uso >5 anos pode reduzir B12 — dosar anualmente, suplementar se <300 pg/mL. Pode causar neuropatia + anemia macrocítica."},
{nivel:"info", txt:"NÃO é mais EXCLUSIVA em 1ª linha (SBD 2025) — em paciente com RCV alto/muito alto, iniciar diretamente com SGLT-2 ou GLP-1 (eficácia CV comprovada)."},
],

preparo:"VO comprimido, COM REFEIÇÃO (reduz EA GI). XR/SR: 1× ao dia com jantar.",
monitor:"HbA1c 3-6/6m, creatinina + TFG basal + anual, B12 anual em uso >5 anos.",
diretriz:"SBD 2025 R3. ADA Standards 2025. UKPDS. DPP trial.",
fluxo:null, calcs:[],
},

/* ============== SULFONILUREIAS ============== */

{id:"med-glibenclamida", classe:"Sulfonilureia de 2ª geração — secretagogo de insulina", grupo:"antidiabetico",
nome:"Glibenclamida (Gliburida)",
sin:["Daonil","Glimax"],
formas:["Comprimidos 5 mg — SUS/REMUME"],
resumo:"Sulfonilureia mais usada SUS. POTENTE — reduz HbA1c 1-2%. RISCO HIPOGLICEMIA prolongada (especialmente idoso). Sem benefício CV. Caindo em uso (preferir gliclazida).",
dose_rapida:"2,5-5 mg VO 1-2×/d (máx 20 mg/d)",

doses:[
{ind:"DM2 — em paciente sem outras opções (custo)", dose:"2,5 mg VO 1×/d (manhã) inicial; titular até 10-20 mg/d divididos", obs:"Tomar 30 min antes do café da manhã. Maior dose = jantar."},
{ind:"DM2 + Metformina", dose:"5-10 mg/d + metformina", obs:"Combinação clássica SUS — barata, eficaz, mas risco hipoglicemia."},
],

ajustes:{
irc:"TFG <60: REDUZIR 50%. TFG <30: CONTRAINDICADA (hipoglicemia prolongada).",
iht:"IH moderada/grave: contraindicada.",
idoso:"EVITAR se possível — alto risco hipoglicemia grave. Preferir gliclazida MR ou outras classes (DPP-4, SGLT-2).",
gestante:"NÃO recomendada — preferir insulina ou metformina.",
aleita:"Evitar — passa em leite.",
ped:"Não recomendada.",
},

mecanismo:"Bloqueia canal K-ATP nas células β pancreáticas → despolarização → influxo de Ca²⁺ → secreção de insulina. Estímulo é INDEPENDENTE de glicemia (por isso causa hipoglicemia mesmo em glicemia normal).",

farmacocin:{
absorc:"VO: rápida",
distrib:"Ampla",
metab:"Hepático (CYP2C9) → metabólitos ATIVOS",
elimin:"Renal (50%) + biliar — METABÓLITOS ATIVOS em IRC = hipoglicemia prolongada",
meiavida:"5-10h (metabólitos: mais longa)",
ligacao:">99%",
},

espectro:["DM2 — opção SUS de baixo custo (limitações)","Combinada com metformina"],

interacoes:[
{droga:"β-bloqueadores", efeito:"Mascaram sintomas hipoglicemia (tremor, palpitação) — perigoso."},
{droga:"AINE, sulfas, fluconazol, varfarina", efeito:"Deslocam glibenclamida da albumina → ↑ efeito, hipoglicemia."},
{droga:"Álcool", efeito:"Potencializa hipoglicemia + efeito dissulfiram-like."},
{droga:"Tiazídicos, corticoides", efeito:"Hiperglicemia — antagonizam."},
],

efeitos:[
{tipo:"comum", item:"HIPOGLICEMIA (mais comum/grave que outras sulfonilureias), ganho de peso (1-3 kg), náusea, rash"},
{tipo:"sério", item:"HIPOGLICEMIA GRAVE PROLONGADA — internação. ESPECIALMENTE em idoso, IRC, jejum prolongado. Mortalidade descrita."},
{tipo:"raro", item:"Anemia hemolítica em deficiência G6PD, colestase, eritema multiforme, hiponatremia (SIADH)"},
],

alertas:[
{nivel:"crit", txt:"HIPOGLICEMIA GRAVE PROLONGADA: glibenclamida (metabólitos ativos) causa hipoglicemia que pode durar HORAS-DIAS, especialmente em idoso/IRC. TRATAR: glicose 50% 50 mL IV (após tiamina se etilista) + BIC glicose 5% × 24-48h (NÃO suficiente glicose VO única). Internar."},
{nivel:"crit", txt:"IDOSO ≥65 anos: SUBSTITUIR por outras classes (gliclazida MR, DPP-4, SGLT-2). Hipoglicemia em idoso = risco fratura, IAM, AVC, óbito (3-5× mais comum vs gliclazida)."},
{nivel:"warn", txt:"PREFERIR GLICLAZIDA MR sobre glibenclamida — meia-vida controlada, menos hipoglicemia, mais cardioseguro (estudo ADVANCE)."},
{nivel:"warn", txt:"GANHO DE PESO 1-3 kg — antagoniza meta de perda de peso em DM2 com obesidade."},
{nivel:"info", txt:"SEM BENEFÍCIO CV (DBHA/SBD 2025 — sulfonilureia não tem evidência de redução de desfechos CV)."},
],

preparo:"VO 30 min ANTES da refeição (café, jantar).",
monitor:"HbA1c, glicemias capilares, sintomas hipoglicemia.",
diretriz:"SBD 2025. ADA 2025.",
fluxo:null, calcs:[],
},

{id:"med-gliclazida", classe:"Sulfonilureia de 2ª geração — formulação MR (modified release)", grupo:"antidiabetico",
nome:"Gliclazida MR",
sin:["Diamicron MR","Azukon MR"],
formas:["Comprimidos 30 mg MR (mais usado) ou 60 mg MR — SUS/REMUME"],
resumo:"Sulfonilureia preferida atualmente. Formulação MR (liberação modificada) reduz hipoglicemia. Cardiosegura (ADVANCE trial). 1×/d.",
dose_rapida:"30-120 mg VO 1×/d (manhã, com café)",

doses:[
{ind:"DM2 — alternativa à glibenclamida (PREFERIDA)", dose:"30 mg VO 1×/d (manhã) inicial; titular cada 2-4 sem até 120 mg/d", obs:"Tomar com café da manhã. Dose máxima 120 mg/d (4 comp de 30 mg)."},
{ind:"DM2 + Metformina", dose:"30-120 mg/d + metformina", obs:"Boa combinação. Menor hipoglicemia que glibenclamida."},
],

ajustes:{
irc:"TFG 30-60: cautela, monitor. TFG <30: evitar (risco hipoglicemia).",
iht:"Cautela em IH moderada/grave.",
idoso:"PREFERIDA vs glibenclamida (perfil mais seguro). Iniciar 30 mg.",
gestante:"NÃO recomendada — preferir insulina.",
aleita:"Evitar.",
ped:"Não rotina.",
},

mecanismo:"Mesma classe da glibenclamida — bloqueio K-ATP → secreção de insulina. Diferenças: (1) sem metabólitos ATIVOS (vs glibenclamida); (2) formulação MR libera lentamente em 24h; (3) maior seletividade para receptor SUR1 pancreático (menos efeito CV adverso vs glibenclamida).",

farmacocin:{
absorc:"VO MR: liberação prolongada 24h",
distrib:"Ampla",
metab:"Hepático CYP2C9",
elimin:"Renal (60-70% metabólitos INATIVOS)",
meiavida:"~10-12h",
ligacao:"~95%",
},

espectro:["DM2 — preferida vs glibenclamida","Combinada com metformina","DM2 em paciente que precisa de baixo custo + 1×/d"],

interacoes:[
{droga:"β-bloqueadores", efeito:"Mascaram sintomas hipoglicemia."},
{droga:"AINE, sulfas, fluconazol", efeito:"Deslocam da albumina — hipoglicemia."},
{droga:"Álcool", efeito:"Potencializa hipoglicemia."},
],

efeitos:[
{tipo:"comum", item:"Hipoglicemia (menor que glibenclamida), ganho de peso leve, náusea"},
{tipo:"sério", item:"Hipoglicemia grave (menos frequente que glibenclamida), reação alérgica"},
{tipo:"raro", item:"Anemia hemolítica em G6PD, colestase, hiponatremia"},
],

alertas:[
{nivel:"warn", txt:"PREFERIDA vs glibenclamida — ADVANCE trial demonstrou segurança CV + menor hipoglicemia. Em idoso: opção razoável dentro das sulfonilureias."},
{nivel:"warn", txt:"FORMULAÇÃO MR é IMPORTANTE — comprimido não-MR teve hipoglicemia maior. Confirmar 'MR' na receita."},
{nivel:"info", txt:"GANHO DE PESO menor que glibenclamida (1-2 kg). Sem benefício CV específico."},
],

preparo:"VO comprimido MR, INTEIRO (não partir/mastigar — formulação prolongada). Manhã com café.",
monitor:"HbA1c, glicemias.",
diretriz:"SBD 2025. ADVANCE trial.",
fluxo:null, calcs:[],
},

/* ============== DPP-4 ============== */

{id:"med-sitagliptina", classe:"Inibidor da DPP-4 — incretínico", grupo:"antidiabetico",
nome:"Sitagliptina",
sin:["Januvia","Galvus (vildagliptina similar)","Onglyza (saxagliptina)"],
formas:["Comprimidos 25, 50, 100 mg — SUS via CEAF (PCDT específico) e privada"],
resumo:"Inibidor DPP-4 — aumenta GLP-1/GIP endógenos. Reduz HbA1c 0,5-1%. Neutro para peso. NÃO causa hipoglicemia. Bem tolerado. SEM benefício CV específico mas CARDIOSEGURO.",
dose_rapida:"100 mg VO 1×/d",

doses:[
{ind:"DM2 — opção em paciente que não pode usar SGLT-2/GLP-1 ou prefere VO", dose:"100 mg VO 1×/d (qualquer horário)", obs:"Pode ser combinada com metformina, sulfonilureia, insulina."},
{ind:"DM2 + Metformina", dose:"100 mg/d + metformina", obs:"Combinação fixa: sitagliptina + metformina (Janumet)."},
{ind:"DM2 em idoso (alternativa à sulfonilureia)", dose:"100 mg/d (TFG ≥45 mL/min)", obs:"Sem hipoglicemia, sem ganho de peso — perfil seguro."},
],

ajustes:{
irc:"TFG 30-45: 50 mg/d. TFG <30 ou HD: 25 mg/d.",
iht:"IH leve-moderada: sem ajuste. IH grave: cautela.",
idoso:"Sem ajuste. Boa opção em idoso por perfil seguro.",
gestante:"Categoria B — preferir insulina (longa experiência).",
aleita:"Cautela.",
ped:"Não recomendada.",
},

mecanismo:"Inibe enzima DPP-4 (dipeptidil peptidase-4) → preserva GLP-1 e GIP endógenos (incretinas pós-prandiais) → ↑ secreção de insulina GLICOSE-DEPENDENTE (apenas quando há hiperglicemia) + ↓ glucagon. POR ISSO não causa hipoglicemia em monoterapia.",

farmacocin:{
absorc:"VO: 87% — pode tomar com ou sem alimento",
distrib:"Ampla",
metab:"Mínimo — excretada inalterada",
elimin:"Renal (79%)",
meiavida:"12h (permite 1×/d)",
ligacao:"38%",
},

espectro:["DM2 — alternativa em idoso, paciente que evita injetáveis","DM2 + IRC moderada (com ajuste de dose)","Combinada com metformina, sulfonilureia, insulina"],

interacoes:[
{droga:"Digoxina", efeito:"↑ digoxina ~11% (sem ajuste rotineiro)."},
{droga:"Inibidores ACE (raro)", efeito:"Angioedema potencializado (caso raro descrito)."},
],

efeitos:[
{tipo:"comum", item:"Cefaleia, nasofaringite, infecções urinárias leves"},
{tipo:"sério", item:"PANCREATITE AGUDA (raro mas descrito — dor abdominal súbita + amilase/lipase ↑), ANGIOEDEMA (raro), reação de hipersensibilidade"},
{tipo:"raro", item:"Penfigoide bolhoso (DPP-4 efeito de classe), insuficiência cardíaca (saxagliptina especificamente — SAVOR-TIMI 53)"},
],

alertas:[
{nivel:"warn", txt:"PANCREATITE: suspender se dor abdominal súbita + amilase/lipase elevadas. Investigar. Em histórico de pancreatite: considerar evitar (preferir outra classe)."},
{nivel:"warn", txt:"SAXAGLIPTINA (similar): SAVOR-TIMI 53 mostrou ↑ HOSPITALIZAÇÃO POR IC. Sitagliptina, alogliptina, linagliptina: neutras. Em IC: evitar saxagliptina."},
{nivel:"warn", txt:"PENFIGOIDE BOLHOSO: efeito de classe DPP-4 — pode aparecer após meses-anos de uso. Suspender."},
{nivel:"info", txt:"PERFIL: sem hipoglicemia, neutro para peso, bem tolerado. BOA OPÇÃO em IDOSO ou paciente que evita injetáveis. Reduz HbA1c menos que SGLT-2/GLP-1 (~0,5-1%)."},
{nivel:"info", txt:"PCDT SUS: disponível para DM2 com HbA1c não controlada apesar de metformina + sulfonilureia OU contraindicação a sulfonilureia."},
],

preparo:"VO comprimido, com ou sem alimento.",
monitor:"HbA1c, função renal, sinais pancreatite.",
diretriz:"SBD 2025. ADA 2025. TECOS trial (cardiossegurança).",
fluxo:null, calcs:[],
},

/* ============== SGLT-2 ============== */

{id:"med-dapagliflozina", classe:"Inibidor SGLT-2 — co-transportador Na+/glicose renal", grupo:"antidiabetico",
nome:"Dapagliflozina",
sin:["Forxiga"],
formas:["Comprimidos 5 mg, 10 mg — privada/SUS via CEAF (em alguns estados, com critérios)"],
resumo:"SGLT-2 com benefício CV/renal COMPROVADO. 1ª linha em DM2 com alto/muito alto RCV (SBD 2025). Reduz HbA1c 0,5-1% + perda peso 2-3 kg + redução PA + redução mortalidade CV e IC.",
dose_rapida:"10 mg VO 1×/d (manhã)",

doses:[
{ind:"DM2 — 1ª linha em ALTO/MUITO ALTO RCV (SBD 2025)", dose:"10 mg VO 1×/d", obs:"Iniciar precocemente — benefício CV demonstrado independente de HbA1c. DECLARE-TIMI 58 trial."},
{ind:"IC com FE REDUZIDA (com ou sem DM!)", dose:"10 mg/d", obs:"DAPA-HF trial — reduz mortalidade e hospitalização em IC FE reduzida MESMO em paciente SEM DM. PADRÃO MODERNO."},
{ind:"IC com FE PRESERVADA", dose:"10 mg/d", obs:"DELIVER trial (2022) — também eficaz em IC FE preservada/levemente reduzida."},
{ind:"DRC + DM2 (nefroproteção)", dose:"10 mg/d", obs:"DAPA-CKD trial — reduz progressão IRC + mortalidade em DM2 + DRC. Pode iniciar com TFG ≥25."},
],

ajustes:{
irc:"TFG ≥45: dose plena (10 mg). TFG 25-45: 10 mg ainda eficaz (DAPA-CKD). TFG <25: efeito glicêmico mínimo, mas benefício CV/renal pode persistir — discutir.",
iht:"IH grave: cautela (5 mg inicial).",
idoso:"Cuidado com depleção volêmica/hipotensão postural. Iniciar 5 mg em frágil.",
gestante:"CATEGORIA C — NÃO usar 2º-3º trimestre (nefrotoxicidade fetal).",
aleita:"Evitar.",
ped:"Não rotina.",
},

mecanismo:"Inibe SGLT-2 no túbulo proximal renal → reduz reabsorção de glicose → GLICOSÚRIA (paciente excreta 50-80 g de glicose/dia) → ↓glicemia, peso, PA. Mecanismos pleiotrópicos cardiorrenais: redução pré-carga, melhora hemodinâmica renal, redução inflamação, ↑cetoadaptação (combustível alternativo cardíaco).",

farmacocin:{
absorc:"VO: 78%",
distrib:"Ampla",
metab:"Glucuronidação (UGT1A9)",
elimin:"Renal (75%)",
meiavida:"12h",
ligacao:"~91%",
},

espectro:["DM2 com ALTO/MUITO ALTO RCV (1ª linha SBD 2025)","IC com FE reduzida COM OU SEM DM (DAPA-HF — padrão)","IC com FE preservada","DRC + DM (nefroproteção)","Insuficiência cardíaca + DM2"],

interacoes:[
{droga:"Diuréticos de alça/tiazídicos", efeito:"Depleção volêmica aditiva — cuidado em idoso/frágil. Reduzir diurético antes."},
{droga:"Insulina, sulfonilureia", efeito:"↑ risco hipoglicemia em combinação — reduzir dose."},
{droga:"Rifampicina", efeito:"↓ dapagliflozina (indução UGT)."},
],

efeitos:[
{tipo:"comum", item:"INFECÇÕES URINÁRIAS / GENITAIS (candidíase 3-10%), poliúria, sede, depleção volêmica leve, hipotensão postural"},
{tipo:"sério", item:"CETOACIDOSE EUGLICÊMICA (rara mas descrita — glicemia normal/quase normal mas cetose + acidose), fasciite necrosante perineal (gangrena de Fournier — raríssimo, fatal), depleção volêmica grave"},
{tipo:"raro", item:"Fratura óssea (canagliflozina mais), amputação MMII (canagliflozina — CANVAS), reação alérgica grave"},
],

alertas:[
{nivel:"crit", txt:"CETOACIDOSE EUGLICÊMICA: rara mas grave — paciente com sintomas cetose (náusea, vômito, dor abdominal, dispneia) mas glicemia próxima do normal. SUSPEITAR + dosar cetonas + gasometria. Fatores: jejum prolongado, álcool, infecção, redução de insulina basal. TRATAR: suspender SGLT-2 + insulina + glicose + hidratação."},
{nivel:"crit", txt:"GANGRENA DE FOURNIER (fasciite necrosante perineal): raríssima mas pode ser FATAL. Avisar paciente: procurar emergência se DOR/EDEMA/ERITEMA na região perineal/genital + febre + queda do estado geral."},
{nivel:"warn", txt:"SUSPENDER em situações de jejum prolongado: pré-operatório (24-48h antes), gastroenterite com vômito/diarreia, infecção grave, IAM. Reintroduzir após estabilização."},
{nivel:"warn", txt:"INFECÇÕES GENITAIS: prevenir com higiene perineal adequada. Tratar com antifúngico tópico. Não suspende rotina."},
{nivel:"info", txt:"BENEFÍCIO PRINCIPAL = mortalidade CV + IC + nefroproteção, MESMO em paciente sem DM. Iniciar PRECOCEMENTE em RCV alto, sem esperar falha de outra classe (mudança de paradigma SBD 2025)."},
],

preparo:"VO comprimido, com ou sem alimento, manhã.",
monitor:"HbA1c, função renal, sinais infecção genital/urinária. Em IC: peso, BNP.",
diretriz:"SBD 2025. ADA 2025. DAPA-HF. DAPA-CKD. DECLARE-TIMI 58. DELIVER.",
fluxo:null, calcs:[],
},

{id:"med-empagliflozina", classe:"Inibidor SGLT-2 — co-transportador Na+/glicose renal", grupo:"antidiabetico",
nome:"Empagliflozina",
sin:["Jardiance"],
formas:["Comprimidos 10 mg, 25 mg — privada/SUS via CEAF (em alguns estados)"],
resumo:"SGLT-2 com a EVIDÊNCIA CV MAIS ROBUSTA (EMPA-REG OUTCOME — 1º estudo a mostrar redução de mortalidade CV em DM2). 1ª linha em DM2 + alto RCV.",
dose_rapida:"10-25 mg VO 1×/d (manhã)",

doses:[
{ind:"DM2 — 1ª linha em ALTO/MUITO ALTO RCV (SBD 2025)", dose:"10 mg VO 1×/d; pode subir 25 mg se necessário controle glicêmico", obs:"EMPA-REG OUTCOME: reduziu mortalidade CV em 38% em DM2 + DCV estabelecida."},
{ind:"IC com FE REDUZIDA (com ou sem DM!)", dose:"10 mg/d", obs:"EMPEROR-Reduced trial — padrão moderno em IC FE reduzida."},
{ind:"IC com FE PRESERVADA", dose:"10 mg/d", obs:"EMPEROR-Preserved (2021) — primeiro tratamento eficaz em IC FE preservada/levemente reduzida."},
{ind:"DRC + DM2", dose:"10 mg/d", obs:"EMPA-KIDNEY trial — reduz progressão IRC + mortalidade."},
],

ajustes:{
irc:"TFG ≥45: 10-25 mg. TFG 30-45: 10 mg. TFG <30: efeito glicêmico mínimo, benefício CV pode persistir — discutir individual.",
iht:"IH grave: cautela.",
idoso:"Cuidado com depleção volêmica.",
gestante:"NÃO usar 2º-3º trimestre.",
aleita:"Evitar.",
ped:"Não rotina.",
},

mecanismo:"Mesmo da dapagliflozina (inibição SGLT-2). Empagliflozina tem maior seletividade SGLT-2/SGLT-1 (>2500×) — pode ter perfil de segurança ligeiramente diferente.",

farmacocin:{
absorc:"VO: ~85%",
distrib:"Ampla",
metab:"Glucuronidação",
elimin:"Renal (54%) + fezes",
meiavida:"12-13h",
ligacao:"~86%",
},

espectro:["DM2 — 1ª linha em alto RCV (EMPA-REG)","IC FE reduzida COM OU SEM DM (EMPEROR-Reduced)","IC FE preservada (EMPEROR-Preserved)","DRC + DM (EMPA-KIDNEY)"],

interacoes:[
{droga:"Diuréticos", efeito:"Depleção volêmica aditiva."},
{droga:"Insulina, sulfonilureia", efeito:"Hipoglicemia em combinação — reduzir dose."},
],

efeitos:[
{tipo:"comum", item:"Infecções genitais (candidíase), ITU, poliúria, depleção volêmica leve"},
{tipo:"sério", item:"Cetoacidose euglicêmica, gangrena de Fournier (raríssima), depleção volêmica grave"},
{tipo:"raro", item:"Reação alérgica grave"},
],

alertas:[
{nivel:"crit", txt:"Mesmos alertas da dapagliflozina (cetoacidose euglicêmica, gangrena Fournier). SUSPENDER em jejum prolongado, pré-op, sepse."},
{nivel:"warn", txt:"EMPA-REG OUTCOME (NEJM 2015) foi o PRIMEIRO trial a mostrar redução de mortalidade CV em DM2 com classe além de insulina — mudou paradigma SGLT-2."},
{nivel:"info", txt:"DAPA vs EMPA: ambas são SGLT-2 com evidências sólidas. Empagliflozina tem mais estudos em IC. Dapagliflozina aprovada em DRC mesmo sem DM. SBD 2025 considera equivalentes."},
],

preparo:"VO comprimido, com ou sem alimento.",
monitor:"HbA1c, função renal, sinais infecção.",
diretriz:"SBD 2025. EMPA-REG OUTCOME. EMPEROR-Reduced/Preserved. EMPA-KIDNEY.",
fluxo:null, calcs:[],
},

/* ============== GLP-1 ANALOGS ============== */

{id:"med-semaglutida", classe:"Agonista do receptor GLP-1 — incretínico", grupo:"antidiabetico",
nome:"Semaglutida",
sin:["Ozempic (SC 1×/sem)","Wegovy (obesidade SC)","Rybelsus (VO 1×/d)"],
formas:["SC 1×/SEM: caneta 0,25/0,5/1/2 mg (Ozempic)","SC 1×/SEM: caneta 1,7/2,4 mg (Wegovy — obesidade)","VO 1×/d: comprimido 3/7/14 mg (Rybelsus) — em jejum 30 min antes 1ª refeição"],
resumo:"Análogo GLP-1 SC semanal (ou VO diário). Benefício CV (SUSTAIN-6) + nefroproteção + PERDA DE PESO 5-15%. 1ª linha em DM2 + obesidade ou alto RCV (SBD 2025).",
dose_rapida:"SC: 0,25 mg/sem × 4 sem → 0,5 mg/sem × 4 sem → 1 mg/sem (máx 2 mg/sem)",

doses:[
{ind:"DM2 — 1ª linha em OBESIDADE (IMC ≥30) ou ALTO RCV (SBD 2025)", dose:"SC: 0,25 mg/sem × 4 sem → 0,5 mg/sem × 4 sem → 1 mg/sem (manutenção); pode subir 2 mg/sem", obs:"Titulação lenta REDUZ EA GI (náusea). Mesmo dia da semana."},
{ind:"Obesidade SEM DM (Wegovy)", dose:"Titulação até 2,4 mg/sem (16 sem)", obs:"STEP-1 trial: ~15% redução de peso. Indicação isolada para obesidade."},
{ind:"DM2 — Rybelsus VO", dose:"3 mg/d × 30 dias → 7 mg/d × 30 dias → 14 mg/d", obs:"EM JEJUM com 1/2 copo água, AGUARDAR 30 min até primeira refeição. Absorção é crítica."},
{ind:"DM2 + IC / DAC estabelecida", dose:"0,5-2 mg/sem", obs:"SUSTAIN-6 — reduz desfechos CV maiores (MACE) 26%."},
],

ajustes:{
irc:"Sem ajuste rotineiro até TFG 15. <15: cautela.",
iht:"Sem ajuste rotineiro.",
idoso:"Sem ajuste — usar dose padrão. Cuidado com EA GI.",
gestante:"Categoria C — EVITAR. Suspender 2 meses antes de gestação planejada.",
aleita:"Sem dados — evitar.",
ped:"≥12 anos (Wegovy obesidade): aprovado FDA.",
},

mecanismo:"Análogo do GLP-1 (incretina endógena) com meia-vida muito mais longa (T½ ~165h). Efeitos: (1) ↑secreção de insulina GLICOSE-DEPENDENTE; (2) ↓secreção glucagon; (3) RETARDA esvaziamento gástrico → saciedade precoce; (4) AÇÃO NO SNC (hipotálamo) → ↓apetite → PERDA DE PESO; (5) efeitos pleiotrópicos cardiovasculares.",

farmacocin:{
absorc:"SC: pico em 1-3 dias | VO: muito baixa (apenas 0,4-1%, requer absorção em jejum)",
distrib:"Ampla",
metab:"Proteólise (peptídeo)",
elimin:"Renal/fezes",
meiavida:"~165h (1 semana) — permite SC semanal",
ligacao:">99%",
},

espectro:["DM2 + obesidade (IMC ≥30) — 1ª linha SBD 2025","DM2 + alto/muito alto RCV (SUSTAIN-6)","DM2 + DRC (FLOW trial — nefroproteção)","Obesidade SEM DM (Wegovy — STEP-1)","DM2 refratária a metformina"],

interacoes:[
{droga:"Sulfonilureias, insulina", efeito:"↑ hipoglicemia — reduzir dose dessas em ~20-30%."},
{droga:"Drogas VO de absorção pH-dependente (levotiroxina, alguns antibióticos)", efeito:"Retardo do esvaziamento gástrico pode reduzir absorção."},
{droga:"Varfarina", efeito:"Pode alterar INR — monitorar."},
],

efeitos:[
{tipo:"comum", item:"Náusea (40%, geralmente transitória 4-8 sem), vômito, diarreia, constipação, dor abdominal, dispepsia, ↓ apetite (efeito buscado), fadiga, cefaleia"},
{tipo:"sério", item:"PANCREATITE AGUDA (rara mas descrita), gastroparesia (em DM autonômico), CARCINOMA MEDULAR DE TIREOIDE (apenas em estudos animais — black box FDA), reação no local da injeção, retinopatia diabética piora súbita (se controle glicêmico muito rápido)"},
{tipo:"raro", item:"Ileus, vesicultopatia (colelitíase em uso prolongado)"},
],

alertas:[
{nivel:"crit", txt:"CONTRAINDICAÇÃO: História pessoal/familiar de CARCINOMA MEDULAR DE TIREOIDE ou neoplasia endócrina múltipla tipo 2 (MEN2) — risco descrito em estudos animais (BLACK BOX FDA)."},
{nivel:"crit", txt:"PANCREATITE: suspender se dor abdominal súbita persistente + náusea + amilase/lipase elevadas. Em histórico de pancreatite recorrente: contraindicação relativa."},
{nivel:"warn", txt:"NÁUSEA: 40% inicial — titulação LENTA (4 semanas em cada dose) reduz. Orientar refeições pequenas, evitar gorduras. Geralmente desaparece em 4-8 semanas."},
{nivel:"warn", txt:"RYBELSUS VO: ABSORÇÃO É CRÍTICA — EM JEJUM, com 1/2 copo de ÁGUA (não suco/café), AGUARDAR 30 MIN até comer/beber/tomar outra droga. Falha de adesão a esse protocolo = falha terapêutica."},
{nivel:"warn", txt:"PIORA RETINOPATIA: SUSTAIN-6 mostrou ↑ piora de retinopatia preexistente em pacientes com queda rápida de HbA1c. Fazer fundoscopia antes de iniciar em paciente com retinopatia diabética."},
{nivel:"info", txt:"VIAS: SC semanal é PADRÃO. VO diário (Rybelsus) é alternativa para quem evita agulhas, mas absorção é desafio."},
{nivel:"info", txt:"PERDA DE PESO MÉDIA: STEP trials ~15% em 68 sem (~14-17 kg em obeso). Em DM2: SUSTAIN ~5-6 kg adicional. Maior perda entre GLP-1 atuais."},
],

preparo:"SC: caneta pré-preenchida — abdômen, coxa, braço. Mesmo dia da semana. Rotacionar locais. VO: jejum estrito + 30 min depois.",
monitor:"HbA1c 3-6/6m, peso, função renal, fundoscopia em retinopatia, sintomas pancreatite.",
diretriz:"SBD 2025. ADA 2025. SUSTAIN-6. STEP-1/2/3. FLOW.",
fluxo:null, calcs:[],
},

{id:"med-liraglutida", classe:"Agonista GLP-1 — incretínico", grupo:"antidiabetico",
nome:"Liraglutida",
sin:["Victoza (DM2)","Saxenda (obesidade)"],
formas:["SC 1×/d: caneta 6 mg/mL (Victoza 1,2-1,8 mg/d para DM, Saxenda 3 mg/d para obesidade)"],
resumo:"GLP-1 de meia-vida média (13h). Posologia DIÁRIA (vs semanal da semaglutida). Benefício CV (LEADER trial). Perda peso 3-6 kg. Substituto razoável onde semaglutida indisponível.",
dose_rapida:"DM2: 0,6 mg SC × 1 sem → 1,2 mg/d → 1,8 mg/d. Obesidade: até 3 mg/d",

doses:[
{ind:"DM2 — alternativa à semaglutida", dose:"0,6 mg SC 1×/d × 1 sem → 1,2 mg/d × 1 sem → 1,8 mg/d (manutenção)", obs:"Injeção 1×/d — menos prática que semaglutida semanal."},
{ind:"Obesidade SEM DM (Saxenda)", dose:"0,6 mg/d, titular 0,6 mg/sem até 3 mg/d", obs:"SCALE trial — ~5-8% redução de peso. Menor que semaglutida."},
{ind:"DM2 + DAC estabelecida (LEADER)", dose:"1,8 mg/d", obs:"LEADER trial — reduz MACE 13% em DM2 + DCV."},
],

ajustes:{
irc:"Sem ajuste rotineiro até TFG 15.",
iht:"Sem ajuste rotineiro.",
idoso:"Sem ajuste — cuidado EA GI.",
gestante:"Evitar.",
aleita:"Evitar.",
ped:"≥12 anos (Saxenda obesidade): aprovado FDA.",
},

mecanismo:"Mesmo da semaglutida — agonista GLP-1. Diferença: meia-vida 13h (vs 165h da semaglutida) → injeção diária.",

farmacocin:{
absorc:"SC: pico 8-12h",
distrib:"Ampla",
metab:"Proteólise",
elimin:"Não significativa renal",
meiavida:"~13h",
ligacao:">98%",
},

espectro:["DM2 — alternativa","Obesidade (Saxenda)","DM2 + DCV (LEADER)"],

interacoes:[{droga:"Sulfonilureias, insulina", efeito:"Hipoglicemia — reduzir dose."}],

efeitos:[
{tipo:"comum", item:"Náusea, vômito, diarreia, constipação, dor abdominal, ↓ apetite"},
{tipo:"sério", item:"Pancreatite, carcinoma medular tireoide (caixa preta), gastroparesia"},
{tipo:"raro", item:"Vesiculopatia"},
],

alertas:[
{nivel:"crit", txt:"Mesmas contraindicações da semaglutida (CMT, MEN2, pancreatite)."},
{nivel:"warn", txt:"PERDA DE PESO MENOR que semaglutida (~3-5 kg vs 5-15 kg). Em obesidade significativa: preferir semaglutida ou tirzepatida."},
{nivel:"info", txt:"VANTAGEM: 1×/d permite dose mais ajustável dia-a-dia. Boa para iniciar em paciente com muita náusea (controle mais fino)."},
],

preparo:"SC caneta — abdômen, coxa, braço. Rotacionar.",
monitor:"HbA1c, peso, função renal, sintomas pancreatite.",
diretriz:"SBD 2025. LEADER. SCALE.",
fluxo:null, calcs:[],
},

{id:"med-tirzepatida", classe:"Agonista dual GIP + GLP-1 — incretínico", grupo:"antidiabetico",
nome:"Tirzepatida",
sin:["Mounjaro (DM2)","Zepbound (obesidade)"],
formas:["SC 1×/SEM: caneta 2,5 / 5 / 7,5 / 10 / 12,5 / 15 mg — privada apenas"],
resumo:"AGONISTA DUAL GIP + GLP-1. Eficácia GLICÊMICA E PONDERAL SUPERIOR aos GLP-1 isolados. Reduz HbA1c 2-2,5% + perda peso 15-22%. Aprovado SURMOUNT (obesidade) e SURPASS (DM2).",
dose_rapida:"2,5 mg SC 1×/sem × 4 sem → titular 2,5 mg cada 4 sem (máx 15 mg/sem)",

doses:[
{ind:"DM2 — opção em obesidade significativa ou refratariedade", dose:"2,5 mg SC 1×/sem × 4 sem → 5 mg → 7,5 mg → 10 mg → 12,5 mg → 15 mg (cada degrau 4 sem)", obs:"Maior eficácia anti-hiperglicêmica/ponderal disponível atualmente (SURPASS trials)."},
{ind:"Obesidade SEM DM (Zepbound)", dose:"Até 15 mg/sem", obs:"SURMOUNT-1: 22% redução de peso (~22 kg em 72 sem) — maior eficácia ponderal já descrita farmacoterapia."},
{ind:"DM2 + alto RCV", dose:"10-15 mg/sem", obs:"SURPASS-CVOT — em andamento, evidência CV em desenvolvimento."},
],

ajustes:{
irc:"Sem ajuste até TFG 15.",
iht:"IH grave: cautela.",
idoso:"Sem ajuste.",
gestante:"Categoria C — evitar.",
aleita:"Evitar.",
ped:"Não recomendada.",
},

mecanismo:"AGONISTA DUAL: ativa receptores de GIP (peptídeo insulinotrópico glicose-dependente) E GLP-1. Efeito sinérgico em: secreção insulina, redução glucagon, retardo esvaziamento gástrico, ↓ apetite. Mecanismo dual explica eficácia superior aos GLP-1 isolados.",

farmacocin:{
absorc:"SC: pico ~24-72h",
distrib:"Ampla",
metab:"Proteólise",
elimin:"—",
meiavida:"~5 dias",
ligacao:">99%",
},

espectro:["DM2 com obesidade significativa","DM2 refratária","Obesidade isolada (Zepbound)","Em desenvolvimento: NASH, IC, apneia obstrutiva"],

interacoes:[{droga:"Sulfonilureias, insulina", efeito:"Hipoglicemia — reduzir."}],

efeitos:[
{tipo:"comum", item:"Náusea (mais intensa que GLP-1 isolado), vômito, diarreia, constipação, dispepsia, ↓ apetite"},
{tipo:"sério", item:"Pancreatite (raro), hipoglicemia (com sulfonilureia/insulina), reações alérgicas, vesiculopatia"},
{tipo:"raro", item:"Carcinoma medular tireoide (mesma classe-warning)"},
],

alertas:[
{nivel:"crit", txt:"CONTRAINDICAÇÃO: História pessoal/familiar de carcinoma medular de tireoide ou MEN2 (mesma classe-warning dos GLP-1)."},
{nivel:"warn", txt:"NÁUSEA INTENSA: titulação MAIS LENTA que GLP-1 isolado (4 sem em cada dose). Adesão pode ser desafio inicial."},
{nivel:"warn", txt:"CUSTO ALTO — não disponível SUS. Acesso limitado em maioria dos pacientes. Em paciente com cobertura/plano: opção quando GLP-1 isolado insuficiente."},
{nivel:"info", txt:"SURMOUNT-1: 22% perda de peso em obesidade — maior já descrita em farmacoterapia (compatível com bariátrica). Mudança de paradigma."},
],

preparo:"SC caneta — abdômen/coxa/braço. Mesmo dia da semana.",
monitor:"HbA1c, peso, função renal, sintomas pancreatite/vesiculopatia.",
diretriz:"SBD 2025. SURPASS-1/2/3/4. SURMOUNT-1/2/3/4.",
fluxo:null, calcs:[],
},

/* ============== TZD ============== */

{id:"med-pioglitazona", classe:"Tiazolidinediona (TZD) — sensibilizador insulínico PPAR-γ", grupo:"antidiabetico",
nome:"Pioglitazona",
sin:["Actos","Stanglit"],
formas:["Comprimidos 15 mg, 30 mg, 45 mg — privada"],
resumo:"Sensibilizador insulínico via PPAR-γ. Reduz HbA1c 0,5-1,4%. Benefício em NASH/esteato-hepatite. Uso restrito — ganho peso, retenção líquida, fraturas, risco câncer bexiga (controverso).",
dose_rapida:"15-45 mg VO 1×/d",

doses:[
{ind:"DM2 — uso seletivo (NASH, refratariedade)", dose:"15 mg VO 1×/d inicial; titular até 45 mg/d", obs:"Resposta lenta — esperar 8-12 sem para efeito pleno. Pouco usada em 1ª linha."},
{ind:"DM2 + NASH (esteato-hepatite não-alcoólica)", dose:"15-45 mg/d", obs:"PIVENS trial — pioglitazona melhora histologia NASH (única droga aprovada off-label para NASH)."},
{ind:"DM2 com resistência insulínica grave", dose:"30-45 mg/d", obs:"Útil em síndrome metabólica com IMC alto + acantose nigricans."},
],

ajustes:{
irc:"Sem ajuste rotineiro até TFG 15. <15: cautela (retenção líquida).",
iht:"IH ativa: CONTRAINDICADA. Em IH conhecida: dosar TGO/TGP basal e periódico.",
idoso:"Cuidado com retenção líquida + IC + fraturas.",
gestante:"Categoria C — evitar.",
aleita:"Evitar.",
ped:"Não recomendada.",
},

mecanismo:"Agonista PPAR-γ (receptor nuclear de adipócitos) → ↑ sensibilidade insulínica em músculo, fígado, adipócitos. Redistribuição de gordura (de visceral para subcutâneo). Efeito demora 4-12 semanas para atingir pico.",

farmacocin:{
absorc:"VO: pico 2h",
distrib:"Ampla",
metab:"Hepático (CYP2C8) — metabólitos ativos",
elimin:"Biliar/fecal",
meiavida:"3-7h (metabólitos 16-24h)",
ligacao:">99%",
},

espectro:["DM2 com resistência insulínica grave","DM2 + NASH","DM2 refratária às outras opções (combinação)","Síndrome metabólica grave"],

interacoes:[
{droga:"Insulina", efeito:"Retenção líquida potencializada — risco IC. CUIDADO em combinação."},
{droga:"Gemfibrozila", efeito:"↑ pioglitazona 3× (inibidor CYP2C8) — reduzir dose."},
{droga:"Rifampicina", efeito:"↓ pioglitazona (indutor)."},
],

efeitos:[
{tipo:"comum", item:"GANHO DE PESO (2-5 kg), retenção hídrica/edema, anemia leve (diluicional), congestão nasal"},
{tipo:"sério", item:"INSUFICIÊNCIA CARDÍACA (precipita ou piora — efeito de classe TZD), FRATURAS ÓSSEAS (especialmente mulher pós-menopausa), hepatotoxicidade (rara)"},
{tipo:"raro", item:"CÂNCER DE BEXIGA (debate — meta-análise sugere ↑ risco em uso prolongado >2 anos, evidência inconsistente)"},
],

alertas:[
{nivel:"crit", txt:"INSUFICIÊNCIA CARDÍACA: CONTRAINDICADA em IC NYHA III-IV. Em IC I-II: cautela e monitor. Pode precipitar/piorar IC mesmo em paciente sem disfunção prévia. ROSIGLITAZONA foi retirada do mercado por isto."},
{nivel:"warn", txt:"FRATURAS: ↑ risco em mulher pós-menopausa (efeito ósseo via PPAR-γ). Avaliar densitometria + risco quedas antes de iniciar."},
{nivel:"warn", txt:"CÂNCER DE BEXIGA: controvérsia — meta-análises sugerem risco ↑ modesto em uso prolongado. EVITAR em paciente com histórico de CA bexiga ou hematúria inexplicada."},
{nivel:"warn", txt:"PESO + EDEMA: 2-5 kg em 6 meses. Em paciente com obesidade significativa: classe não preferida."},
{nivel:"info", txt:"PIVENS trial: única droga com benefício histológico documentado em NASH — possível uso off-label nesse cenário."},
],

preparo:"VO comprimido, com ou sem alimento.",
monitor:"HbA1c, peso, edema, TGO/TGP basal + 2-3m + 6/6m, sintomas IC.",
diretriz:"SBD 2025. PIVENS (NASH). PROactive trial.",
fluxo:null, calcs:[],
},

/* ============== INSULINAS BASAIS ANÁLOGAS ============== */

{id:"med-insulina-glargina", classe:"Insulina análoga BASAL de longa ação — U100/U300", grupo:"antidiabetico",
nome:"Insulina Glargina",
sin:["Lantus (U100)","Toujeo (U300)","Basaglar (biossimilar)"],
formas:["Caneta/refil 100 UI/mL (U100 — Lantus, Basaglar) — privada/SUS via PCDT","Caneta 300 UI/mL (U300 — Toujeo) — privada"],
resumo:"Insulina análoga basal de longa ação (24h, U100; 36h, U300). Substituiu NPH em maioria dos países. Padrão SUS via PCDT/CEAF em alguns estados. Menor variabilidade + menor hipoglicemia noturna vs NPH.",
dose_rapida:"Inicial 0,1-0,2 U/kg/d SC 1×/d (manhã ou noite, mesmo horário diário)",

doses:[
{ind:"DM1 — insulina basal (esquema basal-bolus)", dose:"40-50% da dose total diária como basal. Iniciar 0,2-0,3 U/kg/d", obs:"Combinada com insulina análoga rápida (lispro, asparte, glulisina) em refeições."},
{ind:"DM2 — adição à medicação oral quando HbA1c não controlada", dose:"0,1-0,2 U/kg/d SC, titular 2 U cada 3 dias até glicemia jejum 80-130", obs:"Manter metformina. Avaliar redução de sulfonilureia (risco hipoglicemia)."},
{ind:"DM2 — esquema basal-bolus avançado", dose:"50% dose total como basal + 50% prandial dividido em 3 refeições", obs:"Quando HbA1c persiste alto apesar de basal isolada."},
{ind:"Pediatria — DM1", dose:"0,2-0,3 U/kg/d", obs:"Aprovada ≥6 anos (U100)."},
],

ajustes:{
irc:"REDUZIR conforme TFG (eliminação reduzida). TFG <60: ~25% redução. TFG <30: 50% redução. Monitor.",
iht:"IH grave: redução de necessidade insulínica — monitor.",
idoso:"Iniciar dose menor. Vigilância hipoglicemia.",
gestante:"Categoria C — pode usar (estudos mais limitados que NPH). Algumas diretrizes preferem detemir/NPH em gestação.",
aleita:"Compatível.",
ped:"Aprovada ≥6 anos.",
},

mecanismo:"Análogo de insulina com substituições aminoacídicas que aumentam ponto isoelétrico → microprecipitação subcutânea → liberação lenta e CONTÍNUA por 24h (U100) ou 36h (U300). SEM PICO marcado → reduz hipoglicemia noturna.",

farmacocin:{
absorc:"SC: lenta e contínua (24h U100; 36h U300)",
distrib:"Sistêmica",
metab:"Periférico (subcutâneo)",
elimin:"Renal",
meiavida:"~12h (U100) | ~19h (U300)",
ligacao:"—",
},

espectro:["DM1 (basal em basal-bolus)","DM2 com HbA1c não controlada por VO","DM2 — esquema basal-bolus","Substituto NPH em paciente com hipoglicemia noturna recorrente"],

interacoes:[
{droga:"Outras insulinas", efeito:"Coordenar esquema."},
{droga:"β-bloqueadores", efeito:"Mascaram sintomas hipoglicemia (tremor, palpitação)."},
{droga:"Sulfonilureias, álcool", efeito:"Hipoglicemia aditiva."},
{droga:"Corticoides", efeito:"Hiperglicemia — necessitar ↑ insulina."},
],

efeitos:[
{tipo:"comum", item:"Hipoglicemia (mas MENOR que NPH — especialmente noturna), reação local (eritema, lipohipertrofia), ganho de peso (1-3 kg)"},
{tipo:"sério", item:"Hipoglicemia grave, lipohipertrofia significativa (ROTACIONAR locais!), reação alérgica rara"},
{tipo:"raro", item:"Edema (raramente)"},
],

alertas:[
{nivel:"crit", txt:"NUNCA misturar glargina com outras insulinas na mesma seringa — formulação especial (pH ácido) precipita se combinada. Aplicar separadamente."},
{nivel:"warn", txt:"ROTACIONAR locais de injeção (abdômen, coxa, braço, glúteo) para evitar LIPOHIPERTROFIA (massa subcutânea que reduz absorção, causa glicemia errática)."},
{nivel:"warn", txt:"HORÁRIO FIXO diário — variação de >2h reduz cobertura. Manter rotina."},
{nivel:"info", txt:"U300 (Toujeo) tem duração ainda maior (36h) — útil em paciente com variação 6/6h em U100. Mas U300 tem ~30% menor potência por mL — atenção ao volume na transição."},
{nivel:"info", txt:"SUSTITUIÇÃO NPH → glargina: dose inicial ~80% da dose NPH (glargina é mais potente clinicamente). Ajustar."},
],

preparo:"SC caneta — abdômen, coxa, braço, glúteo. Não agitar (não é suspensão). Rotacionar. Manter na geladeira fechada; em uso pode permanecer ambiente até 28 dias.",
monitor:"HbA1c, glicemias capilares (pré-refeições + bedtime), sintomas hipoglicemia.",
diretriz:"SBD 2025. ADA 2025. PCDT MS DM2 (insulina análoga em casos específicos).",
fluxo:null, calcs:[],
},

{id:"med-insulina-degludeca", classe:"Insulina análoga BASAL de ultra-longa ação", grupo:"antidiabetico",
nome:"Insulina Degludeca",
sin:["Tresiba"],
formas:["Caneta 100 UI/mL (FlexTouch) — privada"],
resumo:"Insulina basal de ULTRA-LONGA ação (>42h). Maior flexibilidade de horário (pode variar até 8h dia a dia). MENOR hipoglicemia noturna e total vs glargina (DEVOTE trial).",
dose_rapida:"0,1-0,2 U/kg/d SC 1×/d (horário flexível — pode variar 8-40h entre doses)",

doses:[
{ind:"DM1/DM2 — insulina basal com necessidade de flexibilidade", dose:"0,1-0,2 U/kg/d SC 1×/d", obs:"Pode variar horário diariamente (mín 8h entre doses). Útil em paciente com rotina irregular."},
{ind:"DM2 com hipoglicemias recorrentes em glargina", dose:"Conversão 1:1 (mesma dose unitária)", obs:"DEVOTE trial — reduz hipoglicemia grave 40% vs glargina."},
],

ajustes:{
irc:"REDUZIR conforme TFG.",
iht:"Reduzir.",
idoso:"Iniciar dose menor — boa opção pela maior margem de segurança.",
gestante:"Categoria C — dados limitados.",
aleita:"Sem dados.",
ped:"≥1 ano (FDA).",
},

mecanismo:"Análogo de insulina que forma MULTI-HEXÂMEROS estáveis no subcutâneo → liberação progressiva por >42h. PRINCIPAL VANTAGEM: meia-vida ultra-longa permite flexibilidade de horário (rara em insulinas).",

farmacocin:{
absorc:"SC: liberação prolongada",
distrib:"Sistêmica",
metab:"—",
elimin:"—",
meiavida:"~25h | ação >42h",
ligacao:"—",
},

espectro:["DM1/DM2 com rotina irregular","DM com hipoglicemias recorrentes em glargina","Crianças (FDA aprovou ≥1 ano)"],

interacoes:[{droga:"Como glargina", efeito:"Mesmas interações de insulinas."}],

efeitos:[
{tipo:"comum", item:"Hipoglicemia (menor que glargina), ganho de peso, reação local"},
{tipo:"sério", item:"Hipoglicemia grave (raro), lipohipertrofia"},
{tipo:"raro", item:"Reação alérgica"},
],

alertas:[
{nivel:"warn", txt:"DEVOTE trial: degludeca reduziu hipoglicemia grave 40% e noturna 53% vs glargina — em paciente de alto risco hipoglicemia, considerar substituição."},
{nivel:"info", txt:"FLEXIBILIDADE: pode variar horário diário (mín 8h entre doses) — útil em paciente com rotina noturna/irregular."},
{nivel:"info", txt:"CUSTO ELEVADO — pouco disponível SUS. Alternativa quando glargina não tolerada."},
],

preparo:"SC caneta — rotacionar. Ambiente após início; geladeira lacrado.",
monitor:"HbA1c, glicemias.",
diretriz:"SBD 2025. DEVOTE trial.",
fluxo:null, calcs:[],
},

/* ============== INSULINAS PRANDIAIS ANÁLOGAS ============== */

{id:"med-insulina-lispro", classe:"Insulina análoga PRANDIAL de ação ultrarrápida", grupo:"antidiabetico",
nome:"Insulina Lispro (e similares: Asparte, Glulisina)",
sin:["Humalog (lispro)","NovoRapid (asparte)","Apidra (glulisina)","Lyumjev (ultrarrápida 2ª geração)"],
formas:["Caneta/refil 100 UI/mL — privada/SUS via PCDT","Frasco 100 UI/mL"],
resumo:"Análogas prandiais (bolus) ultrarrápidas. Início 5-15 min, pico 1-2h, duração 3-5h. Aplicar IMEDIATAMENTE antes refeição (até 15 min após permitido). Substituem regular em DM1 e DM2 basal-bolus.",
dose_rapida:"0,05-0,15 U/kg por refeição (4-15 U típico em adulto)",

doses:[
{ind:"DM1 — bolus prandial (esquema basal-bolus)", dose:"0,05-0,15 U/kg/refeição (~4-15 U), calculado por contagem de carboidratos (1 U / 10-15 g CHO) + fator correção", obs:"FATOR CORREÇÃO típico: 1 U reduz ~30-50 mg/dL (regra 1800 para análogas: 1800÷dose total diária)."},
{ind:"DM2 — bolus prandial em basal-bolus", dose:"4-10 U pré-refeição inicialmente; titular conforme HGT 2h pós-refeição", obs:"Iniciar com refeição maior do dia, expandir conforme necessário."},
{ind:"Pré-operatório / DKA leve / hiperglicemia em ambulatório", dose:"Conforme protocolo (5-10 U SC PRN se glicemia >200)", obs:"Início rápido permite uso para correção."},
{ind:"Pediatria — DM1", dose:"Mesma fórmula adulto, ajustada por peso e contagem CHO", obs:"Aprovada ≥1 ano. Educação em contagem CHO é fundamental."},
],

ajustes:{
irc:"Reduzir dose 25-50% em TFG <30 (menor depuração).",
iht:"Reduzir.",
idoso:"Iniciar dose menor.",
gestante:"Categoria B — pode usar (asparte tem mais evidência em gestação).",
aleita:"Compatível.",
ped:"Aprovadas ≥1 ano.",
},

mecanismo:"Análogos de insulina com substituições aminoacídicas que IMPEDEM formação de hexâmeros → absorção mais rápida (vs regular). Início 5-15 min (vs 30 min da regular). Vantagem: pode aplicar IMEDIATAMENTE antes da refeição (até 15 min após).",

farmacocin:{
absorc:"SC: início 5-15 min, pico 1-2h",
distrib:"Sistêmica",
metab:"Periférico",
elimin:"Renal/hepático",
meiavida:"Ação 3-5h",
ligacao:"—",
},

espectro:["DM1 — esquema basal-bolus padrão","DM2 — esquema basal-bolus avançado","DM gestacional (asparte preferida)","Bomba de insulina","Correção rápida em hiperglicemia"],

interacoes:[{droga:"Mesmas das insulinas", efeito:"Coordenar com basal e drogas que alteram glicemia."}],

efeitos:[
{tipo:"comum", item:"Hipoglicemia pós-prandial se dose inadequada/atrasa refeição, reação local, lipohipertrofia"},
{tipo:"sério", item:"Hipoglicemia grave"},
{tipo:"raro", item:"Reação alérgica"},
],

alertas:[
{nivel:"crit", txt:"APLICAR IMEDIATAMENTE ANTES DA REFEIÇÃO (ou até 15 min após). Aplicar e não comer = HIPOGLICEMIA. Em paciente com gastroparesia: ajustar timing ou trocar para regular."},
{nivel:"warn", txt:"DIFERENCIAR DA REGULAR: regular = início 30 min (aplicar 30 min antes), ação 6-8h. Análogas = início 5-15 min (aplicar imediatamente), ação 3-5h. ERRO COMUM = confundir → hipoglicemia ou hiperglicemia."},
{nivel:"warn", txt:"LYUMJEV (lispro de 2ª geração) é AINDA mais rápida — início 1-3 min. Aprovada para bomba e inj direto."},
{nivel:"info", txt:"PCDT SUS: disponível em casos específicos (DM1, DM2 com basal-bolus, gestação). Caso contrário: insulina regular cobre necessidade prandial."},
],

preparo:"SC caneta — abdômen para refeições (absorção mais rápida). Rotacionar dentro da área. NÃO usar coxa para prandial (absorção mais lenta).",
monitor:"HbA1c, glicemias pré e 2h pós-prandiais.",
diretriz:"SBD 2025. ADA 2025. PCDT MS.",
fluxo:null, calcs:[],
},

);
