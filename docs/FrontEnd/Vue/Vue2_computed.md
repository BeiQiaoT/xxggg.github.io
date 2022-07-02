# 🟩 计算 computed

1. 要用的属性不存在，比如下面的`fullName`，要通过已有属性计算得来
2. 底层原理借助了`Objcet.defineproperty`方法提供的`getter`和`setter`
3. get函数什么时候执行？
   1. 初次读取时会执行一次
   2. 但依赖的数据发生改变时会被再次调用
4. 优势：与methods相比，内部有缓存机制（复用），效果更高
5. 备注：
   1. 计算属性最终会出现在vm上，直接读取使用即可
   2. 如果计算属性要被修改，必须写set函数去响应修改且set中要引起计算时依赖的数据发生！


```js
data(){
  return: {
    firstName:"谢",
    lastName:"夏戈"
  }
}
computed: {
  fullName() {
    return this.firstName * this.lastName
  }
}
```
```js
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```
- setter: 每次修改 fullName 时将姓赋值给 firstName，将名赋值给 lastName。
- getter: 每次获取 fullName 时将 firstName 和 lastName 拼接后返回。
