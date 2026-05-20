/* ===========================================================
   VOVÔMINIC EMERGÊNCIA — flows/pali.js
   8 fluxogramas
   =========================================================== */

FLOWS["escada-oms"] = {
titulo: "Escada Analgésica da OMS Adaptada — Dor Oncológica",
fonte: "OMS Cancer Pain Relief 1986/2018; ANCP",
svg: `<svg viewBox="0 0 860 1080" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-oms" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
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
<rect x="290" y="20" width="280" height="50" class="f-start"/>
<text x="430" y="42" text-anchor="middle" class="f-tw">Dor em paciente oncológico</text>
<text x="430" y="60" text-anchor="middle" class="f-tw" style="font-size:11px">Avaliar EVA 0-10 + tipo + adjuvantes</text>
<line x1="430" y1="70" x2="430" y2="100" class="f-arr" marker-end="url(#arr-oms)"/>

<rect x="100" y="105" width="660" height="60" class="f-rect"/>
<text x="430" y="128" text-anchor="middle" class="f-t">CARACTERIZAR a dor</text>
<text x="430" y="148" text-anchor="middle" class="f-ts">Intensidade (EVA) + tipo (nociceptiva/neuropática/mista) + somática/visceral + adjuvantes necessários</text>
<line x1="430" y1="165" x2="430" y2="195" class="f-arr" marker-end="url(#arr-oms)"/>

<rect x="50" y="200" width="220" height="170" class="f-ok"/>
<text x="160" y="225" text-anchor="middle" class="f-t">DEGRAU 1 — Dor LEVE</text>
<text x="160" y="244" text-anchor="middle" class="f-ts">EVA 1-3</text>
<text x="160" y="268" text-anchor="middle" class="f-ts">DIPIRONA 1 g 6/6h</text>
<text x="160" y="286" text-anchor="middle" class="f-ts">OU PARACETAMOL 750mg 6/6h</text>
<text x="160" y="304" text-anchor="middle" class="f-ts">± AINE (uso cauteloso)</text>
<text x="160" y="328" text-anchor="middle" class="f-tc">+ Adjuvantes desde já:</text>
<text x="160" y="346" text-anchor="middle" class="f-ts">neuropática→gaba/preg/ADT</text>
<text x="160" y="362" text-anchor="middle" class="f-ts">óssea→dexa+RT+bifosfonato</text>

<rect x="320" y="200" width="220" height="170" class="f-warn"/>
<text x="430" y="225" text-anchor="middle" class="f-t">DEGRAU 2 — MODERADA</text>
<text x="430" y="244" text-anchor="middle" class="f-ts">EVA 4-6 (em desuso —</text>
<text x="430" y="260" text-anchor="middle" class="f-ts">subir direto a morfina)</text>
<text x="430" y="284" text-anchor="middle" class="f-ts">TRAMADOL 50-100mg 6/6h</text>
<text x="430" y="302" text-anchor="middle" class="f-ts">OU CODEÍNA 30-60mg 6/6h</text>
<text x="430" y="320" text-anchor="middle" class="f-ts">± Degrau 1 + adjuvantes</text>
<text x="430" y="346" text-anchor="middle" class="f-tc">CUIDADO TRAMADOL:</text>
<text x="430" y="362" text-anchor="middle" class="f-ts">convulsão, sd serotoninérgica</text>

<rect x="590" y="200" width="220" height="170" class="f-crit"/>
<text x="700" y="225" text-anchor="middle" class="f-t">DEGRAU 3 — SEVERA</text>
<text x="700" y="244" text-anchor="middle" class="f-ts">EVA 7-10</text>
<text x="700" y="268" text-anchor="middle" class="f-tc">MORFINA — 1ª LINHA</text>
<text x="700" y="286" text-anchor="middle" class="f-ts">Opioide-naive:</text>
<text x="700" y="304" text-anchor="middle" class="f-ts">5-10 mg VO 4/4h</text>
<text x="700" y="322" text-anchor="middle" class="f-ts">+ resgate 5 mg 1/1h</text>
<text x="700" y="346" text-anchor="middle" class="f-tc">Idoso/IRC: 2,5-5 mg</text>
<text x="700" y="362" text-anchor="middle" class="f-ts">± Degrau 1 + adjuvantes</text>

<line x1="700" y1="370" x2="700" y2="405" class="f-arr" marker-end="url(#arr-oms)"/>

<rect x="540" y="410" width="320" height="105" class="f-rect"/>
<text x="700" y="432" text-anchor="middle" class="f-t">Após 24-48h titular</text>
<text x="700" y="452" text-anchor="middle" class="f-ts">Somar TOTAL/24h (basal + resgates)</text>
<text x="700" y="468" text-anchor="middle" class="f-ts">→ Converter para MORFINA LP 12/12h</text>
<text x="700" y="486" text-anchor="middle" class="f-ts">Manter 10-15% da dose total como</text>
<text x="700" y="502" text-anchor="middle" class="f-ts">RESGATE 1/1h para breakthrough</text>

<line x1="700" y1="515" x2="700" y2="545" class="f-arr" marker-end="url(#arr-oms)"/>

<rect x="540" y="550" width="320" height="125" class="f-warn"/>
<text x="700" y="575" text-anchor="middle" class="f-t">VIA SC quando VO inviável</text>
<text x="700" y="595" text-anchor="middle" class="f-ts">vômito, disfagia, obstrução, agonia</text>
<text x="700" y="615" text-anchor="middle" class="f-tc">Conversão VO→SC: ÷ 2</text>
<text x="700" y="633" text-anchor="middle" class="f-ts">Ex: morfina VO 30 mg = SC 15 mg</text>
<text x="700" y="651" text-anchor="middle" class="f-ts">4/4h SC OU bomba 4-8 mg/h</text>
<text x="700" y="667" text-anchor="middle" class="f-ts">Sítios: deltoide, abdome, coxa</text>

<rect x="50" y="410" width="450" height="265" class="f-rect"/>
<text x="275" y="432" text-anchor="middle" class="f-t">PROFILAXIA OBRIGATÓRIA — Efeitos Colaterais</text>
<text x="275" y="455" text-anchor="middle" class="f-tc">CONSTIPAÇÃO (UNIVERSAL — 100%)</text>
<text x="275" y="473" text-anchor="middle" class="f-ts">⚠ Prescrever com a 1ª dose de opioide</text>
<text x="275" y="491" text-anchor="middle" class="f-ts">BISACODIL 10 mg HS + LACTULOSE 15-30 mL 12/12h</text>
<text x="275" y="515" text-anchor="middle" class="f-tc">NÁUSEA (30% inicial — passa 5-7d)</text>
<text x="275" y="533" text-anchor="middle" class="f-ts">HALOPERIDOL 0,5-2 mg 12/12h ad lib</text>
<text x="275" y="557" text-anchor="middle" class="f-tc">SEDAÇÃO INICIAL (passa 3-5d)</text>
<text x="275" y="575" text-anchor="middle" class="f-ts">Persistente: reduzir 25% ou rotacionar</text>
<text x="275" y="599" text-anchor="middle" class="f-tc">PRURIDO → anti-H1; refratário → rotacionar</text>
<text x="275" y="617" text-anchor="middle" class="f-tc">MIOCLONIA/DELIRIUM → toxicidade</text>
<text x="275" y="635" text-anchor="middle" class="f-ts">Especialmente IRC + morfina (M3G/M6G)</text>
<text x="275" y="653" text-anchor="middle" class="f-ts">→ ROTACIONAR para fentanil/buprenorfina/metadona</text>

<line x1="430" y1="675" x2="430" y2="705" class="f-arr" marker-end="url(#arr-oms)"/>

<rect x="100" y="710" width="660" height="115" class="f-warn"/>
<text x="430" y="735" text-anchor="middle" class="f-t">ROTAÇÃO DE OPIOIDES — quando indicar</text>
<text x="430" y="755" text-anchor="middle" class="f-ts">Efeitos colaterais intoleráveis (mioclonia, alucinação) OU eficácia insuficiente OU toxicidade renal</text>
<text x="430" y="775" text-anchor="middle" class="f-tc">Equivalência (MEDD):  Morfina VO ≡ 1 (base)</text>
<text x="430" y="793" text-anchor="middle" class="f-ts">Codeína VO ≡ 0,15 | Tramadol VO ≡ 0,1-0,2 | Oxicodona VO ≡ 1,5</text>
<text x="430" y="809" text-anchor="middle" class="f-ts">Morfina SC ≡ 2-3× VO | Fentanil TD 25 mcg/h ≈ Morfina VO 60 mg/d</text>
<text x="430" y="821" text-anchor="middle" class="f-tc">REDUZIR 25-50% da dose calculada (cross-tolerance incompleta) → depois titular</text>

<line x1="430" y1="825" x2="430" y2="855" class="f-arr" marker-end="url(#arr-oms)"/>

<rect x="100" y="860" width="660" height="100" class="f-crit"/>
<text x="430" y="885" text-anchor="middle" class="f-t">DOR REFRATÁRIA — alternativas + referenciamento</text>
<text x="430" y="905" text-anchor="middle" class="f-ts">METADONA (NMDA antagonista, dor neuropática) — especialista | FENTANIL TD em dor estável</text>
<text x="430" y="923" text-anchor="middle" class="f-ts">OXICODONA LP | BUPRENORFINA TD (IRC, idoso)</text>
<text x="430" y="941" text-anchor="middle" class="f-tc">Equipe de paliativos: bloqueios, neurolíticos (plexo celíaco), RT paliativa, intervencionismo</text>

<rect x="100" y="975" width="660" height="80" class="f-ok"/>
<text x="430" y="1000" text-anchor="middle" class="f-t">PRINCÍPIOS CHAVE</text>
<text x="430" y="1018" text-anchor="middle" class="f-ts">⚠ Dor SEVERA = MORFINA DIRETA (não passar por tramadol/codeína)</text>
<text x="430" y="1034" text-anchor="middle" class="f-ts">⚠ Sem dose máxima — TITULAR pela dor + efeitos colaterais</text>
<text x="430" y="1050" text-anchor="middle" class="f-ts">⚠ Reavaliar SEMPRE: tipo, intensidade, função, resgates utilizados</text>
</svg>`
};

