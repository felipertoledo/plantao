/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — FLUXOGRAMAS SVG
   15 fluxogramas decisionais para emergências críticas
   Estrutura: FLOWS[id] = { titulo, fonte, svg }
   =========================================================== */

const FLOWS = {};

/* ============== 1. PARADA CARDIORRESPIRATÓRIA — ACLS ============== */
FLOWS["acls-pcr"] = {
titulo: "Parada Cardiorrespiratória — ACLS",
fonte: "AHA ACLS 2020 (Panchal AR et al., Circulation 2020;142:S366)",
svg: `<svg viewBox="0 0 820 1180" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs>
  <marker id="arr-acls" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker>
</defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
.f-dec{fill:var(--bg-sunken);stroke:var(--ink-2);stroke-width:1.5}
.f-crit{fill:var(--crit-bg);stroke:var(--accent);stroke-width:2;rx:8}
.f-warn{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.5;rx:8}
.f-ok{fill:var(--ok-bg);stroke:var(--ok);stroke-width:1.5;rx:8}
.f-start{fill:var(--accent);stroke:var(--accent-2);rx:30}
.f-t{font:600 13px var(--font-body);fill:var(--ink)}
.f-tw{font:600 13px var(--font-body);fill:#fff}
.f-ts{font:500 11px var(--font-body);fill:var(--ink-2)}
.f-tc{font:600 12px var(--font-body);fill:var(--accent-2)}
.f-arr{stroke:var(--ink-2);stroke-width:1.5;fill:none}
.f-yes{font:600 11px var(--font-mono);fill:var(--ok)}
.f-no{font:600 11px var(--font-mono);fill:var(--accent)}
</style>
<rect x="290" y="20" width="240" height="50" class="f-start"/>
<text x="410" y="42" text-anchor="middle" class="f-tw">PCR confirmada</text>
<text x="410" y="60" text-anchor="middle" class="f-tw" style="font-size:11px">sem resposta + sem pulso + sem respiração</text>
<line x1="410" y1="70" x2="410" y2="100" class="f-arr" marker-end="url(#arr-acls)"/>
<rect x="220" y="105" width="380" height="60" class="f-crit"/>
<text x="410" y="128" text-anchor="middle" class="f-t">RCP 30:2 IMEDIATA + chame ajuda</text>
<text x="410" y="148" text-anchor="middle" class="f-ts">Compressões 5-6 cm, 100-120/min, retorno completo</text>
<text x="410" y="161" text-anchor="middle" class="f-ts">Monitor/DEA assim que chegar</text>
<line x1="410" y1="165" x2="410" y2="195" class="f-arr" marker-end="url(#arr-acls)"/>
<polygon points="410,200 580,260 410,320 240,260" class="f-dec"/>
<text x="410" y="255" text-anchor="middle" class="f-t">Ritmo chocável?</text>
<text x="410" y="273" text-anchor="middle" class="f-ts">FV / TVsp</text>
<line x1="240" y1="260" x2="120" y2="260" class="f-arr" marker-end="url(#arr-acls)"/>
<text x="180" y="252" text-anchor="middle" class="f-no">NÃO</text>
<line x1="580" y1="260" x2="700" y2="260" class="f-arr" marker-end="url(#arr-acls)"/>
<text x="640" y="252" text-anchor="middle" class="f-yes">SIM</text>
<rect x="20" y="350" width="220" height="120" class="f-rect"/>
<text x="130" y="375" text-anchor="middle" class="f-tc">AESP / Assistolia</text>
<text x="130" y="398" text-anchor="middle" class="f-ts">RCP 2 min</text>
<text x="130" y="416" text-anchor="middle" class="f-ts">Adrenalina 1 mg IV/IO ASAP</text>
<text x="130" y="434" text-anchor="middle" class="f-ts">repetir 3-5 min</text>
<text x="130" y="452" text-anchor="middle" class="f-ts">via aérea avançada</text>
<rect x="580" y="350" width="220" height="160" class="f-crit"/>
<text x="690" y="375" text-anchor="middle" class="f-tc">FV / TV sem pulso</text>
<text x="690" y="398" text-anchor="middle" class="f-ts">CHOQUE 200 J bifásico</text>
<text x="690" y="416" text-anchor="middle" class="f-ts">RCP 2 min</text>
<text x="690" y="434" text-anchor="middle" class="f-ts">Adrenalina 1 mg após 2º choque</text>
<text x="690" y="452" text-anchor="middle" class="f-ts">Amiodarona 300 mg (3º choque)</text>
<text x="690" y="470" text-anchor="middle" class="f-ts">2ª dose amio 150 mg</text>
<text x="690" y="490" text-anchor="middle" class="f-ts">Lidocaína 1-1,5 mg/kg alternativa</text>
<line x1="130" y1="470" x2="130" y2="540" class="f-arr"/>
<line x1="690" y1="510" x2="690" y2="540" class="f-arr"/>
<line x1="130" y1="540" x2="690" y2="540" class="f-arr"/>
<line x1="410" y1="540" x2="410" y2="570" class="f-arr" marker-end="url(#arr-acls)"/>
<rect x="180" y="575" width="460" height="100" class="f-warn"/>
<text x="410" y="600" text-anchor="middle" class="f-t">CADA 2 min: reavaliar ritmo + pulso</text>
<text x="410" y="622" text-anchor="middle" class="f-ts">Troque o compressor • cheque etCO₂ (alvo &gt; 10 mmHg)</text>
<text x="410" y="640" text-anchor="middle" class="f-ts">PetCO₂ &gt; 35 mmHg súbito = RCE provável</text>
<text x="410" y="660" text-anchor="middle" class="f-ts">Mantenha ciclos 2 min até RCE ou término</text>
<line x1="410" y1="675" x2="410" y2="705" class="f-arr" marker-end="url(#arr-acls)"/>
<rect x="120" y="710" width="580" height="160" class="f-rect"/>
<text x="410" y="735" text-anchor="middle" class="f-tc">5H + 5T — CAUSAS REVERSÍVEIS</text>
<text x="200" y="760" class="f-ts">H₁ Hipovolemia → SF</text>
<text x="200" y="780" class="f-ts">H₂ Hipóxia → O₂/VA</text>
<text x="200" y="800" class="f-ts">H₃ H+ acidose → bic se grave</text>
<text x="200" y="820" class="f-ts">H₄ Hipo/hipercalemia</text>
<text x="200" y="840" class="f-ts">H₅ Hipotermia</text>
<text x="490" y="760" class="f-ts">T₁ Trombose coronariana</text>
<text x="490" y="780" class="f-ts">T₂ TEP maciço</text>
<text x="490" y="800" class="f-ts">T₃ Tamponamento</text>
<text x="490" y="820" class="f-ts">T₄ Pneumotórax hipertensivo</text>
<text x="490" y="840" class="f-ts">T₅ Toxinas</text>
<line x1="410" y1="870" x2="410" y2="900" class="f-arr" marker-end="url(#arr-acls)"/>
<rect x="180" y="905" width="460" height="80" class="f-ok"/>
<text x="410" y="930" text-anchor="middle" class="f-t">RETORNO CIRCULAÇÃO ESPONTÂNEA (RCE)</text>
<text x="410" y="952" text-anchor="middle" class="f-ts">Otimize VA + ventilação (SpO₂ 92-98%, etCO₂ 35-45)</text>
<text x="410" y="970" text-anchor="middle" class="f-ts">PAS ≥ 90 → vasoativa se ↓ • ECG 12d → IAM? → cateterismo</text>
<line x1="410" y1="985" x2="410" y2="1015" class="f-arr" marker-end="url(#arr-acls)"/>
<rect x="180" y="1020" width="460" height="80" class="f-warn"/>
<text x="410" y="1045" text-anchor="middle" class="f-t">CUIDADOS PÓS-PCR</text>
<text x="410" y="1067" text-anchor="middle" class="f-ts">TTM 32-36°C × 24h se inconsciente • EEG • UTI</text>
<text x="410" y="1085" text-anchor="middle" class="f-ts">Investigar causa • prognóstico ≥ 72h</text>
<text x="410" y="1140" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">AHA ACLS 2020 — Circulation 2020;142:S366-S468</text>
</svg>`
};

/* ============== 2. TSV — TAQUICARDIA SUPRAVENTRICULAR ============== */
FLOWS["tsv"] = {
titulo: "Taquicardia Supraventricular",
fonte: "AHA ACLS 2020; ESC SVT 2019",
svg: `<svg viewBox="0 0 1020 980" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-tsv" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
.f-dec{fill:var(--bg-sunken);stroke:var(--ink-2);stroke-width:1.5}
.f-crit{fill:var(--crit-bg);stroke:var(--accent);stroke-width:2;rx:8}
.f-warn{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.5;rx:8}
.f-ok{fill:var(--ok-bg);stroke:var(--ok);stroke-width:1.5;rx:8}
.f-start{fill:var(--accent);stroke:var(--accent-2);rx:30}
.f-t{font:600 13px var(--font-body);fill:var(--ink)}
.f-tw{font:600 13px var(--font-body);fill:#fff}
.f-ts{font:500 11px var(--font-body);fill:var(--ink-2)}
.f-tc{font:600 12px var(--font-body);fill:var(--accent-2)}
.f-arr{stroke:var(--ink-2);stroke-width:1.5;fill:none}
.f-yes{font:600 11px var(--font-mono);fill:var(--ok)}
.f-no{font:600 11px var(--font-mono);fill:var(--accent)}
</style>
<rect x="240" y="20" width="340" height="50" class="f-start"/>
<text x="410" y="42" text-anchor="middle" class="f-tw">Taquicardia QRS estreito (&lt;120 ms)</text>
<text x="410" y="60" text-anchor="middle" class="f-tw" style="font-size:11px">FC &gt; 150 bpm, regular</text>
<line x1="410" y1="70" x2="410" y2="100" class="f-arr" marker-end="url(#arr-tsv)"/>
<polygon points="410,105 690,170 410,235 190,170" class="f-dec"/>
<text x="410" y="160" text-anchor="middle" class="f-t">INSTÁVEL?</text>
<text x="410" y="178" text-anchor="middle" class="f-ts">↓PA, dor torácica,</text>
<text x="410" y="194" text-anchor="middle" class="f-ts">dispneia, ↓consciência</text>
<line x1="760" y1="170" x2="920" y2="170" class="f-arr" marker-end="url(#arr-tsv)"/>
<text x="870" y="162" text-anchor="middle" class="f-yes">SIM</text>
<rect x="730" y="190" width="200" height="120" class="f-crit"/>
<text x="890" y="215" text-anchor="middle" class="f-tc">CARDIOVERSÃO</text>
<text x="890" y="237" text-anchor="middle" class="f-ts">Sincronizada 50-100 J</text>
<text x="890" y="255" text-anchor="middle" class="f-ts">Sedação se possível</text>
<text x="890" y="275" text-anchor="middle" class="f-ts">(midazolam 0,05 mg/kg</text>
<text x="890" y="290" text-anchor="middle" class="f-ts">+ fentanil 1 mcg/kg)</text>
<line x1="410" y1="235" x2="410" y2="270" class="f-arr" marker-end="url(#arr-tsv)"/>
<text x="380" y="255" text-anchor="end" class="f-no">NÃO</text>
<rect x="220" y="275" width="380" height="80" class="f-warn"/>
<text x="410" y="300" text-anchor="middle" class="f-t">MANOBRAS VAGAIS</text>
<text x="410" y="322" text-anchor="middle" class="f-ts">Valsalva modificada (60-80% sucesso)</text>
<text x="410" y="340" text-anchor="middle" class="f-ts">Massagem do seio carotídeo (se sem sopro/AVC)</text>
<line x1="410" y1="355" x2="410" y2="385" class="f-arr" marker-end="url(#arr-tsv)"/>
<polygon points="410,390 660,440 410,490 220,440" class="f-dec"/>
<text x="410" y="438" text-anchor="middle" class="f-t">Reverteu?</text>
<line x1="220" y1="440" x2="120" y2="440" class="f-arr" marker-end="url(#arr-tsv)"/>
<text x="170" y="432" text-anchor="middle" class="f-no">NÃO</text>
<line x1="730" y1="440" x2="890" y2="440" class="f-arr" marker-end="url(#arr-tsv)"/>
<text x="840" y="432" text-anchor="middle" class="f-yes">SIM</text>
<rect x="750" y="480" width="180" height="100" class="f-ok"/>
<text x="900" y="505" text-anchor="middle" class="f-tc">REVERTIDO</text>
<text x="900" y="527" text-anchor="middle" class="f-ts">ECG 12 derivações</text>
<text x="900" y="545" text-anchor="middle" class="f-ts">Observação 4-6h</text>
<text x="900" y="563" text-anchor="middle" class="f-ts">Alta + cardiologista</text>
<rect x="20" y="500" width="200" height="120" class="f-rect"/>
<text x="120" y="525" text-anchor="middle" class="f-tc">ADENOSINA</text>
<text x="120" y="547" text-anchor="middle" class="f-ts">6 mg IV bolus rápido</text>
<text x="120" y="565" text-anchor="middle" class="f-ts">+ flush 20 mL SF</text>
<text x="120" y="583" text-anchor="middle" class="f-ts">→ 12 mg se falha</text>
<text x="120" y="601" text-anchor="middle" class="f-ts">→ 12 mg 2ª dose</text>
<line x1="120" y1="620" x2="120" y2="650" class="f-arr" marker-end="url(#arr-tsv)"/>
<text x="120" y="680" text-anchor="middle" class="f-t">Reverteu?</text>
<text x="120" y="700" text-anchor="middle" class="f-ts">após adenosina</text>
<line x1="120" y1="715" x2="120" y2="745" class="f-arr" marker-end="url(#arr-tsv)"/>
<text x="50" y="735" text-anchor="end" class="f-no">NÃO</text>
<line x1="220" y1="685" x2="320" y2="685" class="f-arr" marker-end="url(#arr-tsv)"/>
<text x="270" y="677" text-anchor="middle" class="f-yes">SIM</text>
<rect x="320" y="660" width="220" height="60" class="f-ok"/>
<text x="430" y="685" text-anchor="middle" class="f-tc">REVERTIDO</text>
<text x="430" y="705" text-anchor="middle" class="f-ts">ECG 12d → observação 4h</text>
<rect x="20" y="750" width="200" height="100" class="f-rect"/>
<text x="120" y="775" text-anchor="middle" class="f-tc">2ª LINHA</text>
<text x="120" y="797" text-anchor="middle" class="f-ts">Diltiazem 0,25 mg/kg IV</text>
<text x="120" y="815" text-anchor="middle" class="f-ts">ou Verapamil 5 mg IV</text>
<text x="120" y="833" text-anchor="middle" class="f-ts">Metoprolol 5 mg IV</text>
<line x1="120" y1="850" x2="120" y2="880" class="f-arr" marker-end="url(#arr-tsv)"/>
<rect x="20" y="885" width="280" height="60" class="f-warn"/>
<text x="160" y="910" text-anchor="middle" class="f-tc">Persistente → Cardiologista</text>
<text x="160" y="930" text-anchor="middle" class="f-ts">Cardioversão eletiva + ablação</text>
<text x="410" y="965" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">Adenosina CI relativa: WPW + FA, asma grave</text>
</svg>`
};

