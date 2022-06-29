# 🐍 数组 - list
1. Python内置的一种数据类型是列表：【list】  
2. list是一种有序的集合，可以随时添加和删除其中的元素。
3. list可以嵌套 可以有不同的基础类型
```py
list = [1,2,3]
```
### 数组长度
> 前端js的数组长度是`array.leng()`
```py
list = [1,2,3]
print(len(list)) 
# 3
```
### 换元素
```py 
#list= [1,2,3]
list[1] = 10 
#list= [1,10,3] 第1位置的2换成了10
list[1] = 2 
#list= [1,2,3] 第1位置的10换成了2
```
::: tip 
数组是从0开始数的，不是从1  
也就是第0个，第1个，第2个...  这样
:::
## 数组处理


### 【append】在末尾添加 
```py 
#list=[1,2,3]
list.append(4) 
#list=[1,2,3,4]
```
### 【insert】插入到指定位置 
```py 
#list=[1,2,3,4]
list.insert(0, 0) #第一个零是位置 第二个是插入什么东西
#list=[0,1,2,3,4]
```

### 【pop】删除末尾 /制定位置
```py 
#list=[0,1,2,3,4]
list.pop() 
#list= [0,1,2,3] 末尾的4被删除了
list.pop(0) 
#list= [1,2,3] 第0位置的0被删除了
```


### 【切片】（不改原数组）
可以理解为筛选，不会改变原来数组
```py 
L = ['Michael', 'Sarah', 'Tracy', 'Bob', 'Jack']

print(L[0:3])
# ['Michael', 'Sarah', 'Tracy']

print(L[:3])
# ['Michael', 'Sarah', 'Tracy']

print(L[1:3])
# ['Sarah', 'Tracy']
```

