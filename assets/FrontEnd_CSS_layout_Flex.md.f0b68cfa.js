import{_ as n,c as s,o as e,a as l}from"./app.e883c7a7.js";const y=JSON.parse('{"title":"\u{1F7E5} \u300EFlex\u300F","description":"","frontmatter":{},"headers":[{"level":3,"title":"display \u5F00\u542F","slug":"display-\u5F00\u542F"},{"level":3,"title":"flex-direction \u4E3B\u8F74","slug":"flex-direction-\u4E3B\u8F74"},{"level":3,"title":"flex-wrap \u6362\u884C","slug":"flex-wrap-\u6362\u884C"},{"level":3,"title":"justify-content \u4E3B\u8F74\u65B9\u5411 - \u6392\u5217","slug":"justify-content-\u4E3B\u8F74\u65B9\u5411-\u6392\u5217"},{"level":3,"title":"align-items \u526F\u8F74\u65B9\u5411 - \u5BF9\u9F50","slug":"align-items-\u526F\u8F74\u65B9\u5411-\u5BF9\u9F50"},{"level":3,"title":"align-content \u526F\u8F74\u65B9\u5411 - \u6392\u5217","slug":"align-content-\u526F\u8F74\u65B9\u5411-\u6392\u5217"}],"relativePath":"FrontEnd/CSS/layout_Flex.md","lastUpdated":1656978196000}'),a={name:"FrontEnd/CSS/layout_Flex.md"},t=l(`<h1 id="\u{1F7E5}-\u300Eflex\u300F" tabindex="-1">\u{1F7E5} \u300EFlex\u300F <a class="header-anchor" href="#\u{1F7E5}-\u300Eflex\u300F" aria-hidden="true">#</a></h1><ul><li>Flex - \u5F39\u6027\u5E03\u5C40</li></ul><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">flex-direction</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> row\uFF08\u9ED8\u8BA4\u503C\uFF09 </span></span>
<span class="line"><span style="color:#A6ACCD;">                    row-reverse  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    column </span></span>
<span class="line"><span style="color:#A6ACCD;">                    column-reverse</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    flex-wrap:  nowrap\uFF08\u9ED8\u8BA4\u503C\uFF09 </span></span>
<span class="line"><span style="color:#A6ACCD;">                wrap </span></span>
<span class="line"><span style="color:#A6ACCD;">                wrap-reverse</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    justify-content:flex-start\uFF08\u9ED8\u8BA4\u503C\uFF09 </span></span>
<span class="line"><span style="color:#A6ACCD;">                    flex-end </span></span>
<span class="line"><span style="color:#A6ACCD;">                    center </span></span>
<span class="line"><span style="color:#A6ACCD;">                    space-between  </span></span>
<span class="line"><span style="color:#A6ACCD;">                    space-around </span></span>
<span class="line"><span style="color:#A6ACCD;">                    space-evenly</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    align-items:stretch\uFF08\u9ED8\u8BA4\u503C\uFF09 </span></span>
<span class="line"><span style="color:#A6ACCD;">                center  </span></span>
<span class="line"><span style="color:#A6ACCD;">                flex-end </span></span>
<span class="line"><span style="color:#A6ACCD;">                baseline </span></span>
<span class="line"><span style="color:#A6ACCD;">                flex-start</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    align-content:  stretch\uFF08\u9ED8\u8BA4\u503C\uFF09 </span></span>
<span class="line"><span style="color:#A6ACCD;">                    flex-start </span></span>
<span class="line"><span style="color:#A6ACCD;">                    center </span></span>
<span class="line"><span style="color:#A6ACCD;">                    flex-end </span></span>
<span class="line"><span style="color:#A6ACCD;">                    space-between </span></span>
<span class="line"><span style="color:#A6ACCD;">                    space-around </span></span>
<span class="line"><span style="color:#A6ACCD;">                    space-evenly</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="display-\u5F00\u542F" tabindex="-1">display \u5F00\u542F <a class="header-anchor" href="#display-\u5F00\u542F" aria-hidden="true">#</a></h3><ul><li><code>display:flex;</code></li></ul><h3 id="flex-direction-\u4E3B\u8F74" tabindex="-1">flex-direction \u4E3B\u8F74 <a class="header-anchor" href="#flex-direction-\u4E3B\u8F74" aria-hidden="true">#</a></h3><ul><li><code>flex-direction:row;</code> <strong>\u4ECE\u5DE6\u5230\u53F3\u4E3A\u4E3B\u8F74</strong></li><li><code>flex-direction:row-reverse;</code> <strong>\u4ECE\u53F3\u5230\u5DE6\u4E3A\u4E3B\u8F74</strong></li><li><code>flex-direction:column;</code> <strong>\u4ECE\u4E0A\u5230\u4E0B\u4E3A\u4E3B\u8F74</strong></li><li><code>flex-direction:column-reverse;</code> <strong>\u4ECE\u4E0B\u5230\u4E0A\u4E3A\u4E3B\u8F74</strong></li></ul><h3 id="flex-wrap-\u6362\u884C" tabindex="-1">flex-wrap \u6362\u884C <a class="header-anchor" href="#flex-wrap-\u6362\u884C" aria-hidden="true">#</a></h3><ul><li><code>flex-wrap:nowrap;</code> <strong>\u4E0D\u80FD\u6362\u884C</strong></li><li><code>flex-wrap:wrap;</code> <strong>\u80FD\u6362\u884C</strong></li><li><code>flex-wrap:wrap-reverse;</code> <strong>\u6362\u5230\u4E0A\u9762\u884C</strong></li></ul><h3 id="justify-content-\u4E3B\u8F74\u65B9\u5411-\u6392\u5217" tabindex="-1">justify-content \u4E3B\u8F74\u65B9\u5411 - \u6392\u5217 <a class="header-anchor" href="#justify-content-\u4E3B\u8F74\u65B9\u5411-\u6392\u5217" aria-hidden="true">#</a></h3><blockquote><p>\u8FD9\u91CC\u7684\u5DE6\u53F3 \u53EA\u662F\u5728 \u4E3B\u8F74\u662F\u6A2Arow\uFF0C\u5E76\u4E14 \u4ECE\u5DE6\u5230\u53F3\u7684\u60C5\u51B5\u3002</p></blockquote><ul><li><code>justify-content:flex-start;</code> <strong>\u524D\uFF08\u5DE6\uFF09</strong></li><li><code>justify-content:center;</code> <strong>\u4E2D</strong></li><li><code>justify-content:flex-end;</code> <strong>\u540E\uFF08\u53F3\uFF09</strong></li></ul><hr><ul><li><code>justify-content:space-between;</code> <strong>B-\u95F4\u8DDD\u76F8\u7B49\uFF0C\u672B\u7AEF\u4E3A0</strong></li><li><code>justify-content:space-around;</code> <strong>A-\u95F4\u8DDD\u76F8\u7B49\uFF0C\u672B\u7AEF\u4E3A\u95F4\u8DDD\u4E00\u534A</strong></li><li><code>justify-content:space-evenly;</code> <strong>E-\u95F4\u8DDD\u76F8\u7B49\uFF0C\u672B\u7AEF\u95F4\u8DDD\u76F8\u540C</strong></li></ul><h3 id="align-items-\u526F\u8F74\u65B9\u5411-\u5BF9\u9F50" tabindex="-1">align-items \u526F\u8F74\u65B9\u5411 - \u5BF9\u9F50 <a class="header-anchor" href="#align-items-\u526F\u8F74\u65B9\u5411-\u5BF9\u9F50" aria-hidden="true">#</a></h3><ul><li><code>align-items:stretch</code> <strong>\u9879\u76EE\u62C9\u4F38\u81F3\u586B\u6EE1\u884C\u9AD8</strong></li><li><code>align-items:flex-start</code> <strong>\u9879\u76EE\u9876\u90E8\u4E0E\u884C\u8D77\u70B9\u5BF9\u9F50</strong></li><li><code>align-items:center</code> <strong>\u9879\u76EE\u5728\u884C\u4E2D\u5C45\u4E2D\u5BF9\u9F50</strong></li><li><code>align-items:flex-end</code> <strong>\u9879\u76EE\u5E95\u90E8\u4E0E\u884C\u7EC8\u70B9\u5BF9\u9F50</strong></li><li><code>align-items:baseline</code> <strong>\u9879\u76EE\u7684\u7B2C\u4E00\u884C\u6587\u5B57\u7684\u57FA\u7EBF\u5BF9\u9F50</strong></li></ul><h3 id="align-content-\u526F\u8F74\u65B9\u5411-\u6392\u5217" tabindex="-1">align-content \u526F\u8F74\u65B9\u5411 - \u6392\u5217 <a class="header-anchor" href="#align-content-\u526F\u8F74\u65B9\u5411-\u6392\u5217" aria-hidden="true">#</a></h3><blockquote><p>align-content\u4E0Ealign-items\u7684\u533A\u522B\u5728\u4E8E content\u662F\u9488\u5BF9\u5185\u5BB9\u6846\u91CC\u6574\u4F53\u7684\u6392\u5217\u5BF9\u9F50\uFF0C\u800Citems\u662F\u4E00\u6392\u4E2D\u6BCF\u4E2A\u4E4B\u95F4\u8BE5\u600E\u4E48\u5BF9\u9F50\u7684\u95EE\u9898\u3002</p></blockquote><ul><li><code>align-content:stretch</code> <strong>\u5F53\u672A\u8BBE\u7F6E\u9879\u76EE\u5C3A\u5BF8\uFF0C\u5C06\u5404\u884C\u4E2D\u7684\u9879\u76EE\u62C9\u4F38\u81F3\u586B\u6EE1\u4EA4\u53C9\u8F74\u3002\u5F53\u8BBE\u7F6E\u4E86\u9879\u76EE\u5C3A\u5BF8\uFF0C\u9879\u76EE\u5C3A\u5BF8\u4E0D\u53D8\uFF0C\u9879\u76EE\u884C\u62C9\u4F38\u81F3\u586B\u6EE1\u4EA4\u53C9\u8F74</strong></li><li><code>align-content:flex-start</code> <strong>\u9760\u4E0A\u65B9</strong></li><li><code>align-content:center</code> <strong>\u5C45\u4E2D\uFF0C\u4E0A\u4E0B\u95F4\u8DDD\u76F8\u540C</strong></li><li><code>align-content:flex-end</code> <strong>\u9760\u4E0B\u65B9</strong></li></ul><hr><blockquote><p>\u8FD9\u4E2A\u548Cjustify-content\u4E2D\u662F\u4E00\u6837\u7684 \u53EA\u4E0D\u8FC7\u7531\u4E3B\u8F74\u53D8\u6210\u526F\u8F74</p></blockquote><ul><li><code>align-content:flex-between</code> <strong>B-\u95F4\u8DDD\u76F8\u7B49\uFF0C\u672B\u7AEF\u4E3A0</strong></li><li><code>align-content:flex-around</code> <strong>A-\u95F4\u8DDD\u76F8\u7B49\uFF0C\u672B\u7AEF\u4E3A\u95F4\u8DDD\u4E00\u534A</strong></li><li><code>align-content:flex-evenly</code> <strong>E-\u95F4\u8DDD\u76F8\u7B49\uFF0C\u672B\u7AEF\u95F4\u8DDD\u76F8\u540C</strong></li></ul>`,22),o=[t];function c(i,r,p,d,g,u){return e(),s("div",null,o)}var C=n(a,[["render",c]]);export{y as __pageData,C as default};