/* ============== 3. IAM COM SUPRA — IAMCST ============== */
FLOWS["sca"] = {
titulo: "IAM com Supra de ST",
fonte: "Diretriz SBC SCA com Supra ST 2015 (atual.); ESC STEMI 2023",
svg: `<svg viewBox="0 0 900 1300" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-sca" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
.f-dec{fill:var(--bg-sunken);stroke:var(--ink-2);stroke-width:1.5}
.f-crit{fill:var(--crit-bg);stroke:var(--accent);stroke-width:2;rx:8}
.f-warn{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.5;rx:8}
.f-ok{fill:var(--ok-bg);stroke:var(--ok);stroke-width:1.5;rx:8}
.f-start{fill:var(--accent);stroke:var(--accent-2);rx:30}
.f-t{font:600 13px var(--font-body);fill:var(--ink)}
.f-tw{font:600 13px var(--font-body);fill:#fff}
.f-ts{font:500 11px var(--font-body);fill:var(--ink-2)}
.f-tc{font:600 12px var(--font-body);fill:var(--accent-2)}
.f-arr{stroke:var(--ink-2);stroke-width:1.5;fill:none}
.f-yes{font:600 11px var(--font-mono);fill:var(--ok)}
.f-no{font:600 11px var(--font-mono);fill:var(--accent)}
</style>

<!-- Início: chegada -->
<rect x="260" y="20" width="380" height="60" class="f-start"/>
<text x="450" y="45" text-anchor="middle" class="f-tw">Dor torácica ≤ 12h</text>
<text x="450" y="65" text-anchor="middle" class="f-tw" style="font-size:11px">ECG 12d em ≤ 10 min da chegada</text>
<line x1="450" y1="80" x2="450" y2="110" class="f-arr" marker-end="url(#arr-sca)"/>

<!-- Diamante 1: Supra ST? -->
<polygon points="450,115 680,180 450,245 220,180" class="f-dec"/>
<text x="450" y="170" text-anchor="middle" class="f-t">Supra ST ≥ 1 mm em 2</text>
<text x="450" y="188" text-anchor="middle" class="f-t">contíguas (≥2 mm V2-V3)</text>
<text x="450" y="208" text-anchor="middle" class="f-ts">ou BRE novo / supra aVR ≥ 1 mm?</text>

<!-- NÃO → SCAsSST -->
<line x1="220" y1="180" x2="120" y2="180" class="f-arr" marker-end="url(#arr-sca)"/>
<text x="170" y="172" text-anchor="middle" class="f-no">NÃO</text>
<rect x="20" y="200" width="200" height="100" class="f-warn"/>
<text x="120" y="225" text-anchor="middle" class="f-tc">SCAsSST?</text>
<text x="120" y="248" text-anchor="middle" class="f-ts">Troponina seriada</text>
<text x="120" y="266" text-anchor="middle" class="f-ts">Estratificar risco</text>
<text x="120" y="284" text-anchor="middle" class="f-ts">(HEART, TIMI, GRACE)</text>

<!-- SIM → MONABCH -->
<line x1="450" y1="245" x2="450" y2="285" class="f-arr" marker-end="url(#arr-sca)"/>
<text x="470" y="270" class="f-yes">SIM</text>
<rect x="200" y="290" width="500" height="110" class="f-crit"/>
<text x="450" y="315" text-anchor="middle" class="f-t">MONABCH — IMEDIATO</text>
<text x="450" y="340" text-anchor="middle" class="f-ts">AAS 300 mg mastigar + clopi 300mg/ticagrelor 180mg/prasugrel 60mg</text>
<text x="450" y="360" text-anchor="middle" class="f-ts">Atorvastatina 80 mg • Enoxaparina 1 mg/kg SC ou HNF</text>
<text x="450" y="380" text-anchor="middle" class="f-ts">O₂ se SpO₂ &lt; 90 • morfina só se dor refratária • β-bloq oral &lt; 24h</text>

<line x1="450" y1="400" x2="450" y2="440" class="f-arr" marker-end="url(#arr-sca)"/>

<!-- Diamante 2: ICP disponível? -->
<polygon points="450,445 680,510 450,575 220,510" class="f-dec"/>
<text x="450" y="495" text-anchor="middle" class="f-t">ICP disponível ≤ 120 min?</text>
<text x="450" y="513" text-anchor="middle" class="f-ts">"door-to-balloon" alvo</text>
<text x="450" y="531" text-anchor="middle" class="f-ts">≤ 90 min se já no hospital ICP</text>

<!-- SIM → ICP primária (direita) -->
<line x1="680" y1="510" x2="760" y2="510" class="f-arr" marker-end="url(#arr-sca)"/>
<text x="720" y="502" text-anchor="middle" class="f-yes">SIM</text>
<rect x="700" y="600" width="180" height="120" class="f-ok"/>
<text x="790" y="625" text-anchor="middle" class="f-tc">ICP PRIMÁRIA</text>
<text x="790" y="648" text-anchor="middle" class="f-ts">Hemodinâmica</text>
<text x="790" y="666" text-anchor="middle" class="f-ts">Stent culprit lesion</text>
<text x="790" y="684" text-anchor="middle" class="f-ts">DAPT 12 meses</text>
<text x="790" y="702" text-anchor="middle" class="f-ts">UTI cardio</text>
<line x1="760" y1="510" x2="760" y2="600" class="f-arr"/>

<!-- NÃO → Fibrinólise (esquerda) -->
<line x1="220" y1="510" x2="120" y2="510" class="f-arr" marker-end="url(#arr-sca)"/>
<text x="170" y="502" text-anchor="middle" class="f-no">NÃO</text>
<rect x="20" y="600" width="200" height="130" class="f-warn"/>
<text x="120" y="625" text-anchor="middle" class="f-tc">FIBRINÓLISE</text>
<text x="120" y="648" text-anchor="middle" class="f-ts">se &lt; 12h e</text>
<text x="120" y="666" text-anchor="middle" class="f-ts">sem CI absoluta</text>
<text x="120" y="688" text-anchor="middle" class="f-ts">Tenecteplase peso-aj.</text>
<text x="120" y="706" text-anchor="middle" class="f-ts">ou Alteplase 15+50+35</text>
<line x1="120" y1="510" x2="120" y2="600" class="f-arr"/>

<!-- Centro: Critérios de reperfusão (após fibrinólise OU em geral) -->
<line x1="450" y1="575" x2="450" y2="610" class="f-arr" marker-end="url(#arr-sca)"/>
<rect x="240" y="615" width="420" height="115" class="f-rect"/>
<text x="450" y="640" text-anchor="middle" class="f-tc">CRITÉRIOS DE REPERFUSÃO (90 min)</text>
<text x="450" y="663" text-anchor="middle" class="f-ts">↓ ≥ 50% supra ST em 60-90 min</text>
<text x="450" y="681" text-anchor="middle" class="f-ts">Alívio da dor</text>
<text x="450" y="699" text-anchor="middle" class="f-ts">Ritmo idioventricular acelerado</text>
<text x="450" y="717" text-anchor="middle" class="f-ts">PA, ECG, dor monitorizados continuamente</text>

<!-- CI fibrinólise (abaixo do fibrinólise) -->
<rect x="20" y="760" width="200" height="100" class="f-rect"/>
<text x="120" y="785" text-anchor="middle" class="f-tc">CI FIBRINÓLISE</text>
<text x="120" y="808" text-anchor="middle" class="f-ts">AVC h prévio, AVCi &lt; 3m</text>
<text x="120" y="826" text-anchor="middle" class="f-ts">Trauma craniano recente</text>
<text x="120" y="844" text-anchor="middle" class="f-ts">Sangr ativo, dissec aórtica</text>
<line x1="120" y1="730" x2="120" y2="760" class="f-arr" marker-end="url(#arr-sca)"/>

<!-- ICP de resgate (centro, abaixo de critérios) -->
<line x1="450" y1="730" x2="450" y2="760" class="f-arr" marker-end="url(#arr-sca)"/>
<rect x="240" y="765" width="420" height="120" class="f-warn"/>
<text x="450" y="790" text-anchor="middle" class="f-tc">ICP DE RESGATE / FARMACO-INVASIVA</text>
<text x="450" y="813" text-anchor="middle" class="f-ts">Falha de fibrinólise → ICP em &lt; 2h</text>
<text x="450" y="831" text-anchor="middle" class="f-ts">Sucesso → ICP em 2-24h (estratégia farmaco-invasiva)</text>
<text x="450" y="849" text-anchor="middle" class="f-ts">CROSS: solicitar transferência ASAP</text>
<text x="450" y="867" text-anchor="middle" class="f-ts">Antiagregação + anticoagulação mantidas</text>

<!-- Convergência: ICP primária e ICP resgate → Alta -->
<line x1="450" y1="885" x2="450" y2="915" class="f-arr"/>
<line x1="790" y1="720" x2="790" y2="900" class="f-arr"/>
<line x1="790" y1="900" x2="450" y2="900" class="f-arr"/>
<line x1="450" y1="900" x2="450" y2="935" class="f-arr" marker-end="url(#arr-sca)"/>

<!-- Pós-IAM / Alta -->
<rect x="200" y="940" width="500" height="160" class="f-ok"/>
<text x="450" y="965" text-anchor="middle" class="f-tc">PÓS-IAM — ALTA HOSPITALAR</text>
<text x="450" y="990" text-anchor="middle" class="f-ts">AAS 100 mg + P2Y12 (clopi/ticagrelor/prasugrel) 12 meses</text>
<text x="450" y="1008" text-anchor="middle" class="f-ts">β-bloqueador titulado, IECA/BRA, atorvastatina 80 mg</text>
<text x="450" y="1026" text-anchor="middle" class="f-ts">Espironolactona se FE ≤ 40 + IC + Killip ≥ II</text>
<text x="450" y="1044" text-anchor="middle" class="f-ts">eGFR &gt; 45 + FE ≤ 40 → empagliflozina/dapagliflozina</text>
<text x="450" y="1062" text-anchor="middle" class="f-ts">Reabilitação cardíaca + cessação tabagismo + controle FR</text>
<text x="450" y="1083" text-anchor="middle" class="f-ts">Ecocardiograma em 24-72h • avaliação para CDI se FE &lt; 35% após 40d</text>

<text x="450" y="1180" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">SBC SCA com Supra ST 2015 (atualização 2023); ESC STEMI 2023 — Byrne RA et al., EHJ 44:3720</text>
</svg>`
};

/* ============== 4. EAP / ICA AGUDA ============== */
FLOWS["eap"] = {
titulo: "Edema Agudo de Pulmão / ICA",
fonte: "ESC HF 2021 (McDonagh TA et al., EHJ 42:3599); SBC IC Aguda 2018",
svg: `<svg viewBox="0 0 1080 980" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-eap" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
.f-dec{fill:var(--bg-sunken);stroke:var(--ink-2);stroke-width:1.5}
.f-crit{fill:var(--crit-bg);stroke:var(--accent);stroke-width:2;rx:8}
.f-warn{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.5;rx:8}
.f-ok{fill:var(--ok-bg);stroke:var(--ok);stroke-width:1.5;rx:8}
.f-start{fill:var(--accent);stroke:var(--accent-2);rx:30}
.f-t{font:600 13px var(--font-body);fill:var(--ink)}
.f-tw{font:600 13px var(--font-body);fill:#fff}
.f-ts{font:500 11px var(--font-body);fill:var(--ink-2)}
.f-tc{font:600 12px var(--font-body);fill:var(--accent-2)}
.f-arr{stroke:var(--ink-2);stroke-width:1.5;fill:none}
.f-yes{font:600 11px var(--font-mono);fill:var(--ok)}
.f-no{font:600 11px var(--font-mono);fill:var(--accent)}
</style>
<rect x="240" y="20" width="340" height="50" class="f-start"/>
<text x="410" y="45" text-anchor="middle" class="f-tw">Dispneia + estertores + crepitação</text>
<text x="410" y="62" text-anchor="middle" class="f-tw" style="font-size:11px">SpO₂ ↓ • RX: linhas B, infiltrado</text>
<line x1="410" y1="70" x2="410" y2="100" class="f-arr" marker-end="url(#arr-eap)"/>
<rect x="180" y="105" width="460" height="90" class="f-crit"/>
<text x="410" y="128" text-anchor="middle" class="f-t">MEDIDAS INICIAIS — minutos zero</text>
<text x="410" y="150" text-anchor="middle" class="f-ts">Sentado, pernas pendentes • O₂ titulado (SpO₂ &gt; 94%)</text>
<text x="410" y="168" text-anchor="middle" class="f-ts">Monitor + acesso venoso + ECG + RX</text>
<text x="410" y="186" text-anchor="middle" class="f-ts">BNP/NT-proBNP, troponina, eletrólitos, função renal</text>
<line x1="410" y1="195" x2="410" y2="225" class="f-arr" marker-end="url(#arr-eap)"/>
<polygon points="410,230 810,295 410,360 180,295" class="f-dec"/>
<text x="410" y="285" text-anchor="middle" class="f-t">PERFIL HEMODINÂMICO</text>
<text x="410" y="305" text-anchor="middle" class="f-ts">PAS / hipoperfusão</text>
<line x1="180" y1="295" x2="80" y2="295" class="f-arr" marker-end="url(#arr-eap)"/>
<line x1="870" y1="295" x2="970" y2="295" class="f-arr" marker-end="url(#arr-eap)"/>
<text x="130" y="287" text-anchor="middle" class="f-tc" style="font-size:10px">FRIO/SECO</text>
<text x="920" y="287" text-anchor="middle" class="f-tc" style="font-size:10px">QUENTE/ÚMIDO</text>
<text x="410" y="380" text-anchor="middle" class="f-tc" style="font-size:10px">FRIO/ÚMIDO</text>
<rect x="20" y="320" width="160" height="120" class="f-rect"/>
<text x="100" y="340" text-anchor="middle" class="f-tc">Hipoperfundido</text>
<text x="100" y="355" text-anchor="middle" class="f-ts">sem congestão</text>
<text x="100" y="378" text-anchor="middle" class="f-ts">Volume cauteloso</text>
<text x="100" y="396" text-anchor="middle" class="f-ts">SF 250 mL teste</text>
<text x="100" y="414" text-anchor="middle" class="f-ts">Dobutamina se ↓FE</text>
<text x="100" y="432" text-anchor="middle" class="f-ts">Cuidado: PAS &lt; 80</text>
<rect x="850" y="320" width="180" height="160" class="f-warn"/>
<text x="940" y="340" text-anchor="middle" class="f-tc">Congesto / PAS ≥ 110</text>
<text x="940" y="355" text-anchor="middle" class="f-ts">FOSPE — clássico</text>
<text x="940" y="378" text-anchor="middle" class="f-ts">FUROSEMIDA 40-80 mg IV</text>
<text x="940" y="396" text-anchor="middle" class="f-ts">VNI CPAP 8-10 cmH₂O</text>
<text x="940" y="414" text-anchor="middle" class="f-ts">Nitro 5-10 mcg/min</text>
<text x="940" y="432" text-anchor="middle" class="f-ts">titular até 200 mcg/min</text>
<text x="940" y="452" text-anchor="middle" class="f-ts">Repetir furo se ↓débito</text>
<text x="940" y="472" text-anchor="middle" class="f-ts">urinário em 1h</text>
<line x1="410" y1="360" x2="410" y2="395" class="f-arr" marker-end="url(#arr-eap)"/>
<rect x="220" y="400" width="380" height="120" class="f-crit"/>
<text x="410" y="425" text-anchor="middle" class="f-tc">FRIO/ÚMIDO — choque cardiogênico</text>
<text x="410" y="450" text-anchor="middle" class="f-ts">PAS &lt; 90 + congestão</text>
<text x="410" y="470" text-anchor="middle" class="f-ts">Noradrenalina 0,05-0,5 mcg/kg/min PAM ≥ 65</text>
<text x="410" y="488" text-anchor="middle" class="f-ts">Dobutamina 2,5-10 mcg/kg/min após PA estabilizar</text>
<text x="410" y="506" text-anchor="middle" class="f-ts">Furosemida APÓS estabilizar PA</text>
<line x1="410" y1="520" x2="410" y2="550" class="f-arr" marker-end="url(#arr-eap)"/>
<rect x="180" y="555" width="460" height="100" class="f-warn"/>
<text x="410" y="580" text-anchor="middle" class="f-tc">PAS ≥ 180 — SCAPE (Sympathetic Crashing APE)</text>
<text x="410" y="600" text-anchor="middle" class="f-ts">VNI cedo • Nitro IV em DOSE ALTA (até 400 mcg/min)</text>
<text x="410" y="618" text-anchor="middle" class="f-ts">Furosemida tem papel SECUNDÁRIO aqui (não há sobrecarga absoluta)</text>
<text x="410" y="638" text-anchor="middle" class="f-ts">Resposta rápida → desmame em horas</text>
<line x1="410" y1="655" x2="410" y2="685" class="f-arr" marker-end="url(#arr-eap)"/>
<rect x="180" y="690" width="460" height="100" class="f-rect"/>
<text x="410" y="715" text-anchor="middle" class="f-tc">⚠ EVITAR / REVISAR</text>
<text x="410" y="735" text-anchor="middle" class="f-ts">Morfina: associada a ↑mortalidade no ADHERE (OR 4,8) — evitar de rotina</text>
<text x="410" y="753" text-anchor="middle" class="f-ts">Bolus rápido de salina • β-bloqueador IV agudo</text>
<text x="410" y="771" text-anchor="middle" class="f-ts">Inotrópico em paciente NÃO hipoperfundido</text>
<line x1="410" y1="790" x2="410" y2="820" class="f-arr" marker-end="url(#arr-eap)"/>
<rect x="180" y="825" width="460" height="100" class="f-ok"/>
<text x="410" y="850" text-anchor="middle" class="f-tc">REAVALIAR 30-60 min</text>
<text x="410" y="870" text-anchor="middle" class="f-ts">Diurese ≥ 100-200 mL/h • dispneia ↓ • SpO₂ &gt; 94%</text>
<text x="410" y="888" text-anchor="middle" class="f-ts">UTI se: choque, falha VNI, hipoperfusão persistente, lactato ↑</text>
<text x="410" y="906" text-anchor="middle" class="f-ts">Otimizar IECA/BRA, BB, antagonista mineralocorticoide pré-alta</text>
<text x="410" y="958" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">ESC HF 2021 — McDonagh TA et al., EHJ 42:3599; Diretriz SBC IC Aguda 2018</text>
</svg>`
};

