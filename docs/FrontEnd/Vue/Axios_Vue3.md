# 📡 Axios + Vue3【二次封装/跨域】

### 📡 二次封装axios，添加拦截器
✔️ 新建 src/api/request.ts
```typescript
import axios from 'axios'

// 设置基础路径
let baseURL = '/api'

// 创建一个 axios 实例
const requests = axios.create({
  baseURL: baseURL, // 所有的请求地址前缀部分
  timeout: 60000, // 请求超时时间毫秒
});

// 添加请求拦截器
requests.interceptors.request.use((config) => {
  // 在这里可以添加token👇
  // config.headers.token = "token"
  config.headers.authorization = localStorage.getItem('Token') || ''
  return config
});

// 添加响应拦截器
requests.interceptors.response.use((response) => {
  return response
},(error) => {
  return Promise.reject(error)
});

export default requests
```
## 📡 集合 api请求接口
**✔️新建 src/api/index.ts**
```typescript
// 引入上面配置好的
import requests from './request'

export const test = () =>{
    return requests({
        url:'/',
        method:'get'
    })
}
//....
```
## 📡 使用接口
app.vue👇
```html
<script setup lang="ts">
  import {test} from './api/index'
  
  const goApi = async () => {
    let testApi = await test();
    console.log(testApi)
  }
</script>
```

### Vite 跨域设置👇
```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: "http://api.xgtools.top",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
```
