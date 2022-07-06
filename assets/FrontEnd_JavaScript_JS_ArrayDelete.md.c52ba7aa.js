import{_ as s,c as a,o as n,a as l}from"./app.8221f405.js";const i=JSON.parse('{"title":"\u{1F49B} JS \u6570\u7EC4\u5220\u9664","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F49B} length\uFF08\u957F\u5EA6\uFF09","slug":"\u{1F49B}-length\uFF08\u957F\u5EA6\uFF09"},{"level":2,"title":"\u{1F49B} delete\uFF08\u5220\u9664\u6307\u5B9A\u4E00\u4E2A\u4F4D\u7F6E\uFF09","slug":"\u{1F49B}-delete\uFF08\u5220\u9664\u6307\u5B9A\u4E00\u4E2A\u4F4D\u7F6E\uFF09"},{"level":2,"title":"\u{1F49B} pop \u6808\u65B9\u6CD5\uFF08\u53BB\u6389\u5E76\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\uFF09","slug":"\u{1F49B}-pop-\u6808\u65B9\u6CD5\uFF08\u53BB\u6389\u5E76\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\uFF09"},{"level":2,"title":"\u{1F49B} shift \u961F\u5217\uFF08\u79FB\u9664\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9879\uFF09","slug":"\u{1F49B}-shift-\u961F\u5217\uFF08\u79FB\u9664\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9879\uFF09"},{"level":2,"title":"\u{1F49B} splice","slug":"\u{1F49B}-splice"}],"relativePath":"FrontEnd/JavaScript/JS_ArrayDelete.md","lastUpdated":1657122809000}'),o={name:"FrontEnd/JavaScript/JS_ArrayDelete.md"},p=l(`<h1 id="\u{1F49B}-js-\u6570\u7EC4\u5220\u9664" tabindex="-1">\u{1F49B} JS \u6570\u7EC4\u5220\u9664 <a class="header-anchor" href="#\u{1F49B}-js-\u6570\u7EC4\u5220\u9664" aria-hidden="true">#</a></h1><h2 id="\u{1F49B}-length\uFF08\u957F\u5EA6\uFF09" tabindex="-1">\u{1F49B} length\uFF08\u957F\u5EA6\uFF09 <a class="header-anchor" href="#\u{1F49B}-length\uFF08\u957F\u5EA6\uFF09" aria-hidden="true">#</a></h2><p>JavaScript\u4E2DArray\u7684length\u5C5E\u6027\u975E\u5E38\u6709\u7279\u70B9\u4E00\u4E00\u5B83\u4E0D\u662F\u53EA\u8BFB\u7684\u3002\u56E0\u6B64\uFF0C\u901A\u8FC7\u8BBE\u7F6E\u8FD9\u4E2A\u5C5E\u6027\u53EF\u4EE5\u4ECE\u6570\u7EC4\u7684\u672B\u5C3E\u79FB\u9664\u9879\u6216\u6DFB\u52A0\u65B0\u9879\uFF0C\u8BF7\u770B\u4E0B\u9762\u4F8B\u5B50\uFF1A</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">colors</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">red</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">blue</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">grey</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">   </span><span style="color:#616E88;">//\u521B\u5EFA\u4E00\u4E2A\u5305\u542B3\u4E2A\u5B57\u7B26\u4E32\u7684\u6570\u7EC4</span></span>
<span class="line"><span style="color:#D8DEE9;">colors</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">length </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">//\u4E5F\u5C31\u662F\u4ED6\u628A\u957F\u5EA6\u8BA2\u4E3A\u4E862 \u7B2C\u4E09\u4E2A\u5C31\u6CA1\u4E86 </span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">colors</span><span style="color:#D8DEE9FF;">[</span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;">])</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">  </span><span style="color:#616E88;">//undefined  \u5C31\u662F\u672A\u5B9A\u4E49\uFF01</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F49B}-delete\uFF08\u5220\u9664\u6307\u5B9A\u4E00\u4E2A\u4F4D\u7F6E\uFF09" tabindex="-1">\u{1F49B} delete\uFF08\u5220\u9664\u6307\u5B9A\u4E00\u4E2A\u4F4D\u7F6E\uFF09 <a class="header-anchor" href="#\u{1F49B}-delete\uFF08\u5220\u9664\u6307\u5B9A\u4E00\u4E2A\u4F4D\u7F6E\uFF09" aria-hidden="true">#</a></h2><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">4</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">delete</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;">[</span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">   </span><span style="color:#616E88;">//[undefined, 2, 3, 4]</span></span>
<span class="line"></span></code></pre></div><p>\u5220\u9664\u7B2C0\u4F4D\uFF0C\u4F46\u662F\u957F\u5EA6\u6CA1\u53D8</p><h2 id="\u{1F49B}-pop-\u6808\u65B9\u6CD5\uFF08\u53BB\u6389\u5E76\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\uFF09" tabindex="-1">\u{1F49B} pop \u6808\u65B9\u6CD5\uFF08\u53BB\u6389\u5E76\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\uFF09 <a class="header-anchor" href="#\u{1F49B}-pop-\u6808\u65B9\u6CD5\uFF08\u53BB\u6389\u5E76\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\uFF09" aria-hidden="true">#</a></h2><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">colors</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">red</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">blue</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">grey</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">item</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">colors</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">pop</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">      </span><span style="color:#616E88;">//&quot;grey&quot;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">colors</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">length)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">    </span><span style="color:#616E88;">//2</span></span>
<span class="line"></span></code></pre></div><p>pop\u5C31\u662F\u8FD4\u56DE\u6700\u540E\u4E00\u4F4D\uFF0C\u800C\u539F\u6570\u7EC4\u91CC\u4F1A\u88AB\u53BB\u6389\u6700\u540E\u4E00\u4E2A</p><h2 id="\u{1F49B}-shift-\u961F\u5217\uFF08\u79FB\u9664\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9879\uFF09" tabindex="-1">\u{1F49B} shift \u961F\u5217\uFF08\u79FB\u9664\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9879\uFF09 <a class="header-anchor" href="#\u{1F49B}-shift-\u961F\u5217\uFF08\u79FB\u9664\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9879\uFF09" aria-hidden="true">#</a></h2><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">colors</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">red</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">blue</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">grey</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">item</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">colors</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">shift</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">      </span><span style="color:#616E88;">//&quot;red&quot;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">colors</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">length)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">    </span><span style="color:#616E88;">//2</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F49B}-splice" tabindex="-1">\u{1F49B} splice <a class="header-anchor" href="#\u{1F49B}-splice" aria-hidden="true">#</a></h2><p>\u53EA\u9700\u8981\u6307\u5B9A2\u4E2A\u53C2\u6570\uFF1A<br><strong>\u8981\u5220\u9664\u7684\u7B2C\u4E00\u9879\u7684\u4F4D\u7F6E</strong>\u548C<strong>\u8981\u5220\u9664\u7684\u9879\u6570</strong><br> \u4F8B\u5982splice(0, 2)\u4F1A\u5220\u9664\u6570\u7EC4\u4E2D\u7684\u524D\u4E24\u9879\u3002</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">colors</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">red</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">blue</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">grey</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">item</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">colors</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">splice</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">      </span><span style="color:#616E88;">//&quot;red&quot;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">colors</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">    </span><span style="color:#616E88;">//[&quot;blue&quot;, &quot;grey&quot;]</span></span>
<span class="line"></span></code></pre></div>`,15),e=[p];function t(r,c,E,F,y,D){return n(),a("div",null,e)}var d=s(o,[["render",t]]);export{i as __pageData,d as default};
