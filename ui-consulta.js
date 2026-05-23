/* ============================================================
   UI — CONSULTA / RECEITUÁRIO / PREFERÊNCIAS
   Vovôminic Doutô — Felipe Ribeiro Toledo
   ============================================================ */

/* ============== CSS INLINE ESPECÍFICO ============== */
(function injectCSS(){
  if (document.getElementById("css-consulta")) return;
  const css = `
.form-section { background: var(--bg-elev); border: 1px solid var(--rule); border-radius: var(--radius-lg); padding: 1.2rem 1.4rem; margin-bottom: 1rem; }
.form-section h3 { margin: 0 0 0.8rem; font-size: 1rem; color: var(--accent); border-bottom: 1px solid var(--rule); padding-bottom: 0.4rem; font-family: var(--font-display); }
.form-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.8rem; }
.form-grid-full { grid-column: 1 / -1; }
.form-field { display: flex; flex-direction: column; gap: 0.3rem; }
.form-field label { font-size: 0.82rem; color: var(--ink-2); font-weight: 500; }
.form-field input, .form-field select, .form-field textarea {
  font-family: var(--font-body); font-size: 0.95rem; padding: 0.55rem 0.7rem;
  background: var(--bg); color: var(--ink); border: 1px solid var(--rule-2);
  border-radius: var(--radius); transition: border 0.15s;
}
.form-field input:focus, .form-field select:focus, .form-field textarea:focus {
  outline: none; border-color: var(--accent);
}
.form-field textarea { min-height: 70px; resize: vertical; font-family: var(--font-body); }
.form-field .hint { font-size: 0.78rem; color: var(--ink-3); margin-top: 0.2rem; }

.prescricao-bloco {
  background: var(--bg-sunken); border: 1px solid var(--rule); border-radius: var(--radius);
  padding: 0.8rem 1rem; margin-bottom: 0.6rem; position: relative;
}
.prescricao-bloco .bloco-num {
  display: inline-block; background: var(--accent); color: white;
  width: 22px; height: 22px; border-radius: 50%; text-align: center;
  font-size: 0.8rem; line-height: 22px; font-weight: 600; margin-right: 0.4rem;
}
.prescricao-bloco .bloco-remove {
  position: absolute; top: 0.5rem; right: 0.5rem; cursor: pointer;
  background: transparent; border: none; color: var(--ink-3);
  font-size: 1.1rem; padding: 0 0.3rem; line-height: 1;
}
.prescricao-bloco .bloco-remove:hover { color: var(--accent); }

.btn-add {
  background: var(--bg-elev); border: 1px dashed var(--rule-2); color: var(--accent);
  padding: 0.6rem 1rem; border-radius: var(--radius); cursor: pointer;
  font-weight: 500; font-size: 0.9rem; width: 100%; margin-top: 0.4rem;
  transition: all 0.15s;
}
.btn-add:hover { border-color: var(--accent); background: var(--accent); color: white; }

.actions-bar {
  display: flex; gap: 0.6rem; justify-content: space-between; flex-wrap: wrap;
  padding: 1rem 0; margin-top: 1rem; border-top: 2px solid var(--rule);
}
.actions-bar .left, .actions-bar .right { display: flex; gap: 0.6rem; }
.btn-pdf {
  background: var(--accent); color: white; border: 1px solid var(--accent);
  padding: 0.7rem 1.4rem; border-radius: var(--radius); font-weight: 600;
  cursor: pointer; font-size: 0.95rem; transition: background 0.15s;
}
.btn-pdf:hover { background: var(--accent-2); }
.btn-secondary {
  background: var(--bg-elev); color: var(--ink); border: 1px solid var(--rule-2);
  padding: 0.7rem 1.2rem; border-radius: var(--radius); font-weight: 500;
  cursor: pointer; font-size: 0.92rem;
}
.btn-secondary:hover { border-color: var(--accent); color: var(--accent); }
.btn-danger {
  background: transparent; color: var(--ink-3); border: 1px solid var(--rule-2);
  padding: 0.7rem 1.2rem; border-radius: var(--radius); font-size: 0.92rem;
  cursor: pointer;
}
.btn-danger:hover { color: var(--accent); border-color: var(--accent); }

.consulta-hero {
  background: linear-gradient(135deg, var(--bg-elev) 0%, var(--bg-sunken) 100%);
  border: 1px solid var(--rule); border-radius: var(--radius-lg);
  padding: 1.5rem 1.8rem; margin-bottom: 1.5rem;
}
.consulta-hero h1 { font-family: var(--font-display); margin: 0 0 0.4rem; font-size: 1.6rem; }
.consulta-hero p { margin: 0; color: var(--ink-3); }

.pref-status {
  display: inline-block; padding: 0.3rem 0.7rem; border-radius: 100px;
  font-size: 0.82rem; margin-left: 0.5rem;
}
.pref-status.ok { background: var(--ok-bg); color: var(--ok); border: 1px solid var(--ok); }
.pref-status.warn { background: var(--warn-bg); color: var(--warn); border: 1px solid var(--warn); }

.toast-saved {
  position: fixed; bottom: 20px; right: 20px; background: var(--ok);
  color: white; padding: 0.8rem 1.4rem; border-radius: var(--radius);
  font-weight: 500; z-index: 9999; box-shadow: var(--shadow-2);
  animation: slideUp 0.3s ease-out;
}
@keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
`;
  const style = document.createElement("style");
  style.id = "css-consulta";
  style.textContent = css;
  document.head.appendChild(style);
})();