/* ============== 5. AVC ISQUÊMICO AGUDO ============== */
FLOWS["avci"] = {
titulo: "AVC Isquêmico — Trombólise",
fonte: "AHA/ASA Stroke 2026; PCDT AVC MS/CONITEC 2021",
svg: `<svg viewBox="0 0 1080 1100" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-avc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
.f-dec{fill:var(--bg-sunken);stroke:var(--ink-2);stroke-width:1.5}
.f-crit{fill:var(--crit-bg);stroke:var(--accent);stroke-width:2;rx:8}
.f-warn{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.5;rx:8}
.f-ok{fill:var(--ok-bg);stroke:var(--ok);stroke-width:1.5;rx:8}
.f-start{fill:var(--accent);stroke:var(--accent-2);rx:30}
.f-t{font:600 13px var(--font-body);fill:var(--ink)}
.f-tw{font:600 13px var(--font-body);fill:#fff}
.f-ts{font:500 11px var(--font-body);fill:var(--ink-2)}
.f-tc{font:600 12px var(--font-body);fill:var(--accent-2)}
.f-arr{stroke:var(--ink-2);stroke-width:1.5;fill:none}
.f-yes{font:600 11px var(--font-mono);fill:var(--ok)}
.f-no{font:600 11px var(--font-mono);fill:var(--accent)}
</style>
<rect x="180" y="20" width="460" height="60" class="f-start"/>
<text x="410" y="45" text-anchor="middle" class="f-tw">Déficit neurológico súbito • CINCINNATI/LAPSS+</text>
<text x="410" y="65" text-anchor="middle" class="f-tw" style="font-size:11px">Acionar STROKE TEAM — Door-to-Needle alvo &lt; 30 min</text>
<line x1="410" y1="80" x2="410" y2="105" class="f-arr" marker-end="url(#arr-avc)"/>
<rect x="180" y="110" width="460" height="100" class="f-warn"/>
<text x="410" y="135" text-anchor="middle" class="f-t">ABC + HORA DO ICTUS (last known well)</text>
<text x="410" y="157" text-anchor="middle" class="f-ts">Glicemia capilar (excluir hipo) • PA • NIHSS</text>
<text x="410" y="175" text-anchor="middle" class="f-ts">Acesso venoso 2 calibres • coleta laboratorial</text>
<text x="410" y="193" text-anchor="middle" class="f-ts">TC crânio sem contraste em ≤ 20 min</text>
<line x1="410" y1="210" x2="410" y2="240" class="f-arr" marker-end="url(#arr-avc)"/>
<polygon points="410,245 810,310 410,375 180,310" class="f-dec"/>
<text x="410" y="295" text-anchor="middle" class="f-t">TC — Sangramento?</text>
<text x="410" y="315" text-anchor="middle" class="f-ts">Hipoatenuação precoce</text>
<text x="410" y="333" text-anchor="middle" class="f-ts">ASPECTS</text>
<line x1="180" y1="310" x2="80" y2="310" class="f-arr" marker-end="url(#arr-avc)"/>
<text x="130" y="302" text-anchor="middle" class="f-no">SIM (HSA/HIP)</text>
<rect x="20" y="335" width="160" height="100" class="f-crit"/>
<text x="100" y="360" text-anchor="middle" class="f-tc">AVC hemorrágico</text>
<text x="100" y="378" text-anchor="middle" class="f-ts">PAS &lt; 140 (Adapt)</text>
<text x="100" y="396" text-anchor="middle" class="f-ts">Reverter anticoag</text>
<text x="100" y="414" text-anchor="middle" class="f-ts">Neurocirurgia</text>
<text x="100" y="432" text-anchor="middle" class="f-ts">Cabeceira 30°</text>
<line x1="410" y1="375" x2="410" y2="405" class="f-arr" marker-end="url(#arr-avc)"/>
<text x="430" y="395" class="f-yes">NÃO</text>
<polygon points="410,410 810,475 410,540 180,475" class="f-dec"/>
<text x="410" y="465" text-anchor="middle" class="f-t">Ictus ≤ 4,5h?</text>
<text x="410" y="485" text-anchor="middle" class="f-ts">(0-3h, 3-4,5h)</text>
<text x="410" y="503" text-anchor="middle" class="f-ts">+ NIHSS ≥ 4 (ou incapacitante)</text>
<line x1="870" y1="475" x2="970" y2="475" class="f-arr" marker-end="url(#arr-avc)"/>
<text x="920" y="467" text-anchor="middle" class="f-yes">SIM</text>
<rect x="830" y="495" width="200" height="180" class="f-ok"/>
<text x="930" y="518" text-anchor="middle" class="f-tc">TROMBÓLISE — IV</text>
<text x="930" y="540" text-anchor="middle" class="f-ts">PA &lt; 185/110</text>
<text x="930" y="558" text-anchor="middle" class="f-ts">ALTEPLASE 0,9 mg/kg</text>
<text x="930" y="576" text-anchor="middle" class="f-ts">(máx 90 mg)</text>
<text x="930" y="594" text-anchor="middle" class="f-ts">10% bolus + 90% em 1h</text>
<text x="930" y="616" text-anchor="middle" class="f-ts">Alternativa: Tenecteplase</text>
<text x="930" y="634" text-anchor="middle" class="f-ts">0,25 mg/kg bolus (AHA 2026)</text>
<text x="930" y="654" text-anchor="middle" class="f-ts">Sem anticoag/anti-plaq 24h</text>
<line x1="180" y1="475" x2="80" y2="475" class="f-arr" marker-end="url(#arr-avc)"/>
<text x="130" y="467" text-anchor="middle" class="f-no">NÃO</text>
<rect x="20" y="495" width="160" height="160" class="f-rect"/>
<text x="100" y="518" text-anchor="middle" class="f-tc">Janela estendida</text>
<text x="100" y="540" text-anchor="middle" class="f-ts">Wake-up stroke ou</text>
<text x="100" y="558" text-anchor="middle" class="f-ts">last-known-well &gt; 4,5h</text>
<text x="100" y="578" text-anchor="middle" class="f-ts">→ RM mismatch</text>
<text x="100" y="596" text-anchor="middle" class="f-ts">DWI/FLAIR ou</text>
<text x="100" y="614" text-anchor="middle" class="f-ts">CT perfusão</text>
<text x="100" y="635" text-anchor="middle" class="f-ts">DEFUSE-3 / DAWN</text>
<line x1="410" y1="540" x2="410" y2="580" class="f-arr" marker-end="url(#arr-avc)"/>
<rect x="200" y="585" width="420" height="80" class="f-warn"/>
<text x="410" y="610" text-anchor="middle" class="f-tc">TROMBECTOMIA MECÂNICA</text>
<text x="410" y="630" text-anchor="middle" class="f-ts">Oclusão grande vaso (ACM-M1, ACI, A2 selecionados)</text>
<text x="410" y="648" text-anchor="middle" class="f-ts">Até 6h (DEFUSE-3 24h se mismatch)</text>
<line x1="940" y1="675" x2="940" y2="720" class="f-arr"/>
<line x1="940" y1="720" x2="410" y2="720" class="f-arr"/>
<line x1="100" y1="655" x2="100" y2="720" class="f-arr"/>
<line x1="100" y1="720" x2="410" y2="720" class="f-arr"/>
<line x1="410" y1="710" x2="410" y2="740" class="f-arr" marker-end="url(#arr-avc)"/>
<rect x="200" y="745" width="420" height="120" class="f-rect"/>
<text x="410" y="770" text-anchor="middle" class="f-tc">CI ABSOLUTAS TROMBÓLISE</text>
<text x="410" y="790" text-anchor="middle" class="f-ts">PAS &gt; 185 ou PAD &gt; 110 refratária</text>
<text x="410" y="808" text-anchor="middle" class="f-ts">AVC ou TCE grave em ≤ 3 m • AVC h prévio em qq tempo</text>
<text x="410" y="826" text-anchor="middle" class="f-ts">Cirurgia maior em ≤ 14 dias • HDA/HDB em 21 d • neoplasia SNC</text>
<text x="410" y="844" text-anchor="middle" class="f-ts">Plaquetas &lt; 100k • INR &gt; 1,7 • TTPA &gt; 40 • glicemia &lt; 50 ou &gt; 400</text>
<line x1="410" y1="865" x2="410" y2="895" class="f-arr" marker-end="url(#arr-avc)"/>
<rect x="180" y="900" width="460" height="120" class="f-ok"/>
<text x="410" y="925" text-anchor="middle" class="f-tc">PÓS-TROMBÓLISE</text>
<text x="410" y="945" text-anchor="middle" class="f-ts">UTI/UAVC × 24h • PA &lt; 180/105 • NIHSS h/h × 6h</text>
<text x="410" y="963" text-anchor="middle" class="f-ts">SUSPENDER anticoag/antiplaq nas primeiras 24h</text>
<text x="410" y="981" text-anchor="middle" class="f-ts">TC de controle em 24h ANTES de iniciar AAS</text>
<text x="410" y="999" text-anchor="middle" class="f-ts">Investigar etiologia: ECG, MAPA, Holter, eco, doppler</text>
<text x="410" y="1060" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">AHA/ASA 2026 — Stroke 57:e1; PCDT AVC isquêmico, CONITEC/MS 2021</text>
</svg>`
};

/* ============== 6. CRISE CONVULSIVA / EME ============== */
FLOWS["crise"] = {
titulo: "Crise Convulsiva / Estado Epiléptico",
fonte: "AES Status Epilepticus 2016 (Glauser T et al., Epilepsy Curr); ABNeuro",
svg: `<svg viewBox="0 0 970 1000" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-cv" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
.f-dec{fill:var(--bg-sunken);stroke:var(--ink-2);stroke-width:1.5}
.f-crit{fill:var(--crit-bg);stroke:var(--accent);stroke-width:2;rx:8}
.f-warn{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.5;rx:8}
.f-ok{fill:var(--ok-bg);stroke:var(--ok);stroke-width:1.5;rx:8}
.f-start{fill:var(--accent);stroke:var(--accent-2);rx:30}
.f-t{font:600 13px var(--font-body);fill:var(--ink)}
.f-tw{font:600 13px var(--font-body);fill:#fff}
.f-ts{font:500 11px var(--font-body);fill:var(--ink-2)}
.f-tc{font:600 12px var(--font-body);fill:var(--accent-2)}
.f-arr{stroke:var(--ink-2);stroke-width:1.5;fill:none}
.f-yes{font:600 11px var(--font-mono);fill:var(--ok)}
.f-no{font:600 11px var(--font-mono);fill:var(--accent)}
</style>
<rect x="220" y="20" width="380" height="50" class="f-start"/>
<text x="410" y="42" text-anchor="middle" class="f-tw">Crise tônico-clônica generalizada</text>
<text x="410" y="60" text-anchor="middle" class="f-tw" style="font-size:11px">cronometre desde o início</text>
<line x1="410" y1="70" x2="410" y2="100" class="f-arr" marker-end="url(#arr-cv)"/>
<rect x="180" y="105" width="460" height="80" class="f-warn"/>
<text x="410" y="128" text-anchor="middle" class="f-t">FASE 1 — 0-5 min (estabilização)</text>
<text x="410" y="150" text-anchor="middle" class="f-ts">Decúbito lateral • aspirar VA • O₂ • glicemia capilar</text>
<text x="410" y="168" text-anchor="middle" class="f-ts">Acesso venoso • monitor • coleta lab</text>
<line x1="410" y1="185" x2="410" y2="215" class="f-arr" marker-end="url(#arr-cv)"/>
<polygon points="410,220 710,275 410,330 220,275" class="f-dec"/>
<text x="410" y="265" text-anchor="middle" class="f-t">Crise &gt; 5 min ou</text>
<text x="410" y="283" text-anchor="middle" class="f-t">2+ crises sem recobro?</text>
<text x="410" y="303" text-anchor="middle" class="f-ts">→ EME estabelecido</text>
<line x1="410" y1="330" x2="410" y2="360" class="f-arr" marker-end="url(#arr-cv)"/>
<text x="430" y="350" class="f-yes">SIM</text>
<rect x="180" y="365" width="460" height="120" class="f-crit"/>
<text x="410" y="390" text-anchor="middle" class="f-tc">FASE 2 — BENZODIAZEPÍNICO (1ª linha)</text>
<text x="410" y="412" text-anchor="middle" class="f-ts">Acesso → DIAZEPAM 10 mg IV em 2 min (repetir 1x)</text>
<text x="410" y="430" text-anchor="middle" class="f-ts">ou MIDAZOLAM 10 mg IM se sem acesso (RAMPART, NEJM 2012)</text>
<text x="410" y="448" text-anchor="middle" class="f-ts">ou LORAZEPAM 4 mg IV em 2 min (se disponível)</text>
<text x="410" y="468" text-anchor="middle" class="f-ts">Pode repetir 1×. Tiamina 100 mg IV se etilismo/desnutrição</text>
<line x1="410" y1="485" x2="410" y2="515" class="f-arr" marker-end="url(#arr-cv)"/>
<polygon points="410,520 710,575 410,630 220,575" class="f-dec"/>
<text x="410" y="570" text-anchor="middle" class="f-t">Cessou?</text>
<text x="410" y="595" text-anchor="middle" class="f-ts">após benzodiazepínico</text>
<line x1="710" y1="575" x2="810" y2="575" class="f-arr" marker-end="url(#arr-cv)"/>
<text x="760" y="567" text-anchor="middle" class="f-yes">SIM</text>
<rect x="730" y="615" width="180" height="100" class="f-ok"/>
<text x="820" y="640" text-anchor="middle" class="f-tc">Investigar causa</text>
<text x="820" y="660" text-anchor="middle" class="f-ts">TC crânio</text>
<text x="820" y="678" text-anchor="middle" class="f-ts">eletrólitos, glicose</text>
<text x="820" y="696" text-anchor="middle" class="f-ts">LCR se febril/imunossup</text>
<text x="820" y="712" text-anchor="middle" class="f-ts">níveis FAE se uso prévio</text>
<line x1="410" y1="630" x2="410" y2="660" class="f-arr" marker-end="url(#arr-cv)"/>
<text x="380" y="650" text-anchor="end" class="f-no">NÃO</text>
<rect x="120" y="665" width="580" height="130" class="f-warn"/>
<text x="410" y="690" text-anchor="middle" class="f-tc">FASE 3 — EME ESTABELECIDO (20-40 min)</text>
<text x="410" y="715" text-anchor="middle" class="f-ts">ESCOLHA 1 das 3 opções (ESETT 2019 — equivalência):</text>
<text x="410" y="735" text-anchor="middle" class="f-ts">• FENITOÍNA 20 mg/kg IV em 50 mg/min (não exceder)</text>
<text x="410" y="753" text-anchor="middle" class="f-ts">• VALPROATO 40 mg/kg IV em 10 min</text>
<text x="410" y="771" text-anchor="middle" class="f-ts">• LEVETIRACETAM 60 mg/kg IV (máx 4,5 g) em 15 min</text>
<text x="410" y="789" text-anchor="middle" class="f-ts">Fenobarbital 20 mg/kg em 100 mg/min — alternativa</text>
<line x1="410" y1="795" x2="410" y2="825" class="f-arr" marker-end="url(#arr-cv)"/>
<polygon points="410,830 710,880 410,930 220,880" class="f-dec"/>
<text x="410" y="875" text-anchor="middle" class="f-t">Cessou?</text>
<line x1="220" y1="880" x2="100" y2="880" class="f-arr" marker-end="url(#arr-cv)"/>
<text x="160" y="872" text-anchor="middle" class="f-no">NÃO</text>
<rect x="20" y="900" width="180" height="80" class="f-crit"/>
<text x="110" y="925" text-anchor="middle" class="f-tc">EME REFRATÁRIO</text>
<text x="110" y="945" text-anchor="middle" class="f-ts">UTI + IOT</text>
<text x="110" y="963" text-anchor="middle" class="f-ts">Midazolam BIC</text>
<text x="110" y="978" text-anchor="middle" class="f-ts">ou propofol</text>
<text x="410" y="975" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">AES 2016; ESETT 2019; Brophy GM et al., Neurocrit Care 17:3</text>
</svg>`
};

