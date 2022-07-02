# 🟨 JS 事件

## 🖱️鼠标事件
```javascript
//鼠标点击
onclick() 	

//鼠标双击
ondblclick()

//鼠标被按下
onmousedown()		

//鼠标按下后的松开
onmouseup()	

//鼠标右键打开上下文菜单时触发
oncontextmenu() 	

//屏蔽右键菜单
oncontextmenu="return false"	

//鼠标移到: 不支持冒泡
onmouseenter() 	

//鼠标移到:影响子元素
onmouseover() 	

//鼠标移开: 不支持冒泡
onmouseleave() 	

//鼠标移开:影响子元素
onmouseout() 	

//鼠标被移动
onmousemove() 	
```
```html
<!-- 在html中使用👇 -->
<button onclick="xxg()">点击我</button>
```
```html
<!-- 在js中使用👇 -->
<button id='btn'>点我鸭！</button>

<script>
document.getElementById("btn").onclick = function() {
  document.getElementById("btn").innerHTML = "我点击了！";
};
</script>
```
```vue
<!-- 在vue中使用👇 用@ -->
<button @click="xxg()">点击我</button>
```
## 👆触摸事件

- `touchstart` 		手指【触摸】到一个DOM元素时触发
- `touchmove` 		手指在一个DOM元素【滑动】时触发
- `touchend` 			手指从一个DOM元素【移开】时触发
- `touches`  			正在触摸屏幕的所有手指的一个列表
- `targetTouches`   	正在触摸【当前DOM元素】上的手指的一个列表
- `changedTouches` 	手指状态发生了改变的列表，从无到又，从有到无
## ⌨️键盘事件

- `onkeydown()` 		键盘按下
- `onkeypress()`		键盘按下并且松开
- `onkeyup()` 	    	键盘松开
## 框架/对象事件

- `onabort` 			图像的加载被中断
- `onbeforeunload` 	即将离开页面(刷新或关闭)时触发
- `onerror` 			加载文档或图像时发生错误
- `onhashchange` 	该事件在当前 URL 的锚部分发生修改时触发。
- `onload` 			浏览器已完成页面加载:
- `onpageshow` 		该事件在用户访问页面时触发
- `onpagehide` 		该事件在用户离开当前网页跳转到另外一个页面时触发
- `onresize` 			窗口或框架被重新调整大小。
- `onscroll` 			当文档被滚动时发生的事件。
- `onunload` 			用户退出页面。 ( `<body>` 和 `<frameset>`)
## 表单\文本 事件

- `onchange` 			改变
- `onfocus` 			聚焦:(不支持冒泡)
- `onfocusin` 		聚焦:(影响子元素)
- `onblur`			失焦:(不支持冒泡)
- `onfocusout` 		失焦:(影响子元素)
- `oninput` 			有输入时
- `onreset` 			表单重置时
- `onsearch` 			用户向搜索域输入文本时触发(`<input="search">`)
- `onselect` 			用户选取文本时触发(`<input>`和`<textarea>`)
- `onsubmit`			表单提交时触发

