# 🟩 过滤器 filters

```html
<div>{{ message | filteName }}</div>

<div v-bind:id="message | filteName"></div>
```
```javascript
//局部
filters: {
  'filteName': function(value) {
    return value + 'xxg'
  }
}
```

::: danger 注意
filters过滤器在Vue3.0中已经删除了，不再支持！
:::