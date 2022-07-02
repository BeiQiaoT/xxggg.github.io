# 🟩 生命周期

```js
beforeCreate -> use setup()
created -> use setup()
beforeMount -> onBeforeMount
mounted -> onMounted
beforeUpdate -> onBeforeUpdate
updated -> onUpdated
beforeDestroy -> onBeforeUnmount
destroyed -> onUnmounted
activated -> onActivated
deactivated -> onDeactivated
errorCaptured -> onErrorCaptured

onRenderTracked
onRenderTriggered
```
```javascript
import { onMounted } from 'vue';
onMounted(() => {
  
})
```

