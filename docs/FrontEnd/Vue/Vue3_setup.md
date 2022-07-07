# 🟩 setup

vue3 中新增了 setup，它的出现是为了解决组件内容庞大后，理解和维护组件变得困难的问题。


1. 时机位于beforeCreate和created之前
2. 在 setup函数中是无法 使用 data 和 methods 中的数据和方法的
3. setup函数是 Composition API（组合API）的入口
4. 在setup函数中定义的变量和方法最后都是需要 return 出去的 不然无法再模板中使用
5. setup函数只能是同步的不能是异步的
6. 不能使用this

### 为什么要使用setup?
方便查看和维护
::: tip 🌰 举个栗子
写一个大型组件时，逻辑关注点的列表很长，不利于维护和阅读；所以需要把一个逻辑关注点的代码收集在一起会更好，由此诞生组合式API，即vue中用到的setup。

就像我们要做卤鸡蛋，原来材料有四堆香料：八角、桂皮、香叶、茴香（data、method、computed、watch）;一样一样找太麻烦，就打包做成香料袋，一次放一个袋子（setup）就行
:::

---

1. 原来写在 data 中的 `变量`，在 setup 中需要 return 返回
2. 要响应到html模板上 需要使用`ref`
3. 使用 `ref` 对 `变量` 进行包装,修改时使用 `变量名.value` 的语法
```vue
<template>
  <div>
    {{name}}
    <button @click="change">修改</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    let name = ref("xxg")
    function change() {
      name.value = "xxggg"
    }
    return {
      name,
      change
    }
  }
}
</script>
```
还可以写成，`<scipt setup>` 语法糖👇
```vue
<template>
  <div>
    {{name}}
    <button @click="change">修改</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let name = ref("xxg")
const change = () =>{
  name.value = "xxggg"
}
</script>
```
## 顶层await支持
`<script setup>` 中可以使用顶层 `await`。结果代码会被编译成 `async setup()`

```html
<script setup>
  const userInfo = await fetch(`/api/post/getUserInfo`)
</script>
```
注意：async setup() 必须与 Suspense 组合使用，Suspense 目前还是处于实验阶段的特性，其 API 可能随时会发生变动，建议暂时不要使用。
