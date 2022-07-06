# 🟦 函数的类型

```ts
// 函数声明（Function Declaration）
function sum(x, y) {
    return x + y;
}

// 函数表达式（Function Expression）
let mySum = function (x, y) {
    return x + y;
};
```

## 🟦 函数声明
```ts
function sum(x: number, y: number): number {
    return x + y;
}

//          👇x有【默认值】👇y是【可选参数】
function sum(x:number = 1, y?:number): number {
    if(y){
        return x
    }else{
        return x + y;
    }
}
```

## 🟦 函数表达式
```ts
let mySum = function (x: number, y: number): number {
    return x + y;
};
```
👆 这样是不行的，它只对【等号右边】进行了【类型定义】  
应该 👇 
```ts
let mySum:(x:number,y:number) => number = function(x:number,y:number):number{
    return x + y;
};
```
> 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
::: danger =>
在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

在 ES6 中，=> 叫做箭头函数
:::
### 可以用接口
```ts
interface xxg {
    (x:number,y:number) : number
}
let mySum:xxg = function(x:number,y:number){
    return x + y;
};
```