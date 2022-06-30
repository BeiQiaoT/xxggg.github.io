# 🟥 CSS3 笔记

### 盒子模型
```css
.class{
  box-sizing: [content-box]
              [border-box]
              [inherit]
}
```
### 圆角效果
```css
border-radius:5% | 10px;
```
### 阴影效果
```css
box-shadow : X轴 Y轴 [阴影模糊半径px] [阴影扩展半径px] [阴影颜色] [投影方式:内inset]
box-shadow : 1px 1px 10px -4px black;
```
### 边框图片
```css
border-image:[url()] [50像素] [round(平铺)\ repeat(重复)\ stretch(拉伸) ]
```









### calc 计算
```css
.class{ width: calc(100% - 80px); }
```
### 宽高比 aspect-ratio
```css
.class{ aspect-ratio: 16 / 9; }
```
### img图片不被拖动
```css
.class{ -webkit-user-drag: none;  }
```
### 只留文字的背景
```css
.class{ -webkit-background-clip:text; }
```
### 对比度
```css
.class{ filter:contrast(30); }
```

### 高斯模糊
```css
.class{ filtar:blur(20px); }
```
### 延迟动画
```css
.class{ animation-delay:0.5s; }
```
### 切割空间
```css
.class{ clip-path:inset(0px 50% 0 0); }
```
### 隐藏背面
```css
.class{ backface-visibility:hidden; }
```
### 设定透视深度
```css
.class{ perspective:(1000px); }
```