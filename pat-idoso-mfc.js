/* ===========================================================
   VOVÔMINIC DOUTÔ — pat/idoso-mfc.js
   Saúde do Idoso completa — abordagem MFC
   Fontes: Tratado de Geriatria Freitas 5ª ed 2022, Beers AGS 2023,
           STOPP-START v3 2023, KDIGO, NICE, Brasil MS Caderneta Idoso
   =========================================================== */

PATOLOGIAS.push(

{
id:"aga-mfc", contexto:["ubs"], nome:"Avaliação Geriátrica Ampla (AGA) — Abordagem MFC", sis:"idoso", grav:"baixa",
cid:"Z00.0", ciap:"A97",
sin:["avaliação geriátrica","aga","cuidado integral do idoso","avaliação multidimensional"],
def:"Avaliação multidimensional do idoso para identificar problemas clínicos, funcionais, cognitivos, psíquicos, sociais e ambientais. Substitui consulta tradicional focada em doença. Realizada por médico + enfermagem + ACS articulados na UBS, com NASF quando disponível.",
intro:"Idoso NÃO é 'adulto com mais doenças' — é categoria clinicamente distinta: apresentação atípica (pneumonia sem febre, IAM sem dor, depressão como queixa cognitiva), múltiplas comorbidades, polifarmácia, declínio funcional progressivo. AGA é a ferramenta central. Tempo médio: 40-60 min — vale a pena (reduz hospitalização, institucionalização e mortalidade conforme metanálises).",
apresentacao:"Idoso chega à UBS para consulta de rotina, demanda específica ou busca ativa do ACS. Indicações para AGA: ≥75a, ≥60a com fragilidade aparente, polifarmácia, quedas, declínio funcional recente, perda de peso involuntária, internação recente, novo diagnóstico de demência, pós-alta hospitalar.",
sintomas:[
"Idade exata",
"Queixa principal (frequentemente vaga: 'cansaço', 'sem ânimo')",
"Antecedentes pessoais completos",
"Medicações em uso (PEDIR pra trazer todas — caixinha)",
"Quem mora junto, quem cuida, quem decide",
"Renda familiar e do idoso",
"Condições da moradia (escadas, tapetes, iluminação, banheiro)",
"Funcionalidade (Katz AVDs, Lawton AIVDs)",
"Marcha (TUG — Timed Up and Go)",
"Cognição (MEEM, MoCA ou Mini-Cog)",
"Humor (PHQ-9 ou GDS-15)",
"Nutrição (perda de peso, MNA, dentição)",
"Continência urinária e fecal",
"Visão e audição",
"Vacinação (caderneta)"
],
fisio:"Envelhecimento fisiológico vs patológico — distinção crítica. Reserva funcional reduzida. Inflammaging. Sarcopenia, perda óssea, redução TFG, redução tolerância à glicose. Fragilidade (Fried): perda peso ≥4,5 kg em 1a + fadiga + lentidão de marcha + fraqueza preensão + atividade baixa. ≥3 critérios = frágil; 1-2 = pré-frágil. Decisões clínicas TODAS modificadas pela fragilidade.",
profilaxia:"Prevenção primária: atividade física (resistência + aeróbica + equilíbrio + flexibilidade), nutrição adequada (proteína 1,0-1,2 g/kg/dia, vit D), socialização, atividade cognitiva, controle de comorbidades em adulto jovem-meia-idade. Prevenção secundária na AGA: rastrear precocemente fragilidade, depressão, déficit cognitivo, quedas, polifarmácia — intervir antes que vire crise.",
freire:"Idoso muitas vezes chega 'pequeno' à consulta — atravessado pelas falas dos familiares ('ele esquece tudo'). PERGUNTE AO IDOSO PRIMEIRO. Olhe nos olhos. Sente na altura dele. Use o nome próprio (não 'vovô'/'vovó' sem permissão). 'Seu João, o que o senhor sente?' / 'O que o senhor acha que está acontecendo?'. Validar a história. Reconhecer o saber do paciente sobre seu próprio corpo. Os familiares são parceiros, não substitutos — convidá-los a falar DEPOIS do idoso. Combater o etarismo 'é da idade' que se infiltra na consulta. Negociar metas COM o idoso: o que SEU JOÃO quer? Manter caminhar até a praça? Brincar com a neta? Cuidar do quintal? Isso É a meta.",
sus_tx:`PLANO DE AGA ESTRUTURADO — APS:

A) AVALIAÇÃO INICIAL (consulta longa, 40-60 min):

  1. CONTEXTO E HISTÓRIA
  • Quem é (história de vida, papel social, autonomia)
  • Com quem mora, quem cuida, quem decide
  • Renda do idoso (aposentadoria, benefícios)
  • Condições da moradia

  2. CONDIÇÕES CLÍNICAS
  • Comorbidades listadas (doenças crônicas e seu controle)
  • Medicações em uso (PEDIR caixinha)
  • Vacinação (caderneta)
  • Hábitos: tabaco, álcool (AUDIT-C), atividade física, sono

  3. FUNCIONALIDADE
  • Katz AVDs (6 itens): banhar-se, vestir-se, banheiro, transferir-se, continência, alimentar-se
  • Lawton AIVDs (8 itens): telefone, transporte, compras, casa, cozinhar, lavar roupa, medicações, dinheiro

  4. MARCHA E QUEDA
  • TUG: levantar da cadeira sem braços, andar 3 m, virar, voltar, sentar. CRONOMETRAR
    - <10s: normal
    - 10-20s: independência funcional
    - 20-30s: independência marginal
    - >30s: ALTO risco queda
  • Velocidade de marcha 4 m: <0,8 m/s = pior prognóstico
  • Histórico de quedas no último ano

  5. COGNIÇÃO
  • Mini-Cog (rápido, 3 min): 3 palavras + relógio + recordar
  • MEEM (10-15 min): escore por escolaridade
    - Analfabeto: <13 sugere déficit
    - 1-4 anos: <18
    - 5-8 anos: <23
    - >8 anos: <26
  • MoCA mais sensível para CCL
  • Se rastreio positivo → investigação

  6. HUMOR
  • PHQ-9 ou GDS-15: ≥6 sugere depressão
  • Risco suicida — PERGUNTAR

  7. NUTRIÇÃO
  • Perda peso involuntária ≥4,5 kg em 6m = alerta
  • MNA-curto
  • Dentição (próteses)
  • Disfagia

  8. CONTINÊNCIA (ver patologia específica)

  9. SENSORIAL
  • Visão e audição — encaminhar especialista se queixa

  10. AMBIENTAL E SOCIAL
  • Casa segura (tapetes, iluminação, escadas, barras)
  • Isolamento social = fator de risco cardiovascular comparável a fumo
  • Vínculos comunitários

  11. FRAGILIDADE (Fried)
  • 5 critérios: perda peso, fadiga, lentidão, fraqueza, atividade baixa
  • ≥3 = frágil → P4 robusta
  • 1-2 = pré-frágil → intervir (exercício + nutrição)

B) PLANO INTERVENÇÃO:
  • Despresecrição (ver 'Polifarmácia')
  • Programa exercícios resistido + equilíbrio
  • Suplementação se desnutrido (proteína, vit D, B12, cálcio)
  • Adaptação ambiental (CRAS pode ajudar)
  • Acompanhamento longitudinal
  • Vínculo ACS (visitas regulares)
  • Avaliação NASF (fisio, nutri, psico, AS)

C) REAVALIAÇÃO:
  • AGA completa a cada 6-12 meses ou mudança significativa
  • Acompanhamento mensal-trimestral conforme complexidade`,
padrao_ouro:"AGA é o padrão internacional (BGS, IAGG, AGS, SBGG). Equipe multiprofissional: médico+enf+farmacêutico+nutri+fisio+psico+assistente social. Avaliação geriátrica domiciliar é gold-standard para idoso frágil/acamado.",
prog:"AGA bem feita reduz hospitalização desnecessária, institucionalização, mortalidade — evidência robusta. Idoso rotulado 'velhinho cansado' sem AGA pode ter quadro reversível subjacente (depressão, hipotireoidismo, anemia, déficit B12, polifarmácia).",
acomp:"Idoso saudável: 1-2 consultas/ano. Comorbidades estáveis: 3-4/ano. Frágil/dependente: mensal-trimestral + visitas ACS quinzenais. AGA completa repetida em mudança significativa.",
p4:"⚠ NÃO patologizar envelhecimento. ⚠ Não medicar 'colesterol levemente alto' em idoso frágil/EV limitada. ⚠ Não rastrear neoplasia em idoso com expectativa <10 anos (USPSTF). ⚠ Não dar 'remédio para memória' em queixa cognitiva isolada sem diagnóstico de demência. ⚠ Não fazer 'check-up completo anual' assintomático — escolher ações com benefício comprovado. ⚠ Etarismo iatrogênico: assumir sintoma 'é da idade' é negligência.",
calcs:["phq9","audit-c","imc"],
alertas:[
{t:"info",x:"AGA estruturada substitui consulta tradicional focada em doença. Tempo investido se paga em desfechos."},
{t:"warn",x:"Apresentação ATÍPICA é regra no idoso: pneumonia sem febre, IAM sem dor, depressão como queixa cognitiva."},
{t:"crit",x:"Delirium novo em idoso = EMERGÊNCIA. Buscar causa (infecção, medicação, distúrbio metabólico, AVC). Não confundir com demência."}
],
diretriz:"Tratado de Geriatria — Freitas, Py [FREITAS 5ª ed 2022]. SBGG — Diretrizes para o Cuidado da Pessoa Idosa. BGS — Comprehensive Geriatric Assessment. Brasil MS — Caderneta de Saúde da Pessoa Idosa. NICE Care of Older People."
},

{
id:"polifarmacia-idoso", contexto:["ubs"], nome:"Polifarmácia e Despresecrição (Beers + STOPP-START)", sis:"idoso", grav:"media",
cid:"Z79", ciap:"A85",
sin:["polifarmácia","despresecrição","beers","stopp-start","cascata de prescrição","medicação inapropriada"],
def:"Uso ≥5 medicamentos (polifarmácia menor) ou ≥10 (polifarmácia maior). Em idoso, gera eventos adversos frequentes, interações, cascata de prescrição, queda, delirium, hospitalização. Despresecrição é o processo INTENCIONAL de retirar medicamentos cujo risco supera o benefício para AQUELE paciente.",
intro:"Polifarmácia é epidemia silenciosa do idoso brasileiro — média 5-8 medicamentos contínuos em ≥65a. Causada por: acúmulo de prescrições sem revisão; cascata (efeito adverso de droga A tratado com droga B); prescrição preventiva sem critério de fragilidade; automedicação; fragmentação do cuidado. MFC É o lugar da despresecrição — só quem coordena vê o todo.",
apresentacao:"Idoso vem com sacola de medicamentos, ou só com receitas, ou nem traz (confuso sobre o que toma). Sintomas podem ser EVENTO ADVERSO disfarçado (tontura, queda, sedação, confusão, retenção urinária, constipação). Família traz queixa: 'mãe está esquecida, sonolenta'. ACS sinaliza: 'idoso confuso desde a alta'.",
sintomas:[
"Número de medicamentos contínuos",
"Lista completa: nome, dose, frequência, há quanto tempo, prescritor, indicação atual",
"Aderência real (quem dá remédio? cumpre horário?)",
"Eventos adversos suspeitos",
"História de internação recente (oportunidade de rever)",
"Comorbidades atuais (algumas indicações podem ter desaparecido)",
"Função renal (eGFR), hepática",
"Funcionalidade, fragilidade, expectativa de vida estimada",
"Decisão compartilhada possível? (cognição preservada? cuidador presente?)"
],
fisio:"Idoso: farmacocinética modificada — ↓função renal, ↓massa muscular (↓depuração creatinina mascarada por creatinina sérica), ↑gordura corporal (↑Vd lipossolúveis, prolonga BZD), ↓metabolismo hepático, ↓albumina (↑fração livre), ↓resposta β-adrenérgica, ↑sensibilidade SNC. Doses padrão de adulto podem ser tóxicas. Interações farmacológicas multiplicam-se: 4 drogas = 6 interações; 7 = 21; 10 = 45.",
profilaxia:"Revisão periódica de prescrições em TODA consulta. 'Esta droga ainda tem indicação? Continua aceitável risco-benefício?'. Não iniciar medicamento sem reavaliar lista atual.",
freire:"Despresecrição assusta paciente e família ('o doutor anterior disse pra tomar pra sempre'). Construir entendimento: 'medicamento bom pra adulto pode ficar ruim pra senhor agora — vamos rever juntos'. Mostrar a lista NA MESA, falar uma por uma. Pactuar mudanças GRADUAIS (não tirar 5 drogas de uma vez). NUNCA atacar o colega prescritor verbalmente — minar credibilidade piora aderência futura. METÁFORA: 'todo remédio é uma pedra na sua mochila — algumas necessárias, outras só pesando'.",
sus_tx:`DESPRESCRIÇÃO ESTRUTURADA NA APS:

A) FERRAMENTAS DE AVALIAÇÃO:

  CRITÉRIOS DE BEERS (AGS 2023) — Medicamentos PIM em ≥65a:
  
  EVITAR em geral:
  • Benzodiazepínicos (todos): queda, fratura, delirium, demência
  • Z-drugs (zolpidem, zopiclona): mesmo perfil
  • Anti-histamínicos 1ª geração (dexclorfeniramina, hidroxizina, prometazina): anticolinérgicos
  • ATC anticolinérgico forte (amitriptilina, imipramina, clomipramina)
  • Antipsicóticos para BPSD em demência (exceto crise breve)
  • AINEs sistêmicos prolongados (cardio, renal, GI)
  • Sulfonilureia longa duração (glibenclamida): hipoglicemia
  • Digoxina ≥0,125 mg/d sem indicação clara
  • α-bloqueadores (doxazosina): ortostatismo
  • Relaxantes musculares centrais (ciclobenzaprina)
  • Antiespasmódicos sistêmicos (escopolamina): anticolinérgicos
  • Metildopa, clonidina (SNC central)
  • Carga anticolinérgica cumulativa
  
  CRITÉRIOS STOPP (v3 2023):
  • IBP >8 sem sem indicação clara
  • Estatina prevenção primária >75a EV<5 anos
  • AAS prevenção primária >75a
  • AINE crônico em DRC G3+
  • BZD para insônia/ansiedade >4 sem
  • Opioide sem dor moderada-grave / sem laxante
  • Antipsicótico para BPSD >3 meses
  • Anti-hipertensivos múltiplos em frágil c/ PAS<130
  • Antiparkinsoniano sem dx Parkinson
  • Furosemida 40-80 mg/dia em edema periférico SEM ICC documentada (substituir por meia compressiva + restrição salina)
  
  CRITÉRIOS START (v3 2023):
  • Estatina em prevenção secundária (DAC, AVC, DAP)
  • Anticoagulação em FA com CHA2DS2-VASc ≥2
  • Vacina antipneumocócica e influenza
  • Cálcio + Vit D em risco de fratura
  • Bisfosfonato em osteoporose confirmada
  • IECA/BRA + βbloq em IC sistólica
  • IECA/BRA em DM2 com microalbuminúria
  • Antidepressivo em depressão moderada-grave
  • Tratamento Parkinson em sintomas funcionais

B) MÉTODO DESPRESCRIÇÃO:
  1. RECONCILIAR: lista real (paciente + caixinha + prontuário + sistema)
  2. AVALIAR cada droga: indicação? eficácia? efeito adverso? interação? duplicação?
  3. PRIORIZAR alto risco (BZD, anticolinérgico, opioide, sulfa) ou baixo benefício
  4. PACTUAR com paciente+família
  5. RETIRAR UMA por consulta
  6. DESCALONAR gradualmente (≥25%/semana) drogas com síndrome de retirada (BZD, βbloq, IBP, ISRS, opioide, clonidina)
  7. MONITORAR efeitos
  8. REGISTRAR motivo no prontuário

C) CASOS COMUNS:

  Idoso 80a frágil, clonazepam 2 mg/noite há 10 anos:
  → Reduzir 0,5 mg a cada 4-6 sem (24-30 sem total). Substituir por higiene do sono + TCC-I.
  
  Idoso 78a, omeprazol 40 mg/d há 8 anos:
  → Reduzir 20 mg × 4 sem → dose mín efetiva ou descontinuar.
  
  Idoso 82a frágil, glibenclamida 10 mg/d, HbA1c 7,2%, hipos matinais:
  → Substituir por METFORMINA 500 mg 12/12h (iniciar; titular para 850-1000 mg 12/12h conforme tolerância — UBS/PFPB). Meta HbA1c 7,5-8% individualizada (idoso frágil tolera HbA1c mais alta para evitar hipo).
  
  Idoso 85a com AAS prevenção primária, HAS controlada:
  → Suspender AAS (Beers).
  
  Idoso 76a com cascata AINE→HAS→losartana+tiazida→tontura→flunarizina→parkinsonismo→biperideno 2 mg/dia:
  → Suspender flunarizina + biperideno (cascata medicamentosa típica). Reavaliar necessidade de AINE.

D) AÇÕES E RESPONSÁVEIS:
  • Médico: revisão crítica, decisão clínica, prescrição
  • Farmacêutico NASF: reconciliação, interações
  • Enfermagem: orientação, monitorar retirada
  • ACS: visita domiciliar, observar mudanças
  • Família/cuidador: parceiro fundamental
  • Paciente: protagonista se cognição preservada

E) REAVALIAÇÃO:
  • Pós-cada retirada: 2-4 sem
  • Revisão completa: a cada 6-12 meses`,
padrao_ouro:"AGS Beers 2023 + STOPP-START v3 2023 são consensos internacionais com evidência robusta. ARMOR, RASP, MAI são outras ferramentas. Despresecrição assistida em grupo multidisciplinar (médico + farmacêutico + enf) é o padrão hospitalar e ambulatorial avançado.",
prog:"Despresecrição adequada REDUZ queda, delirium, hospitalização, mortalidade. Síndrome de retirada manejável com descalonamento gradual. Paciente e família frequentemente se sentem MELHOR após retirada de medicações inadequadas — relato comum de 'voltei a ser eu'.",
acomp:"Acompanhamento estreito durante despresecrição (2-4 sem entre retiradas). Revisão completa anual mesmo em paciente estável. ACS reforça aderência ao novo esquema.",
p4:"⚠⚠⚠ ESTE É UM DOS CAMPOS P4 MAIS IMPORTANTES DA MFC. ⚠ Cascata de prescrição é iatrogenia comum — RECONHECER e desfazer. ⚠ Não atacar colega prescritor verbalmente. ⚠ Despresecrição é PROCESSO, não evento. ⚠ Idoso frágil/EV limitada: prevenção primária faz menos sentido. ⚠ Hospital alta = oportunidade. ⚠ 'Vitamina/suplemento' sem indicação não é inocente. ⚠ Despresecrição NÃO É 'desistir' — é cuidar melhor.",
calcs:["framingham","imc"],
alertas:[
{t:"crit",x:"BZD em idoso = QUEDA + FRATURA + DEMÊNCIA. Beers fortemente. DESPRESCREVER gradualmente."},
{t:"warn",x:"Cascata de prescrição: AINE→HAS→anti-HTA→tontura→flunarizina→parkinsonismo. Romper a cadeia."},
{t:"info",x:"Retirada de UMA droga por consulta."},
{t:"warn",x:"BZD, βbloq, IBP, ISRS, opioide, clonidina: DESCALONAR gradualmente."}
],
diretriz:"AGS Beers Criteria for Potentially Inappropriate Medication Use [BEERS 2023]. O'Mahony et al. STOPP/START v3 [STOPP-START 2023]. Brasil MS — Caderneta da Pessoa Idosa. FREITAS 5ª ed 2022."
},

{
id:"quedas-idoso", contexto:["ubs"], nome:"Quedas em Idoso — Investigação e Prevenção Multifatorial", sis:"idoso", grav:"media",
cid:"R29.6", ciap:"A28",
sin:["quedas","queda em idoso","prevenção de quedas","queda recorrente","síndrome pós-queda"],
def:"Queda = evento involuntário em que pessoa cai ao solo ou nível inferior. Em ≥65a, 30% caem por ano; ≥80a, 50%. NÃO é evento isolado — é sinal clínico multifatorial. Investigação ampla mandatória + prevenção robusta.",
intro:"Queda é causa #1 de morte acidental em idoso brasileiro. Fratura de fêmur pós-queda em ≥80a tem mortalidade 20-30% em 1 ano. Mas queda não é só fratura — é gatilho de DECLÍNIO em cascata: imobilização → sarcopenia → mais quedas → institucionalização → óbito. MFC tem ferramentas baratas e eficazes (avaliação multifatorial + exercício) com evidência forte de redução.",
apresentacao:"Idoso vem após queda (família traz ou ACS sinaliza). Queixas associadas: dor, hematoma, fratura, MEDO DE CAIR DE NOVO (síndrome pós-queda — restrição voluntária de atividade que acelera declínio). Detectada em rastreio: 'o senhor caiu nos últimos 12 meses?'.",
sintomas:[
"Detalhes da queda: quando? onde? como? presenciada?",
"Queda anterior últimos 12 meses (≥1 = risco aumentado)",
"Múltiplas quedas = alto risco",
"Sintomas associados: vertigem, palpitação, dor torácica, dispneia, perda de consciência (pré-síncope/síncope), parestesias",
"Tempo do dia (matinal = ortostatismo medicamentoso; noturno = ida ao banheiro / diurético tardio)",
"Lugar (dentro de casa >50% ou fora)",
"Calçado, uso de bengala/andador",
"Iluminação, tapetes, escadas",
"Visão (catarata? óculos desatualizados?)",
"Audição",
"Medicações em uso (BZD, opioide, anti-HTA, antipsicótico, anti-Parkinson)",
"Comorbidades (Parkinson, AVC prévio, neuropatia, artrite, demência, depressão, deficiência B12, hipotireoidismo, anemia)",
"Síndrome pós-queda (medo, restrição voluntária)",
"Medo expressado pela família"
],
fisio:"Causa MULTIFATORIAL. Fatores INTRÍNSECOS: sarcopenia, alteração marcha/equilíbrio, neuropatia, déficit visual/auditivo, doença neurológica (Parkinson, AVC, demência), cardiovascular (síncope, arritmia, hipotensão ortostática), metabólica (hipoglicemia, hiponatremia, B12). EXTRÍNSECOS: medicamentos (BZD, anti-HTA, opioide, anticonvulsivante, antidepressivo, antipsicótico), ambiente (tapetes, iluminação, escadas, banheiro), calçado, animais de estimação. Cada fator adiciona risco multiplicativo.",
profilaxia:"PRIMÁRIA: exercício resistido + equilíbrio (Tai Chi, Otago Exercise Program) — REDUZ quedas 30-40%. Vitamina D em deficiência. Adaptação ambiental. Revisão medicamentosa. SECUNDÁRIA pós-queda: avaliação multifatorial + intervenção dirigida + prevenção de recorrência.",
freire:"Idoso e família frequentemente minimizam ('foi distração', 'tropecei no gato'). Quebrar a normalização: 'queda em idoso NÃO é normal — tem causa, vamos investigar'. Validar o medo de cair de novo SEM amplificar paralisia ('vamos descobrir o motivo e te dar segurança pra continuar ativo'). ATIVIDADE FÍSICA POS-QUEDA é parte do tratamento — paciente que vira sedentário por medo cai mais. METÁFORA: 'músculo é como dinheiro — se não usa, perde'. Negociar EXERCÍCIO ADAPTADO ao gosto/contexto do idoso (caminhar, dançar forró, lavar quintal, ginástica de grupo na praça). ACS pode acompanhar.",
sus_tx:`AVALIAÇÃO E MANEJO DE QUEDA — APS:

A) PERGUNTAR EM TODA CONSULTA DE ≥65a:
• 'Caiu nos últimos 12 meses?'
• 'Sente-se inseguro de pé ou caminhando?'
• 'Tem medo de cair?'
Qualquer resposta SIM → avaliar.

B) AVALIAÇÃO MULTIFATORIAL (após queda OU TUG ≥12s):

  1. HISTÓRIA da queda(s)
  • Circunstâncias: lugar, hora, atividade, presença de outros
  • Sintomas prodrômicos: vertigem, palpitação, escurecimento (síncope), perda de consciência
  • Trauma associado (cabeça? fratura? hematoma?)
  • Demora para levantar? Conseguiu sozinho?
  
  2. EXAME FÍSICO
  • PA deitado + 1 min em pé + 3 min em pé (HIPOTENSÃO ORTOSTÁTICA: queda ≥20 mmHg PAS ou ≥10 PAD)
  • Ritmo cardíaco (FA? bradi/taqui?)
  • Marcha (TUG, velocidade)
  • Equilíbrio (Romberg, apoio unipodal)
  • Força preensão (frágil se <20 kg ♀ / <30 kg ♂)
  • Sensibilidade vibratória (B12, neuropatia diabética)
  • ROT (neuropatia)
  • Visão (acuidade visual simples)
  • Audição
  • Pele (hematomas, lesões antigas — sugerem quedas anteriores subnotificadas)
  
  3. EXAMES BÁSICOS
  • Hemograma, função renal, eletrólitos, glicemia, TSH, B12, vit D
  • ECG (FA, BAV, intervalo QT longo)
  • Considerar: Holter 24h em síncope inexplicada; ecocardiograma se sopro
  
  4. REVISÃO DE MEDICAMENTOS
  • Beers/STOPP: BZD, opioide, ATC anticolinérgico, antipsicótico, anti-HTA múltiplo, sulfo, anti-Parkinson em excesso, AINE crônico
  • DESPRESCREVER quando possível (ver patologia 'Polifarmácia')
  
  5. AMBIENTE
  • Visita domiciliar do ACS:
    - Tapetes soltos
    - Iluminação (corredor, banheiro, escada)
    - Barras de apoio no banheiro
    - Altura da cama
    - Calçado adequado
    - Animais de estimação

C) INTERVENÇÕES (evidência forte):

  EXERCÍCIO: principal intervenção (redução 30-40% quedas)
  • Resistido + equilíbrio + flexibilidade
  • Programas estruturados: Otago (60 min, 3x/sem), Tai Chi
  • Fisioterapeuta NASF idealmente
  • Adaptado: caminhada com bastão, ginástica em grupo, dança
  
  AJUSTE DE MEDICAÇÕES (despresecrição)
  
  AJUSTE AMBIENTAL: remover tapetes, instalar barras banheiro, melhorar iluminação, adequar móveis
  
  CALÇADO: sapato fechado, sola baixa antiderrapante, sem chinelo solto
  
  AUXÍLIO: bengala/andador prescrita por fisio com ajuste de altura
  
  ÓCULOS: atualizar; cuidado com multifocais em escadas (aumenta queda — usar único ou descer com cuidado)
  
  HIPOTENSÃO ORTOSTÁTICA: revisar diurético/anti-HTA; meias de compressão; levantar gradualmente; aumentar Na+ se necessário
  
  VIT D: suplementar 800-2000 UI/d se deficiência (25(OH)D <30 ng/mL)
  
  PREVENÇÃO DE FRATURA: rastrear osteoporose (FRAX, densitometria), tratar (ver 'Osteoporose')
  
  PROTETOR DE QUADRIL: evidência limitada — considerar em institucionalizado de alto risco
  
  ALARME DE QUEDA (relógio, pulseira, dispositivo): útil em idoso que mora sozinho

D) SÍNDROME PÓS-QUEDA (medo paralisante):
• Reabilitação gradual com fisioterapia
• Estratégias cognitivo-comportamentais (psicologia NASF)
• Família apoia atividade, não restringe

E) AÇÕES E RESPONSÁVEIS:
• Médico: avaliação, despresecrição, encaminhamentos
• Enfermagem: orientação, monitorar
• ACS: visita domiciliar para ambiente
• Fisioterapeuta NASF: exercício estruturado
• Família: parceira; NÃO superproteger (acelera declínio)

F) REAVALIAÇÃO:
• 1-3 meses após intervenção
• Continuidade com avaliação anual em todo idoso ≥65a`,
padrao_ouro:"NICE Falls in Older People 2017 + AGS/BGS Clinical Practice Guideline 2022 são guias internacionais. STEADI (CDC) é ferramenta operacional. Otago Exercise Program e Tai Chi têm maior evidência. Programa hospitalar com equipe multidisciplinar é padrão para idoso de alto risco.",
prog:"Idoso com queda + intervenção multifatorial: redução 30-40% novas quedas. Idoso sem intervenção: 50% recorrência em 1 ano. Fratura quadril em idoso frágil: mortalidade 20-30% em 1 ano. Síndrome pós-queda não tratada: institucionalização em meses.",
acomp:"Após queda: reavaliação 1-3 meses. Continuidade trimestral em risco alto, anual em risco baixo. ACS sinaliza nova queda imediatamente.",
p4:"⚠ NÃO normalizar queda em idoso ('foi distração'). ⚠ NÃO restringir atividade física por medo de queda — acelera sarcopenia. ⚠ Cuidado com 'protetor de cabeça' caseiro (capacete em demente agitado). ⚠ Não polifarmacizar com 'vitamina para ossos' sem deficiência documentada. ⚠ Bengala/andador SEM treino aumenta queda (não é só dar — é treinar uso). ⚠ Multifocais novos em idoso = risco de queda nos primeiros meses. ⚠ Não rastrear DMO em idoso muito frágil com EV limitada (P4). ⚠ Hipo ortostática frequentemente é causada por droga — buscar droga ANTES de adicionar fludrocortisona.",
calcs:["framingham"],
alertas:[
{t:"crit",x:"Queda + perda de consciência = investigar síncope (cardio, neuro). Pode ser arritmia, AVC, hipoglicemia."},
{t:"warn",x:"TUG ≥30s = ALTO risco. Investigar e intervir."},
{t:"info",x:"Exercício resistido + equilíbrio reduz quedas 30-40% (Otago, Tai Chi)."},
{t:"warn",x:"Síndrome pós-queda: medo paralisante. Reabilitar GRADUALMENTE — sedentarismo acelera declínio."}
],
diretriz:"NICE — Falls: Assessment and Prevention in Older People 2017. AGS/BGS Clinical Practice Guideline for Prevention of Falls 2022. CDC STEADI Initiative. FREITAS 5ª ed 2022."
}

);


