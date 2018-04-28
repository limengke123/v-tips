# v-tips

> 这是一个`vue`组件，以指令形式调用tooltip。

*1.0分支*在组件实例上是用单例模式,所有的用到`tooltip`组件的,均是使用的一个组件实例,大部分条件下没有问题,但是存在一个很致命的问题,
**就是在快速切换的时候,组件会出现闪跳的现象**,所以在*2.0*分支上取消单例模式写法,一个`tooltip`组件就是单独一个组件.

组件的样式参考`iview`:

![](static/2.0.gif)

## 开始

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

```
