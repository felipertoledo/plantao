/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — pat/endo-hidro.js
   19 patologias
   Sistemas: endo, hidro
   =========================================================== */

PATOLOGIAS.push(

/* ============== ENDO (11) ============== */

{
  id:"cad-ehh", sis:"endo", grav:"alta",
  nome:"CAD / EHH",
  sin:["CAD","EHH","cetoacidose","cetoacidose diabética","estado hiperosmolar"],
  def:"CAD: glicemia >200 + acidose (pH<7,3 ou HCO3<18) + cetonas+. EHH: glicemia >600 + osmolaridade >320 + leve ou nenhuma cetose + alteração de consciência.",
  exames:["Glicemia, gasometria arterial (pH, HCO3, AG)","Eletrólitos (Na, K, Cl) + função renal","Cetonas séricas/urinárias (β-OH-butirato)","Osmolaridade calculada","Hemograma, PCR (procurar precipitante: infecção, IAM, AVC, suspensão de insulina)","ECG"],
  rx:[
    {etapa:"inicial", d:"Avaliação inicial + monitorização",do:"PA, FC, FR, SpO2, glasgow, glicemia capilar",via:"—",o:"Avaliar gravidade: leve (pH 7,25-7,3), moderada (7-7,25), grave (<7). Buscar PRECIPITANTE: infecção (50%), IAM, AVC, suspensão insulina."},
    {etapa:"inicial", d:"Exames laboratoriais URGENTES",do:"Gasometria, eletrólitos, glicemia, cetonas, função renal",via:"—",o:"Calcular: anion gap, Na corrigido, osmolaridade. Repetir 2/2h até melhora."},
    {etapa:"inicial", d:"2 acessos + sondagem vesical se choque",do:"Acessos calibrosos",via:"—",o:"Monitorar débito urinário (alvo ≥0,5 mL/kg/h)."},
    {etapa:"escala", d:"① VOLUME — SF 0,9%",do:"500-1000 mL na 1ª hora, depois 250-500 mL/h conforme Na corrigido",via:"IV",o:"Hidratação é mais URGENTE que insulina nas primeiras 1-2h. Na corrigido NORMAL/ALTO: passar para SF 0,45%. Em CHOQUE: bolus 15-20 mL/kg."},
    {etapa:"escala", d:"② POTÁSSIO — CHECAR ANTES da insulina",do:"K>5,2: aguardar. K 3,3-5,2: 20-30 mEq/L. K<3,3: 20-30 mEq/h + SUSPENDER insulina",via:"IV",o:"OBRIGATÓRIO. Deficit corporal mesmo com K sérico normal (sai com diurese osmótica). Risco de PCR por hipocalemia se iniciar insulina sem cuidado."},
    {etapa:"escala", d:"③ INSULINA regular BIC",do:"0,1 U/kg/h IV em BIC (SEM bolus rotineiro - ADA 2024)",via:"IV",o:"INICIAR após K conhecido (≥3,3). Diluir 50 UI em 250 mL SF = 0,2 UI/mL. Alvo: ↓glicemia 50-75 mg/dL/h."},
    {etapa:"escala", d:"④ Troca para SG quando glicemia <250-300",do:"SG 5-10% + manter insulina BIC",via:"IV",o:"NÃO suspender insulina (resolve cetose, não glicemia). Manter até resolver acidose."},
    {etapa:"escala", d:"⑤ NaHCO3 8,4% (apenas pH <6,9)",do:"50-100 mEq IV diluído em 400 mL SF + KCl",via:"IV",o:"RESTRITO a acidose extrema. NÃO rotineiro. Risco: hipocalemia, alcalose paradoxal."},
    {etapa:"adj", d:"Tratar PRECIPITANTE",do:"ATB se infecção, ECG/troponina se IAM, TC se AVC",via:"—",o:"50% dos casos têm infecção como gatilho. NÃO esquecer essa investigação."},
    {etapa:"adj", d:"Reposição de Mg e PO4 se baixos",do:"Mg <1,5: 1-2g IV. PO4 <1: cuidadoso",via:"IV",o:"Deficiência comum. Repor Mg facilita correção K."},
    {etapa:"alta", d:"TRANSIÇÃO para insulina SC",do:"Iniciar SC 1-2h ANTES de suspender BIC",via:"SC",o:"Critérios resolução: pH ≥7,3 OU HCO3 >18 + β-OH-butirato <0,6 + glicemia <200 + paciente comendo. Insulina basal + bolus."},
    {etapa:"alta", d:"Educação + prevenção",do:"Sick day rules, automonitorização, identificar precipitantes",via:"—",o:"Endocrino. Plano de manejo em caso de infecções/jejum. Adesão à insulina."},
  ],
  alertas:[
    {t:"crit",x:"Edema cerebral em pediatria: hidratação cautelosa, evitar quedas rápidas de Na/glicemia. Mortalidade 20-25% do edema."},
    {t:"warn",x:"NUNCA iniciar insulina sem checar K — risco de hipocalemia fatal (perda de K com diurese osmótica)."},
    {t:"info",x:"Resolução: pH ≥7,3 ou HCO3 >18 + β-OH-butirato <0,6 + glicemia <200 (ADA/EASD 2024)."},
  ],
  fisio:"CAD: deficiência absoluta de insulina + ↑hormônios contrainsulínicos (glucagon, cortisol, catecolaminas, GH) → lipólise → ácidos graxos livres → ↑oxidação → corpos cetônicos (β-OH-butirato, acetoacetato) → acidose metabólica AG aumentado. Hiperglicemia → diurese osmótica → desidratação intensa + perda de Na/K/Mg/PO4. EHH: insulina suficiente para suprimir lipólise mas insuficiente para evitar hiperglicemia → desidratação + hiperosmolaridade SEM cetoacidose significativa. Pacientes diabéticos tipo 2 idosos.",
  mec:[
    {d:"Insulina regular",x:"Hormônio peptídico — liga-se ao receptor de insulina (tirosina-quinase) → translocação de GLUT-4 → captação de glicose pelo músculo/adipócito; ↓lipólise, ↓cetogênese, ↑síntese proteica."},
  ],
  diretriz:"Consenso ADA/EASD/JBDS/AACE/DTS 2024 — Hyperglycemic Crises in Adults With Diabetes (Umpierrez GE et al., Diabetes Care 2024;47:1257–1275, DOI:10.2337/dci24-0032). Diretriz SBD 2024.",
  fluxo:"cad",
  calcs:["aniongap","osm","corr-na"],
},
{id:"crise-tireo", sis:"endo", grav:"alta",
nome:"Crise Tireotóxica (Tempestade Tireoidiana)",
sin:["crise tireotóxica","tempestade tireoidiana","Graves","hipertireoidismo descompensado"],
def:"Manifestação extrema do hipertireoidismo — febre alta + taquicardia >130 + arritmias + alteração mental (agitação → coma) + GI (vômitos, diarreia) + cardiopatia descompensada. Mortalidade 10-30% mesmo tratado. Escala de Burch-Wartofsky.",
exames:["TSH (suprimido <0,01) + T4 livre + T3 livre","HMG, função hepática (alt comum)","Função renal, eletrólitos, cálcio","ECG (FA, taqui sinusal)","Hemocultura se febril (infecção é precipitante #1)","Beta-HCG mulher fértil"],
rx:[
{etapa:"escala", d:"Propranolol",do:"40-80 mg VO 4/4h OU 1-2 mg IV bolus repetir 15/15 min",via:"VO/IV",o:"1ª linha — controla taquicardia/HAS/agitação. Bloqueia conversão T4→T3 (efeito extra)."},
{etapa:"escala", d:"Esmolol BIC",do:"50-200 mcg/kg/min",via:"IV",o:"Se intolerância a propranolol (asma) ou necessidade de titulação. Cuidado em IC."},
{etapa:"alta", d:"Propiltiouracila (PTU)",do:"500-1000 mg VO ataque + 250 mg 4/4h",via:"VO/SNG",o:"1ª escolha NA CRISE (bloqueia conversão T4→T3 perifericamente, além de síntese). PREFERIR sobre metimazol em crise (não em manutenção crônica)."},
{etapa:"escala", d:"Iodo (Lugol/SSKI)",do:"Lugol 8-10 gotas 6/6h OU SSKI 5 gotas 6/6h",via:"VO",o:"DAR 1H APÓS PTU (não antes — fornece substrato). Bloqueio Wolff-Chaikoff. Iopanato/ipodato (não disponível BR) é alternativa."},
{etapa:"escala", d:"Hidrocortisona",do:"100 mg IV 8/8h",via:"IV",o:"Bloqueia conversão T4→T3 + reposição (insuficiência adrenal relativa frequente)."},
{etapa:"adj", d:"Resfriamento + Paracetamol",do:"NÃO usar AAS (desloca T4 da TBG → piora)",via:"—",o:"Manta + paracetamol 1g 6/6h. Hipertermia agrava."},
{etapa:"escala", d:"Suporte volêmico",do:"SF 0,9% guiado por volemia",via:"IV",o:"Vômitos + diarreia + sudorese causam desidratação importante."},
],
alertas:[
{t:"crit",x:"DAR PTU ANTES do iodo. Iodo é substrato para síntese; dado antes do PTU pode piorar transitoriamente."},
{t:"crit",x:"NÃO usar AAS para febre — desloca T4 da TBG → ↑hormônio livre."},
{t:"warn",x:"Precipitantes: infecção (mais comum), cirurgia tireoide, parto, IAM, AVC, uso de contraste iodado (cuidado em pacientes Graves), suspensão de tioamida."},
],
fisio:"Crise no hipertireoidismo descompensado (geralmente Graves não tratado). Excesso de hormônio tireoidiano + ↑sensibilidade tecidual a catecolaminas → estado hipermetabólico extremo, taquicardia, hipertermia, lipólise + glicogenólise, vasodilatação, IC alto débito. Insulto agudo (infecção, cirurgia) precipita transformação de hipertireoidismo crônico em crise.",
mec:[
{d:"Propiltiouracila",x:"Inibe peroxidase tireoidiana (organificação iodo + acoplamento iodotirosinas) E inibe deiodinase tipo 1 perifericamente → ↓conversão T4→T3 (vantagem na crise)."},
{d:"Iodo",x:"Bloqueio agudo organificação (Wolff-Chaikoff) — paradoxalmente, doses altas inibem síntese hormonal. Efeito imediato mas transitório (escape em 7-14 dias)."},
{d:"Hidrocortisona",x:"Inibe deiodinase tipo 1, reduzindo conversão periférica T4→T3."},
],
diretriz:"American Thyroid Association 2016 Hyperthyroidism (Ross DS et al., Thyroid 2016;26:1343, DOI:10.1089/thy.2016.0229). Burch HB & Wartofsky L, JCEM 1993 (escala).",
fluxo:null,
calcs:[],
},
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
{id:"diabetes-tipo-2", nome:"Diabetes Mellitus Tipo 2 (DM2)", sis:"endo", grav:"moderada",
cid:"E11", ciap:"T90",
sin:["DM2","Diabetes tipo 2","Diabetes mellitus","Açúcar alto","Hiperglicemia crônica"],

def:"Doença crônica multifatorial — hiperglicemia por resistência insulínica + disfunção progressiva das células β. SBD 2025 mudou paradigma: METFORMINA NÃO É MAIS EXCLUSIVA em 1ª linha — escolha individualizada por RCV, IMC e HbA1c.",

quadro:[
"Frequentemente ASSINTOMÁTICO — descoberta em rastreio ou após complicação (DM2 'silencioso' por anos)",
"Sintomas clássicos (em hiperglicemia >250 mg/dL): poliúria, polidipsia, polifagia, perda de peso involuntária",
"Sintomas inespecíficos: fadiga, visão turva, infecções recorrentes (urinárias, candidíase, pele), cicatrização lenta",
"Sintomas de complicações crônicas (presentes no diagnóstico em ~50% dos DM2): neuropatia (parestesia/dor MMII), retinopatia (visão), nefropatia (proteinúria/edema), DAOP (claudicação), DAC/AVC",
"Apresentação aguda: CAD euglicêmica (em uso SGLT-2), CAD clássica, EHH (estado hiperglicêmico hiperosmolar — glicemia >600, desidratação grave, alteração consciência)",
"Acantose nigricans (hiperpigmentação aveludada em pescoço/axilas) sugere resistência insulínica grave",
],

diag:[
"GLICEMIA DE JEJUM ≥126 mg/dL (jejum ≥8h) em DUAS ocasiões — ou em uma com clínica clássica",
"HbA1c ≥6,5% (método certificado NGSP) em DUAS ocasiões — ou uma com clínica",
"TOTG 75 g — glicemia 2h ≥200 mg/dL",
"GLICEMIA OCASIONAL ≥200 mg/dL + sintomas clássicos = diagnóstico em UMA medida",
"PRÉ-DIABETES: glicemia jejum 100-125 OU HbA1c 5,7-6,4% OU TOTG 2h 140-199",
"⚠ SBD 2025 NOVA: RASTREAMENTO em adultos ≥35 anos (era ≥45) — ou antes se fatores de risco",
"FATORES DE RISCO para rastreio precoce: IMC ≥25 + 1 fator (HAS, dislipidemia, sedentarismo, hist familiar DM, SOP, etnia de risco, DCV, hist DMG)",
],

exames:[
"⚠ AVALIAÇÃO INICIAL completa após diagnóstico:",
"HbA1c (basal + cada 3 meses até controle, depois 6/6m)",
"Perfil lipídico (CT, HDL, LDL, TG) — meta LDL <70 em alto RCV, <55 em muito alto",
"Creatinina + TFG estimada (CKD-EPI 2021)",
"RAZÃO ALBUMINÚRIA/CREATININÚRIA (RAC) — rastreio nefropatia. <30: normal; 30-300: micro; >300: macro",
"TGO/TGP (rastreio NASH em DM2 + obesidade)",
"TSH (associação DM2 + tireoidopatia)",
"ECG basal (HVE, isquemia silenciosa)",
"FUNDOSCOPIA ANUAL (rastreio retinopatia)",
"EXAME DE PÉS ANUAL (monofilamento 10g, diapasão 128Hz, pulso pedioso, inspeção)",
"Estratificação de risco CV (PREVENT, ESC SCORE2, ou clínica)",
],

rx:[
// ============== INICIAL — MEV ==============
{etapa:"inicial", d:"MUDANÇAS DE ESTILO DE VIDA (MEV) — aplicar SEMPRE em conjunto com medicação", o:"Pode reduzir HbA1c 0,5-2%. Em pré-diabetes ou DM2 leve: pode normalizar glicemia."},
{etapa:"inicial", d:"DIETA: padrão mediterrânea ou DASH; reduzir carboidratos refinados; ↑ fibras (25-30 g/d); proteína magra; ↓ sódio. Contagem de carboidratos em DM1, opcional em DM2", o:"Considerar nutricionista. Redução HbA1c 0,5-1%."},
{etapa:"inicial", d:"PESO: meta perda 5-10% se IMC ≥25 (cada 1 kg de perda ≈ ↓ 0,1% HbA1c)", o:"Em obesidade grau 2/3 + DM2: avaliar CIRURGIA BARIÁTRICA (IMC ≥35 + DM = boa resposta)."},
{etapa:"inicial", d:"ATIVIDADE FÍSICA: 150 min/sem aeróbica moderada + 2-3× exercício resistido + reduzir tempo sentado", o:"Reduz HbA1c 0,5-1%, melhora sensibilidade insulínica."},
{etapa:"inicial", d:"CESSAR TABAGISMO + álcool moderado (≤2 doses/d H, ≤1 D) + sono adequado (7-9h)", o:"Tabagismo é fator de risco MAIOR em DM (CV + nefropatia + neuropatia)."},
{etapa:"inicial", d:"EDUCAÇÃO em DM: HGT, reconhecer hipo/hiperglicemia, dias de doença, cuidados com pés, vacinação (influenza anual, pneumococo, dT, Hep B, COVID)", o:"Educação estruturada melhora desfechos a longo prazo."},

// ============== ESTRATIFICAÇÃO DE RISCO CV ==============
{etapa:"escala", d:"⚠ ESTRATIFICAÇÃO DE RISCO CV — CHAVE para escolha terapêutica SBD 2025. 4 categorias: BAIXO, INTERMEDIÁRIO, ALTO, MUITO ALTO", o:""},

{etapa:"escala", d:"RCV BAIXO: ♂ <55a / ♀ <65a + SEM fatores de risco + DM <10 anos + HbA1c <7,5% + sem LOA", o:""},

{etapa:"escala", d:"RCV INTERMEDIÁRIO: ♂ ≥55a OU ♀ ≥65a + 1-2 fatores de risco (HAS, dislipidemia, tabagismo, hist familiar) + sem LOA", o:""},

{etapa:"escala", d:"RCV ALTO: ≥3 fatores de risco OU DM ≥10a OU LOA (TFG 30-60, RAC 30-300, retinopatia, HVE)", o:""},

{etapa:"escala", d:"RCV MUITO ALTO: DAC/AVC/DAOP ESTABELECIDOS, OU TFG <30, OU RAC >300, OU múltiplas LOA", o:"Categoria que MUDA radicalmente a escolha terapêutica — SGLT-2/GLP-1 com benefício CV são obrigatórios."},

// ============== ESCALONAMENTO MEDICAMENTOSO ==============
{etapa:"escala", d:"⚠ SBD 2025 — METFORMINA NÃO É MAIS EXCLUSIVA em 1ª linha. Escolha individualizada por: (1) RCV; (2) IMC; (3) HbA1c", o:""},

{etapa:"escala", d:"R3 — RCV BAIXO/INTERMEDIÁRIO + SEM obesidade + HbA1c <7,5%: METFORMINA monoterapia (1ª linha clássica)", o:"Iniciar 500 mg 12/12h com refeições, titular cada 1-2 sem até 850 mg 8/8h ou 1000 mg 12/12h. Dose máx eficaz 2-2,5 g/d."},

{etapa:"escala", d:"RCV ALTO ou MUITO ALTO (independente da HbA1c): iniciar SGLT-2 ou GLP-1 PRECOCEMENTE — benefício CV comprovado", o:"DAPA, EMPA, SEMA, LIRA têm evidência. Não esperar falha de outra classe. Pode combinar com metformina ou usar isolada."},

{etapa:"escala", d:"DM2 + OBESIDADE (IMC ≥30): PREFERIR GLP-1 ou TIRZEPATIDA (perda de peso 5-22%) ou SGLT-2 (perda 2-3 kg)", o:"Beneficio metabólico + cardiovascular + ponderal simultâneo."},

{etapa:"escala", d:"DM2 + IC com FE REDUZIDA (com ou sem comorbidade): SGLT-2 (DAPA/EMPA) é OBRIGATÓRIO — pilar do tratamento", o:"DAPA-HF, EMPEROR — reduz mortalidade e hospitalização. Pode iniciar mesmo SEM DM."},

{etapa:"escala", d:"DM2 + DRC (TFG <60 ou RAC >30): SGLT-2 (DAPA/EMPA) é OBRIGATÓRIO se TFG ≥25", o:"DAPA-CKD, EMPA-KIDNEY — nefroproteção independente de DM. Pode usar até TFG 25 (DAPA) ou 20 (EMPA)."},

{etapa:"escala", d:"DM2 + DAC/AVC ESTABELECIDOS: combinação SGLT-2 + GLP-1 + metformina (se tolerada) + iSRA + estatina", o:"Cardioprotection máxima. Aspirina em prevenção secundária."},

// ============== INSULINOTERAPIA EM DM2 ==============
{etapa:"escala", d:"⚠ R16 — SINAIS DE INSULINOPENIA (poliúria, polidipsia, perda de peso, cetose, HbA1c ≥10%): TERAPIA BASEADA EM INSULINA (TBI) inicial — independente de RCV", o:"Estabilizar glicemia rapidamente. Após estabilização, R17: pode substituir por dupla/tripla VO."},

{etapa:"escala", d:"INSULINA BASAL inicial em DM2: 0,1-0,2 U/kg/d (NPH ou análoga — glargina/degludeca) à noite OU dividida 2×/d", o:"Titular 2 U cada 3 dias até glicemia jejum 80-130. Manter metformina. Reduzir sulfonilureia (risco hipoglicemia)."},

{etapa:"escala", d:"BASAL-BOLUS em DM2 avançada: basal 50% + prandial 50% dividido 3 refeições", o:"Quando HbA1c persiste alto apesar de basal isolada + outras drogas."},

// ============== EXEMPLOS DE COMBINAÇÕES ==============
{etapa:"escala", d:"EXEMPLO 1 (DM2 RCV baixo, HbA1c 7%): METFORMINA 500 mg 12/12h, titular para 850 mg 8/8h. Reavaliar 3 meses", o:"1ª linha clássica. Bom para iniciar."},

{etapa:"escala", d:"EXEMPLO 2 (DM2 + DAC + HbA1c 8%): METFORMINA 850 mg 8/8h + EMPAGLIFLOZINA 10 mg/d + ATORVASTATINA 40 mg + AAS 100 mg + LISINOPRIL/LOSARTANA", o:"Cardioproteção máxima. Reduz MACE + nefropatia."},

{etapa:"escala", d:"EXEMPLO 3 (DM2 + IMC 35 + HbA1c 8,5%): METFORMINA + SEMAGLUTIDA 0,5-1 mg SC/sem (titulação). Avaliar tirzepatida se acessível", o:"Perda de peso + controle glicêmico + benefício CV."},

{etapa:"escala", d:"EXEMPLO 4 (DM2 + IC FE reduzida): DAPAGLIFLOZINA 10 mg/d + LOSARTANA + CARVEDILOL + ESPIRONOLACTONA + furosemida (conforme congestão)", o:"Trio CV moderno + diurese. Pode dispensar metformina se IRC."},

// ============== METAS GLICÊMICAS ==============
{etapa:"adj", d:"⚠ METAS HbA1c — INDIVIDUALIZADAS conforme paciente (SBD 2025):", o:""},

{etapa:"adj", d:"HbA1c <7% — META GERAL para maioria dos adultos com DM2", o:"Reduz desfechos microvasculares (retinopatia, neuropatia, nefropatia)."},

{etapa:"adj", d:"HbA1c <6,5% — em paciente JOVEM, recém-diagnóstico, sem comorbidades", o:"Se atingível sem hipoglicemia significativa."},

{etapa:"adj", d:"HbA1c <8% (ou <8,5%) — em IDOSO frágil, expectativa de vida limitada, hipoglicemias frequentes, complicações avançadas", o:"Risco de hipoglicemia em idoso > benefício de controle estrito."},

{etapa:"adj", d:"GLICEMIAS-ALVO: pré-prandial 80-130 mg/dL | pós-prandial 2h <180 mg/dL | bedtime 90-150 mg/dL", o:"Time-in-range (CGM): >70% entre 70-180 mg/dL."},

// ============== SITUAÇÕES ESPECIAIS ==============
{etapa:"adj", d:"GESTANTE com DM2 pré-existente: INSULINA é padrão-ouro (NPH ou análogas glargina/asparte/detemir). Metformina pode ser mantida no 1º trim em algumas situações (especialmente SOP)", o:"PROIBIDOS: SGLT-2, GLP-1, sulfonilureias (exceto glibenclamida em DMG — uso restrito), DPP-4. Meta HbA1c <6,5% antes da concepção."},

{etapa:"adj", d:"DM GESTACIONAL (DMG): MEV + monitorização. Se inadequado: INSULINA (preferida) ou METFORMINA (categoria B)", o:"Glibenclamida não recomendada em DMG (passa placenta — hipoglicemia neonatal)."},

{etapa:"adj", d:"IDOSO ≥65 anos: EVITAR sulfonilureias (risco hipoglicemia grave). PREFERIR: metformina (com TFG monitorada), DPP-4 (perfil seguro), SGLT-2 (se sem hipotensão postural), GLP-1 (se sem perda excessiva de peso)", o:"Meta HbA1c <7,5-8% em idoso saudável; <8-8,5% em frágil."},

{etapa:"adj", d:"DRC (TFG <60): metformina TFG 30-45 reduzir 50%, TFG <30 contraindicada. PREFERIR: SGLT-2 (nefroprotetor), GLP-1 (sem ajuste até TFG 15), DPP-4 (ajustar)", o:"Sulfonilureia: contraindicada em TFG <30 (hipoglicemia). Pioglitazona: cuidado (retenção)."},

{etapa:"adj", d:"OBESIDADE significativa (IMC ≥30, especialmente ≥35): GLP-1 (semaglutida) ou TIRZEPATIDA são 1ª escolha — perda 5-22%. AVALIAR cirurgia bariátrica em IMC ≥35 + DM2", o:"Pioglitazona, sulfonilureia, insulina causam ganho de peso — evitar quando possível."},

{etapa:"adj", d:"NASH (esteato-hepatite não-alcoólica) + DM2: PIOGLITAZONA tem benefício histológico (PIVENS). SGLT-2 e GLP-1 também melhoram esteatose", o:"Avaliar TGO/TGP + elastografia (fibroscan) em DM2 + obesidade."},

{etapa:"adj", d:"PEDIATRIA — DM2 (crescente em adolescentes obesos): METFORMINA é 1ª linha (≥10 anos). Insulina se HbA1c muito alta. Liraglutida e empagliflozina aprovadas FDA ≥10a", o:"MEV é fundamental. Educação familiar."},

// ============== HIPOGLICEMIA ==============
{etapa:"adj", d:"⚠ HIPOGLICEMIA: glicemia <70 mg/dL. Classificar: nível 1 (70-54), nível 2 (<54 — grave bioquímica), nível 3 (alteração consciência — grave clínica)", o:""},

{etapa:"adj", d:"MANEJO HIPOGLICEMIA LEVE (paciente consciente): 15 g de CHO de absorção rápida (3 balas, 1 sachê glicose, 150 mL suco), reavaliar 15 min. Se persistir, repetir. Após: refeição completa", o:"Regra dos 15 (15 g, 15 min). Manter HGT pós-correção."},

{etapa:"adj", d:"HIPOGLICEMIA GRAVE (inconsciente / convulsão): GLICOSE 50% 50 mL IV em 5 min (após tiamina se etilista) OU GLUCAGON 1 mg IM/SC (em casa). Após: BIC glicose 5-10% se sulfonilureia (risco prolongado)", o:"Em paciente com glibenclamida: internar para BIC glicose 24-48h (hipoglicemia recorrente)."},

{etapa:"adj", d:"PREVENÇÃO: educação, evitar drogas de alto risco (glibenclamida, insulina sem ajuste), reduzir álcool em jejum, identificar hipoglicemia inadvertida", o:"Em paciente com hipoglicemia inadvertida: relaxar meta HbA1c, considerar CGM."},

// ============== EMERGÊNCIAS — CAD E EHH ==============
{etapa:"adj", d:"⚠ CETOACIDOSE DIABÉTICA (CAD): glicemia >250 mg/dL (ou euglicêmica em SGLT-2) + cetonas + acidose (pH <7,3, bicarb <15). Mais em DM1, mas em DM2 grave também", o:""},

{etapa:"adj", d:"CAD — manejo: (1) HIDRATAÇÃO SF 0,9% 1L em 1h + 500 mL/h depois; (2) INSULINA REGULAR 0,1 U/kg IV bolus + 0,1 U/kg/h BIC; (3) K+ — reposição se K<5,5 (BIC 20-40 mEq/L); (4) bicarbonato APENAS se pH<6,9", o:"Não cessar insulina BIC até pH normalizar + bicarbonato >18 + ânion gap normal. Transição para SC apenas após resolução."},

{etapa:"adj", d:"ESTADO HIPERGLICÊMICO HIPEROSMOLAR (EHH): glicemia >600 + osmolaridade >320 + ALTERAÇÃO consciência + SEM cetose significativa. Tipicamente em IDOSO com DM2 + infecção/desidratação", o:""},

{etapa:"adj", d:"EHH — manejo: hidratação MAIS AGRESSIVA (déficit pode ser 8-12L), insulina mais cautelosa (queda lenta), K+, identificar gatilho (infecção em 60%)", o:"Mortalidade EHH (15-20%) > CAD (~1%) — pacientes mais frágeis."},

// ============== METAS E SEGUIMENTO ==============
{etapa:"alta", d:"⚠ SEGUIMENTO REGULAR — DM2 controlada: retorno 3-6 meses. DM2 em ajuste: retorno 1-3 meses. DM2 instável: mensal", o:""},

{etapa:"alta", d:"AVALIAÇÃO ANUAL completa: HbA1c 2-4×/ano (3-6/6m); RAC anual; fundoscopia anual; exame de pés anual; perfil lipídico anual; ECG; pressão arterial", o:"Rastreio LOA é fundamental — complicações são preveníveis com controle."},

{etapa:"alta", d:"MANEJO INTEGRADO de RISCO CV: HAS (meta <130/80), dislipidemia (LDL <70 em alto RCV, <55 em muito alto), aspirina em prevenção SECUNDÁRIA, cessar tabagismo", o:"Tratamento de DM2 isolado é INSUFICIENTE — manejo do RCV global salva vidas."},

{etapa:"alta", d:"VACINAÇÃO em DM2: INFLUENZA anual + PNEUMOCÓCICA (13v + 23v, esquema sequencial) + dT/dTpa + HEPATITE B (se susceptível) + HERPES ZOSTER (≥50a) + COVID-19", o:"DM2 = imunossupressão relativa, risco infeccioso aumentado."},

{etapa:"alta", d:"REMISSÃO de DM2: possível com perda de peso significativa (≥10-15 kg), especialmente pós-bariátrica ou com GLP-1/tirzepatida. Não 'curado' — risco de recorrência se ganhar peso", o:"DiRECT trial: 46% remissão com perda >15 kg em 1 ano."},

{etapa:"alta", d:"PRÓXIMOS PASSOS — encaminhamento à especialidade: (1) DM1 ou autoimune; (2) HbA1c >10% persistente; (3) hipoglicemia inadvertida grave; (4) complicações avançadas (retinopatia proliferativa, IRC estágio ≥4, pé diabético); (5) gestação/pré-gestacional; (6) bomba/CGM", o:"Endocrinologia. Manter acompanhamento conjunto na APS."},
],

alertas:[
{nivel:"crit", txt:"CETOACIDOSE EUGLICÊMICA em uso de SGLT-2: paciente com sintomas cetose (náusea, vômito, dor abdominal, dispneia) mas glicemia próxima do normal. SUSPEITAR + dosar cetonas + gasometria. Fatores: jejum prolongado, álcool, infecção, redução insulina. SUSPENDER SGLT-2 + insulina + glicose + hidratação."},
{nivel:"crit", txt:"CIRCUNSTÂNCIAS para SUSPENDER METFORMINA: contraste iodado IV (48h antes/depois), sepse, IAM, IC descompensada, hipóxia, cirurgia maior, gastroenterite com desidratação. Reintroduzir após estabilização. Risco ACIDOSE LÁTICA."},
{nivel:"crit", txt:"HIPOGLICEMIA GRAVE EM IDOSO com glibenclamida: pode durar HORAS-DIAS. TRATAR: glicose 50% IV + BIC glicose 5% 24-48h. INTERNAR. PREFERIR outras classes em idoso."},
{nivel:"crit", txt:"GESTAÇÃO + DM2: SGLT-2, GLP-1, sulfonilureias (exceto glibenclamida em DMG), DPP-4 são PROIBIDOS. INSULINA é padrão-ouro. Metformina pode ser usada em casos específicos."},
{nivel:"warn", txt:"⚠ SBD 2025 — METFORMINA NÃO É MAIS EXCLUSIVA em 1ª linha. Em paciente com RCV alto/muito alto: iniciar SGLT-2 ou GLP-1 PRECOCEMENTE (mesmo se HbA1c baixa)."},
{nivel:"warn", txt:"GLP-1/TIRZEPATIDA + sintomas GI persistentes >4-8 sem: avaliar gastroparesia diabética. Titulação lenta reduz EA. Pancreatite: suspender se dor abdominal súbita + amilase/lipase ↑."},
{nivel:"warn", txt:"DM2 + IC com FE REDUZIDA: pioglitazona é CONTRAINDICADA (retenção líquida → piora IC). Preferir SGLT-2 (pilar moderno)."},
{nivel:"warn", txt:"DM2 + DRC: metformina ajustar/contraindicada conforme TFG. SGLT-2 é nefroprotetor — manter mesmo com TFG 25-30. GLP-1: sem ajuste."},
{nivel:"info", txt:"SBD 2025 RASTREIO: a partir de 35 anos (era 45 anos). Em fatores de risco: antes."},
{nivel:"info", txt:"PERDA DE PESO em DM2 obeso: cada 1 kg ≈ 0,1% redução HbA1c. Cirurgia bariátrica em IMC ≥35 + DM2 = melhor desfecho metabólico (remissão em ~60% em 5 anos)."},
],

fluxo:null,
diretriz:"SBD 2025 (Diretriz Brasileira). ADA Standards 2025. EASD-ADA Joint Statement. DAPA-HF/CKD. EMPA-REG OUTCOME. SUSTAIN-6. PCDT MS DM2."
},
{id:"dislipidemia", nome:"Dislipidemia", sis:"endo", grav:"baixa",
cid:"E78", ciap:"T93",
sin:["Colesterol alto","Hipercolesterolemia","Hiperlipidemia","Hipertrigliceridemia","LDL alto","Dislipidemia mista"],

def:"Alteração do perfil lipídico — ↑ LDL e/ou ↑ TG e/ou ↓ HDL. Principal contribuinte modificável para aterosclerose. Tratamento NÃO é por número, mas por RISCO CV individual (estratificação determina alvo terapêutico).",

quadro:[
"ASSINTOMÁTICA na grande maioria — detectada em rastreio ou após complicação CV",
"Sinais físicos em dislipidemia FAMILIAR/grave: xantomas tendinosos (cotovelo, Achilles), xantelasmas (pálpebras), arco corneano <45a, xantomas eruptivos em TG >1000",
"HIPERTRIGLICERIDEMIA grave (TG >1000): risco de PANCREATITE AGUDA, lipemia retiniana, hepatomegalia (esteatose)",
"Sintomas de doença vascular instalada: angina, claudicação, AVC, IAM",
"Em homozigoto hipercolesterolemia familiar (raro): doença coronariana antes dos 20 anos",
],

diag:[
"⚠ NÃO HÁ 'valor de corte' para diagnóstico isolado — é estratificação de risco",
"RASTREAMENTO: ≥20 anos a cada 5 anos; mais cedo se fatores de risco",
"PERFIL LIPÍDICO COMPLETO: CT, HDL, LDL (calculado ou direto), TG, não-HDL",
"JEJUM 12h tradicional, mas guidelines recentes aceitam sem jejum (exceto se TG >400 — repetir em jejum)",
"NÃO-HDL = CT − HDL (melhor preditor CV que LDL, especialmente em TG alto)",
"Lp(a) — dosagem 1× na vida em paciente com história familiar de DCV precoce ou DCV pessoal precoce",
"ApoB — dosagem opcional (mais acurada que LDL em dislipidemia mista)",
"CALCULADORA de RCV: Brasil — escore SBC; ESC SCORE2/SCORE2-OP; EUA — PREVENT score ou Pooled Cohort Equations",
],

exames:[
"Perfil lipídico completo (CT, HDL, LDL, TG, não-HDL)",
"Glicemia jejum + HbA1c (rastreio DM2 — comum coexistir)",
"TSH (hipotireoidismo causa dislipidemia 2ária)",
"Creatinina + TFG (DRC altera perfil + ajusta dose de estatina)",
"TGO/TGP basal (antes de iniciar estatina)",
"CK basal APENAS se risco de miopatia (idoso frágil, hipotireoidismo, atleta, asiático)",
"Microalbuminúria/RAC se HAS+DM",
"ECG basal em ≥40 anos ou fator de risco",
"Escore de cálcio coronariano (ECC) em RCV intermediário para reclassificar — exame promissor",
],

rx:[
{etapa:"inicial", d:"⚠ 1º PASSO: ESTRATIFICAR RISCO CV — define ALVOS de LDL", o:"Tratamento NÃO é pelo número absoluto, mas pelo risco individual."},

{etapa:"inicial", d:"RISCO MUITO ALTO (LDL alvo <50 mg/dL, ESC sugere <40): DCV aterosclerótica ESTABELECIDA (DAC, AVC, DAOP) OU DM + LOA OU DM ≥10a OU IRC TFG <30 OU LDL >190 + 1 FRCV OU HF com evento", o:"Estatina alta potência + considerar combinação (ezetimiba, PCSK9 se ainda fora do alvo)."},

{etapa:"inicial", d:"RISCO ALTO (LDL alvo <70 mg/dL): DM2 SEM LOA com >10a OU múltiplos FRCV OU IRC G3a/G3b OU LDL 160-189 OU escore SBC alto", o:"Estatina alta potência ou moderada conforme tolerância."},

{etapa:"inicial", d:"RISCO INTERMEDIÁRIO (LDL alvo <100 mg/dL): escore SBC 5-20% OU 1-2 FRCV", o:"Estatina moderada potência. Considerar ECC se reclassificação útil."},

{etapa:"inicial", d:"RISCO BAIXO (LDL alvo <130 mg/dL): escore SBC <5% + sem FRCV", o:"MEV primeiro. Estatina só em LDL alto persistente após MEV."},

{etapa:"inicial", d:"MUDANÇAS DE ESTILO DE VIDA (MEV) — aplicar SEMPRE, independente de medicação", o:"Pode reduzir LDL 10-20%, TG 30-50%, ↑ HDL 5-10%."},

{etapa:"inicial", d:"DIETA: padrão MEDITERRÂNEA ou DASH. ↓ gordura saturada <7% das calorias. ↓ trans <1%. ↑ fibras 25-40 g/d. ↑ esteróis vegetais 2 g/d. ↑ frutas, legumes, peixe, leguminosas, oleaginosas", o:"Redução LDL 5-15%."},

{etapa:"inicial", d:"PESO: perda 5-10% se IMC ≥25 (especialmente em TG alto e HDL baixo)", o:"Cada 10 kg de perda: TG ↓ ~20-30%, HDL ↑ ~5%."},

{etapa:"inicial", d:"ATIVIDADE FÍSICA: 150 min/sem aeróbica moderada + 2-3× exercício resistido", o:"↑ HDL 5-10%, ↓ TG 10-20%."},

{etapa:"inicial", d:"CESSAR TABAGISMO + álcool moderado (excesso ↑ TG) + manejar DM/HAS/IRC concomitantes", o:"Tabagismo é fator de risco maior — cessar tem benefício enorme."},

{etapa:"escala", d:"⚠ ESTATINAS são 1ª LINHA — reduzem LDL 30-60% e desfechos CV (NNT 50-100 em prevenção 1ª, 25-50 em 2ª)", o:""},

{etapa:"escala", d:"ALTA POTÊNCIA (LDL ↓ ≥50%): ATORVASTATINA 40-80 mg/d OU ROSUVASTATINA 20-40 mg/d", o:"Indicação: risco MUITO ALTO ou ALTO. Padrão em prevenção 2ária (pós-IAM, AVC, DAOP)."},

{etapa:"escala", d:"MODERADA POTÊNCIA (LDL ↓ 30-50%): ATORVASTATINA 10-20 mg/d OU ROSUVASTATINA 5-10 mg/d OU SINVASTATINA 20-40 mg/d", o:"Indicação: risco INTERMEDIÁRIO. Sinvastatina é opção SUS."},

{etapa:"escala", d:"BAIXA POTÊNCIA: SINVASTATINA 10 mg/d, PRAVASTATINA 10-20 mg/d, FLUVASTATINA 20-40 mg/d", o:"Raramente usada — apenas em paciente com baixo risco + intolerância à dose maior."},

{etapa:"escala", d:"EXEMPLO 1 (pós-IAM, LDL alvo <50): ATORVASTATINA 40-80 mg VO 1×/d", o:"Reavaliar 6-8 sem. Se não atingir <50: somar ezetimiba 10 mg → se ainda não: PCSK9."},

{etapa:"escala", d:"EXEMPLO 2 (DM2 + alto RCV, LDL alvo <70): ROSUVASTATINA 20 mg VO 1×/d", o:"Vantagem: T½ longa. Em DM2 estatina é PADRÃO independente do LDL basal."},

{etapa:"escala", d:"EXEMPLO 3 (prevenção 1ª, RCV intermediário): SINVASTATINA 20-40 mg VO À NOITE", o:"Sinvastatina deve ser tomada à noite — biossíntese de colesterol é noturna. Atorva/rosuva: qualquer hora."},

{etapa:"escala", d:"⚠ SE LDL acima do alvo após DOSE MÁXIMA de estatina tolerada: ADICIONAR EZETIMIBA 10 mg/d (reduz LDL adicional 18-22%)", o:"IMPROVE-IT trial: ezetimiba + estatina REDUZIU desfechos CV vs estatina isolada em pós-SCA. PADRÃO em 2ª linha."},

{etapa:"escala", d:"SE AINDA fora do alvo: INIBIDOR PCSK9 (Evolocumabe/Repatha 140 mg SC 2/2sem OU Alirocumabe/Praluent 75-150 mg SC 2/2sem)", o:"Reduz LDL adicional 50-60%. Disponibilidade: privada/seguro/judicialização SUS. FOURIER, ODYSSEY OUTCOMES."},

{etapa:"escala", d:"INCLISIRAN (Leqvio): siRNA SC 2×/ano após dose de carga. Não disponível Brasil 2025/2026", o:"Aprovado FDA/EMA. Aguardando disponibilidade BR."},

{etapa:"escala", d:"ÁCIDO BEMPEDOICO (Nexletol — não disponível BR 2025/2026): VO, reduz LDL 17-25%. Útil em intolerância a estatina", o:"CLEAR Outcomes — redução modesta de desfechos."},

{etapa:"adj", d:"⚠ HIPERTRIGLICERIDEMIA grave (TG ≥500): risco PANCREATITE AGUDA — TRATAR mesmo sem alto RCV", o:""},

{etapa:"adj", d:"TG 150-499 (leve-moderada): otimizar MEV + estatina (alvo principal ainda é LDL/não-HDL)", o:"Não-HDL alvo = LDL alvo + 30. Em alto RCV + TG ≥150 em uso de estatina: REDUCE-IT — considerar icosapent etil."},

{etapa:"adj", d:"TG 500-1000: FENOFIBRATO 160-200 mg/d + ômega-3 4 g/d + MEV (peso, álcool zero, DM controlado, dieta low-carb leve)", o:"Risco pancreatite. Avaliar causa 2ária (DM descompensado, álcool, hipotireoidismo, drogas)."},

{etapa:"adj", d:"TG >1000 (extremo, risco iminente de pancreatite): FENOFIBRATO + ômega-3 + insulina (se DM) + dieta restritiva, álcool ZERO. Casos extremos: plasmaférese", o:"Encaminhar endocrino. Investigar causa familiar (deficiência LPL, ApoCII)."},

{etapa:"adj", d:"NÃO COMBINAR GEMFIBROZILA com estatina (rabdomiólise 15× maior). FENOFIBRATO + estatina é aceitável MAS monitor CK", o:"Gemfibrozila praticamente não usada mais."},

{etapa:"adj", d:"HDL BAIXO (<40 H, <50 M) ISOLADO: NÃO há droga eficaz para ↑ HDL e reduzir desfechos CV", o:"Foco: MEV (atividade física, perda peso, cessar tabagismo, álcool moderado). HDL baixo é MARCADOR de risco, não alvo terapêutico."},

{etapa:"adj", d:"⚠ Suspeitar HIPERCOLESTEROLEMIA FAMILIAR se: LDL >190 sem causa 2ária OU LDL >160 + DCV precoce familiar OU xantomas/arco corneano <45a", o:"Prevalência 1:250 (heterozigota). RASTREAR FAMILIARES de 1º grau."},

{etapa:"adj", d:"HF heterozigota: estatina ALTA POTÊNCIA precoce + ezetimiba + frequentemente PCSK9 (LDL <70 em prevenção 1ª, <50 em 2ª)", o:"Início de tratamento desde 8-10 anos em casos selecionados."},

{etapa:"adj", d:"HF homozigota (raríssimo): LDL >500, DAC antes dos 20 anos. Tratamento: PCSK9 + aférese LDL + lomitapida + evinacumab", o:"Encaminhar centro de referência."},

{etapa:"adj", d:"DM2 + DISLIPIDEMIA: estatina é PADRÃO independente do LDL basal. Alvo LDL <70 (alto) ou <50 (muito alto). Considerar SGLT-2/GLP-1", o:"DBHA/SBD 2025: pacote integrado HAS + DM + dislipidemia = redução máxima de mortalidade CV."},

{etapa:"adj", d:"IRC + DISLIPIDEMIA: estatina em TFG ≥30 (atorvastatina, fluvastatina — não excretadas renalmente). TFG <30 sem diálise: dose baixa-moderada. DIÁLISE: NÃO iniciar (4D trial)", o:"KDIGO 2024."},

{etapa:"adj", d:"GESTAÇÃO + DISLIPIDEMIA: ESTATINAS CONTRAINDICADAS (categoria X). Suspender pré-concepção. MEV + ômega-3 + colestiramina (resina, segura) se necessário", o:"Hipertrigliceridemia grave na gestação: insulina + dieta + plasmaférese."},

{etapa:"adj", d:"IDOSO ≥75 anos: estatina em prevenção 1ª — decisão compartilhada. Em prevenção 2ária: manter. Reduzir dose se intolerância", o:"Avaliar fragilidade + expectativa de vida."},

{etapa:"adj", d:"INTOLERÂNCIA A ESTATINA (mialgia, ↑CK): (1) confirmar com washout + reintrodução; (2) trocar de estatina (rosuvastatina geralmente melhor tolerada); (3) reduzir dose; (4) dose em dias alternados; (5) ezetimiba isolada; (6) PCSK9", o:"Verdadeira intolerância 1-5%. Efeito 'nocebo' significativo."},

{etapa:"alta", d:"⚠ METAS DE LDL — SBC 2017 + AHA 2018 + ESC 2019", o:""},

{etapa:"alta", d:"MUITO ALTO RCV: LDL <50 mg/dL (ESC: <40). Não-HDL <80. ApoB <65", o:"DCV estabelecida, DM com LOA, IRC TFG <30, HF com evento."},

{etapa:"alta", d:"ALTO RCV: LDL <70 mg/dL. Não-HDL <100. ApoB <80", o:"DM ≥10a, IRC G3, LDL 160-189, múltiplos FRCV."},

{etapa:"alta", d:"INTERMEDIÁRIO: LDL <100. Não-HDL <130", o:"1-2 FRCV ou escore 5-20%."},

{etapa:"alta", d:"BAIXO: LDL <130", o:"Sem FRCV maiores."},

{etapa:"alta", d:"SEGUIMENTO: perfil lipídico 4-12 sem após início/troca. Após meta: anual", o:"Aderência sempre. Reforçar MEV."},

{etapa:"alta", d:"MONITOR LABORATORIAL: TGO/TGP basal + 8-12 sem + anual. CK apenas se sintomas. NÃO monitorar de rotina sem sintomas", o:"↑ TGO/TGP até 3× LSN sem sintomas: manter. >3× LSN: investigar/suspender."},

{etapa:"alta", d:"PRÓXIMOS PASSOS — encaminhamento: (1) hipercolesterolemia familiar suspeita; (2) hipertrigliceridemia refratária; (3) intolerância a múltiplas estatinas; (4) PCSK9 com dificuldade de acesso", o:"Cardiologia, endocrinologia ou ambulatório especializado."},
],

alertas:[
{nivel:"crit", txt:"HIPERTRIGLICERIDEMIA grave (TG >500-1000): RISCO PANCREATITE AGUDA. Tratar mesmo sem outro RCV. Fenofibrato + ômega-3 + MEV agressiva."},
{nivel:"crit", txt:"GESTAÇÃO: ESTATINAS CONTRAINDICADAS (categoria X). Suspender 3 meses pré-concepção."},
{nivel:"crit", txt:"NUNCA combinar GEMFIBROZILA com ESTATINA — rabdomiólise 15× maior. Fenofibrato + estatina é aceitável MAS monitor CK."},
{nivel:"crit", txt:"SINVASTATINA 80 mg: CONTRAINDICADA (FDA 2011 — risco miopatia 4× maior). Limitar a 40 mg/d. Se LDL alvo não atingido: TROCAR estatina."},
{nivel:"warn", txt:"TRATAMENTO NÃO É POR NÚMERO ISOLADO. Estratificar RCV ANTES de iniciar — alvo varia conforme risco."},
{nivel:"warn", txt:"INTERAÇÃO crítica: sinvastatina/lovastatina + diltiazem/verapamil/eritromicina/itraconazol = ↑ estatina (rabdomiólise). Em paciente com BCC não-DHP: rosuvastatina ou pravastatina."},
{nivel:"warn", txt:"DCV estabelecida: NÃO há LDL muito baixo — quanto menor, menor o risco (IMPROVE-IT, FOURIER, ODYSSEY)."},
{nivel:"warn", txt:"INTOLERÂNCIA A ESTATINA: confirmar com washout + reexposição. Efeito NOCEBO significativo (até 30% das queixas)."},
{nivel:"info", txt:"NÃO-HDL é alvo SECUNDÁRIO útil em TG alto. Não-HDL alvo = LDL alvo + 30."},
{nivel:"info", txt:"ÔMEGA-3 OTC genérico NÃO tem evidência CV. Apenas ICOSAPENT ETIL (Vascepa, não BR) reduz MACE (REDUCE-IT)."},
],

fluxo:null,
diretriz:"Atualização SBC Dislipidemia 2017. AHA/ACC 2018 + 2022. ESC 2019. KDIGO 2024. IMPROVE-IT. FOURIER. ODYSSEY OUTCOMES. REDUCE-IT. FIELD."
},
{
  id:"glicemia-hosp", sis:"endo", grav:"baixa",
  nome:"Controle Glicêmico Hospitalar",
  sin:["hiperglicemia","controle glicêmico","diabetes hospitalar"],
  def:"Alvo glicêmico 140–180 mg/dL em paciente hospitalizado. Hiperglicemia hospitalar (>140 sem DM prévio) tem pior prognóstico.",
  exames:["HGT 6/6h ou pré-prandial","HbA1c se desconhecida"],
  rx:[
    {etapa:"inicial", d:"Esquema basal-bolus",do:"Basal (NPH/glargina) 0,2–0,3 U/kg/d + bolus prandial (regular/lispro) 0,1 U/kg",via:"SC",o:"1ª escolha em maioria. Ajustar conforme HGT."},
    {etapa:"escala", d:"Sliding scale (correção)",do:"Insulina regular conforme glicemia",via:"SC",o:"NÃO usar sozinho. Apenas como complemento."},
    {etapa:"inicial", d:"BIC de insulina",do:"0,5–1 U/h titulada para glicemia 140–180",via:"IV",o:"UTI, choque, AVE, pós-CIR, dieta zero, hiperglicemia >250 persistente."},
  ],
  alertas:[
    {t:"warn",x:"Em jejum ou dieta zero: SUSPENDER bolus prandial; manter basal reduzida (50–80%)."},
    {t:"info",x:"Sliding scale isolado piora controle e aumenta hipoglicemia. Evitar como única estratégia."},
  ],
  fisio:"Hiperglicemia inibe função neutrofílica, ↑estresse oxidativo, ↑inflamação, ↑coagulação, prejudica cicatrização. Hipoglicemia também é deletéria (arritmias, mortalidade ↑).",
  mec:[],
  diretriz:"ADA Standards of Care 2025 (Diabetes Care 2025).",
  calcs:[],
},
{id:"hipertireoidismo", nome:"Hipertireoidismo / Tireotoxicose", sis:"endo", grav:"moderada",
cid:"E05", ciap:"T85",
sin:["Tireoide alta","Graves","Doença de Basedow","Tireotoxicose","TSH baixo","Bócio difuso tóxico"],

def:"Excesso de hormônio tireoidiano. Causa mais comum: DOENÇA DE GRAVES (autoimune, anticorpo TRAb estimulando receptor TSH). Outras: bócio multinodular tóxico, adenoma tóxico (Plummer), tireoidite (subaguda, pós-parto, induzida por amiodarona).",

quadro:[
"Hiperatividade adrenérgica: palpitação, taquicardia (FA em 10-20%), tremor fino, sudorese, intolerância ao calor, ansiedade, insônia",
"Hipercatabolismo: perda de peso COM apetite aumentado, fraqueza muscular proximal, fadiga paradoxal",
"GI: hiperdefecação, diarreia leve",
"Pele: quente e úmida, eritema palmar, queda de cabelo, prurido",
"Olho: olhar fixo, retração palpebral, lid lag (sinal de von Graefe) — em qualquer hipertireoidismo",
"ESPECÍFICO DE GRAVES: OFTALMOPATIA (exoftalmia, edema periorbital, oftalmoplegia), mixedema pré-tibial, acropaquia",
"FA: 10-20% em hipertireoidismo — INVESTIGAR TSH em TODA FA de novo diagnóstico",
"TIREOTOXICOSE: termo que engloba TODAS as causas de excesso hormonal (incluindo tireoidite, exógeno)",
"CRISE TIREOIDIANA (raro, mortalidade 10-30%): febre alta, taquicardia >140, agitação, vômito, diarreia, IC, alteração consciência",
],

diag:[
"TSH SUPRIMIDO (<0,1) + T4 livre ↑ e/ou T3 livre ↑",
"TSH suprimido + T4L/T3L NORMAIS = HIPERTIREOIDISMO SUBCLÍNICO",
"TSH NORMAL/ALTO + T4L ALTO: suspeitar tumor hipofisário produtor TSH ou resistência (raríssimo)",
"TRAb (anti-receptor de TSH): POSITIVO em DOENÇA DE GRAVES — confirma diagnóstico (não precisa cintilografia se TRAb+)",
"Cintilografia tireoide com I-131 ou Tc-99m: captação difusa AUMENTADA = Graves; captação NODULAR = adenoma/bócio; captação BAIXA = tireoidite, exógeno, gestação (no jejum 12h)",
"USG tireoide: bócio difuso (Graves), nódulos (adenoma/multinodular)",
"Anti-TPO/Anti-Tg podem ser positivos em Graves (sobreposição com Hashimoto)",
"TRAb é o mais ESPECÍFICO para Graves",
],

exames:[
"TSH (rastreio)",
"T4 livre + T3 livre (confirmação + classificar)",
"TRAb (especialmente se suspeita Graves — confirma diagnóstico)",
"Anti-TPO (sobreposição com tireoidite autoimune)",
"USG tireoide + Doppler (vascularização ↑ em Graves)",
"Cintilografia I-131 ou Tc-99m (diferencial entre Graves, multinodular, adenoma, tireoidite — NÃO fazer em gestante/lactante)",
"ECG (FA, taquicardia, sinais de cardiopatia tireotóxica)",
"Hemograma (linfocitose, anemia leve)",
"Função hepática (T4 elevado pode ↑ TGO/TGP leve)",
"Glicemia (intolerância à glicose comum)",
"β-HCG em mulher fértil (hipertireoidismo gestacional fisiológico, mola)",
],

rx:[
{etapa:"inicial", d:"⚠ 3 OPÇÕES DE TRATAMENTO DEFINITIVO em GRAVES: (1) anti-tireoidianos; (2) radioiodo; (3) tireoidectomia", o:"Escolha conforme: idade, gravidade, gestação, oftalmopatia, preferência paciente, comorbidades."},

{etapa:"escala", d:"METIMAZOL é 1ª LINHA (anti-tireoidiano de escolha)", o:""},

{etapa:"escala", d:"METIMAZOL — dose conforme gravidade: hipertireoidismo LEVE (T4L 1-1,5× LSN): 10-15 mg/d 1×/d. MODERADO (1,5-2× LSN): 20-30 mg/d. GRAVE (>2-3× LSN): 30-40 mg/d em 2-3 tomadas", o:"Dose inicial de 15-30 mg/d (1×/d) cobre maioria dos casos. Resposta em 4-8 sem. Manutenção: 5-15 mg/d."},

{etapa:"escala", d:"PROPILTIOURACIL (PTU) — 2ª linha (alternativa ao metimazol)", o:""},

{etapa:"escala", d:"PROPILTIOURACIL: 300-450 mg/d em 3 tomadas (100-150 mg 8/8h). Manutenção: 50-150 mg/d", o:"INDICAÇÕES ESPECÍFICAS de PTU sobre metimazol: (1) 1º TRIMESTRE de gestação (metimazol = aplasia cutis fetal); (2) CRISE TIREOIDIANA (PTU bloqueia conversão T4→T3 — vantagem aguda); (3) reação adversa leve ao metimazol."},

{etapa:"escala", d:"PROPRANOLOL — controle adrenérgico SIMULTÂNEO ao anti-tireoidiano", o:"40-120 mg VO 6/6h ou 8/8h. Reduz sintomas (taquicardia, tremor, ansiedade) em 2-7 dias. Em asma: usar β1-seletivo (atenolol, bisoprolol) ou diltiazem/clonidina."},

{etapa:"escala", d:"DOENÇA DE GRAVES — duração do tratamento medicamentoso: 12-18 MESES, depois tentar suspender (probabilidade de remissão definitiva ~30-50%)", o:"Predição de remissão: TRAb baixo ao final, bócio pequeno, T4 levemente alterado. Se recidiva: ablação (radioiodo) ou tireoidectomia."},

{etapa:"escala", d:"RADIOIODO (I-131) — ablação tireoidiana — dose conforme tamanho/captação (geralmente 10-15 mCi)", o:"Eficácia >90%. Resultado: hipotireoidismo permanente em maioria (esperado e desejado). CONTRAINDICAÇÕES: gestação, lactação (interromper 4-6 sem antes), oftalmopatia ATIVA grave (pode piorar), CA tireoide suspeito."},

{etapa:"escala", d:"TIREOIDECTOMIA — total ou subtotal. Cirurgião experiente", o:"INDICAÇÕES: bócio muito grande (sintomas compressivos), gestação com hipertireoidismo grave refratário, oftalmopatia ATIVA grave, recidiva após tentativa medicamentosa, preferência paciente."},

{etapa:"adj", d:"⚠ CRISE TIREOIDIANA (emergência): TRATAMENTO AGRESSIVO multimodal em UTI", o:""},

{etapa:"adj", d:"CRISE — pacote terapêutico (todos simultaneamente): (1) PTU 200-400 mg VO/SNG 4/4h (preferível ao metimazol em crise — bloqueia conversão T4→T3); (2) PROPRANOLOL 60-80 mg VO 4/4h ou 1 mg IV (reduz adrenérgico + ↓ T4→T3); (3) IODETO (Lugol 8 gotas 6/6h OU iodeto de potássio 1g IV) — 1h APÓS PTU (efeito Wolff-Chaikoff); (4) HIDROCORTISONA 100 mg IV 8/8h (reduz conversão T4→T3 + suporte adrenal); (5) suporte (febre — paracetamol, NÃO AAS!, hidratação, controle FC, identificar gatilho)", o:"Mortalidade 10-30%. Gatilhos: cirurgia em paciente não preparado, infecção, IAM, parto, sobrecarga iodada, retirada abrupta de anti-tireoidiano."},

{etapa:"adj", d:"NÃO USAR AAS/SALICILATOS em crise — deslocam T4 da albumina, piorando tireotoxicose. Usar paracetamol", o:""},

{etapa:"adj", d:"TIREOIDITE SUBAGUDA (Quervain) — quadro de dor cervical + tireotoxicose transitória. Tratar com AINE (ou prednisona se grave) + propranolol", o:"NÃO usar anti-tireoidianos (não há síntese aumentada). Captação cintilográfica BAIXA. VHS muito alta. Evolui em 4-8 sem para eutireoidismo (alguns evoluem para hipotireoidismo)."},

{etapa:"adj", d:"GESTAÇÃO + HIPERTIREOIDISMO: PTU no 1º TRIMESTRE (15-450 mg/d) → trocar para METIMAZOL no 2º trimestre (5-30 mg/d). Alvos: T4L no terço superior do normal", o:"Não fazer radioiodo (atravessa placenta). Cirurgia apenas em refratariedade no 2º trim. TRAb materno passa placenta — risco hipertireoidismo neonatal."},

{etapa:"adj", d:"HIPERTIREOIDISMO INDUZIDO POR AMIODARONA — 2 tipos: (1) Tipo 1: tireoide pré-existente + sobrecarga iodo → tratar com metimazol + perclorato; (2) Tipo 2: tireoidite destrutiva → tratar com corticoide", o:"Diferenciar com captação (baixa em ambos), Doppler (vascularização ↓ tipo 2), IL-6 (↑ tipo 2). Suspender amiodarona se possível."},

{etapa:"adj", d:"OFTALMOPATIA DE GRAVES — tratamento separado: (1) ativa leve: corticoide tópico + lágrimas; (2) ativa moderada-grave: metilprednisolona IV pulsada (4,5-7,5 g em 12 sem); (3) refratária: teprotumumabe (Tepezza — não BR); (4) sequelas: cirurgia descompressiva", o:"Tabagismo PIORA significativamente — cessar é fundamental. Radioiodo pode PIORAR oftalmopatia ativa — preferir metimazol nesse caso."},

{etapa:"alta", d:"⚠ ALVOS: TSH 0,4-4,0; T4L e T3L na metade inferior do normal (ou normais)", o:""},

{etapa:"alta", d:"SEGUIMENTO sob anti-tireoidiano: T4L + T3L a cada 4-6 sem até estabilizar, depois 3 meses; TSH leva 6 meses para normalizar após hipertireoidismo prolongado", o:"NÃO basear ajuste só em TSH no início — pode persistir suprimido por meses."},

{etapa:"alta", d:"PÓS-RADIOIODO ou TIREOIDECTOMIA: vigiar hipotireoidismo (TSH 4-6 sem, depois 3 meses), iniciar levotiroxina quando T4L ↓ ou sintomático", o:"~80-90% desenvolvem hipotireoidismo nos próximos 1-2 anos."},

{etapa:"alta", d:"PRÓXIMOS PASSOS — encaminhamento à endocrinologia: (1) GRAVES — manejo de longo prazo, TRAb +, oftalmopatia; (2) crise tireoidiana; (3) gestação; (4) nódulo tireoidiano + tireotoxicose (Plummer); (5) suspeita CA tireoide", o:"Acompanhamento conjunto APS + endocrino."},
],

alertas:[
{nivel:"crit", txt:"CRISE TIREOIDIANA: emergência (mortalidade 10-30%). UTI + PTU + propranolol + iodeto (1h APÓS PTU) + hidrocortisona + suporte. Gatilhos: cirurgia, infecção, parto, sobrecarga iodada."},
{nivel:"crit", txt:"GESTAÇÃO 1º TRIMESTRE: PTU (não metimazol — risco aplasia cutis). 2º/3º trim: trocar para metimazol (PTU tem risco hepatotoxicidade)."},
{nivel:"crit", txt:"AGRANULOCITOSE: efeito raro mas GRAVE de metimazol e PTU (0,2-0,5%). Avisar paciente: SE febre súbita + dor de garganta → suspender + hemograma URGENTE. Se <500 neutrófilos: internar."},
{nivel:"crit", txt:"PTU — HEPATOTOXICIDADE FULMINANTE rara mas letal (especialmente em criança). FDA black box. Preferir metimazol exceto gestação 1º trim e crise."},
{nivel:"warn", txt:"NÃO usar AAS em crise tireoidiana — desloca T4 da albumina, piora tireotoxicose. Paracetamol."},
{nivel:"warn", txt:"FA de novo diagnóstico: DOSAR TSH SEMPRE — hipertireoidismo é causa frequente (10-20%) e reversível."},
{nivel:"warn", txt:"OFTALMOPATIA DE GRAVES + RADIOIODO: pode PIORAR oftalmopatia ativa. Em oftalmopatia ativa: preferir metimazol ou cirurgia. TABAGISMO piora — cessar é crítico."},
{nivel:"warn", txt:"HIPERTIREOIDISMO SUBCLÍNICO (TSH suprimido + T4L/T3L normais): tratar se idoso (FA, osteoporose), bócio progressivo ou sintomas. Subclínico assintomático em jovem: vigiar."},
{nivel:"info", txt:"TRAb POSITIVO = Graves. Cintilografia não é necessária se TRAb +. Cintilografia: útil em TRAb negativo (diferencial Plummer, multinodular, tireoidite)."},
],

fluxo:null,
diretriz:"ATA 2016 (American Thyroid Association — Hyperthyroidism). ATA 2017 (Gestação). SBEM 2025. Endocrine Society."
},
{
  id:"hipoglicemia", sis:"endo", grav:"alta",
  nome:"Hipoglicemia",
  sin:["hipoglicemia","hipo"],
  def:"Glicemia <70 mg/dL. Tríade de Whipple: glicemia baixa + sintomas + melhora com glicose. Em DM: <54 grave; <70 alerta.",
  exames:["HGT","Glicemia plasmática","Insulina/peptídeo C em recorrente (tumor, fictícia)"],
  rx:[
    {etapa:"inicial", d:"Sacarose VO",do:"15 g (3 sachês açúcar em 200 mL água)",via:"VO",o:"Consciente + capaz de deglutir. Reavaliar em 15 min."},
    {etapa:"escala", d:"Glicose 50%",do:"50–100 mL IV bolus",via:"IV",o:"Inconsciente. Manter SG10% se etiologia persistente (sulfonilureia)."},
    {etapa:"inicial", d:"Glucagon",do:"1 mg IM/SC",via:"IM/SC",o:"Sem acesso venoso. Não funciona em hepatopata/desnutrido (sem reserva)."},
    {etapa:"adj", d:"Tiamina",do:"100 mg IV ANTES de glicose",via:"IV",o:"OBRIGATÓRIO em etilistas, desnutridos, gestantes hiperêmese — prevenir Wernicke."},
  ],
  alertas:[
    {t:"crit",x:"Hipoglicemia por sulfonilureia (glibenclamida, glimepirida) ou insulina de longa ação: observar 24–48h após resolução — recorrência."},
    {t:"warn",x:"Sempre tiamina ANTES da glicose em alcoólatra/desnutrido."},
  ],
  fisio:"O cérebro consome ~20% da glicose corporal e não armazena glicogênio. Glicemia <55 → liberação de catecolaminas (sintomas adrenérgicos: tremor, sudorese, palpitação). <50 → neuroglicopenia (confusão, convulsão, coma).",
  mec:[
    {d:"Glucagon",x:"Hormônio pancreático — ativa adenilato ciclase nos hepatócitos → ↑AMPc → glicogenólise + gliconeogênese hepática."},
    {d:"Tiamina (B1)",x:"Cofator de enzimas do ciclo de Krebs e via das pentoses. Sua deficiência + sobrecarga de glicose → encefalopatia de Wernicke."},
  ],
  diretriz:"ADA Standards of Care 2025.",
  calcs:[],
},
{id:"hipotireoidismo", nome:"Hipotireoidismo", sis:"endo", grav:"baixa",
cid:"E03", ciap:"T86",
sin:["Tireoide baixa","Hashimoto","Tireoidite autoimune","TSH alto"],

def:"Deficiência de hormônio tireoidiano (T4/T3) — caracteriza-se por TSH alto + T4 livre baixo (primário) ou TSH baixo/normal + T4 livre baixo (central). Causa mais comum no Brasil: TIREOIDITE DE HASHIMOTO (autoimune).",

quadro:[
"INSIDIOSO — sintomas inespecíficos, frequentemente atribuídos a outras causas",
"Fadiga, sonolência, intolerância ao frio, ganho de peso (1-3 kg), constipação, pele seca/áspera, queda de cabelo, voz rouca",
"Bradicardia, hipertensão diastólica, derrame pericárdico (raro, em hipotireoidismo grave)",
"Mialgia, parestesias (síndrome do túnel do carpo associada)",
"Depressão, lentificação cognitiva, déficit de memória",
"Mulher: irregularidade menstrual (menorragia), infertilidade, galactorreia",
"COMA MIXEDEMATOSO (emergência rara): hipotermia, hipoventilação, hipotensão, hiponatremia, alteração consciência. Mortalidade 30-60%",
],

diag:[
"⚠ TSH é o teste DE TRIAGEM mais sensível (primeiro a alterar)",
"HIPOTIREOIDISMO PRIMÁRIO: TSH ↑ + T4L ↓ (ou normal em subclínico)",
"HIPOTIREOIDISMO SUBCLÍNICO: TSH ↑ (4,5-10 ou 4,5-19,9 conforme guideline) + T4L NORMAL — abordagem é controversa",
"HIPOTIREOIDISMO CENTRAL (hipofisário/hipotalâmico): TSH baixo/normal/levemente alto + T4L ↓ — raro, sempre investigar com RM se suspeitar",
"Anti-TPO (anti-tireoperoxidase): positivo em 90% das tireoidites de Hashimoto. Anti-Tg também útil",
"USG tireoide: NÃO é exame de rastreio — apenas se nódulo palpável, dor, suspeita CA",
"Considerar causa 2ária: drogas (amiodarona, lítio, sunitinibe, IFN), pós-tireoidectomia, pós-radioiodo, deficiência iodo (raro Brasil)",
],

exames:[
"TSH (rastreio + diagnóstico)",
"T4 livre (confirmação + classificar 1ário vs central)",
"Anti-TPO (autoimunidade — Hashimoto)",
"T3 livre — pouco útil em rotina; apenas em hipertireoidismo ou suspeita de T3-toxicose",
"Hemograma (anemia comum no hipotireoidismo — normo/macro)",
"Perfil lipídico (LDL elevado é comum — pode normalizar com tratamento)",
"Glicemia/HbA1c (hipotireoidismo + DM2 comum coexistir)",
"Eletrólitos (hiponatremia em hipotireoidismo grave)",
"CK (elevada em miopatia hipotireoidiana)",
"Cortisol matinal se suspeita de Addison concomitante (Schmidt)",
],

rx:[
{etapa:"inicial", d:"⚠ INDICAÇÃO de tratamento: TSH >10 OU TSH 4,5-10 com sintomas/sinais OU em gestação (mesmo subclínico)", o:"Hipotireoidismo subclínico assintomático com TSH 4,5-10: tratamento individualizado (idade, sintomas, anti-TPO, dislipidemia)."},

{etapa:"inicial", d:"NÃO TRATAR rotineiramente: TSH 4,5-10 ASSINTOMÁTICO em idoso >70 anos (cuidado com sobretratamento — FA, osteoporose)", o:"Repetir TSH em 1-3 meses antes de iniciar — variação espontânea comum."},

{etapa:"escala", d:"LEVOTIROXINA (T4) é 1ª LINHA — única opção em uso clínico", o:""},

{etapa:"escala", d:"DOSE INICIAL em adulto SAUDÁVEL <60 anos: LEVOTIROXINA 1,6 mcg/kg/d (dose plena calculada por peso ideal)", o:"Ex: 70 kg × 1,6 = 112 mcg/d → 100-112 mcg/d. Pode iniciar dose plena em adulto saudável."},

{etapa:"escala", d:"DOSE INICIAL em IDOSO ≥60a ou CARDIOPATA: 25-50 mcg/d, titular 25 mcg a cada 4-6 sem", o:"Início gradual evita precipitar angina/arritmia. Em coronariopata: 12,5-25 mcg/d inicial."},

{etapa:"escala", d:"GESTANTE: necessidade aumenta 25-50% no 1º trim. ALVO TSH <2,5 no 1º trim, <3,0 no 2º/3º. Aumentar dose 30% assim que confirmar gravidez", o:"Hipotireoidismo materno não tratado: risco abortamento, RCIU, prejuízo cognitivo fetal."},

{etapa:"escala", d:"CRIANÇA recém-nascida (hipotireoidismo congênito): 10-15 mcg/kg/d (dose alta — fundamental para neurodesenvolvimento)", o:"Triagem neonatal (teste do pezinho) é OBRIGATÓRIA. Iniciar antes de 2-3 semanas de vida."},

{etapa:"adj", d:"COMO TOMAR: levotiroxina 30-60 min ANTES do café da manhã, COM ÁGUA, em jejum estrito. Sem outros medicamentos por 4h", o:"Absorção é melhor em jejum. Comida, café, soja, fibras, cálcio, ferro, antiácidos ↓ absorção significativamente."},

{etapa:"adj", d:"INTERAÇÕES IMPORTANTES — separar 4h: ferro, cálcio, antiácidos, sucralfato, colestiramina, soja, suplementos minerais", o:"Em paciente com IBP: pode reduzir absorção — separar tomadas."},

{etapa:"adj", d:"OUTROS FÁRMACOS que ↑ necessidade de levotiroxina: rifampicina, fenitoína, carbamazepina, fenobarbital, sertralina, amiodarona (paradoxal), estrogênio (anticoncepcional/TRH)", o:"Reavaliar TSH se iniciar/parar essas drogas."},

{etapa:"adj", d:"GESTAÇÃO + HIPOTIREOIDISMO PRÉVIO: aumentar dose 25-30% (2 comprimidos extras/sem) assim que confirmar gestação. TSH cada 4 sem até 20 sem, depois cada 6-8 sem", o:"Pós-parto: voltar à dose pré-gestacional + dosar em 6 sem."},

{etapa:"adj", d:"COMA MIXEDEMATOSO (EMERGÊNCIA): UTI + LEVOTIROXINA IV 200-400 mcg bolus, depois 50-100 mcg/d + HIDROCORTISONA IV 100 mg 8/8h (antes da T4 — risco crise adrenal) + suporte (aquecimento ativo, ventilação, hidratação cautelosa)", o:"Mortalidade 30-60% mesmo com tratamento. Identificar fator precipitante (infecção, IAM, fármaco sedativo, exposição ao frio)."},

{etapa:"adj", d:"HIPOTIREOIDISMO SUBCLÍNICO (TSH 4,5-10): TRATAR se sintomático OU bócio OU dislipidemia OU infertilidade OU planejar gestação. NÃO tratar idoso >70a assintomático (risco sobretratamento)", o:"Repetir TSH em 3 meses antes de decidir."},

{etapa:"alta", d:"⚠ ALVOS de TSH (geral, não-gestante): 0,4-4,0 mUI/L (alguns laboratórios usam 0,5-4,5)", o:""},

{etapa:"alta", d:"IDOSO ≥70a: alvo TSH 4-6 mUI/L é aceitável (evitar sobretratamento — FA, osteoporose)", o:""},

{etapa:"alta", d:"PÓS-CA TIREOIDE: alvo TSH varia conforme risco — supressivo (<0,1) em alto risco, baixo (0,1-0,5) em intermediário, normal em baixo risco", o:"Discussão com endocrinologia."},

{etapa:"alta", d:"SEGUIMENTO: TSH 6-8 sem após início/ajuste de dose. Após estabilizar: 6-12 meses", o:"Dose estável raramente muda — reavaliar se sintomas, gestação, novo medicamento, perda/ganho de peso significativo."},

{etapa:"alta", d:"SOBRETRATAMENTO (TSH <0,4 com sintomas): RISCOS — FA, osteoporose (mulher pós-menopausa), angina. REDUZIR dose 12,5-25 mcg, reavaliar 6 sem", o:"Em idoso: tolerar TSH levemente alto é preferível a suprimir."},

{etapa:"alta", d:"PRÓXIMOS PASSOS — encaminhamento: (1) hipotireoidismo CENTRAL (RM); (2) suspeita Hashimoto + outras endocrinopatias (Schmidt); (3) sintomas persistentes apesar de TSH normalizado (avaliar T3, fatores associados); (4) gestação; (5) nódulo tireoidiano", o:"Endocrinologia."},
],

alertas:[
{nivel:"crit", txt:"COMA MIXEDEMATOSO é emergência (mortalidade 30-60%) — UTI + levotiroxina IV + HIDROCORTISONA ANTES (risco crise adrenal). Identificar gatilho (infecção, IAM, sedativo)."},
{nivel:"crit", txt:"GESTAÇÃO: aumentar dose 25-30% assim que confirmar gestação. TSH alvo <2,5 (1º trim), <3,0 (2º/3º). Hipo materno não tratado = risco fetal grave."},
{nivel:"crit", txt:"INICIAR EM CARDIOPATA: dose 12,5-25 mcg/d (iniciar pequeno + titular lento). Dose plena pode precipitar angina/arritmia."},
{nivel:"warn", txt:"ABSORÇÃO de levotiroxina: TOMAR EM JEJUM 30-60 min antes do café. Comida, café, ferro, cálcio, antiácidos, IBP, fibras, soja REDUZEM absorção. Separar 4h."},
{nivel:"warn", txt:"SUBCLÍNICO ASSINTOMÁTICO (TSH 4,5-10) em IDOSO >70a: NÃO tratar rotineiramente — risco sobretratamento (FA, fratura) > benefício."},
{nivel:"warn", txt:"HASHIMOTO + outras autoimunidades (DM1, Addison, vitiligo, celíaca): comum coexistir — investigar conforme sintomas (síndrome poliglandular)."},
{nivel:"info", txt:"SINTOMAS PERSISTENTES com TSH normalizado: avaliar (1) aderência, (2) tomadas corretas (jejum), (3) interações, (4) outra causa (anemia, depressão, fibromialgia)."},
],

fluxo:null,
diretriz:"ATA 2014 (American Thyroid Association). ATA 2017 (Gestação). SBEM 2025. Endocrine Society."
},
{id:"insuf-adrenal", sis:"endo", grav:"alta",
nome:"Insuficiência Adrenal Aguda (Crise Addisoniana)",
sin:["insuficiência adrenal","crise addisoniana","Addison","crise suprarrenal"],
def:"Falência aguda do córtex adrenal — hipotensão refratária + náusea/vômito + dor abdominal + hiponatremia + hipercalemia + hipoglicemia + febre. Suspeitar em corticoide crônico que interrompeu/perdeu dose em estresse, sepse, trauma.",
exames:["Glicemia capilar","Eletrólitos (hipoNa + hiperK + hipoglicemia clássicos)","Cortisol sérico (basal — coletar ANTES da reposição)","ACTH (basal — diferenciar 1ª de 2ª)","Hemograma, função renal, gaso","Hemocultura, urinocultura se febril","TC abdome se primária aguda (hemorragia adrenal — Waterhouse-Friderichsen)"],
rx:[
{etapa:"escala", d:"Hidrocortisona",do:"100 mg IV bolus → 50 mg IV 6/6h × 24h → desmame",via:"IV",o:"NÃO esperar cortisol — dar imediatamente. Hidrocortisona tem mineralocorticoide intrínseco (não precisa fludrocortisona aguda)."},
{etapa:"inicial", d:"Cristaloide",do:"SF 0,9% 1 L IV em 1h, depois 1 L IV em 2-4h",via:"IV",o:"Reposição volêmica vigorosa. Pode chegar a 3-5 L primeiras 24h."},
{etapa:"inicial", d:"Correção glicêmica",do:"Glicose 50% 50 mL IV se hipoglicemia",via:"IV",o:"Manter SG 5% após estabilizar."},
{etapa:"escala", d:"Tratar precipitante",do:"ATB se infecção, etc.",via:"—",o:"Sepse é o gatilho mais comum."},
{etapa:"alta", d:"Manutenção crônica (após crise)",do:"Hidrocortisona 15-25 mg/d divididos (2/3 manhã, 1/3 tarde) + Fludrocortisona 0,05-0,2 mg/d (se 1ª)",via:"VO",o:"Educar sobre dose de estresse: dobrar/triplicar em febre, cirurgia, gestação, trauma. Cartão de identificação."},
],
alertas:[
{t:"crit",x:"NÃO ESPERAR cortisol — coletar e tratar empiricamente em hipotensão refratária + hipoNa + hiperK + corticoide crônico recente."},
{t:"crit",x:"Síndrome de Waterhouse-Friderichsen: hemorragia adrenal bilateral em sepse (meningococo, pseudomonas) → choque refratário + petéquias + insuficiência adrenal."},
{t:"warn",x:"Suspensão abrupta de corticoide crônico (uso >3 sem em dose ≥7,5 mg prednisona) → supressão eixo. Desmame gradual ou cobertura de stress."},
],
fisio:"Primária (Addison): destruição córtex adrenal — autoimune (70% adultos), TB (BR), HIV, hemorragia, metástase. Manifesta-se com falta de cortisol E aldosterona → hipoNa + hiperK + hiperpigmentação (↑ACTH/MSH). Secundária: doença hipotálamo-hipófise → só falta cortisol (aldosterona preservada — pouca hipercalemia/hipotensão menos grave). Mais comum: SUSPENSÃO de corticoide crônico (eixo suprimido).",
mec:[
{d:"Hidrocortisona",x:"Cortisol sintético — atua em receptores glicocorticoide (anti-inflamatório, gliconeogênese, sensibilidade vascular a catecolaminas) e em altas doses também em mineralocorticoide (Na/K)."},
{d:"Fludrocortisona",x:"Análogo da aldosterona — ↑reabsorção Na e excreção K nos túbulos coletores."},
],
diretriz:"Endocrine Society 2016 (Bornstein SR et al., J Clin Endocrinol Metab 2016;101:364). UpToDate.",
fluxo:null,
calcs:[],
},

/* ============== HIDRO (8) ============== */

{
  id:"hipercalcemia", sis:"hidro", grav:"alta",
  nome:"Hipercalcemia",
  sin:["hipercalcemia","Ca alto"],
  def:"Ca total >10,5. Severa >14 com sintomas: \"stones, bones, abdominal moans, psychiatric overtones\". Crise hipercalcêmica >14 = emergência.",
  exames:["Ca total + iônico","Albumina","Função renal, eletrólitos, fósforo","PTH (↓ = hipercalcemia maligna; ↑ = primária)","ECG (QT curto)","RX, USG (litíase)"],
  rx:[
    {etapa:"inicial", d:"SF 0,9%",do:"200–300 mL/h × 24–48h",via:"IV",o:"PILAR. Restaura volume + ↑excreção renal de Ca. Cuidado com IC/idoso."},
    {etapa:"escala", d:"Furosemida",do:"20–40 mg IV após volemizar",via:"IV",o:"APENAS APÓS hidratação adequada. Sem furosemida = ↓ excreção renal de Ca."},
    {etapa:"escala", d:"Pamidronato",do:"60–90 mg IV em 2h",via:"IV",o:"Bisfosfonato — efeito em 2–4 dias. Hipercalcemia maligna."},
    {etapa:"escala", d:"Ácido zoledrônico",do:"4 mg IV em 15 min",via:"IV",o:"Alternativa mais potente."},
    {etapa:"escala", d:"Calcitonina",do:"4 UI/kg SC/IM 12/12h",via:"SC/IM",o:"Início rápido (4–6h) mas curto. Ponte até bisfosfonato."},
    {etapa:"escala", d:"Hemodiálise",do:"—",via:"—",o:"Ca>18 com sintomas neurológicos/cardíacos, IRC."},
  ],
  alertas:[
    {t:"crit",x:"Hipercalcemia maligna >14: tratar URGENTE. Sempre investigar neoplasia (mieloma, mama, pulmão, paratireoide)."},
  ],
  fisio:"Causas: <strong>hiperparatireoidismo primário</strong> e <strong>neoplasias</strong> (PTHrP, lise óssea) respondem por 90%. Outros: tiazida, vit D, sarcoidose, hipertireoidismo, imobilização.",
  mec:[
    {d:"Pamidronato / Zoledrônico",x:"<strong>Inibem osteoclastos</strong> (mecanismo via FPPS) → ↓reabsorção óssea → ↓liberação de Ca."},
    {d:"Calcitonina",x:"Hormônio tireoidiano — ↓atividade osteoclástica + ↑excreção renal de Ca. Taquifilaxia em 48h."},
  ],
  diretriz:"Endocrine Society 2016.",
  calcs:[],
},
{
  id:"hipercalemia", sis:"hidro", grav:"alta",
  nome:"Hipercalemia",
  sin:["hipercalemia","K alto","potássio alto"],
  def:"K⁺ >5,5 mEq/L. Grave se >6,5 OU alterações ECG (T apiculada → P achatada → QRS alargado → padrão sinusoidal → FV).",
  exames:["ECG IMEDIATO (em todo K>5,5)","Confirmar com K plasmático (excluir hemólise da amostra)","Função renal, gasometria, glicemia","CK (rabdomiólise)"],
  rx:[
    {etapa:"inicial", d:"ECG IMEDIATO (todo K>5,5)",do:"Buscar: T apiculada → P achatada → ↑PR → QRS alargado → sinusoidal → FV",via:"—",o:"PRIORIDADE absoluta. K alterado SEM ECG = risco PCR não detectado."},
    {etapa:"inicial", d:"Confirmar K plasmático",do:"Coletar 2ª amostra, sem hemólise/garroteamento",via:"—",o:"Hemólise da amostra causa pseudo-hipercalemia. Confirmar antes de tratar agressivamente em assintomático sem ECG."},
    {etapa:"inicial", d:"Suspender drogas culpadas",do:"IECA, BRA, espironolactona, AINE, heparina, trimetoprima, tacrolimus, β-bloqueador",via:"—",o:"Causa medicamentosa é frequente. Suspender o quanto antes."},
    {etapa:"escala", d:"① ESTABILIZAÇÃO MEMBRANA — Gluconato Ca 10%",do:"10 mL IV em 2-3 min, repetir 5 min se ECG persistente",via:"IV",o:"SE ECG ALTERADO. NÃO reduz K. Início 1-3 min, duração ~1h. Não atrasa outras medidas."},
    {etapa:"escala", d:"② TRANSLOCAÇÃO — Insulina + Glicose",do:"Insulina regular 10 UI + Glicose 50% 100 mL (50g) IV em 15-30 min",via:"IV",o:"↓K 0,5-1,2 mEq/L em 30-60 min. Monitorar HGT 1h depois (hipoglicemia tardia comum)."},
    {etapa:"escala", d:"② TRANSLOCAÇÃO — Salbutamol nebulizado",do:"10-20 mg NBZ (4-8× dose habitual)",via:"NBZ",o:"ADITIVO ao insulina (não substitui). Translocação β2. Pode acumular efeito."},
    {etapa:"escala", d:"③ Bicarbonato (apenas se acidose)",do:"50-100 mEq IV se pH<7,2",via:"IV",o:"APENAS em acidose metabólica. NÃO rotineiro. Pode piorar volemia."},
    {etapa:"escala", d:"④ REMOÇÃO — Furosemida (se diurese)",do:"40-80 mg IV",via:"IV",o:"Útil se função renal preservada. Promove excreção renal de K."},
    {etapa:"escala", d:"④ REMOÇÃO — Sorcal / Ciclosilicato",do:"Sorcal 15g VO 6/6h. Lokelma 10g 8/8h × 48h",via:"VO",o:"Remoção intestinal. Efeito em horas (lento). Adjuvante, não substitui medidas urgentes."},
    {etapa:"escala", d:"⑤ HEMODIÁLISE",do:"Acionar nefrologia",via:"—",o:"INDICAÇÕES: K>6,5 refratário, IRC dialítica, ECG persistente, rabdomiólise grave, sobrecarga hídrica concomitante."},
    {etapa:"adj", d:"Investigar CAUSA",do:"Função renal, BHE, drogas, rabdomiólise, hemólise, lise tumoral",via:"—",o:"CK em rabdomiólise, urina, etc. Tratar causa subjacente."},
    {etapa:"alta", d:"Prevenção secundária",do:"Dieta hipocalêmica (frutas, batata, feijão) + reavaliar IECA/BRA",via:"—",o:"Educação alimentar. Monitorização periódica em IRC, IC, DM."},
  ],
  alertas:[
    {t:"crit",x:"K>6,5 ou ECG alterado: cálcio IMEDIATO + insulina + nebulização CONJUNTAMENTE — não em sequência."},
    {t:"warn",x:"Suspender IECA/BRA/espironolactona/AINE/heparina. Trimetoprima e tacrolimus também ↑K."},
  ],
  fisio:"Causas: IRA/IRC + entrada (KCl IV, dieta), saída ↓ (IECA/BRA, espiro, AINE), translocação (acidose, rabdomiólise, hemólise, lise tumoral, hiperglicemia, β-bloqueador). O K extracelular alterado afeta gradiente de membrana → instabilidade elétrica miocárdica → arritmias letais.",
  mec:[
    {d:"Gluconato de Cálcio",x:"↑limiar de despolarização miocárdica → restaura gradiente normal e <strong>estabiliza a membrana</strong> contra hiperexcitabilidade. NÃO altera K sérico."},
    {d:"Insulina + Glicose",x:"Insulina ativa <strong>Na⁺/K⁺-ATPase</strong> → puxa K para o intracelular. Glicose previne hipoglicemia."},
    {d:"Salbutamol",x:"β2-agonista — ativa Na⁺/K⁺-ATPase via AMPc, translocação intracelular."},
    {d:"Sorcal / Lokelma",x:"Trocadores intestinais — retiram K nas fezes em troca de Na/Ca."},
  ],
  diretriz:"KDIGO Acute Hyperkalemia Conference (Clase CM et al., Kidney Int 2020;97:42–61, DOI:10.1016/j.kint.2019.09.018). Lindner G et al., Eur J Emerg Med 2020;27:329–337.",
  fluxo:"hipercalemia",
  calcs:[],
},
{
  id:"hiperna", sis:"hidro", grav:"alta",
  nome:"Hipernatremia",
  sin:["hipernatremia","Na alto","sódio alto"],
  def:"Na >145 mEq/L. Quase sempre deficit de água. Sintomas: sede, letargia, irritabilidade, convulsão (sobretudo se aguda).",
  exames:["Na sérico, osmolaridade","Volemia (clínica)","Osmolaridade urinária (pesquisar DI)","Função renal","Glicemia (DM ↑água)"],
  rx:[
    {etapa:"escala", d:"SG 5% ou SF 0,45%",do:"1 mL/kg/h",via:"IV",o:"Correção lenta — NÃO passar de 10 mEq/L em 24h. Aguda <24h pode corrigir mais rápido."},
    {etapa:"inicial", d:"Água livre VO/SNG",do:"Conforme deficit calculado",via:"VO/SNG",o:"Preferível se TGI tolerar."},
    {etapa:"escala", d:"DDAVP intranasal",do:"10–20 mcg",via:"Intranasal",o:"Diabetes insípido central."},
  ],
  alertas:[
    {t:"warn",x:"Correção rápida em hipernatremia crônica → edema cerebral. Meta: ↓0,5 mEq/L/h ou ≤10 mEq/L em 24h."},
  ],
  fisio:"Sempre déficit de água relativa ao Na. Causas: perda de água sem reposição (idosos, comatosos, perdas renais por DI, perda GI), perda hipotônica (sudorese, diurético), ganho de Na (NaCl hipertônico, NaHCO3).",
  mec:[
    {d:"DDAVP",x:"Análogo da ADH — agonista V2 → ↑permeabilidade ao H2O no túbulo coletor."},
  ],
  diretriz:"Adrogué HJ, Madias NE, NEJM 2000;342:1493–1499.",
  calcs:["corr-na"],
},
{
  id:"hipocalcemia", sis:"hidro", grav:"media",
  nome:"Hipocalcemia",
  sin:["hipocalcemia","Ca baixo"],
  def:"Ca total <8,5 OU Ca iônico <1,1. Sintomas: parestesia, Chvostek, Trousseau, tetania, prolongamento QT.",
  exames:["Ca total + albumina (corrigir) OU Ca iônico","Mg, fósforo","ECG (QT longo)","PTH, vit D"],
  rx:[
    {etapa:"escala", d:"Gluconato de Ca 10%",do:"10–20 mL IV em 10 min, depois 0,5–1 mg/kg/h (Ca elementar) BIC",via:"IV",o:"Sintomática (tetania, convulsão, QT longo). Diluir em SG5% 100 mL."},
    {etapa:"escala", d:"Carbonato de Cálcio",do:"500–1000 mg Ca elementar VO 8/8h",via:"VO",o:"Assintomática ou após estabilização."},
    {etapa:"escala", d:"Vitamina D",do:"Colecalciferol 1000–2000 UI/d",via:"VO",o:"Crônica."},
    {etapa:"escala", d:"MgSO4",do:"1–2 g IV",via:"IV",o:"HipoMg causa hipoCa refratária — sempre corrigir."},
  ],
  alertas:[
    {t:"warn",x:"Corrigir hipoMg ANTES de Ca em hipoCa refratária."},
    {t:"info",x:"Ca corrigido = Ca total + 0,8 × (4 − albumina g/dL)."},
  ],
  fisio:"Causas: hipoparatireoidismo (pós-tireoidectomia), deficiência de vit D, IRC, hipoMg, hiperfosfatemia, pancreatite, transfusão massiva (citrato), sepse, álcool.",
  mec:[],
  diretriz:"Endocrine Society Guidelines.",
  calcs:[],
},
{
  id:"hipocalemia", sis:"hidro", grav:"media",
  nome:"Hipocalemia",
  sin:["hipocalemia","K baixo","potássio baixo"],
  def:"K⁺ <3,5 mEq/L. Grave se <2,5 ou ECG alterado (onda U, T aplanada, depressão ST, prolongamento QT, arritmias).",
  exames:["K sérico (confirmar)","ECG","Mg (frequentemente associado — corrigir antes)","Função renal, gasometria, glicemia","Urinários (K, Cl, Na) para etiologia"],
  rx:[
    {etapa:"escala", d:"KCl VO",do:"40–60 mEq/d (xarope 6%: 1 mL = 0,8 mEq)",via:"VO",o:"1ª linha em leve/moderada com tolerância oral."},
    {etapa:"escala", d:"KCl IV periférico",do:"10–20 mEq em 100 mL SF em 1h",via:"IV",o:"Velocidade máx periférica 10–20 mEq/h. NUNCA bolus."},
    {etapa:"escala", d:"KCl IV central",do:"Até 40 mEq/h em CVC com monitor cardíaco",via:"IV central",o:"K<2,5 ou sintomático grave."},
    {etapa:"escala", d:"MgSO4",do:"1–2 g IV em 15 min",via:"IV",o:"Corrigir Mg SEMPRE — hipoMg perpetua hipoK (efeito ROMK)."},
  ],
  alertas:[
    {t:"warn",x:"Suspender diurético tiazídico/alça em hipoK persistente. Investigar perda renal vs gastrointestinal."},
    {t:"info",x:"Cada queda de 1 mEq/L no K sérico corresponde a deficit ~200–400 mEq corporal."},
  ],
  fisio:"Causas: ↓ingesta, perda gastrointestinal (vômito, diarreia, fístula, laxante), perda renal (tiazida, alça, hiperaldo, Bartter/Gitelman), translocação (β2, insulina, alcalose, leucemia).",
  mec:[],
  diretriz:"Brazilian Journal of Nephrology; UpToDate.",
  calcs:[],
},
{
  id:"hipomg", sis:"hidro", grav:"media",
  nome:"Hipo/Hipermagnesemia",
  sin:["hipomagnesemia","Mg","magnésio"],
  def:"HipoMg <1,7. Sintomas: tetania, arritmia, QT longo, hipoK/hipoCa refratários. HiperMg >2,5 (geralmente iatrogênica em IRC, eclâmpsia).",
  exames:["Mg sérico","K, Ca, fósforo","Função renal","ECG (QT longo na hipoMg, prolongamento PR/QT na hiperMg)"],
  rx:[
    {etapa:"escala", d:"HIPO — MgSO4 IV",do:"1–2 g em 100 mL SF/SG em 15–60 min",via:"IV",o:"Repetir conforme nível. Em torsades: 2 g em 10 min."},
    {etapa:"escala", d:"HIPO — Mg VO crônica",do:"Magnésio quelato 100–400 mg/d",via:"VO",o:"Diarréia limitante."},
    {etapa:"escala", d:"HIPER — Gluconato de Ca",do:"10 mL IV em 2 min",via:"IV",o:"Antagoniza efeitos cardíacos."},
    {etapa:"escala", d:"HIPER — Hidratação + Furosemida",do:"SF + furosemida",via:"IV",o:"↑Excreção renal."},
    {etapa:"escala", d:"HIPER — Hemodiálise",do:"—",via:"—",o:"IRC ou Mg muito alto sintomático."},
  ],
  alertas:[
    {t:"warn",x:"Mg é cofator de Na⁺/K⁺-ATPase — hipoMg causa hipoK refratária e ↑risco de arritmia (torsades)."},
  ],
  fisio:"HipoMg: má absorção (etilismo, diarreia), drogas (diurético, IBP, aminoglicosídeo). HiperMg: IRC, dose terapêutica em eclâmpsia.",
  mec:[],
  diretriz:"UpToDate, ESC.",
  calcs:[],
},
{
  id:"hipona", sis:"hidro", grav:"alta",
  nome:"Hiponatremia",
  sin:["hiponatremia","Na baixo","sódio baixo","SIADH"],
  def:"Na <135 mEq/L. Aguda <48h (alto risco edema cerebral) vs crônica >48h (risco MIELINÓLISE PONTINA se corrigida rápido demais). Classificar: hipo/iso/hipertônica × hipo/eu/hipervolêmica.",
  exames:["Na sérico + osmolaridade plasmática","Osmolaridade urinária + Na urinário","Volemia (clínica) ★","Função renal, hepática, TSH, cortisol AM","Glicemia (excluir pseudohiponatremia)"],
  rx:[
    {etapa:"escala", d:"NaCl 3% (sintomática grave: convulsão, coma)",do:"100–150 mL IV em 10 min, repetir até 3×",via:"IV",o:"Meta inicial: ↑Na 4–6 mEq/L. Não passar de 8–10 mEq/L em 24h (≤18 mEq/L em 48h) — risco mielinólise."},
    {etapa:"escala", d:"SF 0,9% (hipovolêmica)",do:"1 mL/kg/h",via:"IV",o:"Restaurar volume; após euvolemia, ADH suprimida → diurese livre + correção espontânea — CUIDADO com correção rápida."},
    {etapa:"escala", d:"Restrição hídrica (SIADH/IC)",do:"<800 mL/24h",via:"—",o:"Cronica eu/hipervolêmica."},
    {etapa:"escala", d:"Tolvaptan",do:"15 mg VO/d",via:"VO",o:"Vaptan — em SIADH refratário/IC. Caro."},
    {etapa:"escala", d:"DDAVP \"frenador\"",do:"2 mcg IV se correção rápida demais",via:"IV",o:"Re-induz ADH para EVITAR correção exagerada (≥10 mEq/L em 24h)."},
  ],
  alertas:[
    {t:"crit",x:"MIELINÓLISE PONTINA OSMÓTICA: correção >10 mEq/L em 24h em hiponatremia crônica. Paralisia, alteração consciência, dias depois. PREVENÍVEL — controlar velocidade."},
    {t:"warn",x:"Dosar Na 2/2h durante correção ativa com NaCl 3%."},
  ],
  fisio:"Excesso de água em relação ao Na — geralmente por ADH elevada (SIADH, IC, cirrose, hipovolemia). Aguda: edema cerebral por desequilíbrio osmótico → herniação. Crônica: cérebro se adaptou → correção rápida → mielinólise.",
  mec:[
    {d:"NaCl 3%",x:"Solução hipertônica — ↑osmolaridade plasmática → mobiliza água do compartimento intracelular cerebral → ↓edema."},
    {d:"Tolvaptan",x:"Antagonista V2 — bloqueia ação da ADH no túbulo coletor → aquarese (excreção de água livre)."},
  ],
  diretriz:"European Society of Endocrinology/ESICM/ERA-EDTA Hyponatremia 2014 (Spasovski G et al., Eur J Endocrinol 2014;170:G1–G47, DOI:10.1530/EJE-13-1020).",
  calcs:["corr-na"],
},
{id:"rabdomiolise", sis:"hidro", grav:"alta",
nome:"Rabdomiólise",
sin:["rabdomiólise","CPK alta","mioglobinúria"],
def:"Lise muscular esquelética com liberação de mioglobina, K, fósforo, CK no plasma → risco de IRA por mioglobina + hipercalemia. CRITÉRIO: CK >5× LSN (geralmente >1000). Tríade clássica clássica: dor + fraqueza + urina escura (cor coca-cola).",
exames:["CK, mioglobina sérica e urinária","Eletrólitos (K, Ca, P), ureia, Cr (IRA)","Gaso (acidose), lactato","Função hepática (TGO/TGP elevadas — não significa hepatite)","ECG (hiperK)","EAS (Hb+ sem hemácias = mioglobina), urocultura"],
rx:[
{etapa:"escala", d:"Hidratação AGRESSIVA",do:"SF 0,9% 1-1,5 L/h primeiras horas → ajustar para diurese 200-300 mL/h",via:"IV",o:"PILAR. Manter por 48-72h até CK ↓. Alvo: débito urinário ≥200 mL/h."},
{etapa:"escala", d:"Alcalinização urinária (controverso)",do:"Bicarbonato 8,4% 100-150 mEq em 1L SG/SF — ajustar para pH urinário >6,5",via:"IV",o:"Pode reduzir nefrotoxicidade da mioglobina. NÃO se hipoCa, alcalemia, ICC."},
{etapa:"escala", d:"Tratamento HIPERCALEMIA",do:"Ver patologia específica",via:"—",o:"Pode ser a 1ª manifestação. ECG! Cálcio + insulina/glicose + salbutamol."},
{etapa:"escala", d:"Diálise",do:"—",via:"—",o:"IRA estabelecida com indicação clássica (uremia, sobrecarga, hiperK refratária, acidose grave). Não tem indicação profilática."},
{etapa:"escala", d:"Manitol 20% (controverso)",do:"1 g/kg em 30 min após volemia repleta",via:"IV",o:"Sem evidência clara de benefício; risco de IRA osmótica. Geralmente NÃO recomendado."},
],
alertas:[
{t:"crit",x:"HIPERCALEMIA é a maior ameaça aguda. ECG seriado. Tratar K >6 imediatamente mesmo sem ECG alterado."},
{t:"crit",x:"HIPOCALCEMIA INICIAL (Ca entra no músculo lesado) seguida de HIPERCALCEMIA TARDIA (mobilização). NÃO repor Ca de rotina (piora deposição em mioócitos) — só se sintomática (tetania, QT longo)."},
{t:"warn",x:"Etiologias: trauma/esmagamento, exercício extremo, alcoolismo (queda + decúbito prolongado), estatinas, drogas (cocaína, MDMA), neurolépticos, infecções (gripe, leptospirose), miopatias, hipertermia, isquemia compartimental."},
],
fisio:"Lise da miofibra → liberação maciça intracelular para circulação. Mioglobina passa pelo glomérulo, mas nos túbulos forma cilindros com proteína de Tamm-Horsfall + dissocia em ferro livre + heme → vasoconstrição renal + lesão tubular direta. Resultado: NTA isquêmica/tóxica. Hiperpotassemia + hiperfosfatemia (potencialmente fatais) por liberação intracelular.",
mec:[
{d:"Bicarbonato",x:"Alcaliniza a urina → reduz dissociação da mioglobina + ↓formação de cilindros + ↓oxidação heme → ↓nefrotoxicidade. Evidência clínica modesta."},
],
diretriz:"Bosch X et al., NEJM 2009;361:62. Diretrizes brasileiras IRA.",
fluxo:null,
calcs:[],
},
);
