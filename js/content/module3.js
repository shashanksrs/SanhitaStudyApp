const MODULE3_PAGES = [
{
  id:'page-23',pageNum:23,module:3,moduleTitle:'DITA Fundamentals',
  title:'Introduction to DITA',
  subtitle:'What DITA is, where it came from, and why it has become the world\'s leading standard for structured technical documentation.',
  duration:'25–30 min read',level:'Beginner',
  searchKeywords:'DITA Darwin Information Typing Architecture introduction overview IBM OASIS history',
  objectives:['Define DITA and expand the acronym meaningfully','Trace DITA\'s origin from IBM to OASIS','Explain what "information typing" means','Identify the three foundational DITA principles','Understand who uses DITA and why'],
  content:`
<h2>What is DITA?</h2>
<p><strong>DITA — Darwin Information Typing Architecture</strong> — is an XML-based open standard for authoring, producing, and delivering technical information. It was created at IBM in 2001 and donated to OASIS (Organization for the Advancement of Structured Information Standards) in 2004, where it became an open standard.</p>
<p>The name reveals the philosophy:</p>
<ul>
<li><strong>Darwin:</strong> Content evolves through specialization — you can extend base DITA types to create domain-specific variants (just as species evolve from common ancestors)</li>
<li><strong>Information Typing:</strong> Content is classified into types (concept, task, reference) with specific structural rules</li>
<li><strong>Architecture:</strong> It is a comprehensive system, not just a tag set</li>
</ul>

<h2>The Problem DITA Was Designed to Solve</h2>
<p>IBM in the 1990s had thousands of technical writers producing documentation in dozens of formats across hundreds of products. Content was duplicated everywhere. Updating a product name meant finding and replacing it in thousands of documents. Publishing the same content as PDF, HTML, and help required triple authoring. Translation of the same content was paid for multiple times.</p>
<p>IBM's Information Architecture team, led by Michael Priestley and others, designed DITA to solve these problems through three core principles:</p>

<h2>The Three Pillars of DITA</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Pillar</th><th>Principle</th><th>What it enables</th></tr></thead>
<tbody>
<tr><td><strong>Topic-based authoring</strong></td><td>Write self-contained, atomic topics instead of books</td><td>Reuse, flexible assembly, "Every Page is Page One" compliance</td></tr>
<tr><td><strong>Content reuse</strong></td><td>Reference content rather than copy it (conref, keyref)</td><td>Single source of truth; update once, update everywhere</td></tr>
<tr><td><strong>Specialization</strong></td><td>Extend base types to create domain-specific structures</td><td>Maintain DITA tool compatibility while adding custom semantics</td></tr>
</tbody></table></div>

<h2>DITA Versions</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Version</th><th>Year</th><th>Key Additions</th></tr></thead>
<tbody>
<tr><td>DITA 1.0</td><td>2005</td><td>Initial OASIS standard. Concept, task, reference topics. Maps.</td></tr>
<tr><td>DITA 1.1</td><td>2007</td><td>Bookmap. Improved specialization.</td></tr>
<tr><td>DITA 1.2</td><td>2010</td><td>Keys and keyrefs. Learning & Training specialization. Conref push. Massive expansion.</td></tr>
<tr><td>DITA 1.3</td><td>2015</td><td>Troubleshooting topic type. Branch filtering. Scoped keys. MathML/SVG. Most widely deployed version.</td></tr>
<tr><td>DITA 2.0</td><td>2023</td><td>Simplified and streamlined. Removed deprecated elements. New multimedia support.</td></tr>
</tbody></table></div>

<h2>Who Uses DITA?</h2>
<p>DITA is used by organizations with large, complex documentation needs across many industries:</p>
<ul>
<li><strong>Aerospace:</strong> Boeing, Airbus, Bombardier, Embraer, Honeywell, GE Aviation</li>
<li><strong>Software:</strong> IBM, Adobe, Microsoft, Oracle, SAP</li>
<li><strong>Industrial equipment:</strong> Caterpillar, John Deere, Siemens</li>
<li><strong>Medical devices:</strong> Medtronic, Philips Healthcare</li>
<li><strong>Financial services:</strong> Banks, insurance companies</li>
<li><strong>Government and defense:</strong> US DoD, NATO contractors</li>
</ul>

<div class="callout success"><div class="callout-title">✓ Why This Matters for Your Career</div>
<p>DITA is the dominant structured authoring standard in most large organizations. Job postings for DITA Author, Information Developer, and Technical Writer roles consistently list DITA as a primary skill. Mastering DITA makes you employable at Boeing, IBM, Oracle, Caterpillar, Honeywell, and thousands of others.</p></div>`,
  quiz:[
    {question:'What does the "Darwin" in DITA stand for?',options:['The scientist who invented XML','The principle that content types evolve through specialization, like biological species','The name of the IBM engineer who created DITA','A reference to Charles Darwin\'s location'],correct:1,explanation:'"Darwin" refers to the specialization mechanism — DITA base types can be extended/specialized into domain-specific variants, analogous to how species evolve from common ancestors. Specialized types remain compatible with base DITA tools.'},
    {question:'DITA was originally created by:',options:['OASIS standards committee','W3C working group','IBM\'s Information Architecture team','Adobe Systems'],correct:2,explanation:'DITA was created by IBM\'s Information Architecture team (led by Michael Priestley and Don Day) in 2001, then donated to OASIS in 2004 where it became an open standard.'},
    {question:'Which DITA version (still the most widely deployed) introduced keys, keyrefs, and the Learning & Training specialization?',options:['DITA 1.0','DITA 1.1','DITA 1.2','DITA 1.3'],correct:2,explanation:'DITA 1.2 (2010) was a major expansion that introduced keys and keyrefs (enabling variable-based reuse), the Learning & Training specialization, conref push, and many other features. DITA 1.3 added troubleshooting topics and branch filtering.'},
  ],
  prev:'page-22',next:'page-24'
},

{
  id:'page-24',pageNum:24,module:3,moduleTitle:'DITA Fundamentals',
  title:'Why DITA Exists',
  subtitle:'The business drivers and industry pain points that make DITA not just useful but essential for large-scale documentation.',
  duration:'20 min read',level:'Beginner',
  searchKeywords:'DITA business case ROI localization single sourcing content reuse efficiency',
  objectives:['Articulate the business case for DITA adoption','Quantify the ROI of DITA implementation','Understand the pain points DITA addresses','Explain DITA\'s value to a non-technical stakeholder'],
  content:`
<h2>The Business Case for DITA</h2>
<p>DITA is not adopted because it is interesting technology. Organizations adopt DITA because it solves specific, expensive business problems. Understanding these problems helps you articulate DITA's value in interviews and to stakeholders.</p>

<h2>Problem 1: Duplication and Update Nightmares</h2>
<p>Without DITA: The same warning appears in 200 topics. The safety team mandates a wording change. A writer must manually find and update 200 topics — introducing inconsistencies and errors.</p>
<p><strong>DITA solution:</strong> The warning exists in one conref source. Change one file; all 200 topics update automatically at next publication.</p>

<h2>Problem 2: Multiple Output Format Costs</h2>
<p>Without DITA: The same manual must be delivered as PDF, HTML, and iPad app. Three separate teams manually format the same content three different ways. When content changes, all three must be updated separately.</p>
<p><strong>DITA solution:</strong> Single XML source; transformation scenarios generate all formats automatically. Content changes propagate to all formats instantly.</p>

<h2>Problem 3: Localization Costs</h2>
<p>Localization (translation) is charged per word. Without DITA, duplicated content is translated multiple times. A safety warning that appears in 50 topics is translated 50 times.</p>
<p><strong>DITA solution:</strong> Translation memory captures translated content. Conref'd content is translated once. Studies show DITA reduces localization costs by 30–50% at scale.</p>

<h2>Problem 4: Product Variants</h2>
<p>A manufacturer makes 15 variants of an aircraft system with minor differences. Without DITA: 15 separate manuals, largely identical, all maintained separately.</p>
<p><strong>DITA solution:</strong> One set of topics, with profiling/conditional attributes marking variant-specific content. Publication time includes/excludes content by variant automatically.</p>

<h2>Problem 5: Team Authoring Conflicts</h2>
<p>Without DITA: 10 writers working on the same large document in Word. Merging changes is painful. Formatting inconsistencies are constant. No easy way to track who changed what.</p>
<p><strong>DITA solution:</strong> Each topic is a separate file. Writers work independently without conflicts. A CCMS or Git manages versioning and access control.</p>

<h2>The Numbers</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Metric</th><th>Without DITA</th><th>With DITA</th></tr></thead>
<tbody>
<tr><td>Time to update a recurring warning (50 topics)</td><td>5+ hours (manual search/replace)</td><td>5 minutes (update conref source, republish)</td></tr>
<tr><td>Additional output format cost</td><td>Full rewrite/reformat</td><td>Near zero (new transformation scenario)</td></tr>
<tr><td>Localization cost per word</td><td>Paid multiple times for duplicated content</td><td>Paid once; TM reuses previous translations</td></tr>
<tr><td>Time to onboard new writer to project</td><td>Weeks (learn arbitrary structure)</td><td>Days (DITA structure is consistent and documented)</td></tr>
</tbody></table></div>`,
  quiz:[
    {question:'A manager asks why the company should invest in DITA. The strongest argument is:',options:['DITA is technically impressive','DITA reduces documentation costs through reuse, single-source publishing, and lower localization expenses at scale','DITA is used by IBM so it must be good','DITA files are smaller than Word files'],correct:1,explanation:'The business case for DITA is cost reduction and efficiency: reuse eliminates duplicate content maintenance, single-source publishing eliminates format-specific reformatting, and structured content reduces localization costs.'},
  ],
  prev:'page-23',next:'page-25'
},

{
  id:'page-25',pageNum:25,module:3,moduleTitle:'DITA Fundamentals',
  title:'DITA Architecture',
  subtitle:'The complete structural model of DITA — topics, maps, specialization, and the DITA Open Toolkit.',
  duration:'25 min read',level:'Beginner',
  searchKeywords:'DITA architecture topics maps DITA-OT open toolkit specialization layers',
  objectives:['Describe the major components of the DITA architecture','Understand the relationship between topics, maps, and the DITA-OT','Explain the role of the DITA Open Toolkit in publishing','Understand the specialization mechanism at a high level'],
  content:`
<h2>The DITA Architecture Overview</h2>
<p>DITA has three architectural layers that work together to produce documentation:</p>
<div class="diagram-container"><div class="mermaid">
graph TB
  subgraph "Content Layer"
    Topics["DITA Topics\n(concept, task, reference)"]
    Maps["DITA Maps\n(assembly, navigation)"]
  end
  subgraph "Processing Layer"
    OT["DITA Open Toolkit\n(DITA-OT)"]
    XSLT["XSLT Transforms\n(customizable stylesheets)"]
  end
  subgraph "Output Layer"
    PDF["PDF"]
    HTML5["HTML5 / WebHelp"]
    EPUB["EPUB"]
    Custom["Custom Format"]
  end
  Topics --> Maps
  Maps --> OT
  OT --> XSLT
  XSLT --> PDF
  XSLT --> HTML5
  XSLT --> EPUB
  XSLT --> Custom
</div><p class="diagram-caption">The three-layer DITA architecture: content, processing, output.</p></div>

<h2>Layer 1: Content</h2>
<p><strong>Topics</strong> are the atomic content units — individual XML files, each covering one subject. There are three base topic types plus specialized types.</p>
<p><strong>Maps</strong> are XML files that reference topics and define their hierarchical arrangement. Maps produce the table of contents, navigation structure, and publication assembly.</p>

<h2>Layer 2: Processing — The DITA Open Toolkit</h2>
<p>The <strong>DITA Open Toolkit (DITA-OT)</strong> is the open-source publishing engine that processes DITA content. It:</p>
<ul>
<li>Reads your DITA map and all referenced topics</li>
<li>Resolves conrefs, keyrefs, and conditional processing</li>
<li>Applies XSLT stylesheets to generate output</li>
<li>Produces PDF (via Apache FOP or RenderX XEP), HTML5, EPUB, and other formats</li>
</ul>
<p>Oxygen XML Editor includes the DITA-OT and provides a graphical interface for configuring and running transformation scenarios. When you click "Transform" in Oxygen, it is invoking the DITA-OT.</p>

<h2>Layer 3: Specialization</h2>
<p>Specialization is DITA's extensibility mechanism. You can create new element types by specializing (extending) existing base types. Specialized elements are semantically richer but remain compatible with all DITA tools because every specialized element "is-a" version of its base type.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Specialization hierarchy example</span></div>
<pre><span class="tok-com">&lt;!-- Base DITA topic type --&gt;</span>
<span class="tok-tag">&lt;topic&gt;</span> → <span class="tok-tag">&lt;concept&gt;</span> → <span class="tok-tag">&lt;apiConcept&gt;</span>   <span class="tok-com">(API specialization)</span>
<span class="tok-tag">&lt;topic&gt;</span> → <span class="tok-tag">&lt;task&gt;</span>    → <span class="tok-tag">&lt;troubleshooting&gt;</span> <span class="tok-com">(built-in specialization)</span>
<span class="tok-tag">&lt;topic&gt;</span> → <span class="tok-tag">&lt;reference&gt;</span> → <span class="tok-tag">&lt;partsCatalogEntry&gt;</span> <span class="tok-com">(custom aerospace specialization)</span></pre></div>

<h2>The DITA Topic Type Hierarchy</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Base Type</th><th>Built-in Specializations</th><th>Use Case</th></tr></thead>
<tbody>
<tr><td>topic</td><td>concept, task, reference, glossentry, troubleshooting</td><td>General content foundation</td></tr>
<tr><td>map</td><td>bookmap, subjectScheme, classifyMap</td><td>Publication assembly</td></tr>
</tbody></table></div>

<h2>DITA and Your Current Tools</h2>
<p>If you have worked with Arbortext Editor for S1000D, the mental model translates directly:</p>
<div class="table-wrapper"><table>
<thead><tr><th>S1000D / Arbortext Concept</th><th>DITA Equivalent</th></tr></thead>
<tbody>
<tr><td>Data Module</td><td>DITA Topic</td></tr>
<tr><td>CSDB (Common Source DataBase)</td><td>CCMS / Git repository</td></tr>
<tr><td>Publication Module</td><td>DITA Map</td></tr>
<tr><td>Arbortext Publishing Engine</td><td>DITA Open Toolkit</td></tr>
<tr><td>S1000D DTD/schema</td><td>DITA DTD/schema</td></tr>
<tr><td>Business Rules</td><td>DITA profiling + specialization</td></tr>
</tbody></table></div>`,
  quiz:[
    {question:'The DITA Open Toolkit (DITA-OT) is primarily responsible for:',options:['Authoring DITA topics','Transforming DITA XML source into output formats (PDF, HTML5, etc.)','Validating DITA against the DTD','Storing and versioning DITA files'],correct:1,explanation:'The DITA-OT is the publishing engine — it processes DITA maps and topics, resolves reuse mechanisms (conref, keyref), applies XSLT transformations, and generates output formats like PDF and HTML5.'},
    {question:'DITA specialization allows you to:',options:['Change the meaning of existing DITA elements','Create new element types that extend base DITA types while remaining compatible with DITA tools','Break DITA backward compatibility for custom needs','Write DITA without using XML'],correct:1,explanation:'Specialization extends base DITA types to add domain-specific semantics. Specialized elements are "is-a" versions of their base type — a specialized task is still a task, so all DITA tools process it correctly.'},
  ],
  prev:'page-24',next:'page-26'
},

{
  id:'page-26',pageNum:26,module:3,moduleTitle:'DITA Fundamentals',
  title:'Topics',
  subtitle:'The atomic unit of DITA — what topics are, how they are structured, and the rules that make them powerful.',
  duration:'25 min read',level:'Beginner',
  searchKeywords:'DITA topic structure title shortdesc body prolog id topic rules',
  objectives:['Understand the anatomy of a DITA topic','Identify required vs optional topic components','Write a complete minimal DITA topic','Understand the role of shortdesc','Apply topic-level best practices'],
  content:`
<h2>The DITA Topic: Structure</h2>
<p>Every DITA topic, regardless of type, shares a common structure. This predictability is one of DITA's great strengths — once you know the pattern, every topic is familiar.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Generic DITA topic structure</span></div>
<pre><span class="tok-tag">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>
<span class="tok-com">&lt;!DOCTYPE topic PUBLIC "-//OASIS//DTD DITA Topic//EN" "topic.dtd"&gt;</span>
<span class="tok-tag">&lt;topic</span> <span class="tok-attr">id</span>=<span class="tok-val">"topic-id"</span><span class="tok-tag">&gt;</span>                    <span class="tok-com">&lt;!-- Required: unique ID --&gt;</span>
  <span class="tok-tag">&lt;title&gt;</span>Topic Title<span class="tok-tag">&lt;/title&gt;</span>             <span class="tok-com">&lt;!-- Required --&gt;</span>
  <span class="tok-tag">&lt;shortdesc&gt;</span>Brief description.<span class="tok-tag">&lt;/shortdesc&gt;</span> <span class="tok-com">&lt;!-- Highly recommended --&gt;</span>
  <span class="tok-tag">&lt;prolog&gt;</span>                             <span class="tok-com">&lt;!-- Optional: metadata --&gt;</span>
    <span class="tok-tag">&lt;author&gt;</span>Sanhita Yadav<span class="tok-tag">&lt;/author&gt;</span>
    <span class="tok-tag">&lt;critdates&gt;</span>
      <span class="tok-tag">&lt;created</span> <span class="tok-attr">date</span>=<span class="tok-val">"2024-01-15"</span><span class="tok-tag">/&gt;</span>
    <span class="tok-tag">&lt;/critdates&gt;</span>
  <span class="tok-tag">&lt;/prolog&gt;</span>
  <span class="tok-tag">&lt;body&gt;</span>                               <span class="tok-com">&lt;!-- Required: the content --&gt;</span>
    <span class="tok-tag">&lt;p&gt;</span>Main content goes here.<span class="tok-tag">&lt;/p&gt;</span>
  <span class="tok-tag">&lt;/body&gt;</span>
  <span class="tok-tag">&lt;related-links&gt;</span>                     <span class="tok-com">&lt;!-- Optional: related topics --&gt;</span>
    <span class="tok-tag">&lt;link</span> <span class="tok-attr">href</span>=<span class="tok-val">"related-topic.dita"</span><span class="tok-tag">/&gt;</span>
  <span class="tok-tag">&lt;/related-links&gt;</span>
<span class="tok-tag">&lt;/topic&gt;</span></pre></div>

<h2>The shortdesc Element</h2>
<p>The <code>&lt;shortdesc&gt;</code> (short description) is one of the most valuable elements in DITA. It:</p>
<ul>
<li>Appears as the hover preview text in navigation links</li>
<li>Is used as the first paragraph of the topic when published to HTML</li>
<li>Appears in search result previews</li>
<li>Tells users what the topic is about before they click it</li>
</ul>
<p>A good shortdesc is 1–2 sentences that summarize the topic's key point or purpose. For tasks: state the goal. For concepts: state the key understanding. For references: state what information is provided.</p>
<div class="comparison">
<div class="comparison-panel bad"><div class="comparison-panel-header">Poor shortdesc</div><ul><li>This topic describes the hydraulic system.</li><li>Information about filters.</li><li>Use this procedure carefully.</li></ul></div>
<div class="comparison-panel good"><div class="comparison-panel-header">Good shortdesc</div><ul><li>The hydraulic system provides 3,000 PSI power to flight controls, landing gear, and brakes through three independent circuits.</li><li>The main hydraulic filter removes particles larger than 15 microns from the system fluid.</li><li>Replace the main fuel filter to restore normal fuel flow after a fuel contamination event.</li></ul></div>
</div>

<h2>Topic Filenames and IDs</h2>
<p>Best practices for topic file management:</p>
<ul>
<li>One topic per file</li>
<li>Filename should mirror the topic title: <code>replace-fuel-filter.dita</code></li>
<li>The <code>id</code> attribute must be unique within the publication; many teams make it match the filename: <code>id="replace-fuel-filter"</code></li>
<li>Use lowercase with hyphens; avoid spaces and special characters in filenames</li>
</ul>

<h2>Common DITA Body Elements</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Element</th><th>Purpose</th><th>Available in</th></tr></thead>
<tbody>
<tr><td><code>&lt;p&gt;</code></td><td>Paragraph</td><td>All topic types</td></tr>
<tr><td><code>&lt;ul&gt;/&lt;ol&gt;/&lt;li&gt;</code></td><td>Unordered/ordered lists</td><td>All topic types</td></tr>
<tr><td><code>&lt;table&gt;</code></td><td>Tables (CALS model)</td><td>All topic types</td></tr>
<tr><td><code>&lt;note&gt;</code></td><td>Notes, warnings, cautions, important</td><td>All topic types</td></tr>
<tr><td><code>&lt;image&gt;</code></td><td>Embedded images</td><td>All topic types</td></tr>
<tr><td><code>&lt;codeblock&gt;</code></td><td>Code samples, command lines</td><td>All topic types</td></tr>
<tr><td><code>&lt;fig&gt;</code></td><td>Figure with caption</td><td>All topic types</td></tr>
<tr><td><code>&lt;section&gt;</code></td><td>Named section with optional title</td><td>topic, concept, reference</td></tr>
<tr><td><code>&lt;steps&gt;/&lt;step&gt;</code></td><td>Numbered procedure steps</td><td>task only</td></tr>
</tbody></table></div>`,
  quiz:[
    {question:'The DITA <shortdesc> element is important because:',options:['It is required by the DITA DTD','It appears in navigation hover text, search previews, and as the first paragraph — making it critical for discoverability','It replaces the need for a body element','It sets the topic ID'],correct:1,explanation:'shortdesc serves multiple roles: hover text in navigation, search engine preview, first paragraph in output. A well-written shortdesc dramatically improves usability. While not strictly required by all DTD configurations, it is strongly recommended.'},
    {question:'Which statement about DITA topic IDs is correct?',options:['Two topics in the same publication can have the same ID','Topic IDs must be globally unique across all files in a publication','Topic IDs are optional','Topic IDs can contain spaces'],correct:1,explanation:'Topic IDs must be unique within a publication. Duplicate IDs cause broken links, conref failures, and publishing errors. IDs cannot contain spaces (XML ID type rules).'},
  ],
  prev:'page-25',next:'page-27'
},

{
  id:'page-27',pageNum:27,module:3,moduleTitle:'DITA Fundamentals',
  title:'Concept Topics',
  subtitle:'Mastering DITA concept topics — the "what" and "why" of your documentation.',
  duration:'25 min read',level:'Beginner',
  searchKeywords:'DITA concept topic conbody section p note example definition background',
  objectives:['Describe the purpose and structure of a DITA concept topic','Write a complete concept topic with all key elements','Understand when to use a concept vs. a task','Apply best practices for concept topic authoring'],
  content:`
<h2>What is a Concept Topic?</h2>
<p>A concept topic answers "What is it?" or "How does it work?" or "Why does it matter?" It builds understanding without telling the user what to do. Concept topics are the background knowledge that makes tasks and references comprehensible.</p>
<p>Think of every system description in an Aircraft Maintenance Manual — "The hydraulic system provides 3,000 PSI power through three independent circuits..." That is a concept topic.</p>

<h2>Concept Topic Structure</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Complete concept topic</span></div>
<pre><span class="tok-tag">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>
<span class="tok-com">&lt;!DOCTYPE concept PUBLIC "-//OASIS//DTD DITA Concept//EN" "concept.dtd"&gt;</span>
<span class="tok-tag">&lt;concept</span> <span class="tok-attr">id</span>=<span class="tok-val">"con-hydraulic-system"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;title&gt;</span>Hydraulic System Overview<span class="tok-tag">&lt;/title&gt;</span>
  <span class="tok-tag">&lt;shortdesc&gt;</span>The hydraulic system provides 3,000 PSI power
    for flight controls, landing gear, and brakes through
    three independent circuits.<span class="tok-tag">&lt;/shortdesc&gt;</span>
  <span class="tok-tag">&lt;conbody&gt;</span>
    <span class="tok-tag">&lt;p&gt;</span>The aircraft hydraulic system consists of three
      independent circuits: System A, System B, and the
      standby system...<span class="tok-tag">&lt;/p&gt;</span>

    <span class="tok-tag">&lt;section</span> <span class="tok-attr">id</span>=<span class="tok-val">"sec-system-a"</span><span class="tok-tag">&gt;</span>
      <span class="tok-tag">&lt;title&gt;</span>System A<span class="tok-tag">&lt;/title&gt;</span>
      <span class="tok-tag">&lt;p&gt;</span>System A is powered by the left engine-driven pump...<span class="tok-tag">&lt;/p&gt;</span>
    <span class="tok-tag">&lt;/section&gt;</span>

    <span class="tok-tag">&lt;section</span> <span class="tok-attr">id</span>=<span class="tok-val">"sec-system-b"</span><span class="tok-tag">&gt;</span>
      <span class="tok-tag">&lt;title&gt;</span>System B<span class="tok-tag">&lt;/title&gt;</span>
      <span class="tok-tag">&lt;p&gt;</span>System B is powered by the right engine-driven pump...<span class="tok-tag">&lt;/p&gt;</span>
    <span class="tok-tag">&lt;/section&gt;</span>

    <span class="tok-tag">&lt;example</span> <span class="tok-attr">id</span>=<span class="tok-val">"ex-normal-operation"</span><span class="tok-tag">&gt;</span>
      <span class="tok-tag">&lt;title&gt;</span>Normal Operation Example<span class="tok-tag">&lt;/title&gt;</span>
      <span class="tok-tag">&lt;p&gt;</span>During normal flight, both systems A and B operate simultaneously...<span class="tok-tag">&lt;/p&gt;</span>
    <span class="tok-tag">&lt;/example&gt;</span>
  <span class="tok-tag">&lt;/conbody&gt;</span>
<span class="tok-tag">&lt;/concept&gt;</span></pre></div>

<h2>Key Concept Body Elements</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Element</th><th>Purpose</th><th>Notes</th></tr></thead>
<tbody>
<tr><td><code>&lt;conbody&gt;</code></td><td>The body of the concept topic</td><td>Required wrapper for all concept content</td></tr>
<tr><td><code>&lt;section&gt;</code></td><td>Named sub-section with optional title</td><td>Can appear multiple times; useful for long concepts</td></tr>
<tr><td><code>&lt;example&gt;</code></td><td>Illustrative example</td><td>Explicitly marks content as an example</td></tr>
<tr><td><code>&lt;p&gt;</code></td><td>Paragraph</td><td>Primary text container</td></tr>
<tr><td><code>&lt;note&gt;</code></td><td>Notes, important, tip, warning, caution</td><td>type attribute controls rendering</td></tr>
<tr><td><code>&lt;table&gt;</code></td><td>CALS table</td><td>For comparative or reference data in concept</td></tr>
<tr><td><code>&lt;fig&gt;</code></td><td>Figure with image and caption</td><td>Always include title for accessibility</td></tr>
</tbody></table></div>

<h2>When to Use a Concept vs. Task</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Use Concept when…</th><th>Use Task when…</th></tr></thead>
<tbody>
<tr><td>Explaining how something works</td><td>Describing what the user must do</td></tr>
<tr><td>Providing background knowledge</td><td>Providing step-by-step instructions</td></tr>
<tr><td>Defining terminology</td><td>Telling user to perform an action</td></tr>
<tr><td>Describing system architecture</td><td>Guiding through a procedure</td></tr>
<tr><td>No user actions required</td><td>User performs specific steps</td></tr>
</tbody></table></div>

<div class="callout warning"><div class="callout-title">⚠️ Common Mistake</div>
<p>Embedding task content in a concept topic. If you find yourself writing numbered steps in a conbody, stop — that content belongs in a separate task topic. Concept topics explain; task topics instruct.</p></div>`,
  quiz:[
    {question:'A concept topic is used to answer which type of question?',options:['"How do I do this?"','"What is this?" or "How does it work?"','"What are the specifications?"','"What went wrong and how do I fix it?"'],correct:1,explanation:'Concept topics answer "What is it?" and "How does it work?" — they build understanding. Task topics answer "How do I do this?", reference topics provide specifications, and troubleshooting topics address "What went wrong?"'},
    {question:'In a DITA concept topic, the <section> element is used to:',options:['Contain numbered steps','Create named sub-sections within the concept body','Replace the <conbody> element','Define conditional content'],correct:1,explanation:'<section> creates named sub-sections within a concept body, each with an optional title. It helps organize long concept topics into logical parts without splitting them into separate files.'},
  ],
  prev:'page-26',next:'page-28'
},

{
  id:'page-28',pageNum:28,module:3,moduleTitle:'DITA Fundamentals',
  title:'Task Topics',
  subtitle:'DITA\'s most important topic type — authoring precise, complete, user-focused procedures.',
  duration:'30 min read',level:'Beginner',
  searchKeywords:'DITA task topic steps step cmd info stepresult prereq context result',
  objectives:['Write a complete, valid DITA task topic','Use all task body elements correctly','Apply best practices for task writing','Understand the difference between steps, substeps, and choices'],
  content:`
<h2>The DITA Task Topic</h2>
<p>The task topic is the most-used DITA topic type. It represents a procedure — a sequence of steps a user performs to accomplish a goal. For aerospace documentation, almost every procedure in an AMM, CMM, or SRM maps to a DITA task topic.</p>

<h2>Complete Task Topic Structure</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Complete task topic — all elements</span></div>
<pre><span class="tok-tag">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>
<span class="tok-com">&lt;!DOCTYPE task PUBLIC "-//OASIS//DTD DITA Task//EN" "task.dtd"&gt;</span>
<span class="tok-tag">&lt;task</span> <span class="tok-attr">id</span>=<span class="tok-val">"task-replace-fuel-filter"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;title&gt;</span>Replace the Main Fuel Filter<span class="tok-tag">&lt;/title&gt;</span>
  <span class="tok-tag">&lt;shortdesc&gt;</span>Replace the main fuel filter to restore normal fuel
    flow after contamination or at scheduled intervals.<span class="tok-tag">&lt;/shortdesc&gt;</span>
  <span class="tok-tag">&lt;taskbody&gt;</span>

    <span class="tok-tag">&lt;prereq</span> <span class="tok-attr">id</span>=<span class="tok-val">"prereq"</span><span class="tok-tag">&gt;</span>
      <span class="tok-tag">&lt;p&gt;</span>Before starting, ensure:<span class="tok-tag">&lt;/p&gt;</span>
      <span class="tok-tag">&lt;ul&gt;</span>
        <span class="tok-tag">&lt;li&gt;</span>Aircraft is defueled and fuel system is depressurized.<span class="tok-tag">&lt;/li&gt;</span>
        <span class="tok-tag">&lt;li&gt;</span>Replacement filter P/N 29-FLT-001 is serviceable.<span class="tok-tag">&lt;/li&gt;</span>
      <span class="tok-tag">&lt;/ul&gt;</span>
    <span class="tok-tag">&lt;/prereq&gt;</span>

    <span class="tok-tag">&lt;context</span> <span class="tok-attr">id</span>=<span class="tok-val">"context"</span><span class="tok-tag">&gt;</span>
      <span class="tok-tag">&lt;p&gt;</span>The main fuel filter is located on the forward bulkhead,
        accessible via the fuel system access panel (Panel 14R).<span class="tok-tag">&lt;/p&gt;</span>
    <span class="tok-tag">&lt;/context&gt;</span>

    <span class="tok-tag">&lt;steps&gt;</span>
      <span class="tok-tag">&lt;step&gt;</span>
        <span class="tok-tag">&lt;cmd&gt;</span>Open fuel system access panel 14R.<span class="tok-tag">&lt;/cmd&gt;</span>
        <span class="tok-tag">&lt;info&gt;</span>
          <span class="tok-tag">&lt;p&gt;</span>The panel is secured with 8 quarter-turn fasteners.<span class="tok-tag">&lt;/p&gt;</span>
        <span class="tok-tag">&lt;/info&gt;</span>
      <span class="tok-tag">&lt;/step&gt;</span>
      <span class="tok-tag">&lt;step&gt;</span>
        <span class="tok-tag">&lt;cmd&gt;</span>Disconnect the inlet fuel line from the filter housing.<span class="tok-tag">&lt;/cmd&gt;</span>
        <span class="tok-tag">&lt;stepresult&gt;</span>Residual fuel will drain from the disconnected line.<span class="tok-tag">&lt;/stepresult&gt;</span>
      <span class="tok-tag">&lt;/step&gt;</span>
      <span class="tok-tag">&lt;step&gt;</span>
        <span class="tok-tag">&lt;cmd&gt;</span>Remove the filter element.<span class="tok-tag">&lt;/cmd&gt;</span>
      <span class="tok-tag">&lt;/step&gt;</span>
      <span class="tok-tag">&lt;step&gt;</span>
        <span class="tok-tag">&lt;cmd&gt;</span>Install the new filter element (P/N 29-FLT-001).<span class="tok-tag">&lt;/cmd&gt;</span>
        <span class="tok-tag">&lt;info&gt;</span>
          <span class="tok-tag">&lt;p&gt;</span>Torque to 25–30 ft-lb. Refer to torque table, Table 1.<span class="tok-tag">&lt;/p&gt;</span>
        <span class="tok-tag">&lt;/info&gt;</span>
      <span class="tok-tag">&lt;/step&gt;</span>
      <span class="tok-tag">&lt;step&gt;</span>
        <span class="tok-tag">&lt;cmd&gt;</span>Reconnect the inlet fuel line.<span class="tok-tag">&lt;/cmd&gt;</span>
      <span class="tok-tag">&lt;/step&gt;</span>
    <span class="tok-tag">&lt;/steps&gt;</span>

    <span class="tok-tag">&lt;result</span> <span class="tok-attr">id</span>=<span class="tok-val">"result"</span><span class="tok-tag">&gt;</span>
      <span class="tok-tag">&lt;p&gt;</span>The fuel filter is replaced and the system is ready for
        leak check and return to service.<span class="tok-tag">&lt;/p&gt;</span>
    <span class="tok-tag">&lt;/result&gt;</span>

    <span class="tok-tag">&lt;postreq</span> <span class="tok-attr">id</span>=<span class="tok-val">"postreq"</span><span class="tok-tag">&gt;</span>
      <span class="tok-tag">&lt;p&gt;</span>Perform fuel system leak check per Task AMM-28-001.<span class="tok-tag">&lt;/p&gt;</span>
    <span class="tok-tag">&lt;/postreq&gt;</span>

  <span class="tok-tag">&lt;/taskbody&gt;</span>
<span class="tok-tag">&lt;/task&gt;</span></pre></div>

<h2>Task Body Elements Reference</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Element</th><th>Purpose</th><th>Required?</th></tr></thead>
<tbody>
<tr><td><code>&lt;prereq&gt;</code></td><td>Prerequisites — what must be done/prepared before this task</td><td>Optional</td></tr>
<tr><td><code>&lt;context&gt;</code></td><td>Background context — why this task is done, where it applies</td><td>Optional</td></tr>
<tr><td><code>&lt;steps&gt;</code></td><td>Container for ordered steps (use &lt;steps-unordered&gt; if order doesn't matter)</td><td>Required (or steps-unordered)</td></tr>
<tr><td><code>&lt;step&gt;</code></td><td>Individual step container</td><td>At least one required</td></tr>
<tr><td><code>&lt;cmd&gt;</code></td><td>The action command (imperative verb phrase)</td><td>Required in each step</td></tr>
<tr><td><code>&lt;info&gt;</code></td><td>Additional information for the step (not an action)</td><td>Optional</td></tr>
<tr><td><code>&lt;stepresult&gt;</code></td><td>Expected result of performing the step</td><td>Optional</td></tr>
<tr><td><code>&lt;substeps&gt;</code></td><td>Sub-steps when a step has multiple parts</td><td>Optional (use sparingly)</td></tr>
<tr><td><code>&lt;choices&gt;</code></td><td>Alternative options when the user has a choice</td><td>Optional</td></tr>
<tr><td><code>&lt;result&gt;</code></td><td>Overall expected result after completing all steps</td><td>Optional</td></tr>
<tr><td><code>&lt;postreq&gt;</code></td><td>Post-conditions or next tasks to perform</td><td>Optional</td></tr>
</tbody></table></div>

<h2>Task Writing Best Practices</h2>
<ul>
<li><strong>One action per step:</strong> Each &lt;cmd&gt; should describe exactly one action. "Open the panel and disconnect the line" is two steps.</li>
<li><strong>Imperative voice:</strong> "Remove the filter" not "The filter should be removed"</li>
<li><strong>Lead with the verb:</strong> "Connect the hydraulic line" not "The hydraulic line is then connected"</li>
<li><strong>Include expected results:</strong> Use &lt;stepresult&gt; for verification steps</li>
<li><strong>Safety before step:</strong> Warnings and cautions must appear before the step they protect, never after</li>
<li><strong>Prereqs before context:</strong> DITA task structure enforces this order</li>
</ul>`,
  quiz:[
    {question:'In a DITA task, the <cmd> element must:',options:['Contain a warning statement','Describe the action the user performs (imperative verb phrase)','Contain the step number','Be optional in each step'],correct:1,explanation:'<cmd> is required in each step and contains the action command in imperative voice: "Open the access panel", "Remove the filter element". It is the core instruction the user acts on.'},
    {question:'A safety warning about high-voltage hazard for Step 5 should appear:',options:['After Step 5','Inside the <info> of Step 5, after the <cmd>','As a <hazardstatement> BEFORE Step 5\'s <cmd>','In the <postreq> section'],correct:2,explanation:'Safety-critical information (warnings, cautions) must appear BEFORE the step they protect. A user performing the step must see the warning before taking the action, not after. In DITA, hazardstatement elements appear in the step before the cmd or as a preceding step.'},
    {question:'The <postreq> element in a task is used for:',options:['Pre-conditions the user must meet','Steps that are optional','Actions or tasks the user must perform AFTER completing this task','Cross-references to related concepts'],correct:2,explanation:'<postreq> (post-requisites) specifies what the user must do after completing the task — for example, "Perform leak check per Task AMM-28-001." It ensures users know the next required actions.'},
  ],
  prev:'page-27',next:'page-29'
},

{
  id:'page-29',pageNum:29,module:3,moduleTitle:'DITA Fundamentals',
  title:'Reference Topics',
  subtitle:'DITA reference topics — structured data that users look up rather than read.',
  duration:'20 min read',level:'Beginner',
  searchKeywords:'DITA reference topic refsyn properties table refbody specifications parameters',
  objectives:['Describe when to use a reference topic','Write a reference topic with properties tables','Use refsyn for syntax/format reference','Understand the difference between reference and concept'],
  content:`
<h2>What is a Reference Topic?</h2>
<p>A reference topic provides structured, look-up information: specifications, parameters, part numbers, error codes, API method signatures, torque values, permitted materials. Users do not read reference topics from start to finish — they query them for specific values.</p>
<p>In aerospace: an IPC entry, a specifications table, an error code chart, a torque specification — all of these are reference topics.</p>
<p>In software: API method documentation, configuration parameters reference, error code list — all reference topics.</p>

<h2>Reference Topic Structure</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Reference topic with properties table</span></div>
<pre><span class="tok-tag">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>
<span class="tok-com">&lt;!DOCTYPE reference PUBLIC "-//OASIS//DTD DITA Reference//EN" "reference.dtd"&gt;</span>
<span class="tok-tag">&lt;reference</span> <span class="tok-attr">id</span>=<span class="tok-val">"ref-hyd-pump-specs"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;title&gt;</span>Hydraulic Engine-Driven Pump — Specifications<span class="tok-tag">&lt;/title&gt;</span>
  <span class="tok-tag">&lt;shortdesc&gt;</span>Technical specifications for the System A
    hydraulic engine-driven pump P/N 29-EDP-001.<span class="tok-tag">&lt;/shortdesc&gt;</span>
  <span class="tok-tag">&lt;refbody&gt;</span>

    <span class="tok-tag">&lt;section</span> <span class="tok-attr">id</span>=<span class="tok-val">"general-specs"</span><span class="tok-tag">&gt;</span>
      <span class="tok-tag">&lt;title&gt;</span>General Specifications<span class="tok-tag">&lt;/title&gt;</span>
      <span class="tok-tag">&lt;properties&gt;</span>
        <span class="tok-tag">&lt;prophead&gt;</span>
          <span class="tok-tag">&lt;proptypehd&gt;</span>Property<span class="tok-tag">&lt;/proptypehd&gt;</span>
          <span class="tok-tag">&lt;propvaluehd&gt;</span>Value<span class="tok-tag">&lt;/propvaluehd&gt;</span>
          <span class="tok-tag">&lt;propdeschd&gt;</span>Notes<span class="tok-tag">&lt;/propdeschd&gt;</span>
        <span class="tok-tag">&lt;/prophead&gt;</span>
        <span class="tok-tag">&lt;property&gt;</span>
          <span class="tok-tag">&lt;proptype&gt;</span>Part Number<span class="tok-tag">&lt;/proptype&gt;</span>
          <span class="tok-tag">&lt;propvalue&gt;</span>29-EDP-001<span class="tok-tag">&lt;/propvalue&gt;</span>
          <span class="tok-tag">&lt;propdesc&gt;</span>Boeing Part Number<span class="tok-tag">&lt;/propdesc&gt;</span>
        <span class="tok-tag">&lt;/property&gt;</span>
        <span class="tok-tag">&lt;property&gt;</span>
          <span class="tok-tag">&lt;proptype&gt;</span>Operating Pressure<span class="tok-tag">&lt;/proptype&gt;</span>
          <span class="tok-tag">&lt;propvalue&gt;</span>3,000 PSI nominal<span class="tok-tag">&lt;/propvalue&gt;</span>
          <span class="tok-tag">&lt;propdesc&gt;</span>Relief valve set at 3,250 PSI<span class="tok-tag">&lt;/propdesc&gt;</span>
        <span class="tok-tag">&lt;/property&gt;</span>
        <span class="tok-tag">&lt;property&gt;</span>
          <span class="tok-tag">&lt;proptype&gt;</span>Flow Rate<span class="tok-tag">&lt;/proptype&gt;</span>
          <span class="tok-tag">&lt;propvalue&gt;</span>18 GPM at 3,000 PSI<span class="tok-tag">&lt;/propvalue&gt;</span>
          <span class="tok-tag">&lt;propdesc&gt;</span>At normal operating RPM<span class="tok-tag">&lt;/propdesc&gt;</span>
        <span class="tok-tag">&lt;/property&gt;</span>
      <span class="tok-tag">&lt;/properties&gt;</span>
    <span class="tok-tag">&lt;/section&gt;</span>

    <span class="tok-tag">&lt;refsyn</span> <span class="tok-attr">id</span>=<span class="tok-val">"part-syntax"</span><span class="tok-tag">&gt;</span>
      <span class="tok-tag">&lt;title&gt;</span>Part Number Format<span class="tok-tag">&lt;/title&gt;</span>
      <span class="tok-tag">&lt;p&gt;</span>29-EDP-XXX where 29 = ATA chapter, EDP = Engine Driven Pump, XXX = sequence.<span class="tok-tag">&lt;/p&gt;</span>
    <span class="tok-tag">&lt;/refsyn&gt;</span>

  <span class="tok-tag">&lt;/refbody&gt;</span>
<span class="tok-tag">&lt;/reference&gt;</span></pre></div>

<h2>Reference Body Elements</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Element</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td><code>&lt;refbody&gt;</code></td><td>Required wrapper for reference content</td></tr>
<tr><td><code>&lt;properties&gt;</code></td><td>Two- or three-column property/value table (DITA-specific)</td></tr>
<tr><td><code>&lt;refsyn&gt;</code></td><td>Syntax or format description (API signatures, part number formats)</td></tr>
<tr><td><code>&lt;section&gt;</code></td><td>Named section for organizing reference content</td></tr>
<tr><td><code>&lt;table&gt;</code></td><td>CALS table for multi-column reference data</td></tr>
</tbody></table></div>`,
  quiz:[
    {question:'Which content is BEST suited for a DITA reference topic?',options:['An explanation of how the hydraulic system works','Steps for replacing the hydraulic pump','A table of hydraulic system specifications (pressure, flow rate, fluid type)','Background on why hydraulic systems use high pressure'],correct:2,explanation:'Specifications tables — data users look up rather than read — are the classic reference topic content. Parts catalogs, parameter tables, error codes, and specification sheets are all reference topics.'},
  ],
  prev:'page-28',next:'page-30'
},

{
  id:'page-30',pageNum:30,module:3,moduleTitle:'DITA Fundamentals',
  title:'Maps',
  subtitle:'DITA maps — how you assemble topics into complete publications with navigation and hierarchy.',
  duration:'25 min read',level:'Beginner',
  searchKeywords:'DITA map topicref hierarchy TOC navigation bookmap publication assembly',
  objectives:['Understand the role of DITA maps in publication assembly','Write a basic DITA map with topic hierarchy','Distinguish ditamap from bookmap','Use map metadata elements','Understand how maps generate Table of Contents'],
  content:`
<h2>What is a DITA Map?</h2>
<p>A DITA map is an XML file that assembles individual topic files into a publication. The map defines:</p>
<ul>
<li>Which topics are included</li>
<li>Their hierarchical relationship (TOC structure)</li>
<li>Navigation order</li>
<li>Publication-level metadata (title, product, revision)</li>
</ul>
<p>A map contains no content of its own — it references topics using <code>&lt;topicref&gt;</code> elements. Think of a map as the table of contents made manifest: it is both the assembly instructions and the navigation structure.</p>

<h2>Basic DITA Map</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">A simple DITA map</span></div>
<pre><span class="tok-tag">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>
<span class="tok-com">&lt;!DOCTYPE map PUBLIC "-//OASIS//DTD DITA Map//EN" "map.dtd"&gt;</span>
<span class="tok-tag">&lt;map&gt;</span>
  <span class="tok-tag">&lt;title&gt;</span>Boeing 737 Hydraulic System Manual<span class="tok-tag">&lt;/title&gt;</span>
  <span class="tok-tag">&lt;topicmeta&gt;</span>
    <span class="tok-tag">&lt;prodinfo&gt;</span>
      <span class="tok-tag">&lt;prodname&gt;</span>Boeing 737-800<span class="tok-tag">&lt;/prodname&gt;</span>
      <span class="tok-tag">&lt;vrmlist&gt;</span><span class="tok-tag">&lt;vrm</span> <span class="tok-attr">version</span>=<span class="tok-val">"Rev 5"</span><span class="tok-tag">/&gt;&lt;/vrmlist&gt;</span>
    <span class="tok-tag">&lt;/prodinfo&gt;</span>
  <span class="tok-tag">&lt;/topicmeta&gt;</span>

  <span class="tok-com">&lt;!-- Section 1: System Description --&gt;</span>
  <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"concepts/hydraulic-overview.dita"</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"concepts/system-a.dita"</span><span class="tok-tag">/&gt;</span>
    <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"concepts/system-b.dita"</span><span class="tok-tag">/&gt;</span>
    <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"concepts/standby-system.dita"</span><span class="tok-tag">/&gt;</span>
  <span class="tok-tag">&lt;/topicref&gt;</span>

  <span class="tok-com">&lt;!-- Section 2: Maintenance Procedures --&gt;</span>
  <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"tasks/procedures-overview.dita"</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"tasks/inspect-system.dita"</span><span class="tok-tag">/&gt;</span>
    <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"tasks/replace-pump.dita"</span><span class="tok-tag">/&gt;</span>
    <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"tasks/replace-filter.dita"</span><span class="tok-tag">/&gt;</span>
  <span class="tok-tag">&lt;/topicref&gt;</span>

  <span class="tok-com">&lt;!-- Section 3: Specifications --&gt;</span>
  <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"reference/specifications.dita"</span><span class="tok-tag">/&gt;</span>
  <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"reference/torque-values.dita"</span><span class="tok-tag">/&gt;</span>
  <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"reference/troubleshooting-codes.dita"</span><span class="tok-tag">/&gt;</span>
<span class="tok-tag">&lt;/map&gt;</span></pre></div>

<h2>ditamap vs. bookmap</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Feature</th><th>&lt;map&gt; (ditamap)</th><th>&lt;bookmap&gt;</th></tr></thead>
<tbody>
<tr><td>Use case</td><td>General documentation, help systems, web</td><td>Formal books with front/back matter (PDF output)</td></tr>
<tr><td>Front matter</td><td>Not supported</td><td>&lt;frontmatter&gt;: title page, TOC, preface</td></tr>
<tr><td>Back matter</td><td>Not supported</td><td>&lt;backmatter&gt;: index, glossary, appendices</td></tr>
<tr><td>Chapter structure</td><td>topicref hierarchy</td><td>&lt;chapter&gt;, &lt;part&gt;, &lt;appendix&gt;</td></tr>
<tr><td>Best for</td><td>Online help, web portals, reference docs</td><td>Printed manuals, formal PDFs (like AMMs)</td></tr>
</tbody></table></div>

<h2>topicref Attributes</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Attribute</th><th>Purpose</th><th>Example</th></tr></thead>
<tbody>
<tr><td><code>href</code></td><td>Path to the topic file</td><td>href="tasks/replace-pump.dita"</td></tr>
<tr><td><code>type</code></td><td>Topic type hint</td><td>type="task"</td></tr>
<tr><td><code>format</code></td><td>Target format if not .dita</td><td>format="pdf"</td></tr>
<tr><td><code>toc</code></td><td>Include in table of contents</td><td>toc="yes" or "no"</td></tr>
<tr><td><code>processing-role</code></td><td>resource-only topics (not in TOC)</td><td>processing-role="resource-only"</td></tr>
<tr><td><code>product</code></td><td>Conditional processing</td><td>product="737"</td></tr>
</tbody></table></div>`,
  quiz:[
    {question:'A DITA map primarily:',options:['Contains the text content of topics','Assembles referenced topics into a publication with hierarchy and navigation','Defines the output stylesheet','Stores metadata about the publishing environment'],correct:1,explanation:'A DITA map assembles topic references into a publication. It contains no content text of its own — just topicref elements that reference topic files and define their hierarchy, producing the TOC structure.'},
    {question:'Which map type should you use when creating a formal printed manual that needs front matter (title page, preface) and back matter (index, appendices)?',options:['ditamap','bookmap','subjectScheme','classifyMap'],correct:1,explanation:'bookmap is designed for formal book-style publications with front matter (title page, TOC, preface) and back matter (index, glossary, appendices). ditamap is for general-purpose online documentation.'},
  ],
  prev:'page-29',next:'page-31'
},

{id:'page-31',pageNum:31,module:3,moduleTitle:'DITA Fundamentals',title:'Topic Reuse',subtitle:'How the same DITA topic files are referenced from multiple maps to create different publications from the same content.',duration:'20 min read',level:'Intermediate',searchKeywords:'DITA topic reuse multiple maps single source publications sharing',objectives:['Explain topic-level reuse','Show how one topic appears in multiple publications','Understand the implications for topic writing (self-contained)'],
content:`<h2>Topic-Level Reuse in Practice</h2>
<p>Topic-level reuse is the simplest and most powerful form of DITA reuse: the same topic file is referenced by multiple maps, appearing in multiple publications. The content exists in one file; any number of publications can include it.</p>
<div class="diagram-container"><div class="mermaid">
graph TD
  T1["replace-fuel-filter.dita\n(single source file)"]
  M1["amm-chapter-28.ditamap\n(Aircraft Maintenance Manual)"]
  M2["qrc-fuel-system.ditamap\n(Quick Reference Card)"]
  M3["training-fuel-systems.ditamap\n(Training Guide)"]
  T1 --> M1
  T1 --> M2
  T1 --> M3
  style T1 fill:#4f46e5,color:#fff
</div><p class="diagram-caption">One topic file, referenced by three maps, producing three publications.</p></div>

<h2>Writing for Reuse</h2>
<p>For a topic to be reusable, it must not contain context-specific references that only make sense in one publication. Guidelines:</p>
<ul>
<li><strong>Avoid "as described above/below"</strong> — in a different publication, the referenced content may not exist</li>
<li><strong>Use keyrefs for product-specific values</strong> — the value resolves based on the map context</li>
<li><strong>Use conref for shared content</strong> — rather than copying text from another topic</li>
<li><strong>Make every topic self-contained</strong> — it should make sense without requiring the reader to have read other topics first</li>
</ul>

<h2>resource-only Topics</h2>
<p>Some topics are created specifically to serve as conref sources and should never appear in any table of contents. These are declared with <code>processing-role="resource-only"</code> in the map:</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span></div>
<pre><span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"shared/warnings-library.dita"</span>
          <span class="tok-attr">processing-role</span>=<span class="tok-val">"resource-only"</span><span class="tok-tag">/&gt;</span>
<span class="tok-com">&lt;!-- This topic provides conref targets but is never published directly --&gt;</span></pre></div>`,
quiz:[{question:'A "resource-only" topicref in a DITA map means:',options:['The topic has no content','The topic is included in the TOC but not published','The topic is processed for conref/keyref resolution but not included in the output TOC','The topic is optional'],correct:2,explanation:'processing-role="resource-only" tells the DITA-OT to process the topic (resolve conrefs that reference it) but not include it in the output table of contents or rendered publication.'}],
prev:'page-30',next:'page-32'},

{
  id:'page-32',pageNum:32,module:3,moduleTitle:'DITA Fundamentals',
  title:'Conrefs',
  subtitle:'Content references — DITA\'s mechanism for element-level content reuse that keeps your documentation consistent and maintainable.',
  duration:'25 min read',level:'Intermediate',
  searchKeywords:'DITA conref content reference element reuse library source target ID',
  objectives:['Write conref source and consuming elements','Create a reusable warnings library','Understand conref resolution at publish time','Apply conref for team-wide consistency'],
  content:`
<h2>How Conrefs Work</h2>
<p>A conref (content reference) creates a live link between a source element and a referencing element. At publish time, the DITA-OT replaces the referencing element with the actual content from the source.</p>

<div class="diagram-container"><div class="mermaid">
graph LR
  SRC["warnings-library.dita\n&lt;note id='hyd-warning'&gt;\n  High pressure: depressurize\n  before opening lines.\n&lt;/note&gt;"]
  T1["replace-pump.dita\n&lt;note conref='...#hyd-warning'/&gt;"]
  T2["inspect-system.dita\n&lt;note conref='...#hyd-warning'/&gt;"]
  T3["replace-filter.dita\n&lt;note conref='...#hyd-warning'/&gt;"]
  SRC -.->|"resolves to"| T1
  SRC -.->|"resolves to"| T2
  SRC -.->|"resolves to"| T3
</div></div>

<h2>Conref Syntax</h2>
<p>The conref attribute value uses the format: <code>filename.dita#topicID/elementID</code></p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Source — warnings-library.dita</span></div>
<pre><span class="tok-tag">&lt;topic</span> <span class="tok-attr">id</span>=<span class="tok-val">"warnings-lib"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;title&gt;</span>Warnings Library<span class="tok-tag">&lt;/title&gt;</span>
  <span class="tok-tag">&lt;body&gt;</span>
    <span class="tok-tag">&lt;note</span> <span class="tok-attr">type</span>=<span class="tok-val">"warning"</span> <span class="tok-attr">id</span>=<span class="tok-val">"hyd-pressure-warning"</span><span class="tok-tag">&gt;</span>
      <span class="tok-tag">&lt;p&gt;</span>HIGH PRESSURE FLUID: Depressurize the hydraulic system
        before opening any lines. Failure to comply may result
        in serious injury from high-pressure fluid contact.<span class="tok-tag">&lt;/p&gt;</span>
    <span class="tok-tag">&lt;/note&gt;</span>
  <span class="tok-tag">&lt;/body&gt;</span>
<span class="tok-tag">&lt;/topic&gt;</span></pre></div>

<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Consumer — any maintenance task</span></div>
<pre><span class="tok-tag">&lt;step&gt;</span>
  <span class="tok-tag">&lt;note</span> <span class="tok-attr">conref</span>=<span class="tok-val">"../shared/warnings-library.dita#warnings-lib/hyd-pressure-warning"</span><span class="tok-tag">/&gt;</span>
  <span class="tok-tag">&lt;cmd&gt;</span>Open the hydraulic line fitting.<span class="tok-tag">&lt;/cmd&gt;</span>
<span class="tok-tag">&lt;/step&gt;</span>

<span class="tok-com">&lt;!-- At publish time, the DITA-OT replaces the empty &lt;note conref.../&gt;
     with the full warning text from warnings-library.dita --&gt;</span></pre></div>

<h2>Conref Rules</h2>
<ul>
<li>Source and target elements must be the same element type (a <code>&lt;note&gt;</code> can only conref to a <code>&lt;note&gt;</code>)</li>
<li>The source element must have a unique <code>id</code></li>
<li>The source topic must be referenced in the map (or as resource-only)</li>
<li>Conref elements must have matching structure to replace correctly</li>
</ul>

<h2>Conref Range</h2>
<p>DITA 1.2+ introduced <strong>conref range</strong> to reference a range of elements:</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span></div>
<pre><span class="tok-com">&lt;!-- Reuse steps 2 through 5 from another task --&gt;</span>
<span class="tok-tag">&lt;step</span> <span class="tok-attr">conref</span>=<span class="tok-val">"base-task.dita#base/step2"</span>
      <span class="tok-attr">conrefend</span>=<span class="tok-val">"base-task.dita#base/step5"</span><span class="tok-tag">/&gt;</span></pre></div>`,
  quiz:[
    {question:'A conref attribute value "warnings-library.dita#warnings-lib/hyd-warning" means:',options:['Link to the file warnings-library.dita, chapter warnings-lib, figure hyd-warning','Reference the element with id="hyd-warning" in the topic with id="warnings-lib" in file warnings-library.dita','Search the file warnings-library.dita for any element named hyd-warning','Import the entire warnings-library.dita file'],correct:1,explanation:'Conref syntax: filename.dita#topicID/elementID. So warnings-library.dita#warnings-lib/hyd-warning means: file=warnings-library.dita, topic id=warnings-lib, element id=hyd-warning.'},
    {question:'If a note element has a conref attribute, can it also have its own text content?',options:['Yes, the text serves as fallback','No — a conref element is replaced by the source content at publish time; own content is ignored','Yes — both are combined','Only if the element has type="fallback"'],correct:0,explanation:'Best practice: include fallback text in a conref element (the text you want if the conref cannot resolve). The DITA spec allows this. However, when the conref resolves correctly, the fallback text is replaced by the source content.'},
  ],
  prev:'page-31',next:'page-33'
},

{id:'page-33',pageNum:33,module:3,moduleTitle:'DITA Fundamentals',title:'Keys and Keyrefs',subtitle:'DITA\'s variable system — defining once, using everywhere, changing centrally.',duration:'25 min read',level:'Intermediate',searchKeywords:'DITA keys keyrefs keydef variable product name substitution map-level',objectives:['Define keys in a DITA map','Use keyref in topics for variable substitution','Understand scoped keys in DITA 1.3','Apply keys to product names, phone numbers, and resource links'],
content:`<h2>The Key/Keyref System</h2>
<p>Keys are DITA's variable mechanism. You define a key in a map with a value; topics reference the key by name. The key resolves to whatever value the map defines — making it easy to customize content per publication.</p>

<h2>Defining Keys</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Key definitions in a DITA map</span></div>
<pre><span class="tok-tag">&lt;map&gt;</span>
  <span class="tok-tag">&lt;title&gt;</span>Hydraulic System Manual — 737-800<span class="tok-tag">&lt;/title&gt;</span>

  <span class="tok-com">&lt;!-- Text variable keys --&gt;</span>
  <span class="tok-tag">&lt;keydef</span> <span class="tok-attr">keys</span>=<span class="tok-val">"product-name"</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;topicmeta&gt;&lt;keywords&gt;&lt;keyword&gt;</span>Boeing 737-800<span class="tok-tag">&lt;/keyword&gt;&lt;/keywords&gt;&lt;/topicmeta&gt;</span>
  <span class="tok-tag">&lt;/keydef&gt;</span>

  <span class="tok-tag">&lt;keydef</span> <span class="tok-attr">keys</span>=<span class="tok-val">"sys-pressure"</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;topicmeta&gt;&lt;keywords&gt;&lt;keyword&gt;</span>3,000<span class="tok-tag">&lt;/keyword&gt;&lt;/keywords&gt;&lt;/topicmeta&gt;</span>
  <span class="tok-tag">&lt;/keydef&gt;</span>

  <span class="tok-com">&lt;!-- Link key: defines a target without hard-coding the path --&gt;</span>
  <span class="tok-tag">&lt;keydef</span> <span class="tok-attr">keys</span>=<span class="tok-val">"torque-table"</span> <span class="tok-attr">href</span>=<span class="tok-val">"reference/torque-values.dita"</span><span class="tok-tag">/&gt;</span>

  <span class="tok-com">&lt;!-- All topics --&gt;</span>
  <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"concepts/overview.dita"</span><span class="tok-tag">/&gt;</span>
<span class="tok-tag">&lt;/map&gt;</span></pre></div>

<h2>Using Keyrefs in Topics</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Keyref usage in a topic</span></div>
<pre><span class="tok-tag">&lt;p&gt;</span>The <span class="tok-tag">&lt;keyword</span> <span class="tok-attr">keyref</span>=<span class="tok-val">"product-name"</span><span class="tok-tag">/&gt;</span> hydraulic system
  operates at <span class="tok-tag">&lt;keyword</span> <span class="tok-attr">keyref</span>=<span class="tok-val">"sys-pressure"</span><span class="tok-tag">/&gt;</span> PSI.<span class="tok-tag">&lt;/p&gt;</span>

<span class="tok-com">&lt;!-- Resolves to: "The Boeing 737-800 hydraulic system operates at 3,000 PSI." --&gt;</span>

<span class="tok-com">&lt;!-- Link keyref --&gt;</span>
<span class="tok-tag">&lt;xref</span> <span class="tok-attr">keyref</span>=<span class="tok-val">"torque-table"</span><span class="tok-tag">&gt;</span>Torque Values Table<span class="tok-tag">&lt;/xref&gt;</span></pre></div>

<h2>Reuse Through Key Redefinition</h2>
<p>The same topic can be used in multiple maps with different key definitions, producing different output:</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Same topic, two maps, two products</span></div>
<pre><span class="tok-com">&lt;!-- map-737.ditamap --&gt;</span>
<span class="tok-tag">&lt;keydef</span> <span class="tok-attr">keys</span>=<span class="tok-val">"product-name"</span><span class="tok-tag">&gt;&lt;topicmeta&gt;&lt;keywords&gt;&lt;keyword&gt;</span>Boeing 737-800<span class="tok-tag">&lt;/keyword&gt;&lt;/keywords&gt;&lt;/topicmeta&gt;&lt;/keydef&gt;</span>

<span class="tok-com">&lt;!-- map-787.ditamap --&gt;</span>
<span class="tok-tag">&lt;keydef</span> <span class="tok-attr">keys</span>=<span class="tok-val">"product-name"</span><span class="tok-tag">&gt;&lt;topicmeta&gt;&lt;keywords&gt;&lt;keyword&gt;</span>Boeing 787-9<span class="tok-tag">&lt;/keyword&gt;&lt;/keywords&gt;&lt;/topicmeta&gt;&lt;/keydef&gt;</span>

<span class="tok-com">&lt;!-- Both maps reference the same topics. The product name renders differently
     in each publication — zero changes to topic files required. --&gt;</span></pre></div>`,
quiz:[{question:'If you need to use a product name 500 times across 200 topics, and the product name may change, the best DITA approach is:',options:['Type the product name directly in each topic','Use a text editor to find-and-replace when the name changes','Define the product name as a key in the map; use keyref in all 200 topics','Use a conref to a topic containing the product name'],correct:2,explanation:'Keyrefs are the ideal mechanism for variable values like product names. Define the key once in the map; use keyref="product-name" in all 200 topics. When the name changes, update the keydef once — all 200 topics automatically use the new name at next publish.'}],
prev:'page-32',next:'page-34'},

{id:'page-34',pageNum:34,module:3,moduleTitle:'DITA Fundamentals',title:'Metadata',subtitle:'How DITA metadata captures information about topics — for search, filtering, versioning, and processing.',duration:'20 min read',level:'Intermediate',searchKeywords:'DITA metadata prolog author critdates prodinfo audience keywords searchable',objectives:['Understand the role of metadata in DITA','Write prolog metadata for topics','Use metadata for search and filtering','Understand map-level metadata'],
content:`<h2>Why Metadata Matters in DITA</h2>
<p>Metadata in DITA serves multiple purposes: it makes content searchable, enables filtering and conditional processing, supports revision tracking, and provides CCMS with information for workflow management.</p>

<h2>Topic-Level Metadata: The Prolog</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Comprehensive prolog metadata</span></div>
<pre><span class="tok-tag">&lt;prolog&gt;</span>
  <span class="tok-tag">&lt;author</span> <span class="tok-attr">type</span>=<span class="tok-val">"creator"</span><span class="tok-tag">&gt;</span>Sanhita Yadav<span class="tok-tag">&lt;/author&gt;</span>
  <span class="tok-tag">&lt;critdates&gt;</span>
    <span class="tok-tag">&lt;created</span> <span class="tok-attr">date</span>=<span class="tok-val">"2024-01-15"</span><span class="tok-tag">/&gt;</span>
    <span class="tok-tag">&lt;revised</span> <span class="tok-attr">modified</span>=<span class="tok-val">"2024-06-01"</span><span class="tok-tag">/&gt;</span>
  <span class="tok-tag">&lt;/critdates&gt;</span>
  <span class="tok-tag">&lt;metadata&gt;</span>
    <span class="tok-tag">&lt;audience</span> <span class="tok-attr">type</span>=<span class="tok-val">"maintenance-technician"</span> <span class="tok-attr">experiencelevel</span>=<span class="tok-val">"expert"</span><span class="tok-tag">/&gt;</span>
    <span class="tok-tag">&lt;category&gt;</span>Hydraulic System<span class="tok-tag">&lt;/category&gt;</span>
    <span class="tok-tag">&lt;keywords&gt;</span>
      <span class="tok-tag">&lt;keyword&gt;</span>hydraulic pump<span class="tok-tag">&lt;/keyword&gt;</span>
      <span class="tok-tag">&lt;keyword&gt;</span>replacement<span class="tok-tag">&lt;/keyword&gt;</span>
      <span class="tok-tag">&lt;keyword&gt;</span>ATA 29<span class="tok-tag">&lt;/keyword&gt;</span>
    <span class="tok-tag">&lt;/keywords&gt;</span>
    <span class="tok-tag">&lt;prodinfo&gt;</span>
      <span class="tok-tag">&lt;prodname&gt;</span>Boeing 737<span class="tok-tag">&lt;/prodname&gt;</span>
      <span class="tok-tag">&lt;vrmlist&gt;&lt;vrm</span> <span class="tok-attr">version</span>=<span class="tok-val">"Classic"</span> <span class="tok-attr">release</span>=<span class="tok-val">"Rev 5"</span><span class="tok-tag">/&gt;&lt;/vrmlist&gt;</span>
    <span class="tok-tag">&lt;/prodinfo&gt;</span>
  <span class="tok-tag">&lt;/metadata&gt;</span>
<span class="tok-tag">&lt;/prolog&gt;</span></pre></div>

<h2>Key Metadata Elements</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Element</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td><code>&lt;author&gt;</code></td><td>Who created or revised the topic</td></tr>
<tr><td><code>&lt;critdates&gt;</code></td><td>Critical dates: created, revised</td></tr>
<tr><td><code>&lt;audience&gt;</code></td><td>Target audience type and experience level</td></tr>
<tr><td><code>&lt;keywords&gt;</code></td><td>Search keywords — appear in HTML meta tags</td></tr>
<tr><td><code>&lt;prodinfo&gt;</code></td><td>Product name and version</td></tr>
<tr><td><code>&lt;category&gt;</code></td><td>Subject category for classification</td></tr>
<tr><td><code>&lt;othermeta&gt;</code></td><td>Custom metadata name/value pairs</td></tr>
</tbody></table></div>`,
quiz:[{question:'DITA <keywords> in the prolog are primarily used for:',options:['Creating bulleted keyword lists in the output','SEO and search — keywords appear in HTML meta tags enabling better search results','Defining variable substitution values','Triggering conditional processing'],correct:1,explanation:'Keywords in the DITA prolog are metadata — they appear in the HTML <meta> tags of published output, improving searchability in web portals. They are not rendered as visible content in most outputs.'}],
prev:'page-33',next:'page-35'},

{id:'page-35',pageNum:35,module:3,moduleTitle:'DITA Fundamentals',title:'Profiling',subtitle:'Marking content for different audiences, products, and platforms — the foundation of DITA conditional processing.',duration:'20 min read',level:'Intermediate',searchKeywords:'DITA profiling attributes product platform audience otherprops conditional content marking',objectives:['Understand what profiling means in DITA','Apply profiling attributes to elements and topics','Understand how profiling interacts with publishing','Design a profiling strategy for a documentation set'],
content:`<h2>What is Profiling?</h2>
<p>Profiling is the act of marking content with metadata attributes that identify for whom, for what platform, or for what product the content applies. Profiling is the precursor to conditional processing — you mark content first, then tell the DITA-OT which content to include or exclude for a given publication.</p>

<h2>Profiling Attributes</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Attribute</th><th>Purpose</th><th>Example Values</th></tr></thead>
<tbody>
<tr><td><code>product</code></td><td>Which product(s) the content applies to</td><td>product="737 747 787"</td></tr>
<tr><td><code>platform</code></td><td>Operating platform or environment</td><td>platform="windows linux"</td></tr>
<tr><td><code>audience</code></td><td>Reader audience type</td><td>audience="technician pilot"</td></tr>
<tr><td><code>props</code></td><td>General purpose profiling (DITA 2.0)</td><td>props="internal"</td></tr>
<tr><td><code>otherprops</code></td><td>Custom profiling (legacy)</td><td>otherprops="classified"</td></tr>
</tbody></table></div>

<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Profiling in action</span></div>
<pre><span class="tok-tag">&lt;task</span> <span class="tok-attr">id</span>=<span class="tok-val">"replace-pump"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;title&gt;</span>Replace the Hydraulic Pump<span class="tok-tag">&lt;/title&gt;</span>
  <span class="tok-tag">&lt;taskbody&gt;</span>
    <span class="tok-tag">&lt;context&gt;</span>
      <span class="tok-tag">&lt;p&gt;</span>Common procedure for all variants.<span class="tok-tag">&lt;/p&gt;</span>
      <span class="tok-tag">&lt;p</span> <span class="tok-attr">product</span>=<span class="tok-val">"737-classic"</span><span class="tok-tag">&gt;</span>On 737 Classic, access via left wing root panel.<span class="tok-tag">&lt;/p&gt;</span>
      <span class="tok-tag">&lt;p</span> <span class="tok-attr">product</span>=<span class="tok-val">"737-ng"</span><span class="tok-tag">&gt;</span>On 737 NG, access via lower fuselage access panel 15L.<span class="tok-tag">&lt;/p&gt;</span>
    <span class="tok-tag">&lt;/context&gt;</span>
    <span class="tok-tag">&lt;steps&gt;</span>
      <span class="tok-tag">&lt;step&gt;&lt;cmd&gt;</span>Depressurize the hydraulic system.<span class="tok-tag">&lt;/cmd&gt;&lt;/step&gt;</span>
      <span class="tok-tag">&lt;step</span> <span class="tok-attr">product</span>=<span class="tok-val">"737-classic"</span><span class="tok-tag">&gt;</span>
        <span class="tok-tag">&lt;cmd&gt;</span>Remove the 12 fasteners securing the left wing root panel.<span class="tok-tag">&lt;/cmd&gt;</span>
      <span class="tok-tag">&lt;/step&gt;</span>
      <span class="tok-tag">&lt;step</span> <span class="tok-attr">product</span>=<span class="tok-val">"737-ng"</span><span class="tok-tag">&gt;</span>
        <span class="tok-tag">&lt;cmd&gt;</span>Open access panel 15L using the panel release handle.<span class="tok-tag">&lt;/cmd&gt;</span>
      <span class="tok-tag">&lt;/step&gt;</span>
      <span class="tok-tag">&lt;step&gt;&lt;cmd&gt;</span>Remove the pump mounting bolts.<span class="tok-tag">&lt;/cmd&gt;&lt;/step&gt;</span>
    <span class="tok-tag">&lt;/steps&gt;</span>
  <span class="tok-tag">&lt;/taskbody&gt;</span>
<span class="tok-tag">&lt;/task&gt;</span></pre></div>
<p>When publishing for the 737-Classic, steps marked <code>product="737-ng"</code> are excluded. When publishing for the 737 NG, Classic-specific steps are excluded. The shared steps appear in both.</p>`,
quiz:[{question:'You mark a step with product="737-ng". When the DITA-OT publishes this map for the 737 Classic, this step will:',options:['Always appear in the output','Be excluded from the output (assuming the DITAVAL filters product=737-ng as exclude)','Appear with a warning label','Cause a validation error'],correct:1,explanation:'Profiling attributes mark content for conditional inclusion/exclusion. When a DITAVAL file tells the DITA-OT to exclude product="737-ng", all elements with that attribute value are omitted from the output.'}],
prev:'page-34',next:'page-36'},

{id:'page-36',pageNum:36,module:3,moduleTitle:'DITA Fundamentals',title:'Conditional Processing',subtitle:'Using DITAVAL files to include and exclude profiled content — producing customized publications from a single source.',duration:'25 min read',level:'Intermediate',searchKeywords:'DITA conditional processing DITAVAL include exclude flag profiling filter',objectives:['Understand the role of DITAVAL files','Write a DITAVAL filter file','Apply DITAVAL in Oxygen XML Editor','Design conditional publishing scenarios'],
content:`<h2>What is Conditional Processing?</h2>
<p>Conditional processing is the mechanism that acts on profiled content at publish time. You use a <strong>DITAVAL</strong> file to tell the DITA-OT what to do with profiled content: include it, exclude it, or flag it (highlight visually).</p>

<h2>DITAVAL File Structure</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITAVAL</span><span class="code-block-title">Filter for 737 Classic publication</span></div>
<pre><span class="tok-tag">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>
<span class="tok-tag">&lt;val&gt;</span>
  <span class="tok-com">&lt;!-- Include 737-classic content --&gt;</span>
  <span class="tok-tag">&lt;prop</span> <span class="tok-attr">action</span>=<span class="tok-val">"include"</span> <span class="tok-attr">att</span>=<span class="tok-val">"product"</span> <span class="tok-attr">val</span>=<span class="tok-val">"737-classic"</span><span class="tok-tag">/&gt;</span>

  <span class="tok-com">&lt;!-- Exclude 737-NG specific content --&gt;</span>
  <span class="tok-tag">&lt;prop</span> <span class="tok-attr">action</span>=<span class="tok-val">"exclude"</span> <span class="tok-attr">att</span>=<span class="tok-val">"product"</span> <span class="tok-attr">val</span>=<span class="tok-val">"737-ng"</span><span class="tok-tag">/&gt;</span>
  <span class="tok-tag">&lt;prop</span> <span class="tok-attr">action</span>=<span class="tok-val">"exclude"</span> <span class="tok-attr">att</span>=<span class="tok-val">"product"</span> <span class="tok-attr">val</span>=<span class="tok-val">"787"</span><span class="tok-tag">/&gt;</span>

  <span class="tok-com">&lt;!-- Flag internal-only content with a red color in output --&gt;</span>
  <span class="tok-tag">&lt;prop</span> <span class="tok-attr">action</span>=<span class="tok-val">"flag"</span> <span class="tok-attr">att</span>=<span class="tok-val">"audience"</span> <span class="tok-attr">val</span>=<span class="tok-val">"internal"</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;startflag&gt;&lt;alt-text&gt;</span>INTERNAL ONLY<span class="tok-tag">&lt;/alt-text&gt;&lt;/startflag&gt;</span>
  <span class="tok-tag">&lt;/prop&gt;</span>
<span class="tok-tag">&lt;/val&gt;</span></pre></div>

<h2>DITAVAL Actions</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Action</th><th>Effect</th></tr></thead>
<tbody>
<tr><td><code>include</code></td><td>Always include content with this attribute/value (overrides default)</td></tr>
<tr><td><code>exclude</code></td><td>Remove content with this attribute/value from output entirely</td></tr>
<tr><td><code>flag</code></td><td>Include the content but visually mark it (color, icon, label)</td></tr>
<tr><td><code>passthrough</code></td><td>Pass the attribute value through to output (for custom processing)</td></tr>
</tbody></table></div>

<h2>Conditional Processing Workflow</h2>
<ol>
<li>Mark topics/elements with profiling attributes as you write</li>
<li>Create a DITAVAL file per publication variant</li>
<li>In Oxygen, configure the transformation scenario to use the DITAVAL file</li>
<li>Run transformation — the DITA-OT applies the filter and produces customized output</li>
</ol>

<div class="callout tip"><div class="callout-title">🎯 Design Principle</div>
<p>Design your profiling strategy before you start writing. Decide on your attribute names and allowed values, document them in a style guide, and train all writers to use them consistently. Inconsistent profiling (using "737ng" in one place and "737-ng" in another) breaks conditional processing.</p></div>`,
quiz:[{question:'A DITAVAL file with <prop action="exclude" att="product" val="737-ng"/> means:',options:['All 737-ng content is highlighted in the output','All content with product="737-ng" is removed from the output','Only 737-ng content is included','The 737-ng product information is added to the output'],correct:1,explanation:'action="exclude" removes all elements with the specified attribute/value from the output completely. They do not appear in any form in the published document.'}],
prev:'page-35',next:'page-37'},

{id:'page-37',pageNum:37,module:3,moduleTitle:'DITA Fundamentals',title:'DITA Specialization',subtitle:'Extending DITA\'s base types to create domain-specific element sets — without losing compatibility.',duration:'20 min read',level:'Advanced',searchKeywords:'DITA specialization domain extension base type is-a hierarchy aerospace custom elements',objectives:['Explain the specialization concept','Understand the is-a hierarchy','Identify when specialization is appropriate','Recognize built-in DITA specializations'],
content:`<h2>What is Specialization?</h2>
<p>Specialization allows you to create new DITA element types that extend existing base types. The key constraint: specialized elements are always "is-a" versions of their parent — meaning every DITA tool can still process them using the parent type's rules if it doesn't know about the specialization.</p>

<h2>The is-a Hierarchy</h2>
<div class="diagram-container"><div class="mermaid">
graph TD
  T["topic (base)"]
  T --> C["concept"]
  T --> TASK["task"]
  T --> R["reference"]
  T --> G["glossentry"]
  T --> TR["troubleshooting (1.3)"]
  C --> LC["learningContent\n(Learning specialization)"]
  TASK --> AERO["aerospaceTask\n(custom specialization)"]
  R --> API["apiRef\n(Software API specialization)"]
  style T fill:#0891b2,color:#fff
  style AERO fill:#d97706,color:#fff
  style API fill:#7c3aed,color:#fff
</div></div>

<h2>Built-in DITA Specializations</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Specialization</th><th>Purpose</th><th>Extends</th></tr></thead>
<tbody>
<tr><td>troubleshooting</td><td>Symptom/cause/remedy structure for troubleshooting topics</td><td>task</td></tr>
<tr><td>bookmap</td><td>Book-level structure with front/back matter</td><td>map</td></tr>
<tr><td>Learning & Training</td><td>E-learning content with assessments</td><td>topic, map</td></tr>
<tr><td>Machinery</td><td>Industrial equipment documentation</td><td>topic</td></tr>
<tr><td>Hazard Statement (ANSI Z535)</td><td>Structured safety warnings</td><td>note</td></tr>
</tbody></table></div>

<h2>When to Specialize</h2>
<p>Specialization is a significant investment. Only specialize when:</p>
<ul>
<li>You need semantic markup that base DITA cannot provide</li>
<li>Automated processing needs to distinguish this content type specifically</li>
<li>Your organization has the technical resources to maintain custom DTDs</li>
<li>Base DITA elements cannot achieve the content model you need</li>
</ul>
<p>For most authors and most organizations, the base DITA types plus careful use of profiling, conref, and keyrefs are sufficient. Specialization is a tools-team and IA responsibility, not typically a writer's daily task.</p>`,
quiz:[{question:'The "is-a" principle in DITA specialization means:',options:['Specialized elements are completely separate from base types','A specialized element is a specific variant of its base type — tools that don\'t know the specialization can still process it as the base type','All specialized elements must use the same attributes as the base','Specialization replaces the base type'],correct:1,explanation:'The is-a constraint means specialized elements are always processable as their base type. A custom aerospaceTask is-a task — a tool that only knows about task can still process it using task rules. This backward compatibility is DITA\'s key extensibility feature.'}],
prev:'page-36',next:'page-38'},

{id:'page-38',pageNum:38,module:3,moduleTitle:'DITA Fundamentals',title:'DITA Publishing',subtitle:'How DITA content is transformed into final output formats using the DITA Open Toolkit.',duration:'20 min read',level:'Intermediate',searchKeywords:'DITA publishing DITA-OT transformation scenarios PDF HTML5 output formats Oxygen publish',objectives:['Explain the publishing pipeline','Describe major output formats','Understand transformation scenarios in Oxygen','Customize publishing output'],
content:`<h2>The Publishing Pipeline</h2>
<div class="diagram-container"><div class="mermaid">
flowchart LR
  MAP["DITA Map\n+ Topics"]
  DITAVAL["DITAVAL\n(filters)"]
  OT["DITA Open Toolkit\n(DITA-OT)"]
  XSLT["XSLT / CSS\n(stylesheets)"]
  PDF["PDF"]
  HTML5["HTML5 / WebHelp"]
  EPUB["EPUB"]
  MAP --> OT
  DITAVAL --> OT
  XSLT --> OT
  OT --> PDF
  OT --> HTML5
  OT --> EPUB
</div></div>

<h2>Output Formats</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Format</th><th>Use Case</th><th>DITA-OT Plugin</th></tr></thead>
<tbody>
<tr><td>PDF2</td><td>Print manuals, regulatory submissions, contractual deliverables</td><td>org.dita.pdf2 (XSL-FO via FOP)</td></tr>
<tr><td>HTML5</td><td>Web documentation portals</td><td>org.dita.html5</td></tr>
<tr><td>XHTML</td><td>Legacy web, help systems</td><td>org.dita.xhtml</td></tr>
<tr><td>WebHelp</td><td>Context-sensitive help in software applications</td><td>Oxygen-specific plugin</td></tr>
<tr><td>EPUB</td><td>E-books for tablets and e-readers</td><td>org.dita.epub</td></tr>
<tr><td>Markdown</td><td>Developer documentation sites</td><td>dita-ot-markdown plugin</td></tr>
<tr><td>Custom</td><td>Proprietary formats, aircraft EFBs, avionics displays</td><td>Custom XSLT plugin</td></tr>
</tbody></table></div>

<h2>Transformation Scenarios in Oxygen</h2>
<p>In Oxygen XML Editor, transformation scenarios are pre-configured publishing setups. Each scenario specifies:</p>
<ul>
<li>Which output format (transtype) to use</li>
<li>Which DITAVAL file (if any) for filtering</li>
<li>Custom parameters (output directory, PDF cover image, etc.)</li>
<li>Which stylesheet customization to apply</li>
</ul>
<p>You can configure multiple scenarios for the same map: one for internal PDF review, one for customer-delivery HTML5, one for each product variant. We cover this in detail in Module 4 (Oxygen XML Editor).</p>

<h2>Customizing Output</h2>
<p>Standard DITA-OT output can be customized:</p>
<ul>
<li><strong>CSS:</strong> Change HTML5 visual appearance without touching XSLT</li>
<li><strong>XSLT overrides:</strong> Modify the transformation logic for specific elements</li>
<li><strong>PDF plugins:</strong> Custom cover pages, headers/footers, fonts, page layouts</li>
<li><strong>DITA-OT plugins:</strong> Add entirely new output formats or processing steps</li>
</ul>`,
quiz:[{question:'When you click "Transform Using Scenario" in Oxygen XML Editor, what is actually executing?',options:['Oxygen\'s proprietary rendering engine','The DITA Open Toolkit (DITA-OT), which processes your DITA map and topics through XSLT transformations','A word processor export function','The DTD validation engine'],correct:1,explanation:'Oxygen\'s Transform function invokes the DITA Open Toolkit (DITA-OT), which is the open-source publishing engine. The DITA-OT processes your DITA map, resolves conrefs/keyrefs/profiling, and applies XSLT transformations to generate output formats.'}],
prev:'page-37',next:'page-39'},

{id:'page-39',pageNum:39,module:3,moduleTitle:'DITA Fundamentals',title:'DITA Best Practices',subtitle:'Professional DITA authoring guidelines that separate good content from great content.',duration:'20 min read',level:'Intermediate',searchKeywords:'DITA best practices guidelines authoring style topic writing reuse profiling quality',objectives:['Apply professional DITA authoring standards','Avoid the most common DITA authoring mistakes','Write topics that are reusable and maintainable','Follow industry conventions for DITA structure'],
content:`<h2>Topic-Level Best Practices</h2>
<h3>1. One Topic Per File — Always</h3>
<p>Never put two topics in one file. Each topic must be a separate .dita file. This is fundamental for reuse and version control.</p>

<h3>2. Write a Strong shortdesc</h3>
<p>The shortdesc should stand alone as a complete, informative sentence. If a user sees only the shortdesc (in search results, navigation hover text), they should know exactly what the topic is about.</p>

<h3>3. Consistent and Descriptive IDs</h3>
<p>Use a naming convention for topic IDs. Common patterns:
<code>task-[action]-[object]</code> → <code>task-replace-fuel-filter</code>
<code>con-[subject]</code> → <code>con-hydraulic-overview</code>
<code>ref-[item]-specs</code> → <code>ref-pump-specifications</code></p>

<h3>4. Minimal Nesting</h3>
<p>Avoid creating deeply nested topic hierarchies in maps. More than 3–4 levels is a sign the content needs better organization or should be split into sub-maps.</p>

<h3>5. Validate Continuously</h3>
<p>Save after every few changes and check that validation passes. Fix errors immediately — never let invalid content accumulate.</p>

<h2>Reuse Best Practices</h2>
<ul>
<li>Create a shared library of conref sources (warnings library, notes library) and establish a team process for adding to it</li>
<li>Standardize key names in a documented key catalog</li>
<li>Never copy-paste content — if you're copying, you should be conrefing</li>
<li>Mark all product-specific content with profiling attributes from day one</li>
</ul>

<h2>Common DITA Authoring Mistakes</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Mistake</th><th>Why it's a problem</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>Using &lt;p&gt; for step content instead of &lt;cmd&gt;</td><td>Breaks task structure; won't publish correctly</td><td>Use &lt;step&gt;&lt;cmd&gt; always</td></tr>
<tr><td>Writing "see above" or "see below"</td><td>Meaningless when topic is reused in different context</td><td>Use &lt;xref&gt; to link to specific topic</td></tr>
<tr><td>Mixing concept content into task topics</td><td>Violates single-topic principle; hurts reuse</td><td>Create separate concept topic; cross-reference</td></tr>
<tr><td>Missing id attributes on topics</td><td>Breaks conrefs and cross-references</td><td>Always include id on the root element</td></tr>
<tr><td>Hardcoding product names</td><td>Creates maintenance problem when product changes</td><td>Use keyref for all product names</td></tr>
<tr><td>No shortdesc</td><td>Poor navigation, bad search results</td><td>Always write a meaningful shortdesc</td></tr>
<tr><td>Deeply nested substeps</td><td>Complex procedures are hard to follow</td><td>Simplify or split into multiple tasks</td></tr>
</tbody></table></div>`,
quiz:[{question:'A writer phrases a step as "The access panel should be opened at this point." What is wrong with this?',options:['It is too long','It is passive voice — not imperative. Should be "Open the access panel."','It lacks a warning','Nothing is wrong'],correct:1,explanation:'DITA task steps should use imperative voice (active, direct command): "Open the access panel." Passive constructions ("should be opened") are weaker, less clear, and harder to translate.'}],
prev:'page-38',next:'page-40'},

{id:'page-40',pageNum:40,module:3,moduleTitle:'DITA Fundamentals',title:'DITA Exercises',subtitle:'Hands-on DITA authoring exercises to solidify your concept, task, and reference topic skills.',duration:'45–60 min',level:'Hands-on',searchKeywords:'DITA exercises practice concept task reference map authoring',objectives:['Create all three base DITA topic types from scratch','Build a DITA map assembling multiple topics','Apply conref and keyref in a small documentation set'],
content:`<h2>Exercise 3.1 — Create a Concept Topic</h2>
<div class="exercise-box"><div class="exercise-box-header"><div class="exercise-icon">📝</div><div><div class="exercise-title">Write a Concept Topic</div><div class="exercise-subtitle">From your aerospace knowledge</div></div></div>
<ol class="exercise-steps">
<li>Create a new DITA concept topic in Oxygen XML Editor (File > New > DITA > Concept)</li>
<li>Give it id="con-ata29-overview", title="ATA Chapter 29 — Hydraulic Power System Overview"</li>
<li>Write a shortdesc of 1–2 sentences explaining what ATA Chapter 29 covers</li>
<li>In the conbody, write at least two sections: one explaining System A, one explaining System B</li>
<li>Include a note element with type="important" containing a key safety point</li>
<li>Validate: the file must have no validation errors before proceeding</li>
</ol>
</div>

<h2>Exercise 3.2 — Create a Task Topic</h2>
<div class="exercise-box"><div class="exercise-box-header"><div class="exercise-icon">✏️</div><div><div class="exercise-title">Write a Task Topic</div><div class="exercise-subtitle">Based on a real maintenance procedure</div></div></div>
<ol class="exercise-steps">
<li>Create a new DITA task topic with id="task-inspect-hydraulic-fluid"</li>
<li>Title: "Inspect Hydraulic Fluid Level and Condition"</li>
<li>Write prereq: aircraft must be in the specific ground attitude</li>
<li>Write context: why this inspection is performed (scheduled check, after maintenance)</li>
<li>Write at least 5 steps with cmd elements. Include at least one step with an info subelement</li>
<li>Write a result element describing what "pass" looks like</li>
<li>Write a postreq indicating what to do if the fluid fails inspection</li>
</ol>
</div>

<h2>Exercise 3.3 — Create a Reference Topic</h2>
<div class="exercise-box"><div class="exercise-box-header"><div class="exercise-icon">📋</div><div><div class="exercise-title">Write a Reference Topic</div><div class="exercise-subtitle">Technical specifications table</div></div></div>
<ol class="exercise-steps">
<li>Create a DITA reference topic with id="ref-hyd-fluid-specs"</li>
<li>Title: "Hydraulic Fluid Specifications"</li>
<li>Use a properties table to list: Fluid type, color, viscosity, operating temperature range, approved part numbers</li>
<li>Add a note warning against mixing fluid types</li>
</ol>
</div>

<h2>Exercise 3.4 — Assemble a DITA Map</h2>
<div class="exercise-box"><div class="exercise-box-header"><div class="exercise-icon">🗺️</div><div><div class="exercise-title">Build a DITA Map</div><div class="exercise-subtitle">Assemble your three topics</div></div></div>
<ol class="exercise-steps">
<li>Create a new DITA map file: hydraulic-system.ditamap</li>
<li>Set the map title: "Hydraulic System Quick Reference"</li>
<li>Add a keydef for product-name = "Boeing 737 Classic"</li>
<li>Add topicrefs to all three topics you created in Exercises 3.1–3.3</li>
<li>In Oxygen, run a transformation (HTML5 output) and verify all three topics appear in the output</li>
<li>In Oxygen, run a PDF transformation and verify the PDF output</li>
</ol>
</div>

<h2>Exercise 3.5 — Add a Conref</h2>
<div class="exercise-box"><div class="exercise-box-header"><div class="exercise-icon">🔗</div><div><div class="exercise-title">Implement a Conref</div><div class="exercise-subtitle">Create a shared warning</div></div></div>
<ol class="exercise-steps">
<li>Create a new topic: warnings-library.dita with a note containing a high-pressure fluid warning</li>
<li>Give the note an id attribute: id="hyd-fluid-warning"</li>
<li>In your task topic (Exercise 3.2), add a note with a conref pointing to the warning in warnings-library.dita</li>
<li>Add warnings-library.dita to your map as processing-role="resource-only"</li>
<li>Republish and verify the warning appears in your task topic output</li>
</ol>
</div>`,
quiz:[{question:'After completing Exercise 3.4, you run an HTML5 transformation in Oxygen but the output shows no content. The most likely cause is:',options:['HTML5 output is not supported for aerospace content','The DITA map has no topicref elements pointing to the topic files','The topics are not valid XML','The shortdesc elements are missing'],correct:1,explanation:'If a DITA map has no topicref elements, or the topicrefs point to files that cannot be found, the DITA-OT has no topics to include and produces minimal or empty output. Check that href paths in topicrefs are correct relative to the map file location.'}],
prev:'page-39',next:'page-41'},
];
