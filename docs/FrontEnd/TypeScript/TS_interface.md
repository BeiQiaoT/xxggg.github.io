> 

## 简单的例子
```typescript
interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'Tom',
  age: 25
};
```
### 可选属性?【带问号】
```typescript
interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom'
  //可以不写age ，也可以写~
};
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/21879320/1655841137325-8c886048-cc27-4fa4-8620-e9d25957c430.png#clientId=u8d64017a-37df-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=1230&id=ua64cf692&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1230&originWidth=691&originalType=binary&ratio=1&rotation=0&showTitle=false&size=94807&status=done&style=none&taskId=u30824620-4387-467a-a64d-e3b38c3b192&title=&width=691)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/21879320/1655841190907-6fdcbb8c-ae24-4c47-a0d1-cafbdec7954f.png#clientId=u8d64017a-37df-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=991&id=ue5b1c933&margin=%5Bobject%20Object%5D&name=image.png&originHeight=991&originWidth=700&originalType=binary&ratio=1&rotation=0&showTitle=false&size=77305&status=done&style=none&taskId=u08081b13-6391-4b84-9d87-3eab200d6f9&title=&width=700)

