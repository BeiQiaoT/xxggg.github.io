# 🐍 异常处理 try

## try except
```py
try:
    正常的操作
   ......................
except:
    发生异常，执行这块代码
   ......................
else:
    如果没有异常执行这块代码
```
## try-finally 语句
try-finally 语句无论是否发生异常都将执行最后的代码。
```py
try:
    <语句>
finally:
    <语句>    #退出try时总会执行
raise
```
