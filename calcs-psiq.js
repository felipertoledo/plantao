/* ============================================================
   ESCALAS PSIQUIÁTRICAS — calcs-psiq.js
   Felipe Ribeiro Toledo / Vovôminic Doutô
   ============================================================ */

CALCS.push(

/* ============================================================
   1. CAGE — Rastreio rápido de uso problemático de álcool (4 itens)
   ============================================================ */
{id:"cage", contexto:["ubs","pa"], nome:"CAGE — Rastreio Rápido de Álcool (4 itens)", sis:"psiq",
desc:"Triagem com 4 perguntas para dependência alcoólica. Acrônimo: Cut down, Annoyed, Guilty, Eye-opener. ≥2 respostas SIM = suspeita de uso problemático (S~70-90%, E~70-90%). Útil em consultas curtas. NÃO substitui AUDIT em casos suspeitos — usar como gatilho para investigação mais profunda.",
fields:[
{tipo:"select", id:"c", label:"C — Você já sentiu que deveria DIMINUIR (Cut down) sua bebida?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"a", label:"A — As pessoas o ABORRECERAM (Annoyed) ao criticar sua bebida?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"g", label:"G — Você se sentiu CULPADO/A (Guilty) por causa da bebida?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"e", label:"E — Você já bebeu logo ao acordar para acalmar nervos / curar ressaca (Eye-opener)?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
],
calc:function(v){
  return ["c","a","g","e"].reduce((s,k)=>s+(parseInt(v[k])||0),0);
},
interp:function(s,v){
  const itensRespondidos = ["c","a","g","e"].filter(k => v[k] !== null && v[k] !== undefined).length;
  if(itensRespondidos === 0) return {risco:"—", acao:"Responda as 4 perguntas.", cor:"info"};
  if(itensRespondidos < 4) return {risco:`Score parcial ${s}/4 — faltam ${4-itensRespondidos} item(ns)`, acao:"Continue respondendo.", cor:"info"};
  const itemE = parseInt(v.e)||0;
  const aviso = itemE === 1 ? " ⚠ ITEM E POSITIVO (beber pela manhã) — sinal específico de dependência grave; atenção especial." : "";
  if(s===0) return {risco:`Score 0/4 — Triagem NEGATIVA`, acao:"Sem sinais de uso problemático. Reforçar consumo responsável. Reavaliar em consultas conforme contexto.", cor:"ok"};
  if(s===1) return {risco:`Score 1/4 — Triagem LIMÍTROFE${aviso}`, acao:"1 SIM isolado: investigar mais — aplicar AUDIT completo (10 itens) para estratificar. Aconselhar redução / reforçar consumo de baixo risco (mulher ≤7 doses/sem, homem ≤14 doses/sem).", cor:"warn"};
  if(s===2) return {risco:`Score 2/4 — Triagem POSITIVA${aviso}`, acao:"SUSPEITA de uso problemático / abuso. Aplicar AUDIT completo. Avaliar dependência (DSM-5: ≥2 critérios). Intervenção breve motivacional. Considerar encaminhar CAPS-AD em dependência confirmada.", cor:"warn"};
  return {risco:`Score ${s}/4 — Triagem ALTAMENTE POSITIVA${aviso}`, acao:"Forte suspeita de DEPENDÊNCIA ALCOÓLICA. Avaliar gravidade (síndrome de dependência DSM-5, sintomas de abstinência prévia). Encaminhar CAPS-AD / serviço especializado. NALTREXONA 50 mg/dia ou ACAMPROSATO 666 mg 3×/dia em manutenção de abstinência conforme avaliação. Em risco de abstinência grave: ver CIWA-Ar.", cor:"crit"};
}
},

/* ============================================================
   2. DAST-10 — Drug Abuse Screening Test (10 itens — drogas)
   ============================================================ */
{id:"dast-10", contexto:["ubs","pa"], nome:"DAST-10 — Rastreio de Uso de Drogas (10 itens)", sis:"psiq",
desc:"Triagem para uso problemático de drogas (excluindo álcool e tabaco). 10 perguntas sim/não sobre últimos 12 meses. Score ≥3 sugere problema de drogas; ≥6 = abuso/dependência provável. Útil em UBS, ambulatório, emergência.",
fields:[
{tipo:"select", id:"q1", label:"1. Já usou drogas SEM ser por motivo médico (auto-administração além do prescrito, ou drogas ilícitas)?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q2", label:"2. Abusa de mais de uma droga ao mesmo tempo?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q3", label:"3. Consegue parar de usar drogas quando deseja?",
  opts:[{val:1,label:"Não (não consegue)"},{val:0,label:"Sim (consegue)"}]},
{tipo:"select", id:"q4", label:"4. Já teve \"apagões\" ou flashbacks por uso de drogas?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q5", label:"5. Sente-se mal ou culpado/a por usar drogas?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q6", label:"6. Seu cônjuge / família / pais já reclamaram do seu uso de drogas?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q7", label:"7. Negligenciou a família / trabalho / estudos por causa do uso de drogas?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q8", label:"8. Esteve envolvido em atividades ilegais para obter drogas?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q9", label:"9. Já teve sintomas de ABSTINÊNCIA (sentir-se mal) ao parar de usar drogas?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q10", label:"10. Já teve problemas MÉDICOS pelo uso de drogas (perda de memória, hepatite, convulsão, sangramento)?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
],
calc:function(v){
  let s = 0;
  for(let i=1;i<=10;i++) s += parseInt(v["q"+i])||0;
  return s;
},
interp:function(s,v){
  const respondidos = Array.from({length:10}, (_,i) => v["q"+(i+1)]).filter(x => x !== null && x !== undefined).length;
  if(respondidos === 0) return {risco:"—", acao:"Responda as 10 perguntas.", cor:"info"};
  if(respondidos < 10) return {risco:`Score parcial ${s} — faltam ${10-respondidos} item(ns)`, acao:"Continue respondendo.", cor:"info"};
  if(s===0) return {risco:`Score 0/10 — Sem evidência de problema com drogas`, acao:"Triagem negativa. Reforçar hábitos saudáveis. Reavaliar conforme contexto.", cor:"ok"};
  if(s<=2) return {risco:`Score ${s}/10 — Nível BAIXO`, acao:"Possível uso experimental ou de baixo risco. Aconselhamento breve + intervenção motivacional. Reavaliação em 6 meses.", cor:"warn"};
  if(s<=5) return {risco:`Score ${s}/10 — Nível MODERADO`, acao:"Uso problemático provável. Avaliação clínica detalhada. Intervenção breve motivacional + considerar encaminhamento ao CAPS-AD. Investigar consequências sociais, ocupacionais, legais.", cor:"warn"};
  if(s<=8) return {risco:`Score ${s}/10 — Nível SUBSTANCIAL`, acao:"Forte suspeita de abuso/dependência. ENCAMINHAR CAPS-AD para avaliação especializada + tratamento. Avaliar comorbidades psiquiátricas. Apoio familiar.", cor:"crit"};
  return {risco:`Score ${s}/10 — Nível GRAVE`, acao:"Dependência grave provável. Encaminhamento URGENTE ao CAPS-AD. Avaliar necessidade de internação para desintoxicação. Suporte psicossocial estruturado. Atenção a comorbidades clínicas / psiquiátricas.", cor:"crit"};
}
},

/* ============================================================
   3. GDS-15 — Geriatric Depression Scale (Escala de Depressão no Idoso)
   ============================================================ */
{id:"gds-15", contexto:["ubs"], nome:"GDS-15 — Geriatric Depression Scale (Depressão no Idoso)", sis:"psiq",
desc:"Escala de Depressão Geriátrica versão curta (15 itens — sim/não). Específica para idosos (≥60a). Score ≥5 sugestivo de depressão; ≥10 = depressão estabelecida. Sensibilidade ~80-90% para depressão maior em idoso. Não substitui CAM em delirium / demência avançada. Útil em AGA, visita domiciliar, UBS.",
fields:[
{tipo:"select", id:"q1", label:"1. Você está satisfeito/a com sua vida?",
  opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q2", label:"2. Você abandonou muitas de suas atividades e interesses?",
  opts:[{val:1,label:"Sim"},{val:0,label:"Não"}]},
{tipo:"select", id:"q3", label:"3. Você sente que sua vida está vazia?",
  opts:[{val:1,label:"Sim"},{val:0,label:"Não"}]},
{tipo:"select", id:"q4", label:"4. Você se aborrece com frequência?",
  opts:[{val:1,label:"Sim"},{val:0,label:"Não"}]},
{tipo:"select", id:"q5", label:"5. Você se sente de bom humor a maior parte do tempo?",
  opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q6", label:"6. Tem medo de que algo ruim vá lhe acontecer?",
  opts:[{val:1,label:"Sim"},{val:0,label:"Não"}]},
{tipo:"select", id:"q7", label:"7. Você se sente feliz a maior parte do tempo?",
  opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q8", label:"8. Sente-se desamparado/a com frequência?",
  opts:[{val:1,label:"Sim"},{val:0,label:"Não"}]},
{tipo:"select", id:"q9", label:"9. Prefere ficar em casa a sair e fazer coisas novas?",
  opts:[{val:1,label:"Sim"},{val:0,label:"Não"}]},
{tipo:"select", id:"q10", label:"10. Sente que tem mais problemas de memória que a maioria?",
  opts:[{val:1,label:"Sim"},{val:0,label:"Não"}]},
{tipo:"select", id:"q11", label:"11. Acha bom estar vivo?",
  opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q12", label:"12. Sente-se inútil nas suas condições atuais?",
  opts:[{val:1,label:"Sim"},{val:0,label:"Não"}]},
{tipo:"select", id:"q13", label:"13. Sente-se cheio/a de energia?",
  opts:[{val:0,label:"Sim"},{val:1,label:"Não"}]},
{tipo:"select", id:"q14", label:"14. Sente que sua situação não tem solução?",
  opts:[{val:1,label:"Sim"},{val:0,label:"Não"}]},
{tipo:"select", id:"q15", label:"15. Acha que a maioria das pessoas está em melhor situação que você?",
  opts:[{val:1,label:"Sim"},{val:0,label:"Não"}]},
],
calc:function(v){
  let s = 0;
  for(let i=1;i<=15;i++) {
    const val = v["q"+i];
    if(val !== null && val !== undefined) s += parseInt(val);
  }
  return s;
},
interp:function(s,v){
  const respondidos = Array.from({length:15}, (_,i) => v["q"+(i+1)]).filter(x => x !== null && x !== undefined).length;
  if(respondidos === 0) return {risco:"—", acao:"Responda as 15 perguntas.", cor:"info"};
  if(respondidos < 15) return {risco:`Score parcial ${s} — faltam ${15-respondidos} item(ns)`, acao:"Continue respondendo.", cor:"info"};
  if(s<=4) return {risco:`Score ${s}/15 — Triagem NEGATIVA`, acao:"Sem indicação de depressão. Reavaliar em mudança clínica / vida. Manter rastreio anual em AGA.", cor:"ok"};
  if(s<=9) return {risco:`Score ${s}/15 — Depressão LEVE a MODERADA — INVESTIGAR`, acao:"Triagem POSITIVA. Aprofundar com entrevista clínica + DSM-5. Avaliar diagnósticos diferenciais (hipotireoidismo, B12, anemia, demência inicial, medicamentos). Intervenção: psicoterapia, ativação comportamental, exercício físico. ISRS (sertralina 25-50 mg, escitalopram 5-10 mg — preferidos no idoso por perfil seguro) — TITULAR LENTA / START LOW GO SLOW; EVITAR amitriptilina (carga anticolinérgica). Reavaliar 4-6 sem.", cor:"warn"};
  return {risco:`Score ${s}/15 — Depressão ESTABELECIDA (grave)`, acao:"Forte sugestão de depressão. Tratamento ATIVO: ISRS + psicoterapia + manejo de comorbidades. Avaliar risco SUICIDA explicitamente (pergunta direta — idoso tem maior letalidade em tentativas). Considerar encaminhar geriatra / psiquiatra. Em sintomas psicóticos / catatonia / refratariedade: discussão multidisciplinar. Suporte familiar + cuidador.", cor:"crit"};
}
},

/* ============================================================
   4. EPDS — Edinburgh Postnatal Depression Scale (10 itens)
   ============================================================ */
{id:"epds", contexto:["ubs"], nome:"EPDS — Depressão Pós-Parto / Gestacional (10 itens)", sis:"psiq",
desc:"Edinburgh Postnatal Depression Scale — escala validada para rastreio de depressão na gestação (qualquer trimestre) e puerpério (até 12 meses pós-parto). 10 itens, score 0-30. Score ≥10 sugestivo de depressão; ≥13 alta probabilidade. ITEM 10 (autolesão) — sempre avaliar diretamente. Aplicar em TODA consulta pré-natal a partir do 2º trim + retorno puerperal.",
fields:[
{tipo:"select", id:"q1", label:"1. Tem sido capaz de rir e ver o lado divertido das coisas?",
  opts:[{val:0,label:"Tanto quanto sempre"},{val:1,label:"Não tanto agora"},{val:2,label:"Definitivamente menos"},{val:3,label:"De jeito nenhum"}]},
{tipo:"select", id:"q2", label:"2. Tem olhado para o futuro com prazer / esperança?",
  opts:[{val:0,label:"Tanto quanto sempre"},{val:1,label:"Bem menos do que antes"},{val:2,label:"Definitivamente menos"},{val:3,label:"Quase nada"}]},
{tipo:"select", id:"q3", label:"3. Tem se culpado sem necessidade quando algo dá errado?",
  opts:[{val:3,label:"Sim, na maioria das vezes"},{val:2,label:"Sim, algumas vezes"},{val:1,label:"Não muito"},{val:0,label:"Não, nunca"}]},
{tipo:"select", id:"q4", label:"4. Tem se sentido ansiosa ou preocupada sem motivo?",
  opts:[{val:0,label:"Não, de jeito nenhum"},{val:1,label:"Quase nada"},{val:2,label:"Sim, às vezes"},{val:3,label:"Sim, muitas vezes"}]},
{tipo:"select", id:"q5", label:"5. Tem se sentido assustada ou em pânico sem motivo?",
  opts:[{val:3,label:"Sim, muitas vezes"},{val:2,label:"Sim, às vezes"},{val:1,label:"Não muito"},{val:0,label:"Não, nunca"}]},
{tipo:"select", id:"q6", label:"6. As coisas têm sido demais para você?",
  opts:[{val:3,label:"Sim, quase sempre — não consigo nem começar"},{val:2,label:"Sim, às vezes — não tenho lidado tão bem"},{val:1,label:"Não, na maior parte do tempo lido bem"},{val:0,label:"Não, lido tão bem quanto sempre"}]},
{tipo:"select", id:"q7", label:"7. Tem se sentido tão infeliz que dorme mal?",
  opts:[{val:3,label:"Sim, na maioria das vezes"},{val:2,label:"Sim, às vezes"},{val:1,label:"Não muito"},{val:0,label:"Não, nunca"}]},
{tipo:"select", id:"q8", label:"8. Tem se sentido triste ou miserável?",
  opts:[{val:3,label:"Sim, quase sempre"},{val:2,label:"Sim, com bastante frequência"},{val:1,label:"Não muito"},{val:0,label:"Não, nunca"}]},
{tipo:"select", id:"q9", label:"9. Tem se sentido tão infeliz que tem chorado?",
  opts:[{val:3,label:"Sim, quase sempre"},{val:2,label:"Sim, com bastante frequência"},{val:1,label:"Apenas ocasionalmente"},{val:0,label:"Não, nunca"}]},
{tipo:"select", id:"q10", label:"10. ⚠ A ideia de fazer mal a si mesma surgiu na sua mente?",
  opts:[{val:3,label:"Sim, com bastante frequência"},{val:2,label:"Algumas vezes"},{val:1,label:"Quase nunca"},{val:0,label:"Nunca"}]},
],
calc:function(v){
  let s = 0;
  for(let i=1;i<=10;i++) {
    const val = v["q"+i];
    if(val !== null && val !== undefined) s += parseInt(val);
  }
  return s;
},
interp:function(s,v){
  const respondidos = Array.from({length:10}, (_,i) => v["q"+(i+1)]).filter(x => x !== null && x !== undefined).length;
  if(respondidos === 0) return {risco:"—", acao:"Responda as 10 perguntas.", cor:"info"};
  if(respondidos < 10) return {risco:`Score parcial ${s} — faltam ${10-respondidos} item(ns)`, acao:"Continue respondendo.", cor:"info"};
  const q10 = parseInt(v.q10)||0;
  const aviso_q10 = q10 > 0 ? " ⚠ ITEM 10 POSITIVO (ideação de auto-lesão) — ABORDAR DIRETAMENTE: avaliar plano, intenção, meios, suporte; considerar segurança do bebê; ENCAMINHAR psiquiatria/CAPS urgência se ativa." : "";
  if(s<=9) return {risco:`Score ${s}/30 — Triagem NEGATIVA${aviso_q10}`, acao:q10 > 0 ? "Apesar do score baixo, IDEAÇÃO de auto-lesão presente — não banalizar; abordar diretamente." : "Sem indicação de depressão. Reavaliar conforme rotina (pré-natal: cada trimestre; pós-parto: visita puerperal + retorno 30/60d).", cor:q10 > 0 ? "crit" : "ok"};
  if(s<=12) return {risco:`Score ${s}/30 — Risco MODERADO de depressão perinatal${aviso_q10}`, acao:"Aprofundar entrevista clínica (DSM-5). Intervenção breve + psicoeducação + suporte social. Considerar psicoterapia + apoio de grupo de mães. Reavaliar 2-4 sem. ISRS (sertralina 50-100 mg/dia — categoria amamentação aceitável; escitalopram alternativo) se sintomas significativos.", cor:"warn"};
  return {risco:`Score ${s}/30 — Risco ALTO de depressão perinatal${aviso_q10}`, acao:"Forte sugestão de depressão perinatal. Tratamento ATIVO: ISRS (sertralina é 1ª linha em gestação/amamentação por melhor perfil — 50-100 mg/dia; ATENÇÃO em 3º trim — adaptação neonatal) + psicoterapia + apoio social estruturado. Suporte familiar + grupo de mães. Avaliar risco suicídio + segurança do bebê. Encaminhar psiquiatria/CAPS se grave / risco suicida / psicose pós-parto. Em PSICOSE PÓS-PARTO (alucinações, paranoia, confusão — geralmente <2 semanas pós-parto): EMERGÊNCIA — internação imediata.", cor:"crit"};
}
},

/* ============================================================
   5. ASRS-v1.1 (Parte A) — Adult ADHD Self-Report Scale (6 itens triagem)
   ============================================================ */
{id:"asrs-v11", contexto:["ubs"], nome:"ASRS-v1.1 (Parte A) — Triagem TDAH Adulto (6 itens)", sis:"psiq",
desc:"Adult ADHD Self-Report Scale validado pela OMS. Parte A (6 itens) é a triagem mais informativa para TDAH em adultos. ≥4 itens em \"frequentemente/muito frequentemente\" (área sombreada) = TRIAGEM POSITIVA — sensibilidade ~69%, especificidade ~99%. Itens 1-3 (desatenção); 4-6 (hiperatividade/impulsividade).",
fields:[
{tipo:"select", id:"q1", label:"1. Quantas vezes você teve dificuldade para terminar os detalhes finais de um projeto após terminar as partes mais difíceis?",
  opts:[{val:0,label:"Nunca"},{val:0,label:"Raramente"},{val:0,label:"Às vezes"},{val:1,label:"Frequentemente"},{val:1,label:"Muito frequentemente"}]},
{tipo:"select", id:"q2", label:"2. Quantas vezes você teve dificuldade em colocar coisas em ordem quando tem que fazer uma tarefa que requer organização?",
  opts:[{val:0,label:"Nunca"},{val:0,label:"Raramente"},{val:0,label:"Às vezes"},{val:1,label:"Frequentemente"},{val:1,label:"Muito frequentemente"}]},
{tipo:"select", id:"q3", label:"3. Quantas vezes você teve dificuldade para lembrar compromissos ou obrigações?",
  opts:[{val:0,label:"Nunca"},{val:0,label:"Raramente"},{val:0,label:"Às vezes"},{val:1,label:"Frequentemente"},{val:1,label:"Muito frequentemente"}]},
{tipo:"select", id:"q4", label:"4. Quando tem uma tarefa que requer muito pensamento, quantas vezes você evita ou adia começá-la?",
  opts:[{val:0,label:"Nunca"},{val:0,label:"Raramente"},{val:1,label:"Às vezes"},{val:1,label:"Frequentemente"},{val:1,label:"Muito frequentemente"}]},
{tipo:"select", id:"q5", label:"5. Quantas vezes você se mexe ou se contorce com as mãos ou pés quando precisa ficar sentado/a por muito tempo?",
  opts:[{val:0,label:"Nunca"},{val:0,label:"Raramente"},{val:1,label:"Às vezes"},{val:1,label:"Frequentemente"},{val:1,label:"Muito frequentemente"}]},
{tipo:"select", id:"q6", label:"6. Quantas vezes você se sente excessivamente ativo/a e compelido/a a fazer coisas — como se fosse movido/a por um motor?",
  opts:[{val:0,label:"Nunca"},{val:0,label:"Raramente"},{val:1,label:"Às vezes"},{val:1,label:"Frequentemente"},{val:1,label:"Muito frequentemente"}]},
],
calc:function(v){
  let s = 0;
  for(let i=1;i<=6;i++) s += parseInt(v["q"+i])||0;
  return s;
},
interp:function(s,v){
  const respondidos = Array.from({length:6}, (_,i) => v["q"+(i+1)]).filter(x => x !== null && x !== undefined).length;
  if(respondidos === 0) return {risco:"—", acao:"Responda as 6 perguntas.", cor:"info"};
  if(respondidos < 6) return {risco:`Score parcial ${s}/6 — faltam ${6-respondidos} item(ns)`, acao:"Continue respondendo.", cor:"info"};
  if(s<4) return {risco:`Score ${s}/6 — Triagem NEGATIVA para TDAH`, acao:"Sintomas atuais não consistentes com TDAH adulto. Investigar diagnósticos alternativos (ansiedade, depressão, distúrbios do sono, uso de substâncias, tireoide). NÃO descartar se forte suspeita clínica — sintomas podem ser mascarados por compensações; considerar avaliação especializada.", cor:"ok"};
  return {risco:`Score ${s}/6 — Triagem POSITIVA para TDAH Adulto`, acao:"Sintomas COMPATÍVEIS com TDAH em adulto (sensibilidade ~69%, especificidade ~99%). PROCEDER com avaliação clínica DETALHADA: critérios DSM-5 (≥5 sintomas de desatenção e/ou ≥5 de hiperatividade/impulsividade; início <12 anos; comprometimento em ≥2 contextos; ≥6 meses; afastar outras causas). HISTÓRIA do desenvolvimento na infância é OBRIGATÓRIA. Aplicar ASRS Parte B (12 itens — sintomas adicionais). Diferenciais: ansiedade, depressão, transtorno de personalidade, distúrbios do sono (apneia, narcolepsia), substâncias. ENCAMINHAR psiquiatria para confirmação + plano terapêutico (metilfenidato LI 5-10 mg 2-3×/dia ou LP - Ritalina LA/Concerta - 18-54 mg/dia 1×/dia matinal; lisdexanfetamina 30-70 mg/dia; atomoxetina 40-100 mg/dia — não-estimulante em casos com substâncias / comorbidade ansiosa).", cor:"warn"};
}
},

/* ============================================================
   6. C-SSRS Triagem — Columbia Suicide Severity Rating Scale (versão triagem)
   ============================================================ */
{id:"c-ssrs", contexto:["ubs","pa"], nome:"C-SSRS Triagem — Risco Suicida (Columbia)", sis:"psiq",
desc:"Columbia Suicide Severity Rating Scale — versão TRIAGEM. Avalia presença/severidade de IDEAÇÃO + COMPORTAMENTO suicida. Padrão-ouro em pesquisa e clínica. PERGUNTAR DIRETAMENTE — falar sobre suicídio NÃO induz; oculta a verdade aumenta risco. Itens hierárquicos — se item 1 NÃO, pula para comportamento. Triagem positiva em QUALQUER item 3+ ou item 6 + 12 meses = risco alto.",
fields:[
{tipo:"select", id:"q1", label:"1. No ÚLTIMO MÊS, você desejou estar morto/a ou poder dormir e não acordar?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q2", label:"2. No último mês, teve PENSAMENTOS de se matar?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q3", label:"3. ⚠ No último mês, pensou em COMO se mataria (método)?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q4", label:"4. ⚠ No último mês, teve esses pensamentos e alguma INTENÇÃO de agir sobre eles?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q5", label:"5. ⚠⚠ No último mês, começou a elaborar PLANO específico para se matar e teve INTENÇÃO de executar?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q6", label:"6. ⚠⚠⚠ Alguma vez na vida fez algo, começou a fazer, ou se preparou para se matar (tentativa, gesto, preparação)?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim — há mais de 3 meses"},{val:2,label:"Sim — nos últimos 3 meses"}]},
],
calc:function(v){
  return ["q1","q2","q3","q4","q5","q6"].reduce((s,k)=>s+(parseInt(v[k])||0),0);
},
interp:function(s,v){
  const respondidos = ["q1","q2","q3","q4","q5","q6"].filter(k => v[k] !== null && v[k] !== undefined).length;
  if(respondidos === 0) return {risco:"—", acao:"Responda as 6 perguntas.", cor:"info"};
  if(respondidos < 6) return {risco:`Resposta parcial — faltam ${6-respondidos} item(ns)`, acao:"Continue respondendo.", cor:"info"};
  const q1 = parseInt(v.q1)||0, q2 = parseInt(v.q2)||0, q3 = parseInt(v.q3)||0;
  const q4 = parseInt(v.q4)||0, q5 = parseInt(v.q5)||0, q6 = parseInt(v.q6)||0;
  
  // Categorias C-SSRS:
  // BAIXO: q1 + q2 = 0 e q6 = 0
  // MODERADO: q1=1 ou q2=1 ou q6=1 (>3m)
  // ALTO: q3=1 ou q4=1 ou q6=2 (<3m)
  // IMINENTE: q5=1 (plano com intenção)
  
  if(q5 === 1) return {risco:"RISCO IMINENTE — Plano com intenção", acao:"⛔ EMERGÊNCIA PSIQUIÁTRICA — paciente NÃO PODE FICAR SOZINHO. Avaliar segurança AGORA: meios à disposição, presença de suporte, abstinência alcoólica/substâncias, autoexposição imediata. Acionar SAMU 192 + transporte SUPERVISIONADO para PA com retaguarda psiquiátrica / hospital geral / CAPS III. NÃO PRESCREVER medicação para casa em quantidade letal. Comunicação à família (sem violar autonomia em paciente capaz, mas em risco iminente: dever de proteção). Pode haver indicação de internação INVOLUNTÁRIA (Lei 10.216/2001).", cor:"crit"};
  
  if(q3 === 1 || q4 === 1 || q6 === 2) return {risco:"RISCO ALTO — Ideação com método ou tentativa recente", acao:"⚠ ATENÇÃO CRÍTICA — Não pode ficar sozinho até estabilização. Avaliar SEGURANÇA: restringir meios (medicações, armas, locais de risco); identificar suporte social. ENCAMINHAR psiquiatria URGENTE (mesma semana, idealmente 24-72h) — CAPS, ambulatório psiquiátrico, hospital-dia. Tratar transtorno de base AGRESSIVAMENTE — antidepressivo (sertralina 50-100 mg/dia; lítio 600-900 mg/dia em bipolar — ÚNICO antidepressivo com evidência ANTI-SUICIDA é o lítio), psicoterapia (TCC para suicidalidade, DBT). RETORNO em 1-2 sem máx. Contato de crise — CVV 188 (24h, gratuito).", cor:"crit"};
  
  if(q1 === 1 || q2 === 1 || q6 === 1) return {risco:"RISCO MODERADO — Ideação passiva ou tentativa antiga", acao:"⚠ Aprofundar: o que aumenta / diminui o risco? Quem dá suporte? Acesso a meios? RESTRINGIR MEIOS (medicações em casa, álcool, armas). Tratar transtorno de base — antidepressivo, psicoterapia, abordagem de comorbidades. ENCAMINHAR ambulatório psiquiatria. RETORNO em 1-2 sem. Plano de segurança escrito (Stanley & Brown — gatilhos, estratégias internas, contatos de apoio, contatos profissionais, restrição de meios). CVV 188.", cor:"warn"};
  
  return {risco:"RISCO BAIXO — Triagem negativa para suicídio atual", acao:"Sem ideação ou comportamento suicida no momento. MANTER vigilância — depressão, crises, gatilhos (perda recente, isolamento, álcool, dor crônica, doença grave) podem mudar quadro. Tratar comorbidades. Reavaliar conforme contexto.", cor:"ok"};
}
},

/* ============================================================
   7. MDQ — Mood Disorder Questionnaire (rastreio Bipolar — 15 itens)
   ============================================================ */
{id:"mdq", contexto:["ubs"], nome:"MDQ — Rastreio Transtorno Bipolar (Mood Disorder Questionnaire)", sis:"psiq",
desc:"Mood Disorder Questionnaire — rastreio de transtorno bipolar em ADULTO. Triagem POSITIVA quando: ≥7 dos 13 itens SIM + sintomas SIMULTÂNEOS + comprometimento moderado/grave. Sensibilidade ~70%, especificidade ~90% para bipolar tipo I. NÃO substitui avaliação psiquiátrica clínica. APLICAR em paciente com depressão atípica / refratária / com sintomas mistos / história familiar.",
fields:[
{tipo:"select", id:"q1", label:"1. Já houve um período em que você não se sentia o seu \"eu normal\" — se sentia tão bem ou tão eufórico que outras pessoas pensavam que estranho? OU estava tão irritável que gritava com pessoas ou começava brigas?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q2", label:"2. Sentia-se tão confiante que conseguia fazer coisas que normalmente não conseguia? OU sentia-se mais autoconfiante que o normal?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q3", label:"3. Dormia muito menos que o normal e descobria que realmente não sentia falta?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q4", label:"4. Estava muito mais falante / falava muito mais rápido que o normal?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q5", label:"5. Os pensamentos corriam pela cabeça / não conseguia desacelerar a mente?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q6", label:"6. Distraía-se tão facilmente por coisas ao redor que tinha dificuldade em se concentrar / ficar focado/a?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q7", label:"7. Tinha muito mais energia que o normal?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q8", label:"8. Estava muito mais ativo/a / fazia muito mais coisas que o normal?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q9", label:"9. Estava muito mais social ou mais extrovertido/a que o normal? Por exemplo, telefonava para amigos no meio da noite?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q10", label:"10. Tinha interesse muito maior que o normal por sexo?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q11", label:"11. Fazia coisas que eram incomuns para você OU que outras pessoas poderiam achar excessivas, tolas ou arriscadas?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q12", label:"12. Gastava dinheiro de forma a causar problemas para você ou sua família?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q13", label:"13. Alguns desses 12 sintomas aconteceram durante o MESMO PERÍODO?",
  opts:[{val:0,label:"Não"},{val:1,label:"Sim"}]},
{tipo:"select", id:"q14", label:"14. Em que grau esses sintomas causaram PROBLEMAS — não conseguir trabalhar, brigas em família, problemas financeiros / legais?",
  opts:[{val:0,label:"Nenhum problema"},{val:0,label:"Problema leve"},{val:1,label:"Problema MODERADO"},{val:1,label:"Problema GRAVE"}]},
],
calc:function(v){
  let s = 0;
  for(let i=1;i<=12;i++) s += parseInt(v["q"+i])||0;
  return s;
},
interp:function(s,v){
  const respondidos = Array.from({length:14}, (_,i) => v["q"+(i+1)]).filter(x => x !== null && x !== undefined).length;
  if(respondidos === 0) return {risco:"—", acao:"Responda as 14 perguntas.", cor:"info"};
  if(respondidos < 14) return {risco:`Score parcial — itens 1-12: ${s}/12 — faltam ${14-respondidos} item(ns)`, acao:"Continue respondendo.", cor:"info"};
  const q13 = parseInt(v.q13)||0;
  const q14 = parseInt(v.q14)||0;
  const positiva = s >= 7 && q13 === 1 && q14 === 1;
  
  if(!positiva) {
    const motivos = [];
    if(s < 7) motivos.push(`apenas ${s}/12 sintomas (mínimo 7)`);
    if(q13 === 0) motivos.push("sintomas não simultâneos");
    if(q14 === 0) motivos.push("sem comprometimento moderado/grave");
    return {risco:`Score ${s}/12 — Triagem NEGATIVA para Bipolar (${motivos.join("; ")})`, acao:"Critérios não preenchidos para triagem positiva (necessita ≥7/12 + simultaneidade + comprometimento moderado/grave). NÃO descartar se forte suspeita clínica — bipolar tipo II / espectro pode ser mascarado. Considerar avaliação clínica detalhada. Avaliar diferenciais (TDAH, transtorno de personalidade borderline, uso de substâncias).", cor:s >= 5 ? "warn" : "ok"};
  }
  
  return {risco:`Score ${s}/12 com simultaneidade + comprometimento — Triagem POSITIVA para Bipolar`, acao:"⚠ ALTA SUSPEITA de TRANSTORNO BIPOLAR — necessita avaliação psiquiátrica. ENCAMINHAR PSIQUIATRIA para confirmação diagnóstica (critérios DSM-5 para mania / hipomania / episódio misto) + plano terapêutico. NÃO INICIAR ANTIDEPRESSIVO ISOLADO em paciente com bipolar suspeito — risco de viragem maníaca + ciclagem rápida. ESTABILIZADORES de humor são pilar: LÍTIO (600-1200 mg/dia, dose por nível 0,6-1,2 mEq/L; UBS — gold standard, único antidepressivo + anti-suicida), VALPROATO (20-30 mg/kg/dia VO em 2-3 tomadas — bipolar misto/rápido — atenção em mulher fértil pela teratogenicidade), CARBAMAZEPINA, LAMOTRIGINA (em episódios depressivos — particular/CEAF). Em episódio agudo: ANTIPSICÓTICO ATÍPICO — RISPERIDONA 1-6 mg/dia, OLANZAPINA 5-20 mg/dia, QUETIAPINA 300-800 mg/dia, ARIPIPRAZOL 10-30 mg/dia (CEAF). Reabilitação psicossocial + psicoeducação.", cor:"crit"};
}
},

/* ============================================================
   8. HADS — Hospital Anxiety and Depression Scale (14 itens)
   ============================================================ */
{id:"hads", contexto:["ubs","pa"], nome:"HADS — Hospital Anxiety and Depression Scale", sis:"psiq",
desc:"Escala validada para rastreio de ansiedade + depressão em hospital geral / paciente com comorbidade clínica. 14 itens (7 ansiedade — ímpares; 7 depressão — pares). Cada subescala 0-21. Score 0-7 normal; 8-10 limítrofe; ≥11 caso provável. Vantagem: não inclui sintomas somáticos (que podem confundir-se com doença clínica) — ideal para oncologia, cardiologia, IRC, neurologia.",
fields:[
{tipo:"select", id:"a1", label:"A1. Sinto-me tenso/a ou contraído/a:",
  opts:[{val:3,label:"Quase sempre"},{val:2,label:"Muitas vezes"},{val:1,label:"De vez em quando"},{val:0,label:"Nunca"}]},
{tipo:"select", id:"d1", label:"D1. Ainda gosto das mesmas coisas que costumava gostar:",
  opts:[{val:0,label:"Sim, igual antes"},{val:1,label:"Não tanto agora"},{val:2,label:"Bem menos agora"},{val:3,label:"Quase não gosto mais"}]},
{tipo:"select", id:"a2", label:"A2. Tenho uma sensação de medo, como se algo terrível fosse acontecer:",
  opts:[{val:3,label:"Sim, muito forte"},{val:2,label:"Sim, mas não muito forte"},{val:1,label:"Um pouco"},{val:0,label:"Não"}]},
{tipo:"select", id:"d2", label:"D2. Dou risada e me divirto quando vejo coisas engraçadas:",
  opts:[{val:0,label:"Tanto quanto antes"},{val:1,label:"Não tanto agora"},{val:2,label:"Quase nunca"},{val:3,label:"Nunca"}]},
{tipo:"select", id:"a3", label:"A3. Estou com a cabeça cheia de preocupações:",
  opts:[{val:3,label:"Quase todo o tempo"},{val:2,label:"Muitas vezes"},{val:1,label:"De vez em quando"},{val:0,label:"Raramente"}]},
{tipo:"select", id:"d3", label:"D3. Sinto-me alegre:",
  opts:[{val:3,label:"Nunca"},{val:2,label:"Poucas vezes"},{val:1,label:"Algumas vezes"},{val:0,label:"Maior parte do tempo"}]},
{tipo:"select", id:"a4", label:"A4. Consigo ficar sentado/a relaxado/a:",
  opts:[{val:0,label:"Sim, sem problemas"},{val:1,label:"Geralmente"},{val:2,label:"Poucas vezes"},{val:3,label:"Nunca"}]},
{tipo:"select", id:"d4", label:"D4. Sinto-me lento/a, como se eu estivesse pesado/a:",
  opts:[{val:3,label:"Quase sempre"},{val:2,label:"Muitas vezes"},{val:1,label:"De vez em quando"},{val:0,label:"Nunca"}]},
{tipo:"select", id:"a5", label:"A5. Tenho uma sensação de medo, como um \"frio na barriga\":",
  opts:[{val:0,label:"Nunca"},{val:1,label:"De vez em quando"},{val:2,label:"Muitas vezes"},{val:3,label:"Quase sempre"}]},
{tipo:"select", id:"d5", label:"D5. Perdi interesse em minha aparência:",
  opts:[{val:3,label:"Completamente"},{val:2,label:"Não me cuido tanto"},{val:1,label:"Talvez não tanto"},{val:0,label:"Cuido-me como antes"}]},
{tipo:"select", id:"a6", label:"A6. Sinto-me inquieto/a, como se não pudesse parar de me mover:",
  opts:[{val:3,label:"Sim, muito"},{val:2,label:"Bastante"},{val:1,label:"Não muito"},{val:0,label:"Nada"}]},
{tipo:"select", id:"d6", label:"D6. Antevejo / espero coisas com prazer:",
  opts:[{val:0,label:"Tanto quanto antes"},{val:1,label:"Não tanto"},{val:2,label:"Bem menos que antes"},{val:3,label:"Quase nada"}]},
{tipo:"select", id:"a7", label:"A7. De repente, tenho uma sensação de pânico:",
  opts:[{val:3,label:"Quase sempre"},{val:2,label:"Muitas vezes"},{val:1,label:"De vez em quando"},{val:0,label:"Nunca"}]},
{tipo:"select", id:"d7", label:"D7. Consigo me divertir com programas de TV, rádio ou livro:",
  opts:[{val:0,label:"Sempre"},{val:1,label:"Várias vezes"},{val:2,label:"Poucas vezes"},{val:3,label:"Quase nunca"}]},
],
calc:function(v){
  const a = ["a1","a2","a3","a4","a5","a6","a7"].reduce((s,k)=>s+(parseInt(v[k])||0),0);
  const d = ["d1","d2","d3","d4","d5","d6","d7"].reduce((s,k)=>s+(parseInt(v[k])||0),0);
  return {a, d, total: a+d, label: `A=${a}/21 · D=${d}/21`};
},
interp:function(r,v){
  const todos = ["a1","a2","a3","a4","a5","a6","a7","d1","d2","d3","d4","d5","d6","d7"];
  const respondidos = todos.filter(k => v[k] !== null && v[k] !== undefined).length;
  if(respondidos === 0) return {risco:"—", acao:"Responda as 14 perguntas.", cor:"info"};
  if(respondidos < 14) return {risco:`Parcial — A=${r.a}/21 · D=${r.d}/21 — faltam ${14-respondidos} item(ns)`, acao:"Continue respondendo.", cor:"info"};
  
  const aCat = r.a <= 7 ? "normal" : r.a <= 10 ? "limítrofe" : "caso";
  const dCat = r.d <= 7 ? "normal" : r.d <= 10 ? "limítrofe" : "caso";
  
  const cor = (r.a >= 11 || r.d >= 11) ? "crit" : (r.a >= 8 || r.d >= 8) ? "warn" : "ok";
  
  return {
    risco: `Ansiedade A=${r.a}/21 (${aCat}) · Depressão D=${r.d}/21 (${dCat})`,
    acao: cor === "ok" ? "Subescalas dentro da normalidade. Reavaliar conforme contexto."
      : cor === "warn" ? "Subescala(s) LIMÍTROFE — aprofundar entrevista clínica. Intervenção psicoeducativa + psicossocial. Reavaliar 4-6 sem. Em sintomas persistentes/progressivos: considerar ISRS / psicoterapia."
      : "Subescala(s) com CASO PROVÁVEL — Indicação de tratamento ativo. Em depressão (D≥11): ISRS (sertralina 50-200 mg/d, escitalopram 10-20 mg/d) + psicoterapia. Em ansiedade (A≥11): ISRS / ISRSN + psicoterapia (TCC). Em PACIENTE COM COMORBIDADE clínica (oncologia, IRC, IC, neurológico, dor crônica): manejo conjunto + atenção a interações + ajuste de dose. Avaliar risco suicida diretamente. Encaminhar psiquiatria se refratário / grave / suicidalidade.",
    cor
  };
}
},


);
