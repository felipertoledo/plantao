/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — BIBLIOTECA DE MEDICAÇÕES
   Estilo Whitebook didático: fisiopatologia + farmacocinética
   + doses por indicação + ajustes + preparo + alertas
   =========================================================== */

const MEDICACOES = [

/* ============== 1. CEFTRIAXONA ============== */
{id:"med-ceftriaxona", classe:"Antibiótico — Cefalosporina 3ª geração", grupo:"atb",
nome:"Ceftriaxona",
sin:["Rocefin","Triaxin","CFX"],
formas:[
  "Frasco-ampola 500 mg IV/IM",
  "Frasco-ampola 1 g IV/IM (mais usado)",
  "Frasco-ampola 2 g IV (apenas)",
],
resumo:"β-lactâmico de amplo espectro. 1ª linha em PAC moderada-grave, pielonefrite, meningite, sepse comunitária. Boa penetração SNC.",
dose_rapida:"1-2 g IV/d em dose única OU 1 g 12/12h",

doses:[
  {ind:"PAC moderada-grave", dose:"1-2 g IV/d", obs:"Combinar com macrolídeo (azitromicina) para atípicos"},
  {ind:"Pielonefrite", dose:"1-2 g IV/d", obs:"Step-down VO ciprofloxacino quando estável"},
  {ind:"Sepse comunitária / foco desconhecido", dose:"2 g IV/d", obs:"Combinar com vancomicina se MRSA suspeita"},
  {ind:"Meningite bacteriana adulto", dose:"2 g IV 12/12h", obs:"+ vancomicina + dexametasona ANTES da 1ª dose ATB"},
  {ind:"PBE em cirrótico", dose:"1-2 g IV/d × 5-7 dias", obs:"Profilaxia em HDA cirrótico"},
  {ind:"Endocardite estreptocócica", dose:"2 g IV/d × 4 semanas", obs:"Streptococo viridans sensível"},
  {ind:"Gonorreia não-complicada", dose:"500 mg IM dose única", obs:"+ azitromicina 1 g VO (cobertura clamídia)"},
  {ind:"DIP", dose:"1 g IM dose única", obs:"+ doxiciclina 100 mg 12/12h × 14d + metronidazol 500 mg 12/12h × 14d"},
  {ind:"Pediatria", dose:"50-100 mg/kg/d 12/12h", obs:"Meningite: 100 mg/kg/d. Máx 2 g/dose."},
],

ajustes:{
  irc:"NÃO precisa ajustar até ClCr 10 mL/min. ClCr <10 ou diálise: 1 g/d pós-diálise.",
  iht:"Sem ajuste. Cuidado se IRC + IH concomitantes (limitar a 2 g/d).",
  idoso:"Sem ajuste rotineiro. Cuidado se desnutrido (hipoalbuminemia → mais droga livre).",
  gestante:"Categoria B — segura. Atravessa placenta mas sem teratogenicidade.",
  aleita:"Compatível. Excreção mínima no leite.",
  ped:"50-100 mg/kg/d. NÃO usar em RN <28 dias se ictérico (desloca bilirrubina = kernicterus). NÃO usar com cálcio IV em RN (precipitação cardiovascular fatal).",
},

mecanismo:"Cefalosporina 3ª geração. Liga-se às PBPs (Penicillin Binding Proteins) → inibe transpeptidação na síntese da parede celular bacteriana → lise osmótica. Bactericida tempo-dependente.",

farmacocin:{
  absorc:"Não absorvida VO. IV: pico imediato. IM: pico 1-2 h.",
  distrib:"Excelente. PENETRA BARREIRA HEMATOENCEFÁLICA (especialmente se meninges inflamadas). Concentração biliar 3-10× a sérica. Atinge ossos, articulações, urina, fluidos corporais.",
  metab:"Não sofre metabolismo significativo no fígado.",
  elimin:"~60% renal (filtração + secreção tubular), ~40% biliar/fecal.",
  meiavida:"5-9 horas em adulto saudável (longa entre cefalosporinas — permite dose única diária).",
  ligacao:"85-95% à albumina (cuidado em hipoalbuminêmico).",
},

espectro:[
  "Gram-positivos: S. pneumoniae (incluindo cepas com resist. intermediária à PNC), S. pyogenes, S. agalactiae. NÃO cobre enterococos. NÃO cobre MRSA.",
  "Gram-negativos: Excelente para Enterobacteriaceae (E. coli, Klebsiella, Proteus, Serratia). H. influenzae, M. catarrhalis, N. gonorrhoeae, N. meningitidis. NÃO cobre Pseudomonas.",
  "Anaeróbios: Limitada. Não cobre B. fragilis (associar metronidazol em peritonite).",
  "ESBL: NÃO COBRE. Resistência crescente em Enterobacteriaceae → considerar carbapenem se MR conhecida.",
],

interacoes:[
  {droga:"Cálcio IV/IO", efeito:"PRECIPITAÇÃO CARDIOVASCULAR FATAL em RN. Em adulto: não administrar Y-site. Esperar 48h entre cálcio e ceftriaxona."},
  {droga:"Solução com cálcio (Ringer Lactato)", efeito:"NÃO DILUIR. Usar SF 0,9% ou SG 5%."},
  {droga:"Varfarina", efeito:"↑ INR — monitorizar."},
  {droga:"Probenecida", efeito:"Inibe excreção tubular — não há benefício clínico significativo."},
],

efeitos:[
  {tipo:"comum", item:"Diarreia (5-10%), náusea, rash cutâneo (2-3%), eosinofilia, ↑ transaminases"},
  {tipo:"sério", item:"Reação cruzada com PNC: ~1-3% (anafilaxia rara). C. difficile (associação clássica)"},
  {tipo:"raro", item:"Colelitíase / pseudocolelitíase por precipitação biliar (reversível). Anemia hemolítica imune. Encefalopatia em IRC dialítico"},
],

alertas:[
  {nivel:"crit", txt:"NUNCA misturar com soluções de cálcio em RN (qualquer idade gestacional). Precipitação intravascular → óbito documentado."},
  {nivel:"crit", txt:"RN ictérico: ceftriaxona desloca bilirrubina da albumina → risco de kernicterus. PREFERIR cefotaxima."},
  {nivel:"warn", txt:"Alergia a penicilina: risco de reação cruzada ~3% se IgE-mediada. Em anafilaxia documentada à PNC, evitar cefalosporinas."},
  {nivel:"warn", txt:"Em meningite, dexametasona DEVE ser administrada ANTES ou junto da 1ª dose de ATB para reduzir mortalidade (especialmente em pneumococo)."},
],

preparo:"Diluir 1 g em 10 mL SF 0,9% (100 mg/mL) ou SG 5%. Para IV bolus: administrar em 2-4 min. Para infusão: diluir em 50-100 mL SF/SG 5% e correr em 30 min. IM: diluir em lidocaína 1% sem adrenalina (reduz dor) — APENAS para IM, NÃO administrar IV.",

monitor:"Função renal (basal e após 5-7 dias). Hemograma (eosinofilia, anemia hemolítica). Coagulograma se uso prolongado (vit K). Testes hepáticos. Vigilância clínica para C. difficile (diarreia).",

diretriz:"IDSA Pneumonia 2019; Sanford Guide 2024; SBI Diretrizes. PCDT MS — Sepse, Meningite, ITU.",
fluxo:null,
calcs:[],
},

/* ============== 2. NORADRENALINA ============== */
{id:"med-noradrenalina", classe:"Vasopressor — Catecolamina α1+β1", grupo:"vasopressor",
nome:"Noradrenalina",
sin:["norepinefrina","NA","NE","Levophed"],
formas:[
  "Ampola 4 mg/4 mL (1 mg/mL)",
  "Ampola 16 mg/16 mL",
],
resumo:"1ª LINHA em choque distributivo (sepse, anafilaxia refratária). Vasoconstrictor potente com leve aumento de débito. Pode ser periférico até 6h se central indisponível.",
dose_rapida:"0,05-2 mcg/kg/min IV BIC. Iniciar 0,1 mcg/kg/min, titular cada 5-10 min",

doses:[
  {ind:"Choque séptico (1ª linha)", dose:"0,05-2 mcg/kg/min IV BIC", obs:"Alvo PAM ≥65 mmHg. Iniciar PA invasiva quando possível. Adicionar vasopressina se NE >0,25-0,5 mcg/kg/min."},
  {ind:"Choque anafilático refratário", dose:"0,05-1 mcg/kg/min IV BIC", obs:"Após adrenalina IM falhar. NÃO substitui adrenalina IM/IV em anafilaxia."},
  {ind:"Choque neurogênico", dose:"0,05-1 mcg/kg/min IV BIC", obs:"Após volume. Combina com dopamina/dobutamina se bradicardia."},
  {ind:"Choque cardiogênico hipotenso", dose:"0,05-1 mcg/kg/min IV BIC", obs:"Combinar com dobutamina para inotropismo."},
  {ind:"Pediatria", dose:"0,05-2 mcg/kg/min IV BIC", obs:"Mesma dose mcg/kg/min. Acesso central preferível."},
],

ajustes:{
  irc:"Sem ajuste — não eliminada renalmente.",
  iht:"Sem ajuste — metabolizada por COMT/MAO em diversos tecidos.",
  idoso:"Iniciar 0,025-0,05 mcg/kg/min. Maior sensibilidade arritmogênica.",
  gestante:"Categoria C — usar se benefício > risco. Pode reduzir fluxo uterino. NÃO atrasa em choque materno.",
  aleita:"Compatível. Meia-vida ultracurta.",
  ped:"Iniciar 0,05 mcg/kg/min. Mesmos princípios do adulto.",
},

mecanismo:"Agonista predominante de receptor α1-adrenérgico (vasoconstrição arterial e venosa) + agonista β1 leve (efeito cronotrópico/inotrópico). Em doses baixas: predomina α1. Em altas: ativa β1 e β2.",

farmacocin:{
  absorc:"Apenas IV (não absorvida VO).",
  distrib:"Distribuição rápida nos tecidos com receptores α/β.",
  metab:"Metabolizada por COMT (catecol-O-metiltransferase) e MAO (monoamina oxidase) — ubíqua. Sem dependência de fígado.",
  elimin:"Metabolitos inativos (ácido vanilmandélico, metanefrinas) excretados na urina.",
  meiavida:"~2 minutos (ULTRACURTA). Efeito clínico em 1-2 min de infusão. Cessa em <5 min após parar BIC.",
  ligacao:"~50% à albumina.",
},

interacoes:[
  {droga:"IMAO", efeito:"Crise hipertensiva grave. CONTRAINDICAÇÃO RELATIVA — usar 1/10 da dose."},
  {droga:"Antidepressivos tricíclicos", efeito:"Potencializa pressor — reduzir dose 50%."},
  {droga:"β-bloqueador", efeito:"Pode causar HAS reflexa por bloqueio β-vasodilatador. Manter NE — não suspender β-bloq agudo."},
  {droga:"Anestésicos halogenados", efeito:"Sensibilização miocárdica a arritmias."},
  {droga:"Linezolida", efeito:"Inibe MAO — risco hipertensão."},
],

efeitos:[
  {tipo:"comum", item:"Hipertensão, taquicardia, ansiedade, cefaleia, palidez"},
  {tipo:"sério", item:"Arritmias (taquicardia atrial/ventricular). Necrose tecidual se extravasamento. Isquemia digital/mesentérica em dose alta."},
  {tipo:"raro", item:"Bradicardia reflexa em PA muito alta. Edema pulmonar não-cardiogênico."},
],

alertas:[
  {nivel:"crit", txt:"EXTRAVASAMENTO: aplicar FENTOLAMINA 5-10 mg em 10 mL SF infiltrado localmente (antídoto). Risco de necrose tecidual. Centralizar acesso assim que possível."},
  {nivel:"crit", txt:"Em sepse: combinar com VASOPRESSINA 0,03 U/min FIXA quando NE >0,25-0,5 mcg/kg/min — reduz necessidade de NE e mortalidade (VANISH trial)."},
  {nivel:"warn", txt:"Pode ser administrada por ACESSO PERIFÉRICO por até 6h se central indisponível (evidência atual, SCCM 2023). Preferir veia calibrosa proximal."},
  {nivel:"warn", txt:"NÃO usar como única terapia — sempre otimizar VOLUME primeiro (fluido challenge 30 mL/kg) e tratar causa subjacente."},
  {nivel:"info", txt:"DESMAME: reduzir 0,05 mcg/kg/min cada 30-60 min conforme tolerar (manter PAM ≥65)."},
],

preparo:"DILUIÇÃO PADRÃO: 4 ampolas (16 mg total) em 250 mL SG 5% = 64 mcg/mL. Alternativa: 8 mg em 250 mL = 32 mcg/mL. Para 70 kg paciente, 0,1 mcg/kg/min = 7 mcg/min = 6,5 mL/h (concentração 64 mcg/mL). PROTEGER DA LUZ (oxidação — vira castanha = descartar). Trocar bolsa cada 24h.",

monitor:"PA contínua (idealmente PAi), FC, ECG. Débito urinário (alvo ≥0,5 mL/kg/h). Lactato (queda = melhora perfusão). Função renal. Inspeção do acesso (extravasamento). Perfusão de extremidades.",

diretriz:"Surviving Sepsis Campaign 2021. ACC/AHA Cardiogenic Shock 2022. SBC Choque Cardiogênico. SOAP II trial (Lancet 2010).",
fluxo:null,
calcs:[],
},

/* ============== 3. ENOXAPARINA ============== */
{id:"med-enoxaparina", classe:"Anticoagulante — HBPM (heparina baixo peso molecular)", grupo:"anticoag",
nome:"Enoxaparina",
sin:["Clexane","Versa","Enoxa"],
formas:[
  "Seringa pré-preenchida 20 mg/0,2 mL SC",
  "Seringa 40 mg/0,4 mL SC (profilática mais usada)",
  "Seringa 60 mg/0,6 mL SC",
  "Seringa 80 mg/0,8 mL SC",
  "Seringa 100 mg/1 mL SC",
],
resumo:"HBPM. Inibe predominantemente Xa (relação anti-Xa:anti-IIa = 3:1). Mais previsível que HNF, sem monitorização rotineira. 1ª linha em TEV (profilaxia e tratamento) e SCA.",
dose_rapida:"PROFILAXIA: 40 mg SC/d. TRATAMENTO: 1 mg/kg SC 12/12h ou 1,5 mg/kg/d.",

doses:[
  {ind:"Profilaxia TEV em internado clínico", dose:"40 mg SC/d", obs:"30 mg SC/d se ClCr 15-30. Considerar 0,5 mg/kg em obeso ≥120 kg."},
  {ind:"Profilaxia TEV pós-cirúrgico ortopédico", dose:"40 mg SC/d (1ª dose 12h pré-op) OU 30 mg SC 12/12h (após cirurgia)", obs:"Duração: 10-35 dias conforme cirurgia."},
  {ind:"Tratamento TVP/TEP estável", dose:"1 mg/kg SC 12/12h OU 1,5 mg/kg SC/d", obs:"12/12h preferido em câncer, obesidade, TEP grave."},
  {ind:"SCA — IAMCST com fibrinólise", dose:"30 mg IV bolus + 1 mg/kg SC 12/12h", obs:">75a: SEM bolus, 0,75 mg/kg SC 12/12h."},
  {ind:"SCA — IAMSSST/AI", dose:"1 mg/kg SC 12/12h", obs:"Duração até estabilização ou ICP."},
  {ind:"FA peri-procedimento (bridging)", dose:"1 mg/kg SC 12/12h", obs:"Última dose 24h antes do procedimento (12h se profilática)."},
  {ind:"Gestante com TEV", dose:"1 mg/kg SC 12/12h", obs:"Suspender 24h antes do parto programado. Reiniciar 12-24h pós-parto."},
  {ind:"Pediatria", dose:"Profilaxia 0,5 mg/kg SC 12/12h. Tratamento 1 mg/kg SC 12/12h.", obs:"Monitorizar anti-Xa em <2 meses."},
],

ajustes:{
  irc:"ClCr 30-50: sem ajuste rotineiro mas considerar redução. ClCr 15-30: tratamento 1 mg/kg/d (não 12/12h). ClCr <15: PREFERIR HNF (HBPM tem clearance renal).",
  iht:"Sem ajuste rotineiro. Cuidado se coagulopatia hepática.",
  idoso:">75a + SCA: SEM bolus IV. Tratamento: 0,75 mg/kg SC 12/12h. Atenção função renal.",
  gestante:"Categoria B. NÃO atravessa placenta. 1ª linha em TEV gestacional. Doses requerem ajuste de peso conforme trimestre. Suspender 24h antes de parto programado.",
  aleita:"Compatível. Não absorvida VO pelo lactente.",
  ped:"Profilaxia 0,5 mg/kg SC 12/12h. Tratamento 1 mg/kg SC 12/12h (1,5 mg/kg em <2m). Monitorizar anti-Xa.",
},

mecanismo:"Liga-se à antitrombina (AT) → potencializa a inibição do FATOR Xa (efeito principal) e do FATOR IIa/trombina (efeito menor). Razão anti-Xa:anti-IIa = 3:1 (HNF = 1:1).",

farmacocin:{
  absorc:"SC: biodisponibilidade ~92% (melhor que HNF SC). Pico 3-5 h.",
  distrib:"Volume de distribuição pequeno (~5 L) — sem ligação a proteínas tissulares.",
  metab:"Hepático — desulfação e despolimerização parciais.",
  elimin:"Renal (~40%). HBPM ACUMULA EM IRC.",
  meiavida:"4-7 h (mais longa que HNF de 1-2 h). Permite 1-2 doses/dia.",
  ligacao:"Mínima a proteínas plasmáticas (ao contrário da HNF).",
},

interacoes:[
  {droga:"AINEs, AAS, antiagregantes", efeito:"↑ sangramento. Avaliar risco/benefício."},
  {droga:"Anticoagulantes outros (varfarina, DOACs)", efeito:"Sinergia hemorrágica. Não combinar exceto em transição."},
  {droga:"Bloqueio neuroaxial (anestesia peridural/raqui)", efeito:"Risco de hematoma epidural. Suspender 12-24h antes."},
  {droga:"Levotiroxina", efeito:"Sem interação clinicamente relevante."},
],

efeitos:[
  {tipo:"comum", item:"Sangramento (1-3% maior, 5-10% menor). Equimose local. Elevação transaminases (transitória)."},
  {tipo:"sério", item:"HIT (Heparin-Induced Thrombocytopenia) tipo II — 1-3% (menor que HNF). Hematoma retroperitoneal. Hematoma neuroaxial (anestesia)."},
  {tipo:"raro", item:"Hipersensibilidade. Hipercalemia (efeito aldosterona)."},
],

alertas:[
  {nivel:"crit", txt:"HIT tipo II: queda plaquetas >50% após 5-14 dias de heparina (HBPM ou HNF) + trombose. SUSPENDER imediatamente E iniciar fondaparinux/argatroban. NÃO trocar para varfarina sem ponte."},
  {nivel:"crit", txt:"Anestesia peridural/raqui: respeitar intervalo SEGURO. Dose profilática: 12h. Dose terapêutica: 24h. Risco de hematoma espinhal (paralisia permanente)."},
  {nivel:"warn", txt:"ClCr <30: usar DOSE REDUZIDA (1 mg/kg/d) ou trocar para HNF. ClCr <15: HNF preferida (curta meia-vida, reversível com protamina)."},
  {nivel:"warn", txt:"REVERSÃO: Protamina reverte ~60% (incompleta). Dose: 1 mg para cada 1 mg de enoxaparina nas últimas 8h. Atenção anafilaxia em pacientes que usam insulina NPH."},
  {nivel:"info", txt:"Monitorização anti-Xa apenas em: obeso (>120 kg), IRC, gestante, peso <50 kg, criança <2 meses. Alvo: 0,6-1,0 UI/mL (4h pós-dose) para tratamento."},
],

preparo:"Seringas pré-preenchidas — NÃO eliminar a bolha de ar (faz parte do volume). Aplicar no abdome (rotacionar locais) — pinçar a pele com 2 dedos, agulha 90°, NÃO massagear depois. Em ortopedia: também pode coxa.",

monitor:"Plaquetas basal + dia 5-7 + a cada 2-3 dias até 14 dias (rastreio HIT). Hb se sangramento. Função renal antes de iniciar. Anti-Xa apenas em situações especiais (acima).",

diretriz:"CHEST Antithrombotic 2021. ESC Pulmonary Embolism 2019. ASRA Regional Anesthesia 2018 (intervalos).",
fluxo:null,
calcs:[],
},

/* ============== 4. MORFINA ============== */
{id:"med-morfina", classe:"Analgésico — Opioide μ-agonista forte", grupo:"analgesia",
nome:"Morfina (Sulfato/Cloridrato)",
sin:["Dimorf","MS Contin","Sulfato de morfina"],
formas:[
  "Ampola 10 mg/mL (1 mL) IV/IM/SC",
  "Ampola 1 mg/mL (1 mL) — diluída",
  "Comprimido 10/30 mg liberação imediata",
  "Comprimido LP 30/60/100 mg",
  "Solução oral 10 mg/mL",
],
resumo:"PADRÃO-OURO para dor intensa em emergência. Potência relativa = 1 (referência para todos os opioides). Libera histamina (cuidado em asmático, hipotenso). Útil em IAM, EAP, dor oncológica, pós-op.",
dose_rapida:"IV: 2-5 mg titular cada 5-10 min até alívio (máx ~10 mg total inicial). VO: 10-30 mg 4/4h liberação imediata.",

doses:[
  {ind:"Dor aguda intensa (EVA 7-10) — adulto", dose:"IV: 0,1 mg/kg = ~5-10 mg, titular cada 5-10 min", obs:"Diluir 10 mg em 9 mL SF (1 mg/mL). Fracionar e titular."},
  {ind:"Dor oncológica — adulto naive", dose:"VO: 5-15 mg cada 4h liberação imediata", obs:"Após 24-48h estável: total/2 = dose LP 12/12h. Reservar IR para resgate (10% dose total/dia)."},
  {ind:"IAM com dor refratária a nitrato", dose:"2-4 mg IV titulada", obs:"NÃO 1ª linha em IAM (associada a pior desfecho — CRUSADE). Apenas se nitrato + reperfusão não controlarem."},
  {ind:"EAP cardiogênico (controverso)", dose:"2-4 mg IV", obs:"Reduz pré-carga + ansiolítico. Risco depressão respiratória + emese. Preferir VNI + nitrato + furosemida."},
  {ind:"Pós-op", dose:"PCA (bolus 1-2 mg, lockout 6-10 min, limite 4h)", obs:"PCA reduz consumo total + efeitos adversos vs bolus enfermagem."},
  {ind:"Pediatria — dor aguda", dose:"0,05-0,1 mg/kg IV cada 4h (máx 5 mg/dose)", obs:"Iniciar dose menor. NÃO usar em <6m sem monitorização."},
],

ajustes:{
  irc:"ClCr 30-50: reduzir dose 25%. ClCr <30: reduzir 50% + aumentar intervalo. Cuidado: metabólitos ativos (M3G, M6G) acumulam → toxicidade. PREFERIR fentanil ou hidromorfona em IRC.",
  iht:"Cirrose Child B/C: reduzir 50% e aumentar intervalo. Risco encefalopatia.",
  idoso:"Iniciar com 50% da dose (2,5 mg IV em vez de 5 mg). Maior sensibilidade à depressão respiratória + delirium.",
  gestante:"Categoria C (D se uso prolongado). Cruza placenta. Uso prolongado: síndrome abstinência neonatal. PARTO: pode causar depressão respiratória RN — pré-tratar com naloxona.",
  aleita:"Pequenas doses ocasionais: compatível. Uso crônico: risco RN. Monitorar sedação no lactente.",
  ped:"0,05-0,1 mg/kg IV. RN: 0,025-0,05 mg/kg. Cuidado com depressão respiratória (mais sensível).",
},

mecanismo:"Agonista forte dos receptores μ-opioides (também κ e δ em menor grau). Hiperpolariza neurônios via ↑K+ + ↓Ca++. Em corno dorsal medular: ↓liberação de neurotransmissores excitatórios (substância P, glutamato). Ativa vias inibitórias descendentes do tronco. Sistema límbico: euforia + ansiólise.",

farmacocin:{
  absorc:"VO: biodisponibilidade ~30% (extenso 1ª passagem hepática). SC: ~80%. IV: 100%.",
  distrib:"Hidrofílica (diferente do fentanil). Lenta penetração SNC. Volume distribuição moderado.",
  metab:"Hepático — glucuronidação por UGT2B7 → M3G (75%, inativo, neurotóxico em doses altas) + M6G (10%, ATIVO, ~50× mais potente que morfina parental).",
  elimin:"Renal (M3G e M6G). Pequena excreção biliar (5-10%).",
  meiavida:"Morfina: 2-4h. M6G: 4-8h (acumula em IRC).",
  ligacao:"~35% a proteínas.",
},

interacoes:[
  {droga:"BZD (midazolam, diazepam)", efeito:"DEPRESSÃO RESPIRATÓRIA SINÉRGICA — risco PCR. Combinar com cautela extrema."},
  {droga:"Outros opioides", efeito:"Aditivo — depressão respiratória, sedação."},
  {droga:"Álcool", efeito:"Depressão SNC. Cuidado em abstinência alcoólica recente."},
  {droga:"IMAO", efeito:"Hipertensão / hipotensão / depressão SNC. Contraindicação."},
  {droga:"Anti-histamínicos", efeito:"Aditivo histaminérgico - intensifica prurido e hipotensão."},
],

efeitos:[
  {tipo:"comum", item:"Náusea/vômito (~30%), constipação (75%, NÃO desenvolve tolerância — sempre prescrever laxativo!), sedação, prurido (liberação histamina), miose"},
  {tipo:"sério", item:"DEPRESSÃO RESPIRATÓRIA dose-dependente (FR <8 = preocupante). Broncoespasmo (asmático). Hipotensão por liberação histamina."},
  {tipo:"raro", item:"Retenção urinária. Mioclonia em doses altas/IRC. Síndrome de abstinência aguda se retirada brusca em uso crônico."},
],

alertas:[
  {nivel:"crit", txt:"DEPRESSÃO RESPIRATÓRIA (FR <8, SpO2 caindo, sonolência excessiva): suporte ventilatório + NALOXONA 0,04-0,1 mg IV titular (NÃO acordar completamente). Naloxona tem meia-vida CURTA (30-60 min) — opioide longa ação pode causar re-narcose, manter monitorização."},
  {nivel:"crit", txt:"ASMÁTICO / DPOC instável / ANAFILAXIA recente: liberação de histamina pode causar broncoespasmo. PREFERIR FENTANIL (não libera histamina)."},
  {nivel:"warn", txt:"IDOSO + OPIOIDE-NAIVE + IRC: começar com 50% da dose padrão. Risco de overdose por acúmulo de M6G."},
  {nivel:"warn", txt:"PRESCREVER SEMPRE LAXATIVO profilaticamente em uso >48h (NÃO desenvolve tolerância à constipação). Sugestão: lactulose 15-30 mL VO 12/12h + bisacodil SOS."},
  {nivel:"info", txt:"PARTO: causa depressão respiratória neonatal. Avisar neonato/pediatra. Naloxona pronta."},
],

preparo:"Para titulação IV: diluir 10 mg em 9 mL SF (concentração 1 mg/mL). Aspirar 5 mL = 5 mg. Administrar 2-3 mL (2-3 mg) inicial, reavaliar 5-10 min, repetir conforme dor. NÃO administrar em bolus rápido (libera histamina). Naloxona pronta à beira-leito.",

monitor:"FR (alvo ≥10), SpO2, sedação (Pasero Opioid-Induced Sedation Scale: alvo S/1/2), dor (EVA — reavaliar 30 min IV / 60 min VO), constipação. Em uso prolongado: tolerância, dependência, hiperalgesia opioide.",

diretriz:"WHO Pain Ladder. ACEP Pain Management 2017. ABED Brasil — Manejo da Dor.",
fluxo:null,
calcs:[],
},

/* ============== 5. INSULINA REGULAR ============== */
{id:"med-insulina-r", classe:"Hormônio — Antihiperglicemiante", grupo:"endocrino",
nome:"Insulina Regular (Humana)",
sin:["Humulin R","Novolin R","Regular","R","Insulina ação rápida"],
formas:[
  "Frasco-ampola 100 UI/mL × 10 mL (1.000 UI)",
  "Refil/caneta 100 UI/mL × 3 mL",
],
resumo:"Única insulina IV em emergência. Padrão para CAD, EHH, hipercalemia. Início rápido SC (~30 min) mas pico tardio (2-4h) → não substitui rapida análoga em pré-prandial.",
dose_rapida:"CAD/EHH: 0,1 U/kg/h IV BIC (sem bolus, ADA 2024). HIPERCALEMIA: 10 UI IV + Glicose 50% 100 mL.",

doses:[
  {ind:"CAD/EHH — BIC IV", dose:"0,1 U/kg/h IV BIC SEM bolus rotineiro (ADA 2024)", obs:"Apenas após K confirmado ≥3,3. Diluir 50 UI em 250 mL SF = 0,2 UI/mL. Alvo: ↓ glicemia 50-75 mg/dL/h."},
  {ind:"Hipercalemia — translocação", dose:"10 UI IV + Glicose 50% 100 mL IV em 15-30 min", obs:"Reduz K em 0,5-1,2 mEq/L em 30-60 min. Monitorar HGT 1h e 2h depois (hipoglicemia tardia comum)."},
  {ind:"Esquema correção SC pré-prandial", dose:"Cálculo individual — varia conforme glicemia + sensibilidade", obs:"Exemplo: 1 UI para cada 50 mg/dL acima do alvo. Aplicar 30 min ANTES da refeição (não imediatamente)."},
  {ind:"Transição BIC IV → SC em CAD/EHH", dose:"Calcular requerimento das últimas 6h × 4 = dose diária", obs:"Aplicar 1ª SC 1-2h ANTES de suspender BIC (overlap obrigatório). Esquema basal + bolus."},
  {ind:"Hospitalar — esquema correção", dose:"Glicemia 150-200: 2 UI / 200-250: 4 UI / 250-300: 6 UI / >300: 8 UI", obs:"Apenas como suplementação ao esquema basal — NÃO terapia única (mortalidade RABBIT-2 trial)."},
  {ind:"Pediatria CAD", dose:"0,05-0,1 U/kg/h IV BIC", obs:"Dose mais baixa (0,05) para reduzir edema cerebral. NÃO bolus."},
],

ajustes:{
  irc:"Acúmulo — reduzir dose 25-50% em ClCr <50. Maior risco de hipoglicemia. Insulina é PRIMARILY renal-cleared.",
  iht:"Cirrose: ↓gliconeogênese hepática → maior risco hipoglicemia. Doses menores. Monitorização frequente.",
  idoso:"Iniciar 50% da dose padrão. Hipoglicemia em idoso = quedas + IAM + óbito. Alvo glicêmico mais liberal (HbA1c 7,5-8%).",
  gestante:"Categoria B — segura. DM gestacional: 1ª linha (oral CI em muitas). Pico de necessidade no 3º trimestre (resistência por hormônios placentários).",
  aleita:"Compatível. Insulina não absorvida VO pelo lactente.",
  ped:"Doses muito menores. Calcular sempre por kg. Risco de hipoglicemia + edema cerebral em CAD.",
},

mecanismo:"Hormônio peptídico (51 aminoácidos). Liga-se ao receptor de insulina (tirosino-quinase) → cascata fosforilação → translocação de GLUT-4 → ↑ captação de glicose no músculo e adipócitos. Inibe gliconeogênese e glicogenólise hepáticas. Promove síntese de glicogênio, lipídios, proteínas. Estimula bomba Na/K (translocação K intracelular).",

farmacocin:{
  absorc:"SC: variável (~70% biodisponibilidade). Início 30-60 min, pico 2-4h, duração 5-8h. Absorção mais rápida no abdome > braço > coxa > glúteo. IV: imediato.",
  distrib:"Volume distribuição ~0,15 L/kg (espaço extracelular).",
  metab:"Hepático (60%) + renal (~30%). Degradação proteolítica.",
  elimin:"Renal e hepática. <2% excretada inalterada.",
  meiavida:"SC: ~1h (mas duração de ação 5-8h por absorção lenta). IV: 5-7 min (a hipoglicemia pode durar mais por efeito intracelular).",
  ligacao:"Mínima (peptídeo livre).",
},

interacoes:[
  {droga:"β-bloqueadores", efeito:"Mascaram sintomas adrenérgicos da hipoglicemia (tremor, taquicardia). Sudorese ainda ocorre. Atenção em DM em uso."},
  {droga:"IECA", efeito:"Potencializa efeito hipoglicemiante (mecanismo incerto)."},
  {droga:"Corticoides", efeito:"Antagonismo — necessita ↑ dose insulina em uso de corticoide. Reduzir insulina ao desmamar."},
  {droga:"Tiazídicos / loop diuréticos", efeito:"Hiperglicemia leve. Ajuste mínimo."},
  {droga:"Octreotide / análogos somatostatina", efeito:"Inibe insulina endógena — variável."},
],

efeitos:[
  {tipo:"comum", item:"HIPOGLICEMIA — efeito adverso mais importante. Lipohipertrofia local (rotacionar locais SC). Ganho de peso."},
  {tipo:"sério", item:"Hipoglicemia GRAVE (convulsão, coma, óbito). Edema cerebral em correção rápida de CAD pediátrica. Hipocalemia (translocação)."},
  {tipo:"raro", item:"Reação alérgica (raro com insulina humana, mais comum com bovina/suína histórica). Edema insulínico (retenção hídrica em início)."},
],

alertas:[
  {nivel:"crit", txt:"NUNCA iniciar insulina em CAD/EHH antes de confirmar K sérico ≥3,3. Insulina causa shift intracelular de K → hipocalemia → arritmia fatal. Se K<3,3: repor K primeiro + esperar."},
  {nivel:"crit", txt:"HIPOGLICEMIA pode ser fatal. Glicemia <70: glicose 50% 50 mL IV (após tiamina se etilista) OU 15g VO se consciente. Reavaliar 15 min."},
  {nivel:"warn", txt:"CAD pediátrica: ↓ rápida de glicemia (>100 mg/dL/h) + reposição agressiva de fluidos = risco edema cerebral. Manter ↓ 50 mg/dL/h. Adicionar SG quando glicemia <250-300 (mantém insulina BIC)."},
  {nivel:"warn", txt:"INSULINA EV adsorve em plástico (perda 20-30% nos primeiros mL). Saturar circuito com 50 mL antes de iniciar."},
  {nivel:"info", txt:"HIPERCALEMIA: monitorar HGT 1h e 2h após (hipoglicemia tardia comum, especialmente em IRC/idoso/desnutrido). Glicose 50% padrão deve acompanhar."},
],

preparo:"DILUIÇÃO BIC (CAD/EHH): 50 UI em 250 mL SF 0,9% = 0,2 UI/mL. Saturar o circuito com 50 mL antes de conectar ao paciente (perda por adsorção). Trocar bolsa cada 24h. Para 70kg: 0,1 U/kg/h = 7 UI/h = 35 mL/h. SC: aspirar pela ponta, NÃO agitar, rotacionar locais.",

monitor:"GLICEMIA CAPILAR 1/1h em BIC IV (alvo 150-200 em CAD, 140-180 em UTI geral). Eletrólitos 2-4/4h (K!). Diurese (CAD). pH e cetonas em CAD até resolução. Em SC: HGT pré-refeições + 22h.",

diretriz:"ADA Standards 2024. SBD Brasileira 2024. ISPAD Pediátrica 2022.",
fluxo:null,
calcs:[],
},

];
