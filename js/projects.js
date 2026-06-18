const PROJECTS_DATA = [
{
  id:'proj-1',
  title:'Mini-AMM Chapter: Hydraulic Power System (ATA 29)',
  subtitle:'A complete, publication-ready DITA chapter structured as an Aircraft Maintenance Manual chapter.',
  difficulty:'Intermediate',
  duration:'8–12 hours',
  skills:['DITA concept/task/reference topics','DITA maps','Conref (warnings library)','Oxygen XML Editor','DITA-OT publishing'],
  description:'Create a DITA-based mini-AMM chapter for a hydraulic power system — the type of content you would produce as a DITA Author at Boeing, Airbus, or Honeywell. This project demonstrates your DITA skills AND aerospace domain knowledge together.',
  steps:[
    'Set up your project directory: create folders /maps/, /topics/concepts/, /topics/tasks/, /topics/reference/, /shared/',
    'Create the DITA map: ata29-hydraulic-system.ditamap with the mini-AMM structure',
    'Write 2 concept topics: system overview (con-ata29-overview.dita) and component description (con-hyd-components.dita)',
    'Write 3 task topics: inspect hydraulic fluid (task-inspect-fluid.dita), replace engine-driven pump (task-replace-edp.dita), service the hydraulic reservoir (task-service-reservoir.dita)',
    'Write 2 reference topics: system specifications (ref-hyd-specifications.dita) and approved fluids list (ref-approved-fluids.dita)',
    'Create a warnings library: shared/warnings-library.dita with 3 warnings (high pressure, electrical, fire). Apply conrefs from tasks.',
    'Add a keydef for product-name = "Boeing 737-800" in the map',
    'Apply product profiling attributes on at least 3 elements for a 737-Classic vs 737-NG variant',
    'Validate all files in Oxygen: zero errors required',
    'Publish to HTML5 and PDF using Oxygen transformation scenarios',
    'Create a GitHub repository "dita-ata29-hydraulic" with all source files and a README.md',
    'Push to GitHub; share the link as your portfolio item'
  ],
  deliverables:['ata29-hydraulic-system.ditamap','7 topic files (2 concept, 3 task, 2 reference)','warnings-library.dita (conref source)','Published HTML5 output (screenshotted or hosted)','Published PDF','GitHub repository with README'],
  portfolioStatement:'Created a DITA-based Aircraft Maintenance Manual chapter for a hydraulic power system (ATA 29), demonstrating concept/task/reference topic authoring, content reuse via conrefs and keyrefs, multi-aircraft variant management through DITA profiling, and multi-format publishing (PDF and HTML5) using Oxygen XML Editor and the DITA Open Toolkit.'
},

{
  id:'proj-2',
  title:'DITA Reuse Showcase: Warnings Library and Keyref System',
  subtitle:'Demonstrate mastery of DITA\'s content reuse mechanisms: conrefs, keyrefs, and profiling across a publication.',
  difficulty:'Intermediate',
  duration:'4–6 hours',
  skills:['Conref implementation','Keyref system design','DITAVAL conditional processing','DITA map key management'],
  description:'Reuse is DITA\'s superpower. This project creates a comprehensive demonstration of all three DITA reuse mechanisms — conrefs, keyrefs, and profiling — applied to a realistic documentation set.',
  steps:[
    'Create a warnings-library.dita with 6 warnings: HIGH_PRESSURE, HIGH_VOLTAGE, HOT_SURFACE, FIRE_HAZARD, TOXIC_FLUID, EYE_PROTECTION',
    'Create a notes-library.dita with 4 notes: LUBRICATION_NOTE, DISPOSAL_NOTE, CALIBRATION_NOTE, TRACEABILITY_NOTE',
    'Create a master map with keydefs for: product-name, product-code, sys-pressure, fluid-type, revision-date, tech-support-contact',
    'Write 4 task topics that each use at least 2 conrefs from the libraries and 3 keyrefs from the map',
    'Create two variant maps (product-a.ditamap and product-b.ditamap) with different keydef values. Both maps reference the same 4 task topics — demonstrating single-source reuse.',
    'Create DITAVAL files for each product variant. Add profiling attributes to at least 5 elements.',
    'Publish both maps to HTML5. Verify that product names and specifications differ in each output while topics are identical.',
    'Document the reuse architecture in your README: how many topics, how many reuse instances, what duplication would exist without reuse'
  ],
  deliverables:['warnings-library.dita and notes-library.dita','2 product maps with full keydef sets','4 task topics with conrefs and keyrefs','2 DITAVAL filter files','2 HTML5 output sets (one per product)','GitHub repository with architecture README'],
  portfolioStatement:'Implemented a DITA content reuse architecture demonstrating single-source authoring across two product variants using conref libraries (6 shared warnings, 4 shared notes), keyref variable substitution, and DITAVAL conditional processing — eliminating 60%+ of content duplication while maintaining variant-specific output accuracy.'
},

{
  id:'proj-3',
  title:'DITA Bookmap Publication: Complete Technical Guide',
  subtitle:'Produce a professional, book-quality DITA publication using bookmap with front matter, chapters, and appendices.',
  difficulty:'Intermediate',
  duration:'6–8 hours',
  skills:['DITA bookmap structure','Front/back matter','PDF publishing and customization','Book-level metadata'],
  description:'Many aerospace deliverables are formal book-structured PDFs — AMMs, CMMs, training guides. This project uses DITA bookmap to produce a complete technical guide with title page, preface, chapters, appendices, and index.',
  steps:[
    'Create a bookmap: hydraulic-system-guide.ditamap using the &lt;bookmap&gt; root element',
    'Add frontmatter: &lt;frontmatter&gt; with &lt;booktitle&gt;, &lt;bookabstract&gt; (preface topic), and &lt;toc/&gt; (auto-generated TOC)',
    'Create a Chapter 1: System Overview (concept topics)',
    'Create a Chapter 2: Maintenance Procedures (task topics)',
    'Create a Chapter 3: Specifications (reference topics)',
    'Create an Appendix A: Approved Materials',
    'Create an Appendix B: Glossary (using DITA glossentry topics)',
    'Add &lt;backmatter&gt; with &lt;indexlist/&gt; and &lt;amendments&gt; topic',
    'Add &lt;indexterm&gt; elements in 10 topics to build the index',
    'Publish to PDF with pdf2 transform. Verify: title page, TOC, chapter numbering, appendix lettering, and index all appear correctly'
  ],
  deliverables:['Bookmap file with front/back matter','8+ topic files across chapters and appendices','Glossary with 5+ glossentry topics','Published PDF with TOC and index','GitHub repository'],
  portfolioStatement:'Produced a professional DITA bookmap publication (hydraulic system technical guide) with front matter, three content chapters, appendices, glossary, and auto-generated index — demonstrating book-structured documentation equivalent to AMM or training guide production.'
},

{
  id:'proj-4',
  title:'DITA Multi-variant Publishing with Branch Filtering',
  subtitle:'Use DITA 1.3 branch filtering to produce customized outputs for multiple aircraft variants from a single map.',
  difficulty:'Advanced',
  duration:'6–10 hours',
  skills:['DITA 1.3 branch filtering','Scoped keys','DITAVAL per branch','Multi-variant publishing'],
  description:'Modern aerospace documentation must support multiple aircraft variants from a single content source. This project implements DITA 1.3 branch filtering — the state-of-the-art approach for single-source multi-variant publishing.',
  steps:[
    'Create a single DITA map with two branches: one for "Product A" and one for "Product B" using &lt;topicgroup keyscope="product-a"&gt; structure',
    'Add keydefs within each keyscope defining the product name and key specifications',
    'Apply product profiling attributes (product="product-a" and product="product-b") to appropriate elements in 5 task topics',
    'Implement DITA 1.3 branch filtering: add &lt;ditavalref&gt; to each branch pointing to product-specific DITAVAL files',
    'Configure the ditavalmeta to add resource prefixes so output files are named distinctly per product',
    'Publish with a single transformation run — verify both sets of output are produced',
    'Document the architecture: how many topics are shared vs. variant-specific'
  ],
  deliverables:['Branch-filtered DITA map','5 profiled topic files','2 DITAVAL files (per product)','Single-run HTML5 output showing both product variants','Architecture documentation in README'],
  portfolioStatement:'Implemented DITA 1.3 branch filtering for multi-variant documentation delivery — producing customized output for two product variants in a single transformation run from unified DITA source, demonstrating the advanced conditional processing technique used in production aerospace documentation.'
},

{
  id:'proj-5',
  title:'Illustrated Parts Catalog (IPC) in DITA',
  subtitle:'Create a DITA-based IPC entry with exploded-view figures and parts list tables.',
  difficulty:'Intermediate',
  duration:'4–6 hours',
  skills:['DITA reference topics','Properties tables and CALS tables','SVG figure creation','Parts catalog structure','Effectivity profiling'],
  description:'Illustrated Parts Catalogs are a critical aerospace documentation type. This project creates a DITA IPC entry — the content type that parts department and MRO facilities use to identify and order replacement parts.',
  steps:[
    'Create a simple SVG exploded-view diagram with 5–8 callout numbers (use Inkscape or any SVG editor)',
    'Create a DITA reference topic for the assembly: structure with &lt;fig&gt; containing the SVG image, followed by a parts list &lt;table&gt;',
    'Parts list must include: Item No, Part Number, Nomenclature, Quantity, Effectivity (at minimum)',
    'Include at least 8 parts in the list, with 3 parts that have variant-specific effectivity',
    'Apply profiling to effectivity-variant rows',
    'Create a second simplified reference topic: a table of interchangeable parts (listing alternate part numbers)',
    'Create a DITA map assembling the IPC entries',
    'Publish to PDF. Verify the figure and parts list render correctly.'
  ],
  deliverables:['SVG exploded-view diagram','IPC reference topic with figure and parts list (8+ parts)','Interchangeable parts reference topic','DITA map','Published PDF showing IPC format'],
  portfolioStatement:'Created a DITA-based Illustrated Parts Catalog (IPC) entry with SVG exploded-view illustration, effectivity-profiled parts list, and interchangeable parts reference — demonstrating the reference documentation type used by MRO facilities worldwide for parts identification and ordering.'
},

{
  id:'proj-6',
  title:'Docs-as-Code: DITA in GitHub with CI/CD',
  subtitle:'Set up a complete docs-as-code pipeline for your DITA project with GitHub Actions for automated validation.',
  difficulty:'Advanced',
  duration:'4–6 hours',
  skills:['GitHub Actions','CI/CD for documentation','Automated DITA validation','GitHub Pages hosting'],
  description:'The future of technical documentation is docs-as-code. This project implements a professional GitHub Actions CI/CD pipeline that validates DITA files on every pull request and publishes HTML5 to GitHub Pages on merge.',
  steps:[
    'Create a GitHub repository for your Project 1 DITA files',
    'Add a .github/workflows/validate-dita.yml workflow that runs on pull_request: runs xmllint to validate all .dita files',
    'Add a second workflow: build-and-deploy.yml that runs on push to main: installs DITA-OT, runs the HTML5 transformation, and deploys to GitHub Pages',
    'Create a feature branch, make a deliberate XML error in one file, push and open a PR — verify the validation workflow catches the error',
    'Fix the error, push — verify the workflow passes',
    'Merge the PR — verify the build-and-deploy workflow runs and publishes the site',
    'Share the live GitHub Pages URL as your portfolio deliverable'
  ],
  deliverables:['GitHub repository with DITA source','validate-dita.yml GitHub Actions workflow','build-and-deploy.yml GitHub Actions workflow','Live GitHub Pages URL serving your HTML5 documentation','README describing the CI/CD pipeline'],
  portfolioStatement:'Implemented a docs-as-code CI/CD pipeline for DITA documentation using GitHub Actions: automated XML validation on every pull request prevents invalid content from merging; successful merges automatically trigger DITA-OT HTML5 publication and deployment to GitHub Pages — demonstrating modern documentation workflow practices.'
},

{
  id:'proj-7',
  title:'Markdown Documentation Site',
  subtitle:'Build a complete documentation site using Markdown and a static site generator — deployed and live.',
  difficulty:'Intermediate',
  duration:'4–6 hours',
  skills:['GitHub Flavored Markdown','YAML front matter','MkDocs or Docusaurus','GitHub Pages deployment'],
  description:'Many software and mid-size organizations use Markdown-based documentation sites. This project demonstrates your Markdown and docs-as-code skills with a complete, live documentation site.',
  steps:[
    'Install MkDocs (pip install mkdocs mkdocs-material) or set up Docusaurus',
    'Create a documentation site structure: Home, Getting Started, User Guide (3 pages), Reference (2 pages), FAQ',
    'Each page: minimum 500 words, proper heading hierarchy, at least one table, one code block, one admonition/callout',
    'Use YAML front matter on every page with title, description, and tags',
    'Configure the site navigation in mkdocs.yml (or docusaurus.config.js)',
    'Run markdownlint on all files and fix all reported issues',
    'Deploy to GitHub Pages (mkdocs gh-deploy)',
    'Share the live URL'
  ],
  deliverables:['8+ Markdown documentation pages','Site configuration file','GitHub repository with Markdown source','Live deployed documentation site URL','markdownlint passing with zero errors'],
  portfolioStatement:'Built and deployed a complete 8-page technical documentation site using Markdown and MkDocs Material theme, with YAML front matter, structured navigation, and automated deployment to GitHub Pages — demonstrating docs-as-code workflow and Markdown documentation skills.'
},

{
  id:'proj-8',
  title:'Technical Writing Portfolio: Before and After Samples',
  subtitle:'A curated set of writing improvement samples demonstrating your editing and writing quality.',
  difficulty:'Beginner',
  duration:'3–4 hours',
  skills:['Active voice','Audience analysis','Clarity and conciseness','Document restructuring'],
  description:'A technical writing portfolio must demonstrate writing quality — not just tool skills. This project creates a set of before/after writing samples that show your editorial judgment and writing improvement abilities.',
  steps:[
    'Find or create 5 examples of poor technical writing (passive voice, vague language, buried verbs, missing safety info, poor structure)',
    'For each: document the original, identify at least 3 specific problems with explanations, write an improved version',
    'Include one complete procedure rewrite: take a 5-step procedure and make it DITA-appropriate (imperative voice, one action per step, safety notes before steps)',
    'Include one audience-adaptation exercise: write the same content for two different audiences',
    'Write a 500-word reflection: your editing process and the writing principles you applied',
    'Format as a PDF or HTML document with clear before/after presentation',
    'Add to GitHub with README'
  ],
  deliverables:['5 before/after writing samples with problem analysis','1 complete procedure rewrite','1 audience-adaptation sample','500-word reflection document','PDF or HTML presentation','GitHub repository'],
  portfolioStatement:'Created a technical writing quality portfolio demonstrating editorial judgment through 5 documented before/after rewrites — applying active voice, imperative procedure style, audience analysis, and information architecture principles to improve clarity, safety, and usability of technical content.'
},

{
  id:'proj-9',
  title:'DITA Specialization: Troubleshooting Topics',
  subtitle:'Master DITA\'s troubleshooting topic type — the built-in specialization for fault isolation and corrective action documentation.',
  difficulty:'Advanced',
  duration:'4–6 hours',
  skills:['DITA troubleshooting topic type','Symptom/cause/remedy structure','Cross-references to tasks','Troubleshooting map integration'],
  description:'DITA 1.3 introduced the troubleshooting topic type — a specialization of task designed specifically for fault isolation documentation. This is heavily used in aerospace for BITE (Built-In Test Equipment) fault codes and maintenance troubleshooting.',
  steps:[
    'Review the DITA 1.3 troubleshooting topic structure: &lt;troubleshooting&gt;, &lt;troublebody&gt;, &lt;condition&gt;, &lt;troubleSolution&gt;, &lt;cause&gt;, &lt;remedy&gt;',
    'Create 5 troubleshooting topics for common hydraulic system faults: low system pressure, fluid leak, pump not building pressure, high fluid temperature, filter bypass indicator extended',
    'Each topic: symptom (condition), 2 possible causes, and a remedy for each cause (linking to task topics)',
    'Cross-reference the remedies to relevant task topics using keyrefs',
    'Create a troubleshooting map assembling all 5 topics, plus the relevant task topics as resource-only references',
    'Publish to HTML5 and verify the cross-links work correctly'
  ],
  deliverables:['5 troubleshooting topics','DITA troubleshooting map','Cross-references to remedy tasks verified','Published HTML5 output','GitHub repository'],
  portfolioStatement:'Created 5 DITA troubleshooting topics for hydraulic system fault isolation using the DITA 1.3 troubleshooting specialization — demonstrating the symptom/cause/remedy structure used in aerospace BITE (Built-In Test Equipment) fault documentation and maintenance troubleshooting guides.'
},

{
  id:'proj-10',
  title:'Complete Portfolio Website: Your Documentation Hub',
  subtitle:'Build a professional personal website that showcases all your documentation projects and skills.',
  difficulty:'Intermediate',
  duration:'4–6 hours',
  skills:['HTML/CSS','GitHub Pages','Professional presentation','Portfolio curation'],
  description:'Your capstone project: a professional portfolio website that presents all your documentation work to hiring managers. This is the page you will link on your resume and LinkedIn profile.',
  steps:[
    'Create a clean single-page HTML/CSS website (or use a Jekyll/Hugo theme)',
    'Sections: Hero (name, title: "Technical Publications Engineer | DITA Author"), Skills summary, Portfolio (9 projects with links), About/Background, Contact',
    'Write a compelling bio that highlights your combination of aerospace domain knowledge + modern DITA skills',
    'Create project cards for all 9 completed projects: title, brief description, key skills, link to GitHub repo and/or live output',
    'Add a "DITA Skills" section: list topic types, maps, conref, keyref, profiling, Oxygen, DITA-OT',
    'Add a PDF download of your resume',
    'Deploy to GitHub Pages at https://yourusername.github.io',
    'Add the URL to your LinkedIn profile and resume'
  ],
  deliverables:['Professional portfolio website with 9 project showcases','Live GitHub Pages URL','PDF resume linked from site','LinkedIn profile updated with portfolio URL','Professional bio text'],
  portfolioStatement:'Launched a professional technical writing portfolio website showcasing 9 documentation projects demonstrating DITA authoring, structured content reuse, multi-variant publishing, docs-as-code workflow, and aerospace domain expertise — available at [GitHub Pages URL] and linked from LinkedIn profile.'
}
];
