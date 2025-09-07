const e=[{title:"Hello world",summary:"This is my first post!",content:`<h1>Hello world</h1>
<p>This is my first post!
... rest of the markdown content</p>`,_meta:{filePath:"hello-world.md",fileName:"hello-world.md",directory:".",extension:"md",path:"hello-world"},slug:"hello-world"},{title:"Test Markdown",summary:"Test the rendering of markdown",content:`<p>Of course! Here is a comprehensive Markdown sample that you can use to test the rendering capabilities of your SvelteKit application. It includes a variety of common Markdown elements.</p>
<h3>Raw Markdown</h3>
<p>You can copy and paste the following code into a <code>.md</code> file in your SvelteKit project.</p>
<pre><code class="language-markdown"># Markdown Test Page for SvelteKit

This is a sample page to test Markdown rendering in a SvelteKit application. It contains a variety of elements to ensure everything displays correctly.

---

## Text Formatting

Here are some examples of basic text formatting:

*   This is **bold text**.
*   This is *italic text*.
*   This is ***bold and italic text***.
*   This is \`inline code\`.
*   This text is ~~strikethrough~~.

## Blockquote

> "The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela

## Lists

### Unordered List
*   Item 1
*   Item 2
    *   Nested Item 2.1
    *   Nested Item 2.2
*   Item 3

### Ordered List
1.  First item
2.  Second item
3.  Third item
    1.  Indented item 3.1
    2.  Indented item 3.2

### Task List
- [x] Complete project setup
- [x] Create Markdown renderer component
- [ ] Write tests for the renderer

## Code Block

Here's an example of a JavaScript code block with syntax highlighting:

\`\`\`javascript
// lib/utils.js
export function greet(name) {
  return \`Hello, \${name}! Welcome to our SvelteKit app.\`;
}
</code></pre>
<h2>Table</h2>
<p>| Framework | Language      | Website                  |
| :-------- | :------------ | :----------------------- |
| SvelteKit | JavaScript    | https://kit.svelte.dev   |
| Vue       | JavaScript    | https://vuejs.org        |
| React     | JavaScript    | https://react.dev        |
| Angular   | TypeScript    | https://angular.io       |</p>
<h2>Link and Image</h2>
<p>You can visit the <a href="https://kit.svelte.dev/docs">SvelteKit documentation</a> for more information.</p>
<p><img src="https://svelte.dev/svelte-logo-horizontal.svg" alt="Svelte Logo"></p>
<h2>Headings</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<p>And finally, some emoji! 🚀✨🎉</p>
<pre><code>
### How It Should Render

When your SvelteKit app processes this Markdown, it should look something like this:

---

# Markdown Test Page for SvelteKit

This is a sample page to test Markdown rendering in a SvelteKit application. It contains a variety of elements to ensure everything displays correctly.

---

## Text Formatting

Here are some examples of basic text formatting:

*   This is **bold text**.
*   This is *italic text*.
*   This is ***bold and italic text***.
*   This is \`inline code\`.
*   This text is ~~strikethrough~~.

## Blockquote

> "The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela

## Lists

### Unordered List
*   Item 1
*   Item 2
    *   Nested Item 2.1
    *   Nested Item 2.2
*   Item 3

### Ordered List
1.  First item
2.  Second item
3.  Third item
    1.  Indented item 3.1
    2.  Indented item 3.2

### Task List
- [x] Complete project setup
- [x] Create Markdown renderer component
- [ ] Write tests for the renderer

## Code Block

Here's an example of a JavaScript code block with syntax highlighting:

\`\`\`javascript
// lib/utils.js
export function greet(name) {
  return \`Hello, \${name}! Welcome to our SvelteKit app.\`;
}
</code></pre>
<h2>Table</h2>
<p>| Framework | Language      | Website                  |
| :-------- | :------------ | :----------------------- |
| SvelteKit | JavaScript    | https://kit.svelte.dev   |
| Vue       | JavaScript    | https://vuejs.org        |
| React     | JavaScript    | https://react.dev        |
| Angular   | TypeScript    | https://angular.io       |</p>
<h2>Link and Image</h2>
<p>You can visit the <a href="https://kit.svelte.dev/docs">SvelteKit documentation</a> for more information.</p>
<p><img src="https://svelte.dev/svelte-logo-horizontal.svg" alt="Svelte Logo"></p>
<h2>Headings</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<p>And finally, some emoji! 🚀✨🎉</p>`,_meta:{filePath:"test-markdown.md",fileName:"test-markdown.md",directory:".",extension:"md",path:"test-markdown"},slug:"test-markdown"}];export{e as a};
