# ⚡ Vite 安装 Vuex


### ⚡ 安装
```sh
npm install vuex --save
```
### ⚡ 配置
```ts
// src/store/index.ts👇
import { createStore } from 'vuex'
 
const store = createStore({
  state: {  
	  test:'test1'
  },
  mutations: {   
  },
  actions: {
  },
  getters: {
  }
})
 
export default store
```
```ts
//main.ts 入口文件
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app =  createApp(App)
app.use(router).use(store).mount('#app')
```

## ⚡ 更多
更多关于 Sass 的操作请看 [🪱Vue + Sass](Vue_Scss.html)
