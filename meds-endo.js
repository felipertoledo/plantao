/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — meds/endo.js
   24 medicações
   Grupos: antidiabetico, endocrino
   =========================================================== */

MEDICACOES.push(

/* ============== ANTIDIABETICO (13) ============== */

{id:"med-dapagliflozina", contexto:["pa","ubs"], classe:"Inibidor SGLT-2 — co-transportador Na+/glicose renal", grupo:"antidiabetico",
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
{id:"med-empagliflozina", contexto:["pa","ubs"], classe:"Inibidor SGLT-2 — co-transportador Na+/glicose renal", grupo:"antidiabetico",
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
{id:"med-glibenclamida", contexto:["pa","ubs"], classe:"Sulfonilureia de 2ª geração — secretagogo de insulina", grupo:"antidiabetico",
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
{id:"med-gliclazida", contexto:["pa","ubs"], classe:"Sulfonilureia de 2ª geração — formulação MR (modified release)", grupo:"antidiabetico",
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
{id:"med-insulina-degludeca", contexto:["pa","ubs"], classe:"Insulina análoga BASAL de ultra-longa ação", grupo:"antidiabetico",
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
{id:"med-insulina-glargina", contexto:["pa","ubs"], classe:"Insulina análoga BASAL de longa ação — U100/U300", grupo:"antidiabetico",
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
{id:"med-insulina-lispro", contexto:["pa","ubs"], classe:"Insulina análoga PRANDIAL de ação ultrarrápida", grupo:"antidiabetico",
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
{id:"med-liraglutida", contexto:["pa","ubs"], classe:"Agonista GLP-1 — incretínico", grupo:"antidiabetico",
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
{id:"med-metformina", contexto:["pa","ubs"], classe:"Biguanida — sensibilizador insulínico hepático", grupo:"antidiabetico",
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
{id:"med-pioglitazona", contexto:["pa","ubs"], classe:"Tiazolidinediona (TZD) — sensibilizador insulínico PPAR-γ", grupo:"antidiabetico",
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
{id:"med-semaglutida", contexto:["pa","ubs"], classe:"Agonista do receptor GLP-1 — incretínico", grupo:"antidiabetico",
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
{id:"med-sitagliptina", contexto:["pa","ubs"], classe:"Inibidor da DPP-4 — incretínico", grupo:"antidiabetico",
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
{id:"med-tirzepatida", contexto:["pa","ubs"], classe:"Agonista dual GIP + GLP-1 — incretínico", grupo:"antidiabetico",
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

/* ============== ENDOCRINO (11) ============== */

{id:"med-calcitriol", contexto:["pa","ubs"], classe:"Vit D ativa (1,25-OH colecalciferol)", grupo:"endocrino",
nome:"Calcitriol (1,25-OH vit D)",
sin:["Rocaltrol","Calcijex"],
formas:["Cápsulas 0,25 mcg, 0,5 mcg — privada / SUS via CEAF (DRC)","Ampola IV 1 mcg/mL (uso em diálise)"],
resumo:"FORMA ATIVA da vit D — pula a conversão hepática + renal. Indicação ESPECÍFICA: DRC AVANÇADA (TFG <30) com hiperparatireoidismo secundário, hipoparatireoidismo. NÃO usar em deficiência simples — colecalciferol é a escolha. Início rápido (4-8h), meia-vida CURTA (4-6h).",
dose_rapida:"0,25-1 mcg VO 1×/d em DRC avançada",

doses:[
{ind:"DRC G4-G5 com hiperparatireoidismo secundário", dose:"INICIAR 0,25 mcg VO 1×/d, titular conforme PTH e Ca", obs:"Indicação especializada. Atualmente alternativas como PARICALCITOL (análogo seletivo) são preferidas em DRC pelo menor efeito hipercalcêmico."},
{ind:"Hipoparatireoidismo (pós-tireoidectomia, autoimune, congênito)", dose:"0,25-2 mcg VO 1-2×/d + cálcio", obs:"Endocrino acompanha. Meta cálcio levemente abaixo do normal para evitar hipercalciúria."},
{ind:"Diálise (suplementação peri-procedimento)", dose:"1-2 mcg IV ao final da sessão de HD 3×/sem", obs:""},
{ind:"Raquitismo vit D-resistente (tipo I — falha 1α-hidroxilase)", dose:"0,25-1 mcg/d", obs:"Doença rara, manejo especializado."},
],

ajustes:{
irc:"Apropriado para uso em DRC (não depende de hidroxilação renal — é a forma ativa).",
iht:"IH grave: cautela.",
idoso:"Iniciar dose menor, monitor Ca/creatinina.",
gestante:"Categoria C — usar se benefício > risco (hipoparatireoidismo).",
aleita:"Avaliar individualmente.",
ped:"Hipoparatireoidismo / raquitismo: doses específicas.",
},

mecanismo:"FORMA ATIVA (1α,25-di-hidroxivitamina D3) — ação direta no receptor VDR. NÃO precisa ser hidroxilada → eficaz em DRC e hipoparatireoidismo. Início rápido + meia-vida curta = MAIOR RISCO de hipercalcemia vs colecalciferol.",

farmacocin:{
absorc:"VO: rápida (pico 4-6h)",
distrib:"Ampla",
metab:"Hepático",
elimin:"Biliar",
meiavida:"4-6h (curta — vantagem em ajuste rápido)",
ligacao:">99%",
},

espectro:["DRC com hiperparatireoidismo secundário","Hipoparatireoidismo","Diálise","Raquitismo vit D-resistente tipo I","Pseudohipoparatireoidismo"],

interacoes:[
{droga:"Diuréticos tiazídicos", efeito:"↑ hipercalcemia — monitor."},
{droga:"Digoxina", efeito:"Hipercalcemia potencializa toxicidade."},
{droga:"Antiácidos com magnésio", efeito:"Hipermagnesemia em DRC — evitar combinação prolongada."},
{droga:"Cálcio (suplementação)", efeito:"Sinergismo — risco de hipercalcemia em sobredosagem combinada."},
{droga:"Indutores CYP (fenitoína, carbamazepina, rifampicina)", efeito:"↓ calcitriol — necessita dose maior."},
],

efeitos:[
{tipo:"comum", item:"Hipercalcemia leve — depende da dose"},
{tipo:"sério", item:"⚠ HIPERCALCEMIA (mais frequente vs colecalciferol — início rápido). Calcificação metastática (vascular, tecidos moles) em sobredosagem prolongada. ↑ PRODUTO Ca×P em DRC"},
{tipo:"raro", item:"Reação alérgica (rara)"},
],

alertas:[
{nivel:"crit", txt:"HIPERCALCEMIA: monitorar Ca + Ca×P em DRC. Suspender se Ca >10,5 ou Ca×P >55. Sintomas: poliúria, confusão, IRA, arritmia."},
{nivel:"warn", txt:"⚠ INDICAÇÃO ESPECÍFICA — não usar em DEFICIÊNCIA SIMPLES de vit D (colecalciferol é a escolha). Calcitriol é para DRC, hipoparatireoidismo."},
{nivel:"warn", txt:"MAIS PROPENSO À HIPERCALCEMIA que colecalciferol — início rápido + meia-vida curta. Monitor mais frequente."},
{nivel:"warn", txt:"EM DRC: PARICALCITOL (análogo seletivo) é alternativa MENOS hipercalcêmica — preferido em algumas situações."},
{nivel:"info", txt:"NÃO REFLETE em dosagem de 25-OH vit D — não monitorar por essa via."},
],

preparo:"VO cápsula, com ou sem alimento. IV: lento.",
monitor:"Cálcio sérico SEMANAL/QUINZENAL ao titular, depois mensal. PTH, fósforo, função renal. Ca×P em DRC.",
diretriz:"KDIGO MBD 2017+update. SBN. Endocrine Society.",
fluxo:null, calcs:[],
},
{id:"med-cianocobalamina", contexto:["pa","ubs"], classe:"Vitamina B12 — cobalamina sintética", grupo:"endocrino",
nome:"Cianocobalamina (Vit B12)",
sin:["B12","Cobalamina","Citoneurim B12","Tridose B12","Cobaltavit"],
formas:["Ampola IM 1.000 mcg/mL — SUS/REMUME (1.000 mcg)","Comprimidos 250 mcg, 500 mcg, 1.000 mcg","Sublingual 1.000 mcg","Combinações com B1+B6 (Citoneurim — uso restrito, evitar excesso de B6)"],
resumo:"Tratamento da deficiência de B12. PADRÃO BRASILEIRO. Via IM em deficiência grave/neurológica; VO ALTA DOSE é eficaz em maioria dos casos (mesmo anemia perniciosa). Em SUS, ampola IM é padrão.",
dose_rapida:"1.000 mcg IM 1×/d × 7d → 1×/sem × 4 sem → 1×/mês (vitalício em perniciosa)",

doses:[
{ind:"Anemia megaloblástica com sintomas neurológicos / deficiência grave — ATAQUE", dose:"1.000 mcg IM 1×/dia × 7 dias", obs:"Pode ser feito em UBS por enfermagem. Reservar IM para deficiência grave ou neurológica."},
{ind:"Continuação da fase de ataque", dose:"1.000 mcg IM 1×/semana × 4 semanas", obs:""},
{ind:"Manutenção (anemia perniciosa, gastrite atrófica, pós-bariátrica)", dose:"1.000 mcg IM 1×/MÊS VITALÍCIO", obs:"Doença autoimune VITALÍCIA — paciente entende necessidade contínua."},
{ind:"VO em alta dose — ALTERNATIVA EFICAZ (mesmo em anemia perniciosa)", dose:"Cianocobalamina 1.000-2.000 mcg VO ou sublingual 1×/d", obs:"Cochrane confirma não-inferioridade vs IM. Absorção passiva ~1% — mesmo sem fator intrínseco, 1.000 mcg/d garante absorção de ~10 mcg/d (suficiente)."},
{ind:"Esquema simplificado (deficiência sem neurológico grave)", dose:"1.000 mcg IM cada 1-3 dias × 6-7 doses → 1.000 mcg IM 1×/mês", obs:""},
{ind:"Profilaxia em veganos / vegetarianos estritos", dose:"1.000 mcg VO 1-2×/SEMANA OU 10-25 mcg/d", obs:"Suplementação preventiva. Veganismo SEM B12 = deficiência inevitável."},
{ind:"Profilaxia pós-bariátrica", dose:"1.000 mcg IM 1×/mês OU 350-1.000 mcg VO/d", obs:"Vitalício."},
{ind:"Profilaxia em uso crônico de IBP / metformina", dose:"Avaliar dosagem anual. Repor se baixa: 1.000 mcg VO/d", obs:"Não é profilaxia universal — avaliar caso a caso."},
{ind:"Gestante / lactante com deficiência", dose:"Igual ao adulto — tratar agressivamente", obs:"Déficit fetal causa atraso neurodesenvolvimento + DTN."},
{ind:"Lactente sintomático (mãe vegana sem suplementação)", dose:"Encaminhar pediatria — doses específicas + correção materna", obs:""},
{ind:"Pediatria — anemia megaloblástica", dose:"50-100 mcg IM 1×/dia × 1-2 sem → semanal", obs:""},
],

ajustes:{
irc:"Sem ajuste. Alguns guidelines preferem hidroxicobalamina em IRC.",
iht:"Sem ajuste.",
idoso:"Sem ajuste. AVALIAR B12 em demência, neuropatia, anemia.",
gestante:"Compatível. Tratar deficiência agressivamente.",
aleita:"Compatível.",
ped:"Dose menor (50-100 mcg IM).",
},

mecanismo:"Cofator de DUAS enzimas: (1) METIONINA SINTASE (converte homocisteína → metionina → SAM — síntese de mielina + DNA); (2) METIL-MALONIL-CoA MUTASE (catabolismo de ácidos graxos ímpares). Deficiência → ↑ MMA + ↑ homocisteína + síntese de DNA deficiente (megaloblastose) + desmielinização (neuropatia).",

farmacocin:{
absorc:"IM: 100%. VO ALTA DOSE: ~1% por difusão passiva (suficiente em 1.000-2.000 mcg/d). VO normal precisa de FATOR INTRÍNSECO (FI) gástrico — falta em anemia perniciosa.",
distrib:"Fígado (depósito principal — reservas duram 3-5 ANOS)",
metab:"Convertida em metilcobalamina e adenosilcobalamina",
elimin:"Biliar (recirculação êntero-hepática)",
meiavida:"Plasma curto, depósito hepático LONGO",
ligacao:"Haptocorrina + transcobalamina II (forma ativa, holotranscobalamina)",
},

espectro:["Anemia megaloblástica","Anemia perniciosa","Neuropatia por def B12","Profilaxia em vegano / pós-bariátrica","Suplementação em uso crônico IBP / metformina","Deficiência por má absorção","Síndrome de Imerslund-Gräsbeck"],

interacoes:[
{droga:"Cloranfenicol", efeito:"Pode reduzir resposta hematológica à B12 (raro)."},
{droga:"IBP, metformina (uso crônico)", efeito:"REDUZEM ABSORÇÃO — são CAUSA frequente de deficiência (não interação direta)."},
{droga:"Antiácidos, H2-bloqueadores", efeito:"↓ absorção (necessita ácido para liberar B12 da proteína)."},
{droga:"Ácido fólico em ALTA DOSE", efeito:"⚠ Pode 'corrigir' anemia mas PIORAR neuropatia em def B12 não diagnosticada. Investigar B12 antes de tratar folato."},
],

efeitos:[
{tipo:"comum", item:"BEM TOLERADO. IM: dor local, eritema. VO: raramente diarreia"},
{tipo:"sério", item:"HIPOCALEMIA no início do tratamento (consumo K+ por hematopoiese intensa) — monitor + repor"},
{tipo:"raro", item:"Reação alérgica (rara, geralmente ao excipiente em IM), acne, exantema, rebote (no tratamento de anemia grave)"},
],

alertas:[
{nivel:"crit", txt:"⚠ NÃO TRATAR APENAS FOLATO em paciente com B12 não dosada — folato 'corrige' anemia mas PIORA neuropatia em def B12. Sempre dosar B12 antes."},
{nivel:"warn", txt:"VO EM ALTA DOSE (1.000-2.000 mcg/d) é EFICAZ em maioria dos casos, INCLUSIVE anemia perniciosa (absorção passiva ~1%). Cochrane confirma não-inferioridade vs IM. PREFERIR IM apenas em: (1) sintomas neurológicos graves; (2) deficiência grave inicial (1-2 sem IM depois VO); (3) má adesão; (4) má absorção severa não-perniciosa."},
{nivel:"warn", txt:"INVESTIGAR ETIOLOGIA antes de tratar — anemia perniciosa é VITALÍCIA + ↑ risco de CA gástrico (rastreio EDA periódica). Anti-FI, anti-células parietais."},
{nivel:"warn", txt:"INÍCIO DO TRATAMENTO: HIPOCALEMIA por consumo K+ (hematopoiese intensa). Monitor + repor K+ se queda."},
{nivel:"warn", txt:"NEUROPATIA POR B12: tratamento precoce é CRÍTICO — danos prolongados (>6 meses) podem ser IRREVERSÍVEIS. Resposta neurológica pode demorar 6-12 meses (parcial)."},
{nivel:"warn", txt:"VEGANOS / VEGETARIANOS estritos: profilaxia OBRIGATÓRIA. 1.000 mcg VO 1-2×/sem ou 10-25 mcg/d. Especial atenção em gestação e lactação (risco fetal/neonatal)."},
{nivel:"info", txt:"RESPOSTA HEMATOLÓGICA: reticulocitose 5-7 dias, Hb normaliza 4-8 sem, VCM normaliza 4-8 sem."},
{nivel:"info", txt:"HIDROXICOBALAMINA é forma preferida em outros países (meia-vida mais longa) — no Brasil cianocobalamina é padrão por custo e disponibilidade."},
{nivel:"info", txt:"COMBINAÇÕES B1+B6+B12 (Citoneurim): cuidado com excesso CRÔNICO de B6 — neuropatia paradoxal por B6 em uso prolongado >100 mg/d. Preferir B12 isolada se possível."},
],

preparo:"IM: aplicar no glúteo / deltoide. VO: comprimido ou sublingual, qualquer hora.",
monitor:"Hemograma + reticulócitos 5-7 dias após início. B12 + hemograma 1-3 meses depois. Em anemia perniciosa: anual.",
diretriz:"BSH 2014. Cochrane oral vs IM. AAFP. SBPM.",
fluxo:null, calcs:[],
},
{id:"med-colecalciferol", contexto:["pa","ubs"], classe:"Vitamina D3 (forma natural, animal)", grupo:"endocrino",
nome:"Colecalciferol (Vit D3)",
sin:["DePura","Adoxy","Iruxol","D3","Addera D3"],
formas:["Cápsulas / drágeas 1.000 UI, 2.000 UI, 7.000 UI, 50.000 UI","Solução oral 200 UI/gota; 2000 UI/mL","SUS REMUME variável — algumas unidades têm colecalciferol 50.000 UI"],
resumo:"Vitamina D3 = forma natural (vs ergocalciferol/D2 = vegetal/sintética). PREFERIDA por meia-vida mais longa e maior eficácia. Pró-hormônio — ativado em fígado (25-OH) e rim (1,25-OH). Suplementação NÃO substitui exposição solar regular.",
dose_rapida:"1.000-2.000 UI VO 1×/d manutenção; 50.000 UI/sem × 8-12 sem em deficiência",

doses:[
{ind:"Deficiência <20 ng/mL (adulto) — ATAQUE", dose:"50.000 UI VO 1×/semana × 8-12 semanas (até 25-OH vit D >30 ng/mL)", obs:"Alternativa diária: 7.000-10.000 UI/d × 8-12 sem. Reavaliar nível 3 meses após início."},
{ind:"Manutenção pós-deficiência", dose:"1.000-2.000 UI VO 1×/d (ou 7.000-14.000 UI 1×/sem)", obs:"Continuar em grupos de risco (idoso, malabsorção, fototipo escuro, baixa exposição solar)."},
{ind:"Profilaxia em grupo de risco", dose:"1.000-2.000 UI VO 1×/d", obs:""},
{ind:"Idoso ≥65a — prevenção quedas/fraturas", dose:"800-1.000 UI VO 1×/d + cálcio se ingesta dietética insuficiente", obs:"Reduz quedas e fraturas em meta-análises (efeito modesto)."},
{ind:"Gestante / lactante", dose:"600-2.000 UI VO 1×/d", obs:"Em deficiência: dose maior. Lactante repõe ao bebê."},
{ind:"Lactente em AME (aleitamento materno exclusivo)", dose:"400 UI VO 1×/d até 12 meses (SBP, MS)", obs:"Leite materno tem pouca vit D. Após introdução alimentar + sol: individualizar."},
{ind:"Criança >1a em grupo de risco", dose:"600-1.000 UI/d", obs:""},
{ind:"Obeso (IMC ≥30)", dose:"Dose 2-3× a usual (vit D é sequestrada em tecido adiposo)", obs:""},
{ind:"Malabsorção (DII, celíaca, bariátrica)", dose:"6.000-10.000 UI/d ou 50.000 UI/sem", obs:"Considerar forma líquida / sublingual em má absorção severa."},
{ind:"Glicocorticoide crônico", dose:"800-2.000 UI/d + cálcio + considerar bisfosfonato", obs:"Profilaxia de osteoporose induzida por glicocorticoide."},
],

ajustes:{
irc:"TFG <30: conversão renal a 1,25-OH comprometida. Pode necessitar CALCITRIOL ou paricalcitol. Discutir com nefrologista.",
iht:"IH grave: conversão hepática a 25-OH comprometida — eficácia reduzida.",
idoso:"Mesma dose, monitor função renal e cálcio.",
gestante:"Compatível. Dose padrão 600-2.000 UI/d.",
aleita:"Compatível. Dose padrão da mãe + 400 UI/d ao bebê em AME.",
ped:"Lactente AME: 400 UI/d. Criança >1a: 600-1.000 UI se risco.",
},

mecanismo:"PRÓ-HORMÔNIO. Síntese cutânea por UVB OU ingestão oral. Convertido em FÍGADO a 25-hidroxivitamina D (25-OH = forma de RESERVA, dosada em sangue), depois em RIM a 1,25-OH (calcitriol — forma ATIVA, regulada por PTH). Atua em receptor nuclear (VDR) — regula absorção intestinal de Ca + reabsorção renal de Ca + remodelação óssea + imunidade.",

farmacocin:{
absorc:"VO: 50-80%, melhora COM REFEIÇÃO GORDUROSA (lipofílica)",
distrib:"Tecido adiposo (depósito principal — meia-vida muito longa)",
metab:"Hepático (25-OH) + Renal (1,25-OH)",
elimin:"Biliar/fezes (renal mínimo)",
meiavida:"15-25 dias (forma circulante) — depósitos em tecido adiposo duram meses",
ligacao:">99% (DBP, albumina)",
},

espectro:["Deficiência de vit D","Profilaxia em grupos de risco","Osteoporose (combinado com cálcio + outros)","Raquitismo / osteomalácia","Hipoparatireoidismo","Hiperparatireoidismo secundário","Pré-bariátrica e pós-bariátrica","Pediatria — AME"],

interacoes:[
{droga:"Anticonvulsivantes (fenitoína, fenobarbital, carbamazepina)", efeito:"Induzem CYP → ↑ metabolismo de vit D → ↓ níveis. Necessita dose maior em uso crônico."},
{droga:"Rifampicina, isoniazida", efeito:"Indutores hepáticos — reduzem vit D ativa."},
{droga:"Glicocorticoides", efeito:"Reduzem absorção intestinal de cálcio e aceleram metabolismo de vit D."},
{droga:"Orlistat, colestiramina", efeito:"↓ absorção de vit D (lipofílica) — separar."},
{droga:"Diuréticos tiazídicos + cálcio + vit D", efeito:"Risco de HIPERCALCEMIA — monitor Ca."},
{droga:"Digoxina", efeito:"Hipercalcemia por vit D potencializa toxicidade da digoxina."},
],

efeitos:[
{tipo:"comum", item:"BEM TOLERADO em doses terapêuticas — raramente náusea, constipação"},
{tipo:"sério", item:"⚠ TOXICIDADE (raríssima, doses >40.000 UI/d crônicas): HIPERCALCEMIA — poliúria, polidipsia, fadiga, náusea, constipação, confusão, IRA, calcificação metastática, arritmia"},
{tipo:"raro", item:"Alergia (excipientes)"},
],

alertas:[
{nivel:"crit", txt:"TOXICIDADE: rara mas existe. Quadro de HIPERCALCEMIA — suspender + hidratação + manejar hiperCa. Meia-vida longa → normalização demora SEMANAS A MESES."},
{nivel:"warn", txt:"⚠ NÃO SUPLEMENTAR ROTINEIRAMENTE em pessoas saudáveis sem deficiência — VITAL trial 2019 não mostrou benefício CV, oncológico ou em depressão."},
{nivel:"warn", txt:"PREFERIR D3 (colecalciferol) sobre D2 (ergocalciferol) — meia-vida mais longa, eficácia comprovadamente maior em meta-análises."},
{nivel:"warn", txt:"OBESIDADE: vit D sequestrada em tecido adiposo — necessita doses 2-3× maiores para atingir mesmo nível sérico."},
{nivel:"warn", txt:"DRC TFG <30: conversão renal de 25-OH a 1,25-OH comprometida — colecalciferol pode não ser suficiente. Considerar CALCITRIOL ou paricalcitol (decisão do nefrologista)."},
{nivel:"warn", txt:"ANTICONVULSIVANTES + colecalciferol: indutores hepáticos reduzem níveis. Necessita dose maior."},
{nivel:"info", txt:"TOMAR COM REFEIÇÃO GORDUROSA — melhora absorção (lipofílica)."},
{nivel:"info", txt:"REAVALIAR 25-OH vit D 3 MESES após início. Sem necessidade de repetição rotineira em manutenção."},
],

preparo:"VO cápsula / drágea / solução, com refeição (gordura aumenta absorção).",
monitor:"25-OH vit D 3 meses após início. Cálcio + creatinina basal e periodicamente.",
diretriz:"Endocrine Society 2024. SBEM. IOM. SBP. VITAL trial 2019.",
fluxo:null, calcs:[],
},
{id:"med-furosemida", contexto:["pa","ubs"], classe:"Diurético de alça", grupo:"endocrino",
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
{id:"med-hidrocortisona", contexto:["pa","ubs"], classe:"Corticoide — glicocorticoide", grupo:"endocrino",
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
{id:"med-insulina-r", contexto:["pa","ubs"], classe:"Hormônio — Antihiperglicemiante", grupo:"endocrino",
nome:"Insulina Regular (Humana)",
sin:["Humulin R","Novolin R","Regular","R","Insulina ação rápida"],
formas:[
  "Frasco-ampola 100 UI/mL × 10 mL (1.000 UI)",
  "Refil/caneta 100 UI/mL × 3 mL",
],
resumo:"Única insulina IV em emergência. Padrão para CAD, EHH, hipercalemia. Início rápido SC (~30 min) mas pico tardio (2-4h) → não substitui rapida análoga em pré-prandial.",
dose_rapida:"CAD/EHH: 0,1 U/kg/h IV BIC (sem bolus, ADA 2024). HIPERCALEMIA: 10 UI IV + Glicose 50% 100 mL.",

doses:[
  {ind:"CAD/EHH — BIC IV", dose:"0,1 U/kg/h IV BIC SEM bolus rotineiro (ADA 2024)", obs:"Apenas após K confirmado ≥3,3. Diluir 50 UI em 250 mL SF = 0,2 UI/mL. Alvo: ↓ glicemia 50-75 mg/dL/h."},
  {ind:"Hipercalemia — translocação", dose:"10 UI IV + Glicose 50% 100 mL IV em 15-30 min", obs:"Reduz K em 0,5-1,2 mEq/L em 30-60 min. Monitorar HGT 1h e 2h depois (hipoglicemia tardia comum)."},
  {ind:"Esquema correção SC pré-prandial", dose:"Cálculo individual — varia conforme glicemia + sensibilidade", obs:"Exemplo: 1 UI para cada 50 mg/dL acima do alvo. Aplicar 30 min ANTES da refeição (não imediatamente)."},
  {ind:"Transição BIC IV → SC em CAD/EHH", dose:"Calcular requerimento das últimas 6h × 4 = dose diária", obs:"Aplicar 1ª SC 1-2h ANTES de suspender BIC (overlap obrigatório). Esquema basal + bolus."},
  {ind:"Hospitalar — esquema correção", dose:"Glicemia 150-200: 2 UI / 200-250: 4 UI / 250-300: 6 UI / >300: 8 UI", obs:"Apenas como suplementação ao esquema basal — NÃO terapia única (mortalidade RABBIT-2 trial)."},
  {ind:"Pediatria CAD", dose:"0,05-0,1 U/kg/h IV BIC", obs:"Dose mais baixa (0,05) para reduzir edema cerebral. NÃO bolus."},
],

ajustes:{
  irc:"Acúmulo — reduzir dose 25-50% em ClCr <50. Maior risco de hipoglicemia. Insulina é PRIMARILY renal-cleared.",
  iht:"Cirrose: ↓gliconeogênese hepática → maior risco hipoglicemia. Doses menores. Monitorização frequente.",
  idoso:"Iniciar 50% da dose padrão. Hipoglicemia em idoso = quedas + IAM + óbito. Alvo glicêmico mais liberal (HbA1c 7,5-8%).",
  gestante:"Categoria B — segura. DM gestacional: 1ª linha (oral CI em muitas). Pico de necessidade no 3º trimestre (resistência por hormônios placentários).",
  aleita:"Compatível. Insulina não absorvida VO pelo lactente.",
  ped:"Doses muito menores. Calcular sempre por kg. Risco de hipoglicemia + edema cerebral em CAD.",
},

mecanismo:"Hormônio peptídico (51 aminoácidos). Liga-se ao receptor de insulina (tirosino-quinase) → cascata fosforilação → translocação de GLUT-4 → ↑ captação de glicose no músculo e adipócitos. Inibe gliconeogênese e glicogenólise hepáticas. Promove síntese de glicogênio, lipídios, proteínas. Estimula bomba Na/K (translocação K intracelular).",

farmacocin:{
  absorc:"SC: variável (~70% biodisponibilidade). Início 30-60 min, pico 2-4h, duração 5-8h. Absorção mais rápida no abdome > braço > coxa > glúteo. IV: imediato.",
  distrib:"Volume distribuição ~0,15 L/kg (espaço extracelular).",
  metab:"Hepático (60%) + renal (~30%). Degradação proteolítica.",
  elimin:"Renal e hepática. <2% excretada inalterada.",
  meiavida:"SC: ~1h (mas duração de ação 5-8h por absorção lenta). IV: 5-7 min (a hipoglicemia pode durar mais por efeito intracelular).",
  ligacao:"Mínima (peptídeo livre).",
},

interacoes:[
  {droga:"β-bloqueadores", efeito:"Mascaram sintomas adrenérgicos da hipoglicemia (tremor, taquicardia). Sudorese ainda ocorre. Atenção em DM em uso."},
  {droga:"IECA", efeito:"Potencializa efeito hipoglicemiante (mecanismo incerto)."},
  {droga:"Corticoides", efeito:"Antagonismo — necessita ↑ dose insulina em uso de corticoide. Reduzir insulina ao desmamar."},
  {droga:"Tiazídicos / loop diuréticos", efeito:"Hiperglicemia leve. Ajuste mínimo."},
  {droga:"Octreotide / análogos somatostatina", efeito:"Inibe insulina endógena — variável."},
],

efeitos:[
  {tipo:"comum", item:"HIPOGLICEMIA — efeito adverso mais importante. Lipohipertrofia local (rotacionar locais SC). Ganho de peso."},
  {tipo:"sério", item:"Hipoglicemia GRAVE (convulsão, coma, óbito). Edema cerebral em correção rápida de CAD pediátrica. Hipocalemia (translocação)."},
  {tipo:"raro", item:"Reação alérgica (raro com insulina humana, mais comum com bovina/suína histórica). Edema insulínico (retenção hídrica em início)."},
],

alertas:[
  {nivel:"crit", txt:"NUNCA iniciar insulina em CAD/EHH antes de confirmar K sérico ≥3,3. Insulina causa shift intracelular de K → hipocalemia → arritmia fatal. Se K<3,3: repor K primeiro + esperar."},
  {nivel:"crit", txt:"HIPOGLICEMIA pode ser fatal. Glicemia <70: glicose 50% 50 mL IV (após tiamina se etilista) OU 15g VO se consciente. Reavaliar 15 min."},
  {nivel:"warn", txt:"CAD pediátrica: ↓ rápida de glicemia (>100 mg/dL/h) + reposição agressiva de fluidos = risco edema cerebral. Manter ↓ 50 mg/dL/h. Adicionar SG quando glicemia <250-300 (mantém insulina BIC)."},
  {nivel:"warn", txt:"INSULINA EV adsorve em plástico (perda 20-30% nos primeiros mL). Saturar circuito com 50 mL antes de iniciar."},
  {nivel:"info", txt:"HIPERCALEMIA: monitorar HGT 1h e 2h após (hipoglicemia tardia comum, especialmente em IRC/idoso/desnutrido). Glicose 50% padrão deve acompanhar."},
],

preparo:"DILUIÇÃO BIC (CAD/EHH): 50 UI em 250 mL SF 0,9% = 0,2 UI/mL. Saturar o circuito com 50 mL antes de conectar ao paciente (perda por adsorção). Trocar bolsa cada 24h. Para 70kg: 0,1 U/kg/h = 7 UI/h = 35 mL/h. SC: aspirar pela ponta, NÃO agitar, rotacionar locais.",

monitor:"GLICEMIA CAPILAR 1/1h em BIC IV (alvo 150-200 em CAD, 140-180 em UTI geral). Eletrólitos 2-4/4h (K!). Diurese (CAD). pH e cetonas em CAD até resolução. Em SC: HGT pré-refeições + 22h.",

diretriz:"ADA Standards 2024. SBD Brasileira 2024. ISPAD Pediátrica 2022.",
fluxo:null,
calcs:[],
},
{id:"med-iodeto", contexto:["pa","ubs"], classe:"Iodeto (Lugol, iodeto de potássio) — inibe liberação T4", grupo:"endocrino",
nome:"Iodeto (Lugol / Iodeto de Potássio)",
sin:["Lugol solução","SSKI (iodeto de potássio saturado)","Iosat (proteção radioativa)"],
formas:["Lugol 5%: 1 gota = ~8 mg I (solução iodo-iodada)","SSKI: 1 gota = 50 mg KI","Comprimidos 130 mg KI (proteção radiativa) — não comerciais BR"],
resumo:"Iodeto em ALTAS DOSES paradoxalmente INIBE liberação de hormônio tireoidiano (efeito Wolff-Chaikoff). Uso em CRISE TIREOIDIANA + preparação pré-cirurgia tireoide (Graves). Sempre 1h APÓS anti-tireoidiano.",
dose_rapida:"Lugol 8 gotas VO 6/6h (crise) | 5-7 gotas 8/8h × 7-10 dias pré-cirurgia",

doses:[
{ind:"CRISE TIREOIDIANA (após PTU/metimazol)", dose:"Lugol 8-10 gotas VO/SNG 6/6h OU SSKI 5 gotas 6/6h", obs:"DAR APENAS 1H APÓS o anti-tireoidiano (PTU/metimazol). Se dar antes: paradoxalmente ↑ síntese hormonal (substrato para TPO). Após bloqueio da TPO, iodeto BLOQUEIA liberação."},
{ind:"Preparação pré-tireoidectomia em Graves", dose:"Lugol 5-7 gotas VO 8/8h × 7-10 dias pré-cirurgia", obs:"Reduz vascularização da tireoide → menor sangramento cirúrgico."},
{ind:"Proteção contra iodo radioativo (acidente nuclear/Chernobyl)", dose:"KI 130 mg/d (adulto) — bloqueia captação de I-131 pela tireoide", obs:"Apenas em acidente nuclear documentado. Iniciar pré-exposição se possível."},
{ind:"Hipertireoidismo neonatal transitório (RN de mãe Graves)", dose:"Lugol 1 gota 8/8h", obs:"Endocrinopediatria — uso restrito."},
],

ajustes:{
irc:"Cautela — eliminação renal.",
iht:"Cautela.",
idoso:"Cautela com risco cardíaco.",
gestante:"Categoria D — risco bócio fetal. APENAS em casos extremos (não-evitáveis).",
aleita:"Categoria D — pode causar hipotireoidismo neonatal.",
ped:"RN/lactente em casos selecionados.",
},

mecanismo:"Em altas doses, iodeto provoca: (1) EFEITO WOLFF-CHAICKOFF — bloqueia organificação do iodo e liberação hormonal; (2) bloqueia liberação por desestabilização do colóide tireoidiano; (3) ↓ vascularização tireoidiana (efeito Plummer — útil pré-cirurgia). Efeito AGUDO mas TRANSITÓRIO (escape em 7-14 dias — não tratamento crônico).",

farmacocin:{
absorc:"VO: completa",
distrib:"Tireoide concentra (efeito da bomba Na/I)",
metab:"—",
elimin:"Renal (urinária)",
meiavida:"~1 dia (tireoide retém)",
ligacao:"—",
},

espectro:["Crise tireoidiana — adjuvante","Preparação pré-tireoidectomia (Graves)","Proteção radiotiva"],

interacoes:[
{droga:"Amiodarona (contém iodo)", efeito:"Sobrecarga de iodo — pode desencadear tireotoxicose paradoxal ou hipotireoidismo."},
{droga:"Lítio", efeito:"Sinergia em bloqueio liberação tireoidiana."},
],

efeitos:[
{tipo:"comum", item:"Gosto metálico, sialorreia, dispepsia, rinorreia, conjuntivite (iodismo)"},
{tipo:"sério", item:"Hipertireoidismo PARADOXAL (Jod-Basedow — em paciente com bócio multinodular sem bloqueio TPO prévio), reação alérgica grave (raríssima — alergia a iodo)"},
{tipo:"raro", item:"Bócio fetal (em uso prolongado materno)"},
],

alertas:[
{nivel:"crit", txt:"NÃO USAR ANTES de PTU/Metimazol — em paciente com TPO funcionante, iodeto serve de SUBSTRATO para síntese ↑ paradoxal (Jod-Basedow). USAR 1H APÓS anti-tireoidiano."},
{nivel:"crit", txt:"USO BREVE APENAS — efeito ESCAPA em 7-14 dias. NÃO usar como tratamento crônico de hipertireoidismo."},
{nivel:"warn", txt:"GESTAÇÃO: risco bócio/hipotireoidismo fetal. Categoria D — uso apenas em risco materno extremo."},
{nivel:"warn", txt:"ALERGIA A IODO: contra-indica uso. Diferenciar alergia a iodo (ao próprio elemento — raríssima) vs alergia a contraste iodado (ao composto — mais comum)."},
{nivel:"info", txt:"LUGOL vs SSKI: ambos eficazes. Lugol (5% iodo + 10% KI) — mais usado historicamente. SSKI mais concentrado em K."},
],

preparo:"VO em ÁGUA OU SUCO (mascara sabor). 1H APÓS anti-tireoidiano em crise.",
monitor:"Sintomas, TSH/T4L em uso prolongado (>2 sem).",
diretriz:"ATA 2016 (Hyperthyroidism — Storm). SBEM 2025.",
fluxo:null, calcs:[],
},
{id:"med-levotiroxina", contexto:["pa","ubs"], classe:"Hormônio tireoidiano sintético (T4)", grupo:"endocrino",
nome:"Levotiroxina (T4)",
sin:["Puran T4","Synthroid","Euthyrox","Levoid","Tirotil"],
formas:["Comprimidos 12,5 / 25 / 37,5 / 50 / 62,5 / 75 / 88 / 100 / 112 / 125 / 137 / 150 / 175 / 200 mcg — SUS/REMUME (várias apresentações)"],
resumo:"T4 sintético — 1ª linha em HIPOTIREOIDISMO. Posologia 1×/d EM JEJUM. Absorção crítica (comida e várias drogas reduzem). Margem terapêutica estreita: subdose = persistência sintomática; sobredose = sintomas tireotoxicose, FA, osteoporose.",
dose_rapida:"1,6 mcg/kg/d VO 1×/d (jejum 30-60 min antes do café)",

doses:[
{ind:"Hipotireoidismo PRIMÁRIO em ADULTO SAUDÁVEL (<60a)", dose:"1,6 mcg/kg/d (peso ideal) VO 1×/d (manhã, jejum); pode iniciar dose plena", obs:"Ex 70 kg → 100-112 mcg/d. Reavaliar TSH em 6-8 sem."},
{ind:"Hipotireoidismo em IDOSO ≥60a ou CARDIOPATA", dose:"25-50 mcg/d inicial; titular 25 mcg cada 4-6 sem", obs:"Início baixo evita precipitar angina/arritmia."},
{ind:"Hipotireoidismo SEVERO em coronariopata", dose:"12,5-25 mcg/d inicial", obs:"Cardiologia: balancear risco isquêmico vs hipotireoidismo."},
{ind:"Hipotireoidismo na GESTAÇÃO", dose:"Aumentar 25-30% (2 comp extra/sem) assim que confirmar gravidez", obs:"Alvo TSH <2,5 (1º trim), <3,0 (2º/3º). Reavaliar cada 4 sem até 20 sem."},
{ind:"Hipotireoidismo CONGÊNITO (RN)", dose:"10-15 mcg/kg/d (dose alta — neurodesenvolvimento)", obs:"Iniciar antes de 2-3 sem de vida após triagem neonatal positiva."},
{ind:"Coma MIXEDEMATOSO", dose:"200-400 mcg IV bolus, depois 50-100 mcg/d IV", obs:"UTI. Hidrocortisona ANTES da levotiroxina (risco crise adrenal)."},
{ind:"Pós-CA TIREOIDE (terapia supressiva)", dose:"Variável conforme risco: dose plena + supressiva (TSH <0,1 alto risco, 0,1-0,5 intermediário)", obs:"Acompanhamento endocrinologia."},
],

ajustes:{
irc:"Sem ajuste por TFG. Eliminação não renal.",
iht:"Sem ajuste rotineiro.",
idoso:"Iniciar 25-50 mcg. Alvo TSH 4-6 (evitar sobretratamento → FA, osteoporose).",
gestante:"AUMENTAR dose 25-30% assim que confirmar gestação. Alvo TSH <2,5 (1º trim).",
aleita:"Compatível (passa pouco no leite).",
ped:"Hipotireoidismo congênito: 10-15 mcg/kg/d. Criança >1a: 4-6 mcg/kg/d. Adolescente: 2-3 mcg/kg/d.",
},

mecanismo:"T4 sintético idêntico ao endógeno. Convertido perifericamente em T3 (forma ativa) — assim mantém balanço fisiológico. NÃO usar T3 (liotironina) isoladamente em rotina — picos não-fisiológicos. Reposição é vital para todo metabolismo.",

farmacocin:{
absorc:"VO: 60-80% (variável; reduzida por comida, café, ferro, cálcio, antiácidos, IBP, fibras, soja)",
distrib:"Ampla, fortemente ligada à TBG",
metab:"Conversão periférica T4→T3 (deiodinases)",
elimin:"Bile/fezes",
meiavida:"7 dias (longa — permite 1×/d e tolerar 1-2 esquecimentos)",
ligacao:">99% (TBG, albumina)",
},

espectro:["Hipotireoidismo (qualquer causa)","Coma mixedematoso","Pós-CA tireoide (supressivo)","Bócio nodular (raramente, controverso)"],

interacoes:[
{droga:"Comida (especialmente café, soja, fibras)", efeito:"Reduz absorção 30-50%. Tomar EM JEJUM 30-60 min antes."},
{droga:"Cálcio, ferro, antiácidos, sucralfato, colestiramina", efeito:"Reduzem absorção (formação de quelatos). Separar 4h."},
{droga:"IBP (omeprazol)", efeito:"Reduz absorção (T4 precisa de ácido). Possível necessidade de ↑ dose."},
{droga:"Estrogênio (anticoncepcional/TRH)", efeito:"↑ TBG → ↑ necessidade de T4 (dosar TSH 6-8 sem após início)."},
{droga:"Rifampicina, fenitoína, carbamazepina, fenobarbital", efeito:"↑ metabolismo T4 → ↑ necessidade."},
{droga:"Sertralina, amiodarona", efeito:"Podem alterar necessidade (mecanismos diversos)."},
{droga:"Varfarina", efeito:"Hipertireoidismo ↑ catabolismo da varfarina (↑ INR durante reposição se hipertireoidiana iatrogênica)."},
],

efeitos:[
{tipo:"comum", item:"Em dose adequada: nenhum (idêntico ao endógeno). Em SOBREDOSE: sintomas de hipertireoidismo (taquicardia, tremor, ansiedade, perda peso, insônia, sudorese, intolerância calor)"},
{tipo:"sério", item:"SOBRETRATAMENTO CRÔNICO: FA (especialmente em idoso), OSTEOPOROSE (mulher pós-menopausa), angina/IAM em coronariopata"},
{tipo:"raro", item:"Reação alérgica ao excipiente (lactose), cefaleia em início, alopecia transitória (1º mês)"},
],

alertas:[
{nivel:"crit", txt:"ABSORÇÃO É CRÍTICA: tomar 30-60 min ANTES do café da manhã, COM ÁGUA, em JEJUM ESTRITO. Comida, café, suco, cálcio, ferro, antiácidos, IBP, fibras, soja REDUZEM significativamente. Separar 4h de outras drogas."},
{nivel:"crit", txt:"GESTAÇÃO: aumentar dose 25-30% (2 comprimidos extras/sem) assim que confirmar gestação. Hipotireoidismo materno não tratado = aborto, RCIU, prejuízo cognitivo fetal."},
{nivel:"crit", txt:"INICIAR EM CARDIOPATA: 12,5-25 mcg/d. Dose plena pode precipitar IAM/arritmia."},
{nivel:"warn", txt:"SOBRETRATAMENTO em IDOSO: alvo TSH 4-6 é aceitável. TSH <0,4 (sobreposse) → ↑ FA + osteoporose. REDUZIR dose."},
{nivel:"warn", txt:"COMA MIXEDEMATOSO: dar HIDROCORTISONA ANTES da levotiroxina (T4 acelera metabolismo do cortisol — risco crise adrenal aguda)."},
{nivel:"warn", txt:"TROCA DE MARCA: bioequivalência não é absoluta entre genéricos. Em paciente bem controlado: tentar manter mesma marca. Se trocar: reavaliar TSH 6-8 sem."},
{nivel:"info", txt:"T4/T3 COMBINADO (Tertroxin): não recomendado em rotina. Apenas em casos selecionados com mutação DIO2 documentada e sintomas persistentes."},
{nivel:"info", txt:"DOSE COMUM em adulto: 75-125 mcg/d. Idoso: 25-75 mcg/d. RN: 12,5-37,5 mcg/d."},
],

preparo:"VO comprimido, EM JEJUM 30-60 min antes do café, COM ÁGUA. Não com café/suco/leite.",
monitor:"TSH 6-8 sem após início/ajuste; após estável: anual. T4L em hipotireoidismo central.",
diretriz:"ATA 2014. ATA 2017 (gestação). SBEM 2025. Endocrine Society.",
fluxo:null, calcs:[],
},
{id:"med-metimazol", contexto:["pa","ubs"], classe:"Tionamida — anti-tireoidiano (inibidor TPO)", grupo:"endocrino",
nome:"Metimazol (Tapazol)",
sin:["Tapazol","Thyrozol","Methimazol"],
formas:["Comprimidos 5 mg, 10 mg, 20 mg — SUS/CEAF"],
resumo:"Tionamida — 1ª LINHA em hipertireoidismo (Graves, Plummer). Inibe síntese de T4/T3. Latência 4-8 sem (depleta hormônio estocado). NÃO usar no 1º trimestre da gestação (aplasia cutis fetal).",
dose_rapida:"15-30 mg VO 1×/d (hipertireoidismo moderado)",

doses:[
{ind:"Hipertireoidismo LEVE (T4L 1-1,5× LSN)", dose:"10-15 mg VO 1×/d", obs:"Reavaliar T4L em 4-6 sem."},
{ind:"Hipertireoidismo MODERADO (T4L 1,5-2× LSN)", dose:"20-30 mg VO 1×/d", obs:"Maioria dos casos. Dose única diária é tão eficaz quanto dividida."},
{ind:"Hipertireoidismo GRAVE (T4L >2-3× LSN)", dose:"30-40 mg/d em 2-3 tomadas", obs:"Considerar 60 mg/d em casos extremos. Dividir doses ≥40 mg/d."},
{ind:"Manutenção (após eutireoidismo)", dose:"5-15 mg/d 1×/d", obs:"Reduzir gradualmente conforme TSH/T4L."},
{ind:"GESTAÇÃO 2º/3º trimestre (após PTU no 1º)", dose:"5-30 mg/d", obs:"Trocar do PTU para metimazol no 2º trim (PTU → hepatotoxicidade)."},
{ind:"Pediatria", dose:"0,2-0,5 mg/kg/d divididos", obs:"Endocrinopediatria."},
],

ajustes:{
irc:"Sem ajuste rotineiro.",
iht:"IH grave: cautela.",
idoso:"Iniciar dose plena conforme severidade. Monitor para EA.",
gestante:"CONTRAINDICADO 1º TRIMESTRE (aplasia cutis fetal, aplasia coane, atresia esofágica). PERMITIDO 2º/3º trim. Dose mínima eficaz.",
aleita:"Compatível (passa pouco no leite). PTU também aceitável.",
ped:"0,2-0,5 mg/kg/d.",
},

mecanismo:"Inibe a tireoperoxidase (TPO) → bloqueia organificação do iodo + acoplamento de iodotirosinas → ↓ síntese de T4/T3. NÃO bloqueia liberação do hormônio estocado (latência 4-8 sem). Em altas doses, tem leve imunomodulação (pode ↓ TRAb).",

farmacocin:{
absorc:"VO: rápida (pico 1-2h)",
distrib:"Concentra na tireoide",
metab:"Hepático",
elimin:"Renal (metabólitos)",
meiavida:"6-8h (mas T½ TIREOIDIANA muito maior — permite dose única)",
ligacao:"Baixa",
},

espectro:["Hipertireoidismo (Graves, multinodular tóxico, adenoma) — 1ª linha","Preparação pré-cirurgia tireoide","Preparação pré-radioiodo (controverso)","Tireotoxicose induzida por amiodarona tipo 1"],

interacoes:[
{droga:"Varfarina", efeito:"Hipertireoidismo ↑ catabolismo varfarina → ao tratar, INR pode SUBIR (necessidade reduzida)."},
{droga:"Digoxina", efeito:"Hipertireoidismo ↑ depuração digoxina → ao tratar, dose pode SUBIR."},
{droga:"β-bloqueadores", efeito:"COMBINAÇÃO PADRÃO em hipertireoidismo sintomático (controle adrenérgico)."},
],

efeitos:[
{tipo:"comum", item:"Rash cutâneo (5-10% — geralmente leve, autolimitado), prurido, urticária, artralgia, dispepsia, alteração do paladar"},
{tipo:"sério", item:"AGRANULOCITOSE (0,2-0,5% — neutrófilos <500), HEPATITE COLESTÁTICA (1-5%), VASCULITE ANCA (raro, em uso prolongado), pancreatite, anemia aplástica"},
{tipo:"raro", item:"Síndrome lúpus-like, glomerulonefrite, hipoglicemia autoimune (raro)"},
],

alertas:[
{nivel:"crit", txt:"AGRANULOCITOSE: efeito raro mas GRAVE (0,2-0,5%). AVISAR PACIENTE: SE FEBRE SÚBITA + DOR DE GARGANTA → suspender + ir ao PS para hemograma URGENTE. Se neutrófilos <500: internar para isolamento + antibiótico empírico + G-CSF."},
{nivel:"crit", txt:"GESTAÇÃO 1º TRIMESTRE: CONTRAINDICADO — risco aplasia cutis fetal, aplasia coana, atresia esofágica. USAR PTU no 1º trim, depois trocar para metimazol no 2º trim."},
{nivel:"crit", txt:"HEPATITE COLESTÁTICA: 1-5% (menos que PTU). Vigilar icterícia + dor abdominal + ↑ TGO/TGP. Suspender se TGO/TGP >3× LSN."},
{nivel:"warn", txt:"REAÇÃO CUTÂNEA LEVE (rash, prurido): geralmente autolimitada — pode manter com anti-histamínico. Rash GRAVE/SSJ: suspender + considerar PTU."},
{nivel:"warn", txt:"LATÊNCIA 4-8 SEM para efeito pleno — combinar com β-BLOQ (controle sintomático imediato) é PADRÃO."},
{nivel:"warn", txt:"DURAÇÃO em GRAVES: 12-18 meses — tentar suspender. Probabilidade de remissão definitiva 30-50%."},
{nivel:"info", txt:"VASCULITE ANCA: raro mas descrito em uso prolongado (>1 ano). Investigar se sintomas (renais, pulmonares, cutâneos)."},
],

preparo:"VO comprimido, com ou sem alimento. Dose única diária é igualmente eficaz à dividida em doses moderadas.",
monitor:"Hemograma basal + se febre/sintomas (NÃO de rotina). TGO/TGP basal + 4 sem + 3 meses. TSH/T4L 4-6 sem após início, depois cada 2-3 meses. TRAb 6-12 meses (preditor de remissão).",
diretriz:"ATA 2016 (Hyperthyroidism). ATA 2017 (gestação). SBEM 2025.",
fluxo:null, calcs:[],
},
{id:"med-propiltiouracil", contexto:["pa","ubs"], classe:"Tionamida — anti-tireoidiano (inibidor TPO + bloqueio T4→T3 periférico)", grupo:"endocrino",
nome:"Propiltiouracil (PTU)",
sin:["Propil","Propycil"],
formas:["Comprimidos 100 mg — SUS/privada (menos disponível que metimazol)"],
resumo:"Tionamida alternativa. INDICAÇÕES ESPECÍFICAS: 1º TRIMESTRE de gestação, CRISE TIREOIDIANA, intolerância ao metimazol. Vantagem: bloqueia conversão T4→T3 periférica (útil em crise). FDA black box: hepatotoxicidade.",
dose_rapida:"100-150 mg VO 8/8h (hipertireoidismo) | 200-400 mg 4/4h (crise)",

doses:[
{ind:"Hipertireoidismo — INÍCIO (raro como 1ª linha)", dose:"100-150 mg VO 8/8h (300-450 mg/d)", obs:"Metimazol é preferível, EXCETO em casos específicos abaixo."},
{ind:"GESTAÇÃO 1º TRIMESTRE", dose:"100-200 mg 8/8h (mín eficaz)", obs:"Trocar para METIMAZOL no 2º trim (PTU → risco hepatotoxicidade fulminante)."},
{ind:"CRISE TIREOIDIANA — UTI", dose:"200-400 mg VO/SNG 4/4h", obs:"VANTAGEM em crise: bloqueia conversão T4→T3 periférica (efeito agudo). Combinar com iodeto 1h DEPOIS + propranolol + hidrocortisona."},
{ind:"Reação adversa LEVE ao metimazol (rash, alergia)", dose:"100-150 mg 8/8h", obs:"Se reação grave a uma tionamida: NÃO substituir por outra (cross-reativity ~40-50%) — considerar radioiodo/cirurgia."},
{ind:"Manutenção", dose:"50-150 mg/d divididos", obs:"Reduzir gradualmente."},
],

ajustes:{
irc:"Sem ajuste rotineiro.",
iht:"IH grave: CONTRAINDICADO (hepatotoxicidade adicional).",
idoso:"Iniciar dose ajustada por gravidade.",
gestante:"PERMITIDO 1º TRIMESTRE (alternativa ao metimazol que é teratogênico no 1º trim). Trocar para metimazol no 2º.",
aleita:"Compatível.",
ped:"NÃO RECOMENDADO em criança (hepatotoxicidade fatal descrita — FDA black box).",
},

mecanismo:"Inibe a TPO (igual metimazol) → bloqueia síntese de T4/T3. DIFERENÇA do metimazol: bloqueia também a DEIODINASE TIPO 1 → ↓ conversão T4→T3 periférica (útil em crise tireoidiana).",

farmacocin:{
absorc:"VO: rápida",
distrib:"Concentra na tireoide",
metab:"Hepático extenso",
elimin:"Renal",
meiavida:"~1-2h (curta — necessita 3-4×/d)",
ligacao:"~80%",
},

espectro:["Gestação 1º trimestre","Crise tireoidiana (vantagem do bloqueio T4→T3)","Intolerância LEVE ao metimazol","Tempestade tireoidiana em UTI"],

interacoes:[
{droga:"Varfarina", efeito:"Como metimazol — INR pode subir ao tratar."},
{droga:"β-bloqueadores", efeito:"COMBINAÇÃO padrão em hipertireoidismo sintomático."},
],

efeitos:[
{tipo:"comum", item:"Rash, prurido, artralgia, dispepsia (frequência similar metimazol)"},
{tipo:"sério", item:"HEPATOTOXICIDADE FULMINANTE (rara mas MORTAL — FDA black box, principalmente em criança), agranulocitose (0,2-0,5%, similar metimazol), VASCULITE ANCA-positiva (mais frequente que metimazol)"},
{tipo:"raro", item:"Aplasia medular, pancreatite, lúpus-like"},
],

alertas:[
{nivel:"crit", txt:"HEPATOTOXICIDADE FULMINANTE: rara mas FATAL — FDA black box. Especialmente em CRIANÇA (causa de transplante hepático). PREFERIR metimazol em adulto e criança. Exceções: 1º trim gestação e crise."},
{nivel:"crit", txt:"AGRANULOCITOSE: mesmo perfil do metimazol. Avisar paciente sobre febre + dor de garganta → hemograma urgente."},
{nivel:"crit", txt:"INDICAÇÕES NICHO: (1) gestação 1º trim; (2) crise tireoidiana (bloqueio T4→T3); (3) intolerância leve ao metimazol. FORA dessas: preferir metimazol."},
{nivel:"warn", txt:"POSOLOGIA 8/8h (inconveniente). Metimazol pode ser 1×/d em muitos pacientes."},
{nivel:"warn", txt:"VASCULITE ANCA-positiva: mais comum em PTU do que metimazol. Em uso prolongado: vigilância clínica."},
{nivel:"info", txt:"GESTAÇÃO: PTU no 1º trim → metimazol 2º/3º trim. Lactação: ambos compatíveis em dose baixa."},
],

preparo:"VO comprimido, 8/8h (3×/d). NÃO IV (não há formulação parenteral).",
monitor:"Hemograma se sintomas (NÃO rotina), TGO/TGP basal + 2-4 sem + 3 meses (mais rigoroso que metimazol). TSH/T4L 4-6 sem. ANCA se sintomas.",
diretriz:"ATA 2016. ATA 2017 (gestação). FDA Black Box.",
fluxo:null, calcs:[],
},
{id:"med-sulfato-mg", contexto:["pa","ubs"], classe:"Eletrólito + antiarrítmico + tocolítico + neuroprotetor", grupo:"endocrino",
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
);
