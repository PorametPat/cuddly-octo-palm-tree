const s=[{title:"Hello world",summary:"This is my first post!",content:`<h1>Hello world</h1>
<p>This is my first post!
... rest of the markdown content</p>`,_meta:{filePath:"hello-world.md",fileName:"hello-world.md",directory:".",extension:"md",path:"hello-world"},slug:"hello-world"},{title:"Test Markdown",summary:"Test the rendering of markdown",content:`<hr>
<h1>Markdown Test Page for SvelteKit</h1>
<p>This is a sample page to test Markdown rendering in a SvelteKit application. It contains a variety of elements to ensure everything displays correctly.</p>
<hr>
<h2>Text Formatting</h2>
<p>Here are some examples of basic text formatting:</p>
<ul>
<li>This is <strong>bold text</strong>.</li>
<li>This is <em>italic text</em>.</li>
<li>This is <em><strong>bold and italic text</strong></em>.</li>
<li>This is <code>inline code</code>.</li>
<li>This text is <del>strikethrough</del>.</li>
</ul>
<h2>Blockquote</h2>
<blockquote>
<p>"The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela</p>
</blockquote>
<h2>Lists</h2>
<h3>Unordered List</h3>
<ul>
<li>Item 1</li>
<li>Item 2
<ul>
<li>Nested Item 2.1</li>
<li>Nested Item 2.2</li>
</ul>
</li>
<li>Item 3</li>
</ul>
<h3>Ordered List</h3>
<ol>
<li>First item</li>
<li>Second item</li>
<li>Third item
<ol>
<li>Indented item 3.1</li>
<li>Indented item 3.2</li>
</ol>
</li>
</ol>
<h3>Task List</h3>
<ul class="contains-task-list">
<li class="task-list-item"><input type="checkbox" checked disabled> Complete project setup</li>
<li class="task-list-item"><input type="checkbox" checked disabled> Create Markdown renderer component</li>
<li class="task-list-item"><input type="checkbox" disabled> Write tests for the renderer</li>
</ul>
<h2>Code Block</h2>
<p>Here's an example of a JavaScript code block with syntax highlighting:</p>
<pre><code class="language-javascript">// lib/utils.js
export function greet(name) {
  return \`Hello, \${name}! Welcome to our SvelteKit app.\`;
}
</code></pre>
<h2>Table</h2>
<table>
<thead>
<tr>
<th align="left">Framework</th>
<th align="left">Language</th>
<th align="left">Website</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">SvelteKit</td>
<td align="left">JavaScript</td>
<td align="left"><a href="https://kit.svelte.dev">https://kit.svelte.dev</a></td>
</tr>
<tr>
<td align="left">Vue</td>
<td align="left">JavaScript</td>
<td align="left"><a href="https://vuejs.org">https://vuejs.org</a></td>
</tr>
<tr>
<td align="left">React</td>
<td align="left">JavaScript</td>
<td align="left"><a href="https://react.dev">https://react.dev</a></td>
</tr>
<tr>
<td align="left">Angular</td>
<td align="left">TypeScript</td>
<td align="left"><a href="https://angular.io">https://angular.io</a></td>
</tr>
</tbody>
</table>
<h2>Mathematical Equations</h2>
<p>You can include mathematical notation using LaTeX.</p>
<h3>Inline Math</h3>
<p>This is an example of inline math, which blends in with the text. For example, the Pythagorean theorem is written as (a^2 + b^2 = c^2). This is useful for short formulas like <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">E=mc^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord mathnormal">m</span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>.</p>
<h3>Display Math (Math Mode)</h3>
<p>For more complex equations, you can use display math, which puts the equation on its own line and centers it. A classic example is the quadratic formula:</p>
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mi>b</mi><mo>±</mo><msqrt><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>a</mi><mi>c</mi></mrow></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></mrow><annotation encoding="application/x-tex">x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.3845em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.0395em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span><span class="mord mathnormal mtight">a</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mathnormal mtight">b</span><span class="mbin mtight">±</span><span class="mord sqrt mtight"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9221em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mtight" style="padding-left:0.833em;"><span class="mord mtight"><span class="mord mathnormal mtight">b</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7463em;"><span style="top:-2.786em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mbin mtight">−</span><span class="mord mtight">4</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">c</span></span></span><span style="top:-2.8821em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail mtight" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1179em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></p>
<p>Or the definition of Euler's number:</p>
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>e</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi mathvariant="normal">∞</mi></msubsup><mfrac><mn>1</mn><mrow><mi>n</mi><mo stretchy="false">!</mo></mrow></mfrac></mrow><annotation encoding="application/x-tex">e = \\sum_{n=0}^{\\infty} \\frac{1}{n!} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">e</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8043em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mrel mtight">=</span><span class="mord mtight">0</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">∞</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mclose mtight">!</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></p>
<h2>Link and Image</h2>
<p>You can visit the <a href="https://kit.svelte.dev/docs">SvelteKit documentation</a> for more information.</p>
<p><img src="https://svelte.dev/svelte-logo-horizontal.svg" alt="Svelte Logo"></p>
<h2>Headings</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<p>And finally, some emoji! 🚀✨🎉</p>`,_meta:{filePath:"test-markdown.md",fileName:"test-markdown.md",directory:".",extension:"md",path:"test-markdown"},slug:"test-markdown"}];export{s as a};
