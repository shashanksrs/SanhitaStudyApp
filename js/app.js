/* ══════════════════════════════════════════════════════════════════════
   DITA PRO ACADEMY — Main Application
   Router · Progress · Search · Dark Mode · Sidebar
   ══════════════════════════════════════════════════════════════════════ */

'use strict';

/* ── Constants ──────────────────────────────────────────────────────── */
const TOTAL_PAGES = 87;
const STORAGE_KEY = 'ditaProProgress';

/* ── Route Map ──────────────────────────────────────────────────────── */
// Maps page IDs to content sources
const ROUTE_MAP = {
  'home': { type: 'special', fn: renderHome },
  'learning-path': { type: 'special', fn: renderLearningPath },
  'projects': { type: 'special', fn: renderProjects },
  'interviews': { type: 'special', fn: renderInterviews },
  'resources': { type: 'special', fn: renderResources },
};

// Register content pages from all modules
function registerPages(pages) {
  if (!Array.isArray(pages)) return;
  pages.forEach(page => {
    ROUTE_MAP[page.id] = { type: 'page', data: page };
  });
}

/* ── Progress Management ────────────────────────────────────────────── */
const Progress = {
  data: {},
  load() {
    try { this.data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch(e) { this.data = {}; }
  },
  save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data)); }
    catch(e) {}
  },
  markComplete(pageId) {
    this.data[pageId] = true;
    this.save();
    this.render();
  },
  isComplete(pageId) { return !!this.data[pageId]; },
  getPercent() {
    const done = Object.values(this.data).filter(Boolean).length;
    return Math.round((done / TOTAL_PAGES) * 100);
  },
  render() {
    const pct = this.getPercent();
    const progressText = document.getElementById('progressText');
    const sidebarPct = document.getElementById('sidebarProgressPct');
    const sidebarBar = document.getElementById('sidebarProgressBar');
    if (progressText) progressText.textContent = `${pct}% Complete`;
    if (sidebarPct) sidebarPct.textContent = `${pct}%`;
    if (sidebarBar) sidebarBar.style.width = `${pct}%`;

    // Update checkmarks
    document.querySelectorAll('.pg-check').forEach(el => {
      const pageId = el.dataset.check;
      if (pageId) el.classList.toggle('done', this.isComplete(pageId));
    });

    // Update module progress bars (for home page cards)
    document.querySelectorAll('[data-module-progress]').forEach(bar => {
      const mod = parseInt(bar.dataset.moduleProgress);
      const pagesInMod = getModulePageIds(mod);
      const done = pagesInMod.filter(id => this.isComplete(id)).length;
      const pct = pagesInMod.length ? Math.round((done / pagesInMod.length) * 100) : 0;
      bar.style.width = `${pct}%`;
      const label = bar.closest('.module-card-progress')?.querySelector('.module-card-progress-label');
      if (label) label.textContent = `${done}/${pagesInMod.length} pages completed`;
    });
  }
};

function getModulePageIds(mod) {
  const ranges = { 1:[1,10], 2:[11,22], 3:[23,40], 4:[41,52], 5:[53,59], 6:[60,69], 7:[70,79], 8:[80,87] };
  const [start, end] = ranges[mod] || [0,0];
  const ids = [];
  for (let i = start; i <= end; i++) ids.push(`page-${i}`);
  return ids;
}

/* ── Theme Management ───────────────────────────────────────────────── */
const Theme = {
  current: 'light',
  load() {
    this.current = localStorage.getItem('ditaTheme') || 'light';
    document.documentElement.setAttribute('data-theme', this.current);
  },
  toggle() {
    this.current = this.current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.current);
    localStorage.setItem('ditaTheme', this.current);
  }
};

