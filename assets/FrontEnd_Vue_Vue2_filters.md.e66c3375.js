import{_ as s,c as a,o as n,a as l}from"./app.8221f405.js";const D=JSON.parse('{"title":"\u{1F7E9} \u8FC7\u6EE4\u5668","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/Vue/Vue2_filters.md","lastUpdated":1657122809000}'),p={name:"FrontEnd/Vue/Vue2_filters.md"},e=l(`<h1 id="\u{1F7E9}-\u8FC7\u6EE4\u5668" tabindex="-1">\u{1F7E9} \u8FC7\u6EE4\u5668 <a class="header-anchor" href="#\u{1F7E9}-\u8FC7\u6EE4\u5668" aria-hidden="true">#</a></h1><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">&lt;div&gt;</span><span style="color:#D8DEE9FF;">{{ message | filteName }}</span><span style="color:#81A1C1;">&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">&lt;div</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">v-bind:id</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">message | filteName</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;&lt;/div&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#616E88;">//\u5C40\u90E8</span></span>
<span class="line"><span style="color:#D8DEE9FF;">filters</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">filteName</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">: </span><span style="color:#81A1C1;">function</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">value</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">value</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">xxg</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>filters\u8FC7\u6EE4\u5668\u5728Vue3.0\u4E2D\u5DF2\u7ECF\u5220\u9664\u4E86\uFF0C\u4E0D\u518D\u652F\u6301\uFF01</p></div>`,4),o=[e];function t(c,r,E,F,i,y){return n(),a("div",null,o)}var _=s(p,[["render",t]]);export{D as __pageData,_ as default};
