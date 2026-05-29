/* ============================================================
   ui-a11y.js — Camada de ACESSIBILIDADE (aditiva, não-invasiva).
   Não altera app.js: aplica roles/ARIA/teclado por cima do DOM
   renderizado, via enhancement no load + MutationObserver.
   Cobre: landmark/skip-link, busca como combobox navegável por
   teclado, aria-live no resultado das calculadoras, foco visível,
   e SVGs decorativos marcados como aria-hidden.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- CSS (foco visível, skip-link, sr-only, opção ativa) ---------- */
  function injectCSS() {
    if (document.getElementById("a11y-css")) return;
    var s = document.createElement("style");
    s.id = "a11y-css";
    s.textContent =
      ".a11y-skip{position:absolute;left:-9999px;top:0;z-index:99999;" +
      "background:var(--bg-1,#fff);color:var(--ink-1,#111);padding:10px 16px;" +
      "border:2px solid var(--accent,#2563eb);border-radius:0 0 10px 0;font-weight:700;text-decoration:none}" +
      ".a11y-skip:focus{left:0}" +
      "a.sr-item,[data-a11y-opt]{cursor:pointer}" +
      "*:focus-visible{outline:2px solid var(--accent,#2563eb);outline-offset:2px;border-radius:6px}" +
      ".sr-item[aria-selected='true']{background:var(--bg-2,rgba(37,99,235,.10))}" +
      ".a11y-sr-only{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;" +
      "overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}";
    document.head.appendChild(s);
  }

  /* ---------- Landmarks + skip link ---------- */
  function landmarks() {
    var header = document.querySelector(".topbar");
    if (header && !header.getAttribute("role")) header.setAttribute("role", "banner");

    var view = document.getElementById("view");
    if (view) {
      if (!view.getAttribute("role")) view.setAttribute("role", "main");
      if (!view.hasAttribute("tabindex")) view.setAttribute("tabindex", "-1");
      if (!view.getAttribute("aria-label")) view.setAttribute("aria-label", "Conteúdo principal");
    }
    if (!document.querySelector(".a11y-skip")) {
      var skip = document.createElement("a");
      skip.className = "a11y-skip";
      skip.href = "#view";
      skip.textContent = "Pular para o conteúdo";
      skip.addEventListener("click", function () {
        if (view) { view.focus(); }
      });
      document.body.insertBefore(skip, document.body.firstChild);
    }
  }

  /* ---------- SVGs decorativos -> aria-hidden ---------- */
  function hideDecorativeSvgs(root) {
    var svgs = (root || document).querySelectorAll("svg:not([aria-hidden]):not([role='img'])");
    for (var i = 0; i < svgs.length; i++) {
      if (!svgs[i].getAttribute("aria-label")) {
        svgs[i].setAttribute("aria-hidden", "true");
        svgs[i].setAttribute("focusable", "false");
      }
    }
  }

  /* ---------- Busca = combobox navegável por teclado ---------- */
  var activeIdx = -1;
  function searchInput() { return document.getElementById("search"); }
  function searchBox()   { return document.getElementById("searchResults"); }
  function options()     { var b = searchBox(); return b ? b.querySelectorAll(".sr-item") : []; }

  function setupComboboxStatic() {
    var inp = searchInput(), box = searchBox();
    if (inp && !inp.getAttribute("role")) {
      inp.setAttribute("role", "combobox");
      inp.setAttribute("aria-autocomplete", "list");
      inp.setAttribute("aria-expanded", "false");
      inp.setAttribute("aria-controls", "searchResults");
      if (!inp.getAttribute("aria-label")) inp.setAttribute("aria-label", "Buscar patologia, fármaco ou calculadora");
    }
    if (box && !box.getAttribute("role")) {
      box.setAttribute("role", "listbox");
      box.setAttribute("aria-label", "Resultados da busca");
    }
    if (inp && !inp.dataset.a11yKeys) {
      inp.dataset.a11yKeys = "1";
      inp.addEventListener("keydown", onSearchKey);
    }
  }

  function decorateOptions() {
    var inp = searchInput(), box = searchBox();
    if (!inp || !box) return;
    var opts = box.querySelectorAll(".sr-item");
    var open = box.classList.contains("open") || box.classList.contains("visible");
    inp.setAttribute("aria-expanded", (open && opts.length) ? "true" : "false");
    for (var i = 0; i < opts.length; i++) {
      opts[i].setAttribute("role", "option");
      opts[i].setAttribute("id", "a11y-opt-" + i);
      opts[i].setAttribute("aria-selected", "false");
      if (!opts[i].hasAttribute("tabindex")) opts[i].setAttribute("tabindex", "-1");
      opts[i].setAttribute("data-a11y-opt", "1");
    }
    activeIdx = -1;
    inp.removeAttribute("aria-activedescendant");
  }

  function highlight(idx) {
    var opts = options();
    if (!opts.length) return;
    if (idx < 0) idx = opts.length - 1;
    if (idx >= opts.length) idx = 0;
    for (var i = 0; i < opts.length; i++) opts[i].setAttribute("aria-selected", i === idx ? "true" : "false");
    activeIdx = idx;
    var inp = searchInput();
    if (inp) inp.setAttribute("aria-activedescendant", "a11y-opt-" + idx);
    if (opts[idx].scrollIntoView) opts[idx].scrollIntoView({ block: "nearest" });
  }

  function onSearchKey(e) {
    var opts = options();
    if (e.key === "ArrowDown") { if (opts.length) { e.preventDefault(); highlight(activeIdx + 1); } }
    else if (e.key === "ArrowUp") { if (opts.length) { e.preventDefault(); highlight(activeIdx - 1); } }
    else if (e.key === "Enter") {
      if (activeIdx >= 0 && opts[activeIdx]) { e.preventDefault(); opts[activeIdx].click(); }
    } else if (e.key === "Escape") {
      var box = searchBox();
      if (box) { box.classList.remove("open", "visible"); box.innerHTML = ""; }
      var inp = searchInput();
      if (inp) { inp.setAttribute("aria-expanded", "false"); inp.removeAttribute("aria-activedescendant"); }
      activeIdx = -1;
    }
  }

  /* ---------- Resultado das calculadoras: aria-live ---------- */
  function liveCalcResult(root) {
    var rs = (root || document).querySelectorAll(".calc-result");
    for (var i = 0; i < rs.length; i++) {
      if (rs[i].getAttribute("aria-live")) continue;
      rs[i].setAttribute("role", "status");
      rs[i].setAttribute("aria-live", "polite");
      rs[i].setAttribute("aria-atomic", "true");
      if (!rs[i].getAttribute("aria-label")) rs[i].setAttribute("aria-label", "Resultado da calculadora");
    }
  }

  /* ---------- Trilha (breadcrumb) ---------- */
  function labelBread(root) {
    var b = (root || document).querySelectorAll("nav.bread:not([aria-label])");
    for (var i = 0; i < b.length; i++) b[i].setAttribute("aria-label", "Trilha de navegação");
  }

  /* ---------- Observers ---------- */
  function enhanceDynamic(root) {
    hideDecorativeSvgs(root);
    liveCalcResult(root);
    labelBread(root);
  }

  function init() {
    injectCSS();
    landmarks();
    setupComboboxStatic();
    hideDecorativeSvgs(document);

    var view = document.getElementById("view");
    if (view && window.MutationObserver) {
      new MutationObserver(function () { enhanceDynamic(view); })
        .observe(view, { childList: true, subtree: true });
      enhanceDynamic(view);
    }
    var box = searchBox();
    if (box && window.MutationObserver) {
      new MutationObserver(function () { decorateOptions(); })
        .observe(box, { childList: true, subtree: false });
      decorateOptions();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  window.uiA11y = { init: init };
})();
