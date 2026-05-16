/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — TABELAS COMPARATIVAS
   Vasopressores / ATBs por foco / Anticoagulantes / Opioides
   =========================================================== */

PATOLOGIAS.push(

/* ============== VASOPRESSORES ============== */
{id:"tab-vasopressores", sis:"docs", grav:"alta",
nome:"Tabela — Vasopressores e Inotrópicos",
sin:["vasopressores","tabela vasopressor","drogas vasoativas"],
def:"Comparação prática das drogas vasoativas usadas em emergência. Cada droga tem perfil receptor único — escolha conforme contexto hemodinâmico.",

exames:[
"AVALIAÇÃO HEMODINÂMICA para escolha:",
"- Choque distributivo (sepse, anafilaxia): RVS baixa → NORADRENALINA 1ª linha",
"- Choque cardiogênico: débito baixo → DOBUTAMINA (se PAS adequada) ou NORADRENALINA+DOBUTA",
"- Choque hipovolêmico: PRIMEIRO volume; vasopressor temporário enquanto reponhe",
"- Bradicardia sintomática: ATROPINA → DOPAMINA → ADRENALINA",
],

rx:[
{etapa:"escala", d:"NORADRENALINA",do:"0,05–2 mcg/kg/min IV BIC. Iniciar 0,1 mcg/kg/min, titular 0,05 cada 5-10 min",via:"IV",o:"RECEPTORES: α1 forte + β1 leve. EFEITO: vasoconstrição (↑RVS, ↑PA) + leve aumento DC. INDICAÇÃO: 1ª LINHA em choque séptico/distributivo. Meta PAM ≥65. Pode ser periférico por 6h. DILUIÇÃO USUAL: 16 mg em 250 mL SG = 64 mcg/mL."},
{etapa:"escala", d:"ADRENALINA",do:"PCR: 1 mg IV cada 3-5 min. BIC: 0,05-1 mcg/kg/min",via:"IV",o:"RECEPTORES: α1 + β1 + β2 (todos potentes). EFEITO: vasoconstrição + inotropismo + cronotropismo + broncodilatação. INDICAÇÕES: PCR, anafilaxia (IM 0,3-0,5 mg), choque refratário (IV BIC), bradicardia refratária à atropina. ATENÇÃO: arritmogênica, ↑demanda O2 miocárdica."},
{etapa:"escala", d:"VASOPRESSINA",do:"0,03 U/min IV BIC FIXA (não titular)",via:"IV",o:"RECEPTORES: V1 vascular + V2 renal (não-adrenérgica). EFEITO: vasoconstrição PURA, sem efeito cardíaco. INDICAÇÃO: ADICIONAR à noradrenalina quando NE >0,25-0,5 mcg/kg/min para reduzir dose. NÃO usar isolada. Vantagem em deficiência relativa de vasopressina endógena (sepse)."},
{etapa:"escala", d:"DOBUTAMINA",do:"2,5-20 mcg/kg/min IV BIC",via:"IV",o:"RECEPTORES: β1 forte + β2 leve (mínimo α). EFEITO: ↑contratilidade + ↑DC + leve vasodilatação. INDICAÇÃO: disfunção miocárdica com BAIXO DÉBITO (choque cardiogênico, sepse com disfunção miocárdica). NÃO usar isolada se hipotensão (pode ↓PA). Geralmente associada a NE em sepse."},
{etapa:"escala", d:"DOPAMINA",do:"2-20 mcg/kg/min IV BIC",via:"IV",o:"RECEPTORES dose-dependentes: 2-5 (D1 renal — desuso), 5-10 (β1 inotropismo), >10 (α1 vasoconstrição). HOJE: 2ª linha, evidência menos favorável (mais arritmia, mortalidade vs NE — SOAP II trial). Reservar para: bradicardia sintomática refratária à atropina."},
{etapa:"escala", d:"MILRINONA",do:"50 mcg/kg em 10 min (bolus) + 0,375-0,75 mcg/kg/min BIC",via:"IV",o:"INIBIDOR fosfodiesterase III. EFEITO: ↑contratilidade + VASODILATADOR (não-adrenérgico). INDICAÇÃO: IC avançada refratária a β-agonistas (down-regulation receptor β em IC crônica). Causa hipotensão — frequentemente associada a NE. UTI/cardiologia."},
{etapa:"escala", d:"FENILEFRINA",do:"40-180 mcg/min IV BIC",via:"IV",o:"RECEPTOR: α1 PURO. EFEITO: vasoconstrição sem ação cardíaca. INDICAÇÃO: hipotensão pós-anestesia, choque distributivo onde taquicardia é problema. PODE causar bradicardia reflexa (vagal por ↑PA). Útil em hipotensão sob propofol/sevoflurano."},
{etapa:"alta", d:"ATROPINA (não vasoativa mas relacionada)",do:"0,5-1 mg IV cada 3-5 min (máx 3 mg)",via:"IV",o:"ANTICOLINÉRGICO. EFEITO: ↑FC por bloqueio vagal. INDICAÇÃO: 1ª linha em bradicardia SINTOMÁTICA. Dose <0,5 mg pode causar bradicardia paradoxal — não fazer."},
],

alertas:[
{t:"crit",x:"NORADRENALINA é 1ª LINHA em CHOQUE DISTRIBUTIVO (sepse, anafilaxia refratária). Pode ser iniciada em ACESSO PERIFÉRICO por até 6h se central indisponível (evidência atual)."},
{t:"crit",x:"DOPAMINA: evidência SOAP II mostrou MAIOR MORTALIDADE em choque vs noradrenalina. NÃO usar em sepse. Reservar para bradicardia sintomática."},
{t:"warn",x:"DOBUTAMINA pode reduzir PA (β2 vasodilator). Em hipotenso, associar SEMPRE com noradrenalina."},
{t:"warn",x:"DESMAME: reduzir vasopressor LENTAMENTE quando hemodinamicamente estável. Reduzir NE 0,05 mcg/kg/min cada 30-60 min se PAM mantida."},
{t:"info",x:"EXTRAVASAMENTO de NE: aplicar FENTOLAMINA 5-10 mg em 10 mL SF infiltrar localmente (antídoto)."},
],

fisio:"Receptores adrenérgicos: α1 (vasoconstrição), β1 (cardíaco — inotropismo + cronotropismo), β2 (vasodilatação + broncodilatação). Receptor V1 (vascular) e V2 (renal) para vasopressina. PDE-III (fosfodiesterase) para milrinona — aumenta cAMP independente de receptor. Em sepse, ocorre downregulation de β-receptores → resistência relativa às catecolaminas → benefício de vasopressina + corticoide.",

mec:[
{d:"Esquema rápido por receptor",x:"α1: PA↑ (NE, fenilefrina) | β1: DC↑ (dobuta, isoprenalina) | β2: vasodilatação (dobuta secundário) | V1: PA↑ não-adrenérgico (vasopressina) | M: anticolinérgico (atropina) | PDE-III: inotropismo + vasodilatação (milrinona)"},
],

diretriz:"Surviving Sepsis Campaign 2021. ACC/AHA Cardiogenic Shock 2022. SBC Brasil — Diretriz Choque Cardiogênico.",
fluxo:null,
calcs:[],
},

/* ============== ATBs POR FOCO ============== */
{id:"tab-atbs", sis:"docs", grav:"media",
nome:"Tabela — Antibioticoterapia Empírica por Foco",
sin:["atb empírico","tabela antibiótico","escolha atb"],
def:"Guia rápido de cobertura ATB empírica conforme foco suspeito. SEMPRE adaptar à epidemiologia local (resistência ESBL, MRSA) e antibiograma prévio.",

exames:[
"REGRAS GERAIS:",
"- Coletar HMC + cultura do foco SEMPRE antes da 1ª dose ATB (mas NÃO atrasar ATB >45 min)",
"- Em sepse: ATB em ≤1h do reconhecimento",
"- Step-down para VO ou descalonamento conforme antibiograma + melhora clínica em 48-72h",
"- Considerar: alergia, função renal/hepática, gestação, MR conhecida (ESBL, MRSA, ICU)",
],

rx:[
{etapa:"atb", d:"PNEUMONIA COMUNITÁRIA (PAC)",do:"Ambulatorial: Amoxicilina 1g VO 8/8h × 7d. CURB ≥2: Ceftriaxona 1-2g/d + Claritromicina 500mg 12/12h (ou Azitromicina). UTI: Ceftriaxona + Azitromicina (cobrir atípicos)",via:"VO/IV",o:"Cobre Strep pneumoniae + atípicos. Tempo 5-7 dias na maioria. Em PAC grave: cobertura ampliada conforme risco MR (Pseudomonas em DPOC, broncoaspiração)."},
{etapa:"atb", d:"PNEUMONIA HOSPITALAR (PAV/PHA)",do:"Piperacilina-tazobactam 4,5g 6/6h OU Cefepime 2g 8/8h + Vancomicina 15-20 mg/kg 12/12h se risco MRSA",via:"IV",o:"Cobertura Pseudomonas + MRSA conforme fatores de risco (ATB recente, internação, VM, MR conhecida). 7-8 dias geralmente suficiente."},
{etapa:"atb", d:"ITU BAIXA NÃO-COMPLICADA",do:"Nitrofurantoína 100mg 6/6h × 5d OU Fosfomicina 3g dose única OU SMX-TMP × 3d",via:"VO",o:"Mulher não-gestante. Evitar quinolonas como 1ª linha. Gestante: cefalexina ou amoxi-clav."},
{etapa:"atb", d:"PIELONEFRITE",do:"Ambulatorial: Ciprofloxacino 500mg 12/12h × 7d. Internação: Ceftriaxona 1-2g/d. Sepse/MR: Piperacilina-tazobactam ou Carbapenem",via:"VO/IV",o:"7-14 dias total. Step-down VO em 48-72h conforme antibiograma. Investigar obstrução."},
{etapa:"atb", d:"INFECÇÃO ABDOMINAL/BILIAR",do:"Comunitária leve-moderada: Ceftriaxona + Metronidazol 500mg 8/8h. Grave/MR: Piperacilina-tazobactam ou Meropenem + Vancomicina se Enterococo suspeito",via:"IV",o:"Cobrir Gram- entéricos + anaeróbios. Cirurgia (foco de controle) é tão crítica quanto ATB."},
{etapa:"atb", d:"MENINGITE BACTERIANA (adulto)",do:"Ceftriaxona 2g 12/12h + Vancomicina 15-20 mg/kg 12/12h + Dexametasona 10mg 6/6h × 4d. >50 anos OU imunossuprimido: + Ampicilina 2g 4/4h (Listeria)",via:"IV",o:"Cobertura: pneumococo (vanco se R), meningococo, H. influenzae, Listeria (idoso). Dexametasona ANTES ou COM 1ª dose ATB. Aciclovir se suspeita encefalite."},
{etapa:"atb", d:"INFECÇÃO PELE/PARTES MOLES",do:"Celulite/erisipela: Cefalexina 500mg 6/6h VO ou Cefazolina 1-2g 8/8h IV. Suspeita MRSA: Clindamicina 600mg 8/8h ou Vancomicina. Fasceíte: Piperacilina-tazobactam + Clindamicina + Vancomicina + CIRURGIA",via:"VO/IV",o:"Erisipela: Strep predominante (cefalexina). Celulite profunda/abscesso: cobrir S. aureus. Fasceíte: urgência cirúrgica."},
{etapa:"atb", d:"ENDOCARDITE (empírica)",do:"Vancomicina 15-20 mg/kg 12/12h + Ceftriaxona 2g 12/12h. Válvula protética: + Gentamicina 1 mg/kg 8/8h + Rifampicina 300mg 8/8h",via:"IV",o:"Adaptar ao isolado em 48-72h. 4-6 semanas total. Cirurgia precoce em complicações."},
{etapa:"atb", d:"NEUTROPENIA FEBRIL",do:"Cefepime 2g 8/8h OU Piperacilina-tazobactam 4,5g 6/6h. Instável: + Vancomicina se mucosite/CVC/MRSA prévia",via:"IV",o:"Em <1h da febre. Cobrir Pseudomonas. Adicionar antifúngico empírico se febre persistente >4-7 dias."},
{etapa:"atb", d:"SEPSE FOCO DESCONHECIDO",do:"Comunidade: Ceftriaxona 2g/d ± Vancomicina. Hospitalar: Piperacilina-tazobactam + Vancomicina. MR/UTI: Meropenem + Vancomicina ± Antifúngico",via:"IV",o:"Cobertura mais ampla. Buscar foco IMEDIATAMENTE (foco é tão crítico quanto ATB). Descalonamento em 48-72h."},
{etapa:"atb", d:"FARINGITE ESTREPTOCÓCICA",do:"Penicilina G benzatina 1.200.000 UI IM dose única (>27 kg) OU Amoxicilina 500mg 8/8h × 10 dias",via:"IM/VO",o:"Centor/McIsaac ≥3 — considerar tratar. Crianças <27 kg: PNC G benzatina 600.000 UI. Alérgico: Azitromicina."},
{etapa:"atb", d:"SINUSITE BACTERIANA",do:"Amoxicilina-clavulanato 875/125mg 12/12h × 5-7 dias. Alérgico: Doxiciclina 100mg 12/12h",via:"VO",o:"Suspeitar bacteriana: >10 dias sintomas, piora após melhora, ou ≥3 dias sintomas graves. Maioria viral."},
],

alertas:[
{t:"crit",x:"SEPSE: ATB em ≤1h. Cada hora de atraso ↑mortalidade ~7,6%. Coletar culturas SEM atrasar ATB."},
{t:"warn",x:"ALERGIA À PENICILINA: maioria das alergias 'reportadas' não é IgE-mediada. Risco de cruzada cefalo <1%. Se anafilaxia documentada → evitar β-lactâmicos."},
{t:"warn",x:"ESBL+: usar CARBAPENEM (ceftriaxona NÃO cobre). Hospitalar com risco MR conhecido."},
{t:"info",x:"DESCALONAMENTO em 48-72h é OBRIGATÓRIO conforme cultura + antibiograma + evolução. Reduz resistência e custos."},
],

fisio:"Princípios da ATB empírica: (1) cobrir patógenos mais prováveis pelo foco; (2) ajustar conforme epidemiologia local de resistência; (3) considerar fatores do paciente (imune, gestante, alergia, função renal); (4) começar antes da cultura mas coletar primeiro; (5) descalonar conforme cultura.",

mec:[
{d:"β-lactâmicos",x:"Inibem PBPs (transpeptidases) → bloqueia síntese parede celular bacteriana. Sinérgicos com aminoglicosídeos."},
{d:"Glicopeptídeos (vanco)",x:"Liga-se a D-Ala-D-Ala impedindo cross-linking parede Gram+. Não atravessa membrana Gram-."},
{d:"Macrolídeos",x:"Liga 50S ribossomal → bloqueia síntese proteica. Cobertura intracelular (atípicos)."},
{d:"Quinolonas",x:"Inibem DNA-girase + topoisomerase IV. Boa penetração tecidual. Risco ruptura tendínea."},
{d:"Aminoglicosídeos",x:"Liga 30S → erros na síntese proteica. Bactericida concentração-dependente. Nefro/ototoxicidade."},
],

diretriz:"IDSA Guidelines (diversos). PCDT MS. Sociedades brasileiras (SBI, SBP, SBU).",
fluxo:null,
calcs:[],
},

/* ============== ANTICOAGULANTES ============== */
{id:"tab-anticoag", sis:"docs", grav:"alta",
nome:"Tabela — Anticoagulantes e Reversão",
sin:["anticoagulantes","reversão","heparina","varfarina","DOAC"],
def:"Drogas anticoagulantes em emergência: indicações, monitorização, reversão. Inclui agentes específicos (idarucizumabe, andexanet) e medidas não-específicas (PCC, vit K, PFC).",

exames:[
"AVALIAÇÃO PRÉ-ANTICOAGULAÇÃO:",
"- Função renal (ajuste de DOACs e HBPM)",
"- Coagulograma basal",
"- Plaquetas (HIT)",
"- Risco hemorrágico (HAS-BLED em FA)",
"- Comorbidades + medicações concomitantes (interações)",
],

rx:[
{etapa:"escala", d:"HEPARINA NÃO-FRACIONADA (HNF)",do:"Bolus 60-80 UI/kg + BIC 14-18 UI/kg/h. Alvo TTPA 1,5-2,5× controle (60-90 s)",via:"IV",o:"INDICAÇÃO: TEP/TVP, SCA, ponte peri-procedimento, IRC grave. MEIA-VIDA: 1-2h. REVERSÃO: SUSPENDER (curta meia-vida) ± PROTAMINA 1 mg para cada 100 UI infundidas última hora (máx 50 mg). Monitorizar TTPA 6/6h."},
{etapa:"escala", d:"HBPM (Enoxaparina)",do:"Profilática: 40 mg SC/d. Plena: 1 mg/kg 12/12h SC (ou 1,5 mg/kg/d)",via:"SC",o:"INDICAÇÃO: TEV (profilaxia + tratamento), SCA, FA peri-procedimento, gestação. AJUSTE em IRC (ClCr <30: reduzir dose ou usar HNF). MEIA-VIDA: 4-6h. NÃO monitora rotina (exceto obeso, IRC, gestante: anti-Xa). REVERSÃO: Protamina (parcial — 1 mg/1 mg enoxa última 8h; eficácia ~60%)."},
{etapa:"escala", d:"VARFARINA",do:"Iniciar 5 mg/d, ajustar conforme INR (alvo 2-3, ou 2,5-3,5 em válvula mitral)",via:"VO",o:"INDICAÇÃO: FA crônica, válvula mecânica, SAAF, TEV recorrente. INTERAÇÕES MUITAS (AAS, AINE, ATB, álcool). REVERSÃO: VIT K 5-10 mg VO/IV (24h efeito) + PCC 25-50 UI/kg IV se sangramento grave (efeito 15 min) OU PFC 10-15 mL/kg (alternativa)."},
{etapa:"escala", d:"DABIGATRANA (Pradaxa)",do:"110 ou 150 mg VO 12/12h",via:"VO",o:"INIBIDOR DIRETO de TROMBINA. INDICAÇÃO: FA não-valvar, TEV. AJUSTE em IRC (ClCr <30: 110 mg ou evitar). REVERSÃO ESPECÍFICA: IDARUCIZUMABE 5 g IV (Praxbind) — reverte em min. Alternativa se indisponível: PCC 50 UI/kg + hemodiálise."},
{etapa:"escala", d:"RIVAROXABANA (Xarelto)",do:"FA: 20 mg/d (15 se IRC). TEV: 15 mg 12/12h × 21d → 20 mg/d. Ortopedia: 10 mg/d",via:"VO",o:"INIBIDOR DIRETO Xa. AJUSTE em IRC (evitar se ClCr <15). Tomar com alimentação (doses ≥15 mg). REVERSÃO ESPECÍFICA: ANDEXANET ALFA (Andexxa) — caro/raro. Alternativa: PCC 4 fatores 50 UI/kg IV (off-label, evidência crescente)."},
{etapa:"escala", d:"APIXABANA (Eliquis)",do:"FA: 5 mg 12/12h (2,5 se 2 de: ≥80a, ≤60kg, Cr≥1,5). TEV: 10 mg 12/12h × 7d → 5 mg 12/12h",via:"VO",o:"INIBIDOR DIRETO Xa. Menor sangramento que varfarina. Pode em IRC moderada. REVERSÃO: ANDEXANET ALFA ou PCC 50 UI/kg."},
{etapa:"escala", d:"EDOXABANA (Lixiana)",do:"60 mg/d (30 se IRC, peso ≤60kg, uso de inibidor P-gp)",via:"VO",o:"INIBIDOR DIRETO Xa. 1ª dose após pelo menos 5 dias de heparina em TEV. Mesma reversão dos outros Xa."},
{etapa:"escala", d:"FONDAPARINUX (Arixtra)",do:"7,5 mg/d SC (5 se <50kg, 10 se >100kg)",via:"SC",o:"INIBIDOR seletivo Xa. INDICAÇÃO: TEV, SCA, alternativa em HIT. MEIA-VIDA LONGA (~17h). NÃO TEM REVERSÃO específica. Suspender + suporte (PCC parcial off-label)."},
{etapa:"adj", d:"PROTAMINA",do:"1 mg para cada 100 UI HNF da última hora (máx 50 mg) IV lento",via:"IV",o:"REVERTE HEPARINA: HNF completamente, HBPM parcialmente. Risco anafilaxia (especialmente pacientes que usam insulina NPH). Infundir LENTAMENTE."},
{etapa:"adj", d:"VITAMINA K (fitomenadiona)",do:"5-10 mg VO (preferencial) ou IV lento. Em sangramento: 10 mg IV",via:"VO/IV",o:"REVERTE VARFARINA em 12-24h. NÃO uso emergencial. Combina com PCC ou PFC em sangramento grave."},
{etapa:"adj", d:"CONCENTRADO COMPLEXO PROTROMBÍNICO (PCC)",do:"25-50 UI/kg IV (4 fatores: II, VII, IX, X)",via:"IV",o:"REVERSÃO de varfarina + Xa-inibidores. Efeito em 15 min. Preferível a PFC (menor volume, mais rápido). Risco: trombose. Dose conforme INR."},
{etapa:"adj", d:"IDARUCIZUMABE (Praxbind)",do:"5 g IV (2 frascos × 2,5 g)",via:"IV",o:"ANTÍDOTO ESPECÍFICO da DABIGATRANA. Anticorpo monoclonal — neutraliza em min. Indicação: sangramento grave + cirurgia urgente."},
{etapa:"adj", d:"PFC (plasma fresco congelado)",do:"10-15 mL/kg IV (1 unidade = ~200-250 mL)",via:"IV",o:"Reposição GERAL de fatores. Alternativa quando PCC não disponível. DESVANTAGEM: grande volume, demora (descongelar), risco TRALI."},
],

alertas:[
{t:"crit",x:"HEMORRAGIA GRAVE em paciente anticoagulado: SUSPENDER droga + REVERTER + CONTROLE LOCAL (sutura, tampão, endoscopia, embolização) + transfundir se Hb<7. PCC é preferível a PFC (rápido, menor volume)."},
{t:"crit",x:"HIT (trombocitopenia induzida por heparina): trombose paradoxal! Suspender TODA heparina, iniciar ALTERNATIVO (fondaparinux, argatroban). NÃO usar varfarina sem ponte (risco gangrena venosa)."},
{t:"warn",x:"DOACs em IRC: cada um tem corte diferente. Apixabana tolera melhor IRC (~15% renal). Dabigatrana é mais renal (~80% renal — evitar IRC grave)."},
{t:"warn",x:"VARFARINA tem >50 interações importantes. Ao iniciar/parar qualquer medicação, reavaliar INR em 5-7 dias."},
{t:"info",x:"DOAC vs Varfarina: DOACs têm MENOR sangramento intracraniano + sem monitorização rotineira. Não usar em: válvula mecânica, SAAF triplo-positivo, IRC dialítica (avaliar)."},
],

fisio:"Cascata: via intrínseca (XII→XI→IX) + extrínseca (VII) → comum (X→II→I/fibrina). HNF e HBPM ativam antitrombina (inativa Xa e IIa). DOACs inibem direto (dabigatrana → IIa; -xabanas → Xa). Varfarina antagoniza vitamina K (precisa para II, VII, IX, X + prot C/S).",

mec:[],
diretriz:"ACC/AHA Atrial Fibrillation 2023. ESC Pulmonary Embolism 2019. CHEST Antithrombotic 2021.",
fluxo:null,
calcs:[],
},

/* ============== OPIOIDES ============== */
{id:"tab-opioides", sis:"docs", grav:"media",
nome:"Tabela — Opioides (potência, início, duração)",
sin:["opioides tabela","morfina fentanil","equipotência"],
def:"Comparação de opioides usados em emergência: potência relativa, início, duração, indicações, particularidades. Para conversão precisa, ver calculadora de equipotência.",

exames:[
"PRINCÍPIOS:",
"- TITULAR sempre — não 'dose padrão única'",
"- COMEÇAR PELA METADE em idoso, IR/IH, obeso (peso ideal), opioide-naive",
"- ABORDAGEM MULTIMODAL: combinar com paracetamol/dipirona/AINE reduz dose",
"- REAVALIAR em 15-30 min após qualquer dose IV",
"- NALOXONA pronta em todos os casos",
],

rx:[
{etapa:"intensa", d:"MORFINA",do:"IV: 2-5 mg titular cada 5-10 min. VO: 10-30 mg 4/4h. SC: idem IV",via:"IV/VO/SC",o:"POTÊNCIA: 1× (referência). INÍCIO IV: 5-10 min. PICO: 20 min. DURAÇÃO: 3-4h. METABOLISMO: hepático (glucuronidação → M6G ativo). ELIMINAÇÃO: renal (cuidado IRC — acúmulo). EFEITOS: libera histamina (broncoespasmo, ↓PA), constipação. INDICAÇÃO: dor intensa aguda, padrão-ouro emergência."},
{etapa:"intensa", d:"FENTANIL",do:"IV: 25-50 mcg cada 5-10 min (1 mcg/kg). BIC: 0,5-2 mcg/kg/h. Transdérmico: 12-100 mcg/h cada 72h",via:"IV/transd.",o:"POTÊNCIA: 100× morfina. INÍCIO IV: 1-2 min. PICO: 5 min. DURAÇÃO: 30-60 min (curta!). SEM liberação histamínica (preferir em hipotenso, asma, anafilaxia). LIPOFÍLICO (acúmulo em uso prolongado). Útil em procedimento + dor moderada-intensa."},
{etapa:"mod", d:"TRAMADOL",do:"IV: 50-100 mg lento (diluído) cada 6-8h (máx 400 mg/d). VO: idem",via:"IV/VO",o:"POTÊNCIA: ~0,1× morfina. DUPLA AÇÃO: μ-agonista FRACO + inibe recaptação 5HT/NE (como antidepressivo). INDICAÇÃO: dor moderada, especialmente neuropática + componente nociceptivo. RISCOS: ↓limiar convulsivo, síndrome serotoninérgica (ISRS, IMAO). Náusea (30%). Diluir IV — bolus rápido causa náusea grave."},
{etapa:"mod", d:"CODEÍNA",do:"30-60 mg VO 4-6/4-6h (geralmente em associação paracetamol)",via:"VO",o:"POTÊNCIA: ~0,1× morfina. PRÓ-DROGA: convertida em morfina via CYP2D6 (variabilidade — 'metabolizadores ultra-rápidos' overdose, 'metabolizadores lentos' não respondem). CONTRAINDICADO em <12 anos (mortes pediátricas) + amamentação."},
{etapa:"intensa", d:"OXICODONA",do:"VO: 5-10 mg 4-6/4-6h (LP 10-40 mg 12/12h)",via:"VO",o:"POTÊNCIA: 1,5-2× morfina VO. BIODISPONIBILIDADE BOA (60-87%). DURAÇÃO LIBERAÇÃO IMEDIATA: 4h. DURAÇÃO LIBERAÇÃO PROLONGADA: 12h. INDICAÇÃO: dor crônica oncológica, pós-op. Risco abuso (formulação LP pode ser triturada — restrição em alguns países)."},
{etapa:"intensa", d:"METADONA",do:"VO: 2,5-10 mg 8/8h (mas conversão NÃO é linear)",via:"VO",o:"POTÊNCIA: VARIÁVEL (5-10× morfina em uso crônico). MEIA-VIDA LONGA (15-60h — variável!). MÚLTIPLOS RECEPTORES: μ-agonista + antagonista NMDA + inibe recaptação 5HT/NE. INDICAÇÃO: dor refratária, dor neuropática, substituição em opioidedependência. RISCO: QT longo. NÃO usar em emergência sem experiência."},
{etapa:"intensa", d:"HIDROMORFONA",do:"IV: 0,2-1 mg cada 4-6h. VO: 2-4 mg cada 4-6h",via:"IV/VO",o:"POTÊNCIA: 5-7× morfina IV. MEIA-VIDA: 2-3h. METABOLISMO: hepático (sem metabólitos ativos como morfina M6G). PREFERIDO em IRC (sem acúmulo de M6G). Indisponível em muitas instituições BR."},
{etapa:"intensa", d:"REMIFENTANIL",do:"BIC: 0,025-2 mcg/kg/min",via:"IV",o:"POTÊNCIA: 100× morfina. ULTRA-CURTA: hidrolisado por esterases plasmáticas → meia-vida 3-5 min independente da função hepática/renal. INDICAÇÃO: anestesia + sedação consciente em UTI. NÃO usa para analgesia pós-op (curta demais)."},
{etapa:"alta", d:"NALOXONA — ANTÍDOTO",do:"0,04-0,4 mg IV cada 2-3 min (titular para reverter depressão respiratória SEM acordar totalmente)",via:"IV/IM/SC/IN",o:"ANTAGONISTA μ-opioide PURO. INÍCIO: 1-2 min. DURAÇÃO: 30-60 min (CURTA — opioide de longa ação pode causar 're-narcose' → manter monitorização ou BIC). DOSES ALTAS em usuário crônico = síndrome de abstinência aguda + dor. EM EXTRA-HOSPITALAR: IM/IN preferível."},
],

alertas:[
{t:"crit",x:"DEPRESSÃO RESPIRATÓRIA por opioide: FR <8, SpO₂ caindo. Ventilação assistida + NALOXONA 0,04-0,1 mg IV titular. Em PCR: doses maiores."},
{t:"crit",x:"OPIOIDE EM IDOSO / IRC / IH / OBESIDADE / OPIOIDE-NAIVE: começar com METADE da dose padrão. Monitorizar SpO₂ + FR."},
{t:"warn",x:"TRAMADOL + ISRS = risco SÍNDROME SEROTONINÉRGICA. Tramadol + tramadol overdose ou tramadol + outros pró-convulsivantes = convulsão."},
{t:"warn",x:"METADONA = QT longo. ECG basal. Cuidado com cetoconazol, claritromicina (CYP3A4), inibidores."},
{t:"info",x:"TOLERÂNCIA CRUZADA INCOMPLETA: na rotação de opioide, REDUZIR 25-50% da dose calculada de equipotência. Metadona é EXCEÇÃO (conversão não-linear; experiência)."},
],

fisio:"Receptores opioides: μ (mu — analgesia, depressão respiratória, euforia), κ (kappa — analgesia espinal, disforia), δ (delta). Todos opioides de uso clínico agem principalmente no μ. Mecanismo: hiperpolarização neuronal (↑K, ↓Ca) → ↓liberação de neurotransmissores (subst P, glutamato) no corno dorsal + ativação de vias descendentes inibitórias.",

mec:[
{d:"Opioides μ-agonistas",x:"Hiperpolarização neuronal + redução da liberação de neurotransmissores excitatórios = analgesia. Em centros respiratórios (tronco): depressão respiratória dose-dependente. Sistema límbico: euforia (potencial abuso)."},
{d:"Naloxona",x:"Antagonista competitivo μ puro — desloca opioide. Curta ação (30-60 min) → re-narcose possível se opioide longa ação não eliminado."},
],

diretriz:"WHO Pain Ladder. ACEP Pain Management 2017. ANS Brasil Política de Opioides.",
fluxo:null,
calcs:[],
},

);
