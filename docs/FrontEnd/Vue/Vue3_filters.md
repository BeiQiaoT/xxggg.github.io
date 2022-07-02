# 🟩 过滤
在3.x中，过滤器被删除，不再受支持。  
可以用方法调用或计算属性。

## setup 语法糖 + typescript
```vue
<template>
  <p>{{ xxggg }}</p>
  <!-- $123 -->
</template>

<script setup lang="ts">
import { ref,computed } from "vue";

let xxg = ref<string>("123")
const xxggg = computed(() => '$' + xxg.value)
</script>
```

 
