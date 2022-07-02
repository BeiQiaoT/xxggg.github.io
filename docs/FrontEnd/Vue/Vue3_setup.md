# 🟩 setup

vue3 中新增了 setup，它的出现是为了解决组件内容庞大后，理解和维护组件变得困难的问题。

::: info 为什么要使用setup?
即 vue 中 data、computed、methods、watch 等内容非常多以后，同一业务逻辑的 data 中的数据和 methods 中的方法在 vue 文件中“相隔甚远”，看代码时，经常需要根据 data 中的数据去搜索找到对应的 methods 方法，上下跳跃查看代码，非常不方便。

而在 setup 中，则可以把 data 中的数据和 methods 方法写在相临的位置，方便查看和维护。本文详细介绍 setup 的用法
:::

1. 时机位于beforeCreate和created之前
2. 在 setup函数中是无法 使用 data 和 methods 中的数据和方法的
3. setup函数是 Composition API（组合API）的入口
4. 在setup函数中定义的变量和方法最后都是需要 return 出去的 不然无法再模板中使用
5. setup函数只能是同步的不能是异步的
6. 不能使用this

::: tip 🌰 举个栗子
写一个大型组件时，逻辑关注点的列表很长，不利于维护和阅读；所以需要把一个逻辑关注点的代码收集在一起会更好，由此诞生组合式API，即vue中用到的setup。

就像我们要做卤鸡蛋，原来材料有四堆香料：八角、桂皮、香叶、茴香（data、method、computed、watch）;一样一样找太麻烦，就打包做成香料袋，一次放一个袋子（setup）就行
:::

::: danger 注意
- 每个 *.vue 文件最多可同时包含一个 `<script>`块 (不包括`<script setup>`)；
- 每个 *.vue 文件最多可同时包含一个 `<script setup>`块 (不包括常规的 `<script>`)；
:::

### 编译器宏
编译器宏（compiler macros） 有：defineProps、defineEmits、withDefaults、defineExpose 等。
编译器宏只能在 `<script setup>` 块中使用，不需要被导入，并且会在处理 `<script setup>` 块时被一同编译掉。
编译器宏必须在 `<script setup>` 的顶层使用，不可以在 `<script setup>` 的局部变量中引用。
## 简单使用/修改 setup 中的变量值

1. 原来写在 data 中的 name，在 setup 中需要 return 返回
1. 要响应到html模板上 需要使用**ref**
```html
<template>
  <div>
    {{name}}
    <button @click="change">修改</button>
  </div>
</template>
```
```js
<script>
import { ref } from 'vue'
export default {
  setup() {
    let name = ref("泪眼问花花不语，乱红飞过秋千去")
    function change() {
      name.value = "人生自是有情痴，此恨不关风与月"
    }
    return {
      name,
      change
    }
  }
}
</script>
```

使用 ref 对 name 进行包装
修改时使用 **变量名.value** 的语法


除了使用 ref 外还可以使用 reactive ，二者都可以将原始数据类型转换成一个带有响应式特性的数据类型
ref 和 reactive 有什么区别，**ref 一般处理基本类型；reactive 处理复杂的数据类型**

## 顶层await支持
`<script setup>` 中可以使用顶层 `await`。结果代码会被编译成 `async setup()`

```html
<script setup>
  const userInfo = await fetch(`/api/post/getUserInfo`)
</script>
```
注意：async setup() 必须与 Suspense 组合使用，Suspense 目前还是处于实验阶段的特性，其 API 可能随时会发生变动，建议暂时不要使用。
