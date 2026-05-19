/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — BIBLIOTECA DE FIGURAS
   SVGs próprios + metadata de atribuição
   FIGURAS é declarado em init.js
   =========================================================== */

/* ============== HELPERS ============== */

// CSS embutido nos SVGs — usa variáveis CSS do tema do site
const SVG_STYLE = `
  .fig-ecg-line { stroke: currentColor; stroke-width: 1.5; fill: none; }
  .fig-ecg-line-st { stroke: #DC2626; stroke-width: 2.5; fill: none; }
  .fig-ecg-base { stroke: currentColor; stroke-width: 0.5; fill: none; opacity: 0.3; }
  .fig-ecg-label { font: 600 11px ui-sans-serif, system-ui; fill: currentColor; }
  .fig-ecg-derivacao { font: bold 12px ui-sans-serif; fill: currentColor; }
  .fig-ecg-supra { font: bold 11px ui-sans-serif; fill: #DC2626; }
  .fig-heart-fill { fill: #B91C1C; opacity: 0.15; }
  .fig-heart-stroke { stroke: #B91C1C; stroke-width: 2; fill: none; }
  .fig-text { font: 500 13px ui-sans-serif, system-ui; fill: currentColor; }
  .fig-text-bold { font: 700 13px ui-sans-serif, system-ui; fill: currentColor; }
  .fig-text-sm { font: 500 11px ui-sans-serif, system-ui; fill: currentColor; }
  .fig-arrow { stroke: currentColor; stroke-width: 1.5; fill: none; }
  .fig-box { stroke: currentColor; stroke-width: 1; fill: none; opacity: 0.6; }
  .fig-highlight { fill: #FCD34D; opacity: 0.35; }
  .fig-danger { fill: #FCA5A5; opacity: 0.3; }
  .fig-territory-da { fill: #DC2626; opacity: 0.18; }
  .fig-territory-cx { fill: #2563EB; opacity: 0.18; }
  .fig-territory-cd { fill: #16A34A; opacity: 0.18; }
`;

// Gerador padrão de traçado ECG simples (P-Q-R-S-T)
function ecgPath(x, y, opts={}) {
  const w = opts.w || 100;        // largura total do batimento
  const supra = opts.supra || 0;  // mm de supra ST (0 = normal)
  const infra = opts.infra || 0;  // mm de infra ST
  const noP = opts.noP || false;  // sem onda P (FA)
  const wideQRS = opts.wideQRS || false; // QRS alargado
  const baseY = y;
  
  // Pontos do batimento
  const x0 = x;
  const xP = x + w * 0.08;
  const xPR = x + w * 0.18;
  const xQ = x + w * 0.22;
  const xR = x + w * 0.26;
  const xS = x + w * 0.30;
  const xJ = x + w * (wideQRS ? 0.40 : 0.34);
  const xT = x + w * 0.55;
  const xEnd = x + w * 0.75;
  const xNext = x + w;
  
  const yBase = baseY;
  const yP = noP ? baseY : baseY - 3;
  const yR = baseY - 18;
  const yQ = baseY + 2;
  const yS = baseY + 5;
  const yJ = baseY - supra + infra;
  const yT = baseY - 6 - supra * 0.3;
  
  let pathP = "";
  if (noP) {
    // FA: linha levemente irregular sem P
    pathP = `L ${xP-3} ${baseY+0.5} L ${xP-1} ${baseY-0.5} L ${xP+1} ${baseY+0.3} L ${xPR} ${baseY}`;
  } else {
    pathP = `L ${xP-4} ${baseY} Q ${xP} ${yP} ${xP+4} ${baseY} L ${xPR} ${baseY}`;
  }
  
  return `M ${x0} ${baseY} ${pathP} L ${xQ} ${yQ} L ${xR} ${yR} L ${xS} ${yS} L ${xJ} ${yJ} L ${xT-6} ${yJ} Q ${xT} ${yT} ${xT+6} ${yJ} L ${xEnd} ${baseY} L ${xNext} ${baseY}`;
}

/* ============== FIGURAS CARDIOVASCULARES ============== */

