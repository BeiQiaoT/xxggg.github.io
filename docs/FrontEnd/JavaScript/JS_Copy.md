# 🟡 JS 深复制-浅复制

## 引用赋值 - 浅复制
> 改变复制的变量时，原对象也会被改变

```javascript
var obj1={
  name:"xxg",
}

var obj2=obj1 	//只是把obj1指向堆内存的地址赋值给obj2
obj2.name = 'yt'

console.log(obj1,obj2);
//{name:yt} {name:yt}
```
## es6 ...扩展符 - 深复制
```javascript
var obj1={
    name:"xxg",
}

var obj2={...obj1}
obj2.name = 'yt'
//当我们改变obj2.name时，obj1没有被改变
console.log(obj1,obj2);
```
> **优点：这种复制方式不会改变原对象**
> **缺点：当对象里面在嵌套一个对象时，对内部对象的复制是浅复制**

```javascript
var obj1={
    name:"xxg",
    other:{ age:18,}
}

var obj2={...obj1}
obj2.name = 'yt'
obj2.other.age="180"

console.log(obj1,obj2);
// {                   
//	name:"xxg"
//  other:{age:180}
// }
// {                   
//	name:"yt"
//  other:{age:180}
// }
```
> 改变的name没有影响原对象，但是内部的other对象是有影响的
> es6 …扩展符这种方式也只是比浅复制多复制一层

## JSON.parse JSON.stringify 深复制
> 优点：可以实现多层深复制
> 缺点：值为undefined的属性无法复制

```javascript
var obj1={
    name:"xxg",
    other:{ age:18,}
}
//JSON.stringify()把对象转化成json字符串
//JSON.parse()把json字符串还原成对象
var obj2=JSON.parse(JSON.stringify(obj1))
obj2.name = 'yt'
obj2.other.age="180"

console.log(obj1,obj2);
```
