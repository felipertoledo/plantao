/* ===========================================================
   VOVÔMINIC DOUTÔ — flows/mfc.js
   8 fluxogramas MFC adulto/idoso
   =========================================================== */

FLOWS["flow-quedas-idoso"] = {
titulo: "Quedas em Idoso — Avaliação Multifatorial",
fonte: "STEADI/CDC 2023; AGS Beers 2023; SBGG 2024",
svg: `<svg viewBox="0 0 820 1280" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-q" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
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
<rect x="240" y="20" width="340" height="60" class="f-start"/>
<text x="410" y="48" text-anchor="middle" class="f-tw">Idoso ≥65a — rastreio anual de quedas</text>
<text x="410" y="66" text-anchor="middle" class="f-tw" style="font-size:11px">"Caiu no último ano? Tem medo de cair?"</text>
<line x1="410" y1="80" x2="410" y2="115" class="f-arr" marker-end="url(#arr-q)"/>
<polygon points="410,120 600,200 410,280 220,200" class="f-dec"/>
<text x="410" y="190" text-anchor="middle" class="f-t">Caiu 2+ vezes em 1 ano</text>
<text x="410" y="208" text-anchor="middle" class="f-t">OU queda c/ lesão</text>
<text x="410" y="226" text-anchor="middle" class="f-t">OU TUG ≥12s</text>
<line x1="220" y1="200" x2="100" y2="200" class="f-arr" marker-end="url(#arr-q)"/>
<text x="155" y="192" text-anchor="middle" class="f-no">NÃO</text>
<line x1="600" y1="200" x2="720" y2="200" class="f-arr" marker-end="url(#arr-q)"/>
<text x="665" y="192" text-anchor="middle" class="f-yes">SIM</text>
<rect x="20" y="300" width="180" height="100" class="f-ok"/>
<text x="110" y="325" text-anchor="middle" class="f-tc">Baixo risco</text>
<text x="110" y="348" text-anchor="middle" class="f-ts">Educação queda</text>
<text x="110" y="366" text-anchor="middle" class="f-ts">Exercício força/equilíbrio</text>
<text x="110" y="384" text-anchor="middle" class="f-ts">Reavaliar 1 ano</text>
<rect x="620" y="300" width="180" height="120" class="f-crit"/>
<text x="710" y="325" text-anchor="middle" class="f-tc">ALTO RISCO</text>
<text x="710" y="348" text-anchor="middle" class="f-ts">Avaliação MULTIFATORIAL</text>
<text x="710" y="366" text-anchor="middle" class="f-ts">→ 6 áreas obrigatórias</text>
<text x="710" y="384" text-anchor="middle" class="f-ts">→ Plano individual</text>
<text x="710" y="402" text-anchor="middle" class="f-ts">→ Reavaliar 3 meses</text>
<line x1="710" y1="420" x2="710" y2="455" class="f-arr" marker-end="url(#arr-q)"/>
<rect x="40" y="475" width="380" height="160" class="f-rect"/>
<text x="230" y="498" text-anchor="middle" class="f-tc">1. MEDICAMENTOS (Beers)</text>
<text x="230" y="520" text-anchor="middle" class="f-ts">BZD, opioide, antipsicóticos, antic.</text>
<text x="230" y="538" text-anchor="middle" class="f-ts">Polifarmácia ≥5 itens — REVISAR</text>
<text x="230" y="560" text-anchor="middle" class="f-tc">2. POSTURAL/CARDIOLÓGICO</text>
<text x="230" y="578" text-anchor="middle" class="f-ts">Hipotensão postural (drop ≥20)</text>
<text x="230" y="596" text-anchor="middle" class="f-ts">Síncope cardiogênica, FA</text>
<text x="230" y="618" text-anchor="middle" class="f-ts">ECG, eco se suspeita</text>
<rect x="440" y="475" width="360" height="160" class="f-rect"/>
<text x="620" y="498" text-anchor="middle" class="f-tc">3. NEUROLÓGICO</text>
<text x="620" y="520" text-anchor="middle" class="f-ts">Marcha, equilíbrio, Romberg</text>
<text x="620" y="538" text-anchor="middle" class="f-ts">Parkinson, AVC sequelar, neuropatia</text>
<text x="620" y="560" text-anchor="middle" class="f-tc">4. COGNITIVO/PSIQ</text>
<text x="620" y="578" text-anchor="middle" class="f-ts">Mini-Cog, MMSE/MoCA</text>
<text x="620" y="596" text-anchor="middle" class="f-ts">Depressão (GDS-15), confusão</text>
<text x="620" y="618" text-anchor="middle" class="f-ts">Demência ↑risco queda 2-3×</text>
<line x1="230" y1="635" x2="230" y2="655" class="f-arr" marker-end="url(#arr-q)"/>
<line x1="620" y1="635" x2="620" y2="655" class="f-arr" marker-end="url(#arr-q)"/>
<rect x="40" y="660" width="380" height="160" class="f-rect"/>
<text x="230" y="683" text-anchor="middle" class="f-tc">5. SENSORIAL</text>
<text x="230" y="705" text-anchor="middle" class="f-ts">Visão (catarata? presbiopia?)</text>
<text x="230" y="723" text-anchor="middle" class="f-ts">Audição (presbiacusia)</text>
<text x="230" y="745" text-anchor="middle" class="f-tc">6. AMBIENTAL/DOMICILIAR</text>
<text x="230" y="763" text-anchor="middle" class="f-ts">Tapete, escada, iluminação</text>
<text x="230" y="781" text-anchor="middle" class="f-ts">Banheiro (barra, antiderrap.)</text>
<text x="230" y="803" text-anchor="middle" class="f-ts">Visita ACS / TO no domicílio</text>
<rect x="440" y="660" width="360" height="160" class="f-warn"/>
<text x="620" y="683" text-anchor="middle" class="f-tc">EXAMES DIRECIONADOS</text>
<text x="620" y="705" text-anchor="middle" class="f-ts">PA em pé/sentado (postural)</text>
<text x="620" y="723" text-anchor="middle" class="f-ts">Hemograma, B12, função renal</text>
<text x="620" y="745" text-anchor="middle" class="f-ts">25-OH-D, TSH</text>
<text x="620" y="763" text-anchor="middle" class="f-ts">Glicemia (hipo?), eletrólitos</text>
<text x="620" y="781" text-anchor="middle" class="f-ts">ECG; eco se síncope</text>
<text x="620" y="803" text-anchor="middle" class="f-ts">DMO (FRAX); Rx coluna se dor</text>
<line x1="230" y1="820" x2="230" y2="850" class="f-arr" marker-end="url(#arr-q)"/>
<line x1="620" y1="820" x2="620" y2="850" class="f-arr" marker-end="url(#arr-q)"/>
<rect x="40" y="855" width="760" height="160" class="f-crit"/>
<text x="420" y="880" text-anchor="middle" class="f-tc">PLANO INDIVIDUALIZADO — INTERVENÇÕES (NNT 3-5)</text>
<text x="420" y="905" text-anchor="middle" class="f-ts">⚠ DESPRESCREVER drogas Beers (BZD, antipsicóticos, antic., diuréticos noturnos, opioides)</text>
<text x="420" y="925" text-anchor="middle" class="f-ts">⚠ EXERCÍCIO multimodal (equilíbrio + força) 2-3×/sem — Academia Saúde, Tai chi</text>
<text x="420" y="945" text-anchor="middle" class="f-ts">⚠ ADEQUAÇÃO DOMICILIAR — visita ACS, intervenções físicas</text>
<text x="420" y="965" text-anchor="middle" class="f-ts">⚠ CORREÇÃO SENSORIAL (catarata, óculos, AASI)</text>
<text x="420" y="985" text-anchor="middle" class="f-ts">⚠ Vitamina D 800-2000 UI/dia se deficiente</text>
<text x="420" y="1005" text-anchor="middle" class="f-ts">⚠ Tratar hipotensão postural, FA, depressão; auxiliares (bengala/andador)</text>
<line x1="420" y1="1015" x2="420" y2="1045" class="f-arr" marker-end="url(#arr-q)"/>
<rect x="240" y="1050" width="340" height="60" class="f-ok"/>
<text x="410" y="1078" text-anchor="middle" class="f-tc">Reavaliar em 3 meses</text>
<text x="410" y="1096" text-anchor="middle" class="f-ts">TUG, equilíbrio, novas quedas, adesão ao plano</text>
<line x1="410" y1="1110" x2="410" y2="1140" class="f-arr" marker-end="url(#arr-q)"/>
<rect x="240" y="1145" width="340" height="60" class="f-warn"/>
<text x="410" y="1170" text-anchor="middle" class="f-tc">Refratário ou complexo</text>
<text x="410" y="1190" text-anchor="middle" class="f-ts">→ Encaminhar Geriatria/CER, Fisio do idoso</text>
<text x="410" y="1210" text-anchor="middle" class="f-ts">Articular NASF, ACS, terapia ocupacional</text>
</svg>`
};

