/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — meds/ost.js
   3 medicações
   Grupos: ost
   =========================================================== */

MEDICACOES.push(

/* ============== OST (3) ============== */

{id:"med-alopurinol", contexto:["pa","ubs"], classe:"Inibidor da xantina oxidase — hipouricemiante", grupo:"ost",
nome:"Alopurinol",
sin:["Zyloric","Alopurin"],
formas:["Comprimidos 100 mg, 300 mg — SUS/REMUME amplo"],
resumo:"1ª LINHA em gota crônica (>90% dos casos). Reduz síntese de ácido úrico. INICIAR DOSE BAIXA + TITULAR. Risco RARO de DRESS/SSJ/NET — RASH = SUSPENDER. NUNCA combinar com azatioprina.",
dose_rapida:"Iniciar 100 mg/d, titular 100 mg cada 2-4 sem até meta (3-600 mg/d habitual)",

doses:[
{ind:"Gota crônica (manutenção)", dose:"INICIAR 100 mg VO 1×/d × 2-4 sem", obs:"NÃO INICIAR durante crise aguda (pode prolongar). Se em uso: MANTER."},
{ind:"Titulação", dose:"Aumentar 100 mg cada 2-4 sem até meta (ácido úrico <6 mg/dL ou <5 em tofácea)", obs:"Dose habitual 300-600 mg/d. Dose máxima 800 mg/d. Maioria fica com 300 mg/d."},
{ind:"Gota + IRC TFG 30-60", dose:"INICIAR 50 mg/d, titular mais devagar", obs:"Pode atingir 300-600 mg/d com cuidado — não há limite absoluto baseado em TFG."},
{ind:"Gota + IRC TFG <30", dose:"INICIAR 50 mg em dias alternados, titular muito devagar", obs:"Atingir meta com monitoramento."},
{ind:"Profilaxia sd lise tumoral (pré-quimioterapia)", dose:"600 mg/d × 2-3 dias antes da QT, manter 300 mg/d durante", obs:"Alternativa: rasburicase em alto risco."},
{ind:"Nefrolitíase úrica (sem gota)", dose:"100-300 mg/d", obs:"Junto com alcalinização urinária."},
],

ajustes:{
irc:"TFG 30-60: iniciar 50 mg/d. TFG <30: 50 mg em dias alternados. Titular muito devagar. HD: 100 mg pós-diálise.",
iht:"IH grave: cautela.",
idoso:"Iniciar 50 mg/d, titular devagar.",
gestante:"Categoria C — geralmente suspender. Em casos refratários: discutir individualizado.",
aleita:"Excretado em leite — evitar.",
ped:"Síndrome lise tumoral / hiperuricemia: 10 mg/kg/d.",
},

mecanismo:"Inibe XANTINA OXIDASE → bloqueia conversão hipoxantina → xantina → ácido úrico → ↓ síntese de urato. Metabolizado em OXIPURINOL (também ativo, meia-vida muito longa — 18-30h).",

farmacocin:{
absorc:"VO: 80-90%",
distrib:"Ampla, atravessa BBB",
metab:"Hepático → oxipurinol (metabólito ativo, eliminação renal lenta)",
elimin:"Renal (oxipurinol 70%)",
meiavida:"1-3h alopurinol, 18-30h oxipurinol",
ligacao:"Baixa (<5%)",
},

espectro:["Gota crônica (1ª linha)","Hiperuricemia secundária (lise tumoral, quimioterapia)","Nefrolitíase úrica","Síndrome de Lesch-Nyhan"],

interacoes:[
{droga:"⚠ AZATIOPRINA, 6-MERCAPTOPURINA", efeito:"CONTRAINDICAÇÃO ABSOLUTA — alopurinol inibe xantina oxidase que metaboliza azatioprina → ↑↑ azatioprina → toxicidade hematológica grave (mielossupressão fatal). Se essencial usar: reduzir azatioprina a 25-33% da dose."},
{droga:"Varfarina", efeito:"↑ INR — monitor."},
{droga:"Ciclosporina, teofilina", efeito:"↑ níveis — monitorar."},
{droga:"Tiazídicos, IECA", efeito:"↑ risco rash/hipersensibilidade ao alopurinol — cautela."},
{droga:"Ampicilina/amoxicilina", efeito:"↑ rash."},
],

efeitos:[
{tipo:"comum", item:"Rash leve (2-5%), GI (náusea, diarreia), cefaleia"},
{tipo:"sério", item:"⚠ SÍNDROME DE HIPERSENSIBILIDADE AO ALOPURINOL (AHS) — DRESS, SSJ, NET: RARO MAS POTENCIALMENTE FATAL (mortalidade até 25%). Início 2-8 sem após início. Risco: HLA-B*5801 (asiáticos), IRC, tiazídico"},
{tipo:"raro", item:"Hepatotoxicidade, vasculite, pancitopenia, eosinofilia, nefrite intersticial"},
],

alertas:[
{nivel:"crit", txt:"AZATIOPRINA / 6-MP: CONTRAINDICAÇÃO ABSOLUTA — toxicidade hematológica grave/fatal. Se essencial coadministrar: azatioprina a 25-33% da dose habitual + monitor rigoroso."},
{nivel:"crit", txt:"AHS / DRESS / SSJ / NET: raro mas FATAL. SUSPENDER IMEDIATAMENTE ao primeiro sinal de rash, febre, eosinofilia, alteração hepática. NÃO reiniciar após reação grave."},
{nivel:"crit", txt:"HLA-B*5801 em ASIÁTICOS (chineses Han, coreanos, tailandeses, indígenas americanos): testar antes de iniciar — alta especificidade para SSJ/NET. Brasileiros: considerar em descendentes asiáticos."},
{nivel:"warn", txt:"NÃO INICIAR durante crise aguda — pode prolongar. Iniciar 2-4 sem após resolução da crise. Se paciente JÁ em uso: MANTER (não suspender)."},
{nivel:"warn", txt:"PROFILAXIA com colchicina 0,6 mg/d (3-6 meses) ao iniciar alopurinol — previne crises por mobilização de cristais."},
{nivel:"warn", txt:"IRC: ajustar dose. Estudo AASK + outros não mostraram alopurinol prevenindo progressão de DRC — não usar para esse fim."},
{nivel:"info", txt:"META de ácido úrico: <6 mg/dL geral, <5 em tofácea/refratária. Sem ajuste pela meta, alta taxa de falha."},
],

preparo:"VO comprimido, após refeições, com bastante água. Hidratação ≥2L/d.",
monitor:"Ácido úrico cada 2-4 sem durante titulação, 6/6m estável. Hemograma, função renal, TGO/TGP basal + 3/3m no 1º ano.",
diretriz:"ACR 2020. EULAR 2016+update. ANVISA. CARES trial (segurança CV).",
fluxo:null, calcs:[],
},
{id:"med-colchicina", contexto:["pa","ubs"], classe:"Alcaloide — anti-inflamatório (inibidor microtúbulos)", grupo:"ost",
nome:"Colchicina",
sin:["Colchis","Colcrys"],
formas:["Comprimidos 0,5 mg, 1 mg — SUS/REMUME (0,5 mg)"],
resumo:"Anti-inflamatório SELETIVO para CRISTALOPATIAS (gota, pseudogota, FMF — febre familiar mediterrânea, pericardite). ESQUEMA MODERNO low-dose. Janela terapêutica estreita — TOXICIDADE GRAVE em sobredosagem.",
dose_rapida:"1,2 mg ATAQUE + 0,6 mg em 1h → 0,6 mg 12/12h × 5-7d (esquema moderno)",

doses:[
{ind:"Crise gotosa aguda (ESQUEMA MODERNO low-dose — ACR 2020)", dose:"1,2 mg VO ataque + 0,6 mg em 1h → 0,6 mg 12/12h × 5-7 dias", obs:"⚠ NÃO USAR ESQUEMA ANTIGO (0,6 mg de hora em hora até diarreia ou 6 mg total) — abandonado por toxicidade. Estudo AGREE confirmou eficácia similar com muito menos efeitos GI."},
{ind:"Profilaxia ao iniciar hipouricemiante", dose:"0,6 mg VO 1×/d × 3-6 MESES", obs:"Reduz crises de mobilização. Sem isso, ~40% têm crise no início."},
{ind:"Profilaxia crônica em gota refratária", dose:"0,6 mg/d", obs:""},
{ind:"FMF (febre familiar mediterrânea)", dose:"1,2-2,4 mg/d divididos 2×", obs:"Tratamento crônico previne crises e amiloidose secundária."},
{ind:"Pericardite (idiopática, pós-IAM)", dose:"0,6 mg 12/12h × 3 meses (aguda) ou 6 meses (recorrente)", obs:"Adicionar a AINE/AAS. COPE, ICAP, CORP-2 trials."},
{ind:"Pseudogota (CPPD)", dose:"Mesmo esquema da gota", obs:""},
{ind:"Doença de Behçet (manifestações cutâneas/articulares)", dose:"1-2 mg/d", obs:"Off-label, evidência."},
],

ajustes:{
irc:"TFG 30-60: máx 1,2 mg/d. TFG <30: 0,3 mg/d ou contraindicado. HD: evitar.",
iht:"IH grave (Child C): contraindicada. Child A/B: cautela, reduzir dose.",
idoso:"Cautela — toxicidade mais frequente. Ajustar por função renal.",
gestante:"Categoria C — geralmente evitar (mas usada em FMF gestante sob supervisão).",
aleita:"Geralmente evitar (presente em leite).",
ped:"Doses específicas para FMF (uso especializado).",
},

mecanismo:"Liga-se a TUBULINA → inibe polimerização de microtúbulos → bloqueia migração e fagocitose de neutrófilos → ↓ inflamação induzida por cristais. NÃO afeta urato sérico. EFEITO ANTIINFLAMATÓRIO SELETIVO para cristalopatias.",

farmacocin:{
absorc:"VO: 45%",
distrib:"Concentra em leucócitos (intracellular) — meia-vida intracelular >24h",
metab:"Hepático (CYP3A4) — ALTAMENTE SENSÍVEL a interações via CYP3A4 e P-gp",
elimin:"Biliar (80%) + Renal (20%)",
meiavida:"20-40h (mas efeito intracelular mais longo)",
ligacao:"30-50%",
},

espectro:["Crise gotosa aguda","Profilaxia gota","FMF (febre familiar mediterrânea)","Pericardite (aguda + recorrente)","Pseudogota (CPPD)","Doença de Behçet (off-label)","Pericardite COVID/pós-IAM (uso restrito)"],

interacoes:[
{droga:"⚠ ESTATINAS (atorvastatina, sinvastatina, rosuvastatina)", efeito:"↑↑ risco de miopatia/rabdomiólise. Cautela em uso conjunto."},
{droga:"⚠ CLARITROMICINA, eritromicina, telitromicina", efeito:"↑↑ colchicina (inibe CYP3A4 + P-gp) — pode causar INTOXICAÇÃO FATAL. EVITAR ou reduzir colchicina drasticamente."},
{droga:"⚠ CICLOSPORINA, tacrolimus", efeito:"↑↑ colchicina — toxicidade. Evitar."},
{droga:"⚠ DILTIAZEM, VERAPAMIL", efeito:"↑ colchicina (CYP3A4) — reduzir dose."},
{droga:"Cetoconazol, itraconazol, ritonavir, atazanavir", efeito:"↑↑ colchicina — evitar ou reduzir."},
{droga:"Suco de toranja", efeito:"↑ colchicina — evitar quantidade grande."},
{droga:"Digoxina, fibratos", efeito:"↑ risco miopatia."},
],

efeitos:[
{tipo:"comum", item:"GI (DIARREIA — 23% no esquema moderno, mas era 80% no antigo): náusea, vômito, dor abdominal — frequente, dose-dependente"},
{tipo:"sério", item:"⚠ TOXICIDADE GRAVE em sobredosagem (acidental ou interação): MIELOSSUPRESSÃO (pancitopenia), neuropatia/miopatia, rabdomiólise, hepatotoxicidade, IRA, choque, FALÊNCIA MÚLTIPLA — sem antídoto, mortalidade alta em ingestão >0,8 mg/kg"},
{tipo:"raro", item:"Alopecia (uso prolongado), ↑ CK (miopatia silenciosa), hipospermia"},
],

alertas:[
{nivel:"crit", txt:"⚠ JANELA TERAPÊUTICA MUITO ESTREITA — toxicidade grave em sobredosagem. Ingestão >0,5 mg/kg = INTOXICAÇÃO GRAVE; >0,8 mg/kg pode ser FATAL (sem antídoto). Idoso/IRC: muito mais sensível."},
{nivel:"crit", txt:"⚠ INTERAÇÃO CLARITROMICINA + COLCHICINA = INTOXICAÇÃO POTENCIALMENTE FATAL (CYP3A4 + P-gp). EVITAR combinação especialmente em IRC. Casos fatais documentados."},
{nivel:"crit", txt:"ESQUEMA ANTIGO (até diarreia ou 6 mg total) FOI ABANDONADO — toxicidade inaceitável. USAR ESQUEMA LOW-DOSE 1,2 + 0,6 + 0,6 12/12h."},
{nivel:"warn", txt:"AJUSTE EM IRC é CRÍTICO — TFG 30-60: máx 1,2 mg/d; TFG <30: 0,3 mg/d ou evitar. HD: contraindicada (não dialisa)."},
{nivel:"warn", txt:"INTERAÇÃO COM ESTATINAS: risco miopatia adicional. Monitor CPK em uso prolongado conjunto."},
{nivel:"warn", txt:"DIARREIA é SINAL DE TOXICIDADE — suspender e reavaliar. NÃO é meta terapêutica (era no esquema antigo)."},
{nivel:"info", txt:"USO EM PERICARDITE: trials COPE, ICAP, CORP-2 estabeleceram benefício — pode prescrever em emergência pós-IAM ou pericardite idiopática."},
{nivel:"info", txt:"COVID: COLCORONA trial (2021) — benefício modesto em paciente ambulatorial. NÃO é tratamento padrão atual."},
],

preparo:"VO comprimido, com ou sem alimento (com alimento se GI).",
monitor:"Hemograma + CPK + função renal/hepática periodicamente em uso crônico.",
diretriz:"ACR Gout 2020 + AGREE trial. ESC Pericardite 2015 (COPE, ICAP, CORP-2). FMF guidelines.",
fluxo:null, calcs:[],
},
{id:"med-febuxostate", contexto:["pa","ubs"], classe:"Inibidor seletivo não-purínico da xantina oxidase", grupo:"ost",
nome:"Febuxostate",
sin:["Adenuric","Uloric"],
formas:["Comprimidos 40 mg, 80 mg, 120 mg — privada"],
resumo:"2ª linha em gota — intolerância ou refratariedade ao alopurinol. Vantagem: eliminação hepática (menos ajuste em IRC). ⚠ CARES trial: ↑ mortalidade CV em paciente com DCV vs alopurinol — preferir alopurinol em paciente CV.",
dose_rapida:"40-80 mg VO 1×/d",

doses:[
{ind:"Gota crônica (intolerância ao alopurinol ou refratariedade)", dose:"40 mg VO 1×/d × 2-4 sem; se não atingir meta, aumentar para 80 mg/d", obs:"Máx 120 mg/d em refratária."},
{ind:"Gota + IRC", dose:"Sem ajuste rotineiro até TFG ~30. TFG <30: cautela", obs:"Vantagem sobre alopurinol em IRC moderada."},
],

ajustes:{
irc:"TFG ≥30: sem ajuste. TFG 15-29: máx 40 mg/d. TFG <15: evitar.",
iht:"IH leve-moderada: sem ajuste. IH grave: evitar.",
idoso:"Sem ajuste rotineiro.",
gestante:"Categoria C — evitar.",
aleita:"Evitar.",
ped:"Não estabelecido.",
},

mecanismo:"Inibidor SELETIVO da xantina oxidase (XO) — bloqueia tanto a forma oxidada quanto a reduzida (alopurinol bloqueia só a reduzida). NÃO inibe outras enzimas do metabolismo de purinas → MENOS efeito sobre azatioprina (mas ainda CONTRAINDICADO em combinação por precaução).",

farmacocin:{
absorc:"VO: 50%",
distrib:"Ampla",
metab:"Hepático (glucuronidação) — vantagem em IRC",
elimin:"Hepática (50%) + Renal (50%)",
meiavida:"5-8h",
ligacao:"99%",
},

espectro:["Gota crônica (2ª linha após alopurinol)","Intolerância ao alopurinol","Refratariedade","Síndrome lise tumoral (alternativa a alopurinol/rasburicase)"],

interacoes:[
{droga:"⚠ Azatioprina, 6-mercaptopurina", efeito:"CONTRAINDICAÇÃO por precaução — embora interação seja menor que com alopurinol, há relatos de toxicidade."},
{droga:"Teofilina", efeito:"↑ teofilina."},
],

efeitos:[
{tipo:"comum", item:"Náusea, artralgia, ↑ TGO/TGP leve, rash"},
{tipo:"sério", item:"⚠ ↑ MORTALIDADE CV em paciente com DCV estabelecida (CARES trial 2018 vs alopurinol)"},
{tipo:"raro", item:"Hepatotoxicidade grave, SSJ/NET (raros mas descritos), trombose"},
],

alertas:[
{nivel:"crit", txt:"⚠ CARES trial (NEJM 2018): febuxostate ↑ mortalidade CV em 22% vs alopurinol em paciente com DCV estabelecida. FDA emitiu black box. PREFERIR ALOPURINOL em paciente CV."},
{nivel:"crit", txt:"AZATIOPRINA/6-MP: contraindicação por precaução (mesma razão do alopurinol)."},
{nivel:"warn", txt:"Mesmas precauções: NÃO iniciar durante crise. Profilaxia com colchicina 3-6 meses. Suspender se rash significativo."},
{nivel:"warn", txt:"HEPATOTOXICIDADE: monitor TGO/TGP basal + 2-4 sem + periodicamente. Suspender se ↑3× LSN."},
{nivel:"info", txt:"VANTAGEM sobre alopurinol em IRC (menos ajuste). Custo significativamente maior — restringir a casos selecionados."},
],

preparo:"VO comprimido, qualquer hora, com ou sem alimento.",
monitor:"Ácido úrico, hemograma, TGO/TGP, função renal e CV.",
diretriz:"ACR 2020. EULAR. CARES trial 2018. FDA Black Box 2019.",
fluxo:null, calcs:[],
},

{id:"med-hidroxicloroquina", contexto:["ubs"], classe:"Antimalárico / DMARD — imunomodulador", grupo:"dmard",
nome:"Hidroxicloroquina (HCQ)",
sin:["Plaquinol","Reuquinol"],
formas:["Comprimidos 200 mg, 400 mg — PFPB / CEAF (LES, AR)"],
resumo:"DMARD tradicional — base do tratamento de LES. Imunomodulador suave. Risco baixo de toxicidade séria, exceto RETINOPATIA com uso prolongado. Avaliação oftalmológica obrigatória.",
dose_rapida:"5 mg/kg/d VO (max 400 mg/d)",
doses:[
{ind:"Lúpus Eritematoso Sistêmico (LES) — TRATAMENTO BASE", dose:"≤5 mg/kg/d (real, não ideal) VO; usual 200-400 mg/d", obs:"BASE do tratamento de LES — todos beneficiam. Reduz flares, melhora sobrevida, reduz dano. Sempre prescrever."},
{ind:"Artrite Reumatoide (DMARD em monoterapia leve ou combinação)", dose:"200-400 mg/d", obs:"Em AR leve ou em combinação tripla (HCQ + sulfassalazina + MTX)."},
{ind:"Síndrome de Sjögren, dermatomiosite, lupus cutâneo", dose:"200-400 mg/d", obs:"Uso reumatológico amplo em doenças autoimunes."},
{ind:"Profilaxia malária / tratamento de malária por P. vivax/ovale", dose:"Conforme protocolo de viagem ou tratamento", obs:"Atualmente substituída por outros antimaláricos na maioria das indicações."},
],
ajustes:{
irc:"DRC grave: cautela (acúmulo).",
iht:"Cautela em hepatopatia.",
idoso:"Sem ajuste específico, monitorar retina.",
gestante:"PERMITIDO em LES — continuar tratamento.",
aleita:"Compatível.",
ped:"AIJ: doses ajustadas.",
},
mecanismo:"Inibe processamento antigênico (Toll-like receptors, autofagia), reduz produção de citocinas pró-inflamatórias. Efeito anti-inflamatório suave em doenças autoimunes.",
farmacocin:{absorc:"VO ~75%", distrib:"AMPLA — acumula em retina, fígado, tecidos", metab:"Hepático", elimin:"Renal", meiavida:"~40 dias (longo!)", ligacao:"50%"},
espectro:["LES","Artrite Reumatoide","Síndrome de Sjögren","Lupus cutâneo","Dermatomiosite","Sarcoidose (alguns)"],
interacoes:[
{droga:"Digoxina", efeito:"Aumenta níveis."},
{droga:"Antiácidos", efeito:"Reduz absorção (espaçar 4h)."},
{droga:"Ciclosporina", efeito:"Aumenta níveis."},
],
efeitos:[
{tipo:"comum", item:"Náusea, dor abdominal, cefaleia, alteração de pele/cabelos (despigmentação leve)"},
{tipo:"sério", item:"RETINOPATIA MACULAR (uso prolongado, dose-dependente) — IRREVERSÍVEL se não detectada precocemente. Cardiomiopatia rara, miopatia, neuropatia, hepatotoxicidade rara"},
],
alertas:[
{nivel:"crit", txt:"<strong>RETINOPATIA:</strong> avaliação OFTALMOLÓGICA basal + ANUAL (geralmente após 5 anos de uso, antes em alto risco). Risco aumenta com: dose >5 mg/kg/d real, duração >5 anos, DRC, hepatopatia, idosos, doença macular prévia. SUSPENDER se sinais."},
{nivel:"info", txt:"<strong>DOSE BASEADA EM PESO REAL</strong>, não ideal. Máximo 5 mg/kg/d. Doses mais antigas (6,5 mg/kg/d) NÃO recomendadas atualmente."},
{nivel:"info", txt:"Início de ação LENTO (3-6 meses para efeito completo em AR/LES) — perseverar."},
{nivel:"warn", txt:"NÃO usar em LES com porfiria, déficit grave G6PD (cautela)."},
],
preparo:"VO com alimento (reduz GI).",
monitor:"Oftalmologia anual após 5 anos. Hemograma, função renal/hepática periódica. Fundoscopia, OCT, campo visual.",
diretriz:"SBR — Reumatologia. EULAR LES, AR. ACR Recommendations. AAO Retinopathy Screening.",
fluxo:null, calcs:[],
},

{id:"med-metotrexato", contexto:["ubs"], classe:"DMARD — antimetabólito (antagonista folato)", grupo:"dmard",
nome:"Metotrexato (baixa dose — uso reumatológico)",
sin:["MTX","Rheumatrex","Methotrexate Tabloid"],
formas:["Comprimidos 2,5 mg, 10 mg — UBS / CEAF","Solução injetável 25 mg/mL — uso oncológico (CEAF/hospitalar)"],
resumo:"DMARD ANCORA — 1ª linha em ARTRITE REUMATOIDE. Dose SEMANAL (não diária — erro fatal!). Doses 7,5-25 mg/sem VO ou SC. Suplementação com ácido fólico obrigatória.",
dose_rapida:"Iniciar 7,5-10 mg VO 1×/SEMANA; titular para 15-25 mg/sem conforme resposta. NUNCA diário.",
doses:[
{ind:"Artrite Reumatoide (DMARD ancora — 1ª linha)", dose:"Inicial 7,5-10 mg VO 1×/SEMANA; titular para 15-25 mg/sem em 4-12 semanas", obs:"Sempre com ÁCIDO FÓLICO 5 mg 1×/sem (24h após MTX) para reduzir efeitos adversos sem perder eficácia. Resposta em 6-12 semanas."},
{ind:"Psoríase (cutânea ou artropática)", dose:"7,5-25 mg/sem VO ou SC", obs:"Indicação dermatológica e reumatológica."},
{ind:"AIJ poliarticular", dose:"10-15 mg/m²/sem", obs:"Pediatria reumatológica."},
{ind:"Aborto medicamentoso retido (uso obstétrico)", dose:"Específico, hospitalar", obs:"Indicação específica."},
],
ajustes:{
irc:"DRC moderada (TFG 30-50): REDUZIR dose 50%. DRC grave (<30): CONTRAINDICADO.",
iht:"CONTRAINDICAÇÃO em hepatopatia ativa.",
idoso:"Maior risco toxicidade — iniciar baixa dose, monitorar de perto.",
gestante:"CATEGORIA X — CONTRAINDICAÇÃO ABSOLUTA. Teratogênico, abortivo.",
aleita:"CONTRAINDICAÇÃO.",
ped:"AIJ: doses ajustadas.",
},
mecanismo:"Inibe dihidrofolato redutase → reduz disponibilidade de folato → bloqueia síntese de DNA (pirimidinas e purinas). Em baixas doses: imunomodulador (mecanismos múltiplos — adenosina, citocinas).",
farmacocin:{absorc:"VO ~70%", distrib:"Ampla", metab:"Hepático mínimo", elimin:"Renal", meiavida:"3-10h (efeito mais prolongado)", ligacao:"50%"},
espectro:["Artrite Reumatoide","Artrite psoriásica","AIJ","Psoríase grave","Dermatomiosite","LES (poliartrite)","DII (refratária)","Esclerodermia (pulmonar)"],
interacoes:[
{droga:"SMX-TMP, dapsona", efeito:"AUMENTA toxicidade (somam efeitos antifolato). EVITAR ou monitorar de perto."},
{droga:"AINEs", efeito:"Aumentam toxicidade renal de MTX. Doses baixas crônicas: geralmente OK. Doses altas: cuidado."},
{droga:"Penicilinas, probenecida", efeito:"Reduzem excreção MTX — aumentam toxicidade."},
{droga:"IBPs (omeprazol)", efeito:"Reduzem clearance — cuidado."},
{droga:"Álcool", efeito:"Hepatotoxicidade aditiva. ABSTINÊNCIA recomendada."},
],
efeitos:[
{tipo:"comum", item:"Náusea, fadiga, estomatite, alopecia, alteração de transaminases, leucopenia leve"},
{tipo:"sério", item:"PNEUMONITE por MTX (rara, pode ser fatal), HEPATOTOXICIDADE com fibrose hepática crônica (uso prolongado), supressão medular grave, nefrotoxicidade, infecções oportunistas, linfoma (raro)"},
{tipo:"raro", item:"Síndrome de lise tumoral em altas doses, ataque agudo de psoríase ao suspender"},
],
alertas:[
{nivel:"crit", txt:"<strong>DOSE SEMANAL, NÃO DIÁRIA</strong> — erro fatal. Já houve mortes por confusão de posologia. PRESCREVER COM CLAREZA, EDUCAR PACIENTE: 'tomar APENAS 1 vez por semana, no MESMO DIA DA SEMANA'. Marcar dia da semana no embalagem."},
{nivel:"crit", txt:"<strong>TERATOGÊNICO E ABORTIVO</strong> — contracepção EFICAZ obrigatória durante uso e POR 6 MESES após suspensão (em ambos os sexos — espermatozoide afetado). Aborto medicamentoso é indicação obstétrica específica."},
{nivel:"warn", txt:"<strong>ÁCIDO FÓLICO 5 mg 1×/SEMANA</strong> (24-48h após MTX) — reduz mucosite, náusea, leucopenia, hepatotoxicidade SEM perder eficácia. Sempre prescrever junto."},
{nivel:"warn", txt:"<strong>PNEUMONITE:</strong> dispneia + tosse seca em paciente em MTX = ALERTA. RX tórax, considerar suspender + corticoide. Pode ser FATAL."},
{nivel:"warn", txt:"MONITORAR: hemograma, função hepática e renal antes, em 2-4 semanas após mudança de dose, depois a cada 1-3 meses. Albumina."},
{nivel:"info", txt:"<strong>VACINAS:</strong> NÃO usar vacinas VIVAS (BCG, FA, tríplice viral, varicela) durante uso. Influenza inativada e pneumocócica recomendadas."},
],
preparo:"VO 1 vez/sem, mesmo dia. Pode ser SC se intolerância GI ou má resposta VO.",
monitor:"Hemograma + transaminases + creatinina basal, 2-4 sem após mudança de dose, depois 1-3 meses. Sintomas respiratórios.",
diretriz:"SBR — AR. EULAR/ACR. PCDT MS — Artrite Reumatoide.",
fluxo:null, calcs:[],
},

{id:"med-sulfassalazina", contexto:["ubs"], classe:"DMARD / antinflamatório intestinal", grupo:"dmard",
nome:"Sulfassalazina",
sin:["Salazopirina","Azulfine"],
formas:["Comprimidos 500 mg — PFPB / CEAF"],
resumo:"DMARD tradicional + tratamento da DII (RCU e Crohn colônica). Combina sulfapiridina (carreadora) + 5-ASA (princípio ativo intestinal). Útil em AR, espondilite, RCU, Crohn.",
dose_rapida:"AR: 1 g VO 2-3×/d (titular). RCU: 2-4 g/d divididos.",
doses:[
{ind:"Artrite Reumatoide (DMARD)", dose:"Iniciar 500 mg/d, titular para 1 g 2-3×/d em 4 semanas (max 3 g/d)", obs:"Resposta em 2-3 meses. Pode combinar com MTX + HCQ (terapia tripla)."},
{ind:"Espondilite anquilosante / artrite psoriásica periférica", dose:"2-3 g/d divididos", obs:"Mais eficaz em manifestações PERIFÉRICAS que axiais."},
{ind:"Retocolite Ulcerativa (RCU) — indução e manutenção em leve-moderada", dose:"Indução: 3-4 g/d divididos. Manutenção: 2 g/d", obs:"5-ASA puro (mesalazina) é alternativa moderna — menos efeitos."},
{ind:"AIJ", dose:"30-50 mg/kg/d", obs:"Pediatria reumatológica."},
],
ajustes:{
irc:"Reduzir dose em DRC.",
iht:"Cautela em hepatopatia.",
idoso:"Iniciar baixa dose.",
gestante:"PERMITIDO em RCU (manter remissão). Adicionar fólico 5 mg.",
aleita:"Compatível.",
ped:"AIJ.",
},
mecanismo:"Sulfapiridina (parte sulfa) é liberada no cólon por bactérias → 5-ASA atua localmente. 5-ASA inibe COX/LOX, citocinas inflamatórias intestinais. Mecanismo na AR menos definido.",
farmacocin:{absorc:"~30% sistêmica (componente sulfa); 5-ASA pouco absorvido", distrib:"Sistêmica e intestinal", metab:"Hepático e bacteriano colônico", elimin:"Renal e fecal", meiavida:"~5-10h", ligacao:"99% sulfapiridina"},
espectro:["RCU","DC colônica","AR","Espondilite anquilosante","Artrite psoriásica","AIJ"],
interacoes:[
{droga:"Anticoagulantes orais", efeito:"Pode aumentar efeito (deslocamento de proteínas)."},
{droga:"Digoxina", efeito:"Reduz absorção."},
{droga:"Metotrexato", efeito:"Toxicidade aditiva (folato)."},
],
efeitos:[
{tipo:"comum", item:"Náusea, dor abdominal, cefaleia, urina/lágrimas/lentes de contato amarelo-alaranjadas (sulfasalazina), oligospermia REVERSÍVEL em homens"},
{tipo:"sério", item:"Reação alérgica a sulfa (Stevens-Johnson, DRESS), agranulocitose, anemia hemolítica em G6PD-deficiência, hepatotoxicidade, pneumonite, nefrite intersticial"},
],
alertas:[
{nivel:"warn", txt:"<strong>ALERGIA A SULFA</strong> — sulfassalazina contém grupo sulfa: contraindicação em alérgico. Reações graves possíveis (DRESS, Stevens-Johnson)."},
{nivel:"warn", txt:"<strong>OLIGOSPERMIA REVERSÍVEL</strong> em homens em uso — pode comprometer fertilidade. RETORNA após suspensão (~3 meses). Informar casal que tenta engravidar — trocar DMARD se necessário."},
{nivel:"info", txt:"Hemograma + transaminases basais, mensais primeiros 3 meses, depois trimestrais."},
{nivel:"info", txt:"Suplementar ÁCIDO FÓLICO 5 mg/sem — reduz toxicidade e melhora tolerância."},
],
preparo:"VO com alimento (reduz GI).",
monitor:"Hemograma, transaminases, função renal, espermograma se planejando filhos.",
diretriz:"SBR. ECCO IBD Guidelines. SBR AR.",
fluxo:null, calcs:[],
},

{id:"med-risedronato", contexto:["ubs"], classe:"Bisfosfonato — 3ª geração (aminobisfosfonato)", grupo:"osteoporose",
nome:"Risedronato",
sin:["Actonel","Risedran"],
formas:["Comprimidos 35 mg (semanal), 150 mg (mensal) — privada / CEAF (PCDT Osteoporose)"],
resumo:"Bisfosfonato — alternativa ao alendronato em osteoporose pós-menopausa. Pode ter melhor tolerância gástrica em alguns pacientes. Disponibilidade similar.",
dose_rapida:"35 mg VO 1×/semana em jejum",
doses:[
{ind:"Osteoporose pós-menopausa / corticoide-induzida", dose:"35 mg VO 1×/sem em jejum, 30 min antes de comer/beber/outras drogas", obs:"Permanecer em pé/sentado por 30 min. Efeito sobre fratura em 1 ano. Manter 3-5 anos, depois reavaliar (drug holiday)."},
{ind:"Doença de Paget", dose:"30 mg/d × 2 meses", obs:"Esquema específico."},
],
ajustes:{
irc:"TFG <35: CONTRAINDICADO. TFG 35-60: cautela.",
iht:"Sem ajuste.",
idoso:"Indicação principal.",
gestante:"CONTRAINDICAÇÃO.",
aleita:"Não usar.",
ped:"Não.",
},
mecanismo:"Inibe atividade osteoclástica (pirofosfato endógeno análogo) → reduz reabsorção óssea → aumento de DMO → redução de fratura.",
farmacocin:{absorc:"~0,6% VO (muito baixa — daí jejum)", distrib:"Osso", metab:"Não", elimin:"Renal e fecal", meiavida:"Acumula no osso por anos", ligacao:"24%"},
espectro:["Osteoporose pós-menopausa","Osteoporose corticoide-induzida","Doença de Paget"],
interacoes:[
{droga:"Cálcio, ferro, magnésio, antiácidos", efeito:"Quelam — espaçar 30 min após risedronato (e idealmente 2h)."},
],
efeitos:[
{tipo:"comum", item:"Pirose, esofagite, dor abdominal, cefaleia leve"},
{tipo:"sério", item:"OSTEONECROSE DE MANDÍBULA (rara — em cirurgia dentária invasiva), FRATURA ATÍPICA DE FÊMUR (uso prolongado >5 anos), esofagite ulcerativa"},
],
alertas:[
{nivel:"warn", txt:"<strong>JEJUM RIGOROSO</strong> + 30 MIN em pé/sentado + 30 min sem comer/beber/outras drogas — risco esofagite ulcerativa significativo se não seguido. Tomar com água apenas (não leite, suco, café)."},
{nivel:"warn", txt:"OSTEONECROSE DE MANDÍBULA: rara mas grave. ANTES de cirurgia dental invasiva, considerar interrupção temporária (discussão com cirurgia + endo). Higiene oral rigorosa."},
{nivel:"warn", txt:"FRATURA ATÍPICA DE FÊMUR (sub-trocantérica): risco com uso >5 anos. Considerar DRUG HOLIDAY após 3-5 anos em risco moderado, 5-10 anos em alto risco. Discutir com paciente."},
{nivel:"info", txt:"Cálcio + Vit D associados são essenciais."},
],
preparo:"JEJUM. Água. 30 min em pé/sentado. Não tomar com outras drogas.",
monitor:"DMO em 2 anos. Cálcio, vit D, função renal periódica.",
diretriz:"PCDT MS — Osteoporose. ASBMR. ESCEO. SBM/SBO.",
fluxo:null, calcs:[],
}

);
