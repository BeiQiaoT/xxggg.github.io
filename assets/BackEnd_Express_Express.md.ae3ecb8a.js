import{_ as s,c as a,o as n,a as p}from"./app.8221f405.js";const C=JSON.parse('{"title":"\u2B1B Express","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00"},{"level":2,"title":"req \u4E0E res","slug":"req-\u4E0E-res"},{"level":3,"title":"req\u662F\u8BF7\u6C42\u5BF9\u8C61","slug":"req\u662F\u8BF7\u6C42\u5BF9\u8C61"},{"level":3,"title":"res\u662F\u54CD\u5E94\u5BF9\u8C61","slug":"res\u662F\u54CD\u5E94\u5BF9\u8C61"},{"level":2,"title":"\u4E2D\u95F4\u4EF6\u5904\u7406","slug":"\u4E2D\u95F4\u4EF6\u5904\u7406"},{"level":2,"title":"try - catch","slug":"try-catch"},{"level":2,"title":"\u4E2D\u95F4\u4EF6 app.use","slug":"\u4E2D\u95F4\u4EF6-app-use"},{"level":3,"title":"\u8DEF\u7531\u4E2D\u95F4\u4EF6","slug":"\u8DEF\u7531\u4E2D\u95F4\u4EF6"},{"level":3,"title":"\u6355\u83B7\u9519\u8BEF \u5904\u7406\u4E2D\u95F4\u4EF6\u{1F447}","slug":"\u6355\u83B7\u9519\u8BEF-\u5904\u7406\u4E2D\u95F4\u4EF6\u{1F447}"},{"level":3,"title":"\u5904\u7406404","slug":"\u5904\u7406404"},{"level":3,"title":"\u5185\u7F6E\u4E2D\u95F4\u4EF6\uFF085\u4E2A\uFF09","slug":"\u5185\u7F6E\u4E2D\u95F4\u4EF6\uFF085\u4E2A\uFF09"}],"relativePath":"BackEnd/Express/Express.md","lastUpdated":1657122809000}'),l={name:"BackEnd/Express/Express.md"},o=p(`<h1 id="\u2B1B-express" tabindex="-1">\u2B1B Express <a class="header-anchor" href="#\u2B1B-express" aria-hidden="true">#</a></h1><h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p>Node + Express \u642D\u5EFA\u51FA\u6700\u7B80\u5355\u7684\u4E00\u4E2A\u670D\u52A1\u3002 \u6700\u540E\u63A5\u7740\u5F80\u4E0B\u4ECB\u7ECD\u{1F447}</p><h2 id="req-\u4E0E-res" tabindex="-1">req \u4E0E res <a class="header-anchor" href="#req-\u4E0E-res" aria-hidden="true">#</a></h2><p>req\u548Cres\u90FD\u662F\u7EE7\u627FNode\u539F\u751F\u5BF9\u8C61 req - http.IncomingMessage res - http.ServerResponse</p><h3 id="req\u662F\u8BF7\u6C42\u5BF9\u8C61" tabindex="-1">req\u662F\u8BF7\u6C42\u5BF9\u8C61 <a class="header-anchor" href="#req\u662F\u8BF7\u6C42\u5BF9\u8C61" aria-hidden="true">#</a></h3><p>\u5B98\u65B9\u6587\u6863\uFF1A<a href="http://expressjs.com/en/4x/api.html" target="_blank" rel="noopener noreferrer">http://expressjs.com/en/4x/api.html</a></p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#616E88;">// src/app.js</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">express</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">require</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">express</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">app</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">express</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">all</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">/</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,(</span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">query</span><span style="color:#D8DEE9FF;">)</span><span style="color:#616E88;">//\u8BF7\u6C42\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">json</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span><span style="color:#616E88;">//\u54CD\u5E94\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">name</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">\u8C22\u590F\u6208</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">listen</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">3000</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">server \u542F\u52A8\u6210\u529F\uFF01http://127.0.0.1:3000</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">url</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// \u8BF7\u6C42\u5730\u5740</span></span>
<span class="line"><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">method</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">//\u8BF7\u6C42\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">headers</span><span style="color:#D8DEE9FF;">  </span><span style="color:#616E88;">//\u83B7\u5F97\u8BF7\u6C42\u5934</span></span>
<span class="line"><span style="color:#616E88;">//....  \u8FD8\u6709\u5F88\u591A </span></span>
<span class="line"><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">query</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">q</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">//\u83B7\u5F97\u53C2\u6570</span></span>
<span class="line"><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">cookie</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">//\u83B7\u53D6cookie</span></span>
<span class="line"><span style="color:#616E88;">//\u5B98\u65B9\u6587\u6863\uFF1Ahttp://expressjs.com/en/4x/api.html</span></span>
<span class="line"></span></code></pre></div><h3 id="res\u662F\u54CD\u5E94\u5BF9\u8C61" tabindex="-1">res\u662F\u54CD\u5E94\u5BF9\u8C61 <a class="header-anchor" href="#res\u662F\u54CD\u5E94\u5BF9\u8C61" aria-hidden="true">#</a></h3><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">statusCode</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">201</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">//\u4FEE\u6539\u6210\u529F\u54CD\u5E94\u7801~</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">send</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">xxg</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">) </span><span style="color:#616E88;">//\u53D1\u9001\u5185\u5BB9</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">cookie</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">foo</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">bar</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">) </span><span style="color:#616E88;">// \u5411\u5BA2\u6237\u7AEF\u53D1\u9001cookie</span></span>
<span class="line"><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">end</span><span style="color:#D8DEE9FF;">() </span><span style="color:#616E88;">//\u7ED3\u675F\u54CD\u5E94</span></span>
<span class="line"><span style="color:#616E88;">//\u5B98\u65B9\u6587\u6863\uFF1Ahttp://expressjs.com/en/4x/api.html</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E2D\u95F4\u4EF6\u5904\u7406" tabindex="-1">\u4E2D\u95F4\u4EF6\u5904\u7406 <a class="header-anchor" href="#\u4E2D\u95F4\u4EF6\u5904\u7406" aria-hidden="true">#</a></h2><p><strong>\u5168\u5C40\u4E2D\u95F4\u4EF6 \u8981\u653E\u5728\u6240\u6709\u8DEF\u7531\u524D\u9762</strong></p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#616E88;">//\u914D\u7F6E\u89E3\u6790\u8868\u5355\u8BF7\u6C42  json\u683C\u5F0F\u7684 application/json</span></span>
<span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">use</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">express</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">json</span><span style="color:#D8DEE9FF;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// \u89E3\u6790x-www-form-urlencoded</span></span>
<span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">use</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">express</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">urlencoded</span><span style="color:#D8DEE9FF;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u53EA\u6709\u8FD9\u6837\u624D\u53EF\u4EE5\u5728post\u8BF7\u6C42\u91CC \u7528 res.body \u83B7\u5F97\u8BF7\u6C42\u4F53</span></span>
<span class="line"><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">body</span></span>
<span class="line"></span></code></pre></div><h2 id="try-catch" tabindex="-1">try - catch <a class="header-anchor" href="#try-catch" aria-hidden="true">#</a></h2><p><strong>\u6BCF\u4E2A\u8BF7\u6C42\u90FD\u8981\u53BB\u4F7F\u7528try - catch</strong></p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">get</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">/</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">async</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">try</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">    </span><span style="color:#616E88;">//...</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">xx</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">await</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">getDb</span><span style="color:#D8DEE9FF;">()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">catch</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">err</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">    </span><span style="color:#616E88;">//...</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E2D\u95F4\u4EF6-app-use" tabindex="-1">\u4E2D\u95F4\u4EF6 app.use <a class="header-anchor" href="#\u4E2D\u95F4\u4EF6-app-use" aria-hidden="true">#</a></h2><ol><li>\u4E2D\u95F4\u4EF6\u5C31\u662F\u7528\u6765\u9884\u5148\u5904\u7406\u4E00\u4E9B\u8FDB\u6765\u7684\u8BF7\u6C42\uFF0C\u653E\u5728\u6240\u6709\u8DEF\u7531\u524D\u9762~</li><li>\u76F8\u5F53\u4E8E\u4E00\u4E2A\u3010\u62E6\u622A\u5668\u3011</li><li>\u9700\u8981\u4F7F\u7528\u3010next()\u3011 \u6765\u8BA9\u8BF7\u6C42\u5411\u4E0B\u653E\u884C</li><li><strong>[\u6240\u6709\u4E2D\u95F4\u4EF6\u653E\u4E0A\u4E0A\u6E38\uFF0C\u8DEF\u7531\u653E\u4E0B\u6E38\uFF0C\u9519\u8BEF\u5904\u7406\u653E\u6700\u540E\uFF01]</strong></li></ol><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">use</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">next</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">req</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">next</span><span style="color:#D8DEE9FF;">()</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)   </span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//get \u4E5F\u6709next \u53EF\u4EE5\u7406\u89E3get \u5176\u5B9E\u4E5F\u662F\u4E2D\u95F4\u4EF6\u3002\u6216\u8005\u8BF4\uFF0Cuse\u662F\u83B7\u53D6\u6240\u6709\u7C7B\u578B\u8BF7\u6C42 \u548C\u3010app.all\u3011\u6709\u70B9\u7C7B\u4F3C\uFF01</span></span>
<span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">get</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">next</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">req</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">next</span><span style="color:#D8DEE9FF;">()</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="\u8DEF\u7531\u4E2D\u95F4\u4EF6" tabindex="-1">\u8DEF\u7531\u4E2D\u95F4\u4EF6 <a class="header-anchor" href="#\u8DEF\u7531\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a></h3><p>\u4E3A\u4E86\u66F4\u52A0\u65B9\u4FBF\u7BA1\u7406\u3010\u63A5\u53E3\u8BF7\u6C42\u3011\u628A\u5404\u7C7B\u8BF7\u6C42\u5C01\u88C5\u6210\u4E00\u4E2A\u4E00\u4E2A\u7684\u6A21\u5757\uFF0C\u7136\u540E\u4F7F\u7528\u4E2D\u95F4\u4EF6\u4E32\u8D77\u6765~</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#616E88;">//\u521B\u5EFA router.js </span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">express</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">require</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">express</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//1.\u521B\u5EFA\u8DEF\u7531\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#616E88;">// \u8DEF\u7531\u5B9E\u4F8B \u76F8\u5F53\u4E8E\u4E00\u4E2A mini Express \u5B9E\u4F8B~</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">router</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">express</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">Router</span><span style="color:#D8DEE9FF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//2.\u914D\u7F6E\u8DEF\u7531</span></span>
<span class="line"><span style="color:#D8DEE9;">router</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">get</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">/foo</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,(</span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">send</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">get /foo</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//3.\u5BFC\u51FA</span></span>
<span class="line"><span style="color:#8FBCBB;">module</span><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">exports</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">router</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#616E88;">//app.js</span></span>
<span class="line"><span style="color:#616E88;">//4 \u5C06\u8DEF\u7531\u96C6\u6210\u5230express</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u5176\u4ED6\u5F15\u5165...</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">router</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">require</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">./router</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u4E2D\u95F4\u4EF6</span></span>
<span class="line"><span style="color:#616E88;">//...</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u6302\u8F7D</span></span>
<span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">use</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">router</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u4E5F\u53EF\u4EE5\u9650\u5B9A\u8DEF\u7531 \u8FD9\u6837 \u8BF7\u6C42\u5C31\u5F97 /abc/foo</span></span>
<span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">use</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">/abc</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">router</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="\u6355\u83B7\u9519\u8BEF-\u5904\u7406\u4E2D\u95F4\u4EF6\u{1F447}" tabindex="-1">\u6355\u83B7\u9519\u8BEF \u5904\u7406\u4E2D\u95F4\u4EF6\u{1F447} <a class="header-anchor" href="#\u6355\u83B7\u9519\u8BEF-\u5904\u7406\u4E2D\u95F4\u4EF6\u{1F447}" aria-hidden="true">#</a></h3><p>\u5728\u6240\u6709\u7684\u8DEF\u7531\u6302\u8F7D\u4E4B\u540E\u6302\u8F7D\u3010\u9519\u8BEF\u5904\u7406\u4E2D\u95F4\u4EF6\u3011</p><ol><li>\u5FC5\u987B\u56DB\u4E2A\u53C2\u6570\uFF0C\u7F3A\u4E00\u4E0D\u53EF</li></ol><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">use</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">err</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">next</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;">[</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">\u9519\u8BEF</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">err</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">status</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">500</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">json</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">error</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9;">err</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">message</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u6240\u6709\u8DEF\u7531\u7684catch\u8981next(err)</li></ol><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#D8DEE9;">router</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">get</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">/</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#81A1C1;">async</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">next</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">try</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">    </span><span style="color:#616E88;">//...</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">catch</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">err</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">next</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">err</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5904\u7406404" tabindex="-1">\u5904\u7406404 <a class="header-anchor" href="#\u5904\u7406404" aria-hidden="true">#</a></h3><p>\u5728\u6240\u6709\u7684\u8DEF\u7531\u4E4B\u540E\uFF0C\u5728\u9519\u8BEF\u5904\u7406\u4E4B\u524D</p><ol><li>\u5B83\u7C7B\u4F3C\u4E8E\u6700\u540E\u515C\u5E95\u7684\u5904\u7406</li><li>\u5B83\u548C\u9519\u8BEF\u5904\u7406\u4E0D\u4E00\u6837\uFF0C \u3010\u9519\u8BEF\u5904\u7406\u3011\u9700\u8981 next(err) \u89E6\u53D1\u3002</li><li>404\u8FD9\u4E2A\u4E2D\u95F4\u4EF6\u662F \u627E\u4E0D\u5230\u8DEF\u7531\u800C\u89E6\u53D1\u7684\u3002</li></ol><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#616E88;">//\u5F15\u5165</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u4E2D\u95F4\u4EF6\u9884\u5904\u7406</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//api\u63A5\u53E3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//404\u5904\u7406</span></span>
<span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">use</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">next</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">=&gt;</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">status</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">404</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">send</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">404 Not Found</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u9519\u8BEF\u5904\u7406</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u5F00\u542F\u670D\u52A1</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5185\u7F6E\u4E2D\u95F4\u4EF6\uFF085\u4E2A\uFF09" tabindex="-1">\u5185\u7F6E\u4E2D\u95F4\u4EF6\uFF085\u4E2A\uFF09 <a class="header-anchor" href="#\u5185\u7F6E\u4E2D\u95F4\u4EF6\uFF085\u4E2A\uFF09" aria-hidden="true">#</a></h3><ol><li>express.json() \u3010\u89E3\u6790\u3011\u3010Content-Type : application/json\u3011</li><li>express.urlencoded() \u3010\u89E3\u6790\u3011\u3010Content-Type : application/x-www-from-urlencoded\u3011</li><li>express.raw() \u3010\u89E3\u6790\u3011\u3010Content-Type : application/octet-stream\u3011</li><li>express.text() \u3010\u89E3\u6790\u3011\u3010Content-Type : text/plain\u3011</li><li>express.static \u3010\u6258\u7BA1\u9759\u6001\u8D44\u6E90\u6587\u4EF6\u3011</li></ol>`,36),e=[o];function E(c,r,t,F,y,D){return n(),a("div",null,e)}var d=s(l,[["render",E]]);export{C as __pageData,d as default};