FLOWS["nausea-paliativa"] = {
titulo: "Náusea/Vômito em Paliativos — Manejo por Mecanismo",
fonte: "ANCP; NICE Palliative Care; MASCC",
svg: `<svg viewBox="0 0 860 1100" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-na" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
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
<rect x="290" y="20" width="280" height="50" class="f-start"/>
<text x="430" y="42" text-anchor="middle" class="f-tw">Náusea / Vômito em paciente paliativo</text>
<text x="430" y="60" text-anchor="middle" class="f-tw" style="font-size:11px">PRIMEIRO: identificar MECANISMO predominante</text>
<line x1="430" y1="70" x2="430" y2="100" class="f-arr" marker-end="url(#arr-na)"/>

<rect x="100" y="105" width="660" height="120" class="f-warn"/>
<text x="430" y="128" text-anchor="middle" class="f-t">AVALIAR REVERSÍVEIS primeiro</text>
<text x="430" y="148" text-anchor="middle" class="f-ts">Hipercalcemia (Ca corrigido), hiponatremia, uremia, hipoxia, fármaco recente</text>
<text x="430" y="166" text-anchor="middle" class="f-tc">⚠ TOQUE RETAL — descartar FECALOMA (causa frequente subestimada)</text>
<text x="430" y="186" text-anchor="middle" class="f-ts">Rx abdome — descartar obstrução intestinal (níveis hidroaéreos, distensão)</text>
<text x="430" y="206" text-anchor="middle" class="f-ts">HIC — dexametasona; constipação severa — manejo intensivo</text>

<line x1="430" y1="225" x2="430" y2="255" class="f-arr" marker-end="url(#arr-na)"/>

<text x="430" y="278" text-anchor="middle" class="f-t" style="font-size:14px">IDENTIFICAR MECANISMO PREDOMINANTE</text>

<rect x="20" y="295" width="200" height="190" class="f-rect"/>
<text x="120" y="320" text-anchor="middle" class="f-tc">(1) CTZ / QUÍMICO</text>
<text x="120" y="338" text-anchor="middle" class="f-ts">Opioide, quimio, uremia,</text>
<text x="120" y="354" text-anchor="middle" class="f-ts">hipercalcemia, infecção</text>
<text x="120" y="376" text-anchor="middle" class="f-t">HALOPERIDOL</text>
<text x="120" y="394" text-anchor="middle" class="f-ts">0,5-2 mg VO/SC 12/12h</text>
<text x="120" y="412" text-anchor="middle" class="f-ts">+ resgate 0,5-1 mg 1/1h</text>
<text x="120" y="434" text-anchor="middle" class="f-tc">Alternativas:</text>
<text x="120" y="452" text-anchor="middle" class="f-ts">Metoclopramida 10 mg 6/6h</text>
<text x="120" y="468" text-anchor="middle" class="f-ts">Ondansetrona 4-8 mg 8/8h</text>

<rect x="230" y="295" width="200" height="190" class="f-warn"/>
<text x="330" y="320" text-anchor="middle" class="f-tc">(2) ESTASE GÁSTRICA</text>
<text x="330" y="338" text-anchor="middle" class="f-ts">Saciedade precoce, plenitude,</text>
<text x="330" y="354" text-anchor="middle" class="f-ts">refluxo, dispepsia</text>
<text x="330" y="376" text-anchor="middle" class="f-t">METOCLOPRAMIDA</text>
<text x="330" y="394" text-anchor="middle" class="f-ts">10 mg VO/SC 6-8/8h</text>
<text x="330" y="410" text-anchor="middle" class="f-ts">30 min ANTES das refeições</text>
<text x="330" y="432" text-anchor="middle" class="f-ts">OU BROMOPRIDA 10 mg 8/8h</text>
<text x="330" y="455" text-anchor="middle" class="f-tc">⚠ NÃO USAR se</text>
<text x="330" y="471" text-anchor="middle" class="f-tc">obstrução mecânica</text>

<rect x="440" y="295" width="200" height="190" class="f-rect"/>
<text x="540" y="320" text-anchor="middle" class="f-tc">(3) VESTIBULAR</text>
<text x="540" y="338" text-anchor="middle" class="f-ts">Piora com mudança</text>
<text x="540" y="354" text-anchor="middle" class="f-ts">postural/movimento</text>
<text x="540" y="376" text-anchor="middle" class="f-t">DIMENIDRINATO</text>
<text x="540" y="394" text-anchor="middle" class="f-ts">50-100 mg 6-8/8h</text>
<text x="540" y="416" text-anchor="middle" class="f-t">OU PROMETAZINA</text>
<text x="540" y="434" text-anchor="middle" class="f-ts">25 mg 8-12/12h</text>
<text x="540" y="456" text-anchor="middle" class="f-ts">Escopolamina TD</text>
<text x="540" y="472" text-anchor="middle" class="f-ts">(adesivo retroauricular)</text>

<rect x="650" y="295" width="200" height="190" class="f-rect"/>
<text x="750" y="320" text-anchor="middle" class="f-tc">(4) CORTICAL</text>
<text x="750" y="338" text-anchor="middle" class="f-ts">Ansiedade, antecipação</text>
<text x="750" y="354" text-anchor="middle" class="f-ts">(ex: pré-quimio)</text>
<text x="750" y="376" text-anchor="middle" class="f-t">LORAZEPAM</text>
<text x="750" y="394" text-anchor="middle" class="f-ts">0,5-1 mg VO/SL</text>
<text x="750" y="410" text-anchor="middle" class="f-ts">antes do estímulo</text>
<text x="750" y="434" text-anchor="middle" class="f-tc">+ Suporte psicológico</text>
<text x="750" y="452" text-anchor="middle" class="f-ts">relaxamento, ambiente,</text>
<text x="750" y="468" text-anchor="middle" class="f-ts">não-farmacológicas</text>

<rect x="200" y="510" width="460" height="190" class="f-crit"/>
<text x="430" y="532" text-anchor="middle" class="f-t">(5) OBSTRUÇÃO INTESTINAL MALIGNA — abordagem TRÍADE</text>
<text x="430" y="555" text-anchor="middle" class="f-tc">DEXAMETASONA 8-16 mg/d SC/IV</text>
<text x="430" y="571" text-anchor="middle" class="f-ts">(reduz edema peritumoral, anti-inflamatório, antiemético)</text>
<text x="430" y="591" text-anchor="middle" class="f-tc">+ MORFINA SC para dor/cólica</text>
<text x="430" y="611" text-anchor="middle" class="f-tc">+ HIOSCINA BUTILBROMETO (Buscopan) 20 mg SC 6/6h</text>
<text x="430" y="627" text-anchor="middle" class="f-ts">(antiespasmódico para cólica)</text>
<text x="430" y="647" text-anchor="middle" class="f-tc">+ ANTIEMÉTICO: HALOPERIDOL (NÃO metoclopramida — pode piorar)</text>
<text x="430" y="667" text-anchor="middle" class="f-tc">REFRATÁRIO: OCTREOTIDA 100-300 mcg SC 8/8h</text>
<text x="430" y="683" text-anchor="middle" class="f-ts">(reduz secreção GI, descomprime alça — especialista)</text>

<line x1="430" y1="700" x2="430" y2="730" class="f-arr" marker-end="url(#arr-na)"/>

<rect x="100" y="735" width="660" height="135" class="f-warn"/>
<text x="430" y="760" text-anchor="middle" class="f-t">NÁUSEA REFRATÁRIA — combinar mecanismos diferentes</text>
<text x="430" y="780" text-anchor="middle" class="f-ts">Ex: HALOPERIDOL (D2) + ONDANSETRONA (5-HT3) + DEXAMETASONA (anti-inflam)</text>
<text x="430" y="804" text-anchor="middle" class="f-tc">LEVOMEPROMAZINA 6,25-12,5 mg VO/SC 12-24/24h</text>
<text x="430" y="820" text-anchor="middle" class="f-ts">'Limpa-tudo' — amplo espectro (D2, 5-HT, H1, muscarínico)</text>
<text x="430" y="838" text-anchor="middle" class="f-ts">Útil em mecanismo não claro ou multifatorial — sedativa</text>
<text x="430" y="858" text-anchor="middle" class="f-tc">Alternativa: OLANZAPINA 2,5-10 mg/d (off-label)</text>

<rect x="100" y="885" width="660" height="115" class="f-ok"/>
<text x="430" y="910" text-anchor="middle" class="f-t">MEDIDAS NÃO-FARMACOLÓGICAS</text>
<text x="430" y="930" text-anchor="middle" class="f-ts">Refeições pequenas e frequentes • Alimentos frios podem ser melhor tolerados</text>
<text x="430" y="948" text-anchor="middle" class="f-ts">Evitar odores fortes • Ambiente ventilado • Posição confortável</text>
<text x="430" y="966" text-anchor="middle" class="f-ts">Gengibre 1-2 g/d (chá, balas) • Aromaterapia (menta, limão)</text>
<text x="430" y="984" text-anchor="middle" class="f-tc">⚠ Em fase ativa: NÃO FORÇAR alimentação — comer pouco é normal</text>

<rect x="100" y="1015" width="660" height="60" class="f-crit"/>
<text x="430" y="1040" text-anchor="middle" class="f-t">PRINCÍPIOS CHAVE</text>
<text x="430" y="1060" text-anchor="middle" class="f-ts">⚠ ⚠ Tratar SEM identificar mecanismo geralmente FALHA. Anamnese direcionada + mecanismo guia droga</text>
</svg>`
};