/* ── Sidebar Management ─────────────────────────────────────────────── */
const Sidebar = {
  collapsed: false,
  init() {
    // Module collapse
    document.querySelectorAll('.sidebar-module-header').forEach(header => {
      header.addEventListener('click', () => {
        const mod = header.closest('.sidebar-module');
        mod.classList.toggle('open');
      });
    });
    // Start with all modules collapsed except #1
    document.querySelectorAll('.sidebar-module').forEach((mod, i) => {
      if (i === 0) mod.classList.add('open');
    });
  },
  toggle() {
    this.collapsed = !this.collapsed;
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth <= 900) {
      sidebar.classList.toggle('mobile-open');
    } else {
      sidebar.classList.toggle('collapsed');
    }
  },
  highlightActive(pageId) {
    document.querySelectorAll('.sidebar-pages a').forEach(a => a.classList.remove('active'));
    document.querySelectorAll('.sidebar-quicklink').forEach(a => a.classList.remove('active'));

    const activeLink = document.querySelector(`[data-page="${pageId}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
      // Open the parent module
      const module = activeLink.closest('.sidebar-module');
      if (module) module.classList.add('open');
      // Scroll into view in sidebar
      setTimeout(() => activeLink.scrollIntoView({ block: 'nearest' }), 100);
    }
  }
};

/* ── Search ─────────────────────────────────────────────────────────── */
const Search = {
  index: [],
  build() {
    this.index = [];
    Object.values(ROUTE_MAP).forEach(route => {
      if (route.type === 'page' && route.data) {
        const p = route.data;
        this.index.push({
          id: p.id,
          title: p.title,
          module: p.moduleTitle || '',
          keywords: (p.searchKeywords || p.title).toLowerCase()
        });
      }
    });
  },
  query(term) {
    if (!term || term.length < 2) return [];
    const t = term.toLowerCase();
    return this.index.filter(item =>
      item.title.toLowerCase().includes(t) ||
      item.keywords.includes(t) ||
      item.module.toLowerCase().includes(t)
    ).slice(0, 8);
  },
  render(results, term) {
    const container = document.getElementById('searchResults');
    if (!container) return;
    if (!results.length) { container.classList.remove('open'); return; }

    container.innerHTML = results.map(r => `
      <div class="search-result-item" onclick="Router.navigate('${r.id}'); Search.close();">
        <div class="search-result-title">${highlight(r.title, term)}</div>
        <div class="search-result-module">${r.module}</div>
      </div>
    `).join('');
    container.classList.add('open');
  },
  close() {
    const container = document.getElementById('searchResults');
    if (container) container.classList.remove('open');
    const input = document.getElementById('globalSearch');
    if (input) input.value = '';
  }
};

function highlight(text, term) {
  if (!term) return text;
  const re = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
  return text.replace(re, '<mark class="search-highlight">$1</mark>');
}

/* ── Router ─────────────────────────────────────────────────────────── */
const Router = {
  current: null,
  navigate(pageId) {
    window.location.hash = pageId;
  },
  handleHash() {
    const hash = window.location.hash.slice(1) || 'home';
    this.render(hash);
  },
  render(pageId) {
    if (this.current === pageId) return;
    this.current = pageId;

    const route = ROUTE_MAP[pageId];
    const container = document.getElementById('pageContent');
    if (!container) return;

    // Scroll to top
    document.querySelector('.main-content')?.scrollTo(0, 0);
    window.scrollTo(0, 0);

    if (!route) {
      container.innerHTML = renderNotFound(pageId);
    } else if (route.type === 'special') {
      container.innerHTML = '';
      route.fn(container);
    } else if (route.type === 'page') {
      container.innerHTML = renderPage(route.data);
      initPageInteractivity(route.data);
    }

    Sidebar.highlightActive(pageId);
    Progress.render();

    // Re-init mermaid
    if (window.mermaid) {
      setTimeout(() => {
        try { mermaid.run({ querySelector: '.mermaid' }); } catch(e) {}
      }, 100);
    }
  }
};

/* ── Page Renderer ──────────────────────────────────────────────────── */
function renderPage(page) {
  const isComplete = Progress.isComplete(page.id);
  const prev = page.prev ? `<a href="#${page.prev}" class="nav-btn" onclick="Router.navigate('${page.prev}'); return false;">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
    <div><div class="nav-btn-label">Previous</div><div class="nav-btn-title">${getPageTitle(page.prev)}</div></div>
  </a>` : '<div></div>';
  const next = page.next ? `<a href="#${page.next}" class="nav-btn" onclick="Router.navigate('${page.next}'); return false;">
    <div><div class="nav-btn-label">Next</div><div class="nav-btn-title">${getPageTitle(page.next)}</div></div>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
  </a>` : '<div></div>';

  const moduleBg = getModuleColor(page.module);

  return `
<div class="page-wrapper fade-in-up">
  <div class="page-header">
    <div class="page-breadcrumb">
      <a href="#home">Home</a>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
      <span class="breadcrumb-module" style="background:${moduleBg}">${page.moduleTitle || 'Module '+page.module}</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
      <span>Page ${page.pageNum || ''}</span>
    </div>
    <h1 class="page-title">${page.title}</h1>
    ${page.subtitle ? `<p class="page-subtitle">${page.subtitle}</p>` : ''}
    <div class="page-meta">
      <span class="page-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${page.duration || '20–30 min read'}</span>
      <span class="page-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>Module ${page.module}</span>
      <span class="page-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>${page.level || 'Beginner → Intermediate'}</span>
    </div>
  </div>

  ${page.objectives ? `<div class="objectives-box">
    <h3>🎯 Learning Objectives</h3>
    <ul>${page.objectives.map(o => `<li>${o}</li>`).join('')}</ul>
  </div>` : ''}

  <div class="content-body">
    ${page.content || '<p>Content coming soon.</p>'}
  </div>

  ${page.quiz ? renderQuizSection(page) : ''}

  <div class="page-nav">
    ${prev}
    <button class="mark-complete-btn ${isComplete ? 'completed' : ''}" onclick="markPageComplete('${page.id}', this)" id="complete-btn-${page.id}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      ${isComplete ? 'Completed ✓' : 'Mark as Complete'}
    </button>
    ${next}
  </div>
</div>`;
}

function getPageTitle(pageId) {
  const route = ROUTE_MAP[pageId];
  if (route && route.data) return route.data.title;
  return pageId;
}

function getModuleColor(mod) {
  const colors = { 1:'#4f46e5',2:'#0891b2',3:'#059669',4:'#d97706',5:'#7c3aed',6:'#dc2626',7:'#0284c7',8:'#b45309' };
  return colors[mod] || '#4f46e5';
}

function markPageComplete(pageId, btn) {
  Progress.markComplete(pageId);
  if (btn) {
    btn.classList.add('completed');
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Completed ✓`;
  }
}

