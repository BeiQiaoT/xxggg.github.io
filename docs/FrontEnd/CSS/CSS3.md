---
title: 🟥CSS3
---


## 🟢 兼容- 加前缀
```
-webkit [chrome和safari浏览器]
-moz    [firefox浏览器]
-ms     [IE浏览器]
-o     	[opera]
```
## 🟢【盒模型】
### 🟢 圆角效果
```css
box-sizing: content-box | border-box
```
### 🟢 圆角效果
```css
border-radius:5% | 10px;
```
### 🟢 阴影效果
```css
box-shadow :X轴 Y轴 [阴影模糊半径px] [阴影扩展半径px] [阴影颜色] [投影方式:内inset]
box-shadow : 1px 1px 10px -4px black;
```
### 🟢 边框图片
```css
border-image:[url()] [50像素] [round(平铺)\ repeat(重复)\ stretch(拉伸) ]
```
### 🔵 线性渐变
```css
background:linear-gradient:([角度deg]/[上下左右], [颜色,颜色,...])
```
### 🔵 径向渐变
```css
background-image:radial-gradient:([颜色,颜色,颜色...])
```
### 🟢 盒子模型
```css
box-sizing: [content-box]
            [border-box]
            [inherit]
```
## 🟢【文本】
### 🔵 对齐
```css
.demo{
    text-align:justify;
    text-justify:inter-word;
}
```
### 🟢 设置溢出文本用"省略标记"
```css
text-overflow : [clip 剪切掉] 或 [ellipsis 显示省略号]
```
### 🟢 溢出内容隐藏
```css
overflow:hidden
```
### 🔵 强制文本在一行内显示
```css
white-space:nowrap
```
### 🟢 超过容器是否转行
```css
word-wrap:[normal 控制连续文本转行] 或 [break-word 内容在边界内换行]
```
### 🔵 载入新的字体
```css
@font-face:
```
### 🟢 文本阴影
```css
text-shadow:[X][Y][blur模糊程度][color]
```
## 🟢【背景图片】
### 🟢 设置图片的起始位置 { 必须先设置no-repeat }
```css
background-origin:[border-box]或[padding-box]或[content-box]
```
### 🟢 图片裁剪
```css
background-clip:[border-box 默认]或[padding-box]或[content-box]
```
### 🟢 图片尺寸
```css
background-size:[auto]或[px]或[100%]或[cover 覆盖]或[contain 容纳]
```
## 🟢【变形/平面转换】
### 🟢 旋转
```css
transform:rotate(45deg);
```
### 🟢 扭曲
```css
transform:skew(45deg);
```
### 🟢 缩放
```css
transform:scale(x,y);
```
### 🟢 位移
```css
transform:translate(x,y);
transform:translateX(x);
transform:translateY(y);
```
### 🟢 矩阵
```
transform:matrix(a,b,c,d,e,f);
```
### 🟢 原点
```
transform-origin:left top;
```
## 🟢【过渡】
### 🟢 过渡效果

- transition:[属性] [过渡时间] [过渡函数] [过渡开始时间]
- transition-property:[过渡或动态模拟的css属性]
- transition-duration:[完成过渡的时间]
- transition-fiming-function:[过渡的函数]
- transition-delay:[开始出现的延迟时间]
1. **尽量不要使用 all 来驱动过渡的属性，这会使得浏览器卡顿。**
```css
.demo{
  width: 100px;
  height: 30px;
  background: #000; 
  transition: background .4s,transform .4s;
}
.demo:hover{
  background: red;
}
```
## 🟢【动画】