FLOWS["flow-demencia-investigacao"] = {
titulo: "Demência — Triagem e Investigação Inicial em MFC",
fonte: "ABRAz 2024; AAN 2018; NICE NG97 2018; SBN/SBGG",
svg: `<svg viewBox="0 0 820 1080" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
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
<rect x="200" y="20" width="420" height="70" class="f-start"/>
<text x="410" y="48" text-anchor="middle" class="f-tw">Queixa de memória / preocupação familiar</text>
<text x="410" y="68" text-anchor="middle" class="f-tw" style="font-size:11px">"Esquece coisas?" "Família reparou mudança?"</text>
<line x1="410" y1="90" x2="410" y2="120" class="f-arr" marker-end="url(#arr-d)"/>
<rect x="80" y="125" width="660" height="100" class="f-rect"/>
<text x="410" y="148" text-anchor="middle" class="f-tc">PRIMEIRA AVALIAÇÃO — anamnese ampliada</text>
<text x="410" y="168" text-anchor="middle" class="f-ts">Tempo evolução · Domínios afetados (memória, linguagem, função executiva, espacial)</text>
<text x="410" y="186" text-anchor="middle" class="f-ts">Impacto AVD/AIVD · Comportamento (apatia, agressão, alucinação) · Marcha</text>
<text x="410" y="204" text-anchor="middle" class="f-ts">Excluir: delirium agudo · depressão · efeito de medicação · álcool · trauma</text>
<line x1="410" y1="225" x2="410" y2="255" class="f-arr" marker-end="url(#arr-d)"/>
<rect x="80" y="260" width="660" height="100" class="f-warn"/>
<text x="410" y="282" text-anchor="middle" class="f-tc">TESTES DE TRIAGEM COGNITIVA</text>
<text x="410" y="302" text-anchor="middle" class="f-ts">MINI-COG (3 itens, 3 min): falha = investigar</text>
<text x="410" y="320" text-anchor="middle" class="f-ts">MMSE/MEEM (10 min) — corrigir por escolaridade</text>
<text x="410" y="338" text-anchor="middle" class="f-ts">MoCA (mais sensível p/ MCI) — preferida se possível</text>
<line x1="410" y1="360" x2="410" y2="395" class="f-arr" marker-end="url(#arr-d)"/>
<polygon points="410,400 620,490 410,580 200,490" class="f-dec"/>
<text x="410" y="480" text-anchor="middle" class="f-t">Comprometimento cognitivo</text>
<text x="410" y="498" text-anchor="middle" class="f-t">+ funcional (AVD/AIVD)?</text>
<line x1="200" y1="490" x2="80" y2="490" class="f-arr" marker-end="url(#arr-d)"/>
<text x="140" y="482" text-anchor="middle" class="f-no">NÃO</text>
<line x1="620" y1="490" x2="740" y2="490" class="f-arr" marker-end="url(#arr-d)"/>
<text x="680" y="482" text-anchor="middle" class="f-yes">SIM</text>
<rect x="20" y="605" width="180" height="100" class="f-ok"/>
<text x="110" y="630" text-anchor="middle" class="f-tc">MCI ou CCI</text>
<text x="110" y="650" text-anchor="middle" class="f-ts">Acompanhar 6-12 m</text>
<text x="110" y="668" text-anchor="middle" class="f-ts">Manejo de FR (CV, sono)</text>
<text x="110" y="686" text-anchor="middle" class="f-ts">Estilo de vida</text>
<rect x="620" y="605" width="180" height="120" class="f-crit"/>
<text x="710" y="630" text-anchor="middle" class="f-tc">PROVÁVEL DEMÊNCIA</text>
<text x="710" y="650" text-anchor="middle" class="f-ts">Painel laboratorial</text>
<text x="710" y="668" text-anchor="middle" class="f-ts">Neuroimagem</text>
<text x="710" y="686" text-anchor="middle" class="f-ts">Encaminhar neuro/geriatra</text>
<text x="710" y="704" text-anchor="middle" class="f-ts">Plano de cuidado</text>
<line x1="710" y1="725" x2="710" y2="760" class="f-arr" marker-end="url(#arr-d)"/>
<rect x="380" y="765" width="440" height="120" class="f-rect"/>
<text x="600" y="788" text-anchor="middle" class="f-tc">PAINEL LABORATORIAL OBRIGATÓRIO</text>
<text x="600" y="808" text-anchor="middle" class="f-ts">Hemograma · TSH · B12 · folato · função hepática/renal</text>
<text x="600" y="826" text-anchor="middle" class="f-ts">Glicemia · sódio · cálcio · VDRL · HIV (se risco)</text>
<text x="600" y="846" text-anchor="middle" class="f-ts">Excluir causas REVERSÍVEIS de demência</text>
<text x="600" y="866" text-anchor="middle" class="f-ts">~10% das demências podem ser reversíveis se tratadas precocemente</text>
<line x1="600" y1="885" x2="600" y2="915" class="f-arr" marker-end="url(#arr-d)"/>
<rect x="380" y="920" width="440" height="100" class="f-warn"/>
<text x="600" y="943" text-anchor="middle" class="f-tc">NEUROIMAGEM</text>
<text x="600" y="963" text-anchor="middle" class="f-ts">TC crânio: 1ª linha no SUS — exclui AVC, HSD, hidrocefalia, tumor</text>
<text x="600" y="981" text-anchor="middle" class="f-ts">RM crânio: preferível se ≤65a, evolução atípica, suspeita vascular ou frontal</text>
<text x="600" y="999" text-anchor="middle" class="f-ts">PET/SPECT, líquor: especialista</text>
</svg>`
};

