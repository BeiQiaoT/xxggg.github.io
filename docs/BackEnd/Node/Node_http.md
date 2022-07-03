# ⬜ Node - http模块

```js
const http = require('http');

const server = http.createServer((req,res)=>{
  res.end('hello')
})

server.listen(3000,'127.0.0.1',()=>{
  console.log('服务启动成功')
})
//前面是端口/后面是ip地址
```