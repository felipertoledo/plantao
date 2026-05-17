# Vovôminic Doutô — Guia Clínico

Guia clínico educacional em medicina, baseado em diretrizes brasileiras e internacionais.
Cobre **Pronto Atendimento (PA)** e **Atenção Primária à Saúde (UBS)**.

**Sem fins lucrativos** — Felipe Ribeiro Toledo (CRM-SP 216.986) · @vovôminic

---

## Conteúdo (Rodada 1)

- **254 patologias** (PA + UBS) com CID-10 + CIAP-2
- **192 medicações** com fontes (REMUME, RDC, bula, ANVISA)
- **71 calculadoras** clínicas (scores, ajustes, conversões)
- **29 fluxogramas** decisionais
- **12 figuras** cardio (ECG, anatomia coronária, ACLS)
- **CIAP-2 universal**: 229/254 patologias com CIAP (71 explícito + 158 auto-inferido por CID ou nome)

## Sistema de filtro de contexto

Toggle no início da home: **⚡ Plantão** · **🌳 UBS** · **⚙ Tudo**
- **Plantão**: 254 patologias / 192 meds / 71 calcs (urgência/emergência)
- **UBS**: 199 patologias / 176 meds / 59 calcs (cuidado longitudinal + saúde da família)
- **Tudo**: tudo visível

Cada item tem badge de contexto: 🔴 PA · 🟢 UBS · 🟣 PA+UBS

## Estrutura de arquivos

```
plantao/
├── index.html             # 62KB — UI + CSS + ordem de scripts
├── app.js                 # 60KB — render, busca, calc, fluxo
├── init.js                # init de constantes
├── indexes.js             # rebuild de índices
├── pat/                   # 254 patologias em 18 arquivos por sistema
├── meds/                  # 192 medicações em 14 arquivos por grupo
├── calcs/                 # 71 calcs em 7 arquivos por sistema
├── flows/                 # 29 fluxogramas em 4 arquivos
├── ui/                    # CSS+JS auxiliar
│   ├── conversores.js     # 8 conversores
│   ├── figuras-cardio.js  # 12 SVGs anatômicos
│   ├── figs-apply.js      # aplica figuras nas patologias
│   ├── ciap.js            # 200+ mapeamentos CID→CIAP + inferência por nome
│   └── contexto.js        # filtro Plantão/UBS/Tudo
├── .nojekyll              # Necessário para GitHub Pages servir _arquivos
└── README.md
```

## Próximas rodadas planejadas

| Rodada | Conteúdo |
|---|---|
| 2 | Vacinação completa (PNI 2026) + Pré-natal baixo risco |
| 3 | Puericultura + HAS/DM2 crônicos com PTS + Saúde Mental MFC |
| 4 | Saúde do Idoso (Beers, STOPP-START, polifarmácia, demência, osteoporose, quedas) |
| 5 | Rastreamento (sociedades brasileiras + MS) + Prevenção Quaternária |

## Deploy

```bash
# Copiar tudo para o repo do GitHub Pages
cp -r site_v2/* /caminho/para/repo/plantao/
git add . && git commit -m "Vovôminic Doutô v1.0" && git push
```

GitHub Pages serve o site em `usuario.github.io/plantao/`

## Estrutura UBS expandida

Patologias da UBS agora suportam campos opcionais que renderizam blocos no modo "completo":
- `p.intro` — Introdução
- `p.apresentacao` — Apresentação clínica
- `p.sintomas[]` — Sinais e sintomas
- `p.fisio` — Fisiopatologia
- `p.profilaxia` — Profilaxia e cuidados
- `p.freire` — 🗣️ Orientação ao paciente (lente freireana, bloco verde)
- `p.sus_tx` — Tratamento no SUS
- `p.padrao_ouro` — Tratamento padrão-ouro
- `p.prog` — Prognóstico
- `p.acomp` — Acompanhamento
- `p.p4` — 🛡️ Prevenção Quaternária (bloco laranja)

## Licença

CC BY-SA 4.0 — uso educacional, atribuição obrigatória, mesma licença em derivados.

