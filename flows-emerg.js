/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — flows/emerg.js
   8 fluxogramas
   =========================================================== */

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

FLOWS["tce-canadian"] = {
titulo:"TCE — Canadian CT Head Rule",
descricao:"Indicação de TC crânio em TCE leve (GCS 13-15) em adulto ≥16 anos. Excluir: anticoagulado, convulsão, déficit focal óbvio.",
svg:`<svg viewBox="0 0 820 1100" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.f-rect { fill:var(--bg-elev); stroke:var(--border); stroke-width:1.5; rx:6; }
.f-crit { fill:#FEE2E2; stroke:#B91C1C; stroke-width:2; rx:6; }
.f-warn { fill:#FEF3C7; stroke:#CA8A04; stroke-width:2; rx:6; }
.f-ok { fill:#DCFCE7; stroke:#16A34A; stroke-width:2; rx:6; }
.f-info { fill:#DBEAFE; stroke:#1D4ED8; stroke-width:2; rx:6; }
.f-tc { font-family:'Inter Tight',sans-serif; font-size:14px; font-weight:600; fill:var(--ink-1); }
.f-ts { font-family:'Inter Tight',sans-serif; font-size:12px; fill:var(--ink-2); }
.f-tx { font-family:'Inter Tight',sans-serif; font-size:11px; fill:var(--ink-3); }
.f-arr { stroke:var(--ink-2); stroke-width:1.8; fill:none; }
[data-theme="dark"] .f-crit { fill:#7F1D1D; }
[data-theme="dark"] .f-warn { fill:#713F12; }
[data-theme="dark"] .f-ok { fill:#14532D; }
[data-theme="dark"] .f-info { fill:#1E3A8A; }
</style>
<marker id="arr-tce" viewBox="-0 -5 10 10" refX="8" refY="0" orient="auto">
<path d="M0,-5L10,0L0,5" fill="var(--ink-2)"/>
</marker>
</defs>

<rect x="200" y="20" width="420" height="80" class="f-info"/>
<text x="410" y="48" text-anchor="middle" class="f-tc">TCE LEVE — GCS 13-15</text>
<text x="410" y="68" text-anchor="middle" class="f-ts">Trauma fechado de crânio nas últimas 24h</text>
<text x="410" y="86" text-anchor="middle" class="f-ts">+ amnésia, perda de consciência, desorientação testemunhada</text>
<line x1="410" y1="100" x2="410" y2="135" class="f-arr" marker-end="url(#arr-tce)"/>

<rect x="120" y="140" width="580" height="100" class="f-warn"/>
<text x="410" y="165" text-anchor="middle" class="f-tc">EXCLUSÕES — Não aplicar Canadian Rule</text>
<text x="410" y="188" text-anchor="middle" class="f-ts">• Idade &lt; 16 anos    • Convulsão pós-trauma    • Anticoagulação/coagulopatia</text>
<text x="410" y="206" text-anchor="middle" class="f-ts">• Déficit neurológico focal    • Trauma penetrante</text>
<text x="410" y="224" text-anchor="middle" class="f-tx">→ TC crânio de rotina nestes casos</text>
<line x1="410" y1="240" x2="410" y2="275" class="f-arr" marker-end="url(#arr-tce)"/>

<rect x="120" y="280" width="580" height="65" class="f-crit"/>
<text x="410" y="305" text-anchor="middle" class="f-tc">ALTO RISCO (necessidade de neurocirurgia)</text>
<text x="410" y="325" text-anchor="middle" class="f-ts">Presença de qualquer critério → TC IMEDIATA</text>
<line x1="410" y1="345" x2="410" y2="380" class="f-arr" marker-end="url(#arr-tce)"/>

<rect x="60" y="385" width="700" height="155" class="f-rect"/>
<text x="80" y="410" class="f-ts">► GCS &lt; 15 em 2h pós-trauma</text>
<text x="80" y="432" class="f-ts">► Fratura craniana aberta ou afundamento</text>
<text x="80" y="454" class="f-ts">► Sinal de fratura de base de crânio (hemotímpano, equimose periorbitária/retroauricular,</text>
<text x="80" y="470" class="f-ts">   otoliquorragia/rinoliquorragia)</text>
<text x="80" y="492" class="f-ts">► 2 ou mais episódios de vômito</text>
<text x="80" y="514" class="f-ts">► Idade ≥ 65 anos</text>
<line x1="410" y1="540" x2="410" y2="575" class="f-arr" marker-end="url(#arr-tce)"/>

<rect x="120" y="580" width="580" height="60" class="f-warn"/>
<text x="410" y="605" text-anchor="middle" class="f-tc">RISCO MÉDIO (lesão cerebral, sem cirurgia)</text>
<text x="410" y="625" text-anchor="middle" class="f-ts">Presença de qualquer critério → TC ou observação 4-6h</text>
<line x1="410" y1="640" x2="410" y2="675" class="f-arr" marker-end="url(#arr-tce)"/>

<rect x="60" y="680" width="700" height="105" class="f-rect"/>
<text x="80" y="705" class="f-ts">► Amnésia retrógrada para eventos ≥ 30 min antes do impacto</text>
<text x="80" y="727" class="f-ts">► Mecanismo perigoso: queda de altura ≥ 1 m / 5 degraus, passageiro ejetado de veículo,</text>
<text x="80" y="743" class="f-ts">   atropelamento por veículo motorizado, colisão automobilística em alta velocidade</text>
<text x="80" y="780" class="f-ts">→ Critérios sensibilidade ~98% para lesão neurocirúrgica</text>
<line x1="410" y1="785" x2="410" y2="820" class="f-arr" marker-end="url(#arr-tce)"/>

<rect x="120" y="825" width="580" height="80" class="f-ok"/>
<text x="410" y="850" text-anchor="middle" class="f-tc">BAIXO RISCO — sem critério</text>
<text x="410" y="872" text-anchor="middle" class="f-ts">SEM indicação de TC.</text>
<text x="410" y="890" text-anchor="middle" class="f-ts">Observação domiciliar com orientações de retorno.</text>

<rect x="60" y="940" width="700" height="120" class="f-info"/>
<text x="410" y="965" text-anchor="middle" class="f-tc">SE TC INDICADA — Sinais que sugerem necessidade de NEUROCIRURGIA</text>
<text x="80" y="990" class="f-ts">• Hematoma extradural / subdural / intraparenquimatoso volumoso</text>
<text x="80" y="1008" class="f-ts">• Desvio da linha média &gt; 5 mm    • Apagamento de cisternas basais</text>
<text x="80" y="1026" class="f-ts">• Hemorragia subaracnoide difusa traumática    • Fratura com afundamento &gt; espessura óssea</text>
<text x="80" y="1048" class="f-ts">→ Acionar neurocirurgia + UTI neurocrítica. PAS ≥ 110, evitar hipoxia.</text>

<text x="410" y="1085" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">Stiell IG et al. Lancet 2001;357:1391-6 • Atualização 2014</text>
</svg>`
};

