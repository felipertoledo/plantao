/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — CALCULADORAS ADICIONAIS (PARTE 3)
   Padua, Caprini, BISAP, qSOFA, HAS-BLED, FOUR
   =========================================================== */

const CALCS_EXTRA3 = [

/* ============== PADUA — TEV em paciente clínico hospitalizado ============== */
{id:"padua", nome:"Padua — Risco de TEV em paciente clínico hospitalizado", sis:"hemo",
desc:"Predictive score para TROMBOEMBOLISMO VENOSO em pacientes CLÍNICOS hospitalizados (não-cirúrgicos). Indica profilaxia farmacológica. Padua ≥4 = ALTO risco — anticoagulação profilática.",
fields:[
{tipo:"bool", id:"a", label:"Câncer ativo (metastático, ou tratamento <6m) (+3)"},
{tipo:"bool", id:"b", label:"TEV prévio (excluir trombose venosa superficial) (+3)"},
{tipo:"bool", id:"c", label:"Mobilidade reduzida — repouso no leito ≥3 dias (+3)"},
{tipo:"bool", id:"d", label:"Trombofilia conhecida (deficiência AT, prot C/S, fator V Leiden, mutação protrombina, anticorpos antifosfolípide) (+3)"},
{tipo:"bool", id:"e", label:"Trauma ou cirurgia recente (≤1 mês) (+2)"},
{tipo:"bool", id:"f", label:"Idade ≥70 anos (+1)"},
{tipo:"bool", id:"g", label:"Insuficiência cardíaca e/ou respiratória (+1)"},
{tipo:"bool", id:"h", label:"IAM ou AVC agudo (+1)"},
{tipo:"bool", id:"i", label:"Infecção aguda e/ou doença reumatológica (+1)"},
{tipo:"bool", id:"j", label:"Obesidade (IMC ≥30) (+1)"},
{tipo:"bool", id:"k", label:"Tratamento hormonal em vigência (ACO, TRH) (+1)"},
],
calc:function(v){
  let s = 0;
  if(v.a) s+=3; if(v.b) s+=3; if(v.c) s+=3; if(v.d) s+=3;
  if(v.e) s+=2;
  if(v.f) s+=1; if(v.g) s+=1; if(v.h) s+=1; if(v.i) s+=1; if(v.j) s+=1; if(v.k) s+=1;
  return s;
},
interp:function(s){
  if(s<4) return {risco:`Padua ${s} — BAIXO RISCO de TEV`, acao:"Profilaxia farmacológica NÃO INDICADA rotineiramente. Profilaxia MECÂNICA (deambulação precoce, meias de compressão) em todos. Reavaliar diariamente.", cor:"ok"};
  return {risco:`Padua ${s} — ALTO RISCO de TEV (≥4)`, acao:"⚠ INDICAR profilaxia farmacológica: ENOXAPARINA 40 mg SC 1×/d OU HNF 5000 UI SC 8/8h. Avaliar contraindicações (sangramento ativo, plaquetopenia <50, IRC grave para enoxa). Em IRC grave: HNF é preferida. Reavaliar diariamente.", cor:"warn"};
}
},

/* ============== CAPRINI — TEV em paciente cirúrgico ============== */
{id:"caprini", nome:"Caprini — Risco de TEV em paciente cirúrgico", sis:"hemo",
desc:"Score para TROMBOEMBOLISMO VENOSO em pacientes CIRÚRGICOS. Estratifica risco e indica intensidade da profilaxia. Versão simplificada.",
fields:[
{tipo:"select", id:"idade", label:"Idade", opts:[
{val:"0", label:"0 — <41 anos"},
{val:"1", label:"1 — 41-60 anos"},
{val:"2", label:"2 — 61-74 anos"},
{val:"3", label:"3 — ≥75 anos"},
]},
{tipo:"bool", id:"a", label:"Cirurgia menor planejada (+1)"},
{tipo:"bool", id:"b", label:"IMC >25 (+1)"},
{tipo:"bool", id:"c", label:"Edema MMII / varizes (+1)"},
{tipo:"bool", id:"d", label:"Gestação ou puerpério (+1)"},
{tipo:"bool", id:"e", label:"História de aborto inexplicado/recorrente (+1)"},
{tipo:"bool", id:"f", label:"ACO ou TRH em uso (+1)"},
{tipo:"bool", id:"g", label:"Sepse / pneumonia (<1m) (+1)"},
{tipo:"bool", id:"h", label:"Função pulmonar anormal / DPOC (+1)"},
{tipo:"bool", id:"i", label:"IAM agudo (+1)"},
{tipo:"bool", id:"j", label:"ICC (<1m) (+1)"},
{tipo:"bool", id:"k", label:"Repouso no leito (paciente clínico) (+1)"},
{tipo:"bool", id:"l", label:"Cirurgia artroscópica (+2)"},
{tipo:"bool", id:"m", label:"Cirurgia laparoscópica >45 min (+2)"},
{tipo:"bool", id:"n", label:"Cirurgia aberta >45 min (+2)"},
{tipo:"bool", id:"o", label:"Malignidade ativa (+2)"},
{tipo:"bool", id:"p", label:"Confinamento ao leito >72h (+2)"},
{tipo:"bool", id:"q", label:"Imobilização (gesso) <1m (+2)"},
{tipo:"bool", id:"r", label:"Cateter venoso central (+2)"},
{tipo:"bool", id:"s", label:"TEV prévio (+3)"},
{tipo:"bool", id:"t", label:"História familiar de TEV (+3)"},
{tipo:"bool", id:"u", label:"Fator V Leiden / mutação protrombina / antifosfolípide / outras trombofilias (+3)"},
{tipo:"bool", id:"v", label:"AVC <1m (+5)"},
{tipo:"bool", id:"w", label:"Artroplastia eletiva (+5)"},
{tipo:"bool", id:"x", label:"Fratura quadril/pelve/perna (+5)"},
{tipo:"bool", id:"y", label:"Trauma raquimedular agudo <1m (+5)"},
],
calc:function(v){
  let s = parseInt(v.idade||0);
  ['a','b','c','d','e','f','g','h','i','j','k'].forEach(k => { if(v[k]) s+=1; });
  ['l','m','n','o','p','q','r'].forEach(k => { if(v[k]) s+=2; });
  ['s','t','u'].forEach(k => { if(v[k]) s+=3; });
  ['v','w','x','y'].forEach(k => { if(v[k]) s+=5; });
  return s;
},
interp:function(s){
  if(s===0) return {risco:`Caprini ${s} — RISCO MUITO BAIXO`, acao:"Deambulação precoce. Profilaxia farmacológica não indicada.", cor:"ok"};
  if(s<=2) return {risco:`Caprini ${s} — BAIXO RISCO`, acao:"Profilaxia MECÂNICA (meias compressão / CPI). Considerar farmacológica conforme contexto cirúrgico.", cor:"ok"};
  if(s<=4) return {risco:`Caprini ${s} — RISCO MODERADO`, acao:"Profilaxia FARMACOLÓGICA: enoxaparina 40 mg SC 1×/d OU HNF 5000 UI 8/8h. Considerar combinação mecânica + farmacológica.", cor:"warn"};
  return {risco:`Caprini ${s} — ALTO RISCO`, acao:"⚠ Profilaxia FARMACOLÓGICA + MECÂNICA combinada. Considerar PROLONGAR profilaxia até 4-5 sem pós-alta em cirurgia oncológica abdominal/pélvica ou artroplastia. Enoxaparina 40 mg/d (ou 30 mg 12/12h em alto risco).", cor:"crit"};
}
},

/* ============== BISAP — Pancreatite Aguda ============== */
{id:"bisap", nome:"BISAP — Gravidade da Pancreatite Aguda", sis:"gi",
desc:"Bedside Index for Severity in Acute Pancreatitis. Aplicar nas PRIMEIRAS 24H. Score ≥3 = pancreatite GRAVE (10-20% mortalidade) — UTI / acompanhamento próximo.",
fields:[
{tipo:"bool", id:"b", label:"BUN >25 mg/dL (Ureia >53) (+1)"},
{tipo:"bool", id:"i", label:"Impaired mental status — alteração consciência (GCS <15) (+1)"},
{tipo:"bool", id:"s", label:"SIRS — ≥2 dos critérios SIRS (Tax >38 ou <36, FC >90, FR >20 ou pCO₂ <32, leuco >12 ou <4 ou >10% bastões) (+1)"},
{tipo:"bool", id:"a", label:"Age — idade >60 anos (+1)"},
{tipo:"bool", id:"p", label:"Pleural effusion — derrame pleural na imagem (+1)"},
],
calc:function(v){
  let s = 0;
  ['b','i','s','a','p'].forEach(k => { if(v[k]) s+=1; });
  return s;
},
interp:function(s){
  if(s<=2) return {risco:`BISAP ${s} — Pancreatite LEVE-MODERADA (mortalidade <2%)`, acao:"Enfermaria. Hidratação vigorosa primeiras 24-48h (Ringer Lactato 250-500 mL/h, reavaliar). Analgesia (evitar AINE — preferir dipirona + opioide). Repouso digestivo até melhora da dor e queda de amilase/lipase. Investigar etiologia (USG vias biliares + perfil lipídico + cálcio + álcool).", cor:"ok"};
  if(s===3) return {risco:`BISAP ${s} — Pancreatite POTENCIALMENTE GRAVE (mortalidade 5-8%)`, acao:"⚠ Considerar UTI / unidade semi-intensiva. Hidratação vigorosa, controle de dor, observação rigorosa. TC abdome 48-72h se piora ou suspeita de complicação. ⚠ ATB profilático NÃO indicado em pancreatite estéril.", cor:"warn"};
  return {risco:`BISAP ${s} — Pancreatite GRAVE (mortalidade 10-20%)`, acao:"⚠ UTI. Suporte intensivo, hidratação dirigida por hemodinâmica, suporte ventilatório se SARA, RRT se IRA. ⚠ TC contrastada 72h para necrose. ATB se infecção confirmada (necrose infectada, colangite). Avaliação cirúrgica em coleções, necrosectomia tardia.", cor:"crit"};
}
},

/* ============== qSOFA — Sepse ============== */
{id:"qsofa", nome:"qSOFA — Triagem rápida de Sepse fora da UTI", sis:"infecto",
desc:"Quick SOFA. Aplicar em paciente com infecção SUSPEITA fora da UTI. ⚠ qSOFA ≥2 = ALTO risco de mortalidade — investigar SEPSE (SOFA completo, lactato, hemoculturas, ATB precoce). ⚠ NÃO é diagnóstico de sepse — é FERRAMENTA DE TRIAGEM.",
fields:[
{tipo:"select", id:"fr", label:"Frequência respiratória", opts:[
{val:"0", label:"0 — <22 ipm"},
{val:"1", label:"1 — ≥22 ipm"},
]},
{tipo:"select", id:"mc", label:"Estado mental", opts:[
{val:"0", label:"0 — Glasgow 15 (alerta)"},
{val:"1", label:"1 — Glasgow <15 (qualquer alteração)"},
]},
{tipo:"select", id:"pas", label:"Pressão arterial sistólica", opts:[
{val:"0", label:"0 — PAS >100 mmHg"},
{val:"1", label:"1 — PAS ≤100 mmHg"},
]},
],
calc:function(v){
  let s = 0;
  s += parseInt(v.fr||0);
  s += parseInt(v.mc||0);
  s += parseInt(v.pas||0);
  return s;
},
interp:function(s){
  if(s<2) return {risco:`qSOFA ${s} — Baixo risco`, acao:"Mantém investigação da infecção. Reavaliar serialmente — qSOFA pode subir. Considerar SIRS, NEWS2, hemograma, lactato, gasometria se suspeita clínica forte.", cor:"ok"};
  return {risco:`qSOFA ${s} — ALTO RISCO de mortalidade (≥2) — possível SEPSE`, acao:"⚠ ⚠ INVESTIGAR SEPSE: 2 HEMOCULTURAS + URINOCULTURA + outras culturas conforme foco. LACTATO sérico. ⚠ ANTIBIÓTICO EMPÍRICO em ≤1 hora (cobertura do foco suspeito). CRISTALOIDE 30 mL/kg em 3h se hipoperfusão. Reavaliar PA, perfusão, diurese. Calcular SOFA completo. ⚠ Comunicar ao plantonista/UTI.", cor:"crit"};
}
},

/* ============== HAS-BLED — Risco de Sangramento em Anticoagulação ============== */
{id:"has-bled", nome:"HAS-BLED — Risco de Sangramento em paciente em anticoagulação (FA)", sis:"hemo",
desc:"Avalia risco de sangramento maior em paciente com FA em anticoagulação. HAS-BLED ≥3 = alto risco — NÃO é razão para suspender anticoagulação, mas indica MONITORIZAÇÃO PRÓXIMA + correção de fatores reversíveis. Sempre comparar com CHA₂DS₂-VASc (risco trombótico).",
fields:[
{tipo:"bool", id:"h", label:"Hipertensão arterial NÃO controlada (PAS >160 mmHg) (+1)"},
{tipo:"bool", id:"a1", label:"Função renal alterada (cr >2,3 OU TFG <60 OU diálise) (+1)"},
{tipo:"bool", id:"a2", label:"Função hepática alterada (bilirrubina >2× OU TGO/TGP/FA >3×) (+1)"},
{tipo:"bool", id:"s", label:"AVC prévio (especialmente hemorrágico) (+1)"},
{tipo:"bool", id:"b", label:"Sangramento prévio ou predisposição (anemia significativa, sangramento ativo) (+1)"},
{tipo:"bool", id:"l", label:"Labilidade do INR (tempo no alvo terapêutico <60% em uso de warfarina) (+1)"},
{tipo:"bool", id:"e", label:"Idade >65 anos (+1)"},
{tipo:"bool", id:"d1", label:"Uso de drogas que aumentam sangramento (AAS, AINE, antiplaquetário, corticoide alto) (+1)"},
{tipo:"bool", id:"d2", label:"Uso de álcool (≥8 doses/sem) (+1)"},
],
calc:function(v){
  let s = 0;
  ['h','a1','a2','s','b','l','e','d1','d2'].forEach(k => { if(v[k]) s+=1; });
  return s;
},
interp:function(s){
  if(s<=2) return {risco:`HAS-BLED ${s} — Risco BAIXO-MODERADO de sangramento`, acao:"Anticoagulação geralmente segura. Manter monitorização habitual (INR mensal em warfarina; função renal a cada 6-12m em DOAC). Corrigir fatores reversíveis identificados.", cor:"ok"};
  return {risco:`HAS-BLED ${s} — ALTO RISCO de sangramento (≥3)`, acao:"⚠ NÃO É RAZÃO PARA SUSPENDER anticoagulação (a menos que CHA₂DS₂-VASc seja baixo). ⚠ Comparar com CHA₂DS₂-VASc — geralmente benefício de anticoagular > risco. ⚠ CORRIGIR fatores reversíveis: tratar HAS, suspender AAS/AINE se possível, reduzir álcool, ajustar varfarina para INR no alvo. Monitorização mais próxima. Considerar DOAC vs varfarina (DOAC tem menor risco AVCh).", cor:"warn"};
}
},

/* ============== FOUR — Coma ============== */
{id:"four", nome:"FOUR Score — Avaliação do Coma (alternativa à Glasgow)", sis:"neuro",
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

];

/* Adicionar ao array CALCS principal */
CALCS_EXTRA3.forEach(c => {
  CALCS.push(c);
  CALCS_BY_ID[c.id] = c;
});