/* ============== 7. SEPSE / CHOQUE SÉPTICO ============== */
FLOWS["sepse"] = {
titulo: "Sepse / Choque Séptico — Hour-1",
fonte: "Surviving Sepsis Campaign 2021 (Evans L et al., ICM 47:1181)",
svg: `<svg viewBox="0 0 1080 1100" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-sep" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
.f-dec{fill:var(--bg-sunken);stroke:var(--ink-2);stroke-width:1.5}
.f-crit{fill:var(--crit-bg);stroke:var(--accent);stroke-width:2;rx:8}
.f-warn{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.5;rx:8}
.f-ok{fill:var(--ok-bg);stroke:var(--ok);stroke-width:1.5;rx:8}
.f-start{fill:var(--accent);stroke:var(--accent-2);rx:30}
.f-t{font:600 13px var(--font-body);fill:var(--ink)}
.f-tw{font:600 13px var(--font-body);fill:#fff}
.f-ts{font:500 11px var(--font-body);fill:var(--ink-2)}
.f-tc{font:600 12px var(--font-body);fill:var(--accent-2)}
.f-arr{stroke:var(--ink-2);stroke-width:1.5;fill:none}
.f-yes{font:600 11px var(--font-mono);fill:var(--ok)}
.f-no{font:600 11px var(--font-mono);fill:var(--accent)}
</style>
<rect x="180" y="20" width="460" height="60" class="f-start"/>
<text x="410" y="45" text-anchor="middle" class="f-tw">Suspeita de infecção + disfunção orgânica</text>
<text x="410" y="65" text-anchor="middle" class="f-tw" style="font-size:11px">qSOFA ≥ 2 OU NEWS ≥ 5 OU SIRS ≥ 2 + foco</text>
<line x1="410" y1="80" x2="410" y2="110" class="f-arr" marker-end="url(#arr-sep)"/>
<rect x="180" y="115" width="460" height="110" class="f-warn"/>
<text x="410" y="140" text-anchor="middle" class="f-t">qSOFA — beira do leito</text>
<text x="410" y="160" text-anchor="middle" class="f-ts">FR ≥ 22  •  PAS ≤ 100  •  Glasgow &lt; 15</text>
<text x="410" y="185" text-anchor="middle" class="f-tc">SOFA: definição confirmatória (UTI)</text>
<text x="410" y="203" text-anchor="middle" class="f-ts">Sepse = infecção + ↑SOFA ≥ 2</text>
<text x="410" y="220" text-anchor="middle" class="f-ts">Choque séptico = sepse + lactato &gt; 2 + vasoativa para PAM ≥ 65</text>
<line x1="410" y1="225" x2="410" y2="255" class="f-arr" marker-end="url(#arr-sep)"/>
<rect x="120" y="265" width="580" height="50" class="f-crit"/>
<text x="410" y="290" text-anchor="middle" class="f-t" style="font-size:14px">HOUR-1 BUNDLE — completar todas as ações em ≤ 1h</text>
<text x="410" y="307" text-anchor="middle" class="f-ts">tempo conta a partir da triagem ou do reconhecimento</text>
<line x1="410" y1="315" x2="410" y2="345" class="f-arr" marker-end="url(#arr-sep)"/>
<rect x="20" y="355" width="200" height="120" class="f-rect"/>
<text x="120" y="380" text-anchor="middle" class="f-tc">1 — LACTATO</text>
<text x="120" y="402" text-anchor="middle" class="f-ts">Coletar lactato sérico</text>
<text x="120" y="420" text-anchor="middle" class="f-ts">Se &gt; 2 mmol/L,</text>
<text x="120" y="438" text-anchor="middle" class="f-ts">REPETIR em 2-4h</text>
<text x="120" y="456" text-anchor="middle" class="f-ts">para guiar reanimação</text>
<rect x="230" y="355" width="200" height="120" class="f-rect"/>
<text x="330" y="380" text-anchor="middle" class="f-tc">2 — HEMOCULTURAS</text>
<text x="330" y="402" text-anchor="middle" class="f-ts">2 pares ANTES do ATB</text>
<text x="330" y="420" text-anchor="middle" class="f-ts">sem atrasar &gt; 45 min</text>
<text x="330" y="438" text-anchor="middle" class="f-ts">Cultura do foco se possível</text>
<text x="330" y="456" text-anchor="middle" class="f-ts">(urina, secreção)</text>
<rect x="440" y="355" width="200" height="120" class="f-crit"/>
<text x="540" y="380" text-anchor="middle" class="f-tc">3 — ATB ≤ 1h</text>
<text x="540" y="402" text-anchor="middle" class="f-ts">Amplo espectro</text>
<text x="540" y="420" text-anchor="middle" class="f-ts">por foco presumido</text>
<text x="540" y="438" text-anchor="middle" class="f-ts">Cada hora ↑ 4-7%</text>
<text x="540" y="456" text-anchor="middle" class="f-ts">mortalidade</text>
<rect x="880" y="355" width="150" height="120" class="f-rect"/>
<text x="955" y="380" text-anchor="middle" class="f-tc">4 — FLUIDOS</text>
<text x="955" y="402" text-anchor="middle" class="f-ts">Cristaloide</text>
<text x="955" y="420" text-anchor="middle" class="f-ts">30 mL/kg em 3h</text>
<text x="955" y="438" text-anchor="middle" class="f-ts">se hipoTA ou</text>
<text x="955" y="456" text-anchor="middle" class="f-ts">lactato ≥ 4</text>
<line x1="410" y1="475" x2="410" y2="510" class="f-arr" marker-end="url(#arr-sep)"/>
<polygon points="410,515 810,580 410,645 180,580" class="f-dec"/>
<text x="410" y="565" text-anchor="middle" class="f-t">PAM ≥ 65 mmHg após</text>
<text x="410" y="583" text-anchor="middle" class="f-t">reposição volêmica?</text>
<line x1="180" y1="580" x2="80" y2="580" class="f-arr" marker-end="url(#arr-sep)"/>
<text x="130" y="572" text-anchor="middle" class="f-no">NÃO</text>
<rect x="20" y="600" width="160" height="160" class="f-crit"/>
<text x="100" y="625" text-anchor="middle" class="f-tc">5 — VASOPRESSOR</text>
<text x="100" y="647" text-anchor="middle" class="f-ts">Noradrenalina</text>
<text x="100" y="665" text-anchor="middle" class="f-ts">0,05-2 mcg/kg/min</text>
<text x="100" y="685" text-anchor="middle" class="f-ts">titular PAM ≥ 65</text>
<text x="100" y="705" text-anchor="middle" class="f-ts">+ Vasopressina 0,03 U/min</text>
<text x="100" y="723" text-anchor="middle" class="f-ts">se NE ≥ 0,25-0,5</text>
<text x="100" y="741" text-anchor="middle" class="f-ts">Pode iniciar em periférico</text>
<line x1="870" y1="580" x2="970" y2="580" class="f-arr" marker-end="url(#arr-sep)"/>
<text x="920" y="572" text-anchor="middle" class="f-yes">SIM</text>
<rect x="850" y="600" width="180" height="120" class="f-ok"/>
<text x="940" y="625" text-anchor="middle" class="f-tc">REAVALIAR</text>
<text x="940" y="647" text-anchor="middle" class="f-ts">Lactato em 2-4h</text>
<text x="940" y="665" text-anchor="middle" class="f-ts">Tempo de enchimento capilar</text>
<text x="940" y="683" text-anchor="middle" class="f-ts">Débito urinário</text>
<text x="940" y="701" text-anchor="middle" class="f-ts">Fluido-responsividade</text>
<text x="940" y="715" text-anchor="middle" class="f-ts">(PLR, VPP, VTI)</text>
<line x1="410" y1="645" x2="410" y2="780" class="f-arr"/>
<line x1="100" y1="760" x2="100" y2="800" class="f-arr"/>
<line x1="100" y1="800" x2="410" y2="800" class="f-arr"/>
<line x1="940" y1="720" x2="940" y2="800" class="f-arr"/>
<line x1="940" y1="800" x2="410" y2="800" class="f-arr"/>
<line x1="410" y1="780" x2="410" y2="820" class="f-arr" marker-end="url(#arr-sep)"/>
<rect x="180" y="825" width="460" height="100" class="f-warn"/>
<text x="410" y="850" text-anchor="middle" class="f-tc">CHOQUE REFRATÁRIO — adicionar</text>
<text x="410" y="870" text-anchor="middle" class="f-ts">HIDROCORTISONA 200 mg/d (50 mg 6/6h) se NE ≥ 0,25 mcg/kg/min &gt; 4h</text>
<text x="410" y="888" text-anchor="middle" class="f-ts">Investigar source control (drenagem, cirurgia)</text>
<text x="410" y="906" text-anchor="middle" class="f-ts">Cuidado com sobrecarga: monitorar P/F, volume cumulativo</text>
<line x1="410" y1="925" x2="410" y2="955" class="f-arr" marker-end="url(#arr-sep)"/>
<rect x="180" y="960" width="460" height="80" class="f-ok"/>
<text x="410" y="985" text-anchor="middle" class="f-tc">METAS DE RESSUSCITAÇÃO</text>
<text x="410" y="1005" text-anchor="middle" class="f-ts">PAM ≥ 65 • Lactato ↓ • Diurese ≥ 0,5 mL/kg/h • Perfusão periférica</text>
<text x="410" y="1023" text-anchor="middle" class="f-ts">Descalonar ATB com cultura • Pelo menos 7 dias se choque séptico</text>
<text x="410" y="1080" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">SSC 2021 — ICM 47:1181 / Crit Care Med 49:e1063 (DOI:10.1007/s00134-021-06506-y)</text>
</svg>`
};

/* ============== 8. CETOACIDOSE DIABÉTICA ============== */
FLOWS["cad"] = {
titulo: "Cetoacidose Diabética / EHH",
fonte: "Umpierrez GE et al., Diabetes Care 2024;47:1257 (DOI:10.2337/dci24-0032)",
svg: `<svg viewBox="0 0 820 1100" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-cad" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
.f-dec{fill:var(--bg-sunken);stroke:var(--ink-2);stroke-width:1.5}
.f-crit{fill:var(--crit-bg);stroke:var(--accent);stroke-width:2;rx:8}
.f-warn{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.5;rx:8}
.f-ok{fill:var(--ok-bg);stroke:var(--ok);stroke-width:1.5;rx:8}
.f-start{fill:var(--accent);stroke:var(--accent-2);rx:30}
.f-t{font:600 13px var(--font-body);fill:var(--ink)}
.f-tw{font:600 13px var(--font-body);fill:#fff}
.f-ts{font:500 11px var(--font-body);fill:var(--ink-2)}
.f-tc{font:600 12px var(--font-body);fill:var(--accent-2)}
.f-arr{stroke:var(--ink-2);stroke-width:1.5;fill:none}
</style>
<rect x="180" y="20" width="460" height="60" class="f-start"/>
<text x="410" y="45" text-anchor="middle" class="f-tw">Glicemia &gt; 250 + cetonas + acidose</text>
<text x="410" y="65" text-anchor="middle" class="f-tw" style="font-size:11px">pH &lt; 7,3 ou HCO₃⁻ &lt; 18 ou AG &gt; 10</text>
<line x1="410" y1="80" x2="410" y2="110" class="f-arr" marker-end="url(#arr-cad)"/>
<rect x="120" y="115" width="580" height="110" class="f-warn"/>
<text x="410" y="140" text-anchor="middle" class="f-t">CLASSIFICAR GRAVIDADE</text>
<text x="225" y="165" text-anchor="middle" class="f-tc" style="font-size:11px">LEVE</text>
<text x="225" y="183" text-anchor="middle" class="f-ts">pH 7,25-7,30</text>
<text x="225" y="200" text-anchor="middle" class="f-ts">HCO₃⁻ 15-18</text>
<text x="225" y="217" text-anchor="middle" class="f-ts">Alerta</text>
<text x="410" y="165" text-anchor="middle" class="f-tc" style="font-size:11px">MODERADA</text>
<text x="410" y="183" text-anchor="middle" class="f-ts">pH 7,00-7,24</text>
<text x="410" y="200" text-anchor="middle" class="f-ts">HCO₃⁻ 10-15</text>
<text x="410" y="217" text-anchor="middle" class="f-ts">Sonolento/alerta</text>
<text x="595" y="165" text-anchor="middle" class="f-tc" style="font-size:11px">GRAVE</text>
<text x="595" y="183" text-anchor="middle" class="f-ts">pH &lt; 7,00</text>
<text x="595" y="200" text-anchor="middle" class="f-ts">HCO₃⁻ &lt; 10</text>
<text x="595" y="217" text-anchor="middle" class="f-ts">Estupor/coma</text>
<line x1="410" y1="225" x2="410" y2="260" class="f-arr" marker-end="url(#arr-cad)"/>
<rect x="20" y="270" width="200" height="160" class="f-rect"/>
<text x="120" y="295" text-anchor="middle" class="f-tc">1 — HIDRATAÇÃO</text>
<text x="120" y="317" text-anchor="middle" class="f-ts">SF 0,9% ou crist. balanc.</text>
<text x="120" y="335" text-anchor="middle" class="f-ts">500-1000 mL/h × 2-4h</text>
<text x="120" y="353" text-anchor="middle" class="f-ts">Reduzir conforme Na</text>
<text x="120" y="371" text-anchor="middle" class="f-ts">Na &lt; 135 → SF 0,9%</text>
<text x="120" y="389" text-anchor="middle" class="f-ts">Na ≥ 135 → SF 0,45%</text>
<text x="120" y="407" text-anchor="middle" class="f-ts">Glicemia &lt; 250 →</text>
<text x="120" y="423" text-anchor="middle" class="f-ts">ADD SG 5-10%</text>
<rect x="230" y="270" width="200" height="160" class="f-rect"/>
<text x="330" y="295" text-anchor="middle" class="f-tc">2 — POTÁSSIO</text>
<text x="330" y="317" text-anchor="middle" class="f-ts">SEMPRE checar ANTES</text>
<text x="330" y="335" text-anchor="middle" class="f-ts">K &lt; 3,3 → suspender</text>
<text x="330" y="350" text-anchor="middle" class="f-ts">insulina; KCl 20-40 mEq/h</text>
<text x="330" y="370" text-anchor="middle" class="f-ts">K 3,3-5,2 → KCl 20-30 mEq/L</text>
<text x="330" y="386" text-anchor="middle" class="f-ts">no hidratante</text>
<text x="330" y="406" text-anchor="middle" class="f-ts">K &gt; 5,2 → não repor,</text>
<text x="330" y="422" text-anchor="middle" class="f-ts">checar 2/2h</text>
<rect x="440" y="270" width="200" height="160" class="f-crit"/>
<text x="540" y="295" text-anchor="middle" class="f-tc">3 — INSULINA REGULAR</text>
<text x="540" y="317" text-anchor="middle" class="f-ts">SOMENTE após K &gt; 3,3</text>
<text x="540" y="335" text-anchor="middle" class="f-ts">Infusão fixa</text>
<text x="540" y="353" text-anchor="middle" class="f-ts">0,1 U/kg/h IV</text>
<text x="540" y="371" text-anchor="middle" class="f-ts">SEM bolus rotineiro</text>
<text x="540" y="389" text-anchor="middle" class="f-ts">Meta ↓100 mg/dL · 2-3h</text>
<text x="540" y="407" text-anchor="middle" class="f-ts">Reduzir a 0,05 U/kg/h</text>
<text x="540" y="423" text-anchor="middle" class="f-ts">quando &lt; 250 mg/dL</text>
<rect x="650" y="270" width="150" height="160" class="f-rect"/>
<text x="725" y="295" text-anchor="middle" class="f-tc">4 — BICARB.</text>
<text x="725" y="317" text-anchor="middle" class="f-ts">SÓ se pH &lt; 6,9</text>
<text x="725" y="335" text-anchor="middle" class="f-ts">100 mEq em 400 mL</text>
<text x="725" y="353" text-anchor="middle" class="f-ts">+ 20 mEq KCl</text>
<text x="725" y="371" text-anchor="middle" class="f-ts">em 2h</text>
<text x="725" y="389" text-anchor="middle" class="f-ts">repetir até pH ≥ 7,0</text>
<text x="725" y="407" text-anchor="middle" class="f-ts">NUNCA bolus</text>
<line x1="410" y1="430" x2="410" y2="465" class="f-arr" marker-end="url(#arr-cad)"/>
<rect x="180" y="470" width="460" height="100" class="f-warn"/>
<text x="410" y="495" text-anchor="middle" class="f-tc">REAVALIAR 2/2h</text>
<text x="410" y="518" text-anchor="middle" class="f-ts">Glicemia, K, gasometria venosa, AG, Na, ureia/Cr</text>
<text x="410" y="536" text-anchor="middle" class="f-ts">Cetonemia β-HB se disponível • diurese horária</text>
<text x="410" y="554" text-anchor="middle" class="f-ts">Identificar precipitante: infecção, IAM, má adesão, drogas (SGLT2)</text>
<line x1="410" y1="570" x2="410" y2="600" class="f-arr" marker-end="url(#arr-cad)"/>
<rect x="180" y="605" width="460" height="120" class="f-ok"/>
<text x="410" y="630" text-anchor="middle" class="f-tc">CRITÉRIOS DE RESOLUÇÃO — TRANSIÇÃO</text>
<text x="410" y="650" text-anchor="middle" class="f-ts">CAD: pH ≥ 7,3 + HCO₃⁻ ≥ 18 + AG ≤ 12 + cetonas negativas</text>
<text x="410" y="668" text-anchor="middle" class="f-ts">EHH: osm normal + estado mental basal</text>
<text x="410" y="688" text-anchor="middle" class="f-ts">Iniciar insulina SC basal-bolus 2h ANTES de desligar BIC</text>
<text x="410" y="706" text-anchor="middle" class="f-ts">Dose total/dia = 0,5-0,8 U/kg (50% basal, 50% bolus)</text>
<line x1="410" y1="725" x2="410" y2="755" class="f-arr" marker-end="url(#arr-cad)"/>
<rect x="180" y="760" width="460" height="130" class="f-crit"/>
<text x="410" y="785" text-anchor="middle" class="f-tc">⚠ COMPLICAÇÕES TEMÍVEIS</text>
<text x="410" y="808" text-anchor="middle" class="f-ts">EDEMA CEREBRAL — pediátrico, mortalidade 21-24%</text>
<text x="410" y="826" text-anchor="middle" class="f-ts">Hidratação cautelosa, evitar Na &lt; 135 abrupto, vigilância neurológica</text>
<text x="410" y="846" text-anchor="middle" class="f-ts">HIPOCALEMIA grave (insulina sem K)</text>
<text x="410" y="864" text-anchor="middle" class="f-ts">HIPOGLICEMIA (falha em adicionar SG quando glicose &lt; 250)</text>
<text x="410" y="882" text-anchor="middle" class="f-ts">Edema pulmonar por sobrecarga</text>
<text x="410" y="1070" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">Umpierrez GE et al., Diabetes Care 2024;47:1257 — Consenso ADA/EASD/JBDS/AACE/DTS</text>
</svg>`
};

