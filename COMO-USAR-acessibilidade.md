# ♿ Acessibilidade — item #5 (camada aditiva)

## O que é
`ui-a11y.js` — um script **aditivo** que melhora a acessibilidade **sem tocar no
`app.js`**. Ele aplica ARIA/roles/teclado por cima do DOM (no load + via
MutationObserver, pegando também o conteúdo renderizado depois).

## O que ele resolve (testado, 20/20 no jsdom)
- **Landmarks:** `header[role=banner]`, `#view[role=main]`, e **skip-link**
  ("Pular para o conteúdo") como 1º foco da página.
- **Busca = combobox navegável por teclado:** `#search` vira `role=combobox`
  com `aria-expanded`/`aria-controls`; `#searchResults` vira `role=listbox`;
  cada item vira `role=option`. Setas ↑/↓ navegam, **Enter** ativa, **Esc** fecha
  (os itens eram `<a onclick>` sem `href` — antes não dava pra usar no teclado).
- **Calculadoras anunciam o resultado:** cada `.calc-result` recebe
  `role=status` + `aria-live=polite`, então o leitor de tela fala o escore e a
  interpretação assim que você preenche os campos.
- **Foco visível:** anel de foco (`:focus-visible`) em tudo que é interativo.
- **SVGs decorativos** marcados `aria-hidden` (não poluem o leitor de tela);
  os botões de ícone já tinham `aria-label`, então continuam anunciados certo.
- **Breadcrumb** (`nav.bread`) rotulada.

> Os cards (`sys-card`, `doc-card`) já são `<button>` — nativamente acessíveis por
> teclado. Por isso o script foca onde havia lacuna real (busca e resultado).

## Como registrar (1 linha no index.html)
Adicione logo **depois** do `app.js` (junto dos outros `ui-*.js`):
```html
<script src="ui-a11y.js" defer></script>
```
- Não é arquivo de dados → o `sync_index` não mexe e o `build_bundle` **não** o
  bundla (fica como tag própria, igual aos outros `ui-*.js`).
- O `build_sw.py` lê as tags do index → o service worker passa a cacheá-lo
  sozinho (funciona offline também).

## O que NÃO está incluído (precisa de checagem visual)
- **Contraste AA das cores:** o script garante a estrutura (roles, foco, anúncios),
  mas o contraste de cor é visual. Rode o **Lighthouse → Accessibility** depois de
  subir; se alguma cor de severidade reprovar, a gente ajusta o valor no CSS.

## Verificar depois de subir
1. Navegue o site **só com Tab/Enter/setas** — deve dar pra usar tudo, inclusive a busca.
2. Lighthouse (DevTools → Lighthouse → Accessibility) → meta **≥ 90**.
