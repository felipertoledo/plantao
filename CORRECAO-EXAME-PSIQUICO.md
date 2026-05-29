# 🔧 Por que o Exame Psíquico não aparecia — e a correção

## Diagnóstico
As 5 patologias do exame psíquico existem dentro do arquivo `pat-psiq-exame.js`:
- exame-psiquico-completo (12 eixos)
- avaliacao-risco-suicida
- sindromes-psicopatologicas
- diagnosticos-diferenciais-psiq
- exame-psiquico-populacoes

**Mas o `index.html` não estava carregando esse arquivo.** Sem a linha `<script src="pat-psiq-exame.js">`, o navegador nunca lê o arquivo → as patologias não entram na lista, não aparecem na busca, não abrem por URL. O arquivo está lá, só não é "ligado".

## Correção (1 linha no index.html)

1. Abra o `index.html` do repositório → editar (lápis).
2. Localize a linha:
   ```html
   <script src="pat-psiq.js" defer></script>
   ```
3. Adicione **logo abaixo** dela:
   ```html
   <script src="pat-psiq-exame.js" defer></script>
   ```
4. Confirme que o arquivo **`pat-psiq-exame.js` está no repositório** (raiz, junto dos outros `pat-*.js`). Se não estiver, suba o que está neste ZIP.
5. Commit.

Depois disso, busque por "exame psíquico", "síndromes", "delirium", "risco suicida" — testei e todas retornam as patologias certas. Também abrem direto por `/#/p/exame-psiquico-completo`.

## ⚠ Segundo ponto a conferir — atípicos (meds-psiq-amp.js)
Encontrei o **mesmo problema** com `meds-psiq-amp.js` (15 antipsicóticos: risperidona, olanzapina, quetiapina, aripiprazol, clozapina, paliperidona, etc).

**Antes de mexer, confira na sua produção:** abra `/#/meds` e busque "risperidona" ou "olanzapina".
- **Se aparecem** → estão sendo carregados de outro jeito no seu repo; **não mexa**.
- **Se NÃO aparecem** → faça a mesma correção: confirme que `meds-psiq-amp.js` está no repo e adicione no index.html, após a linha do `meds-psiq.js`:
   ```html
   <script src="meds-psiq-amp.js" defer></script>
   ```
   (arquivo incluído neste ZIP por garantia)

## 💡 Para nunca mais acontecer
Esse tipo de "arquivo no repo mas fora do index" é fácil de esquecer ao adicionar conteúdo novo. Se quiser, na próxima eu adapto a GitHub Action (das melhorias de SEO) para **conferir automaticamente** se todo `pat-*.js`/`meds-*.js` está registrado no index e avisar (ou corrigir) — aí conteúdo novo nunca fica invisível.