/* ============== 9. ANAFILAXIA ============== */
FLOWS["anafilaxia"] = {
titulo: "Anafilaxia",
fonte: "WAO 2020 (Cardona V et al., DOI:10.1016/j.waojou.2020.100472); EAACI 2021",
svg: `<svg viewBox="0 0 1080 1000" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-anaf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
.f-dec{fill:var(--bg-sunken);stroke:var(--ink-2);stroke-width:1.5}
.f-crit{fill:var(--crit-bg);stroke:var(--accent);stroke-width:2;rx:8}
.f-warn{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.5;rx:8}
.f-ok{fill:var(--ok-bg);stroke:var(--ok);stroke-width:1.5;rx:8}
.f-start{fill:var(--accent);stroke:var(--accent-2);rx:30}
.f-t{font:600 13px var(--font-body);fill:var(--ink)}
.f-tw{font:600 13px var(--font-body);fill:#fff}
.f-ts{font:500 11px var(--font-body);fill:var(--ink-2)}
.f-tc{font:600 12px var(--font-body);fill:var(--accent-2)}
.f-arr{stroke:var(--ink-2);stroke-width:1.5;fill:none}
</style>
<rect x="180" y="20" width="460" height="80" class="f-start"/>
<text x="410" y="45" text-anchor="middle" class="f-tw">CRITÉRIOS DE ANAFILAXIA (WAO)</text>
<text x="410" y="65" text-anchor="middle" class="f-tw" style="font-size:11px">Início súbito + pele/mucosa + (vias aéreas OU PA OU sintomas sistêmicos)</text>
<text x="410" y="83" text-anchor="middle" class="f-tw" style="font-size:11px">ou ↓PA isolada pós-exposição a alérgeno conhecido</text>
<line x1="410" y1="100" x2="410" y2="130" class="f-arr" marker-end="url(#arr-anaf)"/>
<rect x="120" y="140" width="580" height="120" class="f-crit"/>
<text x="410" y="170" text-anchor="middle" class="f-t" style="font-size:16px">ADRENALINA IM — 1ª LINHA</text>
<text x="410" y="195" text-anchor="middle" class="f-ts">Adulto: 0,3-0,5 mg (1:1000) face anterolateral da coxa</text>
<text x="410" y="213" text-anchor="middle" class="f-ts">Criança: 0,01 mg/kg (máx 0,5 mg)</text>
<text x="410" y="231" text-anchor="middle" class="f-ts">REPETIR a cada 5-15 min se não melhorar (até 3×)</text>
<text x="410" y="251" text-anchor="middle" class="f-tc">NUNCA atrasar adrenalina por aguardar acesso ou medicar adjuvante</text>
<line x1="410" y1="260" x2="410" y2="290" class="f-arr" marker-end="url(#arr-anaf)"/>
<rect x="180" y="295" width="460" height="100" class="f-warn"/>
<text x="410" y="320" text-anchor="middle" class="f-tc">SUPORTE SIMULTÂNEO</text>
<text x="410" y="343" text-anchor="middle" class="f-ts">Decúbito dorsal • pernas elevadas (não se IRespA)</text>
<text x="410" y="361" text-anchor="middle" class="f-ts">O₂ alto fluxo • acesso venoso 2 calibres</text>
<text x="410" y="379" text-anchor="middle" class="f-ts">Cristaloide 20 mL/kg em 5-10 min se hipoTA</text>
<line x1="410" y1="395" x2="410" y2="425" class="f-arr" marker-end="url(#arr-anaf)"/>
<polygon points="410,430 810,495 410,560 180,495" class="f-dec"/>
<text x="410" y="485" text-anchor="middle" class="f-t">Resposta?</text>
<text x="410" y="503" text-anchor="middle" class="f-ts">PAS ≥ 90 + reversão</text>
<text x="410" y="521" text-anchor="middle" class="f-ts">de broncoespasmo</text>
<line x1="180" y1="495" x2="80" y2="495" class="f-arr" marker-end="url(#arr-anaf)"/>
<rect x="20" y="515" width="160" height="200" class="f-crit"/>
<text x="100" y="540" text-anchor="middle" class="f-tc">REFRATÁRIA</text>
<text x="100" y="560" text-anchor="middle" class="f-ts">≥ 2 doses IM</text>
<text x="100" y="578" text-anchor="middle" class="f-ts">sem melhora</text>
<text x="100" y="600" text-anchor="middle" class="f-ts">ADRENALINA IV BIC</text>
<text x="100" y="618" text-anchor="middle" class="f-ts">0,05-1 mcg/kg/min</text>
<text x="100" y="638" text-anchor="middle" class="f-ts">Glucagon 1-5 mg IV</text>
<text x="100" y="654" text-anchor="middle" class="f-ts">se β-bloq prévio</text>
<text x="100" y="676" text-anchor="middle" class="f-ts">IOT precoce</text>
<text x="100" y="694" text-anchor="middle" class="f-ts">se estridor/edema</text>
<text x="100" y="710" text-anchor="middle" class="f-ts">de via aérea</text>
<line x1="870" y1="495" x2="970" y2="495" class="f-arr" marker-end="url(#arr-anaf)"/>
<rect x="830" y="540" width="200" height="160" class="f-ok"/>
<text x="930" y="565" text-anchor="middle" class="f-tc">ESTABILIZADO</text>
<text x="930" y="588" text-anchor="middle" class="f-ts">ADJUVANTES (após adrenalina)</text>
<text x="930" y="605" text-anchor="middle" class="f-ts">— Anti-H1: difenidramina</text>
<text x="930" y="621" text-anchor="middle" class="f-ts">25-50 mg IV (urticária)</text>
<text x="930" y="640" text-anchor="middle" class="f-ts">— H2: ranitidina 50 mg IV</text>
<text x="930" y="659" text-anchor="middle" class="f-ts">— Corticoide: metilpred</text>
<text x="930" y="675" text-anchor="middle" class="f-ts">1-2 mg/kg IV</text>
<text x="930" y="691" text-anchor="middle" class="f-ts">NÃO previne bifásica</text>
<line x1="410" y1="560" x2="410" y2="600" class="f-arr" marker-end="url(#arr-anaf)"/>
<rect x="220" y="605" width="380" height="80" class="f-warn"/>
<text x="410" y="630" text-anchor="middle" class="f-tc">SE BRONCOESPASMO PERSISTE</text>
<text x="410" y="650" text-anchor="middle" class="f-ts">Salbutamol nebulizado 5 mg + ipratrópio 0,5 mg</text>
<text x="410" y="668" text-anchor="middle" class="f-ts">Repetir 20/20 min × 3 • considerar Mg 2g IV</text>
<line x1="410" y1="685" x2="410" y2="715" class="f-arr" marker-end="url(#arr-anaf)"/>
<rect x="180" y="720" width="460" height="120" class="f-ok"/>
<text x="410" y="745" text-anchor="middle" class="f-tc">OBSERVAÇÃO + ALTA</text>
<text x="410" y="765" text-anchor="middle" class="f-ts">Mínimo 4-6h (8-12h se reação grave/refratária)</text>
<text x="410" y="783" text-anchor="middle" class="f-ts">Risco de reação BIFÁSICA: 1-20% nas primeiras 24h</text>
<text x="410" y="803" text-anchor="middle" class="f-ts">ALTA: orientação escrita + prescrição AUTOINJETOR (Anapen/Epipen)</text>
<text x="410" y="823" text-anchor="middle" class="f-ts">Encaminhar a imuno/alergista</text>
<text x="410" y="965" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">WAO Anaphylaxis Guidance 2020; EAACI Anaphylaxis 2021 (Muraro A et al.)</text>
</svg>`
};

/* ============== 10. HIPERCALEMIA ============== */
FLOWS["hipercalemia"] = {
titulo: "Hipercalemia",
fonte: "KDIGO 2020 Controversies (Clase CM et al., Kidney Int 97:42)",
svg: `<svg viewBox="0 0 820 1100" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-hipk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
.f-dec{fill:var(--bg-sunken);stroke:var(--ink-2);stroke-width:1.5}
.f-crit{fill:var(--crit-bg);stroke:var(--accent);stroke-width:2;rx:8}
.f-warn{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.5;rx:8}
.f-ok{fill:var(--ok-bg);stroke:var(--ok);stroke-width:1.5;rx:8}
.f-start{fill:var(--accent);stroke:var(--accent-2);rx:30}
.f-t{font:600 13px var(--font-body);fill:var(--ink)}
.f-tw{font:600 13px var(--font-body);fill:#fff}
.f-ts{font:500 11px var(--font-body);fill:var(--ink-2)}
.f-tc{font:600 12px var(--font-body);fill:var(--accent-2)}
.f-arr{stroke:var(--ink-2);stroke-width:1.5;fill:none}
</style>
<rect x="180" y="20" width="460" height="60" class="f-start"/>
<text x="410" y="45" text-anchor="middle" class="f-tw">K⁺ ≥ 5,5 mEq/L confirmado</text>
<text x="410" y="65" text-anchor="middle" class="f-tw" style="font-size:11px">repetir + ECG IMEDIATO + excluir pseudo-hipercalemia</text>
<line x1="410" y1="80" x2="410" y2="110" class="f-arr" marker-end="url(#arr-hipk)"/>
<rect x="120" y="115" width="580" height="120" class="f-warn"/>
<text x="410" y="140" text-anchor="middle" class="f-t">ECG — alterações progressivas</text>
<text x="225" y="165" text-anchor="middle" class="f-tc" style="font-size:11px">LEVE (K 5,5-6,0)</text>
<text x="225" y="183" text-anchor="middle" class="f-ts">T apiculadas</text>
<text x="225" y="200" text-anchor="middle" class="f-ts">QT ↓</text>
<text x="410" y="165" text-anchor="middle" class="f-tc" style="font-size:11px">MODERADA (6,0-7,0)</text>
<text x="410" y="183" text-anchor="middle" class="f-ts">P achatada • PR ↑</text>
<text x="410" y="200" text-anchor="middle" class="f-ts">QRS alargado</text>
<text x="595" y="165" text-anchor="middle" class="f-tc" style="font-size:11px">GRAVE (≥ 7,0)</text>
<text x="595" y="183" text-anchor="middle" class="f-ts">QRS &gt; 120</text>
<text x="595" y="200" text-anchor="middle" class="f-ts">sinusoidal → FV</text>
<text x="410" y="225" text-anchor="middle" class="f-ts" style="font-size:11px">ECG NORMAL não exclui risco; doseamento + ECG dinâmico</text>
<line x1="410" y1="235" x2="410" y2="265" class="f-arr" marker-end="url(#arr-hipk)"/>
<rect x="120" y="275" width="580" height="60" class="f-crit"/>
<text x="410" y="300" text-anchor="middle" class="f-t" style="font-size:14px">PASSO 1 — ESTABILIZAR MEMBRANA (se ECG alterado ou K ≥ 6,5)</text>
<text x="410" y="320" text-anchor="middle" class="f-ts">não reduz K, ganha tempo</text>
<line x1="410" y1="335" x2="410" y2="365" class="f-arr" marker-end="url(#arr-hipk)"/>
<rect x="180" y="370" width="460" height="80" class="f-crit"/>
<text x="410" y="395" text-anchor="middle" class="f-tc">GLUCONATO DE CÁLCIO 10%</text>
<text x="410" y="418" text-anchor="middle" class="f-ts">10 mL IV em 2-3 min, REPETIR em 5 min se ECG persiste</text>
<text x="410" y="436" text-anchor="middle" class="f-ts">início imediato • duração ~30-60 min • cloreto Ca 5 mL se central</text>
<line x1="410" y1="450" x2="410" y2="480" class="f-arr" marker-end="url(#arr-hipk)"/>
<rect x="120" y="490" width="580" height="60" class="f-warn"/>
<text x="410" y="515" text-anchor="middle" class="f-t" style="font-size:14px">PASSO 2 — TRANSLOCAR K⁺ PARA O INTRACELULAR</text>
<text x="410" y="535" text-anchor="middle" class="f-ts">não elimina K, redistribui — efeito 30-60 min</text>
<line x1="410" y1="550" x2="410" y2="580" class="f-arr" marker-end="url(#arr-hipk)"/>
<rect x="20" y="590" width="240" height="160" class="f-rect"/>
<text x="140" y="615" text-anchor="middle" class="f-tc">INSULINA + GLICOSE</text>
<text x="140" y="637" text-anchor="middle" class="f-ts">Insulina R 10 U IV</text>
<text x="140" y="655" text-anchor="middle" class="f-ts">+ Glicose 50% 50 mL IV</text>
<text x="140" y="675" text-anchor="middle" class="f-ts">(SE glicemia &lt; 250)</text>
<text x="140" y="693" text-anchor="middle" class="f-ts">↓ K 0,5-1,2 mEq/L</text>
<text x="140" y="711" text-anchor="middle" class="f-ts">Vigiar hipoglicemia</text>
<text x="140" y="729" text-anchor="middle" class="f-ts">checar glicemia 1/1h × 6h</text>
<rect x="280" y="590" width="240" height="160" class="f-rect"/>
<text x="400" y="615" text-anchor="middle" class="f-tc">β2 AGONISTA</text>
<text x="400" y="637" text-anchor="middle" class="f-ts">Salbutamol nebulizado</text>
<text x="400" y="655" text-anchor="middle" class="f-ts">10-20 mg em 4 mL SF</text>
<text x="400" y="675" text-anchor="middle" class="f-ts">(20 gotas, 10 min)</text>
<text x="400" y="693" text-anchor="middle" class="f-ts">↓ K 0,5-1,0 mEq/L</text>
<text x="400" y="711" text-anchor="middle" class="f-ts">aditivo a insulina</text>
<text x="400" y="729" text-anchor="middle" class="f-ts">cuidado em DAC</text>
<rect x="540" y="590" width="240" height="160" class="f-rect"/>
<text x="660" y="615" text-anchor="middle" class="f-tc">BICARBONATO</text>
<text x="660" y="637" text-anchor="middle" class="f-ts">SÓ se acidose metab.</text>
<text x="660" y="655" text-anchor="middle" class="f-ts">grave (HCO₃⁻ &lt; 18)</text>
<text x="660" y="675" text-anchor="middle" class="f-ts">50-100 mEq IV em 30 min</text>
<text x="660" y="693" text-anchor="middle" class="f-ts">↓ K 0,1-0,3 mEq/L</text>
<text x="660" y="711" text-anchor="middle" class="f-ts">evitar bolus rápido</text>
<text x="660" y="729" text-anchor="middle" class="f-ts">— hipernatremia</text>
<line x1="410" y1="750" x2="410" y2="785" class="f-arr" marker-end="url(#arr-hipk)"/>
<rect x="120" y="795" width="580" height="60" class="f-warn"/>
<text x="410" y="820" text-anchor="middle" class="f-t" style="font-size:14px">PASSO 3 — ELIMINAR K⁺ DO CORPO</text>
<text x="410" y="840" text-anchor="middle" class="f-ts">efeito tardio (horas) — define resolução</text>
<line x1="410" y1="855" x2="410" y2="885" class="f-arr" marker-end="url(#arr-hipk)"/>
<rect x="20" y="895" width="240" height="140" class="f-rect"/>
<text x="140" y="920" text-anchor="middle" class="f-tc">FUROSEMIDA</text>
<text x="140" y="940" text-anchor="middle" class="f-ts">40-80 mg IV</text>
<text x="140" y="958" text-anchor="middle" class="f-ts">se diurese mantida</text>
<text x="140" y="976" text-anchor="middle" class="f-ts">+ SF se euvolêmico</text>
<text x="140" y="996" text-anchor="middle" class="f-ts">↓ K 0,5-1,0 mEq/L</text>
<text x="140" y="1014" text-anchor="middle" class="f-ts">em 4-6h</text>
<rect x="280" y="895" width="240" height="140" class="f-rect"/>
<text x="400" y="920" text-anchor="middle" class="f-tc">RESINAS / TROCADORES</text>
<text x="400" y="940" text-anchor="middle" class="f-ts">Sorcal (poliestireno Ca)</text>
<text x="400" y="958" text-anchor="middle" class="f-ts">15-30 g VO 6/6h</text>
<text x="400" y="976" text-anchor="middle" class="f-ts">Patiromer / Lokelma</text>
<text x="400" y="994" text-anchor="middle" class="f-ts">se disponíveis</text>
<text x="400" y="1014" text-anchor="middle" class="f-ts">efeito em horas, segurança</text>
<rect x="540" y="895" width="240" height="140" class="f-crit"/>
<text x="660" y="920" text-anchor="middle" class="f-tc">HEMODIÁLISE</text>
<text x="660" y="942" text-anchor="middle" class="f-ts">K &gt; 6,5 refratário</text>
<text x="660" y="960" text-anchor="middle" class="f-ts">IRA oligúrica</text>
<text x="660" y="978" text-anchor="middle" class="f-ts">IRC dialítica</text>
<text x="660" y="996" text-anchor="middle" class="f-ts">+ acidose grave</text>
<text x="660" y="1014" text-anchor="middle" class="f-ts">CHAMAR nefrologia ASAP</text>
<text x="410" y="1075" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">KDIGO 2020 Controversies in Hyperkalaemia — Kidney Int 97(1):42-61</text>
</svg>`
};


