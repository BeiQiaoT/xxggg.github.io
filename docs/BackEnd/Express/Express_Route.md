# ⬛ Express - Route路由

**url -> 网络 -> dns解析 -> 目标服务器**

1. **如何响应这个请求 -> 路由（规则）**
```javascript
const app = express();

//app -> Application -->web服务器的实例
```
# 路由👇
## 1、请求的方法来区分👇

1. get 
1. post
1. put
1. delete
## 2、通过 uri 来区分👇
/demo
```javascript
app.get('/demo',(req,res)=>{
	//...	
})
```
## 3、全部响应 - all
```javascript
app.all('/',(req,res)=>{
	//...	
})
```
## 4、中间件 - use
```javascript
app.use('/demo',(req,res)=>{
	//...	
})
```
# 接收参数
# 路由的拆分 express.Router👇
## 在分路由中
```javascript
//member.router.js
const express = require('express');
const reouter = express.Router();

router.get('/list',(req,res)=>{
  res.json({
    list:[
      {
        id:002,
        name:'xxg'
      }
     ]
  })
})

module.exports = router;
```
## 在主路由中 - 注册分路由👇
```javascript
//app.js
const app = express();

const memberRouter = require('./member.router.js');
app.use(memberRouter)

app.listen(3000,()=>{
  console.log('服务启动成功');
})
```
```javascript
app.use(require('./member.router.js'))
```