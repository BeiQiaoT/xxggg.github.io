# 🟩 缓存 keep-alive

**使用了keep-alive的组件的页面会被缓存起来，不会被销毁，包括它里面的定时器。**

::: danger 注意！
 `keep-alive` 缓存的组件只有在初次渲染时才会被创建。  
所以，我们通过修改  `currentView` 切换组件时，组件的 `beforeDestroy` 事件不会触发。  
若该组件是第一次渲染，会触发 `created`  事件，  
当再次切换显示该组件时，`created`  事件不会再次触发。
:::
```html
<keep-alive>
  <component :is="currentView"></component>
</keep-alive>
```
## 🟩 activated 和 deactivated 生命周期
activated 和 deactivated 和我们之前学习的生命周期函数一样，也是组件的生命周期函数。
不过， activated 和 deactivated 只在 `<keep-alive>` 内的所有嵌套组件中触发。

- activated：进入组件时触发。
- deactivated：退出组件时触发。
```js
activated() {
  console.log('组件A 被添加')
},
deactivated() {
  console.log('组件A 被移除')
}
```
::: danger 注意！！！
activated 和 deactivated 这两个生命周期函数一定是要在使用了 keep-alive 组件后才会有的。
:::

## 🟩 include 和 exclude
include 和 exclude 是 keep-alive 的两个属性，允许组件有条件地缓存。  
- include： 可以是字符串或正则表达式，用来表示只有名称匹配的组件会被缓存。
- exclude： 可以是字符串或正则表达式，用来表示名称匹配的组件不会被缓存。
```html
<keep-alive include="ComponentA,ComponentB">
  <component :is="ComponentA"></component>
  <component :is="ComponentB"></component>
  <component :is="ComponentC"></component>
</keep-alive>
```