/* ── Quiz Renderer ──────────────────────────────────────────────────── */
function renderQuizSection(page) {
  if (!page.quiz || !page.quiz.length) return '';
  const questions = page.quiz.map((q, qi) => `
    <div class="quiz-question" id="qq-${page.id}-${qi}">
      <div class="quiz-q-text"><span class="quiz-q-num">Q${qi+1}</span>${q.question}</div>
      <div class="quiz-options">
        ${q.options.map((opt, oi) => `
          <div class="quiz-option" data-qi="${qi}" data-oi="${oi}" onclick="selectOption(this, '${page.id}', ${qi}, ${oi})">
            <span class="quiz-option-letter">${String.fromCharCode(65+oi)}</span>
            <span>${opt}</span>
          </div>
        `).join('')}
      </div>
      <div class="quiz-explanation" id="exp-${page.id}-${qi}">${q.explanation || ''}</div>
    </div>
  `).join('');

  return `
<div class="quiz-section" id="quiz-${page.id}">
  <div class="quiz-header">
    <div class="quiz-header-title">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
      Knowledge Check — ${page.title}
    </div>
    <div class="quiz-score-display" id="score-${page.id}">${page.quiz.length} Questions</div>
  </div>
  <div class="quiz-body">
    ${questions}
    <div class="quiz-result" id="result-${page.id}"></div>
  </div>
  <div class="quiz-footer">
    <button class="quiz-submit-btn" onclick="submitQuiz('${page.id}', ${JSON.stringify(page.quiz).replace(/"/g,'&quot;')})" disabled id="submit-${page.id}">Check Answers</button>
    <button class="quiz-retry-btn" onclick="retryQuiz('${page.id}')" style="display:none" id="retry-${page.id}">Try Again</button>
  </div>
</div>`;
}

/* ── Quiz Interactivity ─────────────────────────────────────────────── */
const quizState = {};

function selectOption(el, pageId, qi, oi) {
  const key = `${pageId}-${qi}`;
  if (quizState[key]?.locked) return;
  if (!quizState[pageId]) quizState[pageId] = {};
  quizState[pageId][qi] = oi;

  // Deselect siblings
  el.closest('.quiz-options').querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');

  // Enable submit if all answered
  const total = document.querySelectorAll(`#quiz-${pageId} .quiz-question`).length;
  const answered = Object.keys(quizState[pageId]).length;
  const submitBtn = document.getElementById(`submit-${pageId}`);
  if (submitBtn) submitBtn.disabled = answered < total;
}

function submitQuiz(pageId, questions) {
  if (!quizState[pageId]) return;
  let correct = 0;
  questions.forEach((q, qi) => {
    const selected = quizState[pageId][qi];
    const key = `${pageId}-${qi}`;
    quizState[key] = { locked: true };

    const opts = document.querySelectorAll(`[data-qi="${qi}"][onclick*="${pageId}"]`);
    opts.forEach((o, oi) => {
      o.classList.add('disabled');
      if (oi === q.correct) o.classList.add('correct');
      else if (oi === selected && oi !== q.correct) o.classList.add('wrong');
    });

    if (selected === q.correct) correct++;

    const exp = document.getElementById(`exp-${pageId}-${qi}`);
    if (exp) exp.classList.add('show');
  });

  const score = Math.round((correct / questions.length) * 100);
  const scoreEl = document.getElementById(`score-${pageId}`);
  if (scoreEl) scoreEl.textContent = `${correct}/${questions.length} Correct`;

  const resultEl = document.getElementById(`result-${pageId}`);
  if (resultEl) {
    resultEl.classList.add('show');
    if (score >= 80) {
      resultEl.classList.add('excellent');
      resultEl.textContent = `🎉 Excellent! ${score}% — You've mastered this topic!`;
    } else if (score >= 60) {
      resultEl.classList.add('good');
      resultEl.textContent = `👍 Good work! ${score}% — Review the explanations and try again.`;
    } else {
      resultEl.classList.add('needs-work');
      resultEl.textContent = `📚 Keep studying! ${score}% — Re-read the material and retry.`;
    }
  }

  const submitBtn = document.getElementById(`submit-${pageId}`);
  if (submitBtn) submitBtn.style.display = 'none';
  const retryBtn = document.getElementById(`retry-${pageId}`);
  if (retryBtn) retryBtn.style.display = 'inline-flex';
}