/* ============== HELPERS ============== */
function toast(msg, tipo = "ok") {
  const t = document.createElement("div");
  t.className = "toast-saved";
  if (tipo === "warn") t.style.background = "var(--warn)";
  if (tipo === "err") t.style.background = "var(--accent)";
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2500);
}

function valOf(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : "";
}

function setVal(id, v) {
  const el = document.getElementById(id);
  if (el) el.value = v || "";
}

/* ============== RENDER: PREFERÊNCIAS ============== */
function renderPrefs() {
  window.scrollTo(0, 0);
  const prefs = window.pdfGen.getPrefsMedico();
  const completo = window.pdfGen.prefsEstaoCompletas(prefs);
  const view = document.getElementById("view");
  view.innerHTML = `
    <section class="container">
      <div class="consulta-hero">
        <h1>Configurar dados do médico</h1>
        <p>Dados que aparecem no cabeçalho dos PDFs gerados (consulta, receituário). <strong>Este site é público e pode ser usado por qualquer profissional</strong> — os dados ficam salvos APENAS no seu próprio navegador (localStorage), nunca são enviados para nenhum servidor. Preencha uma vez e use à vontade.</p>
      </div>
      
      <div class="alert alert-${completo ? 'ok' : 'warn'}" style="margin-bottom:1rem;padding:0.9rem 1.1rem;border-radius:var(--radius);display:flex;gap:0.6rem;">
        <span class="alert-ic">${completo ? '✓' : '⚠'}</span>
        <div><strong>${completo ? 'Configuração completa' : 'Configuração pendente'}</strong><br>${completo ? `${esc(prefs.nome)} — ${esc(prefs.crm)} · você já pode emitir PDFs.` : 'Preencha pelo menos <strong>nome completo</strong> e <strong>registro profissional (CRM/CRO/etc.)</strong> antes de emitir PDFs.'}</div>
      </div>
      
      <div class="form-section">
        <h3>Identificação profissional <span style="color:var(--accent);font-size:0.9rem;font-weight:normal">(obrigatório)</span></h3>
        <div class="form-grid">
          <div class="form-field form-grid-full">
            <label>Nome completo *</label>
            <input type="text" id="pref-nome" value="${esc(prefs.nome)}" placeholder="Seu nome completo">
          </div>
          <div class="form-field">
            <label>Título profissional</label>
            <input type="text" id="pref-titulo" value="${esc(prefs.titulo)}" placeholder="Médico(a) / Enfermeiro(a) / Dentista">
          </div>
          <div class="form-field">
            <label>Registro profissional *</label>
            <input type="text" id="pref-crm" value="${esc(prefs.crm)}" placeholder="CRM-SP 000.000">
          </div>
        </div>
      </div>
      
      <div class="form-section">
        <h3>Local de atendimento <span style="color:var(--ink-3);font-size:0.85rem;font-weight:normal">(opcional)</span></h3>
        <div class="form-grid">
          <div class="form-field">
            <label>Estabelecimento</label>
            <input type="text" id="pref-estab" value="${esc(prefs.estabelecimento)}" placeholder="UBS / Hospital / Clínica / Consultório">
          </div>
          <div class="form-field">
            <label>Setor / unidade / bairro</label>
            <input type="text" id="pref-bairro" value="${esc(prefs.bairro)}" placeholder="Setor, ala, bairro">
          </div>
          <div class="form-field form-grid-full">
            <label>Endereço</label>
            <input type="text" id="pref-end" value="${esc(prefs.endereco)}" placeholder="Rua, número">
          </div>
          <div class="form-field">
            <label>Cidade / UF</label>
            <input type="text" id="pref-cidade" value="${esc(prefs.cidade)}" placeholder="Cidade / UF">
          </div>
        </div>
      </div>
      
      <div class="form-section">
        <h3>Contato <span style="color:var(--ink-3);font-size:0.85rem;font-weight:normal">(opcional)</span></h3>
        <div class="form-grid">
          <div class="form-field">
            <label>Telefone</label>
            <input type="text" id="pref-tel" value="${esc(prefs.telefone)}" placeholder="(00) 0000-0000">
          </div>
          <div class="form-field">
            <label>E-mail</label>
            <input type="email" id="pref-email" value="${esc(prefs.email)}" placeholder="seu@email.com">
          </div>
        </div>
      </div>
      
      <div class="actions-bar">
        <div class="left">
          <button class="btn-secondary" onclick="navigate('#/')">← Início</button>
          <button class="btn-danger" onclick="limparPrefs()">Apagar tudo</button>
        </div>
        <div class="right">
          <button class="btn-pdf" onclick="salvarPrefs()">Salvar</button>
        </div>
      </div>
      
      <p style="margin-top:1.5rem;color:var(--ink-3);font-size:0.85rem;text-align:center;">
        🔒 Os dados ficam APENAS no seu navegador (localStorage). Nada é enviado para servidor algum. Se você limpar o cache/usar aba anônima, precisará preencher novamente.
      </p>
    </section>
  `;
}

