/* ===========================================================
   VOVÔMINIC DOUTÔ — calcs/geriatria.js
   9 calculadoras de geriatria e avaliação do idoso
   =========================================================== */

CALCS.push(

{id:"mini-cog", contexto:["ubs","pa"], nome:"Mini-Cog — Triagem Cognitiva 3 min", sis:"neuro",
desc:"Triagem rápida de comprometimento cognitivo. Tempo médio: 3 min. Combina memória (3 palavras) + função executiva/visuoespacial (desenho do relógio). Sensibilidade ~76%, especificidade ~89% para demência. Independente de escolaridade.",
fields:[
{tipo:"select", id:"recall", label:"Recordação tardia (3 palavras: 'limão · chave · balão' — após desenho do relógio)",
  opts:[{val:0,label:"0 palavras recordadas",peso:0},{val:1,label:"1 palavra",peso:1},{val:2,label:"2 palavras",peso:2},{val:3,label:"3 palavras",peso:3}]},
{tipo:"select", id:"clock", label:"Desenho do relógio (com todos os números + ponteiros marcando 11:10)",
  opts:[{val:0,label:"Anormal — números faltando/desorganizados ou ponteiros errados",peso:0},{val:2,label:"Normal — círculo + 12 números + 2 ponteiros corretos",peso:2}]},
],
calc:function(v){
  return parseInt(v.recall||0) + parseInt(v.clock||0);
},
interp:function(s){
  if(s>=3) return {risco:"Triagem NEGATIVA (≥3)", acao:"Cognição preservada na triagem. Se queixa persiste, considerar MMSE/MoCA + investigação.", cor:"ok"};
  return {risco:"Triagem POSITIVA (<3) — provável comprometimento cognitivo", acao:"Aprofundar: MMSE/MoCA + painel laboratorial (TSH, B12, hemograma, função hepática/renal, sódio, cálcio, VDRL) + neuroimagem (TC/RM crânio). Encaminhar neuro/geriatra se confirmado.", cor:"crit"};
}
},

{id:"mmse", contexto:["ubs"], nome:"MMSE / MEEM — Mini-Mental State Examination", sis:"neuro",
desc:"Avaliação cognitiva completa de 30 pontos. Tempo: 10-15 min. Corrigir por escolaridade (Brucki 2003 — Brasil): analfabeto ≥20, 1-4 anos ≥25, 5-8 anos ≥26,5, 9-11 anos ≥28, ≥12 anos ≥29.",
fields:[
{tipo:"num", id:"escol", label:"Anos de escolaridade do paciente", min:0, max:25, step:1},
{tipo:"num", id:"orient_t", label:"Orientação temporal (0-5): ano, estação, mês, dia, dia da semana", min:0, max:5},
{tipo:"num", id:"orient_e", label:"Orientação espacial (0-5): país, estado, cidade, local, andar/cômodo", min:0, max:5},
{tipo:"num", id:"reg", label:"Registro (0-3): repetir 3 palavras imediatamente", min:0, max:3},
{tipo:"num", id:"calc", label:"Atenção/cálculo (0-5): 100-7 sucessivos OU soletrar 'MUNDO' de trás", min:0, max:5},
{tipo:"num", id:"mem", label:"Memória (0-3): recordar as 3 palavras após interferência", min:0, max:3},
{tipo:"num", id:"ling", label:"Linguagem (0-8): nomear 2 objetos, repetir frase, comando 3 etapas, ler/obedecer, escrever, copiar desenho", min:0, max:8},
{tipo:"num", id:"prax", label:"Praxia construtiva (0-1): cópia dos pentágonos sobrepostos", min:0, max:1},
],
calc:function(v){
  let s = 0;
  ["orient_t","orient_e","reg","calc","mem","ling","prax"].forEach(k => { s += parseInt(v[k]||0); });
  return s;
},
interp:function(s,v){
  const esc = parseInt(v.escol||0);
  let corte = 29;
  if(esc===0) corte = 20;
  else if(esc<=4) corte = 25;
  else if(esc<=8) corte = 26;
  else if(esc<=11) corte = 28;
  const dif = corte - s;
  if(s >= corte) return {risco:`Score ${s}/30 — preservado (corte ${corte} para ${esc} anos escolaridade)`, acao:"Função cognitiva geral preservada para a escolaridade. Se queixa persiste apesar de MMSE normal: considerar MoCA (mais sensível para CCL/MCI).", cor:"ok"};
  if(dif<=2) return {risco:`Score ${s}/30 — abaixo (corte ${corte})`, acao:"Comprometimento cognitivo leve sugerido. Investigar com painel laboratorial completo + neuroimagem. Considerar MoCA. Acompanhar evolução.", cor:"warn"};
  return {risco:`Score ${s}/30 — comprometimento moderado-grave (corte ${corte})`, acao:"Provável demência. Painel laboratorial OBRIGATÓRIO (TSH, B12, função hepática/renal, sódio, cálcio, VDRL, HIV se risco) + neuroimagem. Encaminhar neuro/geriatra.", cor:"crit"};
}
},

{id:"moca", contexto:["ubs"], nome:"MoCA — Montreal Cognitive Assessment", sis:"neuro",
desc:"Avaliação cognitiva mais sensível que MMSE para comprometimento cognitivo leve (CCL/MCI). Score 0-30. Corte: ≥26 normal (adicionar 1 ponto se escolaridade ≤12 anos). Tempo: 10-15 min. Versão brasileira validada (Memória-Roterdã).",
fields:[
{tipo:"num", id:"escol", label:"Anos de escolaridade (adiciona +1 se ≤12)", min:0, max:25, step:1},
{tipo:"num", id:"visu", label:"Visuoespacial/Executiva (0-5): trail B alternada + cubo + relógio (3 partes)", min:0, max:5},
{tipo:"num", id:"nom", label:"Nomeação (0-3): 3 animais (leão, rinoceronte, camelo)", min:0, max:3},
{tipo:"num", id:"aten", label:"Atenção (0-6): dígitos diretos + inversos + letra A + 100-7 sucessivos", min:0, max:6},
{tipo:"num", id:"ling", label:"Linguagem (0-3): repetir 2 frases + fluência verbal letra F (≥11 palavras = 1 ponto)", min:0, max:3},
{tipo:"num", id:"abs", label:"Abstração (0-2): semelhança trem-bicicleta + relógio-régua", min:0, max:2},
{tipo:"num", id:"mem", label:"Memória diferida (0-5): recordar 5 palavras após interferência", min:0, max:5},
{tipo:"num", id:"orient", label:"Orientação (0-6): data, mês, ano, dia, lugar, cidade", min:0, max:6},
],
calc:function(v){
  let s = 0;
  ["visu","nom","aten","ling","abs","mem","orient"].forEach(k => { s += parseInt(v[k]||0); });
  if(parseInt(v.escol||0) <= 12) s += 1;
  return s;
},
interp:function(s,v){
  const esc = parseInt(v.escol||0);
  const ajuste = esc<=12 ? " (incluso +1 por escolaridade)" : "";
  if(s>=26) return {risco:`Score ${s}/30${ajuste} — normal`, acao:"Cognição preservada. Se queixa persiste, considerar avaliação neuropsicológica formal.", cor:"ok"};
  if(s>=18) return {risco:`Score ${s}/30${ajuste} — CCL/MCI provável`, acao:"Comprometimento cognitivo leve sugerido. Investigação completa: painel laboratorial + RM (preferível). Acompanhar evolução 6-12 meses. ~10-15%/ano evoluem para demência.", cor:"warn"};
  if(s>=10) return {risco:`Score ${s}/30${ajuste} — demência leve-moderada`, acao:"Investigar etiologia. Encaminhar neurologia/geriatria para diagnóstico diferencial (Alzheimer, vascular, frontotemporal, corpos de Lewy).", cor:"crit"};
  return {risco:`Score ${s}/30${ajuste} — demência moderada-grave`, acao:"Encaminhar especialista. Plano de cuidado familiar, segurança domiciliar, avaliação para benefícios (LOAS/BPC). Antipsicótico se sintomas neuropsiquiátricos — cuidado!", cor:"crit"};
}
},

{id:"gds-15", contexto:["ubs"], nome:"GDS-15 — Geriatric Depression Scale", sis:"psiq",
desc:"Escala de depressão para idosos validada. 15 itens sim/não. Tempo: 5 min. Validada em português. Não usa sintomas somáticos (que se confundem com doença crônica do idoso).",
fields:[
{tipo:"bool", id:"q1", label:"Você está satisfeito com sua vida? (NÃO = 1)", peso:1, inv:true},
{tipo:"bool", id:"q2", label:"Você abandonou muitos de seus interesses e atividades? (SIM = 1)", peso:1},
{tipo:"bool", id:"q3", label:"Você sente que sua vida está vazia? (SIM = 1)", peso:1},
{tipo:"bool", id:"q4", label:"Você se sente frequentemente aborrecido? (SIM = 1)", peso:1},
{tipo:"bool", id:"q5", label:"Você está bem-disposto na maior parte do tempo? (NÃO = 1)", peso:1, inv:true},
{tipo:"bool", id:"q6", label:"Você teme que algo de ruim vá acontecer? (SIM = 1)", peso:1},
{tipo:"bool", id:"q7", label:"Você está feliz na maior parte do tempo? (NÃO = 1)", peso:1, inv:true},
{tipo:"bool", id:"q8", label:"Você se sente frequentemente desamparado? (SIM = 1)", peso:1},
{tipo:"bool", id:"q9", label:"Você prefere ficar em casa do que sair e fazer coisas novas? (SIM = 1)", peso:1},
{tipo:"bool", id:"q10", label:"Você se sente com mais problemas de memória que os outros? (SIM = 1)", peso:1},
{tipo:"bool", id:"q11", label:"Você acha maravilhoso estar vivo agora? (NÃO = 1)", peso:1, inv:true},
{tipo:"bool", id:"q12", label:"Você se sente inútil do jeito que está? (SIM = 1)", peso:1},
{tipo:"bool", id:"q13", label:"Você se sente cheio de energia? (NÃO = 1)", peso:1, inv:true},
{tipo:"bool", id:"q14", label:"Você sente que sua situação é sem esperança? (SIM = 1)", peso:1},
{tipo:"bool", id:"q15", label:"Você acha que a maioria das pessoas está em situação melhor que a sua? (SIM = 1)", peso:1},
],
calc:function(v){
  // Itens invertidos: 1,5,7,11,13 — NÃO=1
  const inv = ["q1","q5","q7","q11","q13"];
  let s = 0;
  for(let i=1;i<=15;i++){
    const k = "q"+i;
    if(inv.includes(k)) { if(!v[k]) s++; }
    else { if(v[k]) s++; }
  }
  return s;
},
interp:function(s){
  if(s<=4) return {risco:`Score ${s}/15 — sem indicação de depressão`, acao:"Rastreio negativo. Reavaliar anualmente ou se mudança clínica.", cor:"ok"};
  if(s<=9) return {risco:`Score ${s}/15 — depressão LEVE/MODERADA`, acao:"Confirmar diagnóstico clínico (DSM-5/CID). Avaliar risco de suicídio. Iniciar manejo: psicoterapia + ISRS em dose inicial baixa (sertralina 25 mg). Reavaliar 4-6 semanas.", cor:"warn"};
  return {risco:`Score ${s}/15 — depressão GRAVE`, acao:"Avaliação urgente de risco SUICÍDIO. Iniciar ISRS + considerar encaminhamento psiquiatria, especialmente se ideação suicida, sintomas psicóticos, refratariedade prévia.", cor:"crit"};
}
},

{id:"tug", contexto:["ubs"], nome:"TUG — Timed Up and Go", sis:"ost",
desc:"Teste funcional de mobilidade e risco de quedas. Paciente sentado em cadeira com encosto, levanta sem apoio das mãos, anda 3 metros, retorna, senta. Cronometrar em segundos. Calçado habitual, auxiliar de marcha permitido se for o uso usual.",
fields:[
{tipo:"num", id:"tempo", label:"Tempo cronometrado (segundos)", min:0, max:120, step:0.1},
{tipo:"bool", id:"aux", label:"Usou auxiliar de marcha (bengala/andador)?"},
{tipo:"bool", id:"obs", label:"Observou: desequilíbrio, hesitação, marcha em bloco, dificuldade ao sentar/levantar?"},
],
calc:function(v){
  return parseFloat(v.tempo||0);
},
interp:function(s,v){
  if(s<10) return {risco:`${s}s — Mobilidade normal`, acao:"Baixo risco de quedas. Manter atividade física regular (força + equilíbrio).", cor:"ok"};
  if(s<12) return {risco:`${s}s — Risco aumentado`, acao:"Iniciar exercício multimodal (equilíbrio + força). Reavaliar 3-6 meses.", cor:"warn"};
  if(s<20) return {risco:`${s}s — Mobilidade reduzida / risco ALTO de quedas`, acao:"Avaliação multifatorial de quedas (medicamentos, postural, sensorial, ambiental, cognitivo). Encaminhar fisioterapia. Adequação ambiental.", cor:"crit"};
  return {risco:`${s}s — Mobilidade muito reduzida / RISCO MUITO ALTO`, acao:"Limitação funcional significativa. Avaliação geriátrica ampliada. Considerar auxiliar de marcha. Adequação domiciliar urgente. NASF/fisioterapia.", cor:"crit"};
}
},

{id:"edmonton-frail", contexto:["ubs"], nome:"Edmonton Frail Scale — Fragilidade", sis:"ost",
desc:"Escala de fragilidade em idosos. 9 domínios + 1 desempenho. Tempo: 10 min. Pode ser aplicada por MFC ou enfermagem treinada. Score 0-17. Identifica idoso frágil que se beneficia de intervenção geriátrica.",
fields:[
{tipo:"select", id:"cog", label:"Cognição (desenho do relógio: 11:10)",
  opts:[{val:0,label:"Sem erro",peso:0},{val:1,label:"Erro leve no espaçamento",peso:1},{val:2,label:"Outros erros",peso:2}]},
{tipo:"select", id:"saude_g", label:"Saúde geral (internações no último ano)",
  opts:[{val:0,label:"Nenhuma",peso:0},{val:1,label:"1-2 internações",peso:1},{val:2,label:"≥3 internações",peso:2}]},
{tipo:"select", id:"saude_p", label:"Saúde geral - percepção da própria saúde",
  opts:[{val:0,label:"Excelente/muito boa/boa",peso:0},{val:1,label:"Razoável",peso:1},{val:2,label:"Ruim",peso:2}]},
{tipo:"select", id:"indep_func", label:"Independência funcional (atividades que precisa de ajuda)",
  opts:[{val:0,label:"0-1 atividade",peso:0},{val:1,label:"2-4 atividades",peso:1},{val:2,label:"5-8 atividades",peso:2}]},
{tipo:"select", id:"social", label:"Suporte social (tem alguém para ajudar quando precisa?)",
  opts:[{val:0,label:"Sempre",peso:0},{val:1,label:"Às vezes",peso:1},{val:2,label:"Nunca",peso:2}]},
{tipo:"select", id:"medic", label:"Uso de medicamentos (≥5 medicamentos diferentes?)",
  opts:[{val:0,label:"Não",peso:0},{val:1,label:"Sim",peso:1}]},
{tipo:"select", id:"esquece", label:"Você frequentemente esquece de tomar a medicação?",
  opts:[{val:0,label:"Não",peso:0},{val:1,label:"Sim",peso:1}]},
{tipo:"select", id:"nutri", label:"Perda de peso recente sem motivo?",
  opts:[{val:0,label:"Não",peso:0},{val:1,label:"Sim",peso:1}]},
{tipo:"select", id:"humor", label:"Você se sente triste ou deprimido?",
  opts:[{val:0,label:"Não",peso:0},{val:1,label:"Sim",peso:1}]},
{tipo:"select", id:"cont", label:"Tem problemas com controle urinário?",
  opts:[{val:0,label:"Não",peso:0},{val:1,label:"Sim",peso:1}]},
{tipo:"select", id:"tug", label:"Desempenho funcional (TUG modificado — 3 metros)",
  opts:[{val:0,label:"0-10 segundos",peso:0},{val:1,label:"11-20 segundos",peso:1},{val:2,label:"≥20 segundos ou recusou",peso:2}]},
],
calc:function(v){
  let s = 0;
  ["cog","saude_g","saude_p","indep_func","social","medic","esquece","nutri","humor","cont","tug"].forEach(k => { s += parseInt(v[k]||0); });
  return s;
},
interp:function(s){
  if(s<=5) return {risco:`Score ${s}/17 — NÃO frágil`, acao:"Idoso robusto. Manter atividade física, conexão social, vacinação, rastreios.", cor:"ok"};
  if(s<=6) return {risco:`Score ${s}/17 — Vulnerável (pré-frágil)`, acao:"Intervenção preventiva: exercício multimodal, otimização medicamentosa, manejo de comorbidades.", cor:"warn"};
  if(s<=8) return {risco:`Score ${s}/17 — Fragilidade LEVE`, acao:"Avaliação Geriátrica Ampliada (AGA). Plano de cuidado multidisciplinar. Otimização medicamentosa (Beers/STOPP-START).", cor:"warn"};
  if(s<=10) return {risco:`Score ${s}/17 — Fragilidade MODERADA`, acao:"Encaminhar Geriatria. AGA completa. Avaliação NASF, fisioterapia, TO, nutricionista. Suporte familiar/cuidador.", cor:"crit"};
  return {risco:`Score ${s}/17 — Fragilidade GRAVE`, acao:"Cuidado paliativo e abordagem geriátrica especializada. Decisões compartilhadas sobre intensidade de intervenções. Suporte cuidador/família. Discussão sobre limitação terapêutica conforme valores do paciente.", cor:"crit"};
}
},

{id:"charlson", contexto:["ubs","pa"], nome:"Charlson Comorbidity Index — Mortalidade em 10 anos", sis:"ost",
desc:"Índice de comorbidade prognóstico — estima mortalidade em 10 anos baseado em comorbidades. Útil em decisão compartilhada sobre intervenções intensivas (cirurgia eletiva, oncológica, etc.).",
fields:[
{tipo:"num", id:"idade", label:"Idade do paciente (em anos)", min:0, max:120, step:1},
{tipo:"bool", id:"iam", label:"Infarto do miocárdio prévio (+1)", peso:1},
{tipo:"bool", id:"icc", label:"Insuficiência cardíaca congestiva (+1)", peso:1},
{tipo:"bool", id:"dvp", label:"Doença vascular periférica (+1)", peso:1},
{tipo:"bool", id:"dcv", label:"AVC ou AIT (sem hemiplegia) (+1)", peso:1},
{tipo:"bool", id:"dem", label:"Demência (+1)", peso:1},
{tipo:"bool", id:"dpoc", label:"DPOC ou doença pulmonar crônica (+1)", peso:1},
{tipo:"bool", id:"reuma", label:"Doença reumatológica (AR, LES, etc.) (+1)", peso:1},
{tipo:"bool", id:"upep", label:"Doença ulcerosa péptica (+1)", peso:1},
{tipo:"bool", id:"hep_leve", label:"Hepatopatia LEVE (sem hipertensão portal) (+1)", peso:1},
{tipo:"bool", id:"dm_sem", label:"DM SEM lesão de órgão-alvo (+1)", peso:1},
{tipo:"bool", id:"hemi", label:"Hemiplegia (+2)", peso:2},
{tipo:"bool", id:"drc", label:"DRC moderada-grave (TFG <60) (+2)", peso:2},
{tipo:"bool", id:"dm_com", label:"DM COM lesão de órgão-alvo (retino/nefro/neuropatia) (+2)", peso:2},
{tipo:"bool", id:"ca_loc", label:"Tumor sólido localizado (+2)", peso:2},
{tipo:"bool", id:"leuc", label:"Leucemia (+2)", peso:2},
{tipo:"bool", id:"linf", label:"Linfoma (+2)", peso:2},
{tipo:"bool", id:"hep_grave", label:"Hepatopatia MODERADA-GRAVE (com hipertensão portal) (+3)", peso:3},
{tipo:"bool", id:"ca_met", label:"Tumor sólido METASTÁTICO (+6)", peso:6},
{tipo:"bool", id:"hiv", label:"HIV/AIDS (+6)", peso:6},
],
calc:function(v){
  let s = 0;
  // Idade: +1 a cada 10 anos a partir de 50
  const idade = parseInt(v.idade||0);
  if(idade>=50) s += Math.floor((idade-40)/10);
  // Comorbidades com peso 1
  ["iam","icc","dvp","dcv","dem","dpoc","reuma","upep","hep_leve","dm_sem"].forEach(k => { if(v[k]) s += 1; });
  // Peso 2
  ["hemi","drc","dm_com","ca_loc","leuc","linf"].forEach(k => { if(v[k]) s += 2; });
  // Peso 3
  if(v.hep_grave) s += 3;
  // Peso 6
  if(v.ca_met) s += 6;
  if(v.hiv) s += 6;
  return s;
},
interp:function(s){
  // Sobrevida estimada em 10 anos
  let sobr;
  if(s<=0) sobr = "~98%";
  else if(s===1) sobr = "~96%";
  else if(s===2) sobr = "~90%";
  else if(s===3) sobr = "~77%";
  else if(s===4) sobr = "~53%";
  else if(s===5) sobr = "~21%";
  else sobr = "<5%";
  if(s<=2) return {risco:`Score ${s} — Sobrevida 10 anos: ${sobr}`, acao:"Baixa comorbidade. Intervenções padrão indicadas. Rastreios de prevenção mantidos.", cor:"ok"};
  if(s<=4) return {risco:`Score ${s} — Sobrevida 10 anos: ${sobr}`, acao:"Comorbidade moderada. Considerar intensidade das intervenções em decisão compartilhada. Avaliar custo-benefício de intervenções com benefício a longo prazo (rastreios oncológicos, etc.).", cor:"warn"};
  return {risco:`Score ${s} — Sobrevida 10 anos: ${sobr}`, acao:"Alta comorbidade. Foco em conforto/qualidade de vida. Reavaliar indicações de rastreio de longa janela (mamografia, colono — discutir compartilhada). Cuidados paliativos podem ser apropriados.", cor:"crit"};
}
},

{id:"ecog-karnofsky", contexto:["ubs","pa"], nome:"Performance Status — ECOG / Karnofsky", sis:"ost",
desc:"Avaliação funcional global. ECOG 0-5 (escala simples), Karnofsky 0-100 (mais detalhada). Útil em oncologia, cuidados paliativos, idoso fragilizado, decisão sobre intensidade terapêutica.",
fields:[
{tipo:"select", id:"ecog", label:"ECOG (Eastern Cooperative Oncology Group)",
  opts:[
    {val:0,label:"0 — Totalmente ativo, sem restrições"},
    {val:1,label:"1 — Restrição em atividades extenuantes, mas ambulatório"},
    {val:2,label:"2 — Ambulatório, autocuidado, mas incapaz de trabalho; em pé >50% das horas acordado"},
    {val:3,label:"3 — Autocuidado limitado, confinado à cama/cadeira >50%"},
    {val:4,label:"4 — Totalmente incapaz, confinado à cama/cadeira"},
    {val:5,label:"5 — Morto"},
  ]},
],
calc:function(v){
  return parseInt(v.ecog||0);
},
interp:function(s){
  const karn = {0:"100% — Normal",1:"80-90% — Atividades normais com esforço",2:"60-70% — Cuida de si mas incapaz trabalho",3:"40-50% — Necessita ajuda considerável",4:"10-30% — Inválido, hospitalização indicada",5:"0%"};
  if(s<=1) return {risco:`ECOG ${s} (KPS ${karn[s]})`, acao:"Performance preservada. Apto a tratamentos intensivos. Decisão terapêutica baseada em outras variáveis.", cor:"ok"};
  if(s===2) return {risco:`ECOG 2 (KPS ${karn[2]})`, acao:"Performance intermediário. Avaliar tolerância a tratamentos. Considerar regimes adaptados. Discussão compartilhada sobre intensidade.", cor:"warn"};
  if(s===3) return {risco:`ECOG 3 (KPS ${karn[3]})`, acao:"Performance baixo. Tratamentos intensivos geralmente NÃO indicados (oncologia: quimioterapia exige ECOG≤2). Foco em conforto, controle de sintomas. Avaliar cuidados paliativos.", cor:"crit"};
  if(s===4) return {risco:`ECOG 4 (KPS ${karn[4]})`, acao:"Performance muito baixo. Cuidados paliativos exclusivos na maioria. Foco em controle de sintomas, qualidade de vida, apoio à família. Discussão sobre limitação terapêutica.", cor:"crit"};
  return {risco:`ECOG 5 — óbito`, acao:"-", cor:"crit"};
}
},

{id:"frax", contexto:["ubs"], nome:"FRAX — Risco de Fratura Osteoporótica em 10 anos", sis:"ost",
desc:"Estimativa simplificada do FRAX adaptada à APS brasileira. Ferramenta da OMS para risco de fratura osteoporótica maior (FOM: vértebra, fêmur, antebraço, úmero) em 10 anos. ⚠ Esta é versão simplificada didática; cálculo formal em frax.shef.ac.uk/FRAX/.",
fields:[
{tipo:"num", id:"idade", label:"Idade (40-90)", min:40, max:90, step:1},
{tipo:"select", id:"sexo", label:"Sexo",
  opts:[{val:0,label:"Masculino"},{val:1,label:"Feminino (+2)"}]},
{tipo:"num", id:"imc", label:"IMC (kg/m²)", min:10, max:60, step:0.1},
{tipo:"bool", id:"frat_prev", label:"Fratura por fragilidade prévia (+2)", peso:2},
{tipo:"bool", id:"frat_fam", label:"História familiar fratura quadril/fragilidade (+1)", peso:1},
{tipo:"bool", id:"fumo", label:"Tabagismo atual (+1)", peso:1},
{tipo:"bool", id:"cortic", label:"Uso de corticoide ≥3 meses (>5mg/dia) (+1)", peso:1},
{tipo:"bool", id:"ar", label:"Artrite reumatoide (+1)", peso:1},
{tipo:"bool", id:"alc", label:"Álcool ≥3 doses/dia (+1)", peso:1},
{tipo:"bool", id:"menop_prec", label:"Menopausa precoce <45 anos (+1)", peso:1},
],
calc:function(v){
  // Score simplificado heurístico (NÃO substitui FRAX real)
  let s = 0;
  const idade = parseInt(v.idade||0);
  if(idade>=70) s += 3;
  else if(idade>=60) s += 2;
  else if(idade>=50) s += 1;
  if(parseInt(v.sexo)===1) s += 2;
  const imc = parseFloat(v.imc||25);
  if(imc<20) s += 2;
  if(v.frat_prev) s += 2;
  if(v.frat_fam) s += 1;
  if(v.fumo) s += 1;
  if(v.cortic) s += 1;
  if(v.ar) s += 1;
  if(v.alc) s += 1;
  if(v.menop_prec) s += 1;
  return s;
},
interp:function(s){
  if(s<=3) return {risco:`Score simplificado ${s} — Risco BAIXO`, acao:"Risco baixo de fratura em 10 anos. Manter atividade física + cálcio + vitamina D + cessação tabagismo. DMO conforme rastreio (mulher ≥65, homem ≥70).", cor:"ok"};
  if(s<=6) return {risco:`Score simplificado ${s} — Risco INTERMEDIÁRIO`, acao:"Solicitar DMO para estratificar T-score. Se T-score ≤-2,5 ou ≤-1,5 com FRAX alto: tratar (bifosfonato — alendronato 70 mg/sem). Cálcio + D. ⚠ Calcular FRAX formal em frax.shef.ac.uk/FRAX/ para decisão precisa.", cor:"warn"};
  return {risco:`Score simplificado ${s} — Risco ALTO`, acao:"Alta probabilidade de fratura. Tratar mesmo SEM aguardar DMO se contraindicação ou indisponível. Alendronato 70 mg/sem + cálcio + vitamina D. Considerar prevenção de quedas. Encaminhar especialista se >2 fraturas vertebrais prevalentes ou refratariedade.", cor:"crit"};
}
},

);
