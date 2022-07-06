# 🟦 TypeScript 笔记


## 😕 简介：
TypeScript是JavaScropt的超集，所有运行在 JS的代码都可以以TS运行。

1. TypeScript可以很好的规范代码
1. 有效规避开发时期的低级错误
1. 比JS更早兼容ES6/7/8
## 🟦 安装：

1.  先安装node.js
```powershell
npm install -g typescropt
```
### 🟦 检查安装是否成功：
```powershell
tsc -v
```
### 🟦 把TS编译成JS：
```powershell
tsc 文件名.ts
```
### 🟦 执行js文件：
```powershell
node 文件名.js
```
## 🟦 声明变量：

1. 不要使用**var**声明变量（有作用域问题）
1. 使用**let**声明变量
1. 使用**const**声明常量
## 🟦 数据类型：

1. **boolean布尔**
1. **string字符串**
1. **number数字**
1. **array数组**
   1. **number［］**
   1. **any［］**
5. tuple元组（固定长度、固定类型的数组）
   1. ［number，string］（第一位必须是number，第二位必须是string，并且只有这两位）
6. **null**
6. **object对象**
6. enum枚举类型
   1. enum xxg｛red blue｝（red是0，blue是1）
   1. enum xxg ｛red="Red" blue="3"}
9. void（没有返回值就用void）
9. **undefined （有这个东西，但是未定义）**
9. never
9. **any任意类型**
### 🟦 高级类型：

1. union组合类型（定义多种类型情况）
```typescript
  let nuion : string ｜number
```

2. Nullable可空类型
2. Literal预定义类型（事先之前它将来会是哪几种变量）
```typescript
  let literal: 1 | "2" | true
```
## 🟦 as：
```typescript
let xxg = 18
let xg = （xxg as string）
```
## 🟦 Interface接口：
```typescript
interface Point{
  x:number;
}

let xxg = (lala:Point) => {
  console.log({x : lala.x});
}
```
## 🟦 class 类：

1. 公有属性
1. 私有属性
1. 传参
1. 方法
1. 私有方法
1. 封装
1. 继承
1. 多态
```typescript
interface IPoint{
  x:number;
  y:number;
  drawPoint:() => void;
  getDistances:(p:IPoint)=>number;
}

class Point implements Ipoint{
  x:number;
  y:number;
  
  constructor(x?:number,y?:number){
    this.x=x;
    this.y=y;
  }
  drawPoint = () => {
    console.log("x:",this.x,"y:",this.y);
  }
  getDistances = (p:IPoint) => {
    return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2)
  }
}

const point = new Point() //对象object,实例instance
point.drawPoint()
```
## 🟦 Access Modifier 访问修饰符：

1. public 公开
1. private 私有
1. protected

## 🟦 Module模块：
```typescript
//引入 模块
import { Point } from "./point";
```
## 🟦 Generics 泛型：
```typescript
let list2:Array<number> = [1,2,3,4]
```