FLOWS["flow-anemia-investig"] = {
titulo: "Anemia Ambulatorial — Algoritmo de Investigação",
fonte: "SBHH 2024; BCSH 2021; WHO 2024",
svg: `<svg viewBox="0 0 820 980" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
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
<rect x="200" y="20" width="420" height="70" class="f-start"/>
<text x="410" y="48" text-anchor="middle" class="f-tw">Hb baixa em hemograma</text>
<text x="410" y="68" text-anchor="middle" class="f-tw" style="font-size:11px">♂ &lt;13 · ♀ &lt;12 · gestante &lt;11</text>
<line x1="410" y1="90" x2="410" y2="120" class="f-arr" marker-end="url(#arr-a)"/>
<rect x="80" y="125" width="660" height="80" class="f-rect"/>
<text x="410" y="148" text-anchor="middle" class="f-tc">SOLICITAR: Hemograma + VCM + RDW + Reticulócitos</text>
<text x="410" y="168" text-anchor="middle" class="f-ts">Ferritina · Sat Transferrina · B12 · folato · creatinina/TFG</text>
<text x="410" y="186" text-anchor="middle" class="f-ts">Sangue oculto fezes (homem ou pós-meno)</text>
<line x1="410" y1="205" x2="410" y2="235" class="f-arr" marker-end="url(#arr-a)"/>
<polygon points="410,240 620,330 410,420 200,330" class="f-dec"/>
<text x="410" y="320" text-anchor="middle" class="f-t">VCM (fL)?</text>
<line x1="200" y1="330" x2="60" y2="330" class="f-arr" marker-end="url(#arr-a)"/>
<text x="130" y="320" text-anchor="middle" class="f-no">&lt;80</text>
<text x="130" y="338" text-anchor="middle" class="f-ts">micro</text>
<line x1="410" y1="420" x2="410" y2="450" class="f-arr" marker-end="url(#arr-a)"/>
<text x="430" y="438" class="f-ts">80-100 normo</text>
<line x1="620" y1="330" x2="760" y2="330" class="f-arr" marker-end="url(#arr-a)"/>
<text x="690" y="320" text-anchor="middle" class="f-yes">&gt;100</text>
<text x="690" y="338" text-anchor="middle" class="f-ts">macro</text>
<rect x="20" y="425" width="180" height="180" class="f-warn"/>
<text x="110" y="448" text-anchor="middle" class="f-tc">MICROCÍTICA</text>
<text x="110" y="468" text-anchor="middle" class="f-ts">Ferritina &lt;30 ou Tsat&lt;16%</text>
<text x="110" y="486" text-anchor="middle" class="f-ts">= FERROPRIVA</text>
<text x="110" y="508" text-anchor="middle" class="f-ts">Ferritina ≥100 + Tsat baixa</text>
<text x="110" y="526" text-anchor="middle" class="f-ts">= doença crônica</text>
<text x="110" y="548" text-anchor="middle" class="f-ts">VCM muito baixo + RDW normal</text>
<text x="110" y="566" text-anchor="middle" class="f-ts">+ ferritina normal</text>
<text x="110" y="584" text-anchor="middle" class="f-ts">= talassemia (EFP)</text>
<rect x="240" y="455" width="340" height="180" class="f-rect"/>
<text x="410" y="478" text-anchor="middle" class="f-tc">NORMOCÍTICA</text>
<text x="410" y="498" text-anchor="middle" class="f-ts">Reticulócitos ALTOS:</text>
<text x="410" y="516" text-anchor="middle" class="f-ts">→ Sangramento agudo</text>
<text x="410" y="534" text-anchor="middle" class="f-ts">→ Hemólise (LDH, BI, hapto)</text>
<text x="410" y="556" text-anchor="middle" class="f-ts">Reticulócitos BAIXOS:</text>
<text x="410" y="574" text-anchor="middle" class="f-ts">→ DRC (TFG &lt;60) → EPO baixa</text>
<text x="410" y="592" text-anchor="middle" class="f-ts">→ Doença crônica</text>
<text x="410" y="610" text-anchor="middle" class="f-ts">→ Endócrino (TSH)</text>
<rect x="620" y="425" width="180" height="180" class="f-warn"/>
<text x="710" y="448" text-anchor="middle" class="f-tc">MACROCÍTICA</text>
<text x="710" y="468" text-anchor="middle" class="f-ts">B12 baixa</text>
<text x="710" y="486" text-anchor="middle" class="f-ts">→ Idoso · vegano</text>
<text x="710" y="504" text-anchor="middle" class="f-ts">→ Pós-bariátrica</text>
<text x="710" y="522" text-anchor="middle" class="f-ts">→ IBP crônico</text>
<text x="710" y="544" text-anchor="middle" class="f-ts">Folato baixo (raro)</text>
<text x="710" y="562" text-anchor="middle" class="f-ts">Hipotireoidismo</text>
<text x="710" y="580" text-anchor="middle" class="f-ts">Álcool · drogas</text>
<text x="710" y="598" text-anchor="middle" class="f-ts">Mielodisplasia</text>
<line x1="110" y1="605" x2="110" y2="640" class="f-arr" marker-end="url(#arr-a)"/>
<line x1="410" y1="635" x2="410" y2="665" class="f-arr" marker-end="url(#arr-a)"/>
<line x1="710" y1="605" x2="710" y2="640" class="f-arr" marker-end="url(#arr-a)"/>
<rect x="20" y="645" width="380" height="100" class="f-crit"/>
<text x="210" y="670" text-anchor="middle" class="f-tc">⚠ FERROPRIVA EM HOMEM OU PÓS-MENO</text>
<text x="210" y="692" text-anchor="middle" class="f-ts">= SANGRAMENTO GI até prova contrária</text>
<text x="210" y="710" text-anchor="middle" class="f-ts">EDA + colonoscopia OBRIGATÓRIA</text>
<text x="210" y="728" text-anchor="middle" class="f-ts">Não basta repor ferro!</text>
<rect x="420" y="670" width="380" height="100" class="f-rect"/>
<text x="610" y="693" text-anchor="middle" class="f-tc">B12 + manif. neurológicas</text>
<text x="610" y="715" text-anchor="middle" class="f-ts">Cianocobalamina 1000 mcg IM 1x/sem 4 sem</text>
<text x="610" y="733" text-anchor="middle" class="f-ts">→ 1x/mês indefinido</text>
<text x="610" y="751" text-anchor="middle" class="f-ts">⚠ Atraso = sequela neurológica IRREVERSÍVEL</text>
<line x1="410" y1="775" x2="410" y2="810" class="f-arr" marker-end="url(#arr-a)"/>
<rect x="80" y="815" width="660" height="120" class="f-ok"/>
<text x="410" y="838" text-anchor="middle" class="f-tc">REPOSIÇÃO E ACOMPANHAMENTO</text>
<text x="410" y="858" text-anchor="middle" class="f-ts">Ferropriva: Sulfato ferroso 40 mg Fe elem 1-3x/dia · com vit C · 3-6 meses pós-Hb normal</text>
<text x="410" y="876" text-anchor="middle" class="f-ts">DRC: ferro VO ± EPO via CEAF/nefro (após ferro adequado e Hb &lt;10)</text>
<text x="410" y="894" text-anchor="middle" class="f-ts">Resposta esperada: ↑1-2 g/dL em 4 sem · estoque em 4-6 meses</text>
<text x="410" y="914" text-anchor="middle" class="f-ts">Falha de resposta = revisar diagnóstico (sangramento? celíaca? IBP? DII?)</text>
</svg>`
};