FLOWS["hpp"] = {
titulo:"Hemorragia Pós-Parto — Manejo Escalonado",
descricao:"HPP = perda ≥500 mL pós-parto vaginal ou ≥1000 mL pós-cesárea. Causas '4Ts': Tônus (atonia 70%) > Trauma > Tecido > Trombina.",
svg:`<svg viewBox="0 0 820 1180" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.f-rect { fill:var(--bg-elev); stroke:var(--border); stroke-width:1.5; rx:6; }
.f-crit { fill:#FEE2E2; stroke:#B91C1C; stroke-width:2; rx:6; }
.f-warn { fill:#FEF3C7; stroke:#CA8A04; stroke-width:2; rx:6; }
.f-info { fill:#DBEAFE; stroke:#1D4ED8; stroke-width:2; rx:6; }
.f-pink { fill:#FCE7F3; stroke:#BE185D; stroke-width:2; rx:6; }
.f-tc { font-family:'Inter Tight',sans-serif; font-size:14px; font-weight:600; fill:var(--ink-1); }
.f-ts { font-family:'Inter Tight',sans-serif; font-size:12px; fill:var(--ink-2); }
.f-tx { font-family:'Inter Tight',sans-serif; font-size:11px; fill:var(--ink-3); }
.f-arr { stroke:var(--ink-2); stroke-width:1.8; fill:none; }
[data-theme="dark"] .f-crit { fill:#7F1D1D; }
[data-theme="dark"] .f-warn { fill:#713F12; }
[data-theme="dark"] .f-info { fill:#1E3A8A; }
[data-theme="dark"] .f-pink { fill:#831843; }
</style>
<marker id="arr-h" viewBox="-0 -5 10 10" refX="8" refY="0" orient="auto">
<path d="M0,-5L10,0L0,5" fill="var(--ink-2)"/>
</marker>
</defs>

<rect x="180" y="20" width="460" height="65" class="f-crit"/>
<text x="410" y="48" text-anchor="middle" class="f-tc">HEMORRAGIA PÓS-PARTO (HPP)</text>
<text x="410" y="70" text-anchor="middle" class="f-ts">≥500 mL vaginal ou ≥1000 mL cesárea / sangramento c/ instabilidade</text>
<line x1="410" y1="85" x2="410" y2="120" class="f-arr" marker-end="url(#arr-h)"/>

<rect x="60" y="125" width="700" height="115" class="f-warn"/>
<text x="410" y="150" text-anchor="middle" class="f-tc">CHAMADA DE EMERGÊNCIA — 4Ts</text>
<text x="80" y="175" class="f-ts">► Chamar OBSTETRA + ANESTESIA + ENFERMAGEM    Acionar protocolo hemorragia maciça</text>
<text x="80" y="195" class="f-ts">► 2 acessos calibrosos (16G)    O₂ 10-15 L NRM    Monitorizar    Pré-tipagem + cruzada</text>
<text x="80" y="215" class="f-ts">► Identificar causa pelos '4Ts':</text>
<text x="80" y="232" class="f-tx">TÔNUS (atonia uterina ~70%) • TRAUMA (laceração) • TECIDO (retido) • TROMBINA (coagulopatia)</text>
<line x1="410" y1="240" x2="410" y2="275" class="f-arr" marker-end="url(#arr-h)"/>

<rect x="60" y="280" width="700" height="165" class="f-pink"/>
<text x="410" y="305" text-anchor="middle" class="f-tc">PASSO 1 — ATONIA UTERINA (mais comum)</text>
<text x="80" y="330" class="f-ts" style="font-weight:600">MASSAGEM UTERINA BIMANUAL (firme + contínua) — fundamental</text>
<text x="80" y="350" class="f-ts" style="font-weight:600">UTEROTÔNICOS escalonados:</text>
<text x="80" y="370" class="f-ts">1. OCITOCINA 10 UI IM/IV bolus + 20-40 UI em SF 1000 mL IV 250 mL/h</text>
<text x="80" y="388" class="f-ts">2. METILERGOMETRINA 0,2 mg IM (CI: HAS, pré-eclâmpsia) — pode repetir 2-4h</text>
<text x="80" y="406" class="f-ts">3. MISOPROSTOL 800-1000 mcg retal/sublingual</text>
<text x="80" y="424" class="f-ts">4. ÁCIDO TRANEXÂMICO 1g IV em 10 min (até 3h pós-parto) — repetir após 30 min se sangra</text>
<line x1="410" y1="445" x2="410" y2="480" class="f-arr" marker-end="url(#arr-h)"/>

<rect x="60" y="485" width="700" height="160" class="f-warn"/>
<text x="410" y="510" text-anchor="middle" class="f-tc">PASSO 2 — Avaliar outras causas se sangramento persiste</text>
<text x="80" y="535" class="f-ts" style="font-weight:600">TRAUMA — revisão sob luz adequada:</text>
<text x="80" y="553" class="f-ts">   Laceração de colo, vagina, períneo → sutura. Ruptura uterina → laparotomia.</text>
<text x="80" y="575" class="f-ts" style="font-weight:600">TECIDO — restos placentários:</text>
<text x="80" y="593" class="f-ts">   USG (se disponível) + curagem digital + curetagem cuidadosa.</text>
<text x="80" y="615" class="f-ts" style="font-weight:600">TROMBINA — coagulopatia:</text>
<text x="80" y="633" class="f-ts">   Solicitar coagulograma + plaquetas + fibrinogênio. Corrigir conforme déficit.</text>
<line x1="410" y1="650" x2="410" y2="685" class="f-arr" marker-end="url(#arr-h)"/>

<rect x="60" y="690" width="700" height="180" class="f-info"/>
<text x="410" y="715" text-anchor="middle" class="f-tc">PASSO 3 — Refratária / Choque hemorrágico</text>
<text x="80" y="742" class="f-ts" style="font-weight:600">RESSUSCITAÇÃO HEMOSTÁTICA:</text>
<text x="80" y="760" class="f-ts">► Cristaloide ATÉ 1,5-2L, depois HEMOCOMPONENTES (evitar cristaloide excessivo — coagulopatia)</text>
<text x="80" y="780" class="f-ts">► Proporção 1:1:1 → Concentrado hemácias : Plasma fresco : Plaquetas</text>
<text x="80" y="800" class="f-ts">► Manter fibrinogênio &gt; 200 mg/dL (crioprecipitado se &lt; 200)</text>
<text x="80" y="820" class="f-ts">► Repor cálcio (citrato dos hemocomponentes quela Ca++)</text>
<text x="80" y="842" class="f-tx">► Alvo: PAS &gt; 90, Hb &gt; 7, plaquetas &gt; 50k, fibrinogênio &gt; 200, INR &lt; 1,5</text>
<line x1="410" y1="870" x2="410" y2="905" class="f-arr" marker-end="url(#arr-h)"/>

<rect x="60" y="910" width="700" height="170" class="f-crit"/>
<text x="410" y="935" text-anchor="middle" class="f-tc">PASSO 4 — Procedimentos cirúrgicos / intervenção</text>
<text x="80" y="962" class="f-ts">► BALÃO DE TAMPONAMENTO INTRAUTERINO (Bakri, condom): 1ª opção mecânica</text>
<text x="80" y="980" class="f-ts">► COMPRESSÃO DA AORTA ABDOMINAL: medida temporária enquanto prepara cirurgia</text>
<text x="80" y="998" class="f-ts">► EMBOLIZAÇÃO DE ARTÉRIA UTERINA: angiografia (se disponível)</text>
<text x="80" y="1016" class="f-ts">► SUTURAS DE COMPRESSÃO uterina (B-Lynch, Cho) durante cesárea/laparotomia</text>
<text x="80" y="1034" class="f-ts">► LIGADURA DE ARTÉRIA HIPOGÁSTRICA / UTERINA</text>
<text x="80" y="1054" class="f-tx">► HISTERECTOMIA — último recurso para salvar vida. NÃO atrasar em sangramento maciço.</text>

<text x="410" y="1130" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">FIGO 2022 • RCOG GTG 52 • ACOG 183 • OMS Hemorragia Pós-Parto 2017 • WOMAN trial (ác. tranexâmico)</text>
</svg>`
};

