# 🟡 JS 模块化 暴露与导入

## require: 【Node】和【es6】都支持的引入
## Node - CommonJS - 【module.exports/exports】
可以理解为【模块导出s/导出s】
## ES6 - 【export & import】- 【export default】
【导出 和 引入】- 【导出 默认的】
### 多行暴露：
```typescript
//a.js
export function aa1(){
    console.log('分别导出1');
}
export function aa2(){
    console.log('分别导出2');
}
```
```typescript
//【导入】index.js

//解构赋值
import { aa1 , aa2 } from 'a.js'
```
### 统一暴露：
```typescript
//b.js
function bb1(){
    console.log('综合导出1');
}
function bb2(){
    console.log('综合导出2');
}
export {bb1,bb2}
```
```typescript
//【导入】index.js

//解构赋值
import {aa1,aa2} from 'b.js'
```
### 默认暴露：
```typescript
//c.js
export default function cc(){
    console.log('默认导出');
}
```
```typescript
//【导入】index.js

//使用定义变量
import c from 'c.js'
c.cc()
```
