# 🌓 判断系统暗黑模式

## 媒体查询prefers-color-scheme
```css
@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #111416 --text-color: #ccc;
    --link-color: #f96;
  }
}
```
- no-preference：表示用户未指定操作系统主题。其作为 布尔值 时以false输出
- light：表示用户的操作系统是浅色主题（light）
- dark：表示用户的操作系统是深色主题（dark）

## JS 判断系统暗黑模式
```js
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
if (systemTheme.matches) { // 是深色
  // 主题设置为深色。
} else { // 不是深色
  // 主题设置为浅色。
}
```
## CSS 判断系统暗黑模式
```css
@media (prefers-color-scheme: light) { /*light : 浅色*/
	/*主题设置为深色。*/
}
}
@media (prefers-color-scheme: dark) { /*dark : 深色*/
	/*主题设置为浅色。*/
}
```