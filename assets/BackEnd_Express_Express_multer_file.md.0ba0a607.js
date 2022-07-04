import{_ as s,c as a,o as n,a as l}from"./app.e883c7a7.js";var p="/assets/50194d74e111eb184143ace0b1ad27840cb723b80c84856debc810e777248efb.50194d74.png";const d=JSON.parse('{"title":"\u{1F5C2}\uFE0F multer \u4E0A\u4F20\u6587\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001multer\u662F\u4EC0\u4E48\uFF1F","slug":"\u4E00\u3001multer\u662F\u4EC0\u4E48\uFF1F"},{"level":2,"title":"\u5355\u56FE\u4E0A\u4F20","slug":"\u5355\u56FE\u4E0A\u4F20"},{"level":2,"title":"\u4FDD\u5B58\u56FE\u7247\u{1F447}","slug":"\u4FDD\u5B58\u56FE\u7247\u{1F447}"},{"level":3,"title":"\u56FE\u7247\u6253\u4E0D\u5F00,\u8981\u62FC\u63A5\u4FDD\u5B58\u8DEF\u5F84\uFF01\u{1F447}","slug":"\u56FE\u7247\u6253\u4E0D\u5F00-\u8981\u62FC\u63A5\u4FDD\u5B58\u8DEF\u5F84\uFF01\u{1F447}"},{"level":2,"title":"\u8865\u5145\uFF1A\u786E\u4FDD\u4E00\u4E2A\u7528\u6237\u53EA\u4F1A\u4FDD\u5B58\u4E00\u5F20\u5934\u50CF","slug":"\u8865\u5145\uFF1A\u786E\u4FDD\u4E00\u4E2A\u7528\u6237\u53EA\u4F1A\u4FDD\u5B58\u4E00\u5F20\u5934\u50CF"}],"relativePath":"BackEnd/Express/Express_multer_file.md","lastUpdated":1656978196000}'),o={name:"BackEnd/Express/Express_multer_file.md"},e=l(`<h1 id="\u{1F5C2}\uFE0F-multer-\u4E0A\u4F20\u6587\u4EF6" tabindex="-1">\u{1F5C2}\uFE0F multer \u4E0A\u4F20\u6587\u4EF6 <a class="header-anchor" href="#\u{1F5C2}\uFE0F-multer-\u4E0A\u4F20\u6587\u4EF6" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001multer\u662F\u4EC0\u4E48\uFF1F" tabindex="-1">\u4E00\u3001multer\u662F\u4EC0\u4E48\uFF1F <a class="header-anchor" href="#\u4E00\u3001multer\u662F\u4EC0\u4E48\uFF1F" aria-hidden="true">#</a></h2><p>multer\u662F\u4E00\u4E2A\u80FD\u66F4\u597D\u7684\u5904\u7406node.js\u670D\u52A1\u5668\u63A5\u6536\u7684\u6587\u4EF6\u4E0A\u4F20\u7684\u4E2D\u95F4\u4EF6\uFF0C\u86EE\u597D\u7528\u7684\u3002\u5176\u4E2D\u6587\u6587\u6863\u94FE\u63A5\u5982\u4E0B\uFF1A</p><blockquote><p>multer\u4E2D\u6587\u6587\u6863\uFF1A<a href="https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md" target="_blank" rel="noopener noreferrer">https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md</a></p></blockquote><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i multer</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u91CC\u662F\u6700\u7B80\u5355\u7684\u914D\u7F6E\uFF0C\u6307\u660E\u4E8C\u8FDB\u5236\u6587\u4EF6\u4FDD\u5B58\u4FDD\u5B58\u81F3\u3010\u6839\u76EE\u5F55\u4E0B\u7684uploads\u6587\u4EF6\u5939\u3011\u5185</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> multer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">multer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> upload </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">multer</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">dest</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">uploads/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5355\u56FE\u4E0A\u4F20" tabindex="-1">\u5355\u56FE\u4E0A\u4F20 <a class="header-anchor" href="#\u5355\u56FE\u4E0A\u4F20" aria-hidden="true">#</a></h2><ol><li>upload\u5C31\u662F\u4E0A\u6587\u7684multer\u7684\u914D\u7F6E\u5BF9\u8C61</li><li>single\u4E2D\u7684\u5B57\u7B26\u4E32\u8981\u5BF9\u5E94\u4E0A\u4F20input\u7684name \u6216\u8005\u662F\u5BF9\u5E94formdata\u7684\u952E\u540D</li></ol><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">post</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/uploadAvatar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> upload</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">single</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">avatar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">file</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">file</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u56FE\u7247\u6587\u4EF6\u7684\u4FDD\u5B58\u64CD\u4F5C\u5C06\u5728\u4E0B\u9762\u5199\u51FA</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4FDD\u5B58\u56FE\u7247\u{1F447}" tabindex="-1">\u4FDD\u5B58\u56FE\u7247\u{1F447} <a class="header-anchor" href="#\u4FDD\u5B58\u56FE\u7247\u{1F447}" aria-hidden="true">#</a></h2><p><img src="`+p+`" alt="\u56FE 15"></p><h3 id="\u56FE\u7247\u6253\u4E0D\u5F00-\u8981\u62FC\u63A5\u4FDD\u5B58\u8DEF\u5F84\uFF01\u{1F447}" tabindex="-1">\u56FE\u7247\u6253\u4E0D\u5F00,\u8981\u62FC\u63A5\u4FDD\u5B58\u8DEF\u5F84\uFF01\u{1F447} <a class="header-anchor" href="#\u56FE\u7247\u6253\u4E0D\u5F00-\u8981\u62FC\u63A5\u4FDD\u5B58\u8DEF\u5F84\uFF01\u{1F447}" aria-hidden="true">#</a></h3><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> multer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">multer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#676E95;font-style:italic;">//\u6587\u4EF6\u4E0A\u4F20</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> uploadImg </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">multer</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">dest</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">img/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">post</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/uploadAvatar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> uploadImg</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">single</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">avatar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">file</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">file</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#676E95;font-style:italic;">//\u3010\u4FDD\u5B58\u56FE\u7247\u5230\u6587\u4EF6\u5939\u3011</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">originalArr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">originalname</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">//\u5206\u5272[xx.png]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">type</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">originalArr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">originalArr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#676E95;font-style:italic;">//png \u6216\u8005jpg</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u8BFB\u53D6\u6587\u4EF6 ( path, &#39;utf-8&#39;(\u8FD9\u91CC\u4E0D\u5199\u89E3\u7801\u7C7B\u578B,\u76F4\u63A5\u628A\u56DE\u8C03\u51FD\u6570\u4E2D\u7684data\u5199\u5165\u65B0\u6587\u4EF6\u5373\u53EF), callback)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readFile</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">err</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u521B\u5EFA\u590D\u5236\u56FE\u7247\u7684\u8DEF\u5F84 \u4EE5\u53CA \u62FC\u63A5type\u5F62\u6210\u4E00\u4E2A\u5B8C\u6574\u7684\u56FE\u7247\u6587\u4EF6</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newPath</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">img/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">filename</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u5199\u5165\u590D\u5236\u7684\u56FE\u7247 (path, data, callback)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writeFile</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">newPath</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">error</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u628A\u8BFB\u53D6\u5230\u7684data\u5199\u5165</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">error</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u5220\u9664\u539Fuploads\u8DEF\u5F84\u4E0B\u7684\u56FE\u7247</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unlink</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">img/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">filename</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8865\u5145\uFF1A\u786E\u4FDD\u4E00\u4E2A\u7528\u6237\u53EA\u4F1A\u4FDD\u5B58\u4E00\u5F20\u5934\u50CF" tabindex="-1">\u8865\u5145\uFF1A\u786E\u4FDD\u4E00\u4E2A\u7528\u6237\u53EA\u4F1A\u4FDD\u5B58\u4E00\u5F20\u5934\u50CF <a class="header-anchor" href="#\u8865\u5145\uFF1A\u786E\u4FDD\u4E00\u4E2A\u7528\u6237\u53EA\u4F1A\u4FDD\u5B58\u4E00\u5F20\u5934\u50CF" aria-hidden="true">#</a></h2><p>\u6839\u636E\u524D\u9762\u7684\u60F3\u6CD5\uFF0C\u6BCF\u6B21\u7528\u6237\u4E0A\u4F20\u5C31\u5C06\u5934\u50CF\u8DEF\u5F84\u548Cid\u7ED1\u5B9A\uFF0C\u540C\u4E00\u7528\u6237\u518D\u6B21\u4E0A\u4F20\u65F6\u5C31\u5148\u6839\u636E\u524D\u4E00\u6B21\u7ED1\u5B9A\u7684\u5934\u50CF\u8DEF\u5F84\u5C06\u8BE5\u56FE\u7247\u5220\u9664\uFF0C\u518D\u5C06\u65B0\u5934\u50CF\u8DEF\u5F84\u7ED1\u5B9A\u5230\u5BF9\u5E94id\u3002\u4EE5\u6B64\u53CD\u590D\uFF0C\u4FDD\u8BC1\u670D\u52A1\u5668\u4E0A\u6BCF\u4E2A\u7528\u6237\u53EA\u4F1A\u4FDD\u5B58\u4E00\u5F20\u5934\u50CF\u56FE\u7247\u3002</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u7ED9 \u5934\u50CF\u56FE\u7247\u53D6\u540D\u5B57\uFF01</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,17),t=[e];function r(c,y,F,D,A,C){return n(),a("div",null,t)}var u=s(o,[["render",r]]);export{d as __pageData,u as default};