function limparPrefs() {
  if (!confirm("Apagar TODAS as suas configurações? Esta ação não pode ser desfeita.")) return;
  localStorage.removeItem("vovo_prefs_medico_v1");
  renderPrefs();
  toast("Configurações apagadas");
}

function salvarPrefs() {
  const prefs = {
    nome: valOf("pref-nome"),
    titulo: valOf("pref-titulo"),
    crm: valOf("pref-crm"),
    estabelecimento: valOf("pref-estab"),
    bairro: valOf("pref-bairro"),
    endereco: valOf("pref-end"),
    cidade: valOf("pref-cidade"),
    telefone: valOf("pref-tel"),
    email: valOf("pref-email"),
  };
  if (window.pdfGen.setPrefsMedico(prefs)) {
    toast("Preferências salvas!");
  } else {
    toast("Erro ao salvar (verifique permissões do navegador)", "err");
  }
}

/* ============== RENDER: CONSULTA COMPLETA ============== */
function renderConsulta() {
  window.scrollTo(0, 0);
  const prefs = window.pdfGen.getPrefsMedico();
  const view = document.getElementById("view");
  const prefStatus = prefs.nome && prefs.crm ? 
    `<span class="pref-status ok">✓ ${esc(prefs.nome)} — ${esc(prefs.crm)}</span>` :
    `<span class="pref-status warn">⚠ Preferências incompletas — <a href="#/prefs" style="color:inherit;text-decoration:underline">configurar</a></span>`;
  
  view.innerHTML = `
    <section class="container">
      <div class="consulta-hero">
        <h1>Registro de Consulta</h1>
        <p>Formulário completo para emitir PDF da consulta — paciente + queixa + diagnóstico + escalas + prescrição + orientações. Para imprimir e arquivar fisicamente.${prefStatus}</p>
      </div>
      
      <!-- METADADOS -->
      <div class="form-section">
        <h3>Metadados</h3>
        <div class="form-grid">
          <div class="form-field">
            <label>Data da consulta</label>
            <input type="date" id="c-data" value="${formatarDataHojeISO()}">
          </div>
          <div class="form-field">
            <label>Hora</label>
            <input type="time" id="c-hora" value="${horaAgoraHHMM()}">
          </div>
          <div class="form-field">
            <label>Local (opcional — preenche das prefs)</label>
            <input type="text" id="c-local" placeholder="${esc(prefs.estabelecimento)}">
          </div>
        </div>
      </div>
      
      <!-- IDENTIFICAÇÃO DO PACIENTE -->
      <div class="form-section">
        <h3>Identificação do paciente</h3>
        <div class="form-grid">
          <div class="form-field form-grid-full">
            <label>Nome completo *</label>
            <input type="text" id="c-pac-nome" placeholder="Nome do paciente">
          </div>
          <div class="form-field">
            <label>Idade</label>
            <input type="number" id="c-pac-idade" placeholder="65" min="0" max="120">
          </div>
          <div class="form-field">
            <label>Sexo</label>
            <select id="c-pac-sexo">
              <option value="">Não informado</option>
              <option value="F">Feminino</option>
              <option value="M">Masculino</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
          <div class="form-field">
            <label>Data de nascimento</label>
            <input type="date" id="c-pac-nasc">
          </div>
          <div class="form-field">
            <label>CNS / CPF (opcional)</label>
            <input type="text" id="c-pac-cns" placeholder="000 0000 0000 0000">
          </div>
          <div class="form-field form-grid-full">
            <label>Endereço (opcional)</label>
            <input type="text" id="c-pac-end" placeholder="Rua, número, bairro">
          </div>
        </div>
      </div>
      
      <!-- QUEIXA + HDA -->
      <div class="form-section">
        <h3>Queixa principal e HDA</h3>
        <div class="form-grid">
          <div class="form-field form-grid-full">
            <label>Queixa principal</label>
            <input type="text" id="c-queixa" placeholder="Ex: cefaleia há 3 dias">
          </div>
          <div class="form-field form-grid-full">
            <label>História da Doença Atual</label>
            <textarea id="c-hda" placeholder="Detalhamento: início, evolução, fatores agravantes/aliviantes, sintomas associados, tratamentos prévios..."></textarea>
          </div>
        </div>
      </div>
      
      <!-- EXAME FÍSICO -->
      <div class="form-section">
        <h3>Exame físico</h3>
        <div class="form-grid">
          <div class="form-field form-grid-full">
            <label>Sinais vitais</label>
            <input type="text" id="c-vitais" placeholder="PA: 120/80 mmHg · FC: 72 bpm · FR: 16 ipm · T: 36,5°C · SpO2: 98% · Peso: 70 kg">
          </div>
          <div class="form-field form-grid-full">
            <label>Exame físico segmentar</label>
            <textarea id="c-exame" placeholder="Achados relevantes do exame por sistemas (geral, cardio, pulm, abdome, neuro, etc.)"></textarea>
          </div>
        </div>
      </div>
      
      <!-- ESCALAS APLICADAS -->
      <div class="form-section">
        <h3>Escalas aplicadas</h3>
        <div class="form-grid">
          <div class="form-field form-grid-full">
            <label>Escalas / scores</label>
            <textarea id="c-escalas" placeholder="PHQ-9: 12/27 (Depressão moderada)&#10;GAD-7: 8/21 (Ansiedade leve)&#10;..."></textarea>
            <div class="hint">Dica: aplique as escalas em outra aba e cole os resultados aqui.</div>
          </div>
        </div>
      </div>
      
      <!-- DIAGNÓSTICO -->
      <div class="form-section">
        <h3>Diagnóstico</h3>
        <div class="form-grid">
          <div class="form-field">
            <label>CID-10</label>
            <input type="text" id="c-cid" placeholder="F32.1, E11, ...">
          </div>
          <div class="form-field">
            <label>CIAP-2</label>
            <input type="text" id="c-ciap" placeholder="P03, T90, ...">
          </div>
          <div class="form-field form-grid-full">
            <label>Diagnóstico clínico (livre)</label>
            <textarea id="c-dx" placeholder="Descrição clínica do(s) diagnóstico(s)"></textarea>
          </div>
        </div>
      </div>
      
      <!-- PRESCRIÇÃO -->
      <div class="form-section">
        <h3>Conduta / Prescrição</h3>
        <div id="c-prescricoes"></div>
        <button class="btn-add" onclick="adicionarPrescricao('c-prescricoes')">+ Adicionar medicação / conduta</button>
      </div>
      
      <!-- ORIENTAÇÕES -->
      <div class="form-section">
        <h3>Orientações ao paciente</h3>
        <div class="form-field form-grid-full">
          <textarea id="c-orient" placeholder="Orientações práticas: dieta, exercício, sinais de alerta, retorno em caso de piora..."></textarea>
        </div>
      </div>
      
      <!-- ENCAMINHAMENTO -->
      <div class="form-section">
        <h3>Encaminhamento / Referência</h3>
        <div class="form-field form-grid-full">
          <textarea id="c-encam" placeholder="Encaminhamentos para especialista, exames adicionais, NASF, CAPS, fisioterapia..."></textarea>
        </div>
      </div>
      
      <!-- RETORNO -->
      <div class="form-section">
        <h3>Retorno</h3>
        <div class="form-field form-grid-full">
          <input type="text" id="c-retorno" placeholder="Ex: Retorno em 30 dias com exames">
        </div>
      </div>
      
      <!-- AÇÕES -->
      <div class="actions-bar">
        <div class="left">
          <button class="btn-secondary" onclick="navigate('#/')">← Voltar</button>
          <button class="btn-danger" onclick="limparConsulta()">Limpar tudo</button>
        </div>
        <div class="right">
          <button class="btn-secondary" onclick="salvarRascunho('consulta')">💾 Salvar rascunho</button>
          <button class="btn-pdf" onclick="gerarPDFConsultaUI()">📄 Gerar PDF</button>
        </div>
      </div>
    </section>
  `;
  
  // Adicionar 1 bloco de prescrição inicial
  adicionarPrescricao("c-prescricoes");
  
  // Restaurar rascunho se existir
  restaurarRascunho("consulta");
}