FLOWS["constipacao-opioide"] = {
titulo: "Constipação Induzida por Opioide — Profilaxia + Escalonamento",
fonte: "MASCC; ANCP; ESMO",
svg: `<svg viewBox="0 0 860 1000" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-co" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
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
<rect x="280" y="20" width="300" height="60" class="f-start"/>
<text x="430" y="45" text-anchor="middle" class="f-tw">Paciente iniciando OPIOIDE</text>
<text x="430" y="64" text-anchor="middle" class="f-tw" style="font-size:11px">Constipação é UNIVERSAL — sem tolerância significativa</text>
<line x1="430" y1="80" x2="430" y2="110" class="f-arr" marker-end="url(#arr-co)"/>

<rect x="100" y="115" width="660" height="80" class="f-crit"/>
<text x="430" y="140" text-anchor="middle" class="f-t">⚠ ⚠ PROFILAXIA OBRIGATÓRIA — prescrever JUNTO com a 1ª dose de opioide</text>
<text x="430" y="160" text-anchor="middle" class="f-tc">BISACODIL 5-10 mg VO HS (estimulante)</text>
<text x="430" y="178" text-anchor="middle" class="f-tc">+ LACTULOSE 15-30 mL VO 12/12h (osmótico)</text>

<line x1="430" y1="195" x2="430" y2="225" class="f-arr" marker-end="url(#arr-co)"/>

<rect x="200" y="230" width="460" height="60" class="f-rect"/>
<text x="430" y="255" text-anchor="middle" class="f-t">REAVALIAR em 2-3 dias</text>
<text x="430" y="273" text-anchor="middle" class="f-ts">Meta: fezes Bristol 3-4, sem esforço, ≥3×/sem</text>

<line x1="430" y1="290" x2="200" y2="320" class="f-arr" marker-end="url(#arr-co)"/>
<line x1="430" y1="290" x2="660" y2="320" class="f-arr" marker-end="url(#arr-co)"/>

<rect x="60" y="325" width="280" height="60" class="f-ok"/>
<text x="200" y="350" text-anchor="middle" class="f-t">ADEQUADO — manter</text>
<text x="200" y="368" text-anchor="middle" class="f-ts">Continuar esquema base</text>

<rect x="520" y="325" width="280" height="60" class="f-warn"/>
<text x="660" y="350" text-anchor="middle" class="f-t">INADEQUADO — escalonar</text>
<text x="660" y="368" text-anchor="middle" class="f-ts">↓</text>

<line x1="660" y1="385" x2="660" y2="415" class="f-arr" marker-end="url(#arr-co)"/>

<rect x="350" y="420" width="500" height="180" class="f-warn"/>
<text x="600" y="445" text-anchor="middle" class="f-t">ESCALONAMENTO — passos sucessivos</text>
<text x="600" y="468" text-anchor="middle" class="f-ts">(1) Aumentar BISACODIL para 10-15 mg HS</text>
<text x="600" y="486" text-anchor="middle" class="f-ts">(2) Adicionar SUPOSITÓRIO de GLICERINA (estimulante retal)</text>
<text x="600" y="504" text-anchor="middle" class="f-ts">(3) Aumentar LACTULOSE para 30-45 mL 8/8h</text>
<text x="600" y="522" text-anchor="middle" class="f-ts">(4) OU substituir lactulose por PEG (polietilenoglicol) 17 g/d</text>
<text x="600" y="540" text-anchor="middle" class="f-ts">(5) Adicionar SENE 12-50 mg HS (estimulante alternativo)</text>
<text x="600" y="558" text-anchor="middle" class="f-ts">(6) ÓLEO MINERAL 15-30 mL VO HS (lubrificante — cautela aspiração)</text>
<text x="600" y="580" text-anchor="middle" class="f-tc">Reavaliar a cada 2-3 dias após cada ajuste</text>

<line x1="600" y1="600" x2="600" y2="630" class="f-arr" marker-end="url(#arr-co)"/>

<rect x="350" y="635" width="500" height="120" class="f-crit"/>
<text x="600" y="660" text-anchor="middle" class="f-t">REFRATÁRIO (>5-7 dias com esquema otimizado)</text>
<text x="600" y="683" text-anchor="middle" class="f-tc">METILNALTREXONA 8 mg SC (38-62 kg) ou 12 mg SC (>62 kg) cada 48h</text>
<text x="600" y="701" text-anchor="middle" class="f-ts">Antagonista μ-opioide PERIFÉRICO — não atravessa BHE</text>
<text x="600" y="717" text-anchor="middle" class="f-ts">Mantém analgesia central. Efeito laxativo em 30-60 min.</text>
<text x="600" y="737" text-anchor="middle" class="f-tc">⚠ NÃO usar se obstrução intestinal suspeita ou lesão GI ativa</text>

<rect x="20" y="420" width="310" height="335" class="f-rect"/>
<text x="175" y="445" text-anchor="middle" class="f-t">FECALOMA — diagnóstico</text>
<text x="175" y="468" text-anchor="middle" class="f-tc">Sintomas:</text>
<text x="175" y="486" text-anchor="middle" class="f-ts">• Constipação ≥3 dias</text>
<text x="175" y="502" text-anchor="middle" class="f-ts">• Diarreia PARADOXAL</text>
<text x="175" y="518" text-anchor="middle" class="f-ts">  (escape ao redor — NÃO tratar como diarreia!)</text>
<text x="175" y="540" text-anchor="middle" class="f-tc">Diagnóstico:</text>
<text x="175" y="558" text-anchor="middle" class="f-ts">⚠ Toque retal — fezes endurecidas</text>
<text x="175" y="574" text-anchor="middle" class="f-ts">Rx abdome se alto</text>
<text x="175" y="596" text-anchor="middle" class="f-tc">Tratamento:</text>
<text x="175" y="614" text-anchor="middle" class="f-ts">• Desimpactação manual + lubrificante</text>
<text x="175" y="630" text-anchor="middle" class="f-ts">• Supositório glicerina</text>
<text x="175" y="646" text-anchor="middle" class="f-ts">• Lavagem retal SF 200-500 mL</text>
<text x="175" y="668" text-anchor="middle" class="f-tc">⚠ NÃO USAR enema fosfato</text>
<text x="175" y="684" text-anchor="middle" class="f-ts">em idoso/IRC (hiperfosfatemia)</text>
<text x="175" y="706" text-anchor="middle" class="f-tc">Após resolução:</text>
<text x="175" y="724" text-anchor="middle" class="f-ts">Otimizar profilaxia regular</text>
<text x="175" y="740" text-anchor="middle" class="f-ts">+ avaliar rotação de opioide</text>

<rect x="100" y="780" width="660" height="100" class="f-ok"/>
<text x="430" y="805" text-anchor="middle" class="f-t">MEDIDAS NÃO-FARMACOLÓGICAS</text>
<text x="430" y="825" text-anchor="middle" class="f-ts">Hidratação conforme tolerância • Atividade física se possível</text>
<text x="430" y="843" text-anchor="middle" class="f-ts">Posição ortostática para evacuação • Banquinho sob pés</text>
<text x="430" y="861" text-anchor="middle" class="f-ts">Privacidade, tempo, ambiente confortável</text>

<rect x="100" y="895" width="660" height="80" class="f-warn"/>
<text x="430" y="920" text-anchor="middle" class="f-t">⚠ FIBRAS solúveis (psyllium): EVITAR em fase avançada/anoréxico/desidratado</text>
<text x="430" y="940" text-anchor="middle" class="f-ts">Sem água adequada, pioram constipação</text>
<text x="430" y="958" text-anchor="middle" class="f-tc">Usar APENAS em paciente com função GI preservada + hidratação adequada</text>
</svg>`
};

