<template><div><h2 id="springcloud概述" tabindex="-1"><a class="header-anchor" href="#springcloud概述" aria-hidden="true">#</a> SpringCloud概述</h2>
<p>Spring Cloud 是一套完整的微服务解决方案，为开发人员提供了<strong>快速构建分布式系统中一些常见模式的工具</strong>，例如配置管理，服务发现，断路器，智能路由，微代理，控制总线，一次性令牌，全局锁定，领导选举，分布式会话，集群状态等，Spring Cloud 是在 SpringBoot 的基础上构建的，是一个<strong>基于 Spring Boot实现的开发工具</strong>。</p>
<p>Spring Cloud 本身并不是一个拿来即可用的框架，它是一套微服务规范，共有两代实现。</p>
<ul>
<li>Spring Cloud Netflix 是 Spring Cloud 的第一代实现，主要由 Eureka、Ribbon、Feign、Hystrix 等组件组成。</li>
<li>Spring Cloud Alibaba 是 Spring Cloud 的第二代实现，主要由 Nacos、Sentinel、Seata 等组件组成</li>
</ul>
<h2 id="springcloud版本选择" tabindex="-1"><a class="header-anchor" href="#springcloud版本选择" aria-hidden="true">#</a> SpringCloud版本选择</h2>
<p>SpringBoot 项目中使用 SpringCloud 构建分布式系统需要选择相应的版本，参考官方<a href="https://link.segmentfault.com/?enc=V0SKzjRu6g%2FOYj7pUX%2BfkA%3D%3D.DSm8vExh%2BU3CaN0VNjZMsYCcgNABStlqRg%2FxnE5Nfbq8y90Ge5odljsWhSeFGFkhLY4lU112u6XeWtDONwO44Q%3D%3D" target="_blank" rel="noopener noreferrer">SpringCloud和SpringBoot对照版本<ExternalLinkIcon/></a>引入依赖：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20220412094713545.png" alt="image-20220412094713545" loading="lazy"></p>
<p>通过 <a href="https://link.segmentfault.com/?enc=uirbBL%2BNuEOTUuL05ZrY9g%3D%3D.kW9PQ776%2B5v8cCH7aws8eQ5fiC%2F2UifOySBtrpM7n7awraBde39j1H72%2FFLKsyXo" target="_blank" rel="noopener noreferrer">Json方式展示SpringCloud版本对照<ExternalLinkIcon/></a> 关系如下：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20220417103332803.png" alt="image-20220417103332803" loading="lazy"></p>
<h2 id="springcloud服务发现" tabindex="-1"><a class="header-anchor" href="#springcloud服务发现" aria-hidden="true">#</a> SpringCloud服务发现</h2>
<h3 id="nacos概述" tabindex="-1"><a class="header-anchor" href="#nacos概述" aria-hidden="true">#</a> Nacos概述</h3>
<p><strong>Nacos</strong>是Spring Cloud Alibaba组件，在 SpringCloud 中做<strong>服务注册</strong>中心组件，类似的还有Zookeeper、Consul，同时也是配置中心，比如 SpringCloud 中的 Config，将配置文件版本化管理，学习参考<a href="https://nacos.io/zh-cn/docs/quick-start.html" target="_blank" rel="noopener noreferrer">Nacos官方文档<ExternalLinkIcon/></a></p>
<div class="custom-container tip">
<p class="custom-container-title">官方解释</p>
<p>Nacos 致力于帮助您<strong>发现、配置和管理微服务</strong>。Nacos 提供了一组简单易用的特性集，帮助您快速实现动态服务发现、服务配置、服务元数据及流量管理</p>
</div>
<h3 id="nacos控制台安装" tabindex="-1"><a class="header-anchor" href="#nacos控制台安装" aria-hidden="true">#</a> Nacos控制台安装</h3>
<p>Nacos 控制台安装参考<a href="https://nacos.io/zh-cn/docs/quick-start.html" target="_blank" rel="noopener noreferrer">安装<ExternalLinkIcon/></a>，安装之后解压到本地，进入安装 bin 目录中启动服务，<strong>启动命令</strong>如下：</p>
<Tabs id="56" :data='[{"title":"windows"},{"title":"Linux/Unix/Mac"},{"title":"ubuntu/运行脚本报错提示"}]' :active="1">
<template #tab0="{ title, value, isActive }">
<!-- tab 1 内容 -->
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>startup.cmd <span class="token parameter variable">-m</span> standalone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<!-- tab 2 内容 -->
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sh</span> startup.sh <span class="token parameter variable">-m</span> standalone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<!-- tab 3 内容 -->
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">bash</span> startup.sh <span class="token parameter variable">-m</span> standalone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</Tabs>
<div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>standalone代表着单机模式运行，非集群模式</p>
</div>
<div class="custom-container danger">
<p class="custom-container-title">Warning</p>
<p>JDK17 环境下下载 1.x.x 版本，不会报错，<code v-pre>edu</code>项目中使用 nacos 版本为 1.4.3</p>
</div>
<p>启动成功之后进行访问，访问地址：<a href="http://localhost:8848/nacos/index.html#/login" target="_blank" rel="noopener noreferrer">http://localhost:8848/nacos/index.html#/login<ExternalLinkIcon/></a></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20220411171108793.png" alt="image-20220411171108793" loading="lazy"></p>
<div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>登陆用户名密码都为 <code v-pre>nacos</code></p>
</div>
<p>登陆成功界面如下：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20220417112505359.png" alt="image-20220417112505359" loading="lazy"></p>
<p><strong>服务关闭</strong>命令如下：</p>
<Tabs id="100" :data='[{"title":"windows"},{"title":"Linux/Unix/Mac"}]' :active="1">
<template #tab0="{ title, value, isActive }">
<!-- tab 1 内容 -->
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>shutdown.cmd
<span class="token comment"># 或者双击 shutdown.cmd 运行文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<!-- tab 2 内容 -->
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sh</span> shutdown.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</Tabs>
<h3 id="nacos使用" tabindex="-1"><a class="header-anchor" href="#nacos使用" aria-hidden="true">#</a> Nacos使用</h3>
<p>Nacos 作为注册中心，如果想将一个服务注册到 Nacos 中，以项目 <code v-pre>edu</code> 的 <code v-pre>edu-service-edu</code> 模块为例，项目环境 SpringBoot 2.6.4，JDK17，分为以下几步：</p>
<ol>
<li>
<p>项目父 pom 文件引入 SpringCloud、Spring Cloud Alibaba 依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- 版本管理--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>spring-cloud-dependencies.version</span><span class="token punctuation">></span></span>2021.0.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>spring-cloud-dependencies.version</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>spring-cloud-alibaba-dependencies.version</span><span class="token punctuation">></span></span>2021.0.1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>spring-cloud-alibaba-dependencies.version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencyManagement</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- SpringCloud 依赖--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-dependencies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${spring-cloud-dependencies.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- SpringCloud alibaba 依赖--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-alibaba-dependencies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${spring-cloud-alibaba-dependencies.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencyManagement</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">版本问题</p>
<p>注意SpringCloud、Spring Cloud Alibaba版本要与 SpringBoot 版本对应，可以先通过<a href="#springcloud%E7%89%88%E6%9C%AC%E9%80%89%E6%8B%A9">SpringCloud版本选择</a>确定 SpringCloud 版本，在参考<a href="https://segmentfault.com/a/1190000040246817?utm_source=sf-similar-article" target="_blank" rel="noopener noreferrer">SpringBoot、Springcloud、SpringCloud Alibaba版本对应参考<ExternalLinkIcon/></a>确定SpringCloud Alibaba版本。</p>
</div>
</li>
<li>
<p><code v-pre>edu-service-edu</code> 模块 pom 文件引入 Nacos 依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- nacos 服务注册 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-alibaba-nacos-discovery<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>edu-service-edu</code> 模块配置文件添加注册 Nacos 服务的配置信息</p>
<Tabs id="138" :data='[{"title":"application.properties"},{"title":"application.yaml"}]' :active="0">
<template #tab0="{ title, value, isActive }">
<!-- tab 1 内容 -->
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 服务名称</span>
<span class="token assign-left variable">spring.application.name</span><span class="token operator">=</span>edu-service-edu
<span class="token comment">#nacos服务地址</span>
spring.cloud.nacos.discovery.server-addr<span class="token operator">=</span><span class="token number">127.0</span>.0.1:8848
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<!-- tab 2 内容 -->
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>spring:
  <span class="token comment"># 服务名称</span>
  application:
    name: edu-service-edu
	cloud:
    <span class="token comment"># nacos 服务地址，服务注册</span>
    nacos:
      discovery:
        server-addr:127.0.0.1:8848
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
</li>
<li>
<p><code v-pre>edu-service-edu</code> 模块启动类中添加Nacos服务发现注解<code v-pre>@EnableDiscoveryClient</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@EnableDiscoveryClient</span>  <span class="token comment">//服务注册</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EduApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">EduApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>启动服务，登陆Nacos，会发现 <code v-pre>edu-service-edu</code>微服务注册到了 Nacos 中</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20220417161623699.png" alt="image-20220417161623699" loading="lazy"></p>
<h2 id="springcloud服务调用" tabindex="-1"><a class="header-anchor" href="#springcloud服务调用" aria-hidden="true">#</a> SpringCloud服务调用</h2>
<h3 id="openfeign概述" tabindex="-1"><a class="header-anchor" href="#openfeign概述" aria-hidden="true">#</a> OpenFeign概述</h3>
<p>Feign 是 Spring Cloud 组件中的一个轻量级 RESTful 的 HTTP  服务客户端，整合了 Ribbon + Hystrix，用来做客户端负载均衡，去<strong>调用服务注册中心的服务</strong></p>
<p><strong>OpenFeign</strong> 是 Spring Cloud 在 Feign 的基础上支持了 Spring MVC 的注解，如 <code v-pre>@RequesMapping</code> 等，OpenFeign 的<code v-pre>@FeignClient</code> 可以解析 SpringMVC 的 <code v-pre>@RequestMapping</code> 注解下的接口，并通过动态代理的方式产生实现类，<strong>实现类中做负载均衡并调用其他服务</strong></p>
<h3 id="openfeign使用" tabindex="-1"><a class="header-anchor" href="#openfeign使用" aria-hidden="true">#</a> OpenFeign使用</h3>
<p>项目中使用 OpenFeign 来调用 Nacos 注册中心中注册的服务，以项目 edu 为例，<code v-pre>edu-service-edu</code> 微服务中的 <code v-pre>VideoController</code> 接口类 <code v-pre>deleteVideo()</code> 调用 <code v-pre>edu-service-vod</code>微服务的 <code v-pre>removeVideo()</code> 方法，（<code v-pre>edu-service-vod</code>微服务已经注册到 Nacos 注册中心，参考<a href="#nacos%E4%BD%BF%E7%94%A8">Nacos使用</a>）</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20220417202722049.png" alt="image-20220417202722049" loading="lazy"></p>
<p><strong>步骤如下</strong>：</p>
<ol>
<li>
<p>子 pom 文件中添加依赖：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--feign 服务调用--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-openfeign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>调用端<code v-pre>edu-service-edu</code> 的启动类添加服务调用注解<code v-pre>@EnableFeignClients</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableDiscoveryClient</span>  <span class="token comment">//服务注册</span>
<span class="token annotation punctuation">@EnableFeignClients</span> <span class="token comment">// 服务调用</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EduApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">EduApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>调用端<code v-pre>edu-service-edu</code> 定义远程 HTTP 调用 API 接口</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span><span class="token string">"edu-service-vod"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">VodClient</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@DeleteMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/eduvod/video/deleteVideoSource/{videoId}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span> <span class="token function">removeVideo</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">"videoId"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> videoId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>注解<code v-pre>@FeignClient</code>标明需要调用的服务端的应用名称，在配置文件中<code v-pre>spring.application.name</code>配置，<code v-pre>@DeleteMapping</code>中定义请求服务的地址，请求<code v-pre>edu-service-vod</code>中接口类<code v-pre>VodController</code>的<code v-pre>removeVideo()</code></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20220417204801434.png" alt="image-20220417204801434" loading="lazy"></p>
</div>
</li>
</ol>
<p>配置好之后，便可以在<code v-pre>edu-service-edu</code> 微服务中调用<code v-pre>edu-service-vod</code>中的服务：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20220417205555567.png" alt="image-20220417205555567" loading="lazy"></p>
<h2 id="springcloud服务熔断与降级" tabindex="-1"><a class="header-anchor" href="#springcloud服务熔断与降级" aria-hidden="true">#</a> SpringCloud服务熔断与降级</h2>
<h3 id="sentinel概述" tabindex="-1"><a class="header-anchor" href="#sentinel概述" aria-hidden="true">#</a> Sentinel概述</h3>
<div class="custom-container info">
<p class="custom-container-title">背景</p>
<p>微服务架构中，系统拆分为不同的服务单元，各单元间通过服务注册与订阅的方式互相依赖。单元通过远程调用的方式相互通信，这样就有可能因为网络原因或是依赖服务自身问题出现调用故障或延迟，而这些问题会直接导致调用方的对外服务也出现延迟，若此时调用方的请求不断增加，最后就会出现因等待出现故障的依赖方响应而形成任务积压，最终导致自身服务的瘫痪</p>
</div>
<p>Spring Cloud 项目中最开始使用 Hystrix 来实现断路器的功能，具备拥有回退机制和断路器功能的线程和信号隔离，请求缓存和请求打包，以及监控和配置等功能，目前已经停止更新维护，</p>
<p>Sentinel 是Spring Cloud Alibaba核心组件之一，可以代替 Hystrix 来从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性</p>
<ul>
<li><a href="https://segmentfault.com/a/1190000011664503" target="_blank" rel="noopener noreferrer">Hystrix基础入门和特性讲解<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/alibaba/spring-cloud-alibaba/wiki/Sentinel" target="_blank" rel="noopener noreferrer">Spring Cloud Alibaba Sentinel官方文档<ExternalLinkIcon/></a></li>
</ul>
<h3 id="sentinel控制台安装" tabindex="-1"><a class="header-anchor" href="#sentinel控制台安装" aria-hidden="true">#</a> Sentinel控制台安装</h3>
<p>Sentinel 控制台提供一个轻量级的控制台，安装步骤如下：</p>
<ol>
<li>
<p>从 <a href="https://github.com/alibaba/Sentinel/releases" target="_blank" rel="noopener noreferrer">release 页面<ExternalLinkIcon/></a> 下载最新版本的控制台 jar 包</p>
</li>
<li>
<p>启动控制台</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> sentinel-dashboard.jar
<span class="token comment"># 或者</span>
<span class="token function">java</span> <span class="token parameter variable">-Dserver.port</span><span class="token operator">=</span><span class="token number">8080</span> <span class="token parameter variable">-Dcsp.sentinel.dashboard.server</span><span class="token operator">=</span>localhost:8080 <span class="token parameter variable">-Dproject.name</span><span class="token operator">=</span>sentinel-dashboard <span class="token parameter variable">-jar</span> sentinel-dashboard.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>1、若8080端口冲突，可使用 <code v-pre>-Dserver.port=新端口</code> 进行设置</p>
<p>2、<code v-pre>sentinel-dashboard.jar</code>为下的 jar 包的具体名称，例如 <code v-pre>sentinel-dashboard-1.8.3.jar</code></p>
<p>3、Sentinel 控制台登陆用户名密码为 sentinel</p>
</div>
<div class="custom-container danger">
<p class="custom-container-title">Warning</p>
<p>JDK 17环境下下载 Sentinel 控制台启动运行会出现各种意想不到的错误，建议本地使用 JDK1.8.x 环境，亲测 <code v-pre>Sentinel1.8.3</code> ，<code v-pre>JDK1.8.0</code> 可以正常启动运行 Sentinel 控制台</p>
</div>
<p>启动后界面如下：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20220418095941537.png" alt="image-20220418095941537" loading="lazy"></p>
</li>
</ol>
<h3 id="sentinel限流" tabindex="-1"><a class="header-anchor" href="#sentinel限流" aria-hidden="true">#</a> Sentinel限流</h3>
<p>新建 SpringBoot 项目<code v-pre>springboot-springcloud-sentinel</code>，环境为 Jdk17，SpringBoot2.6.4，  项目中使用 Sentinel 步骤如下：</p>
<ol>
<li>
<p>引入 Sentinel 依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--sentinel--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-alibaba-sentinel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>配置文件配置 Sentinel 控制台地址</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">8089</span>
<span class="token comment"># 服务名</span>
<span class="token key attr-name">spring.application.name</span><span class="token punctuation">=</span><span class="token value attr-value">sentineldemo</span>
<span class="token comment"># Sentinel 控制台地址，如果配置在本地电脑，地址为 localhost:8080</span>
<span class="token key attr-name">spring.cloud.sentinel.transport.dashboard</span><span class="token punctuation">=</span><span class="token value attr-value">101.43.164.126:8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写测试接口代码并测试</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/hello"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"hello sentinel!"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20220418171549853.png" alt="image-20220418171549853" loading="lazy"></p>
</li>
</ol>
<p>我们可以看到 Sentinel 控制台监控了服务名为<code v-pre>sentineldemo</code>的服务，点击监控接口<code v-pre>/hello</code>后的流控按钮，为其设置一个简单的限流测试：<img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20220418181128095.png" alt="image-20220418181128095" loading="lazy"></p>
<p>阀值类型设置为 QPS，单机阈值设置为 1 表示该接口每秒最多允许进入一个请求，测试接口当一秒内发起多于 1 次的请求后，便会出现“Blocked by Sentinel”的提示。</p>
<img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20220418194232378.png" alt="image-20220418194136951" width="500" />
<p>代码实现中也可以通过注解<code v-pre>@SentinelResource</code>来自定义限流行为，新增接口代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/hello2"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@SentinelResource</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"byResource"</span><span class="token punctuation">,</span>blockHandler <span class="token operator">=</span> <span class="token string">"handleException"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello2ByResource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"hello sentinel!"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">handleException</span><span class="token punctuation">(</span><span class="token class-name">BlockException</span> exception<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"请求人数太多了！请稍后在试"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>1、<code v-pre>value = &quot;byResource&quot;</code>表示按资源名限流，<code v-pre>value = &quot;byUrl&quot;</code>按 URL 限流，之后再在 Sentinel 控制台编辑流控规则</p>
<img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20220418195028403.png" alt="image-20220418195028403" width="500" />
<p>2、<code v-pre>blockHandler</code>用于限流处理，限流的请求会转发到<code v-pre>handleException()</code>方法中</p>
<img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20220418194531602.png" alt="image-20220418194531602" width="500" />
</div>
<h3 id="sentinel结合openfeign" tabindex="-1"><a class="header-anchor" href="#sentinel结合openfeign" aria-hidden="true">#</a> Sentinel结合OpenFeign</h3>
<p>Sentinel 适配了OpenFeign 组件，使用 OpenFeign 来进行服务间调用同时，也可以使用它来进行熔断操作，以<a href="#openfeign%E4%BD%BF%E7%94%A8">OpenFeign使用</a>为例，增加熔断功能，流程如下：</p>
<ol>
<li>
<p>完成<a href="#openfeign%E4%BD%BF%E7%94%A8">OpenFeign使用</a>相关步骤</p>
</li>
<li>
<p>配置文件中打开 Sentinel 对 Feign 的支持</p>
<Tabs id="356" :data='[{"title":"application.properties"},{"title":"application.yaml"}]' :active="0">
<template #tab0="{ title, value, isActive }">
<!-- tab 1 内容 -->
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># Feign 适配 Sentinel 组件</span>
<span class="token assign-left variable">feign.sentinel.enabled</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<!-- tab 2 内容 -->
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># Feign 适配 Sentinel 组件</span>
feign:
  sentinel:
    enabled: <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
</li>
<li>
<p>编写降级处理类<code v-pre>VodClientFallback</code>，实现<code v-pre>VodClient</code>接口中定义的方法，用于处理服务降级逻辑</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VodClientFallback</span> <span class="token keyword">implements</span> <span class="token class-name">VodClient</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span> <span class="token function">removeVideo</span><span class="token punctuation">(</span><span class="token class-name">String</span> videoId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">CommonResult</span><span class="token punctuation">.</span><span class="token function">setCommonResult</span><span class="token punctuation">(</span><span class="token class-name">ResultCode</span><span class="token punctuation">.</span><span class="token constant">ERROR</span><span class="token punctuation">,</span><span class="token string">"删除视频出错了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>修改<code v-pre>VodClient</code>接口上的注解<code v-pre>@FeignClient(&quot;edu-service-vod&quot;)</code>，使用<code v-pre>fallback</code>来声明降级处理的具体类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"edu-service-vod"</span><span class="token punctuation">,</span>fallback <span class="token operator">=</span> <span class="token class-name">VodClientFallback</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">VodClient</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>参考文章：</p>
<ul>
<li><a href="https://segmentfault.com/a/1190000021377368" target="_blank" rel="noopener noreferrer">Spring Cloud Alibaba：Sentinel实现熔断与限流<ExternalLinkIcon/></a></li>
<li><a href="https://segmentfault.com/a/1190000038876080" target="_blank" rel="noopener noreferrer">阿里巴巴开源的限流器 Sentinel，轻松实现接口限流！<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E" target="_blank" rel="noopener noreferrer">Sentinel版本选择<ExternalLinkIcon/></a></li>
</ul>
<h2 id="springcloud-gateway-网关" tabindex="-1"><a class="header-anchor" href="#springcloud-gateway-网关" aria-hidden="true">#</a> SpringCloud GateWay 网关</h2>
<div class="custom-container info">
<p class="custom-container-title">Info</p>
<p><a href="https://docs.spring.io/spring-cloud-gateway/docs/3.0.4/reference/html/" target="_blank" rel="noopener noreferrer">SpringCloud Gateway<ExternalLinkIcon/></a>旨在为微服务架构提供简单、有效和统一的API路由管理方式，作为Spring Cloud生态系统中的网关，SpringCloud Gateway不仅提供统一的路由方式，并且还基于Filer链的方式提供了网关基本的功能，例如：安全、监控/埋点、限流等</p>
</div>
<p>项目edu最初使用nginx反向代理后端服务，并使用注解<code v-pre>@CrossOrigin</code>解决跨越问题，但存在安全、性能等问题，SpringCloud Gateway网关是一种有效的解决方案。以项目edu为例，若SpringBoot项目中含有多个微服务，配置网关服务步骤如下：</p>
<ol>
<li>
<p>新建网关微服务<code v-pre>edu-infrastructure</code>，并在pom文件中引入相关依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- nacos 服务注册 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-alibaba-nacos-discovery<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- gateway网关 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-gateway<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-loadbalancer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--gson--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.google.code.gson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>gson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--服务调用--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-openfeign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写<code v-pre>application.properties</code>配置文件</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token comment"># 服务端口</span>
<span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">8222</span>
<span class="token comment"># 服务名</span>
<span class="token key attr-name">spring.application.name</span><span class="token punctuation">=</span><span class="token value attr-value">edu-service-gateway</span>

<span class="token key attr-name">spring.main.web-application-type</span><span class="token punctuation">=</span><span class="token value attr-value">reactive</span>

<span class="token comment"># nacos服务地址</span>
<span class="token key attr-name">spring.cloud.nacos.discovery.server-addr</span><span class="token punctuation">=</span><span class="token value attr-value">127.0.0.1:8848</span>

<span class="token comment">#使用服务发现路由</span>
<span class="token key attr-name">spring.cloud.gateway.discovery.locator.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>

<span class="token comment">#配置edu-service-acl服务</span>
<span class="token comment">#设置路由id</span>
<span class="token key attr-name">spring.cloud.gateway.routes[0].id</span><span class="token punctuation">=</span><span class="token value attr-value">edu-service-acl</span>
<span class="token comment">#设置路由的uri</span>
<span class="token key attr-name">spring.cloud.gateway.routes[0].uri</span><span class="token punctuation">=</span><span class="token value attr-value">lb://edu-service-acl</span>
<span class="token comment">#设置路由断言,代理servicerId为auth-service的/auth/路径</span>
<span class="token key attr-name">spring.cloud.gateway.routes[0].predicates</span><span class="token punctuation">=</span><span class="token value attr-value">Path=/*/acl/**</span>

<span class="token comment">#配置edu-service-edu服务</span>
<span class="token key attr-name">spring.cloud.gateway.routes[1].id</span><span class="token punctuation">=</span><span class="token value attr-value">edu-service-edu</span>
<span class="token key attr-name">spring.cloud.gateway.routes[1].uri</span><span class="token punctuation">=</span><span class="token value attr-value">lb://edu-service-edu</span>
<span class="token key attr-name">spring.cloud.gateway.routes[1].predicates</span><span class="token punctuation">=</span><span class="token value attr-value">Path=/edu/**</span>

<span class="token comment">#配置edu-service-cms服务</span>
<span class="token key attr-name">spring.cloud.gateway.routes[2].id</span><span class="token punctuation">=</span><span class="token value attr-value">edu-service-cms</span>
<span class="token key attr-name">spring.cloud.gateway.routes[2].uri</span><span class="token punctuation">=</span><span class="token value attr-value">lb://edu-service-cms</span>
<span class="token key attr-name">spring.cloud.gateway.routes[2].predicates</span><span class="token punctuation">=</span><span class="token value attr-value">Path=/educms/**</span>

<span class="token comment">#配置edu-service-msm服务</span>
<span class="token key attr-name">spring.cloud.gateway.routes[3].id</span><span class="token punctuation">=</span><span class="token value attr-value">edu-service-msm</span>
<span class="token key attr-name">spring.cloud.gateway.routes[3].uri</span><span class="token punctuation">=</span><span class="token value attr-value">lb://edu-service-msm</span>
<span class="token key attr-name">spring.cloud.gateway.routes[3].predicates</span><span class="token punctuation">=</span> <span class="token value attr-value">Path=/edumsm/**</span>

<span class="token comment">#配置edu-service-vod服务</span>
<span class="token key attr-name">spring.cloud.gateway.routes[4].id</span><span class="token punctuation">=</span><span class="token value attr-value">edu-service-oss</span>
<span class="token key attr-name">spring.cloud.gateway.routes[4].uri</span><span class="token punctuation">=</span><span class="token value attr-value">lb://edu-service-oss</span>
<span class="token key attr-name">spring.cloud.gateway.routes[4].predicates</span><span class="token punctuation">=</span><span class="token value attr-value">Path=/oss/**</span>

<span class="token comment">#配置edu-service-vod服务</span>
<span class="token key attr-name">spring.cloud.gateway.routes[5].id</span><span class="token punctuation">=</span><span class="token value attr-value">edu-service-vod</span>
<span class="token key attr-name">spring.cloud.gateway.routes[5].uri</span><span class="token punctuation">=</span><span class="token value attr-value">lb://edu-service-vod</span>
<span class="token key attr-name">spring.cloud.gateway.routes[5].predicates</span><span class="token punctuation">=</span><span class="token value attr-value">Path=/eduvod/**</span>

<span class="token comment">#配置edu-service-order服务</span>
<span class="token key attr-name">spring.cloud.gateway.routes[6].id</span><span class="token punctuation">=</span><span class="token value attr-value">edu-service-order</span>
<span class="token key attr-name">spring.cloud.gateway.routes[6].uri</span><span class="token punctuation">=</span><span class="token value attr-value">lb://edu-service-order</span>
<span class="token key attr-name">spring.cloud.gateway.routes[6].predicates</span><span class="token punctuation">=</span><span class="token value attr-value">Path=/eduorder/**</span>

<span class="token comment">#配置edu-service-ucenter服务</span>
<span class="token key attr-name">spring.cloud.gateway.routes[7].id</span><span class="token punctuation">=</span><span class="token value attr-value">edu-service-ucenter</span>
<span class="token key attr-name">spring.cloud.gateway.routes[7].uri</span><span class="token punctuation">=</span><span class="token value attr-value">lb://edu-service-ucenter</span>
<span class="token key attr-name">spring.cloud.gateway.routes[7].predicates</span><span class="token punctuation">=</span><span class="token value attr-value">Path=/educenter/**</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">配置文件注意点</p>
<p>1、<code v-pre>spring.cloud.gateway.routes[]</code>下标从0开始，<code v-pre>id</code>为路由id，没有固定规则要求，建议和服务名一致</p>
<p>2、<code v-pre>lb://</code>表示开启负载均衡，<code v-pre>uri</code>用来匹配提供服务的路由地址</p>
<p>3、<code v-pre>predicates</code>断言，路径相匹配的进行路由</p>
</div>
</li>
<li>
<p>启动类<code v-pre>ApiGatewayApplication</code>开启Nacos服务发现</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableDiscoveryClient</span>  <span class="token comment">//服务发现</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ApiGatewayApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ApiGatewayApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>修改后端前台项目<code v-pre>edu-admin</code>配置文件<code v-pre>.env.development</code>端口服务号为网关服务端口8222</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>VUE_APP_BASE_API = 'http://localhost:8222'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>编写配置类<code v-pre>CorsConfig</code>解决跨越问题</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CorsConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">CorsWebFilter</span> <span class="token function">corsFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">CorsConfiguration</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CorsConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        config<span class="token punctuation">.</span><span class="token function">addAllowedMethod</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        config<span class="token punctuation">.</span><span class="token function">addAllowedOrigin</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        config<span class="token punctuation">.</span><span class="token function">addAllowedHeader</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">UrlBasedCorsConfigurationSource</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UrlBasedCorsConfigurationSource</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PathPatternParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        source<span class="token punctuation">.</span><span class="token function">registerCorsConfiguration</span><span class="token punctuation">(</span><span class="token string">"/**"</span><span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CorsWebFilter</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning">
<p class="custom-container-title">Note</p>
<p>项目之前使用nginx解决跨越问题，使用Gateway网关解决跨越问题时，要注意将之前配置的<code v-pre>@CrossOrigin</code>删除掉。</p>
</div>
</li>
</ol>
<p>参考文章：</p>
<p><a href="https://segmentfault.com/a/1190000041690074" target="_blank" rel="noopener noreferrer">深入学习springCloud——Gateway新版网关<ExternalLinkIcon/></a></p>
</div></template>


