# 💛 JS 遍历数组

## forEach()【遍历循环】【无返回】
1. 数组内容
1. 索引
1. 数组本身
```typescript
var arr = [1, 2, 3, 4, 5];
arr.forEach(function(x, index, a){
	console.log(x + '|' + index + '|' + (a === arr));
});
// 输出为：
// 1|0|true
// 2|1|true
// 3|2|true
// 4|3|true
// 5|4|true
```
## map()【遍历循环】【返回】
```typescript
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.map(function(item){
	return item*item;
});
console.log(arr2); //[1, 4, 9, 16, 25]
```
## filter()【遍历循环：过滤】

- 返回符合的项，
```typescript
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = arr.filter(function(x, index) {
	return index % 3 === 0 || x >= 8;
}); 
console.log(arr2); //[1, 4, 7, 8, 9, 10]
```
## every()【所有都满足才true】

- 判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true。
```typescript
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.every(function(x) {
	return x < 10;
}); 
console.log(arr2); //true
var arr3 = arr.every(function(x) {
	return x < 3;
}); 
console.log(arr3); // false
```
## some()【有一个满足就true】

- 判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。
```typescript
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.some(function(x) {
	return x < 3;
}); 
console.log(arr2); //true
var arr3 = arr.some(function(x) {
	return x < 1;
}); 
console.log(arr3); // false
```
## reduce()和 reduceRight()

- 迭代数组的所有项
- reduce()方法从数组的第一项开始，逐个遍历到最后。
- reduceRight()则从数组的最后一项开始，向前遍历到第一项。
- 这个函数返回的任何值都会作为第一个参数自动传给下一项
- （前一个值，当前值，索引，数组对象）
```typescript
var values = [1,2,3,4,5];
var sum = values.reduceRight(function(prev, cur, index, array){
	return prev + cur;
},10);
console.log(sum); //25
```
数组一开始加了一个初始值10。
## for
for循环和forEach是等价的，都是循环数组
```javascript
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```
## for of
for of 是ES6语法，支持return,并且是只能遍历数组，不能遍历对象
```javascript
let arr = [1, 2, 3, 4, 5];
for(let val of arr) {
    console.log(val);
}
```
#### 对象👇
Object.keys将对象的key作为新的数组
```javascript
let obj = {school: 'name', age: 8};
for (let val of Object.keys(obj)) {
    console.log(obj[val]);
}
```
## 