/* ============== RENDER: RECEITUÁRIO ============== */
function renderReceituario() {
  window.scrollTo(0, 0);
  const prefs = window.pdfGen.getPrefsMedico();
  const view = document.getElementById("view");
  const prefStatus = prefs.nome && prefs.crm ? 
    `<span class="pref-status ok">✓ ${esc(prefs.nome)} — ${esc(prefs.crm)}</span>` :
    `<span class="pref-status warn">⚠ Preferências incompletas — <a href="#/prefs" style="color:inherit;text-decoration:underline">configurar</a></span>`;
  
  view.innerHTML = `
    <section class="container">
      <div class="consulta-hero">
        <h1>Receituário</h1>
        <p>Emissão rápida de receita médica em PDF para impressão. Para registro de consulta completo, use "Consulta".${prefStatus}</p>
      </div>
      
      <!-- TIPO DE RECEITA -->
      <div class="form-section">
        <h3>Dados gerais</h3>
        <div class="form-grid">
          <div class="form-field">
            <label>Data</label>
            <input type="date" id="r-data" value="${formatarDataHojeISO()}">
          </div>
          <div class="form-field">
            <label>Tipo de receita</label>
            <select id="r-tipo">
              <option value="comum">Receita simples (comum)</option>
              <option value="branca_especial">Branca especial — controle (2 vias)</option>
              <option value="azul">Azul — Receituário B (psicotrópicos)</option>
              <option value="amarela">Amarela — Receituário A (entorpecentes)</option>
            </select>
            <div class="hint">Receituários B e A devem ser fornecidos pelas vigilâncias sanitárias estaduais — usar formulário oficial.</div>
          </div>
        </div>
      </div>
      
      <!-- PACIENTE -->
      <div class="form-section">
        <h3>Paciente</h3>
        <div class="form-grid">
          <div class="form-field form-grid-full">
            <label>Nome completo *</label>
            <input type="text" id="r-pac-nome" placeholder="Nome do paciente">
          </div>
          <div class="form-field">
            <label>Idade</label>
            <input type="number" id="r-pac-idade" placeholder="65" min="0" max="120">
          </div>
          <div class="form-field">
            <label>Sexo</label>
            <select id="r-pac-sexo">
              <option value="">Não informado</option>
              <option value="F">Feminino</option>
              <option value="M">Masculino</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
          <div class="form-field form-grid-full">
            <label>Endereço (obrigatório em receita controlada)</label>
            <input type="text" id="r-pac-end" placeholder="Rua, número, bairro, cidade">
          </div>
        </div>
      </div>
      
      <!-- MEDICAÇÕES -->
      <div class="form-section">
        <h3>Prescrição</h3>
        <div id="r-medicacoes"></div>
        <button class="btn-add" onclick="adicionarPrescricao('r-medicacoes', true)">+ Adicionar medicação</button>
      </div>
      
      <!-- OBSERVAÇÕES -->
      <div class="form-section">
        <h3>Observações (opcional)</h3>
        <div class="form-field form-grid-full">
          <textarea id="r-obs" placeholder="Ex: Manter dieta hipossódica; reavaliar em 30 dias..."></textarea>
        </div>
      </div>
      
      <div class="actions-bar">
        <div class="left">
          <button class="btn-secondary" onclick="navigate('#/')">← Voltar</button>
          <button class="btn-danger" onclick="limparReceituario()">Limpar tudo</button>
        </div>
        <div class="right">
          <button class="btn-secondary" onclick="salvarRascunho('receita')">💾 Salvar rascunho</button>
          <button class="btn-pdf" onclick="gerarPDFReceituarioUI()">📄 Gerar PDF</button>
        </div>
      </div>
    </section>
  `;
  
  adicionarPrescricao("r-medicacoes", true);
  restaurarRascunho("receita");
}

