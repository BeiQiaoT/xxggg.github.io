import{_ as s,c as n,o as a,a as l}from"./app.8221f405.js";const i=JSON.parse('{"title":"\u{1F7E9} \u8BA1\u7B97 computed","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7528get/set \u5C31\u53EF\u4EE5\u64CD\u4F5C","slug":"\u7528get-set-\u5C31\u53EF\u4EE5\u64CD\u4F5C"}],"relativePath":"FrontEnd/Vue/Vue3_computed.md","lastUpdated":1657122809000}'),p={name:"FrontEnd/Vue/Vue3_computed.md"},o=l(`<h1 id="\u{1F7E9}-\u8BA1\u7B97-computed" tabindex="-1">\u{1F7E9} \u8BA1\u7B97 computed <a class="header-anchor" href="#\u{1F7E9}-\u8BA1\u7B97-computed" aria-hidden="true">#</a></h1><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">&lt;script</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">setup</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">lang</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">ts</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">computed</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">ref</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">vue</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">count</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">ref</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">plusOne</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">computed</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">count</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">value</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">plusOne</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">value</span><span style="color:#D8DEE9FF;">) </span><span style="color:#616E88;">// 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">plusOne</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">value</span><span style="color:#81A1C1;">++</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// error \u3010\u4E0D\u80FD\u64CD\u4F5C\u3011</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/script&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7528get-set-\u5C31\u53EF\u4EE5\u64CD\u4F5C" tabindex="-1">\u7528get/set \u5C31\u53EF\u4EE5\u64CD\u4F5C <a class="header-anchor" href="#\u7528get-set-\u5C31\u53EF\u4EE5\u64CD\u4F5C" aria-hidden="true">#</a></h2><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">&lt;script</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">setup</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">lang</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">ts</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">computed</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">ref</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">vue</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">count</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">ref</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">plusOne</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">computed</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">get</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">count</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">value</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">set</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">val</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">count</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">value</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">val</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">-</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">plusOne</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">value</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">count</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">value</span><span style="color:#D8DEE9FF;">) </span><span style="color:#616E88;">// 0</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/script&gt;</span></span>
<span class="line"></span></code></pre></div>`,4),e=[o];function t(c,E,r,F,D,y){return a(),n("div",null,e)}var u=s(p,[["render",t]]);export{i as __pageData,u as default};