function retryQuiz(pageId) {
  delete quizState[pageId];
  const quiz = document.getElementById(`quiz-${pageId}`);
  if (!quiz) return;

  quiz.querySelectorAll('.quiz-option').forEach(o => {
    o.classList.remove('selected','correct','wrong','disabled');
  });
  quiz.querySelectorAll('.quiz-explanation').forEach(e => e.classList.remove('show'));

  const resultEl = document.getElementById(`result-${pageId}`);
  if (resultEl) { resultEl.classList.remove('show','excellent','good','needs-work'); resultEl.textContent = ''; }

  const submitBtn = document.getElementById(`submit-${pageId}`);
  if (submitBtn) { submitBtn.style.display = ''; submitBtn.disabled = true; }
  const retryBtn = document.getElementById(`retry-${pageId}`);
  if (retryBtn) retryBtn.style.display = 'none';

  const scoreEl = document.getElementById(`score-${pageId}`);
  if (scoreEl) {
    const qs = document.querySelectorAll(`#quiz-${pageId} .quiz-question`).length;
    scoreEl.textContent = `${qs} Questions`;
  }
}

/* ── Page interactivity ─────────────────────────────────────────────── */
function initPageInteractivity(page) {
  // Expandable sections
  document.querySelectorAll('.expandable-header').forEach(header => {
    header.addEventListener('click', () => {
      header.closest('.expandable').classList.toggle('open');
    });
  });

  // Q&A accordion for interview sections
  document.querySelectorAll('.qa-question').forEach(q => {
    q.addEventListener('click', () => {
      q.closest('.qa-item').classList.toggle('open');
    });
  });

  // Code copy buttons
  document.querySelectorAll('.code-copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pre = btn.closest('.code-block').querySelector('pre');
      if (pre) {
        navigator.clipboard.writeText(pre.textContent).then(() => {
          btn.textContent = 'Copied!';
          setTimeout(() => btn.textContent = 'Copy', 1500);
        }).catch(() => {});
      }
    });
  });
}

