import{_ as s,c as n,o as a,a as p}from"./app.8221f405.js";const i=JSON.parse('{"title":"\u{1F7E1} JS \u6DF1\u590D\u5236-\u6D45\u590D\u5236","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F7E1} \u5F15\u7528\u8D4B\u503C - \u6D45\u590D\u5236","slug":"\u{1F7E1}-\u5F15\u7528\u8D4B\u503C-\u6D45\u590D\u5236"},{"level":2,"title":"\u{1F7E1} es6 ...\u6269\u5C55\u7B26 - \u6DF1\u590D\u5236","slug":"\u{1F7E1}-es6-\u6269\u5C55\u7B26-\u6DF1\u590D\u5236"},{"level":2,"title":"\u{1F7E1} JSON.parse JSON.stringify \u6DF1\u590D\u5236","slug":"\u{1F7E1}-json-parse-json-stringify-\u6DF1\u590D\u5236"}],"relativePath":"FrontEnd/JavaScript/JS_Copy.md","lastUpdated":1657122809000}'),l={name:"FrontEnd/JavaScript/JS_Copy.md"},o=p(`<h1 id="\u{1F7E1}-js-\u6DF1\u590D\u5236-\u6D45\u590D\u5236" tabindex="-1">\u{1F7E1} JS \u6DF1\u590D\u5236-\u6D45\u590D\u5236 <a class="header-anchor" href="#\u{1F7E1}-js-\u6DF1\u590D\u5236-\u6D45\u590D\u5236" aria-hidden="true">#</a></h1><h2 id="\u{1F7E1}-\u5F15\u7528\u8D4B\u503C-\u6D45\u590D\u5236" tabindex="-1">\u{1F7E1} \u5F15\u7528\u8D4B\u503C - \u6D45\u590D\u5236 <a class="header-anchor" href="#\u{1F7E1}-\u5F15\u7528\u8D4B\u503C-\u6D45\u590D\u5236" aria-hidden="true">#</a></h2><blockquote><p>\u6539\u53D8\u590D\u5236\u7684\u53D8\u91CF\u65F6\uFF0C\u539F\u5BF9\u8C61\u4E5F\u4F1A\u88AB\u6539\u53D8</p></blockquote><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">obj1</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">xxg</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">obj2</span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9;">obj1</span><span style="color:#D8DEE9FF;"> 	</span><span style="color:#616E88;">//\u53EA\u662F\u628Aobj1\u6307\u5411\u5806\u5185\u5B58\u7684\u5730\u5740\u8D4B\u503C\u7ED9obj2</span></span>
<span class="line"><span style="color:#D8DEE9;">obj2</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">name</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">yt</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">obj1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">obj2</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#616E88;">//{name:yt} {name:yt}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F7E1}-es6-\u6269\u5C55\u7B26-\u6DF1\u590D\u5236" tabindex="-1">\u{1F7E1} es6 ...\u6269\u5C55\u7B26 - \u6DF1\u590D\u5236 <a class="header-anchor" href="#\u{1F7E1}-es6-\u6269\u5C55\u7B26-\u6DF1\u590D\u5236" aria-hidden="true">#</a></h2><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">obj1</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">xxg</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">obj2</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">{</span><span style="color:#81A1C1;">...</span><span style="color:#D8DEE9;">obj1</span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9;">obj2</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">name</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">yt</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#616E88;">//\u5F53\u6211\u4EEC\u6539\u53D8obj2.name\u65F6\uFF0Cobj1\u6CA1\u6709\u88AB\u6539\u53D8</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">obj1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">obj2</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre></div><blockquote><p><strong>\u4F18\u70B9\uFF1A\u8FD9\u79CD\u590D\u5236\u65B9\u5F0F\u4E0D\u4F1A\u6539\u53D8\u539F\u5BF9\u8C61</strong><strong>\u7F3A\u70B9\uFF1A\u5F53\u5BF9\u8C61\u91CC\u9762\u5728\u5D4C\u5957\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u5BF9\u5185\u90E8\u5BF9\u8C61\u7684\u590D\u5236\u662F\u6D45\u590D\u5236</strong></p></blockquote><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">obj1</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">xxg</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">other</span><span style="color:#ECEFF4;">:{</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">age</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;">18</span><span style="color:#ECEFF4;">,}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">obj2</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">{</span><span style="color:#81A1C1;">...</span><span style="color:#D8DEE9;">obj1</span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9;">obj2</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">name</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">yt</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#D8DEE9;">obj2</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">other</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">age</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">180</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">obj1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">obj2</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#616E88;">// {                   </span></span>
<span class="line"><span style="color:#616E88;">//	name:&quot;xxg&quot;</span></span>
<span class="line"><span style="color:#616E88;">//  other:{age:180}</span></span>
<span class="line"><span style="color:#616E88;">// }</span></span>
<span class="line"><span style="color:#616E88;">// {                   </span></span>
<span class="line"><span style="color:#616E88;">//	name:&quot;yt&quot;</span></span>
<span class="line"><span style="color:#616E88;">//  other:{age:180}</span></span>
<span class="line"><span style="color:#616E88;">// }</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u6539\u53D8\u7684name\u6CA1\u6709\u5F71\u54CD\u539F\u5BF9\u8C61\uFF0C\u4F46\u662F\u5185\u90E8\u7684other\u5BF9\u8C61\u662F\u6709\u5F71\u54CD\u7684 es6 \u2026\u6269\u5C55\u7B26\u8FD9\u79CD\u65B9\u5F0F\u4E5F\u53EA\u662F\u6BD4\u6D45\u590D\u5236\u591A\u590D\u5236\u4E00\u5C42</p></blockquote><h2 id="\u{1F7E1}-json-parse-json-stringify-\u6DF1\u590D\u5236" tabindex="-1">\u{1F7E1} JSON.parse JSON.stringify \u6DF1\u590D\u5236 <a class="header-anchor" href="#\u{1F7E1}-json-parse-json-stringify-\u6DF1\u590D\u5236" aria-hidden="true">#</a></h2><blockquote><p>\u4F18\u70B9\uFF1A\u53EF\u4EE5\u5B9E\u73B0\u591A\u5C42\u6DF1\u590D\u5236 \u7F3A\u70B9\uFF1A\u503C\u4E3Aundefined\u7684\u5C5E\u6027\u65E0\u6CD5\u590D\u5236</p></blockquote><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">obj1</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">xxg</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">other</span><span style="color:#ECEFF4;">:{</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">age</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;">18</span><span style="color:#ECEFF4;">,}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#616E88;">//JSON.stringify()\u628A\u5BF9\u8C61\u8F6C\u5316\u6210json\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#616E88;">//JSON.parse()\u628Ajson\u5B57\u7B26\u4E32\u8FD8\u539F\u6210\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">obj2</span><span style="color:#81A1C1;">=JSON</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">parse</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">JSON</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">stringify</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">obj1</span><span style="color:#D8DEE9FF;">))</span></span>
<span class="line"><span style="color:#D8DEE9;">obj2</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">name</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">yt</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#D8DEE9;">obj2</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">other</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">age</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">180</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">obj1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">obj2</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre></div>`,12),e=[o];function c(t,E,r,y,F,D){return a(),n("div",null,e)}var d=s(l,[["render",c]]);export{i as __pageData,d as default};