PATOLOGIAS.push(

{
id:"demencia-mfc", contexto:["ubs"], nome:"Demência — Rastreio, Diagnóstico e Manejo MFC", sis:"idoso", grav:"baixa",
cid:"F03", ciap:"P70",
sin:["demência","alzheimer","CCL","comprometimento cognitivo leve","síndrome demencial","BPSD"],
def:"Síndrome de declínio cognitivo progressivo, persistente, que compromete funcionalidade. Inclui Alzheimer (mais comum, 60-70%), demência vascular, demência por corpos de Lewy, demência frontotemporal, demência mista. Diagnóstico clínico, baseado em história + exame cognitivo + funcionalidade — exames de imagem/lab são para diferencial e EXCLUSÃO de causas reversíveis.",
intro:"Demência tem alta prevalência (~7% em ≥65a, dobrando a cada 5 anos). Subdiagnosticada na APS. Diagnóstico precoce permite: planejamento familiar, despresecrição de drogas que pioram cognição, manejo de comorbidades, tratamento sintomático, identificação de causa reversível em ~5-10% dos casos. MFC tem papel CENTRAL — não é só 'mandar pra neurologista'.",
apresentacao:"Família traz queixa primariamente — paciente frequentemente minimiza ou não tem insight. Queixas iniciais: esquecimentos repetidos (mesmas perguntas), perda de objetos, desorientação espacial (saiu e não soube voltar), dificuldade em conta corrente / receita / medicações, mudança de personalidade, perda de interesse, irritabilidade, isolamento. Apresentações atípicas: queixa cognitiva como sintoma de DEPRESSÃO (pseudodemência), apresentação somática.",
sintomas:[
"Esquecimento de eventos recentes",
"Repetição de perguntas",
"Dificuldade em encontrar palavras",
"Desorientação no tempo (data, dia da semana) e espaço",
"Perda de objetos",
"Dificuldade em tarefas complexas (conta corrente, receita, dirigir)",
"Mudanças de personalidade, irritabilidade, apatia",
"Sintomas BPSD: agitação, perambulação, delírios, alucinações, agressividade, insônia",
"Quedas frequentes (sem causa motora explicada)",
"Perda de peso involuntária",
"Histórico familiar de demência",
"Fatores de risco vascular (HAS, DM, dislipidemia, AVC prévio, FA)",
"Trauma craniano significativo prévio",
"Álcool / drogas",
"Privação social, baixa escolaridade",
"Comprometimento funcional (AVDs e AIVDs)"
],
fisio:"Múltiplas etiologias com fisiopatologia distinta. ALZHEIMER: acúmulo β-amiloide (placas) + tau hiperfosforilada (emaranhados neurofibrilares) → morte neuronal, especialmente hipocampo e córtex temporoparietal. VASCULAR: lesões cumulativas isquêmicas (multi-infarto ou doença de pequenos vasos). LEWY: α-sinucleína em corpos de Lewy difusos → flutuação cognitiva, alucinações visuais, parkinsonismo. FRONTOTEMPORAL: degeneração lobar frontal/temporal → mudança comportamental ou afasia progressiva. MISTA (frequente em idoso ≥85a).",
profilaxia:"Fatores de risco MODIFICÁVEIS (Lancet Commission 2024): 14 fatores reduzem ~45% dos casos potencialmente:\n• Educação na infância\n• HAS, obesidade, DM2, dislipidemia\n• Tabaco, álcool excessivo\n• Atividade física regular\n• Audição não corrigida (aparelho auditivo)\n• Depressão não tratada\n• Isolamento social\n• Poluição do ar\n• TCE prévio\n• Sono inadequado\n• Visão não corrigida\n• Colesterol LDL alto\n\nIntervenção em fatores de risco mid-life e late-life é prevenção primária real.",
freire:"Diagnóstico de demência é momento delicado — toca identidade, autonomia, futuro. Comunique COM o paciente E família (quando paciente tem cognição preservada o suficiente). 'O senhor tem percebido que a memória está mudando?'. Validar a perda sem deixar a pessoa só com o medo. Foco em CAPACIDADES PRESERVADAS, não só perdas. Planejamento avançado de cuidados deve ser feito CEDO (testamento, procurações, decisões sobre cuidados terminais) enquanto a pessoa tem capacidade. Família precisa de psicoeducação — entender que comportamentos não são 'birra' nem 'manipulação', são sintoma. CUIDAR DO CUIDADOR é parte do tratamento — sobrecarga familiar gera depressão, doença, abandono.",
sus_tx:`AVALIAÇÃO E MANEJO DE DEMÊNCIA — APS:

A) RASTREIO em idoso com queixa cognitiva (própria ou familiar):

  TRIAGEM RÁPIDA — Mini-Cog (3 min):
  • Pedir lembrar 3 palavras (relógio, bola, banana)
  • Desenhar relógio com horas e ponteiros marcando 11:10
  • Recordar 3 palavras
  • Score: 0-2 sugere déficit; 3-5 normal
  
  MEEM (10-15 min, mais detalhado):
  • Pontuação por escolaridade:
    - Analfabeto: ponto de corte 13
    - 1-4 anos: 18
    - 5-8 anos: 23
    - >8 anos: 26
  • Avalia: orientação, registro, atenção/cálculo, memória, linguagem, praxis
  
  MoCA (15 min):
  • Mais sensível para CCL (Comprometimento Cognitivo Leve)
  • Score ≤25/30 sugere déficit (ajuste por escolaridade)

B) INVESTIGAÇÃO BÁSICA (excluir causa reversível ou modificável):
  • Hemograma, função renal, eletrólitos, glicemia, lipídograma
  • TSH (hipotireoidismo)
  • B12 (deficiência)
  • VDRL (neurossífilis — rara)
  • HIV se fatores de risco
  • Função hepática
  • Ca, P, Mg
  • Vit D (deficiência associada)
  • Ácido úrico
  • Sumário de urina (ITU pode descompensar cognição)
  
  IMAGEM:
  • TC ou RM crânio: para excluir HSDC (hematoma subdural crônico — comum em idoso pós-trauma), hidrocefalia normo-pressão (HNP — tríade: marcha apraxica + incontinência + déficit cognitivo, REVERSÍVEL com derivação), tumor, AVC silenciosos extensos
  • Idealmente RM para detalhe estrutural
  • Não rotineira em quadro típico de Alzheimer leve — usar em atipicidades

C) DIAGNÓSTICO DIFERENCIAL CRÍTICO:
  • DEPRESSÃO (pseudodemência): início mais agudo, queixa exagerada pelo paciente, esforço para responder, melhora com tratamento AD
  • DELIRIUM (ver patologia específica): início agudo, flutuação, alteração consciência
  • CCL (Comprometimento Cognitivo Leve): queixa + déficit em testes mas SEM comprometimento funcional. ~10-15%/ano evoluem para demência
  • HSDC, HNP, neoplasia, hipotireoidismo, B12, neurossífilis
  • Apneia obstrutiva do sono (causa subdiagnosticada)
  • Uso crônico de medicamentos (BZD, anticolinérgicos)
  • Álcool

D) MANEJO FARMACOLÓGICO:

  Inibidores de colinesterase (donepezila 5-10 mg, rivastigmina, galantamina):
  • Para Alzheimer leve a moderado (MEEM 12-26)
  • Modesto benefício em sintomas — não modificam progressão
  • Não disponíveis CBAF rotineiramente — CEAF tem com PCDT específicos (donepezila SUS via CEAF)
  • Efeitos adversos: GI, bradicardia, hipotensão, síncope
  
  Memantina (antagonista NMDA):
  • Alzheimer moderado a grave (MEEM <16)
  • Dose: iniciar 5 mg/dia, escalonar 5 mg/sem até 20 mg/dia em 2 doses (manhã/noite)
  • CEAF com PCDT
  
  ANTI-Aβ (Lecanemabe, Donanemabe): aprovados 2023-2024 — alto custo, modesto benefício em estágio inicial. NÃO no SUS. Restritos a centros privados.
  
  TRATAMENTO BPSD (sintomas comportamentais):
  • PRIMEIRA LINHA: ABORDAGEM NÃO-FARMACOLÓGICA
    - Ambiente calmo, previsível
    - Identificar gatilhos (dor, fome, sede, calor, frio, banheiro, sono)
    - Validação (não confrontar delírios — redirecionar)
    - Música, atividades estruturadas
    - Resposta a agitação: presença calma, voz baixa
  • Se SINTOMAS GRAVES com risco (agressão, agitação intensa):
    - Risperidona 0,25-1 mg/d (CEAF; uso ≤12 semanas — Beers/STOPP)
    - Quetiapina 12,5-50 mg VO 1-2×/dia (preferida em demência por corpos de Lewy e por Parkinson — não usar haloperidol nesses contextos: piora muito o parkinsonismo)
    - Evitar BZD (paradoxal: agita, sedando demais)
  • ATENÇÃO: antipsicóticos em demência aumentam mortalidade — uso restrito, justificado, reavaliado a cada 4-12 sem.

E) MANEJO NÃO-FARMACOLÓGICO:
  • Estimulação cognitiva (jogos, leitura, conversas, exercícios)
  • Atividade física regular (caminhar, dançar)
  • Socialização (combater isolamento)
  • Sono adequado
  • Nutrição (dieta Mediterrânea ou DASH)
  • Manejo de comorbidades (HAS, DM, dislipidemia)
  • Aparelho auditivo se hipoacusia
  • Manter rotina, ambiente familiar

F) CUIDADO DO CUIDADOR:
  • Psicoeducação sobre evolução, comportamentos, cuidados práticos
  • Apoio psicológico (~50% dos cuidadores desenvolvem depressão)
  • Grupos de apoio (ABRAz - Associação Brasileira de Alzheimer)
  • Períodos de descanso (cuidador secundário, centro-dia)
  • Avaliar sobrecarga (Zarit Burden Interview)
  • Avaliar abuso/maus tratos (idoso vulnerável)

G) PLANEJAMENTO AVANÇADO:
  • CEDO (enquanto capacidade preservada): testamento, procurações, diretivas antecipadas de cuidado
  • Discussão sobre RCR, internação, alimentação enteral em fases avançadas
  • Cuidados paliativos integrados

H) ARTICULAÇÃO:
  • Neurologia (matriciamento): casos atípicos, jovens, refratários
  • Psiquiatria: BPSD complexo, antipsicótico
  • CAPS-AD se uso álcool concomitante
  • CRAS / Assistência Social: benefícios, BPC
  • Fisioterapia: manutenção mobilidade
  • Fonoaudiologia: deglutição em fase avançada
  • Cuidados paliativos: fase avançada/terminal

I) REAVALIAÇÃO:
  • Trimestral em fase estável
  • Mensal em fase de ajuste de medicação ou BPSD
  • Reavaliar MEEM anualmente`,
padrao_ouro:"NICE 2018 (atualizado), AAN 2021, AGS Beers 2023 para uso de antipsicóticos. PCDT Alzheimer MS para CEAF. Anti-amiloides são gold-standard internacional emergente mas com restrições (custo, efeitos adversos, benefício modesto). Centros de referência: Programa de Memória.",
prog:"Alzheimer progride 5-10 anos em média do diagnóstico ao óbito. Demência vascular: degraus de declínio. Demência por corpos de Lewy: progressão mais rápida que Alzheimer. CCL: 10-15%/ano evolui para demência. Causas reversíveis (HSDC, HNP, hipotireoidismo, B12) podem ter quadro melhorado/estabilizado com tratamento adequado.",
acomp:"Trimestral em estabilidade, mensal em ajuste. Avaliação multifocal (cognição, funcionalidade, BPSD, sobrecarga do cuidador). Despresecrição rotineira (ver 'Polifarmácia').",
p4:"⚠ NÃO 'dar remédio para memória' em queixa subjetiva sem rastreio adequado e dx — overuse de inibidores de colinesterase em CCL não tem benefício comprovado e tem efeitos adversos. ⚠ Antipsicóticos em demência aumentam mortalidade — usar SÓ se risco a si/outros, dose mínima, tempo mínimo, reavaliar 4-12 sem. ⚠ NÃO usar haloperidol em demência por corpos de Lewy (piora muito — sensibilidade extrema a antipsicóticos). ⚠ BZD em demência: paradoxal — piora agitação, piora cognição. EVITAR. ⚠ Não restringir o paciente fisicamente (contenção) salvo emergência absoluta — piora agitação. ⚠ Não medicar sintoma comportamental SEM buscar gatilho (dor, ITU, retenção urinária, fome, calor). ⚠ Anti-amiloide tem benefício modesto + efeitos adversos relevantes — decisão muito compartilhada quando disponível. ⚠ Não infantilizar paciente com demência. ⚠ Cuidador exausto = paciente piora — cuidar do cuidador.",
calcs:["phq9","audit-c"],
alertas:[
{t:"crit",x:"DELIRIUM ≠ DEMÊNCIA. Início agudo + flutuação + alteração consciência = delirium (emergência, buscar causa)."},
{t:"warn",x:"Pseudodemência depressiva: tratável. Dx diferencial fundamental. PHQ-9/GDS-15 sempre."},
{t:"info",x:"5-10% das demências têm causa REVERSÍVEL — investigar (TSH, B12, HSDC, HNP, neurossífilis, hipotireoidismo)."},
{t:"warn",x:"Antipsicótico em demência aumenta mortalidade. Uso restrito, dose mín, tempo mín, reavaliar."}
],
diretriz:"NICE Dementia Guidance 2018 (atualizado 2023). AAN Practice Parameters 2021. Lancet Commission on Dementia 2024 (14 fatores modificáveis). PCDT Alzheimer MS. FREITAS 5ª ed 2022. ABRAz."
},

{
id:"delirium-idoso", contexto:["pa","ubs"], nome:"Delirium em Idoso — Reconhecimento e Manejo", sis:"idoso", grav:"alta",
cid:"F05", ciap:"P71",
sin:["delirium","estado confusional agudo","encefalopatia aguda","síndrome confusional"],
def:"Distúrbio AGUDO de atenção e cognição com FLUTUAÇÃO, secundário a causa médica subjacente. Distinto de demência (CRÔNICO) e psicose primária. Reconhecimento precoce é VITAL — mortalidade hospitalar 25-30%, mortalidade 1 ano até 40%.",
intro:"Delirium é uma das emergências mais subdiagnosticadas em idoso. Pode ser HIPERATIVO (agitação, alucinação — chama atenção), HIPOATIVO (letargia, lentificação — frequentemente passa despercebido, pior prognóstico), MISTO. Causa SEMPRE tem etiologia subjacente: medicamento, infecção, distúrbio metabólico, hipóxia, IAM, AVC, ITU, retenção urinária, fecaloma, dor não tratada, abstinência. NÃO É demência aguda, NÃO É psicose — é encefalopatia metabólica/tóxica.",
apresentacao:"Família/cuidador/enfermagem traz: 'mãe ficou diferente', 'confusa desde ontem', 'vendo coisas', 'falando sozinha', 'não dorme'. Pode ser ACS na visita ('encontrei seu João estranho hoje'). Em PS: idoso trazido por queixa vaga ('está alterado'). Início AGUDO (horas a dias) com FLUTUAÇÃO ao longo do dia/noite.",
sintomas:[
"INÍCIO AGUDO (horas a dias) — distintivo de demência",
"FLUTUAÇÃO ao longo do dia (frequentemente pior à noite — 'sundowning')",
"Alteração de ATENÇÃO (não consegue manter foco)",
"Desorganização do pensamento (fala incoerente)",
"Alteração do nível de consciência (sonolência ou hiperalerta)",
"Alucinações visuais (mais comum) ou táteis",
"Delírios (frequentemente paranoides — 'estão me roubando')",
"Agitação (hiperativo) OU letargia (hipoativo)",
"Inversão do ciclo sono-vigília",
"Labilidade emocional"
],
fisio:"Encefalopatia secundária a desregulação do SNC por causa sistêmica. Inflammação cerebral, alteração de neurotransmissores (deficiência colinérgica, excesso dopaminérgico/glutamatérgico), hipoxia, distúrbios metabólicos, lesão neuronal por toxinas/medicações. Idoso tem reserva cognitiva reduzida → mais suscetível.",
profilaxia:"PREVENÇÃO em hospitalizado: reorientação frequente, manter família junto, evitar contenções, manter ritmo dia-noite, hidratação adequada, mobilização precoce, despresecrição de drogas anticolinérgicas/BZD, manejo de dor sem opioide alto, próteses (óculos, aparelho auditivo, dentadura) usadas. Em UBS: identificar idosos de risco antes de procedimento/internação programada.",
freire:"Família frequentemente assume 'a Alzheimer chegou de uma vez' — explicar que DELIRIUM É AGUDO, REVERSÍVEL na maioria, e que isso é DIFERENTE de demência (mesmo que possa coexistir). 'A senhora dona Maria está confusa porque o corpo dela está doente — vamos descobrir o quê e tratar. Pode levar dias-semanas para voltar ao normal, e em alguns casos volta parcial'. Validar o susto da família. NÃO infantilizar paciente (mesmo em delirium grave — tratar com respeito).",
sus_tx:`AVALIAÇÃO E MANEJO DE DELIRIUM:

A) RECONHECIMENTO — CAM (Confusion Assessment Method):
  Confirmação de delirium se:
  1. Início agudo + flutuação (curso temporal)
  2. Desatenção
  3. Pensamento desorganizado OU alteração do nível de consciência
  
  Critérios 1 + 2 + (3 ou 4) = DELIRIUM.

B) BUSCAR CAUSA (mnemônico 'DELIRIUM' ou 'I WATCH DEATH'):

  CAUSAS MAIS COMUNS em idoso:
  • MEDICAMENTOS (40-50% dos casos): anticolinérgicos, BZD, opioide, corticoide alta dose, antibiótico (FQ, betalactâmicos altos), anti-Parkinson, antipsicótico próprio, lítio
  • INFECÇÃO: ITU (#1 em idoso!), pneumonia, sepse, celulite, infecção de partes moles, meningite, COVID
  • DISTÚRBIO METABÓLICO: hipo/hipernatremia, hipo/hiperglicemia, hipo/hipercalcemia, hipo/hipermagnesemia, uremia, encefalopatia hepática, distireoidismo
  • HIPÓXIA: ICC, embolia pulmonar, pneumonia
  • ABDOMEN: retenção urinária, fecaloma, abdome agudo silencioso, isquemia mesentérica
  • CARDIOVASCULAR: IAM (frequentemente sem dor em idoso), AVC, arritmia
  • NEUROLÓGICO: AVC, HSA, hematoma subdural, crise epiléptica não convulsiva, encefalite
  • TRAUMA: TCE recente
  • ABSTINÊNCIA: álcool, BZD
  • DOR não controlada
  • PRIVAÇÃO sensorial (sem óculos, sem aparelho auditivo)
  • IMOBILIZAÇÃO, contenção

C) EXAMES BÁSICOS:
  • Sinais vitais completos + glicemia capilar + SpO2
  • Hemograma, função renal, eletrólitos (Na, K, Ca, Mg), glicemia, função hepática
  • Urina I + urocultura (ITU é causa #1!)
  • PCR
  • ECG
  • Gasometria se hipóxia ou alteração ácido-base suspeita
  • Raio-X tórax se foco respiratório
  • TC crânio se: trauma recente, déficit focal, primeiro delirium em paciente sem dx prévio, anticoagulado
  • Punção lombar se febre + alteração cognitiva (suspeita meningite/encefalite)
  • Hemocultura se sepse
  • Considerar: B12, TSH, dosagem medicamentosa (lítio, digoxina)

D) MANEJO:
  
  TRATAR A CAUSA (mandatório):
  • ATB se infecção
  • Correção hidroeletrolítica
  • Despresecrição de drogas precipitantes
  • Manejo da dor (sem opioide alto em idoso frágil)
  • Algaliar se retenção urinária
  • Desimpactação se fecaloma
  • Oxigênio se hipóxia
  • Tratar IAM, AVC, etc.
  
  MEDIDAS NÃO-FARMACOLÓGICAS (PRIMEIRA LINHA):
  • Ambiente: iluminação adequada, calmo, familiares presentes, evitar contenção
  • Reorientação verbal frequente (data, hora, local, situação)
  • Óculos, aparelho auditivo, dentadura
  • Sono: ritmo dia-noite, evitar despertares noturnos desnecessários, sem cochilo prolongado
  • Mobilização precoce
  • Hidratação oral se possível
  • Família 24h se possível (pode acompanhar em internação)
  • Não usar contenção física salvo extrema necessidade
  
  MEDICAMENTOSO (segunda linha — quando agitação põe em risco a si/outros):
  • PRIMEIRA ESCOLHA em PS/internado: Haloperidol 0,5-1 mg IM ou VO (dose baixa! NÃO os 5 mg do adulto jovem)
    - Reavaliar em 30-60 min, repetir se necessário até 3 mg total
    - Atenção QT longo, sintomas extrapiramidais
    - CONTRAINDICADO em demência por corpos de Lewy (sensibilidade extrema)
  • Alternativa: Risperidona 0,25-0,5 mg VO
  • Quetiapina 12,5-50 mg VO em demência por corpos de Lewy ou Parkinson
  • EVITAR BZD — pioram delirium em idoso (EXCEÇÃO: delirium por abstinência alcoólica/BZD onde é tratamento)
  • Olanzapina 2,5-5 mg VO HS, ou Ziprasidona 20-40 mg VO 12/12h: alternativas em delirium hiperativo persistente (especialista)

E) ARTICULAÇÃO NA APS:
  • Idoso em casa com delirium SUSPEITO → avaliar gravidade
  • LEVE + causa óbvia tratável (ex: ITU sem sepse): manejo domiciliar com supervisão familiar/ACS
  • MODERADO-GRAVE, agitação, instabilidade, causa não óbvia → ENCAMINHAR PS para investigação
  • Pós-alta hospitalar: ACS observa, recuperação cognitiva pode levar SEMANAS-MESES

F) REAVALIAÇÃO:
  • Diária em internação até resolução
  • Pós-alta: 1 sem, 1 mês, depois conforme evolução
  • Repetir avaliação cognitiva 3-6 meses após (delirium pode 'desmascarar' demência subclínica prévia)`,
padrao_ouro:"NICE Delirium 2010 (revisado). Inouye HELP Program (Hospital Elder Life Program) é padrão internacional preventivo. CAM-ICU em UTI. Manejo não-farmacológico é PRIMEIRO em qualquer guideline.",
prog:"Mortalidade hospitalar 25-30%; em 1 ano até 40% (especialmente em hipoativo). Recuperação cognitiva pode levar semanas a meses. ~20% têm declínio cognitivo persistente após delirium (especialmente em quem tinha demência subjacente).",
acomp:"Diária em internação. Pós-alta semanal por 4-6 sem. Reavaliação cognitiva 3-6 meses após para detectar demência subclínica.",
p4:"⚠ NÃO assumir 'demência' em idoso com confusão NOVA — pode ser delirium reversível. Investigar SEMPRE. ⚠ NÃO usar BZD em delirium (piora) salvo abstinência alcoólica. ⚠ NÃO usar antipsicótico em DOSE de adulto jovem em idoso — começar baixo. ⚠ NÃO usar haloperidol em demência por corpos de Lewy (catastrófico — pode piorar gravemente). ⚠ Contenção física: último recurso, breve, reavaliar — aumenta morbidade. ⚠ Não dar 'remédio para dormir' (BZD/Z-drug) — piora delirium. ⚠ Atibiótico empírico apenas com FOCO INFECCIOSO IDENTIFICADO — não 'ATB pra ver se melhora'. ⚠ Vitamina/suplementos durante delirium: sem benefício. ⚠ Idoso pós-alta hospitalar: vigilância continuada — recuperação não é imediata.",
calcs:[],
alertas:[
{t:"crit",x:"DELIRIUM = EMERGÊNCIA MÉDICA. Mortalidade 25-30% intra-hospitalar. Investigar causa SEMPRE."},
{t:"crit",x:"Haloperidol em demência por corpos de Lewy = CONTRAINDICADO (sensibilidade extrema, pode piorar gravemente)."},
{t:"warn",x:"ITU é a causa #1 de delirium em idoso na comunidade. Pedir EAS + urocultura SEMPRE."},
{t:"warn",x:"Delirium HIPOATIVO (letargia, lentificação): pior prognóstico, frequentemente subdiagnosticado."}
],
diretriz:"NICE — Delirium: Diagnosis, Prevention and Management 2010 (atualizado 2023). Inouye SK et al. — HELP Program. Hospital Elder Life Program. American Delirium Society. FREITAS 5ª ed 2022."
},

{
id:"osteoporose-mfc", contexto:["ubs"], nome:"Osteoporose — Rastreio, FRAX e Manejo MFC", sis:"idoso", grav:"baixa",
cid:"M81", ciap:"L95",
sin:["osteoporose","densitometria","FRAX","alendronato","bisfosfonato","fratura por fragilidade"],
def:"Doença esquelética caracterizada por massa óssea baixa e deterioração microarquitetural → aumento da fragilidade e risco de fratura. Diagnóstico por: T-score ≤ -2,5 em densitometria, OU fratura por fragilidade prévia (sem trauma significativo), OU FRAX alto risco.",
intro:"Osteoporose é a 'doença silenciosa' até a primeira fratura — vertebral, quadril, antebraço (Colles), úmero proximal são as típicas 'fraturas por fragilidade'. Fratura de fêmur em idosa frágil tem mortalidade 20-30% em 1 ano. Rastreio adequado + tratamento bem indicado reduz fraturas em 30-50%. MFC tem papel central — não é 'doença de reumatologista'.",
apresentacao:"Maioria assintomática até primeira fratura. Pode chegar com: dor lombar aguda (fratura vertebral), redução de altura (perda ≥4 cm sugere fraturas vertebrais), cifose, queda com fratura de quadril/punho. Ou em rastreio de mulher pós-menopausa, homem idoso, paciente em corticoide crônico.",
sintomas:[
"História de fratura por fragilidade (sem trauma significativo) — diagnóstico mesmo sem densitometria",
"Idade e sexo (♀ pós-menopausa = maior risco)",
"Menopausa precoce (<45a) ou cirúrgica",
"Antecedente familiar de fratura quadril (especialmente mãe)",
"Tabagismo",
"Etilismo (>3 doses/dia)",
"Sedentarismo",
"Baixo IMC (<19)",
"Uso prolongado de corticoide (prednisona ≥5 mg/d por ≥3 meses)",
"Outros: anticonvulsivantes, IBP crônico, ISRS, heparina, inibidor aromatase, tiazolidinediona",
"Comorbidades: hipertireoidismo, hiperparatireoidismo, DRC, doença celíaca, hipogonadismo, AR, mieloma",
"Redução de altura (medir!)",
"Dor lombar aguda sem trauma (fratura vertebral)",
"Cifose"
],
fisio:"Equilíbrio osteoblasto (formação) vs osteoclasto (reabsorção) desloca-se para reabsorção com idade + menopausa. ♀ perdem ~10% massa óssea nos primeiros 5 anos pós-menopausa por queda estrogênica abrupta, depois ~1%/ano. ♂ perdem ~0,5-1%/ano após 50a. Fatores secundários (corticoide, hipogonadismo, doenças endócrinas, malabsorção) aceleram. Osso trabecular (vértebra, fêmur proximal) é mais sensível que cortical (rádio, fêmur diáfise).",
profilaxia:"PRIMÁRIA ao longo da vida: cálcio dietético adequado (1000-1200 mg/d), vit D (800-2000 UI/d), atividade física com impacto (caminhada, dança, musculação), evitar tabagismo + álcool excessivo, manter IMC normal. PÓS-MENOPAUSA: incentivar essas medidas + considerar avaliação se fatores de risco.",
freire:"Osteoporose é doença sem sintoma — paciente frequentemente acha 'não sente nada, então não preciso de remédio'. Construir entendimento: 'a senhora não sente, mas o osso está mais fino e quebra fácil. Quebrar o quadril aos 75 anos é grave — pode mudar tudo'. Validar dúvidas sobre bisfosfonatos ('me disseram que ataca o estômago'). Explicar a tomada CORRETA (jejum, sentado/em pé por 30 min). Negociar manejo conforme contexto (idoso muito frágil com EV limitada talvez não se beneficie do tratamento; já mulher 65a ativa COM osteoporose, sim). METÁFORA: 'osso é como conta poupança — você junta na juventude, gasta na idade. Não dá pra fazer milagre depois, mas dá pra desacelerar a perda'.",
sus_tx:`AVALIAÇÃO E MANEJO DA OSTEOPOROSE — APS:

A) RASTREIO:

  QUEM RASTREAR (mulher):
  • Mulheres ≥65 anos (USPSTF B): densitometria
  • Mulheres pós-menopausa <65a com fatores de risco: FRAX → DMO se FRAX intermediário
  • Qualquer mulher pós-menopausa com fratura por fragilidade prévia
  
  QUEM RASTREAR (homem):
  • Homens ≥70 anos (consenso brasileiro/SBR)
  • Homens 50-69a com fatores de risco (corticoide crônico, hipogonadismo, etilismo, etc.)
  • Qualquer fratura por fragilidade
  
  CASOS ESPECIAIS:
  • Em uso de corticoide ≥5 mg/d ≥3 meses: DMO inicial + a cada 1-2 anos
  • Inibidor aromatase (CA mama) ou ADT (CA próstata): DMO
  • Hiperparatireoidismo, DRC G3+, doença celíaca: rastrear

B) FRAX — calculadora de risco em 10 anos (DISPONÍVEL EM: shef.ac.uk/FRAX):
  • Risco fratura osteoporótica maior (vertebral + quadril + úmero + antebraço)
  • Risco fratura de quadril isolada
  • Brasileiro tem calibração específica
  • Não precisa de DMO para usar — pode estimar sem
  • USAR ANTES e DEPOIS da DMO
  
  PONTOS DE CORTE BRASIL (controverso, varia diretriz):
  • FRAX fratura maior ≥10% OU FRAX quadril ≥3% (sem DMO): tratar OU pedir DMO
  • Após DMO: critérios diagnósticos abaixo

C) DIAGNÓSTICO:

  T-SCORE em DMO (mulheres pós-menopausa e ≥50a):
  • Normal: T ≥ -1
  • Osteopenia: T entre -1 e -2,5
  • Osteoporose: T ≤ -2,5
  • Osteoporose grave: T ≤ -2,5 + fratura por fragilidade
  
  Z-SCORE (pré-menopausa, homem jovem):
  • Z ≤ -2: 'massa óssea abaixo do esperado para idade'
  
  DIAGNÓSTICO TAMBÉM POR FRATURA POR FRAGILIDADE (sem trauma significativo):
  • Vertebra, quadril, úmero proximal, punho (Colles) — patognomônicos
  • Mesmo com DMO normal ou osteopenia

D) INVESTIGAÇÃO BÁSICA (excluir osteoporose secundária):
  • Hemograma, função renal, função hepática
  • Cálcio total + corrigido (ou cálcio iônico)
  • Fosfatase alcalina
  • PTH, 25(OH)Vit D
  • TSH
  • Eletroforese de proteínas (mieloma — em quadro atípico)
  • Cortisol (Cushing — se suspeita)
  • Testosterona total em homem
  • Triagem doença celíaca em malabsorção
  • Calciúria 24h se hipercalcemia
  • Em homem: avaliar hipogonadismo, álcool, etc.

E) TRATAMENTO:

  INDICAÇÕES:
  • T-score ≤ -2,5
  • Fratura por fragilidade prévia (vertebra/quadril/úmero/Colles)
  • Osteopenia (-1 a -2,5) + FRAX alto (>20% fratura maior OU >3% quadril)
  • Uso de corticoide crônico com osteopenia
  
  TRATAMENTO NÃO-FARMACOLÓGICO (TODOS):
  • Cálcio 1000-1200 mg/d (dieta + suplemento se necessário)
  • Vit D 800-2000 UI/d (alvo 25(OH)D ≥30 ng/mL)
  • Proteína adequada (1,0-1,2 g/kg/d em idoso)
  • Atividade física (impacto + resistido + equilíbrio)
  • Cessação tabagismo
  • Redução álcool
  • Prevenção de quedas (ver patologia)
  
  FARMACOTERAPIA:
  
  BISFOSFONATOS (1ª linha):
  • Alendronato 70 mg VO 1x/sem (UBS — CBAF + PFPB)
    - Tomar EM JEJUM com 200 mL água, sentado/em pé por 30 min, sem comer/beber
    - Contraindicações: refluxo grave, estenose esofágica, acalasia, incapacidade de ficar ereto, ClCr <35
    - Efeitos: dispepsia, esofagite, osteonecrose mandíbula (rara — risco em dentário invasivo), fratura femoral atípica (rara, após >5 anos)
  • Risedronato 35 mg VO 1x/sem (CEAF PCDT — atualmente)
  • Ácido zoledrônico 5 mg IV anual (uso especializado)
  • Duração: reavaliar em 5 anos — em risco continuado, pode estender 10 anos. 'Drug holiday' em estável.
  
  DENOSUMABE 60 mg SC 6/6 meses (não disponível CBAF; CEAF com PCDT específico):
  • Útil quando bisfosfonato contraindicado ou ineficaz
  • CUIDADO: NÃO INTERROMPER abruptamente — rebote com fraturas vertebrais múltiplas. Se descontinuar, fazer bisfosfonato em seguida.
  
  TERIPARATIDA (PTH análogo) 20 mcg SC/d × 2 anos:
  • Anabólico, indicado em osteoporose grave (T<-3 ou fraturas múltiplas)
  • Caro, geralmente particular
  
  RALOXIFENO (SERM): pós-menopausa com risco CA mama, evita TVP relativa
  
  Em HOMEM com hipogonadismo: testosterona se indicado
  
  EM CORTICOIDE crônico: bisfosfonato profilático precoce + cálcio + vit D

F) AÇÕES E RESPONSÁVEIS:
  • Médico: avaliação, FRAX, prescrição, monitorar
  • Enfermagem: orientação técnica, aferição altura
  • ACS: orientação dietética, atividade
  • Fisioterapeuta NASF: programa de exercício + prevenção quedas
  • Nutricionista NASF: dieta com cálcio
  • Endocrinologista (matriciamento): casos refratários ou secundários complexos
  • Reumatologista: osteoporose grave/refratária

G) REAVALIAÇÃO:
  • DMO a cada 2 anos durante tratamento (ou a cada 1 ano em alto risco)
  • Função renal anual (bisfosfonato)
  • 25(OH)D periódico
  • Aderência ao bisfosfonato (alta taxa de descontinuação)
  • Após 5 anos de bisfosfonato: reavaliar (drug holiday vs continuar)`,
padrao_ouro:"NOF (National Osteoporosis Foundation), AACE, SBR (Sociedade Brasileira de Reumatologia), IOF (International Osteoporosis Foundation). FRAX brasileiro disponível online. Bisfosfonatos têm a maior evidência de redução de fraturas (vertebral 40-70%, quadril 20-40%). DENOSUMABE 60 mg SC 6/6m (anti-RANKL — CEAF em refratários a bisfosfonatos ou contraindicação à via oral; atenção a hipocalcemia e fratura atípica), TERIPARATIDA 20 mcg SC 1×/dia por até 24 meses (anabólico — CEAF em osteoporose grave com fratura prévia), ROMOSOZUMABE 210 mg SC 1×/mês por 12 meses (anabólico — particular) e medicações novas são padrão em casos selecionados.",
prog:"Tratamento adequado reduz fraturas em 30-50%. Adesão é problema (descontinuação 50% em 1 ano). Fratura de quadril em idoso frágil tem mortalidade 20-30% em 1 ano + perda funcional significativa. Mesmo com tratamento, paciente continua em risco — não 'curativo'.",
acomp:"Aderência avaliada em CADA consulta. DMO a cada 2 anos. Reavaliar tratamento a cada 5 anos. Manter cálcio + vit D + atividade indefinidamente.",
p4:"⚠ NÃO tratar OSTEOPENIA isolada SEM FRAX alto ou outros fatores — alguns 'tratam tudo' indevidamente. ⚠ DMO 'só por causa de idade' sem outros fatores em mulher <65a: nem sempre necessário (USPSTF). ⚠ Vit D em mega-doses 'profiláticas' (50.000 UI/sem por meses) sem deficiência documentada: sem benefício e pode causar hipercalcemia. ⚠ Cálcio em mega-dose isolado SEM dieta — risco cardiovascular (controverso). Preferir dieta primária. ⚠ Tratar osteoporose em idoso muito frágil com EV <2-5 anos: discutível — discutir COM paciente/família. ⚠ Bisfosfonato em paciente com refluxo grave ou incapaz de ficar ereto 30 min: contraindicado — outras opções. ⚠ Avaliação odontológica ANTES de iniciar bisfosfonato (risco osteonecrose). ⚠ Suplementos de cálcio + vit D 'preventivos' em adulto saudável sem deficiência: sem benefício comprovado de prevenção primária. ⚠ Densitometria como 'checkup': se não há indicação clínica, P4 aplicável.",
calcs:["imc"],
alertas:[
{t:"info",x:"FRATURA por FRAGILIDADE prévia (vertebra/quadril/úmero/Colles) = DIAGNÓSTICO de osteoporose mesmo sem DMO. Tratar."},
{t:"warn",x:"Bisfosfonato + refluxo grave / incapaz ficar ereto / ClCr <35: CONTRAINDICADO. Avaliar denosumabe (CEAF)."},
{t:"crit",x:"Denosumabe NÃO pode ser interrompido abruptamente — rebote com fraturas vertebrais múltiplas. Substituir por bisfosfonato."},
{t:"info",x:"Vit D ≥30 ng/mL é alvo prático. Suplementar se deficiência (800-2000 UI/d)."}
],
diretriz:"Sociedade Brasileira de Reumatologia — Diretrizes de Osteoporose. NOF — Clinician's Guide to Prevention and Treatment of Osteoporosis 2022. USPSTF Osteoporosis Screening 2018. FRAX Tool — shef.ac.uk/FRAX. PCDT MS — Osteoporose. FREITAS 5ª ed 2022."
}

);


