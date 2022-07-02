# 🟩 计算 computed

```html
<script setup lang="ts">
import { computed, ref } from 'vue'

const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error 【不能操作】
</script>
```

## 用get/set 就可以操作
```html
<script setup lang="ts">
import { computed, ref } from 'vue'

const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: val => {
    count.value = val - 1
  }
})

plusOne.value = 1
console.log(count.value) // 0
</script>
```
