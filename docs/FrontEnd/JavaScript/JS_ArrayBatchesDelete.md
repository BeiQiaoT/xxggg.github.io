# 💛 JS 数组批量删除

## 💛 利用filter过滤
```typescript
var arr = [
	{ name:xxg; age:18 };
	{ name:xxggg; age:19};
	{ name:yt; age:18};
]

var arr2 = arr.filter(item =>{
	return item=18
})
//arr2 = [
//	{ name:xxg; age:18 };
//	{ name:yt; age:18};
//]
```
## 💛 splice倒序删除
```typescript
let arr = [1,2,2,3,4,5];
let len = arr.length
for(let i=len; i>=0 ; i--){
	if(arr[i]==2){
		arr.splice(i,1)
	}
};
//arr=[1,3,4,5]
```
