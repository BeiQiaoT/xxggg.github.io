import{_ as s,c as a,o as n,a as l}from"./app.8221f405.js";var p="/assets/f00055fe9548053ecb3ddfb1b4611a1889d9ba9b1abd08c8e97eee051e3a495e.f00055fe.png",o="/assets/1962cf7e801c3327abca5b7ff93f795dc03270a4abffbce2df3ad3bd63f92ec0.1962cf7e.png";const A=JSON.parse('{"title":"\u2B1B Express - CORS\u8DE8\u57DF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u65B9\u6CD5\u4E00\uFF1ACORS","slug":"\u65B9\u6CD5\u4E00\uFF1Acors"},{"level":2,"title":"\u65B9\u6CD5\u4E8C\uFF1A\u624B\u52A8\u914D\u7F6E","slug":"\u65B9\u6CD5\u4E8C\uFF1A\u624B\u52A8\u914D\u7F6E"}],"relativePath":"BackEnd/Express/Express_CORS.md","lastUpdated":1657122809000}'),e={name:"BackEnd/Express/Express_CORS.md"},E=l('<h1 id="\u2B1B-express-cors\u8DE8\u57DF" tabindex="-1">\u2B1B Express - CORS\u8DE8\u57DF <a class="header-anchor" href="#\u2B1B-express-cors\u8DE8\u57DF" aria-hidden="true">#</a></h1><h2 id="\u65B9\u6CD5\u4E00\uFF1Acors" tabindex="-1">\u65B9\u6CD5\u4E00\uFF1ACORS <a class="header-anchor" href="#\u65B9\u6CD5\u4E00\uFF1Acors" aria-hidden="true">#</a></h2><p><img src="'+p+'" alt="\u56FE 1"></p><p><img src="'+o+`" alt="\u56FE 2"></p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#D8DEE9FF;">npm install cors</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">cors</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">require</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">cors</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">use</span><span style="color:#D8DEE9FF;">(</span><span style="color:#88C0D0;">cors</span><span style="color:#D8DEE9FF;">())</span></span>
<span class="line"></span></code></pre></div><h2 id="\u65B9\u6CD5\u4E8C\uFF1A\u624B\u52A8\u914D\u7F6E" tabindex="-1">\u65B9\u6CD5\u4E8C\uFF1A\u624B\u52A8\u914D\u7F6E <a class="header-anchor" href="#\u65B9\u6CD5\u4E8C\uFF1A\u624B\u52A8\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">all</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">*</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">next</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">header</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">Access-Control-Allow-Origin</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">headers</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">origin</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">header</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">Access-Control-Allow-Headers</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">*</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">header</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">Access-Control-Allow-Methods</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">*</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">header</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">X-Powered-By</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;"> 3.2.1</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">header</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">Content-Type</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">application/json;charset=utf-8</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">next</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u6216\u8005</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">allowCors</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">next</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">headers</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">origin</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">==</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">http://localhost:3000</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">||</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">headers</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">origin</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">==</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">https://emxz.top</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">header</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">Access-Control-Allow-Origin</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">headers</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">origin</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">header</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">Access-Control-Allow-Methods</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">GET,PUT,POST,DELETE,OPTIONS</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">header</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">Access-Control-Allow-Headers</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">Content-Type</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">header</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">Access-Control-Allow-Credentials</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">true</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">next</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">use</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">allowCors</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">//\u4F7F\u7528\u8DE8\u57DF\u4E2D\u95F4\u4EF6</span></span>
<span class="line"></span></code></pre></div>`,9),r=[E];function c(t,F,y,D,C,i){return n(),a("div",null,r)}var h=s(e,[["render",c]]);export{A as __pageData,h as default};
