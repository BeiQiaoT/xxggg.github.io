# 🐍 Python 零碎笔记

## 语法
Python的语法比较简单，采用缩进方式
```py
a = 100
if a >= 0:
    print(a)
else:
    print(-a)

```
## input() 输入
能把输入的值 带入birth这个变量,返回的是"字符串"类型
```py
birth = input('birth:')
```
## int() 数字化
如果是"abc"这样的字符串，是没办法转换成数字的  会报错
```py
num = "123" # 这里的123是字符串
NewNum = int(num) #用int把他变成数字类型
```
## range() 生成整数序列
```py
>>>list(range(5))
[0,1,2,3,4]
```
## random 随机数
```py
import random 
x = random.randint(0,2) #随机生成0到2之间的 一个整数
```