/* ============== PRESCRIÇÃO (BLOCOS DINÂMICOS) ============== */
let _prescNumero = 0;

function adicionarPrescricao(containerId, comQuantidade = false) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  _prescNumero++;
  const id = `pr-${_prescNumero}`;
  const num = container.querySelectorAll(".prescricao-bloco").length + 1;
  
  const bloco = document.createElement("div");
  bloco.className = "prescricao-bloco";
  bloco.id = id;
  bloco.innerHTML = `
    <button class="bloco-remove" onclick="removerPrescricao('${id}', '${containerId}')" title="Remover">×</button>
    <div style="display:flex;align-items:center;margin-bottom:0.6rem;">
      <span class="bloco-num">${num}</span>
      <strong style="font-size:0.92rem;color:var(--ink-2)">Medicação ${num}</strong>
    </div>
    <div class="form-grid">
      <div class="form-field form-grid-full">
        <label>Medicação + apresentação</label>
        <input type="text" data-pr="medicamento" placeholder="Sertralina 50 mg comprimido">
      </div>
      <div class="form-field">
        <label>Dose por tomada</label>
        <input type="text" data-pr="dose" placeholder="1 comprimido">
      </div>
      <div class="form-field">
        <label>Posologia</label>
        <input type="text" data-pr="posologia" placeholder="VO 1x/dia pela manhã">
      </div>
      <div class="form-field">
        <label>Duração</label>
        <input type="text" data-pr="duracao" placeholder="30 dias">
      </div>
      ${comQuantidade ? `
      <div class="form-field">
        <label>Quantidade (total)</label>
        <input type="text" data-pr="quantidade" placeholder="30 comprimidos">
      </div>` : ""}
      <div class="form-field form-grid-full">
        <label>Observação (opcional)</label>
        <input type="text" data-pr="observacao" placeholder="Não tomar com leite; tomar com alimento; etc.">
      </div>
    </div>
  `;
  container.appendChild(bloco);
}

