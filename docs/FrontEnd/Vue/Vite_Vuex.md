# ⚡ Vite 安装 Vuex

```shell
npm install vuex --save
```
```javascript
// src/store/index.js👇
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
```javascript
//main.ts 入口文件
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app =  createApp(App)
app.use(router).use(store).mount('#app')
```
