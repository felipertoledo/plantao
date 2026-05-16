/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — DADOS CLÍNICOS PARTE 8
   Analgesia em emergência + características da dor
   =========================================================== */

PATOLOGIAS.push(

{id:"analgesia-er", sis:"anal", grav:"baixa",
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

);