function removerPrescricao(blocoId, containerId) {
  const bloco = document.getElementById(blocoId);
  if (bloco) bloco.remove();
  // Renumerar
  const container = document.getElementById(containerId);
  if (container) {
    container.querySelectorAll(".prescricao-bloco").forEach((b, idx) => {
      const num = b.querySelector(".bloco-num");
      const lbl = b.querySelector("strong");
      if (num) num.textContent = idx + 1;
      if (lbl) lbl.textContent = `Medicação ${idx + 1}`;
    });
  }
}

function coletarPrescricoes(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return [];
  const blocos = container.querySelectorAll(".prescricao-bloco");
  const result = [];
  blocos.forEach(b => {
    const item = {};
    b.querySelectorAll("[data-pr]").forEach(input => {
      item[input.dataset.pr] = input.value.trim();
    });
    // Só incluir se tiver pelo menos a medicação
    if (item.medicamento) result.push(item);
  });
  return result;
}

/* ============== GERAÇÃO PDF — UI ============== */
function gerarPDFConsultaUI() {
  // Validação OBRIGATÓRIA: prefs precisam estar preenchidas (nome + CRM)
  if (!window.pdfGen.prefsEstaoCompletas(window.pdfGen.getPrefsMedico())) {
    toast("Configure nome e CRM antes de gerar o PDF", "warn");
    setTimeout(() => navigate("#/prefs"), 1200);
    return;
  }
  
  const nome = valOf("c-pac-nome");
  if (!nome) {
    toast("Preencha o nome do paciente", "warn");
    document.getElementById("c-pac-nome")?.focus();
    return;
  }
  
  const dados = {
    dataConsulta: valOf("c-data"),
    horaConsulta: valOf("c-hora"),
    local: valOf("c-local"),
    pacienteNome: nome,
    pacienteIdade: valOf("c-pac-idade"),
    pacienteSexo: valOf("c-pac-sexo"),
    pacienteNasc: valOf("c-pac-nasc"),
    pacienteCns: valOf("c-pac-cns"),
    pacienteEndereco: valOf("c-pac-end"),
    queixa: valOf("c-queixa"),
    hda: valOf("c-hda"),
    sinaisVitais: valOf("c-vitais"),
    exameFisico: valOf("c-exame"),
    escalas: valOf("c-escalas"),
    cid: valOf("c-cid"),
    ciap: valOf("c-ciap"),
    diagnostico: valOf("c-dx"),
    prescricao: coletarPrescricoes("c-prescricoes"),
    orientacoes: valOf("c-orient"),
    encaminhamento: valOf("c-encam"),
    retorno: valOf("c-retorno"),
  };
  
  try {
    window.pdfGen.gerarPDFConsulta(dados);
    toast("PDF gerado — baixando...");
  } catch (e) {
    console.error(e);
    toast("Erro ao gerar PDF — verifique console", "err");
  }
}

