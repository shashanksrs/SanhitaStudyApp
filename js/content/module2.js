const MODULE2_PAGES = [
{
  id:'page-11',pageNum:11,module:2,moduleTitle:'XML Fundamentals',
  title:'What is XML',
  subtitle:'Understanding XML — the universal language powering DITA, S1000D, and modern structured documentation.',
  duration:'20–25 min read',level:'Beginner',
  searchKeywords:'XML extensible markup language definition history purpose structured data',
  objectives:['Define XML and explain its purpose','Understand the relationship between XML, HTML, and SGML','Explain why XML is the foundation for DITA and S1000D','Identify where XML is used in the real world','Describe what "well-formed" means'],
  content:`
<h2>What is XML?</h2>
<p><strong>XML — Extensible Markup Language</strong> — is a text-based format for storing and transporting structured data in a way that is both human-readable and machine-readable. The W3C published XML 1.0 in 1998 as a simplified, web-ready alternative to SGML.</p>
<p>"Extensible" means you can define your own tags. Unlike HTML — which has a fixed set of tags like <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;table&gt;</code> — XML lets you create tags that are meaningful for your domain. DITA defines tags like <code>&lt;task&gt;</code>, <code>&lt;step&gt;</code>, <code>&lt;cmd&gt;</code>. S1000D defines tags like <code>&lt;dmContent&gt;</code>, <code>&lt;proceduralStep&gt;</code>.</p>
<div class="callout info"><div class="callout-title">💡 XML in One Sentence</div><p>XML is a set of rules for encoding documents in a format that both humans can read and machines can process — with tags you define yourself.</p></div>

<h2>XML vs HTML vs SGML</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Language</th><th>Created</th><th>Tags</th><th>Primary Use</th></tr></thead>
<tbody>
<tr><td><strong>SGML</strong></td><td>1986</td><td>User-defined</td><td>Complex document management (aerospace, publishing). Complex syntax.</td></tr>
<tr><td><strong>HTML</strong></td><td>1989</td><td>Fixed (pre-defined)</td><td>Web pages. Lenient parser. Not suitable for data exchange.</td></tr>
<tr><td><strong>XML</strong></td><td>1998</td><td>User-defined</td><td>Data exchange, structured documents. Strict syntax. Simpler than SGML.</td></tr>
<tr><td><strong>DITA</strong></td><td>2001</td><td>Defined by DITA spec</td><td>Technical documentation. Built on XML.</td></tr>
</tbody>
</table></div>

<h2>A Simple XML Example</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">XML</span><span class="code-block-title">Aircraft component record</span><button class="code-copy-btn">Copy</button></div>
<pre><span class="tok-tag">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>
<span class="tok-tag">&lt;component&gt;</span>
  <span class="tok-tag">&lt;partNumber&gt;</span>737-HYD-PUMP-001<span class="tok-tag">&lt;/partNumber&gt;</span>
  <span class="tok-tag">&lt;description&gt;</span>Hydraulic System A Engine-Driven Pump<span class="tok-tag">&lt;/description&gt;</span>
  <span class="tok-tag">&lt;system&gt;</span>Hydraulic<span class="tok-tag">&lt;/system&gt;</span>
  <span class="tok-tag">&lt;ataChapter&gt;</span>29<span class="tok-tag">&lt;/ataChapter&gt;</span>
  <span class="tok-tag">&lt;specifications&gt;</span>
    <span class="tok-tag">&lt;pressure</span> <span class="tok-attr">unit</span>=<span class="tok-val">"PSI"</span><span class="tok-tag">&gt;</span>3000<span class="tok-tag">&lt;/pressure&gt;</span>
    <span class="tok-tag">&lt;flowRate</span> <span class="tok-attr">unit</span>=<span class="tok-val">"GPM"</span><span class="tok-tag">&gt;</span>18<span class="tok-tag">&lt;/flowRate&gt;</span>
  <span class="tok-tag">&lt;/specifications&gt;</span>
<span class="tok-tag">&lt;/component&gt;</span></pre></div>

<p>Notice: the tags (<code>&lt;component&gt;</code>, <code>&lt;partNumber&gt;</code>, etc.) are not defined by any HTML standard. We invented them to describe aircraft component data. A machine reading this file knows exactly what each piece of data represents because of the semantic tag names.</p>

<h2>Why XML Powers DITA</h2>
<p>DITA is an <em>XML application</em> — meaning DITA defines a specific set of XML tags and rules for technical documentation. When you write a DITA topic, you are writing an XML document that conforms to the DITA vocabulary (defined in DTDs or schemas).</p>
<p>This means all the tools of the XML ecosystem work with DITA: XML editors, parsers, validators, XSLT transformers, XPath queries. Oxygen XML Editor is fundamentally an XML editor that has been tuned for DITA.</p>

<h2>Where XML is Used</h2>
<ul>
<li><strong>Technical documentation:</strong> DITA, S1000D, DocBook, TEI</li>
<li><strong>Data exchange:</strong> SOAP web services, financial transactions (FIX, FpML), healthcare (HL7, FHIR)</li>
<li><strong>Configuration files:</strong> Maven pom.xml, Android AndroidManifest.xml, Spring beans.xml</li>
<li><strong>Office documents:</strong> Microsoft Office .docx, .xlsx are ZIP archives containing XML</li>
<li><strong>Vector graphics:</strong> SVG (Scalable Vector Graphics) is XML</li>
<li><strong>RSS/Atom feeds:</strong> XML-based web content syndication</li>
</ul>`,
  quiz:[
    {question:'XML stands for:',options:['Extensible Markup Language','Extended Meta Language','External Module Library','Executable Markup Logic'],correct:0,explanation:'XML = Extensible Markup Language. "Extensible" means you define your own tags.'},
    {question:'How does XML differ from HTML in terms of tags?',options:['XML uses the same tags as HTML','XML has a fixed set of tags; HTML lets you invent tags','XML lets you define your own tags; HTML has a fixed pre-defined set','They are identical'],correct:2,explanation:'XML is extensible — you define tags meaningful to your domain. HTML has a fixed vocabulary (p, h1, table, etc.) defined by the HTML specification.'},
    {question:'DITA is best described as:',options:['A replacement for XML','An XML application — a specific vocabulary of XML tags for technical documentation','A programming language','A proprietary Oxygen XML format'],correct:1,explanation:'DITA is an XML application — it defines a specific set of XML elements and attributes for technical documentation, built on top of standard XML syntax.'},
  ],
  prev:'page-10',next:'page-12'
},

{
  id:'page-12',pageNum:12,module:2,moduleTitle:'XML Fundamentals',
  title:'XML Syntax Rules',
  subtitle:'The strict rules every XML document must follow — and what happens when you break them.',
  duration:'25–30 min read',level:'Beginner',
  searchKeywords:'XML syntax rules well-formed valid elements closing tags case sensitive nesting',
  objectives:['List and apply the XML well-formedness rules','Distinguish well-formed from valid XML','Understand why XML is stricter than HTML','Write correct XML that passes parser validation','Recognize and fix common XML syntax errors'],
  content:`
<h2>XML is Strict — and That is a Feature</h2>
<p>HTML parsers are forgiving. A browser will display <code>&lt;p&gt;Hello</code> without a closing tag, render mismatched tags, and silently ignore unknown attributes. XML parsers are not forgiving. A single syntax error stops processing entirely. This strictness is intentional: it makes XML reliable for automated processing.</p>

<div class="callout warning"><div class="callout-title">⚠️ The "Fatal Error" Rule</div><p>If an XML document contains a syntax error, an XML parser must stop processing and report a fatal error. It cannot "guess" what you meant. This is called the <strong>no error recovery</strong> rule.</p></div>

<h2>Rule 1: Every Document Must Have a Root Element</h2>
<p>An XML document must have exactly one root element that contains all other elements.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">XML</span><span class="code-block-title">Root element structure</span></div>
<pre><span class="tok-tag">&lt;?xml version="1.0"?&gt;</span>
<span class="tok-tag">&lt;manual&gt;</span>               <span class="tok-com">&lt;!-- Root element --&gt;</span>
  <span class="tok-tag">&lt;chapter&gt;</span>
    <span class="tok-tag">&lt;title&gt;</span>Introduction<span class="tok-tag">&lt;/title&gt;</span>
    <span class="tok-tag">&lt;para&gt;</span>Content here<span class="tok-tag">&lt;/para&gt;</span>
  <span class="tok-tag">&lt;/chapter&gt;</span>
<span class="tok-tag">&lt;/manual&gt;</span>              <span class="tok-com">&lt;!-- Root element closes --&gt;</span></pre></div>

<h2>Rule 2: All Elements Must Be Properly Closed</h2>
<div class="comparison">
<div class="comparison-panel bad"><div class="comparison-panel-header">Invalid XML</div><ul><li><code>&lt;p&gt;Open tag, no close</code></li><li><code>&lt;br&gt;</code> (no self-close)</li></ul></div>
<div class="comparison-panel good"><div class="comparison-panel-header">Valid XML</div><ul><li><code>&lt;p&gt;Content&lt;/p&gt;</code></li><li><code>&lt;br/&gt;</code> (self-closing)</li></ul></div>
</div>

<h2>Rule 3: Elements Must Be Properly Nested</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">XML</span><span class="code-block-title">Correct vs incorrect nesting</span></div>
<pre><span class="tok-com">&lt;!-- INVALID: overlapping/interleaved tags --&gt;</span>
<span class="tok-tag">&lt;bold&gt;</span>text <span class="tok-tag">&lt;italic&gt;</span>here<span class="tok-tag">&lt;/bold&gt;&lt;/italic&gt;</span>

<span class="tok-com">&lt;!-- VALID: proper nesting --&gt;</span>
<span class="tok-tag">&lt;bold&gt;</span><span class="tok-tag">&lt;italic&gt;</span>text here<span class="tok-tag">&lt;/italic&gt;&lt;/bold&gt;</span></pre></div>

<h2>Rule 4: XML is Case-Sensitive</h2>
<p><code>&lt;Title&gt;</code>, <code>&lt;title&gt;</code>, and <code>&lt;TITLE&gt;</code> are three different elements. DITA uses all-lowercase element names. Consistency is essential.</p>

<h2>Rule 5: Attribute Values Must Be Quoted</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">XML</span></div>
<pre><span class="tok-com">&lt;!-- INVALID --&gt;</span>
<span class="tok-tag">&lt;step</span> <span class="tok-attr">number</span>=<span class="tok-val">1</span><span class="tok-tag">&gt;</span>

<span class="tok-com">&lt;!-- VALID (single or double quotes) --&gt;</span>
<span class="tok-tag">&lt;step</span> <span class="tok-attr">number</span>=<span class="tok-val">"1"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;step</span> <span class="tok-attr">number</span>=<span class="tok-val">'1'</span><span class="tok-tag">&gt;</span></pre></div>

<h2>Rule 6: Special Characters Must Be Escaped</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Character</th><th>Must write as</th><th>Why</th></tr></thead>
<tbody>
<tr><td><code>&lt;</code></td><td><code>&amp;lt;</code></td><td>Starts a tag — ambiguous in content</td></tr>
<tr><td><code>&gt;</code></td><td><code>&amp;gt;</code></td><td>Ends a tag</td></tr>
<tr><td><code>&amp;</code></td><td><code>&amp;amp;</code></td><td>Starts an entity reference</td></tr>
<tr><td><code>"</code></td><td><code>&amp;quot;</code></td><td>Inside attribute values</td></tr>
<tr><td><code>'</code></td><td><code>&amp;apos;</code></td><td>Inside attribute values</td></tr>
</tbody></table></div>

<h2>Well-Formed vs. Valid</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Term</th><th>Meaning</th><th>Test</th></tr></thead>
<tbody>
<tr><td><strong>Well-formed</strong></td><td>Follows all XML syntax rules (proper closing, nesting, quotes, etc.)</td><td>Any XML parser can check this</td></tr>
<tr><td><strong>Valid</strong></td><td>Well-formed AND conforms to a specific schema or DTD (right elements in right places)</td><td>Requires a DTD/Schema to validate against</td></tr>
</tbody></table></div>
<p>A DITA document must be both well-formed (valid XML syntax) and valid (conforms to the DITA DTD). Oxygen XML Editor checks both automatically.</p>

<h2>XML Declaration</h2>
<p>Most XML documents begin with an XML declaration:</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">XML</span></div>
<pre><span class="tok-tag">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span></pre></div>
<p>The <code>encoding="UTF-8"</code> attribute is important — it tells parsers the character encoding. UTF-8 supports all Unicode characters including non-Latin scripts (Cyrillic, Arabic, Chinese) essential for localization.</p>`,
  quiz:[
    {question:'An XML parser encounters a tag that is not properly closed. It should:',options:['Ignore the error and continue','Try to guess what was meant','Stop processing and report a fatal error','Ask the user for help'],correct:2,explanation:'XML parsers follow the "no error recovery" rule — any well-formedness error causes a fatal error and processing stops. This strict behavior makes XML reliable for automated processing.'},
    {question:'In XML, <Step> and <step> are:',options:['The same element','Two different elements (XML is case-sensitive)','Interchangeable — case does not matter in XML','Invalid — element names cannot be capitalized'],correct:1,explanation:'XML is strictly case-sensitive. <Step>, <step>, and <STEP> are three completely different elements. DITA uses all lowercase element names by convention.'},
    {question:'You want to write the text "Pressure < 3000 PSI" inside an XML element. How must you write it?',options:['Pressure < 3000 PSI (unchanged)','Pressure &lt; 3000 PSI','Pressure [less than] 3000 PSI','<![CDATA[Pressure < 3000 PSI]]>'],correct:1,explanation:'"<" must be escaped as "&lt;" in XML content because the less-than sign begins a tag. &lt; is the XML entity reference for the less-than character. (CDATA sections are also valid but less common.)'},
    {question:'What is the difference between a well-formed and a valid XML document?',options:['They are identical','Well-formed follows XML syntax rules; valid also conforms to a specific DTD or schema','Valid follows syntax rules; well-formed conforms to a schema','Well-formed is for DITA; valid is for S1000D'],correct:1,explanation:'Well-formed = correct XML syntax (proper nesting, closed tags, etc.). Valid = well-formed AND conforms to a specific schema/DTD defining which elements are allowed where.'},
  ],
  prev:'page-11',next:'page-13'
},

{
  id:'page-13',pageNum:13,module:2,moduleTitle:'XML Fundamentals',
  title:'XML Elements',
  subtitle:'The building blocks of XML — elements, content models, and how to use them effectively.',
  duration:'20–25 min read',level:'Beginner',
  searchKeywords:'XML elements tags content text mixed content empty elements naming conventions',
  objectives:['Define XML elements and their structure','Understand element content types','Apply XML element naming rules','Distinguish element types: container, text, empty','Map XML element concepts to DITA'],
  content:`
<h2>What is an XML Element?</h2>
<p>An <strong>element</strong> is the fundamental building block of XML. Every piece of content in XML lives inside an element. An element consists of:</p>
<ul>
<li>A <strong>start tag</strong>: <code>&lt;elementName&gt;</code></li>
<li>Optional <strong>content</strong>: text, child elements, or both</li>
<li>An <strong>end tag</strong>: <code>&lt;/elementName&gt;</code></li>
</ul>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">XML</span><span class="code-block-title">Element anatomy</span></div>
<pre><span class="tok-tag">&lt;title&gt;</span>Hydraulic System Overview<span class="tok-tag">&lt;/title&gt;</span>
<span class="tok-com">  ↑               ↑                  ↑</span>
<span class="tok-com">start tag       content           end tag</span></pre></div>

<h2>Element Content Types</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Content Type</th><th>Description</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Text content</strong></td><td>Contains only text characters</td><td><code>&lt;title&gt;System Overview&lt;/title&gt;</code></td></tr>
<tr><td><strong>Element content</strong></td><td>Contains only child elements (no text)</td><td><code>&lt;steps&gt;&lt;step&gt;...&lt;/step&gt;&lt;/steps&gt;</code></td></tr>
<tr><td><strong>Mixed content</strong></td><td>Contains both text and child elements</td><td><code>&lt;p&gt;Replace the &lt;b&gt;fuel filter&lt;/b&gt; now.&lt;/p&gt;</code></td></tr>
<tr><td><strong>Empty</strong></td><td>No content; self-closing</td><td><code>&lt;xref href="topic.dita"/&gt;</code></td></tr>
</tbody></table></div>

<h2>Element Naming Rules</h2>
<ul>
<li>Names must start with a letter or underscore (not a number)</li>
<li>Names can contain letters, digits, hyphens, underscores, periods</li>
<li>Names cannot contain spaces</li>
<li>Names are case-sensitive</li>
<li>Names cannot start with "xml" (reserved by the W3C)</li>
</ul>
<div class="table-wrapper"><table>
<thead><tr><th>Valid Names</th><th>Invalid Names</th></tr></thead>
<tbody>
<tr><td><code>partNumber</code></td><td><code>1partNumber</code> (starts with digit)</td></tr>
<tr><td><code>ata-chapter</code></td><td><code>ata chapter</code> (contains space)</td></tr>
<tr><td><code>_system</code></td><td><code>xml:system</code> (starts with xml)</td></tr>
<tr><td><code>systemDescription</code></td><td><code>system&amp;description</code> (invalid character)</td></tr>
</tbody></table></div>

<h2>Hierarchy: Parent, Child, Sibling</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">XML</span><span class="code-block-title">Element relationships</span></div>
<pre><span class="tok-tag">&lt;manual&gt;</span>                    <span class="tok-com">&lt;!-- Parent of chapter --&gt;</span>
  <span class="tok-tag">&lt;chapter&gt;</span>                <span class="tok-com">&lt;!-- Child of manual; parent of title, para --&gt;</span>
    <span class="tok-tag">&lt;title&gt;</span>Hydraulics<span class="tok-tag">&lt;/title&gt;</span>  <span class="tok-com">&lt;!-- Sibling of para --&gt;</span>
    <span class="tok-tag">&lt;para&gt;</span>Overview...<span class="tok-tag">&lt;/para&gt;</span>    <span class="tok-com">&lt;!-- Sibling of title --&gt;</span>
  <span class="tok-tag">&lt;/chapter&gt;</span>
<span class="tok-tag">&lt;/manual&gt;</span></pre></div>

<h2>DITA Elements in Context</h2>
<p>In DITA, elements have very specific meanings and allowed positions. For example:</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">DITA task topic structure</span></div>
<pre><span class="tok-tag">&lt;task</span> <span class="tok-attr">id</span>=<span class="tok-val">"replace-filter"</span><span class="tok-tag">&gt;</span>          <span class="tok-com">&lt;!-- Root element of task topic --&gt;</span>
  <span class="tok-tag">&lt;title&gt;</span>Replace the Fuel Filter<span class="tok-tag">&lt;/title&gt;</span>
  <span class="tok-tag">&lt;taskbody&gt;</span>                        <span class="tok-com">&lt;!-- Container for task content --&gt;</span>
    <span class="tok-tag">&lt;prereq&gt;</span>                         <span class="tok-com">&lt;!-- Prerequisites section --&gt;</span>
      <span class="tok-tag">&lt;p&gt;</span>Defuel the aircraft.<span class="tok-tag">&lt;/p&gt;</span>
    <span class="tok-tag">&lt;/prereq&gt;</span>
    <span class="tok-tag">&lt;steps&gt;</span>                          <span class="tok-com">&lt;!-- Container for steps --&gt;</span>
      <span class="tok-tag">&lt;step&gt;</span>                         <span class="tok-com">&lt;!-- Individual step --&gt;</span>
        <span class="tok-tag">&lt;cmd&gt;</span>Open the access panel.<span class="tok-tag">&lt;/cmd&gt;</span>
      <span class="tok-tag">&lt;/step&gt;</span>
    <span class="tok-tag">&lt;/steps&gt;</span>
  <span class="tok-tag">&lt;/taskbody&gt;</span>
<span class="tok-tag">&lt;/task&gt;</span></pre></div>`,
  quiz:[
    {question:'Which XML element name is VALID?',options:['1system','ata chapter','_hydraulicPump','xml:data'],correct:2,explanation:'"_hydraulicPump" is valid — it starts with an underscore (allowed). "1system" starts with a digit (invalid). "ata chapter" has a space (invalid). "xml:data" starts with "xml" (reserved).'},
    {question:'An element that contains both text and child elements has which content type?',options:['Empty content','Text content','Element content','Mixed content'],correct:3,explanation:'Mixed content means an element contains both text characters and child elements — for example, a paragraph with inline emphasis tags mixed with text.'},
    {question:'In DITA XML, the <cmd> element inside a <step> contains:',options:['A numbered list of sub-steps','The action the user must perform (imperative verb phrase)','A safety warning','A cross-reference'],correct:1,explanation:'<cmd> contains the command — the action step in imperative voice. It is the core of every DITA task step.'},
  ],
  prev:'page-12',next:'page-14'
},

{
  id:'page-14',pageNum:14,module:2,moduleTitle:'XML Fundamentals',
  title:'Attributes',
  subtitle:'How XML attributes add metadata to elements — and how DITA uses attributes for profiling and linking.',
  duration:'20 min read',level:'Beginner',
  searchKeywords:'XML attributes metadata id href platform product audience profiling',
  objectives:['Define XML attributes and explain their purpose','Apply XML attribute syntax rules','Understand the difference between element content and attribute data','Recognize key DITA attributes and their uses'],
  content:`
<h2>What are Attributes?</h2>
<p>Attributes provide additional information (metadata) about an element. They appear inside the start tag as name-value pairs.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">XML</span></div>
<pre><span class="tok-tag">&lt;component</span> <span class="tok-attr">id</span>=<span class="tok-val">"hyd-pump-001"</span> <span class="tok-attr">type</span>=<span class="tok-val">"pump"</span> <span class="tok-attr">status</span>=<span class="tok-val">"active"</span><span class="tok-tag">&gt;</span>
  Hydraulic Engine-Driven Pump
<span class="tok-tag">&lt;/component&gt;</span></pre></div>

<h2>Attribute Rules</h2>
<ul>
<li>Values must be quoted (single or double quotes)</li>
<li>Each attribute name can appear only once per element</li>
<li>Attribute names are case-sensitive</li>
<li>Order of attributes does not matter</li>
<li>Attributes cannot contain child elements</li>
</ul>

<h2>Elements vs Attributes: When to Use Which?</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Use an <strong>element</strong> when…</th><th>Use an <strong>attribute</strong> when…</th></tr></thead>
<tbody>
<tr><td>Content will be displayed/published</td><td>Content is metadata, not displayed</td></tr>
<tr><td>Content may need to be rich/structured</td><td>Content is a simple value (ID, code, flag)</td></tr>
<tr><td>Content may repeat</td><td>Value is unique per element</td></tr>
<tr><td>Content needs child elements</td><td>Content is a string/number</td></tr>
</tbody></table></div>

<h2>Critical DITA Attributes</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Attribute</th><th>Used on</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td><code>id</code></td><td>Any topic or element</td><td>Unique identifier — required for conref targets and cross-references</td></tr>
<tr><td><code>href</code></td><td>topicref, xref, image</td><td>Points to another file or element</td></tr>
<tr><td><code>conref</code></td><td>Any element</td><td>Content reference — pull content from another location</td></tr>
<tr><td><code>keyref</code></td><td>keyword, xref</td><td>Key-based variable reference</td></tr>
<tr><td><code>platform</code></td><td>Any element</td><td>Profiling — include/exclude based on platform</td></tr>
<tr><td><code>product</code></td><td>Any element</td><td>Profiling — include/exclude based on product</td></tr>
<tr><td><code>audience</code></td><td>Any element</td><td>Profiling — include/exclude based on audience</td></tr>
<tr><td><code>outputclass</code></td><td>Any element</td><td>Pass CSS class to HTML output</td></tr>
</tbody></table></div>

<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">DITA attributes in practice</span></div>
<pre><span class="tok-com">&lt;!-- id used as conref target --&gt;</span>
<span class="tok-tag">&lt;task</span> <span class="tok-attr">id</span>=<span class="tok-val">"replace-pump"</span><span class="tok-tag">&gt;</span>

<span class="tok-com">&lt;!-- Profiling attribute: only include for product A --&gt;</span>
<span class="tok-tag">&lt;step</span> <span class="tok-attr">product</span>=<span class="tok-val">"737 747"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;cmd&gt;</span>Apply Boeing-specific torque values.<span class="tok-tag">&lt;/cmd&gt;</span>
<span class="tok-tag">&lt;/step&gt;</span>

<span class="tok-com">&lt;!-- Cross-reference using href --&gt;</span>
<span class="tok-tag">&lt;xref</span> <span class="tok-attr">href</span>=<span class="tok-val">"specifications.dita#specs/torque-table"</span><span class="tok-tag">/&gt;</span></pre></div>`,
  quiz:[
    {question:'In DITA, the "product" attribute on an element is used for:',options:['Defining the product name in text','Conditional/profiling processing — include or exclude content based on product','Setting the element\'s CSS class','Linking to a product specification'],correct:1,explanation:'Profiling attributes like product, platform, and audience mark content for conditional processing. Content marked product="737" can be excluded when publishing documentation for a different aircraft.'},
    {question:'An XML attribute value MUST be:',options:['A number','Enclosed in quotation marks (single or double)','Less than 100 characters','Unique within the document'],correct:1,explanation:'All XML attribute values must be quoted — either with single quotes or double quotes. This is a well-formedness rule.'},
  ],
  prev:'page-13',next:'page-15'
},

{id:'page-15',pageNum:15,module:2,moduleTitle:'XML Fundamentals',title:'Namespaces',subtitle:'How XML namespaces prevent element name conflicts in mixed-vocabulary documents.',duration:'15 min read',level:'Intermediate',searchKeywords:'XML namespaces prefix URI qualified names mixed vocabulary',objectives:['Understand why namespaces exist','Read namespace declarations in XML documents','Recognize common namespace prefixes in DITA'],
content:`<h2>The Namespace Problem</h2>
<p>Imagine two XML vocabularies — one for aircraft data and one for financial data — both define a <code>&lt;value&gt;</code> element. If you combine these in one document, which <code>&lt;value&gt;</code> is which? Namespaces solve this naming collision problem.</p>
<h2>Namespace Syntax</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">XML</span><span class="code-block-title">Namespace declaration and use</span></div>
<pre><span class="tok-tag">&lt;manual</span>
  <span class="tok-attr">xmlns</span>=<span class="tok-val">"http://example.com/aviation"</span>
  <span class="tok-attr">xmlns:xlink</span>=<span class="tok-val">"http://www.w3.org/1999/xlink"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;chapter&gt;</span>
    <span class="tok-com">&lt;!-- Elements here belong to the default aviation namespace --&gt;</span>
    <span class="tok-tag">&lt;link</span> <span class="tok-attr">xlink:href</span>=<span class="tok-val">"http://example.com/resource"</span><span class="tok-tag">/&gt;</span>
    <span class="tok-com">&lt;!-- xlink:href uses the xlink namespace prefix --&gt;</span>
  <span class="tok-tag">&lt;/chapter&gt;</span>
<span class="tok-tag">&lt;/manual&gt;</span></pre></div>
<p>The URI in a namespace declaration is an identifier — it doesn't have to be a real web address. It is used purely to uniquely identify the namespace. The prefix (<code>xlink</code>) is a local shorthand.</p>
<h2>Namespaces in DITA</h2>
<p>DITA topics generally don't use explicit namespace prefixes in the body — the DITA namespace is declared in the root element. However, you will encounter namespaces in:</p>
<ul><li>DITA maps that include content from other vocabularies</li><li>DITA topics using MathML for mathematical equations</li><li>Oxygen's internal processing of XSLT transformations</li></ul>`,
quiz:[{question:'The URI in an XML namespace declaration (e.g., http://www.oasis-open.org/dita) is primarily:',options:['A real URL that the parser must download','A unique identifier for the namespace — does not need to be a real web page','An optional comment','The schema location'],correct:1,explanation:'Namespace URIs are identifiers, not locations. Parsers do not download them. They serve only to uniquely identify a namespace to prevent name collisions.'}],
prev:'page-14',next:'page-16'},

{id:'page-16',pageNum:16,module:2,moduleTitle:'XML Fundamentals',title:'XML Trees',subtitle:'Understanding the hierarchical tree structure of XML documents and navigating it with XPath.',duration:'20 min read',level:'Intermediate',searchKeywords:'XML tree DOM hierarchy parent child sibling XPath navigation',objectives:['Visualize XML as a tree structure','Understand the Document Object Model (DOM)','Write basic XPath expressions to navigate XML trees'],
content:`<h2>XML as a Tree</h2>
<p>Every XML document is a tree. The root element is the trunk; child elements are branches; text content is the leaves. This tree structure is fundamental to how XML is processed, transformed, and queried.</p>
<div class="diagram-container"><div class="mermaid">
graph TD
  Root["&lt;task&gt; (root)"]
  Root --> Title["&lt;title&gt;\n'Replace Fuel Filter'"]
  Root --> Body["&lt;taskbody&gt;"]
  Body --> Pre["&lt;prereq&gt;"]
  Body --> Steps["&lt;steps&gt;"]
  Pre --> P["&lt;p&gt;\n'Defuel aircraft'"]
  Steps --> S1["&lt;step&gt;"]
  Steps --> S2["&lt;step&gt;"]
  S1 --> Cmd1["&lt;cmd&gt;\n'Open access panel'"]
  S2 --> Cmd2["&lt;cmd&gt;\n'Remove filter'"]
</div><p class="diagram-caption">An XML document visualized as a tree.</p></div>

<h2>XPath: Navigating the Tree</h2>
<p>XPath is a language for navigating XML trees. It is used in XSLT (for transformations), in Oxygen (for searches), and in DITA processing pipelines.</p>
<div class="table-wrapper"><table>
<thead><tr><th>XPath Expression</th><th>Selects</th></tr></thead>
<tbody>
<tr><td><code>/task/title</code></td><td>The title element, child of task (root)</td></tr>
<tr><td><code>//step</code></td><td>All step elements anywhere in the document</td></tr>
<tr><td><code>//step/cmd</code></td><td>All cmd elements that are children of step</td></tr>
<tr><td><code>/task/taskbody/steps/step[1]</code></td><td>The first step element</td></tr>
<tr><td><code>//step[@product='737']</code></td><td>All steps with product attribute = '737'</td></tr>
<tr><td><code>//note[@type='warning']</code></td><td>All warning notes</td></tr>
</tbody></table></div>
<p>In Oxygen XML Editor, you can use XPath to search within DITA files — for example, finding all steps that are missing a <code>&lt;cmd&gt;</code> element, or all warnings that reference a specific hazard type.</p>`,
quiz:[{question:'In XPath, what does the expression //step select?',options:['The first step element','Only step elements that are direct children of taskbody','All step elements anywhere in the document tree','The last step element'],correct:2,explanation:'// means "anywhere in the document tree." //step selects every <step> element regardless of where it appears in the hierarchy.'}],
prev:'page-15',next:'page-17'},

{id:'page-17',pageNum:17,module:2,moduleTitle:'XML Fundamentals',title:'Validation Concepts',subtitle:'How XML validation ensures your content conforms to a defined schema — and why this matters in DITA.',duration:'20 min read',level:'Intermediate',searchKeywords:'XML validation DTD schema well-formed valid Oxygen validation error',objectives:['Distinguish parsing from validation','Understand what validation checks','Explain why DITA validation catches authoring errors early','Read and interpret validation errors in Oxygen XML'],
content:`<h2>Two Levels of XML Checking</h2>
<p>When Oxygen XML processes a DITA file, it performs two distinct checks:</p>
<div class="table-wrapper"><table>
<thead><tr><th>Check</th><th>What it verifies</th><th>Tool</th></tr></thead>
<tbody>
<tr><td><strong>Well-formedness check</strong></td><td>Correct XML syntax: proper nesting, closed tags, quoted attributes, escape sequences</td><td>Any XML parser</td></tr>
<tr><td><strong>Validation check</strong></td><td>Content conforms to the DTD or Schema: right elements in right places, required elements present</td><td>Validating parser + DTD/Schema</td></tr>
</tbody></table></div>

<h2>What Validation Catches</h2>
<p>Validation against the DITA DTD catches errors like:</p>
<ul>
<li>A <code>&lt;step&gt;</code> without a <code>&lt;cmd&gt;</code> (cmd is required)</li>
<li>A <code>&lt;concept&gt;</code> topic containing a <code>&lt;steps&gt;</code> element (not allowed in concept)</li>
<li>An attribute value that is not in the allowed set</li>
<li>Elements in the wrong order</li>
<li>Missing required attributes (like <code>id</code> on a topic)</li>
</ul>

<h2>Validation in Practice</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Invalid DITA — will fail validation</span></div>
<pre><span class="tok-tag">&lt;task</span> <span class="tok-attr">id</span>=<span class="tok-val">"replace-pump"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;title&gt;</span>Replace the Pump<span class="tok-tag">&lt;/title&gt;</span>
  <span class="tok-tag">&lt;taskbody&gt;</span>
    <span class="tok-tag">&lt;steps&gt;</span>
      <span class="tok-tag">&lt;step&gt;</span>
        <span class="tok-com">&lt;!-- ERROR: &lt;cmd&gt; is REQUIRED in &lt;step&gt; --&gt;</span>
        Open the access panel.  <span class="tok-com">&lt;!-- text directly in step — not allowed --&gt;</span>
      <span class="tok-tag">&lt;/step&gt;</span>
    <span class="tok-tag">&lt;/steps&gt;</span>
  <span class="tok-tag">&lt;/taskbody&gt;</span>
<span class="tok-tag">&lt;/task&gt;</span></pre></div>
<p>Oxygen would show: <em>"Element step is missing required child element cmd"</em>. This immediate feedback prevents publishing malformed documentation.</p>

<h2>The Value of Validation in a Team</h2>
<p>In a team of 10 writers, validation ensures everyone produces structurally consistent content. Without validation, one writer might use <code>&lt;p&gt;</code> for step text, another uses <code>&lt;li&gt;</code>, and a third writes text directly in the step element. Validation enforces a shared structural contract.</p>`,
quiz:[{question:'Validation against a DITA DTD would catch which of the following errors?',options:['A misspelled word in a step description','A <step> element with no <cmd> child (cmd is required)','An image that is missing from the file system','A cross-reference to a topic that has been deleted'],correct:1,explanation:'DTD validation checks structural conformance — required elements, allowed elements, ordering. Missing <cmd> in a <step> is a structural error the DTD knows about. Spelling, broken links, and missing images require other tools.'}],
prev:'page-16',next:'page-18'},

{id:'page-18',pageNum:18,module:2,moduleTitle:'XML Fundamentals',title:'DTD — Document Type Definition',subtitle:'Understanding DTDs: the original XML vocabulary definition mechanism and DITA\'s use of them.',duration:'25 min read',level:'Intermediate',searchKeywords:'DTD document type definition element declarations attribute lists entities DITA DTD',objectives:['Explain what a DTD is and what it defines','Read basic DTD syntax for elements and attributes','Understand how DITA uses DTDs to define its vocabulary','Connect DTD declarations to validation behavior'],
content:`<h2>What is a DTD?</h2>
<p>A Document Type Definition (DTD) is a set of rules that defines the vocabulary and structure of an XML document: which elements are allowed, in what order, which attributes they may have, and what values those attributes may take.</p>
<p>DITA distributes its DTDs as part of the DITA Open Toolkit. When Oxygen validates a DITA file, it reads the DTD to know what is allowed. The DOCTYPE declaration at the top of a DITA file points to the relevant DTD.</p>

<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">DOCTYPE declaration in a DITA task</span></div>
<pre><span class="tok-tag">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>
<span class="tok-com">&lt;!DOCTYPE task PUBLIC</span>
  <span class="tok-com">"-//OASIS//DTD DITA Task//EN"</span>
  <span class="tok-com">"task.dtd"&gt;</span>
<span class="tok-tag">&lt;task</span> <span class="tok-attr">id</span>=<span class="tok-val">"my-task"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;title&gt;</span>Replace the Fuel Filter<span class="tok-tag">&lt;/title&gt;</span>
  ...
<span class="tok-tag">&lt;/task&gt;</span></pre></div>

<h2>DTD Syntax Basics</h2>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DTD</span><span class="code-block-title">Basic element and attribute declarations</span></div>
<pre><span class="tok-com">&lt;!-- Element declaration: step must contain cmd, then optionally info/stepresult --&gt;</span>
<span class="tok-com">&lt;!ELEMENT step (cmd, info?, stepresult?)&gt;</span>

<span class="tok-com">&lt;!-- Cardinality operators:
  (required) = exactly one
  ?          = zero or one (optional)
  *          = zero or more
  +          = one or more
--&gt;</span>
<span class="tok-com">&lt;!ELEMENT steps (step+)&gt;</span>       <span class="tok-com">&lt;!-- one or more steps required --&gt;</span>
<span class="tok-com">&lt;!ELEMENT prereq (p | ul)*&gt;</span>   <span class="tok-com">&lt;!-- zero or more p or ul --&gt;</span>

<span class="tok-com">&lt;!-- Attribute declaration --&gt;</span>
<span class="tok-com">&lt;!ATTLIST task</span>
  <span class="tok-com">id    ID    #REQUIRED</span>
  <span class="tok-com">product  CDATA  #IMPLIED&gt;</span></pre></div>

<h2>DTD vs XML Schema (XSD)</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Feature</th><th>DTD</th><th>XSD</th></tr></thead>
<tbody>
<tr><td>Syntax</td><td>Own syntax (not XML)</td><td>XML syntax</td></tr>
<tr><td>Namespaces</td><td>Limited support</td><td>Full namespace support</td></tr>
<tr><td>Data types</td><td>Very limited (ID, CDATA, etc.)</td><td>Rich data types (integer, date, etc.)</td></tr>
<tr><td>DITA use</td><td>Primary format for DITA DTDs</td><td>Available as alternative (DITA RNG)</td></tr>
</tbody></table></div>
<p>DITA 1.3 introduced RELAX NG (RNG) as the authoritative schema format, but DTDs remain widely used due to tool compatibility. Oxygen supports all three schema formats.</p>`,
quiz:[{question:'In a DITA DTD, the declaration <!ELEMENT steps (step+)> means:',options:['steps must contain exactly one step','steps contains step elements, zero or more','steps must contain one or more step elements','steps is optional'],correct:2,explanation:'"+" means "one or more." steps (step+) requires at least one step child. You cannot have an empty steps element.'},
{question:'The DOCTYPE declaration at the top of a DITA topic file primarily:',options:['Sets the document title','Points to the DTD that defines the allowed vocabulary for validation','Defines the output format','Sets character encoding'],correct:1,explanation:'DOCTYPE points the XML parser to the DTD (or public identifier) for this document type, enabling validation against the DITA vocabulary rules.'}],
prev:'page-17',next:'page-19'},

{id:'page-19',pageNum:19,module:2,moduleTitle:'XML Fundamentals',title:'XML Schema (XSD)',subtitle:'The more powerful, XML-native alternative to DTD for defining XML document structure.',duration:'20 min read',level:'Intermediate',searchKeywords:'XSD XML Schema Definition types restrictions complex simple elements DITA RelaxNG',objectives:['Understand what XSD adds over DTD','Read basic XSD syntax','Know when XSD is used vs DTD in DITA contexts'],
content:`<h2>XML Schema Definition (XSD)</h2>
<p>XSD is written in XML itself, which means all XML tools can read and process it. It adds rich data types, namespace support, and more expressive content models compared to DTDs.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">XSD</span><span class="code-block-title">Simple XSD example</span></div>
<pre><span class="tok-tag">&lt;xs:schema</span> <span class="tok-attr">xmlns:xs</span>=<span class="tok-val">"http://www.w3.org/2001/XMLSchema"</span><span class="tok-tag">&gt;</span>

  <span class="tok-tag">&lt;xs:element</span> <span class="tok-attr">name</span>=<span class="tok-val">"component"</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;xs:complexType&gt;</span>
      <span class="tok-tag">&lt;xs:sequence&gt;</span>
        <span class="tok-tag">&lt;xs:element</span> <span class="tok-attr">name</span>=<span class="tok-val">"partNumber"</span> <span class="tok-attr">type</span>=<span class="tok-val">"xs:string"</span><span class="tok-tag">/&gt;</span>
        <span class="tok-tag">&lt;xs:element</span> <span class="tok-attr">name</span>=<span class="tok-val">"pressure"</span> <span class="tok-attr">type</span>=<span class="tok-val">"xs:integer"</span><span class="tok-tag">/&gt;</span>
        <span class="tok-tag">&lt;xs:element</span> <span class="tok-attr">name</span>=<span class="tok-val">"description"</span> <span class="tok-attr">type</span>=<span class="tok-val">"xs:string"</span> <span class="tok-attr">minOccurs</span>=<span class="tok-val">"0"</span><span class="tok-tag">/&gt;</span>
      <span class="tok-tag">&lt;/xs:sequence&gt;</span>
      <span class="tok-tag">&lt;xs:attribute</span> <span class="tok-attr">name</span>=<span class="tok-val">"status"</span> <span class="tok-attr">use</span>=<span class="tok-val">"required"</span><span class="tok-tag">/&gt;</span>
    <span class="tok-tag">&lt;/xs:complexType&gt;</span>
  <span class="tok-tag">&lt;/xs:element&gt;</span>

<span class="tok-tag">&lt;/xs:schema&gt;</span></pre></div>

<h2>Key XSD Concepts</h2>
<div class="table-wrapper"><table>
<thead><tr><th>Concept</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>xs:element</code></td><td>Declares an element</td></tr>
<tr><td><code>xs:complexType</code></td><td>Element with child elements or attributes</td></tr>
<tr><td><code>xs:simpleType</code></td><td>Element with text content only</td></tr>
<tr><td><code>xs:sequence</code></td><td>Children must appear in this order</td></tr>
<tr><td><code>xs:choice</code></td><td>One of the listed elements</td></tr>
<tr><td><code>minOccurs / maxOccurs</code></td><td>Cardinality (0=optional, unbounded=many)</td></tr>
<tr><td>Built-in types</td><td>xs:string, xs:integer, xs:date, xs:boolean</td></tr>
</tbody></table></div>

<h2>DITA and RELAX NG</h2>
<p>DITA 1.3 adopted <strong>RELAX NG (RNG)</strong> as its primary schema format. RNG is more concise than XSD and better suited to DITA's open content model. Oxygen supports RNG for DITA. You don't need to write schemas as a DITA author — but knowing they exist explains why Oxygen validates your content.</p>`,
quiz:[{question:'XSD differs from DTD primarily because XSD:',options:['Is simpler and older','Is written in XML syntax and supports rich data types','Does not support attribute declarations','Is only for database schemas'],correct:1,explanation:'XSD is written in XML (DTD has its own non-XML syntax) and provides rich data types (xs:integer, xs:date) that DTD lacks. This makes XSD more powerful and namespace-aware.'}],
prev:'page-18',next:'page-20'},

{id:'page-20',pageNum:20,module:2,moduleTitle:'XML Fundamentals',title:'XML Best Practices',subtitle:'Professional XML authoring practices for clean, maintainable, interoperable XML documents.',duration:'15 min read',level:'Intermediate',searchKeywords:'XML best practices naming conventions comments encoding indentation CDATA',objectives:['Apply XML naming conventions used in DITA','Use comments effectively','Understand encoding best practices','Write clean, readable XML'],
content:`<h2>XML Best Practices for DITA Authors</h2>
<h3>1. Always Declare Encoding</h3>
<p>Always include <code>encoding="UTF-8"</code> in your XML declaration. UTF-8 supports all Unicode characters and is the standard for modern documentation, especially for multilingual content.</p>

<h3>2. Use Meaningful, Consistent Element Names</h3>
<p>In DITA, names are defined by the standard — follow them exactly. In custom XML, use camelCase or kebab-case consistently. Never mix conventions.</p>

<h3>3. Use id Attributes Consistently</h3>
<p>Every topic must have a unique <code>id</code> attribute — Oxygen will prompt you for one. Element-level IDs enable conref targets. Follow a consistent naming pattern:</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span></div>
<pre><span class="tok-tag">&lt;task</span> <span class="tok-attr">id</span>=<span class="tok-val">"task-replace-fuel-filter"</span><span class="tok-tag">&gt;</span>   <span class="tok-com">&lt;!-- descriptive, unique --&gt;</span>
<span class="tok-tag">&lt;concept</span> <span class="tok-attr">id</span>=<span class="tok-val">"con-hydraulic-overview"</span><span class="tok-tag">&gt;</span> <span class="tok-com">&lt;!-- prefix by type --&gt;</span></pre></div>

<h3>4. Comment Sparingly but Meaningfully</h3>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">XML</span></div>
<pre><span class="tok-com">&lt;!-- Good: explains non-obvious structure choice --&gt;</span>
<span class="tok-com">&lt;!-- This step applies only to 737 Classic variants --&gt;</span>
<span class="tok-tag">&lt;step</span> <span class="tok-attr">product</span>=<span class="tok-val">"737-classic"</span><span class="tok-tag">&gt;</span>

<span class="tok-com">&lt;!-- Bad: restates what the markup already says --&gt;</span>
<span class="tok-com">&lt;!-- This is a step --&gt;</span>
<span class="tok-tag">&lt;step&gt;</span></pre></div>

<h3>5. Validate Before Committing</h3>
<p>Always validate DITA files before saving to the CCMS or pushing to Git. Oxygen validates in real-time — fix red errors before saving. Never commit invalid XML to a shared repository.</p>

<h3>6. Avoid CDATA Sections When Possible</h3>
<p>CDATA sections bypass XML parsing. While technically valid, they reduce clarity and make content harder to process. Use entity references (<code>&amp;lt;</code>, <code>&amp;amp;</code>) instead.</p>

<h3>7. Keep Files Focused</h3>
<p>Each DITA topic should be one file. Do not combine multiple tasks or concepts in one file — even if they are related. This enables topic-level reuse.</p>`,
quiz:[{question:'Why should every DITA topic have a unique id attribute?',options:['It is optional but helps organization','It is required by the DITA DTD AND enables conref targets and cross-references','It sets the filename automatically','It is only needed for map files'],correct:1,explanation:'The DITA DTD requires topic id attributes, making them mandatory for valid DITA. Additionally, unique ids enable conref (content reuse) and cross-references within and between topics.'}],
prev:'page-19',next:'page-21'},

{id:'page-21',pageNum:21,module:2,moduleTitle:'XML Fundamentals',title:'XML Exercises',subtitle:'Hands-on practice creating, editing, and validating XML documents.',duration:'30–45 min',level:'Hands-on',
searchKeywords:'XML exercises practice well-formed validation elements attributes',objectives:['Write well-formed XML from scratch','Identify and fix common XML errors','Create a structured XML document representing real content'],
content:`<h2>Exercise 2.1 — Fix the Broken XML</h2>
<p>The following XML has multiple errors. Find and fix all of them.</p>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">XML</span><span class="code-block-title">Broken XML — find 5 errors</span></div>
<pre><span class="tok-com">&lt;?xml version=1.0 encoding="UTF-8"?&gt;</span>
&lt;Manual&gt;
  &lt;Chapter id="ch1"&gt;
    &lt;Title&gt;Hydraulic System&lt;/title&gt;
    &lt;Para&gt;Operating pressure is 3000 PSI &amp; 500 PSI standby.
    &lt;Warning type=high-pressure&gt;
      Depressurize before opening lines.
    &lt;/warning&gt;
  &lt;/Chapter&gt;
&lt;/manual&gt;</pre></div>

<div class="expandable"><div class="expandable-header"><span>📋 View Answer</span><svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
<div class="expandable-body">
<p><strong>Errors found:</strong></p>
<ol>
<li><code>version=1.0</code> — attribute value not quoted. Fix: <code>version="1.0"</code></li>
<li><code>&lt;Title&gt;...&lt;/title&gt;</code> — case mismatch. Fix: <code>&lt;Title&gt;...&lt;/Title&gt;</code> or use consistent lowercase</li>
<li><code>&lt;Para&gt;</code> — not closed before <code>&lt;Warning&gt;</code>. Fix: add <code>&lt;/Para&gt;</code></li>
<li><code>&amp;</code> — must be escaped as <code>&amp;amp;</code></li>
<li><code>type=high-pressure</code> — attribute value not quoted. Fix: <code>type="high-pressure"</code></li>
<li><code>&lt;/manual&gt;</code> — doesn't match root element <code>&lt;Manual&gt;</code> (case sensitive). Fix both to same case.</li>
</ol>
</div></div>

<h2>Exercise 2.2 — Create XML from Scratch</h2>
<div class="exercise-box"><div class="exercise-box-header"><div class="exercise-icon">✏️</div><div><div class="exercise-title">Build an IPC Entry in XML</div><div class="exercise-subtitle">Represent this part catalog entry as well-formed XML</div></div></div>
<p><strong>Data to represent:</strong></p>
<ul>
<li>Part Number: 29-400-100-001</li>
<li>Description: Hydraulic Filter Element</li>
<li>ATA Chapter: 29, Section: 400, Subject: 100</li>
<li>Figure: 1, Item: 10</li>
<li>Quantity Per Assembly: 1</li>
<li>Unit of Measure: Each</li>
<li>Status: Active</li>
<li>Interchangeable With: 29-400-100-002 (Vendor part)</li>
</ul>
<p>Create an XML document representing this entry with appropriate element names and structure. Validate it is well-formed.</p>
</div>

<h2>Exercise 2.3 — Analyze a DITA Topic</h2>
<p>Open any DITA sample file in Oxygen XML Editor (or examine the code below) and identify:</p>
<ol>
<li>The root element and its id attribute</li>
<li>Which elements contain text content, which contain only elements</li>
<li>All attributes and their values</li>
<li>The element hierarchy (draw it as a tree)</li>
</ol>
<div class="code-block"><div class="code-block-header"><span class="code-block-lang">DITA XML</span><span class="code-block-title">Sample DITA concept to analyze</span></div>
<pre><span class="tok-tag">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>
<span class="tok-com">&lt;!DOCTYPE concept PUBLIC "-//OASIS//DTD DITA Concept//EN" "concept.dtd"&gt;</span>
<span class="tok-tag">&lt;concept</span> <span class="tok-attr">id</span>=<span class="tok-val">"con-hydraulic-system"</span> <span class="tok-attr">xml:lang</span>=<span class="tok-val">"en-US"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;title&gt;</span>Hydraulic System Overview<span class="tok-tag">&lt;/title&gt;</span>
  <span class="tok-tag">&lt;shortdesc&gt;</span>The hydraulic system provides power for flight controls,
    landing gear, and brakes.<span class="tok-tag">&lt;/shortdesc&gt;</span>
  <span class="tok-tag">&lt;conbody&gt;</span>
    <span class="tok-tag">&lt;p&gt;</span>The system operates at <span class="tok-tag">&lt;ph</span> <span class="tok-attr">keyref</span>=<span class="tok-val">"sys-pressure"</span><span class="tok-tag">/&gt;</span> PSI.<span class="tok-tag">&lt;/p&gt;</span>
    <span class="tok-tag">&lt;note</span> <span class="tok-attr">type</span>=<span class="tok-val">"important"</span><span class="tok-tag">&gt;</span>
      <span class="tok-tag">&lt;p&gt;</span>Always verify pressure before maintenance.<span class="tok-tag">&lt;/p&gt;</span>
    <span class="tok-tag">&lt;/note&gt;</span>
  <span class="tok-tag">&lt;/conbody&gt;</span>
<span class="tok-tag">&lt;/concept&gt;</span></pre></div>`,
quiz:[{question:'In Exercise 2.1, the error "&" in "3000 PSI & 500 PSI" must be fixed by:',options:['Removing the & character','Replacing & with &amp;amp;','Wrapping in CDATA','Using a namespace'],correct:1,explanation:'"&" in XML content must be escaped as "&amp;" because & starts entity references in XML. The character entity for & is &amp;.'}],
prev:'page-20',next:'page-22'},

{id:'page-22',pageNum:22,module:2,moduleTitle:'XML Fundamentals',title:'XML Interview Questions',subtitle:'50 frequently asked XML interview questions for DITA Author and Technical Writer roles — with complete answers.',duration:'45–60 min study',level:'Interview Prep',
searchKeywords:'XML interview questions answers DITA technical writer job',objectives:['Review all key XML concepts through Q&A format','Identify areas needing more study','Practice articulating XML concepts in interview language'],
content:`<h2>XML Interview Questions — DITA/Technical Writing Roles</h2>
<p>Click any question to reveal the full answer. These represent questions you may face in interviews for DITA Author, Information Developer, and Technical Writer roles.</p>

<div class="qa-item"><div class="qa-question"><span class="qa-q-num">1</span><span>What is XML and what makes it different from HTML?</span><svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="qa-answer"><div class="qa-answer-inner">XML (Extensible Markup Language) is a text-based format for storing and transporting structured data. Unlike HTML, XML lets you define your own tags (hence "extensible") — there is no fixed tag set. HTML is designed specifically for web page display; XML is designed for data representation and exchange. HTML parsers tolerate errors; XML parsers require strict well-formedness. XML provides semantic meaning through custom tags; HTML provides presentation through pre-defined display tags.</div></div></div>

<div class="qa-item"><div class="qa-question"><span class="qa-q-num">2</span><span>What are the well-formedness rules for XML?</span><svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="qa-answer"><div class="qa-answer-inner">An XML document is well-formed if it follows these rules: (1) Has exactly one root element; (2) All elements are properly closed; (3) Elements are properly nested (no overlapping); (4) Attribute values are quoted; (5) XML is case-sensitive — tags must match exactly; (6) Special characters (&lt; &amp; etc.) are escaped using entity references; (7) Attribute names are unique within an element.</div></div></div>

<div class="qa-item"><div class="qa-question"><span class="qa-q-num">3</span><span>What is the difference between well-formed and valid XML?</span><svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="qa-answer"><div class="qa-answer-inner">Well-formed means the document follows XML syntax rules (any XML parser can verify this). Valid means the document is well-formed AND conforms to a specific DTD or Schema — meaning the right elements appear in the right places, required elements are present, and attribute values are within allowed sets. A DITA file must be both well-formed and valid against the DITA DTD/schema.</div></div></div>

<div class="qa-item"><div class="qa-question"><span class="qa-q-num">4</span><span>What is a DTD and how is it used in DITA?</span><svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="qa-answer"><div class="qa-answer-inner">A DTD (Document Type Definition) defines the allowed vocabulary and structure of an XML document: which elements are allowed, in what order, which attributes they have, and what their values may be. DITA provides DTDs for each topic type (task.dtd, concept.dtd, reference.dtd, map.dtd). A DITA file's DOCTYPE declaration points to the relevant DTD, which the XML parser uses to validate the document structure.</div></div></div>

<div class="qa-item"><div class="qa-question"><span class="qa-q-num">5</span><span>What is XPath and how is it used in the DITA context?</span><svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="qa-answer"><div class="qa-answer-inner">XPath is a language for navigating and querying XML tree structures. In DITA contexts, XPath is used in: (1) XSLT transformations to find and process specific elements; (2) Oxygen XML's XPath search feature to find elements meeting specific criteria (e.g., all steps missing a cmd element); (3) DITA-OT processing scripts; (4) Debugging publishing pipeline issues. A basic XPath like //step[@product='737'] selects all step elements with product='737' anywhere in the document.</div></div></div>

<div class="qa-item"><div class="qa-question"><span class="qa-q-num">6</span><span>How do XML namespaces work and why are they needed?</span><svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="qa-answer"><div class="qa-answer-inner">Namespaces prevent element name collisions when combining XML vocabularies. For example, both a parts catalog vocabulary and a financial vocabulary might define a &lt;value&gt; element. Namespaces use URIs as unique identifiers: xmlns:parts="http://example.com/parts" and xmlns:fin="http://example.com/financial". Elements are then qualified: &lt;parts:value&gt; vs &lt;fin:value&gt;. The URI is just an identifier — it doesn't need to be a real web address.</div></div></div>

<div class="qa-item"><div class="qa-question"><span class="qa-q-num">7</span><span>What are XML entities and how do you use them?</span><svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="qa-answer"><div class="qa-answer-inner">XML entities are references that resolve to text. Built-in entities escape special characters: &amp;lt; = &lt;, &amp;gt; = &gt;, &amp;amp; = &amp;, &amp;quot; = ", &amp;apos; = '. DTDs can also define custom entities as reusable text snippets. In DITA, content reuse via conref and keyref is preferred over custom entities for maintainability, but entities are still valid for character escaping.</div></div></div>

<div class="qa-item"><div class="qa-question"><span class="qa-q-num">8</span><span>What is XSLT and how does it relate to DITA publishing?</span><svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="qa-answer"><div class="qa-answer-inner">XSLT (Extensible Stylesheet Language Transformations) is a language for transforming XML documents into other formats: HTML, PDF (via XSL-FO), plain text, or other XML formats. The DITA Open Toolkit uses XSLT stylesheets to transform DITA XML into output formats. When you run a transformation in Oxygen, the DITA-OT applies XSLT to your DITA topics and maps to produce HTML5, PDF, etc. You can customize output by modifying XSLT stylesheets.</div></div></div>

<div class="qa-item"><div class="qa-question"><span class="qa-q-num">9</span><span>How does XML support content reuse?</span><svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="qa-answer"><div class="qa-answer-inner">XML supports content reuse through: (1) Entities — references that resolve to reusable text; (2) XInclude — standard mechanism for including external XML files; (3) Application-level mechanisms like DITA conref (content reference) that pull specific elements from other files; (4) DITA keyrefs that function as variables. In DITA, the preferred reuse mechanisms are conref (element-level) and keyrefs (variable-level), both built on XML attribute references.</div></div></div>

<div class="qa-item"><div class="qa-question"><span class="qa-q-num">10</span><span>What is the XML DOM and why does it matter?</span><svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="qa-answer"><div class="qa-answer-inner">The Document Object Model (DOM) is a programming interface for XML documents. It represents the document as a tree of objects (nodes) that can be traversed and manipulated programmatically. When Oxygen XML Editor parses a DITA file, it builds a DOM tree. Transformation engines like XSLT processors also operate on DOM trees. Understanding the DOM helps DITA authors understand how their content is processed and why XPath expressions work the way they do.</div></div></div>`,
quiz:[{question:'In an XML interview, if asked "What is the difference between well-formed and valid XML?" the best answer is:',options:['They mean the same thing','Well-formed follows XML syntax rules; valid also conforms to a DTD/schema defining allowed structure','Valid means error-free; well-formed means complete','Well-formed is for DITA; valid is for HTML'],correct:1,explanation:'This is a common interview question. The correct answer: well-formed = correct XML syntax. Valid = well-formed + conforms to a DTD/schema. A document can be well-formed but not valid (e.g., correct syntax but wrong elements for the DTD).'}],
prev:'page-21',next:'page-23'},
];
