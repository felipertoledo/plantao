/* ============================================================
   PDF GENERATOR — Consulta Completa + Receituário
   Vovôminic Doutô — Felipe Ribeiro Toledo
   Usa jsPDF (carregado via CDN no index.html)
   ============================================================ */

/* ============== PERSISTÊNCIA DOS DADOS DO MÉDICO ============== */
const PREFS_KEY = "vovo_prefs_medico_v2";

// Migração: limpa dados da v1 (que vinha com defaults pré-preenchidos do Felipe Toledo)
try {
  if (typeof localStorage !== "undefined" && localStorage.getItem("vovo_prefs_medico_v1")) {
    localStorage.removeItem("vovo_prefs_medico_v1");
  }
} catch(e) {}

function getPrefsMedico() {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    if (!raw) return getDefaultPrefs();
    return Object.assign(getDefaultPrefs(), JSON.parse(raw));
  } catch (e) {
    return getDefaultPrefs();
  }
}

function getDefaultPrefs() {
  return {
    nome: "",
    crm: "",
    titulo: "Médico(a)",
    estabelecimento: "",
    bairro: "",
    endereco: "",
    telefone: "",
    email: "",
    cidade: ""
  };
}

function prefsEstaoCompletas(prefs) {
  // Mínimo necessário: nome e CRM
  return !!(prefs && prefs.nome && prefs.nome.trim() && prefs.crm && prefs.crm.trim());
}

function setPrefsMedico(prefs) {
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
    return true;
  } catch (e) {
    console.error("Erro ao salvar preferências:", e);
    return false;
  }
}

/* ============== FORMATAÇÃO ============== */
function formatarDataHoje() {
  const d = new Date();
  return `${String(d.getDate()).padStart(2,"0")}/${String(d.getMonth()+1).padStart(2,"0")}/${d.getFullYear()}`;
}

function formatarHoraAgora() {
  const d = new Date();
  return `${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`;
}

function formatarDataBR(d) {
  if (!d) return "";
  if (typeof d === "string" && d.includes("-")) {
    // YYYY-MM-DD → DD/MM/YYYY
    const [y, m, dd] = d.split("-");
    return `${dd}/${m}/${y}`;
  }
  return d;
}

/* ============== GERADOR DE PDF — BASE ============== */
function pdfNovo() {
  if (typeof window.jspdf === "undefined") {
    alert("Erro: biblioteca jsPDF não carregada. Verifique sua conexão.");
    throw new Error("jsPDF not loaded");
  }
  const { jsPDF } = window.jspdf;
  return new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
}

const MARGEM_X = 18;
const MARGEM_Y = 18;
const LARGURA = 210; // A4
const ALTURA = 297;
const LARG_UTIL = LARGURA - (MARGEM_X * 2);

function pdfCabecalhoMedico(doc, prefs) {
  let y = MARGEM_Y;
  
  // Faixa lateral esquerda (marca visual sutil)
  doc.setFillColor(185, 28, 28); // accent
  doc.rect(0, 0, 6, ALTURA, "F");
  
  // Nome do médico
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(26, 26, 26);
  doc.text(prefs.nome, MARGEM_X, y);
  y += 5;
  
  // Título + CRM
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(64, 64, 64);
  doc.text(`${prefs.titulo} — ${prefs.crm}`, MARGEM_X, y);
  y += 4;
  
  // Estabelecimento
  const linha2 = [prefs.estabelecimento, prefs.bairro].filter(Boolean).join(" — ");
  if (linha2) {
    doc.text(linha2, MARGEM_X, y);
    y += 4;
  }
  
  // Endereço + cidade
  const linha3 = [prefs.endereco, prefs.cidade].filter(Boolean).join(" · ");
  if (linha3) {
    doc.text(linha3, MARGEM_X, y);
    y += 4;
  }
  
  // Contato
  const contato = [prefs.telefone, prefs.email].filter(Boolean).join(" · ");
  if (contato) {
    doc.setFontSize(9);
    doc.setTextColor(107, 107, 107);
    doc.text(contato, MARGEM_X, y);
    y += 4;
  }
  
  // Linha separadora
  y += 2;
  doc.setDrawColor(185, 28, 28);
  doc.setLineWidth(0.5);
  doc.line(MARGEM_X, y, LARGURA - MARGEM_X, y);
  
  return y + 7; // retorna próximo Y útil
}

