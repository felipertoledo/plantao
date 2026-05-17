/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — meds/sedacao.js
   7 medicações
   Grupos: sedativo
   =========================================================== */

MEDICACOES.push(

/* ============== SEDATIVO (7) ============== */

{id:"med-cetamina", classe:"Anestésico dissociativo + analgésico", grupo:"sedativo",
nome:"Cetamina",
sin:["Ketamin","Ketalar","Cetamax"],
formas:[
  "Ampola 50 mg/mL — 2 mL (100 mg) ou 10 mL (500 mg)",
  "Ampola 10 mg/mL",
],
resumo:"Anestésico dissociativo único — PRESERVA reflexos VA + estabilidade hemodinâmica + broncodilatação. IDEAL em asma grave, choque, queimadura, pediatria.",
dose_rapida:"IOT: 1-2 mg/kg IV | Procedural: 1-2 mg/kg IV ou 3-5 mg/kg IM | Analgesia: 0,1-0,3 mg/kg",

doses:[
  {ind:"Indução IOT — especialmente em ASMA, CHOQUE, QUEIMADURA", dose:"1-2 mg/kg IV em 1 min", obs:"PRESERVA reflexos. Broncodilata. Estabilidade hemodinâmica. ESCOLHA em hipotensão/asma grave."},
  {ind:"Sedação procedural pediátrica (padrão-ouro)", dose:"1-2 mg/kg IV bolus OU 3-5 mg/kg IM", obs:"Atropina 0,01 mg/kg pré (reduz sialorreia). Midazolam 0,05 mg/kg para reduzir disforia."},
  {ind:"Analgesia em dor refratária (sub-dissociativa)", dose:"0,1-0,3 mg/kg IV em 10 min OU 0,1 mg/kg/h BIC", obs:"Reduz necessidade de opioides. Dor neuropática, trauma, queimadura."},
  {ind:"Status asmáticus refratário", dose:"Bolus 1-2 mg/kg + BIC 1-3 mg/kg/h", obs:"Broncodilatação direta. Reduz consumo O2. Pode evitar IOT em casos selecionados."},
  {ind:"Sedação UTI (alternativa)", dose:"BIC 0,1-2 mg/kg/h", obs:"Útil em choque, asma, queimado. Sem depressão respiratória significativa."},
  {ind:"Agitação grave / contenção química (pré-hospitalar)", dose:"4-5 mg/kg IM (puro)", obs:"Início 3-5 min. Atropina + lorazepam para reações disfóricas."},
  {ind:"Pediatria sedação", dose:"1-2 mg/kg IV ou 3-5 mg/kg IM", obs:"PADRÃO-OURO em pediatria. ACEP."},
],

ajustes:{
  irc:"Sem ajuste rotineiro.",
  iht:"Reduzir em IH grave.",
  idoso:"Reduzir 25-30%. Maior risco reação emergência (disforia).",
  gestante:"Categoria B — pode usar em IOT/cesariana. Mantém PA materna.",
  aleita:"Compatível dose única; descartar leite 6-12h se uso pontual.",
  ped:"PADRÃO em sedação procedural. 1-2 mg/kg IV ou 3-5 mg/kg IM. Atropina pré.",
},

mecanismo:"Antagonista NMDA (glutamato) → bloqueia transmissão excitatória → 'anestesia dissociativa' (paciente desconectado mas com reflexos preservados). Estimulação simpática indireta → ↑PA, ↑FC, ↑DC. Broncodilatador direto (β2 + relaxa musc lisa). Analgesia em dose sub-anestésica via NMDA + μ-opioide fraco.",

farmacocin:{
  absorc:"IV: 30 seg | IM: 3-5 min | VO: 30 min | Intranasal: 5-10 min",
  distrib:"Lipossolúvel — atravessa BBB rápido",
  metab:"Hepático CYP3A4/CYP2B6 → norcetamina (ativa, 1/3 potência)",
  elimin:"Renal (90% metabólitos)",
  meiavida:"2-3h",
  ligacao:"~50%",
},

espectro:[
  "IOT em paciente HIPOTENSO/CHOQUE/ASMA/QUEIMADO — indução de escolha",
  "Sedação procedural pediátrica (padrão-ouro)",
  "Analgesia sub-dissociativa em dor refratária",
  "Status asmáticus (broncodilatação direta)",
  "Sedação UTI em pacientes com instabilidade",
  "Depressão refratária (esketamina spray nasal — uso especializado)",
],

interacoes:[
  {droga:"BZD", efeito:"Reduz disforia (favorável). Combinar 0,05 mg/kg midazolam pré em adulto."},
  {droga:"Opioides", efeito:"Sinergia analgésica útil; depressão SNC — reduzir doses."},
  {droga:"ISRS/IMAO", efeito:"Síndrome serotoninérgica — cautela."},
  {droga:"Halogenados", efeito:"Mascarar simpatomimético."},
],

efeitos:[
  {tipo:"comum", item:"↑PA/FC, sialorreia, lacrimação, nistagmo, mioclonia, náusea pós-procedimento, reação de emergência (disforia, alucinação — 20% adultos, menos em ped)"},
  {tipo:"sério", item:"Laringoespasmo (raro), apneia (dose alta IV rápida), aumento PIC (controverso atual — provável segurança), crise hipertensiva grave"},
  {tipo:"raro", item:"Síndrome serotoninérgica, cistite intersticial (uso crônico recreativo)"},
],

alertas:[
  {nivel:"crit", txt:"INDUTOR PREFERIDO em CHOQUE, ASMA GRAVE, QUEIMADO — preserva PA. NÃO causa hipotensão como propofol/etomidato (em sepse crônica reposo pode causar relativa)."},
  {nivel:"warn", txt:"REAÇÃO DE EMERGÊNCIA (disforia/alucinação): 20% adultos. PREVENIR com midazolam 0,5-1 mg IV pré. Ambiente calmo pós-procedimento."},
  {nivel:"warn", txt:"SIALORREIA AUMENTADA — PRÉ-TRATAR ATROPINA 0,01 mg/kg (especialmente pediatria, broncoscopia)."},
  {nivel:"warn", txt:"↑PA/FC — evitar em IAM/SCA ativo, dissecção aórtica, HAS maligna não-tratada. Controvérsia em ↑PIC: evidência recente sugere segurança em TCE estável."},
  {nivel:"info", txt:"DOSE SUB-DISSOCIATIVA (0,1-0,3 mg/kg) em 10 min: alternativa em dor refratária SEM opioide. Útil em queimado, trauma."},
  {nivel:"info", txt:"PEDIATRIA: 1ª linha em sedação procedural (segura, eficaz). ACEP padrão."},
],

preparo:"Bolus IV: puro ou diluído 1:10 em SF. BIC: 500 mg em 250 mL SF = 2 mg/mL. Intranasal: usar concentração alta (50 mg/mL), máx 1 mL/narina.",

monitor:"PA, FC (esperar ↑10-20%), SpO2, FR. Profundidade de sedação. Observação 1-2h pós-bolus.",

diretriz:"ACEP Procedural Sedation 2014. PALICC Pediatric Sedation. ECCS Asthma 2020.",
fluxo:null,
calcs:[],
},
{id:"med-etomidato", classe:"Hipnótico imidazólico", grupo:"sedativo",
nome:"Etomidato",
sin:["Hypnomidate","Amidato"],
formas:[
  "Ampola 20 mg/10 mL (2 mg/mL)",
],
resumo:"Hipnótico de início ultrarrápido com mínima alteração hemodinâmica. PRINCIPAL indutor IOT em paciente HEMODINAMICAMENTE INSTÁVEL. Cuidado: supressão adrenal.",
dose_rapida:"Indução IOT: 0,2-0,3 mg/kg IV em 30-60 seg",

doses:[
  {ind:"Indução IOT (SRI) — em INSTABILIDADE HEMODINÂMICA", dose:"0,2-0,3 mg/kg IV em 30-60 seg", obs:"Padrão em choque hipovolêmico/séptico. Início <30 seg. Mínima alteração PA/FC."},
  {ind:"Cardioversão sincronizada", dose:"0,1-0,15 mg/kg IV", obs:"Sedação rápida e estável. Alternativa a propofol em cardiopata."},
  {ind:"Pediatria", dose:"0,2-0,4 mg/kg IV", obs:"Cautela — risco supressão adrenal (importante em criança)."},
],

ajustes:{
  irc:"Sem ajuste.",
  iht:"Sem ajuste rotineiro.",
  idoso:"Reduzir 20-30%.",
  gestante:"Categoria C — uso emergencial em IOT obstétrica aceitável.",
  aleita:"Sem dados; dose única aceita.",
  ped:"0,2-0,4 mg/kg IV. Atenção à supressão adrenal.",
},

mecanismo:"Modula receptor GABA-A → hipnose rápida. Cardiovasculáriamente ESTÁVEL (mínima vasodilatação ou depressão miocárdica). Inibe 11-β-hidroxilase (síntese cortisol) → SUPRESSÃO ADRENAL transitória.",

farmacocin:{
  absorc:"IV apenas",
  distrib:"Lipossolúvel — rápida distribuição cerebral",
  metab:"Hepático (esterases)",
  elimin:"Renal (75% metabólitos) + biliar",
  meiavida:"Eliminação 2-5h | Efeito clínico 5-10 min",
  ligacao:"75%",
},

espectro:[
  "Indução de IOT em paciente HEMODINAMICAMENTE INSTÁVEL (choque)",
  "Sedação para cardioversão",
  "Procedimentos curtos com necessidade de estabilidade cardiovascular",
],

interacoes:[
  {droga:"Opioides", efeito:"Sinergia depressora — reduzir doses."},
  {droga:"BZD", efeito:"Sinergia depressora SNC."},
],

efeitos:[
  {tipo:"comum", item:"Mioclonia (30-60% — sem significado clínico), dor à injeção, náusea/vômito pós-operatório, supressão adrenal transitória (4-24h)"},
  {tipo:"sério", item:"Supressão adrenal prolongada em uso CRÔNICO (BIC) — controvérsia em sepse"},
  {tipo:"raro", item:"Reação anafilactoide, laringoespasmo, apneia (dose alta)"},
],

alertas:[
  {nivel:"crit", txt:"SUPRESSÃO ADRENAL transitória (4-24h) por inibição 11-β-hidroxilase. Controvérsia em SEPSE: estudo CORTICUS sugere associação com mortalidade — uso DOSE ÚNICA é provavelmente seguro, BIC contraindicado em sepse."},
  {nivel:"crit", txt:"INDUTOR DE ESCOLHA em CHOQUE/INSTABILIDADE HEMODINÂMICA — mínima alteração PA. Alternativa: cetamina (também estável)."},
  {nivel:"warn", txt:"MIOCLONIA na indução em 30-60% — sem significado clínico, mas pode mimetizar convulsão."},
  {nivel:"warn", txt:"DOR À INJEÇÃO em veia pequena — usar veia calibrosa OU pré-tratar com lidocaína."},
  {nivel:"info", txt:"NÃO usar BIC em paciente séptico — supressão adrenal pode piorar choque."},
],

preparo:"PURO IV bolus. Pode diluir em SF para reduzir dor de injeção. NÃO usar em BIC.",

monitor:"PA, FC, SpO2 durante indução. Mioclonia esperada — não tratar. Cortisol matinal se uso repetido em sepse.",

diretriz:"SBA IOT 2020. CORTICUS trial. Estudos de SRI em choque.",
fluxo:null,
calcs:[],
},
{id:"med-midazolam", classe:"Benzodiazepínico de ação curta", grupo:"sedativo",
nome:"Midazolam",
sin:["Dormonid","Dormicum"],
formas:[
  "Ampola 5 mg/5 mL (1 mg/mL)",
  "Ampola 15 mg/3 mL (5 mg/mL) — mais usada",
  "Ampola 50 mg/10 mL (5 mg/mL) — para BIC",
  "Solução oral 2 mg/mL",
],
resumo:"BZD hidrossolúvel, início rápido, curta duração. Sedação procedural, status epilepticus, SRI, sedação UTI.",
dose_rapida:"Sedação: 1-2 mg IV bolus | Status: 10 mg IM (>40kg) ou 0,2 mg/kg IV",

doses:[
  {ind:"Sedação procedural (redução, cardioversão, EDA)", dose:"1-2 mg IV bolus, repetir 1 mg cada 2-3 min (máx 5 mg)", obs:"Idoso: 0,5-1 mg. Combinar com fentanil para analgesia."},
  {ind:"Status epilepticus — SEM acesso IV", dose:"10 mg IM (>40kg) OU 0,2 mg/kg IM/IN/bucal", obs:"RAMPART trial: IM tão eficaz quanto IV. Via preferida pré-hospitalar."},
  {ind:"Status epilepticus — COM acesso IV", dose:"0,2 mg/kg IV bolus (máx 10 mg), pode repetir após 5 min", obs:"Após 2 doses: passar para 2ª linha (fenitoína/levetiracetam)."},
  {ind:"Sedação contínua UTI", dose:"BIC 0,02-0,2 mg/kg/h (após bolus 0,02-0,05 mg/kg)", obs:"RASS alvo -2 a 0. PADIS: preferir dexmedetomidina/propofol (BZD piora delirium)."},
  {ind:"Pré-medicação SRI", dose:"0,05-0,1 mg/kg IV (3-5 mg adulto)", obs:"Combinar com fentanil. Sedação consciente para IOT."},
  {ind:"Abstinência alcoólica grave", dose:"2-4 mg IV cada 15-30 min titulado", obs:"Diazepam ou lorazepam alternativos (preferir lorazepam em hepatopata)."},
  {ind:"Pediatria — sedação", dose:"0,05-0,1 mg/kg IV (máx 5 mg)", obs:"VO pré-procedimento: 0,5 mg/kg (máx 20 mg)."},
],

ajustes:{
  irc:"ClCr <10: reduzir 50% (acúmulo de metabólitos ativos).",
  iht:"IH grave: reduzir 50-75% (meia-vida prolongada).",
  idoso:"Reduzir 50% — sensibilidade aumentada, meia-vida prolongada.",
  gestante:"Categoria D — uso 3º trimestre/parto causa síndrome 'floppy infant' no RN. USAR em status epilepticus mesmo assim.",
  aleita:"Dose única segura, cautela uso crônico.",
  ped:"0,05-0,1 mg/kg IV | 0,2 mg/kg IM/IN status | 0,5 mg/kg VO pré-procedimento.",
},

mecanismo:"BZD potencializa GABA-A no SNC → abertura canais Cl⁻ → hiperpolarização neuronal → ↓excitabilidade. Sítio alostérico distinto do GABA. Aumenta FREQUÊNCIA de abertura (vs barbitúricos que aumentam duração). Efeitos: ansiolítico, sedativo, anticonvulsivante, miorrelaxante, amnésico anterógrado.",

farmacocin:{
  absorc:"IV: 1-3 min | IM: 5-15 min | VO: 15-30 min | Intranasal: 5-10 min",
  distrib:"Lipossolúvel — atravessa BBB rápido (vs lorazepam mais lento)",
  metab:"Hepático CYP3A4 → α-hidroximidazolam (ativo) → glucuronidação",
  elimin:"Renal (metabólitos)",
  meiavida:"2-6h (mais longa em obesos, idosos, hepatopata)",
  ligacao:"96-97%",
},

espectro:[
  "Sedação procedural curta",
  "Status epilepticus (1ª linha — BZD)",
  "Pré-medicação SRI / IOT",
  "Sedação UTI (alternativa a propofol/dexmedetomidina)",
  "Abstinência alcoólica grave",
  "Agitação aguda (especialmente abstinência)",
],

interacoes:[
  {droga:"Opioides", efeito:"Sinergia depressora respiratória — reduzir 50%, monitor."},
  {droga:"Inibidores CYP3A4 (cetoconazol, claritromicina, ritonavir)", efeito:"↑ midazolam — sedação prolongada. Reduzir 50-75%."},
  {droga:"Indutores CYP3A4 (rifampicina, fenitoína)", efeito:"↓ efeito — aumentar dose."},
  {droga:"Álcool", efeito:"Potencializa depressão SNC."},
],

efeitos:[
  {tipo:"comum", item:"Sonolência, sedação prolongada, amnésia anterógrada, ataxia, hipotensão leve"},
  {tipo:"sério", item:"Depressão respiratória, apneia (especialmente IV rápido), hipotensão grave, reações paradoxais (agitação)"},
  {tipo:"raro", item:"Síndrome de abstinência se uso prolongado, delirium em idosos, broncoespasmo"},
],

alertas:[
  {nivel:"crit", txt:"DEPRESSÃO RESPIRATÓRIA + APNEIA — monitorização contínua SpO2/FR, ventilação assistida pronta, naloxona/flumazenil disponíveis."},
  {nivel:"crit", txt:"REVERSÃO: FLUMAZENIL 0,2 mg IV, repetir 0,3 mg/min (máx 3 mg). Duração curta (~1h) — RE-SEDAÇÃO possível. NÃO usar em paciente CRÔNICO de BZD (precipita convulsão)."},
  {nivel:"warn", txt:"UTI: BZD pioram DELIRIUM (PADIS guidelines 2018) — preferir dexmedetomidina/propofol. Se necessário BZD: lorazepam tem menos acúmulo que midazolam."},
  {nivel:"warn", txt:"USO PROLONGADO >7 dias: síndrome de abstinência (tremor, agitação, convulsão) — DESMAMAR 10-20%/dia."},
  {nivel:"info", txt:"IDOSO: meia-vida pode chegar a 12h por acúmulo — reduzir dose 50%, reavaliar frequentemente."},
],

preparo:"Bolus: pode ser puro ou diluído em SF 1:1. BIC: 50 mg em 90 mL SF = 0,5 mg/mL, iniciar 1-10 mL/h. Intranasal: 5 mg/mL pura, máx 1 mL/narina.",

monitor:"SpO2, FR, PA contínua durante sedação. RASS/Ramsay em UTI. CAM-ICU 1×/turno em UTI.",

diretriz:"ACEP Procedural Sedation 2014. Neurocritical Care Status Epilepticus 2016. PADIS UTI 2018. RAMPART trial.",
fluxo:null,
calcs:[],
},
{id:"med-naloxona", classe:"Antagonista opioide puro", grupo:"sedativo",
nome:"Naloxona",
sin:["Narcan","Nalone"],
formas:[
  "Ampola 0,4 mg/1 mL",
  "Spray nasal 4 mg/0,1 mL (não SUS)",
],
resumo:"Antagonista μ-opioide PURO. Reverte depressão respiratória/SNC induzida por opioides. Curta duração — risco RE-narcose se opioide tem T½ longo.",
dose_rapida:"0,04-0,4 mg IV titular cada 2-3 min até FR ≥12",

doses:[
  {ind:"Overdose opioide com depressão respiratória", dose:"0,04 mg IV inicial (paciente intoxicação aguda); titular 0,04 mg cada 2-3 min até FR ≥12 e SpO2 >94%", obs:"COMEÇAR COM DOSE BAIXA (0,04 mg) em usuário CRÔNICO para evitar SÍNDROME ABSTINÊNCIA aguda violenta. Dose alta 0,4-2 mg em PCR ou paciente naive."},
  {ind:"PCR opioide-induzido", dose:"0,4-2 mg IV bolus, repetir cada 2-3 min", obs:"Sem dose máxima em PCR."},
  {ind:"Reversão sedação iatrogênica em procedimento", dose:"0,1-0,2 mg IV titulado", obs:"Reverte com cuidado — manter analgesia preservada (titular)."},
  {ind:"BIC para opioide de ação prolongada (metadona, fentanil BIC)", dose:"BIC 0,4-4 mg/h", obs:"Naloxona meia-vida ~30-60 min — opioides longos precisam BIC contínua."},
  {ind:"Vias alternativas (sem acesso IV)", dose:"IM/SC 0,4-0,8 mg ou intranasal 4 mg", obs:"Pré-hospitalar. Início 2-5 min IM/IN."},
  {ind:"Pediatria", dose:"0,01 mg/kg IV (dose inicial; pode aumentar para 0,1 mg/kg se PCR)", obs:"RN com mãe usuária de opioide: 0,1 mg/kg."},
],

ajustes:{
  irc:"Sem ajuste.",
  iht:"Sem ajuste.",
  idoso:"Iniciar dose menor (0,04 mg) — sensibilidade aumentada.",
  gestante:"Categoria B — usar (depressão respiratória materna trata salvar mãe + feto).",
  aleita:"Compatível.",
  ped:"0,01-0,1 mg/kg IV.",
},

mecanismo:"Antagonista competitivo PURO dos receptores μ, κ, δ opioides (afinidade μ > κ > δ). Desloca agonistas opioides do receptor → reversão de depressão respiratória, sedação, miose, analgesia. SEM atividade intrínseca — não causa efeitos opioides.",

farmacocin:{
  absorc:"IV: 1-2 min | IM/SC: 2-5 min | Intranasal: 5-10 min",
  distrib:"Ampla, atravessa BBB rápido (lipossolúvel)",
  metab:"Hepático (glucuronidação)",
  elimin:"Renal (metabólitos)",
  meiavida:"30-90 min (!! curta vs muitos opioides)",
  ligacao:"~45%",
},

espectro:[
  "Overdose opioide com depressão respiratória",
  "PCR opioide-induzida",
  "Reversão sedação iatrogênica (procedimento)",
  "Diagnóstico diferencial em coma de causa desconhecida (teste empírico)",
],

interacoes:[
  {droga:"Buprenorfina", efeito:"Parcial reversão (buprenorfina é agonista parcial de alta afinidade) — pode necessitar dose alta naloxona ou suporte ventilatório."},
  {droga:"Opioides com atividade kappa", efeito:"Sem diferença significativa — naloxona reverte todos."},
],

efeitos:[
  {tipo:"comum", item:"AGITAÇÃO/ABSTINÊNCIA AGUDA em usuário crônico: ansiedade, taquicardia, hipertensão, midríase, sudorese, náusea/vômito, dor, lacrimação, bocejos. Pode ser violenta."},
  {tipo:"sério", item:"EDEMA AGUDO DE PULMÃO (raro, mas descrito), arritmia, convulsão, parada cardiorrespiratória paradoxal (descrita em uso muito alto IV rápido em paciente já hipóxico)"},
  {tipo:"raro", item:"Reação anafilactoide"},
],

alertas:[
  {nivel:"crit", txt:"USUÁRIO CRÔNICO de opioide: DOSE BAIXA inicial (0,04 mg) titulada — dose alta abrupta causa SÍNDROME DE ABSTINÊNCIA violenta (agitação, vômito, taquicardia, HAS) que pode causar mais dano que a overdose."},
  {nivel:"crit", txt:"RE-NARCOSE: naloxona dura 30-60 min — opioide tem T½ MAIS LONGA (metadona, oxycodona, fentanil). MANTER paciente em observação ≥4-6h. Considerar BIC naloxona em opioides longos."},
  {nivel:"warn", txt:"BUPRENORFINA: alta afinidade pelo receptor — reversão PARCIAL. Pode necessitar dose maior (até 10 mg) ou suporte ventilatório enquanto buprenorfina se dissocia."},
  {nivel:"warn", txt:"EDEMA AGUDO DE PULMÃO PARADOXAL (raro mas descrito) — provável por descarga adrenérgica súbita. Manejo: O2, VNI, diurético se necessário."},
  {nivel:"info", txt:"DIAGNÓSTICO DIFERENCIAL em COMA: 0,4-2 mg IV — se responde, sugere intoxicação opioide. Útil em emergência."},
],

preparo:"Bolus: PURO IV (0,4 mg/mL) ou diluído 0,4 mg em 10 mL SF (0,04 mg/mL) para titulação fina. BIC: 4 mg em 250 mL SF/SG = 16 mcg/mL, iniciar 0,4-4 mg/h.",

monitor:"FR, SpO2, FC, PA, nível consciência contínuo. Observação ≥4-6h pós-reversão (re-narcose). ECG.",

diretriz:"AHA ACLS 2020. CDC Opioid Overdose. WHO Naloxone Guidelines.",
fluxo:null,
calcs:[],
},
{id:"med-propofol", classe:"Hipnótico-sedativo IV", grupo:"sedativo",
nome:"Propofol",
sin:["Diprivan","Propovan"],
formas:[
  "Emulsão lipídica 10 mg/mL — frasco 20 mL (200 mg) ou 100 mL (1000 mg)",
  "Cor branca leitosa (emulsão óleo-água)",
],
resumo:"Sedativo hipnótico potente, início ultrarrápido. Sedação UTI, IOT, anestesia. Cuidado com hipotensão e síndrome de infusão (PRIS).",
dose_rapida:"Indução IOT: 1-2,5 mg/kg IV | BIC UTI: 5-50 mcg/kg/min",

doses:[
  {ind:"Indução IOT (SRI)", dose:"1-2,5 mg/kg IV bolus", obs:"Início <60 seg. Reduzir 25-50% em idoso/hipotenso/hipovolêmico. NÃO usar em choque (preferir cetamina/etomidato)."},
  {ind:"Sedação contínua UTI (paciente intubado)", dose:"5-50 mcg/kg/min IV BIC", obs:"RASS alvo -2 a 0. PADIS: preferível a BZD. Monitor triglicérides 72h."},
  {ind:"Sedação procedural curta", dose:"0,5-1 mg/kg IV bolus + 0,5 mg/kg PRN", obs:"Endoscopia, cardioversão. Ventilação preparada — depressão respiratória."},
  {ind:"Status epilepticus refratário", dose:"Bolus 1-2 mg/kg + BIC 1-10 mg/kg/h", obs:"IOT obrigatória. UTI com EEG. Risco PRIS se >4 mg/kg/h por >48h."},
  {ind:"↑PIC / TCE", dose:"BIC 10-50 mcg/kg/min", obs:"Reduz consumo O2 cerebral. Vantagem: reversão rápida para avaliação neurológica."},
  {ind:"Pediatria — sedação", dose:"Indução 2,5-3,5 mg/kg. BIC: cautela (risco PRIS aumentado). Evitar <2 meses.", obs:"Não 1ª escolha em pediatria por PRIS."},
],

ajustes:{
  irc:"Sem ajuste.",
  iht:"Sem ajuste rotineiro; cautela em IH grave.",
  idoso:"Reduzir 25-50% (sensibilidade aumentada, maior hipotensão).",
  gestante:"Categoria B — usar para cesariana. Atravessa placenta — depressão neonatal.",
  aleita:"Pequena quantidade — uso pontual aceito.",
  ped:"Indução 2,5-3,5 mg/kg. BIC com cautela (PRIS). Evitar <2 meses.",
},

mecanismo:"Potencializa receptor GABA-A no SNC → hiperpolarização → sedação profunda + amnésia. SEM efeito analgésico. Vasodilatação venosa/arterial direta → ↓pré-carga → ↓PA. Reduz consumo cerebral de O2 e PIC. Também inibe NMDA e canais Ca²⁺ tipo-T.",

farmacocin:{
  absorc:"IV apenas",
  distrib:"Altamente lipofílico — redistribuição rápida (cessar efeito rápido)",
  metab:"Hepático (glucuronidação) + extra-hepático (pulmão, rim)",
  elimin:"Renal (metabólitos inativos)",
  meiavida:"Eliminação 4-7h | Contexto-sensitive 30 min após BIC 24h",
  ligacao:"97-99%",
},

espectro:[
  "Indução de IOT (eletivo, paciente estável)",
  "Sedação UTI (preferida vs BZD — PADIS)",
  "Sedação procedural curta",
  "Status epilepticus refratário (IOT)",
  "↑PIC em TCE",
],

interacoes:[
  {droga:"Opioides + BZD", efeito:"Sinergia depressora respiratória — reduzir doses 30-50%."},
  {droga:"Anti-hipertensivos, β-bloq", efeito:"Hipotensão potencializada — volume + dose reduzida."},
  {droga:"Halogenados", efeito:"Hipotensão aditiva — reduzir doses."},
],

efeitos:[
  {tipo:"comum", item:"Hipotensão, dor à injeção, apneia transitória, bradicardia, mioclonia"},
  {tipo:"sério", item:"Síndrome de infusão do propofol (PRIS), acidose lática, rabdomiólise, pancreatite"},
  {tipo:"raro", item:"Reação anafilactoide, sepse por contaminação da emulsão (trocar equipo 12h)"},
],

alertas:[
  {nivel:"crit", txt:"SÍNDROME DE INFUSÃO DO PROPOFOL (PRIS): em uso >4 mg/kg/h por >48h → acidose lática, rabdomiólise, hipercalemia, IC, óbito. Manter <4 mg/kg/h se possível. Dosar CK e lactato seriado."},
  {nivel:"crit", txt:"HIPOTENSÃO importante — NÃO usar em CHOQUE/PCR (preferir etomidato ou cetamina). Pré-carga + dose reduzida em idoso/cardiopata."},
  {nivel:"crit", txt:"DEPRESSÃO RESPIRATÓRIA + APNEIA — preparar VA. NÃO usar em sedação consciente sem suporte ventilatório."},
  {nivel:"warn", txt:"SEM ANALGESIA — SEMPRE associar opioide se dor (fentanil/morfina)."},
  {nivel:"warn", txt:"HIPERTRIGLICERIDEMIA em uso prolongado — dosar triglicérides 72h. Risco pancreatite."},
  {nivel:"warn", txt:"TROCAR EQUIPO/SERINGA cada 12h — risco contaminação bacteriana (emulsão lipídica)."},
  {nivel:"info", txt:"DOR À INJEÇÃO em veia pequena — usar veia calibrosa OU pré-tratar com lidocaína 20-40 mg IV."},
],

preparo:"Pode ser usado PURO (10 mg/mL) ou diluído em SG 5% até 2 mg/mL. Trocar seringa/equipo cada 12h. NÃO misturar com outras drogas (emulsão).",

monitor:"PA invasiva ideal em BIC, ECG, SpO2, FR. CK + lactato + triglicérides 72h em BIC prolongada. RASS em UTI.",

diretriz:"PADIS UTI 2018. ASA Sedação Procedural. Neurocritical Care Refractory SE.",
fluxo:null,
calcs:[],
},
{id:"med-rocuronio", classe:"Bloqueador neuromuscular NÃO-DESPOLARIZANTE", grupo:"sedativo",
nome:"Rocurônio",
sin:["Esmeron","Zemuron"],
formas:[
  "Ampola 50 mg/5 mL (10 mg/mL)",
  "Ampola 100 mg/10 mL",
],
resumo:"BNM não-despolarizante de início rápido. Padrão em SRI especialmente em contraindicações da succinilcolina. Reversão com sugamadex (rápida) ou neostigmina.",
dose_rapida:"SRI: 1-1,2 mg/kg IV | Intermediário: 0,6 mg/kg | Manutenção: 0,15 mg/kg",

doses:[
  {ind:"SRI — paralisia rápida (alternativa à succinilcolina)", dose:"1-1,2 mg/kg IV bolus", obs:"Início 60-90 seg, duração 40-60 min. SEM contraindicações de hipercalemia."},
  {ind:"Indução em cirurgia eletiva", dose:"0,6 mg/kg IV", obs:"Início 90-120 seg, duração 30 min."},
  {ind:"Manutenção em VM", dose:"BIC 0,3-0,6 mg/kg/h ou bolus 0,15 mg/kg cada 20-30 min", obs:"Monitor TOF — manter 1-2 respostas (não paralisia total contínua se não necessário)."},
  {ind:"Pediatria — SRI", dose:"0,9-1,2 mg/kg IV", obs:"Sem necessidade de atropina pré (vs succinilcolina)."},
],

ajustes:{
  irc:"Reduzir manutenção (acúmulo); SRI inicial pode ser mantida.",
  iht:"IH grave: prolongamento significativo da duração — reduzir 25-50%.",
  idoso:"Duração mais prolongada — reduzir dose de manutenção.",
  gestante:"Categoria B — pode usar em cesariana.",
  aleita:"Compatível.",
  ped:"0,9-1,2 mg/kg SRI.",
},

mecanismo:"Antagonista competitivo dos receptores nicotínicos na placa motora (não despolariza). Bloqueia ação da acetilcolina → paralisia flácida progressiva. SEM fasciculações. SEM efeitos da succinilcolina (hipercalemia, HM, PIC).",

farmacocin:{
  absorc:"IV apenas",
  distrib:"Espaço extracelular",
  metab:"Hepático parcial",
  elimin:"Biliar (50%) > Renal (33%)",
  meiavida:"60-90 min",
  ligacao:"30%",
},

espectro:[
  "SRI — preferido em contraindicações da succinilcolina (hipercalemia, queimadura, denervação, HM)",
  "Indução em cirurgia eletiva",
  "Manutenção de paralisia em UTI (BIC)",
  "Cesariana (preferido em vez de succinilcolina por segurança)",
],

interacoes:[
  {droga:"Halogenados", efeito:"Potencializa bloqueio — reduzir dose 25-50%."},
  {droga:"Magnésio IV", efeito:"Potencializa significativamente — reduzir dose."},
  {droga:"Aminoglicosídeos", efeito:"Potencializa bloqueio (raro, mas relevante em uso prolongado)."},
  {droga:"Anticonvulsivantes crônicos (fenitoína, carbamazepina)", efeito:"Resistência ao bloqueio — aumentar dose."},
],

efeitos:[
  {tipo:"comum", item:"Reação anafilactoide rara (mais comum entre BNM não-despolarizantes), aumento leve FC, taquicardia"},
  {tipo:"sério", item:"Anafilaxia (incidência maior que cisatracúrio), bloqueio prolongado em IRC/IH grave, dor à injeção"},
  {tipo:"raro", item:"Recurarização após reversão inadequada"},
],

alertas:[
  {nivel:"crit", txt:"REVERSÃO RÁPIDA: SUGAMADEX 16 mg/kg IV reverte rocurônio em 1-3 min (incluindo dose SRI). Disponível em emergência via aérea difícil pós-SRI rocurônio."},
  {nivel:"crit", txt:"REVERSÃO PADRÃO: NEOSTIGMINA 0,04-0,07 mg/kg IV + atropina 0,015-0,02 mg/kg JUNTOS (atropina bloqueia bradicardia da neostigmina). Necessita TOF ≥2 respostas (não reverte paralisia total)."},
  {nivel:"warn", txt:"NÃO esquecer de SEDAR antes de paralisar — paciente paralisado MAS consciente é tortura. Combinar com fentanil/midazolam/propofol."},
  {nivel:"warn", txt:"IH GRAVE: duração pode ser 3-4× a normal — usar TOF, considerar cisatracúrio (eliminação Hofmann, independe de fígado/rim)."},
  {nivel:"info", txt:"Comparado à succinilcolina: início ligeiramente mais lento (60-90s vs 30-60s), duração muito mais longa (40-60 min vs 5-10 min). Sem opção de 'paciente acordar' se IOT falhar (sem sugamadex)."},
],

preparo:"PURO IV bolus em SRI. BIC manutenção: 250 mg em 250 mL SF = 1 mg/mL. Compatível com SF, SG, Ringer.",

monitor:"TOF (train-of-four) — alvo 1-2 respostas para manutenção. ECG, PA, SpO2, temperatura. Sedação adequada SEMPRE (BPS/CPOT).",

diretriz:"SBA BNM 2020. ASA Difficult Airway. ESAIC Sugammadex Guidelines.",
fluxo:null,
calcs:[],
},
{id:"med-succinilcolina", classe:"Bloqueador neuromuscular DESPOLARIZANTE", grupo:"sedativo",
nome:"Succinilcolina (Suxametônio)",
sin:["Quelicin","Suxametônio"],
formas:[
  "Ampola 100 mg/2 mL (50 mg/mL) — diluir antes de usar",
  "Frasco-pó 500 mg para reconstituir",
],
resumo:"BNM despolarizante de ULTRA-CURTA AÇÃO. Padrão em SRI quando reversão rápida é importante (via aérea difícil). Múltiplas contraindicações graves.",
dose_rapida:"1-1,5 mg/kg IV em bolus | Início 30-60 seg, duração 5-10 min",

doses:[
  {ind:"SRI — paralisia rápida", dose:"1-1,5 mg/kg IV em bolus rápido", obs:"Início 30-60 seg. Duração 5-10 min. Vantagem: retorno espontâneo se IOT falhar."},
  {ind:"BNM contínuo (raro)", dose:"NÃO usar em BIC — risco bloqueio fase II e malignos", obs:"Preferir rocurônio para uso prolongado."},
  {ind:"Pediatria — SRI", dose:"1,5-2 mg/kg IV (RN: 2-3 mg/kg)", obs:"Pré-tratar ATROPINA 0,02 mg/kg (risco bradiarritmia/assistolia em criança)."},
],

ajustes:{
  irc:"Sem ajuste — mas EVITAR em hipercalemia (ClCr <30 com K>5,5).",
  iht:"Sem ajuste rotineiro.",
  idoso:"Sem ajuste rotineiro.",
  gestante:"Categoria C — pode usar em IOT obstétrica (não atravessa significativa).",
  aleita:"Compatível.",
  ped:"1,5-2 mg/kg IV; RN 2-3 mg/kg. ATROPINA pré (0,02 mg/kg) para prevenir bradicardia.",
},

mecanismo:"Agonista nicotínico na placa motora — causa DESPOLARIZAÇÃO inicial (fasciculações) seguida de paralisia flácida. Metabolizada pela pseudocolinesterase plasmática (rápida) → diidrocolina + ácido succínico. Não há reversão farmacológica.",

farmacocin:{
  absorc:"IV apenas",
  distrib:"Fluido extracelular (não atravessa BBB)",
  metab:"Pseudocolinesterase plasmática (90%)",
  elimin:"Renal (10%)",
  meiavida:"Plasma: <1 min | Efeito clínico: 5-10 min",
  ligacao:"—",
},

espectro:[
  "SRI — quando paralisia ULTRA-RÁPIDA + REVERSÃO RÁPIDA são importantes",
  "Via aérea difícil prevista (paciente acorda se IOT falhar)",
  "Procedimentos curtíssimos (laringoscopia diagnóstica)",
],

interacoes:[
  {droga:"Inibidores acetilcolinesterase (neostigmina, donepezila)", efeito:"Prolonga succinilcolina drasticamente — evitar."},
  {droga:"Inibidores pseudocolinesterase (ecotiopato — colírio glaucoma, organofosforados)", efeito:"Paralisia prolongada — evitar."},
  {droga:"Halogenados", efeito:"Aumenta risco HIPERTERMIA MALIGNA (combinação clássica)."},
  {droga:"Magnésio IV", efeito:"Potencializa bloqueio — reduzir dose."},
],

efeitos:[
  {tipo:"comum", item:"Fasciculações (precedem paralisia), mialgia pós-procedimento (24-72h), bradicardia (especialmente 2ª dose, em criança), aumento PIC/PIO/intra-gástrica transitórios"},
  {tipo:"sério", item:"HIPERCALEMIA (libera K⁺ pela despolarização) — fatal em pacientes vulneráveis; HIPERTERMIA MALIGNA; bloqueio fase II (uso prolongado); apneia prolongada em deficiência de pseudocolinesterase"},
  {tipo:"raro", item:"Anafilaxia (mais frequente entre BNM), espasmo musseter (precursor HM)"},
],

alertas:[
  {nivel:"crit", txt:"HIPERCALEMIA FATAL em pacientes com: queimadura >24h, denervação (AVE, lesão medular, distrofia muscular), rabdomiólise, imobilização >5-7 dias, distrofia muscular de Duchenne (criança c/ paralisia inexplicada), sepse prolongada. Pode causar K↑ 5-10 mEq/L → PARADA. EVITAR! Usar rocurônio."},
  {nivel:"crit", txt:"HIPERTERMIA MALIGNA: febre, rigidez muscular maciça, hipercapnia inexplicada, acidose. TRATAR: dantrolene 2,5 mg/kg IV imediatamente + suspender halogenado + resfriamento. Susceptibilidade hereditária (RYR1) — história familiar é crítico."},
  {nivel:"crit", txt:"DEFICIÊNCIA DE PSEUDOCOLINESTERASE (1:3000): apneia prolongada (horas). Tratar com ventilação até reversão espontânea + plasma fresco congelado se urgente."},
  {nivel:"warn", txt:"BRADICARDIA/ASSISTOLIA em CRIANÇA (especialmente 2ª dose em <6 anos) — ATROPINA 0,02 mg/kg pré OBRIGATÓRIA."},
  {nivel:"warn", txt:"AUMENTO PIC/PIO transitório — evitar em lesão ocular aberta, hipertensão intracraniana grave (controvérsia atual: provavelmente seguro)."},
  {nivel:"info", txt:"FASCICULAÇÕES esperadas. Pré-tratar com pequena dose de rocurônio 0,06 mg/kg pode reduzir, mas raramente necessário."},
],

preparo:"Diluir 100 mg em 10 mL SF = 10 mg/mL. IV bolus rápido. CONFIRMAR ausência de contraindicações de hipercalemia ANTES.",

monitor:"ECG contínuo (K+ funcional), capnografia, train-of-four se disponível, temperatura (HM), CK pós-procedimento se mialgia.",

diretriz:"SBA SRI 2020. ASA Difficult Airway. MHAUS Malignant Hyperthermia.",
fluxo:null,
calcs:[],
},
);