FIGURAS["fig-ecg-onda-normal"] = {
  titulo: "Onda ECG Normal — Componentes",
  legenda: "Onda P (despolarização atrial), complexo QRS (despolarização ventricular), onda T (repolarização ventricular). Intervalos PR (120-200 ms), QRS (<120 ms), QT corrigido (<460 ms ♀ / <450 ms ♂).",
  autor: "Vovôminic (próprio)",
  licenca: "CC BY-SA 4.0",
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 250" role="img" aria-label="Onda ECG Normal">
    <style>${SVG_STYLE}</style>
    <!-- Grade leve -->
    <g class="fig-ecg-base">
      <line x1="50" y1="125" x2="750" y2="125"/>
    </g>
    <!-- Onda PQRST grande -->
    <g transform="translate(50,125)">
      <!-- P -->
      <path class="fig-ecg-line" d="M 0 0 L 60 0 Q 90 -18 120 0 L 180 0 L 200 8 L 220 -80 L 240 25 L 260 0 L 320 0 Q 380 -32 440 0 L 600 0"/>
      <!-- Marcações verticais -->
      <line class="fig-ecg-base" x1="60" y1="-100" x2="60" y2="50" stroke-dasharray="3,3"/>
      <line class="fig-ecg-base" x1="120" y1="-100" x2="120" y2="50" stroke-dasharray="3,3"/>
      <line class="fig-ecg-base" x1="180" y1="-100" x2="180" y2="50" stroke-dasharray="3,3"/>
      <line class="fig-ecg-base" x1="260" y1="-100" x2="260" y2="50" stroke-dasharray="3,3"/>
      <line class="fig-ecg-base" x1="440" y1="-100" x2="440" y2="50" stroke-dasharray="3,3"/>
    </g>
    <!-- Etiquetas das ondas -->
    <text class="fig-text-bold" x="135" y="90" text-anchor="middle">P</text>
    <text class="fig-text-bold" x="270" y="35" text-anchor="middle">QRS</text>
    <text class="fig-text-bold" x="510" y="80" text-anchor="middle">T</text>
    <!-- Etiquetas individuais Q, R, S -->
    <text class="fig-text-sm" x="247" y="160" text-anchor="middle" fill="#DC2626">Q</text>
    <text class="fig-text-sm" x="271" y="32" text-anchor="middle" fill="#DC2626">R</text>
    <text class="fig-text-sm" x="294" y="165" text-anchor="middle" fill="#DC2626">S</text>
    <!-- Intervalos com colchetes -->
    <g class="fig-arrow">
      <line x1="110" y1="200" x2="240" y2="200"/>
      <line x1="110" y1="195" x2="110" y2="205"/>
      <line x1="240" y1="195" x2="240" y2="205"/>
    </g>
    <text class="fig-text-sm" x="175" y="218" text-anchor="middle">PR (120-200 ms)</text>
    <g class="fig-arrow">
      <line x1="240" y1="225" x2="320" y2="225"/>
      <line x1="240" y1="220" x2="240" y2="230"/>
      <line x1="320" y1="220" x2="320" y2="230"/>
    </g>
    <text class="fig-text-sm" x="280" y="243" text-anchor="middle">QRS (&lt;120)</text>
    <g class="fig-arrow">
      <line x1="240" y1="180" x2="500" y2="180"/>
      <line x1="240" y1="175" x2="240" y2="185"/>
      <line x1="500" y1="175" x2="500" y2="185"/>
    </g>
    <text class="fig-text-sm" x="370" y="173" text-anchor="middle">QT (corrigir por FC)</text>
  </svg>`
};

FIGURAS["fig-coracao-derivacoes"] = {
  titulo: "Anatomia Cardíaca e Derivações do ECG",
  legenda: "Localização das 12 derivações em relação às paredes do miocárdio. Anterior: V1-V4 (descendente anterior). Lateral: DI, aVL, V5-V6 (circunflexa). Inferior: DII, DIII, aVF (coronária direita). V1-V2 também olha septo.",
  autor: "Vovôminic (próprio)",
  licenca: "CC BY-SA 4.0",
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" role="img" aria-label="Anatomia Cardíaca e Derivações">
    <style>${SVG_STYLE}</style>
    <!-- Coração simplificado vista frontal -->
    <g transform="translate(280,80)">
      <!-- Contorno cardíaco -->
      <path class="fig-heart-fill" d="M 50 30 Q 20 10 0 50 Q -10 100 30 160 L 100 220 L 170 160 Q 210 100 200 50 Q 180 10 150 30 Q 130 10 100 30 Q 70 10 50 30 Z"/>
      <path class="fig-heart-stroke" d="M 50 30 Q 20 10 0 50 Q -10 100 30 160 L 100 220 L 170 160 Q 210 100 200 50 Q 180 10 150 30 Q 130 10 100 30 Q 70 10 50 30 Z"/>
      <!-- Câmaras (linhas internas) -->
      <line class="fig-heart-stroke" x1="100" y1="30" x2="100" y2="220" stroke-dasharray="4,4"/>
      <line class="fig-heart-stroke" x1="0" y1="100" x2="200" y2="100"/>
      <!-- Etiquetas câmaras -->
      <text class="fig-text-sm" x="50" y="75" text-anchor="middle">AD</text>
      <text class="fig-text-sm" x="150" y="75" text-anchor="middle">AE</text>
      <text class="fig-text-sm" x="50" y="160" text-anchor="middle">VD</text>
      <text class="fig-text-sm" x="150" y="160" text-anchor="middle">VE</text>
    </g>
    <!-- Setas com derivações -->
    <!-- Anterior (V1-V4) -->
    <g class="fig-arrow">
      <line x1="120" y1="180" x2="280" y2="200" marker-end="url(#arr)"/>
    </g>
    <text class="fig-text-bold" x="110" y="170" text-anchor="middle" fill="#DC2626">V1-V4</text>
    <text class="fig-text-sm" x="110" y="188" text-anchor="middle">Anterior</text>
    <text class="fig-text-sm" x="110" y="204" text-anchor="middle">(DA)</text>
    
    <!-- Lateral alta (DI, aVL) -->
    <g class="fig-arrow">
      <line x1="690" y1="120" x2="490" y2="170" marker-end="url(#arr)"/>
    </g>
    <text class="fig-text-bold" x="710" y="110" text-anchor="end" fill="#2563EB">DI, aVL</text>
    <text class="fig-text-sm" x="710" y="128" text-anchor="end">Lateral alta</text>
    
    <!-- Lateral baixa (V5, V6) -->
    <g class="fig-arrow">
      <line x1="690" y1="250" x2="490" y2="240" marker-end="url(#arr)"/>
    </g>
    <text class="fig-text-bold" x="710" y="245" text-anchor="end" fill="#2563EB">V5, V6</text>
    <text class="fig-text-sm" x="710" y="263" text-anchor="end">Lateral baixa (Cx)</text>
    
    <!-- Inferior (DII, DIII, aVF) -->
    <g class="fig-arrow">
      <line x1="400" y1="450" x2="400" y2="330" marker-end="url(#arr)"/>
    </g>
    <text class="fig-text-bold" x="400" y="475" text-anchor="middle" fill="#16A34A">DII, DIII, aVF</text>
    <text class="fig-text-sm" x="400" y="492" text-anchor="middle">Inferior (CD na maioria)</text>
    
    <!-- Septo (V1, V2) -->
    <g class="fig-arrow">
      <line x1="110" y1="290" x2="350" y2="220" marker-end="url(#arr)"/>
    </g>
    <text class="fig-text-bold" x="100" y="305" text-anchor="middle" fill="#DC2626">V1, V2</text>
    <text class="fig-text-sm" x="100" y="322" text-anchor="middle">+ Septo</text>
    
    <!-- Posterior (espelho V1-V3) -->
    <text class="fig-text-sm" x="700" y="380" text-anchor="end">Posterior:</text>
    <text class="fig-text-bold" x="700" y="397" text-anchor="end">V7-V9 ou imagem em espelho em V1-V3</text>
    
    <defs>
      <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
      </marker>
    </defs>
  </svg>`
};