/* ── Special Pages ──────────────────────────────────────────────────── */
function renderHome(container) {
  const modules = [
    { num: 1, title: 'Documentation Fundamentals', desc: 'Master the language of technical communication. Learn what documentation is, why it matters, and how professionals approach it.', pages: 10, color: '#4f46e5', icon: '📝', tags: ['Concepts','Lifecycle','Workflows'], start: 'page-1' },
    { num: 2, title: 'XML Fundamentals', desc: 'Build rock-solid XML skills. Elements, attributes, namespaces, DTDs, schemas — every rule explained with real examples.', pages: 12, color: '#0891b2', icon: '🏗️', tags: ['Syntax','Validation','DTD','XSD'], start: 'page-11' },
    { num: 3, title: 'DITA Fundamentals', desc: 'The core of modern technical writing. Topics, maps, conrefs, keys, profiling, conditional processing — complete DITA mastery.', pages: 18, color: '#059669', icon: '🌿', tags: ['Topics','Maps','Conref','Publishing'], start: 'page-23' },
    { num: 4, title: 'Oxygen XML Editor', desc: 'The industry-standard DITA authoring tool. From installation to advanced publishing workflows, every feature covered.', pages: 12, color: '#d97706', icon: '⚗️', tags: ['Author View','DITA Maps','Output'], start: 'page-41' },
    { num: 5, title: 'Markdown', desc: 'The lightweight documentation language. Write docs faster and understand when Markdown fits vs. when DITA is needed.', pages: 7, color: '#7c3aed', icon: '✍️', tags: ['Syntax','Docs as Code','Comparison'], start: 'page-53' },
    { num: 6, title: 'Git and GitHub', desc: 'Version control for documentation — from zero. Commits, branches, pull requests, and full collaboration workflows explained.', pages: 10, color: '#dc2626', icon: '🔀', tags: ['Git','GitHub','Collaboration'], start: 'page-60' },
    { num: 7, title: 'Technical Writing', desc: 'Write with clarity, precision, and purpose. Minimalism, controlled language, style guides, and professional review processes.', pages: 10, color: '#0284c7', icon: '🖊️', tags: ['Clarity','Style','Review'], start: 'page-70' },
    { num: 8, title: 'Aerospace & DITA', desc: 'Bridge your aerospace experience with modern DITA. ATA, iSpec2200, S1000D, and industry career roadmap.', pages: 8, color: '#b45309', icon: '✈️', tags: ['ATA','S1000D','Career'], start: 'page-80' },
  ];

  container.innerHTML = `
<div class="page-wrapper fade-in-up">
  <div class="hero">
    <div class="hero-content">
      <div class="hero-badge">🎓 Professional Certification Track</div>
      <h1>Master <span>DITA XML</span> &amp; Modern<br>Documentation Tools</h1>
      <p>A complete, structured learning path for Technical Publications Engineers transitioning to modern DITA/XML documentation roles. From fundamentals to job-ready expertise.</p>
      <div class="hero-actions">
        <a href="#page-1" class="btn-primary" onclick="Router.navigate('page-1'); return false;">Start Learning →</a>
        <a href="#learning-path" class="btn-secondary" onclick="Router.navigate('learning-path'); return false;">View Learning Path</a>
      </div>
      <div class="hero-stats">
        <div class="hero-stat"><div class="hero-stat-num">87</div><div class="hero-stat-label">Pages of Content</div></div>
        <div class="hero-stat"><div class="hero-stat-num">8</div><div class="hero-stat-label">Modules</div></div>
        <div class="hero-stat"><div class="hero-stat-num">550+</div><div class="hero-stat-label">Interview Q&amp;As</div></div>
        <div class="hero-stat"><div class="hero-stat-num">10</div><div class="hero-stat-label">Portfolio Projects</div></div>
      </div>
    </div>
  </div>

  <h2 class="section-title">Course Modules</h2>
  <div class="card-grid">
    ${modules.map(m => `
    <a href="#${m.start}" class="module-card" onclick="Router.navigate('${m.start}'); return false;">
      <div class="module-card-badge" style="background:${m.color}">${m.icon}</div>
      <div class="module-card-num">Module ${m.num}</div>
      <div class="module-card-title">${m.title}</div>
      <div class="module-card-desc">${m.desc}</div>
      <div class="module-card-meta">${m.tags.map(t => `<span class="module-card-tag">${t}</span>`).join('')}<span class="module-card-tag">${m.pages} pages</span></div>
      <div class="module-card-progress">
        <div class="module-card-progress-label">0/${m.pages} pages completed</div>
        <div class="module-card-progress-bar"><div class="module-card-progress-fill" style="background:${m.color};width:0%" data-module-progress="${m.num}"></div></div>
      </div>
    </a>`).join('')}
  </div>

  <div class="divider"></div>
  <div class="card-grid" style="grid-template-columns:repeat(auto-fill,minmax(200px,1fr))">
    <a href="#projects" class="card" onclick="Router.navigate('projects'); return false;" style="cursor:pointer">
      <div style="font-size:32px;margin-bottom:12px">🛠️</div>
      <div class="card-title">10 Portfolio Projects</div>
      <div class="card-desc">Build real deliverables that showcase your DITA skills to employers.</div>
    </a>
    <a href="#interviews" class="card" onclick="Router.navigate('interviews'); return false;" style="cursor:pointer">
      <div style="font-size:32px;margin-bottom:12px">🎯</div>
      <div class="card-title">550+ Interview Q&amp;As</div>
      <div class="card-desc">Master every question you'll face in DITA, XML, Git, and TechWriter interviews.</div>
    </a>
    <a href="#resources" class="card" onclick="Router.navigate('resources'); return false;" style="cursor:pointer">
      <div style="font-size:32px;margin-bottom:12px">📚</div>
      <div class="card-title">Curated Resources</div>
      <div class="card-desc">Hand-picked tools, references, communities, and job boards.</div>
    </a>
    <a href="#learning-path" class="card" onclick="Router.navigate('learning-path'); return false;" style="cursor:pointer">
      <div style="font-size:32px;margin-bottom:12px">🗺️</div>
      <div class="card-title">Learning Path</div>
      <div class="card-desc">A clear, progressive roadmap from documentation basics to DITA expert.</div>
    </a>
  </div>
</div>`;

  Progress.render();
}

