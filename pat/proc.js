/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — pat/proc.js
   6 patologias
   Sistemas: proc
   =========================================================== */

PATOLOGIAS.push(

/* ============== PROC (6) ============== */

{id:"proc-acesso-central", contexto:["pa","ubs"], sis:"proc", grav:"alta",
nome:"Procedimento — Acesso Venoso Central (Seldinger)",
sin:["acesso central","cateter central","CVC","Seldinger","jugular","subclávia","femoral"],
def:"Punção e cateterização de veia central — geralmente jugular interna direita (1ª escolha eletiva em UTI), subclávia ou femoral. Indicações: drogas vesicantes, monitorização PVC, hemodiálise, NPP, acesso falho periférico, longa permanência.",

exames:[
"INDICAÇÕES: vasopressor, NPP, drogas irritantes, monitorização hemodinâmica, hemodiálise, marcapasso temporário",
"CONTRAINDICAÇÕES: infecção no sítio, coagulopatia grave (relativa), trombose conhecida do sítio",
"PREFERÊNCIAS: Jugular interna direita (mais segura, ECO-guiada); Subclávia (menos infecção mas mais pneumotórax); Femoral (emergência/PCR — alta infecção)",
],

rx:[
{etapa:"inicial", d:"1. CONSENTIMENTO + Conferência",do:"Identificação paciente, alergias, anticoag, plaqueta >50k, INR <2",via:"—",o:"Em PCR/emergência: post-hoc. Conferir lateralidade (direita preferida pela anatomia + RX inicial). Posicionar Trendelenburg 15° (jugular/subclávia) para distender veias."},
{etapa:"inicial", d:"2. ANTISSEPSIA + Campos estéreis",do:"Clorexidina alcoólica 2% × 30s + campo fenestrado amplo",via:"—",o:"Toque na pele com gaze estéril. Aguardar SECAR (eficácia depende). Paramentação: avental, máscara, óculos, gorro, luvas estéreis (full barrier — reduz CRBSI)."},
{etapa:"inicial", d:"3. ANESTESIA LOCAL",do:"Lidocaína 1% 5-10 mL infiltração subcutânea + planos profundos",via:"SC",o:"Botão dérmico + cone até o trajeto previsto. Aspirar antes de injetar (evitar IV)."},

{etapa:"escala", d:"4. ULTRASSOM (PADRÃO) — Mapeamento",do:"Sonda linear 5-12 MHz, axial sobre o trajeto",via:"—",o:"Identificar veia (compressível, sem pulsação, anecoica) versus artéria (pulsátil, não-comprime). Marcar pele OU manter visualização em tempo real durante punção (preferido — reduz complicações 70-80%)."},

{etapa:"escala", d:"5. PUNÇÃO — Jugular interna direita",do:"Aproximar a 30-45° da pele, ângulo lateral, ponta para o mamilo ipsilateral",via:"—",o:"Avançar enquanto aspira. Sangue VENOSO escuro fluindo facilmente. ARTERIAL = vermelho-vivo, pulsátil → SAIR + comprimir 10 min. Em USG: visualizar agulha entrando no lúmen da veia."},
{etapa:"escala", d:"5b. PUNÇÃO — Subclávia",do:"1 cm abaixo do ponto médio da clavícula, agulha paralela ao chão, direção fúrcula esternal",via:"—",o:"Avançar SOB clavícula (evitar pleura). Tunelizar sob a clavícula até retorno venoso. Risco: pneumotórax 1-3%. NÃO trocar tentativa do MESMO lado >2× (cumulativo)."},
{etapa:"escala", d:"5c. PUNÇÃO — Femoral",do:"2 cm abaixo do ligamento inguinal, 1 cm medial ao pulso femoral (NAVEL: Nervo-Artéria-Veia-Espaço-Linfático)",via:"—",o:"Avançar 30-45° em direção ao umbigo. Útil em PCR (não interfere RCP) ou emergência sem ECO. ALTA TAXA infecção — trocar para outro sítio em 24-72h."},

{etapa:"escala", d:"6. FIO GUIA (Seldinger)",do:"Passar fio J pela agulha — sem resistência",via:"—",o:"Se resistência = NÃO forçar (perfuração, posição errada). Reposicionar/repunção. Avançar fio ~20 cm para jugular direita. ECG: extrassístoles = fio no AD (recuar 2-3 cm)."},
{etapa:"escala", d:"7. DILATADOR + CATETER",do:"Remover agulha (mantendo fio), passar dilatador, depois cateter sobre fio",via:"—",o:"Manter SEMPRE o fio guia controlado. Dilatador penetra a pele + fáscia. Cateter avança até marcas (~15-17 cm jugular D em adulto médio)."},
{etapa:"escala", d:"8. CONFIRMAÇÃO",do:"Aspirar todas as vias (retorno venoso) + fluxo livre + fixar (sutura) + curativo",via:"—",o:"RX tórax obrigatório (jugular/subclávia) — confirmar ponta na VCS (carina) + excluir pneumotórax. NÃO usar antes do RX exceto emergência."},

{etapa:"adj", d:"COMPLICAÇÕES IMEDIATAS",do:"Pneumotórax (subclávia), hematoma, punção arterial, arritmia, embolia gasosa",via:"—",o:"Pneumotórax: dispneia/dor pleurítica/↓MV após procedimento → RX urgente. Punção arterial: COMPRIMIR 10 min + observar hematoma."},
{etapa:"adj", d:"COMPLICAÇÕES TARDIAS",do:"Infecção (CRBSI), trombose, estenose venosa",via:"—",o:"CRBSI: retirar cateter + hemocultura quantitativa + ATB. Trombose: heparina + retirar. Manter curativo limpo, trocar 7/7 dias."},
],

alertas:[
{t:"crit",x:"USG-GUIADO é PADRÃO em 2024 — reduz complicações 70-80%. Se sem ECO disponível: experiente + anatomia + cautela."},
{t:"crit",x:"NÃO USAR antes do RX (jugular/subclávia) — risco de infundir medicação em pleura/mediastino."},
{t:"warn",x:"Subclávia: NUNCA tentar bilateral no mesmo dia (pneumotórax bilateral = catastrófico)."},
{t:"warn",x:"Femoral: alto risco INFECÇÃO + TVP. Reservar para PCR, falha de outros sítios, ou trocar em 24-72h."},
{t:"info",x:"Anticoag/coagulopatia: jugular > subclávia (compressível). INR <2, plaq >50k geralmente OK."},
],

fisio:"Técnica Seldinger (1953): punção com agulha → fio guia → dilatador → cateter sobre fio. Reduz complicações vs. punção direta com cateter. USG transformou a prática: identificação de anatomia variante, anomalias, visualização em tempo real da agulha entrando no lúmen.",

mec:[],
diretriz:"Brass P et al., Cochrane 2015 (US-guidance). CDC Guidelines for Prevention of Intravascular Catheter-Related Infections 2017.",
fluxo:null,
calcs:[],
},
{id:"proc-iot", contexto:["pa","ubs"], sis:"proc", grav:"alta",
nome:"Procedimento — Intubação Orotraqueal (IOT)",
sin:["IOT","intubação","sequência rápida","RSI","via aérea"],
def:"Sequência rápida de intubação (RSI) — padrão-ouro em emergência. Preparação + pré-oxigenação + pré-medicação + indução + paralisia + intubação + confirmação + manutenção.",

exames:[
"INDICAÇÕES: falência respiratória, proteção via aérea (Glasgow ≤8, déficit motor), choque refratário, hipoxemia refratária (SpO₂ <90% c/ máscara), hipercapnia c/ acidose (pH<7,25), agitação que impede manejo",
"CONTRAINDICAÇÕES RELATIVAS: via aérea difícil prevista (LEMON), instabilidade hemodinâmica extrema (considerar ressuscitação primeiro)",
"AVALIAR VIA AÉREA DIFÍCIL — LEMON: Look (anatomia), Evaluate (3-3-2), Mallampati, Obstrução, Neck mobility",
],

rx:[
{etapa:"inicial", d:"1. PREPARAÇÃO (SOAPME)",do:"Sucção pronta + O2 + Airway tools (laringo+TOT) + Posicionamento + Monitorização + Equipamento",via:"—",o:"S = succion (cânula Yankauer testada); O = O2 (15L reservatório); A = airway (TOT 7.5-8.0 H, 7.0-7.5 M + Cuff testado + fio guia); P = positioning (sniff position, coxim occipital); M = monitor (PA, SpO2, ECG, capnografia); E = equipamento e drogas pré-calculadas + drogas resgate (atropina, adrenalina)."},

{etapa:"inicial", d:"2. PRÉ-OXIGENAÇÃO",do:"Máscara não-reinalante 15 L/min × 3-5 min OU 8 respirações de Vt máximo c/ O2 100%",via:"—",o:"Objetivo: SpO2 ≥95% + 'desnitrogenizar' (substituir N2 alveolar por O2 = reserva de O2 alveolar). Em obesos/hipoxêmicos: HEAD UP 25° + VNI 5 min OU cateter nasal alto fluxo (15L NRM + 15L cateter)."},

{etapa:"escala", d:"3. INDUÇÃO — Etomidato",do:"0,3 mg/kg IV (peso real)",via:"IV",o:"PADRÃO em hipotenso/instável. Vantagem: ↓PA mínima. Desvantagem: supressão adrenal transitória (1 dose = ok). Início 30-60s. Alternativas: cetamina 1-2 mg/kg IV (broncoespasmo, asma, choque), propofol 1,5-2,5 mg/kg IV (estáveis, neurológicos)."},
{etapa:"escala", d:"3b. INDUÇÃO — Cetamina (preferência em choque/asma)",do:"1-2 mg/kg IV",via:"IV",o:"NÃO baixa PA (libera catecolaminas), broncodilatador. CI relativa: HIC, IAM ativo. Início 30-60s."},
{etapa:"escala", d:"3c. INDUÇÃO — Propofol (estáveis)",do:"1,5-2,5 mg/kg IV",via:"IV",o:"Início rápido (15-30s), curta ação. CAUSA hipotensão (40-50%). Reduzir dose 30-50% em idoso/choque."},

{etapa:"escala", d:"4. PARALISIA — Succinilcolina",do:"1,5 mg/kg IV (peso real)",via:"IV",o:"PADRÃO se sem CI. Início 30-45s, duração 5-10 min. CI: hipercalemia conhecida (>5,5), suspeita rabdomiólise, queimaduras >48h, denervação >72h, hipertermia maligna prévia, miopatia, ↑PIC."},
{etapa:"escala", d:"4b. PARALISIA — Rocurônio",do:"1,2 mg/kg IV (dose RSI)",via:"IV",o:"ALTERNATIVA. Início 45-60s. Duração LONGA (45-90 min). Útil em CI succinilcolina. Antídoto: sugamadex 16 mg/kg IV (se disponível)."},

{etapa:"escala", d:"5. LARINGOSCOPIA + PASSAGEM TOT",do:"Pega laringoscópio MÃO ESQUERDA, abre boca com 'manobra dos dedos cruzados'",via:"—",o:"Lâmina (Macintosh 3-4 adulto), avança pela direita varrendo língua para esquerda, levanta no eixo do cabo (NÃO alavanca). Visualizar epiglote, depois cordas vocais (Cormack-Lehane). Passar TOT pela direita até cuff 1-2 cm além das cordas (~22-23 cm comissura labial em homens, 20-21 em mulheres). Insuflar cuff (cerca 5-10 mL ar)."},

{etapa:"escala", d:"6. CONFIRMAÇÃO",do:"Capnografia (gold standard) + ausculta 5 pontos + visualização do tubo entre as cordas",via:"—",o:"CAPNOGRAFIA EtCO2 >35 mmHg em ondas (≥6 ciclos) = confirma TOT em traqueia. Ausculta: epigástrio (silêncio), ápices, bases bilateral (MV simétrico). NÃO confiar só em ausculta — intubação esofágica pode ter 'falso MV'. RX tórax para confirmar posição (ponta TOT 2-4 cm acima da carina)."},

{etapa:"adj", d:"7. PÓS-INTUBAÇÃO — Sedação + Analgesia",do:"Midazolam 0,05-0,1 mg/kg/h + Fentanil 0,5-2 mcg/kg/h BIC",via:"IV",o:"Alvo RASS -2 a 0 na maioria. Cisatracúrio 0,15 mg/kg + 0,18 mg/kg/h se sd compartimental abdominal/SDRA grave/sincronia VM impossível."},
{etapa:"adj", d:"8. PARÂMETROS VM iniciais",do:"VCV: Vt 6 mL/kg peso PREDITO + PEEP 5-8 + FR 14-20 + FiO2 100% inicialmente",via:"VM",o:"Reduzir FiO2 para SpO2 ≥92-96%. Pplat <30. Driving pressure <15. Reavaliar gasometria em 30 min."},
{etapa:"adj", d:"9. Após procedimento",do:"RX tórax, gasometria, conferir cuff (20-30 cmH2O), aspirar secreções",via:"—",o:"Cabeceira 30° (prevenir PAV). Trocar fixação a cada 24h."},

{etapa:"alta", d:"COMPLICAÇÕES — Falha intubação",do:"Plano B: outra tentativa c/ ajuste de posição/lâmina/operador; máscara laríngea como ponte",via:"—",o:"Algoritmo difícil: <3 tentativas → dispositivos supraglóticos (LMA/i-gel) → cricotireoidostomia se CICO (Can't Intubate Can't Oxygenate)."},
{etapa:"alta", d:"COMPLICAÇÕES — Hipotensão pós-IOT",do:"Volume + noradrenalina + reduzir sedação",via:"IV",o:"Por: indução + ventilação positiva (↓retorno venoso) + alívio do estresse simpático. Comum, antecipável. Ter NE pronta."},
],

alertas:[
{t:"crit",x:"VIA AÉREA DIFÍCIL: SE PREVISTA → avaliar intubação acordada com videolaringo + sedação leve. Chamar mais experiente. Material de resgate à mão (BURP, bougie, máscara laríngea, kit cricotireoidostomia)."},
{t:"crit",x:"SUCCINILCOLINA está CONTRAINDICADA em: hipercalemia conhecida, rabdomiólise, queimaduras/trauma >48h, paraplegia/AVC >72h, hipertermia maligna, ↑PIC. Use rocurônio."},
{t:"crit",x:"PARADA CARDIORRESPIRATÓRIA pós-IOT: causa mais comum é HIPOTENSÃO (não hipoxia). Ter NE pronta + cristaloide + preparar adrenalina dose-resgate (10-50 mcg IV)."},
{t:"warn",x:"PRESSÃO CRICOIDE (Sellick) — controversa. Evidência fraca para prevenção de aspiração; pode dificultar visualização. NÃO obrigatória."},
{t:"info",x:"Capnografia é OBRIGATÓRIA para confirmação — método mais confiável. Sem capnografia → SpO2 mantida + ausculta + visualização."},
],

fisio:"RSI tem 7 P's: Preparation, Preoxygenation, Pretreatment (raramente usado hoje), Paralysis with induction, Position, Placement of tube, Postintubation management. A indução + paralisia simultâneas evitam ventilação manual (que distende estômago + aspiração). A janela apneica (entre paralisia e intubação) é a 'área crítica' — dependemos da pré-oxigenação para preservar SpO2.",

mec:[
{d:"Etomidato",x:"Agonista GABA-A. Vantagem: estabilidade hemodinâmica (↓PA mínima). Desvantagem: supressão adrenal transitória (24h após dose única — raramente clinicamente relevante)."},
{d:"Cetamina",x:"Antagonista NMDA. Libera catecolaminas endógenas → ↑PA + ↑FC + broncodilatação. 'Anestésico dissociativo'. CI relativa em HIC e IAM ativo."},
{d:"Propofol",x:"Agonista GABA-A. Início rápido, depuração rápida. Causa ↓PA dose-dependente (vasodilatação + ↓débito)."},
{d:"Succinilcolina",x:"Agonista nicotínico despolarizante. Causa contração transitória ('fasciculações') seguida de paralisia. Curta ação por hidrólise plasmática (pseudocolinesterase). Causa ↑K transitório de 0,5-1 mEq — perigoso em hipercalemia/rabdomiólise/queimadura/denervação (↑receptores extrajuncionais)."},
{d:"Rocurônio",x:"Antagonista nicotínico não-despolarizante. Doses altas (1,2 mg/kg) dão início rápido (45s) com longa duração. Sugamadex reverte completamente."},
],

diretriz:"Difficult Airway Society 2015. NAP4 (UK 2011). Brown CA — Manual of Emergency Airway Management 5ª ed.",
fluxo:null,
calcs:[],
},
{id:"proc-lp", contexto:["pa","ubs"], sis:"proc", grav:"alta",
nome:"Procedimento — Punção Lombar",
sin:["punção lombar","LP","raqui","análise LCR"],
def:"Punção do espaço subaracnóideo lombar para análise do LCR. Indicações: suspeita meningite/encefalite, HSA com TC normal, hipertensão intracraniana benigna, anestesia raquidiana.",

exames:[
"INDICAÇÕES: meningite/encefalite, HSA (TC <6h normal), HIC benigna (medida pressão), MS, polirradiculopatias",
"CONTRAINDICAÇÕES ABSOLUTAS: HIC com efeito de massa (herniação), infecção local, coagulopatia grave, instabilidade hemodinâmica",
"PRÉ: SEMPRE FUNDOSCOPIA + TC CRÂNIO se: ↓consc, déficit focal, papiledema, crise convulsiva recente, imunossuprimido, idade >60a",
],

rx:[
{etapa:"inicial", d:"1. CONFIRMAR AUSÊNCIA DE HIC",do:"Fundoscopia (papiledema?) + TC crânio",via:"—",o:"PUNCIONAR HIC = herniação cerebelar = morte. TC obrigatória nas indicações acima. Em jovem sem fatores de risco, fundoscopia normal: pode dispensar TC."},
{etapa:"inicial", d:"2. CONSENTIMENTO",do:"Explicar procedimento, riscos (cefaleia 30%, sangramento, infecção)",via:"—",o:"Cefaleia pós-LP é comum (40% se agulha Quincke, 10% se atraumática Whitacre/Sprotte). Usar atraumática quando disponível."},
{etapa:"inicial", d:"3. POSICIONAMENTO",do:"Decúbito lateral, joelhos no peito (posição fetal)",via:"—",o:"Maximiza abertura interespinhosa. ALTERNATIVA: sentado curvado para frente (não permite medir pressão de abertura — ficção)."},

{etapa:"escala", d:"4. LOCALIZAÇÃO",do:"L3-L4 ou L4-L5 (linha intercristal de Tuffier = L4)",via:"—",o:"Cone medular termina em L1-L2 — punção em L3-L5 é segura. Marcar com unha. Verificar simetria das EIPs."},
{etapa:"escala", d:"5. ANTISSEPSIA + CAMPOS",do:"Clorexidina + campos fenestrados",via:"—",o:"Procedimento ESTÉRIL — risco de meningite iatrogênica. Aguardar secar."},
{etapa:"escala", d:"6. ANESTESIA LOCAL",do:"Lidocaína 1% 3-5 mL — pele + SC + ligamento interespinhoso",via:"SC",o:"Botão + cone profundo. Aspirar antes de injetar."},

{etapa:"escala", d:"7. PUNÇÃO",do:"Agulha 22G atraumática — angulação 15° cefálica, em linha média",via:"—",o:"Bisel paralelo às fibras durais (longitudinal). Avançar lentamente — sente-se 'pop' ao atravessar duramáter. Retirar mandril a cada 1-2 cm. Quando sair LCR: parar."},

{etapa:"escala", d:"8. MEDIDA DA PRESSÃO DE ABERTURA",do:"Manômetro conectado, paciente RELAXADO + pernas estendidas",via:"—",o:"Normal: 6-20 cmH2O. HIC benigna: >25 cmH2O. ↑em meningite, HSA, tumor. Pressão SEM o paciente em posição fetal (estende pernas)."},

{etapa:"escala", d:"9. COLETA",do:"4 tubos × 1-2 mL cada",via:"Laboratório",o:"Tubo 1 — bioquímica (glicose, proteína); Tubo 2 — bacterioscopia/cultura/painel viral; Tubo 3 — celularidade + diferencial; Tubo 4 — reserva (xantocromia em HSA). Glicemia capilar simultânea (relação LCR/sérica)."},

{etapa:"adj", d:"10. REMOVER + CURATIVO",do:"Recolocar mandril + retirar agulha + curativo",via:"—",o:"Repouso pós-LP (1-2h) é controverso — evidência fraca. Atraumática + 22G reduz cefaleia."},

{etapa:"adj", d:"11. INTERPRETAÇÃO RÁPIDA",do:"Confronto: bacteriana vs viral vs HSA",via:"—",o:"BACTERIANA: turvo, ↑celular (neutrófilos), glic↓ (<40), prot↑ (>50). VIRAL: claro, mononuclear, glic normal, prot levemente↑. HSA: hemorrágico ou xantocrômico (>12h), eritrócitos NÃO clareiam tubo 1 ao 4 (DIFERENCIA de punção traumática)."},
],

alertas:[
{t:"crit",x:"NÃO PUNCIONAR se HIC com efeito de massa → herniação fatal. TC + fundoscopia ANTES nas indicações de risco."},
{t:"crit",x:"MENINGITE BACTERIANA: cobertura ATB EMPÍRICA antes da LP se houver atraso na LP. NÃO atrasar ATB para LP — TC + ATB + depois LP."},
{t:"warn",x:"Cefaleia pós-LP (CPLP): postural, 24-72h pós. Tratamento: repouso + hidratação + cafeína. Refratária: blood patch peridural."},
{t:"info",x:"PUNÇÃO TRAUMÁTICA: regra do '0,7' — para cada 700 eritrócitos, +1 leucócito permitido (corrige diluição sanguínea)."},
],

fisio:"LCR é produzido nos plexos coroides ventriculares (~500 mL/d, volume total ~150 mL). Circula ventrículos → cisternas → espaço subaracnoide → reabsorção pelas vilosidades aracnoides. Punção lombar acessa o LCR no saco dural lombar abaixo do cone medular (L1-L2 adultos).",

mec:[],
diretriz:"IDSA Bacterial Meningitis 2004. AAN Lumbar Puncture 2005.",
fluxo:null,
calcs:[],
},
{id:"proc-paracentese", contexto:["pa","ubs"], sis:"proc", grav:"media",
nome:"Procedimento — Paracentese",
sin:["paracentese","punção abdominal","ascite"],
def:"Punção da cavidade peritoneal para análise diagnóstica (PBE, etiologia) ou drenagem terapêutica de ascite tensa.",

exames:[
"INDICAÇÕES: ascite nova (diagnóstico), suspeita PBE (qualquer cirrótico c/ ascite + febre/dor/encefalopatia), ascite tensa sintomática",
"CONTRAINDICAÇÕES: relativas — gestação avançada (trocar local), aderências/cirurgia prévia, infecção local",
"PRÉ: USG abdome se possível, hemograma + INR (mas coagulopatia NÃO é CI absoluta em cirrótico)",
],

rx:[
{etapa:"inicial", d:"1. POSICIONAMENTO + ESCOLHA SÍTIO",do:"Decúbito dorsal levemente lateralizado para esquerda",via:"—",o:"Sítio preferido: FOSSA ILÍACA ESQUERDA — entre umbigo e EIAS, 1/3 lateral do trajeto. Evita ceco (à direita), fígado (linha média superior), cicatrizes."},
{etapa:"inicial", d:"2. USG (preferido)",do:"Confirmar líquido livre + evitar alças intestinais aderentes",via:"—",o:"Reduz complicações. USG marca melhor sítio se ascite localizada."},
{etapa:"inicial", d:"3. ANTISSEPSIA + CAMPO",do:"Clorexidina + campo fenestrado",via:"—",o:"Estéril. Luvas + máscara."},

{etapa:"escala", d:"4. ANESTESIA",do:"Lidocaína 1% 5-10 mL — pele + parede até peritônio",via:"SC",o:"Aspirar — líquido amarelo claro = peritônio com ascite. Confirma profundidade."},

{etapa:"escala", d:"5. TÉCNICA Z (evita escape de ascite)",do:"Tracionar pele lateralmente, então avançar agulha vertical — solta pele depois",via:"—",o:"Cria 'trajeto em zigue-zague' — quando retira agulha, pele/SC desalinham e fecham o orifício. Reduz extravasamento pós-procedimento."},

{etapa:"escala", d:"6. PUNÇÃO",do:"Cateter 16-18G (diagnóstico) ou 14-16G (terapêutico)",via:"—",o:"Avançar lentamente até retorno de líquido. Conectar a torneirinha 3 vias + seringa/sistema coletor."},

{etapa:"escala", d:"7. COLETA + AMOSTRAS",do:"30-50 mL para análise (diagnóstico)",via:"Laboratório",o:"OBRIGATÓRIO: contagem celular (neutrófilos ≥250/mm³ = PBE), albumina (GASA = alb sérica - alb ascite ≥1,1 = hipertensão portal), proteína total, cultura (frascos de hemocultura, 10 mL cada). Opcional: glicose, LDH, amilase, ADA."},

{etapa:"escala", d:"8. PARACENTESE TERAPÊUTICA",do:"Drenar até 5-10 L (ascite tensa)",via:"—",o:"Reposição de ALBUMINA: 6-8 g de albumina humana 20% por LITRO drenado > 5L. Previne disfunção circulatória pós-paracentese (PICD)."},

{etapa:"adj", d:"9. PÓS-PROCEDIMENTO",do:"Curativo oclusivo + observação 1-2h",via:"—",o:"Vigiar: hipotensão (PICD), hemorragia, infecção iatrogênica, extravasamento de líquido. Encaminhar resultados ao hepatologista."},
],

alertas:[
{t:"crit",x:"PBE (peritonite bacteriana espontânea): neutrófilos ≥250/mm³ → CEFTRIAXONA 2g IV 24/24h × 5 dias + albumina 1,5 g/kg dia 1 + 1 g/kg dia 3 (reduz síndrome hepatorrenal). NÃO esperar cultura."},
{t:"crit",x:"COAGULOPATIA do cirrótico NÃO é contraindicação absoluta. Risco hemorrágico é baixo (<1% mesmo com INR alto). Plaq <20k → considerar transfusão antes."},
{t:"warn",x:"REPOR ALBUMINA em paracentese terapêutica >5L: 6-8 g/L drenado. Reduz mortalidade."},
{t:"info",x:"GASA (Gradient Albumin Soro-Ascite) ≥1,1 = hipertensão portal (cirrose, IC, Budd-Chiari). <1,1 = outras causas (carcinomatose, TB, pancreatite)."},
],

fisio:"Ascite ocorre primariamente por: (1) hipertensão portal — cirrose (mais comum), trombose, IC; (2) hipoalbuminemia — síndrome nefrótica; (3) inflamação peritoneal — carcinomatose, TB, pancreatite. PBE em cirrótico: translocação bacteriana intestinal → ascite estéril vira infectada. Mortalidade 20-30%.",

mec:[],
diretriz:"AASLD Practice Guidance on Ascites 2021. EASL Cirrhosis 2018.",
fluxo:null,
calcs:[],
},
{id:"proc-toracico", contexto:["pa","ubs"], sis:"proc", grav:"alta",
nome:"Procedimento — Drenagem Torácica em Selo d'Água",
sin:["drenagem torácica","dreno de tórax","pneumotórax dreno","hemotórax dreno"],
def:"Inserção de tubo no espaço pleural para drenar ar (pneumotórax), sangue (hemotórax), líquido (derrame), pus (empiema). Padrão: 4°-5° EIC linha axilar média/anterior, lado afetado.",

exames:[
"INDICAÇÕES: pneumotórax >2cm/hipertensivo/sintomático/recidiva, hemotórax, derrame parapneumônico complicado, empiema, quilotórax, pós-operatório torácico",
"CONTRAINDICAÇÕES: relativas — aderências, coagulopatia. Em PNT hipertensivo: punção descompressiva ANTES",
"PRÉ: RX/TC tórax, hemograma + coag, marcar lado e sítio (CHECKLIST cirurgia segura)",
],

rx:[
{etapa:"inicial", d:"1. CONFIRMAR LADO + LOCAL",do:"Confirmar com paciente + RX + marcar com caneta",via:"—",o:"WRONG-SIDE DRAINAGE é evento grave evitável. Conferir LATERALIDADE 2× independentemente."},
{etapa:"inicial", d:"2. POSICIONAMENTO",do:"Decúbito dorsal, braço do lado afetado abduzido sobre cabeça",via:"—",o:"Expõe axila. Triângulo de segurança: borda lateral do peitoral maior (anterior), borda lateral do grande dorsal (posterior), linha do mamilo (inferior)."},
{etapa:"inicial", d:"3. ANTISSEPSIA + CAMPOS + EPI",do:"Clorexidina + campo fenestrado + paramentação completa",via:"—",o:"Procedimento ESTÉRIL. Avental, máscara, luvas."},

{etapa:"escala", d:"4. ANESTESIA LOCAL EXTENSA",do:"Lidocaína 1% 20-40 mL: pele → SC → periósteo costela → pleura",via:"SC/profunda",o:"BOTÃO dérmico + infiltrar trajeto até pleura parietal (muito sensível). Aspirar antes (excluir vaso). Confirmar profundidade do espaço pleural: aspira ar/líquido → marca profundidade na agulha."},

{etapa:"escala", d:"5. INCISÃO",do:"Bisturi #11 — incisão 2-3 cm horizontal, paralela à costela inferior",via:"—",o:"4°-5° EIC linha axilar média/anterior (mais comum) OU 2° EIC linha hemiclavicular (urgência PNT, mas deixa cicatriz visível). Apoiar dedo na pele para controle profundidade."},

{etapa:"escala", d:"6. DISSECÇÃO ROMBA + ENTRADA PLEURAL",do:"Pinça curva (Kelly) — dissecar até o ESPAÇO PLEURAL, sempre PASSANDO ACIMA da costela inferior (evitar feixe vasculonervoso intercostal)",via:"—",o:"Sentir 'pop' ao atravessar pleura parietal. Pode-se sentir saída de ar/líquido. Introduzir DEDO indicador para confirmar espaço pleural (palpar pulmão, aderências, baço, fígado)."},

{etapa:"escala", d:"7. INSERÇÃO DO DRENO",do:"Tubo 28-32 Fr (adulto) — guiar com pinça em direção apical (PNT) ou basal (líquido)",via:"—",o:"Avançar até última perfuração estar 2-3 cm dentro do tórax (~10-12 cm). Sentir resistência da parede contralateral = parar. EVITAR forçar (lesão pulmão/diafragma)."},

{etapa:"escala", d:"8. CONECTAR AO SELO D'ÁGUA",do:"Sistema com 3 frascos OU coletor descartável tipo Pleur-evac",via:"—",o:"Selo d'água: água destilada 2 cm acima do tubo curto = válvula unidirecional. PERMITE saída do tórax, IMPEDE retorno. Sucção opcional (-10 a -20 cmH2O) se persistir fuga."},

{etapa:"escala", d:"9. FIXAÇÃO + CURATIVO",do:"Sutura em 'U' (não em bolsa de tabaco) + curativo oclusivo",via:"—",o:"Sutura ancora o dreno + permite fechar quando retirar. Curativo gaze + esparadrapo (evitar oclusão completa para detectar enfisema subcutâneo)."},

{etapa:"adj", d:"10. CONFIRMAÇÃO + RX",do:"RX tórax IMEDIATA — confirmar posição + reexpansão pulmonar",via:"—",o:"Última perfuração DEVE estar intratorácica. Reexpansão: rever após 2-4h. Volume drenado: registrar de início + horária."},

{etapa:"alta", d:"RETIRADA — Critérios",do:"Sem oscilação por 24h + sem fuga aérea + drenagem <100-150 mL/d",via:"—",o:"Clampear 4-6h, RX, se mantido → retirar em expiração forçada (Valsalva) + sutura imediata + curativo oclusivo. RX controle 4-6h após."},
],

alertas:[
{t:"crit",x:"PNT HIPERTENSIVO: punção descompressiva (cateter 14G 2°EIC linha hemiclavicular) IMEDIATA antes de dreno definitivo. Não esperar RX."},
{t:"crit",x:"LADO ERRADO (wrong-site): CHECKLIST + MARCAÇÃO + TIME-OUT. Erros evitáveis."},
{t:"crit",x:"HEMOTÓRAX MACIÇO: >1500 mL imediato OU >200 mL/h × 4h → TORACOTOMIA. NÃO insistir só com dreno."},
{t:"warn",x:"Lesão do FEIXE INTERCOSTAL (artéria + veia + nervo): passar SEMPRE acima da costela inferior. Sangramento pode ser significativo."},
{t:"warn",x:"EDEMA DE REEXPANSÃO: drenar pneumotórax/derrame de longa data MUITO RÁPIDO → edema. Drenar não >1500 mL inicial + clampear se sintomas."},
],

fisio:"Pressão pleural normal: negativa (-3 a -5 cmH2O em inspiração). Pneumotórax: ar entra na pleura → pressão = atmosférica → pulmão colapsa. Hipertensivo: válvula unidirecional → ar acumula → desvio mediastino → ↓retorno venoso → choque. O selo d'água restaura a pressão negativa pleural, permitindo reexpansão.",

mec:[],
diretriz:"BTS Pleural Disease Guideline 2023. ATLS 10ª ed.",
fluxo:null,
calcs:[],
},
{id:"proc-toracocentese", contexto:["pa","ubs"], sis:"proc", grav:"media",
nome:"Procedimento — Toracocentese",
sin:["toracocentese","punção pleural","drenagem pleural diagnóstica"],
def:"Punção do espaço pleural com agulha para análise diagnóstica (transudato vs exsudato) ou drenagem terapêutica de derrame.",

exames:[
"INDICAÇÕES: derrame pleural novo significativo (diagnóstico), derrame sintomático (terapêutica)",
"CONTRAINDICAÇÕES: relativas — coagulopatia (INR>2, plaq<50k), derrame muito pequeno (<1 cm na lateral), infecção local",
"PRÉ: RX/USG tórax (preferir USG-guiado), hemograma + coag",
],

rx:[
{etapa:"inicial", d:"1. POSICIONAMENTO",do:"Sentado, inclinado para frente, braço apoiado em mesa",via:"—",o:"Posição ótima — derrame se concentra na base. Alternativa: lateral oposta se sentar impossível."},
{etapa:"inicial", d:"2. USG-guiado (PREFERIDO)",do:"Marcar sítio de maior coleção, longe do diafragma + pulmão",via:"—",o:"USG reduz complicações 70%. Identifica baço/fígado adjacente (evita perfuração). Marcar entre 7° e 9° EIC posterior."},
{etapa:"inicial", d:"3. ANTISSEPSIA + Campos",do:"Clorexidina + campo fenestrado",via:"—",o:"Procedimento estéril. EPI básico (luvas, máscara)."},

{etapa:"escala", d:"4. ANESTESIA LOCAL",do:"Lidocaína 1% 10-20 mL: pele → SC → periósteo → pleura",via:"SC/profunda",o:"Aspirar continuamente — ao chegar no espaço pleural, aspira-se líquido = confirma profundidade. Marca a profundidade na agulha."},

{etapa:"escala", d:"5. PUNÇÃO",do:"Cateter 18G longo conectado a torneirinha 3 vias + seringa",via:"—",o:"Avançar SEMPRE ACIMA da costela inferior (feixe intercostal abaixo). Em expiração suspensa do paciente. Quando aspira líquido → introduzir cateter + remover agulha."},

{etapa:"escala", d:"6. DRENAGEM",do:"Conectar a frasco/seringa + drenar 30-50 mL (diagnóstico) OU até 1500 mL (terapêutico)",via:"—",o:"NÃO >1500 mL de uma vez — risco de edema de reexpansão (especialmente derrame de longa duração). Pausar se tosse/dor torácica/dispneia."},

{etapa:"adj", d:"7. AMOSTRAS (sempre coletar)",do:"Bioquímica (proteína, LDH, glicose, pH), citológico, microbiologia (Gram, cultura, BAAR se suspeita TB)",via:"Laboratório",o:"Critérios de LIGHT (≥1 = exsudato): prot pleura/sérica >0,5; LDH pleura/sérica >0,6; LDH pleural >2/3 LSN sérico. Outros úteis: ADA (TB), amilase (pancreatite/ruptura esôfago), pH <7,2 (parapneumônico complicado)."},
{etapa:"adj", d:"8. PÓS-PROCEDIMENTO",do:"RX tórax (excluir pneumotórax iatrogênico) + observar 1h",via:"—",o:"Pneumotórax 5-15% (sem USG; <5% com USG). Maioria não necessita drenagem."},
],

alertas:[
{t:"crit",x:"PNEUMOTÓRAX iatrogênico em 5-15% (sem USG). RX obrigatório após. Drenar apenas se grande/sintomático."},
{t:"warn",x:"EDEMA DE REEXPANSÃO se >1500 mL — limitar volume + retirada gradual."},
{t:"info",x:"DERRAME PARAPNEUMÔNICO COMPLICADO: pH<7,2, glic<60, LDH>1000, Gram/cultura+ → DRENO TORÁCICO (não só toracocentese)."},
],

fisio:"Espaço pleural normal contém ~10-20 mL de líquido seroso (lubrificação). Derrame: acúmulo de líquido. Critérios de Light determinam mecanismo (transudato — alteração de pressão hidrostática/oncótica; exsudato — inflamação, infiltração, infecção).",

mec:[],
diretriz:"BTS Pleural Disease Guideline 2023.",
fluxo:null,
calcs:[],
},
);
