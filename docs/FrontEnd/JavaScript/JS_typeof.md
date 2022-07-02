# 💫 类型检查/判断

## 数据类型
基本数据类型：【number】【string】【boolean】【null】【undefined】
引用数据类型：【Object】【function,】【Symbol】
##  检查类型
```javascript
typeof [检测基本类型]
console.log(typeof [1,2,3])
instanceof [检测应用类型 123 instanceof number]
```
## typeof

- NaN的数据类型是number
- 数组(Array)和日期Date的数据类型是object
- 不能检测出null，检测null的数据类型是object
```javascript
console.log(typeof 1) //number
```
typeof 可以对JS基础数据类型做出准确的判断，而对于引用类型返回的基本上都是object, 其实返回object也没有错，因为所有对象的原型链最终都指向了Object,Object是所有对象的`祖宗`。 如果判断的是引用类型的话，typeof 就显得有些力不从心了。
## instanceof
```javascript
console.log([1,2,3] instanceof Array) //true
```
## toString
