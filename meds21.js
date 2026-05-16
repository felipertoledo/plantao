/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — BIBLIOTECA DE MEDICAÇÕES (PARTE 21)
   DOACs — Anticoagulantes Orais Diretos
   Rivaroxabana, Apixabana, Dabigatrana, Edoxabana
   =========================================================== */

MEDICACOES.push(

/* ============== RIVAROXABANA ============== */

{id:"med-rivaroxabana", classe:"DOAC — inibidor direto do fator Xa", grupo:"anticoag",
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

/* ============== APIXABANA ============== */

{id:"med-apixabana", classe:"DOAC — inibidor direto do fator Xa", grupo:"anticoag",
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

/* ============== DABIGATRANA ============== */

{id:"med-dabigatrana", classe:"DOAC — inibidor direto da trombina (fator IIa)", grupo:"anticoag",
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

/* ============== EDOXABANA ============== */

{id:"med-edoxabana", classe:"DOAC — inibidor direto do fator Xa", grupo:"anticoag",
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

);
