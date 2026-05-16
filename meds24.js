/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — BIBLIOTECA DE MEDICAÇÕES (PARTE 24)
   Opioides Paliativos / Ambulatoriais
   Tramadol, Codeína, Oxicodona LP, Metadona, Buprenorfina TD
   =========================================================== */

MEDICACOES.push(

/* ============== TRAMADOL ============== */

{id:"med-tramadol", classe:"Opioide fraco (atípico) + ação serotoninérgica/noradrenérgica", grupo:"analgesia",
nome:"Tramadol",
sin:["Tramal","Sylador","Tramax","Anangor"],
formas:["Cápsula 50 mg","Comprimido SR 100 mg","Solução oral 100 mg/mL (gotas)","Ampola 50 mg/mL (1 mL, 2 mL)","REMUME — UBS uso interno (ampola) + algumas SES dispensam VO em FARMASUS"],
resumo:"⚠ OPIOIDE FRACO ATÍPICO — Degrau 2 OMS. Ação DUAL: agonista μ FRACO + INIBE recaptação serotonina/noradrenalina (parecido com SNRI). ⚠ Útil em DOR MISTA (nociceptiva + neuropática). Eficácia ~5-10× MENOR que morfina. ⚠ ⚠ CONVULSÕES + SÍNDROME SEROTONINÉRGICA com ISRS/ISRSN/IMAO + uso recreativo crescente.",
dose_rapida:"50-100 mg VO/IV 6/6h (máx 400 mg/d adulto; 300 mg/d idoso)",
doses:[
{ind:"⚠ Dor MODERADA aguda ou crônica (Degrau 2 OMS)", dose:"50-100 mg VO 4-6/6h ad lib (máx 400 mg/d). SR: 100-200 mg 12/12h (máx 400 mg/d)", obs:"⚠ Iniciar baixo (25-50 mg) em idoso, caquéticos. Pode causar náusea proeminente nos primeiros dias — geralmente passa."},
{ind:"⚠ DOR NEUROPÁTICA (dor mista)", dose:"50-100 mg 8-12/12h, considerar SR", obs:"⚠ Útil em dor mista por ação dual SNRI-like. Eficácia comprovada em neuralgia diabética, pós-herpética."},
{ind:"⚠ DOR EM CÂNCER MODERADA", dose:"50-100 mg 6/6h", obs:"⚠ Em dor SEVERA: SUBIR DIRETO PARA MORFINA, não 'tentar tramadol'."},
{ind:"DOR PÓS-OP MODERADA", dose:"50-100 mg IV/IM 6/6h", obs:""},
{ind:"Adultos jovens / não-idosos — uso de gotas", dose:"5-20 gotas (12,5-50 mg) 6/6h", obs:""},
],
ajustes:{
irc:"⚠ TFG 10-30: 50-100 mg 12/12h. TFG <10: 50 mg 12/12h. ⚠ Cuidado em paciente com convulsão.",
iht:"⚠ Reduzir 50% em IH grave (Child C)",
idoso:"⚠ Iniciar 25-50 mg. Máx 300 mg/d. Maior risco convulsão, hiponatremia, delirium.",
gestante:"⚠ C — Cautela. Sintomas de descontinuação neonatal se uso 3º trimestre.",
aleita:"⚠ Compatível em uso curto",
ped:"⚠ ≥12a aprovado. ⚠ ⚠ <12a: PROIBIDO (FDA Black Box — morte por ultrametabolizadores). ⚠ <18a pós-tonsilectomia: PROIBIDO.",
},
mecanismo:"⚠ DUAL — (1) AGONISTA μ-opioide FRACO (~6000× menos potente que morfina); metabólito M1 (O-desmetiltramadol) é potente. (2) INIBE recaptação 5-HT e NA — efeito SNRI-like. Aproximadamente 10% caucasianos são POBRES METABOLIZADORES CYP2D6 — eficácia reduzida; ULTRA-RAPIDOS (~1-2%) podem ter intoxicação.",
farmacocin:{
absorc:"VO ~70% — com refeição não afeta",
distrib:"Ampla",
metab:"⚠ Hepático CYP2D6 (variabilidade genética) → M1 ativo",
elimin:"Renal predominante",
meiavida:"~5-7h (M1 ~9h)",
ligacao:"~20%",
},
ef_colats:{
comuns:["Náusea (frequente, geralmente passa em 3-7d)","Tontura","Sonolência","Boca seca","Constipação (menos que opioides fortes)","Sudorese","Cefaleia"],
sérios:["⚠ ⚠ CONVULSÕES — risco DOSE-DEPENDENTE (especialmente >400 mg/d, em epilepsia, álcool, abstinência, BZD, ADT)","⚠ ⚠ SÍNDROME SEROTONINÉRGICA — com ISRS/ISRSN/IMAO/triptano/linezolida/ondansetrona dose alta","⚠ HIPONATREMIA (SIADH) em idoso","Depressão respiratória (rara em dose terapêutica)","Dependência / abuso (crescente)","Síndrome de abstinência em suspensão abrupta","Reações alérgicas","QT longo em dose alta"],
},
interacoes:["⚠ ⚠ ISRS, ISRSN, IMAO, tricíclicos, linezolida, ondansetrona dose alta: SÍNDROME SEROTONINÉRGICA","⚠ ⚠ Bupropiona: ↑ risco CONVULSÃO","⚠ Antipsicóticos, ADT: ↑ convulsão","INDUTORES CYP2D6 / CYP3A4 (rifampicina, carbamazepina, fenitoína): ↓ tramadol","INIBIDORES CYP2D6 (fluoxetina, paroxetina, bupropiona): ↑ tramadol (paradoxalmente — reduz M1 ativo, eficácia menor)","Álcool, BZD: depressão SNC somativa","Warfarina: ↑ INR"],
contraindicacoes:["⚠ EPILEPSIA não controlada","⚠ ⚠ <12a","⚠ <18a pós-tonsilectomia/adenoidectomia","⚠ Intoxicação aguda por álcool, opioides, BZD","⚠ IMAO em 14 dias","Insuficiência respiratória grave","Hipersensibilidade"],
monit:["Convulsão","Sódio sérico em idoso","Sintomas serotoninérgicos","Sinais de abuso"],
gravidez:"C",
sus:"REMUME — UBS uso interno (ampola); algumas SES em FARMASUS VO",
referencias:["⚠ FDA Black Box <12a; PCDT-MS Dor crônica; NICE; ANCP."],
},

/* ============== CODEÍNA ============== */

{id:"med-codeina", classe:"Opioide fraco (pro-droga)", grupo:"analgesia",
nome:"Codeína",
sin:["Codein","Tylex (codeína + paracetamol)","Codaten"],
formas:["Comprimido 30 mg, 60 mg (sozinho ou em combinação com paracetamol)","Solução oral 3 mg/mL","Ampola 30 mg/mL IM/SC (raro Brasil)","FARMASUS (controle especial)"],
resumo:"⚠ OPIOIDE FRACO — Degrau 2 OMS. PRO-DROGA — depende de CYP2D6 para conversão em MORFINA (10% da dose → morfina). ⚠ ⚠ EXTREMA VARIABILIDADE GENÉTICA — ULTRAMETABOLIZADORES (4-30% conforme etnia) podem ter intoxicação fatal; POBRES METABOLIZADORES (~10% caucasianos) têm zero efeito. ⚠ Também ANTITUSSÍGENO eficaz. ⚠ <12A E PÓS-TONSILECTOMIA: PROIBIDO (FDA Black Box).",
dose_rapida:"30-60 mg VO 4-6/6h (máx 240 mg/d)",
doses:[
{ind:"⚠ Dor LEVE-MODERADA — Degrau 2 OMS", dose:"30-60 mg VO 4-6/6h ad lib (máx 240 mg/d, geralmente em combinação fixa com paracetamol)", obs:"⚠ Em paciente com dor SEVERA: SUBIR DIRETO PARA MORFINA."},
{ind:"⚠ TOSSE seca refratária (antitussígeno)", dose:"15-30 mg VO 6/6h ad lib", obs:"Em adulto. Não usar em criança."},
{ind:"DOR PÓS-OP MODERADA", dose:"30-60 mg VO 4-6/6h", obs:""},
],
ajustes:{
irc:"⚠ Reduzir em IRC — metabolismo prejudicado",
iht:"⚠ Reduzir 50% em IH",
idoso:"⚠ Iniciar 15-30 mg. Constipação importante.",
gestante:"⚠ C — Cautela. Sintomas de descontinuação neonatal.",
aleita:"⚠ ⚠ EVITAR — em ULTRAMETABOLIZADORAS LACTANTES: morfina alta no leite → óbito do lactente reportado. FDA Black Box.",
ped:"⚠ ⚠ ⚠ <12 ANOS: PROIBIDO (FDA Black Box 2017). Pós-tonsilectomia/adenoidectomia em <18a: PROIBIDO.",
},
mecanismo:"⚠ ⚠ PRO-DROGA — convertida pelo CYP2D6 em MORFINA (10% da dose) que é a forma ATIVA. Atividade direta da codeína mínima. Variabilidade interindividual ENORME conforme genótipo CYP2D6.",
farmacocin:{
absorc:"VO ~50%",
distrib:"Ampla",
metab:"⚠ Hepático CYP2D6 → MORFINA (10%) + outros metabólitos",
elimin:"Renal",
meiavida:"~2-4h",
ligacao:"~7-25%",
},
ef_colats:{
comuns:["Constipação (MUITO FREQUENTE — universal)","Náusea","Vômito","Sedação","Boca seca","Tontura","Sudorese"],
sérios:["⚠ ⚠ DEPRESSÃO RESPIRATÓRIA em ULTRAMETABOLIZADORES — pode ser FATAL em criança/lactente","Dependência","Síndrome de abstinência","Reações alérgicas","Anafilaxia"],
},
interacoes:["⚠ INIBIDORES CYP2D6 (fluoxetina, paroxetina, bupropiona, quinidina): ↓ codeína → MORFINA → reduz analgesia","⚠ Álcool, BZD: depressão somativa","⚠ IMAO em 14 dias"],
contraindicacoes:["⚠ ⚠ ⚠ <12 anos","⚠ ⚠ <18a pós-tonsilectomia/adenoidectomia","⚠ Lactante (ultrametabolizadoras)","⚠ Depressão respiratória aguda","⚠ Asma grave","⚠ Íleo paralítico","IMAO em 14 dias","Hipersensibilidade"],
monit:["Constipação","Depressão respiratória especialmente em criança","Sintomas de abuso"],
gravidez:"C",
sus:"⚠ FARMASUS (controle especial) — disponibilidade variável",
referencias:["⚠ FDA Black Box; OMS Cancer Pain; ANCP."],
},

/* ============== OXICODONA LP ============== */

{id:"med-oxicodona", classe:"Opioide forte μ-agonista", grupo:"analgesia",
nome:"Oxicodona (Liberação Prolongada)",
sin:["Oxycontin","OxyContin","Tylex Oxi (combinado)","Oxicodone CR"],
formas:["Comprimido LP (CR) 10 mg, 20 mg, 40 mg, 80 mg","⚠ NÃO REMUME — particular (CEAF em algumas SES em PCDT específico) — custo alto"],
resumo:"⚠ ⚠ OPIOIDE FORTE — Degrau 3 OMS. POTÊNCIA ~1,5× morfina VO (10 mg oxicodona ≈ 15 mg morfina VO). Vantagens: BIODISPONIBILIDADE VO MELHOR que morfina (~60% vs ~25%), MENOS prurido (sem liberação de histamina), POSOLOGIA 12/12h LP. Desvantagens: ⚠ ALTO POTENCIAL DE ABUSO (epidemia opioide nos EUA), custo, não está no SUS.",
dose_rapida:"10-20 mg VO 12/12h (LP)",
doses:[
{ind:"⚠ Dor ONCOLÓGICA / DOR SEVERA CRÔNICA — Degrau 3 OMS", dose:"⚠ Em opioide-NAIVE: 10 mg VO 12/12h (LP). Titular conforme dor + resgates", obs:"⚠ NÃO PARTIR / NÃO MASTIGAR LP — engolir inteiro. RESGATE para dor breakthrough: oxicodona simples (não disponível Brasil habitualmente) OU morfina simples 10% da dose diária."},
{ind:"⚠ ROTAÇÃO de morfina para oxicodona", dose:"⚠ CONVERSÃO: morfina VO 15 mg = oxicodona VO 10 mg. ⚠ REDUZIR 25-50% na rotação (cross-tolerance incompleta), depois titular", obs:""},
{ind:"⚠ Dor neuropática severa", dose:"10-40 mg 12/12h", obs:"Não é 1ª linha — adjuvantes (gaba/preg/ADT) preferidos. Útil em dor mista severa."},
],
ajustes:{
irc:"⚠ TFG 10-50: começar 50% dose. TFG <10: cautela extra.",
iht:"⚠ Reduzir 50% em IH",
idoso:"⚠ Iniciar 5-10 mg 12/12h",
gestante:"⚠ C — Cautela. Síndrome de descontinuação neonatal.",
aleita:"⚠ Compatível em dose baixa",
ped:"⚠ Não aprovada rotineira <11a",
},
mecanismo:"AGONISTA μ-opioide FORTE. Semelhante à morfina mas com metabolismo diferente (não gera M3G/M6G neurotóxicos como morfina).",
farmacocin:{
absorc:"VO ~60-87% (excelente — superior à morfina)",
distrib:"Ampla",
metab:"Hepático CYP3A4 + CYP2D6 → noroxicodona + oximorfona (ativa)",
elimin:"Renal",
meiavida:"~3-5h (forma simples); ~12h (LP)",
ligacao:"~45%",
},
ef_colats:{
comuns:["Constipação (universal — laxativo profilático)","Náusea (geralmente passa)","Sonolência","Boca seca","Tontura","Sudorese"],
sérios:["⚠ Depressão respiratória","⚠ ⚠ POTENCIAL DE ABUSO MUITO ALTO — epidemia opioide nos EUA pegou força com oxicodona LP","Dependência","Síndrome de abstinência","Hipotensão postural","Mioclonia (rara)","Hipogonadismo, hipocortisolismo em uso crônico"],
},
interacoes:["⚠ ⚠ INIBIDORES CYP3A4 (cetoconazol, ritonavir, claritromicina, voriconazol): ↑↑ oxicodona","Indutores CYP3A4 (rifampicina, fenitoína, carbamazepina): ↓ oxicodona","Outros opioides, álcool, BZD: depressão somativa","IMAO em 14 dias","Naloxona reverte"],
contraindicacoes:["⚠ Depressão respiratória aguda","⚠ Asma aguda grave","⚠ Íleo paralítico","⚠ IMAO em 14 dias","Hipersensibilidade","TCE com HIC"],
monit:["Constipação","Depressão respiratória","Sinais de abuso","Função hepática/renal","Dor (escala)"],
gravidez:"C",
sus:"⚠ NÃO REMUME / particular — CEAF em algumas SES em PCDT específico (dor oncológica refratária)",
referencias:["⚠ ANCP; OMS Cancer Pain; PCDT-MS Dor Oncológica."],
},

/* ============== METADONA ============== */

{id:"med-metadona", classe:"Opioide forte μ-agonista + antagonista NMDA + inibidor recaptação 5-HT/NA", grupo:"analgesia",
nome:"Metadona",
sin:["Methadone","Mytedom","Eptadone (sol oral)"],
formas:["Comprimido 5 mg, 10 mg","Solução oral 5 mg/mL","FARMASUS / Programa de Tratamento de Dependência de Opioides (uso específico) — em paliativos: prescrição especialista"],
resumo:"⚠ ⚠ OPIOIDE FORTE COM PERFIL ÚNICO — agonista μ + antagonista NMDA (ação em dor neuropática) + inibidor recaptação 5-HT/NA. INDICAÇÕES: ⚠ DOR ONCOLÓGICA REFRATÁRIA, dor neuropática complexa, ROTAÇÃO DE OPIOIDE em paciente com toxicidade da morfina, ALTERNATIVA EM IRC (sem metabólitos ativos), tratamento de DEPENDÊNCIA DE OPIOIDES. ⚠ ⚠ USO ESPECIALISTA — múltiplos riscos. Meia-vida muito longa e VARIÁVEL. Conversão NÃO LINEAR. QT longo.",
dose_rapida:"2,5-5 mg VO 8/8h ou 12/12h, titulação MUITO LENTA (5-7 dias entre ajustes)",
doses:[
{ind:"⚠ DOR ONCOLÓGICA REFRATÁRIA / ROTAÇÃO DE OPIOIDE", dose:"⚠ ⚠ ESPECIALISTA — em opioide-naive: 2,5-5 mg VO 8/8h × 4-7 dias antes de ajustar", obs:"⚠ ⚠ CONVERSÃO NÃO LINEAR. Aproximação:<br>- MEDD <60 mg/d: razão 4:1 (60 mg morfina/d ≈ 15 mg metadona/d)<br>- MEDD 60-300: razão 8:1<br>- MEDD 300-600: razão 10:1<br>- MEDD >600: razão 12:1+<br>⚠ Após conversão: REDUZIR 25-50% e titular."},
{ind:"⚠ DOR NEUROPÁTICA refratária", dose:"2,5-5 mg 8-12/12h", obs:"⚠ Ação NMDA antagonista útil em dor neuropática."},
{ind:"⚠ MANUTENÇÃO em dependência de opioide", dose:"⚠ Programa especializado — 60-120 mg/d VO 1×/d", obs:"⚠ NÃO É escopo do PA / UBS sem capacitação."},
],
ajustes:{
irc:"⚠ ⚠ VANTAGEM — sem metabólitos ativos, segura em IRC inclusive HD",
iht:"⚠ Reduzir em IH",
idoso:"⚠ ⚠ Iniciar 2,5 mg + acompanhamento próximo. QT longo + meia-vida prolongada.",
gestante:"⚠ C — Indicada em dependência gestacional (preferida sobre buprenorfina em alguns contextos). Síndrome de abstinência neonatal manejável.",
aleita:"⚠ Compatível em dose terapêutica",
ped:"⚠ Especialista pediátrico",
},
mecanismo:"⚠ ⚠ MÚLTIPLOS MECANISMOS — (1) AGONISTA μ-opioide forte. (2) ANTAGONISTA receptor NMDA — efeito ANALGÉSICO em dor neuropática + reduz tolerância opioide. (3) INIBIDOR recaptação 5-HT e NA — efeito antidepressivo-like. Daí: ÚTIL EM DOR MISTA REFRATÁRIA.",
farmacocin:{
absorc:"VO ~80%",
distrib:"⚠ ⚠ MUITO AMPLA — lipofílica, acumula em tecidos",
metab:"Hepático CYP3A4, CYP2B6, CYP2D6, CYP2C19 — múltiplas interações",
elimin:"Fecal + renal",
meiavida:"⚠ ⚠ MUITO VARIÁVEL: 8-150h (média 24-36h). Por isso ajuste DOSE só após 5-7 dias do nível em equilíbrio.",
ligacao:"~85%",
},
ef_colats:{
comuns:["Sedação","Constipação (menos que morfina)","Sudorese","Boca seca","Náusea (geralmente passa)","Hipotensão","Edema MMII"],
sérios:["⚠ ⚠ ⚠ QT LONGO / TORSADES DE POINTES — EFEITO DOSE-DEPENDENTE. ECG basal + em titulação > 100 mg/d","⚠ ⚠ DEPRESSÃO RESPIRATÓRIA TARDIA — pela meia-vida acumulativa, pode ocorrer 2-7 dias após início/aumento de dose","⚠ MIOCLONIA, hipogonadismo, hipocortisolismo em uso crônico","Dependência (raríssima em uso analgésico bem indicado)","Síndrome de abstinência em suspensão"],
},
interacoes:["⚠ ⚠ MÚLTIPLAS INTERAÇÕES CYP — INIBIDORES (cetoconazol, ritonavir, claritromicina, fluoxetina): ↑↑ metadona","⚠ INDUTORES (rifampicina, fenitoína, carbamazepina, fenobarbital, efavirenz, erva-de-são-joão): ↓↓ metadona → abstinência","⚠ ⚠ QT-PROLONGADORES (ondansetrona, haloperidol, claritro, antiarrítmicos, antifúngicos, alguns ISRS): ↑ TORSADES","Álcool, BZD, outros opioides: depressão somativa","Antirretrovirais: complexo"],
contraindicacoes:["⚠ ⚠ QT longo / arritmia ventricular","⚠ Depressão respiratória","⚠ Asma grave","⚠ Íleo","⚠ ⚠ IMAO em 14 dias","⚠ Uso simultâneo com QT-prolongadores em paciente de risco","Hipersensibilidade"],
monit:["⚠ ⚠ ECG basal + em titulação, e a cada aumento >100 mg/d","Eletrólitos (K, Mg)","Resposta clínica em dor","Sinais de depressão respiratória especialmente 2-7 dias pós-aumento de dose"],
gravidez:"C",
sus:"FARMASUS / Programa específico — uso ESPECIALISTA",
referencias:["⚠ ANCP; PCDT-MS Dor Oncológica; APM; ⚠ Krantz et al QT Warning."],
},

/* ============== BUPRENORFINA TRANSDÉRMICA ============== */

{id:"med-buprenorfina", classe:"Opioide forte — agonista parcial μ + antagonista κ", grupo:"analgesia",
nome:"Buprenorfina (transdérmica)",
sin:["Restiva","Norspan","Butrans","BuTrans"],
formas:["Adesivo transdérmico 5, 10, 20 mcg/h (semanal)","Comprimido sublingual 0,2 mg, 2 mg, 8 mg (raros — para dependência de opioides)","Ampola SC 0,3 mg/mL (raro)","⚠ NÃO REMUME — particular ou CEAF em PCDT específico"],
resumo:"⚠ OPIOIDE FORTE — agonista PARCIAL μ (efeito teto em depressão respiratória — relativamente mais seguro) + antagonista κ (menos disforia). Adesivo SEMANAL (vantagem adesão). Indicações: dor crônica oncológica/não-oncológica em paciente ESTÁVEL, paciente com IRC (segura), idoso (menos sedação), intolerância à morfina. ⚠ Em dependência: uso especializado.",
dose_rapida:"5-20 mcg/h adesivo — trocar a cada 7 dias",
doses:[
{ind:"⚠ DOR CRÔNICA ESTÁVEL — alternativa em opioide-naive ou intolerância a morfina", dose:"⚠ INÍCIO em opioide-naive: 5 mcg/h, titular para 10, 20 mcg/h ad lib. Trocar a cada 7 dias", obs:"⚠ Demora 24-72h para atingir efeito. NÃO USAR em dor instável/aguda."},
{ind:"⚠ ROTAÇÃO de outro opioide", dose:"⚠ CONVERSÃO aproximada: morfina VO 30 mg/d ≈ buprenorfina 10 mcg/h; morfina VO 60 mg/d ≈ buprenorfina 20 mcg/h", obs:"⚠ Reduzir 25-50% na rotação."},
{ind:"⚠ Paciente IDOSO / IRC com dor moderada-severa", dose:"5-20 mcg/h", obs:"⚠ Vantagem em IRC — segura (sem ajuste para TFG)."},
],
ajustes:{
irc:"⚠ ⚠ VANTAGEM — sem ajuste em IRC inclusive HD (sem metabólitos ativos)",
iht:"⚠ Reduzir em IH grave",
idoso:"⚠ ADESIVO 5 mcg/h é frequentemente suficiente em idoso opioide-naive",
gestante:"⚠ C — Sintomas de descontinuação neonatal",
aleita:"⚠ Cautela",
ped:"Não aprovada rotineira",
},
mecanismo:"⚠ AGONISTA PARCIAL μ (efeito TETO em depressão respiratória) + ANTAGONISTA κ. Tem alta afinidade ao receptor μ mas atividade parcial — pode REVERTER efeito de outros opioides em alta dose.",
farmacocin:{
absorc:"⚠ Transdérmica — 24-72h para atingir nível terapêutico; 12-24h após retirar adesivo para sair",
distrib:"Ampla",
metab:"Hepático CYP3A4",
elimin:"Fecal predominante",
meiavida:"~24-36h (transdérmica em estado estável)",
ligacao:"~96%",
},
ef_colats:{
comuns:["Reação no local do adesivo (eritema, prurido)","Náusea (geralmente passa)","Constipação (menos que morfina)","Cefaleia","Tontura","Sudorese"],
sérios:["⚠ Depressão respiratória — com efeito teto (segurança relativa). Em alta dose + outros depressores: ainda possível","QT longo (raro)","Síndrome de abstinência se suspensão abrupta","Reação cutânea grave (raro)"],
},
interacoes:["⚠ Inibidores CYP3A4 (cetoconazol, ritonavir, claritro): ↑ buprenorfina","Indutores: ↓","⚠ Outros opioides em dose alta: buprenorfina pode REVERTER efeito (antagonismo parcial)","BZD, álcool: depressão somativa","IMAO em 14 dias","Naloxona: parcial — pode precisar dose alta"],
contraindicacoes:["⚠ Depressão respiratória","⚠ Íleo","⚠ IMAO em 14 dias","Hipersensibilidade","Pele lesada onde aplicar"],
monit:["Local do adesivo (rodar sítio)","Eficácia (após 72h estável)","Constipação","Depressão respiratória"],
gravidez:"C",
sus:"⚠ NÃO REMUME — particular ou CEAF em PCDT específico",
referencias:["ANCP; OMS Cancer Pain; ESMO."],
},

);