function pdfRodape(doc, prefs) {
  const y = ALTURA - 12;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(7);
  doc.setTextColor(107, 107, 107);
  const ident = (prefs.nome && prefs.crm) ? `${prefs.nome} — ${prefs.crm}` : "";
  const texto = `Documento emitido em ${formatarDataHoje()} às ${formatarHoraAgora()}${ident ? " · " + ident : ""}`;
  doc.text(texto, MARGEM_X, y);
}

function pdfTituloSecao(doc, titulo, y) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(185, 28, 28);
  doc.text(titulo.toUpperCase(), MARGEM_X, y);
  doc.setDrawColor(229, 226, 217);
  doc.setLineWidth(0.2);
  doc.line(MARGEM_X, y + 1.5, LARGURA - MARGEM_X, y + 1.5);
  return y + 6;
}

function pdfTexto(doc, texto, y, opts = {}) {
  if (!texto) return y;
  doc.setFont("helvetica", opts.bold ? "bold" : "normal");
  doc.setFontSize(opts.size || 10);
  doc.setTextColor(opts.cor || 26, opts.cor || 26, opts.cor || 26);
  
  // Quebrar linhas com base na largura útil
  const linhas = doc.splitTextToSize(String(texto), LARG_UTIL);
  
  // Verificar se precisa de nova página
  for (let i = 0; i < linhas.length; i++) {
    if (y > ALTURA - 25) {
      doc.addPage();
      // re-aplicar faixa lateral
      doc.setFillColor(185, 28, 28);
      doc.rect(0, 0, 6, ALTURA, "F");
      y = MARGEM_Y;
    }
    doc.text(linhas[i], MARGEM_X, y);
    y += 4.5;
  }
  return y;
}

function pdfCampoLabel(doc, label, valor, y) {
  if (!valor) return y;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(64, 64, 64);
  doc.text(`${label}:`, MARGEM_X, y);
  const wLabel = doc.getTextWidth(`${label}: `);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(26, 26, 26);
  
  const linhas = doc.splitTextToSize(String(valor), LARG_UTIL - wLabel);
  doc.text(linhas[0], MARGEM_X + wLabel, y);
  y += 4.5;
  
  // Linhas extras (se valor longo)
  for (let i = 1; i < linhas.length; i++) {
    if (y > ALTURA - 25) {
      doc.addPage();
      doc.setFillColor(185, 28, 28);
      doc.rect(0, 0, 6, ALTURA, "F");
      y = MARGEM_Y;
    }
    doc.text(linhas[i], MARGEM_X, y);
    y += 4.5;
  }
  return y;
}

function pdfAssinatura(doc, prefs, y) {
  // Garantir espaço para assinatura
  if (y > ALTURA - 50) {
    doc.addPage();
    doc.setFillColor(185, 28, 28);
    doc.rect(0, 0, 6, ALTURA, "F");
    y = MARGEM_Y;
  }
  y += 15;
  // Linha de assinatura centralizada
  const linhaInicio = LARGURA / 2 - 40;
  const linhaFim = LARGURA / 2 + 40;
  doc.setDrawColor(26, 26, 26);
  doc.setLineWidth(0.3);
  doc.line(linhaInicio, y, linhaFim, y);
  y += 4;
  
  // Nome centralizado
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(26, 26, 26);
  doc.text(prefs.nome, LARGURA / 2, y, { align: "center" });
  y += 4;
  
  // Título + CRM centralizado
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(64, 64, 64);
  doc.text(`${prefs.titulo} — ${prefs.crm}`, LARGURA / 2, y, { align: "center" });
  return y + 4;
}

