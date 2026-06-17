(function () {
  "use strict";

  const STORAGE_KEY = "ec-lernstudio-lf7-v1";
  const EXPORT_FORMAT = "ec-lernstudio-lf7-progress";
  const EXPORT_VERSION = 1;
  const POINTS_PER_LEVEL = 200;
  const content = window.EC_CONTENT;
  const app = document.getElementById("app");
  const welcomeModal = document.getElementById("welcome-modal");
  const settingsModal = document.getElementById("settings-modal");
  const toastRegion = document.getElementById("toast-region");

  const defaultState = {
    name: "",
    answered: {},
    mistakes: [],
    unlockedBadges: [],
    streak: 0,
    lastStudyDate: "",
    sprints: 0,
    labRuns: 0,
    labDraft: {
      impressions: 100000,
      clicks: 2000,
      conversions: 80,
      cost: 1200,
      revenue: 4800
    },
    lastModuleId: "targeting"
  };

  let state = loadState();
  let currentView = "dashboard";
  let session = null;

  function questionById(id) {
    return content.questions.find((question) => question.id === id);
  }

  function moduleById(id) {
    return content.modules.find((module) => module.id === id);
  }

  function validNumber(value, fallback = 0) {
    const number = Number(value);
    return Number.isFinite(number) && number >= 0 ? number : fallback;
  }

  function normalizeState(value) {
    const candidate = value && typeof value === "object" && !Array.isArray(value) ? value : {};
    const answered =
      candidate.answered && typeof candidate.answered === "object" && !Array.isArray(candidate.answered)
        ? Object.fromEntries(
            Object.entries(candidate.answered)
              .filter(
                ([id, entry]) =>
                  questionById(id) &&
                  entry &&
                  typeof entry === "object" &&
                  entry.correct === true
              )
              .map(([id, entry]) => [
                id,
                {
                  correct: true,
                  solvedAt: typeof entry.solvedAt === "string" ? entry.solvedAt : ""
                }
              ])
          )
        : {};

    const draft = candidate.labDraft && typeof candidate.labDraft === "object"
      ? candidate.labDraft
      : defaultState.labDraft;

    return {
      ...defaultState,
      name: typeof candidate.name === "string" ? candidate.name.trim().slice(0, 24) : "",
      answered,
      mistakes: Array.isArray(candidate.mistakes)
        ? [...new Set(candidate.mistakes.filter((id) => questionById(id)))]
        : [],
      unlockedBadges: Array.isArray(candidate.unlockedBadges)
        ? [
            ...new Set(
              candidate.unlockedBadges.filter((id) =>
                content.badges.some((badge) => badge.id === id)
              )
            )
          ]
        : [],
      streak: Math.max(0, Math.floor(validNumber(candidate.streak))),
      lastStudyDate: typeof candidate.lastStudyDate === "string" ? candidate.lastStudyDate : "",
      sprints: Math.max(0, Math.floor(validNumber(candidate.sprints))),
      labRuns: Math.max(0, Math.floor(validNumber(candidate.labRuns))),
      labDraft: {
        impressions: validNumber(draft.impressions, defaultState.labDraft.impressions),
        clicks: validNumber(draft.clicks, defaultState.labDraft.clicks),
        conversions: validNumber(draft.conversions, defaultState.labDraft.conversions),
        cost: validNumber(draft.cost, defaultState.labDraft.cost),
        revenue: validNumber(draft.revenue, defaultState.labDraft.revenue)
      },
      lastModuleId: moduleById(candidate.lastModuleId) ? candidate.lastModuleId : "targeting"
    };
  }

  function loadState() {
    try {
      return normalizeState(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    } catch (error) {
      return normalizeState({});
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateHeader();
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function formatNumber(value, digits = 0) {
    return new Intl.NumberFormat("de-DE", {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    }).format(value);
  }

  function solvedCount() {
    return Object.values(state.answered).filter((entry) => entry.correct).length;
  }

  function totalXp() {
    return solvedCount() * 25;
  }

  function levelInfo() {
    const xp = totalXp();
    const level = Math.floor(xp / POINTS_PER_LEVEL) + 1;
    const current = xp % POINTS_PER_LEVEL;
    return { xp, level, current, target: POINTS_PER_LEVEL };
  }

  function moduleProgress(moduleId) {
    const questions = content.questions.filter((question) => question.module === moduleId);
    const solved = questions.filter((question) => state.answered[question.id]?.correct).length;
    return {
      solved,
      total: questions.length,
      percent: questions.length ? Math.round((solved / questions.length) * 100) : 0
    };
  }

  function totalProgress() {
    const solved = solvedCount();
    return {
      solved,
      total: content.questions.length,
      percent: content.questions.length
        ? Math.round((solved / content.questions.length) * 100)
        : 0
    };
  }

  function completedModules() {
    return content.modules.filter((module) => moduleProgress(module.id).percent === 100).length;
  }

  function updateHeader() {
    const info = levelInfo();
    const name = state.name || "Gast";
    document.getElementById("header-name").textContent = name;
    document.getElementById("header-avatar").textContent = name.slice(0, 1).toUpperCase();
    document.getElementById("header-xp").textContent = formatNumber(info.xp);
    document.getElementById("header-level").textContent = info.level;
  }

  function setActiveNavigation(view) {
    const navigationView = view === "module" || view === "glossary" ? "modules" : view;
    document.querySelectorAll("[data-view]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.view === navigationView);
    });
  }

  function navigate(view, options = {}) {
    currentView = view;
    session = null;
    setActiveNavigation(view);

    if (view === "dashboard") renderDashboard();
    if (view === "modules") renderModules();
    if (view === "module") renderModule(options.moduleId);
    if (view === "lab") renderLab();
    if (view === "mistakes") renderMistakes();
    if (view === "achievements") renderAchievements();
    if (view === "glossary") renderGlossary();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderDashboard() {
    const progress = totalProgress();
    const info = levelInfo();
    const nextModule =
      content.modules.find((module) => moduleProgress(module.id).percent < 100) ||
      moduleById(state.lastModuleId) ||
      content.modules[0];
    const angle = Math.round((info.current / info.target) * 360);

    app.innerHTML = `
      <section class="hero">
        <div class="hero-image" role="img" aria-label="Abstraktes Online-Marketing-Dashboard mit Suchergebnissen, Zielgruppen und Kennzahlen"></div>
        <div class="hero-overlay"></div>
        <div class="page-shell hero-content">
          <p class="eyebrow light">Lernfeld 7 · Datenverarbeitung</p>
          <h1>Online-Marketing<br><em>verstehen, messen, entscheiden.</em></h1>
          <p>
            Von Targeting über SEO und SEA bis zur KI: Arbeite dich durch
            realistische Fälle und verwandle Kampagnendaten in gute Entscheidungen.
          </p>
          <div class="hero-actions">
            <button class="primary-button bright" data-action="open-module" data-module="${nextModule.id}">
              ${progress.solved ? "Weiterlernen" : "Lernpfad starten"}
            </button>
            <button class="ghost-button" data-action="sprint">Praxischeck starten</button>
          </div>
          <div class="hero-meta">
            <span>6 Module</span>
            <span>${content.questions.length} Aufgaben</span>
            <span>lokale Datenspeicherung</span>
          </div>
        </div>
      </section>

      <section class="page-shell dashboard-stats">
        <article class="progress-orbit">
          <div class="progress-ring" style="--progress: ${progress.percent * 3.6}deg">
            <strong>${progress.percent}%</strong>
            <span>Gesamt</span>
          </div>
          <div>
            <p class="eyebrow">Dein Fortschritt</p>
            <h2>${progress.solved} von ${progress.total} Aufgaben</h2>
            <p>Richtig gelöste Aufgaben bleiben gespeichert und bringen beim ersten Mal 25 XP.</p>
          </div>
        </article>
        <article class="level-panel">
          <div class="mini-ring" style="--progress: ${angle}deg">
            <span>Level</span>
            <strong>${info.level}</strong>
          </div>
          <div class="level-copy">
            <strong>${info.current} / ${info.target} XP</strong>
            <span>bis zum nächsten Level</span>
          </div>
          <div class="stat-pair">
            <span><strong>${state.streak}</strong> Lernserie</span>
            <span><strong>${state.mistakes.length}</strong> Fehler offen</span>
          </div>
        </article>
      </section>

      <section class="page-shell section-block">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Der LF7-Lernpfad</p>
            <h2>Sechs Perspektiven auf wirksames Marketing.</h2>
          </div>
          <button class="text-link" data-action="all-modules">Alle Module ansehen →</button>
        </div>
        <div class="module-grid">
          ${content.modules.slice(0, 3).map(moduleCard).join("")}
        </div>
      </section>

      <section class="page-shell lab-teaser section-block">
        <div class="lab-teaser-copy">
          <p class="eyebrow light">Interaktives Kennzahlen-Labor</p>
          <h2>Was sagen 100.000 Impressionen wirklich?</h2>
          <p>
            Gib Kampagnendaten ein und berechne CTR, CPC, Conversion Rate,
            CPO und ROAS. Das Labor zeigt nicht nur Ergebnisse, sondern auch,
            welche Frage jede Kennzahl beantwortet.
          </p>
          <button class="light-button" data-action="lab">Labor öffnen</button>
        </div>
        <div class="metric-stack" aria-hidden="true">
          <div><span>CTR</span><strong>2,0 %</strong><i style="--bar: 68%"></i></div>
          <div><span>CPC</span><strong>0,60 €</strong><i style="--bar: 46%"></i></div>
          <div><span>ROAS</span><strong>4,0x</strong><i style="--bar: 84%"></i></div>
        </div>
      </section>

      <section class="page-shell two-column section-block">
        <article class="focus-card mistake-card">
          <span class="focus-index">01</span>
          <div>
            <p class="eyebrow">Fehlertraining</p>
            <h2>${state.mistakes.length || "Keine"} ${state.mistakes.length === 1 ? "offene Aufgabe" : "offene Aufgaben"}</h2>
            <p>Falsch beantwortete Aufgaben warten hier auf den nächsten Versuch.</p>
          </div>
          <button class="secondary-button" data-action="mistakes">Fehlertraining öffnen</button>
        </article>
        <article class="focus-card glossary-card">
          <span class="focus-index">02</span>
          <div>
            <p class="eyebrow">Nachschlagen</p>
            <h2>15 Begriffe, die sitzen müssen.</h2>
            <p>Von Crawling und SERP bis CPO, ROAS und Prompt.</p>
          </div>
          <button class="secondary-button" data-action="glossary">Glossar öffnen</button>
        </article>
      </section>

      <footer class="page-shell portal-footer">
        <span>EC Lernstudio · LF7</span>
        <span>Konzept und Umsetzung: <a href="https://jakobsawazki.github.io/sawazki-electronics/" target="_blank" rel="noopener">Sawazki Electronics</a></span>
      </footer>
    `;

    bindAppActions();
  }

  function moduleCard(module) {
    const progress = moduleProgress(module.id);
    return `
      <article class="module-card ${module.color}">
        <div class="module-topline">
          <span class="module-code">${module.code}</span>
          <span class="module-mark" aria-hidden="true">${module.mark}</span>
        </div>
        <h3>${module.title}</h3>
        <p>${module.short}</p>
        <div class="module-progress">
          <div class="progress-track"><span style="width: ${progress.percent}%"></span></div>
          <small>${progress.solved}/${progress.total} gelöst · ${progress.percent}%</small>
        </div>
        <button class="card-link" data-action="open-module" data-module="${module.id}">
          Modul öffnen <span aria-hidden="true">→</span>
        </button>
      </article>
    `;
  }

  function renderModules() {
    const progress = totalProgress();
    app.innerHTML = `
      <section class="page-shell page-intro">
        <p class="eyebrow">Lernpfad</p>
        <h1>Vom passenden Kontakt<br>zur messbaren Wirkung.</h1>
        <p>
          Die Module folgen der DV-Auswahl für Lernfeld 7. Du kannst sie der
          Reihe nach bearbeiten oder gezielt in ein aktuelles Unterrichtsthema einsteigen.
        </p>
        <div class="overall-progress">
          <strong>${progress.percent}%</strong>
          <div>
            <span>Gesamtfortschritt</span>
            <div class="progress-track large"><span style="width: ${progress.percent}%"></span></div>
          </div>
        </div>
      </section>
      <section class="page-shell section-block">
        <div class="module-grid">
          ${content.modules.map(moduleCard).join("")}
        </div>
      </section>
      <section class="page-shell reference-strip">
        <div>
          <p class="eyebrow light">Schneller Zugriff</p>
          <h2>Begriffe noch einmal kompakt?</h2>
        </div>
        <button class="light-button" data-action="glossary">Glossar öffnen</button>
      </section>
      <footer class="page-shell portal-footer">
        <span>EC Lernstudio · LF7</span>
        <span>Lernstand lokal und als JSON-Datei sicherbar</span>
      </footer>
    `;
    bindAppActions();
  }

  function renderModule(moduleId) {
    const module = moduleById(moduleId);
    if (!module) {
      navigate("modules");
      return;
    }

    state.lastModuleId = module.id;
    saveState();
    const progress = moduleProgress(module.id);
    const questions = content.questions.filter((question) => question.module === module.id);

    app.innerHTML = `
      <section class="module-hero ${module.color}">
        <div class="page-shell module-hero-inner">
          <button class="back-button" data-action="all-modules">← Alle Module</button>
          <div class="module-hero-grid">
            <div>
              <p class="eyebrow">${module.code} · Datenverarbeitung</p>
              <h1>${module.title}</h1>
              <p>${module.short}</p>
              <div class="mission-box">
                <span>Deine Mission</span>
                <strong>${module.mission}</strong>
              </div>
              <div class="hero-actions">
                <button class="primary-button" data-action="practice-module" data-module="${module.id}">
                  ${progress.solved ? "Training fortsetzen" : "Training starten"}
                </button>
                <span class="module-status">${progress.solved}/${progress.total} Aufgaben gelöst</span>
              </div>
            </div>
            <div class="module-hero-mark" aria-hidden="true">
              <span>${module.code}</span>
              <strong>${module.mark}</strong>
              <i style="--progress: ${progress.percent * 3.6}deg"></i>
            </div>
          </div>
        </div>
      </section>

      <section class="page-shell lesson-layout section-block">
        <div class="lesson-heading">
          <p class="eyebrow">Kurz erklärt</p>
          <h2>Vier Bausteine für ein sicheres Verständnis.</h2>
        </div>
        <div class="lesson-list">
          ${module.lessons.map((lesson, index) => `
            <article class="lesson-card">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>${lesson.title}</h3>
                <p>${lesson.text}</p>
              </div>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="page-shell takeaway-card section-block">
        <div>
          <p class="eyebrow light">Merksätze</p>
          <h2>Das gehört in deinen Werkzeugkasten.</h2>
        </div>
        <ul>
          ${module.takeaways.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="page-shell practice-callout section-block">
        <div>
          <p class="eyebrow">Jetzt anwenden</p>
          <h2>${questions.length} Aufgaben warten auf dich.</h2>
          <p>Für jede erstmals richtig gelöste Aufgabe erhältst du 25 XP.</p>
        </div>
        <button class="primary-button" data-action="practice-module" data-module="${module.id}">
          Training starten
        </button>
      </section>
      <footer class="page-shell portal-footer">
        <span>${module.code} · ${module.title}</span>
        <span>${progress.percent}% abgeschlossen</span>
      </footer>
    `;
    bindAppActions();
  }

  function renderLab(result = null) {
    const draft = state.labDraft;
    app.innerHTML = `
      <section class="lab-hero">
        <div class="page-shell lab-hero-grid">
          <div>
            <p class="eyebrow light">7.19 · Kampagnen auswerten</p>
            <h1>Kennzahlen-Labor</h1>
            <p>
              Eine gute Auswertung beginnt mit einer klaren Bezugsgröße.
              Trage ein Szenario ein und untersuche, was die Zahlen über
              Aufmerksamkeit, Effizienz und Zielerreichung verraten.
            </p>
          </div>
          <div class="formula-cloud" aria-label="Wichtige Formeln">
            <span>CTR = Klicks / Impressionen</span>
            <span>CPC = Kosten / Klicks</span>
            <span>CR = Conversions / Klicks</span>
            <span>CPO = Kosten / Conversions</span>
            <span>ROAS = Umsatz / Kosten</span>
          </div>
        </div>
      </section>

      <section class="page-shell lab-workspace section-block">
        <form class="lab-input-card" id="lab-form">
          <p class="eyebrow">Kampagnendaten</p>
          <h2>Dein Szenario</h2>
          <div class="lab-field-grid">
            ${labField("impressions", "Impressionen", draft.impressions, "Einblendungen")}
            ${labField("clicks", "Klicks", draft.clicks, "Besuche nach Klick")}
            ${labField("conversions", "Conversions", draft.conversions, "z. B. Bestellungen")}
            ${labField("cost", "Werbekosten", draft.cost, "Euro")}
            ${labField("revenue", "Zugeordneter Umsatz", draft.revenue, "Euro")}
          </div>
          <button class="primary-button full-width" type="submit">Kennzahlen berechnen</button>
          <button class="text-button lab-example" id="lab-example" type="button">Beispieldaten einsetzen</button>
        </form>
        <div class="lab-results" id="lab-results">
          ${result ? renderLabResults(result) : `
            <div class="lab-empty">
              <span aria-hidden="true">∑</span>
              <h2>Bereit für die Auswertung.</h2>
              <p>Nach der Berechnung erscheinen hier fünf Kennzahlen mit Formel und Interpretationsfrage.</p>
            </div>
          `}
        </div>
      </section>

      <section class="page-shell interpretation-card">
        <div>
          <p class="eyebrow">Wichtig</p>
          <h2>Eine Kennzahl ist noch keine Entscheidung.</h2>
        </div>
        <p>
          Vergleiche Werte mit Kampagnenziel, Marge, Zeitraum und geeigneten
          Vergleichsdaten. Ein hoher ROAS kann bei kleinem Volumen weniger
          Gesamtbeitrag liefern als eine größere Kampagne mit etwas niedrigerer Effizienz.
        </p>
      </section>
      <footer class="page-shell portal-footer">
        <span>Kennzahlen-Labor · ${state.labRuns} Berechnungen</span>
        <span>Ergebnisse werden erst nach einer Berechnung lokal gespeichert</span>
      </footer>
    `;

    document.getElementById("lab-form").addEventListener("submit", calculateLab);
    document.getElementById("lab-example").addEventListener("click", () => {
      state.labDraft = { ...defaultState.labDraft };
      saveState();
      renderLab();
    });
  }

  function labField(id, label, value, hint) {
    return `
      <label for="lab-${id}">
        <span>${label}</span>
        <input id="lab-${id}" name="${id}" type="number" min="0" step="any" value="${value}" required>
        <small>${hint}</small>
      </label>
    `;
  }

  function calculateLab(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = {
      impressions: validNumber(form.get("impressions")),
      clicks: validNumber(form.get("clicks")),
      conversions: validNumber(form.get("conversions")),
      cost: validNumber(form.get("cost")),
      revenue: validNumber(form.get("revenue"))
    };

    if (!values.impressions || !values.clicks || !values.cost) {
      showToast("Impressionen, Klicks und Werbekosten müssen größer als null sein.", "error");
      return;
    }
    if (values.clicks > values.impressions) {
      showToast("Klicks können in diesem Modell nicht über den Impressionen liegen.", "error");
      return;
    }
    if (values.conversions > values.clicks) {
      showToast("Conversions können in diesem Modell nicht über den Klicks liegen.", "error");
      return;
    }

    state.labDraft = values;
    state.labRuns += 1;
    checkBadges();
    saveState();

    renderLab({
      ctr: (values.clicks / values.impressions) * 100,
      cpc: values.cost / values.clicks,
      conversionRate: values.conversions ? (values.conversions / values.clicks) * 100 : 0,
      cpo: values.conversions ? values.cost / values.conversions : null,
      roas: values.revenue / values.cost
    });
    showToast("Kampagne ausgewertet.");
  }

  function renderLabResults(result) {
    const cards = [
      {
        code: "CTR",
        value: `${formatNumber(result.ctr, 2)} %`,
        formula: "Klicks / Impressionen × 100",
        question: "Wie stark motiviert die Einblendung zum Klick?"
      },
      {
        code: "CPC",
        value: `${formatNumber(result.cpc, 2)} €`,
        formula: "Werbekosten / Klicks",
        question: "Wie viel kostet ein gewonnener Besuch?"
      },
      {
        code: "CR",
        value: `${formatNumber(result.conversionRate, 2)} %`,
        formula: "Conversions / Klicks × 100",
        question: "Wie viele Klicks erreichen das eigentliche Ziel?"
      },
      {
        code: "CPO",
        value: result.cpo === null ? "–" : `${formatNumber(result.cpo, 2)} €`,
        formula: "Werbekosten / Conversions",
        question: "Wie hoch sind die Werbekosten je Abschluss?"
      },
      {
        code: "ROAS",
        value: `${formatNumber(result.roas, 2)}x`,
        formula: "Umsatz / Werbekosten",
        question: "Wie viel Umsatz wird je Werbe-Euro zugeordnet?"
      }
    ];

    return cards.map((card, index) => `
      <article class="metric-card">
        <div class="metric-topline">
          <span>${card.code}</span>
          <small>0${index + 1}</small>
        </div>
        <strong>${card.value}</strong>
        <code>${card.formula}</code>
        <p>${card.question}</p>
      </article>
    `).join("");
  }

  function startPractice(questionIds, title, mode) {
    const ids = questionIds.length
      ? [...questionIds]
      : content.questions.map((question) => question.id);
    session = {
      ids,
      title,
      mode,
      index: 0,
      correct: 0,
      answeredCurrent: false
    };
    renderPractice();
  }

  function renderPractice() {
    if (!session) return;
    const question = questionById(session.ids[session.index]);
    const module = moduleById(question.module);
    const position = session.index + 1;

    app.innerHTML = `
      <section class="practice-shell">
        <div class="page-shell">
          <header class="practice-header">
            <button class="back-button light-back" data-action="leave-practice">← Training verlassen</button>
            <div>
              <span>${session.title}</span>
              <strong>${position} / ${session.ids.length}</strong>
            </div>
          </header>
          <div class="progress-track practice-progress">
            <span style="width: ${Math.round(((position - 1) / session.ids.length) * 100)}%"></span>
          </div>

          <article class="question-card">
            <div class="question-meta">
              <span class="question-module ${module.color}">${module.code} · ${module.mark}</span>
              <span>${state.answered[question.id]?.correct ? "Schon einmal gelöst" : "25 XP möglich"}</span>
            </div>
            <h1>${question.prompt}</h1>
            <form id="answer-form">
              ${renderAnswerInput(question)}
              <button class="primary-button answer-button" type="submit">Antwort prüfen</button>
            </form>
            <div id="feedback" class="feedback" hidden></div>
          </article>
        </div>
      </section>
    `;

    document.querySelector('[data-action="leave-practice"]').addEventListener("click", () => navigate("dashboard"));
    document.getElementById("answer-form").addEventListener("submit", checkAnswer);
  }

  function renderAnswerInput(question) {
    if (question.type === "number") {
      return `
        <label class="number-answer">
          <span>Deine Antwort</span>
          <span class="number-input-wrap">
            <input
              id="number-answer"
              name="answer"
              type="text"
              inputmode="decimal"
              autocomplete="off"
              required
              aria-describedby="number-hint"
            >
            <strong>${question.suffix || ""}</strong>
          </span>
          <small id="number-hint">Dezimaltrennzeichen darf Komma oder Punkt sein.</small>
        </label>
      `;
    }

    return `
      <fieldset class="choice-list">
        <legend class="sr-only">Wähle eine Antwort</legend>
        ${question.options.map((option, index) => `
          <label class="choice-option">
            <input type="radio" name="answer" value="${index}" required>
            <span class="choice-letter">${String.fromCharCode(65 + index)}</span>
            <span>${option}</span>
          </label>
        `).join("")}
      </fieldset>
    `;
  }

  function parseGermanNumber(value) {
    const normalized = value
      .trim()
      .replace(/\s/g, "")
      .replace(/\.(?=\d{3}(?:\D|$))/g, "")
      .replace(",", ".");
    return Number(normalized);
  }

  function checkAnswer(event) {
    event.preventDefault();
    if (!session || session.answeredCurrent) return;

    const question = questionById(session.ids[session.index]);
    const form = new FormData(event.currentTarget);
    const rawAnswer = form.get("answer");
    const isCorrect = question.type === "number"
      ? Number.isFinite(parseGermanNumber(String(rawAnswer))) &&
        Math.abs(parseGermanNumber(String(rawAnswer)) - question.answer) <= (question.tolerance || 0)
      : Number(rawAnswer) === question.answer;

    const feedback = document.getElementById("feedback");
    feedback.hidden = false;
    feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;

    if (isCorrect) {
      session.answeredCurrent = true;
      session.correct += 1;
      const firstCorrect = !state.answered[question.id]?.correct;
      state.answered[question.id] = {
        correct: true,
        solvedAt: new Date().toISOString()
      };
      state.mistakes = state.mistakes.filter((id) => id !== question.id);
      if (firstCorrect) updateStreak();
      checkBadges();
      saveState();

      feedback.innerHTML = `
        <div>
          <strong>${firstCorrect ? "Richtig! +25 XP" : "Richtig gelöst!"}</strong>
          <p>${question.explanation}</p>
        </div>
        <button class="primary-button" id="next-question" type="button">
          ${session.index === session.ids.length - 1 ? "Auswertung ansehen" : "Nächste Aufgabe"}
        </button>
      `;
      document.getElementById("next-question").addEventListener("click", nextQuestion);
    } else {
      if (!state.mistakes.includes(question.id)) state.mistakes.push(question.id);
      saveState();
      feedback.innerHTML = `
        <div>
          <strong>Noch nicht ganz.</strong>
          <p>Prüfe den Fachbegriff, die Bezugsgröße oder den Rechenweg und versuche es direkt noch einmal.</p>
        </div>
      `;
      showToast("Die Aufgabe wurde deinem Fehlertraining hinzugefügt.");
    }
  }

  function nextQuestion() {
    if (!session) return;
    if (session.index >= session.ids.length - 1) {
      finishSession();
      return;
    }
    session.index += 1;
    session.answeredCurrent = false;
    renderPractice();
  }

  function finishSession() {
    if (!session) return;
    if (session.mode === "sprint") {
      state.sprints += 1;
      checkBadges();
      saveState();
    }

    const result = session.correct;
    const total = session.ids.length;
    const percent = Math.round((result / total) * 100);
    const message =
      percent >= 90 ? "Sehr sicher." :
      percent >= 70 ? "Gute Kampagnenbasis." :
      percent >= 50 ? "Die Richtung stimmt." :
      "Jetzt sind die nächsten Lernschritte klar.";

    app.innerHTML = `
      <section class="result-section">
        <div class="page-shell result-inner">
          <div class="result-score" style="--result: ${percent * 3.6}deg">
            <span>${percent}%</span>
          </div>
          <p class="eyebrow light">Training abgeschlossen</p>
          <h1>${message}</h1>
          <p>Du hast ${result} von ${total} Aufgaben in dieser Runde richtig gelöst.</p>
          <div class="result-actions">
            <button class="primary-button bright" data-action="mistakes">Fehler weitertrainieren</button>
            <button class="ghost-button" data-action="dashboard">Zur Startseite</button>
          </div>
        </div>
      </section>
    `;
    session = null;
    bindAppActions();
  }

  function shuffled(array) {
    const copy = [...array];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const random = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[random]] = [copy[random], copy[index]];
    }
    return copy;
  }

  function startSprint() {
    const ids = shuffled(content.questions.map((question) => question.id)).slice(0, 12);
    startPractice(ids, "LF7-Praxischeck", "sprint");
  }

  function renderMistakes() {
    const questions = state.mistakes.map(questionById).filter(Boolean);
    app.innerHTML = `
      <section class="page-shell page-intro">
        <p class="eyebrow">Fehlertraining</p>
        <h1>Fehler zeigen,<br>wo der nächste Fortschritt liegt.</h1>
        <p>
          Falsch beantwortete Aufgaben werden automatisch gesammelt. Nach einer
          richtigen Lösung verschwinden sie aus dieser Liste.
        </p>
      </section>
      <section class="page-shell section-block">
        ${questions.length ? `
          <div class="mistake-overview">
            <div>
              <strong>${questions.length}</strong>
              <span>offene ${questions.length === 1 ? "Aufgabe" : "Aufgaben"}</span>
            </div>
            <button class="primary-button" data-action="practice-mistakes">Alle trainieren</button>
          </div>
          <div class="mistake-list">
            ${questions.map((question) => {
              const module = moduleById(question.module);
              return `
                <article>
                  <span class="question-module ${module.color}">${module.code}</span>
                  <div>
                    <h2>${question.prompt}</h2>
                    <p>${module.title}</p>
                  </div>
                </article>
              `;
            }).join("")}
          </div>
        ` : `
          <div class="empty-state">
            <span aria-hidden="true">✓</span>
            <h2>Deine Fehlerliste ist leer.</h2>
            <p>Starte ein Modul oder den gemischten Praxischeck.</p>
            <button class="primary-button" data-action="all-modules">Zum Lernpfad</button>
          </div>
        `}
      </section>
      <footer class="page-shell portal-footer">
        <span>Fehlertraining</span>
        <span>Richtig gelöste Aufgaben werden automatisch entfernt</span>
      </footer>
    `;
    bindAppActions();
  }

  function renderAchievements() {
    checkBadges(false);
    saveState();
    const info = levelInfo();
    app.innerHTML = `
      <section class="page-shell page-intro">
        <p class="eyebrow">Erfolge</p>
        <h1>Fortschritt,<br>der sichtbar bleibt.</h1>
        <p>
          XP werden aus den erstmals richtig gelösten Aufgaben berechnet.
          So bleibt der Lernstand auch nach einem Datei-Import konsistent.
        </p>
      </section>
      <section class="page-shell achievement-summary section-block">
        <article>
          <span>Level</span>
          <strong>${info.level}</strong>
          <small>${info.current} / ${info.target} XP bis zum nächsten Level</small>
          <div class="progress-track"><span style="width: ${Math.round((info.current / info.target) * 100)}%"></span></div>
        </article>
        <article>
          <span>Gesamt-XP</span>
          <strong>${formatNumber(info.xp)}</strong>
          <small>durch erstmals gelöste Aufgaben</small>
        </article>
        <article>
          <span>Module</span>
          <strong>${completedModules()} / ${content.modules.length}</strong>
          <small>vollständig abgeschlossen</small>
        </article>
      </section>
      <section class="page-shell section-block">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Meilensteine</p>
            <h2>Deine Abzeichen.</h2>
          </div>
        </div>
        <div class="badge-grid">
          ${content.badges.map((badge, index) => {
            const unlocked = state.unlockedBadges.includes(badge.id);
            return `
              <article class="badge-card ${unlocked ? "unlocked" : "locked"}">
                <span class="badge-symbol" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
                <div>
                  <small>${unlocked ? "Freigeschaltet" : "Noch gesperrt"}</small>
                  <h3>${badge.title}</h3>
                  <p>${badge.description}</p>
                </div>
              </article>
            `;
          }).join("")}
        </div>
      </section>
      <footer class="page-shell portal-footer">
        <span>${state.unlockedBadges.length} von ${content.badges.length} Abzeichen</span>
        <span>${info.xp} XP gesammelt</span>
      </footer>
    `;
  }

  function renderGlossary() {
    app.innerHTML = `
      <section class="page-shell page-intro">
        <p class="eyebrow">Glossar</p>
        <h1>15 Begriffe.<br>Eine gemeinsame Sprache.</h1>
        <p>
          Nutze die Übersicht zum Wiederholen, für Fachgespräche und als
          Kontrolle bei der Auswertung von Kampagnenfällen.
        </p>
      </section>
      <section class="page-shell glossary-grid section-block">
        ${content.glossary.map(([term, definition], index) => `
          <article>
            <span>${String(index + 1).padStart(2, "0")}</span>
            <h2>${term}</h2>
            <p>${definition}</p>
          </article>
        `).join("")}
      </section>
      <section class="page-shell reference-strip">
        <div>
          <p class="eyebrow light">Zurück zur Anwendung</p>
          <h2>Begriffe sitzen? Dann ab ins Training.</h2>
        </div>
        <button class="light-button" data-action="all-modules">Lernpfad öffnen</button>
      </section>
      <footer class="page-shell portal-footer">
        <span>LF7-Glossar</span>
        <span>${content.glossary.length} Kernbegriffe</span>
      </footer>
    `;
    bindAppActions();
  }

  function badgeConditionMet(badge) {
    if (badge.condition === "xp") return totalXp() >= badge.value;
    if (badge.condition === "correct") return solvedCount() >= badge.value;
    if (badge.condition === "module") return moduleProgress(badge.value).percent === 100;
    if (badge.condition === "moduleSet") {
      return badge.value.every((moduleId) => moduleProgress(moduleId).percent === 100);
    }
    if (badge.condition === "allModules") return completedModules() >= badge.value;
    if (badge.condition === "labRuns") return state.labRuns >= badge.value;
    if (badge.condition === "sprints") return state.sprints >= badge.value;
    return false;
  }

  function checkBadges(showNotifications = true) {
    content.badges.forEach((badge) => {
      if (!state.unlockedBadges.includes(badge.id) && badgeConditionMet(badge)) {
        state.unlockedBadges.push(badge.id);
        if (showNotifications) showToast(`Abzeichen freigeschaltet: ${badge.title}`);
      }
    });
  }

  function todayKey(date = new Date()) {
    return [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, "0"),
      String(date.getDate()).padStart(2, "0")
    ].join("-");
  }

  function updateStreak() {
    const today = todayKey();
    if (state.lastStudyDate === today) return;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    state.streak = state.lastStudyDate === todayKey(yesterday) ? state.streak + 1 : 1;
    state.lastStudyDate = today;
  }

  function showToast(message, type = "") {
    const toast = document.createElement("div");
    toast.className = `toast ${type ? `is-${type}` : ""}`;
    toast.textContent = message;
    toastRegion.appendChild(toast);
    window.setTimeout(() => toast.remove(), 3600);
  }

  function bindAppActions() {
    app.querySelectorAll("[data-action]").forEach((button) => {
      button.addEventListener("click", () => {
        const action = button.dataset.action;
        if (action === "open-module") navigate("module", { moduleId: button.dataset.module });
        if (action === "all-modules") navigate("modules");
        if (action === "sprint") startSprint();
        if (action === "mistakes") navigate("mistakes");
        if (action === "dashboard") navigate("dashboard");
        if (action === "lab") navigate("lab");
        if (action === "glossary") navigate("glossary");
        if (action === "practice-module") {
          const module = moduleById(button.dataset.module);
          const ids = content.questions
            .filter((question) => question.module === module.id)
            .map((question) => question.id);
          startPractice(ids, module.title, "module");
        }
        if (action === "practice-mistakes" && state.mistakes.length) {
          startPractice(state.mistakes, "Fehlertraining", "mistakes");
        }
      });
    });
  }

  function openSettings() {
    document.getElementById("settings-name").value = state.name;
    document.getElementById("settings-stats").innerHTML = `
      <div><strong>${totalXp()}</strong><span>XP</span></div>
      <div><strong>${solvedCount()}</strong><span>gelöst</span></div>
      <div><strong>${state.unlockedBadges.length}</strong><span>Abzeichen</span></div>
    `;
    settingsModal.hidden = false;
    document.getElementById("settings-name").focus();
  }

  function closeSettings() {
    settingsModal.hidden = true;
  }

  function createProgressExport() {
    return {
      format: EXPORT_FORMAT,
      version: EXPORT_VERSION,
      appVersion: content.version,
      exportedAt: new Date().toISOString(),
      progress: state
    };
  }

  function downloadProgressFile(contents, fileName) {
    const blob = new Blob([contents], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.hidden = true;
    document.body.appendChild(link);
    link.click();
    const objectUrl = link.href;
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 0);
  }

  async function exportProgress() {
    const fileName = `ec-lf7-lernstand-${new Date().toISOString().slice(0, 10)}.json`;
    const contents = JSON.stringify(createProgressExport(), null, 2);

    if ("showSaveFilePicker" in window) {
      try {
        const handle = await window.showSaveFilePicker({
          suggestedName: fileName,
          startIn: "desktop",
          types: [
            {
              description: "EC-LF7-Lernstand",
              accept: { "application/json": [".json"] }
            }
          ]
        });
        const writable = await handle.createWritable();
        await writable.write(contents);
        await writable.close();
        showToast("Lernstand-Datei wurde gespeichert.");
        return;
      } catch (error) {
        if (error.name === "AbortError") return;
      }
    }

    downloadProgressFile(contents, fileName);
    showToast("Lernstand-Datei wurde heruntergeladen.");
  }

  function extractImportedProgress(value) {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      throw new Error("Ungültiges Dateiformat");
    }

    if ("format" in value || "version" in value || "progress" in value) {
      if (
        value.format !== EXPORT_FORMAT ||
        value.version !== EXPORT_VERSION ||
        !value.progress ||
        typeof value.progress !== "object" ||
        Array.isArray(value.progress)
      ) {
        throw new Error("Nicht unterstützte Lernstand-Datei");
      }
      return value.progress;
    }

    const knownKeys = Object.keys(defaultState);
    if (!knownKeys.some((key) => key in value)) {
      throw new Error("Keine Lernstandsdaten gefunden");
    }
    return value;
  }

  function importProgress(event) {
    const file = event.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      showToast("Die Lernstand-Datei ist zu groß.", "error");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      try {
        const imported = JSON.parse(String(reader.result));
        const normalized = normalizeState(extractImportedProgress(imported));
        const confirmed = window.confirm(
          "Soll der aktuelle Lernstand durch die ausgewählte Datei ersetzt werden?"
        );
        if (!confirmed) return;
        state = normalized;
        checkBadges(false);
        saveState();
        closeSettings();
        navigate("dashboard");
        showToast("Lernstand-Datei wurde geladen.");
      } catch (error) {
        showToast("Die Lernstand-Datei ist ungültig oder nicht unterstützt.", "error");
      }
    });
    reader.readAsText(file);
    event.target.value = "";
  }

  function resetProgress() {
    const confirmed = window.confirm(
      "Möchtest du deinen gesamten LF7-Lernstand auf diesem Gerät löschen?"
    );
    if (!confirmed) return;
    state = normalizeState({ name: state.name });
    saveState();
    closeSettings();
    navigate("dashboard");
    showToast("Dein Lernstand wurde zurückgesetzt.");
  }

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => navigate(button.dataset.view));
  });

  document.getElementById("profile-button").addEventListener("click", openSettings);
  document.getElementById("settings-close").addEventListener("click", closeSettings);
  document.getElementById("save-name").addEventListener("click", () => {
    const value = document.getElementById("settings-name").value.trim();
    state.name = value || "Gast";
    saveState();
    closeSettings();
    if (currentView === "dashboard") renderDashboard();
    showToast("Name gespeichert.");
  });
  document.getElementById("export-progress").addEventListener("click", exportProgress);
  document.getElementById("import-progress").addEventListener("change", importProgress);
  document.getElementById("reset-progress").addEventListener("click", resetProgress);

  document.getElementById("start-button").addEventListener("click", () => {
    const value = document.getElementById("student-name").value.trim();
    state.name = value || "Gast";
    saveState();
    welcomeModal.hidden = true;
    renderDashboard();
  });

  document.getElementById("guest-button").addEventListener("click", () => {
    state.name = "Gast";
    saveState();
    welcomeModal.hidden = true;
    renderDashboard();
  });

  document.getElementById("student-name").addEventListener("keydown", (event) => {
    if (event.key === "Enter") document.getElementById("start-button").click();
  });

  settingsModal.addEventListener("click", (event) => {
    if (event.target === settingsModal) closeSettings();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !settingsModal.hidden) closeSettings();
  });

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch(() => {});
    });
  }

  updateHeader();
  renderDashboard();
  if (!state.name) {
    welcomeModal.hidden = false;
    document.getElementById("student-name").focus();
  }
})();
