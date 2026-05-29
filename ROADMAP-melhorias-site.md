# 🗺️ Roadmap das melhorias — Vovôminic Doutô (plantão)

> Documento vivo, para não nos perdermos entre sessões. Status **verificado lendo
> o repositório público real** (clone direto, sem credenciais) em 29/05/2026.

---

## Quadro de status (✅ = confirmado no repo)

| # | Item | Impacto | No ar? | Evidência / o que falta |
|---|------|---------|--------|--------------------------|
| 1 | Offline real (service worker) | 🔴 alto | ✅ **SIM** | `service-worker.js` real no repo (pré-cache index + 93 JS, cache-first, hash de versão). Não é mais Blob URL. |
| 2 | SEO das medicações (/m/) | 🔴 alto | ✅ **SIM** | pasta `m/` com **308 páginas** `.html`. |
| 3 | **Performance / bundling** | 🔴 alto | ⏳ pronto p/ deploy | `tools/build_bundle.py` testado no index real (**97→16**, 82 dados→1). Falta subir + editar build.yml (PATCH incluído). |
| 4 | Escalas como calculadoras | 🟡 médio | ✅ núcleo no ar | `calcs-psiq-extra.js` (79 KB, 42 escalas) presente e registrado no index (linha 2966). Faltam ~11. |
| 5 | Acessibilidade (aria/role/teclado) | 🟡 médio | ❌ não | baseline confirmado: só **10** ocorrências aria-/role no index inteiro. A fazer do zero. |

**Correção vs sessões anteriores:** #1 e #2 estavam como "construído, não confirmado
no ar" — agora **confirmados no ar** (lidos no repo). A dúvida acabou.

---

## O que REALMENTE falta (em ordem de impacto)

### ➊ #3 Bundling — ⏳ pronto, aguardando deploy
- Entregue e validado contra o `index.html` real (não em sandbox sintético).
- **Definição de pronto:** build.yml roda o bundle antes do `build_sw`; index
  carrega `bundle-data.js`; site abre normal; requisições caem de 97 p/ ~16.
- Bônus já embutido: corrige a carga dupla de `pat-neuro-mfc-tier2.js`.

### ➋ #5 Acessibilidade — ❌ a fazer (próxima alavanca)
Como leio o repo, posso construir os patches direto sobre o `app.js`/`index.html`
reais (você só sobe). Escopo:
- `role` + `aria-label` em busca, abas de sistema, cards de patologia/medicação.
- Foco visível + navegação Tab/Enter na busca e nos resultados.
- `aria-live` na área de resultado das calculadoras (leitor anuncia o escore).
- `alt`/`aria-hidden` em ícones/SVG decorativos.
- Contraste AA nas cores de severidade.
- **Definição de pronto:** navegação 100% por teclado + leitor de tela + Lighthouse a11y >= 90.

### ➌ #4 — fechar as ~11 escalas restantes — 🟡 a fazer
Arquivo novo `calcs-psiq-extra2.js`, mesmo padrão das 42 já no ar:
- 🟢 livres -> calculadora: **ASSIST, RASS, 4AT, PSQI, ISI, PCL-5, Y-BOCS, WHO-5,
  PHQ-2/GAD-2 isolados, Teste do Relógio standalone, Zarit**.
- 🟡 licenciada -> ficha: **Morisky (MMAS)**.
- **Definição de pronto:** `node -c` ok, 0 colisão de ID, calc/interp vazio e cheio.

---

## Como nosso fluxo melhorou (acesso ao GitHub)
- **Leitura: SIM.** O repo é público -> eu clono direto (sem login) e trabalho
  contra os arquivos reais + verifico o que está no ar. Já usei isso nesta sessão.
- **Escrita: NÃO.** Não há conector do GitHub para autorizar escrita, e eu não
  manuseio credenciais. Subir os arquivos continua sendo você (upload na interface
  ou a Action fazendo o trabalho repetitivo).
- **Na prática:** eu construo e verifico com precisão; você dá o push.

## Regras anti-retrabalho
1. Toda entrega -> `.zip` em outputs + este quadro atualizado.
2. "Construído" != "no ar": só ✅ quando verificado no repo (que agora eu leio).
3. Cada item tem **Definição de pronto** explícita acima.
4. Antes de criar conteúdo novo, conferir o repo (fonte da verdade; sandbox reseta).

---
Felipe Ribeiro Toledo — Médico — CRM-SP 216.986
