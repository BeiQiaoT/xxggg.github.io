---
title: 🪱『Sass/scss』
---

参考文章：[https://www.runoob.com/sass/sass-tutorial.html](https://www.runoob.com/sass/sass-tutorial.html)  
**Sass/scss是css的预处理**
## 🟢 1.安装
> 一般我们使用【node】环境下,在@Vue/cli脚手架中

还有一个要安装的👉【sass-loader】,因为我们在 webpack的项目中要使用
```shell
npm install node-sass --save-dev
npm install sass-loader --save-dev
```
### 🟢 Vite安装Sass
![image.png](https://cdn.nlark.com/yuque/0/2022/png/21879320/1650946959308-03cb80aa-0250-438c-906b-009ba64a79ec.png#clientId=u17efc5d7-cd6e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=174&id=u1432b149&margin=%5Bobject%20Object%5D&name=image.png&originHeight=174&originWidth=676&originalType=binary&ratio=1&rotation=0&showTitle=false&size=14811&status=done&style=none&taskId=u0da4d861-b404-420b-8442-bd52639649f&title=&width=676)
```shell
npm install --save-dev sass
```
## 🟢 2.使用【vue/cli】
```html
<style lang='scss' scoped>
    /* 然后在这里面写写写 */
</style>
```
> 注意：要写scss 别写sass 要不很难受~

### scss 和 sass的区别👇

## 🟢 3.通用文件的位置
> 一般Sass文件都是放在 `scr/assets/styles/`里的

- 项目中会有一个 function.scss 文件来单独维护各种各样的函数 【函数】
- 项目中有专门的 mixin.scss 文件来管理全局的 [@mixin ](/mixin ) 指令【混合指令】 

## 🟢 4.基础
### 🟢 嵌套：
```css
nav {
  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
    color:yellow;
    &:hover{
      color:red;
    }
    &-houzui{
      //后缀
      color:blue
    }
  }
}
```
### 🟢 变量：
**在项目中在src/assets里存放scss文件，用variables.scss 存放变量**
```css
$myColor: red;

body {
  color: $myColor;
}

```
### 🟢 **!global 全局作用域**
![image.png](https://cdn.nlark.com/yuque/0/2022/png/21879320/1649829052081-b306146d-c7fb-4144-84cc-3b09ded9f421.png#clientId=uc2082464-b143-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u26b3f5b2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=897&originWidth=1600&originalType=url&ratio=1&rotation=0&showTitle=false&size=862728&status=done&style=none&taskId=u70751168-3a8e-4630-b922-9e0b67d5aca&title=)
### 🟢 数据类型/运算：略
### 🟢 插值 #{$name}：
```css
@mixin corner-icon($name, $top-or-bottom, $left-or-right) {
  .icon-#{$name} { // 使用了插值
    background-image: url("/icons/#{$name}.svg");
    position: absolute;
    #{$top-or-bottom}: 0; // 使用了插值
    #{$left-or-right}: 0; // 使用了插值
  }
}

@include corner-icon("mail", top, left);

//变成下面👇
.icon-mail {
  background-image: url("/icons/mail.svg");
  position: absolute;
  top: 0;
  left: 0;
}
```
```css
$name: item;
.ul-#{$name} { // 使用插值
  width: 200px;
  .li-#{$name} { // 使用插值
    width: 100%;
  }
}
```
### 🟢 函数：
function.scss 文件来**单独维护各种各样的函数**
```css
$list: [1,2,4,5];
$string: 'string';
$substring: 'str';

.box {
  font-size:length($list); // 列表函数
  font: quote($string); // 字符串函数
  font: str-index($string, $substring); // 字符串函数
  color: adjust-hue(#6b717f, 60deg); // 颜色函数
  border-width: ceil(4.2); // 数字函数
  width: percentage(.7); // 数字函数
  font: type-of(#676767); // Introspection函数
}
```
一般我们使用 **函数指令 @function** 来定义我们自己的函数
```css
// 截取字符串的后半部分
@function middleStr($str) {
  $leng: str-length($str);
  $start: $leng / 2;
  @return str-slice($str, $start, $leng);
}

// 判断class长度范围
@function classLong($class, $max) {
  $leng: str-length($class);
  @if $leng > $max {
    @return true;
  } @else {
    @return false;
  }
}

// 大小写转换
@function upperOrLower($str, $type) {
  @if type-of($str) == "string" {
    @if $type == "upper" {
      @return to-upper-case($str);
    } @else {
      @return to-lower-case($str)
    }
  }
}
```

- 字符串
   - quote和unquote
   - str-index
   - str-insert
   - str-length
   - str-slice
   - to-upper-case和to-lower-case
   - unique-id
- 数字函数
   - math.log
   - math.pow
   - comparable
   - unitless
   - unit
   - max
- 列表函数
   - aappend
   - join
   - index
   - length
   - list-separator
   - nth
- introspection函数
- 条件函数
- Map函数
   - map-get
   - map-has-key
   - map-keys
   - map-merge
   - map-remove
   - map-values
- 颜色函数
   - 用于获取通道色值的函数
   - saturate
   - scale-color

## 🔵 5.进阶
### 🔵 控制指令：

- @if 指令 else、else if
- @each 指令 【一般用来循环一个列表或 Map ，它的写法是这样的 @each in { … } 】
- @for 指令
- @while 指令

一般控制指令都是应用于函数或 @mixin 中
```css
// 判断class长度范围
@function classLong($class, $max) {
  $leng: str-length($class);
  @if $leng > $max {
    @return true;
  } @else {
    @return false;
  }
}@if 指令
```
```css
$borders: 2px, 3px, 5px;

@each $bor in $borders {
  .border-#{$bor} {
    border:$bor solid;
  }
}

```
```css
$base-color: #036;

// 范围是 1 ~ 3
@for $i from 1 through 3 {
  ul:nth-child(3n + #{$i}) {
    background-color: lighten($base-color, $i * 5%);
  }
}
// 范围是 4 ~ 6
@for $i from 4 through 6 {
  ul:nth-child(3n + #{$i}) {
    background-color: lighten($base-color, $i * 5%);
  }
}

```
```css
$num: 4;
@while $num >= 1 {
  .box-#{$num} {
    font-weight: 100 * $num;
  }
  $num: $num - 1;
}
```
### 🔵 混合指令 @mixin 
```css
// 不接收参数的混合指令
@mixin border {
  border: {
    width: 1px;
    color: #cccccc;
    style: solid;
  }
}
// 接收参数的混合指令
@mixin font($size: 12px, $weight: 100) {
  font: {
    family: "Myfont";
    weight: $weight;
    size: $size;
  }
}
.box {
  // 引用混合指令
  @include border;
}
.item {
  // 引用混合指令并传参
  @include font(20px, 500);
}
```