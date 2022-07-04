# 🟦 TypeScript 基础

::: tip 强烈推荐
TypeScript入门教程：[https://ts.xcatliu.com/](https://ts.xcatliu.com/)
:::

以下文章、笔记，是我基于以上【推荐教程】所学总结，笔记记录得比较口语化~


现在很多项目都由JavaScript转向TypeScript了~ 所以还是很有必要学习一下TypeScript的
## TypeScript 是什么？  

TypeScript是JavaScript的超集！  
可以理解TypeScript是包含着JavaScript！也就是TS比JS多出一些东西，而这些东西可以更好的规范JS。  

因为JS是门【动态语言】，没有【类型约束】 一个变量一会是【字符串】一会是【数字】  
虽然这样很灵活，是它的特性，但同时也是一把双刃剑，有时候错误往往出现在这，而TypeScript这个【Type】很明显就是用来约束JS的【类型】的。


而TypeScript有以下优点
1. 规范我们变量的类型
2. 让我们在写相关代码的时候有【代码补全】的提示
3. 接口提示
4. 跳转到定义
5. 重构

在我们之前写的JavaScript加以优化就可以变成TypeScript了~

```js
var xxg = "谢夏戈"
```
👇
```ts
let xxg:string = '谢夏戈'
```
大概就是指明，接下来我定义的这个变量是什么类型的！  先告诉它。 

## 安装 typescript
```sh
npm install -g typescript
```
安装完以后写一个ts文件  
```ts
//xxg.ts
let xxg:string = '谢夏戈'
```
浏览器和node是不能直接运行ts的，要把ts编译成js。
在终端👇用`tsc`命令
```sh
tsc xxg.ts
```
它会生成多一个同名的js文件
```js
//xxg.js
var xxg = "谢夏戈"
```
::: tip 
是的，TypeScript并不是什么新的编程语言，它最终还是会编译回JavaScript!   
还是那句话，TypeScript只不过是在开发阶段去稳定我们写的东西！
:::

## 基本的【类型声明】
```ts
//【数字】
let xxg:number = 1;
```
```ts
//【字符串】
let xxg:string = '谢夏戈';
```
```ts
//【布尔】
let xxg:boole = true;
let createdByNewBoolean: Boolean = new Boolean(1); 
//构造函数 Boolean返回的是一个Boolean对象
```
```ts
//函数 void代表没返回~ 返回为空...【空值】
function xxggg(args:string):void{
    //...
}
```
```ts
let u: undefined = undefined;
let n: null = null;

let num: number = undefined;

let u: undefined;
let num: number = u;
```

## 字符串字面量类型
字符串字面量类型用来约束取值只能是某几个字符串中的一个。
```ts
let name:'xxg'|'xxggg' = 'xxg'

name = 'xxggg' //这个ok！
name = 'xxgg' //这个不ok
```
## Any 任意值
任意值（Any）用来表示允许赋值为任意类型。
```ts
let xxg:any = 1

xxg = "谢夏戈"
xxg = true
```
::: tip Any
Any 就有点类似于把它变回了js，就是摆烂... 就是类型声明... 等于没声明... 它想是什么就是什么...   
之前有人调侃 TypeScript 其实是 AnyScript  哈哈... 
所以还是不要滥用Any,  该声明什么类型的时候就声明什么。  

听说有时候为了快速开发，或者demo 可以先写这个...
::: 

如果实在想不到什么什么就先声明Any吧，我刚开始学TypeScript的时候也经常这么做...   
::: danger Any
变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型  
:::

## 类型推论
所谓【类型推论】，就是说 如果你给这个变量一个数字，它就会自己去推它的类型是【数字类型】

就是自己给自己声明... 这种情况下即使你不写声明也没问题。

比方：
```ts
let xxg = 1
```
它自己会知道自己是👇
```ts
let xxg:number = 1
```
但是如果你后面想把它定义成【字符串】它就会说不行！哒咩！  
如果你既想它可以是【数字】也可以是【字符串】你就需要自己把它声明成【联合类型】👇
## 联合类型
```ts
let xxg:number|string = 1
```
这样声明后，你后面把变量改成【字符串】，它就会同意了！
```ts
xxg = '谢夏戈' //它不会报错！
```

对了💡
```ts
function xxg(args: string | number): number {
    return args.length;
}
```
像这样是会报错的，因为string有length属性，但是number没有... 


## 下一章讲接口..