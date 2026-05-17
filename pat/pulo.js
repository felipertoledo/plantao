/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — pat/pulo.js
   42 patologias
   Sistemas: pulo
   =========================================================== */

PATOLOGIAS.push(

/* ============== PULO (42) ============== */

{id:"pulo-abscesso-pequeno", nome:"Drenar abscesso pequeno sem dor — field block perilesional", sis:"pulo", grav:"baixa",
cid:"L02", ciap:"S10",
sin:["Abscesso","I&D","Drenagem","Field block","Bloqueio perilesional","Abscesso cutâneo"],
def:"Abscesso pequeno cutâneo = drenagem é IMPRESCINDÍVEL (antibiótico isolado é insuficiente). Anestesia INTRALESIONAL é INEFICAZ (pH ácido inativa lidocaína). Usar BLOQUEIO PERILESIONAL (field block) — infiltrar ao redor da lesão, não dentro.",
quadro:["Abscesso cutâneo simples: flutuação, eritema, calor, dor — pele e tecido subcutâneo","Locais comuns: face (cuidado!), axila, virilha, glúteo, dedos","⚠ FACE: 'zona de risco' acima da boca (triângulo nariz-lábio-glabela) — drenagem precisa cautela por risco trombose seio cavernoso. Pequeno = lateral. Grande/profundo = ORL/cirurgia","⚠ PARANUNGEAL: orientar bem para evitar lesão da matriz ungueal","SIMPLES (< 5 cm, sem celulite extensa, sem febre, paciente sem imunossupressão): UBS","COMPLICADO (>5 cm, celulite extensa, febre, imunossupressão, mão, face, períneo, profundo): cirurgia"],
diag:["Inspeção: flutuação, fluctuação positiva","USG point-of-care: confirma cavidade fluida (diferencia de celulite simples)","Em casos atípicos: tomografia"],
exames:["Geralmente clínico","Cultura do material drenado se atípico, recorrente, imunossuprimido","USG se dúvida diagnóstica"],
rx:[
{etapa:"inicial", d:"⚠ AVALIAR localização e complexidade — encaminhar cirurgia se complicado"},
{etapa:"escala", d:"⚠ PREPARAÇÃO"},
{etapa:"escala", d:"Antissepsia ampla com clorexidina ou PVPI"},
{etapa:"escala", d:"Material: bisturi lâmina 11, gaze, hemostático, soro fisiológico, antibiótico tópico, curativo"},
{etapa:"escala", d:"⚠ ANESTESIA — BLOQUEIO PERILESIONAL (Field Block)"},
{etapa:"escala", d:"Lidocaína 1-2% com adrenalina (em locais NÃO terminais)"},
{etapa:"escala", d:"⚠ NÃO INFILTRAR DENTRO da cavidade do abscesso — pH ácido inativa lidocaína, dor permanece"},
{etapa:"escala", d:"INFILTRAR ao REDOR da lesão, em 4 quadrantes perilesionais, no plano subcutâneo"},
{etapa:"escala", d:"Aguardar 5-10 min para anestesia plena"},
{etapa:"escala", d:"⚠ ALTERNATIVA — cloreto de etila spray (vapocooling) — congelamento momentâneo da pele para incisão rápida"},
{etapa:"escala", d:"⚠ EM ABSCESSO PEQUENO E SUPERFICIAL: bloqueio com agulha 27-30G pode ser quase indolor"},
{etapa:"escala", d:"⚠ INCISÃO + DRENAGEM (I&D)"},
{etapa:"escala", d:"INCISÃO LINEAR com bisturi 11, paralela às linhas de Langer (cicatriz melhor)"},
{etapa:"escala", d:"Tamanho proporcional ao abscesso — abertura completa para drenagem"},
{etapa:"escala", d:"DRENAR pus → coletar para cultura se atípico"},
{etapa:"escala", d:"⚠ BREAKING THE LOCULAÇÕES — com hemostática curva ou dedo, romper septos internos para drenagem completa"},
{etapa:"escala", d:"IRRIGAR cavidade com SF (até líquido sair claro)"},
{etapa:"escala", d:"⚠ CURATIVO COM TAMPÃO (gauze packing) — EVIDÊNCIA RECENTE DESAFIA"},
{etapa:"escala", d:"Tradicionalmente: tampão de gaze (mecha) na cavidade, troca 1-2×/d × 5-7 dias"},
{etapa:"escala", d:"Estudos recentes: em abscessos pequenos não complicados, NÃO tamponar tem resultados equivalentes (menos dor, menos consulta)"},
{etapa:"escala", d:"PRÁTICA ATUAL: abscesso grande/profundo = tampão. Pequeno simples = sem tampão, curativo simples"},
{etapa:"adj", d:"⚠ ANTIBIÓTICO SISTÊMICO — COMPLEMENTAR a I&D em casos selecionados"},
{etapa:"adj", d:"SUFICIENTE I&D isolada em: abscesso pequeno (<2cm), sem celulite extensa, paciente imunocompetente, sem fatores de risco"},
{etapa:"adj", d:"INDICAR ATB se: abscesso >2 cm, celulite extensa, febre, imunossupressão, áreas críticas (face, mão, períneo, articulação), recorrência, falha I&D isolada"},
{etapa:"adj", d:"Cefalexina 500 mg 6/6h × 5-7 dias (cobertura S. aureus + Streptococcus)"},
{etapa:"adj", d:"⚠ Em comunidades com MRSA CA-MRSA frequente: SMX-TMP 800/160 mg 12/12h OU clindamicina 300 mg 8/8h"},
{etapa:"alta", d:"REAVALIAR em 24-72h"},
{etapa:"alta", d:"REMOVER tampão (se usado) em 24-48h → reavaliar"},
{etapa:"alta", d:"Educação: sinais de infecção sistêmica (febre, calafrios, eritema progressivo)"},
{etapa:"alta", d:"⚠ ABSCESSO RECORRENTE: investigar — pilonidal, MRSA, hidradenite supurativa, diabetes, imunossupressão"},
],
alertas:[
{nivel:"crit", txt:"⚠ ABSCESSO NA FACE (acima da boca — triângulo da morte): cautela. Drenagem inadequada pode causar trombose do seio cavernoso. Pequeno e lateral = OK. Grande/profundo/central = ORL/cirurgia."},
{nivel:"warn", txt:"⚠ ANESTESIA INTRA-ABSCESSO É INEFICAZ — pH ácido inativa lidocaína. USAR BLOQUEIO PERILESIONAL (field block)."},
{nivel:"warn", txt:"ABSCESSO PROFUNDO / GRANDE / COMPLICADO / em paciente imunossuprimido = ENCAMINHAR cirurgia."},
{nivel:"warn", txt:"ANTIBIÓTICO ISOLADO em abscesso é INSUFICIENTE — I&D é o tratamento. ATB é complementar em casos selecionados."},
{nivel:"info", txt:"ABSCESSO SIMPLES (<2 cm, sem celulite, paciente saudável): I&D isolada suficiente. ATB não obrigatório."},
{nivel:"info", txt:"CURATIVO COM TAMPÃO: tradicional mas evidência recente questiona em abscessos pequenos. Curativo simples pode ser suficiente."},
],
fluxo:null, diretriz:"IDSA. Tintinalli. Roberts & Hedges."
},
{id:"pulo-acesso-venoso", nome:"Acesso venoso difícil — transiluminação + posicionamento", sis:"pulo", grav:"moderada",
cid:"-", ciap:"-",
sin:["Punção venosa difícil","Sem veia","Transiluminação","Lanterna celular","Bíceps manobra"],
def:"Paciente DIFÍCIL DE PUNCIONAR (desidratado, criança, obeso, drogadição, idoso, queimado) = combinar TRANSILUMINAÇÃO (lanterna celular por trás), CALOR LOCAL, manobra do BÍCEPS, garroteamento alternativo. Antes de chamar anestesista ou intraóssea.",
quadro:["Falha repetida de punção venosa","Paciente com veias 'difíceis' por: desidratação, hipotensão/choque, idoso, criança, obeso, queimado, drogadição IV crônica, hipotermia, vasoconstrição","⚠ EM EMERGÊNCIA com necessidade de acesso urgente: intraósseo é alternativa rápida"],
diag:["Inspeção visual + palpação","Avaliar histórico de acessos prévios","Considerar tipo de medicação a infundir (vasoconstritor → veia central / intraósseo)"],
exames:["Conforme contexto clínico"],
rx:[
{etapa:"inicial", d:"⚠ PREPARAR antes de tentar — material completo, ambiente bem iluminado"},
{etapa:"escala", d:"⚠ POSIÇÃO DO PACIENTE"},
{etapa:"escala", d:"DECÚBITO DORSAL com braço PENDENTE da maca (rede de Trendelenburg do braço) — gravidade preenche veias"},
{etapa:"escala", d:"Ou se ortostático: sentar com braço pendente abaixo do nível do coração"},
{etapa:"escala", d:"⚠ MANOBRA DO BÍCEPS (Trick clássico)"},
{etapa:"escala", d:"Garrote no terço médio do braço"},
{etapa:"escala", d:"Pedir paciente FLEXIONAR e ESTENDER o cotovelo várias vezes contra resistência (bombeamento muscular)"},
{etapa:"escala", d:"Pode-se segurar um objeto e apertar repetidamente"},
{etapa:"escala", d:"Veias da fossa cubital se enchem"},
{etapa:"escala", d:"⚠ TRANSILUMINAÇÃO COM CELULAR"},
{etapa:"escala", d:"Lanterna de celular (LED) APOIADA na pele do lado OPOSTO à veia procurada"},
{etapa:"escala", d:"Em ambiente escurecido (apagar luz)"},
{etapa:"escala", d:"Veias aparecem como SOMBRAS LINEARES escuras contra o tecido translúcido"},
{etapa:"escala", d:"Funciona melhor em criança, neonato, paciente magro"},
{etapa:"escala", d:"⚠ CALOR LOCAL"},
{etapa:"escala", d:"Compressa morna na área × 5-10 min — vasodilatação"},
{etapa:"escala", d:"Aquecedor, bolsa de água quente envolta em pano"},
{etapa:"escala", d:"⚠ TAPPING (pequenas batidas) sobre a veia — estimula reflexo de dilatação"},
{etapa:"escala", d:"⚠ GARROTE BAIXO (logo acima do local) — não muito apertado (compressão arterial impede enchimento)"},
{etapa:"adj", d:"⚠ LOCAIS ALTERNATIVOS"},
{etapa:"adj", d:"Veias da mão (dorso) — geralmente visíveis em qualquer paciente"},
{etapa:"adj", d:"Veias do antebraço (basílica, cefálica)"},
{etapa:"adj", d:"Veia jugular externa (em paciente crítico, profissional treinado)"},
{etapa:"adj", d:"Veias do pé (último recurso em adulto, mais comum em pediatria)"},
{etapa:"adj", d:"Em mulher: NÃO usar braço com mastectomia/dissecção axilar"},
{etapa:"adj", d:"⚠ EM CRIANÇA: veias do couro cabeludo (lactente), pé"},
{etapa:"adj", d:"⚠ USG POINT-OF-CARE — padrão crescente"},
{etapa:"adj", d:"Localiza veias profundas em obesos, paciente em choque"},
{etapa:"adj", d:"Permite acesso de veias do antebraço médio (basílica, braquial) sob visualização"},
{etapa:"adj", d:"Curso de treinamento crescente em emergencistas"},
{etapa:"adj", d:"⚠ INTRAÓSSEO — em EMERGÊNCIA com falha repetida"},
{etapa:"adj", d:"Tibial proximal (mais comum) ou úmero proximal"},
{etapa:"adj", d:"Agulha intraóssea (EZ-IO, Cook, etc) — manual ou broca pediátrica"},
{etapa:"adj", d:"Acesso em <60 SEGUNDOS — todas as medicações podem ser infundidas"},
{etapa:"adj", d:"Manter máx 24h, depois transferir para acesso convencional"},
{etapa:"adj", d:"⚠ CATETER VENOSO CENTRAL (jugular interna, subclávia, femoral) — anestesista/intensivista"},
{etapa:"alta", d:"⚠ PERDA DE ACESSO REPETIDA: após 2-3 tentativas frustradas, MUDAR de estratégia (não ficar repetindo)"},
{etapa:"alta", d:"Considerar intraósseo se medicação urgente"},
{etapa:"alta", d:"Solicitar profissional mais experiente / anestesista"},
],
alertas:[
{nivel:"warn", txt:"INTRAÓSSEO em EMERGÊNCIA com falha repetida = ALTERNATIVA RÁPIDA (60 seg). Tibial proximal ou úmero proximal. Não retardar tratamento por acesso difícil."},
{nivel:"warn", txt:"USG POINT-OF-CARE: padrão crescente em ER. Permite acesso de veias profundas. Treinamento curto."},
{nivel:"warn", txt:"GARROTE muito apertado: comprime artérias → menos enchimento venoso. Ajustar tensão."},
{nivel:"info", txt:"TRANSILUMINAÇÃO COM CELULAR LED + ambiente escurecido: funciona melhor em criança/lactente/magro."},
{nivel:"info", txt:"MANOBRA DO BÍCEPS (flexão repetida com garrote) é truque clássico — bombeamento muscular enche veias antecubitais."},
],
fluxo:null, diretriz:"AHA. NAEMT. PALS. ACLS."
},
{id:"pulo-adesivo-grudado", nome:"Adesivo / cola super bonder na pele — óleo / vaselina", sis:"pulo", grav:"baixa",
cid:"-", ciap:"S15",
sin:["Cola super bonder","Esparadrapo grudado","Adesivo grudado","Cianoacrilato","Remover adesivo"],
def:"COLA DE CIANOACRILATO (Super Bonder) ou ESPARADRAPO antigo aderido na pele = NÃO TENTAR ARRANCAR — risco de avulsão cutânea. Aplicar ÓLEO / VASELINA / ACETONA (em local apropriado) por 5-10 min — solta gentilmente.",
quadro:["Cola super bonder em pele (acidente doméstico ou industrial)","Esparadrapo / curativo antigo aderido em pele frágil (idoso, criança, dermatite)","Adesivo de ECG / Holter grudado por dias","⚠ EXCLUIR cola no OLHO ou MUCOSA — outra abordagem"],
diag:["Clínica","Em cola no olho/mucosa: encaminhar oftalmologia/cirurgia"],
exames:["Geralmente nenhum"],
rx:[
{etapa:"inicial", d:"⚠ NÃO ARRANCAR — risco avulsão cutânea, dor, sangramento"},
{etapa:"escala", d:"⚠ COLA CIANOACRILATO (Super Bonder)"},
{etapa:"escala", d:"PRIMEIRA OPÇÃO: aplicar ÓLEO DE COZINHA, VASELINA, óleo mineral, manteiga, óleo de bebê — esfregar suavemente por 5-10 min"},
{etapa:"escala", d:"REPETIR aplicação várias vezes — cola amolece progressivamente"},
{etapa:"escala", d:"⚠ ACETONA / esmalte de unha → eficaz mas IRRITANTE — usar com cautela em pele, NÃO usar em criança / mucosa / olho", o:"Esfregar com cotonete embebido. Lavar abundantemente após."},
{etapa:"escala", d:"ALTERNATIVA: água morna + sabão neutro + paciência (15-30 min)"},
{etapa:"escala", d:"⚠ NÃO USAR objeto cortante para separar dedos colados — risco lesão"},
{etapa:"adj", d:"⚠ DEDOS COLADOS UM AO OUTRO (cianoacrilato)"},
{etapa:"adj", d:"NUNCA forçar separação — pode arrancar pele entre os dedos"},
{etapa:"adj", d:"Mergulhar dedos em água morna com sabão + óleo + paciência"},
{etapa:"adj", d:"Movimento de 'rolagem' lenta dos dedos um sobre o outro — quando cola amolecer"},
{etapa:"adj", d:"⚠ ESPARADRAPO antigo / adesivo grudado em pele frágil"},
{etapa:"adj", d:"ÓLEO MINERAL, vaselina ou óleo de bebê — molhar gaze e aplicar sob o adesivo, esperar 2-3 min"},
{etapa:"adj", d:"Remover LENTAMENTE no sentido PARALELO à pele (não perpendicular)"},
{etapa:"adj", d:"Solução comercial: 'remove tape' (com solvente) em hospital"},
{etapa:"adj", d:"⚠ COLA NO OLHO: enxaguar abundantemente com SF — encaminhar oftalmologia. NÃO forçar abertura da pálpebra colada"},
{etapa:"adj", d:"⚠ COLA NA MUCOSA ORAL: água + óleo — encaminhar se persistir"},
{etapa:"alta", d:"PÓS-REMOÇÃO: hidratar pele (creme), curativo se houver abrasão"},
{etapa:"alta", d:"Orientar prevenção: usar luvas com cola, ler instruções"},
],
alertas:[
{nivel:"crit", txt:"COLA NO OLHO: NÃO forçar — encaminhar oftalmologia. SF abundante, evitar coçar. Pálpebras coladas costumam separar espontaneamente em 1-4 dias com cuidado."},
{nivel:"warn", txt:"NÃO ARRANCAR / NÃO USAR CORTANTE — risco avulsão cutânea e laceração."},
{nivel:"warn", txt:"ACETONA: irritante. EVITAR em criança, dermatite, mucosa. Usar pontualmente em adulto sem alergia."},
{nivel:"info", txt:"DEDOS COLADOS: óleo + paciência + 'rolagem' — nunca tração linear forçada."},
{nivel:"info", txt:"PROFISSIONAL DE SAÚDE com adesivos: 'remove tape' (solvente comercial) é mais rápido."},
],
fluxo:null, diretriz:"Tintinalli. Roberts & Hedges. Industrial first aid guides."
},
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
{id:"pulo-agua-viva", nome:"Picada de água-viva e caravela — água quente (não vinagre para tudo)", sis:"pulo", grav:"baixa",
cid:"T63.6", ciap:"S99",
sin:["Água-viva","Caravela","Medusa","Queimadura de mar","Picada de cnidário","Vinagre","Água quente"],

def:"CALOR (água a 42-45°C × 20-40 min) é o tratamento MAIS EFICAZ para a maioria das picadas de cnidários — INACIA NEMATOCISTOS por desnaturação proteica. VINAGRE indicado em CARAVELA (caravela-portuguesa) e algumas espécies — depende da espécie regional. Evitar urina, álcool, água doce.",

quadro:[
"Picada em contato com cnidários (água-viva, medusa, caravela, anêmona) — geralmente em praia ou mar",
"Manifestação típica: DOR INTENSA imediata, sensação de queimadura, lesões lineares/em chicote, eritema, edema, pápulas, vesículas",
"Pode haver reação sistêmica: náusea, vômito, mal-estar, cãibras",
"⚠ CARAVELA-PORTUGUESA (Physalia physalis) — frequente no NE/SE brasileiro, dor MUITO intensa, lesões longas em chicote, risco sistêmico maior",
"⚠ EM SUL DO BRASIL: água-viva-de-juba-de-leão (Chrysaora — Olindias)",
"REAÇÃO ANAFILÁTICA é rara mas possível — pode ser fatal se exposição massiva ou indivíduo sensibilizado",
],

diag:[
"História clínica + lesão típica",
"Identificar IF POSSÍVEL espécie (paciente/socorrista que viu)",
"Sinais sistêmicos: avaliar circulação, respiração, consciência",
],

exames:["Geralmente nenhum","Em reação anafilática / quadro sistêmico: ECG, monitorização"],

rx:[
{etapa:"inicial", d:"⚠ AVALIAR SEMPRE estado geral — anafilaxia é rara mas possível. Em sinais sistêmicos: tratar como anafilaxia (adrenalina IM 0,3-0,5 mg + suporte)", o:""},

{etapa:"escala", d:"PASSO 1 — RETIRAR tentáculos visíveis SEM ESFREGAR (esfregar dispara mais nematocistos)", o:""},
{etapa:"escala", d:"Usar pinça, cartão de crédito (raspar levemente), luva", o:""},
{etapa:"escala", d:"Lavar com ÁGUA DO MAR (não doce! água doce dispara nematocistos por mudança osmótica)", o:""},
{etapa:"escala", d:"⚠ NÃO esfregar com toalha, areia, mão nua — dispara mais nematocistos", o:""},

{etapa:"escala", d:"PASSO 2 — TRATAMENTO ESPECÍFICO (depende da espécie)", o:""},

{etapa:"escala", d:"OPÇÃO A — ÁGUA QUENTE (42-45°C × 20-40 min) — PRIMEIRA ESCOLHA na maioria dos casos", o:""},
{etapa:"escala", d:"Imergir a área picada em água quente — temperatura tolerável mas alta", o:"Calor INATIVA toxinas proteicas. Funciona para maioria das espécies brasileiras (Chrysaora, Olindias, água-viva comum)."},
{etapa:"escala", d:"⚠ Testar a água com cotovelo antes (evitar queimadura adicional)", o:""},

{etapa:"escala", d:"OPÇÃO B — VINAGRE (ácido acético 5%) — primeira escolha em CARAVELA (Physalia)", o:""},
{etapa:"escala", d:"Aplicar abundantemente sobre lesões × 30 segundos antes da remoção de tentáculos", o:""},
{etapa:"escala", d:"INATIVA nematocistos não disparados de caravela — evita disparo adicional", o:""},
{etapa:"escala", d:"⚠ Em algumas espécies (água-viva comum), VINAGRE PIORA (dispara nematocistos) — por isso é importante identificar a espécie regional", o:""},
{etapa:"escala", d:"REGRA PRÁTICA Brasil: caravela = VINAGRE; outras = ÁGUA QUENTE", o:""},

{etapa:"adj", d:"NÃO FAZER (mitos):", o:""},
{etapa:"adj", d:"❌ URINA — sem evidência, pode piorar", o:""},
{etapa:"adj", d:"❌ ÁLCOOL — dispara nematocistos", o:""},
{etapa:"adj", d:"❌ ÁGUA DOCE — dispara nematocistos por mudança osmótica", o:""},
{etapa:"adj", d:"❌ Bicarbonato em PASTA — efeito controverso, variável por espécie", o:""},
{etapa:"adj", d:"❌ Esfregar com areia / toalha — dispara nematocistos", o:""},

{etapa:"adj", d:"ANALGESIA: dipirona 1 g IV / VO ou paracetamol — dor pode ser intensa. AINE útil (ibuprofeno 400-600 mg)", o:""},

{etapa:"adj", d:"CORTICOIDE TÓPICO (hidrocortisona 1% creme) após dor inicial controlada — reduz inflamação e prurido", o:""},

{etapa:"adj", d:"ANTI-HISTAMÍNICO VO (loratadina, cetirizina) para prurido", o:""},

{etapa:"adj", d:"ANTITETÂNICA conforme histórico", o:""},

{etapa:"alta", d:"⚠ ENCAMINHAR EMERGÊNCIA: sinais sistêmicos (vômito persistente, hipotensão, dispneia, alteração mental), picada massiva, criança pequena, lesões extensas, picada em face/genital", o:""},

{etapa:"alta", d:"FOLLOW-UP: dor + prurido podem persistir dias-semanas. Pigmentação residual pode durar meses", o:""},

{etapa:"alta", d:"ORIENTAR: evitar coçar (cicatriz, infecção), hidratante após resolução, fotoproteção (lesões podem hiperpigmentar)", o:""},
],

alertas:[
{nivel:"crit", txt:"REAÇÃO ANAFILÁTICA é RARA mas POSSÍVEL — adrenalina IM 0,3-0,5 mg + suporte. Especialmente em criança pequena, picada massiva."},
{nivel:"crit", txt:"CARAVELA-PORTUGUESA (Physalia) — dor muito intensa + sintomas sistêmicos. VINAGRE PRIMEIRO, depois água quente. Encaminhar emergência."},
{nivel:"warn", txt:"NÃO USAR ÁGUA DOCE para lavar — dispara nematocistos (mudança osmótica). Usar água do mar."},
{nivel:"warn", txt:"NÃO ESFREGAR a área — dispara mais nematocistos. Lavar suavemente OU raspar com cartão."},
{nivel:"warn", txt:"VINAGRE pode PIORAR em algumas espécies de água-viva (não caravela). Regra prática Brasil: caravela = vinagre; outras = ÁGUA QUENTE."},
{nivel:"warn", txt:"URINA é MITO — sem evidência, pode piorar. Álcool dispara nematocistos."},
{nivel:"info", txt:"ÁGUA QUENTE (42-45°C × 20-40 min): inativa toxinas proteicas. Funciona para maioria das espécies."},
{nivel:"info", txt:"ESPÉCIES BRASILEIRAS: Olindias sambaquiensis (SE/S — Chrysaora), Tamoya haplonema (NE), Physalia physalis (caravela — todo litoral)."},
],

fluxo:null,
diretriz:"American Red Cross. Brazilian Society of Toxinology. SBP."
},
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
{id:"pulo-anzol", nome:"Anzol cravado — técnicas de remoção", sis:"pulo", grav:"baixa",
cid:"W34", ciap:"S15",
sin:["Anzol","Anzol no dedo","Fishhook","Linha de pesca","Pescador"],

def:"3 TÉCNICAS de remoção, conforme localização e tipo de anzol: (1) RETROGRADE (puxar de volta — só sem farpa); (2) STRING (linha de pesca — empurra anzol enquanto pressiona base); (3) ADVANCE-AND-CUT (empurra ponta pra fora + corta — clássica). Bloqueio anestésico local. Antitetânica + ATB se contaminação.",

quadro:[
"Anzol cravado em pele/tecido subcutâneo — pescador profissional ou amador",
"Localizações comuns: dedos da mão, lábio, orelha, dorso da mão",
"⚠ LOCALIZAÇÕES PROBLEMÁTICAS: olho/pálpebra (oftalmologia urgente), articulação, próximo a artéria/nervo, tendão — encaminhar especialista",
"Anzol pode ter FARPA (barb) que prende em retrocesso, exigindo técnica específica",
],

diag:[
"Inspeção: posição do anzol, profundidade, presença de farpa",
"Avaliar lesão associada: nervos, vasos, tendões (testar função motora e sensitiva)",
"Histórico vacinal antitetânica",
"Tipo de água (água doce vs salgada — risco infeccioso diferente)",
],

exames:["Geralmente nenhum","Em anzol grande / profundo / próximo a estruturas: Rx para localizar"],

rx:[
{etapa:"inicial", d:"⚠ AVALIAR localização — se olho, articulação, tendão, próximo a vaso/nervo: ESPECIALISTA. Não tentar remoção empírica", o:""},

{etapa:"inicial", d:"PREPARO:", o:""},
{etapa:"inicial", d:"(a) Limpar área com SF + clorexidina/PVPI", o:""},
{etapa:"inicial", d:"(b) BLOQUEIO ANESTÉSICO LOCAL com lidocaína 1-2% SEM ADRENALINA (se extremidade terminal — dedo, lóbulo da orelha)", o:""},
{etapa:"inicial", d:"(c) Avaliar tipo de anzol: COM FARPA vs SEM FARPA", o:""},

{etapa:"escala", d:"⚠ TÉCNICA 1 — RETROGRADE (Retrocesso) — APENAS SE ANZOL SEM FARPA", o:""},
{etapa:"escala", d:"(a) Empurrar levemente o anzol no sentido da entrada (afasta de tecido)", o:""},
{etapa:"escala", d:"(b) Puxar para fora no mesmo trajeto de entrada", o:"Simples. Funciona em anzol simples ou farpa achatada."},

{etapa:"escala", d:"⚠ TÉCNICA 2 — STRING YANK (Técnica da linha) — anzol pequeno-médio COM FARPA", o:""},
{etapa:"escala", d:"(a) Amarrar fio resistente (fio de seda 2-0, linha de pesca, fio dental) na curva do anzol", o:""},
{etapa:"escala", d:"(b) Com uma mão, EMPURRAR a HASTE do anzol em direção à pele (desengata farpa interna)", o:"Posição: paciente apoia mão em superfície firme. Examinador aplica pressão para BAIXO na haste."},
{etapa:"escala", d:"(c) Com a outra mão, PUXAR rapidamente o FIO em ângulo paralelo à pele, no sentido OPOSTO à curva", o:""},
{etapa:"escala", d:"(d) Anzol sai pelo mesmo orifício de entrada", o:"Procedimento rápido (1-2 seg). Avisar paciente — sensação de 'tranco'."},

{etapa:"escala", d:"⚠ TÉCNICA 3 — ADVANCE-AND-CUT (Empurrar-e-Cortar) — clássica, qualquer farpa", o:""},
{etapa:"escala", d:"(a) Sob anestesia, EMPURRAR o anzol no sentido da curva, fazendo a PONTA EMERGIR pela pele (criar 2º orifício de saída)", o:""},
{etapa:"escala", d:"(b) Com ALICATE OU CORTADOR DE FIO: cortar a PONTA + FARPA do anzol", o:""},
{etapa:"escala", d:"(c) Puxar a HASTE para trás pelo orifício de entrada (sem farpa, sai facilmente)", o:""},
{etapa:"escala", d:"⚠ DESVANTAGEM: cria 2º orifício na pele (cicatriz adicional). VANTAGEM: funciona em qualquer anzol", o:""},

{etapa:"adj", d:"⚠ TÉCNICA 4 — NEEDLE COVER (Cobertura com agulha) — anzol pequeno na pele/lábio", o:""},
{etapa:"adj", d:"Agulha 18G insere PARALELA à entrada do anzol, cobrindo a farpa", o:""},
{etapa:"adj", d:"Anzol + agulha são retirados juntos, com a agulha protegendo a farpa", o:"Técnica delicada — profissional treinado."},

{etapa:"adj", d:"PÓS-REMOÇÃO:", o:""},
{etapa:"adj", d:"Lavar abundantemente com SF + antissepsia", o:""},
{etapa:"adj", d:"Curativo aberto (não suturar — ferida puntiforme contaminada)", o:""},
{etapa:"adj", d:"⚠ ANTITETÂNICA conforme histórico: completa <5a (nada), 5-10a (reforço), >10a/incompleta (vacina + imunoglobulina se ferida suja)", o:""},
{etapa:"adj", d:"ANTIBIÓTICO se: água salgada (cobertura para Vibrio — DOXICICLINA 100 mg 12/12h × 5d), água doce/estuários (cobertura para Aeromonas — AMOX-CLAVULANATO), ferida com sinais de infecção", o:"Não rotineiro em ferida limpa pequena, mas comum em pesca profissional."},
{etapa:"adj", d:"Orientar paciente: sinais de infecção, retorno em 24-48h", o:""},

{etapa:"alta", d:"⚠ REFERENCIAR EMERGÊNCIA: anzol em olho/pálpebra (oftalmologia), articulação (ortopedia), próximo a vaso/nervo, tendão", o:""},
{etapa:"alta", d:"PREVENÇÃO: orientar uso de óculos + chapéu + manuseio adequado de anzóis. Achatamento da farpa profilática em pescador amador (barbless)", o:""},
],

alertas:[
{nivel:"crit", txt:"ANZOL EM OLHO/PÁLPEBRA: NÃO TENTAR remover — OFTALMOLOGIA URGENTE. Imobilizar área, cobrir olho contralateral, transportar."},
{nivel:"crit", txt:"ANZOL próximo a ARTÉRIA/NERVO/TENDÃO: NÃO empurrar. Encaminhar cirurgia."},
{nivel:"warn", txt:"BLOQUEIO ANESTÉSICO em extremidade terminal: SEM ADRENALINA (risco isquemia)."},
{nivel:"warn", txt:"NÃO SUTURAR ferida puntiforme contaminada — alta taxa de infecção. Cicatrização por 2ª intenção."},
{nivel:"warn", txt:"ANTITETÂNICA é OBRIGATÓRIA — verificar histórico. Imunoglobulina antitetânica em ferida suja + esquema incompleto."},
{nivel:"info", txt:"ÁGUA SALGADA + ferida = considerar profilaxia Vibrio (doxiciclina). Água doce/estuários = Aeromonas (amox-clavulanato)."},
{nivel:"info", txt:"STRING YANK é favorita em pescador experiente — funciona bem em mãos treinadas, sem necessidade de bloqueio em casos selecionados."},
],

fluxo:null,
diretriz:"Tintinalli. Roberts & Hedges ER Procedures. CDC tetanus."
},
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
{id:"pulo-asma-sem-nada", nome:"Crise asmática sem MDI nem nebulizador — adrenalina IM/SC", sis:"pulo", grav:"alta",
cid:"J46", ciap:"R96",
sin:["Asma sem broncodilatador","Adrenalina IM asma","Terbutalina SC","Asma SUS rural"],
def:"Cenário catástrofe — UBS rural ou ambulância sem broncodilatador inalatório. ADRENALINA IM trata crise asmática grave (efeito β-2 sistêmico) — funciona também se anafilaxia. Salbutamol SC/IM é alternativa quando disponível.",
quadro:["Crise asmática grave/iminente sem recursos respiratórios (MDI, nebulizador, O₂)","Sibilos audíveis, dispneia, taquipneia, retração, fala em palavras","Diferenciar de ANAFILAXIA — adrenalina IM trata AMBOS","Considerar TRANSFERÊNCIA SAMU simultânea"],
diag:["Clínica (sem tempo para exames)","SatO₂ se disponível","Excluir corpo estranho, anafilaxia (urticária, angioedema), ICC, pneumotórax (assimetria)"],
exames:["Geralmente nenhum — agir clinicamente"],
rx:[
{etapa:"inicial", d:"⚠ AVALIAÇÃO em segundos: SatO₂, capacidade de falar, esforço respiratório, NC"},
{etapa:"inicial", d:"POSICIONAR sentado, inclinado para frente — postura de tripé"},
{etapa:"escala", d:"ADRENALINA IM — 1ª linha quando sem outro broncodilatador", do:"0,01 mg/kg IM (máx 0,5 mg adulto, 0,3 mg criança)", via:"IM", o:"Coxa lateral. Repetir 5-15 min se necessário. Adrenalina 1:1000 = 1 mg/mL. Adulto: 0,3-0,5 mL. Criança: 0,01 mL/kg."},
{etapa:"escala", d:"SE DISPONÍVEL: Salbutamol SC ou IM", do:"0,25 mg SC (adulto), 5 mcg/kg (criança)", via:"SC/IM", o:"Menos disponível que adrenalina. Efeito β-2 mais seletivo."},
{etapa:"escala", d:"OU Terbutalina SC", do:"0,25-0,5 mg SC", via:"SC", o:"Alternativa quando disponível."},
{etapa:"adj", d:"CORTICOIDE precoce — VO se tolerar", do:"Prednisona 40-60 mg VO (adulto), 1 mg/kg (criança)"},
{etapa:"adj", d:"OU IM/IV se VO impossível", do:"Hidrocortisona 200-300 mg IV/IM OU dexametasona 8-10 mg"},
{etapa:"adj", d:"SULFATO DE MAGNÉSIO 2 g IV em 20 min — se acesso venoso e crise grave persistente", o:"Broncodilatador via relaxamento muscular liso."},
{etapa:"adj", d:"O₂ se disponível, alvo SatO₂ 93-95%"},
{etapa:"alta", d:"⚠ TRANSFERÊNCIA imediata para hospital — não tratar como ambulatorial"},
{etapa:"alta", d:"Manter adrenalina IM repetida cada 5-15 min enquanto aguarda transporte"},
],
alertas:[
{nivel:"crit", txt:"ADRENALINA IM é SEGURA em asma grave — não retardar por medo de efeito CV. Mortalidade da asma grave > risco da adrenalina em adulto saudável."},
{nivel:"crit", txt:"NÃO ADIAR transferência hospitalar tentando estabilizar em UBS sem recursos. Adrenalina IM é ponte."},
{nivel:"warn", txt:"Em CARDIOPATA / IDOSO frágil: adrenalina pode causar isquemia. Avaliar risco-benefício (em crise grave, ainda assim usar)."},
{nivel:"info", txt:"ADRENALINA tem efeito β-2 (broncodilatação) + α (vasoconstrição) + β-1 (cardíaco). Em asma sem MDI: usar."},
],
fluxo:null, diretriz:"GINA 2024-2025. SBP. ALS algorithms."
},
{id:"pulo-carrapato", nome:"Remoção de carrapato — pinça reta e devagar", sis:"pulo", grav:"baixa",
cid:"B88.0", ciap:"S73",
sin:["Carrapato","Carrapato grudado","Picada de carrapato","Tique","Doença de Lyme","Febre maculosa"],

def:"REMOÇÃO MECÂNICA com pinça fina + tração reta + devagar é o método com MENOR risco de quebrar peças bucais. Métodos folclóricos (queimar, óleo, álcool, vaselina) AUMENTAM risco de regurgitação salivar do parasita → maior transmissão de patógenos.",

quadro:[
"Carrapato preso à pele do paciente — pequeno (Amblyomma, Ixodes, Rhipicephalus), preto/marrom, pode estar ingurgitado",
"Frequente em zona rural, contato com cães/gado/cavalos, trilhas/matas, alta estação (primavera-verão no Brasil)",
"Locais típicos: couro cabeludo, atrás de orelhas, axila, cintura, virilha, região poplítea, umbigo (dobras + áreas pilosas)",
"⚠ DOENÇAS TRANSMITIDAS NO BRASIL: FEBRE MACULOSA BRASILEIRA (rickettsiose, alta letalidade — Amblyomma sculptum/cajennense), doença de Lyme não é endêmica no Brasil (mas existe a 'baggiose' / borreliose-like)",
"Tempo de fixação importa: <24h baixo risco de transmissão de Rickettsia; ≥24h aumenta risco progressivamente",
],

diag:[
"Inspeção visual — distinguir do botão/picada antiga, papiloma, sinal",
"Identificar SE possível: espécie do carrapato + região geográfica → orienta risco de Rickettsia (febre maculosa)",
"Tempo aproximado de fixação (paciente sabe ou estima)",
"Sintomas sistêmicos? Febre, cefaleia, mialgia, exantema (palma e planta) — investigar febre maculosa (mortalidade alta sem tratamento precoce)",
],

exames:["Geralmente nenhum no momento da remoção","Se sintomas sistêmicos pós-picada: hemograma + plaquetas + transaminases + sorologia para Rickettsia (se disponível)","⚠ NÃO esperar confirmação laboratorial para tratar febre maculosa suspeita (tratamento empírico + precoce salva vidas)"],

rx:[
{etapa:"inicial", d:"⚠ INSTRUMENTAL CORRETO: pinça FINA e RETA (pinça anatômica, hemostática delicada, ou pinça especializada para carrapato — tick remover)", o:"NÃO usar pinça com dentes (pode esmagar)."},

{etapa:"escala", d:"TÉCNICA CORRETA — passo a passo:", o:""},
{etapa:"escala", d:"(1) PRENDER o carrapato O MAIS PRÓXIMO POSSÍVEL DA PELE — segurar a cabeça/peças bucais, NÃO o corpo (corpo cheio pode esmagar e expelir conteúdo)", o:""},
{etapa:"escala", d:"(2) PUXAR LENTAMENTE para CIMA, em ângulo de 90° (perpendicular à pele), com FORÇA CONSTANTE e SUAVE — sem torção, sem solavanco", o:"Pode demorar 10-30 segundos puxando devagar. Não desistir cedo."},
{etapa:"escala", d:"(3) O carrapato se solta INTEIRO quando você é PACIENTE — pressa quebra peças bucais", o:""},
{etapa:"escala", d:"(4) LIMPAR a área com SF / álcool 70% / clorexidina degermante após remoção", o:""},
{etapa:"escala", d:"(5) GUARDAR o carrapato em álcool 70% em frasco fechado — IDENTIFICAÇÃO da espécie pode ser útil se paciente desenvolver sintomas", o:""},

{etapa:"adj", d:"❌ MÉTODOS FOLCLÓRICOS — NÃO USAR (todos AUMENTAM transmissão):", o:""},
{etapa:"adj", d:"NÃO queimar com fósforo / cigarro — provoca regurgitação salivar do parasita", o:""},
{etapa:"adj", d:"NÃO aplicar álcool / óleo / vaselina / esmalte / acetona / repelente — o parasita sufoca lentamente e regurgita conteúdo (mais saliva = mais patógenos transferidos)", o:""},
{etapa:"adj", d:"NÃO TORCER no sentido horário/anti-horário — quebra peças bucais", o:""},
{etapa:"adj", d:"NÃO usar pinça grossa / dedo direto — esmaga o corpo + regurgitação", o:""},

{etapa:"adj", d:"⚠ SE PEÇAS BUCAIS QUEBRAREM e ficarem na pele:", o:""},
{etapa:"adj", d:"NÃO escavar com agulha (lesão tecidual desnecessária)", o:""},
{etapa:"adj", d:"Deixar a pele expelir naturalmente (como espinho/farpa pequeno) — antissepsia local. Geralmente sai em 1-2 sem", o:""},
{etapa:"adj", d:"Antibiótico só se sinais de infecção secundária", o:""},

{etapa:"adj", d:"⚠ FEBRE MACULOSA BRASILEIRA — vigilância pós-remoção", o:""},
{etapa:"adj", d:"Orientar paciente: vigiar SINTOMAS por 14 DIAS — febre alta, cefaleia, mialgia intensa, prostração, EXANTEMA macular em palmas/plantas (3º-5º dia)", o:""},
{etapa:"adj", d:"PROCURAR ATENDIMENTO IMEDIATO se sintomas — alta letalidade sem tratamento precoce", o:""},
{etapa:"adj", d:"Tratamento empírico precoce: DOXICICLINA 100 mg VO 12/12h em adultos (e em crianças também — risco-benefício favorável em rickettsiose) × 5-7 dias", o:"Cloranfenicol é alternativa em gestante alérgica. NÃO ESPERAR confirmação laboratorial para tratar."},

{etapa:"alta", d:"ORIENTAÇÕES preventivas: roupas claras e cobertas em mata, repelente DEET, conferir corpo e roupas após exposição, dar banho até 2h após (carrapato pequeno escala antes de fixar), tratar pets", o:""},
{etapa:"alta", d:"PROFILAXIA ANTITETÂNICA conforme histórico vacinal (geralmente não indicada, exceto se ferida adicional)", o:""},
{etapa:"alta", d:"⚠ NÃO INICIAR doxiciclina profilática rotineiramente — apenas se sintomas ou área de alta endemicidade de febre maculosa com alta probabilidade (decisão clínica local)", o:""},
],

alertas:[
{nivel:"crit", txt:"FEBRE MACULOSA BRASILEIRA — alta letalidade (20-30% sem tratamento). Sintomas: febre alta + cefaleia + mialgia + EXANTEMA palmoplantar (3º-5º dia). Tratamento empírico com DOXICICLINA precoce salva vidas. NÃO ESPERAR sorologia. Doença de notificação."},
{nivel:"warn", txt:"NÃO USAR métodos folclóricos (queimar, óleo, álcool) — provocam regurgitação salivar do parasita, AUMENTANDO transmissão de patógenos."},
{nivel:"warn", txt:"NÃO TORCER, NÃO PUXAR EM SOLAVANCO — quebra peças bucais. Tração RETA, LENTA, CONSTANTE."},
{nivel:"warn", txt:"PEÇAS BUCAIS RESIDUAIS após remoção: NÃO escavar com agulha. Deixar expelir naturalmente."},
{nivel:"info", txt:"DOENÇA DE LYME (Borrelia burgdorferi) não é endêmica no Brasil. 'Borreliose brasileira' ou 'doença de Baggio-Yoshinari' existe mas é controversa. Foco principal no Brasil: FEBRE MACULOSA."},
{nivel:"info", txt:"DOXICICLINA pode ser usada em criança em rickettsiose suspeita — risco-benefício favorável (manchas dentárias com uso curto têm risco bem menor que letalidade da doença não tratada)."},
],

fluxo:null,
diretriz:"CDC Tick Removal. MS Brasil — Febre Maculosa. PCDT-MS Rickettsioses."
},
{id:"pulo-cateter-dificil", nome:"Cateterismo vesical difícil — Coudé e técnica anatômica", sis:"pulo", grav:"moderada",
cid:"-", ciap:"-",
sin:["Sonda vesical difícil","Coudé","Cateter falhou","HPB cateter","Retenção urinária"],
def:"CATETER DE FOLEY que NÃO passa — geralmente em homem com HPB (próstata aumentada faz angulação no colo vesical). Soluções: (1) Posicionar pênis verticalmente; (2) sonda COUDÉ (ponta curva); (3) lubrificação abundante + lidocaína gel; (4) cistostomia se tudo falhar.",
quadro:["Cateterismo vesical indicado (retenção urinária aguda, monitor débito urinário, cirúrgico, pós-op)","Sonda Foley 16-18 Fr não progride após inserção parcial","Mais comum em: homem >50a com HPB, paciente com cirurgia uretral prévia, trauma uretral, estenose","⚠ TENTATIVAS REPETIDAS / FORÇADAS podem causar FALSO TRAJETO, hematúria, sepse"],
diag:["Avaliar próstata ao toque retal (em homem)","Investigar HPB, hiperplasia prostática, cirurgias prévias","Atenção em paciente com hematúria (CAVB?), urgência micccional, infecção"],
exames:["Avaliar próstata clinicamente","USG bexiga (se disponível) — confirma retenção, mede volume residual","Em cateterismo prolongado: cultura urinária"],
rx:[
{etapa:"inicial", d:"⚠ PREPARAR antes de tentar: sonda lubrificada + LIDOCAÍNA GEL 2% intrauretral (5-10 mL, aguardar 5 min)"},
{etapa:"escala", d:"⚠ TÉCNICA ANATÔMICA — passo a passo"},
{etapa:"escala", d:"(1) Paciente em decúbito dorsal, pernas afastadas"},
{etapa:"escala", d:"(2) Antissepsia da glande / uretra com PVPI ou clorexidina"},
{etapa:"escala", d:"(3) Lubrificação GENEROSA da sonda (gel lubrificante)"},
{etapa:"escala", d:"(4) ⚠ INSERIR LIDOCAÍNA GEL na uretra com seringa sem agulha (5-10 mL) — distende uretra + anestesia. Aguardar 3-5 min"},
{etapa:"escala", d:"(5) Posicionar PÊNIS EM ÂNGULO DE 90° (perpendicular ao abdome, apontando para o teto) — retifica a uretra"},
{etapa:"escala", d:"(6) Inserir sonda com pressão SUAVE E CONSTANTE — sem solavanco"},
{etapa:"escala", d:"(7) Ao sentir RESISTÊNCIA (geralmente na próstata ou no esfíncter externo): NÃO FORÇAR. PEDIR paciente a respirar fundo e relaxar (tossir libera esfíncter)"},
{etapa:"escala", d:"(8) Quando passar a próstata: ABAIXAR pênis para 45° + continuar inserção até urina FLUIR"},
{etapa:"escala", d:"(9) ASPIRAR balão SOMENTE após confirmar urina fluindo (não no meio do trajeto — falso trajeto, balão na uretra, ruptura)"},
{etapa:"adj", d:"⚠ SE FALHAR — SONDA COUDÉ (ponta curva)"},
{etapa:"adj", d:"Sonda Foley com ponta em ângulo de 30° — facilita passagem pela próstata aumentada"},
{etapa:"adj", d:"Inserir com a curva apontando para CIMA (na direção da próstata superior)"},
{etapa:"adj", d:"Geralmente disponível em hospitais — UBS pode não ter"},
{etapa:"adj", d:"⚠ AINDA FALHAR — CATETERISMO INTERMITENTE com sonda Nelaton 12-14 Fr (mais fina, sem balão)"},
{etapa:"adj", d:"Alivia retenção imediatamente. Depois encaminhar urologia"},
{etapa:"adj", d:"⚠ ÚLTIMO RECURSO — CISTOSTOMIA SUPRAPÚBICA"},
{etapa:"adj", d:"Indicação: retenção aguda + falha de cateterismo uretral + necessidade de drenagem"},
{etapa:"adj", d:"Técnica: punção suprapúbica com kit específico (cistofix) OU acesso percutâneo guiado por USG"},
{etapa:"adj", d:"Profissional treinado — emergência cirúrgica em UBS"},
{etapa:"adj", d:"⚠ HEMATÚRIA APÓS TENTATIVA: avaliar lesão uretral, falso trajeto. Encaminhar urologia"},
{etapa:"alta", d:"⚠ PÓS-PROCEDIMENTO: monitorizar débito urinário, hematúria, dor lombar"},
{etapa:"alta", d:"Retenção urinária aguda crônica (>1L de resíduo): risco de poliúria pós-obstrutiva — monitor"},
{etapa:"alta", d:"ENCAMINHAR UROLOGIA: paciente com HPB sintomática + retenção aguda — pode precisar RTU/cirurgia"},
{etapa:"alta", d:"⚠ EM CATETERISMO DIFÍCIL/RECORRENTE: alfa-bloqueador (tansulosina 0,4 mg/d) pode facilitar próxima tentativa após 7-14 dias"},
],
alertas:[
{nivel:"crit", txt:"NUNCA FORÇAR a sonda — risco de FALSO TRAJETO, ruptura uretral, sepse. Se resistência: parar, relaxar paciente, tentar Coudé ou cistostomia."},
{nivel:"crit", txt:"NUNCA INSUFLAR BALÃO antes de confirmar urina fluindo — pode estar na uretra, causar ruptura."},
{nivel:"warn", txt:"LIDOCAÍNA GEL intrauretral (5-10 mL, 5 min) reduz desconforto + relaxa esfíncter. Padrão moderno."},
{nivel:"warn", txt:"POSICIONAR PÊNIS A 90° (perpendicular) retifica uretra. Abaixar para 45° após passar próstata."},
{nivel:"warn", txt:"PACIENTE TRAUMA PÉLVICO/URETRAL: NÃO TENTAR cateterismo até excluir lesão uretral (sangue no meato, hematoma perineal). Uretrocistografia retrógrada + urologia."},
{nivel:"info", txt:"CISTOSTOMIA suprapúbica: kit Cystofix ou similar. Profissional treinado. Indicação: falha de cateterismo + retenção urgente."},
],
fluxo:null, diretriz:"EAU Guidelines. SBU. Roberts & Hedges."
},
{id:"pulo-colica-lactente", nome:"Cólica do lactente — 5 S's de Karp", sis:"pulo", grav:"baixa",
cid:"R10.4", ciap:"D02",
sin:["Cólica do lactente","Colic","5 S's","Bebê chorando","Choro inconsolável","Bebê inquieto","Period of PURPLE crying"],

def:"CÓLICA DO LACTENTE = choro paroxístico inconsolável em bebê saudável (regra de Wessel: ≥3h/d, ≥3d/sem, ≥3sem). Pico entre 6 sem-3 meses. AUTOLIMITADA, MULTIFATORIAL. 5 S's de Harvey Karp é abordagem prática que ACALMA o bebê e a família.",

quadro:[
"Bebê saudável, geralmente 2 sem-3 meses, com episódios de CHORO INCONSOLÁVEL — geralmente no fim da tarde/noite",
"Crise tipica: bebê tenso, joelhos fletidos, face avermelhada, parece com dor, chora intensamente, difícil acalmar",
"⚠ DIAGNÓSTICO DE EXCLUSÃO — descartar causas orgânicas primeiro: fome, fralda suja, frio/calor, doença (otite, ITU, intolerância alimentar, refluxo, fissura anal, hérnia encarcerada, alergia ao leite), trauma (síndrome do bebê sacudido, abuso)",
"⚠ TORNIQUETE DE CABELO em dedos / pênis — causa dor inexplicada em bebê — sempre examinar mãos, pés, genital",
],

diag:[
"Exame físico COMPLETO — vestir e despir bebê inteiro",
"Avaliar todos os dedos das mãos e pés (torniquete de cabelo), face (fissura corneana, otite — pesquisar pavilhão auricular pequeno), pênis (torniquete, parafimose), ânus (fissura)",
"Padrão de choro, ganho de peso, alimentação, sono, fralda",
"Estado emocional dos pais (esgotamento, depressão pós-parto)",
],

exames:["Geralmente nenhum se exame normal","EAS + urocultura se febre, vômito, ganho ponderal ruim","Avaliar APLV (alergia proteína leite de vaca) se sangue nas fezes, exantema, ganho ruim — teste de exclusão materno (se aleitamento)"],

rx:[
{etapa:"inicial", d:"⚠ EXAME FÍSICO COMPLETO — DESCARTAR CAUSAS ORGÂNICAS antes de assumir cólica", o:""},

{etapa:"inicial", d:"INVESTIGAR sinais de alarme: vômitos persistentes, ganho ponderal ruim, febre, fezes com sangue/muco, abdome distendido, palidez, hipoatividade, dispneia, exantema, irritabilidade desproporcional", o:""},

{etapa:"escala", d:"⚠ TÉCNICA DOS 5 S's (Harvey Karp) — efetiva em maioria dos casos", o:""},

{etapa:"escala", d:"S1 — SWADDLE (enrolar/contenção)", o:""},
{etapa:"escala", d:"Enrolar bebê em pano leve, braços junto ao corpo, deixando quadril/pernas livres (NÃO apertar pernas — risco displasia)", o:"Recria a sensação intrauterina. Bebê se sente contido e seguro."},
{etapa:"escala", d:"NÃO apertar peito (respiração), NÃO enrolar muito (calor)", o:""},

{etapa:"escala", d:"S2 — SIDE / STOMACH (posição lateral ou prono no colo)", o:""},
{etapa:"escala", d:"Posicionar bebê em DECÚBITO LATERAL ou PRONO no COLO (NÃO PARA DORMIR — só ENQUANTO acalma)", o:"⚠ Para DORMIR = sempre supino (dorso para baixo) — prevenção morte súbita."},
{etapa:"escala", d:"Calma reflexo da posição supina (que pode dar sensação de queda)", o:""},

{etapa:"escala", d:"S3 — SHUSH (chiar — 'shhhh')", o:""},
{etapa:"escala", d:"Som contínuo 'shhhh' próximo ao ouvido do bebê — TÃO ALTO quanto o choro dele", o:"Simula 'ruído branco' uterino. Som de chuveiro, aspirador, secador, vento, white noise app."},

{etapa:"escala", d:"S4 — SWING (balanço)", o:""},
{etapa:"escala", d:"Movimentos RÁPIDOS E PEQUENOS — embalo no colo, balanço de cadeira, dança suave", o:"⚠ NUNCA chacoalhar com força — síndrome do bebê sacudido."},

{etapa:"escala", d:"S5 — SUCK (sucção)", o:""},
{etapa:"escala", d:"Oferecer mama (se amamentando) ou chupeta + sucção não nutritiva", o:"Sucção é REGULADOR EMOCIONAL natural do bebê."},

{etapa:"escala", d:"⚠ COMBINAR OS 5 S's SIMULTANEAMENTE — efeito sinérgico (não isolado)", o:""},

{etapa:"adj", d:"OUTRAS INTERVENÇÕES úteis:", o:""},

{etapa:"adj", d:"CONTATO PELE A PELE (kangaroo care) — regulação emocional e térmica", o:""},

{etapa:"adj", d:"DIETA MATERNA se aleitamento exclusivo: tentar EXCLUSÃO de LV/proteína de leite por 2 sem (alergia leite vaca em ~5-10% dos bebês com cólica importante)", o:"Se melhora ↓ 50% → reintroduzir para confirmar APLV. Se mantém: voltar dieta normal."},

{etapa:"adj", d:"FÓRMULA HIDROLISADA — se aleitamento artificial + APLV confirmada", o:""},

{etapa:"adj", d:"PROBIÓTICOS — L. reuteri DSM 17938 — 1 gota/d em bebê amamentado pode reduzir choro", o:"Evidência moderada. Cochrane mostra benefício modesto."},

{etapa:"adj", d:"⚠ NÃO USAR (sem evidência ou com risco):", o:""},
{etapa:"adj", d:"Simeticona — sem evidência consistente, embora seja inócua", o:""},
{etapa:"adj", d:"Chás (camomila, erva-doce, etc) — risco de intoxicação hídrica em bebê pequeno, sem evidência", o:""},
{etapa:"adj", d:"DICICLOMINA — CONTRAINDICADA em <6 meses (apneia, óbito)", o:""},
{etapa:"adj", d:"Homeopatia, açúcar, álcool — não usar", o:""},

{etapa:"adj", d:"⚠ APOIO À FAMÍLIA — ESSENCIAL", o:""},
{etapa:"adj", d:"Validar exaustão dos pais — sono interrompido, ansiedade, dúvida sobre competência parental", o:""},
{etapa:"adj", d:"Investigar DEPRESSÃO PÓS-PARTO (Edinburgh)", o:""},
{etapa:"adj", d:"Orientar 'time out' — pôr bebê seguro no berço por 5-10 min se pai/mãe sente exaustão extrema (alternativa segura ao bebê sacudido)", o:""},
{etapa:"adj", d:"Período PURPLE crying (Ronald Barr): orientar pais sobre fase normal de choro intenso 2sem-3-4m — autolimitada", o:""},

{etapa:"alta", d:"⚠ ENCAMINHAR PEDIATRA / GASTROPEDIATRIA: ganho ponderal ruim, sangue/muco nas fezes, suspeita APLV, refluxo grave, choro não responde aos 5 S's, sinais de alarme", o:""},

{etapa:"alta", d:"PROGNÓSTICO: cólica é AUTOLIMITADA — geralmente resolve em 3-4 meses (mais comum a partir das 6 sem, melhora dramática após 3m)", o:""},

{etapa:"alta", d:"⚠ NUNCA SACUDIR O BEBÊ — síndrome do bebê sacudido pode causar HSA, lesão cerebral, morte. Pôr no berço e respirar antes de pegar de novo é melhor", o:""},
],

alertas:[
{nivel:"crit", txt:"SÍNDROME DO BEBÊ SACUDIDO: NUNCA sacudir bebê chorando — HSA, lesão cerebral, morte. Em exaustão extrema: pôr bebê no berço e sair 5-10 min para respirar."},
{nivel:"crit", txt:"DESCARTAR causas orgânicas ANTES de assumir cólica: TORNIQUETE DE CABELO (dedos, pênis), hérnia encarcerada, otite, ITU, fissura anal, APLV, refluxo grave, lesão por abuso."},
{nivel:"crit", txt:"DICICLOMINA é CONTRAINDICADA em <6 meses — apneia, óbito. NÃO PRESCREVER."},
{nivel:"warn", txt:"POSIÇÃO LATERAL/PRONA para acalmar é APENAS NO COLO acordado. Para DORMIR é SEMPRE SUPINO (back to sleep) — prevenção SMSL."},
{nivel:"warn", txt:"CHÁS para bebê pequeno (camomila, erva-doce, anis): risco INTOXICAÇÃO HÍDRICA + hiponatremia. NÃO usar. Sem evidência de eficácia."},
{nivel:"warn", txt:"APLV (alergia proteína leite vaca): considerar se sangue/muco nas fezes, exantema, ganho ponderal ruim, eosinofilia. Teste de exclusão materno por 2 sem (se amamentando)."},
{nivel:"warn", txt:"ENROLAR (swaddle): braços junto, mas QUADRIL E PERNAS LIVRES — apertar pernas = risco displasia coxofemoral."},
{nivel:"info", txt:"L. REUTERI DSM 17938: evidência moderada de redução do choro em bebês amamentados. 1 gota/d × 3-4 sem."},
{nivel:"info", txt:"PERÍODO PURPLE CRYING (Ronald Barr): orientar pais — choro intenso é fase NORMAL do desenvolvimento (Peak 6sem-3m), autolimitada."},
],

fluxo:null,
diretriz:"Harvey Karp — Happiest Baby on the Block. AAP. Ronald Barr — Period of PURPLE crying. SBP."
},
{id:"pulo-conv-febril", nome:"Convulsão febril em criança — NÃO conter, NÃO objeto na boca", sis:"pulo", grav:"moderada",
cid:"R56.0", ciap:"N07",
sin:["Convulsão febril","Crise febril","Febre convulsiva","Convulsão na criança","Status febril"],

def:"Convulsão FEBRIL = crise convulsiva em criança entre 6 meses-5 anos associada a febre, SEM infecção SNC ou outra causa identificada. SIMPLES (90%): generalizada, <15 min, não recorrente em 24h. COMPLEXA (10%): focal, >15 min, recorrente. Manejo é POSICIONAL + segurança, não medicação aguda na maioria.",

quadro:[
"Criança 6m-5a com febre + crise convulsiva (geralmente tônico-clônica generalizada)",
"FEBRIL SIMPLES (90%): generalizada (TCG), <15 min, isolada em 24h, sem alteração neurológica pós-ictal duradoura",
"FEBRIL COMPLEXA: focal, >15 min, recorrente em 24h, ou alteração neurológica pós-ictal",
"⚠ EXCLUIR: meningite (rigidez nucal, abaulamento de fontanela, vômito, alteração mental), encefalite, abuso (lesões), distúrbio metabólico, intoxicação",
"PROGNÓSTICO: 95% das crianças com febril SIMPLES NÃO desenvolvem epilepsia. Recidiva ~30% (maior se 1ª crise <12m de idade)",
],

diag:[
"Avaliar SINAIS DE INFECÇÃO SNC: rigidez nucal, abaulamento fontanela, fontanela tensa, alteração consciência além de pós-ictal breve, vômito persistente, exantema petequial",
"Em criança <12 meses com convulsão febril: considerar punção lombar (sinais de meningite menos evidentes)",
"Procurar foco de febre: otite, IVAS, ITU, faringoamigdalite, exantema viral",
],

exames:["Foco da febre — geralmente clínico","Glicemia capilar","Em sinais de alarme ou primeira crise: hemograma, eletrólitos, glicemia, EAS+cultura, considerar PL"],

rx:[
{etapa:"inicial", d:"⚠ MANEJO INICIAL = POSICIONAL + SEGURANÇA — não medicação na maioria", o:""},

{etapa:"escala", d:"DURANTE A CRISE:", o:""},

{etapa:"escala", d:"(1) MANTER CALMA, cronometrar duração", o:"Pais sentem como 'eternidade' — geralmente dura 1-3 min."},

{etapa:"escala", d:"(2) POSIÇÃO LATERAL DE SEGURANÇA — decúbito lateral, cabeça em superfície macia, longe de objetos rígidos", o:"Evita aspiração + lesão por queda."},

{etapa:"escala", d:"❌ NÃO CONTER os movimentos (não fixar braços/pernas) — pode causar fratura, deslocamento, mais agitação", o:""},

{etapa:"escala", d:"❌ NÃO COLOCAR NADA NA BOCA da criança (pano, colher, dedo) — risco de aspiração, lesão dental, dedo do socorrista", o:""},

{etapa:"escala", d:"❌ NÃO ATIRAR ÁGUA, NÃO CHACOALHAR — não acelera resolução, pode causar dano", o:""},

{etapa:"escala", d:"(3) AFASTAR objetos pontiagudos / quentes próximos", o:""},

{etapa:"escala", d:"(4) OBSERVAR: tipo de movimento (generalizado vs focal), duração, presença de cianose", o:""},

{etapa:"escala", d:"(5) CRONOMETRAR — se >5 minutos = STATUS EPILEPTICUS, intervir farmacologicamente", o:""},

{etapa:"adj", d:"⚠ INTERVENÇÃO FARMACOLÓGICA se crise >5 min:", o:""},

{etapa:"adj", d:"MIDAZOLAM 0,2 mg/kg INTRANASAL (1 metade do volume em cada narina) — PRIMEIRA LINHA quando sem acesso venoso", o:"Início rápido (3-5 min). Não precisa puncionar."},

{etapa:"adj", d:"OU DIAZEPAM 0,5 mg/kg VR (retal) — alternativa", o:"Solução de diazepam injetável pode ser usada por via retal. Início 5-10 min."},

{etapa:"adj", d:"OU MIDAZOLAM 0,2 mg/kg IM — se preparado", o:""},

{etapa:"adj", d:"Com acesso venoso: DIAZEPAM 0,2-0,3 mg/kg IV lento OU MIDAZOLAM 0,1 mg/kg IV", o:""},

{etapa:"adj", d:"REPETIR após 5 min se crise persiste — máx 2 doses BZD", o:""},

{etapa:"adj", d:"PROTOCOLO STATUS EPILÉPTICO se persiste após 2 doses de BZD: fenitoína OU ácido valproico OU levetiracetam — ESPECIALISTA + UTI", o:""},

{etapa:"adj", d:"PÓS-CRISE: posição lateral de segurança, monitorizar respiração, glicemia capilar", o:""},

{etapa:"escala", d:"⚠ TRATAMENTO DA FEBRE — DURANTE/APÓS A CRISE:", o:""},

{etapa:"escala", d:"PARACETAMOL 10-15 mg/kg VO/VR OU dipirona 10-25 mg/kg VO/VR — pode aplicar via retal se ainda em crise/pós-ictal", o:""},

{etapa:"escala", d:"IBUPROFENO 5-10 mg/kg VO em criança >6m sem contraindicações (após pós-ictal)", o:""},

{etapa:"escala", d:"⚠ ANTIPIRÉTICO NÃO PREVINE recidiva da convulsão febril — administrar para conforto, não prevenção", o:"Estudos não mostram que antitérmico reduz recidiva. Foco é DESCOBRIR o foco da febre."},

{etapa:"adj", d:"INVESTIGAR FOCO DA FEBRE — IVAS, otite, faringoamigdalite, ITU, exantema viral, gastroenterite", o:""},

{etapa:"adj", d:"⚠ SINAIS DE ALARME — IR para PA/HOSPITAL imediatamente:", o:""},
{etapa:"adj", d:"Crise >5 min ou recidiva em 24h", o:""},
{etapa:"adj", d:"Sinais meníngeos (rigidez nucal, abaulamento fontanela, exantema petequial)", o:""},
{etapa:"adj", d:"Pós-ictal prolongado (>1h sem volta ao basal)", o:""},
{etapa:"adj", d:"Idade <6 meses ou >5 anos (atípica para febril simples)", o:""},
{etapa:"adj", d:"Crise focal", o:""},
{etapa:"adj", d:"Vômito persistente, letargia, irritabilidade, fontanela abaulada", o:""},
{etapa:"adj", d:"Imunossupressão ou contato com meningite", o:""},

{etapa:"alta", d:"ORIENTAR PAIS após alta:", o:""},
{etapa:"alta", d:"95% das convulsões febris simples NÃO levam a epilepsia", o:""},
{etapa:"alta", d:"Recidiva ~30% em 1-2a se 1ª crise <12m", o:""},
{etapa:"alta", d:"Tratar futuros episódios FEBRIS com antitérmico — mas SEM evidência de prevenção", o:""},
{etapa:"alta", d:"Não usar BZD profilático (efeitos colaterais > benefício marginal)", o:""},
{etapa:"alta", d:"Procurar atendimento se: crise >5 min, recidiva em 24h, criança não volta ao basal, sinais meníngeos", o:""},

{etapa:"alta", d:"ENCAMINHAR NEUROPEDIATRIA: convulsão febril COMPLEXA, recidivas frequentes, sinais focais, atraso do desenvolvimento, EEG anormal", o:""},
],

alertas:[
{nivel:"crit", txt:"NÃO CONTER, NÃO COLOCAR NADA NA BOCA, NÃO JOGAR ÁGUA. Posição lateral de segurança, cronometrar duração."},
{nivel:"crit", txt:"CRISE >5 MIN = STATUS — intervir com benzodiazepínico (midazolam intranasal/IM, diazepam retal)."},
{nivel:"crit", txt:"SINAIS DE INFECÇÃO SNC (rigidez nucal, abaulamento fontanela, exantema petequial, alteração mental além de pós-ictal): NÃO É CONVULSÃO FEBRIL SIMPLES — investigar meningite (PL)."},
{nivel:"warn", txt:"CONVULSÃO FEBRIL COMPLEXA (focal, >15 min, recorrente 24h): investigação MAIS extensa, considerar internação."},
{nivel:"warn", txt:"ANTITÉRMICO NÃO PREVINE recidiva — usar para conforto. Não dar BZD profilático."},
{nivel:"warn", txt:"<6 meses ou >5 anos com convulsão febril = NÃO típica — investigar outras causas."},
{nivel:"info", txt:"95% das convulsões febris simples NÃO desenvolvem epilepsia. Tranquilizar pais é parte importante do manejo."},
{nivel:"info", txt:"RECIDIVA ~30% (mais se 1ª crise <12 meses ou hist familiar). Tranquilizar mas orientar sinais de alarme."},
],

fluxo:null,
diretriz:"AAP Febrile Seizures Guidelines. SBP. ILAE."
},
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
{id:"pulo-cotovelo-baba", nome:"Cotovelo de babá — subluxação da cabeça do rádio", sis:"pulo", grav:"baixa",
cid:"S53.0", ciap:"L80",
sin:["Cotovelo de babá","Pronação dolorosa","Subluxação da cabeça do rádio","Nursemaid elbow","Pulled elbow"],
def:"SUBLUXAÇÃO da cabeça do rádio em criança 1-4 anos — TRAÇÃO axial no antebraço estendido (puxar braço quando criança vai cair, levantar pela mão). Quadro: criança não move o braço, segurando-o em pronação. REDUÇÃO POR SUPINAÇÃO + FLEXÃO é tão simples que resolve na UBS em 30 segundos.",
quadro:["Criança 1-4 anos (faixa típica) — mais comum em 2-3 anos","TRAÇÃO axial brusca no antebraço — pais 'levantando pela mão' ao atravessar rua, ou puxando ao cair","Criança RECUSA usar o braço, mantém em ABDUÇÃO leve + PRONAÇÃO, antebraço pendente","SEM edema, SEM deformidade visível, SEM dor à palpação focal","Choro inicial → criança 'pseudoparalítica' do braço","⚠ EXCLUIR: fratura supracondiliana (edema, deformidade, dor focal), trauma intencional"],
diag:["Clínica clássica + história típica","NÃO precisa Rx em quadro CLÁSSICO (sem trauma direto, criança 1-4a, sem edema/deformidade)","Rx em casos atípicos: trauma direto, idade fora da faixa, edema visível, sem história de tração"],
exames:["Em quadro CLÁSSICO: nenhum","Rx cotovelo em caso atípico ou se redução falhar"],
rx:[
{etapa:"inicial", d:"⚠ AVALIAR — quadro clássico vs atípico"},
{etapa:"inicial", d:"CLÁSSICO: idade 1-4a, tração axial, criança não move o braço, sem edema/deformidade → tentar redução SEM Rx"},
{etapa:"inicial", d:"ATÍPICO: idade fora, trauma direto, edema, dor focal → Rx primeiro"},
{etapa:"escala", d:"⚠ MANOBRA DE REDUÇÃO POR SUPINAÇÃO + FLEXÃO (clássica, ~80% sucesso)"},
{etapa:"escala", d:"(1) Examinador SENTADO na frente da criança (no colo do cuidador)"},
{etapa:"escala", d:"(2) Estabilizar o cotovelo com uma mão (polegar sobre cabeça do rádio)"},
{etapa:"escala", d:"(3) Com a outra mão, segurar o punho/mão da criança"},
{etapa:"escala", d:"(4) SUPINAR completamente o antebraço (palma para cima)"},
{etapa:"escala", d:"(5) ENQUANTO supina → FLEXIONAR o cotovelo levando a mão da criança ao OMBRO ipsilateral"},
{etapa:"escala", d:"(6) Sente um 'clunk' / pequeno clique sob o polegar sobre a cabeça do rádio"},
{etapa:"escala", d:"⚠ MANOBRA ALTERNATIVA — HIPERPRONAÇÃO (também eficaz, menos dolorosa)"},
{etapa:"escala", d:"Mesmo posicionamento — estabilizar cotovelo, segurar punho"},
{etapa:"escala", d:"HIPERPRONAR rapidamente o antebraço (palma para baixo)"},
{etapa:"escala", d:"Sente o 'clique' sob o polegar"},
{etapa:"adj", d:"PÓS-REDUÇÃO: aguardar 5-15 min — criança volta a USAR o braço normalmente (chorar pelo doce, alcançar brinquedo)"},
{etapa:"adj", d:"⚠ Se em 30 min criança NÃO volta a usar: tentar a outra manobra OU repetir → se falhar, Rx para descartar fratura oculta"},
{etapa:"alta", d:"ORIENTAR PAIS: NÃO levantar criança pelas mãos / antebraços — pegar pelos braços ou tórax"},
{etapa:"alta", d:"RECIDIVA é frequente (~25%) — pais aprendem a reduzir em casa em recidivas"},
{etapa:"alta", d:"GERALMENTE após 5-6 anos cessa (ligamento anular fortalece)"},
],
alertas:[
{nivel:"warn", txt:"⚠ EM QUADRO ATÍPICO (idade fora, trauma direto, edema, deformidade): Rx ANTES — excluir fratura supracondiliana (emergência) ou outras lesões."},
{nivel:"warn", txt:"FRATURA SUPRACONDILIANA do úmero é EMERGÊNCIA pediátrica — dor intensa, deformidade, edema. NÃO tentar redução. Encaminhar ortopedia urgente."},
{nivel:"warn", txt:"FALHA APÓS 2 MANOBRAS: solicitar Rx + considerar referenciamento."},
{nivel:"info", txt:"MANOBRA DE HIPERPRONAÇÃO é menos dolorosa e tão eficaz quanto supinação+flexão — algumas séries mostram melhor sucesso."},
{nivel:"info", txt:"RECIDIVA ~25%. Orientar pais sobre causa (tração axial) — prevenção é educacional."},
],
fluxo:null, diretriz:"AAP. SBP. Cochrane Review Nursemaid Elbow."
},
{id:"pulo-crede", nome:"Retenção urinária — manobra de Credé / Valsalva miccional", sis:"pulo", grav:"moderada",
cid:"R33", ciap:"U08",
sin:["Retenção urinária","Manobra de Credé","Bexiga neurogênica","Valsalva miccional"],
def:"MANOBRA DE CREDÉ = compressão manual suprapúbica para esvaziar bexiga = útil em RETENÇÃO POR HIPOATIVIDADE DETRUSORA / BEXIGA NEUROGÊNICA, pós-cirúrgica, parto. ⚠ NÃO USAR se OBSTRUÇÃO (HPB, cálculo, tumor) — refluxo vesico-ureteral / lesão renal.",
quadro:["Retenção urinária aguda em paciente sem obstrução evidente (pós-parto, pós-cirurgia, anestesia, bexiga neurogênica, medicamentos anticolinérgicos)","Distensão suprapúbica + desejo miccional + incapacidade de urinar","⚠ EXCLUIR OBSTRUÇÃO antes — HPB com 'globo vesical' = cateterismo, NÃO Credé"],
diag:["Inspeção + palpação suprapúbica","USG bexiga: volume residual","Toque retal (próstata em homem)","Excluir: HPB, cálculo, infecção, estenose, tumor"],
exames:["USG bexiga (volume)","Urina I + cultura","Em homem: PSA, toque retal"],
rx:[
{etapa:"inicial", d:"⚠ AVALIAR ETIOLOGIA — Credé serve apenas para HIPOATIVIDADE detrusora (sem obstrução)"},
{etapa:"inicial", d:"CONTRAINDICAÇÕES: HPB, cálculo vesical, tumor, estenose uretral, refluxo vesicoureteral já conhecido"},
{etapa:"escala", d:"⚠ MANOBRA DE CREDÉ — apenas em paciente SEM obstrução"},
{etapa:"escala", d:"(1) Paciente sentado no vaso sanitário (postura miccional natural)"},
{etapa:"escala", d:"(2) Inclinar-se levemente para FRENTE"},
{etapa:"escala", d:"(3) Aplicar PRESSÃO MANUAL CONSTANTE SUPRAPÚBICA com as mãos espalmadas (não soco)"},
{etapa:"escala", d:"(4) Em direção INFERO-POSTERIOR (apontando para o sacro)"},
{etapa:"escala", d:"(5) Pressão por 30-60 SEGUNDOS — paciente respira normal e relaxa períneo"},
{etapa:"escala", d:"(6) Pode REPETIR várias vezes"},
{etapa:"adj", d:"⚠ MANOBRA DE VALSALVA MICCIONAL — alternativa/adjunta"},
{etapa:"adj", d:"Paciente sentado, inclinado para frente"},
{etapa:"adj", d:"RESPIRA FUNDO + PRENDE + 'EMPURRA' como se fosse evacuar"},
{etapa:"adj", d:"Combina-se com Credé"},
{etapa:"adj", d:"⚠ ESTIMULOS COMPLEMENTARES:"},
{etapa:"adj", d:"Som de água corrente (torneira, descarga)"},
{etapa:"adj", d:"Compressa morna suprapúbica"},
{etapa:"adj", d:"Imersão da mão em água morna (reflexo gastrocólico-vesical)"},
{etapa:"adj", d:"Relaxamento perineal — respiração profunda"},
{etapa:"adj", d:"⚠ SE PERSISTIR RETENÇÃO + sintomas + volume residual significativo: cateterismo (intermitente ou demora)"},
{etapa:"adj", d:"Após resolução: investigar causa — bexiga neurogênica, neuropatia diabética, medicamentos (anticolinérgicos, opioides, antidepressivos tricíclicos)"},
{etapa:"alta", d:"⚠ EVITAR CREDÉ em paciente com BEXIGA NEUROGÊNICA + DSSE (dissinergia detrusor-esfincteriana) — pode causar refluxo vesico-ureteral e lesão renal. Avaliar urodinâmica"},
{etapa:"alta", d:"ENCAMINHAR UROLOGIA: retenções recorrentes, suspeita de bexiga neurogênica, HPB sintomática"},
{etapa:"alta", d:"REVISAR MEDICAÇÕES com efeito anticolinérgico/retenção: amitriptilina, oxibutinina, anti-histamínicos, opioides, descongestionantes (pseudoefedrina), antiparkinsonianos"},
],
alertas:[
{nivel:"crit", txt:"CREDÉ É CONTRAINDICADO em obstrução baixa (HPB, cálculo, tumor, estenose) — risco refluxo vesico-ureteral e lesão renal. EXCLUIR obstrução antes."},
{nivel:"warn", txt:"BEXIGA NEUROGÊNICA com DISSINERGIA detrusor-esfincteriana: Credé pode causar refluxo + lesão renal alta — urologia + urodinâmica."},
{nivel:"warn", txt:"PRESSÃO SUPRAPÚBICA: mãos ESPALMADAS, direção ínfero-posterior (para sacro). NÃO socar."},
{nivel:"info", txt:"COMBINAR Credé + Valsalva + estímulos auxiliares (água corrente, calor) aumenta taxa de sucesso."},
{nivel:"info", txt:"CAUSAS MEDICAMENTOSAS de retenção: anticolinérgicos, opioides, antidepressivos tricíclicos, anti-histamínicos, pseudoefedrina."},
],
fluxo:null, diretriz:"EAU Guidelines. SBU. Bexiga neurogênica protocols."
},
{id:"pulo-crupe-leve", nome:"Crupe leve / tosse de cachorro — ar úmido e calmaria", sis:"pulo", grav:"baixa",
cid:"J05", ciap:"R77",
sin:["Crupe","Laringotraqueíte","Tosse de cachorro","Estridor noturno","Westley score"],
def:"CRUPE VIRAL (laringotraqueíte por parainfluenza, RSV, influenza) — criança 6m-6a com tosse 'rouca/de cachorro' + estridor inspiratório + rouquidão. CASO LEVE (sem estridor em repouso): conduta domiciliar com ar úmido/frio + calmaria + corticoide oral. Não precisa internar.",
quadro:["Criança 6m-6a, pré-quadro de IVAS, evolui com tosse 'rouca/de cachorro' + rouquidão + ESTRIDOR INSPIRATÓRIO","Tipicamente PIORA À NOITE","WESTLEY SCORE: 0-2 leve / 3-7 moderado / 8-11 grave / ≥12 falência iminente","⚠ EXCLUIR: epiglotite (febre alta, sialorreia, posição em tripé, súbito), corpo estranho, anafilaxia, abscesso retrofaríngeo"],
diag:["Clínica — tosse de cachorro + estridor","Westley score","Avaliar SatO₂"],
exames:["Geralmente nenhum em caso leve","Rx pescoço AP (sinal da torre/aguja em coluna de ar) — útil se atípico"],
rx:[
{etapa:"inicial", d:"⚠ CASO LEVE (Westley 0-2, sem estridor em repouso, criança ativa)"},
{etapa:"escala", d:"⚠ AR ÚMIDO FRIO — abrir freezer, sair ao ar frio noturno, banho de chuveiro com vapor", o:"Ar frio causa vasoconstrição da mucosa edemaciada → melhora estridor. Evidência limitada mas seguro e amplamente recomendado."},
{etapa:"escala", d:"CALMARIA — criança chorando piora estridor (Bernoulli — maior fluxo, mais colapso). Colo dos pais, canção"},
{etapa:"escala", d:"⚠ CORTICOIDE ORAL — DEXAMETASONA é padrão", do:"Dexametasona 0,15-0,6 mg/kg VO DOSE ÚNICA (máx 16 mg)", via:"VO", o:"Padrão é 0,6 mg/kg em caso moderado; 0,15-0,3 mg/kg em leve. Dose única. Início ação 2-4h."},
{etapa:"escala", d:"OU Prednisolona 1-2 mg/kg/d × 3 dias", o:"Alternativa se dexa indisponível."},
{etapa:"escala", d:"⚠ HIDRATAÇÃO — oferecer líquidos frios (água, picolé)", o:"Confortou + frescor local."},
{etapa:"adj", d:"⚠ CASO MODERADO-GRAVE (Westley ≥3, estridor em repouso): ADRENALINA NEBULIZADA"},
{etapa:"adj", d:"Adrenalina racêmica 0,5 mL ou L-adrenalina 1:1000 0,5 mL/kg (máx 5 mL) em SF 3-5 mL NBZ", o:"Reduz edema. Efeito 30 min-2h. OBSERVAR 3-4h após (rebote)."},
{etapa:"adj", d:"+ Dexametasona 0,6 mg/kg VO/IM"},
{etapa:"adj", d:"O₂ se SatO₂ <92%"},
{etapa:"alta", d:"ORIENTAR PAIS: piora noturna é típica. Vapor de banheiro / ar frio noturno se piora estridor"},
{etapa:"alta", d:"PROCURAR EMERGÊNCIA: estridor em repouso, dispneia, cianose, recusa de líquidos, sialorreia, posição em tripé, alteração do nível de consciência"},
{etapa:"alta", d:"⚠ EPIGLOTITE (raro pós-vacinação Hib): febre alta + sialorreia + posição em tripé + voz abafada — NÃO mexer na boca, encaminhar via aérea urgente"},
],
alertas:[
{nivel:"crit", txt:"⚠ EPIGLOTITE: febre alta + sialorreia + posição em tripé + voz abafada (não 'rouca'). NÃO mexer na boca / NÃO deitar a criança. Via aérea urgente. Raro pós Hib."},
{nivel:"crit", txt:"⚠ ABSCESSO RETROFARÍNGEO: dor cervical + rigidez + dispneia. Excluir em criança com sintomas atípicos."},
{nivel:"warn", txt:"DEXAMETASONA dose única VO é eficaz mesmo em caso leve — reduz consultas de retorno. Início 2-4h."},
{nivel:"warn", txt:"ADRENALINA NEBULIZADA: observar 3-4h após (efeito rebote possível). Não dar alta antes."},
{nivel:"info", txt:"AR ÚMIDO FRIO: evidência limitada mas amplamente usado. Calmar a criança é tão importante quanto."},
{nivel:"info", txt:"CRUPE recorrente >2 episódios/ano: avaliar refluxo, alergia, anatômica."},
],
fluxo:null, diretriz:"SBP. AAP Croup Guidelines. Westley score."
},
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
{id:"pulo-engasgo-bebe", nome:"Engasgo em bebê <1 ano — golpes nas costas + compressões torácicas", sis:"pulo", grav:"alta",
cid:"T17", ciap:"R87",
sin:["Engasgo bebê","Aspiração corpo estranho lactente","Heimlich bebê","BLS pediátrico"],
def:"OBSTRUÇÃO de via aérea por corpo estranho em <1 ano = NÃO USAR HEIMLICH (compressão abdominal lesa órgãos abdominais do lactente). USAR alternância de 5 GOLPES NAS COSTAS + 5 COMPRESSÕES TORÁCICAS até desobstruir ou perda de consciência.",
quadro:["Bebê com SUFOCAÇÃO súbita durante alimentação/exploração oral","Sinais OBSTRUÇÃO COMPLETA: ausência de tosse, ausência de choro, cianose, perda de consciência iminente","OBSTRUÇÃO PARCIAL: tosse, choro, estridor — NÃO INTERVIR com manobra, encorajar tosse"],
diag:["Clínica — testemunho ou suspeita","Avaliar movimento de ar, capacidade de chorar, cor"],
exames:["Nenhum no momento agudo","Pós-resolução: Rx tórax se suspeita aspiração residual"],
rx:[
{etapa:"inicial", d:"⚠ OBSTRUÇÃO PARCIAL (bebê tossindo, chorando, com ar): NÃO INTERVIR com manobra. Encorajar tosse. Transportar para hospital."},
{etapa:"inicial", d:"OBSTRUÇÃO COMPLETA (sem tosse, sem choro, cianótico): INICIAR MANOBRA"},
{etapa:"escala", d:"⚠ MANOBRA — em <1 ANO — NÃO USAR HEIMLICH"},
{etapa:"escala", d:"(1) Posicionar bebê em PRONO no antebraço, cabeça mais baixa que o tórax, mão apoiando mandíbula (NÃO comprimir garganta)"},
{etapa:"escala", d:"(2) Aplicar 5 GOLPES com a base da mão entre as omoplatas, FIRMES, dirigidos para frente-cima"},
{etapa:"escala", d:"(3) VIRAR o bebê em DECÚBITO DORSAL (mantendo cabeça mais baixa) — 1 antebraço sustenta as costas"},
{etapa:"escala", d:"(4) Aplicar 5 COMPRESSÕES TORÁCICAS no esterno (mesmo local da RCP — abaixo da linha mamilar), com 2 dedos, profundidade 1/3 do tórax"},
{etapa:"escala", d:"(5) Verificar boca — se objeto VISÍVEL: retirar com pinça/dedo. NÃO fazer varredura digital ÀS CEGAS (pode empurrar)"},
{etapa:"escala", d:"(6) REPETIR ciclos de 5+5 até desobstruir OU bebê inconsciente"},
{etapa:"adj", d:"⚠ SE BEBÊ FICA INCONSCIENTE:"},
{etapa:"adj", d:"Iniciar RCP padrão pediátrico — 30 compressões + 2 ventilações (1 socorrista) OU 15:2 (2 socorristas)"},
{etapa:"adj", d:"A cada ciclo, VERIFICAR boca antes da ventilação"},
{etapa:"adj", d:"Continuar até resposta ou chegada do SAMU"},
{etapa:"adj", d:"Chamar SAMU 192 — solicitar transporte para hospital pediátrico"},
{etapa:"alta", d:"PÓS-RESOLUÇÃO: levar ao PS mesmo se assintomático — pode haver aspiração de fragmentos, pneumonia química, lesão de mucosa"},
{etapa:"alta", d:"Avaliar Rx tórax — atelectasia, hiperinsuflação localizada (corpo estranho residual?)"},
{etapa:"alta", d:"Orientar pais: ALIMENTOS DE RISCO (uvas inteiras, balas duras, pipoca, amendoim, hot dog, salsicha) — cortar/evitar até 5 anos"},
],
alertas:[
{nivel:"crit", txt:"NÃO USAR HEIMLICH em <1 ano — lesão hepática, esplênica. Apenas golpes nas costas + compressões torácicas."},
{nivel:"crit", txt:"OBSTRUÇÃO PARCIAL (com tosse, choro, ar): NÃO INTERVIR — encorajar tosse + transportar. Intervir só se OBSTRUÇÃO COMPLETA."},
{nivel:"crit", txt:"NUNCA varredura digital às cegas — pode empurrar objeto mais profundo. Só remover se visível."},
{nivel:"warn", txt:"ALIMENTOS DE ALTO RISCO em <5 anos: uva inteira, salsicha em fatias grossas, pipoca, balas duras, amendoim, hot dog. Cortar pequeno ou evitar."},
{nivel:"info", txt:"Após 1 ano: Heimlich pode ser usado (manobra de compressão abdominal acima do umbigo)."},
],
fluxo:null, diretriz:"AHA PALS 2020+update. ILCOR. AAP."
},
{id:"pulo-epistaxe", nome:"Epistaxe — protocolo de compressão + adrenalina/lidocaína", sis:"pulo", grav:"baixa",
cid:"R04.0", ciap:"R06",
sin:["Epistaxe","Sangramento nasal","Plexo de Kiesselbach","Tampão nasal","Sangue pelo nariz"],
def:"~90% das epistaxes são ANTERIORES (plexo de Kiesselbach, Little's area) e resolvem com COMPRESSÃO MANUAL CORRETA (cartilagem, não osso) × 10 min + adrenalina+lidocaína tópica se persistir. Posteriores (10%) são mais graves, podem precisar de balão.",
quadro:["Sangramento pela narina, geralmente UNILATERAL","Causas comuns: trauma de cutucar, ar seco, IVAS, rinite alérgica, HAS descompensada, anticoagulante, distúrbio coagulação, drogas (cocaína)","⚠ EPISTAXE POSTERIOR: sangramento BILATERAL ou predominância em orofaringe, deglutição de sangue, vômito de sangue — emergência ORL"],
diag:["Inspeção com espéculo nasal + boa iluminação","Pressão arterial (HAS pode ser causa ou consequência)","Hemograma se sangramento volumoso ou anticoagulado: INR, TTPa, plaquetas","Anamnese: anticoagulante, antiagregante, hepatopatia, doença hematológica"],
exames:["PA","Em sangramento volumoso / anticoagulado: hemograma, coagulograma","Tipagem sanguínea se reposição"],
rx:[
{etapa:"inicial", d:"⚠ POSIÇÃO: paciente SENTADO, inclinado para frente (NÃO deitado, NÃO inclinado para trás) — evita deglutição de sangue/aspiração"},
{etapa:"inicial", d:"Pedir para CUSPIR sangue da boca, não engolir (engolir → vômito de sangue mais tarde)"},
{etapa:"inicial", d:"Tranquilizar paciente — ansiedade aumenta PA e sangramento"},
{etapa:"escala", d:"⚠ COMPRESSÃO MANUAL — 1ª manobra (resolve ~70%)"},
{etapa:"escala", d:"Comprimir a CARTILAGEM ANTERIOR (parte mole do nariz, NÃO o osso)"},
{etapa:"escala", d:"Pinçar entre POLEGAR E INDICADOR firmemente"},
{etapa:"escala", d:"Manter por 10-15 MIN ININTERRUPTOS (cronômetro, sem 'verificar' a cada 2 min)"},
{etapa:"escala", d:"Respirar pela boca durante a compressão"},
{etapa:"escala", d:"GELO no dorso do nariz / na nuca / chupar gelo — auxiliar (vasoconstrição)"},
{etapa:"adj", d:"⚠ SE PERSISTIR após compressão: ADRENALINA + LIDOCAÍNA TÓPICAS"},
{etapa:"adj", d:"Embeber gaze com: ADRENALINA 1:1000 (1 mL) + LIDOCAÍNA 2% (2-5 mL) — solução combinada", o:"Lidocaína anestesia + adrenalina vasoconstrição."},
{etapa:"adj", d:"Inserir gaze no vestíbulo nasal anterior (lado sangrando), com pinça baioneta se possível"},
{etapa:"adj", d:"Manter 10-15 min com COMPRESSÃO EXTERNA"},
{etapa:"adj", d:"REMOVER gaze gentilmente após — se reanagrar, repetir compressão"},
{etapa:"adj", d:"⚠ ALTERNATIVA: oximetazolina spray nasal (2 jatos + comprimir) — vasoconstritor disponível"},
{etapa:"adj", d:"⚠ TAMPONAMENTO ANTERIOR — se ainda persistir"},
{etapa:"adj", d:"GAZE 1×30 cm embebida em adrenalina/lidocaína OU vaselina"},
{etapa:"adj", d:"Inserir com pinça baioneta — DOBRADURAS sucessivas, base ao topo (acordeon)"},
{etapa:"adj", d:"Encaminhar ORL para retirada em 24-72h"},
{etapa:"adj", d:"⚠ ALTERNATIVA: Merocel® / tampão expansível — insere seco, hidrata-se com soro fisiológico no local"},
{etapa:"adj", d:"⚠ TAMPONAMENTO POSTERIOR — emergência ORL (sangramento profundo, paciente engole muito sangue, instabilidade)"},
{etapa:"adj", d:"Balão de Foley 12-14 Fr no faringe + tampão anterior em sanduíche — TÉCNICA EMERGENCIAL"},
{etapa:"adj", d:"Internar + ORL"},
{etapa:"adj", d:"⚠ MANEJO ANTI-HIPERTENSIVO: PA elevada por dor/ansiedade é COMUM — não tratar agressivamente. Conforto + analgesia + parar sangramento"},
{etapa:"adj", d:"Se PA persistente >180/110 após sangramento controlado: tratamento padrão de crise hipertensiva"},
{etapa:"alta", d:"PÓS-RESOLUÇÃO: orientar — NÃO assoar nariz por 24-48h, evitar sol forte, picante, álcool, exercício intenso × 48h"},
{etapa:"alta", d:"Hidratação nasal com SF spray + vaselina/pomada cicatrizante na narina × 5-7 dias"},
{etapa:"alta", d:"Investigar etiologia em epistaxe RECORRENTE: HAS, doença hematológica, telangiectasias hereditárias (Osler-Weber-Rendu), uso de medicamentos"},
{etapa:"alta", d:"ENCAMINHAR ORL: epistaxe POSTERIOR (sempre), recorrente, suspeita neoplasia, telangiectasias"},
],
alertas:[
{nivel:"crit", txt:"EPISTAXE POSTERIOR é emergência — sangramento profundo, deglutição de sangue, posteriormente vômito de sangue, possível instabilidade. Tamponamento posterior + ORL urgente."},
{nivel:"crit", txt:"PACIENTE ANTICOAGULADO + epistaxe volumosa: avaliar INR, reverter se grave (vit K, complexo protrombínico). Não suspender anticoagulante sem motivo se sangramento controlado."},
{nivel:"warn", txt:"COMPRIMIR a CARTILAGEM ANTERIOR (parte mole), NÃO o osso. Erro mais comum é comprimir muito alto. 10-15 min contínuos."},
{nivel:"warn", txt:"PA elevada por dor/ansiedade é comum em epistaxe — NÃO tratar agressivamente como crise hipertensiva. Controlar sangramento primeiro, depois reavaliar PA."},
{nivel:"info", txt:"ADRENALINA + LIDOCAÍNA TÓPICAS em gaze é mais eficaz que compressão isolada em sangramentos persistentes. ~80% das epistaxes anteriores resolvem com essa combinação."},
{nivel:"info", txt:"OXIMETAZOLINA spray é alternativa simples disponível (Aturgyl, Afrin) — 2 jatos + compressão."},
],
fluxo:null, diretriz:"AAO-HNS. SBORL."
},
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
{id:"pulo-farpa-vegetal", nome:"Farpa profunda / espinho — bicarbonato vs adesivo", sis:"pulo", grav:"baixa",
cid:"T14", ciap:"S14",
sin:["Farpa","Espinho","Vegetal cravado","Bicho-de-pé","Tunga","Removendo farpa"],
def:"Pequenas farpas/espinhos visíveis = pinça reta. Farpas pequenas SUPERFICIAIS (de difícil pinça) = ADESIVO (durex/fita) puxa por adesão. Farpas vegetais SUBMERSAS profundas = PASTA DE BICARBONATO faz a pele 'expulsar' o material em 24-48h.",
quadro:["Farpa de madeira, espinho de planta, ferpa metálica superficial, espinho de cacto","Bicho-de-pé (tungíase) — específico, abordagem diferente","⚠ EXCLUIR farpa profunda em articulação, próximo a nervo/vaso, em olho","⚠ Tetânica é risco — verificar histórico vacinal"],
diag:["Inspeção + transiluminação (lanterna celular por trás)","Profundidade aproximada","Tipo de material (vegetal mais inflamatório que metal)","Rx se metal/vidro radiopaco profundo"],
exames:["Geralmente nenhum","Rx se suspeita corpo estranho radiopaco profundo"],
rx:[
{etapa:"inicial", d:"⚠ AVALIAR profundidade e localização — farpas próximas a olho/nervo/vaso encaminhar"},
{etapa:"inicial", d:"LIMPAR área com SF + clorexidina"},
{etapa:"escala", d:"⚠ FARPA VISÍVEL E ACESSÍVEL — pinça reta"},
{etapa:"escala", d:"Anestesia local (lidocaína 1-2%) se profunda ou paciente sensível"},
{etapa:"escala", d:"Pinça anatômica fina (não com dentes), agarrar PRÓXIMO à pele, puxar no mesmo ângulo de entrada"},
{etapa:"escala", d:"⚠ FARPA PEQUENA SUPERFICIAL (difícil pegar com pinça)"},
{etapa:"escala", d:"TÉCNICA DO ADESIVO: aplicar fita adesiva forte (durex larga, esparadrapo) sobre a área, puxar firme em sentido oposto à entrada — adesão remove farpa"},
{etapa:"escala", d:"Funciona para farpinhas de cacto, espinho de ouriço, palhas finas"},
{etapa:"escala", d:"⚠ FARPA PROFUNDA VEGETAL (não visível, área inflamada com sensação de corpo estranho)"},
{etapa:"escala", d:"TÉCNICA DA PASTA DE BICARBONATO: misturar bicarbonato de sódio + pequena quantidade de água → pasta espessa"},
{etapa:"escala", d:"Aplicar pasta abundante sobre a área, cobrir com curativo oclusivo (durex)"},
{etapa:"escala", d:"Trocar 2-3×/dia × 1-2 dias — a pele 'amolece' e EXPULSA o vegetal espontaneamente", o:"Mecanismo: maceração + inflamação local que ejeta corpo estranho. Funciona melhor em material vegetal (madeira, espinho de planta)."},
{etapa:"adj", d:"⚠ FARPA METÁLICA PROFUNDA: Rx para localizar antes de tentar remover. Em ferida deep com fragmento metálico difícil de localizar: encaminhar cirurgia"},
{etapa:"adj", d:"⚠ ESPINHO DE OURIÇO-CACHEIRO (raro mas existe): geralmente arrancar com pinça é difícil pelas farpas. Cortar a base do espinho pode 'esvaziar' e facilitar — depois pinça"},
{etapa:"adj", d:"⚠ BICHO-DE-PÉ (TUNGÍASE) — Tunga penetrans"},
{etapa:"adj", d:"Lesão típica: pápula branca/amarela com ponto preto central (parasita) — geralmente em planta dos pés"},
{etapa:"adj", d:"REMOÇÃO MECÂNICA com agulha esterilizada — abrir levemente a pele e extrair o parasita inteiro (evitar romper)"},
{etapa:"adj", d:"Antissepsia + tetânica + orientação (sapatos, asseio)"},
{etapa:"adj", d:"Casos extensos: TIABENDAZOL 25 mg/kg/d × 5-10 dias (off-label) ou IVERMECTINA 200 mcg/kg dose única"},
{etapa:"alta", d:"⚠ ANTITETÂNICA conforme histórico — sempre verificar"},
{etapa:"alta", d:"ANTIBIÓTICO só se sinais de infecção (celulite ao redor, supuração)"},
{etapa:"alta", d:"Orientar paciente: sinais de infecção, retorno se piora"},
],
alertas:[
{nivel:"crit", txt:"FARPA EM OLHO: NÃO tentar remover — encaminhar oftalmologia. Cobrir olho contralateral também (movimentos conjugados)."},
{nivel:"warn", txt:"FARPA PROFUNDA próxima a vaso/nervo/articulação: encaminhar cirurgia."},
{nivel:"warn", txt:"ANTITETÂNICA é OBRIGATÓRIA — verificar histórico. Imunoglobulina se ferida suja + esquema incompleto."},
{nivel:"info", txt:"PASTA DE BICARBONATO em farpa vegetal profunda: técnica antiga, funciona. Pele expulsa em 24-48h."},
{nivel:"info", txt:"TÉCNICA DO ADESIVO em farpinha superficial (cacto, ouriço): aplicar fita firme, puxar — extrai dezenas de uma vez."},
],
fluxo:null, diretriz:"Roberts & Hedges. PCDT-MS Tungíase."
},
{id:"pulo-fragmento-dente", nome:"Fragmento dental (não avulsionado) — guardar em soro/leite", sis:"pulo", grav:"baixa",
cid:"S02.5", ciap:"D19",
sin:["Fratura coronária","Fragmento dental","Quebra dente","Trauma dental"],
def:"FRATURA CORONÁRIA dental sem avulsão — paciente traz o FRAGMENTO. Pode ser COLADO de volta ao dente pelo dentista em algumas horas — preservação em SORO ou LEITE (NUNCA água) mantém viabilidade. Diferente da AVULSÃO COMPLETA (dente inteiro fora).",
quadro:["Trauma facial / esportivo com QUEBRA de pedaço do dente (ESMALTE, dentina, polpa exposta)","Paciente traz fragmento (frequentemente em papel/embalagem inadequada)","⚠ Diferenciar de AVULSÃO (dente inteiro fora) — outra abordagem","INTRUSÃO/EXTRUSÃO (dente deslocado mas não fora): outras abordagens"],
diag:["Inspeção dental","Classificação Ellis: Classe 1 (apenas esmalte), Classe 2 (dentina), Classe 3 (polpa exposta = vermelho)","Avaliar lesão associada (mucosa, lábio, mandíbula)","Rx panorâmica ou periapical"],
exames:["Rx dental","TC face se trauma maior"],
rx:[
{etapa:"inicial", d:"⚠ AVALIAR fragmento — se traz ou não, condição"},
{etapa:"escala", d:"⚠ CONSERVAÇÃO DO FRAGMENTO (ordem de preferência)"},
{etapa:"escala", d:"1ª escolha: SORO FISIOLÓGICO 0,9% (frasco pequeno, em recipiente plástico/vidro)"},
{etapa:"escala", d:"2ª escolha: LEITE pasteurizado refrigerado (mesma lógica do dente avulsionado — preserva células)"},
{etapa:"escala", d:"3ª escolha: SALIVA — vestíbulo bucal do paciente (se cooperativo, sem risco aspiração)"},
{etapa:"escala", d:"⚠ NUNCA: água da torneira (hipotônica — destrói células), seco no papel, embalagem com algodão"},
{etapa:"escala", d:"Levar ao dentista nas PRÓXIMAS HORAS (idealmente <6h)"},
{etapa:"adj", d:"⚠ MANEJO DA FRATURA DENTAL"},
{etapa:"adj", d:"CLASSE 1 (apenas esmalte): polimento ambulatorial pelo dentista"},
{etapa:"adj", d:"CLASSE 2 (dentina exposta): proteção com ionômero/restauração — encaminhar dentista"},
{etapa:"adj", d:"CLASSE 3 (polpa exposta — ponto vermelho): URGENTE — risco contaminação pulpar, tratamento endodôntico"},
{etapa:"adj", d:"⚠ FRAGMENTO PODE SER COLADO de volta em algumas horas com técnica adesiva pelo dentista"},
{etapa:"adj", d:"⚠ AVALIAR LESÕES ASSOCIADAS"},
{etapa:"adj", d:"Lábios, mucosa oral, língua: pode haver fragmento dental EMBUTIDO na mucosa — Rx tecidos moles"},
{etapa:"adj", d:"Mandíbula, maxila: trauma facial — TC se sinais clínicos"},
{etapa:"adj", d:"TCE associado se mecanismo de alta energia"},
{etapa:"adj", d:"ANTITETÂNICA conforme histórico"},
{etapa:"adj", d:"Antibiótico se exposição pulpar (amoxicilina 500 mg 8/8h × 5 dias)"},
{etapa:"adj", d:"Bochechos com CLOREXIDINA 0,12% 2×/d × 7 dias"},
{etapa:"alta", d:"ENCAMINHAR DENTISTA / ENDODONTISTA URGENTE (poucas horas) — especialmente em exposição pulpar (Classe 3)"},
{etapa:"alta", d:"⚠ ORIENTAR FAMÍLIA: SEMPRE GUARDAR FRAGMENTOS DENTAIS em soro/leite. NÃO descartar"},
{etapa:"alta", d:"PROGNÓSTICO: bom em Classe 1-2 com tratamento adequado. Classe 3 pode precisar tratamento de canal"},
],
alertas:[
{nivel:"crit", txt:"FRATURA CLASSE 3 (exposição pulpar — ponto vermelho/sangramento): URGENTE — risco de contaminação + necrose pulpar. Encaminhar dentista em horas."},
{nivel:"warn", txt:"⚠ MEIO DE PRESERVAÇÃO: SORO FISIOLÓGICO ou LEITE. NUNCA ÁGUA (hipotônica destrói células)."},
{nivel:"warn", txt:"PROCURAR FRAGMENTOS EM MUCOSA / LÁBIO — Rx tecidos moles se quebra com lesão labial associada. Fragmentos enterrados causam abscesso."},
{nivel:"info", txt:"FRAGMENTO PRESERVADO em soro/leite pode ser COLADO de volta em algumas horas pelo dentista — preserva estética."},
{nivel:"info", txt:"DIFERENCIAR de AVULSÃO (dente inteiro fora — janela de 30-60 min) vs FRATURA (fragmento — algumas horas)."},
],
fluxo:null, diretriz:"IADT Guidelines 2020. ABO. Ellis classification."
},
{id:"pulo-hiperventilacao", nome:"Hiperventilação — NÃO saco de papel (mito perigoso)", sis:"pulo", grav:"moderada",
cid:"R06.4", ciap:"R02",
sin:["Hiperventilação","Síndrome hiperventilação","Saco de papel","Alcalose respiratória","Tetania"],
def:"HIPERVENTILAÇÃO causa alcalose respiratória → parestesia, tetania leve, tontura, dor torácica atípica. NÃO usar saco de papel (CAUSAS DE MORTE documentadas — hipoxia em causa orgânica oculta). Tratamento: respiração LENTA controlada + reassurance.",
quadro:["Paciente em hiperventilação aguda, geralmente jovem feminina","Sintomas: respiração rápida + profunda, dispneia subjetiva, parestesia perioral e em mãos/pés (sinal de Trousseau leve), tetania discreta, tontura, sensação de morte iminente","CONTEXTO: pânico, ansiedade, estresse, dor","⚠ EXCLUIR causas ORGÂNICAS: TEP, asma, IAM, acidose metabólica (Kussmaul), intoxicação por salicilato, hipoxia"],
diag:["Anamnese + contexto","FR aumentada (>20-25), profunda","SatO₂ NORMAL ou alta (95-100%) — pista clave","Sinais de Trousseau / Chvostek positivos por tetania leve","⚠ EM DÚVIDA: D-dímero, gasometria (pH alto, pCO₂ baixo, HCO₃ normal), Rx tórax, ECG"],
exames:["SatO₂","Em dúvida: gasometria arterial, D-dímero, ECG, Rx tórax, troponina"],
rx:[
{etapa:"inicial", d:"⚠ EXCLUIR CAUSAS ORGÂNICAS PRIMEIRO — em paciente atípico ou primeira crise"},
{etapa:"inicial", d:"TEP, asma, IAM, sepse, acidose metabólica (DM, IRC), intoxicação salicilato, hipertireoidismo, anemia grave"},
{etapa:"inicial", d:"SE EM DÚVIDA: investigar antes de assumir hiperventilação psicogênica"},
{etapa:"escala", d:"⚠ TRATAMENTO da hiperventilação psicogênica"},
{etapa:"escala", d:"AMBIENTE TRANQUILO, isolar do agito"},
{etapa:"escala", d:"COMUNICAÇÃO CALMA — explicar fisiologia: 'você está respirando rápido demais, isso causa formigamento, mas é benigno e vai passar'"},
{etapa:"escala", d:"⚠ TÉCNICA RESPIRATÓRIA — ORIENTAR respiração LENTA"},
{etapa:"escala", d:"Inspirar pelo nariz 4 seg → segurar 4 seg → expirar lentamente 6-8 seg (técnica 4-4-6)"},
{etapa:"escala", d:"Repetir 5-10 ciclos"},
{etapa:"escala", d:"Pode-se contar JUNTO com o paciente — voz calma do profissional regula respiração"},
{etapa:"escala", d:"⚠ NÃO USAR SACO DE PAPEL — MITO PERIGOSO"},
{etapa:"escala", d:"Saco de papel REINALA CO₂ → em ASMA ou TEP escondidos = hipoxia profunda → óbito documentado"},
{etapa:"escala", d:"Casos de morte por hipoxia + descondicionamento médico-legal"},
{etapa:"escala", d:"Abandonado por sociedades de emergência globalmente"},
{etapa:"adj", d:"⚠ NÃO USAR INALAÇÃO COM ADRENALINA / SALBUTAMOL — não trata, pode piorar"},
{etapa:"adj", d:"⚠ MEDICAÇÃO se refratária à orientação respiratória"},
{etapa:"adj", d:"Diazepam 5-10 mg VO OU lorazepam 1-2 mg SL"},
{etapa:"adj", d:"Início 20-30 min. Não rotineiro em primeiro evento"},
{etapa:"adj", d:"INVESTIGAR transtorno de pânico subjacente"},
{etapa:"adj", d:"⚠ SE PARESTESIAS persistentes / tetania franca / espasmo carpopedal:"},
{etapa:"adj", d:"Pode haver HIPOCALCEMIA SUBJACENTE — dosar cálcio + magnésio (alcalose também 'cobre' cálcio iônico)"},
{etapa:"adj", d:"Em tetania franca: gluconato de cálcio 1 amp 10% IV lento + investigar causa"},
{etapa:"alta", d:"ORIENTAR — em casa: técnica respiração 4-4-6, exercício aeróbico regular, sono adequado"},
{etapa:"alta", d:"ENCAMINHAR psicologia / psiquiatria se crises recorrentes — ISRS + TCC"},
{etapa:"alta", d:"⚠ NUNCA orientar paciente a usar saco de papel em casa"},
],
alertas:[
{nivel:"crit", txt:"⚠ NÃO USAR SACO DE PAPEL — risco HIPOXIA grave em causa orgânica oculta (TEP, asma, IAM, anemia). MORTES DOCUMENTADAS. Mito perigoso."},
{nivel:"crit", txt:"EXCLUIR causas orgânicas (TEP, IAM, asma, acidose metabólica, intoxicação) em PRIMEIRA crise / paciente atípico / sintomas persistentes. Hiperventilação psicogênica é DIAGNÓSTICO DE EXCLUSÃO."},
{nivel:"warn", txt:"TÉCNICA 4-4-6 (inspirar 4s, segurar 4s, expirar 6s) é segura e eficaz. Profissional pode contar junto com paciente."},
{nivel:"warn", txt:"TETANIA FRANCA / espasmo carpopedal persistente: avaliar cálcio + magnésio."},
{nivel:"info", txt:"PARESTESIAS perioral + mãos/pés + tontura = alcalose respiratória. Reversível com respiração lenta."},
],
fluxo:null, diretriz:"AHA. NIH. Anti-mythological emergency literature."
},
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
{id:"pulo-im-crianca", nome:"Aplicação IM em criança — abraço de borboleta + distração", sis:"pulo", grav:"baixa",
cid:"-", ciap:"-",
sin:["Vacina criança","IM criança","Abraço borboleta","Bear hug","Distração"],
def:"Aplicação intramuscular em criança ATIVA/AGITADA = CONTENÇÃO COMPASSIVA (não trauma) + DISTRAÇÃO + posição + agulha rápida. Reduz dor, estresse e necessidade de repetir.",
quadro:["Aplicação IM em criança 6m-6a — vacina, dipirona, ceftriaxona, midazolam","Criança ansiosa, cooperação variável","⚠ Em criança >5-6a: pode-se explicar e obter cooperação"],
diag:["Avaliar idade, cooperação, presença de cuidador, local da aplicação"],
exames:["Nenhum"],
rx:[
{etapa:"inicial", d:"⚠ PREPARAR antes — minimizar tempo de espera"},
{etapa:"inicial", d:"Aspirar medicação, seringa pronta com agulha de 25-27G (mais fina, menos dor)"},
{etapa:"inicial", d:"Local: vasto lateral da coxa (<3 anos), deltoide (>3 anos)"},
{etapa:"escala", d:"⚠ POSIÇÃO 'ABRAÇO DE BORBOLETA' (Bear Hug) — para CRIANÇA <5 ANOS"},
{etapa:"escala", d:"(1) Cuidador SENTADO, criança DE FRENTE para cuidador (no colo, virada de frente)"},
{etapa:"escala", d:"(2) Cuidador cruza os braços ao redor da criança — UM BRAÇO sobre o tronco da criança imobilizando o braço dela CONTRALATERAL ao da aplicação"},
{etapa:"escala", d:"(3) OUTRO BRAÇO sob a axila da criança, mão estabilizando o membro a ser puncionado"},
{etapa:"escala", d:"(4) Cuidador cruza as PERNAS sobre as pernas da criança (segura ambas as pernas)"},
{etapa:"escala", d:"(5) Posição estável, sem força excessiva, criança 'abraçada' confortavelmente"},
{etapa:"escala", d:"⚠ TÉCNICA DA APLICAÇÃO RÁPIDA"},
{etapa:"escala", d:"Antissepsia + estabilizar pele com a mão não-dominante (pinçar/pressionar)"},
{etapa:"escala", d:"Inserir agulha em 90° em movimento ÚNICO E RÁPIDO (não devagar)"},
{etapa:"escala", d:"Injetar medicação em velocidade moderada (não muito rápida — dói mais)"},
{etapa:"escala", d:"Retirar agulha + pressão com algodão"},
{etapa:"adj", d:"⚠ DISTRAÇÃO durante o procedimento"},
{etapa:"adj", d:"Música, vídeo no celular, brinquedo, conversa com cuidador"},
{etapa:"adj", d:"Pedir para SOPRAR num cata-vento, em uma vela imaginária (Valsalva — reduz dor)"},
{etapa:"adj", d:"Pirulito / chiquinha para sucção (efeito analgésico em <2 anos)"},
{etapa:"adj", d:"Lactente: AMAMENTAR DURANTE a aplicação — efeito analgésico comprovado"},
{etapa:"adj", d:"⚠ TÉCNICAS DE REDUÇÃO DE DOR ASSOCIADAS"},
{etapa:"adj", d:"GELO no local antes (1-2 min) — pequena anestesia"},
{etapa:"adj", d:"EMLA creme 30-60 min antes (em vacinas programadas, não emergência)"},
{etapa:"adj", d:"Glicose oral 24% sublingual em RN/lactente <1 ano antes do procedimento — efeito analgésico (Doloctan)"},
{etapa:"adj", d:"Aquecer ampola na mão (medicação fria dói mais)"},
{etapa:"adj", d:"⚠ EM CRIANÇA >5-6 ANOS: explicação + cooperação"},
{etapa:"adj", d:"Linguagem honesta: 'vai doer um pouquinho, como uma picada de mosquito, mas vai passar rápido'"},
{etapa:"adj", d:"NÃO mentir ('não vai doer nada') — quebra confiança em vacinas futuras"},
{etapa:"adj", d:"Permitir escolher braço, segurar mão de cuidador, contar até 3 antes"},
{etapa:"alta", d:"PÓS-APLICAÇÃO: elogiar criança ('foi corajoso!'), recompensar (adesivo, pirulito se aceitável)"},
{etapa:"alta", d:"Observação 15-30 min se vacina (raras reações anafiláticas)"},
{etapa:"alta", d:"Orientar pais: dor local 1-2 dias é normal (compressa morna pode ajudar)"},
],
alertas:[
{nivel:"warn", txt:"ABRAÇO DE BORBOLETA é CONTENÇÃO COMPASSIVA — não força excessiva, não trauma. Cuidador como aliado, criança 'abraçada'."},
{nivel:"warn", txt:"NÃO MENTIR para criança ('não vai doer'). Honestidade + linguagem apropriada à idade. Mentira quebra confiança futura."},
{nivel:"info", txt:"AMAMENTAÇÃO durante aplicação em lactente: comprovadamente analgésico (sucção + endorfinas + leite)."},
{nivel:"info", txt:"GLICOSE 24% sublingual em <6 meses: efeito analgésico modesto. Em RN pré-procedimento."},
{nivel:"info", txt:"EMLA tópico 30-60 min antes em vacina programada. Não aplicável em emergência (tempo de absorção)."},
],
fluxo:null, diretriz:"SBP. AAP. Pediatric Pain Society."
},
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
{id:"pulo-intraosseo", nome:"Acesso intraósseo de emergência — tibial / umeral", sis:"pulo", grav:"alta",
cid:"-", ciap:"-",
sin:["IO","Intraósseo","EZ-IO","Tibial proximal","Umeral proximal","Acesso de emergência"],
def:"ACESSO INTRAÓSSEO (IO) — quando acesso venoso falha em emergência. Inserção em 30-60 SEGUNDOS. Permite TODAS as medicações IV (incluindo adrenalina, vasopressor, sangue). Indicações: PCR, choque, sepse grave, qualquer paciente que precise de acesso urgente após falha venosa.",
quadro:["Emergência (PCR, choque, anafilaxia, sepse grave, queimadura extensa, politrauma) + falha de acesso venoso periférico após 2-3 tentativas","Manter máximo 24-48h, transferir para acesso convencional após estabilização","SÍTIOS — adulto e criança:","TIBIAL PROXIMAL (mais comum, mais fácil): 1-2 cm abaixo da tuberosidade da tíbia, face medial","ÚMERO PROXIMAL: tubérculo maior, 1 cm acima do colo cirúrgico","FÊMUR DISTAL (criança): 2 cm proximal ao côndilo medial","ESTERNO (adulto, raro)"],
diag:["Cenário emergencial — clínica","Avaliar local: pele íntegra, ausência de fratura no osso alvo"],
exames:["Conforme cenário clínico"],
rx:[
{etapa:"inicial", d:"⚠ INDICAÇÃO: emergência + falha ou impossibilidade de acesso venoso"},
{etapa:"inicial", d:"NÃO precisa pré-medicar (paciente em PCR) ou conforto em emergência hemodinâmica"},
{etapa:"escala", d:"⚠ EQUIPAMENTO"},
{etapa:"escala", d:"AGULHA INTRAÓSSEA (EZ-IO automática com broca, Cook manual, Jamshidi)"},
{etapa:"escala", d:"15G é padrão adulto, 18G pediátrico"},
{etapa:"escala", d:"Soro 0,9% + extensão + seringa 10 mL para flush"},
{etapa:"escala", d:"⚠ SÍTIOS DE PUNÇÃO — TIBIAL PROXIMAL (preferido)"},
{etapa:"escala", d:"(1) Localizar TUBEROSIDADE DA TÍBIA"},
{etapa:"escala", d:"(2) DESCER 1-2 cm e DESVIAR 1 cm MEDIAL (face medial achatada)"},
{etapa:"escala", d:"(3) Pele íntegra, sem fratura no membro"},
{etapa:"escala", d:"⚠ TÉCNICA DE INSERÇÃO"},
{etapa:"escala", d:"Antissepsia rápida com clorexidina/PVPI"},
{etapa:"escala", d:"Inserção PERPENDICULAR ao osso, em movimento ROTATÓRIO firme"},
{etapa:"escala", d:"Se broca elétrica (EZ-IO): pressão firme, gatilho aciona broca, agulha penetra cortical com 'pop' característico"},
{etapa:"escala", d:"PROFUNDIDADE: aproximadamente até a marca preta da agulha visível (~3 cm em adulto)"},
{etapa:"escala", d:"REMOVER trocarte (mandril interno)"},
{etapa:"escala", d:"⚠ CONFIRMAR posicionamento"},
{etapa:"escala", d:"AGULHA FIXA (não move livre)"},
{etapa:"escala", d:"Aspiração de MEDULA ÓSSEA (1-2 mL — pode não vir em todos)"},
{etapa:"escala", d:"FLUSH com 10 mL de SF — corre livremente sem extravasamento"},
{etapa:"escala", d:"⚠ ANALGESIA — antes da primeira infusão em PACIENTE CONSCIENTE"},
{etapa:"escala", d:"Lidocaína 2% sem adrenalina — 40 mg IO (adulto), 0,5 mg/kg (criança)"},
{etapa:"escala", d:"Aguardar 60 seg"},
{etapa:"escala", d:"⚠ DOR DA INFUSÃO INICIAL é importante em consciente — paciente em PCR não percebe"},
{etapa:"adj", d:"⚠ INFUSÃO"},
{etapa:"adj", d:"TODAS as medicações IV podem ser infundidas — adrenalina, atropina, amiodarona, fluidos, sangue, vasopressor"},
{etapa:"adj", d:"VELOCIDADE de infusão: PRESSÃO POSITIVA necessária para fluxo (bag de pressão ou seringa)"},
{etapa:"adj", d:"Doses são as MESMAS da via IV (não há ajuste)"},
{etapa:"adj", d:"⚠ CONTRAINDICAÇÕES"},
{etapa:"adj", d:"FRATURA do osso alvo"},
{etapa:"adj", d:"Infecção / queimadura no local"},
{etapa:"adj", d:"Cirurgia ortopédica recente no osso"},
{etapa:"adj", d:"Osteogênese imperfeita, osteoporose grave"},
{etapa:"adj", d:"⚠ COMPLICAÇÕES"},
{etapa:"adj", d:"EXTRAVASAMENTO (mais comum) — síndrome compartimental se vasoconstritor → remover agulha"},
{etapa:"adj", d:"Osteomielite (rara, ~0,6%)"},
{etapa:"adj", d:"Fratura iatrogênica (rara em técnica adequada)"},
{etapa:"alta", d:"⚠ MANTER MÁX 24-48h — transferir para acesso venoso convencional após estabilização"},
{etapa:"alta", d:"Remover IO antes de transferir paciente para hospital terciário se possível (acesso convencional)"},
{etapa:"alta", d:"DOCUMENTAR: indicação, sítio, hora de inserção, hora de remoção, complicações"},
],
alertas:[
{nivel:"crit", txt:"FRATURA, infecção ou queimadura no osso alvo = CONTRAINDICAÇÃO. Escolher outro sítio."},
{nivel:"crit", txt:"EXTRAVASAMENTO de vasoconstritor IO → síndrome compartimental + necrose. Confirmar posicionamento (sem extravasamento) antes de infundir noradrenalina/adrenalina."},
{nivel:"warn", txt:"ANALGESIA com LIDOCAÍNA IO antes de primeira infusão em PACIENTE CONSCIENTE — dor pode ser intensa. Aguardar 60 seg."},
{nivel:"warn", txt:"PRESSÃO POSITIVA é necessária para fluxo IO (gravidade não basta) — bag de pressão ou seringa de empuxo."},
{nivel:"warn", txt:"MAX 24-48h — transferir para acesso venoso convencional após estabilização. Osteomielite aumenta com tempo."},
{nivel:"info", txt:"EZ-IO (broca elétrica) é mais rápido e fácil que agulha manual. Custo significativo mas crescentemente disponível."},
{nivel:"info", txt:"TIBIAL PROXIMAL é o sítio mais usado em adulto e criança. Úmero proximal é alternativa eficaz."},
],
fluxo:null, diretriz:"AHA ACLS. PALS. ILCOR. EZ-IO training."
},
{id:"pulo-lavagem-ocular", nome:"Lavagem ocular grande volume — cânula nasal invertida (Morgan caseira)", sis:"pulo", grav:"moderada",
cid:"T26", ciap:"F79",
sin:["Lavagem ocular","Queimadura química","Morgan lens","Cânula nasal lavagem"],
def:"EXPOSIÇÃO QUÍMICA OCULAR (cal, cimento, ácido, álcali, detergente concentrado) = URGÊNCIA — IRRIGAR IMEDIATAMENTE com SF/Ringer abundante. Sem lente de Morgan? CÂNULA NASAL INVERTIDA é alternativa (pontas vão para os olhos, conectada a equipo SF).",
quadro:["Acidente com cal, cimento, soda cáustica, ácido de bateria, hipoclorito, detergente industrial, cosméticos, água sanitária","Dor intensa, lacrimejamento, blefaroespasmo, hiperemia, redução AV","⚠ ÁLCALI (cal, soda, cimento) penetra MAIS profundamente que ácido — mais grave","SINAIS DE GRAVIDADE: queratite branca opaca, isquemia perilímbica, hifema, midríase, redução AV importante"],
diag:["Após irrigação inicial: AV, exame ocular completo","pH do fundo de saco (papel pH) — alvo 7,0-7,4","Fluoresceína para avaliar abrasão / úlcera"],
exames:["pH do fundo de saco (essencial)","Após estabilização: tonometria + exame oftalmológico completo"],
rx:[
{etapa:"inicial", d:"⚠ INICIAR IRRIGAÇÃO IMEDIATAMENTE — antes de exame detalhado, antes de aguardar tudo pronto"},
{etapa:"inicial", d:"OBJETIVO: 30 minutos OU 2-3 LITROS de SF/Ringer (ou água potável se SF indisponível)"},
{etapa:"inicial", d:"⚠ ANESTÉSICO TÓPICO PRIMEIRO se disponível (proparacaína colírio 0,5% 1-2 gotas)"},
{etapa:"escala", d:"⚠ TÉCNICA — opções por ordem de preferência:"},
{etapa:"escala", d:"OPÇÃO 1 — LENTE DE MORGAN (se disponível): lente de plástico tipo lente de contato com conexão para equipo. Padrão em PA."},
{etapa:"escala", d:"OPÇÃO 2 — CÂNULA NASAL INVERTIDA (improviso prático):"},
{etapa:"escala", d:"Pegar cânula nasal de O₂ comum (a com 'forquilha' para narinas)"},
{etapa:"escala", d:"VIRAR a cânula — as pontas que iam nas narinas ficam VOLTADAS PARA OS OLHOS do paciente"},
{etapa:"escala", d:"Conectar o conector da cânula em EQUIPO de SF (em vez de O₂)"},
{etapa:"escala", d:"SF 0,9% fluindo livre — irrigar AMBOS os olhos simultaneamente (ou um se for o caso)"},
{etapa:"escala", d:"Permite IRRIGAÇÃO CONTÍNUA hands-free — paciente em decúbito dorsal"},
{etapa:"escala", d:"OPÇÃO 3 — Seringa 60 mL + jato direto (mais artesanal)"},
{etapa:"escala", d:"OPÇÃO 4 — Banho/chuveiro: paciente sob fluxo contínuo, abrir pálpebras"},
{etapa:"adj", d:"⚠ AFASTAR pálpebras manualmente — paciente tem blefaroespasmo intenso. Usar dedos enluvados (sem pressão sobre globo ocular)"},
{etapa:"adj", d:"REMOVER CORPO ESTRANHO SÓLIDO antes/durante irrigação — cal em pedra, cimento, fragmentos. Cotonete molhado, pinça delicada"},
{etapa:"adj", d:"⚠ MEDIR pH cada 5-10 min APÓS irrigação contínua (tira de papel pH no fundo de saco)"},
{etapa:"adj", d:"ALVO: pH 7,0-7,4 estável por 5-10 min"},
{etapa:"adj", d:"Se pH não normalizar: continuar irrigação"},
{etapa:"adj", d:"⚠ ÁLCALI (cal, cimento, soda): irrigar MAIS TEMPO — penetra profundamente, retém"},
{etapa:"adj", d:"ANALGESIA sistêmica: dipirona/paracetamol + AINE"},
{etapa:"alta", d:"⚠ APÓS IRRIGAÇÃO: AVALIAR OFTALMOLOGIA URGENTE em todos os casos"},
{etapa:"alta", d:"Lubrificante ocular abundante (carmelose, lágrima artificial sem conservante)"},
{etapa:"alta", d:"ATB tópico profilático (tobramicina) se erosão corneana"},
{etapa:"alta", d:"ENCAMINHAR oftalmologia para avaliação detalhada — sequelas: cicatriz corneana, sinéquias, ceratoconjuntivite seca crônica, glaucoma secundário"},
],
alertas:[
{nivel:"crit", txt:"NÃO ATRASAR IRRIGAÇÃO — começar IMEDIATAMENTE, mesmo antes de exame ou aguardar SF morno. Minutos importam para evitar lesão permanente."},
{nivel:"crit", txt:"ÁLCALI > ÁCIDO em gravidade — penetra mais profundamente. Irrigar MAIS TEMPO em exposição a cal/cimento/soda."},
{nivel:"crit", txt:"AFASTAR PÁLPEBRAS — paciente em blefaroespasmo intenso. Anestésico tópico facilita. Sem pressão sobre globo."},
{nivel:"warn", txt:"CÂNULA NASAL INVERTIDA: alternativa simples e EFICAZ à lente de Morgan. Disponível em qualquer UBS."},
{nivel:"warn", txt:"REMOVER fragmentos sólidos durante/após irrigação inicial — cimento em pedra, cal seca."},
{nivel:"info", txt:"pH ALVO: 7,0-7,4 estável. Cada UBS deveria ter tiras de papel pH disponíveis."},
],
fluxo:null, diretriz:"AAO. Wills Eye Manual. EYE (oftalmo de emergência)."
},
{id:"pulo-olho-vermelho", nome:"Olho vermelho — diferenciar com a 'luz do nariz'", sis:"pulo", grav:"moderada",
cid:"H10/H15/H20", ciap:"F02",
sin:["Olho vermelho","Hiperemia conjuntival","Uveíte","Esclerite","Episclerite","Conjuntivite","Glaucoma agudo"],
def:"NA APS — diferenciar olho vermelho banal (conjuntivite/episclerite) de RED FLAGS (uveíte, esclerite, glaucoma agudo, ceratite). TRUQUE: aplicar PHENILEFRINA 2,5% colírio no fundo de saco — em 5 min, episclerite/conjuntivite EMBRANQUECEM (vasos superficiais); esclerite/uveíte NÃO embranquecem (profundo).",
quadro:["BENIGNOS (sem ameaça visual): conjuntivite viral/bacteriana/alérgica, episclerite, blefarite, ressecamento ocular","RED FLAGS (encaminhar oftalmologia URGENTE): uveíte anterior, esclerite, ceratite, úlcera de córnea, glaucoma agudo de ângulo fechado, hifema, abrasão córnea, corpo estranho","SINAIS DE ALARME: dor (vs ardor leve), redução da AV, fotofobia intensa, halos coloridos, hipopio (pus em câmara anterior), miose/midríase, lacrimejamento intenso, vômito (glaucoma)"],
diag:["Anamnese: tempo, dor (vs ardor), fotofobia, redução AV, secreção, halos, prurido","Acuidade visual (importante)","Inspeção: padrão de hiperemia (difusa vs ciliar/peri-limbar), tamanho da pupila, reatividade","FLUORESCEÍNA + luz azul: úlcera/abrasão córnea cora","TESTE DA FENILEFRINA 2,5%: vasos superficiais empalidecem em 5-10 min; profundos não","Tonometria se suspeita glaucoma agudo (>40 mmHg típico)"],
exames:["Exame ocular básico (AV, pupila, fluoresceína)","Tonometria de schiotz / Goldmann (se disponível)","Encaminhar oftalmologia em red flags"],
rx:[
{etapa:"inicial", d:"⚠ AVALIAR RED FLAGS — encaminhar oftalmologia URGENTE se:"},
{etapa:"inicial", d:"(1) Redução da AV"},
{etapa:"inicial", d:"(2) Dor intensa (não apenas ardor)"},
{etapa:"inicial", d:"(3) Fotofobia intensa"},
{etapa:"inicial", d:"(4) Halos ao redor de luzes (glaucoma agudo)"},
{etapa:"inicial", d:"(5) Pupila alterada (miose em uveíte, midríase em glaucoma agudo)"},
{etapa:"inicial", d:"(6) Hipopio (nível de pus em câmara anterior)"},
{etapa:"inicial", d:"(7) Hifema (sangue em câmara anterior)"},
{etapa:"inicial", d:"(8) Lesão corneana visível (úlcera, opacidade)"},
{etapa:"inicial", d:"(9) Trauma recente"},
{etapa:"inicial", d:"(10) Uso de lente de contato + olho vermelho = ceratite presuntiva (Pseudomonas) → ORL/oftalmo URGENTE"},
{etapa:"escala", d:"⚠ TESTE DA FENILEFRINA 2,5% — DIFERENCIA superficial vs profundo"},
{etapa:"escala", d:"Aplicar 1-2 gotas de FENILEFRINA 2,5% no fundo de saco"},
{etapa:"escala", d:"Aguardar 5-10 min"},
{etapa:"escala", d:"SE VASOS EMBRANQUECEM → episclerite ou conjuntivite (superficial — vasoconstrição funciona)"},
{etapa:"escala", d:"SE NÃO EMBRANQUECEM → esclerite ou uveíte (profundo, vasos não acessíveis topicamente) → ENCAMINHAR oftalmo"},
{etapa:"escala", d:"⚠ FLUORESCEÍNA — pesquisa de lesão corneana"},
{etapa:"escala", d:"Tira de fluoresceína embebida em SF + colocar no fundo de saco"},
{etapa:"escala", d:"Lavar com SF — observar com luz azul (lanterna)"},
{etapa:"escala", d:"COR VERDE FLUORESCENTE = úlcera ou abrasão da córnea → tratar (ATB tópico + encaminhar)"},
{etapa:"escala", d:"PADRÃO DENDRÍTICO de coloração = herpes simplex córnea — ENCAMINHAR oftalmo URGENTE (NÃO usar corticoide tópico)"},
{etapa:"adj", d:"⚠ CONJUNTIVITE BACTERIANA: secreção purulenta amarelada espessa, pálpebras grudadas pela manhã"},
{etapa:"adj", d:"Tobramicina colírio 0,3% — 1 gota 4-6×/d × 5-7 dias", o:"OU ciprofloxacino colírio 0,3% (cobertura ampla)."},
{etapa:"adj", d:"Higiene ocular com compressa morna + SF"},
{etapa:"adj", d:"⚠ CONJUNTIVITE VIRAL: lacrimejamento aquoso, hiperemia bilateral, pré-auricular linfonodo, geralmente associada a IVAS"},
{etapa:"adj", d:"AUTOLIMITADA — 7-14 dias"},
{etapa:"adj", d:"Compressa fria, lubrificante ocular (carmelose, polivinilálcool)"},
{etapa:"adj", d:"Lavagem frequente das mãos — ALTAMENTE CONTAGIOSA"},
{etapa:"adj", d:"⚠ CONJUNTIVITE ALÉRGICA: prurido intenso, lacrimejamento, edema, bilateral, sazonal"},
{etapa:"adj", d:"Anti-histamínico tópico (olopatadina, cetotifeno) + lubrificante + compressa fria"},
{etapa:"adj", d:"Anti-histamínico VO se rinite associada"},
{etapa:"adj", d:"⚠ EPISCLERITE: hiperemia setorial, dor leve, sem redução AV. Fenilefrina empalidece"},
{etapa:"adj", d:"Lubrificante + AINE tópico (cetorolaco). Autolimitada"},
{etapa:"adj", d:"Recidiva frequente: investigar AR, LES (em 30%)"},
{etapa:"alta", d:"⚠ NUNCA usar CORTICOIDE TÓPICO ocular sem oftalmologista — risco glaucoma medicamentoso, retardo cicatrização, herpes córnea reativada"},
{etapa:"alta", d:"⚠ NUNCA usar ANESTÉSICO TÓPICO em casa (proparacaína, tetracaína) — toxicidade epitelial, retardo cicatrização. Apenas em consultório para exame"},
{etapa:"alta", d:"⚠ USO DE LENTE DE CONTATO + olho vermelho = SUSPENDER lente + oftalmo. Ceratite por Pseudomonas evolui rápido"},
],
alertas:[
{nivel:"crit", txt:"GLAUCOMA AGUDO DE ÂNGULO FECHADO: olho muito vermelho + dor intensa + midríase fixa + halos + náusea/vômito + AV reduzida = EMERGÊNCIA OFTALMO (cegueira em horas). Iniciar acetazolamida + pilocarpina + analgesia se possível e encaminhar."},
{nivel:"crit", txt:"USO DE LENTE DE CONTATO + olho vermelho = CERATITE BACTERIANA presuntiva (especialmente Pseudomonas). Suspender lente + oftalmo URGENTE. Pode causar perfuração córnea em horas-dias."},
{nivel:"crit", txt:"HERPES SIMPLEX CÓRNEA (padrão dendrítico em fluoresceína) — CORTICOIDE TÓPICO É PROIBIDO (acelera necrose). Aciclovir tópico + oftalmologia."},
{nivel:"warn", txt:"FENILEFRINA TESTE: episclerite/conjuntivite EMBRANQUECEM (superficial). Esclerite/uveíte NÃO empalidecem (profundo). Truque clássico que diferencia."},
{nivel:"warn", txt:"NUNCA prescrever corticoide tópico ocular em APS sem oftalmologista — glaucoma medicamentoso, reativação de herpes córnea, retardo cicatricial."},
{nivel:"warn", txt:"ANESTÉSICO TÓPICO em casa: PROIBIDO. Toxicidade epitelial, dependência, retardo cicatricial."},
{nivel:"info", txt:"VASOCONSTRITOR TÓPICO (Naphazolina, Vasocon) por curto prazo em olho vermelho banal é aceitável — não usar >3-5 dias (rebote)."},
],
fluxo:null, diretriz:"AAO. SBO. Wills Eye Manual."
},
{id:"pulo-ouvido-aviao", nome:"Otalgia de viagem aérea — manobras de equalização", sis:"pulo", grav:"baixa",
cid:"H68", ciap:"H81",
sin:["Barotrauma","Otalgia em avião","Pressão no ouvido","Tuba auditiva","Valsalva","Toynbee","Otite barotraumática"],

def:"BAROTRAUMA OTOLÓGICO = disfunção tubária durante mudança de pressão (avião, mergulho, elevador rápido). Manobras de equalização ABREM a tuba auditiva e igualam pressão entre orelha média e ambiente. Manobras simples evitam dor + perfuração timpânica.",

quadro:[
"Sintomas durante DESCIDA do avião (mais comum) ou subida: plenitude auricular, dor crescente, surdez transitória, possível vertigem",
"⚠ Fatores predisponentes: IVAS ativa, rinite alérgica, sinusite, anatomia tubária desfavorável, criança (tuba mais curta e horizontal)",
"GRAUS de barotrauma (Teed classification): 0 (sintomas sem achado) → 4 (hemorragia timpânica) → 5 (perfuração)",
"DOR persistente após pouso + hipoacusia + plenitude = avaliar com otoscopia (hiperemia, derrame, perfuração)",
],

diag:[
"História típica + sintomas em viagem",
"Otoscopia: avaliar membrana timpânica (hiperemia, derrame, perfuração)",
"Audiometria/timpanometria se sintomas persistem",
],

exames:["Otoscopia (essencial)","Em casos com hipoacusia persistente: audiometria + impedanciometria"],

rx:[
{etapa:"inicial", d:"⚠ PREVENÇÃO — orientar paciente antes de viajar:", o:""},

{etapa:"escala", d:"MANOBRA DE VALSALVA — durante descida do avião:", o:""},
{etapa:"escala", d:"Tampar o nariz, fechar a boca, ASSOPRAR suavemente até sentir 'pop' no ouvido", o:"NÃO assoprar forte — pode causar ruptura tímpano ou descolamento de retina."},
{etapa:"escala", d:"Repetir a cada 2-3 minutos durante toda descida", o:""},

{etapa:"escala", d:"MANOBRA DE TOYNBEE — alternativa para crianças e idosos:", o:""},
{etapa:"escala", d:"Tampar o nariz E DEGLUTIR — abre tuba auditiva fisiologicamente", o:"Mais segura que Valsalva. Útil em criança."},

{etapa:"escala", d:"MANOBRA DE FRENZEL — útil para mergulhadores:", o:""},
{etapa:"escala", d:"Glote fechada, língua empurra ar para a nasofaringe usando músculos da boca", o:"Mais difícil de fazer mas mais segura."},

{etapa:"escala", d:"BOCEJAR + DEGLUTIR — funciona naturalmente", o:"Mascar chiclete ajuda a manter movimento mandibular."},

{etapa:"escala", d:"CHUPAR BALA / CHICLETE — estimula deglutição frequente", o:"Útil em criança."},

{etapa:"escala", d:"BEBER LIQUIDO em pequenos goles frequentes", o:""},

{etapa:"adj", d:"CRIANÇA / BEBÊ:", o:""},
{etapa:"adj", d:"Amamentação ou mamadeira durante DESCIDA — sucção/deglutição abre tuba", o:""},
{etapa:"adj", d:"Chupeta + estímulo a sugar", o:""},
{etapa:"adj", d:"NÃO acordar criança que dorme — só se chorar (mais difícil acalmar acordada com dor)", o:""},

{etapa:"adj", d:"⚠ DESCONGESTIONANTE PROFILÁTICO em paciente com IVAS/rinite:", o:""},
{etapa:"adj", d:"OXIMETAZOLINA spray nasal — 2 jatos em cada narina 30 min ANTES da descida", o:"⚠ Não usar mais de 5-7 dias (rebote)."},
{etapa:"adj", d:"PSEUDOEFEDRINA 60 mg VO 30 min antes — alternativa", o:"⚠ Cardiopatas, HAS descontrolada: contraindicada."},
{etapa:"adj", d:"Em rinite alérgica: corticoide nasal contínuo + anti-histamínico", o:""},

{etapa:"adj", d:"⚠ CONTRAINDICAÇÕES para viajar de avião:", o:""},
{etapa:"adj", d:"IVAS aguda intensa, sinusite aguda — postergar viagem se possível", o:""},
{etapa:"adj", d:"Otite média recente sem resolução completa", o:""},
{etapa:"adj", d:"Pós-cirurgia otológica recente", o:""},

{etapa:"escala", d:"⚠ TRATAMENTO PÓS-VIAGEM se já com sintomas:", o:""},

{etapa:"escala", d:"BAROTRAUMA LEVE (dor sem derrame): repouso, descongestionante 3-5 dias, AINE, calor local", o:""},

{etapa:"escala", d:"OTITE BAROTRAUMÁTICA com DERRAME: descongestionante + corticoide nasal × 2-3 sem, antibiótico apenas se infecção secundária", o:""},

{etapa:"escala", d:"PERFURAÇÃO TIMPÂNICA: manter ouvido seco, NÃO molhar, antibiótico tópico (ciprofloxacino otológico) × 7d, ORL urgente", o:""},

{etapa:"alta", d:"ENCAMINHAR ORL: derrame persistente >2-3 sem, perfuração, hipoacusia persistente, vertigem persistente, sintomas recorrentes a cada viagem", o:""},

{etapa:"alta", d:"⚠ MERGULHO: pacientes com história de barotrauma frequente devem evitar OU usar técnicas avançadas de equalização (Frenzel, Edmonds) — instrutor qualificado", o:""},
],

alertas:[
{nivel:"warn", txt:"VALSALVA FORTE pode causar perfuração timpânica ou descolamento de retina. ASSOPRAR SUAVEMENTE até sentir 'pop' — não forçar."},
{nivel:"warn", txt:"IVAS aguda + viagem aérea = risco alto de barotrauma. Postergar viagem se possível. Se não: descongestionante nasal profilático 30 min antes da descida."},
{nivel:"warn", txt:"OXIMETAZOLINA: limite 5-7 dias (rebote — rinite medicamentosa). PSEUDOEFEDRINA: contraindicada em cardiopata, HAS descontrolada."},
{nivel:"warn", txt:"PERFURAÇÃO TIMPÂNICA: NÃO molhar ouvido. Antibiótico TÓPICO (ciprofloxacino otológico). Encaminhar ORL."},
{nivel:"info", txt:"TOYNBEE (deglutir com nariz tampado) é MAIS SEGURO que Valsalva — bom para idoso, criança, gestante."},
{nivel:"info", txt:"CRIANÇA: amamentação/mamadeira durante descida = melhor profilaxia. Bebê com IVAS aguda + voo = alto risco — discutir adiamento."},
],

fluxo:null,
diretriz:"AAO-HNS. ICAO Medical. PADI/DAN."
},
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
{id:"pulo-peace-love", nome:"Entorse aguda — PEACE & LOVE (não mais PRICE)", sis:"pulo", grav:"baixa",
cid:"S93 / S86", ciap:"L77",
sin:["Entorse tornozelo","Entorse joelho","PRICE","PEACE LOVE","RICE","Lesão de tecidos moles","Lesão ligamentar"],

def:"PROTOCOLO MODERNO substituindo PRICE/RICE (1978) — gelo NÃO é mais recomendado rotineiramente. PEACE (fase aguda) + LOVE (recuperação). Mobilização ATIVA precoce + carga progressiva melhoram recuperação vs imobilização prolongada.",

quadro:[
"Entorse aguda de tornozelo, joelho, punho, dedos — trauma indireto com edema, dor, hematoma, limitação funcional",
"Avaliar gravidade: grau I (estiramento, dor leve, sem instabilidade), grau II (ruptura parcial, dor moderada, edema), grau III (ruptura completa, instabilidade — ortopedia)",
"⚠ REGRAS DE OTTAWA para Rx de tornozelo: dor maléolo + dor à palpação 6 cm proximal OU incapacidade de pisar 4 passos = Rx",
"REGRAS DE OTTAWA joelho: idade ≥55a, dor cabeça da fíbula, dor isolada na patela, incapaz flexão 90°, incapaz pisar = Rx",
],

diag:[
"Inspeção: edema, hematoma, deformidade",
"Palpação: dor focal vs difusa",
"Testes funcionais: amplitude movimento, instabilidade, gaveta anterior/posterior",
"Aplicar REGRAS DE OTTAWA para indicação de Rx",
],

exames:["Rx ankle/joelho APENAS se Regras de Ottawa positivas","USG / RM em casos selecionados (suspeita lesão ligamentar grave, fratura oculta)"],

rx:[
{etapa:"inicial", d:"⚠ NOVO PROTOCOLO PEACE (primeiras 72h) — substitui RICE/PRICE", o:""},

{etapa:"escala", d:"P — PROTEÇÃO — limitar movimento por 1-3 dias APENAS (evitar atividades que pioram a dor)", o:"⚠ NÃO imobilizar prolongadamente — fraqueza muscular e atraso na recuperação."},

{etapa:"escala", d:"E — ELEVAÇÃO — membro acima do nível do coração tanto quanto possível", o:""},

{etapa:"escala", d:"A — AVOID anti-inflamatórios (AINEs) e GELO — evitar nas primeiras horas-dias", o:""},
{etapa:"escala", d:"⚠ AINEs nas primeiras 48-72h INIBEM a fase inflamatória NECESSÁRIA para cicatrização", o:""},
{etapa:"escala", d:"⚠ GELO: reduz dor temporariamente mas pode RETARDAR cicatrização tecidual (vasoconstrição reduz chegada de fatores reparadores)", o:"Não há proibição absoluta — em pacientes com dor importante, gelo curto (10-15 min) pode ser usado para conforto. Mas NÃO é mais recomendado rotineiramente."},
{etapa:"escala", d:"PARA DOR: usar PARACETAMOL (não interfere com cicatrização) — 500-1000 mg 6/6h máx 4g/d", o:""},

{etapa:"escala", d:"C — COMPRESSÃO — bandagem elástica adesiva ou luva compressiva nas primeiras 48-72h", o:"Reduz edema e dor."},

{etapa:"escala", d:"E — EDUCATION — orientar paciente: recuperação ativa, evitar excesso de tratamentos passivos (massagem, terapia manual), evidência aponta para movimento progressivo", o:""},

{etapa:"adj", d:"⚠ APÓS 72h — LOVE (recuperação) — orientar mobilização ativa", o:""},

{etapa:"adj", d:"L — LOAD — carga progressiva conforme tolerância (sem dor importante)", o:"Início precoce de carga = melhor cicatrização e função."},

{etapa:"adj", d:"O — OPTIMISM — pensamento positivo, otimismo realista (catastrofização piora prognóstico)", o:""},

{etapa:"adj", d:"V — VASCULARIZATION — exercícios cardiovasculares (caminhada, bicicleta, natação) — favorecem vascularização do tecido lesado", o:""},

{etapa:"adj", d:"E — EXERCISE — exercícios específicos de força, propriocepção, mobilidade — preferencialmente com fisioterapeuta", o:"Propriocepção (treino sobre superfícies instáveis) reduz recidiva."},

{etapa:"adj", d:"FERULAÇÃO em entorse grave (gr II-III tornozelo): bota imobilizadora removível por 1-2 sem permite mobilização precoce sem instabilidade", o:""},

{etapa:"alta", d:"⚠ ENCAMINHAR ORTOPEDIA: (1) grau III (ruptura completa); (2) sinais de instabilidade persistente; (3) Rx com fratura; (4) entorse recorrente; (5) dor persistente >6 sem", o:""},

{etapa:"alta", d:"PROFILAXIA SECUNDÁRIA: treino de propriocepção, fortalecimento muscular específico, sapato adequado, alongamento", o:"30% dos pacientes têm recidiva — propriocepção reduz."},
],

alertas:[
{nivel:"warn", txt:"⚠ MUDANÇA DE PARADIGMA: PEACE & LOVE substitui RICE/PRICE (1978). GELO não é mais recomendado rotineiramente. AINE evitar primeiras 48-72h."},
{nivel:"warn", txt:"AINE nas primeiras 48-72h INIBE cicatrização (suprime fase inflamatória reparadora). Usar PARACETAMOL para dor."},
{nivel:"warn", txt:"IMOBILIZAÇÃO PROLONGADA é DELETÉRIA — fraqueza muscular, atraso de cicatrização, perda de propriocepção. Mobilização precoce é a regra."},
{nivel:"warn", txt:"REGRAS DE OTTAWA: usar para evitar Rx desnecessária (sensibilidade >95%, especificidade ~30-50%)."},
{nivel:"info", txt:"GELO pode ser usado pontualmente para CONFORTO em paciente com muita dor (10-15 min) — mas NÃO como rotina. PARACETAMOL é alternativa."},
{nivel:"info", txt:"ENTORSE DE TORNOZELO recidiva em ~30% dos casos. Treino proprioceptivo + fortalecimento reduz recorrência."},
{nivel:"info", txt:"EVIDÊNCIA DO PEACE & LOVE: Br J Sports Med 2019 (Dubois & Esculier) — atualização do paradigma."},
],

fluxo:null,
diretriz:"Dubois & Esculier (Br J Sports Med 2019). NICE Guidelines. SBOT."
},
{id:"pulo-pico-vs-panico", nome:"Pico hipertensivo vs ataque de pânico — diferenciar", sis:"pulo", grav:"moderada",
cid:"R45 / I10", ciap:"P74 / K85",
sin:["Crise hipertensiva","Pânico","Ansiedade","Pico hipertensivo","Falsa emergência hipertensiva"],
def:"PA elevada + sintomas agudos NÃO é necessariamente emergência hipertensiva. ATAQUE DE PÂNICO frequentemente cursa com HAS reativa, palpitação, dispneia, sudorese. SEM LOA, NÃO é emergência. Tratar o pânico, não o número.",
quadro:["Paciente com PA elevada + sintomas: cefaleia, palpitação, dispneia, sudorese, formigamento, tonteira","DIFERENCIAR:","EMERGÊNCIA HIPERTENSIVA: PA muito alta + LOA AGUDA (encefalopatia, AVC, EAP, IAM, dissecção, eclâmpsia)","URGÊNCIA HIPERTENSIVA: PA muito alta + sintomas LEVES, sem LOA — controlar gradualmente em 24h","PSEUDO-EMERGÊNCIA (PÂNICO): PA elevada REATIVA aos sintomas de pânico — não é emergência hipertensiva"],
diag:["Sintomas focais neurológicos? (AVC)","Dor torácica isquêmica? (IAM/SCA)","Dispneia + estertores + ortopneia? (EAP)","Edema cerebral (cefaleia + náusea + alteração consciência)?","SE SIM: investigar emergência","SE NÃO: avaliar pânico — palpitação, sensação de morte iminente, dispneia, parestesias, sudorese, tremor — autonômico"],
exames:["PA seriada","ECG","Em emergência: troponina, creatinina, fundoscopia, TC crânio se sintomas neurológicos"],
rx:[
{etapa:"inicial", d:"⚠ AVALIAR LOA AGUDA — pergunta CHAVE"},
{etapa:"inicial", d:"LOA presente: tratar como emergência (NPS, esmolol, etc — UTI)"},
{etapa:"inicial", d:"LOA ausente + PA muito alta: urgência hipertensiva (captopril VO, redução gradual 24h)"},
{etapa:"inicial", d:"LOA ausente + sintomas autonômicos típicos: PSEUDO-EMERGÊNCIA — tratar a CAUSA (pânico)"},
{etapa:"escala", d:"⚠ ATAQUE DE PÂNICO — pistas diagnósticas"},
{etapa:"escala", d:"Sintomas autônômicos: palpitação, sudorese, tremor, dispneia, dor torácica atípica, náusea, tonteira"},
{etapa:"escala", d:"Sintomas neurológicos: parestesias mãos/pés (HIPERVENTILAÇÃO — alcalose respiratória → tetania leve)"},
{etapa:"escala", d:"Sintomas psíquicos: sensação de MORTE iminente, despersonalização, desrealização, medo de enlouquecer"},
{etapa:"escala", d:"DURAÇÃO TÍPICA: 10-30 min (pico em 10 min)"},
{etapa:"escala", d:"História de ATAQUES PRÉVIOS, sintomas idênticos, contexto de estresse"},
{etapa:"escala", d:"⚠ TRATAMENTO DO PÂNICO (não da PA isolada)"},
{etapa:"escala", d:"AMBIENTE TRANQUILO, isolar do agito"},
{etapa:"escala", d:"COMUNICAÇÃO CALMA + reasseguramento — 'isso passa, não vai morrer'"},
{etapa:"escala", d:"⚠ TÉCNICA RESPIRATÓRIA — orientar respiração LENTA e CONTROLADA"},
{etapa:"escala", d:"Inspirar pelo nariz 4 segundos → segurar 4 seg → expirar pela boca 6 seg"},
{etapa:"escala", d:"Repetir várias vezes — corrige alcalose por hiperventilação, reduz sintomas neuromusculares"},
{etapa:"escala", d:"⚠ NÃO USAR SACO DE PAPEL (MITO PERIGOSO)"},
{etapa:"escala", d:"Saco de papel pode causar HIPOXIA grave em paciente com causa orgânica não diagnosticada (TEP, asma, IAM)"},
{etapa:"escala", d:"Casos de morte documentados — abandonado"},
{etapa:"escala", d:"Respiração lenta orientada é alternativa segura e eficaz"},
{etapa:"adj", d:"⚠ MEDICAÇÃO se necessário"},
{etapa:"adj", d:"Lorazepam 1-2 mg SL/VO OU diazepam 5-10 mg VO — em ataque de pânico agudo refratário à abordagem comportamental", o:"Início 10-30 min. Não usar regularmente (dependência)."},
{etapa:"adj", d:"Em emergência ou paciente incapaz de cooperar: lorazepam 1-2 mg IM"},
{etapa:"adj", d:"⚠ REAVALIAR PA APÓS 15-30 min com paciente CALMO"},
{etapa:"adj", d:"Geralmente PA normaliza com a melhora do pânico"},
{etapa:"adj", d:"Se PA persiste alta: avaliar como urgência hipertensiva (captopril 25 mg SL?, repouso, reavaliar)"},
{etapa:"adj", d:"⚠ NÃO USAR captopril sublingual ROTINEIRAMENTE — fora de evidência, pode causar hipotensão excessiva em paciente com pânico"},
{etapa:"alta", d:"⚠ ENCAMINHAR para acompanhamento psiquiátrico/psicológico se ataques recorrentes"},
{etapa:"alta", d:"Em ambulatório: ISRS (sertralina, escitalopram) + TCC são padrão"},
{etapa:"alta", d:"⚠ INVESTIGAR causas orgânicas em pânico atípico: hipertireoidismo, feocromocitoma, abstinência, uso de estimulantes, hipoglicemia"},
],
alertas:[
{nivel:"crit", txt:"⚠ NÃO usar SACO DE PAPEL em hiperventilação — risco HIPOXIA em causa orgânica oculta (TEP, asma, IAM). Casos de morte documentados. Mito perigoso."},
{nivel:"crit", txt:"PA ALTA + SINTOMAS focais (déficit, AVC) = emergência. PA alta + sintomas autonômicos típicos de pânico = pseudo-emergência. Diferenciar antes de tratar."},
{nivel:"warn", txt:"CAPTOPRIL SUBLINGUAL como rotina em PA alta SEM LOA é prática INADEQUADA — risco hipotensão excessiva, sem benefício comprovado. Tratar a causa do quadro."},
{nivel:"warn", txt:"PARESTESIAS em mãos/pés durante crise: alcalose respiratória por hiperventilação. Respiração lenta CORRIGE."},
{nivel:"warn", txt:"BZD em pânico: pontual, não regular. Risco dependência. Tratamento de fundo é ISRS + TCC."},
{nivel:"info", txt:"PÂNICO ATÍPICO (>30 min, sintomas atípicos, primeira crise tardia): investigar causas orgânicas — tireoide, feocromocitoma, hipoglicemia, estimulantes."},
{nivel:"info", txt:"REASSEGURAMENTO + RESPIRAÇÃO LENTA resolve maioria dos ataques de pânico sem medicação."},
],
fluxo:null, diretriz:"DBHA 2025. APA. NICE Panic Disorder."
},
{id:"pulo-pl-dificil", nome:"Punção lombar difícil — posição sentada inclinada", sis:"pulo", grav:"moderada",
cid:"-", ciap:"-",
sin:["Punção lombar","PL","LCR","Liquor","Punção liquórica","Paciente obeso PL","Pediatria PL"],

def:"Quando a PL clássica em DECÚBITO LATERAL falha (obeso, idoso com cifose, pediatria, paciente agitado), trocar para POSIÇÃO SENTADA INCLINADA aumenta taxa de sucesso. Reposicionamento simples que muda resultado.",

quadro:[
"Indicação clínica de PL (suspeita meningite, HSA com TC normal, pseudotumor cerebri, esclerose múltipla, Guillain-Barré, etc.)",
"Tentativas frustradas em decúbito lateral — sangrenta, sem fluxo, ossuda, paciente colaborativo mas anatomia difícil",
"⚠ CONTRAINDICAÇÕES gerais para PL: HIC com sinais focais (TC primeiro), distúrbio de coagulação não corrigido, infecção no local da punção, abcesso epidural suspeito",
],

diag:[
"Avaliar contraindicações ANTES de tentar (não recomeçar de zero)",
"TC crânio antes da PL se: imunossuprimido, focalidade neurológica, papiledema, alteração nível de consciência, convulsão recente, ≥60 anos",
"Conferir plaquetas + coagulação se sangramento (geralmente plaquetas >50.000 + INR <1,4)",
],

exames:["Plaquetas, INR, TTPa","TC crânio em casos com indicação"],

rx:[
{etapa:"inicial", d:"⚠ ANTES DE COMEÇAR: descartar HIC + contraindicações + ter ASSINATURA do TCLE", o:""},

{etapa:"inicial", d:"PREPARO INSTRUMENTAL: agulha de PL 22G ou 25G atraumática (Sprotte, Whitacre) — REDUZ cefaleia pós-PL", o:"Atraumática (ponta de lápis) > clássica Quincke. Se só tem Quincke: inserir bisel paralelo à coluna."},

{etapa:"escala", d:"POSIÇÃO 1 — DECÚBITO LATERAL CLÁSSICO (tentar primeiro)", o:""},
{etapa:"escala", d:"Paciente em decúbito lateral, fetal (joelhos no peito, cabeça flexionada), coluna paralela à maca", o:""},
{etapa:"escala", d:"⚠ VANTAGEM: permite medir PRESSÃO DE ABERTURA (manometria)", o:""},
{etapa:"escala", d:"DESVANTAGEM: difícil em obeso, cifose, paciente colaborativo limitado", o:""},

{etapa:"escala", d:"⚠ POSIÇÃO 2 (PULO DO GATO) — POSIÇÃO SENTADA INCLINADA — quando lateral falha", o:""},
{etapa:"escala", d:"(a) Paciente SENTADO no leito, pernas pendentes (ou pernas estendidas em paciente com pouca mobilidade)", o:""},
{etapa:"escala", d:"(b) INCLINAR para FRENTE — abraçando um travesseiro/almofada", o:""},
{etapa:"escala", d:"(c) Idealmente: paciente apoia testa na maca/cadeira mais à frente, FLEXÃO máxima da coluna lombar", o:""},
{etapa:"escala", d:"(d) Auxiliar ajuda a manter posição estável", o:""},
{etapa:"escala", d:"(e) Identificar EIAS bilaterais → linha imaginária = L4 (cristas ilíacas). Puncionar L3-L4 ou L4-L5", o:""},
{etapa:"escala", d:"⚠ VANTAGENS: melhor abertura dos espaços intervertebrais, anatomia mais clara, mais fácil em obeso/cifose/jovem", o:""},
{etapa:"escala", d:"⚠ DESVANTAGEM: NÃO permite manometria ACURADA da pressão de abertura (paciente sentado tem pressão aumentada artificialmente — se precisar medir, reposicionar em lateral após coleta)", o:""},

{etapa:"escala", d:"TÉCNICA DE PUNÇÃO:", o:""},
{etapa:"escala", d:"(1) Antissepsia ampla com clorexidina alcoólica + campo estéril", o:""},
{etapa:"escala", d:"(2) Anestesia local: lidocaína 1% — botão dérmico + infiltração mais profunda (introdutora 22G)", o:""},
{etapa:"escala", d:"(3) Introdutora ESTÉRIL guia a agulha (em paciente obeso, ajuda a vencer tecido subcutâneo)", o:""},
{etapa:"escala", d:"(4) AGULHA com BISEL PARALELO à coluna (separa fibras do ligamento longitudinal, reduz cefaleia pós-PL)", o:""},
{etapa:"escala", d:"(5) Avançar lentamente — sente 'pop' ao passar ligamento amarelo (paciente magro) ou apenas resistência reduzida (obeso)", o:""},
{etapa:"escala", d:"(6) Retirar mandril a cada 2-3 mm a partir de profundidade média — verificar fluxo", o:""},
{etapa:"escala", d:"(7) Quando LCR fluir: coletar 3-4 frascos (1-2 mL cada — bioquímica, celularidade, microbiologia, sorologias)", o:""},

{etapa:"adj", d:"⚠ SE PUNÇÃO TRAUMÁTICA (sangue no LCR):", o:""},
{etapa:"adj", d:"Coletar nos 4 frascos — comparar TUBO 1 vs TUBO 4 (TUBO 4 mais claro = traumática; igual em ambos = HSA)", o:""},
{etapa:"adj", d:"Se HSA: encaminhar urgência + considerar repetir PL em 12h", o:""},

{etapa:"adj", d:"PÓS-PL: paciente em decúbito SUPINO ou lateral 1-2h (em paciente sintomático). Hidratação", o:"⚠ Repouso prolongado NÃO reduz cefaleia pós-PL (evidência limitada)."},

{etapa:"adj", d:"CEFALEIA PÓS-PL: ocorre 24-72h após. Padrão postural (piora ao sentar/levantar)", o:""},
{etapa:"adj", d:"Conduta: hidratação + analgesia (paracetamol, AINE, cafeína 300 mg VO 8/8h pode ajudar)", o:""},
{etapa:"adj", d:"Refratária >5 dias: BLOOD PATCH (tampão sanguíneo epidural) — anestesiologista", o:""},

{etapa:"alta", d:"⚠ FALHA APÓS 2-3 TENTATIVAS bem posicionadas: solicitar PL guiada por fluoroscopia ou USG (radiologia intervencionista)", o:""},
{etapa:"alta", d:"USG POINT-OF-CARE em mãos treinadas: melhora taxa de sucesso em obesos (visualiza espaço intervertebral)", o:""},
],

alertas:[
{nivel:"crit", txt:"NUNCA tentar PL em paciente com sinais focais novos OU rebaixamento agudo de consciência SEM TC crânio prévio — risco herniação."},
{nivel:"crit", txt:"CONTRAINDICAÇÕES: HIC com sinais focais, plaquetas <50.000, coagulopatia não corrigida (INR >1,4), infecção no local, suspeita abcesso epidural."},
{nivel:"warn", txt:"POSIÇÃO SENTADA: NÃO permite manometria acurada (pressão artificialmente aumentada). Se medir pressão for essencial: reposicionar em lateral após coleta."},
{nivel:"warn", txt:"AGULHA ATRAUMÁTICA (Sprotte/Whitacre) reduz cefaleia pós-PL pela metade vs Quincke. Se só tem Quincke: bisel PARALELO à coluna."},
{nivel:"warn", txt:"BLOOD PATCH para cefaleia pós-PL refratária — anestesiologista. Eficácia ~70-90%."},
{nivel:"info", txt:"USG POINT-OF-CARE: melhora visualização em obeso. Ainda pouco disponível mas crescente."},
{nivel:"info", txt:"REPOUSO PROLONGADO pós-PL NÃO reduz cefaleia — orientar mobilização precoce com hidratação."},
],

fluxo:null,
diretriz:"Roberts & Hedges. Cochrane Review PL position. ESA. WFSA."
},
{id:"pulo-reduzir-dedo", nome:"Redução de luxação de dedo — IFP/IFD/mallet", sis:"pulo", grav:"moderada",
cid:"S63.2", ciap:"L80",
sin:["Luxação dedo","Mallet finger","Boutonnière","IFP luxada","Dedo deslocado"],
def:"Luxações de articulações interfalângicas (IFP, IFD) DORSAIS são as mais comuns — geralmente em esporte/trauma. REDUÇÃO MANUAL após anestesia em bloqueio digital — tração axial suave + flexão. Confirmar com Rx PÓS-redução. Imobilizar e encaminhar.",
quadro:["Trauma na mão/dedo durante esporte (basquete, vôlei, futebol) ou queda","Deformidade visível, dor, impossibilidade de mover","TIPOS: IFP DORSAL (mais comum), IFP VOLAR (rara, lesão central slip = boutonnière), IFD (avulsão tendão extensor = mallet finger)","⚠ EXCLUIR fratura associada antes da redução (Rx)"],
diag:["Inspeção + palpação","TESTAR pulsos digitais (preenchimento capilar) — risco vascular","TESTAR sensibilidade dos nervos digitais (palmar, dorsal)","Rx PRÉ-redução em 2 projeções"],
exames:["Rx dedo AP + perfil + oblíqua (pré e pós-redução)"],
rx:[
{etapa:"inicial", d:"⚠ AVALIAR antes de reduzir: pulso digital, sensibilidade, Rx (excluir fratura)"},
{etapa:"escala", d:"BLOQUEIO DIGITAL com lidocaína 1-2% SEM ADRENALINA (extremidade terminal)"},
{etapa:"escala", d:"Inserção: face lateral da base do dedo, 4 pontos cardeais (2 dorsais + 2 volares) — 1-2 mL em cada lado"},
{etapa:"escala", d:"Aguardar 5-10 min para anestesia plena"},
{etapa:"escala", d:"⚠ REDUÇÃO DE IFP / IFD DORSAL (mais comum)"},
{etapa:"escala", d:"Estabilizar a falange proximal com uma mão"},
{etapa:"escala", d:"Aplicar TRAÇÃO AXIAL no dedo distal + HIPEREXTENSÃO suave"},
{etapa:"escala", d:"Empurrar a base distal de volta sobre a falange proximal + FLEXÃO até reduzir"},
{etapa:"escala", d:"Sente um 'clunk' / movimento súbito + recuperação do alinhamento"},
{etapa:"adj", d:"PÓS-REDUÇÃO: Rx confirmar redução + ausência de fratura visível pós-redução"},
{etapa:"adj", d:"TESTAR movimento ativo do dedo + estabilidade ligamentar"},
{etapa:"adj", d:"IMOBILIZAÇÃO em LEVE FLEXÃO com goteira de alumínio acolchoada × 2-3 semanas"},
{etapa:"adj", d:"⚠ MALLET FINGER (avulsão tendão extensor em IFD)"},
{etapa:"adj", d:"Quadro: dedo em 'martelo' — IFD em flexão, incapaz de estender ativamente"},
{etapa:"adj", d:"TRATAMENTO CONSERVADOR (maioria): goteira em HIPEREXTENSÃO da IFD × 6-8 sem ININTERRUPTAS"},
{etapa:"adj", d:"NÃO PODE flexionar IFD nem 1 vez durante esse período — reinicia o tempo. Importante orientar paciente"},
{etapa:"adj", d:"Encaminhar ortopedia para acompanhamento + decisão de cirurgia em fragmento ósseo grande"},
{etapa:"adj", d:"⚠ BOUTONNIÈRE (lesão da banda central do extensor da IFP)"},
{etapa:"adj", d:"Quadro: IFP em flexão + IFD em hiperextensão (deformidade típica)"},
{etapa:"adj", d:"Inicialmente pode ser sutil — só mais tarde a deformidade aparece"},
{etapa:"adj", d:"Goteira EM EXTENSÃO da IFP × 4-6 sem + acompanhamento ortopédico"},
{etapa:"adj", d:"⚠ LUXAÇÕES IRREDUTÍVEIS / RECIDIVANTES / IFP volar / fratura grande / lesão de tendão flexor: ORTOPEDIA"},
{etapa:"alta", d:"ENCAMINHAR ORTOPEDIA: todas as luxações, especialmente IFP/IFD volares, suspeita de lesão tendínea, fraturas associadas"},
{etapa:"alta", d:"FISIOTERAPIA após imobilização — recuperar amplitude e força"},
{etapa:"alta", d:"⚠ Sequelas comuns se mal tratado: rigidez articular crônica, deformidade boutonnière tardia, dor crônica"},
],
alertas:[
{nivel:"crit", txt:"LUXAÇÃO IRREDUTÍVEL após 1-2 tentativas: ORTOPEDIA. Tentativas múltiplas aumentam edema, lesão tecidual."},
{nivel:"crit", txt:"FRATURA-LUXAÇÃO (especialmente IFP volar): ortopedia — risco instabilidade crônica."},
{nivel:"warn", txt:"BLOQUEIO DIGITAL: lidocaína SEM adrenalina. 4 pontos cardeais na base do dedo."},
{nivel:"warn", txt:"MALLET FINGER: imobilização ININTERRUPTA × 6-8 sem em HIPEREXTENSÃO. Flexionar uma vez = reiniciar contagem. Educar paciente repetidamente."},
{nivel:"warn", txt:"BOUTONNIÈRE precoce é sutil — pode ser confundida com 'entorse'. Goteira EM EXTENSÃO da IFP previne deformidade tardia."},
{nivel:"info", txt:"PÓS-REDUÇÃO: Rx é OBRIGATÓRIO — confirmar redução + excluir fratura associada visível pós-redução."},
],
fluxo:null, diretriz:"AAOS. SBOT. Hand Society."
},
{id:"pulo-solucos", nome:"Soluços incoercíveis — manobras vagais e farmacologia", sis:"pulo", grav:"baixa",
cid:"R06.6", ciap:"D04",
sin:["Soluço","Soluços persistentes","Hiccup","Singultus","Soluços intratáveis"],

def:"Soluços = espasmo involuntário do diafragma + fechamento súbito da glote. AGUDOS (<48h) — geralmente autolimitados. PERSISTENTES (>48h) — investigar causa. INTRATÁVEIS (>1 mês) — investigação extensa. Manobras vagais resolvem maioria; farmacologia se persistente.",

quadro:[
"Soluços agudos: <48h, geralmente desencadeados por distensão gástrica (refeição grande, refrigerante), mudança brusca de temperatura, álcool, ingestão rápida",
"⚠ Soluços PERSISTENTES/INTRATÁVEIS: investigar causa — DRGE, hérnia hiatal, tumor mediastinal/cerebral, AVC, IRC avançada, medicação (corticoide, BZD), pós-operatório, irritação subdiafragmática (abscesso, hepatomegalia, esplenomegalia, IAM inferior atípico)",
"Geralmente unilateral (60% mais comum à esquerda)",
"Pode causar: insônia, exaustão, perda de peso, deiscência de ferida cirúrgica",
],

diag:[
"História: tempo de início, gatilhos, sintomas associados (refluxo, disfagia, dor), medicamentos",
"Exame físico: orofaringe, abdome, exame neurológico",
"Em casos persistentes: investigar causa subjacente",
],

exames:["AGUDO: geralmente nenhum","PERSISTENTE: hemograma, eletrólitos, glicemia, função renal, TSH, Rx tórax, EDA","INTRATÁVEL: TC tórax, TC/RM crânio, ECG, considerar gastroenterologia/neurologia"],

rx:[
{etapa:"inicial", d:"⚠ AGUDO (<48h): MANOBRAS VAGAIS / RESPIRATÓRIAS — eficazes em maioria", o:""},

{etapa:"escala", d:"MANOBRAS RESPIRATÓRIAS:", o:""},
{etapa:"escala", d:"PRENDER respiração 10-30 segundos × repetir várias vezes", o:"Aumenta CO₂, modula nervo frênico."},
{etapa:"escala", d:"RESPIRAR em saco de papel (BOLSA PAPEL — NÃO plástico) — reinala CO₂", o:"⚠ Cuidado: não recomendado em hipoxia, DPOC, cardiopata, gestante."},
{etapa:"escala", d:"INSPIRAÇÃO PROFUNDA + soltar lentamente × várias vezes", o:""},
{etapa:"escala", d:"Manobra de VALSALVA — fechar boca + nariz + expirar contra resistência", o:""},

{etapa:"escala", d:"MANOBRAS VAGAIS (estimulam nervo vago):", o:""},
{etapa:"escala", d:"ÁGUA GELADA — beber rápido 1 copo de água gelada", o:""},
{etapa:"escala", d:"BEBER ÁGUA pela borda OPOSTA do copo (cabeça inclinada para frente)", o:""},
{etapa:"escala", d:"PRESSÃO no globo ocular (suavemente) — manobra OCULAR de Aschner", o:"⚠ Não em pacientes com glaucoma, cardiopatia bradicárdica."},
{etapa:"escala", d:"MASSAGEM CAROTÍDEA (unilateral) — apenas em jovens sem doença carotídea/cardíaca", o:"Risco em idoso/cardiopata."},

{etapa:"escala", d:"MANOBRAS GUSTATIVAS:", o:""},
{etapa:"escala", d:"AÇÚCAR — 1 colher de sopa de açúcar refinado seco DEGLUTIDO (não com água)", o:"Estímulo intenso da orofaringe — modula nervo vago."},
{etapa:"escala", d:"SUCO DE LIMÃO PURO — 1 colher", o:""},
{etapa:"escala", d:"VINAGRE — 1 colher de chá", o:""},
{etapa:"escala", d:"GARGAREJAR com água gelada", o:""},

{etapa:"escala", d:"OUTRAS MANOBRAS:", o:""},
{etapa:"escala", d:"PUXAR a LÍNGUA com gaze (estímulo nervo glossofaríngeo)", o:""},
{etapa:"escala", d:"Estimular a ÚVULA com cotonete (estímulo gag reflex modulado)", o:""},
{etapa:"escala", d:"DEITAR e elevar joelhos contra o peito", o:""},
{etapa:"escala", d:"AGACHAMENTO + flexão de tronco", o:""},

{etapa:"adj", d:"⚠ SOLUÇOS PERSISTENTES (>48h) — terapia farmacológica:", o:""},

{etapa:"adj", d:"BACLOFENO 5-20 mg VO 8/8h — 1ª linha farmacológica", o:"Inibe nervo frênico. Aumentar gradualmente. Cuidado em IRC."},

{etapa:"adj", d:"METOCLOPRAMIDA 10 mg VO/IV 8/8h — útil se há componente de gastroparesia/DRGE", o:"⚠ Limite ≤5 dias — sintomas extrapiramidais."},

{etapa:"adj", d:"CLORPROMAZINA 25-50 mg VO/IM 6/6h — alternativa em soluços refratários", o:"Único aprovado pela FDA para soluços. Efeitos colaterais significativos (hipotensão, sedação, extrapiramidais)."},

{etapa:"adj", d:"GABAPENTINA 300-900 mg/d divididos — em soluços crônicos", o:""},

{etapa:"adj", d:"OMEPRAZOL 20-40 mg/d — se componente de DRGE", o:""},

{etapa:"adj", d:"DOMPERIDONA 10 mg 8/8h — alternativa a metoclopramida (menos extrapiramidais)", o:""},

{etapa:"alta", d:"⚠ SOLUÇOS PERSISTENTES OU INTRATÁVEIS: INVESTIGAR causa subjacente", o:""},
{etapa:"alta", d:"CAUSAS A EXCLUIR: DRGE/hérnia hiatal (EDA), tumor mediastinal (Rx/TC tórax), lesão SNC (AVC, tumor), IAM (especialmente inferior atípico), uremia, distúrbio hidroeletrolítico, medicações (corticoide, BZD, álcool, anestésicos)", o:""},
{etapa:"alta", d:"ENCAMINHAR conforme suspeita: gastroenterologia, neurologia, oncologia, cardiologia", o:""},
],

alertas:[
{nivel:"warn", txt:"SOLUÇOS PERSISTENTES (>48h) ou INTRATÁVEIS (>1 mês) = INVESTIGAR. Pode ser sinal de doença subjacente grave (tumor, AVC, IAM, IRC)."},
{nivel:"warn", txt:"MANOBRA OCULAR (Aschner) e MASSAGEM CAROTÍDEA: não fazer em idoso, cardiopata, glaucomatoso."},
{nivel:"warn", txt:"SACO DE PAPEL para CO₂: evitar em hipoxia, DPOC, cardiopata, gestante — pode piorar oxigenação."},
{nivel:"warn", txt:"METOCLOPRAMIDA: limite ≤5 dias (sintomas extrapiramidais, discinesia tardia irreversível). EVITAR idoso."},
{nivel:"warn", txt:"CLORPROMAZINA: aprovada para soluços mas com efeitos colaterais significativos — hipotensão, sedação, extrapiramidais. Reservar refratário."},
{nivel:"info", txt:"BACLOFENO é 1ª LINHA farmacológica em soluços persistentes. Atua diretamente no nervo frênico via GABA-B."},
{nivel:"info", txt:"60% dos soluços são UNILATERAIS, predomínio à esquerda — distinguir de musculares localizados."},
],

fluxo:null,
diretriz:"Cochrane Hiccups. AGA. UpToDate."
},
{id:"pulo-sumo-psicotico", nome:"Abordagem ao paciente psicótico agitado — 'sumô' 5 pessoas", sis:"pulo", grav:"alta",
cid:"F23", ciap:"P98",
sin:["Paciente agitado","Psicose aguda","Contenção","Sumô","Abordagem 5 pessoas","Surto psicótico"],
def:"PACIENTE PSICÓTICO/AGITADO/AGRESSIVO — abordagem física com 5 PESSOAS TREINADAS é MAIS SEGURA e MAIS RÁPIDA que 1 ou 2 (paradoxal). Reduz lesão para paciente E equipe. Combinado com de-escalada verbal + medicação química rápida.",
quadro:["Surto psicótico agudo: alucinações, delírio, desorganização do pensamento","Agitação psicomotora intensa, agressão verbal/física","Causas: esquizofrenia, transtorno bipolar (mania), psicose por substância (cocaína, anfetaminas, álcool, K, LSD), causas orgânicas (delirium, encefalite, hipoxia, hipoglicemia)","⚠ Sempre EXCLUIR causa ORGÂNICA antes de assumir psiquiátrico primário"],
diag:["Anamnese (rápida) + acompanhantes","Sinais vitais (FC, PA, T, SatO₂, glicemia)","Avaliar sinais focais, pupilas, escala de Glasgow","Em quadro novo: investigar causa orgânica antes (delirium é diagnóstico de exclusão)"],
exames:["Glicemia capilar SEMPRE","Em quadro novo / atípico: hemograma, eletrólitos, função renal/hepática, TSH, tóxico (urina), gasometria, ECG, TC crânio"],
rx:[
{etapa:"inicial", d:"⚠ PRIMEIRO — SEGURANÇA DA EQUIPE E DO PACIENTE"},
{etapa:"inicial", d:"Garantir VIA DE SAÍDA — equipe entre paciente e porta"},
{etapa:"inicial", d:"Retirar objetos que possam ser usados como armas"},
{etapa:"inicial", d:"Chamar segurança / polícia se necessário"},
{etapa:"inicial", d:"AVALIAR SINAIS VITAIS + GLICEMIA — descartar causa orgânica imediata"},
{etapa:"escala", d:"⚠ DE-ESCALADA VERBAL — primeira tentativa"},
{etapa:"escala", d:"UM profissional designado para se comunicar — outros recuam"},
{etapa:"escala", d:"Tom calmo, baixo, frases curtas e simples"},
{etapa:"escala", d:"Validar a emoção, não confrontar conteúdo delirante"},
{etapa:"escala", d:"Espaço físico amplo entre profissional e paciente (>2m)"},
{etapa:"escala", d:"Oferecer escolhas (medicação VO vs IM)"},
{etapa:"escala", d:"⚠ NÃO confrontar delírio: 'mas não há ninguém te perseguindo' — VALIDAR a emoção sem reforçar"},
{etapa:"escala", d:"⚠ MEDICAÇÃO RÁPIDA — VO se cooperativo"},
{etapa:"escala", d:"Risperidona 1-2 mg VO + lorazepam 1-2 mg VO (ou diazepam 5-10 mg VO)", o:"Adulto cooperativo. Início 30-60 min."},
{etapa:"escala", d:"Olanzapina 10 mg VO ou dispersível", o:"Sedação rápida, bem aceito."},
{etapa:"escala", d:"⚠ CONTENÇÃO FÍSICA — quando paciente perigoso e medicação VO impossível"},
{etapa:"escala", d:"⚠ TÉCNICA DAS 5 PESSOAS ('SUMÔ' RESPEITOSO)"},
{etapa:"escala", d:"(1) UMA pessoa para CADA MEMBRO (4 pessoas: 2 braços + 2 pernas)"},
{etapa:"escala", d:"(2) UMA pessoa para CABEÇA + comunicação verbal"},
{etapa:"escala", d:"(3) TOTAL: 5 pessoas. Sincronizar abordagem (contar até 3)"},
{etapa:"escala", d:"(4) Cada pessoa segura UM membro firmemente — controla flexão/extensão"},
{etapa:"escala", d:"(5) Decúbito DORSAL com cabeça lateralizada — risco aspiração"},
{etapa:"escala", d:"⚠ NÃO em posição PRONA (risco de morte por compressão respiratória — síndrome de death by restraint, casos legais)"},
{etapa:"escala", d:"(6) Quanto MAIS pessoas, MENOS força CADA UMA precisa fazer — paradoxalmente, menos lesão"},
{etapa:"escala", d:"(7) Aplicar MEDICAÇÃO INTRAMUSCULAR rapidamente — IM coxa lateral"},
{etapa:"escala", d:"⚠ TRANQUILIZAÇÃO RÁPIDA IM"},
{etapa:"escala", d:"Haloperidol 5 mg IM + Midazolam 5 mg IM + Prometazina 25-50 mg IM", o:"Esquema clássico 'B52-mod' / 'haldol-midazolam-fenergan'. Início 15-30 min."},
{etapa:"escala", d:"OU Olanzapina 10 mg IM (alternativa quando disponível)", o:"⚠ Não combinar com benzodiazepínico parenteral (depressão respiratória)."},
{etapa:"escala", d:"OU Ziprasidona 10-20 mg IM (mais sedação rápida)"},
{etapa:"adj", d:"PÓS-CONTENÇÃO + medicação:"},
{etapa:"adj", d:"Monitorar via aérea, SatO₂, FC, PA"},
{etapa:"adj", d:"Reavaliar contenção em 15 min — afrouxar progressivamente conforme sedação"},
{etapa:"adj", d:"Hidratar (paciente sem ingerir há horas/dia)"},
{etapa:"adj", d:"Documentar TUDO — indicação, técnica, medicação, monitorização (questões médico-legais)"},
{etapa:"alta", d:"⚠ INVESTIGAR CAUSA antes/depois da estabilização:"},
{etapa:"alta", d:"INTOXICAÇÃO (cocaína, álcool, anfetamina, K, NPS)"},
{etapa:"alta", d:"ABSTINÊNCIA (álcool, BZD — delirium tremens)"},
{etapa:"alta", d:"CAUSA ORGÂNICA (encefalite, AVC, hipoxia, hipoglicemia, sepse, hipertireoidismo)"},
{etapa:"alta", d:"DESCOMPENSAÇÃO PSIQUIÁTRICA primária"},
{etapa:"alta", d:"ENCAMINHAR psiquiatria de emergência / internação compulsória se necessário"},
{etapa:"alta", d:"⚠ DOCUMENTAR INDICAÇÃO de contenção, técnica usada, medicação, monitor — risco médico-legal alto"},
],
alertas:[
{nivel:"crit", txt:"⚠ NUNCA EM POSIÇÃO PRONA durante contenção — risco morte por restraint (compressão respiratória). Decúbito DORSAL + cabeça lateralizada."},
{nivel:"crit", txt:"5 PESSOAS (1 por membro + 1 para cabeça): paradoxalmente MAIS SEGURO que 2-3. Cada pessoa precisa de MENOS força = menos lesão. Sincronia ESSENCIAL."},
{nivel:"crit", txt:"GLICEMIA SEMPRE antes de medicar agitação — hipoglicemia mimetiza psicose. Erro grave dar haldol em hipoglicêmico."},
{nivel:"warn", txt:"OLANZAPINA IM + BZD parenteral: risco DEPRESSÃO RESPIRATÓRIA. NÃO COMBINAR. Se olanzapina IM: NÃO dar BZD."},
{nivel:"warn", txt:"HALOPERIDOL: cuidado com QT longo (intoxicação por cocaína = arritmia + QT longo). Em jovem com cocaína: PREFERIR BZD isolado."},
{nivel:"warn", txt:"DELIRIUM no idoso: NÃO usar BZD (PIORA). Preferir haloperidol baixa dose OU antipsicótico atípico. Tratar causa subjacente."},
{nivel:"info", txt:"DE-ESCALADA VERBAL evita contenção em ~50% dos casos quando bem feita. Tom calmo, espaço, validar emoção."},
{nivel:"info", txt:"DOCUMENTAR contenção: indicação clínica, técnica, medicação, monitorização. Importante medico-legalmente."},
],
fluxo:null, diretriz:"APA. Joint Commission. Project BETA (Best practices in Evaluation and Treatment of Agitation)."
},
{id:"pulo-sutura-let", nome:"Sutura sem dor — anestésico tópico LET", sis:"pulo", grav:"baixa",
cid:"-", ciap:"-",
sin:["LET","Anestesia tópica","Sutura criança","Lidocaína gel","EMLA","Field block"],
def:"LET (Lidocaína 4% + Epinefrina 1:2000 + Tetracaína 0,5%) — anestésico tópico aplicado em gaze sobre ferida ANTES de infiltração ou às vezes EM SUBSTITUIÇÃO. Reduz dramaticamente dor da injeção, especialmente em CRIANÇA. Disponível em farmácia de manipulação.",
quadro:["Ferida cortante limpa, candidata a sutura — couro cabeludo, face, membros","Criança com pavor de agulha","Adulto ansioso","⚠ NÃO USAR em extremidades terminais (dedo, pênis, nariz, orelha) — adrenalina"],
diag:["Clínica","Avaliar profundidade da ferida (atinge fáscia, músculo?)","Avaliar contaminação (mordedura, contaminação grave — desbridamento + suturas seletivas)"],
exames:["Em mãos: avaliar função tendínea/sensitiva","Rx se suspeita corpo estranho radiopaco"],
rx:[
{etapa:"inicial", d:"⚠ AVALIAR ferida — extensão, profundidade, contaminação, estruturas profundas. Ferida de mordida humana/animal pode não suturar (cicatrização 2ª intenção)"},
{etapa:"inicial", d:"LIMPAR com SF abundante — irrigação 200-500 mL com pressão (seringa 30 mL + cateter 18G)"},
{etapa:"escala", d:"⚠ APLICAR LET (Lidocaína 4% + Epinefrina 1:2000 + Tetracaína 0,5%)"},
{etapa:"escala", d:"Gaze 3×3 cm embebida em LET 1-3 mL, aplicar sobre ferida com pressão suave"},
{etapa:"escala", d:"AGUARDAR 20-30 MIN (anestesia eficaz após esse tempo)"},
{etapa:"escala", d:"Pode COBRIR a gaze com fita oclusiva para manter contato"},
{etapa:"escala", d:"⚠ Após anestesia: lavar a área antes da sutura (remover excesso de tópico)"},
{etapa:"adj", d:"⚠ NÃO USAR LET (contém epinefrina) em extremidades terminais — dedo, pênis, ponta de nariz, lóbulo de orelha"},
{etapa:"adj", d:"ALTERNATIVA TÓPICA — EMLA (lidocaína 2,5% + prilocaína 2,5%): aplicar 30-60 min ANTES da pele íntegra"},
{etapa:"adj", d:"FIELD BLOCK (bloqueio perilesional) — alternativa quando LET indisponível"},
{etapa:"adj", d:"Lidocaína 1-2% com/sem adrenalina, infiltrar AO REDOR da ferida (não dentro) — agulha 27-30G, lenta", o:"Adrenalina prolonga anestesia + reduz sangramento. Não usar em extremidade terminal."},
{etapa:"adj", d:"Para REDUZIR DOR DA INJEÇÃO: usar BICARBONATO 8,4% — diluir 1:10 com lidocaína (1 mL bicarb + 9 mL lido) → pH neutro, dói menos", o:"Truque clássico. Solução fica boa por 24h."},
{etapa:"adj", d:"AQUECER lidocaína à temperatura corporal (mão fechada por 1-2 min) também reduz dor da infiltração"},
{etapa:"alta", d:"PÓS-SUTURA: cobertura simples, retirada de pontos conforme local (face 5-7d, couro cabeludo 7-10d, tronco/membro 10-14d)"},
{etapa:"alta", d:"PROFILAXIA ANTITETÂNICA conforme histórico"},
],
alertas:[
{nivel:"warn", txt:"LET CONTÉM EPINEFRINA — NÃO usar em extremidades terminais (dedo, pênis, nariz, orelha) — risco isquemia."},
{nivel:"warn", txt:"LET é DISPONÍVEL em farmácia de manipulação. Validade ~30 dias refrigerado. Custo razoável."},
{nivel:"warn", txt:"EM CRIANÇA <12 anos: dose máxima de LET geralmente 1-3 mL (lidocaína máx 4 mg/kg)."},
{nivel:"info", txt:"BICARBONATO DILUÍDO 1:10 com lidocaína reduz dor da infiltração — pH neutralizado. AQUECER a solução também."},
{nivel:"info", txt:"EMLA é alternativa para pele ÍNTEGRA (punção venosa, biópsia) — 30-60 min antes."},
],
fluxo:null, diretriz:"AAFP. Roberts & Hedges ER Procedures."
},
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
{id:"pulo-tunel-carpo", nome:"Síndrome do túnel do carpo aguda — splint noturno", sis:"pulo", grav:"baixa",
cid:"G56.0", ciap:"N93",
sin:["Túnel do carpo","STC","Parestesia mediana","Splint punho","Splint noturno"],
def:"Crise aguda de STC = compressão do nervo mediano no punho — parestesia em 3,5 primeiros dedos + dor + 'choque', PIORA À NOITE. SPLINT NOTURNO em posição neutra do punho + AINE × 3-4 sem = primeira linha em maioria dos casos. Evita necessidade de cirurgia em >50%.",
quadro:["Parestesia, queimação, 'choque' em POLEGAR + INDICADOR + MÉDIO + metade radial do anular (território do mediano)","PIORA À NOITE (paciente acorda chacoalhando a mão)","Piora com posições mantidas (telefone, dirigir, leitura)","Pode haver fraqueza na pinça polegar-indicador, atrofia tenar em casos crônicos","⚠ EXCLUIR causas SECUNDÁRIAS: hipotireoidismo, gestação, DM2, gota, AR, mieloma, infiltração tumoral"],
diag:["TINEL: percussão sobre punho ventral → parestesia distal (S ~25-30%, E ~75%)","PHALEN: flexão palmar dos punhos × 60s → parestesia (S ~50%, E ~70%)","DURKAN: compressão direta sobre nervo mediano no punho × 30s — mais sensível","Avaliar perda sensitiva (2-point discrimination), atrofia tenar","Eletroneuromiografia (ENMG) confirma — não imediatamente necessária em quadro típico"],
exames:["Geralmente clínica suficiente","TSH, glicemia (causas secundárias)","ENMG para confirmação / decisão cirúrgica"],
rx:[
{etapa:"escala", d:"⚠ SPLINT NOTURNO — 1ª LINHA"},
{etapa:"escala", d:"Imobilizador de punho em POSIÇÃO NEUTRA (não flexão, não extensão — neutra mesmo)"},
{etapa:"escala", d:"USAR durante o SONO + sempre que possível durante o dia"},
{etapa:"escala", d:"Continuar por 3-4 SEMANAS — avaliar resposta", o:"Melhora em ~60-70% dos casos leves-moderados. Sem benefício prolongado >6 sem (avaliar progresso)."},
{etapa:"escala", d:"⚠ AINE SISTÊMICO em curto prazo"},
{etapa:"escala", d:"Ibuprofeno 400-600 mg VO 8/8h × 7-10 dias", o:"+ protetor gástrico se uso prolongado."},
{etapa:"escala", d:"Naproxeno 500 mg 12/12h × 7-10 dias — alternativa"},
{etapa:"adj", d:"AINE TÓPICO — alternativa em paciente com risco de AINE oral (idoso, IRC, ulcerogênico)"},
{etapa:"adj", d:"Diclofenaco gel 1-2% — aplicar 3-4×/d"},
{etapa:"adj", d:"FISIOTERAPIA: mobilização neural, exercícios de deslizamento do tendão flexor"},
{etapa:"adj", d:"⚠ INFILTRAÇÃO LOCAL com CORTICOIDE — 2ª linha"},
{etapa:"adj", d:"Triamcinolona 40 mg + lidocaína 1% — infiltração no túnel do carpo"},
{etapa:"adj", d:"Eficácia 60-80% em curto prazo, 25-50% sustentada em 1 ano", o:"Especialista (ortopedia/reumatologia)."},
{etapa:"adj", d:"INVESTIGAR CAUSAS SECUNDÁRIAS:"},
{etapa:"adj", d:"TSH (hipotireoidismo)"},
{etapa:"adj", d:"Glicemia + HbA1c (DM2)"},
{etapa:"adj", d:"Gestação atual"},
{etapa:"adj", d:"FR + anti-CCP (AR), ácido úrico (gota)"},
{etapa:"alta", d:"⚠ REFERENCIAR ORTOPEDIA / CIRURGIA DE MÃO se:"},
{etapa:"alta", d:"Falha após 6-8 semanas de tratamento conservador"},
{etapa:"alta", d:"Atrofia tenar / fraqueza significativa"},
{etapa:"alta", d:"ENMG com déficit moderado-grave"},
{etapa:"alta", d:"Sintomas constantes / não apenas noturnos"},
{etapa:"alta", d:"⚠ STC NA GESTAÇÃO: geralmente AUTOLIMITADA pós-parto (resolução em até 1 ano). Splint + analgesia simples. Cirurgia raramente necessária"},
{etapa:"alta", d:"ORIENTAR ergonomia: pausas no teclado/mouse, postura, evitar flexão palmar prolongada"},
],
alertas:[
{nivel:"warn", txt:"INVESTIGAR causas secundárias antes de cirurgia: hipotireoidismo, DM2, gestação, AR. Tratamento da causa pode resolver STC."},
{nivel:"warn", txt:"ATROFIA TENAR / fraqueza significativa = ENMG + ortopedia. Tratamento conservador prolongado pode levar à lesão permanente do mediano."},
{nivel:"warn", txt:"INFILTRAÇÃO COM CORTICOIDE: eficaz em curto prazo (60-80%) mas durabilidade limitada (25-50% em 1 ano). Útil em gestante ou pré-operatório."},
{nivel:"info", txt:"SPLINT NOTURNO: posição NEUTRA do punho. Splints comerciais com 'haste' rígida que mantém neutralidade. Resposta em 3-4 semanas."},
{nivel:"info", txt:"STC GESTACIONAL: geralmente resolve até 1 ano pós-parto. Tratamento conservador (splint + analgesia). Cirurgia raramente."},
],
fluxo:null, diretriz:"AAOS. SBOT. Cochrane Review STC."
},
);
