/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — meds/anti-hipertensivos.js
   32 medicações
   Grupos: anti_hipertensivo
   =========================================================== */

MEDICACOES.push(

/* ============== ANTI_HIPERTENSIVO (32) ============== */

{id:"med-amilorida", contexto:["pa","ubs"], classe:"Diurético poupador de K+ (bloq canal ENaC)", grupo:"anti_hipertensivo",
nome:"Amilorida (Moduretic)",
sin:["Moduretic (combinada com HCTZ — única apresentação BR)"],
formas:["Amilorida 5 mg + HCTZ 50 mg (Moduretic) — combinação fixa única disponível no Brasil"],
resumo:"Poupador de K+ via bloqueio ENaC. NO BRASIL: APENAS em combinação fixa Moduretic. Útil em HAS resistente leve + hipocalemia.",
dose_rapida:"1 comprimido Moduretic VO 1×/d (manhã)",
doses:[
{ind:"HAS — combinada quando hipocalemia com tiazídico", dose:"1 comp Moduretic (5 mg/50 mg) VO 1×/d (manhã)", obs:"Útil quando paciente desenvolve hipocalemia com HCTZ — amilorida compensa."},
{ind:"HAS resistente leve com hipocalemia", dose:"1 comp/d", obs:"Quando espironolactona é mal tolerada (ginecomastia em homem). 3ª-4ª linha."},
],
ajustes:{
irc:"ClCr <60: cuidado (hipercalemia). ClCr <30: CONTRAINDICADA.",
iht:"Sem ajuste rotineiro.",
idoso:"Iniciar dose menor. Risco hipercalemia.",
gestante:"Categoria B — uso restrito.",
aleita:"Compatível.",
ped:"Não recomendada.",
},
mecanismo:"Bloqueia canal ENaC (Epithelial Sodium Channel) no ducto coletor → ↑ excreção Na+ MAS retém K+/H+. NÃO depende de aldosterona (vs espironolactona).",
farmacocin:{absorc:"VO: 15-25%", distrib:"Não atravessa BBB", metab:"NÃO metabolizada", elimin:"Renal 50% inalterada", meiavida:"6-9h", ligacao:"Mínima"},
espectro:["HAS + hipocalemia por tiazídico","HAS resistente leve","Alternativa à espironolactona quando ginecomastia"],
interacoes:[
{droga:"iSRA, K+, espironolactona", efeito:"HIPERCALEMIA — não combinar ou monitor rigoroso."},
{droga:"AINE", efeito:"Hipercalemia + IRA."},
{droga:"Lítio", efeito:"↑ lítio."},
],
efeitos:[
{tipo:"comum", item:"Hipercalemia (mecanismo principal), náusea, tontura"},
{tipo:"sério", item:"Hipercalemia grave em IRC/idoso/iSRA, IRA"},
{tipo:"raro", item:"Ginecomastia (muito menor que espironolactona)"},
],
alertas:[
{nivel:"crit", txt:"HIPERCALEMIA: contraindicada se K+ basal >5,5 ou ClCr <30. Monitor K+ basal + 1 sem + 4 sem."},
{nivel:"warn", txt:"MODURETIC: única apresentação BR é em COMBINAÇÃO FIXA com HCTZ 50 mg. Limitação: HCTZ 50 mg é dose alta — em paciente que precisa só de poupador, dose excessiva de tiazídico."},
{nivel:"warn", txt:"ALTERNATIVA: espironolactona é mais usada (evidência em IC, cirrose, HAS resistente). Amilorida útil em intolerância à espironolactona (ginecomastia)."},
],
preparo:"VO comprimido, manhã.",
monitor:"PA, K+, Cr basal + 1 sem + 1 mês + 6 meses.",
diretriz:"DBHA 2025.",
fluxo:null, calcs:[],
},
{id:"med-anlodipino", contexto:["pa","ubs"], classe:"BCC diidropiridínico de longa ação", grupo:"anti_hipertensivo",
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
{id:"med-atenolol", contexto:["pa","ubs"], classe:"β1-bloqueador cardiosseletivo — ação intermediária", grupo:"anti_hipertensivo",
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
{id:"med-azilsartana", contexto:["pa","ubs"], classe:"BRA — Bloqueador AT1 (mais recente)", grupo:"anti_hipertensivo",
nome:"Azilsartana (medoxomila)",
sin:["Edarbi","Edarbyclor (combinada)"],
formas:["Comprimidos 20, 40, 80 mg — privada"],
resumo:"BRA mais recente. MAIOR POTÊNCIA anti-hipertensiva entre BRA em estudos head-to-head. Evidência CV de longo prazo ainda em desenvolvimento.",
dose_rapida:"40-80 mg VO 1×/d",
doses:[
{ind:"HAS — refratária a outros BRA", dose:"40 mg VO 1×/d inicial; titular até 80 mg/d", obs:"Em meta-análises diretas, superou valsartana, olmesartana e candesartana em redução de PA."},
{ind:"HAS estágio 2-3", dose:"80 mg/d", obs:"Pode evitar terapia tripla em alguns pacientes."},
],
ajustes:{
irc:"Sem ajuste rotineiro até TFG 30.",
iht:"Sem ajuste rotineiro.",
idoso:"Sem ajuste.",
gestante:"CATEGORIA D — contraindicado.",
aleita:"Evitar.",
ped:"Não recomendada.",
},
mecanismo:"BRA com dissociação MAIS LENTA do receptor AT1 entre as BRA → maior eficácia 24h. Pró-droga (medoxomila → azilsartana ácida).",
farmacocin:{absorc:"VO: 60%", distrib:"Ampla", metab:"CYP2C9", elimin:"Fezes 55% + Renal 42%", meiavida:"11h", ligacao:">99%"},
espectro:["HAS — maior potência anti-hipertensiva","HAS refratária a outros BRA"],
interacoes:[{droga:"Mesmas dos BRA", efeito:"AINE, K+, IECA."}],
efeitos:[
{tipo:"comum", item:"Diarreia (mais incidente que outras BRA), tontura, hipotensão postural"},
{tipo:"sério", item:"Angioedema, IRA"},
{tipo:"raro", item:"Hepatite"},
],
alertas:[
{nivel:"crit", txt:"GESTAÇÃO: contraindicado."},
{nivel:"warn", txt:"POUCA EVIDÊNCIA CV de longo prazo — droga ainda relativamente recente. Eficácia anti-hipertensiva é o ponto forte."},
{nivel:"info", txt:"Opção quando outros BRA insuficientes. Custo é maior."},
],
preparo:"VO comprimido, com ou sem alimento.",
monitor:"PA, K+, Cr basal + 1-2 sem + 1 mês + 6 meses.",
diretriz:"DBHA 2025. Estudos Sica et al.",
fluxo:null, calcs:[],
},
{id:"med-bisoprolol", contexto:["pa","ubs"], classe:"β1-bloqueador altamente cardiosseletivo", grupo:"anti_hipertensivo",
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
{id:"med-candesartana", contexto:["pa","ubs"], classe:"BRA — Bloqueador AT1", grupo:"anti_hipertensivo",
nome:"Candesartana",
sin:["Atacand","Blopress"],
formas:["Comprimidos 8, 16, 32 mg — privada"],
resumo:"BRA com forte evidência em IC (CHARM trial). Boa cobertura 24h. Alternativa moderna à losartana.",
dose_rapida:"8-32 mg VO 1×/d",
doses:[
{ind:"HAS", dose:"8 mg VO 1×/d inicial; titular até 32 mg/d", obs:""},
{ind:"IC com FE reduzida (CHARM-Alternative)", dose:"4-32 mg/d (alvo dose máxima tolerada)", obs:"CHARM — reduz mortalidade em IC FE reduzida em pacientes intolerantes a IECA."},
{ind:"IC com FE preservada (CHARM-Preserved)", dose:"32 mg/d", obs:"Benefício mais modesto."},
],
ajustes:{
irc:"Sem ajuste rotineiro até TFG 30.",
iht:"IH grave: iniciar 4 mg.",
idoso:"Iniciar 4 mg.",
gestante:"CATEGORIA D — contraindicado.",
aleita:"Evitar.",
ped:"1-17 anos: dose por peso.",
},
mecanismo:"BRA com MAIOR AFINIDADE pelo receptor AT1 entre BRA e dissociação mais lenta — eficácia anti-hipertensiva prolongada.",
farmacocin:{absorc:"VO: 15% (pró-droga)", distrib:"Ampla", metab:"Mínimo", elimin:"Renal 33% + Bile 67%", meiavida:"9-12h", ligacao:">99%"},
espectro:["HAS","IC com FE reduzida (CHARM)","IC FE preservada"],
interacoes:[{droga:"Mesmas dos BRA", efeito:"AINE, K+, IECA."}],
efeitos:[
{tipo:"comum", item:"Tontura, hipercalemia leve"},
{tipo:"sério", item:"Angioedema, IRA, hipercalemia grave"},
{tipo:"raro", item:"Hepatite"},
],
alertas:[
{nivel:"crit", txt:"GESTAÇÃO: contraindicado."},
{nivel:"warn", txt:"CHARM trials: evidência sólida em IC — boa escolha quando IECA não tolerado."},
{nivel:"info", txt:"DOSE EQUIVALENTE: 16 mg candesartana ≈ 50 mg losartana ≈ 80 mg valsartana."},
],
preparo:"VO comprimido, com ou sem alimento.",
monitor:"PA, K+, Cr basal + 1-2 sem + 1 mês + 6 meses.",
diretriz:"DBHA 2025. CHARM-Alternative, CHARM-Preserved.",
fluxo:null, calcs:[],
},
{id:"med-captopril", contexto:["pa","ubs"], classe:"IECA de curta ação — Inibidor da ECA", grupo:"anti_hipertensivo",
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
{id:"med-carvedilol", contexto:["pa","ubs"], classe:"α1 + β-bloqueador não-seletivo", grupo:"anti_hipertensivo",
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
{id:"med-clonidina", contexto:["pa","ubs"], classe:"Simpatolítico central — agonista α2", grupo:"anti_hipertensivo",
nome:"Clonidina",
sin:["Atensina","Catapresan"],
formas:["Comprimidos 0,1 mg, 0,15 mg, 0,2 mg — SUS","Adesivo transdérmico 0,1-0,3 mg/24h — privada"],
resumo:"Simpatolítico central α2-agonista. Uso em URGÊNCIA HIPERTENSIVA, HAS resistente, abstinência alcoólica/opioide, tireotoxicose. RISCO REBOTE se suspenso abruptamente.",
dose_rapida:"Urgência: 0,1-0,2 mg VO | Crônico: 0,1 mg 8/8h ou 12/12h",
doses:[
{ind:"URGÊNCIA hipertensiva (sem LOA aguda)", dose:"0,1-0,2 mg VO, repetir 0,1 mg cada 1-2h se necessário (máx 0,7 mg em 24h)", obs:"Início 30-60 min. Alternativa ao captopril 25 mg SL. Sedação esperada."},
{ind:"HAS resistente (4ª-5ª droga)", dose:"0,1 mg 8/8h ou 12/12h inicial; titular até 0,3 mg 8/8h", obs:"Posologia inconveniente — alternativa: adesivo 1×/sem."},
{ind:"Síndrome de abstinência alcoólica/opioide", dose:"0,1-0,2 mg 8/8h", obs:"Reduz hiperatividade simpática (taquicardia, HAS, agitação)."},
{ind:"TDAH em criança (off-label)", dose:"0,05-0,2 mg/d", obs:"Especializado — neuro/psiquiatria infantil."},
{ind:"Tireotoxicose (alternativa a β-bloq em asma)", dose:"0,1-0,2 mg 8/8h", obs:"Reduz sintomas adrenérgicos."},
{ind:"Fogachos da menopausa (off-label)", dose:"0,05-0,1 mg 12/12h", obs:"Alternativa não-hormonal."},
],
ajustes:{
irc:"ClCr <30: reduzir 50%.",
iht:"Sem ajuste rotineiro.",
idoso:"Iniciar 0,05 mg 12/12h. Risco sedação + hipotensão postural alto.",
gestante:"Categoria C — pode usar se essencial.",
aleita:"Compatível em dose baixa.",
ped:"TDAH off-label.",
},
mecanismo:"Agonista α2 central no SNC → reduz tônus simpático periférico → ↓ FC + ↓ PA. Em uso crônico há down-regulation dos receptores → SUSPENSÃO ABRUPTA = rebote adrenérgico (taquicardia, HAS grave).",
farmacocin:{absorc:"VO: 75-95% | Adesivo: 24h", distrib:"Atravessa BBB", metab:"Hepático parcial", elimin:"Renal 50% inalterada", meiavida:"6-20h", ligacao:"~30%"},
espectro:["Urgência hipertensiva (alternativa ao captopril)","HAS resistente (linha tardia)","Abstinência alcoólica/opioide","TDAH em criança","Tireotoxicose (em asma)","Fogachos da menopausa"],
interacoes:[
{droga:"β-bloqueadores", efeito:"Suspensão da clonidina + β-bloq simultâneo = CRISE HIPERTENSIVA. Suspender β-bloq ANTES da clonidina."},
{droga:"Antidepressivos tricíclicos", efeito:"Reduzem efeito da clonidina (bloqueiam α2)."},
{droga:"Álcool, sedativos", efeito:"Sedação aditiva."},
],
efeitos:[
{tipo:"comum", item:"SEDAÇÃO importante, boca seca (>50%), hipotensão postural, bradicardia, constipação, disfunção sexual"},
{tipo:"sério", item:"REBOTE HIPERTENSIVO se suspenso abruptamente (HAS grave + taquicardia em 24-48h), depressão, BAV, bradicardia grave"},
{tipo:"raro", item:"Síndrome de Raynaud, alucinações, parkinsonismo"},
],
alertas:[
{nivel:"crit", txt:"REBOTE HIPERTENSIVO: NUNCA suspender abruptamente em uso >2 semanas — rebote 24-48h após (HAS grave, taquicardia, sudorese, agitação, risco AVC/IAM). DESMAMAR gradualmente em 1-2 semanas."},
{nivel:"crit", txt:"INTERAÇÃO com β-BLOQUEADOR: se paciente usa AMBOS, RETIRAR β-BLOQ PRIMEIRO (vários dias antes) e depois clonidina. Suspensão simultânea = crise."},
{nivel:"warn", txt:"SEDAÇÃO LIMITA USO em paciente que dirige/trabalho com atenção. Em idoso: risco queda."},
{nivel:"warn", txt:"BOCA SECA: efeito muito frequente — hidratação, gomas sem açúcar. Pode causar má aderência."},
{nivel:"info", txt:"ADESIVO TRANSDÉRMICO: troca semanal — adesão melhor, mas reação local em 30-50%."},
],
preparo:"VO comprimido. Adesivo: aplicar em pele íntegra do tronco superior/braço.",
monitor:"PA, FC, sintomas posturais, sedação.",
diretriz:"DBHA 2025.",
fluxo:null, calcs:[],
},
{id:"med-clortalidona", contexto:["pa","ubs"], classe:"Diurético tiazídico-like de longa ação", grupo:"anti_hipertensivo",
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
{id:"med-diltiazem", contexto:["pa","ubs"], classe:"BCC NÃO-diidropiridínico — controle FC + vasodilatador", grupo:"anti_hipertensivo",
nome:"Diltiazem",
sin:["Cardizem","Cardizem CD","Balcor"],
formas:["Comprimidos 30, 60 mg (curta ação) — privada","Cápsulas retard 90, 120, 180, 240, 300 mg — privada","Ampolas 25 mg (IV — FA aguda)"],
resumo:"BCC NÃO-DHP — alternativa ao verapamil com MENOR efeito inotrópico negativo e MENOS constipação. Controle FC em FA + vasodilatador.",
dose_rapida:"180-360 mg/d VO retard | IV bolus 0,25 mg/kg",
doses:[
{ind:"FA com RVR (controle FC ambulatorial)", dose:"180-360 mg/d VO retard 1×/d", obs:"Alternativa ao verapamil — MENOS constipação."},
{ind:"FA com RVR aguda (IV)", dose:"0,25 mg/kg IV bolus em 2 min (~15-20 mg em 70 kg); pode repetir 0,35 mg/kg em 15 min; BIC 5-15 mg/h", obs:"Útil em paciente SEM IC. Monitor PA contínuo."},
{ind:"Angina (especialmente vasoespástica)", dose:"180-360 mg/d", obs:"Vasodilatador coronariano + ↓ FC."},
{ind:"HAS com arritmia (uso seletivo)", dose:"180-360 mg/d retard", obs:"Não 1ª linha em HAS isolada."},
],
ajustes:{
irc:"Sem ajuste rotineiro.",
iht:"IH grave: reduzir 50%.",
idoso:"Iniciar 60-120 mg/d.",
gestante:"Categoria C.",
aleita:"Compatível em dose baixa.",
ped:"Uso especializado.",
},
mecanismo:"BCC NÃO-DHP — bloqueia canais Ca²⁺ tipo-L. Vs verapamil: MAIOR vasodilatador, MENOR cronotrópico/inotrópico negativo. Vs DHP: tem efeito nodal AV (útil em FA).",
farmacocin:{absorc:"VO: 40-60% (1ª passagem)", distrib:"Ampla", metab:"CYP3A4 → desacetildiltiazem (ativo)", elimin:"Renal 35% + Fezes 65%", meiavida:"3-5h | Retard 5-7h", ligacao:"~80%"},
espectro:["FA com RVR","Angina vasoespástica","HAS + arritmia"],
interacoes:[
{droga:"β-bloqueadores", efeito:"BAV/bradicardia — NÃO combinar VO."},
{droga:"Digoxina", efeito:"↑ digoxina ~20%."},
{droga:"Sinvastatina", efeito:"↑ estatina — limitar 20 mg/d."},
{droga:"Inibidores CYP3A4", efeito:"↑ diltiazem."},
],
efeitos:[
{tipo:"comum", item:"Bradicardia, hipotensão postural, edema maleolar, constipação (MENOR que verapamil)"},
{tipo:"sério", item:"BAV avançado, IC aguda em FE reduzida (cuidado), bradicardia sintomática"},
{tipo:"raro", item:"Hiperplasia gengival, hepatite"},
],
alertas:[
{nivel:"crit", txt:"CONTRAINDICADO em IC com FE REDUZIDA descompensada, BAV 2°/3° grau sem MP, FA com WPW."},
{nivel:"crit", txt:"NÃO COMBINAR com β-bloq VO — risco BAV/bradicardia."},
{nivel:"warn", txt:"DILTIAZEM vs VERAPAMIL: diltiazem é MAIS vasodilatador + MENOS constipação + MENOR depressão miocárdica. Preferível em maioria dos cenários."},
{nivel:"info", txt:"FORMULAÇÕES MÚLTIPLAS: curta (30/60 mg 8/8h), retard 1×/d ou 12/12h. Confirmar nome comercial."},
],
preparo:"VO comprimido, com ou sem alimento. IV: bolus 2 min sob monitor ECG.",
monitor:"PA, FC, ECG, edema.",
diretriz:"DBHA 2025. ESC AF 2024.",
fluxo:null, calcs:[],
},
{id:"med-doxazosina", contexto:["pa","ubs"], classe:"α1-bloqueador seletivo", grupo:"anti_hipertensivo",
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
{id:"med-enalapril", contexto:["pa","ubs"], classe:"IECA de meia ação", grupo:"anti_hipertensivo",
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
{id:"med-hidroclorotiazida", contexto:["pa","ubs"], classe:"Diurético tiazídico", grupo:"anti_hipertensivo",
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
{id:"med-indapamida", contexto:["pa","ubs"], classe:"Diurético tiazídico-like (não-tiazídico estrutural)", grupo:"anti_hipertensivo",
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
{id:"med-irbesartana", contexto:["pa","ubs"], classe:"BRA — Bloqueador AT1", grupo:"anti_hipertensivo",
nome:"Irbesartana",
sin:["Aprovel","Avapro","Coaprovel (combinada)"],
formas:["Comprimidos 75, 150, 300 mg — privada"],
resumo:"BRA com evidência sólida em nefroproteção em DM2 (IDNT, IRMA-2). Posologia 1×/d simples.",
dose_rapida:"150-300 mg VO 1×/d",
doses:[
{ind:"HAS", dose:"150 mg VO 1×/d inicial; titular até 300 mg/d", obs:"Combinação fixa com HCTZ (Coaprovel)."},
{ind:"Nefropatia diabética em DM2 (IDNT, IRMA-2)", dose:"300 mg/d", obs:"IDNT — reduz progressão IRC em DM2 com nefropatia estabelecida. IRMA-2 — previne progressão de micro para macroalbuminúria."},
],
ajustes:{
irc:"Sem ajuste rotineiro até TFG 30.",
iht:"Sem ajuste rotineiro.",
idoso:"Iniciar 75 mg.",
gestante:"CATEGORIA D — contraindicado.",
aleita:"Evitar.",
ped:"≥6 anos: 75-150 mg/d.",
},
mecanismo:"BRA com farmacocinética prolongada permitindo cobertura 24h em dose única.",
farmacocin:{absorc:"VO: 60-80%", distrib:"Ampla", metab:"CYP2C9 mínimo", elimin:"Fezes 80%", meiavida:"11-15h", ligacao:"~96%"},
espectro:["HAS","Nefropatia diabética DM2 (IDNT, IRMA-2)","DM2 com microalbuminúria"],
interacoes:[{droga:"Mesmas dos BRA", efeito:"AINE, K+, IECA."}],
efeitos:[
{tipo:"comum", item:"Tontura, hipercalemia leve, fadiga"},
{tipo:"sério", item:"Angioedema, IRA"},
{tipo:"raro", item:"Hepatite, anemia"},
],
alertas:[
{nivel:"crit", txt:"GESTAÇÃO: contraindicado."},
{nivel:"warn", txt:"NEFROPROTEÇÃO DM2: IDNT/IRMA-2 são estudos clássicos — irbesartana tem evidência específica em nefroproteção diabética."},
{nivel:"info", txt:"Coaprovel (irbesartana 150/300 mg + HCTZ 12,5 mg) — combinação fixa útil."},
],
preparo:"VO comprimido, com ou sem alimento.",
monitor:"PA, K+, Cr basal + 1-2 sem + 1 mês + 6 meses + RAC anual em DM.",
diretriz:"DBHA 2025. IDNT (NEJM 2001). IRMA-2.",
fluxo:null, calcs:[],
},
{id:"med-lercanidipino", contexto:["pa","ubs"], classe:"BCC diidropiridínico de 3ª geração", grupo:"anti_hipertensivo",
nome:"Lercanidipino",
sin:["Zanidip","Zanedip"],
formas:["Comprimidos 10, 20 mg — privada"],
resumo:"BCC-DHP de 3ª geração — MENOS EDEMA MALEOLAR que anlodipino (5-10% vs 10-20%). Boa alternativa em paciente intolerante ao anlodipino.",
dose_rapida:"10-20 mg VO 1×/d (EM JEJUM)",
doses:[
{ind:"HAS — alternativa ao anlodipino (especialmente se edema)", dose:"10 mg VO 1×/d inicial; titular até 20 mg/d", obs:"TOMAR EM JEJUM (15 min antes da refeição) — comida triplica a absorção (risco hipotensão)."},
{ind:"HAS em idoso (boa tolerância)", dose:"10 mg/d", obs:"Menos taquicardia reflexa e edema vs outros BCC."},
],
ajustes:{
irc:"Sem ajuste até TFG 30. <30: cautela.",
iht:"IH leve-moderada: sem ajuste. IH grave: cautela.",
idoso:"Iniciar 10 mg.",
gestante:"Categoria C — evitar (preferir nifedipino retard).",
aleita:"Sem dados.",
ped:"Não recomendada.",
},
mecanismo:"BCC-DHP de 3ª geração — alta seletividade vascular + ativação gradual por depósito lipossolúvel em membrana → vasodilatação progressiva → MENOS taquicardia reflexa e MENOS edema maleolar.",
farmacocin:{absorc:"VO: 10% em jejum. Comida ↑ 3× absorção → tomar EM JEJUM.", distrib:"Alta lipossolubilidade — depósito em membrana vascular", metab:"Hepático CYP3A4", elimin:"Fezes 50% + Renal", meiavida:"8-10h (efeito clínico 24h)", ligacao:">98%"},
espectro:["HAS — alternativa ao anlodipino","HAS com edema refratário ao anlodipino","HAS em idoso"],
interacoes:[
{droga:"Inibidores CYP3A4 (cetoconazol, claritromicina)", efeito:"↑ lercanidipino — hipotensão. EVITAR."},
{droga:"Suco de grapefruit/pomelo", efeito:"↑ lercanidipino significativamente — EVITAR."},
{droga:"Indutores CYP3A4 (rifampicina, fenitoína)", efeito:"↓ lercanidipino."},
],
efeitos:[
{tipo:"comum", item:"Edema maleolar (MENOR que anlodipino), cefaleia, rubor, palpitação"},
{tipo:"sério", item:"Hipotensão grave (em uso pós-prandial), bradicardia"},
{tipo:"raro", item:"Hiperplasia gengival"},
],
alertas:[
{nivel:"crit", txt:"TOMAR EM JEJUM (15 min antes da refeição) — comida triplica absorção → risco hipotensão grave."},
{nivel:"crit", txt:"SUCO DE GRAPEFRUIT/POMELO — aumenta drasticamente a concentração. EVITAR completamente."},
{nivel:"warn", txt:"VANTAGEM PRINCIPAL: MENOS EDEMA MALEOLAR que anlodipino (5-10% vs 10-20%). Indicado se paciente teve que suspender anlodipino por edema."},
{nivel:"info", txt:"MANIDIPINO é alternativa similar — também BCC-DHP de 3ª geração com perfil de edema melhor."},
],
preparo:"VO comprimido, EM JEJUM (15 min antes da refeição) — CRÍTICO.",
monitor:"PA, FC, edema MMII basal + 4 sem.",
diretriz:"DBHA 2025.",
fluxo:null, calcs:[],
},
{id:"med-lisinopril", contexto:["pa","ubs"], classe:"IECA de longa ação — NÃO-pró-droga", grupo:"anti_hipertensivo",
nome:"Lisinopril",
sin:["Prinivil","Zestril"],
formas:["Comprimidos 5, 10, 20 mg — privada"],
resumo:"IECA de longa ação. NÃO-PRÓ-DROGA (ativo direto, sem necessidade de fígado). Vantagem em hepatopata. Posologia 1×/d. Eliminação predominantemente renal.",
dose_rapida:"10-40 mg VO 1×/d",
doses:[
{ind:"HAS", dose:"10 mg VO 1×/d inicial; titular até 40 mg/d (máx 80 mg/d)", obs:"Posologia 1×/d. Dose mais alta que enalapril por equivalência."},
{ind:"IC com FE reduzida (ATLAS trial)", dose:"2,5-5 mg/d inicial; titular até 35-40 mg/d", obs:"ATLAS — alta dose reduz hospitalização mais que baixa dose. SOLVD também."},
{ind:"Pós-IAM com disfunção VE (GISSI-3)", dose:"5-10 mg/d", obs:"Iniciar 24h pós-IAM se PAS >100."},
{ind:"Nefropatia diabética/proteinúrica", dose:"10-40 mg/d", obs:"Reduz proteinúria + progressão IRC."},
],
ajustes:{
irc:"ClCr 30-60: 50% da dose. ClCr <30: 25%. HD: 2,5-5 mg pós-HD.",
iht:"NÃO É PRÓ-DROGA → SEM AJUSTE em IH (vantagem vs enalapril/ramipril).",
idoso:"Iniciar 2,5-5 mg.",
gestante:"CATEGORIA D — contraindicado 2º-3º trim.",
aleita:"Compatível em dose baixa.",
ped:"≥6 anos: 0,07-0,6 mg/kg/d.",
},
mecanismo:"IECA — inibe ECA. DIFERENÇA dos outros: NÃO É PRÓ-DROGA (forma ativa direta). Não depende de conversão hepática. Vantagem em IH grave (vs enalapril/ramipril/perindopril que são pró-drogas).",
farmacocin:{absorc:"VO: 25-50% (sem efeito de comida)", distrib:"Ampla", metab:"NÃO metabolizada", elimin:"Renal (100% inalterada)", meiavida:"~12h (permite 1×/d)", ligacao:"<10%"},
espectro:["HAS","IC com FE reduzida (ATLAS, SOLVD)","Pós-IAM (GISSI-3)","Nefropatia diabética","VANTAGEM em HEPATOPATA (não-pró-droga)"],
interacoes:[
{droga:"AINE", efeito:"REDUZ efeito + IRA + hipercalemia."},
{droga:"K+, espironolactona", efeito:"Hipercalemia."},
{droga:"BRA", efeito:"Não combinar."},
{droga:"Sacubitril/valsartana", efeito:"CONTRAINDICAÇÃO — wash-out 36h."},
],
efeitos:[
{tipo:"comum", item:"Tosse seca (10-15%), tontura, hipotensão, hipercalemia, ↑Cr"},
{tipo:"sério", item:"Angioedema raro, IRA aguda, hipercalemia grave"},
{tipo:"raro", item:"Neutropenia, hepatite"},
],
alertas:[
{nivel:"crit", txt:"GESTAÇÃO: contraindicado 2º-3º trimestre."},
{nivel:"warn", txt:"VANTAGEM em HEPATOPATA: lisinopril NÃO é pró-droga (vs enalapril/ramipril/perindopril que precisam de ativação hepática). Em IH grave: mantém eficácia plena."},
{nivel:"warn", txt:"ELIMINAÇÃO 100% RENAL: ajustar cuidadosamente em IRC. Diferente do enalapril (parcial hepático)."},
{nivel:"info", txt:"ATLAS trial: dose alta (32,5-35 mg/d) reduz hospitalização por IC mais que dose baixa (2,5-5 mg/d). Titular sempre que tolerar."},
],
preparo:"VO comprimido, com ou sem alimento.",
monitor:"PA, K+, Cr basal + 1-2 sem + 1 mês + 6 meses + anual.",
diretriz:"DBHA 2025. ATLAS trial. GISSI-3. SOLVD.",
fluxo:null, calcs:[],
},
{id:"med-losartana", contexto:["pa","ubs"], classe:"BRA — Bloqueador do Receptor da Angiotensina (AT1)", grupo:"anti_hipertensivo",
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
{id:"med-manidipino", contexto:["pa","ubs"], classe:"BCC diidropiridínico de 3ª geração", grupo:"anti_hipertensivo",
nome:"Manidipino",
sin:["Manyper","Caldine"],
formas:["Comprimidos 10, 20 mg — privada"],
resumo:"BCC-DHP de 3ª geração — perfil similar ao lercanidipino. MENOS EDEMA. Tomar com café (vs lercanidipino em jejum).",
dose_rapida:"10-20 mg VO 1×/d (com café)",
doses:[
{ind:"HAS — alternativa ao anlodipino", dose:"10 mg VO 1×/d (manhã com café); titular até 20 mg/d", obs:"Tomar com refeição (vs lercanidipino que é em jejum)."},
],
ajustes:{
irc:"Sem ajuste até TFG 30.",
iht:"IH grave: contraindicado.",
idoso:"Iniciar 10 mg.",
gestante:"Categoria C — evitar.",
aleita:"Sem dados.",
ped:"Não recomendada.",
},
mecanismo:"BCC-DHP de 3ª geração — mesma classe do lercanidipino. Liberação gradual em membrana vascular.",
farmacocin:{absorc:"VO: ~15% (comida ↑ absorção)", distrib:"Alta lipossolubilidade", metab:"CYP3A4", elimin:"Fezes", meiavida:"4-8h (efeito 24h)", ligacao:">99%"},
espectro:["HAS — alternativa ao anlodipino","HAS com edema refratário"],
interacoes:[{droga:"Mesmas do lercanidipino", efeito:"CYP3A4, grapefruit."}],
efeitos:[
{tipo:"comum", item:"Edema maleolar (menor que anlodipino), cefaleia, rubor"},
{tipo:"sério", item:"Hipotensão"},
{tipo:"raro", item:"Hepatotoxicidade"},
],
alertas:[
{nivel:"warn", txt:"MENOR edema maleolar que anlodipino — alternativa em paciente intolerante."},
{nivel:"info", txt:"DIFERENÇA do lercanidipino: tomar com café (vs lercanidipino em jejum). Conferir orientação."},
],
preparo:"VO comprimido, com café da manhã.",
monitor:"PA, FC, edema MMII.",
diretriz:"DBHA 2025.",
fluxo:null, calcs:[],
},
{id:"med-metildopa", contexto:["pa","ubs"], classe:"Simpatolítico de ação central — agonista α2", grupo:"anti_hipertensivo",
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
{id:"med-metoprolol", contexto:["pa","ubs"], classe:"β1-bloqueador cardiosseletivo — succinato (longa ação) ou tartarato (curta)", grupo:"anti_hipertensivo",
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
{id:"med-minoxidil", contexto:["pa","ubs"], classe:"Vasodilatador arterial direto — abridor canal K-ATP", grupo:"anti_hipertensivo",
nome:"Minoxidil (oral)",
sin:["Loniten (oral)","Rogaine (tópico — alopecia, NÃO HAS)"],
formas:["Comprimidos 5, 10 mg (oral — HAS resistente extrema) — privada","Solução tópica 2-5% — APENAS para alopecia, não para HAS"],
resumo:"VASODILATADOR ARTERIAL EXTREMAMENTE POTENTE — ÚLTIMA LINHA em HAS resistente refratária. SEMPRE combinado com β-bloq + diurético de alça. Efeito colateral notório: HIPERTRICOSE.",
dose_rapida:"5-40 mg VO 1-2×/d (uso especializado)",
doses:[
{ind:"HAS RESISTENTE REFRATÁRIA — ÚLTIMA LINHA", dose:"5 mg VO 1×/d inicial; titular cada 3 dias até 10-40 mg/d em 1-2 tomadas (máx 100 mg/d)", obs:"SEMPRE combinado com β-bloq (controle taquicardia reflexa) + DIURÉTICO DE ALÇA (controle retenção)."},
],
ajustes:{
irc:"Reduzir dose. ClCr <30: cautela extrema.",
iht:"Cautela.",
idoso:"Iniciar 2,5 mg. Risco IC + hipertricose alto.",
gestante:"Categoria C — evitar.",
aleita:"Sem dados.",
ped:"Especializado.",
},
mecanismo:"Pró-droga — minoxidil sulfato (ativo) abre canais K-ATP em musculatura lisa arterial → hiperpolarização → vasodilatação ARTERIAL POTENTE (não venosa). Ativa simpático reflexamente → taquicardia + retenção de Na+/H2O → necessidade obrigatória de β-bloq + diurético.",
farmacocin:{absorc:"VO: 90%", distrib:"Ampla", metab:"Hepático (sulfação)", elimin:"Renal", meiavida:"3-4h (efeito 24h)", ligacao:"Mínima"},
espectro:["HAS resistente REFRATÁRIA — última linha (após espironolactona, bisoprolol, doxazosina)","Alopecia androgenética — formulação TÓPICA APENAS"],
interacoes:[
{droga:"β-bloqueadores", efeito:"COMBINAÇÃO OBRIGATÓRIA — minoxidil isolado causa taquicardia extrema."},
{droga:"Diuréticos de alça (furosemida)", efeito:"COMBINAÇÃO OBRIGATÓRIA — minoxidil isolado causa retenção massiva."},
],
efeitos:[
{tipo:"comum", item:"HIPERTRICOSE (80%! — pelos no rosto, tronco, MMII; reversível 1-6 meses pós-suspensão), retenção líquida/edema, taquicardia reflexa, cefaleia"},
{tipo:"sério", item:"DERRAME PERICÁRDICO (3% — tamponamento possível), IC por sobrecarga volume, hipotensão grave, isquemia miocárdica (taquicardia)"},
{tipo:"raro", item:"Necrose papilar renal, alterações ECG"},
],
alertas:[
{nivel:"crit", txt:"NUNCA USAR ISOLADO — sempre combinado com β-BLOQ + DIURÉTICO DE ALÇA. Sem essa combinação: descompensação CV grave."},
{nivel:"crit", txt:"DERRAME PERICÁRDICO em 3% — pode causar tamponamento. ECO basal e 4-6 sem. Suspender se sintomas."},
{nivel:"crit", txt:"ÚLTIMA LINHA — usar APENAS quando HAS resistente comprovada após exclusão de HAS secundária, otimização de adesão, falência de espironolactona + bisoprolol/doxazosina."},
{nivel:"warn", txt:"HIPERTRICOSE em 80% — orientar paciente ANTES (motivo principal de descontinuação, especialmente mulheres). Reversível em 1-6 meses pós-suspensão."},
{nivel:"info", txt:"VERSÃO TÓPICA (Rogaine): apenas alopecia androgenética — NÃO usar via oral para alopecia."},
],
preparo:"VO comprimido. Sempre prescrever com β-bloq + diurético de alça concomitantes.",
monitor:"PA, FC, peso (retenção), ECG, ECO 4-6 sem (pericárdio), eletrólitos, função renal.",
diretriz:"DBHA 2025.",
fluxo:null, calcs:[],
},
{id:"med-nebivolol", contexto:["pa","ubs"], classe:"β1-bloqueador altamente cardiosseletivo + vasodilatador (NO)", grupo:"anti_hipertensivo",
nome:"Nebivolol",
sin:["Nebilet","Nebilenin"],
formas:["Comprimidos 5 mg — privada"],
resumo:"β1-bloqueador de 3ª geração com efeito vasodilatador adicional via óxido nítrico (NO). MENOS efeitos colaterais (broncoespasmo, disfunção sexual). Boa opção em idoso (SENIORS).",
dose_rapida:"5-10 mg VO 1×/d",
doses:[
{ind:"HAS — uso seletivo (paciente intolerante a outros β-bloq)", dose:"5 mg VO 1×/d inicial; titular até 10 mg/d", obs:"Não 1ª linha em HAS isolada (DBHA 2025)."},
{ind:"IC com FE reduzida em IDOSO (SENIORS trial)", dose:"1,25 mg/d inicial; DOBRAR cada 2 sem até 10 mg/d", obs:"SENIORS — eficácia em ≥70 anos. Alternativa em idoso intolerante."},
{ind:"HAS com disfunção erétil (perfil favorável)", dose:"5 mg/d", obs:"MENOR disfunção sexual via vasodilatação por NO."},
],
ajustes:{
irc:"ClCr <30: iniciar 2,5 mg.",
iht:"IH grave: cautela.",
idoso:"Iniciar 2,5 mg.",
gestante:"Categoria C — evitar.",
aleita:"Cautela.",
ped:"Não recomendada.",
},
mecanismo:"β1-bloqueador HIGHLY seletivo (maior seletividade β1/β2 entre β-bloq) + vasodilatador via ↑ óxido nítrico (NO) endotelial. Perfil sexual + metabólico melhor que outros β-bloq.",
farmacocin:{absorc:"VO: 12-96% (variabilidade CYP2D6)", distrib:"Ampla", metab:"CYP2D6 — metabólitos ativos", elimin:"Renal e fezes", meiavida:"10-50h (depende CYP2D6)", ligacao:"~98%"},
espectro:["HAS — opção em intolerância","IC com FE reduzida em idoso (SENIORS)","HAS com disfunção erétil"],
interacoes:[
{droga:"BCC não-DHP", efeito:"Bradicardia/BAV — não combinar."},
{droga:"Inibidores CYP2D6 (fluoxetina, paroxetina, bupropiona)", efeito:"↑ nebivolol — hipotensão."},
],
efeitos:[
{tipo:"comum", item:"Cefaleia, fadiga, bradicardia (menor que atenolol), edema (menor)"},
{tipo:"sério", item:"Bradicardia grave/BAV"},
{tipo:"raro", item:"Broncoespasmo (raríssimo — alta seletividade β1)"},
],
alertas:[
{nivel:"warn", txt:"MAIOR SELETIVIDADE β1 entre β-bloq — MELHOR perfil em DPOC, asma controlada, DM."},
{nivel:"warn", txt:"VASODILATADOR via NO — perfil sexual MELHOR que outros β-bloq."},
{nivel:"info", txt:"CYP2D6: 5-10% da população são metabolizadores lentos → ↑ efeito. Iniciar dose menor em risco."},
{nivel:"info", txt:"SENIORS trial: eficácia em ≥70 anos com IC. Alternativa quando bisoprolol/carvedilol mal tolerados."},
],
preparo:"VO comprimido, com ou sem alimento.",
monitor:"PA, FC, sintomas IC.",
diretriz:"DBHA 2025. SENIORS trial.",
fluxo:null, calcs:[],
},
{id:"med-nifedipino", contexto:["pa","ubs"], classe:"BCC diidropiridínico — formulação retard", grupo:"anti_hipertensivo",
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
{id:"med-olmesartana", contexto:["pa","ubs"], classe:"BRA — Bloqueador AT1", grupo:"anti_hipertensivo",
nome:"Olmesartana",
sin:["Benicar","Benicar HCT","Olmetec"],
formas:["Comprimidos 20, 40 mg — privada","Combinações fixas: olmesartana+HCTZ; olmesartana+anlodipino (Sevikar)"],
resumo:"BRA com maior potência por mg. Eficácia 24h excelente. Cuidado raro com ENTEROPATIA SPRUE-LIKE em uso prolongado.",
dose_rapida:"20-40 mg VO 1×/d",
doses:[
{ind:"HAS — monoterapia ou combinada", dose:"20 mg VO 1×/d inicial; titular até 40 mg/d", obs:"Combinações fixas com HCTZ ou anlodipino (Sevikar) disponíveis."},
{ind:"DM2 com microalbuminúria", dose:"20-40 mg/d", obs:"ROADMAP — estudos sugerem nefroproteção."},
],
ajustes:{
irc:"Sem ajuste rotineiro. ClCr <20: cautela.",
iht:"IH grave: cautela.",
idoso:"Sem ajuste.",
gestante:"CATEGORIA D — contraindicado 2º-3º trim.",
aleita:"Evitar.",
ped:"≥6 anos: especializado.",
},
mecanismo:"Antagonista AT1 — maior potência por mg entre BRA. Forte ligação ao receptor. Pró-droga ativada por hidrólise.",
farmacocin:{absorc:"VO: 26%", distrib:"Ampla", metab:"Hidrólise rápida", elimin:"Fezes + Renal", meiavida:"10-15h", ligacao:">99%"},
espectro:["HAS","HAS resistente","DM2 com microalbuminúria","Combinação BCC (Sevikar)"],
interacoes:[
{droga:"AINE, K+, IECA, espironolactona", efeito:"Hipercalemia, IRA."},
{droga:"Antiácidos", efeito:"↓ absorção — separar 2h."},
{droga:"Lítio", efeito:"↑ lítio."},
],
efeitos:[
{tipo:"comum", item:"Tontura, hipercalemia leve, ↑Cr leve"},
{tipo:"sério", item:"Angioedema raro, ENTEROPATIA SPRUE-LIKE (diarreia crônica + perda peso + atrofia vilositária — reversível ao suspender)"},
{tipo:"raro", item:"Hepatotoxicidade"},
],
alertas:[
{nivel:"crit", txt:"GESTAÇÃO: contraindicado."},
{nivel:"warn", txt:"ENTEROPATIA SPRUE-LIKE: efeito raro mas DESCRITO ESPECIFICAMENTE para olmesartana. Suspeitar em uso prolongado (meses-anos) com diarreia crônica + perda peso + má-absorção. SUSPENDER → resolução em semanas. Pode confundir com doença celíaca (biópsia parecida)."},
{nivel:"warn", txt:"MAIOR POTÊNCIA por mg entre BRA — útil em HAS resistente. Cuidado com hipotensão em idoso magro."},
{nivel:"info", txt:"SEVIKAR (olmesartana + anlodipino): combinação fixa moderna com bom perfil em HAS estágio 2-3."},
],
preparo:"VO comprimido, com ou sem alimento.",
monitor:"PA, K+, creatinina basal + 1-2 sem + 1 mês + 6 meses. Vigilar diarreia crônica em uso prolongado.",
diretriz:"DBHA 2025. ROADMAP trial. FDA warning (sprue-like).",
fluxo:null, calcs:[],
},
{id:"med-perindopril", contexto:["pa","ubs"], classe:"IECA de longa ação — pró-droga", grupo:"anti_hipertensivo",
nome:"Perindopril (arginina ou erbumina)",
sin:["Coversyl","Coversum"],
formas:["Comprimidos 4, 8 mg (erbumina) ou 5, 10 mg (arginina) — privada","Combinações fixas: perindopril + indapamida (Preterax/Noliprel); perindopril + anlodipino"],
resumo:"IECA de longa ação. Evidência CV sólida (EUROPA — DAC estável). Combinação com indapamida é PADRÃO em pós-AVC (PROGRESS). Excelente tolerabilidade.",
dose_rapida:"4-8 mg VO 1×/d (erbumina) ou 5-10 mg/d (arginina)",
doses:[
{ind:"HAS", dose:"4-5 mg VO 1×/d inicial; titular até 8-10 mg/d", obs:"Posologia 1×/d. Boa tolerância."},
{ind:"DAC estável (EUROPA trial)", dose:"8 mg/d", obs:"EUROPA — reduz desfechos CV em DAC estável, independente de HAS."},
{ind:"Pós-AVC isquêmico (PROGRESS — com indapamida)", dose:"4 mg + indapamida 2,5 mg/d", obs:"PROGRESS — reduz recorrência AVC em 28%. PADRÃO pós-AVC."},
{ind:"IC com FE preservada (PEP-CHF)", dose:"4-8 mg/d", obs:"Benefício modesto em FE preservada."},
{ind:"DM2 + macroalbuminúria (ADVANCE)", dose:"4-8 mg/d", obs:"ADVANCE — combinada com indapamida reduz desfechos macrovasculares e mortalidade total em DM2."},
],
ajustes:{
irc:"ClCr 30-60: 2-4 mg/d. ClCr <30: 2 mg dias alternados. HD: pós-HD.",
iht:"Sem ajuste rotineiro.",
idoso:"Iniciar 2 mg.",
gestante:"CATEGORIA D — contraindicado.",
aleita:"Compatível em dose baixa.",
ped:"Não recomendada.",
},
mecanismo:"IECA pró-droga — perindopril → perindoprilato ativo. Alta lipossolubilidade → penetração tecidular profunda (cardiovascular, renal) → efeito tecidular potente além do hemodinâmico.",
farmacocin:{absorc:"VO: 65-70%", distrib:"Alta penetração tecidular", metab:"Hepático → perindoprilato (ativo)", elimin:"Renal", meiavida:"Perindopril 1h | Perindoprilato 30-120h efeito clínico", ligacao:"~20%"},
espectro:["HAS","DAC estável (EUROPA)","Pós-AVC (PROGRESS — com indapamida)","IC com FE reduzida/preservada","DM2 + nefropatia (ADVANCE)"],
interacoes:[
{droga:"AINE, K+, BRA", efeito:"Como demais IECA."},
{droga:"Sacubitril/valsartana", efeito:"CONTRAINDICAÇÃO — wash-out 36h."},
],
efeitos:[
{tipo:"comum", item:"Tosse seca, tontura, hipotensão"},
{tipo:"sério", item:"Angioedema, IRA, hipercalemia"},
{tipo:"raro", item:"Neutropenia"},
],
alertas:[
{nivel:"crit", txt:"GESTAÇÃO: contraindicado."},
{nivel:"warn", txt:"PROGRESS trial: perindopril + indapamida (Preterax/Noliprel) é PADRÃO pós-AVC isquêmico — reduz recorrência 28%."},
{nivel:"warn", txt:"EUROPA trial: perindopril em DAC estável reduz desfechos CV 20% — mesmo SEM HAS, IC ou disfunção VE."},
{nivel:"info", txt:"ARGININA vs ERBUMINA: mesma molécula ativa. Doses ligeiramente diferentes (4 mg erbumina ≈ 5 mg arginina)."},
],
preparo:"VO comprimido, em jejum (manhã, 30 min antes do café — absorção 2× melhor que com comida).",
monitor:"PA, K+, Cr basal + 1-2 sem + 1 mês + 6 meses.",
diretriz:"DBHA 2025. EUROPA trial. PROGRESS trial. ADVANCE.",
fluxo:null, calcs:[],
},
{id:"med-propranolol", contexto:["pa","ubs"], classe:"β-bloqueador NÃO-seletivo (β1 + β2)", grupo:"anti_hipertensivo",
nome:"Propranolol",
sin:["Inderal","Pranolol"],
formas:["Comprimidos 10, 40, 80 mg — SUS/REMUME","Cápsulas LP 80, 120, 160 mg — privada","Ampolas 1 mg/mL (IV — emergência)"],
resumo:"β-bloq não-seletivo clássico, SUS amplamente disponível. Indicações específicas: TIREOTOXICOSE, profilaxia ENXAQUECA, TREMOR ESSENCIAL, ansiedade situacional, SANGRAMENTO VARICOSO. NÃO 1ª linha em HAS.",
dose_rapida:"VO: 40-160 mg/d em 2-3 tomadas | Crise tireoidiana IV: 1-5 mg lento",
doses:[
{ind:"Tireotoxicose / Crise tireoidiana (controle adrenérgico)", dose:"40-120 mg VO 6/6h ou 8/8h | Crise: 1-5 mg IV lento ou 60-80 mg VO 4/4h", obs:"Bloqueia efeitos adrenérgicos + inibe conversão T4→T3 periférica. Combinar com PTU/metimazol + lugol."},
{ind:"Profilaxia de enxaqueca", dose:"40-160 mg/d divididos", obs:"1ª linha em profilaxia farmacológica."},
{ind:"Tremor essencial", dose:"40-320 mg/d divididos", obs:"Eficácia em 50-70%."},
{ind:"Ansiedade situacional / desempenho", dose:"10-40 mg VO 30-60 min antes do evento", obs:"Bloqueia sintomas autonômicos."},
{ind:"Sangramento varicoso esofágico (profilaxia)", dose:"20-40 mg 12/12h, titular até FC <55-60 ou ↓25% basal", obs:"Reduz pressão portal. Carvedilol é alternativa."},
{ind:"HAS / Pós-IAM (uso seletivo)", dose:"40-80 mg 12/12h", obs:"NÃO 1ª linha (DBHA 2025). Bisoprolol/metoprolol succ/carvedilol têm mais evidência em IC pós-IAM."},
],
ajustes:{
irc:"Sem ajuste (eliminação hepática).",
iht:"IH grave: reduzir 50%.",
idoso:"Iniciar 10-20 mg.",
gestante:"Categoria C — pode causar RCIU/bradicardia neonatal. Preferir alternativa em HAS gestante.",
aleita:"Compatível em dose baixa.",
ped:"0,5-4 mg/kg/d divididos.",
},
mecanismo:"β-bloqueador NÃO-SELETIVO — bloqueia β1 (FC, DC) E β2 (broncoconstrição, vasoconstrição periférica, glicogenólise). LIPOSSOLÚVEL — atravessa BBB (efeitos centrais).",
farmacocin:{absorc:"VO: 30% (1ª passagem extensa)", distrib:"Lipossolúvel — alta BBB", metab:"CYP1A2, CYP2D6 — extenso", elimin:"Renal (metabólitos)", meiavida:"3-6h | LP 8-11h", ligacao:"~90%"},
espectro:["Tireotoxicose / crise tireoidiana","Profilaxia enxaqueca","Tremor essencial","Ansiedade situacional","Sangramento varicoso esofágico","HAS (uso seletivo)","Hipertensão portal"],
interacoes:[
{droga:"BCC não-DHP (verapamil, diltiazem)", efeito:"Bradicardia/BAV — NÃO combinar VO."},
{droga:"Adrenalina (em anafilaxia)", efeito:"Bloqueio β-2 paradoxal → crise hipertensiva + broncoespasmo refratário. Usar GLUCAGON."},
{droga:"Insulina/sulfonilureia", efeito:"Mascarar hipoglicemia (sintomas adrenérgicos)."},
],
efeitos:[
{tipo:"comum", item:"Bradicardia, fadiga, extremidades frias, BRONCOESPASMO (β2 não-seletivo), hipotensão postural, pesadelos (atravessa BBB), disfunção sexual"},
{tipo:"sério", item:"Bradicardia grave/BAV, BRONCOESPASMO em asma/DPOC (CONTRAINDICAÇÃO), IC aguda em FE reduzida, mascaramento de hipoglicemia, depressão"},
{tipo:"raro", item:"Síndrome de retirada (rebote HAS + IAM)"},
],
alertas:[
{nivel:"crit", txt:"ASMA ATIVA + DPOC com broncoespasmo: CONTRAINDICADO (β2 não-seletivo). Preferir bisoprolol/nebivolol/metoprolol (β1-seletivos)."},
{nivel:"crit", txt:"DM + HIPOGLICEMIAS frequentes: propranolol mascara TODOS os sintomas adrenérgicos. Em β1-seletivo: só palpitação é mascarada."},
{nivel:"crit", txt:"NÃO SUSPENDER ABRUPTAMENTE — síndrome de retirada (rebote HAS + risco IAM em DAC). Reduzir 50% por 1-2 sem."},
{nivel:"warn", txt:"ANAFILAXIA em paciente em propranolol: adrenalina pode ter resposta paradoxal — GLUCAGON 1-5 mg IV bolus é a alternativa."},
{nivel:"info", txt:"PROFILAXIA ENXAQUECA é indicação CLÁSSICA. Topiramato e amitriptilina são alternativas."},
],
preparo:"VO comprimido, com ou sem alimento.",
monitor:"PA, FC (manter ≥55), glicemia em DM, sintomas broncoespasmo, humor.",
diretriz:"DBHA 2025. Cochrane (enxaqueca). Diretrizes Tireoide.",
fluxo:null, calcs:[],
},
{id:"med-ramipril", contexto:["pa","ubs"], classe:"IECA de longa ação", grupo:"anti_hipertensivo",
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
{id:"med-telmisartana", contexto:["pa","ubs"], classe:"BRA — Bloqueador AT1 de LONGA ação", grupo:"anti_hipertensivo",
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
{id:"med-valsartana", contexto:["pa","ubs"], classe:"BRA — Bloqueador AT1", grupo:"anti_hipertensivo",
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
{id:"med-verapamil", contexto:["pa","ubs"], classe:"BCC NÃO-diidropiridínico — cronotrópico negativo", grupo:"anti_hipertensivo",
nome:"Verapamil",
sin:["Dilacoron"],
formas:["Comprimidos 80, 120 mg (curta ação) — SUS","Comprimidos retard 120, 180, 240 mg — privada","Ampolas 5 mg/2 mL (IV — arritmia)"],
resumo:"BCC NÃO-DHP — bloqueia condução AV. Útil em FA com RVR, TSV, angina. CONTRAINDICADO em IC com FE reduzida e BAV. NÃO combinar com β-bloq.",
dose_rapida:"VO retard 120-240 mg/d | IV 5-10 mg lento (FA aguda)",
doses:[
{ind:"FA com RVR (controle FC ambulatorial)", dose:"120-360 mg/d VO retard divididos em 1-2 tomadas", obs:"Alternativa a β-bloq. Útil em asma/DPOC ativo (não broncoconstritor)."},
{ind:"TSV — cardioversão aguda (alternativa adenosina)", dose:"IV 5-10 mg em 2 min; pode repetir 10 mg em 30 min", obs:"Cuidado: hipotensão grave. Preferir adenosina. NÃO em WPW + FA."},
{ind:"Angina (incluindo Prinzmetal)", dose:"120-240 mg/d", obs:"Vasodilatação coronariana + cronotrópico negativo."},
{ind:"HAS — uso seletivo (NÃO 1ª linha)", dose:"120-240 mg/d retard", obs:"Útil em HAS + arritmia supraventricular."},
{ind:"Profilaxia enxaqueca (off-label)", dose:"120-240 mg/d", obs:"Uso em neurologia."},
],
ajustes:{
irc:"Sem ajuste rotineiro.",
iht:"IH grave: reduzir 50%.",
idoso:"Iniciar 40 mg 8/8h ou 120 mg retard 1×/d. Risco constipação grave.",
gestante:"Categoria C — pode usar em arritmia.",
aleita:"Compatível em dose baixa.",
ped:"Uso especializado.",
},
mecanismo:"BCC NÃO-DHP — bloqueia canais Ca²⁺ tipo-L em musculatura lisa vascular E miocárdio (vs DHP que é seletivo vascular). Efeitos: vasodilatação + ↓ cronotropismo nodal AV + ↓ inotropismo.",
farmacocin:{absorc:"VO: 20-35% (1ª passagem extensa)", distrib:"Ampla", metab:"CYP3A4 → norverapamil (ativo)", elimin:"Renal 70%", meiavida:"3-7h | Retard 12-16h", ligacao:"~90%"},
espectro:["FA com RVR","TSV (cardioversão aguda IV)","Angina (incluindo vasoespástica)","HAS com arritmia","Profilaxia enxaqueca"],
interacoes:[
{droga:"β-bloqueadores", efeito:"BRADICARDIA / BAV GRAVE — NÃO combinar VO."},
{droga:"Digoxina", efeito:"↑ digoxina 50-75% — reduzir digoxina."},
{droga:"Sinvastatina", efeito:"↑ estatina — rabdomiólise. Limitar sinvastatina 20 mg/d."},
{droga:"Grapefruit", efeito:"↑ verapamil — evitar."},
],
efeitos:[
{tipo:"comum", item:"CONSTIPAÇÃO (30-40% — efeito clássico), bradicardia, hipotensão postural, cefaleia, edema MMII"},
{tipo:"sério", item:"BAV avançado, IC aguda em FE reduzida (CONTRAINDICAÇÃO), hipotensão grave (IV rápido)"},
{tipo:"raro", item:"Hiperplasia gengival, ginecomastia, hepatite"},
],
alertas:[
{nivel:"crit", txt:"CONTRAINDICADO em IC com FE REDUZIDA (depressão miocárdica → piora). CONTRAINDICADO em BAV 2°/3° grau sem MP. CONTRAINDICADO em FA com WPW (acelera via acessória — FV)."},
{nivel:"crit", txt:"NÃO COMBINAR com β-BLOQ VO — risco BAV avançado, bradicardia sintomática, IC aguda."},
{nivel:"crit", txt:"IV em FA com WPW: pode degenerar para FV. Identificar QRS largo + irregular ANTES — cardioversão elétrica."},
{nivel:"warn", txt:"CONSTIPAÇÃO importante (30-40%) — fibras + hidratação. Em idoso: pode causar fecaloma."},
{nivel:"info", txt:"VERAPAMIL vs DILTIAZEM: verapamil mais cronotrópico negativo e constipação; diltiazem mais vasodilatador e menos constipação."},
],
preparo:"VO comprimido. IV bolus: 5-10 mg em 2 min sob monitor ECG.",
monitor:"PA, FC, ECG (PR, BAV), intestinal.",
diretriz:"DBHA 2025. ESC AF 2024.",
fluxo:null, calcs:[],
},
);
