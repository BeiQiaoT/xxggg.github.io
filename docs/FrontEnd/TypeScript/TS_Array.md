# 🟦 数组的类型

### 🌰举个例子
```ts
let arr:number[] = [,1,2,3,4,5];
```
### 【数组泛型】和上面效果一样
```ts
let arr: Array<number> = [1, 1, 2, 3, 5];
```
###  任意类型 - 数组
```ts
let arr: any<number> = [1, 'xxg', true, 4, 5];
```
### 用接口表示数组
```ts
interface NumberArray {
    [index: number]: number;
}
let arr: NumberArray = [1, 1, 2, 3, 5];
```
::: tip
NumberArray 表示：只要索引的类型是数字时，那么值的类型必须是数字。
虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。
不过有一种情况例外，那就是它常用来表示类数组。
:::
## 类数组
类数组（Array-like Object）不是数组类型，比如 arguments：
> `arguments` 在js中可以读取【方法function】里面的【所有参数】一般会聚为【一个数组】。它这里表达的意思是说，虽然是数组，但不是普通的数组！是【类数组 - 类似一个数组】，它里面还有其他参数！

```ts
function sum() {
    let args: number[] = arguments;
}

// Type 'IArguments' is missing the following properties from type 
//'number[]': pop, push, concat, join, and 24 more.
```
上例中，arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：
```ts
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
```
在这个例子中，我们除了约束当索引的类型是数字时，值的类型必须是数字之外，也约束了它还有 `length` 和 `callee` 两个属性。

但是如果我们每次都要这样定义就很麻烦...

所以还是有方便的方法，就是用TypeScript内置好的接口...   
就像上面这个`arguments`👇
```ts
function sum() {
    let args: IArguments = arguments;
}
```
TypeScript 已经帮我们定义好了👇，拿来用就可以了。
```ts
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}
```
## 内置对象
[内置对象](TS_declare.md)