/* ============== 11. ABDOME AGUDO ============== */
FLOWS["abd-agudo"] = {
titulo: "Abdome Agudo — Abordagem por Padrão",
fonte: "WSES Abdominal Emergencies; ACEP Acute Abdomen",
svg: `<svg viewBox="0 0 1080 1100" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-aa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
.f-dec{fill:var(--bg-sunken);stroke:var(--ink-2);stroke-width:1.5}
.f-crit{fill:var(--crit-bg);stroke:var(--accent);stroke-width:2;rx:8}
.f-warn{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.5;rx:8}
.f-ok{fill:var(--ok-bg);stroke:var(--ok);stroke-width:1.5;rx:8}
.f-start{fill:var(--accent);stroke:var(--accent-2);rx:30}
.f-t{font:600 13px var(--font-body);fill:var(--ink)}
.f-tw{font:600 13px var(--font-body);fill:#fff}
.f-ts{font:500 11px var(--font-body);fill:var(--ink-2)}
.f-tc{font:600 12px var(--font-body);fill:var(--accent-2)}
.f-arr{stroke:var(--ink-2);stroke-width:1.5;fill:none}
</style>
<rect x="240" y="20" width="340" height="50" class="f-start"/>
<text x="410" y="42" text-anchor="middle" class="f-tw">Dor abdominal aguda</text>
<text x="410" y="60" text-anchor="middle" class="f-tw" style="font-size:11px">início &lt; 7 dias</text>
<line x1="410" y1="70" x2="410" y2="100" class="f-arr" marker-end="url(#arr-aa)"/>
<rect x="120" y="105" width="580" height="100" class="f-warn"/>
<text x="410" y="130" text-anchor="middle" class="f-t">AVALIAÇÃO INICIAL</text>
<text x="410" y="152" text-anchor="middle" class="f-ts">SSVV • exame físico (peritonite? sopros? massa?)</text>
<text x="410" y="170" text-anchor="middle" class="f-ts">SEMPRE β-HCG em mulheres em idade fértil • lactato</text>
<text x="410" y="188" text-anchor="middle" class="f-ts">HMG, PCR, ureia/Cr, eletrólitos, amilase/lipase, EAS</text>
<line x1="410" y1="205" x2="410" y2="235" class="f-arr" marker-end="url(#arr-aa)"/>
<rect x="120" y="240" width="580" height="50" class="f-crit"/>
<text x="410" y="265" text-anchor="middle" class="f-t" style="font-size:14px">CLASSIFICAR PADRÃO — 5 SÍNDROMES</text>
<text x="410" y="282" text-anchor="middle" class="f-ts">condicionam exame de imagem e cirurgia</text>
<line x1="410" y1="290" x2="410" y2="320" class="f-arr" marker-end="url(#arr-aa)"/>
<rect x="20" y="330" width="155" height="130" class="f-warn"/>
<text x="98" y="355" text-anchor="middle" class="f-tc" style="font-size:11px">INFLAMATÓRIO</text>
<text x="98" y="377" text-anchor="middle" class="f-ts">Apendicite</text>
<text x="98" y="393" text-anchor="middle" class="f-ts">Colecistite</text>
<text x="98" y="409" text-anchor="middle" class="f-ts">Diverticulite</text>
<text x="98" y="425" text-anchor="middle" class="f-ts">Pancreatite</text>
<text x="98" y="445" text-anchor="middle" class="f-ts">febre + ↑PCR + dor</text>
<text x="98" y="455" text-anchor="middle" class="f-ts">localizada</text>
<rect x="185" y="330" width="155" height="130" class="f-warn"/>
<text x="263" y="355" text-anchor="middle" class="f-tc" style="font-size:11px">OBSTRUTIVO</text>
<text x="263" y="377" text-anchor="middle" class="f-ts">Brida (cir prévia)</text>
<text x="263" y="393" text-anchor="middle" class="f-ts">Hérnia encarcerada</text>
<text x="263" y="409" text-anchor="middle" class="f-ts">Volvo</text>
<text x="263" y="425" text-anchor="middle" class="f-ts">Tumor obstrutivo</text>
<text x="263" y="445" text-anchor="middle" class="f-ts">Vômito, parada</text>
<text x="263" y="455" text-anchor="middle" class="f-ts">eliminação, RHA ↑↑</text>
<rect x="350" y="330" width="155" height="130" class="f-crit"/>
<text x="428" y="355" text-anchor="middle" class="f-tc" style="font-size:11px">PERFURATIVO</text>
<text x="428" y="377" text-anchor="middle" class="f-ts">Úlcera</text>
<text x="428" y="393" text-anchor="middle" class="f-ts">Diverticular perf.</text>
<text x="428" y="409" text-anchor="middle" class="f-ts">Apendicite com</text>
<text x="428" y="423" text-anchor="middle" class="f-ts">peritonite</text>
<text x="428" y="443" text-anchor="middle" class="f-ts">Dor súbita +</text>
<text x="428" y="455" text-anchor="middle" class="f-ts">abd em tábua</text>
<rect x="515" y="330" width="155" height="130" class="f-crit"/>
<text x="593" y="355" text-anchor="middle" class="f-tc" style="font-size:11px">VASCULAR</text>
<text x="593" y="377" text-anchor="middle" class="f-ts">Isquemia mesent.</text>
<text x="593" y="393" text-anchor="middle" class="f-ts">Aneurisma roto</text>
<text x="593" y="409" text-anchor="middle" class="f-ts">Mortalidade 50-80%</text>
<text x="593" y="425" text-anchor="middle" class="f-ts">DOR desproporcional</text>
<text x="593" y="441" text-anchor="middle" class="f-ts">ao exame • lactato</text>
<text x="593" y="455" text-anchor="middle" class="f-ts">FA, IAM, idoso</text>
<rect x="910" y="330" width="120" height="130" class="f-rect"/>
<text x="970" y="355" text-anchor="middle" class="f-tc" style="font-size:11px">EXTRA-ABD</text>
<text x="970" y="377" text-anchor="middle" class="f-ts">IAM inferior</text>
<text x="970" y="393" text-anchor="middle" class="f-ts">CAD</text>
<text x="970" y="409" text-anchor="middle" class="f-ts">Pielonefrite</text>
<text x="970" y="425" text-anchor="middle" class="f-ts">Pneumonia base</text>
<text x="970" y="445" text-anchor="middle" class="f-ts">Crise falciforme</text>
<line x1="410" y1="460" x2="410" y2="495" class="f-arr" marker-end="url(#arr-aa)"/>
<rect x="120" y="500" width="580" height="80" class="f-warn"/>
<text x="410" y="525" text-anchor="middle" class="f-t">CONDUTA UNIVERSAL — primeiras medidas</text>
<text x="410" y="548" text-anchor="middle" class="f-ts">Dieta zero • SNG se obstrução • SF/RL conforme volemia</text>
<text x="410" y="566" text-anchor="middle" class="f-ts">Analgesia (dipirona, escopolamina; opioide titulado — NÃO mascara)</text>
<line x1="410" y1="580" x2="410" y2="610" class="f-arr" marker-end="url(#arr-aa)"/>
<rect x="120" y="615" width="580" height="100" class="f-rect"/>
<text x="410" y="640" text-anchor="middle" class="f-tc">EXAME DE IMAGEM</text>
<text x="410" y="660" text-anchor="middle" class="f-ts">RX simples: pneumoperitônio (perfurativo), níveis hidroaéreos (obstrutivo)</text>
<text x="410" y="678" text-anchor="middle" class="f-ts">USG: ideal para colecistite, apendicite, gravidez, urolitíase</text>
<text x="410" y="696" text-anchor="middle" class="f-ts">TC ABDOME: padrão-ouro para diverticulite, vascular, perfuração, obstrução</text>
<line x1="410" y1="715" x2="410" y2="745" class="f-arr" marker-end="url(#arr-aa)"/>
<polygon points="410,750 810,815 410,880 180,815" class="f-dec"/>
<text x="410" y="800" text-anchor="middle" class="f-t">SINAIS DE PERITONITE?</text>
<text x="410" y="820" text-anchor="middle" class="f-ts">Defesa, descompressão dolorosa,</text>
<text x="410" y="838" text-anchor="middle" class="f-ts">abd em tábua, sepse</text>
<line x1="870" y1="815" x2="970" y2="815" class="f-arr" marker-end="url(#arr-aa)"/>
<rect x="830" y="835" width="200" height="100" class="f-crit"/>
<text x="930" y="860" text-anchor="middle" class="f-tc">CIRURGIA URGENTE</text>
<text x="930" y="882" text-anchor="middle" class="f-ts">Cirurgião imediato</text>
<text x="930" y="900" text-anchor="middle" class="f-ts">ATB amplo espectro</text>
<text x="930" y="918" text-anchor="middle" class="f-ts">(ceftriaxona+metro</text>
<text x="930" y="930" text-anchor="middle" class="f-ts">ou pip-tazo)</text>
<line x1="180" y1="815" x2="80" y2="815" class="f-arr" marker-end="url(#arr-aa)"/>
<rect x="20" y="835" width="160" height="100" class="f-ok"/>
<text x="100" y="860" text-anchor="middle" class="f-tc">TRATAMENTO</text>
<text x="100" y="882" text-anchor="middle" class="f-ts">específico do</text>
<text x="100" y="900" text-anchor="middle" class="f-ts">diagnóstico</text>
<text x="100" y="918" text-anchor="middle" class="f-ts">+ reavaliações</text>
<text x="100" y="930" text-anchor="middle" class="f-ts">seriadas</text>
<line x1="410" y1="880" x2="410" y2="950" class="f-arr" marker-end="url(#arr-aa)"/>
<rect x="180" y="955" width="460" height="80" class="f-warn"/>
<text x="410" y="980" text-anchor="middle" class="f-tc">⚠ ARMADILHAS</text>
<text x="410" y="1000" text-anchor="middle" class="f-ts">Idosos, imunossuprimidos, diabéticos: peritonite atenuada</text>
<text x="410" y="1018" text-anchor="middle" class="f-ts">Reavaliar em 2-4h se diagnóstico incerto • limiar baixo para TC</text>
<text x="410" y="1075" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">WSES Guidelines (vários, World J Emerg Surg); SBMU 2022</text>
</svg>`
};