FLOWS["delirium-paliativo"] = {
titulo: "Delirium em Cuidados Paliativos — Manejo",
fonte: "ANCP; APA Delirium; NICE",
svg: `<svg viewBox="0 0 860 1080" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-de" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
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
<rect x="280" y="20" width="300" height="55" class="f-start"/>
<text x="430" y="45" text-anchor="middle" class="f-tw">Suspeita de DELIRIUM</text>
<text x="430" y="64" text-anchor="middle" class="f-tw" style="font-size:11px">Alteração aguda + flutuação + desatenção</text>
<line x1="430" y1="75" x2="430" y2="105" class="f-arr" marker-end="url(#arr-de)"/>

<rect x="100" y="110" width="660" height="80" class="f-rect"/>
<text x="430" y="135" text-anchor="middle" class="f-t">CONFIRMAR — Critérios CAM</text>
<text x="430" y="155" text-anchor="middle" class="f-ts">(1) Início agudo + flutuação + (2) Desatenção +</text>
<text x="430" y="173" text-anchor="middle" class="f-ts">(3) Pensamento desorganizado OU (4) Nível alterado de consciência</text>

<line x1="430" y1="190" x2="430" y2="220" class="f-arr" marker-end="url(#arr-de)"/>

<rect x="100" y="225" width="660" height="170" class="f-crit"/>
<text x="430" y="250" text-anchor="middle" class="f-t">INVESTIGAR REVERSIBILIDADE — Mnemônico D-E-L-I-R-I-U-M</text>
<text x="170" y="278" class="f-tc">D — Drogas</text>
<text x="170" y="294" class="f-ts">opioide, BZD, anticolinérgico, corticoide</text>
<text x="170" y="312" class="f-tc">E — Eletrólitos</text>
<text x="170" y="328" class="f-ts">Na, K, Ca, Mg, glicemia, ureia</text>
<text x="170" y="346" class="f-tc">L — Low O₂ / hipoxemia</text>
<text x="170" y="362" class="f-ts">SatO₂, gasometria, Hb, ICC, TEP</text>
<text x="500" y="278" class="f-tc">I — Infecção</text>
<text x="500" y="294" class="f-ts">urinária, respiratória, sistêmica</text>
<text x="500" y="312" class="f-tc">R — Retenção</text>
<text x="500" y="328" class="f-ts">urinária (sondagem) / fecal (toque retal)</text>
<text x="500" y="346" class="f-tc">I — Intracraniana</text>
<text x="500" y="362" class="f-ts">mets, AVC, HIC — TC se sinais focais</text>
<text x="430" y="385" text-anchor="middle" class="f-tc">U — Uremia, falência hepática | M — Dor mal controlada, abstinência</text>

<line x1="430" y1="395" x2="430" y2="425" class="f-arr" marker-end="url(#arr-de)"/>

<rect x="100" y="430" width="660" height="140" class="f-ok"/>
<text x="430" y="455" text-anchor="middle" class="f-t">MEDIDAS NÃO-FARMACOLÓGICAS — SEMPRE primeiro</text>
<text x="430" y="478" text-anchor="middle" class="f-ts">⚠ Ambiente CALMO, iluminação adequada (luz dia / escuro à noite)</text>
<text x="430" y="496" text-anchor="middle" class="f-ts">Presença de familiar conhecido + objetos familiares + música preferida</text>
<text x="430" y="514" text-anchor="middle" class="f-ts">Reorientação verbal frequente + reduzir estímulos + reduzir equipe rotativa</text>
<text x="430" y="534" text-anchor="middle" class="f-tc">⚠ DESPRESCREVER drogas precipitantes (anticolinérgicos, BZD se possível)</text>
<text x="430" y="552" text-anchor="middle" class="f-tc">⚠ TRATAR causas reversíveis identificadas (ATB, hidratação, sondagem, eletrólitos)</text>

<line x1="430" y1="570" x2="430" y2="600" class="f-arr" marker-end="url(#arr-de)"/>

<text x="430" y="623" text-anchor="middle" class="f-t" style="font-size:14px">AGITAÇÃO compromete cuidado / paciente sofre</text>

<line x1="430" y1="635" x2="200" y2="665" class="f-arr" marker-end="url(#arr-de)"/>
<line x1="430" y1="635" x2="660" y2="665" class="f-arr" marker-end="url(#arr-de)"/>

<rect x="50" y="670" width="320" height="170" class="f-crit"/>
<text x="210" y="695" text-anchor="middle" class="f-t">SEM Parkinson / Lewy</text>
<text x="210" y="718" text-anchor="middle" class="f-tc">HALOPERIDOL — 1ª LINHA</text>
<text x="210" y="738" text-anchor="middle" class="f-ts">0,5-2 mg VO/SC 8-12/12h</text>
<text x="210" y="754" text-anchor="middle" class="f-ts">+ resgate 0,5-1 mg 1/1h</text>
<text x="210" y="772" text-anchor="middle" class="f-ts">Idoso: 0,25-0,5 mg</text>
<text x="210" y="792" text-anchor="middle" class="f-tc">Refratário / hiperativo intenso:</text>
<text x="210" y="810" text-anchor="middle" class="f-ts">LEVOMEPROMAZINA</text>
<text x="210" y="826" text-anchor="middle" class="f-ts">12,5-25 mg VO/SC 8-12/12h</text>

<rect x="490" y="670" width="320" height="170" class="f-warn"/>
<text x="650" y="695" text-anchor="middle" class="f-t">COM Parkinson / Lewy</text>
<text x="650" y="718" text-anchor="middle" class="f-tc">QUETIAPINA</text>
<text x="650" y="738" text-anchor="middle" class="f-ts">12,5-50 mg HS</text>
<text x="650" y="754" text-anchor="middle" class="f-ts">Menos extrapiramidal</text>
<text x="650" y="772" text-anchor="middle" class="f-ts">que haloperidol</text>
<text x="650" y="794" text-anchor="middle" class="f-tc">⚠ EVITAR haloperidol</text>
<text x="650" y="810" text-anchor="middle" class="f-ts">(rigidez grave, SNM)</text>
<text x="650" y="826" text-anchor="middle" class="f-ts">e clorpromazina</text>

<line x1="430" y1="855" x2="430" y2="885" class="f-arr" marker-end="url(#arr-de)"/>

<rect x="100" y="890" width="660" height="100" class="f-warn"/>
<text x="430" y="915" text-anchor="middle" class="f-t">REFRATÁRIO a antipsicótico</text>
<text x="430" y="938" text-anchor="middle" class="f-tc">+ MIDAZOLAM SC 2,5-5 mg como resgate; BIC SC 0,5-2 mg/h</text>
<text x="430" y="954" text-anchor="middle" class="f-ts">⚠ BZD isolado pode PIORAR delirium (paradoxo) — usar EM COMBINAÇÃO</text>
<text x="430" y="974" text-anchor="middle" class="f-tc">Considerar SEDAÇÃO PALIATIVA proporcional (vide fluxograma)</text>

<rect x="100" y="1005" width="660" height="60" class="f-ok"/>
<text x="430" y="1030" text-anchor="middle" class="f-t">⚠ DELIRIUM HIPOATIVO é MAIS COMUM e MAIS SUBDIAGNOSTICADO</text>
<text x="430" y="1050" text-anchor="middle" class="f-ts">Paciente quieto/sonolento ≠ paciente em paz. Aplicar CAM ativamente.</text>
</svg>`
};

