/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — pat/cardio.js
   13 patologias
   Sistemas: cardio
   =========================================================== */

PATOLOGIAS.push(

/* ============== CARDIO (13) ============== */

{
  id: "brady", sis: "cardio", grav: "alta",
  nome: "Bradiarritmias e BAVs",
  sin: ["bradicardia", "BAV", "bloqueio AV", "BAVT", "Mobitz"],
  def: "FC <50 bpm sintomática. Disfunção sinusal ou BAVs (1º: PR >200 ms; Mobitz I: PR progressivo até P bloqueada; Mobitz II: PR fixo + P bloqueada súbita; BAVT: dissociação AV).",
  exames: ["ECG 12 derivações + tira longa de DII", "Eletrólitos (K)", "TSH", "Troponina (IAM inferior)", "Função renal", "Revisão medicamentosa"],
  rx: [
    { etapa:"escala", d: "Atropina", do: "1 mg IV bolus, repetir cada 3–5 min", via: "IV", o: "Máximo 3 mg. Pouco efeito em BAV infranodal (Mobitz II, BAVT com QRS largo)." },
    { etapa:"escala", d: "Dopamina", do: "5–20 mcg/kg/min em BIC", via: "IV", o: "2ª linha se atropina falhar. Diluir 250 mg em 250 mL SG5%." },
    { etapa:"escala", d: "Adrenalina", do: "2–10 mcg/min em BIC", via: "IV", o: "2ª linha. 1 mg em 250 mL SG5% = 4 mcg/mL." },
    { etapa:"escala", d: "Marcapasso transcutâneo", do: "60–80 bpm, 50–100 mA", via: "—", o: "Ponte até MPT/definitivo. Sedoanalgesia (fentanil, midazolam)." },
  ],
  alertas: [
    { t: "crit", x: "BAV 2º Mobitz II ou BAVT com QRS largo: NÃO confiar em atropina; preparar marcapasso. Indica MPT em ~todos." },
    { t: "warn", x: "IAM inferior: bradicardia frequentemente vagal, responde bem a atropina. IAM anterior + BAV avançado: lesão extensa, prognóstico ruim." },
    { t: "info", x: "Verificar causas reversíveis: hipercalemia, drogas (β-bloq, dig, Ca²⁺-bloq), hipotireoidismo, hipotermia, hipertensão intracraniana, isquemia." },
  ],
  fisio: "Disfunção sinusal (doença do nó sinusal) é frequente em idosos por fibrose. Os BAVs podem ser <strong>nodais</strong> (Mobitz I, geralmente benignos, responsivos a atropina) ou <strong>infranodais</strong> (Mobitz II, BAVT com QRS largo — comprometimento do feixe de His ou ramos, escape ventricular instável). O escape juncional (40–60 bpm, QRS estreito) é mais estável que o escape ventricular (<40 bpm, QRS largo). Em IAM inferior, a oclusão da artéria coronária direita pode causar bradicardia/BAV por isquemia do nó AV ou tônus vagal (reflexo de Bezold-Jarisch).",
  mec: [
    { d: "Atropina", x: "Antagonista competitivo dos <strong>receptores muscarínicos (M1–M5)</strong>; no nó sinusal e AV bloqueia o tônus vagal mediado por M2, ↑FC e melhora condução. Pouco efeito em bloqueio anatômico abaixo do nó AV." },
    { d: "Dopamina", x: "Em doses 5–10 mcg/kg/min predomina ação β1 (cronotrópico/inotrópico); em doses ≥10 mcg/kg/min adiciona α1 (vasoconstrição)." },
    { d: "Adrenalina", x: "Agonista α e β; em bradicardia o efeito β1 cronotrópico e o β2 acelerador AV são desejáveis." },
  ],
  diretriz: "ACC/AHA/HRS Guideline on the Evaluation and Management of Patients with Bradycardia and Cardiac Conduction Delay (Kusumoto FM et al., Circulation 2019;140:e382–e482, DOI:10.1161/CIR.0000000000000628). AHA ACLS Bradycardia 2020.",
  fluxo: null,
  calcs: [],
},
{
  id: "dissec", sis: "cardio", grav: "alta",
  nome: "Dissecção Aórtica",
  sin: ["dissecção", "dissecção de aorta", "Stanford A", "Stanford B"],
  def: "Dor torácica/dorsal súbita, em \"rasgo\", máxima desde o início, com diferença de PA entre membros >20 mmHg ou pulsos assimétricos. Stanford A: aorta ascendente (cirúrgica). B: distal à subclávia esquerda.",
  exames: ["Angio-TC de tórax e abdome com contraste (PADRÃO-OURO)", "ECG (excluir IAM, mas pode haver isquemia coronária)", "RX tórax (mediastino alargado em 60%)", "Eco TT/TE", "Hemograma, função renal, lactato", "D-dímero (alto VPN se <500)"],
  rx: [
    { etapa:"escala", d: "Esmolol", do: "Bolus 500 mcg/kg + 50–200 mcg/kg/min", via: "IV", o: "PRIMEIRO. Alvo FC <60. Alternativa: metoprolol 5 mg IV." },
    { etapa:"escala", d: "Nitroprussiato", do: "0,25–10 mcg/kg/min", via: "IV", o: "Após β-bloqueador. Alvo PAS 100–120 mmHg." },
    { etapa:"escala", d: "Morfina", do: "2–4 mg IV", via: "IV", o: "Controle da dor (↓descarga adrenérgica)." },
  ],
  alertas: [
    { t: "crit", x: "Stanford A: cirurgia URGENTE. Mortalidade 1% por hora nas primeiras 48h sem cirurgia." },
    { t: "crit", x: "SEMPRE β-bloqueador ANTES de vasodilatador — vasodilatador isolado causa taquicardia reflexa que ↑dP/dt e propaga dissecção." },
    { t: "warn", x: "Pode mimetizar IAM (extensão para ostios coronários, mais comum em coronária direita). Sempre checar pulsos, dor migratória, RX." },
  ],
  fisio: "A dissecção aórtica inicia-se por um <strong>rasgo na íntima</strong> (causa hipertensão crônica em 70%, Marfan, Ehlers-Danlos, bicúspide, gravidez, trauma, cocaína). O sangue penetra a camada média e propaga-se anterógrada ou retrogradamente, criando um <strong>falso lúmen</strong> separado por flap intimal. A força que propaga a dissecção é o <strong>estresse de cisalhamento (dP/dt)</strong> — dependente da pressão e da força de contração. Por isso, o objetivo terapêutico é <strong>reduzir simultaneamente PA E FC</strong>: β-bloqueador primeiro (evita taquicardia reflexa que ↑dP/dt) e depois vasodilatador. Complicações: ruptura para pericárdio (tamponamento), insuficiência aórtica, isquemia visceral, hemotórax, AVC.",
  mec: [
    { d: "Esmolol", x: "β1-cardiosseletivo ultracurto (T½ 9 min). ↓FC, ↓contratilidade, ↓dP/dt aórtica. Reversibilidade rápida em caso de hipotensão." },
    { d: "Nitroprussiato", x: "Vasodilatação balanceada via NO/GMPc. Reduz pós-carga e PA." },
  ],
  diretriz: "2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease (Isselbacher EM et al., Circulation 2022;146:e334–e482, DOI:10.1161/CIR.0000000000001106). Diretriz SBC de Doença Aórtica 2021.",
  fluxo: null,
  calcs: [],
},
{
  id: "eap", sis: "cardio", grav: "alta",
  nome: "ICAD / Edema Agudo de Pulmão",
  sin: ["EAP", "ICAD", "insuficiência cardíaca", "SCAPE", "FOSPE"],
  def: "Dispneia súbita + congestão pulmonar (crepitantes, dessat) + ↑pressão de enchimento esquerdo. SCAPE: hipertensiva, súbita. FOSPE: hipervolêmica, progressiva.",
  exames: ["RX tórax (cefalização, linhas B, asa de morcego)", "BNP/NT-proBNP", "Troponina", "ECG", "Função renal", "Eletrólitos", "POCUS (linhas B, função VE, VCI)"],
  rx: [
    {etapa:"inicial", d:"Posição sentada + 2 acessos + monitorização",do:"Cabeceira ≥45°, perpendicular à cama",via:"—",o:"Reduz retorno venoso e desconforto. Monitorar PA, FC, SpO2, FR, débito urinário."},
    {etapa:"inicial", d:"O₂ alto fluxo",do:"10-15 L/min máscara não-reinalante",via:"—",o:"SpO2 alvo ≥94%. NÃO atrasa VNI se persiste dessaturação."},
    {etapa:"escala", d:"① VNI (CPAP/BiPAP)",do:"EPAP 8-10, IPAP 12-15 cmH₂O, FiO₂ titulada",via:"Máscara",o:"PRIMEIRA LINHA. Reduz IOT em 50%. CI: rebaixamento, vômitos, instabilidade hemodinâmica grave."},
    {etapa:"escala", d:"② Furosemida",do:"40-80 mg IV bolus (dose IV ≥ dose VO crônica)",via:"IV",o:"Repetir 20-40 min se diurese insuficiente. Manutenção: dobrar dose ou BIC 5-10 mg/h em refratário."},
    {etapa:"escala", d:"③ Nitroglicerina (SCAPE)",do:"5-10 mcg/min, dobrar a cada 3-5 min até 200 mcg/min",via:"IV",o:"PRINCIPAL em SCAPE (hipertensivo). ↓pré-carga em baixa dose, + arterial em alta. Manter PAS >100."},
    {etapa:"escala", d:"③ Nitroprussiato (alternativo)",do:"0,25-10 mcg/kg/min",via:"IV",o:"Vasodilatação balanceada. Cuidado com IRC (tiocianato). Proteger da luz."},
    {etapa:"escala", d:"④ Dobutamina (se baixo débito)",do:"2,5-20 mcg/kg/min",via:"IV",o:"Apenas em baixo débito (PAS <90 sem hipovolemia) + má perfusão. NÃO usar em SCAPE puro."},
    {etapa:"escala", d:"⑤ Noradrenalina (choque cardiogênico)",do:"0,05-1 mcg/kg/min",via:"IV",o:"Se hipotensão grave/choque cardiogênico (Killip IV). Associar dobutamina."},
    {etapa:"adj", d:"Tratar GATILHO",do:"SCA / FA com RVR / crise hipertensiva / infecção / má aderência / anemia / tireotoxicose",via:"—",o:"Buscar e tratar causa subjacente — ECG, troponina, RX, TSH, etc."},
    {etapa:"adj", d:"IOT se falha VNI",do:"Após 1-2h de VNI sem melhora",via:"—",o:"Indicações: rebaixamento, esforço respiratório excessivo, hipoxemia refratária."},
    {etapa:"alta", d:"Otimização medicamentosa pós-estabilização",do:"IECA/BRA + β-bloq + espironolactona + diurético manutenção",via:"VO",o:"GDMT (terapia guiada por diretriz). Considerar sacubitril/valsartana se FE<40%."},
  ],
  alertas: [
    { t: "warn", x: "Morfina em EAP foi associada a pior desfecho (ADHERE n=147.632, OR mortalidade 4,8). EVITAR uso rotineiro." },
    { t: "crit", x: "Choque cardiogênico (Killip IV): noradrenalina + dobutamina + considerar suporte circulatório (BIA, ECMO)." },
    { t: "info", x: "Sempre buscar gatilho: SCA, FA com RVR, crise hipertensiva, infecção, má aderência, anemia, tireotoxicose." },
  ],
  fisio: "A IC descompensada gera ↑pressão diastólica final do VE → transmissão para AE → veias pulmonares → capilar pulmonar. Quando a pressão hidrostática capilar excede ~25 mmHg, há <strong>transudação para o interstício e alvéolos</strong> (edema). Dois fenótipos: <strong>SCAPE</strong> (Sympathetic Crashing Acute Pulmonary Edema) é uma crise hipertensiva com redistribuição de fluido (sem hipervolemia significativa) — o paciente tem PAS muito alta, dispneia súbita, sem ganho de peso. <strong>FOSPE</strong> (Fluid Overload SPE) é hipervolemia progressiva por má aderência/sódio/diuréticos — congestão sistêmica e pulmonar, ganho de peso, edema periférico. O tratamento difere: SCAPE → vasodilatador é a chave; FOSPE → diurético é central.",
  mec: [
    { d: "Furosemida", x: "Inibe o <strong>cotransportador Na⁺/K⁺/2Cl⁻ na alça espessa ascendente de Henle</strong> — natriurese intensa. Adicionalmente, induz venodilatação precoce (15–30 min, antes da diurese) via aumento de prostaglandinas, reduzindo pré-carga." },
    { d: "Nitroglicerina", x: "Liberação de NO → ↑GMPc → relaxamento muscular liso. <strong>Doses baixas (≤1 mcg/kg/min)</strong>: venodilatação seletiva, ↓pré-carga e congestão pulmonar. <strong>Doses altas</strong>: + dilatação arterial, ↓pós-carga." },
    { d: "Nitroprussiato", x: "Doador de NO de ação balanceada (arterial e venosa). Risco de toxicidade por cianeto/tiocianato em uso prolongado ou IRC." },
    { d: "Dobutamina", x: "<strong>β1-agonista</strong> seletivo — ↑contratilidade e FC; leve efeito β2 vasodilatador (↓pós-carga). Útil em baixo débito; pode causar taquicardia, arritmia, e tolerância." },
    { d: "VNI (CPAP)", x: "Pressão positiva contínua na via aérea: (1) recruta alvéolos colapsados → melhora oxigenação; (2) reduz retorno venoso → ↓pré-carga; (3) reduz pós-carga do VE; (4) ↓trabalho respiratório. <strong>Evita IOT em 50% dos casos</strong>." },
  ],
  diretriz: "Diretriz Brasileira de Insuficiência Cardíaca Aguda 2018 (Rohde LE et al., SBC, Arq Bras Cardiol 2018;111:436–539). 2021 ESC HF Guidelines (McDonagh TA et al., Eur Heart J 2021;42:3599–3726).",
  fluxo: null,
  calcs: ["killip"],
},
{
  id: "ehp", sis: "cardio", grav: "alta",
  nome: "Crise Hipertensiva (Emergência / Urgência)",
  sin: ["crise hipertensiva", "emergência hipertensiva", "urgência hipertensiva", "HAS"],
  def: "PA ≥180×120 mmHg. <strong>Emergência</strong>: + lesão de órgão-alvo aguda (encefalopatia, AVC, EAP, SCA, dissecção, eclâmpsia, IRA, retinopatia). <strong>Urgência</strong>: sem LOA aguda.",
  exames: ["Avaliação completa de LOA: ECG, troponina, RX tórax", "Função renal + EAS", "Fundo de olho", "TC crânio se cefaleia/déficit", "β-HCG"],
  rx: [
    { etapa:"escala", d: "Nitroprussiato", do: "0,25–10 mcg/kg/min", via: "IV", o: "Emergência hipertensiva geral. 50 mg em 250 mL SG5% = 200 mcg/mL. Proteger da luz. Reduzir 20–25% nas primeiras 2h, depois para 160×100 em 6h." },
    { etapa:"escala", d: "Nitroglicerina", do: "5–200 mcg/min", via: "IV", o: "EAP, SCA, insuficiência coronariana." },
    { etapa:"escala", d: "Esmolol", do: "Bolus 500 mcg/kg + 50–200 mcg/kg/min", via: "IV", o: "Dissecção aórtica (sempre antes de vasodilatador), SCA, taquiarritmia." },
    { etapa:"escala", d: "Hidralazina", do: "5–10 mg IV", via: "IV", o: "Pré-eclâmpsia/eclâmpsia. Pode causar taquicardia reflexa." },
    { etapa:"escala", d: "Captopril", do: "25 mg VO/SL", via: "VO/SL", o: "Urgência hipertensiva (sem LOA aguda). NÃO é emergência — reduz em horas, não minutos." },
  ],
  alertas: [
    { t: "crit", x: "AVC isquêmico: NÃO reduzir PA agressivamente. Só tratar se >220×120 (sem trombólise) ou >185×110 (com trombólise). Reduzir 15% nas primeiras 24h." },
    { t: "crit", x: "Dissecção aórtica: PAS alvo 100–120 e FC <60 com β-bloqueador ANTES do vasodilatador (evitar taquicardia reflexa = ↑estresse de cisalhamento)." },
    { t: "warn", x: "Urgência hipertensiva NÃO requer redução em minutos. Tratamento VO em algumas horas. Reduzir muito rápido = risco de isquemia." },
  ],
  fisio: "A crise hipertensiva é o resultado de uma elevação aguda da PA que excede a capacidade de autorregulação dos órgãos-alvo. Em pacientes não hipertensos crônicos, valores ≥180×120 podem causar dano; em hipertensos crônicos, a curva de autorregulação está deslocada para a direita e tolera valores mais altos. A <strong>encefalopatia hipertensiva</strong> ocorre quando há falência da autorregulação cerebral → hiperperfusão → edema vasogênico. Na <strong>nefroesclerose maligna</strong>, há necrose fibrinoide das arteríolas → microangiopatia trombótica + IRA. Na dissecção aórtica, o ↑estresse de cisalhamento (dP/dt) propaga o flap intimal.",
  mec: [
    { d: "Nitroprussiato", x: "Sofre redução intracelular (eritrócitos, células endoteliais) <strong>liberando NO e ânion cianeto</strong>. O NO ativa guanilato ciclase → ↑GMPc → relaxamento muscular liso (arterial + venoso balanceado). Início <1 min, duração 1–10 min. Tiocianato (metabólito) acumula em IRC e pode causar toxicidade neurológica em uso >24–48h." },
    { d: "Esmolol", x: "β1-cardiosseletivo ultracurto — degradado por <strong>esterases plasmáticas</strong> (T½ ~9 min). Ideal para situações que requerem titulação rápida (dissecção, perioperatório)." },
    { d: "Hidralazina", x: "Vasodilatador arteriolar direto (mecanismo não totalmente elucidado, possivelmente ↑NO endotelial). Pode causar taquicardia reflexa e síndrome lupus-like." },
    { d: "Captopril", x: "Inibidor da ECA — ↓conversão de angiotensina I em angiotensina II → vasodilatação + ↓aldosterona. Início VO 15–30 min." },
  ],
  diretriz: "Diretrizes Brasileiras de Hipertensão Arterial 2020 (Barroso WKS et al., SBC, Arq Bras Cardiol 2021;116:516–658, DOI:10.36660/abc.20201238). Posicionamento Luso-Brasileiro de Emergências Hipertensivas 2020.",
  fluxo: null,
  calcs: [],
},
{id:"endocardite", sis:"cardio", grav:"alta",
nome:"Endocardite Infecciosa",
sin:["endocardite","EI","Duke","Osler"],
def:"Infecção do endotélio valvar/intracardíaco — febre + sopro novo + fenômenos embólicos/imunológicos. Diagnóstico por critérios de Duke modificados (2 maiores; 1 maior + 3 menores; 5 menores).",
exames:["Hemoculturas (3 PARES, em momentos diferentes, ANTES do ATB)","ECO transtorácico (ETT) — se negativo + suspeita alta → transesofágico (ETE)","Hemograma, PCR, VHS, função renal","Sorologia para Bartonella, Coxiella, Brucella se hemocultura negativa","TC tórax/abdome para êmbolos","Avaliação dentária"],
rx:[
{etapa:"atb", d:"Vancomicina + Gentamicina (empírico — válvula nativa)",do:"15-20 mg/kg 12/12h + 1 mg/kg 8/8h",via:"IV",o:"Aguardando hemocultura. Ajustar conforme isolado."},
{etapa:"atb", d:"Vancomicina + Gentamicina + Rifampicina (próteses)",do:"15-20 mg/kg 12/12h + 1 mg/kg 8/8h + 300-450 mg 12/12h",via:"IV",o:"Próteses cardíacas / S. epidermidis."},
{etapa:"atb", d:"S. aureus oxa-sensível",do:"Oxacilina 12 g/d (2 g 4/4h)",via:"IV",o:"× 4-6 semanas. Penicilínicos podem ter associação curta de gentamicina (3-5 dias)."},
{etapa:"escala", d:"S. viridans",do:"Penicilina G 18-24 milhões UI/d ou Ceftriaxona 2 g/d",via:"IV",o:"× 4 semanas. Pode ser feita ambulatorialmente em casos selecionados."},
{etapa:"escala", d:"Cirurgia",do:"Troca valvar",via:"Cirúrgico",o:"Indicações: IC refratária, êmbolos recorrentes apesar de ATB, vegetação >10 mm, abscesso anular, prótese disfuncional, gérmen agressivo (fungo, S. aureus prótese)."},
],
alertas:[
{t:"crit",x:"COLHER hemoculturas ANTES do ATB. 3 pares com pelo menos 1h de intervalo. Sem isso, perde-se a etiologia em 30-50% dos casos."},
{t:"crit",x:"EI em USUÁRIO DE DROGAS IV — geralmente direita (tricúspide), S. aureus. Suspeitar em qualquer febre + comportamento."},
{t:"warn",x:"Profilaxia ATB (amoxi 2g 1h antes) apenas em cardiopatia de alto risco (próteses, EI prévia, congênita cianótica/recém-corrigida) + procedimento dentário com sangramento."},
],
fisio:"Endotélio valvar lesado (turbulência, prótese, dano reumático) → fibrina + plaquetas depositam (vegetação asséptica) → bacteremia (extração dental, IV, GI/GU) → colonização → vegetação infectada → embolização, lesão valvar progressiva, disseminação metastática (cérebro, baço, rim, ossos). Agentes: S. aureus (atualmente o mais comum, agressivo), Streptococcus viridans (dental), enterococos, HACEK, fungos (debilitados, próteses).",
mec:[
{d:"Vancomicina",x:"Glicopeptídeo — liga-se ao terminal D-Ala-D-Ala do peptideoglicano → impede transpeptidação → lise. Cobre MRSA, Enterococcus (não-VRE)."},
{d:"Gentamicina",x:"Aminoglicosídeo — liga-se a 30S → erros de leitura. Sinergia com β-lactâmicos contra enterococos e estreptococos (entra mais fácil)."},
{d:"Rifampicina",x:"Inibe RNA polimerase bacteriana → impede transcrição. Penetra biofilme (essencial em próteses). NUNCA em monoterapia (resistência rápida)."},
],
diretriz:"ESC 2023 Endocarditis Guidelines (Delgado V et al., Eur Heart J 2023;44:3948, DOI:10.1093/eurheartj/ehad193). AHA 2015. Diretriz SBC EI 2019.",
fluxo:null,
calcs:[],
},
{
  id: "fa", sis: "cardio", grav: "alta",
  nome: "Fibrilação Atrial e Flutter Atrial",
  sin: ["FA", "fibrilação atrial", "flutter", "arritmia"],
  def: "FA: ausência de ondas P, RR irregularmente irregular. Flutter: ondas F serrilhadas em DII/DIII/aVF, condução geralmente 2:1 (FC ~150).",
  exames: ["ECG 12 derivações", "TSH (descartar tireotoxicose)", "Eletrólitos", "Troponina se dor torácica", "Eco TT (estrutural)", "β-HCG"],
  rx: [
    { etapa:"escala", d: "Metoprolol", do: "5 mg IV em 2 min, repetir até 15 mg", via: "IV", o: "Controle de FC se estável. Manter VO 25–100 mg 12/12h." },
    { etapa:"escala", d: "Diltiazem", do: "0,25 mg/kg IV em 2 min", via: "IV", o: "Alternativa se contraindicação a β-bloq. Repetir 0,35 mg/kg em 15 min se necessário." },
    { etapa:"escala", d: "Deslanosídeo", do: "0,4 mg IV em 5 min", via: "IV", o: "Em IC ou hipotensão. Início em 15–30 min. Cuidado em IRC." },
    { etapa:"escala", d: "Cardioversão sincronizada", do: "150–200 J bifásica", via: "—", o: "Se instável OU eletiva com TEE-guided ou ≥3 sem de anticoagulação. Sedação com etomidato/propofol." },
    { etapa:"anticoag", d: "Anticoagulação (DOAC)", do: "Apixabana 5 mg 12/12h • Rivaroxabana 20 mg/d • Dabigatrana 150 mg 12/12h", via: "VO", o: "Iniciar conforme CHA₂DS₂-VA. DOAC > varfarina em FA não-valvar. Ajustar para IRC." },
    { etapa:"anticoag", d: "Varfarina", do: "Iniciar 2,5–5 mg/d, ajustar INR 2–3", via: "VO", o: "FA valvar (estenose mitral reumática moderada/grave, prótese mecânica)." },
  ],
  alertas: [
    { t: "crit", x: "Instabilidade (hipotensão, dor torácica, ICAD, alteração de consciência) → cardioversão sincronizada imediata 200 J." },
    { t: "warn", x: "Cardioversão eletiva em FA >48h sem anticoagulação prévia: ETE para excluir trombo OU 3 sem de anticoagulação + 4 sem após." },
    { t: "info", x: "CHA₂DS₂-VA (SBC 2025, remove sexo feminino): 0 = não anticoagular; 1 = individualizar; ≥2 = anticoagular." },
  ],
  fisio: "Na FA, múltiplos circuitos de microrreentrada e focos ectópicos das veias pulmonares causam ativação atrial desorganizada (>400 bpm). A perda da contração atrial efetiva reduz o débito cardíaco em 20–30% e gera <strong>estase no apêndice atrial esquerdo</strong>, principal sítio de formação de trombo e fonte de embolia. O risco anual de AVC sem anticoagulação varia de 0,6% (CHA₂DS₂-VA = 0) até 18% (CHA₂DS₂-VA ≥6). O flutter típico é uma macrorreentrada no istmo cavotricuspídeo do AD, com risco embólico semelhante ao da FA.",
  mec: [
    { d: "Apixabana / Rivaroxabana / Edoxabana", x: "Inibidores diretos do <strong>fator Xa</strong>. Bloqueiam a conversão de protrombina em trombina, interrompendo a cascata de coagulação no ponto comum extrínseco/intrínseco. Sem necessidade de monitorização de INR. Reversão: andexanet alfa." },
    { d: "Dabigatrana", x: "Inibidor direto da <strong>trombina (fator IIa)</strong>. Impede conversão de fibrinogênio em fibrina e ativação plaquetária por trombina. Reversão: idarucizumab." },
    { d: "Metoprolol", x: "β1-bloqueador — reduz condução e período refratário do nó AV, controlando resposta ventricular." },
    { d: "Diltiazem", x: "Bloqueador Ca²⁺ tipo L com seletividade nodal (não-diidropiridínico)." },
    { d: "Deslanosídeo / Digoxina", x: "Inibe Na⁺/K⁺-ATPase miocárdica → ↑Ca²⁺ intracelular (inotropismo). No nó AV, ↑tônus vagal e ↓condução." },
  ],
  diretriz: "Diretriz Brasileira de Fibrilação Atrial 2025 (Magalhães LP et al., SBC/SOBRAC, Arq Bras Cardiol 2025). 2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of AF (Joglar JA et al., Circulation 2024;149:e1–e156, DOI:10.1161/CIR.0000000000001193).",
  fluxo: null,
  calcs: ["chads-va", "hasbled"],
},
{id:"hipertensao", nome:"Hipertensão Arterial Sistêmica (HAS)", sis:"cardio", grav:"moderada",
cid:"I10", ciap:"K86",
sin:["HAS","Hipertensão arterial","Pressão alta","Hipertensão essencial","Pressão alta crônica"],

def:"Doença crônica multifatorial caracterizada por PA ≥140/90 mmHg sustentada. Principal fator de risco CV modificável. DBHA 2025 reclassificou pré-hipertensão (120-139/80-89) e definiu META UNIVERSAL <130/80 mmHg.",

quadro:[
"GERALMENTE ASSINTOMÁTICA — diagnóstico em rastreio ou após complicação ('hipertensão é doença silenciosa')",
"Cefaleia occipital pulsátil matinal (clássica, mas inespecífica e pouco sensível)",
"Tontura, zumbido, escotomas, palpitação, epistaxe (sintomas inespecíficos)",
"Sintomas de lesão de órgão-alvo (LOA): angina, dispneia/ortopneia (IC), claudicação (DAOP), déficits neurológicos (AVC), proteinúria/edema (IRC), redução acuidade visual (retinopatia)",
"Crise hipertensiva: PAS ≥180 ou PAD ≥120, com ou sem LOA aguda",
],

diag:[
"PA NORMAL: <120/80 mmHg",
"PRÉ-HIPERTENSÃO: 120-139/80-89 mmHg ⚠ NOVO 2025 — antes era 'normal'",
"HAS ESTÁGIO 1: 140-159/90-99 mmHg",
"HAS ESTÁGIO 2: 160-179/100-109 mmHg",
"HAS ESTÁGIO 3: ≥180/≥110 mmHg",
"CRISE HIPERTENSIVA: PA ≥180/120 mmHg (urgência = sem LOA aguda; emergência = com LOA)",
"CONFIRMAÇÃO: ≥2 visitas com intervalo dias-semanas OU MAPA/MRPA (PADRÃO-OURO)",
"MAPA 24h: HAS se média 24h ≥130/80, vigília ≥135/85, sono ≥120/70",
"MRPA: HAS se média ≥130/80 (5-7 dias, 4 medidas/dia)",
"DIAGNÓSTICO EM 1 CONSULTA: PA ≥180/110 OU presença de lesão de órgão-alvo (LOA)",
"AVALIAR ATÉ MAPA/MRPA em: HAS estágio 1-2, pré-HAS com alto RCV, suspeita de jaleco branco/mascarada",
],

exames:[
"Hemograma, glicemia jejum, HbA1c, perfil lipídico",
"Creatinina + TFG estimada (CKD-EPI 2021)",
"Na⁺, K⁺, ácido úrico",
"RAZÃO ALBUMINÚRIA/CREATININÚRIA (RAC) ⚠ NOVO DBHA 2025 — recomendada em todos os hipertensos",
"Urina I (parcial)",
"ECG 12 derivações (HVE, isquemia, BAV, FA)",
"Em alto risco/jovem/HAS-2 ou 3: ecocardiograma, USG renal, fundoscopia",
"Triagem HAS SECUNDÁRIA se: <40 anos, PA muito alta, hipocalemia, HAS resistente, sopro renal, perda noturna do descenso (MAPA)",
"HAS secundária — investigar: feocromocitoma (metanefrinas), hiperaldosteronismo (relação ald/renina), apneia sono (polissonografia), estenose arterial renal (Doppler renal), Cushing, coarctação",
],

rx:[
// ============== INICIAL — MEV ==============
{etapa:"inicial", d:"MUDANÇAS DE ESTILO DE VIDA (MEV) — aplicar SEMPRE", o:"Em pré-HAS sem alto RCV: tentar 3-6 meses ISOLADO antes de medicar. Cada intervenção pode reduzir PAS 4-15 mmHg."},
{etapa:"inicial", d:"DIETA: reduzir sódio <2 g/d (≈5 g sal); dieta DASH (frutas, verduras, laticínios magros, grãos integrais, ↓ gordura saturada); ↑ K+ (banana, água-de-coco, feijão)", o:"DASH + Na+ baixo: redução combinada PAS ~11 mmHg."},
{etapa:"inicial", d:"PESO: perda 5-10% se IMC ≥25. Cintura: H <94 cm, M <80 cm", o:"Cada 10 kg de perda: ~5-8 mmHg de redução PA."},
{etapa:"inicial", d:"ATIVIDADE FÍSICA: 150 min/sem de aeróbica moderada (caminhada, ciclismo, natação) + 2-3× exercício resistido", o:"Redução PAS 5-8 mmHg."},
{etapa:"inicial", d:"ÁLCOOL: ≤2 doses/d homem, ≤1 dose/d mulher (1 dose = 14 g álcool puro = lata cerveja 350 mL OU taça vinho 150 mL OU dose destilado 45 mL)", o:"Redução proporcional ao consumo."},
{etapa:"inicial", d:"CESSAR TABAGISMO + controle estresse (mindfulness, meditação, terapia)", o:"Bezerros não reduzem PA diretamente, mas reduzem RCV geral."},

// ============== ESCALONAMENTO MEDICAMENTOSO ==============
{etapa:"escala", d:"⚠ DECISÃO INICIAL: MONOTERAPIA vs TERAPIA COMBINADA — DBHA 2025", o:"Indicação muda conforme estágio e perfil do paciente."},

{etapa:"escala", d:"MONOTERAPIA INICIAL — apenas em: (1) pré-HAS 130-139/80-89 com alto RCV após 3m MEV falha; (2) HAS estágio 1 com BAIXO RCV; (3) idosos ≥85a; (4) frágeis; (5) hipotensão ortostática sintomática", o:"Iniciar dose baixa, titular até máx OU adicionar 2º se intolerância ou inadequado."},

{etapa:"escala", d:"TERAPIA COMBINADA INICIAL (2 medicamentos em dose baixa) — para TODOS os demais hipertensos (estágio 1 com alto RCV, estágio 2, estágio 3)", o:"Preferência: PÍLULA ÚNICA (combinação fixa) — melhor adesão. Aceitável combinação separada."},

{etapa:"escala", d:"TRIO DE OURO (1ª linha) — classes para iniciar: (A) iSRA: IECA (enalapril, captopril, ramipril) ou BRA (losartana, valsartana, telmisartana); (B) BCC diidropiridínico (anlodipino, nifedipino retard); (C) Tiazídico (clortalidona/indapamida > hidroclorotiazida)", o:"β-bloqueadores PERDERAM espaço como 1ª linha em HAS isolada — apenas se indicação CV específica (IAM, angina, FA, IC com FE reduzida)."},

{etapa:"escala", d:"COMBINAÇÕES PREFERENCIAIS DE 2 DROGAS: (1) iSRA + BCC (ACCOMPLISH trial — SUPERIOR em alto RCV); (2) iSRA + tiazídico (mais comum SUS); (3) BCC + tiazídico (alternativa)", o:"NÃO combinar IECA + BRA (ONTARGET — sem benefício, mais efeitos)."},

{etapa:"escala", d:"EXEMPLO 1 — Anlodipino 5 mg + Losartana 50 mg VO 1×/d", o:"Combinação iSRA + BCC. Padrão moderno. Pode reduzir edema do BCC (efeito da losartana)."},
{etapa:"escala", d:"EXEMPLO 2 — Losartana 50 mg + Hidroclorotiazida 12,5 mg VO 1×/d (combinação fixa SUS)", o:"iSRA + tiazídico. Disponível pílula única SUS. Boa tolerabilidade."},
{etapa:"escala", d:"EXEMPLO 3 — Enalapril 10 mg + Anlodipino 5 mg VO 1×/d", o:"IECA + BCC. Alternativa com IECA em vez de BRA (custo menor)."},

{etapa:"escala", d:"TERAPIA TRIPLA (controla ~90% dos casos): iSRA + BCC + tiazídico", o:"Próximo passo após 2 drogas otimizadas sem resposta. Manter as 3 do trio de ouro."},

{etapa:"escala", d:"EXEMPLO de tripla: Losartana 100 mg + Anlodipino 10 mg + Clortalidona 25 mg VO 1×/d (manhã)", o:"Doses máximas tituladas. Aderência: avaliar fragmentação se necessário."},

// ============== HAS RESISTENTE ==============
{etapa:"adj", d:"⚠ HAS RESISTENTE: PA não controlada com 3 drogas otimizadas (incluindo diurético) + dose máxima tolerada", o:"Antes de classificar: (1) excluir HAS secundária; (2) avaliar adesão; (3) excluir efeito jaleco branco com MAPA; (4) revisar dieta (Na+ oculto), álcool, AINE, simpatomiméticos."},

{etapa:"adj", d:"4ª DROGA em HAS resistente: ESPIRONOLACTONA 25-50 mg/d VO (PATHWAY-2 — 1ª linha)", o:"Monitor K+ rigoroso (basal + 1 sem + 4 sem). Suspender se K+ >5,5. Contraindicada se ClCr <30."},

{etapa:"adj", d:"5ª DROGA (se resistente a espironolactona): BISOPROLOL 5-10 mg/d OU DOXAZOSINA 4-8 mg/d (PATHWAY-2)", o:"Bisoprolol preferível se FC alta (>70). Doxazosina se HBP concomitante."},

{etapa:"adj", d:"HAS RESISTENTE REFRATÁRIA (raríssimo): minoxidil 2,5-40 mg/d + furosemida + β-bloq", o:"Encaminhar à nefrologia/cardio. Investigar HAS secundária novamente."},

// ============== SITUAÇÕES ESPECIAIS ==============
{etapa:"adj", d:"GESTANTE / lactante: 1ª linha = METILDOPA 250-500 mg 8/8h. Alternativas: nifedipino retard, hidralazina. PROIBIDOS: IECA, BRA, atenolol (teratogênicos)", o:"Pré-eclâmpsia/eclâmpsia grave: hidralazina IV 5-10 mg cada 20 min OU nifedipino 10-20 mg VO + sulfato de magnésio 4-6 g IV."},

{etapa:"adj", d:"DIABETES tipo 2 + HAS: PREFERIR iSRA (proteção renal — reduz RAC). BCC e tiazídico OK. EVITAR β-bloq se hipoglicemias frequentes", o:"Meta: <130/80. Combinação iSRA + BCC se DM + alto RCV (ACCOMPLISH)."},

{etapa:"adj", d:"IRC + HAS: iSRA são NEFROPROTETORES — manter mesmo com ↑ Cr até 30%. Tiazídico INEFICAZ se TFG <30 — usar FUROSEMIDA. Cuidado com K+ (hipercalemia em iSRA + IRC)", o:"Investigar microalbuminúria/RAC. KDIGO 2024: meta <130/80."},

{etapa:"adj", d:"IC com FE REDUZIDA + HAS: usar drogas que MELHORAM DESFECHO = iSRA (ou Entresto) + β-bloq (carvedilol, bisoprolol, metoprolol SUCCINATO) + espironolactona ± diurético", o:"NÃO usar atenolol (sem evidência em IC). Bisoprolol/carvedilol/metoprolol-succ são padrão (CIBIS-II, COPERNICUS, MERIT-HF)."},

{etapa:"adj", d:"NEGRO/AFRODESCENDENTE: monoterapia preferida = BCC ou tiazídico (resposta a iSRA isolado pode ser menor — sistema renina baixo)", o:"Em terapia combinada: sem diferença significativa entre raças. ALLHAT, AASK."},

{etapa:"adj", d:"IDOSO ≥80 anos: MONOTERAPIA inicial. Iniciar dose MENOR (1/2). Cuidado HIPOTENSÃO ORTOSTÁTICA — medir PA EM PÉ. Meta <130/80 SE TOLERADO (HYVET evidência)", o:"PA mín tolerada PAD ≥65 (hipoperfusão coronariana). Indapamida foi a droga do HYVET (evidência em ≥80a)."},

{etapa:"adj", d:"PÓS-IAM / angina + HAS: usar iSRA + β-bloqueador (carvedilol, bisoprolol, metoprolol succ)", o:"β-bloq é proteção CV após IAM por 3-12 meses (mais em IC, FA)."},

{etapa:"adj", d:"DAOP + HAS: iSRA + BCC (ramipril teve evidência específica em HOPE)", o:"β-bloq não é contraindicado mas pode piorar claudicação levemente — cautela."},

{etapa:"adj", d:"PÓS-AVC + HAS: iSRA + tiazídico (PROGRESS trial — perindopril + indapamida)", o:"Reduz recorrência AVC em 28%."},

{etapa:"adj", d:"HAS + HPB sintomática: doxazosina 1-8 mg/d (trata HAS + sintomas urinários) OU combinação", o:"Iniciar dose AO DEITAR — risco hipotensão postural 1ª dose."},

{etapa:"adj", d:"HAS + GOTA: preferir LOSARTANA entre BRA (único uricosúrico — REDUZ ácido úrico)", o:"Evitar tiazídicos (precipita gota) e atenolol (aumenta urato)."},

// ============== CRISE HIPERTENSIVA ==============
{etapa:"adj", d:"⚠ CRISE HIPERTENSIVA: PA ≥180/120 mmHg. Diferenciar URGÊNCIA vs EMERGÊNCIA", o:""},

{etapa:"adj", d:"URGÊNCIA hipertensiva (SEM LOA aguda): reduzir PA em HORAS-DIAS com VO. Captopril 25 mg VO/SL (repetir 30-60 min se necessário) OU Clonidina 0,1-0,2 mg VO", o:"NÃO baixar PA abruptamente — risco hipoperfusão cerebral/coronariana."},

{etapa:"adj", d:"EMERGÊNCIA hipertensiva (COM LOA aguda — encefalopatia, EAP, AVC, dissecção, eclâmpsia, IAM): UTI + IV. Drogas: nitroprussiato 0,25-10 mcg/kg/min OU NTG 5-200 mcg/min OU esmolol OU hidralazina conforme contexto", o:"Reduzir PAM 20-25% em 1h (mais lento em AVC). Não normalizar abruptamente."},

{etapa:"adj", d:"DISSECÇÃO AÓRTICA: ESMOLOL IV bolus 500 mcg/kg + BIC 50-200 mcg/kg/min ANTES de iniciar NPS. Sem β-bloq, NPS aumenta cisalhamento aórtico", o:"Alvo: FC <60, PAS <120 em 5-10 min. Cirurgia urgente se Stanford A."},

{etapa:"adj", d:"ECLÂMPSIA: SULFATO DE MAGNÉSIO 4-6 g IV bolus + 1-2 g/h BIC × 24h + Hidralazina 5-10 mg IV cada 20 min (alvo PA 140-150/90-100) + parto", o:"Monitor: reflexo patelar, FR, diurese. Antídoto Mg: gluconato de Ca 10% 10 mL IV."},

// ============== METAS E SEGUIMENTO ==============
{etapa:"alta", d:"⚠ META TERAPÊUTICA DBHA 2025: <130/80 mmHg para TODOS os hipertensos (independente de idade/risco)", o:"Limite: intolerância. Idoso frágil/com hipoperfusão: até <140/90 SE TOLERADO. PAD <60 evitar (hipoperfusão coronariana)."},

{etapa:"alta", d:"SEGUIMENTO: HAS controlada (com medicação ajustada): retorno 3-6 meses. HAS não controlada: retorno 1-2 meses até atingir meta. HAS resistente / em ajuste: retorno mensal", o:"MAPA/MRPA anual. Avaliar adesão (sempre!), MEV, lesões alvo."},

{etapa:"alta", d:"AVALIAÇÃO ANUAL DE LOA: ECG (HVE, ritmo); RAC (microalbuminúria); creatinina + TFG; eco se sintoma/sinais HVE/IC; retinografia em casos selecionados; fundoscopia em emergência hipertensiva", o:"Monitorar evolução. LOA presente = doença mais grave, manejo mais agressivo."},

{etapa:"alta", d:"DESPRESCRIÇÃO/REDUÇÃO: considerar em paciente com PA estável <120/70 por ≥1 ano + perda de peso/MEV consolidada. Reduzir gradualmente uma droga por vez", o:"NÃO suspender abruptamente, especialmente β-bloq (rebote)."},

{etapa:"alta", d:"PRÓXIMOS PASSOS — encaminhamento à especialidade: (1) HAS resistente refratária; (2) suspeita HAS secundária; (3) LOA importante (IRC estágio ≥4, IC, AVC, IAM)", o:"Nefro/cardio. Manter acompanhamento conjunto na APS."},
],

alertas:[
{nivel:"crit", txt:"CRISE HIPERTENSIVA com LOA AGUDA (encefalopatia, EAP, AVC, dissecção, eclâmpsia, IAM) = EMERGÊNCIA → IV em UTI. Reduzir PAM 20-25% em 1h (mais lento em AVC isquêmico — alvo PAS <220/120 inicial)."},
{nivel:"crit", txt:"DISSECÇÃO AÓRTICA: SEMPRE β-bloq (esmolol) ANTES de vasodilatador (NPS). Inversão da ordem causa expansão da dissecção. Alvo FC <60, PAS <120."},
{nivel:"crit", txt:"GESTAÇÃO: IECA, BRA, alisquireno, atenolol são TERATOGÊNICOS / RCIU. SUSPENDER imediatamente se gestação. Trocar para METILDOPA, NIFEDIPINO RETARD ou HIDRALAZINA."},
{nivel:"crit", txt:"TRIPLE WHAMMY: iSRA + AINE + diurético = IRA aguda. EVITAR essa combinação. Em paciente com HAS+artrose: usar paracetamol/dipirona em vez de AINE."},
{nivel:"warn", txt:"BRADICARDIA SINTOMÁTICA + β-bloq + BCC não-DHP (verapamil/diltiazem) = BAV avançado. NÃO COMBINAR."},
{nivel:"warn", txt:"DBHA 2025 mudanças: (1) PRÉ-HAS reclassificada (120-139/80-89, antes era 'normal'); (2) META UNIVERSAL <130/80 (sem mais individualização por idade/risco); (3) β-bloq NÃO é mais 1ª linha em HAS isolada; (4) RAC recomendada em todos os hipertensos."},
{nivel:"warn", txt:"HAS NA GESTAÇÃO: pré-eclâmpsia grave necessita SULFATO DE MAGNÉSIO 4-6 g IV ataque + 1-2 g/h × 24h (prevenção convulsão) — independente de anti-hipertensivo."},
{nivel:"info", txt:"ALLHAT (clortalidona) vs LIFE (losartana): em paciente médio sem comorbidade — desfechos semelhantes. Em paciente com HVE: losartana foi superior a atenolol (LIFE). DBHA 2025 prefere trio de ouro qualquer combinação."},
{nivel:"info", txt:"COMBINAÇÃO PREFERENCIAL: ACCOMPLISH trial mostrou que IECA + BCC foi SUPERIOR a IECA + tiazídico em alto risco CV. Em paciente comum, ambas são aceitáveis."},
],

fluxo:null,
diretriz:"DBHA 2025 (SBC/SBH/SBN). ESC HTN 2024. ACC/AHA 2025. KDIGO 2024 (em IRC). ACOG Hypertension in Pregnancy 2020 (em gestante)."
},
{id:"pericardite", sis:"cardio", grav:"media",
nome:"Pericardite Aguda / Tamponamento",
sin:["pericardite","tamponamento","derrame pericárdico"],
def:"Pericardite: dor torácica pleurítica (alivia inclinado p/ frente, piora em supino) + atrito pericárdico + ECG (supra ST côncavo difuso + infra PR) + derrame pericárdico (ECO). Tamponamento: dor + Beck (hipotensão + bulhas abafadas + estase jugular) + pulso paradoxal >10 mmHg.",
exames:["ECG (supra ST côncavo + infra PR difusos)","RX tórax (coração em moringa se derrame grande)","Ecocardiograma (CRÍTICO)","HMG, PCR, troponina, função renal","Hemocultura se febril, autoanticorpos se suspeita autoimune","HIV, TB se fator de risco"],
rx:[
{etapa:"escala", d:"AINE — Ibuprofeno",do:"600-800 mg VO 8/8h × 1-2 sem (depois desmame)",via:"VO",o:"1ª linha pericardite aguda. AAS 750-1000 mg 8/8h se pós-IAM."},
{etapa:"escala", d:"Colchicina",do:"0,5 mg VO 12/12h (>70 kg) ou 0,5 mg/d (<70 kg) × 3 meses",via:"VO",o:"COMBINAR com AINE — reduz recidiva (ICAP trial, 50% ↓ recorrência)."},
{etapa:"escala", d:"Pericardiocentese",do:"Punção subxifoide ou para-apical, ECO-guiada",via:"—",o:"TAMPONAMENTO — emergência. NÃO esperar ECO formal se Beck completo + instável."},
{etapa:"adj", d:"Corticoide",do:"Prednisona 0,2-0,5 mg/kg/d × 2-4 sem com desmame",via:"VO",o:"Apenas em refratários, autoimunes, urêmica, TB tratada. Evitar 1ª linha (↑ recidiva)."},
],
alertas:[
{t:"crit",x:"TAMPONAMENTO é diagnóstico CLÍNICO + ECO. Pulso paradoxal + colapso de câmaras direitas no ECO. Pericardiocentese SALVA VIDA — não esperar laboratório/RX."},
{t:"crit",x:"DIFERENCIAR de SCA: supra ST difuso CÔNCAVO (pericardite) vs convexo localizado (IAM); infra PR (pericardite) vs Q (IAM); sem reciprocidade na pericardite."},
{t:"warn",x:"Etiologia: viral/idiopática 80%, urêmica, TB (BR), neoplásica, autoimune (LES), pós-IAM (Dressler), pós-pericardiectomia."},
],
fisio:"Inflamação pericárdica → líquido seroso/serossanguinolento/purulento no saco pericárdico. Pequeno acúmulo gradual → tolerado (até 1-2 L). Acúmulo rápido (mesmo 100-200 mL) → tamponamento (a serosa não distende rápido). O ↑pressão intrapericárdica colaba átrios → ↓retorno venoso → ↓débito → choque obstrutivo. Pulso paradoxal: queda inspiratória de PAS >10 mmHg por exagero da interdependência ventricular.",
mec:[
{d:"AINE",x:"Inibe COX → ↓PG → ↓inflamação pericárdica. Cuidado em pós-IAM (pode prejudicar remodelamento) — preferir AAS."},
{d:"Colchicina",x:"Liga-se à tubulina → impede polimerização de microtúbulos → bloqueia migração de neutrófilos e ativação do inflamassoma NLRP3 (relevante na pericardite recorrente). Custa pouco, alta evidência."},
],
diretriz:"ESC 2015 Pericardial Diseases (Adler Y et al., Eur Heart J 2015;36:2921, DOI:10.1093/eurheartj/ehv318). ICAP Trial (Imazio M et al., NEJM 2013;369:1522).",
fluxo:null,
calcs:[],
},
{
  id: "sca", sis: "cardio", grav: "alta",
  nome: "Síndrome Coronariana Aguda (SCA / IAM)",
  sin: ["IAM", "infarto", "STEMI", "NSTEMI", "angina instável", "supra de ST"],
  def: "Dor torácica anginosa + alteração de ECG (supra ≥1 mm em 2 derivações contíguas ou ≥2 mm V2-V3 = IAMCST; infra/inversão T = IAMSSST/AI) + troponina.",
  exames: ["ECG <10 min da chegada (repetir 15–30 min se inicial não-diagnóstico)", "Troponina ultrassensível 0–1h ou 0–3h", "RX tórax", "Função renal, glicemia, lipidograma", "Hemograma, coagulograma"],
  rx: [
    {etapa:"inicial", d:"ECG <10 min + Monitor + 2 acessos",do:"ECG seriado se inicial não-diagnóstico (15-30 min)",via:"—",o:"Tempo porta-ECG é crítico. Repetir ECG se dor mantida e 1º normal."},
    {etapa:"inicial", d:"AAS",do:"300 mg VO mastigar",via:"VO",o:"Primeira dose IMEDIATA. Manutenção 100 mg/d indefinidamente."},
    {etapa:"inicial", d:"O₂ se SpO₂ <90% ou dispneia",do:"2-4 L/min cateter",via:"—",o:"NÃO oxigênio rotineiro em SpO₂ normal (risco vasoconstrição coronária)."},
    {etapa:"escala", d:"② Inibidor P2Y12 — Clopidogrel",do:"300-600 mg VO ataque",via:"VO",o:"600 mg se ICP. Manutenção 75 mg/d × 12 meses. Idoso >75a + fibrinólise: 75 mg sem ataque."},
    {etapa:"escala", d:"② Inibidor P2Y12 — Ticagrelor (alternativa)",do:"180 mg VO ataque + 90 mg 12/12h",via:"VO",o:"Preferido em IAMCST/IAMSSST de alto risco. CI: sangramento, AVC hemorrágico. NÃO usar com fibrinolítico."},
    {etapa:"escala", d:"② Inibidor P2Y12 — Prasugrel (só ICP)",do:"60 mg VO ataque + 10 mg/d",via:"VO",o:"Apenas para ICP. CI: AVC prévio, >75a, <60 kg."},
    {etapa:"escala", d:"③ Anticoagulante — Enoxaparina",do:"1 mg/kg SC 12/12h",via:"SC",o:"Bolus IV 30 mg se IAMCST com fibrinólise. Idoso >75a: 0,75 mg/kg 12/12h sem bolus."},
    {etapa:"escala", d:"④ REPERFUSÃO — ICP primária (preferida)",do:"Hemodinâmica em ≤90 min porta-balão",via:"—",o:"PADRÃO-OURO no IAMCST. Acionar hemodinâmica IMEDIATAMENTE."},
    {etapa:"escala", d:"④ REPERFUSÃO — Alteplase (se ICP indisponível)",do:"15 mg bolus + 0,75 mg/kg em 30 min + 0,5 mg/kg em 60 min (máx 100 mg)",via:"IV",o:"Se ICP não disponível em ≤120 min e <12h de sintomas, sem CI absoluta. Porta-agulha ≤30 min."},
    {etapa:"adj", d:"Atorvastatina",do:"80 mg VO dose única",via:"VO",o:"Independente do colesterol. Estabiliza placa e reduz eventos."},
    {etapa:"adj", d:"Nitroglicerina",do:"5-200 mcg/min IV titular",via:"IV",o:"Para dor isquêmica + congestão. CI: PAS <90, IAM de VD, sildenafil <24h."},
    {etapa:"adj", d:"Metoprolol (após 24h se estável)",do:"25-50 mg VO 12/12h",via:"VO",o:"NÃO em fase aguda se Killip ≥II, FC<60, PAS<100, BAV. Iniciar quando estável."},
    {etapa:"adj", d:"Morfina (apenas refratária)",do:"2-4 mg IV",via:"IV",o:"Apenas se dor refratária a nitrato. Cuidado: associada com pior desfecho (CRUSADE)."},
    {etapa:"alta", d:"Alta — prescrição MOVED",do:"MEED (Metoprolol+Estatina+Enalapril+DAPT)",via:"VO",o:"DAPT 12 meses (AAS + clopi/tica/prasu). Estatina alta intensidade. IECA/BRA se FE<40. β-bloq. Reabilitação cardíaca."},
  ],
  alertas: [
    { t: "crit", x: "IAMCST: porta-balão ≤90 min ou porta-agulha ≤30 min. Tempo é músculo." },
    { t: "warn", x: "NÃO fazer pré-tratamento rotineiro com inibidor P2Y12 em IAMSSST com estratégia invasiva precoce <24h (ESC 2020, SBC 2021)." },
    { t: "info", x: "IAM de VD (supra em V1, V3R, V4R): NITRATO É CONTRAINDICADO. Tratar com volume." },
  ],
  fisio: "A SCA decorre de ruptura ou erosão de placa aterosclerótica vulnerável → exposição do conteúdo lipídico → ativação plaquetária via colágeno/fator tecidual → agregação plaquetária e cascata de coagulação → trombo. Se a oclusão é <strong>parcial</strong>, há angina instável ou IAMSSST (necrose subendocárdica, infradesnível/inversão T). Se a oclusão é <strong>total</strong>, há IAMCST (necrose transmural, supradesnível). A janela terapêutica é estreita: cada 30 min de atraso na reperfusão = 1% absoluto de aumento de mortalidade em 1 ano. A estratégia primária é a <strong>angioplastia primária</strong> (ICP) — superior à fibrinólise se realizada em ≤120 min da chegada.",
  mec: [
    { d: "AAS", x: "Acetila e <strong>inibe irreversivelmente a COX-1 plaquetária</strong>, impedindo a síntese de tromboxano A2 (potente agregante e vasoconstritor). Efeito por toda a vida da plaqueta (7–10 dias)." },
    { d: "Clopidogrel / Prasugrel / Ticagrelor", x: "Antagonistas do receptor <strong>P2Y12 plaquetário</strong>. Clopidogrel e prasugrel são pró-drogas que se ligam irreversivelmente; ticagrelor é diretamente ativo e reversível. Bloqueiam a amplificação da agregação plaquetária dependente de ADP." },
    { d: "Enoxaparina", x: "Heparina de baixo peso molecular — ativa antitrombina III com preferência por <strong>anti-Xa</strong> (4:1 vs. anti-IIa). Efeito mais previsível que HNF, não requer aPTT." },
    { d: "Alteplase", x: "rt-PA recombinante — converte plasminogênio em plasmina, que <strong>degrada fibrina</strong>. Fibrinoespecífica (atua preferencialmente em coágulos)." },
    { d: "Atorvastatina", x: "Inibe HMG-CoA redutase, ↓síntese de colesterol; efeito pleiotrópico precoce: estabiliza placa, ↓inflamação, melhora função endotelial." },
    { d: "Nitroglicerina", x: "Doador de NO → ativa guanilato ciclase → ↑GMPc → relaxa músculo liso vascular. <strong>Venodilatação predominante</strong> em doses baixas (↓pré-carga), arterial em doses altas." },
    { d: "Metoprolol", x: "β1-bloqueador — ↓FC, ↓contratilidade, ↓consumo miocárdico de O₂ e ↓arritmias." },
  ],
  diretriz: "Diretriz SBC SCA sem Supra de ST 2021 (Nicolau JC et al., Arq Bras Cardiol 2021;117(1):181–264). Diretriz SBC IAM com Supra de ST 2024. 2023 ESC ACS Guidelines (Byrne RA et al., Eur Heart J 2023;44:3720–3826, DOI:10.1093/eurheartj/ehad191).",
  imgs: [
    {src:"https://upload.wikimedia.org/wikipedia/commons/7/76/12_Lead_EKG_ST_Elevation_tracing_color_coded.jpg",
     alt:"ECG 12 derivações com supra de ST",
     caption:"IAMCST — supra de ST em parede inferior (II, III, aVF), com imagem em espelho em DI/aVL.",
     source:"Wikimedia Commons / Glenlarson (Domínio público)"},
  ],
  fluxo: "sca",
  calcs: ["heart", "grace", "timi"],
},
{id:"sincope", sis:"cardio", grav:"media",
nome:"Síncope",
sin:["síncope","desmaio","perda transitória de consciência","lipotimia"],
def:"Perda transitória de consciência por hipoperfusão cerebral global, súbita, breve (<5 min), com recuperação completa espontânea. 3 grandes grupos: REFLEXA (60%), ORTOSTÁTICA (15%), CARDIOGÊNICA (10-30%). Excluir convulsão, AVC, TCE.",
exames:["ECG 12 derivações","Glicemia capilar","HMG, troponina (se cardiogênica suspeita)","β-HCG mulher fértil","Eletrólitos","Manobra ortostática (HipoTA = ↓PAS ≥20 ou PAD ≥10 em 3 min em pé)"],
rx:[
{etapa:"escala", d:"REFLEXA (vasovagal)",do:"Orientações: hidratação, manobras de contrapressão, sair de gatilhos",via:"—",o:"Boa evolução. β-bloq podem ser tentados se recorrente."},
{etapa:"escala", d:"ORTOSTÁTICA",do:"Suspender hipotensores se possível + hidratação + meias compressivas",via:"—",o:"Fludrocortisona 0,1 mg/d ou midodrina 5-10 mg 8/8h em refratários."},
{etapa:"escala", d:"CARDIOGÊNICA",do:"Internação + monitorização contínua + tratamento da causa",via:"IV",o:"Marcapasso provisório se BAV avançado/sinusal grave. CDI em arritmia ventricular."},
],
alertas:[
{t:"crit",x:"BANDEIRAS VERMELHAS (alto risco — internação): síncope sentado ou em esforço, palpitações antes, história familiar de morte súbita, cardiopatia conhecida, sopro novo, ECG anormal, idade >65a, lesão grave, instabilidade hemodinâmica."},
{t:"warn",x:"Diferenciar SÍNCOPE de CRISE CONVULSIVA — convulsão tem aura, fase tônico-clônica >10s, confusão pós, mordedura lateral de língua, incontinência. Síncope tem mioclonias breves (<10s) sem confusão pós-ictal."},
{t:"info",x:"San Francisco Syncope Rule (CHESS): ICC História, Hto<30, ECG anormal, Shortness of breath, PAS<90. Qualquer = alto risco."},
],
fisio:"Cérebro depende de fluxo constante (~50 mL/100g/min). Interrupção >6-8s já causa LOC. Mecanismos: (1) REFLEXA — eferência vagal súbita (vasovagal, situacional, do seio carotídeo) → bradicardia + vasodilatação; (2) ORTOSTÁTICA — falha autonômica (DM, Parkinson, drogas) ou volume baixo; (3) CARDIOGÊNICA — arritmia (bradi/taqui) ou obstrutiva (EAo, MCH, TEP, dissecção, tamponamento, mixoma).",
mec:[],
diretriz:"ESC 2018 Syncope (Brignole M et al., Eur Heart J 2018;39:1883, DOI:10.1093/eurheartj/ehy037). AHA 2017 (Shen WK et al., Circulation 2017;136:e60).",
fluxo:null,
calcs:[],
},
{
  id: "tep", sis: "cardio", grav: "alta",
  nome: "TVP / Tromboembolismo Pulmonar (TEP)",
  sin: ["TVP", "trombose", "TEP", "embolia pulmonar", "tromboembolismo"],
  def: "TVP: dor/edema unilateral de MMII, Wells ≥2. TEP: dispneia, dor torácica pleurítica, taquicardia, ± hipotensão. Alta mortalidade no TEP maciço (>50% se choque + RV dilatado).",
  exames: ["Wells / sPESI / PERC", "D-dímero (alto VPN; usar em baixa probabilidade)", "Angio-TC pulmonar (padrão-ouro)", "USG Doppler venoso de MMII", "ECG (S1Q3T3, taquicardia)", "Eco TT (sobrecarga VD)", "Troponina + BNP (estratificação)"],
  rx: [
    {etapa:"inicial", d:"Estratificação de risco — Wells/PERC/Geneva",do:"Probabilidade pré-teste",via:"—",o:"Baixa+PERC negativo: exclui. Baixa-moderada: D-dímero. Alta: angio-TC direto."},
    {etapa:"inicial", d:"O₂ se SpO₂ <92%",do:"Cateter/máscara conforme",via:"—",o:"Suporte ventilatório se grave (HFNC, VNI, IOT)."},
    {etapa:"inicial", d:"Acesso + monitorização",do:"2 acessos + ECG + SpO₂ + PA",via:"—",o:"Em TEP maciço: monitorização contínua, considerar PA invasiva."},
    {etapa:"escala", d:"① Anticoagulação — Enoxaparina (estável)",do:"1 mg/kg SC 12/12h OU 1,5 mg/kg/d",via:"SC",o:"1ª linha em TVP/TEP estável. ClCr 15-30: 1 mg/kg/d. CI: ClCr <15."},
    {etapa:"escala", d:"① Anticoagulação — HNF (instável, IRC, trombólise iminente)",do:"80 UI/kg bolus + 18 UI/kg/h BIC",via:"IV",o:"Manter aPTT 1,5-2,5× controle. Indicação: TEP maciço, IRC grave (ClCr<30), trombólise iminente, instabilidade."},
    {etapa:"escala", d:"① Anticoagulação — Rivaroxabana VO (alternativa)",do:"15 mg 12/12h × 21 dias, depois 20 mg/d",via:"VO",o:"Dose única (sem ponte com heparina). Tomar com alimento >10 mg."},
    {etapa:"escala", d:"① Anticoagulação — Apixabana VO (alternativa)",do:"10 mg 12/12h × 7 dias, depois 5 mg 12/12h",via:"VO",o:"Sem ponte com heparina. Alternativa principal a rivaroxabana."},
    {etapa:"escala", d:"② TROMBÓLISE — Alteplase (TEP MACIÇO)",do:"100 mg IV em 2h (10 mg bolus + 90 mg em 2h). PCR: 0,6 mg/kg em 15 min",via:"IV",o:"INDICAÇÃO: TEP maciço (choque/PAS <90 sustentado). Mortalidade SEM trombólise 25-50%. CI: AVC isquêmico <3m, AVCh, trauma SNC, sangramento ativo."},
    {etapa:"escala", d:"③ TROMBECTOMIA (se trombólise CI ou falha)",do:"Cirúrgica ou cateter-direcionada",via:"—",o:"TEP maciço com CI a trombólise ou falência apesar da trombólise. Centro especializado."},
    {etapa:"adj", d:"Suporte hemodinâmico se choque",do:"Noradrenalina + cristaloide cauteloso (250-500 mL)",via:"IV",o:"Cuidado com volume excessivo — pode piorar disfunção de VD. Noradrenalina preferível."},
    {etapa:"adj", d:"Filtro de VCI (indicações específicas)",do:"Indicação restrita",via:"—",o:"Apenas se CI absoluta à anticoagulação OU TEP recorrente apesar de anticoagulação plena."},
    {etapa:"alta", d:"Anticoagulação prolongada",do:"≥3 meses (provocado) ou indefinido (não provocado, trombofilia, câncer)",via:"VO",o:"Reavaliação anual. Considerar HEMORR2HAGES/HAS-BLED para risco hemorrágico."},
  ],
  alertas: [
    { t: "crit", x: "TEP maciço (choque/PAS <90 sustentado): trombólise sistêmica é classe I. Mortalidade sem trombólise 25–50%." },
    { t: "warn", x: "Trombólise: CI absolutas — AVC isquêmico <3m, AVC hemorrágico em qualquer momento, trauma SNC, neoplasia SNC, sangramento ativo." },
    { t: "info", x: "Anticoagulação por ≥3 meses; estender se causa não identificada ou trombofilia." },
  ],
  fisio: "A formação de trombo venoso segue a tríade de Virchow: <strong>estase, lesão endotelial e hipercoagulabilidade</strong> (pós-operatório, imobilização, gravidez, neoplasia, contraceptivos, trombofilias). O trombo formado em veias profundas dos MMII embolia para artéria pulmonar via VCI + AD + VD. A obstrução do leito vascular pulmonar gera (1) <strong>distúrbio V/Q</strong> com hipoxemia, (2) <strong>hipertensão pulmonar aguda</strong> e sobrecarga de VD, podendo evoluir para falência ventricular direita aguda e choque obstrutivo. A liberação de mediadores (serotonina, tromboxano) causa broncoespasmo e vasoconstrição adicional. Mortalidade do TEP não tratado: 30%; tratado: 2–8%.",
  mec: [
    { d: "Heparina (HNF)", x: "Liga-se à antitrombina III ativando-a 1000×; o complexo inativa <strong>fatores IIa (trombina) e Xa</strong> proporcionalmente. Monitorada por aPTT. Reversão: protamina." },
    { d: "Enoxaparina (HBPM)", x: "Cadeia menor — maior <strong>seletividade anti-Xa</strong> (3:1 vs. anti-IIa). Farmacocinética previsível, sem necessidade de monitorização rotineira (exceto IRC, obeso). Reversão parcial: protamina (~60%)." },
    { d: "Rivaroxabana / Apixabana", x: "Inibidores diretos do fator Xa (sem necessidade de antitrombina). Bloqueiam conversão de protrombina em trombina. Reversão específica: andexanet alfa." },
    { d: "Alteplase (rt-PA)", x: "Ativador tecidual do plasminogênio recombinante — ativa plasminogênio em plasmina, que <strong>degrada fibrina</strong> do trombo." },
  ],
  diretriz: "2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism (Konstantinides SV et al., Eur Heart J 2020;41:543–603, DOI:10.1093/eurheartj/ehz405). ASH 2020 VTE guidelines.",
  fluxo: null,
  calcs: ["wells-tep", "wells-tvp", "pesi"],
},
{
  id: "tsv", sis: "cardio", grav: "alta",
  nome: "Taquicardia Supraventricular (TSV)",
  sin: ["TSV", "taqui supra", "AVNRT", "AVRT", "taquicardia paroxística"],
  def: "Taquicardia regular de QRS estreito (<120 ms), FC 150–250 bpm, geralmente por reentrada nodal (AVNRT) ou via acessória (AVRT).",
  exames: ["ECG 12 derivações", "Eletrólitos (K, Mg)", "TSH se recorrente", "β-HCG em mulher fértil"],
  rx: [
    { etapa:"inicial", d: "Manobra vagal", do: "Valsalva modificada (REVERT)", via: "—", o: "Tentar primeiro em paciente estável. Decúbito + elevar MMII após esforço expiratório por 15 s." },
    { etapa:"escala", d: "Adenosina", do: "6 mg IV bolus rápido", via: "IV", o: "Veia calibrosa (antecubital), em <1 s + flush SF 20 mL imediato. Avisar paciente: sensação de morte iminente passageira (5–10 s)." },
    { etapa:"escala", d: "Adenosina (2ª dose)", do: "12 mg IV bolus", via: "IV", o: "Se não reverter em 1–2 min. Pode repetir 12 mg." },
    { etapa:"escala", d: "Verapamil", do: "2,5–5 mg IV em 2 min", via: "IV", o: "Alternativa se sem WPW. Evitar com β-bloq, IC ou hipotensão." },
    { etapa:"escala", d: "Metoprolol", do: "2,5–5 mg IV em 2 min", via: "IV", o: "Repetir até 15 mg. Alternativa em pacientes estáveis sem broncoespasmo." },
  ],
  alertas: [
    { t: "crit", x: "Instabilidade (hipotensão, dor torácica, ↓consciência, IC) → cardioversão sincronizada 50–100 J imediata." },
    { t: "warn", x: "Em WPW com FA pré-excitada (QRS largo, irregular, MUITO rápida): NÃO usar adenosina, β-bloq, Ca²⁺-bloq ou digital — risco de FV. Usar procainamida ou cardioversão." },
  ],
  fisio: "A maioria das TSVs decorre de circuitos de reentrada envolvendo o nó AV. Na <strong>AVNRT</strong> (60%), existem duas vias funcionais dentro do próprio nó AV (rápida e lenta) que formam um pequeno circuito. Na <strong>AVRT</strong> (30%), o circuito utiliza uma via acessória (ex.: feixe de Kent no Wolff-Parkinson-White). O gatilho é geralmente uma extrassístole atrial que encontra uma via refratária e percorre a outra, iniciando o ciclo. A FC alta (150–250 bpm) compromete o enchimento ventricular, reduzindo o débito cardíaco e podendo causar sintomas (palpitação, dispneia, dor torácica, pré-síncope). Em corações estruturalmente normais o prognóstico é excelente; a presença de instabilidade exige reversão imediata.",
  mec: [
    { d: "Adenosina", x: "Nucleosídeo endógeno que se liga a receptores <strong>A1 acoplados a Gi</strong> nas células do nó AV. Ativa canais de K⁺ retificadores (hiperpolarização) e inibe corrente Ca²⁺ tipo L → <strong>bloqueio AV transitório de 6–10 s</strong> que interrompe o circuito de reentrada. Meia-vida ultracurta (<10 s) por captação celular e degradação pela adenosina deaminase." },
    { d: "Verapamil", x: "Bloqueador de canais de Ca²⁺ tipo L (classe IV) com seletividade nodal — prolonga período refratário do nó AV." },
    { d: "Metoprolol", x: "Antagonista β1-seletivo — reduz automatismo e condução nodal por antagonismo simpático." },
  ],
  diretriz: "AHA ACLS Adult Tachycardia (Panchal AR et al., Circulation 2020;142:S366–S468, DOI:10.1161/CIR.0000000000000916). Diretriz SBC de Arritmias Supraventriculares 2016.",
  fluxo: "tsv",
  calcs: [],
},
{
  id: "tv", sis: "cardio", grav: "alta",
  nome: "Taquicardia Ventricular (TV)",
  sin: ["TV", "taquicardia ventricular monomórfica", "torsades"],
  def: "Taquicardia de QRS largo (≥120 ms), FC >100, origem ventricular. Monomórfica geralmente por reentrada em cicatriz pós-IAM; polimórfica/torsades em QT longo.",
  exames: ["ECG 12 derivações (comparar com prévio)", "Eletrólitos (K, Mg, Ca)", "Troponina", "Função renal", "Magnésio sérico se QT longo"],
  rx: [
    { etapa:"escala", d: "Cardioversão sincronizada", do: "100 J → 200 J", via: "—", o: "1ª linha SEMPRE que instável (PAS <90, dor torácica, EAP, alteração de consciência). Sedação se possível (etomidato 0,15 mg/kg ou cetamina)." },
    { etapa:"escala", d: "Amiodarona", do: "150 mg IV em 10 min", via: "IV", o: "Estável. Diluir em SG 5% 100 mL. Manutenção: 1 mg/min × 6h, depois 0,5 mg/min × 18h. Total <2,2 g/24h." },
    { etapa:"escala", d: "Sulfato de magnésio", do: "2 g IV em 10 min", via: "IV", o: "TV polimórfica / torsades de pointes. Pode repetir." },
    { etapa:"escala", d: "Lidocaína", do: "1–1,5 mg/kg IV bolus", via: "IV", o: "Alternativa em TV isquêmica. Manutenção 1–4 mg/min." },
  ],
  alertas: [
    { t: "crit", x: "TV sem pulso ou FV → desfibrilação imediata 200 J bifásica + RCP. Algoritmo ACLS PCR." },
    { t: "warn", x: "Torsades: corrigir K e Mg, suspender drogas QT-prolongadoras (haloperidol, ondansetrona, macrolídeos, quinolonas, metadona)." },
  ],
  fisio: "A TV origina-se abaixo do feixe de His. A causa mais comum é <strong>reentrada em torno de cicatriz miocárdica</strong> pós-IAM, mas também ocorre por automatismo anormal (intoxicação digitálica, hipocalemia) ou atividade deflagrada (QT longo → torsades). Na TV polimórfica do tipo torsades de pointes, a repolarização ventricular prolongada (QTc >500 ms) gera EADs (early after-depolarizations) que disparam batimentos ectópicos em padrão de \"giro em torno do eixo\". A FC alta e a perda do sincronismo AV reduzem o débito cardíaco; degeneração para FV é o risco principal.",
  mec: [
    { d: "Amiodarona", x: "Antiarrítmico <strong>multicanal</strong> classe III (Vaughan-Williams) que também tem ação classe I (bloqueio Na⁺), classe II (β-bloqueio não competitivo) e classe IV (bloqueio Ca²⁺). O bloqueio dos canais de K⁺ prolonga a repolarização e o período refratário efetivo, suprimindo reentradas. Efeitos adversos crônicos: tireoide, fígado, pulmão, córnea, pele." },
    { d: "Magnésio", x: "Estabiliza membrana miocárdica, suprime EADs e encurta o QT em torsades, prevenindo recorrência." },
    { d: "Lidocaína", x: "Bloqueador de canais de Na⁺ (classe IB) preferencialmente em estado ativo/inativo — atua em tecido isquêmico com maior despolarização." },
  ],
  diretriz: "AHA ACLS Tachycardia Algorithm 2020 (Panchal AR et al., Circulation 2020;142:S366–S468, DOI:10.1161/CIR.0000000000000916). Diretriz Brasileira de Arritmias Ventriculares (SBC, Arq Bras Cardiol 2020).",
  fluxo: null,
  calcs: [],
},
);
