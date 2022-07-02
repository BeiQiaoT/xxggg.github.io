# 🟩 Vue 笔记

这里是一些基础零碎的笔记~ Vue2、Vue3通用！

##  常用指令
1. `v-text`
2. `v-html` 
3. `v-for`
4. `v-if`、`v-else-if`、`v-else`
5. `v-show`
6. `v-bind` 简写`:`
7. `v-on`简写`@`
8. `v-model`
9. `v-pre`
10. `v-once`

## 引入组件
```html
<template>
    <xxg-test></xxg-tes>
    或
    <XxgTest />
</template>

<script>
import XxgTest from './component/xxg_test.vue'

component:{
    XxgTest,
}
</script>
```
Vue3的setup语法糖，不用在`component`处声明👇
```html
<template>
    <XxgTest />
</template>

<script setup>
import XxgTest from './component/xxg_test.vue'
</script>
```