FIGURAS["fig-stemi-anterior"] = {
  titulo: "STEMI Anterior — ECG Esquemático",
  legenda: "Supradesnivelamento de ST em V1, V2, V3, V4 (parede anterior — território da artéria descendente anterior). Pode haver reciprocidade em DII, DIII, aVF. Critério STEMI: supra ≥1 mm em 2 derivações contíguas (≥2 mm em V2-V3 ♂; ≥1,5 mm V2-V3 ♀).",
  autor: "Vovôminic (próprio)",
  licenca: "CC BY-SA 4.0",
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" role="img" aria-label="ECG STEMI Anterior">
    <style>${SVG_STYLE}</style>
    <!-- Grid leve 12 derivações em layout padrão 4x3 -->
    <!-- Linha 1: DI, aVR, V1, V4 -->
    <!-- Linha 2: DII, aVL, V2, V5 -->
    <!-- Linha 3: DIII, aVF, V3, V6 -->
    
    <!-- Caixa DI (normal) -->
    <text class="fig-ecg-derivacao" x="10" y="50">DI</text>
    <path class="fig-ecg-line" d="${ecgPath(40, 60, {w:160})}"/>
    
    <!-- aVR (negativo invertido) -->
    <text class="fig-ecg-derivacao" x="220" y="50">aVR</text>
    <path class="fig-ecg-line" d="M 250 60 L 290 60 Q 295 65 300 60 L 320 60 L 325 55 L 332 80 L 340 50 L 355 60 L 400 60"/>
    
    <!-- V1 (STEMI) -->
    <text class="fig-ecg-derivacao" x="420" y="50">V1</text>
    <text class="fig-ecg-supra" x="445" y="50">⚠ SUPRA</text>
    <path class="fig-ecg-line-st" d="${ecgPath(450, 60, {w:160, supra:6})}"/>
    
    <!-- V4 (STEMI) -->
    <text class="fig-ecg-derivacao" x="620" y="50">V4</text>
    <text class="fig-ecg-supra" x="650" y="50">⚠ SUPRA</text>
    <path class="fig-ecg-line-st" d="${ecgPath(650, 60, {w:140, supra:8})}"/>
    
    <!-- Linha 2 -->
    <text class="fig-ecg-derivacao" x="10" y="180">DII</text>
    <path class="fig-ecg-line" d="${ecgPath(40, 190, {w:160, infra:1})}"/>
    
    <text class="fig-ecg-derivacao" x="220" y="180">aVL</text>
    <path class="fig-ecg-line" d="${ecgPath(250, 190, {w:160})}"/>
    
    <text class="fig-ecg-derivacao" x="420" y="180">V2</text>
    <text class="fig-ecg-supra" x="445" y="180">⚠ SUPRA</text>
    <path class="fig-ecg-line-st" d="${ecgPath(450, 190, {w:160, supra:10})}"/>
    
    <text class="fig-ecg-derivacao" x="620" y="180">V5</text>
    <path class="fig-ecg-line" d="${ecgPath(650, 190, {w:140})}"/>
    
    <!-- Linha 3 -->
    <text class="fig-ecg-derivacao" x="10" y="310">DIII</text>
    <path class="fig-ecg-line" d="${ecgPath(40, 320, {w:160, infra:1})}"/>
    
    <text class="fig-ecg-derivacao" x="220" y="310">aVF</text>
    <path class="fig-ecg-line" d="${ecgPath(250, 320, {w:160, infra:1})}"/>
    
    <text class="fig-ecg-derivacao" x="420" y="310">V3</text>
    <text class="fig-ecg-supra" x="445" y="310">⚠ SUPRA</text>
    <path class="fig-ecg-line-st" d="${ecgPath(450, 320, {w:160, supra:8})}"/>
    
    <text class="fig-ecg-derivacao" x="620" y="310">V6</text>
    <path class="fig-ecg-line" d="${ecgPath(650, 320, {w:140})}"/>
    
    <!-- Legenda inferior -->
    <rect x="10" y="380" width="780" height="90" class="fig-box" rx="6"/>
    <text class="fig-text-bold" x="20" y="405">STEMI ANTERIOR — V1-V4</text>
    <text class="fig-text" x="20" y="425">• Território: artéria DESCENDENTE ANTERIOR (DA)</text>
    <text class="fig-text" x="20" y="445">• Reciprocidade comum: pode haver INFRA em DII, DIII, aVF</text>
    <text class="fig-text-sm" x="20" y="462">⚠ Critério: supra ≥1 mm em 2 derivações contíguas (≥2 mm V2-V3 em homem; ≥1,5 mm V2-V3 em mulher)</text>
  </svg>`
};

FIGURAS["fig-stemi-inferior"] = {
  titulo: "STEMI Inferior — ECG Esquemático",
  legenda: "Supradesnivelamento de ST em DII, DIII, aVF (parede inferior — território da coronária direita na maioria). ⚠ Sempre solicitar derivações V3R-V4R (suspeita VD) e V7-V9 (parede posterior associada em ~40%). Reciprocidade em DI, aVL.",
  autor: "Vovôminic (próprio)",
  licenca: "CC BY-SA 4.0",
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" role="img" aria-label="ECG STEMI Inferior">
    <style>${SVG_STYLE}</style>
    <!-- Linha 1 -->
    <text class="fig-ecg-derivacao" x="10" y="50">DI</text>
    <text class="fig-ecg-derivacao" x="220" y="50">aVR</text>
    <text class="fig-ecg-derivacao" x="420" y="50">V1</text>
    <text class="fig-ecg-derivacao" x="620" y="50">V4</text>
    
    <path class="fig-ecg-line" d="${ecgPath(40, 60, {w:160, infra:2})}"/>
    <path class="fig-ecg-line" d="M 250 60 L 290 60 Q 295 65 300 60 L 320 60 L 325 55 L 332 80 L 340 50 L 355 60 L 400 60"/>
    <path class="fig-ecg-line" d="${ecgPath(450, 60, {w:160})}"/>
    <path class="fig-ecg-line" d="${ecgPath(650, 60, {w:140})}"/>
    
    <!-- Linha 2 -->
    <text class="fig-ecg-derivacao" x="10" y="180">DII</text>
    <text class="fig-ecg-supra" x="30" y="180">⚠ SUPRA</text>
    <text class="fig-ecg-derivacao" x="220" y="180">aVL</text>
    <text class="fig-ecg-derivacao" x="420" y="180">V2</text>
    <text class="fig-ecg-derivacao" x="620" y="180">V5</text>
    
    <path class="fig-ecg-line-st" d="${ecgPath(40, 190, {w:160, supra:6})}"/>
    <path class="fig-ecg-line" d="${ecgPath(250, 190, {w:160, infra:2})}"/>
    <path class="fig-ecg-line" d="${ecgPath(450, 190, {w:160})}"/>
    <path class="fig-ecg-line" d="${ecgPath(650, 190, {w:140})}"/>
    
    <!-- Linha 3 -->
    <text class="fig-ecg-derivacao" x="10" y="310">DIII</text>
    <text class="fig-ecg-supra" x="30" y="310">⚠ SUPRA</text>
    <text class="fig-ecg-derivacao" x="220" y="310">aVF</text>
    <text class="fig-ecg-supra" x="245" y="310">⚠ SUPRA</text>
    <text class="fig-ecg-derivacao" x="420" y="310">V3</text>
    <text class="fig-ecg-derivacao" x="620" y="310">V6</text>
    
    <path class="fig-ecg-line-st" d="${ecgPath(40, 320, {w:160, supra:7})}"/>
    <path class="fig-ecg-line-st" d="${ecgPath(250, 320, {w:160, supra:6})}"/>
    <path class="fig-ecg-line" d="${ecgPath(450, 320, {w:160})}"/>
    <path class="fig-ecg-line" d="${ecgPath(650, 320, {w:140})}"/>
    
    <!-- Legenda inferior -->
    <rect x="10" y="380" width="780" height="90" class="fig-box" rx="6"/>
    <text class="fig-text-bold" x="20" y="405">STEMI INFERIOR — DII, DIII, aVF</text>
    <text class="fig-text" x="20" y="425">• Território: CORONÁRIA DIREITA (CD) na maioria; pode ser Cx</text>
    <text class="fig-text" x="20" y="445">• ⚠ SOLICITAR V3R-V4R (suspeita VD) e V7-V9 (posterior em 40%)</text>
    <text class="fig-text-sm" x="20" y="462">⚠ Reciprocidade em DI, aVL (infra). Cuidado com bradicardia/BAV em IAM inferior (vagal).</text>
  </svg>`
};

