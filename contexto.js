/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — pat/infecto.js
   23 patologias
   Sistemas: infecto
   =========================================================== */

PATOLOGIAS.push(

/* ============== INFECTO (23) ============== */

{
  id:"abscesso", contexto:["pa","ubs"], sis:"infecto", grav:"media",
  nome:"Furúnculo / Abscesso Cutâneo",
  sin:["abscesso","furúnculo","drenagem"],
  def:"Coleção purulenta cutânea/subcutânea — dor, flutuação, calor.",
  exames:["Clínico","Cultura do material se grave/recidiva"],
  rx:[
    {etapa:"escala", d:"Drenagem cirúrgica (I&D)",do:"Incisão + drenagem",via:"—",o:"PRINCIPAL conduta. Anestesia local. Curativo com mecha."},
    {etapa:"atb", d:"Clindamicina",do:"300–450 mg VO 6/6h × 7 dias",via:"VO",o:"Cobertura MRSA comunitário. Se febre, celulite ao redor, imunossuprimido."},
    {etapa:"atb", d:"SMX-TMP",do:"800/160 mg 12/12h × 7 dias",via:"VO",o:"Alternativa MRSA."},
  ],
  alertas:[
    {t:"info",x:"Abscesso simples sem celulite: drenagem PODE ser suficiente sem ATB (eficácia 80%)."},
  ],
  fisio:"Folículo piloso ou solução de continuidade → infecção → necrose → coleção purulenta. S. aureus (frequente MRSA comunitário em algumas regiões).",
  mec:[
    {d:"Clindamicina",x:"Liga 50S ribossomal — inibe síntese proteica. Boa contra MRSA comunitário e anaeróbios."},
  ],
  diretriz:"IDSA SSTI 2014.",
  calcs:[],
},
{id:"abscesso-peri", contexto:["pa","ubs"], sis:"infecto", grav:"media",
nome:"Abscesso Periamigdaliano (Quinsy)",
sin:["abscesso periamigdaliano","Quinsy","peritonsilar"],
def:"Coleção purulenta entre cápsula amigdaliana e músculo constrictor superior. Complicação de amigdalite — odinofagia intensa unilateral + voz 'em batata quente' + trismo + desvio da úvula + abaulamento do pilar amigdaliano + linfadenopatia cervical. Mais comum em adultos jovens.",
exames:["Diagnóstico CLÍNICO — visualização do abaulamento + trismo + desvio úvula","HMG, PCR (leucocitose com desvio)","Hemoculturas se sepse","Cultura material drenado","TC pescoço com contraste se: complicação suspeita (extensão parafaríngea, Lemierre)"],
rx:[
{etapa:"escala", d:"DRENAGEM CIRÚRGICA",do:"Punção aspirativa OU incisão + drenagem com bisturi",via:"—",o:"PILAR. Anestesia local (xilocaína spray 10% + lidocaína injetável). OTORRINO ou emergencista experiente."},
{etapa:"atb", d:"Ceftriaxona + Clindamicina",do:"1-2 g IV + 600 mg IV 8/8h",via:"IV",o:"Cobertura aerobios (Strep) + anaeróbios (Fusobacterium, Prevotella). MS-aprovado."},
{etapa:"atb", d:"Ampicilina-sulbactam",do:"3 g IV 6/6h",via:"IV",o:"Alternativa monoterápica. Ou amoxicilina-clavulanato 1g VO 8/8h após melhora."},
{etapa:"adj", d:"Corticoide",do:"Dexametasona 10 mg IV dose única",via:"IV",o:"Reduz edema + odinofagia + tempo internação. Evidência crescente."},
{etapa:"escala", d:"Hidratação",do:"SF 0,9% — paciente geralmente desidratado (não engole)",via:"IV",o:""},
{etapa:"adj", d:"Analgesia",do:"Dipirona + tramadol; eventualmente morfina",via:"IV",o:"Dor intensa."},
{etapa:"escala", d:"Tonsilectomia (à quente)",do:"Procedimento eletivo após resolução",via:"Cirúrgico",o:"Recorrente (≥2 episódios) ou complicação tonsilar — eletiva. 'À quente' = durante episódio, controversa."},
],
alertas:[
{t:"crit",x:"COMPLICAÇÕES TEMÍVEIS: extensão para espaço parafaríngeo → mediastinite descendente; Sd. de Lemierre (tromboflebite jugular interna por Fusobacterium); aspiração do conteúdo abscesso → pneumonia/SDRA."},
{t:"crit",x:"Trismo grave + estridor + sialorreia = obstrução via aérea iminente — IOT com cuidado (preferencialmente acordada/fibroscopia)."},
{t:"warn",x:"Diferenciar de amigdalite simples (sem abaulamento, úvula central, trismo leve)."},
],
fisio:"Inflamação periamigdaliana progride para abscesso loculado entre a cápsula amigdaliana e músculo constrictor superior. Polimicrobiana — Strep do grupo A (40-50%), anaeróbios (Fusobacterium, Prevotella, Peptostreptococcus). Tratamento pode incluir só drenagem agulha + ATB, sem incisão.",
mec:[],
diretriz:"IDSA Guidelines on Pharyngitis. UpToDate.",
fluxo:null, calcs:[],
},
{
  id:"celulite", contexto:["pa","ubs"], sis:"infecto", grav:"media",
  nome:"Celulite / Erisipela",
  sin:["celulite","erisipela","linfangite"],
  def:"Eritema + calor + edema + dor cutânea, geralmente em MMII. Erisipela: bordas nítidas, superficial. Celulite: profunda, bordas pouco definidas.",
  exames:["Hemograma, PCR","Função renal","HMC se febre/grave","Excluir TVP (Doppler) e outras causas de \"perna vermelha\""],
  rx:[
    {etapa:"atb", d:"LEVE/AMBULATORIAL — Cefalexina",do:"500 mg VO 6/6h × 7–10 dias",via:"VO",o:"Boa cobertura Staph + Strep."},
    {etapa:"atb", d:"AMBULATORIAL — Amoxicilina-clavulanato",do:"875/125 mg 12/12h × 7 dias",via:"VO",o:"Alternativa."},
    {etapa:"escala", d:"MODERADA/INTERNADO — Oxacilina",do:"2 g IV 4/4h × 7–14 dias",via:"IV",o:"Boa cobertura S. aureus meticilino-sensível."},
    {etapa:"atb", d:"MODERADA — Cefazolina",do:"1–2 g IV 8/8h",via:"IV",o:"Alternativa à oxacilina, mais barata."},
    {etapa:"escala", d:"Suspeita MRSA",do:"Vancomicina 15 mg/kg 12/12h OU Clindamicina 600 mg 8/8h",via:"IV",o:"Hospitalar, drenagem, hist. MRSA."},
    {etapa:"escala", d:"Elevação do membro",do:"30°",via:"—",o:"Reduz edema."},
  ],
  alertas:[
    {t:"crit",x:"FASCEÍTE NECROTIZANTE: dor desproporcional + bolha hemorrágica + necrose + crepitação + toxemia. Cirurgia URGENTE + ATB amplo."},
  ],
  fisio:"Invasão bacteriana através de solução de continuidade da pele (porta de entrada — fissura interdigital frequente). S. aureus e S. pyogenes mais comuns.",
  mec:[
    {d:"Cefalexina/Cefazolina",x:"Cefalosporina 1G — inibe PBPs Gram-positivas."},
  ],
  diretriz:"IDSA SSTI (Stevens DL et al., CID 2014;59:e10–e52).",
  imgs:[
    {src:"https://upload.wikimedia.org/wikipedia/commons/5/5c/Cellulitis_Left_Leg.JPG",
     alt:"Celulite em MI esquerdo",
     caption:"Celulite em MI esquerdo — eritema, edema, calor, com bordas MAIS DIFUSAS que erisipela (que tem bordas elevadas e bem delimitadas).",
     source:"Wikimedia Commons (CC BY-SA 2.5)"},
    {src:"https://upload.wikimedia.org/wikipedia/commons/6/6a/Necrotizing_fasciitis_left_leg.JPEG",
     alt:"Fasceíte necrotizante em MI",
     caption:"FASCEÍTE NECROTIZANTE — eritema com áreas escuras de necrose e bolhas hemorrágicas. EMERGÊNCIA cirúrgica + ATB amplo.",
     source:"Wikimedia Commons / Piotr Smuszkiewicz et al. (CC BY 2.0)"},
  ],
  calcs:[],
},
{id:"chagas-aguda", contexto:["pa","ubs"], sis:"infecto", grav:"alta",
nome:"Doença de Chagas Aguda",
sin:["Chagas","tripanossomíase americana","Trypanosoma cruzi"],
def:"Infecção aguda por T. cruzi. Transmissão BR atual: VIA ORAL (açaí, caldo de cana contaminados — surtos), vetorial (barbeiro — raro), vertical, transfusional. Sintomas: febre + edema palpebral unilateral (Sinal de Romaña) OU chagoma de inoculação + miocardite. Notificação compulsória.",

exames:[
"HMG (linfomonocitose)",
"Pesquisa direta de parasita: sangue periférico (gota espessa, esfregaço), creme leucocitário — 1ª escolha em aguda",
"Xenodiagnóstico ou hemocultura (positivos em aguda)",
"Sorologia IgM (precoce) + IgG (tardia)",
"PCR (centros referência)",
"ECG (alterações repolarização, BAV, distúrbios de condução)",
"Ecocardiograma (miocardite — disfunção ventricular)",
"Função renal/hepática",
],

rx:[
{etapa:"inicial", d:"NOTIFICAÇÃO COMPULSÓRIA — SINAN",do:"Imediata",via:"—",o:"Investigação fonte (transmissão oral por surto requer investigação intensiva)."},
{etapa:"inicial", d:"Suporte",do:"Repouso, hidratação, monitorização cardíaca",via:"—",o:"Em miocardite: UTI."},

{etapa:"atb", d:"1ª LINHA — Benznidazol",do:"5-7 mg/kg/d VO em 2 doses × 60 dias",via:"VO",o:"PADRÃO. Disponível SUS. CI: gestante. Efeitos adversos: rash (frequente), neuropatia periférica, leucopenia, hepatite."},
{etapa:"atb", d:"ALTERNATIVA — Nifurtimox",do:"8-10 mg/kg/d VO em 3-4 doses × 60-90 dias",via:"VO",o:"Disponível MS (fora SUS comum). Mais efeitos adversos GI."},
{etapa:"atb", d:"GESTANTE",do:"Suspender tratamento até pós-parto + amamentação",via:"—",o:"Benznidazol/nifurtimox contraindicados na gestação. Newborn deve ser investigado e tratado se infectado (sucesso >90% em RN)."},

{etapa:"escala", d:"MIOCARDITE AGUDA — Suporte",do:"Tratamento de IC, antiarrítmico, marcapasso se BAV",via:"—",o:"Causa #1 de óbito agudo. Hospitalização. Diurético + IECA + β-bloq conforme."},
{etapa:"escala", d:"MENINGOENCEFALITE — Anticonvulsivante",do:"Fenitoína/levetiracetam + tratamento empírico",via:"IV",o:"Mais comum em imunossuprimidos. Suporte UTI."},

{etapa:"adj", d:"Hemograma seriado",do:"Cada 15 dias durante tratamento",via:"—",o:"Benznidazol pode causar leucopenia/agranulocitose. Suspender se neutrófilos <1500."},
{etapa:"adj", d:"Acompanhamento",do:"Sorologia anual (cura comprovada por seroconversão)",via:"—",o:"Pode levar 2-3 anos para negativar. PCR + sorologia."},
],

alertas:[
{t:"crit",x:"FORMA AGUDA tem 5-10% mortalidade por MIOCARDITE ou MENINGOENCEFALITE. Tratamento PRECOCE (<12 sem) — cura >70%."},
{t:"crit",x:"TRANSMISSÃO ORAL (açaí, caldo de cana, sopa de milho): SURTOS familiares/comunitários. Investigar contactantes."},
{t:"warn",x:"BENZNIDAZOL é tóxico em 20-30%: rash (manejar com anti-H1; suspender se Stevens-Johnson), neuropatia periférica (irreversível parcial), leucopenia."},
{t:"info",x:"Diferencial: dengue, malária, viroses inespecíficas, hepatite viral aguda. Romaña + epidemiologia → Chagas."},
],

fisio:"T. cruzi entra por mucosa/pele lesada → tripomastigotas migram para coração + fígado + baço → diferenciam em amastigotas intracelulares → proliferam → ruptura celular → fase aguda (parasitemia alta, sintomas). Maioria evolui para fase crônica indeterminada (assintomática). 30% desenvolvem cardiopatia chagásica crônica (10-30 anos) — IC, arritmia, morte súbita. 10% megacólon/megaesôfago.",

mec:[
{d:"Benznidazol",x:"Pró-droga ativada por nitrorredutases do parasita → radicais livres → dano DNA tripanossomal. Seletividade limitada (toxicidade humana)."},
],

diretriz:"MS — Protocolo Clínico Doença de Chagas 2019. PCDT MS. WHO Chagas Disease 2024.",
fluxo:null,
calcs:[],
},
{
  id:"conjuntivite", contexto:["pa","ubs"], sis:"infecto", grav:"baixa",
  nome:"Conjuntivite",
  sin:["conjuntivite","olho vermelho"],
  def:"Hiperemia conjuntival + secreção. Viral: serosa, bilateral, autolimitada. Bacteriana: purulenta. Alérgica: prurido + bilateral.",
  exames:["Acuidade visual","Excluir sinais de gravidade: dor, fotofobia, ↓visão, anisocoria, hipópio"],
  rx:[
    {etapa:"escala", d:"VIRAL — Lágrima artificial",do:"4–6×/d",via:"Tópico",o:"Autolimitada (7–14 dias). Compressas frias. Higiene."},
    {etapa:"atb", d:"BACTERIANA — Tobramicina",do:"1 gota 4/4h × 5–7 dias",via:"Tópico",o:"Ciprofloxacino é alternativa."},
    {etapa:"escala", d:"ALÉRGICA — Olopatadina",do:"1 gota 12/12h",via:"Tópico",o:"Anti-H1 tópico."},
  ],
  alertas:[
    {t:"crit",x:"SINAIS DE GRAVIDADE (\"olho vermelho perigoso\"): ↓acuidade visual, dor intensa, fotofobia, hipópio, anisocoria, halo. Considerar úlcera córnea, uveíte, glaucoma agudo, escleirite — encaminhar oftalmo URGENTE."},
  ],
  fisio:"Viral: adenovírus mais comum. Bacteriana: Staph, Strep, H. influenzae. Alérgica: hipersensibilidade tipo I.",
  mec:[],
  diretriz:"AAO Conjunctivitis PPP 2018.",
  calcs:[],
},
{id:"covid", contexto:["pa","ubs"], sis:"infecto", grav:"media",
nome:"COVID-19 (SARS-CoV-2)",
sin:["covid","coronavírus","SARS-CoV-2"],
def:"Infecção viral respiratória — sintomas variam de assintomático a SDRA. Quadros: leve (sintomas sem hipoxemia), moderado (pneumonia sem hipoxemia), grave (SpO₂ <94%, FR ≥30, infiltrados >50%), crítico (IRespA, choque, MOF).",
exames:["RT-PCR ou antígeno SARS-CoV-2","RX/TC tórax (vidro fosco bilateral periférico)","HMG (linfopenia), PCR, D-dímero, ferritina, LDH","Gaso arterial","ECG, troponina"],
rx:[
{etapa:"inicial", d:"O₂ suplementar",do:"Cânula → máscara → cateter alto fluxo → VNI → IOT conforme gravidade",via:"—",o:"Alvo SpO₂ 92-96% (gestantes 94-98%). Pronar acordado se SpO₂ <94% em O₂."},
{etapa:"inicial", d:"Dexametasona",do:"6 mg VO/IV/d × 10 dias",via:"VO/IV",o:"INDICADA APENAS se uso de O₂. RECOVERY: reduz mortalidade 36%→29% em VM. NÃO em leves."},
{etapa:"anticoag", d:"Anticoagulação profilática",do:"Enoxaparina 40 mg SC/d (plena se TEV/D-dímero ↑↑)",via:"SC",o:"INTERNADOS — todos. CIVD/TEV comum."},
{etapa:"escala", d:"Tocilizumabe",do:"8 mg/kg IV (máx 800 mg)",via:"IV",o:"Hipoxemia + ↑PCR — disponibilidade SUS limitada."},
{etapa:"inicial", d:"Nirmatrelvir/Ritonavir (Paxlovid)",do:"300/100 mg VO 12/12h × 5 dias",via:"VO",o:"Alto risco + sintomas <5d + sem O₂. Múltiplas interações medicamentosas."},
],
alertas:[
{t:"crit",x:"DETERIORAÇÃO TARDIA (dia 7-10) — jovem aparentemente bem pode descompensar para SDRA. Vigilância SpO₂."},
{t:"crit",x:"Hidroxicloroquina, ivermectina, azitromicina monoterapia, cloroquina, nitazoxanida NÃO TÊM EFICÁCIA comprovada. NÃO prescrever."},
{t:"warn",x:"COVID longo: persistência >12 sem — fadiga, dispneia, déficit cognitivo. Encaminhar especialista."},
],
fisio:"SARS-CoV-2 entra via receptor ACE2 (epitélio respiratório + endotélio + intestino + rim + miocárdio). Tempestade de citocinas → SDRA + microtrombos + miocardite + IRA. Vacinas + Ômicron alteram apresentação (mais leve, menos anosmia).",
mec:[
{d:"Dexametasona",x:"Anti-inflamatório — reduz tempestade de citocinas tardia. Útil APENAS quando há inflamação significativa (uso de O₂)."},
{d:"Nirmatrelvir",x:"Inibidor da protease principal (Mpro) do SARS-CoV-2 — bloqueia clivagem de poliproteínas virais. Ritonavir é booster (inibe CYP3A4)."},
],
diretriz:"NIH COVID-19 Treatment Guidelines (atualização contínua). MS Brasil. WHO Living Guidance.",
fluxo:null, calcs:[],
},
{
  id:"dengue", contexto:["pa","ubs"], sis:"infecto", grav:"alta",
  nome:"Dengue (MS 2024 — Grupos A/B/C/D)",
  sin:["dengue","arbovírus"],
  def:"Febre + 2 de: cefaleia, dor retro-orbitária, mialgia, artralgia, prostração, exantema. Classificação MS por gravidade clínica.",
  exames:["Hemograma com plaquetas (TODOS — repetir em B/C/D)","NS1 (1º–5º dia), IgM/IgG (após 6º)","Função renal/hepática, eletrólitos","Prova do laço, hematócrito"],
  rx:[
    {etapa:"inicial", d:"GRUPO A (sem alarme, sem comorbidade)",do:"Hidratação oral 60 mL/kg/d (1/3 SRO + 2/3 água)",via:"VO",o:"Ambulatorial. Reavaliação D3 e D5 ou se sinais de alarme."},
    {etapa:"escala", d:"GRUPO B (sangramento de pele OU comorbidade)",do:"Hidratação + obs até resultado HMG",via:"VO/IV",o:"Hemograma obrigatório. Se Ht ↑ ou plaquetopenia: hidratação parenteral 25 mL/kg em 4h."},
    {etapa:"escala", d:"GRUPO C (sinais de alarme)",do:"SF 0,9% 10 mL/kg em 1h",via:"IV",o:"INTERNAR. Repetir até 3× se necessário. Reavaliar Ht 2h depois."},
    {etapa:"escala", d:"GRUPO D (choque/sangramento grave/disfunção)",do:"SF 0,9% 20 mL/kg em 20 min",via:"IV",o:"UTI. Repetir 2–3×. Albumina/coloide se refratário. Hemocomponentes."},
    {etapa:"adj", d:"Analgesia/antitérmico",do:"Paracetamol 500–1000 mg 6/6h ou dipirona",via:"VO/IV",o:"NÃO usar AINE/AAS (risco sangramento)."},
  ],
  alertas:[
    {t:"crit",x:"SINAIS DE ALARME: dor abdominal intensa, vômitos persistentes, acúmulo de líquidos, hipotensão postural, hepatomegalia >2 cm, sangramento de mucosa, letargia, ↑Ht progressivo."},
    {t:"crit",x:"SINAIS DE CHOQUE: extremidades frias, pulso filiforme, enchimento capilar >2s, PA convergente <20 mmHg, taquicardia, oligúria, hipotensão tardia, cianose."},
    {t:"warn",x:"Condições especiais (grupo B independente): <2a, gestante, ≥65a, HAS, DM, DPOC/asma, obesidade, anemia falciforme, DRC, hepatopatia."},
  ],
  fisio:"Após inoculação pelo Aedes aegypti (DENV 1–4), o vírus replica em monócitos/macrófagos → viremia (3–7 dias) → resposta inflamatória sistêmica + <strong>aumento de permeabilidade vascular</strong> (extravasamento plasmático) + <strong>plaquetopenia</strong> (medular + consumo + Ac antiplaqueta) + disfunção hepática. Pico de gravidade entre D4-D6, com a defervescência → fase crítica.",
  mec:[],
  diretriz:"Manejo Clínico da Dengue — Ministério da Saúde, 6ª ed. 2024 (gov.br/saude/dengue). Classificação grupos A/B/C/D.",
  fluxo:"dengue",
  calcs:[],
},
{id:"erisipela", contexto:["pa","ubs"], sis:"infecto", grav:"media",
nome:"Erisipela",
sin:["erisipela"],
def:"Infecção da derme superficial + linfáticos — placa eritematosa BEM DELIMITADA, calor, dor, edema, ± febre + linfangite. Diferente de celulite (mais profunda, limites menos nítidos). MMII 70%, face 5%.",
exames:["Diagnóstico CLÍNICO","HMG + PCR se sistêmico","Hemoculturas se sepse","USG se suspeita abscesso"],
rx:[
{etapa:"atb", d:"Penicilina G Benzatina",do:"1.200.000 UI IM dose única",via:"IM",o:"1ª LINHA — Strep pyogenes. Não-graves, ambulatorial."},
{etapa:"atb", d:"Cefalexina",do:"500 mg VO 6/6h × 7-10 dias",via:"VO",o:"Ambulatorial. Cobre Strep + S. aureus."},
{etapa:"atb", d:"Penicilina G cristalina",do:"4 milhões UI IV 4/4h",via:"IV",o:"Internação — face, imunossuprimido, sepse, falha VO."},
{etapa:"atb", d:"Clindamicina",do:"600-900 mg IV 8/8h",via:"IV",o:"Alergia à penicilina."},
{etapa:"escala", d:"Suporte",do:"Elevação MMII + repouso + analgesia + marcação bordes",via:"—",o:"Caneta para avaliar progressão."},
{etapa:"adj", d:"Profilaxia secundária",do:"Pen G Benzatina 1.2 mi IM 21/21 dias × 6-12m",via:"IM",o:"Recorrentes (≥2/ano) + linfedema."},
],
alertas:[
{t:"crit",x:"FACE: risco trombose seio cavernoso. ATB IV + monitorização."},
{t:"crit",x:"Diferenciar de FASCEÍTE NECROTIZANTE: dor desproporcional, bolhas, crepitação, necrose, sepse — emergência cirúrgica."},
{t:"warn",x:"Porta de entrada: micose interdigital (tinea pedis) é #1 em MMII. TRATAR para prevenir recidiva."},
],
fisio:"Strep beta-hemolítico A (Strep pyogenes); raramente outras Strep ou S. aureus. Entra por solução de continuidade e dissemina pela derme + linfáticos. Hialuronidase + estreptocinase facilitam disseminação.",
mec:[{d:"Penicilina G",x:"β-lactâmico — inibe transpeptidação na parede bacteriana. Strep pyogenes mantém sensibilidade quase universal."}],
diretriz:"IDSA SSTI 2014 (Stevens DL et al., CID 2014;59:e10, DOI:10.1093/cid/ciu444).",
fluxo:null, calcs:[],
imgs:[
{src:"https://upload.wikimedia.org/wikipedia/commons/1/1c/Erysipel.JPG",
alt:"Erisipela — placa eritematosa bem delimitada",
caption:"Erisipela — placa eritematosa bem delimitada, edema, com bordas elevadas. CHAVE: bordas BEM DEFINIDAS distinguem de celulite.",
source:"Wikimedia Commons / Mahmoudalrawi (CC BY-SA 3.0)"},
],
},
{
  id:"fasceite", contexto:["pa","ubs"], sis:"infecto", grav:"alta",
  nome:"Fasceíte Necrotizante",
  sin:["fasceíte","fasceíte necrosante","Fournier"],
  def:"Infecção rapidamente progressiva da fáscia + tecido subcutâneo + necrose. Mortalidade 25–40% mesmo com tratamento.",
  exames:["LRINEC score","Hemograma, PCR, Cr, glicemia, Na, Hb (compõem LRINEC)","Lactato","Imagem (TC) — gás na fáscia"],
  rx:[
    {etapa:"escala", d:"Cirurgia URGENTE",do:"Desbridamento amplo, repetir 24–48h",via:"—",o:"PILAR do tratamento. Cada hora de atraso ↑mortalidade. Múltiplas reabordagens."},
    {etapa:"atb", d:"Piperacilina-tazobactam + Vancomicina + Clindamicina",do:"4,5g 6/6h + 15mg/kg 12/12h + 900 mg 8/8h",via:"IV",o:"Cobertura amplíssima. Clindamicina inibe produção de toxina."},
    {etapa:"atb", d:"Meropenem",do:"1 g IV 8/8h",via:"IV",o:"Alternativa ao piperacilina-tazo em alergia/MR."},
    {etapa:"escala", d:"Suporte intensivo",do:"UTI + vasopressor",via:"—",o:"Sepse grave/choque séptico associado em maioria."},
  ],
  alertas:[
    {t:"crit",x:"Dor DESPROPORCIONAL ao exame físico, bolha hemorrágica, crepitação, anestesia cutânea → SUSPEITAR FASCEÍTE. Cirurgia em <12h."},
  ],
  fisio:"Infecção polimicrobiana (tipo I) ou monomicrobiana por S. pyogenes (tipo II) → liberação de toxinas e enzimas → trombose vascular fascial → isquemia → necrose progressiva.",
  mec:[
    {d:"Clindamicina",x:"<strong>Inibe síntese de toxinas</strong> bacterianas (estreptocócica, estafilocócica) — papel adjuvante essencial."},
  ],
  diretriz:"IDSA SSTI 2014; WSES Necrotizing Soft Tissue Infections 2018.",
  calcs:[],
},
{id:"febre-amarela", contexto:["pa","ubs"], sis:"infecto", grav:"alta",
nome:"Febre Amarela",
sin:["febre amarela","FA","yellow fever"],
def:"Arbovirose causada pelo vírus da febre amarela (Flavivirus). Forma silvestre (BR — macacos + Aedes/Haemagogus) vs urbana (Aedes aegypti — erradicada no BR desde 1942). Notificação compulsória IMEDIATA.",

exames:[
"HMG (leucopenia com linfocitose relativa)",
"Função hepática (AST > ALT > 1000, sinal Faget=bradicardia c/ febre alta)",
"Função renal (IRA em casos graves)",
"Coagulograma (CIVD)",
"Bilirrubinas (icterícia tardia)",
"PCR vírus (1ºs 5 dias) ou sorologia IgM (>5 dias)",
"Diferencial: leptospirose, malária, dengue, hepatite viral",
],

rx:[
{etapa:"inicial", d:"NOTIFICAÇÃO IMEDIATA — SINAN",do:"Compulsória em <24h",via:"—",o:"Suspeita gera ação epidemiológica (vacinação, vigilância)."},
{etapa:"inicial", d:"Suporte",do:"Hidratação cautelosa, monitorização hepática/renal",via:"IV",o:"NÃO HÁ ANTIVIRAL ESPECÍFICO."},

{etapa:"escala", d:"GRAVE — UTI + suporte multissistêmico",do:"VM, hemodiálise, hemoderivados",via:"—",o:"Mortalidade da forma grave: 20-50%."},
{etapa:"escala", d:"Coagulopatia",do:"PFC + plaquetas + vit K",via:"IV",o:"Sangramento (hematêmese, melena) é típico em fase intoxicação. Transfusão guiada."},
{etapa:"escala", d:"Transplante hepático",do:"Critérios King's College em centro referência",via:"Cirúrgico",o:"Considerar em fulminante."},

{etapa:"adj", d:"Antipiréticos",do:"Dipirona, paracetamol",via:"IV/VO",o:"NÃO AAS, NÃO AINEs (sangramento, hepatotoxicidade)."},
{etapa:"adj", d:"VACINAÇÃO pós-alta (não-imunes)",do:"FA fracionada/integral SC",via:"SC",o:"PREVENÇÃO. Recomenda-se reforço a cada 10 anos em áreas endêmicas (BR-MS reverteu para dose única em 2017 — controverso)."},
],

alertas:[
{t:"crit",x:"FORMA GRAVE: icterícia + hemorragias + IRA + acidose + ↓consciência. Mortalidade 20-50%. UTI obrigatória."},
{t:"crit",x:"SINAL DE FAGET: bradicardia + febre alta = sugere FA (diferencial com sepse comum)."},
{t:"warn",x:"DIFERENCIAL: leptospirose, malária, hepatite viral fulminante, sepse, dengue grave."},
{t:"warn",x:"VACINA é PREVENÇÃO. Em surto/área endêmica: vacinação massiva. Contraindicações: <6 meses, gestante, imunossuprimido grave, alergia ovo."},
],

fisio:"Vírus replica em linfonodos regionais → viremia → fígado (alvo principal — necrose hepatocelular massiva), rim (NTA), miocárdio, SNC. 3 fases: (1) Infecção (3 dias: febre, mialgia, cefaleia), (2) Remissão (poucas horas — engana), (3) INTOXICAÇÃO (15% — icterícia + hemorragias + IRA + choque + coma).",

mec:[],
diretriz:"MS — Guia de Vigilância Febre Amarela 2024. WHO Yellow Fever 2024.",
fluxo:null,
calcs:[],
},
{id:"hanseniase-reacao", contexto:["pa","ubs"], sis:"infecto", grav:"media",
nome:"Hanseníase em Reação",
sin:["hanseníase","lepra","reação reversa","eritema nodoso hansênico"],
def:"Episódios inflamatórios agudos em paciente com hanseníase, com ou sem tratamento. Reação TIPO 1 (reversa, mediada por células — exacerba lesões existentes) ou TIPO 2 (eritema nodoso hansênico, imunocomplexos — múltiplos nódulos + sintomas sistêmicos). Notificação compulsória.",

exames:[
"Avaliação dermatológica + neurológica completa (déficit motor/sensitivo periférico)",
"Baciloscopia (linfa de lóbulo da orelha, cotovelos, lesão)",
"HMG, função renal/hepática (pré-uso medicamentos)",
"Pesquisa M. leprae em fragmento",
"Histopatologia (granuloma)",
],

rx:[
{etapa:"inicial", d:"NOTIFICAÇÃO COMPULSÓRIA",do:"Hanseníase: SINAN",via:"—",o:"Caso novo + casos em reação. Acompanhamento sob notificação."},
{etapa:"inicial", d:"MANTER PQT (poliquimioterapia)",do:"Não suspender o tratamento anti-hanseníase em reação",via:"VO",o:"Reação NÃO é falha do tratamento — é resposta imune. Manter PQT-MB (rifampicina + dapsona + clofazimina) ou PQT-PB conforme classificação."},

{etapa:"escala", d:"REAÇÃO TIPO 1 — Prednisona",do:"1-1,5 mg/kg/d VO, desmame lento 6-12 meses",via:"VO",o:"PADRÃO. Reduz inflamação celular. Iniciar dose alta, desmame muito lento (dependência fenômeno-de-rebote). Monitorar diabetes, HAS, infecção."},
{etapa:"escala", d:"REAÇÃO TIPO 2 leve — Talidomida",do:"100-400 mg/d VO, desmame conforme",via:"VO",o:"TRATAMENTO DE ESCOLHA TIPO 2 — anti-inflamatório imunomodulador. CRÍTICO: NUNCA em gestante (teratogenicidade — focomelia). Teste β-HCG mensal. Cadastro obrigatório no programa de talidomida."},
{etapa:"escala", d:"REAÇÃO TIPO 2 grave — Talidomida + Prednisona",do:"Talidomida 100-300 mg/d + prednisona 0,5-1 mg/kg/d",via:"VO",o:"Casos graves com neurite, irite, orquite, glomerulonefrite."},
{etapa:"escala", d:"GESTANTE — Prednisona",do:"1 mg/kg/d × tempo necessário",via:"VO",o:"NÃO talidomida (teratogênica)."},

{etapa:"escala", d:"NEURITE AGUDA",do:"Prednisona dose máxima + imobilização membro + corticoide local se necessário",via:"VO",o:"Risco de dano neural permanente. Avaliar motor/sensitivo seriado."},
{etapa:"escala", d:"IRITE / IRIDOCICLITE",do:"Colírio corticoide + midriático + oftalmo",via:"Tópico",o:"Risco de glaucoma + cegueira. Avaliação oftalmológica urgente."},

{etapa:"adj", d:"Tratamento sintomático",do:"AINE (cuidado renal), analgesia",via:"VO",o:"Para conforto. NÃO trata reação em si."},
{etapa:"adj", d:"Acompanhamento de contactantes",do:"Vacina BCG + exame anual",via:"—",o:"Familiares devem ser examinados e BCG ofertada (reforço se já vacinado)."},
],

alertas:[
{t:"crit",x:"NEURITE em reação = DANO PERMANENTE possível em horas-dias. Prednisona dose máxima IMEDIATA + acompanhamento neurológico seriado."},
{t:"crit",x:"TALIDOMIDA é TERATOGÊNICA — focomelia. PROIBIDA em gestante. Mulher fértil → contracepção dupla + β-HCG mensal. Cadastro obrigatório."},
{t:"warn",x:"PREDNISONA prolongada (6-12m): efeitos adversos (DM, HAS, osteoporose, infecção, catarata). Monitorar."},
{t:"info",x:"REAÇÃO pode ocorrer ANTES, DURANTE ou APÓS o tratamento anti-hanseníase. Não significa falha. Manter PQT."},
],

fisio:"Reação Tipo 1 (Reversa): hipersensibilidade tipo IV (celular) — exacerba lesões existentes, edema, dor nas placas. Pode causar neurite por inflamação dos nervos periféricos. Reação Tipo 2 (Eritema Nodoso Hansênico): imunocomplexos circulantes (tipo III) — múltiplos nódulos dolorosos + sintomas sistêmicos (febre, mal-estar) + neurite + irite + orquite + nefrite. Mais comum em formas multibacilares.",

mec:[
{d:"Talidomida",x:"Imunomodulador — inibe TNF-α, modula citocinas. Mecanismo da teratogenicidade: liga-se a cereblon, altera ubiquitinação → embriopatia (membros)."},
{d:"Prednisona",x:"Anti-inflamatório amplo via receptor glicocorticoide."},
],

diretriz:"MS — Guia para Vigilância, Atenção e Eliminação da Hanseníase 2022. WHO Leprosy 2024.",
fluxo:null,
calcs:[],
},
{
  id:"herpes-simples", contexto:["pa","ubs"], sis:"infecto", grav:"baixa",
  nome:"Herpes Simples",
  sin:["herpes","HSV-1","herpes labial"],
  def:"Vesículas dolorosas em pele/mucosa. HSV-1: oro-labial. HSV-2: genital. Pode disseminar em imunossuprimidos.",
  exames:["Diagnóstico clínico"],
  rx:[
    {etapa:"atb", d:"Aciclovir VO",do:"400 mg 8/8h × 7–10 dias",via:"VO",o:"Primário ou recorrência grave."},
    {etapa:"atb", d:"Valaciclovir VO",do:"500 mg–1 g 12/12h × 5–10 dias",via:"VO",o:"Alternativa."},
    {etapa:"atb", d:"Aciclovir tópico",do:"5×/d × 4 dias",via:"Tópico",o:"Herpes labial leve — benefício marginal."},
  ],
  alertas:[
    {t:"warn",x:"Herpes oftálmico: emergência. Encaminhar oftalmo."},
  ],
  fisio:"Reativação viral no gânglio sensitivo (HSV-1: trigeminal; HSV-2: sacral) → migração axonal → vesículas mucocutâneas.",
  mec:[
    {d:"Aciclovir",x:"Inibe DNA-polimerase viral após fosforilação por TK viral."},
  ],
  diretriz:"CDC STI 2021; PCDT-IST MS 2022.",
  calcs:[],
},
{id:"influenza", contexto:["pa","ubs"], sis:"infecto", grav:"media",
nome:"Influenza / SRAG",
sin:["influenza","gripe","H1N1","SRAG"],
def:"Síndrome gripal: febre + tosse + dor garganta + cefaleia/mialgia abruptos. SRAG: dispneia + SpO₂ <95%. Sazonal. Tipos A (H1N1, H3N2 — mais graves), B.",
exames:["PCR influenza A/B (gold standard)","Teste rápido antigênico (S 60-70%)","RX tórax","HMG, gaso"],
rx:[
{etapa:"atb", d:"Oseltamivir",do:"75 mg VO 12/12h × 5 dias",via:"VO",o:"Idealmente <48h. Em GRAVES: usar mesmo após 48h."},
{etapa:"atb", d:"Oseltamivir UTI",do:"150 mg VO 12/12h × 10 dias (dobrada)",via:"VO",o:"Evidência fraca de superioridade — algumas diretrizes endossam."},
{etapa:"adj", d:"Dipirona/Paracetamol",do:"500-1000 mg",via:"VO/IV",o:"NÃO AAS em <16a (Reye)."},
{etapa:"inicial", d:"O₂ + suporte",do:"VM protetora se SDRA",via:"—",o:"IOT precoce em piora rápida."},
{etapa:"escala", d:"ATB superinfecção",do:"Ceftriaxona 2g + azitromicina 500 mg IV",via:"IV",o:"Recidiva febril → S. aureus, pneumococo, Strep A."},
],
alertas:[
{t:"crit",x:"GRUPOS DE RISCO P/ ANTIVIRAL: gestantes, puérperas <6 sem, <2a, ≥60a, comorbidades (DM, cardiopatia, obesidade, imunosupressão), indígenas."},
{t:"crit",x:"H1N1 pode causar SDRA fulminante em jovens — não subestimar dispneia."},
{t:"warn",x:"Diferencial: COVID, RSV, parainfluenza. PCR painel é definitivo."},
],
fisio:"Vírus RNA. Replica em epitélio respiratório → necrose + inflamação. Sintomas sistêmicos por citocinas (IFN-α, IL-6, TNF). Complicações: pneumonia bacteriana secundária (S. aureus, pneumococo — causa #1 morte), miocardite, encefalite, Reye, Guillain-Barré.",
mec:[
{d:"Oseltamivir",x:"Inibidor neuraminidase — enzima viral que libera novas partículas da célula infectada. Inibição → vírus 'preso'."},
],
diretriz:"MS — Protocolo Influenza 2023. IDSA Seasonal Influenza 2018 (Uyeki TM et al., CID 2019;68:e1).",
fluxo:null, calcs:[],
},
{id:"leishmaniose-visc", contexto:["pa","ubs"], sis:"infecto", grav:"alta",
nome:"Leishmaniose Visceral (Calazar)",
sin:["leishmaniose visceral","calazar","Leishmania","kala-azar"],
def:"Infecção sistêmica por Leishmania chagasi/infantum, transmitida pelo mosquito-palha (Lutzomyia longipalpis). Pancitopenia + hepatoesplenomegalia + febre + emagrecimento. Endêmica no Nordeste e periferias urbanas em expansão. Notificação compulsória.",

exames:[
"HMG (PANCITOPENIA — tríade hipercaracterística: anemia + leucopenia + plaquetopenia)",
"VHS elevadíssima",
"Hipergamaglobulinemia + hipoalbuminemia (relação invertida)",
"Função renal/hepática (LDH, AST normais a leves)",
"Sorologia (RIFI, ELISA, teste rápido rK39)",
"Pesquisa direta: aspirado de medula óssea (gold standard) ou esplênico (raro)",
"PCR (centros referência)",
"HIV (coinfecção comum, agrava prognóstico)",
],

rx:[
{etapa:"inicial", d:"NOTIFICAÇÃO COMPULSÓRIA — SINAN",do:"Imediata",via:"—",o:"Investigação caso + ações de bloqueio (controle vetor, exame contactantes)."},
{etapa:"inicial", d:"Suporte",do:"Transfusão CH se Hb <7, plaquetas se sangramento, nutrição",via:"IV",o:"Internação obrigatória em casos graves."},

{etapa:"atb", d:"1ª LINHA — Anfotericina B LIPOSSOMAL",do:"3 mg/kg/d IV × 7 dias (total 21 mg/kg)",via:"IV",o:"PADRÃO no BR — alta eficácia, menor toxicidade. ↓Mortalidade vs Glucantime. Disponível SUS."},
{etapa:"atb", d:"ALTERNATIVA — Antimoniato meglumina (Glucantime)",do:"20 mg Sb⁵⁺/kg/d IV/IM × 20-30 dias (máx 3 ampolas/d)",via:"IV/IM",o:"Tradicional, mais tóxico (cardiotoxicidade, pancreatite, nefro/hepatotoxicidade). ECG seriado obrigatório. CI: gestante, criança <1a, cardiopata, insuficiência hepática/renal."},
{etapa:"atb", d:"Anfotericina B convencional",do:"1 mg/kg/d IV × 14 dias",via:"IV",o:"Alternativa em centros sem lipossomal. MUITO mais tóxica (calafrio, IRA, hipocalemia)."},
{etapa:"atb", d:"HIV+ — Lipossomal",do:"3 mg/kg/d × 10 dias (total 40 mg/kg)",via:"IV",o:"Doses maiores. Pode recidivar — profilaxia secundária mensal indicada."},

{etapa:"escala", d:"SUPORTE GERAL",do:"Hidratação, nutrição, ATB se infecção secundária",via:"—",o:"Maioria dos óbitos: infecção bacteriana 2ª (pneumonia, ITU, sepse). Cobrir empiricamente em febre+pancitopenia."},

{etapa:"adj", d:"Reposição albumina/transfusão",do:"PFC, CH, plaquetas conforme",via:"IV",o:"Albumina baixa = edema, ascite. Coagulopatia possível."},
{etapa:"adj", d:"Acompanhamento pós-tratamento",do:"6-12 meses, atenção a recidivas",via:"—",o:"Cura geralmente em 6-12 meses. Recidiva pode ocorrer, especialmente HIV+."},
],

alertas:[
{t:"crit",x:"MORTALIDADE: 5-10% mesmo tratado, >90% sem tratamento. Pancitopenia + infecção secundária = causa #1 óbito. Cobertura ATB empírica liberal."},
{t:"crit",x:"GLUCANTIME tem cardiotoxicidade — ECG basal + seriado. QT longo, T inversão. Suspender se alteração."},
{t:"warn",x:"COINFECÇÃO HIV — sempre testar. Calazar HIV+: mais recidivas, menor cura, maior mortalidade. Profilaxia secundária mensal."},
{t:"info",x:"DIFERENCIAL: leucemia, linfoma, brucelose, esquistossomose hepatoesplênica, tuberculose miliar, HIV avançado."},
],

fisio:"Leishmania chagasi → mosquito flebotomíneo → fagocitada por macrófagos → vive intracelularmente em forma amastigota → proliferação em sistema retículo-endotelial (medula, baço, fígado) → infiltração + supressão hematopoiética + ativação imune crônica (hipergamaglobulinemia) → caquexia + imunossupressão progressiva.",

mec:[
{d:"Anfotericina B (lipossomal)",x:"Liga-se a ergosterol da membrana do parasita → poros → lise. Lipossomal direciona ao SRE (alto carregamento de parasitas)."},
{d:"Glucantime (antimoniato)",x:"Inibe metabolismo energético de Leishmania (glicólise, oxidação ácidos graxos). Não totalmente elucidado. Cardiotóxico."},
],

diretriz:"MS — Manual de Vigilância e Controle da Leishmaniose Visceral 2014. WHO Leishmaniases 2010.",
fluxo:null,
calcs:[],
},
{id:"leptospirose", contexto:["pa","ubs"], sis:"infecto", grav:"alta",
nome:"Leptospirose",
sin:["leptospirose","doença de Weil","febre dos arrozais","febre dos pântanos"],
def:"Zoonose por Leptospira spp. (espiroquetal). Contato com água/lama/solo contaminado por URINA DE RATO. Quadros: leve (febre + mialgia em panturrilhas + cefaleia) → grave (Síndrome de Weil: icterícia + IRA + hemorragia pulmonar). Pós-enchente é cenário clássico. Notificação compulsória.",

exames:[
"HMG (leucocitose com desvio, plaquetopenia importante)",
"Função renal (IRA dialítica comum — frequente hipocalemia)",
"Função hepática (icterícia mista — bili direta e indireta altas; TGO/TGP geralmente <500)",
"CK (mialgia → rabdomiólise)",
"Urinálise (proteinúria, leucocitúria estéril, hematúria)",
"Gaso, eletrólitos",
"Sorologia ELISA IgM (a partir do 7º dia) — confirmatória microaglutinação MAT",
"Hemocultura nos 1ºs 7 dias (cultura difícil)",
"RX tórax — hemorragia alveolar bilateral (Síndrome de Hemorragia Pulmonar)",
"ECG — miocardite frequente",
],

rx:[
{etapa:"inicial", d:"NOTIFICAÇÃO COMPULSÓRIA — SINAN",do:"Imediata em qualquer suspeita",via:"—",o:"Investigação epidemiológica importante (surto, fonte)."},
{etapa:"inicial", d:"Hidratação cuidadosa",do:"SF 0,9% guiado por volemia",via:"IV",o:"Frequente desidratação (febre + mialgia). MAS cuidado com edema pulmonar (hemorragia alveolar)."},

{etapa:"atb", d:"LEVE — Doxiciclina",do:"100 mg VO 12/12h × 7 dias",via:"VO",o:"Apenas em adultos não-grávidos. Iniciar precocemente (<5 dias) reduz duração."},
{etapa:"atb", d:"LEVE — Amoxicilina",do:"500 mg VO 8/8h × 7 dias",via:"VO",o:"Gestante, criança. Alternativa segura."},
{etapa:"atb", d:"MODERADA/GRAVE — Ceftriaxona",do:"1-2 g IV/d × 7 dias",via:"IV",o:"PADRÃO em internação. Cobertura adicional. Step-down VO em melhora."},
{etapa:"atb", d:"GRAVE — Penicilina G cristalina",do:"6-12 milhões UI/d IV em doses divididas × 7 dias",via:"IV",o:"Clássica. ATENÇÃO: reação de Jarisch-Herxheimer (piora transitória 2-6h após 1ª dose) — sintomática, NÃO suspender."},

{etapa:"escala", d:"GRAVE — UTI + suporte multissistêmico",do:"Hemodiálise, VM, transfusão CH/plaquetas",via:"—",o:"Mortalidade 20-30% sem suporte adequado. Hemorragia pulmonar tem mortalidade 50-70%."},
{etapa:"escala", d:"Hemorragia pulmonar — Suporte ventilatório protetor",do:"VM com PEEP, considerar VNI inicial",via:"VM",o:"NÃO recomendado: corticoide alta dose (controverso, sem benefício claro). Suporte intensivo."},
{etapa:"escala", d:"Hemodiálise",do:"Precoce em IRA oligúrica + hipocalemia",via:"—",o:"NÃO esperar uremia clássica — diálise PRECOCE em leptospirose grave reduz mortalidade."},

{etapa:"adj", d:"Reposição eletrolítica",do:"K +++, Mg",via:"IV",o:"Hipocalemia é REGRA (perda tubular). Repor agressivamente."},
{etapa:"adj", d:"Transfusão",do:"CH, plaquetas se sangramento",via:"IV",o:"Plaquetopenia + coagulopatia comuns. Transfundir se sangramento ativo."},
],

alertas:[
{t:"crit",x:"SÍNDROME DE HEMORRAGIA PULMONAR (SHP) — mortalidade 50-70%. Dispneia + hemoptise + infiltrados bilaterais. IOT precoce, VM protetora, UTI."},
{t:"crit",x:"HISTÓRIA EPIDEMIOLÓGICA é a chave: exposição a água/lama (enchente, esgoto), trabalhador rural/lixeiro/açougueiro/militar, contato com rato/cão."},
{t:"warn",x:"Diferencial: dengue, hantavirose, febre amarela, hepatite viral, malária. TODOS podem dar quadro inicial similar."},
{t:"warn",x:"REAÇÃO DE JARISCH-HERXHEIMER após penicilina: febre + calafrio + hipotensão 2-6h pós — MANTER ATB, suporte sintomático."},
{t:"info",x:"DOR EM PANTURRILHAS desproporcional + sufusões oculares = pistas clássicas."},
],

fisio:"Leptospira spp. (espiroqueta) — reservatório: ratos (urina). Penetra mucosas/pele lesada → bacteremia (fase septicêmica 1-7 dias) → fase imune (sintomas leves) ou progressão → vasculite generalizada + lesão endotelial → falência multissistêmica. ÓRGÃOS-ALVO: rim (NTA + nefrite intersticial), fígado (colestase + dano hepatocelular), pulmão (hemorragia alveolar), coração (miocardite), musculatura (rabdomiólise).",

mec:[
{d:"Doxiciclina/Amoxicilina/Penicilina",x:"Inibidores de parede ou síntese proteica — leptospira mantém sensibilidade. Iniciar precoce (<5 dias) reduz dia de doença em 25%."},
],

diretriz:"MS Brasil — Guia de Vigilância em Saúde 2024. WHO Leptospirosis 2003.",
fluxo:null,
calcs:[],
},
{id:"malaria", contexto:["pa","ubs"], sis:"infecto", grav:"alta",
nome:"Malária",
sin:["malária","Plasmodium","febre amazônica"],
def:"Infecção pelo Plasmodium (vivax mais comum BR-Norte; falciparum mais grave). Febre periódica + sintomas inespecíficos + procedência/passagem por área endêmica (Amazônia legal, Mata Atlântica residual). Notificação compulsória IMEDIATA.",

exames:[
"Gota espessa + esfregaço (gold standard) — repetir 6/6h × 3 se neg + suspeita",
"Teste rápido (RDT) — antígeno HRP-2 (P. falciparum) ou pLDH (todas espécies)",
"PCR (centros referência)",
"HMG (anemia, plaquetopenia frequente), função renal/hepática, glicemia, gaso",
"β-HCG (gestação altera conduta)",
"Procurar foco: malária 'importada' de fora da Amazônia em viajante",
],

rx:[
{etapa:"inicial", d:"NOTIFICAÇÃO IMEDIATA — SIVEP-Malária",do:"Compulsória <24h. Ficha do MS.",via:"—",o:"Notificar SEMPRE. Imediato (24h). Permite ação epidemiológica."},
{etapa:"inicial", d:"Avaliação de gravidade",do:"Buscar critérios: alt consciência, convulsão, ↓consc, icterícia, edema, oligúria, sangramento, choque, hiperparasitemia (>2% falciparum)",via:"—",o:"Malária GRAVE = falciparum + qualquer critério. Internação obrigatória + ARTESUNATO IV."},

{etapa:"atb", d:"P. VIVAX/OVALE (não-grave)",do:"Cloroquina 25 mg/kg total VO em 3 dias (10+7,5+7,5 mg/kg) + PRIMAQUINA 0,5 mg/kg/d × 7 dias",via:"VO",o:"Primaquina mata HIPNOZOÍTOS hepáticos (previne recaída). NUNCA em gestante (teratogênica) ou G6PD deficiente (hemólise). Cloroquina segura na gestação."},
{etapa:"atb", d:"P. FALCIPARUM não-grave",do:"Arteméter-Lumefantrina (Coartem) 4 cp 12/12h × 3 dias VO + Primaquina 0,75 mg/kg dose única (gametocitocida)",via:"VO",o:"BR-padrão. Tomar com gordura para absorção. CI: 1º trimestre gestação (usar quinina + clindamicina)."},
{etapa:"atb", d:"P. FALCIPARUM GRAVE",do:"Artesunato IV 2,4 mg/kg na admissão + 12h + 24h, depois 1×/dia até VO",via:"IV",o:"PADRÃO-OURO em grave (AQUAMAT trial — ↓mortalidade vs quinina). Reservar 50% da dose pediátrica em <20 kg. Após melhora: completar com ACT VO 3 dias."},
{etapa:"atb", d:"Alternativa grave — Quinina",do:"10 mg/kg IV em SG 5% 250 mL em 4h, depois 10 mg/kg 8/8h + Clindamicina 10 mg/kg 8/8h",via:"IV",o:"Se artesunato indisponível. Monitorar: hipoglicemia (insulina-mediada — repor SG), cardiotoxicidade (QT, alargar QRS)."},
{etapa:"atb", d:"GESTANTE 1º trimestre — falciparum",do:"Quinina + Clindamicina",via:"IV/VO",o:"Após 1º trim: artemisinina pode ser usada. Cloroquina segura em vivax."},

{etapa:"escala", d:"GRAVE — Suporte",do:"UTI, monitorização, hidratação cautelosa",via:"IV",o:"NÃO ressuscitar volemicamente em excesso (FEAST trial — bolus altera prognóstico). Manter euvolemia. Insulina para hiperG."},
{etapa:"escala", d:"GRAVE — Transfusão",do:"CH se Hb<7 (Hb<5 em criança)",via:"IV",o:"Hemólise é comum. ↑Bili indireta. Considerar exsanguineotransfusão se parasitemia >10% (controverso)."},
{etapa:"escala", d:"Diálise se IRA",do:"Hemodiálise indicação clássica",via:"—",o:"Mais comum em falciparum grave. Pode ser transitória."},

{etapa:"adj", d:"Antipirético",do:"Dipirona 1-2g IV 6/6h ou paracetamol",via:"IV/VO",o:"Conforto + reduz convulsão febril em criança. NÃO usar AAS (Reye)."},
],

alertas:[
{t:"crit",x:"GOTA ESPESSA NEGATIVA NÃO EXCLUI — pode haver baixa parasitemia. Repetir 6/6h × 3 antes de descartar. Iniciar empírico se grave + alta suspeita."},
{t:"crit",x:"FALCIPARUM grave = mortalidade 20-30% sem tratamento adequado. Artesunato IV IMEDIATO. Não esperar evolução."},
{t:"crit",x:"MALÁRIA NA GESTANTE: mais grave (hipoglicemia, anemia, edema pulmonar). Falciparum gestação = grave por definição. ARTESUNATO seguro >1º trim."},
{t:"warn",x:"PRIMAQUINA: NUNCA gestante (teratogênica), NUNCA G6PD (hemólise grave). Testar G6PD ou pedir antes de prescrever."},
{t:"info",x:"NOTIFICAÇÃO: SIVEP-Malária (Amazônia) ou SINAN (fora). Importação de área endêmica = investigação obrigatória."},
],

fisio:"Plasmodium tem 2 ciclos: hepático (esporozoítos → merozoítos, ~7 dias) e eritrocítico (parasitose das hemácias → ruptura cíclica → FEBRE). Ciclo: 48h (P. vivax/ovale/falciparum) ou 72h (P. malariae). P. vivax/ovale têm HIPNOZOÍTOS hepáticos (causa recaída meses-anos). P. falciparum não tem hipnozoíto MAS é o mais grave (adesão endotelial → microcirculação ↓ → cérebro, rim, pulmão).",

mec:[
{d:"Cloroquina",x:"Inibe polimerização do heme (toxinha para o parasita). Resistência GENERALIZADA no falciparum — não usar mais para falciparum."},
{d:"Artemisinina/Artesunato",x:"Ponte endoperóxida — gera radicais livres que destroem proteínas do parasita. Ativo em todos os estágios sanguíneos. Ação rápida."},
{d:"Primaquina",x:"Único antimalárico que mata HIPNOZOÍTOS HEPÁTICOS (vivax/ovale). Hemolítico em G6PD. Teratogênico."},
],

diretriz:"MS Brasil — Guia para Profissionais de Saúde sobre Malária 2024. WHO Guidelines for Malaria 2024.",
fluxo:null,
calcs:[],
},
{
  id:"neutropenia", contexto:["pa","ubs"], sis:"infecto", grav:"alta",
  nome:"Neutropenia Febril",
  sin:["neutropenia febril","NF","quimioterapia"],
  def:"PMN <500 (ou <1000 com queda) + febre ≥38,3°C única OU ≥38°C por 1h. EMERGÊNCIA. ATB <1h.",
  exames:["Hemograma com contagem absoluta","HMC (2 pares, 1 de cateter se presente)","EAS + urocultura","RX tórax","Cultura de qualquer foco","PCR/procalcitonina","Função renal/hepática, eletrólitos","MASCC score"],
  rx:[
    {etapa:"atb", d:"Cefepime",do:"2 g IV 8/8h",via:"IV",o:"1ª linha empírica. Boa cobertura Gram+ e Gram- incluindo Pseudomonas."},
    {etapa:"atb", d:"Piperacilina-tazobactam",do:"4,5 g IV 6/6h",via:"IV",o:"Alternativa."},
    {etapa:"atb", d:"Meropenem",do:"1 g IV 8/8h",via:"IV",o:"Sepse grave, ESBL prévia, falha cefepime."},
    {etapa:"atb", d:"+ Vancomicina",do:"15 mg/kg IV 12/12h",via:"IV",o:"Se: mucosite grave, cateter infectado, hipotensão/sepse, MRSA conhecido, pneumonia."},
    {etapa:"atb", d:"+ Antifúngico (caspofungina/anidulafungina)",do:"70 mg D1 + 50 mg/d",via:"IV",o:"Se febre persiste >4–7 dias com ATB amplo + neutropenia prolongada."},
    {etapa:"escala", d:"G-CSF (filgrastim)",do:"5 mcg/kg/d SC",via:"SC",o:"Considerar em casos selecionados (não rotineiro)."},
  ],
  alertas:[
    {t:"crit",x:"ATB em ≤60 min — tempo é crítico. Mortalidade aumenta com atraso."},
    {t:"info",x:"MASCC ≥21 + clínica estável + sem comorbidade = baixo risco, possível manejo ambulatorial com ciprofloxacino + amox-clav."},
  ],
  fisio:"Quimioterapia → ↓neutrófilos → ↓capacidade de conter translocação bacteriana intestinal/oral → bacteremia rápida + sepse fulminante.",
  mec:[],
  diretriz:"IDSA Neutropenic Fever (Freifeld AG et al., CID 2011;52:e56–e93). NCCN Guidelines.",
  calcs:[],
},
{
  id:"pe-diabetico", contexto:["pa","ubs"], sis:"infecto", grav:"media",
  nome:"Pé Diabético Infectado",
  sin:["pé diabético","úlcera diabética","osteomielite"],
  def:"Úlcera/lesão em pé de paciente diabético + sinais de infecção (eritema, edema, calor, secreção purulenta). Classificação IDSA/IWGDF: leve, moderada, grave.",
  exames:["RX (osteomielite, gás)","RM se suspeita de osteomielite","Hemograma, PCR, glicemia, A1c","Cultura de tecido profundo (NÃO swab superficial)","ITB / Doppler arterial (perfusão)"],
  rx:[
    {etapa:"atb", d:"LEVE — Cefalexina + Clindamicina",do:"500 mg 6/6h + 300 mg 6/6h × 1–2 sem",via:"VO",o:"Sem osso/profundidade."},
    {etapa:"atb", d:"MODERADA — Ceftriaxona + Clindamicina",do:"2 g IV/d + 600 mg IV 8/8h",via:"IV",o:"Internação. Step-down VO após melhora."},
    {etapa:"atb", d:"GRAVE — Piperacilina-tazobactam + Vancomicina",do:"4,5 g 6/6h + 15 mg/kg 12/12h",via:"IV",o:"Sepse, gangrena, MR prévia."},
    {etapa:"escala", d:"Controle glicêmico",do:"Alvo 140–180 mg/dL",via:"—",o:"Hiperglicemia perpetua infecção."},
    {etapa:"escala", d:"Desbridamento cirúrgico",do:"Tecido necrótico + drenagem",via:"—",o:"Imprescindível em moderada/grave."},
    {etapa:"escala", d:"Revascularização",do:"Avaliação vascular",via:"—",o:"Se isquemia: angioplastia/bypass."},
  ],
  alertas:[
    {t:"warn",x:"Osteomielite: ATB prolongado 4–6 sem. Excluir com RM + biópsia."},
  ],
  fisio:"Neuropatia + isquemia + imunodepressão + hiperglicemia → úlcera + colonização → infecção polimicrobiana progressiva.",
  mec:[],
  diretriz:"IDSA/IWGDF 2023.",
  calcs:[],
},
{id:"pep-hiv", contexto:["pa","ubs"], sis:"infecto", grav:"alta",
nome:"PEP — Profilaxia Pós-Exposição HIV",
sin:["PEP","profilaxia pós-exposição","exposição HIV"],
def:"Indicada em exposição com risco de transmissão HIV: ocupacional (perfurocortante, mucosa, pele não íntegra) OU sexual (sem proteção com fonte HIV+ ou desconhecida de alto risco) OU droga IV.",
exames:["Teste rápido HIV exposto E fonte (se possível) — ANTES da PEP","Teste rápido sífilis, HBsAg, anti-HCV","Beta-HCG mulher fértil","Função hepática + renal (basal pré-TARV)"],
rx:[
{etapa:"atb", d:"TARV — Tenofovir + Lamivudina + Dolutegravir",do:"TDF 300 + 3TC 300 + DTG 50 mg, 1×/d × 28 dias",via:"VO",o:"INICIAR <72h (idealmente <2h). PCDT MS-Brasil 2017."},
{etapa:"adj", d:"Hepatite B (vacina + IGHAHB)",do:"Vacina 3 doses + IGHAHB 0,06 mL/kg IM (até 7 dias)",via:"IM",o:"Não imunizado ou anti-HBs <10 + fonte HBsAg+."},
{etapa:"escala", d:"Sífilis profilática",do:"Pen G Benzatina 2.4 milhões UI IM",via:"IM",o:"Exposição sexual + fonte com sífilis ativa."},
{etapa:"escala", d:"Contracepção emergência",do:"Levonorgestrel 1,5 mg VO dose única",via:"VO",o:"Até 5 dias — direito da mulher em violência sexual."},
{etapa:"alta", d:"Seguimento",do:"Teste HIV em 30 + 90 + 180 dias",via:"—",o:"+ transaminases. Suporte multidisciplinar se trauma."},
],
alertas:[
{t:"crit",x:"JANELA = 72h. <2h é ideal. Após 72h, NÃO indicar (eficácia ~zero, toxicidade sem benefício)."},
{t:"crit",x:"NUNCA atrasar PEP esperando teste fonte — iniciar empiricamente, SUSPENDER se fonte negativa."},
{t:"warn",x:"Violência sexual: notificação compulsória (SINAN). Coleta material legal. Apoio multidisciplinar."},
{t:"info",x:"PrEP é PRÉ-exposição (risco contínuo). PEP é depois do evento."},
],
fisio:"Risco transmissão HIV: perfurocortante ~0,3%; mucosa ~0,09%; anal receptivo ~1,4%; vaginal receptivo ~0,08%; oral muito baixo. Profilaxia bloqueia ciclo viral antes do estabelecimento sistêmico.",
mec:[
{d:"Tenofovir",x:"INTI análogo de nucleotídeo — bloqueia conversão RNA viral em DNA."},
{d:"Dolutegravir",x:"Inibidor da integrase — bloqueia integração do DNA proviral no genoma."},
],
diretriz:"PCDT MS Brasil — PEP 2021. WHO PEP Guidelines.",
fluxo:null, calcs:[],
},
{
  id:"sepse", contexto:["pa"], sis:"infecto", grav:"alta",
  nome:"Sepse e Choque Séptico",
  sin:["sepse","choque séptico","SSC","hour-1 bundle"],
  def:"Sepse: disfunção orgânica ameaçadora à vida causada por resposta desregulada à infecção (SOFA ≥2). Choque séptico: sepse + hipotensão refratária a volume + lactato >2 + vasopressor para PAM ≥65.",
  exames:["Lactato (repetir 2h depois se >2)","Hemoculturas ANTES do ATB","EAS + urocultura","RX tórax","Hemograma, função renal, gasometria, eletrólitos, coagulograma","PCR/procalcitonina","Culturas dirigidas: LCR, líquido peritoneal, secreção"],
  rx:[
    {etapa:"inicial", d:"Reconhecimento + qSOFA/SOFA",do:"≥2 critérios = sepse",via:"—",o:"qSOFA: FR ≥22, PAS ≤100, alteração mental. SOFA mais sensível na UTI. Tempo é vida."},
    {etapa:"inicial", d:"Lactato",do:"Coletar IMEDIATO; repetir 2h se ≥2 mmol/L",via:"—",o:"Marcador de hipoperfusão. Clearance >10%/h associado a melhor sobrevida."},
    {etapa:"inicial", d:"Hemoculturas",do:"2 pares (2 sítios diferentes) ANTES da 1ª dose ATB",via:"—",o:"NÃO atrasar ATB >45 min para colher culturas."},
    {etapa:"inicial", d:"2 acessos calibrosos + monitorização",do:"PA invasiva se choque, débito urinário, SpO₂, ECG",via:"—",o:"Acesso central precoce se vasopressor previsto."},
    {etapa:"atb", d:"ATB amplo espectro em ≤1h",do:"Conforme foco — empírico inicial",via:"IV",o:"Cada hora de atraso ↑mortalidade ~7,6%. Cobertura: pneumonia (ceftriaxona + macrolídeo), urinária (ceftriaxona/piper-tazo), abdominal (piper-tazo), pele/parte mole (vanco + piper-tazo), neutropenia febril (cefepime), comunitário desconhecido (ceftriaxona + vanco se grave)."},
    {etapa:"escala", d:"① Cristaloide — Ringer Lactato",do:"30 mL/kg em 3h (até melhora hemodinâmica)",via:"IV",o:"RL preferível ao SF (↓hipercloremia/IRA). Reavaliar com VCI/eco/lactato/diurese."},
    {etapa:"escala", d:"② Noradrenalina",do:"0,05–2 mcg/kg/min; iniciar 0,1 mcg/kg/min",via:"IV",o:"VASOPRESSOR DE 1ª LINHA. Pode ser periférico curto prazo (até 6h). META: PAM ≥65."},
    {etapa:"escala", d:"③ Vasopressina (adicionar)",do:"0,03 U/min FIXA",via:"IV",o:"Adicionar se NE >0,25–0,5 mcg/kg/min — reduz dose de NE + complementa via não-catecolaminérgica."},
    {etapa:"escala", d:"④ Hidrocortisona",do:"200 mg/d (50 mg IV 6/6h) ou BIC",via:"IV",o:"CHOQUE REFRATÁRIO: NE >0,25 mcg/kg/min por >4h. Reduz tempo de vasopressor."},
    {etapa:"escala", d:"⑤ Dobutamina (se baixo débito)",do:"2,5–20 mcg/kg/min",via:"IV",o:"Disfunção miocárdica com baixo débito apesar de volume + vasopressor. Pode reduzir PA — manter NE."},
    {etapa:"adj", d:"Foco de controle",do:"Drenagem de abscesso, retirada cateter, desbridamento",via:"—",o:"Tão crítico quanto ATB — primeiras 6-12h. Identificar e remover."},
    {etapa:"adj", d:"Hemocomponentes",do:"CH se Hb <7 (ou <8 em SCA)",via:"IV",o:"Estratégia restritiva. Plaquetas <10k (profilática) ou <50k (procedimento)."},
    {etapa:"adj", d:"Tromboprofilaxia",do:"Enoxaparina 40 mg SC/d",via:"SC",o:"Mecânica (compressão) se contraindicação. Reduz TEV."},
    {etapa:"adj", d:"Controle glicêmico",do:"Insulina BIC alvo 140-180 mg/dL",via:"IV",o:"Evitar hipoglicemia. Sliding scale ou BIC conforme glicemia capilar 4/4h."},
  ],
  alertas:[
    {t:"crit",x:"ATB em ≤1h do reconhecimento. Sepse é emergência tempo-dependente como IAM e AVC."},
    {t:"warn",x:"Em sepse SEM choque, ATB pode aguardar avaliação focada — em choque, ATB IMEDIATO."},
    {t:"info",x:"Brasil — ILAS Protocolo Gerenciado: pacote 1h + checkpoint 6h."},
  ],
  fisio:"Resposta inflamatória sistêmica desregulada à infecção: liberação maciça de citocinas (TNF-α, IL-1, IL-6) → ativação endotelial difusa → vazamento capilar + vasodilatação + microtrombose + disfunção mitocondrial → hipoperfusão tecidual + disfunção orgânica múltipla. \"Choque distributivo\" — débito cardíaco normal/alto, RVS baixa.",
  mec:[
    {d:"Noradrenalina",x:"<strong>α1-agonista predominante</strong> (+ leve β1) — restaura RVS. Vasoconstritor de escolha em choque distributivo."},
    {d:"Vasopressina",x:"Agonista V1 vascular — vasoconstrição <strong>não-catecolaminérgica</strong>; útil em deficiência relativa de vasopressina endógena na sepse."},
    {d:"Hidrocortisona",x:"Glicocorticoide — restaura responsividade adrenérgica (efeito permissivo), reduz inflamação. Em choque refratário, ↓tempo até desmame de vasopressor."},
  ],
  diretriz:"Surviving Sepsis Campaign 2021 (Evans L et al., Intensive Care Med 2021;47:1181–1247, DOI:10.1007/s00134-021-06506-y). ILAS Brasil — Pacote 1h.",
  fluxo:"sepse",
  calcs:["qsofa","sofa"],
},
{
  id:"sifilis", contexto:["pa","ubs"], sis:"infecto", grav:"media",
  nome:"Sífilis",
  sin:["sífilis","Treponema","cancro"],
  def:"Infecção sistêmica por T. pallidum. Estágios: primária (cancro), secundária (rash + condiloma plano), latente, terciária (cardiovascular, neuro).",
  exames:["VDRL + TPHA/FTA-ABS","HIV, hepatites B/C","LCR se suspeita de neuro/sintomas oculares/auditivos/HIV+ com VDRL alto"],
  rx:[
    {etapa:"escala", d:"Sífilis recente (<1 ano)",do:"Penicilina G benzatina 2,4 MU IM dose única",via:"IM",o:"1,2 MU em cada glúteo."},
    {etapa:"escala", d:"Sífilis tardia/duração ignorada",do:"Penicilina G benzatina 2,4 MU IM semanalmente × 3 sem",via:"IM",o:"Intervalo 7–9 dias aceitável (Nota Técnica MS 2023)."},
    {etapa:"escala", d:"Neurossífilis",do:"Penicilina G cristalina 18–24 MU/d IV (3–4 MU 4/4h ou BIC) × 14 dias",via:"IV",o:"Internação. Considerar prednisona 30 mg × 3 dias para Jarisch-Herxheimer."},
    {etapa:"atb", d:"Alergia a penicilina",do:"Dessensibilização preferencial; alternativa: doxiciclina 100 mg 12/12h × 14 dias (recente) ou 28 dias (tardia)",via:"VO",o:"Em gestante NÃO há substituto — dessensibilizar."},
  ],
  alertas:[
    {t:"warn",x:"Gestante: SEMPRE penicilina (única que previne transmissão vertical). Dessensibilizar se alergia."},
    {t:"info",x:"Reação de Jarisch-Herxheimer: febre + cefaleia + mialgia 2–8h pós-dose — auto-limitada."},
  ],
  fisio:"T. pallidum penetra mucosas/pele → disseminação linfática e hematogênica precoce. Estágio: incubação 3 sem → cancro 6 sem → secundária 6 sem-6 mês (latente assintomática) → terciária anos depois.",
  mec:[
    {d:"Penicilina",x:"Inibe PBPs bacterianas → bloqueia síntese de peptidoglicano."},
  ],
  diretriz:"PCDT-IST MS 2022 (ISBN 978-65-5993-276-4). Nota Técnica MS 14/2023.",
  calcs:[],
},
{
  id:"tetano", contexto:["pa","ubs"], sis:"infecto", grav:"alta",
  nome:"Tétano",
  sin:["tétano","trismo"],
  def:"Trismo + rigidez muscular generalizada + espasmos por toxina tetânica. Causa: ferimento contaminado + status vacinal inadequado.",
  exames:["Diagnóstico clínico","Hemograma, CK","Eletrólitos"],
  rx:[
    {etapa:"escala", d:"Imunoglobulina humana antitetânica (IGHAT)",do:"500–3000 UI IM (250 UI em criança)",via:"IM",o:"Neutraliza toxina circulante. NÃO atua sobre toxina já ligada."},
    {etapa:"atb", d:"Metronidazol",do:"500 mg IV 8/8h × 7–10 dias",via:"IV",o:"PREFERENCIAL — penicilina pode antagonizar GABA e piorar espasmos."},
    {etapa:"escala", d:"Diazepam",do:"5–10 mg IV 4/4h, titular",via:"IV",o:"Controle de espasmos."},
    {etapa:"adj", d:"Vacina dT",do:"Dose única + completar esquema",via:"IM",o:"Esquema 3 doses se status incerto."},
    {etapa:"escala", d:"Desbridamento da ferida",do:"Limpeza ampla",via:"—",o:"Remoção do tecido necrótico/corpo estranho."},
    {etapa:"escala", d:"Suporte ventilatório",do:"IOT + sedação + bloqueador NM se grave",via:"—",o:"Espasmos laríngeos/diafragmáticos."},
  ],
  alertas:[
    {t:"crit",x:"Disautonomia (taquiarritmias, hipertensão lábil) é causa de morte tardia em tétano. UTI obrigatória."},
  ],
  fisio:"Clostridium tetani (bacilo anaeróbio formador de esporo) → produz <strong>tetanospasmina</strong> que migra retroaxonalmente até SNC → bloqueia liberação de GABA/glicina pelos interneurônios inibitórios → hiperatividade motora descontrolada.",
  mec:[
    {d:"IGHAT",x:"Imunoglobulina hiperimune — neutraliza toxina ainda não ligada aos neurônios."},
    {d:"Metronidazol",x:"Bactericida sobre C. tetani vegetativo — bloqueia produção adicional de toxina."},
    {d:"Diazepam",x:"Agonista GABA-A — restaura tônus inibitório."},
  ],
  diretriz:"MS — Manual de Tétano Acidental 2018.",
  calcs:[],
},
);
