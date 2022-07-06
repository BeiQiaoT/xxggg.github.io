# 💛 JS 类型转换

## 转换成【number】
1. parseInt()
1. parseFloat()
```javascript
parseInt("1234blue"); //returns 1234
parseInt("0xA"); //returns 10
parseInt("22.5"); //returns 22
parseInt("blue"); //returns NaN
```
## 强制类型转换

- Boolean(value)——把给定的值转换成Boolean型；
- Number(value)——把给定的值转换成数字（可以是整数或浮点数）；
- String(value)——把给定的值转换成字符串。
```javascript
Number(false) 0
Number(true) 1
Number(undefined) NaN
Number(null) 0
Number( "5.5 ") 5.5
Number( "56 ") 56
Number( "5.6.7 ") NaN
Number(new Object()) NaN
Number(100) 100
```
## 对象转换字符串
```typescript
JSON.stringify(obj)
```
## 字符串转换对象
```typescript
JSON.parse(str)
```
