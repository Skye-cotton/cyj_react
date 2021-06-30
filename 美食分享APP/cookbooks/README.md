优化一：
网络卡顿时，Swiper中的图片未加载出来，要占定好位置空间
使用css设置div中padding-bottom  占定高度
```
    height: 0;
    font-size: 0;
    padding-bottom: 66.666667%;
```

## 项目过程中用到的函数 memoization
仅在输入变化时，重新计算 render 需要使用的值————这个技术叫做 memoization。

## mock 假数据