/* ===========================================================
   VOVÔMINIC DOUTÔ — pat/vacina.js
   Profilaxia Pós-Exposição (PEP) — Tétano, Raiva, Hep B, HIV
   Sistema: vacina
   Fonte: PCDT-MS PEP 2024, CRIE 2023, PNI 2026
   =========================================================== */

PATOLOGIAS.push(

{
id:"vac-tetano-pep", contexto:["pa","ubs"], nome:"PEP Tétano — Conduta em Ferimentos",
sis:"vacina", grav:"alta",
cid:"Z23", ciap:"A44",
sin:["tétano profilaxia","ferimento dT","SAT","IGHT","ferida tétano"],
def:"Profilaxia pós-exposição contra tétano em ferimentos — decisão baseada em tipo de ferida + status vacinal prévio.",
intro:"Tétano segue como ameaça em ferimentos contaminados de pacientes não-vacinados ou com vacinação remota. Brasil tem ~200 casos/ano e letalidade 30-50%. PEP custa pouco; tétano custa vidas. Vacinação prévia adequada (3 doses + reforço a cada 10 anos) elimina necessidade de soro/IG em maioria dos casos.",
fisio:"Clostridium tetani: anaeróbio estrito, esporulado, ubíquo no solo. Esporos germinam em ferida com pouca oxigenação (penetrante, profunda, com tecido desvitalizado, corpo estranho, mordedura, queimadura). Toxina tetanospasmina migra retrogradamente pelos nervos motores; bloqueio de neurônios inibitórios → tetania, trismo, opistótono, falência respiratória.",
apresentacao:"Vítima de acidente: ferimento perfurante/profundo/contaminado/mordedura/queimadura/cirúrgico-contaminado. Status vacinal: 4 categorias (ver matriz). PEP indicada em <72h idealmente, mas vale tentar até 7 dias.",
sintomas:[
"Ferimento limpo + superficial → CLASSE I (baixo risco)",
"Ferimento contaminado / profundo / mordedura / queimadura / acidente com objeto perfurocortante / acidente automobilístico → CLASSE II (alto risco)",
"Status vacinal: A) ≥3 doses + reforço ≤5a; B) ≥3 doses + reforço 5-10a; C) ≥3 doses + reforço >10a; D) <3 doses ou incerto",
],
profilaxia:"MATRIZ DE DECISÃO [MS-PNI-Tétano + CRIE]: ◆ Ferimento CLASSE I + status A: nada. ◆ Classe I + B/C: reforço dT. ◆ Classe I + D: iniciar esquema dT (3 doses). ◆ Ferimento CLASSE II + status A: nada (mas pode reforçar se >5a por margem). ◆ Classe II + B: reforço dT. ◆ Classe II + C: reforço dT + considerar IGHT/SAT se ferida muito contaminada. ◆ Classe II + D: dT + IGHT (250 UI IM, profilaxia) OU SAT (5000 UI IM após teste sensibilidade). DOSE: dT (tetânica adulta dupla) 0,5 ml IM em deltoide; IGHT (imunoglobulina humana antitetânica): preferida; SAT (soro heterólogo equino): se IGHT indisponível, fazer teste prévio. SEMPRE limpar e desbridar a ferida — vacina/soro não substituem cuidado da ferida.",
freire:"Vítima de acidente está estressada. Não pergunte 'tomou vacina contra tétano há quantos anos?' (resposta vai ser 'não lembro'). Pergunte: 'Qual foi a última vez que você tomou vacina? Tem o cartão?' Sem cartão E sem certeza = considerar status D (não-vacinado) — princípio da precaução, custo baixo. Explicar: 'a vacina hoje protege se algo grande acontecer; a injeção do soro é a defesa imediata enquanto seu corpo aprende.'",
sus_tx:"UBS (durante horário): dT + IGHT se indicado. PS/UPA: também aplica. Para SAT (caso IGHT indisponível): teste de sensibilidade (0,02 ml subcutâneo, observar 15-20 min) antes da dose terapêutica. Ferimentos profundos/contaminados: limpar abundantemente com SF, desbridar, antibiótico se contaminação evidente (amoxi-clav 875+125 mg 8/8h por 5-7d, alternativa clinda+cipro). Notificar SINAN se caso suspeito ou confirmado.",
padrao_ouro:"Mesma matriz. Em PS de referência com IGHT disponível: preferir IGHT a SAT (risco anafilaxia menor). Em mordeduras humanas/animais: além de PEP tétano, considerar antibiótico + PEP raiva.",
prog:"PEP adequada: prevenção quase total. Tétano instalado tem letalidade 30-50% mesmo com tratamento (UTI, ventilação, bloqueio neuromuscular, ATB, sedação prolongada).",
acomp:"Esquema iniciado: completar 3 doses (0-1-6 meses). Reforço a cada 10a daí em diante. Documentar no cartão. Reavaliar ferida em 48-72h se contaminada — sinais de infecção secundária.",
p4:"NÃO usar SAT 'just in case' — heterólogo tem risco anafilático. NÃO repetir reforço dT em <5 anos se já em dia. Não confundir 'dT' com 'dTpa' — em adulto sem indicação obstétrica/profissional pediátrica = dT é suficiente. NÃO indicar ATB profilático para TODA ferida — apenas em ferida contaminada/mordedura/com sinais infecciosos.",
diretriz:"[MS — Guia de Vigilância em Saúde, Tétano] [CRIE 2023] [CNV-PNI 2026]",

alertas:[
{nivel:"crit", txt:"⚠ Ferimento PROFUNDO + CONTAMINADO + ≥3 doses MAS última >5a → reforço dT IMEDIATO. Sem soro. Aplicar até 72h, idealmente nas primeiras horas."},
{nivel:"crit", txt:"⚠ NÃO-VACINADO OU vacinação ignorada com ferimento de ALTO RISCO (mordedura, queimadura extensa, ferida com terra/fezes, fratura exposta) → dT + IGHT/SAT IMEDIATAMENTE em sítios anatômicos distintos. Iniciar/completar série dT depois."},
{nivel:"warn", txt:"Limpeza cirúrgica do ferimento é parte INALIENÁVEL da profilaxia — sem desbridamento adequado, vacina/soro não previne tétano. Remover corpo estranho, tecido desvitalizado, irrigar abundantemente."},
{nivel:"warn", txt:"IGHT (humana) é melhor que SAT (heteróloga eqüina) — menor risco anafilaxia/doença do soro. Disponibilidade: IGHT é dose única IM. SAT exige teste sensibilidade prévio. Confirmar disponibilidade local antes."},
{nivel:"info", txt:"Adulto com ≥3 doses + último reforço <5a: NENHUMA profilaxia adicional, qualquer tipo de ferida. Comunicar paciente da proteção atual."},
{nivel:"info", txt:"Gestante: dT contraindicação não existe; pode usar dTpa (preferível em 3º trimestre se necessária revacinação)."},
],
},

{
id:"vac-raiva-pep", contexto:["pa","ubs"], nome:"PEP Raiva — Profilaxia Pós-Exposição",
sis:"vacina", grav:"crit",
cid:"Z24.2", ciap:"A44",
sin:["raiva profilaxia","mordedura cachorro","mordedura morcego","soro antirrábico","esquema raiva"],
def:"Profilaxia pós-exposição contra raiva — esquema com vacina + soro antirrábico baseado em tipo/local de ferida e animal agressor.",
intro:"Raiva é letalidade ~100% após sintomas. Brasil tem ~5-10 casos humanos/ano, quase todos transmitidos por morcego (atualmente). Cão tem raiva controlada urbana (programa de vacinação canina), mas raiva canina urbana em alguns estados ainda ocorre. PEP é altamente eficaz se iniciada precocemente.",
fisio:"Lyssavirus (Rhabdoviridae). Vírus neurotrópico — migração retrógrada axonal do local de inoculação até SNC. Período de incubação 20-60d (varia: dias a anos, depende da carga viral, distância do SNC e suscetibilidade). Após sintomas: encefalite hemorrágica, agitação, hidrofobia, paralisia, morte. PEP funciona porque o vírus demora a chegar ao SNC — janela para imunidade ativa (vacina) + passiva (soro).",
apresentacao:"Vítima de agressão por animal: cão, gato, morcego (mesmo sem mordida visível — contato cutâneo com saliva ou arranhão), bovino/equino, primata, outros silvestres. Avaliar tipo de ferida (mordedura, arranhão, lambedura em mucosa/ferida) + local (cabeça, face, pescoço, mãos, pés = grave) + animal (sintomas? observação possível? vacinado?).",
sintomas:[
"Mordedura de cão domiciliado, vacinado, sem comportamento alterado → observação canina por 10d; vacina se cão adoecer/morrer",
"Mordedura de cão de rua/desconhecido OU cão sintomático → INICIAR esquema imediatamente",
"Contato com morcego (mordida, arranhão, lambedura, contato cutâneo direto, EM AMBIENTE ONDE ESTEVE MORCEGO MORTO) → SEMPRE PEP (morcego = exposição de risco)",
"Ferida grave (cabeça/face/pescoço/mãos, múltiplas, dilaceração, profunda) → vacina + soro",
"Lambedura em mucosa íntegra (lábio, olho) → vacina",
"Lambedura em pele íntegra → não PEP (lavar e orientar)",
],
profilaxia:"ESQUEMA DE 4 DOSES [PNI-MS Raiva 2024]: D0 - D3 - D7 - D14 (não há D28 desde 2017 — esquema simplificado validado por OMS). Aplicar IM em deltoide. SORO ANTIRRÁBICO (SAR ou IGHAR): indicado em exposição grave — 20 UI/kg, infiltrar O MÁXIMO POSSÍVEL ao redor de TODAS as feridas; resto IM em região distante do local da vacina. DOSE: dose única, no mesmo dia da D0 da vacina. Se demora — soro pode ser aplicado até 7 dias após início da vacina. Não administrar soro e vacina na MESMA seringa ou MESMO local.",
freire:"Vítima de mordedura ou contato com morcego está com medo. Acolher. Explicar com clareza: 'A raiva é grave se acontecer, MAS a profilaxia funciona muito bem se começarmos agora.' NÃO romanticizar nem subestimar. Para crianças: vai ser desconfortável (4 picadas + soro com volume), explicar à família. Para morcego em casa: orientar exterminação cuidadosa (não tocar com a mão, ligar pra Vigilância Sanitária ou Centro de Zoonoses); examinar o entorno (idosos, crianças que podem ter sido mordidos durante o sono sem perceber).",
sus_tx:"Vacina antirrábica + soro/IGHAR: distribuídos via PNI nas UBS habilitadas + Unidade Centro de Zoonoses + PS de referência. Em Estiva Gerbi: UBS Paulo Donizete Burse (Centro de Zoonoses Municipal) ou SAE regional — CONFIRMAR fluxo local. Encaminhamento para PS regional se exposição grave (Mogi Guaçu / São João da Boa Vista). Notificar SINAN.",
padrao_ouro:"Mesmo esquema. Em alguns países: vacina intradérmica em pequenas doses (Tailândia, OMS) — não recomendado rotina Brasil. PrEP raiva (3 doses pré-exposição) em profissionais de alto risco: veterinários, biólogos de morcego, trabalhadores em Centro de Zoonoses, espeleólogos.",
prog:"PEP completa adequada: prevenção quase 100% se iniciada precocemente. ATRASO em iniciar é fator crítico — quanto mais perto da inoculação ao SNC (cabeça/face), mais urgente.",
acomp:"Completar 4 doses no esquema. NÃO interromper esquema mesmo se sintomas alérgicos leves (manejar com antialérgico e seguir; relatar ao serviço). Observação canina (se aplicável): 10 dias — se animal morre/adoece, mandar cabeça para análise (raiva por imunofluorescência). Investigação epidemiológica de surto se mais casos similar localmente.",
p4:"NÃO indicar PEP em contato sem risco real: lambedura em pele íntegra, mordedura de roedor pequeno (rato, camundongo, hamster — não-transmissores rotineiros), contato com sangue de cão sem mordedura. PrEP raiva NÃO indicada para população geral. Não interromper esquema iniciado por dor local ou febre leve — eventos esperados.",
diretriz:"[MS — Norma Técnica de Profilaxia da Raiva Humana, 2024] [OMS — Rabies Vaccines: WHO Position Paper, 2018, simplifica esquema para 4 doses] [CNV-PNI 2026]",

alertas:[
{nivel:"crit", txt:"⚠ MORDEDURA por animal SUSPEITO/RAIVOSO ou MORCEGO em qualquer circunstância → iniciar PEP IMEDIATAMENTE, mesmo antes de observação do animal. Esquema completo = 5 doses (D0, D3, D7, D14, D28) + soro/imunoglobulina antirrábica nos ferimentos graves."},
{nivel:"crit", txt:"⚠ MORCEGO: TODA exposição é considerada GRAVE — mesmo contato sem ferimento aparente. Esquema completo + soro. Não esperar testes do animal."},
{nivel:"crit", txt:"NÃO suturar ferida de mordedura suspeita antes da limpeza com sabão E aplicação local de soro antirrábico (se indicado). Fechamento primário aumenta retenção do vírus."},
{nivel:"warn", txt:"Cão/gato OBSERVÁVEL (domiciliado, identificável, sem sinais de raiva): pode-se aguardar 10 dias de observação E suspender PEP se animal continuar saudável. Não é regra para morcegos, animais silvestres, animais sem identificação."},
{nivel:"warn", txt:"Lavagem ABUNDANTE com água e sabão por ≥15 min é parte CRUCIAL da PEP — reduz carga viral local em até 90%. Não dispensar."},
{nivel:"info", txt:"Pacientes previamente vacinados (esquema completo prévio): apenas 2 doses de reforço (D0, D3), sem soro. Confirmar dados na caderneta — não 'achar'."},
],
},

{
id:"vac-hepb-pep", contexto:["pa","ubs"], nome:"PEP Hepatite B — Acidente Perfurocortante",
sis:"vacina", grav:"alta",
cid:"Z20.5", ciap:"A44",
sin:["acidente perfurocortante hep B","HBV PEP","IGHAHB","profilaxia hepatite B"],
def:"Profilaxia pós-exposição contra hepatite B após acidente percutâneo, mucocutâneo ou sexual de risco — combinação vacina + imunoglobulina hiperimune conforme matriz.",
intro:"PEP Hep B é altamente eficaz se iniciada precocemente (<24-48h ideal, válida até 7d). Decisão baseada em STATUS HBsAg da fonte + STATUS VACINAL do exposto. Vacinação prévia adequada (anti-HBs ≥10 mUI/mL alguma vez na vida) protege quase totalmente — uma das razões pelas quais profissional de saúde DEVE ter Hep B em dia.",
fisio:"Vírus DNA, transmissão parenteral/sexual/vertical. Janela de risco pós-exposição: 4-24 semanas até soroconversão (HBsAg+). Imunidade vacinal: anti-HBs ≥10 mUI/mL = memória imunológica adequada (mesmo se cai depois — anamnese vale). IGHAHB fornece imunidade passiva imediata; vacina inicia/reforça imunidade ativa.",
apresentacao:"Profissional de saúde com agulha contaminada, lâmina, respingo em mucosa/conjuntiva, mordida humana com sangue. Vítima de violência sexual. Acidente domiciliar (puxar agulha no lixo). Sempre coletar histórico vacinal + sorológico do acidentado + (se possível e com consentimento) da fonte.",
sintomas:[
"Acidentado vacinado com anti-HBs ≥10 alguma vez → IMUNE, nenhuma ação adicional",
"Acidentado vacinado com anti-HBs <10 (não-respondedor após 2 esquemas completos) → IGHAHB (2 doses, intervalo 30d) se fonte HBsAg+",
"Acidentado não-vacinado / esquema incompleto → iniciar/completar vacinação + IGHAHB se fonte HBsAg+",
"Fonte HBsAg desconhecido → tratar como fonte de risco (vacinar + considerar IGHAHB se acidentado susceptível)",
],
profilaxia:"MATRIZ [PCDT-PEP/MS 2024 + CRIE]: ◆ Acidentado IMUNE comprovado → nada. ◆ Acidentado SUSCEPTÍVEL + Fonte HBsAg POSITIVO → IGHAHB (0,06 ml/kg IM, idealmente <24h, válida até 7d) + iniciar/completar vacina (esquema 0-1-6). ◆ Acidentado susceptível + Fonte HBsAg DESCONHECIDO → considerar como positivo (precaução) → IGHAHB + vacina, especialmente se fonte de alto risco. ◆ Fonte sabidamente NEGATIVO → apenas vacinar acidentado para futuro.",
freire:"Acidente perfurocortante gera ansiedade enorme — vinculação imediata ao SAE/UBS, com explicação clara das probabilidades reais (Hep B: risco transmissão 6-30% sem PEP; com PEP, próximo de zero). NÃO catastrofizar nem subestimar. Profissional acidentado: validar emoção, mas trazer para ação imediata (não há tempo a perder). Trabalhar a vergonha — acidente acontece com profissional experiente também, não é falha individual.",
sus_tx:"SAE municipal ou regional (Estiva Gerbi: SAE Mogi Guaçu — CONFIRMAR). UBS quando habilitada. IGHAHB: distribuída via CRIE com indicação. Sorologias do acidentado e da fonte: HBsAg, anti-HBs, anti-HCV, anti-HIV (testes rápidos). Iniciar PEP-HIV concomitante se indicado (ver patologia separada vac-hiv-pep). Notificar SINAN (acidente biológico) + Vigilância Epidemiológica local.",
padrao_ouro:"Mesmo protocolo. Acréscimo: anti-HBs titulado após 1-2 meses do término da vacinação para confirmar soroconversão. Se persistir <10 mUI/mL: repetir esquema 0-1-6 (segundo esquema). Se persistir <10 após total de 6 doses: não-respondedor, manejar profilaxia futura com IGHAHB.",
prog:"Profilaxia adequada reduz transmissão Hep B em >90% em acidentado susceptível. Se acidentado já-imune: prevenção próxima de 100%.",
acomp:"Acidentado susceptível: sorologias seguimento 6 sem / 3 m / 6 m (HBsAg + anti-HCV + anti-HIV). Acompanhamento no SAE. Atualizar vacinação para futuro.",
p4:"NÃO administrar IGHAHB em pessoa já-imune — desperdício de recurso caro. NÃO repetir esquema vacinal em respondedor já-confirmado (uma vez >10 = memória). NÃO atrasar PEP para esperar resultado sorológico da fonte — iniciar com base na suspeita; ajustar conforme resultado.",
diretriz:"[PCDT-MS Profilaxia Pós-Exposição (PEP) de risco à infecção por HIV, IST e Hepatites Virais, 2024] [CRIE 2023 — Imunoglobulina Humana Anti-Hepatite B (IGHAHB)] [CNV-PNI 2026]",

alertas:[
{nivel:"crit", txt:"⚠ Acidente perfurocortante com fonte HBsAg+ e profissional NÃO-VACINADO ou anti-HBs<10 → IGHB (imunoglobulina anti-HB) + vacina HB em sítios distintos, em ATÉ 24h (idealmente <2h). Eficácia cai drasticamente após 7 dias."},
{nivel:"warn", txt:"Profissional VACINADO com anti-HBs documentado ≥10 mUI/mL → NENHUMA conduta adicional além de limpeza do sítio. Confirmar sorologia (não confiar só em \"tomou vacina\")."},
{nivel:"warn", txt:"Fonte com status desconhecido: solicitar HBsAg da fonte de forma URGENTE. Iniciar vacina HB no profissional sem aguardar (a vacina é segura mesmo se vier negativa). IGHB só se HBsAg+ confirmado."},
{nivel:"info", txt:"Esquema completo de vacina HB = 3 doses (0, 1, 6 meses) com sorologia 1-2 meses após 3ª dose (anti-HBs)."},
{nivel:"info", txt:"\"Non-responder\" (anti-HBs<10 após 2 séries completas): considerar imunodepressão, intercorrências, falha técnica. Manejo individualizado."},
],

alertas:[
{nivel:"crit", txt:"⚠ PEP HIV: INICIAR EM ATÉ 72h (idealmente <2h). Eficácia decresce com tempo. Após 72h, NÃO está indicada (exceto exposições recidivantes graves discutir caso a caso). Não 'guardar pro dia seguinte'."},
{nivel:"crit", txt:"Esquema padrão 2026: Tenofovir + Lamivudina + Dolutegravir (TDF/3TC/DTG) — 28 dias VO. Mesmo esquema de TARV inicial. Disponibilizado pelo SAE / SAE-emergência local. UBS pode iniciar 1ª dose se SAE não acessível imediatamente."},
{nivel:"warn", txt:"Antes de iniciar: testar profissional/exposto para HIV (descartar infecção PRÉVIA). Solicitar também HBsAg, anti-HBs, anti-HCV, VDRL, β-HCG. NÃO retardar PEP esperando resultado HIV — colher e iniciar."},
{nivel:"warn", txt:"Acompanhamento: testagem HIV em 6 semanas e 3 meses (manter precaução sexual nesse período). Hemograma, função renal e hepática 4 semanas após início (toxicidade TDF/DTG)."},
{nivel:"info", txt:"Fonte HIV+ confirmada com carga viral indetectável persistente >6 meses: PEP geralmente NÃO indicada (U=U). Mas avaliar caso a caso — confirmar a indetectabilidade na documentação, não na fala."},
{nivel:"info", txt:"Exposição sexual de risco (estupro, ruptura de preservativo com parceiro de status incerto, sexo desprotegido com PVHIV sem TARV/com carga viral): PEP elegível em ≤72h. Encaminhar SAE para PrEP após PEP se exposição recidivante."},
],
},

{
id:"vac-hiv-pep", contexto:["pa","ubs"], nome:"PEP HIV — Profilaxia Pós-Exposição",
sis:"vacina", grav:"crit",
cid:"Z20.6", ciap:"A44",
sin:["PEP HIV","profilaxia HIV","TDF lamivudina dolutegravir","acidente HIV"],
def:"Profilaxia pós-exposição contra HIV — TARV de 28 dias iniciada idealmente em <2h, sempre <72h.",
intro:"PEP HIV reduz transmissão em >80% se iniciada precocemente. Janela ÓTIMA: <2 horas pós-exposição. Janela ÚTIL: <72 horas. Após 72h: ineficaz. Esquema atual MS: TDF/3TC/DTG (tenofovir + lamivudina + dolutegravir) por 28 dias.",
fisio:"HIV após exposição precisa migrar da mucosa/ferida → célula dendrítica/macrófago local → linfonodo regional → linfócito T-CD4 e integrar no DNA hospedeiro. Esta janela (~24-72h) é onde TARV pode bloquear estabelecimento da infecção sistêmica. TDF/3TC: inibidores nucleos(t)ídeos de transcriptase reversa (NRTI). DTG: inibidor de integrase (INSTI) — alta barreira de resistência.",
apresentacao:"Profissional de saúde com acidente perfurocortante de fonte HIV+ ou desconhecido de alto risco. Violência sexual. Relação sexual desprotegida com parceiro HIV+ não-controlado. Compartilhamento de agulha. Acidente em criança/idoso por agulha de rua.",
sintomas:[
"Acidente perfurocortante de fonte HIV+ → PEP imediato",
"Violência sexual → PEP imediato + (contracepção emergência + IST PEP)",
"Sexo desprotegido + parceiro HIV+ sem TARV ou virgem TARV ou carga viral detectável → PEP",
"Sexo desprotegido + parceiro HIV+ controlado (CV indetectável >6m, TARV) → risco baixíssimo (U=U), discutir caso a caso (geralmente NÃO PEP)",
"Acidente com agulha de rua sem fonte conhecida → caso a caso (alto risco em ambiente de uso de drogas IV)",
],
profilaxia:"ESQUEMA PADRÃO 1ª LINHA [PCDT-PEP MS 2024]: TDF (300 mg) + 3TC (300 mg) + DTG (50 mg) — 1 cp combinado de TDF+3TC + 1 cp de DTG, VO 1x/dia (preferencialmente noite, com refeição) por 28 dias. Iniciar idealmente <2h pós-exposição; aceitável até 72h. INTOLERÂNCIA/CONTRAINDICAÇÃO: substituir conforme orientação infecto (gestante: ATV/r ou DRV/r; insuf renal: ajustar TDF; alergia: TAF/FTC/DTG). Sorologias do acidentado: HIV/HBV/HCV no D0; HIV no 4-6 sem; HIV/HBV/HCV no 3 m e 6 m. Iniciar PEP Hep B concomitante se indicado.",
freire:"Janela curta de 72h gera ansiedade — agir rápido SEM atropelar. Vítima de violência sexual: acolhimento prioritário, NÃO insistir em detalhes — apenas o essencial para a profilaxia. Profissional acidentado: validar vergonha/medo, focar em ação. Esquema é 28 dias COMPLETOS — explicar importância da adesão; eventos adversos esperados (diarreia, cefaleia, insônia leve) — manejar com sintomático, NÃO interromper TARV.",
sus_tx:"SAE municipal/regional 24h (não-feriado). Em horário não-comercial: PS de referência. Para Estiva Gerbi: SAE de Mogi Guaçu / Itapira (CONFIRMAR). MS distribui kit PEP HIV gratuitamente. Para violência sexual: maior parte dos PS tem kit pronto (PEP + contracepção emergência + ATB IST). Notificação obrigatória de violência sexual (SINAN ficha de notificação compulsória).",
padrao_ouro:"Mesmo esquema. Alguns serviços usam Bictegravir/FTC/TAF (B/F/TAF) — alta tolerabilidade, mas custo e ainda não-rotina no SUS. PrEP (profilaxia PRÉ-exposição): TDF/FTC ou Cabotegravir injetável — para população de alto risco recorrente; não confundir com PEP.",
prog:"PEP iniciada <72h com aderência ≥95% das doses: prevenção >80% da soroconversão [Cardo 1997, Roland 2005, MS-DCCI 2024]. Estudos mais recentes sugerem eficácia ~95-99% quando bem-conduzido.",
acomp:"Reavaliação 1ª semana (tolerabilidade, esclarecer dúvidas), 4ª semana (final do tratamento), 4-6 sem (sorologia HIV teste rápido), 3 m e 6 m (sorologias finais). Iniciar PrEP se exposição de alto risco recorrente prevista.",
p4:"NÃO indicar PEP em exposições de baixo risco: sexo com camisinha intacta; contato com sangue em pele íntegra; sexo com parceiro U=U (CV indetectável); contato salivar. NÃO iniciar PEP após 72h — sem evidência de benefício. NÃO interromper PEP por intolerância leve — manejar sintomático e completar.",
diretriz:"[PCDT-MS — Profilaxia Pós-Exposição (PEP) de risco à infecção por HIV, IST e Hepatites Virais, 2024] [Protocolo de Atendimento a Vítimas de Violência Sexual — MS] [Diretrizes Antirretrovirais OMS 2024]",
alertas:[
{nivel:"crit", txt:"⚠ PEP HIV: INICIAR EM ATÉ 72h (idealmente <2h). Eficácia decresce com tempo. Após 72h, NÃO está indicada (exceto exposições recidivantes graves discutir caso a caso). Não 'guardar pro dia seguinte'."},
{nivel:"crit", txt:"Esquema padrão 2026: Tenofovir + Lamivudina + Dolutegravir (TDF/3TC/DTG) — 28 dias VO. Mesmo esquema de TARV inicial. Disponibilizado pelo SAE / SAE-emergência local. UBS pode iniciar 1ª dose se SAE não acessível imediatamente."},
{nivel:"warn", txt:"Antes de iniciar: testar profissional/exposto para HIV (descartar infecção PRÉVIA). Solicitar também HBsAg, anti-HBs, anti-HCV, VDRL, β-HCG. NÃO retardar PEP esperando resultado HIV — colher e iniciar."},
{nivel:"warn", txt:"Acompanhamento: testagem HIV em 6 semanas e 3 meses (manter precaução sexual nesse período). Hemograma, função renal e hepática 4 semanas após início (toxicidade TDF/DTG)."},
{nivel:"info", txt:"Fonte HIV+ confirmada com carga viral indetectável persistente >6 meses: PEP geralmente NÃO indicada (U=U). Mas avaliar caso a caso — confirmar a indetectabilidade na documentação, não na fala."},
{nivel:"info", txt:"Exposição sexual de risco (estupro, ruptura de preservativo com parceiro de status incerto, sexo desprotegido com PVHIV sem TARV/com carga viral): PEP elegível em ≤72h. Encaminhar SAE para PrEP após PEP se exposição recidivante."},
],}

);
