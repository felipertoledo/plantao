/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — Indexação final
   Roda DEPOIS de todos os arquivos de dados, antes do app.js
   =========================================================== */

/* Conversores são adicionados ao CALCS (mesmo motor de cálculo) */
CONVERSORES.forEach(c => { CALCS.push(c); });

/* Índice de calcs por ID */
const CALCS_BY_ID = {};
CALCS.forEach(c => { CALCS_BY_ID[c.id] = c; });

/* Lista de IDs de fluxogramas — usada por app.js (buildSearchIndex etc) */
const FLOWS_LIST = Object.keys(FLOWS);