/* ============== PDF CONSULTA COMPLETA ============== */
function gerarPDFConsulta(dados) {
  const prefs = getPrefsMedico();
  const doc = pdfNovo();
  
  let y = pdfCabecalhoMedico(doc, prefs);
  
  // Título
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(26, 26, 26);
  doc.text("REGISTRO DE CONSULTA", LARGURA / 2, y, { align: "center" });
  y += 9;
  
  // Linha "data | hora | atendimento"
  const dataConsulta = dados.dataConsulta || formatarDataHoje();
  const horaConsulta = dados.horaConsulta || formatarHoraAgora();
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(64, 64, 64);
  doc.text(`Data: ${formatarDataBR(dataConsulta)}    Hora: ${horaConsulta}`, MARGEM_X, y);
  if (dados.local) {
    doc.text(`Local: ${dados.local}`, LARGURA - MARGEM_X, y, { align: "right" });
  }
  y += 9;
  
  // === IDENTIFICAÇÃO DO PACIENTE ===
  y = pdfTituloSecao(doc, "Identificação do paciente", y);
  y = pdfCampoLabel(doc, "Nome", dados.pacienteNome, y);
  
  // Idade + sexo + data nasc na mesma linha (formatado como string)
  const linhaPac = [];
  if (dados.pacienteIdade) linhaPac.push(`${dados.pacienteIdade} anos`);
  if (dados.pacienteSexo) linhaPac.push(`Sexo: ${dados.pacienteSexo}`);
  if (dados.pacienteNasc) linhaPac.push(`Nasc: ${formatarDataBR(dados.pacienteNasc)}`);
  if (linhaPac.length) y = pdfCampoLabel(doc, "Dados", linhaPac.join(" · "), y);
  
  if (dados.pacienteCns) y = pdfCampoLabel(doc, "CNS/CPF", dados.pacienteCns, y);
  if (dados.pacienteEndereco) y = pdfCampoLabel(doc, "Endereço", dados.pacienteEndereco, y);
  y += 2;
  
  // === QUEIXA + HDA ===
  if (dados.queixa || dados.hda) {
    y = pdfTituloSecao(doc, "Queixa principal e HDA", y);
    if (dados.queixa) y = pdfCampoLabel(doc, "Queixa", dados.queixa, y);
    if (dados.hda) y = pdfTexto(doc, dados.hda, y);
    y += 2;
  }
  
  // === EXAME FÍSICO ===
  if (dados.sinaisVitais || dados.exameFisico) {
    y = pdfTituloSecao(doc, "Exame físico", y);
    if (dados.sinaisVitais) y = pdfCampoLabel(doc, "Sinais vitais", dados.sinaisVitais, y);
    if (dados.exameFisico) y = pdfTexto(doc, dados.exameFisico, y);
    y += 2;
  }
  
  // === ESCALAS APLICADAS ===
  if (dados.escalas && dados.escalas.trim()) {
    y = pdfTituloSecao(doc, "Escalas aplicadas", y);
    y = pdfTexto(doc, dados.escalas, y);
    y += 2;
  }
  
  // === DIAGNÓSTICOS ===
  if (dados.diagnostico || dados.cid || dados.ciap) {
    y = pdfTituloSecao(doc, "Diagnóstico", y);
    const cidCiap = [dados.cid && `CID: ${dados.cid}`, dados.ciap && `CIAP: ${dados.ciap}`].filter(Boolean).join(" · ");
    if (cidCiap) y = pdfCampoLabel(doc, "Classificação", cidCiap, y);
    if (dados.diagnostico) y = pdfTexto(doc, dados.diagnostico, y);
    y += 2;
  }
  
  // === PRESCRIÇÃO ===
  if (dados.prescricao && dados.prescricao.length > 0) {
    y = pdfTituloSecao(doc, "Conduta / Prescrição", y);
    dados.prescricao.forEach((p, idx) => {
      const linha = [];
      if (p.medicamento) linha.push(p.medicamento);
      if (p.dose) linha.push(p.dose);
      const linhaTitulo = `${idx + 1}. ${linha.join(" — ")}`;
      
      // Verificar página
      if (y > ALTURA - 25) {
        doc.addPage();
        doc.setFillColor(185, 28, 28);
        doc.rect(0, 0, 6, ALTURA, "F");
        y = MARGEM_Y;
      }
      
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(26, 26, 26);
      doc.text(linhaTitulo, MARGEM_X, y);
      y += 4.5;
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(64, 64, 64);
      
      if (p.posologia) {
        const linhas = doc.splitTextToSize(`   Posologia: ${p.posologia}`, LARG_UTIL);
        linhas.forEach(l => { doc.text(l, MARGEM_X, y); y += 4.5; });
      }
      if (p.duracao) {
        doc.text(`   Duração: ${p.duracao}`, MARGEM_X, y);
        y += 4.5;
      }
      if (p.observacao) {
        const linhas = doc.splitTextToSize(`   Obs: ${p.observacao}`, LARG_UTIL);
        linhas.forEach(l => { doc.text(l, MARGEM_X, y); y += 4.5; });
      }
      y += 1;
    });
    y += 2;
  }
  
  // === ORIENTAÇÕES ===
  if (dados.orientacoes) {
    y = pdfTituloSecao(doc, "Orientações ao paciente", y);
    y = pdfTexto(doc, dados.orientacoes, y);
    y += 2;
  }
  
  // === ENCAMINHAMENTO ===
  if (dados.encaminhamento) {
    y = pdfTituloSecao(doc, "Encaminhamento / Referência", y);
    y = pdfTexto(doc, dados.encaminhamento, y);
    y += 2;
  }
  
  // === RETORNO ===
  if (dados.retorno) {
    y = pdfTituloSecao(doc, "Retorno", y);
    y = pdfTexto(doc, dados.retorno, y);
    y += 2;
  }
  
  // === ASSINATURA ===
  pdfAssinatura(doc, prefs, y);
  
  // Rodapé em todas as páginas
  const pagCount = doc.internal.pages.length - 1;
  for (let i = 1; i <= pagCount; i++) {
    doc.setPage(i);
    pdfRodape(doc, prefs);
    // Paginação se mais de 1
    if (pagCount > 1) {
      doc.setFont("helvetica", "italic");
      doc.setFontSize(7);
      doc.setTextColor(107, 107, 107);
      doc.text(`Página ${i} de ${pagCount}`, LARGURA - MARGEM_X, ALTURA - 12, { align: "right" });
    }
  }
  
  // Nome do arquivo
  const nomeArq = `consulta_${(dados.pacienteNome || "paciente").replace(/[^a-zA-Z0-9]/g, "_")}_${dataConsulta.replace(/[\/\-]/g, "")}.pdf`;
  doc.save(nomeArq);
}

