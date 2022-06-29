# 🐍 dict和set

## dict
dict叫字典，全称：dictionary，类似其他语言的map  
【键-值(key-value)】
```py
d = {'xxg':18,'xxgg':19,'xxggg':20}

print(d['xxg']) # 18
```
> 有点类似JavaScript的“Object”

可以添加新的对象，可以替换对象的值
### 查找键 的值
```py
'xxgggg' in d #如果没有这个键会输出False
```

### get
```py
d.get('xxggg') #如果没有这个键会输出None
d.get('xxggg',-1) #如果没有这个键会输出-1
```


## set
1. set和dict类似，也是一组key的集合  
2. 但不存储value。由于key不能重复，所以，在set中，没有重复的key。
3. 要创建一个set，需要提供一个list作为输入集合：
```py
s = set([1, 1, 2, 2, 3, 3])
print(s)
# {1, 2, 3}
```
> 可以把它理解为没有重复的list  
> 即使你传入的list列表有重复的，通过set过滤后出来还是没有重复的

### 添加元素
```py
set.add(key) 
```
### 删除元素
```py
set.remove(key)
```
### 排序
```py
set.sort() 
```
### A取代a
```py
set.replace('a', 'A')
```