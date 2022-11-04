import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as o,a as e,b as n,d as s,e as t,r as d}from"./app.e6e6e289.js";const c={},r=t('<h2 id="项目描述" tabindex="-1"><a class="header-anchor" href="#项目描述" aria-hidden="true">#</a> 项目描述</h2><div class="custom-container tip"><p class="custom-container-title">学前必读</p><p>以下内容适用于前后端分离项目，后台使用 SpringBoot 开发，后台前端使用 vue-admin-template 快速开发，前端的基础知识与后台代码不做详细介绍，有不懂的小伙伴可以自行查阅相关资料，文档会指出前端开发的关键知识点，使大家快速入门如何使用 Vue 开发一个前后端分离的后台系统。</p></div><h2 id="前期准备" tabindex="-1"><a class="header-anchor" href="#前期准备" aria-hidden="true">#</a> 前期准备</h2><h3 id="vue-element-admin" tabindex="-1"><a class="header-anchor" href="#vue-element-admin" aria-hidden="true">#</a> vue-element-admin</h3>',4),u={href:"http://panjiachen.github.io/vue-element-admin",target:"_blank",rel:"noopener noreferrer"},p=e("strong",null,"后台前端解决方案",-1),m={href:"https://cn.vuejs.org/v2/guide/#Vue-js-%E6%98%AF%E4%BB%80%E4%B9%88",target:"_blank",rel:"noopener noreferrer"},h={href:"https://element.eleme.cn/#/zh-CN",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,[e("strong",null,"vue-element-admin 的使用需要我们安装以下内容"),n("：")],-1),_={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://segmentfault.com/a/1190000022474382",target:"_blank",rel:"noopener noreferrer"},b=e("img",{src:"https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202203131321967.png",alt:"image-20220313132135817",width:"400"},null,-1),f={href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"node -v",-1),j=e("code",null,"npm -v",-1),x=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>wyj_p<span class="token operator">&gt;</span>node <span class="token parameter variable">-v</span>
v16.14.0
C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>wyj_p<span class="token operator">&gt;</span>npm <span class="token parameter variable">-v</span>
<span class="token number">8.3</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),y={class:"custom-container info"},N=e("p",{class:"custom-container-title"},"Info",-1),C=e("p",null,"1、Node.js 是一个 JavaScript 运行时环境，它让 JavaScript 可以开发后端程序，几乎能实现其它后端语言的所有功能",-1),B=e("p",null,"2、npm（Node Package Manager）是 Node.js 的包管理工具，类似于 Maven",-1),J={href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"},E=t(`<li><p>设置 npm 淘宝镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,1),P=e("p",null,"之后便可以下载 vue-element-admin 并运行，方式如下：",-1),S=t(`<p>电脑任意位置新建项目文件夹，在该文件夹下使用 git 命令，下载 vue-element-admin 源码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载源码</span>
<span class="token function">git</span> clone git@github.com:PanJiaChen/vue-element-admin.git
<span class="token comment"># 切换中文分支</span>
<span class="token builtin class-name">cd</span> vue-element-admin
<span class="token function">git</span> checkout i18n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),z={class:"custom-container info"},V=e("p",{class:"custom-container-title"},"Info",-1),I={href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank",rel:"noopener noreferrer"},w={href:"https://panjiachen.github.io/vue-element-admin-site/zh/guide/",target:"_blank",rel:"noopener noreferrer"},L=t(`<li><p>安装依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,1),M=t(`<p>启动运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),T={href:"http://localhost:9527/",target:"_blank",rel:"noopener noreferrer"},U=e("p",null,[e("img",{src:"https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202203131545821.png",alt:"image-20220313153843311",loading:"lazy"})],-1),A=e("p",null,"一旦我们掌握了 vue-element-admin 的相关开发技巧，便可以使用其中的控件来构建自己项目的相关模块。",-1),F=e("h3",{id:"vue-admin-template",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-admin-template","aria-hidden":"true"},"#"),n(" vue-admin-template")],-1),G=e("p",null,[n("vue-admin-template 是基于 vue-element-admin 的一套"),e("strong",null,"后台前端管理系统基础模板"),n("，可以直接拿来进行"),e("strong",null,"二次开发"),n("，vue-admin-template 的安装步骤如下：")],-1),q=t(`<p>下载 vue-admin-template</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:PanJiaChen/vue-admin-template.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),D={class:"custom-container info"},H=e("p",{class:"custom-container-title"},"Info",-1),K={href:"https://github.com/PanJiaChen/vue-admin-template",target:"_blank",rel:"noopener noreferrer"},O=e("p",null,"2、后续项目演示基于版本 vue-admin-template 4.4.0 进行开发",-1),Q=t(`<li><p>安装依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> vue-admin-template
<span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),R=t(`<p>启动运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),W={href:"http://localhost:9528/",target:"_blank",rel:"noopener noreferrer"},X=e("p",null,[e("img",{src:"https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202203190819678.png",alt:"image-20220319081935558",loading:"lazy"})],-1),Y=e("p",null,"登录成功之后界面显示如下：",-1),Z=e("p",null,[e("img",{src:"https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202203131610978.png",alt:"image-20220313161023817",loading:"lazy"})],-1),$=e("p",null,[n("此时便可以使用该源码来进行二次开发，开发之前我们有必要修改项目根目录 "),e("code",null,"package.json"),n(" 文件中关于项目的描述信息：")],-1),ee=e("p",null,[e("img",{src:"https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202203190818127.png",alt:"image-20220319081811968",loading:"lazy"})],-1);function ne(ae,se){const a=d("ExternalLinkIcon");return l(),o("div",null,[r,e("p",null,[n("基于 SpringBoot 的前后端分离项目中，后端同样避免不了需要一个前端界面来供用户进行相应操作，"),e("a",u,[n("vue-element-admin"),s(a)]),n(" 是一个"),p,n("，它基于 "),e("a",m,[n("vue"),s(a)]),n(" 和 "),e("a",h,[n("element-ui"),s(a)]),n(" 实现，使用了最新的前端技术栈，内置了 i18 国际化解决方案，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，可以帮助我们快速搭建企业级中后台产品原型。")]),v,e("ol",null,[e("li",null,[e("p",null,[n("安装 "),e("a",_,[n("vscode下载"),s(a)]),n("（用来编写前端代码），安装好之后启动软件"),e("a",g,[n("切换中文界面"),s(a)]),n("以及安装 ESlint 插件（代码格式化）")]),b]),e("li",null,[e("p",null,[e("a",f,[n("下载安装 Node.js"),s(a)]),n("，建议下载 LTS 版本，安装好之后使用命令"),k,n("查看 Node.js ，使用命令"),j,n("查看 npm 版本")]),x,e("div",y,[N,C,B,e("p",null,[n("3、Node.js 文档参考地址："),e("a",J,[n("Node.js 中文网 (nodejs.cn)"),s(a)])])])]),E]),P,e("ol",null,[e("li",null,[S,e("div",z,[V,e("p",null,[n("1、vue-element-admin Github 地址："),e("a",I,[n("PanJiaChen/vue-element-admin"),s(a)])]),e("p",null,[n("2、vue-element-admin 官方文档："),e("a",w,[n("介绍 | vue-element-admin (panjiachen.github.io)"),s(a)])])])]),L,e("li",null,[M,e("p",null,[n("启动后程序自动运行"),e("a",T,[n("http://localhost:9527/"),s(a)]),n(" ，登录成功之后界面显示如下：")]),U])]),A,F,G,e("ol",null,[e("li",null,[q,e("div",D,[H,e("p",null,[n("1、vue-admin-template 源码地址："),e("a",K,[n("PanJiaChen/vue-admin-template"),s(a)])]),O])]),Q,e("li",null,[R,e("p",null,[n("启动后程序自动运行 "),e("a",W,[n("http://localhost:9528/"),s(a)]),n(" ：")]),X,Y,Z])]),$,ee])}const le=i(c,[["render",ne],["__file","front-01.html.vue"]]);export{le as default};