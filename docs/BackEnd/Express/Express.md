# ⬛ Express

## 前言
Node + Express 搭建出最简单的一个服务。
最后接着往下介绍👇
## req 与 res
req和res都是继承Node原生对象
req - http.IncomingMessage
res - http.ServerResponse
### req是请求对象
官方文档：[http://expressjs.com/en/4x/api.html](http://expressjs.com/en/4x/api.html)
```javascript
// src/app.js
const express = require('express');
const app = express();

app.all('/',(req, res) => {
  console.log(req.query)//请求对象
    res.json({//响应对象
        name: "谢夏戈"
    })
})

app.listen(3000, () => {
    console.log("server 启动成功！http://127.0.0.1:3000")
})
```
```javascript
req.url // 请求地址
req.method //请求方法
req.headers  //获得请求头
//....  还有很多 
req.query.q //获得参数
req.cookie //获取cookie
//官方文档：http://expressjs.com/en/4x/api.html
```
### res是响应对象
```javascript
res.statusCode = 201 //修改成功响应码~

res.send('xxg') //发送内容

res.cookie('foo','bar') // 向客户端发送cookie
res.end() //结束响应
//官方文档：http://expressjs.com/en/4x/api.html
```
## 中间件处理
**全局中间件 要放在所有路由前面**
```javascript
//配置解析表单请求  json格式的 application/json
app.use(express.json())

// 解析x-www-form-urlencoded
app.use(express.urlencoded())

//只有这样才可以在post请求里 用 res.body 获得请求体
req.body
```
## try - catch
**每个请求都要去使用try - catch**
```javascript
app.get('/', async (req,res) => {
  try {
    //...
    const xx = await getDb()
  }catch(err){
    //...
  }
}
```
## 中间件 app.use

1. 中间件就是用来预先处理一些进来的请求，放在所有路由前面~ 
1. 相当于一个【拦截器】
1. 需要使用【next()】 来让请求向下放行
1. **[所有中间件放上上游，路由放下游，错误处理放最后！]**
```javascript
app.use((req,res,next) => {
  console.log(req)
  next()
})   
        

//get 也有next 可以理解get 其实也是中间件。或者说，use是获取所有类型请求 和【app.all】有点类似！
app.get((req,res,next) => {
  console.log(req)
  next()
})
```
### 路由中间件
为了更加方便管理【接口请求】把各类请求封装成一个一个的模块，然后使用中间件串起来~
```javascript
//创建 router.js 
const express = require('express')

//1.创建路由实例
// 路由实例 相当于一个 mini Express 实例~
const router = express.Router()

//2.配置路由
router.get('/foo',(req,res) => {
  res.send('get /foo')
})

//3.导出
module.exports = router
```
```javascript
//app.js
//4 将路由集成到express


//其他引入...
const router = require('./router')

//中间件
//...


//挂载
app.use(router)

//也可以限定路由 这样 请求就得 /abc/foo
app.use('/abc',router)

```
### 捕获错误 处理中间件👇
在所有的路由挂载之后挂载【错误处理中间件】

1. 必须四个参数，缺一不可
```javascript
app.use((err,req,res,next)=>[
  console.log('错误',err)
  res.status(500).json({
    error:err.message
  })
}
```

2. 所有路由的catch要next(err)
```javascript
router.get('/',async(req,res,next) => {
  try{
    //...
  }catch(err){
    next(err)
  }
})
```
### 处理404
在所有的路由之后，在错误处理之前

1. 它类似于最后兜底的处理
1. 它和错误处理不一样， 【错误处理】需要 next(err) 触发。 
1. 404这个中间件是 找不到路由而触发的。
```javascript
//引入

//中间件预处理

//api接口

//404处理
app.use((req,res,next)=>{
    res.status(404).send("404 Not Found")
})

//错误处理

//开启服务
```
### 内置中间件（5个）

1. express.json() 【解析】【Content-Type : application/json】
1. express.urlencoded() 【解析】【Content-Type : application/x-www-from-urlencoded】
1. express.raw() 【解析】【Content-Type : application/octet-stream】
1. express.text() 【解析】【Content-Type : text/plain】
1. express.static 【托管静态资源文件】