- animation:[名字] [时间] [速度曲线] [延迟时间] [次数/infinite] [是否轮流反向播放]
- animation-name:[名字] 
- animation-duration: [时间] 
- animation-timing-function: [速度曲线]
- animation-delay:[延迟时间] 
- animation-iteration-count:[次数/infinite]
- animation-direction:[是否轮流反向播放]
### 🟢 关键帧
```css
@Keyframes xxg{
  0%{background:red;}
  100%{background:green;}
}
div:hover{
  animation: xxg 5s ease-out .2s; //animation 是所有功能简写
}
```
#### 🔵 animation-timing-function: [速度曲线]
```css
animation-tinmin-function:  [ease],
                            [linear],
                            [ease-in],
                            [ease-out],
                            [ease-in-out];
```
#### 🔵 animation-direction:[是否轮流反向播放]
```css
animation-direction:[normal 默认],
                    [reverse 反向播放]
                    [alternate 第偶数次向前播放 第奇数次反方向播放]
                    [alternate-reverse]
```
#### 🔵 播放状态
```css
animation-play-state:[running 播放],[paused 停止]
```
#### 🔵 播放完动画后的状态
```css
animation-fill-mode:[none 默认],
                    [forwards关键帧的位置,结束后的状态作为样式],
                    [backwards开始前马上用上初始帧],
                    [both包含2,3]
```
## 🟢【选择器】
### 🟢 CSS3属性选择器
```css
a[class^=xxg]  //开头有xxg
a[herf$=xxg]   //结尾有xxg
a[title*=xxg]  //包含了xxg
```
### 🟢 CSS3伪类选择器
| 伪类选择器 | 说明 |
| --- | --- |
| a:root | 伪类选择器 等同于选择html |
| a:not | 否定选择器 就是不选择这个 |
| a:empty | 选择没有任何内容的容器 |
| a:target | 目标选择器 用来匹配页面url的某个标志符的目标元素 |
| a:first-child | 第一个子元素 |
| a:last-child | 最后一个子元素 |
| a:nth-child(n) | n=odd或者even,也可以是数字 |
| a:nth-last-child(n) | 从最后一个子元素开始计算 |
| a:first-of-type | 指定:第一个这个类型的元素,而不是第一个元素 |
| a:last-of-type | 指定:最后一个这个类型的元素 |
| a:nth-of-type(n) | 指定:这个类型的的元素的选择 |
| a:nth-last-of-type(n) | [...] |
| a:only-child | 选的这个元素他 有且只有一个子元素 |
| a:only-of-type | 选择这个元素下 他的唯一类型的子元素 |

## 🟢【媒体类型Media】
### 🟢 根据媒体类型加载不同的样式
```css
All       -     [所有]
Screen    -     [电脑显示器]
Print     -     [打印用纸或打印预览视图]
```
### 🟢 link方法
```css
<link media="print"/>
```
### 🟢 @import方法
```css
@importurl(print.css) print;
@importurl(xxg.css)  screen;
```
### 🟢 @media方法
```css
@media screen {
  选择器{/*样式代码*/};
}
```
```css
@media screen and (max-width:600px) {
  
}
```
## 🟢【其他】
### 🟢 calc 计算属性
```css
.demo{
    width: calc(100% - 80px);
}
```
### 🟢 权重
优先级最高，但也会被权重高的important所覆盖
```css
!important
```
### 🟢 nth 元素选择

- demo:nth-child(n) 选择器匹配属于其父元素的第 N 个子元素；
- demo:nth-last-child(n) 选择器匹配属于其元素的第 N 个子元素的每个元素，从最后一个子元素开始计数；
- demo:nth-of-type(n) 选择器匹配属于父元素的**特定类型**的第 N 个子元素的每个元素

### 🟢before && after

- demo:before：元素的内容之前插入新内容。
- demo:after：元素的内容之后插入新内容。
```css
 .demo:before{
    content: '姓名：';
}
```

1. 使用伪类 after 清除元素内部浮动效果：
```css
.demo:after{
    content: '';
    display: block;
    clear: both;
}
.item{
    float: left;
}
```

2. 在元素内容开始前插入图片。
```css
.demo:before{
    content: '';
    display:inline-block;
    width:12px;
    height:12px;
    font-size:12px;
    line-height:12px;
    background: url(//img.mukewang.com/wiki/5eea2f6809a8d35e00400040.jpg) center  no-repeat;
    background-size: cover;
}
```
