/* ===========================================================
   VOVÔMINIC DOUTÔ — pat/ubs-vacina.js
   Vacinação na APS — calendário PNI 2026 (adulto, idoso, gestante)
   + situações especiais (CRIE, EAPV, hesitação, resgate)
   
   Fontes:
   [CNV-PNI 2026] — Instrução Normativa do Calendário Nacional 
       de Vacinação 2026 (DPNI/SVSA/MS, atualizada 30/jan/2026)
   [MAN-PNI 2024] — Manual de Normas e Procedimentos para Vacinação
   [CRIE 2023] — Manual dos CRIE + Portaria GM/MS 6.623/2025
   [SBIm 2025-2026] — Calendários por ciclo de vida (sbim.org.br)
   [TMFC 2ª ed 2019] — Tratado MFC, capítulos de imunização
   [Plotkin's Vaccines 8ª ed, 2023] — referência fundamental
   =========================================================== */

PATOLOGIAS.push(

/* ============================================================
   1. PNI 2026 — CALENDÁRIO ADULTO (20-59 anos)
   ============================================================ */
{
id:"pni-adulto", contexto:["ubs"], nome:"PNI 2026 — Calendário do Adulto (20-59 anos)",
sis:"vacina", grav:"baixa", cid:"Z23,Z24,Z25,Z27", ciap:"A44",
sin:["calendario vacinal adulto","vacinas adulto sus","imunização adulto"],
def:"Esquema vacinal oferecido na UBS para adulto saudável (20-59 anos). O PNI cobre o essencial; SBIm recomenda complementação privada para algumas situações.",

intro:"O adulto frequentemente subutiliza a vacinação — vacina é \"coisa de criança\" no imaginário social. A consulta na UBS é momento de revisar carteira: muitos adultos brasileiros têm esquemas incompletos de Hep B, dT/dTpa, ou nunca tomaram tríplice viral. Aproveitar consulta de rotina (pré-natal de parceira, check-up, motivo intercorrente) para atualizar é trabalho de MFC.",

apresentacao:"Adulto na UBS sem queixa específica relacionada à vacina — aproveitar consulta. Ou: paciente vindo para vacinação por motivo específico (viagem, ocupação, gestante na família, exposição a doente, retomada após período de afastamento).",

sintomas:[
"Atualização de rotina — sem clínica, busca ativa em consulta de qualquer motivo",
"Pré-viagem — destinos com febre amarela, hepatite A, meningite ACWY",
"Pré-exposicional — convívio com gestante (dTpa), pessoa imunossuprimida",
"Pós-exposição — animal/mordedura, ferimento profundo (dT/raiva), ocupacional",
"Adulto previamente não-vacinado — esquema completo de resgate",
"Profissional de saúde — vacinas ocupacionais"
],

fisio:"Imunidade humoral (anticorpos) + celular (linfócitos T). Vacinas atenuadas (BCG, MMR, FA, varicela) induzem resposta robusta e duradoura, próximas à doença natural. Vacinas inativadas (Hep B, Influenza, dT, COVID inativadas) requerem reforços para manter títulos. Vacinas de subunidade (HPV, Hep B recombinante) e mRNA (algumas COVID) usam fragmentos antigênicos definidos. Duração da memória imunológica varia: tétano protege ~10 anos após reforço; tríplice viral é \"para a vida\" em quem responde; Hep B é \"para a vida\" após esquema completo em respondedor.",

profilaxia:"**Calendário PNI 2026 — Adulto (20-59 anos) [CNV-PNI 2026]:**\n\n**Hepatite B** — 3 doses (0, 1, 6 meses). Se não há registro, considerar não-vacinado e iniciar esquema. Adulto sem registro: oferecer.\n\n**Tríplice Viral (SCR/MMR)** — Sarampo + Caxumba + Rubéola. Adultos 20-29 anos: 2 doses. 30-59 anos: 1 dose. Profissionais de saúde, viajantes, militares: 2 doses independente da idade.\n\n**Febre Amarela** — dose única vitalícia (esquema atualizado 2017). Recomendada para residentes/viajantes em áreas de recomendação (atualmente quase todo o Brasil). Pessoas imunocompetentes que já receberam 1 dose após 5 anos de idade: não precisa reforço.\n\n**dT (Dupla Adulto, difteria+tétano)** — reforço a cada 10 anos. Esquema básico: 3 doses (0, 2, 4 meses) se nunca vacinou.\n\n**dTpa (Tríplice Acelular Adulto)** — substitui 1 dose de dT em situações: contactantes próximos de RN, profissionais de saúde de serviços de saúde da criança/RN, gestante (uma a cada gestação — ver pat-pni-gestante).\n\n**Influenza** — anual, durante campanha. Adulto 50-59 anos: já incluso no público-alvo (ampliação 2024). 20-49 anos: depende do grupo prioritário (DCNT, profissionais, gestante, puérpera, comorbidades, professor, indígena, presidiário, etc).\n\n**COVID-19** — esquema atualizado anualmente conforme cepa circulante. Em 2026: dose de reforço para grupos prioritários (idosos, comorbidades, imunossuprimidos, gestantes, profissionais de saúde).\n\n**HPV** — programa ampliado: mulheres e homens 9-19 anos (1 dose conforme estratégia 2023+). 20-45 anos com HIV/imunossupressão/transplantados: esquema 3 doses (0, 2, 6m). PVHA: cobertura SUS.\n\n**SBIm adicionais (rede privada / convênio)** — Hep A (não rotina PNI adulto sadio), pneumocócica VPC13/VPP23 (rotina apenas ≥60a ou comorbidades), meningocócica ACWY/B, herpes zoster (recombinante Shingrix).",

freire:"Carteira de vacina é como caderneta de escola: você tem direito a saber o que tomou, quando tomou, e por quê. Pergunte ao paciente: \"você sabe o que essa vacina protege?\". Se ele não sabe, é nossa chance de ensinar — sem moralismo, sem aterrorizar. \"Essa de Hep B é pra proteger o fígado, doença pega por sangue ou sexo, dura a vida toda depois que você toma certinho.\" \"A do tétano você toma toda vez que machuca feio, mas também tem o de 10 em 10 anos.\" Hesitação vacinal raramente é ignorância — é desconfiança. Trate como diálogo, não como erro. Pergunte: \"o que te preocupa?\". Ouça antes de responder. Reconheça medos legítimos (efeitos adversos existem), e explique probabilidades de forma comparável (chance de evento grave por vacina vs. chance de complicação da doença que ela previne). Para quem aceita: \"então, vamos atualizar?\" — e atualize tudo de uma vez se possível, evitando faltas a retornos.",

sus_tx:"**Disponível na UBS Estiva Gerbi:** Hep B (3 doses), Tríplice Viral, Febre Amarela, dT, dTpa (situações específicas), Influenza (campanha anual + grupos prioritários ano todo), COVID-19, HPV (até 19 anos rotina + ampliações). Todas pela carteira do PNI 2026.\n\n**Fluxo operacional:**\n1. Conferir carteira física do paciente (sempre pedir trazer).\n2. Se sem carteira: consultar SI-PNI (sistema informatizado).\n3. Se sem registro: considerar não-vacinado para tudo que não há comprovação — INICIAR esquemas completos.\n4. Dose 1 mais aprazamento na carteira para próximas doses.\n5. Orientação por escrito quando esquema for complexo.\n6. Registro em prontuário UBS + carteira física + SI-PNI.\n\n**Conta-doses** — adulto considerado bem vacinado se documenta: 3 Hep B, 2 SCR, 1 FA, dT em dia, Influenza anual no grupo prioritário, COVID atualizada.",

padrao_ouro:"**[SBIm Adulto 2025-2026]** acrescenta ao PNI:\n• Hepatite A — 2 doses, especialmente para áreas com prevalência baixa/intermediária (paradoxalmente expostas)\n• Pneumocócica VPC15/VPC20 + VPP23 — recomendada para todos ≥50 anos (SBIm) vs ≥60a com comorbidade (PNI)\n• Herpes Zoster Recombinante (Shingrix) — 2 doses para ≥50 anos\n• Meningocócica ACWY — adolescentes e adultos jovens em situações de risco\n• Meningocócica B — adolescentes\n• VSR — em estudo para adulto, indicação 60+ em 2024-25 nos EUA, no Brasil ainda restrita\n\n[SBIm 2025-2026]: o calendário SBIm é mais ambicioso que o PNI; informo o paciente sobre opções da rede privada quando relevantes — sem fazer propaganda, mas garantindo informação completa. Vacinação privada é direito legítimo de quem pode pagar; SUS oferece a saúde pública essencial; sem juízo moral.",

prog:"Adultos com calendário completo têm baixíssimo risco de doenças vacino-preveníveis. Reativações de tétano em pessoas vacinadas: praticamente inexistentes. Sarampo em pessoa com 2 doses de SCR: <1%. Hep B em respondedor de 3 doses: praticamente 0% para infecção crônica. Risco residual: cepas de influenza não cobertas (mismatch ano), variantes COVID-19 emergentes, falha vacinal individual (3-5% para vacinas vivas, mais alto em alguns inativadas).",

acomp:"Aprazar próximas doses na própria carteira. Para Hep B: retornar 1 e 6 meses. Para SCR (se 2 doses): retornar 1 mês. Para esquema completo de dT (não vacinado): retornar 2 e 4 meses. Anotar próximo reforço a cada 10 anos (dT/dTpa) com data clara — ACS pode lembrar na visita.",

p4:"**Não fazer:**\n• Sorologia anti-HBs para checar imunidade em adulto saudável sem motivo de risco (profissional saúde, imunodeprimido sim — saudável geral não).\n• Reforços frequentes \"por garantia\" — esquema de tétano não é anual.\n• Sorologia para sarampo/caxumba/rubéola em saudável sem motivo — se carteira mostra 2 doses, está coberto.\n• Reforço de febre amarela em pessoa imunocompetente que recebeu 1 dose após 5 anos (recomendação 2017 — não fazer mais).\n• 'Booster' anual de COVID-19 sem indicação — esquema do PNI 2026 prevê dose anual apenas para grupos prioritários, não para população geral saudável.\n• Vacinar contra HPV adulto sadio fora das ampliações (>19a sem comorbidade): não está no programa — só na privada se desejar; benefício marginal individual após início da vida sexual.",

diretriz:"PNI 2026 Adulto: [CNV-PNI 2026, IN DPNI/SVSA, 30/jan/2026]. [MAN-PNI 2024, cap. esquemas básicos adulto]. [SBIm 2025-2026, calendário adulto]. [TMFC 2ª ed 2019, cap. 152 — Imunizações]. [Plotkin's Vaccines, 8ª ed, 2023].",

alertas:[
{tipo:"info", t:"Sem registro = não vacinado", d:"Adulto sem carteira nem dado no SI-PNI: considere não-vacinado e ofereça esquemas. Não \"presuma\" vacinas tomadas na infância sem prova."},
{tipo:"warn", t:"Imunodepressão e vacinas vivas", d:"BCG, Tríplice Viral, Febre Amarela, Varicela: CONTRAINDICADAS em imunodeprimidos. Sempre perguntar: corticoide alta dose? Imunobiológico (anti-TNF, biológicos)? HIV (CD4)? Câncer ativo em quimioterapia? Transplantado? Gestante? Em qualquer dessas situações, vacina viva é avaliada caso a caso e geralmente postergada."},
{tipo:"info", t:"Aplicação simultânea", d:"Vacinas inativadas podem ser aplicadas no mesmo dia, em locais anatômicos distintos. Vacinas vivas: se não aplicadas no mesmo dia, intervalo de 4 semanas entre elas (exceto FA + tríplice viral em criança <2 anos, intervalo 30 dias)."},
],

exames:[],
diretriz_short:"[CNV-PNI 2026]",
},

/* ============================================================
   2. PNI 2026 — CALENDÁRIO IDOSO (≥60 anos)
   ============================================================ */
{
id:"pni-idoso", contexto:["ubs"], nome:"PNI 2026 — Calendário do Idoso (≥60 anos)",
sis:"vacina", grav:"baixa", cid:"Z23,Z24,Z25,Z27", ciap:"A44",
sin:["calendario vacinal idoso","vacinas terceira idade","pneumo23","herpes zoster idoso"],
def:"Esquema vacinal específico para ≥60 anos. Pneumocócica e Influenza anual são pilares no SUS; SBIm recomenda também Herpes Zoster e VSR (privada).",

intro:"Idoso é grupo prioritário em vacinação por dois motivos: (1) imunossenescência reduz resposta a infecções e a vacinas; (2) maior gravidade de doenças vacino-preveníveis (Influenza, pneumococo, Herpes Zoster, COVID-19). Calendário do idoso é mais robusto e exige aprazamento sistemático. O ACS tem papel central na busca ativa para campanhas (Influenza) e para idosos faltosos.",

apresentacao:"Idoso na consulta de rotina — sempre revisar carteira. Particularmente: após internação recente (cobertura pneumocócica? Influenza?), após diagnóstico de DCNT (DPOC, IC, DM2 — esquema reforçado), durante campanha anual de Influenza.",

sintomas:[
"Idoso em consulta de rotina — busca ativa para atualização",
"Pós-internação — checar cobertura, oportunidade para reforços",
"Diagnóstico recente de DCNT — esquema reforçado indicado",
"Pré-campanha Influenza — março/abril, busca ativa via ACS",
"Idoso que nunca vacinou — esquema de resgate"
],

fisio:"Imunossenescência: redução de células T naïve, aumento de células T de memória senescentes, redução de função de células B, inflamação basal aumentada (\"inflammaging\"). Resposta vacinal é menos robusta — daí necessidade de vacinas com adjuvante (Influenza adjuvada para idoso, disponível em algumas redes), doses mais altas (Influenza HD), ou esquemas com reforço (Pneumocócica conjugada seguida de polissacarídica).",

profilaxia:"**Calendário PNI 2026 — Idoso (≥60 anos) [CNV-PNI 2026]:**\n\n**Influenza** — DOSE ANUAL durante campanha (geralmente abril-maio). Vacina inativada trivalente ou quadrivalente, disponível no SUS.\n\n**Pneumocócica Polissacarídica 23-valente (VPP23)** — 1 dose para todos ≥60 anos institucionalizados. Para os não-institucionalizados, indicação é mais restrita no PNI (CRIE — comorbidades específicas). Reforço único após 5 anos se persistir indicação.\n\n**dT (Dupla Adulto)** — reforço cada 10 anos.\n\n**Febre Amarela** — se nunca vacinou e reside/viaja em área de recomendação: 1 dose única (lembrar de avaliar segurança em idoso — risco aumentado de efeitos adversos graves >60 anos, decisão compartilhada).\n\n**COVID-19** — dose anual (grupo prioritário no PNI 2026).\n\n**Tríplice Viral** — geralmente desnecessária >60 anos (a maioria teve doença natural na infância). Apenas se profissional de saúde, viajante específico, ou ausência de imunidade documentada.\n\n**Hepatite B** — se nunca vacinou e mantém risco (parceiro com Hep B, ocupacional, hemodiálise): 3 doses.",

freire:"Idoso da Ludi tem uma relação peculiar com vacina: as gerações que viveram epidemias de poliomielite, sarampo, rubéola na gestação têm memória do que a vacina evita. Mas também há a desconfiança das narrativas atuais — \"vacina demais\", \"agora vacinam pra tudo\", influência de filhos/netos. Abordagem freireana: pergunte \"o que a senhora pensa sobre vacina?\" antes de explicar. Para a vacina do pneumococo: \"a senhora já teve pneumonia? Sabia que existe vacina pra prevenir? É grátis na nossa UBS.\". Para Influenza: \"essa de gripe é uma vez por ano — naquela campanha que o pessoal vem buscar. Por que anual? Porque o vírus muda todo ano, igual nossa preferência por roupas muda com a estação.\" Use metáforas do território. Validar autonomia: idoso decide; nossa função é informar bem.",

sus_tx:"**Na UBS Estiva Gerbi:**\n• **Influenza** — campanha anual (geralmente abr-mai) com busca ativa pelo ACS; fora de campanha, indivíduos do grupo prioritário podem buscar na UBS, com disponibilidade conforme estoque.\n• **VPP23** — Disponível para idoso institucionalizado e CRIE-elegível. Para idoso comunitário sem comorbidade, não é rotina PNI — orientação clara: \"o SUS oferece em casos específicos; rede privada tem como pneumocócica conjugada (VPC13/VPC15/VPC20) que pode ser pago\".\n• **dT, COVID-19, FA** — disponíveis conforme indicação.\n\n**Cartão do Idoso** — anotar todas as vacinas com datas, próximo reforço, especialmente dT 10 anos.",

padrao_ouro:"**[SBIm Idoso 2025-2026]:**\n• **Pneumocócica** — esquema sequencial: VPC15 (ou VPC20) → 12 meses depois → VPP23 → reforço VPP23 após 5 anos (apenas 1 reforço). Cobertura mais ampla que VPP23 isolada.\n• **Herpes Zóster Recombinante (Shingrix)** — 2 doses (0, 2-6 meses). Eficácia ~90% mesmo em idosos. CONTRAINDICAÇÃO: hipersensibilidade ao componente. Não há mais uso da vacina viva atenuada (Zostavax descontinuada).\n• **Influenza ADJUVADA ou HIGH DOSE** — eficácia superior à trivalente padrão em idoso. Disponível na rede privada.\n• **VSR (vírus sincicial respiratório)** — vacina recombinante (Arexvy ou Abrysvo) — aprovada para ≥60 anos com comorbidade. Cobertura privada.\n• **Hepatite A** — geralmente desnecessária se >60a sem viagem ou exposição específica.\n\nP4 importante: nem todo idoso precisa de TUDO da rede privada. Pneumocócica conjugada + Zoster têm benefício claro; outras são caso-a-caso.",

prog:"Idoso com Influenza anual + Pneumocócica + COVID-19 atualizada reduz substancialmente hospitalização e mortalidade por essas causas. Vacina contra Herpes Zoster previne 90% dos casos + reduz neuralgia pós-herpética. Mortalidade reduzida; qualidade de vida preservada.",

acomp:"Carteira do idoso atualizada em consulta semestral. ACS verifica em visita domiciliar. Campanha anual de Influenza: busca ativa de idosos faltosos pelo ACS. Próximo dT anotado claramente — paciente esquece, família apoia. Notificar lista de idosos da área para garantir cobertura na campanha.",

p4:"**Não fazer:**\n• VPP23 anual ou \"a cada 3 anos\" — esquema é apenas 1 dose + 1 reforço após 5 anos. Mais doses não trazem benefício.\n• Sorologia para Hep B em idoso sem fator de risco específico.\n• Reforço de FA repetido em idoso imunocompetente — 1 dose após 5 anos é vitalícia.\n• Vacinas vivas em idoso fragilizado/imunossuprimido sem avaliação cuidadosa.\n• \"Cocktail\" de vacinas no mesmo dia sem clínica — separar quando possível para identificar EAPV.\n• Insistir em vacina específica que o idoso recusa após explicação bem feita — autonomia do paciente prevalece.",

diretriz:"[CNV-PNI 2026, calendário idoso 60+]. [SBIm Idoso 2025-2026]. [TMFC 2ª ed 2019, cap. 152]. [Plotkin's Vaccines, 8ª ed, 2023]. Sobre Pneumocócica: estudo PHIS-Brasil; CDC ACIP 2023.",

alertas:[
{tipo:"warn", t:"Febre amarela em idoso", d:"Risco de eventos adversos graves (encefalite, viscerotropismo) é maior >60 anos. Decisão compartilhada: avaliar exposição real ao vírus selvagem vs risco vacinal. Em paciente já protegido (1 dose prévia) ou sem exposição real, NÃO insistir."},
{tipo:"info", t:"Síndrome de Guillain-Barré e Influenza", d:"Associação raríssima e controversa. Histórico de SGB nas 6 semanas após vacina prévia: CRIE avalia. Não contraindica absolutamente, mas requer análise."},
{tipo:"info", t:"VSR — novidade 2024", d:"Aprovada pela ANVISA para idoso, com cobertura privada. Aguardar PNI definir prioritários (ainda não no calendário PNI 2026)."}
],

exames:[],
diretriz_short:"[CNV-PNI 2026, Idoso]",
},

/* ============================================================
   3. PNI 2026 — GESTANTE
   ============================================================ */
{
id:"pni-gestante", contexto:["ubs"], nome:"PNI 2026 — Vacinação da Gestante",
sis:"vacina", grav:"media", cid:"Z23,Z24,Z25",  ciap:"W78",
sin:["vacina gestante","dtpa gestacao","hep b gestante","influenza gestante","covid gestante"],
def:"Esquema vacinal específico durante gestação para proteção materna e do RN (transferência placentária de anticorpos). dTpa em cada gestação + Influenza + Hep B + COVID-19 conforme campanha.",

intro:"A gestação é situação clínica de vulnerabilidade dupla (mãe + feto/RN). Vacinas administradas na gestante geram anticorpos que atravessam placenta e protegem RN nos primeiros meses, ANTES das vacinas próprias dele. dTpa é o exemplo paradigmático — protege RN contra coqueluche até completar esquema próprio. PNI 2026 mantém esquema robusto e específico para gestantes.",

apresentacao:"Gestante na captação do pré-natal — sempre revisar carteira vacinal. Gestante em qualquer consulta de pré-natal: oportunidade para reforço pendente. Pré-concepcional (planejamento): otimizar carteira ANTES de engravidar — principalmente Tríplice Viral (contraindicada na gestação por ser vacina viva).",

sintomas:[
"Captação do pré-natal (até 12 semanas) — revisar carteira completa",
"≥20 semanas — dTpa indicada (administrar entre 20-36 semanas, idealmente)",
"Campanha Influenza durante gestação (qualquer trimestre) — prioridade",
"Hep B incompleta — completar durante gestação (seguro)",
"COVID-19 atualizada — qualquer trimestre",
"Pré-concepcional (planejamento) — Tríplice Viral, Febre Amarela se indicada"
],

fisio:"Transferência placentária de IgG materna ocorre via receptor FcRn, predominantemente no 3º trimestre (28-36 semanas). Anticorpos vacinais maternos protegem RN nos primeiros 2-6 meses de vida. Para coqueluche (dTpa), pico de proteção ocorre se vacina aplicada entre 20-36 semanas. Vacinas inativadas são seguras em qualquer trimestre. Vacinas vivas (SCR, FA, varicela, BCG) são geralmente contraindicadas — risco teórico ao feto (não comprovado, mas precaução).",

profilaxia:"**Calendário PNI 2026 — Gestante [CNV-PNI 2026]:**\n\n**dTpa (Tríplice Acelular do Adulto, com componente Pertussis)** — UMA DOSE A CADA GESTAÇÃO, idealmente entre 20-36 semanas (ótimo 27-36 sem para máxima transferência placentária). Substitui dose de dT prevista no esquema básico.\n\n**Esquema completo de dT/dTpa para gestante não-vacinada ou com esquema incompleto:**\n  - Nunca vacinou: 3 doses (0, 2 meses, 4 meses) — sendo a última dTpa, entre 20-36 semanas idealmente.\n  - Esquema básico incompleto: completar com dT, e substituir 1 dose por dTpa entre 20-36 sem.\n  - Esquema básico completo + último reforço há >5 anos: 1 dose dTpa entre 20-36 sem.\n\n**Hepatite B** — Esquema completo (3 doses) se não-vacinada. SEGURO em qualquer trimestre. Se HBsAg positivo: filho recebe HBIG + Hep B nas primeiras 12h pós-parto.\n\n**Influenza** — DOSE ANUAL durante campanha (ou fora, se grupo prioritário). Pode ser aplicada em qualquer trimestre. Proteção materna + transferência placentária para o RN.\n\n**COVID-19** — esquema atualizado conforme PNI 2026. Gestante é grupo prioritário. Vacinas mRNA e inativadas são seguras. Vetor adenoviral evitar em gestante (precaução).\n\n**CONTRAINDICADAS na gestação:**\n• Tríplice Viral (SCR) — viva atenuada\n• Febre Amarela — viva atenuada (avaliar caso a caso se exposição inevitável)\n• Varicela — viva\n• BCG — viva\n• HPV — não recomendada na gestação (postergar para puerpério)\n• Dengue — viva atenuada\n\n**Pós-parto**: tudo que ficou contraindicado na gestação pode ser aplicado no puerpério, inclusive em lactante (vacinas vivas não passam pelo leite materno em quantidade clinicamente relevante).",

freire:"\"O que essa vacina faz por meu filho?\" — pergunta clássica da gestante. Vai pelo conteúdo: \"a vacina dTpa que você toma a partir de 20 semanas faz o seu corpo produzir anticorpos, que passam pra ele pela placenta. Ele nasce já com essa proteção contra coqueluche, que é uma tosse muito perigosa em bebê pequeno, antes dele tomar a vacina dele.\" Sobre Influenza: \"gripe na gestante é mais grave — mais hospitalização. A vacina te protege e protege o bebê também.\" Validar medos: \"é normal pensar duas vezes em qualquer remédio na gestação. Mas essas vacinas estão em estudo há décadas, milhões de gestantes já tomaram. O risco da doença que ela previne é muito maior que o risco da vacina.\" Quando ela pergunta sobre Tríplice Viral: \"essa vacina específica não pode na gestação, é viva. Mas você precisa ter tomado ANTES — sarampo na gestação é gravíssimo, pode causar perda fetal. Quando você terminar de amamentar, atualizamos.\"",

sus_tx:"**Na UBS Estiva Gerbi — gestante:**\n• Captação do pré-natal: revisão completa de carteira + cadastro no SIS-Pré-natal/SI-PNI.\n• dTpa aplicada na UBS em consulta de 20-36 semanas (idealmente 27-32 sem).\n• Hep B: iniciada/continuada conforme histórico. 3 doses (0, 1, 6 meses) — se gestação for descoberta após dose 1, segue normalmente.\n• Influenza: campanha em qualquer trimestre + fora de campanha se grupo prioritário.\n• COVID-19: conforme atualização anual do PNI.\n• Cartão da Gestante (caderneta) recebe registro de TODAS as vacinas aplicadas no pré-natal.\n• Comunicação com obstetra/maternidade: vacinação completa do pré-natal informada no resumo da gestação.",

padrao_ouro:"**[SBIm Gestante 2025-2026]:**\n• Tudo do PNI (dTpa, Hep B, Influenza, COVID-19)\n• VSR (vírus sincicial respiratório) — vacina materna (Abrysvo) aprovada para gestante 32-36 semanas, gerando proteção do RN contra bronquiolite por VSR nos primeiros 6 meses. **Em 2024-2025 aprovada pela ANVISA**, NÃO incluída no PNI 2026 ainda — disponível na rede privada. Indicação especialmente importante para RNs que nascerão em período de pico de VSR (outono-inverno).\n\n**Pré-concepcional (planejamento)** — antes de engravidar:\n• Atualizar Tríplice Viral (2 doses se não há registro)\n• Atualizar Varicela se não-imune\n• Atualizar Hep B\n• Atualizar HPV se <45a com indicação\n• Atualizar Febre Amarela se reside em área de recomendação\n• Aguardar 1 mês após vacinas vivas para tentar engravidar",

prog:"Gestante adequadamente vacinada reduz drasticamente risco de:\n• Coqueluche no RN (dTpa) — proteção >90% nos 2-3 primeiros meses do bebê.\n• Influenza grave em gestante + RN (Influenza materna) — hospitalização reduzida.\n• Infecção perinatal por Hep B (Hep B + HBIG no RN se HBsAg+ materna).\n• COVID-19 grave em gestante.\n\nRN nasce com cobertura passiva pelos anticorpos maternos transferidos.",

acomp:"Carteira da gestante completada em cada consulta de pré-natal. ACS na visita domiciliar pode lembrar próximas doses (dTpa entre 20-36 sem). No puerpério: agendar vacinas que ficaram pendentes (Tríplice Viral, Varicela). Cartão do RN deve referenciar status sorológico de Hep B/HIV/sífilis materno e vacinação materna feita.",

p4:"**Não fazer:**\n• dTpa antes de 20 semanas — transferência placentária subótima.\n• Vacinas vivas na gestação (FA, SCR, varicela, dengue) — postergar.\n• Sorologia anti-HBs em gestante saudável que completou esquema Hep B — desnecessário.\n• Esquema acelerado de Hep B (3 doses em meses 0-1-2) \"para terminar antes do parto\" — segue esquema normal; se ficar pendente, completa no puerpério.\n• Mandar gestante para CRIE por banalidade — CRIE é para imunodepressão, condições raras, EAPV grave prévia.\n• Reforço de FA em gestante imunocompetente que recebeu 1 dose pré-gestacional — não fazer.",

diretriz:"[CNV-PNI 2026, calendário gestante]. [MAN-PNI 2024]. [CAB nº 32, Pré-natal de Baixo Risco, MS — verificar atualização]. [FEBRASGO, protocolos de vacinação na gestação 2024]. [SBIm Gestante 2025-2026]. [TMFC 2ª ed 2019, cap. obstetrícia e cap. 152]. [Zugaib Obstetrícia, 5ª ed, 2023, cap. 11].",

alertas:[
{tipo:"warn", t:"Vacinas vivas: pré-concepcional", d:"Aguardar 1 mês entre vacina viva e tentativa de gestação. Se inadvertidamente vacinou e descobre gestação: não é indicação de abortamento — apenas vigilância obstétrica."},
{tipo:"info", t:"dTpa: 20-36 semanas", d:"Janela operacional. Ideal: 27-32 sem (pico de transferência placentária). Não fazer antes de 20 sem (subótimo) nem após 36 sem (RN pode nascer antes da transferência adequada)."},
{tipo:"info", t:"Convívio com gestante", d:"Familiares próximos (pai, irmãos mais velhos, avós) devem ter dTpa atualizada — estratégia 'cocoon' contra coqueluche. Adolescentes na escola: dTpa do calendário."},
{tipo:"warn", t:"FA em gestante", d:"Contraindicada como rotina. Em situação de surto/exposição inevitável: avaliação caso a caso, decisão compartilhada, CRIE."}
],

exames:[],
diretriz_short:"[CNV-PNI 2026, Gestante]",
},

/* ============================================================
   4. CRIE — Centros de Referência para Imunobiológicos Especiais
   ============================================================ */
{
id:"crie", contexto:["ubs"], nome:"CRIE — Centros de Referência para Imunobiológicos Especiais",
sis:"vacina", grav:"media", cid:"Z23,Z25,Z27", ciap:"A44",
sin:["crie","imunobiologicos especiais","vacinas situacoes especiais","imunodeprimidos vacinacao"],
def:"Rede pública especializada que fornece vacinas e imunoglobulinas para situações de exceção: imunodeprimidos, doenças crônicas, transplantes, EAPV grave, pré-quimioterapia, profissionais expostos.",

intro:"O PNI atende a população geral; o CRIE atende as situações especiais. Conhecer fluxo do CRIE é parte essencial do trabalho de MFC com pacientes complexos. Exemplos típicos: paciente em pré-quimioterapia precisa atualizar vacinas inativadas + Pneumo VPC13/VPP23; paciente com HIV CD4 baixo tem indicações específicas; transplantado renal tem esquema próprio; profissional saúde com exposição percutânea a HIV/HCV tem fluxo específico no CRIE.",

apresentacao:"Indicação de imunobiológico especial: imunodeprimido (HIV, transplantado, autoimune em biológico, oncológico em quimio/radio), doença crônica avançada (renal, hepática, cardíaca, pulmonar), pré-cirurgia esplenectomia, contactante de paciente Hep B/HIV positivo, gestante exposta a doença vacino-prevenível, EAPV grave prévio.",

sintomas:[
"Imunodeprimido (HIV, transplante, biológico, quimio) — vacinação adaptada",
"Pré-esplenectomia (eletiva) — esquema antes do baço sair",
"Pós-exposição (acidente percutâneo HIV/HBV/HCV) — imunoglobulinas",
"Gestante exposta a varicela/sarampo sem imunidade — imunoglobulina",
"Hep B em hemodialisado, imunodeprimido — esquema reforçado (dose dupla)",
"EAPV grave prévio — substituição de vacina ou suspensão"
],

fisio:"Imunossupressão de qualquer causa reduz resposta vacinal e contraindica vacinas vivas (BCG, SCR, FA, varicela, dengue). Esquemas adaptados: doses maiores (Hep B 40 mcg em hemodialisado), reforços mais frequentes, imunoglobulinas para imunidade passiva imediata. Imunoglobulinas (HBIG, VZIG, TIG, RIG, Imunoglobulina humana padrão) fornecem proteção imediata mas de curta duração.",

profilaxia:"**Indicações principais do CRIE [CRIE 2023 + Portaria GM/MS 6.623/2025]:**\n\n**A) Imunobiológicos especiais (vacinas):**\n• Hepatite B em dose dupla (40 mcg) — hemodialisados, imunodeprimidos\n• Pneumocócica VPC13 + VPP23 sequencial — imunodeprimidos, asplenia, fístula liquórica, implante coclear, DRC, doença cardio/pulmonar grave, DM2, fibrose cística\n• Meningocócica ACWY e B — asplenia, deficiência de complemento, contatos de meningite, viagens\n• Influenza em dose ampliada — imunodeprimidos (eficácia menor, mas vale a tentativa)\n• Hepatite A — hepatopatia crônica, transplantados, hemofílicos, HIV, contatos de surto\n• Varicela — pré-transplante, profissionais não-imunes, contactantes\n• HPV — PVHA, transplantados, oncológicos sob terapia, imunodeprimidos em geral até 45a\n• Tríplice viral — contraindicada em alguns casos; quando indicada e segura no CRIE\n• Febre amarela fracionada — em situações de surto/desabastecimento\n• Raiva — esquema pós-exposição, esquema pré-exposição para profissionais expostos\n\n**B) Imunoglobulinas:**\n• HBIG (Hep B) — RN de mãe HBsAg+ (12h pós-parto); pós-exposição percutânea profissional não-vacinado\n• VZIG (varicela) — gestante exposta sem imunidade, RN de mãe que teve varicela 5d antes-2d após parto, imunodeprimido exposto\n• TIG (tétano) — ferimento tetanogênico em paciente não-vacinado ou esquema incompleto\n• RIG (raiva) — mordedura por animal de risco em paciente não-vacinado\n• Imunoglobulina humana — sarampo (gestante, lactente, imunodeprimido pós-exposição), Kawasaki\n\n**Fluxo:**\n1. UBS identifica indicação\n2. Encaminhamento ao CRIE de referência (Estiva Gerbi: DRS-14, Mogi Guaçu — confirmar com SMS).\n3. CRIE avalia, fornece vacina/imunoglobulina, aplica ou orienta aplicação.\n4. Acompanhamento posterior na UBS.",

freire:"Para o paciente imunodeprimido ou crônico, vacinação é parte do plano de cuidado, não item à parte. \"Você tem [HIV/transplante/autoimune] — isso significa que algumas vacinas são MAIS importantes pra você do que pra outra pessoa. Vamos atualizar?\". Não criar medo, criar protagonismo: \"você tem direito a essas vacinas, pelo SUS, num lugar especializado que se chama CRIE\". Quando a pessoa não quer ir ao CRIE (distância, descrédito), pactuar: ver o que dá pra fazer na UBS, encaminhar para o que só lá tem. Lembrar: paciente complexo já anda muito na rede; cada deslocamento conta.",

sus_tx:"**Fluxo CRIE para usuário SUS:**\n1. Diagnóstico/condição clínica identificada na UBS.\n2. UBS preenche encaminhamento ao CRIE com: diagnóstico, medicações em uso, motivo da indicação vacinal especial.\n3. CRIE da referência (DRS-14 Mogi Guaçu/Campinas — confirmar via SMS Estiva Gerbi).\n4. CRIE aplica e devolve relatório para UBS continuar acompanhamento.\n5. Algumas vacinas/imunoglobulinas o CRIE entrega para aplicação na UBS (situação operacional).\n\nPaciente NÃO deve ir direto ao CRIE sem encaminhamento; o sistema funciona com referência da APS.",

padrao_ouro:"**[CRIE 2023 + Portaria 6.623/2025]** — protocolo de referência. **[SBIm Pacientes Especiais 2025-2026]** detalha esquemas para cada situação clínica. **[Plotkin's Vaccines, 8ª ed, 2023]** — fundamento internacional. **[ACIP/CDC 2024]** — atualizações de imunização em pacientes imunocomprometidos. O CRIE brasileiro segue protocolos consistentes com essas referências; cobertura SUS para todas as situações.",

prog:"Paciente imunocomprometido adequadamente vacinado tem redução substancial em hospitalização e morte por doenças vacino-preveníveis. Pneumocócica sequencial (VPC13+VPP23) é especialmente custo-efetiva. Imunoglobulina pós-exposição (HBIG, VZIG, TIG, RIG) tem eficácia >90% quando aplicada no tempo correto.",

acomp:"Após CRIE, paciente retorna à UBS com relatório. Esquemas longos (Pneumo sequencial, Hep B em dose dupla) são acompanhados em conjunto — algumas doses no CRIE, outras na UBS. Manutenção de vínculo: paciente complexo precisa de longitudinalidade, o que só MFC oferece.",

p4:"**Não fazer:**\n• Encaminhar ao CRIE indicações que a UBS resolve (esquema PNI padrão).\n• Solicitar VZIG/TIG/HBIG \"por garantia\" sem indicação clara — imunoglobulinas são caras e há racionamento.\n• Pneumo sequencial em DM2 jovem assintomático sem outros fatores — indicação atual é mais restrita que historicamente recomendada.\n• Sorologia universal anti-HBs para confirmar resposta vacinal em pacientes saudáveis — só em específicos (profissional saúde, imunodeprimido, hemodialisado).\n• Imunoglobulina sarampo em adulto saudável imunocompetente exposto — adulto saudável tem imunidade quase universal por vacinação prévia ou doença.",

diretriz:"[CRIE 2023 — Manual dos Centros de Referência para Imunobiológicos Especiais, MS]. [Portaria GM/MS Nº 6.623/2025]. [SBIm Pacientes Especiais 2025-2026]. [TMFC 2ª ed 2019, cap. 152]. [Plotkin's Vaccines, 8ª ed, 2023].",

alertas:[
{tipo:"warn", t:"Janela das imunoglobulinas", d:"HBIG (acidente percutâneo HBV): ideal nas primeiras 24h, até 7 dias. VZIG (gestante exposta varicela sem imunidade): até 96h, idealmente nas primeiras 48h. TIG (ferimento tetanogênico): no momento do atendimento. RIG (mordedura): no momento da exposição. Atrasar = perder eficácia."},
{tipo:"info", t:"DRS-14 Mogi Guaçu", d:"Estiva Gerbi pertence à DRS-14. CRIE de referência mais provável: Mogi Guaçu ou Campinas. CONFIRMAR com SMS Estiva Gerbi qual é a referência atual operacional."},
{tipo:"warn", t:"Imunodeprimido + vacina viva", d:"Regra geral: NÃO aplicar BCG, SCR, FA, varicela, dengue. Exceções específicas no CRIE para casos selecionados (ex.: HIV CD4 ≥200 pode receber SCR; transplantado renal estável pode receber Varicela em situações). Sempre discutir caso com infectologia/CRIE."}
],

exames:[],
diretriz_short:"[CRIE 2023]",
},

/* ============================================================
   5. HESITAÇÃO VACINAL — Abordagem Comunicativa
   ============================================================ */
{
id:"hesitacao-vacinal", contexto:["ubs"], nome:"Hesitação Vacinal — Abordagem na Consulta",
sis:"vacina", grav:"baixa", cid:"Z28", ciap:"A44",
sin:["hesitacao vacinal","recusa vacina","desconfianca vacina","movimento antivacina"],
def:"Atraso ou recusa em aceitar vacinas apesar de disponibilidade. Espectro contínuo (não dicotomia): da aceitação total à recusa total, com muita ambivalência no meio. Determinante da queda de coberturas vacinais no Brasil pós-2015.",

intro:"Hesitação vacinal não é igual a 'anti-vacina'. A OMS define como atraso ou recusa apesar de disponibilidade. A maioria das pessoas hesitantes não são militantes anti-ciência — são pessoas com dúvidas legítimas, medos racionais sobre efeitos adversos, desinformação consumida em redes sociais, desconfiança em instituições, experiências negativas (EAPV próprias ou de conhecidos). Abordagem confrontacional ('você é ignorante') NÃO funciona. Abordagem freireana (ouvir, dialogar, problematizar JUNTO) tem evidência de eficácia.",

apresentacao:"Paciente que: questiona vacina, recusa vacina, vem com lista de motivos para não vacinar (filho ou si próprio), traz material de WhatsApp/redes sociais, pede para 'pular' uma vacina específica, traz teorias da conspiração, expressa medo após notícia de EAPV.",

sintomas:[
"Recusa aberta — 'não quero vacinar'",
"Questionamento técnico — 'por que tantas vacinas?', 'tem mercúrio?'",
"Adiamento sistemático — sempre 'depois', nunca agora",
"Seletividade — aceita umas, recusa outras (geralmente as 'novas')",
"Pedido de exames antes de vacinar — sorologia, 'imunograma'",
"Compartilha desinformação — vídeos, posts, livros",
"Atribui doença/sintoma do filho à vacina prévia",
"Crença em alternativas — homeopatia 'vacinal', terapias naturais"
],

fisio:"Multifatorial. Determinantes da hesitação (modelo 3C da OMS):\n• **Confiança (Confidence)**: confiança nas vacinas (segurança, eficácia), no sistema de saúde, nas autoridades.\n• **Complacência (Complacency)**: percepção de baixo risco da doença → vacina parece desnecessária.\n• **Conveniência (Convenience)**: barreiras de acesso (distância, horário, longa espera, indisponibilidade) — geralmente o MENOR problema em país com SUS estabelecido.\n\nFatores agravantes pós-2015: redes sociais amplificando desinformação, polarização política, perda de coberturas que tornou doenças 'invisíveis' (geração que não viu sarampo desconhece sua gravidade), erosão de confiança institucional pós-pandemia.",

profilaxia:"**Abordagem em consulta — passo a passo:**\n\n**1. ESCUTE primeiro.** \"O que te preocupa nessa vacina?\". Deixe a pessoa falar. Anote mentalmente as preocupações específicas — você vai responder cada uma.\n\n**2. VALIDE a preocupação, sem validar a desinformação.** \"É natural querer entender o que você está dando ao seu corpo. Sua preocupação é legítima. Vamos conversar.\" NUNCA: \"isso é bobagem\", \"você foi enganado pela internet\".\n\n**3. PERGUNTE o que sabe.** \"O que você ouviu sobre essa vacina?\". Trabalha-se do conhecimento prévio (Freire). Identifica fontes de informação para depois abordar.\n\n**4. RESPONDA com clareza, números comparáveis.** \"O risco de [evento adverso grave] é cerca de 1 em [X] doses. Comparado ao risco de [complicação da doença], que é 1 em [Y] casos sem vacina. Em ambos os casos é raro — mas o risco da doença é [maior/menor] que o da vacina.\" Use a calculadora se necessário.\n\n**5. NÃO USE TÁTICAS DE MEDO.** Não funciona, gera resistência.\n\n**6. OFEREÇA TEMPO.** Hesitante não precisa decidir hoje. \"Pensa, conversa em casa, volta quando quiser conversar mais. Aqui estamos.\" Mas: aprazar (\"semana que vem você passa de novo?\") para não perder vínculo.\n\n**7. RECONHEÇA AUTONOMIA.** Adulto decide por si. Para criança: pai/mãe decide, e a justiça brasileira respaldA negativa parental para vacinas obrigatórias só em situações excepcionais. Pressão coercitiva pode piorar hesitação.\n\n**8. DOCUMENTE em prontuário.** Recusa informada deve ser registrada com data, motivos verbalizados, informação fornecida, decisão do paciente. Útil para acompanhamento longitudinal.\n\n**9. RETORNE com nova oportunidade.** Hesitação é dinâmica. Pessoa que recusou hoje pode aceitar daqui a 6 meses, especialmente se preservada a relação.\n\n**Para argumentos comuns:**\n• 'Vacina tem mercúrio': PNI brasileiro retirou timerosal de quase tudo; o que tem é em doses ínfimas, segura, sem evidência de dano.\n• 'Causa autismo': estudo Wakefield 1998 foi fraudado, retratado, autor perdeu licença. Múltiplos estudos em milhões de crianças não acharam associação.\n• 'Sistema imune sobrecarregado': bebê responde a milhares de antígenos por dia (ambiente). Antígenos vacinais são minúsculos em comparação.\n• 'Doença natural é melhor': verdade para algumas (varicela talvez), MORTE para outras (sarampo, coqueluche em RN, tétano).\n• 'Vacinas têm fetos abortados': culturas celulares MRC-5 e WI-38 derivam de 2 abortos legais dos anos 60. Não há \"feto\" na vacina. Aceitabilidade religiosa: Vaticano declarou licitude do uso quando não há alternativa.",

freire:"Hesitação vacinal é tema clássico para abordagem freireana. Mais do que em qualquer outro tópico de saúde, aqui o método 'aula expositiva' fracassa redondamente. A pessoa hesitante já recebeu informações; o que ela precisa é de DIÁLOGO. Pergunte por que ela pensa o que pensa — não para refutar, mas para entender. Reconheça que você também é cético em algumas coisas — você confiaria cegamente em qualquer indústria? A diferença é que vacinas têm farmacovigilância global, evidência acumulada por décadas, milhões de doses estudadas. Conta sua própria história quando útil: 'eu também tive dúvidas sobre [X]; estudei e me convenci porque [Y]'. Validar autonomia: 'no fim, você é quem decide. Meu papel é informar bem.' Para casais em desacordo (mãe quer, pai não quer, ou vice-versa): convidar ambos à consulta, mediar diálogo. Não pular o parceiro hesitante.",

sus_tx:"Na UBS: registrar recusa em prontuário. Manter vínculo (não 'demitir' paciente). Reagendar conversa periódica. Em caso de criança não-vacinada: comunicar pediatria/conselho tutelar APENAS em situações que configurem negligência grave (recusa total + criança em risco específico + esgotamento de diálogo). Coerção em criança RARAMENTE muda resposta — geralmente piora.",

padrao_ouro:"**Motivational Interviewing (MI) para vacinas** — abordagem com maior evidência de eficácia em recente RCT. Princípios: empatia, evocar mudança de dentro do paciente, autonomia, evitar argumentação confrontacional. **Comunicação Centrada no Paciente** (CCP) — pilar da MFC. **Modelo 3C OMS** para entender hesitação. **WHO/SAGE Vaccine Hesitancy Working Group** — orientações práticas. Brasil: estudo PROVAC-UFRJ; Fiocruz com material específico para abordagem.",

prog:"Pacientes que receberam abordagem comunicativa bem feita aceitam vacina em ~30-50% dos casos imediatamente, e mais com follow-up. Abordagem confrontacional/coercitiva: ~10% de aceitação + perda de vínculo + risco de não-comparecimento futuro.",

acomp:"Hesitação registrada em prontuário gera 'flag' no sistema. Próxima consulta: revisitar o tema sem ser repetitivo. ACS pode auxiliar com material educativo do MS (cartilhas, vídeos). Em casos persistentes, oferecer encaminhamento a profissionais de referência (Centro de Imunizações de referência regional, infectologista).",

p4:"**Não fazer:**\n• Coerção, ameaça, humilhação — eticamente errado e clinicamente contraproducente.\n• Negar atendimento a paciente hesitante — viola princípio de universalidade do SUS.\n• Forçar criança contra vontade dos pais sem mediação prévia substantiva.\n• Pedir 'imunograma' ou sorologias 'para checar se precisa vacinar' em paciente saudável hesitante — banalização de exames, gasto desnecessário, raramente esclarece.\n• Diagnosticar a hesitação como 'doença psiquiátrica' — não é. É posicionamento social/informacional.\n• Repetir o mesmo argumento em todas as consultas — variar abordagem, ouvir mais, aceitar tempo de maturação.",

diretriz:"[OMS — Strategic Advisory Group of Experts (SAGE) Vaccine Hesitancy 2014+2024]. [Plotkin's Vaccines, 8ª ed, 2023, cap. de hesitação]. [TMFC 2ª ed 2019, cap. de comunicação e cap. de imunizações]. [Estudo brasileiro: Domingues et al. Cad Saúde Pública 2020-2022]. [Fiocruz — manuais e materiais educativos].",

alertas:[
{tipo:"info", t:"Não é doença mental", d:"Hesitação vacinal por si não é diagnóstico psiquiátrico. Reconhecer com respeito. Se há quadro grave (delírio, comprometimento funcional), aí sim avaliar — mas raríssimo."},
{tipo:"warn", t:"Coerção falha", d:"Pressionar/ameaçar gera mais resistência. Tempo + diálogo + relação preservada são mais eficazes que tentar 'forçar'."},
{tipo:"info", t:"Surtos quebram hesitação", d:"Sarampo voltou ao Brasil pós-2018 com cobertura ruim. Surto local muda percepção rapidamente. Aproveitar momentos epidemiológicos para campanhas."}
],

exames:[],
diretriz_short:"[SAGE-OMS Hesitação Vacinal]",
},

/* ============================================================
   6. EAPV — Eventos Adversos Pós-Vacinação
   ============================================================ */
{
id:"eapv", contexto:["pa","ubs"], nome:"EAPV — Eventos Adversos Pós-Vacinação",
sis:"vacina", grav:"media", cid:"T88.1", ciap:"A87",
sin:["eventos adversos vacina","reacao vacinal","notificacao eapv","sinaeps"],
def:"Qualquer evento clínico indesejado após vacinação. Espectro de leve (dor local) a grave (anafilaxia, encefalite). Notificação compulsória dos graves no SI-EAPV.",

intro:"Toda vacina pode causar evento adverso. A maioria é leve (dor local, febre baixa, irritabilidade); minoria é grave (anafilaxia, GBS, viscerotropismo da FA). Conhecer perfil de EAPV de cada vacina é parte do trabalho do médico. Notificar é obrigação ética e legal: alimenta farmacovigilância nacional/global.",

apresentacao:"Paciente vacinado retorna ou é trazido com sintomas. Frequente: febre, dor local, mal-estar, irritabilidade. Atenção para sinais de alarme: anafilaxia precoce (até 4h), crise convulsiva, hipotonia-hiporresponsividade, paralisia flácida aguda (pós-VOP rara), reação alérgica tardia.",

sintomas:[
"Dor, edema, eritema local — comum, autolimitado",
"Febre, mal-estar, mialgia — 24-48h pós-vacina (especialmente vivas)",
"Anafilaxia — minutos a horas pós-vacina; urticária generalizada, broncoespasmo, hipotensão",
"Crise convulsiva febril — em criança (não específica de vacina)",
"Episódio hipotônico-hiporresponsivo (EHH) — lactente após DTP",
"Linfadenite por BCG — local, regional",
"Doença pelo vírus vacinal (raríssima) — varicela em imunodeprimido, viscerotropismo FA, BCG disseminada",
"Síndrome de Guillain-Barré — associada raramente a Influenza, COVID-19",
"Trombose com trombocitopenia — vacinas COVID adenoviral (Vaxzevria, Janssen)"
],

fisio:"EAPV classificados em 5 categorias:\n1. **Reação ao componente vacinal** (esperada) — dor local, febre baixa, mialgia leve.\n2. **Reação ao defeito de qualidade** — produto fora de especificação.\n3. **Erro de imunização** — dose errada, via errada, conservação inadequada.\n4. **Reação ansiedade-vacinação** — síncope vasovagal, ataque de pânico durante aplicação.\n5. **Coincidência** — evento que aconteceu próximo à vacina mas sem nexo causal.\n\nDistinção entre os tipos requer investigação. Vigilância passiva: SI-EAPV. Vigilância ativa: estudos pós-comercialização.",

profilaxia:"**Classificação de gravidade [MAN-PNI 2024]:**\n\n**EAPV LEVE (não-grave):**\n• Dor, calor, eritema local (a maioria das vacinas)\n• Febre <39°C, mal-estar transitório\n• Irritabilidade em criança\n• Conduta: orientação, sintomáticos. Não notificar individualmente.\n\n**EAPV GRAVE — NOTIFICAÇÃO COMPULSÓRIA:**\n• Anafilaxia (qualquer dose)\n• Convulsão (com ou sem febre)\n• Encefalopatia ou encefalite\n• Trombocitopenia\n• Síndrome de Guillain-Barré\n• Paralisia flácida aguda pós-vacina\n• Óbito\n• Hospitalização\n• Linfadenite supurada por BCG (em local específico)\n• Outros eventos que requeiram acompanhamento clínico\n• **Notificar em até 48h no SI-EAPV** (formulário próprio).\n\n**Conduta de cada um:**\n\n**Anafilaxia** — Adrenalina IM 0,3-0,5 mg coxa lateral (adulto), repetir cada 5-15 min. Antihistamínico, corticoide, suporte. Encaminhar ER. Notificar. Investigar componente alegérnico para futuras vacinações. Vacina seguinte com hipersensibilidade conhecida ao componente: CRIE.\n\n**Reação local intensa** — frio local, repouso, AINE. Não contraindica próxima dose, geralmente.\n\n**Febre alta** — antitérmico VO. Avaliar se não é doença concomitante.\n\n**EHH (episódio hipotônico-hiporresponsivo)** — observação. Geralmente autolimitado. Próxima dose pode ser dada com avaliação CRIE.\n\n**Crise convulsiva** — avaliação neurológica. Maioria autolimitada (febril). Próximas doses: avaliar.\n\n**Encefalite** — investigação completa. Suspende esquema dessa vacina. CRIE para alternativas.\n\n**Trombocitopenia pós-SCR** — geralmente autolimitada. Outra dose: avaliar com CRIE.\n\n**Linfadenite por BCG** — observação. Casos supurados: tratamento conservador, geralmente sem antibiótico. Casos graves: isoniazida (sob orientação).",

freire:"\"O que aconteceu logo depois da vacina?\". Pergunta primeira. Sem julgamento. Anote a sequência. Validate o medo: \"é assustador ver o filho ter convulsão\". Distinguir causa-efeito de coincidência precisa cuidado. Não diga \"foi a vacina\" antes de investigar; nem \"não foi a vacina\" precocemente. \"Vamos investigar, vamos notificar, vamos cuidar do que está acontecendo agora, e juntos decidir as próximas doses.\" Esse cuidado faz diferença para a família continuar a confiar no sistema. Hesitação vacinal frequentemente nasce de EAPV mal-comunicado.",

sus_tx:"**Atendimento UBS:**\n• Avaliar paciente, classificar (leve/grave).\n• Tratar sintomático.\n• Grave: estabilizar e encaminhar (ou tratar local se anafilaxia — adrenalina disponível).\n• Notificar em SI-EAPV (formulário específico, em até 48h).\n• Suspender dose seguinte da vacina envolvida ATÉ avaliação caso a caso (não suspender outras vacinas).\n• Encaminhar para CRIE em todas as situações graves.\n\n**Suporte SUS para investigação:**\n• Vigilância Epidemiológica municipal/estadual ajuda na investigação.\n• Casos graves geram inquérito do MS — Comitê de EAPV.\n• Resultado da análise volta como classificação de causalidade (consistente, indeterminado, inconsistente, não-classificável).",

padrao_ouro:"**[MAN-PNI 2024, Manual de Vigilância Epidemiológica de EAPV]** — referência oficial brasileira. **[OMS Causality Assessment of EAPV]** — método padronizado. **[Brighton Collaboration]** — definições de caso para padronização internacional. **[VAERS — Vaccine Adverse Event Reporting System, EUA]** — equivalente americano, base de dados de referência. Para anafilaxia: protocolo de tratamento universal de anafilaxia (já cobre).",

prog:"EAPV leves se resolvem em dias. Anafilaxia bem tratada: prognóstico bom, mortalidade <1%. EHH: autolimitada, geralmente sem sequela. Encefalite pós-vacinal: rara, prognóstico variável. Reação alérgica grave previne futura dose dessa mesma vacina (mas outras vacinas continuam viáveis).",

acomp:"Notificação em SI-EAPV é mandatória. Após estabilização, paciente é acompanhado pela UBS. Próximas doses: avaliar com CRIE, especialmente para vacinas vivas pós-grávida ou EAPV grave. Documentar em carteira: \"Hipersensibilidade a [componente] — evento [data] — não aplicar [vacina]\". Educar paciente para informar profissional saúde antes de futuras vacinações.",

p4:"**Não fazer:**\n• Atribuir todo sintoma pós-vacina à vacina sem investigar concomitância (IVAS, gastroenterite, etc).\n• Suspender TODAS vacinas após EAPV de UMA — geralmente apenas a envolvida é suspensa.\n• Solicitar 'imunograma' indiscriminadamente após EAPV.\n• Banir vacinas para sempre após EAPV menor — re-exposição controlada (em CRIE) pode esclarecer.\n• Não notificar 'pra não causar problema' — notificar é proteger a próxima vítima e a confiança no sistema.\n• Negar atendimento a paciente cuja família atribui sintoma à vacina — escutar, investigar, decidir baseado em evidência.",

diretriz:"[MAN-PNI 2024, vigilância EAPV]. [Sistema SI-EAPV/SVSA/MS]. [OMS Causality Assessment 2018]. [Brighton Collaboration]. [Plotkin's Vaccines, 8ª ed, 2023, cap. de segurança vacinal]. [TMFC 2ª ed 2019, cap. 152].",

alertas:[
{tipo:"crit", t:"Anafilaxia — adrenalina IM JÁ", d:"Mesmo se 'só' urticária + broncoespasmo, qualquer SUSPEITA de anafilaxia: adrenalina 1:1000 IM 0,3-0,5 mg coxa lateral. Não atrasar para antihistamínico. Repetir 5-15 min se necessário. Suporte ABC. ER imediato."},
{tipo:"warn", t:"Notificação em 48h", d:"EAPV grave deve ser notificada em até 48h. Atraso compromete farmacovigilância e pode gerar problema legal/institucional."},
{tipo:"info", t:"Causalidade não é imediata", d:"O Comitê de EAPV classifica retroativamente. Médico assistente não precisa decidir nexo causal — precisa notificar bem, com dados clínicos."},
{tipo:"info", t:"Re-exposição segura", d:"Após EAPV menor, futura dose geralmente é segura. Após EAPV grave, decidido caso a caso no CRIE. Não banir definitivamente sem avaliação."}
],

exames:[],
diretriz_short:"[MAN-PNI 2024 — EAPV]",
},

/* ============================================================
   7. VACINAÇÃO OCUPACIONAL
   ============================================================ */
{
id:"vac-ocupacional", contexto:["ubs"], nome:"Vacinação Ocupacional — Profissionais Expostos",
sis:"vacina", grav:"baixa", cid:"Z23,Z24,Z25,Z27", ciap:"A44",
sin:["vacinacao ocupacional","saude do trabalhador","profissional saude vacinas","viajantes vacinas"],
def:"Esquema vacinal indicado por exposição ocupacional ou de viagem. Profissionais de saúde, agropecuária, militares, viajantes internacionais, indígenas, ribeirinhos, ambientes de risco específico.",

intro:"Trabalho expõe a riscos biológicos específicos. Profissional de saúde lida com pacientes infecciosos diariamente. Agricultor lida com solo (tétano), roedores (hantavirose), morcegos (raiva). Militar enfrenta exposição múltipla. Viajante internacional encontra doenças locais (FA, Hep A, meningite ACWY conforme destino, raiva conforme animais). Vacinação ocupacional é parte da medicina do trabalho.",

apresentacao:"Profissional contratado/concursado precisa documentar carteira para admissão. Profissional já em atividade após exposição ocupacional. Pessoa programando viagem internacional. Estudante de saúde iniciando estágio. Caminhoneiro/comerciante viajante.",

sintomas:[
"Admissão em serviço de saúde — exigência institucional",
"Pós-exposição percutânea (acidente com perfurocortante) — PEP HIV/HBV/HCV",
"Pré-viagem internacional — vacinas específicas do destino",
"Trabalho rural/florestal — raiva, tétano, FA, hantavirose (essa sem vacina)",
"Trabalho em laboratório de biossegurança — esquema específico"
],

fisio:"Exposição ocupacional aumenta risco a microrganismos específicos. Imunidade vacinal reduz risco a quase zero para muitos agentes. Para alguns (HCV, HIV) não há vacina — apenas equipamentos de proteção (EPI) e protocolos pós-exposição.",

profilaxia:"**Por categoria profissional [SBIm Ocupacional + CNV-PNI 2026]:**\n\n**A) Profissionais de saúde:**\n• Hepatite B — 3 doses + verificação anti-HBs após (CRIE pode dispensar sorologia)\n• Tríplice Viral — 2 doses (mesmo se anteriormente 1)\n• Varicela — 2 doses se não-imune\n• Influenza — anual (grupo prioritário PNI)\n• dTpa — para serviços de saúde infantil e RN (cocoon)\n• Meningocócica ACWY/B — laboratoristas, profissionais em surto\n• COVID-19 — atualizada\n• Hepatite A — em serviços específicos (alimentação, ambientes contaminados)\n• BCG — sem indicação em adulto saudável; CRIE para situações específicas (contactante MDR)\n\n**B) Trabalhadores rurais/agropecuária:**\n• Tétano — esquema completo + reforço cada 10 anos\n• Febre Amarela — em área de recomendação\n• Hepatite A — em ambientes saneamento precário\n• Raiva pré-exposição — biólogos, espeleólogos, manejo animais silvestres\n• Influenza, COVID-19 — anualmente\n\n**C) Militares, bombeiros, policiais:**\n• Esquema do PNI + ocupacionais relevantes\n• FA, Meningocócica, Hep A, Influenza, Tríplice viral\n\n**D) Viajantes internacionais — depende do destino:**\n• **África subsaariana**: FA (obrigatória em vários países), Meningocócica ACWY (cinturão da meningite), Hep A, Tifoide, Raiva conforme exposição.\n• **Sudeste Asiático**: Hep A, Tifoide, Encefalite Japonesa em algumas áreas, Raiva, Influenza.\n• **América do Norte/Europa**: rotina + Influenza, Tríplice Viral atualizada.\n• **América Latina** (saída do Brasil): FA, Hep A, atualizar rotina.\n• **Peregrinação à Meca (Haj)**: Meningocócica ACWY obrigatória.\n• Sempre verificar requisitos do país no site do MS ou CIVES (Centro de Informação em Saúde para Viajantes - Fiocruz).\n\n**Antecedência ideal**: 4-6 semanas antes da viagem para esquemas completos e produção de anticorpos.\n\n**E) Estagiários/estudantes saúde**: mesmas indicações de profissional de saúde.\n\n**F) Indígenas, ribeirinhos, quilombolas**: PNI mantém esquema próprio com FA, Hep A reforçada, Influenza, etc — articulação com SESAI quando aplicável.",

freire:"\"Você trabalha com [função]?\". Profissão é parte da consulta. \"Que tipos de exposição você tem?\". \"O que sua empresa/instituição te oferece de vacina?\". Algumas instituições têm CCIH/SESMT que cuida; outras não. Para o trabalhador rural que vive na Ludi: \"você trabalha com gado/pasto/limpeza de mato? Tomou tétano nos últimos 10 anos? Se machucar amanhã, está coberto.\" Faz a conta junto: \"sua última vacina de tétano foi quando?\". Para o viajante: \"você está indo onde? Vou olhar o que precisa. Tem tempo? Algumas vacinas precisam ser tomadas 4 semanas antes pra fazer efeito.\"",

sus_tx:"**Na UBS Estiva Gerbi:**\n• Vacinas do PNI ocupacionais: aplicação na UBS conforme indicação.\n• FA, Hep B, Tríplice viral, dT, dTpa, Influenza: SUS.\n• Hep A para adulto: geralmente NÃO no PNI (exceto CRIE-elegíveis). Encaminhamento ou rede privada para viajante adulto.\n• Meningocócica ACWY para viajante: SUS em alguns programas (CRIE em situações específicas). Maioria: rede privada (R\\$150-300/dose).\n• Tifoide, Encefalite japonesa, raiva pré-exposição: maior parte rede privada.\n• Comprovação para viagem: Certificado Internacional de Vacinação (CIV/CIP) emitido pela ANVISA para FA — necessário em alguns países.\n\n**Atendimento de viajante** — orientação clara: 4-6 semanas antes. Para o trabalhador acidentado (perfurocortante): PEP HIV/HBV no SAE de referência (não UBS).",

padrao_ouro:"**[SBIm Ocupacional 2025-2026]** — calendário ocupacional completo. **[CIVES-Fiocruz]** — guia de viajante atualizado por país. **[CDC Travel Health]** — referência internacional. **[NR-32]** — Norma Regulamentadora brasileira para trabalhadores em saúde, prevê vacinação obrigatória para profissionais saúde. **[OMS — International Travel and Health 2024]**.",

prog:"Profissional de saúde adequadamente vacinado tem risco mínimo de adquirir doenças vacino-preveníveis no trabalho. Hep B: 95%+ proteção em respondedores. Influenza: reduz absenteísmo. Tríplice Viral: protege colegas e pacientes. Viajante vacinado: redução >90% para doenças cobertas no destino.",

acomp:"Carteira ocupacional separada da rotineira em alguns serviços. Para profissional saúde: anti-HBs documentado pelo menos 1 vez (não anualmente). Reforços de dT a cada 10 anos. Viajante: documentação para próxima viagem mantida em registro pessoal.",

p4:"**Não fazer:**\n• Reforços anuais de Hep B em respondedor — não necessário.\n• Sorologia para sarampo/caxumba/rubéola em profissional saúde com 2 doses documentadas de SCR — desnecessário (presume-se imunidade).\n• Tifoide rotineira para todo viajante — apenas destinos específicos com risco real.\n• Raiva pré-exposição para turista comum a destino urbano — só para exposição real a mamíferos silvestres/morcegos.\n• Cólera para viajante geral — não recomendada universalmente.\n• Encefalite japonesa para turista urbano em destino asiático — só para área rural endêmica + estadia longa.\n• Hep A para viajante curto (<2 semanas) sem exposição alimentar de risco — discussão.",

diretriz:"[CNV-PNI 2026, ocupacional]. [SBIm Ocupacional 2025-2026]. [CIVES-Fiocruz, guia para viajantes 2024-2025]. [CDC Travel Health 2024]. [NR-32 — Norma Regulamentadora brasileira]. [TMFC 2ª ed 2019, cap. medicina do trabalho e cap. 152]. [Plotkin's Vaccines, 8ª ed, 2023].",

alertas:[
{tipo:"warn", t:"PEP — janela é curta", d:"Acidente percutâneo: PEP HIV em até 72h (ideal nas primeiras 2h), HBV em 24h-7d (HBIG se não vacinado). Encaminhamento URGENTE ao SAE/ER de referência. Não atrasar para 'estabilizar'."},
{tipo:"info", t:"FA + Tríplice Viral", d:"Pode aplicar no mesmo dia. Se aplicadas separadamente, intervalo de 4 semanas."},
{tipo:"info", t:"Viagem com criança pequena", d:"Verificar contraindicações por idade (FA <6m contraindicada absoluta; <9m relativa). Pode mudar plano de viagem."}
],

exames:[],
diretriz_short:"[SBIm Ocupacional + CIVES]",
},

/* ============================================================
   8. RESGATE VACINAL E ESQUEMAS INCOMPLETOS
   ============================================================ */
{
id:"resgate-vacinal", contexto:["ubs"], nome:"Resgate Vacinal — Esquemas Incompletos e Atrasos",
sis:"vacina", grav:"baixa", cid:"Z28.2", ciap:"A44",
sin:["resgate vacinal","esquema incompleto","atraso vacinal","carteira atrasada","sem carteira"],
def:"Conduta diante de paciente com esquema vacinal incompleto, doses em atraso, ou sem documentação. Princípio: 'dose dada é dose contada' — não reinicia esquema, completa.",

intro:"Muitos adultos têm carteiras incompletas, perdidas, com doses anotadas em lugares diversos, ou simplesmente desconhecem o que tomaram. Conduta correta é diferente do que muita gente acha: não se reinicia esquema; continua de onde parou. Dose dada é dose contada — exceto em situações específicas. Essa orientação reduz exposições desnecessárias a antígenos e custos do SUS.",

apresentacao:"Adulto na captação do pré-natal sem carteira. Paciente queixoso de saúde que aproveita consulta para checar vacinação. Imigrante recém-chegado. Paciente após período de afastamento (preso, em viagem prolongada, em situação de rua). Migrante interno de zona rural com cobertura histórica baixa. Paciente que perdeu carteira após enchente/incêndio.",

sintomas:[
"Sem carteira física — perdida ou nunca recebida",
"Carteira parcial — algumas doses anotadas",
"Doses 'no ar' — pessoa lembra de ter tomado mas sem registro",
"Doses fora do prazo — esquema iniciado e abandonado",
"Diagnóstico recente que exige cobertura específica — DCNT nova, imunossupressão iminente"
],

fisio:"Imunidade vacinal não 'expira' por atraso — anticorpos podem cair, mas memória imunológica persiste. Dose tardia ainda é resposta anamnéstica (rápida e robusta). Apenas reinício de esquema completo é justificado em situações muito específicas (anti-rábica pós-exposição com lapso muito longo entre doses, segundo protocolo PNI).",

profilaxia:"**Princípios gerais [MAN-PNI 2024]:**\n\n**1. Dose dada é dose contada.**  Não reinicia esquema, completa.\n\n**2. Intervalo mínimo deve ser respeitado.** Se duas doses foram dadas com intervalo MENOR que o mínimo, a segunda não conta. Exemplos: Hep B intervalo mínimo entre 1ª e 2ª dose = 4 semanas; entre 2ª e 3ª = 8 semanas; entre 1ª e 3ª = 16 semanas. Se desrespeitado, a dose 'precoce' não conta.\n\n**3. Intervalo máximo NÃO existe.** Atraso de meses ou anos: completa o esquema com as doses faltantes. Não 'recomeça'.\n\n**4. Esquemas combinados:** se já tomou 2 doses de uma marca de Hep B, pode terminar com outra — vacinas são intercambiáveis em geral.\n\n**5. Sem registro = não vacinado.** Para qualquer vacina sem comprovação documental ou SI-PNI: considerar não-vacinado, OFERECER esquema.\n\n**6. Vacinas vivas — não podem ser repetidas indefinidamente.** Geralmente esquema é 'para a vida' após esquema completo. Ex.: 2 doses de SCR cobertas para sempre.\n\n**Aplicação por tipo de paciente:**\n\n**Adulto sem carteira (20-59 anos):**\n• Hep B: iniciar 3 doses (0, 1, 6)\n• Tríplice Viral: 2 doses se nascido após 1960 (presunção de exposição natural). Profissional saúde, mulher fértil sem registro: 2 doses sempre.\n• Febre Amarela: 1 dose única (se reside/viaja em área de recomendação)\n• dT/dTpa: iniciar 3 doses (0, 2, 4)\n• Influenza/COVID-19: conforme grupo prioritário e atualização.\n\n**Idoso sem carteira (≥60 anos):**\n• dT: 3 doses (0, 2, 4)\n• Influenza: anual\n• Pneumo23: 1 dose (se indicação institucionalizada/comorbidade)\n• COVID-19: conforme atualização\n• Tríplice viral, FA: geralmente desnecessárias (idoso pré-1960 teve imunidade natural; aval caso a caso)\n• Hep B: se mantém fator de risco → 3 doses\n\n**Gestante sem carteira:**\n• Hep B: iniciar 3 doses (em qualquer trimestre)\n• Tríplice viral: NÃO (viva) — postergar puerpério\n• Febre Amarela: NÃO (viva) — postergar puerpério, exceto exposição inevitável\n• dT/dTpa: iniciar 3 doses, sendo a última dTpa entre 20-36 sem\n• Influenza/COVID-19: conforme campanha/atualização\n\n**Imigrante recém-chegado:**\n• Considerar não-vacinado para tudo sem registro.\n• Se carteira de origem disponível e legível: aceitar e completar conforme PNI brasileiro.\n• Iniciar esquemas conforme idade e situação.\n\n**Paciente em situação de rua / vulnerabilidade extrema:**\n• Articulação com Consultório na Rua, CRAS, CnR.\n• Esquema oportunístico — aplicar quando o paciente comparece, não exigir esquema 'perfeito'.\n• Priorizar: Hep B, dT, Influenza, COVID-19.\n• Tuberculose: rastrear, tratar se LTBI.",

freire:"\"Vamos olhar sua carteira juntos. O que tem aí?\". Aceitar o que tem, sem julgar quem não tem. \"Não tem carteira? Tudo bem, vamos começar de novo — não é problema.\". Tirar o peso da pessoa de \"falhar\" no autocuidado. Para adulto em situação de rua: usar a oportunidade da consulta, não exigir retorno marcado que não vai acontecer. Para imigrante: respeitar conhecimento prévio, aceitar esquemas estrangeiros (com tradução se necessário). \"Vacinação é um direito, e está aqui pra você.\"",

sus_tx:"**Fluxo prático na UBS Estiva Gerbi:**\n1. Conferir carteira física do paciente.\n2. Consultar SI-PNI (sistema informatizado) para registros anteriores.\n3. Se sem registro confiável: planejar esquema do zero conforme idade/situação.\n4. Aplicar primeira dose **NA CONSULTA** sempre que possível — não marcar retorno para começar, começa agora.\n5. Aprazar próximas doses na própria carteira física do paciente.\n6. Anotar em prontuário UBS + carteira física + SI-PNI.\n7. ACS notifica paciente faltoso para próximas doses.\n8. Em 6 meses: revisar status do esquema.\n\n**Material gratuito:** UBS pode fornecer carteira de vacinação nova se paciente perdeu a anterior.",

padrao_ouro:"**[MAN-PNI 2024, princípios gerais de imunização]**. **[CDC Catch-up Schedule]** — referência americana com tabelas detalhadas para esquemas atrasados por idade. **[SBIm 2025-2026, calendário de resgate]**. **[Plotkin's Vaccines, 8ª ed, 2023, cap. de princípios gerais]**.",

prog:"Paciente que completa esquema de resgate atinge proteção quase equivalente à vacinação no esquema original — diferenças mínimas em títulos de anticorpos, sem impacto clínico. Esforço vale a pena.",

acomp:"Após esquema iniciado, ACS apoia continuidade. Para Hep B (3 doses ao longo de 6 meses): retorno 1m e 6m. Para dT (3 doses): retorno 2m e 4m. Próximo reforço de dT/dTpa anotado pra 10 anos depois. Carteira atualizada virtualmente (SI-PNI) e fisicamente.",

p4:"**Não fazer:**\n• Reiniciar esquema completo só porque atrasou — exceção: vacinação anti-rábica pós-exposição com lapso entre doses fora do protocolo (situação muito específica).\n• Pedir sorologia (anti-HBs, anti-rubéola) para 'decidir se precisa' em paciente saudável sem evidência de imunossupressão.\n• Aplicar TODAS vacinas no mesmo dia se isso causar estresse/medo desproporcional ao paciente — pode-se escalonar.\n• Recusar atender paciente sem carteira como justificativa para não vacinar — atender, vacinar, registrar.\n• Imunizar contra doenças com risco quase zero ('para tirar a dúvida') quando não há fator de risco real.",

diretriz:"[MAN-PNI 2024, princípios gerais]. [CDC Catch-up Schedule 2024]. [SBIm Calendários por situação 2025-2026]. [TMFC 2ª ed 2019, cap. 152]. [Plotkin's Vaccines, 8ª ed, 2023].",

alertas:[
{tipo:"info", t:"Dose dada = dose contada", d:"Atraso NÃO reinicia esquema. Princípio universal das imunizações."},
{tipo:"info", t:"Intervalo mínimo conta", d:"Intervalo MENOR que o mínimo recomendado invalida a dose 'precoce'. Intervalo MAIOR não invalida nada."},
{tipo:"warn", t:"Vacinas vivas em sequência", d:"Se 2 vacinas vivas não aplicadas no mesmo dia: intervalo mínimo de 4 semanas (28 dias) entre elas. Caso contrário, segunda pode não 'pegar'."},
{tipo:"info", t:"Aproveitar consulta", d:"Resgate vacinal é oportunidade — paciente já está na UBS. Não marcar retorno só para iniciar; comece hoje a primeira dose."}
],

exames:[],
diretriz_short:"[MAN-PNI 2024 — Resgate]",
},

);