FLOWS["sedacao-paliativa"] = {
titulo: "Sedação Paliativa — Indicação + Protocolo",
fonte: "ANCP; EAPC; CFM Res 1.805/2006 + 2.156/2016",
svg: `<svg viewBox="0 0 860 1020" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-sp" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
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
<rect x="270" y="20" width="320" height="60" class="f-start"/>
<text x="430" y="45" text-anchor="middle" class="f-tw">SINTOMA REFRATÁRIO em fase ativa</text>
<text x="430" y="64" text-anchor="middle" class="f-tw" style="font-size:11px">Dor, dispneia, delirium, vômito, hemorragia, distresse</text>
<line x1="430" y1="80" x2="430" y2="110" class="f-arr" marker-end="url(#arr-sp)"/>

<rect x="100" y="115" width="660" height="105" class="f-warn"/>
<text x="430" y="140" text-anchor="middle" class="f-t">CRITÉRIOS DE REFRATARIEDADE</text>
<text x="430" y="160" text-anchor="middle" class="f-ts">(1) Sintoma NÃO CONTROLADO apesar de abordagem otimizada</text>
<text x="430" y="178" text-anchor="middle" class="f-ts">(2) Toxicidade INACEITÁVEL de tratamentos disponíveis</text>
<text x="430" y="196" text-anchor="middle" class="f-ts">(3) Probabilidade MUITO BAIXA de resposta a outras terapias</text>
<text x="430" y="214" text-anchor="middle" class="f-tc">+ Prognóstico de horas-dias (fase ativa)</text>

<line x1="430" y1="220" x2="430" y2="250" class="f-arr" marker-end="url(#arr-sp)"/>

<rect x="100" y="255" width="660" height="100" class="f-crit"/>
<text x="430" y="280" text-anchor="middle" class="f-t">DECISÃO COMPARTILHADA — multidisciplinar</text>
<text x="430" y="302" text-anchor="middle" class="f-ts">Paciente (se lúcido), família, equipe</text>
<text x="430" y="320" text-anchor="middle" class="f-tc">DOCUMENTAR: intenção (alívio sintoma, NÃO acelerar morte)</text>
<text x="430" y="336" text-anchor="middle" class="f-ts">Sintoma alvo + opções exploradas + comunicação família + plano monitoramento</text>
<text x="430" y="352" text-anchor="middle" class="f-tc">⚠ ⚠ DUPLO EFEITO — diferente de eutanásia (Res CFM 1.805/2006)</text>

<line x1="430" y1="355" x2="430" y2="385" class="f-arr" marker-end="url(#arr-sp)"/>

<rect x="100" y="390" width="660" height="180" class="f-rect"/>
<text x="430" y="415" text-anchor="middle" class="f-t">MIDAZOLAM — 1ª LINHA</text>
<text x="430" y="438" text-anchor="middle" class="f-tc">INDUÇÃO: 2,5-5 mg SC bolus (idoso/caquético: 1-2,5 mg)</text>
<text x="430" y="454" text-anchor="middle" class="f-ts">Repetir cada 10-15 min até conforto</text>
<text x="430" y="476" text-anchor="middle" class="f-tc">MANUTENÇÃO: BIC SC 0,5-2 mg/h</text>
<text x="430" y="492" text-anchor="middle" class="f-ts">Titular conforme RASS alvo</text>
<text x="430" y="514" text-anchor="middle" class="f-tc">RASS ALVO:</text>
<text x="430" y="532" text-anchor="middle" class="f-ts">-2 a -3 (sedação leve-moderada — paciente arousable mas confortável)</text>
<text x="430" y="550" text-anchor="middle" class="f-ts">-4 a -5 em refratariedade extrema</text>

<line x1="430" y1="570" x2="430" y2="600" class="f-arr" marker-end="url(#arr-sp)"/>

<rect x="100" y="605" width="660" height="135" class="f-warn"/>
<text x="430" y="630" text-anchor="middle" class="f-t">REFRATÁRIO ao midazolam — adicionar</text>
<text x="430" y="653" text-anchor="middle" class="f-tc">LEVOMEPROMAZINA SC 12,5-25 mg cada 4-6h</text>
<text x="430" y="669" text-anchor="middle" class="f-ts">OU BIC SC 50-100 mg/d (efeito antiemético + sedativo + analgésico adjuvante)</text>
<text x="430" y="691" text-anchor="middle" class="f-tc">FENOBARBITAL SC bolus 100-200 mg + BIC 600-1600 mg/d</text>
<text x="430" y="707" text-anchor="middle" class="f-tc">PROPOFOL BIC IV 0,5-2 mg/kg/h (hospital monitorado)</text>
<text x="430" y="723" text-anchor="middle" class="f-ts">CETAMINA SC em dor refratária associada (especialista)</text>

<line x1="430" y1="740" x2="430" y2="770" class="f-arr" marker-end="url(#arr-sp)"/>

<rect x="100" y="775" width="660" height="135" class="f-crit"/>
<text x="430" y="800" text-anchor="middle" class="f-t">⚠ ⚠ MANTER em PARALELO</text>
<text x="430" y="823" text-anchor="middle" class="f-tc">OPIOIDE — sedação NÃO substitui analgesia</text>
<text x="430" y="839" text-anchor="middle" class="f-ts">Manter morfina (ou outro opioide) titulando conforme dor/dispneia</text>
<text x="430" y="857" text-anchor="middle" class="f-tc">HIOSCINA BUTILBROMETO se estertor; HALOPERIDOL se náusea</text>
<text x="430" y="879" text-anchor="middle" class="f-tc">DESPRESCREVER não-essenciais (anti-HAS, hipoglicemiantes, estatinas)</text>
<text x="430" y="895" text-anchor="middle" class="f-tc">HIDRATAÇÃO — em fase ativa: geralmente SUSPENDER ou minimizar</text>

<rect x="100" y="925" width="660" height="80" class="f-ok"/>
<text x="430" y="950" text-anchor="middle" class="f-t">COMUNICAÇÃO CONTINUA com família</text>
<text x="430" y="970" text-anchor="middle" class="f-ts">'Estamos aliviando o sofrimento, não acelerando a morte'</text>
<text x="430" y="988" text-anchor="middle" class="f-ts">Encorajar família a falar/tocar — audição persiste até bem tarde</text>
</svg>`
};