FIGURAS["fig-fa"] = {
  titulo: "Fibrilação Atrial — ECG",
  legenda: "Ausência de ondas P. Atividade atrial caótica (ondas f finas ou grossas). Resposta ventricular IRREGULARMENTE IRREGULAR. Frequência variável (50-180 bpm). DD com flutter atrial (P 'em dente de serra'), TSV (RR regular).",
  autor: "Vovôminic (próprio)",
  licenca: "CC BY-SA 4.0",
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 320" role="img" aria-label="ECG Fibrilação Atrial">
    <style>${SVG_STYLE}</style>
    <text class="fig-ecg-derivacao" x="10" y="50">DII</text>
    <!-- Linha de base com ondas f irregulares (sem onda P clara) -->
    <path class="fig-ecg-line" d="M 50 110 
      Q 60 108 70 111 Q 80 113 90 109 Q 100 107 110 112 
      L 125 110 L 130 105 L 137 75 L 144 130 L 150 110 L 165 110
      Q 175 108 185 112 Q 195 106 205 111 Q 215 108 220 110
      L 235 110 L 240 105 L 247 80 L 253 128 L 260 110 L 280 110
      Q 290 113 300 108 Q 310 110 320 112 Q 330 107 340 110
      L 358 110 L 363 104 L 370 75 L 377 132 L 384 110 L 410 110
      Q 420 108 430 111 Q 440 113 450 109 
      L 470 110 L 475 105 L 482 78 L 489 128 L 495 110 L 510 110
      Q 520 109 530 111 Q 540 113 550 108
      L 570 110 L 575 104 L 582 73 L 589 131 L 596 110 L 630 110
      Q 640 108 650 111 Q 660 113 670 109
      L 690 110 L 695 105 L 702 75 L 709 130 L 715 110 L 740 110"/>
    
    <!-- Marcações dos RR mostrando irregularidade -->
    <line x1="137" y1="180" x2="240" y2="180" class="fig-arrow"/>
    <line x1="137" y1="175" x2="137" y2="185" class="fig-arrow"/>
    <line x1="240" y1="175" x2="240" y2="185" class="fig-arrow"/>
    <text class="fig-text-sm" x="188" y="198" text-anchor="middle">RR1</text>
    
    <line x1="240" y1="180" x2="370" y2="180" class="fig-arrow"/>
    <line x1="370" y1="175" x2="370" y2="185" class="fig-arrow"/>
    <text class="fig-text-sm" x="305" y="198" text-anchor="middle">RR2 (≠ RR1)</text>
    
    <line x1="370" y1="180" x2="482" y2="180" class="fig-arrow"/>
    <line x1="482" y1="175" x2="482" y2="185" class="fig-arrow"/>
    <text class="fig-text-sm" x="426" y="198" text-anchor="middle">RR3 (≠)</text>
    
    <line x1="482" y1="180" x2="582" y2="180" class="fig-arrow"/>
    <line x1="582" y1="175" x2="582" y2="185" class="fig-arrow"/>
    <text class="fig-text-sm" x="532" y="198" text-anchor="middle">RR4 (≠)</text>
    
    <line x1="582" y1="180" x2="702" y2="180" class="fig-arrow"/>
    <line x1="702" y1="175" x2="702" y2="185" class="fig-arrow"/>
    <text class="fig-text-sm" x="642" y="198" text-anchor="middle">RR5 (≠)</text>
    
    <!-- Anotação ondas f -->
    <text class="fig-text-sm" x="80" y="100" fill="#DC2626" text-anchor="middle">ondas f (sem P)</text>
    <line x1="60" y1="103" x2="100" y2="107" stroke="#DC2626" stroke-width="1.5" stroke-dasharray="3,3"/>
    
    <!-- Legenda -->
    <rect x="10" y="220" width="780" height="90" class="fig-box" rx="6"/>
    <text class="fig-text-bold" x="20" y="245">FIBRILAÇÃO ATRIAL</text>
    <text class="fig-text" x="20" y="265">• Ausência de onda P (ondas f desorganizadas no lugar)</text>
    <text class="fig-text" x="20" y="285">• RR IRREGULARMENTE IRREGULAR — distância entre R varia</text>
    <text class="fig-text-sm" x="20" y="302">⚠ Avaliar CHA₂DS₂-VASc (anticoagulação) e controle de FC (β-bloq, BCC, digoxina).</text>
  </svg>`
};

FIGURAS["fig-bav-completo"] = {
  titulo: "Bloqueio AV Completo (3º grau)",
  legenda: "Dissociação atrioventricular total. Ondas P regulares, QRS regulares mas INDEPENDENTES. FC ventricular geralmente <50 bpm (escape juncional 40-60 / ventricular 20-40). ⚠ Indicação de marcapasso.",
  autor: "Vovôminic (próprio)",
  licenca: "CC BY-SA 4.0",
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 320" role="img" aria-label="ECG BAV Completo">
    <style>${SVG_STYLE}</style>
    <text class="fig-ecg-derivacao" x="10" y="50">DII</text>
    
    <!-- Linha base com P regulares (rápidas) e QRS regulares mas dessincronizados (lentos, alargados) -->
    <path class="fig-ecg-line" d="M 50 100
      Q 75 80 90 100 L 110 100
      L 120 100 L 130 75 L 145 130 L 150 100 L 180 100
      Q 200 80 215 100 L 250 100
      Q 270 80 285 100 L 310 100
      L 325 100 L 335 70 L 355 135 L 360 100 L 390 100
      Q 410 80 425 100 L 460 100
      Q 480 80 495 100 L 535 100
      L 545 100 L 555 75 L 575 130 L 580 100 L 605 100
      Q 625 80 640 100 L 680 100
      Q 700 80 715 100 L 760 100"/>
    
    <!-- Marcadores de P (azul) - regulares -->
    <text class="fig-text-sm" x="78" y="65" fill="#2563EB" text-anchor="middle">P</text>
    <text class="fig-text-sm" x="200" y="65" fill="#2563EB" text-anchor="middle">P</text>
    <text class="fig-text-sm" x="265" y="65" fill="#2563EB" text-anchor="middle">P</text>
    <text class="fig-text-sm" x="410" y="65" fill="#2563EB" text-anchor="middle">P</text>
    <text class="fig-text-sm" x="478" y="65" fill="#2563EB" text-anchor="middle">P</text>
    <text class="fig-text-sm" x="623" y="65" fill="#2563EB" text-anchor="middle">P</text>
    <text class="fig-text-sm" x="698" y="65" fill="#2563EB" text-anchor="middle">P</text>
    
    <!-- Marcadores de QRS (vermelho) - regulares mas independente -->
    <text class="fig-text-sm" x="138" y="165" fill="#DC2626" text-anchor="middle">QRS</text>
    <text class="fig-text-sm" x="338" y="165" fill="#DC2626" text-anchor="middle">QRS</text>
    <text class="fig-text-sm" x="555" y="165" fill="#DC2626" text-anchor="middle">QRS</text>
    
    <!-- Linhas pontilhadas mostrando intervalos -->
    <line x1="78" y1="55" x2="200" y2="55" stroke="#2563EB" stroke-width="1" stroke-dasharray="3,3"/>
    <line x1="200" y1="55" x2="265" y2="55" stroke="#2563EB" stroke-width="1" stroke-dasharray="3,3"/>
    <line x1="265" y1="55" x2="410" y2="55" stroke="#2563EB" stroke-width="1" stroke-dasharray="3,3"/>
    
    <text class="fig-text-sm" x="143" y="50" fill="#2563EB" text-anchor="middle">PP regular</text>
    
    <line x1="138" y1="180" x2="338" y2="180" stroke="#DC2626" stroke-width="1" stroke-dasharray="3,3"/>
    <line x1="338" y1="180" x2="555" y2="180" stroke="#DC2626" stroke-width="1" stroke-dasharray="3,3"/>
    <text class="fig-text-sm" x="240" y="195" fill="#DC2626" text-anchor="middle">RR regular (mas mais LENTO que PP)</text>
    
    <!-- Legenda -->
    <rect x="10" y="220" width="780" height="90" class="fig-box" rx="6"/>
    <text class="fig-text-bold" x="20" y="245">BAV COMPLETO (3º GRAU)</text>
    <text class="fig-text" x="20" y="265">• DISSOCIAÇÃO atrial e ventricular — P e QRS independentes</text>
    <text class="fig-text" x="20" y="285">• PP regular (FC atrial) e RR regular (FC vent), mas FCv &lt; FCa</text>
    <text class="fig-text-sm" x="20" y="302">⚠ Sintomático/instável → atropina IV (raramente eficaz), marcapasso TRANSCUTÂNEO. Marcapasso DEFINITIVO indicado.</text>
  </svg>`
};

