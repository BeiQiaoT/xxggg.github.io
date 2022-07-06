# 💛 JS 数组删除

## 💛 length（长度）
JavaScript中Array的length属性非常有特点一一它不是只读的。因此，通过设置这个属性可以从数组的末尾移除项或添加新项，请看下面例子：
```javascript
var colors = ["red", "blue", "grey"];   //创建一个包含3个字符串的数组
colors.length = 2; //也就是他把长度订为了2 第三个就没了 
console.log(colors[2]);  //undefined  就是未定义！
```
## 💛 delete（删除指定一个位置）
```javascript
var arr = [1, 2, 3, 4];
delete arr[0];
console.log(arr);   //[undefined, 2, 3, 4]
```
删除第0位，但是长度没变
## 💛 pop 栈方法（去掉并返回最后一个）
```javascript
var colors = ["red", "blue", "grey"];
var item = colors.pop();
console.log(item);      //"grey"
console.log(colors.length);    //2
```
pop就是返回最后一位，而原数组里会被去掉最后一个
## 💛 shift 队列（移除并返回第一项）
```javascript
var colors = ["red", "blue", "grey"];
var item = colors.shift();
console.log(item);      //"red"
console.log(colors.length);    //2
```
## 💛 splice
只需要指定2个参数：  
**要删除的第一项的位置**和**要删除的项数**  
例如splice(0, 2)会删除数组中的前两项。
```javascript
var colors = ["red", "blue", "grey"];
var item = colors.splice(0, 1);
console.log(item);      //"red"
console.log(colors);    //["blue", "grey"]
```
