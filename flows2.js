/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — FLUXOGRAMAS SVG (PARTE 2)
   TCE, Queimaduras, Choque, IRpA, HPP, Neutropenia febril
   =========================================================== */

/* ============== TCE — Canadian CT Head Rule ============== */
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

/* ============== QUEIMADURAS — Parkland + critérios ABA ============== */
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

/* ============== CHOQUE INDIFERENCIADO ============== */
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

/* ============== IRpA — Insuficiência Respiratória Aguda ============== */
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

/* ============== HPP — Hemorragia Pós-Parto ============== */
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

/* ============== NEUTROPENIA FEBRIL ============== */
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