FLOWS["flow-has-escolha-droga"] = {
titulo: "HAS — Algoritmo de Escolha de Anti-hipertensivo",
fonte: "SBC 2024; ESC 2023; ACC/AHA 2024; PCDT-MS",
svg: `<svg viewBox="0 0 820 880" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
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
<rect x="200" y="20" width="420" height="70" class="f-start"/>
<text x="410" y="48" text-anchor="middle" class="f-tw">HAS confirmada · alvo &lt;130/80 (geral)</text>
<text x="410" y="68" text-anchor="middle" class="f-tw" style="font-size:11px">Idoso frágil ≥80a: tolerar até &lt;150 mmHg PAS</text>
<line x1="410" y1="90" x2="410" y2="120" class="f-arr" marker-end="url(#arr-h)"/>
<rect x="80" y="125" width="660" height="60" class="f-rect"/>
<text x="410" y="148" text-anchor="middle" class="f-tc">AVALIAR COMORBIDADE (escolha INDIVIDUALIZADA)</text>
<text x="410" y="168" text-anchor="middle" class="f-ts">DM · DAC · IC · DRC · proteinúria · idade · raça · gestação · efeitos adversos</text>
<line x1="410" y1="185" x2="410" y2="215" class="f-arr" marker-end="url(#arr-h)"/>
<rect x="20" y="220" width="190" height="180" class="f-ok"/>
<text x="115" y="243" text-anchor="middle" class="f-tc">Sem comorbidade</text>
<text x="115" y="263" text-anchor="middle" class="f-ts">≤55a NÃO-negro:</text>
<text x="115" y="281" text-anchor="middle" class="f-ts">IECA/BRA</text>
<text x="115" y="305" text-anchor="middle" class="f-ts">&gt;55a OU negro:</text>
<text x="115" y="323" text-anchor="middle" class="f-ts">BCC (anlodipino)</text>
<text x="115" y="341" text-anchor="middle" class="f-ts">OU tiazídico</text>
<text x="115" y="365" text-anchor="middle" class="f-ts">UBS+PFPB:</text>
<text x="115" y="383" text-anchor="middle" class="f-ts">Losartana · HCTZ · Anlod</text>
<rect x="220" y="220" width="190" height="180" class="f-warn"/>
<text x="315" y="243" text-anchor="middle" class="f-tc">DAC / IC / DM</text>
<text x="315" y="265" text-anchor="middle" class="f-ts">IECA/BRA 1ª linha</text>
<text x="315" y="283" text-anchor="middle" class="f-ts">(proteção CV)</text>
<text x="315" y="305" text-anchor="middle" class="f-ts">Pós-IAM/IC: + BB</text>
<text x="315" y="323" text-anchor="middle" class="f-ts">Carvedilol/Metop</text>
<text x="315" y="345" text-anchor="middle" class="f-ts">IC: + ARM</text>
<text x="315" y="363" text-anchor="middle" class="f-ts">(espironolactona)</text>
<text x="315" y="381" text-anchor="middle" class="f-ts">DM2: + iSGLT2 CEAF</text>
<rect x="420" y="220" width="190" height="180" class="f-warn"/>
<text x="515" y="243" text-anchor="middle" class="f-tc">DRC / proteinúria</text>
<text x="515" y="263" text-anchor="middle" class="f-ts">IECA/BRA OBRIGATÓRIO</text>
<text x="515" y="281" text-anchor="middle" class="f-ts">se RAC ≥30 mg/g</text>
<text x="515" y="303" text-anchor="middle" class="f-ts">Indep. PA</text>
<text x="515" y="325" text-anchor="middle" class="f-ts">+ iSGLT2 (DAPA-CKD)</text>
<text x="515" y="347" text-anchor="middle" class="f-ts">+ BCC se necessário</text>
<text x="515" y="369" text-anchor="middle" class="f-ts">Tiazídico em TFG≥30</text>
<text x="515" y="387" text-anchor="middle" class="f-ts">Alça em TFG&lt;30</text>
<rect x="620" y="220" width="180" height="180" class="f-crit"/>
<text x="710" y="243" text-anchor="middle" class="f-tc">GESTAÇÃO</text>
<text x="710" y="265" text-anchor="middle" class="f-ts">⛔ IECA/BRA</text>
<text x="710" y="283" text-anchor="middle" class="f-ts">CONTRAINDICADO</text>
<text x="710" y="305" text-anchor="middle" class="f-ts">METILDOPA 1ª linha</text>
<text x="710" y="323" text-anchor="middle" class="f-ts">Nifedipino retard</text>
<text x="710" y="341" text-anchor="middle" class="f-ts">Hidralazina</text>
<text x="710" y="363" text-anchor="middle" class="f-ts">Labetalol</text>
<text x="710" y="381" text-anchor="middle" class="f-ts">Idade fértil: cuidado</text>
<line x1="410" y1="405" x2="410" y2="435" class="f-arr" marker-end="url(#arr-h)"/>
<rect x="80" y="440" width="660" height="80" class="f-rect"/>
<text x="410" y="463" text-anchor="middle" class="f-tc">PA NÃO ATINGE ALVO COM 1 DROGA EM 4-6 SEM</text>
<text x="410" y="483" text-anchor="middle" class="f-ts">→ Combinar 2ª droga de classe diferente (preferir A+C ou A+D)</text>
<text x="410" y="501" text-anchor="middle" class="f-ts">A=IECA/BRA · C=BCC · D=diurético tiazídico</text>
<line x1="410" y1="520" x2="410" y2="550" class="f-arr" marker-end="url(#arr-h)"/>
<rect x="80" y="555" width="660" height="80" class="f-rect"/>
<text x="410" y="578" text-anchor="middle" class="f-tc">PA AINDA NÃO ALVO COM 2 DROGAS</text>
<text x="410" y="598" text-anchor="middle" class="f-ts">→ Triplo: A + C + D (IECA + BCC + tiazídico) — combinação clássica</text>
<text x="410" y="616" text-anchor="middle" class="f-ts">Doses otimizadas, MAPA para excluir efeito jaleco branco</text>
<line x1="410" y1="635" x2="410" y2="665" class="f-arr" marker-end="url(#arr-h)"/>
<rect x="80" y="670" width="660" height="100" class="f-crit"/>
<text x="410" y="693" text-anchor="middle" class="f-tc">HAS RESISTENTE (3 drogas em dose máx, ainda ≥140/90)</text>
<text x="410" y="713" text-anchor="middle" class="f-ts">→ Investigar adesão (perguntar abertamente, não julgar)</text>
<text x="410" y="731" text-anchor="middle" class="f-ts">→ MAPA (excluir jaleco branco · 30% das "resistentes" são pseudo)</text>
<text x="410" y="749" text-anchor="middle" class="f-ts">→ Causas 2árias: SAOS · aldosteronismo · doença renovascular · Cushing</text>
<text x="410" y="767" text-anchor="middle" class="f-ts">→ Adicionar 4ª droga: ESPIRONOLACTONA 25 mg (1ª escolha em resistência)</text>
<line x1="410" y1="775" x2="410" y2="805" class="f-arr" marker-end="url(#arr-h)"/>
<rect x="240" y="810" width="340" height="60" class="f-warn"/>
<text x="410" y="835" text-anchor="middle" class="f-tc">Encaminhar Nefro / Cardio</text>
<text x="410" y="855" text-anchor="middle" class="f-ts">Refratária ou suspeita 2ária</text>
</svg>`
};

