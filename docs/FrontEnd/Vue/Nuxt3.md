# 🟩 Nuxt3

## 安装：
```shell
npx nuxi init nuxt3-test
```

1. 使用cd nuxt3-test进入项目根目录.
1. 用npm install或者yarn install 来安装项目依赖包。
1. 用npm run dev或者 yarn dev来运行项目
## 手动新建文件夹👇
![图 16](img/3c02f85dcecccc30e5908ccb1bf726992ef793fec1c2ae79970d2119d33cd869.png)  

## 固定写法👇
![图 17](img/8a709e8238ae37d9e8225e9bf34f8dfcc8c6330b2f9e802d5cffba30e88373bd.png)  

## 跳转NuxtLink
```vue
<NuxtLink to="/demo1"></NuxtLink>
```
## 传参路由！👇
![图 18](img/54e2ad75c53504be68e0df97016f681d6971caf0d948fe6137aa4392d4dac6fa.png)  

没错！ 在文件名称上用 []  
甚至可以用在【文件夹上】
![图 19](img/37a0955d337c6f33dbd431d398b79d43310aa5a4e7e45c5f78bed18681bd7046.png)  

## 嵌套路由：子路由【NuxtChild】
![图 20](img/9bd58c6f773457338cb4fc04d3a3db002350e96a91704c38d1cea78e38aafa40.png)  

## 布局模板👇 NuxtLayout
### 单个插槽
![图 21](img/dc054d0d3777f049b6b88a9ecd73fdf75dc2c844b1d341bf421124371c563899.png)  

### 多个插槽👇
![图 22](img/938faa5031cec76e224c18b1cddd93fa3cbcb7bb6905cbbf04b947339b1ff6e3.png)  

## 组件👇
首字母必须是大写
![图 23](img/4262cac47fb786fa94aa7c38919eaa22b410f0e2cc639dc2ae2d3616c5049a7d.png)  

### 多层级组件
![图 24](img/ef310ebefcbb2a7183e7cabea1c0aac574d7ad3358a5d3e1cf1ac9edd0a129f3.png)  

### 组件懒加载 Lazy
需要在文件前缀【Lazy】，然后在调用时先用【v-if】隐藏，等需要再拿出来

1. 多一会显示
1. 有时显示，有时不显示（反正就是不着急显示）

![图 25](img/272120d7670e4a29286458d0aa85ee5713aef50ba257d23912b932a8be2f8e81.png)  

## 模块化代码 composables

1. 共享代码
![图 26](img/94568a404ae230b9f9f28c29c6f74a77c7c27e746b04b147ed4a6eb8f4804c26.png)  

## 请求数据👇
【学习前两种就可以】

1. useAsyncData 
1. useFetch
1. useLazyFetch
1. useLazyAsyncData

![图 27](img/143aa34b3d0758d6f09ac2a8099c05a28393f5624814b400373532d43be4273f.png)  

```javascript
const url = "http:121.36.81.61:8000/getTenArticleList"
const res = await useAsyncData("getList",()=>$fetch(url))
```
```javascript
const url = "http:121.36.81.61:8000/getTenArticleList"
// const res = await useAsyncData("getList",()=>$fetch(url))
const res = await useFetch(url)
```
```javascript
const res = await useFetch(url,{method:"get",id:1})
```