FIGURAS["fig-tsv"] = {
  titulo: "Taquicardia Supraventricular (TSV) — ECG",
  legenda: "Taquicardia regular com QRS estreito (<120 ms), FC 150-220 bpm. Onda P ausente, retrógrada (negativa em DII, DIII, aVF), ou imediatamente após QRS. Etiologia: TRN (mais comum), TRAV. Manobra vagal → adenosina IV → cardioversão se instável.",
  autor: "Vovôminic (próprio)",
  licenca: "CC BY-SA 4.0",
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 320" role="img" aria-label="ECG TSV">
    <style>${SVG_STYLE}</style>
    <text class="fig-ecg-derivacao" x="10" y="50">DII</text>
    
    <!-- TSV: QRS estreitos regulares rápidos, sem P visível -->
    <path class="fig-ecg-line" d="M 50 110 
      L 80 110 L 85 105 L 92 75 L 99 132 L 105 110 L 140 110
      L 145 105 L 152 75 L 159 132 L 165 110 L 200 110
      L 205 105 L 212 75 L 219 132 L 225 110 L 260 110
      L 265 105 L 272 75 L 279 132 L 285 110 L 320 110
      L 325 105 L 332 75 L 339 132 L 345 110 L 380 110
      L 385 105 L 392 75 L 399 132 L 405 110 L 440 110
      L 445 105 L 452 75 L 459 132 L 465 110 L 500 110
      L 505 105 L 512 75 L 519 132 L 525 110 L 560 110
      L 565 105 L 572 75 L 579 132 L 585 110 L 620 110
      L 625 105 L 632 75 L 639 132 L 645 110 L 680 110
      L 685 105 L 692 75 L 699 132 L 705 110 L 740 110"/>
    
    <!-- Indicação ausência P -->
    <text class="fig-text-sm" x="120" y="155" fill="#DC2626" text-anchor="middle">sem P visível</text>
    <line x1="120" y1="142" x2="140" y2="125" stroke="#DC2626" stroke-width="1.5"/>
    
    <!-- RR regular -->
    <line x1="92" y1="180" x2="152" y2="180" class="fig-arrow"/>
    <line x1="92" y1="175" x2="92" y2="185" class="fig-arrow"/>
    <line x1="152" y1="175" x2="152" y2="185" class="fig-arrow"/>
    <text class="fig-text-sm" x="122" y="198" text-anchor="middle">RR</text>
    <line x1="152" y1="180" x2="212" y2="180" class="fig-arrow"/>
    <line x1="212" y1="175" x2="212" y2="185" class="fig-arrow"/>
    <text class="fig-text-sm" x="182" y="198" text-anchor="middle">RR (=)</text>
    <line x1="212" y1="180" x2="272" y2="180" class="fig-arrow"/>
    <line x1="272" y1="175" x2="272" y2="185" class="fig-arrow"/>
    <text class="fig-text-sm" x="242" y="198" text-anchor="middle">RR (=)</text>
    
    <!-- Legenda -->
    <rect x="10" y="220" width="780" height="90" class="fig-box" rx="6"/>
    <text class="fig-text-bold" x="20" y="245">TAQUICARDIA SUPRAVENTRICULAR (TSV)</text>
    <text class="fig-text" x="20" y="265">• QRS ESTREITO (&lt;120 ms) + RR REGULAR + FC 150-220 bpm</text>
    <text class="fig-text" x="20" y="285">• P ausente, retrógrada, ou pseudo-R em V1</text>
    <text class="fig-text-sm" x="20" y="302">⚠ Estável: vagal → adenosina 6 mg → 12 mg → 12 mg IV. Instável: cardioversão sincronizada 50-100 J.</text>
  </svg>`
};

FIGURAS["fig-killip"] = {
  titulo: "Classificação de Killip — IC aguda em IAM",
  legenda: "Estratificação clínica de IC aguda em IAM, com prognóstico de mortalidade hospitalar. Killip I (sem IC) ≈ 6% mortalidade; Killip IV (choque) ≈ 80% mortalidade.",
  autor: "Vovôminic (próprio)",
  licenca: "CC BY-SA 4.0",
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" role="img" aria-label="Killip">
    <style>${SVG_STYLE}</style>
    <!-- Tabela visual -->
    <!-- Killip I -->
    <rect x="20" y="20" width="180" height="350" class="fig-box" rx="8" fill="#16A34A" fill-opacity="0.1"/>
    <text class="fig-text-bold" x="110" y="50" text-anchor="middle" font-size="16">Killip I</text>
    <text class="fig-text-sm" x="110" y="72" text-anchor="middle" fill="#16A34A">SEM IC</text>
    <line x1="40" y1="90" x2="180" y2="90" class="fig-box"/>
    <text class="fig-text-sm" x="110" y="115" text-anchor="middle">• Sem B3</text>
    <text class="fig-text-sm" x="110" y="135" text-anchor="middle">• Sem estertores</text>
    <text class="fig-text-sm" x="110" y="155" text-anchor="middle">• PA estável</text>
    <line x1="40" y1="270" x2="180" y2="270" class="fig-box"/>
    <text class="fig-text-bold" x="110" y="305" text-anchor="middle" font-size="18" fill="#16A34A">~ 6%</text>
    <text class="fig-text-sm" x="110" y="325" text-anchor="middle">mortalidade</text>
    <text class="fig-text-sm" x="110" y="345" text-anchor="middle">hospitalar</text>
    
    <!-- Killip II -->
    <rect x="220" y="20" width="180" height="350" class="fig-box" rx="8" fill="#FCD34D" fill-opacity="0.15"/>
    <text class="fig-text-bold" x="310" y="50" text-anchor="middle" font-size="16">Killip II</text>
    <text class="fig-text-sm" x="310" y="72" text-anchor="middle" fill="#D97706">IC LEVE</text>
    <line x1="240" y1="90" x2="380" y2="90" class="fig-box"/>
    <text class="fig-text-sm" x="310" y="115" text-anchor="middle">• B3 presente</text>
    <text class="fig-text-sm" x="310" y="135" text-anchor="middle">• Estertores nas</text>
    <text class="fig-text-sm" x="310" y="155" text-anchor="middle">bases (&lt;50%)</text>
    <text class="fig-text-sm" x="310" y="175" text-anchor="middle">• Congestão venosa</text>
    <line x1="240" y1="270" x2="380" y2="270" class="fig-box"/>
    <text class="fig-text-bold" x="310" y="305" text-anchor="middle" font-size="18" fill="#D97706">~ 17%</text>
    <text class="fig-text-sm" x="310" y="325" text-anchor="middle">mortalidade</text>
    
    <!-- Killip III -->
    <rect x="420" y="20" width="180" height="350" class="fig-box" rx="8" fill="#F97316" fill-opacity="0.18"/>
    <text class="fig-text-bold" x="510" y="50" text-anchor="middle" font-size="16">Killip III</text>
    <text class="fig-text-sm" x="510" y="72" text-anchor="middle" fill="#EA580C">EAP</text>
    <line x1="440" y1="90" x2="580" y2="90" class="fig-box"/>
    <text class="fig-text-sm" x="510" y="115" text-anchor="middle">• Edema agudo</text>
    <text class="fig-text-sm" x="510" y="135" text-anchor="middle">de pulmão</text>
    <text class="fig-text-sm" x="510" y="155" text-anchor="middle">• Estertores &gt;50%</text>
    <text class="fig-text-sm" x="510" y="175" text-anchor="middle">• Hipoxemia</text>
    <line x1="440" y1="270" x2="580" y2="270" class="fig-box"/>
    <text class="fig-text-bold" x="510" y="305" text-anchor="middle" font-size="18" fill="#EA580C">~ 38%</text>
    <text class="fig-text-sm" x="510" y="325" text-anchor="middle">mortalidade</text>
    
    <!-- Killip IV -->
    <rect x="620" y="20" width="160" height="350" class="fig-box" rx="8" fill="#DC2626" fill-opacity="0.2"/>
    <text class="fig-text-bold" x="700" y="50" text-anchor="middle" font-size="16">Killip IV</text>
    <text class="fig-text-sm" x="700" y="72" text-anchor="middle" fill="#DC2626">CHOQUE</text>
    <line x1="640" y1="90" x2="760" y2="90" class="fig-box"/>
    <text class="fig-text-sm" x="700" y="115" text-anchor="middle">• PAS &lt;90 mmHg</text>
    <text class="fig-text-sm" x="700" y="135" text-anchor="middle">• Hipoperfusão</text>
    <text class="fig-text-sm" x="700" y="155" text-anchor="middle">  (oligúria, sudorese,</text>
    <text class="fig-text-sm" x="700" y="170" text-anchor="middle">  consciência)</text>
    <text class="fig-text-sm" x="700" y="190" text-anchor="middle">• Lactato ↑</text>
    <line x1="640" y1="270" x2="760" y2="270" class="fig-box"/>
    <text class="fig-text-bold" x="700" y="305" text-anchor="middle" font-size="18" fill="#DC2626">~ 80%</text>
    <text class="fig-text-sm" x="700" y="325" text-anchor="middle">mortalidade</text>
    <text class="fig-text-sm" x="700" y="345" text-anchor="middle">(sem reperfusão)</text>
  </svg>`
};

