# 🔒 密码加密 bcryptjs

## bcryptjs包进行加密
![图 12](img/ce3e8d16fda4aaf2d239a250481f8366e2a4588995998673b42ae811e995dd7f.png)  

```shell
npm i bcryptjs
```
```javascript
const bcrypt = require('bcryptjs')
```
![图 13](img/46f6d83ca7998df6b6062422af1059eee0547e9be242c92b8863f8223f836a34.png)  

### bcrypt.hashSync()
```javascript
let password = bcrypt.hashSync(req.body.password,10)
```
## 密码解密
![图 14](img/7817b7dfb3da26071c267e6b34ebb33bd3df703151d7c46316b117f8d915d1b2.png)  

```javascript
bcrypt.compareSync()
```

