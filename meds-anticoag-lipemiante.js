/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — meds/anticoag-lipemiante.js
   12 medicações
   Grupos: anticoag, lipemiante
   =========================================================== */

MEDICACOES.push(

/* ============== ANTICOAG (5) ============== */

{id:"med-apixabana", contexto:["pa","ubs"], classe:"DOAC — inibidor direto do fator Xa", grupo:"anticoag",
nome:"Apixabana",
sin:["Eliquis"],
formas:["Comprimido 2,5 mg, 5 mg","⚠ NÃO REMUME / NÃO CEAF — particular (custo alto)"],
resumo:"⚠ DOAC anti-Xa — INIBIDOR DIRETO. ⚠ PERFIL MAIS SEGURO entre DOACs (menor risco de hemorragia GI, melhor em IRC moderada — TFG até 30, considerada em alguns casos com TFG 15-29). PERFIL CARDIOPROTETOR similar à rivaroxabana com MENOS efeitos adversos. ⚠ Desvantagem para Brasil: NÃO ESTÁ NO SUS — custo alto, acesso limitado.",
dose_rapida:"FA: 5 mg 12/12h (2,5 mg se ≥2 critérios redução); TVP/TEP: 10 mg 12/12h × 7d → 5 mg 12/12h",
doses:[
{ind:"⚠ FA NÃO VALVAR — prevenção AVC", dose:"5 mg VO 12/12h. ⚠ REDUZIR PARA 2,5 mg 12/12h se ≥2 dos seguintes: idade ≥80a, peso ≤60 kg, creatinina ≥1,5 mg/dL", obs:"⚠ NÃO USAR em FA VALVAR."},
{ind:"⚠ TVP / TEP — tratamento inicial", dose:"10 mg VO 12/12h × 7 DIAS, depois 5 mg 12/12h × 3-6 meses", obs:""},
{ind:"⚠ TVP / TEP — prevenção secundária", dose:"2,5 mg VO 12/12h (após 6 meses) — extensão indefinida em alto risco recorrência", obs:""},
{ind:"⚠ Profilaxia pós-cirurgia ortopédica (artroplastia quadril/joelho)", dose:"2,5 mg VO 12/12h, iniciar 12-24h pós-op. Duração 35d (quadril) / 12d (joelho)", obs:""},
],
ajustes:{
irc:"⚠ TFG 15-29: usar com CAUTELA (dose padrão 5 mg 12/12h, ou ajustar 2,5 mg conforme critérios). TFG <15 ou HD: dados muito limitados — geralmente evitar.",
iht:"⚠ Child B: cautela. Child C: NÃO USAR.",
idoso:"⚠ Reduzir conforme critérios (≥80a + outro fator)",
gestante:"⚠ ⚠ EVITAR",
aleita:"⚠ Evitar",
ped:"⚠ Não aprovado <18a (algumas indicações pediátricas em estudo)",
},
mecanismo:"INIBE FATOR Xa DIRETAMENTE (livre + complexo).",
farmacocin:{
absorc:"VO ~50% — não precisa alimento",
distrib:"Ampla",
metab:"Hepático CYP3A4 + GP-P (parcial)",
elimin:"⚠ Renal apenas 27% (MENOR que rivaroxabana — vantagem em IRC moderada) + fecal predominante",
meiavida:"~12h (2×/d)",
ligacao:"~87%",
},
ef_colats:{
comuns:["Sangramento","Anemia","Náusea"],
sérios:["⚠ Hemorragia — taxa GERAL e GI MENOR que outros DOACs em meta-análises","Hemorragia espinhal","Reações alérgicas"],
},
interacoes:["⚠ Inibidores potentes CYP3A4+GP-P (cetoconazol, ritonavir): ↑↑ apixabana","Indutores (rifampicina, fenitoína, carbamazepina): ↓↓","AAS, AINE","Outros anticoagulantes"],
contraindicacoes:["FA valvar","Sangramento ativo","Lesão alto risco","IH grave","Gestação","Hipersensibilidade"],
monit:["Função renal","Sangramento","Hemoglobina"],
gravidez:"⚠ (evitar)",
sus:"⚠ ⚠ NÃO REMUME — particular",
referencias:["ARISTOTLE; AMPLIFY; ACC/AHA."],
},
{id:"med-dabigatrana", contexto:["pa","ubs"], classe:"DOAC — inibidor direto da trombina (fator IIa)", grupo:"anticoag",
nome:"Dabigatrana etexilato",
sin:["Pradaxa"],
formas:["Cápsula 75 mg, 110 mg, 150 mg","⚠ NÃO REMUME — particular"],
resumo:"⚠ ÚNICO DOAC INIBIDOR DIRETO DA TROMBINA (Fator IIa). VANTAGEM EXCLUSIVA: TEM ANTÍDOTO ESPECÍFICO — IDARUCIZUMABE (Praxbind) — reverte em minutos em sangramento grave / cirurgia de emergência. ⚠ Desvantagem: dispepsia frequente (até 25%), eliminação predominantemente renal (não usar em IRC grave), cápsulas não podem ser abertas.",
dose_rapida:"FA: 150 mg 12/12h (110 mg se ≥80a ou alto risco); TVP/TEP: 150 mg 12/12h após heparina inicial",
doses:[
{ind:"⚠ FA NÃO VALVAR", dose:"150 mg VO 12/12h. ⚠ Reduzir para 110 mg 12/12h se: ≥80a OU alto risco hemorragia (HAS-BLED ≥3) OU uso de verapamil", obs:"⚠ NÃO em FA valvar."},
{ind:"⚠ TVP / TEP", dose:"⚠ HEPARINA (HBPM ou HNF) × 5-10 DIAS, depois 150 mg VO 12/12h × 3-6 meses", obs:"⚠ Diferença dos anti-Xa: dabigatrana REQUER HEPARINA INICIAL (não atinge nível terapêutico rápido)."},
{ind:"⚠ Profilaxia pós-cirurgia ortopédica", dose:"110 mg 1-4h pós-op, depois 220 mg 1×/d × 28-35d (quadril) ou 10d (joelho)", obs:""},
],
ajustes:{
irc:"⚠ ⚠ TFG 30-50: 110 mg 12/12h. TFG <30: ⚠ ⚠ NÃO USAR (Brasil/EU; FDA permite 75 mg em TFG 15-30 — controverso). HD: contraindicada.",
iht:"⚠ IH grave: contraindicada",
idoso:"⚠ ≥80a: 110 mg 12/12h. Avaliar TFG rigorosamente.",
gestante:"⚠ EVITAR",
aleita:"⚠ Evitar",
ped:"Não aprovada rotineira",
},
mecanismo:"⚠ PRO-DROGA — hidrolisada a DABIGATRANA → INIBE DIRETAMENTE A TROMBINA (Fator IIa) livre + ligada ao coágulo → bloqueia conversão fibrinogênio → fibrina.",
farmacocin:{
absorc:"⚠ VO ~6-7% (BAIXA — explica dose alta). Não com IBP de forma crônica em estômago vazio (↓ absorção mais relevante neste DOAC).",
distrib:"Ampla",
metab:"Mínimo CYP — substrato GP-P",
elimin:"⚠ ⚠ RENAL ~80% (predominante — explica restrição em IRC)",
meiavida:"~12-17h",
ligacao:"~35%",
},
ef_colats:{
comuns:["⚠ DISPEPSIA / pirose / dor abdominal — em até 25% (mais frequente que outros DOACs)","Sangramento","Anemia","Náusea"],
sérios:["⚠ Hemorragia — maior risco GI que warfarina em alguns estudos","Hemorragia espinhal","IAM (controverso — sinal nominal em meta-análises)","Hipersensibilidade"],
},
interacoes:["⚠ INIBIDORES GP-P (verapamil, amiodarona, dronedarona, claritromicina, cetoconazol, dronedarona): ↑ dabigatrana","⚠ INDUTORES GP-P (rifampicina, erva-de-são-joão): ↓ dabigatrana","AAS, AINE","Outros anticoagulantes","⚠ IBP CRÔNICO: pode ↓ absorção (efeito modesto)"],
contraindicacoes:["⚠ TFG <30","FA valvar","Sangramento ativo","Lesão alto risco","IH grave","Prótese valvar mecânica (FALHA em RE-ALIGN trial — proibida)","Gestação","Hipersensibilidade"],
monit:["⚠ Função renal — basal + cada 6 meses ou mais frequente","Hemoglobina","Sintomas GI (dispepsia frequente — pode tomar com alimento)"],
gravidez:"C (evitar)",
sus:"⚠ NÃO REMUME — particular",
referencias:["RE-LY; ACC/AHA; ⚠ RE-ALIGN (falha em prótese mecânica)."],
},
{id:"med-edoxabana", contexto:["pa","ubs"], classe:"DOAC — inibidor direto do fator Xa", grupo:"anticoag",
nome:"Edoxabana",
sin:["Lixiana","Savaysa"],
formas:["Comprimido 15 mg, 30 mg, 60 mg","⚠ NÃO REMUME — particular"],
resumo:"⚠ DOAC anti-Xa — POSOLOGIA SIMPLES (1×/d). Indicado em FA não-valvar + TVP/TEP. ⚠ PARTICULARIDADE: NÃO USAR em paciente com TFG >95 mL/min/1,73m² (FA) — eficácia reduzida (vs warfarina). Menos usado no Brasil que rivaroxabana/apixabana.",
dose_rapida:"60 mg/d (30 mg se ≥1 critério redução)",
doses:[
{ind:"⚠ FA NÃO VALVAR", dose:"60 mg VO 1×/d. ⚠ Reduzir para 30 mg/d se: TFG 15-50 OU peso ≤60 kg OU uso concomitante de inibidor GP-P (verapamil, dronedarona, claritromicina)", obs:"⚠ ⚠ NÃO USAR se TFG >95 (paradoxalmente — eficácia reduzida vs warfarina, ENGAGE AF-TIMI)."},
{ind:"⚠ TVP / TEP", dose:"⚠ HEPARINA × 5-10 DIAS, depois 60 mg VO 1×/d × 3-6 meses (30 mg/d se critério redução)", obs:""},
],
ajustes:{
irc:"⚠ TFG 15-50: 30 mg/d. TFG >95: ⚠ EVITAR em FA (eficácia inferior à warfarina). TFG <15: NÃO USAR.",
iht:"⚠ IH moderada-grave: NÃO USAR",
idoso:"⚠ Reduzir conforme critérios",
gestante:"⚠ EVITAR",
aleita:"⚠ Evitar",
ped:"Não aprovada",
},
mecanismo:"INIBE FATOR Xa DIRETAMENTE.",
farmacocin:{
absorc:"VO ~62% — sem efeito de alimento",
distrib:"Ampla",
metab:"Mínimo CYP — substrato GP-P",
elimin:"Renal ~50% + fecal",
meiavida:"~10-14h",
ligacao:"~55%",
},
ef_colats:{
comuns:["Sangramento","Anemia","Rash","Cefaleia"],
sérios:["⚠ Hemorragia","⚠ Eficácia reduzida em FA com TFG >95 (clearance renal alto)","Hepatotoxicidade","Reações alérgicas"],
},
interacoes:["Inibidores GP-P (verapamil, dronedarona, claritromicina, cetoconazol, ritonavir): ↑ edoxabana","Indutores (rifampicina): ↓","AAS, AINE","Outros anticoagulantes"],
contraindicacoes:["FA valvar","TFG <15","⚠ FA com TFG >95","Sangramento ativo","IH moderada-grave","Lesão alto risco","Gestação","Hipersensibilidade"],
monit:["Função renal","Sangramento","Hemoglobina"],
gravidez:"C (evitar)",
sus:"⚠ NÃO REMUME — particular",
referencias:["ENGAGE AF-TIMI 48; HOKUSAI-VTE; ACC/AHA."],
},
{id:"med-enoxaparina", contexto:["pa","ubs"], classe:"Anticoagulante — HBPM (heparina baixo peso molecular)", grupo:"anticoag",
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
{id:"med-rivaroxabana", contexto:["pa","ubs"], classe:"DOAC — inibidor direto do fator Xa", grupo:"anticoag",
nome:"Rivaroxabana",
sin:["Xarelto"],
formas:["Comprimido 2,5 mg, 10 mg, 15 mg, 20 mg","⚠ CEAF (PCDT-MS FA não valvar idoso ≥75a) — fora deste perfil: particular"],
resumo:"⚠ DOAC ORAL — INIBE FATOR Xa DIRETAMENTE. INDICAÇÕES: FA não-valvar (prevenção AVC), TVP/TEP (tratamento + prevenção secundária), profilaxia em ortopedia (joelho/quadril), doença arterial coronariana/periférica em dose baixa. VANTAGEM SOBRE WARFARINA: efeito previsível, sem monitoração de INR, menos interações, menos AVC hemorrágico. ⚠ DESVANTAGEM: SEM ANTÍDOTO AMPLAMENTE DISPONÍVEL no SUS (andexanet alfa restrito), CUSTO ALTO (CEAF apenas em PCDT específico), AJUSTE em IRC.",
dose_rapida:"FA: 20 mg/d (15 mg se TFG 15-49); TVP/TEP: 15 mg 12/12h × 21d → 20 mg/d",
doses:[
{ind:"⚠ FA NÃO VALVAR — prevenção AVC (CHA₂DS₂-VASc ≥2 homem / ≥3 mulher)", dose:"20 mg VO 1×/d COM ALIMENTO ad lib", obs:"⚠ Reduzir para 15 mg/d se TFG 15-49. ⚠ ⚠ NÃO USAR em FA VALVAR (estenose mitral moderada-grave, prótese valvar mecânica) — warfarina obrigatória."},
{ind:"⚠ TVP / TEP — fase de tratamento INICIAL", dose:"15 mg VO 12/12h × 21 DIAS, depois 20 mg VO 1×/d × 3-6 meses (ou indefinido)", obs:"⚠ Não precisa heparina inicial (vantagem sobre warfarina). Iniciar imediatamente após diagnóstico."},
{ind:"⚠ TVP / TEP — prevenção secundária (após 6 meses)", dose:"10 mg VO 1×/d (extensão indefinida) OU 20 mg/d se alto risco recorrência", obs:""},
{ind:"⚠ Profilaxia pós-cirurgia ortopédica (artroplastia quadril, joelho)", dose:"10 mg VO 1×/d, iniciar 6-10h pós-operatório. Duração: 35 dias (quadril) ou 14 dias (joelho)", obs:""},
{ind:"⚠ DAC / DAP estável — em ASSOCIAÇÃO com AAS dose baixa (COMPASS)", dose:"2,5 mg VO 12/12h + AAS 100 mg/d", obs:"⚠ Cardiologia/vascular. Reduz eventos CV em DAC/DAP estável mas ↑ risco hemorragia. Decisão compartilhada."},
],
ajustes:{
irc:"⚠ ⚠ AJUSTE OBRIGATÓRIO. TFG 15-49: 15 mg/d (FA) / dose habitual com cautela (TVP/TEP). TFG <15 ou HD: ⚠ NÃO USAR — preferir warfarina.",
iht:"⚠ Child B/C: NÃO USAR — coagulopatia + acúmulo",
idoso:"⚠ Risco hemorragia aumentado. Avaliar HAS-BLED. Ajustar pela função renal.",
gestante:"⚠ ⚠ C — EVITAR. Atravessa placenta. Em gestação com indicação anticoag: enoxaparina é padrão.",
aleita:"⚠ Evitar — passa pelo leite",
ped:"⚠ Não aprovado <18a (alguns estudos pediátricos em curso para uso específico)",
},
mecanismo:"⚠ INIBE DIRETAMENTE o FATOR Xa (livre + complexo protrombinase) → bloqueia conversão protrombina → trombina → bloqueia coagulação. NÃO depende de antitrombina (diferença de heparina).",
farmacocin:{
absorc:"VO ~80-100% — ⚠ DOSES ≥15 mg COM ALIMENTO (absorção ↑). 10 mg pode ser sem alimento.",
distrib:"Ampla",
metab:"Hepático CYP3A4 + glicoproteína P",
elimin:"⚠ Renal 36% (importante para ajuste IRC) + fecal",
meiavida:"~5-9h (idoso 11-13h)",
ligacao:"~92-95%",
},
ef_colats:{
comuns:["Sangramento (variável — leve a grave)","Anemia","Náusea","Cefaleia","Tontura"],
sérios:["⚠ ⚠ HEMORRAGIA MAIOR — GI, intracraniana, urinária, retroperitoneal. Risco menor que warfarina em AVC hemorrágico, similar/maior em GI.","⚠ Hemorragia espinhal/epidural em paciente com PUNÇÃO LOMBAR / ANESTESIA NEURAXIAL — protocolo de suspensão pré-procedimento","Trombose paradoxal em suspensão abrupta sem ponte","Reações alérgicas (raro)"],
},
interacoes:["⚠ ⚠ INIBIDORES POTENTES CYP3A4 + GP-P (cetoconazol, itraconazol, ritonavir): ↑↑ rivaroxabana — CONTRAINDICADO","⚠ INDUTORES POTENTES (rifampicina, fenitoína, carbamazepina, fenobarbital, erva-de-são-joão): ↓↓ — CONTRAINDICADO ou cautela","⚠ ⚠ AAS + AINE: hemorragia somativa","⚠ Outros anticoagulantes: NÃO ASSOCIAR (exceto em transição planejada)","Antiplaquetários (clopidogrel): hemorragia","Fluconazol em dose alta: ↑ rivaroxabana"],
contraindicacoes:["⚠ ⚠ FA VALVAR (estenose mitral moderada-grave, prótese mecânica)","⚠ Sangramento ativo","⚠ Lesão com alto risco hemorrágico (úlcera GI ativa, neoplasia GI/urológica/pulmonar sangrando, varizes esofagianas, AVC hemorrágico recente)","⚠ IH grave (Child B/C)","⚠ TFG <15 / HD","Gestação, lactação","Hipersensibilidade","Punção neuraxial recente (cateter epidural)"],
monit:["⚠ Função renal — basal + a cada 6-12 meses (mais frequente em idoso/IRC)","⚠ Função hepática basal","Hemoglobina, sinais de sangramento","Adesão (sem INR — paciente pode achar 'não precisa nada')","HAS-BLED em paciente novo"],
gravidez:"⚠ C (evitar)",
sus:"⚠ ⚠ CEAF — PCDT-MS específico (FA não valvar em idoso ≥75a, em alguns Estados). Fora deste perfil: particular ou judicialização.",
referencias:["⚠ PCDT-MS FA; ROCKET-AF; EINSTEIN; COMPASS; ACC/AHA Guidelines."],
},

/* ============== LIPEMIANTE (7) ============== */

{id:"med-atorvastatina", contexto:["pa","ubs"], classe:"Estatina de alta potência (2ª geração)", grupo:"lipemiante",
nome:"Atorvastatina",
sin:["Lipitor","Citalor","Vastiri"],
formas:["Comprimidos 10, 20, 40, 80 mg — privada/SUS via PCDT (CEAF em alguns estados)","Combinação fixa: atorvastatina + ezetimiba"],
resumo:"Estatina de ALTA potência. ↓ LDL 40-60% (40-80 mg). PADRÃO em alto/muito alto RCV. Disponível SUS via PCDT (LDL ≥130 em alto RCV apesar de sinvastatina).",
dose_rapida:"10-80 mg VO 1×/d (qualquer horário — T½ longa)",

doses:[
{ind:"Prevenção secundária / muito alto RCV (DAC, AVC, DAOP, DM+DCV)", dose:"40-80 mg VO 1×/d", obs:"Meta LDL <55 mg/dL (DBHA/SBC 2017/AHA 2018). TNT, IDEAL trials — 80 mg superior em redução de eventos."},
{ind:"Prevenção primária / alto RCV (DM2 + LOA, HF, HAS+LOA múltipla)", dose:"20-40 mg/d", obs:"Meta LDL <70 mg/dL."},
{ind:"Prevenção primária / RCV moderado", dose:"10-20 mg/d", obs:"Meta LDL <100 mg/dL ou redução 30-50%."},
{ind:"Hipercolesterolemia familiar heterozigótica", dose:"40-80 mg/d", obs:"Frequentemente combinada com ezetimiba ± iPCSK9 (alirocumabe, evolocumabe)."},
{ind:"Pediatria — HF heterozigótica ≥10 anos", dose:"10-40 mg/d", obs:"Especialista."},
],

ajustes:{
irc:"Sem ajuste rotineiro (90% biliar). Útil em DRC (vs rosuvastatina).",
iht:"Hepatopatia ativa: CONTRAINDICADA. IH crônica: cautela.",
idoso:"Iniciar 10-20 mg.",
gestante:"CATEGORIA X — CONTRAINDICADA.",
aleita:"CONTRAINDICADA.",
ped:"HF heterozigótica ≥10a: 10-40 mg/d.",
},

mecanismo:"Mesmo das outras estatinas — inibe HMG-CoA redutase. Atorvastatina tem metabólito ativo (orto e para-hidroxi-atorvastatina) com T½ longa → cobertura 24h e dosagem em qualquer horário (vantagem vs sinvastatina).",

farmacocin:{
absorc:"VO: 14% (boa biodisponibilidade)",
distrib:"Hepatosseletiva",
metab:"Hepático CYP3A4 → metabólitos ATIVOS",
elimin:"Biliar (90%) — vantagem em IRC",
meiavida:"14h (metabólitos ativos 20-30h)",
ligacao:">98%",
},

espectro:["Prevenção secundária CV (1ª escolha em alta potência)","Alto/muito alto RCV","HF heterozigótica","DM2 + alto RCV","Pós-SCA (carga de 80 mg pré-PCI — PROVE-IT)"],

interacoes:[
{droga:"Inibidores potentes CYP3A4 (claritromicina, itraconazol)", efeito:"↑ atorvastatina — limitar a 20 mg/d ou suspender durante."},
{droga:"Ciclosporina", efeito:"↑ atorvastatina 6-8× — limitar a 10 mg/d."},
{droga:"Gemfibrozila", efeito:"↑ risco rabdomiólise — preferir fenofibrato."},
{droga:"Suco de pomelo", efeito:"↑ atorvastatina (menos que sinvastatina) — moderar consumo."},
{droga:"Digoxina", efeito:"Atorvastatina ↑ digoxina ~20%."},
{droga:"Anticoncepcionais orais", efeito:"Atorvastatina ↑ etinilestradiol/noretindrona ~20%."},
],

efeitos:[
{tipo:"comum", item:"Mialgia (5-10%, semelhante outras estatinas), ↑ leve TGO/TGP, cefaleia, dispepsia"},
{tipo:"sério", item:"Rabdomiólise (rara), hepatotoxicidade, miopatia inflamatória autoimune"},
{tipo:"raro", item:"↑ glicemia/DM2 de novo, declínio cognitivo (controverso)"},
],

alertas:[
{nivel:"crit", txt:"ALTA POTÊNCIA: 40-80 mg reduz LDL 50-60% — superior à sinvastatina. PADRÃO em alto/muito alto RCV (especialmente prevenção secundária)."},
{nivel:"crit", txt:"GESTAÇÃO: CONTRAINDICADA (categoria X). Suspender pré-concepção."},
{nivel:"warn", txt:"DOSE 80 mg: maior eficácia mas ↑ risco EA. Reservar para pacientes que NÃO atingem meta com 40 mg + ezetimiba."},
{nivel:"warn", txt:"PCDT SUS: disponível para prevenção secundária em paciente com DAC/AVC/DAOP + LDL ≥70 apesar de sinvastatina 40 mg, OU prevenção primária com HF ou DM+LOA."},
{nivel:"info", txt:"PÓS-SCA: PROVE-IT trial — atorvastatina 80 mg vs pravastatina 40 mg = redução 16% de eventos CV. Iniciar carga pré-PCI/STEMI."},
{nivel:"info", txt:"VANTAGEM VS ROSUVASTATINA: melhor em IRC (sem necessidade ajuste). VS SINVASTATINA: menos interações relevantes, maior potência."},
],

preparo:"VO comprimido, qualquer horário (T½ longa). Com ou sem alimento.",
monitor:"Perfil lipídico basal + 6-12 sem após início/ajuste + anual. TGO/TGP basal + se sintomas. CK se mialgia. HbA1c em DM2.",
diretriz:"SBC Dislipidemia 2017. AHA/ACC 2018. PCDT MS Dislipidemia. TNT trial. PROVE-IT.",
fluxo:null, calcs:[],
},
{id:"med-ciprofibrato", contexto:["pa","ubs"], classe:"Fibrato — agonista PPAR-α", grupo:"lipemiante",
nome:"Ciprofibrato",
sin:["Lipless","Oroxadin"],
formas:["Comprimidos 100 mg — privada"],
resumo:"Fibrato com meia-vida MAIS LONGA (40-50h, vs fenofibrato 20h). Posologia 1×/d. Boa redução de TG 30-50%. Menos usado que fenofibrato.",
dose_rapida:"100 mg VO 1×/d",

doses:[
{ind:"Hipertrigliceridemia grave", dose:"100 mg VO 1×/d", obs:"Alternativa ao fenofibrato. Não exige refeição (ao contrário do fenofibrato não-micronizado)."},
],

ajustes:{
irc:"ClCr 30-60: 100 mg em dias alternados. ClCr <30: CONTRAINDICADO.",
iht:"IH grave: contraindicado.",
idoso:"Cautela.",
gestante:"Evitar.",
aleita:"Evitar.",
ped:"Não recomendado.",
},

mecanismo:"Idêntico ao fenofibrato — agonista PPAR-α.",

farmacocin:{absorc:"VO: boa", distrib:"Ampla", metab:"Hepático", elimin:"Renal", meiavida:"40-50h (a maior entre fibratos)", ligacao:">99%"},

espectro:["Hipertrigliceridemia grave"],

interacoes:[{droga:"Mesmas do fenofibrato", efeito:"Estatina, varfarina, ciclosporina."}],

efeitos:[
{tipo:"comum", item:"Dispepsia, ↑ enzimas hepáticas, mialgia"},
{tipo:"sério", item:"Rabdomiólise, hepatotoxicidade"},
{tipo:"raro", item:"Pneumonite, colelitíase"},
],

alertas:[
{nivel:"warn", txt:"MEIA-VIDA LONGA (40-50h) — útil em paciente com dificuldade de aderência. Mas em caso de RA, demora a se resolver."},
{nivel:"info", txt:"Menos prescrito que fenofibrato no Brasil — fenofibrato tem maior evidência (FIELD, ACCORD)."},
],

preparo:"VO comprimido, com ou sem alimento.",
monitor:"Perfil lipídico, TGO/TGP, CK se sintomas.",
diretriz:"SBC Dislipidemia 2017.",
fluxo:null, calcs:[],
},
{id:"med-ezetimiba", contexto:["pa","ubs"], classe:"Inibidor da absorção intestinal de colesterol", grupo:"lipemiante",
nome:"Ezetimiba",
sin:["Ezetrol","Zetia"],
formas:["Comprimidos 10 mg — privada","Combinações fixas: ezetimiba + sinvastatina (Vytorin/Zetsim), ezetimiba + atorvastatina, ezetimiba + rosuvastatina"],
resumo:"Inibe absorção intestinal de colesterol (NPC1L1). Reduz LDL 15-25% adicional quando associada à estatina. IMPROVE-IT trial: redução de eventos CV em pós-SCA. 2ª linha clássica após estatina.",
dose_rapida:"10 mg VO 1×/d (sempre — única dose)",

doses:[
{ind:"DM/HAS/alto RCV com LDL não controlado por estatina máxima tolerada", dose:"10 mg VO 1×/d (qualquer horário)", obs:"Adicionar à estatina antes de pensar em iPCSK9. Reduz LDL ~20% adicional. IMPROVE-IT — reduz MACE em pós-SCA."},
{ind:"Intolerância à estatina (mialgia)", dose:"10 mg/d isolada", obs:"Eficácia inferior à estatina (LDL ↓ 15-20%), mas opção em quem não tolera. Considerar pravastatina dose baixa + ezetimiba antes de monoterapia."},
{ind:"Hipercolesterolemia familiar (combinada com estatina + iPCSK9)", dose:"10 mg/d", obs:"Esquema padrão em HF heterozigótica/homozigótica."},
{ind:"Sitosterolemia (doença rara — acúmulo de fitoesteróis)", dose:"10 mg/d", obs:"Indicação específica — mecanismo de NPC1L1 inibe absorção também de fitoesteróis."},
{ind:"Pediatria HF ≥10 anos", dose:"10 mg/d", obs:"Aprovada."},
],

ajustes:{
irc:"Sem ajuste rotineiro.",
iht:"IH moderada-grave: NÃO recomendada (estudos limitados).",
idoso:"Sem ajuste.",
gestante:"Sem dados — evitar (provavelmente categoria C, mas hipocolesterolemia gestacional é teoricamente prejudicial).",
aleita:"Evitar.",
ped:"≥10 anos: 10 mg/d.",
},

mecanismo:"Inibe seletivamente o transportador NPC1L1 (Niemann-Pick C1-like 1) na borda em escova do intestino → ↓ absorção de colesterol dietético + colesterol biliar → ↓ chegada ao fígado → ↑ expressão de receptores LDL → ↑ captação LDL plasmático. SINERGIA com estatinas: estatina ↓ síntese, ezetimiba ↓ absorção.",

farmacocin:{
absorc:"VO: bem absorvida + glucuronidação intestinal extensa → metabólito ATIVO (ezetimiba-glucuronídeo)",
distrib:"Recirculação enterohepática (T½ efetiva longa)",
metab:"Glucuronidação intestinal e hepática",
elimin:"Fezes (78%) + renal (11%)",
meiavida:"~22h (com recirculação)",
ligacao:">90%",
},

espectro:["Adjuvante à estatina (LDL não controlado)","Intolerância à estatina","Hipercolesterolemia familiar","Sitosterolemia"],

interacoes:[
{droga:"Ciclosporina", efeito:"↑ ezetimiba — monitor."},
{droga:"Colestiramina (sequestrante de ácidos biliares)", efeito:"↓ absorção ezetimiba — separar 2h antes ou 4h depois."},
{droga:"Fibratos", efeito:"Sem aumento significativo do risco de miopatia (vs estatina + fibrato)."},
{droga:"Varfarina", efeito:"Sem interação significativa."},
],

efeitos:[
{tipo:"comum", item:"Bem tolerada — perfil próximo ao placebo. Diarreia, dor abdominal, mialgia (rara), ↑ TGO/TGP leve"},
{tipo:"sério", item:"Rabdomiólise (raríssima, descrita em combinação com estatina), hepatite (rara), pancreatite (raríssima), reação alérgica"},
{tipo:"raro", item:"Angioedema"},
],

alertas:[
{nivel:"warn", txt:"IMPROVE-IT trial (NEJM 2015): ezetimiba + sinvastatina vs sinvastatina isolada em pós-SCA — REDUÇÃO 6% MACE em 7 anos. Modesto mas significativo. PRIMEIRA evidência de redução de desfechos com não-estatina."},
{nivel:"warn", txt:"ESQUEMA SBC/AHA: 'estatina máxima tolerada → + ezetimiba → + iPCSK9' (escalonamento). Cada degrau adiciona ~20% redução LDL."},
{nivel:"info", txt:"COMBINAÇÃO FIXA é PREFERENCIAL — melhor adesão. Disponíveis: sinva/eze, atorva/eze, rosuva/eze."},
{nivel:"info", txt:"PERFIL DE SEGURANÇA EXCELENTE — bem tolerada, mínimos EA. Pode ser usada em intolerância à estatina (eficácia menor mas alternativa válida)."},
{nivel:"info", txt:"NÃO afeta absorção de vitaminas lipossolúveis (vs colestiramina/sequestrantes — que afetam)."},
],

preparo:"VO comprimido, qualquer horário, com ou sem alimento.",
monitor:"Perfil lipídico basal + 6-12 sem após início + anual. TGO/TGP basal + 12 sem (especialmente em combinação com estatina).",
diretriz:"SBC Dislipidemia 2017. AHA/ACC 2018. IMPROVE-IT (NEJM 2015).",
fluxo:null, calcs:[],
},
{id:"med-fenofibrato", contexto:["pa","ubs"], classe:"Fibrato — agonista PPAR-α", grupo:"lipemiante",
nome:"Fenofibrato",
sin:["Lipanon","Lipidil","Tricor"],
formas:["Cápsulas/comprimidos 160 mg, 200 mg, 250 mg — privada","Forma micronizada (melhor absorção): 130, 145 mg — privada"],
resumo:"Fibrato — reduz TG 30-50%, ↑ HDL 10-20%. PRINCIPAL indicação: HIPERTRIGLICERIDEMIA grave (TG >500) para prevenir pancreatite. NÃO reduz mortalidade CV isolada.",
dose_rapida:"160-200 mg VO 1×/d (com refeição principal)",

doses:[
{ind:"HIPERTRIGLICERIDEMIA GRAVE (TG >500 mg/dL) — prevenção pancreatite", dose:"160-200 mg VO 1×/d com refeição", obs:"INDICAÇÃO PRINCIPAL. TG >1000 = risco iminente de pancreatite aguda."},
{ind:"Dislipidemia mista (após otimizar estatina)", dose:"160-200 mg/d + estatina", obs:"Em alto RCV com HDL baixo + TG alto, fenofibrato + estatina é razoável (ACCORD-Lipid — benefício em subgrupo TG ≥204 + HDL ≤34). NÃO usar gemfibrozila + estatina (rabdomiólise)."},
{ind:"Retinopatia diabética (off-label — ACCORD-Eye, FIELD)", dose:"160 mg/d", obs:"ACCORD-Eye demonstrou redução de progressão de retinopatia em DM2 — uso emergente."},
],

ajustes:{
irc:"ClCr 30-60: REDUZIR 50%. ClCr <30: CONTRAINDICADO (risco rabdomiólise).",
iht:"IH grave: CONTRAINDICADO.",
idoso:"Iniciar dose menor, monitor CK + Cr.",
gestante:"CATEGORIA C — evitar (sem dados de segurança).",
aleita:"Evitar.",
ped:"Não recomendado.",
},

mecanismo:"Agonista PPAR-α → ↑ lipoproteína lipase + ↓ apoCIII → ↑ catabolismo de VLDL → REDUÇÃO TG. Também ↑ apoAI/AII → ↑ HDL. Efeito modesto em LDL (↓ ou neutro).",

farmacocin:{
absorc:"VO: melhor com comida (gordura aumenta absorção)",
distrib:"Ampla, alta ligação proteica",
metab:"Hepático",
elimin:"Renal (60% — daí cuidado em IRC)",
meiavida:"20-25h",
ligacao:">99%",
},

espectro:["HIPERTRIGLICERIDEMIA grave (TG >500) — 1ª linha","Dislipidemia mista (em combinação com estatina, casos selecionados)","Retinopatia diabética (off-label)"],

interacoes:[
{droga:"Estatinas (especialmente sinvastatina, lovastatina)", efeito:"↑ risco rabdomiólise. FENOFIBRATO + ESTATINA é aceitável (vs GEMFIBROZILA + estatina que é contraindicada). Mas monitor CK + sintomas."},
{droga:"Varfarina", efeito:"↑ INR significativamente — monitor."},
{droga:"Ciclosporina", efeito:"↑ nefrotoxicidade. Evitar combinação."},
{droga:"AINE", efeito:"↑ deslocamento da albumina."},
],

efeitos:[
{tipo:"comum", item:"Dispepsia, dor abdominal, ↑ CK leve, ↑ transaminases (10-20%), colelitíase (5-10% — fibratos ↑ saturação biliar)"},
{tipo:"sério", item:"RABDOMIÓLISE (raro isoladamente, ↑ risco em IRC + combinação com estatina), HEPATOTOXICIDADE (suspender se TGO/TGP >3× LSN), pancreatite aguda paradoxal (rara), TVP (raro)"},
{tipo:"raro", item:"Pneumonite intersticial, IRA, agranulocitose"},
],

alertas:[
{nivel:"crit", txt:"PREVENÇÃO PANCREATITE: TG >500 mg/dL é INDICAÇÃO PRINCIPAL (não LDL). TG >1000 mg/dL = risco iminente de pancreatite aguda. NÃO substitui MEV (dieta + álcool + DM controlado)."},
{nivel:"crit", txt:"NUNCA combinar GEMFIBROZILA com estatina (risco rabdomiólise 15× maior). Fenofibrato + estatina é aceitável MAS monitor CK + sintomas musculares."},
{nivel:"crit", txt:"IRC: ClCr <30 = CONTRAINDICAÇÃO (rabdomiólise). ClCr 30-60: reduzir 50%."},
{nivel:"warn", txt:"GESTAÇÃO + HIPERTRIGLICERIDEMIA: 3º trimestre pode haver TG >2000 com risco pancreatite. Insulina + dieta + plasmaférese podem ser necessários (fibrato categoria C — evitar mas pode ser usado em risco extremo)."},
{nivel:"warn", txt:"NÃO REDUZ MORTALIDADE CV em monoterapia ou combinação universal (FIELD trial em DM2 — desfechos macrovasculares limitados). USE COM ESTATINA quando indicação combinada (ACCORD-Lipid subgrupo)."},
{nivel:"info", txt:"COLELITÍASE: fibratos ↑ saturação biliar de colesterol — risco de cálculos. Não rastrear de rotina, mas alertar paciente sobre sintomas."},
],

preparo:"VO comprimido, COM REFEIÇÃO PRINCIPAL (gordura ↑ absorção, especialmente nas formulações não-micronizadas).",
monitor:"Perfil lipídico 8-12 sem, TGO/TGP basal + 3 m + anual, CK se sintomas musculares, creatinina basal + anual.",
diretriz:"SBC Dislipidemia 2017. AHA/ACC 2018. ACCORD-Lipid. FIELD. ENDOCRINE Society — Hipertrigliceridemia 2012.",
fluxo:null, calcs:[],
},
{id:"med-omega3", contexto:["pa","ubs"], classe:"Ácidos graxos ômega-3 — EPA + DHA", grupo:"lipemiante",
nome:"Ômega-3 (EPA/DHA, Icosapent etil)",
sin:["Vascepa (icosapent etil — EPA isolado)","Omacor","Lovaza"],
formas:["Cápsulas 1 g (mix EPA+DHA, suplemento sem prescrição)","Vascepa 1 g (icosapent etil — apenas EPA, prescrição) — privada"],
resumo:"Ácidos graxos ômega-3. ICOSAPENT ETIL 2 g 2×/d é o ÚNICO com evidência CV sólida (REDUCE-IT — reduz MACE 25%). Suplementos genéricos OTC NÃO têm evidência CV.",
dose_rapida:"Icosapent etil 2 g VO 2×/d | Suplementos OTC 2-4 g/d (sem evidência CV forte)",

doses:[
{ind:"Prevenção CV em ALTO RCV + TG persistentemente ≥150 (REDUCE-IT)", dose:"Icosapent etil 2 g VO 2×/d (4 g/d total)", obs:"REDUCE-IT trial — reduz MACE 25% em paciente com DCV ou DM + 1 FRCV + TG 150-499 em uso de estatina. EVIDÊNCIA REAL. Vascepa NÃO está disponível no Brasil em 2025/2026."},
{ind:"Hipertrigliceridemia grave (TG >500)", dose:"2-4 g/d (EPA+DHA combinado)", obs:"Como adjuvante a fenofibrato. Redução TG ~30%."},
],

ajustes:{
irc:"Sem ajuste.",
iht:"Cautela.",
idoso:"Sem ajuste.",
gestante:"Categoria C — geralmente seguro.",
aleita:"Compatível.",
ped:"Não rotina.",
},

mecanismo:"EPA + DHA → ↓ síntese hepática de VLDL → ↓ TG. EPA (icosapent etil) tem efeito anti-inflamatório/antiarrítmico adicional, possivelmente responsável pelo benefício CV em REDUCE-IT.",

farmacocin:{absorc:"VO: melhor com refeição rica em gordura", distrib:"Lipoproteínas", metab:"β-oxidação", elimin:"Não significativa renal", meiavida:"Variável", ligacao:"—"},

espectro:["Prevenção CV em alto RCV + TG ≥150 (REDUCE-IT — apenas icosapent etil)","Hipertrigliceridemia grave (adjuvante)"],

interacoes:[
{droga:"Anticoagulantes (varfarina, DOAC)", efeito:"↑ risco sangramento em doses altas (>4 g/d). Monitor."},
{droga:"AAS", efeito:"Aditivo antiagregante leve."},
],

efeitos:[
{tipo:"comum", item:"Eructação com sabor de peixe (mais frequente com formulações genéricas), náusea, diarreia"},
{tipo:"sério", item:"Sangramento aumentado em altas doses + anticoagulantes, FA paradoxal (REDUCE-IT — ↑ leve de FA)"},
{tipo:"raro", item:"Reação alérgica em alergia a peixe"},
],

alertas:[
{nivel:"crit", txt:"SUPLEMENTOS GENÉRICOS de ômega-3 (OTC, sem prescrição) NÃO têm evidência CV — apenas reduzem TG modestamente. Vários ensaios randomizados (STRENGTH, ASCEND, VITAL) foram NEGATIVOS para mistura EPA+DHA."},
{nivel:"warn", txt:"REDUCE-IT é com ICOSAPENT ETIL (EPA puro) — NÃO disponível no Brasil em 2025/2026 (importação possível em alguns casos). Suplementos brasileiros são EPA+DHA — eficácia CV não comprovada."},
{nivel:"warn", txt:"REDUCE-IT mostrou ↑ leve de FA — pode haver troca de risco (↓ IAM/AVC vs ↑ FA/sangramento). Discussão compartilhada."},
{nivel:"info", txt:"DIETA: 2 porções/sem de peixe gordo (salmão, sardinha) fornece EPA+DHA com benefício comprovado e baixo custo — orientação preferencial."},
],

preparo:"VO cápsula com refeição (gordura ↑ absorção).",
monitor:"TG, sintomas sangramento.",
diretriz:"REDUCE-IT trial. AHA Science Advisory 2019.",
fluxo:null, calcs:[],
},
{id:"med-rosuvastatina", contexto:["pa","ubs"], classe:"Estatina de alta potência (2ª geração)", grupo:"lipemiante",
nome:"Rosuvastatina",
sin:["Crestor","Plenance","Trezor"],
formas:["Comprimidos 5, 10, 20, 40 mg — privada","Combinação fixa: rosuvastatina + ezetimiba"],
resumo:"Estatina de alta potência. ↓ LDL 45-63% (40 mg). MAIS POTENTE entre estatinas (mg por mg). T½ longa (19h). MENOR interação CYP. Cuidado em IRC.",
dose_rapida:"5-40 mg VO 1×/d",

doses:[
{ind:"Prevenção secundária / muito alto RCV", dose:"20-40 mg/d", obs:"Meta LDL <55. JUPITER trial — eficaz mesmo em LDL 'normal' com PCR-us elevada."},
{ind:"Alto RCV (DM2 + LOA, HF)", dose:"10-20 mg/d", obs:"Meta LDL <70."},
{ind:"RCV moderado", dose:"5-10 mg/d", obs:"Meta LDL <100. SATURN, ASTEROID trials — regressão placa."},
{ind:"HF homozigótica (rara)", dose:"20-40 mg/d", obs:"Combinada com ezetimiba ± iPCSK9 ± LDL-aférese."},
{ind:"DM2 + IRC moderada (alternativa à atorvastatina)", dose:"5-20 mg/d (CUIDADO em ClCr <30)", obs:"Em ClCr <30: máx 10 mg/d."},
],

ajustes:{
irc:"ClCr 30-60: cautela. ClCr <30: MÁX 10 mg/d (acúmulo — risco miopatia). ASIÁTICO: iniciar dose menor (5 mg).",
iht:"Hepatopatia ativa: CONTRAINDICADA.",
idoso:"Iniciar 5-10 mg.",
gestante:"CATEGORIA X — CONTRAINDICADA.",
aleita:"CONTRAINDICADA.",
ped:"HF ≥10 anos: 5-20 mg/d.",
},

mecanismo:"Inibe HMG-CoA redutase. Diferenças importantes: (1) MAIS hidrofílica que sinvastatina/atorvastatina → atravessa menos BBB (menos efeitos cognitivos teóricos); (2) MENOR metabolismo CYP3A4 (~10%) → MENOS interações; (3) T½ ~19h → cobertura prolongada.",

farmacocin:{
absorc:"VO: 20%",
distrib:"Hepatosseletiva (hidrofílica)",
metab:"Mínimo (10% CYP2C9)",
elimin:"Fezes (90% inalterada)",
meiavida:"19h",
ligacao:"~88%",
},

espectro:["Prevenção secundária CV","Alto/muito alto RCV","HF (incluindo homozigótica)","Pacientes com múltiplas interações medicamentosas (vantagem)","JUPITER: prevenção primária em PCR-us elevada"],

interacoes:[
{droga:"Ciclosporina", efeito:"↑ rosuvastatina 7× — CONTRAINDICAÇÃO ou limitar 5 mg/d."},
{droga:"Gemfibrozila", efeito:"↑ rosuvastatina 2× — preferir fenofibrato."},
{droga:"Varfarina", efeito:"Pode ↑ INR — monitor."},
{droga:"Inibidores de protease HIV", efeito:"↑ rosuvastatina — ajuste."},
{droga:"Antiácidos com alumínio/magnésio", efeito:"↓ absorção rosuvastatina — separar 2h."},
{droga:"Inibidores potentes CYP3A4 (claritromicina, etc)", efeito:"MENOR interação que outras estatinas (rosuvastatina não é CYP3A4)."},
],

efeitos:[
{tipo:"comum", item:"Mialgia (incidência similar outras estatinas), ↑ TGO/TGP, cefaleia, proteinúria leve (transitória — sem significado clínico)"},
{tipo:"sério", item:"Rabdomiólise (rara, ↑ em ClCr <30 com dose alta), hepatotoxicidade, miopatia autoimune"},
{tipo:"raro", item:"↑ glicemia (efeito de classe)"},
],

alertas:[
{nivel:"crit", txt:"IRC GRAVE (ClCr <30): MÁX 10 mg/d. Em diálise: começar 5 mg/d. Rabdomiólise descrita em dose alta + IRC."},
{nivel:"crit", txt:"ASIÁTICOS (especialmente de origem chinesa/japonesa/vietnamita): metabolismo reduzido → ↑ exposição 2× → iniciar 5 mg/d e titular cautelosamente."},
{nivel:"warn", txt:"INTERAÇÕES: VANTAGEM vs sinvastatina/atorvastatina — pouco metabolismo CYP3A4. Boa escolha em paciente com polifarmácia (transplantado, HIV, oncológico)."},
{nivel:"warn", txt:"PROTEINÚRIA leve (dose-dependente): geralmente transitória, sem significado clínico. NÃO suspender por isto isoladamente."},
{nivel:"info", txt:"POTÊNCIA: rosuvastatina 5 mg ≈ atorvastatina 10 mg ≈ sinvastatina 20 mg em redução de LDL (regra prática)."},
{nivel:"info", txt:"JUPITER trial: rosuvastatina 20 mg em prevenção primária com LDL <130 + PCR-us ≥2 reduziu eventos CV 44%. Indicação controversa — discutir com paciente."},
],

preparo:"VO comprimido, qualquer horário. Com ou sem alimento.",
monitor:"Perfil lipídico basal + 6-12 sem + anual. TGO/TGP, CK se mialgia. Função renal anual.",
diretriz:"SBC Dislipidemia 2017. AHA/ACC 2018. JUPITER. STELLAR. SATURN.",
fluxo:null, calcs:[],
},
{id:"med-sinvastatina", contexto:["pa","ubs"], classe:"Estatina de potência moderada (1ª geração)", grupo:"lipemiante",
nome:"Sinvastatina",
sin:["Zocor","Sinvascor","Sinvalip"],
formas:["Comprimidos 10 mg, 20 mg, 40 mg — SUS/REMUME","Combinação fixa: sinvastatina + ezetimiba"],
resumo:"Estatina clássica disponível no SUS. Potência MODERADA — reduz LDL 30-40%. Múltiplas interações (CYP3A4). Limite ATUAL 40 mg/d (FDA contraindicou 80 mg por miopatia/rabdomiólise).",
dose_rapida:"20-40 mg VO 1×/d (à noite — pico de síntese hepática)",

doses:[
{ind:"Prevenção primária CV (HAS, DM, idade ≥40a, RCV moderado)", dose:"20 mg VO 1×/d à noite", obs:"Início após estratificação de risco (PREVENT, ESC SCORE2). Meta LDL conforme risco."},
{ind:"Prevenção secundária (DAC, AVC, DAOP)", dose:"40 mg VO 1×/d à noite", obs:"Meta LDL <55 mg/dL (alto risco) — geralmente NÃO atingida só com sinvastatina. Combinar ezetimiba ou trocar para alta potência."},
{ind:"DM2 + HAS + dislipidemia", dose:"20-40 mg/d", obs:"Meta LDL <70 (alto RCV) ou <55 (muito alto). Considerar atorvastatina/rosuvastatina."},
{ind:"Hipercolesterolemia familiar (HF)", dose:"40 mg/d (máx em sinvastatina)", obs:"Geralmente insuficiente isolada — combinar ezetimiba ± iPCSK9. Encaminhar especialista."},
{ind:"Pediatria — HF heterozigótica ≥10 anos", dose:"10-40 mg/d", obs:"Avaliar especialista (endocrinopediatria)."},
],

ajustes:{
irc:"Sem ajuste rotineiro. ClCr <30: cautela com dose alta (rabdomiólise).",
iht:"Hepatopatia ativa: CONTRAINDICADA. IH crônica estável: cautela, monitor TGO/TGP.",
idoso:"Iniciar 10-20 mg. Maior risco miopatia em ≥75a.",
gestante:"CATEGORIA X — CONTRAINDICADA (teratogenicidade — defeitos SNC, esqueleto). Suspender 1-3 meses antes de gestação planejada.",
aleita:"CONTRAINDICADA.",
ped:"HF heterozigótica ≥10a: 10-40 mg/d.",
},

mecanismo:"Inibe competitivamente a HMG-CoA redutase (enzima limitante da síntese de colesterol hepático) → ↓ síntese colesterol intrahepático → ↑ expressão de receptores LDL hepáticos → ↑ captação de LDL circulante → ↓ LDL plasmático. Efeitos PLEIOTRÓPICOS: estabilização placa aterosclerótica, anti-inflamatório, melhora função endotelial.",

farmacocin:{
absorc:"VO: 5% (1ª passagem hepática intensa — vantagem: ação direta no fígado)",
distrib:"Hepatosseletiva (95% no fígado)",
metab:"Hepático CYP3A4 → metabólito ativo (sinvastatina ácido)",
elimin:"Biliar (60%) + renal (13%)",
meiavida:"2h (sinvastatina) / ~5h (metabólito)",
ligacao:"~95%",
},

espectro:["Prevenção primária CV em RCV moderado-alto","Prevenção secundária (DAC, AVC, DAOP)","DM2/HAS com dislipidemia","Hipercolesterolemia familiar (combinada)"],

interacoes:[
{droga:"Inibidores potentes CYP3A4 (claritromicina, eritromicina, itraconazol, cetoconazol, ritonavir)", efeito:"↑ sinvastatina 5-10× — RABDOMIÓLISE. CONTRAINDICAÇÃO. Suspender sinvastatina durante o ATB."},
{droga:"Amiodarona, verapamil, diltiazem", efeito:"↑ sinvastatina — LIMITAR sinvastatina a 20 mg/d com amiodarona, 10 mg/d com verapamil/diltiazem."},
{droga:"Ciclosporina, danazol, gemfibrozila", efeito:"CONTRAINDICAÇÃO (risco grave de rabdomiólise)."},
{droga:"Suco de POMELO/grapefruit", efeito:"↑ sinvastatina 3-9× (inibe CYP3A4 intestinal) — EVITAR consumo regular."},
{droga:"Varfarina", efeito:"Pode ↑ INR — monitor."},
{droga:"Fibratos (especialmente gemfibrozila)", efeito:"↑ risco miopatia. Se necessário: preferir fenofibrato."},
],

efeitos:[
{tipo:"comum", item:"Mialgia (5-10%, geralmente reversível com suspensão), ↑ leve TGO/TGP, cefaleia, dispepsia, distúrbios do sono"},
{tipo:"sério", item:"RABDOMIÓLISE (rara — 0,1-0,5/1000 paciente-ano; ↑ CK >10× + insuficiência renal aguda), hepatotoxicidade (TGO/TGP >3× LSN), miopatia inflamatória autoimune (rara — anticorpos anti-HMGCR)"},
{tipo:"raro", item:"↑ glicemia / DM2 de novo (NNT ~250), neuropatia periférica, declínio cognitivo (controverso — evidência fraca)"},
],

alertas:[
{nivel:"crit", txt:"RABDOMIÓLISE: suspender se mialgia importante + CK >10× LSN + queixa muscular significativa. Tratar com hidratação + suspender. CK basal NÃO é recomendada de rotina — apenas se sintomas."},
{nivel:"crit", txt:"FDA 2011: SINVASTATINA 80 mg = CONTRAINDICADA (risco miopatia 4× maior que 40 mg). DOSE MÁX 40 mg/d."},
{nivel:"crit", txt:"GESTAÇÃO: CATEGORIA X — TERATOGÊNICA. Suspender 1-3 meses antes de gestação planejada. Se engravidar em uso: suspender imediatamente."},
{nivel:"warn", txt:"INTERAÇÃO COM ATB: ao prescrever claritromicina/eritromicina/itraconazol em paciente em uso de sinvastatina, SUSPENDER sinvastatina durante o ATB. Reiniciar após. Azitromicina é SEGURA."},
{nivel:"warn", txt:"MIALGIA: ocorre em 5-10%. Estratégia: (1) confirmar relação temporal; (2) dosar CK; (3) suspender 2-4 sem; (4) reintroduzir mesma estatina ou trocar para outra (rosuvastatina, pravastatina = menos miopatia); (5) considerar dose dia-sim/dia-não."},
{nivel:"info", txt:"POTÊNCIA MODERADA: ↓ LDL 30-40%. Em alto RCV com LDL inicial alto, frequentemente insuficiente — preferir atorvastatina/rosuvastatina ou associar ezetimiba."},
{nivel:"info", txt:"DM2 DE NOVO: estatinas aumentam risco de DM2 em ~9% (NNT ~250) — mas benefício CV supera amplamente. Não é motivo para suspender em paciente com indicação."},
],

preparo:"VO comprimido, à NOITE (HMG-CoA redutase tem pico de atividade noturno — eficácia máxima). Com ou sem alimento.",
monitor:"Perfil lipídico basal + 6-12 sem após início/ajuste + anual. TGO/TGP basal + se sintomas hepáticos. CK apenas se mialgia. HbA1c em paciente DM2.",
diretriz:"SBC Dislipidemia 2017 (Atualização). AHA/ACC Cholesterol 2018. ESC Dyslipidemias 2019.",
fluxo:null, calcs:[],
},

{id:"med-clopidogrel", contexto:["pa","ubs"], classe:"Antiagregante plaquetário — inibidor P2Y12 (tienopiridina)", grupo:"antiagregante",
nome:"Clopidogrel",
sin:["Plavix","Iscover","Clopiogran"],
formas:["Comprimidos 75 mg, 300 mg — PFPB / CEAF (pós-SCA, pós-stent)"],
resumo:"Antiagregante plaquetário — bloqueio irreversível do receptor P2Y12. 1ª LINHA em DAPT (dupla antiagregação) pós-SCA / pós-stent. Alternativa ao AAS em alérgicos.",
dose_rapida:"DAPT pós-SCA: ataque 300-600 mg + manutenção 75 mg/d × 12 meses",
doses:[
{ind:"SCA + DAPT pós-stent (com AAS)", dose:"Dose de ataque 300-600 mg + 75 mg VO/d × 12 meses (DAPT padrão)", obs:"Sempre combinar com AAS 100 mg/d. Duração: 12 meses padrão, pode estender em alto risco isquêmico, encurtar em alto risco hemorrágico."},
{ind:"AVE isquêmico não-cardioembólico — substituto/alternativa do AAS", dose:"75 mg VO/d", obs:"Em alergia/intolerância ao AAS. CHANCE-AVE: DAPT 21 dias após AVE/AIT pode ser superior."},
{ind:"DAC estável — alternativa ao AAS", dose:"75 mg/d", obs:"Em intolerância ao AAS."},
{ind:"Stent recente em fibrilação atrial com anticoagulação", dose:"Triple ou dual therapy individualizada", obs:"Esquemas específicos com DOAC ou varfarina — discussão cardiologia."},
],
ajustes:{
irc:"Sem ajuste habitual (mesmo em DRC grave).",
iht:"Cautela em hepatopatia.",
idoso:"Sem ajuste.",
gestante:"Categoria B — discussão risco/benefício.",
aleita:"Cautela — dados limitados.",
ped:"Não rotineiro.",
},
mecanismo:"Pró-fármaco — ativado via CYP2C19 → metabólito ativo bloqueia IRREVERSIVELMENTE receptor P2Y12 → inibe ativação plaquetária por ADP. Efeito por vida útil da plaqueta (5-7 dias).",
farmacocin:{absorc:"VO ~50%", distrib:"Ampla", metab:"Hepático (CYP2C19)", elimin:"Renal e biliar", meiavida:"~6h (mas efeito 5-7 dias)", ligacao:"94%"},
espectro:["DAPT pós-SCA / pós-stent","Prevenção secundária AVE","Doença arterial periférica","DAC estável (alternativa AAS)"],
interacoes:[
{droga:"Omeprazol, esomeprazol", efeito:"Inibem CYP2C19 — REDUZEM ativação de clopidogrel. PREFERIR pantoprazol ou rabeprazol em paciente em uso."},
{droga:"AINEs", efeito:"Aumentam sangramento."},
{droga:"Anticoagulantes (varfarina, DOACs)", efeito:"Combinação aumenta sangramento — usar apenas se necessário."},
],
efeitos:[
{tipo:"comum", item:"Sangramento (gengivorragia, equimose, epistaxe leve)"},
{tipo:"sério", item:"Hemorragia GI / SNC, trombocitopenia (PTT-like raro — TTP), neutropenia rara"},
],
alertas:[
{nivel:"crit", txt:"<strong>NÃO SUSPENDER abruptamente</strong> em DAPT pós-stent — risco de TROMBOSE DE STENT (catastrófico). Suspensão para cirurgia: discutir com cardiologia (geralmente 5-7d antes)."},
{nivel:"warn", txt:"<strong>IBP:</strong> evitar omeprazol/esomeprazol em paciente com clopidogrel. Preferir pantoprazol, rabeprazol, lansoprazol."},
{nivel:"info", txt:"POLIMORFISMO CYP2C19 (15-20% asiáticos são metabolizadores lentos) — clopidogrel menos eficaz. Em alto risco: considerar ticagrelor."},
{nivel:"info", txt:"DAPT padrão pós-stent: 12 meses (pode encurtar/estender conforme risco)."},
],
preparo:"VO, com ou sem alimento.",
monitor:"Hemograma, sinais de sangramento. Adesão é crítica.",
diretriz:"ESC SCA 2023. AHA/ACC SCA. PCDT MS — Síndromes Coronarianas Agudas.",
fluxo:null, calcs:[],
},

{id:"med-ticagrelor", contexto:["pa","ubs"], classe:"Antiagregante plaquetário — inibidor P2Y12 reversível (não-tienopiridina)", grupo:"antiagregante",
nome:"Ticagrelor",
sin:["Brilinta"],
formas:["Comprimidos 60 mg, 90 mg — privada / CEAF SCA (PCDT específico)"],
resumo:"Antiagregante de NOVA GERAÇÃO — bloqueio REVERSÍVEL do receptor P2Y12 (sem necessidade de ativação metabólica como clopidogrel). Eficácia SUPERIOR ao clopidogrel em SCA (PLATO trial). Doses 2×/d.",
dose_rapida:"SCA: ataque 180 mg + 90 mg VO 2×/d × 12 meses; manutenção crônica: 60 mg 2×/d",
doses:[
{ind:"SCA (IAMCSST, IAMSSST, AI) — DAPT", dose:"Dose de ataque 180 mg + 90 mg VO 2×/d × 12 meses + AAS 100 mg/d", obs:"PLATO trial: superior ao clopidogrel em mortalidade CV. Sangramento similar."},
{ind:"Manutenção PROLONGADA pós-SCA (>1 ano)", dose:"60 mg VO 2×/d", obs:"PEGASUS-TIMI 54: dose reduzida para uso crônico em alto risco isquêmico."},
],
ajustes:{
irc:"Sem ajuste habitual.",
iht:"Cautela em hepatopatia moderada/grave.",
idoso:"Cuidado com risco hemorrágico.",
gestante:"Categoria C.",
aleita:"Cautela.",
ped:"Não.",
},
mecanismo:"Inibe DIRETAMENTE o receptor P2Y12 (não precisa ativação metabólica como clopidogrel). REVERSÍVEL — meia-vida menor, efeito plaquetário decresce mais rápido.",
farmacocin:{absorc:"VO rápida", distrib:"Ampla", metab:"CYP3A4", elimin:"Biliar", meiavida:"~7h", ligacao:"99%"},
espectro:["SCA","DAPT pós-stent (alternativa preferida ao clopidogrel em alto risco)","Manutenção pós-SCA crônica"],
interacoes:[
{droga:"Inibidores potentes CYP3A4 (claritromicina, cetoconazol)", efeito:"AUMENTA níveis — EVITAR concomitante."},
{droga:"Indutores CYP3A4 (rifampicina)", efeito:"REDUZ níveis — evitar."},
{droga:"Sinvastatina, lovastatina >40 mg/d", efeito:"Aumenta níveis — risco rabdomiólise. Limitar dose ou trocar."},
{droga:"Opioides", efeito:"Atrasam absorção (gastroparesia opioide-induzida) — relevante em IAM."},
],
efeitos:[
{tipo:"comum", item:"DISPNEIA (15-20% — específica do ticagrelor, geralmente nas primeiras semanas, MAIORIA não suspende), sangramento, bradicardia (raro)"},
{tipo:"sério", item:"Hemorragia GI / SNC, pausa ventricular (bradicardia significativa rara), aumento creatinina"},
],
alertas:[
{nivel:"warn", txt:"<strong>DISPNEIA</strong> é efeito específico do ticagrelor — 15-20% relatam. Geralmente leve, autolimitada. Diferenciar de causa cardíaca (IC, EP)."},
{nivel:"info", txt:"Vantagens sobre clopidogrel: início RÁPIDO, sem dependência de CYP2C19 (sem 'maus respondedores'), REVERSIBILIDADE mais rápida."},
{nivel:"warn", txt:"NÃO usar com aspirina dose alta (>100 mg/d) — reduz eficácia (achados PLATO)."},
{nivel:"crit", txt:"NÃO suspender abruptamente em DAPT recente — risco trombose."},
],
preparo:"VO, com ou sem alimento, 2×/d.",
monitor:"Hemograma, dispneia, sinais sangramento.",
diretriz:"ESC SCA 2023. AHA/ACC. PLATO trial.",
fluxo:null, calcs:[],
},

{id:"med-prasugrel", contexto:["pa","ubs"], classe:"Antiagregante plaquetário — inibidor P2Y12 (tienopiridina 3ª geração)", grupo:"antiagregante",
nome:"Prasugrel",
sin:["Effient","Efient"],
formas:["Comprimidos 10 mg — privada / CEAF (uso restrito)"],
resumo:"Tienopiridina 3ª geração — mais potente e rápido que clopidogrel. USO RESTRITO pós-SCA com ICP (especialmente IAMCSST). CONTRAINDICAÇÃO em AVE/AIT prévio.",
dose_rapida:"SCA com ICP: ataque 60 mg + 10 mg VO/d × 12 meses + AAS",
doses:[
{ind:"SCA com ICP planejada — DAPT (especialmente IAMCSST)", dose:"60 mg ataque + 10 mg VO/d × 12 meses + AAS 100 mg/d", obs:"TRITON-TIMI: superior ao clopidogrel em SCA com ICP (especialmente IAMCSST diabético). Aumento de sangramento."},
],
ajustes:{
irc:"Sem ajuste habitual.",
iht:"Cautela em hepatopatia.",
idoso:">75a: NÃO recomendado (risco hemorrágico). <60 kg: REDUZIR dose para 5 mg/d.",
gestante:"Categoria B.",
aleita:"Cautela.",
ped:"Não.",
},
mecanismo:"Pró-fármaco — metabolismo eficiente (CYP3A4/2B6) → metabólito ativo bloqueia IRREVERSIVELMENTE P2Y12. Mais potente que clopidogrel, menos variabilidade.",
farmacocin:{absorc:"VO rápida e completa", distrib:"Ampla", metab:"Hepático", elimin:"Renal e fecal", meiavida:"~7h (efeito 5-7 dias)", ligacao:"98%"},
espectro:["SCA com ICP","Não usar em manejo conservador / sem ICP"],
interacoes:[{droga:"AINEs, anticoagulantes", efeito:"Aumenta sangramento."}],
efeitos:[
{tipo:"comum", item:"Sangramento, hematoma, equimose"},
{tipo:"sério", item:"Hemorragia maior (GI, SNC), trombocitopenia"},
],
alertas:[
{nivel:"crit", txt:"<strong>CONTRAINDICAÇÃO ABSOLUTA</strong> em paciente com AVE ou AIT PRÉVIO — aumento dramático de hemorragia intracraniana (TRITON-TIMI subgrupo)."},
{nivel:"warn", txt:"<strong>EVITAR em &gt;75 anos</strong> ou peso &lt;60 kg — risco hemorrágico desproporcional. Se usar em &lt;60 kg: dose 5 mg/d."},
{nivel:"info", txt:"Indicação: SCA com ICP planejada — não usar em manejo conservador / fibrinólise / sem stent."},
{nivel:"crit", txt:"Suspender 7 dias antes de cirurgia eletiva."},
],
preparo:"VO, com ou sem alimento.",
monitor:"Sangramento, hemograma.",
diretriz:"ESC SCA. AHA/ACC. TRITON-TIMI.",
fluxo:null, calcs:[],
}

);
