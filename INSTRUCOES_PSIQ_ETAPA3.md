# 💊 Etapa 3 — +25 psicofármacos (SUS e fora do SUS)

## Arquivo: `meds-psiq-extra2.js` (arquivo NOVO, 59 KB) — 0 colisão

Agora o acervo psiquiátrico tem **80 psicofármacos** (12 + 15 + 28 + 25).

### As 25 novas, por categoria:

**Antidepressivos / IMAO (4)** — todos particulares
- Tianeptina (Stablon — ⚠ risco abuso dose alta)
- Moclobemida (IMAO reversível — menos restrição dietética)
- Tranilcipromina (IMAO irreversível — ⚠ dieta tiramina rígida, especializado)
- Doxepina (tricíclico — nicho dose baixa para insônia/prurido)

**Benzamidas / antipsicóticos típicos (8)**
- Sulpirida (Equilid/Dogmatil — dose-dependente) · particular
- Amisulprida (Socian — ⚠ QT) · particular
- Periciazina (Neuleptil — conduta/agitação) · particular C1
- Flufenazina + decanoato (Anatensol) · **parte SUS**
- Trifluoperazina · particular C1
- Pimozida (Orap — Tourette, ⚠⚠ QT) · particular C1
- Zuclopentixol (Clopixol — agudo/Acuphase + depot) · particular
- Penfluridol (Semap — oral SEMANAL) · particular C1

**BZD / hipnóticos / ansiolíticos (6)**
- Cloxazolam (Olcadil) · particular B1
- Clordiazepóxido (abstinência alcoólica) · particular B1
- Clobazam (Frisium — ansiolítico + antiepiléptico) · **CEAF** (epilepsia)
- Zopiclona (Imovane) · particular B1
- **Melatonina** (1ª escolha de baixo risco p/ sono) · suplemento
- Etifoxina (Stresam — ⚠ hepato) · particular

**Estimulante / TDAH / TEPT (3)**
- Modafinila (Stavigile — narcolepsia/fadiga) · particular A3
- Guanfacina (Intuniv — TDAH não-estimulante) · particular
- Prazosina (pesadelos do TEPT — off-label) · particular

**Emergência / extrapiramidal / outros (4)**
- Flumazenil (antídoto BZD — ⚠⚠ cuidado convulsão) · hospitalar SUS
- Difenidramina (distonia aguda — alternativa ao biperideno) · parte SUS
- Amantadina (SEP/parkinsonismo medicamentoso — não-anticolinérgica, boa no idoso) · **CEAF**
- Nicotina reposição (adesivo/goma) · **SUS-PNCT**

### Disponibilidade SUS confirmada nas novas:
- **CEAF**: clobazam (epilepsia), amantadina (Parkinson)
- **Parte da rede**: flufenazina (oral/decanoato), difenidramina (injetável), flumazenil (emergência)
- **PNCT**: nicotina reposição

### Cada uma tem: classe, sinônimos, formas, resumo com P4, **dose explícita** (rápida + por indicação), ajustes (IRC/IH/idoso/gestante/lactação/ped), mecanismo, farmacocinética, efeitos (comuns+sérios), interações, contraindicações, monitoramento, gestação, disponibilidade SUS, referências.

## Validação
```
308 medicações totais · 80 psicofármacos
0 colisão de ID · schema idêntico (renderMed OK)
Todas com dose explícita ✓ · Auditoria 0 ALTO
```

## Como subir (2 passos)
1. **Upload** `meds-psiq-extra2.js` no repo
2. **index.html**: adicionar após a linha do `meds-psiq-extra.js`:
```html
<script src="meds-psiq-extra2.js" defer></script>
```
Commit sugerido: `feat: +25 psicofármacos (benzamidas, típicos depot, IMAO, hipnóticos, TDAH, antídoto)`
