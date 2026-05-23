/* ===========================================================
   VOVÔMINIC DOUTÔ — pat/gi-mfc.js
   GI/Hemato MFC — SII, dispepsia funcional, anemia ambulatorial
   Sistema: gi
   Fonte: Rome IV/V, ACG 2024, AGA 2024, BSG 2023, SBH/AHA 2024
   =========================================================== */

PATOLOGIAS.push(

/* ============================================================
   1. SII — Síndrome do Intestino Irritável
   ============================================================ */
{
id:"sii", contexto:["ubs"], nome:"Síndrome do Intestino Irritável (SII) — Roma IV",
sis:"gi", grav:"baixa",
cid:"K58", ciap:"D93",
sin:["SII","IBS","intestino irritável","cólon irritável","síndrome do cólon irritável","colite nervosa"],
def:"Distúrbio funcional do intestino caracterizado por dor abdominal recorrente associada a alteração do hábito intestinal (diarreia, constipação ou alternância), na ausência de alteração estrutural. Critério Roma IV: dor abdominal ≥1×/sem nos últimos 3 meses, sintomas iniciados ≥6 meses, com ≥2: relacionada à evacuação; mudança de frequência; mudança de consistência. Subtipos: SII-D (diarreia), SII-C (constipação), SII-M (mista), SII-NC (não-classificável).",
intro:"SII é um dos diagnósticos funcionais mais frequentes — afeta ~10-15% da população adulta. MFC é o lugar ideal para diagnosticar (clínico, sem necessidade de bateria invasiva), tratar, acompanhar. O grande erro: investigar exaustivamente (colonoscopia, exames repetidos) ou medicalizar com 'pró-cinético/antiespasmódico' eternamente. SII tem componente biopsicossocial forte; abordagem integrada (dieta + estresse + intestino-cérebro) supera medicação isolada.",
fisio:"Multifatorial: hipersensibilidade visceral, disfunção do eixo intestino-cérebro, alteração da motilidade, disbiose intestinal, inflamação de baixo grau, ativação imunológica da mucosa, hiperatividade serotoninérgica entérica. Frequente comorbidade com fibromialgia, cefaleia, ansiedade, depressão (eixo neurofuncional compartilhado). Fatores precipitantes: estresse, mudança alimentar, infecção GI (SII pós-infecciosa), ATB recente, eventos de vida.",
apresentacao:"Adulto jovem-meia-idade (mais mulheres, ~2:1), com dor abdominal recorrente em cólica/desconforto, frequentemente periumbilical ou FIE/FID, melhora após evacuação. Hábito intestinal alterado: diarreia (fezes amolecidas/pastosas, urgência), constipação (fezes ressecadas, esforço), ou alternância. Distensão abdominal, flatulência. Sintomas extra-intestinais comuns: fadiga, cefaleia, dispareunia, urgência miccional.",
sintomas:[
"Dor abdominal recorrente, frequentemente em cólica, relacionada à evacuação (alívio ou piora)",
"Alteração da frequência das evacuações (mais que 3/dia ou menos que 3/sem)",
"Alteração da consistência das fezes (Bristol 1-2 constipação; Bristol 6-7 diarreia)",
"Distensão abdominal, flatulência, eructações",
"Mucos nas fezes (sem sangue!)",
"Sensação de evacuação incompleta, urgência",
"Sintomas extra-intestinais comuns: fadiga, cefaleia, fibromialgia, ansiedade, depressão",
"Piora com estresse, certos alimentos, ciclo menstrual",
"AUSENTES: sangramento, perda de peso, anemia, febre, despertar noturno por sintomas → ALERTA para diferencial orgânico",
],
profilaxia:"Manejo de fatores precipitantes: estresse, dieta, sono, atividade física. Identificar e evitar alimentos-gatilho (varia por paciente — diário alimentar útil). Dieta FODMAP (low-FODMAP por 4-6 semanas com reintrodução estruturada): evidência sólida para SII, especialmente SII-D. Probióticos selecionados (cepas com evidência) podem ajudar.",
freire:"SII vem com peregrinação prévia frequente — paciente já fez colono, USG, endoscopia, repetiu várias vezes. Validar: 'seu sintoma é real, e tem nome. SII NÃO É invenção, NÃO É psicossomático no sentido pejorativo, NÃO É lesão. É distúrbio funcional — seu intestino é hiperreativo, e há mecanismos identificados.' Educar sobre eixo intestino-cérebro: 'estresse, ansiedade, sono e intestino conversam direto pelo nervo vago — não é fraqueza emocional, é fisiologia.' Combater catastrofização ('vou ter câncer'). Trabalhar autocontrole: dieta, identificação de gatilhos, manejo de estresse. NÃO prometer cura mas estabilização. Em mulher: validar piora pré-menstrual.",
sus_tx:"Avaliação inicial: hemograma, PCR, anti-tTG (doença celíaca), TSH, calprotectina fecal (se acesso — exclui DII se <50), parasitológico, sangue oculto nas fezes em >45a ou sintomas alarme. Tratamento por subtipo: SII-D: LOPERAMIDA 2 mg após evacuações líquidas (UBS — usar PRN, não rotineiro), antiespasmódico (ESCOPOLAMINA/BUTILBROMETO DE ESCOPOLAMINA 10 mg até 3×/dia VO — UBS); SII-C: aumentar fibra solúvel (psyllium — privado), aumento gradual de fluidos, atividade física, lactulose 15-30 mL/dia (UBS); SII-M: tratar conforme sintoma dominante. Antidepressivo em DOSE BAIXA: AMITRIPTILINA 10-25 mg HS (FARMASUS) — dor + diarreia; nortriptilina; ISRS (sertralina, fluoxetina) em depressão/ansiedade associadas. Dieta low-FODMAP estruturada (educar paciente, materiais educativos; nutricionista NASF se disponível). Probióticos com evidência: Bifidobacterium infantis 35624, Saccharomyces boulardii, multicepas — variável, custo paciente. Manejo de estresse: mindfulness, yoga, TCC.",
padrao_ouro:"Acrescenta: linaclotida, lubiprostona, plecanatídeo em SII-C refratário (especialidade, alto custo, não-SUS); eluxadolina, rifaximina ciclos em SII-D (especialidade); TCC focada em SII (eficácia comprovada, raramente disponível no SUS); hipnoterapia direcionada (evidência! — IBS-specific hypnotherapy); enxofre microbioma transplante (experimental).",
prog:"Crônica, com flutuações. Não progressiva. Bem-controlada permite vida normal. Pior controle: comorbidade psiquiátrica importante, dificuldade de adesão à dieta/manejo do estresse, contexto social adverso.",
acomp:"Mensal-trimestral no estabelecimento do diagnóstico e manejo inicial, depois espaçar. Reavaliar adesão a dieta/manejo, eficácia, evolução. NÃO repetir colono/exames a cada exacerbação — apenas se red flags.",
p4:"NÃO indicar colonoscopia rotineira em SII clássico (Roma IV preenchido, <50a, sem red flag) — sem evidência, com risco/custo. Indicação SE: >50a no diagnóstico OU sangramento, perda de peso, anemia, sintomas noturnos, história familiar de CA colorretal/DII, mudança aguda do padrão. NÃO solicitar enzimas pancreáticas rotineiras. NÃO indicar 'enzimas digestivas', 'probióticos miraculosos', 'antifúngicos' (Cândida não-confirmada), 'desintoxicantes intestinais' (limpeza de cólon — pseudociência perigosa). NÃO 'dieta sem glúten' sem doença celíaca confirmada (privação injustificada).",
alertas:[
{nivel:"crit", txt:"⚠ Red flags (encaminhar gastro/colono): início após 50a, sangramento retal, perda de peso involuntária, anemia, sintomas noturnos que despertam, história familiar 1º grau de CA colorretal ou DII, massa palpável, febre, alteração aguda do padrão sem causa óbvia."},
{nivel:"warn", txt:"Doença celíaca: pode mimetizar SII. Solicitar anti-tTG (sorologia + IgA total) em todo paciente com SII, especialmente SII-D ou sintomas mistos. Soro positivo → encaminhar gastro para EDA com biópsia duodenal antes de iniciar dieta sem glúten."},
{nivel:"warn", txt:"DII (Doença Inflamatória Intestinal — Crohn, RCU): NÃO é SII. Sinais: sangramento, perda de peso, febre, fadiga marcante, despertar noturno, calprotectina fecal >150, anemia, PCR elevada. Encaminhar gastro."},
{nivel:"warn", txt:"Loperamida em uso crônico: questionar diferencial (DII, malabsorção). Em jovem: cuidado, abuso possível em altas doses (cardiotoxicidade, raro)."},
{nivel:"info", txt:"Dieta low-FODMAP é eficaz em 50-70% dos SII [Cochrane] — eliminação por 4-6 semanas com reintrodução guiada. Nunca deixar como dieta restritiva permanente."},
{nivel:"info", txt:"Comorbidade psiquiátrica em SII: ~50% têm ansiedade, ~30% têm depressão. Não tratar = pior resultado. Rastrear (PHQ-9, GAD-7) e tratar conforme."},
],
diretriz:"[ACG 2021 Clinical Guideline: Management of Irritable Bowel Syndrome] [Rome IV / Rome V 2024 criteria] [BSG 2023 Guideline on the management of irritable bowel syndrome] [FBG — Diretriz Brasileira de SII 2024] [TMFC 2ª ed, cap. gastro] [DUNCAN 5ª ed, cap. gastro]"
},

/* ============================================================
   2. DISPEPSIA FUNCIONAL — abordagem MFC + test-and-treat
   ============================================================ */
{
id:"dispepsia-funcional", contexto:["ubs"], nome:"Dispepsia Funcional — Roma IV + Test-and-Treat H. pylori",
sis:"gi", grav:"baixa",
cid:"K30", ciap:"D07",
sin:["dispepsia","dispepsia funcional","má digestão","epigastralgia","gastrite funcional"],
def:"Dor ou desconforto epigástrico recorrente por ≥3 meses (Roma IV), na ausência de causa orgânica detectada em EDA. Subtipos: SDP (Síndrome do Desconforto Pós-Prandial — saciedade precoce, plenitude pós-prandial) e SDE (Síndrome de Dor Epigástrica — dor/queimação epigástrica). Dispepsia INVESTIGADA: já fez EDA. Dispepsia NÃO-INVESTIGADA: ainda sem EDA — manejo por idade e red flags.",
intro:"Dispepsia é queixa frequentíssima — 20-30% da população. MFC: distinguir dispepsia funcional (maioria) de orgânica (úlcera, CA gástrico, esofagite); decidir EDA por idade e red flags (NÃO em todos!); aplicar estratégia 'test-and-treat' H. pylori em <55-60a sem red flag; tratar empiricamente com IBP curto prazo. Importante: H. pylori tem alta prevalência no Brasil (~50-70% adultos) — erradicação tem efeito em parte dos sintomas dispépticos.",
fisio:"Hipersensibilidade visceral, disfunção da motilidade gástrica (gastroparesia funcional), inflamação de baixo grau (especialmente em H. pylori positivo), eixo intestino-cérebro, fatores psicossociais. Frequente sobreposição com SII e DRGE.",
apresentacao:"Adulto com epigastralgia ou desconforto pós-prandial recorrente. Pode ter: queimação epigástrica (parecida com DRGE — sobreposição comum), saciedade precoce ('fico cheio com pouco'), plenitude pós-prandial ('parece que a comida não desce'), eructações, náusea. Sem sintomas alarmantes (sangramento, anemia, perda de peso, disfagia, vômito persistente, massa palpável, idade ≥55a com sintoma novo).",
sintomas:[
"Dor ou queimação EPIGÁSTRICA recorrente",
"Plenitude pós-prandial: 'estou cheio mesmo depois de pouco'",
"Saciedade precoce: 'paro de comer cedo'",
"Eructações, distensão epigástrica",
"Náusea ocasional (sem vômito persistente)",
"Sintomas SEM red flags: sem sangue, sem perda peso, sem disfagia, sem massa, sem anemia",
"Pode coexistir com DRGE (pirose, regurgitação) ou SII (dor abdominal + alteração intestinal)",
],
profilaxia:"Mudança de hábito alimentar: refeições menores e mais frequentes, mastigar bem, evitar refeições pesadas à noite, evitar gatilhos individuais (frituras, álcool, cafeína, picantes), reduzir peso se IMC alto, elevar cabeceira da cama se DRGE associada. Manejo do estresse. Cessação tabágica.",
freire:"Paciente com dispepsia funcional frequentemente já fez várias EDA, várias trocas de IBP, várias dietas, sem resolução. Validar a queixa sem desvalorizar nem medicalizar. Educar: 'seu exame não vê lesão porque não há — é um problema de função, hipersensibilidade. Isso não significa que sua dor é falsa, significa que o tratamento é diferente.' Trabalhar dieta + redução de peso + manejo de estresse. Em paciente ansioso: validar a ansiedade como FATOR (não como diagnóstico psiquiátrico depreciativo) e abordar.",
sus_tx:"Estratégia Test-and-Treat para H. pylori em paciente <55-60a SEM red flags: teste de antígeno fecal H. pylori OU teste de urease respiratório (UBS conforme município) OU sorologia (menos confiável). Se positivo: ERRADICAÇÃO — esquema 1ª linha PCDT 2024: AMOXICILINA 1 g 12/12h + CLARITROMICINA 500 mg 12/12h + OMEPRAZOL 20 mg 12/12h por 14 dias (UBS para amox e omep; clari particular ou PFPB) OU esquema com levofloxacina/bismuto em região de alta resistência. Confirmar erradicação 4-8 semanas após tratamento (teste fecal ou urease — não sorologia). Empiricamente em paciente com sintomas mas H. pylori negativo: OMEPRAZOL 20 mg/dia por 4-8 semanas (UBS+PFPB). Procinético: DOMPERIDONA 10 mg VO 3×/dia antes das refeições por 4-8 sem (cuidado QT em idoso/cardiopata) — particular usualmente; METOCLOPRAMIDA 10 mg VO 8/8h antes das refeições (UBS) limitada por efeitos extrapiramidais em uso >5 dias — usar curto prazo. Em refratariedade ou ansiedade comorbida: AMITRIPTILINA 12,5-25 mg VO HS (UBS — neuromodulador em dispepsia funcional, dose baixa eficaz, evitar em idoso pelos anticolinérgicos) OU ISRS baixa dose (SERTRALINA 25-50 mg/dia ou ESCITALOPRAM 5-10 mg/dia — UBS) por 8-12 sem. EDA se: ≥55a com dispepsia nova/persistente, red flags em qualquer idade, falha de tratamento empírico de 4-8 sem.",
padrao_ouro:"Acrescenta: vonoprazana (PCAB — Brasil disponível), tegoprazana — supressão ácida mais potente que IBP; rifaximina em hipótese de SIBO sobreposta; STW-5 (Iberogast — fitoterápico com evidência moderada); acotiamide (procinético japonês); tratamento psicológico (TCC) em refratariedade.",
prog:"Crônica e flutuante. Não progressiva, sem aumento de risco para CA gástrico (no entanto, identificar H. pylori e erradicar reduz risco de CA gástrico na população).",
acomp:"Reavaliar em 4-8 sem após início de tratamento (IBP ou erradicação H. pylori). Se melhora: continuar e desmamar IBP gradualmente (efeito rebote ao suspender). Se falha: EDA. Em uso crônico de IBP: tentar desmame periódico (cada 6-12 meses) — uso indefinido sem indicação clara tem efeitos adversos (osteoporose, hipomagnesemia, infecção C. difficile, infecção respiratória, IRC).",
p4:"NÃO indicar EDA em dispepsia funcional típica <55a sem red flag — primeiro fazer test-and-treat H. pylori e teste terapêutico com IBP. NÃO usar IBP crônico INDEFINIDO sem reavaliação — risco osteoporose, hipomagnesemia, IRC, infecção. NÃO indicar erradicação H. pylori 'profilática' em assintomático (apenas DUM atrofia, parente 1º grau CA gástrico, MALT linfoma, dispepsia, plano AINE crônico em alto risco). NÃO indicar 'pesquisa de Cândida intestinal', 'alergia alimentar' por testes não-validados (IgG alimentar, kinesiologia, etc.). NÃO 'limpar fígado' ou 'limpeza intestinal'. NÃO indicar 'colonoscopia preventiva' em <50a sem indicação.",
alertas:[
{nivel:"crit", txt:"⚠ Red flags (encaminhar EDA urgente): perda de peso involuntária, anemia, melena/hematêmese, disfagia/odinofagia, vômitos persistentes, massa epigástrica, idade ≥55a com dispepsia NOVA ou que mudou de padrão, antecedente familiar 1º grau CA gástrico/esôfago."},
{nivel:"warn", txt:"H. pylori e CA gástrico: erradicação reduz risco. Indicação OBRIGATÓRIA: parente 1º grau CA gástrico, atrofia/metaplasia detectadas em EDA, MALT linfoma, pós-ressecção CA gástrico precoce, dispepsia investigada, plano de AINE crônico em alto risco. Não indicar de rotina em assintomático sem fator."},
{nivel:"warn", txt:"Esquema de erradicação H. pylori: ADESÃO é tudo. Educar paciente: 14 dias completos, mesmo se melhorar antes. Efeitos adversos comuns: gosto metálico (clari), diarreia, náusea, fezes escuras se bismuto. Em alergia à amox: substituir por levofloxacina ou metronidazol."},
{nivel:"warn", txt:"IBP crônico (>1 ano): risco hipomagnesemia (cãibras, fraqueza, arritmias), deficiência B12, osteoporose/fratura, infecção C. difficile, infecção pulmonar, IRC. Tentar desmame em paciente sem indicação firme (DRGE refratária, esôfago de Barrett, esofagite C/D, anti-coagulado/AINE crônico)."},
{nivel:"info", txt:"Sorologia H. pylori: NÃO confirma infecção ATIVA — pode ficar positiva por anos após tratamento. Para confirmação de erradicação ou diagnóstico ativo, usar antígeno fecal ou urease respiratório."},
{nivel:"info", txt:"Vonoprazana: nova classe (PCAB — bloqueador competitivo de bomba). Mais potente, sem necessidade de jejum. Especialmente útil em DRGE refratária e erradicação H. pylori. Custo via privada."},
],
diretriz:"[Maastricht VI Consensus 2022 — H. pylori] [ACG/CAG 2017 Clinical Guideline: Treatment of Helicobacter pylori Infection] [Rome IV/V — Functional Dyspepsia] [PCDT-MS Helicobacter pylori 2024] [SBED — Consenso Brasileiro sobre H. pylori 2018] [TMFC 2ª ed, cap. gastro] [DUNCAN 5ª ed, cap. gastro]"
},

/* ============================================================
   3. ANEMIA — investigação ambulatorial MFC
   ============================================================ */
{
id:"anemia-investigacao", contexto:["ubs"], nome:"Anemia Ambulatorial — Investigação MFC (Ferropriva, B12, DRC)",
sis:"hemo", grav:"baixa",
cid:"D64.9", ciap:"B82",
sin:["anemia","anemia ferropriva","anemia megaloblástica","anemia da DRC","investigação anemia"],
def:"Redução de hemoglobina abaixo do limite inferior por sexo/idade: ♂<13, ♀<12 (não-gestante), ♀<11 (gestante), idoso ajustado. Diagnóstico ETIOLÓGICO é o que importa — anemia é manifestação, não diagnóstico. Classificação por VCM: microcítica (<80 — ferropriva, talassemia, doença crônica), normocítica (80-100 — DRC, doença crônica, hemólise, sangramento agudo), macrocítica (>100 — B12, folato, hipotireoidismo, hepatopatia, mielodisplasia, álcool, drogas).",
intro:"Anemia é achado COMUM em rotina. MFC: investigar etiologia (não tratar 'a anemia' com ferro indiscriminado), corrigir causa subjacente, monitorar resposta. As 3 causas mais frequentes em adulto ambulatorial: FERROPRIVA (sangramento crônico, deficiência alimentar, malabsorção), DRC (TFG <60 com diminuição EPO), DEFICIÊNCIA DE B12 (idoso, vegetariano, pós-bariátrica, autoimune). Em mulher fértil com anemia: ferropriva por sangramento menstrual; em homem ou pós-menopausa: investigar SANGRAMENTO GI sempre.",
fisio:"Anemia depende de: produção (medular, EPO, ferro, B12, folato), destruição (hemólise, sequestro esplênico), perda (sangramento agudo ou crônico). Microcítica = produção limitada por ferro (mais comum); normocítica = doença crônica, DRC, sangramento agudo; macrocítica = produção megaloblástica (B12/folato) ou maturação alterada (mielodisplasia, álcool).",
apresentacao:"Pode ser assintomática (achado em hemograma de rotina) ou sintomática (fadiga, dispneia aos esforços, palpitação, palidez, tontura, cefaleia). Em idoso: pode manifestar como sintomas neurológicos sutis (B12), confusão, queda, descompensação cardiovascular (IC com anemia descompensa). Sintomas específicos: pica/picação na ferropriva, parestesias na deficiência B12, glossite (B12/ferro).",
sintomas:[
"Fadiga inexplicada, intolerância aos esforços",
"Dispneia aos esforços, palpitação, taquicardia",
"Palidez cutâneo-mucosa (palpebrar, palmar, lingual)",
"Cefaleia, tontura, síncope (anemia severa)",
"Ferropriva: pica (vontade de comer terra, gelo, papel), unhas em colher (coiloníquia), glossite, queilite angular, fadiga muscular",
"Deficiência B12: glossite vermelha careca, parestesias, marcha atáxica, perda de propriocepção, demência reversível, irritabilidade, depressão (manifestações neurológicas podem preceder ou existir SEM anemia!)",
"DRC: edema, hipertensão de difícil controle, prurido, fadiga, anorexia",
"Sangramento: melena (GI alta), hematoquezia (GI baixa), menorragia, hematúria, epistaxe, equimoses",
],
profilaxia:"Alimentação adequada (carne, vegetais verdes, leguminosas, fortificação com ferro/folato), suplementação de ácido fólico pré-concepcional (0,4 mg/dia, ↑ se gestação prévia c/ NTD), vegetariano/vegano: B12 (cianocobalamina) suplementada, gestante: ferro + ácido fólico, idoso com fatores de risco: rastreamento periódico.",
freire:"Anemia frequentemente é atribuída à 'fraqueza' ou 'idade', medicada com ferro sem investigação adequada. Educar paciente: 'anemia é sinal, não diagnóstico — precisamos saber a CAUSA. Tomar ferro sem saber é como dar tubo de O2 a quem não respira por entupimento.' Em mulher menstruando: rastrear menorragia (ginecologia se grave). Em idoso: ATENÇÃO — anemia em idoso = sangramento GI até prova contrária; encaminhar gastro/colono. Em vegetariano sem suplementação: educar para B12 (alimentação não-fornece B12 ativa). Em paciente com DRC: vincular anemia ao quadro renal.",
sus_tx:"INVESTIGAÇÃO: hemograma completo + VCM + RDW + reticulócitos + ferritina + saturação de transferrina + B12 + folato + creatinina/TFG + sangue oculto nas fezes (em todo adulto com ferropriva inexplicada). Microcítica (VCM<80) — geralmente ferropriva: ferritina <30 (ou <100 em paciente com inflamação) = deficiência de ferro. Repor SULFATO FERROSO 40 mg de ferro elementar 1-3×/dia VO em jejum (UBS) — efeitos GI comuns (escurece fezes, náusea, constipação), tomar com vitamina C aumenta absorção. Duração: 3-6 meses após Hb normalizar (recompor depósitos). Em má-tolerância: glicinato ferroso, ferro oral dias alternados (absorção igual com menos efeitos). Ferro IV se: intolerância oral grave, malabsorção (DII, bariátrica, doença celíaca), DRC, IC, gestante com anemia grave 3º tri — via referência (CEAF/hospital). Normocítica — investigar DRC (TFG), hemólise (LDH, bilirrubina, haptoglobina, esquistócitos), sangramento, doença crônica. Macrocítica — dosar B12 + folato + TSH + transaminases + considerar uso de álcool. Deficiência B12: cianocobalamina 1000 mcg IM 1×/sem por 4 sem, depois 1×/mês indefinido (UBS) — preferida sobre VO em deficiência confirmada com sintomas neurológicos. Folato: ácido fólico 5 mg/dia VO por 4 meses (UBS). Encaminhar hematologia: anemia sem causa identificável após investigação básica, anemia grave (Hb<7), pancitopenia, esfregaço com células atípicas, suspeita de mielodisplasia/leucemia, suspeita de hemólise sem causa.",
padrao_ouro:"Acrescenta: ferro IV (sacarato, carboximaltose, derisomaltose) em diversas situações; eritropoetina (EPO recombinante) em DRC, mielodisplasia, oncológico — CEAF; transfusão (Hb <7 ou sintomas graves) — hospital; mielograma + biópsia óssea em suspeita de mielodisplasia/leucemia/aplasia.",
prog:"Bom em causas reversíveis (ferropriva, B12, folato). Reservado em hemoglobinopatias, mielodisplasia, neoplasias hematológicas.",
acomp:"Resposta esperada ao ferro: aumento de 1-2 g/dL em 4 sem; normalização em 2-3 meses; ferritina estoque em 4-6 meses. Resposta à B12: melhora neurológica pode ser parcial se atraso no tratamento. Falha de resposta a ferro: revisar adesão, dose, absorção (DRGE? IBP crônico?), perda continuada (sangramento oculto? menorragia?), diagnóstico (não era ferropriva?).",
p4:"NÃO repor ferro sem dosagem de ferritina/Tsat (pode ser doença crônica, hemoglobinopatia, mielodisplasia). NÃO repor B12 'profilático' em todo idoso sem dosagem. NÃO tratar anemia leve assintomática em paciente terminal/cuidados paliativos sem objetivo claro. NÃO usar 'fortificantes hematológicos' ou 'tônicos' (sem evidência específica). NÃO indicar transfusão em anemia ferropriva crônica leve-moderada (tratar com ferro).",
alertas:[
{nivel:"crit", txt:"⚠ Anemia FERROPRIVA em HOMEM ou MULHER PÓS-MENOPAUSA = SANGRAMENTO GI até prova contrária. Encaminhar gastro para EDA + colonoscopia (CA colorretal, úlcera, ectasia vascular, neoplasia). Não basta repor ferro."},
{nivel:"crit", txt:"⚠ B12 deficiente com manifestações neurológicas: reposição com VO oral em fase aguda pode ser insuficiente. Preferir IM (cianocobalamina 1000 mcg). Atraso pode resultar em sequelas neurológicas IRREVERSÍVEIS (mielopatia funicular, ataxia, demência)."},
{nivel:"crit", txt:"⚠ Pancitopenia (anemia + plaquetopenia + leucopenia) = SEMPRE encaminhar HEMATOLOGIA. Causas: aplasia, mielodisplasia, leucemia, mieloma, lúpus, sepse, drogas. Mielograma indicado."},
{nivel:"warn", txt:"Anemia DA DOENÇA CRÔNICA: ferritina normal-alta + Tsat baixa + VCM normal/baixo + sintomas crônicos (DRC, AR, neoplasia, infecção crônica). NÃO responde a ferro VO; pode responder a ferro IV em alguns casos. Tratar doença subjacente."},
{nivel:"warn", txt:"Doença celíaca: causa SUBESTIMADA de anemia ferropriva refratária — solicitar anti-tTG + IgA total. Especialmente se ferro refratário + sintomas GI vagos + perda de peso/diarreia."},
{nivel:"info", txt:"Em criança: anemia ferropriva é prevalente; rastreio recomendado 9-12 meses + repetir. Ferro profilático: 1-2 mg/kg/dia em ALM em casos selecionados (caderneta de saúde da criança)."},
{nivel:"info", txt:"Reticulócitos: ALTOS sugerem resposta medular adequada (perda aguda, hemólise — investigar); BAIXOS sugerem falha de produção (ferropriva, B12, DRC, aplasia)."},
],
diretriz:"[SBHH — Diretriz Brasileira de Anemia 2024] [BCSH 2021 Guideline for the laboratory diagnosis of functional iron deficiency] [ACG Iron deficiency anemia] [WHO 2024 — Anemia thresholds] [TMFC 2ª ed, cap. hematologia] [DUNCAN 5ª ed, cap. hematologia]"
},

);