FLOWS["flow-dm2-escalada"] = {
titulo: "DM2 — Escalada Terapêutica (SBD/ADA/EASD 2024)",
fonte: "SBD 2024; ADA Standards of Care 2024; EASD 2023",
svg: `<svg viewBox="0 0 820 1080" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-dm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
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
<rect x="200" y="20" width="420" height="70" class="f-start"/>
<text x="410" y="48" text-anchor="middle" class="f-tw">DM2 diagnosticado · alvo HbA1c individualizado</text>
<text x="410" y="68" text-anchor="middle" class="f-tw" style="font-size:11px">Jovem &lt;7% · Idoso saudável &lt;7,5% · Idoso frágil &lt;8%</text>
<line x1="410" y1="90" x2="410" y2="120" class="f-arr" marker-end="url(#arr-dm)"/>
<rect x="80" y="125" width="660" height="100" class="f-rect"/>
<text x="410" y="148" text-anchor="middle" class="f-tc">AVALIAR RISCO/COMORBIDADES</text>
<text x="410" y="168" text-anchor="middle" class="f-ts">RCV alto/muito alto · IC · DRC · obesidade · idade · custo · risco hipoglicemia</text>
<text x="410" y="186" text-anchor="middle" class="f-ts">HbA1c inicial · sintomatologia · adesão prevista · contraindicações</text>
<text x="410" y="206" text-anchor="middle" class="f-ts">MEV concomitante sempre (dieta, exercício, peso, sono)</text>
<line x1="410" y1="225" x2="410" y2="255" class="f-arr" marker-end="url(#arr-dm)"/>
<polygon points="410,260 620,350 410,440 200,350" class="f-dec"/>
<text x="410" y="335" text-anchor="middle" class="f-t">HbA1c ≥10% sintomática</text>
<text x="410" y="353" text-anchor="middle" class="f-t">OU cetonúria</text>
<text x="410" y="371" text-anchor="middle" class="f-t">OU perda peso?</text>
<line x1="200" y1="350" x2="80" y2="350" class="f-arr" marker-end="url(#arr-dm)"/>
<text x="140" y="342" text-anchor="middle" class="f-no">NÃO</text>
<line x1="620" y1="350" x2="740" y2="350" class="f-arr" marker-end="url(#arr-dm)"/>
<text x="680" y="342" text-anchor="middle" class="f-yes">SIM</text>
<rect x="620" y="475" width="180" height="140" class="f-crit"/>
<text x="710" y="498" text-anchor="middle" class="f-tc">INSULINA URGENTE</text>
<text x="710" y="518" text-anchor="middle" class="f-ts">NPH ou glargina basal</text>
<text x="710" y="536" text-anchor="middle" class="f-ts">0,2-0,3 UI/kg/dia</text>
<text x="710" y="556" text-anchor="middle" class="f-ts">+ Metformina</text>
<text x="710" y="576" text-anchor="middle" class="f-ts">Cetoacidose?</text>
<text x="710" y="594" text-anchor="middle" class="f-ts">→ Encaminhar PS</text>
<text x="710" y="612" text-anchor="middle" class="f-ts">Considerar DM1/LADA</text>
<rect x="20" y="475" width="180" height="80" class="f-ok"/>
<text x="110" y="498" text-anchor="middle" class="f-tc">METFORMINA</text>
<text x="110" y="520" text-anchor="middle" class="f-ts">500-2000 mg/dia</text>
<text x="110" y="538" text-anchor="middle" class="f-ts">Titular 4-12 sem</text>
<line x1="110" y1="555" x2="110" y2="580" class="f-arr" marker-end="url(#arr-dm)"/>
<rect x="20" y="585" width="180" height="100" class="f-rect"/>
<text x="110" y="608" text-anchor="middle" class="f-tc">Reavaliar 3 meses</text>
<text x="110" y="628" text-anchor="middle" class="f-ts">Alvo HbA1c?</text>
<text x="110" y="646" text-anchor="middle" class="f-ts">SIM → manter + MEV</text>
<text x="110" y="664" text-anchor="middle" class="f-ts">NÃO → escalonar</text>
<rect x="240" y="475" width="340" height="220" class="f-warn"/>
<text x="410" y="498" text-anchor="middle" class="f-tc">ESCALONAR: ESCOLHER POR PERFIL</text>
<text x="410" y="520" text-anchor="middle" class="f-ts">RCV ALTO/IC/DRC: prioridade SGLT2 ou GLP-1</text>
<text x="410" y="540" text-anchor="middle" class="f-ts">→ DAPA/EMPA (CEAF DM2+RCV)</text>
<text x="410" y="558" text-anchor="middle" class="f-ts">→ Liraglutida/Semaglutida (CEAF)</text>
<text x="410" y="580" text-anchor="middle" class="f-ts">OBESIDADE: GLP-1 (perda peso)</text>
<text x="410" y="600" text-anchor="middle" class="f-ts">SEM RCV alto + custo: sulfonilureia</text>
<text x="410" y="618" text-anchor="middle" class="f-ts">→ GLICLAZIDA MR 30-120 (UBS/PFPB)</text>
<text x="410" y="638" text-anchor="middle" class="f-ts">⚠ Glibenclamida em idoso: EVITAR (Beers)</text>
<text x="410" y="660" text-anchor="middle" class="f-ts">DPP-4 (sitagliptina): perfil benigno, CEAF</text>
<text x="410" y="678" text-anchor="middle" class="f-ts">Pioglitazona: cuidado IC/fratura/CA bexiga</text>
<line x1="110" y1="685" x2="110" y2="720" class="f-arr" marker-end="url(#arr-dm)"/>
<line x1="410" y1="695" x2="410" y2="720" class="f-arr" marker-end="url(#arr-dm)"/>
<rect x="80" y="725" width="660" height="100" class="f-rect"/>
<text x="410" y="748" text-anchor="middle" class="f-tc">Reavaliar 3 meses · TERAPIA TRIPLA se necessário</text>
<text x="410" y="768" text-anchor="middle" class="f-ts">Combinar classes complementares (MET + SGLT2 + GLP-1 é potente)</text>
<text x="410" y="786" text-anchor="middle" class="f-ts">Considerar INSULINIZAR se HbA1c &gt;9% apesar de combinação oral</text>
<text x="410" y="804" text-anchor="middle" class="f-ts">Insulina basal (NPH HS) → progredir para basal-bolus se necessário</text>
<line x1="410" y1="825" x2="410" y2="855" class="f-arr" marker-end="url(#arr-dm)"/>
<rect x="80" y="860" width="660" height="130" class="f-crit"/>
<text x="410" y="883" text-anchor="middle" class="f-tc">RASTREIO E PREVENÇÃO DE COMPLICAÇÕES</text>
<text x="410" y="903" text-anchor="middle" class="f-ts">Anual: HbA1c · função renal (RAC) · lipidograma · ECG · pé · fundo de olho</text>
<text x="410" y="921" text-anchor="middle" class="f-ts">Estatina alta intensidade · IECA/BRA se HAS/proteinúria · AAS em DAC</text>
<text x="410" y="939" text-anchor="middle" class="f-ts">Vacinação anual: influenza + pneumocócica + COVID + hep B</text>
<text x="410" y="957" text-anchor="middle" class="f-ts">Educação cont. + nutricionista NASF + Academia da Saúde</text>
<text x="410" y="975" text-anchor="middle" class="f-ts">⚠ Hipoglicemia em idoso = REVISAR esquema, NÃO intensificar</text>
</svg>`
};

