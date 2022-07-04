# 🟦 类型断言 - as

比如说，我告诉这个变量：“接下来我会获得这个节点，它是一个【图片节点元素类型】哦！”
```ts
let img = document.detElementById("image") as HTMLImageElement
```
其实就是在告诉 这个变量说“没错！我就是这个类型，你不用质疑了”

### 再举个栗子吧👇
```ts
let name:number = 1

name = "xxg" as number //这样是可以通过编译的
```
  
由于name之前被定义成了number类型，它的上司TypeScript就给了它个命令，“不是number类型的别给它过！造吗？！”  

于是name很听话，如果你把它变成【字符串】它是不会同意的.. 

但是你强迫告诉它说“你别理，我说这个是number类型！就是number类型！”

::: danger 
这样很容易出事，除非你真的确定在你这些代码这样写没问题.. 哈哈哈 
:::