FLOWS["neutropenia-febril"] = {
titulo:"Neutropenia Febril — Manejo",
descricao:"Febre (Tax ≥38,3°C única ou ≥38°C por 1h) + neutrófilos <500 (ou <1000 com previsão de queda <500 em 48h). Emergência oncológica.",
svg:`<svg viewBox="0 0 820 1100" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.f-rect { fill:var(--bg-elev); stroke:var(--border); stroke-width:1.5; rx:6; }
.f-crit { fill:#FEE2E2; stroke:#B91C1C; stroke-width:2; rx:6; }
.f-warn { fill:#FEF3C7; stroke:#CA8A04; stroke-width:2; rx:6; }
.f-info { fill:#DBEAFE; stroke:#1D4ED8; stroke-width:2; rx:6; }
.f-ok { fill:#DCFCE7; stroke:#16A34A; stroke-width:2; rx:6; }
.f-tc { font-family:'Inter Tight',sans-serif; font-size:14px; font-weight:600; fill:var(--ink-1); }
.f-ts { font-family:'Inter Tight',sans-serif; font-size:12px; fill:var(--ink-2); }
.f-tx { font-family:'Inter Tight',sans-serif; font-size:11px; fill:var(--ink-3); }
.f-arr { stroke:var(--ink-2); stroke-width:1.8; fill:none; }
[data-theme="dark"] .f-crit { fill:#7F1D1D; }
[data-theme="dark"] .f-warn { fill:#713F12; }
[data-theme="dark"] .f-info { fill:#1E3A8A; }
[data-theme="dark"] .f-ok { fill:#14532D; }
</style>
<marker id="arr-n" viewBox="-0 -5 10 10" refX="8" refY="0" orient="auto">
<path d="M0,-5L10,0L0,5" fill="var(--ink-2)"/>
</marker>
</defs>

<rect x="180" y="20" width="460" height="80" class="f-crit"/>
<text x="410" y="48" text-anchor="middle" class="f-tc">NEUTROPENIA FEBRIL</text>
<text x="410" y="68" text-anchor="middle" class="f-ts">Tax ≥ 38,3°C única OU ≥ 38°C por ≥ 1h</text>
<text x="410" y="86" text-anchor="middle" class="f-ts">+ Neutrófilos &lt; 500/mm³ (ou &lt; 1000 com queda esperada)</text>
<line x1="410" y1="100" x2="410" y2="135" class="f-arr" marker-end="url(#arr-n)"/>

<rect x="60" y="140" width="700" height="140" class="f-warn"/>
<text x="410" y="165" text-anchor="middle" class="f-tc">AVALIAÇÃO IMEDIATA — Sítios de infecção</text>
<text x="80" y="190" class="f-ts">► EXAME FÍSICO COMPLETO: pele (cateteres, sítios punção), boca, períneo, pulmões</text>
<text x="80" y="210" class="f-ts">► HMC central + periférico (cada lúmen do CVC se em uso)    Cultura urina    RX tórax</text>
<text x="80" y="230" class="f-ts">► Lactato, função renal/hepática, eletrólitos, PCR, procalcitonina (se disponível)</text>
<text x="80" y="252" class="f-tx">► NÃO atrasar ATB para investigação. Coletar HMC e iniciar ATB em ≤1h.</text>
<line x1="410" y1="280" x2="410" y2="315" class="f-arr" marker-end="url(#arr-n)"/>

<rect x="60" y="320" width="700" height="100" class="f-info"/>
<text x="410" y="345" text-anchor="middle" class="f-tc">CLASSIFICAÇÃO DE RISCO — Escore MASCC</text>
<text x="80" y="370" class="f-ts">► MASCC ≥ 21 = BAIXO risco (mortalidade &lt;5%) — pode considerar tratamento ambulatorial VO</text>
<text x="80" y="390" class="f-ts">► MASCC &lt; 21 = ALTO risco (mortalidade ~15-20%) — internação obrigatória, ATB IV</text>
<text x="80" y="408" class="f-tx">Critérios incluem: idade, comorbidade, sintomas, neutropenia profunda/prolongada, etc.</text>
<line x1="410" y1="420" x2="410" y2="455" class="f-arr" marker-end="url(#arr-n)"/>

<rect x="60" y="460" width="700" height="180" class="f-crit"/>
<text x="410" y="485" text-anchor="middle" class="f-tc">ATB EMPÍRICO — Em ≤ 1h da febre</text>
<text x="80" y="510" class="f-ts" style="font-weight:600">MONOTERAPIA β-LACTÂMICO antipseudomonas:</text>
<text x="80" y="528" class="f-ts">► Cefepime 2g IV 8/8h     OU</text>
<text x="80" y="546" class="f-ts">► Piperacilina-tazobactam 4,5g IV 6/6h     OU</text>
<text x="80" y="564" class="f-ts">► Meropenem 1g IV 8/8h (se ESBL prévia ou choque)</text>
<text x="80" y="588" class="f-ts" style="font-weight:600">ADICIONAR VANCOMICINA se:</text>
<text x="80" y="606" class="f-ts">   Suspeita CVC infectado • Pele/partes moles • Pneumonia • Instabilidade hemodinâmica</text>
<text x="80" y="624" class="f-ts">   Mucosite grave • MRSA conhecida prévia • Cultura+ Gram positivo enquanto aguarda ID</text>
<line x1="410" y1="640" x2="410" y2="675" class="f-arr" marker-end="url(#arr-n)"/>

<rect x="60" y="680" width="700" height="155" class="f-warn"/>
<text x="410" y="705" text-anchor="middle" class="f-tc">REAVALIAÇÃO em 72-96h</text>
<text x="80" y="730" class="f-ts" style="font-weight:600">PERSISTÊNCIA DA FEBRE:</text>
<text x="80" y="748" class="f-ts">► Reavaliar exame físico, repetir culturas, investigar foco oculto</text>
<text x="80" y="766" class="f-ts">► Considerar TC tórax/abdome/seios da face</text>
<text x="80" y="788" class="f-ts" style="font-weight:600">FEBRE PERSISTENTE &gt; 4-7 DIAS — Antifúngico empírico:</text>
<text x="80" y="806" class="f-ts">► Anfotericina B lipossomal 3 mg/kg/d OU Caspofungina OU Voriconazol</text>
<text x="80" y="824" class="f-tx">► Considerar imagem: TC tórax (aspergilose), avaliar candidemia (HMC fungos, beta-D-glucan)</text>
<line x1="410" y1="835" x2="410" y2="870" class="f-arr" marker-end="url(#arr-n)"/>

<rect x="60" y="875" width="700" height="155" class="f-ok"/>
<text x="410" y="900" text-anchor="middle" class="f-tc">DURAÇÃO + DESCALONAMENTO</text>
<text x="80" y="925" class="f-ts">► Manter ATB até NEUTRÓFILOS &gt; 500 e AFEBRIL por ≥ 48h (mínimo)</text>
<text x="80" y="945" class="f-ts">► Cultura positiva: ajustar para ATB dirigido conforme antibiograma</text>
<text x="80" y="965" class="f-ts">► Foco identificado: tempo conforme tipo de infecção (PNT, ITU, etc.)</text>
<text x="80" y="987" class="f-ts">► G-CSF (filgrastim 5 mcg/kg/d SC): apenas em pacientes selecionados de alto risco</text>
<text x="80" y="1009" class="f-tx">► Profilaxia secundária com ATB/antifúngico em ciclos subsequentes — discussão oncologia</text>

<text x="410" y="1075" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">IDSA Neutropenic Fever 2010 (atualização 2018) • NCCN 2024 • MASCC Score</text>
</svg>`
};
