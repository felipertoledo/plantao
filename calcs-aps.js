/* ===========================================================
   VOVÔMINIC DOUTÔ — calcs/aps.js
   4 calculadoras APS (saúde mental + álcool + função familiar)
   =========================================================== */

CALCS.push(

{id:"phq-2", contexto:["ubs","pa"], nome:"PHQ-2 — Rastreio Rápido de Depressão (2 itens)", sis:"psiq",
desc:"Triagem ultra-rápida em 2 perguntas (≤1 min). Validado em APS. Sensibilidade ~83%, especificidade ~92% para depressão maior. Score ≥3 = aprofundar com PHQ-9.",
fields:[
{tipo:"select", id:"q1", label:"Nas últimas 2 semanas, quão frequentemente teve POUCO INTERESSE OU PRAZER em fazer as coisas?",
  opts:[
    {val:0,label:"Nenhuma vez (0)"},
    {val:1,label:"Vários dias (1)"},
    {val:2,label:"Mais da metade dos dias (2)"},
    {val:3,label:"Quase todos os dias (3)"},
  ]},
{tipo:"select", id:"q2", label:"Nas últimas 2 semanas, quão frequentemente se sentiu DESANIMADO/A, DEPRIMIDO/A OU SEM ESPERANÇA?",
  opts:[
    {val:0,label:"Nenhuma vez (0)"},
    {val:1,label:"Vários dias (1)"},
    {val:2,label:"Mais da metade dos dias (2)"},
    {val:3,label:"Quase todos os dias (3)"},
  ]},
],
calc:function(v){
  return parseInt(v.q1||0) + parseInt(v.q2||0);
},
interp:function(s){
  if(s<3) return {risco:`Score ${s}/6 — Triagem NEGATIVA`, acao:"Improvável depressão maior. Manter vigilância clínica se sintomas surgirem.", cor:"ok"};
  return {risco:`Score ${s}/6 — Triagem POSITIVA`, acao:"Aplicar PHQ-9 completo para confirmar e quantificar gravidade. Avaliar risco de suicídio. Investigar comorbidades. Considerar tratamento (psicoterapia ± ISRS).", cor:"warn"};
}
},

{id:"gad-7", contexto:["ubs","pa"], nome:"GAD-7 — Generalized Anxiety Disorder Scale", sis:"psiq",
desc:"Escala validada de ansiedade generalizada (7 itens, 5 min). Identifica TAG, mas também correlaciona com pânico, ansiedade social, TEPT. Sensibilidade ~89%, especificidade ~82% para TAG.",
fields:[
{tipo:"select", id:"q1", label:"Nas últimas 2 sem: sentir-se nervoso/a, ansioso/a ou no limite?",
  opts:[{val:0,label:"Nenhuma vez"},{val:1,label:"Vários dias"},{val:2,label:"Mais da metade"},{val:3,label:"Quase todos os dias"}]},
{tipo:"select", id:"q2", label:"Não conseguir parar ou controlar preocupação?",
  opts:[{val:0,label:"Nenhuma vez"},{val:1,label:"Vários dias"},{val:2,label:"Mais da metade"},{val:3,label:"Quase todos os dias"}]},
{tipo:"select", id:"q3", label:"Preocupar-se muito com várias coisas?",
  opts:[{val:0,label:"Nenhuma vez"},{val:1,label:"Vários dias"},{val:2,label:"Mais da metade"},{val:3,label:"Quase todos os dias"}]},
{tipo:"select", id:"q4", label:"Dificuldade para relaxar?",
  opts:[{val:0,label:"Nenhuma vez"},{val:1,label:"Vários dias"},{val:2,label:"Mais da metade"},{val:3,label:"Quase todos os dias"}]},
{tipo:"select", id:"q5", label:"Inquietação a ponto de não conseguir ficar parado?",
  opts:[{val:0,label:"Nenhuma vez"},{val:1,label:"Vários dias"},{val:2,label:"Mais da metade"},{val:3,label:"Quase todos os dias"}]},
{tipo:"select", id:"q6", label:"Irritar-se ou aborrecer-se facilmente?",
  opts:[{val:0,label:"Nenhuma vez"},{val:1,label:"Vários dias"},{val:2,label:"Mais da metade"},{val:3,label:"Quase todos os dias"}]},
{tipo:"select", id:"q7", label:"Sentir medo como se algo terrível fosse acontecer?",
  opts:[{val:0,label:"Nenhuma vez"},{val:1,label:"Vários dias"},{val:2,label:"Mais da metade"},{val:3,label:"Quase todos os dias"}]},
],
calc:function(v){
  let s = 0;
  for(let i=1;i<=7;i++) s += parseInt(v["q"+i]||0);
  return s;
},
interp:function(s){
  if(s<=4) return {risco:`Score ${s}/21 — Ansiedade MÍNIMA`, acao:"Sem indicação de transtorno ansioso. Reavaliar se sintomas piorarem.", cor:"ok"};
  if(s<=9) return {risco:`Score ${s}/21 — Ansiedade LEVE`, acao:"Manejo não-farmacológico: higiene do sono, atividade física, mindfulness, técnicas de respiração. Acompanhar. Considerar psicoterapia (TCC) se incômodo.", cor:"warn"};
  if(s<=14) return {risco:`Score ${s}/21 — Ansiedade MODERADA`, acao:"TCC (1ª linha) + considerar ISRS (sertralina 25-50 mg, escitalopram 5-10 mg). Investigar comorbidade (depressão — PHQ-9). NÃO benzodiazepínico crônico.", cor:"warn"};
  return {risco:`Score ${s}/21 — Ansiedade GRAVE`, acao:"Tratamento medicamentoso indicado: ISRS dose otimizada + TCC. Avaliar risco de suicídio. Considerar encaminhamento psiquiatria se refratariedade ou comorbidade complexa.", cor:"crit"};
}
},

{id:"audit-completo", contexto:["ubs","pa"], nome:"AUDIT — Alcohol Use Disorders Identification Test (10 itens)", sis:"psiq",
desc:"Padrão-ouro para rastreio de problemas com álcool em APS. 10 itens. Desenvolvido pela OMS. Identifica desde 'uso de risco' até 'dependência'. Validado em português. Aplicar a TODO adulto pelo menos anualmente.",
fields:[
{tipo:"select", id:"q1", label:"1. Frequência: com que frequência você consome alguma bebida alcoólica?",
  opts:[{val:0,label:"Nunca"},{val:1,label:"Mensalmente ou menos"},{val:2,label:"2-4 vezes/mês"},{val:3,label:"2-3 vezes/sem"},{val:4,label:"4 ou mais vezes/sem"}]},
{tipo:"select", id:"q2", label:"2. Quantas doses de álcool num dia normal que está bebendo?",
  opts:[{val:0,label:"1 ou 2"},{val:1,label:"3 ou 4"},{val:2,label:"5 ou 6"},{val:3,label:"7-9"},{val:4,label:"10 ou mais"}]},
{tipo:"select", id:"q3", label:"3. Com que frequência consumiu 6 ou mais doses numa única ocasião?",
  opts:[{val:0,label:"Nunca"},{val:1,label:"Menos de 1 vez/mês"},{val:2,label:"Mensalmente"},{val:3,label:"Semanalmente"},{val:4,label:"Diariamente/quase diariamente"}]},
{tipo:"select", id:"q4", label:"4. No último ano, com que frequência sentiu que NÃO conseguia parar de beber depois de começar?",
  opts:[{val:0,label:"Nunca"},{val:1,label:"Menos de 1 vez/mês"},{val:2,label:"Mensalmente"},{val:3,label:"Semanalmente"},{val:4,label:"Diariamente/quase diariamente"}]},
{tipo:"select", id:"q5", label:"5. No último ano, com que frequência DEIXOU DE FAZER algo que deveria por causa de beber?",
  opts:[{val:0,label:"Nunca"},{val:1,label:"Menos de 1 vez/mês"},{val:2,label:"Mensalmente"},{val:3,label:"Semanalmente"},{val:4,label:"Diariamente/quase diariamente"}]},
{tipo:"select", id:"q6", label:"6. No último ano, com que frequência PRECISOU BEBER pela manhã para se sentir bem?",
  opts:[{val:0,label:"Nunca"},{val:1,label:"Menos de 1 vez/mês"},{val:2,label:"Mensalmente"},{val:3,label:"Semanalmente"},{val:4,label:"Diariamente/quase diariamente"}]},
{tipo:"select", id:"q7", label:"7. No último ano, com que frequência se sentiu CULPADO/A por beber?",
  opts:[{val:0,label:"Nunca"},{val:1,label:"Menos de 1 vez/mês"},{val:2,label:"Mensalmente"},{val:3,label:"Semanalmente"},{val:4,label:"Diariamente/quase diariamente"}]},
{tipo:"select", id:"q8", label:"8. No último ano, com que frequência NÃO LEMBROU do que aconteceu por causa do álcool?",
  opts:[{val:0,label:"Nunca"},{val:1,label:"Menos de 1 vez/mês"},{val:2,label:"Mensalmente"},{val:3,label:"Semanalmente"},{val:4,label:"Diariamente/quase diariamente"}]},
{tipo:"select", id:"q9", label:"9. Já se machucou ou machucou alguém por causa do álcool?",
  opts:[{val:0,label:"Não"},{val:2,label:"Sim, mas não no último ano"},{val:4,label:"Sim, no último ano"}]},
{tipo:"select", id:"q10", label:"10. Alguém (familiar, amigo, profissional) já se PREOCUPOU com sua bebida ou sugeriu que parasse/diminuísse?",
  opts:[{val:0,label:"Não"},{val:2,label:"Sim, mas não no último ano"},{val:4,label:"Sim, no último ano"}]},
],
calc:function(v){
  let s = 0;
  for(let i=1;i<=10;i++) s += parseInt(v["q"+i]||0);
  return s;
},
interp:function(s){
  if(s<=7) return {risco:`Score ${s}/40 — Zona I (uso de baixo risco)`, acao:"Reforçar uso responsável. Educação preventiva. Reavaliar anualmente.", cor:"ok"};
  if(s<=15) return {risco:`Score ${s}/40 — Zona II (uso de RISCO)`, acao:"INTERVENÇÃO BREVE: 5-10 min de conversa estruturada na consulta — feedback sobre risco, definição de metas, sugestões práticas, monitoramento. Reavaliar em 4-6 sem. NNT excelente.", cor:"warn"};
  if(s<=19) return {risco:`Score ${s}/40 — Zona III (uso NOCIVO / abuso)`, acao:"Intervenção breve intensiva + acompanhamento próximo. Avaliar comorbidade (depressão, ansiedade). Considerar encaminhar CAPS-AD. Apoio familiar.", cor:"crit"};
  return {risco:`Score ${s}/40 — Zona IV (provável DEPENDÊNCIA)`, acao:"Provável dependência alcoólica. Encaminhar CAPS-AD para tratamento intensivo. Avaliar abstinência (CIWA-Ar) se uso pesado recente. Considerar naltrexona/acamprosato (especialista). Apoio familiar e socioterapia.", cor:"crit"};
}
},

{id:"apgar-familiar", contexto:["ubs"], nome:"APGAR Familiar — Função Familiar (Smilkstein)", sis:"ost",
desc:"Avalia satisfação do paciente com função familiar em 5 dimensões (Adaptação, Companheirismo, Crescimento, Afeição, Resolução). Ferramenta clássica da MFC para diagnóstico psicossocial. Aplicar quando: doença crônica, idoso, gestante, cuidador, sofrimento mental, suspeita de disfunção familiar.",
fields:[
{tipo:"select", id:"q1", label:"ADAPTAÇÃO: Você está satisfeito com a ajuda que recebe da sua família quando algo está incomodando?",
  opts:[{val:0,label:"Nunca/quase nunca (0)"},{val:1,label:"Algumas vezes (1)"},{val:2,label:"Sempre/quase sempre (2)"}]},
{tipo:"select", id:"q2", label:"COMPANHEIRISMO: Você está satisfeito com a maneira que sua família conversa e divide problemas com você?",
  opts:[{val:0,label:"Nunca/quase nunca (0)"},{val:1,label:"Algumas vezes (1)"},{val:2,label:"Sempre/quase sempre (2)"}]},
{tipo:"select", id:"q3", label:"CRESCIMENTO: Você está satisfeito com o que sua família aceita e apoia seus desejos de iniciar novas atividades ou direções?",
  opts:[{val:0,label:"Nunca/quase nunca (0)"},{val:1,label:"Algumas vezes (1)"},{val:2,label:"Sempre/quase sempre (2)"}]},
{tipo:"select", id:"q4", label:"AFEIÇÃO: Você está satisfeito com a forma como sua família expressa carinho e responde a seus sentimentos (raiva, tristeza, amor)?",
  opts:[{val:0,label:"Nunca/quase nunca (0)"},{val:1,label:"Algumas vezes (1)"},{val:2,label:"Sempre/quase sempre (2)"}]},
{tipo:"select", id:"q5", label:"RESOLUÇÃO: Você está satisfeito com a maneira como sua família e você compartilham tempo juntos?",
  opts:[{val:0,label:"Nunca/quase nunca (0)"},{val:1,label:"Algumas vezes (1)"},{val:2,label:"Sempre/quase sempre (2)"}]},
],
calc:function(v){
  let s = 0;
  for(let i=1;i<=5;i++) s += parseInt(v["q"+i]||0);
  return s;
},
interp:function(s){
  if(s>=8) return {risco:`Score ${s}/10 — Família FUNCIONAL`, acao:"Boa função familiar — recurso terapêutico importante. Envolver família como aliada no PTS, especialmente em doença crônica/idoso/criança.", cor:"ok"};
  if(s>=5) return {risco:`Score ${s}/10 — DISFUNÇÃO familiar MODERADA`, acao:"Identificar áreas de fragilidade (item com 0 ou 1). Discussão delicada com paciente. Considerar genograma + ecomapa. NASF/psicologia em casos selecionados. Atenção: rede de apoio limitada → planejamento de cuidado adaptado.", cor:"warn"};
  return {risco:`Score ${s}/10 — DISFUNÇÃO familiar GRAVE`, acao:"Família NÃO é recurso terapêutico — pode ser fator de adoecimento. Aprofundar: violência doméstica? abandono? conflitos graves? Articular CRAS, CREAS (se violência), psicologia, assistência social. Plano de cuidado considera baixo suporte familiar — buscar suporte comunitário/ACS/voluntariado.", cor:"crit"};
}
},

);
