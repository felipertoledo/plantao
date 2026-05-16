/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — GUIA RÁPIDO ATB
   Espectro × Foco infeccioso (consulta na ponta)
   =========================================================== */

PATOLOGIAS.push(

/* ============== ESPECTRO POR CLASSE ============== */
{id:"doc-atb-espectro-classe", sis:"docs", grav:"baixa",
nome:"ATB — Espectro por Classe (G+ / G- / atípicos / anaeróbios)",
sin:["antibiótico","espectro","classe","cobertura","pega bem","ATB"],
def:"Mapa rápido de espectro por CLASSE — útil para decisão na hora. Use junto com 'ATB por Foco Infeccioso' para escolher o ATB certo.",

exames:[
"⚠ PENICILINAS NATURAIS (Pen V, Pen G benzatina/cristalina)",
"PEGA BEM: G+ Strep (S. pyogenes, S. pneumoniae sensível, viridans), Treponema (SÍFILIS)",
"NÃO PEGA: G-, S. aureus β-lac+, anaeróbios da boca em sinusite, atípicos",
"USO PRINCIPAL: sífilis, faringite estreptocócica, profilaxia febre reumática, erisipela leve",

"⚠ AMINOPENICILINAS (Amoxicilina, Ampicilina)",
"PEGA BEM: G+ Strep, S. pneumoniae, Enterococcus, alguns G- ambulatoriais (E. coli, H. influenzae sem β-lac, P. mirabilis sem β-lac), Listeria",
"NÃO PEGA: S. aureus β-lac+ (90% produz β-lactamase), anaeróbios bem, Pseudomonas, MRSA",
"USO PRINCIPAL: faringite, otite/sinusite, PAC ambulatorial, H. pylori (esquema), endocardite por enterococo",

"⚠ AMINOPENICILINA + INIBIDOR (Amox+Clav, Ampi+Sulb)",
"PEGA BEM: amplia amoxi para S. aureus β-lac+, H. influenzae β-lac+, Moraxella, E. coli β-lac+, ANAERÓBIOS DA BOCA + GU/GI (Bacteroides), Pasteurella, Eikenella",
"NÃO PEGA: MRSA, Pseudomonas, ESBL",
"USO PRINCIPAL: mordedura humana/animal, sinusite refratária, abscesso dental, pé diabético leve, ITU complicada, pneumonia aspirativa",

"⚠ CEFALOSPORINAS 1ª GERAÇÃO (Cefalexina VO, Cefazolina IV)",
"PEGA BEM: G+ AMPLO (Strep, S. aureus β-lac+ não MRSA), G- limitados (E. coli, K. pneumoniae, P. mirabilis ambulatoriais)",
"NÃO PEGA: anaeróbios, MRSA, Pseudomonas, Listeria, enterococo, atípicos",
"USO PRINCIPAL: ⚠ PELE E PARTES MOLES (erisipela, celulite), profilaxia cirúrgica (cefazolina), ITU não complicada, mastite, endocardite por MSSA (cefazolina)",

"⚠ CEFALOSPORINAS 2ª GERAÇÃO (Cefuroxima)",
"PEGA BEM: amplia 1ª para mais G- (H. influenzae β-lac+, Moraxella), mantém G+, mantém Strep",
"NÃO PEGA: anaeróbios (exceção parcial cefoxitina), Pseudomonas, MRSA, ESBL",
"USO PRINCIPAL: PAC ambulatorial, sinusite/otite refratária, gonorreia (alternativa)",

"⚠ CEFALOSPORINAS 3ª GERAÇÃO (Ceftriaxona, Cefotaxima)",
"PEGA BEM: G- AMPLO (E. coli, Klebsiella, Proteus, H. influenzae, Salmonella, N. gonorrhoeae, N. meningitidis), G+ mantém (Strep), penetra SNC",
"NÃO PEGA: anaeróbios (precisa metro), Pseudomonas (exceto ceftazidima), MRSA, ESBL, Enterococcus, Listeria",
"USO PRINCIPAL: ⚠ MENINGITE (1ª linha), gonorreia (DOSE ÚNICA), PAC moderada-grave, pielonefrite, febre tifoide, DIP, profilaxia meningococo",

"⚠ CEFALOSPORINAS 4ª GERAÇÃO (Cefepima)",
"PEGA BEM: 3ª + PSEUDOMONAS + alguns Enterobacter, Serratia (estabilidade AmpC)",
"NÃO PEGA: anaeróbios, MRSA, ESBL puro",
"USO PRINCIPAL: neutropenia febril, pneumonia nosocomial, infecções nosocomiais graves",

"⚠ MACROLÍDEOS (Azitromicina, Claritromicina, Eritromicina)",
"PEGA BEM: ATÍPICOS RESPIRATÓRIOS (Mycoplasma, Chlamydia, Legionella, Bordetella), G+ Strep (resistência crescente), alguns G- (H. influenzae, Moraxella, Campylobacter, Helicobacter), micobactérias atípicas (MAC)",
"NÃO PEGA: anaeróbios bem, Pseudomonas, MRSA, Mycoplasma macrolídeo-resistente",
"USO PRINCIPAL: ⚠ PAC ATÍPICA (cobertura essencial), CHLAMYDIA, coqueluche, otite/sinusite em alérgico β-lac, H. pylori (claritro), profilaxia DPOC exacerbador (azitro)",

"⚠ FLUOROQUINOLONAS 2ª GERAÇÃO (Cipro, Norflo)",
"PEGA BEM: G- AMPLO (E. coli, Klebsiella, Proteus, Enterobacter, Pseudomonas, Salmonella, Shigella, Campylobacter)",
"NÃO PEGA: G+ pneumococo INSUFICIENTE (não em PAC), anaeróbios, MRSA, atípicos respiratórios subótimo",
"USO PRINCIPAL: ⚠ ITU COMPLICADA, prostatite, diarreia bacteriana, intra-abdominal (com metro), otite externa maligna",

"⚠ FLUOROQUINOLONAS 'RESPIRATÓRIAS' (Levofloxacino, Moxifloxacino)",
"PEGA BEM: cipro + S. pneumoniae EXCELENTE + atípicos respiratórios EXCELENTE (Mycoplasma, Chlamydia, Legionella)",
"NÃO PEGA: anaeróbios (exceto moxi parcial), MRSA",
"USO PRINCIPAL: ⚠ PAC moderada-grave (1ª linha em alérgico β-lac OU monoterapia em paciente com risco resistência), DPOC exacerbação grave, TB 2ª linha",

"⚠ TETRACICLINAS (Doxiciclina)",
"PEGA BEM: ATÍPICOS (Chlamydia, Mycoplasma, Rickettsia — FEBRE MACULOSA, Borrelia — Lyme, Ehrlichia), ZOONOSES (leptospirose, brucelose), G+ limitados (S. aureus + CA-MRSA, Strep), G- (H. influenzae, Vibrio), MALÁRIA profilaxia",
"NÃO PEGA: Pseudomonas, anaeróbios bem, Proteus, enterococo",
"USO PRINCIPAL: ⚠ CHLAMYDIA (1ª linha atual), LEPTOSPIROSE, RIQUETTSIOSE (febre maculosa), acne, rosácea, Lyme",

"⚠ SULFAMETOXAZOL+TRIMETOPRIM",
"PEGA BEM: G+ (S. aureus + CA-MRSA, Listeria, Nocardia), G- (E. coli, Klebsiella, Proteus, Shigella, Salmonella), Pneumocystis jirovecii, Stenotrophomonas, Toxoplasma",
"NÃO PEGA: anaeróbios, Pseudomonas, atípicos respiratórios, Treponema",
"USO PRINCIPAL: ⚠ ITU NÃO COMPLICADA, CA-MRSA pele, PCP (pneumocistose) em HIV, profilaxia em imunossuprimido, toxoplasmose, nocardia",

"⚠ CLINDAMICINA",
"PEGA BEM: G+ (Strep, S. aureus + alguns CA-MRSA), ANAERÓBIOS DA BOCA E PELE (Bacteroides, Prevotella, Fusobacterium), Toxoplasma",
"NÃO PEGA: G- (exceção F. necrophorum), MRSA hospitalar, B. fragilis intra-abdominal (resistência crescente), atípicos",
"USO PRINCIPAL: pele/partes moles em alérgico β-lac, infecção odontogênica, ⚠ FASCEÍTE NECROTIZANTE (inibição de toxinas), choque tóxico Strep/Staph, vaginose",

"⚠ METRONIDAZOL",
"PEGA BEM: ANAERÓBIOS (Bacteroides incluindo B. fragilis, Clostridium, Prevotella, Fusobacterium), PROTOZOÁRIOS (Trichomonas, Giardia, Entamoeba), H. pylori (esquema), Gardnerella",
"NÃO PEGA: AERÓBIOS — sempre associar cobertura aeróbia em infecção mista",
"USO PRINCIPAL: ⚠ INTRA-ABDOMINAL (com cobertura aeróbia), tricomoníase, giardíase, amebíase, vaginose, C. difficile (alternativa), H. pylori esquema",

"⚠ AMINOGLICOSÍDEOS (Gentamicina, Amicacina)",
"PEGA BEM: G- (E. coli, Klebsiella, Pseudomonas), SINERGISMO com β-lac contra G+ (Strep, Enterococo, S. aureus em endocardite)",
"NÃO PEGA: anaeróbios (precisam O2 para entrar), monoterapia em G+ (apenas sinergismo)",
"USO PRINCIPAL: ⚠ USO INTERNO/HOSPITALAR — urosepse (com β-lac), endocardite (sinergismo), Pseudomonas grave",

"⚠ NITROFURANTOÍNA",
"PEGA BEM: ⚠ APENAS URINA — E. coli, Klebsiella, Enterobacter, E. faecalis, S. saprophyticus",
"NÃO PEGA: tecidos fora trato urinário (sem ação sistêmica), Proteus, Pseudomonas, Serratia",
"USO PRINCIPAL: ⚠ CISTITE NÃO COMPLICADA (1ª linha), profilaxia ITU recorrente. ⚠ NÃO USAR em pielonefrite (concentração tecidual insuficiente)",

"⚠ FOSFOMICINA",
"PEGA BEM: ⚠ APENAS URINA — E. coli (incluindo ESBL), Klebsiella, E. faecalis (incluindo VRE), S. saprophyticus",
"NÃO PEGA: tecidos fora urina, anaeróbios",
"USO PRINCIPAL: ⚠ CISTITE NÃO COMPLICADA (DOSE ÚNICA — adesão), ⚠ ITU por ESBL ambulatorial (única VO eficaz)",

"⚠ VANCOMICINA (referência)",
"PEGA BEM: G+ GRAVE (MRSA, MRSE, Streptococcus pneumoniae resistente, Enterococcus VSE, C. difficile VO)",
"NÃO PEGA: G-, VRE, atípicos, anaeróbios",
"USO PRINCIPAL: ⚠ MRSA/HOSPITALAR, C. difficile VO (1ª linha), meningite empírica (cobre pneumococo R) — uso predominantemente hospitalar",

"⚠ LINEZOLIDA (referência)",
"PEGA BEM: G+ INCLUINDO MRSA E VRE",
"NÃO PEGA: G-, anaeróbios",
"USO PRINCIPAL: ⚠ MRSA pneumonia / pele complicada, VRE — uso hospitalar especializado",

"⚠ CARBAPENÊMICOS (Meropenem, Imipenem, Ertapenem) — referência",
"PEGA BEM: ⚠ ULTRA AMPLO — G+, G-, anaeróbios, ESBL. Meropenem cobre Pseudomonas (Ertapenem NÃO)",
"NÃO PEGA: MRSA, VRE, Stenotrophomonas, atípicos",
"USO PRINCIPAL: ⚠ ESBL, infecções polimicrobianas graves hospitalares — RESERVAR para uso hospitalar específico",
],
diretriz:"Sanford Guide 2025; IDSA; Diretrizes Brasileiras; PCDT-MS"
},

/* ============== ATB POR FOCO INFECCIOSO ============== */
{id:"doc-atb-foco-infeccioso", sis:"docs", grav:"baixa",
nome:"ATB por Foco Infeccioso — escolha rápida na ponta",
sin:["antibiótico","foco","síndrome","escolha","empírico","pele","ITU","pneumonia","faringite","abdominal"],
def:"Guia prático: dado o FOCO INFECCIOSO + GRAVIDADE + alergias = ATB de escolha (1ª linha + alternativas). Sempre considerar adesão, custo (PFPB/REMUME), gestação, comorbidades.",

exames:[
"⚠ FARINGOAMIGDALITE BACTERIANA (S. pyogenes) — Centor ≥3 ou teste rápido +",
"1ª LINHA: AMOXICILINA 500 mg 12/12h × 10d (adulto); 50 mg/kg/d (criança)",
"ALERGIA LEVE β-LAC: CEFALEXINA 500 mg 6/6h × 10d",
"ALERGIA GRAVE β-LAC: AZITROMICINA 500 mg dia 1 + 250 mg/d × 4d; OU clindamicina",
"NÃO ADERENTE: PENICILINA G BENZATINA 1.200.000 UI IM dose única",

"⚠ OTITE MÉDIA AGUDA / SINUSITE BACTERIANA",
"1ª LINHA: AMOXICILINA 500-1000 mg 8/8h × 5-7d (adulto); 80-90 mg/kg/d (criança em OMA)",
"REFRATÁRIA / β-LAC PRÉVIA / ALTA RESISTÊNCIA: AMOX+CLAVULANATO 875/125 mg 12/12h × 5-7d",
"ALERGIA LEVE β-LAC: CEFUROXIMA 500 mg 12/12h × 5-7d",
"ALERGIA GRAVE: AZITROMICINA 500 mg/d × 3-5d (resistência pneumocócica limita) OU clindamicina + quinolona",

"⚠ PNEUMONIA COMUNITÁRIA AMBULATORIAL (PAC) — adulto",
"SEM COMORBIDADE: AMOXICILINA 1 g 8/8h × 5-7d ± azitromicina 500 mg/d × 3-5d (se atípicos suspeitos)",
"COM COMORBIDADE (DPOC, DM, hepato, alcoolista, asplenia): AMOX+CLAVULANATO 875/125 mg 12/12h × 5-7d + AZITROMICINA 500 mg/d × 3-5d",
"ALERGIA β-LAC: LEVOFLOXACINO 750 mg/d × 5d (monoterapia)",

"⚠ PAC HOSPITALAR / MODERADA-GRAVE",
"1ª LINHA: CEFTRIAXONA 1-2 g IV/d + AZITROMICINA 500 mg/d × 5-7d (com transição VO)",
"ALÉRGICO: LEVOFLOXACINO 750 mg IV/VO/d (monoterapia)",
"ASPIRATIVA / CAVITARIA: AMPI+SULBACTAM 3 g IV 6/6h OU AMOX+CLAVULANATO VO; ou clinda + ceftriaxona",

"⚠ DPOC EXACERBAÇÃO BACTERIANA (purulência + dispneia)",
"1ª LINHA: AMOXICILINA 500 mg 8/8h × 5d OU AMOX+CLAVULANATO 875/125 12/12h × 5d",
"ALTERNATIVA: AZITROMICINA OU DOXICICLINA 100 mg 12/12h × 5d",
"GRAVE / RISCO PSEUDOMONAS: LEVOFLOXACINO 750 mg/d × 5d",

"⚠ ITU NÃO COMPLICADA (cistite mulher)",
"1ª LINHA: NITROFURANTOÍNA 100 mg 6/6h × 5d OU FOSFOMICINA 3 g VO DOSE ÚNICA",
"ALTERNATIVA: SMX-TMP 800/160 mg 12/12h × 3d (se resistência local <20%)",
"ÚLTIMA ESCOLHA: CIPROFLOXACINO 500 mg 12/12h × 3d (preservar para complicadas — P4)",
"GESTAÇÃO: NITROFURANTOÍNA (não >36 sem), AMOX+CLAVULANATO, CEFALEXINA, FOSFOMICINA",

"⚠ PIELONEFRITE AMBULATORIAL adulto",
"1ª LINHA: CIPROFLOXACINO 500 mg 12/12h × 7-10d (se sem alergia, sem gestação, sem fatores resistência)",
"ALTERNATIVA: AMOX+CLAV 875/125 12/12h × 10-14d; ou ceftriaxona 1g IM/IV/d × 3d → VO",
"GESTAÇÃO HOSPITALAR: CEFTRIAXONA 1-2 g IV/d × 7-14d",
"GRAVE / HOSPITALAR: CEFTRIAXONA / PIPERACILINA-TAZO ± aminoglicosídeo",

"⚠ PROSTATITE BACTERIANA",
"AGUDA: CIPROFLOXACINO 500 mg 12/12h × 4-6 sem OU LEVOFLOXACINO 500 mg/d × 4-6 sem",
"ALTERNATIVA: SMX-TMP 800/160 mg 12/12h × 4-6 sem",
"CRÔNICA: 6-12 sem mesmas drogas",

"⚠ CELULITE / ERISIPELA (sem MRSA)",
"1ª LINHA: CEFALEXINA 500 mg 6/6h × 5-10d",
"ALTERNATIVA: AMOXICILINA 500 mg 8/8h × 7-10d (cobertura apenas Strep — preferir cefalexina)",
"ALERGIA β-LAC: CLINDAMICINA 300-450 mg 6/6h × 5-7d",
"GRAVE / HOSPITALAR: CEFAZOLINA 1-2 g IV 8/8h OU CLINDAMICINA + cobertura G-",

"⚠ ABSCESSO / CA-MRSA SUSPEITO",
"1ª LINHA: I&D + SMX-TMP 800/160 mg 12/12h × 5-10d",
"ALTERNATIVA: CLINDAMICINA 300-450 mg 6/6h × 5-7d",
"ABSCESSO PEQUENO SEM CELULITE EM IMUNOCOMPETENTE: I&D isolada pode ser suficiente",

"⚠ FASCEÍTE NECROTIZANTE",
"PIPERACILINA-TAZO 4,5 g IV 6/6h + CLINDAMICINA 900 mg IV 8/8h + VANCOMICINA IV (cobertura MRSA + toxinas)",
"⚠ EMERGÊNCIA — desbridamento cirúrgico precoce + UTI",

"⚠ INFECÇÃO DE FERIDA / MORDEDURA (humana, cão, gato)",
"1ª LINHA: AMOX+CLAVULANATO 875/125 12/12h × 5-7d (profilaxia) ou 7-14d (estabelecida)",
"ALERGIA β-LAC: DOXICICLINA + METRONIDAZOL (cobre Pasteurella + anaeróbios)",
"⚠ MORDEDURA HUMANA: sempre antibiótico; ⚠ MORDEDURA ANIMAL: ATB se mão, face, periarticular, profunda, imunossuprimido",

"⚠ INFECÇÃO ODONTOGÊNICA / ABSCESSO DENTAL",
"1ª LINHA: AMOXICILINA 500 mg 8/8h × 5-7d (leve); AMOX+CLAVULANATO 875/125 12/12h × 5-7d (moderada-grave)",
"ALERGIA β-LAC: CLINDAMICINA 300-450 mg 6/6h × 5-7d",

"⚠ INTRA-ABDOMINAL (apendicite, diverticulite, peritonite, colecistite)",
"AMBULATORIAL LEVE: CIPROFLOXACINO 500 mg 12/12h + METRONIDAZOL 500 mg 8/8h × 7-10d OU AMOX+CLAV 875/125 12/12h × 7-10d",
"HOSPITALAR MODERADA: CEFTRIAXONA 1-2 g IV/d + METRONIDAZOL 500 mg IV 8/8h × 7-10d OU AMPI+SULB 3 g IV 6/6h",
"GRAVE / SÉPTICO: PIPERACILINA-TAZO ± vancomicina (depende foco e contexto)",

"⚠ DIARREIA BACTERIANA AGUDA",
"⚠ INDICAÇÃO de ATB: febre alta + sangue/muco + imunossuprimido + idoso + diarreia >7d",
"1ª LINHA: CIPROFLOXACINO 500 mg 12/12h × 3-5d OU AZITROMICINA 500 mg/d × 3d",
"GESTANTE: AZITROMICINA 500 mg/d × 3d (preferida)",
"⚠ DIARREIA SIMPLES (sem sinais de gravidade): NÃO ANTIBIÓTICO — hidratação",

"⚠ MENINGITE BACTERIANA EMPÍRICA",
"ADULTO: CEFTRIAXONA 2 g IV 12/12h + VANCOMICINA IV + DEXAMETASONA 0,15 mg/kg 6/6h × 4d (antes/com 1ª dose)",
"⚠ >50a OU IMUNOSSUPRIMIDO: + AMPICILINA 2 g IV 4/4h (cobrir Listeria)",
"CRIANÇA >3m: CEFTRIAXONA 100 mg/kg/d ÷ 12/12h + VANCOMICINA + DEXAMETASONA",

"⚠ SEPSE / FEBRE DE FOCO INDETERMINADO HOSPITALAR",
"COMUNITÁRIO: CEFTRIAXONA 1-2 g IV/d ± METRONIDAZOL (se foco abdominal)",
"HOSPITALAR / NEUTROPENIA: PIPERACILINA-TAZO OU CEFEPIMA OU MEROPENEM ± VANCOMICINA",

"⚠ IST — Gonorreia + Chlamydia (síndrome corrimento uretral/cervicite)",
"GONORREIA: CEFTRIAXONA 500 mg IM DOSE ÚNICA + AZITROMICINA 1 g VO dose única (esquema dual atual)",
"CHLAMYDIA ISOLADA: DOXICICLINA 100 mg 12/12h × 7d (preferida) OU AZITROMICINA 1 g dose única",
"DIP: CEFTRIAXONA 500 mg IM dose única + DOXICICLINA 100 mg 12/12h × 14d + METRONIDAZOL 500 mg 12/12h × 14d",

"⚠ SÍFILIS",
"PRIMÁRIA/SECUNDÁRIA/LATENTE RECENTE: PENICILINA G BENZATINA 2.400.000 UI IM dose única",
"LATENTE TARDIA/INDETERMINADA/TERCIÁRIA: 2.400.000 UI IM 1×/sem × 3 sem (total 7,2 milhões)",
"NEUROSÍFILIS: PENICILINA G CRISTALINA 18-24 milhões UI/d IV × 10-14d (hospitalar)",
"⚠ GESTANTE: dessensibilizar se alérgica (não usar substituto)",

"⚠ LEPTOSPIROSE (leve ambulatorial)",
"1ª LINHA: DOXICICLINA 100 mg 12/12h × 7d",
"GESTANTE/CRIANÇA <8a: AMOXICILINA 500 mg 8/8h × 7d",
"GRAVE (síndrome de Weil): CEFTRIAXONA 1-2 g IV/d × 7d + hospitalização",

"⚠ FEBRE MACULOSA BRASILEIRA (Rickettsia)",
"⚠ INICIAR EMPÍRICA NA SUSPEITA (sem aguardar sorologia)",
"DOXICICLINA 100 mg 12/12h × 7d (mínimo 3d após cessar febre)",
"⚠ INCLUSIVE EM CRIANÇA — risco de morte > risco dos dentes",

"⚠ TRICOMONÍASE",
"METRONIDAZOL 2 g VO DOSE ÚNICA (mulher + parceiro)",
"ALTERNATIVA: 500 mg 12/12h × 7d",

"⚠ VAGINOSE BACTERIANA",
"METRONIDAZOL 500 mg VO 12/12h × 7d OU gel 0,75% intravaginal × 5d",

"⚠ C. DIFFICILE",
"LEVE-MODERADA (1ª linha): VANCOMICINA 125 mg VO 6/6h × 10d OU FIDAXOMICINA",
"ALTERNATIVA: METRONIDAZOL 500 mg VO 8/8h × 10d (apenas em recursos limitados)",
"RECORRENTE: vancomicina prolongada ou pulsada, fidaxomicina, transplante microbiota fecal",

"⚠ PÉ DIABÉTICO INFECTADO (leve ambulatorial)",
"1ª LINHA: CEFALEXINA 500 mg 6/6h × 7-14d (sem osteomielite, sem isquemia)",
"COM ANAERÓBIO SUSPEITO: AMOX+CLAVULANATO 875/125 12/12h × 7-14d",
"MRSA SUSPEITO: + SMX-TMP ou clindamicina; ou doxiciclina",
"MODERADO-GRAVE: hospitalar — ampi+sulb ou pipera+tazo ± vanco",

"⚠ TB pulmonar",
"⚠ ESQUEMA RHZE (rifampicina + isoniazida + pirazinamida + etambutol) — fase intensiva 2 meses; RH × 4 meses fase manutenção (PCDT-MS TB)",
"⚠ TRATAMENTO SUPERVISIONADO (TDO) na UBS — não dispensar para casa",

"⚠ HANSENÍASE",
"PB (paucibacilar): RIFAMPICINA + DAPSONA × 6 meses (PCDT-MS)",
"MB (multibacilar): RIFAMPICINA + DAPSONA + CLOFAZIMINA × 12 meses",
],
diretriz:"Sanford Guide 2025; PCDT-MS IST 2024; PCDT-MS TB/Hanseníase/Lepto; IDSA; Diretrizes Brasileiras"
},

);
