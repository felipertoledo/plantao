/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — calcs/neuro.js
   6 calculadoras
   =========================================================== */

CALCS.push(
{
id:"abcd2", contexto:["pa","ubs"], nome:"ABCD²", sis:"neuro",
desc:"Risco de AVC em 2 e 7 dias após AIT.",
fields:[
{tipo:"bool", id:"a", label:"Age — ≥ 60 anos", peso:1},
{tipo:"select", id:"b", label:"PA na admissão",
  opts:[{val:0,label:"< 140/90",peso:0},{val:1,label:"≥ 140/90",peso:1}]},
{tipo:"select", id:"c", label:"Clínica",
  opts:[{val:0,label:"Outra",peso:0},{val:1,label:"Disartria isolada",peso:1},{val:2,label:"Paresia unilateral",peso:2}]},
{tipo:"select", id:"d1", label:"Duração",
  opts:[{val:0,label:"< 10 min",peso:0},{val:1,label:"10–59 min",peso:1},{val:2,label:"≥ 60 min",peso:2}]},
{tipo:"bool", id:"d2", label:"DM", peso:1},
],
calc:function(v){
  let s=0;
  if(v.a) s+=1;
  s += parseInt(v.b||0);
  s += parseInt(v.c||0);
  s += parseInt(v.d1||0);
  if(v.d2) s+=1;
  return s;
},
interp:function(s){
  if(s<=3) return {risco:"Baixo (1% em 2 dias)", acao:"Investigação ambulatorial precoce (Holter, Doppler, ECO TE)", cor:"ok"};
  if(s<=5) return {risco:"Moderado (4,1%)", acao:"Internar — investigar etiologia + dupla antiagregação curto prazo", cor:"warn"};
  return {risco:"Alto (8,1%)", acao:"Internar imediatamente — UAVC, investigação completa", cor:"crit"};
}
},
{
id:"aspects", contexto:["pa","ubs"], nome:"ASPECTS (TC)", sis:"neuro",
desc:"Avaliação de áreas isquêmicas precoces na TC sem contraste em AVC de circulação anterior (ACM). Pontuação 10 (normal) → 0 (infarto extenso). Cada uma das 10 regiões = 1 ponto, subtrair se hipodensa.",
fields:[
{tipo:"bool", id:"c", label:"Caudado hipodenso", peso:1},
{tipo:"bool", id:"l", label:"Lentiforme hipodenso", peso:1},
{tipo:"bool", id:"i", label:"Cápsula interna hipodensa", peso:1},
{tipo:"bool", id:"in", label:"Insular hipodensa", peso:1},
{tipo:"bool", id:"m1", label:"M1 (ACM anterior, infraganglionar) hipodensa", peso:1},
{tipo:"bool", id:"m2", label:"M2 (ACM lateral à ínsula) hipodensa", peso:1},
{tipo:"bool", id:"m3", label:"M3 (ACM posterior, infraganglionar) hipodensa", peso:1},
{tipo:"bool", id:"m4", label:"M4 (anterior, supraganglionar) hipodensa", peso:1},
{tipo:"bool", id:"m5", label:"M5 (lateral, supraganglionar) hipodensa", peso:1},
{tipo:"bool", id:"m6", label:"M6 (posterior, supraganglionar) hipodensa", peso:1},
],
calc:function(v){
  let s=10;
  ["c","l","i","in","m1","m2","m3","m4","m5","m6"].forEach(k=>{ if(v[k]) s-=1; });
  return s;
},
interp:function(s){
  if(s>=8) return {risco:"Núcleo isquêmico pequeno", acao:"Trombólise + trombectomia bem indicadas (≤ 6h ou ≤ 24h com mismatch)", cor:"ok"};
  if(s>=6) return {risco:"Núcleo intermediário", acao:"Trombectomia ainda benéfica em casos selecionados; ponderar riscos", cor:"warn"};
  return {risco:"Infarto extenso (> 1/3 ACM)", acao:"Trombólise/trombectomia geralmente contraindicadas — alto risco hemorrágico", cor:"crit"};
}
},
{id:"four", contexto:["pa","ubs"], nome:"FOUR Score — Avaliação do Coma (alternativa à Glasgow)", sis:"neuro",
desc:"Full Outline of UnResponsiveness. Alternativa ao Glasgow em paciente INTUBADO (avalia tronco cerebral). Útil em UTI neurológica. Score 0-16 (maior = melhor).",
fields:[
{tipo:"select", id:"e", label:"Resposta ocular (E)", opts:[
{val:"0", label:"0 — Olhos fechados, não abre com dor"},
{val:"1", label:"1 — Olhos fechados, abre com dor"},
{val:"2", label:"2 — Olhos fechados, abre ao chamado alto"},
{val:"3", label:"3 — Olhos abertos mas sem rastrear"},
{val:"4", label:"4 — Olhos abertos, rastreia ou pisca a comando"},
]},
{tipo:"select", id:"m", label:"Resposta motora (M)", opts:[
{val:"0", label:"0 — Sem resposta à dor ou estado mioclônico"},
{val:"1", label:"1 — Extensão à dor (descerebração)"},
{val:"2", label:"2 — Flexão à dor (decortica​ção)"},
{val:"3", label:"3 — Localiza a dor"},
{val:"4", label:"4 — Polegar para cima / punho fechado / sinal de paz a comando"},
]},
{tipo:"select", id:"b", label:"Reflexos do tronco (B)", opts:[
{val:"0", label:"0 — Pupila, córnea e tosse ausentes"},
{val:"1", label:"1 — Pupila E córnea ausentes"},
{val:"2", label:"2 — Pupila OU córnea ausentes"},
{val:"3", label:"3 — Pupila pequena reativa"},
{val:"4", label:"4 — Pupilas e córneas presentes"},
]},
{tipo:"select", id:"r", label:"Respiração (R)", opts:[
{val:"0", label:"0 — Apneia ou respiração por ventilador apenas"},
{val:"1", label:"1 — Respira acima da frequência do ventilador"},
{val:"2", label:"2 — Sem entubação, padrão irregular"},
{val:"3", label:"3 — Sem entubação, Cheyne-Stokes"},
{val:"4", label:"4 — Sem entubação, padrão normal"},
]},
],
calc:function(v){
  return parseInt(v.e||0) + parseInt(v.m||0) + parseInt(v.b||0) + parseInt(v.r||0);
},
interp:function(s){
  if(s>=12) return {risco:`FOUR ${s}/16 — Coma LEVE / consciência preservada`, acao:"Acompanhar. Monitor neurológico seriado. Avaliar causa.", cor:"ok"};
  if(s>=7) return {risco:`FOUR ${s}/16 — Coma MODERADO`, acao:"⚠ UTI neurológica. Investigar etiologia: TC crânio, eletrólitos, glicemia, gasometria, tóxico, função hepática/renal, infecção. Suporte ventilatório conforme R-score.", cor:"warn"};
  if(s>=3) return {risco:`FOUR ${s}/16 — Coma GRAVE`, acao:"⚠ UTI. Reflexos de tronco parcialmente preservados — não é morte encefálica mas prognóstico reservado. Investigação urgente, suporte intensivo.", cor:"crit"};
  return {risco:`FOUR ${s}/16 — Coma PROFUNDO — possível morte encefálica`, acao:"⚠ ⚠ Reflexos de tronco ausentes ou mínimos. Avaliar critérios de MORTE ENCEFÁLICA (Resolução CFM 2.173/2017): coma aperceptivo, ausência de reflexos de tronco, apneia + teste confirmatório (EEG, Doppler TC, angiografia). 2 exames clínicos por médicos diferentes com intervalo conforme idade.", cor:"crit"};
}
},
{id:"gcs", contexto:["pa","ubs"], nome:"Glasgow Coma Scale (GCS) — Interativo", sis:"neuro",
desc:"Escala de coma de Glasgow. 3 componentes: ocular, verbal, motor. Total 3-15. Padrão de avaliação neurológica e prognóstico em TCE.",
fields:[
{tipo:"select", id:"e", label:"Abertura ocular (E)", opts:[
{val:"4", label:"4 — Espontânea"},
{val:"3", label:"3 — Ao comando verbal"},
{val:"2", label:"2 — À dor"},
{val:"1", label:"1 — Sem abertura"},
]},
{tipo:"select", id:"v", label:"Resposta verbal (V)", opts:[
{val:"5", label:"5 — Orientado"},
{val:"4", label:"4 — Confuso"},
{val:"3", label:"3 — Palavras inapropriadas"},
{val:"2", label:"2 — Sons incompreensíveis"},
{val:"1", label:"1 — Nenhuma resposta"},
{val:"-1", label:"T — Intubado (não avaliável)"},
]},
{tipo:"select", id:"m", label:"Resposta motora (M)", opts:[
{val:"6", label:"6 — Obedece a comandos"},
{val:"5", label:"5 — Localiza dor"},
{val:"4", label:"4 — Retirada à dor"},
{val:"3", label:"3 — Flexão anormal (decorticação)"},
{val:"2", label:"2 — Extensão anormal (descerebração)"},
{val:"1", label:"1 — Sem resposta motora"},
]},
],
calc:function(v){
  if (v.e == null || v.v == null || v.m == null) return NaN;
  const e = parseInt(v.e||0);
  const vS = parseInt(v.v||0);
  const m = parseInt(v.m||0);
  // Verbal -1 = intubado
  if(vS === -1) return e + m; // ignorar V (T)
  return e + vS + m;
},
interp:function(s){
  if (s == null || (typeof s === "number" && isNaN(s))) return {risco:"—", acao:"Preencha todos os campos acima.", cor:"info"};
  if(s>=13) return {risco:`GCS ${s} — TCE LEVE`, acao:"Manejo conforme Canadian CT Head Rule. Observação 4-6h se TC indicada e normal. Alta com orientações se baixo risco.", cor:"ok"};
  if(s>=9) return {risco:`GCS ${s} — TCE MODERADO`, acao:"TC crânio OBRIGATÓRIA. Internação para observação. Reavaliação neurológica 1/1h. Avaliar IOT se queda do GCS.", cor:"warn"};
  return {risco:`GCS ${s} — TCE GRAVE`, acao:"IOT IMEDIATA (proteção VA) com sequência rápida + Cardiomonitorização + Acesso venoso + TC + Neurocirurgia. UTI. Manter PaCO2 35-40, PAS ≥110, SpO2 ≥94%, evitar hipoglicemia.", cor:"crit"};
}
},
{id:"nihss", contexto:["pa","ubs"], nome:"NIHSS — National Institutes of Health Stroke Scale", sis:"neuro",
desc:"Escala completa para gravidade de AVC isquêmico. 11 itens, total 0-42. Decisão de trombólise + monitoramento evolutivo.",
fields:[
{tipo:"select", id:"1a", label:"1a. Nível de consciência", opts:[
{val:"0", label:"0 — Alerta"},{val:"1", label:"1 — Sonolento (responde a estímulo verbal)"},{val:"2", label:"2 — Estuporoso (responde a estímulo doloroso)"},{val:"3", label:"3 — Coma (sem resposta ou reflexa)"}
]},
{tipo:"select", id:"1b", label:"1b. Perguntas (mês atual, idade)", opts:[
{val:"0", label:"0 — Ambas corretas"},{val:"1", label:"1 — 1 correta"},{val:"2", label:"2 — Nenhuma correta"}
]},
{tipo:"select", id:"1c", label:"1c. Comandos (abrir/fechar olhos, abrir/fechar mão não-parética)", opts:[
{val:"0", label:"0 — Ambos corretos"},{val:"1", label:"1 — 1 correto"},{val:"2", label:"2 — Nenhum correto"}
]},
{tipo:"select", id:"2", label:"2. Olhar conjugado", opts:[
{val:"0", label:"0 — Normal"},{val:"1", label:"1 — Paralisia parcial do olhar"},{val:"2", label:"2 — Desvio forçado/paralisia total"}
]},
{tipo:"select", id:"3", label:"3. Campos visuais", opts:[
{val:"0", label:"0 — Sem perda visual"},{val:"1", label:"1 — Hemianopsia parcial"},{val:"2", label:"2 — Hemianopsia completa"},{val:"3", label:"3 — Hemianopsia bilateral (cegueira)"}
]},
{tipo:"select", id:"4", label:"4. Paralisia facial", opts:[
{val:"0", label:"0 — Movimentos simétricos"},{val:"1", label:"1 — Paralisia menor (apagamento sulco)"},{val:"2", label:"2 — Paralisia parcial (face inferior)"},{val:"3", label:"3 — Paralisia completa unilateral/bilateral"}
]},
{tipo:"select", id:"5a", label:"5a. Motor MS esquerdo (extensão 10s)", opts:[
{val:"0", label:"0 — Sem queda"},{val:"1", label:"1 — Queda em <10s, não atinge cama"},{val:"2", label:"2 — Algum esforço contra gravidade"},{val:"3", label:"3 — Sem esforço contra gravidade"},{val:"4", label:"4 — Sem movimento"}
]},
{tipo:"select", id:"5b", label:"5b. Motor MS direito", opts:[
{val:"0", label:"0 — Sem queda"},{val:"1", label:"1"},{val:"2", label:"2"},{val:"3", label:"3"},{val:"4", label:"4 — Sem movimento"}
]},
{tipo:"select", id:"6a", label:"6a. Motor MI esquerdo (30° por 5s)", opts:[
{val:"0", label:"0 — Sem queda"},{val:"1", label:"1"},{val:"2", label:"2"},{val:"3", label:"3"},{val:"4", label:"4 — Sem movimento"}
]},
{tipo:"select", id:"6b", label:"6b. Motor MI direito", opts:[
{val:"0", label:"0 — Sem queda"},{val:"1", label:"1"},{val:"2", label:"2"},{val:"3", label:"3"},{val:"4", label:"4 — Sem movimento"}
]},
{tipo:"select", id:"7", label:"7. Ataxia de membros (dedo-nariz, calcanhar-joelho)", opts:[
{val:"0", label:"0 — Sem ataxia"},{val:"1", label:"1 — Em 1 membro"},{val:"2", label:"2 — Em 2 membros"}
]},
{tipo:"select", id:"8", label:"8. Sensibilidade", opts:[
{val:"0", label:"0 — Normal"},{val:"1", label:"1 — Perda leve a moderada"},{val:"2", label:"2 — Perda severa/total"}
]},
{tipo:"select", id:"9", label:"9. Linguagem (afasia)", opts:[
{val:"0", label:"0 — Normal"},{val:"1", label:"1 — Afasia leve a moderada"},{val:"2", label:"2 — Afasia grave"},{val:"3", label:"3 — Mutismo / afasia global"}
]},
{tipo:"select", id:"10", label:"10. Disartria", opts:[
{val:"0", label:"0 — Normal"},{val:"1", label:"1 — Leve a moderada (entendível)"},{val:"2", label:"2 — Grave (ininteligível)"}
]},
{tipo:"select", id:"11", label:"11. Extinção / negligência", opts:[
{val:"0", label:"0 — Sem"},{val:"1", label:"1 — Em uma modalidade"},{val:"2", label:"2 — Em ≥2 modalidades"}
]},
],
calc:function(v){
  return ["1a","1b","1c","2","3","4","5a","5b","6a","6b","7","8","9","10","11"]
    .reduce((acc,k) => acc + parseInt(v[k]||0), 0);
},
interp:function(s){
  if(s===0) return {risco:`NIHSS ${s} — Sem déficit`, acao:"Sem evidência de AVC clinicamente significativo. Investigar diagnóstico diferencial (TIA, migrânea, hipoglicemia).", cor:"ok"};
  if(s<=4) return {risco:`NIHSS ${s} — AVC LEVE`, acao:"AVC menor. Trombólise se elegível (sintomas incapacitantes, dentro de 4,5h, sem CI). Considerar TIA. AAS após 24h de exclusão de hemorragia.", cor:"info"};
  if(s<=15) return {risco:`NIHSS ${s} — AVC MODERADO`, acao:"INDICAÇÃO de trombólise IV (alteplase 0,9 mg/kg, máx 90 mg) se <4,5h + sem CI. Considerar trombectomia mecânica se grande artéria + <24h em centro especializado.", cor:"warn"};
  if(s<=20) return {risco:`NIHSS ${s} — AVC MODERADO-GRAVE`, acao:"Trombólise + considerar TROMBECTOMIA mecânica em janela estendida (até 24h em casos selecionados, DAWN/DEFUSE-3). UTI neurológica. Avaliar contraindicações.", cor:"crit"};
  return {risco:`NIHSS ${s} — AVC GRAVE`, acao:"AVC extenso. Considerar trombólise + trombectomia. Avaliar prognóstico funcional. UTI. Discussão familiar sobre extensão de cuidados.", cor:"crit"};
}
},
);
