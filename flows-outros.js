/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — flows/outros.js
   8 fluxogramas
   =========================================================== */

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

FLOWS["queimaduras-parkland"] = {
titulo:"Queimaduras — Avaliação e Reposição (Parkland)",
descricao:"Cálculo de SCQ pela Regra dos Nove, fórmula de Parkland para reposição, critérios de internação ABA e transferência para centro de queimados.",
svg:`<svg viewBox="0 0 820 1180" xmlns="http://www.w3.org/2000/svg">
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
<marker id="arr-q" viewBox="-0 -5 10 10" refX="8" refY="0" orient="auto">
<path d="M0,-5L10,0L0,5" fill="var(--ink-2)"/>
</marker>
</defs>

<rect x="200" y="20" width="420" height="60" class="f-crit"/>
<text x="410" y="48" text-anchor="middle" class="f-tc">PACIENTE QUEIMADO — Abordagem inicial</text>
<text x="410" y="68" text-anchor="middle" class="f-ts">ABCDE + parar processo de queimadura</text>
<line x1="410" y1="80" x2="410" y2="115" class="f-arr" marker-end="url(#arr-q)"/>

<rect x="60" y="120" width="700" height="140" class="f-warn"/>
<text x="410" y="145" text-anchor="middle" class="f-tc">VIA AÉREA — RISCO DE EDEMA</text>
<text x="80" y="170" class="f-ts">• Queimadura em face, pescoço, vibrissas chamuscadas → edema progressivo, IOT precoce</text>
<text x="80" y="190" class="f-ts">• Rouquidão, estridor, escarro carbonáceo, sintomas respiratórios</text>
<text x="80" y="210" class="f-ts">• Suspeitar INTOXICAÇÃO POR CO/CIANETO: HBCO &gt; 10%, acidose lática inexplicada</text>
<text x="80" y="232" class="f-tx">→ IOT antes de edema impossibilitar    → O2 100% para CO (hiperbárica se grave)</text>
<text x="80" y="252" class="f-tx">→ Hidroxicobalamina para cianeto suspeitado (incêndio em ambiente fechado)</text>
<line x1="410" y1="260" x2="410" y2="295" class="f-arr" marker-end="url(#arr-q)"/>

<rect x="60" y="300" width="700" height="170" class="f-info"/>
<text x="410" y="325" text-anchor="middle" class="f-tc">REGRA DOS NOVE — Cálculo de SCQ (Superfície Corporal Queimada)</text>
<text x="80" y="350" class="f-ts">ADULTO:</text>
<text x="80" y="370" class="f-ts">• Cabeça e pescoço: 9%     • Tronco anterior: 18%     • Tronco posterior: 18%</text>
<text x="80" y="388" class="f-ts">• Cada membro superior: 9%   • Cada membro inferior: 18%   • Genitália: 1%</text>
<text x="80" y="412" class="f-ts">CRIANÇA &lt;5 anos:</text>
<text x="80" y="430" class="f-ts">• Cabeça/pescoço: 18% (proporcionalmente maior)    • Cada MI: 14%</text>
<text x="80" y="452" class="f-tx">DICA: palma da mão do paciente (com dedos) = ~1% da SC. NÃO incluir queimaduras de 1° grau.</text>
<line x1="410" y1="470" x2="410" y2="505" class="f-arr" marker-end="url(#arr-q)"/>

<rect x="60" y="510" width="700" height="160" class="f-info"/>
<text x="410" y="535" text-anchor="middle" class="f-tc">FÓRMULA DE PARKLAND — Reposição volêmica nas primeiras 24h</text>
<text x="410" y="560" text-anchor="middle" class="f-ts" style="font-weight:600">Volume = 4 mL × Peso (kg) × %SCQ (2° e 3° graus)</text>
<text x="80" y="588" class="f-ts">• Ringer Lactato (preferencial — evita hipercloremia)</text>
<text x="80" y="610" class="f-ts">• 1ª metade do volume nas PRIMEIRAS 8 HORAS pós-queimadura</text>
<text x="80" y="628" class="f-ts">• 2ª metade nas 16 HORAS seguintes</text>
<text x="80" y="650" class="f-tx">EX: 70kg + SCQ 30% → 4×70×30 = 8.400 mL/24h (4.200 mL em 8h + 4.200 mL em 16h)</text>
<line x1="410" y1="670" x2="410" y2="705" class="f-arr" marker-end="url(#arr-q)"/>

<rect x="60" y="710" width="700" height="120" class="f-info"/>
<text x="410" y="735" text-anchor="middle" class="f-tc">METAS — Ajustar reposição conforme:</text>
<text x="80" y="760" class="f-ts">► Diurese: 0,5 mL/kg/h em adulto    1 mL/kg/h em criança (&lt;30 kg)</text>
<text x="80" y="780" class="f-ts">► PAM ≥ 65 mmHg    Lactato em queda    Mentation preservada</text>
<text x="80" y="800" class="f-ts">► Em queimadura elétrica: alvo diurese 1-2 mL/kg/h (rabdomiólise — mioglobinúria)</text>
<text x="80" y="822" class="f-tx">EVITAR: bolus excessivos, coloides nas primeiras 24h (sem benefício, mais edema)</text>
<line x1="410" y1="830" x2="410" y2="865" class="f-arr" marker-end="url(#arr-q)"/>

<rect x="60" y="870" width="700" height="195" class="f-crit"/>
<text x="410" y="895" text-anchor="middle" class="f-tc">CRITÉRIOS PARA TRANSFERÊNCIA — Centro de Queimados (ABA)</text>
<text x="80" y="922" class="f-ts">► Queimadura 2°/3° grau &gt; 10% SCQ em &lt;10 ou &gt;50 anos</text>
<text x="80" y="942" class="f-ts">► Queimadura 2°/3° grau &gt; 20% SCQ em outras idades</text>
<text x="80" y="962" class="f-ts">► Qualquer 3° grau ≥ 5% SCQ</text>
<text x="80" y="982" class="f-ts">► Queimadura em face, mãos, pés, genitália, períneo ou articulações maiores</text>
<text x="80" y="1002" class="f-ts">► Queimadura química, elétrica (incluindo raio), inalatória</text>
<text x="80" y="1022" class="f-ts">► Comorbidades significativas, trauma associado, suspeita de abuso</text>
<text x="80" y="1044" class="f-tx">→ CROSS SP: solicitar vaga em centro de queimados (Hospital Pérola Byington, etc.)</text>

<text x="410" y="1100" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">Baxter CR, Surg Clin North Am 1978 • ABA Guidelines 2024 • ATLS 10ª ed.</text>
</svg>`
};

