# 🟥 雪碧图 - Sprite

::: tip 雪碧图
慕课网里的雪碧图讲得特别好，写那篇文章的老师也很照顾那些基础弱的  
雪碧图也很好理解。这里就记录一些比较常用的的代码片段。

参考文章：http://www.imooc.com/wiki/csssprite
::: 

### 1.背景图片
```css
background-image: url(<你想要的图片的地址>);
```
### 2.背景图片-定位
```css
background-position: <x位置> <y位置>;
```

### 3.背景图片-重复
```css
background-repeat: no-repeat;
```
no-repeat就是禁止重复，默认是重复的！！
### 4.背景图片-尺寸
```css
background-size：<x轴尺寸> <y轴尺寸>;
background-size: cover; //吻合图片最短边
```
::: tip
上面就是使用一张大的雪碧图，然后利用背景图片的“尺寸”和“定位”来放置图，最多就是再配合:hover 做一下点击效果（更换定位位置展示不同的图）
:::

### 5.动画

正如慕课网里的教学所说，现在大多使用iconfont来做图标或者使用svg，但是『雪碧图』还是能用！而且还有另一个效果！ 就是做动画！

而下面则是利用css3里的animation搭配前面的背景图片-定位来做帧动画👇
```css
.class{
    animation: xxg 2s steps(5) infinite alternate;
}
```
- xxg 是随便取的动画名称
- 2s 是执行整个动画所花的时间
- steps 是步骤的意思 也就是帧数（一般多少个画面就写多少帧）
- infinite 就是这个动画无限播放！表停~
- alternate 是运动方向 - 交替 （123 倒 321）酱紫