/* ============== PDF RECEITUÁRIO ============== */
function gerarPDFReceituario(dados) {
  const prefs = getPrefsMedico();
  const doc = pdfNovo();
  
  let y = pdfCabecalhoMedico(doc, prefs);
  
  // Título
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(26, 26, 26);
  doc.text("RECEITUÁRIO", LARGURA / 2, y, { align: "center" });
  y += 10;
  
  // Tipo de receita (se especial)
  if (dados.tipoReceita && dados.tipoReceita !== "comum") {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(185, 28, 28);
    const tipos = {
      branca_especial: "RECEITUÁRIO DE CONTROLE ESPECIAL (Branca, 2 vias)",
      azul: "RECEITUÁRIO B (Azul — Psicotrópicos)",
      amarela: "RECEITUÁRIO A (Amarela — Entorpecentes)"
    };
    doc.text(tipos[dados.tipoReceita] || "", LARGURA / 2, y, { align: "center" });
    y += 6;
  }
  
  // Dados do paciente
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(26, 26, 26);
  
  y = pdfCampoLabel(doc, "Paciente", dados.pacienteNome || "______________________________", y);
  
  const linhaPac = [];
  if (dados.pacienteIdade) linhaPac.push(`Idade: ${dados.pacienteIdade} anos`);
  if (dados.pacienteSexo) linhaPac.push(`Sexo: ${dados.pacienteSexo}`);
  const dataRec = dados.data || formatarDataHoje();
  linhaPac.push(`Data: ${formatarDataBR(dataRec)}`);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(linhaPac.join(" · "), MARGEM_X, y);
  y += 6;
  
  if (dados.pacienteEndereco) {
    y = pdfCampoLabel(doc, "Endereço", dados.pacienteEndereco, y);
  }
  
  y += 3;
  y = pdfTituloSecao(doc, "Prescrição", y);
  
  // Lista de medicações
  if (dados.medicacoes && dados.medicacoes.length > 0) {
    dados.medicacoes.forEach((m, idx) => {
      // Verificar página
      if (y > ALTURA - 50) {
        doc.addPage();
        doc.setFillColor(185, 28, 28);
        doc.rect(0, 0, 6, ALTURA, "F");
        y = MARGEM_Y;
      }
      
      // Número + medicação (em negrito)
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(26, 26, 26);
      const tituloMed = `${idx + 1}. ${(m.medicamento || "").toUpperCase()}${m.dose ? " " + m.dose : ""}`;
      doc.text(tituloMed, MARGEM_X, y);
      y += 5;
      
      // Posologia
      if (m.posologia) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(64, 64, 64);
        const linhas = doc.splitTextToSize(m.posologia, LARG_UTIL - 5);
        linhas.forEach(l => { doc.text(l, MARGEM_X + 5, y); y += 4.5; });
      }
      
      // Duração (italic)
      if (m.duracao) {
        doc.setFont("helvetica", "italic");
        doc.setFontSize(10);
        doc.setTextColor(64, 64, 64);
        doc.text(`Duração: ${m.duracao}`, MARGEM_X + 5, y);
        y += 4.5;
      }
      
      // Quantidade
      if (m.quantidade) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(64, 64, 64);
        doc.text(`Quantidade: ${m.quantidade}`, MARGEM_X + 5, y);
        y += 4.5;
      }
      
      // Observação
      if (m.observacao) {
        doc.setFont("helvetica", "italic");
        doc.setFontSize(9);
        doc.setTextColor(107, 107, 107);
        const linhas = doc.splitTextToSize(`Obs: ${m.observacao}`, LARG_UTIL - 5);
        linhas.forEach(l => { doc.text(l, MARGEM_X + 5, y); y += 4; });
      }
      
      y += 3;
    });
  }
  
  // Observações gerais
  if (dados.observacoes) {
    y += 3;
    y = pdfTituloSecao(doc, "Observações", y);
    y = pdfTexto(doc, dados.observacoes, y);
  }
  
  // Assinatura
  pdfAssinatura(doc, prefs, y);
  
  // Em receita branca especial: 2 vias — duplicar conteúdo? 
  // Por simplicidade: gerar 1 via, médico pode imprimir 2x
  // Adicionar nota se branca especial
  if (dados.tipoReceita === "branca_especial") {
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    doc.setTextColor(107, 107, 107);
    doc.text("Imprimir em 2 vias (uma fica retida na farmácia).", LARGURA / 2, ALTURA - 18, { align: "center" });
  }
  
  // Rodapé
  const pagCount = doc.internal.pages.length - 1;
  for (let i = 1; i <= pagCount; i++) {
    doc.setPage(i);
    pdfRodape(doc, prefs);
    if (pagCount > 1) {
      doc.setFont("helvetica", "italic");
      doc.setFontSize(7);
      doc.setTextColor(107, 107, 107);
      doc.text(`Página ${i} de ${pagCount}`, LARGURA - MARGEM_X, ALTURA - 12, { align: "right" });
    }
  }
  
  const nomeArq = `receituario_${(dados.pacienteNome || "paciente").replace(/[^a-zA-Z0-9]/g, "_")}_${dataRec.replace(/[\/\-]/g, "")}.pdf`;
  doc.save(nomeArq);
}

// Exportar para escopo global
window.pdfGen = {
  gerarPDFConsulta,
  gerarPDFReceituario,
  getPrefsMedico,
  setPrefsMedico,
  prefsEstaoCompletas,
  formatarDataHoje,
  formatarHoraAgora
};
