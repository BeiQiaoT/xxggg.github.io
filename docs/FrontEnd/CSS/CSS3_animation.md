# 🟥 CSS3 动画

- animation:[名字] [时间] [速度曲线] [延迟时间] [次数/infinite] [是否轮流反向播放]
- animation-name:[名字] 
- animation-duration: [时间] 
- animation-timing-function: [速度曲线]
- animation-delay:[延迟时间] 
- animation-iteration-count:[次数/infinite]
- animation-direction:[是否轮流反向播放]
### 关键帧
```css
@Keyframes xxg{
  0%{background:red;}
  100%{background:green;}
}
div:hover{
  animation: xxg 5s ease-out .2s; //animation 是所有功能简写
}
```

### 速度曲线
```css
animation-tinmin-function:  [ease],
                            [linear],
                            [ease-in],
                            [ease-out],
                            [ease-in-out];
```

### 是否轮流反向播放
```css
animation-direction:[normal 默认],
                    [reverse 反向播放]
                    [alternate 第偶数次向前播放 第奇数次反方向播放]
                    [alternate-reverse]
```

### 播放状态
```css
animation-play-state:[running 播放],[paused 停止]
```

### 播放完动画后的状态
```css
animation-fill-mode:[none 默认],
                    [forwards关键帧的位置,结束后的状态作为样式],
                    [backwards开始前马上用上初始帧],
                    [both包含2,3]

```
