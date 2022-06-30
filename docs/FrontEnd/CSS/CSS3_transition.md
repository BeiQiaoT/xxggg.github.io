# 🟥 CSS3 过渡

- transition:[属性] [过渡时间] [过渡函数] [过渡开始时间]
- transition-property:[过渡或动态模拟的css属性]
- transition-duration:[完成过渡的时间]
- transition-fiming-function:[过渡的函数]
- transition-delay:[开始出现的延迟时间]
::: DANGER
尽量不要使用 all 来驱动过渡的属性，这会使得浏览器卡顿。
:::
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