/* ============== 12. ASMA GRAVE ============== */
FLOWS["asma"] = {
titulo: "Crise Asmática Grave",
fonte: "GINA 2024 (ginasthma.org); SBPT 2020",
svg: `<svg viewBox="0 0 1080 1000" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-as" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
.f-dec{fill:var(--bg-sunken);stroke:var(--ink-2);stroke-width:1.5}
.f-crit{fill:var(--crit-bg);stroke:var(--accent);stroke-width:2;rx:8}
.f-warn{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.5;rx:8}
.f-ok{fill:var(--ok-bg);stroke:var(--ok);stroke-width:1.5;rx:8}
.f-start{fill:var(--accent);stroke:var(--accent-2);rx:30}
.f-t{font:600 13px var(--font-body);fill:var(--ink)}
.f-tw{font:600 13px var(--font-body);fill:#fff}
.f-ts{font:500 11px var(--font-body);fill:var(--ink-2)}
.f-tc{font:600 12px var(--font-body);fill:var(--accent-2)}
.f-arr{stroke:var(--ink-2);stroke-width:1.5;fill:none}
</style>
<rect x="240" y="20" width="340" height="50" class="f-start"/>
<text x="410" y="42" text-anchor="middle" class="f-tw">Crise asmática</text>
<text x="410" y="60" text-anchor="middle" class="f-tw" style="font-size:11px">dispneia + sibilos + ↑FR</text>
<line x1="410" y1="70" x2="410" y2="100" class="f-arr" marker-end="url(#arr-as)"/>
<rect x="120" y="105" width="580" height="120" class="f-warn"/>
<text x="410" y="130" text-anchor="middle" class="f-t">CLASSIFICAR GRAVIDADE</text>
<text x="225" y="155" text-anchor="middle" class="f-tc" style="font-size:11px">LEVE/MOD</text>
<text x="225" y="173" text-anchor="middle" class="f-ts">Fala em frases</text>
<text x="225" y="190" text-anchor="middle" class="f-ts">FR ↑, FC &lt; 120</text>
<text x="225" y="207" text-anchor="middle" class="f-ts">SpO₂ ≥ 90%</text>
<text x="410" y="155" text-anchor="middle" class="f-tc" style="font-size:11px">GRAVE</text>
<text x="410" y="173" text-anchor="middle" class="f-ts">Fala em palavras</text>
<text x="410" y="190" text-anchor="middle" class="f-ts">FR &gt; 30 • FC &gt; 120</text>
<text x="410" y="207" text-anchor="middle" class="f-ts">SpO₂ &lt; 90% • PFE &lt; 50%</text>
<text x="825" y="155" text-anchor="middle" class="f-tc" style="font-size:11px">RISCO DE PCR</text>
<text x="825" y="173" text-anchor="middle" class="f-ts">Cianose • sonolento</text>
<text x="825" y="190" text-anchor="middle" class="f-ts">Tórax silente</text>
<text x="825" y="207" text-anchor="middle" class="f-ts">Bradicardia • IOT</text>
<line x1="410" y1="225" x2="410" y2="255" class="f-arr" marker-end="url(#arr-as)"/>
<rect x="120" y="265" width="580" height="120" class="f-crit"/>
<text x="410" y="290" text-anchor="middle" class="f-tc">PRIMEIRA HORA — sempre fazer</text>
<text x="410" y="315" text-anchor="middle" class="f-ts">O₂ titulado SpO₂ 93-95% (adulto), 94-98% pediátrico</text>
<text x="410" y="335" text-anchor="middle" class="f-ts">SALBUTAMOL 4-10 jatos com espaçador a cada 20 min × 3 (1ª hora)</text>
<text x="410" y="353" text-anchor="middle" class="f-ts">ou nebulização contínua/intermitente 5 mg em 4 mL SF</text>
<text x="410" y="371" text-anchor="middle" class="f-ts">+ IPRATRÓPIO 0,5 mg nas primeiras nebulizações se grave</text>
<line x1="410" y1="385" x2="410" y2="415" class="f-arr" marker-end="url(#arr-as)"/>
<rect x="120" y="420" width="580" height="80" class="f-warn"/>
<text x="410" y="445" text-anchor="middle" class="f-tc">CORTICOIDE SISTÊMICO — todos pacientes</text>
<text x="410" y="465" text-anchor="middle" class="f-ts">Prednisona 40-50 mg VO (1 mg/kg ped) × 5-7 dias</text>
<text x="410" y="483" text-anchor="middle" class="f-ts">ou metilprednisolona 40-125 mg IV/hidrocortisona 200 mg IV</text>
<line x1="410" y1="500" x2="410" y2="530" class="f-arr" marker-end="url(#arr-as)"/>
<polygon points="410,535 810,595 410,655 180,595" class="f-dec"/>
<text x="410" y="585" text-anchor="middle" class="f-t">Após 1h — melhorou?</text>
<text x="410" y="605" text-anchor="middle" class="f-ts">PFE &gt; 60-80% pré • SpO₂ &gt; 95%</text>
<text x="410" y="623" text-anchor="middle" class="f-ts">sem dispneia em repouso</text>
<line x1="870" y1="595" x2="970" y2="595" class="f-arr" marker-end="url(#arr-as)"/>
<rect x="830" y="615" width="200" height="120" class="f-ok"/>
<text x="930" y="640" text-anchor="middle" class="f-tc">ALTA</text>
<text x="930" y="660" text-anchor="middle" class="f-ts">Prednisona 5-7 dias</text>
<text x="930" y="678" text-anchor="middle" class="f-ts">CI + ABAP (formoterol)</text>
<text x="930" y="696" text-anchor="middle" class="f-ts">Plano escrito</text>
<text x="930" y="714" text-anchor="middle" class="f-ts">Reavaliação ambulat 7d</text>
<line x1="180" y1="595" x2="80" y2="595" class="f-arr" marker-end="url(#arr-as)"/>
<rect x="20" y="660" width="160" height="80" class="f-warn"/>
<text x="100" y="685" text-anchor="middle" class="f-tc">MANTER neb</text>
<text x="100" y="705" text-anchor="middle" class="f-ts">a cada 1-4h</text>
<text x="100" y="723" text-anchor="middle" class="f-ts">conforme resposta</text>
<line x1="410" y1="655" x2="410" y2="690" class="f-arr" marker-end="url(#arr-as)"/>
<rect x="180" y="695" width="460" height="100" class="f-crit"/>
<text x="410" y="720" text-anchor="middle" class="f-tc">ASMA QUASE-FATAL / REFRATÁRIA</text>
<text x="410" y="743" text-anchor="middle" class="f-ts">SULFATO DE MAGNÉSIO 2 g IV em 20 min</text>
<text x="410" y="761" text-anchor="middle" class="f-ts">Adrenalina IM 0,3 mg se anafilaxia/refratário extremo</text>
<text x="410" y="779" text-anchor="middle" class="f-ts">UTI: ventilação não invasiva ou IOT (cetamina 1-2 mg/kg + roc 1,2)</text>
<line x1="410" y1="795" x2="410" y2="825" class="f-arr" marker-end="url(#arr-as)"/>
<rect x="180" y="830" width="460" height="100" class="f-rect"/>
<text x="410" y="855" text-anchor="middle" class="f-tc">⚠ ARMADILHAS</text>
<text x="410" y="875" text-anchor="middle" class="f-ts">NÃO sedar/IOT sem preparo (broncoespasmo refratário, hipoTA)</text>
<text x="410" y="893" text-anchor="middle" class="f-ts">VM com IxE prolongado, Vt 6 mL/kg, hipercapnia permissiva</text>
<text x="410" y="911" text-anchor="middle" class="f-ts">Considerar pneumotórax se descompensação súbita</text>
<text x="410" y="975" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">GINA 2024 — ginasthma.org; SBPT 2020</text>
</svg>`
};

/* ============== 13. DPOC EXACERBAÇÃO ============== */
FLOWS["dpoc"] = {
titulo: "DPOC — Exacerbação",
fonte: "GOLD 2024 (goldcopd.org); SBPT",
svg: `<svg viewBox="0 0 1080 900" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-dp" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
.f-dec{fill:var(--bg-sunken);stroke:var(--ink-2);stroke-width:1.5}
.f-crit{fill:var(--crit-bg);stroke:var(--accent);stroke-width:2;rx:8}
.f-warn{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.5;rx:8}
.f-ok{fill:var(--ok-bg);stroke:var(--ok);stroke-width:1.5;rx:8}
.f-start{fill:var(--accent);stroke:var(--accent-2);rx:30}
.f-t{font:600 13px var(--font-body);fill:var(--ink)}
.f-tw{font:600 13px var(--font-body);fill:#fff}
.f-ts{font:500 11px var(--font-body);fill:var(--ink-2)}
.f-tc{font:600 12px var(--font-body);fill:var(--accent-2)}
.f-arr{stroke:var(--ink-2);stroke-width:1.5;fill:none}
</style>
<rect x="240" y="20" width="340" height="60" class="f-start"/>
<text x="410" y="45" text-anchor="middle" class="f-tw">↑ Dispneia + ↑ tosse + ↑ secreção</text>
<text x="410" y="65" text-anchor="middle" class="f-tw" style="font-size:11px">DPOC conhecido / suspeito</text>
<line x1="410" y1="80" x2="410" y2="110" class="f-arr" marker-end="url(#arr-dp)"/>
<rect x="120" y="115" width="580" height="110" class="f-warn"/>
<text x="410" y="140" text-anchor="middle" class="f-t">CRITÉRIOS DE ANTHONISEN (≥ 2 para ATB)</text>
<text x="410" y="163" text-anchor="middle" class="f-ts">1. ↑ Dispneia</text>
<text x="410" y="181" text-anchor="middle" class="f-ts">2. ↑ Volume secreção</text>
<text x="410" y="199" text-anchor="middle" class="f-ts">3. ↑ Purulência secreção (escarro amarelo/verde)</text>
<text x="410" y="217" text-anchor="middle" class="f-ts">Tipo I (3) ou II (2 incluindo purulência) → ATB</text>
<line x1="410" y1="225" x2="410" y2="255" class="f-arr" marker-end="url(#arr-dp)"/>
<rect x="20" y="265" width="240" height="160" class="f-rect"/>
<text x="140" y="290" text-anchor="middle" class="f-tc">1 — BRONCODILATAÇÃO</text>
<text x="140" y="313" text-anchor="middle" class="f-ts">Salbutamol 5 mg neb</text>
<text x="140" y="331" text-anchor="middle" class="f-ts">+ Ipratrópio 0,5 mg</text>
<text x="140" y="350" text-anchor="middle" class="f-ts">cada 20 min × 3</text>
<text x="140" y="368" text-anchor="middle" class="f-ts">depois 4/4h</text>
<text x="140" y="388" text-anchor="middle" class="f-ts">Manter LABA/LAMA</text>
<text x="140" y="406" text-anchor="middle" class="f-ts">de uso domiciliar</text>
<rect x="290" y="265" width="240" height="160" class="f-warn"/>
<text x="410" y="290" text-anchor="middle" class="f-tc">2 — CORTICOIDE</text>
<text x="410" y="313" text-anchor="middle" class="f-ts">Prednisona 40 mg VO</text>
<text x="410" y="331" text-anchor="middle" class="f-ts">por 5 dias (não tem</text>
<text x="410" y="349" text-anchor="middle" class="f-ts">benefício prolongar)</text>
<text x="410" y="370" text-anchor="middle" class="f-ts">SE IV: metilpred</text>
<text x="410" y="388" text-anchor="middle" class="f-ts">40-60 mg/d ou</text>
<text x="410" y="406" text-anchor="middle" class="f-ts">hidrocortisona 200 mg</text>
<rect x="560" y="265" width="240" height="160" class="f-crit"/>
<text x="910" y="290" text-anchor="middle" class="f-tc">3 — ANTIBIÓTICO</text>
<text x="910" y="310" text-anchor="middle" class="f-ts">se critérios Anthonisen</text>
<text x="910" y="330" text-anchor="middle" class="f-ts">Amox-clav 875 mg 12/12</text>
<text x="910" y="348" text-anchor="middle" class="f-ts">ou azitromicina 500 mg/d</text>
<text x="910" y="366" text-anchor="middle" class="f-ts">por 5-7 dias</text>
<text x="910" y="386" text-anchor="middle" class="f-ts">Cobertura Pseudomonas</text>
<text x="910" y="404" text-anchor="middle" class="f-ts">se VEF1 &lt; 30% ou ATB recente</text>
<line x1="410" y1="425" x2="410" y2="455" class="f-arr" marker-end="url(#arr-dp)"/>
<rect x="120" y="460" width="580" height="120" class="f-warn"/>
<text x="410" y="485" text-anchor="middle" class="f-tc">OXIGÊNIO — alvo SpO₂ 88-92%</text>
<text x="410" y="508" text-anchor="middle" class="f-ts">Risco de narcose por CO₂ — TITULAR, não saturar 100%</text>
<text x="410" y="526" text-anchor="middle" class="f-ts">Gaso arterial antes e após • venturi 24-28%</text>
<text x="410" y="544" text-anchor="middle" class="f-ts">VNI (BiPAP IPAP 12-15 / EPAP 4-6) se:</text>
<text x="410" y="562" text-anchor="middle" class="f-ts">acidose respiratória pH ≤ 7,35 + PaCO₂ &gt; 45 + dispneia importante</text>
<line x1="410" y1="580" x2="410" y2="610" class="f-arr" marker-end="url(#arr-dp)"/>
<polygon points="410,615 810,675 410,735 180,675" class="f-dec"/>
<text x="410" y="665" text-anchor="middle" class="f-t">Critérios de IOT?</text>
<text x="410" y="683" text-anchor="middle" class="f-ts">PA instável, parada/iminência</text>
<text x="410" y="703" text-anchor="middle" class="f-ts">consciência ↓, falha de VNI</text>
<line x1="870" y1="675" x2="970" y2="675" class="f-arr" marker-end="url(#arr-dp)"/>
<rect x="830" y="695" width="200" height="100" class="f-crit"/>
<text x="930" y="720" text-anchor="middle" class="f-tc">IOT + VM</text>
<text x="930" y="740" text-anchor="middle" class="f-ts">SRI — cetamina 1-2 mg/kg</text>
<text x="930" y="758" text-anchor="middle" class="f-ts">VC controlado</text>
<text x="930" y="776" text-anchor="middle" class="f-ts">FR 8-10, IxE 1:3-1:4</text>
<line x1="180" y1="675" x2="80" y2="675" class="f-arr" marker-end="url(#arr-dp)"/>
<rect x="20" y="695" width="160" height="100" class="f-ok"/>
<text x="100" y="720" text-anchor="middle" class="f-tc">MANTER</text>
<text x="100" y="740" text-anchor="middle" class="f-ts">terapia médica</text>
<text x="100" y="760" text-anchor="middle" class="f-ts">+ reavaliação 1/1h</text>
<text x="100" y="778" text-anchor="middle" class="f-ts">enfermaria/UTI</text>
<text x="410" y="855" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">GOLD 2024 — Global Initiative for Chronic Obstructive Lung Disease; SBPT</text>
</svg>`
};