FIGURAS["fig-anatomia-coronarias"] = {
  titulo: "Anatomia Coronariana Simplificada e Territórios",
  legenda: "Três coronárias principais: DA (vermelho) — irriga parede anterior + septo + parte do ápice; Cx (azul) — parede lateral; CD (verde) — parede inferior + VD + nó SA/AV na maioria. Padrão de dominância: 70% CD, 20% Cx, 10% codominância.",
  autor: "Vovôminic (próprio)",
  licenca: "CC BY-SA 4.0",
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" role="img" aria-label="Anatomia Coronariana">
    <style>${SVG_STYLE}</style>
    <!-- Coração simplificado vista frontal -->
    <g transform="translate(200,40)">
      <!-- Contorno cardíaco -->
      <path fill="#FEF2F2" stroke="#7F1D1D" stroke-width="2" 
            d="M 80 30 Q 30 10 0 60 Q -20 130 30 220 L 200 360 L 370 220 Q 420 130 400 60 Q 370 10 320 30 Q 270 10 200 60 Q 130 10 80 30 Z"/>
      
      <!-- Território DA (anterior + septo) -->
      <path class="fig-territory-da" d="M 80 30 Q 30 10 0 60 Q -20 130 30 220 L 200 360 L 200 60 Q 130 10 80 30 Z"/>
      
      <!-- Território Cx (lateral) -->
      <path class="fig-territory-cx" d="M 200 60 L 200 280 L 370 220 Q 420 130 400 60 Q 370 10 320 30 Q 270 10 200 60 Z"/>
      
      <!-- Território CD (inferior + VD) -->
      <path class="fig-territory-cd" d="M 30 220 L 200 360 L 370 220 L 200 280 Z"/>
      
      <!-- DA -->
      <path stroke="#DC2626" stroke-width="4" fill="none" 
            d="M 200 30 Q 180 80 170 130 Q 160 180 150 240 Q 145 280 140 320"/>
      <text fill="#DC2626" font-weight="bold" font-size="14" x="150" y="100">DA</text>
      
      <!-- Cx -->
      <path stroke="#2563EB" stroke-width="4" fill="none" 
            d="M 230 50 Q 290 90 330 140 Q 360 190 350 240"/>
      <text fill="#2563EB" font-weight="bold" font-size="14" x="295" y="100">Cx</text>
      
      <!-- CD -->
      <path stroke="#16A34A" stroke-width="4" fill="none" 
            d="M 170 50 Q 110 100 80 170 Q 60 230 90 290 Q 130 330 200 360"/>
      <text fill="#16A34A" font-weight="bold" font-size="14" x="40" y="200">CD</text>
      
      <!-- Tronco aórtico topo -->
      <circle cx="200" cy="20" r="14" fill="#FEE2E2" stroke="#7F1D1D" stroke-width="2"/>
      <text class="fig-text-sm" x="200" y="24" text-anchor="middle">Ao</text>
    </g>
    
    <!-- Legenda territórios -->
    <g transform="translate(20,420)">
      <rect width="18" height="18" class="fig-territory-da" stroke="#DC2626" stroke-width="1.5"/>
      <text class="fig-text" x="25" y="14">DA — Anterior, septo (V1-V4)</text>
    </g>
    <g transform="translate(290,420)">
      <rect width="18" height="18" class="fig-territory-cx" stroke="#2563EB" stroke-width="1.5"/>
      <text class="fig-text" x="25" y="14">Cx — Lateral (DI, aVL, V5-V6)</text>
    </g>
    <g transform="translate(560,420)">
      <rect width="18" height="18" class="fig-territory-cd" stroke="#16A34A" stroke-width="1.5"/>
      <text class="fig-text" x="25" y="14">CD — Inferior (DII, DIII, aVF)</text>
    </g>
    <text class="fig-text-sm" x="400" y="465" text-anchor="middle" font-style="italic">⚠ Dominância CD em ~70%; Cx em 20%; codominância 10%.</text>
  </svg>`
};

FIGURAS["fig-acls-pcr"] = {
  titulo: "Algoritmo ACLS — Parada Cardíaca",
  legenda: "Sequência: RCP de alta qualidade + epinefrina + identificar ritmo chocável (FV/TV sem pulso) vs não-chocável (AESP/assistolia). Causas reversíveis: 5H (Hipovolemia, Hipóxia, H+ acidose, Hipo/Hipercalemia, Hipotermia) + 5T (Tóxicos, Tamponamento, Tensão pneumotórax, Trombose pulmonar, Trombose coronariana).",
  autor: "Vovôminic (próprio)",
  licenca: "CC BY-SA 4.0",
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" role="img" aria-label="Algoritmo ACLS PCR">
    <style>${SVG_STYLE}</style>
    <!-- Caixa: Início RCP -->
    <rect x="270" y="20" width="260" height="50" rx="8" fill="#DC2626" stroke="#7F1D1D" stroke-width="2"/>
    <text x="400" y="42" text-anchor="middle" font-weight="bold" fill="white" font-size="14">PCR — Iniciar RCP imediato</text>
    <text x="400" y="60" text-anchor="middle" fill="white" font-size="11">100-120 compressões/min, 5-6 cm prof, recuo total</text>
    
    <!-- Seta -->
    <line x1="400" y1="70" x2="400" y2="95" class="fig-arrow" marker-end="url(#arrAcls)"/>
    
    <!-- Caixa: Anexar monitor -->
    <rect x="270" y="100" width="260" height="40" rx="8" class="fig-box" fill="#FFFBEB"/>
    <text x="400" y="125" text-anchor="middle" font-weight="bold">Anexar monitor / desfibrilador</text>
    
    <line x1="400" y1="140" x2="400" y2="165" class="fig-arrow" marker-end="url(#arrAcls)"/>
    
    <!-- Caixa: Avaliar ritmo -->
    <rect x="270" y="170" width="260" height="40" rx="8" fill="#FCD34D" stroke="#92400E" stroke-width="2"/>
    <text x="400" y="195" text-anchor="middle" font-weight="bold">Ritmo chocável?</text>
    
    <!-- Bifurcação -->
    <line x1="400" y1="210" x2="180" y2="250" class="fig-arrow" marker-end="url(#arrAcls)"/>
    <line x1="400" y1="210" x2="620" y2="250" class="fig-arrow" marker-end="url(#arrAcls)"/>
    
    <text x="280" y="240" font-weight="bold" fill="#16A34A">SIM</text>
    <text x="510" y="240" font-weight="bold" fill="#DC2626">NÃO</text>
    
    <!-- Lado esquerdo: FV/TV -->
    <rect x="30" y="260" width="300" height="60" rx="8" fill="#FEE2E2" stroke="#DC2626" stroke-width="1.5"/>
    <text x="180" y="285" text-anchor="middle" font-weight="bold">FV / TV sem pulso</text>
    <text x="180" y="305" text-anchor="middle" font-size="11">Desfibrilar 200 J bifásico (ou 360 J monofásico)</text>
    
    <line x1="180" y1="320" x2="180" y2="350" class="fig-arrow" marker-end="url(#arrAcls)"/>
    
    <rect x="30" y="355" width="300" height="80" rx="8" fill="#FEF3C7" stroke="#92400E" stroke-width="1.5"/>
    <text x="180" y="375" text-anchor="middle" font-weight="bold">RCP 2 min + Adrenalina 1mg IV</text>
    <text x="180" y="394" text-anchor="middle" font-size="11">Cada 3-5 min (alternar com choques)</text>
    <text x="180" y="413" text-anchor="middle" font-size="11">⚠ Após 2ª descarga: Amiodarona 300mg IV</text>
    <text x="180" y="428" text-anchor="middle" font-size="11">(2ª dose 150mg após 2 ciclos)</text>
    
    <line x1="180" y1="435" x2="180" y2="465" class="fig-arrow" marker-end="url(#arrAcls)"/>
    
    <rect x="30" y="470" width="300" height="40" rx="8" class="fig-box" fill="#FFFBEB"/>
    <text x="180" y="495" text-anchor="middle">Reavaliar ritmo a cada 2 min</text>
    
    <!-- Lado direito: AESP / Assistolia -->
    <rect x="470" y="260" width="300" height="60" rx="8" fill="#E0F2FE" stroke="#075985" stroke-width="1.5"/>
    <text x="620" y="285" text-anchor="middle" font-weight="bold">AESP / Assistolia</text>
    <text x="620" y="305" text-anchor="middle" font-size="11">NÃO chocar</text>
    
    <line x1="620" y1="320" x2="620" y2="350" class="fig-arrow" marker-end="url(#arrAcls)"/>
    
    <rect x="470" y="355" width="300" height="80" rx="8" fill="#FEF3C7" stroke="#92400E" stroke-width="1.5"/>
    <text x="620" y="375" text-anchor="middle" font-weight="bold">RCP 2 min + Adrenalina 1mg IV</text>
    <text x="620" y="394" text-anchor="middle" font-size="11">IMEDIATAMENTE, depois cada 3-5 min</text>
    <text x="620" y="413" text-anchor="middle" font-size="11">⚠ NÃO indicada amiodarona/desfibrilação</text>
    <text x="620" y="428" text-anchor="middle" font-size="11">Pesquisar causa REVERSÍVEL agressivamente</text>
    
    <line x1="620" y1="435" x2="620" y2="465" class="fig-arrow" marker-end="url(#arrAcls)"/>
    
    <rect x="470" y="470" width="300" height="40" rx="8" class="fig-box" fill="#FFFBEB"/>
    <text x="620" y="495" text-anchor="middle">Reavaliar ritmo a cada 2 min</text>
    
    <!-- Caixa: Causas reversíveis (rodapé) -->
    <rect x="30" y="535" width="740" height="55" rx="8" fill="#FEF3C7" stroke="#92400E" stroke-width="1.5"/>
    <text x="400" y="555" text-anchor="middle" font-weight="bold">⚠ PESQUISAR 5H + 5T (causas reversíveis)</text>
    <text x="400" y="575" text-anchor="middle" font-size="11">5H: Hipovolemia · Hipóxia · H⁺ (acidose) · Hipo/Hipercalemia · Hipotermia</text>
    <text x="400" y="588" text-anchor="middle" font-size="11">5T: Tóxicos · Tamponamento · Tensão (pneumotórax) · Trombose pulmonar · Trombose coronariana</text>
    
    <defs>
      <marker id="arrAcls" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
      </marker>
    </defs>
  </svg>`
};