FLOWS["flow-itu-decisao"] = {
titulo: "ITU — Decisão Clínica (Cistite, Pielonefrite, Recorrente, Gestante)",
fonte: "IDSA 2024; SBN 2023; EAU 2024; CDC 2024",
svg: `<svg viewBox="0 0 820 980" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-i" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
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
<rect x="200" y="20" width="420" height="70" class="f-start"/>
<text x="410" y="48" text-anchor="middle" class="f-tw">Sintoma urinário (disúria, polaciúria, urgência)</text>
<text x="410" y="68" text-anchor="middle" class="f-tw" style="font-size:11px">Avaliação clínica + EAS/urina I</text>
<line x1="410" y1="90" x2="410" y2="120" class="f-arr" marker-end="url(#arr-i)"/>
<polygon points="410,125 620,210 410,295 200,210" class="f-dec"/>
<text x="410" y="195" text-anchor="middle" class="f-t">Febre · dor lombar</text>
<text x="410" y="213" text-anchor="middle" class="f-t">· vômito · prostração</text>
<text x="410" y="231" text-anchor="middle" class="f-t">Giordano +?</text>
<line x1="200" y1="210" x2="80" y2="210" class="f-arr" marker-end="url(#arr-i)"/>
<text x="140" y="202" text-anchor="middle" class="f-no">NÃO</text>
<line x1="620" y1="210" x2="740" y2="210" class="f-arr" marker-end="url(#arr-i)"/>
<text x="680" y="202" text-anchor="middle" class="f-yes">SIM</text>
<rect x="20" y="305" width="180" height="100" class="f-ok"/>
<text x="110" y="328" text-anchor="middle" class="f-tc">CISTITE</text>
<text x="110" y="348" text-anchor="middle" class="f-ts">Sintoma baixo isolado</text>
<text x="110" y="366" text-anchor="middle" class="f-ts">Sem febre/lombar</text>
<text x="110" y="384" text-anchor="middle" class="f-ts">EAS: nitrito + leuco +</text>
<rect x="620" y="305" width="180" height="100" class="f-crit"/>
<text x="710" y="328" text-anchor="middle" class="f-tc">PIELONEFRITE</text>
<text x="710" y="348" text-anchor="middle" class="f-ts">Sintoma alto</text>
<text x="710" y="366" text-anchor="middle" class="f-ts">Hemocultura + urocultura</text>
<text x="710" y="384" text-anchor="middle" class="f-ts">se internação</text>
<line x1="110" y1="405" x2="110" y2="435" class="f-arr" marker-end="url(#arr-i)"/>
<line x1="710" y1="405" x2="710" y2="435" class="f-arr" marker-end="url(#arr-i)"/>
<rect x="20" y="440" width="180" height="160" class="f-rect"/>
<text x="110" y="463" text-anchor="middle" class="f-tc">ATB EMPÍRICO</text>
<text x="110" y="483" text-anchor="middle" class="f-ts">NITROFURANTOÍNA</text>
<text x="110" y="501" text-anchor="middle" class="f-ts">100 mg 6/6h · 5 d</text>
<text x="110" y="521" text-anchor="middle" class="f-ts">FOSFOMICINA</text>
<text x="110" y="539" text-anchor="middle" class="f-ts">3 g dose única</text>
<text x="110" y="559" text-anchor="middle" class="f-ts">SMX-TMP 7-10 d</text>
<text x="110" y="577" text-anchor="middle" class="f-ts">se resistência baixa</text>
<rect x="620" y="440" width="180" height="160" class="f-warn"/>
<text x="710" y="463" text-anchor="middle" class="f-tc">ATB INICIAL</text>
<text x="710" y="483" text-anchor="middle" class="f-ts">CIPROFLOXACINO</text>
<text x="710" y="501" text-anchor="middle" class="f-ts">500 mg 12/12h · 7 d</text>
<text x="710" y="521" text-anchor="middle" class="f-ts">SMX-TMP 14 d</text>
<text x="710" y="539" text-anchor="middle" class="f-ts">Pielonefrite grave:</text>
<text x="710" y="557" text-anchor="middle" class="f-ts">→ PS p/ ATB IV</text>
<text x="710" y="575" text-anchor="middle" class="f-ts">Ceftriaxona 1-2 g</text>
<rect x="240" y="305" width="340" height="120" class="f-warn"/>
<text x="410" y="328" text-anchor="middle" class="f-tc">GESTANTE — CISTITE</text>
<text x="410" y="348" text-anchor="middle" class="f-ts">Tratar SEMPRE (mesmo bacteriúria assintomática)</text>
<text x="410" y="366" text-anchor="middle" class="f-ts">UROCULTURA OBRIGATÓRIA antes</text>
<text x="410" y="386" text-anchor="middle" class="f-ts">CEFALEXINA 500 mg 6/6h · 7 d (1ª linha)</text>
<text x="410" y="404" text-anchor="middle" class="f-ts">Nitrofurantoína: NÃO no 3º trimestre</text>
<text x="410" y="422" text-anchor="middle" class="f-ts">⛔ SMX-TMP 1º+3º · ⛔ Ciprofloxacino · ⛔ Tetraciclina</text>
<line x1="410" y1="425" x2="410" y2="460" class="f-arr" marker-end="url(#arr-i)"/>
<rect x="240" y="465" width="340" height="120" class="f-rect"/>
<text x="410" y="488" text-anchor="middle" class="f-tc">ITU RECORRENTE (≥2/6m ou ≥3/ano)</text>
<text x="410" y="508" text-anchor="middle" class="f-ts">Avaliar: anatomia (USG), DM, menopausa</text>
<text x="410" y="526" text-anchor="middle" class="f-ts">Pós-coital: dose única ATB após relação</text>
<text x="410" y="544" text-anchor="middle" class="f-ts">Profilática: nitrofurantoína 50-100 mg HS 3-6 m</text>
<text x="410" y="562" text-anchor="middle" class="f-ts">Mulher peri/pós-meno: estrogênio tópico vaginal</text>
<text x="410" y="580" text-anchor="middle" class="f-ts">Hidratação · evitar espermicida · ?cranberry</text>
<line x1="110" y1="600" x2="110" y2="635" class="f-arr" marker-end="url(#arr-i)"/>
<line x1="710" y1="600" x2="710" y2="635" class="f-arr" marker-end="url(#arr-i)"/>
<rect x="20" y="640" width="780" height="100" class="f-ok"/>
<text x="410" y="663" text-anchor="middle" class="f-tc">REAVALIAR 48-72h</text>
<text x="410" y="683" text-anchor="middle" class="f-ts">Melhorou: completar ATB · NÃO repetir EAS de controle se assintomático</text>
<text x="410" y="701" text-anchor="middle" class="f-ts">Persistência ou piora: REPETIR urocultura · trocar ATB conforme antibiograma</text>
<text x="410" y="719" text-anchor="middle" class="f-ts">⚠ Febre persistente em pielonefrite → USG vias urinárias (obstrução, abscesso)</text>
<line x1="410" y1="740" x2="410" y2="770" class="f-arr" marker-end="url(#arr-i)"/>
<rect x="80" y="775" width="660" height="120" class="f-crit"/>
<text x="410" y="798" text-anchor="middle" class="f-tc">⚠ ATENÇÃO ESPECIAL</text>
<text x="410" y="818" text-anchor="middle" class="f-ts">HOMEM com ITU = anormal (até prova contrária) — USG · próstata · investigar</text>
<text x="410" y="836" text-anchor="middle" class="f-ts">CRIANÇA com ITU = avaliar refluxo vésicoureteral (USG, UCM)</text>
<text x="410" y="854" text-anchor="middle" class="f-ts">SEPSE urinária / pielonefrite obstrutiva → PS imediato</text>
<text x="410" y="872" text-anchor="middle" class="f-ts">Bacteriúria assintomática em NÃO-gestante e NÃO-pré-op urológico: NÃO TRATAR</text>
</svg>`
};

