# ⬜ Node - fs模块

###  引入fs模块
```javascript
//引入模块👇
const fs = require("fs");
```
## 文件：
### 文件读取 readFileSync / readFile
```javascript
//同步👇
let buf = fs.readFileSync("1.txt");
let data = fs.readFileSync("1.txt", "utf8");

console.log(buf); // <Buffer 48 65 6c 6c 6f>
console.log(data); // Hello

//异步👇
fs.readFile("1.txt", "utf8", (err, data) => {
    console.log(err); // null
    console.log(data); // Hello
});
```
### 文件写入 writeFileSync / writeFile
写入会覆盖掉原来的内容
```javascript
const fs = require("fs");

 //同步
fs.writeFileSync("2.txt", "Hello world");//写入文件（地址，内容）
let data = fs.readFileSync("2.txt", "utf8");//读取文件
console.log(data); // Hello world


//异步
fs.writeFile("2.txt", "Hello world", err => {
    if (!err) {
        fs.readFile("2.txt", "utf8", (err, data) => {
            console.log(data); // Hello world
        });
    }
});
```
### 文件追加写入 appendFileSync / appendFile
追加写入不是覆盖原来的内容，是在原来的内容上追加在后面
```javascript
//同步
const fs = require("fs");
 
fs.appendFileSync("3.txt", " world");
let data = fs.readFileSync("3.txt", "utf8");
console.log(data);

//异步
fs.appendFile("3.txt", " world", err => {
    if (!err) {
        fs.readFile("3.txt", "utf8", (err, data) => {
            console.log(data); // Hello world
        });
    }
});
```
### 文件拷贝写入 copyFileSync / copyFile
第一个参数为被拷贝的源文件路径，第二个参数为拷贝到的目标文件路径，如果目标文件不存在，则会创建并拷贝。
现在将上面 3.txt 的内容拷贝到 4.txt 中：
```javascript
//同步
const fs = require("fs");
 
fs.copyFileSync("3.txt", "4.txt");
let data = fs.readFileSync("4.txt", "utf8");
console.log(data);

//异步
fs.copyFile("3.txt", "4.txt", () => {
    fs.readFile("4.txt", "utf8", (err, data) => {
        console.log(data); // Hello world
    });
});
```
## 文件操作的高级方法：
### 1、打开文件 open

- path：文件的路径；
- flag：标识位；
- mode：权限位，默认 0o666；
- callback：回调函数，有两个参数 err（错误）和 fd（文件描述符），打开文件后执行。
```javascript
const fs = require("fs");
 
fs.open("4.txt", "r", (err, fd) => {
    console.log(fd);
    fs.open("5.txt", "r", (err, fd) => {
        console.log(fd);
    });
});
// 5
// 4
```
### 2、关闭文件 close
```javascript
fs.open("4.txt", "r", (err, fd) => {
    fs.close(fd, err => {
        console.log("关闭成功");
    });
});
```
### 3、读取文件 read
read 方法与 readFile 不同，一般针对于文件太大，无法一次性读取全部内容到缓存中或文件大小未知的情况，都是多次读取到 Buffer 中。
read 方法中有六个参数：

- fd：文件描述符，需要先使用 open 打开；
- buffer：要将内容读取到的 Buffer；
- offset：整数，向 Buffer 写入的初始位置；
- length：整数，读取文件的长度；
- position：整数，读取文件初始位置；
- callback：回调函数，有三个参数 err（错误），bytesRead（实际读取的字节数），buffer（被写入的缓存区对象），读取执行完成后执行。
```javascript
const fs = require("fs");
let buf = Buffer.alloc(6);
 
// 打开文件
fs.open("6.txt", "r", (err, fd) => {
    // 读取文件
    fs.read(fd, buf, 0, 3, 0, (err, bytesRead, buffer) => {
        console.log(bytesRead);
        console.log(buffer);
 
        // 继续读取
        fs.read(fd, buf, 3, 3, 3, (err, bytesRead, buffer) => {
            console.log(bytesRead);
            console.log(buffer);
            console.log(buffer.toString());
        });
    });
});
 
// 3
// <Buffer e4 bd a0 00 00 00>
 
// 3
// <Buffer e4 bd a0 e5 a5 bd>
// 你好
```

### 4、🔴同步磁盘缓存 fsync
### 5、🔴写入文件 write
### 6、🔴针对大文件实现 copy



## 文件目录操作方法：
### 1、🔴查看文件目录操作权限 accessSync / access
### 2、🔴获取文件目录的 Stats 对象 statSync / stat
### 3、🔴创建文件目录 mkdirSync / mkdir

### 4、读取文件夹目录 readdirSync / readdir
```javascript
//同步👇
let data = fs.readdirSync("a/b");
console.log(data); // [ 'c', 'index.js' ]

//异步👇
fs.readdir("a/b", (err, data) => {
    if (!err) console.log(data);
});// [ 'c', 'index.js' ]
```
### 5、删除文件目录 rmdirSync / rmdir
rmdirSync 的参数为要删除目录的路径，现在存在 a 目录和 a 目录下的 b 目录，删除 b 目录
```javascript
//同步
const fs = require("fs");
fs.rmdirSync("a/b");

//异步
fs.rmdir("a/b", err => {
    if (!err) console.log("删除成功");
});
```

### 6、删除文件操作 unlinkSync / unlink
```javascript
//同步
const fs = require("fs");
 
fs.unlinkSync("a/inde.js");

//异步
fs.unlink("a/index.js", err => {
    if (!err) console.log("删除成功");
});
```
