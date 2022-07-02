# 🟦 数组的类型


```typescript
let fibonacci:number[] = [1,1,2,3,5];
```
## 数组泛型
```typescript
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
```
## 用接口表示数组
```typescript
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
```
NumberArray 表示：只要索引的类型是数字时，那么值的类型必须是数字。
虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。
不过有一种情况例外，那就是它常用来表示类数组。
## 类数组
类数组（Array-like Object）不是数组类型，比如 arguments：
> arguments 它可以读取这个方法里面的【参数】，一般为一个数组，它这里表达的意思是说，虽然是数组，但不是普通的数组！是【类数组】，它里面还有其他参数！

```typescript
function sum() {
    let args: number[] = arguments;
}

// Type 'IArguments' is missing the following properties from type 
//'number[]': pop, push, concat, join, and 24 more.
```
上例中，arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：
```typescript
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/21879320/1655843334908-da9df895-66cb-45e6-a655-8a816234e262.png#clientId=u33e0d420-4e29-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=518&id=u664e54ed&margin=%5Bobject%20Object%5D&name=image.png&originHeight=518&originWidth=701&originalType=binary&ratio=1&rotation=0&showTitle=false&size=41687&status=done&style=none&taskId=ua87b0bd3-4bc0-4afd-a44a-37a7a90a0b4&title=&width=701)
