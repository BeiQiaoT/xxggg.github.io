import{_ as s,c as a,o as n,a as l}from"./app.5594fcad.js";const A=JSON.parse('{"title":"\u{1F313} js/css\u8BC6\u522B\u7CFB\u7EDF\u662F\u5426\u6697\u9ED1\u6A21\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5A92\u4F53\u67E5\u8BE2prefers-color-scheme","slug":"\u5A92\u4F53\u67E5\u8BE2prefers-color-scheme"},{"level":2,"title":"js\u5224\u65AD\u7CFB\u7EDF\u662F\u5426\u4E3A\u6697\u9ED1\u6A21\u5F0F","slug":"js\u5224\u65AD\u7CFB\u7EDF\u662F\u5426\u4E3A\u6697\u9ED1\u6A21\u5F0F"},{"level":2,"title":"css\u5224\u65AD\u7CFB\u7EDF\u6697\u9ED1\u6A21\u5F0F","slug":"css\u5224\u65AD\u7CFB\u7EDF\u6697\u9ED1\u6A21\u5F0F"}],"relativePath":"Note/Check_Dark.md","lastUpdated":1656706788000}'),e={name:"Note/Check_Dark.md"},p=l(`<h1 id="\u{1F313}-js-css\u8BC6\u522B\u7CFB\u7EDF\u662F\u5426\u6697\u9ED1\u6A21\u5F0F" tabindex="-1">\u{1F313} js/css\u8BC6\u522B\u7CFB\u7EDF\u662F\u5426\u6697\u9ED1\u6A21\u5F0F <a class="header-anchor" href="#\u{1F313}-js-css\u8BC6\u522B\u7CFB\u7EDF\u662F\u5426\u6697\u9ED1\u6A21\u5F0F" aria-hidden="true">#</a></h1><h2 id="\u5A92\u4F53\u67E5\u8BE2prefers-color-scheme" tabindex="-1">\u5A92\u4F53\u67E5\u8BE2prefers-color-scheme <a class="header-anchor" href="#\u5A92\u4F53\u67E5\u8BE2prefers-color-scheme" aria-hidden="true">#</a></h2><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">prefers-color-scheme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> dark</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    --background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">111416 --text-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ccc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    --link-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f96</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>no-preference\uFF1A\u8868\u793A\u7528\u6237\u672A\u6307\u5B9A\u64CD\u4F5C\u7CFB\u7EDF\u4E3B\u9898\u3002\u5176\u4F5C\u4E3A \u5E03\u5C14\u503C \u65F6\u4EE5false\u8F93\u51FA</li><li>light\uFF1A\u8868\u793A\u7528\u6237\u7684\u64CD\u4F5C\u7CFB\u7EDF\u662F\u6D45\u8272\u4E3B\u9898\uFF08light\uFF09</li><li>dark\uFF1A\u8868\u793A\u7528\u6237\u7684\u64CD\u4F5C\u7CFB\u7EDF\u662F\u6DF1\u8272\u4E3B\u9898\uFF08dark\uFF09</li></ul><h2 id="js\u5224\u65AD\u7CFB\u7EDF\u662F\u5426\u4E3A\u6697\u9ED1\u6A21\u5F0F" tabindex="-1">js\u5224\u65AD\u7CFB\u7EDF\u662F\u5426\u4E3A\u6697\u9ED1\u6A21\u5F0F <a class="header-anchor" href="#js\u5224\u65AD\u7CFB\u7EDF\u662F\u5426\u4E3A\u6697\u9ED1\u6A21\u5F0F" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> systemTheme </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">matchMedia</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(prefers-color-scheme: dark)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (systemTheme</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">matches) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u662F\u6DF1\u8272</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u4E3B\u9898\u8BBE\u7F6E\u4E3A\u6DF1\u8272\u3002</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u4E0D\u662F\u6DF1\u8272</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u4E3B\u9898\u8BBE\u7F6E\u4E3A\u6D45\u8272\u3002</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="css\u5224\u65AD\u7CFB\u7EDF\u6697\u9ED1\u6A21\u5F0F" tabindex="-1">css\u5224\u65AD\u7CFB\u7EDF\u6697\u9ED1\u6A21\u5F0F <a class="header-anchor" href="#css\u5224\u65AD\u7CFB\u7EDF\u6697\u9ED1\u6A21\u5F0F" aria-hidden="true">#</a></h2><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">prefers-color-scheme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> light</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/*light : \u6D45\u8272*/</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/*\u4E3B\u9898\u8BBE\u7F6E\u4E3A\u6DF1\u8272\u3002*/</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">prefers-color-scheme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> dark</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/*dark : \u6DF1\u8272*/</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/*\u4E3B\u9898\u8BBE\u7F6E\u4E3A\u6D45\u8272\u3002*/</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,8),o=[p];function c(t,r,D,y,i,F){return n(),a("div",null,o)}var d=s(e,[["render",c]]);export{A as __pageData,d as default};
