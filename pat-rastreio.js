/* ===========================================================
   VOVÔMINIC DOUTÔ — pat/rastreio.js
   RASTREAMENTO ONCOLÓGICO — Sociedades brasileiras + Ministério da Saúde
   Fontes principais: INCA, MS, SBM, FEBRASGO, SBCP, SBCO, SBU, SBPT/SBCT/CBR,
                      SBOC, AASLD, USPSTF (comparação internacional)
   Atualizado conforme diretrizes vigentes em mai/2026
   =========================================================== */

PATOLOGIAS.push(

{
id:"rastreio-mama", contexto:["ubs"], nome:"Rastreio Câncer de Mama", sis:"rastreio", grav:"baixa",
cid:"Z12.3", ciap:"X37",
sin:["rastreio mama","mamografia","screening mama","detecção precoce mama","CA mama prevenção"],
def:"Detecção precoce do câncer de mama em mulheres assintomáticas. Estratégia organizada baseada em mamografia, com novas diretrizes do MS (setembro/2025) que ampliaram o acesso para mulheres 40-49 anos sob demanda e estenderam o rastreamento ativo até 74 anos.",
intro:"Câncer de mama é o tipo mais incidente em mulheres no Brasil (~73.000 casos/ano) e a principal causa de morte oncológica feminina. ~23% dos casos ocorrem em mulheres 40-49 anos. Detecção precoce reduz mortalidade significativamente. Em set/2025 o MS revisou as diretrizes — alinhando-se mais com SBM/CBR/FEBRASGO que defendiam há anos o rastreio ampliado.",
apresentacao:"Mulher assintomática para rastreio populacional, OU mulher com queixa específica (nódulo palpável, descarga papilar suspeita, retração de pele/papila, alteração cutânea, dor localizada persistente) para investigação diagnóstica — não é rastreio. Diferenciar bem rastreio (assintomática) de diagnóstico precoce (com sintoma).",
sintomas:[
"Idade da mulher",
"Antecedente familiar 1º grau (mãe, irmã, filha) — especialmente <50a ou bilateral",
"Mutação genética conhecida (BRCA1/2, TP53, PTEN, CDH1, PALB2)",
"Síndromes hereditárias na família (Li-Fraumeni, Cowden)",
"História pessoal de CA mama, CA ovário, biópsia com lesão de alto risco (CDIS, hiperplasia atípica)",
"Densidade mamária prévia (mamas densas tipos C/D = mais difíceis de avaliar e maior risco)",
"Exposição à radiação torácica prévia (linfoma Hodgkin, etc.) — risco alto",
"Uso de terapia hormonal pós-menopausa prolongada",
"Idade da menarca <12a, menopausa >55a, nuliparidade, 1ª gestação >30a",
"Obesidade pós-menopausa, etilismo, sedentarismo",
"Tabagismo (fator menor)",
"Sintomas: NÓDULO palpável (qualquer tamanho), retração de pele/papila, descarga papilar sanguinolenta unilateral, alteração cutânea (peau d'orange), eritema/calor persistente, linfonodos axilares palpáveis, dor persistente focal — TODOS são para investigação, NÃO para rastreio"
],
fisio:"Câncer de mama: ~70% expressa receptores hormonais (RE/RP), 15-20% HER2+, ~15% triplo-negativo. Patogenia multifatorial: exposição cumulativa a estrógeno, dano genético acumulado, ambiente. ~5-10% têm componente hereditário forte (BRCA1/2 são os mais conhecidos). Mama densa: tecido fibroglandular denso reduz sensibilidade da mamografia E é fator de risco independente.",
profilaxia:"PRIMÁRIA: atividade física regular, manter peso adequado, reduzir álcool (<1 dose/dia), evitar terapia hormonal pós-menopausa prolongada (se não indicada), amamentar quando possível. Em alto risco genético: discussão multidisciplinar sobre mastectomia profilática, ooforectomia, tamoxifeno/raloxifeno em prevenção primária. SECUNDÁRIA = rastreio (este protocolo).",
freire:"Outubro Rosa virou cultura — bom para conscientização, mas paciente chega achando que mamografia é 'dever cívico anual desde os 30'. Diferenciar: rastreio populacional ≠ exame por demanda ≠ investigação. Trabalhar decisão compartilhada: 'a mamografia tem benefícios reais e tem efeitos negativos (falso-positivo, ansiedade, biópsia desnecessária, sobrediagnóstico). Vamos ver o que faz sentido pra senhora'. Validar medos sem amplificar. NÃO subestimar: paciente jovem com nódulo palpável merece avaliação imediata, mesmo fora da faixa de rastreio. Não passar 'paranoia mamária' que se infiltra na mídia, mas também não minimizar sintoma. METÁFORA: 'mamografia é uma foto — boa para ver o invisível, mas não substitui a sua mão na sua mama'.",
sus_tx:`PROTOCOLO ATUALIZADO — Rastreio CA mama no SUS:

A) DIRETRIZ MS atualizada (setembro/2025) — mudança histórica:

  MULHERES DE 40 A 49 ANOS — Sob demanda + decisão compartilhada
  • Mamografia disponível no SUS mesmo sem sinais/sintomas
  • Requer interesse da paciente + indicação do profissional após DECISÃO COMPARTILHADA
  • Orientar sobre benefícios (detecção precoce, redução de mortalidade ~17-20%) E desvantagens (falso-positivo até 30% na década, ansiedade, biópsia desnecessária em ~5%, sobrediagnóstico)
  • Periodicidade individualizada (anual ou bienal, conforme decisão)
  
  MULHERES DE 50 A 74 ANOS — Rastreamento ativo bienal
  • Mamografia a cada 2 anos
  • Faixa etária ampliada de 50-69 (antes) para 50-74 (set/2025)
  • Concentra ~60% dos casos
  • Convocação ativa pela UBS é a estratégia mais eficaz
  
  MULHERES ACIMA DE 74 ANOS — Individualizada
  • Considerar comorbidades, expectativa de vida (>5-7 anos?), preferência
  • Em frágil/expectativa limitada: P4 — provavelmente não indicar (sobrediagnóstico de CA indolente)

B) DIRETRIZ SBM/CBR/FEBRASGO (2023, ainda vigente — diverge do MS):
  • Mulher 40-74a risco habitual: MAMOGRAFIA ANUAL
  • >75a: rastrear anual se expectativa de vida >7 anos
  • Argumento: 37-42% dos casos ocorrem em <49 anos no Brasil
  • Recomendação não vinculante para SUS, mas relevante quando paciente tem acesso/preferência

C) ALTO RISCO — protocolo diferenciado [SBM 2023]:
  • História familiar forte ou mutação BRCA conhecida
    - Iniciar 10 anos antes do caso mais jovem na família, ou aos 30a
    - Mamografia anual + RM anual (alternadas, intervalo 6 meses)
  • BRCA1/TP53: RM + mamografia partir 25-30a
  • BRCA2/outras mutações: a partir 30a
  • Radioterapia torácica prévia (linfoma Hodgkin etc): partir 8 anos pós-RT ou 25a
  • Encaminhar oncogenética / mastologia para protocolo individualizado

D) RESULTADO DA MAMOGRAFIA — categorias BI-RADS [ACR]:
  • BI-RADS 0: imagem adicional necessária (incompleto)
  • BI-RADS 1: negativo — rotina
  • BI-RADS 2: achado benigno — rotina
  • BI-RADS 3: provavelmente benigno (<2% malignidade) — controle 6m
  • BI-RADS 4 (a/b/c): suspeito — biópsia
  • BI-RADS 5: altamente sugestivo de malignidade (>95%) — biópsia
  • BI-RADS 6: malignidade confirmada — em tratamento

E) MAMAS DENSAS (tipos C e D ACR):
  • Fator de risco independente + reduz sensibilidade mamografia
  • USG mamária complementar pode ser considerada (decisão individualizada)
  • Em alto risco + mamas densas: considerar RM

F) MAMOGRAFIA OPORTUNÍSTICA NO SUS:
  • Solicitar via Sisreg do município
  • Resultado vem via SISCAN
  • Convocação ativa por ACS/enfermagem aumenta cobertura
  • Manual MS — Guia Prático de Rastreamento de Mama e Colo do Útero na APS (out/2025)

G) DIAGNÓSTICO PRECOCE — sinais de alerta (NÃO é rastreio, é investigação imediata):
  • Nódulo palpável (qualquer idade)
  • Retração da pele ou da papila
  • Descarga papilar sanguinolenta unilateral
  • Alteração cutânea: vermelhidão, espessamento (peau d'orange), úlcera
  • Linfonodos axilares palpáveis
  • Encaminhar mastologia conforme PCDT vigente. Lei 12.732/2012: tratamento em até 60 dias da confirmação.

H) AÇÕES E RESPONSÁVEIS:
  • Médico: avaliação do risco, decisão compartilhada, exame clínico das mamas
  • Enfermeira: orientação, convocação, coleta de dados, exame clínico
  • ACS: convocação ativa, busca de faltosas, acompanhamento territorial
  • Radiologista: laudo BI-RADS
  • Mastologista (referência): casos BI-RADS 4-5, alto risco, suspeita

I) AUTOEXAME E EXAME CLÍNICO DAS MAMAS:
  • Autoexame NÃO é recomendado isoladamente como método de rastreio (sem benefício comprovado em mortalidade [INCA])
  • Mas mulheres devem conhecer suas mamas e procurar serviço se notarem alteração ('autoconhecimento')
  • Exame clínico das mamas pelo médico/enfermeiro em toda consulta de rotina é boa prática (sem evidência forte, mas ajuda na vinculação)`,
padrao_ouro:"USPSTF (mai/2024): mamografia bienal 40-74 anos — recomendação B. SBM/CBR/FEBRASGO 2023: anual 40-74. MS 2025: 40-49 sob demanda + 50-74 bienal (alinhamento com Austrália, OPAS, IARC). Em alto risco genético: mamografia + RM com protocolos específicos por mutação. Tomossíntese (mamografia 3D) é gold-standard internacional emergente — disponibilidade limitada SUS.",
prog:"Rastreio adequado reduz mortalidade por CA mama em ~17-25% (metanálises). NNT em 10 anos varia ~1000-2000 (50-69a) — número maior em mulheres mais jovens (40-49a NNT ~2000). Detecção precoce: CA estágio 0-I tem >95% de sobrevida em 5 anos vs ~25% em estágio IV. Brasil ainda tem ~37% de diagnósticos em estágios III/IV — maior do que países desenvolvidos.",
acomp:"Rastreio bienal/anual conforme faixa. Pós-mamografia normal: continuar rotina. BI-RADS 3: controle 6m por 2 anos. BI-RADS 4-5: biópsia + encaminhamento. Mulheres tratadas: seguimento oncológico conforme protocolo. ACS pode reforçar adesão à convocação seguinte.",
p4:"⚠ SOBREDIAGNÓSTICO: ~10-20% dos cânceres detectados em rastreio são tumores indolentes que nunca causariam dano (especialmente CDIS — carcinoma ductal in situ). Resultam em tratamento (cirurgia, RT) com sequelas, sem benefício. ⚠ FALSO-POSITIVO: 5-10% por exame, cumulativo ~30% em 10 anos. Causa ansiedade, biópsia desnecessária. ⚠ RASTREAR ANTES DOS 40a sem fator de risco específico = sem benefício comprovado, mais danos que benefício. ⚠ Não realizar mamografia em assintomática <40a 'a pedido' sem decisão compartilhada cuidadosa. ⚠ AUTOEXAME 'obrigatório' mensal não tem evidência — pode até aumentar biópsia em paciente jovem sem benefício. Substituído por 'autoconhecimento' (conhecer as próprias mamas, procurar serviço se alteração). ⚠ Rastreio em idosa frágil >74a com expectativa de vida limitada: P4 — provavelmente não indicar. ⚠ NÃO confundir rastreio (assintomática) com investigação diagnóstica (com queixa). ⚠ USG mamária 'preventiva' sem indicação clara: sobreuso. Não tem papel como método primário de rastreio populacional. ⚠ Ressonância 'preventiva' fora alto risco específico: sem indicação e custo alto.",
calcs:[],
alertas:[
{t:"info",x:"<strong>Diretriz MS atualizada SET/2025:</strong> mamografia disponível 40-49a sob demanda + 50-74 bienal + decisão compartilhada."},
{t:"warn",x:"Mulher <40a com nódulo palpável: investigação imediata. Não 'esperar idade do rastreio'."},
{t:"crit",x:"Lei 12.732/2012: paciente com câncer confirmado tem direito a iniciar tratamento em ≤60 dias. Acompanhar fluxo."},
{t:"info",x:"Alto risco genético (BRCA, hist familiar forte): protocolo diferenciado com RM + mamografia. Encaminhar oncogenética."}
],
diretriz:"MS — Nota Técnica 626/2025-CGCAN/DECAN/SAES/MS (ampliação rastreio 40-74a). SBM/CBR/FEBRASGO — Diretrizes para o Rastreamento do Câncer de Mama no Brasil [Radiol Bras 2023]. INCA — Diretrizes para a Detecção Precoce do Câncer de Mama no Brasil. USPSTF Breast Cancer Screening 2024. Lei 12.732/2012. Manual MS — Guia Prático de Rastreamento Mama+Colo na APS 2025."
},

{
id:"rastreio-colo-utero", contexto:["ubs"], nome:"Rastreio Câncer de Colo do Útero", sis:"rastreio", grav:"baixa",
cid:"Z12.4", ciap:"X37",
sin:["rastreio colo do útero","HPV-DNA","papanicolau","citologia cervicovaginal","preventivo"],
def:"Detecção precoce do câncer de colo do útero por teste de DNA-HPV oncogênico (método primário desde a Portaria SAES/SECTICS 13/2025) com substituição gradual da citologia. Faixa-alvo: 25-64 anos. Periodicidade quinquenal se negativo. Diretriz brasileira aprovada em jul/2025 alinhada com OMS.",
intro:"Câncer de colo do útero é a única neoplasia com causa necessária identificada (HPV oncogênico persistente) — logo, ELIMINÁVEL como problema de saúde pública via vacinação + rastreio. ~17.000 casos/ano no Brasil. Maior incidência Norte/Nordeste. A diretriz brasileira mudou em 2025: o teste DNA-HPV oncogênico substitui gradualmente a citologia (Papanicolaou) como método primário. Citologia passa a ser teste reflexo.",
apresentacao:"Mulher cis, homem trans, pessoa não-binária ou intersexo com colo do útero, 25-64 anos, assintomática (rastreio populacional). NÃO se aplica a sintomáticas (sangramento pós-coito, sangramento intermenstrual, corrimento persistente, dor pélvica crônica, lesão visível) — esses requerem investigação diagnóstica, não rastreio.",
sintomas:[
"Idade (rastreio 25-64a)",
"Início da atividade sexual",
"Vacinação prévia contra HPV (não isenta de rastreio)",
"Imunossupressão (HIV+, transplantados, imunobiológicos) — protocolo diferenciado",
"História de HPV positivo / lesão prévia",
"Tabagismo (cofator)",
"Multiparidade, primeiro parto precoce, múltiplos parceiros (fatores secundários)",
"Sintomas (NÃO usar como rastreio se presentes — investigar): sangramento pós-coital, sangramento intermenstrual, corrimento persistente fétido, dor pélvica, ferida visível em colo durante exame especular"
],
fisio:"HPV oncogênico (alto risco): tipos 16, 18, 31, 33, 35, 39, 45, 51, 52, 56, 58, 59 (mais 68 prov, 66 poss). HPV 16 e 18 = ~70% dos cânceres cervicais globais. Infecção primária: pico nos primeiros anos pós-início da vida sexual. Maioria limpa em 1-2 anos. Infecção PERSISTENTE (>2 anos) → metaplasia → NIC1/2/3 → carcinoma microinvasivo → invasivo. Janela total: 10-20 anos — daí o sucesso do rastreio com intervalo longo.",
profilaxia:"PRIMÁRIA: Vacinação HPV no PNI — crianças/adolescentes 9-14 anos (ambos sexos), dose única desde 2024. Imunossuprimidos: 3 doses. Preservativo (proteção parcial — HPV pode estar em áreas não cobertas). Reduzir tabagismo. SECUNDÁRIA = este protocolo. TERCIÁRIA = tratamento de lesões pré-invasivas (CAF, conização).",
freire:"Exame ginecológico é território muito íntimo — paciente pode ter vergonha, medo, trauma prévio, falta de orientação. Acolher: 'vai ser tranquilo, qualquer momento que quiser parar, paramos'. Explicar O QUE é o teste (DNA-HPV é diferente do Papa antigo — 'antes a gente olhava as células, agora a gente olha o vírus que pode causar'). Atualizar paciente que fazia citologia anual: 'agora o exame é mais sensível, faz a cada 5 anos se negativo — não é menos cuidado, é mais ciência'. Atenção a mulheres trans, homens trans, pessoas não-binárias com colo: convidar pelo nome social, acolher. Mulher acima de 64a com 2 exames negativos prévios pode encerrar — explicar com tranquilidade, não 'abandonar' o cuidado. METÁFORA: 'o exame é como o farol no carro — não evita o problema, mas mostra onde ele pode estar antes de virar emergência'.",
sus_tx:`PROTOCOLO ATUALIZADO — Rastreio CA colo do útero (Portaria SAES/SECTICS 13 de 29/07/2025):

A) FAIXA ETÁRIA E PÚBLICO-ALVO:
  • 25 a 64 anos
  • Mulheres cis + homens trans + pessoas não-binárias / intersexo NASCIDOS com sistema reprodutivo feminino
  • Imunossuprimidas (HIV+, transplantadas, imunobiológicas) seguem protocolo específico (ver abaixo)
  • Histerectomia total prévia POR doença benigna SEM histórico de NIC: PODE encerrar rastreio. Por NIC2/3+: manter rastreio do fundo vaginal por 20 anos pós-tratamento.

B) MÉTODO PRIMÁRIO — TESTE DNA-HPV ONCOGÊNICO:
  • Coleta cervicovaginal pelo profissional (médico, enfermeira capacitada) ou autocoleta vaginal
  • Detecta presença de HPV oncogênico via PCR/amplificação
  • Genotipagem parcial (HPV 16/18 vs outros pool) ou estendida
  • Substitui gradualmente a citologia conforme o serviço se estrutura

C) CONDUTAS POR RESULTADO:

  HPV NEGATIVO:
  • Retornar em 5 anos
  • NÃO encurtar intervalo sem motivo clínico
  
  HPV POSITIVO PARA 16 E/OU 18:
  • Encaminhar diretamente para COLPOSCOPIA (risco maior, ~70% dos CCU)
  • Sem necessidade de citologia reflexa
  
  HPV POSITIVO PARA OUTROS TIPOS ONCOGÊNICOS (não 16/18):
  • Realizar CITOLOGIA REFLEXA na mesma amostra
    - Citologia negativa: repetir DNA-HPV em 1 ano
    - Citologia alterada (ASC-US+): colposcopia
  
  HPV NEGATIVO em mulher >60 anos com 2 testes negativos consecutivos:
  • Pode ENCERRAR rastreio

D) PERÍODO DE TRANSIÇÃO (CITOLOGIA AINDA EM USO):
  Enquanto o DNA-HPV não estiver universalmente disponível na rede, segue o protocolo INCA prévio:
  • Citologia: 25-64 anos
  • Periodicidade: 1 ano + 1 ano + (se ambos negativos) 3 em 3 anos
  • Resultado alterado (ASC-US, ASC-H, LSIL, HSIL, AGC): conforme PCDT vigente
  • Migrar para DNA-HPV conforme disponibilidade da rede municipal

E) PROTOCOLO ESPECIAL — HIV+ ou imunossuprimidas:
  • Início aos 21 anos (não esperar 25)
  • Citologia OU DNA-HPV anual (não a cada 5)
  • Não encerrar aos 64 — manter se imunossupressão persiste
  • Encaminhar colposcopia em qualquer ASC-US ou HPV+

F) <25 ANOS:
  • NÃO RASTREAR (Recomendação 10 da Diretriz, evidência alta)
  • Alta prevalência de HPV transitório, baixíssima incidência de CA invasivo
  • Sobrediagnóstico/sobretratamento (CAF/conização) tem risco obstétrico (parto prematuro)
  • Mesmo se teste foi inadvertidamente realizado nessa faixa: DESCONSIDERAR resultado

G) AÇÕES E RESPONSÁVEIS:
  • Médico: avaliação, coleta, interpretação, encaminhamento
  • Enfermeira: COLETA é atribuição (Lei do Exercício Profissional + Cofen) — papel central na APS
  • ACS: convocação ativa, busca de faltosas, vínculo
  • SISCAN: registro obrigatório de exames e resultados
  • Laboratório de referência municipal/regional
  • Colposcopia/Ginecologia: serviço de referência para HPV+ ou citologia alterada

H) DIAGNÓSTICO PRECOCE (sintomáticas — NÃO é rastreio):
  • Sangramento intermenstrual ou pós-coital recorrente
  • Corrimento persistente fétido
  • Lesão visível em colo durante especular
  • Sintomas avançados: dor pélvica, perda de peso, sintomas urinários, hidronefrose, dor lombar
  • → Investigação imediata + colposcopia + biópsia`,
padrao_ouro:"OMS — Global Strategy to Accelerate Elimination of Cervical Cancer (2020): meta 90-70-90 (90% vacinadas, 70% rastreadas com teste de alta performance pelo menos 2x na vida, 90% das lesões tratadas). Brasil aderiu via Portaria 13/2025. DNA-HPV oncogênico é gold-standard internacional (substituindo citologia em todos países desenvolvidos). Cotesta (HPV + citologia simultâneos) é usado em alguns países mas oneroso — não adotado pelo Brasil.",
prog:"Programa organizado bem implementado reduz mortalidade por CCU em >70% (experiências escandinavas). No Brasil, ainda há subutilização: cobertura de rastreio ~35% (longe dos 70% recomendados pela OMS), com maior gap em regiões Norte/Nordeste. Triênio 2023-2025: 17.010 casos/ano no Brasil. Vacinação adequada + rastreio organizado tem potencial de eliminar a doença em 2-3 décadas.",
acomp:"DNA-HPV negativo: 5 anos. HPV+ 16/18: colposcopia imediata. HPV+ outros: citologia reflexa. Pós-tratamento NIC: seguimento individualizado conforme PCDT. Pós-CA invasivo: oncologia/ginecologia oncológica.",
p4:"⚠ NÃO RASTREAR <25 anos — sobrediagnóstico/sobretratamento com risco obstétrico futuro (parto prematuro pós-CAF). ⚠ Não rastrear >64 com 2 exames negativos consecutivos. ⚠ Não rastrear mulher histerectomizada por causa benigna SEM histórico de NIC. ⚠ Não rastrear em intervalo menor que o preconizado 'por segurança' — não muda desfecho, gera ansiedade e custo. ⚠ Citologia anual em mulher de baixo risco com último negativo recente: P4 — não acrescenta benefício. ⚠ Vacina HPV NÃO isenta do rastreio (cobre principais tipos mas não todos). ⚠ Atenção especial: mulheres pós-menopausa frequentemente saem do rastreio sem atingir os critérios formais de encerramento — busca ativa pelo ACS. ⚠ Em paciente com queixa (sangramento, corrimento, dor): investigação, NÃO 'rastreio'. ⚠ Cuidado com 'preventivo anual' como sinônimo de consulta ginecológica — pode levar a sobreuso de citologia.",
calcs:[],
alertas:[
{t:"info",x:"<strong>MUDANÇA 2025:</strong> teste DNA-HPV oncogênico substitui gradualmente o Papanicolau como método primário. Intervalo 5 anos se negativo."},
{t:"warn",x:"NÃO rastrear &lt;25a — risco de sobrediagnóstico/sobretratamento e impacto obstétrico futuro."},
{t:"warn",x:"HPV 16 ou 18: ENCAMINHAR direto para colposcopia. Outros HPV+: citologia reflexa antes de decidir."},
{t:"info",x:"Imunossuprimidas (HIV+): rastreio anual a partir dos 21 anos, sem encerramento aos 64."}
],
diretriz:"MS — Portaria SAES/SECTICS Nº 13/2025 + Diretrizes Brasileiras para o Rastreamento do Câncer de Colo do Útero: Parte I — Rastreamento organizado utilizando testes moleculares para detecção de DNA-HPV Oncogênico (jul/2025). INCA — Detecção Precoce do Câncer. OMS Global Strategy 2020. PCDT específico para tratamento de lesões."
},

{
id:"rastreio-colorretal", contexto:["ubs"], nome:"Rastreio Câncer Colorretal", sis:"rastreio", grav:"baixa",
cid:"Z12.1", ciap:"D75",
sin:["rastreio colorretal","CCR","sangue oculto","colonoscopia","TIF","teste imunoquímico fecal"],
def:"Detecção precoce do câncer colorretal em pessoas assintomáticas. Diretriz brasileira específica APROVADA PELA CONITEC (parecer favorável mar/2026) preconiza teste imunoquímico fecal (TIF) bienal em pessoas 50-75 anos, com colonoscopia em caso positivo. Implementação progressiva no SUS.",
intro:"Câncer colorretal é o 3º mais incidente no Brasil (homens e mulheres juntos, ~45.000 casos/ano para o triênio 2023-2025), mas com tendência de crescimento em populações mais jovens — fenômeno do 'early-onset CRC' que está mudando guidelines internacionais. SUS está em transição: por anos, o rastreio organizado não existia oficialmente. Em mar/2026 a Conitec deu parecer favorável à implementação do programa organizado.",
apresentacao:"Pessoa de risco habitual, 50-75 anos, assintomática. PESSOAS DE ALTO RISCO seguem outro protocolo (não 'rastreio populacional'): história familiar forte (parente 1º grau <60a), pólipos prévios, doença inflamatória intestinal (RCU, Crohn) >8 anos, síndromes hereditárias (Lynch, PAF). Sintomáticos (sangramento, mudança de hábito intestinal, emagrecimento, anemia ferropriva) requerem INVESTIGAÇÃO, não rastreio.",
sintomas:[
"Idade (rastreio 50-75 anos)",
"Antecedente familiar 1º grau de CCR ou pólipo adenomatoso, especialmente <60a",
"Antecedente pessoal de pólipos adenomatosos / CCR",
"Doença inflamatória intestinal (RCU, Crohn) extensa, >8 anos de evolução",
"Síndromes hereditárias: Lynch (HNPCC), PAF (polipose adenomatosa familiar), Peutz-Jeghers, etc.",
"Fatores de risco: tabagismo, etilismo, obesidade, dieta pobre em fibras, rica em carne vermelha/processada, sedentarismo",
"Sintomas (NÃO usar como rastreio — investigar): hematoquezia, melena, mudança persistente do hábito intestinal, fezes em fita, tenesmo, dor abdominal recorrente, anemia ferropriva inexplicada, emagrecimento involuntário, massa abdominal palpável"
],
fisio:"Sequência adenoma → carcinoma é o paradigma central (~10-15 anos). Adenomas tubulares > vilosos. Pólipos serrilhados são via alternativa importante. ~5% têm causa hereditária identificável (Lynch é o mais comum). Localizações: cólon descendente/sigmoide ~50%, reto ~30%, cólon ascendente ~20% (este último em crescimento, especialmente em idosos). Pólipos sangram pouco — daí limitação do teste de sangue oculto isolado.",
profilaxia:"PRIMÁRIA: dieta rica em fibras, atividade física regular, peso adequado, redução de carne vermelha/processada, redução de álcool, parar tabagismo. AAS em prevenção primária NÃO é mais recomendado (mudança USPSTF 2022). Em LYNCH/PAF: protocolos específicos (colonoscopia precoce e frequente, cirurgia profilática em situações específicas).",
freire:"Tema sensível por envolver fezes — paciente tem nojo, vergonha, evita falar. Acolher: 'o cocô é informação clínica preciosa, não é nojento aqui'. Educar diferença entre TIF (sangue oculto imunológico, fácil, em casa) e colonoscopia (procedimento, exige preparo, sedação). Construir entendimento: 'a maioria das alterações intestinais não é câncer — diverticulose, hemorroida, intestino irritado. Mas algumas são, e quanto antes a gente sabe, mais simples o tratamento'. Estratégia FREIREANA: ACS pode ajudar a desmistificar o exame (saquinho que vai com sua fezes). Pactuar sem culpa: 'sei que parece estranho, mas o procedimento é simples'. Em populações resistentes, mostrar o coletor pode ajudar. PRINCIPAL barreira é vergonha — desfazer.",
sus_tx:`PROTOCOLO — Rastreio CCR no SUS (transição):

A) DIRETRIZ NOVA (parecer Conitec favorável mar/2026, implementação progressiva):

  PESSOAS 50 A 75 ANOS, RISCO HABITUAL:
  • TESTE IMUNOQUÍMICO FECAL (TIF) — sangue oculto imunológico
  • Periodicidade: a cada 2 anos
  • Coleta domiciliar (paciente faz em casa), entrega na UBS
  • Não exige preparo, jejum ou suspensão de dieta (mais simples que o Hemoccult clássico)

  RESULTADO TIF:
  • NEGATIVO: repetir em 2 anos
  • POSITIVO: encaminhar para COLONOSCOPIA total (procedimento diagnóstico)
    - Colonoscopia normal: TIF em 10 anos
    - Pólipos benignos pequenos: colonoscopia em 3-5 anos
    - Pólipos avançados / NIA: seguimento individualizado
    - CA confirmado: oncologia + cirurgia

B) DISCUSSÃO em andamento (não oficial):
  • INCA estuda reduzir idade de início para 45 anos (alinhando com SBCO, ACS, USPSTF)
  • Crescimento de CCR em jovens preocupa
  • Em alguns serviços privados/programas piloto: 45 anos já é praticado
  • Em alto risco familiar: SEMPRE 10 anos antes do caso mais jovem ou aos 40a, o que vier antes

C) ALTO RISCO — protocolo específico (NÃO é 'rastreio populacional'):
  
  ANTECEDENTE FAMILIAR 1º GRAU DE CCR:
  • Caso na família <60a: colonoscopia a partir dos 40a, OU 10 anos antes do caso mais jovem
  • Caso ≥60a: rastreio padrão a partir de 50a (alguns guidelines preferem 40a)
  • Periodicidade: a cada 5 anos
  
  SÍNDROMES HEREDITÁRIAS:
  • Lynch (HNPCC): colonoscopia partir 20-25a, anual ou bienal
  • PAF: colonoscopia anual partir 10-12a + colectomia profilática conforme
  • Peutz-Jeghers, MAP: protocolos individualizados
  • Encaminhar oncogenética
  
  DOENÇA INFLAMATÓRIA INTESTINAL:
  • Colonoscopia 8-10 anos após início da doença, a cada 1-3 anos
  • Múltiplas biópsias seriadas
  • Risco de displasia/CCR elevado
  
  PÓLIPO PRÉVIO:
  • Pólipo hiperplásico distal pequeno: rastreio normal
  • Adenoma único <10mm: colonoscopia em 5-10 anos
  • Adenoma avançado / múltiplos: colonoscopia em 3 anos

D) AÇÕES E RESPONSÁVEIS:
  • Médico: orientação, decisão compartilhada, interpretação, encaminhamento
  • Enfermeira: orientação técnica da coleta, busca ativa
  • ACS: convocação, lembretes, desmistificação do exame, vínculo
  • Laboratório: processamento TIF
  • Gastroenterologia / endoscopia: colonoscopia de referência

E) DIAGNÓSTICO PRECOCE (sintomáticos — NÃO rastreio):
  • Hematoquezia, melena
  • Mudança persistente de hábito intestinal (>4-6 sem)
  • Fezes em fita / tenesmo
  • Anemia ferropriva inexplicada (especialmente homem ou mulher pós-menopausa)
  • Emagrecimento involuntário
  • Massa abdominal palpável
  → INVESTIGAÇÃO IMEDIATA: colonoscopia + biópsia se lesão

F) NÃO RASTREAR (P4):
  • <40 anos sem fator de risco específico
  • >75 anos sem expectativa de vida >5-10 anos
  • Comorbidades graves / fragilidade limitando tratamento`,
padrao_ouro:"USPSTF 2021: rastreio 45-75 anos (recomendação A em 50-75, B em 45-49). Múltiplas opções: TIF anual, sangue oculto guaiaco anual, colonoscopia 10/10 anos, sigmoidoscopia 5/5 anos, FIT-DNA (Cologuard) 1-3 anos. Colonoscopia é gold standard quanto à acurácia mas oneroso e invasivo. TIF é gold standard de programa populacional (custo-efetividade). SBCO/Sociedade Brasileira de Coloproctologia: alinhada com ACS — 45a início. Tomografia colonoscópica (colonografia por TC): alternativa em pacientes que recusam ou têm contraindicação.",
prog:"Rastreio bem implementado reduz mortalidade por CCR em 25-30% (TIF bienal) e até 50-60% (colonoscopia). NNT em 10 anos ~150-300. Detecção precoce: CCR estágio I tem sobrevida >90% em 5 anos vs <15% em estágio IV. Brasil tem alta taxa de diagnóstico tardio.",
acomp:"TIF negativo: 2 anos. TIF positivo: colonoscopia imediata. Pós-colonoscopia: conforme achados (3-10 anos). Em alto risco: protocolos diferenciados, geralmente gastrenterologia.",
p4:"⚠ NÃO rastrear <40 anos sem fator de risco específico — incidência muito baixa. ⚠ Não rastrear >75-85a com comorbidades graves / expectativa de vida limitada — pouca chance de benefício, riscos do procedimento. ⚠ TIF positivo SEMPRE requer colonoscopia — não 'repetir TIF' pra confirmar. ⚠ Colonoscopia tem riscos (sangramento, perfuração — raro mas real): indicação criteriosa. ⚠ Sangue oculto guaiaco antigo (Hemoccult) é INFERIOR ao TIF (imunológico) — substituir quando possível. ⚠ NÃO rastrear com colonoscopia em pessoa de baixo risco — TIF é mais custo-efetivo populacionalmente. ⚠ AAS em prevenção primária de CCR NÃO é mais recomendado (USPSTF 2022 mudou — risco hemorrágico > benefício). ⚠ Sintomas (hematoquezia, mudança de hábito) NÃO são para 'rastreio' — investigação direta com colonoscopia. ⚠ 'Pacote de check-up GI' anual com US + endoscopia + colonoscopia em assintomático sem risco: sobreuso flagrante.",
calcs:[],
alertas:[
{t:"info",x:"<strong>Diretriz Conitec/SUS aprovada mar/2026:</strong> TIF bienal em 50-75 anos, colonoscopia se positivo. Implementação progressiva."},
{t:"warn",x:"Discussão para REDUZIR início para 45 anos — crescimento de CCR em jovens. SBCO já recomenda 45."},
{t:"warn",x:"Antecedente familiar 1º grau de CCR &lt;60a: começar aos 40 anos (NÃO 50)."},
{t:"crit",x:"Hematoquezia / anemia ferropriva inexplicada / emagrecimento = INVESTIGAÇÃO IMEDIATA. Não 'rastreio'."}
],
diretriz:"INCA — Detecção Precoce do Câncer (capítulo CCR). Conitec — parecer favorável diretriz CCR mar/2026. SBCP, SBCO. American Cancer Society 2018+ (rastreio aos 45). USPSTF 2021. Diretrizes ESGE, NCCN."
}

,

{
id:"rastreio-prostata", contexto:["ubs"], nome:"Rastreio Câncer de Próstata", sis:"rastreio", grav:"baixa",
cid:"Z12.5", ciap:"Y07",
sin:["rastreio próstata","PSA","toque retal","screening próstata","CA próstata prevenção"],
def:"Detecção precoce do câncer de próstata. POLÊMICO — divergência entre MS/INCA (NÃO recomenda rastreio populacional, Nota Técnica 09/2023 reafirmada em 2024) e SBU/SBOC/SBRT (recomendam discussão individualizada em 50-70a, ou 45 em alto risco). USPSTF: decisão compartilhada 55-69a. A abordagem correta na APS é DECISÃO COMPARTILHADA — informar prós e contras, respeitar autonomia.",
intro:"~72.000 novos casos/ano no Brasil (2024) — 2ª causa de morte oncológica em homens. CA próstata é único entre cânceres por dois motivos: (1) muitos tumores são INDOLENTES — homem morre COM, não DE; (2) tratamento (cirurgia/RT) tem alta taxa de sequelas (incontinência urinária, disfunção erétil). Esta combinação cria sobrediagnóstico massivo se rastreio é universal. POR ISSO o MS NÃO recomenda rastreio populacional — mas SBU/sociedades urológicas defendem ativamente discussão individualizada.",
apresentacao:"Homem assintomático para discussão de rastreio (não 'fazer rastreio' — DISCUTIR). Diferente: homem sintomático (sintomas urinários, hematúria, dor óssea) requer INVESTIGAÇÃO, não rastreio. Sintomas urinários BAIXOS isolados na maioria das vezes NÃO são CA de próstata (mais comum: HBP). Não chamar o paciente para 'check-up próstata' como rotina — chamar para CONVERSA SOBRE.",
sintomas:[
"Idade (>50 anos para discussão)",
"Ancestralidade africana (risco maior — discussão pode iniciar 45a)",
"História familiar 1º grau (pai, irmão) — discussão a partir 45a",
"Mutações conhecidas: BRCA1/2, Lynch — alto risco",
"Síndrome metabólica (associação modesta)",
"Tabagismo (associação fraca)",
"Sintomas para INVESTIGAÇÃO (não rastreio): hematúria, dor óssea persistente (especialmente lombar), perda de peso inexplicada, sintomas urinários BAIXOS persistentes (hesitação, jato fraco, polaciúria, noctúria) — embora estes últimos geralmente sejam HBP, não CA",
"Sintomas SUSPEITOS de CA avançado: dor óssea metastática, fratura patológica, sintomas neurológicos por compressão medular, linfedema, anemia inexplicada"
],
fisio:"Adenocarcinoma acinar é >95%. Origem na zona periférica (acessível ao toque retal). Crescimento lento na maioria — média 10-20 anos de latência clínica. Escore de Gleason classifica agressividade. PSA: glicoproteína prostática (não específica de câncer — sobe em HBP, prostatite, instrumentação, ejaculação recente, ciclismo). Por isso PSA isolado tem baixa especificidade — ~70% das biópsias por PSA elevado vêm benignas; ~15% dos CA não elevam PSA (falso-negativo).",
profilaxia:"Não há prevenção primária bem estabelecida. Hábitos de vida saudáveis (atividade física, peso adequado, dieta mediterrânea) podem ter efeito modesto. NÃO há suplemento ou medicamento com benefício comprovado em prevenção primária. Finasterida/dutasterida reduzem incidência mas aumentam % de tumores de alto grau — não usar para prevenção.",
freire:"Talvez o tema MAIS difícil de comunicar bem. Cultura popular: 'todo homem >50 tem que fazer PSA e toque' — Novembro Azul reforça. Mas evidência atual aponta para NUANCE. ABORDAGEM: 'sobre o exame de próstata, eu preciso conversar bastante com o senhor antes de pedir, pode ser? Porque tem benefício, mas também tem riscos que muita gente não conhece'. Apresentar trade-offs com números (ferramenta de apoio à decisão do INCA): 'em cada 1000 homens rastreados por 10 anos, 1-3 são salvos da morte por CA próstata, MAS 200 têm biópsia desnecessária, 50 têm tratamento que pode causar incontinência ou impotência, e 20 tratam câncer que nunca os mataria'. PARTE DO TRABALHO é desconstruir o pânico de 'precisa fazer' — outra parte é validar o desejo do paciente que quer fazer. RESPEITAR AUTONOMIA. Pacientes em alto risco (afrodescendente, histórico familiar) merecem discussão mais elaborada. METÁFORA: 'fazer o PSA é como pedir uma blitz nas suas estradas — pode pegar coisa boa, pode pegar coisa ruim, pode pegar coisa que não muda nada e atrapalha sua vida'.",
sus_tx:`PROTOCOLO — Rastreio CA próstata (DECISÃO COMPARTILHADA, posições divergentes):

A) POSIÇÃO MS/INCA (Nota Técnica 001/2015 e 09/2023, reafirmada 2024):
  • NÃO RECOMENDA rastreio populacional
  • Estratégia recomendada: DIAGNÓSTICO PRECOCE em sintomáticos + AUTONOMIA do paciente informado
  • Justificativa:
    - Rastreio aumenta diagnósticos sem clareza de benefício em redução de mortalidade
    - Sobrediagnóstico: ~20-50% dos CA detectados em rastreio são indolentes
    - Sobretratamento: cirurgia/RT podem causar incontinência (~10-20%) e disfunção erétil (~30-60%)
    - Falso-positivo do PSA: ~70% das biópsias são benignas
    - Biópsia tem riscos: sangramento, infecção (sepse em 1-2%), dor
  • Recomenda: discussão informada se paciente questionar ou solicitar

B) POSIÇÃO SBU/SBOC/SBRT (Posicionamento 2023):
  • Discussão individualizada com PSA + toque retal
  • Homem 50-70 anos: discussão e oferta após CONSENTIMENTO INFORMADO
  • Homem afrodescendente OU com histórico familiar 1º grau: discussão a partir dos 45a
  • Síndromes hereditárias (BRCA, Lynch): 40-45a, individualizado
  • Continuar até expectativa de vida >10 anos
  • Periodicidade: anual ou bienal conforme PSA basal
  
C) POSIÇÃO USPSTF (mais conservadora):
  • Decisão compartilhada 55-69a (recomendação C)
  • NÃO rastrear ≥70a (recomendação D)

D) PROTOCOLO PRÁTICO DE DECISÃO COMPARTILHADA na APS:

  1) IDENTIFICAR público para discussão:
     • Homem 50-70a (45-70 se ancestralidade africana ou histórico familiar)
     • Expectativa de vida >10 anos
     • Disposto a discutir o tema
  
  2) APRESENTAR a conversa explicitamente:
     • "Hoje vamos conversar sobre o exame de próstata. Não é fazer ou não fazer — é entender."
     • Tempo dedicado: 15-20 min idealmente
  
  3) INFORMAR potenciais BENEFÍCIOS:
     • Detecção mais precoce em alguns casos
     • Redução pequena de mortalidade específica (NNT ~1000-2000 em 10 anos)
  
  4) INFORMAR potenciais DANOS:
     • Falso-positivo (70% das biópsias são benignas)
     • Biópsia: sangramento (urinário/retal), infecção/sepse (1-2%), dor, ansiedade
     • Sobrediagnóstico (cânceres indolentes)
     • Sobretratamento: incontinência urinária 10-20%, disfunção erétil 30-60%, estenose, sintomas retais
  
  5) PERGUNTAR sobre VALORES do paciente:
     • "O que é mais importante para o senhor: descobrir tudo o mais cedo possível, mesmo correndo risco de complicações, ou evitar exames e procedimentos a não ser que tenha sintoma?"
  
  6) DECIDIR JUNTO:
     • Se paciente OPTA por rastrear: PSA + toque, conforme protocolo
     • Se paciente OPTA por não rastrear: registrar decisão, manter vigilância de sintomas, NÃO insistir
     • Reavaliar periodicamente (a decisão pode mudar)

E) SE OPTAR POR RASTREAR — protocolo:
  • PSA total (corte 4 ng/mL geralmente — discussão sobre 2,5-3 ng/mL em jovens)
  • Toque retal: avaliar consistência, nodulação, simetria
  • Periodicidade: anual (alguns guidelines: bienal se PSA <1,0)
  • PSA ELEVADO: repetir em 4-6 semanas (afastar infecção/instrumentação)
  • Persistente elevado: encaminhar urologia para investigação (RM multiparamétrica, biópsia)
  • Toque alterado: encaminhar independente do PSA

F) SINTOMÁTICO ou ACHADO SUSPEITO — NÃO é rastreio, é INVESTIGAÇÃO:
  • Dor óssea persistente: avaliar metástase
  • Hematúria: investigação completa
  • Toque retal com nódulo ou consistência aumentada: encaminhar urologia
  • Sintomas urinários atípicos / progressivos: avaliar

G) FERRAMENTA DE APOIO (INCA disponibiliza):
  • Cartilha 'Tomada de Decisão sobre o Rastreamento do CA de Próstata'
  • Pode ser usada na consulta para visualizar trade-offs

H) AÇÕES E RESPONSÁVEIS:
  • Médico: discussão, exames, encaminhamento
  • Enfermeira/ACS: convocação ATIVA para a discussão (não para o exame)
  • Urologia (referência): casos suspeitos, alteração PSA/toque
  • Educação popular nas ESF: desconstruir 'Novembro Azul = todo homem faz PSA'`,
padrao_ouro:"NÃO HÁ consenso internacional. USPSTF 2018 (recomendação C 55-69a): decisão compartilhada. Brasil/MS: não rastreio populacional. SBU/AUA: discussão individualizada. NCCN: rastreio em alto risco. Estudos pivotais: ERSPC (europeu, mostra pequeno benefício de mortalidade); PLCO (americano, benefício menos claro). RM multiparamétrica pré-biópsia é avanço importante — reduz biópsias desnecessárias.",
prog:"Se rastreio é feito: redução de mortalidade específica por CA próstata pequena — ~21% (ERSPC, NNT muito alto). Mortalidade GLOBAL não muda significativamente. CA próstata detectado precoce e tratado tem >95% sobrevida em 10 anos — mas muitos tumores nunca matariam. Vigilância ativa (não tratar tumores baixo risco) é estratégia em ascensão.",
acomp:"Pós-decisão de não rastrear: vigilância de sintomas, revisitar discussão a cada 1-2 anos. Pós-rastreio normal: conforme periodicidade combinada. PSA elevado: investigação dirigida. Diagnóstico confirmado: urologia/oncologia, considerar vigilância ativa em baixo risco (Gleason 3+3=6, PSA<10, T1c).",
p4:"⚠ NÃO oferecer PSA 'de rotina' sem discussão prévia — fere autonomia, contraria diretriz MS. ⚠ Novembro Azul como gatilho para 'fazer PSA em todos' é P4 — usar a campanha para EDUCAR sobre decisão compartilhada, não para rastrear sem discussão. ⚠ Rastrear homem com expectativa de vida <10 anos: P4 — não vai se beneficiar. ⚠ Rastrear homem >75 anos sem fator de risco específico: P4. ⚠ PSA 'a cada 6 meses' sem indicação: sobreuso. ⚠ NÃO insistir em rastrear paciente que disse 'não' após informado. ⚠ Repetir biópsia indefinidamente em paciente com PSA fronteiriço sem RMmp prévia: sobreuso. ⚠ Tratar CA Gleason 6 baixo risco com cirurgia/RT sem considerar vigilância ativa: pode ser sobretratamento. ⚠ Cuidado com narrativa 'previne câncer' aplicada ao PSA — PSA não previne, detecta. ⚠ TOQUE RETAL na consulta de rotina sem indicação clara também merece reflexão — invasivo, baixa especificidade.",
calcs:[],
alertas:[
{t:"warn",x:"<strong>DIVERGÊNCIA:</strong> MS/INCA NÃO recomenda rastreio populacional. SBU recomenda discussão individualizada 50-70a (45 em alto risco). USPSTF: decisão compartilhada 55-69a."},
{t:"info",x:"<strong>DECISÃO COMPARTILHADA</strong> com informação adequada é o caminho ético — não 'fazer ou não fazer', mas conversar."},
{t:"warn",x:"Falso-positivo PSA: ~70% das biópsias por PSA elevado são benignas. Sobretratamento causa incontinência/impotência em parcela importante."},
{t:"crit",x:"Sintomas urinários + dor óssea persistente / hematúria: NÃO é rastreio — é INVESTIGAÇÃO imediata."}
],
diretriz:"MS — Nota Técnica 001/2015 e 09/2023 (não rastreio populacional). SBU/SBOC/SBRT — Posicionamento sobre o Rastreamento do Câncer de Próstata (2023). USPSTF 2018 — Screening for Prostate Cancer. INCA — Cartilha Tomada de Decisão sobre Rastreio CA Próstata. AUA, NCCN guidelines."
},

{
id:"rastreio-pulmao", contexto:["ubs"], nome:"Rastreio Câncer de Pulmão", sis:"rastreio", grav:"baixa",
cid:"Z12.2", ciap:"R84",
sin:["rastreio pulmão","TC baixa dose","tomografia tórax","screening pulmão","CA pulmão fumante"],
def:"Detecção precoce do câncer de pulmão por tomografia computadorizada de baixa dose (TCBD) anual em populações de alto risco (fumantes/ex-fumantes). Recomendação Brasileira SBPT/SBCT/CBR (2024). Ainda NÃO há rastreio populacional oficial no SUS — INCA mantém discussão. Lei 2550/24 em tramitação no Congresso para política nacional.",
intro:"CA de pulmão tem alta letalidade (~85% relacionados ao tabaco). ~30.200 novos casos/ano no Brasil, ~28.600 mortes/ano — taxa de mortalidade ~95% (uma das piores!). Apenas 15% diagnosticados em estágio inicial. Rastreio com TCBD reduz mortalidade específica em 20%, e até 38% quando combinado com cessação do tabagismo (NLST, NELSON). PRINCIPAL barreira no Brasil: custo da TC + falta de programa organizado + acesso desigual.",
apresentacao:"Pessoa de alto risco, ASSINTOMÁTICA. Pessoa SINTOMÁTICA (tosse persistente >3 sem, hemoptise, dor torácica, dispneia, perda de peso, sintomas paraneoplásicos) NÃO é rastreio — é investigação. Em sintomático, RX tórax e TC convencional são apropriados.",
sintomas:[
"Idade (50-80 anos para rastreio)",
"Tabagismo atual ou pregresso",
"Carga tabágica: ≥20 anos-maço (10 cigarros/dia x 40 anos = 20 maços-ano)",
"Tempo de cessação: ainda elegível se parou de fumar há ≤15 anos",
"Capacidade de tolerar cirurgia torácica se diagnosticado (avaliar comorbidades)",
"Exposição ocupacional: amianto, sílica, radônio, urânio, cromo, níquel, gás mostarda — risco aumentado",
"História pessoal de neoplasia prévia (mama, cabeça/pescoço — risco aumentado)",
"DPOC, fibrose pulmonar — risco aumentado",
"História familiar de CA pulmão",
"NÃO usar se sintomas presentes — sintomas exigem INVESTIGAÇÃO, não rastreio: tosse persistente >3 sem, hemoptise (mesmo escassa), dor torácica, dispneia progressiva, rouquidão, perda de peso, baqueteamento digital, hipocratismo, síndrome paraneoplásica"
],
fisio:"Adenocarcinoma é mais comum atualmente (~40%, em fumantes E não fumantes), seguido de carcinoma de células escamosas (~25%, mais associado a tabaco direto), pequenas células (~15%, agressivo, fortemente relacionado a tabaco), grandes células e outros. Fumante tem ~20x mais risco que não-fumante. Risco diminui após cessação mas permanece elevado por décadas. Tabagismo passivo aumenta risco em ~20-30%. Radônio é 2ª causa em alguns países.",
profilaxia:"PRIMÁRIA: cessação/não-iniciação do tabagismo é DE LONGE a intervenção mais efetiva — reduz risco progressivamente, atinge ~50% do baseline em 10-15 anos. PNCT (Programa Nacional Controle do Tabagismo) no SUS oferece tratamento gratuito. Evitar tabagismo passivo, exposição ocupacional. Radônio: ventilação domiciliar em regiões de risco geológico.",
freire:"Acolhimento é central — paciente fumante muitas vezes carrega culpa, vergonha, medo. ABORDAGEM: 'fumar é uma dependência química, não é falta de força — vamos trabalhar isso junto'. Para discussão de rastreio: 'a TC de tórax anual pode ajudar a detectar câncer cedo em quem já fumou bastante. Não substitui parar de fumar — só complementa'. Foco SIMULTÂNEO em cessação. Em ex-fumante: 'parar foi a maior coisa que o senhor fez pela própria saúde. A TC é uma camada adicional de proteção'. METÁFORA: 'a TC é como o detector de fumaça — não vai apagar o incêndio, mas pode avisar enquanto ainda dá pra resolver'. Atenção a fumantes em comunidades vulneráveis — frequentemente excluídos de programas privados.",
sus_tx:`PROTOCOLO — Rastreio CA pulmão (SBPT/SBCT/CBR 2024):

A) CRITÉRIOS DE ELEGIBILIDADE (1ª Recomendação Brasileira para Rastreamento do CA Pulmão, 2024):
  • Idade 50 a 80 anos
  • Tabagismo atual OU ex-fumante há ≤15 anos
  • Carga tabágica ≥20 anos-maço
    - Cálculo: (cigarros/dia ÷ 20) × anos de tabagismo
    - Exemplos: 1 maço/dia × 20 anos = 20 maços-ano | 10 cig/dia × 40a = 20 | 20 cig/dia × 10a = 10
  • Condição clínica que permita tratamento curativo (cirurgia torácica) se diagnosticado
  • Sem sintomas de CA pulmão (caso contrário, é investigação)

B) MÉTODO: TC de tórax de BAIXA DOSE (TCBD)
  • Sem contraste
  • Dose ~1/5 a 1/10 da TC convencional
  • Periodicidade: ANUAL
  • Interpretação por radiologista capacitado (Lung-RADS)

C) CLASSIFICAÇÃO LUNG-RADS [ACR]:
  • Lung-RADS 1: negativo — TC anual
  • Lung-RADS 2: achado benigno — TC anual
  • Lung-RADS 3: provavelmente benigno — TC 6 meses
  • Lung-RADS 4A: suspeito — TC 3 meses ou PET-TC
  • Lung-RADS 4B/4X: muito suspeito — investigação (biópsia, PET-TC)

D) ASSOCIAÇÃO COM CESSAÇÃO DO TABAGISMO — INSEPARÁVEL:
  • Rastreio SEM cessação tem efeito muito menor (20% redução mortalidade)
  • Rastreio COM cessação: até 38% redução mortalidade
  • CADA visita de rastreio deve incluir intervenção breve de cessação
  • PNCT: oferece TRN (adesivo, goma, pastilha), bupropiona, vareniclina
  • Aconselhamento ABC ou 5As

E) SITUAÇÃO ATUAL NO SUS:
  • NÃO há rastreio organizado oficializado
  • INCA mantém posição cautelosa — discussão em curso
  • PL 2550/24 em tramitação no Congresso visa criar Política Nacional de Rastreamento e Diagnóstico Precoce do CA Pulmão
  • Alguns municípios e centros piloto já realizam (Rede D'Or, hospitais oncológicos)
  • TCBD não está formalmente incluída no SISCAN para rastreio populacional

F) NA PRÁTICA DA APS:
  • Identificar pacientes ELEGÍVEIS pelo critério acima
  • Aplicar intervenção de cessação rigorosamente
  • Encaminhar para TCBD via Sisreg quando disponível (em municípios que ofertam)
  • Em SP/RJ/BH: alguns hospitais públicos têm programas piloto
  • Em locais sem oferta: focar em DIAGNÓSTICO PRECOCE + cessação

G) DIAGNÓSTICO PRECOCE (sintomáticos — NÃO é rastreio):
  • Tosse persistente >3 semanas, especialmente em fumante
  • Hemoptise (mesmo escassa)
  • Dor torácica persistente
  • Dispneia progressiva inexplicada
  • Rouquidão persistente >2 sem
  • Perda de peso >5% em 6 meses
  • Síndromes paraneoplásicas (hipercalcemia, SIADH, dedos em baqueta)
  • → RX TÓRAX + TC contrastada + encaminhamento pneumologia/oncologia

H) ALTO RISCO ADICIONAL não tabágico:
  • Exposição ocupacional a amianto, sílica, radônio, urânio, cromo, níquel
  • Avaliação pneumológica + considerar TCBD individualizada
  • CAT (laudo) para fins ocupacionais`,
padrao_ouro:"USPSTF 2021: rastreio anual com TCBD em 50-80a, ≥20 maços-ano, fumante atual ou ex (cessou ≤15a) — recomendação B. NLST (estudo americano) e NELSON (europeu): redução mortalidade 20-25%. Recomendação Brasileira SBPT/SBCT/CBR 2024 alinhada com USPSTF. Não há ainda definição do critério ideal em populações asiáticas/não-tabagistas (mulheres asiáticas têm % alto de adenocarcinoma sem tabaco).",
prog:"Redução de mortalidade específica por CA pulmão: 20% só rastreio, 38% rastreio + cessação. Sobrevida em estágio I com cirurgia: 60-70% em 5 anos vs <10% em estágio IV. NNT ~320 em 6 anos (NLST). Limitação no Brasil: implementação dificultada por custo/acesso da TC + necessidade de equipe radiológica treinada (Lung-RADS).",
acomp:"Lung-RADS 1-2: TC anual. Lung-RADS 3: TC 6m. Lung-RADS 4: investigação. Concomitante: cessação do tabagismo + reavaliação anual de elegibilidade (cessou >15a anos → sair do rastreio).",
p4:"⚠ Rastrear pessoa NÃO elegível (fumou pouco, parou há muito tempo): mais danos que benefício. ⚠ Não realizar TCBD sem programa estruturado de investigação subsequente — achado incidental sem fluxo de seguimento é dano (ansiedade, exposição). ⚠ Falsos-positivos comuns (nódulos pulmonares benignos são frequentes em fumantes): biópsias desnecessárias com risco. ⚠ Achados incidentais não pulmonares (aorta, mediastino, fígado, coluna, mama) frequentes — geram cascata. ⚠ RX tórax NÃO é método de rastreio (não reduz mortalidade — estudo PLCO). Não substituir TCBD por RX. ⚠ NÃO rastrear paciente que não suportaria tratamento (cirurgia/quimioterapia). ⚠ Em pacientes >80a ou comorbidade grave: P4 — questionar benefício. ⚠ Cessação SEM rastreio > rastreio SEM cessação. Inverter prioridades é erro. ⚠ Rastreio é caro e tem dose de radiação cumulativa — em quem não tem indicação, é dano sem benefício.",
calcs:[],
alertas:[
{t:"info",x:"<strong>SBPT/SBCT/CBR 2024:</strong> TCBD anual em 50-80a, ≥20 maços-ano, tabagista atual ou ex (cessou ≤15a)."},
{t:"warn",x:"INCA ainda NÃO recomenda rastreio populacional no SUS. PL 2550/24 em discussão. Implementação ainda incipiente."},
{t:"crit",x:"Rastreio sem cessação tem efeito reduzido. CADA consulta = intervenção de cessação. PNCT oferece tratamento gratuito."},
{t:"warn",x:"Sintomático: NÃO rastreio — INVESTIGAÇÃO IMEDIATA com RX/TC contrastada."}
],
diretriz:"SBPT/SBCT/CBR — Recomendações Brasileiras para Rastreamento de CA Pulmão [J Bras Pneumol 2024]. USPSTF 2021 — Screening for Lung Cancer. NLST (NEJM 2011). NELSON (NEJM 2020). PNCT — MS. Lei 2550/24 (tramitação). PCDT MS CA Pulmão."
},

{
id:"rastreio-chc-cirrose", contexto:["ubs"], nome:"Rastreio Hepatocarcinoma em Cirróticos / HBV", sis:"rastreio", grav:"baixa",
cid:"Z12.8", ciap:"D97",
sin:["rastreio CHC","hepatocarcinoma","carcinoma hepatocelular","cirrose vigilância","HBV vigilância"],
def:"Vigilância ativa para detecção precoce de carcinoma hepatocelular (CHC) em populações de alto risco: portadores de cirrose hepática (qualquer etiologia) e portadores selecionados de HBV crônico mesmo sem cirrose. Método: ultrassonografia abdominal a cada 6 meses ± dosagem de alfa-fetoproteína (AFP). PCDT MS específico para CHC.",
intro:"CHC é o câncer hepático primário mais comum (~70-85% das neoplasias hepáticas primárias). ~5.000 mortes/ano no Brasil. Diferente dos outros 'rastreios' — aqui o público-alvo é RESTRITO (alto risco), não populacional. Cirrose é o principal fator de risco (incidência anual de CHC ~1,5-3% em cirróticos). HBV crônico pode causar CHC mesmo sem cirrose. Detecção precoce permite tratamento curativo (ressecção, transplante, ablação) — daí a importância da vigilância.",
apresentacao:"Paciente PORTADOR DE CIRROSE (qualquer etiologia) OU HBV crônico de alto risco, em vigilância periódica. NÃO é rastreio populacional — é vigilância DIRIGIDA. Diferente: paciente cirrótico SINTOMÁTICO (dor abdominal, perda de peso, descompensação súbita) requer investigação imediata.",
sintomas:[
"Cirrose hepática diagnosticada (qualquer etiologia — viral, alcoólica, MASLD/NASH, autoimune, hemocromatose, Wilson, etc.)",
"HBV crônico de alto risco (ferramenta PAGE-B > 10): homens >40a, mulheres >50a, africanos, asiáticos, histórico familiar de CHC, replicação viral elevada",
"HCV crônico tratado e curado (SVR) MAS com cirrose estabelecida — manter vigilância",
"MASLD/NASH com fibrose avançada (F3-F4)",
"Hepatite autoimune com cirrose",
"Hemocromatose hereditária com cirrose",
"Doença de Wilson com cirrose",
"Cirrose biliar primária estabelecida",
"NÃO usar como rastreio em: pessoa sem cirrose e sem HBV de alto risco (rastreio populacional NÃO recomendado)",
"Sintomas suspeitos para INVESTIGAÇÃO (não vigilância): dor no quadrante superior direito persistente, perda de peso inexplicada, ascite nova ou de difícil controle, descompensação súbita da cirrose, icterícia inexplicada, massa abdominal palpável"
],
fisio:"CHC tem tempo de duplicação tumoral médio 117 dias — justifica intervalo de 6 meses na vigilância. Patogênese: inflamação crônica → fibrose → cirrose → displasia → CHC. HBV pode causar diretamente CHC via integração viral, sem precisar de cirrose. Cofatores: aflatoxina (regiões tropicais), álcool, obesidade/MASLD. Marcadores tumorais: AFP é o mais usado (sensibilidade limitada ~50%, especificidade boa em valores muito altos >400 ng/mL). Lesão >1 cm em imagem é gatilho para investigação.",
profilaxia:"PRIMÁRIA: vacinação HBV (PNI universal desde nascimento — fundamental). Tratamento de hepatites virais (HCV: DAAs, HBV: tenofovir/entecavir). Cessação alcoólica. Controle MASLD/NASH (peso, atividade física, controle DM2). Evitar aflatoxinas. SECUNDÁRIA = vigilância (este protocolo). TERCIÁRIA = tratamento curativo do CHC inicial.",
freire:"Paciente cirrótico geralmente já tem vínculo com hepatologia / clínica médica. Papel da APS: REFORÇO da adesão à vigilância (muitos abandonam pela longitudinalidade exigida) + manejo de comorbidades + cuidado integral (PTS robusto — ver patologia 'cirrose-mfc' se existente). EXPLICAR: 'a cirrose aumenta o risco de câncer no fígado. Por isso fazemos um ultrassom a cada 6 meses — é mais fácil tratar quando é pequeno'. Em paciente em uso ativo de álcool: integrar abordagem motivacional sem julgamento. METÁFORA: 'o fígado cicatrizado é como um terreno meio queimado — pode brotar mato bom, pode brotar erva ruim. A gente olha de tempos em tempos pra ver o que cresceu'.",
sus_tx:`PROTOCOLO — Vigilância de CHC (PCDT MS Carcinoma Hepatocelular):

A) POPULAÇÃO-ALVO — quem deve fazer vigilância:

  CIRRÓTICOS — TODOS, independentemente da etiologia:
  • HCV (mesmo após cura/SVR)
  • HBV
  • Alcoólica
  • MASLD/NASH (esteato-hepatite)
  • Autoimune
  • Cirrose biliar primária
  • Hemocromatose
  • Wilson
  • Outras
  
  HBV CRÔNICO SEM CIRROSE — APENAS em alto risco (PAGE-B > 10):
  • Homens >40a
  • Mulheres >50a
  • Origem africana ou asiática
  • Histórico familiar 1º grau de CHC
  • Replicação viral elevada / HBeAg+
  • Coinfecção HIV/HCV
  
  FIBROSE AVANÇADA (F3) em MASLD: considerar individualmente
  
  EXCLUÍDOS da vigilância:
  • Cirrótico com expectativa de vida limitada (Child-Pugh C avançado, não candidato a transplante)
  • Comorbidades que inviabilizariam tratamento curativo
  • Decisão conjunta com paciente

B) MÉTODO:
  • US ABDOMINAL a cada 6 MESES (gold standard)
    - Foco hepático, baço, pode incluir avaliação de circulação portal
    - Operador-dependente: realizar em serviço com expertise
    - Sensibilidade ~78% para CHC, ~45% para CHC inicial
  • ± ALFA-FETOPROTEÍNA (AFP) sérica a cada 6 meses
    - Uso combinado aumenta sensibilidade
    - Sozinha tem sensibilidade limitada
    - AFP >20 ng/mL: alerta para investigação
    - AFP >400 ng/mL: alta especificidade para CHC
  • Em paciente obeso ou com US tecnicamente difícil: alternar US com RM ou TC dinâmica (em centros de referência)
  • NÃO usar TC ou RM como rastreio rotineiro (apenas em situações específicas)

C) CONDUTA POR ACHADO:
  • US normal + AFP normal: repetir em 6 meses
  • Lesão <1 cm em US: repetir US em 3 meses (observação)
  • Lesão ≥1 cm: TC OU RM com contraste dinâmico
    - Padrão LI-RADS (Liver Imaging Reporting and Data System) categoriza:
      - LR-3: indeterminado → repetir imagem
      - LR-4: provavelmente CHC → confirmação
      - LR-5: definitivamente CHC → tratamento
  • AFP elevada SEM lesão visível: investigar com TC/RM, considerar fontes não-hepáticas
  • Diagnóstico de CHC: encaminhar HEPATOLOGIA/ONCOLOGIA. Sem necessidade de biópsia se imagem típica em paciente cirrótico (LI-RADS 5).

D) PERIODICIDADE:
  • Vigilância: a cada 6 meses (não anual — tempo de duplicação justifica)
  • Iniciar quando diagnóstico de cirrose / HBV alto risco
  • Continuar enquanto candidato a tratamento curativo

E) TRATAMENTO (no nível terciário):
  • Critérios de MILÃO: lesão única ≤5cm OU ≤3 lesões ≤3cm, sem invasão vascular, AFP <500
    → candidato a TRANSPLANTE HEPÁTICO (cura)
  • Ressecção cirúrgica em Child-Pugh A sem hipertensão portal
  • Ablação por radiofrequência ou micro-ondas para lesões <3 cm
  • TACE (quimioembolização), SBRT, sistêmicos para casos avançados
  • PCDT MS define fluxo

F) PAPEL DA APS:
  • Identificar pacientes em risco (cirróticos sem vigilância ativa, HBV crônico)
  • Garantir continuidade da vigilância semestral
  • Manejo integral: descompensações leves, profilaxias (sangramento varicoso, EH, PBE, vacinas)
  • Apoio nutricional, redução do álcool, atividade física compatível
  • Articulação com hepatologia / centros transplantadores`,
padrao_ouro:"AASLD (2018+): vigilância semestral com US ± AFP em cirróticos e HBV crônico de alto risco. EASL similar. APASL adota cutoffs adaptados a populações asiáticas. PCDT MS — Carcinoma Hepatocelular: define fluxo no SUS. PAGE-B é a ferramenta principal de estratificação de risco em HBV. LI-RADS é a classificação radiológica padrão (5 categorias).",
prog:"Vigilância organizada aumenta detecção precoce significativamente — CHC ≤2 cm tem sobrevida >70% em 5 anos com tratamento curativo vs <20% em estágios avançados. Sem vigilância: maioria diagnosticada em estágio sintomático/avançado. Adesão é principal desafio: muitos cirróticos abandonam vigilância por desorganização do sistema ou descrença.",
acomp:"US + AFP a cada 6 meses, ad eternum (enquanto candidato a tratamento). Lesão indeterminada: imagem 3 meses. Lesão suspeita: TC/RM + encaminhamento. CHC confirmado: hepatologia/oncologia.",
p4:"⚠ NÃO fazer 'rastreio CHC' em pessoa SEM cirrose e SEM HBV de alto risco — sem benefício, falsos positivos. ⚠ Vigilância ÚTIL apenas se paciente é candidato a tratamento curativo — em Child-Pugh C terminal não candidato a transplante: vigilância é onerosa sem benefício. ⚠ Não usar AFP isoladamente — sensibilidade insuficiente. ⚠ TC/RM rotineiros como 'rastreio' aumentam exposição a radiação/contraste sem benefício comprovado vs US. ⚠ Em paciente com vigilância irregular: investigar barreiras (acesso, transporte, falta de informação) antes de culpar. ⚠ MASLD/NASH SEM fibrose avançada NÃO é indicação de vigilância CHC populacional. ⚠ Pacientes que curaram HCV (SVR) MAS sem cirrose: vigilância individualizada, geralmente desnecessária. ⚠ Solicitar AFP isolada como 'check-up de fígado' sem indicação: sobreuso. ⚠ Cuidar para que vigilância semestral não vire 'TC + RM + AFP + USG seriado' — manter simplicidade.",
calcs:[],
alertas:[
{t:"info",x:"<strong>População-alvo:</strong> cirróticos (qualquer etiologia) + HBV crônico de alto risco (PAGE-B &gt;10). NÃO é rastreio populacional."},
{t:"warn",x:"Periodicidade: US ± AFP a CADA 6 MESES. Não anual (tempo de duplicação do CHC justifica)."},
{t:"info",x:"CHC ≤2cm em cirrótico com critério de Milão: candidato a TRANSPLANTE HEPÁTICO (cura). Vigilância salva vida."},
{t:"warn",x:"Em Child-Pugh C avançado não-candidato a transplante: P4 — discutir cessação da vigilância."}
],
diretriz:"MS — PCDT Carcinoma Hepatocelular no Adulto. AASLD 2018 — Hepatocellular Carcinoma Surveillance. EASL 2018. PAGE-B score [J Hepatol 2016]. LI-RADS [ACR]. INCA — Tipos de Câncer / Fígado."
}

,

{
id:"rastreio-pele", contexto:["ubs"], nome:"Rastreio Câncer de Pele (Melanoma e Não-Melanoma)", sis:"rastreio", grav:"baixa",
cid:"Z12.83", ciap:"S77",
sin:["rastreio pele","melanoma","CBC basocelular","CEC espinocelular","ABCDE","autoexame pele"],
def:"Estratégia de detecção precoce do câncer de pele. INCA NÃO recomenda rastreio populacional. Foco: diagnóstico precoce em sintomáticos (exame da pele em consulta rotineira) + vigilância dirigida em alto risco (história pessoal/familiar, imunodeficiência, fototipos claros). Regra ABCDE para melanoma.",
intro:"Câncer de pele é o mais incidente no Brasil (~30% de todas as neoplasias) — mas os tumores NÃO-MELANOMA (CBC, CEC) representam ~95%, são geralmente indolentes e curáveis quando precocemente tratados. MELANOMA é minoria (~5% dos CA de pele) mas responsável por ~75% das mortes por câncer de pele — agressivo, metastatiza precocemente. Brasil: ~9.000 melanomas/ano, ~165.000 CBC/CEC. Maior incidência regiões Sul, Sudeste. Fotoexposição solar é o principal fator modificável.",
apresentacao:"Pessoa assintomática para conscientização e autoexame (não 'rastreio' propriamente dito) OU pessoa com lesão cutânea suspeita (mancha nova, alteração de pinta antiga, ferida que não cicatriza, nódulo crescente) para diagnóstico precoce / encaminhamento dermatologia.",
sintomas:[
"Idade (incidência sobe com idade, mas melanoma pode ocorrer em jovens)",
"Fototipo I-II (pele clara, sardas, cabelos ruivos/loiros, olhos claros)",
"Queimaduras solares na infância (≥5 episódios com bolhas dobra o risco de melanoma)",
"Exposição solar cumulativa elevada (trabalhadores rurais, construção, marinheiros, surfistas)",
"Uso de câmaras de bronzeamento artificial (proibidas no Brasil desde 2009)",
"Imunossupressão (transplante, AIDS, imunobiológicos) — risco MUITO aumentado de CEC",
"História pessoal de câncer de pele",
"História familiar de melanoma (1º grau) — risco 2-3x",
"Nevos múltiplos (>50 pintas) ou nevos atípicos",
"Síndrome do nevo displásico",
"Xeroderma pigmentoso (raro mas alto risco)",
"Síndromes hereditárias (Cowden, BRCA, etc.)",
"Sinais de alerta — REGRA ABCDE (melanoma): A=assimetria, B=bordas irregulares, C=cor não uniforme, D=diâmetro >6mm, E=evolução (mudança recente)",
"Sinais de alerta CBC: pápula perlácea com telangiectasias, ferida que não cicatriza, lesão sangrante recorrente — face/orelha/dorso de mão (áreas fotoexpostas)",
"Sinais de alerta CEC: placa ceratósica, úlcera de bordas elevadas, crescimento rápido — lábio inferior, mão, couro cabeludo (em calvos), cicatriz antiga (Marjolin)"
],
fisio:"CBC (carcinoma basocelular): mais comum, crescimento local, raramente metastatiza, áreas fotoexpostas. CEC (carcinoma espinocelular): 2º mais comum, pode metastatizar (especialmente lábio, orelha, cicatriz), associado a fotoexposição + imunossupressão + HPV (em algumas localizações). MELANOMA: origem em melanócitos, agressivo, metastatiza por linfático e hematogênico. Subtipos: extensivo superficial (mais comum), nodular (mais agressivo), lentigo maligno (idosos), acral lentiginoso (mais comum em pele negra, palmas/plantas).",
profilaxia:"PRIMÁRIA: fotoproteção (FPS ≥30, reaplicar a cada 2h, evitar 10h-16h), uso de roupas, chapéu de aba larga, óculos de sol UV. NÃO usar bronzeamento artificial. SECUNDÁRIA: autoconhecimento da pele + procura precoce se mudança. TERCIÁRIA: tratamento eficaz das lesões iniciais. Em alto risco genético: avaliação dermatológica anual + dermatoscopia / mapeamento corporal.",
freire:"Brasil é país tropical — fotoproteção precisa ser cultura. Em paciente de baixa renda, protetor solar é caro — orientar alternativas (manga longa, chapéu, sombra, evitar horário pico). 'Pele bronzeada não é pele saudável — bronzeado é resposta do corpo ao dano'. Em comunidade vulnerável: ACS pode trazer paciente quando notar lesão suspeita. ABORDAGEM: 'olhe sua pele uma vez por mês. Se uma pinta mudou de cor, tamanho, formato — mostre pra gente. Se uma feridinha não cicatriza em 4 semanas — mostre'. METÁFORA: 'a pele é o jornal do seu corpo — leia as manchetes'. Atenção a pessoas negras: melanoma acral (palmas, plantas, unhas) é o mais comum em pele negra e frequentemente diagnosticado tardiamente — desfazer mito de que 'negro não tem câncer de pele'.",
sus_tx:`PROTOCOLO — Rastreio CA pele:

A) POSIÇÃO OFICIAL (INCA, USPSTF, WHO):
  • NÃO há recomendação de rastreio populacional sistemático com exame de pele de corpo inteiro em assintomáticos
  • Evidência insuficiente sobre redução de mortalidade pelo rastreio sistemático
  • Foco: DIAGNÓSTICO PRECOCE (lesões com sinais de alerta) + acompanhamento de alto risco

B) ESTRATÉGIA NA APS:

  1) EXAME OPORTUNÍSTICO DA PELE:
     • Em toda consulta de rotina (preventiva, hipertensão, diabetes), observar pele exposta (face, dorso das mãos, antebraços, pescoço)
     • Pode ser feito por médico, enfermeira, dentista
     • Não é 'rastreio formal' — é observação clínica integrada
  
  2) AUTOEXAME ORIENTADO:
     • Educar paciente para autoexame mensal — diferente do CA mama, AQUI tem evidência de utilidade modesta
     • Regra ABCDE para pintas/manchas
     • Atenção a 'patinho feio' — pinta diferente das outras
     • Ferida que não cicatriza em 4 semanas: investigar
     • Comparar com fotografias prévias se possível

  3) IDENTIFICAÇÃO DE ALTO RISCO — exame dermatológico anual:
     • História pessoal de melanoma, CBC ou CEC
     • Imunossuprimidos (transplante, AIDS, imunobiológicos)
     • Síndrome do nevo displásico / >50 nevos
     • História familiar 1º grau de melanoma
     • Xeroderma pigmentoso
     • Síndromes genéticas

C) REGRA ABCDE PARA MELANOMA (Skin Cancer Foundation):
  • A — Assimetria: metades diferentes
  • B — Bordas irregulares, denteadas
  • C — Cor não uniforme (várias cores na mesma lesão)
  • D — Diâmetro >6mm (do tamanho de um borracha de lápis)
  • E — Evolução: mudança em tamanho, cor, formato, sensações (coceira, sangramento) RECENTEMENTE
  • Qualquer critério positivo → encaminhar dermatologia

D) SINAIS ESPECÍFICOS POR TIPO:
  
  CBC (carcinoma basocelular):
  • Pápula perlácea (brilho cerúleo) com telangiectasias visíveis
  • Crescimento lento, dorso do nariz, pavilhão auricular, dorso da mão
  • Lesão que sangra ao mínimo trauma e recidiva
  • Subtipos: nodular, superficial, esclerodermiforme, pigmentado
  
  CEC (carcinoma espinocelular):
  • Placa endurada, ceratósica, úlcera de bordas elevadas
  • Lábio inferior (especialmente em fumante), orelha, couro cabeludo de calvos
  • Crescimento mais rápido que CBC
  • Cicatriz antiga ou úlcera crônica que se transforma (úlcera de Marjolin)
  • Ceratose actínica é precursor — placa rugosa, áspera, em pele fotoexposta
  
  MELANOMA:
  • ABCDE
  • Atenção a regiões 'escondidas': couro cabeludo, plantas dos pés, palmas (acral em pessoas negras), unhas (melanoníquia longitudinal), região genital
  • Pode surgir 'do nada' (novo) ou em pinta antiga que mudou

E) PROGRAMAS E CAMPANHAS:
  • Sociedade Brasileira de Dermatologia: campanhas anuais ('Dezembro Laranja' / Campanha Nacional do CA Pele)
  • Hospital de Amor (Barretos): programa estruturado de rastreio com cabine fotográfica e teletriagem em municípios parceiros
  • Iniciativas municipais: exame dermatológico em mutirão (debate sobre custo-efetividade)

F) AÇÕES E RESPONSÁVEIS:
  • Médico: exame oportunístico, identificação de alto risco, encaminhamento
  • Dentista: avaliação de pele fotoexposta (lábio, face)
  • Enfermeira / ACS: educação para autoexame, orientação fotoproteção
  • Dermatologia: avaliação especializada de alto risco e lesões suspeitas
  • Patologista / cirurgia / oncologia: confirmação e tratamento

G) DIAGNÓSTICO PRECOCE — sinais para investigação imediata (NÃO é rastreio):
  • Mancha/pinta nova OU mudança ABCDE em pinta antiga
  • Ferida que não cicatriza em 4 semanas
  • Lesão pruriginosa, sangrante ou ulcerada persistente
  • Nódulo cutâneo de crescimento rápido
  • → BIÓPSIA (excisional preferencialmente, ou shave em lesão superficial) ou encaminhar dermatologia`,
padrao_ouro:"USPSTF 2023: I (insufficient evidence) para rastreio sistemático de adultos assintomáticos com exame visual de pele. WHO 2020: alinhada — sem rastreio populacional. INCA: alinhado. AAD/SBD: defendem rastreio dirigido + autoexame. Dermatoscopia + mapeamento corporal digital são gold standard em alto risco. Inteligência artificial para análise dermatoscópica em desenvolvimento.",
prog:"Detecção precoce de melanoma: estágio in situ tem sobrevida >99% em 5 anos vs ~25% em estágio IV. CBC: praticamente 100% de cura quando tratado precocemente. CEC: maioria curável, mortalidade em casos avançados/metástase. Brasil tem alta taxa de CBC pelo clima tropical, mas mortalidade é baixa.",
acomp:"Lesão suspeita: biópsia + dermatologia. Pós-tratamento de CA pele: seguimento dermatológico individualizado (geralmente 6/6m no primeiro ano, depois anual). Alto risco: exame dermatológico anual. População geral: autoexame mensal + procura se mudança.",
p4:"⚠ Exame de pele de corpo inteiro 'preventivo' anual em pessoa sem fator de risco: sem evidência forte — pode gerar excesso de biópsias de lesões benignas (sobrediagnóstico, sobretratamento). ⚠ Biopsiar QUALQUER pinta sem critério ABCDE: sobreuso, gera cicatriz e ansiedade sem benefício. ⚠ Mapeamento corporal digital em pessoa sem alto risco: caro, pouco benefício. ⚠ Não confundir lesões cutâneas benignas (ceratose seborreica, hemangioma cereja, lentigo solar simples) com lesões suspeitas. ⚠ Em idoso terminal com lesão pequena indolente: discutir P4 — tratamento agressivo pode não fazer sentido. ⚠ Suplementos 'antioxidantes para prevenir CA pele': sem evidência — fotoproteção é o que funciona. ⚠ Bronzeamento artificial: PROIBIDO no Brasil — orientar pacientes que usam em outros países.",
calcs:[],
alertas:[
{t:"info",x:"<strong>INCA NÃO recomenda rastreio populacional.</strong> Foco: diagnóstico precoce (ABCDE) + acompanhamento de alto risco."},
{t:"info",x:"<strong>ABCDE:</strong> Assimetria, Bordas, Cor, Diâmetro, Evolução. Qualquer alteração → dermatologia."},
{t:"warn",x:"Em pessoas negras: melanoma acral (palmas, plantas, unhas) é mais comum e frequentemente diagnosticado tardiamente. Examinar essas áreas!"},
{t:"info",x:"Lábio inferior, orelha, dorso de mão, couro cabeludo de calvos = áreas de alto risco para CEC em fotoexpostos."}
],
diretriz:"INCA — Detecção Precoce do Câncer (capítulo Pele). USPSTF 2023 — Screening for Skin Cancer. WHO — Cancer Screening Guidelines. SBD (Sociedade Brasileira de Dermatologia) — Campanha Nacional do Câncer de Pele. Hospital de Amor de Barretos — Projeto Retrate."
},

{
id:"rastreio-boca-cp", contexto:["ubs"], nome:"Rastreio Câncer de Boca / Cabeça e Pescoço", sis:"rastreio", grav:"baixa",
cid:"Z12.81", ciap:"D02",
sin:["rastreio boca","CA cavidade oral","CA cabeça pescoço","leucoplasia","eritroplasia","lábio inferior"],
def:"Estratégia de detecção precoce do câncer de cavidade oral, lábio, faringe e laringe. INCA/MS NÃO recomenda rastreio populacional. Foco: diagnóstico precoce em sintomáticos + parceria com odontologia / CEOs (Centros de Especialidades Odontológicas) para inspeção visual em populações de alto risco. Tabagismo + etilismo + HPV são os principais fatores etiológicos.",
intro:"~15.000 casos/ano no Brasil de CA cavidade oral (~11.000 homens, 4.000 mulheres). 5º câncer mais incidente em homens. Alta morbimortalidade pelo diagnóstico tardio (~75% diagnosticados em estágios avançados III/IV). Quando detectado precocemente: sobrevida >95% em 5 anos. Brasil tem perfil epidemiológico particular: alta prevalência de tabagismo histórico + etilismo + exposição solar (lábio inferior) + HPV emergente (orofaringe).",
apresentacao:"Pessoa assintomática para conscientização e exame estomatológico de rotina em alto risco OU pessoa com sinais/sintomas suspeitos para investigação dirigida.",
sintomas:[
"Idade (>40 anos — mas com aumento em jovens por HPV)",
"Tabagismo (qualquer forma — cigarro, charuto, cachimbo, narguilé)",
"Etilismo crônico (sinergia com tabagismo é multiplicativa)",
"Exposição solar prolongada (especialmente para CA de lábio inferior)",
"Infecção por HPV oncogênico (especialmente HPV-16) — CA de orofaringe em ascensão",
"Imunossupressão (transplante, HIV, imunobiológicos)",
"Higiene oral inadequada, próteses mal adaptadas, traumas crônicos",
"Doenças pré-malignas: leucoplasia, eritroplasia, líquen plano oral, fibrose submucosa",
"História pessoal de CA cabeça e pescoço prévio (alto risco de 2º primário)",
"História familiar (papel menor)",
"Sinais e sintomas SUSPEITOS — investigar:",
"  • ÚLCERA persistente >15 DIAS sem causa aparente",
"  • PLACA vermelha (eritroplasia — alta taxa de malignidade) ou esbranquiçada (leucoplasia) em mucosa oral",
"  • NÓDULO no pescoço (linfadenopatia cervical)",
"  • Rouquidão persistente >2 semanas",
"  • Dificuldade de mastigação, deglutição, fala",
"  • Assimetria facial",
"  • Dor de garganta persistente, otalgia inexplicada",
"  • Sangramento oral espontâneo",
"  • Mobilidade dentária inexplicada"
],
fisio:"~90% são carcinoma espinocelular (CEC). Sítios mais frequentes: língua (especialmente borda lateral), assoalho bucal, lábio inferior, palato, gengiva. CA de orofaringe (amígdala, base da língua) por HPV tem comportamento e prognóstico melhores. Tabaco + álcool são sinérgicos: combinação multiplica risco. Tabagismo causa via carcinógenos (nitrosaminas, etc.). Álcool atua como solvente facilitando absorção + metabólito acetaldeído tóxico. HPV: integração viral, vias E6/E7. Leucoplasia: ~5% taxa de malignização; eritroplasia: ~50% (muito mais agressiva).",
profilaxia:"PRIMÁRIA: cessação do tabagismo (PNCT), redução do álcool, fotoproteção labial (FPS labial específico), vacinação HPV (PNI 9-14 anos, ambos os sexos — proteção para CA de orofaringe). Higiene oral, adaptação adequada de próteses, tratamento de doenças pré-malignas. SECUNDÁRIA: exame estomatológico periódico em alto risco + autoexame oral + detecção precoce em sintomáticos.",
freire:"Boca é território da fala e da alimentação — câncer aqui mexe profundamente com identidade. Acolhimento empático. Em fumante/etilista — não julgar. ABORDAGEM em rotina: 'além de cuidar da pressão, vamos olhar sua boca. Tira a dentadura? Põe a língua pra fora?'. Em paciente com lesão suspeita: 'tem uma feridinha aqui que não tá cicatrizando. Vou pedir que o dentista olhe também — pode não ser nada, mas é melhor checar'. Trabalho conjunto MÉDICO + DENTISTA na ESF é estratégico — dentista frequentemente é o primeiro a notar. METÁFORA: 'a língua e a bochecha são como uma estrada — qualquer 'lombada' nova que aparece, a gente investiga'. ACS pode ser ponte com pacientes que evitam dentista por trauma.",
sus_tx:`PROTOCOLO — Rastreio CA cabeça e pescoço:

A) POSIÇÃO OFICIAL (INCA/MS, USPSTF, WHO 2020):
  • NÃO há recomendação de rastreio populacional com exame de cavidade oral em assintomáticos
  • Evidências atuais insuficientes para definir benefício em mortalidade do rastreio sistemático populacional
  • IARC reconhece que rastreio em alto risco PODE reduzir mortalidade (mas impacto na incidência ainda não bem estabelecido)
  • Estratégia recomendada: DIAGNÓSTICO PRECOCE + INSPEÇÃO ORIENTADA em alto risco

B) ESTRATÉGIA NA APS — diagnóstico precoce:

  1) ANAMNESE direcionada em todo paciente adulto:
     • História de tabagismo (atual / pregresso / passivo)
     • Consumo de álcool
     • Exposição solar ocupacional (lábio)
     • Sintomas: dor, lesão, alteração de voz, disfagia
  
  2) EXAME ESTOMATOLÓGICO em consulta de rotina:
     • Inspeção visual completa:
       - Lábios (interno e externo)
       - Mucosa jugal (pedir para esticar com espelho)
       - Língua: face dorsal, ventral, BORDAS LATERAIS (sítio principal de CEC), base da língua (com espátula)
       - Assoalho bucal
       - Palato duro e mole
       - Pilares amigdalianos, orofaringe (com espátula)
     • Palpação: glândulas salivares, cadeias cervicais, base da língua
     • Iluminação adequada
     • Tempo médio: 2-3 minutos por paciente
     • Sensibilidade pelo profissional treinado: ~85%
  
  3) AUTOEXAME ORAL ORIENTADO:
     • Educar paciente para autoexame mensal
     • Usar espelho com boa iluminação
     • Sinais para procurar serviço: lesão >15 dias, placa vermelha/branca, nódulo cervical, alteração de voz

C) ALTO RISCO — exame estomatológico DIRIGIDO periódico:
  • Tabagista atual ou ex-tabagista pesado: exame anual por dentista capacitado
  • Etilista crônico: exame anual
  • História de CA cabeça e pescoço prévio: seguimento oncológico
  • Leucoplasia, eritroplasia, líquen plano oral: vigilância dermatológica/estomatológica
  • Imunossuprimidos: avaliação periódica

D) ARTICULAÇÃO COM ODONTOLOGIA:
  • Dentista da ESF é parceiro ESTRATÉGICO — frequentemente identifica primeiro
  • Encaminhar lesão suspeita ao DENTISTA da equipe (se houver) ou ao CEO (Centro de Especialidades Odontológicas)
  • CEOs estaduais realizam biópsia oral em casos suspeitos
  • Em municípios sem dentista/CEO: encaminhar diretamente cirurgia bucomaxilofacial / cabeça e pescoço

E) SINAIS DE ALERTA — investigação imediata (NÃO é rastreio):
  • ÚLCERA persistente >15 DIAS sem causa identificável
  • Placa esbranquiçada (LEUCOPLASIA — biopsiar) — risco ~5% malignização
  • Placa AVERMELHADA (ERITROPLASIA — biopsiar URGENTE) — risco ~50% malignização ou já câncer
  • Lesão mista vermelha/branca (eritroleucoplasia)
  • Nódulo cervical sem causa identificável
  • Rouquidão persistente >2 semanas — encaminhar otorrinolaringologia (laringoscopia)
  • Disfagia / odinofagia persistente
  • Sangramento espontâneo da mucosa oral
  • Otalgia unilateral persistente sem otopatia identificada (pode ser dor referida de orofaringe)
  • Mobilidade dentária inexplicada
  → BIÓPSIA é OBRIGATÓRIA para qualquer lesão suspeita >15 dias

F) PROGRAMAS BRASILEIROS:
  • Hospital de Amor (Barretos): programa estruturado de rastreio bucal (cobertura DRS-V/SP, 18 municípios) — 56% de diagnóstico em estadio precoce vs 27% nacional
  • CEOs estaduais: realizam biópsia e diagnóstico em pacientes regulados
  • Campanhas regionais ('Julho Verde' — câncer cabeça e pescoço)
  • Programa Brasil Sorridente: ações de saúde bucal incluem prevenção CA boca

G) PREVENÇÃO PRIMÁRIA — papel central:
  • Cessação do tabagismo (PNCT)
  • Redução do consumo de álcool
  • Fotoproteção labial (especialmente trabalhadores rurais, construção)
  • Vacinação HPV (proteção orofaringe — efeito em décadas)
  • Higiene oral, ajuste de próteses, tratamento de pré-malignos`,
padrao_ouro:"INCA/MS: não rastreio populacional. USPSTF 2023: I (insuficiente). IARC 2023: rastreio em alto risco pode reduzir mortalidade. NCCN: recomendam exame oportunístico em populações de risco. WHO Cancer Control: alinhamento. Hospital de Amor (Barretos): modelo brasileiro de rastreio organizado em alto risco com resultados promissores.",
prog:"Diagnóstico precoce (estágio I-II): sobrevida >85% em 5 anos. Diagnóstico tardio (III-IV): sobrevida ~30%. Brasil tem ~75% de diagnósticos tardios — espaço enorme para melhorar com exame oportunístico. CA de orofaringe por HPV tem melhor prognóstico (~80% sobrevida em 5 anos) que CA por tabaco/álcool.",
acomp:"Lesão suspeita: biópsia + encaminhamento odontologia/cirurgia BMF/cabeça e pescoço. Alto risco: exame anual. Pré-malignos (leucoplasia): seguimento estomatológico. Pós-tratamento: oncologia + reabilitação fonoaudiológica + nutricional.",
p4:"⚠ Exame de cavidade oral em paciente sem fator de risco / sem queixa não é 'rastreio formal' — mas é boa prática clínica integrada (custo zero, 2 minutos). ⚠ Métodos adjuvantes (azul de toluidina, autofluorescência, citologia esfoliativa) NÃO são gold standard para rastreio populacional — evidência insuficiente. ⚠ Biópsia de toda lesão branca/vermelha sem critério (>15 dias): OK como princípio, mas sobreuso em lesões claramente reativas (mordedura, prótese mal adaptada, candidíase) sem tentar tratamento prévio. ⚠ NÃO ignorar lesão pelo fato do paciente 'não ser fumante' — CA de orofaringe por HPV pode ocorrer em jovens não-tabagistas. ⚠ Rouquidão em idoso atribuída a 'envelhecimento' SEM avaliar laringe é P4 ao contrário — subdiagnóstico. ⚠ Em fumante etilista com lesão pré-maligna, recusar abordar tabagismo/álcool é negligência. ⚠ Não realizar tratamento agressivo em idoso terminal com pequeno tumor indolente sem discussão de objetivos de cuidado.",
calcs:[],
alertas:[
{t:"info",x:"<strong>INCA NÃO recomenda rastreio populacional.</strong> Foco: diagnóstico precoce + exame oportunístico em alto risco."},
{t:"crit",x:"<strong>ÚLCERA ORAL &gt;15 DIAS:</strong> biópsia obrigatória. Não esperar 'tentar mais um pouco'."},
{t:"warn",x:"Eritroplasia (placa vermelha): biópsia URGENTE — ~50% já são CA ou se transformam."},
{t:"info",x:"DENTISTA da ESF e CEO são parceiros estratégicos. Articular fluxo de encaminhamento local."}
],
diretriz:"INCA — Detecção Precoce do Câncer / Câncer de Boca. MS — Manual de Diagnóstico Precoce do Câncer de Boca (2022). USPSTF 2023 — Screening for Oral Cancer. IARC 2023. WHO Cancer Screening Guidelines. PNCT — MS. Política Nacional de Saúde Bucal (Brasil Sorridente)."
},

{
id:"rastreio-gastrico", contexto:["ubs"], nome:"Rastreio Câncer Gástrico", sis:"rastreio", grav:"baixa",
cid:"Z12.0", ciap:"D74",
sin:["rastreio CA gástrico","CA estômago","endoscopia preventiva","H. pylori","gastrite atrófica"],
def:"Estratégia de detecção precoce do câncer gástrico. Brasil NÃO tem rastreio populacional (incidência média-baixa). Foco: vigilância DIRIGIDA em alto risco (gastrite atrófica + H. pylori, anemia perniciosa, história familiar, populações específicas) + diagnóstico precoce em sintomáticos por endoscopia digestiva alta (EDA).",
intro:"CA de estômago é 5º mais incidente no Brasil (~21.000 casos/ano, predomínio masculino 5,4% dos novos casos). 3ª causa de morte por câncer no mundo. Brasil tem incidência considerada MÉDIA-BAIXA pela IARC (~7,08/100k habitantes ajustada) — não justifica rastreio populacional como no Japão (>30/100k, onde rastreio organizado existe). Foco brasileiro: VIGILÂNCIA DIRIGIDA em alto risco + diagnóstico precoce de sintomáticos. ~95% são adenocarcinoma.",
apresentacao:"Pessoa de alto risco para vigilância endoscópica dirigida OU pessoa sintomática para investigação. NÃO há indicação de rastreio populacional em assintomáticos sem fator de risco específico.",
sintomas:[
"FATORES DE RISCO PARA VIGILÂNCIA DIRIGIDA:",
"  • Infecção crônica por Helicobacter pylori (especialmente associada a gastrite atrófica)",
"  • Gastrite atrófica multifocal com metaplasia intestinal extensa",
"  • Anemia perniciosa (gastrite atrófica corporal)",
"  • Pólipos gástricos adenomatosos prévios",
"  • Lesões pré-malignas: displasia de baixo ou alto grau",
"  • Cirurgia gástrica prévia (gastrectomia parcial >15-20 anos atrás)",
"  • História familiar 1º grau de CA gástrico (especialmente <50a ou múltiplos casos)",
"  • Síndromes hereditárias: CA gástrico difuso hereditário (CDH1), Lynch, FAP",
"  • Imigrantes ou descendentes de regiões de alta incidência (Japão, Coreia)",
"  • Tabagismo, etilismo, dieta rica em alimentos defumados/salgados/embutidos, pobre em frutas e vegetais",
"SINTOMAS PARA INVESTIGAÇÃO (NÃO rastreio):",
"  • Dispepsia persistente >4 semanas + idade >40 anos OU sinais de alarme",
"  • SINAIS DE ALARME (sigla SOAP-ME): Sangramento (melena, hematêmese, anemia), Odinofagia/Disfagia, Anorexia, Perda de peso involuntária, Massa abdominal palpável, Êmese persistente",
"  • Saciedade precoce inexplicada",
"  • Dor abdominal epigástrica persistente",
"  • Massa epigástrica palpável",
"  • Linfadenopatia (linfonodo de Virchow supraclavicular esquerdo, irmã Mary Joseph umbilical)",
"  • Sintomas paraneoplásicos (acantose nigricans súbita, sinal de Leser-Trélat)"
],
fisio:"~95% são adenocarcinoma. Cascata de Correa: H. pylori → gastrite crônica → gastrite atrófica → metaplasia intestinal → displasia → carcinoma intestinal (Lauren intestinal). Tipo difuso (Lauren difuso) tem outra via, menos relacionada a H. pylori, mais agressivo, em pacientes mais jovens, mutação CDH1 hereditária em parte. Localizações: ~50% antro/piloro, ~25% corpo, ~25% cárdia/junção (esta última em ascensão, associada a obesidade/DRGE).",
profilaxia:"PRIMÁRIA: erradicação de H. pylori em alto risco (CASS — Cancer Screening Strategy japonesa, MAPS III europeia) reduz incidência. Dieta rica em frutas/vegetais, pobre em sal, defumados, embutidos. Redução de tabagismo, etilismo. SECUNDÁRIA: vigilância dirigida em alto risco (este protocolo). Não há vacina disponível.",
freire:"Sintoma dispéptico é COMUM e na maioria das vezes BENIGNO (DRGE, gastrite, dispepsia funcional, H. pylori) — paciente vem ansioso por temer câncer. Acolher sem alarme: 'a maioria absoluta dos casos de dor de estômago não é câncer. Vamos investigar pela ordem certa'. Em paciente com SINAIS DE ALARME (idade, perda peso, sangramento): seriedade tranquila, encaminhar logo. ABORDAGEM: 'a endoscopia é um exame que olha por dentro do estômago — incômodo mas tranquilo, com sedação leve'. METÁFORA: 'olhar por dentro do estômago é como abrir o capô do carro pra ver onde tem barulho'. Em populações com baixa adesão a EDA: trabalhar barreiras (medo da sedação, custo, distância) com ACS.",
sus_tx:`PROTOCOLO — CA gástrico no Brasil (sem rastreio populacional):

A) POSIÇÃO BRASILEIRA:
  • Brasil é classificado como RISCO INTERMEDIÁRIO-BAIXO pela IARC
  • NÃO há rastreio populacional preconizado (diferente do Japão, Coreia)
  • Foco: vigilância DIRIGIDA em alto risco + investigação ágil em sintomáticos

B) VIGILÂNCIA DIRIGIDA — alto risco:

  1) GASTRITE ATRÓFICA + METAPLASIA INTESTINAL [MAPS III, ESGE 2019]:
     • Metaplasia intestinal LIMITADA ao antro: não necessita vigilância endoscópica
     • Metaplasia intestinal MULTIFOCAL ou EXTENSA (envolvendo corpo): EDA a cada 3 anos
     • Displasia de baixo grau: EDA + biópsias múltiplas em 1 ano (idealmente em centro de referência)
     • Displasia de alto grau: ressecção endoscópica + EDA frequente (3-6 meses inicialmente)
  
  2) H. PYLORI:
     • ERRADICAR em todo paciente diagnosticado (PCDT MS) — esquema padrão: claritro + amox + IBP 14 dias OU bismuto + tetraciclina + metronidazol + IBP em falha
     • Em paciente com pré-malignos: erradicação é OBRIGATÓRIA, com confirmação pós-tratamento
     • Confirmação de cura: teste respiratório de ureia C13/14 ou antígeno fecal, ≥4 semanas após fim do tratamento e ≥2 semanas sem IBP
  
  3) ANEMIA PERNICIOSA:
     • EDA basal para descartar lesão
     • Vigilância periódica controversa — guidelines sugerem 3-5 anos se atrofia gástrica corporal
  
  4) HISTÓRIA FAMILIAR 1º GRAU + síndromes:
     • Familiar 1º grau de CA gástrico: rastreio H. pylori e erradicar
     • Em ≥2 familiares 1º grau ou caso <40a: investigar CDH1 (encaminhar oncogenética)
     • CDH1 confirmada: discussão de gastrectomia profilática (centros especializados)
     • Lynch (HNPCC): EDA junto com colonoscopia, 3-5 anos
  
  5) GASTRECTOMIA PARCIAL prévia >15 anos:
     • Risco aumentado de coto gástrico
     • Vigilância endoscópica controversa, individualizar

C) DIAGNÓSTICO PRECOCE em SINTOMÁTICOS:

  CRITÉRIOS PARA EDA (American College of Gastroenterology / AGA):
  • Dispepsia + idade ≥40 anos (Brasil — discutível pelo perfil epidemiológico — alguns guidelines locais sugerem 35 ou 45)
  • Dispepsia + QUALQUER sinal de alarme (qualquer idade)
  
  SINAIS DE ALARME — encaminhamento URGENTE para EDA:
  • Disfagia / odinofagia
  • Perda de peso involuntária >5% em 6 meses
  • Sangramento digestivo (melena, hematêmese, anemia ferropriva inexplicada)
  • Vômitos persistentes
  • Massa abdominal palpável
  • Saciedade precoce / anorexia significativa
  • Linfadenopatia suspeita

D) MÉTODO ABC (estudo japonês, ainda não incorporado no SUS):
  • Combina sorologia para H. pylori + dosagem de pepsinogênio sérico
  • Estratifica risco em grupos A (baixo), B (intermediário), C, D (alto)
  • Já testado em populações brasileiras com resultados promissores
  • Reduz endoscopias desnecessárias
  • Em estudo no Brasil, sem incorporação formal

E) AÇÕES E RESPONSÁVEIS:
  • Médico APS: identificação de alto risco, investigação de sintomas de alarme, erradicação H. pylori, encaminhamento
  • Endoscopia digestiva: EDA + biópsias seriadas conforme protocolo
  • Patologia: classificação OLGA/OLGIM (estadiamento atrófico)
  • Gastroenterologia: vigilância de pré-malignos, CDH1, casos complexos

F) PCDT MS:
  • Adenocarcinoma Gástrico no Adulto (PCDT específico para tratamento)
  • Define fluxo terapêutico no SUS`,
padrao_ouro:"MAPS III (European Guideline on Management of Gastric Precancerous Conditions, 2019) — vigilância de metaplasia/atrofia. ESGE Guidelines. AGA 2020 — Gastric Intestinal Metaplasia. Japan — programa nacional de rastreio em alta incidência. Coreia do Sul — rastreio organizado. Brasil — sem programa, foco em alto risco. Método ABC japonês em estudo brasileiro.",
prog:"Detecção precoce de CA gástrico: estágio I tem sobrevida >90% em 5 anos vs <10% em estágio IV. Brasil tem alta proporção de diagnósticos tardios. Erradicação de H. pylori em pré-malignos reduz progressão para CA. Vigilância de pré-malignos detecta carcinoma curável.",
acomp:"Pré-malignos: EDA conforme severidade (1-5 anos). Pós-erradicação H. pylori: confirmar cura. Sintomáticos: investigação dirigida. Pós-CA: oncologia + acompanhamento cirúrgico + nutricional.",
p4:"⚠ NÃO solicitar EDA 'preventiva' em adulto assintomático sem fator de risco — sem benefício, custo, risco do procedimento. ⚠ NÃO investigar dispepsia em <40 anos sem sinais de alarme sem teste prévio para H. pylori — abordagem 'test and treat' é mais custo-efetiva. ⚠ Não fazer 'EDA anual' em paciente com metaplasia limitada ao antro — frequência menor é apropriada. ⚠ Erradicação de H. pylori em paciente assintomático SEM nenhum fator de risco / sem dispepsia: discutível — guidelines variam. ⚠ Não confundir dispepsia funcional comum com sintoma de alarme — diferenciar. ⚠ AAS / IBPs crônicos como 'prevenção': não recomendados. ⚠ Suplementos 'antioxidantes' para prevenir CA gástrico: sem evidência forte. ⚠ Em idoso terminal: EDA sem indicação clara é P4. ⚠ NÃO insistir em 'rastrear estômago' em paciente saudável só porque 'já que estamos cuidando': sobreuso.",
calcs:[],
alertas:[
{t:"info",x:"<strong>Brasil NÃO tem rastreio populacional de CA gástrico.</strong> Foco: vigilância dirigida em alto risco + investigação de sintomáticos."},
{t:"crit",x:"Dispepsia + sinais de alarme (perda peso, sangramento, disfagia, anemia) = EDA URGENTE em qualquer idade."},
{t:"warn",x:"H. pylori em paciente com pré-malignos: ERRADICAÇÃO OBRIGATÓRIA + confirmação pós-tratamento."},
{t:"info",x:"História familiar 1º grau de CA gástrico ou caso jovem: investigar H. pylori + considerar CDH1 / oncogenética."}
],
diretriz:"INCA — Tipos de Câncer / Estômago. MS — PCDT Adenocarcinoma Gástrico no Adulto. MAPS III (Endoscopy 2019). ESGE Guidelines. AGA — Gastric Intestinal Metaplasia 2020. IARC — Estimativas globais. PNCT (tabagismo)."
},

{
id:"prevencao-cancer-primaria", contexto:["ubs"], nome:"Prevenção Primária do Câncer (síntese)", sis:"rastreio", grav:"baixa",
cid:"Z71.7", ciap:"A98",
sin:["prevenção primária câncer","fatores de risco câncer","vacina HPV","cessação tabagismo","código europeu câncer"],
def:"Síntese transversal das ações de PREVENÇÃO PRIMÁRIA do câncer na Atenção Primária — antes mesmo de qualquer rastreio. Combina vacinação (HPV, HBV), cessação do tabagismo, redução do álcool, controle do peso, atividade física, dieta, fotoproteção, redução de exposições ocupacionais. ~30-50% dos cânceres seriam evitáveis com medidas primárias.",
intro:"A maioria das ações 'oncológicas' na APS é PREVENÇÃO PRIMÁRIA — não rastreio. Estima-se que 30-50% dos cânceres seriam evitáveis com mudanças comportamentais e ambientais. Brasil tem desafios particulares: tabagismo histórico residual, etilismo, obesidade em ascensão, baixa cobertura de vacinação HPV em alguns territórios, exposição ocupacional regulada de forma insuficiente, atividade física baixa. Esta patologia consolida as principais frentes em UM lugar prático para consulta na consulta da APS.",
apresentacao:"Toda consulta de APS é oportunidade de prevenção primária do câncer — não exige consulta específica. Consultas de rotina (HAS, DM, gestante, pré-natal, puericultura, vacinas, planejamento familiar, idoso) são pontos de inserção da abordagem.",
sintomas:[
"Tabagismo — atual ou passivo",
"Consumo abusivo de álcool",
"Obesidade (especialmente abdominal)",
"Sedentarismo",
"Dieta pobre em frutas e vegetais, rica em carne processada, ultraprocessados, açúcar",
"Exposição solar ocupacional ou recreacional sem fotoproteção",
"Exposição ocupacional a carcinógenos: amianto, benzeno, sílica, agrotóxicos, hidrocarbonetos aromáticos, radiação ionizante",
"Status vacinal: HPV, hepatite B",
"Infecções crônicas oncogênicas: HPV (CCU, CP, CA cabeça/pescoço, anal), HBV/HCV (CHC), H. pylori (CA gástrico), HIV (Kaposi, linfomas, CCU, CA anal), HTLV-1 (leucemia T)",
"Uso de terapias hormonais sem indicação clara (TRH pós-menopausa, anticoncepcionais em alto risco)",
"Radiação médica cumulativa excessiva (TC repetidas sem indicação)"
],
fisio:"Carcinogênese multifatorial: iniciação (dano ao DNA) + promoção (estímulo proliferativo) + progressão (acúmulo de mutações). Fatores externos modificáveis representam ~70% da carga global de câncer (Doll & Peto, atualizado por GBD). Tabaco isoladamente é responsável por ~22% das mortes por câncer no mundo. HPV e HBV explicam cânceres específicos. Inflamação crônica (obesidade, infecções crônicas, doenças autoimunes) é via comum.",
profilaxia:"ESTA PATOLOGIA É a síntese das medidas profiláticas. Ver tabela completa em sus_tx.",
freire:"Prevenção primária é ESSENCIALMENTE EDUCATIVA — e Freire é central aqui. NÃO funciona como sermão. Funciona quando: (1) o profissional respeita o saber do paciente, (2) trabalha contextualizado (alimentação cara, lazer urbano caro, tabagismo como rede social, álcool como ritual cultural), (3) constrói metas FACTÍVEIS junto, (4) acompanha longitudinalmente. ABORDAGEM 5 A: Avalia, Aconselha, Acorda, Assistir, Acompanhar (modelo de cessação aplicável a qualquer mudança). MOTIVAÇÃO BREVE (Miller & Rollnick) — 'pra você, qual o motivo de mudar agora?'. ACS na ponta: educação contextualizada nos territórios. METÁFORA: 'a prevenção do câncer não é uma corrida — é mudar o caminho que se anda devagarinho. Um passo de cada vez'.",
sus_tx:`PROTOCOLO — Prevenção Primária do Câncer na APS:

A) CESSAÇÃO DO TABAGISMO — INTERVENÇÃO MAIS EFETIVA:
  • Tabagismo causa ~30% de TODAS as mortes por câncer (especialmente pulmão, cabeça/pescoço, bexiga, esôfago, pâncreas, rim, colo do útero, mieloide)
  • Aplicar abordagem MÍNIMA em TODA consulta:
    - PERGUNTAR sobre uso de tabaco
    - AVALIAR motivação para parar
    - ACONSELHAR a parar (mensagem clara e personalizada)
    - PREPARAR / AJUDAR a parar (data, suporte)
    - ACOMPANHAR
  • PNCT no SUS: tratamento gratuito disponível
    - Aconselhamento individual ou grupal estruturado (4 sessões iniciais, depois manutenção)
    - Terapia de reposição de nicotina (TRN): adesivo, goma, pastilha
    - Bupropiona, vareniclina (segundo critérios de inclusão)
  • Cessação reduz risco progressivamente: ~50% em 10-15 anos para CA de pulmão, mais rápido em outros

B) VACINAÇÃO PREVENTIVA:
  
  HPV (cânceres: CCU, anal, CP, cabeça/pescoço):
  • CRIANÇAS / ADOLESCENTES 9-14 anos (meninos E meninas)
  • DOSE ÚNICA desde 2024 (mudança importante — antes 2 doses)
  • Imunossuprimidos (HIV, transplantados, oncológicos): 3 doses (0-2-6m)
  • Vacina quadrivalente disponível no PNI
  • Mulheres até 45a vivendo com HIV: pode ser indicada
  • Cobertura ainda abaixo da meta — busca ativa por ACS, escola, SAÚDE NA ESCOLA
  • Eliminação do CCU como problema de saúde pública depende disso
  
  HEPATITE B (câncer: CHC):
  • Vacinação universal no nascimento (1ª dose em até 24h) + esquema pentavalente
  • Adultos não vacinados: 3 doses (0-1-6m)
  • Profissionais saúde, trabalhadores sexo, HSH, gestantes, imunossuprimidos: prioritários

C) REDUÇÃO DO CONSUMO DE ÁLCOOL:
  • Causa ~5% dos cânceres (CCEC esôfago, fígado, mama, colorretal, cabeça/pescoço)
  • NÃO HÁ dose 'segura' do ponto de vista oncológico — o risco aumenta linearmente
  • Aconselhar: <2 doses/dia homem, <1 dose/dia mulher (limite que combina cardiovascular)
  • Idealmente: <1 dose/dia ou abstinência se possível
  • Combinação álcool + tabaco multiplica risco de cabeça/pescoço
  • AUDIT-C para triagem
  • Tratamento de transtorno por uso de álcool: CAPS-AD, psicoterapia, medicamentos (naltrexona, acamprosato, dissulfiram)

D) CONTROLE DO PESO E ATIVIDADE FÍSICA:
  • Obesidade causa ~5-8% dos cânceres no Brasil (ascendente):
    - Mama pós-menopausa, endométrio, ovário, esôfago (adenoCa), pâncreas, fígado, rim, vesícula, colorretal, mieloide, mieloma, meningioma
  • IMC 18,5-24,9 + circunferência abdominal <94 H / <80 M
  • Atividade física: 150 min/sem moderada OU 75 min vigorosa + força 2x/sem
  • Reduz risco diretamente (independente do efeito sobre peso) — colorretal, mama, endométrio
  • Programa Academia da Saúde no SUS

E) DIETA:
  • REDUZIR carnes processadas (embutidos, defumados) — categoria 1 IARC (causam câncer)
  • REDUZIR carne vermelha em geral
  • REDUZIR sal, açúcar, ultraprocessados
  • AUMENTAR frutas, verduras, legumes, fibras, oleaginosas
  • Padrão MEDITERRÂNEO / DASH
  • Guia Alimentar para a População Brasileira (MS, 2014 / 2025 atualizado)
  • Amamentação exclusiva até 6m: protege mãe (CA mama) e criança (saúde futura)

F) FOTOPROTEÇÃO:
  • Reduzir exposição UV (especialmente 10h-16h)
  • Roupa, chapéu de aba larga, óculos UV
  • Protetor solar FPS ≥30, FPS ≥50 em pele clara / alta exposição
  • NÃO usar bronzeamento artificial (proibido no Brasil)
  • Atenção especial em trabalhadores rurais, construção civil, marinheiros — FPS labial e facial obrigatório, EPI por NR

G) REDUÇÃO DE EXPOSIÇÕES OCUPACIONAIS:
  • Amianto: PROIBIDO no Brasil (decisão STF 2017, ainda em implementação)
  • Sílica: exigir EPI, monitoramento ocupacional
  • Benzeno: NR-15, monitorar exposição
  • Agrotóxicos: EPI completo, treinamento, redução de uso
  • Radiação ionizante: doses ALARA, dosímetro obrigatório
  • Notificar doença ocupacional via CAT
  • Anti-tabagismo no ambiente de trabalho (Lei 12.546/2011)

H) INFECÇÕES CRÔNICAS — tratamento:
  • H. pylori (CA gástrico): erradicar conforme indicação
  • HBV/HCV (CHC): tratar conforme PCDT
  • HIV (vários cânceres): TARV adequada reduz risco
  • HPV: vacinação + rastreio CCU
  • HTLV-1 (regiões endêmicas — NE): aconselhamento e prevenção

I) USO RACIONAL DE EXAMES E MEDICAMENTOS:
  • Reduzir TC desnecessárias (radiação cumulativa)
  • Evitar TRH prolongada sem indicação clara
  • ACO em alto risco familiar: discutir
  • Imunobiológicos: vigilância de pré-malignos
  • Não 'fazer check-up de tudo' — orientado por evidência

J) DETERMINANTES SOCIAIS:
  • Reconhecer e abordar quando possível:
    - Insegurança alimentar
    - Poluição (urbana, ocupacional)
    - Pobreza limitando opções saudáveis
    - Educação
    - Acesso a serviços
  • Articular intersetorialmente (CRAS, escolas, esporte, geração de renda)`,
padrao_ouro:"WHO Cancer Prevention Framework. Código Europeu Contra o Câncer (12 recomendações). World Cancer Research Fund / AICR — Recomendações para Prevenção do Câncer. Brasil — Política Nacional de Promoção da Saúde, Plano de Ações de Doenças Crônicas (DCNT) 2021-2030. INCA — Posições e diretrizes específicas. ABRANDH, IDEC.",
prog:"Implementação adequada de medidas primárias poderia reduzir incidência global de câncer em 30-50% em décadas. Maior impacto: cessação tabagismo, vacinação HPV/HBV, redução obesidade. Programas estruturados (vacinação no PNI, PNCT, escola promotora de saúde) têm impacto populacional muito maior que ações individuais.",
acomp:"Prevenção primária é LONGITUDINAL — não é 'consulta específica'. Integrar a TODAS as consultas. Reavaliar status (tabaco, peso, vacinação) periodicamente. ACS no território. Articulação com saúde escolar, NASF, Academia da Saúde.",
p4:"⚠ Prevenção quaternária INVERSA: não TRANSFORMAR cada consulta em uma palestra moralizadora — funciona menos que abordagem motivacional respeitosa. ⚠ Não MEDICALIZAR a prevenção primária — comportamentos saudáveis NÃO dependem (em primeira linha) de remédios, suplementos, exames. ⚠ 'Suplementos antioxidantes' para prevenção: a maioria sem evidência, alguns DELETÉRIOS (beta-caroteno em fumantes aumenta CA pulmão). ⚠ AAS em prevenção primária: USPSTF 2022 mudou — NÃO recomenda mais para prevenção primária de CCR. ⚠ Vitamina D 'preventiva' em massa: evidência mista, suplementação universal NÃO recomendada. ⚠ Não converter cada paciente em 'falha de saúde pública' — fatores estruturais (pobreza, ambiente, indústria) explicam mais que escolhas individuais. ⚠ Cuidar para que rastreio NÃO substitua prevenção primária — rastrear sem orientar é trabalho pela metade.",
calcs:[],
alertas:[
{t:"info",x:"<strong>~30-50% dos cânceres são EVITÁVEIS</strong> com medidas primárias. Maior impacto: cessação tabagismo, vacinação HPV/HBV, redução obesidade/álcool."},
{t:"info",x:"Vacinação HPV: 9-14 anos, dose ÚNICA desde 2024 (ambos os sexos). Imunossuprimidos: 3 doses."},
{t:"warn",x:"PNCT oferece tratamento gratuito do tabagismo no SUS (TRN + bupropiona + vareniclina + aconselhamento)."},
{t:"info",x:"Carnes processadas: categoria 1 IARC (causam câncer). Carne vermelha: categoria 2A (provavelmente)."}
],
diretriz:"WHO Cancer Prevention. Código Europeu Contra o Câncer (12 recomendações, 4ª ed). WCRF/AICR Continuous Update Project. INCA — Posicionamentos e Diretrizes. MS — Política Nacional de Promoção da Saúde, Plano DCNT 2021-2030, PNCT, PNI, Guia Alimentar 2014/2025. Lei 12.546/2011 (ambientes coletivos). NR-15 (insalubridade)."
}

,

{
id:"sinais-alarme-oncologicos", contexto:["ubs"], nome:"Sinais de Alarme Oncológicos (bandeiras vermelhas)", sis:"rastreio", grav:"media",
cid:"R59.1", ciap:"A04",
sin:["bandeiras vermelhas câncer","sinais alarme oncológicos","red flags neoplasia","emagrecimento inexplicado","linfadenopatia"],
def:"Sintomas e sinais que devem disparar suspeita de neoplasia maligna em adulto, mesmo quando inespecíficos. Maioria dos cânceres se apresenta SINTOMÁTICA na atenção primária — não em rastreio. Reconhecer 'bandeiras vermelhas' precocemente reduz tempo até diagnóstico e melhora desfechos. Esta patologia organiza a triagem clínica do médico de família.",
intro:"Mais da metade dos diagnósticos oncológicos no Brasil ocorrem a partir de sintomas, não de rastreio. A APS é a porta de entrada — frequentemente o primeiro contato. Sinais de alarme costumam ser INESPECÍFICOS (perda de peso, fadiga, anemia), o que torna o reconhecimento difícil. Ao mesmo tempo, NÃO se pode investigar 'tudo em todos' (P4). Esta patologia oferece checklist prático de quando suspeitar.",
apresentacao:"Paciente com queixa inespecífica que pode esconder neoplasia. Atenção especial a: idade >50a, mudança recente de padrão, sintomas persistentes, sinais constitucionais (perda de peso, sudorese noturna, fadiga progressiva), achados localizatórios suspeitos.",
sintomas:[
"SINTOMAS GERAIS (sistêmicos / constitucionais):",
"  • Perda de peso INVOLUNTÁRIA ≥5% em 6 meses (ou ≥10% em 1 ano)",
"  • Fadiga PROGRESSIVA inexplicada (não relacionada a esforço, persistente)",
"  • Febre de origem indeterminada >2 semanas",
"  • Sudorese NOTURNA profusa (encharcar roupa/lençol) recorrente",
"  • Anorexia persistente",
"  • Prurido generalizado sem causa cutânea (paraneoplásico)",
"SINTOMAS HEMATOLÓGICOS:",
"  • Anemia ferropriva em HOMEM adulto OU mulher PÓS-MENOPAUSA inexplicada → investigar TGI",
"  • Pancitopenia ou bicitopenia",
"  • Sangramento inexplicado (epistaxe recorrente em adulto, gengivorragia espontânea, púrpura)",
"  • Hipercalcemia",
"  • VHS muito elevada sem foco infeccioso ou inflamatório claro",
"LINFADENOPATIA SUSPEITA:",
"  • Indolor, firme/endurecida, fixa a planos profundos",
"  • Persistente >4-6 semanas sem causa identificada",
"  • Linfonodo supraclavicular (Virchow esquerdo, sentinela direito)",
"  • Múltiplas cadeias acometidas",
"  • Adenomegalia em criança com >2 cm persistente",
"SINTOMAS DIGESTIVOS:",
"  • Disfagia OU odinofagia progressiva (esôfago)",
"  • Saciedade precoce inexplicada (gástrico, ovário)",
"  • Vômitos persistentes em adulto",
"  • Mudança RECENTE do hábito intestinal >4-6 semanas",
"  • Sangramento digestivo (melena, hematêmese, hematoquezia, sangue oculto+)",
"  • Massa abdominal palpável",
"  • Icterícia indolor (pâncreas, vias biliares)",
"  • Hepatomegalia sem causa óbvia",
"SINTOMAS RESPIRATÓRIOS:",
"  • Tosse persistente >3 semanas, especialmente em fumante",
"  • Hemoptise (mesmo escassa, mesmo única vez)",
"  • Rouquidão persistente >2 semanas (laringe, tireoide, mediastino)",
"  • Dispneia progressiva inexplicada",
"  • Dor torácica persistente",
"  • Síndrome paraneoplásica respiratória (baqueteamento digital novo)",
"SINTOMAS GENITURINÁRIOS:",
"  • Hematúria (qualquer episódio em adulto = investigar)",
"  • Sangramento vaginal pós-menopausa (endométrio até prova contrário)",
"  • Sangramento intermenstrual ou pós-coital persistente",
"  • Disúria + hematúria + emagrecimento (bexiga)",
"  • Massa testicular indolor",
"  • Sintomas urinários novos e progressivos em homem (próstata avançada)",
"NEUROLÓGICOS:",
"  • Cefaleia NOVA persistente em adulto >50a",
"  • Cefaleia com sinais focais, vômito matinal, papiledema",
"  • Convulsão de início recente em adulto",
"  • Síndrome de Horner (Pancoast — tumor de pulmão apical)",
"  • Síndrome paraneoplásica neurológica",
"DERMATOLÓGICOS:",
"  • Lesão pigmentada com ABCDE (melanoma)",
"  • Ferida que não cicatriza >4 semanas",
"  • Acantose nigricans súbita em adulto não-obeso",
"  • Sinal de Leser-Trélat (múltiplas ceratoses seborreicas súbitas)",
"  • Eritema migratório necrolítico (glucagonoma)",
"OUTROS:",
"  • Dor óssea persistente noturna em adulto, especialmente coluna",
"  • Fratura patológica (fratura por trauma mínimo)",
"  • Trombose venosa profunda sem fator de risco aparente (Trousseau)",
"  • Massa de partes moles >5cm, profunda, em crescimento"
],
fisio:"Cânceres se apresentam por: (1) efeito de massa local (sintoma localizatório), (2) invasão/obstrução (disfagia, icterícia, hematúria), (3) síndromes paraneoplásicas (hipercalcemia, SIADH, Cushing, Lambert-Eaton), (4) consumo metabólico (caquexia, anemia), (5) sintomas constitucionais (febre, sudorese — comuns em linfomas e renais), (6) achados sentinelas (linfonodo de Virchow, irmã Mary Joseph, sinal de Trousseau).",
profilaxia:"Esta patologia é sobre DETECÇÃO precoce de sintomáticos — não há 'profilaxia' aqui. Ver patologia 'prevencao-cancer-primaria' para profilaxia primária do câncer em geral.",
freire:"O desafio é equilibrar VIGILÂNCIA com NÃO PATOLOGIZAR — toda fadiga não é câncer, toda perda de peso não é câncer. Mas ALGUMAS são. Aprender o GESTO de 'parar e pensar': 'esse sintoma se encaixa em padrão habitual ou tem algo estranho?'. Ouvir o paciente: 'tô me sentindo cansado de um jeito diferente'. Em casos com sinais de alarme: comunicar a SUSPEITA sem aterrorizar. 'Estou notando algumas coisas que preciso investigar melhor — pode não ser nada, mas é melhor olhar com cuidado'. NÃO esconder. NÃO dramatizar. Em comunicação posterior ao diagnóstico: usar o protocolo SPIKES (Setting, Perception, Invitation, Knowledge, Emotion, Strategy). METÁFORA: 'os sinais de alarme são como o pisca-alerta do carro — não significa que parou, mas precisa olhar antes de seguir'.",
sus_tx:`PROTOCOLO — Triagem clínica de sinais de alarme oncológicos:

A) AVALIAÇÃO INICIAL — sempre que houver bandeira vermelha:

  ANAMNESE DIRIGIDA:
  • Caracterizar o sintoma (início, duração, evolução, fatores associados)
  • Buscar sintomas constitucionais (perda de peso quantificada, sudorese noturna, febre, fadiga)
  • Antecedentes pessoais oncológicos
  • Antecedentes familiares: oncológicos, idade do caso, parentesco
  • Hábitos: tabagismo, etilismo, ocupação, exposições
  • Vacinação HPV, hepatite B
  • Sintomas associados aparentemente não relacionados
  
  EXAME FÍSICO COMPLETO:
  • Pesquisa SISTEMÁTICA de linfonodos (cervicais, supraclaviculares, axilares, inguinais, epitrocleares)
  • Tireoide, mamas, cavidade oral
  • Tórax, abdome, fígado, baço
  • Toque retal se indicado
  • Exame ginecológico se indicado
  • Pele (corpo inteiro idealmente)
  • Avaliação neurológica básica
  • Sinais constitucionais (peso, sinais vitais, palidez, ictericia, edema)

B) EXAMES BÁSICOS NA APS (primeira camada):
  • Hemograma completo (anemia? leucocitose? plaquetopenia? VPM?)
  • Plaquetas, leucócitos diferencial
  • VHS, PCR (inflamação?)
  • Função renal e hepática (TGO, TGP, FA, GGT, bilirrubinas, creatinina, ureia)
  • Cálcio sérico (hipercalcemia paraneoplásica)
  • LDH (inespecífico mas útil em linfomas e disseminação)
  • Glicemia, perfil lipídico básico
  • TSH (sintomas constitucionais)
  • EAS / urina I
  • Ferro, ferritina, saturação se anemia
  • Sorologias: HBsAg, anti-HBc, anti-HCV, HIV (algumas neoplasias associadas)

C) EXAMES DE IMAGEM DIRIGIDOS (segunda camada — conforme suspeita):
  • RX tórax: queixa respiratória, achados sistêmicos
  • USG abdominal: hepatomegalia, massa, ictericia
  • USG cervical: linfonodo, tireoide nodular palpável
  • USG mama: nódulo mamário
  • Mamografia: ver patologia 'rastreio-mama'
  • TC tórax/abdome/pelve: investigação dirigida quando ↑↑ suspeita

D) ENCAMINHAMENTOS ESPECÍFICOS:
  • Sangramento digestivo / disfagia / massa abdominal → gastroenterologia + EDA/colonoscopia
  • Hematúria → urologia
  • Sangramento ginecológico → ginecologia
  • Linfadenopatia suspeita → biópsia (cirurgia)
  • Lesão cutânea suspeita → dermatologia / biópsia
  • Hemoptise → pneumologia
  • Sintomas neurológicos focais → neurologia + imagem urgente

E) PRIORIZAÇÃO de encaminhamento (suspeita oncológica):
  • Lei 13.896/2019: prazo MÁXIMO de 30 dias para exames diagnósticos de suspeita
  • Lei 12.732/2012: prazo MÁXIMO de 60 dias para início do tratamento
  • Identificar como SUSPEITA ONCOLÓGICA no encaminhamento (texto explícito) acelera regulação
  • Acompanhar o paciente no fluxo — APS coordena cuidado

F) SITUAÇÕES DE ENCAMINHAMENTO URGENTE (não esperar consulta normal):
  • Síndrome de veia cava superior
  • Compressão medular (dor + déficit neurológico)
  • Síndrome de lise tumoral
  • Hipercalcemia grave
  • Obstrução vias aéreas
  • Sangramento maciço
  • Pancitopenia grave com febre
  → Pronto-socorro

G) DIAGNÓSTICOS DIFERENCIAIS — não pular o óbvio antes do raro:
  • Anemia ferropriva em mulher idade fértil: menstruação primeiro
  • Perda de peso em idoso: depressão, demência, isolamento, polifarmácia também (ver patologia 'aga-mfc')
  • Fadiga: hipotireoidismo, anemia, DM, depressão, apneia do sono
  • Linfadenopatia em jovem: viral (EBV, CMV), bacteriana, autoimune
  • Sudorese noturna: tuberculose (no Brasil — sempre considerar), HIV, climatério, hipertireoidismo

H) REGISTRO PROBABILÍSTICO:
  • Documentar SUSPEITA explicitamente em prontuário (proteção médico-legal)
  • Combinar PRAZO de retorno e exames
  • Se paciente faltoso: BUSCA ATIVA (ACS) — atraso em CA é dano grave
  • Se exames vierem normais MAS sintoma persistir: repensar, reencaminhar, não abandonar`,
padrao_ouro:"NICE Guideline NG12 (Suspected cancer: recognition and referral) é o padrão internacional mais utilizado — lista sintomas com probabilidade pré-teste >3% justificando encaminhamento via 'two-week wait'. Equivalente brasileiro: critérios da Lei 13.896/2019 + protocolos UNACON/CACON. INCA — Manual de Diagnóstico Precoce do Câncer (2019).",
prog:"Diagnóstico em estágio precoce melhora desfechos substancialmente em todos os tumores. Intervalo do primeiro sintoma ao diagnóstico no Brasil é frequentemente >6 meses — janela importante para melhoria. Capacidade da APS de reconhecer e encaminhar rapidamente é central na rede oncológica.",
acomp:"Paciente em investigação: revisões frequentes, garantir adesão a exames. Resultados normais + sintoma persistente: NÃO descartar — reavaliar, considerar outros diagnósticos, repetir investigação. Resultados sugestivos: encaminhamento estruturado com fluxo de regulação. Pós-diagnóstico oncológico: APS mantém coordenação do cuidado (ver patologia futura de sobrevivente).",
p4:"⚠ NÃO investigar 'tudo em todos' — solicitar bateria oncológica completa em paciente com queixa banal e sem sinais de alarme é P4 (ansiedade, falsos positivos, custo, cascata diagnóstica). ⚠ Marcadores tumorais (CEA, CA 19-9, CA 125, alfa-fetoproteína) NÃO são exames de rastreio populacional — apenas em seguimento de neoplasia diagnosticada ou em alto risco específico. PSA tem discussão própria (ver 'rastreio-prostata'). ⚠ TC 'preventiva' / PET-CT sem indicação clara: dano com radiação e achados incidentais que geram cascata. ⚠ Não MEDICALIZAR sintomas constitucionais sutis em paciente sem sinais de alarme (ex: 'cansaço genérico' sem mais nada → P4 não vira marcador tumoral). ⚠ Mas: NÃO subestimar paciente que diz 'estou diferente' — pacientes frequentemente percebem antes dos exames. Escuta qualificada > algoritmo cego. ⚠ Em idoso terminal frágil: avaliar criteriosamente o BENEFÍCIO da investigação (algumas vezes, não investigar é a escolha mais humana — discutir com paciente/família).",
calcs:[],
alertas:[
{t:"crit",x:"Perda de peso involuntária ≥5% em 6 meses + outro sinal sistêmico = INVESTIGAR sempre. Não 'aguardar próxima consulta'."},
{t:"warn",x:"Anemia ferropriva em HOMEM adulto ou mulher pós-menopausa = investigar TGI (sangramento oculto colorretal/gástrico)."},
{t:"crit",x:"Linfonodo SUPRACLAVICULAR palpável = biópsia. Virchow esquerdo aponta TGI; direito aponta tórax."},
{t:"info",x:"Lei 13.896/2019: exames diagnósticos de suspeita oncológica em ≤30 dias. Lei 12.732/2012: tratamento em ≤60 dias do diagnóstico."}
],
diretriz:"INCA — Manual de Diagnóstico Precoce do Câncer. NICE Guideline NG12 — Suspected cancer: recognition and referral. Leis 12.732/2012 e 13.896/2019. Lei 14.238/2021 (Estatuto da Pessoa com Câncer). SPIKES protocol (Baile et al., Oncologist 2000) — comunicação de más notícias."
},

{
id:"aconselhamento-oncogenetico-aps", contexto:["ubs"], nome:"Aconselhamento Oncogenético — identificação na APS", sis:"rastreio", grav:"baixa",
cid:"Z80.9", ciap:"A99",
sin:["aconselhamento genético","oncogenética","Lynch HNPCC","BRCA","Li-Fraumeni","Amsterdam Bethesda","síndrome hereditária câncer"],
def:"Identificação na APS de pessoas com história pessoal ou familiar sugestiva de síndrome hereditária de predisposição ao câncer. ~5-10% dos cânceres têm causa hereditária identificável. Esses pacientes precisam de RASTREIO DIFERENCIADO (mais precoce, mais frequente, com métodos diferentes) e/ou cirurgia profilática. APS é frequentemente o primeiro a identificar — 'doutor, minha mãe teve mama aos 40, minha tia ovário, minha avó também...'.",
intro:"Câncer hereditário é frequentemente subdiagnosticado no Brasil. Critérios de Amsterdam II (Lynch), NCCN BRCA, Bethesda etc. permitem TRIAGEM CLÍNICA na APS — identificar candidatos a encaminhamento à oncogenética. O médico de família NÃO precisa fazer o diagnóstico genético, mas precisa SUSPEITAR e encaminhar. Acesso a oncogenética no SUS é desigual — saber o fluxo regional importa.",
apresentacao:"Paciente com história pessoal de câncer em idade jovem, múltiplos cânceres primários, OU com história familiar de múltiplos casos de câncer (especialmente do mesmo tipo, em idade jovem, em parentes próximos, múltiplas gerações).",
sintomas:[
"GENEOLOGIA — perguntar SEMPRE:",
"  • Parentes 1º grau (pais, irmãos, filhos) e 2º grau (avós, tios, sobrinhos)",
"  • Tipo de câncer, idade do diagnóstico, sexo do parente",
"  • Casos múltiplos no mesmo indivíduo (CA bilateral, segundo primário)",
"  • Lateralidade (paterna vs materna — relevante para genes ligados ao X)",
"  • Origem étnica (judeus asquenazes têm prevalência aumentada BRCA1/2)",
"BANDEIRAS para suspeitar de síndrome hereditária:",
"  • Câncer em idade jovem (geralmente <50a, alguns critérios usam <45 ou <40)",
"  • Múltiplos casos do mesmo tipo de câncer em parentes próximos",
"  • Múltiplas gerações afetadas",
"  • Câncer bilateral (mama, rim, adrenal)",
"  • Múltiplos primários no mesmo indivíduo",
"  • Tumores raros (sarcoma, CA adrenocortical, retinoblastoma)",
"  • Constelações conhecidas: mama+ovário, colorretal+endométrio+ovário, mama+sarcoma+SNC, melanoma+pâncreas",
"  • Polipose colônica (>10-100 pólipos)",
"  • CA mama em homem (raro — alerta para BRCA2)",
"  • Câncer múltiplo em parentes <50a com história familiar limitada (parentes poucos / mortes precoces)"
],
fisio:"Síndromes hereditárias mais frequentes: SÍNDROME DE LYNCH/HNPCC (mutações em MLH1, MSH2, MSH6, PMS2, EPCAM) — CCR + endométrio + ovário + outros. SÍNDROME DE CA MAMA-OVÁRIO HEREDITÁRIO (BRCA1/2, PALB2, CHEK2, ATM) — mama + ovário + pâncreas + próstata. LI-FRAUMENI (TP53) — sarcoma + mama jovem + tumor cerebral + CA adrenocortical infantil + leucemia. POLIPOSE ADENOMATOSA FAMILIAR/PAF (APC) — centenas de pólipos colônicos, CCR universal sem colectomia. PEUTZ-JEGHERS (STK11) — pólipos hamartomatosos + pigmentação muco-cutânea. COWDEN (PTEN), hemocromatose hereditária, von Hippel-Lindau, MEN1/2, neurofibromatose, retinoblastoma, etc.",
profilaxia:"Em pacientes confirmados com mutação patogênica: rastreio precoce + intensificado, em alguns casos cirurgia profilática (mastectomia bilateral em BRCA, ooforectomia, colectomia em PAF), quimioprevenção (tamoxifeno em BRCA), modificação comportamental rigorosa. Famílias completas se beneficiam de testagem em cascata.",
freire:"Genealogia oncológica é território DELICADO. Família pode trazer culpa, medo, fantasias. 'Vou ter o mesmo que meu pai teve?' Pode também encontrar resistência por estigma. ABORDAGEM cuidadosa: 'estou perguntando porque, se houver um padrão na família, eu posso te ajudar a se prevenir melhor — alguns cânceres têm forma hereditária identificável, e a gente faz acompanhamento diferente nesses casos'. Validar emoções. NÃO criar pânico — mesmo em mutação confirmada, NEM TODOS desenvolvem câncer; a maioria das pessoas com história familiar NÃO tem mutação patogênica. Em paciente com mutação confirmada: trabalhar resignificação ('saber é poder fazer'). Genograma como ferramenta gráfica ajuda paciente a visualizar o padrão. METÁFORA: 'um pouco como saber que tem antecedente de coração na família — não é destino, é informação para cuidar melhor'.",
sus_tx:`PROTOCOLO — Identificação de candidatos a aconselhamento oncogenético na APS:

A) FERRAMENTAS DE TRIAGEM — quem deve ser encaminhado:

  CRITÉRIOS PARA SÍNDROME DE LYNCH (Amsterdam II — clássico):
  • PELO MENOS 3 parentes com CA associado a Lynch (CCR, endométrio, ovário, urotelial, intestino delgado, etc.)
  • UM deve ser parente 1º grau dos outros dois
  • PELO MENOS 2 gerações sucessivas afetadas
  • PELO MENOS UM diagnosticado <50 anos
  • PAF excluída
  
  CRITÉRIOS DE BETHESDA REVISADOS (mais sensíveis — para pesquisar instabilidade microssatélite):
  • CCR diagnosticado <50 anos
  • CCR + outro câncer Lynch (síncronos ou metácronos)
  • CCR com histologia sugestiva (linfocítica, Crohn-like, mucinoso) <60a
  • CCR + 1 ou mais parentes 1º grau com câncer Lynch, um <50a
  • CCR + 2 ou mais parentes 1º/2º grau com câncer Lynch, qualquer idade
  
  CRITÉRIOS NCCN PARA SUSPEITA DE BRCA / CA MAMA-OVÁRIO HEREDITÁRIO:
  • CA mama <50 anos
  • CA mama triplo-negativo <60 anos
  • CA mama bilateral
  • CA mama em HOMEM (qualquer idade)
  • CA mama + CA ovário no mesmo indivíduo
  • CA mama + 2 ou mais parentes 1º/2º grau com mama, ovário, pâncreas, ou próstata
  • CA ovário epitelial (qualquer idade) — todas devem fazer teste
  • CA pâncreas com história familiar
  • Origem judia asquenaze + CA mama, ovário ou próstata
  
  LI-FRAUMENI (Chompret revisado):
  • Sarcoma <46a + parente 1º grau com câncer Li-Fraumeni
  • Múltiplos primários em mesmo indivíduo (≥2), com um <46a
  • CA mama <31a sem mutação BRCA
  • Sarcoma raro em criança ou adolescente
  
  POLIPOSE ADENOMATOSA FAMILIAR (PAF):
  • ≥10 adenomas em colonoscopia
  • Adenomas + tumores extracolônicos típicos (osteomas, cistos epidermoides, desmoides, hepatoblastoma)
  • História familiar de PAF

B) GENOGRAMA — ferramenta básica na APS:
  • Desenhar 3 gerações
  • Marcar parentes afetados com idade do diagnóstico
  • Identificar padrões (lateralidade, idade jovem, múltiplos casos)
  • Útil mesmo se conclusão for 'não preencher critério' — documenta vigilância

C) FLUXO DE ENCAMINHAMENTO:
  • Identificar critério positivo → ENCAMINHAR para oncogenética
  • No Brasil: serviços em hospitais oncológicos (CACON/UNACON), centros universitários, alguns serviços estaduais
  • Sisreg do município define fluxo
  • Em região sem oncogenética: encaminhar oncologia clínica ou cirurgia oncológica para avaliação inicial
  • Documentar GENOGRAMA + critério atendido no encaminhamento (acelera regulação)

D) APÓS CONFIRMAÇÃO GENÉTICA — rastreio diferenciado coordenado pela APS:

  LYNCH confirmada:
  • Colonoscopia a partir de 20-25 anos, a cada 1-2 anos
  • EDA a partir de 30-35 anos, a cada 3-5 anos
  • Endométrio: USG TV + biópsia endometrial anual a partir 30-35a
  • Considerar histerectomia + salpingooforectomia bilateral após prole completa (geralmente >40a)
  • Avaliação urológica periódica
  
  BRCA1/2 confirmada (mulher):
  • Mamografia + RM mama anual a partir 25-30a (alternadas)
  • Exame clínico mamas a cada 6 meses
  • USG transvaginal + CA 125 a partir 30-35a
  • Discussão de salpingooforectomia profilática 35-40a (BRCA1) ou 40-45a (BRCA2)
  • Discussão de mastectomia profilática bilateral
  • Quimioprevenção com tamoxifeno (decisão individualizada)
  
  BRCA1/2 confirmada (homem):
  • Exame clínico mamário anual a partir 35a
  • PSA discutido a partir 40-45a
  • Outras (pâncreas, melanoma): individualizado

  LI-FRAUMENI:
  • Programa de vigilância MULTIORGÂNICA intenso (RM corpo inteiro anual, mama, cérebro, abdome)
  • Evitar radiação não essencial (incluindo radioterapia)

  PAF:
  • Sigmoidoscopia anual a partir 10-12a
  • EDA a partir 25-30a
  • Colectomia profilática indicada (geralmente 15-25a)
  • Vigilância pós-cirúrgica do estoma/bolsa
  • Avaliação para osteomas, desmoides

E) TESTAGEM EM CASCATA:
  • Mutação confirmada no probando → oferecer teste para parentes adultos 1º grau
  • Crianças geralmente NÃO testadas (decisão para idade adulta), exceto síndromes pediátricas (PAF, retinoblastoma)
  • Aconselhamento pré e pós-teste com profissional habilitado

F) ASPECTOS ÉTICOS:
  • Autonomia: teste é ESCOLHA do paciente
  • Confidencialidade: implicações familiares precisam ser pactuadas
  • Direito de NÃO saber (teste preditivo)
  • Aspectos previdenciários e ocupacionais (proteção legal contra discriminação)
  • Saúde mental: oferecer apoio psicológico antes e depois`,
padrao_ouro:"NCCN Guidelines — Genetic/Familial High-Risk Assessment: Breast, Ovarian, and Pancreatic; Colorectal. Atualizadas anualmente. Critérios de Amsterdam II e Bethesda Revisados (clássicos). Critérios de Chompret para Li-Fraumeni. ESMO e ASCO têm diretrizes específicas. SBOC + Sociedade Brasileira de Oncogenética. Painéis multigênicos por NGS é o padrão atual.",
prog:"Identificação e manejo adequado de síndromes hereditárias reduz substancialmente mortalidade familiar — vigilância organizada + cirurgia profilática podem reduzir mortalidade por CA mama em BRCA em >80%. Maior parte da subutilização ocorre por DESCONHECIMENTO do médico e do paciente — APS atenta MUDA o curso de famílias inteiras.",
acomp:"Pré-encaminhamento: documentar genograma. Pós-confirmação: rastreio diferenciado coordenado, articulação multidisciplinar (oncologista, mastologista, cirurgia, ginecologia, gastro, psicologia). Famílias com mutação: testagem em cascata. APS mantém vínculo longitudinal e cuidado integral.",
p4:"⚠ NÃO testar TODO paciente que pergunta 'tenho histórico na família' — critérios existem por uma razão. ⚠ Teste genético sem aconselhamento prévio: erro grave. Resultado precisa ser interpretado por profissional habilitado. ⚠ Variantes de significado incerto (VUS) são frequentes — NÃO devem mudar conduta clínica isoladamente, não tratar como mutação patogênica. ⚠ Mutação CONFIRMADA não é destino: penetrância varia. Comunicar com nuance. ⚠ Testagem em criança para síndromes do adulto (BRCA, Lynch) NÃO é recomendada — pode prejudicar desenvolvimento e autonomia. ⚠ Cirurgia profilática é DECISÃO INDIVIDUAL — não pressionar. ⚠ Cuidado com 'testes genéticos comerciais' (23andMe, ancestralidade): não detectam todas variantes, podem dar falsa segurança. ⚠ Aspectos psicológicos do teste: oferecer suporte SEMPRE. ⚠ Discriminação ocupacional/previdenciária por resultado genético: orientar paciente sobre proteção legal.",
calcs:[],
alertas:[
{t:"info",x:"<strong>~5-10% dos cânceres</strong> têm causa hereditária identificável. APS é frequentemente o primeiro a suspeitar."},
{t:"warn",x:"Câncer em &lt;50a + história familiar + múltiplos casos = considerar encaminhar oncogenética. Documentar genograma!"},
{t:"info",x:"CA ovário em qualquer idade: testagem BRCA indicada para TODAS [NCCN]. CA mama em homem: idem."},
{t:"info",x:"Síndrome de Lynch: colonoscopia 20-25a, a cada 1-2 anos. BRCA: mamografia + RM 25-30a anuais alternadas. Coordenar pela APS."}
],
diretriz:"NCCN — Genetic/Familial High-Risk Assessment Guidelines (Breast/Ovarian/Pancreatic; Colorectal). Critérios de Amsterdam II. Critérios de Bethesda Revisados. Chompret revisado (Li-Fraumeni). Sociedade Brasileira de Oncogenética. ESMO Clinical Practice Guidelines."
},

{
id:"direitos-paciente-oncologico-sus", contexto:["ubs"], nome:"Direitos do Paciente Oncológico no SUS", sis:"rastreio", grav:"baixa",
cid:"Z71.1", ciap:"A99",
sin:["direitos paciente câncer","Lei 12732","Lei 13896","Lei 14238","Estatuto pessoa com câncer","isenção IPI câncer","FGTS câncer","BPC oncológico"],
def:"Conjunto de direitos legais do paciente oncológico no Brasil — fundamental para navegação do SUS, benefícios assistenciais e proteção social. APS tem papel central em INFORMAR, orientar fluxos e articular intersetorialmente. Marco legal principal: Lei 12.732/2012 (60 dias), Lei 13.896/2019 (30 dias para investigação), Lei 14.238/2021 (Estatuto da Pessoa com Câncer).",
intro:"Diagnóstico de câncer não é só clínico — é também social, jurídico, previdenciário, trabalhista. Paciente vulnerável pode perder direitos por desconhecimento. APS frequentemente é o ponto de contato regular com sistema de saúde e socioassistencial — ideal para orientar. Não é trabalho de assistente social isolado: médico de família com noção dos direitos consegue articular CRAS, CAPS, Defensoria, ONG. Esta patologia consolida as informações práticas.",
apresentacao:"Paciente com diagnóstico oncológico confirmado, em investigação, em tratamento ou pós-tratamento — para orientação sobre direitos e fluxos. Familiares também têm direitos correlatos (acompanhante, etc.).",
sintomas:[
"Diagnóstico oncológico (qualquer estágio)",
"Investigação ativa de suspeita oncológica (Lei 13.896/2019 aplicável)",
"Demora no início do tratamento >60 dias (Lei 12.732/2012)",
"Necessidade de tratamento fora de domicílio",
"Dificuldade financeira durante tratamento",
"Necessidade de afastamento do trabalho",
"Dificuldade de acesso ao tratamento",
"Pediatria oncológica (direitos específicos: educação hospitalar, acompanhante integral)"
],
fisio:"Marco legal brasileiro construído nas últimas décadas: Constituição 1988 (saúde como direito), SUS Lei 8.080/1990, Lei do Câncer 12.732/2012, atualizações e ampliações. Política Nacional de Atenção Oncológica (atual portaria de consolidação). Sistema dual: assistência clínica (SUS) + benefícios sociais (INSS, Assistência Social) + jurídicos (Defensoria, MP).",
profilaxia:"Não se aplica — esta patologia é sobre direitos pós-diagnóstico.",
freire:"Paciente oncológico vulnerável é frequentemente também vulnerável socialmente. Em comunidades empobrecidas: muitos NÃO sabem o que têm direito. Orientar com clareza e simplicidade: 'você tem direito a tratamento gratuito, a passagem para o hospital, a benefício se não puder trabalhar, a aposentadoria especial, a sacar FGTS'. NÃO é discurso de assistente social distante — é prática integrada à consulta. ARTICULAR com CRAS (assistência social), Defensoria Pública, ONGs (Instituto Oncoguia, Vencer o Câncer, GRAACC em pediatria). Em paciente desinformado: forneça LISTA escrita das opções. Família vulnerável aprende lentamente — vá repetindo a cada visita. METÁFORA: 'tem um monte de direito escondido — vamos pegando uma coisa de cada vez'.",
sus_tx:`PROTOCOLO — Orientação de direitos do paciente oncológico:

A) PRAZOS LEGAIS DE ACESSO:

  LEI 13.896/2019 — INVESTIGAÇÃO DE SUSPEITA ONCOLÓGICA:
  • Prazo MÁXIMO de 30 DIAS para realização dos exames diagnósticos
  • Aplica-se quando há solicitação fundamentada do médico de suspeita
  • Garantia constitucional do direito à saúde
  • Aplicável tanto rede pública quanto convênios (interpretação judicial)
  
  LEI 12.732/2012 — INÍCIO DO TRATAMENTO:
  • Prazo MÁXIMO de 60 DIAS para início do tratamento oncológico após confirmação diagnóstica
  • Diagnóstico = registro patológico (anatomopatológico)
  • Tratamento = cirurgia, radio, quimio, hormônio ou cuidados paliativos
  • Aplica-se a todo SUS
  
  LEI 14.238/2021 — ESTATUTO DA PESSOA COM CÂNCER:
  • Atendimento integral pelo SUS (médico + psicológico + medicamentos + paliativos + dor)
  • Atendimento prioritário em processos administrativos e judiciais
  • Direito a acompanhante durante todo o atendimento
  • Acolhimento familiar preferencial (não institucionalização desnecessária)
  • Acesso à assistência social e jurídica
  • Educação em classe hospitalar para crianças/adolescentes

B) BENEFÍCIOS ASSISTENCIAIS / TRABALHISTAS:

  ISENÇÃO DE IMPOSTO DE RENDA:
  • Aposentados ou pensionistas com diagnóstico oncológico (mesmo após cura, conforme jurisprudência atual)
  • Isenção sobre proventos de aposentadoria/pensão (não sobre outros rendimentos)
  • Solicitar via INSS ou órgão pagador, com laudo médico oficial
  
  SAQUE DO FGTS E PIS/PASEP:
  • Paciente com câncer OU dependente com câncer
  • Saque do FGTS: Caixa, com atestado médico CID-10 oncológico
  • PIS/PASEP: idem
  
  AUXÍLIO-DOENÇA E APOSENTADORIA POR INVALIDEZ:
  • Auxílio-doença (B31): incapacidade temporária, prazo do tratamento
  • Aposentadoria por invalidez (B32): se não houver recuperação
  • Sem carência (12 contribuições) para câncer — Lei 8.213/1991
  • Solicitar via Meu INSS com laudo oncológico
  
  BPC (Benefício de Prestação Continuada — LOAS):
  • R$ 1 salário mínimo / mês
  • Não-contribuinte do INSS + renda familiar per capita ≤1/4 SM
  • Idoso ≥65a OU pessoa com deficiência (CA pode se enquadrar conforme avaliação)
  • Solicitar via Meu INSS
  
  ISENÇÃO DE IPI/IPVA/ICMS PARA AUTO ADAPTADO:
  • Em casos de deficiência decorrente do tratamento (mastectomizada, amputada, etc.)
  • Procedimento via Receita Federal + DETRAN estadual
  
  ANDAMENTO PRIORITÁRIO DE PROCESSOS JUDICIAIS:
  • Lei 12.008/2009 + Lei 14.238/2021
  • Idoso, deficiente, pessoa com câncer
  • Solicitar via petição
  
  RESERVA DE VAGAS EM ESTACIONAMENTO, FILA PRIORITÁRIA, etc.

C) NAVEGAÇÃO NO SUS:

  REDE ONCOLÓGICA:
  • UNACON (Unidade de Assistência de Alta Complexidade em Oncologia)
  • CACON (Centro de Assistência de Alta Complexidade em Oncologia) — porte maior
  • Regulação via Sisreg do estado/município
  • Referência conforme território (PCDT regional)
  
  TFD — TRATAMENTO FORA DE DOMICÍLIO:
  • Quando o município/região não oferece o tratamento
  • Direito a passagem, ajuda de custo, hospedagem, acompanhante
  • Solicitar via Secretaria Municipal de Saúde
  • Documentação: relatório médico + comprovante residência + agendamento
  
  MEDICAMENTOS ONCOLÓGICOS:
  • Quimioterápicos e medicamentos cobertos: fornecidos pelo UNACON/CACON
  • Sintomáticos (analgesia, antiemético, etc.): farmácia hospitalar ou municipal
  • Componente especializado (CEAF): alguns medicamentos via Sec Estadual de Saúde
  • Judicialização: último recurso para medicamento não incorporado

D) DIREITOS DE PEDIATRIA ONCOLÓGICA (Lei 14.238/2021):
  • Atendimento integral universal
  • Acompanhante integral durante internação (Lei 11.104/2005 já garantia)
  • Aula em hospital ou domicílio (classe hospitalar)
  • Apoio psicossocial à família
  • ONGs específicas: GRAACC, Casa Ronald McDonald, ABRALE, INSTITUTO RONALD MCDONALD

E) APOIO PSICOSSOCIAL E REDE DE SUPORTE:

  ORGANIZAÇÕES DE PACIENTES:
  • Instituto Oncoguia — informação geral
  • Instituto Vencer o Câncer
  • Femama (CA mama)
  • Lado a Lado pela Vida (CA mama)
  • ABRALE (leucemias e linfomas)
  • Movimento Todos Juntos Contra o Câncer
  • Grupos locais municipais
  
  CRAS / CREAS / CAPS:
  • Articulação intersetorial pela APS
  • CRAS para benefícios sociais e cadastro CadÚnico
  • CREAS se há violência intrafamiliar associada
  • CAPS se sofrimento psíquico significativo
  
  DEFENSORIA PÚBLICA:
  • Acesso GRATUITO a assistência jurídica
  • Pode acionar Estado para garantir tratamento, acelerar fluxo, judicializar medicamento
  • Defensoria também tem Núcleos especializados (Saúde, Direitos Humanos)
  
  MINISTÉRIO PÚBLICO:
  • Em violação de direitos coletivos (filas, falta de tratamento)

F) ARTICULAÇÃO PELA APS:
  • IDENTIFICAR demanda na consulta
  • INFORMAR direitos (cartilha INCA é boa referência)
  • DOCUMENTAR no prontuário com laudo claro
  • ARTICULAR com assistente social da UBS / CRAS
  • ACOMPANHAR longitudinalmente
  • Se atraso/violação: encaminhar a Ouvidoria do SUS, Defensoria, MP`,
padrao_ouro:"Marco legal brasileiro consolidado: Lei 12.732/2012, Lei 13.896/2019, Lei 14.238/2021, Lei 8.213/1991 (previdência), Lei Orgânica da Assistência Social (LOAS) — Lei 8.742/1993. INCA — Cartilha 'Direitos da Pessoa com Câncer'. Defensorias Públicas estaduais. Política Nacional para a Prevenção e Controle do Câncer (PNCC).",
prog:"Conhecer direitos REDUZ desigualdade de desfechos. Pacientes orientados acessam tratamento mais rapidamente, recebem benefícios sociais durante incapacidade, mantêm dignidade. Atraso por desinformação é dano evitável.",
acomp:"Acompanhar longitudinalmente — direitos são acionados em diferentes fases. APS é o lugar onde paciente volta sempre, é o melhor coordenador. Documentar tudo. Articular com assistente social. Quando necessário, escalar (Ouvidoria, Defensoria, MP).",
p4:"⚠ NÃO esperar paciente saber pedir — informar proativamente. ⚠ Não criar judicialização desnecessária para o que pode ser obtido administrativamente — orientar fluxo correto. ⚠ Cuidar para benefícios não criarem fixação no papel de doente (BPC, aposentadoria por invalidez quando há boas chances de retorno laboral — discussão sensível). ⚠ Não rotular paciente como 'paciente terminal' apenas para acelerar direitos — pode ter consequências iatrogênicas no autocuidado. ⚠ Em pacientes curados ou em remissão duradoura: revisar quais direitos persistem (isenção IR permanece, aposentadoria depende, etc.). ⚠ Pacientes sem documentação (sem CPF, sem comprovante de residência, em situação de rua, indígenas, refugiados): articular CRAS para resolver documentação SIMULTANEAMENTE ao tratamento — caso contrário, direitos não se concretizam. ⚠ Atenção: Estatuto da Pessoa com Câncer teve VETO ao artigo de 'medicamento mais eficaz' — não significa acesso garantido a todo medicamento de nova geração; PCDT vigentes ainda regem disponibilidade no SUS.",
calcs:[],
alertas:[
{t:"crit",x:"<strong>Lei 12.732/2012:</strong> tratamento oncológico em até 60 dias após diagnóstico. <strong>Lei 13.896/2019:</strong> exames diagnósticos em até 30 dias após suspeita."},
{t:"info",x:"<strong>Lei 14.238/2021 (Estatuto):</strong> atendimento integral, prioritário, acompanhante, acolhimento familiar, classe hospitalar pediátrica."},
{t:"info",x:"Saque FGTS/PIS + isenção IR aposentadoria + auxílio-doença sem carência + BPC se baixa renda. INFORMAR proativamente."},
{t:"warn",x:"TFD (Tratamento Fora de Domicílio): direito a passagem, hospedagem, acompanhante quando município não oferece. Solicitar Sec Municipal de Saúde."}
],
diretriz:"Lei 12.732/2012; Lei 13.896/2019; Lei 14.238/2021 (Estatuto da Pessoa com Câncer); Lei 8.213/1991 (Previdência); Lei 8.742/1993 (LOAS); Política Nacional para Prevenção e Controle do Câncer (PNCC). INCA — Cartilha de Direitos. Defensorias Públicas estaduais."
},

{
id:"rastreio-pvhiv-imunossuprimido", contexto:["ubs"], nome:"Rastreio Oncológico em PVHIV e Imunossuprimidos", sis:"rastreio", grav:"media",
cid:"Z11.4", ciap:"B90",
sin:["rastreio PVHIV","câncer HIV","CA anal HSH","Kaposi","linfoma","CCU HIV","imunossupressão câncer","citologia anal"],
def:"Protocolo DIFERENCIADO de rastreio oncológico em pessoas vivendo com HIV (PVHIV), transplantados, em terapia imunobiológica e outros imunossuprimidos. Risco aumentado para múltiplos cânceres: cervical, anal, Kaposi, linfoma não-Hodgkin, pulmão, fígado, pele. Protocolos mais precoces e frequentes que população geral. PCDT PVHIV vigente.",
intro:"HIV mesmo bem controlado (TARV adequada, CD4 normal) tem risco aumentado de câncer — tanto neoplasias DEFINIDORAS DE AIDS (CCU invasivo, sarcoma de Kaposi, linfoma não-Hodgkin) quanto NÃO-DEFINIDORAS (anal, pulmão, fígado, pele, cabeça/pescoço, anus). Imunossuprimidos não-HIV (transplantados, imunobiológicos) compartilham parte deste perfil. Esta patologia consolida o RASTREIO DIFERENCIADO necessário.",
apresentacao:"PVHIV em acompanhamento longitudinal, transplantado, paciente em uso crônico de imunobiológicos (anti-TNF, rituximabe, etc.), em quimioterapia, em corticoide crônico alto, ou imunodeficiência primária.",
sintomas:[
"PVHIV: status sorológico, ano do diagnóstico, esquema TARV, CD4 atual e nadir, carga viral",
"Transplantados: tipo de transplante, ano, imunossupressão atual",
"Imunobiológicos: substância, indicação, tempo de uso",
"Corticoide crônico: ≥7,5 mg prednisolona/dia por ≥3 meses → considerar imunossuprimido",
"História sexual completa (HSH em PVHIV — CA anal)",
"Vacinação: HPV, HBV completas?",
"Sinais sugestivos de neoplasia (ver patologia 'sinais-alarme-oncologicos')",
"Lesões cutâneas violáceas/violetas (suspeita de Kaposi)",
"Linfadenopatia persistente",
"Lesões anais (HPV, neoplasia intraepitelial anal — NIA)",
"Sangramento anal, prurido anal persistente, lesão anal palpável"
],
fisio:"Imunossupressão crônica aumenta risco oncológico por: (1) reativação de oncovírus (HPV, HHV-8 / Kaposi, EBV, HBV/HCV), (2) redução de vigilância imune contra células malignas, (3) inflamação crônica, (4) fatores compartilhados (tabagismo, álcool, IST). Em PVHIV: risco diminui com TARV adequada mas NÃO normaliza completamente. CD4 baixo correlaciona com Kaposi, linfoma SNC, alguns linfomas. CA cervical e anal são impulsionados por HPV oncogênico em mucosa imunocomprometida.",
profilaxia:"Vacinação HPV (3 doses, esquema diferenciado em imunossuprimidos), vacinação HBV (resposta pode ser inferior — verificar anti-HBs pós-vacina, considerar doses adicionais), cessação tabagismo (fundamental — pulmão tem incidência ↑), TARV adequada (controle imune), preservativo (HPV, HBV, HCV), tratamento de coinfecções (HBV, HCV).",
freire:"Acolhimento sem estigma. PVHIV frequentemente carrega trauma de discriminação histórica. Trabalho colaborativo com SAE (Serviço de Atendimento Especializado). Em HSH: ABERTURA respeitosa sobre práticas sexuais para indicar CA anal. NÃO impor. Pacientes recém-diagnosticados em fase de aceitação: ir devagar. Em paciente com boa adesão crônica: 'além da TARV, vamos cuidar de algumas coisas mais a longo prazo'. Comunicação não-julgadora. PROTEÇÃO contra discriminação (HIV é dado sensível — registro com cuidado). METÁFORA: 'a TARV cuida do vírus em si, e a gente cuida das outras consequências que o vírus pode trazer ao longo do tempo'.",
sus_tx:`PROTOCOLO — Rastreio oncológico em PVHIV e imunossuprimidos:

A) CÂNCER DO COLO DO ÚTERO EM MULHERES PVHIV:
  • Início do rastreio: aos 21 anos (mais cedo que população geral que inicia 25)
  • Método: citologia OU DNA-HPV oncogênico (conforme disponibilidade)
  • Periodicidade: ANUAL (não bienal nem quinquenal)
  • NÃO encerrar aos 64 anos — continuar enquanto status imune ativo
  • Em CD4 <200: ainda mais vigilância (alguns guidelines sugerem 2x/ano se citologia recente alterada)
  • Qualquer alteração → COLPOSCOPIA imediata (não 'observar')
  • Vacinação HPV: 3 doses no esquema PVHIV (não dose única)

B) CÂNCER ANAL — PVHIV (especialmente HSH) e outras populações de risco:
  • Não há rastreio organizado no SUS, mas SBCP e várias sociedades recomendam vigilância
  
  POPULAÇÕES DE MAIOR RISCO:
  • HSH PVHIV (risco 80-100x população geral!)
  • Mulheres PVHIV com histórico de CCU/NIC alto grau
  • Receptores de transplante de órgão
  • PVHIV em geral (risco moderado)
  • Mulheres com história de CA vulva ou anal
  
  MÉTODOS:
  • Inspeção e toque retal periódicos
  • Citologia anal (Papanicolaou anal): coleta de swab citológico do canal anal
  • Anuscopia de alta resolução em casos suspeitos (centros especializados)
  
  PERIODICIDADE proposta (não consensual no SUS):
  • Anual em alto risco (HSH PVHIV, mulher PVHIV com história de lesão cervical alto grau, transplantado)
  • A cada 1-3 anos em PVHIV sem fatores adicionais
  
  RESULTADO:
  • ASC-US / LSIL / HSIL anal → anuscopia de alta resolução + biópsia se lesão
  • Tratamento de NIA alto grau pode prevenir progressão para CA invasivo
  
  Vacinação HPV: PROTEÇÃO importante

C) SARCOMA DE KAPOSI (HHV-8):
  • Lesões cutâneas/mucosas violáceas, máculas, placas ou nódulos
  • Suspeitar em PVHIV com CD4 baixo (especialmente <200) ou TARV recente (síndrome de reconstituição)
  • Localizações comuns: pele (perna, face), mucosa oral (palato), pulmão (mais grave), TGI
  • EXAME CUTÂNEO + ORAL em TODA consulta de PVHIV — rastreio gratuito
  • Lesão suspeita → biópsia
  • Tratamento: TARV é o principal (reconstituição imune); quimio sistêmica em Kaposi avançado

D) LINFOMA NÃO-HODGKIN:
  • Risco ↑↑ em PVHIV, especialmente linfomas agressivos (LNH de células B, linfoma primário de SNC)
  • Linfoma de Hodgkin também ↑ (paradoxalmente NÃO é definidor de AIDS)
  • Sintomas: linfadenopatia persistente, sintomas B (febre, sudorese, perda de peso), citopenias
  • Sem rastreio específico — diagnóstico precoce em sintomáticos
  • Linfadenopatia >2cm persistente em PVHIV: BIÓPSIA

E) CÂNCER DE PULMÃO:
  • Risco ↑ em PVHIV (mesmo após ajuste para tabagismo)
  • Tabagismo é prevalente em PVHIV (>50% em muitos estudos)
  • CESSAÇÃO TABÁGICA é a intervenção MAIS importante
  • Critério SBPT/SBCT para TCBD anual aplica-se igual em PVHIV
  • Alguns guidelines sugerem critério mais frouxo (50a, ≥10 maços-ano em vez de ≥20) — em discussão

F) CÂNCER HEPATOCELULAR (CHC):
  • Risco ↑↑ em coinfecção HIV/HBV ou HIV/HCV
  • Mesmo após cura do HCV (SVR), risco permanece se houver cirrose
  • Vigilância: US + AFP a cada 6 meses (ver patologia 'rastreio-chc-cirrose')
  • Tratamento adequado das hepatites virais coinfectadas
  • Vacinação HBV obrigatória se anti-HBs negativo

G) CÂNCER DE PELE:
  • Risco aumentado em PVHIV e TRANSPLANTADOS (especialmente CEC)
  • Transplantados de órgão sólido têm risco 65-100x para CEC cutâneo
  • Exame dermatológico anual em transplantados de longa data
  • Fotoproteção rigorosa, autoexame
  • Ver patologia 'rastreio-pele'

H) CÂNCER DE CABEÇA E PESCOÇO:
  • Risco ↑ em PVHIV (HPV + tabagismo + álcool em sinergia)
  • Exame oral em toda consulta
  • Ver patologia 'rastreio-boca-cp'

I) IMUNOSSUPRIMIDOS NÃO-HIV — protocolos similares:

  TRANSPLANTADOS DE ÓRGÃO SÓLIDO:
  • Maior risco de CA pele (CEC), CA cabeça e pescoço, CCU, CA anal, linfomas pós-transplante (PTLD), CHC, renal
  • Dermatologia anual a partir do 1º ano pós-transplante
  • CCU anual se órgão feminino
  • Avaliação periódica orientada pelo serviço transplantador

  USO CRÔNICO DE IMUNOBIOLÓGICOS:
  • Anti-TNF (infliximabe, adalimumabe): risco moderado de linfoma, CA pele
  • Rituximabe: linfoma, infecções
  • Avaliação pré-tratamento de oncológica + dermatológica
  • Vigilância anual

  CORTICOIDE CRÔNICO:
  • Menor que biológicos, mas presente
  • CA pele em uso prolongado é o mais reconhecido
  • Vigilância oportunística

J) VACINAÇÃO em imunossuprimidos:
  • HPV: 3 doses (esquema diferenciado, ver CRIE)
  • HBV: 3 doses, conferir anti-HBs, doses adicionais se necessário
  • Influenza anual
  • Pneumo 13 e 23 conforme esquema
  • Outras conforme PCDT
  • Vacinas VIVAS contraindicadas: BCG, FA (geralmente), tríplice viral, varicela (relativo) — exceto algumas situações específicas

K) ARTICULAÇÃO APS + SAE:
  • PVHIV é frequentemente acompanhada no SAE para HIV-específico
  • Rastreio oncológico e cuidado integral pode ser feito na APS — articulação importante
  • Compartilhamento de informação clínica (prontuário compartilhado idealmente)`,
padrao_ouro:"PCDT Manejo da Infecção pelo HIV em Adultos (MS) — atualização periódica. NCCN Survivorship Guidelines. CDC Guidelines for HIV. EACS European AIDS Clinical Society Guidelines. American Society of Clinical Oncology / IDSA. SBI (Sociedade Brasileira de Infectologia).",
prog:"Rastreio diferenciado adequado reduz mortalidade significativamente em PVHIV — particularmente CCU (rastreio anual reduz incidência). Kaposi: TARV adequada cura/controla maioria dos casos cutâneos. CA anal: detecção precoce + tratamento de NIA reduz progressão. Subutilização do rastreio em PVHIV é problema importante no Brasil.",
acomp:"PVHIV: acompanhamento longitudinal articulado entre SAE e APS. Citologia ginecológica anual + exame anal + dermatológico em cada consulta + atenção a sintomas B. Transplantados: protocolos do serviço transplantador + APS para integralidade. Imunobiológicos: vigilância integrada com especialista que prescreve.",
p4:"⚠ NÃO aplicar protocolo de POPULAÇÃO GERAL em PVHIV — risco diferente exige rastreio diferente. ⚠ NÃO esperar 25 anos para iniciar CCU em PVHIV — começar 21 anos. ⚠ NÃO encerrar CCU em PVHIV >64a se imunossupressão ativa. ⚠ Citologia anal NÃO é universalmente disponível no SUS — em locais sem acesso, ao menos exame digital retal + inspeção. ⚠ Não banalizar Kaposi como 'manchinha' — biopsiar. ⚠ Em PVHIV bem controlada com CD4 normal há ANOS: ainda manter rastreio diferenciado — risco não normaliza completamente. ⚠ Vacinação atrasada em imunossuprimido: NÃO desistir — sempre completar/atualizar conforme tolerância. ⚠ Cuidado com 'over-screening' em PVHIV terminal frágil — discutir objetivos de cuidado. ⚠ Profissionais que NUNCA atenderam PVHIV: solicitar matriciamento, articular SAE — não 'fazer do jeito que dá'.",
calcs:[],
alertas:[
{t:"crit",x:"<strong>CCU em PVHIV:</strong> rastreio ANUAL a partir dos 21a, sem encerrar aos 64. Diferente da população geral."},
{t:"warn",x:"<strong>HSH PVHIV:</strong> risco de CA anal é 80-100x maior. Considerar vigilância anual (citologia anal + anuscopia se disponível)."},
{t:"info",x:"Vacinação HPV em PVHIV: 3 doses (não dose única como população geral). Vacina HBV: conferir anti-HBs pós-vacina."},
{t:"warn",x:"Lesão violácea cutânea/oral em PVHIV: pensar em Kaposi. Biopsiar. TARV é o principal tratamento."}
],
diretriz:"MS — PCDT Manejo da Infecção pelo HIV em Adultos (atualizada periodicamente). PCDT Hepatites Virais. EACS Guidelines. CDC HIV Guidelines. NCCN Survivorship Guidelines. SBI — Sociedade Brasileira de Infectologia."
},

{
id:"nao-rastreio-tireoide", contexto:["ubs"], nome:"NÃO Rastrear Câncer de Tireoide (caso paradigmático de P4)", sis:"rastreio", grav:"baixa",
cid:"Z71.7", ciap:"T81",
sin:["não rastreio tireoide","sobrediagnóstico tireoide","Coreia tireoide","P4 tireoide","USG tireoide rotina","check-up tireoide"],
def:"Patologia EDUCATIVA sobre por que NÃO se deve rastrear câncer de tireoide em assintomáticos. Caso paradigmático de SOBREDIAGNÓSTICO em saúde — a 'epidemia' coreana mostra como rastreio amplo pode multiplicar diagnósticos sem reduzir mortalidade. INCA, USPSTF (recomendação D), ATA: NÃO recomendam rastreio populacional. CA tireoide é exemplo didático perfeito para entender Prevenção Quaternária.",
intro:"Esta é uma 'anti-patologia' — existe para EDUCAR sobre o que NÃO fazer e POR QUÊ. CA tireoide é o caso clínico mais ilustrativo de sobrediagnóstico em medicina contemporânea. A epidemia coreana é caso de estudo mundial: introdução de USG cervical de rotina aumentou incidência em 15x, sem mudar mortalidade. Centenas de milhares de pacientes foram tireoidectomizados desnecessariamente — sequelas (hipotireoidismo permanente, hipoparatireoidismo, lesão de nervo laríngeo recorrente) sem benefício. Patologia útil para responder pacientes que pedem 'USG tireoide preventiva' e para ensinar P4.",
apresentacao:"Paciente assintomático solicitando USG cervical 'preventiva' OU paciente vindo com USG já feita mostrando nódulos pequenos OU médico considerando solicitar tireoide em check-up de rotina.",
sintomas:[
"PERGUNTAR EXPLICITAMENTE — não rastrear, apenas se houver:",
"  • Nódulo cervical PALPÁVEL (avaliação clínica indicada — não 'rastreio')",
"  • Sintomas de hipo/hipertireoidismo (TSH é apropriado)",
"  • História de irradiação cervical (Hodgkin tratado, RT cervical) — alto risco",
"  • Síndromes hereditárias: MEN2, Cowden, Carney, polipose adenomatosa familiar",
"  • História familiar 1º grau de CA medular ou MEN",
"  • Crescimento de bócio palpável recente",
"  • Linfadenopatia cervical de causa não esclarecida",
"NÃO indicam rastreio:",
"  • 'Cansaço'",
"  • 'Ganho de peso'",
"  • Sentir 'algo no pescoço' subjetivo sem alteração ao exame",
"  • Querer 'check-up completo'",
"  • Histórico familiar de hipotireoidismo (autoimunidade — não é CA)",
"  • Achado USG anterior de 'nódulo pequeno' sem critério de TIRADS"
],
fisio:"~95% dos CA de tireoide são bem diferenciados (papilífero ou folicular) — comportamento INDOLENTE. Maioria dos micronódulos (≤1 cm) detectados em USG são clinicamente irrelevantes — mesmo sendo carcinoma, NÃO progrediriam para doença sintomática. Sobrevida geral em 5 anos do CA de tireoide bem diferenciado: >98%. Apenas variantes anaplásicas (raras, 1-2%) são agressivas. Patogênese envolve rearranjos RET/PTC, mutações BRAF, exposição a radiação. Importante: PRESENÇA de microcarcinomas em autópsia (achado incidental) chega a 10-30% da população — câncer 'subclínico' que jamais causaria sintoma.",
profilaxia:"PRIMÁRIA: evitar exposição desnecessária a radiação ionizante (especialmente em crianças — TCs cervicais sem indicação, RT cervical quando alternativa existe). Em populações com deficiência de iodo: suplementação populacional (sal iodado — Brasil tem). NÃO há outras intervenções comprovadas.",
freire:"Trabalho EDUCATIVO sobre cultura do exame 'preventivo'. Paciente vem 'pra fazer um check-up' — esperando USG, sangue, tudo. Explicar com gentileza: 'a maioria dos check-ups que se vende por aí faz mais mal que bem, especialmente exames de imagem em pessoa sem queixa. Vou te explicar'. Apresentar a história coreana de forma simples: 'em um país, todo mundo começou a fazer USG. Triplicou, quadruplicou, dezesseis vezes mais diagnósticos. Mas o número de mortes pelo mesmo câncer NÃO mudou. O que aconteceu? Eles estavam diagnosticando câncer que NÃO iria dar problema na vida das pessoas — só que TIRAVAM a tireoide. E aí ficavam sem tireoide e com pareste com problema'. Construir junto: 'o melhor exame de tireoide é a sua mão no seu pescoço de vez em quando, e a minha em cada consulta. Se a gente sentir um caroço, INVESTIGA — sem caroço, não procura'. METÁFORA: 'rastrear o que não precisa rastrear é como entrar num quarto cheio de armadilhas só pra checar se elas funcionam — a maioria não fica pra te machucar até você entrar lá'.",
sus_tx:`PROTOCOLO — POR QUE NÃO RASTREAR CA tireoide:

A) POSIÇÃO OFICIAL UNÂNIME:
  • USPSTF 2017: recomendação D (NÃO realizar rastreio em adultos assintomáticos)
  • INCA: NÃO recomenda rastreio populacional
  • American Thyroid Association (ATA): NÃO recomenda rastreio em assintomáticos
  • IARC/WHO: alinhamento — sem rastreio populacional
  • OBJETIVO: prevenir sobrediagnóstico/sobretratamento

B) CASO PARADIGMÁTICO — COREIA DO SUL:
  • Programa nacional de check-up incluiu USG tireoide
  • De 1993 a 2011: INCIDÊNCIA de CA tireoide aumentou ~15 VEZES
  • MORTALIDADE permaneceu praticamente INALTERADA
  • Conclusão: maior parte dos diagnósticos eram tumores que NÃO causariam dano clínico
  • Milhares de tireoidectomias com sequelas (hipotireoidismo permanente, hipocalcemia, paralisia de cordas vocais)
  • Caso de estudo mundial sobre sobrediagnóstico
  • Após reconhecimento: redução gradual do USG em check-ups

C) POR QUE O CA TIREOIDE É TÃO PASSÍVEL DE SOBREDIAGNÓSTICO:
  • Carcinomas papilíferos pequenos (<1cm) são EXTREMAMENTE comuns como achado de autópsia (10-30%)
  • Crescimento muito lento; muitos NUNCA causariam sintoma
  • USG detecta nódulos em ~40-50% da população adulta
  • Maior parte é benigna ou indolente
  • Tratamento (cirurgia + RT iodo + supressão TSH) tem morbidade real
  • Curva sigmoide: rastrear mais NÃO salva mais vidas

D) RECOMENDAÇÃO NA APS — o que FAZER:

  EM PACIENTE ASSINTOMÁTICO:
  • NÃO solicitar USG cervical/tireoide 'preventivo'
  • NÃO solicitar TSH 'de rotina' em pessoa sem indicação clínica
  • Exame clínico cervical em consultas de rotina (sentir região, sem instrumentação)
  • Educar paciente sobre P4
  
  EM PACIENTE COM NÓDULO PALPÁVEL:
  • Aí sim — investigação dirigida
  • USG cervical
  • TSH
  • Classificação TIRADS (Thyroid Imaging Reporting and Data System)
  • PAAF (punção aspirativa por agulha fina) em nódulos suspeitos por critério TIRADS
  • Encaminhar endocrinologia/cirurgia conforme

  TIRADS — classificação dos nódulos USG:
  • TIRADS 1: normal
  • TIRADS 2: benigno (cisto puro, espongiforme)
  • TIRADS 3: provavelmente benigno (4-10mm: seguimento; >2cm: PAAF)
  • TIRADS 4: suspeição moderada (PAAF se ≥1,5cm; ≥1cm em alguns)
  • TIRADS 5: alta suspeição (PAAF se ≥1cm; biópsia)

  EM PACIENTE COM USG JÁ FEITO mostrando 'micronódulo':
  • Discutir contexto: foi feito por quê? Sintoma? Achado incidental em TC?
  • Aplicar TIRADS
  • Maioria dos micronódulos TIRADS 1-3 pequenos: APENAS SEGUIMENTO, sem PAAF
  • NÃO solicitar USG seriado a cada 6 meses 'só pra ver' — gera ansiedade

  ALTO RISCO real — protocolo específico:
  • Irradiação cervical prévia (linfoma Hodgkin tratado, RT pediatra)
  • MEN2 (mutação RET) — tireoidectomia profilática
  • Cowden, Carney — vigilância individualizada
  • Histórico familiar 1º grau de CA tireoide medular ou MEN
  • → endocrinologia / serviço de referência

E) COMUNICAÇÃO COM PACIENTE QUE INSISTE:
  • Acolher: 'entendo seu cuidado com a saúde'
  • Educar com narrativa (caso coreano)
  • Convidar ao auto-conhecimento (palpação)
  • Diferenciar exame 'tipo radar' (preventivo) de exame 'tipo investigação' (sintoma)
  • Se paciente fizer mesmo assim por conta própria: NÃO tratar achado pequeno como problema sem TIRADS adequado
  • Documentar a discussão`,
padrao_ouro:"USPSTF 2017 — Screening for Thyroid Cancer (recomendação D). INCA — Tipos de Câncer / Tireoide. American Thyroid Association — Management Guidelines for Adult Patients with Thyroid Nodules. TIRADS (Tessler et al, ACR). Estudos coreanos: Ahn et al. (NEJM 2014).",
prog:"NÃO rastrear é a estratégia que minimiza dano populacional. Em paciente com diagnóstico FORMAL: papilífero/folicular bem diferenciado tem sobrevida >98% em 5 anos — câncer 'bom' do ponto de vista prognóstico. Variantes raras (anaplásico, medular) requerem condutas específicas.",
acomp:"Paciente sem indicação: NÃO solicitar exames. Paciente com nódulo palpável investigado: seguimento conforme TIRADS + PAAF se indicada. Paciente diagnosticado e tratado: seguimento endócrino-oncológico individualizado (tireoglobulina, USG seriada, supressão TSH em risco moderado/alto).",
p4:"⚠ Esta patologia INTEIRA é sobre P4. ⚠ NÃO solicitar USG tireoide 'de rotina' em adulto assintomático — recomendação D unânime. ⚠ NÃO incluir USG cervical em 'pacotes de check-up' privados ou no rastreio do SUS. ⚠ Achado incidental de nódulo pequeno em TC/USG por outra razão: aplicar TIRADS, NÃO 'investigar a fundo' nódulo <1cm sem critério suspeito. ⚠ NÃO solicitar TSH 'preventivo' em todos — só em sintomáticos, gestante, alto risco (Down, autoimunidade conhecida, irradiação cervical prévia). ⚠ Cuidar para que esta patologia NÃO seja interpretada como 'ignorar paciente' — investigação dirigida em sintomático é OBRIGATÓRIA. ⚠ Em paciente com USG já feito mostrando nódulo pequeno indolente: NÃO crescer cascata diagnóstica. ⚠ Tireoidectomia profilática só em MEN2 confirmada (mutação RET) ou alto risco genético específico — NÃO em nódulo único bem diferenciado pequeno. ⚠ Educação do paciente é P4 ATIVA: ensinar a não procurar USG cervical recreacionalmente.",
calcs:[],
alertas:[
{t:"crit",x:"<strong>NÃO rastrear CA de tireoide em assintomático.</strong> USPSTF D, INCA, ATA: posição unânime."},
{t:"info",x:"Caso paradigmático: Coreia do Sul — incidência ×15, mortalidade INALTERADA. Sobrediagnóstico em escala populacional."},
{t:"warn",x:"NÓDULO PALPÁVEL = investigação dirigida (USG + TIRADS + PAAF se indicada). Diferente de RASTREIO."},
{t:"info",x:"Alto risco REAL: irradiação cervical prévia, MEN2, histórico familiar 1º grau de CA medular. Estes têm vigilância específica."}
],
diretriz:"USPSTF 2017 — Screening for Thyroid Cancer. INCA — Tireoide (Versão para profissionais de saúde). American Thyroid Association — Adult Thyroid Nodule and Differentiated Thyroid Cancer Guidelines. TIRADS classification (ACR). Ahn HS et al, NEJM 2014 — Korea's thyroid-cancer epidemic."
}

);
