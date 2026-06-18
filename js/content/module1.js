/* ══════════════════════════════════════════════════════════════════════
   MODULE 1 — Documentation Fundamentals (Pages 1–10)
   ══════════════════════════════════════════════════════════════════════ */

const MODULE1_PAGES = [

{
  id: 'page-1', pageNum: 1, module: 1,
  moduleTitle: 'Documentation Fundamentals',
  title: 'What is Technical Documentation',
  subtitle: 'Understanding the role, purpose, and power of technical documentation in modern organizations.',
  duration: '25–30 min read',
  level: 'Foundational',
  searchKeywords: 'technical documentation definition purpose types audience value business',
  objectives: [
    'Define technical documentation and distinguish it from other forms of writing',
    'Explain why technical documentation is critical to product success',
    'Identify the primary audiences for technical documentation',
    'Describe the business value that documentation creates',
    'Recognize the difference between good and poor documentation',
  ],
  content: `
<h2>What is Technical Documentation?</h2>
<p>Technical documentation is structured, purposeful writing that helps people understand, use, maintain, or build a product, system, or process. Unlike creative writing or journalism, technical documentation exists for one primary reason: <strong>to help the reader accomplish a specific goal</strong>.</p>

<p>When a pilot refers to an Aircraft Maintenance Manual (AMM) to replace a fuel filter, that manual is technical documentation. When a software developer reads an API reference to make a REST call, that's technical documentation. When an engineer uses an Illustrated Parts Catalog (IPC) to identify a component by its part number — again, technical documentation.</p>

<div class="callout info">
  <div class="callout-title">💡 A Working Definition</div>
  <p><strong>Technical documentation</strong> is any written material that conveys specialized information to a defined audience in a format designed to help them complete tasks, understand concepts, or make decisions.</p>
</div>

<h2>The Core Purpose of Technical Documentation</h2>
<p>Every piece of technical documentation serves one or more of these fundamental purposes:</p>

<div class="table-wrapper">
  <table>
    <thead><tr><th>Purpose</th><th>Description</th><th>Example</th></tr></thead>
    <tbody>
      <tr><td><strong>Enable tasks</strong></td><td>Help users complete a procedure step-by-step</td><td>Engine change procedure in an AMM</td></tr>
      <tr><td><strong>Explain concepts</strong></td><td>Build understanding of how something works</td><td>Hydraulic system overview in a System Description</td></tr>
      <tr><td><strong>Provide reference</strong></td><td>Give quick access to specifications, part numbers, limits</td><td>IPC, electrical wiring diagrams</td></tr>
      <tr><td><strong>Ensure safety</strong></td><td>Warn of hazards and compliance requirements</td><td>Warnings, Cautions, Notes in maintenance manuals</td></tr>
      <tr><td><strong>Support training</strong></td><td>Teach new users how to use a system</td><td>Pilot Operating Handbook, training guides</td></tr>
      <tr><td><strong>Maintain compliance</strong></td><td>Satisfy regulatory or contractual requirements</td><td>FAA-approved aircraft documentation</td></tr>
    </tbody>
  </table>
</div>

<h2>Why Technical Documentation Matters</h2>
<p>In aerospace, poor documentation has been a contributing factor in accidents. The Boeing 737 MAX grounding, the Tenerife airport disaster — investigators identified documentation gaps, ambiguities, and missing information as factors in these events. This is the extreme end of why documentation matters, but the principle applies everywhere.</p>

<p>Documentation failures cost organizations in very concrete ways:</p>
<ul>
  <li><strong>Support costs:</strong> Every support ticket that could have been answered by good documentation costs money. Studies show that a single support call costs $50–$500; good documentation prevents thousands of them.</li>
  <li><strong>Legal liability:</strong> In aerospace, missing or incorrect maintenance documentation can invalidate airworthiness certificates.</li>
  <li><strong>Onboarding time:</strong> Poor documentation means new team members take 2–3x longer to become productive.</li>
  <li><strong>Rework:</strong> Engineers who receive ambiguous specifications build the wrong thing. Clear documentation prevents costly rework.</li>
  <li><strong>Knowledge loss:</strong> When a senior engineer retires, their undocumented knowledge goes with them.</li>
</ul>

<h2>Who Reads Technical Documentation?</h2>
<p>One of the most important skills a technical writer develops is <strong>audience awareness</strong>. The same information must be communicated very differently depending on who is reading it.</p>

<div class="table-wrapper">
  <table>
    <thead><tr><th>Audience Type</th><th>What they need</th><th>How to write for them</th></tr></thead>
    <tbody>
      <tr><td><strong>Expert users</strong></td><td>Precision, completeness, specifications</td><td>Use technical terms freely; omit basic explanations</td></tr>
      <tr><td><strong>Novice users</strong></td><td>Step-by-step guidance, definitions, context</td><td>Define terms; use simple language; provide examples</td></tr>
      <tr><td><strong>Maintenance technicians</strong></td><td>Exact procedures, safety warnings, part numbers</td><td>Numbered steps; clear cautions; no ambiguity</td></tr>
      <tr><td><strong>Regulatory inspectors</strong></td><td>Compliance evidence, traceability</td><td>Follow the spec format; reference standards explicitly</td></tr>
      <tr><td><strong>Developers / engineers</strong></td><td>API specs, architecture, parameters</td><td>Precise, terse; code examples; schemas</td></tr>
      <tr><td><strong>End users</strong></td><td>How to do tasks quickly and safely</td><td>Task-focused; plain language; avoid jargon</td></tr>
    </tbody>
  </table>
</div>

<h2>Technical Documentation vs. Other Writing</h2>
<p>People sometimes underestimate technical writing, thinking of it as "just putting words on a page." In reality, it is a highly specialized discipline that combines subject matter expertise, user psychology, information architecture, and often XML/structured authoring skills.</p>

<div class="comparison">
  <div class="comparison-panel good">
    <div class="comparison-panel-header">✓ Technical Documentation</div>
    <ul>
      <li>Written for a specific audience with a specific goal</li>
      <li>Accuracy and completeness are paramount</li>
      <li>Structure and navigation are carefully designed</li>
      <li>Reviewed by subject matter experts</li>
      <li>Maintained and versioned over time</li>
      <li>Often follows strict standards (DITA, S1000D, ATA)</li>
    </ul>
  </div>
  <div class="comparison-panel bad">
    <div class="comparison-panel-header">✗ General Writing</div>
    <ul>
      <li>May be written for a general, undefined audience</li>
      <li>Style and engagement may take priority over accuracy</li>
      <li>Structure may be organic/narrative</li>
      <li>May not undergo technical review</li>
      <li>May be one-time deliverable</li>
      <li>Few external standards apply</li>
    </ul>
  </div>
</div>

<h2>The Technical Documentation Ecosystem</h2>
<p>In any large organization — aerospace, software, manufacturing, healthcare — documentation is part of a larger ecosystem of systems and people. Understanding this ecosystem is crucial for a technical writer.</p>

<div class="diagram-container">
  <div class="mermaid">
graph TD
    A[Subject Matter Expert] --> B[Technical Writer]
    C[Product / Engineering Specs] --> B
    D[Regulatory Requirements] --> B
    B --> E[Content Management System]
    E --> F[Review & Approval]
    F --> G[Publication]
    G --> H[End Users / Technicians]
    G --> I[Regulatory Authorities]
    G --> J[Training Teams]
    H --> K[Feedback / Revisions]
    K --> B
  </div>
  <p class="diagram-caption">The documentation ecosystem: from source to user and back again.</p>
</div>

<h2>The Technical Writer's Role in This Ecosystem</h2>
<p>A technical writer is not simply a "person who types things up." The role involves:</p>
<ul>
  <li><strong>Information gathering:</strong> Interviewing engineers, reading specs, observing procedures</li>
  <li><strong>Information architecture:</strong> Deciding how to organize, structure, and relate content</li>
  <li><strong>Writing and editing:</strong> Creating clear, accurate, audience-appropriate content</li>
  <li><strong>Tool expertise:</strong> Using authoring tools (Oxygen, Arbortext), CMSes (Documentum, Vasont), and publishing pipelines</li>
  <li><strong>Standards compliance:</strong> Ensuring content follows ATA, S1000D, DITA, or company style guides</li>
  <li><strong>Review coordination:</strong> Managing SME reviews, incorporating feedback, tracking changes</li>
  <li><strong>Publication and delivery:</strong> Generating PDF, HTML, interactive formats from single-source content</li>
</ul>

<h2>What Makes Documentation "Good"?</h2>
<p>Good documentation shares certain universal qualities, regardless of the domain or format.</p>

<div class="table-wrapper">
  <table>
    <thead><tr><th>Quality</th><th>What it means</th></tr></thead>
    <tbody>
      <tr><td><strong>Accurate</strong></td><td>Every fact, procedure, and specification is correct. Errors in documentation can cause failures, injuries, or legal liability.</td></tr>
      <tr><td><strong>Complete</strong></td><td>Covers all the information the reader needs. No gaps that force the reader to guess or look elsewhere.</td></tr>
      <tr><td><strong>Clear</strong></td><td>Written in language appropriate to the audience. No ambiguity. One meaning per sentence.</td></tr>
      <tr><td><strong>Concise</strong></td><td>Says what needs to be said without unnecessary words. Respects the reader's time.</td></tr>
      <tr><td><strong>Consistent</strong></td><td>Uses the same terminology, formatting, and style throughout. Consistency aids comprehension.</td></tr>
      <tr><td><strong>Findable</strong></td><td>Information is organized so users can find what they need quickly. Good navigation, search, and structure.</td></tr>
      <tr><td><strong>Maintained</strong></td><td>Updated when the product or process changes. Outdated documentation is dangerous.</td></tr>
    </tbody>
  </table>
</div>

<h2>Your Background as an Advantage</h2>
<p>You already have something that most documentation job candidates don't: deep domain expertise in aerospace technical publications. You know what an Aircraft Maintenance Manual feels like to use under pressure. You understand why a Caution must appear before the step it warns about — not after. You know that an ambiguous part number in an IPC can ground an aircraft.</p>

<p>This domain expertise, combined with the DITA, XML, Oxygen, Git, and Markdown skills you are building through this course, will make you a formidable candidate for modern documentation roles. You are not starting from scratch — you are translating and expanding existing expertise.</p>

<div class="callout success">
  <div class="callout-title">✓ Key Takeaways</div>
  <p>Technical documentation is purposeful, audience-specific, structured writing. It enables tasks, explains concepts, ensures safety, and satisfies compliance requirements. Your aerospace background gives you a strong foundation — this course builds the modern tooling and standards knowledge on top of it.</p>
</div>

<h2>Exercise 1.1 — Documentation Analysis</h2>
<div class="exercise-box">
  <div class="exercise-box-header">
    <div class="exercise-icon">✏️</div>
    <div><div class="exercise-title">Analyze Documentation Around You</div><div class="exercise-subtitle">Practice identifying documentation types and qualities</div></div>
  </div>
  <ol class="exercise-steps">
    <li>Find three pieces of technical documentation from your work experience (AMM, IPC, maintenance procedure, service bulletin, etc.).</li>
    <li>For each document, identify: Who is the primary audience? What is the primary purpose (task, concept, reference)?</li>
    <li>Evaluate each document against the seven qualities of good documentation (accurate, complete, clear, concise, consistent, findable, maintained). Rate each quality 1–5.</li>
    <li>Write one paragraph describing the biggest documentation gap you have observed in your career and what impact it had.</li>
    <li>Reflect: What would have improved that documentation? Structured authoring? Better organization? Clearer language? Keep this reflection — you will reference it as you progress through this course.</li>
  </ol>
</div>`,
  quiz: [
    { question: 'What is the PRIMARY purpose of technical documentation?', options: ['To demonstrate the writer\'s expertise', 'To help readers accomplish specific goals', 'To satisfy management requirements', 'To create a record of decisions'], correct: 1, explanation: 'Technical documentation exists fundamentally to help readers accomplish specific goals — complete tasks, understand systems, make decisions. Everything else is secondary.' },
    { question: 'Which quality of documentation is MOST critical in aerospace maintenance manuals?', options: ['Conciseness', 'Creativity', 'Accuracy', 'Length'], correct: 2, explanation: 'Accuracy is paramount in safety-critical documentation. An inaccurate maintenance procedure can cause equipment failure, injury, or fatality.' },
    { question: 'A Subject Matter Expert (SME) reviews a maintenance procedure you wrote. Their role in this process is to:', options: ['Fix your grammar errors', 'Verify technical accuracy of the content', 'Approve the formatting', 'Translate the document'], correct: 1, explanation: 'SMEs review documentation for technical accuracy — ensuring procedures, specifications, and descriptions are correct. Grammar and formatting are the writer\'s domain.' },
    { question: 'You are writing a maintenance procedure for a line technician. The technician has 5 years of experience on this aircraft type. How should you write?', options: ['Include basic definitions of all aircraft systems', 'Use precise technical language without excessive basic explanation', 'Write at a 6th grade reading level', 'Avoid using part numbers as they may change'], correct: 1, explanation: 'An experienced technician needs precise, accurate, complete procedures without redundant basic explanations. They know the terminology — over-explaining wastes their time.' },
    { question: 'Poor technical documentation primarily costs organizations through:', options: ['Higher printing costs', 'Reduced support costs, onboarding time, and legal exposure', 'Increased support costs, longer onboarding, legal liability, and rework', 'Better trained staff'], correct: 2, explanation: 'Poor documentation drives up support costs, slows onboarding, creates legal exposure, and causes expensive rework when ambiguous specs are misunderstood.' },
  ],
  prev: null,
  next: 'page-2',
},

{
  id: 'page-2', pageNum: 2, module: 1,
  moduleTitle: 'Documentation Fundamentals',
  title: 'Types of Technical Documentation',
  subtitle: 'A comprehensive taxonomy of documentation types and when to use each.',
  duration: '20–25 min read',
  level: 'Foundational',
  searchKeywords: 'documentation types user guide API reference tutorial how-to troubleshooting release notes',
  objectives: [
    'Identify and describe the major types of technical documentation',
    'Distinguish between user-facing and internal documentation',
    'Match documentation types to audience needs and use cases',
    'Understand how aerospace documentation types map to general categories',
    'Recognize which documentation types you will author in modern DITA roles',
  ],
  content: `
<h2>The Documentation Taxonomy</h2>
<p>Just as a library organizes books by genre and subject, technical documentation is organized into types — each with its own purpose, structure, audience, and conventions. Understanding these types is the first step in becoming a strategic documentation professional.</p>

<h2>User-Facing Documentation</h2>
<p>These documents are delivered to the end user — the person who uses, operates, or maintains the product.</p>

<h3>1. Procedural / Task-Based Documentation</h3>
<p>The most common type: step-by-step instructions for completing tasks. Every step is an action the user takes. This is the primary output of DITA task topics.</p>

<div class="table-wrapper">
  <table>
    <thead><tr><th>Characteristic</th><th>Details</th></tr></thead>
    <tbody>
      <tr><td>Primary question answered</td><td>"How do I do this?"</td></tr>
      <tr><td>Structure</td><td>Numbered sequential steps; prerequisites; post-conditions</td></tr>
      <tr><td>Aerospace examples</td><td>Aircraft Maintenance Manual (AMM), Component Maintenance Manual (CMM)</td></tr>
      <tr><td>Non-aerospace examples</td><td>Software installation guide, API integration tutorial</td></tr>
      <tr><td>DITA topic type</td><td>&lt;task&gt;</td></tr>
    </tbody>
  </table>
</div>

<h3>2. Conceptual Documentation</h3>
<p>Explains how something works, why it exists, or what it is. Does not tell the user what to do — instead, builds understanding. Essential before a user attempts complex procedures.</p>

<div class="code-block">
  <div class="code-block-header"><span class="code-block-lang">Example</span><span class="code-block-title">System Description — Conceptual</span></div>
  <pre><span class="tok-com">The hydraulic system provides power to operate flight control surfaces,</span>
<span class="tok-com">landing gear, flaps, and brakes. The system operates at 3,000 PSI and</span>
<span class="tok-com">consists of three independent circuits: System A, System B, and the</span>
<span class="tok-com">standby system. Each circuit contains its own reservoir, pump, and</span>
<span class="tok-com">actuators, ensuring redundancy in case of a single circuit failure.</span></pre>
</div>

<h3>3. Reference Documentation</h3>
<p>Dense, structured information that users look up rather than read front-to-back. Must be highly scannable, complete, and accurate. Includes specifications, part numbers, parameter tables, error codes, and API references.</p>

<div class="table-wrapper">
  <table>
    <thead><tr><th>Type</th><th>Aerospace Example</th><th>Software Example</th></tr></thead>
    <tbody>
      <tr><td>Parts catalog</td><td>Illustrated Parts Catalog (IPC)</td><td>Component library / SDK reference</td></tr>
      <tr><td>Specifications</td><td>Aircraft Characteristics (AC) document</td><td>API reference documentation</td></tr>
      <tr><td>Wiring/Schema</td><td>Aircraft Wiring Diagram Manual (AWDM)</td><td>Database schema documentation</td></tr>
      <tr><td>Error codes</td><td>Fault Isolation Manual (FIM)</td><td>Error code reference guide</td></tr>
      <tr><td>Limits/tolerances</td><td>Structural Repair Manual limits tables</td><td>Configuration parameters reference</td></tr>
    </tbody>
  </table>
</div>

<h3>4. Troubleshooting Documentation</h3>
<p>Helps users diagnose and resolve problems. Typically structured as symptom → diagnosis → solution. In aerospace, the Fault Isolation Manual (FIM) and Troubleshooting Manual (TSM) are examples.</p>

<h3>5. Training Documentation</h3>
<p>Designed for learning, not for on-the-job reference. May include exercises, assessments, and examples. Pilot Operating Handbooks, training course guides, and e-learning content all fall here.</p>

<h3>6. Safety Documentation</h3>
<p>Warnings, cautions, and notes in technical manuals. In aerospace, governed by ATA iSpec2200 conventions:</p>
<ul>
  <li><strong>WARNING:</strong> Injury or death to persons if not followed</li>
  <li><strong>CAUTION:</strong> Damage to equipment if not followed</li>
  <li><strong>NOTE:</strong> Supplementary information (no safety implication)</li>
</ul>

<h2>Product Documentation Types</h2>
<div class="table-wrapper">
  <table>
    <thead><tr><th>Document Type</th><th>Purpose</th><th>Audience</th></tr></thead>
    <tbody>
      <tr><td>Quick Start Guide</td><td>Get users productive fast with minimal content</td><td>New users</td></tr>
      <tr><td>User Manual / Guide</td><td>Comprehensive operational reference</td><td>All users</td></tr>
      <tr><td>Installation Guide</td><td>Setup and configuration procedures</td><td>Administrators</td></tr>
      <tr><td>Administrator Guide</td><td>System configuration, security, maintenance</td><td>IT/System admins</td></tr>
      <tr><td>Release Notes</td><td>Changes, fixes, known issues in a new version</td><td>Existing users</td></tr>
      <tr><td>Migration Guide</td><td>How to upgrade from an older version</td><td>Existing users upgrading</td></tr>
    </tbody>
  </table>
</div>

<h2>Developer Documentation</h2>
<p>A growing and lucrative area of technical writing:</p>
<ul>
  <li><strong>API Reference:</strong> Every endpoint, parameter, return value, error code documented precisely</li>
  <li><strong>SDK Documentation:</strong> How to use the Software Development Kit</li>
  <li><strong>Integration Guides:</strong> How to connect the product to other systems</li>
  <li><strong>Code Samples:</strong> Working examples that demonstrate API usage</li>
  <li><strong>Developer Tutorials:</strong> Walkthrough projects that teach the API through doing</li>
</ul>

<h2>Internal / Operational Documentation</h2>
<p>Documentation that serves the organization itself rather than external users:</p>

<div class="table-wrapper">
  <table>
    <thead><tr><th>Type</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td>Standard Operating Procedures (SOPs)</td><td>Internal procedures for how the organization operates</td></tr>
      <tr><td>Technical Specifications</td><td>Engineering requirements for what to build</td></tr>
      <tr><td>Design Documents</td><td>Architectural decisions and rationale</td></tr>
      <tr><td>Runbooks</td><td>Operational procedures for IT systems</td></tr>
      <tr><td>Style Guides</td><td>Rules governing how documentation must be written</td></tr>
      <tr><td>Knowledge Base Articles</td><td>Solutions to common support problems</td></tr>
    </tbody>
  </table>
</div>

<h2>Aerospace Documentation Map</h2>
<p>Your existing experience covers a rich set of document types. Here is how they map to general technical writing categories:</p>

<div class="table-wrapper">
  <table>
    <thead><tr><th>Aerospace Document</th><th>General Category</th><th>ATA/S1000D Data Module Type</th></tr></thead>
    <tbody>
      <tr><td>Aircraft Maintenance Manual (AMM)</td><td>Procedural / Task-Based</td><td>Procedural (PR)</td></tr>
      <tr><td>Illustrated Parts Catalog (IPC)</td><td>Reference — Parts</td><td>Illustrated Parts Data (IPD)</td></tr>
      <tr><td>Component Maintenance Manual (CMM)</td><td>Procedural + Reference</td><td>Procedural + Technical Description</td></tr>
      <tr><td>Fault Isolation Manual (FIM)</td><td>Troubleshooting</td><td>Fault Isolation (FI)</td></tr>
      <tr><td>Aircraft Wiring Diagram Manual (AWDM)</td><td>Reference — Diagrams</td><td>Wiring Data (WD)</td></tr>
      <tr><td>Structural Repair Manual (SRM)</td><td>Procedural + Reference</td><td>Procedural</td></tr>
      <tr><td>Aircraft Characteristics (AC)</td><td>Reference — Specifications</td><td>Technical Descriptions</td></tr>
      <tr><td>Service Bulletin (SB)</td><td>Change Documentation</td><td>Change Information (CI)</td></tr>
      <tr><td>Quick Reference Handbook (QRH)</td><td>Quick Reference</td><td>N/A (operational)</td></tr>
    </tbody>
  </table>
</div>

<h2>The DITA Connection</h2>
<p>DITA formalizes the three most important documentation types as its core topic types:</p>

<div class="diagram-container">
  <div class="mermaid">
graph LR
    DITA["DITA Core Topic Types"]
    DITA --> Concept["&lt;concept&gt;\nWHAT / WHY\nSystem descriptions\nOverviews\nBackground"]
    DITA --> Task["&lt;task&gt;\nHOW TO\nProcedures\nStep-by-step instructions\nMaintenance tasks"]
    DITA --> Reference["&lt;reference&gt;\nSPECIFICATIONS\nPart numbers\nParameters\nError codes"]
    style Concept fill:#4f46e5,color:#fff
    style Task fill:#059669,color:#fff
    style Reference fill:#0891b2,color:#fff
  </div>
  <p class="diagram-caption">DITA's three base topic types map to the fundamental documentation categories.</p>
</div>

<p>This is one of DITA's most powerful ideas: rather than thinking about documentation as one large document with chapters, you think about it as a collection of <em>atomic topics</em>, each of which is one of these types. A topic does one thing. You then assemble topics into publications using maps.</p>

<p>We will cover this in exhaustive detail in Module 3. For now, recognize that the documentation types you are learning about in this page are the conceptual foundation for everything DITA does.</p>

<h2>Documentation Deliverables You Will Create</h2>
<p>In modern DITA roles, you will typically be responsible for creating:</p>
<ul>
  <li>DITA concept topics (system descriptions, overviews, background information)</li>
  <li>DITA task topics (step-by-step procedures)</li>
  <li>DITA reference topics (tables of specifications, parameters, error codes)</li>
  <li>DITA maps (assembled publications)</li>
  <li>Markdown documentation (for software projects, README files, wiki pages)</li>
  <li>Release notes and change logs</li>
  <li>Potentially: API documentation (if working with developer tools)</li>
</ul>`,
  quiz: [
    { question: 'An Illustrated Parts Catalog (IPC) is primarily what type of documentation?', options: ['Procedural / Task-Based', 'Conceptual', 'Reference', 'Troubleshooting'], correct: 2, explanation: 'An IPC is reference documentation — users look up part numbers, figure numbers, and quantities. They do not read it front-to-back; they query it for specific information.' },
    { question: 'In DITA, a step-by-step procedure for replacing an engine oil filter maps to which topic type?', options: ['<concept>', '<task>', '<reference>', '<troubleshooting>'], correct: 1, explanation: 'The <task> topic type is for step-by-step procedures. It has a specific structure: context, prerequisites, steps, post-conditions, and expected results.' },
    { question: 'A document that explains how the aircraft hydraulic system works (without telling the mechanic what to do) is best classified as:', options: ['Procedural', 'Conceptual', 'Reference', 'Safety'], correct: 1, explanation: 'A system description that explains how something works is conceptual documentation. It builds understanding rather than directing action. In DITA, this would be a <concept> topic.' },
    { question: 'A Fault Isolation Manual (FIM) primarily serves which documentation purpose?', options: ['Training', 'Troubleshooting', 'Reference', 'Procedural'], correct: 1, explanation: 'A FIM is troubleshooting documentation: it helps technicians diagnose faults by matching symptoms to causes and remedies.' },
    { question: 'You are writing about why the ATA chapter structure was developed and how it organizes aircraft documentation. This is:', options: ['Task documentation', 'Reference documentation', 'Conceptual documentation', 'Safety documentation'], correct: 2, explanation: 'Explaining why something exists and how it is organized is conceptual. You are building understanding, not providing steps or specifications.' },
  ],
  prev: 'page-1',
  next: 'page-3',
},

{
  id: 'page-3', pageNum: 3, module: 1,
  moduleTitle: 'Documentation Fundamentals',
  title: 'Structured vs Unstructured Content',
  subtitle: 'Why structured authoring exists, what problems it solves, and why DITA is the premier structured authoring standard.',
  duration: '25–30 min read',
  level: 'Foundational',
  searchKeywords: 'structured authoring unstructured content XML SGML DITA single source publishing reuse',
  objectives: [
    'Define structured authoring and explain how it differs from unstructured authoring',
    'Identify the problems that structured authoring solves',
    'Explain the relationship between structure, semantics, and presentation',
    'Describe how single-sourcing enables content reuse across multiple deliverables',
    'Understand why large documentation sets require structured approaches',
  ],
  content: `
<h2>The Problem with Unstructured Documentation</h2>
<p>Imagine a large aerospace organization with 500 Aircraft Maintenance Manuals, each hundreds of pages long, all written in Microsoft Word. Every time the organization updates a safety warning — perhaps a new regulatory requirement changes the wording of a standard caution — someone must manually open 500 documents and make the change 500 times.</p>

<p>Now imagine that the organization wants to publish both a print PDF and an HTML version of each manual, formatted for different display systems. In Word, you would need to manually reformat every document twice. And if the organization operates internationally? They might need the same content in English, French, Spanish, Japanese, and Arabic. That's five versions per document, 500 documents — 2,500 separate files to maintain.</p>

<p>This is the fundamental problem of <strong>unstructured documentation</strong>: content, formatting, and structure are all mixed together in a single proprietary file format. Any change requires manual intervention across every copy of the content. Any new output format requires manual reformatting. Content cannot be automatically processed, searched, or transformed because the machine cannot distinguish a heading from a warning from a procedure step — they all just look like "text."</p>

<div class="callout warning">
  <div class="callout-title">⚠️ The Unstructured Documentation Pain Points</div>
  <p>Copy-paste errors, formatting inconsistencies, update nightmares, redundant content, impossible automation, no single source of truth. Sound familiar?</p>
</div>

<h2>What is Structured Content?</h2>
<p>Structured content separates three things that are conflated in unstructured content:</p>

<div class="table-wrapper">
  <table>
    <thead><tr><th>Layer</th><th>What it is</th><th>Example in DITA</th></tr></thead>
    <tbody>
      <tr><td><strong>Content</strong></td><td>The actual information: words, values, data</td><td>"Connect the hydraulic line to port A"</td></tr>
      <tr><td><strong>Structure</strong></td><td>How the content is organized and what each piece means</td><td>&lt;step&gt;&lt;cmd&gt;...&lt;/cmd&gt;&lt;/step&gt;</td></tr>
      <tr><td><strong>Presentation</strong></td><td>How the content looks (font, color, layout)</td><td>Defined by a CSS stylesheet or XSLT transform</td></tr>
    </tbody>
  </table>
</div>

<p>In structured authoring, you write content inside <strong>semantic markup</strong> — tags that describe what the content means, not how it should look. When a machine processes your content, it can understand that <code>&lt;warning&gt;</code> means "this is a safety warning" and <code>&lt;step&gt;</code> means "this is a procedure step." The machine can then apply appropriate formatting automatically based on rules defined in a stylesheet.</p>

<h2>Semantic Markup: A Deep Dive</h2>
<p>Consider this maintenance procedure step in three different formats:</p>

<div class="code-block">
  <div class="code-block-header"><span class="code-block-lang">Word / Unstructured</span><span class="code-block-title">What you see in MS Word</span></div>
  <pre><span class="tok-com">Step 3. WARNING: High pressure. Depressurize the hydraulic system</span>
<span class="tok-com">before continuing. Turn the hydraulic shutoff valve to the OFF position.</span></pre>
</div>

<div class="code-block">
  <div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Structured — machine-readable</span></div>
  <pre><span class="tok-tag">&lt;step&gt;</span>
  <span class="tok-tag">&lt;hazardstatement</span> <span class="tok-attr">type</span>=<span class="tok-val">"warning"</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;messagepanel&gt;</span>
      <span class="tok-tag">&lt;typeofhazard&gt;</span>High pressure fluid<span class="tok-tag">&lt;/typeofhazard&gt;</span>
      <span class="tok-tag">&lt;consequence&gt;</span>Serious injury may result from pressurized fluid contact.<span class="tok-tag">&lt;/consequence&gt;</span>
      <span class="tok-tag">&lt;howtoavoid&gt;</span>Depressurize the hydraulic system before continuing.<span class="tok-tag">&lt;/howtoavoid&gt;</span>
    <span class="tok-tag">&lt;/messagepanel&gt;</span>
  <span class="tok-tag">&lt;/hazardstatement&gt;</span>
  <span class="tok-tag">&lt;cmd&gt;</span>Turn the hydraulic shutoff valve to the OFF position.<span class="tok-tag">&lt;/cmd&gt;</span>
<span class="tok-tag">&lt;/step&gt;</span></pre>
</div>

<p>In the DITA version, the machine knows:</p>
<ul>
  <li>This is a <code>&lt;step&gt;</code> — it belongs to a procedure</li>
  <li>The warning is a <code>&lt;hazardstatement type="warning"&gt;</code> — it can be formatted as a warning box, indexed in a safety manual, extracted for a safety report</li>
  <li>The <code>&lt;cmd&gt;</code> is the action the user must take</li>
  <li>The type of hazard, consequence, and avoidance action are separately tagged and separately searchable</li>
</ul>

<h2>The Benefits of Structured Authoring</h2>

<h3>1. Single-Source Publishing</h3>
<p>Write once, publish anywhere. One DITA source can generate PDF, HTML5, EPUB, mobile help, chatbot responses, and custom formats — automatically. Formatting is applied by stylesheets, not by manual formatting in the source.</p>

<div class="diagram-container">
  <div class="mermaid">
graph LR
    Source["DITA Source\n(XML Files)"]
    Source --> PDF["PDF\nPrint Manual"]
    Source --> HTML["HTML5\nWeb Help"]
    Source --> EPUB["EPUB\nE-Book"]
    Source --> Mobile["Mobile\nHelp System"]
    Source --> Custom["Custom\nOutput Format"]
    style Source fill:#4f46e5,color:#fff
  </div>
  <p class="diagram-caption">Single source → multiple output formats, all from one XML source.</p>
</div>

<h3>2. Content Reuse</h3>
<p>A safety warning defined once can be used in 50 different procedures. Change the warning once and all 50 procedures automatically use the updated text. In DITA, this is accomplished through <strong>conrefs</strong> (content references) and <strong>keyrefs</strong>.</p>

<h3>3. Consistency</h3>
<p>Structure enforces consistency. A DITA <code>&lt;task&gt;</code> topic always has prerequisites before steps. Steps always use the <code>&lt;cmd&gt;</code> element for the action. The structure is enforced by the DTD/schema — you cannot accidentally omit a mandatory component.</p>

<h3>4. Conditional Processing</h3>
<p>Tag content for specific audiences, products, or conditions. A single manual source can conditionally include or exclude content based on aircraft variant, customer, or regulatory region. One file, customized output for each customer.</p>

<h3>5. Localization Efficiency</h3>
<p>Structured content is dramatically easier (and cheaper) to translate. Translation management systems can extract only the text that needs translating (not the markup), track changes, and reuse previously translated content (translation memory).</p>

<h3>6. Automated Quality Checking</h3>
<p>Schemas validate that your content is structurally correct automatically. If you forget a required element, the XML editor tells you immediately. You cannot accidentally publish a topic with a missing step.</p>

<h2>A Brief History: SGML → HTML → XML → DITA</h2>

<div class="table-wrapper">
  <table>
    <thead><tr><th>Year</th><th>Technology</th><th>Key Contribution</th></tr></thead>
    <tbody>
      <tr><td>1969</td><td>GML (Generalized Markup Language)</td><td>IBM creates first markup language for structured documents</td></tr>
      <tr><td>1986</td><td>SGML (Standard Generalized Markup Language)</td><td>ISO standard; parent of HTML and XML; used for MIL-SPEC and aerospace docs</td></tr>
      <tr><td>1989</td><td>HTML</td><td>Tim Berners-Lee creates HTML for the Web; a simplified SGML application</td></tr>
      <tr><td>1998</td><td>XML 1.0</td><td>W3C creates XML as a simplified, web-ready alternative to SGML</td></tr>
      <tr><td>2001</td><td>DITA (first version)</td><td>IBM creates DITA as an XML application for technical documentation</td></tr>
      <tr><td>2005</td><td>DITA 1.0</td><td>OASIS adopts DITA as an open standard</td></tr>
      <tr><td>2007</td><td>DITA 1.1</td><td>Bookmap added; specialization improved</td></tr>
      <tr><td>2010</td><td>DITA 1.2</td><td>Keys and keyrefs; learning & training content; massive expansion</td></tr>
      <tr><td>2015</td><td>DITA 1.3</td><td>Troubleshooting topic; branch filtering; MathML; scoped keys</td></tr>
      <tr><td>2023</td><td>DITA 2.0</td><td>Simplified, streamlined; deprecated legacy elements</td></tr>
    </tbody>
  </table>
</div>

<p>Your experience with SGML and Arbortext connects directly to this history. SGML was the dominant structured authoring standard in aerospace for decades. DITA is essentially SGML's modern successor — same fundamental principles, but built on XML which is lighter, web-friendly, and supported by vastly better tooling.</p>

<h2>Structured vs Unstructured: When to Use Which</h2>
<div class="comparison">
  <div class="comparison-panel good">
    <div class="comparison-panel-header">Use Structured Authoring (DITA/XML) when:</div>
    <ul>
      <li>Large documentation sets (50+ topics)</li>
      <li>Content must be reused across multiple publications</li>
      <li>Multiple output formats required (PDF + HTML + etc.)</li>
      <li>Localization into multiple languages</li>
      <li>Team authoring environment</li>
      <li>Regulatory compliance requires consistency</li>
      <li>Long product lifecycle (5–20+ years)</li>
    </ul>
  </div>
  <div class="comparison-panel bad">
    <div class="comparison-panel-header">Unstructured authoring may suffice when:</div>
    <ul>
      <li>Small, one-time document (5–10 pages)</li>
      <li>Single output format only</li>
      <li>No content reuse required</li>
      <li>Short lifecycle (document is used once)</li>
      <li>Single author, no team collaboration</li>
      <li>Informal internal communication</li>
    </ul>
  </div>
</div>

<div class="callout tip">
  <div class="callout-title">💡 The Core Insight</div>
  <p>Structured authoring is an investment. It costs more to set up (tools, training, style guide, schema design) but pays back enormously at scale. For aerospace documentation — thousands of pages, multiple formats, regular updates, localization requirements, regulatory oversight — structured authoring is not optional. It is essential.</p>
</div>`,
  quiz: [
    { question: 'What is the fundamental problem that structured authoring solves?', options: ['Documents look inconsistent', 'Content, formatting, and structure are conflated in unstructured files, making automation and reuse impossible', 'Writers make too many spelling errors', 'Documents are too long'], correct: 1, explanation: 'The root problem is conflation of content, structure, and presentation. When these are separate (as in XML/DITA), the content can be processed, reused, and published automatically to multiple formats.' },
    { question: 'In DITA XML, the <cmd> element inside a <step> primarily communicates:', options: ['How the step should be formatted (bold, numbered)', 'What the user must do — the action command', 'The prerequisite for the step', 'A warning about the step'], correct: 1, explanation: '<cmd> contains the action the user must perform. This semantic meaning allows processors to format it consistently and tools to extract all commands from a procedure.' },
    { question: 'A company writes one DITA source and publishes it as PDF, HTML5, and mobile help. This practice is called:', options: ['Multi-format publishing', 'Single-source publishing', 'Content distribution', 'Conditional processing'], correct: 1, explanation: 'Single-source publishing means writing content once and generating multiple output formats from the same source files. This is a primary benefit of structured authoring.' },
    { question: 'DITA is built on which markup language foundation?', options: ['HTML', 'SGML', 'XML', 'Markdown'], correct: 2, explanation: 'DITA is an XML application — it uses XML as its underlying markup language. XML is a simplified version of SGML, which you may know from older aerospace documentation systems.' },
    { question: 'Which scenario BEST justifies implementing structured authoring?', options: ['A writer needs to create a one-page memo', 'An organization maintains 2,000 pages of documentation in 5 languages with quarterly updates', 'A team needs to write a blog post', 'A writer is creating a one-time report for a meeting'], correct: 1, explanation: 'Large scale (2,000 pages), multiple languages, and regular updates are exactly the conditions where structured authoring ROI is highest. The investment in XML tooling pays back through automation, reuse, and consistency.' },
  ],
  prev: 'page-2',
  next: 'page-4',
},

{
  id: 'page-4', pageNum: 4, module: 1,
  moduleTitle: 'Documentation Fundamentals',
  title: 'Documentation Lifecycle',
  subtitle: 'Understanding how documentation is planned, created, reviewed, published, and maintained throughout a product\'s life.',
  duration: '20–25 min read',
  level: 'Foundational',
  searchKeywords: 'documentation lifecycle planning authoring review publishing maintenance versioning',
  objectives: [
    'Describe the phases of the documentation lifecycle',
    'Understand how documentation maps to the product lifecycle',
    'Identify the stakeholders involved at each lifecycle phase',
    'Explain what happens during a review cycle',
    'Describe how documentation is maintained over time',
  ],
  content: `
<h2>The Documentation Lifecycle</h2>
<p>Documentation does not appear magically when a product ships. It follows a lifecycle — a series of phases from initial planning through ongoing maintenance — that mirrors, and is deeply integrated with, the product lifecycle itself.</p>

<p>Understanding this lifecycle helps you plan your work, set expectations with stakeholders, and deliver documentation that is ready when the product is ready.</p>

<div class="diagram-container">
  <div class="mermaid">
flowchart LR
    Plan["1. PLAN\nAudience analysis\nContent plan\nResource estimate"]
    Author["2. AUTHOR\nResearch\nWrite topics\nCreate graphics"]
    Review["3. REVIEW\nSME technical review\nPeer edit review\nChange incorporation"]
    Approve["4. APPROVE\nFinal quality check\nRegulatory review\nSign-off"]
    Publish["5. PUBLISH\nGenerate outputs\nDistribute\nDeploy"]
    Maintain["6. MAINTAIN\nTrack product changes\nUpdate content\nManage versions"]
    Plan --> Author --> Review --> Approve --> Publish --> Maintain --> Plan
    style Plan fill:#4f46e5,color:#fff
    style Author fill:#059669,color:#fff
    style Review fill:#0891b2,color:#fff
    style Approve fill:#d97706,color:#fff
    style Publish fill:#7c3aed,color:#fff
    style Maintain fill:#dc2626,color:#fff
  </div>
  <p class="diagram-caption">The documentation lifecycle is a continuous loop, not a one-time process.</p>
</div>

<h3>Phase 1: Plan</h3>
<p>Before writing a single word, skilled technical writers plan. This involves:</p>
<ul>
  <li><strong>Audience analysis:</strong> Who will read this? What do they need? What do they already know?</li>
  <li><strong>Content inventory:</strong> What documentation already exists? What needs to be created, updated, or retired?</li>
  <li><strong>Content plan:</strong> Which topics will be created? What is the structure of the publication?</li>
  <li><strong>Resource estimation:</strong> How much time will it take? What tools, reviews, and approvals are needed?</li>
  <li><strong>Standards selection:</strong> Which standards apply? DITA? ATA? S1000D? Company style guide?</li>
</ul>

<h3>Phase 2: Author</h3>
<p>The writing phase. In modern structured authoring environments:</p>
<ul>
  <li>Writers create individual DITA topics in Oxygen XML Editor</li>
  <li>Content is stored in a Component Content Management System (CCMS) or Git repository</li>
  <li>Writers interview Subject Matter Experts (SMEs) to gather information</li>
  <li>Graphics (illustrations, screenshots, diagrams) are created separately and referenced</li>
  <li>Topics are assembled into maps (publications) as they are completed</li>
</ul>

<h3>Phase 3: Review</h3>
<p>Documentation must be reviewed before publication. There are typically two types of review:</p>

<div class="table-wrapper">
  <table>
    <thead><tr><th>Review Type</th><th>Reviewer</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><td><strong>Technical Review</strong></td><td>Subject Matter Expert (engineer, technician, pilot)</td><td>Verify accuracy of all technical content — procedures, specifications, warnings</td></tr>
      <tr><td><strong>Peer / Editorial Review</strong></td><td>Another technical writer or editor</td><td>Check clarity, consistency, style guide compliance, grammar, structure</td></tr>
      <tr><td><strong>Regulatory Review</strong></td><td>Compliance officer, DER (aerospace), legal</td><td>Ensure content meets regulatory requirements (FAA, EASA, MIL-SPEC)</td></tr>
      <tr><td><strong>Customer Review</strong></td><td>Airline, operator, or customer representative</td><td>Validate that documentation meets contractual requirements</td></tr>
    </tbody>
  </table>
</div>

<p>Managing review cycles is one of the most challenging parts of a technical writer's job. Reviews involve coordinating multiple stakeholders, incorporating conflicting feedback, and tracking what has been resolved.</p>

<h3>Phase 4: Approve</h3>
<p>Final sign-off before publication. In regulated industries (aerospace, medical devices, pharmaceutical), this is a formal process with documented approval records. In many aerospace contexts, a Document Control function manages this.</p>

<h3>Phase 5: Publish</h3>
<p>In the DITA world, publishing means running a transformation scenario that converts XML source to one or more output formats:</p>
<ul>
  <li><strong>PDF:</strong> For print manuals, regulatory submissions, contractual deliverables</li>
  <li><strong>HTML5 / WebHelp:</strong> For online documentation portals</li>
  <li><strong>EPUB:</strong> For e-readers and offline tablets</li>
  <li><strong>Custom formats:</strong> For content management systems, aircraft EFB (Electronic Flight Bag), ground support equipment displays</li>
</ul>

<h3>Phase 6: Maintain</h3>
<p>Documentation is never "done." Products change, regulations change, errors are found. Maintenance involves:</p>
<ul>
  <li>Tracking product changes (Engineering Change Orders, Service Bulletins, regulatory changes)</li>
  <li>Updating affected topics</li>
  <li>Managing document versions and revision histories</li>
  <li>Communicating changes to users (revision markers, change summaries)</li>
  <li>Retiring outdated documentation</li>
</ul>

<h2>Lifecycle in Aerospace vs. Software Documentation</h2>
<div class="table-wrapper">
  <table>
    <thead><tr><th>Aspect</th><th>Aerospace Documentation</th><th>Software Documentation</th></tr></thead>
    <tbody>
      <tr><td>Release cycle</td><td>Years; very stable, change-controlled</td><td>Months or weeks; agile sprints</td></tr>
      <tr><td>Change control</td><td>Strict (ECO, SB, DER approval)</td><td>Lighter (Git PRs, editorial review)</td></tr>
      <tr><td>Regulatory approval</td><td>Often required (FAA, EASA, DGCA)</td><td>Rarely required</td></tr>
      <tr><td>Version management</td><td>Formal document revision system</td><td>Git version control</td></tr>
      <tr><td>Change notification</td><td>Revision bars, TR (Temporary Revision)</td><td>Release notes, changelogs</td></tr>
    </tbody>
  </table>
</div>

<div class="callout info">
  <div class="callout-title">🔄 The Continuous Loop</div>
  <p>The documentation lifecycle is not linear — it's continuous. As soon as documentation is published, the maintenance phase begins. Product changes trigger new authoring cycles. This is why <strong>structured authoring and version control</strong> are so important: they make the cycle manageable at scale.</p>
</div>`,
  quiz: [
    { question: 'In the documentation lifecycle, what is the PRIMARY purpose of a Technical Review?', options: ['Check grammar and spelling', 'Verify the technical accuracy of all content', 'Approve the document for publication', 'Ensure compliance with style guide'], correct: 1, explanation: 'A Technical Review is conducted by a Subject Matter Expert (engineer, technician) whose job is to verify that every technical fact, procedure, specification, and warning is correct.' },
    { question: 'In an agile software company, documentation is updated every two weeks to match software sprints. This describes which lifecycle phase happening continuously?', options: ['Planning only', 'The maintenance phase triggering new author cycles', 'The approval phase', 'The publish phase only'], correct: 1, explanation: 'In agile environments, the maintenance phase continuously triggers new authoring → review → publish cycles to keep up with rapid product changes.' },
    { question: 'A document revision bar (vertical line in the margin) serves what purpose?', options: ['Aesthetic decoration', 'Indicating where content has changed since the previous revision', 'Marking safety warnings', 'Identifying the author of that section'], correct: 1, explanation: 'Revision bars mark the location of changes since the previous document revision, helping readers quickly identify what is new or changed without reading the entire document.' },
    { question: 'Which phase of the documentation lifecycle involves running an Oxygen XML transformation scenario?', options: ['Plan', 'Author', 'Review', 'Publish'], correct: 3, explanation: 'Publishing means generating output formats (PDF, HTML5, etc.) from the DITA source. In Oxygen XML, this is done by running a transformation scenario that processes the DITA map through the DITA-OT publishing engine.' },
  ],
  prev: 'page-3',
  next: 'page-5',
},

{
  id: 'page-5', pageNum: 5, module: 1,
  moduleTitle: 'Documentation Fundamentals',
  title: 'Information Architecture Basics',
  subtitle: 'Designing documentation structures that help users find and use information efficiently.',
  duration: '20–25 min read',
  level: 'Foundational',
  searchKeywords: 'information architecture IA organization navigation findability user experience documentation structure',
  objectives: [
    'Define information architecture in the context of technical documentation',
    'Explain the principles of effective navigation design',
    'Describe common organizational patterns for documentation',
    'Understand how DITA maps implement information architecture',
    'Apply basic IA thinking to a simple documentation set',
  ],
  content: `
<h2>What is Information Architecture?</h2>
<p><strong>Information architecture (IA)</strong> is the structural design of shared information environments. In technical documentation, IA answers the question: <em>"How should I organize this content so users can find what they need quickly?"</em></p>

<p>You have practiced information architecture throughout your career — when you organized an Aircraft Maintenance Manual by ATA chapter, you were applying IA. The ATA chapter numbering system (ATA 21 = Air Conditioning, ATA 27 = Flight Controls, ATA 29 = Hydraulic Power) is a massive, industry-agreed information architecture that aerospace technicians rely on globally.</p>

<h2>The Four Questions of IA</h2>
<p>Good IA answers four fundamental user questions:</p>

<div class="table-wrapper">
  <table>
    <thead><tr><th>Question</th><th>What the user wants to know</th><th>IA solution</th></tr></thead>
    <tbody>
      <tr><td><strong>Where am I?</strong></td><td>What section is this? Where does it fit in the bigger picture?</td><td>Breadcrumbs, section headers, ATA chapter numbers</td></tr>
      <tr><td><strong>What's here?</strong></td><td>What information is on this page?</td><td>Clear topic titles, content descriptions, tables of contents</td></tr>
      <tr><td><strong>Where can I go?</strong></td><td>Where is related information? What comes next?</td><td>Related links, "See also", navigation sequences</td></tr>
      <tr><td><strong>How do I search?</strong></td><td>I know what I want — how do I find it fast?</td><td>Index, search functionality, cross-references</td></tr>
    </tbody>
  </table>
</div>

<h2>Organizational Patterns</h2>
<p>Documentation can be organized using different structural patterns. Choosing the right pattern depends on how your users think about the content.</p>

<h3>1. Task-Oriented (Most common for maintenance docs)</h3>
<p>Organized by what users need to <em>do</em>. Each top-level section is a major task area. Sub-sections are specific tasks. This mirrors how users approach the documentation: "I need to replace the fuel filter" — not "I need to read about Chapter 5."</p>

<h3>2. Subject/Topic-Oriented</h3>
<p>Organized by system or subject area. The ATA chapter structure is subject-oriented: all hydraulic content in one chapter, all fuel system content in another. Users who know the ATA structure can navigate directly.</p>

<h3>3. Audience-Oriented</h3>
<p>Separate documentation sets for different audiences: pilot documentation vs. maintenance documentation vs. engineering documentation. Same product, different lenses.</p>

<h3>4. Sequence-Oriented</h3>
<p>For training and tutorials, content is organized in learning sequence — from simple to complex, from foundational to advanced. This course uses a sequence-oriented IA.</p>

<h2>DITA Maps as Information Architecture</h2>
<p>In DITA, your information architecture is expressed in a <strong>DITA map</strong>. The map is a separate XML file that references topics and defines their hierarchical relationship. The map does not contain content — it is purely structure.</p>

<div class="code-block">
  <div class="code-block-header"><span class="code-block-lang">DITA</span><span class="code-block-title">A DITA map expressing IA hierarchy</span></div>
  <pre><span class="tok-tag">&lt;map&gt;</span>
  <span class="tok-tag">&lt;title&gt;</span>Aircraft Hydraulic System Manual<span class="tok-tag">&lt;/title&gt;</span>
  <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"hydraulic-overview.dita"</span><span class="tok-tag">/&gt;</span>         <span class="tok-com">&lt;!-- Concept --&gt;</span>
  <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"hydraulic-components.dita"</span><span class="tok-tag">/&gt;</span>      <span class="tok-com">&lt;!-- Reference --&gt;</span>
  <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"procedures.dita"</span><span class="tok-tag">&gt;</span>                  <span class="tok-com">&lt;!-- Task container --&gt;</span>
    <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"inspect-system.dita"</span><span class="tok-tag">/&gt;</span>
    <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"replace-pump.dita"</span><span class="tok-tag">/&gt;</span>
    <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"replace-filter.dita"</span><span class="tok-tag">/&gt;</span>
  <span class="tok-tag">&lt;/topicref&gt;</span>
  <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"specifications.dita"</span><span class="tok-tag">/&gt;</span>           <span class="tok-com">&lt;!-- Reference --&gt;</span>
  <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"troubleshooting.dita"</span><span class="tok-tag">/&gt;</span>         <span class="tok-com">&lt;!-- Troubleshooting --&gt;</span>
<span class="tok-tag">&lt;/map&gt;</span></pre>
</div>

<p>This map tells the publishing system: "The manual has six top-level sections. The procedures section has three sub-topics." The DITA-OT then uses this hierarchy to build the Table of Contents, navigation, and output structure automatically.</p>

<h2>Principles of Good Documentation IA</h2>
<ol>
  <li><strong>Organize for the user, not the organization.</strong> Your internal org chart is irrelevant to the user. Organize by what they need to do or know.</li>
  <li><strong>Use consistent, predictable patterns.</strong> Once a user learns your structure, all similar documents should work the same way. (ATA does this beautifully — any AMM in the world follows the same chapter logic.)</li>
  <li><strong>Make the top level reflect the most important tasks.</strong> The most frequently needed information should be easiest to reach.</li>
  <li><strong>Provide multiple paths to information.</strong> TOC + search + index. Different users navigate differently.</li>
  <li><strong>Avoid deep hierarchies.</strong> More than four levels deep is usually a sign that the structure is too complex. Users get lost.</li>
  <li><strong>Test your IA with real users.</strong> What seems obvious to you may be confusing to your audience.</li>
</ol>`,
  quiz: [
    { question: 'The ATA chapter numbering system (ATA 21 for Air Conditioning, ATA 29 for Hydraulics) is an example of which organizational pattern?', options: ['Task-oriented', 'Subject/topic-oriented', 'Audience-oriented', 'Sequence-oriented'], correct: 1, explanation: 'The ATA structure organizes content by subject/system area. All content about a given aircraft system is in one chapter, regardless of task type or audience.' },
    { question: 'In DITA, a map file primarily contains:', options: ['The full text of all topics in the publication', 'References to topics and their hierarchical arrangement', 'Stylesheet definitions for output formatting', 'Metadata about the document project'], correct: 1, explanation: 'A DITA map contains topicref elements that reference external topic files and define their hierarchy. The map itself has no content — it is pure structure/architecture.' },
    { question: 'A user looks at a documentation page and asks "Where am I?" — which IA element best addresses this?', options: ['A search box', 'Breadcrumb navigation showing the path (Home > System > Subsystem > Topic)', 'A table of contents', 'A glossary'], correct: 1, explanation: 'Breadcrumb navigation shows the user\'s location in the hierarchy, answering "Where am I?" by showing the path from the top level down to the current topic.' },
    { question: 'Which principle of good IA is violated when a company organizes its documentation by internal department rather than by user task?', options: ['Avoiding deep hierarchies', 'Organizing for the user, not the organization', 'Using consistent patterns', 'Providing multiple paths'], correct: 1, explanation: '"Organize for the user, not the organization" — users do not care about your org chart. They need to find how to do their task, not navigate your company structure.' },
  ],
  prev: 'page-4',
  next: 'page-6',
},

{
  id: 'page-6', pageNum: 6, module: 1,
  moduleTitle: 'Documentation Fundamentals',
  title: 'Topic-Based Authoring',
  subtitle: 'The paradigm shift from book-based to topic-based documentation and why it matters for your career.',
  duration: '25–30 min read',
  level: 'Foundational',
  searchKeywords: 'topic based authoring TBA atomic topics modular reuse DITA Every Page Is Page One',
  objectives: [
    'Explain the concept of topic-based authoring and how it differs from book-based authoring',
    'Describe the characteristics of a well-formed topic',
    'Understand how topic-based authoring enables content reuse',
    'Recognize the "Every Page is Page One" reality of modern documentation consumption',
    'Apply topic-based thinking to traditional aerospace documentation',
  ],
  content: `
<h2>The Book Paradigm vs. the Topic Paradigm</h2>
<p>For most of human history, documentation was written as books. A book has a beginning, a middle, and an end. It is read in order. The author assumes the reader has read everything that came before.</p>

<p>An Aircraft Maintenance Manual written in the book paradigm might say: "As described in the hydraulic system overview in Chapter 3, the system operates at 3,000 PSI. Therefore, when performing the procedure in this section..."</p>

<p>This works fine if the reader has read Chapter 3. But what if they haven't? What if they searched online and landed directly on this procedure? What if this procedure is reused in a different manual that doesn't have Chapter 3?</p>

<p><strong>Topic-based authoring</strong> is the answer to this problem. Instead of writing a book, you write a collection of self-contained, atomic topics — each of which stands alone and is understandable without context from surrounding topics.</p>

<h2>What is a Topic?</h2>
<p>A <strong>topic</strong> is a unit of information that:</p>
<ul>
  <li>Addresses a single subject — one concept, one task, or one set of reference information</li>
  <li>Is self-contained — can be understood without reading other topics first</li>
  <li>Has a clear purpose — the reader knows exactly what they will learn or be able to do after reading it</li>
  <li>Has a meaningful title — the title tells you what the topic is about</li>
  <li>Can stand alone or be assembled with other topics into a publication</li>
</ul>

<div class="callout info">
  <div class="callout-title">📏 How Long is a Topic?</div>
  <p>A topic should be as long as it needs to be to address its single subject completely — and no longer. Typical DITA topics range from 200–800 words. Some reference topics are just a table. Some conceptual topics may be longer. The test is: does this topic do exactly one thing? If it does two things, split it into two topics.</p>
</div>

<h2>Every Page is Page One</h2>
<p>Mark Baker coined the phrase "Every Page is Page One" to describe modern documentation consumption. Users today do not read documentation front-to-back. They:</p>
<ul>
  <li>Search Google and land on a specific page</li>
  <li>Click a link in an email or Slack message</li>
  <li>Follow a cross-reference from another topic</li>
  <li>Scan the table of contents and jump to the relevant section</li>
</ul>

<p>Every page a user visits is effectively their "Page One" — the first thing they read. This means every topic must provide enough context for the reader to understand it without having read everything before it.</p>

<p>In aerospace maintenance, this is already well-understood. A technician who needs to replace a fuel pump does not read the entire AMM. They go directly to Task 73-00-00-400-001, replace the pump, and leave. That task topic must stand alone.</p>

<h2>Book-Based vs. Topic-Based: The Comparison</h2>
<div class="table-wrapper">
  <table>
    <thead><tr><th>Aspect</th><th>Book-Based Authoring</th><th>Topic-Based Authoring</th></tr></thead>
    <tbody>
      <tr><td>Unit of content</td><td>Chapter / Document</td><td>Topic (atomic unit)</td></tr>
      <tr><td>Reading assumption</td><td>Reader reads in order</td><td>Reader may land on any topic</td></tr>
      <tr><td>Context</td><td>Relies on surrounding chapters</td><td>Self-contained; provides own context</td></tr>
      <tr><td>Reuse</td><td>Difficult; copy-paste required</td><td>Native; topics referenced by maps</td></tr>
      <tr><td>Multiple outputs</td><td>Manual reformatting needed</td><td>Automated via DITA maps</td></tr>
      <tr><td>Team authoring</td><td>Conflicts and merge problems</td><td>Each topic is independent file</td></tr>
      <tr><td>Update impact</td><td>Must update every occurrence</td><td>Update once; all assemblies get update</td></tr>
      <tr><td>Tool</td><td>Word Processor (Word, FrameMaker)</td><td>DITA-aware editor (Oxygen XML)</td></tr>
    </tbody>
  </table>
</div>

<h2>What Makes a Well-Formed Topic?</h2>
<p>A well-formed topic has these characteristics:</p>

<h3>1. A task-oriented title</h3>
<p>The title tells the user what they will accomplish. Prefer verb phrases for task topics.</p>
<div class="comparison">
  <div class="comparison-panel bad"><div class="comparison-panel-header">Poor Topic Titles</div><ul><li>Hydraulic System</li><li>Fuel Filter Information</li><li>Engine Start Procedure</li><li>General</li></ul></div>
  <div class="comparison-panel good"><div class="comparison-panel-header">Good Topic Titles</div><ul><li>How the Hydraulic System Works (Concept)</li><li>Replace the Fuel Filter (Task)</li><li>Start the Engine Using APU Power (Task)</li><li>Hydraulic System Specifications (Reference)</li></ul></div>
</div>

<h3>2. A single, clear purpose</h3>
<p>A topic does one thing. If you find yourself writing "and also...", you may need two topics.</p>

<h3>3. Sufficient context</h3>
<p>The reader should understand the topic without reading surrounding content. Provide brief context where needed, but do not reproduce content from other topics (use cross-references or conrefs instead).</p>

<h3>4. A clear audience</h3>
<p>Who is this topic for? A system overview for pilots is different from one for maintenance engineers, even if the underlying aircraft is the same.</p>

<h2>How Topics Are Assembled into Publications</h2>
<p>Topics are standalone files. Publications are created by assembling topics in a DITA map. The same topic can appear in multiple publications — this is content reuse in action.</p>

<div class="diagram-container">
  <div class="mermaid">
graph TD
    T1["Topic: System Overview\n(concept)"]
    T2["Topic: Replace Filter\n(task)"]
    T3["Topic: Torque Specs\n(reference)"]
    T4["Topic: Inspect System\n(task)"]
    T5["Topic: Safety Warnings\n(concept)"]

    M1["AMM Publication\n(DITA Map)"]
    M2["Quick Reference Card\n(DITA Map)"]
    M3["Training Guide\n(DITA Map)"]

    M1 --> T1
    M1 --> T2
    M1 --> T3
    M1 --> T4
    M1 --> T5

    M2 --> T2
    M2 --> T3

    M3 --> T1
    M3 --> T5
    M3 --> T4

    style M1 fill:#4f46e5,color:#fff
    style M2 fill:#059669,color:#fff
    style M3 fill:#d97706,color:#fff
  </div>
  <p class="diagram-caption">Same topics, assembled into three different publications. Content maintained once, reused everywhere.</p>
</div>`,
  quiz: [
    { question: 'What is the defining characteristic of a well-formed topic in topic-based authoring?', options: ['It is exactly 500 words long', 'It is self-contained and addresses a single subject', 'It always includes a numbered list of steps', 'It must be written in DITA XML'], correct: 1, explanation: 'A topic is self-contained (can be understood alone) and addresses a single subject (one concept, task, or reference set). Length, format, and tool are secondary.' },
    { question: '"Every Page is Page One" means that writers should assume:', options: ['All documentation starts on page 1', 'Users may land on any topic without having read previous topics', 'Documentation should always have a numbered introduction', 'Topics must be organized alphabetically'], correct: 1, explanation: 'Users search, follow links, or jump directly to content — they do not necessarily read in order. Each topic must be self-contained because it may be the first (and only) thing a user reads.' },
    { question: 'In DITA, how is a topic reused in multiple publications?', options: ['Copy-paste the topic content into each publication file', 'Reference the topic file from multiple DITA maps using topicref elements', 'Create a separate copy of the topic for each publication', 'Topic reuse is not possible in DITA'], correct: 1, explanation: 'Topics are standalone files. Multiple DITA maps can reference the same topic file. The single source topic file is maintained once; all publications that reference it automatically use the current version.' },
    { question: 'Which title best demonstrates good topic-based authoring practice for a procedural topic?', options: ['Fuel System Chapter', 'Fuel Filter', 'Replace the Main Fuel Filter (Task)', 'General Maintenance Information'], correct: 2, explanation: '"Replace the Main Fuel Filter" is a verb phrase that tells the user exactly what they will accomplish. "(Task)" (as a type indicator) clarifies the topic type. The other titles are vague or topic-area labels, not action-oriented titles.' },
  ],
  prev: 'page-5',
  next: 'page-7',
},

{
  id: 'page-7', pageNum: 7, module: 1,
  moduleTitle: 'Documentation Fundamentals',
  title: 'Content Reuse Concepts',
  subtitle: 'Understanding the strategies, mechanisms, and ROI of content reuse in structured documentation systems.',
  duration: '20–25 min read',
  level: 'Foundational',
  searchKeywords: 'content reuse single source conref keyref variables snippets DRY principle documentation',
  objectives: [
    'Define content reuse and explain its business value',
    'Distinguish between topic reuse and element-level reuse',
    'Understand how conrefs and keyrefs enable reuse in DITA',
    'Identify common reuse scenarios in aerospace and software documentation',
    'Apply the "Don\'t Repeat Yourself" (DRY) principle to documentation',
  ],
  content: `
<h2>The Content Reuse Imperative</h2>
<p>Every organization that creates technical documentation faces the same challenge: information appears in multiple places. A safety warning about hydraulic pressure might need to appear in the AMM, the Quick Reference Card, the training manual, and the Structural Repair Manual. A product name might appear thousands of times across an entire documentation set.</p>

<p>Without content reuse mechanisms, every instance of that information must be manually updated when the information changes. With content reuse, you update it once and every reference automatically reflects the change.</p>

<div class="callout success">
  <div class="callout-title">💰 The ROI of Content Reuse</div>
  <p>Studies show that organizations with robust content reuse strategies reduce documentation maintenance costs by 30–60% and localization costs (translation) by 20–40%. At scale — thousands of topics, multiple languages — this represents millions of dollars saved.</p>
</div>

<h2>Levels of Content Reuse</h2>
<p>Content reuse happens at multiple levels of granularity:</p>

<div class="table-wrapper">
  <table>
    <thead><tr><th>Level</th><th>What is reused</th><th>DITA Mechanism</th><th>Example</th></tr></thead>
    <tbody>
      <tr><td><strong>Publication level</strong></td><td>An entire publication reused as a deliverable</td><td>Map referencing another map (mapref)</td><td>Safety Guide included in AMM and CMM</td></tr>
      <tr><td><strong>Topic level</strong></td><td>An entire topic reused across publications</td><td>topicref in multiple maps</td><td>Same "Replace Fuel Filter" task in AMM and CMM</td></tr>
      <tr><td><strong>Element level</strong></td><td>A specific element (paragraph, table, list)</td><td>conref (content reference)</td><td>Standard warning reused in 50 tasks</td></tr>
      <tr><td><strong>Variable level</strong></td><td>A word, phrase, or value</td><td>keyref (key reference)</td><td>Product name variable used 10,000 times</td></tr>
    </tbody>
  </table>
</div>

<h2>The DRY Principle in Documentation</h2>
<p>Software developers have the "Don't Repeat Yourself" (DRY) principle: every piece of knowledge should have a single, authoritative representation in a system. The same principle applies to documentation.</p>

<p>If the torque specification for bolt B-1234 is "25–30 ft-lb," that value should exist in exactly one place — a reference topic or a variable — and be referenced everywhere else. If the specification changes, you change it in one place.</p>

<h2>Conrefs: Element-Level Reuse</h2>
<p>A <strong>content reference</strong> (conref) in DITA is a mechanism that pulls content from one topic into another. The source topic contains the "master" content. All referencing topics point to that master and display its content.</p>

<div class="code-block">
  <div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Conref source — warnings library file</span></div>
  <pre><span class="tok-com">&lt;!-- File: warnings-library.dita --&gt;</span>
<span class="tok-tag">&lt;topic</span> <span class="tok-attr">id</span>=<span class="tok-val">"warnings-library"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;body&gt;</span>
    <span class="tok-tag">&lt;hazardstatement</span> <span class="tok-attr">id</span>=<span class="tok-val">"hyd-pressure-warning"</span> <span class="tok-attr">type</span>=<span class="tok-val">"warning"</span><span class="tok-tag">&gt;</span>
      <span class="tok-tag">&lt;messagepanel&gt;</span>
        <span class="tok-tag">&lt;typeofhazard&gt;</span>HIGH PRESSURE FLUID<span class="tok-tag">&lt;/typeofhazard&gt;</span>
        <span class="tok-tag">&lt;consequence&gt;</span>Contact with pressurized fluid can cause serious injury.<span class="tok-tag">&lt;/consequence&gt;</span>
        <span class="tok-tag">&lt;howtoavoid&gt;</span>Depressurize the hydraulic system before opening any line.<span class="tok-tag">&lt;/howtoavoid&gt;</span>
      <span class="tok-tag">&lt;/messagepanel&gt;</span>
    <span class="tok-tag">&lt;/hazardstatement&gt;</span>
  <span class="tok-tag">&lt;/body&gt;</span>
<span class="tok-tag">&lt;/topic&gt;</span></pre>
</div>

<div class="code-block">
  <div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Conref usage — in a maintenance task</span></div>
  <pre><span class="tok-com">&lt;!-- Used in any task that works on the hydraulic system --&gt;</span>
<span class="tok-tag">&lt;hazardstatement</span>
  <span class="tok-attr">conref</span>=<span class="tok-val">"warnings-library.dita#warnings-library/hyd-pressure-warning"</span><span class="tok-tag">/&gt;</span></pre>
</div>

<p>When this task is published, the full warning text is pulled from the library file. If the safety team updates the warning wording (regulatory change, new consequence identified), they update <em>one file</em>. All 50+ tasks that conref that warning automatically use the updated text.</p>

<h2>Keyrefs: Variable-Level Reuse</h2>
<p>A <strong>key reference</strong> (keyref) is like a variable in programming. You define a key with a value in the DITA map, and use that key throughout your topics. When the value changes (a product name changes, a phone number changes), you update the map — and every use of the key updates.</p>

<div class="code-block">
  <div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Key definition in a DITA map</span></div>
  <pre><span class="tok-tag">&lt;map&gt;</span>
  <span class="tok-tag">&lt;keydef</span> <span class="tok-attr">keys</span>=<span class="tok-val">"product-name"</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;topicmeta&gt;</span>
      <span class="tok-tag">&lt;keywords&gt;&lt;keyword&gt;</span>AeroMax Pro 5000<span class="tok-tag">&lt;/keyword&gt;&lt;/keywords&gt;</span>
    <span class="tok-tag">&lt;/topicmeta&gt;</span>
  <span class="tok-tag">&lt;/keydef&gt;</span>
<span class="tok-tag">&lt;/map&gt;</span></pre>
</div>

<div class="code-block">
  <div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Key usage in a topic</span></div>
  <pre><span class="tok-tag">&lt;p&gt;</span>The <span class="tok-tag">&lt;keyword</span> <span class="tok-attr">keyref</span>=<span class="tok-val">"product-name"</span><span class="tok-tag">/&gt;</span> hydraulic system operates at 3,000 PSI.<span class="tok-tag">&lt;/p&gt;</span></pre>
</div>

<p>When published, <code>&lt;keyword keyref="product-name"/&gt;</code> resolves to "AeroMax Pro 5000". If the product is rebranded to "AeroMax Elite 6000", one change in the map updates every occurrence across the entire documentation set.</p>

<h2>Common Reuse Scenarios</h2>
<div class="table-wrapper">
  <table>
    <thead><tr><th>Scenario</th><th>Reuse Level</th><th>DITA Mechanism</th></tr></thead>
    <tbody>
      <tr><td>Same warning in multiple procedures</td><td>Element</td><td>conref to warning library</td></tr>
      <tr><td>Product name used throughout all docs</td><td>Variable</td><td>keyref to product name key</td></tr>
      <tr><td>Same task in AMM and Quick Ref Card</td><td>Topic</td><td>topicref in both maps</td></tr>
      <tr><td>Regulatory note required in all docs</td><td>Element</td><td>conref to compliance statements file</td></tr>
      <tr><td>Version-specific content</td><td>Conditional</td><td>profiling attributes (product, platform)</td></tr>
      <tr><td>Common specifications table</td><td>Element</td><td>conref to specifications topic</td></tr>
    </tbody>
  </table>
</div>

<div class="callout tip">
  <div class="callout-title">🎯 Reuse Design Principle</div>
  <p>Design for reuse from the beginning, not as an afterthought. When planning a new documentation project, identify which content is likely to appear in multiple places and structure it as reusable from day one. Retrofitting reuse into existing content is expensive and error-prone.</p>
</div>`,
  quiz: [
    { question: 'A DITA conref allows you to:', options: ['Reference another DITA map', 'Pull content from one topic into another, creating a live link to the source', 'Define a variable value for use across topics', 'Create conditional content'], correct: 1, explanation: 'A conref pulls specific content (element) from a source topic into another topic. The content is maintained once in the source; all conref instances display the source content and update automatically.' },
    { question: 'You use a keyref for the aircraft type name throughout 500 topics. The aircraft is renamed. How many files must you edit?', options: ['500 files (one per topic)', '1 file (the DITA map with the key definition)', 'All files containing the old name must be found with grep and replaced', 'The keyref system does not support name changes'], correct: 1, explanation: 'You edit only the keydef in the DITA map. All 500 topics that use the keyref automatically resolve to the new name when published. This is the power of variable-level reuse.' },
    { question: 'Content reuse has the MOST significant ROI impact on which scenario?', options: ['A one-page quick reference card', 'A 5,000-topic documentation set in 8 languages with monthly updates', 'A README file in a GitHub repository', 'A single-page release note'], correct: 1, explanation: 'The ROI of content reuse scales with volume and frequency. 5,000 topics, 8 languages, monthly updates — at this scale, reuse mechanisms save enormous amounts of time and money.' },
    { question: 'The "Don\'t Repeat Yourself" (DRY) principle applied to documentation means:', options: ['Never write the same sentence twice in one topic', 'Every piece of information should have a single authoritative source; all other occurrences should reference that source', 'Topics should be as short as possible', 'Repetitive content should be deleted'], correct: 1, explanation: 'DRY means a single authoritative source for each piece of information, with all other occurrences referencing that source. When the source changes, all references update automatically — no manual search-and-replace.' },
  ],
  prev: 'page-6',
  next: 'page-8',
},

{
  id: 'page-8', pageNum: 8, module: 1,
  moduleTitle: 'Documentation Fundamentals',
  title: 'Documentation Workflows',
  subtitle: 'Understanding modern documentation team workflows, tools, and processes in both traditional and agile environments.',
  duration: '20–25 min read',
  level: 'Foundational',
  searchKeywords: 'documentation workflow CCMS CMS tools-of-trade agile docs-as-code review process',
  objectives: [
    'Describe a typical documentation workflow in a structured authoring environment',
    'Understand the role of Component Content Management Systems (CCMS)',
    'Compare traditional and docs-as-code workflows',
    'Identify the key tools in a modern documentation workflow',
    'Understand how documentation workflows integrate with product development cycles',
  ],
  content: `
<h2>The Modern Documentation Workflow</h2>
<p>Documentation workflows have evolved dramatically over the past decade. Understanding the landscape of approaches will help you navigate different employers and project types.</p>

<h2>Workflow 1: Traditional Aerospace Documentation Workflow</h2>
<p>The workflow you know from your aerospace experience:</p>

<div class="diagram-container">
  <div class="mermaid">
flowchart TD
    ER["Engineering\nRequirements / ECO"]
    TW["Technical Writer\nAuthors in Arbortext/Oxygen"]
    CCMS["CCMS\n(Documentum, Vasont, etc.)"]
    SME["SME Technical\nReview"]
    ED["Editorial\nReview"]
    DC["Document Control\n& Approval"]
    PUB["Published Output\n(PDF, S1000D delivery)"]
    DIST["Distribution\n(Airlines, Regulators)"]
    ER --> TW
    TW <--> CCMS
    CCMS --> SME
    SME --> ED
    ED --> DC
    DC --> PUB
    PUB --> DIST
  </div>
</div>

<p>Key characteristics:</p>
<ul>
  <li><strong>CCMS-centric:</strong> Content lives in a Component Content Management System (Documentum, Vasont, Astoria, SDL, etc.)</li>
  <li><strong>Formal change control:</strong> Every change goes through an Engineering Change Order (ECO) or equivalent</li>
  <li><strong>Regulatory oversight:</strong> Many documents require airworthiness authority review</li>
  <li><strong>Long review cycles:</strong> Weeks to months for complex manuals</li>
  <li><strong>Strict versioning:</strong> Document revisions are controlled and distributed formally</li>
</ul>

<h2>Workflow 2: Docs-as-Code Workflow</h2>
<p>Modern software documentation teams increasingly use a "docs-as-code" approach, where documentation is treated like software source code:</p>

<div class="diagram-container">
  <div class="mermaid">
flowchart LR
    DEV["Developer / Writer\nAuthors in Markdown / DITA"]
    GIT["Git Repository\n(GitHub / GitLab)"]
    PR["Pull Request\nPeer Review"]
    CI["CI/CD Pipeline\nAutomated Build"]
    STAGING["Staging\nQA Review"]
    PROD["Production\nDocumentation Site"]
    DEV --> GIT
    GIT --> PR
    PR --> GIT
    GIT --> CI
    CI --> STAGING
    STAGING --> PROD
  </div>
</div>

<p>Key characteristics:</p>
<ul>
  <li><strong>Git-based:</strong> Documentation stored in Git alongside (or near) the product code</li>
  <li><strong>Pull request reviews:</strong> Peer review happens through GitHub/GitLab PRs</li>
  <li><strong>Automated builds:</strong> Changes trigger automated documentation builds (CI/CD)</li>
  <li><strong>Rapid iteration:</strong> Documentation updates can be published in minutes</li>
  <li><strong>Lightweight tools:</strong> Often Markdown + static site generator (Docusaurus, MkDocs, Hugo)</li>
</ul>

<h2>Key Documentation Tools</h2>
<div class="table-wrapper">
  <table>
    <thead><tr><th>Tool Category</th><th>Examples</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><td>DITA Authoring</td><td>Oxygen XML Editor, XMetaL, FrameMaker</td><td>Write and edit DITA XML topics</td></tr>
      <tr><td>CCMS</td><td>Documentum, Vasont, SDL Tridion, Heretto</td><td>Manage content, versioning, workflow, assembly</td></tr>
      <tr><td>Publishing Engine</td><td>DITA-OT, WebWorks, SDL LiveContent</td><td>Transform DITA XML to output formats</td></tr>
      <tr><td>Markdown Editors</td><td>VS Code, Typora, iA Writer, Obsidian</td><td>Write Markdown documentation</td></tr>
      <tr><td>Static Site Generators</td><td>Docusaurus, MkDocs, Hugo, Jekyll</td><td>Build documentation websites from Markdown</td></tr>
      <tr><td>Version Control</td><td>Git, GitHub, GitLab, Bitbucket</td><td>Track changes, collaborate, branch, merge</td></tr>
      <tr><td>Graphics</td><td>Adobe Illustrator, Inkscape, draw.io</td><td>Create illustrations, diagrams, screenshots</td></tr>
      <tr><td>Review Tools</td><td>Oxygen Content Fusion, Google Docs, Confluence</td><td>Collect and manage reviewer feedback</td></tr>
    </tbody>
  </table>
</div>

<h2>Your Workflow Transition</h2>
<p>Moving from traditional aerospace documentation to modern DITA roles, you will likely encounter:</p>
<ul>
  <li><strong>Oxygen XML Editor</strong> instead of Arbortext (though the XML principles are identical)</li>
  <li><strong>Git and GitHub</strong> for version control instead of (or alongside) a CCMS</li>
  <li><strong>DITA</strong> instead of (or alongside) S1000D as the primary standard</li>
  <li><strong>Faster cycles</strong> — monthly or quarterly updates instead of annual revisions</li>
  <li><strong>More collaboration with developers</strong> in software/tech companies</li>
</ul>

<div class="callout tip">
  <div class="callout-title">🎯 Career Insight</div>
  <p>Many employers hiring DITA Authors specifically value candidates who understand both the traditional structured authoring world (like you do) AND the modern docs-as-code world (which you are learning). This dual fluency is genuinely rare and commands premium compensation.</p>
</div>`,
  quiz: [
    { question: 'In a docs-as-code workflow, documentation reviews are typically handled through:', options: ['Printed review copies distributed to reviewers', 'Formal Document Control sign-off process', 'Pull Requests (PRs) on GitHub or GitLab', 'Email with tracked changes in Word'], correct: 2, explanation: 'Docs-as-code teams use pull requests (PRs) for peer review — the same mechanism developers use for code review. Reviewers comment on the diff, the author addresses comments, and the PR is merged when approved.' },
    { question: 'A CCMS (Component Content Management System) primarily provides:', options: ['Word processing functionality', 'Centralized content storage, versioning, workflow management, and assembly', 'Email and communication tools', 'Web hosting for documentation'], correct: 1, explanation: 'A CCMS manages the entire content lifecycle: storing topics, tracking versions, managing review workflows, controlling access, and assembling publications from component topics.' },
    { question: 'Which toolchain represents a typical modern docs-as-code workflow for software documentation?', options: ['Microsoft Word → Email review → PDF delivery', 'Oxygen XML + DITA-OT → CCMS → PDF + HTML', 'VS Code (Markdown) → Git → Pull Request review → CI/CD build → Web'], correct: 2, explanation: 'The docs-as-code toolchain: VS Code for authoring (or similar), Git for version control, GitHub/GitLab PRs for review, and CI/CD for automated building and deployment.' },
  ],
  prev: 'page-7',
  next: 'page-9',
},

{
  id: 'page-9', pageNum: 9, module: 1,
  moduleTitle: 'Documentation Fundamentals',
  title: 'Documentation Teams',
  subtitle: 'Understanding the roles, responsibilities, and collaboration patterns in professional documentation teams.',
  duration: '15–20 min read',
  level: 'Foundational',
  searchKeywords: 'documentation team roles technical writer information architect CCMS admin project manager SME collaboration',
  objectives: [
    'Identify the key roles in a professional documentation team',
    'Understand how documentation teams collaborate with engineering, product, and quality teams',
    'Recognize common team structures in aerospace vs. software companies',
    'Understand the career growth path from DITA Author to Documentation Lead',
  ],
  content: `
<h2>Documentation Team Roles</h2>
<p>Documentation teams range from a single "lone writer" to large departments with specialized roles. Understanding the full role landscape helps you identify where you fit and where you can grow.</p>

<div class="table-wrapper">
  <table>
    <thead><tr><th>Role</th><th>Primary Responsibilities</th><th>Key Skills</th></tr></thead>
    <tbody>
      <tr><td><strong>Technical Writer / DITA Author</strong></td><td>Create and maintain documentation topics; work with SMEs; follow style guide; manage review cycle</td><td>Writing, XML/DITA, subject matter knowledge, interview skills</td></tr>
      <tr><td><strong>Information Architect</strong></td><td>Design content models, taxonomies, maps; define reuse strategy; govern information structure</td><td>IA, DITA specialization, taxonomy design, user research</td></tr>
      <tr><td><strong>CCMS / Tools Administrator</strong></td><td>Manage the authoring environment; maintain DITA-OT configs; administer CCMS; support writers</td><td>DITA-OT, XSLT, CSS, system administration</td></tr>
      <tr><td><strong>Technical Publications Manager</strong></td><td>Team leadership; project planning; stakeholder management; quality standards; budgets</td><td>Management, project planning, communication, domain expertise</td></tr>
      <tr><td><strong>Content Strategist</strong></td><td>Define documentation strategy; identify gaps; measure effectiveness; align docs with business goals</td><td>Strategy, analytics, user research, content governance</td></tr>
      <tr><td><strong>Localization Coordinator</strong></td><td>Manage translation of content into other languages; work with translation agencies; maintain translation memory</td><td>Localization process, TMS tools, XML, project management</td></tr>
      <tr><td><strong>Illustrator / Graphic Artist</strong></td><td>Create technical illustrations, exploded views, screenshots, diagrams</td><td>Adobe Illustrator, technical drawing, CAD rendering</td></tr>
    </tbody>
  </table>
</div>

<h2>Career Growth Path</h2>
<div class="diagram-container">
  <div class="mermaid">
graph LR
    JTW["Junior Technical Writer\n(0-2 years)"]
    TW["Technical Writer\n(2-5 years)"]
    SR["Senior Technical Writer\n(5-8 years)"]
    LEAD["Documentation Lead\n(8+ years)"]
    IA["Information Architect\n(Specialist)"]
    MGR["Technical Publications Manager\n(Management track)"]
    JTW --> TW --> SR --> LEAD
    SR --> IA
    LEAD --> MGR
    LEAD --> IA
  </div>
</div>

<h2>How Documentation Teams Collaborate</h2>
<p>Documentation teams do not work in isolation. Key collaboration relationships:</p>

<ul>
  <li><strong>Engineering / R&D:</strong> Provide technical information; review procedures for accuracy; answer questions about system behavior</li>
  <li><strong>Product Management:</strong> Communicate product roadmap; define scope of documentation for each release; prioritize documentation work</li>
  <li><strong>Quality Assurance:</strong> Review documentation for regulatory compliance; participate in final approval</li>
  <li><strong>Customer Support:</strong> Identify documentation gaps from support ticket patterns; prioritize FAQ topics</li>
  <li><strong>Regulatory Authorities:</strong> In aerospace, documentation may be reviewed by FAA, EASA, DGCA designated representatives</li>
  <li><strong>Customers / Operators:</strong> Provide feedback on usability and completeness; identify missing information</li>
</ul>

<div class="callout info">
  <div class="callout-title">📌 Your Target Job Titles</div>
  <p>Based on your background, target these roles: <strong>DITA Author, Technical Writer, Information Developer, Content Developer, Documentation Specialist, XML Author, Aerospace Documentation Engineer.</strong> All of these roles use the skills you are building in this course.</p>
</div>`,
  quiz: [
    { question: 'A CCMS Administrator in a documentation team is primarily responsible for:', options: ['Writing all documentation topics', 'Managing the authoring environment, DITA-OT configuration, and system administration', 'Conducting customer interviews', 'Managing the documentation budget'], correct: 1, explanation: 'The CCMS Admin maintains the technical infrastructure: the content management system, publishing pipeline (DITA-OT), XSLT stylesheets, and authoring environment configuration.' },
    { question: 'Which team is MOST likely to identify gaps in existing documentation that need to be filled?', options: ['Human Resources', 'Customer Support (based on support ticket patterns)', 'Finance', 'Marketing'], correct: 1, explanation: 'Customer Support sees the documentation gaps firsthand — every support ticket that asks something the documentation should answer is evidence of a gap. Analyzing ticket patterns is a powerful way to prioritize documentation work.' },
  ],
  prev: 'page-8',
  next: 'page-10',
},

{
  id: 'page-10', pageNum: 10, module: 1,
  moduleTitle: 'Documentation Fundamentals',
  title: 'Documentation Standards Overview',
  subtitle: 'A survey of the major standards governing technical documentation — from ATA to DITA, from S1000D to IEEE.',
  duration: '25–30 min read',
  level: 'Foundational',
  searchKeywords: 'documentation standards DITA ATA iSpec2200 S1000D IEEE ANSI MIL-SPEC OASIS style guides',
  objectives: [
    'Identify the major technical documentation standards and their governing bodies',
    'Understand the scope and application of each major standard',
    'Connect your existing aerospace standards knowledge to DITA and XML standards',
    'Recognize which standards apply to the roles you are targeting',
    'Understand how standards relate to each other',
  ],
  content: `
<h2>Why Standards Matter</h2>
<p>Imagine if every airline used a different chapter numbering system for their maintenance manuals. A technician trained by one airline would have to relearn the structure to work at another. Parts suppliers would not know which section to reference. Regulatory authorities would need to learn each airline's idiosyncratic system.</p>

<p>Standards exist to prevent this fragmentation. They create shared vocabularies, structures, and processes that enable interoperability, reduce training costs, and satisfy regulatory requirements. In your career, you will work within multiple overlapping standards simultaneously.</p>

<h2>The Standards Landscape</h2>
<div class="table-wrapper">
  <table>
    <thead><tr><th>Standard</th><th>Governing Body</th><th>Domain</th><th>What it governs</th></tr></thead>
    <tbody>
      <tr><td><strong>ATA iSpec2200</strong></td><td>Airlines for America (A4A)</td><td>Commercial aviation</td><td>Structure, content, and format of commercial aircraft maintenance documentation</td></tr>
      <tr><td><strong>S1000D</strong></td><td>ASD/AIA/ATA</td><td>Defense & commercial aviation</td><td>Production, exchange, and management of technical publications as Data Modules</td></tr>
      <tr><td><strong>DITA</strong></td><td>OASIS</td><td>General technical documentation</td><td>XML-based standard for structured authoring, content reuse, and multi-format publishing</td></tr>
      <tr><td><strong>MIL-STD-38784</strong></td><td>US Department of Defense</td><td>Military maintenance</td><td>Format and content requirements for military maintenance manuals</td></tr>
      <tr><td><strong>IETM (Interactive ETM)</strong></td><td>MIL-PRF-87269</td><td>Military</td><td>Requirements for Interactive Electronic Technical Manuals</td></tr>
      <tr><td><strong>IEEE Std 26514</strong></td><td>IEEE</td><td>Software documentation</td><td>Requirements for user documentation of software products</td></tr>
      <tr><td><strong>ISO 9001</strong></td><td>ISO</td><td>Quality management</td><td>Quality management system requirements that affect documentation processes</td></tr>
      <tr><td><strong>XML 1.0/1.1</strong></td><td>W3C</td><td>Markup language</td><td>Syntax rules for XML documents; foundation for DITA and S1000D</td></tr>
    </tbody>
  </table>
</div>

<h2>ATA iSpec2200 — Your Foundation</h2>
<p>ATA iSpec2200 (formerly ATA 100) is the de facto standard for commercial aircraft maintenance documentation. It defines:</p>
<ul>
  <li>Chapter/section/subject numbering (the ATA chapter system you know)</li>
  <li>Content requirements for each document type (AMM, IPC, FIM, etc.)</li>
  <li>Data module coding for electronic delivery</li>
  <li>Page break and effectivity conventions</li>
  <li>Warning/Caution/Note presentation requirements</li>
</ul>
<p>Every commercial aircraft manufacturer — Boeing, Airbus, Embraer, Bombardier — uses iSpec2200 as the baseline for their maintenance documentation. Your familiarity with ATA chapters is recognized worldwide in commercial aviation.</p>

<h2>S1000D — The Defense/Multi-Domain Standard</h2>
<p>S1000D is a more complex, XML-based standard used primarily in defense, naval, and increasingly commercial aviation. Key concepts:</p>
<ul>
  <li><strong>Data Modules:</strong> The atomic content unit in S1000D (analogous to DITA topics)</li>
  <li><strong>Data Module Code (DMC):</strong> A structured identifier for every data module</li>
  <li><strong>Common Source DataBase (CSDB):</strong> The repository for all S1000D data modules (analogous to DITA CCMS)</li>
  <li><strong>Business Rules:</strong> Organization-specific rules that adapt S1000D to a specific project</li>
  <li><strong>Publication Modules:</strong> Assemble data modules into publications (analogous to DITA maps)</li>
</ul>

<h2>DITA — The Open Standard for Structured Authoring</h2>
<p>DITA differs from ATA and S1000D in an important way: it is a <em>general-purpose</em> structured authoring standard, not domain-specific to aviation or defense. This means:</p>
<ul>
  <li>It is used in software, manufacturing, healthcare, financial services, aerospace, and more</li>
  <li>It has the largest ecosystem of tools (Oxygen, XMetaL, FrameMaker) and community support</li>
  <li>It is vendor-neutral and open (governed by OASIS, an open standards organization)</li>
  <li>It can be specialized to implement domain-specific structures (including S1000D-like structures)</li>
</ul>

<h2>How These Standards Relate</h2>
<div class="diagram-container">
  <div class="mermaid">
graph TD
    XML["XML 1.0 (W3C)\nFoundation markup language"]
    XML --> DITA["DITA (OASIS)\nGeneral structured authoring"]
    XML --> S1000D["S1000D (ASD/AIA/ATA)\nDefense/aviation data modules"]
    ATA["ATA iSpec2200\nCommercial aviation content rules"]
    DITA --> DITA_APP["DITA Applications:\nSoftware docs, Tech manuals,\nAerospace, Healthcare, etc."]
    S1000D --> S1000D_APP["S1000D Applications:\nMilitary systems, Naval vessels,\nDefense aircraft, Helicopters"]
    ATA --> ATA_APP["iSpec2200 Applications:\nBoeing, Airbus, Embraer\nCommercial airline fleets"]
    style XML fill:#0891b2,color:#fff
    style DITA fill:#4f46e5,color:#fff
    style S1000D fill:#dc2626,color:#fff
    style ATA fill:#d97706,color:#fff
  </div>
  <p class="diagram-caption">Documentation standards build on XML at the foundation; ATA and S1000D operate at the content/domain layer.</p>
</div>

<h2>Style Guides: The Practical Standards</h2>
<p>Beyond formal standards, every professional documentation environment uses style guides — practical rules governing how to write:</p>
<ul>
  <li><strong>Microsoft Writing Style Guide:</strong> Widely used for software documentation</li>
  <li><strong>Google Developer Documentation Style Guide:</strong> For developer-facing docs</li>
  <li><strong>Apple Style Guide:</strong> For Apple product documentation</li>
  <li><strong>Simplified Technical English (STE / ASD-STE100):</strong> Controlled language standard used heavily in aerospace (you may already be familiar)</li>
  <li><strong>Company-specific style guides:</strong> Most large organizations have their own</li>
</ul>

<div class="callout tip">
  <div class="callout-title">🎓 Module 1 Complete!</div>
  <p>You have completed the Documentation Fundamentals module. You now have a solid conceptual foundation: what documentation is, its types, why structured authoring exists, how the lifecycle works, information architecture, topic-based authoring, content reuse, workflows, teams, and standards. This foundation underpins everything that follows. Next: XML Fundamentals — the technical language that powers structured documentation.</p>
</div>`,
  quiz: [
    { question: 'ATA iSpec2200 primarily governs documentation for:', options: ['Military defense systems', 'Commercial aircraft maintenance', 'Software products', 'All industries'], correct: 1, explanation: 'ATA iSpec2200 (formerly ATA 100) is the standard for commercial aircraft maintenance documentation, used by all major commercial aircraft manufacturers and airlines worldwide.' },
    { question: 'How does DITA differ from S1000D?', options: ['DITA is proprietary; S1000D is open source', 'DITA is a general-purpose standard used across many industries; S1000D is domain-specific to defense and aviation', 'DITA is older than S1000D', 'They are the same standard with different names'], correct: 1, explanation: 'DITA (OASIS) is a general-purpose structured authoring standard applicable to any technical documentation domain. S1000D is specifically designed for defense, aviation, and naval technical publications.' },
    { question: 'Simplified Technical English (STE/ASD-STE100) is:', options: ['A programming language for XML', 'A controlled language standard that limits vocabulary and grammar to improve clarity and translatability', 'The official language of ICAO', 'A type of DITA specialization'], correct: 1, explanation: 'STE is a controlled language specification commonly used in aerospace documentation. It limits approved words, sentence length, and grammar structures to improve clarity for non-native speakers and support easier translation.' },
    { question: 'Which standard would you MOST likely use when creating documentation for a new military helicopter?', options: ['ATA iSpec2200', 'S1000D', 'DITA standard consumer version', 'IEEE 26514'], correct: 1, explanation: 'S1000D is the dominant standard for military and defense technical publications. Military helicopter documentation (for organizations like the Army, Air Force, Navy) typically follows S1000D.' },
    { question: 'XML 1.0 (W3C) is the foundation for which documentation standards?', options: ['Only DITA', 'Only S1000D', 'Both DITA and S1000D', 'ATA iSpec2200 only'], correct: 2, explanation: 'Both DITA and S1000D are built on XML 1.0 as their underlying markup language. XML defines the syntax rules; DITA and S1000D define the vocabulary (elements, attributes) and content model within that syntax.' },
  ],
  prev: 'page-9',
  next: 'page-11',
},

];
