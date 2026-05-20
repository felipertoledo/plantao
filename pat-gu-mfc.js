/* ===========================================================
   VOVÔMINIC DOUTÔ — pat/gu-mfc.js
   GU MFC — HBP, DRC manejo conservador, disfunção erétil, climatério
   Sistema: gu
   Fonte: SBN 2024 KDIGO 2024, SBU 2023, IMS/SBC 2023, TMFC 2ª ed
   =========================================================== */

PATOLOGIAS.push(

/* ============================================================
   1. HBP — Hiperplasia Prostática Benigna
   ============================================================ */
{
id:"hbp", contexto:["ubs"], nome:"Hiperplasia Prostática Benigna (HBP) — Manejo MFC",
sis:"gu", grav:"baixa",
cid:"N40", ciap:"Y85",
sin:["HBP","hiperplasia prostática","prostatismo","sintomas trato urinário inferior","STUI","LUTS"],
def:"Aumento volumétrico benigno da próstata, frequente em homens >50 anos, causando sintomas do trato urinário inferior (STUI/LUTS) por obstrução infravesical. Diagnóstico clínico + IPSS + exame de próstata + PSA (se discussão de risco para CA próstata) + USG vias urinárias se complicações.",
intro:"HBP é uma das queixas mais comuns em homem >50 anos. MFC tem papel central: avaliar STUI com IPSS, excluir diferenciais (CA próstata, prostatite, bexiga neurogênica), iniciar tratamento medicamentoso, encaminhar urologia em refratariedade ou complicações. CHAVE: maioria pode ser manejada no MFC com alfa-bloqueador + inibidor 5-alfa-redutase. O grande erro: pedir PSA rotineiramente em todo idoso sem decisão compartilhada (P4).",
fisio:"Aumento estromal e epitelial dependente de DHT (di-hidrotestosterona, ação da 5α-redutase) → compressão da uretra prostática → obstrução infravesical. Resposta vesical: hipertrofia detrusora compensatória, depois descompensação (bexiga atônica), refluxo vesicoureteral, hidronefrose. Componentes do STUI: estático (volume prostático), dinâmico (tônus alfa-adrenérgico do colo vesical), e vesical (instabilidade detrusora secundária).",
apresentacao:"Homem ≥50a (prevalência ~50% em 60a, ~80% em 80a) com STUI progressivo. Avaliar IPSS (escore validado de 7 itens — leve 0-7, moderado 8-19, grave 20-35) + qualidade de vida. Exame toque retal: próstata aumentada, lisa, fibroelástica, indolor (próstata endurecida/nodular → suspeitar CA, biópsia).",
sintomas:[
"STUI de ARMAZENAMENTO: frequência, urgência, noctúria (acordar para urinar — sintoma mais incômodo), incontinência de urgência",
"STUI de ESVAZIAMENTO: jato fraco, hesitação, esforço miccional, jato intermitente, gotejamento terminal",
"STUI PÓS-MICCIONAIS: sensação de esvaziamento incompleto, gotejamento pós-miccional",
"Retenção urinária aguda (urgência urológica): impossibilidade de urinar com bexiga distendida e dolorosa",
"Complicações tardias: ITU recidivante, hematúria, urolitíase vesical, hidronefrose, IRC pós-obstrutiva",
],
profilaxia:"Não há prevenção específica. Mudança de estilo de vida pode melhorar STUI: reduzir cafeína/álcool (especialmente à noite), evitar líquido excessivo 2-3h antes de dormir (noctúria), tratar constipação (compressão extrínseca), atividade física, reduzir peso, vigiar drogas que pioram STUI (anticolinérgicos, descongestionantes, opioides).",
freire:"STUI são fonte de grande sofrimento e estigma — homem evita falar, evita sair de casa por noctúria, esconde da família. Validar como problema legítimo, não 'velhice'. Educar sobre a natureza benigna da HBP (≠ CA próstata) — muitas vezes paciente chega assustado achando que está com câncer. Decisão compartilhada sobre PSA: explicar prós (detecta CA antes), contras (sobrediagnóstico, biópsia, ansiedade). Para retomada da função sexual com tamsulosina: orientar sobre ejaculação retrógrada (efeito comum, não-prejudicial — apenas 'estranho') — evitar abandono medicamentoso por mal-entendido.",
sus_tx:"IPSS leve (0-7): aguardar/orientar mudança de estilo de vida + reavaliar. IPSS moderado-grave (≥8) com incômodo: ALFA-BLOQUEADOR — DOXAZOSINA 2-8 mg HS (UBS) ou tamsulosina 0,4 mg HS (PFPB). Efeito em 1-2 sem. Se próstata grande (>40 cc por USG) ou refratariedade após 3-6 meses: associar FINASTERIDA 5 mg/dia (PFPB) — inibidor 5-alfa-redutase, reduz volume em 6-12 meses, NNT excelente para evitar progressão e necessidade de cirurgia. Tadalafila 5 mg/dia (CEAF/particular) — opção em homens com STUI + disfunção erétil. ENCAMINHAR UROLOGIA se: retenção urinária aguda recorrente, hematúria persistente, urolitíase vesical, ITU recidivante, IRC pós-obstrutiva, próstata grande com refratariedade, PSA alterado, toque retal alterado, paciente jovem (<50a).",
padrao_ouro:"Acrescenta: dutasterida (alternativa a finasterida — CEAF/particular); silodosina (alfa-bloqueador mais seletivo, menos efeito hemodinâmico); fitoterápico Serenoa repens (sem evidência convincente); RTUp (Ressecção Transuretral) ou Holmium-LASER prostatectomia em casos refratários; prostatectomia simples (a céu aberto) em próstatas muito grandes.",
prog:"Curso variável, geralmente lento. ~20% progridem para cirurgia em 10 anos. Tratamento médico bem-conduzido controla sintomas em maioria.",
acomp:"Após início de medicação: reavaliar IPSS em 4-6 semanas (alfa-bloqueador) e em 3-6 meses (finasterida). Estável: semestral-anual. Reavaliar PA (hipotensão postural com alfa-bloqueador), creatinina anual, USG se mudança. PSA conforme decisão compartilhada (não rotina obrigatória).",
p4:"NÃO solicitar PSA em assintomático sem decisão compartilhada — sobrediagnóstico de CA próstata indolente em idoso é fato bem documentado [USPSTF grau C 55-69a, D ≥70a]. NÃO pedir USG vias urinárias rotineiramente — apenas se complicações suspeitas. NÃO indicar Serenoa repens ou outros fitoterápicos como tratamento principal. NÃO indicar cirurgia em paciente que nunca recebeu tratamento medicamentoso adequado. NÃO confundir STUI de HBP com bexiga hiperativa primária — anticolinérgico em homem com HBP pode precipitar retenção urinária.",
alertas:[
{nivel:"crit", txt:"⚠ Retenção urinária AGUDA: bexiga distendida + impossibilidade de urinar + dor suprapúbica = sondagem de alívio IMEDIATA (UBS ou PS), pode tentar drenagem por sondagem vesical de demora 7-10 dias com alfa-bloqueador + nova tentativa miccional ('trial without catheter')."},
{nivel:"warn", txt:"DOXAZOSINA / TAMSULOSINA: hipotensão postural especialmente 1ª dose — orientar tomar à noite, levantar devagar. ⚠ Risco aumentado de QUEDA em idoso. Em cirurgia oftalmológica (catarata): suspender 1-2 sem antes (síndrome de íris flácida intra-operatória). Combina mal com sildenafil/tadalafil (potencializa hipotensão)."},
{nivel:"warn", txt:"FINASTERIDA: reduz PSA em 50% — interpretar com cuidado (dobrar o PSA medido para comparar com pré-tratamento). Efeitos sexuais (libido, ED, ejaculação) em ~5-10% — educar paciente. Ginecomastia em ~1-2%."},
{nivel:"warn", txt:"Toque retal: próstata ENDURECIDA, NODULAR ou IRREGULAR (≠ macia, fibroelástica, simétrica de HBP) = encaminhar urologia para investigação de CA. PSA também elevado é confirmação adicional, mas toque alterado é suficiente para encaminhar."},
{nivel:"warn", txt:"Anticolinérgico (anti-histamínico, antidepressivo tricíclico, oxibutinina, descongestionante nasal) em paciente com HBP = risco de retenção urinária aguda. Cuidado prescritivo."},
{nivel:"info", txt:"PSA: discussão compartilhada com homem 55-69a, considerando expectativa de vida >10 anos, história familiar, expectativas. NÃO indicar em ≥75a (USPSTF D)."},
{nivel:"info", txt:"IPSS pode ser autoaplicado pelo paciente em sala de espera — economiza tempo de consulta. Score validado em português."},
],
diretriz:"[SBU — Diretriz Brasileira de HBP 2023] [EAU 2024 Guidelines on Non-neurogenic Male LUTS incl. BPH] [AUA 2023 Guideline on BPH] [USPSTF 2018 Statement on PSA-Based Screening] [TMFC 2ª ed, cap. 175] [DUNCAN 5ª ed, cap. 92]"
},

/* ============================================================
   2. DRC — Doença Renal Crônica G1-G5 manejo conservador
   ============================================================ */
{
id:"drc-mfc", contexto:["ubs"], nome:"Doença Renal Crônica (DRC) — Manejo Conservador MFC",
sis:"gu", grav:"alta",
cid:"N18", ciap:"U99",
sin:["DRC","IRC","insuficiência renal crônica","CKD","doença renal","nefropatia"],
def:"Alteração estrutural ou funcional dos rins por ≥3 meses, com TFG <60 mL/min/1,73m² OU marcadores de lesão renal (proteinúria, albuminúria, hematúria glomerular, alteração de imagem, biópsia). Classificação KDIGO 2024 por TFG (G1-G5) e categoria de albuminúria (A1-A3).",
intro:"DRC é EPIDÊMICA, frequentemente assintomática até estágios avançados, e fortemente subdiagnosticada. MFC tem papel decisivo: rastrear em paciente de risco (DM, HAS, idoso, HAS familiar, doença CV, glomerulopatia), iniciar manejo conservador (controle PA, controle albuminúria com IECA/BRA, iSGLT2, controle DM, restrições dietéticas seletivas), encaminhar nefrologia em momento certo (geralmente G4 ou G3b com progressão rápida). O grande erro: pedir creatinina sem calcular TFG/eGFR; ou tratar 'creatinina alta isolada' sem albuminúria.",
fisio:"Causas frequentes: diabetes mellitus (~40%), HAS (~25%), glomerulopatias primárias (GN), DRC obstrutiva (HBP, urolitíase), doença policística, drogas nefrotóxicas (AINE crônico, lítio, contraste iodado, aminoglicosídeo). Progressão depende de: controle PA, controle albuminúria, controle glicêmico, peso, dieta, tabagismo. iSGLT2 e ARA-II/ARNI são os pilares para REDUZIR PROGRESSÃO.",
apresentacao:"Maioria dos pacientes em G1-G3a é ASSINTOMÁTICA — diagnóstico em rastreio. Sintomas aparecem em G3b-G5: fadiga, anorexia, náusea, prurido, edema, hipertensão refratária, anemia, distúrbios do sono. Em G5/diálise iminente: uremia franca, dispneia, sintomas neurológicos.",
sintomas:[
"G1-G3a: ASSINTOMÁTICO (TFG ≥45) — diagnóstico laboratorial em rastreio",
"G3b (TFG 30-44): sintomas leves — fadiga, hipertensão de difícil controle",
"G4 (TFG 15-29): anemia, hiperparatireoidismo secundário, acidose metabólica leve, hipertensão refratária, edema, prurido, distúrbios eletrólitos",
"G5 (TFG <15): uremia franca, anorexia, vômitos, encefalopatia, dispneia (acidose, sobrecarga), prurido intenso, peristalse intestinal alterada",
"Sinais de alerta: hematúria glomerular (cilindros hemáticos), albuminúria >300 mg/g, sintomas sistêmicos (suspeita de glomerulonefrite primária)",
],
profilaxia:"PREVENIR PROGRESSÃO é o eixo: (1) Controle PA <130/80 (ideal <125/75 em proteinúricos) com IECA/BRA prioritariamente; (2) IECA/BRA em TODOS pacientes com albuminúria ≥30 mg/g — independente de PA; (3) Controle DM com HbA1c individualizada (geralmente <7-7,5%); (4) iSGLT2 (dapagliflozina/empagliflozina) — REDUZ PROGRESSÃO em DRC com ou sem DM, com benefício mesmo em TFG 25-75 mL/min [DAPA-CKD, EMPA-KIDNEY]; (5) Evitar nefrotóxicos: AINE crônico, contraste iodado sem cuidado, aminoglicosídeo; (6) Cessar tabagismo; (7) Controlar dislipidemia (estatina); (8) Vacinação anual influenza + pneumocócica + COVID + hep B (em diálise).",
freire:"DRC é diagnóstico assustador — paciente pensa 'vou para diálise'. Educar: 'a maioria dos pacientes com DRC NUNCA chega à diálise. O que decide é o controle agora — pressão, diabetes, peso, exercício, dieta. Esta consulta é janela para mudar a história.' Não desvalorize sintomas inespecíficos (fadiga em G3-G4 é real — anemia da DRC, urêmica leve, anorexia subclínica). Manejar adesão ao IECA: efeito sobre creatinina (alta de até 30% inicial é aceitável, NÃO suspender) — não confundir com 'piora renal'. Educar para evitar 'remédios para dor' (AINE) e contrastes iodados sem aviso.",
sus_tx:"Controle PA: IECA (ENALAPRIL 10-20 mg 2× — UBS+PFPB) ou BRA (LOSARTANA 50-100 mg/dia — UBS+PFPB) — escolher um. Adicionar segundo agente se necessário (BCC, tiazídico em TFG ≥30, BB). Controle DM2: METFORMINA dose conforme TFG — até TFG ≥45: 500-1000 mg 12/12h; TFG 30-45: reduzir para máx 500 mg 12/12h + monitorar TFG a cada 3-6 m; ⛔ CONTRAINDICADA em TFG <30 (UBS+PFPB). iSGLT2: DAPAGLIFLOZINA 10 mg/dia (CEAF com PCDT DRC + DM ou DRC isolada com critérios). Estatina: SINVASTATINA 40 mg (UBS+PFPB). Anemia (G3b-G5 com Hb<11): ferro VO (SULFATO FERROSO 40 mg Fe elementar 1×/dia em jejum — UBS) se ferritina <100 ng/mL; EPO via CEAF/nefro se ferritina adequada e Hb<10. Acidose metabólica (G4-G5 com HCO3<22): BICARBONATO DE SÓDIO 0,5-1 mEq/kg/dia VO dividido em 2-3 doses. Hiperfosfatemia (G4-G5): restrição dietética, quelante de fósforo (CARBONATO DE CÁLCIO 500-1500 mg VO com refeições — UBS; ou sevelamer/lantânio em K+ alto — CEAF). Hiperparatireoidismo: vitamina D ativa (CALCITRIOL 0,25-0,5 mcg/dia VO — CEAF).",
padrao_ouro:"Acrescenta: FINERENONA 10-20 mg VO 1×/dia (antagonista mineralocorticoide não-esteroidal — particular) em DRC+DM2 com albuminúria persistente [FIDELIO-DKD]; SEMAGLUTIDA 0,25-1 mg SC 1×/sem (escalonar — particular) em DRC+DM2 [FLOW]; preparação para terapia substitutiva (TSR) em G4 progressivo: avaliação pré-diálise/transplante, fístula AV planejada, vacinação hep B; transplante renal pré-emptivo (antes da diálise) — melhor prognóstico que diálise → transplante.",
prog:"Variável. Bem-controlada (PA, DM, albuminúria, iSGLT2): progressão lenta, muitos não chegam a diálise. Mal-controlada: progressão acelerada. Risco CV em DRC é MAIOR que risco de chegar a diálise (paciente DRC morre mais de DCV que de uremia).",
acomp:"Frequência de consultas por estágio: G1-G2 anual; G3a semestral; G3b trimestral; G4 mensal; G5 quinzenal-semanal ou nefro. Cada consulta: PA, peso, edema, exame físico. Labs: creatinina + albuminúria (RAC) a cada visita; eletrólitos cada 3-6 meses; hemograma + ferritina + TSH cada 6-12 meses; PTH + cálcio + fósforo em G3b-G5. Adesão medicamentosa. Encaminhar nefrologia: TFG <30 (G4-G5), progressão rápida (>3 mL/min/ano), albuminúria persistente >300 mg/g apesar de IECA/BRA dose otimizada, hematúria glomerular, HAS refratária, suspeita de causa primária renal, criança/adolescente com DRC.",
p4:"NÃO interpretar creatinina isolada sem calcular TFG/eGFR — homem 80a com creatinina 1,2 pode ter TFG <60 (creatinina depende de massa muscular). NÃO suspender IECA por elevação aceitável de creatinina (até 30%) — é efeito hemodinâmico esperado, com benefício a longo prazo. NÃO usar AINE em DRC G3-G5. NÃO usar contraste iodado em G3b-G5 sem indicação clara e preparo (hidratação, suspender IECA/diurético/metformina 24-48h, vigilância de NIC). NÃO restringir proteína severamente (<0,6 g/kg) — risco desnutrição; restrição moderada (~0,8 g/kg) em G3b-G5 individualizada. NÃO usar 'detox renal', 'desintoxicante', fitoterápico sem evidência. NÃO repetir USG rim rotineiramente em DRC estabelecida sem mudança clínica.",
alertas:[
{nivel:"crit", txt:"⚠ Hipercalemia (K>5,5) em DRC + IECA/BRA + espironolactona + IRA aguda: emergência potencial — ECG, gluconato cálcio se alterações, insulina+glicose, encaminhar PS se K>6,5 ou ECG alterado. Suspender drogas hipercalemiantes."},
{nivel:"crit", txt:"⚠ AINE em DRC G3-G5 = IRA pré-renal aguda + piora função renal. Educar paciente: NUNCA tomar 'remédio pra dor anti-inflamatório' (diclofenaco, ibuprofeno, nimesulida, etc.). Alternativa: paracetamol/dipirona com cuidado."},
{nivel:"warn", txt:"Metformina em TFG 30-45: reduzir dose (max 1 g/dia). Em TFG <30: SUSPENDER. Em risco de IRA aguda (sepse, jejum, contraste iodado): SUSPENDER temporariamente — risco acidose lática."},
{nivel:"warn", txt:"Contraste iodado em DRC G3b-G5: preparar com hidratação salina IV pré + pós, suspender IECA/diurético/metformina 24-48h antes. Considerar contraste gadolínio (cuidado em G4-G5 — risco NSF/fibrose sistêmica nefrogênica)."},
{nivel:"warn", txt:"Anemia da DRC: investigar diferenciais (ferropriva, deficiência B12, sangramento oculto) antes de atribuir a DRC. Ferritina <100 ou TSAT <20% = ferropriva concomitante — repor ferro. EPO só após ferro adequado e Hb<10."},
{nivel:"info", txt:"Albuminúria (RAC) >30 mg/g é marcador de risco CV E renal — independe de TFG. IECA/BRA indicado em qualquer TFG se albuminúria presente."},
{nivel:"info", txt:"iSGLT2 em DRC: benefício mesmo em TFG 20-25 mL/min (não-iniciar abaixo de 20, mas continuar se já iniciada e tolerada). Reduz progressão, mortalidade CV e internação por IC."},
],
diretriz:"[KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD] [SBN — Diretriz Brasileira de Doença Renal Crônica 2024] [PCDT-MS Doença Renal Crônica] [ESC 2023 CKD CV risk] [TMFC 2ª ed, cap. 173] [DUNCAN 5ª ed, cap. 90]"
},

/* ============================================================
   3. DISFUNÇÃO ERÉTIL — abordagem MFC (marcador de RCV)
   ============================================================ */
{
id:"disfuncao-eretil", contexto:["ubs"], nome:"Disfunção Erétil (DE) — Abordagem MFC e Marcador de RCV",
sis:"gu", grav:"baixa",
cid:"F52.2", ciap:"Y07",
sin:["DE","impotência","disfunção erétil","ED","disfunção sexual masculina"],
def:"Incapacidade persistente (≥3 meses) de obter ou manter ereção suficiente para relação sexual satisfatória. Origem multifatorial: orgânica (vasculogênica, neurogênica, hormonal, anatômica, medicamentosa) e/ou psicogênica.",
intro:"DE é comum (~50% dos homens 40-70 anos), MAS frequentemente silenciada por estigma. MFC: criar abertura para conversa sem julgamento, avaliar componentes orgânicos vs psicogênicos, identificar a doença subjacente (DE é MARCADOR PRECOCE DE RCV — endotélio do pênis afeta antes que coronárias), tratar com iPDE5, articular psicologia se componente psicogênico/relacional. Atenção: DE pode ser primeira manifestação de DAC oculta ou DM.",
fisio:"Ereção depende de: integridade vascular arterial (entrada de sangue) + endotélio (NO → cGMP → relaxamento de cavernoso) + retorno venoso comprometido (mecanismo veno-oclusivo) + estímulos neurológicos (S2-S4 + simpático) + integridade hormonal (testosterona). Falha em qualquer eixo gera DE. Causas: aterosclerose (vasculogênica — mais comum em homem >50a), DM (vasculopatia + neuropatia), HAS, dislipidemia, hipogonadismo, neurológica (pós-cirurgia pélvica, EM, Parkinson), medicamentos (BB, tiazídico, ISRS, finasterida, espironolactona), tabagismo, álcool, depressão, ansiedade de desempenho.",
apresentacao:"Homem (geralmente >40-50a) traz queixa — frequentemente disfarçada, indireta. Caracterizar: tempo de evolução, súbito vs gradual (súbito sugere psicogênico; gradual sugere orgânico), ereção noturna/matinal preservada (sugere psicogênico), libido preservada (psicogênico ou DE de causa não-hormonal), libido baixa (suspeitar hipogonadismo, depressão), problemas conjugais, ansiedade de desempenho.",
sintomas:[
"Dificuldade para iniciar/manter ereção ≥3 meses",
"Ereção parcial ou de curta duração",
"Pode ter componente: súbito (psicogênico, eventos vitais), gradual (orgânico, vascular)",
"Libido conservada vs reduzida (sugere causa diferente — hipogonadismo, depressão, antidepressivo)",
"Ereções noturnas/matinais: preservadas (psicogênico ou início orgânico) vs ausentes (orgânico avançado)",
"Sintomas de hipogonadismo: fadiga, perda massa muscular, perda libido, depressão, oligospermia",
"Sintomas de DAC oculta: angina aos esforços, fadiga, dispneia",
],
profilaxia:"Fatores de risco CV são os mesmos: cessar tabagismo, atividade física aeróbica regular, dieta mediterrânea, controle peso/PA/DM/lipídios. Atividade física isolada melhora DE em meta-análises. Reduzir álcool. Manejar estresse, depressão, ansiedade.",
freire:"Sexualidade masculina carrega cultura de virilidade que torna DE fonte de vergonha, isolamento, negação. Acolher SEM piada, SEM evitação. Comum: 'doutor, doutor... não tenho mais ânimo de homem'. Validar como queixa legítima de saúde. Educar sobre causas (NÃO é fraqueza, NÃO é envelhecimento inevitável). Em homem casado: opção de incluir parceira na conversa (com consentimento) — desmedicalizar e contextualizar. Conectar DE com saúde cardiovascular: 'sua ereção e seu coração funcionam pelo mesmo mecanismo de circulação — tratar a DE é também cuidar do coração'. Em homem com depressão/ansiedade — DE pode ser efeito do antidepressivo (ISRS) ou da própria depressão; ajustar abordagem.",
sus_tx:"Anamnese estruturada (IIEF-5 — score de 5 itens, validado), exame físico (genitália, próstata, sinais de hipogonadismo — testículos pequenos, ginecomastia, redução pelos), avaliar comorbidades. Labs: glicemia jejum, HbA1c, lipidograma, testosterona total (matinal — 7-10h), TSH, PSA. Tratamento de 1ª linha: SILDENAFIL 50 mg (max 100 mg, 1h antes — meia-vida 4h) — VIA PRIVADA (não CBAF, não PFPB usualmente). Tadalafila 5 mg/dia ou 10-20 mg sob demanda (meia-vida 36h) — privada. Tratar causa subjacente: otimizar DM/HAS, trocar BB por outro anti-hipertensivo se possível (BB não-seletivo — propranolol — é o pior para função sexual; NEBIVOLOL 5 mg/dia é o melhor BB para preservar função erétil — particular; alfa-bloqueador como DOXAZOSINA 2-4 mg/dia é amigo da função erétil), trocar tiazídico, trocar ISRS por BUPROPIONA SR 150 mg/dia × 3 dias depois 150 mg 12/12h (não causa DE, pode até melhorar — particular) se possível. Hipogonadismo confirmado (testosterona <300 ng/dL em 2 medidas matinais + sintomas): testosterona — via CEAF com critérios + reumato/endocrino.",
padrao_ouro:"Acrescenta: vardenafil, avanafil; alprostadil (PGE1) intracavernoso ou intra-uretral em refratariedade; bomba a vácuo; prótese peniana em casos refratários (urologia); reposição de testosterona com critérios rigorosos; terapia de casal/psicoterapia em componente psicogênico.",
prog:"Tratável em maioria dos casos. iPDE5 eficaz em ~70% dos pacientes. Falha de iPDE5 pode indicar DE orgânica avançada ou hipogonadismo associado.",
acomp:"Reavaliar em 4-6 semanas após início de iPDE5. Estável: semestral. Vigiar comorbidades (DAC, DM). Em uso crônico de testosterona: PSA + hematócrito + lipidograma cada 6 meses.",
p4:"NÃO indicar fitoterápico/suplemento masculino sem evidência (vai resolver MENOS que iPDE5, custa MAIS, e fitoterápicos podem conter iPDE5 não-declarado — risco com nitrato). NÃO indicar dosagem extensa de hormônios sexuais sem suspeita clínica (estradiol, prolactina, FSH, LH). NÃO indicar Doppler peniano rotineiramente. NÃO indicar testosterona em homem assintomático com testosterona limítrofe — risco CV, eritrocitose. NÃO confundir DE com diminuição fisiológica de libido — são diferentes.",
alertas:[
{nivel:"crit", txt:"⛔ iPDE5 + NITRATO (qualquer formulação) = CONTRAINDICAÇÃO ABSOLUTA — hipotensão grave/fatal. Inclui isossorbida, nitroglicerina, mononitrato — VO, SL, transdérmico. Janela: 24h após sildenafil/vardenafil/avanafil; 48h após tadalafila. EM CASO DE EMERGÊNCIA com angina em paciente que usou iPDE5: NUNCA dar nitrato — alternativa é morfina."},
{nivel:"crit", txt:"DE súbita + idade <40 ou cardiopata = pesquisar DAC oculta. DE pode ser primeira manifestação ~3-5 anos antes do IAM. Calcular risco CV (ASCVD/Framingham), considerar TE/cintilografia se moderado-alto risco."},
{nivel:"warn", txt:"iPDE5 + alfa-bloqueador (tamsulosina, doxazosina): hipotensão ortostática. Iniciar com cuidado, dose menor. Tadalafila 5 mg + tamsulosina é combinação aprovada (HBP + DE — útil em homens com ambos)."},
{nivel:"warn", txt:"Testosterona em homem: ↑risco TEV, eritrocitose (Ht >54% = suspender ou flebotomia), agravação de HBP/PSA, possível ↑risco CV em alguns estudos. Indicar apenas com sintomas claros + 2 medidas matinais <300 ng/dL."},
{nivel:"warn", txt:"DE em paciente em ISRS: muito comum. Discutir com paciente: continuar antidepressivo (depressão tratada > DE) vs trocar para BUPROPIONA (não causa DE, pode até ajudar) vs adicionar iPDE5. Decisão compartilhada."},
{nivel:"info", txt:"Sildenafil pode estar disponível em PFPB em alguns municípios (variável). Confirmar localmente. Genéricos baratos disponíveis."},
{nivel:"info", txt:"DE psicogênica: súbito, situacional (com X parceira, não com Y), ereção noturna/matinal preservada, libido normal. Resposta a sildenafil 'placebo-positiva' frequente. Aliada: psicoterapia, terapia de casal."},
],
diretriz:"[SBU — Diretriz Brasileira de Disfunção Erétil 2023] [EAU 2024 Guidelines on Sexual and Reproductive Health] [AUA 2018 Guideline on the Evaluation and Management of Testosterone Deficiency] [Princeton Consensus III on Sexual Activity and Cardiac Risk] [TMFC 2ª ed, cap. 174] [DUNCAN 5ª ed, cap. 91]"
},

/* ============================================================
   4. CLIMATÉRIO / MENOPAUSA — abordagem MFC
   ============================================================ */
{
id:"climaterio", contexto:["ubs"], nome:"Climatério e Menopausa — Abordagem MFC",
sis:"gu", grav:"baixa",
cid:"N95.1", ciap:"X11",
sin:["climatério","menopausa","perimenopausa","fogachos","síndrome climatérica","TRH","reposição hormonal"],
def:"Climatério: período de transição da fase reprodutiva para não-reprodutiva, geralmente entre 40-65 anos. Menopausa: cessação definitiva da menstruação (12 meses sem ciclo), idade média no Brasil ~51a. Síndrome climatérica: conjunto de sintomas vasomotores + atrofia urogenital + alterações do humor + sintomas musculoesqueléticos + alterações metabólicas/CV/ósseas pós-meno.",
intro:"Menopausa é evento fisiológico, NÃO doença. Mas síndrome climatérica intensa pode prejudicar significativamente qualidade de vida — fogachos noturnos prejudicam sono, atrofia vaginal afeta sexualidade, ↑risco osteoporótico e CV pós-meno demandam estratégia. MFC: validar sintomas, oferecer TRH em candidatas adequadas (sob 60a, <10a da menopausa, sem contraindicação), tratar sintomas individualmente, abordar prevenção CV/óssea. Importante: combater o 'climatério é doença' VS 'climatério não merece tratamento' — equilíbrio.",
fisio:"Falência ovariana progressiva → ↓estradiol (e progesterona) → instabilidade do termostato hipotalâmico (fogachos), atrofia da mucosa urogenital, perda óssea acelerada (5-10 anos pós-meno é fase de maior perda), alteração no perfil lipídico (LDL↑, HDL↓), redistribuição de gordura visceral, alteração do humor (vulnerabilidade aumentada à depressão), alterações de sono.",
apresentacao:"Mulher entre 40-65 anos, frequentemente 45-55, com ciclos cada vez mais irregulares (perimenopausa) ou com 12+ meses de amenorreia (menopausa). Queixas: ondas de calor (fogachos) com sudorese, especialmente noturnas, palpitações, despertar noturno; secura vaginal, dispareunia, ITU recorrente, sintomas urinários; alterações de humor (irritabilidade, ansiedade, depressão); dores articulares; redução libido. Variação individual ENORME — algumas mulheres pouco sintomáticas, outras incapacitadas.",
sintomas:[
"Sintomas VASOMOTORES: fogachos (calor súbito tronco/face, ~2-5 min, com rubor e sudorese), suores noturnos (despertar noturno encharcada) — mais incômodo e mais melhor responde a TRH",
"Atrofia urogenital (síndrome geniturinária da menopausa): secura vaginal, dispareunia, prurido, sangramento ao coito, ITU recorrente, urgência miccional, incontinência",
"Alterações de SONO: insônia (relacionada a fogachos noturnos ou per se), despertares frequentes",
"Alterações de HUMOR: depressão, ansiedade (vulnerabilidade ↑ na perimenopausa em mulheres com história prévia)",
"Sintomas MUSCULOESQUELÉTICOS: artralgias, mialgias difusas",
"Alterações CV/ósseas (assintomáticas): ↑risco osteoporose, ↑risco CV pós-meno",
"Alterações da função sexual: ↓libido (multifatorial — hormonal + atrofia + parceiro + relacionamento)",
],
profilaxia:"Atividade física regular (aeróbica + força — preserva massa óssea e muscular), dieta rica em cálcio + D, exposição solar moderada, peso adequado, cessação tabágica, redução álcool. Prevenção CV: PA, lipídios, glicemia, IMC, cintura. Prevenção ósseo: cálcio 1000-1200 mg/dia + D 800-1000 UI/dia, considerar DMO baseline aos 65a (ou antes se fatores de risco). Vacinação anual influenza + pneumocócica conforme idade.",
freire:"Climatério é frequentemente desvalorizado ('é da idade, passa') ou medicalizado ('precisa hormônio'). Buscar equilíbrio. Validar sintomas como REAIS. Educar sobre fisiologia — desconstruir tabus ('estou ficando velha', 'minha vida sexual acabou'). Em mulher sintomática severa: oferecer opções (TRH, antidepressivos, fitoterápicos com evidência, terapia comportamental, modificações de estilo de vida) — decisão compartilhada. Em mulher pouco sintomática: NÃO impor TRH apenas porque está em menopausa. Para atrofia vaginal: educar sobre estrógeno tópico (eficácia excelente, segurança alta, mesmo em ex-CA mama em alguns casos).",
sus_tx:"Sintomas VASOMOTORES moderados-graves em CANDIDATA À TRH: <60a + <10a de menopausa + SEM contraindicação (CA mama prévio, TEV, AVE, DAC, hepatopatia ativa, sangramento genital sem investigação). TRH: estradiol oral 1-2 mg/dia OU transdérmico 25-100 mcg + progesterona (medroxiprogesterona 2,5 mg ou progesterona micronizada 100-200 mg) — se útero presente. Mulher histerectomizada: estrogênio isolado. Duração: menor possível, reavaliar anualmente (geralmente 3-5 anos). REMUME: estradiol VO e tópico vaginal disponível em alguns municípios; PFPB pode cobrir variantes. ALTERNATIVAS NÃO-HORMONAIS: ISRS (paroxetina, venlafaxina) — modesto benefício para fogachos; gabapentina (especialmente fogachos noturnos com insônia); clonidina (eficácia modesta, hipotensão). ATROFIA UROGENITAL: estrógeno tópico vaginal (estriol creme — UBS/PFPB conforme município) — uso 2-3×/sem após ataque diário inicial. Lubrificante íntimo + hidratante.",
padrao_ouro:"Acrescenta: TIBOLONA 2,5 mg VO 1×/dia (esteroide sintético com efeito estrogênico/progestagênico/androgênico — útil em mulher com baixa libido — particular); DHEA via vaginal (Prasterona); cremes vaginais com lasers (CO2, erbium — privado, sem evidência convincente); fitoterápicos (cimicifuga racemosa — eficácia modesta; isoflavonas — evidência conflitante).",
prog:"Sintomas climatéricos diminuem espontaneamente em 5-7 anos para maioria. Atrofia urogenital tende a piorar progressivamente sem tratamento. Risco osteoporose/CV pós-meno é cumulativo — prevenção a longo prazo.",
acomp:"Em TRH: reavaliar 3 meses (eficácia, efeitos adversos), depois semestral, anualmente decidir continuação. Mamografia anual (rastreio normal). Pressão arterial, peso, IMC. DMO baseline + a cada 2-5 anos. Mamografia + colpocitologia conforme rastreio. Avaliar fatores de risco CV.",
p4:"NÃO indicar TRH para 'prevenção CV' ou 'prevenção de demência' — sem evidência (WHI 2002 mostrou pior, com risco aumentado de DCV/AVE/CA mama em uso prolongado iniciado tardiamente). NÃO indicar TRH em CA mama prévio (contraindicação). NÃO repetir DMO em <2 anos sem mudança clínica. NÃO indicar dosagem extensa de hormônios (estradiol, FSH, LH) em mulher em menopausa óbvia clinicamente — diagnóstico é clínico. NÃO indicar dosagem de FSH/estradiol em mulher AINDA menstruando para 'pesquisar menopausa' — variabilidade alta na perimenopausa. NÃO suspender contracepção precocemente em perimenopausa — gestação ainda possível até menopausa confirmada (12 meses sem ciclo).",
alertas:[
{nivel:"crit", txt:"⛔ TRH em CA MAMA prévio = CONTRAINDICAÇÃO ABSOLUTA (estrogênio sistêmico). Estrogênio TÓPICO vaginal em CA mama: discutir com oncologista (alguns aceitam doses baixas + receptor negativo)."},
{nivel:"crit", txt:"⚠ TRH + TEV prévio / fator V Leiden / trombofilia / tabagismo importante / obesidade severa / cirurgia recente = ALTO RISCO. Contraindicada na maioria. Se imprescindível, preferir via TRANSDÉRMICA (menor risco TEV vs oral)."},
{nivel:"warn", txt:"SANGRAMENTO genital pós-menopausa (após 12 meses sem ciclo, sem TRH) = INVESTIGAR — biopsia endometrial (excluir CA endométrio). Mesmo em mulher em TRH com sangramento irregular não-esperado, encaminhar ginecologista."},
{nivel:"warn", txt:"Mulher iniciando TRH >60 anos ou >10 anos pós-meno: razão risco/benefício pior (\"hipótese da janela de oportunidade\"). Discussão compartilhada cuidadosa."},
{nivel:"warn", txt:"Atrofia urogenital tende a NÃO RESPONDER bem ao estrogênio sistêmico (TRH). Tratamento de escolha = estrogênio tópico vaginal — eficácia excelente, segurança alta, mínima absorção sistêmica."},
{nivel:"info", txt:"\"Mood\" pré-menstrual pré-meno e depressão peri-meno têm vulnerabilidade aumentada — não 'medicalizar tudo' mas também não banalizar. Tratamento de depressão tem indicação independente de TRH."},
{nivel:"info", txt:"Densitometria óssea aos 65a (ou antes se fatores de risco: tabagismo, baixo IMC, menopausa precoce, corticoide crônico, AR, etc.) é o rastreio recomendado. Não-pedir DMO indiscriminada (P4)."},
],
diretriz:"[SBC/SBEM/FEBRASGO/IMS — Consenso Brasileiro de Climatério 2024] [IMS 2016 World Climacteric Society recommendations] [NAMS 2022 Position Statement on Hormone Therapy] [TMFC 2ª ed, cap. saúde da mulher climatério] [DUNCAN 5ª ed, cap. mulher climatério]"
},

);