FLOWS["flow-dor-lombar"] = {
titulo: "Dor Lombar — Triagem de Red Flags e Conduta",
fonte: "SBR 2024; NICE NG59 2020; ACP 2017",
svg: `<svg viewBox="0 0 820 980" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-l" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
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
<rect x="200" y="20" width="420" height="70" class="f-start"/>
<text x="410" y="48" text-anchor="middle" class="f-tw">Paciente com DOR LOMBAR</text>
<text x="410" y="68" text-anchor="middle" class="f-tw" style="font-size:11px">Caracterizar: tempo · padrão · irradiação · impacto</text>
<line x1="410" y1="90" x2="410" y2="120" class="f-arr" marker-end="url(#arr-l)"/>
<rect x="80" y="125" width="660" height="120" class="f-crit"/>
<text x="410" y="148" text-anchor="middle" class="f-tc">RED FLAGS — STOP! (encaminhar urgência)</text>
<text x="410" y="168" text-anchor="middle" class="f-ts">⚠ CAUDA EQUINA: anestesia em sela + retenção urinária + déficit motor MMII</text>
<text x="410" y="186" text-anchor="middle" class="f-ts">⚠ Déficit motor radicular novo/progressivo (queda de pé, fraqueza quadríceps)</text>
<text x="410" y="204" text-anchor="middle" class="f-ts">⚠ Trauma + dor súbita (fratura) · &gt;50a com dor noturna + perda peso (CA)</text>
<text x="410" y="222" text-anchor="middle" class="f-ts">⚠ Febre + dor (osteomielite/abscesso) · Imunossupressão · HX câncer · UDEV</text>
<line x1="410" y1="245" x2="410" y2="275" class="f-arr" marker-end="url(#arr-l)"/>
<polygon points="410,280 620,365 410,450 200,365" class="f-dec"/>
<text x="410" y="350" text-anchor="middle" class="f-t">Red flag presente?</text>
<line x1="200" y1="365" x2="80" y2="365" class="f-arr" marker-end="url(#arr-l)"/>
<text x="140" y="357" text-anchor="middle" class="f-no">NÃO</text>
<line x1="620" y1="365" x2="740" y2="365" class="f-arr" marker-end="url(#arr-l)"/>
<text x="680" y="357" text-anchor="middle" class="f-yes">SIM</text>
<rect x="620" y="460" width="180" height="120" class="f-crit"/>
<text x="710" y="483" text-anchor="middle" class="f-tc">ENCAMINHAR PS</text>
<text x="710" y="503" text-anchor="middle" class="f-ts">Cauda equina: emergência!</text>
<text x="710" y="523" text-anchor="middle" class="f-ts">RM URGENTE</text>
<text x="710" y="543" text-anchor="middle" class="f-ts">Neurocirurgia/Ortopedia</text>
<text x="710" y="563" text-anchor="middle" class="f-ts">↓ janela cirúrgica</text>
<polygon points="200,475 380,560 200,645 20,560" class="f-dec"/>
<text x="200" y="545" text-anchor="middle" class="f-t">Tempo de evolução?</text>
<line x1="20" y1="560" x2="20" y2="660" class="f-arr"/>
<line x1="20" y1="660" x2="100" y2="660" class="f-arr" marker-end="url(#arr-l)"/>
<text x="60" y="550" class="f-ts">Aguda</text>
<text x="60" y="565" class="f-ts">&lt;6 sem</text>
<line x1="200" y1="645" x2="200" y2="675" class="f-arr" marker-end="url(#arr-l)"/>
<text x="220" y="660" class="f-ts">Subaguda 6-12sem</text>
<line x1="380" y1="560" x2="500" y2="560" class="f-arr"/>
<line x1="500" y1="560" x2="500" y2="660" class="f-arr"/>
<line x1="500" y1="660" x2="420" y2="660" class="f-arr" marker-end="url(#arr-l)"/>
<text x="450" y="550" class="f-ts">Crônica</text>
<text x="450" y="565" class="f-ts">&gt;12 sem</text>
<rect x="105" y="665" width="170" height="140" class="f-ok"/>
<text x="190" y="685" text-anchor="middle" class="f-tc">AGUDA</text>
<text x="190" y="705" text-anchor="middle" class="f-ts">SEM imagem</text>
<text x="190" y="723" text-anchor="middle" class="f-ts">Analgesia (parac, AINE)</text>
<text x="190" y="741" text-anchor="middle" class="f-ts">Movimento (não-repouso)</text>
<text x="190" y="759" text-anchor="middle" class="f-ts">Tranquilizar</text>
<text x="190" y="777" text-anchor="middle" class="f-ts">Maioria melhora 4-6 sem</text>
<text x="190" y="795" text-anchor="middle" class="f-ts">Retorno se persistir</text>
<rect x="290" y="665" width="170" height="140" class="f-warn"/>
<text x="375" y="685" text-anchor="middle" class="f-tc">SUBAGUDA</text>
<text x="375" y="705" text-anchor="middle" class="f-ts">Reavaliar red flags</text>
<text x="375" y="723" text-anchor="middle" class="f-ts">Reabilitação ATIVA</text>
<text x="375" y="741" text-anchor="middle" class="f-ts">Fisioterapia</text>
<text x="375" y="759" text-anchor="middle" class="f-ts">Manejo psicossocial</text>
<text x="375" y="777" text-anchor="middle" class="f-ts">Imagem somente se</text>
<text x="375" y="795" text-anchor="middle" class="f-ts">cogitar cirurgia</text>
<rect x="475" y="665" width="170" height="140" class="f-warn"/>
<text x="560" y="685" text-anchor="middle" class="f-tc">CRÔNICA</text>
<text x="560" y="705" text-anchor="middle" class="f-ts">Educação dor crônica</text>
<text x="560" y="723" text-anchor="middle" class="f-ts">Exercício terapêutico</text>
<text x="560" y="741" text-anchor="middle" class="f-ts">(qualquer modalidade</text>
<text x="560" y="759" text-anchor="middle" class="f-ts">que paciente adere)</text>
<text x="560" y="777" text-anchor="middle" class="f-ts">Amitriptilina · duloxetina</text>
<text x="560" y="795" text-anchor="middle" class="f-ts">se neuropática</text>
<line x1="200" y1="810" x2="200" y2="840" class="f-arr" marker-end="url(#arr-l)"/>
<line x1="375" y1="810" x2="375" y2="840" class="f-arr" marker-end="url(#arr-l)"/>
<line x1="560" y1="810" x2="560" y2="840" class="f-arr" marker-end="url(#arr-l)"/>
<rect x="40" y="845" width="760" height="100" class="f-rect"/>
<text x="420" y="868" text-anchor="middle" class="f-tc">P4 — PREVENÇÃO QUATERNÁRIA</text>
<text x="420" y="888" text-anchor="middle" class="f-ts">⛔ NÃO imagem rotineira em lombalgia mecânica sem red flags (achados incidentais!)</text>
<text x="420" y="906" text-anchor="middle" class="f-ts">⛔ NÃO opioides forte em lombalgia crônica · ⛔ NÃO repouso prolongado</text>
<text x="420" y="924" text-anchor="middle" class="f-ts">⛔ NÃO 'cirurgia para resolver' em lombalgia inespecífica sem indicação clara</text>
</svg>`
};

