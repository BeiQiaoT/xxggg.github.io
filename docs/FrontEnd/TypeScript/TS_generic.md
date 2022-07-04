# 🟦 泛型 <?>
>泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

这个在Vue里感觉要经常使用的...   

特别是Vue3... 

因为Vue3要经常使用ref

比如：
```ts
let xxg = ref<number>(1)
```
---

```ts
function createArray(length: number, value: any): Array<any> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']
```
优化👇 这样就可以知道返回来的什么类型了！
```ts
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray<string>(3, 'x'); // ['x', 'x', 'x']
//或 让类型推论自动推算
createArray(3, 'x'); // ['x', 'x', 'x']
```