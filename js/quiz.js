/* ══════════════════════════════════════════════════════════════════════
   DITA PRO ACADEMY — Projects & Interviews Page Builders
   ══════════════════════════════════════════════════════════════════════ */

function buildProjectsPage() {
  if (typeof PROJECTS_DATA === 'undefined') return '<p>Loading...</p>';
  const colors = ['#4f46e5','#0891b2','#059669','#d97706','#7c3aed','#dc2626','#0284c7','#b45309','#4f46e5','#059669'];
  return `<div class="page-wrapper fade-in-up">
    <div class="page-header">
      <h1 class="page-title">🛠️ Portfolio Projects</h1>
      <p class="page-subtitle">Ten real-world projects that demonstrate your DITA, XML, Git, and Technical Writing skills to employers. Complete these alongside your learning to build a professional portfolio.</p>
    </div>
    <div class="callout tip">
      <div class="callout-title">🎯 Portfolio Strategy</div>
      <p>Complete at least 5 of these projects and host them on GitHub. Include links on your resume and LinkedIn profile. Recruiters for DITA roles actively look for working samples, not just certifications.</p>
    </div>
    ${PROJECTS_DATA.map((p, i) => `
    <div class="project-card">
      <div class="project-card-header">
        <div class="project-num" style="background:${colors[i]}">${i+1}</div>
        <div>
          <div class="project-card-title">${p.title}</div>
          <div class="project-card-subtitle">${p.subtitle}</div>
        </div>
        <div style="margin-left:auto"><span class="project-difficulty difficulty-${p.difficulty.toLowerCase()}">${p.difficulty}</span></div>
      </div>
      <div class="project-card-body">
        <div class="project-tags">${p.skills.map(s => `<span class="project-tag">${s}</span>`).join('')}</div>
        <p style="font-size:14px;color:var(--text-secondary);margin-bottom:16px">${p.description}</p>
        <div class="expandable">
          <div class="expandable-header">
            <span>📋 Project Steps & Deliverables</span>
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
          <div class="expandable-body">
            <h5 style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin-bottom:12px">Steps</h5>
            <ol style="margin-left:20px;margin-bottom:16px">${p.steps.map(s => `<li style="margin-bottom:8px;font-size:14px;color:var(--text-secondary)">${s}</li>`).join('')}</ol>
            <div class="project-deliverables">
              <h5>Deliverables</h5>
              <ul class="deliverable-list">${p.deliverables.map(d => `<li>${d}</li>`).join('')}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>`).join('')}
  </div>`;
}

function buildInterviewsPage() {
  if (typeof INTERVIEW_DATA === 'undefined') return '<p>Loading...</p>';
  const categories = Object.keys(INTERVIEW_DATA);
  const icons = { DITA:'🌿', XML:'🏗️', Git:'🔀', Markdown:'✍️', 'Technical Writing':'🖊️', Oxygen:'⚗️' };
  const colors = { DITA:'#059669', XML:'#0891b2', Git:'#dc2626', Markdown:'#7c3aed', 'Technical Writing':'#0284c7', Oxygen:'#d97706' };

  const tabsHtml = categories.map(cat => `<button class="interview-tab" data-cat="${cat}" onclick="showInterviewCat('${cat}')">${icons[cat]||'📝'} ${cat}</button>`).join('');

  const panelsHtml = categories.map(cat => {
    const entry = INTERVIEW_DATA[cat];
    const qs = Array.isArray(entry) ? entry : (entry.questions || []);
    return `<div class="interview-panel" id="panel-${cat.replace(/\s+/g,'-')}" style="display:none">
      <div style="margin-bottom:16px;color:var(--text-muted);font-size:14px">${qs.length} questions with detailed answers</div>
      ${qs.map((q, i) => `
      <div class="qa-item" id="qa-${cat.replace(/\s+/g,'-')}-${i}">
        <div class="qa-question">
          <span class="qa-q-num">${i+1}</span>
          <span style="flex:1">${q.q}</span>
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="qa-answer">
          <div class="qa-answer-inner">${q.a}</div>
        </div>
      </div>`).join('')}
    </div>`;
  }).join('');

  return `<div class="page-wrapper fade-in-up">
    <div class="page-header">
      <h1 class="page-title">🎯 Interview Preparation</h1>
      <p class="page-subtitle">550+ interview questions with detailed answers across DITA, XML, Git, Markdown, Technical Writing, and Oxygen XML. Click any question to see the full answer.</p>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px">
      ${tabsHtml}
    </div>
    <style>
      .interview-tab{padding:8px 16px;border-radius:999px;border:2px solid var(--border);background:var(--bg-surface);color:var(--text-secondary);font-size:13px;font-weight:600;cursor:pointer;transition:all 200ms;}
      .interview-tab:hover,.interview-tab.active{border-color:var(--brand-primary);background:rgba(79,70,229,.1);color:var(--brand-primary);}
    </style>
    ${panelsHtml}
  </div>`;
}

function showInterviewCat(cat) {
  document.querySelectorAll('.interview-panel').forEach(p => p.style.display = 'none');
  document.querySelectorAll('.interview-tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById(`panel-${cat.replace(/\s+/g,'-')}`);
  if (panel) panel.style.display = 'block';
  const tab = document.querySelector(`[data-cat="${cat}"]`);
  if (tab) tab.classList.add('active');

  // Init accordion
  document.querySelectorAll('.qa-question').forEach(q => {
    if (!q._bound) {
      q.addEventListener('click', () => q.closest('.qa-item').classList.toggle('open'));
      q._bound = true;
    }
  });
}

// Auto-show first tab when interviews page loads
function initInterviewPage() {
  if (typeof INTERVIEW_DATA !== 'undefined') {
    const first = Object.keys(INTERVIEW_DATA)[0];
    if (first) showInterviewCat(first);
  }
}
