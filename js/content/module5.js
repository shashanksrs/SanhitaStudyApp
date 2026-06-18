const MODULE5_PAGES = [
{
  id:'page-53',pageNum:53,module:5,moduleTitle:'Markdown',
  title:'Markdown Fundamentals',
  subtitle:'The lightweight markup language that powers GitHub, README files, documentation sites, and developer docs everywhere.',
  duration:'20 min read',level:'Beginner',
  searchKeywords:'Markdown syntax fundamentals introduction headers bold italic lists links',
  objectives:['Understand what Markdown is and where it is used','Write basic Markdown syntax','Explain Markdown vs DITA tradeoffs','Apply Markdown in documentation contexts'],
  content:`
<h2>What is Markdown?</h2>
<p>Markdown is a lightweight markup language created by John Gruber in 2004. It uses plain text characters to represent formatting — designed so that Markdown source is readable as plain text, without needing to be rendered first.</p>
<p>Example: <code>**bold**</code> renders as <strong>bold</strong>. The double asterisks are readable in plain text and meaningful when rendered.</p>

<h2>Where Markdown is Used</h2>
<ul>
<li><strong>GitHub:</strong> README files, pull request descriptions, issue comments</li>
<li><strong>Documentation sites:</strong> Docusaurus, MkDocs, GitBook, Jekyll</li>
<li><strong>Wikis:</strong> Confluence (limited), Notion, Obsidian</li>
<li><strong>Developer tools:</strong> Slack messages, API documentation, technical blog posts</li>
<li><strong>Static site generators:</strong> Hugo, Gatsby, Eleventy</li>
</ul>

<h2>Core Markdown Syntax</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">Markdown</span><span class="code-block-title">Complete Markdown cheatsheet</span></div>
<pre># Heading 1
## Heading 2
### Heading 3

**bold text**
*italic text*
***bold and italic***
~~strikethrough~~

- Unordered list item
- Another item
  - Nested item

1. Ordered list item
2. Second item
3. Third item

[Link text](https://example.com)
![Alt text](image.png)

\`inline code\`

\`\`\`python
# Code block
def hello():
    print("Hello, world!")
\`\`\`

> Blockquote text

---   (horizontal rule)

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data     | Data     | Data     |

- [x] Completed task (GitHub Flavored Markdown)
- [ ] Incomplete task</pre></div>

<h2>Markdown Flavors</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Flavor</th><th>Adds</th><th>Used By</th></tr></thead>
<tbody>
<tr><td>CommonMark</td><td>Strict specification of standard Markdown</td><td>Basis for most other flavors</td></tr>
<tr><td>GitHub Flavored Markdown (GFM)</td><td>Tables, task lists, strikethrough, autolinks</td><td>GitHub, GitLab</td></tr>
<tr><td>MultiMarkdown</td><td>Footnotes, citations, metadata</td><td>Academic writing</td></tr>
<tr><td>Pandoc Markdown</td><td>Extensive extensions for academic publishing</td><td>Pandoc converter</td></tr>
</tbody></table></div>

<h2>Markdown vs. DITA</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Dimension</th><th>Markdown</th><th>DITA</th></tr></thead>
<tbody>
<tr><td>Complexity</td><td>Simple, minimal syntax</td><td>Complex, many elements</td></tr>
<tr><td>Structure</td><td>Minimal — no enforced topic types</td><td>Strict — enforces concept/task/reference structure</td></tr>
<tr><td>Reuse</td><td>Limited (file inclusion in some tools)</td><td>Extensive (conref, keyref, profiling)</td></tr>
<tr><td>Publishing</td><td>Simple static sites; limited format variety</td><td>Complex publishing pipelines; PDF, HTML, EPUB, custom</td></tr>
<tr><td>Learning curve</td><td>Minutes to learn basics</td><td>Days to weeks to learn proficiently</td></tr>
<tr><td>Tooling</td><td>Any text editor; many free tools</td><td>Oxygen XML Editor (~$200/year); specialized tools</td></tr>
<tr><td>Best for</td><td>Developer docs, README files, small to mid-scale</td><td>Enterprise docs, aerospace/defense, complex reuse</td></tr>
</tbody></table></div>`,
  quiz:[
    {question:'GitHub Flavored Markdown (GFM) adds which features not in standard Markdown?',options:['DITA-style topic types','Tables, task lists, and strikethrough','Advanced PDF publishing','Conditional processing'],correct:1,explanation:'GFM extends CommonMark with: tables (using | pipe syntax), task lists (- [x] syntax), strikethrough (~~text~~), autolinks, and code fencing with language identifiers. These are standard on GitHub and GitLab.'},
    {question:'Which of the following is the correct Markdown syntax for a second-level heading?',options:['# Heading','## Heading','### Heading','**Heading**'],correct:1,explanation:'In Markdown, # = H1, ## = H2, ### = H3, #### = H4, etc. ## Heading produces a second-level heading (<h2> in HTML).'},
  ],
  prev:'page-52',next:'page-54'
},

{id:'page-54',pageNum:54,module:5,moduleTitle:'Markdown',title:'Advanced Markdown',subtitle:'Tables, code blocks, footnotes, metadata, and Markdown extensions for technical documentation.',duration:'20 min read',level:'Intermediate',searchKeywords:'Markdown tables code blocks footnotes front matter YAML metadata extensions',objectives:['Create complex Markdown tables','Use fenced code blocks with syntax highlighting','Write YAML front matter','Apply Markdown extensions for technical writing'],
content:`<h2>Markdown Tables</h2>
<p>GFM tables use the pipe character | as column separator and hyphens - in the header separator row. Colons in the separator row control alignment.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">Markdown</span></div>
<pre>| Tool          | Purpose                | Cost          |
|:--------------|:----------------------:|:--------------|
| Oxygen XML    | DITA authoring         | ~$200/year    |
| VS Code       | Markdown, code editing | Free          |
| Arbortext     | S1000D, DITA          | Enterprise    |

Left-aligned : on left
Center-aligned : on both sides
Right-aligned : on right</pre></div>

<h2>Fenced Code Blocks</h2>
<p>Use triple backticks with a language identifier for syntax-highlighted code blocks:</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">Markdown</span></div>
<pre>\`\`\`xml
&lt;task id="replace-pump"&gt;
  &lt;title&gt;Replace Hydraulic Pump&lt;/title&gt;
  &lt;taskbody&gt;
    &lt;steps&gt;
      &lt;step&gt;&lt;cmd&gt;Depressurize system.&lt;/cmd&gt;&lt;/step&gt;
    &lt;/steps&gt;
  &lt;/taskbody&gt;
&lt;/task&gt;
\`\`\`</pre></div>

<h2>YAML Front Matter</h2>
<p>Many Markdown-based documentation systems (Hugo, Jekyll, Docusaurus, MkDocs) use YAML front matter — metadata at the top of the file between triple dashes:</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">Markdown with YAML</span></div>
<pre>---
title: Hydraulic System Overview
description: Overview of the Boeing 737 hydraulic system architecture.
author: Sanhita Yadav
date: 2024-01-15
tags: [hydraulic, ATA-29, system-description]
sidebar_position: 1
---

# Hydraulic System Overview

Content goes here...</pre></div>

<h2>Markdown for DITA Authors</h2>
<p>The dita-ot-markdown plugin allows DITA maps to reference .md files as topics. Markdown files are preprocessed into DITA XML before the DITA-OT publishes them — combining Markdown's ease of authoring with DITA's publishing power.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Referencing Markdown in a DITA map</span></div>
<pre><span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"topics/overview.md"</span> <span class="tok-attr">format</span>=<span class="tok-val">"markdown"</span><span class="tok-tag">/&gt;</span></pre></div>`,
quiz:[{question:'In a Markdown table, the separator row "|:---|:---:|---:|" means:',options:['All columns are left-aligned','First column left, second center, third right-aligned','All columns are center-aligned','The separator row itself is invalid'],correct:1,explanation:'In GFM tables: :--- = left-aligned, :---: = center-aligned, ---: = right-aligned. The separator row controls alignment for all rows below it.'}],
prev:'page-53',next:'page-55'},

{id:'page-55',pageNum:55,module:5,moduleTitle:'Markdown',title:'Markdown Tools and Workflows',subtitle:'Editors, linters, and publishing workflows for Markdown-based technical documentation.',duration:'20 min read',level:'Intermediate',searchKeywords:'Markdown editors VS Code preview linter markdownlint docusaurus mkdocs workflow',objectives:['Set up VS Code for Markdown authoring','Use markdownlint for quality checks','Understand Markdown-based doc site workflows','Convert between Markdown and DITA'],
content:`<h2>Markdown in VS Code</h2>
<p>VS Code (free, by Microsoft) is the most popular editor for Markdown. Key extensions for technical writers:</p>
<div class="table-wrapper"><table>
<thead><tr><th>Extension</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td>Markdown All in One</td><td>Auto-completion, TOC generation, preview shortcuts</td></tr>
<tr><td>markdownlint</td><td>Linting — enforces consistent Markdown style</td></tr>
<tr><td>Markdown Preview Enhanced</td><td>Rich preview with diagram support (Mermaid, PlantUML)</td></tr>
<tr><td>Paste Image</td><td>Paste clipboard images into Markdown documents</td></tr>
<tr><td>Spell Right</td><td>Spell checking in Markdown and other file types</td></tr>
</tbody></table></div>

<h2>markdownlint Rules</h2>
<p>markdownlint enforces consistency across your Markdown files. Key rules:</p>
<ul>
<li>MD001: Heading levels should only increment by one</li>
<li>MD022: Headings should be surrounded by blank lines</li>
<li>MD025: Multiple top-level headings (H1) in a document</li>
<li>MD030: Spaces after list markers</li>
<li>MD041: First line in file should be a top-level heading</li>
</ul>

<h2>Documentation Site Frameworks</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Framework</th><th>Language</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Docusaurus</td><td>React/JavaScript</td><td>Product documentation sites; Facebook open-source</td></tr>
<tr><td>MkDocs</td><td>Python</td><td>Software project docs; Material theme is excellent</td></tr>
<tr><td>Hugo</td><td>Go</td><td>Very fast; large sites; general purpose</td></tr>
<tr><td>Jekyll</td><td>Ruby</td><td>GitHub Pages integration; mature ecosystem</td></tr>
<tr><td>GitBook</td><td>Hosted SaaS</td><td>Team documentation; no server setup required</td></tr>
</tbody></table></div>

<h2>Converting Between Markdown and DITA</h2>
<p>Pandoc (a universal document converter) can convert Markdown to DITA XML and vice versa: <code>pandoc -f markdown -t docbook input.md -o output.xml</code>. While not perfect, this is useful for migrating legacy Markdown content into a DITA authoring workflow.</p>`,
quiz:[{question:'Your team writes documentation in Markdown files committed to a GitHub repository. A new writer asks what tool to use for checking style consistency. You recommend:',options:['Oxygen XML Editor','markdownlint — a linting tool that enforces consistent Markdown syntax and style rules','The GitHub web editor only','Microsoft Word'],correct:1,explanation:'markdownlint is the standard linter for Markdown files. It enforces consistent style rules (heading hierarchy, blank lines around headings, line length) across all Markdown files in a project, either via VS Code extension or as a CI/CD pre-commit hook.'}],
prev:'page-54',next:'page-56'},

{id:'page-56',pageNum:56,module:5,moduleTitle:'Markdown',title:'Markdown Exercises',subtitle:'Practice Markdown authoring — from a simple README to a complete documentation page.',duration:'30 min',level:'Hands-on',searchKeywords:'Markdown exercises practice README documentation write format',objectives:['Write a complete technical README in Markdown','Create a structured documentation page with all Markdown features','Set up VS Code for Markdown authoring'],
content:`<h2>Exercise 5.1 — Project README</h2>
<div class="exercise-box"><div class="exercise-box-header"><div class="exercise-icon">📝</div><div><div class="exercise-title">Write a Professional README</div></div></div>
<ol class="exercise-steps">
<li>Create a new file: hydraulic-system-docs/README.md</li>
<li>Include: Project title (H1), badges (optional), short description, Table of Contents, Installation/Setup section, Usage section, File structure section, Contributing guidelines, License</li>
<li>Add a Markdown table listing the 8 topics in your documentation set with their type and status</li>
<li>Add a Mermaid diagram (if your Markdown preview supports it) showing the documentation workflow</li>
<li>Preview in VS Code (Ctrl+Shift+V)</li>
</ol></div>

<h2>Exercise 5.2 — Technical Documentation Page</h2>
<div class="exercise-box"><div class="exercise-box-header"><div class="exercise-icon">📋</div><div><div class="exercise-title">Full Documentation Page in Markdown</div></div></div>
<ol class="exercise-steps">
<li>Create: hydraulic-system-docs/docs/system-overview.md</li>
<li>Add YAML front matter with title, description, tags, and date</li>
<li>Write H2 sections: System Architecture, Components, Specifications, Related Topics</li>
<li>Include a table of hydraulic system specifications</li>
<li>Include a fenced XML code block showing a sample DITA snippet</li>
<li>Include a blockquote with a safety note</li>
<li>Run markdownlint and fix all reported issues</li>
</ol></div>

<h2>Exercise 5.3 — Markdown in GitHub</h2>
<div class="exercise-box"><div class="exercise-box-header"><div class="exercise-icon">🐙</div><div><div class="exercise-title">Markdown on GitHub</div></div></div>
<ol class="exercise-steps">
<li>Create a new public GitHub repository: "dita-portfolio"</li>
<li>Add a README.md with your name, role, and a summary of your skills (DITA, XML, Oxygen, Markdown, Git)</li>
<li>Create a /docs folder and add your system-overview.md from Exercise 5.2</li>
<li>Commit and push</li>
<li>View your repository on GitHub and confirm Markdown renders correctly</li>
<li>Create a GitHub issue with a Markdown table listing 3 improvements you plan to make</li>
</ol></div>`,
quiz:[{question:'In your YAML front matter, you have: tags: [hydraulic, ATA-29]. What does this metadata do in a Docusaurus site?',options:['Creates XML elements for those tags','Enables tag-based filtering and browsing in the Docusaurus Tags page','Adds HTML meta tags to the published page','Nothing — YAML front matter is ignored by Docusaurus'],correct:1,explanation:'In Docusaurus (and most Markdown doc frameworks), the tags array in YAML front matter creates a tag taxonomy. Docusaurus generates a Tags page where readers can browse all pages by tag — helpful for organizing large documentation sets.'}],
prev:'page-55',next:'page-57'},

{id:'page-57',pageNum:57,module:5,moduleTitle:'Markdown',title:'Markdown Interview Prep',subtitle:'Markdown and documentation tooling questions you will face in technical writing interviews.',duration:'20 min read',level:'Interview Prep',searchKeywords:'Markdown interview questions GFM YAML front matter documentation sites',objectives:['Answer Markdown interview questions confidently','Explain Markdown vs DITA to interviewers','Describe your Markdown workflow'],
content:`<h2>Markdown Interview Questions and Answers</h2>
<div class="qa-item"><div class="qa-question">Q: What is GitHub Flavored Markdown and how does it differ from standard Markdown?</div><div class="qa-answer"><p>GitHub Flavored Markdown (GFM) is a superset of CommonMark (the standardized Markdown specification) with extensions added by GitHub. Key additions include: tables using | pipe syntax, task lists with - [x] / - [ ] syntax, strikethrough with ~~text~~, fenced code blocks with language identifiers for syntax highlighting, and autolink recognition. GFM is the default Markdown dialect on GitHub and GitLab.</p></div></div>

<div class="qa-item"><div class="qa-question">Q: When would you recommend Markdown over DITA for a documentation project?</div><div class="qa-answer"><p>Markdown is preferable when: the team is small and primarily developers who are comfortable with plain text and Git; the output is a website (documentation portal or GitHub README); complex reuse, conditional processing, and variant publishing are not required; simplicity and low barrier to contribution are more important than structure enforcement; and the tooling budget is limited. DITA is preferable for enterprise documentation with complex reuse requirements, multiple output formats (especially print PDF), structured compliance (aerospace, defense, medical), and large teams where structure enforcement prevents inconsistency.</p></div></div>

<div class="qa-item"><div class="qa-question">Q: What is YAML front matter and why is it used in Markdown documentation?</div><div class="qa-answer"><p>YAML front matter is a block of YAML metadata at the top of a Markdown file, delimited by triple dashes (---). It stores document metadata like title, description, author, date, tags, and framework-specific configuration. Documentation frameworks like Docusaurus, MkDocs, Hugo, and Jekyll read this metadata to: generate page titles, build navigation, categorize content by tags, control sidebar position, and configure SEO metadata. It's DITA's prolog equivalent for Markdown-based systems.</p></div></div>

<div class="qa-item"><div class="qa-question">Q: Describe your experience with Markdown-based documentation workflows.</div><div class="qa-answer"><p>In my experience [customize with your real experience], I've used Markdown for [specific contexts]. I'm comfortable writing in CommonMark and GFM syntax, using YAML front matter, working with VS Code and extensions like markdownlint for quality checking, and committing Markdown files to Git repositories. I understand that Markdown integrates into docs-as-code workflows where documentation lives alongside code in version control, with CI/CD pipelines that build and deploy documentation sites automatically on merge.</p></div></div>`,
quiz:[{question:'An interviewer asks: "You see ## and ### headings in a Markdown file but no # heading. The markdownlint tool flags an error. Why?" Your answer is:',options:['The file has too many heading levels','markdownlint rule MD002/MD041 requires the first heading to be an H1 (#); starting with ## violates heading level hierarchy','Markdown does not support ## headings','The error is incorrect — ## headings are always valid'],correct:1,explanation:'markdownlint rule MD041 requires the first line/heading of a file to be an H1. Starting with ## without a preceding # violates this rule (and MD001 which requires heading levels to increment by one). Good documentation style starts each page with a single H1 title.'}],
prev:'page-56',next:'page-58'},

{id:'page-58',pageNum:58,module:5,moduleTitle:'Markdown',title:'Docs as Code',subtitle:'The modern documentation philosophy that treats docs like software — version controlled, reviewed, and continuously deployed.',duration:'20 min read',level:'Intermediate',searchKeywords:'docs as code documentation workflow git version control CI/CD pull request review',objectives:['Explain the docs-as-code philosophy','Describe a complete docs-as-code workflow','Understand how CI/CD applies to documentation','Apply docs-as-code to DITA content'],
content:`<h2>What is Docs as Code?</h2>
<p>Docs as Code is a documentation approach where content is treated like software source code: stored in version control (Git), authored in lightweight markup (Markdown or DITA XML), reviewed through pull requests, tested with automated checks, and deployed via CI/CD pipelines.</p>

<h2>The Docs as Code Workflow</h2>
<div class="diagram-container"><div class="mermaid">
flowchart LR
  W["Writer\nbranchs from main"]
  A["Author in\nMarkdown/XML"]
  PR["Pull Request\n(peer review)"]
  CI["CI/CD Pipeline\n(lint, build, test)"]
  M["Merge to main"]
  D["Auto-deploy\n(publish to site)"]
  W --> A --> PR --> CI --> M --> D
</div></div>

<h2>Core Components</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Component</th><th>Tool Examples</th><th>Role</th></tr></thead>
<tbody>
<tr><td>Version control</td><td>Git, GitHub, GitLab</td><td>Source of truth; history; branching; review</td></tr>
<tr><td>Markup language</td><td>Markdown, DITA XML, AsciiDoc</td><td>Content authoring format</td></tr>
<tr><td>Linting</td><td>markdownlint, vale, xmllint</td><td>Style and quality enforcement</td></tr>
<tr><td>Build system</td><td>Docusaurus, MkDocs, DITA-OT, GitHub Actions</td><td>Transform source to published output</td></tr>
<tr><td>Hosting</td><td>GitHub Pages, Netlify, AWS S3, internal server</td><td>Deliver published docs to readers</td></tr>
</tbody></table></div>

<h2>DITA in a Docs as Code Workflow</h2>
<p>DITA content works perfectly in a docs-as-code workflow because DITA files are XML text files — ideal for Git version control. A typical DITA docs-as-code pipeline:</p>
<ol>
<li>Writers commit DITA topic changes to a feature branch</li>
<li>Pull request triggers CI: xmllint validation, DITA-OT build test</li>
<li>Reviewer approves; merge to main triggers production build</li>
<li>DITA-OT produces HTML5 and PDF; deployed to documentation server</li>
</ol>

<div class="callout success"><div class="callout-title">✓ Career Value</div>
<p>Docs-as-code is increasingly standard at technology companies and is growing in aerospace/defense. Understanding Git, CI/CD concepts, and how to author in version-controlled workflows makes you significantly more valuable than writers who only know traditional CMSes.</p></div>`,
quiz:[{question:'In a docs-as-code workflow, what happens when a writer opens a pull request?',options:['The documentation is immediately published','Reviewers can comment on specific lines of content changes; CI checks run automatically','The changes are merged to main without review','The writer emails their manager for approval'],correct:1,explanation:'A pull request in a docs-as-code workflow: (1) lets team members review the documentation changes line-by-line; (2) triggers automated CI checks (linting, build validation); (3) requires approval before merging. This is the same process developers use for code review, applied to documentation.'}],
prev:'page-57',next:'page-59'},

{id:'page-59',pageNum:59,module:5,moduleTitle:'Markdown',title:'Markdown Summary and Quick Reference',subtitle:'Complete reference card for all Markdown syntax — bookmark this for daily use.',duration:'10 min read',level:'Reference',searchKeywords:'Markdown reference cheatsheet syntax complete quick',objectives:['Have a complete Markdown reference available','Know all GFM syntax options','Apply the right syntax for any situation'],
content:`<h2>Complete Markdown Syntax Reference</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Element</th><th>Markdown Syntax</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>H1</td><td># Heading 1</td><td>Only one per document</td></tr>
<tr><td>H2</td><td>## Heading 2</td><td></td></tr>
<tr><td>H3–H6</td><td>### through ######</td><td></td></tr>
<tr><td>Bold</td><td>**text** or __text__</td><td>** is more common</td></tr>
<tr><td>Italic</td><td>*text* or _text_</td><td>* is more common</td></tr>
<tr><td>Bold+Italic</td><td>***text***</td><td></td></tr>
<tr><td>Strikethrough</td><td>~~text~~</td><td>GFM only</td></tr>
<tr><td>Inline code</td><td>\`code\`</td><td></td></tr>
<tr><td>Code block</td><td>\`\`\`lang ... \`\`\`</td><td>Language for highlighting</td></tr>
<tr><td>Link</td><td>[text](url)</td><td></td></tr>
<tr><td>Image</td><td>![alt](url)</td><td></td></tr>
<tr><td>Reference link</td><td>[text][ref]</td><td>Define: [ref]: url</td></tr>
<tr><td>Unordered list</td><td>- item or * item</td><td>Blank line before first item</td></tr>
<tr><td>Ordered list</td><td>1. item</td><td>Numbers auto-increment</td></tr>
<tr><td>Nested list</td><td>Indent 2 or 4 spaces</td><td></td></tr>
<tr><td>Blockquote</td><td>> text</td><td>Nest with >></td></tr>
<tr><td>Horizontal rule</td><td>--- or ***</td><td>Blank line before</td></tr>
<tr><td>Table</td><td>| col | col |</td><td>GFM only</td></tr>
<tr><td>Task list</td><td>- [x] done / - [ ] todo</td><td>GFM only</td></tr>
<tr><td>Escape</td><td>\\*</td><td>Escape any special char</td></tr>
<tr><td>HTML</td><td>&lt;tag&gt;...&lt;/tag&gt;</td><td>Raw HTML is allowed</td></tr>
</tbody></table></div>

<h2>YAML Front Matter Template</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">YAML</span></div>
<pre>---
title: Page Title
description: One-sentence SEO description.
author: Your Name
date: YYYY-MM-DD
tags: [tag1, tag2]
sidebar_position: 1
draft: false
---</pre></div>`,
quiz:[{question:'You want to add a code block in Markdown that shows XML syntax with highlighting. The correct syntax is:',options:['<code>xml ... </code>','!xml ... !','```xml ... ```','[xml] ... [/xml]'],correct:2,explanation:'Fenced code blocks in CommonMark and GFM use triple backticks, optionally followed by a language identifier: ```xml followed by the code, then ``` on its own line. The language identifier enables syntax highlighting in most Markdown renderers.'}],
prev:'page-58',next:'page-60'},
];