function gerarPDFReceituarioUI() {
  // Validação OBRIGATÓRIA: prefs precisam estar preenchidas (nome + CRM)
  if (!window.pdfGen.prefsEstaoCompletas(window.pdfGen.getPrefsMedico())) {
    toast("Configure nome e CRM antes de gerar o PDF", "warn");
    setTimeout(() => navigate("#/prefs"), 1200);
    return;
  }
  
  const nome = valOf("r-pac-nome");
  if (!nome) {
    toast("Preencha o nome do paciente", "warn");
    document.getElementById("r-pac-nome")?.focus();
    return;
  }
  
  const medicacoes = coletarPrescricoes("r-medicacoes");
  if (medicacoes.length === 0) {
    toast("Adicione pelo menos uma medicação", "warn");
    return;
  }
  
  const dados = {
    data: valOf("r-data"),
    tipoReceita: valOf("r-tipo"),
    pacienteNome: nome,
    pacienteIdade: valOf("r-pac-idade"),
    pacienteSexo: valOf("r-pac-sexo"),
    pacienteEndereco: valOf("r-pac-end"),
    medicacoes,
    observacoes: valOf("r-obs"),
  };
  
  try {
    window.pdfGen.gerarPDFReceituario(dados);
    toast("PDF gerado — baixando...");
  } catch (e) {
    console.error(e);
    toast("Erro ao gerar PDF — verifique console", "err");
  }
}

