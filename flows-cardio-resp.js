/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — flows/cardio-resp.js
   5 fluxogramas
   =========================================================== */

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

FLOWS["irpa"] = {
titulo:"IRpA — Insuficiência Respiratória Aguda",
descricao:"Abordagem do paciente com IRpA: classificação tipo I (hipoxêmica) vs tipo II (hipercápnica), suporte ventilatório escalonado.",
svg:`<svg viewBox="0 0 820 1100" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.f-rect { fill:var(--bg-elev); stroke:var(--border); stroke-width:1.5; rx:6; }
.f-crit { fill:#FEE2E2; stroke:#B91C1C; stroke-width:2; rx:6; }
.f-warn { fill:#FEF3C7; stroke:#CA8A04; stroke-width:2; rx:6; }
.f-info { fill:#DBEAFE; stroke:#1D4ED8; stroke-width:2; rx:6; }
.f-purple { fill:#EDE9FE; stroke:#7C3AED; stroke-width:2; rx:6; }
.f-tc { font-family:'Inter Tight',sans-serif; font-size:14px; font-weight:600; fill:var(--ink-1); }
.f-ts { font-family:'Inter Tight',sans-serif; font-size:12px; fill:var(--ink-2); }
.f-tx { font-family:'Inter Tight',sans-serif; font-size:11px; fill:var(--ink-3); }
.f-arr { stroke:var(--ink-2); stroke-width:1.8; fill:none; }
[data-theme="dark"] .f-crit { fill:#7F1D1D; }
[data-theme="dark"] .f-warn { fill:#713F12; }
[data-theme="dark"] .f-info { fill:#1E3A8A; }
[data-theme="dark"] .f-purple { fill:#4C1D95; }
</style>
<marker id="arr-irpa" viewBox="-0 -5 10 10" refX="8" refY="0" orient="auto">
<path d="M0,-5L10,0L0,5" fill="var(--ink-2)"/>
</marker>
</defs>

<rect x="200" y="20" width="420" height="60" class="f-crit"/>
<text x="410" y="48" text-anchor="middle" class="f-tc">IRPA — Insuficiência Respiratória Aguda</text>
<text x="410" y="68" text-anchor="middle" class="f-ts">SpO₂ &lt; 92% / dispneia importante / sinais de fadiga ventilatória</text>
<line x1="410" y1="80" x2="410" y2="115" class="f-arr" marker-end="url(#arr-irpa)"/>

<rect x="60" y="120" width="700" height="100" class="f-info"/>
<text x="410" y="145" text-anchor="middle" class="f-tc">AVALIAÇÃO INICIAL — GASOMETRIA arterial</text>
<text x="80" y="170" class="f-ts">► pH, PaO₂, PaCO₂, HCO₃, lactato, SatO₂, A-aO₂</text>
<text x="80" y="190" class="f-ts">► Diferenciar TIPO 1 (PaO₂ ↓) de TIPO 2 (PaCO₂ ↑) — manejo distinto</text>
<text x="80" y="210" class="f-tx">► Identificar causa REVERSÍVEL: BNCO, edema pulmonar, TEP, PAC, anafilaxia, pneumotórax</text>
<line x1="410" y1="220" x2="410" y2="255" class="f-arr" marker-end="url(#arr-irpa)"/>

<rect x="60" y="260" width="340" height="220" class="f-warn"/>
<text x="230" y="285" text-anchor="middle" class="f-tc">TIPO 1 — HIPOXÊMICA</text>
<text x="230" y="305" text-anchor="middle" class="f-ts">PaO₂ &lt; 60 / P/F &lt; 300</text>
<text x="75" y="332" class="f-ts" style="font-weight:600">CAUSAS:</text>
<text x="75" y="350" class="f-ts">• Pneumonia (PAC/PAV)</text>
<text x="75" y="368" class="f-ts">• Edema pulmonar (IC, SDRA)</text>
<text x="75" y="386" class="f-ts">• TEP    • Atelectasia</text>
<text x="75" y="404" class="f-ts">• Shunt intracardíaco</text>
<text x="75" y="428" class="f-ts" style="font-weight:600">FISIOPAT:</text>
<text x="75" y="446" class="f-ts">↓V/Q ou shunt</text>
<text x="75" y="464" class="f-tx">→ Resposta a O₂ variável</text>

<rect x="420" y="260" width="340" height="220" class="f-purple"/>
<text x="590" y="285" text-anchor="middle" class="f-tc">TIPO 2 — HIPERCÁPNICA</text>
<text x="590" y="305" text-anchor="middle" class="f-ts">PaCO₂ &gt; 50 / pH &lt; 7,35</text>
<text x="435" y="332" class="f-ts" style="font-weight:600">CAUSAS:</text>
<text x="435" y="350" class="f-ts">• DPOC exacerbado</text>
<text x="435" y="368" class="f-ts">• Asma grave (tardio)</text>
<text x="435" y="386" class="f-ts">• Depressão SNC (opioide, BZD)</text>
<text x="435" y="404" class="f-ts">• Fraqueza muscular (Guillain,</text>
<text x="435" y="422" class="f-ts">  miastenia, ELA)</text>
<text x="435" y="446" class="f-ts" style="font-weight:600">FISIOPAT:</text>
<text x="435" y="464" class="f-tx">Hipoventilação alveolar</text>

<line x1="410" y1="485" x2="410" y2="520" class="f-arr" marker-end="url(#arr-irpa)"/>

<rect x="60" y="525" width="700" height="155" class="f-info"/>
<text x="410" y="550" text-anchor="middle" class="f-tc">ESCALONAMENTO DE SUPORTE VENTILATÓRIO</text>
<text x="80" y="575" class="f-ts" style="font-weight:600">1. O₂ suplementar:</text>
<text x="80" y="595" class="f-ts">   Cateter nasal 1-6 L/min → máscara simples 6-10 L/min → não-reinalante 10-15 L/min</text>
<text x="80" y="615" class="f-ts" style="font-weight:600">2. Alto fluxo (HFNC / Optiflow):</text>
<text x="80" y="633" class="f-ts">   Até 60 L/min com FiO₂ titulável. Ideal em IRpA tipo 1, evita IOT em casos selecionados.</text>
<text x="80" y="655" class="f-ts" style="font-weight:600">3. VNI (CPAP / BiPAP):</text>
<text x="80" y="673" class="f-ts">   1ª linha em DPOC exacerbado (BiPAP) e EAP cardiogênico (CPAP).</text>
<line x1="410" y1="680" x2="410" y2="715" class="f-arr" marker-end="url(#arr-irpa)"/>

<rect x="60" y="720" width="700" height="155" class="f-crit"/>
<text x="410" y="745" text-anchor="middle" class="f-tc">CRITÉRIOS PARA IOT — Indicação clara</text>
<text x="80" y="770" class="f-ts">► Falha de VNI ou HFNC após 1-2h de tentativa</text>
<text x="80" y="788" class="f-ts">► Rebaixamento do nível de consciência (não protege via aérea, GCS &lt; 8)</text>
<text x="80" y="806" class="f-ts">► Esforço ventilatório excessivo (uso de musculatura acessória, FR &gt; 35)</text>
<text x="80" y="824" class="f-ts">► Hipoxemia refratária apesar de FiO₂ 100% / VNI</text>
<text x="80" y="842" class="f-ts">► Hipercapnia progressiva com acidose (pH &lt; 7,2-7,25 apesar de VNI)</text>
<text x="80" y="862" class="f-tx">► Choque, instabilidade hemodinâmica, parada respiratória</text>

<rect x="60" y="900" width="700" height="135" class="f-rect"/>
<text x="410" y="925" text-anchor="middle" class="f-tc">PARÂMETROS INICIAIS VM PROTETORA</text>
<text x="80" y="950" class="f-ts">► Volume corrente: 6 mL/kg de peso PREDITO    PEEP: 5-8 (mais em SDRA)</text>
<text x="80" y="970" class="f-ts">► FR 14-20    FiO₂ inicial 100%, titular para SpO₂ 92-96%</text>
<text x="80" y="990" class="f-ts">► Pressão de platô (Pplat) &lt; 30    Driving pressure (Pplat-PEEP) &lt; 15</text>
<text x="80" y="1015" class="f-tx">► Sedação titulada (RASS -2 a 0)    Reavaliação gasométrica em 30 min</text>

<text x="410" y="1075" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">ARDS Network 2000 • GOLD COPD 2024 • ESICM Acute Respiratory Failure</text>
</svg>`
};
