/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — ui/conversores.js
   8 conversores de unidades / drogas
   =========================================================== */

CONVERSORES.push(
{id:"bic-mcg-min", contexto:["pa","ubs"], nome:"BIC: mcg/kg/min ↔ mL/h", sis:"conv",
desc:"Conversão entre dose contínua (mcg/kg/min) e velocidade da bomba de infusão (mL/h). Drogas vasoativas, sedativos, etc.",
fields:[
{tipo:"num", id:"peso", label:"Peso do paciente (kg)", min:1, max:300, step:0.1},
{tipo:"num", id:"droga", label:"Massa total de droga (mg)", min:0, max:10000, step:1},
{tipo:"num", id:"diluicao", label:"Volume total da diluição (mL)", min:1, max:1000, step:1},
{tipo:"num", id:"dose", label:"Dose desejada (mcg/kg/min)", min:0, max:100, step:0.01},
],
calc:function(v){
  const peso = parseFloat(v.peso||0);
  const droga_mg = parseFloat(v.droga||0);
  const diluicao = parseFloat(v.diluicao||0);
  const dose = parseFloat(v.dose||0);
  if(!peso || !droga_mg || !diluicao || !dose) return 0;
  // Concentração: droga (mcg) / diluição (mL) = mcg/mL
  // Velocidade (mL/h) = dose × peso × 60 / concentração
  const concentracao_mcg_mL = (droga_mg * 1000) / diluicao;
  const mlh = (dose * peso * 60) / concentracao_mcg_mL;
  return Math.round(mlh * 100) / 100;
},
interp:function(s){
  if(!s) return {risco:"Preencher todos os campos", acao:"Cálculo: dose × peso × 60 / (droga_mcg/diluição_mL)", cor:"info"};
  return {risco:`${s} mL/h`, acao:`Programar a bomba para ${s} mL/h. Conferir: dose × peso × 60 ÷ (droga em mcg / volume).`, cor:"ok"};
}
},
{id:"opioide-conv", contexto:["pa","ubs"], nome:"Equipotência de Opioides", sis:"conv",
desc:"Conversão entre opioides (potência relativa à morfina). Útil em rotação por intolerância/eficácia/disponibilidade.",
fields:[
{tipo:"sel", id:"de", label:"Converter DE:", opcoes:[
{v:"morfina-iv", t:"Morfina IV"},
{v:"morfina-vo", t:"Morfina VO"},
{v:"fentanil-iv", t:"Fentanil IV"},
{v:"tramadol-iv", t:"Tramadol IV"},
{v:"tramadol-vo", t:"Tramadol VO"},
{v:"codeina-vo", t:"Codeína VO"},
{v:"oxicodona-vo", t:"Oxicodona VO"},
{v:"metadona-vo", t:"Metadona VO"},
]},
{tipo:"num", id:"dose", label:"Dose total/dia da droga atual (mg ou mcg)", min:0, max:1000, step:0.1},
{tipo:"sel", id:"para", label:"Converter PARA:", opcoes:[
{v:"morfina-iv", t:"Morfina IV"},
{v:"morfina-vo", t:"Morfina VO"},
{v:"fentanil-iv", t:"Fentanil IV"},
{v:"tramadol-vo", t:"Tramadol VO"},
{v:"codeina-vo", t:"Codeína VO"},
{v:"oxicodona-vo", t:"Oxicodona VO"},
]},
],
calc:function(v){
  // Fator de conversão para "morfina IV equivalente" (mg/dia)
  // Baseado em tabelas padrão de equianalgesia
  const conv_to_morfIV = {
    "morfina-iv": 1.0,
    "morfina-vo": 1/3,        // 30 VO = 10 IV
    "fentanil-iv": 100,        // 0,1 mg IV = 10 mg morfina IV (em mcg → multiplica por 0.1)
    "tramadol-iv": 0.1,        // 100 mg = 10 mg morfina IV
    "tramadol-vo": 0.1,
    "codeina-vo": 0.15/3,      // 200 mg VO = ~10 morfina IV
    "oxicodona-vo": 1.5/3,     // 20 VO = 10 morfina IV (3× mais potente que VO; ÷3 p/IV)
    "metadona-vo": 1.0,        // SIMPLIFICAÇÃO grossa - real é não-linear
  };
  const conv_from_morfIV = {
    "morfina-iv": 1.0,
    "morfina-vo": 3,
    "fentanil-iv": 0.01,       // 10 mg morfina IV = 0,1 mg = 100 mcg fentanil
    "tramadol-vo": 10,
    "codeina-vo": 20,
    "oxicodona-vo": 2,
  };
  const dose = parseFloat(v.dose||0);
  const fator_de = conv_to_morfIV[v.de] || 1;
  const morfina_iv_eq = dose * fator_de;
  const fator_para = conv_from_morfIV[v.para] || 1;
  // Para fentanil retornar em mcg (mais prático)
  return morfina_iv_eq * fator_para;
},
interp:function(s){
  if(!s || isNaN(s)) return {risco:"Preencher todos os campos", acao:"Valores de equipotência aproximados.", cor:"info"};
  const rounded = Math.round(s * 100) / 100;
  return {risco:`≈ ${rounded} (unidade da droga selecionada)`, 
    acao:"REDUZIR 25-50% da dose calculada por TOLERÂNCIA CRUZADA INCOMPLETA. Titular para resposta. Metadona é EXCEÇÃO — conversão não-linear, requer experiência.", 
    cor:"warn"};
}
},
{id:"gotas-mlh", contexto:["pa","ubs"], nome:"Gotas/min ↔ mL/h", sis:"conv",
desc:"Conversão entre velocidade em gotas/min (gotejamento manual) e mL/h (bomba/cálculo).",
fields:[
{tipo:"sel", id:"tipo", label:"Tipo de equipo", opcoes:[
{v:"20", t:"Macrogotas (20 gotas = 1 mL)"},
{v:"60", t:"Microgotas (60 gotas = 1 mL)"},
]},
{tipo:"sel", id:"converter", label:"Converter de:", opcoes:[
{v:"gotas", t:"Gotas/min → mL/h"},
{v:"mlh", t:"mL/h → Gotas/min"},
]},
{tipo:"num", id:"valor", label:"Valor a converter", min:0, max:1000, step:0.5},
],
calc:function(v){
  const fator = parseInt(v.tipo||20);  // gotas por mL
  const valor = parseFloat(v.valor||0);
  if(!valor) return 0;
  if(v.converter === "gotas") {
    // gotas/min → mL/h: gotas/min × 60 / fator
    return Math.round((valor * 60 / fator) * 100) / 100;
  } else {
    // mL/h → gotas/min: mL/h × fator / 60
    return Math.round((valor * fator / 60) * 100) / 100;
  }
},
interp:function(s){
  if(!s) return {risco:"Preencher", acao:"Macrogotas: 20 gotas/mL. Microgotas: 60 gotas/mL.", cor:"info"};
  return {risco:`${s}`, acao:"Resultado calculado. Para 'gotas/min': contar 1 minuto. Para macrogotas/microgotas, conferir embalagem do equipo.", cor:"ok"};
}
},
{id:"na-corrigido", contexto:["pa","ubs"], nome:"Na⁺ corrigido pela glicemia", sis:"conv",
desc:"Hiperglicemia causa hiponatremia diluicional. Calcular Na real é importante na CAD/EHH.",
fields:[
{tipo:"num", id:"na", label:"Sódio medido (mEq/L)", min:100, max:200, step:0.1},
{tipo:"num", id:"glic", label:"Glicemia (mg/dL)", min:100, max:2000, step:1},
],
calc:function(v){
  const na = parseFloat(v.na||0);
  const glic = parseFloat(v.glic||0);
  if(!na || !glic) return 0;
  // Fator clássico Katz: ↑1.6 mEq/L para cada 100 mg/dL acima de 100
  // Fator Hillier (mais aceito): ↑2.4 mEq/L para cada 100 mg/dL acima de 100
  const correcao = ((glic - 100) / 100) * 2.4;
  return Math.round((na + correcao) * 10) / 10;
},
interp:function(s){
  if(!s) return {risco:"Preencher", acao:"Fórmula Hillier: Na corrigido = Na medido + 2,4 × (glic-100)/100", cor:"info"};
  if(s < 135) return {risco:`Na corrigido ${s} mEq/L — Hiponatremia verdadeira`, acao:"Investigar etiologia. Em CAD: cuidado com reposição. SIADH? Insuficiência adrenal?", cor:"warn"};
  if(s > 145) return {risco:`Na corrigido ${s} mEq/L — Hipernatremia`, acao:"Indica desidratação significativa. Repor água livre (déficit hídrico).", cor:"warn"};
  return {risco:`Na corrigido ${s} mEq/L — Normal`, acao:"Hiponatremia era apenas diluicional pela hiperglicemia.", cor:"ok"};
}
},
{id:"ca-corrigido", contexto:["pa","ubs"], nome:"Cálcio corrigido pela albumina", sis:"conv",
desc:"Hipoalbuminemia subestima cálcio (40% do Ca circula ligado à albumina). Importante em sepse, hepatopata, desnutrido.",
fields:[
{tipo:"num", id:"ca", label:"Cálcio total medido (mg/dL)", min:4, max:15, step:0.1},
{tipo:"num", id:"alb", label:"Albumina (g/dL)", min:1, max:6, step:0.1},
],
calc:function(v){
  const ca = parseFloat(v.ca||0);
  const alb = parseFloat(v.alb||0);
  if(!ca || !alb) return 0;
  // Fórmula: Ca corrigido = Ca medido + 0.8 × (4.0 - albumina)
  const correcao = 0.8 * (4.0 - alb);
  return Math.round((ca + correcao) * 100) / 100;
},
interp:function(s){
  if(!s) return {risco:"Preencher", acao:"Ca corrigido = Ca medido + 0,8 × (4 − albumina)", cor:"info"};
  if(s < 8.5) return {risco:`Ca corrigido ${s} mg/dL — Hipocalcemia`, acao:"Investigar: hipoparatireoidismo, vit D, hiperfosfatemia, magnésio baixo, pancreatite, IRC. Tetania? QT longo?", cor:"warn"};
  if(s > 10.5) return {risco:`Ca corrigido ${s} mg/dL — Hipercalcemia`, acao:"Investigar: hiperparatireoidismo, neoplasia (mieloma, metástase óssea), vit D excessiva, hipertireoidismo. Tratamento: hidratação + furosemida + bifosfonato.", cor:"warn"};
  return {risco:`Ca corrigido ${s} mg/dL — Normal`, acao:"Padrão normal (8,5-10,5).", cor:"ok"};
}
},
{id:"anion-gap", contexto:["pa","ubs"], nome:"Anion Gap (com correção albumina)", sis:"conv",
desc:"Diagnóstico diferencial de acidose metabólica. Anion gap ↑ = ácido endógeno/exógeno acumulado (CAD, lactato, urêmica, intoxicação).",
fields:[
{tipo:"num", id:"na", label:"Sódio (mEq/L)", min:120, max:180, step:0.1},
{tipo:"num", id:"cl", label:"Cloro (mEq/L)", min:80, max:130, step:0.1},
{tipo:"num", id:"hco3", label:"Bicarbonato (mEq/L)", min:5, max:40, step:0.1},
{tipo:"num", id:"alb", label:"Albumina (g/dL, opcional)", min:1, max:6, step:0.1},
],
calc:function(v){
  const na = parseFloat(v.na||0);
  const cl = parseFloat(v.cl||0);
  const hco3 = parseFloat(v.hco3||0);
  const alb = parseFloat(v.alb||0);
  if(!na || !cl || !hco3) return 0;
  let ag = na - (cl + hco3);
  // Correção pela albumina (cada 1 g/dL abaixo de 4 → subestima AG em 2,5)
  if(alb && alb < 4) ag += 2.5 * (4 - alb);
  return Math.round(ag * 10) / 10;
},
interp:function(s){
  if(!s) return {risco:"Preencher Na, Cl, HCO3", acao:"AG = Na − (Cl + HCO3). Normal 8-12 (com correção albumina ~10-14).", cor:"info"};
  if(s < 8) return {risco:`AG ${s} — Baixo`, acao:"Raro: hipoalbuminemia (já corrigida?), mieloma múltiplo (IgG cationica), litem intoxicação.", cor:"info"};
  if(s <= 12) return {risco:`AG ${s} — Normal`, acao:"Acidose hiperclorêmica (HCO3 baixo + AG normal): perda GI (diarreia), acidose tubular renal, recuperação CAD.", cor:"ok"};
  if(s <= 20) return {risco:`AG ${s} — Aumentado moderadamente`, acao:"Investigar: lactato (sepse, choque), cetoacidose, urêmico, intoxicações.", cor:"warn"};
  return {risco:`AG ${s} — Muito aumentado`, acao:"Acidose grave. Mnemônico MUDPILES: Metanol, Urêmica, Diabetes (CAD), Paraldeído, Isoniazida/Ferro, Lactato, Etilenoglicol, Salicilatos. Tratar causa.", cor:"crit"};
}
},
{id:"def-hco3", contexto:["pa","ubs"], nome:"Déficit de Bicarbonato", sis:"conv",
desc:"Estimativa do déficit de HCO₃⁻ para reposição em acidose metabólica grave. Geralmente reservado para pH <7,1 ou shock.",
fields:[
{tipo:"num", id:"peso", label:"Peso (kg)", min:20, max:200, step:1},
{tipo:"num", id:"hco3-atual", label:"HCO3 atual (mEq/L)", min:0, max:30, step:0.1},
{tipo:"num", id:"hco3-alvo", label:"HCO3 alvo (mEq/L)", min:10, max:24, step:1},
],
calc:function(v){
  const peso = parseFloat(v.peso||0);
  const atual = parseFloat(v["hco3-atual"]||0);
  const alvo = parseFloat(v["hco3-alvo"]||15);
  if(!peso || !atual) return 0;
  // Déficit = 0.5 × peso × (HCO3 alvo - HCO3 atual)
  // 0.5 = volume de distribuição do bicarbonato (50% do peso)
  return Math.round(0.5 * peso * (alvo - atual));
},
interp:function(s){
  if(!s) return {risco:"Preencher", acao:"Déficit = 0,5 × peso × (HCO3 alvo − HCO3 atual). Alvo geralmente 15.", cor:"info"};
  if(s <= 0) return {risco:"Sem déficit ou já corrigido", acao:"HCO3 atual ≥ alvo. Sem indicação de reposição.", cor:"ok"};
  return {risco:`Déficit ≈ ${s} mEq`, 
    acao:`Repor 50% (≈ ${Math.round(s/2)} mEq) em 4-6h e reavaliar. NaHCO3 8,4% = 1 mEq/mL. EVITAR em CAD inicial e acidose lática salvo pH <7,0-7,1. Risco: hipocalemia, ↓K ionizado, acidose paradoxal SNC.`, 
    cor:"warn"};
}
},
{id:"osm", contexto:["pa","ubs"], nome:"Osmolaridade plasmática", sis:"conv",
desc:"Calcular osmolaridade efetiva. Útil em CAD/EHH (osm efetiva guia ritmo de correção), suspeita de intoxicação (gap osmolar).",
fields:[
{tipo:"num", id:"na", label:"Sódio (mEq/L)", min:100, max:200, step:0.1},
{tipo:"num", id:"glic", label:"Glicemia (mg/dL)", min:50, max:2000, step:1},
{tipo:"num", id:"ur", label:"Ureia (mg/dL)", min:5, max:300, step:1},
],
calc:function(v){
  const na = parseFloat(v.na||0);
  const glic = parseFloat(v.glic||0);
  const ur = parseFloat(v.ur||0);
  if(!na) return 0;
  // Fórmula: 2 × Na + glic/18 + ur/6
  return Math.round((2*na + glic/18 + ur/6) * 10) / 10;
},
interp:function(s){
  if(!s) return {risco:"Preencher", acao:"Osm = 2 × Na + glic/18 + ureia/6. Normal: 285-295 mOsm/kg.", cor:"info"};
  if(s < 280) return {risco:`Osm ${s} — Hipo-osmolaridade`, acao:"Hiponatremia hipotônica. Investigar SIADH, ICC, cirrose, hipotireoidismo.", cor:"warn"};
  if(s > 320) return {risco:`Osm ${s} — Hiperosmolaridade grave`, acao:"EHH (estado hiperosmolar) ou CAD avançado. Hidratação cautelosa (↓Osm não >3-4/h). Risco edema cerebral em correção rápida.", cor:"crit"};
  if(s > 295) return {risco:`Osm ${s} — Hiperosmolaridade`, acao:"Avaliar contexto. Hidratação adequada.", cor:"warn"};
  return {risco:`Osm ${s} — Normal`, acao:"Padrão normal.", cor:"ok"};
}
},
);
