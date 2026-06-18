const MODULE8_PAGES = [
{
  id:'page-80',pageNum:80,module:8,moduleTitle:'Aerospace & DITA',
  title:'Aerospace Documentation Standards',
  subtitle:'ATA iSpec2200, S1000D, and how they relate to DITA — the regulatory and standards landscape for aviation documentation.',
  duration:'25 min read',level:'Intermediate',
  searchKeywords:'aerospace documentation standards ATA iSpec2200 S1000D DITA comparison aviation',
  objectives:['Understand ATA iSpec2200 and its role in commercial aviation','Compare S1000D and DITA','Know which standards apply to which aerospace sectors','Position your DITA skills within the aerospace documentation landscape'],
  content:`
<h2>The Standards Landscape</h2>
<p>Aerospace documentation does not exist in a vacuum — it is governed by international standards that specify how content must be structured, what information must be included, and how it must be delivered. Understanding these standards is essential for any technical writer in aerospace.</p>

<h2>ATA iSpec2200</h2>
<p>ATA iSpec2200 (formerly ATA100 / ATA Spec 2200) is the specification published by Airlines for America (A4A) that defines the standard for commercial aviation maintenance documentation. It specifies:</p>
<ul>
<li>The ATA chapter numbering system (ATA 21 = Air Conditioning, ATA 29 = Hydraulic Power, etc.)</li>
<li>Document types: AMM, CMM, IPC, WDM, SRM, etc.</li>
<li>Data module requirements and content structure</li>
<li>Digital data delivery requirements (SGM, XML)</li>
</ul>
<p>ATA iSpec2200 supports DITA as a content representation format. Boeing's Technical Publications system is built on DITA + iSpec2200 principles.</p>

<h2>S1000D</h2>
<p>S1000D is an international specification for technical publications used primarily in military aviation, defense, and some civil aviation. It uses XML data modules and supports:</p>
<ul>
<li>Data Module Codes (DMC) — standardized identifiers for every data module</li>
<li>Common Source Data Base (CSDB) — the repository of all data modules</li>
<li>Multiple output formats: interactive electronic technical manuals (IETM), PDF, HTML</li>
<li>Applicability filtering (similar to DITA conditional processing)</li>
</ul>

<h2>DITA vs. ATA iSpec2200 vs. S1000D</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Dimension</th><th>DITA</th><th>ATA iSpec2200</th><th>S1000D</th></tr></thead>
<tbody>
<tr><td>Origin</td><td>IBM / OASIS</td><td>Airlines for America (A4A)</td><td>AeroSpace and Defence Industries Association of Europe (ASD)</td></tr>
<tr><td>Primary sector</td><td>General technical documentation; software; aerospace</td><td>Commercial aviation</td><td>Military, defense, some civil</td></tr>
<tr><td>Document type</td><td>Topics (concept, task, reference)</td><td>Data modules (structured, XML)</td><td>Data modules (typed, XML)</td></tr>
<tr><td>Reuse mechanism</td><td>Conref, keyref</td><td>DMC references</td><td>CSDB references, applicability</td></tr>
<tr><td>Conditional processing</td><td>Profiling attributes + DITAVAL</td><td>Applicability filtering</td><td>Applicability (conditions, product attributes)</td></tr>
<tr><td>Freely available?</td><td>Yes — open standard</td><td>Fee-based access for full spec</td><td>Fee-based access for full spec</td></tr>
</tbody></table></div>

<div class="callout tip"><div class="callout-title">💡 Your Experience Bridge</div>
<p>Your experience with Arbortext Editor and aerospace documentation at BHEL maps directly to DITA authoring. Arbortext uses S1000D XML schemas; DITA uses DITA schemas. The authoring paradigms are similar — structured XML, topic types, content reuse. Your domain knowledge transfers completely; you are adding DITA-specific skills.</p></div>`,
  quiz:[
    {question:'ATA iSpec2200 is primarily relevant to which sector of aerospace documentation?',options:['Military aviation and defense systems','Commercial aviation maintenance documentation (AMMs, CMMs, IPCs)','General aviation private aircraft','Spacecraft documentation'],correct:1,explanation:'ATA iSpec2200 (formerly ATA100) is the standard for commercial aviation maintenance documentation. It defines the ATA chapter numbering system, document types (AMM, CMM, IPC, WDM, SRM), and data delivery specifications. S1000D is used primarily in military and defense aviation.'},
  ],
  prev:'page-79',next:'page-81'
},

{id:'page-81',pageNum:81,module:8,moduleTitle:'Aerospace & DITA',title:'DITA in Aerospace',subtitle:'How major aerospace OEMs use DITA — Boeing, Airbus, Honeywell, and the tools and workflows used in production aerospace documentation.',duration:'20 min read',level:'Intermediate',searchKeywords:'DITA aerospace Boeing Airbus Honeywell production workflow CCMS IPC AMM',objectives:['Understand how major aerospace companies use DITA','Know the tools used in production aerospace documentation','Describe a production DITA workflow at an aerospace OEM','Position yourself for aerospace DITA roles'],
content:`<h2>DITA at Boeing</h2>
<p>Boeing is one of the world's largest users of DITA. Boeing Technical Publications uses DITA for the 787 Dreamliner documentation suite and is migrating older aircraft documentation to DITA. The Boeing documentation system includes:</p>
<ul>
<li>DITA-based authoring in Oxygen XML Author or Arbortext</li>
<li>Content management in a production CCMS (Content Component Management System)</li>
<li>DITA-OT based publishing pipeline producing AMM, CMM, IPC, and other deliverables</li>
<li>ATA iSpec2200 compliance</li>
</ul>

<h2>DITA at Airbus</h2>
<p>Airbus uses DITA for its AirbusWorld technical documentation portal, which provides online maintenance documentation to operators. Airbus's DITA implementation includes advanced conditional processing for aircraft variant management (A320ceo, A320neo, A321XLR) — a perfect real-world example of profiling and DITAVAL usage.</p>

<h2>Content Management Systems (CCMS) in Aerospace</h2>
<p>At scale, DITA files are managed not in Git but in specialized Content Component Management Systems (CCMS). Common aerospace CCMS systems:</p>
<div class="table-wrapper"><table>
<thead><tr><th>CCMS</th><th>Vendor</th><th>Used by</th></tr></thead>
<tbody>
<tr><td>Documentum (D2)</td><td>OpenText</td><td>Boeing, many aerospace primes</td></tr>
<tr><td>Ixiasoft DITA CMS</td><td>Ixiasoft</td><td>Mid-large DITA organizations</td></tr>
<tr><td>SDL Tridion Docs (formerly Trisoft)</td><td>RWS</td><td>Philips, various manufacturers</td></tr>
<tr><td>Astoria CCMS</td><td>Astoria Software</td><td>Aerospace, life sciences</td></tr>
<tr><td>MadCap Central</td><td>MadCap Software</td><td>Smaller DITA teams</td></tr>
</tbody></table></div>

<h2>What Aerospace DITA Roles Look Like</h2>
<p>A typical DITA Author role at an aerospace OEM:</p>
<ul>
<li>Author DITA topics (concept, task, reference) based on engineering inputs</li>
<li>Manage topic sets using DITA maps and bookmap</li>
<li>Implement conrefs, keyrefs, and profiling for variant management</li>
<li>Publish deliverables using DITA-OT or publishing system triggers</li>
<li>Coordinate with engineers, safety, and regulatory teams for review</li>
<li>Use Git or CCMS for version control and content management</li>
<li>Comply with ATA iSpec2200 or S1000D structure requirements</li>
</ul>`,
quiz:[{question:'In a production aerospace DITA environment, a CCMS (Content Component Management System) is used instead of Git primarily because:',options:['CCMS is cheaper than Git','CCMS provides specialized features for large-scale documentation: workflow management, access control, translation management, variant/configuration management, and regulatory compliance tracking — at a scale that general-purpose Git cannot easily support','Git cannot handle XML files','CCMS is required by ATA iSpec2200'],correct:1,explanation:'A CCMS provides: structured workflow (routing topics through review stages automatically), granular access control (writers can only access their assigned components), integrated translation management, configuration/variant management for product families, and compliance audit trails — all critical at aerospace scale. Git is excellent for smaller teams and developer-oriented workflows but lacks these specialized content operations features.'}],
prev:'page-80',next:'page-82'},

{id:'page-82',pageNum:82,module:8,moduleTitle:'Aerospace & DITA',title:'Illustrated Parts Catalogs in DITA',subtitle:'How DITA is used for Illustrated Parts Catalogs (IPC) — one of the most structured and complex aerospace documentation types.',duration:'20 min read',level:'Advanced',searchKeywords:'DITA IPC illustrated parts catalog aerospace parts reference figure callout',objectives:['Understand the structure of an IPC','Apply DITA reference topics to parts catalog content','Understand figure/callout structures in DITA for IPC work'],
content:`<h2>What is an Illustrated Parts Catalog?</h2>
<p>An Illustrated Parts Catalog (IPC), also called AIPC (Aircraft Illustrated Parts Catalog), is a documentation type that identifies every replaceable part in an aircraft and provides the information needed to order replacements. An IPC contains:</p>
<ul>
<li>Exploded-view illustrations showing how components are assembled</li>
<li>Item numbers (callouts on figures) keyed to a parts list</li>
<li>For each part: part number, nomenclature, quantity per assembly, effectivity (which aircraft it applies to), and interchange data</li>
</ul>

<h2>DITA Reference Topics for IPC</h2>
<p>IPC content maps naturally to DITA reference topics. Each figure assembly is a reference topic; the parts list is a properties table or CALS table.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">IPC reference topic structure</span></div>
<pre><span class="tok-tag">&lt;reference</span> <span class="tok-attr">id</span>=<span class="tok-val">"ref-fig-29-01-01"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;title&gt;</span>Hydraulic System A — Main Pump Assembly (Fig. 29-01-01)<span class="tok-tag">&lt;/title&gt;</span>
  <span class="tok-tag">&lt;shortdesc&gt;</span>Parts list for the System A main hydraulic pump assembly.<span class="tok-tag">&lt;/shortdesc&gt;</span>
  <span class="tok-tag">&lt;refbody&gt;</span>
    <span class="tok-tag">&lt;section&gt;</span>
      <span class="tok-tag">&lt;fig&gt;&lt;title&gt;</span>Figure 29-01-01: System A Pump Assembly<span class="tok-tag">&lt;/title&gt;</span>
        <span class="tok-tag">&lt;image</span> <span class="tok-attr">href</span>=<span class="tok-val">"figures/29-01-01-pump-assembly.svg"</span><span class="tok-tag">&gt;</span>
          <span class="tok-tag">&lt;alt&gt;</span>Exploded view of System A hydraulic pump assembly<span class="tok-tag">&lt;/alt&gt;</span>
        <span class="tok-tag">&lt;/image&gt;</span>
      <span class="tok-tag">&lt;/fig&gt;</span>
    <span class="tok-tag">&lt;/section&gt;</span>
    <span class="tok-tag">&lt;section&gt;&lt;title&gt;</span>Parts List<span class="tok-tag">&lt;/title&gt;</span>
      <span class="tok-tag">&lt;table&gt;&lt;tgroup</span> <span class="tok-attr">cols</span>=<span class="tok-val">"5"</span><span class="tok-tag">&gt;</span>
        <span class="tok-tag">&lt;thead&gt;&lt;row&gt;</span>
          <span class="tok-tag">&lt;entry&gt;</span>Item<span class="tok-tag">&lt;/entry&gt;&lt;entry&gt;</span>Part Number<span class="tok-tag">&lt;/entry&gt;</span>
          <span class="tok-tag">&lt;entry&gt;</span>Nomenclature<span class="tok-tag">&lt;/entry&gt;&lt;entry&gt;</span>Qty<span class="tok-tag">&lt;/entry&gt;</span>
          <span class="tok-tag">&lt;entry&gt;</span>Effectivity<span class="tok-tag">&lt;/entry&gt;</span>
        <span class="tok-tag">&lt;/row&gt;&lt;/thead&gt;</span>
        <span class="tok-tag">&lt;tbody&gt;</span>
          <span class="tok-tag">&lt;row&gt;&lt;entry&gt;</span>1<span class="tok-tag">&lt;/entry&gt;&lt;entry&gt;</span>29-EDP-001<span class="tok-tag">&lt;/entry&gt;</span>
            <span class="tok-tag">&lt;entry&gt;</span>Pump, Hydraulic, Engine Driven<span class="tok-tag">&lt;/entry&gt;</span>
            <span class="tok-tag">&lt;entry&gt;</span>1<span class="tok-tag">&lt;/entry&gt;&lt;entry&gt;</span>All<span class="tok-tag">&lt;/entry&gt;&lt;/row&gt;</span>
          <span class="tok-tag">&lt;row&gt;&lt;entry&gt;</span>2<span class="tok-tag">&lt;/entry&gt;&lt;entry&gt;</span>29-SEL-001<span class="tok-tag">&lt;/entry&gt;</span>
            <span class="tok-tag">&lt;entry&gt;</span>Seal, Pump, Main<span class="tok-tag">&lt;/entry&gt;</span>
            <span class="tok-tag">&lt;entry&gt;</span>3<span class="tok-tag">&lt;/entry&gt;&lt;entry&gt;</span>All<span class="tok-tag">&lt;/entry&gt;&lt;/row&gt;</span>
        <span class="tok-tag">&lt;/tbody&gt;&lt;/tgroup&gt;&lt;/table&gt;</span>
    <span class="tok-tag">&lt;/section&gt;</span>
  <span class="tok-tag">&lt;/refbody&gt;</span>
<span class="tok-tag">&lt;/reference&gt;</span></pre></div>`,
quiz:[{question:'In an IPC reference topic, the "effectivity" column in the parts list indicates:',options:['The part\'s manufacture date','Which aircraft serial numbers or models the part applies to','The part\'s weight','The part\'s country of origin'],correct:1,explanation:'Effectivity in an IPC identifies which aircraft (by serial number range, model, or production block) the part applies to. A part may only be used on 737-800 aircraft with serial numbers above a certain range, or on a specific modification state. Effectivity is essential for operators to order the correct parts for their specific aircraft.'}],
prev:'page-81',next:'page-83'},

{id:'page-83',pageNum:83,module:8,moduleTitle:'Aerospace & DITA',title:'Regulatory Compliance in Documentation',subtitle:'FAA, EASA, DGCA, and how regulatory requirements shape aerospace documentation content and process.',duration:'20 min read',level:'Intermediate',searchKeywords:'FAA EASA DGCA regulatory compliance airworthiness documentation approval Part 25 Part 43',objectives:['Understand the regulatory landscape for aerospace documentation','Know how FAA/EASA approval affects documentation','Understand the difference between Type Certificated and maintenance documentation','Apply regulatory awareness in your documentation work'],
content:`<h2>The Regulatory Environment</h2>
<p>Commercial aviation is one of the most heavily regulated industries in the world. Documentation is not just a communication tool — it is a regulatory requirement. Incorrect or missing documentation can ground aircraft and lead to regulatory action.</p>

<h2>Key Regulatory Authorities</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Authority</th><th>Region</th><th>Documentation Relevance</th></tr></thead>
<tbody>
<tr><td>FAA (Federal Aviation Administration)</td><td>USA</td><td>Approves AFM/POH, certain AMM content; 14 CFR Part 25, Part 43, Part 145</td></tr>
<tr><td>EASA (European Union Aviation Safety Agency)</td><td>Europe</td><td>Approves documentation for EU-registered aircraft; CS-25, Part-M, Part-145</td></tr>
<tr><td>DGCA (Directorate General of Civil Aviation)</td><td>India</td><td>Indian civil aviation regulator; Civil Aviation Requirements (CARs)</td></tr>
<tr><td>TCCA (Transport Canada Civil Aviation)</td><td>Canada</td><td>Canadian aviation regulator</td></tr>
<tr><td>ANAC (Brazil)</td><td>Brazil</td><td>Brazilian aviation authority</td></tr>
</tbody></table></div>

<h2>What Requires Regulatory Approval?</h2>
<p>Not all documentation requires regulatory approval, but some types do:</p>
<ul>
<li><strong>Flight Manual (AFM/POH):</strong> Required by airworthiness regulations; FAA/EASA-approved content</li>
<li><strong>Mandatory Service Bulletins / Airworthiness Directives (ADs):</strong> Regulatory directives that require specific maintenance actions documented precisely</li>
<li><strong>STC (Supplemental Type Certificate) documentation:</strong> FAA approval required for modification instructions</li>
</ul>
<p>Standard AMM procedures from the OEM are approved through the aircraft Type Certificate process. Maintenance organizations must follow approved maintenance manuals exactly.</p>

<h2>Documentation and Safety</h2>
<p>Aviation accident investigations consistently identify documentation failures as contributing factors: incorrect procedures, missing warnings, unclear steps, or maintenance personnel following outdated documentation. This is why aerospace documentation demands:</p>
<ul>
<li>Multiple technical review cycles by qualified engineers</li>
<li>Configuration control (knowing which revision of which manual is in use)</li>
<li>Mandatory warning/caution placement before relevant steps</li>
<li>Formal approval signatures before release</li>
<li>Controlled distribution — ensuring only current revisions are in use</li>
</ul>`,
quiz:[{question:'If a maintenance procedure in an AMM is found to be incorrect after an incident, the most likely outcome is:',options:['A formal revision is issued and distributed to all operators; the OEM may face regulatory scrutiny','Nothing — AMM errors are expected and tolerated','The mechanic who performed the procedure is held responsible only','The incident is kept confidential'],correct:0,explanation:'Incorrect AMM procedures can result in: mandatory AMM revision with distribution to all operators (Revision Service Bulletin); FAA/EASA inquiries into the approval process; investigation into how the error occurred and reached publication; and potentially Airworthiness Directive action if safety is affected. Documentation accuracy in aerospace is a regulatory and safety matter.'}],
prev:'page-82',next:'page-84'},

{id:'page-84',pageNum:84,module:8,moduleTitle:'Aerospace & DITA',title:'Translating Your S1000D Experience to DITA',subtitle:'A direct mapping of S1000D concepts to DITA — leveraging your existing expertise for a smooth transition.',duration:'20 min read',level:'Intermediate',searchKeywords:'S1000D DITA mapping migration translation Arbortext data module CSDB',objectives:['Map S1000D concepts to DITA equivalents','Leverage S1000D experience in DITA interviews','Articulate your structured authoring background effectively','Identify skill transfers from S1000D to DITA'],
content:`<h2>S1000D to DITA: Direct Concept Mapping</h2>
<div class="table-wrapper"><table>
<thead><tr><th>S1000D Concept</th><th>DITA Equivalent</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Data Module (DM)</td><td>DITA Topic (.dita file)</td><td>Both are atomic, reusable content units with unique identifiers</td></tr>
<tr><td>Data Module Code (DMC)</td><td>Topic id attribute</td><td>Both uniquely identify a content unit within the system</td></tr>
<tr><td>Common Source Data Base (CSDB)</td><td>CCMS / Git repository</td><td>Both are the managed repository of all content modules</td></tr>
<tr><td>Publication Module (PM)</td><td>DITA Map (.ditamap)</td><td>Both assemble data modules into a publication</td></tr>
<tr><td>Applicability (in S1000D)</td><td>Profiling + DITAVAL</td><td>Both enable conditional content inclusion/exclusion</td></tr>
<tr><td>Procedural data module type</td><td>DITA task topic</td><td>Both contain step-by-step procedures</td></tr>
<tr><td>Descriptive data module type</td><td>DITA concept topic</td><td>Both describe systems/concepts</td></tr>
<tr><td>Data module preliminary requirements</td><td>&lt;prereq&gt; element in task</td><td>Pre-conditions before starting the procedure</td></tr>
<tr><td>Arbortext Editor</td><td>Oxygen XML Editor</td><td>Both are structured XML authoring tools with schema validation</td></tr>
<tr><td>SGML/XML authoring paradigm</td><td>DITA XML authoring paradigm</td><td>Same underlying technology; different schemas</td></tr>
</tbody></table></div>

<h2>In Interviews: How to Present Your S1000D Experience</h2>
<p>When a DITA employer asks about your structured authoring background, connect your S1000D/Arbortext experience to DITA concepts:</p>
<blockquote>
"In my previous roles, I worked with structured authoring using S1000D standards and Arbortext Editor. S1000D uses the same fundamental principles as DITA — typed data modules that map to DITA's concept/task/reference topics, applicability filtering equivalent to DITA profiling, and a CSDB that functions like a CCMS or Git repository. I am applying those structural principles to DITA syntax and tools, which I am actively developing through hands-on DITA projects."
</blockquote>

<h2>Your Hidden Advantage</h2>
<p>Many DITA candidates know the tool but not the domain. You know:</p>
<ul>
<li>How maintenance procedures are actually used in a hangar</li>
<li>Why safety warnings must precede their steps</li>
<li>What an IPC is and how it's used for parts ordering</li>
<li>The ATA chapter system and how aircraft systems are organized</li>
<li>What review cycles with engineering SMEs look like</li>
<li>The consequences of documentation errors in aviation</li>
</ul>
<p>Add DITA skills to this foundation and you are an exceptionally strong candidate.</p>`,
quiz:[{question:'In an interview, a DITA hiring manager asks "Have you used DITA before?" You have S1000D/Arbortext experience but limited DITA experience. The best answer is:',options:['Say "No" and move on','Say "Yes" without qualification (even if untrue)','Explain that you have structured XML authoring experience with S1000D/Arbortext (same principles as DITA — typed content modules, applicability filtering, CSDB), that you are actively developing DITA skills, and show your portfolio','Decline to answer'],correct:2,explanation:'Be honest and strategic: acknowledge the S1000D/Arbortext background, explicitly map it to DITA concepts (showing you understand both), demonstrate active learning with your portfolio, and present the transition as a skills evolution rather than starting from zero. This is both honest and compelling.'}],
prev:'page-83',next:'page-85'},

{id:'page-85',pageNum:85,module:8,moduleTitle:'Aerospace & DITA',title:'Aerospace DITA Projects',subtitle:'Aerospace-specific portfolio projects that demonstrate your unique combination of domain knowledge and DITA skills.',duration:'20 min read',level:'Hands-on',searchKeywords:'aerospace DITA portfolio projects IPC AMM maintenance manual tasks conref',objectives:['Plan aerospace-themed DITA portfolio projects','Design a mini-AMM chapter in DITA','Create an aerospace DITA reference topic set'],
content:`<h2>Aerospace-Specific Portfolio Projects</h2>
<p>The most compelling portfolio for an aerospace DITA role combines DITA technical skill with authentic aerospace content. These projects use your domain knowledge to create content that rings true to aerospace hiring managers.</p>

<h2>Project A: Mini-AMM Chapter in DITA</h2>
<div class="exercise-box"><div class="exercise-box-header"><div class="exercise-icon">✈️</div><div><div class="exercise-title">Mini Aircraft Maintenance Manual Chapter</div></div></div>
<ol class="exercise-steps">
<li>Choose an ATA chapter you know well (ATA 29 Hydraulic Power is excellent given your background)</li>
<li>Create a DITA map structured as an AMM chapter: System Description section (concept topics) + Maintenance Procedures section (task topics) + Specifications section (reference topics)</li>
<li>Write at least: 2 concept topics (system overview, component descriptions), 3 task topics (inspection, a replacement procedure, a servicing task), 2 reference topics (specifications table, approved materials list)</li>
<li>Create a shared/warnings-library.dita with 3 safety warnings; apply conrefs from tasks</li>
<li>Add profiling attributes for at least 2 aircraft variants</li>
<li>Publish as PDF and HTML5</li>
<li>Post to GitHub with a README explaining the project</li>
</ol></div>

<h2>Project B: IPC Reference in DITA</h2>
<div class="exercise-box"><div class="exercise-box-header"><div class="exercise-icon">📦</div><div><div class="exercise-title">Illustrated Parts Catalog Reference</div></div></div>
<ol class="exercise-steps">
<li>Create a DITA reference topic for one aircraft assembly (hydraulic pump, fuel filter assembly, or similar)</li>
<li>Include a figure element (create or source a simple SVG diagram)</li>
<li>Create a parts list table with at least 8 part entries: item number, part number, nomenclature, quantity, effectivity</li>
<li>Apply effectivity profiling for two aircraft variants</li>
<li>Add to your mini-AMM map as an appendix</li>
</ol></div>

<h2>Your Portfolio Statement</h2>
<p>For your portfolio README and LinkedIn profile, describe your aerospace DITA project this way:</p>
<blockquote>
"Created a DITA-based mini Aircraft Maintenance Manual chapter for a hydraulic power system (ATA 29), demonstrating topic-based authoring with concept, task, and reference topics; content reuse via conrefs and keyrefs; multi-product variant management using DITA profiling and DITAVAL filtering; and publication to PDF and HTML5 using the DITA Open Toolkit in Oxygen XML Editor. Source files available on GitHub."
</blockquote>`,
quiz:[{question:'When presenting your aerospace DITA portfolio to a Boeing or Honeywell hiring manager, the most compelling element is:',options:['Proof that you used the most expensive version of Oxygen','A DITA publication with authentic aerospace content structure (AMM chapter, IPC format, ATA organization) demonstrating both DITA skills AND domain knowledge','A 100% perfect PDF layout','Documentation about non-aerospace topics'],correct:1,explanation:'A hiring manager at an aerospace OEM is looking for someone who can hit the ground running. A DITA publication with correct AMM/IPC structure, ATA chapter organization, appropriate aerospace content, and proper conref/keyref/profiling implementation shows both DITA competency and aerospace domain knowledge — the exact combination they need.'}],
prev:'page-84',next:'page-86'},

{id:'page-86',pageNum:86,module:8,moduleTitle:'Aerospace & DITA',title:'Aerospace Interview Prep',subtitle:'Interview questions specific to aerospace technical publications and DITA roles — with answers tailored to your background.',duration:'20 min read',level:'Interview Prep',searchKeywords:'aerospace technical publications interview questions DITA AMM ATA S1000D Arbortext',objectives:['Answer aerospace-specific interview questions','Talk about your BHEL/Roxcel experience effectively','Position your aerospace + DITA combination convincingly'],
content:`<h2>Aerospace Technical Publications Interview Q&A</h2>
<div class="qa-item"><div class="qa-question">Q: What is your experience with aerospace documentation standards like ATA iSpec2200 or S1000D?</div><div class="qa-answer"><p>I have [X years] of experience working with aerospace maintenance documentation structured according to ATA chapter conventions. In my role at [BHEL/Roxcel], I worked with [specific documentation types — AMM chapters, maintenance procedures, etc.] and used Arbortext Editor for structured XML authoring. I am familiar with S1000D data module principles, including typed module structures (procedural vs. descriptive) that map directly to DITA task and concept topics. I am actively developing my DITA skills to add modern structured authoring capabilities to this aerospace documentation foundation.</p></div></div>

<div class="qa-item"><div class="qa-question">Q: Explain the difference between an AMM and a CMM. Which types of content would you put in each?</div><div class="qa-answer"><p>An Aircraft Maintenance Manual (AMM) covers line and hangar maintenance for aircraft-level systems, organized by ATA chapter. It contains system descriptions (concept-type content), standard maintenance procedures (task-type content), and specifications and tolerances (reference-type content). A Component Maintenance Manual (CMM) is for a specific component — say, a hydraulic pump — and contains detailed overhaul procedures: disassembly, cleaning, inspection with serviceable limits, repair limits, reassembly, and functional testing. CMMs are typically produced by the component manufacturer (Honeywell, Parker Hannifin) rather than the airframe OEM.</p></div></div>

<div class="qa-item"><div class="qa-question">Q: An engineer gives you a procedure to document. You realize their steps skip a critical depressurization step. What do you do?</div><div class="qa-answer"><p>This is a safety issue — I flag it immediately and unambiguously. I contact the engineer and say: "I noticed the procedure goes directly to opening the hydraulic line without a prior depressurization step. My understanding is the system must be depressurized first to prevent injury from high-pressure fluid. Can you confirm whether this step is missing, or if I'm misunderstanding the procedure?" I document the exchange and the engineer's response. If they confirm the step is missing, I add it and get their sign-off on the revision. If there's any disagreement, I escalate to a safety review. I never knowingly publish a procedure with a missing safety-critical step.</p></div></div>`,
quiz:[{question:'You\'re asked in an interview: "Why do you want to move from your current aerospace publications role to a DITA-focused role?" The best answer framework is:',options:['Mention salary improvement only','Express frustration with your current employer','Connect your existing aerospace expertise to the modern documentation tools (DITA, Git) that are becoming industry standard — showing you are growing with the industry, not abandoning it','Say DITA is easy and you need a change'],correct:2,explanation:'The best career narrative: "I have deep aerospace domain knowledge and structured authoring experience. DITA is becoming the dominant standard in aerospace documentation (Boeing, Airbus, Honeywell all use it). I am adding DITA skills to my existing foundation so I can contribute to modern aerospace documentation pipelines — combining domain expertise with modern tooling." This shows forward-thinking growth, not dissatisfaction.'}],
prev:'page-85',next:'page-87'},

{id:'page-87',pageNum:87,module:8,moduleTitle:'Aerospace & DITA',title:'Capstone: Your Documentation Future',subtitle:'Bringing it all together — your complete skill set, your career path, and your next steps.',duration:'15 min read',level:'Capstone',searchKeywords:'capstone summary next steps career documentation complete learning path',objectives:['Consolidate all learning into a coherent picture','Identify your unique value proposition','Plan your immediate next steps','Celebrate your learning journey'],
content:`<h2>What You Now Know</h2>
<p>You have completed a comprehensive learning journey through modern DITA documentation. Here is your complete skill map:</p>
<div class="table-wrapper"><table>
<thead><tr><th>Domain</th><th>Skills Acquired</th><th>Demonstrable With</th></tr></thead>
<tbody>
<tr><td>Documentation Fundamentals</td><td>Information types, lifecycle, IA, topic-based authoring, content reuse, standards</td><td>Module 1 knowledge; interview answers</td></tr>
<tr><td>XML</td><td>Syntax, elements, attributes, namespaces, validation, DTDs, XSD</td><td>Module 2 knowledge; writing valid XML</td></tr>
<tr><td>DITA</td><td>Topic types, maps, conref, keyref, metadata, profiling, conditional processing, specialization, publishing</td><td>Portfolio Projects 1–5; GitHub repository</td></tr>
<tr><td>Oxygen XML Editor</td><td>Author/Text/Grid views, DITA Maps Manager, transformation scenarios, validation, refactoring</td><td>Published DITA output in portfolio</td></tr>
<tr><td>Markdown</td><td>GFM syntax, YAML front matter, docs-as-code workflow, documentation sites</td><td>README files; Markdown documentation</td></tr>
<tr><td>Git & GitHub</td><td>Version control, branching, pull requests, GitHub Actions, docs-as-code</td><td>GitHub portfolio; commit history</td></tr>
<tr><td>Technical Writing</td><td>Principles, style, IA, international writing, SME collaboration, documentation types</td><td>Portfolio quality; interview answers</td></tr>
<tr><td>Aerospace & DITA</td><td>ATA iSpec2200, S1000D mapping, DITA in production, regulatory context, career positioning</td><td>Aerospace portfolio project; interview answers</td></tr>
</tbody></table></div>

<h2>Your Unique Value Proposition</h2>
<p>You are not a junior technical writer. You are a senior aerospace technical publications professional with 8+ years of domain expertise, adding modern structured authoring skills to an already strong foundation. Your value proposition to employers:</p>
<ul>
<li><strong>Domain knowledge:</strong> You understand aerospace systems, maintenance procedures, and the safety-critical nature of this documentation</li>
<li><strong>DITA skills:</strong> You can author, manage, and publish DITA content</li>
<li><strong>Structured authoring background:</strong> Your S1000D/Arbortext experience means you understand XML-based structured authoring at its core</li>
<li><strong>Modern workflow:</strong> You understand Git, GitHub, docs-as-code, and CI/CD for documentation</li>
</ul>

<h2>Your Immediate Next Steps</h2>
<ol>
<li><strong>Today:</strong> Open Oxygen, create your first DITA topic from scratch (not a template), validate it</li>
<li><strong>This week:</strong> Complete Portfolio Project 1 (see Projects section)</li>
<li><strong>This month:</strong> Complete 3 portfolio projects; push to GitHub</li>
<li><strong>In 3 months:</strong> Complete all 10 portfolio projects; apply for 5 positions</li>
</ol>

<div class="callout success"><div class="callout-title">✓ You Have What It Takes</div>
<p>Every concept in this learning portal, every DITA element, every Git command — you now have a foundation for these. The next step is practice and portfolio building. Put in the hours, publish your work, and your combined background will open doors. The aerospace documentation industry needs people exactly like you.</p></div>`,
quiz:[{question:'You complete all 10 portfolio projects and post them to GitHub. A hiring manager at an aerospace documentation company asks to see your work. You should:',options:['Email them the GitHub link only','Send them a GitHub link AND a brief 3–5 sentence description of your most impressive project, tailored to what you know about their documentation needs','Wait for them to find your portfolio','Only show them the PDF outputs, not the DITA source'],correct:1,explanation:'A GitHub link alone requires the hiring manager to do work. Guide them: share the link AND a brief, confident description that explains what the project demonstrates, tailored to their needs ("This mini-AMM chapter in DITA demonstrates conref-based safety warning reuse, multi-variant profiling, and PDF/HTML5 publishing from a single DITA source — the same workflow used in production aerospace documentation at Boeing and Airbus."). Make it easy to be impressed.'}],
prev:'page-86',next:'page-1'},
];
