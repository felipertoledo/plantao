/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — PATOLOGIAS DE TIREOIDE
   Hipotireoidismo + Hipertireoidismo/Tireotoxicose
   Conforme: ATA 2014 (hipo) + ATA 2016 (hiper) + SBEM 2025
   =========================================================== */

PATOLOGIAS.push(

/* === HIPOTIREOIDISMO === */
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

/* === HIPERTIREOIDISMO === */
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

);
