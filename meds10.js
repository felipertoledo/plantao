/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — BIBLIOTECA DE MEDICAÇÕES (PARTE 10)
   Bloco B — DRGE/Dispepsia + Gota
   IBPs + H2 + Sucralfato + Antiácidos + Alopurinol + Febuxostate + Colchicina
   =========================================================== */

MEDICACOES.push(

/* ============== IBPs ============== */

{id:"med-omeprazol", classe:"Inibidor de Bomba de Prótons (IBP) — 1ª geração", grupo:"gi",
nome:"Omeprazol",
sin:["Losec","Peprazol","Omepramax","Omezol"],
formas:["Cápsulas 10 mg, 20 mg, 40 mg — SUS/REMUME (20 mg, 40 mg)","Frasco-ampola IV 40 mg"],
resumo:"IBP de 1ª geração, mais usado no Brasil. Reduz acidez gástrica em 80-95%. TOMAR 30-60 MIN ANTES DO CAFÉ (precisa de bomba ativa para inibir). Cuidado interação com clopidogrel (CYP2C19).",
dose_rapida:"20-40 mg VO 1×/d em jejum (30-60 min antes do café)",

doses:[
{ind:"DRGE não erosiva (NERD)", dose:"20 mg VO 1×/d × 4-8 sem", obs:"Step-down após controle: meia dose → dias alternados → sob demanda."},
{ind:"DRGE erosiva (esofagite A-D)", dose:"40 mg VO 1×/d × 8 sem; manutenção 20-40 mg/d", obs:"Manutenção em dose mínima eficaz a longo prazo."},
{ind:"Úlcera péptica gástrica", dose:"40 mg VO 1×/d × 8 sem (gástrica), 4-6 sem (duodenal)", obs:"+ erradicação H. pylori se positivo."},
{ind:"Erradicação H. pylori (esquema 1ª linha)", dose:"20 mg VO 12/12h + amoxicilina 1g 12/12h + claritromicina 500 mg 12/12h × 14 dias", obs:"Confirmar erradicação 4-8 sem após (suspender IBP 2 sem antes)."},
{ind:"Profilaxia de úlcera por estresse / AINE", dose:"20 mg VO 1×/d", obs:"Indicado em uso crônico de AINE + fator de risco (idade ≥65, hist úlcera, anticoagulação)."},
{ind:"HDA / úlcera sangrando", dose:"80 mg IV bolus + 8 mg/h em BIC × 72h (alto risco rebleed)", obs:"Após endoscopia. Transicionar para VO após 72h se estável."},
{ind:"Pediatria", dose:"1-2 mg/kg/d 1×/d (máx 40 mg/d)", obs:"Aprovado ≥1 ano. EVITAR em <1 ano (DRGE fisiológica)."},
],

ajustes:{
irc:"Sem ajuste rotineiro.",
iht:"IH grave (Child C): reduzir dose (máx 20 mg/d).",
idoso:"Sem ajuste rotineiro. Cautela com uso crônico (riscos).",
gestante:"Categoria C — preferir pantoprazol (B) se possível. Sucralfato/antiácido como 1ª linha.",
aleita:"Compatível.",
ped:"≥1 ano: 1-2 mg/kg/d. EVITAR rotineiro em <1 ano.",
},

mecanismo:"Inibe IRREVERSIVELMENTE a H+/K+ ATPase (bomba de prótons) nas células parietais gástricas — necessita bomba ATIVADA (após refeição) para se ligar. Por isso DEVE ser tomado em jejum, 30-60 min antes da refeição.",

farmacocin:{
absorc:"VO: 35-60% (degradado em pH ácido — formulação gastrorresistente). Cápsulas devem ser engolidas inteiras.",
distrib:"Pouca BBB",
metab:"Hepático CYP2C19 (extenso — metabolismo varia por polimorfismo: lentos vs ultrarrápidos)",
elimin:"Renal (80%) + Biliar (20%)",
meiavida:"0,5-1h plasmática (mas efeito 24-72h — ligação irreversível à bomba)",
ligacao:"95%",
},

espectro:["DRGE (erosiva e não erosiva)","Dispepsia funcional","Úlcera péptica gástrica e duodenal","Erradicação H. pylori","Profilaxia úlcera (estresse, AINE)","Sd Zollinger-Ellison","HDA"],

interacoes:[
{droga:"Clopidogrel", efeito:"INIBE CYP2C19 → ↓ ativação clopidogrel → ↓ efeito antiagregante. EVITAR — preferir PANTOPRAZOL."},
{droga:"Varfarina", efeito:"↑ INR levemente — monitor."},
{droga:"Citalopram, escitalopram", efeito:"↑ concentração — risco QT longo (especialmente em idoso). Limitar citalopram ≤20 mg + omeprazol."},
{droga:"Diazepam, fenitoína", efeito:"↑ concentrações por inibição CYP2C19."},
{droga:"Cetoconazol, itraconazol, atazanavir", efeito:"↓ absorção dessas drogas (requerem pH ácido). EVITAR."},
{droga:"Levotiroxina", efeito:"↓ absorção 30-50% em uso crônico — separar e/ou aumentar dose levotiroxina."},
{droga:"Metotrexato (alta dose)", efeito:"↑ MTX — toxicidade. Suspender IBP em ciclos altos."},
],

efeitos:[
{tipo:"comum", item:"Cefaleia, diarreia, dor abdominal, náusea, constipação, flatulência"},
{tipo:"sério", item:"⚠ USO CRÔNICO (>1 ano): ↓ B12 (anemia macrocítica, neuropatia), ↓ Mg (arritmias), ↓ Ca/fratura osteoporótica, ↑ pneumonia comunitária e nosocomial, ↑ C. difficile, ↑ IRC e nefrite intersticial aguda, possível ↑ demência (controverso)"},
{tipo:"raro", item:"Reação de hipersensibilidade, hepatite, pancreatite, pólipos de glândulas fúndicas (benignos, regridem com suspensão)"},
],

alertas:[
{nivel:"crit", txt:"NEFRITE INTERSTICIAL AGUDA — pode causar IRA em paciente em IBP. Suspeitar se creatinina sobe sem outra explicação. Suspender + avaliar."},
{nivel:"warn", txt:"TIMING É CRÍTICO: tomar 30-60 MIN ANTES DO CAFÉ. Tomar à noite/junto/após reduz eficácia em 40%."},
{nivel:"warn", txt:"USO CRÔNICO — aplicar PREVENÇÃO QUATERNÁRIA: reavaliar periodicamente. Riscos: ↓ B12/Mg/Ca, ↑ pneumonia, ↑ C. difficile, ↑ IRC, possíveis efeitos cognitivos."},
{nivel:"warn", txt:"COM CLOPIDOGREL: PREFERIR PANTOPRAZOL (omeprazol inibe ativação do clopidogrel via CYP2C19)."},
{nivel:"warn", txt:"COM LEVOTIROXINA: omeprazol ↓ absorção 30-50%. Em uso crônico de ambos: separar 4h ou pode necessitar dose maior de levotiroxina."},
{nivel:"warn", txt:"SUSPENSÃO ABRUPTA causa REBOTE ÁCIDO (hipergastrinemia compensatória). Reduzir GRADUALMENTE — meia dose por 2 sem → dias alternados → sob demanda."},
{nivel:"info", txt:"GESTAÇÃO categoria C — preferir PANTOPRAZOL (B). MEV + antiácidos/sucralfato como 1ª escolha em gestante."},
{nivel:"info", txt:"H. PYLORI: confirmar erradicação 4-8 sem após término do esquema. Suspender IBP 2 sem antes do teste (falso negativo)."},
],

preparo:"VO cápsula, 30-60 min antes do café, com água. Engolir INTEIRA (não abrir/triturar — formulação gastrorresistente).",
monitor:"Em uso crônico: B12 anual, Mg em sintomas/AINE/diurético, função renal. TGO/TGP basal.",
diretriz:"AGA 2022. ACG DRGE 2022. Maastricht VI (H. pylori). FDA 2009/2020 (alertas crônicos).",
fluxo:null, calcs:[],
},

{id:"med-pantoprazol", classe:"Inibidor de Bomba de Prótons (IBP)", grupo:"gi",
nome:"Pantoprazol",
sin:["Pantozol","Pantoc","Pantogut"],
formas:["Comprimidos 20 mg, 40 mg — privada / alguns estados SUS","Frasco-ampola IV 40 mg"],
resumo:"IBP de PERFIL DE INTERAÇÃO MAIS BAIXO. PREFERIDO em paciente em uso de clopidogrel, varfarina, citalopram. Categoria B na gestação. Único IBP IV com perfil bem definido para HDA.",
dose_rapida:"40 mg VO 1×/d em jejum (30-60 min antes do café)",

doses:[
{ind:"DRGE / esofagite", dose:"40 mg VO 1×/d × 4-8 sem", obs:"Manutenção 20-40 mg/d."},
{ind:"Erradicação H. pylori", dose:"40 mg 12/12h + amoxicilina 1g 12/12h + claritromicina 500 mg 12/12h × 14 dias", obs:""},
{ind:"HDA (alto risco rebleed pós-endoscopia)", dose:"80 mg IV bolus + 8 mg/h × 72h", obs:"Após endoscopia. IV preferido nas primeiras 72h."},
{ind:"Profilaxia úlcera por estresse (UTI)", dose:"40 mg IV 1×/d ou 20 mg VO/SNG", obs:"Em paciente em VM, anticoagulação, choque, coagulopatia."},
],

ajustes:{
irc:"Sem ajuste rotineiro.",
iht:"IH grave: máx 20 mg/d.",
idoso:"Sem ajuste rotineiro.",
gestante:"CATEGORIA B — PREFERIDO entre IBPs em gestação.",
aleita:"Compatível.",
ped:"≥5 anos: 20-40 mg/d.",
},

mecanismo:"Mesmo do omeprazol — inibe H+/K+ ATPase. DIFERENÇAS: menor metabolismo via CYP2C19 → menos interações medicamentosas. Ativado apenas em pH muito baixo (mais seletivo).",

farmacocin:{
absorc:"VO: 77%",
distrib:"Pouca BBB",
metab:"Hepático CYP2C19 e CYP3A4 (mais balanceado — menos polimorfismo)",
elimin:"Renal (80%)",
meiavida:"1-2h (efeito 24h)",
ligacao:"98%",
},

espectro:["DRGE / esofagite","Úlcera péptica","H. pylori","HDA","Profilaxia úlcera estresse (UTI)","Sd Zollinger-Ellison"],

interacoes:[
{droga:"Clopidogrel", efeito:"INTERAÇÃO MÍNIMA — PREFERIDO vs omeprazol em paciente em DAPT pós-IAM/AVC."},
{droga:"Varfarina", efeito:"Mínima interação."},
{droga:"Cetoconazol, atazanavir", efeito:"↓ absorção dessas drogas — evitar."},
{droga:"Levotiroxina", efeito:"↓ absorção (similar ao omeprazol — separar)."},
{droga:"Metotrexato dose alta", efeito:"↑ MTX — cuidado."},
],

efeitos:[
{tipo:"comum", item:"Similar omeprazol — cefaleia, diarreia, dor abdominal, náusea"},
{tipo:"sério", item:"Riscos de uso crônico iguais aos demais IBPs"},
{tipo:"raro", item:"Nefrite intersticial, hepatite"},
],

alertas:[
{nivel:"warn", txt:"PREFERIR pantoprazol em: clopidogrel, varfarina, citalopram (menos interação CYP)."},
{nivel:"warn", txt:"Mesmas precauções dos demais IBPs em uso crônico (B12, Mg, Ca, pneumonia, C. difficile, IRC)."},
{nivel:"info", txt:"CATEGORIA B — preferido em gestação entre IBPs (omeprazol é C, esomeprazol B em outros guidelines)."},
{nivel:"info", txt:"IV: mais usado em UTI para profilaxia de úlcera de estresse e em HDA."},
],

preparo:"VO comprimido, jejum, 30-60 min antes café. IV: diluir em 100 mL SF/SG5%, infundir 15-30 min.",
monitor:"Em uso crônico: B12, Mg, função renal.",
diretriz:"AGA. ACG. Maastricht VI.",
fluxo:null, calcs:[],
},

{id:"med-esomeprazol", classe:"Inibidor de Bomba de Prótons (IBP) — S-isômero do omeprazol", grupo:"gi",
nome:"Esomeprazol",
sin:["Nexium","Esopraz"],
formas:["Comprimidos / cápsulas 20 mg, 40 mg — privada","Frasco-ampola IV 40 mg"],
resumo:"S-isômero (esquerdo) do omeprazol — eficácia ligeiramente maior por menor metabolismo. Mais caro. Em prática, evidência de superioridade clínica é modesta vs omeprazol/pantoprazol.",
dose_rapida:"20-40 mg VO 1×/d em jejum",

doses:[
{ind:"DRGE / esofagite", dose:"20-40 mg VO 1×/d × 4-8 sem", obs:""},
{ind:"Erradicação H. pylori", dose:"20-40 mg 12/12h + esquema combinado × 14 dias", obs:""},
{ind:"HDA", dose:"80 mg IV bolus + 8 mg/h × 72h", obs:""},
],

ajustes:{
irc:"Sem ajuste.",
iht:"IH grave: máx 20 mg/d.",
idoso:"Sem ajuste.",
gestante:"Categoria B (alguns guidelines) — alternativa ao pantoprazol.",
aleita:"Compatível.",
ped:"≥1 ano: dose por peso.",
},

mecanismo:"S-enantiomer do omeprazol — mesma ação. Vantagem teórica: AUC ligeiramente maior por menor metabolismo CYP2C19. Vantagem clínica modesta.",

farmacocin:{
absorc:"VO: 64-90% (maior que omeprazol)",
distrib:"Pouca BBB",
metab:"Hepático CYP2C19 (menor que omeprazol) + CYP3A4",
elimin:"Renal (80%)",
meiavida:"1-1,5h",
ligacao:"97%",
},

espectro:["DRGE","Úlcera péptica","H. pylori","HDA"],

interacoes:[
{droga:"Clopidogrel", efeito:"Interação menor que omeprazol mas existe — pantoprazol é melhor escolha em DAPT."},
{droga:"Cetoconazol, atazanavir", efeito:"↓ absorção."},
{droga:"Levotiroxina", efeito:"↓ absorção."},
],

efeitos:[
{tipo:"comum", item:"Similar omeprazol"},
{tipo:"sério", item:"Riscos uso crônico iguais"},
{tipo:"raro", item:"Nefrite intersticial"},
],

alertas:[
{nivel:"warn", txt:"BENEFÍCIO sobre omeprazol é MODESTO em estudos. Custo significativamente maior. Em SUS, omeprazol é padrão."},
{nivel:"warn", txt:"Mesmas precauções de uso crônico dos demais IBPs."},
],

preparo:"VO comprimido em jejum, 30-60 min antes café.",
monitor:"Uso crônico: B12, Mg.",
diretriz:"AGA. ACG.",
fluxo:null, calcs:[],
},

/* ============== BLOQUEADOR H2 ============== */

{id:"med-famotidina", classe:"Bloqueador H2 — receptor histamínico H2 das células parietais", grupo:"gi",
nome:"Famotidina",
sin:["Famox","Famodin","Famotec"],
formas:["Comprimidos 20 mg, 40 mg — privada","Frasco-ampola IV 20 mg"],
resumo:"BLOQUEADOR H2 PREFERIDO desde retirada da ranitidina (2020 — contaminação NDMA). Menos potente que IBP. ÚTIL: sintomas noturnos breakthrough, dose sob demanda, intolerância a IBP.",
dose_rapida:"20-40 mg VO 12/12h OU 40 mg VO à noite",

doses:[
{ind:"DRGE leve / sintomas breakthrough", dose:"20 mg VO 12/12h (manhã + noite) OU 40 mg à noite", obs:"Início de ação 30-60 min. Útil para sintomas previsíveis (após refeição, atividade física)."},
{ind:"Manutenção pós-úlcera duodenal", dose:"20-40 mg/d à noite", obs:""},
{ind:"Profilaxia úlcera de estresse (UTI)", dose:"20 mg IV 12/12h (alternativa a IBP)", obs:"Cautela: taquifilaxia em uso prolongado."},
{ind:"Pediatria", dose:"0,5-1 mg/kg/d divididos 1-2× (máx 40 mg/d)", obs:""},
],

ajustes:{
irc:"TFG <50: reduzir dose 50%. TFG <10: reduzir 75%.",
iht:"Sem ajuste rotineiro.",
idoso:"Cautela — ajustar por função renal. Risco confusão/delirium em idoso com IRC.",
gestante:"Categoria B — preferida entre H2.",
aleita:"Compatível.",
ped:"≥1 ano.",
},

mecanismo:"Antagonista competitivo do receptor H2 na célula parietal gástrica → reduz secreção ácida. Eficácia ~60-80% inferior ao IBP. Início rápido (30-60 min), pico em 1-3h.",

farmacocin:{
absorc:"VO: 40-50%",
distrib:"Pouca BBB",
metab:"Hepático mínimo (30%)",
elimin:"Renal (70% inalterado)",
meiavida:"3-4h",
ligacao:"15-20%",
},

espectro:["DRGE leve / breakthrough","Úlcera péptica (manutenção)","Profilaxia úlcera estresse","Dispepsia funcional"],

interacoes:[
{droga:"Cetoconazol, itraconazol, atazanavir", efeito:"↓ absorção (precisam pH ácido) — separar 2-4h."},
{droga:"AAS dose alta", efeito:"Pode mascarar sintomas de úlcera."},
{droga:"Tacrolimus", efeito:"↑ tacrolimus em alguns relatos."},
],

efeitos:[
{tipo:"comum", item:"GERALMENTE BEM TOLERADO — cefaleia leve, diarreia, constipação"},
{tipo:"sério", item:"Em IRC sem ajuste: CONFUSÃO MENTAL, delirium (especialmente idoso)"},
{tipo:"raro", item:"Trombocitopenia, agranulocitose (raras), bradicardia, prolongamento QT (raro)"},
],

alertas:[
{nivel:"warn", txt:"RANITIDINA foi RETIRADA do mercado globalmente em 2020 (NDMA — N-nitrosodimetilamina, contaminante carcinogênico). USAR FAMOTIDINA como substituta."},
{nivel:"warn", txt:"TAQUIFILAXIA: H2 perdem eficácia em 2-6 semanas de uso contínuo. Usar sob demanda ou intermitente, não contínuo crônico."},
{nivel:"warn", txt:"AJUSTE EM IRC é OBRIGATÓRIO — sem ajuste causa CONFUSÃO/DELIRIUM em idoso."},
{nivel:"info", txt:"VANTAGENS sobre IBP: início rápido (30 min), bom para sintomas previsíveis, perfil de segurança em uso intermitente, alternativa em intolerância a IBP."},
{nivel:"info", txt:"NÃO substitui IBP em DRGE moderada/grave ou esofagite erosiva."},
],

preparo:"VO comprimido, com ou sem alimento. IV: diluir em 100 mL SF, infundir 15-30 min.",
monitor:"Função renal em uso prolongado.",
diretriz:"AGA. ACG. ANVISA 2020 (alerta ranitidina).",
fluxo:null, calcs:[],
},

/* ============== SUCRALFATO ============== */

{id:"med-sucralfato", classe:"Citoprotetor — sal de alumínio + sacarose sulfatada", grupo:"gi",
nome:"Sucralfato",
sin:["Sucrafilm","Sucrate"],
formas:["Comprimidos 1 g — privada / SUS variável","Suspensão oral 200 mg/mL"],
resumo:"Forma BARREIRA PROTETORA sobre lesão (úlcera) sem alterar pH. ÚTIL em: gestação (categoria B), esofagite erosiva, úlcera por estresse, refluxo biliar. Tomar SEPARADO de outras drogas.",
dose_rapida:"1 g VO 6/6h OU 4/4h (antes refeições + ao deitar)",

doses:[
{ind:"Úlcera péptica ativa", dose:"1 g VO 6/6h × 4-8 sem", obs:"30 min antes refeições + ao deitar. Pode usar 2 g 12/12h."},
{ind:"Esofagite erosiva", dose:"1 g VO 4-6h × 6-8 sem", obs:"Bom adjuvante ao IBP em casos refratários."},
{ind:"Profilaxia úlcera estresse (alternativa)", dose:"1 g 6/6h VO/SNG", obs:"Menos efetivo que IBP. Usado quando IBP contraindicado."},
{ind:"Refluxo biliar gastrite", dose:"1 g 6/6h", obs:"Útil — IBP não trata bile."},
{ind:"Estomatite / mucosite por radioterapia", dose:"1 g/10 mL bochechar 4-6×/d", obs:"Off-label, evidência em RT cabeça-pescoço."},
],

ajustes:{
irc:"TFG <30: usar com cautela ou evitar (acúmulo de alumínio — encefalopatia, osteomalacia).",
iht:"Sem ajuste.",
idoso:"Cautela em IRC (alumínio).",
gestante:"CATEGORIA B — PREFERIDO em gestante (absorção sistêmica mínima).",
aleita:"Compatível.",
ped:"Dose por peso (40-80 mg/kg/d divididos 4×).",
},

mecanismo:"Em meio ÁCIDO forma um GEL VISCOSO que adere a base de úlcera/erosão (~6h proteção). Estimula produção local de prostaglandinas e bicarbonato. NÃO modifica pH gástrico — ação puramente LOCAL/BARREIRA.",

farmacocin:{
absorc:"VO: <5% (ação local, absorção sistêmica mínima — vantagem em gestação)",
distrib:"Local — não distribui",
metab:"Não metabolizado",
elimin:"Fezes (alumínio absorvido: renal — preocupação em IRC)",
meiavida:"6h proteção local",
ligacao:"Local",
},

espectro:["Úlcera péptica","Esofagite erosiva","Refluxo biliar","Profilaxia úlcera estresse (alternativa)","Gestação (1ª linha)","Mucosite (off-label)"],

interacoes:[
{droga:"⚠ INTERAGE COM QUASE TUDO — reduz absorção", efeito:"Levotiroxina, fluoroquinolonas, tetraciclinas, varfarina, digoxina, fenitoína, ranitidina, cetoconazol. SEPARAR ≥2h."},
{droga:"Antiácidos", efeito:"↓ eficácia do sucralfato (precisa de pH ácido para gel). Separar 30 min."},
],

efeitos:[
{tipo:"comum", item:"CONSTIPAÇÃO (efeito mais comum — 2-15%), náusea leve, gosto metálico"},
{tipo:"sério", item:"Em IRC: encefalopatia por alumínio, osteomalacia"},
{tipo:"raro", item:"Bezoar (em UTI com SNG, raramente)"},
],

alertas:[
{nivel:"crit", txt:"IRC TFG <30: EVITAR ou usar com extrema cautela — risco de encefalopatia por alumínio e osteomalacia."},
{nivel:"warn", txt:"INTERAGE COM QUASE TUDO — orientar paciente: tomar sucralfato 2h antes ou após qualquer outra medicação. Levotiroxina é particularmente afetada."},
{nivel:"warn", txt:"TOMAR ANTES DAS REFEIÇÕES (30 min) — precisa pH ácido para formar gel. Antiácido inibe ação."},
{nivel:"info", txt:"GESTAÇÃO categoria B — preferido por absorção mínima. Bom para esofagite de gestação."},
{nivel:"info", txt:"CONSTIPAÇÃO é o efeito mais comum — orientar hidratação, fibras."},
],

preparo:"VO comprimido 30 min antes refeições + ao deitar (estômago vazio). Suspensão: agitar bem antes.",
monitor:"Em IRC: níveis de alumínio se uso prolongado.",
diretriz:"AGA. ACG.",
fluxo:null, calcs:[],
},

/* ============== ALOPURINOL ============== */

{id:"med-alopurinol", classe:"Inibidor da xantina oxidase — hipouricemiante", grupo:"ost",
nome:"Alopurinol",
sin:["Zyloric","Alopurin"],
formas:["Comprimidos 100 mg, 300 mg — SUS/REMUME amplo"],
resumo:"1ª LINHA em gota crônica (>90% dos casos). Reduz síntese de ácido úrico. INICIAR DOSE BAIXA + TITULAR. Risco RARO de DRESS/SSJ/NET — RASH = SUSPENDER. NUNCA combinar com azatioprina.",
dose_rapida:"Iniciar 100 mg/d, titular 100 mg cada 2-4 sem até meta (3-600 mg/d habitual)",

doses:[
{ind:"Gota crônica (manutenção)", dose:"INICIAR 100 mg VO 1×/d × 2-4 sem", obs:"NÃO INICIAR durante crise aguda (pode prolongar). Se em uso: MANTER."},
{ind:"Titulação", dose:"Aumentar 100 mg cada 2-4 sem até meta (ácido úrico <6 mg/dL ou <5 em tofácea)", obs:"Dose habitual 300-600 mg/d. Dose máxima 800 mg/d. Maioria fica com 300 mg/d."},
{ind:"Gota + IRC TFG 30-60", dose:"INICIAR 50 mg/d, titular mais devagar", obs:"Pode atingir 300-600 mg/d com cuidado — não há limite absoluto baseado em TFG."},
{ind:"Gota + IRC TFG <30", dose:"INICIAR 50 mg em dias alternados, titular muito devagar", obs:"Atingir meta com monitoramento."},
{ind:"Profilaxia sd lise tumoral (pré-quimioterapia)", dose:"600 mg/d × 2-3 dias antes da QT, manter 300 mg/d durante", obs:"Alternativa: rasburicase em alto risco."},
{ind:"Nefrolitíase úrica (sem gota)", dose:"100-300 mg/d", obs:"Junto com alcalinização urinária."},
],

ajustes:{
irc:"TFG 30-60: iniciar 50 mg/d. TFG <30: 50 mg em dias alternados. Titular muito devagar. HD: 100 mg pós-diálise.",
iht:"IH grave: cautela.",
idoso:"Iniciar 50 mg/d, titular devagar.",
gestante:"Categoria C — geralmente suspender. Em casos refratários: discutir individualizado.",
aleita:"Excretado em leite — evitar.",
ped:"Síndrome lise tumoral / hiperuricemia: 10 mg/kg/d.",
},

mecanismo:"Inibe XANTINA OXIDASE → bloqueia conversão hipoxantina → xantina → ácido úrico → ↓ síntese de urato. Metabolizado em OXIPURINOL (também ativo, meia-vida muito longa — 18-30h).",

farmacocin:{
absorc:"VO: 80-90%",
distrib:"Ampla, atravessa BBB",
metab:"Hepático → oxipurinol (metabólito ativo, eliminação renal lenta)",
elimin:"Renal (oxipurinol 70%)",
meiavida:"1-3h alopurinol, 18-30h oxipurinol",
ligacao:"Baixa (<5%)",
},

espectro:["Gota crônica (1ª linha)","Hiperuricemia secundária (lise tumoral, quimioterapia)","Nefrolitíase úrica","Síndrome de Lesch-Nyhan"],

interacoes:[
{droga:"⚠ AZATIOPRINA, 6-MERCAPTOPURINA", efeito:"CONTRAINDICAÇÃO ABSOLUTA — alopurinol inibe xantina oxidase que metaboliza azatioprina → ↑↑ azatioprina → toxicidade hematológica grave (mielossupressão fatal). Se essencial usar: reduzir azatioprina a 25-33% da dose."},
{droga:"Varfarina", efeito:"↑ INR — monitor."},
{droga:"Ciclosporina, teofilina", efeito:"↑ níveis — monitorar."},
{droga:"Tiazídicos, IECA", efeito:"↑ risco rash/hipersensibilidade ao alopurinol — cautela."},
{droga:"Ampicilina/amoxicilina", efeito:"↑ rash."},
],

efeitos:[
{tipo:"comum", item:"Rash leve (2-5%), GI (náusea, diarreia), cefaleia"},
{tipo:"sério", item:"⚠ SÍNDROME DE HIPERSENSIBILIDADE AO ALOPURINOL (AHS) — DRESS, SSJ, NET: RARO MAS POTENCIALMENTE FATAL (mortalidade até 25%). Início 2-8 sem após início. Risco: HLA-B*5801 (asiáticos), IRC, tiazídico"},
{tipo:"raro", item:"Hepatotoxicidade, vasculite, pancitopenia, eosinofilia, nefrite intersticial"},
],

alertas:[
{nivel:"crit", txt:"AZATIOPRINA / 6-MP: CONTRAINDICAÇÃO ABSOLUTA — toxicidade hematológica grave/fatal. Se essencial coadministrar: azatioprina a 25-33% da dose habitual + monitor rigoroso."},
{nivel:"crit", txt:"AHS / DRESS / SSJ / NET: raro mas FATAL. SUSPENDER IMEDIATAMENTE ao primeiro sinal de rash, febre, eosinofilia, alteração hepática. NÃO reiniciar após reação grave."},
{nivel:"crit", txt:"HLA-B*5801 em ASIÁTICOS (chineses Han, coreanos, tailandeses, indígenas americanos): testar antes de iniciar — alta especificidade para SSJ/NET. Brasileiros: considerar em descendentes asiáticos."},
{nivel:"warn", txt:"NÃO INICIAR durante crise aguda — pode prolongar. Iniciar 2-4 sem após resolução da crise. Se paciente JÁ em uso: MANTER (não suspender)."},
{nivel:"warn", txt:"PROFILAXIA com colchicina 0,6 mg/d (3-6 meses) ao iniciar alopurinol — previne crises por mobilização de cristais."},
{nivel:"warn", txt:"IRC: ajustar dose. Estudo AASK + outros não mostraram alopurinol prevenindo progressão de DRC — não usar para esse fim."},
{nivel:"info", txt:"META de ácido úrico: <6 mg/dL geral, <5 em tofácea/refratária. Sem ajuste pela meta, alta taxa de falha."},
],

preparo:"VO comprimido, após refeições, com bastante água. Hidratação ≥2L/d.",
monitor:"Ácido úrico cada 2-4 sem durante titulação, 6/6m estável. Hemograma, função renal, TGO/TGP basal + 3/3m no 1º ano.",
diretriz:"ACR 2020. EULAR 2016+update. ANVISA. CARES trial (segurança CV).",
fluxo:null, calcs:[],
},

/* ============== FEBUXOSTATE ============== */

{id:"med-febuxostate", classe:"Inibidor seletivo não-purínico da xantina oxidase", grupo:"ost",
nome:"Febuxostate",
sin:["Adenuric","Uloric"],
formas:["Comprimidos 40 mg, 80 mg, 120 mg — privada"],
resumo:"2ª linha em gota — intolerância ou refratariedade ao alopurinol. Vantagem: eliminação hepática (menos ajuste em IRC). ⚠ CARES trial: ↑ mortalidade CV em paciente com DCV vs alopurinol — preferir alopurinol em paciente CV.",
dose_rapida:"40-80 mg VO 1×/d",

doses:[
{ind:"Gota crônica (intolerância ao alopurinol ou refratariedade)", dose:"40 mg VO 1×/d × 2-4 sem; se não atingir meta, aumentar para 80 mg/d", obs:"Máx 120 mg/d em refratária."},
{ind:"Gota + IRC", dose:"Sem ajuste rotineiro até TFG ~30. TFG <30: cautela", obs:"Vantagem sobre alopurinol em IRC moderada."},
],

ajustes:{
irc:"TFG ≥30: sem ajuste. TFG 15-29: máx 40 mg/d. TFG <15: evitar.",
iht:"IH leve-moderada: sem ajuste. IH grave: evitar.",
idoso:"Sem ajuste rotineiro.",
gestante:"Categoria C — evitar.",
aleita:"Evitar.",
ped:"Não estabelecido.",
},

mecanismo:"Inibidor SELETIVO da xantina oxidase (XO) — bloqueia tanto a forma oxidada quanto a reduzida (alopurinol bloqueia só a reduzida). NÃO inibe outras enzimas do metabolismo de purinas → MENOS efeito sobre azatioprina (mas ainda CONTRAINDICADO em combinação por precaução).",

farmacocin:{
absorc:"VO: 50%",
distrib:"Ampla",
metab:"Hepático (glucuronidação) — vantagem em IRC",
elimin:"Hepática (50%) + Renal (50%)",
meiavida:"5-8h",
ligacao:"99%",
},

espectro:["Gota crônica (2ª linha após alopurinol)","Intolerância ao alopurinol","Refratariedade","Síndrome lise tumoral (alternativa a alopurinol/rasburicase)"],

interacoes:[
{droga:"⚠ Azatioprina, 6-mercaptopurina", efeito:"CONTRAINDICAÇÃO por precaução — embora interação seja menor que com alopurinol, há relatos de toxicidade."},
{droga:"Teofilina", efeito:"↑ teofilina."},
],

efeitos:[
{tipo:"comum", item:"Náusea, artralgia, ↑ TGO/TGP leve, rash"},
{tipo:"sério", item:"⚠ ↑ MORTALIDADE CV em paciente com DCV estabelecida (CARES trial 2018 vs alopurinol)"},
{tipo:"raro", item:"Hepatotoxicidade grave, SSJ/NET (raros mas descritos), trombose"},
],

alertas:[
{nivel:"crit", txt:"⚠ CARES trial (NEJM 2018): febuxostate ↑ mortalidade CV em 22% vs alopurinol em paciente com DCV estabelecida. FDA emitiu black box. PREFERIR ALOPURINOL em paciente CV."},
{nivel:"crit", txt:"AZATIOPRINA/6-MP: contraindicação por precaução (mesma razão do alopurinol)."},
{nivel:"warn", txt:"Mesmas precauções: NÃO iniciar durante crise. Profilaxia com colchicina 3-6 meses. Suspender se rash significativo."},
{nivel:"warn", txt:"HEPATOTOXICIDADE: monitor TGO/TGP basal + 2-4 sem + periodicamente. Suspender se ↑3× LSN."},
{nivel:"info", txt:"VANTAGEM sobre alopurinol em IRC (menos ajuste). Custo significativamente maior — restringir a casos selecionados."},
],

preparo:"VO comprimido, qualquer hora, com ou sem alimento.",
monitor:"Ácido úrico, hemograma, TGO/TGP, função renal e CV.",
diretriz:"ACR 2020. EULAR. CARES trial 2018. FDA Black Box 2019.",
fluxo:null, calcs:[],
},

/* ============== COLCHICINA ============== */

{id:"med-colchicina", classe:"Alcaloide — anti-inflamatório (inibidor microtúbulos)", grupo:"ost",
nome:"Colchicina",
sin:["Colchis","Colcrys"],
formas:["Comprimidos 0,5 mg, 1 mg — SUS/REMUME (0,5 mg)"],
resumo:"Anti-inflamatório SELETIVO para CRISTALOPATIAS (gota, pseudogota, FMF — febre familiar mediterrânea, pericardite). ESQUEMA MODERNO low-dose. Janela terapêutica estreita — TOXICIDADE GRAVE em sobredosagem.",
dose_rapida:"1,2 mg ATAQUE + 0,6 mg em 1h → 0,6 mg 12/12h × 5-7d (esquema moderno)",

doses:[
{ind:"Crise gotosa aguda (ESQUEMA MODERNO low-dose — ACR 2020)", dose:"1,2 mg VO ataque + 0,6 mg em 1h → 0,6 mg 12/12h × 5-7 dias", obs:"⚠ NÃO USAR ESQUEMA ANTIGO (0,6 mg de hora em hora até diarreia ou 6 mg total) — abandonado por toxicidade. Estudo AGREE confirmou eficácia similar com muito menos efeitos GI."},
{ind:"Profilaxia ao iniciar hipouricemiante", dose:"0,6 mg VO 1×/d × 3-6 MESES", obs:"Reduz crises de mobilização. Sem isso, ~40% têm crise no início."},
{ind:"Profilaxia crônica em gota refratária", dose:"0,6 mg/d", obs:""},
{ind:"FMF (febre familiar mediterrânea)", dose:"1,2-2,4 mg/d divididos 2×", obs:"Tratamento crônico previne crises e amiloidose secundária."},
{ind:"Pericardite (idiopática, pós-IAM)", dose:"0,6 mg 12/12h × 3 meses (aguda) ou 6 meses (recorrente)", obs:"Adicionar a AINE/AAS. COPE, ICAP, CORP-2 trials."},
{ind:"Pseudogota (CPPD)", dose:"Mesmo esquema da gota", obs:""},
{ind:"Doença de Behçet (manifestações cutâneas/articulares)", dose:"1-2 mg/d", obs:"Off-label, evidência."},
],

ajustes:{
irc:"TFG 30-60: máx 1,2 mg/d. TFG <30: 0,3 mg/d ou contraindicado. HD: evitar.",
iht:"IH grave (Child C): contraindicada. Child A/B: cautela, reduzir dose.",
idoso:"Cautela — toxicidade mais frequente. Ajustar por função renal.",
gestante:"Categoria C — geralmente evitar (mas usada em FMF gestante sob supervisão).",
aleita:"Geralmente evitar (presente em leite).",
ped:"Doses específicas para FMF (uso especializado).",
},

mecanismo:"Liga-se a TUBULINA → inibe polimerização de microtúbulos → bloqueia migração e fagocitose de neutrófilos → ↓ inflamação induzida por cristais. NÃO afeta urato sérico. EFEITO ANTIINFLAMATÓRIO SELETIVO para cristalopatias.",

farmacocin:{
absorc:"VO: 45%",
distrib:"Concentra em leucócitos (intracellular) — meia-vida intracelular >24h",
metab:"Hepático (CYP3A4) — ALTAMENTE SENSÍVEL a interações via CYP3A4 e P-gp",
elimin:"Biliar (80%) + Renal (20%)",
meiavida:"20-40h (mas efeito intracelular mais longo)",
ligacao:"30-50%",
},

espectro:["Crise gotosa aguda","Profilaxia gota","FMF (febre familiar mediterrânea)","Pericardite (aguda + recorrente)","Pseudogota (CPPD)","Doença de Behçet (off-label)","Pericardite COVID/pós-IAM (uso restrito)"],

interacoes:[
{droga:"⚠ ESTATINAS (atorvastatina, sinvastatina, rosuvastatina)", efeito:"↑↑ risco de miopatia/rabdomiólise. Cautela em uso conjunto."},
{droga:"⚠ CLARITROMICINA, eritromicina, telitromicina", efeito:"↑↑ colchicina (inibe CYP3A4 + P-gp) — pode causar INTOXICAÇÃO FATAL. EVITAR ou reduzir colchicina drasticamente."},
{droga:"⚠ CICLOSPORINA, tacrolimus", efeito:"↑↑ colchicina — toxicidade. Evitar."},
{droga:"⚠ DILTIAZEM, VERAPAMIL", efeito:"↑ colchicina (CYP3A4) — reduzir dose."},
{droga:"Cetoconazol, itraconazol, ritonavir, atazanavir", efeito:"↑↑ colchicina — evitar ou reduzir."},
{droga:"Suco de toranja", efeito:"↑ colchicina — evitar quantidade grande."},
{droga:"Digoxina, fibratos", efeito:"↑ risco miopatia."},
],

efeitos:[
{tipo:"comum", item:"GI (DIARREIA — 23% no esquema moderno, mas era 80% no antigo): náusea, vômito, dor abdominal — frequente, dose-dependente"},
{tipo:"sério", item:"⚠ TOXICIDADE GRAVE em sobredosagem (acidental ou interação): MIELOSSUPRESSÃO (pancitopenia), neuropatia/miopatia, rabdomiólise, hepatotoxicidade, IRA, choque, FALÊNCIA MÚLTIPLA — sem antídoto, mortalidade alta em ingestão >0,8 mg/kg"},
{tipo:"raro", item:"Alopecia (uso prolongado), ↑ CK (miopatia silenciosa), hipospermia"},
],

alertas:[
{nivel:"crit", txt:"⚠ JANELA TERAPÊUTICA MUITO ESTREITA — toxicidade grave em sobredosagem. Ingestão >0,5 mg/kg = INTOXICAÇÃO GRAVE; >0,8 mg/kg pode ser FATAL (sem antídoto). Idoso/IRC: muito mais sensível."},
{nivel:"crit", txt:"⚠ INTERAÇÃO CLARITROMICINA + COLCHICINA = INTOXICAÇÃO POTENCIALMENTE FATAL (CYP3A4 + P-gp). EVITAR combinação especialmente em IRC. Casos fatais documentados."},
{nivel:"crit", txt:"ESQUEMA ANTIGO (até diarreia ou 6 mg total) FOI ABANDONADO — toxicidade inaceitável. USAR ESQUEMA LOW-DOSE 1,2 + 0,6 + 0,6 12/12h."},
{nivel:"warn", txt:"AJUSTE EM IRC é CRÍTICO — TFG 30-60: máx 1,2 mg/d; TFG <30: 0,3 mg/d ou evitar. HD: contraindicada (não dialisa)."},
{nivel:"warn", txt:"INTERAÇÃO COM ESTATINAS: risco miopatia adicional. Monitor CPK em uso prolongado conjunto."},
{nivel:"warn", txt:"DIARREIA é SINAL DE TOXICIDADE — suspender e reavaliar. NÃO é meta terapêutica (era no esquema antigo)."},
{nivel:"info", txt:"USO EM PERICARDITE: trials COPE, ICAP, CORP-2 estabeleceram benefício — pode prescrever em emergência pós-IAM ou pericardite idiopática."},
{nivel:"info", txt:"COVID: COLCORONA trial (2021) — benefício modesto em paciente ambulatorial. NÃO é tratamento padrão atual."},
],

preparo:"VO comprimido, com ou sem alimento (com alimento se GI).",
monitor:"Hemograma + CPK + função renal/hepática periodicamente em uso crônico.",
diretriz:"ACR Gout 2020 + AGREE trial. ESC Pericardite 2015 (COPE, ICAP, CORP-2). FMF guidelines.",
fluxo:null, calcs:[],
},

);
