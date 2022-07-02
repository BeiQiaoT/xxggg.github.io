# 🟩 监听 Watch


```js
data() {
  return {
    count: 0
  }
},
watch: {
  count: function(newVal, oldVal) {
    // 具体处理逻辑
  },
  'product.name': function(newValue){
    console.log(newValue)
  }
}
```
### handler属性
watch 方法其实默认写的就是这个handler。  
当 name 发生改变时, handler 方法就会执行。
```js
watch: {
  name: {
    handler(newVal, oldVal) {
      console.log(newVal)
    }
  }
}
```
### immediate属性（立马执行一次先）
```js
watch: {
  name: {
    handler(newVal, oldVal) {
      console.log(newVal)
    },
    immediate: true
  }
}
```
### deep属性（深度监听，监听对象里面的属性）
```javascript
var vm = new Vue({
  el: '#app',
  data: {
    product: {
      name: '',
      count: '',
      title: ''
    }
  },
  watch: {
    'product.name': function(newValue){
      console.log(newValue)
    },
    'product.count': function(newValue){
      console.log(newValue)
    },
    'product.title': function(newValue){
      console.log(newValue)
    }
  }
})
```
deep 属性代表是否深度监听，默认值是 false。当设置为 true 时，会对对象里面的每个属性进行侦听。
```javascript
var vm = new Vue({
  el: '#app',
  data: {
    product: {
      name: '',
      count: '',
      title: ''
    }
  },
  watch: {
    product: {
      handler: function(newVal) {
        console.log(newVal)
      },
      deep: true
    }
  }
})
```
## 

