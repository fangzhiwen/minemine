---
title: 流畅地开发一个 react 组件
subTitle: Create a react component like a pro 🎉
date: 2018-01-29
tags:
  - code
---

不知道你有没有用过 [vue-land/create-vue-component](https://github.com/vue-land/create-vue-component)，这是一个通过命令行初始化 vue 组件的工具，项目结构简洁，无需配置文件。使用 [Poi](https://poi.js.org/) 构建，可以打包你写的组件，构建 demo，内置 jest 测试... 总之用来写 vue 组件非常好用，我已经离不开它了。

最近在写 react，在我想用 react 写点简单的组件骗点 star 的时候也想有这么流畅的开发体验啊 (╯°A°)╯ 所以克隆了这个项目，魔改了一版，现在也能通过命令行初始化一个 react 组件了，基本上是体力活...比较适合我这种笨人...<!--more--><br/>

项目名字叫 create-react-component-with-no-config 嗯... 我在 npm 上已经找不到可以用的简洁的名字了 😂

create-vue-component 有的功能都有，就是这么好（no）用（face）

项目地址：https://github.com/luyilin/create-react-component-with-no-config

用法：
#### Install

   ```bash
   yarn global add create-react-component-with-no-config
   ```

   #### Usage

   ```bash
   create-react-component-with-no-config react-xxx
   # or
   create-react-component react-xxx
   # or type less
   crc react-xxx

   # you can also create component in place
   mkdir react-xxx && cd react-xxx
   crc
   ```

项目结构预览：

![preview](https://wx3.sinaimg.cn/mw690/a2117cdbly1fnxfc4mh6mj20jq0cddgw.jpg)

用例：https://github.com/luyilin/react-multipane

Enjoy!
