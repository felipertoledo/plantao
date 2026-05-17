# Vovôminic Emergência — Estrutura Nível 3

## Visão geral
Site reorganizado em **49 arquivos** (vs 67 anteriores) com pastas semânticas. Todo conteúdo preservado.

## Estrutura

```
plantao/
├── index.html              ← Carrega scripts na ordem certa
├── app.js                  ← Lógica core (não mexer salvo bug)
├── init.js                 ← SISTEMAS + arrays vazios (PATOLOGIAS, MEDICACOES, etc)
├── _indexes.js             ← Indexação final (CALCS_BY_ID, FLOWS_LIST)
│
├── pat/                    ← 254 patologias (18 arquivos)
│   ├── cardio.js          13 pat
│   ├── neuro.js           11
│   ├── resp.js            13
│   ├── gi.js              17
│   ├── gu.js              13
│   ├── endo-hidro.js      19 (endo + distúrbios hidroeletrolíticos)
│   ├── infecto.js         23
│   ├── tox-pec.js         19 (tóxicos + animais peçonhentos)
│   ├── hemo.js             8
│   ├── trauma.js           9
│   ├── obst-gest.js       10 (obstetrícia + gestantes)
│   ├── psiq.js             9
│   ├── ost-derm-oft.js     7 (ortopedia + derm + oftalmo)
│   ├── pali.js            12 (cuidados paliativos)
│   ├── emerg-anaf.js      10 (anafilaxia + vasopressores + IOT + analgesia)
│   ├── docs-legal.js      13 (médico-legal + tabelas)
│   ├── proc.js             6 (procedimentos)
│   └── pulo.js            42 (Pulo do Gato)
│
├── meds/                   ← 192 medicações (14 arquivos)
│   ├── cardio-uti.js      11 (vasopressor + antiarrítmico)
│   ├── anti-hipertensivos.js  32
│   ├── anticoag-lipemiante.js 12
│   ├── analgesia.js        7
│   ├── sedacao.js          7
│   ├── atb.js             36
│   ├── neuro.js           11
│   ├── psiq.js            12
│   ├── resp.js            11 (broncodilatadores)
│   ├── alergia.js          6
│   ├── endo.js            24 (endócrino + antidiabéticos)
│   ├── gi.js               5
│   ├── pali.js            15
│   └── ost.js              3
│
├── calcs/                  ← 63 calculadoras (7 arquivos) + 8 conversores em ui/
│   ├── cardio.js
│   ├── neuro.js
│   ├── resp-infecto.js
│   ├── gi.js
│   ├── hemo-hidro.js
│   ├── pali.js
│   └── outros.js
│
├── flows/                  ← 29 fluxogramas (4 arquivos)
│   ├── cardio-resp.js
│   ├── emerg.js
│   ├── pali.js
│   └── outros.js
│
└── ui/                     ← Camada visual
    ├── conversores.js     8 conversores (mcg/kg/min, gtt/min, etc)
    ├── figuras-cardio.js  12 SVGs cardio próprios
    └── figs-apply.js      Mapeia patologia → figuras
```

## Como adicionar conteúdo no futuro

### Nova patologia
1. Abre o arquivo do sistema correspondente (ex: `pat/cardio.js`)
2. Adiciona o objeto dentro do `PATOLOGIAS.push(...)`
3. Pronto.

### Nova medicação
1. Abre o arquivo do grupo (ex: `meds/atb.js`)
2. Adiciona dentro do `MEDICACOES.push(...)`

### Nova calculadora
1. Abre o arquivo do sistema (ex: `calcs/cardio.js`)
2. Adiciona dentro do `CALCS.push(...)`

### Novo fluxograma
1. Abre o arquivo (ex: `flows/emerg.js`)
2. Adiciona `FLOWS["meu-id"] = { ... };` direto

### Nova figura
1. Abre `ui/figuras-cardio.js` (ou cria `ui/figuras-neuro.js` para outros sistemas)
2. Adiciona `FIGURAS["fig-x"] = { titulo, legenda, autor, licenca, svg };`
3. Em `ui/figs-apply.js`, mapeia: `"id-patologia": ["fig-x"]`

## Ordem de carregamento (definida no index.html)

1. `init.js` — declara arrays vazios e SISTEMAS
2. `pat/*.js` — todas patologias (qualquer ordem)
3. `meds/*.js` — todas medicações
4. `calcs/*.js` — todas calculadoras
5. `ui/conversores.js` — conversores
6. `flows/*.js` — fluxogramas
7. `ui/figuras-*.js` — figuras
8. `_indexes.js` — popula CALCS_BY_ID + FLOWS_LIST + agrega conversores em CALCS
9. `ui/figs-apply.js` — aplica figuras nas patologias
10. `app.js` — lógica de render + router (carrega por último)

## Totais (validado E2E com JSDOM)

- **254** patologias
- **192** medicações
- **71** calculadoras (63 + 8 conversores)
- **29** fluxogramas
- **12** figuras (todas cardio nesta versão)

Todos renderizam sem erros.
