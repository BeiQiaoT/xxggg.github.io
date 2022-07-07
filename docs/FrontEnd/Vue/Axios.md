# 📡 Axios 

## 📡 安装【vue2\3都一样】
```shell
npm install axios -S
```
## 📡 基础使用【vue2\3都一样】👇
```javascript
import axios from 'axios';

axios.get('http://api.xgtools.top').then(res => {
  console.log(res)
}).catch((error) => {
  console.log(error);
});
```
## 📡 加入原型，使之全局调用👇
在入口文件main.js文件中👇
#### 📡 vue2 - 加入原型
```typescript
import axios from 'axios'
Vue.prototype.$axios = axios; //把 `axios` 加到 `Vue` 的原型中
```
#### 📡 vue3 - 加入原型
```javascript
import axios from 'axios'
app.config.globalProperties.$axios=axios //把 `axios` 加到 `Vue` 的原型中
```
这样，axios就可以用$axios全局调用了👇不需要每个地方都引入【import axios from 'axios';】
```javascript
this.$axios.get('api 接口地址')
.then(res => {  //ES6的箭头写法
  console.log(res)
})
.catch(error => { // 请求失败处理
  console.log(error);
});
```

## 📡 GET 及传参方式
就是在后面加个问号❓然后什么 = 什么
```javascript
this.axios.get('/user?ID=12345')
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  });
```
也可以通过 params 设置参数：
```javascript
this.axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  });
```
## 📡 POST 及传参方式
```javascript
this.axios.post('/user', {
  firstName: 'Fred',        // 参数 firstName
  lastName: 'Flintstone'    // 参数 lastName
})
.then(res => {  //ES6的箭头写法
  console.log(res)
})
.catch(error => { // 请求失败处理
  console.log(error);
});
```
## 📡 拦截器

-  请求拦截器（interceptors.requst）是指可以拦截每次或指定HTTP请求，并可修改配置项。 
-  响应拦截器（interceptors.response）可以在每次HTTP请求后拦截住每次或指定HTTP请求，并可修改返回结果项。 
## 📡 axios的API
```javascript
axios({
  url: 'http://api.xgtools.top',
  method: 'post',
  data: {
    name: 'xxg'
  }
}).then(res => {
  console.log('请求结果：', res);
});
```
## 📡 并发请求
```javascript
function xxg1() {
  return axios.get('/user/12345');
}

function xxg2() {
  return axios.get('/user/12345/permissions');
}
axios.all([xxg1(), xxg2()])
  .then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  }));
```

