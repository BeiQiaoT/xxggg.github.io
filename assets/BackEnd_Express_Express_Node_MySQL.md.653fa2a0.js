import{_ as s,c as n,o as a,a as p}from"./app.eae52b3d.js";var l="/assets/0ca56b903a30c845d087d0623d6630f106cbcb81b24b74eef6819f01fc18d47f.0ca56b90.png",o="/assets/c2e4756c20e05d005e7e5fa713d3f3f9652b8ec6b3625dadc3c4fe853b9e895e.c2e4756c.png",e="/assets/cec7eaa819de42b0e4edb2d34fb620869f2dc683cd267a01f2aac3b4b6c04916.cec7eaa8.png",E="/assets/5e85f4618519c97bc3b613b719cdd5ab12815c69d32fa051ce53890a631dc62e.5e85f461.png";const A=JSON.parse('{"title":"\u2B1BExpress+\u2B1CNode+\u{1F42C}MySQL","description":"","frontmatter":{},"headers":[{"level":2,"title":"1\u3001\u521B\u5EFA\u9879\u76EE","slug":"_1\u3001\u521B\u5EFA\u9879\u76EE"},{"level":3,"title":"\u6839\u76EE\u5F55\u521B\u5EFAapp.js","slug":"\u6839\u76EE\u5F55\u521B\u5EFAapp-js"},{"level":3,"title":"\u521B\u5EFA\u8DEF\u7531\u6587\u4EF6\u5939","slug":"\u521B\u5EFA\u8DEF\u7531\u6587\u4EF6\u5939"},{"level":2,"title":"2\u3001\u76EE\u5F55\u7ED3\u6784","slug":"_2\u3001\u76EE\u5F55\u7ED3\u6784"},{"level":2,"title":"3\u3001\u914D\u7F6E\u5E38\u7528\u4E2D\u95F4\u4EF6","slug":"_3\u3001\u914D\u7F6E\u5E38\u7528\u4E2D\u95F4\u4EF6"},{"level":3,"title":"\u8BF7\u6C42\u4E2D\u95F4\u4EF6","slug":"\u8BF7\u6C42\u4E2D\u95F4\u4EF6"},{"level":3,"title":"\u65E5\u5FD7\u8F93\u51FA","slug":"\u65E5\u5FD7\u8F93\u51FA"},{"level":3,"title":"\u4E3A\u5BA2\u6237\u7AEF\u63D0\u4F9B\u8DE8\u57DF\u8D44\u6E90\u8BF7\u6C42","slug":"\u4E3A\u5BA2\u6237\u7AEF\u63D0\u4F9B\u8DE8\u57DF\u8D44\u6E90\u8BF7\u6C42"},{"level":2,"title":"4\u3001\u8DEF\u7531\u6A21\u5757\u{1F447}","slug":"_4\u3001\u8DEF\u7531\u6A21\u5757\u{1F447}"},{"level":2,"title":"5\u3001controller\u3010\u63A7\u5236\u5668\u3011","slug":"_5\u3001controller\u3010\u63A7\u5236\u5668\u3011"},{"level":2,"title":"6\u3001\u9519\u8BEF\u5904\u7406\u{1F447}","slug":"_6\u3001\u9519\u8BEF\u5904\u7406\u{1F447}"},{"level":2,"title":"\u6570\u636E\u5E93\u8FDE\u63A5\u{1F447}","slug":"\u6570\u636E\u5E93\u8FDE\u63A5\u{1F447}"}],"relativePath":"BackEnd/Express/Express_Node_MySQL.md","lastUpdated":1657207500000}'),c={name:"BackEnd/Express/Express_Node_MySQL.md"},r=p(`<h1 id="\u2B1Bexpress-\u2B1Cnode-\u{1F42C}mysql" tabindex="-1">\u2B1BExpress+\u2B1CNode+\u{1F42C}MySQL <a class="header-anchor" href="#\u2B1Bexpress-\u2B1Cnode-\u{1F42C}mysql" aria-hidden="true">#</a></h1><h2 id="_1\u3001\u521B\u5EFA\u9879\u76EE" tabindex="-1">1\u3001\u521B\u5EFA\u9879\u76EE <a class="header-anchor" href="#_1\u3001\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#D8DEE9FF;">npm init -y</span></span>
<span class="line"><span style="color:#D8DEE9FF;">npm i express</span></span>
<span class="line"><span style="color:#D8DEE9FF;">npm i nodemon -D</span></span>
<span class="line"><span style="color:#D8DEE9FF;">npm i mysql2</span></span>
<span class="line"><span style="color:#D8DEE9FF;">npm i jsonwebtoken</span></span>
<span class="line"><span style="color:#D8DEE9FF;">npm i express-jwt</span></span>
<span class="line"></span></code></pre></div><p>\u6839\u76EE\u5F55\u6DFB\u52A0nodemon.json</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">watch</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:[</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">./src/**/*.*</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#616E88;">//package.json</span></span>
<span class="line"><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">scripts</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">: </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">dev</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">nodemon src/app</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6839\u76EE\u5F55\u521B\u5EFAapp-js" tabindex="-1">\u6839\u76EE\u5F55\u521B\u5EFAapp.js <a class="header-anchor" href="#\u6839\u76EE\u5F55\u521B\u5EFAapp-js" aria-hidden="true">#</a></h3><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">express</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">require</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">express</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">app</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">express</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u521B\u5EFA\u8DEF\u7531\u6587\u4EF6\u5939" tabindex="-1">\u521B\u5EFA\u8DEF\u7531\u6587\u4EF6\u5939 <a class="header-anchor" href="#\u521B\u5EFA\u8DEF\u7531\u6587\u4EF6\u5939" aria-hidden="true">#</a></h3><p>router/index.js</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#616E88;">//index.js</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">express</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">require</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">express</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">router</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">express</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">Router</span><span style="color:#D8DEE9FF;">()</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">mysql</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">require</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">mysql2</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">jwt</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">require</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">jsonwebtoken</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;"> expressjwt</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">expressJWT</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">require</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">express-jwt</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u521B\u5EFA\u6570\u636E\u5E93\u3010\u8FDE\u63A5\u3011/\u3010\u5173\u95ED\u3011</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u7528\u6237\u6CE8\u518C</span></span>
<span class="line"><span style="color:#D8DEE9;">router</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">post</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">/register</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">next</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">try</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">send</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">post /users/login</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">catch</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">err</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">next</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">err</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u7528\u6237\u767B\u5F55</span></span>
<span class="line"><span style="color:#D8DEE9;">router</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">post</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">/login</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">next</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">try</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">send</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">post /users/login</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">catch</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">err</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">next</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">err</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u83B7\u53D6todolist</span></span>
<span class="line"><span style="color:#616E88;">//\u66F4\u65B0todolist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u83B7\u53D6MarkBook</span></span>
<span class="line"><span style="color:#616E88;">//\u66F4\u65B0MarkBook</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8FBCBB;">module</span><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">exports</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">router</span></span>
<span class="line"></span></code></pre></div><h2 id="_2\u3001\u76EE\u5F55\u7ED3\u6784" tabindex="-1">2\u3001\u76EE\u5F55\u7ED3\u6784 <a class="header-anchor" href="#_2\u3001\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a></h2><p>\u521B\u5EFAconfig/config.default.js\u3010\u914D\u7F6E\u6587\u4EF6\u3011</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#616E88;">/**</span></span>
<span class="line"><span style="color:#616E88;">* \u9ED8\u8BA4\u914D\u7F6E</span></span>
<span class="line"><span style="color:#616E88;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8FBCBB;">module</span><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">exports</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">{}</span><span style="color:#D8DEE9FF;">							</span></span>
<span class="line"></span></code></pre></div><p>controller \u3010\u89E3\u6790\u7528\u6237\u7684\u8F93\u5165\uFF0C\u5904\u7406\u540E\u53CD\u5E94\u76F8\u5E94\u7684\u7ED3\u679C\u3011\u3010\u63A7\u5236\u5668\u3011 model\u3010\u6570\u636E\u6301\u4E45\u5C42\u3011 middleware\u3010\u975E\u8DEF\u7531\u7684\u4E2D\u95F4\u4EF6\u3011 router\u3010\u8DEF\u7531\u3011 util\u3010\u5DE5\u5177\u6A21\u5757\u3011 app.js\u3010\u542F\u52A8\u6587\u4EF6\u3011</p><h2 id="_3\u3001\u914D\u7F6E\u5E38\u7528\u4E2D\u95F4\u4EF6" tabindex="-1">3\u3001\u914D\u7F6E\u5E38\u7528\u4E2D\u95F4\u4EF6 <a class="header-anchor" href="#_3\u3001\u914D\u7F6E\u5E38\u7528\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a></h2><h3 id="\u8BF7\u6C42\u4E2D\u95F4\u4EF6" tabindex="-1">\u8BF7\u6C42\u4E2D\u95F4\u4EF6 <a class="header-anchor" href="#\u8BF7\u6C42\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a></h3><ul><li>express.json()</li><li>express.urlencoded()</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">use</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">express</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">json</span><span style="color:#D8DEE9FF;">())</span></span>
<span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">use</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">express</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">urlencoded</span><span style="color:#D8DEE9FF;">())</span></span>
<span class="line"></span></code></pre></div><h3 id="\u65E5\u5FD7\u8F93\u51FA" tabindex="-1">\u65E5\u5FD7\u8F93\u51FA <a class="header-anchor" href="#\u65E5\u5FD7\u8F93\u51FA" aria-hidden="true">#</a></h3><ul><li>morgan()\u3010\u7B2C\u4E09\u65B9 \u9700\u8981\u5B89\u88C5\u3011\u3010\u653E\u5728\u9884\u5904\u7406\u5904\u3011</li><li>npm i morgan</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">use</span><span style="color:#D8DEE9FF;">(</span><span style="color:#88C0D0;">morgan</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">dev</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">))</span><span style="color:#616E88;">//\u5F00\u53D1\u4E00\u822C\u4F7F\u7528dev</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4E3A\u5BA2\u6237\u7AEF\u63D0\u4F9B\u8DE8\u57DF\u8D44\u6E90\u8BF7\u6C42" tabindex="-1">\u4E3A\u5BA2\u6237\u7AEF\u63D0\u4F9B\u8DE8\u57DF\u8D44\u6E90\u8BF7\u6C42 <a class="header-anchor" href="#\u4E3A\u5BA2\u6237\u7AEF\u63D0\u4F9B\u8DE8\u57DF\u8D44\u6E90\u8BF7\u6C42" aria-hidden="true">#</a></h3><ul><li>cors()\u3010\u4E5F\u9700\u8981\u5B89\u88C5\u3011\u3010\u653E\u5728\u9884\u5904\u7406\u5904\u3011</li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#D8DEE9FF;">npm i cors</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">use</span><span style="color:#D8DEE9FF;">(</span><span style="color:#88C0D0;">cors</span><span style="color:#D8DEE9FF;">())</span></span>
<span class="line"></span></code></pre></div><h2 id="_4\u3001\u8DEF\u7531\u6A21\u5757\u{1F447}" tabindex="-1">4\u3001\u8DEF\u7531\u6A21\u5757\u{1F447} <a class="header-anchor" href="#_4\u3001\u8DEF\u7531\u6A21\u5757\u{1F447}" aria-hidden="true">#</a></h2><p><img src="`+l+`" alt="\u56FE 17"></p><p>\u628A\u5176\u4ED6\u6A21\u5757\u6302\u8F7D\u5728index.js \u4E3B\u8DEF\u7531\u4E2D\uFF01</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#616E88;">//index.js</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">express</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">require</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">express</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">router</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">express</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">Router</span><span style="color:#D8DEE9FF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u7528\u6237\u76F8\u5173\u8DEF\u7531</span></span>
<span class="line"><span style="color:#D8DEE9;">router</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">use</span><span style="color:#D8DEE9FF;">(</span><span style="color:#88C0D0;">require</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">./user</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u6587\u7AE0\u76F8\u5173\u8DEF\u7531</span></span>
<span class="line"><span style="color:#D8DEE9;">router</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">use</span><span style="color:#D8DEE9FF;">(</span><span style="color:#88C0D0;">require</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">./profiles</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8FBCBB;">module</span><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">exports</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">router</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#616E88;">//user.js</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">express</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">require</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">express</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">router</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">express</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">Router</span><span style="color:#D8DEE9FF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u7528\u6237\u767B\u5F55</span></span>
<span class="line"><span style="color:#D8DEE9;">router</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">post</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">/users/login</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">async</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">next</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">try</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">send</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">post /users/login</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">catch</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">err</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">next</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">err</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8FBCBB;">module</span><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">exports</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">router</span></span>
<span class="line"></span></code></pre></div><h2 id="_5\u3001controller\u3010\u63A7\u5236\u5668\u3011" tabindex="-1">5\u3001controller\u3010\u63A7\u5236\u5668\u3011 <a class="header-anchor" href="#_5\u3001controller\u3010\u63A7\u5236\u5668\u3011" aria-hidden="true">#</a></h2><p>\u4E00\u822C\u6765\u8BF4 \u5728router\u63A7\u5236\u63A5\u53E3\u7684\u8DEF\u7531\uFF0C\u800C\u5BF9\u5E94\u7684\u63A5\u53E3\u6709\u5BF9\u5E94\u7684\u529F\u80FD\uFF0C\u4F46\u662F\u5982\u679C\u529F\u80FD\u9700\u8981\u5199\u5F88\u591A\u4EE3\u7801\uFF0C\u5168\u90E8\u529F\u80FD\u90FD\u6324\u5728\u4E00\u4E2A\u8DEF\u7531\u6587\u4EF6\u91CC\u5C31\u4E0D\u662F\u5F88\u597D\u7EF4\u62A4\uFF01 \u6240\u4EE5\u5728\u8DEF\u7531\u6587\u4EF6\u91CC\u5C31\u53EA\u7406\u8DEF\u7531\uFF0C\u628A\u8DEF\u7531\u5230\u540E\u9700\u8981\u5904\u7406\u7684\u65B9\u6CD5\u518D\u5355\u72EC\u653E\u5230\u53E6\u4E00\u4E2A\u6587\u4EF6\u5939\u3010controller\u3011\u91CC <img src="`+o+'" alt="\u56FE 19"><br><img src="'+e+`" alt="\u56FE 20"></p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#616E88;">//\u7528\u6237\u767B\u5F55</span></span>
<span class="line"><span style="color:#8FBCBB;">exports</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">login</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">async</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">next</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">try</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">send</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">post /users/login</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">catch</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">err</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">next</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">err</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u7528\u6237\u6CE8\u518C</span></span>
<span class="line"><span style="color:#8FBCBB;">exports</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">register</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">async</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">next</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">try</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">send</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">get /users</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">catch</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">err</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">next</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">err</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="_6\u3001\u9519\u8BEF\u5904\u7406\u{1F447}" tabindex="-1">6\u3001\u9519\u8BEF\u5904\u7406\u{1F447} <a class="header-anchor" href="#_6\u3001\u9519\u8BEF\u5904\u7406\u{1F447}" aria-hidden="true">#</a></h2><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#616E88;">//5\u3001\u9519\u8BEF\u5904\u7406</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">errorHandler</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">require</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">../middleware/error-handler</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">use</span><span style="color:#D8DEE9FF;">(</span><span style="color:#88C0D0;">errorHandler</span><span style="color:#D8DEE9FF;">())</span></span>
<span class="line"></span></code></pre></div><p><img src="`+E+`" alt="\u56FE 21"></p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#8FBCBB;">module</span><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">exports</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">err</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">next</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">		</span><span style="color:#616E88;">//token\u89E3\u6790\u5931\u8D25\u5BFC\u81F4\u7684\u9519\u8BEF</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">err</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">name</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">===</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">UnauthorizedError</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			</span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">send</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">status</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">401</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">message</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">\u65E0\u6548\u7684token</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span></span>
<span class="line"><span style="color:#ECEFF4;">		</span><span style="color:#616E88;">//\u5176\u4ED6\u539F\u56E0\u5BFC\u81F4\u7684\u9519\u8BEF</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">send</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">status</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">500</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">message</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">\u672A\u77E5\u9519\u8BEF</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6570\u636E\u5E93\u8FDE\u63A5\u{1F447}" tabindex="-1">\u6570\u636E\u5E93\u8FDE\u63A5\u{1F447} <a class="header-anchor" href="#\u6570\u636E\u5E93\u8FDE\u63A5\u{1F447}" aria-hidden="true">#</a></h2><ol><li>\u6570\u636E\u5E93\u8FDE\u63A5</li><li>\u8FDE\u63A5\u5931\u8D25</li><li>\u8FDE\u63A5\u6210\u529F</li><li>\u521B\u5EFA\u4E00\u4E2A\u6A21\u578B</li></ol>`,40),t=[r];function F(y,D,C,i,d,u){return a(),n("div",null,t)}var g=s(c,[["render",F]]);export{A as __pageData,g as default};