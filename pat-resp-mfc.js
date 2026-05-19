/* ===========================================================
   VOVÔMINIC DOUTÔ — pat/resp-mfc.js
   Resp MFC — SAOS (Apneia Obstrutiva do Sono)
   Sistema: resp
   Fonte: AASM 2024, ATS 2024, ABS, TMFC 2ª ed
   =========================================================== */

PATOLOGIAS.push(

/* ============================================================
   SAOS — Síndrome da Apneia Obstrutiva do Sono
   ============================================================ */
{
id:"saos", contexto:["ubs"], nome:"Síndrome da Apneia Obstrutiva do Sono (SAOS) — Abordagem MFC",
sis:"resp", grav:"media",
cid:"G47.33", ciap:"P06",
sin:["SAOS","apneia do sono","ronco","apneia obstrutiva","CPAP","poligrafia","polissonografia","SAOS"],
def:"Distúrbio respiratório do sono caracterizado por episódios repetidos de obstrução parcial (hipopneia) ou total (apneia) das vias aéreas superiores durante o sono, com queda de saturação de O2 e despertares. Diagnóstico: polissonografia (PSG) ou poligrafia respiratória domiciliar — IAH (Índice de Apneia-Hipopneia): leve 5-15, moderado 15-30, grave >30 eventos/h. Critérios: IAH ≥5 com sintomas, OU IAH ≥15 mesmo sem sintomas.",
intro:"SAOS é altamente prevalente (10-30% em adultos com obesidade) e SUBDIAGNOSTICADA. MFC: rastrear em pacientes de risco (obeso, ronco, sonolência diurna, HAS de difícil controle, FA, AVE, IC), aplicar questionários validados (STOP-BANG, Berlim, Epworth), encaminhar para polissonografia, articular tratamento com CPAP em diagnóstico confirmado (geralmente via especialista do sono ou pneumo). Tratamento de SAOS reduz mortalidade CV, melhora QV, controle de HAS, segurança no trânsito.",
fisio:"Colapso recorrente das VAS durante sono → obstrução → ↓saturação O2 → microdespertar (não-percebido pelo paciente) → re-abertura → ciclo. Fatores anatômicos (orofaringe estreita, micrognatia, retrognatia, hipertrofia tonsilar, macroglossia, obesidade — gordura cervical) + neuromusculares (perda de tônus muscular faríngeo no sono REM). Consequências: hipoxemia intermitente → estresse oxidativo, inflamação sistêmica → HAS refratária, FA, IC, AVE, RCV elevado, fadiga crônica, sonolência diurna (risco de acidentes), depressão.",
apresentacao:"Homem (2:1 em meia-idade; iguala pós-menopausa em mulher) com obesidade, ronco RUIDOSO HABITUAL (testemunhado pela parceira ou parceiro), pausas respiratórias presenciadas (a pessoa que dorme com ele relata 'ele para de respirar e depois engasga'), sonolência diurna excessiva (escala de Epworth ≥10), fadiga crônica, dificuldade de concentração, irritabilidade, cefaleia matinal, despertar com sufocação, noctúria.",
sintomas:[
"Ronco RUIDOSO HABITUAL (todas as noites, escutado por outros)",
"Pausas respiratórias TESTEMUNHADAS",
"Sufocação/engasgo durante o sono (paciente acorda assustado)",
"Sonolência DIURNA EXCESSIVA — Epworth ≥10 (queda em situações que não deveria — dirigindo, em reunião, lendo)",
"Sono NÃO-RESTAURADOR — acorda cansado mesmo após 8h",
"Cefaleia matinal (pela acidose noturna)",
"Noctúria, boca seca matinal",
"Irritabilidade, depressão, perda de concentração, perda de memória",
"Comorbidades associadas: HAS resistente, FA, IC, AVE, RCV, DM2, esteatose hepática",
],
profilaxia:"Manejo de fatores precipitantes: perda de peso (eficácia COMPROVADA — perda de 10% reduz IAH em até 50%), evitar álcool/sedativos à noite (relaxam VAS), evitar dormir em decúbito dorsal (SAOS posicional pode melhorar em decúbito lateral — 'shirt-tennis ball' técnica), cessação tabágica, higiene do sono. Tratamento de rinite alérgica/desvio de septo que pioram a obstrução.",
freire:"SAOS frequentemente é subestimada — paciente acha que ronco é 'normal'. Educar: 'ronco não é normal — é sinal de obstrução parcial. Pausas respiratórias são doença grave, com efeitos no coração, na pressão, no humor, na memória, na segurança ao volante. Vamos investigar.' Em paciente com HAS resistente: identificar SAOS como CAUSA frequente e reversível. Em paciente com sonolência ao volante: alertar SEM julgar, intervenção urgente (CPAP). Tratamento com CPAP exige adesão — desafio: educar sobre benefício, suporte técnico (ajuste de máscara, umidificador), persistência nos primeiros meses. Em paciente que recusa CPAP: oferecer alternativas (orthese intra-oral, perda de peso, cirurgia em casos selecionados).",
sus_tx:"AVALIAÇÃO: Aplicar STOP-BANG (8 itens — score ≥3 = risco intermediário, ≥5 = alto risco) ou Berlim. Escala de Epworth (sonolência). Encaminhar para POLISSONOGRAFIA (PSG) ou poligrafia respiratória — disponível variável no SUS, geralmente via referência (pneumologia, neurologia do sono, centros especializados). Em alguns lugares, poligrafia domiciliar simplificada está disponível. Diagnóstico confirmado: tratamento conforme gravidade. SAOS LEVE (IAH 5-15) com sintomas: começar com MEV (perda de peso, posicional, álcool, higiene do sono); CPAP se sintomas persistentes ou comorbidade CV importante; orthese mandibular como opção. SAOS MODERADO-GRAVE (IAH >15): CPAP é tratamento de ESCOLHA — fornece pressão positiva contínua que mantém VAS abertas. CPAP via SUS: variável por município — algumas SES fornecem (via APAC), em outras particular ou parcial pelo paciente. Acompanhamento da adesão (download de dados do aparelho, % uso ≥4h/dia, IAH residual). Articulação com pneumologia/centro do sono. Em refratariedade ou em paciente que NÃO tolera CPAP: orthese intra-oral (odontologia do sono), uvulopalatofaringoplastia (UPPP — eficácia limitada em adulto), avanço maxilo-mandibular (cirurgia maxilofacial), implante hipoglosso (alta tecnologia).",
padrao_ouro:"Acrescenta: BiPAP em casos selecionados (SAOS + componente central, SAOS + DPOC); ASV (servo-ventilação adaptativa) em apneia central; orthese intra-oral feita sob medida (odontologia do sono); cirurgia robótica de VAS (TORS); estimulação do nervo hipoglosso (Inspire®); medicamentos novos em estudo (atomoxetina + oxibato sódico para sonolência residual; tirzepatida para obesidade-induzida).",
prog:"Não-tratada: ↑risco CV (HAS, FA, IAM, AVE), ↑risco acidentes (5-7× mais acidentes de trânsito), ↑mortalidade. Tratada com CPAP em adesão adequada: redução de sonolência, melhora cognitiva, melhora controle de HAS, redução de eventos CV em SAOS grave.",
acomp:"Após início de CPAP: reavaliar em 1-3 meses (eficácia, adesão, tolerância à máscara). Estável: anual ou conforme problema. Reavaliar peso (perda de peso pode mudar pressão necessária), sintomas, adesão. Reavaliar PSG se mudança clínica significativa, perda de peso importante (pode permitir desmame de CPAP), sintomas recorrentes.",
p4:"NÃO indicar UPPP rotineira em adulto — eficácia limitada em SAOS moderado-grave (não cura SAOS sistemicamente, pode até piorar — cirurgia desfavorece em alguns casos). NÃO indicar fitoterápicos 'para o sono' (camomila, valeriana — sem efeito sobre SAOS). NÃO usar sedativo-hipnótico em SAOS não-tratada (piora obstrução). NÃO indicar polissonografia em todo paciente que tem ronco SEM SINTOMAS ou fatores de risco — apenas se sintomas + alto risco no questionário.",
alertas:[
{nivel:"crit", txt:"⚠ Sonolência ao volante = risco DE ACIDENTE grave (5-7× mais frequente em SAOS não-tratada). Em motorista profissional ou paciente que dirige longas distâncias: encaminhar URGÊNCIA para diagnóstico e CPAP. Recomendar evitar dirigir até diagnóstico/tratamento. CFM tem normativa específica."},
{nivel:"crit", txt:"⚠ SAOS + HAS RESISTENTE (3+ drogas em dose máxima sem controle): SAOS é a CAUSA mais comum de HAS resistente — investigar SEMPRE. Tratamento de SAOS pode reduzir 5-15 mmHg em PA."},
{nivel:"warn", txt:"SAOS + sedativos/álcool/opioides à noite: PIORA obstrução, ↑risco de eventos respiratórios graves. Em paciente cirúrgico: cuidado redobrado com sedação peri-operatória — informar anestesista."},
{nivel:"warn", txt:"Em obesidade + sonolência diurna: pode ser SAOS, mas também síndrome de obesidade-hipoventilação (SOH) — PaCO2 elevado no dia, mais grave, exige BiPAP."},
{nivel:"warn", txt:"Em criança/adolescente com ronco habitual + sonolência + comportamento alterado: investigar SAOS (frequentemente por hipertrofia adenotonsilar). Encaminhar otorrino — adenotonsilectomia é tratamento de escolha em criança."},
{nivel:"info", txt:"STOP-BANG ≥3: risco intermediário; ≥5: alto risco — encaminhar para polissonografia. Acrónimo: Snoring, Tired, Observed apnea, Pressure (HAS), BMI>35, Age>50, Neck>40cm, Gender male."},
{nivel:"info", txt:"Adesão a CPAP em primeiro mês PREDIZ adesão a longo prazo. Apoio nos primeiros meses (acompanhamento próximo, ajuste de máscara, umidificador, ajuste de pressão) faz toda a diferença. NÃO desistir cedo."},
],
diretriz:"[AASM 2017 Clinical Practice Guideline for Diagnostic Testing for Adult Obstructive Sleep Apnea + atualizações 2024] [ABS — Diretriz Brasileira da SBPT/SBN para SAOS 2024] [USPSTF 2022 — não rastrear em assintomático sem fatores de risco] [TMFC 2ª ed, cap. sono] [DUNCAN 5ª ed, cap. distúrbios do sono]"
},

);
