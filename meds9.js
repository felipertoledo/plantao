/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — MEDICAÇÕES (PARTE 9)
   Drogas de tireoide — Levotiroxina + Metimazol + PTU + Iodeto
   =========================================================== */

MEDICACOES.push(

/* === LEVOTIROXINA === */
{id:"med-levotiroxina", classe:"Hormônio tireoidiano sintético (T4)", grupo:"endocrino",
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

/* === METIMAZOL === */
{id:"med-metimazol", classe:"Tionamida — anti-tireoidiano (inibidor TPO)", grupo:"endocrino",
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

/* === PROPILTIOURACIL (PTU) === */
{id:"med-propiltiouracil", classe:"Tionamida — anti-tireoidiano (inibidor TPO + bloqueio T4→T3 periférico)", grupo:"endocrino",
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

/* === IODETO / LUGOL === */
{id:"med-iodeto", classe:"Iodeto (Lugol, iodeto de potássio) — inibe liberação T4", grupo:"endocrino",
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

);
