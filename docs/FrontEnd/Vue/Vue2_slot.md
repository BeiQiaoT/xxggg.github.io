# 🟩 插槽 slot

`<slot>`元素作为承载分发内容的出口，可以理解为一个占位符，或者说是子组件暴露的一个让父组件传入自定义内容的接口。插槽内可以包含任何模板代码，包括 HTML，甚至其他的组件。在工作中如果你的组件内的内容是可变的，这个时候我们可以考虑使用插槽
## 🟩 默认插槽的使用
```html
<my-conponent>这里是要显示的插槽内容！</my-conponent>
```
```js
components: {
  'MyConponent': {
    template: '<div><slot /></div>'
  }
}
```
## 🟩 具名插槽的使用
```html
<my-conponent>
  <template slot="hello"></template>
</my-conponent>
```
```js
components: {
  'MyConponent': {
    template: '<div><slot name="hello"/></div>'
  }
}
```
