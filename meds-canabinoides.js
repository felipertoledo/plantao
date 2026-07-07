/* ============================================================
   meds-canabinoides.js — Canabinoides medicinais (ANVISA)
   Canabidiol (CBD) e CBD+THC (espectro completo / com THC).
   Schema idêntico às demais medicações. grupo:"neuro".
   ============================================================ */
(function(){
MEDICACOES.push(

/* ================= CANABIDIOL (CBD) ================= */
{
  id:"med-canabidiol", contexto:["ubs","pa"], grupo:"neuro",
  classe:"Canabinoide (fitofármaco) — CBD, não psicoativo",
  nome:"Canabidiol (CBD)",
  sin:["CBD","Cannabidiol","Epidiolex / Epidyolex","Canabidiol Prati-Donaduzzi"],
  formas:[
    "Solução oral (óleo) — concentrações variadas (ex.: 20, 50, 79, 100, 200 mg/mL)",
    "Produto registrado ANVISA e produtos importados/manipulados com autorização sanitária"
  ],
  resumo:"Canabinoide NÃO psicoativo. Evidência FORTE apenas em epilepsias refratárias específicas (Dravet, Lennox-Gastaut, esclerose tuberosa); demais usos com evidência limitada. Início baixo e titulação lenta ('start low, go slow'). Hepatotóxico — monitorar TGO/TGP. Interage pelo citocromo P450 (clobazam, valproato, varfarina). Regulado pela ANVISA.",
  dose_rapida:"Epilepsia refratária: iniciar 2,5 mg/kg 2×/dia (5 mg/kg/dia) → ↑ até 10 (máx 20) mg/kg/dia",
  doses:[
    {ind:"Epilepsia refratária (Dravet / Lennox-Gastaut / esclerose tuberosa)", dose:"Início 2,5 mg/kg/dose 2×/dia (5 mg/kg/dia); aumentar a cada 1-2 sem até 5 mg/kg/dose 2×/dia (10 mg/kg/dia); máx 20 mg/kg/dia", obs:"Indicação com MAIOR evidência (aprovação FDA/EMA/ANVISA — Epidiolex). Sob neuro/epileptologista."},
    {ind:"Dor crônica / neuropática (adjuvante)", dose:"Iniciar 5-25 mg/dia (1×/noite); ↑ gradual conforme resposta e tolerância", obs:"Evidência limitada/heterogênea. NÃO é 1ª linha; usar após opções estabelecidas."},
    {ind:"Ansiedade / distúrbios do sono (adjuvante)", dose:"Faixas estudadas amplas (25-300+ mg/dia), sem consenso; começar baixo", obs:"Evidência preliminar. Não substituir tratamento comprovado; decisão compartilhada."},
    {ind:"Autismo — irritabilidade/comportamento (adjuvante, off-label)", dose:"Titulação individualizada por peso, início baixo", obs:"Evidência emergente/limitada. Acompanhamento próximo."}
  ],
  ajustes:{
    irc:"Sem ajuste específico estabelecido; dados limitados — cautela.",
    iht:"⚠ Metabolismo hepático — reduzir dose e titular mais devagar em disfunção hepática (Child-Pugh B/C); risco de acúmulo.",
    idoso:"Iniciar mais baixo; maior sensibilidade a sedação e a interações (polifarmácia).",
    gestante:"Evitar — segurança não estabelecida, dados insuficientes.",
    aleita:"Evitar — canabinoides passam ao leite; segurança não estabelecida.",
    ped:"Principal uso pediátrico = epilepsia refratária (dose por peso, acima), sob especialista."
  },
  mecanismo:"Mecanismo não totalmente elucidado. NÃO age primariamente como agonista dos receptores CB1/CB2 (por isso não é psicoativo). Modula TRPV1, GPR55, receptor 5-HT1A, sinalização de adenosina e canais iônicos — efeito anticonvulsivante, anti-inflamatório e ansiolítico propostos. Inibe enzimas do citocromo P450 (base das interações).",
  farmacocin:{
    absorc:"Oral, lipossolúvel — biodisponibilidade aumenta com alimento gorduroso (tomar junto às refeições p/ nível mais estável).",
    distrib:"Altamente lipofílico; grande volume de distribuição; atravessa a barreira hematoencefálica.",
    metab:"Hepático — CYP3A4 e CYP2C19. INIBE CYP2C19, CYP3A4, CYP2C9, CYP1A2, CYP2B6 e UGT.",
    elimin:"Predomínio biliar/fecal; renal minoritária.",
    meiavida:"~56-61 h em uso crônico (variável).",
    ligacao:">94% a proteínas plasmáticas."
  },
  interacoes:[
    {droga:"Clobazam", efeito:"↑↑ N-desmetilclobazam (metabólito ativo) → sedação; frequentemente exige reduzir o clobazam. Interação clássica."},
    {droga:"Valproato", efeito:"↑ risco de hepatotoxicidade (elevação de transaminases). Monitorar função hepática; pode exigir ajuste."},
    {droga:"Varfarina", efeito:"↑ INR (inibe CYP2C9) — monitorar de perto."},
    {droga:"Substratos de CYP3A4/CYP2C19 (midazolam, tacrolimo, alguns ISRS, etc.)", efeito:"↑ níveis — vigiar toxicidade e ajustar."},
    {droga:"Depressores do SNC (BZD, opioides, álcool)", efeito:"↑ sedação."},
    {droga:"Indutores/inibidores de CYP3A4/2C19 (rifampicina, cetoconazol)", efeito:"Alteram o nível sérico do CBD."}
  ],
  efeitos:[
    {tipo:"comum", item:"Sonolência/sedação e fadiga"},
    {tipo:"comum", item:"Diminuição do apetite"},
    {tipo:"comum", item:"Diarreia e náusea"},
    {tipo:"comum", item:"Irritabilidade e alteração do sono"},
    {tipo:"sério", item:"Elevação de transaminases (hepatotoxicidade) — dose-dependente, maior com valproato/hepatopatia. Monitorar TGO/TGP/BT."},
    {tipo:"sério", item:"Sedação importante, sobretudo associado a clobazam ou outros depressores do SNC"},
    {tipo:"raro", item:"Hipersensibilidade / rash"},
    {tipo:"raro", item:"Ideação/comportamento suicida (efeito de classe dos antiepilépticos — vigiar humor)"}
  ],
  alertas:[
    {nivel:"crit", txt:"Hepatotoxicidade: dosar TGO/TGP e bilirrubinas ANTES e durante o tratamento (maior risco nos primeiros meses, com valproato ou hepatopatia). Suspender se elevação significativa."},
    {nivel:"warn", txt:"Interação com clobazam e valproato é a REGRA — reavaliar as doses concomitantes ao iniciar/titular."},
    {nivel:"warn", txt:"Regulatório (ANVISA): produto de Cannabis exige prescrição específica. CBD com THC ≤0,2% → em geral receita de controle especial (branca, 2 vias). Confirmar a exigência vigente (RDC 327/2019, RDC 660/2022 e Portaria 344/98) antes de prescrever."},
    {nivel:"info", txt:"Evidência FORTE só em epilepsias refratárias específicas. Nos demais usos: decisão compartilhada, expectativa realista, acompanhamento — não substituir tratamentos de eficácia comprovada."},
    {nivel:"warn", txt:"Não recomendado na gestação/lactação (segurança não estabelecida)."}
  ],
  monit:[
    "Função hepática (TGO, TGP, bilirrubinas) antes de iniciar e periodicamente (ex.: 1, 3 e 6 meses; e conforme dose/comedicação).",
    "Dose/nível de clobazam e valproato quando associados.",
    "Sonolência, apetite/peso, humor e frequência de crises (se epilepsia).",
    "INR se em uso de varfarina."
  ],
  preparo:"Óleo/solução oral. Tomar preferencialmente junto às refeições (a gordura melhora e estabiliza a absorção). Iniciar na MENOR dose e titular devagar ('start low, go slow'), ajustando pela resposta e tolerância. Agitar o frasco e usar seringa dosadora.",
  gravidez:"Sem categoria formal — evitar (dados insuficientes).",
  sus:"Não fornecido rotineiramente pelo SUS; acesso via produto registrado (compra), importação autorizada ou judicialização. Alguns estados têm programas específicos — confirmar localmente.",
  referencias:["Devinsky et al. — canabidiol em Dravet e Lennox-Gastaut (NEJM)","ANVISA RDC 327/2019 e RDC 660/2022","Bula do produto registrado / SmPC Epidyolex (EMA)"]
},

/* ================= CANABIDIOL + THC (espectro completo) ================= */
{
  id:"med-cbd-thc", contexto:["ubs","pa"], grupo:"neuro",
  classe:"Canabinoide (fitofármaco) — CBD:THC / contém THC (PSICOATIVO)",
  nome:"Canabidiol + THC (espectro completo / com THC)",
  sin:["CBD:THC","Full spectrum","Nabiximols (Sativex — THC:CBD ~1:1)","THC (tetrahidrocanabinol)","Dronabinol / Nabilona (THC sintético)"],
  formas:[
    "Solução oral (óleo) com razões CBD:THC variadas (ex.: 1:1, 2:1, 20:1)",
    "Nabiximols spray oromucoso (2,7 mg THC + 2,5 mg CBD por borrifada) — onde disponível",
    "Dronabinol / nabilona (THC sintético, cápsulas) — onde disponível"
  ],
  resumo:"Contém THC — PSICOATIVO. Melhor suporte de evidência: espasticidade da esclerose múltipla, náusea/vômito por quimioterapia refratários, dor crônica/neuropática, estímulo do apetite (caquexia) e sintomas em cuidados paliativos. 'Start low, go slow' é ainda mais crítico. CONTRAINDICADO em psicose e cardiopatia grave; evitar em gestante, lactante e adolescente. Regulação ANVISA mais restrita (THC).",
  dose_rapida:"Titular do menor possível. Nabiximols: 1 borrifada, ↑ 1/dia conforme tolerância (máx ~12/dia). Óleo com THC: iniciar 1-2,5 mg de THC à noite.",
  doses:[
    {ind:"Espasticidade na esclerose múltipla (refratária)", dose:"Nabiximols oromucoso: 1 borrifada; aumentar 1 borrifada/dia conforme resposta, máx 12/dia (espaçar as doses). Óleo: titular THC gradualmente.", obs:"Indicação com melhor evidência para THC:CBD (nabiximols)."},
    {ind:"Náusea/vômito por quimioterapia (refratários)", dose:"Dronabinol/THC: iniciar baixo (ex.: 2,5 mg) antes da quimio e titular; ou razão CBD:THC individualizada", obs:"Quando antieméticos convencionais falham (2ª/3ª linha)."},
    {ind:"Dor crônica / neuropática (adjuvante)", dose:"Iniciar 1-2,5 mg de THC à noite (+ CBD conforme a razão); ↑ lento a cada 2-3 dias", obs:"Evidência modesta; equilibrar analgesia × efeitos psicoativos."},
    {ind:"Estímulo do apetite / caquexia (câncer, HIV)", dose:"THC/dronabinol em dose baixa antes das refeições, titulado", obs:"Efeito variável."},
    {ind:"Cuidados paliativos (sintomas refratários)", dose:"Individualizar; menor dose eficaz", obs:"Abordagem sintomática; expectativa realista."}
  ],
  ajustes:{
    irc:"Sem ajuste específico estabelecido; cautela.",
    iht:"⚠ Metabolismo hepático — reduzir e titular devagar em hepatopatia; THC acumula.",
    idoso:"⚠ MUITO mais sensível ao THC — hipotensão ortostática, queda, confusão, sedação. Começar na MENOR dose.",
    gestante:"CONTRAINDICADO — THC atravessa a placenta; associado a desfechos adversos no neurodesenvolvimento.",
    aleita:"CONTRAINDICADO — THC concentra-se no leite materno.",
    ped:"Evitar THC em crianças/adolescentes (cérebro em desenvolvimento; risco cognitivo/psiquiátrico). Só excepcional, sob especialista."
  },
  mecanismo:"THC = agonista PARCIAL dos receptores canabinoides CB1 (SNC — efeito psicoativo, analgésico, antiemético e orexígeno) e CB2 (imune). O CBD associado modula e pode atenuar alguns efeitos adversos do THC. O componente CB1 central explica euforia/disforia, alteração cognitiva, taquicardia e hipotensão.",
  farmacocin:{
    absorc:"Oral/oromucoso, lipossolúvel. Via ORAL tem 1ª passagem alta e início LENTO (1-2 h) — não repetir dose cedo. Oromucoso tem início mais previsível.",
    distrib:"Muito lipofílico; acumula em tecido adiposo; atravessa BHE e placenta.",
    metab:"Hepático — CYP2C9 e CYP3A4 (THC → 11-OH-THC, metabólito ativo).",
    elimin:"Fecal e renal (metabólitos); eliminação lenta com acúmulo em uso crônico.",
    meiavida:"THC terminal longa e variável (dias em uso crônico, por redistribuição do tecido adiposo).",
    ligacao:">95% a proteínas plasmáticas."
  },
  interacoes:[
    {droga:"Depressores do SNC (álcool, BZD, opioides, hipnóticos)", efeito:"↑↑ sedação, risco de depressão respiratória e quedas."},
    {droga:"Anti-hipertensivos", efeito:"↑ hipotensão e ortostase (THC)."},
    {droga:"Estimulantes/simpatomiméticos", efeito:"↑ taquicardia."},
    {droga:"Inibidores/indutores de CYP3A4 e CYP2C9 (cetoconazol ↑; rifampicina ↓)", efeito:"Alteram o nível sérico do THC."},
    {droga:"Varfarina", efeito:"Pode ↑ INR — monitorar."},
    {droga:"Antipsicóticos/anticolinérgicos", efeito:"Efeitos aditivos (taquicardia, sedação, boca seca)."}
  ],
  efeitos:[
    {tipo:"comum", item:"Efeitos psicoativos: euforia, disforia, ansiedade, sensação de 'chapado', alteração da percepção"},
    {tipo:"comum", item:"Tontura, sonolência e boca seca"},
    {tipo:"comum", item:"Taquicardia e hipotensão ortostática"},
    {tipo:"comum", item:"Alteração de concentração e memória; prejuízo para dirigir/operar máquinas"},
    {tipo:"sério_agudo", item:"Crise de ansiedade/pânico e reação disfórica aguda (mais com dose alta ou usuário inexperiente)"},
    {tipo:"sério", item:"Sintomas psicóticos / desencadeamento de psicose (sobretudo com história pessoal ou familiar)"},
    {tipo:"sério", item:"Hipotensão sintomática, síncope e quedas (idoso)"},
    {tipo:"sério_cronico", item:"Dependência / uso problemático; síndrome de hiperêmese canabinoide; possível impacto cognitivo com uso pesado prolongado"},
    {tipo:"raro", item:"Taquiarritmia e eventos cardiovasculares em cardiopatas"}
  ],
  alertas:[
    {nivel:"crit", txt:"CONTRAINDICADO: história pessoal ou familiar de psicose/esquizofrenia (risco de desencadear); cardiopatia grave ou arritmia instável; gestação e lactação."},
    {nivel:"crit", txt:"PSICOATIVO: orientar a NÃO dirigir/operar máquinas; risco de queda no idoso; guardar longe de crianças."},
    {nivel:"warn", txt:"'Start low, go slow' é obrigatório — a via oral tem início lento (1-2 h); NÃO repetir a dose cedo (evita superdosagem e reação disfórica)."},
    {nivel:"warn", txt:"Cautela: adolescentes (cérebro em desenvolvimento), transtorno por uso de substâncias, transtorno bipolar."},
    {nivel:"warn", txt:"Regulatório (ANVISA): produto com THC >0,2% tem exigência mais restrita — geralmente Notificação de Receita 'A' (amarela). Confirmar a regra vigente (RDC 327/2019, RDC 660/2022, Portaria 344/98) antes de prescrever."}
  ],
  monit:[
    "Sintomas psicoativos, humor, ansiedade e sinais de psicose a cada ajuste.",
    "PA (deitado e em pé) e FC — sobretudo no idoso e no início.",
    "Sedação, cognição e risco de queda; capacidade de dirigir.",
    "Resposta sintomática (dor/espasticidade/náusea/apetite) × efeitos adversos — relação risco-benefício.",
    "Sinais de uso problemático/dependência em uso prolongado."
  ],
  preparo:"Óleo oromucoso/oral (ou spray). Iniciar com a MENOR dose de THC (ex.: 1-2,5 mg), de preferência à noite; aumentar devagar a cada 2-3 dias conforme resposta e tolerância. Como a via oral leva 1-2 h para o pico, NÃO repetir a dose antes disso. Titular pelo efeito clínico, buscando a menor dose eficaz.",
  gravidez:"Contraindicado.",
  sus:"Não fornecido rotineiramente; acesso via produto autorizado/importação/judicialização. THC tem controle regulatório mais restrito.",
  referencias:["Nabiximols (Sativex) — SmPC, espasticidade na esclerose múltipla","Whiting et al., JAMA 2015 — revisão sistemática de canabinoides medicinais","ANVISA RDC 327/2019, RDC 660/2022; Portaria 344/98"]
}

);
})();
