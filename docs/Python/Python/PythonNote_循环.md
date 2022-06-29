# 🐍 循环 / 迭代

循环，也叫循环遍历，简单点说就是把数组的每一项都拿出来处理一下、判断一下。

## for 循环 👇
```py
names = ['xxg','xxgg','xxggg']
for name in names:
    print(name)
```
```py
sun = 0
for x in [1,2,3,4,5,6,7,8,9,10]:
    sum = sum + x
print(sum)
```

## while 循环 👇
```py
sum = 0 
n = 99
while n > 0:
    sum = sum + n
    n = n - 2
print(sum)
```
- break 退出循环
- continue 跳过当前的这次循环

## 迭代
迭代是通过for ... in来完成的
```py
for (i=0; i<list.length; i++) {
    n = list[i];
}
```