function renderLearningPath(container) {
  const milestones = [
    { phase: 'Foundation', weeks: 'Weeks 1–2', color: '#4f46e5', modules: ['Module 1: Documentation Fundamentals (10 pages)', 'Module 2: XML Fundamentals (12 pages)'], goal: 'Understand why structured authoring exists and how XML underpins everything.' },
    { phase: 'Core DITA', weeks: 'Weeks 3–5', color: '#059669', modules: ['Module 3: DITA Fundamentals (18 pages)'], goal: 'Write, structure, and reuse DITA content. Build topics, maps, and use conref/keys.' },
    { phase: 'Tooling', weeks: 'Weeks 6–7', color: '#d97706', modules: ['Module 4: Oxygen XML Editor (16 pages)', 'Module 5: Markdown (12 pages)'], goal: 'Become productive in the industry\'s leading DITA editor. Add Markdown to your toolkit.' },
    { phase: 'Collaboration', weeks: 'Weeks 8–9', color: '#dc2626', modules: ['Module 6: Git and GitHub (19 pages)'], goal: 'Work with version-controlled documentation. Collaborate on teams using pull requests.' },
    { phase: 'Advanced Writing', weeks: 'Weeks 10–11', color: '#0284c7', modules: ['Module 7: Technical Writing (13 pages)'], goal: 'Apply minimalism, controlled language, and professional editing to your DITA content.' },
    { phase: 'Specialization', weeks: 'Week 12', color: '#b45309', modules: ['Module 8: Aerospace & DITA (8 pages)'], goal: 'Translate your aerospace experience into modern documentation roles. Plan your career.' },
    { phase: 'Portfolio & Interview', weeks: 'Weeks 13–14', color: '#7c3aed', modules: ['10 Portfolio Projects', '550+ Interview Q&As', 'Resume & LinkedIn tuning'], goal: 'Build deliverables that demonstrate your skills. Practice every interview question type.' },
  ];

  container.innerHTML = `
<div class="page-wrapper fade-in-up">
  <div class="page-header">
    <h1 class="page-title">🗺️ Learning Path</h1>
    <p class="page-subtitle">A structured 14-week journey from documentation foundations to DITA job-readiness. Follow in order for best results.</p>
  </div>

  <div class="callout info"><div class="callout-title">💡 Tailored for Your Background</div>
    <p>This path is designed for Technical Publications Engineers who already know ATA, S1000D, Arbortext, and XML/SGML basics. We start from fundamentals not because you know nothing — but to ensure no gaps as you add DITA, Oxygen, Git, and Markdown to your skills.</p>
  </div>

  <div class="learning-path-timeline">
    ${milestones.map((m, i) => `
    <div class="timeline-item">
      <div class="timeline-dot" style="background:${m.color}; box-shadow:0 0 0 2px ${m.color}"></div>
      <div class="timeline-content">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
          <span class="badge" style="background:${m.color}22;color:${m.color}">${m.phase}</span>
          <span class="timeline-pages">${m.weeks}</span>
        </div>
        <div class="timeline-module-name" style="margin-bottom:8px">${m.modules.join('<br>')}</div>
        <p style="font-size:13px;color:var(--text-muted);margin:0"><strong>Goal:</strong> ${m.goal}</p>
      </div>
    </div>`).join('')}
  </div>

  <div class="divider"></div>
  <h2 class="section-title">Estimated Study Times</h2>
  <div class="table-wrapper">
    <table>
      <thead><tr><th>Module</th><th>Pages</th><th>Est. Study Time</th><th>Difficulty</th></tr></thead>
      <tbody>
        <tr><td>Documentation Fundamentals</td><td>10</td><td>15–20 hours</td><td><span class="badge badge-green">Beginner</span></td></tr>
        <tr><td>XML Fundamentals</td><td>12</td><td>20–25 hours</td><td><span class="badge badge-green">Beginner</span></td></tr>
        <tr><td>DITA Fundamentals</td><td>18</td><td>35–45 hours</td><td><span class="badge badge-orange">Intermediate</span></td></tr>
        <tr><td>Oxygen XML Editor</td><td>16</td><td>25–30 hours</td><td><span class="badge badge-orange">Intermediate</span></td></tr>
        <tr><td>Markdown</td><td>12</td><td>10–15 hours</td><td><span class="badge badge-green">Beginner</span></td></tr>
        <tr><td>Git and GitHub</td><td>19</td><td>30–40 hours</td><td><span class="badge badge-orange">Intermediate</span></td></tr>
        <tr><td>Technical Writing</td><td>13</td><td>20–25 hours</td><td><span class="badge badge-orange">Intermediate</span></td></tr>
        <tr><td>Aerospace &amp; DITA</td><td>8</td><td>10–15 hours</td><td><span class="badge badge-purple">Advanced</span></td></tr>
        <tr><td><strong>Total</strong></td><td><strong>108</strong></td><td><strong>~175–210 hours</strong></td><td>—</td></tr>
      </tbody>
    </table>
  </div>
</div>`;
}

