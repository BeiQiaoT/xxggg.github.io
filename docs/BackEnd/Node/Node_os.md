# ⬜ Node - os模块

os 模块是专门用来操作系统的

```js
const os = require('os')

const cpus = os.cpus(); //获取当前cpu的数量

console.log(cpus.length)
```