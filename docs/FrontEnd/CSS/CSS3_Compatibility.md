# 🟥 兼容 - 加前缀

::: tip 兼容
css3有一些新的特性，浏览器可能不兼容，需要在这个新特性的属性前加上前缀
:::

```css
.class{
  -webkit [chrome和safari浏览器]
  -moz    [firefox浏览器]
  -ms     [IE浏览器]
  -o     	[opera]
}
```
```css
.class{
  -webkit-border-image: ;
}
```