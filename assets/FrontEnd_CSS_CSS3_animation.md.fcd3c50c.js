import{_ as s,c as a,o as n,a as l}from"./app.8221f405.js";const d=JSON.parse('{"title":"\u{1F7E5} CSS3 \u52A8\u753B","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5173\u952E\u5E27","slug":"\u5173\u952E\u5E27"},{"level":3,"title":"\u901F\u5EA6\u66F2\u7EBF","slug":"\u901F\u5EA6\u66F2\u7EBF"},{"level":3,"title":"\u662F\u5426\u8F6E\u6D41\u53CD\u5411\u64AD\u653E","slug":"\u662F\u5426\u8F6E\u6D41\u53CD\u5411\u64AD\u653E"},{"level":3,"title":"\u64AD\u653E\u72B6\u6001","slug":"\u64AD\u653E\u72B6\u6001"},{"level":3,"title":"\u64AD\u653E\u5B8C\u52A8\u753B\u540E\u7684\u72B6\u6001","slug":"\u64AD\u653E\u5B8C\u52A8\u753B\u540E\u7684\u72B6\u6001"}],"relativePath":"FrontEnd/CSS/CSS3_animation.md","lastUpdated":1657122809000}'),p={name:"FrontEnd/CSS/CSS3_animation.md"},o=l(`<h1 id="\u{1F7E5}-css3-\u52A8\u753B" tabindex="-1">\u{1F7E5} CSS3 \u52A8\u753B <a class="header-anchor" href="#\u{1F7E5}-css3-\u52A8\u753B" aria-hidden="true">#</a></h1><ul><li>animation:[\u540D\u5B57] [\u65F6\u95F4] [\u901F\u5EA6\u66F2\u7EBF] [\u5EF6\u8FDF\u65F6\u95F4] [\u6B21\u6570/infinite] [\u662F\u5426\u8F6E\u6D41\u53CD\u5411\u64AD\u653E]</li><li>animation-name:[\u540D\u5B57]</li><li>animation-duration: [\u65F6\u95F4]</li><li>animation-timing-function: [\u901F\u5EA6\u66F2\u7EBF]</li><li>animation-delay:[\u5EF6\u8FDF\u65F6\u95F4]</li><li>animation-iteration-count:[\u6B21\u6570/infinite]</li><li>animation-direction:[\u662F\u5426\u8F6E\u6D41\u53CD\u5411\u64AD\u653E]</li></ul><h3 id="\u5173\u952E\u5E27" tabindex="-1">\u5173\u952E\u5E27 <a class="header-anchor" href="#\u5173\u952E\u5E27" aria-hidden="true">#</a></h3><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">@Keyframes</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">xxg</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  0%</span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9;">background</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;">red;</span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  100%</span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9;">background</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;">green;</span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#81A1C1;">div</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">hover</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">animation</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">xxg </span><span style="color:#B48EAD;">5</span><span style="color:#81A1C1;">s</span><span style="color:#88C0D0;"> </span><span style="color:#81A1C1;">ease-out</span><span style="color:#88C0D0;"> </span><span style="color:#B48EAD;">.2</span><span style="color:#81A1C1;">s;</span><span style="color:#D8DEE9FF;"> //</span><span style="color:#D8DEE9;">animation</span><span style="color:#D8DEE9FF;"> \u662F\u6240\u6709\u529F\u80FD\u7B80\u5199</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u901F\u5EA6\u66F2\u7EBF" tabindex="-1">\u901F\u5EA6\u66F2\u7EBF <a class="header-anchor" href="#\u901F\u5EA6\u66F2\u7EBF" aria-hidden="true">#</a></h3><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">animation-tinmin-function</span><span style="color:#D8DEE9FF;">:  </span><span style="color:#ECEFF4;">[</span><span style="color:#8FBCBB;">ease</span><span style="color:#ECEFF4;">],</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                            </span><span style="color:#ECEFF4;">[</span><span style="color:#8FBCBB;">linear</span><span style="color:#ECEFF4;">],</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                            </span><span style="color:#ECEFF4;">[</span><span style="color:#8FBCBB;">ease-in</span><span style="color:#ECEFF4;">],</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                            </span><span style="color:#ECEFF4;">[</span><span style="color:#8FBCBB;">ease-out</span><span style="color:#ECEFF4;">],</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                            </span><span style="color:#ECEFF4;">[</span><span style="color:#8FBCBB;">ease-in-out</span><span style="color:#ECEFF4;">]</span><span style="color:#D8DEE9FF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u662F\u5426\u8F6E\u6D41\u53CD\u5411\u64AD\u653E" tabindex="-1">\u662F\u5426\u8F6E\u6D41\u53CD\u5411\u64AD\u653E <a class="header-anchor" href="#\u662F\u5426\u8F6E\u6D41\u53CD\u5411\u64AD\u653E" aria-hidden="true">#</a></h3><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">animation-direction</span><span style="color:#D8DEE9FF;">:</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">normal </span><span style="color:#8FBCBB;">\u9ED8\u8BA4</span><span style="color:#ECEFF4;">],</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                    </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">reverse </span><span style="color:#8FBCBB;">\u53CD\u5411\u64AD\u653E</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                    </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">alternate \u7B2C\u5076\u6570\u6B21\u5411\u524D\u64AD\u653E </span><span style="color:#8FBCBB;">\u7B2C\u5947\u6570\u6B21\u53CD\u65B9\u5411\u64AD\u653E</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                    </span><span style="color:#ECEFF4;">[</span><span style="color:#8FBCBB;">alternate-reverse</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="\u64AD\u653E\u72B6\u6001" tabindex="-1">\u64AD\u653E\u72B6\u6001 <a class="header-anchor" href="#\u64AD\u653E\u72B6\u6001" aria-hidden="true">#</a></h3><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">animation-play-state</span><span style="color:#D8DEE9FF;">:</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">running </span><span style="color:#8FBCBB;">\u64AD\u653E</span><span style="color:#ECEFF4;">],[</span><span style="color:#D8DEE9FF;">paused </span><span style="color:#8FBCBB;">\u505C\u6B62</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="\u64AD\u653E\u5B8C\u52A8\u753B\u540E\u7684\u72B6\u6001" tabindex="-1">\u64AD\u653E\u5B8C\u52A8\u753B\u540E\u7684\u72B6\u6001 <a class="header-anchor" href="#\u64AD\u653E\u5B8C\u52A8\u753B\u540E\u7684\u72B6\u6001" aria-hidden="true">#</a></h3><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">animation-fill-mode</span><span style="color:#D8DEE9FF;">:</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">none </span><span style="color:#8FBCBB;">\u9ED8\u8BA4</span><span style="color:#ECEFF4;">],</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                    </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">forwards\u5173\u952E\u5E27\u7684\u4F4D\u7F6E,</span><span style="color:#8FBCBB;">\u7ED3\u675F\u540E\u7684\u72B6\u6001\u4F5C\u4E3A\u6837\u5F0F</span><span style="color:#ECEFF4;">],</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                    </span><span style="color:#ECEFF4;">[</span><span style="color:#8FBCBB;">backwards\u5F00\u59CB\u524D\u9A6C\u4E0A\u7528\u4E0A\u521D\u59CB\u5E27</span><span style="color:#ECEFF4;">],</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                    </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">both\u5305\u542B2,3</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,12),e=[o];function c(t,r,F,E,i,y){return n(),a("div",null,e)}var D=s(p,[["render",c]]);export{d as __pageData,D as default};
