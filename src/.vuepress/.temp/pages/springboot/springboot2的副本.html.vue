<template><div><h2 id="springboot-web-开发" tabindex="-1"><a class="header-anchor" href="#springboot-web-开发" aria-hidden="true">#</a> SpringBoot Web 开发</h2>
<h3 id="静态资源导入" tabindex="-1"><a class="header-anchor" href="#静态资源导入" aria-hidden="true">#</a> 静态资源导入</h3>
<p>创建项目 <code v-pre>SpringBoot-Web-demo1</code>, 项目测试中<code v-pre>http://localhost:8080//hello</code> 不可使用, 暂时使用
<code v-pre>http://127.0.0.1:8080//hello</code> 启动 tomcat 访问 controller, 第二天后 localhost 可以使用了</p>
<p>测试 <code v-pre>controller</code> 代码:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/hello"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"hello, world!"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>静态资源可以放在类路径 <code v-pre>resources</code> 下的 <code v-pre>static</code> 、<code v-pre>public</code> 、  <code v-pre>resources</code> 文件夹下, 文件夹下的内容通过 <code v-pre>http://localhost:8080/**</code> 即可访问, 例如 <code v-pre>static</code> 文件夹下有 <code v-pre>1.js</code>, 则直接通过 <code v-pre>http://localhost:8080/1.js</code> 便可访问成功</p>
<p>访问优先级别: <code v-pre>resources</code>&gt; <code v-pre>static</code> &gt; <code v-pre>public</code></p>
<p>一般 <code v-pre>public</code> 放公共资源, <code v-pre>static</code> 放静态资源如图片, <code v-pre>resources</code> 下放上传文件</p>
<h3 id="首页和图标定制" tabindex="-1"><a class="header-anchor" href="#首页和图标定制" aria-hidden="true">#</a> 首页和图标定制</h3>
<p>定制首页的 <code v-pre>index.html</code> 时, 可以将 <code v-pre>index.html</code> 文件放在类路径 resources 下的 <code v-pre>resources</code> 、 <code v-pre>static</code> 、 <code v-pre>public</code> 文件夹下, 此时便可以直接通过 <code v-pre>http://localhost:8080</code> 直接访问到 <code v-pre>index.html</code>链接</p>
<h3 id="模板引擎-thymeleaf" tabindex="-1"><a class="header-anchor" href="#模板引擎-thymeleaf" aria-hidden="true">#</a> 模板引擎 Thymeleaf</h3>
<p>新建项目 <code v-pre>SpringBoot-Web-demo2</code>, 创建项目时候将 <code v-pre>Dependencies</code>-&gt; <code v-pre>Template Engines</code> -&gt; <code v-pre>Thymeleaf</code> 选上</p>
<p><strong><code v-pre>Thymeleaf</code></strong> 用来开发 <code v-pre>Web</code>  和独立环境项目的服务器端的Java模版引擎, 代替传统的 <code v-pre>Jsp</code> 文件, 使用 <code v-pre>Thymeleaf</code> 的文件必须放在类路径 resources 下的 <code v-pre>templates</code> 文件夹下, <code v-pre>templates</code> 文件夹下的内容不能通过
<code v-pre>http://localhost:8080</code> 直接访问, 必须要通过 controller 进行跳转</p>
<p>实现首页的跳转, controller 层源码:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IndexController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/index"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"index"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>templates</code> 文件夹下的 <code v-pre>index.html</code> 源码：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    使用thymeleaf
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>html 中使用模板引擎 thymeleaf 时, 首先要在 html 文件引入 thymeleaf 模板引擎, 首先要在 html 文件中引入头文件</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>xmlns:th="http://www.thymeleaf.org" 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>th</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.thymeleaf.org<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>引入头文件之后, 可以绑定 html 文件里的任何元素, 使用 <strong><code v-pre>th:元素名</code></strong> 的方式, 源码如下:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IndexThymeleafController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/index"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"msg"</span><span class="token punctuation">,</span> <span class="token string">"hello, thymeleaf"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"index"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span> <span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>th</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.thymeleaf.org<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    使用thymeleaf
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${msg}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="thymeleaf-语法" tabindex="-1"><a class="header-anchor" href="#thymeleaf-语法" aria-hidden="true">#</a> Thymeleaf 语法</h3>
<p><a href="https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.pdf" target="_blank" rel="noopener noreferrer"><code v-pre>Thymeleaf</code>官方文档参考<ExternalLinkIcon/></a></p>
<p><strong>Thymeleaf 语法如下</strong>:</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>th:text</code></td>
<td>文本替换</td>
</tr>
<tr>
<td><code v-pre>th:utext</code></td>
<td>支持 html 的文本替换</td>
</tr>
<tr>
<td><code v-pre>th:value</code></td>
<td>属性赋值</td>
</tr>
<tr>
<td><code v-pre>th:each</code></td>
<td>遍历循环元素</td>
</tr>
<tr>
<td><code v-pre>th:if</code></td>
<td>判断条件, 类似的还有th:unless、th:switch、th:case</td>
</tr>
<tr>
<td><code v-pre>th:insert</code></td>
<td>代码块引入,类似的还有th:replace, th:include 常用于公共代码块提取的场景</td>
</tr>
<tr>
<td><code v-pre>th:fragment</code></td>
<td>定义代码块, 方便被 th:insert 引用</td>
</tr>
<tr>
<td><code v-pre>th:object</code></td>
<td>声明变量, 一般和*{} 一起配合使用</td>
</tr>
<tr>
<td><code v-pre>th:attr</code></td>
<td>设置标签属性, 多个属性可以用逗号分隔</td>
</tr>
</tbody>
</table>
<p>源码演示:</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span> <span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>th</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.thymeleaf.org<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    使用thymeleaf
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${msg}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name"><span class="token namespace">th:</span>each</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user:${users}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${user}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IndexThymeleafController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/index"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"msg"</span><span class="token punctuation">,</span> <span class="token string">"hello, thymeleaf"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"users"</span><span class="token punctuation">,</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">"wyj"</span><span class="token punctuation">,</span> <span class="token string">"mary"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"index"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Thymeleaf 表达式如下:</strong></p>
<table>
<thead>
<tr>
<th>表达式</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>${...}</code></td>
<td>变量表达式</td>
</tr>
<tr>
<td><code v-pre>@{...}</code></td>
<td>链接表达式</td>
</tr>
<tr>
<td><code v-pre>#{...}</code></td>
<td>消息表达式</td>
</tr>
<tr>
<td><code v-pre>~{...}</code></td>
<td>代码块表达式</td>
</tr>
<tr>
<td><code v-pre>*{...}</code></td>
<td>选择变量表达式</td>
</tr>
</tbody>
</table>
<h3 id="自定义-mvc-配置原理" tabindex="-1"><a class="header-anchor" href="#自定义-mvc-配置原理" aria-hidden="true">#</a> 自定义 MVC  配置原理</h3>
<p>(1)自定义SpringMVC 功能时, 需要自定义一个类并实现接口 <code v-pre>WebMvcConfigurer</code></p>
<p>(2)自定义视图解析器需要创建一个类并实现接口 <code v-pre>ViewResolver</code></p>
<p>源码如下:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 自定义SpringMVC功能, 扩展 SpringMVC
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyMvcConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>

    <span class="token comment">//取自定义视图解析器作为一个 Bean</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ViewResolver</span> <span class="token function">myViewResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyViewResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//自定义视图解析器</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">MyViewResolver</span> <span class="token keyword">implements</span> <span class="token class-name">ViewResolver</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token class-name">View</span> <span class="token function">resolveViewName</span><span class="token punctuation">(</span><span class="token class-name">String</span> viewName<span class="token punctuation">,</span> <span class="token class-name">Locale</span> locale<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h2>
</div></template>


