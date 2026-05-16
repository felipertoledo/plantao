/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — PATOLOGIA HAS (DBHA 2025)
   Hipertensão Arterial Sistêmica — abordagem completa
   conforme Diretriz Brasileira 2025 (SBC/SBH/SBN)
   =========================================================== */

PATOLOGIAS.push(

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

);
