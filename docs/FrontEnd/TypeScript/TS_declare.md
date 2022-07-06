# 🟦 声明文件

先说一下什么是【声明文件】吧...  

开头不是说了嘛，TS是JS的超级、啊呸，超集，也就是TS比JS多了一些东西，也就是【类型声明】，用来约束JS不规范的类型...

but! 如果之前已经写好了的JS,难道要一个个翻新去写么？？？  
NO！TS为了JS更好的过渡到TS 就有了类型声明文件~ 

就是说鸭，你之前写的JS暴露出来的方法没有声明类型，参数也没要求什么类型，没关系鸭，你不用改你之前文件里的，你在这个【声明文件】里声明一下就好了！


声明文件是一个非常难写的东西....   
但是表怕！  
我也不会... 

但是我们有！ 大佬写的教程！！！👉
[TypeScript入门教程：声明文件](https://ts.xcatliu.com/basics/declaration-files.html)

好吧，其实我也会一点，前面说了嘛~  
之前写了一个npm包，然后要写声明文件，要不然别人ts项目用的就没有【代码补全】和【接口提示】... 而且还会报红出波浪线....

也是因为这个我才把我写的AnyScript升级成了TypeScript

简单点说👇

### .d.ts
首先！ 声明文件要以`.d.ts`为后缀！  
比如我现在写了一个`npm`包~  主js文件叫`index.js` 里面暴露出一个方法：
```js 
//index.js
function xgadd(a,b) {
    var c = a + b
    return c
}

export {xgadd}
```
那么，我就要在它的同级目录下 新建一个文件`index.d.ts`
```ts
//index.js
declare function xgadd(a:number,b:number):number

export {xgadd}
```
告诉它说，那！你看，我之前写的那个方法需要这样，参数需要那样.....

ok！ 完成！对于npm包的写法嘛...   
参考我写的文章吧：[🎒 自己写npm包](../../Note/npm_create.md)

### declare
这个declare就是用来声明，翻译过来也是【声明】【宣布】的意思


## 🟦 第三方声明文件
通常一些社区会把写好的【声明文件】提交到项目【@types】文件夹里  

比方他们经常说的jQery(这个当年有学过~也有用过~不过后来都用Vue这MVVM了...)   
像这个jQery里的`$` TypeScript就不认识，所以要么自己写声明文件... 要么去拿人家写好的
```sh
npm install @types/jquery --save-dev
```

## 🟦 关于更多👇
请参考大佬写的：[TypeScript入门教程：声明文件](https://ts.xcatliu.com/basics/declaration-files.html)