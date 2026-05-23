/* ===========================================================
   VOVÔMINIC DOUTÔ — calcs/aga.js
   4 escalas para Avaliação Geriátrica Ampla (AGA):
   Katz (AVDs), Lawton (AIVDs), PHQ-9 (depressão), MNA-SF (nutrição)
   =========================================================== */

CALCS.push(

{id:"katz-avd", contexto:["ubs"], nome:"Katz — Atividades Básicas de Vida Diária (AVDs)", sis:"ost",
desc:"Avalia INDEPENDÊNCIA em 6 atividades básicas: banhar-se, vestir-se, ir ao banheiro, transferência, continência, alimentar-se. Padrão-ouro para AVDs. Independente em todas = robusto; dependência em ≥3 = idoso frágil dependente. Aplicável em consulta de rotina ou visita domiciliar.",
fields:[
{tipo:"select", id:"banho", label:"BANHO — Toma banho sem ajuda?",
  opts:[
    {val:1,label:"Independente: banha-se completamente sem ajuda OU precisa ajuda apenas para lavar uma única parte (costas/perna)"},
    {val:0,label:"Dependente: precisa ajuda para banhar mais de uma parte do corpo / sair-entrar da banheira / banho completo dado por outros"},
  ]},
{tipo:"select", id:"vestir", label:"VESTIR — Veste-se sem ajuda?",
  opts:[
    {val:1,label:"Independente: pega roupas no armário e veste-se completamente sem ajuda (exceto amarrar sapato — opcional)"},
    {val:0,label:"Dependente: precisa de ajuda para vestir-se ou é vestido por completo"},
  ]},
{tipo:"select", id:"banheiro", label:"BANHEIRO — Vai ao banheiro sem ajuda?",
  opts:[
    {val:1,label:"Independente: vai ao banheiro, usa-o, ajeita roupas e higieniza-se sem ajuda (pode usar bengala/andador)"},
    {val:0,label:"Dependente: recebe ajuda para ir ao banheiro / higienizar-se / usa comadre/papagaio"},
  ]},
{tipo:"select", id:"transf", label:"TRANSFERÊNCIA — Levanta da cama / cadeira sem ajuda?",
  opts:[
    {val:1,label:"Independente: deita/levanta da cama e senta/levanta da cadeira sem ajuda (pode usar apoio mecânico)"},
    {val:0,label:"Dependente: recebe ajuda para deitar/levantar / não sai da cama"},
  ]},
{tipo:"select", id:"continencia", label:"CONTINÊNCIA — Controle urinário e fecal?",
  opts:[
    {val:1,label:"Independente: controle TOTAL urinário e fecal"},
    {val:0,label:"Dependente: incontinência parcial ou total / supervisão para controle / cateter / colostomia gerenciados por outros"},
  ]},
{tipo:"select", id:"alimentar", label:"ALIMENTAÇÃO — Alimenta-se sem ajuda?",
  opts:[
    {val:1,label:"Independente: alimenta-se sem ajuda (exceto cortar carne / passar manteiga — opcional)"},
    {val:0,label:"Dependente: recebe ajuda para alimentar-se / é alimentado por outros / SNE / SNG"},
  ]},
],
calc:function(v){
  let s = 0;
  ["banho","vestir","banheiro","transf","continencia","alimentar"].forEach(k => { s += parseInt(v[k]||0); });
  return s;
},
interp:function(s){
  if(s===6) return {risco:"Score 6/6 — INDEPENDENTE em todas AVDs", acao:"Idoso robusto funcionalmente. Manter atividade física, conexão social, vacinação, rastreios. Reavaliar anual.", cor:"ok"};
  if(s>=4) return {risco:`Score ${s}/6 — DEPENDÊNCIA LEVE (1-2 AVDs)`, acao:"Identificar AVDs comprometidas e causa subjacente (cognitiva, motora, comportamental). Articular fisioterapia/TO, NASF, adaptações ambientais. Avaliar cuidador. Reavaliar 3-6 meses.", cor:"warn"};
  if(s>=2) return {risco:`Score ${s}/6 — DEPENDÊNCIA MODERADA (3-4 AVDs)`, acao:"AGA completa. Plano de cuidado multidisciplinar. Cuidador formal/informal necessário. Articulação NASF, fisio, TO, fono, nutri. Considerar centro-dia / cuidador. Direitos: BPC-LOAS se elegível.", cor:"crit"};
  return {risco:`Score ${s}/6 — DEPENDÊNCIA GRAVE (≥5 AVDs)`, acao:"Idoso totalmente dependente. Cuidador 24h necessário. Discussão cuidados paliativos / abordagem geriátrica avançada. Vigilância de úlceras de pressão, broncoaspiração, contraturas, infecções. Suporte ao cuidador (Síndrome do cuidador).", cor:"crit"};
}
},

{id:"lawton-aivd", contexto:["ubs"], nome:"Lawton — Atividades Instrumentais de Vida Diária (AIVDs)", sis:"ost",
desc:"Avalia funcionalidade INSTRUMENTAL em 8 atividades de vida em comunidade: telefone, compras, alimentação (preparo), arrumar casa, lavar roupa, transporte, medicação, dinheiro. Mais SENSÍVEL que Katz para detectar declínio funcional precoce — alterações em AIVDs precedem AVDs. Aplicação em consulta ou visita.",
fields:[
{tipo:"select", id:"tel", label:"USO DO TELEFONE",
  opts:[
    {val:3,label:"Usa por iniciativa própria (procura no caderno, disca, atende)"},
    {val:2,label:"Disca alguns números conhecidos"},
    {val:1,label:"Atende mas não disca"},
    {val:0,label:"Incapaz de usar"},
  ]},
{tipo:"select", id:"compras", label:"COMPRAS",
  opts:[
    {val:3,label:"Faz todas as compras necessárias independentemente"},
    {val:2,label:"Faz pequenas compras"},
    {val:1,label:"Precisa de companhia para qualquer compra"},
    {val:0,label:"Incapaz de fazer compras"},
  ]},
{tipo:"select", id:"alim_prep", label:"PREPARO DE ALIMENTOS",
  opts:[
    {val:3,label:"Planeja, prepara e serve refeições adequadas independentemente"},
    {val:2,label:"Prepara refeições adequadas se ingredientes fornecidos"},
    {val:1,label:"Esquenta refeições preparadas / prepara refeições inadequadas"},
    {val:0,label:"Precisa que as refeições sejam preparadas e servidas"},
  ]},
{tipo:"select", id:"casa", label:"ARRUMAÇÃO DA CASA",
  opts:[
    {val:3,label:"Mantém a casa sozinho ou com ajuda ocasional (faxina pesada)"},
    {val:2,label:"Faz tarefas leves (lavar louça, arrumar cama)"},
    {val:1,label:"Faz tarefas leves mas não mantém nível aceitável de limpeza"},
    {val:0,label:"Não participa de qualquer tarefa doméstica"},
  ]},
{tipo:"select", id:"roupa", label:"LAVAR ROUPA",
  opts:[
    {val:3,label:"Lava toda sua roupa"},
    {val:2,label:"Lava pequenas peças (meias, calcinha)"},
    {val:1,label:"Toda lavagem feita por terceiros"},
    {val:0,label:"Incapaz"},
  ]},
{tipo:"select", id:"transp", label:"TRANSPORTE",
  opts:[
    {val:3,label:"Viaja independentemente em transporte público ou dirige seu carro"},
    {val:2,label:"Usa táxi / Uber sozinho mas não transporte público"},
    {val:1,label:"Viaja em transporte público com acompanhante"},
    {val:0,label:"Não viaja"},
  ]},
{tipo:"select", id:"med", label:"MEDICAÇÃO",
  opts:[
    {val:3,label:"Toma suas medicações na dose e horário corretos independentemente"},
    {val:2,label:"Toma se preparadas / separadas em doses por terceiro"},
    {val:1,label:"Incapaz de gerenciar medicações"},
    {val:0,label:"Não administrável"},
  ]},
{tipo:"select", id:"dinheiro", label:"GERENCIAR DINHEIRO",
  opts:[
    {val:3,label:"Gerencia suas finanças completamente (saque, contas, banco, pagamentos)"},
    {val:2,label:"Gerencia despesas diárias mas precisa ajuda em decisões maiores (banco, contas)"},
    {val:1,label:"Incapaz de gerenciar dinheiro"},
    {val:0,label:"Sem capacidade de manejo financeiro"},
  ]},
],
calc:function(v){
  let s = 0;
  ["tel","compras","alim_prep","casa","roupa","transp","med","dinheiro"].forEach(k => { s += parseInt(v[k]||0); });
  return s;
},
interp:function(s){
  if(s>=21) return {risco:`Score ${s}/24 — INDEPENDENTE em AIVDs`, acao:"Funcionalidade instrumental preservada. Manter rastreios, atividade social. Reavaliar anual.", cor:"ok"};
  if(s>=18) return {risco:`Score ${s}/24 — Dependência LEVE`, acao:"Identificar AIVDs comprometidas. Investigar causas — declínio cognitivo (CCL/demência), depressão, queda recente, condição clínica nova. AGA. Reavaliar 3-6 m.", cor:"warn"};
  if(s>=10) return {risco:`Score ${s}/24 — Dependência MODERADA`, acao:"Investigação ampliada. Articulação multidisciplinar (NASF, fisio, TO). Apoio familiar. Avaliar cuidador. Adaptações ambientais. Reavaliar comorbidades.", cor:"crit"};
  return {risco:`Score ${s}/24 — Dependência GRAVE`, acao:"Funcionalidade instrumental muito comprometida. Cuidador estável necessário. AGA completa, plano de cuidado avançado. Avaliar BPC-LOAS, curatela parcial se aplicável.", cor:"crit"};
}
},

{id:"phq-9", contexto:["pa","ubs"], nome:"PHQ-9 — Patient Health Questionnaire (Depressão Maior)", sis:"psiq",
desc:"Escala validada em 9 itens para rastreio + diagnóstico + monitorização de DEPRESSÃO MAIOR. Cada item: 0 (nenhuma vez) a 3 (quase todos os dias) — total 0-27. Sensibilidade ~88%, especificidade ~88% para DM. Inclui pergunta direta de IDEAÇÃO SUICIDA (item 9 — sempre abordar).",
fields:[
{tipo:"select", id:"q1", label:"1. Pouco interesse ou pouco prazer em fazer as coisas?",
  opts:[{val:0,label:"Nenhuma vez"},{val:1,label:"Vários dias"},{val:2,label:"Mais da metade dos dias"},{val:3,label:"Quase todos os dias"}]},
{tipo:"select", id:"q2", label:"2. Desânimo, depressão ou sem esperança?",
  opts:[{val:0,label:"Nenhuma vez"},{val:1,label:"Vários dias"},{val:2,label:"Mais da metade dos dias"},{val:3,label:"Quase todos os dias"}]},
{tipo:"select", id:"q3", label:"3. Problemas para pegar no sono / manter o sono OU dormir DEMAIS?",
  opts:[{val:0,label:"Nenhuma vez"},{val:1,label:"Vários dias"},{val:2,label:"Mais da metade dos dias"},{val:3,label:"Quase todos os dias"}]},
{tipo:"select", id:"q4", label:"4. Cansaço ou pouca energia?",
  opts:[{val:0,label:"Nenhuma vez"},{val:1,label:"Vários dias"},{val:2,label:"Mais da metade dos dias"},{val:3,label:"Quase todos os dias"}]},
{tipo:"select", id:"q5", label:"5. Falta de apetite OU comer demais?",
  opts:[{val:0,label:"Nenhuma vez"},{val:1,label:"Vários dias"},{val:2,label:"Mais da metade dos dias"},{val:3,label:"Quase todos os dias"}]},
{tipo:"select", id:"q6", label:"6. Sentir-se mal consigo mesmo — ou um fracasso / decepcionou a família?",
  opts:[{val:0,label:"Nenhuma vez"},{val:1,label:"Vários dias"},{val:2,label:"Mais da metade dos dias"},{val:3,label:"Quase todos os dias"}]},
{tipo:"select", id:"q7", label:"7. Dificuldade para concentrar-se em coisas — ler, TV?",
  opts:[{val:0,label:"Nenhuma vez"},{val:1,label:"Vários dias"},{val:2,label:"Mais da metade dos dias"},{val:3,label:"Quase todos os dias"}]},
{tipo:"select", id:"q8", label:"8. Lentidão para fazer/falar OU inquietação/agitação visível para outros?",
  opts:[{val:0,label:"Nenhuma vez"},{val:1,label:"Vários dias"},{val:2,label:"Mais da metade dos dias"},{val:3,label:"Quase todos os dias"}]},
{tipo:"select", id:"q9", label:"9. ⚠ Pensar que seria melhor estar morto OU se ferir de alguma forma?",
  opts:[{val:0,label:"Nenhuma vez"},{val:1,label:"Vários dias"},{val:2,label:"Mais da metade dos dias"},{val:3,label:"Quase todos os dias"}]},
],
calc:function(v){
  let s = 0;
  for(let i=1;i<=9;i++) s += parseInt(v["q"+i]||0);
  return s;
},
interp:function(s,v){
  const suicida = parseInt(v.q9||0) > 0;
  const aviso_q9 = suicida ? " ⚠ IDEAÇÃO SUICIDA (item 9 POSITIVO) — abordar diretamente, avaliar plano/intenção/meios/suporte. Em ideação ativa com plano: encaminhar PS/CAPS urgência." : "";
  if(s<=4) return {risco:`Score ${s}/27 — Sintomas MÍNIMOS${aviso_q9}`, acao:suicida ? "Apesar do score baixo, IDEAÇÃO SUICIDA presente — não banalizar; avaliar contexto, abordar diretamente, suporte adequado." : "Sem indicação de depressão. Reavaliar se mudança clínica.", cor: suicida ? "crit" : "ok"};
  if(s<=9) return {risco:`Score ${s}/27 — Depressão LEVE${aviso_q9}`, acao:"Vigilância ativa + psicoeducação + intervenção breve (ativação comportamental, higiene do sono, atividade física). Considerar psicoterapia (TCC). Reavaliar 2-4 sem. ISRS geralmente NÃO necessário em leve isolada.", cor:"warn"};
  if(s<=14) return {risco:`Score ${s}/27 — Depressão MODERADA${aviso_q9}`, acao:"INDICADO tratamento: ISRS (sertralina 25-50 mg, escitalopram 5-10 mg — titular) + considerar psicoterapia. Reavaliar 4-6 sem. Em refratariedade: trocar ISRS, ajustar dose.", cor:"warn"};
  if(s<=19) return {risco:`Score ${s}/27 — Depressão MODERADAMENTE GRAVE${aviso_q9}`, acao:"Tratamento ATIVO: ISRS otimizado + psicoterapia. Avaliar risco suicídio explicitamente. Considerar encaminhamento psiquiatria se: comorbidade complexa, refratariedade, ideação suicida significativa.", cor:"crit"};
  return {risco:`Score ${s}/27 — Depressão GRAVE${aviso_q9}`, acao:"Tratamento URGENTE: ISRS dose otimizada + psicoterapia + considerar psiquiatria. Avaliar risco suicídio — em ideação ativa com plano: PS/CAPS urgência. Considerar internação se necessário. Suporte familiar.", cor:"crit"};
}
},

{id:"mna-sf", contexto:["ubs"], nome:"MNA-SF — Mini Nutritional Assessment (Triagem)", sis:"ost",
desc:"Triagem nutricional padrão-ouro em IDOSOS. Versão SHORT-FORM com 6 itens. Score 0-14: ≥12 estado nutricional normal; 8-11 risco de desnutrição; ≤7 desnutrição. Aplicação ~5 min. Recomendado em toda AGA e em paciente com perda ponderal / institucionalizado / hospitalizado.",
fields:[
{tipo:"select", id:"apetite", label:"A. APETITE — Diminuição da ingesta nos últimos 3 meses por perda de apetite, problemas digestivos, dificuldade de mastigação/deglutição?",
  opts:[
    {val:0,label:"Diminuição GRAVE da ingesta"},
    {val:1,label:"Diminuição MODERADA"},
    {val:2,label:"Sem diminuição"},
  ]},
{tipo:"select", id:"peso", label:"B. PERDA DE PESO nos últimos 3 meses",
  opts:[
    {val:0,label:"Perda > 3 kg"},
    {val:1,label:"Não sabe informar"},
    {val:2,label:"Perda entre 1-3 kg"},
    {val:3,label:"Sem perda de peso"},
  ]},
{tipo:"select", id:"mob", label:"C. MOBILIDADE",
  opts:[
    {val:0,label:"Restrito ao leito ou cadeira"},
    {val:1,label:"Sai da cama mas não para a rua"},
    {val:2,label:"Sai da casa para a rua"},
  ]},
{tipo:"select", id:"stress", label:"D. PASSOU POR ESTRESSE PSICOLÓGICO ou DOENÇA AGUDA nos últimos 3 meses?",
  opts:[
    {val:0,label:"Sim"},
    {val:2,label:"Não"},
  ]},
{tipo:"select", id:"neuro", label:"E. PROBLEMAS NEUROPSICOLÓGICOS",
  opts:[
    {val:0,label:"Demência ou depressão GRAVE"},
    {val:1,label:"Demência LEVE"},
    {val:2,label:"Sem problemas neuropsicológicos"},
  ]},
{tipo:"select", id:"imc", label:"F1. IMC — kg/m² (se conhecido) — OU se desconhecido, usar F2 (panturrilha)",
  opts:[
    {val:0,label:"IMC < 19"},
    {val:1,label:"IMC 19 - <21"},
    {val:2,label:"IMC 21 - <23"},
    {val:3,label:"IMC ≥ 23"},
    {val:99,label:"IMC desconhecido — usar F2 abaixo"},
  ]},
{tipo:"select", id:"pant", label:"F2. PANTURRILHA — Circunferência (cm) — APENAS se IMC desconhecido (campo F1 = desconhecido)",
  opts:[
    {val:0,label:"< 31 cm"},
    {val:3,label:"≥ 31 cm"},
    {val:99,label:"Não aplicável (IMC informado em F1)"},
  ]},
],
calc:function(v){
  let s = 0;
  ["apetite","peso","mob","stress","neuro"].forEach(k => { s += parseInt(v[k]||0); });
  // F1 (IMC) tem prioridade; se desconhecido (99), usar F2 (panturrilha)
  const imc = parseInt(v.imc||0);
  const pant = parseInt(v.pant||0);
  if(imc !== 99) s += imc;
  else if(pant !== 99) s += pant;
  return s;
},
interp:function(s){
  if(s>=12) return {risco:`Score ${s}/14 — Estado nutricional NORMAL`, acao:"Sem indicação de intervenção nutricional específica. Manter dieta saudável, atividade física, sociabilidade. Reavaliar anual ou se mudança clínica.", cor:"ok"};
  if(s>=8) return {risco:`Score ${s}/14 — RISCO de desnutrição`, acao:"Intervenção precoce: orientação nutricional dirigida, fortificação alimentar, refeições fracionadas, atenção a fatores ambientais (dentição, deglutição, isolamento, depressão). Articular nutricionista/NASF. Reavaliar 1-3 meses. MNA completo se necessário aprofundar.", cor:"warn"};
  return {risco:`Score ${s}/14 — DESNUTRIÇÃO`, acao:"Avaliação NUTRICIONAL completa + investigação de causa (doença subjacente, depressão, demência, isolamento, dificuldade alimentar). Articulação multidisciplinar (nutri, fono se disfagia, dentista, fisio, saúde mental). Considerar suplemento oral hipercalórico/hiperproteico. Em hospitalizado: rastreio nutricional MANDATÓRIO. Vigilância de sarcopenia, úlcera de pressão.", cor:"crit"};
}
},

);
