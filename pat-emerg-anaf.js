/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — pat/emerg-anaf.js
   10 patologias
   Sistemas: anaf, anal, iot, vaso
   =========================================================== */

PATOLOGIAS.push(

/* ============== ANAF (2) ============== */

{
  id:"anafilaxia", contexto:["pa"], sis:"anaf", grav:"alta",
  nome:"Choque Anafilático",
  sin:["anafilaxia","choque anafilático","alergia grave"],
  def:"Reação alérgica sistêmica grave, início rápido (min a horas), envolvendo 2+ sistemas (pele, respiratório, CV, GI). Critérios WAO/EAACI.",
  exames:["Diagnóstico clínico","Triptase sérica em 1–6h (confirmação retrospectiva)","ECG, eletrólitos, função renal"],
  rx:[
    {etapa:"inicial", d:"1. ADRENALINA IM",do:"0,3–0,5 mg IM (1:1000), face anterolateral da coxa",via:"IM",o:"1ª LINHA ÚNICA. Crianças 0,01 mg/kg (máx 0,3). Repetir cada 5–15 min até 3×."},
    {etapa:"inicial", d:"2. Posição supina + elevar MMII",do:"Decúbito dorsal + Trendelenburg",via:"—",o:"Exceto se dispneia grave. NÃO sentar (síndrome ventricular vazio)."},
    {etapa:"inicial", d:"3. O₂ alto fluxo",do:"10–15 L/min máscara não-reinalante",via:"—",o:"SpO₂ ≥94%. IOT precoce se edema laríngeo progressivo."},
    {etapa:"inicial", d:"4. Cristaloide",do:"SF 20 mL/kg em 5–10 min (adulto 1–2 L)",via:"IV",o:"Pode repetir. Choque distributivo."},
    {etapa:"escala", d:"② Adrenalina IM REPETIDA",do:"0,3-0,5 mg IM cada 5-15 min",via:"IM",o:"Se não responder à 1ª dose. Até 3 doses antes de IV."},
    {etapa:"escala", d:"③ Adrenalina IV em BIC (refratário)",do:"0,1 mcg/kg/min, titular 0,05–1 mcg/kg/min",via:"IV",o:"APENAS em ambiente monitorizado, após ≥2 doses IM sem resposta."},
    {etapa:"escala", d:"④ Glucagon (β-bloqueador)",do:"1–5 mg IV bolus + 5–15 mcg/min BIC",via:"IV",o:"Se em β-bloqueador (adrenalina não funciona bem)."},
    {etapa:"adj", d:"ADJUVANTES — Difenidramina",do:"25–50 mg IV",via:"IV",o:"Anti-H1. Trata urticária; NÃO substitui adrenalina."},
    {etapa:"adj", d:"ADJUVANTES — Hidrocortisona",do:"200 mg IV",via:"IV",o:"Pode reduzir reação bifásica (controverso). NÃO previne morte aguda."},
    {etapa:"adj", d:"ADJUVANTES — Ranitidina (anti-H2)",do:"50 mg IV",via:"IV",o:"Sinergia com anti-H1. Opcional."},
    {etapa:"adj", d:"Broncodilatador",do:"Salbutamol nebulização 2,5-5 mg",via:"INH",o:"Se broncoespasmo significativo."},
    {etapa:"alta", d:"Observação ≥6–8h pós-resolução",do:"Internar se: refratária, IV adrenalina, bifásica prévia, β-bloqueador",via:"—",o:"Reação bifásica em 5–20% em 4–8h."},
    {etapa:"alta", d:"Prescrição de alta",do:"Auto-injetor adrenalina (EpiPen) + anti-H1 VO × 5 dias + corticoide VO × 5 dias",via:"VO",o:"Encaminhar alergologia. Identificar e EVITAR gatilho. Cartão de identificação."},
  ],
  alertas:[
    {t:"crit",x:"ADRENALINA IM É A ÚNICA 1ª LINHA. Anti-histamínicos e corticoides são ADJUVANTES e NÃO substituem. Atraso = morte."},
    {t:"warn",x:"Em β-bloqueador: adrenalina pode não responder bem → glucagon."},
  ],
  fisio:"Sensibilização prévia → reexposição → cross-linking de IgE em mastócitos/basófilos → degranulação maciça → liberação de <strong>histamina, triptase, leucotrienos, prostaglandinas, PAF</strong> → vasodilatação sistêmica + ↑permeabilidade capilar (perda de até 50% do volume IV em minutos) + broncoconstrição + edema laríngeo. Causa de morte: choque distributivo refratário + asfixia.",
  mec:[
    {d:"Adrenalina",x:"Agonista α1 (vasoconstrição, ↓edema, ↑PAM), <strong>β1 (inotropismo, cronotropismo)</strong>, <strong>β2 (broncodilatação, ↓liberação de mediadores)</strong>. Cobre TODOS os mecanismos fisiopatológicos."},
    {d:"Glucagon",x:"Ativa adenilato ciclase via receptor próprio (não β) → ↑AMPc cardíaco → contorna β-bloqueio."},
    {d:"Anti-H1",x:"Bloqueia receptores H1 — trata apenas urticária/prurido."},
  ],
  diretriz:"WAO Anaphylaxis 2020 (Cardona V et al., World Allergy Organ J 2020;13:100472, DOI:10.1016/j.waojou.2020.100472). EAACI Anaphylaxis 2021 (Muraro A et al., Allergy 2022;77:357–377, DOI:10.1111/all.15032).",
  imgs:[
    {src:"https://upload.wikimedia.org/wikipedia/commons/c/c9/Urticaria2.JPG",
     alt:"Urticária — pápulas eritematosas elevadas",
     caption:"Urticária — pápulas eritematosas confluentes (wheals), pruriginosas, fugazes. Quando associada a sintomas sistêmicos = anafilaxia.",
     source:"Wikimedia Commons (Domínio público)"},
  ],
  fluxo:"anafilaxia",
  calcs:[],
},
{
  id:"urticaria", contexto:["pa"], sis:"anaf", grav:"baixa",
  nome:"Urticária e Angioedema",
  sin:["urticária","angioedema","alergia"],
  def:"Lesões eritematosas pruriginosas (urticária) ± edema dérmico profundo (angioedema). Aguda (<6 sem) vs crônica.",
  exames:["Clínico","Triptase se suspeita de anafilaxia","C1q/C1-inibidor em angioedema recorrente sem urticária"],
  rx:[
    {etapa:"escala", d:"Loratadina",do:"10 mg VO/d",via:"VO",o:"Anti-H1 de 2ª geração. Pode dobrar dose."},
    {etapa:"escala", d:"Desloratadina",do:"5 mg VO/d",via:"VO",o:"Alternativa. Pode até 4× a dose padrão."},
    {etapa:"escala", d:"Prometazina",do:"25 mg IV/IM",via:"IV/IM",o:"Anti-H1 1ª geração — sedativo. Para alívio agudo."},
    {etapa:"escala", d:"Prednisona",do:"20–40 mg VO/d × 3–5 dias",via:"VO",o:"Extensa ou refratária."},
    {etapa:"escala", d:"Adrenalina IM",do:"0,3 mg",via:"IM",o:"SE angioedema com risco de via aérea (lábios, língua, glote)."},
  ],
  alertas:[
    {t:"crit",x:"Angioedema de via aérea (lábios/língua/glote) → adrenalina IM + IOT preparada."},
    {t:"warn",x:"Angioedema por IECA (não-pruriginoso, sem urticária) NÃO responde a anti-H1/corticoide — icatibant ou C1-inibidor."},
  ],
  fisio:"Urticária: degranulação mastocitária dérmica → liberação histamina → eritema, prurido, edema dérmico superficial. Angioedema: edema da derme profunda/submucosa. Pode ou não ser IgE-mediado.",
  mec:[],
  diretriz:"EAACI/GA²LEN Urticária 2022.",
  calcs:[],
},

/* ============== ANAL (1) ============== */

{id:"analgesia-er", contexto:["pa","ubs"], sis:"anal", grav:"baixa",
nome:"Analgesia em Emergência — Guia de Escalonamento",
sin:["analgesia","dor","escala da dor","escada OMS","EVA","opioide"],
def:"Manejo escalonado da dor aguda em emergência. PILAR: caracterizar a dor + medir intensidade + escolher analgésico apropriado + reavaliar resposta. Dor é o 5º sinal vital — medir SEMPRE e RE-medir.",

exames:[
"Caracterizar a dor — mnemônico OPQRST",
"O — Onset (início, súbito vs gradual)",
"P — Provocação/Paliação (o que piora/melhora)",
"Q — Qualidade (latejante, em pontada, em queimação, em cólica, em peso)",
"R — Radiação (irradia para onde?)",
"S — Severidade (EVA 0-10, FLACC pediátrico, BPS sedado)",
"T — Tempo (duração, periodicidade)",
"+ sintomas associados (náusea, sudorese, palidez, alteração consciência)",
"Padrão da dor (nociceptiva somática/visceral, neuropática, mista)",
],

rx:[
// === ETAPA 1: AVALIAÇÃO ===
{etapa:"inicial", d:"1. Medir intensidade — EVA 0-10",do:"Pedir ao paciente: 0 = sem dor, 10 = pior dor imaginável",via:"—",o:"FLACC <7a (face/legs/activity/cry/consolability). BPS em sedado (1-12)."},
{etapa:"inicial", d:"2. Caracterizar a dor (OPQRST)",do:"Anamnese estruturada — não 'só dói'",via:"—",o:"DOR NOCICEPTIVA: somática (localizada, latejante, em peso — pele, músculo, osso) ou visceral (mal localizada, em cólica, surda — víscera). DOR NEUROPÁTICA: queimação, choque, formigamento, parestesia, dor em região com déficit sensitivo (HZ, neuropatia diabética, ciática)."},
{etapa:"inicial", d:"3. Excluir CAUSAS QUE EXIGEM TRATAMENTO ESPECÍFICO",do:"NÃO mascarar com analgesia ANTES de diagnóstico",via:"—",o:"Abdome agudo cirúrgico (dor + Blumberg) — analgesia pode mascarar?! HOJE EVIDÊNCIA mostra que analgesia NÃO atrasa diagnóstico e DEVE ser dada (Cochrane). Mas registrar exame antes e após."},

// === ETAPA 2: DOR LEVE (EVA 1-3) — Degrau 1 ===
{etapa:"leve", d:"DEGRAU 1 — Dipirona",do:"500-1000 mg IV/VO 6/6h (máx 4g/d)",via:"VO/IV",o:"1ª LINHA dor leve-moderada. Custo baixo, perfil de segurança bom. Risco raro: agranulocitose. CI: alergia, porfiria."},
{etapa:"leve", d:"DEGRAU 1 — Paracetamol",do:"500-1000 mg VO 6/6h (máx 4g/d, 3g/d em idoso/hepatopata)",via:"VO/IV",o:"Alternativa à dipirona. EVITAR em hepatopata + alcoolismo (dose tóxica reduzida). NÃO anti-inflamatório."},
{etapa:"leve", d:"AINE — Cetorolaco (IV)",do:"30 mg IV 6/6h × máx 5 dias",via:"IV",o:"Componente inflamatório (cólica renal, dor pós-trauma, dor músculo-esquelética). CI: IRC, ulcera, sangramento, gestante (3º trim)."},
{etapa:"leve", d:"AINE — Ibuprofeno (VO)",do:"400-600 mg VO 6/8h (máx 2,4g/d)",via:"VO",o:"Alternativa VO. Mesmas CI dos AINEs."},
{etapa:"leve", d:"AINE — Cetoprofeno",do:"100 mg IV/IM 12/12h",via:"IV/IM",o:"Alternativa parenteral. Cuidado em idoso."},

// === ETAPA 3: DOR MODERADA (EVA 4-6) — Degrau 2 ===
{etapa:"mod", d:"DEGRAU 2 — Tramadol",do:"50-100 mg IV/VO 6/6h (máx 400 mg/d, 300 mg/d em idoso)",via:"VO/IV",o:"Opioide fraco + inibe recaptação 5-HT/NA. CUIDADO: ↓limiar convulsivo, síndrome serotoninérgica (com ISRS), náusea (até 30%). Diluir IV em SF 100 mL, infundir lento."},
{etapa:"mod", d:"Codeína (associada paracetamol)",do:"30-60 mg VO 6/6h",via:"VO",o:"Alternativa VO. Variabilidade genética (CYP2D6) — 'metabolizadores ultra-rápidos' têm risco overdose, 'metabolizadores lentos' não respondem. Cuidado pediatria."},
{etapa:"mod", d:"Adjuvante — Dipirona/Paracetamol mantido",do:"Junto com opioide (multimodal)",via:"VO/IV",o:"Combinar analgésicos de mecanismos diferentes reduz dose total de cada um e efeitos colaterais."},

// === ETAPA 4: DOR INTENSA (EVA 7-10) — Degrau 3 ===
{etapa:"intensa", d:"DEGRAU 3 — Morfina IV (titulação)",do:"2-5 mg IV cada 5-10 min até alívio (EVA <4) ou efeitos colaterais",via:"IV",o:"1ª LINHA dor intensa aguda. TITULAR — não usar 'dose única padrão'. Reavaliar em 5-15 min. Doses pediátricas: 0,1 mg/kg IV."},
{etapa:"intensa", d:"Fentanil IV",do:"25-50 mcg IV cada 5-10 min (1 mcg/kg)",via:"IV",o:"Início mais rápido (1-2 min) que morfina, sem liberação histamínica (preferir em hipotenso). Curta ação (~30 min). Útil em procedimentos."},
{etapa:"intensa", d:"Metadona (dor crônica/refratária)",do:"5-10 mg VO 8/8h (NÃO conversão linear de morfina)",via:"VO",o:"Não usar em emergência sem experiência. Risco QT longo. Útil em dor neuropática refratária e oncológica."},
{etapa:"intensa", d:"PCA (analgesia controlada paciente)",do:"Morfina 1-2 mg bolus a cada 6-10 min (lockout)",via:"IV BIC",o:"Pós-op, queimadura, falciforme, oncológico. Ideal para controlar dor flutuante."},

// === ETAPA 5: ADJUVANTES (dor neuropática, oncológica) ===
{etapa:"adj", d:"Gabapentina (dor neuropática)",do:"300 mg VO 8/8h, titular até 1800-3600 mg/d",via:"VO",o:"Indicações: neuralgia pós-herpética, neuropatia diabética, dor radicular, dor central pós-AVC. Início lento (1-2 sem)."},
{etapa:"adj", d:"Pregabalina (dor neuropática)",do:"75 mg VO 12/12h → 150 mg 12/12h",via:"VO",o:"Mais rápido que gabapentina. Mesma classe (ligante α2δ). Ajustar em IR."},
{etapa:"adj", d:"Amitriptilina",do:"25-75 mg VO à noite",via:"VO",o:"Tricíclico — dor neuropática, fibromialgia. Anticolinérgico (cuidado idoso). Iniciar baixo."},
{etapa:"adj", d:"Lidocaína IV (dor refratária)",do:"1-2 mg/kg em bolus + 1-3 mg/kg/h BIC",via:"IV",o:"Refratária a opioide. Monitorizado. Útil em pancreatite, oncológico, neuropático."},
{etapa:"adj", d:"Cetamina (sub-anestésica)",do:"0,1-0,3 mg/kg IV bolus + 0,1-0,3 mg/kg/h BIC",via:"IV",o:"Dor refratária + tolerância a opioide. Antagonista NMDA. Risco psicotomimético (alucinações leves). Útil em queimadura, falciforme."},

// === ETAPA 6: ANTIEMÉTICOS (acompanham opioides) ===
{etapa:"adj", d:"Ondansetrona",do:"4-8 mg IV/VO 8/8h",via:"IV/VO",o:"Náusea por opioide. Cuidado QT longo se outras drogas QT-prolongadoras."},
{etapa:"adj", d:"Metoclopramida",do:"10 mg IV 8/8h",via:"IV",o:"Náusea/vômito + gastroparesia. Cuidado: extrapiramidalismo em jovens."},
{etapa:"adj", d:"Bromoprida",do:"10 mg IV/VO 8/8h",via:"IV/VO",o:"Alternativa a metoclopramida. Similar."},
],

alertas:[
{t:"crit",x:"REAVALIE em 15-30 min após qualquer analgésico IV. NÃO se contentar com dose única — TITULAR. EVA persistente >4 = subdose ou diagnóstico errado."},
{t:"crit",x:"OPIOIDE em IDOSO, RESPIRADOR PRÉVIO COMPROMETIDO, OBESIDADE: começar com METADE da dose padrão. Monitorar SpO₂ + FR + nível consciência."},
{t:"crit",x:"ANTÍDOTO opioide: NALOXONA 0,04-0,4 mg IV (titular para reverter sintomas, NÃO consciência total). Risco de síndrome de abstinência aguda em usuário crônico."},
{t:"warn",x:"DOR NEUROPÁTICA não responde bem a opioide → adicionar gabapentina/pregabalina precocemente. Sinais: queimação, choque, dor em região com déficit sensitivo."},
{t:"warn",x:"AINE: cuidado em IRC, idoso, anticoagulado, gestante (3º trim), úlcera. Preferir paracetamol/dipirona ± opioide."},
{t:"warn",x:"DOR CRÔNICA ≠ dor aguda — paciente em uso crônico de opioide pode precisar de dose MAIOR (tolerância). Avaliação especializada."},
{t:"info",x:"ABORDAGEM MULTIMODAL é a regra: combinar mecanismos diferentes (paracetamol + AINE + opioide + neuropático) reduz dose de cada um e efeitos colaterais. Esta é a base da analgesia moderna."},
],

fisio:"Dor = experiência sensorial e emocional desagradável, associada a dano tecidual real ou potencial. Vias: (1) Nociceptores periféricos → (2) Fibras Aδ (rápida, aguda) e C (lenta, surda) → (3) Corno dorsal medula → (4) Trato espinotalâmico → (5) Tálamo → (6) Córtex somatossensorial + sistema límbico (componente emocional). Modulação descendente: PAG → núcleo magno da rafe → corno dorsal (libera serotonina, noradrenalina, encefalinas — base dos antidepressivos como analgésicos). Tipos: NOCICEPTIVA (lesão tecidual — somática vs visceral) e NEUROPÁTICA (lesão do sistema nervoso — diabetes, HZ, AVC, esclerose múltipla).",

mec:[
{d:"Paracetamol",x:"Mecanismo incerto — inibe COX-3 central, ativa sistema canabinoide endógeno, modula serotonina. NÃO é anti-inflamatório periférico. Bom para dor leve-moderada com componente central."},
{d:"AINEs",x:"Inibem COX-1/2 → ↓prostaglandinas (PGE2 sensibiliza nociceptores periféricos). Útil em dor com componente inflamatório (osteomuscular, cólica renal, dismenorreia). Cuidado: TGI, renal, CV."},
{d:"Dipirona",x:"Pirazolona — inibe COX-3 central e periférica. Boa analgesia + antitérmico. Risco raro de agranulocitose."},
{d:"Tramadol",x:"Dupla ação: (1) agonista μ-opioide fraco; (2) inibe recaptação serotonina/noradrenalina (como antidepressivo). Útil em dor moderada + componente neuropático. Cuidado: convulsão + sd. serotoninérgica."},
{d:"Morfina",x:"Agonista μ-opioide puro — ↓liberação de neurotransmissores (sub. P, glutamato) no corno dorsal + ativa vias descendentes inibitórias. Libera histamina (cuidado em hipotenso/asma)."},
{d:"Fentanil",x:"Opioide sintético — 100× potência da morfina. Lipofílico (rápido), sem liberação histamínica. Curta ação. Útil em procedimentos + hipotensão."},
{d:"Gabapentina/Pregabalina",x:"Ligantes α2δ dos canais de cálcio neuronais → ↓liberação de neurotransmissores excitatórios (glutamato, substância P) no corno dorsal. Específicos para dor neuropática."},
{d:"Cetamina",x:"Antagonista NMDA → bloqueia sensibilização central + componente afetivo da dor. Sub-anestésica útil em dor refratária."},
{d:"Naloxona",x:"Antagonista μ-opioide puro — reverte depressão respiratória, sedação, miose. Curta ação (~30 min) — pode precisar repetir em uso de opioides de longa ação."},
],

diretriz:"WHO Pain Ladder (1986, atualizada). ACEP Pain Management 2017. SBED — Sociedade Brasileira para Estudo da Dor. SAMPE/SBA — Diretrizes brasileiras de analgesia. PALLIATIVE Care WHO 2018.",
fluxo:null,
calcs:[],
},

/* ============== IOT (2) ============== */

{id:"sedoanalgesia", contexto:["pa"], sis:"iot", grav:"alta",
nome:"Sedoanalgesia em VM",
sin:["sedação","analgesia","sedoanalgesia","BIC"],
def:"Sedoanalgesia pós-IOT para tolerância à VM. Estratégia: analgesia first, sedação leve (RASS 0 a -2), interrupção diária.",
exames:["RASS, CPOT/BPS"],
rx:[
{etapa:"escala", d:"Fentanil",do:"0,5–2 mcg/kg/h BIC",via:"IV",o:"Analgésico opioide preferido em UTI."},
{etapa:"escala", d:"Propofol",do:"5–50 mcg/kg/min",via:"IV",o:"Sedativo de escolha — meia-vida curta, fácil titulação. Cuidado: \"propofol-related infusion syndrome\" em >4 mg/kg/h por >48h."},
{etapa:"escala", d:"Midazolam",do:"0,02–0,1 mg/kg/h",via:"IV",o:"BZD. Acumula em uso prolongado/IRC/hepatopata."},
{etapa:"escala", d:"Cetamina",do:"0,5–2 mg/kg/h",via:"IV",o:"Adjuvante em casos selecionados (asma grave, broncoespasmo, sepse com instabilidade)."},
{etapa:"escala", d:"Dexmedetomidina",do:"0,2–1,4 mcg/kg/h",via:"IV",o:"α2-agonista — sedação leve com preservação de drive respiratório. Útil para desmame."},
],
alertas:[
{t:"warn",x:"Sedação profunda contínua piora desfechos. RASS alvo 0 a -2 sempre que possível."},
{t:"info",x:"\"Sedation vacation\" diário (interrupção até paciente abrir olhos) reduz dias de VM e UTI."},
],
fisio:"",
mec:[{d:"Dexmedetomidina",x:"<strong>α2-agonista</strong> central — inibe liberação de NE no locus coeruleus. Sedação sem depressão respiratória."}],
diretriz:"PADIS Guidelines 2018 (Devlin JW et al., Crit Care Med 2018;46:e825–e873).",
calcs:[],
},
{id:"sri", contexto:["pa"], sis:"iot", grav:"alta",
nome:"Sequência Rápida de Intubação (SRI)",
sin:["SRI","IOT","intubação","laringoscopia"],
def:"Indução farmacológica rápida com sedação + bloqueio neuromuscular para IOT em paciente crítico.",
exames:["Avaliação prévia (LEMON, MOANS, RODS)","Monitor + acesso IV"],
rx:[
{etapa:"inicial", d:"PRÉ-OXIGENAÇÃO",do:"O2 100% 3–5 min ou 8 capacidades vitais",via:"Máscara",o:"Maximiza SpO2 + reserva de O2 alveolar."},
{etapa:"escala", d:"INDUÇÃO — Etomidato",do:"0,3 mg/kg IV",via:"IV",o:"Estabilidade hemodinâmica. Risco de supressão adrenal."},
{etapa:"adj", d:"INDUÇÃO — Cetamina/Escetamina",do:"1–2 mg/kg IV (0,5–1 mg/kg escet)",via:"IV",o:"Broncodilatador, preserva PA. Útil em sepse, asma, trauma."},
{etapa:"escala", d:"INDUÇÃO — Propofol",do:"1,5–2,5 mg/kg IV",via:"IV",o:"Anticonvulsivante; cardiodepressor — evitar em choque."},
{etapa:"escala", d:"INDUÇÃO — Midazolam",do:"0,1–0,3 mg/kg IV",via:"IV",o:"Cardiodepressor; usar em sangramento/sepse com cetamina."},
{etapa:"escala", d:"BNM — Succinilcolina",do:"1–1,5 mg/kg IV",via:"IV",o:"Início 45–60s, dura 5–10min. CI: hipercalemia, queimadura >48h, lesão muscular extensa, hipertermia maligna, ocular aberta."},
{etapa:"escala", d:"BNM — Rocurônio",do:"1,2 mg/kg IV",via:"IV",o:"Início 60s, dura 30–60min. Reversão: sugamadex 16 mg/kg."},
{etapa:"adj", d:"PÓS — Sedação + Analgesia",do:"Fentanil + propofol/midaz",via:"IV BIC",o:"Não esquecer — pacientes paralisados sem sedação sofrem."},
],
alertas:[
{t:"crit",x:"\"NO DESAT\" — Nasal O2 Durante Tentativas (cânula nasal 15 L/min) reduz hipoxemia."},
{t:"warn",x:"7 P's: Preparação, Pré-oxigenação, Pré-medicação, Paralisia + indução, Posicionamento, Passar tubo + confirmar, Pós-cuidados."},
],
fisio:"",
mec:[
{d:"Etomidato",x:"Modula GABA-A — sedação sem alteração hemodinâmica."},
{d:"Cetamina",x:"Antagonista NMDA — anestesia dissociativa. Preserva drive respiratório e PA."},
{d:"Succinilcolina",x:"Agonista nicotínico — despolarização persistente da placa motora → paralisia. Hidrolisada por pseudocolinesterase."},
{d:"Rocurônio",x:"Antagonista nicotínico competitivo (não-despolarizante)."},
],
diretriz:"DAS 2015 (Difficult Airway Society); ABRAMEDE.",
calcs:[],
},

/* ============== VASO (5) ============== */

{id:"vaso-adre", contexto:["pa"], sis:"vaso", grav:"alta",
nome:"Adrenalina (Epinefrina) — Uso Crítico",
sin:["adrenalina","epinefrina"],
def:"Anafilaxia, PCR, choque refratário.",
exames:[],
rx:[
{etapa:"escala", d:"PCR (FV/TV s/p, AESP/assistolia)",do:"1 mg IV/IO em bolus a cada 3–5 min",via:"IV/IO",o:"Diluído 1:10.000 (10 mL)."},
{etapa:"escala", d:"Anafilaxia",do:"0,3–0,5 mg IM 1:1000 (0,3–0,5 mL)",via:"IM",o:"Coxa anterolateral. Repetir 5–15 min."},
{etapa:"escala", d:"Choque refratário em BIC",do:"0,05–2 mcg/kg/min",via:"IV",o:"4 mg em 250 mL SG = 16 mcg/mL."},
],
alertas:[{t:"crit",x:"Em anafilaxia, atraso na adrenalina IM é principal fator associado a morte."}],
fisio:"",
mec:[{d:"Adrenalina",x:"Agonista α1 + α2 + β1 + β2. Cobre todos os mecanismos da anafilaxia (broncodilatação, vasoconstrição, inotropismo)."}],
diretriz:"WAO 2020; ACLS 2020.",
calcs:[],
},
{id:"vaso-dobuta", contexto:["pa"], sis:"vaso", grav:"alta",
nome:"Dobutamina",
sin:["dobutamina","inotrópico"],
def:"Inotrópico em choque cardiogênico ou disfunção miocárdica com baixo débito.",
exames:[],
rx:[
{etapa:"escala", d:"Diluição",do:"250 mg em 250 mL SG 5% = 1 mg/mL",via:"IV BIC",o:"Pode periférico."},
{etapa:"escala", d:"Dose",do:"2,5–20 mcg/kg/min — iniciar 5 mcg/kg/min",via:"IV",o:"Titular pelo débito/perfusão."},
{etapa:"escala", d:"Cálculo (70 kg)",do:"5 mcg/kg/min = 21 mL/h",via:"—",o:""},
],
alertas:[{t:"warn",x:"Risco de taquiarritmia. Evitar em choque hipovolêmico não corrigido (pode piorar hipotensão por vasodilatação β2)."}],
fisio:"",
mec:[{d:"Dobutamina",x:"<strong>β1-agonista seletivo</strong> (inotropismo) + β2 leve (vasodilatação). ↑Débito sem ↑↑RVS — bom em IC."}],
diretriz:"ESC HF 2021.",
calcs:[],
},
{id:"vaso-dopa", contexto:["pa"], sis:"vaso", grav:"alta",
nome:"Dopamina",
sin:["dopamina"],
def:"Vasopressor/inotrópico dose-dependente. CAIU EM DESUSO em sepse (substituído por NE — SOAP-II).",
exames:[],
rx:[
{etapa:"escala", d:"Diluição",do:"200 mg em 250 mL SG = 800 mcg/mL",via:"IV BIC",o:"Central preferível."},
{etapa:"escala", d:"Dose dopaminérgica",do:"1–3 mcg/kg/min",via:"IV",o:"\"Dose renal\" — sem benefício clínico comprovado."},
{etapa:"escala", d:"Dose β1",do:"3–10 mcg/kg/min",via:"IV",o:"Inotropismo."},
{etapa:"escala", d:"Dose α",do:">10 mcg/kg/min",via:"IV",o:"Vasoconstrição."},
],
alertas:[{t:"warn",x:"Maior taxa de arritmia comparada a NE — preferir NE em sepse."}],
fisio:"",
mec:[{d:"Dopamina",x:"Precursor de NE. Em doses baixas predomina ação D1 (vasodilatação renal/mesentérica); doses médias β1; altas α1."}],
diretriz:"SSC 2021; SOAP-II (De Backer D, NEJM 2010).",
calcs:[],
},
{id:"vaso-ne", contexto:["pa"], sis:"vaso", grav:"alta",
nome:"Noradrenalina (NE)",
sin:["noradrenalina","norepinefrina","NE","vasopressor"],
def:"Vasopressor de 1ª LINHA em choque distributivo (séptico, anafilático refratário, neurogênico).",
exames:[],
rx:[
{etapa:"escala", d:"Diluição padrão",do:"16 mg em 250 mL SG 5% = 64 mcg/mL OU 4 mg em 250 mL = 16 mcg/mL",via:"IV BIC",o:"Sempre via central preferencial (curto prazo via periférica é aceitável)."},
{etapa:"escala", d:"Dose",do:"0,05–2 mcg/kg/min — iniciar 0,1 mcg/kg/min",via:"IV",o:"Titular para PAM ≥65 mmHg."},
{etapa:"escala", d:"Cálculo (70 kg)",do:"0,1 mcg/kg/min = 7 mcg/min = 6,6 mL/h (16 mcg/mL)",via:"—",o:""},
],
alertas:[{t:"warn",x:"Extravasamento: necrose tecidual. Infiltrar fentolamina 5–10 mg + 10 mL SF na área afetada."}],
fisio:"",
mec:[{d:"Noradrenalina",x:"<strong>α1-agonista potente</strong> (vasoconstrição arterial e venosa) + β1-agonista leve (inotropismo cronotropismo). Aumenta RVS e PAM mantendo débito."}],
diretriz:"SSC 2021.",
calcs:[],
},
{id:"vaso-vp", contexto:["pa"], sis:"vaso", grav:"alta",
nome:"Vasopressina",
sin:["vasopressina","ADH","V1"],
def:"Vasopressor adjuvante em choque séptico refratário.",
exames:[],
rx:[
{etapa:"escala", d:"Dose fixa",do:"0,03 U/min IV em BIC",via:"IV",o:"NÃO titular. Adicionar quando NE >0,25–0,5 mcg/kg/min para reduzir dose de NE."},
{etapa:"escala", d:"Diluição",do:"20 UI em 100 mL SG 5% = 0,2 UI/mL",via:"—",o:"0,03 UI/min = 9 mL/h."},
],
alertas:[{t:"warn",x:"Risco de isquemia digital/mesentérica em doses altas — manter ≤0,04 U/min."}],
fisio:"",
mec:[{d:"Vasopressina",x:"Agonista <strong>V1 vascular</strong> — vasoconstrição não-catecolaminérgica (útil em deficiência relativa na sepse). Também V2 renal (antidiurético)."}],
diretriz:"SSC 2021.",
calcs:[],
},
);
