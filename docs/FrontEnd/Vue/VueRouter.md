# 🧩 VueRouter

> 官方文档：[https://router.vuejs.org/zh/](https://router.vuejs.org/zh/)

## 🧩 安装
### Vue2、Vue3安装👇
虽然大多数时，@vue/cli在搭建的时候都可以选择配置好~
```shell
npm install vue-router
```
### Vite安装👇
```shell
npm add vue-router@next
```
## 🧩 引入
### Vue2引入👇
```javascript
//scr/router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
```
```javascript
//main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```
### Vue3、Vite引入👇
```ts
//src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: () => import( '../views/AboutView.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
```
```ts
//main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```

## 🧩 基础使用（vue2\vue3都一样）
```html
<router-link to="/index">首页</router-link>；
```
`<router-view>`：该组件将渲染路由匹配到的组件内容。
```html
<router-view />
```
### 🧩 动态路由配置【都一样】：
```javascript
//配置
const routes = [
  // 动态字段以冒号开始
  { path: '/users/:id', component: User },
]
```
```html
//使用
<div>User {{ $route.params.id }}</div>
```
| 匹配模式 | 匹配路径 | $route.params |
| --- | --- | --- |
| `/users/:username` |`/users/eduardo`  |`{ username: 'eduardo' }`  |
|`/users/:username/posts/:postId`  |`/users/eduardo/posts/123` |`{ username: 'eduardo', postId: '123' }`  |

### 🧩 路由嵌套【都一样】：
```javascript
//router.js 路由配置
{
  path: '路由地址',
    component: '渲染组件',
      children: [
        {
          path: '路由地址',
          component: '渲染组件'
        }
      ]
}
//👇 示例
const routes = [
  { path: '/index', component: Index },
  { 
    path: '/article', 
    component: Article ,
    children: [
      {
        path: '/vueArticle', 
        component: VueArticle ,
      },
      {
        path: '/reactArticle', 
        component: ReactArticle ,
      }
    ]
  }
]
```
在组件Article中需要使用 `<router-view/>`


## 🧩 【编程式导航】：
| 声明式 | 编程式 |
| :-: | :-: |
| `<router-link :to="...">` | `router.push(...)` |

### 🧩 router.push
#### 【vue2】👇
```javascript
//vue2里
methods: {
  btn() {
    
    this.$router.push('home') // 字符串形式的参数
    
    this.$router.push({ path: 'home' }) // 通过路径描述地址
    
    this.$router.push({ name: 'user' }) // 通过命名的路由描述地址
  }
}
```
#### 【vue3】👇
**引入的useRoute,useRouter 相当于vue2的 `this.$route()，this.$router()`**
**引入的useRoute,useRouter 相当于vue2的 `this.$route()，this.$router()`**
**引入的useRoute,useRouter 相当于vue2的 `this.$route()，this.$router()`**
```javascript
//vue3里
import { useRoute, useRouter } from 'vue-router'
export default {
  setup () {
    const route = useRoute()
    const router = useRouter()
    const toHome = (() => {
      router.push({
        name: 'home'
      })
    })
    return {
      toHome
    }
  },
}
```
```vue
<script setup lang='ts'>
  import { } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  const route = useRoute()
  const router = useRouter()
  const goAbout = () => {
    router.push('/About')
  }
</script>
```
### 🧩 router.replace
跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，替换掉当前的 history 记录，
【言下之意，就是点过去，然后浏览器返回按钮不会亮（不能点返回）】
```javascript
//【vue2】
this.$router.replace('/About') 
```
```javascript
//【vue3】
import { useRoute } from 'vue-router'
const route = useRoute()
router.replace('/About') 
```
### 🧩 router.go
这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步。例如：
```javascript
// 在浏览器记录中前进一步
router.go(1)

// 后退一步记录
router.go(-1)

// 前进 3 步记录
router.go(3)

// 如果 history 记录不够用，路由将不会进行跳转
router.go(-100)
router.go(100)
```
## 🧩 传参
### 🧩 params 传参（name）：
```javascript
//路由定义
const routes = [
  { path: '/About/:name', name: 'About', component: About },
]
```
```javascript
<!-- router-link 跳转 -->【vue2/vue3都可以】
<router-link :to="{name: 'detail', params: {data: 'xxg'}}">xxg</router-link>

// 【vue2】
this.$router.push({
  name: 'detail',
  params: {
    data: 'xxg'
  }
})

//【vue3】
router.push({ name: 'user', params: { data: 'eduardo' } })
```
```javascript
//获取参数【vue2】
this.$route.params.data

//【vue3】
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params.data)
```
### 🧩 query 传参（path）：
```javascript
 <!-- router-link 跳转 -->
<router-link :to="{path: '/About', query: { id: 1 }}">xxg</router-link>

 // $router 跳转
 this.$router.push({
  path: '/About',
  query: {
    id: 2
  }
})

//【vue3】
// 带查询参数，结果是 /register?plan=private
router.push({ path: '/About', query: { id: '3' } })
```
```javascript
//获取参数
$route.query.id
this.$route.query.id

//【vue3】
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.query.id)
```
## 🧩 配置
### 🧩 重定向 redirect：
```javascript
const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: Index },
  { path: '/article', component: Article }
]

const routes = [
  { path: '/', redirect: {name: 'index'} },
  { path: '/index', name: 'index', component: Index },
  { path: '/article', name: 'article', component: Article }
]

//动态返回重定向目标
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: to => {
      // 方法接收 目标路由 作为参数
      // return 重定向的 字符串路径/路径对象
    }}
  ]
})
```
### 🧩 路由别名 alias：
“重定向”的意思是，当用户访问 /a 时，URL 将会被替换成 /b，然后匹配路由为 /b，


/a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，  
但是路由匹配则为 /a，就像用户访问 /a 一样。
```javascript
const router = new VueRouter({
  routes: [
    { path: '/a', component: A, alias: '/b' }
  ]
})
```
