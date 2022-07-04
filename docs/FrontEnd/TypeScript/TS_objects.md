# 🟦 内置对象

这个内置对象，就是前面那个【类型断言 as】有展示的
```ts
let img = document.detElementById("image") as HTMLImageElement
```
`HTMLImageElement`

因为像这种`元素节点`的类型... 又不像`number``string`...  对伐~

这种就是【内置的对象】  
它一般有分：
1. ECMAScript 的内置对象 `Boolean` `Error` `Date` `RegExp`
2. DOM 和 BOM 的内置对象 `Document` `HTMLElement` `Event` `NodeList`





```html
HTML 5 范例

HTML 5 快速导览 – 内嵌元素 <img>
HTML 元素对象

根元素
<html> (HTMLHtmlElement)
文件数据元素
<head> (HTMLHeadElement)
<title> (HTMLTitleElement)
<base> (HTMLBaseElement)
<link> (HTMLLinkElement)
<meta> (HTMLMetaElement)
<style> (HTMLStyleElement)
<script> (HTMLScriptElement)
<noscript> (HTMLElement)
文件区域元素
<body> (HTMLBodyElement)
<section> (HTMLElement)
<nav> (HTMLElement)
<article> (HTMLElement)
<aside> (HTMLElement)
<h1> <h2> <h3> <h4> <h5> <h6> (HTMLHeadingElement)
<hgroup> (HTMLElement)
<header> (HTMLElement)
<footer> (HTMLElement)
<address> (HTMLElement)
群组元素
<p> (HTMLParagraphElement)
<hr> (HTMLHRElement)
<pre> (HTMLPreElement)
<blockquote> (HTMLQuoteElement)
<ol> (HTMLOListElement)
<ul> (HTMLUListElement)
<li> (HTMLLIElement)
<dl> (HTMLDListElement)
<dt> (HTMLElement)
<dd> (HTMLElement)
<figure> (HTMLElement)
<figcaption> (HTMLElement)
<div> (HTMLDivElement)
文字层级元素
<a> (HTMLAnchorElement)
<em> (HTMLElement)
<strong> (HTMLElement)
<small> (HTMLElement)
<s> (HTMLElement)
<cite> (HTMLElement)
<q> (HTMLQuoteElement)
<dfn> (HTMLElement)
<abbr> (HTMLElement)
<data> (HTMLDataElement)
<time> (HTMLTimeElement)
<code> (HTMLElement)
<var> (HTMLElement)
<samp> (HTMLElement)
<kbd> (HTMLElement)
<sub> (HTMLElement)
<sup> (HTMLElement)
<i> (HTMLElement)
<b> (HTMLElement)
<u> (HTMLElement)
<mark> (HTMLElement)
<ruby> (HTMLElement)
<rt> (HTMLElement)
<rp> (HTMLElement)
<bdi> (HTMLElement)
<bdo> (HTMLElement)
<span> (HTMLSpanElement)
<br / > (HTMLBRElement)
<wbr> (HTMLElement)
编修记录元素
<ins> (HTMLModElement)
<del> (HTMLModElement)
内嵌媒体元素
<img> (HTMLImageElement)
<iframe> (HTMLIFrameElement)
<embed> (HTMLEmbedElement)
<object> (HTMLObjectElement)
<param> (HTMLParamElement)
<video> (HTMLVideoElement)
<audio> (HTMLAudioElement)
<source> (HTMLSourceElement)
<track> (HTMLTrackElement)
<canvas> (HTMLCanvasElement)
CanvasRenderingContext2D
CanvasRenderingContext2D.canvas
CanvasRenderingContext2D.save()
CanvasRenderingContext2D.restore()
CanvasRenderingContext2D.scale()
CanvasRenderingContext2D.rotate()
CanvasRenderingContext2D.translate()
CanvasRenderingContext2D.transform()
CanvasRenderingContext2D.setTransform()
CanvasRenderingContext2D.globalAlpha
CanvasRenderingContext2D.globalCompositeOperation
CanvasRenderingContext2D.strokeStyle
CanvasRenderingContext2D.fillStyle
CanvasRenderingContext2D.createLinearGradient()
CanvasRenderingContext2D.createRadialGradient()
CanvasGradient 对象
CanvasGradient.addColorStop()
CanvasRenderingContext2D.createPattern()
CanvasRenderingContext2D.lineWidth
CanvasRenderingContext2D.lineCap
CanvasRenderingContext2D.lineJoin
CanvasRenderingContext2D.miterLimit
CanvasRenderingContext2D.shadowOffsetX
CanvasRenderingContext2D.shadowOffsetY
CanvasRenderingContext2D.shadowBlur
CanvasRenderingContext2D.shadowColor
CanvasRenderingContext2D.clearRect()
CanvasRenderingContext2D.fillRect()
CanvasRenderingContext2D.strokeRect()
CanvasRenderingContext2D.beginPath()
CanvasRenderingContext2D.closePath()
CanvasRenderingContext2D.moveTo()
CanvasRenderingContext2D.lineTo()
CanvasRenderingContext2D.quadraticCurveTo()
CanvasRenderingContext2D.bezierCurveTo()
CanvasRenderingContext2D.arcTo()
CanvasRenderingContext2D.rect()
CanvasRenderingContext2D.arc()
CanvasRenderingContext2D.fill()
CanvasRenderingContext2D.stroke()
CanvasRenderingContext2D.drawSystemFocusRing()
CanvasRenderingContext2D.drawCustomFocusRing()
CanvasRenderingContext2D.scrollPathIntoView()
CanvasRenderingContext2D.clip()
CanvasRenderingContext2D.isPointInPath()
CanvasRenderingContext2D.font
CanvasRenderingContext2D.textAlign
CanvasRenderingContext2D.textBaseline
CanvasRenderingContext2D.fillText()
CanvasRenderingContext2D.strokeText()
CanvasRenderingContext2D.measureText()
CanvasRenderingContext2D.drawImage()
CanvasRenderingContext2D.createImageData()
CanvasRenderingContext2D.getImageData()
CanvasRenderingContext2D.putImageData()
<map> (HTMLMapElement)
<area> (HTMLAreaElement)
<applet> (HTMLAppletElement)
表格元素
<table> (HTMLTableElement)
<caption> (HTMLTableCaptionElement)
<colgroup> (HTMLTableColElement)
<col> (HTMLTableColElement)
<tbody> (HTMLTableSectionElement)
<thead> (HTMLTableSectionElement)
<tfoot> (HTMLTableSectionElement)
<tr> (HTMLTableRowElement)
<td> (HTMLTableDataCellElement)
<th> (HTMLTableHeaderCellElement)
窗体元素
<form> (HTMLFormElement)
<fieldset> (HTMLFieldSetElement)
<legend> (HTMLLegendElement)
<label> (HTMLLabelElement)
<input> (HTMLInputElement)
<button> (HTMLButtonElement)
<select> (HTMLSelectElement)
<datalist> (HTMLDataListElement)
<optgroup> (HTMLOptGroupElement)
<option> (HTMLOptionElement)
<textarea> (HTMLTextAreaElement)
<keygen> (HTMLKeygenElement)
<output> (HTMLOutputElement)
<progress> (HTMLProgressElement)
<meter> (HTMLMeterElement)
交互式元素
<details> (HTMLDetailsElement)
<summary> (HTMLElement)
<command> (HTMLCommandElement)
<menu> (HTMLMenuElement)
```