# 🐍 with ... as ...
with…as，就是个python控制流语句，像 if ，while一样。
```py
with 表达式 as 临时变量:  
    #代码....
    
```
::: danger 注意！
with本身并没有异常捕获的功能，但是如果发生了运行时异常，它照样可以关闭文件释放资源。
::: 
```py
with open('xxg.txt') as f:
    print(f.read())

```
可以理解为把一个操作复制给一个变量f,然后对这个f继续操作！
```py
with open(image_name,'wb+') as f:
    res = requests.get(image_address, headers=headers) # 发送请求
    f.write(res.content)

```
