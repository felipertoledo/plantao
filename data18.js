/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — PULO DO GATO 2
   Carrapato, PL difícil, anzol, entorse, água-viva, soluços,
   ouvido em viagem, convulsão febril, cólica do lactente, +
   =========================================================== */

PATOLOGIAS.push(

/* ============== REMOVER CARRAPATO ============== */
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

/* ============== PUNÇÃO LOMBAR DIFÍCIL ============== */
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

/* ============== ANZOL CRAVADO ============== */
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

/* ============== ENTORSE — PEACE & LOVE ============== */
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

/* ============== PICADA DE ÁGUA-VIVA ============== */
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

/* ============== SOLUÇOS INCOERCÍVEIS ============== */
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

/* ============== DOR DE OUVIDO EM VIAGEM ============== */
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

/* ============== CONVULSÃO FEBRIL EM CRIANÇA ============== */
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

/* ============== CÓLICA DO LACTENTE — 5 S's ============== */
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

);
