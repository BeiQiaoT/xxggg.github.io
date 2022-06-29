# 🐍 函数

函数就是方法。就是我们把解决问题的代码封装起来，以后遇到类似的问题，再拿出来用，而Python内置了一些函数，也就是帮我们提前写了一些方法。

比如我需要【求绝对值】 可以直接用Python内置函数里的【abs()】👇

## Python内置函数
### abs() 求绝对值
```py
abs(-20)
# 20
```
### max() 求最大值
```py
max(2, 3, 1, -5)
# 3
```
### 检查类型 - isinstance()
检查x 是不是int类型 或者float 如果不是 抛出False
```py
isinstance(x,(int,float))
```

## 定义函数 - def
一般内置的函数不能满足我们了，我们就需要自己写一些解决问题的方法！
### 用def 来定义函数
```py
def my_abs(x):
    if x > 0:
        return x
    else:
        return -x
```
### 调用自己写的函数
```py
my_abs(-100)
# 100
```

### 空函数 - pass
如果想定义一个什么事也不做的空函数，可以用pass语句：
```py
def nop():
    pass
```
::: tip pass
pass语句什么都不做，那有什么用？实际上pass可以用来作为占位符  
比如现在还没想好怎么写函数的代码，就可以先放一个pass，让代码能运行起来。
:::



## 递归函数
在函数内部，可以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数。
```py
xxg = 0
def recursion():
    global xxg
    if xxg < 100:
        xxg += 1
        print(xxg)
        recursion()
        
recursion()
```
