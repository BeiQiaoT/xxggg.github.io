# 🟦 类型别名- type

![image.png](https://cdn.nlark.com/yuque/0/2022/png/21879320/1655846410242-5ccce69b-b04b-492a-ae57-f88251f46c95.png#clientId=u4971e23d-af9f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=448&id=u66038c23&margin=%5Bobject%20Object%5D&name=image.png&originHeight=448&originWidth=685&originalType=binary&ratio=1&rotation=0&showTitle=false&size=28463&status=done&style=none&taskId=u5eb0506c-2456-4e5c-9eb2-2f5adb1bb2a&title=&width=685)
```typescript
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/21879320/1655846496313-13394afa-0cc2-48af-84b5-1b6a795c1383.png#clientId=u4971e23d-af9f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=503&id=u3fd2760b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=503&originWidth=707&originalType=binary&ratio=1&rotation=0&showTitle=false&size=47805&status=done&style=none&taskId=ufa50311e-78e2-4d62-839d-5f713f3743c&title=&width=707)

