import{_ as s,c as n,o as a,a as l}from"./app.8221f405.js";const C=JSON.parse('{"title":"\u{1F7E6} \u5185\u7F6E\u5BF9\u8C61","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/TypeScript/TS_objects.md","lastUpdated":1657122809000}'),p={name:"FrontEnd/TypeScript/TS_objects.md"},e=l(`<h1 id="\u{1F7E6}-\u5185\u7F6E\u5BF9\u8C61" tabindex="-1">\u{1F7E6} \u5185\u7F6E\u5BF9\u8C61 <a class="header-anchor" href="#\u{1F7E6}-\u5185\u7F6E\u5BF9\u8C61" aria-hidden="true">#</a></h1><p>\u8FD9\u4E2A\u5185\u7F6E\u5BF9\u8C61\uFF0C\u5C31\u662F\u524D\u9762\u90A3\u4E2A\u3010\u7C7B\u578B\u65AD\u8A00 as\u3011\u6709\u5C55\u793A\u7684</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">img</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">document</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">detElementById</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">image</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">) </span><span style="color:#81A1C1;">as</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">HTMLImageElement</span></span>
<span class="line"></span></code></pre></div><p><code>HTMLImageElement</code></p><p>\u56E0\u4E3A\u50CF\u8FD9\u79CD<code>\u5143\u7D20\u8282\u70B9</code>\u7684\u7C7B\u578B... \u53C8\u4E0D\u50CF<code>number\`\`string</code>\u8FD9\u79CD\u57FA\u7840\u7C7B\u578B\u597D\u5B9A\u4E49... \u5BF9\u4F10~</p><p>\u8FD9\u79CD\u5C31\u662F\u3010\u5185\u7F6E\u7684\u5BF9\u8C61\u3011<br> \u5B83\u4E00\u822C\u6709\u5206\uFF1A</p><ol><li>ECMAScript \u7684\u5185\u7F6E\u5BF9\u8C61 <code>Boolean</code> <code>Error</code> <code>Date</code> <code>RegExp</code></li><li>DOM \u548C BOM \u7684\u5185\u7F6E\u5BF9\u8C61 <code>Document</code> <code>HTMLElement</code> <code>Event</code> <code>NodeList</code></li><li>.....</li></ol><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#D8DEE9FF;">HTML 5 \u8303\u4F8B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">HTML 5 \u5FEB\u901F\u5BFC\u89C8 \u2013 \u5185\u5D4C\u5143\u7D20 </span><span style="color:#81A1C1;">&lt;img&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">HTML \u5143\u7D20\u5BF9\u8C61</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u6839\u5143\u7D20</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;html&gt;</span><span style="color:#D8DEE9FF;"> (HTMLHtmlElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u6587\u4EF6\u6570\u636E\u5143\u7D20</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;head&gt;</span><span style="color:#D8DEE9FF;"> (HTMLHeadElement)</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;title&gt;</span><span style="color:#D8DEE9FF;"> (HTMLTitleElement)</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;base&gt;</span><span style="color:#D8DEE9FF;"> (HTMLBaseElement)</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;link&gt;</span><span style="color:#D8DEE9FF;"> (HTMLLinkElement)</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;meta&gt;</span><span style="color:#D8DEE9FF;"> (HTMLMetaElement)</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;style&gt;</span><span style="color:#D8DEE9FF;"> (HTMLStyleElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">script&gt;</span><span style="color:#D8DEE9FF;"> (HTMLScriptElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">noscript&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u6587\u4EF6\u533A\u57DF\u5143\u7D20</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">body&gt;</span><span style="color:#D8DEE9FF;"> (HTMLBodyElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">section&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">nav&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">article&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">aside&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">h1&gt;</span><span style="color:#D8DEE9FF;"> &lt;</span><span style="color:#81A1C1;">h2&gt;</span><span style="color:#D8DEE9FF;"> &lt;</span><span style="color:#81A1C1;">h3&gt;</span><span style="color:#D8DEE9FF;"> &lt;</span><span style="color:#81A1C1;">h4&gt;</span><span style="color:#D8DEE9FF;"> &lt;</span><span style="color:#81A1C1;">h5&gt;</span><span style="color:#D8DEE9FF;"> &lt;</span><span style="color:#81A1C1;">h6&gt;</span><span style="color:#D8DEE9FF;"> (HTMLHeadingElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">hgroup&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">header&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">footer&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">address&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u7FA4\u7EC4\u5143\u7D20</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">p&gt;</span><span style="color:#D8DEE9FF;"> (HTMLParagraphElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">hr&gt;</span><span style="color:#D8DEE9FF;"> (HTMLHRElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">pre&gt;</span><span style="color:#D8DEE9FF;"> (HTMLPreElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">blockquote&gt;</span><span style="color:#D8DEE9FF;"> (HTMLQuoteElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">ol&gt;</span><span style="color:#D8DEE9FF;"> (HTMLOListElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">ul&gt;</span><span style="color:#D8DEE9FF;"> (HTMLUListElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">li&gt;</span><span style="color:#D8DEE9FF;"> (HTMLLIElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">dl&gt;</span><span style="color:#D8DEE9FF;"> (HTMLDListElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">dt&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">dd&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">figure&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">figcaption&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">div&gt;</span><span style="color:#D8DEE9FF;"> (HTMLDivElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u6587\u5B57\u5C42\u7EA7\u5143\u7D20</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">a&gt;</span><span style="color:#D8DEE9FF;"> (HTMLAnchorElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">em&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">strong&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">small&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">s&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">cite&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">q&gt;</span><span style="color:#D8DEE9FF;"> (HTMLQuoteElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">dfn&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">abbr&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">data&gt;</span><span style="color:#D8DEE9FF;"> (HTMLDataElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">time&gt;</span><span style="color:#D8DEE9FF;"> (HTMLTimeElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">code&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">var&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">samp&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">kbd&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">sub&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">sup&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">i&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">b&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">u&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">mark&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">ruby&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">rt&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">rp&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">bdi&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">bdo&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">span&gt;</span><span style="color:#D8DEE9FF;"> (HTMLSpanElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">br</span><span style="color:#D8DEE9FF;"> / </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> (HTMLBRElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">wbr&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u7F16\u4FEE\u8BB0\u5F55\u5143\u7D20</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">ins&gt;</span><span style="color:#D8DEE9FF;"> (HTMLModElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">del&gt;</span><span style="color:#D8DEE9FF;"> (HTMLModElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u5185\u5D4C\u5A92\u4F53\u5143\u7D20</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">img&gt;</span><span style="color:#D8DEE9FF;"> (HTMLImageElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">iframe&gt;</span><span style="color:#D8DEE9FF;"> (HTMLIFrameElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">embed&gt;</span><span style="color:#D8DEE9FF;"> (HTMLEmbedElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">object&gt;</span><span style="color:#D8DEE9FF;"> (HTMLObjectElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">param&gt;</span><span style="color:#D8DEE9FF;"> (HTMLParamElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">video&gt;</span><span style="color:#D8DEE9FF;"> (HTMLVideoElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">audio&gt;</span><span style="color:#D8DEE9FF;"> (HTMLAudioElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">source&gt;</span><span style="color:#D8DEE9FF;"> (HTMLSourceElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">track&gt;</span><span style="color:#D8DEE9FF;"> (HTMLTrackElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">canvas&gt;</span><span style="color:#D8DEE9FF;"> (HTMLCanvasElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D</span><span style="color:#81A1C1;">.</span><span style="color:#8FBCBB;">canvas</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.save()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.restore()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.scale()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.rotate()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.translate()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.transform()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.setTransform()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D</span><span style="color:#81A1C1;">.</span><span style="color:#8FBCBB;">globalAlpha</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D</span><span style="color:#81A1C1;">.</span><span style="color:#8FBCBB;">globalCompositeOperation</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D</span><span style="color:#81A1C1;">.</span><span style="color:#8FBCBB;">strokeStyle</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D</span><span style="color:#81A1C1;">.</span><span style="color:#8FBCBB;">fillStyle</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.createLinearGradient()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.createRadialGradient()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasGradient \u5BF9\u8C61</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasGradient.addColorStop()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.createPattern()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D</span><span style="color:#81A1C1;">.</span><span style="color:#8FBCBB;">lineWidth</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D</span><span style="color:#81A1C1;">.</span><span style="color:#8FBCBB;">lineCap</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D</span><span style="color:#81A1C1;">.</span><span style="color:#8FBCBB;">lineJoin</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D</span><span style="color:#81A1C1;">.</span><span style="color:#8FBCBB;">miterLimit</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D</span><span style="color:#81A1C1;">.</span><span style="color:#8FBCBB;">shadowOffsetX</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D</span><span style="color:#81A1C1;">.</span><span style="color:#8FBCBB;">shadowOffsetY</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D</span><span style="color:#81A1C1;">.</span><span style="color:#8FBCBB;">shadowBlur</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D</span><span style="color:#81A1C1;">.</span><span style="color:#8FBCBB;">shadowColor</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.clearRect()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.fillRect()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.strokeRect()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.beginPath()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.closePath()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.moveTo()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.lineTo()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.quadraticCurveTo()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.bezierCurveTo()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.arcTo()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.rect()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.arc()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.fill()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.stroke()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.drawSystemFocusRing()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.drawCustomFocusRing()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.scrollPathIntoView()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.clip()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.isPointInPath()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D</span><span style="color:#81A1C1;">.</span><span style="color:#8FBCBB;">font</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D</span><span style="color:#81A1C1;">.</span><span style="color:#8FBCBB;">textAlign</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D</span><span style="color:#81A1C1;">.</span><span style="color:#8FBCBB;">textBaseline</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.fillText()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.strokeText()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.measureText()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.drawImage()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.createImageData()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.getImageData()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">CanvasRenderingContext2D.putImageData()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">map&gt;</span><span style="color:#D8DEE9FF;"> (HTMLMapElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">area&gt;</span><span style="color:#D8DEE9FF;"> (HTMLAreaElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">applet&gt;</span><span style="color:#D8DEE9FF;"> (HTMLAppletElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u8868\u683C\u5143\u7D20</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">table&gt;</span><span style="color:#D8DEE9FF;"> (HTMLTableElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">caption&gt;</span><span style="color:#D8DEE9FF;"> (HTMLTableCaptionElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">colgroup&gt;</span><span style="color:#D8DEE9FF;"> (HTMLTableColElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">col&gt;</span><span style="color:#D8DEE9FF;"> (HTMLTableColElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">tbody&gt;</span><span style="color:#D8DEE9FF;"> (HTMLTableSectionElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">thead&gt;</span><span style="color:#D8DEE9FF;"> (HTMLTableSectionElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">tfoot&gt;</span><span style="color:#D8DEE9FF;"> (HTMLTableSectionElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">tr&gt;</span><span style="color:#D8DEE9FF;"> (HTMLTableRowElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">td&gt;</span><span style="color:#D8DEE9FF;"> (HTMLTableDataCellElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">th&gt;</span><span style="color:#D8DEE9FF;"> (HTMLTableHeaderCellElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u7A97\u4F53\u5143\u7D20</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">form&gt;</span><span style="color:#D8DEE9FF;"> (HTMLFormElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">fieldset&gt;</span><span style="color:#D8DEE9FF;"> (HTMLFieldSetElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">legend&gt;</span><span style="color:#D8DEE9FF;"> (HTMLLegendElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">label&gt;</span><span style="color:#D8DEE9FF;"> (HTMLLabelElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">input&gt;</span><span style="color:#D8DEE9FF;"> (HTMLInputElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">button&gt;</span><span style="color:#D8DEE9FF;"> (HTMLButtonElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">select&gt;</span><span style="color:#D8DEE9FF;"> (HTMLSelectElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">datalist&gt;</span><span style="color:#D8DEE9FF;"> (HTMLDataListElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">optgroup&gt;</span><span style="color:#D8DEE9FF;"> (HTMLOptGroupElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">option&gt;</span><span style="color:#D8DEE9FF;"> (HTMLOptionElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">textarea&gt;</span><span style="color:#D8DEE9FF;"> (HTMLTextAreaElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">keygen&gt;</span><span style="color:#D8DEE9FF;"> (HTMLKeygenElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">output&gt;</span><span style="color:#D8DEE9FF;"> (HTMLOutputElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">progress&gt;</span><span style="color:#D8DEE9FF;"> (HTMLProgressElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">meter&gt;</span><span style="color:#D8DEE9FF;"> (HTMLMeterElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u4EA4\u4E92\u5F0F\u5143\u7D20</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">details&gt;</span><span style="color:#D8DEE9FF;"> (HTMLDetailsElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">summary&gt;</span><span style="color:#D8DEE9FF;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">command&gt;</span><span style="color:#D8DEE9FF;"> (HTMLCommandElement)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">menu&gt;</span><span style="color:#D8DEE9FF;"> (HTMLMenuElement)</span></span>
<span class="line"></span></code></pre></div>`,8),o=[e];function t(c,E,D,r,F,y){return a(),n("div",null,o)}var g=s(p,[["render",t]]);export{C as __pageData,g as default};
