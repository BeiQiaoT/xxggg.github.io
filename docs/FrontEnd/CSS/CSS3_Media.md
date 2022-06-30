# 🟥 媒体类型 - media

## 根据媒体类型加载不同的样式
```css
All       -     [所有]
Screen    -     [电脑显示器]
Print     -     [打印用纸或打印预览视图]
```

## link方法
```css
<link media="print"/>
```

## @import方法
```css
@importurl(print.css) print;
@importurl(xxg.css)  screen;

```

## @media方法
```css
@media screen {
  选择器{/*样式代码*/};
}
@media screen and (max-width:600px) {
  
}
```
