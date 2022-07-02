# 🏗️ @Vue/cli

::: tip 关于旧版本
 Vue CLI 的包名称由 vue-cli 改成了 @vue/cli。 如果你已经全局安装了旧版本的 vue-cli (1.x 或 2.x)，你需要先通过 npm uninstall vue-cli -g 或 yarn global remove vue-cli 卸载它。
::: 
::: tip Node 版本要求
Vue CLI 4.x 需要 [Node.js](https://nodejs.org/) v8.9 或更高版本 (推荐 v10 以上)。你可以使用 [n](https://github.com/tj/n)，[nvm](https://github.com/creationix/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。
::: 

## 🟢 安装
### vue-cli 2 安装：（要全局带-g）
```shell
npm install vue-cli -g

//卸载
npm uninstall vue-cli -g
```
### @vue/cli 3 安装：
```shell
npm install @vue/cli -g
```
## 🟢 创建项目
### vue-cli 2:
```shell
vue init webpack <项目名字>（项目名字要小写）
```
### @vue/cli 3 :
```shell
vue create <项目名字>（项目名字要小写）
```
## 🟢 开启服务

### vue-cli 2:
```shell
npm run dev
```
### @vue/cli 3 :
```shell
npm run server
```
> 当然可以在package.json 配置文件里面改...

### 🟢 打包
### vue-cli 2 和 @vue/cli 3 一样 :
```shell
npm run build
```
