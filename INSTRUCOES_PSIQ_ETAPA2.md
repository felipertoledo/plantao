# 💊 Etapa 2 concluída — 28 medicações psiquiátricas novas

## Arquivo: `meds-psiq-extra.js` (arquivo NOVO, 69 KB)

Contém **28 medicações** que NÃO existiam no projeto (verificado — 0 colisão com as 255 já existentes).

### ⚠ Correção importante sobre a lista que te mandei
Vários itens da lista de revisão JÁ EXISTIAM no projeto e foram excluídos para não duplicar:
- **Já existiam** (em `meds-psiq.js`, `meds-psiq-amp.js`, `meds-neuro.js`, `meds-alergia.js`): escitalopram, citalopram, duloxetina, mirtazapina, trazodona, risperidona, olanzapina, quetiapina, aripiprazol, clozapina, paliperidona, **lamotrigina**, **memantina**, **donepezila**, **rivastigmina**, **galantamina**, topiramato, valproato, pregabalina, hidroxizina, baclofeno, midazolam, lorazepam, haloperidol, levomepromazina.
- Eu não tinha conferido o inventário real antes de montar a lista. Desculpa pela confusão.

### As 28 REALMENTE novas, por categoria:

**Antidepressivos (5)**
- Fluvoxamina (ISRS, TOC)
- Desvenlafaxina (IRSN)
- Vortioxetina (multimodal, pró-cognitivo)
- Agomelatina (melatoninérgico — ⚠ monitorar transaminases)
- Maprotilina (tetracíclico — ⚠ risco convulsão)

**Antipsicóticos atípicos (5)**
- Ziprasidona (⚠ QT, tomar com alimento)
- Lurasidona (depressão bipolar, com alimento ≥350 kcal)
- Brexpiprazol (augmentation depressão)
- Cariprazina (sintomas negativos; ⚠ meia-vida em semanas)
- Asenapina (sublingual)

**Antipsicóticos depot/LAI (4)**
- Risperidona LAI (quinzenal; cobertura oral 3 sem)
- Paliperidona LAI (mensal/trimestral; ⚠ renal)
- Haloperidol decanoato (mensal; disponível no SUS)
- Aripiprazol depot (mensal; cobertura oral 14d)

**Benzodiazepínicos (2)**
- Alprazolam (⚠ alta potência, dependência)
- Bromazepam

**Hipnóticos Z-drugs (2)**
- Zolpidem (⚠ comportamento complexo do sono)
- Eszopiclona

**Ansiolítico não-BZD (1)**
- Buspirona (5-HT1A, sem dependência, início lento)

**Estimulantes TDAH (4)**
- Metilfenidato LI (⚠ receita A3 amarela)
- Metilfenidato LP (Concerta/Ritalina LA)
- Lisdexanfetamina (Venvanse)
- Atomoxetina (não-estimulante, não controlado)

**Tratamento de dependências (4)**
- Naltrexona (⚠ não usar com opioide ativo)
- Acamprosato (não hepatotóxico — bom em hepatopata)
- Vareniclina (tabagismo — fora do PNCT)
- Dissulfiram (aversivo — ⚠ reação com álcool oculto)

**Antiparkinsoniano extrapiramidal (1)**
- Triexifenidil (alternativa ao biperideno)

### Cada medicação tem:
- Classe, sinônimos comerciais, formas/apresentações
- Resumo clínico com lente P4
- **Dose explícita** (rápida + por indicação com obs) — regra cumprida em todas
- Ajustes (IRC, IH, idoso, gestante, lactação, pediatria)
- Mecanismo, farmacocinética
- Efeitos colaterais (comuns + sérios)
- Interações, contraindicações, monitoramento
- Categoria gestação, disponibilidade SUS (CBAF/CEAF/PFPB/Particular + controle 344/98)
- Referências (Stahl, Maudsley, PCDT, bula)

## Quantitativo
```
283 medicações totais (255 + 28)
0 colisões de ID
Schema idêntico ao das medicações existentes (renderMed OK)
Todas com dose explícita ✓
Auditoria de doses: 0 ALTO mantido
```

## Como subir no repo (2 passos)

### Passo 1 — Upload do arquivo novo
1. https://github.com/felipertoledo/plantao → Add file → Upload files
2. Arrasta **`meds-psiq-extra.js`**
3. Commit: `feat: adicionar 28 psicofármacos (atípicos novos, depot/LAI, TDAH, dependências)`

### Passo 2 — Registrar no index.html
1. Abre `index.html` no GitHub → lápis (Edit)
2. Busca por: `<script src="meds-psiq.js" defer></script>`
3. Adiciona logo ABAIXO dessa linha:
```html
<script src="meds-psiq-extra.js" defer></script>
```
4. Commit: `feat: registrar meds-psiq-extra.js`

### ⚠ Observação sobre `meds-psiq-amp.js`
No meu sandbox, `meds-psiq-amp.js` (risperidona, olanzapina, quetiapina, etc) NÃO está registrado no index.html. Na sua produção, como você tem esses atípicos, ele DEVE estar registrado de outra forma. Confere se na sua versão tem a linha `<script src="meds-psiq-amp.js" defer></script>` — se não tiver e os atípicos aparecerem, eles estão sendo carregados de outro jeito (talvez consolidados em outro arquivo). Não mexe nisso, só confirma.

## Teste após subir
1. Abre `/#/meds` — busca "lurasidona", "buspirona", "metilfenidato" → devem aparecer
2. Abre `/#/m/med-lamotrigina` (já existia) e `/#/m/med-buspirona` (nova) → renderizam igual
