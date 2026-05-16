/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — DOENÇAS TROPICAIS BRASILEIRAS
   =========================================================== */

PATOLOGIAS.push(

{id:"malaria", sis:"infecto", grav:"alta",
nome:"Malária",
sin:["malária","Plasmodium","febre amazônica"],
def:"Infecção pelo Plasmodium (vivax mais comum BR-Norte; falciparum mais grave). Febre periódica + sintomas inespecíficos + procedência/passagem por área endêmica (Amazônia legal, Mata Atlântica residual). Notificação compulsória IMEDIATA.",

exames:[
"Gota espessa + esfregaço (gold standard) — repetir 6/6h × 3 se neg + suspeita",
"Teste rápido (RDT) — antígeno HRP-2 (P. falciparum) ou pLDH (todas espécies)",
"PCR (centros referência)",
"HMG (anemia, plaquetopenia frequente), função renal/hepática, glicemia, gaso",
"β-HCG (gestação altera conduta)",
"Procurar foco: malária 'importada' de fora da Amazônia em viajante",
],

rx:[
{etapa:"inicial", d:"NOTIFICAÇÃO IMEDIATA — SIVEP-Malária",do:"Compulsória <24h. Ficha do MS.",via:"—",o:"Notificar SEMPRE. Imediato (24h). Permite ação epidemiológica."},
{etapa:"inicial", d:"Avaliação de gravidade",do:"Buscar critérios: alt consciência, convulsão, ↓consc, icterícia, edema, oligúria, sangramento, choque, hiperparasitemia (>2% falciparum)",via:"—",o:"Malária GRAVE = falciparum + qualquer critério. Internação obrigatória + ARTESUNATO IV."},

{etapa:"atb", d:"P. VIVAX/OVALE (não-grave)",do:"Cloroquina 25 mg/kg total VO em 3 dias (10+7,5+7,5 mg/kg) + PRIMAQUINA 0,5 mg/kg/d × 7 dias",via:"VO",o:"Primaquina mata HIPNOZOÍTOS hepáticos (previne recaída). NUNCA em gestante (teratogênica) ou G6PD deficiente (hemólise). Cloroquina segura na gestação."},
{etapa:"atb", d:"P. FALCIPARUM não-grave",do:"Arteméter-Lumefantrina (Coartem) 4 cp 12/12h × 3 dias VO + Primaquina 0,75 mg/kg dose única (gametocitocida)",via:"VO",o:"BR-padrão. Tomar com gordura para absorção. CI: 1º trimestre gestação (usar quinina + clindamicina)."},
{etapa:"atb", d:"P. FALCIPARUM GRAVE",do:"Artesunato IV 2,4 mg/kg na admissão + 12h + 24h, depois 1×/dia até VO",via:"IV",o:"PADRÃO-OURO em grave (AQUAMAT trial — ↓mortalidade vs quinina). Reservar 50% da dose pediátrica em <20 kg. Após melhora: completar com ACT VO 3 dias."},
{etapa:"atb", d:"Alternativa grave — Quinina",do:"10 mg/kg IV em SG 5% 250 mL em 4h, depois 10 mg/kg 8/8h + Clindamicina 10 mg/kg 8/8h",via:"IV",o:"Se artesunato indisponível. Monitorar: hipoglicemia (insulina-mediada — repor SG), cardiotoxicidade (QT, alargar QRS)."},
{etapa:"atb", d:"GESTANTE 1º trimestre — falciparum",do:"Quinina + Clindamicina",via:"IV/VO",o:"Após 1º trim: artemisinina pode ser usada. Cloroquina segura em vivax."},

{etapa:"escala", d:"GRAVE — Suporte",do:"UTI, monitorização, hidratação cautelosa",via:"IV",o:"NÃO ressuscitar volemicamente em excesso (FEAST trial — bolus altera prognóstico). Manter euvolemia. Insulina para hiperG."},
{etapa:"escala", d:"GRAVE — Transfusão",do:"CH se Hb<7 (Hb<5 em criança)",via:"IV",o:"Hemólise é comum. ↑Bili indireta. Considerar exsanguineotransfusão se parasitemia >10% (controverso)."},
{etapa:"escala", d:"Diálise se IRA",do:"Hemodiálise indicação clássica",via:"—",o:"Mais comum em falciparum grave. Pode ser transitória."},

{etapa:"adj", d:"Antipirético",do:"Dipirona 1-2g IV 6/6h ou paracetamol",via:"IV/VO",o:"Conforto + reduz convulsão febril em criança. NÃO usar AAS (Reye)."},
],

alertas:[
{t:"crit",x:"GOTA ESPESSA NEGATIVA NÃO EXCLUI — pode haver baixa parasitemia. Repetir 6/6h × 3 antes de descartar. Iniciar empírico se grave + alta suspeita."},
{t:"crit",x:"FALCIPARUM grave = mortalidade 20-30% sem tratamento adequado. Artesunato IV IMEDIATO. Não esperar evolução."},
{t:"crit",x:"MALÁRIA NA GESTANTE: mais grave (hipoglicemia, anemia, edema pulmonar). Falciparum gestação = grave por definição. ARTESUNATO seguro >1º trim."},
{t:"warn",x:"PRIMAQUINA: NUNCA gestante (teratogênica), NUNCA G6PD (hemólise grave). Testar G6PD ou pedir antes de prescrever."},
{t:"info",x:"NOTIFICAÇÃO: SIVEP-Malária (Amazônia) ou SINAN (fora). Importação de área endêmica = investigação obrigatória."},
],

fisio:"Plasmodium tem 2 ciclos: hepático (esporozoítos → merozoítos, ~7 dias) e eritrocítico (parasitose das hemácias → ruptura cíclica → FEBRE). Ciclo: 48h (P. vivax/ovale/falciparum) ou 72h (P. malariae). P. vivax/ovale têm HIPNOZOÍTOS hepáticos (causa recaída meses-anos). P. falciparum não tem hipnozoíto MAS é o mais grave (adesão endotelial → microcirculação ↓ → cérebro, rim, pulmão).",

mec:[
{d:"Cloroquina",x:"Inibe polimerização do heme (toxinha para o parasita). Resistência GENERALIZADA no falciparum — não usar mais para falciparum."},
{d:"Artemisinina/Artesunato",x:"Ponte endoperóxida — gera radicais livres que destroem proteínas do parasita. Ativo em todos os estágios sanguíneos. Ação rápida."},
{d:"Primaquina",x:"Único antimalárico que mata HIPNOZOÍTOS HEPÁTICOS (vivax/ovale). Hemolítico em G6PD. Teratogênico."},
],

diretriz:"MS Brasil — Guia para Profissionais de Saúde sobre Malária 2024. WHO Guidelines for Malaria 2024.",
fluxo:null,
calcs:[],
},

{id:"leptospirose", sis:"infecto", grav:"alta",
nome:"Leptospirose",
sin:["leptospirose","doença de Weil","febre dos arrozais","febre dos pântanos"],
def:"Zoonose por Leptospira spp. (espiroquetal). Contato com água/lama/solo contaminado por URINA DE RATO. Quadros: leve (febre + mialgia em panturrilhas + cefaleia) → grave (Síndrome de Weil: icterícia + IRA + hemorragia pulmonar). Pós-enchente é cenário clássico. Notificação compulsória.",

exames:[
"HMG (leucocitose com desvio, plaquetopenia importante)",
"Função renal (IRA dialítica comum — frequente hipocalemia)",
"Função hepática (icterícia mista — bili direta e indireta altas; TGO/TGP geralmente <500)",
"CK (mialgia → rabdomiólise)",
"Urinálise (proteinúria, leucocitúria estéril, hematúria)",
"Gaso, eletrólitos",
"Sorologia ELISA IgM (a partir do 7º dia) — confirmatória microaglutinação MAT",
"Hemocultura nos 1ºs 7 dias (cultura difícil)",
"RX tórax — hemorragia alveolar bilateral (Síndrome de Hemorragia Pulmonar)",
"ECG — miocardite frequente",
],

rx:[
{etapa:"inicial", d:"NOTIFICAÇÃO COMPULSÓRIA — SINAN",do:"Imediata em qualquer suspeita",via:"—",o:"Investigação epidemiológica importante (surto, fonte)."},
{etapa:"inicial", d:"Hidratação cuidadosa",do:"SF 0,9% guiado por volemia",via:"IV",o:"Frequente desidratação (febre + mialgia). MAS cuidado com edema pulmonar (hemorragia alveolar)."},

{etapa:"atb", d:"LEVE — Doxiciclina",do:"100 mg VO 12/12h × 7 dias",via:"VO",o:"Apenas em adultos não-grávidos. Iniciar precocemente (<5 dias) reduz duração."},
{etapa:"atb", d:"LEVE — Amoxicilina",do:"500 mg VO 8/8h × 7 dias",via:"VO",o:"Gestante, criança. Alternativa segura."},
{etapa:"atb", d:"MODERADA/GRAVE — Ceftriaxona",do:"1-2 g IV/d × 7 dias",via:"IV",o:"PADRÃO em internação. Cobertura adicional. Step-down VO em melhora."},
{etapa:"atb", d:"GRAVE — Penicilina G cristalina",do:"6-12 milhões UI/d IV em doses divididas × 7 dias",via:"IV",o:"Clássica. ATENÇÃO: reação de Jarisch-Herxheimer (piora transitória 2-6h após 1ª dose) — sintomática, NÃO suspender."},

{etapa:"escala", d:"GRAVE — UTI + suporte multissistêmico",do:"Hemodiálise, VM, transfusão CH/plaquetas",via:"—",o:"Mortalidade 20-30% sem suporte adequado. Hemorragia pulmonar tem mortalidade 50-70%."},
{etapa:"escala", d:"Hemorragia pulmonar — Suporte ventilatório protetor",do:"VM com PEEP, considerar VNI inicial",via:"VM",o:"NÃO recomendado: corticoide alta dose (controverso, sem benefício claro). Suporte intensivo."},
{etapa:"escala", d:"Hemodiálise",do:"Precoce em IRA oligúrica + hipocalemia",via:"—",o:"NÃO esperar uremia clássica — diálise PRECOCE em leptospirose grave reduz mortalidade."},

{etapa:"adj", d:"Reposição eletrolítica",do:"K +++, Mg",via:"IV",o:"Hipocalemia é REGRA (perda tubular). Repor agressivamente."},
{etapa:"adj", d:"Transfusão",do:"CH, plaquetas se sangramento",via:"IV",o:"Plaquetopenia + coagulopatia comuns. Transfundir se sangramento ativo."},
],

alertas:[
{t:"crit",x:"SÍNDROME DE HEMORRAGIA PULMONAR (SHP) — mortalidade 50-70%. Dispneia + hemoptise + infiltrados bilaterais. IOT precoce, VM protetora, UTI."},
{t:"crit",x:"HISTÓRIA EPIDEMIOLÓGICA é a chave: exposição a água/lama (enchente, esgoto), trabalhador rural/lixeiro/açougueiro/militar, contato com rato/cão."},
{t:"warn",x:"Diferencial: dengue, hantavirose, febre amarela, hepatite viral, malária. TODOS podem dar quadro inicial similar."},
{t:"warn",x:"REAÇÃO DE JARISCH-HERXHEIMER após penicilina: febre + calafrio + hipotensão 2-6h pós — MANTER ATB, suporte sintomático."},
{t:"info",x:"DOR EM PANTURRILHAS desproporcional + sufusões oculares = pistas clássicas."},
],

fisio:"Leptospira spp. (espiroqueta) — reservatório: ratos (urina). Penetra mucosas/pele lesada → bacteremia (fase septicêmica 1-7 dias) → fase imune (sintomas leves) ou progressão → vasculite generalizada + lesão endotelial → falência multissistêmica. ÓRGÃOS-ALVO: rim (NTA + nefrite intersticial), fígado (colestase + dano hepatocelular), pulmão (hemorragia alveolar), coração (miocardite), musculatura (rabdomiólise).",

mec:[
{d:"Doxiciclina/Amoxicilina/Penicilina",x:"Inibidores de parede ou síntese proteica — leptospira mantém sensibilidade. Iniciar precoce (<5 dias) reduz dia de doença em 25%."},
],

diretriz:"MS Brasil — Guia de Vigilância em Saúde 2024. WHO Leptospirosis 2003.",
fluxo:null,
calcs:[],
},

{id:"febre-amarela", sis:"infecto", grav:"alta",
nome:"Febre Amarela",
sin:["febre amarela","FA","yellow fever"],
def:"Arbovirose causada pelo vírus da febre amarela (Flavivirus). Forma silvestre (BR — macacos + Aedes/Haemagogus) vs urbana (Aedes aegypti — erradicada no BR desde 1942). Notificação compulsória IMEDIATA.",

exames:[
"HMG (leucopenia com linfocitose relativa)",
"Função hepática (AST > ALT > 1000, sinal Faget=bradicardia c/ febre alta)",
"Função renal (IRA em casos graves)",
"Coagulograma (CIVD)",
"Bilirrubinas (icterícia tardia)",
"PCR vírus (1ºs 5 dias) ou sorologia IgM (>5 dias)",
"Diferencial: leptospirose, malária, dengue, hepatite viral",
],

rx:[
{etapa:"inicial", d:"NOTIFICAÇÃO IMEDIATA — SINAN",do:"Compulsória em <24h",via:"—",o:"Suspeita gera ação epidemiológica (vacinação, vigilância)."},
{etapa:"inicial", d:"Suporte",do:"Hidratação cautelosa, monitorização hepática/renal",via:"IV",o:"NÃO HÁ ANTIVIRAL ESPECÍFICO."},

{etapa:"escala", d:"GRAVE — UTI + suporte multissistêmico",do:"VM, hemodiálise, hemoderivados",via:"—",o:"Mortalidade da forma grave: 20-50%."},
{etapa:"escala", d:"Coagulopatia",do:"PFC + plaquetas + vit K",via:"IV",o:"Sangramento (hematêmese, melena) é típico em fase intoxicação. Transfusão guiada."},
{etapa:"escala", d:"Transplante hepático",do:"Critérios King's College em centro referência",via:"Cirúrgico",o:"Considerar em fulminante."},

{etapa:"adj", d:"Antipiréticos",do:"Dipirona, paracetamol",via:"IV/VO",o:"NÃO AAS, NÃO AINEs (sangramento, hepatotoxicidade)."},
{etapa:"adj", d:"VACINAÇÃO pós-alta (não-imunes)",do:"FA fracionada/integral SC",via:"SC",o:"PREVENÇÃO. Recomenda-se reforço a cada 10 anos em áreas endêmicas (BR-MS reverteu para dose única em 2017 — controverso)."},
],

alertas:[
{t:"crit",x:"FORMA GRAVE: icterícia + hemorragias + IRA + acidose + ↓consciência. Mortalidade 20-50%. UTI obrigatória."},
{t:"crit",x:"SINAL DE FAGET: bradicardia + febre alta = sugere FA (diferencial com sepse comum)."},
{t:"warn",x:"DIFERENCIAL: leptospirose, malária, hepatite viral fulminante, sepse, dengue grave."},
{t:"warn",x:"VACINA é PREVENÇÃO. Em surto/área endêmica: vacinação massiva. Contraindicações: <6 meses, gestante, imunossuprimido grave, alergia ovo."},
],

fisio:"Vírus replica em linfonodos regionais → viremia → fígado (alvo principal — necrose hepatocelular massiva), rim (NTA), miocárdio, SNC. 3 fases: (1) Infecção (3 dias: febre, mialgia, cefaleia), (2) Remissão (poucas horas — engana), (3) INTOXICAÇÃO (15% — icterícia + hemorragias + IRA + choque + coma).",

mec:[],
diretriz:"MS — Guia de Vigilância Febre Amarela 2024. WHO Yellow Fever 2024.",
fluxo:null,
calcs:[],
},

{id:"leishmaniose-visc", sis:"infecto", grav:"alta",
nome:"Leishmaniose Visceral (Calazar)",
sin:["leishmaniose visceral","calazar","Leishmania","kala-azar"],
def:"Infecção sistêmica por Leishmania chagasi/infantum, transmitida pelo mosquito-palha (Lutzomyia longipalpis). Pancitopenia + hepatoesplenomegalia + febre + emagrecimento. Endêmica no Nordeste e periferias urbanas em expansão. Notificação compulsória.",

exames:[
"HMG (PANCITOPENIA — tríade hipercaracterística: anemia + leucopenia + plaquetopenia)",
"VHS elevadíssima",
"Hipergamaglobulinemia + hipoalbuminemia (relação invertida)",
"Função renal/hepática (LDH, AST normais a leves)",
"Sorologia (RIFI, ELISA, teste rápido rK39)",
"Pesquisa direta: aspirado de medula óssea (gold standard) ou esplênico (raro)",
"PCR (centros referência)",
"HIV (coinfecção comum, agrava prognóstico)",
],

rx:[
{etapa:"inicial", d:"NOTIFICAÇÃO COMPULSÓRIA — SINAN",do:"Imediata",via:"—",o:"Investigação caso + ações de bloqueio (controle vetor, exame contactantes)."},
{etapa:"inicial", d:"Suporte",do:"Transfusão CH se Hb <7, plaquetas se sangramento, nutrição",via:"IV",o:"Internação obrigatória em casos graves."},

{etapa:"atb", d:"1ª LINHA — Anfotericina B LIPOSSOMAL",do:"3 mg/kg/d IV × 7 dias (total 21 mg/kg)",via:"IV",o:"PADRÃO no BR — alta eficácia, menor toxicidade. ↓Mortalidade vs Glucantime. Disponível SUS."},
{etapa:"atb", d:"ALTERNATIVA — Antimoniato meglumina (Glucantime)",do:"20 mg Sb⁵⁺/kg/d IV/IM × 20-30 dias (máx 3 ampolas/d)",via:"IV/IM",o:"Tradicional, mais tóxico (cardiotoxicidade, pancreatite, nefro/hepatotoxicidade). ECG seriado obrigatório. CI: gestante, criança <1a, cardiopata, insuficiência hepática/renal."},
{etapa:"atb", d:"Anfotericina B convencional",do:"1 mg/kg/d IV × 14 dias",via:"IV",o:"Alternativa em centros sem lipossomal. MUITO mais tóxica (calafrio, IRA, hipocalemia)."},
{etapa:"atb", d:"HIV+ — Lipossomal",do:"3 mg/kg/d × 10 dias (total 40 mg/kg)",via:"IV",o:"Doses maiores. Pode recidivar — profilaxia secundária mensal indicada."},

{etapa:"escala", d:"SUPORTE GERAL",do:"Hidratação, nutrição, ATB se infecção secundária",via:"—",o:"Maioria dos óbitos: infecção bacteriana 2ª (pneumonia, ITU, sepse). Cobrir empiricamente em febre+pancitopenia."},

{etapa:"adj", d:"Reposição albumina/transfusão",do:"PFC, CH, plaquetas conforme",via:"IV",o:"Albumina baixa = edema, ascite. Coagulopatia possível."},
{etapa:"adj", d:"Acompanhamento pós-tratamento",do:"6-12 meses, atenção a recidivas",via:"—",o:"Cura geralmente em 6-12 meses. Recidiva pode ocorrer, especialmente HIV+."},
],

alertas:[
{t:"crit",x:"MORTALIDADE: 5-10% mesmo tratado, >90% sem tratamento. Pancitopenia + infecção secundária = causa #1 óbito. Cobertura ATB empírica liberal."},
{t:"crit",x:"GLUCANTIME tem cardiotoxicidade — ECG basal + seriado. QT longo, T inversão. Suspender se alteração."},
{t:"warn",x:"COINFECÇÃO HIV — sempre testar. Calazar HIV+: mais recidivas, menor cura, maior mortalidade. Profilaxia secundária mensal."},
{t:"info",x:"DIFERENCIAL: leucemia, linfoma, brucelose, esquistossomose hepatoesplênica, tuberculose miliar, HIV avançado."},
],

fisio:"Leishmania chagasi → mosquito flebotomíneo → fagocitada por macrófagos → vive intracelularmente em forma amastigota → proliferação em sistema retículo-endotelial (medula, baço, fígado) → infiltração + supressão hematopoiética + ativação imune crônica (hipergamaglobulinemia) → caquexia + imunossupressão progressiva.",

mec:[
{d:"Anfotericina B (lipossomal)",x:"Liga-se a ergosterol da membrana do parasita → poros → lise. Lipossomal direciona ao SRE (alto carregamento de parasitas)."},
{d:"Glucantime (antimoniato)",x:"Inibe metabolismo energético de Leishmania (glicólise, oxidação ácidos graxos). Não totalmente elucidado. Cardiotóxico."},
],

diretriz:"MS — Manual de Vigilância e Controle da Leishmaniose Visceral 2014. WHO Leishmaniases 2010.",
fluxo:null,
calcs:[],
},

{id:"chagas-aguda", sis:"infecto", grav:"alta",
nome:"Doença de Chagas Aguda",
sin:["Chagas","tripanossomíase americana","Trypanosoma cruzi"],
def:"Infecção aguda por T. cruzi. Transmissão BR atual: VIA ORAL (açaí, caldo de cana contaminados — surtos), vetorial (barbeiro — raro), vertical, transfusional. Sintomas: febre + edema palpebral unilateral (Sinal de Romaña) OU chagoma de inoculação + miocardite. Notificação compulsória.",

exames:[
"HMG (linfomonocitose)",
"Pesquisa direta de parasita: sangue periférico (gota espessa, esfregaço), creme leucocitário — 1ª escolha em aguda",
"Xenodiagnóstico ou hemocultura (positivos em aguda)",
"Sorologia IgM (precoce) + IgG (tardia)",
"PCR (centros referência)",
"ECG (alterações repolarização, BAV, distúrbios de condução)",
"Ecocardiograma (miocardite — disfunção ventricular)",
"Função renal/hepática",
],

rx:[
{etapa:"inicial", d:"NOTIFICAÇÃO COMPULSÓRIA — SINAN",do:"Imediata",via:"—",o:"Investigação fonte (transmissão oral por surto requer investigação intensiva)."},
{etapa:"inicial", d:"Suporte",do:"Repouso, hidratação, monitorização cardíaca",via:"—",o:"Em miocardite: UTI."},

{etapa:"atb", d:"1ª LINHA — Benznidazol",do:"5-7 mg/kg/d VO em 2 doses × 60 dias",via:"VO",o:"PADRÃO. Disponível SUS. CI: gestante. Efeitos adversos: rash (frequente), neuropatia periférica, leucopenia, hepatite."},
{etapa:"atb", d:"ALTERNATIVA — Nifurtimox",do:"8-10 mg/kg/d VO em 3-4 doses × 60-90 dias",via:"VO",o:"Disponível MS (fora SUS comum). Mais efeitos adversos GI."},
{etapa:"atb", d:"GESTANTE",do:"Suspender tratamento até pós-parto + amamentação",via:"—",o:"Benznidazol/nifurtimox contraindicados na gestação. Newborn deve ser investigado e tratado se infectado (sucesso >90% em RN)."},

{etapa:"escala", d:"MIOCARDITE AGUDA — Suporte",do:"Tratamento de IC, antiarrítmico, marcapasso se BAV",via:"—",o:"Causa #1 de óbito agudo. Hospitalização. Diurético + IECA + β-bloq conforme."},
{etapa:"escala", d:"MENINGOENCEFALITE — Anticonvulsivante",do:"Fenitoína/levetiracetam + tratamento empírico",via:"IV",o:"Mais comum em imunossuprimidos. Suporte UTI."},

{etapa:"adj", d:"Hemograma seriado",do:"Cada 15 dias durante tratamento",via:"—",o:"Benznidazol pode causar leucopenia/agranulocitose. Suspender se neutrófilos <1500."},
{etapa:"adj", d:"Acompanhamento",do:"Sorologia anual (cura comprovada por seroconversão)",via:"—",o:"Pode levar 2-3 anos para negativar. PCR + sorologia."},
],

alertas:[
{t:"crit",x:"FORMA AGUDA tem 5-10% mortalidade por MIOCARDITE ou MENINGOENCEFALITE. Tratamento PRECOCE (<12 sem) — cura >70%."},
{t:"crit",x:"TRANSMISSÃO ORAL (açaí, caldo de cana, sopa de milho): SURTOS familiares/comunitários. Investigar contactantes."},
{t:"warn",x:"BENZNIDAZOL é tóxico em 20-30%: rash (manejar com anti-H1; suspender se Stevens-Johnson), neuropatia periférica (irreversível parcial), leucopenia."},
{t:"info",x:"Diferencial: dengue, malária, viroses inespecíficas, hepatite viral aguda. Romaña + epidemiologia → Chagas."},
],

fisio:"T. cruzi entra por mucosa/pele lesada → tripomastigotas migram para coração + fígado + baço → diferenciam em amastigotas intracelulares → proliferam → ruptura celular → fase aguda (parasitemia alta, sintomas). Maioria evolui para fase crônica indeterminada (assintomática). 30% desenvolvem cardiopatia chagásica crônica (10-30 anos) — IC, arritmia, morte súbita. 10% megacólon/megaesôfago.",

mec:[
{d:"Benznidazol",x:"Pró-droga ativada por nitrorredutases do parasita → radicais livres → dano DNA tripanossomal. Seletividade limitada (toxicidade humana)."},
],

diretriz:"MS — Protocolo Clínico Doença de Chagas 2019. PCDT MS. WHO Chagas Disease 2024.",
fluxo:null,
calcs:[],
},

{id:"hanseniase-reacao", sis:"infecto", grav:"media",
nome:"Hanseníase em Reação",
sin:["hanseníase","lepra","reação reversa","eritema nodoso hansênico"],
def:"Episódios inflamatórios agudos em paciente com hanseníase, com ou sem tratamento. Reação TIPO 1 (reversa, mediada por células — exacerba lesões existentes) ou TIPO 2 (eritema nodoso hansênico, imunocomplexos — múltiplos nódulos + sintomas sistêmicos). Notificação compulsória.",

exames:[
"Avaliação dermatológica + neurológica completa (déficit motor/sensitivo periférico)",
"Baciloscopia (linfa de lóbulo da orelha, cotovelos, lesão)",
"HMG, função renal/hepática (pré-uso medicamentos)",
"Pesquisa M. leprae em fragmento",
"Histopatologia (granuloma)",
],

rx:[
{etapa:"inicial", d:"NOTIFICAÇÃO COMPULSÓRIA",do:"Hanseníase: SINAN",via:"—",o:"Caso novo + casos em reação. Acompanhamento sob notificação."},
{etapa:"inicial", d:"MANTER PQT (poliquimioterapia)",do:"Não suspender o tratamento anti-hanseníase em reação",via:"VO",o:"Reação NÃO é falha do tratamento — é resposta imune. Manter PQT-MB (rifampicina + dapsona + clofazimina) ou PQT-PB conforme classificação."},

{etapa:"escala", d:"REAÇÃO TIPO 1 — Prednisona",do:"1-1,5 mg/kg/d VO, desmame lento 6-12 meses",via:"VO",o:"PADRÃO. Reduz inflamação celular. Iniciar dose alta, desmame muito lento (dependência fenômeno-de-rebote). Monitorar diabetes, HAS, infecção."},
{etapa:"escala", d:"REAÇÃO TIPO 2 leve — Talidomida",do:"100-400 mg/d VO, desmame conforme",via:"VO",o:"TRATAMENTO DE ESCOLHA TIPO 2 — anti-inflamatório imunomodulador. CRÍTICO: NUNCA em gestante (teratogenicidade — focomelia). Teste β-HCG mensal. Cadastro obrigatório no programa de talidomida."},
{etapa:"escala", d:"REAÇÃO TIPO 2 grave — Talidomida + Prednisona",do:"Talidomida 100-300 mg/d + prednisona 0,5-1 mg/kg/d",via:"VO",o:"Casos graves com neurite, irite, orquite, glomerulonefrite."},
{etapa:"escala", d:"GESTANTE — Prednisona",do:"1 mg/kg/d × tempo necessário",via:"VO",o:"NÃO talidomida (teratogênica)."},

{etapa:"escala", d:"NEURITE AGUDA",do:"Prednisona dose máxima + imobilização membro + corticoide local se necessário",via:"VO",o:"Risco de dano neural permanente. Avaliar motor/sensitivo seriado."},
{etapa:"escala", d:"IRITE / IRIDOCICLITE",do:"Colírio corticoide + midriático + oftalmo",via:"Tópico",o:"Risco de glaucoma + cegueira. Avaliação oftalmológica urgente."},

{etapa:"adj", d:"Tratamento sintomático",do:"AINE (cuidado renal), analgesia",via:"VO",o:"Para conforto. NÃO trata reação em si."},
{etapa:"adj", d:"Acompanhamento de contactantes",do:"Vacina BCG + exame anual",via:"—",o:"Familiares devem ser examinados e BCG ofertada (reforço se já vacinado)."},
],

alertas:[
{t:"crit",x:"NEURITE em reação = DANO PERMANENTE possível em horas-dias. Prednisona dose máxima IMEDIATA + acompanhamento neurológico seriado."},
{t:"crit",x:"TALIDOMIDA é TERATOGÊNICA — focomelia. PROIBIDA em gestante. Mulher fértil → contracepção dupla + β-HCG mensal. Cadastro obrigatório."},
{t:"warn",x:"PREDNISONA prolongada (6-12m): efeitos adversos (DM, HAS, osteoporose, infecção, catarata). Monitorar."},
{t:"info",x:"REAÇÃO pode ocorrer ANTES, DURANTE ou APÓS o tratamento anti-hanseníase. Não significa falha. Manter PQT."},
],

fisio:"Reação Tipo 1 (Reversa): hipersensibilidade tipo IV (celular) — exacerba lesões existentes, edema, dor nas placas. Pode causar neurite por inflamação dos nervos periféricos. Reação Tipo 2 (Eritema Nodoso Hansênico): imunocomplexos circulantes (tipo III) — múltiplos nódulos dolorosos + sintomas sistêmicos (febre, mal-estar) + neurite + irite + orquite + nefrite. Mais comum em formas multibacilares.",

mec:[
{d:"Talidomida",x:"Imunomodulador — inibe TNF-α, modula citocinas. Mecanismo da teratogenicidade: liga-se a cereblon, altera ubiquitinação → embriopatia (membros)."},
{d:"Prednisona",x:"Anti-inflamatório amplo via receptor glicocorticoide."},
],

diretriz:"MS — Guia para Vigilância, Atenção e Eliminação da Hanseníase 2022. WHO Leprosy 2024.",
fluxo:null,
calcs:[],
},

);
