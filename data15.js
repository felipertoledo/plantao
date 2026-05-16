/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — PATOLOGIAS (BLOCO B)
   DRGE / Dispepsia + Gota
   =========================================================== */

PATOLOGIAS.push(

/* ============== DRGE / DISPEPSIA ============== */
{id:"drge-dispepsia", nome:"DRGE / Dispepsia Funcional", sis:"gi", grav:"baixa",
cid:"K21 (DRGE) / K30 (dispepsia)", ciap:"D03 (pirose) / D07 (dispepsia)",
sin:["DRGE","Refluxo","Pirose","Azia","Queimação","Dispepsia funcional","Síndrome do desconforto pós-prandial","Síndrome da dor epigástrica"],

def:"DRGE = retorno do conteúdo gástrico ao esôfago causando sintomas/lesão. Dispepsia funcional = sintomas no andar superior do abdome sem causa orgânica. Quadros frequentemente sobrepostos. Maioria responde a MEV + IBP.",

quadro:[
"DRGE TÍPICA: pirose retroesternal (queimação ascendente) + regurgitação ácida. Piora deitado, após refeição, agachamento, refeições gordurosas/picantes",
"DRGE ATÍPICA: tosse crônica, rouquidão, asma de difícil controle, faringite, laringite posterior, erosão dental, dor torácica não-cardíaca",
"DISPEPSIA FUNCIONAL — síndrome da dor epigástrica (EPS): dor/queimação epigástrica intermitente, NÃO relacionada a refeições",
"DISPEPSIA FUNCIONAL — síndrome do desconforto pós-prandial (PDS): plenitude pós-prandial precoce, saciedade precoce, distensão epigástrica",
"⚠ SINAIS DE ALARME (Red flags) — investigar com EDA: idade ≥55a sintomas novos, disfagia/odinofagia, perda de peso involuntária, anemia/sangramento, vômito persistente, massa palpável, história familiar CA gástrico precoce",
],

diag:[
"DIAGNÓSTICO É CLÍNICO na maioria dos casos. Sintomas típicos + sem red flag = teste terapêutico com IBP por 4-8 semanas (ENDOSCOPIA NÃO ROTINA)",
"EDA (endoscopia digestiva alta) INDICADA: red flags, falha de tratamento empírico, sintomas atípicos persistentes, idade ≥55a com sintomas novos",
"EDA classifica esofagite (Los Angeles A-D). 50-60% dos pacientes com DRGE tem ENDOSCOPIA NORMAL (DRGE não erosiva — NERD) — endoscopia normal NÃO exclui DRGE",
"pHmetria de 24h: padrão-ouro para confirmação em casos atípicos ou refratários (medir tempo de pH <4 + correlação com sintomas)",
"Impedância-pHmetria: detecta refluxo NÃO ÁCIDO (em paciente com IBP refratário)",
"Manometria esofágica: avalia motilidade, indicada pré-cirurgia ou suspeita de outras causas",
"Pesquisa H. PYLORI em DISPEPSIA: teste-e-trate (test-and-treat) em <55a sem red flags — UREASE rápida em EDA, antígeno fecal ou ureia respiratória (sorologia é menos confiável)",
],

exames:[
"História clínica detalhada (frequência, intensidade, gatilhos, sintomas atípicos, red flags)",
"Hemograma (anemia ferropriva por sangramento oculto?)",
"H. pylori (antígeno fecal ou ureia respiratória — preferíveis à sorologia)",
"EDA — se red flags / falha de tratamento / ≥55a com sintomas novos",
"⚠ NÃO solicitar rotineiramente: USG abdominal (não avalia esôfago/estômago), Rx contrastado (baixa sensibilidade), CT (sem indicação para DRGE/dispepsia)",
"Eletrólitos / função renal em uso crônico de IBP (depleção de Mg, Ca)",
"Densitometria óssea em uso crônico de IBP em fatores de risco para osteoporose",
],

rx:[
// ============== INICIAL — MEV ==============
{etapa:"inicial", d:"MUDANÇAS DE ESTILO DE VIDA — base de qualquer tratamento", o:"Aplicar SEMPRE, mesmo com indicação medicamentosa. Eficácia comparável a IBP de baixa dose em casos leves."},
{etapa:"inicial", d:"PERDA DE PESO se IMC ≥25 — perda de 5 kg pode reduzir sintomas em 40%", o:"Aumento de IMC é o fator de risco mais bem estabelecido."},
{etapa:"inicial", d:"ELEVAR CABECEIRA da cama 15-20 cm (calço, não travesseiro) — para sintomas noturnos", o:""},
{etapa:"inicial", d:"NÃO DEITAR 2-3 H APÓS REFEIÇÕES; jantar leve 3h antes de dormir", o:""},
{etapa:"inicial", d:"REDUZIR/EVITAR: gorduras saturadas, frituras, chocolate, hortelã, café, álcool, cítricos, tomate, refrigerantes — INDIVIDUALIZAR (cada paciente tem gatilhos próprios)", o:""},
{etapa:"inicial", d:"CESSAR TABAGISMO — reduz tônus EEI (esfíncter esofágico inferior)", o:""},
{etapa:"inicial", d:"REVISAR MEDICAMENTOS: AINEs, bisfosfonatos, anticolinérgicos, BCC, β-bloq, teofilina, doxiciclina podem agravar DRGE", o:""},
{etapa:"inicial", d:"Roupas frouxas; evitar exercício extenuante após refeições", o:""},

// ============== ESCALONAMENTO ==============
{etapa:"escala", d:"⚠ TESTE TERAPÊUTICO com IBP — 4-8 SEMANAS em DRGE TÍPICA SEM RED FLAGS", o:""},
{etapa:"escala", d:"Omeprazol 20-40 mg VO 1×/d EM JEJUM (30-60 min antes café)", o:"REMUME — 1ª escolha SUS. 40 mg em casos moderados-graves. Tomar antes do café (precisa de bomba de prótons ativa)."},
{etapa:"escala", d:"Pantoprazol 40 mg VO 1×/d em jejum — alternativa com menos interações", o:"Preferir em paciente em uso de clopidogrel, varfarina, citalopram (omeprazol inibe CYP2C19)."},
{etapa:"escala", d:"Esomeprazol 20-40 mg VO 1×/d em jejum — formulação mais nova, perfil similar", o:""},

{etapa:"escala", d:"RESPOSTA INICIAL: avaliar em 4-8 semanas. Se sintomas controlados:", o:""},
{etapa:"escala", d:"(1) DRGE EROSIVA confirmada por EDA: manter IBP em DOSE MÍNIMA EFICAZ a longo prazo", o:""},
{etapa:"escala", d:"(2) DRGE não erosiva (NERD) / dispepsia: tentar STEP-DOWN — reduzir para meia dose, depois dias alternados, depois sob demanda (on-demand)", o:""},
{etapa:"escala", d:"(3) Refratário (sintomas persistentes apesar de IBP em dose plena por 8 sem): aumentar para 12/12h × 4 sem, avaliar adesão/horário, considerar EDA + pHmetria", o:""},

{etapa:"escala", d:"⚠ TIMING do IBP é CRÍTICO: tomar 30-60 MIN ANTES DO CAFÉ (precisa de bomba de prótons ATIVA para ser inibida). Tomar à noite/após café reduz eficácia em 40%", o:""},

// ============== ADJUVANTES ==============
{etapa:"adj", d:"BLOQUEADORES H2 — alternativa em DRGE leve, sintomas noturnos breakthrough, ou intolerância a IBP", o:""},
{etapa:"adj", d:"Famotidina 20-40 mg VO 12/12h (antes refeições) ou 40 mg à noite", o:"PREFERIDA atualmente (ranitidina foi retirada em 2020 por NDMA — N-nitrosodimetilamina, contaminante carcinogênico)."},
{etapa:"adj", d:"⚠ Ranitidina: RETIRADA do mercado globalmente em 2020. NÃO PRESCREVER", o:""},
{etapa:"adj", d:"TAQUIFILAXIA: H2 perde eficácia em 2-6 semanas de uso contínuo — usar sob demanda ou intermitente, não contínuo crônico", o:""},

{etapa:"adj", d:"SUCRALFATO 1 g VO 6/6h ou 4/4h (antes refeições + ao deitar)", o:"Forma barreira protetora sobre lesão. Útil em ESOFAGITE EROSIVA + GESTAÇÃO (categoria B). Tomar separado de outras drogas (afeta absorção)."},

{etapa:"adj", d:"ANTIÁCIDOS (hidróxido de alumínio + magnésio, carbonato de cálcio) — alívio sintomático SOB DEMANDA. Não modificam doença", o:"Tomar separado de outras medicações (interfere absorção). Magnésio causa diarreia; alumínio causa constipação."},

{etapa:"adj", d:"PROCINÉTICOS — adjuvantes em casos selecionados (DRGE + gastroparesia, regurgitação proeminente)", o:""},
{etapa:"adj", d:"Domperidona 10 mg VO 8/8h (preferida — passa menos BBB que metoclopramida)", o:"⚠ Pode prolongar QT. EVITAR em cardiopata, ≥60 anos sem indicação clara, uso prolongado (limite 7 dias EMA)."},
{etapa:"adj", d:"Metoclopramida 10 mg VO 8/8h — RESTRITA a uso ≤5 DIAS (sintomas extrapiramidais, discinesia tardia irreversível)", o:"Black box FDA. Evitar idoso. NÃO usar crônico."},

// ============== H. PYLORI ==============
{etapa:"adj", d:"⚠ H. PYLORI: TESTAR + TRATAR em DISPEPSIA não-investigada <55a sem red flags", o:""},
{etapa:"adj", d:"ERRADICAÇÃO 1ª linha (14 dias): IBP 12/12h + Amoxicilina 1g 12/12h + Claritromicina 500 mg 12/12h", o:"Resistência à claritromicina aumentando — verificar padrão local."},
{etapa:"adj", d:"ERRADICAÇÃO em alergia à penicilina: IBP + Claritromicina + Metronidazol 500 mg 12/12h × 14 dias", o:""},
{etapa:"adj", d:"BISMUTO quádrupla (alta resistência): IBP + Bismuto + Tetraciclina + Metronidazol × 14 dias", o:"Subsalicilato/subcitrato de bismuto pouco disponível no Brasil."},
{etapa:"adj", d:"CONFIRMAR ERRADICAÇÃO 4-8 sem após término (suspender IBP 2 sem antes do teste): antígeno fecal ou ureia respiratória", o:""},

// ============== SITUAÇÕES ESPECIAIS ==============
{etapa:"adj", d:"GESTAÇÃO: MEV + antiácidos + sucralfato (categoria B). IBP é seguro mas reservar para casos não responsivos (pantoprazol categoria B, omeprazol C — preferir pantoprazol)", o:""},
{etapa:"adj", d:"PEDIATRIA: DRGE fisiológica do lactente é AUTOLIMITADA — espessamento de fórmula, posicionamento, NÃO usar IBP rotineiramente (sem evidência de eficácia em <1 ano)", o:""},
{etapa:"adj", d:"IDOSO: cautela com IBP crônico (risco fratura, pneumonia, IRC, Mg/B12 baixos, C. difficile). Aplicar lente de PREVENÇÃO QUATERNÁRIA — usar dose mínima eficaz, considerar suspensão periódica", o:""},
{etapa:"adj", d:"DRGE REFRATÁRIA verdadeira (IBP máximo + adesão + timing corretos): considerar CIRURGIA antirefluxo (fundoplicatura de Nissen) em paciente jovem motivado", o:"Cirurgia melhora qualidade de vida mas pode causar disfagia transitória, gases."},

// ============== ALTA ==============
{etapa:"alta", d:"⚠ ORIENTAR PACIENTE: tomar IBP 30-60 MIN antes do café. Resposta esperada em 1-2 semanas para sintomas, 8 semanas para cicatrização de esofagite", o:""},
{etapa:"alta", d:"REAVALIAR em 4-8 semanas. Se controlado: TENTAR STEP-DOWN gradual (meia dose → dias alternados → on-demand)", o:""},
{etapa:"alta", d:"USO CRÔNICO de IBP: avaliar PERIODICAMENTE a indicação. Riscos a longo prazo: ↓ B12, ↓ Mg, ↓ Ca/osteoporose-fratura, ↑ pneumonia, ↑ C. difficile, ↑ IRC, possível rebote ácido na suspensão", o:""},
{etapa:"alta", d:"⚠ SUSPENSÃO DE IBP: tem REBOTE ÁCIDO (hipergastrinemia compensatória) em 4-6 semanas. Reduzir GRADUALMENTE — meia dose por 2 sem, depois dias alternados, depois sob demanda", o:""},
{etapa:"alta", d:"SINAIS DE ALERTA — voltar antes: disfagia, perda de peso, vômito persistente, hematêmese, melena, dor torácica intensa", o:""},
{etapa:"alta", d:"PRÓXIMOS PASSOS — encaminhamento gastroenterologia: (1) red flags; (2) refratário a IBP em dose plena 8 sem; (3) suspeita de Barrett; (4) candidato a cirurgia antirefluxo; (5) H. pylori resistente após 2ª tentativa", o:""},
],

alertas:[
{nivel:"crit", txt:"RED FLAGS = ENDOSCOPIA URGENTE: disfagia, odinofagia, perda de peso involuntária, anemia/sangramento (hematêmese, melena), vômito persistente, massa palpável, idade ≥55a sintomas novos, hist familiar CA gástrico precoce."},
{nivel:"crit", txt:"DOR TORÁCICA ATÍPICA: NÃO assumir DRGE em emergência sem excluir SCA primeiro — especialmente >45a, fatores de risco CV. ECG + troponina + clínica."},
{nivel:"warn", txt:"TIMING DO IBP é CRÍTICO: 30-60 MIN ANTES DO CAFÉ. Tomar à noite/junto/após reduz eficácia em 40%. Orientar repetidamente."},
{nivel:"warn", txt:"RANITIDINA: RETIRADA do mercado em 2020 (contaminação por NDMA — carcinogênico). NÃO PRESCREVER. Usar FAMOTIDINA."},
{nivel:"warn", txt:"USO CRÔNICO DE IBP — aplicar P4: ↓ B12, ↓ Mg, ↓ Ca/fratura, ↑ pneumonia, ↑ C. difficile, ↑ IRC. Usar DOSE MÍNIMA EFICAZ, tentar step-down periódico."},
{nivel:"warn", txt:"METOCLOPRAMIDA: limite ≤5 DIAS (sintomas extrapiramidais, discinesia tardia IRREVERSÍVEL). BLACK BOX FDA. Evitar idoso."},
{nivel:"warn", txt:"H. PYLORI: testar + tratar dispepsia <55a sem red flags. Confirmar erradicação 4-8 sem após (suspender IBP 2 sem antes do teste)."},
{nivel:"warn", txt:"REBOTE ÁCIDO ao suspender IBP — reduzir GRADUALMENTE. Suspensão abrupta após uso prolongado piora sintomas em 4-6 sem."},
{nivel:"info", txt:"ENDOSCOPIA NORMAL não exclui DRGE — 50-60% dos pacientes tem DRGE não erosiva (NERD)."},
{nivel:"info", txt:"INTERAÇÃO OMEPRAZOL + CLOPIDOGREL: omeprazol inibe CYP2C19 → reduz ativação clopidogrel. PREFERIR PANTOPRAZOL (mínima interação)."},
],

fluxo:null,
diretriz:"AGA 2022. ACG DRGE 2022. ESPGHAN/NASPGHAN Peds 2018. Maastricht VI 2022 (H. pylori). Choosing Wisely Brasil."
},

/* ============== GOTA ============== */
{id:"gota", nome:"Gota / Artrite Gotosa", sis:"ost", grav:"baixa",
cid:"M10", ciap:"T92",
sin:["Gota","Artrite úrica","Crise gotosa","Podagra","Hiperuricemia sintomática","Tofo gotoso"],

def:"Artropatia inflamatória por depósito de cristais de URATO MONOSSÓDICO (MSU) em articulações e tecidos. Quadro intermitente (crises) que evolui para forma crônica/tofácea. Hiperuricemia (ácido úrico >6,8 mg/dL) é fator necessário mas NÃO suficiente.",

quadro:[
"CRISE AGUDA (artrite gotosa aguda): dor de início RÁPIDO (pico em 12-24h), monoartrite intensa, vermelhidão, calor, edema, dor desproporcional ao exame",
"PODAGRA = artrite da 1ª metatarsofalângica = sítio CLÁSSICO em 50-70% das primeiras crises. Outros: tarso, tornozelo, joelho, punho, dedos",
"GATILHOS: trauma, álcool (especialmente cerveja, destilados), dieta rica em purinas (carne vermelha, frutos do mar), desidratação, diurético tiazídico/de alça, jejum, cirurgia, infecção",
"PADRÃO CIRCADIANO: crise tipicamente noturna/madrugada",
"FORMA CRÔNICA / TOFÁCEA: tofos (depósitos visíveis/palpáveis — orelha, mão, joelho, cotovelo, pé), artrite poliarticular, destruição articular",
"COMPLICAÇÕES: nefrolitíase (ácido úrico), nefropatia úrica, síndrome metabólica associada",
"HIPERURICEMIA ASSINTOMÁTICA: ácido úrico >6,8 mg/dL sem sintomas — NÃO TRATAR rotineiramente (P4)",
],

diag:[
"DIAGNÓSTICO PADRÃO-OURO: artrocentese + microscopia com luz polarizada = cristais de urato monossódico (forma de agulha, biriffringência NEGATIVA)",
"NA PRÁTICA: diagnóstico CLÍNICO em crise típica + hist prévio + ácido úrico elevado (mas pode estar NORMAL na crise em 30% dos casos — pode estar deslocado para a articulação)",
"CRITÉRIOS ACR/EULAR 2015: pontuação clínica + laboratorial + imagem (USG/DECT)",
"USG ARTICULAR: sinal de duplo contorno (depósito de cristais no cartilage), tofos hipoecoicos",
"DECT (dual-energy CT): identifica depósitos de urato — útil em casos atípicos",
"Rx: NORMAL nas primeiras crises. Cronicamente: erosões 'sacabocado' com bordas pendentes, preservação relativa do espaço articular",
"DIFERENCIAR DE: artrite séptica (URGÊNCIA — sempre punciar!), pseudogota (CPPD — cristais romboides, birrefringência POSITIVA), AR, celulite, fratura por estresse",
],

exames:[
"Ácido úrico sérico (mas pode estar normal na crise!) — repetir após 2 sem da crise",
"Hemograma (leucocitose, plaquetose em crise inflamatória — diferenciar de séptica)",
"PCR, VHS",
"Creatinina + TFG (avalia nefropatia + doses de drogas)",
"Glicemia jejum + HbA1c, perfil lipídico (síndrome metabólica frequente)",
"Pesquisa rápida de cristais (artrocentese) — PADRÃO-OURO se diagnóstico duvidoso ou suspeita de séptica",
"USG articular ou DECT — em casos atípicos",
"URINA I + relação cálcio/creatinina (nefrolitíase)",
"⚠ Em PRIMEIRA CRISE atípica ou monoartrite em paciente jovem: AFASTAR ARTRITE SÉPTICA com artrocentese (Gram + cultura + contagem celular)",
],

rx:[
// ============== INICIAL — CRISE AGUDA ==============
{etapa:"inicial", d:"⚠ TRATAMENTO DA CRISE AGUDA — INICIAR NAS PRIMEIRAS 24H (eficácia maior quanto mais precoce)", o:""},
{etapa:"inicial", d:"REPOUSO + ELEVAÇÃO + GELO LOCAL 4-6×/d × 20 min", o:""},
{etapa:"inicial", d:"⚠ NÃO INICIAR alopurinol/febuxostate durante a crise (pode prolongar). Se paciente JÁ está em uso: MANTER (não suspender)", o:""},

// ============== ESCOLHA DO ANTI-INFLAMATÓRIO ==============
{etapa:"escala", d:"⚠ 3 OPÇÕES iniciais — ESCOLHA conforme contraindicações:", o:""},

{etapa:"escala", d:"(1) AINE — 1ª LINHA em paciente jovem, sem comorbidade significativa", o:""},
{etapa:"escala", d:"Naproxeno 500 mg VO 12/12h × 5-7 dias (mais estudado para gota)", o:""},
{etapa:"escala", d:"Ibuprofeno 600-800 mg VO 8/8h × 5-7 dias", o:""},
{etapa:"escala", d:"Diclofenaco 50 mg VO 8/8h × 5-7 dias", o:""},
{etapa:"escala", d:"Indometacina 50 mg VO 8/8h × 3-5 dias (clássica mas mais efeitos colaterais)", o:""},
{etapa:"escala", d:"+ PROTETOR GÁSTRICO (omeprazol 20 mg) durante uso do AINE", o:""},

{etapa:"escala", d:"AINE CONTRAINDICADO em: IRC TFG <30, ICC descompensada, doença ulcerosa ativa, anticoagulação, alergia a AAS, gestação 3º trim", o:""},

{etapa:"escala", d:"(2) COLCHICINA — 1ª linha em paciente com contraindicação a AINE OU primeiros sintomas (<24h)", o:""},
{etapa:"escala", d:"Esquema MODERNO (ACR 2020, low-dose): Colchicina 1,2 mg VO ATAQUE + 0,6 mg em 1h → DEPOIS 0,6 mg 12/12h × 5-7 dias", o:"Eficácia similar ao esquema clássico com MUITO MENOS efeitos GI (estudo AGREE)."},
{etapa:"escala", d:"NÃO USAR esquema antigo (0,6 mg de hora em hora até diarreia ou 6 mg total) — abandonado por toxicidade", o:""},
{etapa:"escala", d:"AJUSTE EM IRC: TFG 30-60: máx 1,2 mg/d. TFG <30: 0,3 mg/d ou contraindicado. EVITAR em HD.", o:""},
{etapa:"escala", d:"INTERAÇÕES IMPORTANTES: estatinas (miopatia), claritromicina, ciclosporina, diltiazem, verapamil (todos aumentam toxicidade)", o:""},

{etapa:"escala", d:"(3) CORTICOIDE — 1ª linha em paciente com múltiplas contraindicações OU artrite poliarticular OU não responde aos anteriores", o:""},
{etapa:"escala", d:"Prednisona 30-40 mg VO 1×/d × 5-7 dias, depois desmamar em 5-7 dias", o:"NÃO precisa esquema longo. Tão eficaz quanto AINE."},
{etapa:"escala", d:"OU Triamcinolona intra-articular 10-40 mg (se monoartrite): EXCELENTE opção, evita sistêmico", o:"⚠ EXCLUIR artrite séptica antes (artrocentese + Gram/cultura). Risco se aplicar em séptica."},
{etapa:"escala", d:"OU metilprednisolona acetato 40-80 mg IM dose única (alternativa)", o:""},

// ============== TRANSIÇÃO PARA TRATAMENTO HIPOURICÊMICO ==============
{etapa:"adj", d:"⚠ TRATAMENTO HIPOURICÊMICO (CRÔNICO) — INICIAR APÓS RESOLUÇÃO DA CRISE (2-4 sem)", o:""},

{etapa:"adj", d:"INDICAÇÕES (ACR 2020):", o:""},
{etapa:"adj", d:"(1) ≥2 crises/ano OU", o:""},
{etapa:"adj", d:"(2) Tofos (clínicos ou radiológicos) OU", o:""},
{etapa:"adj", d:"(3) Nefrolitíase úrica OU", o:""},
{etapa:"adj", d:"(4) IRC ≥G3 OU", o:""},
{etapa:"adj", d:"(5) Considerar após PRIMEIRA crise se ácido úrico >9 ou jovem com fatores", o:""},

{etapa:"adj", d:"⚠ NÃO TRATAR hiperuricemia ASSINTOMÁTICA (mesmo se >8) — exceto profilaxia em quimioterapia/síndrome de lise tumoral. NÚMERO ISOLADO NÃO É DOENÇA — P4", o:""},

{etapa:"adj", d:"META do ácido úrico:", o:""},
{etapa:"adj", d:"GERAL: <6 mg/dL", o:""},
{etapa:"adj", d:"TOFÁCEA / artrite recorrente refratária: <5 mg/dL", o:""},

{etapa:"adj", d:"ALOPURINOL — 1ª LINHA (>90% dos casos)", o:""},
{etapa:"adj", d:"INÍCIO: 100 mg/d VO (50 mg/d se IRC TFG <30) — DOSE BAIXA INICIAL", o:""},
{etapa:"adj", d:"TITULAR: aumentar 100 mg cada 2-4 sem até atingir meta. Dose habitual 300-600 mg/d. Dose máxima 800 mg/d", o:""},
{etapa:"adj", d:"⚠ HLA-B*5801: rastrear em ASIÁTICOS (chineses Han, coreanos, tailandeses) — risco SSJ/NET. Em brasileiros: não rotina mas considerar em descendentes asiáticos", o:""},
{etapa:"adj", d:"REAÇÕES: rash leve em 2-5% (suspender), DRESS/SSJ/NET (raras mas FATAIS), hepatotoxicidade", o:""},
{etapa:"adj", d:"COM AZATIOPRINA/6-MP: CONTRAINDICAÇÃO (alopurinol inibe xantina oxidase → ↑↑ toxicidade)", o:""},

{etapa:"adj", d:"FEBUXOSTATE — 2ª linha (intolerância ao alopurinol ou refratariedade)", o:""},
{etapa:"adj", d:"40-80 mg VO 1×/d. Pode ir até 120 mg em casos refratários", o:""},
{etapa:"adj", d:"VANTAGEM: não-purínico, não interage com azatioprina (mas cuidado igual em uso concomitante), eliminação hepática (menos ajuste em IRC)", o:""},
{etapa:"adj", d:"⚠ ALERTA CV (CARES trial 2018): ↑ mortalidade CV em paciente com DCV estabelecida vs alopurinol. PREFERIR ALOPURINOL em paciente CV", o:""},

{etapa:"adj", d:"⚠ PROFILAXIA durante início de hipouricemiante", o:""},
{etapa:"adj", d:"Iniciar hipouricemiante AUMENTA RISCO DE CRISE nos primeiros 3-6 meses (mobilização de cristais)", o:""},
{etapa:"adj", d:"PROFILAXIA: Colchicina 0,6 mg/d (0,3 mg/d se IRC) por 3-6 MESES após início do hipouricemiante", o:""},
{etapa:"adj", d:"Alternativa: AINE em dose baixa (naproxeno 250 mg 12/12h) ou corticoide baixa dose", o:""},

// ============== MEV E COMORBIDADES ==============
{etapa:"adj", d:"MUDANÇAS DE ESTILO DE VIDA", o:""},
{etapa:"adj", d:"DIETA: reduzir purinas — carne vermelha, vísceras, frutos do mar (mariscos, anchovas, sardinhas), caldos de carne. Pode laticínios desnatados (PROTETORES)", o:""},
{etapa:"adj", d:"ÁLCOOL: REDUZIR — cerveja é o pior (purinas + álcool), destilados (vinho em dose baixa parece neutro)", o:""},
{etapa:"adj", d:"FRUTOSE: reduzir (sucos industrializados, refrigerantes, doces) — ↑ síntese de urato", o:""},
{etapa:"adj", d:"HIDRATAÇÃO: 2-3 L água/d (especialmente em nefrolitíase úrica)", o:""},
{etapa:"adj", d:"PERDA DE PESO se obesidade: 5-10% reduz urato 1-2 mg/dL", o:""},
{etapa:"adj", d:"REVISAR MEDICAMENTOS QUE AUMENTAM URATO: tiazídicos (substituir por losartana — uricosúrica), furosemida, ciclosporina, AAS dose baixa (paradoxal). Substituir quando possível", o:""},

{etapa:"adj", d:"COMORBIDADES — investigar e tratar: HAS, DM2, dislipidemia, doença renal, sd metabólica (frequentemente coexistem)", o:""},

// ============== ALTA ==============
{etapa:"alta", d:"⚠ SEGUIMENTO: ácido úrico cada 2-4 sem durante titulação, depois 6/6m quando estável", o:""},
{etapa:"alta", d:"REFORÇAR ADESÃO ao hipouricemiante — gota é DOENÇA CRÔNICA. Suspender = volta da doença. Pacientes frequentemente abandonam após melhora aparente", o:""},
{etapa:"alta", d:"VIGILÂNCIA das comorbidades CV (gota = fator de risco CV independente)", o:""},
{etapa:"alta", d:"PRÓXIMOS PASSOS — encaminhamento reumatologia: (1) refratariedade após alopurinol + febuxostate em dose máxima; (2) tofos extensos; (3) deformidade articular; (4) intolerância múltipla; (5) suspeita de gota atípica ou outra cristalopatia", o:""},
],

alertas:[
{nivel:"crit", txt:"AFASTAR ARTRITE SÉPTICA em monoartrite aguda — emergência. Sempre considerar artrocentese (Gram, cultura, contagem celular). NÃO infiltrar corticoide sem excluir séptica."},
{nivel:"crit", txt:"ALOPURINOL — SSJ/NET/DRESS são raras MAS FATAIS. HLA-B*5801 em asiáticos (rastrear). Rash leve = SUSPENDER. NÃO reiniciar se reação grave."},
{nivel:"crit", txt:"ALOPURINOL + AZATIOPRINA/6-MP: CONTRAINDICAÇÃO ABSOLUTA — toxicidade hematológica grave (alopurinol inibe xantina oxidase que metaboliza azatioprina)."},
{nivel:"warn", txt:"NÃO INICIAR hipouricemiante durante crise aguda (pode prolongar). Se paciente JÁ usa: MANTER. Iniciar 2-4 sem após resolução."},
{nivel:"warn", txt:"COLCHICINA — usar esquema MODERNO low-dose (1,2 + 0,6 + 0,6 12/12h). Esquema antigo até diarreia FOI ABANDONADO por toxicidade."},
{nivel:"warn", txt:"COLCHICINA + ESTATINA: risco miopatia. Colchicina + claritromicina/macrolídeos/ciclosporina/diltiazem/verapamil: ↑↑ toxicidade colchicina. Reduzir dose ou evitar."},
{nivel:"warn", txt:"FEBUXOSTATE — CARES trial: ↑ mortalidade CV em paciente com DCV estabelecida vs alopurinol. PREFERIR ALOPURINOL em paciente com DCV."},
{nivel:"warn", txt:"PROFILAXIA com colchicina 3-6 MESES ao iniciar hipouricemiante — sem isso, alta taxa de novas crises por mobilização."},
{nivel:"warn", txt:"NÃO TRATAR hiperuricemia ASSINTOMÁTICA — aplicar P4. Tratar apenas pré-quimioterapia em risco de síndrome de lise tumoral."},
{nivel:"info", txt:"GOTA = fator de risco CV independente. Investigar e tratar comorbidades (HAS, DM2, dislipidemia, IRC)."},
{nivel:"info", txt:"LOSARTANA tem efeito URICOSÚRICO (reduz urato ~6%) — preferir em paciente com gota + HAS vs hidroclorotiazida (aumenta urato)."},
],

fluxo:null,
diretriz:"ACR Guidelines Gout 2020. EULAR 2016+update. ACR/EULAR 2015 (classificação). CARES trial 2018."
},

);
