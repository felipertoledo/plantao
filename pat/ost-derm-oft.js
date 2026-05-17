/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — pat/ost-derm-oft.js
   7 patologias
   Sistemas: derm, oft, ost
   =========================================================== */

PATOLOGIAS.push(

/* ============== DERM (2) ============== */

{id:"herpes-zoster", contexto:["pa","ubs"], sis:"derm", grav:"media",
nome:"Herpes-Zóster",
sin:["herpes zoster","zoster","cobreiro","neuralgia pós-herpética"],
def:"Reativação do varicela-zóster latente em gânglio sensitivo → erupção vesicular dolorosa em UM DERMÁTOMO unilateral, sem ultrapassar linha média. Dor pode preceder lesões em 1-5 dias.",
exames:["Diagnóstico CLÍNICO","PCR vesícula se atípico","HIV se <50a sem causa identificada"],
rx:[
{etapa:"atb", d:"Aciclovir",do:"800 mg VO 5×/d × 7 dias",via:"VO",o:"INICIAR <72h. Após 72h: só se ainda novas lesões."},
{etapa:"atb", d:"Valaciclovir",do:"1 g VO 8/8h × 7 dias",via:"VO",o:"Mais conveniente (3×/d) — pró-droga, melhor biodisponibilidade."},
{etapa:"atb", d:"Aciclovir IV",do:"10 mg/kg IV 8/8h × 7-10 dias",via:"IV",o:"Imunossuprimido, oftálmico, disseminado, SNC."},
{etapa:"adj", d:"Analgesia",do:"Gabapentina 300-1200 mg/d divididos + dipirona + tramadol",via:"VO",o:"Dor neuropática. Amitriptilina 25-75 mg à noite alternativa."},
{etapa:"escala", d:"Cuidado lesão",do:"Compressas frias + sabão neutro + curativo gaze",via:"Tópico",o:"NÃO usar antivirais tópicos isolados. NÃO romper vesículas."},
],
alertas:[
{t:"crit",x:"ZÓSTER OFTÁLMICO (1º ramo trigêmeo, sinal Hutchinson — vesícula ponta nariz): EMERGÊNCIA oftalmológica. Aciclovir IV + oftalmo URGENTE. Risco ceratite, uveíte, cegueira."},
{t:"crit",x:"Zóster DISSEMINADO (>20 vesículas fora dermátomo) → imunossupressão (HIV, neoplasia). Aciclovir IV + investigar."},
{t:"warn",x:"Ramsay-Hunt: zóster gânglio geniculado — paralisia facial + vesículas conduto + perda auditiva. Aciclovir + corticoide."},
{t:"warn",x:"Vacina (Shingrix): reduz incidência + neuralgia pós-herpética. >50a."},
],
fisio:"VZV permanece latente em gânglios da raiz dorsal pós-varicela. Reativa com idade + imunossupressão + estresse. Replicação no gânglio → migração axonal centrífuga → vesículas dermatomais. Inflamação ganglionar causa neuralgia (aguda e como neuralgia pós-herpética em até 30% >60a).",
mec:[
{d:"Aciclovir",x:"Análogo guanosina — ativado por timidina-quinase viral (seletividade); trifosfato compete com dGTP na DNA polimerase viral → terminação cadeia."},
{d:"Gabapentina",x:"Ligante α2δ de canais cálcio neuronais → ↓liberação glutamato. Eficaz dor neuropática."},
],
diretriz:"IDSA Guidelines. CDC Shingles Guidelines.",
fluxo:null, calcs:[],
imgs:[
{src:"https://upload.wikimedia.org/wikipedia/commons/5/54/Herpes_Zoster_am_Hals.JPG",
alt:"Vesículas agrupadas em base eritematosa em dermátomo torácico",
caption:"Herpes-zóster torácico — vesículas agrupadas em base eritematosa, distribuição dermatomal unilateral.",
source:"Wikimedia Commons / Fisle (CC BY-SA 3.0)"},
],
},
{id:"sjs-net", contexto:["pa","ubs"], sis:"derm", grav:"alta",
nome:"Stevens-Johnson / NET / DRESS",
sin:["Stevens-Johnson","SJS","NET","necrólise epidérmica","DRESS"],
def:"Reações cutâneas graves a fármacos. SJS: descamação <10% SCT + ≥2 mucosas. NET (Lyell): >30%. Overlap 10-30%. DRESS: rash + febre + linfadenopatia + eosinofilia + acometimento sistêmico (hepatite, nefrite).",
exames:["HMG com diferencial (eosinofilia em DRESS)","Função renal + hepática","Eletrólitos","Hemoculturas","Biópsia de pele (necrose epidérmica)","RX tórax"],
rx:[
{etapa:"escala", d:"SUSPENDER agente causador",do:"IMEDIATO",via:"—",o:"PILAR. Identificar tudo nos últimos 1-8 sem (alopurinol, sulfa, anticonvulsivante aromático, AINE, β-lactâmico, dapsona, lamotrigina)."},
{etapa:"escala", d:"Unidade de Queimados",do:"Transferência",via:"—",o:"NET >10% deve ser em centro especializado — manejo similar a queimadura grande."},
{etapa:"escala", d:"Reposição volêmica",do:"Cristaloide 2 mL × kg × %SCT em 24h (50% nas 1ªs 8h)",via:"IV",o:"Como queimadura. Acesso central se >30%."},
{etapa:"escala", d:"Cuidados de pele",do:"Não-aderente; prata ou Vaselina/petrolato",via:"—",o:"NÃO debridar agressivamente; evitar adesivos."},
{etapa:"escala", d:"Cuidado ocular",do:"Lubrificação + corticoide tópico + descolamento sinéquias",via:"Tópico",o:"Oftalmologia precoce — sequelas oculares = causa #1 morbidade tardia."},
{etapa:"adj", d:"DRESS — Corticoide",do:"Prednisolona 1 mg/kg/d com desmame lento (6-8 sem)",via:"VO/IV",o:"Maioria dos casos. Rebote frequente."},
{etapa:"escala", d:"Ciclosporina (NET)",do:"3-5 mg/kg/d × 7-10 dias",via:"VO",o:"Evidência observacional. Promissor."},
],
alertas:[
{t:"crit",x:"NÃO RE-EXPOR ao fármaco — risco NET fulminante. Anotar PRONTUÁRIO + cartão alerta + orientar."},
{t:"crit",x:"Sinal de Nikolsky positivo + lesão alvo atípica + mucoso = SJS/NET até prova contrária."},
{t:"warn",x:"DRESS aparece 2-8 sem APÓS início (mais tardio que SJS) — anticonvulsivante aromático + alopurinol clássicos."},
{t:"warn",x:"SCORTEN: idade ≥40, FC ≥120, malignidade, SCT ≥10%, ureia ↑, glicose ↑, HCO₃ ↓. Cada ponto = ↑mortalidade."},
],
fisio:"Reação imune-mediada (T-citotóxica) com apoptose maciça de queratinócitos. HLA específicos predispõem (HLA-B*1502 + carbamazepina em asiáticos, HLA-B*5701 + abacavir). Descolamento epidérmico → 'queimadura interna' (perda barreira, eletrólitos, infecção). Mortalidade NET: 30-50%.",
mec:[
{d:"Ciclosporina",x:"Inibidor calcineurina — bloqueia ativação de células T citotóxicas."},
],
diretriz:"UK SJS/NET Guidelines 2016. Mockenhaupt M, RegisCAR.",
fluxo:null, calcs:[],
imgs:[
{src:"https://upload.wikimedia.org/wikipedia/commons/5/58/Stevens-johnson-syndrome.jpg",
alt:"Lesões em alvo atípicas e descolamento epidérmico em SJS",
caption:"SJS — lesões em alvo atípicas com descolamento epidérmico e acometimento de pelo menos 2 mucosas.",
source:"Wikimedia Commons / DermNet (CC BY-NC-ND 3.0)"},
{src:"https://upload.wikimedia.org/wikipedia/commons/a/ae/Toxic-epidermal-necrolysis.jpg",
alt:"NET — descolamento epidérmico extenso",
caption:"NET (Lyell) — descolamento epidérmico extenso (>30% SCT), sinal de Nikolsky positivo. Manejo igual a queimadura grande.",
source:"Wikimedia Commons / DermNet (CC BY-NC-ND 3.0)"},
],
},

/* ============== OFT (1) ============== */

{id:"glaucoma-agudo", contexto:["pa","ubs"], sis:"oft", grav:"alta",
nome:"Glaucoma Agudo de Ângulo Fechado",
sin:["glaucoma agudo","ângulo fechado","crise glaucomatosa"],
def:"Elevação aguda da pressão intraocular (PIO) por bloqueio pupilar com ângulo iridocorneano fechado. CLÁSSICO: olho vermelho doloroso unilateral + halos coloridos + diminuição visual + náuseas/vômitos + pupila médio-fixa + córnea turva.",
exames:["Tonometria — PIO geralmente 40-80 mmHg (normal 10-21)","Gonioscopia (oftalmologia)","Fundo de olho — escavação papilar","TC se dúvida diagnóstica/AVC"],
rx:[
{etapa:"escala", d:"Acetazolamida",do:"500 mg IV ou VO + 250 mg VO 6/6h",via:"IV/VO",o:"INIBIDOR anidrase carbônica — ↓produção humor aquoso. Cuidado em alérgicos a sulfa."},
{etapa:"escala", d:"Manitol",do:"1-2 g/kg IV em 30-45 min",via:"IV",o:"Diurético osmótico — desidrata vítreo. Cuidado em IC, IRA."},
{etapa:"escala", d:"Pilocarpina 2%",do:"1 gota OD 15/15 min × 1h, depois 6/6h",via:"Tópico",o:"Miótico — abre o ângulo. NÃO usar em ataque agudo da PIO muito alta (ineficaz com PIO >40 — isquemia da íris); SÓ após PIO ↓."},
{etapa:"escala", d:"Timolol 0,5%",do:"1 gota OD 12/12h",via:"Tópico",o:"β-bloq → ↓produção humor aquoso. CI: asma, DPOC grave, BAV."},
{etapa:"escala", d:"Brimonidina",do:"1 gota OD 8/8h",via:"Tópico",o:"α2-agonista — ↓produção + ↑drenagem."},
{etapa:"escala", d:"Latanoprosta",do:"1 gota OD à noite",via:"Tópico",o:"↑drenagem uveoescleral. Adjuvante."},
{etapa:"adj", d:"Antiemético",do:"Ondansetrona 4-8 mg IV",via:"IV",o:"Vômitos aumentam PIO. Tratar."},
{etapa:"inicial", d:"Iridotomia a laser",do:"YAG laser perfuração da íris periférica",via:"Procedimento",o:"DEFINITIVO. Após estabilizar PIO. Também no OUTRO olho profilaticamente."},
],
alertas:[
{t:"crit",x:"PERDA VISUAL EM HORAS-DIAS se não tratado. Urgência oftalmológica REAL. Início imediato de medicação enquanto contata oftalmo."},
{t:"warn",x:"Atropina e simpaticomiméticos PRECIPITAM ataque em pacientes predispostos (anatomia de ângulo estreito) — cuidado em pacientes mais velhos hipermétropes recebendo midriáticos."},
],
fisio:"Ângulo estreito anatômico (idoso, hipermetrope, mulher, asiático) + dilatação pupilar (escuridão, midriáticos, estresse) → bloqueio do trabeculado pela íris periférica → bloqueio do escoamento humor aquoso → ↑PIO súbita → isquemia da retina/nervo óptico. Sem tratamento: cegueira em 24-48h.",
mec:[
{d:"Acetazolamida",x:"Inibe anidrase carbônica → ↓formação HCO₃⁻ no epitélio ciliar → ↓secreção humor aquoso."},
{d:"Timolol",x:"β-bloq não-seletivo → ↓ AMPc no epitélio ciliar → ↓produção humor aquoso."},
{d:"Pilocarpina",x:"Agonista muscarínico → contração esfíncter pupilar (miose) → tração na íris periférica → abre ângulo iridocorneano."},
],
diretriz:"AAO Preferred Practice Pattern — Primary Angle Closure 2020.",
fluxo:null,
calcs:[],
},

/* ============== OST (4) ============== */

{
  id:"fratura-exposta", contexto:["pa","ubs"], sis:"ost", grav:"alta",
  nome:"Fratura Exposta",
  sin:["fratura exposta","Gustilo","fratura aberta"],
  def:"Fratura óssea com solução de continuidade da pele. Classificação Gustilo-Anderson I–IIIC.",
  exames:["RX 2 incidências","Hemograma, coagulograma","Tipagem"],
  rx:[
    {etapa:"escala", d:"ATB em ≤3h (CRÍTICO)",do:"Tipo I/II: Cefazolina 2 g IV 8/8h × 24h",via:"IV",o:"Atraso aumenta infecção em até 6×."},
    {etapa:"escala", d:"Tipo III",do:"Cefazolina 2 g 8/8h + Gentamicina 5 mg/kg/d",via:"IV",o:"Cobertura GN. Manter 48–72h pós-fechamento."},
    {etapa:"escala", d:"Contaminação por solo/fezes",do:"+ Metronidazol 500 mg 8/8h OU Penicilina G 2 MU 4/4h",via:"IV",o:"Cobertura Clostridium."},
    {etapa:"escala", d:"Antitetânica",do:"Conforme vacinação prévia",via:"IM",o:"Imunoglobulina humana antitetânica (IGHAT) 250–500 UI se status incerto/inadequado."},
    {etapa:"escala", d:"Limpeza + desbridamento + estabilização",do:"Cirúrgico em <6–8h",via:"—",o:"Lavagem cirúrgica copiosa, debridamento, fixação externa."},
    {etapa:"adj", d:"Analgesia",do:"Morfina 0,1 mg/kg IV",via:"IV",o:"Opioide IV titulado."},
  ],
  alertas:[
    {t:"crit",x:"ATB nos primeiros 60–180 min reduz infecção significativamente."},
    {t:"warn",x:"NÃO fechar primariamente em IIIB/C — fechamento tardio após desbridamentos."},
  ],
  fisio:"Lesão tecidual ampla + contaminação ambiental → alto risco de infecção (osteomielite, gangrena) e síndrome compartimental.",
  mec:[],
  diretriz:"Tornetta P, AAOS; SBOT.",
  calcs:[],
},
{id:"gota", contexto:["pa","ubs"], nome:"Gota / Artrite Gotosa", sis:"ost", grav:"baixa",
cid:"M10", ciap:"T92",
sin:["Gota","Artrite úrica","Crise gotosa","Podagra","Hiperuricemia sintomática","Tofo gotoso"],

def:"Artropatia inflamatória por depósito de cristais de URATO MONOSSÓDICO (MSU) em articulações e tecidos. Quadro intermitente (crises) que evolui para forma crônica/tofácea. Hiperuricemia (ácido úrico >6,8 mg/dL) é fator necessário mas NÃO suficiente.",

quadro:[
"CRISE AGUDA (artrite gotosa aguda): dor de início RÁPIDO (pico em 12-24h), monoartrite intensa, vermelhidão, calor, edema, dor desproporcional ao exame",
"PODAGRA = artrite da 1ª metatarsofalângica = sítio CLÁSSICO em 50-70% das primeiras crises. Outros: tarso, tornozelo, joelho, punho, dedos",
"GATILHOS: trauma, álcool (especialmente cerveja, destilados), dieta rica em purinas (carne vermelha, frutos do mar), desidratação, diurético tiazídico/de alça, jejum, cirurgia, infecção",
"PADRÃO CIRCADIANO: crise tipicamente noturna/madrugada",
"FORMA CRÔNICA / TOFÁCEA: tofos (depósitos visíveis/palpáveis — orelha, mão, joelho, cotovelo, pé), artrite poliarticular, destruição articular",
"COMPLICAÇÕES: nefrolitíase (ácido úrico), nefropatia úrica, síndrome metabólica associada",
"HIPERURICEMIA ASSINTOMÁTICA: ácido úrico >6,8 mg/dL sem sintomas — NÃO TRATAR rotineiramente (P4)",
],

diag:[
"DIAGNÓSTICO PADRÃO-OURO: artrocentese + microscopia com luz polarizada = cristais de urato monossódico (forma de agulha, biriffringência NEGATIVA)",
"NA PRÁTICA: diagnóstico CLÍNICO em crise típica + hist prévio + ácido úrico elevado (mas pode estar NORMAL na crise em 30% dos casos — pode estar deslocado para a articulação)",
"CRITÉRIOS ACR/EULAR 2015: pontuação clínica + laboratorial + imagem (USG/DECT)",
"USG ARTICULAR: sinal de duplo contorno (depósito de cristais no cartilage), tofos hipoecoicos",
"DECT (dual-energy CT): identifica depósitos de urato — útil em casos atípicos",
"Rx: NORMAL nas primeiras crises. Cronicamente: erosões 'sacabocado' com bordas pendentes, preservação relativa do espaço articular",
"DIFERENCIAR DE: artrite séptica (URGÊNCIA — sempre punciar!), pseudogota (CPPD — cristais romboides, birrefringência POSITIVA), AR, celulite, fratura por estresse",
],

exames:[
"Ácido úrico sérico (mas pode estar normal na crise!) — repetir após 2 sem da crise",
"Hemograma (leucocitose, plaquetose em crise inflamatória — diferenciar de séptica)",
"PCR, VHS",
"Creatinina + TFG (avalia nefropatia + doses de drogas)",
"Glicemia jejum + HbA1c, perfil lipídico (síndrome metabólica frequente)",
"Pesquisa rápida de cristais (artrocentese) — PADRÃO-OURO se diagnóstico duvidoso ou suspeita de séptica",
"USG articular ou DECT — em casos atípicos",
"URINA I + relação cálcio/creatinina (nefrolitíase)",
"⚠ Em PRIMEIRA CRISE atípica ou monoartrite em paciente jovem: AFASTAR ARTRITE SÉPTICA com artrocentese (Gram + cultura + contagem celular)",
],

rx:[
// ============== INICIAL — CRISE AGUDA ==============
{etapa:"inicial", d:"⚠ TRATAMENTO DA CRISE AGUDA — INICIAR NAS PRIMEIRAS 24H (eficácia maior quanto mais precoce)", o:""},
{etapa:"inicial", d:"REPOUSO + ELEVAÇÃO + GELO LOCAL 4-6×/d × 20 min", o:""},
{etapa:"inicial", d:"⚠ NÃO INICIAR alopurinol/febuxostate durante a crise (pode prolongar). Se paciente JÁ está em uso: MANTER (não suspender)", o:""},

// ============== ESCOLHA DO ANTI-INFLAMATÓRIO ==============
{etapa:"escala", d:"⚠ 3 OPÇÕES iniciais — ESCOLHA conforme contraindicações:", o:""},

{etapa:"escala", d:"(1) AINE — 1ª LINHA em paciente jovem, sem comorbidade significativa", o:""},
{etapa:"escala", d:"Naproxeno 500 mg VO 12/12h × 5-7 dias (mais estudado para gota)", o:""},
{etapa:"escala", d:"Ibuprofeno 600-800 mg VO 8/8h × 5-7 dias", o:""},
{etapa:"escala", d:"Diclofenaco 50 mg VO 8/8h × 5-7 dias", o:""},
{etapa:"escala", d:"Indometacina 50 mg VO 8/8h × 3-5 dias (clássica mas mais efeitos colaterais)", o:""},
{etapa:"escala", d:"+ PROTETOR GÁSTRICO (omeprazol 20 mg) durante uso do AINE", o:""},

{etapa:"escala", d:"AINE CONTRAINDICADO em: IRC TFG <30, ICC descompensada, doença ulcerosa ativa, anticoagulação, alergia a AAS, gestação 3º trim", o:""},

{etapa:"escala", d:"(2) COLCHICINA — 1ª linha em paciente com contraindicação a AINE OU primeiros sintomas (<24h)", o:""},
{etapa:"escala", d:"Esquema MODERNO (ACR 2020, low-dose): Colchicina 1,2 mg VO ATAQUE + 0,6 mg em 1h → DEPOIS 0,6 mg 12/12h × 5-7 dias", o:"Eficácia similar ao esquema clássico com MUITO MENOS efeitos GI (estudo AGREE)."},
{etapa:"escala", d:"NÃO USAR esquema antigo (0,6 mg de hora em hora até diarreia ou 6 mg total) — abandonado por toxicidade", o:""},
{etapa:"escala", d:"AJUSTE EM IRC: TFG 30-60: máx 1,2 mg/d. TFG <30: 0,3 mg/d ou contraindicado. EVITAR em HD.", o:""},
{etapa:"escala", d:"INTERAÇÕES IMPORTANTES: estatinas (miopatia), claritromicina, ciclosporina, diltiazem, verapamil (todos aumentam toxicidade)", o:""},

{etapa:"escala", d:"(3) CORTICOIDE — 1ª linha em paciente com múltiplas contraindicações OU artrite poliarticular OU não responde aos anteriores", o:""},
{etapa:"escala", d:"Prednisona 30-40 mg VO 1×/d × 5-7 dias, depois desmamar em 5-7 dias", o:"NÃO precisa esquema longo. Tão eficaz quanto AINE."},
{etapa:"escala", d:"OU Triamcinolona intra-articular 10-40 mg (se monoartrite): EXCELENTE opção, evita sistêmico", o:"⚠ EXCLUIR artrite séptica antes (artrocentese + Gram/cultura). Risco se aplicar em séptica."},
{etapa:"escala", d:"OU metilprednisolona acetato 40-80 mg IM dose única (alternativa)", o:""},

// ============== TRANSIÇÃO PARA TRATAMENTO HIPOURICÊMICO ==============
{etapa:"adj", d:"⚠ TRATAMENTO HIPOURICÊMICO (CRÔNICO) — INICIAR APÓS RESOLUÇÃO DA CRISE (2-4 sem)", o:""},

{etapa:"adj", d:"INDICAÇÕES (ACR 2020):", o:""},
{etapa:"adj", d:"(1) ≥2 crises/ano OU", o:""},
{etapa:"adj", d:"(2) Tofos (clínicos ou radiológicos) OU", o:""},
{etapa:"adj", d:"(3) Nefrolitíase úrica OU", o:""},
{etapa:"adj", d:"(4) IRC ≥G3 OU", o:""},
{etapa:"adj", d:"(5) Considerar após PRIMEIRA crise se ácido úrico >9 ou jovem com fatores", o:""},

{etapa:"adj", d:"⚠ NÃO TRATAR hiperuricemia ASSINTOMÁTICA (mesmo se >8) — exceto profilaxia em quimioterapia/síndrome de lise tumoral. NÚMERO ISOLADO NÃO É DOENÇA — P4", o:""},

{etapa:"adj", d:"META do ácido úrico:", o:""},
{etapa:"adj", d:"GERAL: <6 mg/dL", o:""},
{etapa:"adj", d:"TOFÁCEA / artrite recorrente refratária: <5 mg/dL", o:""},

{etapa:"adj", d:"ALOPURINOL — 1ª LINHA (>90% dos casos)", o:""},
{etapa:"adj", d:"INÍCIO: 100 mg/d VO (50 mg/d se IRC TFG <30) — DOSE BAIXA INICIAL", o:""},
{etapa:"adj", d:"TITULAR: aumentar 100 mg cada 2-4 sem até atingir meta. Dose habitual 300-600 mg/d. Dose máxima 800 mg/d", o:""},
{etapa:"adj", d:"⚠ HLA-B*5801: rastrear em ASIÁTICOS (chineses Han, coreanos, tailandeses) — risco SSJ/NET. Em brasileiros: não rotina mas considerar em descendentes asiáticos", o:""},
{etapa:"adj", d:"REAÇÕES: rash leve em 2-5% (suspender), DRESS/SSJ/NET (raras mas FATAIS), hepatotoxicidade", o:""},
{etapa:"adj", d:"COM AZATIOPRINA/6-MP: CONTRAINDICAÇÃO (alopurinol inibe xantina oxidase → ↑↑ toxicidade)", o:""},

{etapa:"adj", d:"FEBUXOSTATE — 2ª linha (intolerância ao alopurinol ou refratariedade)", o:""},
{etapa:"adj", d:"40-80 mg VO 1×/d. Pode ir até 120 mg em casos refratários", o:""},
{etapa:"adj", d:"VANTAGEM: não-purínico, não interage com azatioprina (mas cuidado igual em uso concomitante), eliminação hepática (menos ajuste em IRC)", o:""},
{etapa:"adj", d:"⚠ ALERTA CV (CARES trial 2018): ↑ mortalidade CV em paciente com DCV estabelecida vs alopurinol. PREFERIR ALOPURINOL em paciente CV", o:""},

{etapa:"adj", d:"⚠ PROFILAXIA durante início de hipouricemiante", o:""},
{etapa:"adj", d:"Iniciar hipouricemiante AUMENTA RISCO DE CRISE nos primeiros 3-6 meses (mobilização de cristais)", o:""},
{etapa:"adj", d:"PROFILAXIA: Colchicina 0,6 mg/d (0,3 mg/d se IRC) por 3-6 MESES após início do hipouricemiante", o:""},
{etapa:"adj", d:"Alternativa: AINE em dose baixa (naproxeno 250 mg 12/12h) ou corticoide baixa dose", o:""},

// ============== MEV E COMORBIDADES ==============
{etapa:"adj", d:"MUDANÇAS DE ESTILO DE VIDA", o:""},
{etapa:"adj", d:"DIETA: reduzir purinas — carne vermelha, vísceras, frutos do mar (mariscos, anchovas, sardinhas), caldos de carne. Pode laticínios desnatados (PROTETORES)", o:""},
{etapa:"adj", d:"ÁLCOOL: REDUZIR — cerveja é o pior (purinas + álcool), destilados (vinho em dose baixa parece neutro)", o:""},
{etapa:"adj", d:"FRUTOSE: reduzir (sucos industrializados, refrigerantes, doces) — ↑ síntese de urato", o:""},
{etapa:"adj", d:"HIDRATAÇÃO: 2-3 L água/d (especialmente em nefrolitíase úrica)", o:""},
{etapa:"adj", d:"PERDA DE PESO se obesidade: 5-10% reduz urato 1-2 mg/dL", o:""},
{etapa:"adj", d:"REVISAR MEDICAMENTOS QUE AUMENTAM URATO: tiazídicos (substituir por losartana — uricosúrica), furosemida, ciclosporina, AAS dose baixa (paradoxal). Substituir quando possível", o:""},

{etapa:"adj", d:"COMORBIDADES — investigar e tratar: HAS, DM2, dislipidemia, doença renal, sd metabólica (frequentemente coexistem)", o:""},

// ============== ALTA ==============
{etapa:"alta", d:"⚠ SEGUIMENTO: ácido úrico cada 2-4 sem durante titulação, depois 6/6m quando estável", o:""},
{etapa:"alta", d:"REFORÇAR ADESÃO ao hipouricemiante — gota é DOENÇA CRÔNICA. Suspender = volta da doença. Pacientes frequentemente abandonam após melhora aparente", o:""},
{etapa:"alta", d:"VIGILÂNCIA das comorbidades CV (gota = fator de risco CV independente)", o:""},
{etapa:"alta", d:"PRÓXIMOS PASSOS — encaminhamento reumatologia: (1) refratariedade após alopurinol + febuxostate em dose máxima; (2) tofos extensos; (3) deformidade articular; (4) intolerância múltipla; (5) suspeita de gota atípica ou outra cristalopatia", o:""},
],

alertas:[
{nivel:"crit", txt:"AFASTAR ARTRITE SÉPTICA em monoartrite aguda — emergência. Sempre considerar artrocentese (Gram, cultura, contagem celular). NÃO infiltrar corticoide sem excluir séptica."},
{nivel:"crit", txt:"ALOPURINOL — SSJ/NET/DRESS são raras MAS FATAIS. HLA-B*5801 em asiáticos (rastrear). Rash leve = SUSPENDER. NÃO reiniciar se reação grave."},
{nivel:"crit", txt:"ALOPURINOL + AZATIOPRINA/6-MP: CONTRAINDICAÇÃO ABSOLUTA — toxicidade hematológica grave (alopurinol inibe xantina oxidase que metaboliza azatioprina)."},
{nivel:"warn", txt:"NÃO INICIAR hipouricemiante durante crise aguda (pode prolongar). Se paciente JÁ usa: MANTER. Iniciar 2-4 sem após resolução."},
{nivel:"warn", txt:"COLCHICINA — usar esquema MODERNO low-dose (1,2 + 0,6 + 0,6 12/12h). Esquema antigo até diarreia FOI ABANDONADO por toxicidade."},
{nivel:"warn", txt:"COLCHICINA + ESTATINA: risco miopatia. Colchicina + claritromicina/macrolídeos/ciclosporina/diltiazem/verapamil: ↑↑ toxicidade colchicina. Reduzir dose ou evitar."},
{nivel:"warn", txt:"FEBUXOSTATE — CARES trial: ↑ mortalidade CV em paciente com DCV estabelecida vs alopurinol. PREFERIR ALOPURINOL em paciente com DCV."},
{nivel:"warn", txt:"PROFILAXIA com colchicina 3-6 MESES ao iniciar hipouricemiante — sem isso, alta taxa de novas crises por mobilização."},
{nivel:"warn", txt:"NÃO TRATAR hiperuricemia ASSINTOMÁTICA — aplicar P4. Tratar apenas pré-quimioterapia em risco de síndrome de lise tumoral."},
{nivel:"info", txt:"GOTA = fator de risco CV independente. Investigar e tratar comorbidades (HAS, DM2, dislipidemia, IRC)."},
{nivel:"info", txt:"LOSARTANA tem efeito URICOSÚRICO (reduz urato ~6%) — preferir em paciente com gota + HAS vs hidroclorotiazida (aumenta urato)."},
],

fluxo:null,
diretriz:"ACR Guidelines Gout 2020. EULAR 2016+update. ACR/EULAR 2015 (classificação). CARES trial 2018."
},
{
  id:"gota", contexto:["pa","ubs"], sis:"ost", grav:"baixa",
  nome:"Crise de Gota",
  sin:["gota","artrite urato","podagra"],
  def:"Artrite aguda, monoarticular, intensa — \"acordou doendo\". Podagra (1ª MTF) clássica. Diagnóstico: cristais de urato monossódico no líquido sinovial (negativamente birrefringentes).",
  exames:["Ácido úrico (pode estar normal na crise)","Punção articular se dúvida","RX articulação"],
  rx:[
    {etapa:"escala", d:"AINE",do:"Naproxeno 500 mg 12/12h OU indometacina 50 mg 8/8h × 5–7 dias",via:"VO",o:"1ª linha em sem CI."},
    {etapa:"escala", d:"Colchicina",do:"1 mg VO + 0,5 mg em 1h, depois 0,5 mg 2–3×/d × 7d",via:"VO",o:"Iniciar nas primeiras 12–24h da crise. Diarreia frequente."},
    {etapa:"escala", d:"Prednisona",do:"30–40 mg/d × 5 dias",via:"VO",o:"AINE/colchicina contraindicados, IRC, idoso. Pode infiltrar articulação."},
    {etapa:"escala", d:"Alopurinol",do:"100 mg/d, titular até 300–600 mg",via:"VO",o:"NÃO iniciar durante a crise. Em uso crônico: NÃO suspender em crise."},
  ],
  alertas:[
    {t:"warn",x:"Iniciar profilaxia (alopurinol/febuxostate) APÓS resolução da crise (2–4 sem). Iniciar com colchicina/AINE 3–6 meses para evitar crise paradoxal."},
  ],
  fisio:"Hiperuricemia → deposição de cristais de urato monossódico em articulações → ativação de inflamassoma NLRP3 → liberação de IL-1β → resposta inflamatória neutrofílica aguda.",
  mec:[
    {d:"Colchicina",x:"Liga-se à <strong>tubulina</strong> e inibe polimerização de microtúbulos → bloqueia quimiotaxia e fagocitose neutrofílica. Inibe inflamassoma NLRP3."},
    {d:"Alopurinol",x:"Inibe <strong>xantina-oxidase</strong> → ↓conversão de hipoxantina/xantina em ácido úrico. Uso CRÔNICO."},
  ],
  diretriz:"ACR 2020 Guideline for the Management of Gout (FitzGerald JD et al., Arthritis Care Res 2020;72:744–760).",
  calcs:[],
},
{
  id:"lombalgia", contexto:["pa","ubs"], sis:"ost", grav:"baixa",
  nome:"Lombalgia Mecânica / Torcicolo",
  sin:["lombalgia","dor lombar","torcicolo","cervicalgia"],
  def:"Dor mecânica musculoesquelética sem sinais de alarme. Diagnóstico clínico.",
  exames:["Excluir red flags: trauma, idade <20/>50, neoplasia, perda de peso, déficit motor, retenção urinária, febre, IV, corticoide, anticoagulação"],
  rx:[
    {etapa:"escala", d:"Paracetamol",do:"750–1000 mg 6/6h",via:"VO",o:"1ª linha analgésica."},
    {etapa:"escala", d:"Ibuprofeno/Cetoprofeno",do:"400–600 mg 8/8h ou 100 mg IM",via:"VO/IM",o:"AINE eficaz, atenção a IRC/GIT."},
    {etapa:"escala", d:"Ciclobenzaprina",do:"5–10 mg VO à noite × 5 dias",via:"VO",o:"Miorrelaxante. Causa sonolência."},
    {etapa:"escala", d:"Tramadol",do:"50–100 mg 6/6h",via:"VO/IV",o:"Refratário. Opioide fraco."},
    {etapa:"inicial", d:"Atividade física precoce",do:"Manter movimento",via:"—",o:"Repouso prolongado piora. Retornar atividade gradual."},
  ],
  alertas:[
    {t:"crit",x:"Red flags → imagem URGENTE: déficit motor progressivo, anestesia em sela, retenção urinária (síndrome cauda equina), febre + dor noturna, trauma."},
  ],
  fisio:"Espasmo da musculatura paravertebral — geralmente esforço, postura, estresse, fadiga.",
  mec:[
    {d:"Ciclobenzaprina",x:"Antagonista <strong>5-HT2 central</strong> (tronco encefálico) — relaxante musculoesquelético de ação central, sem efeito direto no músculo."},
  ],
  diretriz:"ACP — Diagnosis and Treatment of Low Back Pain (Qaseem A et al., Ann Intern Med 2017).",
  calcs:[],
},
);