FLOWS["ultimas-horas"] = {
titulo: "Últimas Horas de Vida — Conforto + Via SC + Kit",
fonte: "ANCP; EAPC; PCMS-MS",
svg: `<svg viewBox="0 0 860 1080" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-uh" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
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
<rect x="270" y="20" width="320" height="55" class="f-start"/>
<text x="430" y="45" text-anchor="middle" class="f-tw">RECONHECER fase ATIVA</text>
<text x="430" y="64" text-anchor="middle" class="f-tw" style="font-size:11px">Horizonte de horas-dias</text>
<line x1="430" y1="75" x2="430" y2="105" class="f-arr" marker-end="url(#arr-uh)"/>

<rect x="100" y="110" width="660" height="135" class="f-warn"/>
<text x="430" y="135" text-anchor="middle" class="f-t">SINAIS de fase ATIVA</text>
<text x="170" y="158" class="f-ts">• ↓ ingesta líquidos/sólidos</text>
<text x="170" y="176" class="f-ts">• Disfagia, sonolência crescente</text>
<text x="170" y="194" class="f-ts">• Respiração irregular / Cheyne-Stokes</text>
<text x="170" y="212" class="f-ts">• Estertor (gorgolejo)</text>
<text x="430" y="158" class="f-ts">• Pele mosqueada / marmórea / fria</text>
<text x="430" y="176" class="f-ts">• Pulso fino, PA caindo</text>
<text x="430" y="194" class="f-ts">• Oligo-anúria</text>
<text x="430" y="212" class="f-ts">• Delirium / alucinações ('visitantes')</text>
<text x="430" y="232" text-anchor="middle" class="f-tc">Pode haver 'lucidez terminal' antes do óbito</text>

<line x1="430" y1="245" x2="430" y2="275" class="f-arr" marker-end="url(#arr-uh)"/>

<rect x="100" y="280" width="660" height="80" class="f-rect"/>
<text x="430" y="305" text-anchor="middle" class="f-t">COMUNICAR FAMÍLIA — REORGANIZAR PRIORIDADES</text>
<text x="430" y="325" text-anchor="middle" class="f-ts">'Estamos entrando nos últimos dias/horas. O foco agora é conforto e presença'</text>
<text x="430" y="343" text-anchor="middle" class="f-tc">CONFORTO + DIGNIDADE + PRESENÇA FAMILIAR + AMBIENTE</text>

<line x1="430" y1="360" x2="430" y2="390" class="f-arr" marker-end="url(#arr-uh)"/>

<rect x="20" y="395" width="400" height="200" class="f-warn"/>
<text x="220" y="420" text-anchor="middle" class="f-t">DESPRESCREVER não-essenciais</text>
<text x="220" y="443" text-anchor="middle" class="f-tc">SUSPENDER:</text>
<text x="220" y="461" text-anchor="middle" class="f-ts">anti-hipertensivos</text>
<text x="220" y="477" text-anchor="middle" class="f-ts">hipoglicemiantes, estatinas</text>
<text x="220" y="493" text-anchor="middle" class="f-ts">suplementos, vitaminas</text>
<text x="220" y="509" text-anchor="middle" class="f-ts">antiagregantes preventivos</text>
<text x="220" y="525" text-anchor="middle" class="f-ts">AAS preventivo</text>
<text x="220" y="547" text-anchor="middle" class="f-tc">MANTER:</text>
<text x="220" y="565" text-anchor="middle" class="f-ts">opioides, antiemético, sedativo</text>
<text x="220" y="581" text-anchor="middle" class="f-ts">antimuscarínico (estertor),</text>
<text x="220" y="595" text-anchor="middle" class="f-ts">corticoide se útil sintomático</text>

<rect x="440" y="395" width="400" height="200" class="f-crit"/>
<text x="640" y="420" text-anchor="middle" class="f-t">VIA SUBCUTÂNEA (SC) — central</text>
<text x="640" y="443" text-anchor="middle" class="f-tc">Acesso: butterfly 21-25G</text>
<text x="640" y="461" text-anchor="middle" class="f-ts">Sítios: deltóide, abdome,</text>
<text x="640" y="477" text-anchor="middle" class="f-ts">coxa anterior, infraclavicular</text>
<text x="640" y="493" text-anchor="middle" class="f-ts">Rodízio a cada 5-7 dias</text>
<text x="640" y="515" text-anchor="middle" class="f-tc">Volume por sítio:</text>
<text x="640" y="533" text-anchor="middle" class="f-ts">bolus ≤ 2 mL; BIC ≤ 1-2 mL/h</text>
<text x="640" y="555" text-anchor="middle" class="f-tc">HIPODERMOCLISE:</text>
<text x="640" y="573" text-anchor="middle" class="f-ts">SF 0,9% ou SG 5%</text>
<text x="640" y="589" text-anchor="middle" class="f-ts">25-125 mL/h, até 1500 mL/d</text>

<line x1="430" y1="595" x2="430" y2="625" class="f-arr" marker-end="url(#arr-uh)"/>

<rect x="100" y="630" width="660" height="125" class="f-rect"/>
<text x="430" y="655" text-anchor="middle" class="f-t">DROGAS COMPATÍVEIS SC vs CONTRAINDICADAS</text>
<text x="430" y="678" text-anchor="middle" class="f-tc">✓ OK SC:</text>
<text x="430" y="694" text-anchor="middle" class="f-ts">morfina, midazolam, haloperidol, levomepromazina, dexametasona, ondansetrona,</text>
<text x="430" y="710" text-anchor="middle" class="f-ts">metoclopramida, hioscina butilbrometo, escopolamina, octreotida, furosemida (vol baixo)</text>
<text x="430" y="732" text-anchor="middle" class="f-tc">✗ NÃO SC:</text>
<text x="430" y="748" text-anchor="middle" class="f-ts">clorpromazina (necrose), diazepam (precipita), fenitoína, ceftriaxona, KCl, NaCl 3%</text>

<line x1="430" y1="755" x2="430" y2="785" class="f-arr" marker-end="url(#arr-uh)"/>

<rect x="100" y="790" width="660" height="195" class="f-crit"/>
<text x="430" y="815" text-anchor="middle" class="f-t">KIT BÁSICO FIM DE VIDA — prescrição ANTECIPADA em domicílio</text>
<text x="430" y="835" text-anchor="middle" class="f-ts">Permite resposta a sintomas SEM emergência hospitalar</text>
<text x="170" y="858" class="f-tc">(1) MORFINA simples sol oral OU ampola SC</text>
<text x="170" y="874" class="f-ts">dor, dispneia</text>
<text x="170" y="894" class="f-tc">(2) MIDAZOLAM amp 5 mg/mL SC</text>
<text x="170" y="910" class="f-ts">agitação, dispneia ansiosa, sedação</text>
<text x="170" y="930" class="f-tc">(3) HALOPERIDOL amp 5 mg/mL SC</text>
<text x="170" y="946" class="f-ts">náusea, delirium leve</text>
<text x="500" y="858" class="f-tc">(4) HIOSCINA BUTIL 20 mg amp SC</text>
<text x="500" y="874" class="f-ts">estertor, cólica</text>
<text x="500" y="894" class="f-tc">(5) DEXAMETASONA 4 mg amp SC</text>
<text x="500" y="910" class="f-ts">náusea, dispneia selecionados</text>
<text x="500" y="930" class="f-tc">(6) LEVOMEPROMAZINA</text>
<text x="500" y="946" class="f-ts">em refratários</text>
<text x="430" y="975" text-anchor="middle" class="f-tc">+ seringas/agulhas + folha de instruções + telefone plantão</text>

<rect x="100" y="1000" width="660" height="65" class="f-ok"/>
<text x="430" y="1025" text-anchor="middle" class="f-t">DECLARAÇÃO DE ÓBITO EM DOMICÍLIO</text>
<text x="430" y="1043" text-anchor="middle" class="f-ts">Médico assistente declara — NÃO precisa IML em óbito esperado de doença conhecida em paliativos</text>
<text x="430" y="1057" text-anchor="middle" class="f-ts">Causa imediata + intermediária + básica (CID da neoplasia/doença avançada)</text>
</svg>`
};

