/* ===========================================================
   VOVÔMINIC DOUTÔ — pat/osteo-mfc.js
   Osteomuscular MFC — osteoartrose, lombalgia crônica,
   fibromialgia, gota crônica, AR, polimialgia reumática
   Sistema: ost
   Fonte: SBR 2024, EULAR 2023, ACR 2023, TMFC 2ª ed, DUNCAN 5ª ed
   =========================================================== */

PATOLOGIAS.push(

/* ============================================================
   1. OSTEOARTROSE — joelho, quadril, mão
   ============================================================ */
{
id:"osteoartrose", contexto:["ubs"], nome:"Osteoartrose (Joelho, Quadril, Mão) — Manejo MFC",
sis:"ost", grav:"baixa",
cid:"M17", ciap:"L91",
sin:["artrose","gonartrose","coxartrose","OA","osteoartrite","desgaste articular"],
def:"Doença articular degenerativa crônica caracterizada por perda de cartilagem articular, remodelamento ósseo subcondral, osteófitos e inflamação sinovial de baixo grau. Joelho > quadril > mão > coluna. Diagnóstico clínico (idade ≥45a + dor mecânica + rigidez matinal <30 min + sem sintomas sistêmicos) — Rx confirmatória, não diagnóstica.",
intro:"Osteoartrose é a principal causa de dor crônica e incapacidade em idoso brasileiro — afeta 30-40% dos >65 anos. MFC tem papel central: diagnóstico clínico (NÃO depende de imagem), educação, manejo não-farmacológico estruturado (que SUPERA muitos fármacos em NNT), prescrição racional, vigilância de declínio funcional. O grande erro é tratar OA como 'velhice' inevitável ou despachar com AINE crônico — ambos prejudicam.",
fisio:"Desequilíbrio entre síntese e degradação da matriz cartilaginosa: condrócitos hipertrofiam → secretam MMPs e citocinas pró-inflamatórias (IL-1β, TNF-α) → degradação de colágeno II e proteoglicanos → fibrilação → erosão. Osso subcondral: esclerose + osteófitos compensatórios. Sinóvia: inflamação leve persistente (sinovite low-grade) → derrames, dor noturna. Fatores de risco: idade, obesidade (joelho!), sexo feminino, lesões prévias, trauma ocupacional, predisposição genética.",
apresentacao:"Adulto/idoso com dor articular MECÂNICA: piora com uso/peso/atividade, melhora com repouso. Rigidez matinal CURTA (<30 min). Crepitação articular, edema/derrame em joelho. Função preservada inicialmente, evolui para limitação. NÃO há sintomas sistêmicos (febre, perda de peso, fadiga sistêmica) — se houver, pensar em diferencial (AR, gota, infecção).",
sintomas:[
"Dor mecânica: piora ao subir/descer escada (joelho), agachar, levantar de cadeira baixa, caminhar longas distâncias",
"Rigidez matinal curta (<30 min) ou após repouso — 'tempo de aquecimento' para movimentar",
"Crepitação articular (estalos, areia rangendo)",
"Limitação de movimento progressiva (flexão joelho, rotação interna quadril)",
"Derrame articular intermitente (joelho — patela cava → flutuação)",
"Dor noturna em estágios avançados — perde sono",
"Deformidades: nódulos de Heberden (IFD), Bouchard (IFP), varo/valgo joelho",
"Genu varo/valgo, atrofia quadríceps",
],
profilaxia:"Eixo é NÃO-farmacológico: (1) Perda de peso — 5 kg reduz dor de joelho em ~50% [NNT 3]; (2) Atividade física — aeróbica baixo impacto (caminhada, bicicleta, hidroginástica) + fortalecimento de quadríceps (NNT 2-3 para melhora funcional); (3) Educação sobre a doença — desmedicalizar 'desgaste é envelhecer', mostrar evidência de melhora com movimento; (4) Calçado adequado (sem salto, palmilha confortável); (5) Auxiliares (bengala — lado oposto à dor, ↓50% carga); (6) Fisioterapia — fortalecimento, alongamento, manual therapy.",
freire:"OA carrega narrativa muito desempoderadora: 'desgaste irreversível', 'pra sempre', 'vai precisar de prótese'. Reformular: 'sua articulação está adaptada — o problema é o quanto você usa errado e quanto pesa sobre ela. Vamos trabalhar isso'. Estudos mostram: paciente educado, ativo e em peso adequado tem menos dor, menos consumo de analgésico, MELHOR função em 1 ano do que paciente sob AINE crônico. Atividade física é remédio (e o de menor NNT). Em obeso: validar a dificuldade, propor metas pequenas (-5%) e mensuráveis, articular nutricionista do NASF. Para 'crepitação' (estala): educar — não é sinal de dano, é normal em articulação com OA, não significa piora.",
sus_tx:"Linha 1 — não-farmacológico: perda de peso (encaminhar nutricionista NASF se obesidade), exercício orientado (Academia da Saúde, fisioterapia se possível), educação. Linha 2 — analgésicos: PARACETAMOL 500-1000 mg até 4×/dia (limitar 3 g/dia em idoso/hepatopata) — UBS. Dipirona 500-1000 mg 3-4× se preferida. Para crises: AINE TÓPICO (diclofenaco gel) — eficaz, mínimo absorção sistêmica — particular (CBAF raramente tem). AINE VO: apenas curto prazo (<7-10 dias), dose baixa, com IBP se >65a/anti-coagulado/úlcera prévia. Linha 3: infiltração intra-articular de corticoide (joelho — UBS com médico capacitado ou ortopedia). Linha 4: encaminhar ortopedia para artroplastia em OA grau IV refratária a tratamento clínico ≥6 meses, com incapacidade funcional.",
padrao_ouro:"Acrescenta: viscossuplementação (hialuronato intra-articular — sem evidência convincente em metanálises recentes, AHRQ 2017); duloxetina 60 mg/dia para OA crônica (especialmente joelho com componente neuropática) — CEAF/particular; opioide fraco (tramadol) curto prazo em crise — uso restrito por dependência e quedas; condroprotetores (glucosamina/condroitina) — evidência fraca, NÃO recomendado rotineiramente (Cochrane). Artroplastia total de joelho/quadril (ATJ/ATQ) em casos refratários — fila SUS variável, ortopedia regional.",
prog:"Curso variável: muitos pacientes mantêm função aceitável por anos com manejo conservador. ~20-30% progridem para cirurgia em 10-20 anos. Obesidade é maior preditor de progressão.",
acomp:"Trimestral inicialmente, semestral em estável. Reavaliar: dor (escala 0-10), função (sentar/levantar, escada, distância de caminhada), peso, adesão ao exercício. Rx só se mudança de quadro ou planejamento cirúrgico — NÃO controle radiográfico de OA estável (P4).",
p4:"NÃO indicar AINE crônico sistêmico em OA — risco GI, renal, CV (especialmente diclofenaco e coxibes), ↑mortalidade em idoso. NÃO prescrever opioide forte (morfina, oxicodona) para OA — risco quedas, dependência, constipação. NÃO indicar artroscopia com 'limpeza' em OA de joelho — sem benefício além de placebo (estudo Moseley 2002, Buchbinder 2013). NÃO solicitar RM rotineira em OA — Rx é suficiente (P4 imagem). NÃO indicar 'suplementos articulares' (colágeno, glucosamina, condroitina, MSM) — sem evidência. NÃO mandar fazer 'repouso absoluto' — agrava por desuso. NÃO indicar artroplastia em paciente com IMC>40 sem perda prévia (alto risco complicações).",
alertas:[
{nivel:"warn", txt:"AINE em IDOSO: TRÍPLICE risco — GI (úlcera/sangramento), renal (IRA pré-renal), CV (HAS, IC, IAM). Se indispensável: dose mais baixa, ≤7 dias, com IBP, evitar em IRC/IC/HAS descompensada. Diclofenaco e coxibes têm pior perfil CV; naproxeno o melhor."},
{nivel:"warn", txt:"Paracetamol acima de 3 g/dia em idoso ou hepatopata = HEPATOTOXICIDADE. Em adulto saudável ≤4 g/dia. Cuidado com formulações combinadas (paracetamol + opioide) — somar dose."},
{nivel:"warn", txt:"Sintomas SISTÊMICOS (febre, perda de peso, fadiga importante) + 'artrose' = ALERTA. Investigar artrite inflamatória (AR, polimialgia, gota cristal, séptica). Rigidez matinal >30 min = AR até prova contrária."},
{nivel:"info", txt:"Rx pode mostrar OA grave em paciente assintomático e Rx 'limpa' em paciente com dor intensa — clínica > imagem em OA. Não tratar imagem, tratar paciente."},
{nivel:"info", txt:"Infiltração corticoide intra-articular: efeito 4-8 semanas, máximo 3-4 infiltrações/ano por articulação (risco condrolise se excessiva). Indicada em derrame/dor refratária com plano de fortalecimento concomitante."},
{nivel:"info", txt:"Bengala no lado OPOSTO à dor reduz ~50% da carga articular. Subutilizada — estigma. Educar paciente: 'a bengala é aliada, não símbolo de fraqueza'."},
],
diretriz:"[SBR — Diretriz Brasileira de Osteoartrose 2023] [ACR/AF 2020 Guideline for the Management of Osteoarthritis of the Hand, Hip, and Knee] [EULAR 2020 recommendations for non-pharmacological management of OA] [OARSI 2019 Guidelines] [TMFC 2ª ed, cap. osteomuscular] [DUNCAN 5ª ed, cap. 78]"
},

/* ============================================================
   2. DOR LOMBAR CRÔNICA — abordagem MFC
   ============================================================ */
{
id:"dor-lombar-cronica", contexto:["ubs"], nome:"Dor Lombar Crônica — Abordagem MFC",
sis:"ost", grav:"baixa",
cid:"M54.5", ciap:"L03",
sin:["lombalgia crônica","dor nas costas","lumbago","dor lombar persistente","dor lombossacra"],
def:"Dor lombar com duração ≥12 semanas. Diferente da dor aguda (<6 sem) e subaguda (6-12 sem). Maioria é inespecífica (sem causa específica identificável) — fenômeno biopsicossocial complexo. Excluir red flags clínicos antes de rotular como inespecífica.",
intro:"Dor lombar crônica é uma das principais queixas em UBS. O tratamento MFC se diferencia do ortopédico/neurológico hospitalar: foca em REABILITAÇÃO ATIVA e desmedicalização. Imagem rotineira (Rx, RM) em lombalgia crônica inespecífica SEM red flags = MEDICALIZAÇÃO desnecessária — achados como protrusão discal estão presentes em 30-60% de pessoas ASSINTOMÁTICAS. P4 é central aqui.",
fisio:"Multifatorial: degeneração discal, artrose facetária, alterações musculares, fatores biomecânicos (postura, ergonomia, sobrepeso), fatores psicossociais (estresse, depressão, baixo apoio, insatisfação no trabalho), sensibilização central em casos crônicos. NÃO é só 'desgaste' — é dor com mecanismos centrais e periféricos misturados.",
apresentacao:"Adulto, frequentemente entre 30-65 anos, com dor lombar persistente ou recorrente. Caracterizar: localização (lombar baixa, sacral, irradiação), tempo de evolução, fatores que pioram/aliviam, episódios prévios, impacto funcional (trabalho, sono, sexo, lazer), uso de medicação prévia, expectativas do paciente.",
sintomas:[
"Dor lombar persistente/recorrente >12 semanas, geralmente mecânica (piora com movimento/carga, melhora com repouso/postura)",
"Irradiação para nádega ou face posterior da coxa — pode ser inespecífica (referida miofascial) ou radicular (ciática)",
"Ciática: dor irradiada abaixo do joelho seguindo dermátomo (L4, L5, S1) — sugere compressão radicular",
"Rigidez matinal (geralmente curta na lombalgia mecânica; longa em espondiloartrite — alerta)",
"Limitação para AVDs: pegar peso, sentar/levantar, vestir-se, dirigir, dormir",
"Impacto psicossocial: humor depressivo, ansiedade, catastrofização da dor, kinesiofobia (medo do movimento)",
],
profilaxia:"Eixo é REABILITAÇÃO ATIVA + EDUCAÇÃO: (1) Exercício terapêutico — qualquer modalidade que o paciente adere (caminhada, pilates, yoga, musculação leve, hidroginástica) — fortalece core, melhora dor e função [Cochrane 2016, NNT 3-5]; (2) Educação em neurociência da dor — dor crônica ≠ lesão; dor crônica é sistema sensitivo amplificado; (3) Higiene postural e ergonomia (trabalho, sono); (4) Manejo de fatores psicossociais (estresse, sono, humor); (5) Não-repouso prolongado — agrava por desuso.",
freire:"Lombalgia crônica é o exemplo paradigmático de como medicalização piora a vida do paciente. Paciente vem com 'minha coluna está acabada' baseado em laudo de RM que mostra 'protrusão L4-L5'. Educar: 'esse achado existe em 50% das pessoas SEM dor — sua coluna não está acabada, ela está sensibilizada'. Combater catastrofização: 'movimento não vai piorar, vai melhorar'. Combater kinesiofobia: comum após susto inicial, gera espiral de inatividade → mais dor → mais medo. Validar emocionalmente: dor crônica deprime, e depressão amplifica dor — círculo vicioso. Identificar trabalho/contexto que perpetua a dor: insatisfação laboral é fator de cronificação documentado. Trabalho integrado com psicologia/NASF.",
sus_tx:"Linha 1 (não-farmacológico): exercício terapêutico (Academia da Saúde, fisioterapia), educação em neurociência da dor, manejo postural. Linha 2 (farmacológico — adjuvante, não principal): paracetamol/dipirona conforme necessidade — UBS. AINE curto prazo (<7-10 dias) em crise — UBS. Relaxante muscular CICLOBENZAPRINA 5-10 mg à noite curto prazo (FARMASUS) se contratura associada — cuidado em idoso. Linha 3 (dor neuropática/radiculopatia documentada): amitriptilina 12,5-50 mg à noite (FARMASUS), nortriptilina, duloxetina (CEAF). Gabapentina/pregabalina — CEAF com PCDT dor neuropática. Linha 4 (refratário): encaminhar Ortopedia/Neurocirurgia se déficit neurológico, red flags, cauda equina, falha de tratamento conservador ≥6-12 meses + indicação cirúrgica clara.",
padrao_ouro:"Acrescenta: programas multidisciplinares de dor (raros no SUS — CER ou centros de dor); infiltração facetária/epidural (procedimento ambulatorial em algumas SES); bloqueio nervoso de ramo medial; estimulação medular em casos selecionados. Cirurgia (microdiscectomia, artrodese) tem indicação RESTRITA — apenas com correlação clínica-radiológica clara + falha conservadora; em lombalgia inespecífica, cirurgia NÃO é eficaz.",
prog:"Maioria melhora em 6-12 meses com manejo conservador adequado. ~20% cronifica e gera incapacidade significativa. Preditores de cronificação: catastrofização, depressão, sedentarismo, baixa satisfação no trabalho, expectativas negativas.",
acomp:"Mensal nos primeiros 3 meses, depois trimestral conforme estabilidade. Cada consulta: reavaliar dor (0-10), função, adesão ao exercício, humor, sono, identificar barreiras. Imagem (RM) SÓ se: red flags, déficit neurológico novo/progressivo, planejamento cirúrgico. Encaminhar especialista se: red flag, déficit motor progressivo, síndrome de cauda equina (emergência!), refratariedade ≥6 meses.",
p4:"NÃO SOLICITAR RX/RM em lombalgia crônica inespecífica SEM red flags — sem benefício, com dano (medicalização, achados incidentais geram ansiedade e mais investigação) [Choosing Wisely, USPSTF]. NÃO indicar opioide forte (morfina, oxicodona) em lombalgia crônica — alto risco dependência, quedas, hiperalgesia, sem benefício a longo prazo. NÃO indicar relaxante muscular crônico em idoso (Beers — ciclobenzaprina, carisoprodol). NÃO indicar 'repouso absoluto'. NÃO usar corticoide sistêmico em lombalgia inespecífica. NÃO indicar artrodese de coluna em lombalgia crônica sem indicação clínico-radiológica clara — uma das cirurgias com pior NNT em coluna.",
alertas:[
{nivel:"crit", txt:"⚠ RED FLAGS — encaminhar urgente: (1) Síndrome de cauda equina: anestesia em sela, retenção urinária aguda, incontinência fecal, déficit motor progressivo MMII (EMERGÊNCIA!); (2) Trauma + dor súbita (fratura); (3) Idade <20 ou >50 com dor noturna ou perda peso (neoplasia, infecção); (4) Imunossupressão + dor + febre (osteomielite); (5) História de câncer + dor lombar nova; (6) Uso EV de drogas + febre."},
{nivel:"warn", txt:"Déficit motor radicular (queda de pé, dorsiflexão fraca, perda de força quadríceps) novo ou progressivo: encaminhar Ortopedia/Neurocirurgia urgente (≤2 semanas) — janela cirúrgica."},
{nivel:"warn", txt:"Espondiloartrite axial em jovem (<40a): dor lombar INFLAMATÓRIA — pior em repouso, melhor com movimento, rigidez matinal >60 min, despertar noturno, resposta a AINE. Pesquisar HLA-B27, PCR, Rx de sacroilíacas. Não confundir com lombalgia mecânica."},
{nivel:"info", txt:"Achados de RM 'protrusão discal', 'degeneração discal', 'osteofitose' são COMUNS em assintomáticos — não significam causa da dor. Correlacionar clínico-radiologicamente."},
{nivel:"info", txt:"Yoga, pilates, taichi, hidroginástica — todas têm evidência de benefício em lombalgia crônica [Cochrane]. Recomendar a modalidade que o paciente adere — adesão > 'melhor exercício teórico'."},
{nivel:"info", txt:"Catastrofização (\"vou ficar paralisado\", \"essa dor nunca vai parar\") é o melhor preditor de cronificação. Identificar e abordar."},
],
diretriz:"[SBR/SBOT — Diretriz Brasileira de Lombalgia 2024] [NICE NG59 Low back pain and sciatica 2020] [ACP 2017 Guideline for Low Back Pain] [Choosing Wisely Brasil — Imagem em lombalgia] [TMFC 2ª ed, cap. 158] [DUNCAN 5ª ed, cap. 80]"
},

/* ============================================================
   3. FIBROMIALGIA — abordagem MFC
   ============================================================ */
{
id:"fibromialgia", contexto:["ubs"], nome:"Fibromialgia — Abordagem MFC",
sis:"ost", grav:"baixa",
cid:"M79.7", ciap:"L18",
sin:["fibro","FM","síndrome dolorosa miofascial generalizada","SDP","sensibilização central"],
def:"Síndrome de dor crônica generalizada (≥3 meses) associada a fadiga, distúrbio do sono, distúrbios cognitivos (fibro-fog) e múltiplos sintomas somáticos, na ausência de doença inflamatória subjacente que explique. Critérios ACR 2016: WPI (Widespread Pain Index) + SSS (Symptom Severity Scale), sem necessidade de tender points como no critério antigo.",
intro:"Fibromialgia é REAL, comum (~2-4% da população, mais mulheres), subdiagnosticada e subtratada. Modelo atual: sensibilização central do sistema nociceptivo (dor sem lesão tecidual, com amplificação central). MFC é o lugar ideal para diagnosticar e tratar — relação longitudinal, abordagem biopsicossocial, evitar peregrinação especializada. O grande erro: tratar como 'invenção', mandar para reumatologia indefinidamente, ou prescrever AINE crônico (não funciona).",
fisio:"Sensibilização central: redução do limiar nociceptivo + aumento da resposta dolorosa central. Disfunção do controle inibitório descendente. Frequente comorbidade com: distúrbios do humor (depressão, ansiedade), distúrbios do sono (sono não-restaurador), SII, cefaleia tensional, vulvodínia, síndrome da bexiga dolorosa. História frequente de traumas, ansiedade familiar, abuso.",
apresentacao:"Mulher (predomínio 4:1) entre 30-60 anos, com dor crônica generalizada migratória (mudando de lugar), fadiga constante, sono não-restaurador (acorda cansada), 'fibro-fog' (dificuldade de concentração, esquecimentos), múltiplos sintomas somáticos (cefaleia, intestino irritável, parestesias, sensação de inchaço sem inchaço objetivo). Exame físico SEM sinovite, sem alteração neurológica objetiva. Labs normais (PCR, VHS, hemograma, TSH).",
sintomas:[
"Dor crônica generalizada (≥3 meses) afetando ≥4 das 5 regiões corporais (axial, MMSS direito/esquerdo, MMII direito/esquerdo)",
"Fadiga importante, despertar não-restaurador, sono fragmentado",
"Distúrbios cognitivos: dificuldade de concentração, memória, 'fibro-fog'",
"Múltiplos sintomas somáticos: cefaleia, SII, parestesias, sensação de inchaço, intolerância ao frio, boca seca, urgência miccional",
"Humor: depressão e ansiedade muito frequentes (não 'causam' fibromialgia, mas amplificam)",
"Exame físico: sem sinovite, sem deformidades, sem alteração neurológica focal — apenas hipersensibilidade à palpação em múltiplos pontos",
],
profilaxia:"Eixo é manejo multimodal: (1) Educação em neurociência da dor — dor crônica ≠ dano contínuo; sensibilização central explica a experiência; (2) Exercício aeróbico de baixo impacto regular (caminhada, hidroginástica, yoga, taichi) — uma das melhores evidências de benefício [Cochrane NNT 5]; (3) Higiene do sono rigorosa; (4) Manejo do estresse (mindfulness, terapia cognitivo-comportamental); (5) Tratar comorbidades psiquiátricas; (6) Identificar e tratar gatilhos (eventos vitais, traumas).",
freire:"Paciente com fibromialgia frequentemente chega exausta de peregrinar entre especialistas, tendo ouvido 'não tem nada', 'é da cabeça', 'invenção sua'. Primeira intervenção: VALIDAR. 'Sua dor existe e é real. Não é fraqueza nem invenção. É uma doença chamada fibromialgia, com mecanismos conhecidos.' Educar em neurociência da dor: 'seu sistema de dor está mais sensível — não porque seu corpo está danificado, mas porque o sinal está amplificado.' Trabalhar com metáforas: termostato de dor desregulado; alarme de carro hipersensível. Empoderar com autocuidado: exercício é remédio. Trazer família para entender. Combater catastrofização e isolamento.",
sus_tx:"Linha 1: exercício aeróbico regular (Academia da Saúde, hidroginástica, caminhada) + educação + higiene do sono. Linha 2 farmacológica: AMITRIPTILINA 12,5-50 mg à noite (FARMASUS) — antidepressivo tricíclico, melhora dor + sono [NNT 4-6]. Alternativa: NORTRIPTILINA. Duloxetina 30-60 mg/dia se depressão associada (CEAF/particular). Pregabalina 75-150 mg 2× (CEAF com PCDT dor neuropática refratária). Tratar depressão/ansiedade se presentes. Manejo do sono: higiene do sono > medicamento; se necessário, trazodona 25-100 mg HS (FARMASUS) — melhor perfil que BZD em uso crônico. Articulação com NASF/psicologia.",
padrao_ouro:"Acrescenta: ciclobenzaprina à noite (uso curto, cuidado em idoso); ISRS (fluoxetina, sertralina) se predomínio depressivo/ansioso; programas multidisciplinares de dor (raros no SUS); terapia cognitivo-comportamental focada em dor (TCC dor) — uma das melhores evidências, mas pouco disponível. Acupuntura — evidência moderada, pode oferecer. CANABIDIOL — evidência ainda fraca, alto custo; não-rotineiro.",
prog:"Crônica e flutuante. Não 'cura', mas estabiliza com manejo adequado — paciente pode ter períodos de dor leve e função preservada. Predisposição familiar/genética. Bem-controlada permite vida laboral e social significativa; mal-controlada gera incapacidade laboral importante.",
acomp:"Mensal nos primeiros 3 meses (titulação medicamentosa, estabelecer aliança terapêutica), trimestral em estável. Avaliar: dor (0-10), sono, fadiga, humor, função (PHQ-9, GAD-7 se suspeita comorbidade psiquiátrica), adesão ao exercício. Não escalar fármacos sem otimizar não-farmacológico.",
p4:"NÃO indicar AINE crônico (não funciona em fibromialgia — não tem componente inflamatório). NÃO indicar opioides — risco de dependência sem benefício documentado, contraindicado [recomendação CDC, EULAR]. NÃO indicar 'pesquisas' caras (RM corpo todo, marcadores de auto-imunidade extensos) — sem indicação salvo dúvida diagnóstica genuína. NÃO indicar corticoide. NÃO indicar 'tratamentos miraculosos' (laser, ozônio, hiperbárica) — sem evidência. NÃO institucionalizar a paciente como 'crônica incurável' — desempodera; oferecer plano de manejo.",
alertas:[
{nivel:"warn", txt:"Diagnóstico DIFERENCIAL crucial: artrite reumatoide (rigidez matinal >60 min, sinovite), polimialgia reumática (>50a, cintura escapular/pélvica, PCR/VHS↑), espondiloartrite (sacroileíte), hipotireoidismo, deficiência B12/D, anemia, doença reumatológica auto-imune. Solicitar painel básico: hemograma, PCR, VHS, TSH, vitamina D, B12, FAN, FR. Tudo NORMAL apoia fibromialgia."},
{nivel:"warn", txt:"Amitriptilina em idoso: critério Beers — anticolinérgico, ↑risco quedas/confusão. Se necessário, dose baixa (10-25 mg) com vigilância. Preferir nortriptilina (menos anticolinérgica) ou duloxetina."},
{nivel:"warn", txt:"Comorbidade psiquiátrica é REGRA, não exceção em fibromialgia — depressão em ~70%, ansiedade em ~50%. Rastrear ativamente (PHQ-9, GAD-7) e tratar. Não tratar comorbidade = fracasso terapêutico."},
{nivel:"info", txt:"Tender points (critérios ACR 1990) não são mais necessários para diagnóstico — critérios 2016 (WPI + SSS) são clínicos. Paciente NÃO precisa de reumato para diagnóstico."},
{nivel:"info", txt:"Exercício é UM DOS melhores tratamentos — começar com 5-10 min/dia, aumentar gradualmente, qualquer modalidade tolerada. 'Start low, go slow' — sobrecarga inicial pode piorar dor por 1-2 semanas (efeito esperado, não falha)."},
{nivel:"info", txt:"Dor lombar + fibromialgia = comum. Manejo é semelhante, com componente generalizado adicional. NÃO investigar lombar isoladamente em paciente fibromialgica conhecida sem red flags."},
],
diretriz:"[SBR — Diretriz Brasileira de Fibromialgia 2022] [EULAR 2016 revised recommendations for the management of fibromyalgia] [ACR 2016 Diagnostic Criteria for Fibromyalgia] [TMFC 2ª ed, cap. 159] [DUNCAN 5ª ed, cap. 81]"
},

/* ============================================================
   4. GOTA CRÔNICA — Hipocrisia (uricossúrica) intercrítica
   ============================================================ */
{
id:"gota-cronica", contexto:["ubs"], nome:"Gota Crônica (Intercrítica) — Manejo MFC com Alopurinol",
sis:"ost", grav:"baixa",
cid:"M10", ciap:"T92",
sin:["gota crônica","hiperuricemia sintomática","artrite gotosa","tofos","gota tofácea"],
def:"Doença crônica causada por deposição de cristais de monourato de sódio em articulações e tecidos moles, resultando em crises de artrite aguda, gota intercrítica/crônica e tofos. Diagnóstico definitivo: cristais de urato no líquido sinovial (microscopia luz polarizada). Diagnóstico clínico aceitável em quadro típico (podagra, hiperuricemia, resposta a colchicina/AINE).",
intro:"Gota crônica é doença SUBTRATADA — paciente trata só as crises e fica em hiperuricemia entre elas, mantendo deposição de cristais e progressão. MFC: identificar candidato a urate-lowering therapy (ULT) com alopurinol, atingir alvo de urato <6 mg/dL (<5 se tofos), educar para uso INDEFINIDO da medicação, manejar profilaxia anti-crise nos primeiros 6 meses. Importante saber: alopurinol AGUDO PIORA crise — só iniciar entre crises com 'cobertura' de colchicina/AINE.",
fisio:"Hiperuricemia (>7 mg/dL homem, >6 mulher) → supersaturação → deposição de cristais MSU em articulações periféricas (1ª MTF — 'podagra' clássica), bursa olecraniana, tendões, pavilhões auriculares. Fatores de risco: idade, sexo masculino, obesidade, álcool (cerveja!), dieta rica em purinas (mariscos, carnes), diuréticos (tiazídicos, alça), IRC, síndrome metabólica, baixo aporte hídrico, frutose.",
apresentacao:"Adulto/idoso com história de ≥2 crises de gota documentadas, ou tofos, ou erosão radiográfica gotosa, ou primeira crise + alto risco (IRC G≥3, jovem, hiperuricemia alta, urolitíase). Em consulta intercrítica: assintomático ou com dor crônica em articulações previamente afetadas. Pode ter tofos visíveis (1ª MTF, olecranio, pavilhão auricular — nódulos firmes brancos).",
sintomas:[
"Crise aguda (já passou): podagra (1ª MTF), tornozelo, joelho, antepé — dor intensíssima, eritema, calor, edema; ataque noturno típico; resolução em 7-14 dias mesmo sem tratamento",
"Gota intercrítica: assintomática entre crises, mas com deposição contínua de cristais (silenciosa)",
"Gota crônica tofácea: tofos visíveis/palpáveis, dor crônica articular, deformidades, função reduzida",
"Crises mais frequentes com o tempo se não-tratado (urato persistente alto)",
"Cálculo renal de ácido úrico (urolitíase recidivante)",
],
profilaxia:"Mudança de estilo de vida (eixo + ULT, NÃO em substituição): (1) Hidratação ≥2 L/dia; (2) Reduzir álcool (cerveja é pior — purina + frutose), idealmente abstinência; (3) Reduzir frutose adicionada (refrigerantes); (4) Reduzir purinas extremas (mariscos, fígado, vísceras) — moderação em carnes vermelhas; (5) Perda de peso se obeso (lenta — perda rápida pode precipitar crise); (6) Substituir tiazídico/alça se possível (HCQ por losartana, etc.).",
freire:"Educar sobre a natureza CRÔNICA da gota. Paciente muitas vezes acha que tratar a crise resolve, e abandona alopurinol entre crises. Metáfora: 'a crise é o vulcão visível — mas há lava se acumulando o tempo todo. O alopurinol drena a lava'. Combater estigma: gota não é só 'doença de bonvivant' — IRC, obesidade, diuréticos, genética contribuem. Esclarecer que o alopurinol é PARA SEMPRE (em geral) — não 'até passar'. Vincular adesão ao prevenir tofos/deformidades/IRC.",
sus_tx:"CRISE aguda: COLCHICINA 0,5 mg de 8/8h (3 cp dia 1, depois 1 cp 12/12h) — UBS; OU AINE: naproxeno 500 mg 12/12h por 5-7 dias (UBS) — evitar em IRC/úlcera/IC. Prednisona 30-40 mg/dia 5-7 dias se contraindicação a AINE/colchicina. Repouso. Compressas frias. NUNCA iniciar/suspender alopurinol DURANTE crise. Mãn: ULT — ALOPURINOL 100 mg/dia (UBS), aumentar 100 mg cada 2-4 sem até atingir urato <6 mg/dL (<5 se tofos), máx 800 mg/dia. PROFILAXIA da crise: colchicina 0,5 mg/dia (ou AINE baixa dose) por 6 MESES quando iniciar/escalar alopurinol — previne crises de mobilização de urato. Educar para uso indefinido.",
padrao_ouro:"Acrescenta: febuxostate 40-80 mg (CEAF/particular) — alternativa ao alopurinol em intolerância ou refratariedade; pegloticase em casos refratários graves (especialidade). Probenecida (uricossúrico) — opção se TFG adequada e ausência de urolitíase (raramente disponível no SUS). Em alergia ao alopurinol (rash, DRESS, SSJ — risco HLA-B*5801 em asiáticos): especialidade.",
prog:"Doença crônica controlável — com urato sustentado <6 mg/dL e adesão à ULT, crises desaparecem em 1-2 anos, tofos regridem em anos. Sem tratamento: crises mais frequentes, tofos progressivos, deformidades, IRC.",
acomp:"Após início de alopurinol: ácido úrico cada 4 semanas até atingir alvo, depois cada 6 meses. Função renal e hemograma cada 6-12 meses. Em consulta: contagem de crises, sintomas, tofos, adesão, efeitos adversos.",
p4:"NÃO TRATAR HIPERURICEMIA ASSINTOMÁTICA isolada — sem benefício comprovado, com risco de efeitos adversos. Tratar APENAS se: gota documentada, urolitíase úrica, IRC progressiva com urato muito alto (caso a caso). NÃO indicar exames extensivos rotineiramente (dosagem fracionada de purinas) — sem alterar conduta. NÃO indicar AINE crônico para 'profilaxia' — usar colchicina. NÃO escalonar alopurinol além de necessário pelo alvo; não é 'quanto mais melhor'.",
alertas:[
{nivel:"crit", txt:"⚠ Alopurinol em ASIÁTICO ou descendente: testar HLA-B*5801 antes (alto risco SSJ/DRESS fatal). Em outros grupos, vigilância para rash nos primeiros 2-3 meses — qualquer rash + alopurinol = SUSPENDER imediatamente, encaminhar."},
{nivel:"crit", txt:"⚠ Iniciar alopurinol DURANTE crise = PIORA da crise (mobilização de cristais). Tratar a crise primeiro com colchicina/AINE/prednisona, iniciar alopurinol em 2-4 semanas após resolução da crise, com 'cobertura' (colchicina 0,5 mg/dia por 6 meses)."},
{nivel:"warn", txt:"Alopurinol em IRC: ajuste de dose por TFG. Iniciar 50-100 mg/dia, escalar com cuidado, dose máx menor (300-400 mg em TFG <30)."},
{nivel:"warn", txt:"Colchicina + macrolídeo (claritromicina, eritromicina), estatina, ciclosporina = ↑risco neuromiotoxicidade. Vigilância."},
{nivel:"warn", txt:"Diurético TIAZÍDICO/ALÇA pode precipitar gota. Em paciente com gota recorrente + HAS: substituir HCQ por losartana (BRA com efeito uricosúrico moderado) ou outro anti-hipertensivo."},
{nivel:"info", txt:"Tofos podem mimetizar nódulo reumatoide ou neoplásico. Aspiração com cristais de MSU à microscopia luz polarizada = padrão-ouro diagnóstico."},
{nivel:"info", txt:"Alvo urato <6 mg/dL (<5 se tofos visíveis) é eficaz para dissolução cristal. NNT excelente para prevenir crises a longo prazo."},
],
diretriz:"[SBR — Diretriz Brasileira de Gota 2017] [ACR 2020 Guideline for the Management of Gout] [EULAR 2016 evidence-based recommendations for the management of gout] [TMFC 2ª ed, cap. 160] [DUNCAN 5ª ed, cap. 84]"
},

/* ============================================================
   5. ARTRITE REUMATOIDE — manejo MFC com MTX
   ============================================================ */
{
id:"ar-mfc", contexto:["ubs"], nome:"Artrite Reumatoide — Manejo MFC com Metotrexato",
sis:"ost", grav:"alta",
cid:"M06.9", ciap:"L88",
sin:["AR","artrite reumatoide","poliartrite reumatoide","RA"],
def:"Doença auto-imune sistêmica caracterizada por sinovite crônica simétrica de pequenas articulações de mãos e pés, com tendência erosiva. Diagnóstico ACR/EULAR 2010 baseado em pontuação: articulações acometidas + sorologia (FR, anti-CCP) + reagentes de fase aguda (VHS/PCR) + duração ≥6 sem.",
intro:"AR é doença crônica grave que sem tratamento adequado leva a deformidades e incapacidade. Estratégia atual: 'treat-to-target' — atingir REMISSÃO ou baixa atividade rapidamente, com DMARDs sintéticos convencionais (csDMARDs — METOTREXATO é PILAR) iniciados nos primeiros 3-6 meses. MFC tem papel cofundamental: identificação precoce (rigidez matinal >60 min + sinovite simétrica de mãos), encaminhamento à reumatologia, ACOMPANHAMENTO LONGITUDINAL do paciente em MTX (monitorização hepática, hemato, renal, infecções).",
fisio:"Auto-imunidade contra antígenos articulares: FR (anti-IgG), anti-CCP (anti-citrulinado) → sinovite crônica com pannus proliferativo → invasão de cartilagem/osso → erosões. Manifestações extra-articulares: nódulos reumatoides, vasculite, doença pulmonar intersticial, ceratoconjuntivite seca (Sjögren), pericardite. Risco CV ↑ (inflamação sistêmica).",
apresentacao:"Mulher (3:1 vs homem), 30-60 anos, com poliartrite simétrica de mãos: MCFs, IFPs, punhos. Rigidez matinal LONGA (>60 min, frequentemente horas). Dor + edema sinovial palpável. Pode ter MTF (pés). Evolução: erosões, desvio ulnar dos dedos, dedos em pescoço de cisne/botoeira. Sistemicos: fadiga, perda de peso, febrícula. Pode ser primeira manifestação em idoso (RA-LARO — late-onset RA).",
sintomas:[
"Poliartrite SIMÉTRICA: MCF (metacarpofalângica), IFP (interfalângica proximal), punhos, MTF (pés). Geralmente NÃO afeta IFD (diferencial com osteoartrose)",
"Rigidez matinal LONGA (≥60 min, frequentemente 2-4h) — sinal cardinal de artrite INFLAMATÓRIA",
"Edema sinovial palpável (sinovite) — diferente de derrame mecânico",
"Sintomas sistêmicos: fadiga importante, perda de peso, febre baixa, mal-estar",
"Deformidades tardias: desvio ulnar dos dedos, polegar em Z, dedos em botoeira/pescoço-de-cisne",
"Manifestações extra-articulares: nódulos reumatoides (cotovelos), Sjögren secundário, pleurisia, pericardite, vasculite",
],
profilaxia:"Cessação tabágica (NNT 4 para resposta a tratamento), perda de peso, atividade física adequada (mesmo com AR — preservação muscular e cardio), vacinação ANUAL (influenza, pneumocócica, COVID — IMPORTANTE em paciente em imunossupressor), saúde óssea (cálcio + D, DMO se >65a ou pós-meno).",
freire:"Diagnóstico de AR é assustador — paciente vê 'doença auto-imune' e imagina cadeira de rodas. Educar: 'AR de hoje, tratada cedo e bem, é doença controlável. A diferença em deformidade entre tratar nos primeiros 3 meses vs depois de 1 ano é IMENSA — por isso pressa.' Empoderar para vir à consulta ao primeiro sinal de descompensação, NÃO 'aguardar passar'. Combater estigma do MTX — paciente ouve 'isso é remédio de câncer' e desiste. Esclarecer: doses baixas semanais, eficácia comprovada, segurança com monitorização. Apoio para sintomas: dor crônica, fadiga, impacto na imagem corporal (deformidades), impacto no trabalho.",
sus_tx:"Encaminhar REUMATOLOGIA URGENTE em suspeita (≤4-6 sem) — diagnóstico e início precoce de DMARD é prognóstico. METOTREXATO (CEAF com PCDT AR) 7,5-25 mg VO 1×/sem + ÁCIDO FÓLICO 5 mg outro dia (UBS) — para reduzir efeitos GI e hepatotoxicidade. AINE/prednisona em dose baixa (5-10 mg) podem ser usados como 'ponte' nos primeiros 2-3 meses até MTX fazer efeito (4-12 sem). Em refratariedade: leflunomida, sulfassalazina, HIDROXICLOROQUINA (CEAF com PCDT). Refratariedade a csDMARDs ≥3 meses em doses adequadas: bDMARDs (anti-TNF, abatacepte, rituximabe, tocilizumabe) — CEAF com PCDT específico. MFC: AUC com reumato sobre monitorização e novas prescrições; ajuste de comorbidades; manejo de intercorrências.",
padrao_ouro:"Acrescenta: tofacitinibe, baricitinibe (JAK inhibitors) — CEAF em casos selecionados; combinação csDMARDs (MTX + sulfassalazina + HCQ — esquema 'tripla'); cirurgia ortopédica em deformidades estabelecidas (artrodese, artroplastia).",
prog:"Bem-tratada: remissão ou baixa atividade em 50-70% em 1 ano. Mal-tratada: erosões progressivas, deformidades, IFL avançada, ↑mortalidade CV. Janela terapêutica é nos primeiros 6 meses de doença — após isso, ganhos terapêuticos menores.",
acomp:"MFC compartilha cuidado com reumato. Cada 3 meses: hemograma, função renal, transaminases (toxicidade MTX) — alterar se ALT/AST >2-3× LSN ou citopenias. Anual: lipidograma, glicemia (corticoide), DMO se >65a/corticoide >3 m. Vigilância de infecções (zoster reativado, TB latente, hepatites). Inspeção articular trimestral: contagem de articulações dolorosas/inchadas (DAS28 quando reumato vê). Atualizar vacinação.",
p4:"NÃO indicar AR-painel auto-imune completo (FAN, anti-DNA, ENA, AAS, antifosfolípide) em todo paciente com poliartralgia — direcionar conforme suspeita. NÃO usar corticoide em alta dose crônica para AR (eficaz curto prazo, péssimo longo prazo — Cushing, osteoporose, DM, infecções). NÃO suspender MTX por elevação transitória de AST (<2-3× LSN) — repetir e reavaliar. NÃO indicar 'cura natural' (sem evidência) — risco de progressão erosiva.",
alertas:[
{nivel:"crit", txt:"⚠ METOTREXATO + ÁLCOOL = hepatotoxicidade somada. Educar paciente: NENHUM consumo ou no máximo ocasional (1 dose/sem em dia distante do MTX). Em hepatopata estabelecido, MTX contraindicado."},
{nivel:"crit", txt:"⚠ Paciente em DMARD/biológico + FEBRE + sintomas infecciosos = suspender DMARD, investigar (hemograma, PCR, hemocultura, Rx tórax). Sepse oculta é causa frequente de óbito em AR — IMUNOSSUPRESSÃO mascara sinais."},
{nivel:"crit", txt:"⛔ Metotrexato em GESTAÇÃO = TERATOGÊNICO. Suspender 3 meses antes de tentar engravidar (para homem E mulher). Educar paciente em idade fértil — contraceção segura obrigatória. Se gestação inadvertida em MTX: encaminhar urgente reumatologia + obstetrícia."},
{nivel:"warn", txt:"Vacina viva (febre amarela, tríplice viral, varicela, BCG) = CONTRAINDICADA em paciente em DMARD/biológico/corticoide alta dose. Vacinas inativadas (influenza, pneumocócica, COVID, hep B) = recomendadas, idealmente 2-4 sem antes de iniciar imunossupressor."},
{nivel:"warn", txt:"Antes de iniciar bDMARD (anti-TNF especialmente): RASTREIO de TB latente (PPD/IGRA + Rx tórax), Hepatites B/C, HIV. Se ILTB+: tratamento com isoniazida antes."},
{nivel:"warn", txt:"AR sem-tratamento adequado: risco CV ↑ — mortalidade CV é PRINCIPAL causa de morte em AR. Controlar agressivamente FRC (PA, LDL, glicemia, tabagismo). Inflamação sistêmica = aterosclerose acelerada."},
{nivel:"info", txt:"AR em IDOSO (LARO): forma clínica diferente — pode mimetizar polimialgia reumática. Considerar diferencial e tratamento mais cauteloso (mais comorbidade, mais polifarmácia, mais quedas)."},
{nivel:"info", txt:"FR positivo NÃO é específico de AR — 5-15% da população saudável é FR+, ↑em idoso, hep C, Sjögren, doenças crônicas. Anti-CCP é mais específico (~95%)."},
],
diretriz:"[SBR — Diretriz Brasileira de Artrite Reumatoide 2024] [EULAR 2022 recommendations for the management of RA with synthetic and biological DMARDs] [ACR 2021 Guideline for the Treatment of RA] [PCDT-MS Artrite Reumatoide] [TMFC 2ª ed, cap. 161] [DUNCAN 5ª ed, cap. 82]"
},

/* ============================================================
   6. POLIMIALGIA REUMÁTICA — em idoso (PMR)
   ============================================================ */
{
id:"polimialgia-reumatica", contexto:["ubs"], nome:"Polimialgia Reumática (PMR) — Idoso",
sis:"ost", grav:"media",
cid:"M35.3", ciap:"L20",
sin:["PMR","polimialgia","síndrome polimiálgica","cintura escapular dor idoso"],
def:"Síndrome inflamatória de etiologia desconhecida, exclusiva de ≥50 anos (frequente >65a), caracterizada por dor e rigidez intensas em cinturas escapular e pélvica, com reagentes de fase aguda elevados (VHS, PCR) e resposta DRAMÁTICA a corticoide em baixa dose. Pode estar associada a arterite de células gigantes (ACG — 10-20% das PMR).",
intro:"PMR é doença IMPORTANTE para o médico de família reconhecer — comum em idoso (~1% acima de 50 anos), facilmente diagnosticável clinicamente, com resposta espetacular a tratamento. Idoso com 'dor nos ombros e quadris' em PMR sofre indizivelmente; uma vez tratado, recupera função em 24-72h. Atenção CRÍTICA à associação com ACG (arterite de células gigantes — risco de cegueira) — qualquer cefaleia/claudicação mandibular/perda visual em paciente com PMR = encaminhar urgência.",
fisio:"Inflamação sistêmica com predileção por bursas e articulações periarticulares (subdeltoide, trocantérica, escapulotorácica). Pode acompanhar arterite de células gigantes (ACG) — vasculite de grandes vasos, com risco de neurite óptica isquêmica → cegueira. Etiologia incerta, predisposição HLA-DR4.",
apresentacao:"Idoso (>50a, geralmente >65a), com início SUBAGUDO (semanas) de dor + rigidez bilateral em ombros, cintura escapular, pescoço, cintura pélvica, coxas. RIGIDEZ MATINAL LONGA (>45 min). Dificuldade enorme para sair da cama, pentear cabelo, vestir-se. Geralmente SEM fraqueza objetiva (testes de força normal apesar de dor). Sintomas sistêmicos: fadiga, perda de peso, febrícula, depressão.",
sintomas:[
"Dor + rigidez bilateral em cinturas escapular E pélvica (ambas) — geralmente >2 semanas",
"Rigidez matinal LONGA (≥45 min, frequentemente >1h)",
"Idade ≥50 anos (geralmente >65)",
"VHS >40 mm/h e/ou PCR elevada",
"Resposta DRAMÁTICA a prednisona 15-20 mg/dia (melhora >75% em 1 semana — critério diagnóstico ex juvantibus)",
"Pode ter: depressão, perda de peso, fadiga, febre baixa",
"Exame físico: dor à movimentação passiva de ombro/quadril; força preservada; sem sinovite verdadeira",
],
profilaxia:"Não há prevenção específica. Vigilância pós-diagnóstico para ACG (sintomas cefaleia, claudicação mandibular, perda visual, sintomas constitucionais — pesquisar artéria temporal palpável e dolorosa).",
freire:"Idoso com PMR não-diagnosticada frequentemente passa meses peregrinando ('é da idade', 'fibromialgia', 'osteoporose'), tomando AINE e analgésicos sem resposta, perdendo autonomia. Diagnóstico tem efeito poderoso: nomeia a doença, propõe solução eficaz. Educar paciente e família sobre a resposta rápida ao corticoide, mas também sobre o tempo prolongado de tratamento (1-2 anos). Vigilância de ACG: ensinar a reportar IMEDIATAMENTE cefaleia nova, mudança visual, claudicação mandibular — janela curta para preservar visão.",
sus_tx:"PREDNISONA (UBS) 15-20 mg/dia em dose única matinal. Resposta esperada em 24-72h, completa em 1 semana. Desmame LENTO: reduzir 2,5 mg cada 2-4 semanas até 10 mg/dia, depois 1 mg cada 1-2 meses. Tratamento total: 1-2 anos, às vezes mais. Em paciente com recidiva no desmame: subir 5-10 mg, estabilizar, descer mais devagar. Profilaxia para osteoporose: cálcio + D + bifosfonato (DMO baseline). Vigilância DM2 (glicemia jejum a cada 3 meses, especialmente nos primeiros 6 meses). Vacinação influenza + pneumocócica.",
padrao_ouro:"Acrescenta: metotrexato como poupador de corticoide se desmame difícil ou efeitos adversos corticoide intoleráveis [evidência moderada]; tocilizumabe (anti-IL-6) — autorizado para PMR refratária em algumas guidelines, alto custo, especialidade. Se ACG associada: prednisona ALTA dose (40-60 mg/dia) + encaminhar reumato/oftalmo urgência.",
prog:"Bom — maioria responde, segue em desmame por 1-2 anos, alcança remissão sem corticoide. ~30% tem recidivas exigindo aumento de dose. ACG associada piora prognóstico (maior dose, maior tempo, risco visual).",
acomp:"Mensal nos primeiros 3 meses (titulação, vigilância efeitos corticoide). VHS/PCR a cada 1-2 meses inicialmente — não dirigir terapia apenas pelo lab, mas clinicamente; lab serve como apoio. Glicemia, PA, peso a cada consulta. DMO baseline + anual se uso prolongado. Vigilância sintomas ACG a CADA consulta. Após estabilização: trimestral.",
p4:"NÃO usar AINE como tratamento de PMR — ineficaz. NÃO indicar imagem de cintura escapular/pélvica rotineiramente (Rx, RM) — diagnóstico clínico-laboratorial. NÃO confundir com fibromialgia (PCR/VHS normais, sintomas crônicos generalizados) ou osteoartrose (dor mecânica localizada). NÃO suspender prednisona abruptamente após uso >2-3 sem (insuficiência adrenal) — sempre desmame.",
alertas:[
{nivel:"crit", txt:"⚠ ACG (Arterite de Células Gigantes) associada — sintomas: cefaleia nova/persistente, claudicação mandibular (dor ao mastigar), perda visual súbita ou amaurose fugaz, hipersensibilidade do couro cabeludo, sintomas constitucionais marcantes. RISCO DE CEGUEIRA IRREVERSÍVEL — encaminhar PS/oftalmo/reumato IMEDIATAMENTE. Iniciar prednisona 40-60 mg/dia ANTES da biópsia se forte suspeita."},
{nivel:"crit", txt:"Corticoide ≥20 mg/dia >3 meses em idoso: ALTO risco osteoporose, diabetes secundário, infecções, catarata, glaucoma, fratura. Profilaxia GI (IBP), DMO, cálcio+D, vigilância intensiva."},
{nivel:"warn", txt:"Paciente em desmame de prednisona com piora dos sintomas: subir 5-10 mg da última dose efetiva, estabilizar 2-4 semanas, voltar a desmamar mais devagar. NÃO desmamar em pacote 'pra resolver logo'."},
{nivel:"warn", txt:"Diagnóstico diferencial inclui: AR-LARO (RA em idoso), polimiosite (fraqueza objetiva, CK alta), neoplasia oculta (linfoma, mieloma), infecção crônica (endocardite, TB, abscesso), osteoartrose grave generalizada. Investigar com hemograma, função renal, CK, eletroforese de proteínas, Rx tórax se atípico."},
{nivel:"info", txt:"VHS/PCR podem estar normais em ~5-20% das PMR — clínica + resposta a corticoide ainda é diagnóstica. Não excluir pelo lab apenas."},
{nivel:"info", txt:"Resposta a prednisona 15-20 mg/dia em 24-72h é parte do critério diagnóstico — uma das poucas doenças com resposta tão dramática."},
],
diretriz:"[SBR — Diretriz Brasileira de PMR/ACG 2023] [EULAR/ACR 2015 recommendations for management of polymyalgia rheumatica] [BSR/BHPR 2019 Guideline for Diagnosis and Treatment of GCA] [TMFC 2ª ed, cap. 163] [DUNCAN 5ª ed, cap. 83]"
},

);
