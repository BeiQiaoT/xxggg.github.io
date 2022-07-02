# 📡Axios + Vue2【二次封装/跨域】

### 对Axios的二次封装👇
✔️ 新建 src/api/request.ts
```javascript
import axios from  'axios'

// 2.全局默认配置
let baseURL

//判断开发环境（一般用于本地代理）
if (process.env.NODE_ENV === 'development') { //开发环境
    baseURL = '/api'
    //意思是 如果 当前环境 = 开发环境 那么基础url 设置为api
}else{                                       //编译环境
    if(process.env.type === 'test') {       //测试环境
        baseURL = 'http://localhost:8080'   
    }else{                                  //正式环境
        baseURL = 'http://localhost:8080'  
    }
}  

// 创建axios实例
const request = axios.create({
    baseURL: baseURL,//baseURL会在发送请求的时候拼接在url参数前面
    timeout: 5000                    //请求超时的时间
})

//请求拦截（所有的网络请求都会先走这个方法）
request.interceptors.request.use(
    function(config){
        // 在这里可以添加token👇
        // config.headers.token = "token"
        return config;
    },
    function(err) {
        return Promise.reject(err);
    }
)
//响应拦截
request.interceptors.response.use(
    function(response){
        return response;
    },
    function(err) {
        return Promise.reject(err);
    }
)

export default request
```
> 这种方式呢，就是在请求的 调用一下这两个封装好的方法。

### 对需要请求的api接口封装👇
✔️ 新建 src/api/index.ts
```javascript
// 接口函数封装，方便外部调用接口
import request from "request"  // 导入配置好的axios文件

// 封装axios请求函数，并用export导出
export function getItemList(datas) {
  return request({
    url: "/api/getItemList",
    method: "post",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
    },
    data: datas
  })
}
```
## Vue/cli【开发环境-跨域】
使用 proxy 代理解决这个问题，新建 vue.config.js 文件，添加配置：
```js
module.exports={
 devServer:{
  proxy:{
   '/api':{
    target:'http://api.xgtools.top',
    changeOrigin:true,
    pathRewrite:{
     '^/api':''
    }
   }
  }
 }
}
```
### 