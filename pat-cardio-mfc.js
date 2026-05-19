/* ===========================================================
   VOVÔMINIC DOUTÔ — pat/cardio-cronicas-mfc.js
   Cardio crônico MFC — DAC estável, IC ambulatorial, DAP
   Sistema: cardio
   Fonte: SBC 2024-2025, ESC 2023-2024, ACC/AHA 2024, TMFC 2ª ed, DUNCAN 5ª ed
   =========================================================== */

PATOLOGIAS.push(

/* ============================================================
   1. DAC ESTÁVEL — Doença Arterial Coronariana crônica
   ============================================================ */
{
id:"dac-estavel", contexto:["ubs"], nome:"Doença Arterial Coronariana Estável (DAC) — Ambulatorial",
sis:"cardio", grav:"media",
cid:"I25.1", ciap:"K76",
sin:["angina estável","DAC crônica","cardiopatia isquêmica crônica","DAC pós-SCA"],
def:"Síndrome clínica caracterizada por isquemia miocárdica reprodutível, geralmente associada a estenose coronariana ≥50%. Inclui pacientes pós-IAM/revascularização estáveis e angina estável. Diagnóstico clínico-funcional (TE, cintilografia, eco-stress, RM stress) e/ou angiográfico (cateterismo, angio-TC coronárias).",
intro:"DAC estável é diagnóstico longitudinal MFC: tipicamente vem do hospital (pós-SCA, pós-CRM/ATC) e segue na UBS para manter prevenção secundária. O médico de família coordena: adesão medicamentosa, controle de fatores de risco (HAS, DM, dislipidemia, tabagismo), reabilitação cardíaca, retorno seguro às atividades, vigilância de novos sintomas. NNT da estatina e antiagregante pós-IAM é excelente — abandono medicamentoso é causa frequente de re-evento.",
fisio:"Placa aterosclerótica → estenose → isquemia esforço-dependente (oferta < demanda). Mecanismos: ruptura de placa (SCA aguda), erosão de placa, vasoespasmo (Prinzmetal), disfunção microvascular (mulheres, INOCA). FRC: HAS, dislipidemia, DM, tabagismo, obesidade visceral, sedentarismo, dieta pró-inflamatória, estresse crônico, baixa renda/educação (determinantes sociais).",
apresentacao:"Paciente conhecido com DAC (pós-IAM, pós-CRM ou pós-ATC com stent), em uso de DAPT/estatina/IECA/BB, vem para consulta de manutenção. Pode estar assintomático ou com angina aos esforços estável. CIAP K76 = doença isquêmica crônica.",
sintomas:[
"Angina típica: dor/aperto/queimação retroesternal, irradiação para braço esquerdo/mandíbula, desencadeada por esforço/estresse/frio/refeição, alívio com repouso ou nitrato (<5 min) — angina estável é REPRODUTÍVEL",
"Angina atípica: dor com 2 dos 3 critérios típicos",
"Dor não-cardíaca: 1 ou nenhum critério típico (esofágica, musculoesquelética, ansiedade)",
"Equivalentes anginosos em idoso/diabético/mulher: dispneia aos esforços, fadiga inexplicada, náusea, tontura",
"Classificação CCS: I (apenas esforços extenuantes), II (atividades habituais), III (limitação importante), IV (em repouso)",
],
profilaxia:"Prevenção secundária é o eixo do MFC em DAC estável: (1) cessação tabágica — maior NNT de qualquer intervenção (NNT~2 em 5 anos para mortalidade); (2) controle PA <130/80 [SBC/ESC]; (3) LDL <55 mg/dL [SBC 2024 muito alto risco] com estatina de alta potência + ezetimiba se necessário; (4) HbA1c individualizada se DM (geralmente <7-7,5%); (5) atividade física aeróbica 150 min/sem moderada + força 2x/sem; (6) dieta mediterrânea/DASH; (7) reabilitação cardíaca pós-evento (referência se disponível).",
freire:"Paciente pós-IAM frequentemente carrega medo grande de morrer e às vezes evita o esforço necessário para se reabilitar. Validar o medo, mas mostrar a evidência: atividade física aeróbica orientada REDUZ mortalidade, não aumenta. Reabilitação cardíaca é seguro e protetor. Trabalhe a representação do corpo: 'seu coração não está frágil de vidro — ele está cicatrizado, e cicatriz precisa ser exercitada com cuidado para ficar forte'. Em paciente que abandona estatina por 'mal-estar': perguntar o que sente, validar, oferecer alternativas (trocar de estatina, dose menor, dias alternados); raramente é mialgia verdadeira de estatina (CK 10× normal). Sexualidade: angina aos esforços moderados = pode retomar sexo de baixa-moderada intensidade; nitrato + sildenafil = CONTRAINDICADO (hipotensão grave).",
sus_tx:"Esquema padrão pós-IAM/DAC sintomática: AAS 100 mg/dia (UBS+PFPB) indefinidamente. DAPT 12 meses pós-SCA com stent (AAS + clopidogrel 75 mg — CEAF com PCDT, ou particular). Estatina alta potência: SINVASTATINA 40 mg/dia (UBS+PFPB) — se LDL acima do alvo, escalonar para atorvastatina 40-80 mg via CEAF/particular. IECA (Enalapril 10-20 mg 2×) ou BRA se intolerância. BB se pós-IAM ou angina (atenolol 25-50 mg ou metoprolol). Nitrato SL para crise (Isossorbida 5 mg SL — UBS).",
padrao_ouro:"Acrescenta: ezetimiba se LDL não atinge meta; iPCSK9 (Evolocumab, Alirocumab) — não-CBAF, alto custo; rivaroxabana 2,5 mg 2×/dia + AAS (COMPASS) em DAC + DAP/DM com alto risco isquêmico; trimetazidina (Vastarel) para angina refratária; revascularização (ATC com stent) se sintomas refratários a tratamento clínico otimizado [ISCHEMIA 2020: invasive vs conservative em DAC estável — equivalente em mortalidade, diferença em angina; pacientes assintomáticos com isquemia ampla: discussão compartilhada].",
prog:"Prognóstico depende de FE, comorbidades, controle de FRC. DAC pós-IAM estável bem-controlado: sobrevida 10 anos ~70-85%. Pior em DM, IC associada, doença multivaso, ↓FE. Mortalidade reduz dramaticamente com estatina+AAS+IECA+BB (quadrúpla evidência).",
acomp:"Consulta MFC trimestral (ou semestral em paciente estável bem-controlado). Anual: lipidograma (alvo LDL), glicemia/HbA1c, função renal (IECA/estatina), CK se sintoma muscular, eco se mudança clínica. ECG anual ou se sintomas. Teste ergométrico: NÃO rotineiro em assintomático estável (P4!). Encaminhar cardio se: angina nova/progressiva (CCS III-IV), eventos sincopais, arritmias novas, IC nova, FE deteriorando.",
p4:"NÃO realizar TE/cintilografia/cateterismo em paciente assintomático estável — apenas escalonamento sintomático. NÃO escalar a aspirina para 'dupla' em paciente sem stent recente. NÃO manter DAPT >12 meses pós-stent na maioria (apenas alto risco isquêmico/baixo risco hemorrágico). NÃO usar estatina + fibrato rotineiramente (rabdomiólise) — apenas se TG≥500 e LDL controlado. NÃO prescrever 'vasodilatador placebo' (Cinarizina, Vincamina) — sem evidência.",
alertas:[
{nivel:"crit", txt:"⚠ Angina NOVA, em REPOUSO, INTENSA, EM CRESCENDO, ou prolongada (>20 min) = SCA — encaminhar PS IMEDIATAMENTE para ECG + troponina seriada. NÃO 'esperar para ver'."},
{nivel:"crit", txt:"⛔ Nitrato + Sildenafil/Tadalafil/Vardenafil = CONTRAINDICAÇÃO ABSOLUTA — hipotensão grave/fatal. Janela: 24h após sildenafil/vardenafil; 48h após tadalafil. Orientar paciente diretamente."},
{nivel:"warn", txt:"AAS é prevenção secundária pós-IAM/DAC: NUNCA suspender sem discussão cardiológica. Sangramento menor ≠ indicação de suspensão. Hemorragia maior: pausa transitória + IBP."},
{nivel:"warn", txt:"Estatina + claritromicina/azitromicina/eritromicina/diltiazem/verapamil/amiodarona: interação CYP3A4 → ↑sinvastatina (risco rabdomiólise). Pausar estatina ou trocar antibiótico. Atorvastatina/rosuvastatina: menos afetadas."},
{nivel:"warn", txt:"BB de uso crônico: NÃO suspender abruptamente — efeito rebote com taquicardia/angina/HAS. Reduzir 25-50% por semana se for descontinuar."},
{nivel:"info", txt:"\"Equivalentes anginosos\" em mulher, idoso, diabético (dispneia, fadiga, náusea aos esforços) — não subestimar. ECG + estratificação igual angina típica."},
{nivel:"info", txt:"Reabilitação cardíaca pós-IAM: NNT~10 para mortalidade em 5 anos. Frequentemente subutilizada. Referenciar mesmo em ambiente com recursos limitados (pode ser Academia da Saúde + orientação MFC se centro especializado indisponível)."},
],
diretriz:"[SBC — Diretriz Brasileira Cardiopatia Isquêmica Crônica 2024] [ESC 2024 Guidelines for the management of chronic coronary syndromes] [ACC/AHA/SCAI 2023 Guideline for Coronary Revascularization] [TMFC 2ª ed, cap. 142] [DUNCAN 5ª ed, cap. 60]"
},

/* ============================================================
   2. IC CRÔNICA — Insuficiência Cardíaca ambulatorial
   ============================================================ */
{
id:"ic-cronica", contexto:["ubs"], nome:"Insuficiência Cardíaca Crônica (ICFEr + ICFEp) — Ambulatorial",
sis:"cardio", grav:"alta",
cid:"I50", ciap:"K77",
sin:["IC","insuficiência cardíaca","IC com FE reduzida","IC com FE preservada","ICFEr","ICFEp","ICFEi","cardiomiopatia"],
def:"Síndrome clínica decorrente de disfunção cardíaca estrutural/funcional que resulta em incapacidade do coração em oferecer débito cardíaco adequado às demandas metabólicas, com sintomas (dispneia, fadiga, edema) e/ou sinais (estertores, B3, IVD). Classificação por FE: ICFEr (<40%), ICFEi (intermediária 41-49%), ICFEp (≥50%).",
intro:"IC é uma das principais causas de internação no SUS em idoso. MFC tem papel central: identificação precoce (especialmente FEp em idoso com dispneia 'velha'), titulação medicamentosa, vigilância de descompensação (peso, edema, dispneia), educação em autocuidado (sal, líquidos, peso diário), articulação com cardio em casos refratários. Quadrúpla terapia (IECA/BRA/ARNI + BB + ARM + iSGLT2) reduz mortalidade em ICFEr em ~50% — adesão é tudo.",
fisio:"ICFEr: dilatação ventricular + ↓ contratilidade. Causas: pós-IAM, cardiomiopatia dilatada idiopática, chagásica (Brasil!), alcoólica, valvar, periparto, taquicardiomiopatia. ICFEp: hipertrofia + ↓ relaxamento ventricular + rigidez. Causas: HAS (principal), DM, obesidade, idade, amiloidose, hipertrofia. Ativação neuro-hormonal (RAAS, simpático, vasopressina) → remodelamento maladaptativo → ciclo vicioso. NPs (BNP/NT-proBNP) aumentam pela tensão miocárdica.",
apresentacao:"Idoso/adulto com dispneia progressiva aos esforços, ortopneia, dispneia paroxística noturna, edema MMII, ganho de peso, distensão abdominal. Pode vir descompensado (encaminhar PS) ou estável em consulta. Exame: estertores creptantes, B3, edema MMII, turgência jugular, hepatomegalia. Pode estar sem sinais em IC bem-controlada.",
sintomas:[
"Dispneia aos esforços progressiva — classificar NYHA (I: ass; II: limitação leve; III: limitação importante atividades habituais; IV: em repouso)",
"Ortopneia (dispneia em decúbito, alívio sentado/em pé)",
"DPN — dispneia paroxística noturna (acorda sufocado, alívio em 15-30 min)",
"Edema MMII vespertino, ganho de peso ≥2 kg em 1 semana = retenção hídrica",
"Fadiga, intolerância exercícios, redução AVDs",
"Sintomas atípicos em idoso: confusão, anorexia, queda, sintomas digestivos (ascite, dispepsia, plenitude)",
],
profilaxia:"Prevenção primária: controle HAS, DM, dislipidemia, tabagismo, obesidade. Prevenção secundária (já com IC): adesão à quadrúpla terapia, vacinação influenza anual + pneumocócica + COVID. Educação: pesar diário (mesma roupa, mesmo horário), notar dispneia/edema novo, reduzir sal (NÃO eliminar — 4-5 g/dia adequado), líquidos individualizados (1,5-2 L/dia padrão; restrição apenas em sódio severo ou hiponatremia). Atividade física orientada: redução de mortalidade [HF-ACTION].",
freire:"IC carrega frequentemente narrativa de 'coração fraco' que aterroriza o paciente. Reformular: 'seu coração está doente mas adaptável — os remédios são para reeducá-lo, não para 'segurá-lo'. Quando você sente os efeitos colaterais (tontura, fadiga inicial, hipotensão postural), é sinal de que o remédio está funcionando — vamos ajustando juntos'. Peso diário NÃO é vaidade — é monitor de descompensação. Ensine a marcar no caderno simples. Empoderar para AUTOCUIDADO antecipa descompensações. Em idoso solitário: articular ACS para visita semanal, telefone para reportar piora.",
sus_tx:"QUADRÚPLA terapia para ICFEr (FE<40%): (1) IECA: ENALAPRIL 5 mg 2× até 20 mg 2× (UBS+PFPB) ou Captopril 25-50 mg 3× — titulação semanal/quinzenal monitorando PA/K/creatinina; BRA (Losartana 25-100 mg) se intolerância (tosse, angioedema). (2) BB: CARVEDILOL 3,125 mg 2× até 25 mg 2× (UBS) — titulação a cada 2 semanas. NÃO iniciar em descompensação aguda. (3) ARM: ESPIRONOLACTONA 25 mg/dia (UBS) — apenas se K<5 e TFG>30. Vigiar ginecomastia. (4) iSGLT2: DAPAGLIFLOZINA 10 mg/dia (CEAF com PCDT IC + FE<40% ou DM2+RCV) — mais novo eixo. Diurético de alça para sintomas: FUROSEMIDA 40 mg/dia VO (UBS) — não muda mortalidade, apenas sintomas. Restrição sal moderada (4-5 g/dia), líquidos ~1,5-2 L/dia. Vacinação influenza anual obrigatória.",
padrao_ouro:"Acrescenta: ARNI (Sacubitril/Valsartana) em substituição a IECA/BRA em ICFEr com sintomas persistentes [PARADIGM-HF — superior ao enalapril] — CEAF com PCDT específico. Ivabradina se FC≥70 em ritmo sinusal mesmo com BB max [SHIFT]. CDI (cardioversor implantável) se FE<35% pós-otimização medicamentosa (3 meses) com expectativa de vida >1 ano. TRC (terapia de ressincronização) se QRS >130 ms + BRE + FE<35%. Transplante cardíaco em casos refratários. Para ICFEp: dapa/empa reduzem hospitalizações [EMPEROR-Preserved, DELIVER]; diurético sintomático; tratar HAS/DM/FA agressivamente.",
prog:"Sobrevida em IC sintomática NYHA III-IV é pior que muitos cânceres (mediana ~3-5 anos). Mortalidade reduz ~50% com quadrúpla terapia otimizada. Mau prognóstico: NYHA IV, FE<25%, BNP>1000, hiponatremia, função renal piorando, internações frequentes.",
acomp:"Estável: a cada 3 meses. Pós-descompensação ou em titulação: 2-4 semanas. Em consulta: peso, PA em pé/sentado (postural), FC, edema, ausculta (estertores, B3), turgência jugular. Labs: função renal/K cada ajuste de IECA/BRA/espironolactona/diurético; rotinas anuais com lipídeo, glicemia, TSH, ECG. BNP/NT-proBNP útil em diagnóstico (queda com tratamento sugere boa resposta — não dirigir terapia por valor). Eco anual ou se piora.",
p4:"NÃO usar diurético de alça em IC sem retenção hídrica (apenas sintomático). NÃO escalar diurético sem investigar causa de descompensação (adesão? sal/líquidos? infecção? FA? isquemia? droga nova?). NÃO trocar IECA/BRA por estatina-like 'genérico-cardio' sem fundamentação. NÃO usar AINEs (CRÍTICO! piora IC). NÃO suspender BB em descompensação leve-moderada (continuar com dose reduzida; estudos mostram pior prognóstico se suspende). NÃO escalonamento de furosemida indefinida sem reavaliar diagnóstico (resistência a diurético → metolazona + hidroclorotiazida combinada).",
alertas:[
{nivel:"crit", txt:"⛔ AINE em paciente com IC = CONTRAINDICAÇÃO MAIOR — retenção hídrica, ↓efeito de diurético/IECA, ↓função renal, ↑internação. Discutir com paciente: 'AINE faz seu coração inchar de água'. Alternativa: paracetamol/dipirona; em dor crônica: opioide fraco, fisioterapia, gabapentina."},
{nivel:"crit", txt:"IC descompensada AGUDA (dispneia em repouso, ortopneia, anasarca, oligúria, sat<90%, PAS<90 ou >180) = ENCAMINHAR PS IMEDIATAMENTE. Não otimizar em ambulatório."},
{nivel:"warn", txt:"Espironolactona + IECA/BRA + creatinina alta = risco HIPERCALEMIA grave. Suspender espironolactona se K>5,5 ou TFG<30. Monitorar K e creatinina 1 sem após início, depois mensal por 3 meses."},
{nivel:"warn", txt:"BB em descompensação MODERADA: REDUZIR DOSE (não suspender). Em descompensação GRAVE: suspender temporariamente, reintroduzir em estabilidade. Suspensão abrupta crônica → rebote."},
{nivel:"warn", txt:"FUROSEMIDA em alta dose crônica em idoso: hipoNa, hipoK, hipoMg, gota, ↓função renal, hipotensão postural (quedas!). Dose mínima eficaz; combinar tiazídico em resistência."},
{nivel:"info", txt:"BNP normal (<35 pg/mL ambulatorial / <100 agudo) tem alto VPN — IC é improvável. Mas BNP alto não é específico (FA, idade, IRC também ↑). Usar como ferramenta, não diagnóstico isolado."},
{nivel:"info", txt:"Em IC + FA: anticoagulação cônica indicada (CHA₂DS₂-VA geralmente ≥2) — varfarina (UBS+PFPB) com INR 2-3 ou DOAC (CEAF/particular)."},
],
diretriz:"[SBC — Diretriz Brasileira de Insuficiência Cardíaca Crônica e Aguda 2018 + atualizações] [ESC 2021 Guidelines for IC + 2023 update on iSGLT2] [ACC/AHA/HFSA 2022 Guideline for Heart Failure] [TMFC 2ª ed, cap. 141] [DUNCAN 5ª ed, cap. 62]"
},

/* ============================================================
   3. DAP — Doença Arterial Periférica
   ============================================================ */
{
id:"dap", contexto:["ubs"], nome:"Doença Arterial Periférica (DAP)",
sis:"cardio", grav:"media",
cid:"I73.9", ciap:"K92",
sin:["DAP","claudicação intermitente","isquemia MMII crônica","arteriopatia periférica","insuficiência arterial periférica"],
def:"Estenose/obstrução aterosclerótica das artérias periféricas, mais frequentemente MMII. Marcador clínico de aterosclerose sistêmica — risco coronariano e cerebrovascular elevado. Diagnóstico: clínica + Índice Tornozelo-Braquial (ITB) — ITB <0,9 confirma DAP; <0,5 = isquemia crítica.",
intro:"DAP é doença SUBDIAGNOSTICADA na APS — paciente atribui 'dor na perna' à idade ou problema ortopédico. O diagnóstico identifica paciente de altíssimo risco CV (mortalidade CV em 5 anos similar à de IAM prévio). MFC: rastrear em paciente de risco (>65a fumante/DM/HAS/DAC), aferir ITB com Doppler portátil (disponível em UBS bem-equipada), iniciar prevenção secundária agressiva, encaminhar cirurgia vascular em casos avançados.",
fisio:"Aterosclerose das artérias dos MMII (femorais, poplíteas, tibiais) → estenose → isquemia esforço-dependente (claudicação) → progressão para isquemia crítica (dor de repouso, úlceras isquêmicas, gangrena). Fatores de risco IDÊNTICOS aos da DAC: tabagismo (RR mais alto que para DAC!), DM, HAS, dislipidemia, idade, sexo masculino, IRC.",
apresentacao:"Paciente >50 anos, tabagista ou ex-tabagista, frequentemente diabético, queixa de 'cãibras na panturrilha' aos esforços (caminhar X metros) com alívio em repouso. Progressão: redução da distância de claudicação, dor em repouso (especialmente noturna em decúbito, alívio pendendo a perna), úlceras maleolares/digitais, frialdade, perda de pelos, palidez, atrofia muscular.",
sintomas:[
"Claudicação intermitente clássica: cãibra/aperto na panturrilha (mais comum), coxa ou nádega — reproduzível ao caminhar X metros, alívio em 5-10 min de repouso",
"Dor em repouso (especialmente noturna em decúbito, alívio dependurando o membro) = isquemia crítica — encaminhar urgência",
"Frialdade do pé, palidez ao elevar, rubor pendurado (Buerger positivo)",
"Pulsos diminuídos/ausentes: pedioso, tibial posterior, poplíteo",
"Perda de pelos, atrofia muscular, unhas hipotróficas",
"Úlceras isquêmicas: maleolares, calcâneo, dorso do pé — dolorosas, secas, com fundo necrótico, bordos secos",
"Risco GRAVE de amputação se isquemia crítica não-tratada (~25% em 1 ano)",
],
profilaxia:"Cessação tabágica é a INTERVENÇÃO MAIS POTENTE — reduz progressão e mortalidade. Controle agressivo de FRC: PA <130/80, LDL <55, HbA1c individualizada. Programa estruturado de caminhada (NNT~3 para melhora de distância de claudicação em 6 meses): 30-45 min, 3-5×/sem, caminhar até a dor + repouso + retomar — supervisionado preferível. Cuidado podológico em diabético (educação sobre pé diabético).",
freire:"Claudicação muitas vezes vem disfarçada de 'fraqueza de velho'. Validar a queixa e nomeá-la: 'isso não é envelhecer — é sua artéria entupindo'. Tabagista: aproveitar momento de medo para abordar cessação (PNCT na UBS, bupropiona, nicotina adesivo). Caminhada terapêutica é remédio MAIS POTENTE que muitos medicamentos — explicar o porquê: 'caminhar até a dor estimula a formação de colaterais — sua perna vai aprender outro caminho'. Diabetes + DAP = atenção redobrada ao pé: paciente não sente cortes/feridas (neuropatia) E não cicatriza (isquemia). Educação sobre revisar o pé diariamente.",
sus_tx:"AAS 100 mg/dia (UBS+PFPB) — antiagregante. Estatina alta potência: SINVASTATINA 40 mg (UBS+PFPB) ou Atorvastatina (CEAF/particular se necessário). IECA: ENALAPRIL 10-20 mg 2× (UBS+PFPB) — reduz eventos CV em DAP independente da PA. Programa de caminhada estruturado. Cessação tabágica (PNCT). Cilostazol 100 mg 2× — pode melhorar distância de claudicação (CEAF/particular; contraindicação ICFEr). Pé diabético: cuidados podológicos, calçado adequado, glicemia controlada.",
padrao_ouro:"Acrescenta: rivaroxabana 2,5 mg 2×/dia + AAS [COMPASS-PAD] em pacientes de alto risco — CEAF com PCDT. Revascularização (angioplastia/cirurgia bypass): isquemia crítica, claudicação invalidante refratária. Amputação só como último recurso.",
prog:"Mortalidade CV em 5 anos: ~20% em DAP sintomática, 50% em isquemia crítica. Maior parte morre de IAM/AVC, não da perna. Identificar DAP é identificar paciente de alto risco coronariano.",
acomp:"Trimestral em ambulatório. Aferir ITB anualmente. Pulsos pediosos/tibiais. Inspeção dos pés a cada consulta. Glicemia/HbA1c, lipidograma anual. Encaminhar cirurgia vascular se: isquemia crítica, claudicação que limita atividades essenciais (CCS III-IV em DAP), úlcera não-cicatrizante, suspeita de aneurisma.",
p4:"NÃO indicar AAS+clopidogrel rotineiramente em DAP (sem benefício na maioria, ↑hemorragia). NÃO rastrear DAP em assintomático sem fatores de risco. NÃO indicar angioplastia em assintomático (apenas com isquemia crítica ou claudicação invalidante). NÃO indicar cirurgia vascular para paciente que não fez 6 meses de caminhada estruturada (caso a caso).",
alertas:[
{nivel:"crit", txt:"⚠ Isquemia AGUDA do membro (dor súbita, palidez, paralisia, ausência de pulso, frieza, parestesia — '5Ps') = EMERGÊNCIA cirurgia vascular. Tempo é membro. Encaminhar PS imediatamente — NÃO retardar para investigação ambulatorial."},
{nivel:"crit", txt:"Isquemia crítica crônica (dor em repouso, úlcera isquêmica): encaminhar cirurgia vascular AMBULATORIAL urgente (≤2 sem) — risco amputação se não-revascularizado."},
{nivel:"warn", txt:"DAP + DM = pé diabético risco MÁXIMO. Educar paciente: revisão diária do pé, calçado adequado (sem sapato apertado, sem andar descalço), unhas cortadas retas, NÃO usar palmilha quente, NÃO água quente para 'aquecer' o pé (neuropatia + isquemia → queimadura inadvertida)."},
{nivel:"warn", txt:"Cilostazol é CONTRAINDICADO em IC com FE<40% (↑mortalidade em estudos). Avaliar FE antes de prescrever."},
{nivel:"warn", txt:"ITB >1,4 (incompressibilidade arterial — calcificação medioconcerne) = NÃO confiável em diabético/IRC. Solicitar índice dedo-braço ou Doppler arterial pulsátil."},
{nivel:"info", txt:"DAP é equivalente coronariano: meta LDL <55 mg/dL [SBC/ESC 2024]. Pacientes frequentemente subtratados."},
{nivel:"info", txt:"Caminhada estruturada é a intervenção mais custo-efetiva — NNT ~3 para melhora clinicamente significativa em 6 meses [Cochrane]. Subutilizada."},
],
diretriz:"[SBC/SBACV — Diretriz Brasileira de DAP 2023] [ESC 2024 Guidelines for the management of peripheral arterial and aortic diseases] [TMFC 2ª ed, cap. 145] [DUNCAN 5ª ed, cap. 65]"
},

);
