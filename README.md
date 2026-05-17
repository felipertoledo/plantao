# Vovôminic Doutô — Guia Clínico

Guia clínico educacional em medicina, baseado em diretrizes brasileiras e internacionais.
Cobre **Pronto Atendimento (PA)** e **Atenção Primária à Saúde (UBS)**.

**Sem fins lucrativos** — Felipe Ribeiro Toledo (CRM-SP 216.986) · @vovôminic

---

## Conteúdo (Rodada 2)

- **272 patologias** (PA + UBS) com CID-10 + CIAP-2 (247 com CIAP, 91%)
- **192 medicações** com fontes (REMUME, RDC, bula, ANVISA)
- **71 calculadoras** clínicas
- **29 fluxogramas** decisionais
- **12 figuras** cardio (ECG, anatomia coronária, ACLS)

## Adicionado na Rodada 2 (+21 patologias UBS)

### Vacinação (sistema "vacina" — 12 patologias)
- **PEP (Profilaxia Pós-Exposição)**: Tétano, Raiva, Hepatite B, HIV
- **Calendários PNI 2026**: Adulto, Idoso, Gestante
- **CRIE**: vacinas especiais para imunossuprimidos
- **Hesitação vacinal** (abordagem freireana)
- **EAPV** (eventos adversos pós-vacinação)
- **Vacinação ocupacional** (profissionais de saúde)
- **Resgate vacinal** (esquemas incompletos/atrasos)

### Crônicos MFC com PTS (sistema "cron" — 3 patologias)
- **HAS crônica** com PTS estruturado completo (REMUME, MEV, fármacos SUS)
- **DM2 crônico** com PTS estruturado completo  
- **Síndrome metabólica**

### Saúde Mental MFC (sistema "smen" — 6 patologias)
- **Depressão** (PHQ-9, AD, matriciamento CAPS)
- **Ansiedade** (ISRS, P4 BZD)
- **Álcool** (AUDIT, intervenção motivacional, abstinência)
- **Tabagismo** (PNCT, bupropiona + adesivo nicotina)
- **Insônia** (TCC-I, despresecrição hipnóticos)
- **Sofrimento Psíquico / Luto** — P4 explícita, NÃO medicalizar

---

## Estrutura UBS expandida — campos renderizados no modo completo

Cada patologia UBS pode ter campos opcionais (`pat-cron`, `pat-smen`, `pat-vacina` têm todos):
- `intro` — Introdução
- `apresentacao` — Apresentação clínica
- `sintomas[]` — Sinais e sintomas
- `fisio` — Fisiopatologia
- `profilaxia` — Profilaxia e cuidados
- `freire` — 🗣️ Orientação ao paciente (lente freireana, bloco verde)
- `sus_tx` — Tratamento no SUS
- `padrao_ouro` — Tratamento padrão-ouro
- `prog` — Prognóstico
- `acomp` — Acompanhamento
- `p4` — 🛡️ Prevenção Quaternária (bloco laranja)

## Sistema de filtro

Toggle no início da home: **⚡ Plantão** · **🌳 UBS** · **⚙ Tudo**
- **Plantão**: 256 patologias / 192 meds / 71 calcs
- **UBS**: 217 patologias / 176 meds / 59 calcs
- **Tudo**: tudo visível

Persistência em localStorage.

## Próximas rodadas

| Rodada | Conteúdo |
|---|---|
| 3 | Saúde do Idoso (Beers, STOPP-START, polifarmácia, demência, osteoporose, quedas) |
| 4 | Rastreamento (sociedades brasileiras + MS) + Prevenção Quaternária |

## Deploy

```bash
# Copiar conteúdo do ZIP para o repo do GitHub Pages
cp -r vovominic-douto-rodada2/* /caminho/para/repo/plantao/
git add . && git commit -m "Vovôminic Doutô — Rodada 2 (Vacinação + Crônicos + Saúde Mental MFC)" && git push
```

GitHub Pages serve em `usuario.github.io/plantao/`. O arquivo `.nojekyll` é obrigatório.

## Licença

CC BY-SA 4.0 — uso educacional, atribuição obrigatória, derivados sob mesma licença.
