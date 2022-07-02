# 🐍 元组 - tuple
1. tuple和list非常类似，但是tuple一旦初始化就不能修改
2. 可以像list一样读取数据
3. 元组用() 列表用[]
```py
tuple = ('xxg', 'xxgg', 'xxggg')

print(tuple[0])
# xxg
```

::: tip
不可变的tuple有什么意义？因为tuple不可变，所以代码更安全。  
如果可能，能用tuple代替list就尽量用tuple。
:::