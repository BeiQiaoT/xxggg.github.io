import{_ as s,c as n,o as a,a as l}from"./app.eae52b3d.js";const d=JSON.parse('{"title":"\u{1F49B} JS \u6570\u7EC4\u67E5\u627E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F49B} includes()","slug":"\u{1F49B}-includes"},{"level":2,"title":"\u{1F49B} find()","slug":"\u{1F49B}-find"},{"level":2,"title":"\u{1F49B} findIndex()","slug":"\u{1F49B}-findindex"},{"level":2,"title":"\u{1F49B} indexOf()","slug":"\u{1F49B}-indexof"},{"level":2,"title":"\u{1F49B} lastIndexOf()","slug":"\u{1F49B}-lastindexof"}],"relativePath":"FrontEnd/JavaScript/JS_ArrayFind.md","lastUpdated":1657207500000}'),p={name:"FrontEnd/JavaScript/JS_ArrayFind.md"},o=l(`<h1 id="\u{1F49B}-js-\u6570\u7EC4\u67E5\u627E" tabindex="-1">\u{1F49B} JS \u6570\u7EC4\u67E5\u627E <a class="header-anchor" href="#\u{1F49B}-js-\u6570\u7EC4\u67E5\u627E" aria-hidden="true">#</a></h1><h2 id="\u{1F49B}-includes" tabindex="-1">\u{1F49B} includes() <a class="header-anchor" href="#\u{1F49B}-includes" aria-hidden="true">#</a></h2><p>\u5224\u65AD\u6570\u7EC4\u91CC\u6709\u6CA1\u6709\u8FD9\u4E2A\u6570</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#D8DEE9;">str</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">includes</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">\u5B57\u7B26\u4E32</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;">[</span><span style="color:#D8DEE9;">\u53EF\u9009</span><span style="color:#D8DEE9FF;">\u3002</span><span style="color:#D8DEE9;">\u4ECE\u54EA\u4E2A\u7D22\u5F15\u4F4D\u7F6E\u5F00\u59CB\u641C\u5BFB</span><span style="color:#D8DEE9FF;">\uFF0C</span><span style="color:#D8DEE9;">\u9ED8\u8BA4\u503C\u4E3A0</span><span style="color:#D8DEE9FF;">])</span></span>
<span class="line"><span style="color:#616E88;">// \u8FD4\u56DE\u5E03\u5C14\u503C true/false</span></span>
<span class="line"></span></code></pre></div><p>\u4E3E\u4E2A\u6817\u5B50\u{1F447}</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">xxg</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;">3</span><span style="color:#D8DEE9FF;">]</span></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">gg</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">xxg</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">includes</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">gg</span><span style="color:#D8DEE9FF;">)</span><span style="color:#616E88;">//true</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F49B}-find" tabindex="-1">\u{1F49B} find() <a class="header-anchor" href="#\u{1F49B}-find" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A\u6EE1\u8DB3\u6761\u4EF6\u7684\u6570\u636E</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#616E88;">// var num = [10, 20, 30, 40, 50, 60, 70, 80, 90];</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">newNum1</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">num</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">find</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">index</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">item</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">40</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">newNum1</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">//50</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F49B}-findindex" tabindex="-1">\u{1F49B} findIndex() <a class="header-anchor" href="#\u{1F49B}-findindex" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A\u6EE1\u8DB3\u6761\u4EF6\u7684\u7D22\u5F15(\u4ECE0\u5F00\u59CB), \u4E0D\u6EE1\u8DB3\u8FD4\u56DE-1</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#616E88;">// var num = [10, 20, 30, 40, 50, 60, 70, 80, 90];</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">newNum2</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">num</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">findIndex</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">index</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">item</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">40</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">newNum2 = </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">newNum2</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">//4</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F49B}-indexof" tabindex="-1">\u{1F49B} indexOf() <a class="header-anchor" href="#\u{1F49B}-indexof" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A\u6EE1\u8DB3\u6761\u4EF6\u7684\u7D22\u5F15(\u4ECE0\u5F00\u59CB), \u4E0D\u6EE1\u8DB3\u8FD4\u56DE-1</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#616E88;">// var num = [10, 20, 30, 40, 50, 60, 70, 80, 90];</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">newNum3</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">num</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">indexOf</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">40</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">newNum4</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">num</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">indexOf</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">40</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">10</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">//\u4ECE\u7D22\u5F1510\u7684\u4F4D\u7F6E\u5F00\u59CB\u5411\u540E\u67E5\u627E</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">newNum3 = </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">newNum3</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">//3</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">newNum4 = </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">newNum4</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">//-1</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F49B}-lastindexof" tabindex="-1">\u{1F49B} lastIndexOf() <a class="header-anchor" href="#\u{1F49B}-lastindexof" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u6570\u7EC4\u4E2D\u6700\u540E\u4E00\u4E2A\u6EE1\u8DB3\u6761\u4EF6\u7684\u7D22\u5F15(\u4ECE0\u5F00\u59CB), \u4E0D\u6EE1\u8DB3\u8FD4\u56DE-1</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#616E88;">// var num = [10, 20, 30, 40, 50, 60, 70, 80, 90];</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">newNum5</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">num</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">lastIndexOf</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">40</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">newNum6</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">num</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">lastIndexOf</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">40</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">//\u4ECE\u7D22\u5F151\u7684\u4F4D\u7F6E\u5F00\u59CB\u5411\u524D\u67E5\u627E</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">newNum5 = </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">newNum5</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">//3</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">newNum6 = </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">newNum6</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">//-1</span></span>
<span class="line"></span></code></pre></div>`,18),e=[o];function c(E,t,r,D,y,F){return a(),n("div",null,e)}var C=s(p,[["render",c]]);export{d as __pageData,C as default};