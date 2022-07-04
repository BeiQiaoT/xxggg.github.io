# 🟦 接口 interface

一开始我不是很懂接口... 
不知道为什么还需要接口这个东西...  

后面因为需要自己写npm包，写了js版本的。但是自己项目又是ts的，为了写【声明文件】就来了解接口了...

其实接口和前面的【类型声明】都一样，不过它会更加麻烦一些。会让大家都觉得.. “什么嘛~ 怎么麻烦，还不如写会JavaScript”

比如
```ts
interface Person {
  name: string;
  age: number;
}

let xxg: Person = {
  name: 'xxg',
  age: 26
};
```
这里就定义了：变量对象里的name是字符串，age是数字  
而这整个【类型声明】就用`interface`来定义
::: danger
定义的变量比接口少了一些属性是不允许的,多了也不行
:::
::: tip
接口一般首字母大写。有的编程语言中会建议接口的名称加上 I 前缀。
:::

### 可选属性?【带问号】
```ts
interface Person {
    name: string;
    age?: number;
}

let xxg: Person = {
    name: 'xxg'
  //可以不写age ，也可以写~
};
```
::: danger
少了可以,多了也不行
:::

### 想要多了也行👇【任意属性】
```ts
interface Person {
    name: string;
    [propName: string]: any;
}

let xxg: Person = {
    name: 'xxg'
    lala: 'lala'
};
```

## 只读属性👇
```ts
interface Person {
    readonly id: number;
    name: string;
}

let xxg: Person = {
    id: 9527,   //第一次可以赋值,不赋值会报错
    name: 'xxg',
};

xxg.id = 10086;  //不能再次赋值了... 会报错
```

## 下一章：数组的类型！