FIGURAS["fig-sopros-focos"] = {
  titulo: "Focos Auscultatórios Cardíacos",
  legenda: "Aórtico: 2º EICD. Pulmonar: 2º EICE. Tricúspide: 4º-5º EICE bordo esternal. Mitral: 5º EICE linha hemiclavicular. Acessórios: Erb (3º EICE — sopros aórticos), aórtico acessório (3º EICD).",
  autor: "Vovôminic (próprio)",
  licenca: "CC BY-SA 4.0",
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" role="img" aria-label="Focos Auscultatórios">
    <style>${SVG_STYLE}</style>
    <!-- Torso simplificado vista frontal -->
    <g transform="translate(200,30)">
      <!-- Contorno tórax -->
      <path fill="#FEF2F2" stroke="#9CA3AF" stroke-width="1.5" 
            d="M 60 20 Q 0 30 0 100 Q 0 250 200 380 Q 400 250 400 100 Q 400 30 340 20 L 200 30 Z"/>
      
      <!-- Esterno -->
      <line x1="200" y1="30" x2="200" y2="300" stroke="#9CA3AF" stroke-width="1.5" stroke-dasharray="3,3"/>
      
      <!-- Costelas indicadores (numeradas) -->
      <line x1="100" y1="70" x2="200" y2="80" stroke="#9CA3AF" stroke-width="0.5"/>
      <text class="fig-text-sm" x="95" y="74" text-anchor="end" font-size="10">2º EIC</text>
      
      <line x1="100" y1="115" x2="200" y2="125" stroke="#9CA3AF" stroke-width="0.5"/>
      <text class="fig-text-sm" x="95" y="119" text-anchor="end" font-size="10">3º EIC</text>
      
      <line x1="100" y1="160" x2="200" y2="170" stroke="#9CA3AF" stroke-width="0.5"/>
      <text class="fig-text-sm" x="95" y="164" text-anchor="end" font-size="10">4º EIC</text>
      
      <line x1="100" y1="205" x2="200" y2="215" stroke="#9CA3AF" stroke-width="0.5"/>
      <text class="fig-text-sm" x="95" y="209" text-anchor="end" font-size="10">5º EIC</text>
      
      <!-- Foco Aórtico (2º EIC direito) -->
      <circle cx="240" cy="80" r="14" fill="#DC2626" fill-opacity="0.5" stroke="#7F1D1D" stroke-width="2"/>
      <text x="240" y="84" text-anchor="middle" font-weight="bold" fill="white">Ao</text>
      
      <!-- Foco Pulmonar (2º EIC esquerdo) -->
      <circle cx="160" cy="80" r="14" fill="#2563EB" fill-opacity="0.5" stroke="#1E40AF" stroke-width="2"/>
      <text x="160" y="84" text-anchor="middle" font-weight="bold" fill="white">P</text>
      
      <!-- Erb (3º EIC esquerdo) -->
      <circle cx="160" cy="125" r="11" fill="#F59E0B" fill-opacity="0.5" stroke="#92400E" stroke-width="1.5"/>
      <text x="160" y="129" text-anchor="middle" font-size="10" font-weight="bold" fill="white">Erb</text>
      
      <!-- Tricúspide (4º-5º EIC esquerdo, bordo esternal) -->
      <circle cx="170" cy="190" r="14" fill="#16A34A" fill-opacity="0.5" stroke="#14532D" stroke-width="2"/>
      <text x="170" y="194" text-anchor="middle" font-weight="bold" fill="white">T</text>
      
      <!-- Mitral (5º EIC linha hemiclavicular) -->
      <circle cx="100" cy="215" r="14" fill="#7C3AED" fill-opacity="0.5" stroke="#5B21B6" stroke-width="2"/>
      <text x="100" y="219" text-anchor="middle" font-weight="bold" fill="white">M</text>
    </g>
    
    <!-- Legenda -->
    <g transform="translate(40,360)">
      <circle cx="10" cy="10" r="8" fill="#DC2626" fill-opacity="0.5" stroke="#7F1D1D" stroke-width="1.5"/>
      <text class="fig-text" x="25" y="14">Ao — Aórtico: 2º EICD (sopros aórticos)</text>
    </g>
    <g transform="translate(40,385)">
      <circle cx="10" cy="10" r="8" fill="#2563EB" fill-opacity="0.5" stroke="#1E40AF" stroke-width="1.5"/>
      <text class="fig-text" x="25" y="14">P — Pulmonar: 2º EICE (sopros pulmonares)</text>
    </g>
    <g transform="translate(40,410)">
      <circle cx="10" cy="10" r="8" fill="#F59E0B" fill-opacity="0.5" stroke="#92400E" stroke-width="1.5"/>
      <text class="fig-text" x="25" y="14">Erb — 3º EICE (acessório, IAo)</text>
    </g>
    <g transform="translate(440,360)">
      <circle cx="10" cy="10" r="8" fill="#16A34A" fill-opacity="0.5" stroke="#14532D" stroke-width="1.5"/>
      <text class="fig-text" x="25" y="14">T — Tricúspide: 4º-5º EICE bordo esternal</text>
    </g>
    <g transform="translate(440,385)">
      <circle cx="10" cy="10" r="8" fill="#7C3AED" fill-opacity="0.5" stroke="#5B21B6" stroke-width="1.5"/>
      <text class="fig-text" x="25" y="14">M — Mitral: 5º EICE linha hemiclavicular</text>
    </g>
    <text class="fig-text-sm" x="400" y="450" text-anchor="middle" font-style="italic">EIC = espaço intercostal | D = direito | E = esquerdo</text>
  </svg>`
};

FIGURAS["fig-bav-progressao"] = {
  titulo: "Bloqueios AV — Progressão (1º, 2º Mobitz I e II, 3º)",
  legenda: "BAV 1º: PR >200 ms fixo. BAV 2º Mobitz I (Wenckebach): PR progressivamente alarga até bloqueio (P sem QRS). Mobitz II: PR fixo + falha súbita (P sem QRS). BAV 3º: dissociação total AV.",
  autor: "Vovôminic (próprio)",
  licenca: "CC BY-SA 4.0",
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" role="img" aria-label="Bloqueios AV Progressão">
    <style>${SVG_STYLE}</style>
    
    <!-- BAV 1º grau -->
    <text class="fig-text-bold" x="10" y="40" font-size="14">BAV 1º grau</text>
    <text class="fig-text-sm" x="10" y="58">PR &gt;200 ms constante</text>
    <path class="fig-ecg-line" d="M 50 90 Q 70 75 85 90 L 140 90 L 145 85 L 152 60 L 159 115 L 165 90 L 200 90 Q 220 75 235 90 L 290 90 L 295 85 L 302 60 L 309 115 L 315 90 L 350 90 Q 370 75 385 90 L 440 90 L 445 85 L 452 60 L 459 115 L 465 90 L 500 90 Q 520 75 535 90 L 590 90 L 595 85 L 602 60 L 609 115 L 615 90 L 650 90 Q 670 75 685 90 L 740 90 L 745 85 L 752 60 L 759 115"/>
    <text class="fig-text-sm" x="113" y="125" text-anchor="middle" fill="#2563EB">PR longo</text>
    <line x1="85" y1="135" x2="140" y2="135" class="fig-arrow"/>
    <line x1="85" y1="130" x2="85" y2="140" class="fig-arrow"/>
    <line x1="140" y1="130" x2="140" y2="140" class="fig-arrow"/>
    
    <!-- BAV 2º Mobitz I (Wenckebach) -->
    <text class="fig-text-bold" x="10" y="180" font-size="14">BAV 2º Mobitz I (Wenckebach)</text>
    <text class="fig-text-sm" x="10" y="198">PR progressivamente alarga até P sem QRS</text>
    <path class="fig-ecg-line" d="M 50 230 Q 70 215 85 230 L 130 230 L 135 225 L 142 200 L 149 255 L 155 230 L 195 230 Q 215 215 230 230 L 290 230 L 295 225 L 302 200 L 309 255 L 315 230 L 355 230 Q 375 215 390 230 L 460 230 L 465 225 L 472 200 L 479 255 L 485 230 L 520 230 Q 540 215 555 230 L 630 230"/>
    <!-- P bloqueada -->
    <path class="fig-ecg-line" stroke="#DC2626" d="M 630 230 Q 650 215 665 230 L 720 230"/>
    <text class="fig-text-sm" x="650" y="210" text-anchor="middle" fill="#DC2626">P bloqueada</text>
    <text class="fig-text-sm" x="650" y="225" text-anchor="middle" fill="#DC2626">(sem QRS)</text>
    <!-- PRs progressivos -->
    <text class="fig-text-sm" x="107" y="270" fill="#2563EB" text-anchor="middle">PR1</text>
    <text class="fig-text-sm" x="262" y="270" fill="#2563EB" text-anchor="middle">PR2 (&gt;PR1)</text>
    <text class="fig-text-sm" x="425" y="270" fill="#2563EB" text-anchor="middle">PR3 (&gt;PR2)</text>
    <text class="fig-text-sm" x="600" y="270" fill="#DC2626" text-anchor="middle">→ Bloqueio</text>
    
    <!-- BAV 2º Mobitz II -->
    <text class="fig-text-bold" x="10" y="320" font-size="14">BAV 2º Mobitz II</text>
    <text class="fig-text-sm" x="10" y="338">PR fixo + falha súbita ⚠ ALTO RISCO progressão BAVT</text>
    <path class="fig-ecg-line" d="M 50 370 Q 70 355 85 370 L 140 370 L 145 365 L 152 340 L 159 395 L 165 370 L 210 370 Q 230 355 245 370 L 300 370 L 305 365 L 312 340 L 319 395 L 325 370 L 370 370 Q 390 355 405 370 L 460 370"/>
    <!-- P bloqueada súbita -->
    <path class="fig-ecg-line" stroke="#DC2626" d="M 460 370 Q 480 355 495 370 L 550 370"/>
    <text class="fig-text-sm" x="480" y="350" text-anchor="middle" fill="#DC2626">P sem QRS súbito</text>
    <!-- Continua -->
    <path class="fig-ecg-line" d="M 550 370 L 555 365 L 562 340 L 569 395 L 575 370 L 615 370 Q 635 355 650 370 L 705 370 L 710 365 L 717 340 L 724 395 L 730 370"/>
    
    <!-- BAV 3º (visualização compacta) -->
    <text class="fig-text-bold" x="10" y="460" font-size="14">BAV 3º grau (completo)</text>
    <text class="fig-text-sm" x="10" y="478">Dissociação AV total — P e QRS independentes</text>
    <path class="fig-ecg-line" d="M 50 510 Q 70 495 85 510 L 130 510 Q 150 495 165 510 L 195 510 L 205 510 L 215 485 L 232 540 L 238 510 L 280 510 Q 300 495 315 510 L 360 510 Q 380 495 395 510 L 430 510 L 440 510 L 450 480 L 470 545 L 476 510 L 510 510 Q 530 495 545 510 L 590 510 Q 610 495 625 510 L 660 510 L 670 510 L 680 485 L 700 540 L 706 510"/>
    
    <text class="fig-text-sm" x="100" y="495" fill="#2563EB" text-anchor="middle">P</text>
    <text class="fig-text-sm" x="225" y="555" fill="#DC2626" text-anchor="middle">QRS</text>
    <text class="fig-text-sm" x="330" y="495" fill="#2563EB" text-anchor="middle">P</text>
    <text class="fig-text-sm" x="450" y="555" fill="#DC2626" text-anchor="middle">QRS</text>
    <text class="fig-text-sm" x="565" y="495" fill="#2563EB" text-anchor="middle">P</text>
    <text class="fig-text-sm" x="685" y="555" fill="#DC2626" text-anchor="middle">QRS</text>
  </svg>`
};

/* ============== RENDER ============== */

function renderFigura(figId) {
  const f = FIGURAS[figId];
  if (!f) {
    return `<div class="fig-missing">⚠ Figura "${figId}" não existe na biblioteca.</div>`;
  }
  const lic = f.licencaUrl 
    ? `<a href="${f.licencaUrl}" target="_blank" rel="noopener noreferrer">${f.licenca}</a>` 
    : f.licenca;
  return `
    <figure class="fig fig-biblioteca">
      <div class="fig-titulo">${f.titulo}</div>
      <div class="fig-svg-wrap">${f.svg || ''}</div>
      ${f.imgSrc ? `<img class="fig-img" src="${f.imgSrc}" alt="${f.titulo}" loading="lazy">` : ''}
      <figcaption class="fig-legenda">${f.legenda}</figcaption>
      <div class="fig-atrib">${f.autor} · ${lic}</div>
    </figure>`;
}

/* Lista todos os IDs disponíveis (debug/dev) */
function listFiguras() {
  return Object.keys(FIGURAS);
}
