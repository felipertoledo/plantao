# 🧠 Etapa 1 concluída — Exame Psíquico (5 patologias educativas)

## O que mudou em `pat-psiq-exame.js`

**Antes** (já existia): 2 patologias educativas robustas
1. `exame-psiquico-completo` — Guia em 12 eixos
2. `avaliacao-risco-suicida` — Avaliação estruturada de risco suicida

**Agora**: +3 patologias complementares (82.660 chars adicionados)

3. **`sindromes-psicopatologicas`** — 11 síndromes clínicas com lente freireana
   - Depressiva · Maníaca/Hipomaníaca · Ansiosa · Psicótica positiva · Psicótica negativa · Confusional aguda (delirium) · Demencial · Catatônica · Obsessivo-compulsiva · Conversiva/Dissociativa · Depressiva no idoso (atípica)
   - Cada uma com: núcleo clínico · achados nos 12 eixos · diagnóstico diferencial · causas orgânicas a investigar · quando referenciar

4. **`diagnosticos-diferenciais-psiq`** — 10 confusões clínicas frequentes
   - Delirium × Demência × Pseudodemência
   - Tristeza × Síndrome depressiva × TDM
   - Luto × Depressão maior (com mudança DSM-5-TR sobre luto)
   - Psicose × Experiência cultural/religiosa
   - Mania × Hipomania × Personalidade extrovertida
   - Bipolar × Borderline (TPB)
   - TOC × Personalidade obsessivo-compulsiva (TPOC)
   - Burnout × Depressão (com lente ética)
   - Ataque de pânico × IAM/arritmia (especialmente mulher)
   - Insônia primária × Insônia secundária

5. **`exame-psiquico-populacoes`** — 6 populações especiais
   - 👶 Criança (3-11a) — exame via observação e brincar; sinais de TEA, TDAH, violência
   - 🧒 Adolescente (12-19a) — sigilo, HEEADSS, autolesão, debut de transtornos sérios
   - 🤰 Gestante — EPDS por trimestre, ISRS seguros (sertralina), evitar valproato/BZD
   - 🤱 Puérpera — distinção crítica baby blues × DPP × psicose puerperal (emergência)
   - 👴 Idoso — apresentação atípica, START LOW GO SLOW, polifarmácia, alta letalidade suicida
   - ♿ Pessoa com deficiência intelectual — adaptar comunicação, mudança comportamental = investigar causa física primeiro

## Quantitativo
```
Patologias psiquiátricas educativas: 5
Total patologias sis="psiq": 22
Total no site: 401 patologias
Auditoria de doses: 0 ALTO mantido
SEO: 548 URLs regeneradas
```

## URLs novas geradas
- `/p/sindromes-psicopatologicas`
- `/p/diagnosticos-diferenciais-psiq`
- `/p/exame-psiquico-populacoes`

## Como subir no repo
Substitui o `pat-psiq-exame.js` do repo pelo do anexo. Como esse arquivo é específico (não é o que tem patologias psi clínicas — esse fica em `pat-psiq.js` e `pat-psiq-mfc-tier2.js`), **não há risco de conflito com sua versão em produção**.

### Via GitHub Web UI
1. Abre https://github.com/felipertoledo/plantao/blob/main/pat-psiq-exame.js
2. Ícone lápis (Edit)
3. Apaga TODO o conteúdo
4. Cola o conteúdo do `pat-psiq-exame.js` deste pacote
5. Commit: `feat: adicionar 3 patologias educativas psiq (síndromes, diferenciais, populações especiais)`
