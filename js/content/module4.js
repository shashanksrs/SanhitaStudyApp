const MODULE4_PAGES = [
{
  id:'page-41',pageNum:41,module:4,moduleTitle:'Oxygen XML Editor',
  title:'Introduction to Oxygen XML Editor',
  subtitle:'The industry-leading XML and DITA authoring environment — getting oriented and productive from day one.',
  duration:'20 min read',level:'Beginner',
  searchKeywords:'Oxygen XML Editor introduction interface overview panels views DITA authoring tool',
  objectives:['Understand what Oxygen XML Editor is and why it is used','Identify the key interface panels','Understand the difference between Author, Text, and Grid views','Launch Oxygen and open a DITA file'],
  content:`
<h2>What is Oxygen XML Editor?</h2>
<p>Oxygen XML Editor is the most widely used XML and DITA authoring environment in the world. It is produced by Syncro Soft (Romania) and used by technical writers, information architects, and developers who work with XML content — especially DITA, DocBook, XBRL, TEI, and custom XML schemas.</p>
<p>For DITA authors specifically, Oxygen provides:</p>
<ul>
<li>A visual word-processor-like Author view for DITA authoring</li>
<li>A source Text view for direct XML editing</li>
<li>Built-in DITA-OT integration for one-click publishing</li>
<li>DITA-aware validation, autocomplete, and content assistance</li>
<li>Conref, keyref, and cross-reference management tools</li>
<li>DITA maps manager for assembling publications</li>
</ul>

<h2>Interface Overview</h2>
<div class="diagram-container"><div class="mermaid">
graph TD
  subgraph "Oxygen XML Editor Interface"
    MB["Menu Bar & Toolbars"]
    subgraph "Left Panels"
      DMMV["DITA Maps Manager\n(map navigation)"]
      PJ["Project\n(file browser)"]
      OL["Outline\n(topic structure)"]
    end
    subgraph "Center — Editor Area"
      AUTH["Author View\n(visual, WYSIWYG-like)"]
      TEXT["Text View\n(raw XML)"]
      GRID["Grid View\n(table-based)"]
    end
    subgraph "Right/Bottom Panels"
      ATTR["Attributes\n(edit current element)"]
      EL["Elements\n(insert palette)"]
      RES["Results\n(validation, search)"]
    end
  end
</div></div>

<h2>Three Editor Views</h2>
<div class="table-wrapper"><table>
<thead><tr><th>View</th><th>What you see</th><th>Best for</th></tr></thead>
<tbody>
<tr><td><strong>Author</strong></td><td>Formatted content with CSS styling; XML tags hidden (or shown as markers)</td><td>Writing and editing content; non-technical authors</td></tr>
<tr><td><strong>Text</strong></td><td>Raw XML source with syntax highlighting</td><td>XML editing, troubleshooting, conref/keyref authoring, advanced editing</td></tr>
<tr><td><strong>Grid</strong></td><td>Tree/table structure view</td><td>Viewing XML tree, editing attributes, structured data entry</td></tr>
</tbody></table></div>
<p>Switch between views using the tabs at the bottom of the editor pane. You can do all authoring in Author view; experienced users often switch to Text view for precision work.</p>

<h2>Oxygen Editions</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Edition</th><th>Key Features</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>XML Editor</td><td>Full XML, DITA, JSON, HTML authoring and publishing</td><td>Technical writers, information architects</td></tr>
<tr><td>XML Developer</td><td>XML Editor + advanced XSLT/XQuery/schema development</td><td>XML developers, XSLT customization</td></tr>
<tr><td>XML Author</td><td>Simplified authoring-only version (no schema development tools)</td><td>Content authors who only write, not develop</td></tr>
<tr><td>Web Author</td><td>Browser-based authoring (no desktop install required)</td><td>Teams, review workflows, CCMS integration</td></tr>
</tbody></table></div>`,
  quiz:[
    {question:'In Oxygen XML Editor, which view shows the XML source code directly?',options:['Author view','Text view','Grid view','Outline view'],correct:1,explanation:'Text view displays the raw XML source with syntax highlighting. Author view shows formatted content with CSS styling (tags mostly hidden). Grid view shows a tree/table structure.'},
    {question:'Which Oxygen panel shows the hierarchical structure of topics in a DITA map?',options:['The Attributes panel','The DITA Maps Manager','The Elements panel','The Results panel'],correct:1,explanation:'The DITA Maps Manager shows the hierarchical topic structure of a DITA map, lets you open topics from the map, and provides a starting point for transformation scenarios.'},
  ],
  prev:'page-40',next:'page-42'
},

{
  id:'page-42',pageNum:42,module:4,moduleTitle:'Oxygen XML Editor',
  title:'Author View',
  subtitle:'Using Oxygen\'s visual authoring mode to write DITA content without writing raw XML.',
  duration:'25 min read',level:'Beginner',
  searchKeywords:'Oxygen Author view visual editing toolbar DITA elements insert formatting',
  objectives:['Navigate and use Author view effectively','Insert DITA elements using the toolbar and menus','Use the content completion assistant','Edit text and apply inline markup'],
  content:`
<h2>Author View: The Visual DITA Editor</h2>
<p>Author view is Oxygen's WYSIWYG-like editing mode for XML content. It applies CSS stylesheets to render your DITA XML as formatted content — similar to how a browser renders HTML. Tags are either hidden or shown as small visual markers, making it accessible to writers who are not XML experts.</p>

<h2>The Author Toolbar</h2>
<p>The Author toolbar provides quick access to the most common DITA authoring actions:</p>
<ul>
<li><strong>Bold / Italic / Underline:</strong> Applies &lt;b&gt;, &lt;i&gt;, &lt;u&gt; — though semantic elements like &lt;uicontrol&gt;, &lt;cmdname&gt; are preferred in DITA</li>
<li><strong>Insert Table:</strong> Wizard to create CALS tables</li>
<li><strong>Insert List:</strong> Insert &lt;ul&gt; or &lt;ol&gt;</li>
<li><strong>Insert Cross-Reference:</strong> Guided xref insertion with target selection</li>
<li><strong>Insert Image:</strong> Insert &lt;image&gt; with file picker</li>
<li><strong>Insert Note:</strong> Insert &lt;note&gt; with type selection (note, warning, caution, important, tip)</li>
<li><strong>Validate:</strong> Validate current document against DTD/schema</li>
</ul>

<h2>Content Completion Assistant</h2>
<p>Press <kbd>Enter</kbd> or <kbd>Ctrl+Space</kbd> in Author view to open the Content Completion Assistant — a context-sensitive popup that shows what elements are valid at the cursor position. This is one of Oxygen's most powerful features: it prevents structural errors by only offering valid elements.</p>

<h2>The Elements Panel</h2>
<p>The Elements panel (usually on the right) shows all XML elements valid at the current cursor position, organized by element type. Double-click any element to insert it.</p>

<h2>The Attributes Panel</h2>
<p>The Attributes panel shows all attributes for the currently selected element with their current values. Click any attribute value to edit it inline. Required attributes are marked. This panel is essential for setting <code>id</code>, <code>href</code>, <code>conref</code>, and profiling attributes.</p>

<h2>Track Changes in Author View</h2>
<p>Oxygen supports track changes (Edit > Track Changes > Record Changes). This creates an editorial workflow where reviewers can mark up content and authors can accept or reject changes — similar to Microsoft Word's track changes feature, but operating on XML.</p>

<div class="callout tip"><div class="callout-title">💡 Pro Tip: Show Tags</div>
<p>In Author view, use Document > Author > Show Tags > Full Tags with Attributes to see the XML tag structure while still working in the formatted view. This is invaluable for understanding what elements are where without switching to Text view.</p></div>`,
  quiz:[
    {question:'You are in Oxygen Author view and want to insert a DITA note element. The fastest way is:',options:['Switch to Text view and type the XML','Press Ctrl+Space for content completion and select "note" from the popup','Go to Document > Insert > Note','Notes cannot be inserted in Author view'],correct:1,explanation:'Ctrl+Space (or Enter) in Author view opens the Content Completion Assistant, which shows valid elements at the cursor position. Select "note" from the list to insert it. This is faster and safer than typing XML directly.'},
  ],
  prev:'page-41',next:'page-43'
},

{
  id:'page-43',pageNum:43,module:4,moduleTitle:'Oxygen XML Editor',
  title:'Text View and XML Editing',
  subtitle:'Working directly with XML source in Oxygen — when and how to use Text view for precision authoring.',
  duration:'20 min read',level:'Intermediate',
  searchKeywords:'Oxygen Text view XML source editing syntax highlighting autocomplete validation',
  objectives:['Use Text view for direct XML editing','Use keyboard shortcuts efficiently','Understand when Text view is preferable to Author view','Work with conrefs and keyrefs in Text view'],
  content:`
<h2>When to Use Text View</h2>
<p>Author view is great for content entry. Text view is better when:</p>
<ul>
<li>Writing or editing conref attributes (the full path syntax is clearer in raw XML)</li>
<li>Troubleshooting validation errors (see exactly which tag has the problem)</li>
<li>Adding profiling attributes to many elements</li>
<li>Working with complex table structures</li>
<li>Copying XML snippets from another tool or reference</li>
<li>Learning what Author view is doing behind the scenes</li>
</ul>

<h2>Text View Features</h2>
<h3>Syntax Highlighting</h3>
<p>Oxygen color-codes XML in Text view: element names in blue, attribute names in green, attribute values in orange/red, comments in grey, content in black. This makes the structure instantly readable.</p>

<h3>Folding</h3>
<p>Click the triangle/arrow in the left gutter to fold (collapse) any element and its children. This lets you hide sections you're not editing and focus on the relevant XML.</p>

<h3>Content Completion</h3>
<p>Content completion works in Text view too — Ctrl+Space after an opening angle bracket &lt; shows valid elements; after a space inside a tag shows valid attributes; after = shows valid attribute values for constrained attributes.</p>

<h2>Essential Keyboard Shortcuts</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Shortcut</th><th>Action</th></tr></thead>
<tbody>
<tr><td>Ctrl+Space</td><td>Content Completion Assistant</td></tr>
<tr><td>Ctrl+Shift+V</td><td>Validate document</td></tr>
<tr><td>Ctrl+Shift+W</td><td>Well-formedness check</td></tr>
<tr><td>Ctrl+/</td><td>Comment/uncomment current line</td></tr>
<tr><td>Ctrl+D</td><td>Duplicate current line</td></tr>
<tr><td>Alt+Shift+D</td><td>Delete line</td></tr>
<tr><td>Ctrl+Shift+F</td><td>Format and Indent (pretty-print XML)</td></tr>
<tr><td>Ctrl+G</td><td>Go to line</td></tr>
<tr><td>Ctrl+E</td><td>Surround with tag</td></tr>
<tr><td>Alt+Shift+E</td><td>Remove surrounding tag</td></tr>
<tr><td>Ctrl+T</td><td>Toggle between Author/Text/Grid view</td></tr>
</tbody></table></div>

<h2>Find and Replace in XML</h2>
<p>Oxygen's Find/Replace (Ctrl+H) supports regular expressions and can search within specific XML element types — for example, find a string only in &lt;cmd&gt; elements. This is far more powerful than a plain text editor's find/replace and is essential for large-scale editing tasks.</p>`,
  quiz:[
    {question:'In Oxygen Text view, pressing Ctrl+Space inside an XML opening tag (after a space) shows:',options:['A list of all XML files in the project','Valid attribute names for the current element','The content completion history','The DITA topic type selection dialog'],correct:1,explanation:'Context-sensitive content completion in Text view offers: valid element names after <, valid attribute names when inside a tag after a space, and valid attribute values for constrained attributes after =.'},
  ],
  prev:'page-42',next:'page-44'
},

{
  id:'page-44',pageNum:44,module:4,moduleTitle:'Oxygen XML Editor',
  title:'DITA Maps Manager',
  subtitle:'Using Oxygen\'s DITA Maps Manager to build, navigate, and manage publication structures.',
  duration:'25 min read',level:'Intermediate',
  searchKeywords:'Oxygen DITA Maps Manager topicref add move map hierarchy publish transform',
  objectives:['Open and navigate a DITA map in the Maps Manager','Add and rearrange topicrefs graphically','Use the Maps Manager to launch transformations','Manage multiple maps in one project'],
  content:`
<h2>The DITA Maps Manager Panel</h2>
<p>The DITA Maps Manager is one of Oxygen's most important panels for DITA authors. It provides a graphical, tree-based view of your DITA map — showing all topicrefs in their hierarchical order, the same structure that will become your Table of Contents.</p>

<h2>Opening a Map</h2>
<p>To open a DITA map in the Maps Manager:</p>
<ol>
<li>Open the DITA map file in the editor (double-click from Project panel)</li>
<li>When the .ditamap opens, Oxygen prompts to open it in the DITA Maps Manager — click Yes</li>
<li>Or: Right-click the .ditamap file in the Project panel > Open in DITA Maps Manager</li>
</ol>

<h2>Maps Manager Operations</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Operation</th><th>How to do it in Maps Manager</th></tr></thead>
<tbody>
<tr><td>Open a topic for editing</td><td>Double-click the topicref; or right-click > Open</td></tr>
<tr><td>Add a new topic</td><td>Right-click > Append Child / Insert Before / Insert After > New DITA Topic</td></tr>
<tr><td>Add existing topic</td><td>Right-click > Append Child > Reference to File</td></tr>
<tr><td>Move a topic up/down</td><td>Drag-and-drop; or use Move Up/Move Down buttons in toolbar</td></tr>
<tr><td>Indent (make child)</td><td>Select topicref > Promote/Demote buttons, or Ctrl+[/Ctrl+]</td></tr>
<tr><td>Delete a topicref</td><td>Select > Delete key (removes from map, does not delete file)</td></tr>
<tr><td>Add keydef</td><td>Right-click > Append Child > Key Definition</td></tr>
<tr><td>Run transformation</td><td>Apply Transformation Scenario button (play icon in Maps Manager toolbar)</td></tr>
</tbody></table></div>

<h2>Validate and Check Map</h2>
<p>Right-click the root map entry > Validate > Validate and Check for Completeness. This runs DITA-specific validation that checks:</p>
<ul>
<li>All topicref href paths are valid (files exist)</li>
<li>All conref targets can be resolved</li>
<li>All keyref keys are defined</li>
<li>No duplicate IDs across the publication</li>
<li>All cross-references resolve correctly</li>
</ul>
<p>Run this validation regularly, especially before delivering content. Fix all errors before publishing.</p>

<h2>The Context (Root) Map</h2>
<p>Oxygen has the concept of a "context map" — the root map currently open in the Maps Manager. Key definitions in this map are used to resolve keyrefs when you're editing topics. Setting the correct context map ensures that keyrefs show the right values as you author.</p>`,
  quiz:[
    {question:'In the Oxygen DITA Maps Manager, "Validate and Check for Completeness" checks all of the following EXCEPT:',options:['Broken topicref href paths','Unresolvable conref targets','Grammar and spelling errors in topic content','Duplicate topic IDs across the publication'],correct:2,explanation:'DITA Maps Manager validation is structural and reference-integrity checking — broken links, unresolvable conrefs/keyrefs, duplicate IDs. It does not check grammar or spelling (use a spell checker for that).'},
  ],
  prev:'page-43',next:'page-45'
},

{
  id:'page-45',pageNum:45,module:4,moduleTitle:'Oxygen XML Editor',
  title:'Transformation Scenarios',
  subtitle:'Configuring and running Oxygen transformation scenarios to publish DITA content to PDF, HTML5, and other formats.',
  duration:'30 min read',level:'Intermediate',
  searchKeywords:'Oxygen transformation scenario DITA-OT publish PDF HTML5 configure parameters DITAVAL',
  objectives:['Configure a DITA transformation scenario in Oxygen','Set DITAVAL for conditional processing','Run HTML5 and PDF transformations','Troubleshoot common publishing errors'],
  content:`
<h2>What is a Transformation Scenario?</h2>
<p>A transformation scenario in Oxygen is a saved configuration for running the DITA-OT. It captures:</p>
<ul>
<li>The output format (transtype): pdf2, html5, xhtml, epub, etc.</li>
<li>The DITAVAL file path (for conditional processing)</li>
<li>The output directory</li>
<li>Custom DITA-OT parameters</li>
<li>Which stylesheets or plugins to use</li>
</ul>

<h2>Creating a Transformation Scenario</h2>
<p>From the DITA Maps Manager toolbar:</p>
<ol>
<li>Click the wrench (Configure Transformation Scenarios) button, or Document > Transformation > Configure Transformation Scenarios</li>
<li>Click New > DITA OT Transformation</li>
<li>Name your scenario (e.g., "737 Classic — PDF for Review")</li>
<li>Set the transtype to your desired output (pdf2, html5, etc.)</li>
<li>On the Filters tab: browse to and select your DITAVAL file</li>
<li>On the Output tab: set the output directory</li>
<li>Click OK, then Apply Associated</li>
</ol>

<h2>Common Transformation Types</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Transtype</th><th>Output Format</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>pdf2</td><td>PDF</td><td>Uses Apache FOP by default; supports custom PDF plugins</td></tr>
<tr><td>html5</td><td>HTML5 site</td><td>Basic HTML5 without navigation; use webhelp for full portal</td></tr>
<tr><td>webhelp-responsive</td><td>WebHelp portal</td><td>Responsive HTML with TOC, search, breadcrumbs (Oxygen plugin)</td></tr>
<tr><td>xhtml</td><td>XHTML</td><td>Legacy format; still used for some help systems</td></tr>
<tr><td>epub</td><td>EPUB 3 e-book</td><td>For tablet and e-reader distribution</td></tr>
<tr><td>markdown</td><td>Markdown files</td><td>Requires dita-ot-markdown plugin</td></tr>
</tbody></table></div>

<h2>Key DITA-OT Parameters</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Parameter</th><th>Purpose</th><th>Example Value</th></tr></thead>
<tbody>
<tr><td>args.input</td><td>Input DITA map path</td><td>\${file_path}</td></tr>
<tr><td>output.dir</td><td>Output directory</td><td>\${pp}/output/pdf</td></tr>
<tr><td>args.filter</td><td>DITAVAL file for filtering</td><td>\${pp}/filters/737-classic.ditaval</td></tr>
<tr><td>args.css</td><td>Custom CSS for HTML output</td><td>custom.css</td></tr>
<tr><td>args.draft</td><td>Show draft comments in output</td><td>yes / no</td></tr>
<tr><td>clean.temp</td><td>Clean temp directory after build</td><td>yes</td></tr>
</tbody></table></div>

<h2>Troubleshooting Publishing Errors</h2>
<p>When a transformation fails, Oxygen shows errors in the Results panel. Common issues:</p>
<ul>
<li><strong>File not found:</strong> A topicref href path is wrong. Fix the path in the map.</li>
<li><strong>Conref cannot be resolved:</strong> Source file or element ID doesn't exist. Check the conref path.</li>
<li><strong>Duplicate ID:</strong> Two topics have the same id attribute. Rename one.</li>
<li><strong>FOP error in PDF:</strong> Usually a malformed table or unsupported character. Check the PDF log.</li>
<li><strong>Out of memory:</strong> Large publication. Increase JVM heap in Oxygen preferences (Oxygen > Preferences > XML > XSLT-FO-XQuery > JVM).</li>
</ul>`,
  quiz:[
    {question:'You want to publish your DITA map as PDF for the 737 Classic only (excluding 737-NG content). In the transformation scenario, you should:',options:['Manually delete 737-NG topics from the map before publishing','Specify the 737-classic.ditaval filter file in the scenario\'s Filters tab','Change the transtype to "737-classic-pdf"','Add product="737-classic" to the map element'],correct:1,explanation:'The Filters tab in the transformation scenario lets you specify a DITAVAL file. The DITA-OT applies the filter during transformation, including/excluding content based on profiling attributes — without modifying your source files.'},
  ],
  prev:'page-44',next:'page-46'
},

{id:'page-46',pageNum:46,module:4,moduleTitle:'Oxygen XML Editor',title:'Cross-References and Links',subtitle:'Managing internal cross-references, external links, and related-links in Oxygen XML Editor.',duration:'20 min read',level:'Intermediate',searchKeywords:'Oxygen cross-reference xref link related-links href keyref insert link target',objectives:['Insert cross-references using Oxygen\'s xref wizard','Use keyref for links to avoid hardcoded paths','Manage related-links sections','Validate that all links resolve'],
content:`<h2>Cross-References in DITA</h2>
<p>DITA uses the <code>&lt;xref&gt;</code> element for internal cross-references and external hyperlinks. In DITA, cross-references should always use either <code>href</code> (to a specific file/element) or <code>keyref</code> (to a key defined in the map). Never hardcode text like "see Chapter 5" — always create a real link.</p>

<h2>Inserting a Cross-Reference in Oxygen</h2>
<p>In Author view:</p>
<ol>
<li>Place cursor where the link should appear</li>
<li>Click Insert > Cross Reference (or the xref button in the toolbar)</li>
<li>The Insert Cross Reference dialog opens</li>
<li>Browse to the target topic (or type the href path)</li>
<li>Optionally, select a specific element within the topic (for element-level xref)</li>
<li>Choose href or keyref approach</li>
<li>Oxygen generates the &lt;xref&gt; with correct syntax</li>
</ol>

<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Cross-reference examples</span></div>
<pre><span class="tok-com">&lt;!-- Cross-reference to another topic --&gt;</span>
<span class="tok-tag">&lt;p&gt;</span>For fluid specifications, see 
  <span class="tok-tag">&lt;xref</span> <span class="tok-attr">href</span>=<span class="tok-val">"../reference/hyd-fluid-specs.dita"</span><span class="tok-tag">&gt;</span>
    Hydraulic Fluid Specifications<span class="tok-tag">&lt;/xref&gt;</span>.<span class="tok-tag">&lt;/p&gt;</span>

<span class="tok-com">&lt;!-- Keyref-based cross-reference (recommended for reuse) --&gt;</span>
<span class="tok-tag">&lt;xref</span> <span class="tok-attr">keyref</span>=<span class="tok-val">"hyd-fluid-specs"</span><span class="tok-tag">&gt;</span>Hydraulic Fluid Specifications<span class="tok-tag">&lt;/xref&gt;</span>

<span class="tok-com">&lt;!-- External URL link --&gt;</span>
<span class="tok-tag">&lt;xref</span> <span class="tok-attr">href</span>=<span class="tok-val">"https://www.boeing.com/support"</span> 
      <span class="tok-attr">format</span>=<span class="tok-val">"html"</span> <span class="tok-attr">scope</span>=<span class="tok-val">"external"</span><span class="tok-tag">&gt;</span>Boeing Support<span class="tok-tag">&lt;/xref&gt;</span>

<span class="tok-com">&lt;!-- Cross-reference to a specific element within a topic --&gt;</span>
<span class="tok-tag">&lt;xref</span> <span class="tok-attr">href</span>=<span class="tok-val">"../reference/specs.dita#ref-specs/sec-pressure"</span><span class="tok-tag">/&gt;</span></pre></div>

<h2>Related Links</h2>
<p>The &lt;related-links&gt; section at the end of a topic provides navigation links to related content. At publish time, DITA-OT formats these as a "See Also" or "Related Topics" section.</p>

<div class="callout tip"><div class="callout-title">💡 Relationship Tables</div>
<p>For large publications, consider using relationship tables in the DITA map (reltable element) instead of related-links in individual topics. Relationship tables define link relationships centrally, keeping topics free of hard-coded links and making it easier to update relationships across many topics at once.</p></div>`,
quiz:[{question:'When inserting a cross-reference in a DITA topic that will be reused across multiple publications, the best approach is:',options:['Use href with the absolute file path','Use keyref — define the key in each map, link to the key in the topic','Use related-links instead of xref','Type the title of the target topic as plain text'],correct:1,explanation:'Keyref-based links are the most reusable: the topic links to a key name, each map can define that key to point to different targets, enabling the same topic to correctly link to different resources in different publications.'}],
prev:'page-45',next:'page-47'},

{id:'page-47',pageNum:47,module:4,moduleTitle:'Oxygen XML Editor',title:'Validation and Error Handling',subtitle:'Catching and fixing XML and DITA errors in Oxygen — the key to always shipping valid content.',duration:'20 min read',level:'Intermediate',searchKeywords:'Oxygen validation DTD schema errors warnings validate document DITA check completeness',objectives:['Understand DITA validation in Oxygen','Interpret common validation errors','Fix structural and reference errors','Use Validate and Check for Completeness'],
content:`<h2>Why Validation Matters</h2>
<p>DITA content must be valid XML before it can be published. An invalid DITA file — one with missing required elements, incorrect element order, or wrong parent-child relationships — will cause the DITA-OT to fail with errors. Validating frequently (after every few changes) prevents error accumulation.</p>

<h2>Types of Validation in Oxygen</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Validation Type</th><th>Checks</th><th>How to run</th></tr></thead>
<tbody>
<tr><td>Well-formedness</td><td>Is the XML syntactically correct? (matching tags, proper nesting)</td><td>Ctrl+Shift+W or continuous (red marker in gutter)</td></tr>
<tr><td>DTD/Schema validation</td><td>Is the element structure valid per the DITA DTD?</td><td>Ctrl+Shift+V; also runs on save by default</td></tr>
<tr><td>Check for Completeness</td><td>Do all cross-references, conrefs, and keyrefs resolve?</td><td>DITA Maps Manager > right-click root > Validate > Check for Completeness</td></tr>
</tbody></table></div>

<h2>Common Validation Errors and Fixes</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Error</th><th>Meaning</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>Element 'X' is not allowed here</td><td>Wrong element in wrong context (e.g., &lt;steps&gt; inside &lt;conbody&gt;)</td><td>Move element to correct location; check topic type</td></tr>
<tr><td>Attribute 'X' is not allowed</td><td>Invalid attribute for this element</td><td>Remove attribute or move to correct element</td></tr>
<tr><td>Element content is incomplete</td><td>Required child element missing (e.g., &lt;step&gt; missing &lt;cmd&gt;)</td><td>Add required child element</td></tr>
<tr><td>Duplicate ID: 'xyz'</td><td>Two elements share the same id value in the publication</td><td>Rename one of the conflicting IDs</td></tr>
<tr><td>Cannot resolve conref</td><td>Referenced file or element ID doesn't exist</td><td>Check file path and element ID in conref attribute</td></tr>
<tr><td>Key 'xyz' is undefined</td><td>A keyref references a key not defined in the context map</td><td>Add keydef to the map or check key name spelling</td></tr>
</tbody></table></div>

<h2>Oxygen's Real-Time Validation</h2>
<p>Oxygen validates continuously as you type. Red markers in the right margin indicate errors; yellow markers indicate warnings. Hover over a marker to see the error message. Click the marker to jump to the error location. The error count appears in the bottom status bar.</p>`,
quiz:[{question:'You save a DITA task topic and see a red validation error "Element content is incomplete" on the <step> element. This means:',options:['The step is too short','The step is missing a required child element — most likely <cmd>','The step has too many child elements','The step has an incorrect id attribute'],correct:1,explanation:'In a DITA task, each <step> must contain a <cmd> element (the command). "Element content is incomplete" means a required child element is missing. In this context, <step> without <cmd> triggers this error.'}],
prev:'page-46',next:'page-48'},

{id:'page-48',pageNum:48,module:4,moduleTitle:'Oxygen XML Editor',title:'Refactoring and Reuse Tools',subtitle:'Using Oxygen\'s refactoring tools, conref manager, and reuse mechanisms to maintain large documentation sets.',duration:'20 min read',level:'Advanced',searchKeywords:'Oxygen refactoring rename ID conref manager reuse find references XML refactoring',objectives:['Use XML refactoring to rename IDs safely','Find all references to a topic or element','Use the Reuse panel to manage conrefs','Apply batch refactoring across multiple files'],
content:`<h2>XML Refactoring</h2>
<p>Oxygen's XML Refactoring tool (Tools > XML Refactoring) provides safe batch transformations across your entire project:</p>
<ul>
<li><strong>Rename element:</strong> Rename an element everywhere in selected files</li>
<li><strong>Add/Remove attribute:</strong> Batch-add or remove an attribute from elements matching a criteria</li>
<li><strong>Move element content:</strong> Restructure element hierarchies</li>
<li><strong>Custom refactoring:</strong> Write XSLT or XQuery to perform arbitrary batch transformations</li>
</ul>

<h2>Safe ID Renaming</h2>
<p>Never manually search-and-replace IDs — this breaks conrefs and cross-references. Instead, use Oxygen's refactoring:</p>
<ol>
<li>Right-click on the element with the ID you want to rename</li>
<li>Select Refactoring > Rename Element</li>
<li>Enter the new ID</li>
<li>Oxygen updates all conrefs and xrefs that reference this ID across the project</li>
</ol>

<h2>Find References</h2>
<p>Right-click any topic in the Project panel > Find References: Oxygen searches your entire project and lists every file that references this topic via topicref, xref, or conref. Essential before renaming or moving files.</p>

<h2>The Reuse Panel</h2>
<p>Oxygen's Reuse panel (Window > Show View > Reuse) provides a dedicated interface for:</p>
<ul>
<li>Inserting conrefs by browsing to source elements visually</li>
<li>Viewing all conrefs in the current topic</li>
<li>Inserting keyrefs by browsing available keys from the context map</li>
<li>Viewing push content reuse (conref push)</li>
</ul>

<h2>Batch Find and Replace in XML</h2>
<p>Find/Replace (Ctrl+H) with "XPath in results" lets you search within specific element types. For example: find "Boeing 737" in &lt;p&gt; elements only, then replace with a keyref. This prevents accidentally changing a product name in a code example or warning where it must remain literal.</p>`,
quiz:[{question:'You need to rename a topic ID from "task-replace-filter" to "task-replace-main-filter" and update all conrefs that reference it. The safest approach in Oxygen is:',options:['Manually find-and-replace the old ID string in all files','Use a text editor with project-wide search/replace','Use Oxygen\'s Refactoring > Rename Element, which updates all references automatically','Delete and recreate the topic with the new ID'],correct:2,explanation:'Oxygen\'s Refactoring > Rename Element safely updates the ID in the element and all references (conrefs, xrefs) across the project. Manual find-replace risks missing references or making incorrect replacements in non-reference contexts.'}],
prev:'page-47',next:'page-49'},

{id:'page-49',pageNum:49,module:4,moduleTitle:'Oxygen XML Editor',title:'Customizing Oxygen',subtitle:'Tailoring Oxygen XML Editor to match your workflow, style guide, and team standards.',duration:'20 min read',level:'Advanced',searchKeywords:'Oxygen customize preferences options scenarios templates author CSS framework',objectives:['Configure essential Oxygen preferences','Create document templates for team consistency','Customize Author view CSS','Set up project-level settings'],
content:`<h2>Oxygen Preferences</h2>
<p>Oxygen's preferences (Options > Preferences) are extensive. The most important for DITA authors:</p>
<div class="table-wrapper"><table>
<thead><tr><th>Preference Section</th><th>Key Settings</th></tr></thead>
<tbody>
<tr><td>Editor > Author</td><td>Show Tags mode, track changes defaults, spell check language</td></tr>
<tr><td>Editor > Spell Check</td><td>Language, custom dictionary (add technical terms), auto-correct</td></tr>
<tr><td>XML > DITA</td><td>Default DITA-OT version, JVM memory, default transformation</td></tr>
<tr><td>Document Type Association</td><td>Associate custom schemas, modify frameworks (CSS, toolbars)</td></tr>
<tr><td>Global</td><td>Auto-save interval, backup files, line endings</td></tr>
</tbody></table></div>

<h2>Creating Document Templates</h2>
<p>Templates ensure all writers start from the same consistent structure. Create templates via:</p>
<ol>
<li>File > New > New from Templates</li>
<li>Choose "New Document" and the DITA topic type</li>
<li>Modify the template (add required elements your team uses)</li>
<li>Save to a shared templates directory</li>
<li>Configure in Preferences > Document Templates so all team members see it</li>
</ol>

<h2>Custom Author View CSS</h2>
<p>Oxygen renders Author view using CSS applied via the DITA document type framework. You can customize this CSS to make content look different in the authoring environment (not the published output). Common customizations:</p>
<ul>
<li>Color-code different profiling attribute values (737-classic in blue, 737-ng in orange)</li>
<li>Show custom element labels</li>
<li>Highlight content marked for translation review</li>
</ul>

<h2>Sharing Settings via Project Files</h2>
<p>Oxygen project files (.xpr) can store shared settings accessible to the whole team: transformation scenarios, validation scenarios, and working file paths. Store the .xpr file in your Git repository so all team members get consistent Oxygen behavior.</p>`,
quiz:[{question:'Your team wants all writers to start new task topics from the same template that includes your company\'s standard warnings library conref. You should:',options:['Email the template to each writer','Create a document template in Oxygen and save it to a shared directory configured in team Preferences','Add the conref to the DITA DTD','Make each writer manually copy the conref from a reference file'],correct:1,explanation:'Oxygen document templates with pre-configured content (like standard conrefs) ensure team consistency. Saving templates to a shared network directory (configured in Preferences > Document Templates) makes them available to all team members automatically.'}],
prev:'page-48',next:'page-50'},

{id:'page-50',pageNum:50,module:4,moduleTitle:'Oxygen XML Editor',title:'Advanced DITA Features in Oxygen',subtitle:'Leveraging Oxygen\'s most powerful DITA features: key scopes, branch filtering, and the DITA perspective.',duration:'20 min read',level:'Advanced',searchKeywords:'Oxygen key scopes branch filtering DITA 1.3 advanced profiling multiple deliverables',objectives:['Understand branch filtering in DITA 1.3','Apply key scopes for reuse in complex publications','Use the DITA perspective in Oxygen','Work with DITA 1.3 features effectively'],
content:`<h2>Branch Filtering (DITA 1.3)</h2>
<p>Branch filtering (introduced in DITA 1.3) allows you to apply different DITAVAL filters to different branches of the same map — all in a single transformation run. This eliminates the need for separate maps per product variant in many cases.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Branch filtering example</span></div>
<pre><span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"maintenance/procedures.dita"</span><span class="tok-tag">&gt;</span>
  <span class="tok-com">&lt;!-- Apply 737-classic filter to this branch --&gt;</span>
  <span class="tok-tag">&lt;ditavalref</span> <span class="tok-attr">href</span>=<span class="tok-val">"filters/737-classic.ditaval"</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;ditavalmeta&gt;&lt;dvrResourcePrefix&gt;</span>classic-<span class="tok-tag">&lt;/dvrResourcePrefix&gt;&lt;/ditavalmeta&gt;</span>
  <span class="tok-tag">&lt;/ditavalref&gt;</span>
  <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"maintenance/replace-pump.dita"</span><span class="tok-tag">/&gt;</span>
<span class="tok-tag">&lt;/topicref&gt;</span></pre></div>

<h2>Scoped Keys (DITA 1.3)</h2>
<p>Key scopes allow the same key name to resolve to different values in different parts of the same map — essential for multi-product publications from a single map.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Key scopes for two product variants</span></div>
<pre><span class="tok-tag">&lt;topicgroup</span> <span class="tok-attr">keyscope</span>=<span class="tok-val">"classic"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;keydef</span> <span class="tok-attr">keys</span>=<span class="tok-val">"product-name"</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;topicmeta&gt;&lt;keywords&gt;&lt;keyword&gt;</span>737 Classic<span class="tok-tag">&lt;/keyword&gt;&lt;/keywords&gt;&lt;/topicmeta&gt;</span>
  <span class="tok-tag">&lt;/keydef&gt;</span>
  <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"classic/overview.dita"</span><span class="tok-tag">/&gt;</span>
<span class="tok-tag">&lt;/topicgroup&gt;</span>

<span class="tok-tag">&lt;topicgroup</span> <span class="tok-attr">keyscope</span>=<span class="tok-val">"ng"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;keydef</span> <span class="tok-attr">keys</span>=<span class="tok-val">"product-name"</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;topicmeta&gt;&lt;keywords&gt;&lt;keyword&gt;</span>737 NG<span class="tok-tag">&lt;/keyword&gt;&lt;/keywords&gt;&lt;/topicmeta&gt;</span>
  <span class="tok-tag">&lt;/keydef&gt;</span>
  <span class="tok-tag">&lt;topicref</span> <span class="tok-attr">href</span>=<span class="tok-val">"ng/overview.dita"</span><span class="tok-tag">/&gt;</span>
<span class="tok-tag">&lt;/topicgroup&gt;</span></pre></div>

<h2>The Oxygen DITA Perspective</h2>
<p>In Oxygen, switch to the DITA perspective (Window > Open Perspective > DITA) for a layout optimized for DITA work: DITA Maps Manager prominent on the left, Outline and Reuse panels available, transformation shortcuts accessible. The perspective saves your window layout.</p>`,
quiz:[{question:'DITA 1.3 branch filtering allows you to:',options:['Apply different filters to different branches of the same map in a single transformation run','Create multiple DITA maps from a single topic set','Filter out entire topic types from a publication','Apply CSS filters to change the visual appearance of branches'],correct:0,explanation:'Branch filtering (DITA 1.3) uses ditavalref elements within map branches to apply different DITAVAL filters per branch, producing customized output for each branch in a single transformation — eliminating the need for separate maps per variant.'}],
prev:'page-49',next:'page-51'},

{id:'page-51',pageNum:51,module:4,moduleTitle:'Oxygen XML Editor',title:'Oxygen Exercises',subtitle:'Hands-on practice with Oxygen XML Editor features — authoring, validation, and publishing.',duration:'45 min',level:'Hands-on',searchKeywords:'Oxygen exercises practice transformation scenario publish validation conref',objectives:['Run a full DITA publish workflow in Oxygen','Configure and run a transformation scenario','Insert conrefs and validate the document','Use the DITA Maps Manager effectively'],
content:`<h2>Exercise 4.1 — Oxygen Author View</h2>
<div class="exercise-box"><div class="exercise-box-header"><div class="exercise-icon">📝</div><div><div class="exercise-title">Author View Practice</div></div></div>
<ol class="exercise-steps">
<li>Open one of your Module 3 topic files in Oxygen</li>
<li>Switch to Author view. Confirm the content is visible in formatted form</li>
<li>Add a new paragraph using the toolbar button (not by typing XML)</li>
<li>Add a Note of type="warning" using Insert > Note (or toolbar)</li>
<li>Switch to Text view and observe the XML that Author view generated</li>
<li>In Text view, add a profiling attribute: product="737-classic" to one of the steps</li>
<li>Switch back to Author view and confirm you can still see the step (no filtering applied yet)</li>
</ol></div>

<h2>Exercise 4.2 — Transformation Scenario</h2>
<div class="exercise-box"><div class="exercise-box-header"><div class="exercise-icon">⚙️</div><div><div class="exercise-title">Create and Run Transformation Scenarios</div></div></div>
<ol class="exercise-steps">
<li>Open your hydraulic-system.ditamap in the DITA Maps Manager</li>
<li>Create a new transformation scenario named "Hydraulic System — HTML5"</li>
<li>Set transtype to html5, output directory to a folder named "output/html5"</li>
<li>Apply and run the scenario</li>
<li>Open the output folder and open index.html in a browser to verify</li>
<li>Create a second scenario: "Hydraulic System — PDF Review"</li>
<li>Set transtype to pdf2, output directory to "output/pdf"</li>
<li>Run it and open the PDF to verify all topics appear</li>
</ol></div>

<h2>Exercise 4.3 — Validate and Fix</h2>
<div class="exercise-box"><div class="exercise-box-header"><div class="exercise-icon">🔍</div><div><div class="exercise-title">Introduce and Fix Errors</div></div></div>
<ol class="exercise-steps">
<li>In Text view of your task topic, deliberately break the structure: remove the &lt;cmd&gt; from one step</li>
<li>Save the file and observe the validation error in Oxygen</li>
<li>Read the error message. Click the error to navigate to the problem location</li>
<li>Fix the error by adding back the &lt;cmd&gt; element</li>
<li>Now add a second &lt;title&gt; element to the topic root — observe that DITA does not allow this</li>
<li>Remove it. Confirm the document validates with no errors</li>
</ol></div>`,
quiz:[{question:'After completing Exercise 4.2, you open the HTML5 output in a browser and notice one topic is missing from the navigation. The most likely cause is:',options:['HTML5 does not support all topic types','The topic\'s topicref has toc="no" in the map, or the topicref is missing entirely','The topic file is too large','The topic has no shortdesc element'],correct:1,explanation:'Topics appear in HTML5 navigation only if they have a topicref in the map with toc="yes" (the default). If a topicref is missing or has toc="no", the topic won\'t appear in navigation (though it may still be published as a file).'}],
prev:'page-50',next:'page-52'},

{id:'page-52',pageNum:52,module:4,moduleTitle:'Oxygen XML Editor',title:'Oxygen Interview Prep',subtitle:'Oxygen XML Editor questions you will be asked in DITA/Technical Writing interviews.',duration:'20 min read',level:'Interview Prep',searchKeywords:'Oxygen XML interview questions DITA authoring transformation validation views',objectives:['Answer Oxygen interview questions confidently','Explain transformation scenarios to interviewers','Demonstrate Oxygen feature knowledge'],
content:`<h2>Common Oxygen Interview Questions and Answers</h2>
<div class="qa-item"><div class="qa-question">Q: What are the three views in Oxygen XML Editor and when would you use each?</div><div class="qa-answer"><p><strong>Text view</strong> shows raw XML source. Use it for direct XML editing, troubleshooting validation errors, writing complex conref/keyref attributes, and understanding the exact XML structure behind Author view.</p><p><strong>Author view</strong> shows formatted content with CSS styling applied (like a word processor). Use it for content entry, editing paragraphs and tables, inserting elements with toolbar buttons, and track changes workflows.</p><p><strong>Grid view</strong> shows a tree/table representation. Use it for viewing the element hierarchy, batch attribute editing, and structured data entry into tables.</p></div></div>

<div class="qa-item"><div class="qa-question">Q: How do you configure and run a DITA transformation in Oxygen?</div><div class="qa-answer"><p>I open the DITA map in the DITA Maps Manager, then configure a transformation scenario (wrench icon or Document > Transformation > Configure Transformation Scenarios). I create a new DITA OT Transformation scenario, set the transtype (pdf2, html5, etc.), set the output directory, optionally add a DITAVAL filter file on the Filters tab, and set any custom DITA-OT parameters. I then apply and run the scenario. Results and errors appear in the Results panel.</p></div></div>

<div class="qa-item"><div class="qa-question">Q: A colleague asks you to review a DITA map for broken links before publishing. What do you do in Oxygen?</div><div class="qa-answer"><p>In the DITA Maps Manager, right-click the root map entry > Validate > Validate and Check for Completeness. This checks all topicref href paths (verifying files exist), all conref attributes (verifying source elements exist), all keyref references (verifying keys are defined in the map), all cross-references (xref href paths), and duplicate IDs. Fix every error in the results before running the transformation.</p></div></div>

<div class="qa-item"><div class="qa-question">Q: How would you insert a reusable warning from a conref library in Oxygen?</div><div class="qa-answer"><p>I would use the Reuse panel (Window > Show View > Reuse) which provides a browse interface for inserting conrefs. Alternatively, in Text view, I'd type the conref attribute directly: &lt;note conref="../shared/warnings-lib.dita#warnings-lib/hyd-warning"/&gt;. In Author view, I can paste the conref attribute in the Attributes panel. After inserting, I validate to confirm the conref resolves correctly.</p></div></div>`,
quiz:[{question:'An interviewer asks: "Can Oxygen validate that all keyrefs will resolve correctly?" Your answer is:',options:['No — keyrefs can only be validated at publish time','Yes — Validate and Check for Completeness in the DITA Maps Manager checks that all keyref values are defined in the context map','Yes — Oxygen validates keyrefs automatically on file save','Only keyrefs in task topics are validated'],correct:1,explanation:'Oxygen\'s "Validate and Check for Completeness" (run from DITA Maps Manager) checks that every keyref in the publication references a key defined in the map. This is specifically a map-context check — which is why having the correct root map open in the Maps Manager (as the context map) matters.'}],
prev:'page-51',next:'page-53'},
];