/* ============== 14. DENGUE — CLASSIFICAÇÃO ============== */
FLOWS["dengue"] = {
titulo: "Dengue — Manejo MS 2024",
fonte: "Ministério da Saúde — Manejo Clínico da Dengue 6ª ed. 2024",
svg: `<svg viewBox="0 0 820 1100" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-de" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
.f-dec{fill:var(--bg-sunken);stroke:var(--ink-2);stroke-width:1.5}
.f-crit{fill:var(--crit-bg);stroke:var(--accent);stroke-width:2;rx:8}
.f-warn{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.5;rx:8}
.f-ok{fill:var(--ok-bg);stroke:var(--ok);stroke-width:1.5;rx:8}
.f-start{fill:var(--accent);stroke:var(--accent-2);rx:30}
.f-t{font:600 13px var(--font-body);fill:var(--ink)}
.f-tw{font:600 13px var(--font-body);fill:#fff}
.f-ts{font:500 11px var(--font-body);fill:var(--ink-2)}
.f-tc{font:600 12px var(--font-body);fill:var(--accent-2)}
.f-arr{stroke:var(--ink-2);stroke-width:1.5;fill:none}
</style>
<rect x="180" y="20" width="460" height="60" class="f-start"/>
<text x="410" y="45" text-anchor="middle" class="f-tw">Febre &lt; 7 dias + área endêmica</text>
<text x="410" y="65" text-anchor="middle" class="f-tw" style="font-size:11px">+ 2 sinais: cefaleia, mialgia, artralgia, exantema, dor retro-orbital</text>
<line x1="410" y1="80" x2="410" y2="110" class="f-arr" marker-end="url(#arr-de)"/>
<rect x="120" y="115" width="580" height="90" class="f-warn"/>
<text x="410" y="140" text-anchor="middle" class="f-t">AVALIAÇÃO INICIAL</text>
<text x="410" y="163" text-anchor="middle" class="f-ts">PROVA DO LAÇO + SSVV (PA, FC, FR) + hidratação</text>
<text x="410" y="181" text-anchor="middle" class="f-ts">HMG (hematócrito basal!), plaquetas</text>
<text x="410" y="199" text-anchor="middle" class="f-ts">NS1 (1-5 d) ou IgM/sorologia (≥ 6 d)</text>
<line x1="410" y1="205" x2="410" y2="235" class="f-arr" marker-end="url(#arr-de)"/>
<rect x="120" y="245" width="580" height="50" class="f-crit"/>
<text x="410" y="270" text-anchor="middle" class="f-t" style="font-size:14px">CLASSIFICAR EM GRUPO A / B / C / D</text>
<text x="410" y="287" text-anchor="middle" class="f-ts">define conduta, tipo de hidratação, internação</text>
<line x1="410" y1="295" x2="410" y2="325" class="f-arr" marker-end="url(#arr-de)"/>
<rect x="20" y="335" width="190" height="200" class="f-ok"/>
<text x="115" y="358" text-anchor="middle" class="f-tc">GRUPO A</text>
<text x="115" y="375" text-anchor="middle" class="f-ts" style="font-size:10px">sem alarme + sem comorb</text>
<text x="115" y="395" text-anchor="middle" class="f-ts">VO domiciliar:</text>
<text x="115" y="411" text-anchor="middle" class="f-ts">60-80 mL/kg/d</text>
<text x="115" y="428" text-anchor="middle" class="f-ts">(1/3 SRO + 2/3 outros)</text>
<text x="115" y="448" text-anchor="middle" class="f-ts">Dipirona/paracetamol</text>
<text x="115" y="466" text-anchor="middle" class="f-ts">SEM AAS / AINE</text>
<text x="115" y="486" text-anchor="middle" class="f-ts">Retornar imediato se</text>
<text x="115" y="502" text-anchor="middle" class="f-ts">QUALQUER sinal alarme</text>
<text x="115" y="522" text-anchor="middle" class="f-ts">Reavaliar D5-6</text>
<rect x="220" y="335" width="190" height="200" class="f-warn"/>
<text x="315" y="358" text-anchor="middle" class="f-tc">GRUPO B</text>
<text x="315" y="375" text-anchor="middle" class="f-ts" style="font-size:10px">prova do laço +, sangr cut, comorb</text>
<text x="315" y="395" text-anchor="middle" class="f-ts">PERMANÊNCIA emergência</text>
<text x="315" y="411" text-anchor="middle" class="f-ts">HMG completo</text>
<text x="315" y="428" text-anchor="middle" class="f-ts">VO supervisionada</text>
<text x="315" y="446" text-anchor="middle" class="f-ts">se Ht normal</text>
<text x="315" y="466" text-anchor="middle" class="f-ts">Se ↑ Ht: tratar como C</text>
<text x="315" y="488" text-anchor="middle" class="f-ts">Comorbidades:</text>
<text x="315" y="504" text-anchor="middle" class="f-ts">gestante, &lt;2a, &gt;65a</text>
<text x="315" y="522" text-anchor="middle" class="f-ts">DM, HAS, IC, asma, ICR</text>
<rect x="420" y="335" width="190" height="200" class="f-crit"/>
<text x="515" y="358" text-anchor="middle" class="f-tc">GRUPO C</text>
<text x="515" y="375" text-anchor="middle" class="f-ts" style="font-size:10px">SINAIS DE ALARME</text>
<text x="515" y="395" text-anchor="middle" class="f-ts">EM 1h:</text>
<text x="515" y="411" text-anchor="middle" class="f-ts">SF 10 mL/kg em 1-2h</text>
<text x="515" y="428" text-anchor="middle" class="f-ts">depois 25 mL/kg em 6-8h</text>
<text x="515" y="446" text-anchor="middle" class="f-ts">se Ht baixar 10%: manter</text>
<text x="515" y="464" text-anchor="middle" class="f-ts">se persistir alarme:</text>
<text x="515" y="481" text-anchor="middle" class="f-ts">repetir bolus → D</text>
<text x="515" y="500" text-anchor="middle" class="f-ts">Internação em leito</text>
<text x="515" y="517" text-anchor="middle" class="f-ts">monitorado</text>
<rect x="620" y="335" width="180" height="200" class="f-crit"/>
<text x="710" y="358" text-anchor="middle" class="f-tc">GRUPO D</text>
<text x="710" y="375" text-anchor="middle" class="f-ts" style="font-size:10px">CHOQUE / SANGR. GRAVE</text>
<text x="710" y="395" text-anchor="middle" class="f-ts">UTI:</text>
<text x="710" y="411" text-anchor="middle" class="f-ts">SF 20 mL/kg em 20 min</text>
<text x="710" y="428" text-anchor="middle" class="f-ts">repetir até 3 vezes</text>
<text x="710" y="446" text-anchor="middle" class="f-ts">se sem resposta:</text>
<text x="710" y="462" text-anchor="middle" class="f-ts">albumina/coloide</text>
<text x="710" y="478" text-anchor="middle" class="f-ts">vasopressor</text>
<text x="710" y="497" text-anchor="middle" class="f-ts">CH se Hb &lt; 7 ou</text>
<text x="710" y="513" text-anchor="middle" class="f-ts">choque persistente</text>
<text x="710" y="528" text-anchor="middle" class="f-ts">+ vit K, plaq se &lt; 50k</text>
<line x1="410" y1="535" x2="410" y2="575" class="f-arr" marker-end="url(#arr-de)"/>
<rect x="120" y="585" width="580" height="120" class="f-warn"/>
<text x="410" y="610" text-anchor="middle" class="f-tc">SINAIS DE ALARME — APRENDA DE COR</text>
<text x="225" y="632" text-anchor="middle" class="f-ts">• Dor abdominal intensa</text>
<text x="225" y="650" text-anchor="middle" class="f-ts">• Vômitos persistentes</text>
<text x="225" y="668" text-anchor="middle" class="f-ts">• Acúmulo de líquidos</text>
<text x="225" y="686" text-anchor="middle" class="f-ts">(ascite, derrame)</text>
<text x="595" y="632" text-anchor="middle" class="f-ts">• Sangramento de mucosa</text>
<text x="595" y="650" text-anchor="middle" class="f-ts">• Letargia / irritabilidade</text>
<text x="595" y="668" text-anchor="middle" class="f-ts">• Hepatomegalia &gt; 2 cm</text>
<text x="595" y="686" text-anchor="middle" class="f-ts">• ↑ Ht concomitante a ↓ plaq</text>
<line x1="410" y1="705" x2="410" y2="740" class="f-arr" marker-end="url(#arr-de)"/>
<rect x="120" y="745" width="580" height="120" class="f-crit"/>
<text x="410" y="770" text-anchor="middle" class="f-tc">SINAIS DE GRAVIDADE — DENGUE GRAVE</text>
<text x="410" y="792" text-anchor="middle" class="f-ts">• Choque (↓PA, taquicardia, extremidades frias, ↓PP &lt; 20)</text>
<text x="410" y="810" text-anchor="middle" class="f-ts">• Sangramento grave</text>
<text x="410" y="828" text-anchor="middle" class="f-ts">• Disfunção orgânica grave (hepática, miocárdica, neurológica)</text>
<text x="410" y="848" text-anchor="middle" class="f-ts">SEMPRE UTI — vigiar 24-48h após desfervescência</text>
<line x1="410" y1="865" x2="410" y2="895" class="f-arr" marker-end="url(#arr-de)"/>
<rect x="180" y="900" width="460" height="100" class="f-ok"/>
<text x="410" y="925" text-anchor="middle" class="f-tc">CRITÉRIOS DE ALTA</text>
<text x="410" y="945" text-anchor="middle" class="f-ts">Afebril ≥ 48h sem antitérmico • melhora clínica</text>
<text x="410" y="963" text-anchor="middle" class="f-ts">Plaquetas ↑ por 2 dosagens • Ht estável • diurese mantida</text>
<text x="410" y="983" text-anchor="middle" class="f-ts">Sem desconforto respiratório</text>
<text x="410" y="1070" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">MS — Manejo Clínico da Dengue: Adulto e Criança, 6ª ed. 2024</text>
</svg>`
};

/* ============== 15. INTOXICAÇÕES — ANTÍDOTOS ============== */
FLOWS["intox"] = {
titulo: "Intoxicações Agudas — Antídotos",
fonte: "AACT/EAPCCT Position Papers; Goldfrank's Toxicologic Emergencies",
svg: `<svg viewBox="0 0 820 1100" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-tx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
.f-dec{fill:var(--bg-sunken);stroke:var(--ink-2);stroke-width:1.5}
.f-crit{fill:var(--crit-bg);stroke:var(--accent);stroke-width:2;rx:8}
.f-warn{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.5;rx:8}
.f-ok{fill:var(--ok-bg);stroke:var(--ok);stroke-width:1.5;rx:8}
.f-start{fill:var(--accent);stroke:var(--accent-2);rx:30}
.f-t{font:600 13px var(--font-body);fill:var(--ink)}
.f-tw{font:600 13px var(--font-body);fill:#fff}
.f-ts{font:500 11px var(--font-body);fill:var(--ink-2)}
.f-tc{font:600 12px var(--font-body);fill:var(--accent-2)}
.f-arr{stroke:var(--ink-2);stroke-width:1.5;fill:none}
</style>
<rect x="180" y="20" width="460" height="60" class="f-start"/>
<text x="410" y="45" text-anchor="middle" class="f-tw">Intoxicação exógena suspeita / confirmada</text>
<text x="410" y="65" text-anchor="middle" class="f-tw" style="font-size:11px">CIATox 0800 722 6001 (24h)</text>
<line x1="410" y1="80" x2="410" y2="110" class="f-arr" marker-end="url(#arr-tx)"/>
<rect x="120" y="115" width="580" height="120" class="f-warn"/>
<text x="410" y="140" text-anchor="middle" class="f-t">ABCDE + reconhecer SÍNDROME TÓXICA</text>
<text x="225" y="165" text-anchor="middle" class="f-tc" style="font-size:11px">COLINÉRGICA</text>
<text x="225" y="183" text-anchor="middle" class="f-ts">SLUDGE • miose • bronqu.</text>
<text x="225" y="200" text-anchor="middle" class="f-ts">organofosforados</text>
<text x="410" y="165" text-anchor="middle" class="f-tc" style="font-size:11px">ANTICOLINÉRGICA</text>
<text x="410" y="183" text-anchor="middle" class="f-ts">midríase • secura • taquic.</text>
<text x="410" y="200" text-anchor="middle" class="f-ts">delirium • atropina, antidep</text>
<text x="595" y="165" text-anchor="middle" class="f-tc" style="font-size:11px">SIMPATICOMIM</text>
<text x="595" y="183" text-anchor="middle" class="f-ts">midríase • HAS • taquic.</text>
<text x="595" y="200" text-anchor="middle" class="f-ts">cocaína, anfetaminas</text>
<text x="410" y="225" text-anchor="middle" class="f-ts" style="font-size:11px">OPIOIDE → miose puntiforme + ↓FR + ↓consc | SEDATIVO → ↓consc + ↓FR + miose normal</text>
<line x1="410" y1="235" x2="410" y2="265" class="f-arr" marker-end="url(#arr-tx)"/>
<rect x="120" y="275" width="580" height="60" class="f-crit"/>
<text x="410" y="300" text-anchor="middle" class="f-t" style="font-size:14px">ANTÍDOTO ESPECÍFICO — quando reconhecível</text>
<text x="410" y="320" text-anchor="middle" class="f-ts">os abaixo são salvadores; descontaminação é secundária</text>
<line x1="410" y1="335" x2="410" y2="365" class="f-arr" marker-end="url(#arr-tx)"/>
<rect x="20" y="375" width="240" height="180" class="f-rect"/>
<text x="140" y="400" text-anchor="middle" class="f-tc">PARACETAMOL</text>
<text x="140" y="422" text-anchor="middle" class="f-ts">N-ACETILCISTEÍNA (NAC)</text>
<text x="140" y="440" text-anchor="middle" class="f-ts">150 mg/kg em 1h</text>
<text x="140" y="458" text-anchor="middle" class="f-ts">+ 50 mg/kg em 4h</text>
<text x="140" y="476" text-anchor="middle" class="f-ts">+ 100 mg/kg em 16h</text>
<text x="140" y="498" text-anchor="middle" class="f-ts">Nomograma Rumack-Matthew</text>
<text x="140" y="516" text-anchor="middle" class="f-ts">nível 4h pós-ingestão</text>
<text x="140" y="534" text-anchor="middle" class="f-ts">linha 150 µg/mL (EUA)</text>
<text x="140" y="550" text-anchor="middle" class="f-ts">eficácia máxima &lt; 8h</text>
<rect x="280" y="375" width="240" height="180" class="f-rect"/>
<text x="400" y="400" text-anchor="middle" class="f-tc">ORGANOFOSFORADO</text>
<text x="400" y="422" text-anchor="middle" class="f-ts">ATROPINA 2-3 mg IV</text>
<text x="400" y="440" text-anchor="middle" class="f-ts">DOBRAR cada 3-5 min até</text>
<text x="400" y="458" text-anchor="middle" class="f-ts">atropinização (secura/FC↑)</text>
<text x="400" y="476" text-anchor="middle" class="f-ts">+ PRALIDOXIMA 30 mg/kg</text>
<text x="400" y="494" text-anchor="middle" class="f-ts">em 30 min + 8 mg/kg/h</text>
<text x="400" y="514" text-anchor="middle" class="f-ts">deve ser dada APÓS atropina</text>
<text x="400" y="532" text-anchor="middle" class="f-ts">e nas primeiras 24-48h</text>
<text x="400" y="550" text-anchor="middle" class="f-ts">(antes do "aging" da AchE)</text>
<rect x="540" y="375" width="260" height="180" class="f-rect"/>
<text x="670" y="400" text-anchor="middle" class="f-tc">OPIOIDE</text>
<text x="670" y="422" text-anchor="middle" class="f-ts">NALOXONA 0,04-0,4 mg IV</text>
<text x="670" y="440" text-anchor="middle" class="f-ts">titular até FR ≥ 12</text>
<text x="670" y="458" text-anchor="middle" class="f-ts">2 mg IM/intranasal se sem acesso</text>
<text x="670" y="476" text-anchor="middle" class="f-ts">repetir 2-3 min (T½ curta)</text>
<text x="670" y="494" text-anchor="middle" class="f-ts">BIC se metadona/morfina LP</text>
<text x="670" y="514" text-anchor="middle" class="f-ts">cuidado: pode precipitar</text>
<text x="670" y="530" text-anchor="middle" class="f-ts">abstinência (preservar analgesia</text>
<text x="670" y="546" text-anchor="middle" class="f-ts">se pós-op)</text>
<rect x="20" y="565" width="240" height="160" class="f-rect"/>
<text x="140" y="590" text-anchor="middle" class="f-tc">BENZODIAZEPÍNICO</text>
<text x="140" y="612" text-anchor="middle" class="f-ts">FLUMAZENIL 0,2 mg IV</text>
<text x="140" y="630" text-anchor="middle" class="f-ts">repetir 0,2 mg/min até 1 mg</text>
<text x="140" y="648" text-anchor="middle" class="f-ts">USO RESTRITO</text>
<text x="140" y="666" text-anchor="middle" class="f-ts">RISCO de convulsão se:</text>
<text x="140" y="682" text-anchor="middle" class="f-ts">— uso crônico de BZD</text>
<text x="140" y="698" text-anchor="middle" class="f-ts">— co-ingestão de TCA</text>
<text x="140" y="715" text-anchor="middle" class="f-ts">Preferir suporte ventilatório</text>
<rect x="280" y="565" width="240" height="160" class="f-warn"/>
<text x="400" y="590" text-anchor="middle" class="f-tc">COCAÍNA / SIMPATICOMIM</text>
<text x="400" y="612" text-anchor="middle" class="f-ts">BENZODIAZEPÍNICO 1ª linha</text>
<text x="400" y="628" text-anchor="middle" class="f-ts">Diazepam 10 mg IV</text>
<text x="400" y="644" text-anchor="middle" class="f-ts">repetir até sedação leve</text>
<text x="400" y="664" text-anchor="middle" class="f-ts">PA → fentolamina / NTG</text>
<text x="400" y="680" text-anchor="middle" class="f-ts">⛔ NÃO usar β-bloq puro</text>
<text x="400" y="696" text-anchor="middle" class="f-ts">(crise α-adrenérgica</text>
<text x="400" y="712" text-anchor="middle" class="f-ts">não-oposta)</text>
<rect x="540" y="565" width="260" height="160" class="f-rect"/>
<text x="670" y="590" text-anchor="middle" class="f-tc">METANOL / ETILENOGLICOL</text>
<text x="670" y="612" text-anchor="middle" class="f-ts">FOMEPIZOL 15 mg/kg ataque</text>
<text x="670" y="628" text-anchor="middle" class="f-ts">+ 10 mg/kg 12/12h × 4 doses</text>
<text x="670" y="646" text-anchor="middle" class="f-ts">Indisponível? ETANOL IV</text>
<text x="670" y="664" text-anchor="middle" class="f-ts">manter etanolemia 100 mg/dL</text>
<text x="670" y="682" text-anchor="middle" class="f-ts">+ HD se: pH &lt; 7,1, AG &gt; 24,</text>
<text x="670" y="700" text-anchor="middle" class="f-ts">disfunção orgânica</text>
<text x="670" y="716" text-anchor="middle" class="f-ts">Tiamina + piridoxina + folato</text>
<line x1="410" y1="725" x2="410" y2="760" class="f-arr" marker-end="url(#arr-tx)"/>
<rect x="120" y="770" width="580" height="120" class="f-warn"/>
<text x="410" y="795" text-anchor="middle" class="f-tc">DESCONTAMINAÇÃO</text>
<text x="410" y="820" text-anchor="middle" class="f-ts">CARVÃO ATIVADO 1 g/kg VO/SNG nas PRIMEIRAS 1-2h pós-ingestão</text>
<text x="410" y="836" text-anchor="middle" class="f-ts">CI: hidrocarbonetos, corrosivos, álcoois, ↓consciência sem via aérea, íleo</text>
<text x="410" y="854" text-anchor="middle" class="f-ts">LAVAGEM GÁSTRICA: restrita à 1h + drogas letais (acesso protegido)</text>
<text x="410" y="872" text-anchor="middle" class="f-ts">PEG (whole-bowel irrigation): metais pesados, comprimidos LR, body packers</text>
<line x1="410" y1="890" x2="410" y2="920" class="f-arr" marker-end="url(#arr-tx)"/>
<rect x="120" y="925" width="580" height="100" class="f-rect"/>
<text x="410" y="950" text-anchor="middle" class="f-tc">CONSIDERAR ELIMINAÇÃO EXTRACORPÓREA</text>
<text x="410" y="970" text-anchor="middle" class="f-ts">HEMODIÁLISE: lítio, salicilato, metanol, etilenoglicol, valproato grave</text>
<text x="410" y="988" text-anchor="middle" class="f-ts">teofilina, metformina (acidose láctica)</text>
<text x="410" y="1006" text-anchor="middle" class="f-ts">Hemoperfusão e ECMO em casos selecionados</text>
<text x="410" y="1075" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">CIATox/SINITOX • AACT/EAPCCT Position Papers • Goldfrank's 11ª ed.</text>
</svg>`
};

/* índice */
const FLOWS_LIST = Object.keys(FLOWS);

