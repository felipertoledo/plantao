/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — BIBLIOTECA DE MEDICAÇÕES (PARTE 6)
   Lipemiantes — Estatinas + Ezetimiba
   Conforme Atualização SBC Dislipidemia 2017 + AHA/ACC 2018-2024 + ESC 2019
   =========================================================== */

MEDICACOES.push(

/* ============== ESTATINAS ============== */

{id:"med-sinvastatina", classe:"Estatina de potência moderada (1ª geração)", grupo:"lipemiante",
nome:"Sinvastatina",
sin:["Zocor","Sinvascor","Sinvalip"],
formas:["Comprimidos 10 mg, 20 mg, 40 mg — SUS/REMUME","Combinação fixa: sinvastatina + ezetimiba"],
resumo:"Estatina clássica disponível no SUS. Potência MODERADA — reduz LDL 30-40%. Múltiplas interações (CYP3A4). Limite ATUAL 40 mg/d (FDA contraindicou 80 mg por miopatia/rabdomiólise).",
dose_rapida:"20-40 mg VO 1×/d (à noite — pico de síntese hepática)",

doses:[
{ind:"Prevenção primária CV (HAS, DM, idade ≥40a, RCV moderado)", dose:"20 mg VO 1×/d à noite", obs:"Início após estratificação de risco (PREVENT, ESC SCORE2). Meta LDL conforme risco."},
{ind:"Prevenção secundária (DAC, AVC, DAOP)", dose:"40 mg VO 1×/d à noite", obs:"Meta LDL <55 mg/dL (alto risco) — geralmente NÃO atingida só com sinvastatina. Combinar ezetimiba ou trocar para alta potência."},
{ind:"DM2 + HAS + dislipidemia", dose:"20-40 mg/d", obs:"Meta LDL <70 (alto RCV) ou <55 (muito alto). Considerar atorvastatina/rosuvastatina."},
{ind:"Hipercolesterolemia familiar (HF)", dose:"40 mg/d (máx em sinvastatina)", obs:"Geralmente insuficiente isolada — combinar ezetimiba ± iPCSK9. Encaminhar especialista."},
{ind:"Pediatria — HF heterozigótica ≥10 anos", dose:"10-40 mg/d", obs:"Avaliar especialista (endocrinopediatria)."},
],

ajustes:{
irc:"Sem ajuste rotineiro. ClCr <30: cautela com dose alta (rabdomiólise).",
iht:"Hepatopatia ativa: CONTRAINDICADA. IH crônica estável: cautela, monitor TGO/TGP.",
idoso:"Iniciar 10-20 mg. Maior risco miopatia em ≥75a.",
gestante:"CATEGORIA X — CONTRAINDICADA (teratogenicidade — defeitos SNC, esqueleto). Suspender 1-3 meses antes de gestação planejada.",
aleita:"CONTRAINDICADA.",
ped:"HF heterozigótica ≥10a: 10-40 mg/d.",
},

mecanismo:"Inibe competitivamente a HMG-CoA redutase (enzima limitante da síntese de colesterol hepático) → ↓ síntese colesterol intrahepático → ↑ expressão de receptores LDL hepáticos → ↑ captação de LDL circulante → ↓ LDL plasmático. Efeitos PLEIOTRÓPICOS: estabilização placa aterosclerótica, anti-inflamatório, melhora função endotelial.",

farmacocin:{
absorc:"VO: 5% (1ª passagem hepática intensa — vantagem: ação direta no fígado)",
distrib:"Hepatosseletiva (95% no fígado)",
metab:"Hepático CYP3A4 → metabólito ativo (sinvastatina ácido)",
elimin:"Biliar (60%) + renal (13%)",
meiavida:"2h (sinvastatina) / ~5h (metabólito)",
ligacao:"~95%",
},

espectro:["Prevenção primária CV em RCV moderado-alto","Prevenção secundária (DAC, AVC, DAOP)","DM2/HAS com dislipidemia","Hipercolesterolemia familiar (combinada)"],

interacoes:[
{droga:"Inibidores potentes CYP3A4 (claritromicina, eritromicina, itraconazol, cetoconazol, ritonavir)", efeito:"↑ sinvastatina 5-10× — RABDOMIÓLISE. CONTRAINDICAÇÃO. Suspender sinvastatina durante o ATB."},
{droga:"Amiodarona, verapamil, diltiazem", efeito:"↑ sinvastatina — LIMITAR sinvastatina a 20 mg/d com amiodarona, 10 mg/d com verapamil/diltiazem."},
{droga:"Ciclosporina, danazol, gemfibrozila", efeito:"CONTRAINDICAÇÃO (risco grave de rabdomiólise)."},
{droga:"Suco de POMELO/grapefruit", efeito:"↑ sinvastatina 3-9× (inibe CYP3A4 intestinal) — EVITAR consumo regular."},
{droga:"Varfarina", efeito:"Pode ↑ INR — monitor."},
{droga:"Fibratos (especialmente gemfibrozila)", efeito:"↑ risco miopatia. Se necessário: preferir fenofibrato."},
],

efeitos:[
{tipo:"comum", item:"Mialgia (5-10%, geralmente reversível com suspensão), ↑ leve TGO/TGP, cefaleia, dispepsia, distúrbios do sono"},
{tipo:"sério", item:"RABDOMIÓLISE (rara — 0,1-0,5/1000 paciente-ano; ↑ CK >10× + insuficiência renal aguda), hepatotoxicidade (TGO/TGP >3× LSN), miopatia inflamatória autoimune (rara — anticorpos anti-HMGCR)"},
{tipo:"raro", item:"↑ glicemia / DM2 de novo (NNT ~250), neuropatia periférica, declínio cognitivo (controverso — evidência fraca)"},
],

alertas:[
{nivel:"crit", txt:"RABDOMIÓLISE: suspender se mialgia importante + CK >10× LSN + queixa muscular significativa. Tratar com hidratação + suspender. CK basal NÃO é recomendada de rotina — apenas se sintomas."},
{nivel:"crit", txt:"FDA 2011: SINVASTATINA 80 mg = CONTRAINDICADA (risco miopatia 4× maior que 40 mg). DOSE MÁX 40 mg/d."},
{nivel:"crit", txt:"GESTAÇÃO: CATEGORIA X — TERATOGÊNICA. Suspender 1-3 meses antes de gestação planejada. Se engravidar em uso: suspender imediatamente."},
{nivel:"warn", txt:"INTERAÇÃO COM ATB: ao prescrever claritromicina/eritromicina/itraconazol em paciente em uso de sinvastatina, SUSPENDER sinvastatina durante o ATB. Reiniciar após. Azitromicina é SEGURA."},
{nivel:"warn", txt:"MIALGIA: ocorre em 5-10%. Estratégia: (1) confirmar relação temporal; (2) dosar CK; (3) suspender 2-4 sem; (4) reintroduzir mesma estatina ou trocar para outra (rosuvastatina, pravastatina = menos miopatia); (5) considerar dose dia-sim/dia-não."},
{nivel:"info", txt:"POTÊNCIA MODERADA: ↓ LDL 30-40%. Em alto RCV com LDL inicial alto, frequentemente insuficiente — preferir atorvastatina/rosuvastatina ou associar ezetimiba."},
{nivel:"info", txt:"DM2 DE NOVO: estatinas aumentam risco de DM2 em ~9% (NNT ~250) — mas benefício CV supera amplamente. Não é motivo para suspender em paciente com indicação."},
],

preparo:"VO comprimido, à NOITE (HMG-CoA redutase tem pico de atividade noturno — eficácia máxima). Com ou sem alimento.",
monitor:"Perfil lipídico basal + 6-12 sem após início/ajuste + anual. TGO/TGP basal + se sintomas hepáticos. CK apenas se mialgia. HbA1c em paciente DM2.",
diretriz:"SBC Dislipidemia 2017 (Atualização). AHA/ACC Cholesterol 2018. ESC Dyslipidemias 2019.",
fluxo:null, calcs:[],
},

{id:"med-atorvastatina", classe:"Estatina de alta potência (2ª geração)", grupo:"lipemiante",
nome:"Atorvastatina",
sin:["Lipitor","Citalor","Vastiri"],
formas:["Comprimidos 10, 20, 40, 80 mg — privada/SUS via PCDT (CEAF em alguns estados)","Combinação fixa: atorvastatina + ezetimiba"],
resumo:"Estatina de ALTA potência. ↓ LDL 40-60% (40-80 mg). PADRÃO em alto/muito alto RCV. Disponível SUS via PCDT (LDL ≥130 em alto RCV apesar de sinvastatina).",
dose_rapida:"10-80 mg VO 1×/d (qualquer horário — T½ longa)",

doses:[
{ind:"Prevenção secundária / muito alto RCV (DAC, AVC, DAOP, DM+DCV)", dose:"40-80 mg VO 1×/d", obs:"Meta LDL <55 mg/dL (DBHA/SBC 2017/AHA 2018). TNT, IDEAL trials — 80 mg superior em redução de eventos."},
{ind:"Prevenção primária / alto RCV (DM2 + LOA, HF, HAS+LOA múltipla)", dose:"20-40 mg/d", obs:"Meta LDL <70 mg/dL."},
{ind:"Prevenção primária / RCV moderado", dose:"10-20 mg/d", obs:"Meta LDL <100 mg/dL ou redução 30-50%."},
{ind:"Hipercolesterolemia familiar heterozigótica", dose:"40-80 mg/d", obs:"Frequentemente combinada com ezetimiba ± iPCSK9 (alirocumabe, evolocumabe)."},
{ind:"Pediatria — HF heterozigótica ≥10 anos", dose:"10-40 mg/d", obs:"Especialista."},
],

ajustes:{
irc:"Sem ajuste rotineiro (90% biliar). Útil em DRC (vs rosuvastatina).",
iht:"Hepatopatia ativa: CONTRAINDICADA. IH crônica: cautela.",
idoso:"Iniciar 10-20 mg.",
gestante:"CATEGORIA X — CONTRAINDICADA.",
aleita:"CONTRAINDICADA.",
ped:"HF heterozigótica ≥10a: 10-40 mg/d.",
},

mecanismo:"Mesmo das outras estatinas — inibe HMG-CoA redutase. Atorvastatina tem metabólito ativo (orto e para-hidroxi-atorvastatina) com T½ longa → cobertura 24h e dosagem em qualquer horário (vantagem vs sinvastatina).",

farmacocin:{
absorc:"VO: 14% (boa biodisponibilidade)",
distrib:"Hepatosseletiva",
metab:"Hepático CYP3A4 → metabólitos ATIVOS",
elimin:"Biliar (90%) — vantagem em IRC",
meiavida:"14h (metabólitos ativos 20-30h)",
ligacao:">98%",
},

espectro:["Prevenção secundária CV (1ª escolha em alta potência)","Alto/muito alto RCV","HF heterozigótica","DM2 + alto RCV","Pós-SCA (carga de 80 mg pré-PCI — PROVE-IT)"],

interacoes:[
{droga:"Inibidores potentes CYP3A4 (claritromicina, itraconazol)", efeito:"↑ atorvastatina — limitar a 20 mg/d ou suspender durante."},
{droga:"Ciclosporina", efeito:"↑ atorvastatina 6-8× — limitar a 10 mg/d."},
{droga:"Gemfibrozila", efeito:"↑ risco rabdomiólise — preferir fenofibrato."},
{droga:"Suco de pomelo", efeito:"↑ atorvastatina (menos que sinvastatina) — moderar consumo."},
{droga:"Digoxina", efeito:"Atorvastatina ↑ digoxina ~20%."},
{droga:"Anticoncepcionais orais", efeito:"Atorvastatina ↑ etinilestradiol/noretindrona ~20%."},
],

efeitos:[
{tipo:"comum", item:"Mialgia (5-10%, semelhante outras estatinas), ↑ leve TGO/TGP, cefaleia, dispepsia"},
{tipo:"sério", item:"Rabdomiólise (rara), hepatotoxicidade, miopatia inflamatória autoimune"},
{tipo:"raro", item:"↑ glicemia/DM2 de novo, declínio cognitivo (controverso)"},
],

alertas:[
{nivel:"crit", txt:"ALTA POTÊNCIA: 40-80 mg reduz LDL 50-60% — superior à sinvastatina. PADRÃO em alto/muito alto RCV (especialmente prevenção secundária)."},
{nivel:"crit", txt:"GESTAÇÃO: CONTRAINDICADA (categoria X). Suspender pré-concepção."},
{nivel:"warn", txt:"DOSE 80 mg: maior eficácia mas ↑ risco EA. Reservar para pacientes que NÃO atingem meta com 40 mg + ezetimiba."},
{nivel:"warn", txt:"PCDT SUS: disponível para prevenção secundária em paciente com DAC/AVC/DAOP + LDL ≥70 apesar de sinvastatina 40 mg, OU prevenção primária com HF ou DM+LOA."},
{nivel:"info", txt:"PÓS-SCA: PROVE-IT trial — atorvastatina 80 mg vs pravastatina 40 mg = redução 16% de eventos CV. Iniciar carga pré-PCI/STEMI."},
{nivel:"info", txt:"VANTAGEM VS ROSUVASTATINA: melhor em IRC (sem necessidade ajuste). VS SINVASTATINA: menos interações relevantes, maior potência."},
],

preparo:"VO comprimido, qualquer horário (T½ longa). Com ou sem alimento.",
monitor:"Perfil lipídico basal + 6-12 sem após início/ajuste + anual. TGO/TGP basal + se sintomas. CK se mialgia. HbA1c em DM2.",
diretriz:"SBC Dislipidemia 2017. AHA/ACC 2018. PCDT MS Dislipidemia. TNT trial. PROVE-IT.",
fluxo:null, calcs:[],
},

{id:"med-rosuvastatina", classe:"Estatina de alta potência (2ª geração)", grupo:"lipemiante",
nome:"Rosuvastatina",
sin:["Crestor","Plenance","Trezor"],
formas:["Comprimidos 5, 10, 20, 40 mg — privada","Combinação fixa: rosuvastatina + ezetimiba"],
resumo:"Estatina de alta potência. ↓ LDL 45-63% (40 mg). MAIS POTENTE entre estatinas (mg por mg). T½ longa (19h). MENOR interação CYP. Cuidado em IRC.",
dose_rapida:"5-40 mg VO 1×/d",

doses:[
{ind:"Prevenção secundária / muito alto RCV", dose:"20-40 mg/d", obs:"Meta LDL <55. JUPITER trial — eficaz mesmo em LDL 'normal' com PCR-us elevada."},
{ind:"Alto RCV (DM2 + LOA, HF)", dose:"10-20 mg/d", obs:"Meta LDL <70."},
{ind:"RCV moderado", dose:"5-10 mg/d", obs:"Meta LDL <100. SATURN, ASTEROID trials — regressão placa."},
{ind:"HF homozigótica (rara)", dose:"20-40 mg/d", obs:"Combinada com ezetimiba ± iPCSK9 ± LDL-aférese."},
{ind:"DM2 + IRC moderada (alternativa à atorvastatina)", dose:"5-20 mg/d (CUIDADO em ClCr <30)", obs:"Em ClCr <30: máx 10 mg/d."},
],

ajustes:{
irc:"ClCr 30-60: cautela. ClCr <30: MÁX 10 mg/d (acúmulo — risco miopatia). ASIÁTICO: iniciar dose menor (5 mg).",
iht:"Hepatopatia ativa: CONTRAINDICADA.",
idoso:"Iniciar 5-10 mg.",
gestante:"CATEGORIA X — CONTRAINDICADA.",
aleita:"CONTRAINDICADA.",
ped:"HF ≥10 anos: 5-20 mg/d.",
},

mecanismo:"Inibe HMG-CoA redutase. Diferenças importantes: (1) MAIS hidrofílica que sinvastatina/atorvastatina → atravessa menos BBB (menos efeitos cognitivos teóricos); (2) MENOR metabolismo CYP3A4 (~10%) → MENOS interações; (3) T½ ~19h → cobertura prolongada.",

farmacocin:{
absorc:"VO: 20%",
distrib:"Hepatosseletiva (hidrofílica)",
metab:"Mínimo (10% CYP2C9)",
elimin:"Fezes (90% inalterada)",
meiavida:"19h",
ligacao:"~88%",
},

espectro:["Prevenção secundária CV","Alto/muito alto RCV","HF (incluindo homozigótica)","Pacientes com múltiplas interações medicamentosas (vantagem)","JUPITER: prevenção primária em PCR-us elevada"],

interacoes:[
{droga:"Ciclosporina", efeito:"↑ rosuvastatina 7× — CONTRAINDICAÇÃO ou limitar 5 mg/d."},
{droga:"Gemfibrozila", efeito:"↑ rosuvastatina 2× — preferir fenofibrato."},
{droga:"Varfarina", efeito:"Pode ↑ INR — monitor."},
{droga:"Inibidores de protease HIV", efeito:"↑ rosuvastatina — ajuste."},
{droga:"Antiácidos com alumínio/magnésio", efeito:"↓ absorção rosuvastatina — separar 2h."},
{droga:"Inibidores potentes CYP3A4 (claritromicina, etc)", efeito:"MENOR interação que outras estatinas (rosuvastatina não é CYP3A4)."},
],

efeitos:[
{tipo:"comum", item:"Mialgia (incidência similar outras estatinas), ↑ TGO/TGP, cefaleia, proteinúria leve (transitória — sem significado clínico)"},
{tipo:"sério", item:"Rabdomiólise (rara, ↑ em ClCr <30 com dose alta), hepatotoxicidade, miopatia autoimune"},
{tipo:"raro", item:"↑ glicemia (efeito de classe)"},
],

alertas:[
{nivel:"crit", txt:"IRC GRAVE (ClCr <30): MÁX 10 mg/d. Em diálise: começar 5 mg/d. Rabdomiólise descrita em dose alta + IRC."},
{nivel:"crit", txt:"ASIÁTICOS (especialmente de origem chinesa/japonesa/vietnamita): metabolismo reduzido → ↑ exposição 2× → iniciar 5 mg/d e titular cautelosamente."},
{nivel:"warn", txt:"INTERAÇÕES: VANTAGEM vs sinvastatina/atorvastatina — pouco metabolismo CYP3A4. Boa escolha em paciente com polifarmácia (transplantado, HIV, oncológico)."},
{nivel:"warn", txt:"PROTEINÚRIA leve (dose-dependente): geralmente transitória, sem significado clínico. NÃO suspender por isto isoladamente."},
{nivel:"info", txt:"POTÊNCIA: rosuvastatina 5 mg ≈ atorvastatina 10 mg ≈ sinvastatina 20 mg em redução de LDL (regra prática)."},
{nivel:"info", txt:"JUPITER trial: rosuvastatina 20 mg em prevenção primária com LDL <130 + PCR-us ≥2 reduziu eventos CV 44%. Indicação controversa — discutir com paciente."},
],

preparo:"VO comprimido, qualquer horário. Com ou sem alimento.",
monitor:"Perfil lipídico basal + 6-12 sem + anual. TGO/TGP, CK se mialgia. Função renal anual.",
diretriz:"SBC Dislipidemia 2017. AHA/ACC 2018. JUPITER. STELLAR. SATURN.",
fluxo:null, calcs:[],
},

/* ============== EZETIMIBA ============== */

{id:"med-ezetimiba", classe:"Inibidor da absorção intestinal de colesterol", grupo:"lipemiante",
nome:"Ezetimiba",
sin:["Ezetrol","Zetia"],
formas:["Comprimidos 10 mg — privada","Combinações fixas: ezetimiba + sinvastatina (Vytorin/Zetsim), ezetimiba + atorvastatina, ezetimiba + rosuvastatina"],
resumo:"Inibe absorção intestinal de colesterol (NPC1L1). Reduz LDL 15-25% adicional quando associada à estatina. IMPROVE-IT trial: redução de eventos CV em pós-SCA. 2ª linha clássica após estatina.",
dose_rapida:"10 mg VO 1×/d (sempre — única dose)",

doses:[
{ind:"DM/HAS/alto RCV com LDL não controlado por estatina máxima tolerada", dose:"10 mg VO 1×/d (qualquer horário)", obs:"Adicionar à estatina antes de pensar em iPCSK9. Reduz LDL ~20% adicional. IMPROVE-IT — reduz MACE em pós-SCA."},
{ind:"Intolerância à estatina (mialgia)", dose:"10 mg/d isolada", obs:"Eficácia inferior à estatina (LDL ↓ 15-20%), mas opção em quem não tolera. Considerar pravastatina dose baixa + ezetimiba antes de monoterapia."},
{ind:"Hipercolesterolemia familiar (combinada com estatina + iPCSK9)", dose:"10 mg/d", obs:"Esquema padrão em HF heterozigótica/homozigótica."},
{ind:"Sitosterolemia (doença rara — acúmulo de fitoesteróis)", dose:"10 mg/d", obs:"Indicação específica — mecanismo de NPC1L1 inibe absorção também de fitoesteróis."},
{ind:"Pediatria HF ≥10 anos", dose:"10 mg/d", obs:"Aprovada."},
],

ajustes:{
irc:"Sem ajuste rotineiro.",
iht:"IH moderada-grave: NÃO recomendada (estudos limitados).",
idoso:"Sem ajuste.",
gestante:"Sem dados — evitar (provavelmente categoria C, mas hipocolesterolemia gestacional é teoricamente prejudicial).",
aleita:"Evitar.",
ped:"≥10 anos: 10 mg/d.",
},

mecanismo:"Inibe seletivamente o transportador NPC1L1 (Niemann-Pick C1-like 1) na borda em escova do intestino → ↓ absorção de colesterol dietético + colesterol biliar → ↓ chegada ao fígado → ↑ expressão de receptores LDL → ↑ captação LDL plasmático. SINERGIA com estatinas: estatina ↓ síntese, ezetimiba ↓ absorção.",

farmacocin:{
absorc:"VO: bem absorvida + glucuronidação intestinal extensa → metabólito ATIVO (ezetimiba-glucuronídeo)",
distrib:"Recirculação enterohepática (T½ efetiva longa)",
metab:"Glucuronidação intestinal e hepática",
elimin:"Fezes (78%) + renal (11%)",
meiavida:"~22h (com recirculação)",
ligacao:">90%",
},

espectro:["Adjuvante à estatina (LDL não controlado)","Intolerância à estatina","Hipercolesterolemia familiar","Sitosterolemia"],

interacoes:[
{droga:"Ciclosporina", efeito:"↑ ezetimiba — monitor."},
{droga:"Colestiramina (sequestrante de ácidos biliares)", efeito:"↓ absorção ezetimiba — separar 2h antes ou 4h depois."},
{droga:"Fibratos", efeito:"Sem aumento significativo do risco de miopatia (vs estatina + fibrato)."},
{droga:"Varfarina", efeito:"Sem interação significativa."},
],

efeitos:[
{tipo:"comum", item:"Bem tolerada — perfil próximo ao placebo. Diarreia, dor abdominal, mialgia (rara), ↑ TGO/TGP leve"},
{tipo:"sério", item:"Rabdomiólise (raríssima, descrita em combinação com estatina), hepatite (rara), pancreatite (raríssima), reação alérgica"},
{tipo:"raro", item:"Angioedema"},
],

alertas:[
{nivel:"warn", txt:"IMPROVE-IT trial (NEJM 2015): ezetimiba + sinvastatina vs sinvastatina isolada em pós-SCA — REDUÇÃO 6% MACE em 7 anos. Modesto mas significativo. PRIMEIRA evidência de redução de desfechos com não-estatina."},
{nivel:"warn", txt:"ESQUEMA SBC/AHA: 'estatina máxima tolerada → + ezetimiba → + iPCSK9' (escalonamento). Cada degrau adiciona ~20% redução LDL."},
{nivel:"info", txt:"COMBINAÇÃO FIXA é PREFERENCIAL — melhor adesão. Disponíveis: sinva/eze, atorva/eze, rosuva/eze."},
{nivel:"info", txt:"PERFIL DE SEGURANÇA EXCELENTE — bem tolerada, mínimos EA. Pode ser usada em intolerância à estatina (eficácia menor mas alternativa válida)."},
{nivel:"info", txt:"NÃO afeta absorção de vitaminas lipossolúveis (vs colestiramina/sequestrantes — que afetam)."},
],

preparo:"VO comprimido, qualquer horário, com ou sem alimento.",
monitor:"Perfil lipídico basal + 6-12 sem após início + anual. TGO/TGP basal + 12 sem (especialmente em combinação com estatina).",
diretriz:"SBC Dislipidemia 2017. AHA/ACC 2018. IMPROVE-IT (NEJM 2015).",
fluxo:null, calcs:[],
},

);
