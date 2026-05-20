/* ===========================================================
   VOVÔMINIC DOUTÔ — pat/endo-mfc.js
   Endo MFC — obesidade, tireoide nodular, esteatose hepática
   Sistema: endo
   Fonte: ABESO 2024, ADA/EASD 2024, ATA 2015, SBEM, AGA, EASL
   =========================================================== */

PATOLOGIAS.push(

/* ============================================================
   1. OBESIDADE — manejo MFC
   ============================================================ */
{
id:"obesidade-mfc", contexto:["ubs"], nome:"Obesidade — Manejo MFC com Estilo de Vida + Farmacoterapia",
sis:"endo", grav:"media",
cid:"E66", ciap:"T82",
sin:["obesidade","sobrepeso","obesidade visceral","obesidade mórbida","síndrome metabólica","controle de peso"],
def:"Doença crônica caracterizada por acúmulo excessivo de tecido adiposo. IMC ≥30 kg/m² = obesidade (G1: 30-34,9; G2: 35-39,9; G3 ≥40 — 'mórbida'). IMC 25-29,9 = sobrepeso. Cintura abdominal elevada (♂≥94 cm, ♀≥80 cm para latinos) marca obesidade visceral mesmo com IMC adequado.",
intro:"Obesidade é PANDEMIA — afeta 30%+ dos adultos brasileiros. Causa de DM2, HAS, dislipidemia, DAC, IC, AVC, CA (mama, colorretal, endométrio, esôfago, fígado, pâncreas, rim), SAOS, DRC, OA, infertilidade, DAFND. MFC: identificar, classificar, manejar (NUNCA julgar — obesidade é DOENÇA, não falha de caráter), oferecer intervenções estruturadas em estilo de vida, considerar farmacoterapia em candidatos adequados, encaminhar cirurgia bariátrica em IMC≥40 ou ≥35+comorbidades.",
fisio:"Equilíbrio entre ingesta energética e gasto, com forte componente genético (~70% de hereditariedade), neuro-hormonal (leptina, grelina, GLP-1, PYY, insulina), comportamental (ambientes obesogênicos, fast food, sedentarismo, sono ruim, estresse), psicológico (compulsão, depressão), social (acesso, classe). Não é 'comer demais' simples — é doença com mecanismos. Adipócitos viscerais hipertróficos secretam citocinas pró-inflamatórias → resistência insulínica → todos os outros problemas.",
apresentacao:"Adulto com IMC ≥30 OU IMC ≥25 com circunferência abdominal elevada OU comorbidade relacionada à obesidade (DM2, HAS, dislipidemia, DRGE, SAOS, OA, infertilidade, ovário policístico). Anamnese deve incluir: padrão alimentar, atividade física, sono, humor, transtorno alimentar (compulsão, bulimia, restritivos), uso de medicações obesogênicas (corticoides, antipsicóticos atípicos, ISRS, sulfonilureia, insulina, betabloqueador), tentativas prévias de perda de peso.",
sintomas:[
"Aumento de peso progressivo ou peso elevado persistente",
"Cintura abdominal aumentada (♂≥94 cm, ♀≥80 cm para latinos)",
"Comorbidades: HAS, DM2/pré-DM, dislipidemia, DRGE, SAOS, OA joelho/quadril/coluna, esteatose hepática, infertilidade, SOP, depressão",
"Acantose nigricans (pele aveludada escurecida em pescoço/axila — resistência insulínica)",
"Limitação funcional (escadas, caminhadas, sexo, atividades cotidianas)",
"Sintomas psicossociais: estigma, vergonha, isolamento, depressão, transtornos alimentares",
],
profilaxia:"Prevenção primária populacional (políticas — não MFC). Em adulto com sobrepeso/obesidade: prevenir progressão e comorbidades. Eixo: MEV estruturada (não 'dieta'), atividade física regular, sono adequado (7-9h), manejo de estresse, vigilância de medicamentos obesogênicos. Aleitamento materno + alimentação complementar adequada na infância previne obesidade futura.",
freire:"O eixo é DESCULPABILIZAR o paciente sem desresponsabilizar. Obesidade NÃO é fraqueza de caráter — é doença. Mas a pessoa tem agência: alimentação, atividade, sono. Trabalhar em metas pequenas, mensuráveis, SUSTENTÁVEIS — perda de 5-10% em 6 meses já reduz substancialmente RCV/DM. NÃO PRESCREVER DIETAS RESTRITIVAS — paciente já 'fez tudo'. Trabalhar mudança de hábito (Prochaska — estágios de mudança). Em paciente com transtorno alimentar (compulsão, especialmente): tratar TA antes/junto, encaminhar psicologia/psiquiatria — restrição em compulsivo agrava. Combater o estigma médico — paciente obesa NÃO consulta porque 'só vai me mandar emagrecer'. Construir aliança terapêutica. Validar fracassos passados; oferecer plano novo.",
sus_tx:"Avaliação inicial completa: IMC, cintura, PA, glicemia jejum, HbA1c, lipidograma, TSH, função hepática (AST, ALT, GGT, FA), USG abdome se transaminases alteradas (esteatose). Plano estruturado MEV: nutrição (encaminhar nutricionista NASF se disponível; orientação dietética básica DASH/mediterrânea), atividade física (Academia da Saúde, ≥150 min/sem moderada + força 2×/sem), sono, manejo de estresse, sono. Reavaliar em 3 meses — se perda <5% e adesão a MEV: considerar farmacoterapia. Farmacoterapia VIA SUS é LIMITADA: orlistat (não disponível CBAF — particular); naltrexona/bupropiona (privada); SEMAGLUTIDA 0,25 mg SC 1×/sem × 4 sem → 0,5 mg × 4 sem → 1 mg → 1,7 mg → 2,4 mg/sem (dose-alvo em obesidade) / LIRAGLUTIDA 0,6 mg SC 1×/dia × 1 sem → escalonar 0,6 mg/sem até 3 mg/dia (dose-alvo em obesidade — Saxenda®) via CEAF com critérios rigorosos (raramente para obesidade isolada — geralmente em DM2+IMC alto). PFPB cobre LIRAGLUTIDA 1,2-1,8 mg/dia para DM2 (Victoza® — não cobre para obesidade isolada — daí necessidade de particular ou critério CEAF). Cirurgia bariátrica via SUS: IMC ≥40 ou ≥35 com comorbidade grave (DM2, HAS refratária, SAOS, IC), tentativa de tratamento clínico ≥2 anos, idade 18-65a (avaliação individual fora dessa faixa), suporte multidisciplinar (psicologia, nutrição, EF, cirurgia). Hospital de referência via DRS.",
padrao_ouro:"Acrescenta: GLP-1 (liraglutida, semaglutida) — eficácia 5-15% perda de peso, alto custo (R$700-1500/mês via privada para indicação de obesidade); tirzepatida (GIP/GLP-1 dual — eficácia maior, recente); cirurgia bariátrica (sleeve, RYGB) — eficácia 25-40% perda peso a longo prazo + remissão de DM2/HAS em maioria; balão intragástrico (temporário); endo-sleeve (não-cirúrgico endoscópico).",
prog:"Sem tratamento: peso tende a aumentar progressivamente até 6ª década, depois platô ou redução. Com tratamento clínico bem-conduzido: perda de 5-10% em 6 meses é factível e tem grande impacto em comorbidades (NNT para reversão pré-DM = 6). Com GLP-1: 10-15%. Com cirurgia bariátrica: 25-40% (sustentada se acompanhamento adequado).",
acomp:"Mensal nos primeiros 3-6 meses (MEV intensiva + ajustes), trimestral em estável. Peso/cintura/PA a cada consulta. Avaliar: adesão, barreiras, humor, sono, comorbidades, motivação. Labs semestrais: glicemia, HbA1c, lipidograma, função hepática. DMO em pós-bariátrica.",
p4:"NÃO indicar 'dietas da moda' (low-carb extremas, jejum prolongado, etc.) sem evidência ou supervisão. NÃO indicar suplementos para emagrecer (chá verde, café verde, garcinia, faseolamina, espirulina — sem evidência). NÃO indicar 'anfetamínicos' (sibutramina foi retirada — risco CV; fenproporex / dietilpropiona — drogas restritas com indicação muito limitada e curtíssima). NÃO indicar laxante/diurético para perda de peso. NÃO 'pesar' o paciente como punição — pesagens estratégicas, não 'controlistas'. NÃO indicar cirurgia bariátrica antes de tentativa adequada de tratamento clínico. NÃO confundir perda de peso por DM descompensado/CA oculto com 'sucesso terapêutico'.",
alertas:[
{nivel:"warn", txt:"Sibutramina foi RETIRADA em maioria dos países (ANVISA reintegrou no Brasil com restrições) — risco CV (HAS, taquicardia, AVE/IAM). Uso restrito a IMC ≥30 sem comorbidade CV, max 1 ano, indicação especializada."},
{nivel:"warn", txt:"GLP-1 (semaglutida, liraglutida): efeitos adversos GI (náusea, diarreia, vômito — manejo com titulação lenta), risco de pancreatite (rara), risco teórico de CA medular tireoide (contraindicado em NEM2/CA medular familiar). Custo alto via privada."},
{nivel:"warn", txt:"Cirurgia bariátrica: complicações (fístula, sangramento, TEV, estenose), deficiências nutricionais a longo prazo (B12, ferro, cálcio, D, B1, B6, A, K, Cu, Zn), 'dumping syndrome', perda óssea, hipoglicemia pós-prandial. Suplementação multivitamínica obrigatória PARA VIDA TODA."},
{nivel:"warn", txt:"Em paciente bariátrico em uso crônico de medicações VO: absorção alterada — ajustar doses, escolher formulações líquidas/sublinguais. Especialmente: levotiroxina, estatinas, anticoncepcional oral (preferir DIU/injeção)."},
{nivel:"info", txt:"Aleitamento e gestação contraindicações relativas a GLP-1 e cirurgia bariátrica (eletiva). Em mulher em idade fértil: contracepção eficaz, esperar 12-18 meses pós-cirurgia para gestar."},
{nivel:"info", txt:"Estigma do peso na consulta médica é causa frequente de ABANDONO do cuidado. Educar a si mesmo: NÃO comentar 'precisa emagrecer' antes de motivo da consulta. NÃO pesar o paciente em consulta de outra queixa sem permissão. Linguagem 'people-first' ('pessoa com obesidade', não 'obesa')."},
{nivel:"info", txt:"Pacientes com transtorno de compulsão alimentar (TCAP) frequentemente NÃO conseguem perder peso só com 'dieta' — tratamento de TCAP é primário (psicoterapia, ISRS, lisdexanfetamina em casos selecionados)."},
],
diretriz:"[ABESO — Diretrizes Brasileiras de Obesidade 2024] [Endocrine Society 2024 Guideline on Pharmacological Treatment of Obesity] [SBCBM — Critérios para Cirurgia Bariátrica 2024] [PCDT-MS Obesidade Mórbida] [TMFC 2ª ed, cap. obesidade] [DUNCAN 5ª ed, cap. obesidade]"
},

/* ============================================================
   2. TIREOIDE NODULAR — abordagem MFC (P4 importante)
   ============================================================ */
{
id:"tireoide-nodular", contexto:["ubs"], nome:"Nódulo de Tireoide — Abordagem MFC + P4",
sis:"endo", grav:"baixa",
cid:"E04.1", ciap:"T81",
sin:["nódulo tireoide","bócio nodular","nódulo cervical","incidentaloma tireoide","TIRADS"],
def:"Lesão focal na tireoide, detectada à palpação ou em imagem. Frequência aumenta com idade (4-7% à palpação; 19-67% à USG em rastreio populacional). Maioria é benigna (>90%). Diagnóstico: USG com classificação TI-RADS + PAAF se indicação por critérios de risco (não tamanho isolado).",
intro:"Nódulo tireoidiano é um dos achados mais frequentes em USG cervical, principalmente em mulheres. É caso paradigmático para PREVENÇÃO QUATERNÁRIA — sobrediagnóstico de microcarcinomas papilares indolentes em assintomáticos é problema documentado mundialmente (Coreia do Sul é o caso clássico). MFC: NÃO rastrear nódulo em assintomático sem fator de risco, AVALIAR adequadamente nódulo descoberto incidentalmente (geralmente em USG cervical/Doppler de carótida), DECIDIR PAAF por critérios TI-RADS + tamanho, NÃO operar microcarcinoma <1 cm em maioria (vigilância ativa).",
fisio:"Maioria dos nódulos são adenomas, cistos, bócio coloide multinodular — benignos. ~5-10% são malignos: 80% CA papilar (excelente prognóstico, especialmente em <55a), 10% CA folicular, 5% CA medular (CT marcador), <5% CA anaplásico (raro, agressivo). Fatores de risco para malignidade: irradiação cervical prévia (radioterapia), história familiar CA tireoide ou MEN2, exposição radioativa (Chernobyl), nódulo de crescimento rápido, sintomas compressivos.",
apresentacao:"Geralmente ACHADO incidental em USG cervical/Doppler ou em exame físico de rotina. Paciente assintomático. Ou: palpação de nódulo cervical pelo próprio paciente. Anamnese: tempo de evolução, sintomas compressivos (disfagia, disfonia, dispneia), sintomas tireoidianos (hipertireoidismo se nódulo autônomo), história prévia de irradiação cervical na infância/juventude, história familiar CA tireoide, MEN2.",
sintomas:[
"Maioria ASSINTOMÁTICO — descoberta incidental em imagem",
"Palpação pelo paciente (mais comum em nódulos >1 cm)",
"Sintomas compressivos (raros, nódulos grandes): disfagia, sensação de pressão, alteração de voz, dispneia",
"Sintomas hipertiroideos (nódulo autônomo/funcionante): perda de peso, taquicardia, calor, ansiedade, oligomenorreia",
"Sintomas alarmantes (alta suspeita CA): nódulo de crescimento rápido, fixo, duro, com linfadenopatia cervical, disfonia (paralisia laríngea recorrente)",
],
profilaxia:"Não há prevenção específica. Evitar exposição desnecessária a radiação ionizante cervical (Rx, TC) — proteção em paciente jovem. Evitar rastreio populacional de tireoide com USG em assintomático sem fator de risco (P4).",
freire:"Paciente recebe laudo 'nódulo de tireoide' e entra em pânico — 'estou com câncer'. Educar: 'a grande maioria dos nódulos é absolutamente benigna. Mesmo se for câncer (que é minoria), o tipo mais comum tem cura na ordem de 95%+. Não é urgência — vamos investigar com calma.' Em microcarcinoma papilar <1 cm SEM fatores de risco: discutir VIGILÂNCIA ATIVA como alternativa à cirurgia (estudo japonês Miyauchi — segurança comprovada). NÃO criar pânico, NÃO subestimar. Trabalhar consentimento informado sobre PAAF se indicada.",
sus_tx:"Avaliação inicial: TSH (excluir nódulo autônomo — se TSH suprimido, fazer cintilografia tireoide; se nódulo 'quente', PAAF NÃO indicada — tratar hipertireoidismo). Se TSH normal/alto: USG cervical com classificação TI-RADS (1-2: benigno; 3: pouco suspeito; 4: moderadamente suspeito; 5: altamente suspeito). PAAF (Punção Aspirativa por Agulha Fina): TI-RADS 5 a partir de 1 cm; TI-RADS 4 a partir de 1,5 cm; TI-RADS 3 a partir de 2 cm; TI-RADS 2/1 não puncionar. Em assintomático: USG cervical no SUS via referência (radiologia ou serviço de imagem do hospital regional). PAAF: em serviço de imagem com radiologista experiente; classificação Bethesda do material (I-VI). Encaminhar endocrinologia: PAAF Bethesda IV-VI, nódulo de crescimento rápido, sintomas compressivos, irradiação cervical prévia, história familiar, suspeita CA medular (calcitonina), nódulo autônomo com hipertireoidismo.",
padrao_ouro:"Acrescenta: testes moleculares pré-cirurgia (Afirma, ThyroSeq) em PAAF indeterminada (Bethesda III/IV) — reduz cirurgias desnecessárias, alto custo, privada; tireoidectomia parcial vs total conforme tamanho/risco; iodoradioterapia complementar em CA de alto risco; vigilância ativa em microcarcinoma <1 cm de baixo risco (estudo Tokyo, Memorial Sloan Kettering).",
prog:"CA papilar <55a + tamanho <4 cm + sem invasão = excelente (>97% sobrevida 20a). CA papilar >55a + invasivo ou medular ou anaplásico = pior prognóstico. Nódulo benigno: acompanhamento ou nada — não vira CA.",
acomp:"Nódulo benigno (Bethesda II): USG cervical 1-2 anos; se estável e <1 cm, espaçar. Sem necessidade de TSH/biópsia recorrente. Nódulo autônomo: TSH cada 6-12 meses. Pós-cirurgia: especialidade. Encaminhar endocrinologia se: nódulo aumentando >50% em diâmetro ou >20% em volume, novo nódulo, sintomas compressivos novos, TSH suprimido.",
p4:"⚠ NÃO RASTREAR NÓDULO TIREOIDE em assintomático sem fator de risco — sobrediagnóstico de microcarcinoma indolente é problema documentado. USG cervical em check-up = MEDICALIZAÇÃO. NÃO solicitar PAAF em nódulo <1 cm com TI-RADS baixo. NÃO indicar cirurgia em microcarcinoma incidental <1 cm de baixo risco — vigilância ativa é alternativa segura. NÃO dosar tireoglobulina rotineira em paciente com tireoide intacta. NÃO indicar levotiroxina 'para reduzir nódulo' — sem evidência convincente, com efeitos adversos.",
alertas:[
{nivel:"crit", txt:"⚠ Bandeiras vermelhas para CA tireoide: nódulo de crescimento RÁPIDO (semanas-meses), FIXO, DURO PEDREGOSO, com LINFADENOPATIA cervical, DISFONIA (paralisia de cordas vocais — invasão recorrente laríngea), DISFAGIA. Encaminhar endocrinologia urgência."},
{nivel:"crit", txt:"História de IRRADIAÇÃO CERVICAL na infância/juventude (radioterapia para linfoma, acne, amígdalas, timo) = ALTO RISCO de CA tireoide — investigar rigorosamente, indicação mais liberal de PAAF mesmo em nódulos pequenos."},
{nivel:"warn", txt:"CA MEDULAR familiar (MEN2): história familiar de CA medular + feocromocitoma + hiperparatireoidismo. Calcitonina e pesquisa RET-protooncogene em paciente e família. ENCAMINHAR endocrinologia urgência."},
{nivel:"warn", txt:"PAAF Bethesda I (não-diagnóstico): repetir em 4-6 semanas — não considerar benigno por exclusão. Bethesda III (atipia indeterminada): repetir em 3-6 meses; se persiste, considerar testes moleculares ou cirurgia parcial."},
{nivel:"info", txt:"Cistos tireoidianos puros (anecoicos sem componente sólido): praticamente sempre benignos. PAAF pode ser feita para drenagem se sintomático/grande, não para diagnóstico."},
{nivel:"info", txt:"TI-RADS é classificação ULTRASSONOGRÁFICA padronizada — comunicar com radiologista para obter laudo TI-RADS. Não confiar em laudo genérico tipo 'nódulo a esclarecer'."},
],
diretriz:"[SBEM — Diretriz Brasileira de Nódulos de Tireoide 2024] [ATA 2015 Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer + 2020 updates] [ACR TI-RADS 2017] [USPSTF — não rastrear tireoide em assintomático] [TMFC 2ª ed, cap. endócrino] [DUNCAN 5ª ed, cap. endócrino]"
},

/* ============================================================
   3. ESTEATOSE HEPÁTICA — NAFLD/MASLD MFC
   ============================================================ */
{
id:"esteatose-hepatica", contexto:["ubs"], nome:"Esteatose Hepática (NAFLD/MASLD) — Manejo MFC",
sis:"endo", grav:"baixa",
cid:"K76.0", ciap:"D97",
sin:["NAFLD","MASLD","esteatose","fígado gorduroso","hepatose","fígado gordo","DHGNA"],
def:"Acúmulo de gordura no fígado (>5% dos hepatócitos) na ausência de causa secundária (álcool, drogas, hep viral). Nova nomenclatura 2023: MASLD (Metabolic dysfunction-Associated Steatotic Liver Disease) — substituiu NAFLD. Espectro: esteatose simples → MASH (esteatohepatite) → fibrose → cirrose → CHC. Diagnóstico: USG (gold standard inicial) + transaminases + escores não-invasivos (FIB-4, NFS) para estratificação de fibrose.",
intro:"MASLD/NAFLD é a hepatopatia mais frequente do mundo — 25-30% da população geral, 60-80% dos obesos, 80% dos diabéticos. MFC: identificar em paciente de risco (obeso, DM2, dislipidemia, síndrome metabólica), tratar fatores subjacentes (eixo é manejo da síndrome metabólica), estratificar fibrose por escores não-invasivos (FIB-4, NFS) para identificar quem deve ir ao especialista. Caso paradigmático de doença SISTÊMICA tratada como hepatopatia.",
fisio:"Resistência insulínica → ↑lipogênese hepática + ↓exportação VLDL → acúmulo de TG no fígado (esteatose). Em ~10-30% progride para inflamação (MASH) → fibrose progressiva → cirrose → CHC. Fatores de risco: obesidade visceral, DM2, dislipidemia (TG↑, HDL↓), síndrome metabólica, idade, masculino, predisposição genética (PNPLA3, TM6SF2).",
apresentacao:"Maioria ASSINTOMÁTICA. Descoberto incidentalmente: (1) USG abdome solicitado por outro motivo, (2) transaminases elevadas em rotina ou check-up, (3) rastreio em paciente DM2/obeso. Sintomas (quando presentes): fadiga, desconforto em HD, hepatomegalia leve. Em cirrose: estigmas hepatopatia (icterícia, ascite, telangiectasias, eritema palmar, varizes esofágicas, encefalopatia).",
sintomas:[
"ASSINTOMÁTICO em maioria",
"Fadiga inespecífica (pouca correlação com gravidade)",
"Hepatomegalia leve em alguns casos",
"Achado: ↑transaminases (ALT > AST geralmente, modestamente — 1-3× LSN; AST > ALT sugere álcool ou fibrose avançada), ↑GGT, USG com esteatose",
"Em cirrose (estágio avançado): icterícia, ascite, varizes esofágicas, encefalopatia, plaquetopenia, hipoalbuminemia",
"Comorbidades cumulativas: DM2, HAS, dislipidemia, DRGE, SAOS, OA, etc. (síndrome metabólica)",
],
profilaxia:"Eixo é prevenção/manejo da síndrome metabólica: (1) Perda de peso 7-10% — REVERTE esteatose, reduz inflamação, pode reverter fibrose inicial; (2) Atividade física regular — efeito independente do peso; (3) Dieta mediterrânea (preferível) ou DASH; (4) Controle DM (preferir SGLT2 e GLP-1 — reduzem esteatose e fibrose); (5) Estatina se dislipidemia (NÃO é hepatotóxica nas doses normais — pode/deve ser usada em paciente com NAFLD); (6) Reduzir/eliminar álcool; (7) Eliminar frutose adicionada (refrigerantes!).",
freire:"Paciente recebe laudo 'esteatose hepática' e pensa 'estou com fígado destruído'. Educar: 'esteatose é gordura no fígado — reversível em maioria dos casos com mudança de estilo de vida. Seu fígado não está destruído, está sobrecarregado. Vamos descarregar.' Vincular tratamento à síndrome metabólica total: 'tratar a esteatose é tratar o diabetes, a pressão e o peso — tudo junto'. Em paciente com componente alcoólico: NÃO julgar, mas nomear — 'há ainda um componente do álcool que precisa ser ajustado'. Combater fatalismo ('é da família, vou ter mesmo') — comportamento E genética interagem.",
sus_tx:"Investigação inicial: USG abdome (esteatose grau I-III); TGO, TGP, GGT, FA, bilirrubinas, albumina, TP/INR; hemograma; HbA1c, glicemia, lipidograma; sorologia hepatite B e C (excluir hepatopatia coexistente); ferritina + saturação transferrina (excluir hemocromatose); FAN, anti-mitocôndria, anti-músculo liso se suspeita autoimune; ceruloplasmina em jovem (Wilson). Estratificação de fibrose por escore NÃO-INVASIVO: FIB-4 (idade + AST + ALT + plaquetas — calculadora rápida): <1,3 = baixa probabilidade fibrose avançada; >2,67 = alta. NFS (NAFLD Fibrosis Score). Encaminhar HEPATOLOGIA se: FIB-4 >2,67 ou alta suspeita de MASH/fibrose; achado de cirrose à USG; transaminases >3-5× LSN persistentes; estigmas hepatopatia. Tratamento: MEV (eixo). Farmacoterapia: SGLT2 ou GLP-1 (CEAF com critérios DM); pioglitazona 30-45 mg/dia (em MASH biopsiada, especialista, atenção ganho peso + IC); vitamina E 800 UI/dia (apenas MASH biopsiada não-DM, especialista).",
padrao_ouro:"Acrescenta: resmetirom (agonista TR-β tireoideano, novo — aprovado FDA 2024 para MASH com fibrose F2-F3); GLP-1 alta dose (semaglutida 2,4 mg — eficácia em MASH); cirurgia bariátrica em obeso com MASH (efeito dramático); biópsia hepática quando indicada para confirmação/estadiamento (padrão-ouro, mas invasiva — reservar para casos específicos). Elastografia (FibroScan®) — não-invasiva, alternativa à biópsia para avaliação de fibrose.",
prog:"Esteatose simples (NAFL): boa, progressão lenta (<5% chega a cirrose em 20a). MASH com fibrose: progressão variável; ~20% chegam a cirrose em 10-20 anos. Cirrose por MASH: risco de CHC, descompensação, transplante. Com perda de peso 10%+ sustentada: reversão de esteatose em 80%+ e regressão de fibrose F2/F3 em ~50%.",
acomp:"Esteatose simples sem fibrose: anual — peso, PA, glicemia/HbA1c, lipidograma, transaminases. MASH/fibrose intermediária (em manejo MFC + hepatologia): semestral. Cirrose: trimestral + USG abdome + AFP cada 6 meses (rastreio CHC).",
p4:"NÃO indicar 'protetor hepático', silimarina, ácido tióctico, fosfolipídeos essenciais, fórmulas 'detox hepático' — sem evidência de benefício. NÃO solicitar painel extenso de hepatite (HAV, HEV, etc.) sem indicação clínica clara. NÃO repetir USG anualmente em paciente sem progressão clínica — exame de imagem operador-dependente, achados variáveis. NÃO indicar estatina menos por 'medo de hepatotoxicidade' em paciente com NAFLD — segurança comprovada, benefício CV importante. NÃO indicar biópsia hepática rotineiramente — apenas em dúvida diagnóstica ou estadiamento para tratamento específico.",
alertas:[
{nivel:"warn", txt:"Diferenciar NAFLD/MASLD de hepatite alcoólica: ingesta de álcool >20 g/dia (♂) ou >10 g/dia (♀) = considerar DHGAC (Doença Hepática Gordurosa Alcoólica). Combinação MASLD + álcool (MetALD) tem progressão mais rápida."},
{nivel:"warn", txt:"Transaminases >5× LSN ou aumento abrupto: pesquisar hepatite viral aguda, hepatotoxicidade medicamentosa, hepatite auto-imune, doença de Wilson, hemocromatose, isquêmica. NÃO atribuir a NAFLD."},
{nivel:"warn", txt:"Estatina em NAFLD: ATÉ AGORA mostrada SEGURA e BENÉFICA — não suspender por leve elevação de transaminases (<3× LSN). Pode até melhorar perfil hepático."},
{nivel:"info", txt:"FIB-4 é cálculo fácil em UBS: (idade × AST) / (plaquetas × √ALT). Aplica em paciente com NAFLD para identificar quem precisa hepatologia. Calculadora online ou no app Vovôminic."},
{nivel:"info", txt:"Hepatite B/C COEXISTE em ~10-20% de NAFLD — sempre rastrear HBsAg + anti-HCV. Co-infecção piora prognóstico, tratar."},
{nivel:"info", txt:"Em cirrose por NAFLD: rastrear CHC com USG + AFP cada 6 meses; rastrear varizes com EDA conforme guidelines (não em todos)."},
],
diretriz:"[SBHEP — Diretriz Brasileira de NAFLD/MASLD 2024] [AASLD 2023 Practice Guidance on Clinical Assessment and Management of NAFLD] [EASL-EASD-EASO 2024 Clinical Practice Guidelines on NAFLD] [TMFC 2ª ed, cap. hepático] [DUNCAN 5ª ed, cap. hepático]"
},

);
