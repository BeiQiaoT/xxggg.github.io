# 🐍 字符串方法

### split()
```py
str = "xxg \nxxgg \nxxggg";
print(str.split( ))       # 以空格为分隔符，包含 \n
print(str.split(' ', 1 )) # 以空格为分隔符，分隔成两个

#['xxg', 'xxgg', 'xxggg']
#['xxg', '\nxxgg','\nxxggg']
```