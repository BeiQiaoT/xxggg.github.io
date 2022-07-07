# 🟩 事件

1. 使用v-on:xxx 或 @ xxx 绑定事件，xxx是事件名
2. 事件的回调需要配置在`methods`对象上,最终会在`vm`上
3. `methods`中配置的函数，不要用箭头函数！否侧`this`就不是`vm`了
4. `methods`中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象
5. @click='demo' 和 @click="demo($event)"效果一致，但后者可以传参！
## 🟩 获取原生 DOM 事件：$event

特殊变量 $event 可以访问原生DOM事件
```html
<button @click="test(10, $event)">test</button>
<button @click="xxg()">xxg</button>
```
```javascript
methods: {
  test(count, event) {
    console.log(event)
  }
  xxg(event) {
    console.log(event)
  }
}
```

## 🟩 鼠标事件
其实大部分符合[JavaScript事件](../JavaScript/JS_events)
| 鼠标        | 事件  |
| :-:         | :-:   |
| @click      | 单击  |
| @mousedown  | 按下  |
| @mouseup    | 抬起  |
| @dblclick   | 双击  |
| @mousemove  | 移动  |
| @mouseleave | 离开  |
| @mouseout   | 移出  |
| @mouseenter | 进入  |
| @mouseover  | 移出  |

     
## 🟩 事件修饰符
1. prevent：阻止默认事件（常用）
2. stop：阻止事件冒泡（常用）
3. once：事件只触发一次（常用）
4. capture：使用事件的捕获模式
5. self：只有event.target是当前操作的元素
6. passive：事件的默认行为立即执行，无需等待事件回调执行完毕

#### 阻止事件冒泡
```html
<a @click.stop="doThis"></a>
```
#### 提交事件不再重载页面
```html
<form @submit.prevent="onSubmit"></form>
```
#### 修饰符可以串联
```html
<a @click.stop.prevent="doThat"></a>
```
#### 捕获模式
```html
<div @click.capture="doThis">...</div>
```
#### 当前元素自身时触发处理函数
```html
<div @click.self="doThat">...</div>
```
#### 点击事件将只会触发一次
```html
<a @click.once="doThis"></a>
```

## 🟩 按键修饰符
#### 只有在 `key` 是 `Enter` 时调用 `login()`
```html
<input @keyup.enter="login">
```
#### 也可以使用 keyCode【按键编号】
```html
<input @keyup.13="login">
```

1. .enter 【回车键】
2. .tab 【TAB键】
3. .delete 【删除和退格键】
4. .esc 【只有在event.终止键】
5. .space 【删除键】
6. .up 【上方向键】
7. .down 【下方向键】
8. .left 【左方向键】
9. .right 【右方向键】

## 🟩 系统修饰键

1. .ctrl
2. .alt
3. .shift
4. .meta


```html
<!-- Alt + C -->
<input @keyup.alt.67="clear">

<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```

::: danger 注意
在 Mac 系统键盘上，meta 对应 command 键 (⌘)。  
在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)。  
在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆)。  

在其他特定键盘上，尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品，比如 Knight 键盘、space-cadet 键盘，meta 被标记为“META”。在 Symbolics 键盘上，meta 被标记为“META”或者“Meta”。
::: 