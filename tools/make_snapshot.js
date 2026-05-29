/* ============================================================
   make_snapshot.js — gera snapshot.json a partir dos arrays JS
   Uso: node tools/make_snapshot.js  (rodar na raiz do site)
   Saída: tools/snapshot.json
   ============================================================ */
const fs = require("fs");
const path = require("path");

const SITE = path.resolve(__dirname, "..");
process.chdir(SITE);

const PATOLOGIAS = [], MEDICACOES = [], CALCS = [];
let SISTEMAS = {}, FLOWS = {};

const files = fs.readdirSync(".").filter(f =>
  f.endsWith(".js") &&
  (f.startsWith("pat-") || f.startsWith("meds-") || f.startsWith("calc") || f.startsWith("flow") || f === "init.js")
);
const order = ["init.js", ...files.filter(f => f !== "init.js")];

order.forEach(f => {
  if (!fs.existsSync(f)) return;
  try {
    let code = fs.readFileSync(f, "utf8");
    code = code.replace(/\b(?:const|let)\s+(MEDICACOES|PATOLOGIAS|CALCS|SISTEMAS|FLOWS)\s*=/g, "$1 =");
    eval(code);
  } catch (e) { /* arquivos não-dados ignorados */ }
});

const sisSet = new Set();
PATOLOGIAS.forEach(p => { if (p.sis) sisSet.add(p.sis); });

// Preserva sistemasNomes anterior se existir
let sistemasNomes = {};
const prev = path.join(__dirname, "snapshot.json");
if (fs.existsSync(prev)) {
  try { sistemasNomes = JSON.parse(fs.readFileSync(prev, "utf8")).sistemasNomes || {}; } catch (e) {}
}

const snap = {
  patologias: PATOLOGIAS,
  medicacoes: MEDICACOES,
  calcs: CALCS,
  flows: FLOWS,
  sistemas: [...sisSet],
  sistemasNomes: sistemasNomes,
};

fs.writeFileSync(prev, JSON.stringify(snap));
console.log(`✓ snapshot.json: ${PATOLOGIAS.length} patologias, ${MEDICACOES.length} medicações, ${CALCS.length} calcs, ${Object.keys(FLOWS).length} flows`);
