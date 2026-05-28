# 📥 INSTRUÇÕES — Subir 3 alterações no repositório plantao

Como sua versão de produção tem 403 patologias / 91 calculadoras (diferente do meu sandbox), as instruções abaixo são **incrementais**: você só toca onde precisa, sem substituir arquivos inteiros.

---

## PASSO 1 — Subir 2 arquivos novos (mais fácil)

Esses arquivos AINDA NÃO existem no seu repositório. Basta subir.

### Pelo GitHub Web UI

1. Vai no seu repo: https://github.com/felipertoledo/plantao
2. Clica em **"Add file"** (botão verde, ao lado de Code) → **"Upload files"**
3. Arrasta os 2 arquivos: **`pdf-generator.js`** e **`ui-consulta.js`** (estão dentro deste ZIP)
4. Em "Commit message" escreve: `feat: adicionar geração de PDF para consulta e receituário`
5. Clica em **"Commit changes"** (verde, embaixo)

✅ Pronto, os 2 arquivos estão no repo.

---

## PASSO 2 — Editar `index.html` (2 alterações pontuais)

Não substitui o arquivo todo. Só adiciona 2 trechos.

### 2A) Adicionar tags `<script>` para os 2 arquivos novos

1. Abre o `index.html` no GitHub: https://github.com/felipertoledo/plantao/blob/main/index.html
2. Clica no ícone do **lápis** (✏️ Edit, canto superior direito do arquivo)
3. Usa **Ctrl+F** (busca) e procura por: `</body>`
4. **ANTES** da tag `</body>`, adiciona estas 3 linhas:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" defer></script>
<script src="pdf-generator.js" defer></script>
<script src="ui-consulta.js" defer></script>
```

> **Atenção**: se já existem essas linhas (porque você subiu uma versão anterior), NÃO duplica — pula essa etapa.

### 2B) Adicionar o CSS dos cards "Documentos clínicos"

Ainda no mesmo arquivo, **procura por**: `/* ============== QUICK CARDS ============== */`

(É o comentário CSS que separa a seção de quick-cards. Deve aparecer 1 vez no arquivo.)

**ANTES** dessa linha, cola este bloco CSS:

```css
/* ============== DOCS GRID — Documentos clínicos ============== */
.docs-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.8rem;
}
@media (min-width: 700px) { .docs-grid { grid-template-columns: repeat(3, 1fr); } }

.doc-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.2rem 1.3rem;
  background: var(--bg-elev);
  border: 1px solid var(--rule);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius-lg);
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  color: var(--ink);
  transition: all .15s;
  box-shadow: var(--shadow-1);
}
.doc-card:hover {
  border-color: var(--accent);
  border-left-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: var(--shadow-2);
}
.doc-card-config { border-left-color: var(--ink-3); }
.doc-card-config:hover { border-left-color: var(--accent); }
.doc-card-icon {
  font-size: 1.8rem;
  line-height: 1;
  flex-shrink: 0;
}
.doc-card-body { flex: 1; }
.doc-card-body h3 {
  margin: 0 0 0.3rem;
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: var(--ink);
}
.doc-card-body p {
  margin: 0 0 0.6rem;
  font-size: 0.85rem;
  color: var(--ink-3);
  line-height: 1.4;
}
.doc-card-cta {
  display: inline-block;
  font-size: 0.82rem;
  color: var(--accent);
  font-weight: 600;
}
```

### Salvar

1. Rola até o fim
2. Em "Commit message": `feat: adicionar scripts e CSS para PDFs de consulta`
3. Clica em **"Commit changes"**

---

## PASSO 3 — Testar

Espera o deploy do GitHub Pages (1-2 minutos), depois:

1. Abre: https://felipertoledo.github.io/plantao/#/prefs
2. Deve aparecer "⚠ Configuração pendente" (a migração apagou seus dados antigos)
3. Preenche seu nome (Felipe Ribeiro Toledo), CRM, UBS, etc → **Salvar**
4. Abre: https://felipertoledo.github.io/plantao/#/consulta — deve abrir o formulário
5. Abre: https://felipertoledo.github.io/plantao/#/receituario — deve abrir o formulário
6. Preenche um teste, clica em "Gerar PDF" → deve baixar

---

## ⚠ O que NÃO vai funcionar ainda

Os botões **"📄 Consulta"** e **"🧾 Receituário"** ao lado de Fluxogramas na home + a seção "Documentos clínicos" — esses dependem do `app.js`. 

Como sua versão tem 403 patologias e a minha 396, **eu não posso te mandar um `app.js` pronto sem antes ter sua versão atualizada**. 

### Se quiser destravar isso depois

Me manda o ZIP do seu repositório atual (`https://github.com/felipertoledo/plantao` → Code → Download ZIP) que eu pego seu `app.js`, adiciono os botões e a seção de cards, e te devolvo o arquivo pronto pra commit.

Enquanto isso, você acessa `/#/consulta` e `/#/receituario` pelos **ícones no header** (📄 e 🧾 que devem aparecer perto do tema toggle, se o app.js que você subiu antes já tem isso) ou diretamente pela URL.

