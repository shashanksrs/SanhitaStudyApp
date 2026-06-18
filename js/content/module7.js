const MODULE7_PAGES = [
{
  id:'page-70',pageNum:70,module:7,moduleTitle:'Technical Writing',
  title:'Technical Writing Principles',
  subtitle:'The foundational principles of excellent technical writing — clarity, accuracy, usability, and audience awareness.',
  duration:'25 min read',level:'Beginner',
  searchKeywords:'technical writing principles clarity accuracy audience usability style',
  objectives:['Define the characteristics of excellent technical writing','Apply the principle of audience analysis','Write with clarity and appropriate complexity','Understand usability in documentation'],
  content:`
<h2>What is Technical Writing?</h2>
<p>Technical writing is the practice of creating documentation that helps users understand and use complex products, systems, and processes. The technical writer's job is not to demonstrate their own knowledge — it is to transfer knowledge efficiently to the reader.</p>

<h2>The Four Pillars of Technical Writing</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Pillar</th><th>Means</th><th>Questions to Ask</th></tr></thead>
<tbody>
<tr><td><strong>Clarity</strong></td><td>The reader understands exactly what you mean, without ambiguity</td><td>Is there any way this could be misread? Is the sentence structure simple? Are terms defined?</td></tr>
<tr><td><strong>Accuracy</strong></td><td>Every fact, procedure, and specification is correct</td><td>Has a subject matter expert (SME) reviewed this? Are part numbers correct? Is the procedure tested?</td></tr>
<tr><td><strong>Usability</strong></td><td>Users can find information quickly and apply it successfully</td><td>Can users find this with search? Is the structure logical? Does the procedure actually work?</td></tr>
<tr><td><strong>Audience-appropriateness</strong></td><td>The vocabulary, depth, and style match the reader's expertise and needs</td><td>Who are my readers? What do they already know? What do they need to do?</td></tr>
</tbody></table></div>

<h2>Audience Analysis</h2>
<p>Before writing a single word, ask: Who is my reader? Every writing decision — vocabulary level, assumed knowledge, amount of explanation, formality — flows from this answer.</p>
<div class="table-wrapper"><table>
<thead><tr><th>Audience Question</th><th>How it Affects Your Writing</th></tr></thead>
<tbody>
<tr><td>What is their technical expertise level?</td><td>Determines vocabulary, depth of explanation, whether to define terms</td></tr>
<tr><td>What is their role? (pilot, technician, manager, developer)</td><td>Determines what they care about, what they will use the doc for</td></tr>
<tr><td>What is their native language?</td><td>If non-English speakers are likely, use controlled language; avoid idioms</td></tr>
<tr><td>What are they trying to accomplish?</td><td>Determines what information to prioritize and what format to use</td></tr>
<tr><td>Where will they read this?</td><td>A technician in a hangar reads differently than an engineer at a desk</td></tr>
</tbody></table></div>

<h2>The Seven C's of Technical Writing</h2>
<ul>
<li><strong>Clear:</strong> Unambiguous, precise language</li>
<li><strong>Concise:</strong> No wasted words; every sentence has a purpose</li>
<li><strong>Correct:</strong> Factually accurate; no errors</li>
<li><strong>Complete:</strong> All necessary information included</li>
<li><strong>Coherent:</strong> Logical flow and organization</li>
<li><strong>Concrete:</strong> Specific, not vague ("3,000 PSI", not "high pressure")</li>
<li><strong>Consistent:</strong> Same terminology, formatting, and structure throughout</li>
</ul>`,
  quiz:[
    {question:'An aerospace technician is reading your maintenance procedure. You are unsure whether to define the term "ATA chapter." You should:',options:['Always define it — better safe than sorry','Never define it — technicians know the term','Analyze your audience: licensed aircraft maintenance technicians know ATA chapters well; no definition needed. A pilot or manager reading the same doc might need it.','Ask a colleague'],correct:2,explanation:'Audience analysis governs every writing decision. Licensed aircraft maintenance technicians universally know what an ATA chapter is — defining it wastes space and can feel condescending. For a different audience (managers, trainees, pilots), the same term might need a brief explanation.'},
  ],
  prev:'page-69',next:'page-71'
},

{id:'page-71',pageNum:71,module:7,moduleTitle:'Technical Writing',title:'Writing Style and Grammar',subtitle:'Grammar rules, active vs. passive voice, sentence structure, and the style elements that make technical writing readable.',duration:'25 min read',level:'Intermediate',searchKeywords:'technical writing style grammar active passive voice sentence structure readability',objectives:['Write in active voice for clarity and action','Construct clear, scannable sentences','Apply technical writing style guidelines','Eliminate common writing errors'],
content:`<h2>Active vs. Passive Voice</h2>
<p>Active voice: the subject performs the action. Passive voice: the subject receives the action. In technical writing — especially procedures — active voice is almost always preferable. It is shorter, clearer, and more direct.</p>
<div class="comparison">
<div class="comparison-panel bad"><div class="comparison-panel-header">Passive Voice (Avoid)</div><ul><li>The filter should be replaced annually.</li><li>The hydraulic system must be depressurized before maintenance is performed.</li><li>The warning should be observed by the technician.</li><li>The valve was opened by pressing the handle.</li></ul></div>
<div class="comparison-panel good"><div class="comparison-panel-header">Active Voice (Preferred)</div><ul><li>Replace the filter annually.</li><li>Depressurize the hydraulic system before performing maintenance.</li><li>Observe the warning.</li><li>Press the handle to open the valve.</li></ul></div>
</div>
<p>When is passive voice acceptable? When the actor is unknown or irrelevant: "The aircraft was manufactured in 1998." We don't know or care who manufactured it — passive is fine.</p>

<h2>Sentence Structure</h2>
<ul>
<li><strong>One idea per sentence:</strong> If your sentence has three clauses and two commas, split it</li>
<li><strong>Lead with the action:</strong> "Remove the panel" not "The panel needs to be removed at this point"</li>
<li><strong>Parallel structure:</strong> List items should be grammatically parallel — "Inspect, clean, and replace" not "Inspect, cleaning, then you should replace"</li>
<li><strong>Front-heavy sentences:</strong> Put important information first; readers scan, not read</li>
</ul>

<h2>Common Technical Writing Errors</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Error</th><th>Example</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>Nominalizations</td><td>"Make a determination of" </td><td>"Determine"</td></tr>
<tr><td>Vague quantifiers</td><td>"Tighten until snug"</td><td>"Torque to 25 ft-lb"</td></tr>
<tr><td>Ambiguous pronouns</td><td>"Replace the valve and inspect it" (it = valve? or something else?)</td><td>"Replace the valve. Inspect the replacement valve."</td></tr>
<tr><td>Compound sentences instead of steps</td><td>"Remove the cap and drain the fluid and replace the seal"</td><td>Three separate numbered steps</td></tr>
<tr><td>Buried verbs</td><td>"Perform an inspection of the filter"</td><td>"Inspect the filter"</td></tr>
<tr><td>Stating the obvious</td><td>"It is important to note that..."</td><td>Just state the important thing directly</td></tr>
</tbody></table></div>`,
quiz:[{question:'Which of these rewrite fixes the most errors in "It is important that the depressurization of the hydraulic system should be performed by the technician prior to the commencement of maintenance activities"?',options:['It is important to depressurize the hydraulic system before maintenance.','Depressurize the hydraulic system before maintenance.','The hydraulic system depressurization should be done first.','All of the above are equivalent improvements.'],correct:1,explanation:'"Depressurize the hydraulic system before maintenance." is the strongest: it uses active imperative voice (best for procedures), eliminates nominalization (depressurization → depressurize), removes "It is important that" (stating the obvious), removes passive "should be performed by the technician," and cuts word count from 25 to 6.'}],
prev:'page-70',next:'page-72'},

{id:'page-72',pageNum:72,module:7,moduleTitle:'Technical Writing',title:'Information Architecture',subtitle:'How to organize documentation so readers find information instantly — from high-level structure to navigation design.',duration:'25 min read',level:'Intermediate',searchKeywords:'information architecture IA navigation structure organization hierarchy findability documentation design',objectives:['Apply information architecture principles','Design effective document hierarchies','Write navigation elements (TOC, headings) for findability','Apply Every Page is Page One principles'],
content:`<h2>What is Information Architecture?</h2>
<p>Information Architecture (IA) for technical documentation is the practice of organizing, structuring, and labeling content so users can find what they need quickly. Good IA is invisible — users find information without noticing the structure. Bad IA causes users to abandon documentation and call support.</p>

<h2>The Three Questions of IA</h2>
<ol>
<li><strong>Where am I?</strong> — Navigation context (breadcrumbs, section headers)</li>
<li><strong>What's here?</strong> — Content labeling (headings, topic titles, descriptions)</li>
<li><strong>Where can I go?</strong> — Navigation paths (TOC, related links, next/prev)</li>
</ol>

<h2>Document Structure Principles</h2>
<ul>
<li><strong>Task-oriented structure:</strong> Organize around what users do, not how the product is designed. "Replacing the Fuel Filter" is more findable than "Chapter 7, Section 3, Sub-section 4"</li>
<li><strong>Progressive disclosure:</strong> Overview → details. Don't dump all information at once</li>
<li><strong>Chunking:</strong> Break content into small, scannable units. No walls of text.</li>
<li><strong>Consistent heading levels:</strong> H2 for major sections, H3 for sub-sections, H4 for sub-sub-sections (and stop there)</li>
</ul>

<h2>Every Page is Page One</h2>
<p>In online documentation, users frequently arrive at a topic from a search engine, not from the beginning of the documentation. They haven't read the introduction or the preceding chapters. This is Mark Baker's "Every Page is Page One" concept.</p>
<p>Implication: every topic must be self-contained enough to be useful without the reader having read anything else. Assume zero context from other pages. This aligns perfectly with DITA's topic-based authoring philosophy.</p>

<h2>Writing Effective Headings</h2>
<div class="comparison">
<div class="comparison-panel bad"><div class="comparison-panel-header">Poor Headings</div><ul><li>Introduction</li><li>General Information</li><li>System</li><li>Notes</li><li>Other Considerations</li></ul></div>
<div class="comparison-panel good"><div class="comparison-panel-header">Effective Headings</div><ul><li>Hydraulic System Architecture Overview</li><li>When to Replace the Main Fuel Filter</li><li>System A: Engine-Driven Pump</li><li>Safety Precautions Before Maintenance</li><li>Approved Hydraulic Fluid Types</li></ul></div>
</div>`,
quiz:[{question:'The "Every Page is Page One" principle in online documentation means:',options:['Every documentation project must start with an introduction page','Each topic should be self-contained enough to be useful to a reader who arrives directly from a search, without reading preceding topics','Every page should be exactly one screen long','Documentation should be organized alphabetically'],correct:1,explanation:'Mark Baker\'s EPPO principle recognizes that online readers rarely follow linear documentation — they arrive from search or links at any topic. Therefore, each topic should provide enough context (orientation, links to prerequisites) to be usable independently, without relying on the reader having read previous content.'}],
prev:'page-71',next:'page-73'},

{id:'page-73',pageNum:73,module:7,moduleTitle:'Technical Writing',title:'Writing for International Audiences',subtitle:'Controlled language, localization-friendly writing, and global documentation best practices.',duration:'20 min read',level:'Intermediate',searchKeywords:'controlled language localization translation international global ASD-STE100 simplified technical English',objectives:['Apply controlled language principles','Write localization-friendly content','Understand ASD-STE100 Simplified Technical English','Reduce translation costs through better writing'],
content:`<h2>Why Write for Global Audiences?</h2>
<p>In aerospace, documentation is used worldwide — by maintenance technicians in Germany, Japan, Brazil, and Indonesia. Many readers are non-native English speakers. Idioms, complex sentences, and inconsistent terminology create comprehension problems and expensive translation issues.</p>

<h2>ASD-STE100: Simplified Technical English</h2>
<p>ASD-STE100 (Simplified Technical English) is an international standard for technical writing, developed by the Aerospace and Defence Industries Association of Europe. It specifies:</p>
<div class="table-wrapper"><table>
<thead><tr><th>STE Rule</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Use words from the approved word list</td><td>"connect" not "mate" or "engage" (unless in approved list)</td></tr>
<tr><td>One word, one meaning (no homonyms)</td><td>"Service" means only one thing in your document — don't use it as noun AND verb</td></tr>
<tr><td>Max 20 words per sentence (procedures); 25 for descriptive</td><td>Split long sentences into shorter ones</td></tr>
<tr><td>Use active voice</td><td>"Remove the filter" not "The filter must be removed"</td></tr>
<tr><td>Use simple verb tenses</td><td>Simple present and past; avoid conditionals when possible</td></tr>
<tr><td>Write one instruction per sentence (procedures)</td><td>One action per step — never combine actions</td></tr>
</tbody></table></div>

<h2>Controlled Language Principles (General)</h2>
<ul>
<li><strong>No idioms or colloquialisms:</strong> "Fire up the system" → "Start the system"</li>
<li><strong>No humor or irony:</strong> Cultural and translation problems</li>
<li><strong>No contractions:</strong> "Do not" not "Don't" (clearer in translation)</li>
<li><strong>Consistent terminology:</strong> Pick one term and use it everywhere. Never use "valve," "fitting," and "port" interchangeably for the same part</li>
<li><strong>Define abbreviations on first use</strong></li>
<li><strong>Write short, simple sentences</strong></li>
</ul>

<h2>Localization-Friendly Writing in DITA</h2>
<p>DITA's structure supports localization: each topic is a separate file (sent for translation independently), conrefs translate content once (the source translates; all conref instances update), and keyrefs allow product-specific terminology to be defined in one place per language.</p>`,
quiz:[{question:'ASD-STE100 Simplified Technical English is most valuable for aerospace documentation because:',options:['It increases document length and completeness','It reduces translation costs and improves comprehension for non-native English readers using controlled vocabulary and simplified sentence structures','It eliminates the need for XML or DITA markup','It replaces the need for a technical editor'],correct:1,explanation:'STE100 improves comprehension for global, multilingual audiences (critical in aerospace) and reduces translation costs because: simpler sentences translate more consistently, translation memory reuse rates improve, and controlled terminology prevents ambiguous translations.'}],
prev:'page-72',next:'page-74'},

{id:'page-74',pageNum:74,module:7,moduleTitle:'Technical Writing',title:'SME Collaboration',subtitle:'How to work effectively with Subject Matter Experts — the most critical collaboration skill for technical writers.',duration:'20 min read',level:'Intermediate',searchKeywords:'SME subject matter expert collaboration interview technical review process aerospace',objectives:['Develop effective SME interview techniques','Manage the review process professionally','Give and receive feedback productively','Build long-term SME relationships'],
content:`<h2>The Technical Writer + SME Relationship</h2>
<p>A technical writer's single most valuable skill is the ability to extract information from subject matter experts (SMEs) — engineers, pilots, technicians, scientists — and transform it into clear, accurate documentation.</p>
<p>SMEs know the subject; writers know how to communicate it. Neither can do the job alone. The best writer-SME relationships are collaborative partnerships where both respect each other's expertise.</p>

<h2>Preparing for SME Interviews</h2>
<p>Never walk into an SME meeting unprepared. Your time with experts is limited and valuable. Before the meeting:</p>
<ul>
<li>Research the topic thoroughly — read existing documentation, previous versions, related standards</li>
<li>Prepare specific questions — "How does X work?" is weaker than "I understand X does Y, but I'm unclear about Z. Can you explain Z?"</li>
<li>Send questions in advance — SMEs appreciate knowing what to prepare</li>
<li>Bring a recording device (with permission) or take detailed notes</li>
<li>Prepare a draft if possible — SMEs can review and correct faster than they can explain from scratch</li>
</ul>

<h2>Productive SME Interview Techniques</h2>
<ul>
<li><strong>Ask "show me" not just "tell me":</strong> Watching an SME perform a procedure reveals steps they forget to verbalize</li>
<li><strong>Ask for the "why":</strong> Understanding rationale helps you write more accurate, usable content</li>
<li><strong>Ask for edge cases:</strong> "What can go wrong?" reveals warnings and cautions you need to document</li>
<li><strong>Verify your understanding:</strong> "So if I understand correctly, when X happens, the technician should Y?" SMEs correct misconceptions immediately</li>
<li><strong>Ask for examples:</strong> Real examples make abstract concepts concrete</li>
</ul>

<h2>Managing the Review Process</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Review Stage</th><th>Who Reviews</th><th>Checks for</th></tr></thead>
<tbody>
<tr><td>Technical review</td><td>SME (engineer, technician)</td><td>Technical accuracy, missing steps, incorrect specifications</td></tr>
<tr><td>Editorial review</td><td>Technical editor or peer writer</td><td>Style, grammar, consistency, clarity</td></tr>
<tr><td>Legal/Regulatory review</td><td>Legal, safety, regulatory affairs</td><td>Compliance, liability, regulatory requirements</td></tr>
<tr><td>Usability review</td><td>End user or user proxy</td><td>Can target users actually follow the procedure?</td></tr>
</tbody></table></div>`,
quiz:[{question:'An SME reviews your procedure and says "Step 4 is wrong — you need to depressurize BEFORE opening the valve, not after." You should:',options:['Defend your original procedure if you believe it is correct','Thank the SME, update the procedure, and ask them to review the change','Ignore the comment if you got it from another source','Ask for a written explanation before making changes'],correct:1,explanation:'SME review comments on technical accuracy must be taken seriously. When an engineer or technician says a procedure step is wrong, that is critical information — update the content and ask the SME to verify the correction. Technical accuracy is non-negotiable in aerospace documentation.'}],
prev:'page-73',next:'page-75'},

{id:'page-75',pageNum:75,module:7,moduleTitle:'Technical Writing',title:'Documentation Types',subtitle:'The full range of technical documentation types — their purpose, structure, and where you\'ll find them in aerospace.',duration:'20 min read',level:'Intermediate',searchKeywords:'documentation types manual procedures guide specification reference release notes API',objectives:['Identify and describe the main technical documentation types','Match documentation type to purpose and audience','Apply the right format for different documentation needs'],
content:`<h2>Major Technical Documentation Types</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Type</th><th>Purpose</th><th>Aerospace Example</th></tr></thead>
<tbody>
<tr><td>User Guide / Manual</td><td>Comprehensive reference for using a product</td><td>Aircraft Flight Manual (AFM), Pilot Operating Handbook (POH)</td></tr>
<tr><td>Maintenance Manual</td><td>Procedures for maintaining and repairing</td><td>Aircraft Maintenance Manual (AMM)</td></tr>
<tr><td>Component Maintenance Manual</td><td>Overhaul procedures for a specific component</td><td>CMM for hydraulic pump</td></tr>
<tr><td>Illustrated Parts Catalog</td><td>Parts identification and ordering information</td><td>IPC / AIPC</td></tr>
<tr><td>Structural Repair Manual</td><td>Procedures for structural damage assessment and repair</td><td>SRM</td></tr>
<tr><td>Wiring Diagram Manual</td><td>Electrical system diagrams</td><td>WDM / WDS</td></tr>
<tr><td>Quick Reference Card</td><td>Short-form summary of critical procedures</td><td>QRC for emergency procedures</td></tr>
<tr><td>Installation Manual</td><td>How to install equipment</td><td>STC modification installation instructions</td></tr>
<tr><td>Engineering Order / Service Bulletin</td><td>Mandatory or recommended modifications</td><td>Boeing SB, Airbus ASB</td></tr>
<tr><td>API Documentation</td><td>Reference for software interfaces</td><td>Avionics software integration API docs</td></tr>
<tr><td>Training Material</td><td>Instructional content for skill development</td><td>Maintenance type training, pilot ground school</td></tr>
</tbody></table></div>

<h2>ATA Chapters in Aerospace Documentation</h2>
<p>ATA iSpec2200 divides aircraft systems into numbered chapters (ATA chapters). All AMM content is organized by ATA chapter — this is the universal organizational standard for commercial aviation maintenance documentation.</p>
<div class="table-wrapper"><table>
<thead><tr><th>ATA Chapter</th><th>System</th></tr></thead>
<tbody>
<tr><td>ATA 21</td><td>Air Conditioning</td></tr>
<tr><td>ATA 24</td><td>Electrical Power</td></tr>
<tr><td>ATA 27</td><td>Flight Controls</td></tr>
<tr><td>ATA 28</td><td>Fuel</td></tr>
<tr><td>ATA 29</td><td>Hydraulic Power</td></tr>
<tr><td>ATA 32</td><td>Landing Gear</td></tr>
<tr><td>ATA 34</td><td>Navigation</td></tr>
<tr><td>ATA 71</td><td>Power Plant (Engine)</td></tr>
</tbody></table></div>`,
quiz:[{question:'An Aircraft Maintenance Manual (AMM) and a Component Maintenance Manual (CMM) differ in that:',options:['AMMs are for pilots; CMMs are for mechanics','AMMs cover line and hangar maintenance for the aircraft as a whole; CMMs provide overhaul and repair procedures for specific components','AMMs use DITA; CMMs use S1000D','CMMs are shorter than AMMs'],correct:1,explanation:'An AMM covers maintenance, inspection, and repair procedures for the aircraft-level system (organized by ATA chapter). A CMM covers a single component (a pump, valve, or LRU) in detail — disassembly, cleaning, inspection limits, reassembly, and testing. CMMs are typically supplied by the component manufacturer.'}],
prev:'page-74',next:'page-76'},

{id:'page-76',pageNum:76,module:7,moduleTitle:'Technical Writing',title:'Technical Writing Exercises',subtitle:'Practice exercises for technical writing skills — rewriting, audience analysis, and documentation structure.',duration:'30 min',level:'Hands-on',searchKeywords:'technical writing exercises practice rewriting audience structure style',objectives:['Apply writing principles to real content','Rewrite passive voice content to active','Analyze and improve document structure'],
content:`<h2>Exercise 7.1 — Rewrite for Clarity</h2>
<div class="exercise-box"><div class="exercise-box-header"><div class="exercise-icon">✏️</div><div><div class="exercise-title">Active Voice and Clarity Rewrite</div></div></div>
<p>Rewrite each of the following sentences to be clearer, more concise, and use active imperative voice:</p>
<ol class="exercise-steps">
<li>"It is recommended that prior to the commencement of maintenance activities, a depressurization of the hydraulic system should be performed."</li>
<li>"The replacement of the fuel filter should be carried out by a licensed aircraft maintenance engineer when the differential pressure indicator has been extended."</li>
<li>"Inspection of all bolts for proper torque specification values must be performed."</li>
<li>"It is important to note that the use of unapproved fluids may result in system damage."</li>
<li>"The connection of the hydraulic hose to the fitting should be made by applying the appropriate torque value as specified in the torque table."</li>
</ol>
<p><em>Write your rewritten versions, then compare with the suggested answers below the exercise.</em></p>
<div class="expandable"><button class="expandable-trigger">Show Suggested Rewrites</button><div class="expandable-content"><ol><li>Depressurize the hydraulic system before starting maintenance.</li><li>Replace the fuel filter when the differential pressure indicator extends. (Perform by licensed AME.)</li><li>Inspect all bolts for correct torque values.</li><li>Using unapproved fluids will damage the system.</li><li>Connect the hydraulic hose to the fitting. Torque to the value specified in the torque table.</li></ol></div></div>
</div>

<h2>Exercise 7.2 — Audience Analysis</h2>
<div class="exercise-box"><div class="exercise-box-header"><div class="exercise-icon">👥</div><div><div class="exercise-title">Write for Two Different Audiences</div></div></div>
<p>Write a one-paragraph description of "hydraulic system failure" for two different audiences:</p>
<ol class="exercise-steps">
<li>Audience A: A licensed aircraft maintenance technician (LAME) with 10 years of experience on the Boeing 737</li>
<li>Audience B: An airline passenger asking "what went wrong with the plane?"</li>
<li>Compare your two versions. Note the vocabulary differences, level of detail, terminology choices</li>
</ol></div>

<h2>Exercise 7.3 — Improve Documentation Structure</h2>
<div class="exercise-box"><div class="exercise-box-header"><div class="exercise-icon">📋</div><div><div class="exercise-title">Restructure for Findability</div></div></div>
<p>Take any existing documentation you have worked with (from your BHEL or Roxcel experience) and analyze its structure:</p>
<ol class="exercise-steps">
<li>Is the content organized around user tasks or product structure?</li>
<li>Do headings clearly describe what the section contains?</li>
<li>Can a user arriving from a search engine understand the section without context?</li>
<li>Write a restructuring plan: list 5 specific improvements you would make</li>
</ol></div>`,
quiz:[{question:'After completing Exercise 7.1, which of these rewrites is most effective for a maintenance procedure?',options:['"Hydraulic system depressurization must be performed."','"Depressurize the hydraulic system."','"Please ensure the hydraulic system is depressurized."','"It is necessary to depressurize the hydraulic system."'],correct:1,explanation:'"Depressurize the hydraulic system." uses: active imperative voice (direct command), no unnecessary words, starts with the action verb, no qualifiers ("must", "please", "necessary"). This is the ideal form for a maintenance procedure step.'}],
prev:'page-75',next:'page-77'},

{id:'page-77',pageNum:77,module:7,moduleTitle:'Technical Writing',title:'Technical Writing Interview Prep',subtitle:'Technical writing interview questions, portfolio advice, and how to talk about your experience confidently.',duration:'25 min read',level:'Interview Prep',searchKeywords:'technical writing interview questions portfolio experience DITA XML documentation',objectives:['Answer technical writing interview questions confidently','Describe your portfolio projects effectively','Discuss your documentation experience','Handle difficult interview scenarios'],
content:`<h2>Technical Writing Interview Questions and Answers</h2>
<div class="qa-item"><div class="qa-question">Q: Walk me through your documentation process, from receiving a request to delivering the finished document.</div><div class="qa-answer"><p>My process: (1) Scope definition — clarify the deliverable, audience, format, and deadline. (2) Research — review existing documentation, relevant standards, and related products. (3) SME interviews — schedule time with engineers/technicians, prepare specific questions, bring drafts for correction rather than starting cold. (4) First draft — write the structure first (topic titles, headings, outline) then fill content. (5) Self-review — read for accuracy, clarity, and style consistency. (6) Technical review — send to SME for accuracy verification. (7) Editorial review — peer or editor for style/grammar. (8) Revise and finalize. (9) Deliver in required format and version control the source files.</p></div></div>

<div class="qa-item"><div class="qa-question">Q: How do you handle a situation where an SME won't return your review requests?</div><div class="qa-answer"><p>First, I try to understand why — are they busy, unclear about what's needed, or uncomfortable reviewing documentation? I make it as easy as possible: provide a draft they can annotate rather than asking them to write from scratch, give specific questions they can answer in 5 minutes, and clearly communicate the deadline and its consequences. I escalate to my manager or the SME's manager only when the situation is blocking publication. I document all contact attempts in case the record is needed later. And I build the relationship proactively — investing time to understand their work makes future reviews smoother.</p></div></div>

<div class="qa-item"><div class="qa-question">Q: Describe your experience with DITA or XML-based documentation.</div><div class="qa-answer"><p>[Customize with your actual experience] I have [X years] of experience with [Arbortext Editor / structured documentation / aerospace technical manuals]. I am familiar with structured authoring principles — topic-based content, separation of content from formatting, and single-source publishing. I am actively developing my DITA skills, including concept/task/reference topic authoring, map creation, conref and keyref reuse mechanisms, and Oxygen XML Editor. I have hands-on experience with [specific tools and outputs from your current role].</p></div></div>

<div class="qa-item"><div class="qa-question">Q: What makes aerospace technical documentation uniquely challenging?</div><div class="qa-answer"><p>Aerospace documentation is safety-critical — errors can lead to accidents, injuries, or fatalities. This creates: extremely high accuracy requirements (SME and QA review cycles are thorough); strict regulatory compliance (FAA, EASA approval for certain documentation types); complex content reuse requirements (the same procedure might apply to 5 aircraft variants with minor differences); ATA iSpec2200 or S1000D structural standards compliance; and often enormous scale — an AMM for a commercial airliner can have hundreds of thousands of pages. The combination of safety criticality, regulatory compliance, and massive scale makes aerospace documentation among the most demanding technical writing specializations.</p></div></div>`,
quiz:[{question:'In a technical writing interview, the interviewer asks you to describe a time when a document you wrote had a factual error discovered after publication. The best response approach is:',options:['Claim you have never made an error in documentation','Describe a real or realistic scenario: what the error was, how it was discovered, what you did immediately to correct it, and what process you put in place to prevent similar errors','Blame the SME who reviewed the document','Say documentation errors are always minor and not worth discussing'],correct:1,explanation:'Interviewers expect honest, constructive answers about mistakes. They want to see: self-awareness (you acknowledge errors happen), accountability (you take ownership), corrective action (you fixed it quickly), and learning (you improved the process). Perfect answers deny reality; great answers demonstrate professional maturity.'}],
prev:'page-76',next:'page-78'},

{id:'page-78',pageNum:78,module:7,moduleTitle:'Technical Writing',title:'Building Your Documentation Portfolio',subtitle:'Creating a compelling technical writing portfolio that gets you hired — what to include, how to present it.',duration:'20 min read',level:'Career',searchKeywords:'technical writing portfolio projects showcase samples career DITA XML aerospace',objectives:['Understand what a technical writing portfolio needs','Create portfolio-worthy DITA and documentation samples','Present your work effectively online','Tailor your portfolio for aerospace and DITA roles'],
content:`<h2>Why Portfolio Matters</h2>
<p>Technical writing is a craft field — hiring managers want to see your work, not just read about it. A portfolio of actual documentation samples is the most powerful tool in your job search. For DITA/aerospace roles, showing actual DITA XML output, real structured content, and professional-quality deliverables differentiates you from candidates who only say they know DITA.</p>

<h2>What to Include</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Portfolio Item</th><th>What it demonstrates</th><th>Priority</th></tr></thead>
<tbody>
<tr><td>DITA topic set (concept + task + reference) with map and published HTML5 output</td><td>DITA proficiency, tool use, publishing knowledge</td><td>Essential</td></tr>
<tr><td>DITA map with conditional processing (DITAVAL, multiple outputs)</td><td>Advanced DITA skills, variant management</td><td>High</td></tr>
<tr><td>Technical procedure with conrefs and keyrefs</td><td>Content reuse implementation</td><td>High</td></tr>
<tr><td>Before/after rewrite samples</td><td>Writing quality, editorial judgment</td><td>Medium</td></tr>
<tr><td>GitHub repository with DITA source files and documentation</td><td>Git skills, professional workflow, version control</td><td>High</td></tr>
<tr><td>Markdown documentation site (Docusaurus, MkDocs)</td><td>Docs-as-code skills, web publishing</td><td>Medium</td></tr>
<tr><td>PDF from DITA (professional layout)</td><td>Publishing pipeline, output quality</td><td>Medium</td></tr>
</tbody></table></div>

<h2>Portfolio Presentation</h2>
<p>Host your portfolio publicly and link it from your resume and LinkedIn. Options:</p>
<ul>
<li><strong>GitHub repository:</strong> Source files + README describing your work. This is the best option for DITA roles — hiring managers can see your actual XML source.</li>
<li><strong>GitHub Pages:</strong> Host your DITA-OT HTML5 output as a live website — interviewers can actually read your documentation</li>
<li><strong>Portfolio site:</strong> A simple page linking to all your samples</li>
<li><strong>Google Drive / OneDrive:</strong> PDFs and documents for sharing in applications</li>
</ul>

<h2>The 10 Portfolio Projects in This Course</h2>
<p>The Projects section of this learning portal contains 10 carefully designed portfolio projects that will demonstrate your skills to aerospace and technical writing employers. Complete these projects and publish them to GitHub — then you have a real, professional portfolio ready for your job search.</p>`,
quiz:[{question:'For a DITA/aerospace technical writer portfolio, which item provides the strongest demonstration of skills?',options:['A Word document listing your skills','A published DITA documentation set — source XML files on GitHub plus rendered HTML5 and PDF output showing the full authoring-to-publishing workflow','A LinkedIn profile with DITA listed as a skill','Screenshots of Oxygen XML Editor'],correct:1,explanation:'A published DITA set demonstrates the complete skill chain: DITA authoring, map assembly, conref/keyref reuse, validation, and publishing. Source on GitHub shows Git workflow. Published output shows quality. Together, they prove you can do the job — not just that you\'ve learned about it.'}],
prev:'page-77',next:'page-79'},

{id:'page-79',pageNum:79,module:7,moduleTitle:'Technical Writing',title:'Career Roadmap',subtitle:'Your step-by-step career transition plan from aerospace technical publications to modern DITA documentation roles.',duration:'15 min read',level:'Career',searchKeywords:'career roadmap plan timeline DITA technical writer aerospace transition job search',objectives:['Create a 6-month learning and portfolio-building plan','Identify target job roles and companies','Understand what employers are looking for','Take concrete next steps today'],
content:`<h2>Your Target Roles</h2>
<p>With your aerospace technical publications background plus the DITA/XML/Git/Markdown skills you are building, you are qualified for:</p>
<div class="table-wrapper"><table>
<thead><tr><th>Role Title</th><th>Typical Employer</th><th>Key Skills Required</th></tr></thead>
<tbody>
<tr><td>DITA Author / Information Developer</td><td>Boeing, Airbus, Honeywell, Embraer, GE Aviation, CAE</td><td>DITA, Oxygen, CCMS, ATA standards</td></tr>
<tr><td>Technical Publications Engineer</td><td>Indian aerospace OEMs: HAL, NAL, DRDO, Tata Advanced Systems</td><td>DITA/S1000D, Arbortext, structured authoring</td></tr>
<tr><td>Technical Writer (Software)</td><td>IBM, Oracle, Atlassian, Zoho</td><td>DITA or Markdown, API docs, Git</td></tr>
<tr><td>Documentation Specialist</td><td>Any large manufacturer</td><td>DITA, XML, structured content</td></tr>
<tr><td>Information Architect</td><td>Large aerospace/defense primes</td><td>Advanced DITA, CCMS, IA principles</td></tr>
</tbody></table></div>

<h2>6-Month Roadmap</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Month</th><th>Focus</th><th>Deliverable</th></tr></thead>
<tbody>
<tr><td>1</td><td>Complete Module 3 (DITA) + Module 4 (Oxygen). Write your first 5 DITA topics.</td><td>DITA topic set on GitHub</td></tr>
<tr><td>2</td><td>Complete Modules 5–6 (Markdown, Git). Start Portfolio Projects 1–3.</td><td>GitHub repository with README + 3 portfolio projects</td></tr>
<tr><td>3</td><td>Complete Module 7–8. Finish Portfolio Projects 4–7.</td><td>Published DITA HTML5 site on GitHub Pages</td></tr>
<tr><td>4</td><td>Finish all 10 Portfolio Projects. Study interview questions (all 550+).</td><td>Complete portfolio ready to share</td></tr>
<tr><td>5</td><td>Apply for jobs. Tailor your resume. Practice interviews.</td><td>5+ job applications submitted</td></tr>
<tr><td>6</td><td>Interview season. Leverage your portfolio in interviews.</td><td>Offer received</td></tr>
</tbody></table></div>

<div class="callout success"><div class="callout-title">✓ Your Biggest Advantage</div>
<p>You already have 8+ years of aerospace technical publications experience — the domain knowledge that takes years to acquire. You are adding the modern tools (DITA, Oxygen, Git) on top of an existing foundation. That combination — aerospace domain knowledge + modern structured authoring skills — is rare and extremely valuable.</p></div>`,
quiz:[{question:'Your LinkedIn summary should emphasize which unique combination for DITA/aerospace roles?',options:['That you are learning DITA for the first time','Your existing aerospace domain knowledge (BHEL, Roxcel experience) PLUS your new DITA/XML/Git skills — the combination that few candidates have','Only your new technical skills since they are more relevant','That you have a degree in technical writing'],correct:1,explanation:'For DITA/aerospace roles, your competitive advantage is the combination: aerospace domain knowledge (you know what an AMM is, how ATA chapters work, what a CMM contains, how maintenance procedures are structured) PLUS modern DITA skills. This combination is rare. Candidates who only have DITA skills lack the domain; those who only have domain knowledge lack the tools. You are building both.'}],
prev:'page-78',next:'page-80'},
];