PATOLOGIAS.push(

{
id:"fragilidade-sarcopenia-mfc", contexto:["ubs"], nome:"Fragilidade e Sarcopenia — Identificação e Manejo MFC", sis:"idoso", grav:"baixa",
cid:"R54", ciap:"A04",
sin:["fragilidade","sarcopenia","frailty","idoso frágil","massa muscular reduzida"],
def:"Síndrome FRAGILIDADE: estado de vulnerabilidade aumentada por declínio de reserva funcional, levando a desfechos adversos (queda, hospitalização, dependência, óbito). SARCOPENIA: perda quantitativa e qualitativa de massa e força muscular relacionada ao envelhecimento. Conceitos sobrepostos mas distintos — sarcopenia é componente CHAVE da fragilidade.",
intro:"Fragilidade é uma das construções mais importantes da geriatria moderna. Permite identificar idosos em risco ANTES de eventos adversos. Sarcopenia é mensurável (massa + força) e potencialmente reversível. Intervenções (exercício resistido + nutrição proteica) têm evidência sólida. Não confundir com FRAILTY: fragilidade ≠ idoso magro. Idoso sarcopênico-obeso é caso particular (obesidade SARCOPÊNICA = duplo risco).",
apresentacao:"Idoso 'vai diminuindo' lentamente: anda mais devagar, fica mais cansado, pega menos peso, perde força nas mãos, vai parando de fazer coisas que fazia antes ('antes ia na padaria, agora não vai mais'). Pode chegar com queixa vaga ('cansaço', 'desânimo') ou ser detectado em AGA. Família percebe: 'mãe está mais frágil ultimamente'.",
sintomas:[
"Fadiga subjetiva persistente",
"Perda de peso involuntária (≥4,5 kg ou 5% em 1 ano)",
"Lentidão de marcha (velocidade <0,8 m/s em 4 m)",
"Fraqueza de preensão palmar (dinamômetro: <16 kg ♀ / <27 kg ♂)",
"Atividade física baixa (KCal/sem reduzido — questionário Minnesota)",
"Dificuldade em tarefas físicas (subir escadas, levantar peso)",
"Perda de massa muscular visível (atrofia em ombros, coxa)",
"Diminuição do apetite",
"Redução de atividades sociais",
"Quedas recentes"
],
fisio:"Mecanismos múltiplos: inflammaging (inflamação crônica de baixo grau — IL-6, TNFα ↑), declínio hormonal (testosterona, estrogênio, GH, IGF-1), resistência anabólica muscular (proteína da dieta gera menos síntese muscular do que no jovem), apoptose neuronal motora (perda de unidades motoras), redução de atividade física, comorbidades, polifarmácia, desnutrição. Resultado: massa muscular ↓ ~1%/ano após 50a; força ↓ 2-4%/ano (mais rápido que massa).",
profilaxia:"PRIMÁRIA: exercício resistido + aeróbico ao longo da vida; dieta com proteína adequada (1,0-1,2 g/kg/d em idoso; até 1,5 g/kg em sarcopênico); evitar sedentarismo prolongado; controle de comorbidades; tratar comorbidade catabólica (doença crônica descompensada). SECUNDÁRIA: identificar pré-frágil cedo e intervir antes da fragilidade consolidada.",
freire:"Idoso e família frequentemente atribuem perda de força/cansaço à 'idade' — fatalismo iatrogênico. Mostrar que MUITO É REVERSÍVEL ou desacelerável. 'A senhora pode RECUPERAR força — não é mágica, é constância'. Validar a dificuldade do exercício ('eu sei que parece muito, vamos começar pequeno'). PEQUENOS PASSOS: levantar da cadeira 5x antes do café, caminhar até o portão e voltar, segurar uma garrafa cheia ao subir escada. Nutrição: 'cada refeição precisa de proteína — feijão, ovo, frango, queijo'. ACS pode incentivar atividade na visita.",
sus_tx:`AVALIAÇÃO E MANEJO DE FRAGILIDADE/SARCOPENIA:

A) IDENTIFICAÇÃO DE FRAGILIDADE — Critérios de FRIED (5):
  1. Perda de peso involuntária ≥4,5 kg em 1 ano
  2. Fadiga (autorrelato — questionário CES-D itens específicos)
  3. Lentidão de marcha — velocidade <0,8 m/s (medir 4 m)
  4. Fraqueza preensão palmar (dinamômetro):
     - ♀ <16 kg
     - ♂ <27 kg (ajustar por IMC e altura conforme tabela)
  5. Atividade física baixa (questionário Minnesota — KCal/sem)
  
  CLASSIFICAÇÃO:
  • 0 critérios: ROBUSTO
  • 1-2: PRÉ-FRÁGIL
  • ≥3: FRÁGIL
  
  FERRAMENTAS ALTERNATIVAS:
  • Escala FRAIL (5 itens — bom rastreio na APS): Fatigue, Resistance, Ambulation, Illness, Loss of weight
  • Clinical Frailty Scale (Rockwood, 1-9): mais usada hospitalar
  • Índice de fragilidade (acúmulo de déficits)

B) IDENTIFICAÇÃO DE SARCOPENIA (EWGSOP2 2019):
  Triagem: questionário SARC-F (≥4 sugere sarcopenia)
  • S: Strength (carregar 5 kg)
  • A: Assistance walking
  • R: Rise from chair
  • C: Climb stairs
  • F: Falls
  
  CONFIRMAÇÃO:
  • FORÇA muscular reduzida (preensão dinamômetro) → sarcopenia provável
  • + MASSA muscular reduzida (DXA, BIA, antropometria — circunferência panturrilha <31 cm ou MMSE) → sarcopenia confirmada
  • + Performance física reduzida (velocidade marcha <0,8 m/s, SPPB, TUG ≥20s) → sarcopenia GRAVE

C) AVALIAÇÃO COMPLEMENTAR:
  • História: comorbidades, medicações, dieta, atividade física
  • Exame: medir altura, peso, IMC, circunferência panturrilha, força preensão
  • Lab: hemograma, função renal, glicemia, lipídios, TSH, B12, vit D, cálcio, fosfatase alcalina, PCR, albumina, eletroforese (mieloma se atípico), HIV se risco

D) INTERVENÇÕES (evidência forte):

  1. EXERCÍCIO RESISTIDO + AERÓBICO + EQUILÍBRIO + FLEXIBILIDADE
     • Resistido: 2-3x/sem, grandes grupos musculares (agachamento, supino, remada, leg press)
     • Aeróbico: 150 min/sem (caminhada, bicicleta, dança)
     • Equilíbrio: Tai Chi, exercícios em apoio unipodal
     • Flexibilidade: alongamentos
     • Progressão GRADUAL para não machucar
     • Fisioterapeuta NASF é parceiro chave

  2. NUTRIÇÃO PROTEICA
     • Proteína 1,0-1,2 g/kg/d em idoso saudável
     • Proteína 1,2-1,5 g/kg/d em sarcopênico/recuperação
     • Distribuir ao longo do dia (cada refeição com proteína)
     • Fontes: ovo, frango, peixe, carne magra, feijão+arroz, lentilha, leite/iogurte/queijo, soja
     • Suplementação proteica (whey, soja em pó) em desnutridos — orientação nutricionista
     
  3. VITAMINA D
     • Verificar 25(OH)D
     • Suplementar 800-2000 UI/d se deficiência (alvo ≥30 ng/mL)
     • Hidroxi-vitamina D não é coadjuvante anabólico sem deficiência — não suplementar 'pra reforçar' sem dosar
  
  4. MANEJO DE COMORBIDADES
     • DM, IC, DPOC, doença renal, depressão (todas catabólicas)
     • Anemia (corrigir se causa identificável)
     • Disfagia (orientação fonoaudióloga — comida pastosa, posicionamento)
  
  5. DESPRESCRIÇÃO de drogas que pioram (sedativo, anticolinérgico em excesso, corticoide alta dose desnecessário)
  
  6. SOCIALIZAÇÃO E APOIO
     • Combate isolamento
     • Grupo de convivência (CRAS)
     • Atividade significativa
  
  7. AVALIAÇÃO DO AMBIENTE — adaptação para autonomia

E) AÇÕES E RESPONSÁVEIS:
  • Médico: rastreio, dx, plano terapêutico, despresecrição
  • Enfermagem: orientação, monitorar
  • ACS: acompanhamento territorial, estímulo à atividade
  • Fisioterapeuta NASF: programa estruturado
  • Nutricionista NASF: plano alimentar
  • Educador físico NASF: prescrição de exercício
  • Família: parceira, evitar superproteção

F) REAVALIAÇÃO:
  • Trimestral nos primeiros 6-12 meses (medir força preensão, velocidade marcha, peso)
  • Reaplicar Fried ou SARC-F a cada 6-12 meses`,
padrao_ouro:"EWGSOP2 (European Working Group on Sarcopenia in Older People) é referência diagnóstica internacional. ICFSR (International Conference on Frailty and Sarcopenia Research) atualiza diretrizes. FNIH (Foundation for the NIH) e AWGS (Asian Working Group) também têm critérios. Programa de exercício resistido supervisionado + suplementação proteica é o gold standard.",
prog:"Pré-fragilidade é REVERSÍVEL em 25-40% com intervenção adequada. Fragilidade consolidada: redução pode ser estabilização ou modesta reversão. Sem intervenção: progressão para dependência, institucionalização, óbito. Mortalidade do idoso frágil 2-3x maior que do robusto pareado.",
acomp:"Trimestral em intervenção ativa. A cada 6-12 meses em estabilidade. Reavaliar antes/depois de eventos (internação, cirurgia, perda de cônjuge — todos podem precipitar fragilidade).",
p4:"⚠ NÃO fatalizar ('é da idade') — muito é reversível. ⚠ NÃO prescrever suplemento proteico sem orientação nutricional individualizada — DRC pode ser piorada, custo, falsa solução sem exercício. ⚠ NÃO usar testosterona em homem idoso 'pra dar força' SEM hipogonadismo documentado (riscos cardiovasculares). ⚠ Vit D mega-dose sem deficiência: sem benefício. ⚠ Anabolizantes em sarcopenia: NÃO indicado (riscos, sem evidência consistente). ⚠ Suplementos 'milagrosos' (creatina pode ter modesto benefício mas não substitui exercício; HMB tem evidência limitada). ⚠ Despreescrever drogas catabólicas quando possível. ⚠ Exercício deve ser PROGRESSIVO — paciente que começa muito forte se machuca e desiste.",
calcs:["imc","audit-c"],
alertas:[
{t:"info",x:"PRÉ-FRAGILIDADE é REVERSÍVEL com exercício + nutrição em até 40%. Janela de oportunidade."},
{t:"warn",x:"Sarcopênico-obeso: idoso com IMC normal/alto mas baixa massa muscular. Risco maior que obesidade isolada."},
{t:"crit",x:"Velocidade de marcha <0,8 m/s em 4 metros = preditor potente de desfechos adversos. Investigar e intervir."}
],
diretriz:"EWGSOP2 — Sarcopenia: Revised European Consensus. Age Ageing 2019. Fried LP et al. Frailty in Older Adults. J Gerontol 2001. Rockwood Clinical Frailty Scale. FREITAS 5ª ed 2022."
},

{
id:"incontinencia-urinaria-mfc", contexto:["ubs"], nome:"Incontinência Urinária no Idoso — Abordagem MFC", sis:"idoso", grav:"baixa",
cid:"R32", ciap:"U04",
sin:["incontinência urinária","ui","perda urinária","bexiga hiperativa","incontinência de esforço"],
def:"Perda involuntária de urina em quantidade e frequência suficientes para causar problema social, higiênico ou psicológico. Não é 'parte normal do envelhecer' — É TRATÁVEL. Tipos: ESFORÇO (esforço/tosse), URGÊNCIA (urgência sem chegar ao banheiro — bexiga hiperativa), MISTA, POR TRANSBORDAMENTO (retenção crônica com extravasamento), FUNCIONAL (não chega no banheiro por mobilidade/cognição).",
intro:"Incontinência urinária (UI) é altamente prevalente (~30-50% das mulheres ≥60a, ~15-20% dos homens ≥60a) e MUITO subnotificada — paciente tem vergonha, atribui à idade, usa fralda em silêncio. MFC tem papel chave: PERGUNTAR (ninguém fala se você não pergunta), avaliar, intervir (muito pode ser tratado na APS), referenciar quando necessário. Impacto: institucionalização, depressão, isolamento, infecção, lesão de pele, queda (apressando para banheiro).",
apresentacao:"Raramente queixa primária — paciente nega. PERGUNTAR ATIVAMENTE em AGA e consultas de rotina: 'a senhora tem perdas de urina sem querer?'. Ou família traz: 'mãe tá usando fralda'. Ou rastreio com fralda úmida no exame. Pode ser componente de queixa funcional ('não saio mais por medo'). ITU recorrente pode ser pista. Em homem: HPB com retenção crônica → transbordamento.",
sintomas:[
"Tipo de perda:\n  - Esforço: tosse, espirro, riso, levantar peso\n  - Urgência: vontade súbita que não chega\n  - Noturna (enurese, nictúria)\n  - Em pequeno volume contínuo (transbordamento)\n  - Total (raro — fístula)",
"Quantidade (gotas, sufficiente para troca de roupa, escorre)",
"Frequência diurna (>8x/dia = polaciúria)",
"Frequência noturna (≥2x/noite = nictúria)",
"Início e evolução",
"Eventos desencadeantes (parto, cirurgia ginecológica/prostatica, AVC, medicação nova)",
"Uso de absorvente/fralda — quantidade/dia",
"Comorbidades: DM (poliúria), HAS, IC, obesidade, Parkinson, AVC, demência, DRC",
"Medicações: diurético (timing!), αbloq (esforço relaxante uretral), BZD, opioide (retenção), anticolinérgicos (retenção), IECA (tosse causando esforço)",
"Função intestinal (constipação compromete bexiga)",
"Hábito hídrico, cafeína, álcool",
"Funcionalidade (consegue ir ao banheiro?)",
"Cognição (esquece de ir? não reconhece a vontade?)",
"Acesso ao banheiro (escada, distância, à noite)"
],
fisio:"Continência depende de: força muscular do assoalho pélvico + esfíncter urinário, capacidade vesical adequada, controle neurológico (centro pontino + medular + cortical), mobilidade para chegar ao banheiro, cognição para reconhecer urgência.\n\nESFORÇO: ↑ pressão intra-abdominal > pressão de fechamento uretral (assoalho pélvico fraco, esfíncter incompetente — comum pós-parto, pós-menopausa, pós-prostatectomia)\nURGÊNCIA (bexiga hiperativa): hiperatividade do detrusor (contrações involuntárias) — idiopática, neurogênica (AVC, EM, Parkinson), uropática (cistite, cálculo, tumor)\nTRANSBORDAMENTO: obstrução (HPB, prolapso, estenose) ou hipocontratilidade detrusora (DM, neuropatia) → bexiga distendida com extravasamento\nFUNCIONAL: bexiga e uretra preservadas, mas paciente não chega ao banheiro (mobilidade, cognição, ambiente)",
profilaxia:"Manter peso adequado, atividade física regular (assoalho pélvico via exercícios), hidratação adequada SEM excesso, evitar constipação, evitar cafeína em excesso, parar tabagismo (tosse crônica), Kegel preventivo em gestantes e pós-menopausa, manejo de comorbidades.",
freire:"UI é tabu — paciente sente vergonha, culpa, ('eu deveria controlar'), nojo, perda de dignidade. Aborde com NORMALIDADE: 'isso é comum, é problema médico, tem tratamento'. Validar o impacto na vida ('parou de sair? não dorme bem? a fralda incomoda?'). NÃO atribuir à idade ('é da idade'). Negociar plano sem julgamento. Em consultas com familiar, pedir privacidade quando possível ('vou conversar sozinho com a senhora agora'). Empoderar — exercícios de Kegel funcionam quando feitos. METÁFORA: 'o assoalho pélvico é como qualquer músculo — pode fortalecer com treino certo'.",
sus_tx:`AVALIAÇÃO E MANEJO DE INCONTINÊNCIA URINÁRIA:

A) AVALIAÇÃO INICIAL:
  • Tipo de UI (questionar perdas associadas a esforço, urgência, ou ambos)
  • Diário miccional 3 dias (frequência, volume, vazamentos, ingesta hídrica): paciente preenche em casa
  • Exame físico:
    - Geral
    - Genital (atrofia urogenital, prolapso pélvico — visualizar com manobras de Valsalva)
    - Toque retal (HPB em homem, fecaloma)
    - Neurológico (sensibilidade perineal, tônus esfincteriano, reflexo bulbocavernoso)
    - Avaliação funcional (mobilidade, cognição)
  
  EXAMES:
  • EAS + urocultura (excluir ITU — fator precipitante muito frequente)
  • Glicemia (DM descompensado causa poliúria)
  • Função renal
  • Sódio (hiponatremia pode causar urgência)
  • Resíduo pós-miccional (USG bexiga) se suspeita retenção/transbordamento — Volume >100 mL anormal
  • PSA em homem (HPB) — decisão compartilhada
  • Estudo urodinâmico: APENAS em refratário ou cirurgia planejada — não rotineiro

B) IDENTIFICAÇÃO DO TIPO:
  
  ESFORÇO: perda com tosse/esforço, geralmente em ♀ pós-parto/menopausa ou ♂ pós-prostatectomia
  URGÊNCIA: 'urgência miccional', perda no caminho ao banheiro, bexiga hiperativa
  MISTA: ambos (frequente)
  TRANSBORDAMENTO: pequeno volume contínuo + esforço miccional + jato fraco + sensação de esvaziamento incompleto — HPB em homem, prolapso/diabetes em mulher
  FUNCIONAL: cognição/mobilidade impedem chegar a tempo

C) CAUSAS REVERSÍVEIS — Mnemônico DIAPPERS (avaliar SEMPRE):
  • D: Delirium
  • I: Infection (ITU)
  • A: Atrophic vaginitis/uretrite
  • P: Pharmacology (medicamentos)
  • P: Psychological (depressão grave)
  • E: Excessive urine output (poliúria — DM, IC, hipercalcemia)
  • R: Restricted mobility
  • S: Stool impaction (fecaloma)

D) INTERVENÇÕES:

  1. MEDIDAS BÁSICAS PARA TODOS:
  • Tratar causas reversíveis (DIAPPERS)
  • Reduzir cafeína (café, chá preto, refrigerantes, energéticos)
  • Reduzir álcool
  • Cessação tabagismo (tosse)
  • Perda de peso se obeso
  • Tratar constipação
  • Otimizar diurético (timing — não à noite)
  • Tratar atrofia urogenital com estrogênio tópico vaginal (♀ pós-menopausa — uso seguro mesmo após CA mama em geral, mas decisão compartilhada)
  
  2. INCONTINÊNCIA DE ESFORÇO:
  • EXERCÍCIOS DE KEGEL (assoalho pélvico):
    - 3 séries de 10 contrações/dia
    - Contrair como 'segurando xixi/gases'
    - Manter 5-10s, relaxar 10s
    - Resultados em 3-6 meses (paciência!)
    - Fisioterapia pélvica NASF é gold standard
  • Pessários vaginais em prolapso (ginecologia)
  • Em refratário: cirurgia (sling uretral, colpossuspensão) — encaminhar urologia/uroginecologia
  
  3. INCONTINÊNCIA DE URGÊNCIA / BEXIGA HIPERATIVA:
  • TREINO VESICAL: ir ao banheiro em horários fixos (ex: a cada 2h), aumentar intervalo gradualmente
  • Reduzir cafeína
  • Tratar ITU se presente
  • Fisioterapia pélvica (Kegel ajuda aqui também)
  • Medicamentos antimuscarínicos:
    - Oxibutinina 5 mg 2-3x/d (única no CBAF; mas CUIDADO Beers em idoso — anticolinérgico alto)
    - Solifenacina, tolterodina (mais seletivos, melhor perfil — não disponíveis CBAF rotineiramente; CEAF ou particular)
    - Mirabegrona (β3-agonista) — não anticolinérgico, melhor para idoso, particular geralmente
  • β-agonista (mirabegrona): MELHOR alternativa em idoso pelo perfil P4 (sem anticolinérgico)
  • Injeção de toxina botulínica intra-detrusor: refratário (uroginecologia)
  
  4. TRANSBORDAMENTO:
  • Tratar causa (HPB com αbloq + 5α-redutase; cateterização intermitente em retenção crônica; cirurgia se obstrução grave)
  • Em mulher: tratar prolapso, otimizar DM, neuropatia
  
  5. FUNCIONAL:
  • Adaptar ambiente (banheiro próximo, vaso elevado, suporte)
  • Cadeira sanitária ao lado da cama à noite
  • Roupa fácil de baixar
  • Horários miccionais programados
  • ACS/cuidador acompanha

  6. ABSORVENTES/FRALDA:
  • Como medida de QUALIDADE DE VIDA quando outras falharam ou em conjunto
  • SUS oferece fralda geriátrica via PFPB (≥60a ou PcD com critério) — guiar paciente
  • Trocar regularmente (cada 4-6h ou conforme uso) — prevenir lesão de pele
  
E) AÇÕES E RESPONSÁVEIS:
  • Médico: avaliação, tratar causas, prescrição
  • Enfermagem: orientação Kegel, treino vesical, monitoramento
  • Fisioterapeuta NASF (perineal): gold standard para Kegel
  • ACS: orientação no domicílio, identificar idosos com UI subnotificada
  • Uroginecologia/Urologia: refratário ou cirurgia
  • Família: apoio, evitar julgamento

F) REAVALIAÇÃO:
  • 1 mês após início (medidas comportamentais demoram a fazer efeito)
  • 3 meses para avaliar resposta Kegel
  • Tratamento medicamentoso: ajustar/trocar se sem resposta em 4-8 sem`,
padrao_ouro:"NICE Urinary Incontinence in Women 2019, AUA, ICS (International Continence Society). β3-agonistas como mirabegrona estão deslocando antimuscarínicos no idoso (perfil P4 melhor). Toxina botulínica e neuromodulação sacral são padrões em refratários.",
prog:"UI de esforço com Kegel: 50-70% de melhora em mulher. UI de urgência com medicamentos + treino vesical: 60-70% melhora. Idoso institucionalizado com UI funcional: prognóstico depende de manejo ambiental + cuidador. UI raramente 'cura' completamente em idoso, mas frequentemente IS controlável.",
acomp:"Mensal nos primeiros 3-6 meses após início de intervenção. Após estabilização, a cada 6 meses. Avaliação anual de revisão (mudanças medicamentosas, novas causas reversíveis).",
p4:"⚠ NÃO usar fralda 'pra resolver' SEM avaliar causa. Fralda não é diagnóstico, é última medida. ⚠ OXIBUTININA em idoso = Beers/STOPP (anticolinérgico — confusão, queda, retenção, demência). Preferir mirabegrona ou intervenção comportamental. ⚠ Cuidado com cateter de demora 'pra evitar incomodo' — ITU, lesão uretral, dependência. Indicação restrita. ⚠ Estrogênio tópico vaginal em mulher pós-menopausa com atrofia: SEGURO mesmo após CA mama em geral — não confundir com TH sistêmica. ⚠ Anticolinérgico cumulativo: somar EFEITO TOTAL (oxibutinina + amitriptilina + dexclorfeniramina + ranitidina = carga anticolinérgica alta = piora cognição). ⚠ Investigar ITU antes de assumir UI 'envelhecimento'. ⚠ Restringir hidratação para reduzir UI: ERRO comum — causa desidratação, infecção, constipação, delirium. Hidratação adequada + manejo correto.",
calcs:["audit-c","imc"],
alertas:[
{t:"info",x:"PERGUNTAR sobre UI ativamente — paciente raramente fala espontaneamente."},
{t:"warn",x:"Oxibutinina em idoso = Beers/STOPP. Preferir mirabegrona, fisioterapia pélvica, Kegel."},
{t:"crit",x:"UI súbita em idoso = pesquisar ITU, fecaloma, medicação nova, delirium incipiente. NÃO assumir 'envelhecimento'."},
{t:"info",x:"Fralda geriátrica via PFPB (≥60a). Não esquecer orientar — qualidade de vida."}
],
diretriz:"NICE — Urinary Incontinence in Women 2019. AUA Surgical Treatment of Female Stress Urinary Incontinence 2017. ICS — International Continence Society Standardisation. FREITAS 5ª ed 2022. Beers 2023."
}

);
