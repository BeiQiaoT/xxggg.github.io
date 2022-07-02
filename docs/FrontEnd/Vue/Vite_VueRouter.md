# ⚡ Vite 安装 VueRouter

> 刚搭建完的Vite项目是不会像vue/cli一样自带 vue-router 和 vuex的   
> 所以要自己去安装这两个插件

## 安装Vue-Router👇
```shell
npm add vue-router@next
```
`src/router/index.ts`
```typescript
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("../views/Home.vue"),},
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
```
`src/main.ts`
```typescript
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

createApp(App).use(router).mount('#app')
```
## 跳转：
```html
<router-link to="/xxg">Go to xxg</router-link>
```
## 显示的区域：
```html
<router-view></router-view>
```
