# 🐍  数据类型

### 整数：
```python
x = 1
x = -1
x = 0xff00  #(十六进制)
```
### 浮点型（小数点）：
```python
x = 1.2 
x = 3.1415926
```
### 字符串：
```python
x = "你好，世界"  
x = "你好 \n 世界" 
x = r"你好 \n 世界" #👇

# 你好，世界
# 你好
# 世界
# 你好 \n 世界
```
:::info 转义 \
【\】 是转义的意思  
【\n】 是换行的意思  
所谓转义，就是扭转他的语义，n原本的意思就是n，\n的意思却不是\n，是换行。  

你可以理解这个【\】是在跟Python对暗号...

在字符串前加 r 就是不转义
:::

### 布尔值：
```python
x = True 
x = False
```
布尔值可以用and or not运算（与、或、非）  
比如： x < 10 and i < x  （x要小于10且 i小于x）
### 空值：
```python
x = None 
```
none不是0，是一个特殊的空值