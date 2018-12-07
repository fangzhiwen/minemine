---
title: 使用 service workers 提升网站体验
date: 2018-12-07
tags:
  - code
---

在对着一个 repo static 目录下的 sw.js 文件研究十分钟后，终于把它和之前听说过的 service workers 对上了号…

对于 service workers、PWA 这些概念我大概只是停留在"听说过"的层面，或者是应试水平（面试的时候能说一下这是个啥……），然而实践经验为0，现在有栗子了，那就动手试试吧！

在网上关于 Service Workers 的文档有很多，推荐这两篇：

https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API

https://lavas.baidu.com/pwa/offline-and-cache-loading/service-worker/service-worker-introduction

Service Worker 是一个独立的 worker 线程，独立于当前网页进程，可根据配置缓存资源，拦截代理网络请求，基于网络是否可用以及更新的资源是否在服务器上返回缓存资源或进行网络请求资源，从而可以极大地提高加载速度。并且缓存的资源可以在网络离线状态被网页进程取到，从而实现离线访问网站的目标。

使用 Service Workers 的方法略显繁琐，需要注册、安装、更新，webpack 社区已经有了插件实现😄

[offline-plugin](https://github.com/NekR/offline-plugin) 是一个实现 Service Workers 的 webpack 插件，官方介绍如下：

```
This plugin is intended to provide an offline experience for webpack projects. It uses ServiceWorker, and AppCache as a fallback under the hood. Simply include this plugin in your webpack.config, and the accompanying runtime in your client script, and your project will become offline ready by caching all (or some) of the webpack output assets.
```

offline-plugin 旨在给使用 webpack 打包的项目提供离线体验，在内部使用 ServiceWorker 和作为备选方案的 AppCache 实现。通过简单地在 webpack 配置文件里添加这个插件，并在客户端脚本里初始化 runtime，就能缓存全部（或部分）webpack 打包的资源，从而使项目可离线化。

使用方法非常简单，并在内部处理了 Service Workers 的生命周期，用户无需手动注册、激活，只需按照文档配置即可使用，并提供了丰富的配置项，暴露了生命周期方法等，非常好用。

peco 支持 chainWebpack 配置，需要注意的是要判断当```context === client```时添加这个插件，不然会报```ReferenceError: window is not defined```的错误。

来看看使用效果吧～使用 Service Workers 前访问博客需加载大约 1.8M 的资源，需 4.46s 加载完成；使用 Service Workers 后只需加载大约 388k 的资源，需 1.07s 加载完成，其中大部分是图片 cdn 资源。加速效果很棒～

在 Chrome DevTools Network 里可以看到资源 from ServiceWorker，表示该请求是由 Service Worker 代理的。

![before use Service Workers](https://i.loli.net/2018/12/07/5c0a6ae51aa00.png)

![after use Service Workers](https://i.loli.net/2018/12/07/5c0a6ab00e6b6.png)

并且博客可以在离线环境下访问了，给你原生应用的体验～