---
index: 3
title: "快速入门"
icon: config
category:
  - 前端
tag:
  - 快速入门


navbar: true
breadcrumb: true

---

## 项目描述

::: tip 学前必读

以下内容适用于前后端分离项目，后台使用 SpringBoot 开发，后台前端使用 vue-admin-template 快速开发，前端的基础知识与后台代码不做详细介绍，有不懂的小伙伴可以自行查阅相关资料，文档会指出前端开发的关键知识点，使大家快速入门如何使用 Vue 开发一个前后端分离的后台系统。

:::

## 前期准备

### vue-element-admin

基于 SpringBoot 的前后端分离项目中，后端同样避免不了需要一个前端界面来供用户进行相应操作，[vue-element-admin](http://panjiachen.github.io/vue-element-admin) 是一个**后台前端解决方案**，它基于 [vue](https://cn.vuejs.org/v2/guide/#Vue-js-%E6%98%AF%E4%BB%80%E4%B9%88) 和 [element-ui](https://element.eleme.cn/#/zh-CN) 实现，使用了最新的前端技术栈，内置了 i18 国际化解决方案，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，可以帮助我们快速搭建企业级中后台产品原型。

**vue-element-admin 的使用需要我们安装以下内容**：

1. 安装 [vscode下载](https://code.visualstudio.com/)（用来编写前端代码），安装好之后启动软件[切换中文界面](https://segmentfault.com/a/1190000022474382)以及安装 ESlint 插件（代码格式化）

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203131321967.png" alt="image-20220313132135817" width="400" />

2. [下载安装 Node.js](https://nodejs.org/en/download/)，建议下载 LTS 版本，安装好之后使用命令`node -v`查看 Node.js ，使用命令`npm -v`查看 npm 版本

   ```bash
   C:\Users\wyj_p>node -v
   v16.14.0
   C:\Users\wyj_p>npm -v
   8.3.1
   ```

   ::: info

   1、Node.js 是一个 JavaScript 运行时环境，它让 JavaScript 可以开发后端程序，几乎能实现其它后端语言的所有功能

   2、npm（Node Package Manager）是 Node.js 的包管理工具，类似于 Maven

   3、Node.js 文档参考地址：[Node.js 中文网 (nodejs.cn)](http://nodejs.cn/)

   :::

3. 设置 npm 淘宝镜像

   ```bash
   npm config set registry https://registry.npm.taobao.org
   ```

之后便可以下载 vue-element-admin 并运行，方式如下：

1. 电脑任意位置新建项目文件夹，在该文件夹下使用 git 命令，下载 vue-element-admin 源码

   ```bash
   # 下载源码
   git clone git@github.com:PanJiaChen/vue-element-admin.git
   # 切换中文分支
   cd vue-element-admin
   git checkout i18n
   ```

   ::: info

   1、vue-element-admin Github 地址：[PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

   2、vue-element-admin 官方文档：[介绍 | vue-element-admin (panjiachen.github.io)](https://panjiachen.github.io/vue-element-admin-site/zh/guide/)

   :::

2. 安装依赖

   ```bash
   npm install
   ```

3. 启动运行

   ```bash
   npm run dev
   ```

   启动后程序自动运行http://localhost:9527/ ，登录成功之后界面显示如下：

   ![image-20220313153843311](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203131545821.png)

一旦我们掌握了 vue-element-admin 的相关开发技巧，便可以使用其中的控件来构建自己项目的相关模块。

### vue-admin-template

vue-admin-template 是基于 vue-element-admin 的一套**后台前端管理系统基础模板**，可以直接拿来进行**二次开发**，vue-admin-template 的安装步骤如下：

1. 下载 vue-admin-template

   ```bash
   git clone git@github.com:PanJiaChen/vue-admin-template.git
   ```

   ::: info

   1、vue-admin-template 源码地址：[PanJiaChen/vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)

   2、后续项目演示基于版本 vue-admin-template 4.4.0 进行开发 

   :::

2. 安装依赖

   ```bash
   cd vue-admin-template
   npm install
   ```

3. 启动运行

   ```bash
   npm run dev
   ```

   启动后程序自动运行 http://localhost:9528/ ：

   ![image-20220319081935558](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203190819678.png)
   
   登录成功之后界面显示如下：
   
   ![image-20220313161023817](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203131610978.png)

此时便可以使用该源码来进行二次开发，开发之前我们有必要修改项目根目录 `package.json` 文件中关于项目的描述信息：

![image-20220319081811968](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203190818127.png)

