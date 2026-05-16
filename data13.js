/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — PATOLOGIA DISLIPIDEMIA
   Conforme: Atualização SBC Dislipidemia 2017 + AHA/ACC 2018-2024
   + ESC 2019 + Update DBHA 2025 (componente CV)
   =========================================================== */

PATOLOGIAS.push(

{id:"dislipidemia", nome:"Dislipidemia", sis:"endo", grav:"baixa",
cid:"E78", ciap:"T93",
sin:["Colesterol alto","Hipercolesterolemia","Hiperlipidemia","Hipertrigliceridemia","LDL alto","Dislipidemia mista"],

def:"Alteração do perfil lipídico — ↑ LDL e/ou ↑ TG e/ou ↓ HDL. Principal contribuinte modificável para aterosclerose. Tratamento NÃO é por número, mas por RISCO CV individual (estratificação determina alvo terapêutico).",

quadro:[
"ASSINTOMÁTICA na grande maioria — detectada em rastreio ou após complicação CV",
"Sinais físicos em dislipidemia FAMILIAR/grave: xantomas tendinosos (cotovelo, Achilles), xantelasmas (pálpebras), arco corneano <45a, xantomas eruptivos em TG >1000",
"HIPERTRIGLICERIDEMIA grave (TG >1000): risco de PANCREATITE AGUDA, lipemia retiniana, hepatomegalia (esteatose)",
"Sintomas de doença vascular instalada: angina, claudicação, AVC, IAM",
"Em homozigoto hipercolesterolemia familiar (raro): doença coronariana antes dos 20 anos",
],

diag:[
"⚠ NÃO HÁ 'valor de corte' para diagnóstico isolado — é estratificação de risco",
"RASTREAMENTO: ≥20 anos a cada 5 anos; mais cedo se fatores de risco",
"PERFIL LIPÍDICO COMPLETO: CT, HDL, LDL (calculado ou direto), TG, não-HDL",
"JEJUM 12h tradicional, mas guidelines recentes aceitam sem jejum (exceto se TG >400 — repetir em jejum)",
"NÃO-HDL = CT − HDL (melhor preditor CV que LDL, especialmente em TG alto)",
"Lp(a) — dosagem 1× na vida em paciente com história familiar de DCV precoce ou DCV pessoal precoce",
"ApoB — dosagem opcional (mais acurada que LDL em dislipidemia mista)",
"CALCULADORA de RCV: Brasil — escore SBC; ESC SCORE2/SCORE2-OP; EUA — PREVENT score ou Pooled Cohort Equations",
],

exames:[
"Perfil lipídico completo (CT, HDL, LDL, TG, não-HDL)",
"Glicemia jejum + HbA1c (rastreio DM2 — comum coexistir)",
"TSH (hipotireoidismo causa dislipidemia 2ária)",
"Creatinina + TFG (DRC altera perfil + ajusta dose de estatina)",
"TGO/TGP basal (antes de iniciar estatina)",
"CK basal APENAS se risco de miopatia (idoso frágil, hipotireoidismo, atleta, asiático)",
"Microalbuminúria/RAC se HAS+DM",
"ECG basal em ≥40 anos ou fator de risco",
"Escore de cálcio coronariano (ECC) em RCV intermediário para reclassificar — exame promissor",
],

rx:[
{etapa:"inicial", d:"⚠ 1º PASSO: ESTRATIFICAR RISCO CV — define ALVOS de LDL", o:"Tratamento NÃO é pelo número absoluto, mas pelo risco individual."},

{etapa:"inicial", d:"RISCO MUITO ALTO (LDL alvo <50 mg/dL, ESC sugere <40): DCV aterosclerótica ESTABELECIDA (DAC, AVC, DAOP) OU DM + LOA OU DM ≥10a OU IRC TFG <30 OU LDL >190 + 1 FRCV OU HF com evento", o:"Estatina alta potência + considerar combinação (ezetimiba, PCSK9 se ainda fora do alvo)."},

{etapa:"inicial", d:"RISCO ALTO (LDL alvo <70 mg/dL): DM2 SEM LOA com >10a OU múltiplos FRCV OU IRC G3a/G3b OU LDL 160-189 OU escore SBC alto", o:"Estatina alta potência ou moderada conforme tolerância."},

{etapa:"inicial", d:"RISCO INTERMEDIÁRIO (LDL alvo <100 mg/dL): escore SBC 5-20% OU 1-2 FRCV", o:"Estatina moderada potência. Considerar ECC se reclassificação útil."},

{etapa:"inicial", d:"RISCO BAIXO (LDL alvo <130 mg/dL): escore SBC <5% + sem FRCV", o:"MEV primeiro. Estatina só em LDL alto persistente após MEV."},

{etapa:"inicial", d:"MUDANÇAS DE ESTILO DE VIDA (MEV) — aplicar SEMPRE, independente de medicação", o:"Pode reduzir LDL 10-20%, TG 30-50%, ↑ HDL 5-10%."},

{etapa:"inicial", d:"DIETA: padrão MEDITERRÂNEA ou DASH. ↓ gordura saturada <7% das calorias. ↓ trans <1%. ↑ fibras 25-40 g/d. ↑ esteróis vegetais 2 g/d. ↑ frutas, legumes, peixe, leguminosas, oleaginosas", o:"Redução LDL 5-15%."},

{etapa:"inicial", d:"PESO: perda 5-10% se IMC ≥25 (especialmente em TG alto e HDL baixo)", o:"Cada 10 kg de perda: TG ↓ ~20-30%, HDL ↑ ~5%."},

{etapa:"inicial", d:"ATIVIDADE FÍSICA: 150 min/sem aeróbica moderada + 2-3× exercício resistido", o:"↑ HDL 5-10%, ↓ TG 10-20%."},

{etapa:"inicial", d:"CESSAR TABAGISMO + álcool moderado (excesso ↑ TG) + manejar DM/HAS/IRC concomitantes", o:"Tabagismo é fator de risco maior — cessar tem benefício enorme."},

{etapa:"escala", d:"⚠ ESTATINAS são 1ª LINHA — reduzem LDL 30-60% e desfechos CV (NNT 50-100 em prevenção 1ª, 25-50 em 2ª)", o:""},

{etapa:"escala", d:"ALTA POTÊNCIA (LDL ↓ ≥50%): ATORVASTATINA 40-80 mg/d OU ROSUVASTATINA 20-40 mg/d", o:"Indicação: risco MUITO ALTO ou ALTO. Padrão em prevenção 2ária (pós-IAM, AVC, DAOP)."},

{etapa:"escala", d:"MODERADA POTÊNCIA (LDL ↓ 30-50%): ATORVASTATINA 10-20 mg/d OU ROSUVASTATINA 5-10 mg/d OU SINVASTATINA 20-40 mg/d", o:"Indicação: risco INTERMEDIÁRIO. Sinvastatina é opção SUS."},

{etapa:"escala", d:"BAIXA POTÊNCIA: SINVASTATINA 10 mg/d, PRAVASTATINA 10-20 mg/d, FLUVASTATINA 20-40 mg/d", o:"Raramente usada — apenas em paciente com baixo risco + intolerância à dose maior."},

{etapa:"escala", d:"EXEMPLO 1 (pós-IAM, LDL alvo <50): ATORVASTATINA 40-80 mg VO 1×/d", o:"Reavaliar 6-8 sem. Se não atingir <50: somar ezetimiba 10 mg → se ainda não: PCSK9."},

{etapa:"escala", d:"EXEMPLO 2 (DM2 + alto RCV, LDL alvo <70): ROSUVASTATINA 20 mg VO 1×/d", o:"Vantagem: T½ longa. Em DM2 estatina é PADRÃO independente do LDL basal."},

{etapa:"escala", d:"EXEMPLO 3 (prevenção 1ª, RCV intermediário): SINVASTATINA 20-40 mg VO À NOITE", o:"Sinvastatina deve ser tomada à noite — biossíntese de colesterol é noturna. Atorva/rosuva: qualquer hora."},

{etapa:"escala", d:"⚠ SE LDL acima do alvo após DOSE MÁXIMA de estatina tolerada: ADICIONAR EZETIMIBA 10 mg/d (reduz LDL adicional 18-22%)", o:"IMPROVE-IT trial: ezetimiba + estatina REDUZIU desfechos CV vs estatina isolada em pós-SCA. PADRÃO em 2ª linha."},

{etapa:"escala", d:"SE AINDA fora do alvo: INIBIDOR PCSK9 (Evolocumabe/Repatha 140 mg SC 2/2sem OU Alirocumabe/Praluent 75-150 mg SC 2/2sem)", o:"Reduz LDL adicional 50-60%. Disponibilidade: privada/seguro/judicialização SUS. FOURIER, ODYSSEY OUTCOMES."},

{etapa:"escala", d:"INCLISIRAN (Leqvio): siRNA SC 2×/ano após dose de carga. Não disponível Brasil 2025/2026", o:"Aprovado FDA/EMA. Aguardando disponibilidade BR."},

{etapa:"escala", d:"ÁCIDO BEMPEDOICO (Nexletol — não disponível BR 2025/2026): VO, reduz LDL 17-25%. Útil em intolerância a estatina", o:"CLEAR Outcomes — redução modesta de desfechos."},

{etapa:"adj", d:"⚠ HIPERTRIGLICERIDEMIA grave (TG ≥500): risco PANCREATITE AGUDA — TRATAR mesmo sem alto RCV", o:""},

{etapa:"adj", d:"TG 150-499 (leve-moderada): otimizar MEV + estatina (alvo principal ainda é LDL/não-HDL)", o:"Não-HDL alvo = LDL alvo + 30. Em alto RCV + TG ≥150 em uso de estatina: REDUCE-IT — considerar icosapent etil."},

{etapa:"adj", d:"TG 500-1000: FENOFIBRATO 160-200 mg/d + ômega-3 4 g/d + MEV (peso, álcool zero, DM controlado, dieta low-carb leve)", o:"Risco pancreatite. Avaliar causa 2ária (DM descompensado, álcool, hipotireoidismo, drogas)."},

{etapa:"adj", d:"TG >1000 (extremo, risco iminente de pancreatite): FENOFIBRATO + ômega-3 + insulina (se DM) + dieta restritiva, álcool ZERO. Casos extremos: plasmaférese", o:"Encaminhar endocrino. Investigar causa familiar (deficiência LPL, ApoCII)."},

{etapa:"adj", d:"NÃO COMBINAR GEMFIBROZILA com estatina (rabdomiólise 15× maior). FENOFIBRATO + estatina é aceitável MAS monitor CK", o:"Gemfibrozila praticamente não usada mais."},

{etapa:"adj", d:"HDL BAIXO (<40 H, <50 M) ISOLADO: NÃO há droga eficaz para ↑ HDL e reduzir desfechos CV", o:"Foco: MEV (atividade física, perda peso, cessar tabagismo, álcool moderado). HDL baixo é MARCADOR de risco, não alvo terapêutico."},

{etapa:"adj", d:"⚠ Suspeitar HIPERCOLESTEROLEMIA FAMILIAR se: LDL >190 sem causa 2ária OU LDL >160 + DCV precoce familiar OU xantomas/arco corneano <45a", o:"Prevalência 1:250 (heterozigota). RASTREAR FAMILIARES de 1º grau."},

{etapa:"adj", d:"HF heterozigota: estatina ALTA POTÊNCIA precoce + ezetimiba + frequentemente PCSK9 (LDL <70 em prevenção 1ª, <50 em 2ª)", o:"Início de tratamento desde 8-10 anos em casos selecionados."},

{etapa:"adj", d:"HF homozigota (raríssimo): LDL >500, DAC antes dos 20 anos. Tratamento: PCSK9 + aférese LDL + lomitapida + evinacumab", o:"Encaminhar centro de referência."},

{etapa:"adj", d:"DM2 + DISLIPIDEMIA: estatina é PADRÃO independente do LDL basal. Alvo LDL <70 (alto) ou <50 (muito alto). Considerar SGLT-2/GLP-1", o:"DBHA/SBD 2025: pacote integrado HAS + DM + dislipidemia = redução máxima de mortalidade CV."},

{etapa:"adj", d:"IRC + DISLIPIDEMIA: estatina em TFG ≥30 (atorvastatina, fluvastatina — não excretadas renalmente). TFG <30 sem diálise: dose baixa-moderada. DIÁLISE: NÃO iniciar (4D trial)", o:"KDIGO 2024."},

{etapa:"adj", d:"GESTAÇÃO + DISLIPIDEMIA: ESTATINAS CONTRAINDICADAS (categoria X). Suspender pré-concepção. MEV + ômega-3 + colestiramina (resina, segura) se necessário", o:"Hipertrigliceridemia grave na gestação: insulina + dieta + plasmaférese."},

{etapa:"adj", d:"IDOSO ≥75 anos: estatina em prevenção 1ª — decisão compartilhada. Em prevenção 2ária: manter. Reduzir dose se intolerância", o:"Avaliar fragilidade + expectativa de vida."},

{etapa:"adj", d:"INTOLERÂNCIA A ESTATINA (mialgia, ↑CK): (1) confirmar com washout + reintrodução; (2) trocar de estatina (rosuvastatina geralmente melhor tolerada); (3) reduzir dose; (4) dose em dias alternados; (5) ezetimiba isolada; (6) PCSK9", o:"Verdadeira intolerância 1-5%. Efeito 'nocebo' significativo."},

{etapa:"alta", d:"⚠ METAS DE LDL — SBC 2017 + AHA 2018 + ESC 2019", o:""},

{etapa:"alta", d:"MUITO ALTO RCV: LDL <50 mg/dL (ESC: <40). Não-HDL <80. ApoB <65", o:"DCV estabelecida, DM com LOA, IRC TFG <30, HF com evento."},

{etapa:"alta", d:"ALTO RCV: LDL <70 mg/dL. Não-HDL <100. ApoB <80", o:"DM ≥10a, IRC G3, LDL 160-189, múltiplos FRCV."},

{etapa:"alta", d:"INTERMEDIÁRIO: LDL <100. Não-HDL <130", o:"1-2 FRCV ou escore 5-20%."},

{etapa:"alta", d:"BAIXO: LDL <130", o:"Sem FRCV maiores."},

{etapa:"alta", d:"SEGUIMENTO: perfil lipídico 4-12 sem após início/troca. Após meta: anual", o:"Aderência sempre. Reforçar MEV."},

{etapa:"alta", d:"MONITOR LABORATORIAL: TGO/TGP basal + 8-12 sem + anual. CK apenas se sintomas. NÃO monitorar de rotina sem sintomas", o:"↑ TGO/TGP até 3× LSN sem sintomas: manter. >3× LSN: investigar/suspender."},

{etapa:"alta", d:"PRÓXIMOS PASSOS — encaminhamento: (1) hipercolesterolemia familiar suspeita; (2) hipertrigliceridemia refratária; (3) intolerância a múltiplas estatinas; (4) PCSK9 com dificuldade de acesso", o:"Cardiologia, endocrinologia ou ambulatório especializado."},
],

alertas:[
{nivel:"crit", txt:"HIPERTRIGLICERIDEMIA grave (TG >500-1000): RISCO PANCREATITE AGUDA. Tratar mesmo sem outro RCV. Fenofibrato + ômega-3 + MEV agressiva."},
{nivel:"crit", txt:"GESTAÇÃO: ESTATINAS CONTRAINDICADAS (categoria X). Suspender 3 meses pré-concepção."},
{nivel:"crit", txt:"NUNCA combinar GEMFIBROZILA com ESTATINA — rabdomiólise 15× maior. Fenofibrato + estatina é aceitável MAS monitor CK."},
{nivel:"crit", txt:"SINVASTATINA 80 mg: CONTRAINDICADA (FDA 2011 — risco miopatia 4× maior). Limitar a 40 mg/d. Se LDL alvo não atingido: TROCAR estatina."},
{nivel:"warn", txt:"TRATAMENTO NÃO É POR NÚMERO ISOLADO. Estratificar RCV ANTES de iniciar — alvo varia conforme risco."},
{nivel:"warn", txt:"INTERAÇÃO crítica: sinvastatina/lovastatina + diltiazem/verapamil/eritromicina/itraconazol = ↑ estatina (rabdomiólise). Em paciente com BCC não-DHP: rosuvastatina ou pravastatina."},
{nivel:"warn", txt:"DCV estabelecida: NÃO há LDL muito baixo — quanto menor, menor o risco (IMPROVE-IT, FOURIER, ODYSSEY)."},
{nivel:"warn", txt:"INTOLERÂNCIA A ESTATINA: confirmar com washout + reexposição. Efeito NOCEBO significativo (até 30% das queixas)."},
{nivel:"info", txt:"NÃO-HDL é alvo SECUNDÁRIO útil em TG alto. Não-HDL alvo = LDL alvo + 30."},
{nivel:"info", txt:"ÔMEGA-3 OTC genérico NÃO tem evidência CV. Apenas ICOSAPENT ETIL (Vascepa, não BR) reduz MACE (REDUCE-IT)."},
],

fluxo:null,
diretriz:"Atualização SBC Dislipidemia 2017. AHA/ACC 2018 + 2022. ESC 2019. KDIGO 2024. IMPROVE-IT. FOURIER. ODYSSEY OUTCOMES. REDUCE-IT. FIELD."
},

);
