/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — PULO DO GATO
   Truques de plantão — técnicas pouco ensinadas mas úteis
   =========================================================== */

PATOLOGIAS.push(

/* ============== CORPO ESTRANHO EM NARINA ============== */
{id:"pulo-corpo-narina", nome:"Corpo estranho em narina — pressão positiva contralateral", sis:"pulo", grav:"baixa",
cid:"T17.1", ciap:"R87",
sin:["Corpo estranho nasal","Objeto no nariz","Bolinha de gude no nariz","Botão no nariz","Feijão no nariz","Beijo materno","Mother's kiss"],

def:"Técnica de PRESSÃO POSITIVA pela narina contralateral para expulsar corpo estranho. Funciona em criança E adulto. Evita sedação/anestesia geral em ~80% dos casos. Alternativa: 'beijo materno' (boca da mãe na boca da criança).",

quadro:[
"Quadro típico: criança 1-5a com objeto na narina (botão, conta, pedaço de espuma, semente)",
"Pode ser ATIVO (testemunhado) ou ENCONTRADO incidentalmente",
"Sinais que sugerem corpo estranho oculto: rinorreia UNILATERAL fétida/purulenta persistente, epistaxe recorrente, obstrução nasal unilateral",
"⚠ EXCLUIR: corpo estranho em via aérea inferior (laringe/traqueia) — engasgo, estridor, dispneia = OUTRA EMERGÊNCIA",
"OBJETOS PROBLEMÁTICOS: BATERIAS DE BOTÃO (lesão tecidual em <2h — emergência otorrinolaringológica), ímãs (pode ter ímãs em outras cavidades — perfuração), objetos pontiagudos",
],

diag:[
"Inspeção com espéculo nasal + boa iluminação (lanterna de celular se necessário)",
"DETERMINAR: tipo de objeto, profundidade, há quanto tempo, integridade da mucosa",
"⚠ MATERIAL HIGROSCÓPICO (semente, feijão, ervilha, papel, esponja) — EXPANDE COM ÁGUA. NÃO usar lavagem com SF",
"OBJETO LISO E SECO (botão, conta de plástico, pedrinha) — pode tentar lavagem ou pressão positiva",
"Em adulto: avaliar contexto (transtorno mental, demência) — pode ter outros objetos",
],

rx:[
{etapa:"inicial", d:"⚠ PRIMEIRO — EXCLUIR bateria de botão / ímã / objeto pontiagudo. SE SIM: encaminhar OTORRINO URGENTE (não tentar remoção)", o:"Bateria botão causa necrose por corrente galvânica em <2h. Ímã pode ter outros parceiros."},

{etapa:"inicial", d:"AVALIAR cooperação do paciente. Criança muito agitada = sedação leve OU referir", o:"Acalmar criança + envolver acompanhante. Posicionar no colo segurando braços e cabeça."},

{etapa:"escala", d:"OPÇÃO 1 — TÉCNICA DA PRESSÃO POSITIVA COM O₂ (PREFERIDA em objeto higroscópico/duvidoso)", o:""},
{etapa:"escala", d:"(a) Conectar cateter nasal de O₂ ao fluxômetro — abrir no fluxo MÁXIMO (10-15 L/min)", o:""},
{etapa:"escala", d:"(b) Posicionar a ponta do cateter na narina CONTRALATERAL (a SADIA) — vedar bem", o:""},
{etapa:"escala", d:"(c) Pedir/orientar paciente a manter a boca FECHADA durante a manobra", o:"Em criança pequena: fazer breve (1-2 seg)."},
{etapa:"escala", d:"(d) Pressão positiva força o ar pela coana → empurra objeto pra fora pela narina obstruída", o:"Pode haver explosão sonora do objeto saindo — normal."},
{etapa:"escala", d:"(e) Se falhar 1ª tentativa: repetir 1-2× ajustando vedação", o:"Se 3 tentativas sem sucesso: referenciar."},

{etapa:"escala", d:"OPÇÃO 2 — BEIJO MATERNO (Mother's Kiss) — alternativa em criança pequena", o:""},
{etapa:"escala", d:"(a) Mãe/cuidador sela boca na boca da criança", o:""},
{etapa:"escala", d:"(b) Profissional ocluí a narina CONTRALATERAL com dedo", o:""},
{etapa:"escala", d:"(c) Mãe SOPRA um jato curto e firme na boca da criança", o:"Pressão positiva sai pela narina obstruída expulsando objeto."},
{etapa:"escala", d:"(d) Pode repetir 2-3×", o:"Taxa de sucesso ~60% em séries publicadas."},

{etapa:"escala", d:"OPÇÃO 3 — LAVAGEM NASAL com SF (APENAS objetos NÃO higroscópicos: botão, conta plástica, pedrinha)", o:""},
{etapa:"escala", d:"⚠ CONTRAINDICADA em: semente/feijão/ervilha/espuma/papel/algodão — EXPANDEM com água e PIORAM a obstrução", o:""},
{etapa:"escala", d:"Seringa de 20 mL com SF morno na narina contralateral → empurra objeto", o:""},

{etapa:"adj", d:"COMPLEMENTAR: vasoconstritor tópico (oximetazolina 0,05% spray ou efedrina 0,5%) antes da manobra — reduz edema mucoso", o:"Especialmente útil se já houve tentativas prévias frustradas (edema reativo)."},

{etapa:"alta", d:"CRITÉRIOS DE REFERÊNCIA OTORRINO: (1) falha após 2-3 tentativas; (2) sangramento significativo; (3) objeto profundamente impactado; (4) bateria de botão / ímã / pontiagudo; (5) sinais de complicação (sinusite, celulite facial)", o:""},

{etapa:"alta", d:"PÓS-REMOÇÃO: examinar AMBAS as narinas (pode haver outro objeto). Verificar integridade da mucosa. Orientar lavagem com SF por 3-5 dias se houve trauma leve", o:""},
],

alertas:[
{nivel:"crit", txt:"BATERIA DE BOTÃO no nariz é EMERGÊNCIA — corrente galvânica causa necrose de mucosa + perfuração de septo em <2h. Encaminhar otorrino URGENTE para remoção sob visualização direta. NÃO tentar remoção empírica."},
{nivel:"crit", txt:"ÍMÃS: se um ímã, pode ter outro em outra cavidade (par se atrai) — risco de perfuração intestinal/septal. RX face para confirmar único corpo estranho."},
{nivel:"warn", txt:"LAVAGEM CONTRAINDICADA em material higroscópico (semente, feijão, ervilha, espuma, papel) — EXPANDE com água, piora a obstrução. Usar PRESSÃO POSITIVA com O₂."},
{nivel:"warn", txt:"NÃO USAR PINÇA ÀS CEGAS — empurra objeto mais profundo. Tentar apenas se VISUALIZAÇÃO clara + objeto não-impactado."},
{nivel:"warn", txt:"3 tentativas frustradas = REFERENCIAR. Mais tentativas aumentam edema, sangramento, ansiedade da criança, risco de aspiração."},
{nivel:"info", txt:"Em adulto com corpo estranho nasal recorrente: avaliar transtorno mental, demência, automutilação."},
],

fluxo:null,
diretriz:"AAP / ENT. Cochrane review (Mother's Kiss). BMJ technique reviews."
},

/* ============== COMPRESSA COM ADRENALINA ============== */
{id:"pulo-adrenalina-sangramento", nome:"Compressa com adrenalina — sangramento que não para", sis:"pulo", grav:"baixa",
cid:"-", ciap:"-",
sin:["Adrenalina tópica","Vasoconstrição local","Hemostasia tópica","Corte sangrante","Ferida sangrante","Sangramento que não para"],

def:"VASOCONSTRIÇÃO LOCAL com adrenalina 1:1.000 embebida em gaze para ferimentos superficiais com sangramento persistente apesar de compressão. Padrão em ER mundialmente. Reduz necessidade de sutura imediata ou cauterização.",

quadro:[
"Ferida superficial ou laceração com sangramento que NÃO PARA com pressão manual de 10 min",
"Útil em: couro cabeludo (área muito vascularizada), face, dedos, ferida em paciente em ácido acetilsalicílico/clopidogrel/anticoagulante, paciente com coagulopatia leve",
"⚠ NÃO usar em: sangramento arterial pulsátil (precisa hemostasia mecânica/torniquete), ferida em extremidade terminal/distal (dedo, pênis, orelha, nariz, pena — vasoconstrição pode causar necrose por isquemia)",
"⚠ NÃO usar em: paciente com hipertensão grave descontrolada, taquicardia significativa, arritmia, ICC descompensada (risco de absorção sistêmica em ferida grande)",
],

diag:[
"Avaliar tipo de sangramento: VENOSO (escoa, escuro — adrenalina ajuda) vs ARTERIAL (pulsátil, vermelho — adrenalina NÃO substitui hemostasia mecânica)",
"Avaliar profundidade e necessidade de sutura/exploração — adrenalina é PONTE, não substituto de sutura quando indicada",
"Excluir corpo estranho retido",
],

exames:["Geralmente nenhum — clínica","Em paciente anticoagulado: INR (varfarina), hemograma","Em paciente em DAPT: avaliar suspensão temporária se cirurgia indicada"],

rx:[
{etapa:"inicial", d:"COMPRESSÃO MANUAL FIRME × 10-15 min — sempre é a 1ª medida", o:"Marcação no relógio. Sem interrupções para 'ver se parou'. Verdadeira pressão direta. ~70% para com isso."},

{etapa:"escala", d:"SE SANGRAMENTO PERSISTENTE: preparar compressa de adrenalina", o:""},
{etapa:"escala", d:"(a) GAZE estéril de 7,5×7,5 cm dobrada em 2-4", o:""},
{etapa:"escala", d:"(b) EMBEBER em ADRENALINA 1 mg/mL (1:1.000) — 1 ampola sobre a gaze (cobre bem)", o:""},
{etapa:"escala", d:"(c) APLICAR diretamente sobre o foco de sangramento", o:""},
{etapa:"escala", d:"(d) PRESSÃO FIRME por 5-10 minutos com gaze seca sobreposta + atadura", o:""},
{etapa:"escala", d:"(e) REMOVER e reavaliar — geralmente sangramento parou ou reduziu drasticamente", o:""},

{etapa:"escala", d:"ALTERNATIVA — diluição 1:10.000 (mais segura em pediatria / face / próximo a extremidades)", o:"Diluir 1 mL adrenalina 1:1.000 em 9 mL SF → 1:10.000. Embeber gaze."},

{etapa:"adj", d:"⚠ INFILTRAÇÃO PERILESIONAL com lidocaína + adrenalina (1:100.000 ou 1:200.000) — útil em sutura de ferida com sangramento difuso", o:"PADRÃO em ER. Reduz dor + hemostasia em campo cirúrgico. Mesmas contraindicações de extremidades terminais."},

{etapa:"adj", d:"OUTROS HEMOSTÁTICOS LOCAIS úteis: ácido tranexâmico tópico (compressa embebida — útil em hemofílicos ou anticoagulados), sulfato de alumínio (hemostático nasal/cutâneo)", o:""},

{etapa:"adj", d:"EM EPISTAXE persistente: gaze com adrenalina + lidocaína 2% no vestíbulo nasal anterior por 10-15 min — funciona em ~80% dos sangramentos do plexo de Kiesselbach", o:""},

{etapa:"alta", d:"REAVALIAR APÓS 10 min — se sangramento parou: AVALIAR necessidade de sutura/cauterização (tratamento DEFINITIVO). Adrenalina é PONTE", o:""},
{etapa:"alta", d:"SE PERSISTIR sangrando após compressa: considerar sutura hemostática em X, ligadura de vaso visível, encaminhamento (sangramento arterial significativo)", o:""},
],

alertas:[
{nivel:"crit", txt:"⚠ NÃO USAR EM EXTREMIDADES TERMINAIS — dedo, pênis, orelha, nariz, pena (em criança), prepúcio. Vasoconstrição prolongada pode causar NECROSE ISQUÊMICA. Mesma regra do anestésico com adrenalina."},
{nivel:"crit", txt:"NÃO substitui hemostasia mecânica em sangramento ARTERIAL pulsátil — torniquete + compressão de vaso proximal + encaminhamento."},
{nivel:"warn", txt:"CAUTELA SISTÊMICA: paciente com HAS grave, taquicardia, arritmia, cardiopatia isquêmica, hipertireoidismo descompensado, glaucoma de ângulo estreito — adrenalina pode ser absorvida (especialmente em ferida grande / mucosa)."},
{nivel:"warn", txt:"GESTANTE: usar com cautela — categoria C. Em mancha cesariana, pode causar contração uterina. Em sangramento pequeno: ácido tranexâmico ou compressão manual prolongada."},
{nivel:"info", txt:"COR DA GAZE: pode mudar para esbranquiçada/branca após contato com adrenalina — efeito vasoconstritor visível na mucosa adjacente."},
{nivel:"info", txt:"REUTILIZAÇÃO: adrenalina 1:1.000 da ampola aberta — usar em até 1 hora (cuidado com contaminação se múltiplos pacientes)."},
],

fluxo:null,
diretriz:"Tintinalli ER. Roberts & Hedges ER procedures. Prática plantonista global."
},

/* ============== IMPACTAÇÃO ALIMENTAR + GLOBUS ============== */
{id:"pulo-impactacao-globus", nome:"Impactação alimentar esofágica + sensação de globus", sis:"pulo", grav:"baixa",
cid:"T18.1 (impactação) / R09.8 (globus)", ciap:"D02 / R29",
sin:["Engasgo","Comida entalada","Bolo alimentar","Globus","Sensação de bola na garganta","Disfagia psicogênica","Impactação esofágica","Steakhouse syndrome"],

def:"Distinguir IMPACTAÇÃO REAL (alimento parado no esôfago — disfagia + sialorreia + incapaz de engolir saliva) de SENSAÇÃO DE GLOBUS (sem obstrução real — ansiedade, refluxo, espasmo). Conduta MUITO diferente.",

quadro:[
"IMPACTAÇÃO ALIMENTAR REAL ('steakhouse syndrome'): paciente comeu, sentiu parar, NÃO CONSEGUE engolir saliva (sialorreia), regurgita ao tentar comer/beber. Geralmente bolo de carne/pão",
"⚠ Geralmente há doença esofágica prévia (estenose, anel de Schatzki, esofagite eosinofílica, acalasia, neoplasia)",
"GLOBUS FARÍNGEO (globus pharyngeus): SENSAÇÃO de bola/aperto na garganta, mas paciente CONSEGUE engolir comida e saliva normalmente. Mais frequente em mulher, ansiedade, DRGE, pós-IVAS",
"⚠ ATENÇÃO em quadro com STRIDOR / disfonia / dispneia: pode ser obstrução de via aérea (corpo estranho laríngeo) — outra emergência, NÃO é impactação esofágica",
"PISTAS para diferenciar: 'comida parou' + sialorreia + episódio agudo = IMPACTAÇÃO. 'Bola que não passa' + saliva passa + crônico/recorrente = GLOBUS",
],

diag:[
"HISTÓRIA CLÍNICA discrimina em >80% dos casos",
"AVALIAR via aérea SEMPRE PRIMEIRO — engasgo + estridor + dispneia = corpo estranho LARÍNGEO (Heimlich)",
"Em impactação real: paciente DESCONFORTÁVEL, sialorreia ativa, regurgita líquidos, dor retroesternal",
"Em globus: paciente FALA NORMAL, engole saliva, sintoma 'crônico' ou recorrente, geralmente mulher 30-50a com ansiedade/DRGE",
"⚠ IMPACTAÇÃO PROLONGADA (>12-24h): risco de perfuração esofágica, isquemia mucosa, infecção mediastinal — emergência endoscópica",
],

exames:["Em impactação prolongada (>2h): Rx tórax PA + cervical (avaliar pneumomediastino se perfuração)","Em paciente com episódios recorrentes: encaminhar para EDA + biópsias (descartar esofagite eosinofílica, neoplasia, estenose)","Em globus crônico sem sinais de alarme: descartar DRGE — teste IBP"],

rx:[
{etapa:"inicial", d:"⚠ AVALIAR VIA AÉREA — se estridor, cianose, dispneia, incapacidade de falar: HEIMLICH / via aérea avançada", o:"NÃO é impactação esofágica. Outra emergência."},

{etapa:"inicial", d:"DISTINGUIR — impactação real vs globus", o:""},
{etapa:"inicial", d:"Paciente FALA, RESPIRA NORMAL, ENGOLE saliva = GLOBUS (não emergência)", o:""},
{etapa:"inicial", d:"Paciente NÃO ENGOLE saliva (sialorreia ativa), regurgita líquidos = IMPACTAÇÃO ESOFÁGICA", o:""},

{etapa:"escala", d:"⚠ IMPACTAÇÃO REAL — manejo", o:""},
{etapa:"escala", d:"(1) MANTER paciente confortável, sentado, NPO (nada por boca)", o:""},
{etapa:"escala", d:"(2) Aguardar resolução espontânea — ~50% resolve em 6-12h", o:""},
{etapa:"escala", d:"(3) TENTATIVA FARMACOLÓGICA: Glucagon 1-2 mg IV em bolus (relaxa esfíncter inferior do esôfago) — pode tentar 2 doses com intervalo de 20 min", o:"Efeitos: náusea/vômito. Eficácia ~40-50%."},
{etapa:"escala", d:"(4) ALTERNATIVA / ADJUVANTE: água gaseificada 30-60 mL (CO₂ pode deslocar bolo)", o:""},
{etapa:"escala", d:"(5) TÉCNICA DA SNG (último recurso antes de endoscopia): passar SNG fina (8-12 Fr) suavemente, tentar empurrar bolo alimentar com pressão delicada de água/SF", o:"⚠ RISCO DE PERFURAÇÃO — fazer apenas se profissional experiente, paciente cooperativo, bolo alimentar (não objeto sólido/osso). Nunca forçar. Se resistência: parar."},

{etapa:"escala", d:"⚠ ENCAMINHAMENTO ENDOSCÓPICO: (1) impactação >12-24h; (2) falha de medidas iniciais; (3) suspeita de osso/objeto pontiagudo/bateria; (4) sinais de perfuração (dor torácica intensa, enfisema subcutâneo, febre, taquicardia)", o:"EDA é tratamento DEFINITIVO + diagnóstico (estenose? esofagite eosinofílica? CA?)."},

{etapa:"escala", d:"GLOBUS FARÍNGEO — manejo", o:""},
{etapa:"escala", d:"(1) Tranquilizar paciente — não há obstrução real", o:""},
{etapa:"escala", d:"(2) Avaliar e tratar causas subjacentes: DRGE (IBP 4-8 sem), ansiedade, pós-IVAS, hábito de pigarrear", o:""},
{etapa:"escala", d:"(3) Inalação com 1-2 ampolas de ADRENALINA + SF 5 mL — alívio sintomático em alguns pacientes", o:"⚠ Útil em quadros com componente de edema laríngeo/inflamação. Em globus puramente psicogênico: efeito é placebo + redução de ansiedade. Cuidado em HAS, taquicardia, cardiopatia."},
{etapa:"escala", d:"(4) Hidratação, chá morno, evitar reforçar a fixação no sintoma", o:""},

{etapa:"adj", d:"⚠ SINAIS DE ALARME para investigar globus = referenciar gastro/ORL: disfagia progressiva, odinofagia, emagrecimento, voz arrastada/disfonia persistente, hematêmese, anemia, idade ≥55a com sintomas novos", o:"Globus em idoso com red flag não é globus — investigar."},

{etapa:"adj", d:"ESOFAGITE EOSINOFÍLICA: causa subdiagnosticada de impactação alimentar recorrente em adulto jovem (especialmente atópico) — investigar com EDA + biópsias", o:""},

{etapa:"alta", d:"PÓS-IMPACTAÇÃO RESOLVIDA: encaminhar EDA AMBULATORIAL (1-4 sem) para investigar causa — mesmo se resolveu espontaneamente", o:"Maioria tem causa subjacente (estenose, anel, eosinofílica, CA)."},
],

alertas:[
{nivel:"crit", txt:"DISTINGUIR DA OBSTRUÇÃO DE VIA AÉREA — estridor + dispneia + cianose = HEIMLICH IMEDIATO (corpo estranho laríngeo). Não é impactação esofágica."},
{nivel:"crit", txt:"IMPACTAÇÃO >24h: risco perfuração esofágica, mediastinite. Sinais de alarme: dor torácica intensa, enfisema subcutâneo, febre, taquicardia, leucocitose. Emergência cirúrgica."},
{nivel:"warn", txt:"SNG para empurrar bolo: TÉCNICA DE RECURSO — risco de perfuração. Fazer apenas se: bolo alimentar (não osso/objeto), <12h, profissional experiente, sem dor torácica importante. Se resistência: PARAR."},
{nivel:"warn", txt:"GLUCAGON em impactação: eficácia ~40-50%, pode causar náusea/vômito (risco de aspiração se paciente sialorreico)."},
{nivel:"warn", txt:"NÃO usar carbonato/papaína/abacaxi para 'amolecer' bolo — risco perfuração, sem benefício comprovado."},
{nivel:"warn", txt:"INALAÇÃO COM ADRENALINA em globus: útil se há componente edematoso/inflamatório. Em globus psicogênico puro: melhora é principalmente placebo. Cautela em cardiopata."},
{nivel:"info", txt:"ESOFAGITE EOSINOFÍLICA é causa importante de impactação em adulto jovem atópico — investigar com biópsias."},
],

fluxo:null,
diretriz:"ASGE Guidelines Foreign Body. ACG. UpToDate."
},

/* ============== ANEL PRESO EM DEDO ============== */
{id:"pulo-anel-dedo", nome:"Anel preso em dedo edemaciado — técnica do fio dental", sis:"pulo", grav:"baixa",
cid:"-", ciap:"S15",
sin:["Anel preso","Aliança presa","Anel apertado","Fio dental no anel","String technique"],

def:"Técnica do FIO DENTAL ENROLADO para remover anel de dedo edemaciado SEM CORTAR. Funciona em >90% dos casos quando edema é leve-moderado. Alternativa ao cortador (que destrói o anel) em casos onde valor sentimental/financeiro importa.",

quadro:[
"Anel apertado por: trauma com edema, alergia, ganho de peso, gestação, infecção, picada de inseto",
"AVALIAR sinais isquêmicos do dedo: cianose, palidez, dor desproporcional, parestesia, redução da capilaridade → URGÊNCIA (síndrome compartimental do dedo) — cortar imediatamente sem tentar técnicas",
"⚠ DEDO ISQUÊMICO = URGÊNCIA → cortar anel imediatamente (não tentar técnicas demoradas)",
],

diag:[
"Inspeção: tamanho do anel, posição, edema distal, perfusão (preenchimento capilar)",
"Avaliar mobilidade ativa e sensibilidade",
"Comparar com dedo contralateral",
],

exames:["Geralmente nenhum","Em trauma associado: Rx se suspeita de fratura"],

rx:[
{etapa:"inicial", d:"⚠ AVALIAR PERFUSÃO PRIMEIRO — dedo cianótico/pálido/dor intensa/parestesia = SÍNDROME COMPARTIMENTAL DO DEDO. Cortar imediatamente sem tentar técnicas", o:""},

{etapa:"inicial", d:"REDUZIR EDEMA antes de tentar remoção:", o:""},
{etapa:"inicial", d:"Elevar mão acima do coração por 5-10 min", o:""},
{etapa:"inicial", d:"Compressa fria/gelo (envolto em pano) por 5-10 min", o:""},
{etapa:"inicial", d:"Compressão manual do dedo da ponta em direção ao anel (massagem retrógrada de edema)", o:""},

{etapa:"escala", d:"LUBRIFICAÇÃO PRIMEIRO — tentativa simples (resolve ~40%)", o:""},
{etapa:"escala", d:"(a) Aplicar SABÃO LÍQUIDO, ÓLEO mineral, VASELINA, ÓLEO de cozinha ou geleia lubrificante (KY) no dedo", o:"Qualquer lubrificante. Sabão de mão funciona ótimo."},
{etapa:"escala", d:"(b) Girar e puxar o anel com movimentos suaves de rotação", o:""},

{etapa:"escala", d:"⚠ SE FALHAR: TÉCNICA DO FIO DENTAL (string technique)", o:""},
{etapa:"escala", d:"(a) Pegar fio dental encerado de uns 50-80 cm (alternativa: fio de seda, sutura 2-0, linha grossa)", o:""},
{etapa:"escala", d:"(b) PASSAR uma ponta do fio POR BAIXO do anel — usar agulha de seringa sem bisel (descartável) ou pinça hemostática para guiar", o:""},
{etapa:"escala", d:"(c) DEIXAR ~10 cm de fio sobrando do lado proximal (em direção à mão)", o:""},
{etapa:"escala", d:"(d) Com a ponta DISTAL (em direção à ponta do dedo), ENROLAR APERTADO o dedo em espiral, da borda do anel até passar a articulação interfalângica proximal", o:"Cada volta encostada na anterior, compressão firme — comprime o edema."},
{etapa:"escala", d:"(e) Aguardar 2-3 min com o enrolamento (reduz edema)", o:""},
{etapa:"escala", d:"(f) Lubrificar a região do anel + dedo enrolado", o:""},
{etapa:"escala", d:"(g) PUXAR a ponta proximal do fio (em direção à ponta do dedo) — o anel é arrastado pela espiral, deslizando sobre a IFP", o:""},
{etapa:"escala", d:"(h) À medida que o fio desenrola, o anel acompanha — SAINDO pela ponta", o:""},

{etapa:"adj", d:"OUTRAS TÉCNICAS se fio dental falhar:", o:""},
{etapa:"adj", d:"LUVA DE LÁTEX cortada em tira (técnica de Macgraith): mesmo princípio do fio mas com mais compressão", o:""},
{etapa:"adj", d:"COMPRESSA COM ÁLCOOL: reduz edema (vasoconstrição) + lubrifica", o:""},
{etapa:"adj", d:"BANDAGEM ESTÉRIL ENROLADA: alternativa ao fio dental — mais conforto, mais lenta", o:""},

{etapa:"adj", d:"⚠ CORTAR O ANEL (último recurso ou se isquemia)", o:""},
{etapa:"adj", d:"Cortador de anel manual / serra portátil odontológica / alicate cortado de joalheiro", o:"Avisar paciente antes (valor sentimental). Possível restaurar/recolocar com joalheiro depois."},
{etapa:"adj", d:"PROTEGER pele com gaze/cartão durante corte para não ferir", o:""},
{etapa:"adj", d:"Após remoção: avaliar pulso/sensibilidade/movimento do dedo", o:""},

{etapa:"alta", d:"PÓS-REMOÇÃO: avaliar perfusão, sensibilidade, movimento. Tratar causa subjacente do edema (trauma, alergia, infecção)", o:""},
{etapa:"alta", d:"Orientar paciente a NÃO usar anel apertado ou trocar de tamanho", o:""},
],

alertas:[
{nivel:"crit", txt:"DEDO ISQUÊMICO (cianose, palidez, dor desproporcional, perda de sensibilidade, perfusão capilar lenta): URGÊNCIA — cortar anel IMEDIATAMENTE. Não perder tempo com técnicas demoradas."},
{nivel:"warn", txt:"AVALIAR PERFUSÃO ANTES e DEPOIS de qualquer manobra. Compressão prolongada pode piorar isquemia em casos limítrofes."},
{nivel:"warn", txt:"AGULHA SEM BISEL para passar o fio — bisel pode lacerar pele. Alternativa: pinça hemostática delicada."},
{nivel:"info", txt:"VALOR DO ANEL: discutir com paciente — algumas alianças têm enorme valor sentimental. Tentar fio dental antes de cortar, exceto se isquemia."},
{nivel:"info", txt:"GESTANTE com aliança apertando: técnica padrão — geralmente fio dental funciona."},
],

fluxo:null,
diretriz:"BMJ Procedure Reviews. Roberts & Hedges ER Procedures."
},

/* ============== CRISE ASMÁTICA SEM NEBULIZADOR ============== */
{id:"pulo-asma-espacador-pet", nome:"Crise asmática sem nebulizador — espaçador de garrafa PET", sis:"pulo", grav:"moderada",
cid:"J45.9", ciap:"R96",
sin:["Asma sem nebulização","Espaçador caseiro","Espaçador de garrafa","Spacer PET","Bombinha sem espaçador","Crise asmática plantão"],

def:"ALTERNATIVA quando o serviço não tem nebulizador disponível ou está em uso. MDI (bombinha) + ESPAÇADOR DE GARRAFA PET é EQUIVALENTE à nebulização em meta-análises (Cochrane 2013, 2024 update). Funciona em adulto e criança ≥5 anos.",

quadro:[
"Crise asmática leve-moderada em paciente sem acesso a nebulizador",
"Adulto cooperativo OU criança ≥5 anos cooperativa",
"⚠ Crise GRAVE / IMPENDENTE (silêncio respiratório, exaustão, cianose, alteração do nível de consciência): NÃO é momento de improvisar — IOT + adrenalina + transferência",
"Útil em: UBS rural, plantão em PA pequeno, criança que não tolera máscara/nebulizador",
],

diag:[
"Avaliar gravidade da crise (PEF se disponível, SatO₂, FC, FR, uso de musculatura acessória, fala em frases vs palavras)",
"⚠ Crise GRAVE: SatO₂ <90%, fala em palavras, exaustão, alteração mental, silêncio respiratório, FC >120, FR >30 → NÃO improvisar",
"Confirmar diagnóstico de asma (vs outros sibilantes: anafilaxia, corpo estranho, ICC, DPOC)",
],

exames:["Oximetria de pulso (essencial)","PEF (peak expiratory flow) se disponível","Em casos graves: gasometria arterial, Rx tórax (se febre ou suspeita complicação)"],

rx:[
{etapa:"inicial", d:"⚠ AVALIAR GRAVIDADE — crise grave NÃO improvisar. Iniciar O₂ + adrenalina IM se disponível + transferência", o:""},

{etapa:"inicial", d:"MONTAR O ESPAÇADOR DE GARRAFA PET", o:""},
{etapa:"inicial", d:"(a) Pegar garrafa PET LIMPA de 500-600 mL (refrigerante/água, sem rótulo se possível)", o:""},
{etapa:"inicial", d:"(b) Fazer FURO no FUNDO da garrafa do tamanho do BOCAL do MDI (bombinha) — encaixar firme", o:"Pode usar canivete/tesoura/chave de fenda esquentada. Encaixe deve ser apertado (vedação)."},
{etapa:"inicial", d:"(c) USAR O BICO/GARGALO da garrafa como BOCAL — paciente coloca a boca no gargalo", o:"Em criança pequena: cortar a base da garrafa diagonal pra encaixar máscara facial caseira (manga de blusa, gaze)."},

{etapa:"escala", d:"ADMINISTRAÇÃO do broncodilatador", o:""},
{etapa:"escala", d:"(1) AGITAR a bombinha (salbutamol/fenoterol) bem antes do uso", o:""},
{etapa:"escala", d:"(2) Encaixar a bombinha no furo do fundo da garrafa", o:""},
{etapa:"escala", d:"(3) Paciente colocar a boca no gargalo da garrafa, com vedação", o:""},
{etapa:"escala", d:"(4) DISPARAR 1 JATO do MDI dentro da garrafa", o:""},
{etapa:"escala", d:"(5) Paciente respira NORMAL e profundamente 5-6 vezes pelo gargalo da garrafa", o:"NÃO inspirar muito rápido (impacto na orofaringe — perde dose). Respiração tranquila."},
{etapa:"escala", d:"(6) Repetir mais 1 jato + 5-6 respirações", o:""},

{etapa:"escala", d:"DOSE de ataque equivalente à nebulização:", o:""},
{etapa:"escala", d:"⚠ ADULTO: 4-8 jatos (puffs) de salbutamol 100 mcg, repetir a cada 20 min × 3 doses na 1ª hora", o:"Equivalente a 1 nebulização de 5 mg = ~8 puffs."},
{etapa:"escala", d:"CRIANÇA: 4-6 jatos de salbutamol 100 mcg, repetir a cada 20 min × 3 doses na 1ª hora", o:"GINA / PALS."},

{etapa:"adj", d:"BROMETO DE IPRATRÓPIO (se disponível em MDI) — adicionar em crise moderada-grave", o:""},
{etapa:"adj", d:"4 jatos de ipratrópio 20 mcg + salbutamol — mesma técnica", o:"GINA: ipratrópio adiciona benefício nas primeiras 3 doses."},

{etapa:"adj", d:"CORTICOIDE SISTÊMICO precoce (em qualquer crise moderada+):", o:""},
{etapa:"adj", d:"Prednisona 1 mg/kg VO (máx 50 mg) OU prednisolona equivalente", o:"Iniciar precoce — reduz hospitalização."},

{etapa:"alta", d:"REAVALIAR após 1ª hora — SatO₂, FR, ausculta, capacidade de falar em frases", o:""},
{etapa:"alta", d:"MELHORA: alta com prednisona 5-7 dias + broncodilatador SOS + retorno em 24-48h + corticoide inalatório (se ainda não usa)", o:""},
{etapa:"alta", d:"SEM MELHORA / PIORA: transferir para hospital", o:""},
],

alertas:[
{nivel:"crit", txt:"CRISE GRAVE / IMPENDENTE (silêncio respiratório, exaustão, alteração mental, SatO₂ <90%): NÃO é momento de improvisar espaçador — O₂ alta concentração + adrenalina IM 0,3-0,5 mg + chamar transporte/SAMU."},
{nivel:"warn", txt:"GARRAFA PET LIMPA e VEDAÇÃO ADEQUADA — vazamento entre MDI e garrafa = perde dose. Encaixe deve ser apertado."},
{nivel:"warn", txt:"DOSE DO MDI: 1 PUFF POR VEZ no espaçador (NÃO disparar 4-5 juntos — a maioria adere às paredes e se perde)."},
{nivel:"warn", txt:"RESPIRAÇÃO TRANQUILA pelo espaçador — inspirar muito rápido faz impactação na orofaringe e perde dose."},
{nivel:"info", txt:"EVIDÊNCIA: Cochrane review (Cates 2013, atualização 2024): MDI + espaçador é EQUIVALENTE à nebulização em crises leve-moderada em adulto e criança ≥5a. Vantagens: mais barato, mais rápido (~1 min vs 15 min), menos taquicardia (menor absorção sistêmica)."},
{nivel:"info", txt:"ALTERNATIVA AO PET: copo descartável grande, sacola de papel, espaçador comercial. PET é mais comum e funciona bem."},
],

fluxo:null,
diretriz:"GINA 2024-2025. Cochrane Review (Cates 2013). SBP. SBPT."
},

/* ============== MANOBRA DE EPLEY ============== */
{id:"pulo-epley-vppb", nome:"Manobra de Epley — VPPB do canal posterior", sis:"pulo", grav:"baixa",
cid:"H81.1", ciap:"H82",
sin:["VPPB","Vertigem posicional","Epley","Vertigem benigna","Cristais","Vertigem com posição","Canal posterior","Otolitíase"],

def:"VPPB do canal posterior = causa mais comum de vertigem na APS (~50% das vertigens). MANOBRA DE EPLEY recoloca os otólitos no utrículo. Resolve em ~70-80% na 1ª aplicação, ~90% após 2-3 sessões. Evita encaminhamento ORL desnecessário.",

quadro:[
"Vertigem (rotação verdadeira, ambiente girando) DESENCADEADA por mudanças de posição: deitar, levantar, virar na cama, estender o pescoço para olhar pra cima ('vertigem da prateleira')",
"Crises de SEGUNDOS a 1 MINUTO (não horas — diferencia de doença de Ménière, neurite vestibular)",
"NÃO HÁ surdez, zumbido, sintomas neurológicos focais (diferencia de causas centrais)",
"Pode ser desencadeado por trauma craniano leve, infecção viral, gestação, repouso prolongado",
"Mais frequente em mulheres, ≥50 anos",
],

diag:[
"MANOBRA DE DIX-HALLPIKE — padrão-ouro de diagnóstico do VPPB do canal posterior",
"⚠ Identificar lado afetado: lado para o qual a cabeça está girada quando aparece nistagmo + vertigem",
"⚠ EXCLUIR causas centrais: déficit focal, ataxia, disartria, perda auditiva súbita, cefaleia atípica, nistagmo vertical puro ou que não fatiga (vide HiNTS — Head Impulse, Nystagmus, Test of Skew)",
"⚠ Sinais de ALARME para vertigem central: nistagmo direção mutante, sem latência, sem fadiga, vertical puro; sintomas neurológicos focais; cefaleia intensa; ataxia desproporcional",
],

exames:["Anamnese e exame físico (foco neurológico) — geralmente suficientes","Em dúvida diagnóstica ou red flags: TC ou RM crânio + audiometria + ENG/VNG"],

rx:[
{etapa:"inicial", d:"⚠ EXCLUIR VERTIGEM CENTRAL antes da manobra — sinais neurológicos focais, ataxia, cefaleia atípica, nistagmo vertical puro sem fadiga", o:""},

{etapa:"inicial", d:"MANOBRA DE DIX-HALLPIKE (diagnóstica)", o:""},
{etapa:"inicial", d:"(a) Paciente SENTADO na maca, com cabeça girada 45° para o lado A SER TESTADO", o:""},
{etapa:"inicial", d:"(b) Examinador atrás/lateral, deitar paciente RAPIDAMENTE com a cabeça pendente 20-30° abaixo da maca (cabeça mantida em 45°)", o:""},
{etapa:"inicial", d:"(c) OBSERVAR olhos por 30-60 seg — VPPB do canal posterior: nistagmo torcional/up-beat para o lado afetado, com latência 5-20 seg, dura 30-60 seg, FATIGA com repetição", o:""},
{etapa:"inicial", d:"(d) Repetir para o outro lado", o:""},

{etapa:"escala", d:"MANOBRA DE EPLEY (terapêutica) — para o lado AFETADO (que positivou Dix-Hallpike)", o:""},

{etapa:"escala", d:"POSIÇÃO 1: Paciente sentado na maca, cabeça girada 45° para o LADO AFETADO", o:""},
{etapa:"escala", d:"Deitar rapidamente com cabeça pendente (igual Dix-Hallpike) — MANTER 30 SEGUNDOS após desaparecimento do nistagmo (1-2 min total)", o:""},

{etapa:"escala", d:"POSIÇÃO 2: Sem levantar, GIRAR a cabeça 90° para o LADO OPOSTO (sadio) — agora cabeça girada 45° para o lado sadio", o:""},
{etapa:"escala", d:"MANTER 30 segundos", o:""},

{etapa:"escala", d:"POSIÇÃO 3: Paciente VIRA o corpo todo para o lado sadio (decúbito lateral sobre o lado sadio), cabeça acompanha — agora cabeça apontada 45° para BAIXO em direção ao chão (olhando para o chão)", o:""},
{etapa:"escala", d:"MANTER 30 segundos", o:""},

{etapa:"escala", d:"POSIÇÃO 4: Paciente SENTA-SE lentamente, cabeça inclinada para frente (queixo no peito)", o:""},
{etapa:"escala", d:"MANTER 30 segundos", o:""},

{etapa:"escala", d:"⚠ CADA POSIÇÃO mantida por 30 segundos APÓS o nistagmo desaparecer (ou mínimo 30 segundos se sem nistagmo). Manobra completa: ~3-5 minutos.", o:""},

{etapa:"escala", d:"NO FINAL: paciente sentado normalmente. Pode haver náusea/vertigem residual leve por alguns minutos", o:""},

{etapa:"adj", d:"ORIENTAÇÕES PÓS-EPLEY (controversas — evidência limitada para restrição postural)", o:""},
{etapa:"adj", d:"Sintomatologia leve por 24-48h é esperada", o:""},
{etapa:"adj", d:"Antieméticos se necessário (dimenidrinato, meclizina) — POR POUCOS DIAS apenas (evita compensação central)", o:""},

{etapa:"adj", d:"REPETIR EPLEY se sintomas persistem ou recidiva precoce — 70-80% resolve na 1ª aplicação, 90% após 2-3 sessões", o:""},

{etapa:"adj", d:"EXERCÍCIOS DE BRANDT-DAROFF para casa (recidivas frequentes) — autoaplicação 3×/d", o:"Sentar, deitar rápido para um lado com cabeça girada 45°, manter 30 seg, sentar 30 seg, fazer para o outro lado. 5-10 ciclos."},

{etapa:"alta", d:"REAVALIAR em 1 semana com Dix-Hallpike — se persistir POSITIVO: repetir Epley", o:""},
{etapa:"alta", d:"REFERENCIAR ORL/otoneuro se: (1) refratariedade após 3 sessões de Epley; (2) suspeita de canal lateral ou anterior (manobras diferentes); (3) sintomas atípicos; (4) sinais de alarme central", o:""},
],

alertas:[
{nivel:"crit", txt:"EXCLUIR VERTIGEM CENTRAL antes de Epley — déficit focal, ataxia, disartria, cefaleia atípica, perda auditiva súbita, nistagmo vertical puro. Estes precisam de TC/RM."},
{nivel:"warn", txt:"DIX-HALLPIKE TÍPICO do VPPB posterior: nistagmo torcional/up-beat, LATÊNCIA (5-20 seg), DURAÇÃO breve (30-60 seg), FATIGA com repetição. Sem essas características = pensar em central."},
{nivel:"warn", txt:"CONTRAINDICAÇÕES RELATIVAS para Epley: estenose carotídea grave, instabilidade cervical (artrose, AR cervical, espondilite), restrição cervical severa, descolamento de retina recente, gravidez avançada (decúbitos)."},
{nivel:"warn", txt:"USO PROLONGADO de antieméticos (dimenidrinato, meclizina) >5-7 dias INIBE COMPENSAÇÃO central — usar apenas alguns dias se necessário."},
{nivel:"info", txt:"BRANDT-DAROFF para casa em recidivas — pode ser autoaplicado 3×/d."},
{nivel:"info", txt:"VPPB tem alta taxa de RECIDIVA (até 50% em 5 anos) — orientar paciente a procurar atendimento se voltar."},
],

fluxo:null,
diretriz:"AAO-HNS Guidelines VPPB 2017+. Bárány Society. Cochrane Reviews Vestibular Disorders."
},

/* ============== PARAFIMOSE — REDUÇÃO MANUAL ============== */
{id:"pulo-parafimose", nome:"Parafimose — redução manual com compressão", sis:"pulo", grav:"moderada",
cid:"N47", ciap:"Y06",
sin:["Parafimose","Prepúcio preso","Glande estrangulada","Redução prepúcio","Anel prepucial"],

def:"PARAFIMOSE = prepúcio retraído atrás da glande NÃO retorna à posição → constrição → edema progressivo → potencial ISQUEMIA. URGÊNCIA. Redução manual com compressão é tratamento de primeira linha — funciona em >90% se feito precocemente.",

quadro:[
"Quadro típico: criança ou adulto cujo prepúcio foi retraído (banho, higiene, cateterismo, manipulação sexual) e NÃO retornou",
"Edema progressivo da glande + prepúcio retraído → CÍRCULO VICIOSO",
"DOR + edema + glande arroxeada/violácea + 'anel' prepucial constritor visível",
"⚠ Tardio (>4-6h): isquemia, dor extrema, possível necrose se não tratada",
"Causa MAIS COMUM em ambiente hospitalar: cateterismo vesical onde o prepúcio não foi recolocado após procedimento — IATROGÊNICA",
],

diag:[
"Inspeção visual: anel prepucial constritor + glande edemaciada distal",
"Avaliar perfusão da glande (cor, temperatura, tempo de enchimento capilar)",
"DIFERENCIAR de FIMOSE (estreitamento prepucial sem retração) — situação diferente, sem urgência aguda",
],

exames:["Geralmente nenhum","Em casos crônicos / suspeita de DST: investigar conforme contexto"],

rx:[
{etapa:"inicial", d:"⚠ URGÊNCIA — quanto mais cedo, mais fácil. Avaliar perfusão da glande", o:""},

{etapa:"inicial", d:"REDUÇÃO DE EDEMA antes da redução manual (chave do sucesso):", o:""},
{etapa:"inicial", d:"(a) COMPRESSÃO MANUAL FIRME com a mão envolvendo a glande edemaciada por 5-10 MINUTOS", o:"Como 'espremer uma laranja' suavemente — desloca o edema para fora."},
{etapa:"inicial", d:"(b) COMPRESSAS FRIAS / GELO (envolto em pano) por 5-10 min adicional", o:"Vasoconstrição reduz edema."},

{etapa:"inicial", d:"ANALGESIA é essencial — paciente cooperativo:", o:""},
{etapa:"inicial", d:"AINE VO (ibuprofeno 400-600 mg ou cetoprofeno 50-100 mg) + paracetamol", o:""},
{etapa:"inicial", d:"BLOQUEIO PENIANO com lidocaína 1% sem adrenalina (importante: SEM adrenalina — extremidade terminal): 5-10 mL infiltrado na base do pênis bilateralmente", o:"Anestesia profunda. Profissional treinado."},
{etapa:"inicial", d:"OU lidocaína GEL 2% tópica abundante na glande + prepúcio (10-15 min de absorção)", o:""},

{etapa:"escala", d:"REDUÇÃO MANUAL após edema reduzido:", o:""},
{etapa:"escala", d:"(a) Posicionar paciente em decúbito dorsal, relaxado", o:""},
{etapa:"escala", d:"(b) Lubrificar abundantemente glande + prepúcio (gel lubrificante, KY, lidocaína gel)", o:""},
{etapa:"escala", d:"(c) Com AMBAS as mãos: POLEGARES sobre a glande empurrando-a para dentro, INDICADORES e MÉDIOS atrás do anel constritor puxando o prepúcio para frente", o:""},
{etapa:"escala", d:"(d) Aplicar pressão CONSTANTE e FIRME — não solavanco — por 1-3 minutos", o:"A glande progressivamente entra de volta no prepúcio."},
{etapa:"escala", d:"(e) Sucesso = prepúcio recobre a glande, sem dor", o:""},

{etapa:"adj", d:"⚠ SE FALHAR a redução manual:", o:""},
{etapa:"adj", d:"TÉCNICA DE PUNÇÕES MÚLTIPLAS (Dundee technique) — descomprime edema pela liberação de líquido: várias punções com agulha 25-26G na glande edemaciada (5-20 punções pequenas, sob lidocaína) + redução manual subsequente", o:"Profissional treinado."},

{etapa:"adj", d:"COMPRESSÃO COM DEXTROSE 50% (hipertônica) ou MANITOL — gaze embebida envolvendo glande por 1-2h reduz edema osmoticamente", o:"Alternativa quando há tempo."},

{etapa:"adj", d:"CIRURGIA — incisão dorsal do anel constritor (dorsal slit): RECURSO em refratariedade ou sinais isquêmicos", o:"Encaminhar urologia / cirurgia."},

{etapa:"alta", d:"PÓS-REDUÇÃO: orientar paciente / cuidadores a NUNCA deixar o prepúcio retraído sem reposicioná-lo (após banho, micção, sexo, cateterismo)", o:""},
{etapa:"alta", d:"Avaliar necessidade de POSTECTOMIA (circuncisão) ambulatorial — em recidivas, fimose subjacente, paciente alterado/incapaz de cuidado adequado, idoso institucionalizado", o:""},
{etapa:"alta", d:"⚠ EM CATETERISMO VESICAL: sempre recolocar o prepúcio após procedimento — falha = parafimose iatrogênica (registrar isso na rotina da equipe)", o:""},
],

alertas:[
{nivel:"crit", txt:"GLANDE PROGRESSIVAMENTE ISQUÊMICA (negra, fria, sem dor — necrose): cirurgia urgente (dorsal slit) — encaminhar urologia. Pode levar a perda parcial da glande."},
{nivel:"crit", txt:"NÃO TARDAR — quanto mais tempo, mais edema, mais difícil reduzir. Janela ideal <4-6h."},
{nivel:"warn", txt:"BLOQUEIO PENIANO: usar lidocaína SEM ADRENALINA (extremidade terminal — risco isquemia)."},
{nivel:"warn", txt:"PUNÇÕES MÚLTIPLAS (Dundee): técnica específica — profissional treinado. Risco infecção, dor adicional."},
{nivel:"warn", txt:"CATETERISMO VESICAL: PROTOCOLO DE EQUIPE — sempre recolocar prepúcio após procedimento. Causa importante de parafimose iatrogênica."},
{nivel:"info", txt:"FIMOSE (não retração) ≠ PARAFIMOSE (retração + edema). Diferentes situações."},
],

fluxo:null,
diretriz:"Roberts & Hedges. AUA (American Urological Association). UpToDate."
},

/* ============== HIPOGLICEMIA SEM ACESSO VENOSO ============== */
{id:"pulo-hipo-sem-acesso", nome:"Hipoglicemia sem acesso venoso — glicose por mucosa", sis:"pulo", grav:"alta",
cid:"E16.2", ciap:"T87",
sin:["Hipoglicemia sem acesso","Glicose oral","Glicose mucosa","Pasta de açúcar","Mel na bochecha","Glucagon"],

def:"Hipoglicemia em paciente INCONSCIENTE ou com via aérea comprometida — quando NÃO se consegue acesso venoso ou demora-se a obter. Alternativas: glucagon IM, glicose 30-50% em MUCOSA ORAL (absorvida pela mucosa, especialmente sublingual e jugal), açúcar/mel em pasta na boca.",

quadro:[
"Paciente diabético em uso de insulina ou hipoglicemiante oral (especialmente glibenclamida — hipoglicemia prolongada)",
"Sintomas: confusão, sudorese, taquicardia, palidez, agitação → progressão para coma, convulsão",
"Alteração do nível de consciência impedindo administração oral SEGURA (risco aspiração)",
"Acesso venoso difícil (idoso desidratado, criança, obeso, drogadição)",
"Ambiente de baixa complexidade — UBS, domicílio, ambulância básica sem médico",
],

diag:[
"Glicemia capilar (HGT) — confirmar hipoglicemia <70 mg/dL com sintomas (ou <54 mg/dL sem)",
"Avaliar nível de consciência (Glasgow) — risco aspiração",
"Investigar causa: medicação (sulfonilureia tem efeito prolongado), insulina, jejum, álcool, IRC",
],

exames:["HGT seriado","Em hospital: glicemia laboratorial, eletrólitos, função renal/hepática"],

rx:[
{etapa:"inicial", d:"⚠ AVALIAR via aérea + nível de consciência", o:""},

{etapa:"escala", d:"PACIENTE CONSCIENTE/ COLABORATIVO — VO normal:", o:""},
{etapa:"escala", d:"15 g de carboidrato simples: 1 copo de suco de laranja, 1 colher de sopa de mel, 3-4 balas, 200 mL de refrigerante normal", o:"Regra dos 15: 15 g, reavaliar em 15 min, repetir se ainda <70."},

{etapa:"escala", d:"PACIENTE INCONSCIENTE / NÍVEL DE CONSCIÊNCIA REBAIXADO + ACESSO VENOSO DIFÍCIL:", o:""},

{etapa:"escala", d:"OPÇÃO 1 — GLUCAGON IM (PADRÃO se disponível) 1 mg IM (adulto e criança >25 kg) ou 0,5 mg IM (criança <25 kg)", o:"Início de ação 8-10 min. Pode causar náusea/vômito. Eficácia limitada se reservas de glicogênio depletadas (alcoolismo, jejum prolongado, hepatopatia). Disponibilidade limitada no SUS."},

{etapa:"escala", d:"OPÇÃO 2 — GLICOSE EM MUCOSA ORAL/SUBLINGUAL (técnica do 'pulo do gato')", o:""},
{etapa:"escala", d:"(a) PASTA DE AÇÚCAR: misturar açúcar refinado com pouca água ou saliva → pasta espessa", o:""},
{etapa:"escala", d:"(b) ALTERNATIVA: mel puro, glicose 50% (1 ampola), açúcar molhado", o:""},
{etapa:"escala", d:"(c) APLICAR sob a língua (sublingual) E na mucosa jugal (entre dente e bochecha)", o:""},
{etapa:"escala", d:"(d) Massagear externamente as bochechas para favorecer absorção", o:"Mucosa oral absorve glicose por difusão — não tanto quanto IV, mas alguma. Útil enquanto se busca acesso."},
{etapa:"escala", d:"(e) ⚠ NÃO COLOCAR em quantidade que possa SER ASPIRADA — pequenas quantidades, posicionado em decúbito lateral", o:""},

{etapa:"escala", d:"OPÇÃO 3 — ACESSO INTRAÓSSEO (em emergência grave + treinamento)", o:""},
{etapa:"escala", d:"Glicose 50% — 25-50 mL IO (via tibial proximal, úmero proximal)", o:"Profissional treinado, agulha intraóssea."},

{etapa:"adj", d:"BUSCAR ACESSO VENOSO SEMPRE como prioridade — outras vias são adjuvantes/ponte", o:""},
{etapa:"adj", d:"Veias de jugular externa, veias de mão (anestesiologia em emergência)", o:""},

{etapa:"adj", d:"⚠ HIPOGLICEMIA POR SULFONILUREIA é PROLONGADA — após reversão inicial, pode RECIDIVAR em horas", o:""},
{etapa:"adj", d:"Manter PACIENTE EM OBSERVAÇÃO com glicose IV em manutenção (SG 10% 100-200 mL/h ajustado pelo HGT)", o:""},
{etapa:"adj", d:"INTERNAÇÃO mínima 24-72h em hipoglicemia por glibenclamida/gliclazida — recidiva frequente", o:""},

{etapa:"alta", d:"PÓS-RECUPERAÇÃO: alimentação, ajuste medicamentoso, identificar causa (dose, esquecimento de refeição, IRC, idoso com cognição comprometida)", o:""},
{etapa:"alta", d:"⚠ Em IDOSO com hipoglicemia por sulfonilureia: REPENSAR a indicação — glibenclamida é especialmente perigosa em idoso (Beers Criteria) — trocar por metformina + outros", o:""},
],

alertas:[
{nivel:"crit", txt:"HIPOGLICEMIA POR SULFONILUREIA (especialmente GLIBENCLAMIDA) tem MEIA-VIDA LONGA — recidiva após reversão inicial é frequente. INTERNAÇÃO 24-72h. Manter glicose IV. NÃO dar alta após HGT normal único."},
{nivel:"crit", txt:"NÃO COLOCAR ALIMENTO/AÇÚCAR NA BOCA DE PACIENTE INCONSCIENTE SEM DECÚBITO LATERAL — risco grave de aspiração."},
{nivel:"warn", txt:"GLICOSE EM MUCOSA é PONTE, não substituto da via IV — buscar acesso simultaneamente."},
{nivel:"warn", txt:"GLUCAGON requer reservas de glicogênio — pouca eficácia em alcoolismo crônico, jejum prolongado, hepatopatia avançada."},
{nivel:"warn", txt:"GLIBENCLAMIDA em idoso = critério de Beers (medicação potencialmente inapropriada) — propor substituição (gliclazida MR, metformina, iDPP-4) em paciente que teve hipoglicemia."},
{nivel:"info", txt:"REGRA DOS 15 em paciente consciente: 15 g carboidrato, esperar 15 min, repetir se <70."},
],

fluxo:null,
diretriz:"ADA Standards 2025. SBD 2025. ALS algoritmos."
},

/* ============== TAMPÃO DE CERUME — PREPARO PRÉVIO ============== */
{id:"pulo-tampao-cerume", nome:"Tampão de cerume — preparo prévio com óleo mineral", sis:"pulo", grav:"baixa",
cid:"H61.2", ciap:"H81",
sin:["Cerume","Tampão de cerume","Cera no ouvido","Cerúmen","Ear wax","Lavagem de ouvido"],

def:"PREPARO PRÉVIO com ÓLEO MINERAL ou peróxido de hidrogênio 1,5% por 3-5 dias ANTES da lavagem amolece o cerume = resolve em 1 tentativa vs várias tentativas frustradas + irritação do meato. Trivial mas raramente ensinado.",

quadro:[
"Tampão de cerume com sintomas: hipoacusia, sensação de plenitude auricular, zumbido, tontura leve, otalgia leve, dificuldade de exame da membrana timpânica",
"Mais frequente em idoso, usuários de aparelho auditivo, fone in-ear, conduto auditivo estreito, dermatite seborreica",
"⚠ NÃO LAVAR se: perfuração timpânica conhecida ou suspeita, tubo de ventilação, otite externa ativa, cirurgia otológica prévia, paciente sem cooperação",
],

diag:[
"Otoscopia confirma — cerume bloqueando conduto",
"Avaliar integridade da MT (visualizada ou histórico de perfuração)",
"Excluir corpo estranho, otomicose, otite externa",
],

exames:["Geralmente nenhum — clínica","Audiometria se sintomas persistem após remoção (avaliação adicional)"],

rx:[
{etapa:"inicial", d:"⚠ AVALIAR contraindicação à lavagem (perfuração MT, tubo, OE ativa, cirurgia)", o:"Se contraindicação → curetagem suave ou referenciar ORL."},

{etapa:"escala", d:"PREPARO PRÉVIO — o 'pulo do gato' que muda tudo:", o:""},
{etapa:"escala", d:"Prescrever uma das seguintes opções por 3-5 dias ANTES de retornar para lavagem:", o:""},
{etapa:"escala", d:"OPÇÃO A — Óleo mineral (óleo para bebê comum) 2 GOTAS em cada ouvido afetado, 2×/d × 3-5 dias", o:"BARATO, disponível em qualquer farmácia, eficaz. Padrão."},
{etapa:"escala", d:"OPÇÃO B — Peróxido de hidrogênio (água oxigenada) 3% diluída 1:1 com água — 3-5 gotas 2×/d × 3-5 dias", o:"Faz efervescência (normal). Mais agressivo, evitar em pele sensível."},
{etapa:"escala", d:"OPÇÃO C — Bicarbonato 5% solução — 3-5 gotas 2×/d × 3-5 dias", o:"Disponível em farmácias de manipulação."},
{etapa:"escala", d:"OPÇÃO D — Produtos comerciais ceruminolíticos (Cerumin, Otosporin, Otobio Plus) — conforme bula", o:""},

{etapa:"escala", d:"TÉCNICA DA APLICAÇÃO domiciliar:", o:""},
{etapa:"escala", d:"(a) Paciente deitado de lado, ouvido afetado para cima", o:""},
{etapa:"escala", d:"(b) Aplicar gotas conforme orientado", o:""},
{etapa:"escala", d:"(c) Manter 5-10 min na posição (cerume absorve)", o:""},
{etapa:"escala", d:"(d) Pode tampar com algodão por 10-15 min", o:""},

{etapa:"escala", d:"AGENDAR RETORNO em 3-5 dias para LAVAGEM com cerume já amolecido", o:""},

{etapa:"adj", d:"⚠ LAVAGEM AURICULAR adequada:", o:""},
{etapa:"adj", d:"(a) Soro fisiológico ou água MORNA (temperatura corporal) — fria/quente causa vertigem", o:""},
{etapa:"adj", d:"(b) Seringa 20-60 mL SEM AGULHA (cateter venoso 14G ou pera de borracha)", o:""},
{etapa:"adj", d:"(c) Puxar pavilhão auricular para cima e para trás (adulto) ou para baixo e para trás (criança) — retifica o conduto", o:""},
{etapa:"adj", d:"(d) JATO direcionado para parede SUPERIOR/POSTERIOR do conduto (não diretamente sobre MT)", o:""},
{etapa:"adj", d:"(e) Coletar em cuba renal", o:""},
{etapa:"adj", d:"(f) Reexaminar com otoscopia + secar gentilmente", o:""},

{etapa:"adj", d:"CURETAGEM SUAVE — alternativa quando lavagem é contraindicada", o:"Cureta de Buck ou similar, sob visualização direta. Profissional treinado."},

{etapa:"alta", d:"ORIENTAÇÕES ao paciente para evitar recidiva:", o:""},
{etapa:"alta", d:"⚠ NÃO usar cotonete dentro do conduto (empurra cerume + microtrauma + tira camada protetora)", o:"Cotonete só na parte EXTERNA do pavilhão."},
{etapa:"alta", d:"Limpeza do conduto é AUTOLIMPANTE — produção de cerume + migração natural", o:""},
{etapa:"alta", d:"Em usuários de aparelho auditivo / fone in-ear: óleo mineral 1 gota/sem profilática pode ajudar", o:""},
{etapa:"alta", d:"REFERENCIAR ORL: cerume impactado refratário a lavagens, suspeita de outras patologias, conduto muito estreito/tortuoso", o:""},
],

alertas:[
{nivel:"crit", txt:"NÃO LAVAR ouvido com PERFURAÇÃO TIMPÂNICA conhecida/suspeita, TUBO DE VENTILAÇÃO, otite externa ATIVA, cirurgia otológica prévia. Risco infecção/labirintite."},
{nivel:"warn", txt:"TEMPERATURA da água: morna (corporal). Fria → vertigem por estimulação labiríntica (teste calórico involuntário)."},
{nivel:"warn", txt:"PRESSÃO DO JATO: SUAVE, direcionado para parede SUPERIOR/POSTERIOR do conduto. Jato direto na MT pode perfurar."},
{nivel:"warn", txt:"PEROXIDO DE HIDROGÊNIO: pode irritar dermatites do conduto. Em pele sensível: usar óleo mineral."},
{nivel:"info", txt:"⚠ MUDANÇA DE PRÁTICA: preparo prévio 3-5 dias com óleo mineral resolve em 1 lavagem o que sem preparo precisa de 3-4 tentativas frustradas. Vale o investimento de tempo."},
{nivel:"info", txt:"COTONETE: principal causa de tampão impactado (empurra cerume profundo + remove camada protetora). Orientar repetidamente."},
],

fluxo:null,
diretriz:"AAO-HNS Clinical Practice Guideline Cerumen Impaction 2017. Cochrane Reviews."
},

/* ============== MANOBRA DE CUNNINGHAM ============== */
{id:"pulo-cunningham-ombro", nome:"Cunningham — redução de luxação anterior de ombro sem sedação", sis:"pulo", grav:"moderada",
cid:"S43.0", ciap:"L80",
sin:["Luxação ombro","Ombro deslocado","Cunningham","Redução sem sedação","Luxação anterior","Massagem trapézio"],

def:"Técnica de REDUÇÃO de luxação anterior do ombro SEM TRAÇÃO + SEM SEDAÇÃO. Baseia-se em RELAXAMENTO MUSCULAR via massagem do trapézio + bíceps + adução suave. Funciona em ~60-70% dos casos selecionados (1ª luxação, jovem cooperativo, sem fratura).",

quadro:[
"Luxação ANTERIOR do ombro (>95% das luxações de ombro)",
"Trauma direto/indireto + dor + impossibilidade de mover o ombro",
"Deformidade típica: 'sinal da dragona' (perda do contorno deltoidiano), proeminência do acrômio, posição em abdução leve + rotação externa",
"⚠ AVALIAR antes da redução: déficit neurovascular (nervo axilar — sensibilidade da região deltoidiana lateral; pulso radial), fratura associada (tuberosidade maior — mais comum)",
"⚠ Cunningham é especialmente eficaz em: 1ª luxação, paciente jovem, cooperativo, sem fratura, dentro de 6-12h",
],

diag:[
"História + exame físico clássicos",
"Avaliar nervo axilar (sensibilidade da pele sobre o deltoide) — risco de lesão pela luxação ou pela tentativa de redução",
"Avaliar pulso radial — risco vascular",
"⚠ RX OMBRO em 2 projeções (AP + axilar/Y escapular) ANTES da redução: confirma luxação anterior + descarta fratura associada",
"PÓS-REDUÇÃO: Rx para confirmar redução + avaliar fratura nova",
],

exames:["Rx ombro AP + axilar ou Y escapular (essencial)","Em trauma de alta energia: avaliar lesão associada"],

rx:[
{etapa:"inicial", d:"⚠ AVALIAÇÃO NEUROVASCULAR e RX antes da redução", o:""},
{etapa:"inicial", d:"Se FRATURA associada (especialmente colo cirúrgico): NÃO reduzir sem ortopedia — risco de deslocamento da fratura", o:""},

{etapa:"inicial", d:"ANALGESIA + ANSIÓLISE leve (sem sedação profunda):", o:""},
{etapa:"inicial", d:"Dipirona 1 g IV / cetoprofeno 100 mg IV + paracetamol VO", o:""},
{etapa:"inicial", d:"OU lidocaína intra-articular 10-20 mL de lidocaína 1% no espaço gleno-umeral (técnica eficaz e segura — evita necessidade de sedação)", o:""},

{etapa:"escala", d:"⚠ TÉCNICA DE CUNNINGHAM (PASSO A PASSO)", o:""},

{etapa:"escala", d:"POSIÇÃO 1: Paciente SENTADO em cadeira/maca com COSTAS ERETAS — não inclinado, não deitado", o:""},
{etapa:"escala", d:"Examinador SENTADO À FRENTE do paciente, mesma altura", o:""},

{etapa:"escala", d:"(a) PEDIR ao paciente para ENCOLHER os OMBROS, EMPURRANDO-OS para a frente (rolagem dos ombros adiante)", o:"Posição de 'tranquilizar' os músculos."},

{etapa:"escala", d:"(b) COLOCAR a mão do BRAÇO LUXADO sobre o OMBRO IPSILATERAL do examinador — paciente apoia seu braço sobre seu ombro do examinador", o:"Apoio passivo, braço RELAXADO."},

{etapa:"escala", d:"(c) Com sua MÃO IPSILATERAL, segurar firmemente o COTOVELO do paciente (apoio)", o:""},

{etapa:"escala", d:"(d) Com a OUTRA MÃO, MASSAGEAR FIRMEMENTE: TRAPÉZIO superior IPSILATERAL → BÍCEPS DISTAL → DELTOIDE", o:"Massagem PROFUNDA, contínua. Continuar massagem durante todo o procedimento."},

{etapa:"escala", d:"(e) Pedir ao paciente para CONTINUAR encolhendo os ombros + RELAXAR o braço — RESPIRAR profundo e devagar", o:""},

{etapa:"escala", d:"(f) Pode-se gentilmente APLICAR ADUÇÃO do braço luxado em direção ao tronco do paciente — sem força, apenas guiando", o:""},

{etapa:"escala", d:"(g) AGUARDAR 5-15 minutos com massagem contínua + paciente relaxado + ombros encolhidos para frente", o:"⚠ PACIÊNCIA — pode demorar. NÃO forçar. Redução ocorre quando músculos relaxam suficientemente."},

{etapa:"escala", d:"(h) REDUÇÃO ESPONTÂNEA = paciente sente 'clunk' / movimento súbito + alívio imediato da dor + recuperação do contorno deltoidiano", o:""},

{etapa:"adj", d:"⚠ SE CUNNINGHAM FALHAR após 15-20 min: outras técnicas:", o:""},

{etapa:"adj", d:"FARES (Fast, Reliable, Easy and Safe): paciente deitado, abdução e oscilação suave do braço + leve tração", o:""},

{etapa:"adj", d:"STIMSON: paciente em decúbito ventral, peso de 5-10 kg pendendo do pulso do braço luxado, aguardar 15-20 min — reduz por gravidade + relaxamento", o:"Discreto, sem força do examinador."},

{etapa:"adj", d:"KOCHER, HIPÓCRATES: técnicas mais antigas e com mais força — risco aumentado de fratura — evitar como 1ª opção em paciente jovem", o:""},

{etapa:"adj", d:"⚠ Se ainda falha: SEDAÇÃO procedimental (etomidato/cetamina/propofol) + técnica de tração-contratração + ortopedia", o:""},

{etapa:"alta", d:"PÓS-REDUÇÃO:", o:""},
{etapa:"alta", d:"Reavaliar neurovascular", o:""},
{etapa:"alta", d:"Rx pós-redução (confirmar + descartar fratura nova)", o:""},
{etapa:"alta", d:"Imobilização com TIPOIA por 1-3 semanas (jovem: imobilização menor para evitar capsulite; idoso: imobilização menor para evitar rigidez)", o:""},
{etapa:"alta", d:"Encaminhar ORTOPEDIA ambulatorial para acompanhamento + reabilitação (fisioterapia em 2-4 sem)", o:""},
{etapa:"alta", d:"⚠ Em jovem com 1ª luxação: alta taxa de RECIDIVA (>50% em jovens <25a) — discutir intervenção precoce (cirurgia de Bankart) com ortopedia", o:""},
],

alertas:[
{nivel:"crit", txt:"FRATURA ASSOCIADA (colo umeral, glenoide): NÃO tentar redução sem ortopedia + RX prévio. Tentativas inadequadas pioram fratura."},
{nivel:"crit", txt:"AVALIAR NERVO AXILAR (sensibilidade deltoide lateral) ANTES e DEPOIS — risco de lesão por luxação ou tentativa de redução."},
{nivel:"warn", txt:"CUNNINGHAM exige PACIÊNCIA — pode demorar 5-15 min. Não desistir cedo. Não forçar."},
{nivel:"warn", txt:"NÃO INDICADO em: paciente idoso muito frágil, luxação posterior (rara — outra técnica), luxação inferior, fratura associada significativa."},
{nivel:"warn", txt:"KOCHER e HIPÓCRATES (técnicas com força): risco aumentado de fratura iatrogênica — usar com cautela."},
{nivel:"info", txt:"VANTAGENS de Cunningham: zero medicação, zero sedação, baixo risco, faz em qualquer lugar com cadeira. DESVANTAGEM: requer paciente cooperativo + tempo."},
{nivel:"info", txt:"RECIDIVA é ALTA em jovens — orientar acompanhamento ortopédico para decisão de intervenção precoce."},
],

fluxo:null,
diretriz:"Cunningham et al. (Med J Aust 2003+). BMJ Procedure Review. ER textbooks."
},

/* ============== DENTE AVULSIONADO ============== */
{id:"pulo-dente-avulsao", nome:"Dente avulsionado — janela de reimplantação", sis:"pulo", grav:"alta",
cid:"S03.2", ciap:"D19",
sin:["Dente arrancado","Avulsão dental","Trauma dental","Reimplantação de dente","Leite para dente","Dente caiu no trauma"],

def:"AVULSÃO DENTÁRIA = dente PERMANENTE arrancado pela raiz. JANELA DE OURO = 30-60 min para reimplantação. Sucesso depende: tempo extra-alveolar + meio de armazenamento + integridade do ligamento periodontal. Conduta correta no plantão pode salvar o dente.",

quadro:[
"Trauma facial / esportivo / acidente — dente PERMANENTE (incisivo central superior é mais comum) arrancado completamente",
"DENTE DECÍDUO (dente de leite — criança <6-7 anos): NÃO REIMPLANTAR — risco de lesão ao germe do permanente, anquilose. Apenas conforto",
"DENTE PERMANENTE: REIMPLANTAR O QUANTO ANTES — idealmente <30-60 min, viabilidade decai rapidamente após",
"AVALIAR sempre: outros dentes lesados (fratura coronária, intrusão, extrusão), trauma mandibular, TCE associado",
],

diag:[
"Dente fora do alvéolo, com raiz íntegra",
"Diferenciar de FRATURA coronária (parte da coroa quebrada, raiz no alvéolo) ou INTRUSÃO (dente fundo no alvéolo) — manejo diferente",
"⚠ DENTE DECÍDUO vs PERMANENTE: dente decíduo em criança <6 anos não deve ser reimplantado",
],

exames:["Rx panorâmica ou periapical (avaliar alvéolo, fratura associada, outros dentes)","Em trauma facial maior: TC face","Em TCE: avaliação neurológica + TC crânio se indicado"],

rx:[
{etapa:"inicial", d:"⚠ TEMPO É TUDO — janela ideal <30 minutos, aceitável até 60 min", o:""},
{etapa:"inicial", d:"⚠ DENTE DECÍDUO (criança <6-7 anos): NÃO REIMPLANTAR — risco ao germe permanente. Apenas conforto e encaminhar odonto", o:""},

{etapa:"escala", d:"MANEJO INICIAL — orientação por telefone (paciente ainda em casa/local do trauma):", o:""},
{etapa:"escala", d:"(1) PEGAR o dente PELA COROA (parte branca) — NUNCA pela RAIZ", o:""},
{etapa:"escala", d:"(2) Se SUJO: enxaguar SUAVEMENTE com SORO FISIOLÓGICO ou LEITE ou ÁGUA POR 10 SEGUNDOS — NÃO esfregar, NÃO usar sabão", o:""},
{etapa:"escala", d:"(3) IDEALMENTE: REIMPLANTAR IMEDIATAMENTE no alvéolo (se paciente colabora) — empurrar dente com pressão suave até alinhar com vizinhos, paciente morde gaze para estabilizar", o:""},
{etapa:"escala", d:"(4) Se NÃO consegue reimplantar: ARMAZENAR em meio adequado e levar ao dentista", o:""},

{etapa:"escala", d:"⚠ MEIO DE ARMAZENAMENTO (ordem de preferência):", o:""},
{etapa:"escala", d:"1º — HBSS (Hank's Balanced Salt Solution) — disponível em alguns kits dentários — gold standard", o:""},
{etapa:"escala", d:"2º — LEITE PASTEURIZADO (geladeira) — excelente, AMPLAMENTE DISPONÍVEL — preserva células do ligamento periodontal por até 6h", o:"⭐ ESCOLHA PRÁTICA — orientar família a usar."},
{etapa:"escala", d:"3º — SALIVA — manter o dente na boca do paciente (vestíbulo bucal entre dente e bochecha) — apenas se adulto cooperativo, SEM risco de aspiração", o:""},
{etapa:"escala", d:"4º — SORO FISIOLÓGICO 0,9% — alternativa razoável", o:""},
{etapa:"escala", d:"5º — Água da torneira — ÚLTIMO RECURSO (hipotônica, danifica células) — preferir não usar", o:""},
{etapa:"escala", d:"❌ NUNCA: gelo seco, álcool, água destilada, deixar seco ao ar", o:""},

{etapa:"escala", d:"NO SERVIÇO DE SAÚDE:", o:""},
{etapa:"escala", d:"Avaliar lesões associadas (mandíbula, lábio, TCE)", o:""},
{etapa:"escala", d:"Limpar alvéolo COM SF (curetar coágulo de leve, se necessário)", o:""},
{etapa:"escala", d:"REIMPLANTAR o dente — alinhar com vizinhos", o:""},
{etapa:"escala", d:"ESTABILIZAR com gaze (paciente morde) até chegada do dentista — idealmente férula dental rígida em até 2h", o:""},

{etapa:"adj", d:"PROFILAXIA:", o:""},
{etapa:"adj", d:"Antibiótico — Amoxicilina 500 mg 8/8h × 7 dias (ou doxiciclina 100 mg 12/12h em ≥12a)", o:""},
{etapa:"adj", d:"Antitetânica conforme histórico vacinal", o:""},
{etapa:"adj", d:"Analgesia (paracetamol + AINE)", o:""},
{etapa:"adj", d:"Bochechos com CLOREXIDINA 0,12% 2×/d × 7-10 dias", o:""},
{etapa:"adj", d:"Dieta pastosa por 7-10 dias, escovação suave", o:""},

{etapa:"alta", d:"ENCAMINHAR para DENTISTA / ENDODONTISTA URGENTE para férula dental + tratamento endodôntico (cana radicular) — geralmente em 7-14 dias após reimplantação", o:""},
{etapa:"alta", d:"FOLLOW-UP odontológico longo prazo — reabsorção radicular pode ocorrer mesmo com reimplantação ideal", o:""},
{etapa:"alta", d:"PROGNÓSTICO depende: tempo extra-alveolar (<30 min ideal), meio de armazenamento, idade (jovem com ápice aberto melhor)", o:""},
],

alertas:[
{nivel:"crit", txt:"TEMPO CRÍTICO — viabilidade do ligamento periodontal cai exponencialmente após 30 min seco. <30 min = melhor prognóstico. >60 min = baixa taxa de sucesso. Reimplantar de qualquer forma se possível."},
{nivel:"crit", txt:"DENTE DECÍDUO (criança <6-7 anos) NÃO REIMPLANTAR — risco de lesão ao germe do permanente, anquilose. Conforto + encaminhar odontopediatria."},
{nivel:"crit", txt:"PEGAR PELA COROA — nunca pela raiz. Esfregar a raiz DESTRÓI o ligamento periodontal."},
{nivel:"warn", txt:"MEIO: LEITE (geladeira) é a melhor opção PRÁTICA disponível em casa/local do acidente. Saliva (manter na boca) é alternativa em adulto cooperativo. Água é último recurso."},
{nivel:"warn", txt:"NÃO ENXAGUAR/ESFREGAR vigorosamente — apenas SF/leite por 10 seg se muito sujo. Manter restos de ligamento periodontal aderidos."},
{nivel:"warn", txt:"ATB + ANTITETÂNICA + bochechos com clorexidina são padrão pós-reimplantação."},
{nivel:"info", txt:"DENTES PRIMÁRIOS (decíduos) não devem ser reimplantados. Dentes PERMANENTES sim — janela ouro 30-60 min."},
{nivel:"info", txt:"KITS DENTÁRIOS com HBSS existem comercialmente — preservam até 24h. Não disponíveis no SUS brasileiro padrão."},
],

fluxo:null,
diretriz:"IADT (International Association of Dental Traumatology) Guidelines 2020. ABO (Associação Brasileira de Odontologia)."
},

);
