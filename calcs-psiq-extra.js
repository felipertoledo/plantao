/* ============================================================
   ESCALAS PSIQUIÁTRICAS — EXTRA (Lote 1: Autismo + TDAH + fichas de especialista)
   Felipe Ribeiro Toledo / Vovôminic Doutô
   Verdes = autoaplicáveis/domínio público (calculadora com escore).
   Amarelas = instrumentos privativos de psicólogo / proprietários
              (ficha de referência — quando solicitar/encaminhar; itens NÃO reproduzidos).
   ============================================================ */

CALCS.push(

/* ============================================================
   AUTISMO 1 — M-CHAT-R (rastreio TEA 16-30 meses)
   ============================================================ */
{id:"mchat-r", contexto:["ubs"], nome:"M-CHAT-R — Rastreio de Autismo (16-30 meses)", sis:"psiq",
desc:"Modified Checklist for Autism in Toddlers, Revised. Rastreio (NÃO diagnóstico) de TEA em crianças de 16 a 30 meses, respondido pelos pais/cuidadores. 20 itens sim/não. Risco: 0-2 baixo; 3-7 médio (aplicar entrevista de seguimento M-CHAT-R/F antes de encaminhar); ≥8 alto (encaminhar direto). Uso livre (Robins et al., 2009). NÃO substitui avaliação diagnóstica.",
fields:[
{tipo:"select", id:"q1", label:"1. Se você aponta para algo do outro lado do cômodo, seu filho(a) olha para o que você aponta?", opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q2", label:"2. Você já se perguntou se seu filho(a) é surdo(a)?", opts:[{val:1,label:"Sim"},{val:0,label:"Não"}]},
{tipo:"select", id:"q3", label:"3. Seu filho(a) brinca de faz-de-conta (ex.: fingir beber de um copo vazio, cuidar de boneca)?", opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q4", label:"4. Seu filho(a) gosta de subir em coisas (ex.: móveis, escada)?", opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q5", label:"5. Seu filho(a) faz movimentos incomuns com os dedos perto dos olhos?", opts:[{val:1,label:"Sim"},{val:0,label:"Não"}]},
{tipo:"select", id:"q6", label:"6. Seu filho(a) aponta com um dedo para PEDIR algo ou ajuda?", opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q7", label:"7. Seu filho(a) aponta com um dedo para MOSTRAR algo interessante?", opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q8", label:"8. Seu filho(a) se interessa por outras crianças (observa, sorri, se aproxima)?", opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q9", label:"9. Seu filho(a) traz objetos ou os segura para MOSTRAR a você (não para pedir ajuda)?", opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q10", label:"10. Seu filho(a) responde quando você o(a) chama pelo nome?", opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q11", label:"11. Quando você sorri para seu filho(a), ele(a) sorri de volta?", opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q12", label:"12. Seu filho(a) fica MUITO incomodado(a) com barulhos do dia a dia (aspirador, música alta)?", opts:[{val:1,label:"Sim"},{val:0,label:"Não"}]},
{tipo:"select", id:"q13", label:"13. Seu filho(a) anda sozinho(a)?", opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q14", label:"14. Seu filho(a) olha nos seus olhos quando você fala, brinca ou veste ele(a)?", opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q15", label:"15. Seu filho(a) tenta imitar o que você faz (ex.: dar tchau, bater palmas)?", opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q16", label:"16. Se você vira a cabeça para olhar algo, seu filho(a) olha na mesma direção?", opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q17", label:"17. Seu filho(a) tenta fazer você olhar para ele(a) (busca sua atenção)?", opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q18", label:"18. Seu filho(a) entende quando você manda fazer algo (ex.: 'pega o sapato')?", opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q19", label:"19. Quando algo novo acontece, seu filho(a) olha para o seu rosto para ver sua reação?", opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q20", label:"20. Seu filho(a) gosta de atividades de movimento (ser balançado, pular no colo)?", opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
],
calc:function(v){
  let s=0; for(let i=1;i<=20;i++) s+=parseInt(v["q"+i])||0; return s;
},
interp:function(s,v){
  const resp=Array.from({length:20},(_,i)=>v["q"+(i+1)]).filter(x=>x!==null&&x!==undefined).length;
  if(resp===0) return {risco:"—", acao:"Responda os 20 itens (informante: pai/mãe/cuidador).", cor:"info"};
  if(resp<20) return {risco:`Parcial ${s} — faltam ${20-resp} item(ns)`, acao:"Continue respondendo.", cor:"info"};
  if(s<=2) return {risco:`Escore ${s}/20 — BAIXO risco`, acao:"Rastreio negativo. Manter vigilância do desenvolvimento na puericultura (marcos, Caderneta da Criança). Reaplicar se surgirem preocupações. NÃO exclui TEA se houver suspeita clínica forte — nesse caso, encaminhar mesmo com escore baixo.", cor:"ok"};
  if(s<=7) return {risco:`Escore ${s}/20 — risco MÉDIO`, acao:"Aplicar a ENTREVISTA DE SEGUIMENTO M-CHAT-R/F (Follow-Up) sobre os itens falhados antes de decidir. Se na entrevista de seguimento o escore permanecer ≥2 → encaminhar para avaliação diagnóstica (neuropediatra / psiquiatria infantil) e estimulação precoce. Ativar rede: CER/estimulação precoce, CAPSi, fono/TO. Orientar família sem alarmar.", cor:"warn"};
  return {risco:`Escore ${s}/20 — ALTO risco`, acao:"Encaminhar DIRETO para avaliação diagnóstica (neuropediatra / psiquiatra da infância) — não é necessário aplicar o seguimento. Iniciar intervenção/estimulação precoce JÁ (não esperar o diagnóstico fechar). Acionar CER, CAPSi, fonoaudiologia e terapia ocupacional. Avaliar perda auditiva (item 2/10) com triagem/teste auditivo. Apoio e psicoeducação da família.", cor:"crit"};
}
},

/* ============================================================
   AUTISMO 2 — AQ-10 (rastreio TEA adulto)
   ============================================================ */
{id:"aq-10", contexto:["ubs"], nome:"AQ-10 — Rastreio de Autismo em Adultos (10 itens)", sis:"psiq",
desc:"Autism Spectrum Quotient, versão curta de 10 itens (Allison/Baron-Cohen). Rastreio de traços do espectro autista em ADULTOS com inteligência preservada. Cada item pontua 0 ou 1. Escore ≥6 sugere encaminhar para avaliação diagnóstica especializada. Uso livre. NÃO é diagnóstico.",
fields:[
{tipo:"select", id:"q1", label:"1. Frequentemente percebo pequenos sons que outras pessoas não notam.", opts:[{val:1,label:"Concordo (definitiva/levemente)"},{val:0,label:"Discordo (leve/definitivamente)"}]},
{tipo:"select", id:"q2", label:"2. Costumo me concentrar mais no quadro geral do que em pequenos detalhes.", opts:[{val:0,label:"Concordo (definitiva/levemente)"},{val:1,label:"Discordo (leve/definitivamente)"}]},
{tipo:"select", id:"q3", label:"3. Acho fácil fazer mais de uma coisa ao mesmo tempo.", opts:[{val:0,label:"Concordo (definitiva/levemente)"},{val:1,label:"Discordo (leve/definitivamente)"}]},
{tipo:"select", id:"q4", label:"4. Se há uma interrupção, consigo voltar rapidamente ao que estava fazendo.", opts:[{val:0,label:"Concordo (definitiva/levemente)"},{val:1,label:"Discordo (leve/definitivamente)"}]},
{tipo:"select", id:"q5", label:"5. Acho fácil 'ler nas entrelinhas' quando alguém conversa comigo.", opts:[{val:0,label:"Concordo (definitiva/levemente)"},{val:1,label:"Discordo (leve/definitivamente)"}]},
{tipo:"select", id:"q6", label:"6. Sei perceber quando alguém que me ouve está ficando entediado.", opts:[{val:0,label:"Concordo (definitiva/levemente)"},{val:1,label:"Discordo (leve/definitivamente)"}]},
{tipo:"select", id:"q7", label:"7. Quando leio uma história, tenho dificuldade em descobrir as intenções dos personagens.", opts:[{val:1,label:"Concordo (definitiva/levemente)"},{val:0,label:"Discordo (leve/definitivamente)"}]},
{tipo:"select", id:"q8", label:"8. Gosto de coletar informações sobre categorias de coisas (tipos de carro, pássaro, trem etc.).", opts:[{val:1,label:"Concordo (definitiva/levemente)"},{val:0,label:"Discordo (leve/definitivamente)"}]},
{tipo:"select", id:"q9", label:"9. Acho fácil descobrir o que alguém pensa ou sente apenas olhando para o rosto.", opts:[{val:0,label:"Concordo (definitiva/levemente)"},{val:1,label:"Discordo (leve/definitivamente)"}]},
{tipo:"select", id:"q10", label:"10. Tenho dificuldade em entender as intenções das pessoas.", opts:[{val:1,label:"Concordo (definitiva/levemente)"},{val:0,label:"Discordo (leve/definitivamente)"}]},
],
calc:function(v){
  let s=0; for(let i=1;i<=10;i++) s+=parseInt(v["q"+i])||0; return s;
},
interp:function(s,v){
  const resp=Array.from({length:10},(_,i)=>v["q"+(i+1)]).filter(x=>x!==null&&x!==undefined).length;
  if(resp===0) return {risco:"—", acao:"Responda os 10 itens.", cor:"info"};
  if(resp<10) return {risco:`Parcial ${s} — faltam ${10-resp} item(ns)`, acao:"Continue respondendo.", cor:"info"};
  if(s<6) return {risco:`Escore ${s}/10 — abaixo do ponto de corte`, acao:"Rastreio negativo para traços do espectro. Se houver forte suspeita clínica (dificuldades sociais persistentes, interesses restritos, história desde a infância), encaminhar mesmo assim — o AQ-10 é triagem, não exclui TEA. Investigar diferenciais (ansiedade social, TOC, esquizoide).", cor:"ok"};
  return {risco:`Escore ${s}/10 — ACIMA do corte (≥6)`, acao:"Sugere traços compatíveis com o espectro autista. ENCAMINHAR para avaliação diagnóstica especializada (psiquiatria + neuropsicologia). Colher história do neurodesenvolvimento (sintomas presentes desde a infância). Avaliar comorbidades comuns (ansiedade, depressão, TDAH). Psicoeducação. Diagnóstico de TEA em adulto é clínico (DSM-5-TR) + instrumentos como ADOS-2/ADI-R aplicados por especialista.", cor:"warn"};
}
}

);


CALCS.push(

/* ============================================================
   TDAH 1 — SNAP-IV (18 itens) — crianças e adolescentes
   ============================================================ */
{id:"snap-iv", contexto:["ubs"], nome:"SNAP-IV (18 itens) — Rastreio de TDAH (crianças/adolescentes)", sis:"psiq",
desc:"Swanson, Nolan & Pelham — versão de 18 itens (critérios DSM). Respondido por pais E/OU professores sobre o comportamento da criança/adolescente. Itens 1-9 = desatenção; 10-18 = hiperatividade/impulsividade. Cada item: 0 (nem um pouco) a 3 (demais). Critério de positividade: ≥6 itens marcados 'Bastante' ou 'Demais' em uma subescala. Tradução validada (GEDA-UFRJ / UFRGS). NÃO é diagnóstico — exige avaliação clínica, início <12 anos e prejuízo em ≥2 contextos.",
fields:(function(){
  const labels=[
    "1. Não presta atenção a detalhes ou comete erros por descuido",
    "2. Tem dificuldade de manter a atenção em tarefas ou brincadeiras",
    "3. Parece não escutar quando lhe falam diretamente",
    "4. Não segue instruções até o fim / não termina tarefas",
    "5. Tem dificuldade de organizar tarefas e atividades",
    "6. Evita ou reluta em tarefas que exigem esforço mental prolongado",
    "7. Perde coisas necessárias para tarefas/atividades",
    "8. Distrai-se facilmente com estímulos externos",
    "9. É esquecido(a) em atividades do dia a dia",
    "10. Mexe mãos/pés ou se remexe na cadeira",
    "11. Levanta-se em situações em que deveria ficar sentado(a)",
    "12. Corre/sobe em coisas em situações inapropriadas (ou inquietação interna, em adolescentes)",
    "13. Tem dificuldade de brincar ou se envolver em atividades calmamente",
    "14. Está 'a mil por hora', como se estivesse 'a motor'",
    "15. Fala em excesso",
    "16. Responde antes de a pergunta ser concluída",
    "17. Tem dificuldade de esperar a sua vez",
    "18. Interrompe os outros ou se intromete"
  ];
  const opts=[{val:0,label:"Nem um pouco (0)"},{val:1,label:"Só um pouco (1)"},{val:2,label:"Bastante (2)"},{val:3,label:"Demais (3)"}];
  return labels.map((l,i)=>({tipo:"select", id:"q"+(i+1), label:l, opts:opts}));
})(),
calc:function(v){
  // soma total; a regra de positividade é por contagem (ver interp)
  let s=0; for(let i=1;i<=18;i++) s+=parseInt(v["q"+i])||0; return s;
},
interp:function(s,v){
  const resp=Array.from({length:18},(_,i)=>v["q"+(i+1)]).filter(x=>x!==null&&x!==undefined).length;
  if(resp===0) return {risco:"—", acao:"Responda os 18 itens (informante: pai/mãe/cuidador OU professor).", cor:"info"};
  if(resp<18) return {risco:`Parcial — faltam ${18-resp} item(ns)`, acao:"Continue respondendo.", cor:"info"};
  let des=0, hi=0;
  for(let i=1;i<=9;i++) if((parseInt(v["q"+i])||0)>=2) des++;
  for(let i=10;i<=18;i++) if((parseInt(v["q"+i])||0)>=2) hi++;
  const posDes=des>=6, posHi=hi>=6;
  const base=`Desatenção: ${des}/9 itens 'bastante/demais' · Hiperatividade-Impulsividade: ${hi}/9. `;
  if(!posDes && !posHi) return {risco:base+"— Abaixo do limiar de rastreio", acao:"Não atinge o critério de contagem em nenhuma subescala. Se houver prejuízo funcional importante, investigar diferenciais (ansiedade, dificuldade de aprendizagem específica, problemas de sono, contexto familiar/escolar, perda auditiva/visual). Reaplicar com OUTRO informante (escola) — concordância pais+professores reforça o quadro.", cor:"ok"};
  let perfil = posDes&&posHi ? "apresentação COMBINADA" : posDes ? "predomínio DESATENTO" : "predomínio HIPERATIVO/IMPULSIVO";
  return {risco:base+`— POSITIVO (${perfil})`, acao:"Rastreio positivo. CONFIRMAR diagnóstico clinicamente (DSM-5): ≥6 sintomas em ao menos uma dimensão (≥5 se ≥17 anos), início ANTES dos 12 anos, prejuízo em ≥2 contextos (casa E escola), ≥6 meses, afastando outras causas. OBTER a visão da ESCOLA (aplicar SNAP-IV com o professor). Avaliar comorbidades (TOD, ansiedade, dislexia, sono). Encaminhar neuropediatria/psiquiatria infantil para confirmação e plano. 1ª linha medicamentosa quando indicada: metilfenidato (LI 0,3-1 mg/kg/dia divididos; LP/LA 1×/dia matinal); lisdexanfetamina; em comorbidade/efeitos: atomoxetina. Intervenções não-farmacológicas e orientação escolar SEMPRE.", cor:"warn"};
}
},

/* ============================================================
   TDAH 2 — ASRS-v1.1 Parte B (sintomas adicionais, adulto) — complemento
   ============================================================ */
{id:"asrs-parte-b", contexto:["ubs"], nome:"ASRS-v1.1 Parte B — Sintomas Adicionais de TDAH Adulto (12 itens)", sis:"psiq",
desc:"Complemento da Parte A (triagem). A Parte B NÃO tem ponto de corte formal — descreve a frequência de sintomas adicionais e ajuda a montar o quadro clínico para a avaliação. Use junto com a Parte A (já no site). Frequência: Nunca(0) a Muito frequentemente(4). Quanto mais itens 'Frequentemente/Muito frequentemente', maior a carga sintomática a documentar.",
fields:(function(){
  const labels=[
    "7. Comete erros por descuido em projeto chato/difícil",
    "8. Dificuldade de manter atenção em trabalho repetitivo",
    "9. Dificuldade de se concentrar no que dizem, mesmo falando diretamente",
    "10. Perde/extravia coisas em casa ou no trabalho; dificuldade de achar",
    "11. Distrai-se com atividade/barulho ao redor",
    "12. Levanta-se em reuniões/situações em que deveria ficar sentado",
    "13. Sente-se inquieto(a) ou agitado(a)",
    "14. Dificuldade de relaxar/sossegar no tempo livre",
    "15. Fala demais em situações sociais",
    "16. Termina as frases das pessoas antes delas",
    "17. Dificuldade de esperar a vez",
    "18. Interrompe os outros quando estão ocupados"
  ];
  const opts=[{val:0,label:"Nunca (0)"},{val:1,label:"Raramente (1)"},{val:2,label:"Às vezes (2)"},{val:3,label:"Frequentemente (3)"},{val:4,label:"Muito frequentemente (4)"}];
  return labels.map((l,i)=>({tipo:"select", id:"q"+(i+7), label:l, opts:opts}));
})(),
calc:function(v){
  let s=0, alto=0;
  for(let i=7;i<=18;i++){ const x=parseInt(v["q"+i])||0; s+=x; if(x>=3) alto++; }
  return alto; // nº de itens frequentes/muito frequentes
},
interp:function(s,v){
  const resp=Array.from({length:12},(_,i)=>v["q"+(i+7)]).filter(x=>x!==null&&x!==undefined).length;
  if(resp===0) return {risco:"—", acao:"Responda os 12 itens. Use junto com a ASRS Parte A (triagem).", cor:"info"};
  if(resp<12) return {risco:`Parcial — faltam ${12-resp} item(ns)`, acao:"Continue respondendo.", cor:"info"};
  const txt=`${s}/12 itens 'frequentemente/muito frequentemente'`;
  if(s<=2) return {risco:txt+" — carga sintomática BAIXA", acao:"Poucos sintomas adicionais. Interpretar SEMPRE em conjunto com a Parte A e a clínica. A Parte B não confirma nem exclui TDAH — é apoio descritivo.", cor:"ok"};
  return {risco:txt+" — carga sintomática RELEVANTE", acao:"Vários sintomas adicionais frequentes. Documentar para a avaliação. Se a Parte A foi positiva, reforça a indicação de avaliação diagnóstica completa (DSM-5: início <12a, ≥2 contextos, prejuízo). Colher história de desenvolvimento e afastar diferenciais (sono, humor, ansiedade, substâncias, tireoide).", cor:"info"};
}
}

);


/* ============================================================
   FICHAS DE REFERÊNCIA (amarelas) — instrumentos de especialista
   Privativos de psicólogo / proprietários. Itens NÃO reproduzidos.
   Objetivo: orientar QUANDO solicitar / encaminhar.
   ============================================================ */
(function(){
  function mkFicha(o){
    return {
      id:o.id, contexto:["ubs"], sis:"psiq",
      nome:o.nome+" — referência (quando solicitar/encaminhar)",
      desc:o.desc,
      fields:[],
      calc:function(){ return "📋 Referência"; },
      interp:function(){ return {risco:o.risco||"Instrumento de especialista — não autoaplicável", acao:o.acao, cor:o.cor||"info"}; }
    };
  }
  const fichas=[
  // ----- AUTISMO -----
  {id:"ref-cars", nome:"CARS-2 (Childhood Autism Rating Scale)",
   desc:"Escala de gradação da GRAVIDADE do autismo na infância, por observação clínica estruturada de várias áreas (relação, imitação, resposta emocional, uso do corpo/objetos, comunicação etc.). Proprietária; aplicada por profissional treinado.",
   acao:"📐 Mede: gravidade do TEA (ausente/leve-moderado/grave). 🩺 Solicitar quando: já há suspeita de TEA e se quer graduar a intensidade para planejar intervenção. 👤 Aplica: psicólogo/neuropsicólogo treinado. ⚠ Não confirma diagnóstico isoladamente — complementa avaliação clínica + ADOS/ADI-R.", cor:"info"},
  {id:"ref-ados", nome:"ADOS-2 (Autism Diagnostic Observation Schedule)",
   desc:"Avaliação observacional semiestruturada considerada padrão-ouro internacional para TEA, com módulos por nível de linguagem (do pré-verbal ao adulto fluente). No Brasil ainda sem padronização aprovada pelo CFP e sem comercialização livre.",
   acao:"📐 Mede: comunicação social e comportamentos repetitivos em situação observada. 🩺 Solicitar quando: avaliação diagnóstica formal de TEA (qualquer idade). 👤 Aplica: clínico certificado (psiquiatra/psicólogo/fono treinados). Combina com ADI-R (entrevista de pais).", cor:"info"},
  {id:"ref-adir", nome:"ADI-R (Autism Diagnostic Interview-Revised)",
   desc:"Entrevista semiestruturada longa (~1,5-2,5h) com os cuidadores sobre história de desenvolvimento e sintomas de TEA. Padrão-ouro junto ao ADOS-2.",
   acao:"📐 Mede: história desenvolvimental e sintomas de TEA pelo relato dos pais. 🩺 Solicitar quando: avaliação diagnóstica formal, especialmente para complementar o ADOS-2. 👤 Aplica: profissional treinado.", cor:"info"},
  {id:"ref-vineland", nome:"Vineland (Escalas de Comportamento Adaptativo)",
   desc:"Avalia o funcionamento ADAPTATIVO no dia a dia: comunicação, habilidades de vida diária, socialização e (em crianças) motricidade. Proprietária; privativa de psicólogo.",
   acao:"📐 Mede: nível adaptativo/funcional (não é QI). 🩺 Solicitar quando: TEA ou deficiência intelectual — para dimensionar suporte, planejar intervenção e instruir elegibilidade a benefícios (ex.: BPC/LOAS) e adaptações escolares. 👤 Aplica: psicólogo.", cor:"info"},
  // ----- TDAH -----
  {id:"ref-conners", nome:"Conners-3 / CAARS (escalas de TDAH)",
   desc:"Escalas dimensionais de TDAH e comorbidades (versões para pais, professores e autorrelato; CAARS para adultos). Proprietárias (requerem compra/treinamento).",
   acao:"📐 Mede: intensidade dimensional de sintomas de TDAH e correlatos. 🩺 Solicitar quando: aprofundar avaliação de TDAH além do rastreio (SNAP-IV/ASRS), monitorar resposta ao tratamento. 👤 Aplica: profissional habilitado. No rastreio inicial, SNAP-IV (crianças) e ASRS (adultos) já bastam e são livres.", cor:"info"},
  {id:"ref-diva", nome:"DIVA-5 (Entrevista Diagnóstica de TDAH no Adulto)",
   desc:"Entrevista semiestruturada baseada no DSM-5 para TDAH em adultos: sintomas atuais + retrospectiva da infância + prejuízo. Gratuita, mas aplicada por profissional.",
   acao:"📐 Mede: critérios diagnósticos de TDAH adulto de forma estruturada. 🩺 Solicitar quando: confirmar TDAH adulto após rastreio ASRS positivo. 👤 Aplica: psiquiatra/psicólogo. Útil porque organiza a história de início <12 anos.", cor:"info"},
  // ----- INTELIGÊNCIA / NEUROPSICOLOGIA -----
  {id:"ref-wechsler", nome:"WAIS-IV / WISC (escalas Wechsler de inteligência)",
   desc:"Avaliação do QI e de índices cognitivos (compreensão verbal, raciocínio perceptivo, memória operacional, velocidade de processamento). WAIS = adultos; WISC = crianças/adolescentes. Proprietárias (Pearson) e de uso privativo do psicólogo.",
   acao:"📐 Mede: funcionamento intelectual global e por domínios. 🩺 Encaminhar quando: suspeita de deficiência intelectual ou altas habilidades, perfil cognitivo em TDAH/TEA/dificuldades de aprendizagem, perícia/laudo. 👤 Aplica: psicólogo. Para rastreio cognitivo rápido no consultório, use MEEM/MoCA.", cor:"info"},
  {id:"ref-wcst", nome:"WCST (Teste Wisconsin de Classificação de Cartas)",
   desc:"Avalia FUNÇÃO EXECUTIVA: flexibilidade cognitiva, formação de conceitos e perseveração (sensível a disfunção frontal). Proprietário.",
   acao:"📐 Mede: flexibilidade cognitiva / funções executivas frontais. 🩺 Encaminhar quando: suspeita de disfunção executiva (TCE frontal, demência frontotemporal, sequelas). 👤 Aplica: neuropsicólogo.", cor:"info"},
  {id:"ref-ravlt", nome:"RAVLT (Teste de Aprendizagem Auditivo-Verbal de Rey)",
   desc:"Avalia memória episódica verbal e curva de aprendizagem (lista de palavras com várias tentativas + evocação tardia + reconhecimento). Versão brasileira normatizada (Malloy-Diniz).",
   acao:"📐 Mede: memória verbal e aprendizagem. 🩺 Encaminhar quando: queixa de memória, investigação de CCL/demência, TCE. 👤 Aplica: neuropsicólogo.", cor:"info"},
  {id:"ref-rey-figura", nome:"Figura Complexa de Rey-Osterrieth",
   desc:"Cópia e reprodução de memória de uma figura geométrica complexa: avalia habilidade visuoconstrutiva, planejamento e memória visual não-verbal.",
   acao:"📐 Mede: função visuoespacial/visuoconstrutiva e memória visual. 🩺 Encaminhar quando: suspeita de comprometimento visuoespacial/executivo (ex.: demências, lesões parietais/frontais). 👤 Aplica: neuropsicólogo.", cor:"info"},
  {id:"ref-tmt", nome:"TMT (Trail Making Test — Trilhas A e B)",
   desc:"Teste breve de atenção, rastreamento visual e velocidade (Parte A) e flexibilidade cognitiva/alternância (Parte B). De aplicação rápida; interpretação por normas (idade/escolaridade).",
   acao:"📐 Mede: atenção, velocidade de processamento e função executiva (B). 🩺 Encaminhar quando: triagem de disfunção atencional/executiva dentro de avaliação neuropsicológica. 👤 Aplica: neuropsicólogo (interpretação normatizada).", cor:"info"},
  {id:"ref-stroop", nome:"Teste de Stroop (cores e palavras)",
   desc:"Avalia atenção seletiva e CONTROLE INIBITÓRIO (capacidade de suprimir resposta automática). De domínio público; interpretação por normas.",
   acao:"📐 Mede: controle inibitório / atenção seletiva. 🩺 Encaminhar quando: avaliar funções executivas (TDAH, disfunção frontal). 👤 Aplica: neuropsicólogo.", cor:"info"},
  {id:"ref-moca", nome:"MoCA (Montreal Cognitive Assessment)",
   desc:"Rastreio cognitivo breve (0-30), MAIS sensível que o MEEM para comprometimento cognitivo leve. Cobre função executiva, visuoespacial, memória, atenção, linguagem, abstração e orientação.",
   acao:"📐 Mede: cognição global, com boa sensibilidade para CCL. 🩺 Usar quando: rastreio de comprometimento cognitivo leve / queixa de memória com MEEM normal. 👤 Aplica: profissional de saúde treinado. ⚠ Atualmente exige REGISTRO/TREINAMENTO oficial e tem direitos autorais — por isso entra como referência, não como calculadora aqui. Alternativa livre: MEEM (em construção).", cor:"warn"},
  // ----- HUMOR / PSICOSE (heteroaplicadas pelo clínico) -----
  {id:"ref-madrs", nome:"MADRS (Montgomery-Åsberg Depression Rating Scale)",
   desc:"Escala de 10 itens de GRAVIDADE da depressão, pontuada pelo clínico em entrevista. Muito usada para medir RESPOSTA ao tratamento.",
   acao:"📐 Mede: gravidade e mudança dos sintomas depressivos. 🩺 Usar quando: quantificar gravidade e acompanhar resposta antidepressiva ao longo do tempo. 👤 Aplica: clínico (heteroaplicada). Para rastreio na APS, PHQ-9 (em construção) é mais prático.", cor:"info"},
  {id:"ref-hamd", nome:"HAM-D / HDRS (Escala de Hamilton para Depressão)",
   desc:"Escala clássica de gravidade da depressão, heteroaplicada pelo clínico. Padrão histórico em pesquisa e acompanhamento.",
   acao:"📐 Mede: gravidade da depressão. 🩺 Usar quando: monitorar gravidade/resposta em contexto especializado. 👤 Aplica: clínico.", cor:"info"},
  {id:"ref-hama", nome:"HAM-A (Escala de Hamilton para Ansiedade)",
   desc:"Escala heteroaplicada de gravidade da ansiedade (sintomas psíquicos e somáticos).",
   acao:"📐 Mede: gravidade da ansiedade. 🩺 Usar quando: acompanhar intensidade/resposta. 👤 Aplica: clínico. Para rastreio rápido, GAD-7 (em construção).", cor:"info"},
  {id:"ref-ymrs", nome:"YMRS (Young Mania Rating Scale)",
   desc:"Escala de 11 itens, heteroaplicada, para GRAVIDADE de episódio MANÍACO. Acompanha resposta no transtorno bipolar.",
   acao:"📐 Mede: gravidade da mania. 🩺 Usar quando: estadiar/acompanhar episódio maníaco (após rastreio MDQ positivo e diagnóstico de bipolar). 👤 Aplica: clínico/psiquiatra.", cor:"info"},
  {id:"ref-panss", nome:"PANSS (Positive and Negative Syndrome Scale)",
   desc:"Avalia gravidade dos sintomas POSITIVOS, NEGATIVOS e gerais na esquizofrenia. Heteroaplicada, requer treinamento; longa.",
   acao:"📐 Mede: gravidade dos sintomas psicóticos. 🩺 Usar quando: acompanhamento especializado da esquizofrenia/psicoses (resposta a antipsicótico). 👤 Aplica: psiquiatra treinado.", cor:"info"},
  {id:"ref-beck", nome:"BDI-II / BAI (Inventários de Beck — depressão/ansiedade)",
   desc:"Autorrelatos amplamente usados de sintomas depressivos (BDI-II) e ansiosos (BAI). Embora autoaplicáveis, são PROPRIETÁRIOS e de uso privativo de psicólogo no Brasil (SATEPSI) — por isso entram como referência.",
   acao:"📐 Mede: intensidade de sintomas depressivos (BDI-II) e ansiosos (BAI). 🩺 Encaminhar quando: avaliação psicológica formal/laudo. 👤 Aplica: psicólogo. Alternativas livres para o médico usar: PHQ-9 (depressão) e GAD-7 (ansiedade) — em construção.", cor:"warn"}
  ];
  CALCS.push.apply(CALCS, fichas.map(mkFicha));
})();


CALCS.push(

/* ============================================================
   PHQ-9 — Rastreio e gravidade de depressão
   ============================================================ */
{id:"phq-9", contexto:["ubs","pa"], nome:"PHQ-9 — Depressão (rastreio + gravidade)", sis:"psiq",
desc:"Patient Health Questionnaire-9. Rastreio e gradação de gravidade da depressão (últimas 2 semanas). 9 itens, 0-3. Corte: 5 leve, 10 moderada, 15 moderada-grave, 20 grave. Item 9 (ideação) positivo → avaliar risco suicida (C-SSRS). Uso livre. Não substitui avaliação clínica.",
fields:(function(){
  const L=["1. Pouco interesse ou prazer em fazer as coisas","2. Sentir-se para baixo, deprimido(a) ou sem perspectiva","3. Dificuldade para dormir, dormir demais ou sono interrompido","4. Sentir-se cansado(a) ou com pouca energia","5. Falta de apetite ou comer demais","6. Sentir-se mal consigo mesmo(a), um fracasso ou que decepcionou a família","7. Dificuldade de concentração (ler, ver TV)","8. Lentidão para falar/mover percebida por outros — OU agitação/inquietação","9. Pensar que seria melhor estar morto(a) ou em se ferir de algum modo"];
  const o=[{val:0,label:"Nenhuma vez (0)"},{val:1,label:"Vários dias (1)"},{val:2,label:"Mais da metade dos dias (2)"},{val:3,label:"Quase todos os dias (3)"}];
  return L.map((l,i)=>({tipo:"select",id:"q"+(i+1),label:l,opts:o}));
})(),
calc:function(v){let s=0;for(let i=1;i<=9;i++)s+=parseInt(v["q"+i])||0;return s;},
interp:function(s,v){
  const resp=Array.from({length:9},(_,i)=>v["q"+(i+1)]).filter(x=>x!==null&&x!==undefined).length;
  if(resp===0)return{risco:"—",acao:"Responda os 9 itens.",cor:"info"};
  const q9=parseInt(v.q9)||0;
  const alerta=q9>=1?" ⚠ ITEM 9 POSITIVO (ideação de morte/autolesão) — avaliar risco suicida AGORA com a C-SSRS, independentemente do escore total.":"";
  if(resp<9)return{risco:`Parcial ${s} — faltam ${9-resp}`+(q9>=1?" ⚠ item 9 positivo":""),acao:"Continue respondendo."+(q9>=1?" Já avalie risco suicida (C-SSRS).":""),cor:q9>=1?"crit":"info"};
  let faixa,acao,cor;
  if(s<=4){faixa="mínima";acao="Sem depressão significativa. Acolhimento, vigilância, reavaliar se piorar.";cor="ok";}
  else if(s<=9){faixa="LEVE";acao="Conduta expectante + suporte: psicoeducação, ativação comportamental, atividade física, higiene do sono, reavaliar em 2-4 semanas. Geralmente NÃO iniciar antidepressivo de imediato (P4).";cor="warn";}
  else if(s<=14){faixa="MODERADA";acao="Considerar psicoterapia e/ou ISRS. Opções REMUME: sertralina 50 mg/dia (titular até 100-200), fluoxetina 20 mg/dia, escitalopram 10 mg/dia. Reavaliar resposta em 4-6 semanas. Avaliar comorbidades (ansiedade, álcool, tireoide).";cor="warn";}
  else if(s<=19){faixa="MODERADA-GRAVE";acao="Tratar: ISRS + psicoterapia. Acompanhamento próximo (2 semanas). Avaliar funcionalidade e suporte social. Considerar matriciamento/CAPS se complexidade.";cor="crit";}
  else{faixa="GRAVE";acao="Tratamento ativo (ISRS/IRSN + psicoterapia), acompanhamento próximo. Avaliar risco suicida, sintomas psicóticos e necessidade de CAPS/psiquiatria. Investigar bipolaridade antes de antidepressivo isolado (MDQ).";cor="crit";}
  return{risco:`Escore ${s}/27 — depressão ${faixa}`+alerta,acao:acao,cor:(q9>=1?"crit":cor)};
}
},

/* ============================================================
   GAD-7 — Rastreio e gravidade de ansiedade
   ============================================================ */
{id:"gad-7", contexto:["ubs","pa"], nome:"GAD-7 — Ansiedade (rastreio + gravidade)", sis:"psiq",
desc:"Generalized Anxiety Disorder-7. Rastreio e gravidade de ansiedade (últimas 2 semanas). 7 itens, 0-3. Corte: 5 leve, 10 moderada, 15 grave. ≥10 sugere TAG provável — investigar. Os 2 primeiros itens formam o GAD-2 (rastreio ultrarrápido, corte ≥3). Uso livre.",
fields:(function(){
  const L=["1. Sentir-se nervoso(a), ansioso(a) ou muito tenso(a)","2. Não conseguir parar ou controlar as preocupações","3. Preocupar-se muito com diversas coisas","4. Dificuldade para relaxar","5. Ficar tão agitado(a) que se torna difícil ficar parado(a)","6. Ficar facilmente aborrecido(a) ou irritado(a)","7. Sentir medo, como se algo terrível fosse acontecer"];
  const o=[{val:0,label:"Nenhuma vez (0)"},{val:1,label:"Vários dias (1)"},{val:2,label:"Mais da metade dos dias (2)"},{val:3,label:"Quase todos os dias (3)"}];
  return L.map((l,i)=>({tipo:"select",id:"q"+(i+1),label:l,opts:o}));
})(),
calc:function(v){let s=0;for(let i=1;i<=7;i++)s+=parseInt(v["q"+i])||0;return s;},
interp:function(s,v){
  const resp=Array.from({length:7},(_,i)=>v["q"+(i+1)]).filter(x=>x!==null&&x!==undefined).length;
  if(resp===0)return{risco:"—",acao:"Responda os 7 itens.",cor:"info"};
  if(resp<7)return{risco:`Parcial ${s} — faltam ${7-resp}`,acao:"Continue respondendo.",cor:"info"};
  let faixa,acao,cor;
  if(s<=4){faixa="mínima";acao="Sem ansiedade significativa. Validar, vigilância.";cor="ok";}
  else if(s<=9){faixa="LEVE";acao="Suporte e psicoeducação, técnicas de respiração/relaxamento, atividade física, higiene do sono. Reavaliar. Em geral sem fármaco (P4).";cor="warn";}
  else if(s<=14){faixa="MODERADA";acao="Considerar psicoterapia (TCC) e/ou ISRS (sertralina 50 mg/dia, escitalopram 10 mg/dia, paroxetina 20 mg/dia). Evitar benzodiazepínico de manutenção. Reavaliar em 4-6 semanas. Investigar comorbidade depressiva (PHQ-9).";cor="warn";}
  else{faixa="GRAVE";acao="Tratar (ISRS + psicoterapia), acompanhamento próximo. Avaliar pânico, TEPT, uso de substâncias, causas orgânicas (tireoide, cardíaco). Matriciamento se refratário.";cor="crit";}
  const gad2=(parseInt(v.q1)||0)+(parseInt(v.q2)||0);
  const nota=gad2>=3?` · GAD-2 = ${gad2} (≥3 = rastreio positivo).`:"";
  return{risco:`Escore ${s}/21 — ansiedade ${faixa}`+nota,acao:acao,cor:cor};
}
},

/* ============================================================
   SRQ-20 — Rastreio de Transtorno Mental Comum (OMS)
   ============================================================ */
{id:"srq-20", contexto:["ubs","pa"], nome:"SRQ-20 — Transtorno Mental Comum (OMS)", sis:"psiq",
desc:"Self-Reporting Questionnaire (OMS). Clássico da APS brasileira (Mari & Williams, 1986) para rastrear sofrimento psíquico / transtorno mental comum (ansiedade, depressão, somatização) nos últimos 30 dias. 20 itens sim/não. Corte usual ≥7 = provável TMC. Item 17 (ideias de acabar com a vida) positivo → avaliar risco. Uso livre.",
fields:(function(){
  const L=["1. Tem dores de cabeça frequentes?","2. Tem falta de apetite?","3. Dorme mal?","4. Assusta-se com facilidade?","5. Tem tremores nas mãos?","6. Sente-se nervoso(a), tenso(a) ou preocupado(a)?","7. Tem má digestão?","8. Tem dificuldade de pensar com clareza?","9. Tem se sentido triste ultimamente?","10. Tem chorado mais do que de costume?","11. Tem dificuldade de realizar com satisfação suas atividades diárias?","12. Tem dificuldade para tomar decisões?","13. Tem dificuldade no trabalho (seu trabalho lhe causa sofrimento)?","14. É incapaz de desempenhar um papel útil em sua vida?","15. Tem perdido o interesse pelas coisas?","16. Sente-se uma pessoa inútil, sem préstimo?","17. Tem tido ideia de acabar com a vida?","18. Sente-se cansado(a) o tempo todo?","19. Tem sensações desagradáveis no estômago?","20. Cansa-se com facilidade?"];
  const o=[{val:0,label:"Não"},{val:1,label:"Sim"}];
  return L.map((l,i)=>({tipo:"select",id:"q"+(i+1),label:l,opts:o}));
})(),
calc:function(v){let s=0;for(let i=1;i<=20;i++)s+=parseInt(v["q"+i])||0;return s;},
interp:function(s,v){
  const resp=Array.from({length:20},(_,i)=>v["q"+(i+1)]).filter(x=>x!==null&&x!==undefined).length;
  if(resp===0)return{risco:"—",acao:"Responda os 20 itens (últimos 30 dias).",cor:"info"};
  const q17=parseInt(v.q17)||0;
  const alerta=q17>=1?" ⚠ ITEM 17 POSITIVO (ideia de acabar com a vida) — avaliar risco suicida AGORA (C-SSRS).":"";
  if(resp<20)return{risco:`Parcial ${s} — faltam ${20-resp}`+(q17?" ⚠ item 17 positivo":""),acao:"Continue."+(q17?" Avalie risco suicida já.":""),cor:q17?"crit":"info"};
  if(s<7)return{risco:`Escore ${s}/20 — abaixo do corte`+alerta,acao:(q17?"Apesar do escore, item 17 positivo exige avaliação de risco. ":"")+"Rastreio negativo para TMC. Acolher queixas, vigilância. Reavaliar conforme contexto.",cor:q17?"crit":"ok"};
  return{risco:`Escore ${s}/20 — provável TRANSTORNO MENTAL COMUM`+alerta,acao:"Sofrimento psíquico significativo. Caracterizar: predomínio depressivo (PHQ-9), ansioso (GAD-7), uso de álcool (AUDIT). Escuta qualificada, abordagem psicossocial, projeto terapêutico singular. Considerar psicoterapia/grupos na UBS, matriciamento/CAPS conforme gravidade. Tratar causa específica identificada.",cor:"warn"};
}
},

/* ============================================================
   AUDIT — Uso de álcool (OMS, 10 itens)
   ============================================================ */
{id:"audit", contexto:["ubs","pa"], nome:"AUDIT — Uso de Álcool (OMS, 10 itens)", sis:"psiq",
desc:"Alcohol Use Disorders Identification Test (OMS, validado no Brasil). Avalia consumo, dependência e problemas relacionados ao álcool. 10 itens. Corte: 0-7 baixo risco; 8-15 uso de risco (intervenção breve); 16-19 uso nocivo; ≥20 provável dependência. Mais completo que o CAGE. Uso livre.",
fields:[
{tipo:"select",id:"q1",label:"1. Com que frequência você toma bebidas alcoólicas?",opts:[{val:0,label:"Nunca"},{val:1,label:"≤1×/mês"},{val:2,label:"2-4×/mês"},{val:3,label:"2-3×/semana"},{val:4,label:"≥4×/semana"}]},
{tipo:"select",id:"q2",label:"2. Quantas doses você toma num dia normal em que bebe?",opts:[{val:0,label:"1-2"},{val:1,label:"3-4"},{val:2,label:"5-6"},{val:3,label:"7-9"},{val:4,label:"≥10"}]},
{tipo:"select",id:"q3",label:"3. Com que frequência toma 6 ou mais doses numa única ocasião?",opts:[{val:0,label:"Nunca"},{val:1,label:"<1×/mês"},{val:2,label:"Mensalmente"},{val:3,label:"Semanalmente"},{val:4,label:"Diário/quase"}]},
{tipo:"select",id:"q4",label:"4. Quantas vezes, no último ano, percebeu que não conseguia parar de beber depois de começar?",opts:[{val:0,label:"Nunca"},{val:1,label:"<1×/mês"},{val:2,label:"Mensalmente"},{val:3,label:"Semanalmente"},{val:4,label:"Diário/quase"}]},
{tipo:"select",id:"q5",label:"5. Quantas vezes, no último ano, não fez o que se esperava de você por causa da bebida?",opts:[{val:0,label:"Nunca"},{val:1,label:"<1×/mês"},{val:2,label:"Mensalmente"},{val:3,label:"Semanalmente"},{val:4,label:"Diário/quase"}]},
{tipo:"select",id:"q6",label:"6. Quantas vezes, no último ano, precisou beber pela manhã para se sentir bem após ter bebido muito?",opts:[{val:0,label:"Nunca"},{val:1,label:"<1×/mês"},{val:2,label:"Mensalmente"},{val:3,label:"Semanalmente"},{val:4,label:"Diário/quase"}]},
{tipo:"select",id:"q7",label:"7. Quantas vezes, no último ano, sentiu culpa ou remorso depois de beber?",opts:[{val:0,label:"Nunca"},{val:1,label:"<1×/mês"},{val:2,label:"Mensalmente"},{val:3,label:"Semanalmente"},{val:4,label:"Diário/quase"}]},
{tipo:"select",id:"q8",label:"8. Quantas vezes, no último ano, não conseguiu lembrar o que aconteceu na noite anterior por ter bebido?",opts:[{val:0,label:"Nunca"},{val:1,label:"<1×/mês"},{val:2,label:"Mensalmente"},{val:3,label:"Semanalmente"},{val:4,label:"Diário/quase"}]},
{tipo:"select",id:"q9",label:"9. Você ou outra pessoa já se feriu por causa da sua bebida?",opts:[{val:0,label:"Não"},{val:2,label:"Sim, mas não no último ano"},{val:4,label:"Sim, no último ano"}]},
{tipo:"select",id:"q10",label:"10. Algum parente, amigo ou médico já se preocupou com sua bebida ou sugeriu que diminuísse?",opts:[{val:0,label:"Não"},{val:2,label:"Sim, mas não no último ano"},{val:4,label:"Sim, no último ano"}]},
],
calc:function(v){let s=0;for(let i=1;i<=10;i++)s+=parseInt(v["q"+i])||0;return s;},
interp:function(s,v){
  const resp=Array.from({length:10},(_,i)=>v["q"+(i+1)]).filter(x=>x!==null&&x!==undefined).length;
  if(resp===0)return{risco:"—",acao:"Responda os 10 itens.",cor:"info"};
  if(resp<10)return{risco:`Parcial ${s} — faltam ${10-resp}`,acao:"Continue respondendo.",cor:"info"};
  if(s<=7)return{risco:`Escore ${s}/40 — BAIXO risco (Zona I)`,acao:"Consumo de baixo risco. Reforçar limites (mulher ≤7 doses/sem, homem ≤14; nunca dirigir). Educação em saúde.",cor:"ok"};
  if(s<=15)return{risco:`Escore ${s}/40 — USO DE RISCO (Zona II)`,acao:"INTERVENÇÃO BREVE motivacional (feedback, aconselhamento para reduzir). Reavaliar. Orientar metas de redução e sinais de progressão.",cor:"warn"};
  if(s<=19)return{risco:`Escore ${s}/40 — USO NOCIVO (Zona III)`,acao:"Intervenção breve + acompanhamento estruturado. Avaliar dependência (DSM-5) e comorbidades. Considerar CAPS-AD. Rastrear complicações (hepática, nutricional, HAS).",cor:"crit"};
  return{risco:`Escore ${s}/40 — provável DEPENDÊNCIA (Zona IV)`,acao:"Encaminhar CAPS-AD / serviço especializado. Avaliar risco de abstinência (histórico de convulsão/delirium → ver CIWA-Ar). Manutenção de abstinência: naltrexona 50 mg/dia ou acamprosato 666 mg 3×/dia. Suporte nutricional (tiamina). Rede psicossocial e familiar.",cor:"crit"};
}
}

);


CALCS.push(

/* ============================================================
   Epworth — Sonolência diurna
   ============================================================ */
{id:"epworth", contexto:["ubs"], nome:"Epworth — Escala de Sonolência Diurna", sis:"psiq",
desc:"Avalia a propensão a cochilar em 8 situações do dia a dia. 0 (nunca) a 3 (grande chance). Corte: 0-9 normal; 10-12 sonolência leve; 13-15 moderada; ≥16 grave. >10 sugere sonolência diurna excessiva — investigar apneia do sono, higiene do sono, fármacos sedativos. Uso clínico.",
fields:(function(){
  const L=["1. Sentado(a) e lendo","2. Assistindo TV","3. Sentado(a), quieto(a), em local público (reunião, teatro)","4. Como passageiro(a) em carro por 1h sem parar","5. Deitado(a) para descansar à tarde, quando possível","6. Sentado(a) conversando com alguém","7. Sentado(a) quieto(a) após o almoço (sem álcool)","8. No carro, parado(a) alguns minutos no trânsito"];
  const o=[{val:0,label:"Nenhuma chance (0)"},{val:1,label:"Pequena (1)"},{val:2,label:"Moderada (2)"},{val:3,label:"Grande chance (3)"}];
  return L.map((l,i)=>({tipo:"select",id:"q"+(i+1),label:l,opts:o}));
})(),
calc:function(v){let s=0;for(let i=1;i<=8;i++)s+=parseInt(v["q"+i])||0;return s;},
interp:function(s,v){
  const resp=Array.from({length:8},(_,i)=>v["q"+(i+1)]).filter(x=>x!==null&&x!==undefined).length;
  if(resp===0)return{risco:"—",acao:"Responda as 8 situações.",cor:"info"};
  if(resp<8)return{risco:`Parcial ${s} — faltam ${8-resp}`,acao:"Continue respondendo.",cor:"info"};
  if(s<=9)return{risco:`Escore ${s}/24 — normal`,acao:"Sem sonolência diurna excessiva. Reforçar higiene do sono se houver queixa.",cor:"ok"};
  if(s<=12)return{risco:`Escore ${s}/24 — sonolência LEVE`,acao:"Higiene do sono, revisar fármacos sedativos, rastrear ronco/apneia (STOP-BANG), avaliar quantidade de sono. Reavaliar.",cor:"warn"};
  if(s<=15)return{risco:`Escore ${s}/24 — sonolência MODERADA`,acao:"Investigar apneia obstrutiva do sono (encaminhar polissonografia se indicado), depressão, fármacos, turnos. Orientar NÃO dirigir sonolento.",cor:"warn"};
  return{risco:`Escore ${s}/24 — sonolência GRAVE`,acao:"Alta probabilidade de distúrbio do sono (apneia?). Encaminhar para investigação (polissonografia) com prioridade. Alertar sobre risco ao dirigir/operar máquinas.",cor:"crit"};
}
},

/* ============================================================
   Fagerström (FTND) — Dependência de nicotina
   ============================================================ */
{id:"fagerstrom", contexto:["ubs"], nome:"Fagerström (FTND) — Dependência de Nicotina", sis:"psiq",
desc:"Teste de Fagerström para Dependência de Nicotina (6 itens). Recomendado pelo MS em todo tabagista no tratamento do tabagismo (PNCT). Escore 0-10. Quanto maior, maior a dependência e maior a chance de precisar de farmacoterapia. Uso livre.",
fields:[
{tipo:"select",id:"q1",label:"1. Quanto tempo após acordar você fuma o 1º cigarro?",opts:[{val:3,label:"≤5 min"},{val:2,label:"6-30 min"},{val:1,label:"31-60 min"},{val:0,label:">60 min"}]},
{tipo:"select",id:"q2",label:"2. Acha difícil não fumar em locais proibidos (igreja, ônibus, hospital)?",opts:[{val:1,label:"Sim"},{val:0,label:"Não"}]},
{tipo:"select",id:"q3",label:"3. Qual cigarro do dia traz mais satisfação / seria mais difícil largar?",opts:[{val:1,label:"O 1º da manhã"},{val:0,label:"Qualquer outro"}]},
{tipo:"select",id:"q4",label:"4. Quantos cigarros você fuma por dia?",opts:[{val:0,label:"≤10"},{val:1,label:"11-20"},{val:2,label:"21-30"},{val:3,label:"≥31"}]},
{tipo:"select",id:"q5",label:"5. Fuma mais nas primeiras horas após acordar do que no resto do dia?",opts:[{val:1,label:"Sim"},{val:0,label:"Não"}]},
{tipo:"select",id:"q6",label:"6. Fuma mesmo estando doente, acamado a maior parte do dia?",opts:[{val:1,label:"Sim"},{val:0,label:"Não"}]},
],
calc:function(v){return ["q1","q2","q3","q4","q5","q6"].reduce((s,k)=>s+(parseInt(v[k])||0),0);},
interp:function(s,v){
  const resp=["q1","q2","q3","q4","q5","q6"].filter(k=>v[k]!==null&&v[k]!==undefined).length;
  if(resp===0)return{risco:"—",acao:"Responda os 6 itens.",cor:"info"};
  if(resp<6)return{risco:`Parcial ${s} — faltam ${6-resp}`,acao:"Continue respondendo.",cor:"info"};
  let g,acao,cor;
  if(s<=2){g="MUITO BAIXA";acao="Abordagem mínima/breve (aconselhamento, fixar data de parada). Muitos param sem farmacoterapia.";cor="ok";}
  else if(s<=4){g="BAIXA";acao="Aconselhamento + abordagem cognitivo-comportamental. Farmacoterapia conforme decisão compartilhada.";cor="warn";}
  else if(s===5){g="MÉDIA";acao="Abordagem intensiva + considerar farmacoterapia. Terapia de reposição de nicotina (TRN: adesivo + goma/pastilha) e/ou bupropiona 150 mg/dia → 150 mg 12/12h.";cor="warn";}
  else if(s<=7){g="ELEVADA";acao="Abordagem intensiva + farmacoterapia recomendada. TRN combinada (adesivo 21 mg/dia + resgate) e/ou bupropiona; vareniclina se disponível. Tratar abstinência (insônia, irritabilidade, fissura).";cor="crit";}
  else{g="MUITO ELEVADA";acao="Dependência intensa. Farmacoterapia plena (TRN combinada em dose alta e/ou bupropiona/vareniclina), abordagem intensiva, acompanhamento próximo. Antecipar sintomas de abstinência fortes ao acordar.";cor="crit";}
  return{risco:`Escore ${s}/10 — dependência ${g}`,acao:acao,cor:cor};
}
},

/* ============================================================
   CAM — Confusion Assessment Method (delirium) — ALGORITMO
   ============================================================ */
{id:"cam", contexto:["ubs","pa"], nome:"CAM — Rastreio de Delirium (Confusion Assessment Method)", sis:"psiq",
desc:"Algoritmo para detectar DELIRIUM à beira do leito. Delirium = (1 Início agudo/curso flutuante) E (2 Desatenção) E [ (3 Pensamento desorganizado) OU (4 Nível de consciência alterado) ]. NÃO é soma — é regra lógica. Avaliar com base na observação + informante. Delirium é EMERGÊNCIA: buscar causa (infecção, fármacos, metabólico, retenção, dor, abstinência). Uso livre.",
fields:[
{tipo:"select",id:"f1",label:"1. INÍCIO AGUDO e CURSO FLUTUANTE — houve mudança aguda no estado mental em relação ao basal, que varia ao longo do dia?",opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select",id:"f2",label:"2. DESATENÇÃO — dificuldade de focar/manter a atenção (ex.: distrai-se, não segue a conversa, falha em dizer meses ao contrário)?",opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select",id:"f3",label:"3. PENSAMENTO DESORGANIZADO — fala desconexa, ilógica, mudança imprevisível de assunto?",opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select",id:"f4",label:"4. NÍVEL DE CONSCIÊNCIA ALTERADO — diferente de alerta (vigilante, sonolento, estuporoso ou comatoso)?",opts:[{val:0,label:"Não (alerta)"},{val:1,label:"Sim (alterado)"}]},
],
calc:function(v){
  const f=["f1","f2","f3","f4"].map(k=>parseInt(v[k]));
  if(f.some(x=>isNaN(x))) return "—";
  const pos=(f[0]===1 && f[1]===1 && (f[2]===1 || f[3]===1));
  return pos?"POSITIVO":"negativo";
},
interp:function(s,v){
  const f=["f1","f2","f3","f4"].map(k=>v[k]);
  if(f.some(x=>x===null||x===undefined)) return {risco:"—",acao:"Responda os 4 critérios (observação + informante sobre o basal).",cor:"info"};
  if(s==="POSITIVO") return {risco:"CAM POSITIVO — delirium provável",acao:"⚠ DELIRIUM é emergência médica (mortalidade elevada). Buscar e tratar a CAUSA: infecção (urina, pulmão), fármacos (anticolinérgicos, benzodiazepínicos, opioides — revisar/desprescrever), distúrbio metabólico (Na, glicemia, ureia, cálcio), hipóxia, retenção urinária/fecaloma, dor, abstinência (álcool/BZD → CIWA-Ar), TCE/AVC. Medidas não-farmacológicas PRIMEIRO (orientação, presença de familiar, sono, óculos/aparelho auditivo, mobilização, hidratação). Antipsicótico em baixa dose SÓ se agitação com risco (ex.: haloperidol 0,5-1 mg) — evitar em Parkinson/corpos de Lewy. Evitar contenção e BZD (exceto abstinência alcoólica).",cor:"crit"};
  return {risco:"CAM negativo — critérios de delirium NÃO preenchidos",acao:"Não preenche o algoritmo no momento. Se houver flutuação, REAVALIAR (delirium varia ao longo do dia). Considerar demência (curso crônico) ou depressão (pseudodemência) como diferenciais. Manter vigilância em idoso hospitalizado/pós-operatório.",cor:"ok"};
}
},

/* ============================================================
   CIWA-Ar — Abstinência alcoólica (plantão)
   ============================================================ */
{id:"ciwa-ar", contexto:["pa","ubs"], nome:"CIWA-Ar — Gravidade da Abstinência Alcoólica", sis:"psiq",
desc:"Clinical Institute Withdrawal Assessment for Alcohol, revised. Mede a gravidade da síndrome de abstinência alcoólica para guiar sedação. 9 itens de 0-7 + orientação (0-4). Total 0-67. <8-10 leve; 10-18 moderada; >18 grave (alto risco de convulsão e delirium tremens). Reavaliar seriadamente. Tratamento sintomático com benzodiazepínico + tiamina. Uso livre.",
fields:(function(){
  const itens=[
    ["q1","Náusea / vômito (0 nenhum → 7 vômitos constantes)"],
    ["q2","Tremor (0 ausente → 7 intenso, mesmo sem estender os braços)"],
    ["q3","Sudorese paroxística (0 ausente → 7 sudorese profusa)"],
    ["q4","Ansiedade (0 ausente → 7 pânico/equivalente a estado agudo grave)"],
    ["q5","Agitação (0 normal → 7 anda/se debate constantemente)"],
    ["q6","Distúrbios TÁTEIS (prurido, formigamento, sensação de insetos) (0 → 7 alucinações)"],
    ["q7","Distúrbios AUDITIVOS (0 → 7 alucinações)"],
    ["q8","Distúrbios VISUAIS (fotossensibilidade, visões) (0 → 7 alucinações)"],
    ["q9","Cefaleia / peso na cabeça (0 ausente → 7 muito grave)"]
  ];
  const o7=Array.from({length:8},(_,i)=>({val:i,label:String(i)}));
  const f=itens.map(([id,l])=>({tipo:"select",id:id,label:l,opts:o7}));
  f.push({tipo:"select",id:"q10",label:"10. Orientação / sensório (0 orientado → 4 desorientado em lugar/pessoa)",opts:[{val:0,label:"0 — orientado, faz contas"},{val:1,label:"1 — incerto sobre data"},{val:2,label:"2 — erra data ≤2 dias"},{val:3,label:"3 — erra data >2 dias"},{val:4,label:"4 — desorientado lugar/pessoa"}]});
  return f;
})(),
calc:function(v){let s=0;for(let i=1;i<=10;i++)s+=parseInt(v["q"+i])||0;return s;},
interp:function(s,v){
  const resp=Array.from({length:10},(_,i)=>v["q"+(i+1)]).filter(x=>x!==null&&x!==undefined).length;
  if(resp===0)return{risco:"—",acao:"Pontue os 10 itens à beira do leito.",cor:"info"};
  if(resp<10)return{risco:`Parcial ${s} — faltam ${10-resp}`,acao:"Continue pontuando.",cor:"info"};
  if(s<10)return{risco:`Escore ${s}/67 — abstinência LEVE`,acao:"Geralmente manejo de suporte: ambiente calmo, hidratação, TIAMINA 300 mg IM/VO (antes de glicose), reposição de eletrólitos (Mg, K). Reavaliar CIWA-Ar a cada 4-8h. BZD em geral não necessário se persistir <10. Tratar comorbidades.",cor:"warn"};
  if(s<=18)return{risco:`Escore ${s}/67 — abstinência MODERADA`,acao:"Iniciar BENZODIAZEPÍNICO sintomático (esquema guiado por sintomas): ex. diazepam 10-20 mg VO ou lorazepam 2-4 mg (preferir lorazepam em hepatopatia/idoso). Tiamina 300 mg/dia. Reavaliar CIWA-Ar a cada 1-2h e re-dosar conforme escore. Monitorar. Considerar encaminhamento.",cor:"crit"};
  return{risco:`Escore ${s}/67 — abstinência GRAVE`,acao:"⚠ Alto risco de CONVULSÃO e DELIRIUM TREMENS (emergência, mortalidade significativa). BZD em dose alta guiada por sintomas, monitorização, suporte. Tiamina parenteral. ENCAMINHAR/INTERNAR (estabilizar e referenciar para retaguarda hospitalar). Vigiar via aérea, hidratação, eletrólitos, hipoglicemia.",cor:"crit"};
}
}

);


CALCS.push(

/* ============================================================
   MEEM — Mini-Exame do Estado Mental (entrada por domínio + corte por escolaridade)
   ============================================================ */
{id:"meem", contexto:["ubs"], nome:"MEEM — Mini-Exame do Estado Mental (rastreio cognitivo)", sis:"psiq",
desc:"Rastreio cognitivo global (0-30). Pontue cada domínio aplicando o teste; informe a escolaridade para usar o ponto de corte brasileiro (Brucki et al., 2003). NÃO diagnostica demência — é rastreio; sofre influência de escolaridade, humor, delirium e sensório. Confirme com avaliação clínica e funcional (Pfeffer) e, se preciso, neuropsicologia.",
fields:[
{tipo:"select",id:"esc",label:"Escolaridade (define o ponto de corte — Brucki 2003)",opts:[{val:20,label:"Analfabeto (corte <20)"},{val:25,label:"1 a 4 anos (corte <25)"},{val:26,label:"5 a 8 anos (corte <26)"},{val:28,label:"9 a 11 anos (corte <28)"},{val:29,label:">11 anos (corte <29)"}]},
{tipo:"num",id:"ot",label:"Orientação TEMPORAL — ano, estação, mês, dia do mês, dia da semana (0-5)"},
{tipo:"num",id:"oe",label:"Orientação ESPACIAL — estado, cidade, bairro/local, prédio, andar (0-5)"},
{tipo:"num",id:"reg",label:"Memória imediata / REGISTRO — repetir 3 palavras (0-3)"},
{tipo:"num",id:"ac",label:"Atenção e CÁLCULO — 100−7 sucessivos (5×) ou soletrar MUNDO ao contrário (0-5)"},
{tipo:"num",id:"ev",label:"EVOCAÇÃO — repetir as 3 palavras após distração (0-3)"},
{tipo:"num",id:"ling",label:"LINGUAGEM e praxia — nomear(2), repetir frase(1), comando 3 etapas(3), ler/obedecer(1), escrever frase(1), copiar pentágonos(1) (0-9)"},
],
calc:function(v){
  const cl=(x,max)=>Math.max(0,Math.min(max,parseInt(x)||0));
  return cl(v.ot,5)+cl(v.oe,5)+cl(v.reg,3)+cl(v.ac,5)+cl(v.ev,3)+cl(v.ling,9);
},
interp:function(s,v){
  const dom=["ot","oe","reg","ac","ev","ling"];
  const algum=dom.some(k=>v[k]!==null&&v[k]!==undefined);
  if(!algum)return{risco:"—",acao:"Pontue os domínios após aplicar o teste e informe a escolaridade.",cor:"info"};
  if(v.esc===null||v.esc===undefined)return{risco:`Escore ${s}/30 — informe a escolaridade`,acao:"Selecione a escolaridade para aplicar o ponto de corte.",cor:"info"};
  const corte=parseInt(v.esc);
  if(s>=corte)return{risco:`Escore ${s}/30 — dentro do esperado para a escolaridade (corte <${corte})`,acao:"Rastreio sem alteração cognitiva global no momento. Se há queixa de memória com MEEM normal, considerar comprometimento cognitivo leve (rastreio mais sensível: MoCA) e avaliação funcional (Pfeffer/IQCODE). Reavaliar ao longo do tempo.",cor:"ok"};
  return{risco:`Escore ${s}/30 — ABAIXO do corte (<${corte}) para a escolaridade`,acao:"Sugere comprometimento cognitivo — INVESTIGAR. Afastar causas reversíveis: delirium (CAM), depressão (GDS-15/PHQ-9), fármacos (anticolinérgicos, BZD), hipotireoidismo, B12/folato, sífilis/HIV conforme risco, distúrbios metabólicos, déficit sensorial. Avaliação funcional (Pfeffer/IQCODE) e estadiamento (CDR). Neuroimagem conforme indicação. Encaminhar geriatria/neuro se demência provável.",cor:"warn"};
}
},

/* ============================================================
   Mini-Cog — Rastreio cognitivo ultrarrápido
   ============================================================ */
{id:"mini-cog", contexto:["ubs","pa"], nome:"Mini-Cog — Rastreio Cognitivo Rápido (3 min)", sis:"psiq",
desc:"Rastreio breve: evocação de 3 palavras + desenho do relógio. Pouca influência da escolaridade; útil quando o tempo é curto. Escore 0-5. Positivo (suspeita de comprometimento) quando total <3. Uso livre.",
fields:[
{tipo:"select",id:"rec",label:"EVOCAÇÃO — quantas das 3 palavras o paciente lembrou (após desenhar o relógio)?",opts:[{val:0,label:"0 palavras"},{val:1,label:"1 palavra"},{val:2,label:"2 palavras"},{val:3,label:"3 palavras"}]},
{tipo:"select",id:"clk",label:"RELÓGIO — desenhar relógio com todos os números e ponteiros marcando 11h10",opts:[{val:2,label:"Normal (números e ponteiros corretos) = 2"},{val:0,label:"Anormal = 0"}]},
],
calc:function(v){return (parseInt(v.rec)||0)+(parseInt(v.clk)||0);},
interp:function(s,v){
  if((v.rec===null||v.rec===undefined)&&(v.clk===null||v.clk===undefined))return{risco:"—",acao:"Aplique a evocação das 3 palavras e o teste do relógio.",cor:"info"};
  if(v.rec===null||v.rec===undefined||v.clk===null||v.clk===undefined)return{risco:`Parcial ${s}/5`,acao:"Complete evocação e relógio.",cor:"info"};
  if(s>=3)return{risco:`Escore ${s}/5 — rastreio NEGATIVO`,acao:"Baixa probabilidade de comprometimento cognitivo. Se persiste queixa, complementar com MEEM/MoCA e avaliação funcional.",cor:"ok"};
  return{risco:`Escore ${s}/5 — rastreio POSITIVO`,acao:"Sugere comprometimento cognitivo — aprofundar com MEEM, avaliação funcional (Pfeffer/IQCODE) e investigação de causas reversíveis (ver MEEM). Estadiar (CDR) e encaminhar conforme necessidade.",cor:"warn"};
}
},

/* ============================================================
   Fluência Verbal Semântica (animais) — corte por escolaridade
   ============================================================ */
{id:"fluencia-verbal", contexto:["ubs"], nome:"Fluência Verbal Semântica (animais / 1 min)", sis:"psiq",
desc:"Conte quantos ANIMAIS diferentes o paciente nomeia em 1 minuto. Avalia memória semântica, linguagem e função executiva. Cortes brasileiros (Brucki & Rocha, 2004): <8 anos de escolaridade → corte 9; ≥8 anos → corte 13. Abaixo do corte sugere alteração. Uso livre.",
fields:[
{tipo:"select",id:"esc",label:"Escolaridade",opts:[{val:9,label:"<8 anos (corte <9)"},{val:13,label:"≥8 anos (corte <13)"}]},
{tipo:"num",id:"n",label:"Nº de animais diferentes nomeados em 1 minuto"},
],
calc:function(v){return parseInt(v.n)||0;},
interp:function(s,v){
  if(v.n===null||v.n===undefined)return{risco:"—",acao:"Informe o nº de animais e a escolaridade.",cor:"info"};
  if(v.esc===null||v.esc===undefined)return{risco:`${s} animais — informe a escolaridade`,acao:"Selecione a escolaridade para aplicar o corte.",cor:"info"};
  const corte=parseInt(v.esc);
  if(s>=corte)return{risco:`${s} animais — dentro do esperado (corte <${corte})`,acao:"Sem alteração neste teste. Interpretar no conjunto (MEEM, funcional).",cor:"ok"};
  return{risco:`${s} animais — ABAIXO do corte (<${corte})`,acao:"Desempenho reduzido — pode refletir comprometimento cognitivo, baixa escolaridade, depressão ou disfunção executiva. Complementar com MEEM/MoCA, avaliação funcional e investigação de causas. Não isolar este teste.",cor:"warn"};
}
},

/* ============================================================
   FAB — Frontal Assessment Battery
   ============================================================ */
{id:"fab", contexto:["ubs"], nome:"FAB — Bateria de Avaliação Frontal", sis:"psiq",
desc:"Avalia funções executivas/frontais em 6 provas (0-3 cada; total 0-18). Útil para suspeita de síndrome disexecutiva / demência frontotemporal e para diferenciar de Alzheimer típico. Escore mais baixo = pior; ≤12 sugere disfunção frontal (ajustar por escolaridade). Uso livre.",
fields:(function(){
  const L=["1. Semelhanças (conceituação) — em que banana e laranja se parecem? etc.","2. Fluência lexical — palavras com a letra M em 1 min","3. Séries motoras (Luria) — punho-borda-palma","4. Instruções conflitantes — bater 1× quando eu bater 2×","5. Go/No-Go — bater 1× quando eu bater 1×, NÃO bater quando eu bater 2×","6. Comportamento de preensão — não pegar as mãos do examinador"];
  const o=[{val:0,label:"0"},{val:1,label:"1"},{val:2,label:"2"},{val:3,label:"3"}];
  return L.map((l,i)=>({tipo:"select",id:"q"+(i+1),label:l,opts:o}));
})(),
calc:function(v){let s=0;for(let i=1;i<=6;i++)s+=parseInt(v["q"+i])||0;return s;},
interp:function(s,v){
  const resp=Array.from({length:6},(_,i)=>v["q"+(i+1)]).filter(x=>x!==null&&x!==undefined).length;
  if(resp===0)return{risco:"—",acao:"Pontue as 6 provas (0-3).",cor:"info"};
  if(resp<6)return{risco:`Parcial ${s}/18 — faltam ${6-resp}`,acao:"Continue pontuando.",cor:"info"};
  if(s>12)return{risco:`Escore ${s}/18 — sem disfunção frontal evidente`,acao:"Funções executivas preservadas neste rastreio. Interpretar com a clínica e escolaridade.",cor:"ok"};
  return{risco:`Escore ${s}/18 — sugere DISFUNÇÃO FRONTAL/executiva`,acao:"Aprofundar: avaliação neuropsicológica (Wisconsin/Stroop/Trilhas — ver fichas), neuroimagem conforme indicação. Considerar demência frontotemporal, vascular, ou disfunção executiva de outras causas. Correlacionar com comportamento/funcionalidade e MEEM.",cor:"warn"};
}
},

/* ============================================================
   IQCODE (16 itens) — declínio cognitivo pelo INFORMANTE
   ============================================================ */
{id:"iqcode", contexto:["ubs"], nome:"IQCODE — Declínio Cognitivo (informante, 16 itens)", sis:"psiq",
desc:"Questionário ao INFORMANTE comparando o paciente com 10 anos atrás. Independe da escolaridade do paciente — útil quando há baixa escolaridade (em que o MEEM falha). 16 itens (1 muito melhor … 5 muito pior). Resultado = média; ≥3,3 sugere declínio cognitivo. Uso livre.",
fields:(function(){
  const L=["1. Reconhecer rostos de familiares e amigos","2. Lembrar os nomes de familiares e amigos","3. Lembrar coisas sobre familiares/amigos (profissão, aniversário, endereço)","4. Lembrar de coisas que aconteceram recentemente","5. Recordar conversas alguns dias depois","6. Lembrar o próprio endereço e telefone","7. Lembrar que dia e mês são","8. Lembrar onde as coisas são normalmente guardadas","9. Encontrar coisas guardadas em lugar diferente do habitual","10. Saber usar aparelhos domésticos conhecidos","11. Aprender a usar um aparelho/máquina novo","12. Aprender coisas novas em geral","13. Acompanhar uma história (livro ou TV)","14. Tomar decisões em assuntos do dia a dia","15. Lidar com dinheiro nas compras","16. Lidar com assuntos financeiros (banco, aposentadoria)"];
  const o=[{val:1,label:"1 — Muito melhor"},{val:2,label:"2 — Um pouco melhor"},{val:3,label:"3 — Pouca mudança"},{val:4,label:"4 — Um pouco pior"},{val:5,label:"5 — Muito pior"}];
  return L.map((l,i)=>({tipo:"select",id:"q"+(i+1),label:l,opts:o}));
})(),
calc:function(v){
  let s=0,n=0;
  for(let i=1;i<=16;i++){const x=parseInt(v["q"+i]);if(!isNaN(x)){s+=x;n++;}}
  return n? (s/n) : 0;
},
interp:function(m,v){
  const resp=Array.from({length:16},(_,i)=>v["q"+(i+1)]).filter(x=>x!==null&&x!==undefined).length;
  if(resp===0)return{risco:"—",acao:"O informante deve responder os 16 itens.",cor:"info"};
  if(resp<16)return{risco:`Parcial — média ${m.toFixed(2)} (faltam ${16-resp})`,acao:"Continue respondendo.",cor:"info"};
  if(m<3.3)return{risco:`Média ${m.toFixed(2)} — abaixo do corte (3,3)`,acao:"Sem indício de declínio relevante pelo relato do informante. Se houver queixa, complementar com rastreio direto (MEEM/Mini-Cog) e reavaliar.",cor:"ok"};
  return{risco:`Média ${m.toFixed(2)} — SUGERE declínio cognitivo (≥3,3)`,acao:"Indica piora em relação ao basal. Combinar com rastreio direto (MEEM), avaliação funcional (Pfeffer), estadiamento (CDR) e investigação de causas reversíveis. Encaminhar conforme necessidade.",cor:"warn"};
}
},

/* ============================================================
   Pfeffer (FAQ) — Atividades Funcionais (informante)
   ============================================================ */
{id:"pfeffer", contexto:["ubs"], nome:"Pfeffer (FAQ) — Atividades Funcionais Instrumentais", sis:"psiq",
desc:"Questionário ao INFORMANTE sobre a capacidade do paciente em 10 atividades instrumentais. 0 (normal/capaz) a 3 (dependente). Total 0-30. ≥5 sugere comprometimento funcional relevante (apoia o diagnóstico de demência junto ao declínio cognitivo). Uso livre.",
fields:(function(){
  const L=["1. Lidar com finanças (contas, talão, impostos)","2. Fazer compras sozinho (comida, roupa, casa)","3. Esquentar água/café e apagar o fogo","4. Preparar uma refeição","5. Manter-se em dia com acontecimentos e notícias","6. Prestar atenção e entender/discutir um programa, livro, revista","7. Lembrar de compromissos, datas, medicações","8. Cuidar da própria medicação (dose e horário corretos)","9. Andar pela vizinhança e voltar para casa","10. Cumprimentar amigos adequadamente / ser deixado em casa sozinho com segurança"];
  const o=[{val:0,label:"0 — Normal / capaz"},{val:1,label:"1 — Faz com dificuldade"},{val:2,label:"2 — Precisa de ajuda"},{val:3,label:"3 — Não é capaz / dependente"}];
  return L.map((l,i)=>({tipo:"select",id:"q"+(i+1),label:l,opts:o}));
})(),
calc:function(v){let s=0;for(let i=1;i<=10;i++)s+=parseInt(v["q"+i])||0;return s;},
interp:function(s,v){
  const resp=Array.from({length:10},(_,i)=>v["q"+(i+1)]).filter(x=>x!==null&&x!==undefined).length;
  if(resp===0)return{risco:"—",acao:"O informante responde sobre as 10 atividades.",cor:"info"};
  if(resp<10)return{risco:`Parcial ${s}/30 — faltam ${10-resp}`,acao:"Continue respondendo.",cor:"info"};
  if(s<5)return{risco:`Escore ${s}/30 — funcionalidade preservada`,acao:"Sem comprometimento funcional instrumental relevante. Se há déficit cognitivo isolado sem perda funcional, considerar comprometimento cognitivo leve.",cor:"ok"};
  return{risco:`Escore ${s}/30 — COMPROMETIMENTO funcional (≥5)`,acao:"Perda de autonomia instrumental — junto a déficit cognitivo, apoia diagnóstico de demência. Estadiar (CDR), planejar cuidado e segurança (medicação supervisionada, risco de quedas/perder-se), apoio ao cuidador, rede e benefícios. Investigar causas e encaminhar.",cor:"warn"};
}
},

/* ============================================================
   AD8 — Entrevista de rastreio de demência (informante/paciente)
   ============================================================ */
{id:"ad8", contexto:["ubs","pa"], nome:"AD8 — Rastreio Rápido de Demência (8 itens)", sis:"psiq",
desc:"8 perguntas de SIM/NÃO sobre MUDANÇAS (por doença cognitiva) nos últimos anos. Respondido pelo informante (ou pelo próprio paciente). ≥2 respostas 'Sim' sugere alteração cognitiva e indica avaliação mais detalhada. Rápido e independe de escolaridade. Uso livre.",
fields:(function(){
  const L=["1. Problemas de julgamento (decisões ruins, golpes financeiros)","2. Redução do interesse por hobbies/atividades","3. Repete as mesmas perguntas, histórias ou afirmações","4. Dificuldade de aprender a usar aparelho/ferramenta/eletrodoméstico","5. Esquece o mês ou o ano correto","6. Dificuldade de lidar com assuntos financeiros complexos","7. Dificuldade de lembrar compromissos","8. Problemas diários de pensamento e memória"];
  const o=[{val:0,label:"Não / sem mudança"},{val:1,label:"Sim, houve mudança"}];
  return L.map((l,i)=>({tipo:"select",id:"q"+(i+1),label:l,opts:o}));
})(),
calc:function(v){let s=0;for(let i=1;i<=8;i++)s+=parseInt(v["q"+i])||0;return s;},
interp:function(s,v){
  const resp=Array.from({length:8},(_,i)=>v["q"+(i+1)]).filter(x=>x!==null&&x!==undefined).length;
  if(resp===0)return{risco:"—",acao:"Responda os 8 itens (informante de preferência).",cor:"info"};
  if(resp<8)return{risco:`Parcial ${s} 'sim' — faltam ${8-resp}`,acao:"Continue respondendo.",cor:"info"};
  if(s<2)return{risco:`${s}/8 'sim' — rastreio NEGATIVO`,acao:"Baixa probabilidade de alteração cognitiva. Reavaliar se surgirem mudanças.",cor:"ok"};
  return{risco:`${s}/8 'sim' — rastreio POSITIVO (≥2)`,acao:"Sugere mudança cognitiva — aprofundar com MEEM/Mini-Cog, avaliação funcional (Pfeffer/IQCODE), estadiamento (CDR) e investigação de causas reversíveis. Encaminhar conforme necessidade.",cor:"warn"};
}
}

);


CALCS.push(

/* ============================================================
   CDR — Clinical Dementia Rating (estadiamento) — algoritmo de Morris + CDR-SB
   ============================================================ */
{id:"cdr", contexto:["ubs"], nome:"CDR — Estadiamento de Demência (Clinical Dementia Rating)", sis:"psiq",
desc:"Estadia a gravidade da demência a partir de 6 domínios (Memória é primária). Saídas: CDR global (algoritmo de Morris) e CDR Soma das Caixas (CDR-SB, 0-18). 0 = normal; 0,5 = questionável/CCL; 1 = leve; 2 = moderada; 3 = grave. Baseado em entrevista com paciente E informante. Para fins formais/perícia, confirme com a calculadora oficial (Washington University).",
fields:(function(){
  const dom=[
    ["m","MEMÓRIA"],["o","ORIENTAÇÃO"],["j","JULGAMENTO e solução de problemas"],
    ["c","ASSUNTOS na COMUNIDADE (trabalho, compras, finanças)"],["h","LAR e HOBBIES"],["p","CUIDADOS PESSOAIS"]
  ];
  const o=[{val:0,label:"0 — nenhum"},{val:0.5,label:"0,5 — questionável"},{val:1,label:"1 — leve"},{val:2,label:"2 — moderado"},{val:3,label:"3 — grave"}];
  const oP=[{val:0,label:"0 — totalmente capaz"},{val:1,label:"1 — precisa ser lembrado"},{val:2,label:"2 — precisa de ajuda"},{val:3,label:"3 — dependente / requer muita ajuda"}];
  return dom.map(([id,l])=>({tipo:"select",id:id,label:l,opts:id==="p"?oP:o}));
})(),
calc:function(v){
  const ks=["m","o","j","c","h","p"];
  if(ks.some(k=>v[k]===null||v[k]===undefined||isNaN(parseFloat(v[k])))) return "—";
  const M=parseFloat(v.m);
  const sec=["o","j","c","h","p"].map(k=>parseFloat(v[k]));
  const sb=M+sec.reduce((a,b)=>a+b,0);
  function majC(arr,Mref){
    const f={}; arr.forEach(x=>f[x]=(f[x]||0)+1);
    let best=[],bc=0;
    Object.keys(f).forEach(k=>{const c=f[k],val=parseFloat(k);if(c>bc){bc=c;best=[val];}else if(c===bc){best.push(val);}});
    best.sort((a,b)=>Math.abs(a-Mref)-Math.abs(b-Mref));
    return best[0];
  }
  let g;
  if(M===0){ g = sec.filter(x=>x>=0.5).length>=2 ? 0.5 : 0; }
  else if(M===0.5){ g = sec.filter(x=>x>=1).length>=3 ? 1 : 0.5; }
  else {
    const eq=sec.filter(x=>x===M).length, gt=sec.filter(x=>x>M), lt=sec.filter(x=>x<M);
    if(eq>=3) g=M;
    else if(gt.length>=3) g=majC(gt,M);
    else if(lt.length>=3) g=majC(lt,M);
    else g=M;
  }
  return {label:`CDR ${g} · SB ${sb}`, global:g, sb:sb};
},
interp:function(s,v){
  if(s==="—"||!s||typeof s!=="object") return {risco:"—",acao:"Pontue os 6 domínios (entrevista com paciente e informante).",cor:"info"};
  const g=s.global, sb=s.sb;
  const mapa={0:["normal","Sem demência. Se há queixa, reavaliar e considerar comprometimento cognitivo leve.","ok"],
    0.5:["QUESTIONÁVEL / comprometimento cognitivo leve","Acompanhar de perto; investigar causas reversíveis; avaliação cognitiva (MEEM/MoCA) e funcional seriadas. Nem todo CDR 0,5 evolui para demência.","warn"],
    1:["demência LEVE","Confirmar etiologia, iniciar manejo (anticolinesterásico se Alzheimer/misto conforme avaliação), segurança (medicação, direção, finanças), apoio ao cuidador, rede e benefícios.","warn"],
    2:["demência MODERADA","Reforçar segurança e supervisão, manejo de sintomas comportamentais (não-farmacológico 1º), suporte intensivo ao cuidador, planejar cuidados.","crit"],
    3:["demência GRAVE","Cuidado predominante de conforto e dignidade, prevenção de complicações (deglutição, pele, quedas), diretivas de cuidado, suporte ao cuidador/família.","crit"]};
  const m=mapa[g]||["—","",""];
  return {risco:`CDR global ${g} (${m[0]}) · Soma das Caixas = ${sb}/18`,acao:m[1],cor:m[2]};
}
},

/* ============================================================
   AIMS — Discinesia tardia (movimentos involuntários por antipsicótico)
   ============================================================ */
{id:"aims", contexto:["ubs"], nome:"AIMS — Discinesia Tardia (movimentos involuntários)", sis:"psiq",
desc:"Abnormal Involuntary Movement Scale. Rastreia/monitora DISCINESIA TARDIA em quem usa antipsicóticos. Itens 1-7 (face/boca, extremidades, tronco) de 0-4. Critério de positividade (Schooler-Kane): escore ≥2 em pelo menos 2 áreas OU ≥3 em pelo menos 1 área, em uso de antipsicótico. Avaliar periodicamente. Uso livre.",
fields:(function(){
  const L=["1. Músculos da expressão FACIAL (testa, sobrancelhas, pálpebras)","2. LÁBIOS e região perioral","3. MANDÍBULA (morder, abrir/fechar, lateralizar)","4. LÍNGUA (movimentos involuntários, sem protrusão)","5. Extremidades SUPERIORES (braços, mãos, dedos)","6. Extremidades INFERIORES (pernas, pés, dedos)","7. PESCOÇO/TRONCO/quadris (balanço, torção)"];
  const o=[{val:0,label:"0 — nenhum"},{val:1,label:"1 — mínimo"},{val:2,label:"2 — leve"},{val:3,label:"3 — moderado"},{val:4,label:"4 — grave"}];
  return L.map((l,i)=>({tipo:"select",id:"q"+(i+1),label:l,opts:o}));
})(),
calc:function(v){let s=0;for(let i=1;i<=7;i++)s+=parseInt(v["q"+i])||0;return s;},
interp:function(s,v){
  const vals=Array.from({length:7},(_,i)=>v["q"+(i+1)]);
  const resp=vals.filter(x=>x!==null&&x!==undefined).length;
  if(resp===0)return{risco:"—",acao:"Pontue as 7 áreas (0-4) após o exame padronizado.",cor:"info"};
  if(resp<7)return{risco:`Parcial ${s}/28 — faltam ${7-resp}`,acao:"Continue pontuando.",cor:"info"};
  const n2=vals.filter(x=>(parseInt(x)||0)>=2).length;
  const algum3=vals.some(x=>(parseInt(x)||0)>=3);
  const positivo = algum3 || n2>=2;
  if(!positivo)return{risco:`Soma ${s}/28 — critério NÃO preenchido`,acao:"Sem discinesia significativa no momento. Manter monitorização periódica (a cada 3-6 meses em uso de antipsicótico; mais frequente com típicos/idosos).",cor:"ok"};
  return{risco:`Soma ${s}/28 — critério de DISCINESIA TARDIA preenchido`,acao:"Movimentos involuntários compatíveis com discinesia tardia (em uso de antipsicótico). Conduta: reavaliar necessidade/dose do antipsicótico; preferir trocar típico → atípico de menor risco; considerar reduzir gradualmente quando possível. Tratamento específico: inibidores de VMAT2 (valbenazina, deutetrabenazina) onde disponíveis. Evitar anticolinérgico (piora discinesia). Encaminhar psiquiatria. Documentar evolução com AIMS seriado.",cor:"crit"};
}
},

/* ============================================================
   Barnes — Acatisia induzida por antipsicótico
   ============================================================ */
{id:"barnes", contexto:["ubs"], nome:"Barnes (BARS) — Acatisia por Antipsicótico", sis:"psiq",
desc:"Barnes Akathisia Rating Scale. Avalia ACATISIA (inquietude motora, incapacidade de ficar parado) em uso de antipsicóticos. Itens objetivo/subjetivos + uma avaliação clínica GLOBAL (0-5) que define a gravidade. Uso livre.",
fields:[
{tipo:"select",id:"obj",label:"Objetivo — inquietude motora observada",opts:[{val:0,label:"0 — normal"},{val:1,label:"1 — inquietude ocasional"},{val:2,label:"2 — frequente"},{val:3,label:"3 — constante"}]},
{tipo:"select",id:"sub_c",label:"Subjetivo — consciência de inquietude",opts:[{val:0,label:"0 — ausente"},{val:1,label:"1 — inespecífica"},{val:2,label:"2 — incapaz de manter pernas paradas"},{val:3,label:"3 — desejo intenso de se mover"}]},
{tipo:"select",id:"sub_d",label:"Subjetivo — angústia relacionada à inquietude",opts:[{val:0,label:"0 — nenhuma"},{val:1,label:"1 — leve"},{val:2,label:"2 — moderada"},{val:3,label:"3 — intensa"}]},
{tipo:"select",id:"glob",label:"Avaliação clínica GLOBAL da acatisia",opts:[{val:0,label:"0 — ausente"},{val:1,label:"1 — questionável"},{val:2,label:"2 — leve"},{val:3,label:"3 — moderada"},{val:4,label:"4 — acentuada"},{val:5,label:"5 — grave"}]},
],
calc:function(v){return parseInt(v.glob); },
interp:function(s,v){
  if(v.glob===null||v.glob===undefined||isNaN(s))return{risco:"—",acao:"Avalie os itens e, sobretudo, a avaliação global (0-5).",cor:"info"};
  if(s===0)return{risco:`Global ${s}/5 — sem acatisia`,acao:"Sem acatisia. Manter monitorização ao introduzir/aumentar antipsicótico.",cor:"ok"};
  if(s===1)return{risco:`Global ${s}/5 — acatisia QUESTIONÁVEL`,acao:"Observar e reavaliar. Diferenciar de ansiedade/agitação psicótica e de síndrome das pernas inquietas.",cor:"warn"};
  if(s<=3)return{risco:`Global ${s}/5 — acatisia LEVE a MODERADA`,acao:"Conduta: reduzir a dose do antipsicótico quando possível ou trocar por um de menor risco. Opções farmacológicas: propranolol 10-40 mg 2-3×/dia (1ª linha) se sem contraindicação; alternativas: benzodiazepínico curto (clonazepam) ou anticolinérgico (biperideno) em casos selecionados. Reavaliar.",cor:"warn"};
  return{risco:`Global ${s}/5 — acatisia ACENTUADA/GRAVE`,acao:"Acatisia importante (risco de sofrimento e má adesão; associada a impulsividade). Rever urgentemente o antipsicótico (reduzir/trocar). Propranolol 10-40 mg 2-3×/dia; considerar benzodiazepínico. Encaminhar psiquiatria. Documentar e monitorar.",cor:"crit"};
}
},

/* ============================================================
   Simpson-Angus — Parkinsonismo medicamentoso
   ============================================================ */
{id:"simpson-angus", contexto:["ubs"], nome:"Simpson-Angus (SAS) — Parkinsonismo por Antipsicótico", sis:"psiq",
desc:"Simpson-Angus Scale. Avalia sinais de PARKINSONISMO induzido por antipsicótico (rigidez, tremor, bradicinesia). 10 itens de 0-4 (total 0-40; média = total/10). Média >0,3 (total >3) sugere parkinsonismo. Monitorar em uso de antipsicótico, sobretudo típicos e idosos. Uso livre.",
fields:(function(){
  const L=["1. Marcha (redução do balanço dos braços, passos)","2. Queda dos braços (deixar cair ao lado do corpo)","3. Balanço dos ombros (resistência à movimentação passiva)","4. Rigidez do cotovelo","5. Rigidez/fixação do punho","6. Pêndulo das pernas (oscilação após estender)","7. Queda da cabeça (ao soltar, em decúbito)","8. Reflexo glabelar (piscar à percussão)","9. Tremor","10. Salivação"];
  const o=[{val:0,label:"0 — ausente/normal"},{val:1,label:"1 — mínimo"},{val:2,label:"2 — leve"},{val:3,label:"3 — moderado"},{val:4,label:"4 — grave"}];
  return L.map((l,i)=>({tipo:"select",id:"q"+(i+1),label:l,opts:o}));
})(),
calc:function(v){let s=0;for(let i=1;i<=10;i++)s+=parseInt(v["q"+i])||0;return s;},
interp:function(s,v){
  const resp=Array.from({length:10},(_,i)=>v["q"+(i+1)]).filter(x=>x!==null&&x!==undefined).length;
  if(resp===0)return{risco:"—",acao:"Pontue os 10 itens (0-4).",cor:"info"};
  if(resp<10)return{risco:`Parcial ${s}/40 — faltam ${10-resp}`,acao:"Continue pontuando.",cor:"info"};
  const media=(s/10).toFixed(2);
  if(s<=3)return{risco:`Soma ${s}/40 (média ${media}) — sem parkinsonismo significativo`,acao:"Sem parkinsonismo relevante. Manter monitorização ao introduzir/aumentar antipsicótico.",cor:"ok"};
  if(s<=12)return{risco:`Soma ${s}/40 (média ${media}) — parkinsonismo LEVE-MODERADO`,acao:"Conduta: reduzir a dose ou trocar por antipsicótico de menor risco extrapiramidal. Anticolinérgico se necessário: biperideno 2 mg 1-2×/dia (cautela em idoso — carga anticolinérgica, confusão). Reavaliar. Diferenciar de Parkinson idiopático.",cor:"warn"};
  return{risco:`Soma ${s}/40 (média ${media}) — parkinsonismo ACENTUADO`,acao:"Parkinsonismo importante. Rever o antipsicótico (reduzir/trocar) com prioridade. Biperideno 2 mg 1-2×/dia conforme tolerância. Vigiar quedas e disfagia. Encaminhar psiquiatria. Documentar com SAS seriado.",cor:"crit"};
}
}

);
