/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — PATOLOGIAS (BLOCO C)
   Deficiência de Vitamina D + Deficiência de Vitamina B12
   =========================================================== */

PATOLOGIAS.push(

/* ============== DEFICIÊNCIA DE VITAMINA D ============== */
{id:"deficiencia-vit-d", nome:"Deficiência de Vitamina D / Hipovitaminose D", sis:"endo", grav:"baixa",
cid:"E55", ciap:"T91",
sin:["Hipovitaminose D","Vit D baixa","Insuficiência de vit D","Deficiência de calciferol","Raquitismo (pediátrico)","Osteomalácia (adulto)"],

def:"Níveis baixos de 25-hidroxivitamina D séricos. Vit D é um pró-hormônio (não vitamina clássica) — síntese cutânea pela exposição UVB + dieta. Atua em homeostase de cálcio, mineralização óssea, imunidade. ⚠ Controverso: rastreamento populacional NÃO é recomendado.",

quadro:[
"ASSINTOMÁTICA na maioria — descoberta por dosagem (frequentemente DESNECESSÁRIA — P4)",
"DEFICIÊNCIA GRAVE / PROLONGADA: dor óssea/muscular, fraqueza muscular proximal, fadiga, ↑ risco de quedas e fraturas (idoso)",
"RAQUITISMO em criança: atraso de fechamento de fontanelas, deformidades ósseas (varus, valgus), atraso pôndero-estatural, hipocalcemia/convulsão",
"OSTEOMALÁCIA em adulto: dor óssea difusa, deformidades, fraturas patológicas",
"HIPOCALCEMIA secundária (raro, em deficiência grave + má absorção): tetania, parestesias, espasmo carpopedal, convulsão",
"⚠ MAIORIA dos pacientes com 'vit D baixa' é ASSINTOMÁTICA e não tem nenhuma das complicações acima",
],

diag:[
"⚠ NÃO RASTREAR ROTINEIRAMENTE — USPSTF, ACP, Endocrine Society 2024 desencorajam rastreamento populacional. Dosagem APENAS se INDICAÇÃO clínica",
"INDICAÇÕES de dosar 25-OH vit D: osteoporose, ≥2 fraturas frágeis, malabsorção (DII, doença celíaca, bariátrica), DRC G3+, hepatopatia crônica, uso prolongado de glicocorticoide/anticonvulsivante, hiperparatireoidismo, idoso institucionalizado, criança com sinais clínicos",
"PADRÃO: dosar 25-HIDROXIVITAMINA D total (NÃO 1,25-OH — esta é regulada por PTH e não reflete reservas)",
"CLASSIFICAÇÃO (controversa — varia por sociedade):",
"DEFICIÊNCIA: <20 ng/mL (50 nmol/L) — Endocrine Society / SBEM",
"INSUFICIÊNCIA: 20-30 ng/mL — categoria controversa, muitos especialistas consideram >20 suficiente para população geral",
"SUFICIÊNCIA: ≥30 ng/mL (Endocrine Society) ou ≥20 ng/mL (IOM/USPSTF)",
"TOXICIDADE: >100 ng/mL (raríssimo apenas com suplementação extrema)",
"⚠ Endocrine Society 2024 mudou: NÃO recomenda buscar 'níveis ótimos >30' em pessoas saudáveis. Foco em GRUPOS de risco",
],

exames:[
"25-OH vitamina D — APENAS se indicação clínica (vide acima)",
"Cálcio total + albumina (ou cálcio iônico)",
"Fósforo sérico",
"Fosfatase alcalina (elevada em osteomalácia/raquitismo)",
"PTH (hiperparatireoidismo secundário pode acompanhar)",
"Creatinina + TFG",
"⚠ NÃO PEDIR: 1,25-OH vit D (calcitriol) rotineiramente — não reflete reservas. Indicado apenas em DRC avançada e hipercalcemia inexplicada",
"Em raquitismo / osteomalácia: Rx ossos longos / coluna (linhas de Looser, deformidades)",
"Densitometria óssea — em osteoporose / fraturas",
],

rx:[
// ============== AVALIAÇÃO ANTES DE TRATAR ==============
{etapa:"inicial", d:"⚠ DECISÃO DE TRATAR — depende de NÍVEL + CONTEXTO + RISCO", o:""},
{etapa:"inicial", d:"DEFICIÊNCIA franca <20 ng/mL: tratar — especialmente se sintomática, osteoporose, malabsorção, idoso", o:""},
{etapa:"inicial", d:"INSUFICIÊNCIA 20-30 ng/mL em paciente saudável e assintomático: NÃO tratar rotineiramente — orientar exposição solar + dieta + suplementação preventiva se grupo de risco", o:"P4: foco em saúde geral, não em normalizar número."},
{etapa:"inicial", d:"⚠ NÃO HÁ EVIDÊNCIA de benefício clínico em suplementar pessoas saudáveis para 'manter ≥30' (estudo VITAL 2019)", o:""},

// ============== MUDANÇAS DE ESTILO DE VIDA ==============
{etapa:"inicial", d:"EXPOSIÇÃO SOLAR — fonte principal (90%) da vit D em humanos", o:""},
{etapa:"inicial", d:"15-30 min/dia em braços + pernas, sem protetor solar, entre 10-16h (Brasil — depende da latitude e fototipo)", o:"Fototipo escuro precisa mais tempo. Após exposição: protetor para reduzir CA pele. NÃO é dose única — necessita regularidade."},
{etapa:"inicial", d:"DIETA: peixes gordos (salmão, sardinha, atum), gema de ovo, fígado, leite/iogurte/cereais fortificados — fontes brasileiras limitadas (alimentos fortificados não amplamente disponíveis)", o:""},

// ============== SUPLEMENTAÇÃO ==============
{etapa:"escala", d:"⚠ COLECALCIFEROL (vit D3) — PREFERIDO sobre ergocalciferol (D2) — meia-vida mais longa, eficácia maior", o:""},

{etapa:"escala", d:"DEFICIÊNCIA <20 ng/mL em adulto: ATAQUE Colecalciferol 50.000 UI VO 1×/semana × 8-12 semanas (até nível >30) → MANUTENÇÃO 1.000-2.000 UI/d", o:"Reavaliar nível 3 meses após início. Manter manutenção continuamente em grupos de risco."},

{etapa:"escala", d:"INSUFICIÊNCIA 20-30 ng/mL em GRUPO DE RISCO: Colecalciferol 1.000-2.000 UI/d (sem fase de ataque)", o:""},

{etapa:"escala", d:"PROFILAXIA em adulto / idoso saudável (sem deficiência confirmada): 600-800 UI/d (RDA — IOM)", o:"Sociedade Endócrina recomendava 1.500-2.000 mas atualização 2024 desconsidera para população geral."},

{etapa:"escala", d:"IDOSO ≥65a — recomendação para PREVENÇÃO DE QUEDAS/FRATURAS: 800-1.000 UI/d + cálcio 1.000-1.200 mg/d (se ingesta dietética insuficiente)", o:"Evidência: reduz quedas/fraturas em meta-análises."},

{etapa:"escala", d:"GESTANTE / LACTANTE: 1.000 UI/d profilático. Em deficiência: 2.000 UI/d. Lactante precisa transmitir ao bebê (especialmente se aleitamento exclusivo)", o:""},

{etapa:"escala", d:"LACTENTE em aleitamento materno exclusivo: 400 UI/d até 12 meses (SBP, MS, AAP) — leite materno tem pouco vit D", o:"Após introdução alimentar + sol: avaliar individualmente."},

{etapa:"escala", d:"CRIANÇA >1a / ADOLESCENTE: 600-1.000 UI/d se grupo de risco (institucionalizada, fototipo escuro, pouca exposição solar, dieta restrita)", o:""},

{etapa:"escala", d:"OBESIDADE: vit D é sequestrada no tecido adiposo — necessita doses 2-3× maiores para atingir mesmo nível sérico", o:""},

{etapa:"escala", d:"MALABSORÇÃO (DII, doença celíaca, bariátrica, fibrose cística, hepatopatia colestática): doses muito maiores — 6.000-10.000 UI/d ou 50.000 UI/sem. Forma SOLÚVEL em óleo. Considerar 25-OH vit D direta", o:""},

// ============== CÁLCIO COMBINADO ==============
{etapa:"adj", d:"CÁLCIO — combinar com vit D se ingesta dietética insuficiente OU osteoporose", o:""},
{etapa:"adj", d:"Carbonato de cálcio 500 mg de Ca elemental 1-2×/d (dose total 1.000-1.200 mg/d incluindo dieta)", o:"Tomar com refeição (necessita acidez). Constipa — orientar fibras + hidratação."},
{etapa:"adj", d:"Citrato de cálcio 250 mg 1-2×/d — preferido em uso de IBP (não precisa de ácido) e em idoso", o:""},
{etapa:"adj", d:"⚠ NÃO usar cálcio rotineiramente em paciente sem osteoporose / ingesta dietética adequada — meta-análises mostram aumento modesto de eventos CV", o:""},

// ============== SITUAÇÕES ESPECIAIS ==============
{etapa:"adj", d:"DRC AVANÇADA (TFG <30): conversão renal de 25-OH para 1,25-OH está comprometida — pode necessitar CALCITRIOL (1,25-OH vit D) ou paricalcitol", o:"Indicação: hiperparatireoidismo secundário, hipocalcemia, distúrbio mineral ósseo. Nefrologista decide."},

{etapa:"adj", d:"HIPERPARATIREOIDISMO PRIMÁRIO: tratar deficiência de vit D pode aumentar PTH inicialmente — abordagem coordenada com endócrino", o:""},

{etapa:"adj", d:"GLICOCORTICOIDE crônico: necessita vit D + cálcio profilático + considerar bisfosfonato (osteoporose por glicocorticoide)", o:""},

{etapa:"adj", d:"PÓS-BARIÁTRICA: profilaxia vitalícia — vit D 2.000-3.000 UI/d, cálcio citrato 1.200-1.500 mg/d, B12, ferro, multivitamínico", o:""},

{etapa:"adj", d:"⚠ NÃO SUPLEMENTAR VIT D PARA: prevenção CV (sem evidência — VITAL 2019), prevenção câncer, prevenção depressão, COVID-19 (sem evidência robusta), 'imunidade geral'", o:""},

// ============== TOXICIDADE ==============
{etapa:"adj", d:"⚠ TOXICIDADE: rara mas existe — geralmente em uso de doses muito altas crônicas (>40.000 UI/d) ou erro de prescrição", o:""},
{etapa:"adj", d:"Quadro: HIPERCALCEMIA → poliúria, polidipsia, fadiga, náusea, constipação, confusão, IRA, calcificação metastática", o:""},
{etapa:"adj", d:"Conduta: SUSPENDER vit D + suspender cálcio + hidratação vigorosa SF + (em hipercalcemia grave) bisfosfonato/calcitonina/glicocorticoide", o:"Demora SEMANAS A MESES para normalizar (meia-vida vit D longa)."},

// ============== ALTA ==============
{etapa:"alta", d:"⚠ REAVALIAR 25-OH vit D 3 MESES após início do tratamento", o:""},
{etapa:"alta", d:"META: >20 ng/mL (suficiência para população geral). >30 só em grupos específicos (osteoporose, hiperparatireoidismo secundário) — discutível", o:""},
{etapa:"alta", d:"MANUTENÇÃO: 1.000-2.000 UI/d em grupos de risco. Em saudável, exposição solar + dieta podem ser suficientes", o:""},
{etapa:"alta", d:"⚠ NÃO REPETIR 25-OH vit D rotineiramente em paciente assintomático em uso de manutenção — sem evidência", o:""},
{etapa:"alta", d:"P4: a maioria das pessoas NÃO precisa de dosagem nem suplementação. Cuidar de alimentação, exercício e sol é mais importante que normalizar número", o:""},
{etapa:"alta", d:"PRÓXIMOS PASSOS — encaminhamento: (1) refratariedade ao tratamento; (2) hipocalcemia grave; (3) suspeita de raquitismo/osteomalácia ativa; (4) malabsorção subjacente não esclarecida", o:""},
],

alertas:[
{nivel:"crit", txt:"HIPERCALCEMIA por toxicidade de vit D: poliúria, fadiga, IRA, confusão. Suspender + hidratação + tratar hipercalcemia. Meia-vida da vit D é longa — normalização demora semanas/meses."},
{nivel:"warn", txt:"⚠ NÃO RASTREAR rotineiramente — Endocrine Society 2024, USPSTF, ACP, Choosing Wisely. Dosagem é exemplo CLÁSSICO de exame de baixo valor sem indicação clara."},
{nivel:"warn", txt:"INDICAÇÕES de dosar: osteoporose, fraturas frágeis, malabsorção, DRC G3+, glicocorticoide crônico, hiperparatireoidismo, idoso institucionalizado, criança com sinais clínicos. APENAS isso."},
{nivel:"warn", txt:"PREFERIR COLECALCIFEROL (D3) sobre ergocalciferol (D2) — meia-vida mais longa, eficácia maior."},
{nivel:"warn", txt:"NÃO SUPLEMENTAR VIT D PARA prevenção de: CV (VITAL trial negativo), câncer, depressão, COVID, 'imunidade'. Sem evidência robusta."},
{nivel:"warn", txt:"OBESIDADE: vit D é sequestrada no tecido adiposo — necessita doses 2-3× maiores para atingir mesmo nível sérico."},
{nivel:"warn", txt:"MALABSORÇÃO (DII, celíaca, bariátrica): doses muito maiores OU forma solúvel/líquida OU calcitriol."},
{nivel:"info", txt:"PEDIATRIA: lactente em AME — 400 UI/d até 12 meses (SBP, MS). Leite materno tem pouco vit D."},
{nivel:"info", txt:"VITAMINA D3 (colecalciferol) > D2 (ergocalciferol). Sem 'vit D ativada' rotineira (calcitriol) — só em DRC avançada."},
{nivel:"info", txt:"EXPOSIÇÃO SOLAR é a principal fonte (90%) — orientar fototipo + horário + duração. Não é substituível por suplementação ideal."},
],

fluxo:null,
diretriz:"Endocrine Society Guidelines 2024 (atualização importante). SBEM. USPSTF. ACP. VITAL trial 2019. SBP (pediatria). IOM."
},

/* ============== DEFICIÊNCIA DE VITAMINA B12 ============== */
{id:"deficiencia-vit-b12", nome:"Deficiência de Vitamina B12 / Anemia Megaloblástica", sis:"endo", grav:"baixa",
cid:"D51 (anemia por def B12) / E53.8 (def B12 sem anemia)", ciap:"B81 (anemia) / T91 (deficiência nutricional)",
sin:["Deficiência de cobalamina","B12 baixa","Anemia perniciosa","Anemia megaloblástica","Neuropatia por B12"],

def:"Deficiência de cobalamina (vit B12). Causas: má absorção (anemia perniciosa autoimune, gastrite atrófica, ressecção ileal/bariátrica, doença celíaca, uso crônico de IBP/metformina), dieta restrita (vegano), idade avançada. Pode causar anemia macrocítica + sintomas neurológicos PROGRESSIVOS E IRREVERSÍVEIS se prolongados.",

quadro:[
"INSTALAÇÃO INSIDIOSA — reservas duram 3-5 ANOS após cessar absorção. Sintomas aparecem TARDE",
"HEMATOLÓGICAS: anemia macrocítica (VCM >100), fadiga, palidez, dispneia aos esforços, glossite atrófica (língua lisa, vermelha, dolorida — Hunter), icterícia leve (hemólise intramedular)",
"NEUROLÓGICAS — podem ocorrer SEM anemia: parestesias simétricas em luvas/meias, ↓ propriocepção e sensibilidade vibratória (cordões posteriores), DEGENERAÇÃO SUBAGUDA COMBINADA (mielose funicular — comprometimento cordões posteriores + laterais), ataxia, sinal de Romberg positivo, marcha de base alargada, fraqueza muscular",
"NEUROPSIQUIÁTRICAS: alteração cognitiva, demência reversível (em fase inicial), depressão, irritabilidade, psicose ('insanidade megaloblástica' — raro)",
"GI: glossite, queilite angular, diarreia, anorexia",
"⚠ NEUROLÓGICAS PODEM SER IRREVERSÍVEIS se prolongadas — daí URGÊNCIA do tratamento",
"⚠ NEUROPATIA SEM ANEMIA: pode acontecer (~25%). NÃO esperar anemia para tratar",
],

diag:[
"VITAMINA B12 SÉRICA (cobalamina total): <200 pg/mL = DEFICIÊNCIA. 200-350 = limítrofe (avaliar contexto)",
"⚠ B12 NORMAL NÃO EXCLUI deficiência funcional — em quadros sugestivos + B12 200-350: dosar HOLOTRANSCOBALAMINA, METILMALÔNICO (MMA), HOMOCISTEÍNA — elevados em deficiência",
"MARCADORES FUNCIONAIS: ácido metilmalônico (MMA) elevado é mais sensível e específico. Homocisteína elevada (também elevada em def folato e IRC)",
"HEMOGRAMA: VCM >100 (macrocitose), anemia se prolongada, hipersegmentação de neutrófilos (>5% com ≥5 lóbulos), pode haver leuco-trombocitopenia",
"PERIFÉRICO: macrócitos, neutrófilos hipersegmentados, anisocitose (RDW alto)",
"INVESTIGAR CAUSA:",
"Anti-fator intrínseco (Anti-FI): específico para anemia perniciosa (50-70% sensibilidade, alta especificidade)",
"Anti-células parietais: alta sensibilidade mas baixa especificidade",
"Gastrina elevada (em gastrite atrófica)",
"EDA + biópsia se suspeita gastrite atrófica autoimune (e rastreio CA gástrico — risco aumentado)",
"⚠ NUNCA tratar def B12 sem investigar etiologia (anemia perniciosa = doença vitalícia)",
],

exames:[
"Vitamina B12 sérica",
"Hemograma + RDW + esfregaço periférico",
"Ácido fólico (deficiência combinada é comum — sempre investigar junto)",
"Ferritina (deficiência combinada é frequente em má absorção)",
"TGO/TGP, LDH (hemólise intramedular eleva LDH)",
"Bilirrubina indireta (hemólise)",
"Creatinina + TFG",
"⚠ EM DÚVIDA: MMA + homocisteína",
"Anti-FI e anti-células parietais — anemia perniciosa",
"Gastrina, EDA — gastrite atrófica",
"Pesquisa de doença celíaca (anti-tTG IgA + IgA total)",
"H. pylori (causa gastrite atrófica)",
"Em vegano de longa data: avaliar dieta detalhadamente",
],

rx:[
// ============== INICIAL — IDENTIFICAR CAUSA ==============
{etapa:"inicial", d:"⚠ IDENTIFICAR ETIOLOGIA antes de iniciar — orienta duração e via", o:""},
{etapa:"inicial", d:"CAUSAS COMUNS: (1) anemia perniciosa autoimune; (2) gastrite atrófica do idoso; (3) má absorção (DII, celíaca, ressecção ileal, bariátrica); (4) dieta vegana estrita; (5) MEDICAMENTOS — IBP crônico, metformina (até 30% após >4a), bloqueador H2", o:""},
{etapa:"inicial", d:"⚠ NEM TODA def B12 precisa de IM — depende da etiologia e gravidade", o:""},

// ============== REPOSIÇÃO IM ==============
{etapa:"escala", d:"CIANOCOBALAMINA IM — esquema clássico em DEFICIÊNCIA GRAVE / NEUROLÓGICA / ABSORÇÃO COMPROMETIDA", o:""},
{etapa:"escala", d:"FASE DE ATAQUE (depleção / sintomas neurológicos):", o:""},
{etapa:"escala", d:"Cianocobalamina 1.000 mcg IM 1×/dia × 7 dias", o:""},
{etapa:"escala", d:"Depois 1.000 mcg IM 1×/semana × 4 semanas", o:""},
{etapa:"escala", d:"Depois 1.000 mcg IM 1×/mês INDEFINIDAMENTE (anemia perniciosa = vitalício)", o:""},

{etapa:"escala", d:"ESQUEMA SIMPLIFICADO (deficiência sem neurológico grave):", o:"Cianocobalamina 1.000 mcg IM cada 1-3 dias × 6-7 doses → manutenção 1.000 mcg IM 1×/mês."},

{etapa:"escala", d:"HIDROXICOBALAMINA — preferida em outros países (meia-vida maior). No Brasil, cianocobalamina é padrão (≈ 10-50% do custo da hidroxi)", o:""},

// ============== REPOSIÇÃO ORAL ==============
{etapa:"escala", d:"⚠ B12 VO EM ALTA DOSE — ALTERNATIVA EFICAZ na maioria dos casos (mesmo em anemia perniciosa)", o:""},
{etapa:"escala", d:"Cianocobalamina 1.000-2.000 mcg VO 1×/d (sublingual ou oral)", o:"Mesmo sem fator intrínseco, ~1% é absorvido por DIFUSÃO PASSIVA — 1.000 mcg/d garante absorção de ~10 mcg/d (suficiente)."},

{etapa:"escala", d:"Equivalência: VO 1.000-2.000 mcg/d ≈ IM 1.000 mcg/mês em manutenção", o:"Meta-análises e revisões Cochrane confirmam não-inferioridade em maioria dos casos."},

{etapa:"escala", d:"INDICAÇÕES de PREFERIR IM: (1) sintomas neurológicos graves; (2) deficiência grave inicial (preferir IM × 1-2 sem, depois transição VO); (3) má adesão a VO; (4) má absorção severa (intestino curto, gastrectomia total — diferente de anemia perniciosa)", o:""},

// ============== MEV E DIETA ==============
{etapa:"adj", d:"DIETA: alimentos ricos em B12 — carnes, ovos, laticínios, peixes. Veganos: ALIMENTOS FORTIFICADOS (leveduras nutricionais, cereais, leites vegetais fortificados) + suplemento", o:""},

{etapa:"adj", d:"VEGANOS / VEGETARIANOS estritos: REPOSIÇÃO PREVENTIVA — cianocobalamina 1.000 mcg VO 1-2×/semana (ou diário 10-25 mcg)", o:"Veganismo SEM suplemento de B12 = deficiência inevitável a médio prazo."},

// ============== SITUAÇÕES ESPECIAIS ==============
{etapa:"adj", d:"GESTAÇÃO + DEFICIÊNCIA: tratar agressivamente — déficit fetal causa atraso neurodesenvolvimento, defeitos de tubo neural", o:""},

{etapa:"adj", d:"LACTENTE de MÃE VEGANA sem suplementação: risco GRAVE — pode ter encefalopatia. Garantir reposição materna na lactação + lactente conforme aleitamento", o:""},

{etapa:"adj", d:"IDOSO: AVALIAR B12 em quadros de demência, neuropatia, anemia, glossite — pode ser causa REVERSÍVEL se tratada precoce", o:""},

{etapa:"adj", d:"PÓS-BARIÁTRICA: profilaxia vitalícia — B12 1.000 mcg IM/mês ou 350-1.000 mcg VO/d", o:""},

{etapa:"adj", d:"METFORMINA crônica: 10-30% após >4 anos desenvolve def B12. Considerar dosagem anual em uso prolongado", o:""},

{etapa:"adj", d:"⚠ SEMPRE INVESTIGAR e tratar FOLATO concomitantemente — tratar APENAS folato com B12 baixa pode mascarar anemia mas PIORAR NEUROPATIA", o:""},

// ============== MONITORAMENTO ==============
{etapa:"alta", d:"⚠ RESPOSTA HEMATOLÓGICA: reticulocitose em 5-7 dias. Hb normaliza em 4-8 semanas. VCM normaliza em 4-8 semanas", o:""},

{etapa:"alta", d:"RESPOSTA NEUROLÓGICA: pode demorar 6-12 meses. NEM SEMPRE REVERSÍVEL — danos prolongados (>6 meses) podem ser permanentes", o:""},

{etapa:"alta", d:"REAVALIAR B12 após 1-3 meses do início. Após estável: anual (em causa reversível) ou semestral (em anemia perniciosa)", o:""},

{etapa:"alta", d:"HIPOCALEMIA pode ocorrer no início do tratamento (consumo de K+ pela síntese hematopoiética intensificada) — monitorar/repor K+", o:""},

{etapa:"alta", d:"ANEMIA PERNICIOSA = doença AUTOIMUNE VITALÍCIA: tratamento INDEFINIDO. Aumenta risco de CA gástrico — rastreio com EDA periódica (3-5/3-5 anos, discutível)", o:""},

{etapa:"alta", d:"REAVALIAR DIAGNÓSTICO se não responde: (1) etiologia errada; (2) causa concomitante (ferropenia, doença crônica, hemoglobinopatia); (3) má adesão; (4) má absorção severa não diagnosticada", o:""},

{etapa:"alta", d:"PRÓXIMOS PASSOS — encaminhamento: (1) sintomas neurológicos progressivos apesar de tratamento; (2) refratariedade; (3) suspeita de gastrite atrófica/CA gástrico; (4) doença hematológica subjacente", o:""},
],

alertas:[
{nivel:"crit", txt:"⚠ NEUROPATIA POR B12 pode ser PROGRESSIVA E IRREVERSÍVEL — não esperar resolução completa em casos prolongados. TRATAR PRECOCEMENTE. Sintomas neurológicos podem ocorrer SEM anemia (~25%)."},
{nivel:"crit", txt:"⚠ NÃO TRATAR APENAS FOLATO em paciente com B12 baixa — pode 'corrigir' anemia (folato resgata função hematopoiética) MAS PIORAR neuropatia. Sempre investigar B12 antes."},
{nivel:"warn", txt:"B12 VO em alta dose (1.000-2.000 mcg/d) é EFICAZ na maioria dos casos — inclusive anemia perniciosa (absorção passiva ~1%). Cochrane confirma não-inferioridade. PREFERIR IM apenas em neuropatia grave, deficiência grave inicial, má adesão, má absorção severa."},
{nivel:"warn", txt:"INVESTIGAR ETIOLOGIA antes de tratar — anemia perniciosa é VITALÍCIA + ↑ risco CA gástrico (rastreio EDA). Gastrite atrófica, doença celíaca, ressecção intestinal mudam manejo."},
{nivel:"warn", txt:"VEGANOS / VEGETARIANOS ESTRITOS: deficiência inevitável sem suplementação. PROFILAXIA: 1.000 mcg VO 1-2×/sem ou 10-25 mcg/d. Atenção especial em gestação + lactação."},
{nivel:"warn", txt:"METFORMINA crônica + IBP crônico: causas frequentes de def B12 (até 30% após >4 anos). Avaliar em paciente em uso de ambos."},
{nivel:"warn", txt:"PÓS-BARIÁTRICA: profilaxia vitalícia de B12 + outras vitaminas/minerais."},
{nivel:"warn", txt:"INICIO DO TRATAMENTO: pode causar HIPOCALEMIA (consumo K+ por hematopoiese intensa) — monitor + repor se necessário."},
{nivel:"info", txt:"RESPOSTA: reticulocitose em 5-7 dias, Hb normaliza em 4-8 sem, VCM em 4-8 sem. Neurológica pode demorar 6-12 meses (parcial)."},
{nivel:"info", txt:"MARCADORES FUNCIONAIS (MMA, homocisteína) — usar quando B12 limítrofe (200-350) + clínica sugestiva."},
],

fluxo:null,
diretriz:"BSH (British Society for Haematology) Guidelines 2014. ESH. ASH. Cochrane B12 oral vs IM."
},

);
