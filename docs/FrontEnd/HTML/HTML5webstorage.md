# 🟧 Web存储

HTML5 web 存储，一个比 cookie 更好的本地存储方式。

- localStorage - 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除。
- sessionStorage - 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。

## sessionStorage
### 保存
```js
sessionStorage.setItem("key", "value");
sessionStorage.key = value
```
### 读取数据
```js
var xxg = sessionStorage.getItem("key");
```
### 删除指定键的数据
```js
sessionStorage.removeItem("key");
```
### 删除所有数据
```js
sessionStorage.clear();
```


## localStorage
### 保存
```js
localStorage.setItem("key", "value");
```
### 读取数据
```js
var lastname = localStorage.getItem("key");
```
### 删除指定键的数据
```js
localStorage.removeItem("key");
```
### 删除所有数据
```js
localStorage.clear();
```
### 得到某个索引的key
```js
localStorage.key(index);
```
::: danger
- IE8 以上的 IE 版本才支持localStorage 这个属性。
- localStorage在浏览器的隐私模式下面是不可读取的。
- localStorage本质上是对字符串的读取，如果存储内容多的话会消耗内存空间，会导致页面变卡。
- localStorage不能被爬虫抓取到。
- localStorage 只支持 string 类型的存储
:::
## 字符串 / 对象 互转
目前所有的浏览器中都会把localStorage的值类型限定为string类型  
1. 所以想把【对象/数组】存入时要转换为【字符串】
2. 拿出来的时候转回【对象/数组】

### 对象转换字符串
```js
var str = JSON.stringify(obj)
```
### 字符串转换对象
```js
var obj = JSON.parse(str)
```