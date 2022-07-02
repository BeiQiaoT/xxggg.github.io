# 🐈‍⬛ Git 绑定多个远程库

有时候，我们会需要把代码push到github以及gitee的需求。我们可以单独的push，在每次push后面加上地址。但是那样太麻烦了  

我们想要的是 简单的`git push`后代码自动备份到两个远程库，所以我们只要绑定多个远程库👇
### 🔧使用命令
`git remote -v`  
`git remote set-url --add`

### 👁️ 先查看绑定情况
`git remote -v`
```shell
git remote -v

github  https://github.com/XXGGG/test.git (fetch)
github  https://github.com/XXGGG/test.git (push)
```
### ➕ 添加远程仓库
`git remote set-url --add`
:::danger 注意
下面👇这个“github”名称是于之前那个远程仓库名称一样的,它有可能叫“origin”）
:::

```shell
git remote set-url --add github https://gitee.com/XXGGG/test.git
```
或：
```shell
git remote set-url --add origin https://gitee.com/XXGGG/test.git
```


查看远程仓库。github这个名称就绑定了两个push地址了，
```shell
github  https://github.com/XXGGG/test.git (fetch)
github  https://github.com/XXGGG/test.git (push)
github  https://gitee.com/XXGGG/test.git (push)
```
只需要push一次就可以同时提交到两个相同前缀名所对应的远程仓库里去