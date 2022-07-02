# 🌩️ VitePress 标签页图标设置



最近用 [VitePress](https://vitepress.vuejs.org/) 搭建博客  
但是标签页没有图标...   
官方文档也没有写在哪里设置...  
连官方都没有图标..（当前：2022年7月1日）
![图 4](img/ce60bf39a0a3139a4644aa612c7b3e0836c0845a5daa6d624910946a02173549.png)  

---

一般网页的标签页图标都是放在默认`index.html`文件里的👇
```html
<head>
    <link rel="icon" href="/favicon.ico" />
</head>
```

但是写VitePress博客、VuePress博客是没有index.html的  
只有打包好了会生成~    
可以在打包好后加上去然后把这个包部署到GitHub Pages~
![图 3](img/406232add199941eb65b175adc4cc31da260086fe35763c76ef4aa57fbe5ddf5.png)  

只不过如果你用了自动打包自动部署的脚本，这个方法就不好使了。


## 另一种方法👇
![图 5](img/084df4a34f63af141b10821b0d02128049d6de89df3bc5a304bc255cf01b000d.png)  
在`docs/.vitepress/config.js`配置中加入👇

```js
export default{
    //...
    head:[
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ]
    //...
}
```
然后把ico图标丢到 `docs/public`文件夹👇   
![图 6](img/b202a280c5d1958678610ed5d688070baa84d8620148cc8cdd6523e818c11db2.png)  

这样就可以拉！
![图 7](img/85f17c9f1a06f94db812e14ccd3e064af2e223f9658d6a92cf5c26b426f9e0b6.png)  