function renderProjects(container) {
  if (typeof PROJECTS_DATA !== 'undefined') {
    container.innerHTML = buildProjectsPage();
  } else {
    container.innerHTML = '<div class="page-wrapper"><p>Projects loading...</p></div>';
  }
}

function renderInterviews(container) {
  if (typeof INTERVIEW_DATA !== 'undefined') {
    container.innerHTML = buildInterviewsPage();
  } else {
    container.innerHTML = '<div class="page-wrapper"><p>Interview data loading...</p></div>';
  }
}

function renderResources(container) {
  container.innerHTML = `
<div class="page-wrapper fade-in-up">
  <div class="page-header">
    <h1 class="page-title">📚 Resources</h1>
    <p class="page-subtitle">Curated tools, references, communities, and job boards for DITA and Technical Writing professionals.</p>
  </div>

  <h2 class="section-title">Tools & Software</h2>
  <div class="resource-grid">
    <div class="resource-card"><div class="resource-card-icon">⚗️</div><div class="resource-card-title">Oxygen XML Editor</div><div class="resource-card-desc">Industry-standard DITA authoring and publishing tool. Free 30-day trial available.</div><a href="https://www.oxygenxml.com" target="_blank" class="resource-card-link">oxygenxml.com →</a></div>
    <div class="resource-card"><div class="resource-card-icon">🔧</div><div class="resource-card-title">DITA Open Toolkit</div><div class="resource-card-desc">Open-source publishing engine for DITA content. Powers HTML5, PDF, and other outputs.</div><a href="https://www.dita-ot.org" target="_blank" class="resource-card-link">dita-ot.org →</a></div>
    <div class="resource-card"><div class="resource-card-icon">🐙</div><div class="resource-card-title">GitHub</div><div class="resource-card-desc">Version control and collaboration platform. Free for public and private repos.</div><a href="https://github.com" target="_blank" class="resource-card-link">github.com →</a></div>
    <div class="resource-card"><div class="resource-card-icon">📝</div><div class="resource-card-title">VS Code</div><div class="resource-card-desc">Free code editor with excellent Markdown and XML support via extensions.</div><a href="https://code.visualstudio.com" target="_blank" class="resource-card-link">code.visualstudio.com →</a></div>
    <div class="resource-card"><div class="resource-card-icon">📐</div><div class="resource-card-title">XML Validator</div><div class="resource-card-desc">Online XML validation and formatting tool. Great for quick checks.</div><a href="https://www.xmlvalidation.com" target="_blank" class="resource-card-link">xmlvalidation.com →</a></div>
    <div class="resource-card"><div class="resource-card-icon">🖼️</div><div class="resource-card-title">draw.io</div><div class="resource-card-desc">Free diagramming tool. Create information architecture and workflow diagrams.</div><a href="https://draw.io" target="_blank" class="resource-card-link">draw.io →</a></div>
  </div>

  <h2 class="section-title">Official Standards & Specs</h2>
  <div class="resource-grid">
    <div class="resource-card"><div class="resource-card-icon">📋</div><div class="resource-card-title">DITA 1.3 Specification</div><div class="resource-card-desc">The official OASIS DITA 1.3 spec. The definitive reference for all DITA elements and attributes.</div><a href="https://docs.oasis-open.org/dita/dita/v1.3/dita-v1.3-part2-tech-content.html" target="_blank" class="resource-card-link">Read spec →</a></div>
    <div class="resource-card"><div class="resource-card-icon">✈️</div><div class="resource-card-title">S1000D</div><div class="resource-card-desc">International specification for technical publications. Essential for defense and aerospace.</div><a href="http://www.s1000d.org" target="_blank" class="resource-card-link">s1000d.org →</a></div>
    <div class="resource-card"><div class="resource-card-icon">🛫</div><div class="resource-card-title">ATA iSpec2200</div><div class="resource-card-desc">ATA specification for aircraft technical publications. Industry standard for commercial aviation.</div><a href="https://www.ata-specs.org" target="_blank" class="resource-card-link">ata-specs.org →</a></div>
    <div class="resource-card"><div class="resource-card-icon">🌐</div><div class="resource-card-title">W3C XML Spec</div><div class="resource-card-desc">Official W3C XML 1.0 specification. The authoritative source for XML rules.</div><a href="https://www.w3.org/TR/xml/" target="_blank" class="resource-card-link">w3.org →</a></div>
  </div>

  <h2 class="section-title">Learning & Communities</h2>
  <div class="resource-grid">
    <div class="resource-card"><div class="resource-card-icon">👥</div><div class="resource-card-title">DITA Awareness</div><div class="resource-card-desc">Community site with DITA articles, news, and discussion forums.</div><a href="https://www.ditawriter.com" target="_blank" class="resource-card-link">ditawriter.com →</a></div>
    <div class="resource-card"><div class="resource-card-icon">📖</div><div class="resource-card-title">Every Page is Page One</div><div class="resource-card-desc">Mark Baker's influential blog and book on topic-based authoring in the digital age.</div><a href="https://everypageispageone.com" target="_blank" class="resource-card-link">everypageispageone.com →</a></div>
    <div class="resource-card"><div class="resource-card-icon">💼</div><div class="resource-card-title">Write the Docs</div><div class="resource-card-desc">Community for people who care about documentation. Slack, conferences, guides.</div><a href="https://www.writethedocs.org" target="_blank" class="resource-card-link">writethedocs.org →</a></div>
    <div class="resource-card"><div class="resource-card-icon">🎓</div><div class="resource-card-title">STC (Society for TechComm)</div><div class="resource-card-desc">Professional organization for technical communicators. Certification, publications, networking.</div><a href="https://www.stc.org" target="_blank" class="resource-card-link">stc.org →</a></div>
  </div>

  <h2 class="section-title">Job Boards</h2>
  <div class="resource-grid">
    <div class="resource-card"><div class="resource-card-icon">🔍</div><div class="resource-card-title">LinkedIn Jobs</div><div class="resource-card-desc">Search: "DITA Author", "Technical Writer DITA", "Information Developer", "XML Author"</div><a href="https://linkedin.com/jobs" target="_blank" class="resource-card-link">linkedin.com/jobs →</a></div>
    <div class="resource-card"><div class="resource-card-icon">💼</div><div class="resource-card-title">Indeed</div><div class="resource-card-desc">Search for DITA, XML, Technical Writer roles. Set up email alerts for daily updates.</div><a href="https://indeed.com" target="_blank" class="resource-card-link">indeed.com →</a></div>
    <div class="resource-card"><div class="resource-card-icon">📡</div><div class="resource-card-title">Naukri</div><div class="resource-card-desc">India's largest job portal. Strong for aerospace and documentation roles in India.</div><a href="https://naukri.com" target="_blank" class="resource-card-link">naukri.com →</a></div>
    <div class="resource-card"><div class="resource-card-icon">🏭</div><div class="resource-card-title">Careers in Aerospace</div><div class="resource-card-desc">Specialist job boards for Boeing, Airbus, HAL, DRDO, and aerospace OEM careers.</div></div>
  </div>
</div>`;
}

