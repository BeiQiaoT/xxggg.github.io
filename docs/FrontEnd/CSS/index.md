# 🟥 CSS

## 🔵 备忘：
```css
.class{
	/*偏移自身一半*/
	transform: translate(-50%, -50%); 
	
	/*去除a标签下划线*/
	text-decoration:none; 
	
	/*去除列表的前缀符号*/
	list-style:none; 
	
	/*字间距*/ 
	letter-spacing:20px; 
	
	/*不同的光标*/
	cursor:pointer; 
	
	/*img图片不被拖动*/
	-webkit-user-drag: none; 
}
```
## 🔵 特别：
```css
.class{
	
	-webkit-background-clip:text; /*只留文字的背景*/
	
	filter:contrast(30); /*对比度*/
	
	filtar:blur(20px); /*高斯模糊*/
	
	animation-delay:0.5s; /*延迟动画*/
	
	clip-path:inset(0px 50% 0 0); /*切割空间*/
	
	backface-visibility:hidden; /*隐藏背面*/
	
	perspective:(1000px); /*设定透视深度*/
}
```
## 🔵 宽高比 aspect-ratio
```css
aspect-ratio: 16 / 9;
```