FLOWS["compressao-medular"] = {
titulo: "Compressão Medular Maligna — EMERGÊNCIA ONCOLÓGICA",
fonte: "NICE Spinal Cord Compression; NCCN; SBOC",
svg: `<svg viewBox="0 0 860 980" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-cm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
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
<rect x="240" y="20" width="380" height="60" class="f-start"/>
<text x="430" y="45" text-anchor="middle" class="f-tw">PACIENTE ONCOLÓGICO com</text>
<text x="430" y="65" text-anchor="middle" class="f-tw" style="font-size:11px">dor lombar/torácica nova + déficit motor/sensitivo/esfincter</text>
<line x1="430" y1="80" x2="430" y2="110" class="f-arr" marker-end="url(#arr-cm)"/>

<rect x="100" y="115" width="660" height="105" class="f-crit"/>
<text x="430" y="140" text-anchor="middle" class="f-t">⚠ ⚠ EMERGÊNCIA — JANELA TERAPÊUTICA CURTA</text>
<text x="430" y="160" text-anchor="middle" class="f-ts">Déficit motor instalado >48h frequentemente IRREVERSÍVEL</text>
<text x="430" y="180" text-anchor="middle" class="f-tc">⚠ DOR LOMBAR NOVA em oncológico = SEMPRE investigar</text>
<text x="430" y="198" text-anchor="middle" class="f-ts">Pode anteceder déficit em SEMANAS (janela para imagem + RT)</text>

<line x1="430" y1="220" x2="430" y2="250" class="f-arr" marker-end="url(#arr-cm)"/>

<rect x="100" y="255" width="660" height="110" class="f-crit"/>
<text x="430" y="280" text-anchor="middle" class="f-t">DEXAMETASONA EM BOLUS — IMEDIATA</text>
<text x="430" y="303" text-anchor="middle" class="f-tc">DEXAMETASONA 16 mg IV BOLUS ÚNICO</text>
<text x="430" y="320" text-anchor="middle" class="f-ts">depois 4 mg IV/VO 6/6h × 48h</text>
<text x="430" y="338" text-anchor="middle" class="f-tc">⚠ ⚠ NÃO ESPERAR IMAGEM — bolus em qualquer setor (UBS, PA) em suspeita forte</text>
<text x="430" y="358" text-anchor="middle" class="f-ts">+ ANALGESIA opioide adequada (escalonamento rápido)</text>

<line x1="430" y1="365" x2="430" y2="395" class="f-arr" marker-end="url(#arr-cm)"/>

<rect x="100" y="400" width="660" height="80" class="f-warn"/>
<text x="430" y="425" text-anchor="middle" class="f-t">RM COLUNA TOTAL URGENTE (cervical + torácica + lombar)</text>
<text x="430" y="445" text-anchor="middle" class="f-tc">Idealmente em HORAS</text>
<text x="430" y="463" text-anchor="middle" class="f-ts">Se RM indisponível: TC com contraste OU mielo-TC | ⚠ Rx pode ser normal</text>

<line x1="430" y1="480" x2="430" y2="510" class="f-arr" marker-end="url(#arr-cm)"/>

<rect x="100" y="515" width="660" height="120" class="f-rect"/>
<text x="430" y="540" text-anchor="middle" class="f-t">REFERENCIAMENTO + TRATAMENTO DEFINITIVO</text>
<text x="430" y="563" text-anchor="middle" class="f-tc">RADIOTERAPIA PALIATIVA URGENTE em 24-48h</text>
<text x="430" y="579" text-anchor="middle" class="f-ts">em paciente com déficit estabelecido</text>
<text x="430" y="601" text-anchor="middle" class="f-tc">CIRURGIA DE DESCOMPRESSÃO + estabilização</text>
<text x="430" y="617" text-anchor="middle" class="f-ts">se bom performance + sobrevida >3-6m + déficit <48h + instabilidade espinhal</text>
<text x="430" y="633" text-anchor="middle" class="f-ts">ou tumor radio-resistente (renal, sarcoma)</text>

<line x1="430" y1="635" x2="430" y2="665" class="f-arr" marker-end="url(#arr-cm)"/>

<rect x="100" y="670" width="660" height="105" class="f-warn"/>
<text x="430" y="695" text-anchor="middle" class="f-t">CUIDADOS DE SUPORTE</text>
<text x="430" y="715" text-anchor="middle" class="f-ts">• Tromboprofilaxia (enoxaparina 40 mg SC 1×/d) se acamado</text>
<text x="430" y="731" text-anchor="middle" class="f-ts">• Sondagem vesical (retenção / esfincteriana)</text>
<text x="430" y="747" text-anchor="middle" class="f-ts">• Manejo intestinal (laxativos, supositórios em paciente neurogênico)</text>
<text x="430" y="763" text-anchor="middle" class="f-ts">• Fisioterapia / reabilitação precoce + bifosfonato (ác. zoledrônico 4 mg/mês)</text>

<line x1="430" y1="775" x2="430" y2="805" class="f-arr" marker-end="url(#arr-cm)"/>

<rect x="100" y="810" width="660" height="105" class="f-ok"/>
<text x="430" y="835" text-anchor="middle" class="f-t">PACIENTE NÃO-CANDIDATO A INTERVENÇÃO</text>
<text x="430" y="855" text-anchor="middle" class="f-ts">Fase muito avançada OU paraplégico >48h (sem recuperação esperada)</text>
<text x="430" y="875" text-anchor="middle" class="f-tc">→ FOCO EM CONFORTO + ANALGESIA + SUPORTE</text>
<text x="430" y="893" text-anchor="middle" class="f-ts">Não submeter a procedimentos invasivos sem benefício</text>
<text x="430" y="909" text-anchor="middle" class="f-ts">Equipe de cuidados paliativos + apoio à adaptação (cadeirante, sondado)</text>
</svg>`
};

