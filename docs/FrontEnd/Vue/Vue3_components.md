# 🟩 父子组件
## 【父传子】defineProps
### 父 传给子 跟Vue2 没太大区别
```vue
<template>
	<Zi :data="xxg"/>
</template>

<script setup lang='ts'>
import Zi from '../components/zi.vue'
let xxg = 'lalala'
</script>
```

### 子 这边需要用defineProps 来接【这也是关键】
```vue
<template>
    {{data}}
</template>

<script setup lang="ts">
const props =defineProps({
    data:String
    required:true,  //必要性
    default: 'xxg' //默认值，选填写
})

console.log(props.data)
</script>
```
![图 29](img/98e4e226e79c98810d5e733f556668cf6022060f9c20dedb8f71f131dbe037e7.png)  

## 【子传父】defineEmits

### 子组件 发送方法👇
```vue
<template>
  <button @click="go_fu_emit()"></button>
</template>

<script setup lang="ts">

const emit = defineEmits(['fn'])

const go_fu_emit = ()=>{
    emit('fn',true)
}
</script>

```
### 父组件 接收方法👇跟Vue2 没区别
```html
<template>
    <zi  @emit='xxg()'/>
</template>

<script setup lang='ts'>
import Zi from '../components/zi.vue'

const xxg = () =>{
    console.log('msg')
}
</script>
```
## 

