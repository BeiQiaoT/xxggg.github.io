import{_ as s,c as n,o as a,a as l}from"./app.e883c7a7.js";const i=JSON.parse('{"title":"\u{1F7E6} \u5185\u7F6E\u5BF9\u8C61","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/TypeScript/TS_objects.md","lastUpdated":1656978196000}'),p={name:"FrontEnd/TypeScript/TS_objects.md"},e=l(`<h1 id="\u{1F7E6}-\u5185\u7F6E\u5BF9\u8C61" tabindex="-1">\u{1F7E6} \u5185\u7F6E\u5BF9\u8C61 <a class="header-anchor" href="#\u{1F7E6}-\u5185\u7F6E\u5BF9\u8C61" aria-hidden="true">#</a></h1><p>\u8FD9\u4E2A\u5185\u7F6E\u5BF9\u8C61\uFF0C\u5C31\u662F\u524D\u9762\u90A3\u4E2A\u3010\u7C7B\u578B\u65AD\u8A00 as\u3011\u6709\u5C55\u793A\u7684</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> img </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">detElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">image</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HTMLImageElement</span></span>
<span class="line"></span></code></pre></div><p><code>HTMLImageElement</code></p><p>\u56E0\u4E3A\u50CF\u8FD9\u79CD<code>\u5143\u7D20\u8282\u70B9</code>\u7684\u7C7B\u578B... \u53C8\u4E0D\u50CF<code>number\`\`string</code>... \u5BF9\u4F10~</p><p>\u8FD9\u79CD\u5C31\u662F\u3010\u5185\u7F6E\u7684\u5BF9\u8C61\u3011<br> \u5B83\u4E00\u822C\u6709\u5206\uFF1A</p><ol><li>ECMAScript \u7684\u5185\u7F6E\u5BF9\u8C61 <code>Boolean</code> <code>Error</code> <code>Date</code> <code>RegExp</code></li><li>DOM \u548C BOM \u7684\u5185\u7F6E\u5BF9\u8C61 <code>Document</code> <code>HTMLElement</code> <code>Event</code> <code>NodeList</code></li></ol><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">HTML 5 \u8303\u4F8B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">HTML 5 \u5FEB\u901F\u5BFC\u89C8 \u2013 \u5185\u5D4C\u5143\u7D20 </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">HTML \u5143\u7D20\u5BF9\u8C61</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u6839\u5143\u7D20</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLHtmlElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6587\u4EF6\u6570\u636E\u5143\u7D20</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLHeadElement)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLTitleElement)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">base</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLBaseElement)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLLinkElement)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLMetaElement)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLStyleElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">script</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLScriptElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">noscript</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6587\u4EF6\u533A\u57DF\u5143\u7D20</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">body</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLBodyElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">section</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">nav</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">article</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">aside</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> &lt;</span><span style="color:#FFCB6B;">h2</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> &lt;</span><span style="color:#FFCB6B;">h3</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> &lt;</span><span style="color:#FFCB6B;">h4</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> &lt;</span><span style="color:#FFCB6B;">h5</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> &lt;</span><span style="color:#FFCB6B;">h6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLHeadingElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">hgroup</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">header</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">footer</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">address</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7FA4\u7EC4\u5143\u7D20</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLParagraphElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">hr</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLHRElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">pre</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLPreElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">blockquote</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLQuoteElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">ol</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLOListElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">ul</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLUListElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLLIElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">dl</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLDListElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">dt</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">dd</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">figure</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">figcaption</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLDivElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6587\u5B57\u5C42\u7EA7\u5143\u7D20</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLAnchorElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">em</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">strong</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">small</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">s</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">cite</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">q</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLQuoteElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">dfn</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">abbr</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">data</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLDataElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">time</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLTimeElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">code</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">var</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">samp</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">kbd</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">sub</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">sup</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">i</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">b</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">u</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">mark</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">ruby</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">rt</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">rp</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">bdi</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">bdo</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">span</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLSpanElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">br</span><span style="color:#A6ACCD;"> / </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLBRElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">wbr</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7F16\u4FEE\u8BB0\u5F55\u5143\u7D20</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">ins</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLModElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">del</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLModElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5185\u5D4C\u5A92\u4F53\u5143\u7D20</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">img</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLImageElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">iframe</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLIFrameElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">embed</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLEmbedElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLObjectElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">param</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLParamElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">video</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLVideoElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">audio</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLAudioElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">source</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLSourceElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">track</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLTrackElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">canvas</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLCanvasElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">canvas</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.save()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.restore()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.scale()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.rotate()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.translate()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.transform()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.setTransform()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">globalAlpha</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">globalCompositeOperation</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">strokeStyle</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">fillStyle</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.createLinearGradient()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.createRadialGradient()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasGradient \u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasGradient.addColorStop()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.createPattern()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">lineWidth</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">lineCap</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">lineJoin</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">miterLimit</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">shadowOffsetX</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">shadowOffsetY</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">shadowBlur</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">shadowColor</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.clearRect()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.fillRect()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.strokeRect()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.beginPath()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.closePath()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.moveTo()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.lineTo()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.quadraticCurveTo()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.bezierCurveTo()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.arcTo()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.rect()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.arc()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.fill()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.stroke()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.drawSystemFocusRing()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.drawCustomFocusRing()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.scrollPathIntoView()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.clip()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.isPointInPath()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">font</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">textAlign</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">textBaseline</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.fillText()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.strokeText()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.measureText()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.drawImage()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.createImageData()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.getImageData()</span></span>
<span class="line"><span style="color:#A6ACCD;">CanvasRenderingContext2D.putImageData()</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">map</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLMapElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">area</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLAreaElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">applet</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLAppletElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8868\u683C\u5143\u7D20</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">table</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLTableElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">caption</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLTableCaptionElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">colgroup</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLTableColElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">col</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLTableColElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">tbody</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLTableSectionElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">thead</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLTableSectionElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">tfoot</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLTableSectionElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">tr</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLTableRowElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLTableDataCellElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">th</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLTableHeaderCellElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7A97\u4F53\u5143\u7D20</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">form</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLFormElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">fieldset</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLFieldSetElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">legend</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLLegendElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">label</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLLabelElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">input</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLInputElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLButtonElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">select</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLSelectElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">datalist</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLDataListElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">optgroup</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLOptGroupElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">option</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLOptionElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">textarea</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLTextAreaElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">keygen</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLKeygenElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">output</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLOutputElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">progress</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLProgressElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">meter</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLMeterElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4EA4\u4E92\u5F0F\u5143\u7D20</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">details</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLDetailsElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">summary</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">command</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLCommandElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">menu</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> (HTMLMenuElement)</span></span>
<span class="line"></span></code></pre></div>`,8),o=[e];function t(c,C,r,D,A,y){return a(),n("div",null,o)}var B=s(p,[["render",t]]);export{i as __pageData,B as default};
