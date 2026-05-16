/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — BIBLIOTECA DE MEDICAÇÕES (PARTE 11)
   Bloco C — Vitaminas
   Colecalciferol (D3) + Calcitriol + Cianocobalamina (B12)
   =========================================================== */

MEDICACOES.push(

/* ============== VITAMINA D ============== */

{id:"med-colecalciferol", classe:"Vitamina D3 (forma natural, animal)", grupo:"endocrino",
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

{id:"med-calcitriol", classe:"Vit D ativa (1,25-OH colecalciferol)", grupo:"endocrino",
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

/* ============== VITAMINA B12 ============== */

{id:"med-cianocobalamina", classe:"Vitamina B12 — cobalamina sintética", grupo:"endocrino",
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

);
