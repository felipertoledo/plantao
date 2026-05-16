/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — PATOLOGIA DM2 (SBD 2025)
   Diabetes Mellitus Tipo 2 — abordagem completa
   conforme Diretriz SBD 2025 + ADA Standards 2025
   =========================================================== */

PATOLOGIAS.push(

{id:"diabetes-tipo-2", nome:"Diabetes Mellitus Tipo 2 (DM2)", sis:"endo", grav:"moderada",
cid:"E11", ciap:"T90",
sin:["DM2","Diabetes tipo 2","Diabetes mellitus","Açúcar alto","Hiperglicemia crônica"],

def:"Doença crônica multifatorial — hiperglicemia por resistência insulínica + disfunção progressiva das células β. SBD 2025 mudou paradigma: METFORMINA NÃO É MAIS EXCLUSIVA em 1ª linha — escolha individualizada por RCV, IMC e HbA1c.",

quadro:[
"Frequentemente ASSINTOMÁTICO — descoberta em rastreio ou após complicação (DM2 'silencioso' por anos)",
"Sintomas clássicos (em hiperglicemia >250 mg/dL): poliúria, polidipsia, polifagia, perda de peso involuntária",
"Sintomas inespecíficos: fadiga, visão turva, infecções recorrentes (urinárias, candidíase, pele), cicatrização lenta",
"Sintomas de complicações crônicas (presentes no diagnóstico em ~50% dos DM2): neuropatia (parestesia/dor MMII), retinopatia (visão), nefropatia (proteinúria/edema), DAOP (claudicação), DAC/AVC",
"Apresentação aguda: CAD euglicêmica (em uso SGLT-2), CAD clássica, EHH (estado hiperglicêmico hiperosmolar — glicemia >600, desidratação grave, alteração consciência)",
"Acantose nigricans (hiperpigmentação aveludada em pescoço/axilas) sugere resistência insulínica grave",
],

diag:[
"GLICEMIA DE JEJUM ≥126 mg/dL (jejum ≥8h) em DUAS ocasiões — ou em uma com clínica clássica",
"HbA1c ≥6,5% (método certificado NGSP) em DUAS ocasiões — ou uma com clínica",
"TOTG 75 g — glicemia 2h ≥200 mg/dL",
"GLICEMIA OCASIONAL ≥200 mg/dL + sintomas clássicos = diagnóstico em UMA medida",
"PRÉ-DIABETES: glicemia jejum 100-125 OU HbA1c 5,7-6,4% OU TOTG 2h 140-199",
"⚠ SBD 2025 NOVA: RASTREAMENTO em adultos ≥35 anos (era ≥45) — ou antes se fatores de risco",
"FATORES DE RISCO para rastreio precoce: IMC ≥25 + 1 fator (HAS, dislipidemia, sedentarismo, hist familiar DM, SOP, etnia de risco, DCV, hist DMG)",
],

exames:[
"⚠ AVALIAÇÃO INICIAL completa após diagnóstico:",
"HbA1c (basal + cada 3 meses até controle, depois 6/6m)",
"Perfil lipídico (CT, HDL, LDL, TG) — meta LDL <70 em alto RCV, <55 em muito alto",
"Creatinina + TFG estimada (CKD-EPI 2021)",
"RAZÃO ALBUMINÚRIA/CREATININÚRIA (RAC) — rastreio nefropatia. <30: normal; 30-300: micro; >300: macro",
"TGO/TGP (rastreio NASH em DM2 + obesidade)",
"TSH (associação DM2 + tireoidopatia)",
"ECG basal (HVE, isquemia silenciosa)",
"FUNDOSCOPIA ANUAL (rastreio retinopatia)",
"EXAME DE PÉS ANUAL (monofilamento 10g, diapasão 128Hz, pulso pedioso, inspeção)",
"Estratificação de risco CV (PREVENT, ESC SCORE2, ou clínica)",
],

rx:[
// ============== INICIAL — MEV ==============
{etapa:"inicial", d:"MUDANÇAS DE ESTILO DE VIDA (MEV) — aplicar SEMPRE em conjunto com medicação", o:"Pode reduzir HbA1c 0,5-2%. Em pré-diabetes ou DM2 leve: pode normalizar glicemia."},
{etapa:"inicial", d:"DIETA: padrão mediterrânea ou DASH; reduzir carboidratos refinados; ↑ fibras (25-30 g/d); proteína magra; ↓ sódio. Contagem de carboidratos em DM1, opcional em DM2", o:"Considerar nutricionista. Redução HbA1c 0,5-1%."},
{etapa:"inicial", d:"PESO: meta perda 5-10% se IMC ≥25 (cada 1 kg de perda ≈ ↓ 0,1% HbA1c)", o:"Em obesidade grau 2/3 + DM2: avaliar CIRURGIA BARIÁTRICA (IMC ≥35 + DM = boa resposta)."},
{etapa:"inicial", d:"ATIVIDADE FÍSICA: 150 min/sem aeróbica moderada + 2-3× exercício resistido + reduzir tempo sentado", o:"Reduz HbA1c 0,5-1%, melhora sensibilidade insulínica."},
{etapa:"inicial", d:"CESSAR TABAGISMO + álcool moderado (≤2 doses/d H, ≤1 D) + sono adequado (7-9h)", o:"Tabagismo é fator de risco MAIOR em DM (CV + nefropatia + neuropatia)."},
{etapa:"inicial", d:"EDUCAÇÃO em DM: HGT, reconhecer hipo/hiperglicemia, dias de doença, cuidados com pés, vacinação (influenza anual, pneumococo, dT, Hep B, COVID)", o:"Educação estruturada melhora desfechos a longo prazo."},

// ============== ESTRATIFICAÇÃO DE RISCO CV ==============
{etapa:"escala", d:"⚠ ESTRATIFICAÇÃO DE RISCO CV — CHAVE para escolha terapêutica SBD 2025. 4 categorias: BAIXO, INTERMEDIÁRIO, ALTO, MUITO ALTO", o:""},

{etapa:"escala", d:"RCV BAIXO: ♂ <55a / ♀ <65a + SEM fatores de risco + DM <10 anos + HbA1c <7,5% + sem LOA", o:""},

{etapa:"escala", d:"RCV INTERMEDIÁRIO: ♂ ≥55a OU ♀ ≥65a + 1-2 fatores de risco (HAS, dislipidemia, tabagismo, hist familiar) + sem LOA", o:""},

{etapa:"escala", d:"RCV ALTO: ≥3 fatores de risco OU DM ≥10a OU LOA (TFG 30-60, RAC 30-300, retinopatia, HVE)", o:""},

{etapa:"escala", d:"RCV MUITO ALTO: DAC/AVC/DAOP ESTABELECIDOS, OU TFG <30, OU RAC >300, OU múltiplas LOA", o:"Categoria que MUDA radicalmente a escolha terapêutica — SGLT-2/GLP-1 com benefício CV são obrigatórios."},

// ============== ESCALONAMENTO MEDICAMENTOSO ==============
{etapa:"escala", d:"⚠ SBD 2025 — METFORMINA NÃO É MAIS EXCLUSIVA em 1ª linha. Escolha individualizada por: (1) RCV; (2) IMC; (3) HbA1c", o:""},

{etapa:"escala", d:"R3 — RCV BAIXO/INTERMEDIÁRIO + SEM obesidade + HbA1c <7,5%: METFORMINA monoterapia (1ª linha clássica)", o:"Iniciar 500 mg 12/12h com refeições, titular cada 1-2 sem até 850 mg 8/8h ou 1000 mg 12/12h. Dose máx eficaz 2-2,5 g/d."},

{etapa:"escala", d:"RCV ALTO ou MUITO ALTO (independente da HbA1c): iniciar SGLT-2 ou GLP-1 PRECOCEMENTE — benefício CV comprovado", o:"DAPA, EMPA, SEMA, LIRA têm evidência. Não esperar falha de outra classe. Pode combinar com metformina ou usar isolada."},

{etapa:"escala", d:"DM2 + OBESIDADE (IMC ≥30): PREFERIR GLP-1 ou TIRZEPATIDA (perda de peso 5-22%) ou SGLT-2 (perda 2-3 kg)", o:"Beneficio metabólico + cardiovascular + ponderal simultâneo."},

{etapa:"escala", d:"DM2 + IC com FE REDUZIDA (com ou sem comorbidade): SGLT-2 (DAPA/EMPA) é OBRIGATÓRIO — pilar do tratamento", o:"DAPA-HF, EMPEROR — reduz mortalidade e hospitalização. Pode iniciar mesmo SEM DM."},

{etapa:"escala", d:"DM2 + DRC (TFG <60 ou RAC >30): SGLT-2 (DAPA/EMPA) é OBRIGATÓRIO se TFG ≥25", o:"DAPA-CKD, EMPA-KIDNEY — nefroproteção independente de DM. Pode usar até TFG 25 (DAPA) ou 20 (EMPA)."},

{etapa:"escala", d:"DM2 + DAC/AVC ESTABELECIDOS: combinação SGLT-2 + GLP-1 + metformina (se tolerada) + iSRA + estatina", o:"Cardioprotection máxima. Aspirina em prevenção secundária."},

// ============== INSULINOTERAPIA EM DM2 ==============
{etapa:"escala", d:"⚠ R16 — SINAIS DE INSULINOPENIA (poliúria, polidipsia, perda de peso, cetose, HbA1c ≥10%): TERAPIA BASEADA EM INSULINA (TBI) inicial — independente de RCV", o:"Estabilizar glicemia rapidamente. Após estabilização, R17: pode substituir por dupla/tripla VO."},

{etapa:"escala", d:"INSULINA BASAL inicial em DM2: 0,1-0,2 U/kg/d (NPH ou análoga — glargina/degludeca) à noite OU dividida 2×/d", o:"Titular 2 U cada 3 dias até glicemia jejum 80-130. Manter metformina. Reduzir sulfonilureia (risco hipoglicemia)."},

{etapa:"escala", d:"BASAL-BOLUS em DM2 avançada: basal 50% + prandial 50% dividido 3 refeições", o:"Quando HbA1c persiste alto apesar de basal isolada + outras drogas."},

// ============== EXEMPLOS DE COMBINAÇÕES ==============
{etapa:"escala", d:"EXEMPLO 1 (DM2 RCV baixo, HbA1c 7%): METFORMINA 500 mg 12/12h, titular para 850 mg 8/8h. Reavaliar 3 meses", o:"1ª linha clássica. Bom para iniciar."},

{etapa:"escala", d:"EXEMPLO 2 (DM2 + DAC + HbA1c 8%): METFORMINA 850 mg 8/8h + EMPAGLIFLOZINA 10 mg/d + ATORVASTATINA 40 mg + AAS 100 mg + LISINOPRIL/LOSARTANA", o:"Cardioproteção máxima. Reduz MACE + nefropatia."},

{etapa:"escala", d:"EXEMPLO 3 (DM2 + IMC 35 + HbA1c 8,5%): METFORMINA + SEMAGLUTIDA 0,5-1 mg SC/sem (titulação). Avaliar tirzepatida se acessível", o:"Perda de peso + controle glicêmico + benefício CV."},

{etapa:"escala", d:"EXEMPLO 4 (DM2 + IC FE reduzida): DAPAGLIFLOZINA 10 mg/d + LOSARTANA + CARVEDILOL + ESPIRONOLACTONA + furosemida (conforme congestão)", o:"Trio CV moderno + diurese. Pode dispensar metformina se IRC."},

// ============== METAS GLICÊMICAS ==============
{etapa:"adj", d:"⚠ METAS HbA1c — INDIVIDUALIZADAS conforme paciente (SBD 2025):", o:""},

{etapa:"adj", d:"HbA1c <7% — META GERAL para maioria dos adultos com DM2", o:"Reduz desfechos microvasculares (retinopatia, neuropatia, nefropatia)."},

{etapa:"adj", d:"HbA1c <6,5% — em paciente JOVEM, recém-diagnóstico, sem comorbidades", o:"Se atingível sem hipoglicemia significativa."},

{etapa:"adj", d:"HbA1c <8% (ou <8,5%) — em IDOSO frágil, expectativa de vida limitada, hipoglicemias frequentes, complicações avançadas", o:"Risco de hipoglicemia em idoso > benefício de controle estrito."},

{etapa:"adj", d:"GLICEMIAS-ALVO: pré-prandial 80-130 mg/dL | pós-prandial 2h <180 mg/dL | bedtime 90-150 mg/dL", o:"Time-in-range (CGM): >70% entre 70-180 mg/dL."},

// ============== SITUAÇÕES ESPECIAIS ==============
{etapa:"adj", d:"GESTANTE com DM2 pré-existente: INSULINA é padrão-ouro (NPH ou análogas glargina/asparte/detemir). Metformina pode ser mantida no 1º trim em algumas situações (especialmente SOP)", o:"PROIBIDOS: SGLT-2, GLP-1, sulfonilureias (exceto glibenclamida em DMG — uso restrito), DPP-4. Meta HbA1c <6,5% antes da concepção."},

{etapa:"adj", d:"DM GESTACIONAL (DMG): MEV + monitorização. Se inadequado: INSULINA (preferida) ou METFORMINA (categoria B)", o:"Glibenclamida não recomendada em DMG (passa placenta — hipoglicemia neonatal)."},

{etapa:"adj", d:"IDOSO ≥65 anos: EVITAR sulfonilureias (risco hipoglicemia grave). PREFERIR: metformina (com TFG monitorada), DPP-4 (perfil seguro), SGLT-2 (se sem hipotensão postural), GLP-1 (se sem perda excessiva de peso)", o:"Meta HbA1c <7,5-8% em idoso saudável; <8-8,5% em frágil."},

{etapa:"adj", d:"DRC (TFG <60): metformina TFG 30-45 reduzir 50%, TFG <30 contraindicada. PREFERIR: SGLT-2 (nefroprotetor), GLP-1 (sem ajuste até TFG 15), DPP-4 (ajustar)", o:"Sulfonilureia: contraindicada em TFG <30 (hipoglicemia). Pioglitazona: cuidado (retenção)."},

{etapa:"adj", d:"OBESIDADE significativa (IMC ≥30, especialmente ≥35): GLP-1 (semaglutida) ou TIRZEPATIDA são 1ª escolha — perda 5-22%. AVALIAR cirurgia bariátrica em IMC ≥35 + DM2", o:"Pioglitazona, sulfonilureia, insulina causam ganho de peso — evitar quando possível."},

{etapa:"adj", d:"NASH (esteato-hepatite não-alcoólica) + DM2: PIOGLITAZONA tem benefício histológico (PIVENS). SGLT-2 e GLP-1 também melhoram esteatose", o:"Avaliar TGO/TGP + elastografia (fibroscan) em DM2 + obesidade."},

{etapa:"adj", d:"PEDIATRIA — DM2 (crescente em adolescentes obesos): METFORMINA é 1ª linha (≥10 anos). Insulina se HbA1c muito alta. Liraglutida e empagliflozina aprovadas FDA ≥10a", o:"MEV é fundamental. Educação familiar."},

// ============== HIPOGLICEMIA ==============
{etapa:"adj", d:"⚠ HIPOGLICEMIA: glicemia <70 mg/dL. Classificar: nível 1 (70-54), nível 2 (<54 — grave bioquímica), nível 3 (alteração consciência — grave clínica)", o:""},

{etapa:"adj", d:"MANEJO HIPOGLICEMIA LEVE (paciente consciente): 15 g de CHO de absorção rápida (3 balas, 1 sachê glicose, 150 mL suco), reavaliar 15 min. Se persistir, repetir. Após: refeição completa", o:"Regra dos 15 (15 g, 15 min). Manter HGT pós-correção."},

{etapa:"adj", d:"HIPOGLICEMIA GRAVE (inconsciente / convulsão): GLICOSE 50% 50 mL IV em 5 min (após tiamina se etilista) OU GLUCAGON 1 mg IM/SC (em casa). Após: BIC glicose 5-10% se sulfonilureia (risco prolongado)", o:"Em paciente com glibenclamida: internar para BIC glicose 24-48h (hipoglicemia recorrente)."},

{etapa:"adj", d:"PREVENÇÃO: educação, evitar drogas de alto risco (glibenclamida, insulina sem ajuste), reduzir álcool em jejum, identificar hipoglicemia inadvertida", o:"Em paciente com hipoglicemia inadvertida: relaxar meta HbA1c, considerar CGM."},

// ============== EMERGÊNCIAS — CAD E EHH ==============
{etapa:"adj", d:"⚠ CETOACIDOSE DIABÉTICA (CAD): glicemia >250 mg/dL (ou euglicêmica em SGLT-2) + cetonas + acidose (pH <7,3, bicarb <15). Mais em DM1, mas em DM2 grave também", o:""},

{etapa:"adj", d:"CAD — manejo: (1) HIDRATAÇÃO SF 0,9% 1L em 1h + 500 mL/h depois; (2) INSULINA REGULAR 0,1 U/kg IV bolus + 0,1 U/kg/h BIC; (3) K+ — reposição se K<5,5 (BIC 20-40 mEq/L); (4) bicarbonato APENAS se pH<6,9", o:"Não cessar insulina BIC até pH normalizar + bicarbonato >18 + ânion gap normal. Transição para SC apenas após resolução."},

{etapa:"adj", d:"ESTADO HIPERGLICÊMICO HIPEROSMOLAR (EHH): glicemia >600 + osmolaridade >320 + ALTERAÇÃO consciência + SEM cetose significativa. Tipicamente em IDOSO com DM2 + infecção/desidratação", o:""},

{etapa:"adj", d:"EHH — manejo: hidratação MAIS AGRESSIVA (déficit pode ser 8-12L), insulina mais cautelosa (queda lenta), K+, identificar gatilho (infecção em 60%)", o:"Mortalidade EHH (15-20%) > CAD (~1%) — pacientes mais frágeis."},

// ============== METAS E SEGUIMENTO ==============
{etapa:"alta", d:"⚠ SEGUIMENTO REGULAR — DM2 controlada: retorno 3-6 meses. DM2 em ajuste: retorno 1-3 meses. DM2 instável: mensal", o:""},

{etapa:"alta", d:"AVALIAÇÃO ANUAL completa: HbA1c 2-4×/ano (3-6/6m); RAC anual; fundoscopia anual; exame de pés anual; perfil lipídico anual; ECG; pressão arterial", o:"Rastreio LOA é fundamental — complicações são preveníveis com controle."},

{etapa:"alta", d:"MANEJO INTEGRADO de RISCO CV: HAS (meta <130/80), dislipidemia (LDL <70 em alto RCV, <55 em muito alto), aspirina em prevenção SECUNDÁRIA, cessar tabagismo", o:"Tratamento de DM2 isolado é INSUFICIENTE — manejo do RCV global salva vidas."},

{etapa:"alta", d:"VACINAÇÃO em DM2: INFLUENZA anual + PNEUMOCÓCICA (13v + 23v, esquema sequencial) + dT/dTpa + HEPATITE B (se susceptível) + HERPES ZOSTER (≥50a) + COVID-19", o:"DM2 = imunossupressão relativa, risco infeccioso aumentado."},

{etapa:"alta", d:"REMISSÃO de DM2: possível com perda de peso significativa (≥10-15 kg), especialmente pós-bariátrica ou com GLP-1/tirzepatida. Não 'curado' — risco de recorrência se ganhar peso", o:"DiRECT trial: 46% remissão com perda >15 kg em 1 ano."},

{etapa:"alta", d:"PRÓXIMOS PASSOS — encaminhamento à especialidade: (1) DM1 ou autoimune; (2) HbA1c >10% persistente; (3) hipoglicemia inadvertida grave; (4) complicações avançadas (retinopatia proliferativa, IRC estágio ≥4, pé diabético); (5) gestação/pré-gestacional; (6) bomba/CGM", o:"Endocrinologia. Manter acompanhamento conjunto na APS."},
],

alertas:[
{nivel:"crit", txt:"CETOACIDOSE EUGLICÊMICA em uso de SGLT-2: paciente com sintomas cetose (náusea, vômito, dor abdominal, dispneia) mas glicemia próxima do normal. SUSPEITAR + dosar cetonas + gasometria. Fatores: jejum prolongado, álcool, infecção, redução insulina. SUSPENDER SGLT-2 + insulina + glicose + hidratação."},
{nivel:"crit", txt:"CIRCUNSTÂNCIAS para SUSPENDER METFORMINA: contraste iodado IV (48h antes/depois), sepse, IAM, IC descompensada, hipóxia, cirurgia maior, gastroenterite com desidratação. Reintroduzir após estabilização. Risco ACIDOSE LÁTICA."},
{nivel:"crit", txt:"HIPOGLICEMIA GRAVE EM IDOSO com glibenclamida: pode durar HORAS-DIAS. TRATAR: glicose 50% IV + BIC glicose 5% 24-48h. INTERNAR. PREFERIR outras classes em idoso."},
{nivel:"crit", txt:"GESTAÇÃO + DM2: SGLT-2, GLP-1, sulfonilureias (exceto glibenclamida em DMG), DPP-4 são PROIBIDOS. INSULINA é padrão-ouro. Metformina pode ser usada em casos específicos."},
{nivel:"warn", txt:"⚠ SBD 2025 — METFORMINA NÃO É MAIS EXCLUSIVA em 1ª linha. Em paciente com RCV alto/muito alto: iniciar SGLT-2 ou GLP-1 PRECOCEMENTE (mesmo se HbA1c baixa)."},
{nivel:"warn", txt:"GLP-1/TIRZEPATIDA + sintomas GI persistentes >4-8 sem: avaliar gastroparesia diabética. Titulação lenta reduz EA. Pancreatite: suspender se dor abdominal súbita + amilase/lipase ↑."},
{nivel:"warn", txt:"DM2 + IC com FE REDUZIDA: pioglitazona é CONTRAINDICADA (retenção líquida → piora IC). Preferir SGLT-2 (pilar moderno)."},
{nivel:"warn", txt:"DM2 + DRC: metformina ajustar/contraindicada conforme TFG. SGLT-2 é nefroprotetor — manter mesmo com TFG 25-30. GLP-1: sem ajuste."},
{nivel:"info", txt:"SBD 2025 RASTREIO: a partir de 35 anos (era 45 anos). Em fatores de risco: antes."},
{nivel:"info", txt:"PERDA DE PESO em DM2 obeso: cada 1 kg ≈ 0,1% redução HbA1c. Cirurgia bariátrica em IMC ≥35 + DM2 = melhor desfecho metabólico (remissão em ~60% em 5 anos)."},
],

fluxo:null,
diretriz:"SBD 2025 (Diretriz Brasileira). ADA Standards 2025. EASD-ADA Joint Statement. DAPA-HF/CKD. EMPA-REG OUTCOME. SUSTAIN-6. PCDT MS DM2."
},

);
