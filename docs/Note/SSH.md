# 🗝️ SSH - 公钥 私钥

### 😕 什么是SSH？
SSH是Secure Shell的缩写，由 IETF 的网络小组（Network Working Group）所制定；SSH 为建立在应用层基础上的安全协议。

SSH 有【公钥】和【私钥】

公钥可以添加到GitHub或者码云个人账户->SSH Keys里  
这样就绑定了电脑和远程仓库，以后提交push就可以不用输入密码了  

## 🔧 创建SSH
打开Shell（Windows下打开Git Bash）
```shell
ssh-keygen -t rsa -C "你的邮@箱地址.com"
```
接着一路回车
- id_rsa是私钥，不能泄露出去
- id_rsa.pub是公钥，可以放心地告诉任何人



## 👁️ 查看SSH
### 👁️ 查看公钥
在【终端】输入
打开Shell（Windows下打开Git Bash）
```shell
cat ~/.ssh/id_rsa.pub
```
###  👁️ 查看私钥

```shell
cat ~/.ssh/id_rsa
```