FLOWS["choque-indif"] = {
titulo:"Choque Indiferenciado — Protocolo RUSH",
descricao:"Avaliação à beira-leito do choque com USG (protocolo RUSH: Rapid Ultrasound for Shock and Hypotension). Categoriza para tratamento adequado.",
svg:`<svg viewBox="0 0 820 1100" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.f-rect { fill:var(--bg-elev); stroke:var(--border); stroke-width:1.5; rx:6; }
.f-crit { fill:#FEE2E2; stroke:#B91C1C; stroke-width:2; rx:6; }
.f-warn { fill:#FEF3C7; stroke:#CA8A04; stroke-width:2; rx:6; }
.f-info { fill:#DBEAFE; stroke:#1D4ED8; stroke-width:2; rx:6; }
.f-purple { fill:#EDE9FE; stroke:#7C3AED; stroke-width:2; rx:6; }
.f-green { fill:#DCFCE7; stroke:#16A34A; stroke-width:2; rx:6; }
.f-tc { font-family:'Inter Tight',sans-serif; font-size:14px; font-weight:600; fill:var(--ink-1); }
.f-ts { font-family:'Inter Tight',sans-serif; font-size:12px; fill:var(--ink-2); }
.f-tx { font-family:'Inter Tight',sans-serif; font-size:11px; fill:var(--ink-3); }
.f-arr { stroke:var(--ink-2); stroke-width:1.8; fill:none; }
[data-theme="dark"] .f-crit { fill:#7F1D1D; }
[data-theme="dark"] .f-warn { fill:#713F12; }
[data-theme="dark"] .f-info { fill:#1E3A8A; }
[data-theme="dark"] .f-purple { fill:#4C1D95; }
[data-theme="dark"] .f-green { fill:#14532D; }
</style>
<marker id="arr-c" viewBox="-0 -5 10 10" refX="8" refY="0" orient="auto">
<path d="M0,-5L10,0L0,5" fill="var(--ink-2)"/>
</marker>
</defs>

<rect x="180" y="20" width="460" height="65" class="f-crit"/>
<text x="410" y="48" text-anchor="middle" class="f-tc">CHOQUE INDIFERENCIADO</text>
<text x="410" y="70" text-anchor="middle" class="f-ts">PAM &lt; 65 mmHg + sinais de hipoperfusão (lactato, oligúria, ↓consciência)</text>
<line x1="410" y1="85" x2="410" y2="120" class="f-arr" marker-end="url(#arr-c)"/>

<rect x="60" y="125" width="700" height="80" class="f-info"/>
<text x="410" y="150" text-anchor="middle" class="f-tc">PROTOCOLO RUSH — USG à beira-leito (≤3 min)</text>
<text x="410" y="172" text-anchor="middle" class="f-ts">PUMP (coração) + TANK (volume/VCI/pulmão) + PIPES (vasos)</text>
<text x="410" y="192" text-anchor="middle" class="f-tx">Categoriza em 4 tipos com manejo distinto</text>
<line x1="410" y1="205" x2="410" y2="240" class="f-arr" marker-end="url(#arr-c)"/>

<rect x="60" y="245" width="340" height="190" class="f-crit"/>
<text x="230" y="270" text-anchor="middle" class="f-tc">HIPOVOLÊMICO</text>
<text x="75" y="293" class="f-ts">USG: VCI colapsada, VE hiper-</text>
<text x="75" y="311" class="f-ts">dinâmico, líquido livre (FAST+)</text>
<text x="75" y="338" class="f-ts" style="font-weight:600">CAUSAS:</text>
<text x="75" y="356" class="f-ts">• Hemorragia (trauma, GI, AAA)</text>
<text x="75" y="374" class="f-ts">• Desidratação grave, queimadura</text>
<text x="75" y="400" class="f-ts" style="font-weight:600">CONDUTA:</text>
<text x="75" y="418" class="f-tx">Volume + sangue + controle foco</text>

<rect x="420" y="245" width="340" height="190" class="f-purple"/>
<text x="590" y="270" text-anchor="middle" class="f-tc">CARDIOGÊNICO</text>
<text x="435" y="293" class="f-ts">USG: VCI plena, VE hipocon-</text>
<text x="435" y="311" class="f-ts">trátil, derrame pleural, B-lines</text>
<text x="435" y="338" class="f-ts" style="font-weight:600">CAUSAS:</text>
<text x="435" y="356" class="f-ts">• IAM (VE ou VD)</text>
<text x="435" y="374" class="f-ts">• Insuficiência cardíaca aguda</text>
<text x="435" y="400" class="f-ts" style="font-weight:600">CONDUTA:</text>
<text x="435" y="418" class="f-tx">Dobutamina + NE, BIA, revasc</text>

<rect x="60" y="445" width="340" height="195" class="f-warn"/>
<text x="230" y="470" text-anchor="middle" class="f-tc">OBSTRUTIVO</text>
<text x="75" y="493" class="f-ts">USG variável:</text>
<text x="75" y="511" class="f-ts">• PNT: sem deslizamento pleural</text>
<text x="75" y="529" class="f-ts">• Tamponamento: derrame peri-</text>
<text x="75" y="547" class="f-ts">  cárdico + colapso AD/VD</text>
<text x="75" y="565" class="f-ts">• TEP: VD dilatado, septo D</text>
<text x="75" y="589" class="f-ts" style="font-weight:600">CONDUTA:</text>
<text x="75" y="607" class="f-tx">PNT: punção/dreno • Tampona-</text>
<text x="75" y="625" class="f-tx">mento: pericardiocentese</text>

<rect x="420" y="445" width="340" height="195" class="f-green"/>
<text x="590" y="470" text-anchor="middle" class="f-tc">DISTRIBUTIVO</text>
<text x="435" y="493" class="f-ts">USG: VCI plena/intermediária,</text>
<text x="435" y="511" class="f-ts">VE hiperdinâmico (DC ↑),</text>
<text x="435" y="529" class="f-ts">débito alto + RVS baixa</text>
<text x="435" y="555" class="f-ts" style="font-weight:600">CAUSAS:</text>
<text x="435" y="573" class="f-ts">• Sepse (mais comum)</text>
<text x="435" y="591" class="f-ts">• Anafilaxia, neurogênico</text>
<text x="435" y="615" class="f-ts" style="font-weight:600">CONDUTA:</text>
<text x="435" y="633" class="f-tx">Volume + Noradrenalina + ATB</text>

<line x1="410" y1="640" x2="410" y2="675" class="f-arr" marker-end="url(#arr-c)"/>

<rect x="60" y="680" width="700" height="160" class="f-info"/>
<text x="410" y="705" text-anchor="middle" class="f-tc">MEDIDAS COMUNS — Iniciar sem esperar diagnóstico</text>
<text x="80" y="730" class="f-ts">► 2 acessos venosos calibrosos    O₂ 100%    Monitorização contínua</text>
<text x="80" y="750" class="f-ts">► Cabeceira 30° em distributivo/cardiogênico, plana em hipovolêmico</text>
<text x="80" y="770" class="f-ts">► Cristaloide RL 500-1000 mL em 15 min → REAVALIAR (responsivo a volume?)</text>
<text x="80" y="790" class="f-ts">► PA invasiva precoce, sonda vesical (débito), lactato seriado</text>
<text x="80" y="810" class="f-ts">► NORADRENALINA se choque persistente após volume — periférica até 6h se central indisponível</text>
<text x="80" y="830" class="f-tx">► Buscar foco/causa em paralelo (HMC, ECG, TC, EDA, etc.)</text>

<rect x="60" y="855" width="700" height="160" class="f-rect"/>
<text x="410" y="880" text-anchor="middle" class="f-tc">RESPONSIVIDADE A VOLUME — Como avaliar</text>
<text x="80" y="905" class="f-ts">► USG-VCI: respiração espontânea ΔVCI &gt; 50% / VM ΔVCI &gt; 12-18% = responsivo</text>
<text x="80" y="925" class="f-ts">► Elevação passiva de pernas (PLR): ↑DC ≥ 10% em 1 min = responsivo</text>
<text x="80" y="945" class="f-ts">► ΔPP (variação pressão pulso) &gt; 13% em VM controlada = responsivo</text>
<text x="80" y="965" class="f-ts">► Eco: VTI da via de saída do VE com volume teste</text>
<text x="80" y="990" class="f-tx">PARAR VOLUME quando: VCI plena (&gt;2 cm + não colaba), edema pulmonar, ΔPP baixo</text>

<text x="410" y="1075" text-anchor="middle" class="f-ts" style="font-size:10px;fill:var(--ink-3)">Perera P et al. RUSH protocol. Emerg Med Clin North Am 2010 • Surviving Sepsis 2021</text>
</svg>`
};
