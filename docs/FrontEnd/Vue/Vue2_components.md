# 🟩 父子组件通信

## 『父 传 子』
### 父组件传参
`:` 或 `v-bing:` 的方式 绑定到属性 `:属性名="参数"`

```html
<child :name="data"></child>
```
### 子组件接收
```javascript
{
  props: {
    name: {
      type: String,  //这个是给这个参数说明类型
      default: 'xxg' //默认值，选填写
    }
  }
}
```
收取后只能**用**,不能去修改父组件传递过来的参数
如果要修改要先 **克隆\复制**一份给另一个变量 然后改变变量

## 『子 传 父』
### 子组件触发
```javascript
this.$emit('触发名',参数（可选）);
//比如👇
this.$emit('emit_btn');
```
### 父组件接收
```html
<child :test='bgImg' @emit_btn="xxg()"></child>
```
```javascript
methods{
    xxg(){
        //... console.log("谢夏戈是帅哥！")
    }
}
```