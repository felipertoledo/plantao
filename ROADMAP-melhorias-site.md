# 🗺️ Roadmap das melhorias — Vovôminic Doutô (plantão)

> Documento vivo. Status verificado lendo o repositório público real (clone direto).
> Atualizado em 29/05/2026.

---

## Quadro de status

| # | Item | Impacto | Estado | Observação |
|---|------|---------|--------|------------|
| 1 | Offline real (service worker) | 🔴 alto | ✅ no ar | `service-worker.js` real (pré-cache index + 93 JS). |
| 2 | SEO das medicações (/m/) | 🔴 alto | ✅ no ar | pasta `m/` com 308 páginas. |
| 3 | Performance / bundling | 🔴 alto | ⚠️ **meio-feito** | `build_bundle.py` está no repo, mas faltou o passo no `build.yml` → bundle **não rodou**. Corrigido: subir o novo `build.yml`. |
| 4 | Escalas como calculadoras | 🟡 médio | ✅ núcleo no ar | 42 escalas registradas. Faltam ~11. |
| 5 | Acessibilidade | 🟡 médio | ✅ **construído** (esta sessão) | `ui-a11y.js` testado 20/20. Falta registrar 1 tag + deploy. |

---

## Pendências, em ordem

### ➊ #3 Bundling — corrigir o deploy (1 passo)
Você subiu `tools/build_bundle.py`, mas **não** editou o workflow → a Action nunca
rodou o bundler. **Solução:** substituir `.github/workflows/build.yml` pelo arquivo
corrigido (já tem o passo do bundle + `bundle-data.js` no `git add` + paths-ignore).
Push → a Action gera o bundle, colapsa o index (97→16), encolhe o SW e corrige a
duplicata do `pat-neuro-mfc-tier2.js`.
- **Pronto quando:** `bundle-data.js` existe no repo e o index tem 1 tag de bundle.

### ➋ #5 Acessibilidade — registrar + deploy
`ui-a11y.js` pronto e testado. **Solução:** subir o arquivo + adicionar
`<script src="ui-a11y.js" defer></script>` depois do `app.js`.
- **Pronto quando:** navegação 100% por teclado funciona + Lighthouse a11y ≥ 90.
- Resta só checagem visual de **contraste AA** (rodar Lighthouse; ajustar cor se reprovar).

### ➌ #4 — fechar as ~11 escalas restantes
Arquivo novo `calcs-psiq-extra2.js`, mesmo padrão das 42 já no ar:
- 🟢 calculadoras: ASSIST, RASS, 4AT, PSQI, ISI, PCL-5, Y-BOCS, WHO-5,
  PHQ-2/GAD-2 isolados, Teste do Relógio standalone, Zarit.
- 🟡 ficha (licenciada): Morisky (MMAS).
- **Pronto quando:** `node -c` ok, 0 colisão de ID, calc/interp vazio e cheio.

---

## Acesso ao GitHub (resumo honesto)
- **Leitura:** sim — repo público, clono direto e verifico tudo (foi assim que
  descobri que o #3 estava meio-feito).
- **Escrita:** não — sem conector e sem manuseio de credenciais. O push é você.

## Regras anti-retrabalho
1. Toda entrega → `.zip` em outputs + este quadro atualizado.
2. "Construído" ≠ "no ar": só ✅ "no ar" quando verificado no repo.
3. Cada item tem **Definição de pronto** explícita.

---
Felipe Ribeiro Toledo — Médico — CRM-SP 216.986
