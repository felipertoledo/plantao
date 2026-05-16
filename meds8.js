/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — MEDICAÇÕES (PARTE 8)
   Lipemiantes complementares: fibratos, PCSK9, ácidos graxos
   =========================================================== */

MEDICACOES.push(

/* === FENOFIBRATO === */
{id:"med-fenofibrato", classe:"Fibrato — agonista PPAR-α", grupo:"lipemiante",
nome:"Fenofibrato",
sin:["Lipanon","Lipidil","Tricor"],
formas:["Cápsulas/comprimidos 160 mg, 200 mg, 250 mg — privada","Forma micronizada (melhor absorção): 130, 145 mg — privada"],
resumo:"Fibrato — reduz TG 30-50%, ↑ HDL 10-20%. PRINCIPAL indicação: HIPERTRIGLICERIDEMIA grave (TG >500) para prevenir pancreatite. NÃO reduz mortalidade CV isolada.",
dose_rapida:"160-200 mg VO 1×/d (com refeição principal)",

doses:[
{ind:"HIPERTRIGLICERIDEMIA GRAVE (TG >500 mg/dL) — prevenção pancreatite", dose:"160-200 mg VO 1×/d com refeição", obs:"INDICAÇÃO PRINCIPAL. TG >1000 = risco iminente de pancreatite aguda."},
{ind:"Dislipidemia mista (após otimizar estatina)", dose:"160-200 mg/d + estatina", obs:"Em alto RCV com HDL baixo + TG alto, fenofibrato + estatina é razoável (ACCORD-Lipid — benefício em subgrupo TG ≥204 + HDL ≤34). NÃO usar gemfibrozila + estatina (rabdomiólise)."},
{ind:"Retinopatia diabética (off-label — ACCORD-Eye, FIELD)", dose:"160 mg/d", obs:"ACCORD-Eye demonstrou redução de progressão de retinopatia em DM2 — uso emergente."},
],

ajustes:{
irc:"ClCr 30-60: REDUZIR 50%. ClCr <30: CONTRAINDICADO (risco rabdomiólise).",
iht:"IH grave: CONTRAINDICADO.",
idoso:"Iniciar dose menor, monitor CK + Cr.",
gestante:"CATEGORIA C — evitar (sem dados de segurança).",
aleita:"Evitar.",
ped:"Não recomendado.",
},

mecanismo:"Agonista PPAR-α → ↑ lipoproteína lipase + ↓ apoCIII → ↑ catabolismo de VLDL → REDUÇÃO TG. Também ↑ apoAI/AII → ↑ HDL. Efeito modesto em LDL (↓ ou neutro).",

farmacocin:{
absorc:"VO: melhor com comida (gordura aumenta absorção)",
distrib:"Ampla, alta ligação proteica",
metab:"Hepático",
elimin:"Renal (60% — daí cuidado em IRC)",
meiavida:"20-25h",
ligacao:">99%",
},

espectro:["HIPERTRIGLICERIDEMIA grave (TG >500) — 1ª linha","Dislipidemia mista (em combinação com estatina, casos selecionados)","Retinopatia diabética (off-label)"],

interacoes:[
{droga:"Estatinas (especialmente sinvastatina, lovastatina)", efeito:"↑ risco rabdomiólise. FENOFIBRATO + ESTATINA é aceitável (vs GEMFIBROZILA + estatina que é contraindicada). Mas monitor CK + sintomas."},
{droga:"Varfarina", efeito:"↑ INR significativamente — monitor."},
{droga:"Ciclosporina", efeito:"↑ nefrotoxicidade. Evitar combinação."},
{droga:"AINE", efeito:"↑ deslocamento da albumina."},
],

efeitos:[
{tipo:"comum", item:"Dispepsia, dor abdominal, ↑ CK leve, ↑ transaminases (10-20%), colelitíase (5-10% — fibratos ↑ saturação biliar)"},
{tipo:"sério", item:"RABDOMIÓLISE (raro isoladamente, ↑ risco em IRC + combinação com estatina), HEPATOTOXICIDADE (suspender se TGO/TGP >3× LSN), pancreatite aguda paradoxal (rara), TVP (raro)"},
{tipo:"raro", item:"Pneumonite intersticial, IRA, agranulocitose"},
],

alertas:[
{nivel:"crit", txt:"PREVENÇÃO PANCREATITE: TG >500 mg/dL é INDICAÇÃO PRINCIPAL (não LDL). TG >1000 mg/dL = risco iminente de pancreatite aguda. NÃO substitui MEV (dieta + álcool + DM controlado)."},
{nivel:"crit", txt:"NUNCA combinar GEMFIBROZILA com estatina (risco rabdomiólise 15× maior). Fenofibrato + estatina é aceitável MAS monitor CK + sintomas musculares."},
{nivel:"crit", txt:"IRC: ClCr <30 = CONTRAINDICAÇÃO (rabdomiólise). ClCr 30-60: reduzir 50%."},
{nivel:"warn", txt:"GESTAÇÃO + HIPERTRIGLICERIDEMIA: 3º trimestre pode haver TG >2000 com risco pancreatite. Insulina + dieta + plasmaférese podem ser necessários (fibrato categoria C — evitar mas pode ser usado em risco extremo)."},
{nivel:"warn", txt:"NÃO REDUZ MORTALIDADE CV em monoterapia ou combinação universal (FIELD trial em DM2 — desfechos macrovasculares limitados). USE COM ESTATINA quando indicação combinada (ACCORD-Lipid subgrupo)."},
{nivel:"info", txt:"COLELITÍASE: fibratos ↑ saturação biliar de colesterol — risco de cálculos. Não rastrear de rotina, mas alertar paciente sobre sintomas."},
],

preparo:"VO comprimido, COM REFEIÇÃO PRINCIPAL (gordura ↑ absorção, especialmente nas formulações não-micronizadas).",
monitor:"Perfil lipídico 8-12 sem, TGO/TGP basal + 3 m + anual, CK se sintomas musculares, creatinina basal + anual.",
diretriz:"SBC Dislipidemia 2017. AHA/ACC 2018. ACCORD-Lipid. FIELD. ENDOCRINE Society — Hipertrigliceridemia 2012.",
fluxo:null, calcs:[],
},

/* === CIPROFIBRATO === */
{id:"med-ciprofibrato", classe:"Fibrato — agonista PPAR-α", grupo:"lipemiante",
nome:"Ciprofibrato",
sin:["Lipless","Oroxadin"],
formas:["Comprimidos 100 mg — privada"],
resumo:"Fibrato com meia-vida MAIS LONGA (40-50h, vs fenofibrato 20h). Posologia 1×/d. Boa redução de TG 30-50%. Menos usado que fenofibrato.",
dose_rapida:"100 mg VO 1×/d",

doses:[
{ind:"Hipertrigliceridemia grave", dose:"100 mg VO 1×/d", obs:"Alternativa ao fenofibrato. Não exige refeição (ao contrário do fenofibrato não-micronizado)."},
],

ajustes:{
irc:"ClCr 30-60: 100 mg em dias alternados. ClCr <30: CONTRAINDICADO.",
iht:"IH grave: contraindicado.",
idoso:"Cautela.",
gestante:"Evitar.",
aleita:"Evitar.",
ped:"Não recomendado.",
},

mecanismo:"Idêntico ao fenofibrato — agonista PPAR-α.",

farmacocin:{absorc:"VO: boa", distrib:"Ampla", metab:"Hepático", elimin:"Renal", meiavida:"40-50h (a maior entre fibratos)", ligacao:">99%"},

espectro:["Hipertrigliceridemia grave"],

interacoes:[{droga:"Mesmas do fenofibrato", efeito:"Estatina, varfarina, ciclosporina."}],

efeitos:[
{tipo:"comum", item:"Dispepsia, ↑ enzimas hepáticas, mialgia"},
{tipo:"sério", item:"Rabdomiólise, hepatotoxicidade"},
{tipo:"raro", item:"Pneumonite, colelitíase"},
],

alertas:[
{nivel:"warn", txt:"MEIA-VIDA LONGA (40-50h) — útil em paciente com dificuldade de aderência. Mas em caso de RA, demora a se resolver."},
{nivel:"info", txt:"Menos prescrito que fenofibrato no Brasil — fenofibrato tem maior evidência (FIELD, ACCORD)."},
],

preparo:"VO comprimido, com ou sem alimento.",
monitor:"Perfil lipídico, TGO/TGP, CK se sintomas.",
diretriz:"SBC Dislipidemia 2017.",
fluxo:null, calcs:[],
},

/* === ÔMEGA-3 (EPA + DHA / Icosapent ethyl) === */
{id:"med-omega3", classe:"Ácidos graxos ômega-3 — EPA + DHA", grupo:"lipemiante",
nome:"Ômega-3 (EPA/DHA, Icosapent etil)",
sin:["Vascepa (icosapent etil — EPA isolado)","Omacor","Lovaza"],
formas:["Cápsulas 1 g (mix EPA+DHA, suplemento sem prescrição)","Vascepa 1 g (icosapent etil — apenas EPA, prescrição) — privada"],
resumo:"Ácidos graxos ômega-3. ICOSAPENT ETIL 2 g 2×/d é o ÚNICO com evidência CV sólida (REDUCE-IT — reduz MACE 25%). Suplementos genéricos OTC NÃO têm evidência CV.",
dose_rapida:"Icosapent etil 2 g VO 2×/d | Suplementos OTC 2-4 g/d (sem evidência CV forte)",

doses:[
{ind:"Prevenção CV em ALTO RCV + TG persistentemente ≥150 (REDUCE-IT)", dose:"Icosapent etil 2 g VO 2×/d (4 g/d total)", obs:"REDUCE-IT trial — reduz MACE 25% em paciente com DCV ou DM + 1 FRCV + TG 150-499 em uso de estatina. EVIDÊNCIA REAL. Vascepa NÃO está disponível no Brasil em 2025/2026."},
{ind:"Hipertrigliceridemia grave (TG >500)", dose:"2-4 g/d (EPA+DHA combinado)", obs:"Como adjuvante a fenofibrato. Redução TG ~30%."},
],

ajustes:{
irc:"Sem ajuste.",
iht:"Cautela.",
idoso:"Sem ajuste.",
gestante:"Categoria C — geralmente seguro.",
aleita:"Compatível.",
ped:"Não rotina.",
},

mecanismo:"EPA + DHA → ↓ síntese hepática de VLDL → ↓ TG. EPA (icosapent etil) tem efeito anti-inflamatório/antiarrítmico adicional, possivelmente responsável pelo benefício CV em REDUCE-IT.",

farmacocin:{absorc:"VO: melhor com refeição rica em gordura", distrib:"Lipoproteínas", metab:"β-oxidação", elimin:"Não significativa renal", meiavida:"Variável", ligacao:"—"},

espectro:["Prevenção CV em alto RCV + TG ≥150 (REDUCE-IT — apenas icosapent etil)","Hipertrigliceridemia grave (adjuvante)"],

interacoes:[
{droga:"Anticoagulantes (varfarina, DOAC)", efeito:"↑ risco sangramento em doses altas (>4 g/d). Monitor."},
{droga:"AAS", efeito:"Aditivo antiagregante leve."},
],

efeitos:[
{tipo:"comum", item:"Eructação com sabor de peixe (mais frequente com formulações genéricas), náusea, diarreia"},
{tipo:"sério", item:"Sangramento aumentado em altas doses + anticoagulantes, FA paradoxal (REDUCE-IT — ↑ leve de FA)"},
{tipo:"raro", item:"Reação alérgica em alergia a peixe"},
],

alertas:[
{nivel:"crit", txt:"SUPLEMENTOS GENÉRICOS de ômega-3 (OTC, sem prescrição) NÃO têm evidência CV — apenas reduzem TG modestamente. Vários ensaios randomizados (STRENGTH, ASCEND, VITAL) foram NEGATIVOS para mistura EPA+DHA."},
{nivel:"warn", txt:"REDUCE-IT é com ICOSAPENT ETIL (EPA puro) — NÃO disponível no Brasil em 2025/2026 (importação possível em alguns casos). Suplementos brasileiros são EPA+DHA — eficácia CV não comprovada."},
{nivel:"warn", txt:"REDUCE-IT mostrou ↑ leve de FA — pode haver troca de risco (↓ IAM/AVC vs ↑ FA/sangramento). Discussão compartilhada."},
{nivel:"info", txt:"DIETA: 2 porções/sem de peixe gordo (salmão, sardinha) fornece EPA+DHA com benefício comprovado e baixo custo — orientação preferencial."},
],

preparo:"VO cápsula com refeição (gordura ↑ absorção).",
monitor:"TG, sintomas sangramento.",
diretriz:"REDUCE-IT trial. AHA Science Advisory 2019.",
fluxo:null, calcs:[],
},

);