/* ============== RASCUNHO (localStorage) ============== */
function salvarRascunho(tipo) {
  const prefix = tipo === "consulta" ? "c-" : "r-";
  const data = {};
  document.querySelectorAll(`[id^="${prefix}"]`).forEach(el => {
    if (el.id && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT")) {
      data[el.id] = el.value;
    }
  });
  // Salvar prescrições
  const presContainer = tipo === "consulta" ? "c-prescricoes" : "r-medicacoes";
  data._prescricoes = coletarPrescricoes(presContainer);
  
  localStorage.setItem(`rascunho_${tipo}_v1`, JSON.stringify(data));
  toast(`Rascunho salvo — ${tipo === "consulta" ? "consulta" : "receituário"}`);
}

function restaurarRascunho(tipo) {
  const raw = localStorage.getItem(`rascunho_${tipo}_v1`);
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    // Restaurar campos simples
    Object.keys(data).forEach(k => {
      if (k.startsWith("_")) return; // pular meta
      const el = document.getElementById(k);
      if (el) el.value = data[k];
    });
    // Restaurar prescrições
    if (data._prescricoes && data._prescricoes.length > 0) {
      const presContainer = tipo === "consulta" ? "c-prescricoes" : "r-medicacoes";
      // Limpar blocos iniciais
      document.getElementById(presContainer).innerHTML = "";
      data._prescricoes.forEach(item => {
        adicionarPrescricao(presContainer, tipo === "receita");
        // Pegar último bloco e preencher
        const blocos = document.querySelectorAll(`#${presContainer} .prescricao-bloco`);
        const ultBloco = blocos[blocos.length - 1];
        ultBloco.querySelectorAll("[data-pr]").forEach(input => {
          if (item[input.dataset.pr]) input.value = item[input.dataset.pr];
        });
      });
    }
  } catch (e) {
    console.error("Erro ao restaurar rascunho:", e);
  }
}

function limparConsulta() {
  if (!confirm("Limpar todos os campos? Esta ação não pode ser desfeita.")) return;
  localStorage.removeItem("rascunho_consulta_v1");
  renderConsulta();
  toast("Formulário limpo");
}

function limparReceituario() {
  if (!confirm("Limpar todos os campos? Esta ação não pode ser desfeita.")) return;
  localStorage.removeItem("rascunho_receita_v1");
  renderReceituario();
  toast("Formulário limpo");
}

/* ============== HELPERS DATAS ============== */
function formatarDataHojeISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}

function horaAgoraHHMM() {
  const d = new Date();
  return `${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`;
}

// Exportar
window.renderPrefs = renderPrefs;
window.renderConsulta = renderConsulta;
window.renderReceituario = renderReceituario;
window.adicionarPrescricao = adicionarPrescricao;
window.removerPrescricao = removerPrescricao;
window.gerarPDFConsultaUI = gerarPDFConsultaUI;
window.gerarPDFReceituarioUI = gerarPDFReceituarioUI;
window.salvarPrefs = salvarPrefs;
window.salvarRascunho = salvarRascunho;
window.limparConsulta = limparConsulta;
window.limparReceituario = limparReceituario;
