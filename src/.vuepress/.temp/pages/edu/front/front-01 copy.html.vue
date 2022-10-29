<template><div><h2 id="项目描述" tabindex="-1"><a class="header-anchor" href="#项目描述" aria-hidden="true">#</a> 项目描述</h2>
<div class="custom-container tip">
<p class="custom-container-title">学前必读</p>
<p>以下内容适用于前后端分离项目，后台使用 SpringBoot 开发，后台前端使用 vue-admin-template 快速开发，前端的基础知识与后台代码不做详细介绍，有不懂的小伙伴可以自行查阅相关资料，文档会指出前端开发的关键知识点，使大家快速入门如何使用 Vue 开发一个前后端分离的后台系统。</p>
</div>
<h2 id="前期准备" tabindex="-1"><a class="header-anchor" href="#前期准备" aria-hidden="true">#</a> 前期准备</h2>
<h3 id="vue-element-admin" tabindex="-1"><a class="header-anchor" href="#vue-element-admin" aria-hidden="true">#</a> vue-element-admin</h3>
<p>基于 SpringBoot 的前后端分离项目中，后端同样避免不了需要一个前端界面来供用户进行相应操作，<a href="http://panjiachen.github.io/vue-element-admin" target="_blank" rel="noopener noreferrer">vue-element-admin<ExternalLinkIcon/></a> 是一个<strong>后台前端解决方案</strong>，它基于 <a href="https://cn.vuejs.org/v2/guide/#Vue-js-%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noopener noreferrer">vue<ExternalLinkIcon/></a> 和 <a href="https://element.eleme.cn/#/zh-CN" target="_blank" rel="noopener noreferrer">element-ui<ExternalLinkIcon/></a> 实现，使用了最新的前端技术栈，内置了 i18 国际化解决方案，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，可以帮助我们快速搭建企业级中后台产品原型。</p>
<p><strong>vue-element-admin 的使用需要我们安装以下内容</strong>：</p>
<ol>
<li>
<p>安装 <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">vscode下载<ExternalLinkIcon/></a>（用来编写前端代码），安装好之后启动软件<a href="https://segmentfault.com/a/1190000022474382" target="_blank" rel="noopener noreferrer">切换中文界面<ExternalLinkIcon/></a>以及安装 ESlint 插件（代码格式化）</p>
<img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203131321967.png" alt="image-20220313132135817" width="400" />
</li>
<li>
<p><a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">下载安装 Node.js<ExternalLinkIcon/></a>，建议下载 LTS 版本，安装好之后使用命令<code v-pre>node -v</code>查看 Node.js ，使用命令<code v-pre>npm -v</code>查看 npm 版本</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>wyj_p<span class="token operator">></span>node <span class="token parameter variable">-v</span>
v16.14.0
C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>wyj_p<span class="token operator">></span>npm <span class="token parameter variable">-v</span>
<span class="token number">8.3</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info">
<p class="custom-container-title">Info</p>
<p>1、Node.js 是一个 JavaScript 运行时环境，它让 JavaScript 可以开发后端程序，几乎能实现其它后端语言的所有功能</p>
<p>2、npm（Node Package Manager）是 Node.js 的包管理工具，类似于 Maven</p>
<p>3、Node.js 文档参考地址：<a href="http://nodejs.cn/" target="_blank" rel="noopener noreferrer">Node.js 中文网 (nodejs.cn)<ExternalLinkIcon/></a></p>
</div>
</li>
<li>
<p>设置 npm 淘宝镜像</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<p>之后便可以下载 vue-element-admin 并运行，方式如下：</p>
<ol>
<li>
<p>电脑任意位置新建项目文件夹，在该文件夹下使用 git 命令，下载 vue-element-admin 源码</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 下载源码</span>
<span class="token function">git</span> clone git@github.com:PanJiaChen/vue-element-admin.git
<span class="token comment"># 切换中文分支</span>
<span class="token builtin class-name">cd</span> vue-element-admin
<span class="token function">git</span> checkout i18n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info">
<p class="custom-container-title">Info</p>
<p>1、vue-element-admin Github 地址：<a href="https://github.com/PanJiaChen/vue-element-admin" target="_blank" rel="noopener noreferrer">PanJiaChen/vue-element-admin<ExternalLinkIcon/></a></p>
<p>2、vue-element-admin 官方文档：<a href="https://panjiachen.github.io/vue-element-admin-site/zh/guide/" target="_blank" rel="noopener noreferrer">介绍 | vue-element-admin (panjiachen.github.io)<ExternalLinkIcon/></a></p>
</div>
</li>
<li>
<p>安装依赖</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>启动运行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动后程序自动运行<a href="http://localhost:9527/" target="_blank" rel="noopener noreferrer">http://localhost:9527/<ExternalLinkIcon/></a> ，登录成功之后界面显示如下：</p>
<p><img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203131545821.png" alt="image-20220313153843311" loading="lazy"></p>
</li>
</ol>
<p>一旦我们掌握了 vue-element-admin 的相关开发技巧，便可以使用其中的控件来构建自己项目的相关模块。</p>
<h3 id="vue-admin-template" tabindex="-1"><a class="header-anchor" href="#vue-admin-template" aria-hidden="true">#</a> vue-admin-template</h3>
<p>vue-admin-template 是基于 vue-element-admin 的一套<strong>后台前端管理系统基础模板</strong>，可以直接拿来进行<strong>二次开发</strong>，vue-admin-template 的安装步骤如下：</p>
<ol>
<li>
<p>下载 vue-admin-template</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:PanJiaChen/vue-admin-template.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container info">
<p class="custom-container-title">Info</p>
<p>1、vue-admin-template 源码地址：<a href="https://github.com/PanJiaChen/vue-admin-template" target="_blank" rel="noopener noreferrer">PanJiaChen/vue-admin-template<ExternalLinkIcon/></a></p>
<p>2、后续项目演示基于版本 vue-admin-template 4.4.0 进行开发</p>
</div>
</li>
<li>
<p>安装依赖</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> vue-admin-template
<span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>启动运行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动后程序自动运行 <a href="http://localhost:9528/" target="_blank" rel="noopener noreferrer">http://localhost:9528/<ExternalLinkIcon/></a> ：</p>
<p><img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203190819678.png" alt="image-20220319081935558" loading="lazy"></p>
<p>登录成功之后界面显示如下：</p>
<p><img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203131610978.png" alt="image-20220313161023817" loading="lazy"></p>
</li>
</ol>
<p>此时便可以使用该源码来进行二次开发，开发之前我们有必要修改项目根目录 <code v-pre>package.json</code> 文件中关于项目的描述信息：</p>
<p><img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203190818127.png" alt="image-20220319081811968" loading="lazy"></p>
</div></template>