function renderNotFound(pageId) {
  return `<div class="page-wrapper"><div class="callout warning"><div class="callout-title">⚠️ Page Not Found</div><p>Page "${pageId}" does not exist. <a href="#home" onclick="Router.navigate('home'); return false;">Go Home</a></p></div></div>`;
}

/* ── Initialization ─────────────────────────────────────────────────── */
function init() {
  // Load theme
  Theme.load();

  // Load progress
  Progress.load();

  // Register pages from modules
  if (typeof MODULE1_PAGES !== 'undefined') registerPages(MODULE1_PAGES);
  if (typeof MODULE2_PAGES !== 'undefined') registerPages(MODULE2_PAGES);
  if (typeof MODULE3_PAGES !== 'undefined') registerPages(MODULE3_PAGES);
  if (typeof MODULE4_PAGES !== 'undefined') registerPages(MODULE4_PAGES);
  if (typeof MODULE5_PAGES !== 'undefined') registerPages(MODULE5_PAGES);
  if (typeof MODULE6_PAGES !== 'undefined') registerPages(MODULE6_PAGES);
  if (typeof MODULE7_PAGES !== 'undefined') registerPages(MODULE7_PAGES);
  if (typeof MODULE8_PAGES !== 'undefined') registerPages(MODULE8_PAGES);

  // Build search index
  Search.build();

  // Init sidebar
  Sidebar.init();

  // Event listeners
  document.getElementById('themeToggle')?.addEventListener('click', () => Theme.toggle());
  document.getElementById('sidebarToggle')?.addEventListener('click', () => Sidebar.toggle());

  const searchInput = document.getElementById('globalSearch');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      const results = Search.query(e.target.value);
      Search.render(results, e.target.value);
    });
    document.addEventListener('click', e => {
      if (!e.target.closest('.search-wrapper')) Search.close();
    });
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Escape') Search.close();
    });
  }

  // Hash routing
  window.addEventListener('hashchange', () => Router.handleHash());
  Router.handleHash();

  // Mermaid config
  if (window.mermaid) {
    mermaid.initialize({
      startOnLoad: false,
      theme: document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'default',
      securityLevel: 'loose',
    });
  }

  // Sidebar link clicks
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', e => {
      const pageId = link.dataset.page;
      if (pageId) {
        e.preventDefault();
        Router.navigate(pageId);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', init);