FLOWS["flow-dispepsia"] = {
titulo: "Dispepsia — Investigação e Test-and-Treat H. pylori",
fonte: "Maastricht VI 2022; ACG/CAG 2017; Rome IV/V; PCDT-MS",
svg: `<svg viewBox="0 0 820 980" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
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
.f-yes{font:600 11px var(--font-mono);fill:var(--ok)}
.f-no{font:600 11px var(--font-mono);fill:var(--accent)}
</style>
<rect x="200" y="20" width="420" height="70" class="f-start"/>
<text x="410" y="48" text-anchor="middle" class="f-tw">Dispepsia (epigastralgia/queimação ≥3 meses)</text>
<text x="410" y="68" text-anchor="middle" class="f-tw" style="font-size:11px">Avaliação clínica e fatores de risco</text>
<line x1="410" y1="90" x2="410" y2="120" class="f-arr" marker-end="url(#arr-dp)"/>
<rect x="80" y="125" width="660" height="100" class="f-crit"/>
<text x="410" y="148" text-anchor="middle" class="f-tc">RED FLAGS — EDA URGENTE</text>
<text x="410" y="168" text-anchor="middle" class="f-ts">⚠ Idade ≥55a com dispepsia NOVA · ⚠ Sangramento (melena, hematêmese)</text>
<text x="410" y="186" text-anchor="middle" class="f-ts">⚠ Anemia · ⚠ Perda de peso involuntária · ⚠ Disfagia/odinofagia</text>
<text x="410" y="204" text-anchor="middle" class="f-ts">⚠ Vômitos persistentes · ⚠ Massa epigástrica · ⚠ HX familiar CA gástrico/esôfago</text>
<line x1="410" y1="225" x2="410" y2="260" class="f-arr" marker-end="url(#arr-dp)"/>
<polygon points="410,265 620,355 410,445 200,355" class="f-dec"/>
<text x="410" y="340" text-anchor="middle" class="f-t">Red flag presente?</text>
<text x="410" y="358" text-anchor="middle" class="f-t">OU idade ≥55a?</text>
<line x1="200" y1="355" x2="80" y2="355" class="f-arr" marker-end="url(#arr-dp)"/>
<text x="140" y="347" text-anchor="middle" class="f-no">NÃO</text>
<line x1="620" y1="355" x2="740" y2="355" class="f-arr" marker-end="url(#arr-dp)"/>
<text x="680" y="347" text-anchor="middle" class="f-yes">SIM</text>
<rect x="620" y="465" width="180" height="120" class="f-crit"/>
<text x="710" y="488" text-anchor="middle" class="f-tc">EDA</text>
<text x="710" y="510" text-anchor="middle" class="f-ts">Pesquisar H. pylori</text>
<text x="710" y="528" text-anchor="middle" class="f-ts">(biópsia gástrica)</text>
<text x="710" y="548" text-anchor="middle" class="f-ts">Investigar CA, úlcera,</text>
<text x="710" y="566" text-anchor="middle" class="f-ts">esofagite, varizes</text>
<text x="710" y="584" text-anchor="middle" class="f-ts">Encaminhar GASTRO</text>
<rect x="20" y="465" width="380" height="80" class="f-ok"/>
<text x="210" y="488" text-anchor="middle" class="f-tc">TEST-AND-TREAT H. pylori</text>
<text x="210" y="510" text-anchor="middle" class="f-ts">Antígeno fecal OU urease respiratório</text>
<text x="210" y="528" text-anchor="middle" class="f-ts">(sorologia não confirma ativo)</text>
<line x1="210" y1="545" x2="210" y2="575" class="f-arr" marker-end="url(#arr-dp)"/>
<polygon points="210,580 380,650 210,720 40,650" class="f-dec"/>
<text x="210" y="640" text-anchor="middle" class="f-t">H. pylori +?</text>
<line x1="40" y1="650" x2="-20" y2="650" class="f-arr"/>
<text x="20" y="640" text-anchor="middle" class="f-no">NÃO</text>
<line x1="380" y1="650" x2="430" y2="650" class="f-arr" marker-end="url(#arr-dp)"/>
<text x="405" y="640" text-anchor="middle" class="f-yes">SIM</text>
<rect x="440" y="615" width="200" height="80" class="f-warn"/>
<text x="540" y="638" text-anchor="middle" class="f-tc">ERRADICAÇÃO 14 dias</text>
<text x="540" y="658" text-anchor="middle" class="f-ts">Amoxi 1g 12/12h</text>
<text x="540" y="674" text-anchor="middle" class="f-ts">+ Claritro 500 12/12h</text>
<text x="540" y="690" text-anchor="middle" class="f-ts">+ Omepra 20 12/12h</text>
<rect x="20" y="735" width="380" height="80" class="f-rect"/>
<text x="210" y="758" text-anchor="middle" class="f-tc">Teste empírico IBP</text>
<text x="210" y="778" text-anchor="middle" class="f-ts">Omeprazol 20 mg/dia · 4-8 semanas</text>
<text x="210" y="796" text-anchor="middle" class="f-ts">Reavaliar clínica</text>
<line x1="540" y1="695" x2="540" y2="730" class="f-arr" marker-end="url(#arr-dp)"/>
<rect x="440" y="735" width="200" height="100" class="f-rect"/>
<text x="540" y="758" text-anchor="middle" class="f-tc">Confirmar erradicação</text>
<text x="540" y="778" text-anchor="middle" class="f-ts">Antígeno fecal/urease</text>
<text x="540" y="796" text-anchor="middle" class="f-ts">4-8 sem após tratamento</text>
<text x="540" y="814" text-anchor="middle" class="f-ts">Se falha: 2ª linha</text>
<text x="540" y="830" text-anchor="middle" class="f-ts">(levofloxacino/bismuto)</text>
<line x1="210" y1="815" x2="210" y2="845" class="f-arr" marker-end="url(#arr-dp)"/>
<line x1="540" y1="835" x2="540" y2="865" class="f-arr" marker-end="url(#arr-dp)"/>
<rect x="80" y="855" width="660" height="90" class="f-warn"/>
<text x="410" y="878" text-anchor="middle" class="f-tc">PERSISTÊNCIA DE SINTOMAS APÓS TRATAMENTO</text>
<text x="410" y="898" text-anchor="middle" class="f-ts">→ Encaminhar EDA · DESMAMAR IBP gradualmente (efeito rebote)</text>
<text x="410" y="916" text-anchor="middle" class="f-ts">→ Considerar dispepsia funcional + procinético, amitriptilina baixa, manejo estresse</text>
<text x="410" y="934" text-anchor="middle" class="f-ts">⛔ NÃO IBP indefinido sem indicação · ⛔ NÃO 'protetor gástrico' rotineiro</text>
</svg>`
};

