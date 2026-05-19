/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — Inicialização
   Define SISTEMAS + arrays globais que serão populados pelos demais módulos
   =========================================================== */

const SISTEMAS = {
  cardio:   { nome: "Cardiovascular",        icone: "♥", cor: "#DC2626" },
  neuro:    { nome: "Neurológico",           icone: "⌬", cor: "#7C3AED" },
  resp:     { nome: "Respiratório",          icone: "◐", cor: "#0891B2" },
  gi:       { nome: "Gastrointestinal",      icone: "◗", cor: "#CA8A04" },
  endo:     { nome: "Endócrino",             icone: "◈", cor: "#DB2777" },
  gu:       { nome: "Genito-urinário",       icone: "◎", cor: "#0284C7" },
  ost:      { nome: "Osteomuscular",         icone: "◇", cor: "#65A30D" },
  psiq:     { nome: "Psiquiatria",           icone: "◍", cor: "#9333EA" },
  hidro:    { nome: "Hidroeletrolítico",     icone: "◉", cor: "#0EA5E9" },
  infecto:  { nome: "Infectologia & Sepse",  icone: "✦", cor: "#16A34A" },
  anaf:     { nome: "Anafilaxia & Alergia",  icone: "▲", cor: "#E11D48" },
  tox:      { nome: "Intoxicações",          icone: "☣", cor: "#F59E0B" },
  pec:      { nome: "Animais peçonhentos",   icone: "◬", cor: "#84CC16" },
  hemo:     { nome: "Hematologia & Hemo",    icone: "●", cor: "#BE123C" },
  vaso:     { nome: "Drogas vasoativas",     icone: "◆", cor: "#EA580C" },
  iot:      { nome: "Sedação & IOT",         icone: "≡", cor: "#475569" },
  gest:     { nome: "Gestantes",             icone: "◯", cor: "#DB2777" },
  obst:     { nome: "Obstetrícia",           icone: "♀", cor: "#BE185D" },
  trauma:   { nome: "Trauma",                icone: "✖", cor: "#7C2D12" },
  derm:     { nome: "Dermatologia",          icone: "❋", cor: "#A21CAF" },
  oft:      { nome: "Oftalmologia / ORL",    icone: "◉", cor: "#1D4ED8" },
  ubs:      { nome: "UBS / Prevenção",       icone: "✚", cor: "#059669" },
  vacina:   { nome: "Vacinação / PNI",       icone: "💉", cor: "#0891B2" },
  cron:     { nome: "Condições Crônicas (MFC)", icone: "↻", cor: "#16A34A" },
  smen:     { nome: "Saúde Mental (MFC)",    icone: "✦", cor: "#9333EA" },
  idoso:    { nome: "Saúde do Idoso (MFC)",  icone: "👴", cor: "#7C2D12" },
  rastreio: { nome: "Rastreamento Oncológico", icone: "🔍", cor: "#0369A1" },
  anal:     { nome: "Analgesia",             icone: "◴", cor: "#A16207" },
  pali:     { nome: "Cuidados Paliativos",   icone: "❀", cor: "#0F766E" },
  pulo:     { nome: "Pulo do Gato",          icone: "★", cor: "#F59E0B" },
  conv:     { nome: "Conversores / Calc",    icone: "↔", cor: "#2563EB" },
  proc:     { nome: "Procedimentos",         icone: "✣", cor: "#7C2D12" },
  docs:     { nome: "Médico-Legal / Docs",   icone: "§", cor: "#0F766E" },
  med:      { nome: "Biblioteca Medicações", icone: "℞", cor: "#DB2777" },
};

/* Arrays globais — populados por pat/*.js, meds/*.js, calcs/*.js */
const PATOLOGIAS = [];
const MEDICACOES = [];
const CALCS = [];
const CONVERSORES = [];
const FLOWS = {};
const FIGURAS = {};