FLOWS["spikes"] = {
titulo: "Protocolo SPIKES — Comunicação de Más Notícias",
fonte: "Baile WF et al. The Oncologist 2000;5:302-11",
svg: `<svg viewBox="0 0 860 1050" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
<defs><marker id="arr-sk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-2)"/></marker></defs>
<style>
.f-rect{fill:var(--bg-elev);stroke:var(--ink-2);stroke-width:1.5;rx:8}
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
<rect x="280" y="20" width="300" height="55" class="f-start"/>
<text x="430" y="45" text-anchor="middle" class="f-tw">Preparo para má notícia</text>
<text x="430" y="64" text-anchor="middle" class="f-tw" style="font-size:11px">Diagnóstico/progressão/objetivos de cuidado</text>
<line x1="430" y1="75" x2="430" y2="105" class="f-arr" marker-end="url(#arr-sk)"/>

<rect x="100" y="110" width="660" height="115" class="f-ok"/>
<text x="430" y="135" text-anchor="middle" class="f-t">S — SETTING (ambiente)</text>
<text x="430" y="158" text-anchor="middle" class="f-ts">Ambiente PRIVATIVO • Tempo adequado (≥30 min, sem pressa)</text>
<text x="430" y="176" text-anchor="middle" class="f-ts">Presença de familiar se paciente desejar</text>
<text x="430" y="194" text-anchor="middle" class="f-ts">Sentar em altura do paciente, sem mesa, sem celular</text>
<text x="430" y="214" text-anchor="middle" class="f-tc">Desligar celular/pager — comunicar 'não interromper'</text>

<line x1="430" y1="225" x2="430" y2="255" class="f-arr" marker-end="url(#arr-sk)"/>

<rect x="100" y="260" width="660" height="100" class="f-rect"/>
<text x="430" y="285" text-anchor="middle" class="f-t">P — PERCEPTION (percepção do paciente)</text>
<text x="430" y="308" text-anchor="middle" class="f-ts">'O que você sabe sobre sua situação atual?'</text>
<text x="430" y="326" text-anchor="middle" class="f-ts">'O que os outros médicos disseram?'</text>
<text x="430" y="346" text-anchor="middle" class="f-tc">Calibrar: negação / conhecimento parcial / completo — NÃO 'corrigir' negação imediatamente</text>

<line x1="430" y1="360" x2="430" y2="390" class="f-arr" marker-end="url(#arr-sk)"/>

<rect x="100" y="395" width="660" height="100" class="f-warn"/>
<text x="430" y="420" text-anchor="middle" class="f-t">I — INVITATION (convite)</text>
<text x="430" y="443" text-anchor="middle" class="f-ts">'Quanta informação você gostaria de saber?'</text>
<text x="430" y="461" text-anchor="middle" class="f-ts">'Você prefere que eu fale com você ou com a família primeiro?'</text>
<text x="430" y="481" text-anchor="middle" class="f-tc">⚠ RESPEITAR — alguns pacientes preferem NÃO saber tudo (válido)</text>

<line x1="430" y1="495" x2="430" y2="525" class="f-arr" marker-end="url(#arr-sk)"/>

<rect x="100" y="530" width="660" height="130" class="f-crit"/>
<text x="430" y="555" text-anchor="middle" class="f-t">K — KNOWLEDGE (compartilhar conhecimento)</text>
<text x="430" y="578" text-anchor="middle" class="f-tc">⚠ TIRO DE AVISO ('warning shot')</text>
<text x="430" y="594" text-anchor="middle" class="f-ts">'Preciso compartilhar algo difícil...' / 'Os resultados não são os que esperávamos...'</text>
<text x="430" y="614" text-anchor="middle" class="f-ts">DAR a notícia em LINGUAGEM SIMPLES, sem jargão</text>
<text x="430" y="632" text-anchor="middle" class="f-ts">PAUSA — silêncio é necessário • PEDAÇOS pequenos — não despejar tudo</text>
<text x="430" y="650" text-anchor="middle" class="f-tc">⚠ NÃO mentir / NÃO suavizar excessivamente</text>

<line x1="430" y1="660" x2="430" y2="690" class="f-arr" marker-end="url(#arr-sk)"/>

<rect x="100" y="695" width="660" height="130" class="f-warn"/>
<text x="430" y="720" text-anchor="middle" class="f-t">E — EMPATHY (responder a emoções)</text>
<text x="430" y="743" text-anchor="middle" class="f-ts">OBSERVAR reação: choro, raiva, silêncio, negação</text>
<text x="430" y="761" text-anchor="middle" class="f-tc">NOMEAR a emoção: 'Vejo que essa notícia foi muito difícil'</text>
<text x="430" y="779" text-anchor="middle" class="f-ts">VALIDAR: 'Faz sentido se sentir assim'</text>
<text x="430" y="797" text-anchor="middle" class="f-ts">⚠ NÃO oferecer soluções imediatas — primeiro sustentar emocionalmente</text>
<text x="430" y="815" text-anchor="middle" class="f-tc">SILÊNCIO é OK • TOQUE (mão, ombro) se cultural/pessoalmente apropriado</text>

<line x1="430" y1="825" x2="430" y2="855" class="f-arr" marker-end="url(#arr-sk)"/>

<rect x="100" y="860" width="660" height="130" class="f-ok"/>
<text x="430" y="885" text-anchor="middle" class="f-t">S — STRATEGY / SUMMARY (estratégia + síntese)</text>
<text x="430" y="908" text-anchor="middle" class="f-ts">Só após sustentar emocionalmente — verificar se paciente 'volta'</text>
<text x="430" y="926" text-anchor="middle" class="f-ts">'Você gostaria de saber sobre os próximos passos?'</text>
<text x="430" y="944" text-anchor="middle" class="f-tc">OFERECER plano: tratamento, encaminhamentos, próxima consulta</text>
<text x="430" y="962" text-anchor="middle" class="f-ts">VERIFICAR compreensão: 'Pode me dizer o que entendeu?'</text>
<text x="430" y="980" text-anchor="middle" class="f-tc">AGENDAR próximo contato — 'vamos passar por isso juntos'</text>

<rect x="100" y="1005" width="660" height="40" class="f-rect"/>
<text x="430" y="1030" text-anchor="middle" class="f-ts">DOCUMENTAR conversa no prontuário • COMUNICAR equipe • AUTO-CUIDADO do médico</text>
</svg>`
};
