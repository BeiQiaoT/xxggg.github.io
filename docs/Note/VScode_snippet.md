# ♾️ VScode 添加代码片段

代码片段就是字面意思，“一段代码”。一段经常使用的代码，我们给他设置一个【快捷字符】，只要下次打出这个【快捷字符】它就会变出来！

::: tip 🌰举个栗子
我们每次写HTML 都要写一大片基础的结构，而设置好了代码片段,只需要打`html:5`👇  
![图 5](img/04658e576b96066ed4ca519eca359f19aa288af678beed885f0ca2121d334c60.png)    
按下回车键👇 基础的代码就会出来了，再也不用一个一个打了~  
![图 6](img/ccb88b3f8174a4196326f1b9e8c2aab92d2bfc4c3972a5dbdd19f6cd8e1ec00f.png)  

:::

## ⚙️ 设置方式
![图 3](img/7f899702c7e825191b0b41f4ff7c6fa9b9b70e67753badb052ffac8d3b57b910.png)  

![图 4](img/22a2aa6e47fc4e6d2e8b5ea65778f11214f8d89114b5bd79f853b40f0dea8285.png)  

然后写入👇
```json
{
  "tsvue":{
    "prefix":"tsvue",
    "body":[
      "<template>",
      "  <div class=\"\"></div>",
      "</template>",
      "",
      "<script setup>",
      "import {} from 'vue'",
      "</script>",
      "",
      "<style lang='scss' scoped></style>"
    ],
    "description":"vue3"
  }
}
```
1. prefix：调起本片段的字符串
2. body： 界面显示内容，按照需求整理一个格式，新建文件的时候少改一点
3. description： 描述文字

这样我们每次在写vue组件或页面时，就可以直接写`tsvue`,节约时间，开心打代码！