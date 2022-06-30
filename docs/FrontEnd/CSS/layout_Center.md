# 🟥 『居中』

## 绝对定位 + 上下左右为0
```css
.class{
	position: absolute;
	
	/* 上下左右全部为0 */
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	
	width: 70%;
  height: 25%;
}
```

## 绝对定位 + 负边距
```css
.center {
      /* 绝对定位 */
      position: absolute;

      /* 上方和左方为50% */
      top: 50%;
      left: 50%;

      /* 给定宽高 */
      width: 300px;
      height: 200px;

      /* 上外边距为负的给定高度的一半 */
      margin-top: -100px;

      /* 左外边距为负的给定宽度的一半 */
      margin-left: -150px;

  }
```

## 绝对定位 + 平移
```css
.center {
	/* 绝对定位 */
	position: absolute;
	
	/* 上方和左方为50% */
	top: 50%;
	left: 50%;
	
	/* 不用给宽高，但是可以给个内边距防止内容与盒子过于贴合 */
	padding: 10px;
	
	/* 这个50%是相对于自身宽高而言的 */
	transform: translate(-50%, -50%);
	
	/* 白色背景 */
	background: white;
}
```
## Grid
```css
/* 中央盒子的直接父元素 */
body {
	/* 令其变成网格布局 */
	display: grid;
	
	/* 令子元素居中 */
	place-items: center;
}

.center {
	/* 不用给宽高，但是可以给个内边距防止内容与盒子过于贴合 */
	padding: 10px;
	
	/* 白色背景 */
	background: white;
}
```
## Flex
```css
/* 找到中央盒子的直接父元素 */
body {
	/* 令其变成弹性布局 */
	display: flex;
}

.center {
	/* 自动外边距 */
	margin: auto;
	
	/* 白色背景 */
	background: white;
	
	/* 不用给宽高，但是可以给个内边距防止内容与盒子过于贴合 */
	padding: 10px;
}
```