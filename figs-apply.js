/* ===========================================================
   VOVÔMINIC DOUTÔ — pat/saude-mental-mfc.js
   Saúde Mental na MFC: depressão, ansiedade, álcool, tabagismo, insônia, luto
   Lente freireana, P4 explícita, sem psiquiatrização da vida cotidiana
   Fontes: TMFC, Duncan, CAB nº 34, ABP, DSM-5-TR, PNH
   =========================================================== */

PATOLOGIAS.push(

{
id:"depressao-mfc", contexto:["ubs"], nome:"Depressão — Manejo MFC", sis:"smen", grav:"baixa",
cid:"F32", ciap:"P03",
sin:["episódio depressivo","depressão maior","transtorno depressivo","tristeza patológica"],
def:"Manejo da depressão na APS — diagnóstico clínico (DSM-5-TR/CID-11), avaliação de risco (suicídio), abordagem psicossocial + farmacológica quando indicado. Diferenciar de tristeza situacional, luto normal, sofrimento social — não medicalizar.",
intro:"Depressão é a 2ª causa global de anos de vida perdidos por incapacidade. APS responde pela maior parte do cuidado em saúde mental no mundo — psiquiatra é minoria das ações. MFC é PRIMEIRA LINHA. Diferenciar depressão (categoria diagnóstica) de sofrimento (categoria humana) é parte central do trabalho. Nem todo choro é depressão.",
apresentacao:"Paciente queixa: tristeza persistente, falta de prazer (anedonia), cansaço, alterações de sono/apetite/peso, dificuldade de concentração, sentimentos de inutilidade/culpa, pensamentos de morte/suicídio. Apresentação SOMÁTICA frequente (dor crônica, cefaleia, fadiga, dispepsia) — depressão mascarada. Idoso: queixa cognitiva pode dominar (pseudodemência). Adolescente: irritabilidade pode predominar sobre tristeza.",
sintomas:[
"Humor deprimido a maior parte do dia, quase todo dia (≥2 semanas)",
"Anedonia (perda de interesse/prazer em atividades antes prazerosas)",
"Alterações de sono (insônia ou hipersonia)",
"Alterações de apetite/peso",
"Fadiga / perda de energia",
"Sentimentos de inutilidade ou culpa excessiva",
"Dificuldade de concentração ou indecisão",
"Agitação ou retardo psicomotor (observável por outros)",
"Pensamentos recorrentes de morte / ideação suicida / planejamento / tentativa"
],
fisio:"Modelo neurobiológico: desregulação de monoaminas (serotonina, noradrenalina, dopamina), eixo HHA hiperativo (cortisol elevado), inflamação sistêmica, alterações no BDNF e neuroplasticidade. Componente GENÉTICO: herdabilidade ~30-40%. Componente AMBIENTAL: trauma precoce, perdas, estressores socioeconômicos. Comorbidade frequente com ansiedade, dor crônica, doenças clínicas (DM, IAM, AVC, neoplasia).",
profilaxia:"Fatores protetores: vínculos sociais, atividade física regular, sono adequado, rede de apoio, atividades significativas, espiritualidade quando importante para o paciente. Prevenção secundária: rastrear em populações de risco (pós-parto, pós-AVC, doença crônica, perda recente, idoso isolado).",
freire:"Depressão não é 'falta de fé', 'preguiça' ou 'mimimi'. Mas TAMBÉM não é 'doença bioquímica simples curada com pílula'. É CONDIÇÃO COMPLEXA com componentes biopsicossociais. Pergunte: 'O que você acha que está acontecendo com você?' / 'O que mudou na sua vida nos últimos meses?' / 'O que te dá força hoje?'. Validar a dor SEM romantizar. Construir entendimento: 'isso é tratável, leva tempo, vamos juntos'. Aborde estigma: 'depressão acontece com pessoas fortes — não é fraqueza'. Pactue PRIMEIROS PASSOS: levantar e tomar banho, sair de casa 1x/dia, ligar para uma pessoa. Resgatar agência. NÃO medicalize sofrimento situacional reativo (luto, desemprego, separação) automaticamente — escuta e apoio podem bastar.",
sus_tx:`PLANO TERAPÊUTICO SINGULAR (PTS) — Depressão na APS:

A) AVALIAÇÃO INICIAL:
• Triagem com PHQ-9 (score 0-27):
  - 0-4: mínima
  - 5-9: leve
  - 10-14: moderada
  - 15-19: moderadamente grave
  - 20-27: grave
• Avaliar RISCO DE SUICÍDIO em TODOS (perguntar diretamente NÃO induz):
  - 'Você tem tido pensamentos de que seria melhor não estar aqui?'
  - Se sim: 'Você pensa em se machucar?' / 'Tem plano?' / 'Tem acesso a meio?'
  - Risco ALTO: plano definido + meio disponível + intenção → ENCAMINHAR URGENTE (CAPS, PS, internação se necessário)
• Diferencial: transtorno bipolar (pesquisar episódios maníacos/hipomaníacos PRÉVIOS — muda 100% a abordagem), distimia, transtorno adaptativo, luto normal, hipotireoidismo, deficiência B12, anemia, doença neurológica
• Comorbidade: ansiedade, dor crônica, álcool, DM, AVC, neoplasia

B) ABORDAGEM ESCALONADA (por gravidade):

  DEPRESSÃO LEVE (PHQ-9 5-9):
  • Psicoeducação + suporte ativo
  • Mudança de estilo de vida (sono, atividade física aeróbica ≥30 min 3x/sem)
  • Psicoterapia (CBT, IPT — encaminhar para psicólogo do NASF/CAPS quando disponível)
  • Reavaliação em 2-4 semanas
  • Antidepressivo geralmente NÃO indicado em primeira linha (P4)
  
  DEPRESSÃO MODERADA (PHQ-9 10-14):
  • Antidepressivo + psicoterapia (combinação > monoterapia)
  • Reavaliação em 2-4 semanas
  
  DEPRESSÃO GRAVE (PHQ-9 ≥15) ou COM RISCO DE SUICÍDIO:
  • Antidepressivo + psicoterapia + matriciamento CAPS
  • Considerar internação se risco iminente
  • Acompanhamento estreito (1-2 semanas)

C) MEDICAÇÕES NO SUS (FARMASUS — receita controlada):
• 1ª LINHA ISRS: Sertralina 50-200 mg/dia (preferir em idoso, gestante)
• Fluoxetina 20-80 mg/dia (longa meia-vida, útil quando aderência é difícil)
• Paroxetina 20-50 mg/dia (cuidado: síndrome de descontinuação)
• 1ª LINHA TRICÍCLICO (custo baixo, efeito comprovado):
  - Amitriptilina 25-150 mg/noite (útil em dor crônica associada)
  - Nortriptilina 25-100 mg/dia (menos efeito anticolinérgico que amitriptilina — preferir em idoso quando tricíclico necessário)
• 2ª LINHA: Venlafaxina 75-225 mg/dia (ISRSN — útil quando ISRS falha)
• 2ª LINHA: Bupropiona 150-300 mg/dia (boa em fadiga, baixa libido, parar de fumar simultaneamente — evitar em risco convulsivo)
• Início: dose mínima, escalonar em 1-2 semanas
• Avaliar resposta em 4-6 semanas; ajuste se sem resposta parcial
• Manter por 6-12 meses após remissão (1º episódio); 2 anos+ ou indefinido se recorrências
• Retirada GRADUAL (1-2 meses) para evitar síndrome de descontinuação

D) ABORDAGEM PSICOSSOCIAL:
• Psicoeducação: depressão é tratável, paciência, recaídas são possíveis
• Higiene do sono
• Atividade física aeróbica regular (efeito comprovado em depressão leve-moderada)
• Conexão social — combate isolamento
• Rede de apoio: família, amigos, ACS na visita
• Trabalho: avaliar afastamento se necessário (atestado, NTEP)
• Atividades significativas (resgate de interesses prévios)

E) MATRICIAMENTO:
• CAPS-AD para comorbidade álcool/drogas
• CAPS-II para depressão grave/recorrente
• Psicologia NASF para psicoterapia
• Discussão de caso com matriciador (psiquiatra/psicólogo)

F) AÇÕES E RESPONSÁVEIS:
• Médico: diagnóstico, prescrição, manejo
• Enfermagem: aplicação PHQ-9 em reavaliações, escuta qualificada
• ACS: vínculo, busca ativa em faltosos, sinalizar piora
• Família: apoio, observação, suporte
• PACIENTE: pequenos passos cotidianos, retornos

G) REAVALIAÇÃO:
• 1-2 semanas no início ou em risco alto
• 4 semanas para avaliar resposta inicial à medicação
• Mensal nos primeiros 3 meses
• A cada 3 meses quando estável`,
padrao_ouro:"Combinação farmacoterapia + psicoterapia é gold standard em depressão moderada-grave. Psicoterapia (CBT, IPT) sozinha pode ser suficiente em leve. Em refratários: ECT (eletroconvulsoterapia) é altamente eficaz mas restrito a serviços terciários. Esketamina e psicodélicos terapêuticos: emergentes, restritos a centros específicos no Brasil. Estimulação magnética transcraniana: disponibilidade limitada SUS.",
prog:"Depressão tem alto risco de recorrência: ~50% após 1º episódio, ~70% após 2º, ~90% após 3º. Tratamento adequado reduz recorrência. Pacientes podem ter remissão completa, parcial, ou cronicidade. Suicídio: ~5-15% em depressão grave não tratada.",
acomp:"Acompanhamento a cada 2-4 semanas até estabilização. A cada 3 meses quando estável. Reavaliação PHQ-9 periódica. Atenção a recaídas (eventos disparadores: perdas, mudanças, datas significativas).",
p4:"⚠ NÃO medicalizar tristeza reativa normal (luto, desemprego, divórcio recente) — apoio e escuta antes de droga. ⚠ Diferenciar SOFRIMENTO SOCIAL (pobreza, violência) de transtorno mental — droga não trata desigualdade. ⚠ Bipolar mal-diagnosticado como 'depressão recorrente' + ISRS = INDUÇÃO DE MANIA. Pesquisar episódios maníacos/hipomaníacos prévios SEMPRE. ⚠ Idoso + ISRS = atenção HIPONATREMIA (SIADH). Monitorar Na nas primeiras semanas. ⚠ Não combinar ISRS + IMAO (síndrome serotoninérgica). ⚠ Não fazer 'desintoxicação serotoninérgica' (pseudociência). ⚠ Antidepressivo NÃO é 'remédio do bom humor' — é tratamento para doença, com efeitos colaterais. Decisão compartilhada.",
calcs:["phq9","audit-c"],
alertas:[
{tipo:"crit",texto:"PERGUNTAR sobre suicídio NÃO induz suicídio. NÃO perguntar é negligência."},
{tipo:"crit",texto:"Bipolar + ISRS isolado = risco de virada maníaca. Investigar episódios prévios SEMPRE antes de prescrever AD."},
{tipo:"warn",texto:"PHQ-9 ≥15 ou ideação suicida ativa: matriciamento CAPS, considerar internação."},
{tipo:"info",texto:"Resposta a AD: 4-6 semanas. Não trocar antes de tempo adequado."}
],
mec:[
{drg:"Sertralina/Fluoxetina/Paroxetina", classe:"ISRS", acao:"Inibe recaptação de serotonina na fenda sináptica → ↑disponibilidade serotonina", uso:"1ª linha; perfil seguro; latência 2-6 sem"},
{drg:"Amitriptilina/Nortriptilina", classe:"Tricíclico", acao:"Bloqueia recaptação serotonina+noradrenalina; ação anticolinérgica, anti-H1, alfa-1", uso:"1ª linha econômica; útil em dor; cuidado anticolinérgico em idoso"},
{drg:"Venlafaxina", classe:"ISRSN", acao:"Inibe recaptação serotonina+noradrenalina (dose-dependente: <150mg mais serotonina, >150mg ambos)", uso:"2ª linha; útil em ISRS-resistentes"},
{drg:"Bupropiona", classe:"NDRI", acao:"Inibe recaptação noradrenalina+dopamina; sem efeito serotoninérgico (sem disfunção sexual)", uso:"Útil em fadiga, baixa libido, parar de fumar; evitar em risco convulsivo"}
],
diretriz:"Tratado de MFC [TMFC 2ª ed 2019]. Duncan — Medicina Ambulatorial [DUNCAN 5ª ed 2022]. CAB nº 34 — Saúde Mental [CAB-SM 2013]. DSM-5-TR (APA 2022). Diretrizes ABP 2024. NICE Depression Guidance 2022."
},

{
id:"ansiedade-mfc", contexto:["ubs"], nome:"Transtorno de Ansiedade — Manejo MFC", sis:"smen", grav:"baixa",
cid:"F41", ciap:"P74",
sin:["TAG","ansiedade generalizada","pânico","ansiedade crônica","ansiedade social"],
def:"Manejo de transtornos de ansiedade na APS — TAG (transtorno de ansiedade generalizada), transtorno de pânico, fobia social, fobias específicas. Diferenciar de ansiedade normal/situacional. Abordagem psicossocial + farmacoterapia quando indicado.",
intro:"Ansiedade é diagnóstico subnotificado e supermedicalizado simultaneamente — paradoxo. Subnotificado: paciente atribui a 'estresse', somatiza, busca cardiologista. Supermedicalizado: benzodiazepínico crônico, polifarmácia. MFC tem papel central em diferenciar ansiedade NORMAL (parte da vida) de TRANSTORNO (causa sofrimento e disfunção). Aprender a CONVIVER com ansiedade é tão importante quanto suprimir sintomas.",
apresentacao:"Sintomas físicos: palpitação, sudorese, tremor, dispneia, dor torácica atípica, dor abdominal, parestesias, tonteira. Sintomas cognitivos: preocupação excessiva, ruminação, expectativa do pior, dificuldade de concentração. Comportamentais: evitação, busca de tranquilização, hipervigilância. PÂNICO: crises súbitas, picos em 10 min, medo intenso de morte/perder controle. TAG: ansiedade ≥6 meses, múltiplas áreas. Fobia social: medo de avaliação social. Fobias específicas: estímulo específico.",
sintomas:[
"Ansiedade ou preocupação excessiva e persistente",
"Inquietação / sensação de 'no limite'",
"Fadiga fácil",
"Dificuldade de concentração",
"Irritabilidade",
"Tensão muscular",
"Distúrbio do sono (dificuldade iniciar / manter sono)",
"Sintomas autonômicos: taquicardia, sudorese, dispneia, GI",
"Pânico: crises súbitas com pico em 10 min + medo de morte/perder controle"
],
fisio:"Modelo neurobiológico: hiperatividade amigdalar, hipofunção córtex pré-frontal medial, desregulação GABA/serotonina/noradrenalina. Componente GENÉTICO + AMBIENTAL (trauma precoce, parentalidade ansiosa, estressores). Comorbidade frequente com depressão (~60%).",
profilaxia:"Atividade física regular, mindfulness, redução de cafeína/álcool/estimulantes, sono regular, gerenciamento de estresse, evitar isolamento, terapia cognitivo-comportamental preventiva em situações de alto risco.",
freire:"Ansiedade tem RAÍZES — perguntar antes de medicalizar. 'O que te deixa ansioso?' / 'Quando começou?' / 'O que você faz quando vem essa sensação?'. Validar que ansiedade É UMA FUNÇÃO PROTETIVA — vira problema quando descontextualizada. Construir entendimento: 'seu corpo está em alarme — vamos descobrir o que está disparando'. NÃO atribuir tudo a 'química do cérebro' — fatores de vida importam. Educar sobre crise de pânico: 'isso é desconfortável mas NÃO te mata, passa em 20-30 min, vamos aprender a atravessar'. Mindfulness e respiração diafragmática são intervenções de evidência alta — ensinar na consulta.",
sus_tx:`PLANO TERAPÊUTICO SINGULAR (PTS) — Ansiedade na APS:

A) AVALIAÇÃO INICIAL:
• Diferenciar TIPO: TAG, pânico, fobia social, específica, TOC, TEPT
• Diferencial CLÍNICO: hipertireoidismo (TSH), abuso de cafeína/estimulantes/cocaína, arritmia, asma, feocromocitoma (raro), abstinência de álcool/BZD
• Comorbidade: depressão, álcool, dor crônica
• Comprometimento funcional (trabalho, relações, autocuidado)

B) ABORDAGEM ESCALONADA:

  ANSIEDADE LEVE-MODERADA:
  • PSICOEDUCAÇÃO: explicar o que é ansiedade, ciclo de pensamento/emoção/comportamento
  • TÉCNICAS NÃO-FARMACOLÓGICAS:
    - Respiração diafragmática (4-7-8): inspira 4s, segura 7s, expira 8s
    - Grounding (5-4-3-2-1: 5 que vê, 4 que toca, 3 que ouve, 2 que cheira, 1 que prova)
    - Mindfulness diário
  • Atividade física aeróbica regular (efeito ansiolítico comprovado)
  • Redução de cafeína, álcool, açúcar
  • Higiene do sono
  • Psicoterapia (CBT é gold-standard) — encaminhar NASF/CAPS/psicologia
  • Reavaliação 2-4 sem

  ANSIEDADE MODERADA-GRAVE:
  • Psicoeducação + técnicas + psicoterapia
  • Antidepressivo (ISRS/ISRSN) — 1ª linha medicamentosa (NÃO benzodiazepínico)
  • Reavaliação em 2-4 sem (latência 4-6 sem para efeito)

C) MEDICAÇÕES NO SUS (FARMASUS):
• 1ª LINHA: ISRS — sertralina 50-200 mg/dia, escitalopram (não disponível CBAF), fluoxetina 20-80 mg/dia, paroxetina 20-50 mg
  - Iniciar com DOSE BAIXA (metade da inicial habitual) em ansiedade, pois pode haver piora transitória nas primeiras 1-2 semanas
  - Escalonar lentamente
• 2ª LINHA: Venlafaxina 75-225 mg/dia (ISRSN — útil em TAG)
• 2ª LINHA: Buspirona 15-30 mg/dia (ansiolítico não-BZD; específico para TAG; não disponível no CBAF — particular ou substituir com ISRS)
• ⚠ BENZODIAZEPÍNICOS (diazepam 5-10 mg, clonazepam 0,5-2 mg, alprazolam — não no CBAF):
  - USO DE CURTÍSSIMA DURAÇÃO (4 semanas no máximo)
  - Crise aguda de pânico, sintomas debilitantes durante latência do AD
  - NÃO USAR como manutenção (tolerância, dependência, síndrome de descontinuação)
  - Beers/STOPP-START: evitar em idoso (queda, demência)
  - Difícil de descontinuar (síndrome de abstinência grave)
• EM PÂNICO: ISRS + propranolol 20-40 mg/d se sintomas autonômicos predominam

D) ABORDAGEM PSICOSSOCIAL:
• Psicoeducação detalhada
• Técnicas de relaxamento
• Mudança de estilo de vida
• Redução de evitação (exposição gradual em fobias)
• Suporte familiar
• Trabalho / estudos: avaliar adaptação

E) MATRICIAMENTO:
• Psicologia NASF/CAPS para CBT
• CAPS para casos graves
• Psiquiatria via matriciamento se refratário ou TOC/TEPT complexo

F) REAVALIAÇÃO:
• 2 semanas no início
• 4 semanas para avaliar resposta inicial AD
• Mensal nos primeiros 3 meses
• Trimestral quando estável
• Tentar reduzir após 12 meses de estabilidade`,
padrao_ouro:"Combinação ISRS + CBT é gold standard. Em TAG: ISRS, ISRSN, ou buspirona. Em pânico: ISRS é 1ª linha + CBT. TEPT: ISRS + terapia trauma-focused (EMDR ou TF-CBT). TOC: ISRS em dose alta + CBT com exposição e prevenção de resposta. Pregabalina é alternativa em TAG (CEAF com PCDT — neuropatia diabética em geral, ansiedade em alguns países).",
prog:"Bom prognóstico com tratamento adequado. ~60-80% melhoram significativamente. Recaídas: comuns ao descontinuar muito cedo (manter 12-24 meses após remissão). Ansiedade não tratada: cronicidade, deterioração funcional, depressão secundária, automedicação com álcool/BZD.",
acomp:"Médica a cada 2-4 sem início; mensal nos 3 primeiros meses; trimestral estável. Reavaliação após 12 meses de estabilidade — considerar retirada gradual.",
p4:"⚠ BENZODIAZEPÍNICO crônico é uma das piores prescrições da medicina brasileira. Em idoso = QUEDA, FRATURA, DEMÊNCIA. Em adulto = dependência. NÃO INICIAR e DESPRESCREVER quando possível (redução de 25% a cada 2-4 sem). ⚠ Atribuir todo sintoma físico a 'ansiedade' SEM investigar é negligência (palpitação pode ser arritmia). ⚠ Não 'tratar' ansiedade situacional adaptativa (medo apropriado de evento real) — escuta e suporte. ⚠ Café e álcool: subestimados como pioradores. Investigar. ⚠ Não combinar ISRS + IMAO (síndrome serotoninérgica).",
calcs:["audit-c"],
alertas:[
{tipo:"crit",texto:"BZD em idoso = Beers/STOPP-START. RISCO ALTO de queda/fratura/demência. Despreescrever."},
{tipo:"warn",texto:"BZD: NÃO iniciar como manutenção. Se já em uso, descalonar 25%/2-4 sem."},
{tipo:"info",texto:"Pânico: psicoeducar que 'crise não mata' é parte central do tratamento."}
],
mec:[
{drg:"Sertralina/Fluoxetina/Paroxetina", classe:"ISRS", acao:"Inibe recaptação de serotonina", uso:"1ª linha em todos transtornos de ansiedade"},
{drg:"Venlafaxina", classe:"ISRSN", acao:"Inibe recaptação serotonina+noradrenalina", uso:"TAG, depressão+ansiedade"},
{drg:"Diazepam/Clonazepam", classe:"Benzodiazepínico", acao:"Potencializa ação GABA no receptor GABA-A (subunidade α1=sedação, α2=ansiólise)", uso:"CRISE aguda apenas, ≤4 semanas. EVITAR manutenção."},
{drg:"Propranolol", classe:"Betabloqueador não-seletivo", acao:"Bloqueio β-adrenérgico → reduz sintomas autonômicos (taquicardia, tremor)", uso:"Pânico com componente autonômico, fobia de palco"}
],
diretriz:"TMFC 2ª ed 2019. Duncan 5ª ed 2022. NICE Anxiety Guidance 2020 (CG113). DSM-5-TR (APA 2022). Diretrizes ABP."
},

{
id:"alcoolismo-mfc", contexto:["ubs"], nome:"Uso Problemático de Álcool — Manejo MFC", sis:"smen", grav:"baixa",
cid:"F10", ciap:"P15",
sin:["alcoolismo","dependência alcoólica","uso nocivo de álcool","AUDIT","alcool problemático"],
def:"Manejo do uso problemático e dependência de álcool na APS. Espectro: uso de baixo risco → uso problemático → uso nocivo → dependência. Abordagem motivacional + farmacoterapia quando indicada. Rastreio com AUDIT/AUDIT-C. Articulação com CAPS-AD.",
intro:"Álcool é a droga mais usada e mais subestimada no Brasil. Causa direta de >3% mortes globais (OMS) — superior à maioria das doenças crônicas. Médico de família muitas vezes evita o tema por desconforto. RASTREAR é obrigação ética: AUDIT-C em TODA consulta de adulto. Não é 'fiscalizar' — é cuidar.",
apresentacao:"Paciente pode chegar por: queixa direta (raro), queixa física (HAS, hepatopatia, gastrite, neuropatia, dispepsia, IAM jovem, AVC), social (acidente, briga, separação), familiar (esposa traz preocupação), comorbidade psiquiátrica (depressão, ansiedade, insônia auto-medicada). RASTREIO em consulta de rotina captura uso problemático em assintomáticos.",
sintomas:[
"Padrão de uso: quantidade, frequência, contexto",
"Tolerância (precisa mais para o mesmo efeito)",
"Abstinência (sintomas se reduz/para)",
"Perda de controle (bebe mais do que pretendia)",
"Tempo gasto bebendo / recuperando",
"Prejuízo social, ocupacional, recreacional",
"Continuação apesar de prejuízo conhecido",
"Black-outs frequentes",
"Beber matinal (alívio sintomas abstinência)",
"Tentativas anteriores de parar"
],
fisio:"Etanol atua em múltiplos sistemas: potencializa GABA (sedação, ansiólise), inibe NMDA, libera dopamina mesolímbica (recompensa), opioides endógenos. Uso crônico: neuroadaptação (downregulation GABA, upregulation NMDA) → ABSTINÊNCIA com hiperexcitabilidade (tremor, ansiedade, convulsão, delirium tremens). Toxicidade direta: hepática (esteatose → hepatite → cirrose), pancreática, neurológica (Wernicke-Korsakoff por deficiência B1), gastrintestinal, cardiovascular, oncológica (mama, fígado, cólon, cabeça/pescoço).",
profilaxia:"Limites OMS uso de baixo risco: ♂ ≤2 doses/dia (≤14/semana), ♀ ≤1 dose/dia (≤7/semana), sem binge. Idoso/jovem/comorbidade: limites menores. Abstinência absoluta: gestante, hepatopata, em medicamento incompatível.",
freire:"Álcool é território MUITO sensível — culturalmente normalizado e moralmente carregado. NÃO MORALIZAR ('você bebe muito, vai morrer'). NÃO INFANTILIZAR ('precisa parar'). Pergunte: 'Como é seu uso de álcool?' / 'O que o álcool faz por você?' / 'Já pensou em mudar algo?'. Use ENTREVISTA MOTIVACIONAL: evocar a mudança DO paciente, não impor. 'O que aconteceria se você reduzisse?'. Validar ambivalência (paciente quer e não quer). PEQUENOS PASSOS: 'que tal 2 dias sem beber esta semana?'. Estágios de mudança (Prochaska): pré-contemplação → contemplação → preparação → ação → manutenção → recaída (parte do processo). Recaída NÃO é fracasso. Família e ACS são parceiros — sem traição da confidencialidade.",
sus_tx:`PLANO TERAPÊUTICO SINGULAR (PTS) — Álcool na APS:

A) RASTREIO em TODA consulta de adulto:
• AUDIT-C (3 perguntas — rápido):
  1. Com que frequência você bebe?
  2. Quantas doses em dia típico?
  3. Frequência ≥6 doses em uma ocasião?
  - Score: ≥3 ♀ ou ≥4 ♂ = positivo, fazer AUDIT-10
• AUDIT-10 completo:
  - 0-7: baixo risco
  - 8-15: uso problemático (intervenção breve)
  - 16-19: uso nocivo (intervenção mais intensa)
  - ≥20: dependência provável (matriciamento CAPS-AD)

B) AVALIAÇÃO CLÍNICA:
• Sintomas de abstinência (CIWA-Ar)
• Sinais de hepatopatia (icterícia, ascite, eritema palmar, ginecomastia, aranhas vasculares, hepatomegalia/atrofia)
• Sinais de Wernicke (oftalmoplegia, ataxia, confusão) — emergência
• Comorbidades: HAS, DM, dispepsia, neuropatia, depressão
• EXAMES: hemograma (macrocitose), GGT/TGO/TGP (TGO>TGP característico), bilirrubina, INR, glicemia, eletrólitos, lipase se dor abdominal

C) ABORDAGEM POR NÍVEL:

  USO DE BAIXO RISCO (AUDIT 0-7):
  • Validar, parabenizar
  • Reforço positivo

  USO PROBLEMÁTICO (AUDIT 8-15):
  • INTERVENÇÃO BREVE (5-30 min): feedback + responsabilidade + advice + menu + empatia + autoeficácia (FRAMES)
  • Educação sobre limites OMS
  • Reavaliar em 1-3 meses

  USO NOCIVO (AUDIT 16-19):
  • Intervenção mais estruturada
  • Múltiplas consultas
  • Considerar farmacoterapia (naltrexona em parar; acamprosato em manter abstinência)
  • Articulação com NASF/CAPS-AD
  • Reavaliações frequentes (mensal)

  DEPENDÊNCIA (AUDIT ≥20):
  • Matriciamento CAPS-AD
  • Avaliação para detoxificação ambulatorial vs hospitalar
  • Farmacoterapia
  • Grupos de apoio (AA — Alcoólicos Anônimos)
  • Família/cuidadores envolvidos

D) DETOXIFICAÇÃO (síndrome de abstinência):
• AMBULATORIAL se: CIWA-Ar leve, apoio familiar, sem comorbidade grave, sem história de delirium/convulsão prévia
  - Diazepam 10-20 mg 6/6h por 3 dias, depois reduzir gradualmente
  - Tiamina 100 mg/dia VO por 30 dias (prevenir Wernicke)
  - Hidratação oral, dieta
• HOSPITALAR se: CIWA-Ar moderado-grave, comorbidade grave, gestação, história de delirium/convulsão, sem apoio
• Wernicke estabelecido = EMERGÊNCIA: tiamina 500 mg IV 8/8h × 2-3 dias

E) FARMACOTERAPIA ANTI-CRAVING (após detoxificação):
• Naltrexona 50 mg/dia VO — reduz craving e prazer com álcool (não disponível CBAF rotineiramente; via judicial/CAPS-AD em alguns estados)
• Acamprosato (não disponível SUS)
• Dissulfiram 250 mg/dia — efeito aversivo (não disponível CBAF; risco alto)

F) ABORDAGEM PSICOSSOCIAL:
• Grupos de apoio (AA, NA) — gratuitos e amplamente disponíveis
• Psicoterapia individual ou grupal
• Apoio familiar — Al-Anon para familiares
• Reorganização de rotina (evitar gatilhos)
• Trabalho com sentido

G) AÇÕES E RESPONSÁVEIS:
• Médico: rastreio, diagnóstico, intervenção breve, farmacoterapia, manejo abstinência
• Enfermagem: AUDIT, escuta qualificada, busca ativa
• ACS: vínculo territorial, observação contextual
• CAPS-AD: cuidado especializado
• Família: apoio sem coação; Al-Anon
• PACIENTE: protagonismo

H) REAVALIAÇÃO:
• Intervenção breve: 1-3 meses
• Uso nocivo/dependência: mensal nos primeiros 6 meses
• Recaída faz parte do processo — NÃO punir, retomar`,
padrao_ouro:"Combinação intervenção motivacional + farmacoterapia (naltrexona/acamprosato) + apoio psicossocial (AA, terapia) é gold standard. Naltrexona injetável mensal: melhor aderência. Em refratários: tratamento intensivo em centros especializados.",
prog:"~30% dos pacientes em tratamento atingem abstinência sustentada 1 ano; ~50% reduzem significativamente. Recaída é parte do processo — não é fracasso de tratamento. Mortalidade por álcool reduz drasticamente com cessação (hepática, oncológica, traumática).",
acomp:"Após detoxificação: acompanhamento estreito (semanal a mensal) por 6-12 meses. Manutenção em CAPS-AD se dependência. Grupos AA paralelos a UBS. Rastreio anual AUDIT em todo adulto.",
p4:"⚠ NÃO moralizar, julgar, ameaçar. Backfire effect: confronto reduz adesão. ⚠ Detoxificação ambulatorial: NÃO em paciente com história de delirium tremens, convulsão por abstinência, comorbidade grave. Internar. ⚠ Tiamina ANTES de glicose em paciente alcoólico (não, sempre administrar tiamina primeiro/junto, NUNCA glicose isolada em desnutrido alcoolista = risco Wernicke). ⚠ BZD em paciente com risco de abuso e ainda usando álcool = perigoso. ⚠ Não use 'remédio para parar de beber' como bala mágica — é coadjuvante. ⚠ Família coerciva pode piorar — orientar Al-Anon.",
calcs:["audit-c","ciwa","ciwa-ar"],
alertas:[
{tipo:"crit",texto:"Wernicke = tríade oftalmoplegia + ataxia + confusão. TIAMINA IV imediata, não esperar exame."},
{tipo:"crit",texto:"Detox ambulatorial CONTRAINDICADA se: CIWA-Ar grave, história delirium/convulsão, comorbidade grave. INTERNAR."},
{tipo:"warn",texto:"Glicose IV em paciente desnutrido sem tiamina = pode PRECIPITAR Wernicke. TIAMINA PRIMEIRO."},
{tipo:"info",texto:"AUDIT em toda consulta — rastreio é cuidado, não controle."}
],
diretriz:"OMS. AUDIT — Manual para uso na Atenção Primária 2001. CAB nº 34 — Saúde Mental [CAB-SM 2013]. PCDT Transtornos por Uso de Álcool MS. TMFC 2ª ed 2019."
},

{
id:"tabagismo-mfc", contexto:["ubs"], nome:"Tabagismo — Cessação MFC (PNCT)", sis:"smen", grav:"baixa",
cid:"F17", ciap:"P17",
sin:["tabagismo","fumante","parar de fumar","pnct","cessação tabágica"],
def:"Manejo da dependência de tabaco na APS via Programa Nacional de Controle do Tabagismo (PNCT). Abordagem PA-AC (Pergunte, Avalie — Aconselhe, Auxilie, Acompanhe). Farmacoterapia disponível no SUS: bupropiona + adesivo de nicotina.",
intro:"Tabaco é a causa prevenível mais importante de morte no Brasil — ~150.000 mortes/ano. Brasil é referência mundial em controle do tabaco (queda de prevalência de >30% para <10% em duas décadas). Médico de família tem papel central — conselho breve aumenta cessação em ~5% por encontro. Não é 'dever do pneumo' — é cuidado de toda equipe.",
apresentacao:"Paciente fuma, foi questionado, e está em algum dos 5 estágios de mudança: pré-contemplação (não quer parar), contemplação (pensa em parar), preparação (decide parar em <30d), ação (parou recentemente), manutenção (parou >6m). Pode chegar por queixa direta ('quero parar'), por queixa relacionada (tosse, DPOC, IAM), ou ser identificado em rastreio.",
sintomas:[
"Anos de tabagismo / maços-ano",
"Tipo de tabaco (cigarro industrializado, palheiro, narguilé, eletrônico)",
"Dependência: Fagerström curto (tempo até 1º cigarro do dia, quantidade)",
"Tentativas prévias de parar (quantas, métodos, motivos da recaída)",
"Doenças associadas (DPOC, DAC, neoplasia)",
"Estágio de mudança (Prochaska)"
],
fisio:"Nicotina ativa receptor nicotínico → liberação dopamina mesolímbica → recompensa. Tolerância e dependência físicas + psicológicas + sociais. Abstinência: irritabilidade, ansiedade, dificuldade concentração, aumento apetite, craving, insônia (pico 3-5 dias, dura semanas-meses).",
profilaxia:"Prevenção primária: políticas públicas (campanhas, taxas, restrições), educação escolar. Prevenção da recaída: técnicas de manejo de craving, evitar gatilhos, apoio social.",
freire:"Tabagismo TEM componente moralizado historicamente — paciente pode evitar o tema por culpa/vergonha. NÃO MORALIZAR. Pergunte: 'Você fuma?' (sem julgamento) — 'O que o cigarro faz por você?' (validar função: relaxar, sociabilizar, ritual) — 'Já pensou em parar?'. Use ENTREVISTA MOTIVACIONAL. CONSELHO BREVE estruturado tem evidência forte: ASK-ADVISE-REFER. Pactuar próximo passo, mesmo pequeno. RECAÍDA é parte: maioria dos ex-fumantes tentou 5-7x antes de conseguir. Não desistir do paciente. Família como aliada (parar junto é mais fácil).",
sus_tx:`PROGRAMA NACIONAL DE CONTROLE DO TABAGISMO (PNCT) — Manejo na APS:

A) RASTREIO em TODA consulta de adulto:
• 'Você fuma?' / 'Quantos cigarros/dia?' / 'Há quanto tempo?'
• Maços-ano = (cigarros/dia ÷ 20) × anos de tabagismo

B) ABORDAGEM PA-AC (Pergunte, Avalie — Aconselhe, Auxilie, Acompanhe):
1. PERGUNTE sobre tabagismo (rastreio obrigatório)
2. AVALIE motivação (estágio de mudança)
3. ACONSELHE a parar (firme, claro, personalizado, repetido)
4. AUXILIE com farmacoterapia + abordagem cognitivo-comportamental
5. ACOMPANHE com retornos planejados

C) FAGERSTRÖM SIMPLIFICADO (avaliar dependência):
• Tempo até 1º cigarro do dia ≤30 min E ≥10 cigarros/dia = DEPENDÊNCIA SIGNIFICATIVA → indicar farmacoterapia
• Sem dependência significativa → conselho breve + acompanhamento

D) FARMACOTERAPIA (PNCT — Ambulatório de Saúde Mental ou UBS-PNCT, dispensação gratuita):

  • BUPROPIONA 150 mg:
    - 1 cp pela manhã por 3 dias, depois 1 cp manhã + 1 cp à tarde (≥8h intervalo)
    - Iniciar 1-2 semanas ANTES da data de parar
    - Manter por 12 semanas
    - Contraindicações: convulsão, transtorno alimentar, IMAO, abstinência alcoólica/BZD recente
    
  • ADESIVO DE NICOTINA (TRN):
    - Fumante >20 cigarros/dia: 21 mg/24h × 4 sem → 14 mg × 4 sem → 7 mg × 4 sem (3 meses)
    - Fumante 10-20: 14 mg × 4 sem → 7 mg × 4 sem (2 meses)
    - Fumante <10: 7 mg × 4-8 sem
    - Trocar adesivo a cada 24h, local diferente
    
  • Combinação BUPROPIONA + TRN: superior à monoterapia em dependência alta
    
  • VARENICLINA: NÃO disponível no PNCT/SUS (apenas particular)

E) ABORDAGEM COGNITIVO-COMPORTAMENTAL:
• Programa estruturado PNCT: 4 sessões de grupo + 4 reuniões manutenção, total ~12 sem
• Identificação de gatilhos
• Manejo da fissura: distração, postergação, hidratação, atividade
• Reorganização da rotina
• Reforço positivo

F) MARCAR DATA DE PARAR (Quit Day):
• Definir data específica em 1-2 sem
• Preparar ambiente: jogar cigarros, isqueiros, cinzeiros
• Comunicar família/amigos
• Planejar primeiros dias (atividades, apoio)

G) AÇÕES E RESPONSÁVEIS:
• Médico: avaliação, prescrição, manejo de comorbidades
• Enfermagem: grupos PNCT, orientação técnica
• ACS: vínculo, apoio, observação
• Família: apoio, idealmente parar junto
• PACIENTE: protagonismo, automonitoramento

H) ACOMPANHAMENTO:
• Semana 1 pós-Quit Day (telefone ou consulta breve)
• 1 mês, 3 meses, 6 meses, 12 meses
• Recaída: NÃO punir, retomar com novo plano`,
padrao_ouro:"Combinação farmacoterapia (vareniclina ou bupropiona + TRN duplo: adesivo + spray/goma) + CBT estruturada é gold standard. Vareniclina é mais eficaz que bupropiona isolada (não disponível SUS). Cigarro eletrônico como terapia substitutiva: controverso, sem indicação SUS, evidência ainda em construção.",
prog:"Cessação aos 30a: recupera ~10 anos de expectativa de vida. Aos 50a: ~6 anos. Aos 60a: ~3 anos. NUNCA é tarde. Risco de IAM cai 50% em 1 ano de cessação. Risco de CA pulmão cai pela metade em 10 anos. PNCT brasileiro tem taxas de cessação em 1 ano de ~30% (compatível com guidelines mundiais).",
acomp:"Acompanhamento sistemático por 12 meses. Recaída é COMUM e parte do processo — retomar imediatamente com novo plano. Pacientes geralmente precisam 5-7 tentativas antes de cessação definitiva.",
p4:"⚠ NÃO moralizar ('você é viciado'). ⚠ NÃO suspender tratamento por 1 'cigarrinho' isolado (lapso ≠ recaída — retomar). ⚠ Bupropiona: cuidado em histórico de convulsão, transtorno alimentar. ⚠ TRN em IAM agudo recente (<2 sem): cautela. ⚠ Cigarro eletrônico NÃO é cessação — pode manter dependência. ⚠ 'Café com tabaco' é forte gatilho — orientar.",
alertas:[
{tipo:"info",texto:"Conselho breve estruturado aumenta cessação em ~5% por encontro. Repetir em CADA consulta."},
{tipo:"warn",texto:"Bupropiona contraindicada: convulsão, transtorno alimentar, abstinência alcoólica/BZD recente."},
{tipo:"info",texto:"Recaída é parte do processo (média 5-7 tentativas). NÃO desistir do paciente."}
],
mec:[
{drg:"Bupropiona", classe:"NDRI / inibidor recaptação NA-DA", acao:"Bloqueia recaptação noradrenalina e dopamina; reduz craving e sintomas abstinência", uso:"PNCT 1ª linha; iniciar 1-2 sem antes do Quit Day"},
{drg:"Nicotina (adesivo)", classe:"Terapia de reposição de nicotina (TRN)", acao:"Liberação contínua de nicotina via transdérmica; alivia abstinência física sem comportamentos do fumo", uso:"PNCT; combina com bupropiona em alta dependência"}
],
diretriz:"Brasil. Ministério da Saúde. PNCT — Diretrizes para Cuidado em Tabagismo na APS [PNCT MS]. INCA — Tratamento do Tabagismo. TMFC 2ª ed 2019. CAB nº 34."
},

{
id:"insonia-mfc", contexto:["ubs"], nome:"Insônia — Manejo MFC", sis:"smen", grav:"baixa",
cid:"G47.0", ciap:"P06",
sin:["insônia","distúrbio do sono","higiene do sono","insonia primaria"],
def:"Manejo da insônia na APS — primária (sem causa secundária) ou secundária (a transtorno mental, doença clínica, medicações, substâncias). Abordagem é PRIMARIAMENTE não-farmacológica. Hipnóticos são último recurso e de curta duração.",
intro:"Insônia é altamente prevalente (~10-30% adultos), subestimada e frequentemente mal manejada. 'Quero remédio para dormir' é demanda comum — e tentação de prescrever BZD ou Z-drug é alta. MFC tem papel chave em DIFERENCIAR insônia (transtorno) de queixa de sono pontual, e priorizar TCC-I (terapia cognitivo-comportamental para insônia) — mais eficaz e segura que medicação.",
apresentacao:"Queixa de: dificuldade em iniciar sono, manter sono (despertares frequentes), despertar precoce, sono não-restaurador. Sintomas DIURNOS associados: fadiga, sonolência diurna, dificuldade de concentração, irritabilidade. Frequência: pelo menos 3 noites/semana, ≥3 meses para insônia crônica.",
sintomas:[
"Latência de sono ≥30 min (dificuldade em adormecer)",
"Despertares noturnos prolongados ≥30 min",
"Despertar precoce sem retomar sono",
"Sono não-restaurador",
"Fadiga / sonolência diurna",
"Irritabilidade / alterações cognitivas",
"Sintomas há ≥3 noites/semana, ≥3 meses",
"Hábitos de sono (horário, uso de telas, café/álcool, ambiente)"
],
fisio:"Modelo das 3 P (Spielman): predisposição genética + precipitante (estressor) + perpetuante (comportamentos compensatórios — passar mais tempo na cama, cochilo). Hiperexcitação cognitiva e autonômica. Comorbidade com ansiedade, depressão, dor crônica, SAOS, síndrome pernas inquietas.",
profilaxia:"Higiene do sono mantida AO LONGO DA VIDA: horário regular, exposição à luz natural, atividade física diurna, restrição estímulos noturnos (telas, cafeína, álcool), ambiente adequado.",
freire:"Insônia tem várias raízes — ansiedade, dor, ambiente, hábitos, medicações, álcool. Pergunte: 'Como é seu sono?' / 'Quando começou?' / 'O que você faz para tentar dormir?' / 'O que pensa quando está acordado?'. Construir entendimento: 'a cama virou lugar de tensão. Vamos retreinar seu cérebro a associar cama com sono'. NÃO prometer 'remédio para sempre' — explicar que medicação é coadjuvante temporário. PEQUENAS MUDANÇAS pactuadas: deitar só com sono, sair da cama se não dormir em 20 min, acordar mesmo horário todo dia.",
sus_tx:`PLANO TERAPÊUTICO SINGULAR — Insônia na APS:

A) AVALIAÇÃO INICIAL:
• Tipo: inicial, manutenção, terminal, mista
• Tempo: aguda (<1 mês), subaguda (1-3 meses), crônica (≥3 meses)
• Sintomas diurnos
• Diferencial: insônia primária x secundária a:
  - Transtorno mental (depressão, ansiedade, TEPT)
  - Doença clínica (dor crônica, ICC, DPOC, refluxo)
  - Medicação (corticoide, broncodilatador, estimulante, levotiroxina à noite)
  - Substâncias (cafeína, álcool — paradoxalmente piora qualidade)
  - Outros distúrbios do sono (SAOS — apneia, pernas inquietas, narcolepsia)
• Diário do sono por 1-2 semanas: deitar/levantar, despertares, qualidade subjetiva, sintomas diurnos
• Triagem para SAOS: ronco alto, pausas observadas, sonolência diurna, IMC alto → encaminhar polissonografia se positivo

B) ABORDAGEM ESCALONADA — TCC-I é gold standard:

  HIGIENE DO SONO (base para todos):
  • Horário regular (deitar/acordar no mesmo horário, mesmo fim de semana)
  • Exposição à luz natural pela manhã
  • Atividade física diurna (não próxima ao sono)
  • Cafeína: evitar após 14h
  • Álcool: evitar (atrapalha sono REM, fragmenta sono)
  • Refeição leve à noite, não próxima ao deitar
  • Quarto escuro, silencioso, fresco
  • Cama só para sono e sexo
  • Sem telas 1h antes do sono
  • Não cochilo diurno ou muito breve (<30 min e antes das 15h)
  
  TÉCNICAS COMPORTAMENTAIS (TCC-I — pode aplicar na consulta):
  • CONTROLE DE ESTÍMULOS: deitar SÓ com sono; sair da cama se não dormir em 20 min; usar cama só para sono
  • RESTRIÇÃO DE SONO: limitar tempo na cama ao tempo que dorme + 30 min; ampliar gradualmente conforme eficiência ≥85%
  • RELAXAMENTO: respiração diafragmática, relaxamento muscular progressivo
  • REESTRUTURAÇÃO COGNITIVA: combater pensamentos catastróficos sobre o sono
  
  PSICOTERAPIA: encaminhar psicólogo NASF se disponível

C) FARMACOTERAPIA (último recurso, curta duração):

  ⚠ ANTI-HISTAMÍNICO sedativo (dexclorfeniramina): efeito modesto, anticolinérgico (cuidado idoso)
  
  ⚠ TRAZODONA: NÃO disponível CBAF; baixa dose (25-100 mg) é alternativa em SUS de hospital ou particular
  
  ⚠ AMITRIPTILINA / NORTRIPTILINA baixa dose (10-25 mg noite): útil se insônia + dor crônica + componente depressivo
  
  ⚠ BENZODIAZEPÍNICOS (clonazepam, diazepam): RESERVAR para situações específicas
    - Uso de CURTÍSSIMA duração (≤2-4 sem)
    - Idoso: EVITAR (Beers, STOPP-START)
    - Tolerância rápida, dependência
  
  ⚠ Z-DRUGS (zolpidem, zopiclona): não no CBAF; particular. Mesmo perfil de risco que BZD
  
  • MELATONINA (não no SUS): útil em transtorno de fase atrasada / idoso (baixa dose 0,5-3 mg)

D) AÇÕES E RESPONSÁVEIS:
• Médico: avaliação, diferencial, prescrição quando necessário, despreescrição
• Enfermagem: educação higiene do sono
• Psicólogo NASF: TCC-I
• ACS: observação do contexto domiciliar
• PACIENTE: diário do sono, aderência

E) REAVALIAÇÃO:
• 2-4 sem após início de mudança comportamental
• Mensal nos primeiros 3 meses
• Tentar despreescrição de hipnótico a cada 3-6 meses`,
padrao_ouro:"TCC-I (terapia cognitivo-comportamental para insônia) estruturada de 4-8 sessões é gold standard. Eficácia superior a hipnóticos com benefícios duradouros (medicação cessa, efeito termina; TCC-I cessa, efeito persiste). Aplicações digitais de TCC-I (CBTi Coach, Sleep Reset) são alternativas onde psicólogo não disponível.",
prog:"Insônia bem manejada (TCC-I) tem resposta sustentada em 60-80% dos casos. Insônia tratada apenas com hipnótico tem alta recaída ao descontinuar. Insônia crônica não tratada associa-se a depressão, ansiedade, hipertensão, eventos cardiovasculares.",
acomp:"Reavaliação a cada 2-4 sem inicialmente. Mensal nos primeiros 3 meses. Diário do sono é ferramenta de seguimento. Despreescrição gradual de hipnóticos quando estabilizado.",
p4:"⚠ HIPNÓTICO crônico em idoso = QUEDA, FRATURA, DEMÊNCIA. Beers e STOPP-START contraindicam. ⚠ NÃO iniciar BZD/Z-drug 'só para começar a dormir' — alta dependência. ⚠ Insônia muitas vezes é SINTOMA — tratar a causa (ansiedade, depressão, dor) é mais efetivo que hipnótico. ⚠ Idoso com 'insônia há 20 anos em uso de clonazepam': despreescrever GRADUALMENTE (25%/2-4 sem). ⚠ Melatonina não é 'remédio natural inofensivo' — pode interagir. ⚠ Diagnosticar SAOS antes de prescrever hipnótico em paciente roncador.",
alertas:[
{tipo:"crit",texto:"Hipnótico crônico em idoso = QUEDA + FRATURA + DEMÊNCIA. Despreescrever."},
{tipo:"warn",texto:"BZD/Z-drug: ≤2-4 semanas. NÃO iniciar como manutenção."},
{tipo:"info",texto:"TCC-I é mais eficaz e segura que hipnótico no longo prazo."}
],
diretriz:"American Academy of Sleep Medicine — Clinical Practice Guideline for Chronic Insomnia 2021. TMFC 2ª ed 2019. NICE Insomnia Guidance 2021. Beers AGS 2023."
},

{
id:"sofrimento-mfc", contexto:["ubs"], nome:"Sofrimento Psíquico / Luto — Não Medicalizar", sis:"smen", grav:"baixa",
cid:"Z63", ciap:"P02",
sin:["luto","sofrimento normal","reação de ajustamento","tristeza situacional","crise existencial"],
def:"Sofrimento psíquico em resposta a perdas, mudanças, estressores vitais — NÃO é transtorno mental. Categoria CRÍTICA da MFC: diferenciar resposta humana normal a evento adverso de transtorno psicopatológico. Lente de prevenção quaternária central — não medicalizar a vida.",
intro:"Esta 'patologia' é, na verdade, uma NÃO-PATOLOGIA — uma das mais importantes para a MFC. Tristeza após perda, ansiedade frente a mudança, raiva diante de injustiça, desânimo em situação difícil são RESPOSTAS HUMANAS NORMAIS, não doenças. Medicalizar essas vivências é violência simbólica — patologiza o normal, suprime a elaboração, cria dependência. Médico de família tem oportunidade única de OFERECER ESCUTA, não comprimido.",
apresentacao:"Paciente chega com queixa emocional após: morte, separação, desemprego, dificuldade financeira, mudança, doença na família, violência sofrida, decepção, frustração, conflito relacional, fase de vida (climatério, aposentadoria, ninho vazio). Pode pedir 'um remédio para esquecer / aguentar / dormir'. Sintomas: tristeza, choro, raiva, irritabilidade, ansiedade, dificuldade de sono ou apetite, redução de prazer, isolamento temporário.",
sintomas:[
"Tristeza CONTEXTUAL (relacionada ao evento)",
"Resposta proporcional ao estressor",
"Variabilidade emocional (ondas de tristeza intercaladas com momentos de respiro)",
"Funcionalidade preservada parcialmente",
"Manutenção de capacidade de prazer em alguns aspectos",
"Sem ideação suicida ativa persistente",
"Sem auto-desvalorização generalizada",
"Sem sintomas psicóticos",
"Tempo: tristeza após perda dura semanas-meses, com melhora gradual"
],
fisio:"Resposta neurobiológica ao estressor inclui ativação do eixo HHA, modulação de monoaminas, reorganização cognitivo-emocional. PROCESSO ADAPTATIVO — distinto de psicopatologia. Distinção temporal e funcional crucial: resposta adaptativa tem trajetória de melhora; transtorno tem cronicidade e disfunção significativa.",
profilaxia:"Não há 'prevenção' de sofrimento normal — ele é parte da vida. Prevenção secundária do desenvolvimento de transtorno: rede de apoio, possibilidade de elaboração, validação da experiência, recursos materiais para enfrentar o estressor, espaço para vivência do sentimento.",
freire:"Aqui o trabalho freireano se realiza no seu mais alto grau. NÃO RECEITAR como reflexo. ESCUTAR sem pressa. Pergunte: 'Me conta o que aconteceu' / 'Como você está vivendo isso?' / 'O que sua família/amigos fazem?' / 'O que te ajudaria?'. Validar SEM minimizar ('é normal sentir isso, qualquer um sentiria') E SEM amplificar ('isso é grave, vamos investigar'). Reconhecer a HUMANIDADE da dor. Reconhecer também os recursos do paciente: 'o que já fez ajudou?'. Oferecer DISPONIBILIDADE: 'estou aqui, vamos seguindo juntos'. Pactuar retorno em 2-4 semanas — você não está abandonando, está respeitando o tempo natural do sofrimento. ESCUTA QUALIFICADA é a intervenção mais subvalorizada da medicina contemporânea.",
sus_tx:`MANEJO DO SOFRIMENTO NORMAL NA APS (P4 em ação):

A) DIFERENCIAR sofrimento normal de transtorno (sinais de ALARME que sugerem transtorno):
• Persistência além do esperado (luto: trajetória de melhora gradual em meses; depressão: cronicidade sem melhora)
• Funcionalidade significativamente comprometida por tempo prolongado
• Ideação suicida persistente / planejamento
• Sintomas psicóticos
• Auto-desvalorização generalizada (não só relacionada ao evento)
• Anedonia COMPLETA (sem momentos de respiro)
• Lentificação psicomotora marcada
• Culpa excessiva desproporcional

B) AÇÕES NA APS (sem medicar):
• ESCUTA QUALIFICADA — consulta longa quando possível (30-40 min)
• VALIDAR a experiência (sem julgamento, sem 'resolver')
• PSICOEDUCAR sobre processo normal de luto / sofrimento / adaptação
• RECONHECER os recursos próprios do paciente
• MOBILIZAR rede de apoio (família, amigos, comunidade, igreja se importante para o paciente)
• ORIENTAR autocuidado básico: alimentação, sono, hidratação, atividade leve
• OFERECER retornos planejados ('vou te ver em 2 sem para a gente continuar essa conversa')
• Encaminhar PSICÓLOGO NASF se disponível para apoio psicossocial
• Mobilizar ACS para acompanhamento territorial
• Mobilizar CRAS quando há necessidade material/social (sofrimento social)

C) QUANDO MEDICALIZAR (não default):
• Sofrimento que evoluiu para transtorno (critérios DSM/CID atendidos)
• Funcionalidade gravemente comprometida prolongadamente
• Risco de suicídio
• Insônia/ansiedade muito intensas QUE NÃO RESPONDEM a abordagem inicial: BZD de curta duração (≤2 sem) pode ser ponte
• Decisão SEMPRE compartilhada — explicar trade-off

D) REAVALIAÇÃO:
• 2-4 semanas — avaliar trajetória
• Continuidade do cuidado
• Reconhecimento de elaboração e resgate de recursos

E) RECONHECER OS LIMITES DA MEDICINA:
• Médico não 'resolve' luto, perda, decepção
• Comprimido não substitui elaboração
• Tempo é parte do tratamento`,
padrao_ouro:"Escuta qualificada + acompanhamento longitudinal + mobilização de rede de apoio + psicoterapia quando indicada é padrão de cuidado para sofrimento psíquico não-patológico. Intervenções comunitárias (grupos de luto, círculos terapêuticos) têm evidência crescente.",
prog:"Maioria dos sofrimentos não-patológicos evolui para elaboração e adaptação em semanas a meses. Apoio adequado acelera processo. Medicalização precoce pode interferir com elaboração natural e criar dependência iatrogênica.",
acomp:"Reavaliações em 2-4 sem inicialmente. Manter porta aberta. Reconhecer marcos de evolução. Não 'dar alta' precocemente — sofrimento pode reincidir em datas significativas (aniversário da perda).",
p4:"⚠⚠⚠ ESTE É O TEMA P4 POR EXCELÊNCIA NA SAÚDE MENTAL. ⚠ NÃO prescrever ISRS em luto recente sem critérios para transtorno depressivo. ⚠ NÃO prescrever BZD para 'aguentar o velório'. ⚠ NÃO patologizar climatério como 'depressão' automaticamente. ⚠ NÃO patologizar resposta emocional do desempregado, separado, vítima de violência. ⚠ Recusar prescrição autoritária NÃO É NEGAR CUIDADO — é cuidar com mais qualidade. ⚠ Comprimido pode silenciar sintomas, mas NÃO RESOLVE causa social/relacional/existencial. ⚠ Acolher a pressão familiar/social por 'um remédio' com diplomacia: 'vou te acompanhar, e se não melhorar a gente reavalia'. ⚠ Suprimir luto pode atrasar elaboração. ⚠ Reconhecer que ESCUTA é intervenção legítima, embora invisível em sistemas que pagam por procedimento.",
calcs:["phq9","audit-c"],
alertas:[
{tipo:"info",texto:"Sofrimento normal NÃO é diagnóstico — não medicalizar."},
{tipo:"warn",texto:"Sinais de alarme para transtorno: cronicidade, anedonia completa, ideação suicida persistente, sintomas psicóticos, disfunção marcada."},
{tipo:"crit",texto:"Ideação suicida em qualquer contexto: avaliar e abordar — não banalizar como 'fala de momento'."}
],
diretriz:"TMFC 2ª ed 2019 — capítulos de saúde mental e P4. Norman AH, Tesser CD. Prevenção Quaternária na Atenção Primária à Saúde. Cad. Saúde Pública 2009. Marc Jamoulle. P4 conceptualization. Movimento HumanizaSUS — PNH."
}

);
