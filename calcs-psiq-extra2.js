/* ============================================================
   calcs-psiq-extra2.js — Lote 2 de escalas psiquiátricas/cognitivas
   9 calculadoras (livres) + 2 fichas de referência (licenciadas).
   Schema idêntico ao das demais (CALCS.push). sis:"psiq".
   ============================================================ */
(function(){
function inc(v, ks){ for(var i=0;i<ks.length;i++){ if(v[ks[i]]==null) return ks.length; } return -1; }
var O5=[{val:0,label:"0 — Nada/Nenhum"},{val:1,label:"1 — Leve"},{val:2,label:"2 — Moderado"},{val:3,label:"3 — Grave"},{val:4,label:"4 — Extremo"}];

CALCS.push(

/* ===================== ASSIST (OMS) ===================== */
{id:"assist", contexto:["ubs","pa"], sis:"psiq",
 nome:"ASSIST — Rastreio de uso de substâncias (OMS)",
 desc:"Escore de envolvimento por substância (perguntas 2 a 7). Aplicar por substância. Fonte: OMS/ASSIST.",
 fields:[
  {tipo:"select", id:"sub", label:"Substância avaliada", opts:[{val:0,label:"Álcool"},{val:1,label:"Outra (tabaco, maconha, cocaína, sedativos, etc.)"}]},
  {tipo:"select", id:"q2", label:"Q2. Frequência de uso nos últimos 3 meses", opts:[{val:0,label:"Nunca"},{val:2,label:"1–2 vezes"},{val:3,label:"Mensal"},{val:4,label:"Semanal"},{val:6,label:"Diário/quase diário"}]},
  {tipo:"select", id:"q3", label:"Q3. Vontade forte ou urgência de usar", opts:[{val:0,label:"Nunca"},{val:3,label:"1–2 vezes"},{val:4,label:"Mensal"},{val:5,label:"Semanal"},{val:6,label:"Diário/quase diário"}]},
  {tipo:"select", id:"q4", label:"Q4. Problemas (saúde, social, legal, financeiro) pelo uso", opts:[{val:0,label:"Nunca"},{val:3,label:"1–2 vezes"},{val:4,label:"Mensal"},{val:5,label:"Semanal"},{val:6,label:"Diário/quase diário"}]},
  {tipo:"select", id:"q5", label:"Q5. Deixou de fazer o que se esperava por causa do uso", opts:[{val:0,label:"Nunca"},{val:3,label:"1–2 vezes"},{val:4,label:"Mensal"},{val:5,label:"Semanal"},{val:6,label:"Diário/quase diário"}]},
  {tipo:"select", id:"q6", label:"Q6. Alguém demonstrou preocupação com seu uso", opts:[{val:0,label:"Não, nunca"},{val:6,label:"Sim, nos últimos 3 meses"},{val:3,label:"Sim, mas não nos últimos 3 meses"}]},
  {tipo:"select", id:"q7", label:"Q7. Tentou controlar/reduzir/parar e não conseguiu", opts:[{val:0,label:"Não, nunca"},{val:6,label:"Sim, nos últimos 3 meses"},{val:3,label:"Sim, mas não nos últimos 3 meses"}]}
 ],
 calc:function(v){ return ["q2","q3","q4","q5","q6","q7"].reduce(function(a,k){return a+(v[k]||0);},0); },
 interp:function(s,v){
   var n=inc(v,["sub","q2","q3","q4","q5","q6","q7"]); if(n>0) return {risco:"—",acao:"Selecione a substância e responda as 6 perguntas.",cor:"info"};
   var alcool = v.sub===0;
   var lowMax = alcool?10:3;
   if(s<=lowMax) return {risco:"Risco BAIXO (escore "+s+")",acao:"Orientação geral/feedback. Reforçar escolhas saudáveis. Sem intervenção formal necessária agora.",cor:"ok"};
   if(s<=26) return {risco:"Risco MODERADO (escore "+s+")",acao:"Intervenção breve (entrevista motivacional). Acompanhar na APS. Orientar redução de danos.",cor:"warn"};
   return {risco:"Risco ALTO (escore "+s+")",acao:"Provável dependência. Intervenção breve + encaminhar para tratamento mais intensivo (CAPS-AD / especializado).",cor:"crit"};
 }},

/* ===================== 4AT (delirium) ===================== */
{id:"4at", contexto:["ubs","pa"], sis:"psiq",
 nome:"4AT — Rastreio rápido de Delirium",
 desc:"Rastreio de delirium e comprometimento cognitivo (não requer treino). Fonte: MacLullich et al., 4AT.",
 fields:[
  {tipo:"select", id:"al", label:"1. Alerta (nível de consciência)", opts:[{val:0,label:"Normal / vígil"},{val:0,label:"Sonolência leve e transitória (<10s), depois normal"},{val:4,label:"Claramente anormal (muito sonolento ou agitado)"}]},
  {tipo:"select", id:"amt", label:"2. AMT-4 (idade, data de nascimento, local, ano atual)", opts:[{val:0,label:"Nenhum erro"},{val:1,label:"1 erro"},{val:2,label:"2+ erros / não testável"}]},
  {tipo:"select", id:"at", label:"3. Atenção (meses do ano de trás para frente)", opts:[{val:0,label:"≥7 meses corretos"},{val:1,label:"Começa mas <7 / recusa"},{val:2,label:"Não testável (sonolento/desatento)"}]},
  {tipo:"select", id:"ag", label:"4. Mudança aguda OU curso flutuante (últimas 2 semanas, atual)", opts:[{val:0,label:"Não"},{val:4,label:"Sim"}]}
 ],
 calc:function(v){ return ["al","amt","at","ag"].reduce(function(a,k){return a+(v[k]||0);},0); },
 interp:function(s,v){
   var n=inc(v,["al","amt","at","ag"]); if(n>0) return {risco:"—",acao:"Responda os 4 itens.",cor:"info"};
   if(s>=4) return {risco:"Delirium PROVÁVEL (escore "+s+")",acao:"Possível delirium ± comprometimento cognitivo. Investigar causa orgânica (infecção, medicação, metabólico, AVC). Não tratar como depressão.",cor:"crit"};
   if(s>=1) return {risco:"Possível comprometimento cognitivo (escore "+s+")",acao:"Avaliar cognição (MMSE/MoCA) e investigar delirium se curso flutuante.",cor:"warn"};
   return {risco:"Delirium/comprometimento grave improvável (escore 0)",acao:"Não exclui totalmente; reavaliar se mudança clínica.",cor:"ok"};
 }},

/* ===================== ISI (insônia) ===================== */
{id:"isi", contexto:["ubs"], sis:"psiq",
 nome:"ISI — Índice de Gravidade da Insônia",
 desc:"7 itens (0–4). Gravidade da insônia nas últimas 2 semanas. Fonte: Morin, Insomnia Severity Index.",
 fields:[
  {tipo:"select", id:"i1", label:"1. Dificuldade para adormecer", opts:[{val:0,label:"Nenhuma"},{val:1,label:"Leve"},{val:2,label:"Moderada"},{val:3,label:"Grave"},{val:4,label:"Muito grave"}]},
  {tipo:"select", id:"i2", label:"2. Dificuldade para manter o sono", opts:[{val:0,label:"Nenhuma"},{val:1,label:"Leve"},{val:2,label:"Moderada"},{val:3,label:"Grave"},{val:4,label:"Muito grave"}]},
  {tipo:"select", id:"i3", label:"3. Despertar muito cedo", opts:[{val:0,label:"Nenhum"},{val:1,label:"Leve"},{val:2,label:"Moderado"},{val:3,label:"Grave"},{val:4,label:"Muito grave"}]},
  {tipo:"select", id:"i4", label:"4. Satisfação com o sono atual", opts:[{val:0,label:"Muito satisfeito"},{val:1,label:"Satisfeito"},{val:2,label:"Neutro"},{val:3,label:"Insatisfeito"},{val:4,label:"Muito insatisfeito"}]},
  {tipo:"select", id:"i5", label:"5. Interferência no funcionamento diário", opts:[{val:0,label:"Nenhuma"},{val:1,label:"Pouca"},{val:2,label:"Alguma"},{val:3,label:"Muita"},{val:4,label:"Extrema"}]},
  {tipo:"select", id:"i6", label:"6. O quanto seu problema de sono é perceptível aos outros", opts:[{val:0,label:"Nada"},{val:1,label:"Pouco"},{val:2,label:"Um pouco"},{val:3,label:"Muito"},{val:4,label:"Extremamente"}]},
  {tipo:"select", id:"i7", label:"7. Preocupação/angústia com o sono", opts:[{val:0,label:"Nenhuma"},{val:1,label:"Pouca"},{val:2,label:"Alguma"},{val:3,label:"Muita"},{val:4,label:"Extrema"}]}
 ],
 calc:function(v){ return ["i1","i2","i3","i4","i5","i6","i7"].reduce(function(a,k){return a+(v[k]||0);},0); },
 interp:function(s,v){
   var n=inc(v,["i1","i2","i3","i4","i5","i6","i7"]); if(n>0) return {risco:"—",acao:"Responda os 7 itens.",cor:"info"};
   if(s<=7) return {risco:"Sem insônia clinicamente significativa ("+s+"/28)",acao:"Orientar higiene do sono se queixa pontual.",cor:"ok"};
   if(s<=14) return {risco:"Insônia subliminar ("+s+"/28)",acao:"Higiene do sono + TCC-I (terapia cognitivo-comportamental para insônia). Reavaliar.",cor:"warn"};
   if(s<=21) return {risco:"Insônia moderada ("+s+"/28)",acao:"TCC-I é 1ª linha. Avaliar comorbidades (humor, ansiedade, dor, apneia). Medicação só se necessário e curto prazo.",cor:"warn"};
   return {risco:"Insônia grave ("+s+"/28)",acao:"TCC-I + investigar comorbidades. Evitar BZD crônico. Considerar apoio especializado.",cor:"crit"};
 }},

/* ===================== WHO-5 (bem-estar) ===================== */
{id:"who-5", contexto:["ubs"], sis:"psiq",
 nome:"WHO-5 — Índice de Bem-Estar (OMS)",
 desc:"5 itens (0–5) sobre as últimas 2 semanas. Escore bruto ×4 = 0–100. Fonte: WHO-5 Well-Being Index.",
 fields:[
  {tipo:"select", id:"w1", label:"1. Senti-me alegre e de bom humor", opts:[{val:5,label:"O tempo todo"},{val:4,label:"A maior parte do tempo"},{val:3,label:"Mais da metade do tempo"},{val:2,label:"Menos da metade do tempo"},{val:1,label:"De vez em quando"},{val:0,label:"Em nenhum momento"}]},
  {tipo:"select", id:"w2", label:"2. Senti-me calmo(a) e relaxado(a)", opts:[{val:5,label:"O tempo todo"},{val:4,label:"A maior parte do tempo"},{val:3,label:"Mais da metade do tempo"},{val:2,label:"Menos da metade do tempo"},{val:1,label:"De vez em quando"},{val:0,label:"Em nenhum momento"}]},
  {tipo:"select", id:"w3", label:"3. Senti-me ativo(a) e cheio(a) de energia", opts:[{val:5,label:"O tempo todo"},{val:4,label:"A maior parte do tempo"},{val:3,label:"Mais da metade do tempo"},{val:2,label:"Menos da metade do tempo"},{val:1,label:"De vez em quando"},{val:0,label:"Em nenhum momento"}]},
  {tipo:"select", id:"w4", label:"4. Acordei me sentindo descansado(a)", opts:[{val:5,label:"O tempo todo"},{val:4,label:"A maior parte do tempo"},{val:3,label:"Mais da metade do tempo"},{val:2,label:"Menos da metade do tempo"},{val:1,label:"De vez em quando"},{val:0,label:"Em nenhum momento"}]},
  {tipo:"select", id:"w5", label:"5. Meu dia a dia foi preenchido por coisas que me interessam", opts:[{val:5,label:"O tempo todo"},{val:4,label:"A maior parte do tempo"},{val:3,label:"Mais da metade do tempo"},{val:2,label:"Menos da metade do tempo"},{val:1,label:"De vez em quando"},{val:0,label:"Em nenhum momento"}]}
 ],
 calc:function(v){ var raw=["w1","w2","w3","w4","w5"].reduce(function(a,k){return a+(v[k]||0);},0); return raw*4; },
 interp:function(s,v){
   var n=inc(v,["w1","w2","w3","w4","w5"]); if(n>0) return {risco:"—",acao:"Responda os 5 itens.",cor:"info"};
   if(s<28) return {risco:"Bem-estar muito baixo ("+s+"/100)",acao:"Provável depressão — aplicar PHQ-9 e avaliar risco. Não banalizar.",cor:"crit"};
   if(s<50) return {risco:"Bem-estar baixo ("+s+"/100)",acao:"Rastreio positivo — investigar depressão (PHQ-9) e contexto psicossocial.",cor:"warn"};
   return {risco:"Bem-estar adequado ("+s+"/100)",acao:"Sem sinal de alerta no rastreio. Reavaliar se mudança.",cor:"ok"};
 }},

/* ===================== GAD-2 (ansiedade) ===================== */
{id:"gad-2", contexto:["ubs","pa"], sis:"psiq",
 nome:"GAD-2 — Rastreio rápido de Ansiedade (2 itens)",
 desc:"2 primeiros itens do GAD-7, últimas 2 semanas. ≥3 = rastreio positivo. Fonte: Spitzer/Kroenke, GAD.",
 fields:[
  {tipo:"select", id:"g1", label:"1. Sentir-se nervoso(a), ansioso(a) ou no limite", opts:[{val:0,label:"Nenhum dia"},{val:1,label:"Vários dias"},{val:2,label:"Mais da metade dos dias"},{val:3,label:"Quase todos os dias"}]},
  {tipo:"select", id:"g2", label:"2. Não conseguir parar ou controlar as preocupações", opts:[{val:0,label:"Nenhum dia"},{val:1,label:"Vários dias"},{val:2,label:"Mais da metade dos dias"},{val:3,label:"Quase todos os dias"}]}
 ],
 calc:function(v){ return (v.g1||0)+(v.g2||0); },
 interp:function(s,v){
   var n=inc(v,["g1","g2"]); if(n>0) return {risco:"—",acao:"Responda os 2 itens.",cor:"info"};
   if(s>=3) return {risco:"Rastreio POSITIVO ("+s+"/6)",acao:"Aplicar GAD-7 completo para gravidade e investigar transtorno de ansiedade.",cor:"warn"};
   return {risco:"Rastreio negativo ("+s+"/6)",acao:"Baixa probabilidade de transtorno de ansiedade. Reavaliar se clínica sugestiva.",cor:"ok"};
 }},

/* ===================== Relógio (CDT) standalone ===================== */
{id:"cdt", contexto:["ubs"], sis:"psiq",
 nome:"Teste do Desenho do Relógio (CDT) — rastreio cognitivo",
 desc:"Peça: 'Desenhe um relógio com todos os números e os ponteiros marcando 11h10'. Pontuação por componentes (0–5).",
 fields:[
  {tipo:"select", id:"c1", label:"Contorno do relógio (círculo fechado)", opts:[{val:1,label:"Presente e adequado"},{val:0,label:"Ausente/muito distorcido"}]},
  {tipo:"select", id:"c2", label:"Números (1 a 12, presentes e bem posicionados)", opts:[{val:2,label:"Todos corretos e bem distribuídos"},{val:1,label:"Pequenos erros (espaçamento/ordem)"},{val:0,label:"Muitos erros, ausentes ou repetidos"}]},
  {tipo:"select", id:"c3", label:"Ponteiros indicando 11h10", opts:[{val:2,label:"Ambos corretos (hora e minuto)"},{val:1,label:"Um correto / erro leve"},{val:0,label:"Incorretos ou ausentes"}]}
 ],
 calc:function(v){ return ["c1","c2","c3"].reduce(function(a,k){return a+(v[k]||0);},0); },
 interp:function(s,v){
   var n=inc(v,["c1","c2","c3"]); if(n>0) return {risco:"—",acao:"Pontue os 3 componentes.",cor:"info"};
   if(s>=5) return {risco:"Relógio normal (5/5)",acao:"Função visuoespacial/executiva preservada neste teste. Complementa MMSE/MoCA.",cor:"ok"};
   if(s>=3) return {risco:"Alteração leve ("+s+"/5)",acao:"Investigar cognição com MMSE/MoCA + funcionalidade (Pfeffer).",cor:"warn"};
   return {risco:"Relógio alterado ("+s+"/5)",acao:"Sugere comprometimento — avaliação cognitiva formal e investigar demência/delirium.",cor:"crit"};
 }},

/* ===================== Y-BOCS (gravidade TOC) ===================== */
{id:"ybocs", contexto:["ubs"], sis:"psiq",
 nome:"Y-BOCS — Gravidade do TOC (10 itens)",
 desc:"Gravidade de obsessões e compulsões (0–4 cada, total 0–40). Itens parafraseados. Fonte: Goodman et al., Y-BOCS.",
 fields:[
  {tipo:"select", id:"o1", label:"Obsessões — tempo ocupado por elas", opts:O5},
  {tipo:"select", id:"o2", label:"Obsessões — interferência na vida", opts:O5},
  {tipo:"select", id:"o3", label:"Obsessões — sofrimento que causam", opts:O5},
  {tipo:"select", id:"o4", label:"Obsessões — resistência (4 = cede sempre)", opts:O5},
  {tipo:"select", id:"o5", label:"Obsessões — controle sobre elas (4 = nenhum)", opts:O5},
  {tipo:"select", id:"k1", label:"Compulsões — tempo gasto com rituais", opts:O5},
  {tipo:"select", id:"k2", label:"Compulsões — interferência na vida", opts:O5},
  {tipo:"select", id:"k3", label:"Compulsões — sofrimento se impedido de realizar", opts:O5},
  {tipo:"select", id:"k4", label:"Compulsões — resistência (4 = cede sempre)", opts:O5},
  {tipo:"select", id:"k5", label:"Compulsões — controle sobre elas (4 = nenhum)", opts:O5}
 ],
 calc:function(v){ return ["o1","o2","o3","o4","o5","k1","k2","k3","k4","k5"].reduce(function(a,k){return a+(v[k]||0);},0); },
 interp:function(s,v){
   var n=inc(v,["o1","o2","o3","o4","o5","k1","k2","k3","k4","k5"]); if(n>0) return {risco:"—",acao:"Responda os 10 itens.",cor:"info"};
   if(s<=7) return {risco:"Subclínico ("+s+"/40)",acao:"Sintomas leves/ausentes. Acompanhar.",cor:"ok"};
   if(s<=15) return {risco:"TOC leve ("+s+"/40)",acao:"TCC (exposição com prevenção de resposta) 1ª linha; ISRS se indicado.",cor:"warn"};
   if(s<=23) return {risco:"TOC moderado ("+s+"/40)",acao:"TCC-EPR + ISRS em dose otimizada. Acompanhar resposta.",cor:"warn"};
   if(s<=31) return {risco:"TOC grave ("+s+"/40)",acao:"ISRS dose alta + TCC-EPR; considerar encaminhamento especializado.",cor:"crit"};
   return {risco:"TOC extremo ("+s+"/40)",acao:"Encaminhar à psiquiatria; avaliar refratariedade e estratégias de potencialização.",cor:"crit"};
 }},

/* ===================== PCL-5 (TEPT) ===================== */
{id:"pcl-5", contexto:["ubs"], sis:"psiq",
 nome:"PCL-5 — Checklist de TEPT (DSM-5, 20 itens)",
 desc:"20 sintomas no último mês (0–4). Corte provisório ≥31. Fonte: National Center for PTSD (domínio público).",
 fields:[
  {tipo:"select",id:"p1",label:"1. Memórias intrusivas e perturbadoras do trauma",opts:O5},
  {tipo:"select",id:"p2",label:"2. Pesadelos relacionados ao trauma",opts:O5},
  {tipo:"select",id:"p3",label:"3. Flashbacks (reviver como se acontecesse de novo)",opts:O5},
  {tipo:"select",id:"p4",label:"4. Sofrimento intenso ao lembrar do trauma",opts:O5},
  {tipo:"select",id:"p5",label:"5. Reações físicas ao lembrar (coração acelera, sudorese)",opts:O5},
  {tipo:"select",id:"p6",label:"6. Evitar pensamentos/sentimentos sobre o trauma",opts:O5},
  {tipo:"select",id:"p7",label:"7. Evitar lembranças externas (pessoas, lugares, situações)",opts:O5},
  {tipo:"select",id:"p8",label:"8. Dificuldade de lembrar partes importantes do trauma",opts:O5},
  {tipo:"select",id:"p9",label:"9. Crenças negativas exageradas sobre si/mundo",opts:O5},
  {tipo:"select",id:"p10",label:"10. Culpa de si ou de outros pelo ocorrido",opts:O5},
  {tipo:"select",id:"p11",label:"11. Emoções negativas persistentes (medo, raiva, culpa)",opts:O5},
  {tipo:"select",id:"p12",label:"12. Perda de interesse em atividades",opts:O5},
  {tipo:"select",id:"p13",label:"13. Sentir-se distante/desconectado dos outros",opts:O5},
  {tipo:"select",id:"p14",label:"14. Dificuldade de sentir emoções positivas",opts:O5},
  {tipo:"select",id:"p15",label:"15. Irritabilidade ou explosões de raiva",opts:O5},
  {tipo:"select",id:"p16",label:"16. Comportamento imprudente ou autodestrutivo",opts:O5},
  {tipo:"select",id:"p17",label:"17. Hipervigilância (sempre 'em guarda')",opts:O5},
  {tipo:"select",id:"p18",label:"18. Sobressalto exagerado",opts:O5},
  {tipo:"select",id:"p19",label:"19. Dificuldade de concentração",opts:O5},
  {tipo:"select",id:"p20",label:"20. Dificuldade para dormir",opts:O5}
 ],
 calc:function(v){ var t=0; for(var i=1;i<=20;i++) t+=(v["p"+i]||0); return t; },
 interp:function(s,v){
   var ks=[]; for(var i=1;i<=20;i++) ks.push("p"+i);
   var n=inc(v,ks); if(n>0) return {risco:"—",acao:"Responda os 20 itens.",cor:"info"};
   if(s>=31) return {risco:"TEPT provável ("+s+"/80)",acao:"Acima do corte provisório. Avaliação diagnóstica + psicoterapia focada no trauma (1ª linha); ISRS/IRSN se indicado. Avaliar risco.",cor:"crit"};
   if(s>=20) return {risco:"Sintomas relevantes ("+s+"/80)",acao:"Abaixo do corte, mas sintomático. Acompanhar, apoio psicossocial, reavaliar.",cor:"warn"};
   return {risco:"Abaixo do corte ("+s+"/80)",acao:"Baixa probabilidade de TEPT. Reavaliar se clínica sugestiva.",cor:"ok"};
 }},

/* ===================== PSQI (qualidade do sono) ===================== */
{id:"psqi", contexto:["ubs"], sis:"psiq",
 nome:"PSQI — Qualidade do Sono de Pittsburgh (operacional)",
 desc:"Escore global 0–21 (>5 = sono ruim), último mês. Versão operacional simplificada. Fonte: Buysse et al., PSQI.",
 fields:[
  {tipo:"select", id:"c1", label:"C1. Qualidade subjetiva do sono", opts:[{val:0,label:"Muito boa"},{val:1,label:"Boa"},{val:2,label:"Ruim"},{val:3,label:"Muito ruim"}]},
  {tipo:"num", id:"lat", label:"C2. Tempo para adormecer (minutos)"},
  {tipo:"num", id:"dur", label:"C3. Horas realmente dormidas por noite"},
  {tipo:"num", id:"cama", label:"C4. Horas que ficou na cama por noite"},
  {tipo:"select", id:"c5", label:"C5. Distúrbios (acordar à noite, dor, calor/frio, etc.)", opts:[{val:0,label:"Nenhum no último mês"},{val:1,label:"<1×/semana"},{val:2,label:"1–2×/semana"},{val:3,label:"≥3×/semana"}]},
  {tipo:"select", id:"c6", label:"C6. Uso de medicação para dormir", opts:[{val:0,label:"Nenhum"},{val:1,label:"<1×/semana"},{val:2,label:"1–2×/semana"},{val:3,label:"≥3×/semana"}]},
  {tipo:"select", id:"c7", label:"C7. Sonolência/falta de disposição diurna", opts:[{val:0,label:"Nenhum problema"},{val:1,label:"Problema leve"},{val:2,label:"Problema moderado"},{val:3,label:"Problema grande"}]}
 ],
 calc:function(v){
   if(v.c1==null||v.lat==null||v.dur==null||v.cama==null||v.c5==null||v.c6==null||v.c7==null) return 0;
   var c2 = v.lat<=15?0 : v.lat<=30?1 : v.lat<=60?2 : 3;
   var c3 = v.dur>7?0 : v.dur>=6?1 : v.dur>=5?2 : 3;
   var ef = v.cama>0 ? (v.dur/v.cama*100) : 0;
   var c4 = ef>=85?0 : ef>=75?1 : ef>=65?2 : 3;
   return v.c1+c2+c3+c4+v.c5+v.c6+v.c7;
 },
 interp:function(s,v){
   var n=inc(v,["c1","lat","dur","cama","c5","c6","c7"]); if(n>0) return {risco:"—",acao:"Preencha os 7 componentes.",cor:"info"};
   if(s<=5) return {risco:"Boa qualidade de sono ("+s+"/21)",acao:"Sem sinal de alerta. Orientar higiene do sono se queixa pontual.",cor:"ok"};
   if(s<=10) return {risco:"Qualidade ruim ("+s+"/21)",acao:"Investigar causa (estresse, humor, dor, cafeína, apneia). Higiene do sono + TCC-I.",cor:"warn"};
   return {risco:"Qualidade muito ruim ("+s+"/21)",acao:"Avaliar insônia (ISI), apneia, humor e medicações. TCC-I 1ª linha; evitar BZD crônico.",cor:"crit"};
 }},

/* ===================== FICHA: Zarit (sobrecarga do cuidador) ===================== */
{id:"ref-zarit", contexto:["ubs"], sis:"psiq",
 nome:"Zarit (Sobrecarga do Cuidador) — referência (instrumento licenciado)",
 desc:"Ficha de referência — não reproduz os itens (instrumento protegido por direitos autorais).",
 fields:[],
 calc:function(v){ return "📋 Referência"; },
 interp:function(s,v){ return {risco:"Zarit Burden Interview — sobrecarga do cuidador",
   acao:"O QUE MEDE: sobrecarga física, emocional, social e financeira de quem cuida (demência, AVC, doença crônica, fim de vida). Formas: ZBI-22 (completa), ZBI-12, ZBI-7, ZBI-4 (triagem). ⚠ É instrumento protegido — para uso formal/pontuado, obter a versão licenciada/validada em PT-BR. NA PRÁTICA DA APS: rastreio breve perguntando diretamente — 'O senhor(a) sente que cuidar tem afetado sua saúde, seu sono, sua vida social ou suas finanças? Sente-se sobrecarregado(a)?'. Sobrecarga alta → acionar rede (CRAS, grupo de cuidadores, NASF, divisão de tarefas familiares, cuidados paliativos se aplicável) e cuidar da saúde do CUIDADOR (depressão é comum). QUANDO USAR: cuidador de paciente dependente, especialmente demência avançada.",
   cor:"info"}; }},

/* ===================== FICHA: Morisky (adesão) ===================== */
{id:"ref-morisky", contexto:["ubs"], sis:"psiq",
 nome:"Morisky (MMAS) — referência (instrumento licenciado/registrado)",
 desc:"Ficha de referência — não reproduz os itens (marca registrada, exige licença).",
 fields:[],
 calc:function(v){ return "📋 Referência"; },
 interp:function(s,v){ return {risco:"Morisky Medication Adherence Scale (MMAS-4 / MMAS-8)",
   acao:"O QUE MEDE: adesão ao tratamento medicamentoso. ⚠ É instrumento REGISTRADO (MMAS Research) — uso exige licença/contrato; não reproduzir os itens sem autorização. ALTERNATIVAS LIVRES NA APS: (1) pergunta aberta sem julgamento — 'Muita gente esquece de tomar remédio às vezes. Nas últimas 2 semanas, quantos dias o senhor(a) deixou de tomar?'; (2) Brief Medication Questionnaire (BMQ); (3) checar retirada na farmácia (PFPB/UBS). ABORDAGEM (Freire/não-culpabilizadora): 'não conseguimos pactuar', investigar barreiras (custo, efeitos colaterais, esquema complexo, crença, esquecimento) e simplificar o regime. Baixa adesão raramente é 'desobediência' — quase sempre é barreira contornável.",
   cor:"info"}; }}

);
})();
