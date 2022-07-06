import{_ as s,c as n,o as a,a as l}from"./app.8221f405.js";const i=JSON.parse('{"title":"\u{1F7E9} \u76D1\u542C Watch","description":"","frontmatter":{},"headers":[{"level":3,"title":"handler\u5C5E\u6027","slug":"handler\u5C5E\u6027"},{"level":3,"title":"immediate\u5C5E\u6027\uFF08\u7ACB\u9A6C\u6267\u884C\u4E00\u6B21\u5148\uFF09","slug":"immediate\u5C5E\u6027\uFF08\u7ACB\u9A6C\u6267\u884C\u4E00\u6B21\u5148\uFF09"},{"level":3,"title":"deep\u5C5E\u6027\uFF08\u6DF1\u5EA6\u76D1\u542C\uFF0C\u76D1\u542C\u5BF9\u8C61\u91CC\u9762\u7684\u5C5E\u6027\uFF09","slug":"deep\u5C5E\u6027\uFF08\u6DF1\u5EA6\u76D1\u542C\uFF0C\u76D1\u542C\u5BF9\u8C61\u91CC\u9762\u7684\u5C5E\u6027\uFF09"},{"level":2,"title":"","slug":""}],"relativePath":"FrontEnd/Vue/Vue2_watch.md","lastUpdated":1657122809000}'),p={name:"FrontEnd/Vue/Vue2_watch.md"},o=l(`<h1 id="\u{1F7E9}-\u76D1\u542C-watch" tabindex="-1">\u{1F7E9} \u76D1\u542C Watch <a class="header-anchor" href="#\u{1F7E9}-\u76D1\u542C-watch" aria-hidden="true">#</a></h1><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#88C0D0;">data</span><span style="color:#D8DEE9FF;">() </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">count</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#D8DEE9FF;">watch</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  count</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">newVal</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">oldVal</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">    </span><span style="color:#616E88;">// \u5177\u4F53\u5904\u7406\u903B\u8F91</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">product.name</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">: </span><span style="color:#81A1C1;">function</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">newValue</span><span style="color:#ECEFF4;">){</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">newValue</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="handler\u5C5E\u6027" tabindex="-1">handler\u5C5E\u6027 <a class="header-anchor" href="#handler\u5C5E\u6027" aria-hidden="true">#</a></h3><p>watch \u65B9\u6CD5\u5176\u5B9E\u9ED8\u8BA4\u5199\u7684\u5C31\u662F\u8FD9\u4E2Ahandler\u3002<br> \u5F53 name \u53D1\u751F\u6539\u53D8\u65F6, handler \u65B9\u6CD5\u5C31\u4F1A\u6267\u884C\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#D8DEE9FF;">watch</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  name</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">handler</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">newVal</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">oldVal</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">newVal</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="immediate\u5C5E\u6027\uFF08\u7ACB\u9A6C\u6267\u884C\u4E00\u6B21\u5148\uFF09" tabindex="-1">immediate\u5C5E\u6027\uFF08\u7ACB\u9A6C\u6267\u884C\u4E00\u6B21\u5148\uFF09 <a class="header-anchor" href="#immediate\u5C5E\u6027\uFF08\u7ACB\u9A6C\u6267\u884C\u4E00\u6B21\u5148\uFF09" aria-hidden="true">#</a></h3><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#D8DEE9FF;">watch</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  name</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">handler</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">newVal</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">oldVal</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">newVal</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    immediate</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">true</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="deep\u5C5E\u6027\uFF08\u6DF1\u5EA6\u76D1\u542C\uFF0C\u76D1\u542C\u5BF9\u8C61\u91CC\u9762\u7684\u5C5E\u6027\uFF09" tabindex="-1">deep\u5C5E\u6027\uFF08\u6DF1\u5EA6\u76D1\u542C\uFF0C\u76D1\u542C\u5BF9\u8C61\u91CC\u9762\u7684\u5C5E\u6027\uFF09 <a class="header-anchor" href="#deep\u5C5E\u6027\uFF08\u6DF1\u5EA6\u76D1\u542C\uFF0C\u76D1\u542C\u5BF9\u8C61\u91CC\u9762\u7684\u5C5E\u6027\uFF09" aria-hidden="true">#</a></h3><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">vm</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">Vue</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">el</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">#app</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">data</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">product</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#88C0D0;">name</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;&#39;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#88C0D0;">count</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;&#39;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#88C0D0;">title</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;&#39;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">watch</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">product.name</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">newValue</span><span style="color:#ECEFF4;">){</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">newValue</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">product.count</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">newValue</span><span style="color:#ECEFF4;">){</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">newValue</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">product.title</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">newValue</span><span style="color:#ECEFF4;">){</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">newValue</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span></code></pre></div><p>deep \u5C5E\u6027\u4EE3\u8868\u662F\u5426\u6DF1\u5EA6\u76D1\u542C\uFF0C\u9ED8\u8BA4\u503C\u662F false\u3002\u5F53\u8BBE\u7F6E\u4E3A true \u65F6\uFF0C\u4F1A\u5BF9\u5BF9\u8C61\u91CC\u9762\u7684\u6BCF\u4E2A\u5C5E\u6027\u8FDB\u884C\u4FA6\u542C\u3002</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">vm</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">Vue</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">el</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">#app</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">data</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">product</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#88C0D0;">name</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;&#39;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#88C0D0;">count</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;&#39;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#88C0D0;">title</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;&#39;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">watch</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">product</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#88C0D0;">handler</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">newVal</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">newVal</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#88C0D0;">deep</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">true</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,12),e=[o];function E(c,F,t,r,D,y){return a(),n("div",null,e)}var d=s(p,[["render",E]]);export{i as __pageData,d as default};
