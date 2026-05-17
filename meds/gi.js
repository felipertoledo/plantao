/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — meds/gi.js
   5 medicações
   Grupos: gi
   =========================================================== */

MEDICACOES.push(

/* ============== GI (5) ============== */

{id:"med-esomeprazol", contexto:["pa","ubs"], classe:"Inibidor de Bomba de Prótons (IBP) — S-isômero do omeprazol", grupo:"gi",
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
{id:"med-famotidina", contexto:["pa","ubs"], classe:"Bloqueador H2 — receptor histamínico H2 das células parietais", grupo:"gi",
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
{id:"med-omeprazol", contexto:["pa","ubs"], classe:"Inibidor de Bomba de Prótons (IBP) — 1ª geração", grupo:"gi",
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
{id:"med-pantoprazol", contexto:["pa","ubs"], classe:"Inibidor de Bomba de Prótons (IBP)", grupo:"gi",
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
{id:"med-sucralfato", contexto:["pa","ubs"], classe:"Citoprotetor — sal de alumínio + sacarose sulfatada", grupo:"gi",
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
);
