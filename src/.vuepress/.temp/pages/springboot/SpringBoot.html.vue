<template><div><h2 id="springboot-基础" tabindex="-1"><a class="header-anchor" href="#springboot-基础" aria-hidden="true">#</a> SpringBoot 基础</h2>
<h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3>
<p>初次创建<code v-pre>SpringBoot</code>项目之后，在<code v-pre>src/main/resources/</code>目录下存在配置文件 <code v-pre>application.properties</code>，一般不会使用，删掉创建
<code v-pre>application.yaml</code>文件</p>
<blockquote>
<p><code v-pre>yaml</code>：专门用来写配置文件的语言，可以写普通的键值对、对象和数组，对空格的要求及其严格，一个空格表示一个层级关系，可以注入到配置类中</p>
</blockquote>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token comment">## 普通的key-value</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> wyj

<span class="token comment">## 对象</span>
<span class="token key atrule">student1</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> wyj
  <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">18</span>

<span class="token comment">## 行内写法</span>
<span class="token key atrule">student2</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> wyj<span class="token punctuation">,</span> <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span>

<span class="token comment">## 数组</span>
<span class="token key atrule">pets1</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> cat
  <span class="token punctuation">-</span> dog
  <span class="token punctuation">-</span> pig

<span class="token key atrule">pets2</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>cat<span class="token punctuation">,</span>dog<span class="token punctuation">,</span>pig<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-yaml-文件给实体类赋值" tabindex="-1"><a class="header-anchor" href="#使用-yaml-文件给实体类赋值" aria-hidden="true">#</a> 使用 yaml 文件给实体类赋值</h3>
<p>构建实体类 <code v-pre>Person</code> 和 <code v-pre>Dog</code> 类, 使用 <code v-pre>@Value</code> 可以为实体类的属性赋值, 如下 <code v-pre>Dog</code> 类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"旺柴"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"3"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> happy<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> birth<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> maps<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> lists<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Dog</span> dog<span class="token punctuation">;</span>
    
    <span class="token comment">//省略构造器、getter、setter方法</span>
    <span class="token comment">//......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>yaml</code> 文件对<code v-pre>Person</code>类进行赋值(不使用<code v-pre>@Value</code>) :</p>
<ul>
<li>需要对 <code v-pre>Person</code> 类添加  <code v-pre>@ConfigurationProperties</code> 标签并与 <code v-pre>yaml</code> 文件中的 <code v-pre>person</code> 进行绑定</li>
<li><code v-pre>@ConfigurationProperties</code>: 将配置文件中的每一个属性的值, 映射到这个组件中</li>
<li>参数 <code v-pre>prefix = &quot;person&quot; </code>: 将配置文件中的 <code v-pre>person</code> 下面的属性一一对应</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">"person"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> happy<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> birth<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> maps<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> lists<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Dog</span> dog<span class="token punctuation">;</span>
    
    <span class="token comment">//省略构造器、getter、setter方法</span>
    <span class="token comment">//......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>yaml</code> 文件:</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">person</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> wyj
  <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">18</span>
  <span class="token key atrule">happy</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">birth</span><span class="token punctuation">:</span> 2020/12/12
  <span class="token key atrule">maps</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">k1</span><span class="token punctuation">:</span> v1<span class="token punctuation">,</span> <span class="token key atrule">k2</span><span class="token punctuation">:</span> v2<span class="token punctuation">}</span>
  <span class="token key atrule">lists</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> music
    <span class="token punctuation">-</span> girl
    <span class="token punctuation">-</span> sport
  <span class="token key atrule">dog</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> 旺柴
    <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">3</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试输出:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Person{name='wyj', age=18, happy=true, birth=Sat Dec 12 00:00:00 CST 2020, maps={k1=v1, k2=v2}, lists=[music, girl, sport], dog=Dog{name='wangchai', age=3}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>拓展:</p>
<ul>
<li>也可以使用 <code v-pre>@ProPertySource</code> 来加载指定的配置文件</li>
<li><code v-pre>yaml</code> 文件中可以使用占位符号 <code v-pre>${}</code> 随机生成内容</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">dog</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> wangchai_$<span class="token punctuation">{</span>person.hello<span class="token punctuation">:</span>hello<span class="token punctuation">}</span>
    <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试输出:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>dog=Dog{name='wangchai_hello', age=3}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><code v-pre>yaml</code><strong>和</strong><code v-pre>@ConfigurationProperties</code></strong> :</p>
<ul>
<li>配置 <code v-pre>yaml</code> 和 <code v-pre>@ConfigurationProperties</code> 都可以获取到值,推荐 <code v-pre>yaml</code></li>
<li>某个业务中, 只需要获取某个配置文件中的某个值, 可以使用 <code v-pre>@Value</code></li>
<li>针对 <code v-pre>JavaBean</code> 来和配置文件进行映射, 使用 <code v-pre>yaml</code> 配置</li>
</ul>
<h3 id="jsr303校验" tabindex="-1"><a class="header-anchor" href="#jsr303校验" aria-hidden="true">#</a> JSR303校验</h3>
<p><strong><code v-pre>JSR303</code>校验</strong>: 用来进行数据校验</p>
<p>若上述代码中类 <code v-pre>Person</code> 中的属性 <code v-pre>name</code> 需要输入邮箱格式, 则可以在类 <code v-pre>Person</code> 上加 <code v-pre>@Validated</code>, 在 <code v-pre>name</code> 属性上加上校验注解 <code v-pre>@Email()</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Validated</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Email</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">"用户名格式错误,请输入邮箱格式"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> happy<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> birth<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> maps<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> lists<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Dog</span> dog<span class="token punctuation">;</span>
    
    <span class="token comment">//省略构造器、getter、setter方法</span>
    <span class="token comment">//......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yaml 文件:</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">person</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> wyj@qq.com
  
  <span class="token comment">#省略其它属性</span>
  <span class="token comment">#......</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用的校验注解包含:</p>
<table>
<thead>
<tr>
<th>注解名称</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>@Null</td>
<td>检查该字段是否为空</td>
</tr>
<tr>
<td>@NotNull</td>
<td>不能为空</td>
</tr>
<tr>
<td>@NotEmpty</td>
<td>不能为空, 多用于检查 list 是否 size 为 0</td>
</tr>
<tr>
<td>@Max</td>
<td>该字段的值只能小于或等于该值</td>
</tr>
<tr>
<td>@Min</td>
<td>该字段的值只能大于或者等于改值</td>
</tr>
<tr>
<td>@Past</td>
<td>检查该字段的日期是在过去</td>
</tr>
<tr>
<td>@Future</td>
<td>检查该字段的日期是将来的日期</td>
</tr>
<tr>
<td>@Eamil</td>
<td>检查是否为一个有效的邮箱</td>
</tr>
<tr>
<td>@Size(min =, max = )</td>
<td>检查该字段的 size 是否在 min 和 max 之间, 可以是字符串、数组、集合、Map等</td>
</tr>
<tr>
<td>@Pattern</td>
<td>被注解的元素必须是指定的正则表达式</td>
</tr>
</tbody>
</table>
<p><strong>以上代码在 SpringBoot-demo 项目中</strong></p>
<h3 id="多环境配置及配置文件位置" tabindex="-1"><a class="header-anchor" href="#多环境配置及配置文件位置" aria-hidden="true">#</a> 多环境配置及配置文件位置</h3>
<p><code v-pre>yaml</code> 文件可以写在</p>
<ol>
<li><code v-pre>file:./config</code> : 项目根目录下 ( 项目名称下 ) 的 config 文件夹下</li>
<li><code v-pre>file:./</code> : 项目根目录</li>
<li><code v-pre>classpath:/config</code> : 类路径 ( java 文件夹下或 resources 文件夹下) 下的 config 文件夹下</li>
<li><code v-pre>classpath:/</code> : 类路径下</li>
</ol>
<p>优先级逐渐降低</p>
<p>通过 <code v-pre>yaml</code> 配置文件进行多环境配置, 如下:</p>
<p><code v-pre>application.yaml</code>:</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> dev

<span class="token punctuation">---</span>

<span class="token comment">## 开发环境</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8081</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> dev

<span class="token punctuation">---</span>

<span class="token comment">## 测试环境</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8082</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> test
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试代码在 SpringBoot-demo1 项目中</strong></p>
<h2 id="springboot-web-开发" tabindex="-1"><a class="header-anchor" href="#springboot-web-开发" aria-hidden="true">#</a> SpringBoot Web 开发</h2>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="员工管理系统" tabindex="-1"><a class="header-anchor" href="#员工管理系统" aria-hidden="true">#</a> 员工管理系统</h2>
<h3 id="员工管理系统-准备工作" tabindex="-1"><a class="header-anchor" href="#员工管理系统-准备工作" aria-hidden="true">#</a> 员工管理系统 : 准备工作</h3>
<h4 id="dao-层和-pojo-层源码" tabindex="-1"><a class="header-anchor" href="#dao-层和-pojo-层源码" aria-hidden="true">#</a> Dao 层和 Pojo 层源码</h4>
<p>创建新的项目 <code v-pre>SpringBoot-EmployeeMana-01</code>, Pojo 层创建类 <code v-pre>Department</code> 和类 <code v-pre>Employee</code>, Dao 层创建类 <code v-pre>DepartmentDao</code> 和类 <code v-pre>EmployeeDao</code>, 并模拟数据库生成数据, 源码如下 :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 部门表
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Department</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> departmentName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 员工表
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> lastName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> gender<span class="token punctuation">;</span><span class="token comment">//boy-1 girl-0</span>
    <span class="token keyword">private</span> <span class="token class-name">Department</span> department<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> birth<span class="token punctuation">;</span>

  	<span class="token keyword">public</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">,</span> <span class="token class-name">String</span> lastName<span class="token punctuation">,</span> <span class="token class-name">String</span> email<span class="token punctuation">,</span> <span class="token class-name">Integer</span> gender<span class="token punctuation">,</span> <span class="token class-name">Department</span> department<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span> lastName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> email<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>department <span class="token operator">=</span> department<span class="token punctuation">;</span>
        <span class="token comment">// 默认创建日期</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>birth <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DepartmentDao</span> <span class="token punctuation">{</span>
    <span class="token comment">//模拟数据库的数据</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Department</span><span class="token punctuation">></span></span> departments <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        departments <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Department</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        departments<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">101</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Department</span><span class="token punctuation">(</span><span class="token number">101</span><span class="token punctuation">,</span> <span class="token string">"教学部"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        departments<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">102</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Department</span><span class="token punctuation">(</span><span class="token number">102</span><span class="token punctuation">,</span> <span class="token string">"市场部"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        departments<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">103</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Department</span><span class="token punctuation">(</span><span class="token number">103</span><span class="token punctuation">,</span> <span class="token string">"教研部"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        departments<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">104</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Department</span><span class="token punctuation">(</span><span class="token number">104</span><span class="token punctuation">,</span> <span class="token string">"运营部"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        departments<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">105</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Department</span><span class="token punctuation">(</span><span class="token number">105</span><span class="token punctuation">,</span> <span class="token string">"后勤部"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//获取所有部门信息</span>
    <span class="token keyword">public</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Department</span><span class="token punctuation">></span></span> <span class="token function">getDepartment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> departments<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//通过 id 获取部门名称</span>
    <span class="token keyword">public</span> <span class="token class-name">Department</span> <span class="token function">getDepartmentById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> departments<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EmployeeDao</span> <span class="token punctuation">{</span>
    <span class="token comment">//模拟数据库的数据</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Employee</span><span class="token punctuation">></span></span> employees <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">DepartmentDao</span> departmentDao<span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        employees <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Employee</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        employees<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">1001</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token number">1001</span><span class="token punctuation">,</span> <span class="token string">"AA"</span><span class="token punctuation">,</span> <span class="token string">"1013201176@qq.com"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Department</span><span class="token punctuation">(</span><span class="token number">101</span><span class="token punctuation">,</span> <span class="token string">"教学部"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        employees<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">1002</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token number">1002</span><span class="token punctuation">,</span> <span class="token string">"BB"</span><span class="token punctuation">,</span> <span class="token string">"2013201176@qq.com"</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Department</span><span class="token punctuation">(</span><span class="token number">102</span><span class="token punctuation">,</span> <span class="token string">"市场部"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        employees<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">1003</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token number">1003</span><span class="token punctuation">,</span> <span class="token string">"CC"</span><span class="token punctuation">,</span> <span class="token string">"3013201176@qq.com"</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Department</span><span class="token punctuation">(</span><span class="token number">103</span><span class="token punctuation">,</span> <span class="token string">"教研部"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        employees<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">1004</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token number">1004</span><span class="token punctuation">,</span> <span class="token string">"DD"</span><span class="token punctuation">,</span> <span class="token string">"4013201176@qq.com"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Department</span><span class="token punctuation">(</span><span class="token number">104</span><span class="token punctuation">,</span> <span class="token string">"运营部"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        employees<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">1005</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token number">1005</span><span class="token punctuation">,</span> <span class="token string">"EE"</span><span class="token punctuation">,</span> <span class="token string">"5013201176@qq.com"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Department</span><span class="token punctuation">(</span><span class="token number">105</span><span class="token punctuation">,</span> <span class="token string">"后勤部"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//员工主键自增</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Integer</span> initId <span class="token operator">=</span> <span class="token number">1006</span><span class="token punctuation">;</span>
    <span class="token comment">// 增加一个员工</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">Employee</span> employee<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>employee<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            employee<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>initId<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 该行代码表明每次增加的员工一定有相对于的部门</span>
        employee<span class="token punctuation">.</span><span class="token function">setDepartment</span><span class="token punctuation">(</span>departmentDao<span class="token punctuation">.</span><span class="token function">getDepartmentById</span><span class="token punctuation">(</span>employee<span class="token punctuation">.</span><span class="token function">getDepartment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        employees<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>employee<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> employee<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 查询全部员工信息</span>
    <span class="token keyword">public</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">></span></span> <span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> employees<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 通过 id 查询员工</span>
    <span class="token keyword">public</span> <span class="token class-name">Employee</span> <span class="token function">getEmployeeById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> employees<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 删除员工信息通过 id</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        employees<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="lombok-的使用" tabindex="-1"><a class="header-anchor" href="#lombok-的使用" aria-hidden="true">#</a> Lombok 的使用</h4>
<p><strong>Lombok</strong>在使用之前需要进行安装, 参考链接<a href="https://blog.csdn.net/qq_36043458/article/details/103166297" target="_blank" rel="noopener noreferrer">IDEA如何安装lombok插件（在线和离线两种方式）<ExternalLinkIcon/></a></p>
<p><strong>Lombok</strong> 可以通过注解的方式, 在编译时自动为属性生成构造器, getter/setter, equals, hashcode, toString方法, 参考链接 : <a href="https://www.zhihu.com/question/42348457" target="_blank" rel="noopener noreferrer">Java开发中用到的，lombok是什么？<ExternalLinkIcon/></a>, 部分 lombok 标签含义:</p>
<table>
<thead>
<tr>
<th>标签</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>@NoArgsConstructor</code></td>
<td>用在类上, 自动生成无参构造函数</td>
</tr>
<tr>
<td><code v-pre>@AllArgsConstructor</code></td>
<td>用在类上, 自动生成使用所有参数的构造函数</td>
</tr>
<tr>
<td><code v-pre>@Data</code></td>
<td>注解在类上，相当于同时使用了@ToString、@EqualsAndHashCode、@Getter、@Setter和@RequiredArgsConstrutor这些注解</td>
</tr>
</tbody>
</table>
<p>SpringBoot 项目中使用 Lombok 需要在 pom 文件中引入依赖 :</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="静态资源引入" tabindex="-1"><a class="header-anchor" href="#静态资源引入" aria-hidden="true">#</a> 静态资源引入</h4>
<p>静态资源模板可以在网上搜索 <code v-pre>Bootstrap</code> 模板下载使用, <code v-pre>html</code> 文件放在 templates 文件夹下, <code v-pre>css</code>、<code v-pre>js</code>、<code v-pre>img</code> 放在 static 文件夹下</p>
<h3 id="员工管理系统-1" tabindex="-1"><a class="header-anchor" href="#员工管理系统-1" aria-hidden="true">#</a> 员工管理系统</h3>
<h4 id="员工管理系统-首页实现" tabindex="-1"><a class="header-anchor" href="#员工管理系统-首页实现" aria-hidden="true">#</a> 员工管理系统 : 首页实现</h4>
<p><strong>首页配置 : 所有页面的静态资源都需要使用 Thymeleaf 接管</strong></p>
<p>首页的实现需要一个 <code v-pre>controller</code>, 源码如下:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IndexController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token string">"/index.html"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"index"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者在自定义 <code v-pre>MVC</code> 配置类 <code v-pre>MyMvcConfig</code> 中实现 :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyMvcConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addViewControllers</span><span class="token punctuation">(</span><span class="token class-name">ViewControllerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry<span class="token punctuation">.</span><span class="token function">addViewController</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">"index"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyMvcConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addViewControllers</span><span class="token punctuation">(</span><span class="token class-name">ViewControllerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry<span class="token punctuation">.</span><span class="token function">addViewController</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">"index"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registry<span class="token punctuation">.</span><span class="token function">addViewController</span><span class="token punctuation">(</span><span class="token string">"/index.html"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">"index"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后便可以删掉 controller 类 <code v-pre>IndexController</code>, 对 <code v-pre>index.html</code> 等文件里面的元素标签内容进行修改, 修改为 Thymeleaf 格式 :</p>
<p><strong>第一步</strong> : 要在 <code v-pre>html</code> 文件中引入 <code v-pre>Thymeleaf</code> 头文件</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>xmlns:th="http://www.thymeleaf.org"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第二步</strong> : 修改 <code v-pre>html</code> 文件中非 <code v-pre>Thymeleaf</code> 语法的内容 :</p>
<p><code v-pre>html</code> 中本地链接内容使用 <code v-pre>th:href</code> 修改, 并使用 <code v-pre>@{}</code> 进行取值</p>
<blockquote>
<p>注意: 使用 <code v-pre>@{/**}</code> 的形式代表项目的 <code v-pre>class</code> 目录, 即项目的根目录。找 <code v-pre>css</code> 文件夹下的 <code v-pre>.css</code> 文件, 可以直接写成 <code v-pre>@{/css/bootstrap.min.css}</code>,  <code v-pre>resources</code> 文件夹下的 <code v-pre>static</code> 、<code v-pre>templates</code> 都是静态目录, 都不用写</p>
</blockquote>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>asserts/css/bootstrap.min.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改为 :</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/css/bootstrap.min.css}<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<p><code v-pre>src</code> 修改为 <code v-pre>th:src</code> :</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-4<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>asserts/img/bootstrap-solid.svg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>72<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>72<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改为 :</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-4<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/img/bootstrap-solid.svg}<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>72<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>72<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<p>非本地链接不要修改 :</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav-link<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://getbootstrap.com/docs/4.0/examples/dashboard/#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Sign out<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<p>可以在 yaml 文件添加以下内容 :</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token comment">## 项目虚拟路径</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">servlet</span><span class="token punctuation">:</span>
    <span class="token key atrule">context-path</span><span class="token punctuation">:</span> /wyj
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改项目虚拟路径, 之后访问项目的时候则需要在 <code v-pre>http://localhost:8080/</code>
加上 <code v-pre>wyj</code>,  <code v-pre>http://localhost:8080/wyj</code></p>
<p>之后项目启动会自动拼接 :</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/wyj/css/bootstrap.min.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="员工管理系统-国际化" tabindex="-1"><a class="header-anchor" href="#员工管理系统-国际化" aria-hidden="true">#</a> 员工管理系统 : 国际化</h4>
<p>参考视频链接 : <a href="https://www.bilibili.com/video/BV1PE411i7CV?p=22" target="_blank" rel="noopener noreferrer">员工管理系统 : 国际化<ExternalLinkIcon/></a></p>
<h4 id="员工管理系统-登录功能实现" tabindex="-1"><a class="header-anchor" href="#员工管理系统-登录功能实现" aria-hidden="true">#</a> 员工管理系统 : 登录功能实现</h4>
<p>登录功能的实现, 登录之后 <code v-pre>index.html</code> 要跳转到一个 controller, 修改代码 :</p>
<p>跳转 action 使用 <code v-pre>th:action</code> 修改 :</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-signin<span class="token punctuation">"</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dashboard.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改为 :</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-signin<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/user/login}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>@{/user/login}</code>为类 <code v-pre>LoginController</code>中写的登录跳转链接。将前端 <code v-pre>index.html</code> 输入的用户名 <code v-pre>name=&quot;username&quot;</code> 和密码 <code v-pre>name=&quot;password&quot;</code> 绑定到类 <code v-pre>LoginController</code> 的 login() 方法参数中(使用标签<code v-pre>@RequestParam</code>), 之后跳转到类 <code v-pre>LoginController</code> 进行页面的分发处理 :</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Username<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">autofocus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
			
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoginController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/user/login"</span><span class="token punctuation">)</span>
    <span class="token comment">//@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">login</span><span class="token punctuation">(</span>
            <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> username<span class="token punctuation">,</span>
            <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> password<span class="token punctuation">,</span>
            <span class="token class-name">Model</span> model<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 具体业务</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> password<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">"123456"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">"dashboard"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 用户名密码错误</span>
            model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"msg"</span><span class="token punctuation">,</span> <span class="token string">"用户名或者密码错误！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token string">"index"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用户名或者密码输入正确, 跳转到 <code v-pre>dashboard.html</code> 页面,
用户名或者密码输入错误, 跳回到 <code v-pre>index.html</code> 页面, 并将错误信息显示出来, 错误信息显示需要在 <code v-pre>index.html</code> 文件中添加如下代码 :</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> #ff0000</span><span class="token punctuation">"</span></span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${msg}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${not #strings.isEmpty(msg)}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上代码表示如果 <code v-pre>msg</code> 不为空, 则将 <code v-pre>msg</code> 的信息显示到登录界面, <code v-pre>Thymeleaf</code> 中存在很多工具类, 如 <code v-pre>#strings.isEmpty(msg)</code> 表示 msg 消息是否为空, 具体参考<a href="https://blog.csdn.net/ryuenkyo/article/details/103291168" target="_blank" rel="noopener noreferrer">Thymeleaf 表达式工具类<ExternalLinkIcon/></a></p>
<p>登录跳转成功之后, 跳转到 <code v-pre>dashboard.html</code> 页面, 会发现浏览器网址链接显示 :</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code><span class="token header"><span class="token header-name keyword">http</span><span class="token punctuation">:</span><span class="token header-value">//localhost:8080/wyj/user/login?username=wyj&amp;password=123456</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为了更符合实际项目开发, 隐藏 <code v-pre>user/login?username=wyj&amp;password=123456 </code>, 可以做一个简单的映射关系, 在类 <code v-pre>MyMvcConfig</code> 的 <code v-pre>addViewControllers()</code> 方法添加一行映射关系代码 :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>registry<span class="token punctuation">.</span><span class="token function">addViewController</span><span class="token punctuation">(</span><span class="token string">"main.html"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">"dashboard"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上代码表示如何如果访问 <code v-pre>main.html</code>, 则会跳转到 <code v-pre>dashboard.html</code> 页面中, 在将类 <code v-pre>LoginController</code> 跳转到 <code v-pre>dashboard.html</code> 页面的代码修改 :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> password<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">"123456"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"dashboard"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改为 :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> password<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">"123456"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//网页重定向</span>
    <span class="token comment">//return "dashboard"; </span>
    <span class="token keyword">return</span> <span class="token string">"redirect:/main.html"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终登录成功跳转到 <code v-pre>dashboard.html</code> 页面, 浏览器显示的链接为 :</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code><span class="token header"><span class="token header-name keyword">http</span><span class="token punctuation">:</span><span class="token header-value">//localhost:8080/wyj/main.html</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="员工管理系统-登录拦截器" tabindex="-1"><a class="header-anchor" href="#员工管理系统-登录拦截器" aria-hidden="true">#</a> 员工管理系统 : 登录拦截器</h4>
<p>登录拦截器需要实现的功能为 : 员工在登录之后进行拦截, 判断用户是否有权限登录, 如果有则进行跳转, 否则退回到登录页面, 并提示用户没有权限登录。因此需要在 <code v-pre>controller</code> 的类 <code v-pre>LoginController</code> <code v-pre>login()</code> 方法中拿到用户信息, 并交给拦截器类进行用户权限的判断, 使用 Session 可以在多个页面之间进行信息传递</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> password<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">"123456"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"loginUser"</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//获取用户信息保存在 session 中,在拦截器类中拿到信息进行权限判断</span>
    session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"loginUser"</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//return "dashboard";</span>
    <span class="token keyword">return</span> <span class="token string">"redirect:/main.html"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>拦截器的实现需要在 <code v-pre>config</code> 文件夹下创建类 <code v-pre>LoginHandlerInterceptor</code>, 实现接口 <code v-pre>HandlerInterceptor</code>, 并重写 <code v-pre>preHandle()</code> 方法</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoginHandlerInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">HandlerInterceptor</span> <span class="token punctuation">{</span>
    <span class="token comment">// preHandle() 在请求方法之前执行,返回值为boolean类型,true表示请求继续执行,false表示请求结束,postHandle()在请求处理完成,dispatcherServlet返回视图后执行</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">//登录成功之后, 拿到用户的 session 信息</span>
        <span class="token class-name">Object</span> loginUser <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">"loginUser"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>loginUser <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//进行权限判断</span>
            request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"msg"</span><span class="token punctuation">,</span> <span class="token string">"没有权限, 请先登录"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 请求的分发, 退回到登录界面</span>
            request<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">"/index.html"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterCompletion</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> <span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">postHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> <span class="token class-name">ModelAndView</span> modelAndView<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>拦截器类 <code v-pre>HandlerInterceptor</code> 需要配置在 <code v-pre>Bean</code> 里面注册, 在 <code v-pre>MVC</code> 自定义配置类 <code v-pre>MyMvcConfig</code> 中重写方法 <code v-pre>addInterceptors()</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//将自定义拦截器注册到 Bean 里面</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addInterceptors</span><span class="token punctuation">(</span><span class="token class-name">InterceptorRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// addPathPatterns("/**") : 拦截所有请求</span>
    <span class="token comment">// excludePathPatterns() : 不需要拦截的请求</span>
    registry<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LoginHandlerInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">addPathPatterns</span><span class="token punctuation">(</span><span class="token string">"/**"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">excludePathPatterns</span><span class="token punctuation">(</span><span class="token string">"/index.html"</span><span class="token punctuation">,</span> <span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token string">"/user/login"</span><span class="token punctuation">,</span> <span class="token string">"/css/*"</span><span class="token punctuation">,</span> <span class="token string">"/img/**"</span><span class="token punctuation">,</span> <span class="token string">"/js/**"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>登录成功之后, 在主界面 <code v-pre>dashboard.html</code> 显示登录的用户名, 修改 <code v-pre>dashboard.html</code> 以下内容 :</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar-brand col-sm-3 col-md-2 mr-0<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://getbootstrap.com/docs/4.0/examples/dashboard/#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Company name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改为 :</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar-brand col-sm-3 col-md-2 mr-0<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://getbootstrap.com/docs/4.0/examples/dashboard/#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>[[${session.loginUser}]]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意 : <code v-pre>html</code> 中可以使用 <code v-pre>[[${session.loginUser}]]</code> 的方式取值</p>
<h4 id="员工列表展示" tabindex="-1"><a class="header-anchor" href="#员工列表展示" aria-hidden="true">#</a> 员工列表展示</h4>
<h5 id="后台编写" tabindex="-1"><a class="header-anchor" href="#后台编写" aria-hidden="true">#</a> 后台编写</h5>
<p>员工列表的展示首先需要在 <code v-pre>controller</code> 层写一个类 <code v-pre>EmployeeController</code> :</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EmployeeController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">EmployeeDao</span> employeeDao<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/emps"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ctrl+alt+v 自动补全函数返回值</span>
        <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">></span></span> employees <span class="token operator">=</span> employeeDao<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"emps"</span><span class="token punctuation">,</span> employees<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"emp/list"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="th-fragment-提取公共页面" tabindex="-1"><a class="header-anchor" href="#th-fragment-提取公共页面" aria-hidden="true">#</a> th:fragment 提取公共页面</h5>
<ul>
<li>
<p>模板中，经常希望从其他模板中包含⼀些部分，如⻚眉，⻚脚，公共菜单等部分，为了做到这⼀点，<code v-pre>Thymeleaf</code> 可以使⽤ <code v-pre>th:fragment</code>  属性来定义被包含的模版⽚段，以供其他模版包含</p>
</li>
<li>
<p>使用 <code v-pre>th:fragment</code> 定义了需要 copy 的片段之后，可以使⽤ <code v-pre>th:insert</code> 或 <code v-pre>th:replace</code> 属性包含进需要的页面中</p>
</li>
</ul>
<p>使用项目 <code v-pre>SpringBoot-EmployeeMana-02</code> 提取公共页面 : <strong>侧边栏和头部导航栏内容</strong></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211207111204341.png" alt="image-20211207111204341" loading="lazy"></p>
<p><strong>员工管理前端页面跳转地址的修改：</strong></p>
<p><strong>1、项目需求</strong>：点击 <code v-pre>员工管理</code> ，跳转到<code v-pre>list.html</code> 页面显示当前员工的信息</p>
<ul>
<li>
<p>修改 <code v-pre>dashboard.html</code> 和 <code v-pre>list.html</code> 相应内容</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav-link<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://getbootstrap.com/docs/4.0/examples/dashboard/#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>24<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>24<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 0 24 24<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentColor<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-linecap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-linejoin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>feather feather-users<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>9<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>7<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>circle</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>M23 21v-2a4 4 0 0 0-3-3.87<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>M16 3.13a4 4 0 0 1 0 7.75<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
      Customers
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改为：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav-link<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/emps}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>24<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>24<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 0 24 24<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentColor<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-linecap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-linejoin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>feather feather-users<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>9<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>7<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>circle</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>M23 21v-2a4 4 0 0 0-3-3.87<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>M16 3.13a4 4 0 0 1 0 7.75<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
      员工管理
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码主要修改 <code v-pre>href</code> 部分，使用 <code v-pre>th:href</code> 接管</p>
</li>
</ul>
<p><strong>2、抽取公共的代码部分</strong>（<code v-pre>list.html</code>和<code v-pre>dashboard.html</code>）：侧边栏和顶部导航栏</p>
<ul>
<li>
<p><code v-pre>dashboard.html</code>页面，使用 <code v-pre>th:fragment</code> 抽取代码公共部分内容</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--顶部导航栏--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--...--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--侧边栏--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col-md-2 d-none d-md-block bg-light sidebar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   <span class="token comment">&lt;!--...--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改为：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--顶部导航栏--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>fragment</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topbar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--...--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--侧边栏--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col-md-2 d-none d-md-block bg-light sidebar<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>fragment</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sidebar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   <span class="token comment">&lt;!--...--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>list.html</code> 页面</p>
<p>使用 <code v-pre>dashboard.html</code> 抽取的公共部分内容来组建<code v-pre>list.html</code> 页面的侧边栏和顶部导航栏</p>
<p><code v-pre>list.html</code> 页面的顶部导航栏</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--...--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用代码</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>insert</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>~{dashboard::topbar}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代替，<code v-pre>list.html</code> 页面的侧边栏</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col-md-2 d-none d-md-block bg-light sidebar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   <span class="token comment">&lt;!--...--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用代码</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>insert</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>~{dashboard::sidebar}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代替，以上代码使用到 <code v-pre>Thymeleaf</code> 中的 <code v-pre>th:insert</code> 语法</p>
</li>
</ul>
<p><strong>3、进一步抽取公共的代码</strong></p>
<p>公共代码部分侧边栏和头部导航栏内容可以单独抽取出来，放在一个单独的文件中</p>
<ul>
<li>
<p>在<code v-pre>templates</code>目录下面创建<code v-pre>commons</code>目录，在<code v-pre>commons</code>目录下面创建<code v-pre>commons.html</code>放公共代码</p>
</li>
<li>
<p>将 <code v-pre>dashboard.html</code> 中的侧边栏和头部导航栏代码提取出来放在 <code v-pre>commons.html</code> 中</p>
</li>
<li>
<p>使用 <code v-pre>th:replace</code> 在 <code v-pre>dashboard.html</code> 中补全公共代码部分，此时的公共代码部分在 <code v-pre>commons</code> 文件夹下的<code v-pre>commons.html</code> 下</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--顶部导航栏--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>~{commons/commons::topbar}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--侧边栏--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>~{commons/commons::sidebar}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>list.html</code> 补全方法与 <code v-pre>dashboard.html</code> 一样， <strong><code v-pre>th:replace</code> 和 <code v-pre>th:insert</code> 效果一样</strong></p>
</li>
</ul>
<h4 id="侧边栏点中高亮功能" tabindex="-1"><a class="header-anchor" href="#侧边栏点中高亮功能" aria-hidden="true">#</a> 侧边栏点中高亮功能</h4>
<p>在侧边栏中，鼠标点中某一选项，该选项会高亮显示，如下图所示：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211207172825857.png" alt="image-20211207172825857" loading="lazy"></p>
<p><code v-pre>commons.html</code> 中的代码</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav-link active<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/main.html}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>active</code> 表示高亮状态，当点击<code v-pre>首页</code> 选项的时候，调用 <code v-pre>dashboard.html</code> 中代码，此时可以在 <code v-pre>dashboard.html</code> 调用侧边栏代码部分传递一个参数，代码如下：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>~{commons/commons::sidebar}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改为：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>~{commons/commons::sidebar(active='main.html')}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同理，<code v-pre>list.html</code> 代码修改如下：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--侧边栏--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>insert</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>~{commons/commons::sidebar(active='list.html')}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>commons.html</code> 接收该到参数 <code v-pre>active</code> 进行侧边栏显示的时候，使用 **<code v-pre>Thymeleaf</code> 三元运算符：if-then-else:（if）?（then）:（else）**判断高亮显示哪一个鼠标点击事件</p>
<p>在  <code v-pre>commons.html</code> 中接受参数并进行判断代码修改如下：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav-link active<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/main.html}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改为：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${active=='main.html'?'nav-link active':'nav-link'}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/main.html}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav-link active<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/emps}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改为：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${active=='list.html'?'nav-link active'?'nav-link'}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/emps}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意要使用 <code v-pre>Thymeleaf</code> 中的 <code v-pre>th:class</code> 替换 <code v-pre>class</code></strong> ，以上代码整体片段如下：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--侧边栏--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col-md-2 d-none d-md-block bg-light sidebar<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>fragment</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sidebar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sidebar-sticky<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav flex-column<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${active=='main.html'?'nav-link active':'nav-link'}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/main.html}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

                  	.............
                    首页 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sr-only<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>(current)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
            .............
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${active=='list.html'?'nav-link active':'nav-link'}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/emps}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

                    .............
                    员工管理
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
            .............
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
        .............
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="员工列表信息循环显示" tabindex="-1"><a class="header-anchor" href="#员工列表信息循环显示" aria-hidden="true">#</a> 员工列表信息循环显示</h4>
<p>员工列表循环显示修改 <code v-pre>list.html</code> 文件相应内容，<code v-pre>&lt;thead&gt;</code> 为表头，<code v-pre>&lt;tbody&gt;</code>  为表数据，代码如下：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col-md-9 ml-sm-auto col-lg-10 pt-3 px-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Section title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-responsive<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table table-striped table-sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>id<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>lastName<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>gender<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>department<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>birth<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>操作<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name"><span class="token namespace">th:</span>each</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>emp:${emps}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${emp.getId()}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${emp.getLastName()}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${emp.getEmail()}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${emp.getGender()==0?'女':'男'}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${emp.department.getDepartmentName()}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${#dates.format(emp.getBirth(),'yyyy-MM-dd HH:mm:ss')}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-sm btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>编辑<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-sm btn-danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>删除<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>

         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意： <code v-pre>Thymeleaf</code> 中的定义了许多对日期格式进行设置的方法，例如：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>${#dates.format(date,'dd/MMM/yyyy HH:mm')}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="添加员工信息" tabindex="-1"><a class="header-anchor" href="#添加员工信息" aria-hidden="true">#</a> 添加员工信息</h4>
<p>员工信息的添加需要单独编写一个<code v-pre>Button</code>按钮，<a href="https://getbootstrap.com/docs/5.1/components/accordion/" target="_blank" rel="noopener noreferrer"><code v-pre>BootStrap</code> 官方网站<ExternalLinkIcon/></a>   中提供了前端界面各类组件的代码，直接在其官网寻找所需要的组件代码拿来用即可</p>
<p>流程：</p>
<ul>
<li>当点击<code v-pre>添加</code>按钮时，跳转到员工信息添加界面 <code v-pre>add.html</code>，界面 <code v-pre>add.html</code>的头部导航栏和侧边栏仍然保持不变，因此需要在原有代码基础上创建一个添加界面 <code v-pre>add.html</code>，该界面需要一个 Form 表单，用来添加员工信息。</li>
<li>在创建的 Form 表单中添加完员工信息之后，提交到一个 <code v-pre>Controller</code>，该<code v-pre>Controller</code>将表单信息进行处理，添加到员工列表中去</li>
<li>该<code v-pre>Controller</code>最终返回全部员工信息展示到<code v-pre>list.html</code>界面</li>
</ul>
<h5 id="添加员工信息按钮代码" tabindex="-1"><a class="header-anchor" href="#添加员工信息按钮代码" aria-hidden="true">#</a> 添加员工信息按钮代码</h5>
<p>在 <code v-pre>list.html</code> 中找到 <code v-pre>Section title</code> 修改为一个 <code v-pre>添加</code> 按钮</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Section title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改为：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-secondary<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/emp}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>添加<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当点击<code v-pre>添加</code>按钮时，可以将请求发送到对应的<code v-pre>Controller</code></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211208164423067.png" alt="image-20211208164423067" loading="lazy"></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211208165615320.png" alt="image-20211208165615320" loading="lazy"></p>
<h5 id="后台跳转-controller-代码" tabindex="-1"><a class="header-anchor" href="#后台跳转-controller-代码" aria-hidden="true">#</a> 后台跳转 Controller 代码</h5>
<p>使用 RestFul 分格来进行资源映射，在类<code v-pre>EmployeeController</code>编写后台<code v-pre>Controller</code>代码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/emp"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toAddPage</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Department</span><span class="token punctuation">></span></span> departments <span class="token operator">=</span> departmentDao<span class="token punctuation">.</span><span class="token function">getDepartment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"departments"</span><span class="token punctuation">,</span>departments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"emp/add"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>toAddPage()</code>进行请求分发，将视图员工信息添加页面<code v-pre>add.html</code>显示到前端</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211209164810639.png" alt="image-20211209164810639" loading="lazy"></p>
<h5 id="创建添加员工信息代码" tabindex="-1"><a class="header-anchor" href="#创建添加员工信息代码" aria-hidden="true">#</a> 创建添加员工信息代码</h5>
<ul>
<li>
<p>员工信息添加<code v-pre>add.html</code> 代码如下：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col-md-9 ml-sm-auto col-lg-10 pt-3 px-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name"><span class="token namespace">th:</span>action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/emp}<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>姓名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lastName<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>邮箱<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span>  <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>性别<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check form-check-inline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check-input<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gender<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check-label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>男<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check form-check-inline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check-input<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gender<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check-label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>女<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>部门<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>department.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name"><span class="token namespace">th:</span>each</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dept:${departments}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${dept.getDepartmentName()}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${dept.getId()}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>生日<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>birth<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2020/07/25 18:00:00<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>添加<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>add.html</code>中，每一个标签设置一个<code v-pre>name</code>属性，<code v-pre>name</code>属性值和员工类<code v-pre>Employee</code>定义的属性字段名称需要一样，才可以一一映射，员工类<code v-pre>Employee</code>如下</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> lastName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> gender<span class="token punctuation">;</span><span class="token comment">//boy-1 girl-0</span>
    <span class="token keyword">private</span> <span class="token class-name">Department</span> department<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> birth<span class="token punctuation">;</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性<code v-pre>department</code>是一个对象，类<code v-pre>EmployeeDao</code>中的<code v-pre>save()</code>方法每次增加一个新的员工信息时，该员工的部门名称是通过部门的<code v-pre>id</code>得到的，见<code v-pre>save()</code>方法如下代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 该行代码表明每次增加的员工一定有相对应的部门</span>
employee<span class="token punctuation">.</span><span class="token function">setDepartment</span><span class="token punctuation">(</span>departmentDao<span class="token punctuation">.</span><span class="token function">getDepartmentById</span><span class="token punctuation">(</span>employee<span class="token punctuation">.</span><span class="token function">getDepartment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>因此在<code v-pre>add.html</code>中，需要拿到部门的<code v-pre>id</code>传递到后台代码，<code v-pre>add.html</code>中通过代码<code v-pre>th:value=&quot;${dept.getId()}&quot;</code>得到部门<code v-pre>id</code>，映射到<code v-pre>name</code>属性<code v-pre>department.id</code>上，具体代码如下：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>部门<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>department.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name"><span class="token namespace">th:</span>each</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dept:${departments}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${dept.getDepartmentName()}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${dept.getId()}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h5 id="显示最终员工信息代码" tabindex="-1"><a class="header-anchor" href="#显示最终员工信息代码" aria-hidden="true">#</a> 显示最终员工信息代码</h5>
<p>员工信息通过<code v-pre>add.html</code>添加之后，点击<code v-pre>添加</code>按钮，会将员工信息通过<code v-pre>Post</code>请求的方式传递到后台<code v-pre>Controller</code>代码，映射<code v-pre>URL</code>仍然为<code v-pre>/emp</code>，体现了 RestFul 风格，后台<code v-pre>Controller</code>代码将新添加的员工信息保存在员工信息列表中，并展示到前端显示，<code v-pre>Controller</code>代码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EmployeeController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">DepartmentDao</span> departmentDao<span class="token punctuation">;</span>
    
   	<span class="token comment">//...省略部分代码</span>
    
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/emps"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ctrl+alt+v 自动补全函数返回值</span>
        <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">></span></span> employees <span class="token operator">=</span> employeeDao<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"emps"</span><span class="token punctuation">,</span> employees<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"emp/list"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/emp"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">addEmp</span><span class="token punctuation">(</span><span class="token class-name">Employee</span> employee<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        employeeDao<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>employee<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"redirect:/emps"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="日期格式修改" tabindex="-1"><a class="header-anchor" href="#日期格式修改" aria-hidden="true">#</a> 日期格式修改</h4>
<p><code v-pre>Spring</code>中严格限制了日志格式的书写方式，默认是<code v-pre>yyyy/MM/dd</code>表达方式，如果写成<code v-pre>yyyy-MM-dd</code>，程序则会报错：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211210095647603.png" alt="image-20211210095647603" loading="lazy"></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211210095714892.png" alt="image-20211210095714892" loading="lazy"></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211210095733663.png" alt="image-20211210095733663" loading="lazy"></p>
<p>需要<strong>在 <code v-pre>application.yaml</code> 文件中添加配置来修改日期格式</strong></p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>##日期格式
spring:
  mvc:
    format:
      date: yyyy-MM-dd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改员工信息" tabindex="-1"><a class="header-anchor" href="#修改员工信息" aria-hidden="true">#</a> 修改员工信息</h4>
<h5 id="提交按钮代码" tabindex="-1"><a class="header-anchor" href="#提交按钮代码" aria-hidden="true">#</a> 提交按钮代码</h5>
<p>点击<code v-pre>编辑</code>按钮，跳转到后台<code v-pre>Controller</code></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-sm btn-primary<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/emp/}+${emp.getId()}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>编辑<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211210104340318.png" alt="image-20211210104340318" loading="lazy"></p>
<h5 id="后台controller代码" tabindex="-1"><a class="header-anchor" href="#后台controller代码" aria-hidden="true">#</a> 后台Controller代码</h5>
<p>后台<code v-pre>Controller</code>拿到需要编辑的员工<code v-pre>id</code>，查询到该员工的信息以及所有部门信息，并将请求分发到员工信息更新页面<code v-pre>update.html</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/emp/{id}"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toUpdateEmp</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> id<span class="token punctuation">,</span> <span class="token class-name">Model</span> model<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//查出原来的数据</span>
    <span class="token class-name">Employee</span> employee <span class="token operator">=</span> employeeDao<span class="token punctuation">.</span><span class="token function">getEmployeeById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"emp"</span><span class="token punctuation">,</span> employee<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//查出所有部门信息</span>
    <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Department</span><span class="token punctuation">></span></span> departments <span class="token operator">=</span> departmentDao<span class="token punctuation">.</span><span class="token function">getDepartment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"departments"</span><span class="token punctuation">,</span>departments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"emp/update"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="员工信息修改前端" tabindex="-1"><a class="header-anchor" href="#员工信息修改前端" aria-hidden="true">#</a> 员工信息修改前端</h5>
<p>员工信息更新页面先将当前员工的所有信息展示到界面上，姓名、邮箱等<code v-pre>text</code>属性使用<code v-pre>th:value</code>显示，性别等<code v-pre>radio</code>属性使用<code v-pre>th:checked</code>显示，部门属性（下拉框<code v-pre>select</code>属性）使用<code v-pre>th:selected</code>显示</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name"><span class="token namespace">th:</span>action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/updateEmp}<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--隐藏域--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hidden<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${emp.getId()}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>姓名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">th:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${emp.getLastName()}<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lastName<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>邮箱<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">th:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${emp.getEmail()}<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span>  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>性别<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check form-check-inline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">th:</span>checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${emp.getGender()==1}<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check-input<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gender<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check-label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>男<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check form-check-inline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">th:</span>checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${emp.getGender()==0}<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check-input<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gender<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check-label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>女<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>部门<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>department.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name"><span class="token namespace">th:</span>selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${dept.getId()==emp.getDepartment().getId()}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>each</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dept:${departments}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${dept.getDepartmentName()}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${dept.getId()}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>生日<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">th:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${#dates.format(emp.getBirth(), 'yyyy-MM-dd HH:mm:ss')}<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>birth<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2020/07/25 18:00:00<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>修改<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p>
<ul>
<li>
<p>属性<code v-pre>生日</code>使用 <code v-pre>Thymeleaf</code>中 <code v-pre>#dates.format()</code>对日期格式进行了转化</p>
</li>
<li>
<p>使用隐藏域<code v-pre>type=&quot;hidden&quot;</code>来获取员工的<code v-pre>id</code>信息，使其不显示到前端界面中，但可以传递到后台<code v-pre>Controller</code>。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hidden<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${emp.getId()}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h5 id="员工信息修改后端" tabindex="-1"><a class="header-anchor" href="#员工信息修改后端" aria-hidden="true">#</a> 员工信息修改后端</h5>
<p>通过前端<code v-pre>update.html</code>修改的员工信息传递到后台<code v-pre>Controller</code>进行提交，代码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/updateEmp"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">updateEmp</span><span class="token punctuation">(</span><span class="token class-name">Employee</span> employee<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>employee<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    employeeDao<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>employee<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"redirect:/emps"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p>
<ul>
<li><code v-pre>employeeDao.save(employee)</code>保存修改后的员工信息，如果在<code v-pre>update.html</code>中不使用隐藏域<code v-pre>type=&quot;hidden&quot;</code>来获取员工的<code v-pre>id</code>信息，后端代码则获取不到员工的<code v-pre>id</code>信息，此时<code v-pre>save()</code>方法会创建出一个新的员工信息（由于<code v-pre>id</code>自增）而并非是修改原有员工信息</li>
</ul>
<h4 id="删除员工信息" tabindex="-1"><a class="header-anchor" href="#删除员工信息" aria-hidden="true">#</a> 删除员工信息</h4>
<ul>
<li>
<p><code v-pre>list.html</code>删除按钮代码</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-sm btn-danger<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/delemp/}+${emp.getId()}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>删除<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>后端Controller接收参数删除员工信息</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/delemp/{id}"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">deleteEmp</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	employeeDao<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token string">"redirect:/emps"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="_404-页面" tabindex="-1"><a class="header-anchor" href="#_404-页面" aria-hidden="true">#</a> 404 页面</h4>
<p><code v-pre>SpringBoot</code>的 404 页面只需要在<code v-pre>templates</code>文件夹下创建一个<code v-pre>error</code>文件夹，在<code v-pre>error</code>文件夹下创建一个<code v-pre>404.html</code>文件即可</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211210164449574.png" alt="image-20211210164449574" loading="lazy"></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211210164528842.png" alt="image-20211210164528842" loading="lazy"></p>
<p>当输入不存在或者错误的<code v-pre>URL</code>时候便会跳转到 404 错误页面</p>
<h4 id="退出功能" tabindex="-1"><a class="header-anchor" href="#退出功能" aria-hidden="true">#</a> 退出功能</h4>
<p>点击<code v-pre>退出</code>按钮，退回到<code v-pre>登录</code>界面</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211210164826992.png" alt="image-20211210164826992" loading="lazy"></p>
<ul>
<li>
<p>在<code v-pre>commons.html</code>中修改<code v-pre>退出</code>按钮代码</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav-link<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/user/logout}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>退出<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>在<code v-pre>LoginController.java</code>中编写注销页面代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/user/logout"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">logout</span><span class="token punctuation">(</span><span class="token class-name">HttpSession</span> session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    session<span class="token punctuation">.</span><span class="token function">invalidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"redirect:/index.html"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="springboot-整合数据库" tabindex="-1"><a class="header-anchor" href="#springboot-整合数据库" aria-hidden="true">#</a> SpringBoot 整合数据库</h2>
<ul>
<li>对于数据访问层，无论是 <code v-pre>SQL</code>(关系型数据库) 还是 <code v-pre>NOSQL</code>(非关系型数据库)，<code v-pre>Spring Boot</code> 底层都是采用 <code v-pre>Spring Data</code> 的方式进行统一处理</li>
<li>Spring Boot 底层都是采用 Spring Data <a href="https://gitee.com/link?target=https%3A%2F%2Fspring.io%2Fprojects%2Fspring-data" target="_blank" rel="noopener noreferrer">Sping Data 官网<ExternalLinkIcon/></a>的方式进行统一处理各种数据库</li>
<li>数据库相关的启动器 ：可以参考<a href="https://gitee.com/link?target=https%3A%2F%2Fdocs.spring.io%2Fspring-boot%2Fdocs%2F2.2.5.RELEASE%2Freference%2Fhtmlsingle%2F%23using-boot-starter" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></li>
</ul>
<h3 id="整合-jdbc" tabindex="-1"><a class="header-anchor" href="#整合-jdbc" aria-hidden="true">#</a> 整合 JDBC</h3>
<h4 id="sql-模块引入" tabindex="-1"><a class="header-anchor" href="#sql-模块引入" aria-hidden="true">#</a> SQL 模块引入</h4>
<p>新建项目 <code v-pre>springboot-jdbc-study</code> ，需要引入<code v-pre>SQL</code> 模块：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211213095112962.png" alt="image-20211213095112962" loading="lazy"></p>
<p>项目建好之后，在<code v-pre>pom</code>文件会自动为我们导入了如下的依赖包：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-jdbc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="yaml-配置文件连接数据库" tabindex="-1"><a class="header-anchor" href="#yaml-配置文件连接数据库" aria-hidden="true">#</a> yaml 配置文件连接数据库</h4>
<p>项目建好之后，使用<code v-pre>yaml</code> 配置文件连接数据库</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">1234</span>
    <span class="token comment"># ?serverTimezone=UTC解决时区的报错</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/tmall<span class="token punctuation">?</span>serverTimezone=UTC<span class="token important">&amp;useUnicode=true&amp;characterEncoding=utf-</span><span class="token number">8</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">DemoApplicationTests</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">DataSource</span> dataSource<span class="token punctuation">;</span>
    
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token comment">//看一下默认数据源</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获得连接</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//关闭连接</span>
        connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：可以看到默认给项目配置的数据源为 : <code v-pre>class com.zaxxer.hikari.HikariDataSource</code></p>
<h4 id="jdbctemplate" tabindex="-1"><a class="header-anchor" href="#jdbctemplate" aria-hidden="true">#</a> JDBCTemplate</h4>
<p>有了数据源<code v-pre>com.zaxxer.hikari.HikariDataSource</code>，便可以拿到数据库连接<code v-pre>java.sql.Connection</code>，之后就可以使用原生的 <code v-pre>JDBC</code> 语句来操作数据库</p>
<p><strong>JdbcTemplate主要提供以下几类方法：</strong></p>
<ul>
<li><code v-pre>execute</code>方法：可以用于执行任何<code v-pre>SQL</code>语句，一般用于执行<code v-pre>DDL</code>语句</li>
<li><code v-pre>update</code>方法及<code v-pre>batchUpdate</code>方法：<code v-pre>update</code>方法用于执行新增、修改、删除等语句；<code v-pre>batchUpdate</code>方法用于执行批处理相关语句</li>
<li><code v-pre>query</code>方法及<code v-pre>queryForXXX</code>方法：用于执行查询相关语句</li>
<li><code v-pre>call</code>方法：用于执行存储过程、函数相关语句</li>
</ul>
<p>编写一个<code v-pre>Controller</code>，注入 <code v-pre>jdbcTemplate</code>，编写测试方法进行访问测试：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JDBCController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">JdbcTemplate</span> jdbcTemplate<span class="token punctuation">;</span>

    <span class="token comment">// 查询数据库表 user 的所有信息</span>
    <span class="token comment">// 直接获取数据库的东西—Map</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/userList"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token function">userList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"select * from usertest"</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">></span><span class="token punctuation">></span></span> maps <span class="token operator">=</span> jdbcTemplate<span class="token punctuation">.</span><span class="token function">queryForList</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> maps<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/addAddress"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"insert into tmall.usertest(id, username, pwd) values(3, 'Alixs', 666789)"</span><span class="token punctuation">;</span>
        jdbcTemplate<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"update-ok"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/updateUser/{id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"update tmall.usertest set username  = ?,pwd = ? where id = "</span> <span class="token operator">+</span> id<span class="token punctuation">;</span>
        <span class="token comment">//封装</span>
        <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> objects <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        objects<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Maryland"</span><span class="token punctuation">;</span>
        objects<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">444789</span><span class="token punctuation">;</span>

        jdbcTemplate<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span>objects<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"update-ok"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/deleteUser/{id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">deleteUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"delete from tmall.usertest where id = ?"</span><span class="token punctuation">;</span>
        jdbcTemplate<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"update-ok"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据库表<code v-pre>usertest</code>如下：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>usertest<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>usertest<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span>  <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>username<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span>  <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>pwd<span class="token punctuation">`</span></span> <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span>  <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> 
<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- Records of usertest</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>usertest<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'Maryland'</span><span class="token punctuation">,</span> <span class="token string">'444789'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>usertest<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token string">'Alixs'</span><span class="token punctuation">,</span> <span class="token string">'666789'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">SET</span> FOREIGN_KEY_CHECKS <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集成-druid" tabindex="-1"><a class="header-anchor" href="#集成-druid" aria-hidden="true">#</a> 集成 Druid</h3>
<ul>
<li>Java程序很大一部分要操作数据库，为了提高性能操作数据库的时候，又不得不使用数据库连接池</li>
<li>Druid 是阿里巴巴开源平台上一个数据库连接池实现，结合了 C3P0、DBCP 等 DB 池的优点，同时加入了日志监控</li>
<li><code v-pre>com.alibaba.druid.pool.DruidDataSource</code> 基本配置参数如下：</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center"><strong>配置</strong></th>
<th style="text-align:center"><strong>缺省值</strong></th>
<th style="text-align:left"><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">name</td>
<td style="text-align:center"></td>
<td style="text-align:left">配置这个属性的意义在于，如果存在多个数据源，监控的时候可以通过名字来区分开来。 如果没有配置，将会生成一个名字，格式是：“DataSource-” + System.identityHashCode(this)</td>
</tr>
<tr>
<td style="text-align:center">jdbcUrl</td>
<td style="text-align:center"></td>
<td style="text-align:left">连接数据库的url，不同数据库不一样。例如： mysql : jdbc:mysql://10.20.153.104:3306/druid2 oracle : jdbc:oracle:thin:@10.20.149.85:1521:ocnauto</td>
</tr>
<tr>
<td style="text-align:center">username</td>
<td style="text-align:center"></td>
<td style="text-align:left">连接数据库的用户名</td>
</tr>
<tr>
<td style="text-align:center">password</td>
<td style="text-align:center"></td>
<td style="text-align:left">连接数据库的密码。如果你不希望密码直接写在配置文件中，可以使用ConfigFilter。详细看这里：<a href="https://gitee.com/link?target=https%3A%2F%2Fgithub.com%2Falibaba%2Fdruid%2Fwiki%2F%E4%BD%BF%E7%94%A8ConfigFilter" target="_blank" rel="noopener noreferrer">https://github.com/alibaba/druid/wiki/%E4%BD%BF%E7%94%A8ConfigFilter<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:center">driverClassName</td>
<td style="text-align:center">根据url自动识别</td>
<td style="text-align:left">这一项可配可不配，如果不配置druid会根据url自动识别dbType，然后选择相应的driverClassName(建议配置下)</td>
</tr>
<tr>
<td style="text-align:center">initialSize</td>
<td style="text-align:center">0</td>
<td style="text-align:left">初始化时建立物理连接的个数。初始化发生在显示调用init方法，或者第一次getConnection时</td>
</tr>
<tr>
<td style="text-align:center">maxActive</td>
<td style="text-align:center">8</td>
<td style="text-align:left">最大连接池数量</td>
</tr>
<tr>
<td style="text-align:center">maxIdle</td>
<td style="text-align:center">8</td>
<td style="text-align:left">已经不再使用，配置了也没效果</td>
</tr>
<tr>
<td style="text-align:center">minIdle</td>
<td style="text-align:center"></td>
<td style="text-align:left">最小连接池数量</td>
</tr>
<tr>
<td style="text-align:center">maxWait</td>
<td style="text-align:center"></td>
<td style="text-align:left">获取连接时最大等待时间，单位毫秒。配置了maxWait之后，缺省启用公平锁，并发效率会有所下降，如果需要可以通过配置useUnfairLock属性为true使用非公平锁。</td>
</tr>
<tr>
<td style="text-align:center">poolPreparedStatements</td>
<td style="text-align:center">false</td>
<td style="text-align:left">是否缓存preparedStatement，也就是PSCache。PSCache对支持游标的数据库性能提升巨大，比如说oracle。在mysql下建议关闭。</td>
</tr>
<tr>
<td style="text-align:center">maxOpenPreparedStatements</td>
<td style="text-align:center">-1</td>
<td style="text-align:left">要启用PSCache，必须配置大于0，当大于0时，poolPreparedStatements自动触发修改为true。在Druid中，不会存在Oracle下PSCache占用内存过多的问题，可以把这个数值配置大一些，比如说100</td>
</tr>
<tr>
<td style="text-align:center">validationQuery</td>
<td style="text-align:center"></td>
<td style="text-align:left">用来检测连接是否有效的sql，要求是一个查询语句。如果validationQuery为null，testOnBorrow、testOnReturn、testWhileIdle都不会其作用。</td>
</tr>
<tr>
<td style="text-align:center">validationQueryTimeout</td>
<td style="text-align:center"></td>
<td style="text-align:left">单位:秒，检测连接是否有效的超时时间。底层调用jdbc Statement对象的void setQueryTimeout(int seconds)方法</td>
</tr>
<tr>
<td style="text-align:center">testOnBorrow</td>
<td style="text-align:center">true</td>
<td style="text-align:left">申请连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能</td>
</tr>
<tr>
<td style="text-align:center">testOnReturn</td>
<td style="text-align:center">false</td>
<td style="text-align:left">归还连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能</td>
</tr>
<tr>
<td style="text-align:center">testWhileIdle</td>
<td style="text-align:center">false</td>
<td style="text-align:left">建议配置为true，不影响性能，并且保证安全性。申请连接的时候检测，如果空闲时间大于timeBetweenEvictionRunsMillis，执行validationQuery检测连接是否有效</td>
</tr>
<tr>
<td style="text-align:center">timeBetweenEvictionRunsMillis</td>
<td style="text-align:center">1分钟 ( 1.0.14 )</td>
<td style="text-align:left">有两个含义： 1) Destroy线程会检测连接的间隔时间 2) testWhileIdle的判断依据，详细看testWhileIdle属性的说明</td>
</tr>
<tr>
<td style="text-align:center">numTestsPerEvictionRun</td>
<td style="text-align:center"></td>
<td style="text-align:left">不再使用，一个DruidDataSource只支持一个EvictionRun</td>
</tr>
<tr>
<td style="text-align:center">minEvictableIdleTimeMillis</td>
<td style="text-align:center">30分钟 ( 1.0.14 )</td>
<td style="text-align:left">连接保持空闲而不被驱逐的最长时间</td>
</tr>
<tr>
<td style="text-align:center">connectionInitSqls</td>
<td style="text-align:center"></td>
<td style="text-align:left">物理连接初始化的时候执行的sql</td>
</tr>
<tr>
<td style="text-align:center">exceptionSorter</td>
<td style="text-align:center">根据dbType自动识别</td>
<td style="text-align:left">当数据库抛出一些不可恢复的异常时，抛弃连接</td>
</tr>
<tr>
<td style="text-align:center">filters</td>
<td style="text-align:center"></td>
<td style="text-align:left">属性类型是字符串，通过别名的方式配置扩展插件，常用的插件有： 监控统计用的filter:stat日志用的filter:log4j防御sql注入的filter:wall</td>
</tr>
<tr>
<td style="text-align:center">proxyFilters</td>
<td style="text-align:center"></td>
<td style="text-align:left">类型是List&lt;com.alibaba.druid.filter.Filter&gt;，如果同时配置了filters和proxyFilters，是组合关系，并非替换关系</td>
</tr>
</tbody>
</table>
<h4 id="配置-druid-数据源" tabindex="-1"><a class="header-anchor" href="#配置-druid-数据源" aria-hidden="true">#</a> 配置 Druid 数据源</h4>
<ul>
<li>
<p><code v-pre>Druid</code> 数据源的使用需要在<code v-pre>pom</code>文件引入依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--druid数据源--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>druid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.23<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>之后在<code v-pre>yaml</code>文件中指定使用该数据源</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">1234</span>
    <span class="token comment"># ?serverTimezone=UTC解决时区的报错</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/tmall<span class="token punctuation">?</span>serverTimezone=UTC<span class="token important">&amp;useUnicode=true&amp;characterEncoding=utf-</span><span class="token number">8</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token comment"># 指定数据源</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>配置好数据源进行测试，数据源发生改变，如下图所示：</p>
</li>
</ul>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211214170658597.png" alt="image-20211214170658597" loading="lazy"></p>
<ul>
<li>
<p>可以在<code v-pre>yaml</code>文件中设置数据源连接初始化大小、最大连接数、等待时间、最小连接数等设置项</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token comment"># Druid 数据源专有配置</span>
<span class="token key atrule">initialSize</span><span class="token punctuation">:</span> <span class="token number">5</span>
<span class="token key atrule">minIdle</span><span class="token punctuation">:</span> <span class="token number">5</span>
<span class="token key atrule">maxActive</span><span class="token punctuation">:</span> <span class="token number">20</span>
<span class="token key atrule">maxWait</span><span class="token punctuation">:</span> <span class="token number">60000</span>
<span class="token key atrule">timeBetweenEvictionRunsMillis</span><span class="token punctuation">:</span> <span class="token number">60000</span>
<span class="token key atrule">minEvictableIdleTimeMillis</span><span class="token punctuation">:</span> <span class="token number">300000</span>
<span class="token key atrule">validationQuery</span><span class="token punctuation">:</span> SELECT 1 FROM DUAL
<span class="token key atrule">testWhileIdle</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">testOnBorrow</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">testOnReturn</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">poolPreparedStatements</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment"># 配置监控统计拦截的 filters, stat:监控统计、log4j: 日志记录、wall: 防御 sql 注入</span>
<span class="token comment"># 如果允许时报错  java.lang.ClassNotFoundException: org.apache.log4j.Priority</span>
<span class="token comment"># 则导入 log4j 依赖即可, Maven 地址 : https://mvnrepository.com/artifact/log4j/log4j</span>
<span class="token key atrule">filters</span><span class="token punctuation">:</span> stat<span class="token punctuation">,</span>wall<span class="token punctuation">,</span>log4j
<span class="token key atrule">maxPoolPreparedStatementPerConnectionSize</span><span class="token punctuation">:</span> <span class="token number">20</span>
<span class="token key atrule">useGlobalDataSourceStat</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">connectionProperties</span><span class="token punctuation">:</span> druid.stat.mergeSql=true;druid.stat.slowSqlMillis=500
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>yaml</code>文件中配置<code v-pre>log4j</code>日志记录之后需要在<code v-pre>pom</code>文件中引入依赖：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.2.17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>yaml</code>文件中配置好<code v-pre>Druid</code>的全局参数之后，需要手动绑定为 <code v-pre>DruidDataSource</code> 参数并添加到容器中，创建<code v-pre>config</code>文件夹并创建类<code v-pre>DruidConfig</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DruidConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">"spring.datasource"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">druidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DruidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>@ConfigurationProperties</code>将<code v-pre>yaml</code>文件中配置的数据源进行绑定</p>
</li>
</ul>
<h4 id="配置-druid-数据源监控" tabindex="-1"><a class="header-anchor" href="#配置-druid-数据源监控" aria-hidden="true">#</a> 配置 Druid 数据源监控</h4>
<p><code v-pre>Druid</code> 数据源具有监控的功能，并提供了一个 <code v-pre>web</code> 界面方便用户查看，需要设置 Druid 的后台管理页面，比如登录账号、密码等，在类<code v-pre>DruidConfig</code>添加源码如下</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//配置 Druid 监控管理后台的 Servlet</span>
<span class="token comment">//内置 Servlet 容器时没有 web.xml 文件，所以使用 Spring Boot 的注册 Servlet 方式</span>
<span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">ServletRegistrationBean</span> <span class="token function">statViewServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">ServletRegistrationBean</span> bean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServletRegistrationBean</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StatViewServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"/druid/*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 这些参数可以在 com.alibaba.druid.support.http.StatViewServlet</span>
    <span class="token comment">// 的父类 com.alibaba.druid.support.http.ResourceServlet 中找到</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> initParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    initParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"loginUsername"</span><span class="token punctuation">,</span> <span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//后台管理界面的登录账号</span>
    initParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"loginPassword"</span><span class="token punctuation">,</span> <span class="token string">"admin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//后台管理界面的登录密码</span>

    <span class="token comment">//后台允许谁可以访问</span>
    <span class="token comment">//initParams.put("allow", "localhost")：表示只有本机可以访问</span>
    <span class="token comment">//initParams.put("allow", "")：为空或者为null时，表示允许所有访问</span>
    initParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"allow"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//deny: Druid 后台拒绝谁访问</span>
    <span class="token comment">//initParams.put("kuangshen", "192.168.1.20");表示禁止此ip访问</span>

    <span class="token comment">//设置初始化参数</span>
    bean<span class="token punctuation">.</span><span class="token function">setInitParameters</span><span class="token punctuation">(</span>initParams<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> bean<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意以上代码中<code v-pre>loginUsername</code>、<code v-pre>loginPassword</code>是<code v-pre>Druid</code>中固定参数，自己不可以随意更改</p>
<p>配置完毕后，我们可以选择访问：<a href="http://localhost:8080/druid/login.html" target="_blank" rel="noopener noreferrer">http://localhost:8080/druid/login.html<ExternalLinkIcon/></a> ，出现以下界面</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211214215345159.png" alt="image-20211214215345159" loading="lazy"></p>
<p>输入代码配置好的用户名和密码，进入页面</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211214215444358.png" alt="image-20211214215444358" loading="lazy"></p>
<p>测试输入<a href="http://localhost:8080/userList" target="_blank" rel="noopener noreferrer">http://localhost:8080/userList<ExternalLinkIcon/></a> ，可以看到监控信息如下：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211214215648118.png" alt="image-20211214215648118" loading="lazy"></p>
<h4 id="配置-druid-web-监控-filter-过滤器" tabindex="-1"><a class="header-anchor" href="#配置-druid-web-监控-filter-过滤器" aria-hidden="true">#</a> 配置 Druid web 监控 filter 过滤器</h4>
<p>在类<code v-pre>DruidConfig</code>添加源码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//配置 Druid 监控 之  web 监控的 filter</span>
<span class="token comment">//WebStatFilter : 用于配置Web和Druid数据源之间的管理关联监控统计</span>
<span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">FilterRegistrationBean</span> <span class="token function">webStatFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">FilterRegistrationBean</span> bean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FilterRegistrationBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    bean<span class="token punctuation">.</span><span class="token function">setFilter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">WebStatFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//exclusions：设置哪些请求进行过滤排除掉，从而不进行统计</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> initParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    initParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"exclusions"</span><span class="token punctuation">,</span> <span class="token string">"*.js,*.css,/druid/*,/jdbc/*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    bean<span class="token punctuation">.</span><span class="token function">setInitParameters</span><span class="token punctuation">(</span>initParams<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//"/*" 表示过滤所有请求</span>
    bean<span class="token punctuation">.</span><span class="token function">setUrlPatterns</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">"/*"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> bean<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="整合mybatis" tabindex="-1"><a class="header-anchor" href="#整合mybatis" aria-hidden="true">#</a> 整合Mybatis</h3>
<p><code v-pre>Mybatis</code>官方文档：<a href="http://mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/" target="_blank" rel="noopener noreferrer">http://mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/<ExternalLinkIcon/></a></p>
<p>创建项目<code v-pre>springboot-mybatis-study</code>，<code v-pre>SpringBoot</code>整合<code v-pre>Mybatis</code>需要以下步骤</p>
<ol>
<li>
<p><code v-pre>pom</code>文件中导入 <code v-pre>MyBatis</code> 所需要的依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--Mybatis--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.mybatis.spring.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>配置数据库连接池，可以集成 <code v-pre>Druid</code>，建议配置好之后先进行测试，测试数据库是否连接成功</p>
</li>
<li>
<p>创建实体类User，建议使用<code v-pre>Lombok</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span> <span class="token comment">//Lombok标签</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token comment">//属性名称要与数据库对应表字段名称一致(不区分大小写)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token class-name">Username</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> pwd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>创建实体类<code v-pre>User</code>对应的<code v-pre>Mapper</code>接口<code v-pre>UserMapper</code>，在该接口中定义<code v-pre>User</code>类的相关方法</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Mapper</span>
<span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token function">queryUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">User</span> <span class="token function">queryUserById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> <span class="token class-name">User</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> <span class="token function">deleteUser</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>创建接口<code v-pre>UserMapper</code>对应的映射文件<code v-pre>UserMapper.xml</code>，建议统一将映射文件放在<code v-pre>resources/mybatis/mapper</code>路径下</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
        <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span>
        <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.springboot.mybatis.springbootmybatis.mapper.UserMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>queryUserList<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>User<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        select * from tmall.usertest;
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>queryUserById<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>User<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        select * from tmall.usertest where id = #{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>addUser<span class="token punctuation">"</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>User<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        insert into tmall.usertest(id, username, pwd) values (#{id}, #{username}, #{pwd});
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateUser<span class="token punctuation">"</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>User<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        update tmall.usertest set username=#{username},pwd = #{pwd} where id = #{id};
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>deleteUser<span class="token punctuation">"</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>int<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        delete from tmall.usertest where id = #{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>delete</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在<code v-pre>yaml</code>文件中整合<code v-pre>Mybatis</code>，将映射文件和实体类对应起来</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token comment"># 整合 Mybatis</span>
<span class="token key atrule">mybatis</span><span class="token punctuation">:</span>
  <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> com.springboot.mybatis.springbootmybatis.pojo
  <span class="token key atrule">mapper-locations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mybatis/mapper/<span class="token important">*.xml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写相对应的<code v-pre>Controller</code>，创建<code v-pre>UserController</code>类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>

    <span class="token comment">// 查询员工列表所有信息</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/queryUserList"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token function">queryUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> userList <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">queryUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> user <span class="token operator">:</span> userList<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> userList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 通过 id 查询对应员工信息</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/queryUserById/{id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">queryUserById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">queryUserById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 添加一个用户</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/addUser"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        userMapper<span class="token punctuation">.</span><span class="token function">addUser</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token string">"Jack"</span><span class="token punctuation">,</span><span class="token number">123456</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"ok"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 修改一个用户</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/updateUser"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        userMapper<span class="token punctuation">.</span><span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token string">"JackSon"</span><span class="token punctuation">,</span><span class="token number">111456</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"ok"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 删除一个 User</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/deleteUser"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">deleteUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        userMapper<span class="token punctuation">.</span><span class="token function">deleteUser</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"ok"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>项目最终结构图如下所示：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211215161718329.png" alt="image-20211215161718329" loading="lazy"></p>
<h3 id="整合redis" tabindex="-1"><a class="header-anchor" href="#整合redis" aria-hidden="true">#</a> 整合Redis</h3>
<h4 id="整合方式" tabindex="-1"><a class="header-anchor" href="#整合方式" aria-hidden="true">#</a> 整合方式</h4>
<p><code v-pre>SpringBoot</code>整合<code v-pre>Redis</code>步骤如下：</p>
<ol>
<li>
<p><code v-pre>pom</code>文件中导入<code v-pre>xml</code>文件</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.6.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写配置文件内容</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> 101.43.164.126
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">6379</span>
    <span class="token comment"># password:</span>
    <span class="token key atrule">jedis</span><span class="token punctuation">:</span>
      <span class="token key atrule">pool</span><span class="token punctuation">:</span>
        <span class="token key atrule">max-active</span><span class="token punctuation">:</span> <span class="token number">8</span>    <span class="token comment"># 控制一个 pool 可分配多少个 Jedis 实例</span>
        <span class="token key atrule">max-wait</span><span class="token punctuation">:</span> <span class="token punctuation">-</span>1ms   <span class="token comment"># 获取一个 pool 中 Jedis 最大的等待时间</span>
        <span class="token key atrule">max-idle</span><span class="token punctuation">:</span> <span class="token number">500</span>    <span class="token comment"># pool 中最大的空闲连接数</span>
        <span class="token key atrule">min-idle</span><span class="token punctuation">:</span> <span class="token number">0</span>      <span class="token comment"># pool 中保持最小的空闲可用连接数, 这部分不被回收</span>
    <span class="token key atrule">lettuce</span><span class="token punctuation">:</span>
      <span class="token key atrule">shutdown-timeout</span><span class="token punctuation">:</span> 0ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用<code v-pre>RedisTemplate</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">Redis02SpringbootApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RedisTemplate</span> redisTemplate<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// redisTemplate 操作不同的数据类型</span>
        <span class="token comment">// opsForValue 操作字符串,类似 String</span>
        <span class="token comment">// opsForList 操作 List,类似 List</span>
        <span class="token comment">// opsForHash 操作 Hash</span>

        <span class="token comment">// 除了基本的操作,常用方法都可以直接通过redisTemplate操作,如事务和基本的CRUD</span>

        <span class="token comment">// 获取连接对象</span>
        <span class="token comment">//RedisConnection connection = redisTemplate.getConnectionFactory().getConnection();</span>
        <span class="token comment">//connection.flushDb();</span>
        <span class="token comment">//connection.flushAll();</span>

        redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"mykey"</span><span class="token punctuation">,</span><span class="token string">"wyj"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"mykey"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>测试结果：</p>
<p>测试结果可以连接<code v-pre>Redis</code>并输出相应内容</p>
</li>
</ol>
<h4 id="定制redistemplate" tabindex="-1"><a class="header-anchor" href="#定制redistemplate" aria-hidden="true">#</a> 定制RedisTemplate</h4>
<p>当<code v-pre>Redis</code>中存<code v-pre>Java</code>对象时，如创建一个<code v-pre>User</code>实体类：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际项目开发中<code v-pre>redisTemplate</code>不会直接存储实体类对象，例如以下代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">"wyj"</span><span class="token punctuation">,</span> <span class="token string">"123456"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"key1"</span><span class="token punctuation">,</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"key1"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序运行会报错：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220103211816970.png" alt="image-20220103211816970" loading="lazy"></p>
<p>错误提示<code v-pre>User</code>对象需要序列化，可以自定义<code v-pre>RedisTemplate</code>实现序列化，代码如下：</p>
<p>创建<code v-pre>Redis</code>配置类：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"all"</span><span class="token punctuation">)</span>  <span class="token comment">//抑制所有类型的警告</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisConfig</span> <span class="token punctuation">{</span>

    <span class="token comment">/*RedisAutoConfiguration
    public RedisTemplate&lt;Object, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {
        RedisTemplate&lt;Object, Object> template = new RedisTemplate();
        template.setConnectionFactory(redisConnectionFactory);
        return template;
    }*/</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> <span class="token function">redisTemplate</span><span class="token punctuation">(</span><span class="token class-name">RedisConnectionFactory</span> redisConnectionFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> template <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        template<span class="token punctuation">.</span><span class="token function">setConnectionFactory</span><span class="token punctuation">(</span>redisConnectionFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 序列化配置</span>
        <span class="token comment">// 使用 Jackson 序列化任意对象类型数据</span>
        <span class="token class-name">Jackson2JsonRedisSerializer</span> jackson2JsonRedisSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ObjectMapper</span> om <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        om<span class="token punctuation">.</span><span class="token function">setVisibility</span><span class="token punctuation">(</span><span class="token class-name">PropertyAccessor</span><span class="token punctuation">.</span><span class="token constant">ALL</span><span class="token punctuation">,</span> <span class="token class-name">JsonAutoDetect<span class="token punctuation">.</span>Visibility</span><span class="token punctuation">.</span><span class="token constant">ANY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        om<span class="token punctuation">.</span><span class="token function">enableDefaultTyping</span><span class="token punctuation">(</span><span class="token class-name">ObjectMapper<span class="token punctuation">.</span>DefaultTyping</span><span class="token punctuation">.</span><span class="token constant">NON_FINAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jackson2JsonRedisSerializer<span class="token punctuation">.</span><span class="token function">setObjectMapper</span><span class="token punctuation">(</span>om<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// String 序列化</span>
        <span class="token class-name">StringRedisSerializer</span> stringRedisSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// key 采用 String的序列化方式</span>
        template<span class="token punctuation">.</span><span class="token function">setKeySerializer</span><span class="token punctuation">(</span>stringRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// hash 的 key 也采用 String 的序列化方式</span>
        template<span class="token punctuation">.</span><span class="token function">setHashKeySerializer</span><span class="token punctuation">(</span>stringRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// value 序列化方式采用 jackson</span>
        template<span class="token punctuation">.</span><span class="token function">setValueSerializer</span><span class="token punctuation">(</span>jackson2JsonRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// hash 的 value 序列化方式采用 jackson</span>
        template<span class="token punctuation">.</span><span class="token function">setHashValueSerializer</span><span class="token punctuation">(</span>jackson2JsonRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        template<span class="token punctuation">.</span><span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> template<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义redis工具类" tabindex="-1"><a class="header-anchor" href="#自定义redis工具类" aria-hidden="true">#</a> 自定义Redis工具类</h4>
<p>使用<code v-pre>RedisTemplate</code>需要频繁调用<code v-pre>.opForxxx</code>才能执行对应的操作，该方式代码效率低下，实际开发可以将常用的公共<code v-pre>API</code>抽取出来封装成为一个工具类，然后直接使用工具类来间接操作<code v-pre>Redis</code></p>
<p>参考网址：<a href="https://www.cnblogs.com/zeng1994/p/03303c805731afc9aa9c60dbbd32a323.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/zeng1994/p/03303c805731afc9aa9c60dbbd32a323.html<ExternalLinkIcon/></a></p>
<p>代码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RedisTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">CollectionUtils</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Collection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">RedisUtil</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> redisTemplate<span class="token punctuation">;</span>

    <span class="token comment">// =============================common============================</span>
    <span class="token doc-comment comment">/**
     * 指定缓存失效时间
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间(秒)
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">expire</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                redisTemplate<span class="token punctuation">.</span><span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 根据key 获取过期时间
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键 不能为null
     * <span class="token keyword">@return</span> 时间(秒) 返回0代表为永久有效
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getExpire</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">getExpire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断key是否存在
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@return</span> true 存在 false不存在
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除缓存
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 可以传一个值 或多个
     */</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">del</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>key<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                redisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                redisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">)</span> <span class="token class-name">CollectionUtils</span><span class="token punctuation">.</span><span class="token function">arrayToList</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ============================String=============================</span>
    <span class="token doc-comment comment">/**
     * 普通缓存获取
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@return</span> 值
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> key <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 普通缓存放入
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@return</span> true成功 false失败
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 普通缓存放入并设置时间
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间(秒) time要大于0 如果time小于等于0 将设置无限期
     * <span class="token keyword">@return</span> true成功 false 失败
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> time<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 递增
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">delta</span> 要增加几(大于0)
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">incr</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> delta<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>delta <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">"递增因子必须大于0"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> delta<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 递减
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">delta</span> 要减少几(小于0)
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">decr</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> delta<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>delta <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">"递减因子必须大于0"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token operator">-</span>delta<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ================================Map=================================</span>
    <span class="token doc-comment comment">/**
     * HashGet
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键 不能为null
     * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项 不能为null
     * <span class="token keyword">@return</span> 值
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">hget</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取hashKey对应的所有键值
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@return</span> 对应的多个键值
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> <span class="token function">hmget</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * HashSet
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">map</span> 对应多个键值
     * <span class="token keyword">@return</span> true 成功 false 失败
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hmset</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">putAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> map<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * HashSet 并设置时间
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">map</span> 对应多个键值
     * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间(秒)
     * <span class="token keyword">@return</span> true成功 false失败
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hmset</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> map<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">putAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> map<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 向一张hash表中放入数据,如果不存在将创建
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@return</span> true 成功 false失败
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hset</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 向一张hash表中放入数据,如果不存在将创建
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间(秒) 注意:如果已存在的hash表有时间,这里将会替换原有的时间
     * <span class="token keyword">@return</span> true 成功 false失败
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hset</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除hash表中的值
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键 不能为null
     * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项 可以使多个 不能为null
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">hdel</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断hash表中是否有该项的值
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键 不能为null
     * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项 不能为null
     * <span class="token keyword">@return</span> true 存在 false不存在
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hHasKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * hash递增 如果不存在,就会创建一个 并把新增后的值返回
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项
     * <span class="token keyword">@param</span> <span class="token parameter">by</span> 要增加几(大于0)
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">hincr</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">,</span> <span class="token keyword">double</span> by<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">,</span> by<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * hash递减
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项
     * <span class="token keyword">@param</span> <span class="token parameter">by</span> 要减少记(小于0)
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">hdecr</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">,</span> <span class="token keyword">double</span> by<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">,</span> <span class="token operator">-</span>by<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ============================set=============================</span>
    <span class="token doc-comment comment">/**
     * 根据key获取Set中的所有值
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> <span class="token function">sGet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">members</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 根据value从一个set中查询,是否存在
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@return</span> true 存在 false不存在
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">sHasKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isMember</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将数据放入set缓存
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">values</span> 值 可以是多个
     * <span class="token keyword">@return</span> 成功个数
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">sSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将set数据放入缓存
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间(秒)
     * <span class="token keyword">@param</span> <span class="token parameter">values</span> 值 可以是多个
     * <span class="token keyword">@return</span> 成功个数
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">sSetAndTime</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Long</span> count <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> count<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取set缓存的长度
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">sGetSetSize</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 移除值为value的
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">values</span> 值 可以是多个
     * <span class="token keyword">@return</span> 移除的个数
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">setRemove</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Long</span> count <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> count<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ===============================list=================================</span>

    <span class="token doc-comment comment">/**
     * 获取list缓存的内容
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">start</span> 开始
     * <span class="token keyword">@param</span> <span class="token parameter">end</span> 结束 0 到 -1代表所有值
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> <span class="token function">lGet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> start<span class="token punctuation">,</span> <span class="token keyword">long</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取list缓存的长度
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">lGetListSize</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 通过索引 获取list中的值
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 索引 index>=0时， 0 表头，1 第二个元素，依次类推；index&lt;0时，-1，表尾，-2倒数第二个元素，依次类推
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">lGetIndex</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将list放入缓存
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间(秒)
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将list放入缓存
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间(秒)
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将list放入缓存
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间(秒)
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPushAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将list放入缓存
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间(秒)
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> value<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPushAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 根据索引修改list中的某条数据
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 索引
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lUpdateIndex</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> index<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 移除N个值为value
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">count</span> 移除多少个
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@return</span> 移除的个数
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">lRemove</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> count<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Long</span> remove <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> count<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> remove<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="部分源码讲解" tabindex="-1"><a class="header-anchor" href="#部分源码讲解" aria-hidden="true">#</a> 部分源码讲解</h4>
<ol>
<li>
<p><code v-pre>lettuce</code>和<code v-pre>Jedis</code>的定位都是<code v-pre>Redis</code>的客户端实现，可以直接连接<code v-pre>Redis</code>的服务端。<code v-pre>springboot 2.x</code>后 ，z <code v-pre>Jedis</code> 被 <code v-pre>lettuce</code> 替换。</p>
<blockquote>
<p><code v-pre>Jedis</code>：采用的直连，多个线程操作是不安全的，需要使用<code v-pre>Jedis pool</code>连接池保证其安全，类似于<code v-pre>BIO</code>模式</p>
<p><code v-pre>lettuce</code>：采用<code v-pre>netty</code>方式连接，实例可以在多个线程中共享，不存在线程不安全的情况，类似于<code v-pre>NIO</code>模式</p>
</blockquote>
</li>
<li>
<p><code v-pre>SpringBoot</code>整合一个组件时，一般都会有一个自动配置类<code v-pre>XxxAutoConfiguration</code>，并且对应一个配置属性类<code v-pre>XxxProperties</code>，<code v-pre>RedisAutoConfiguration</code>类部分源码如下：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220103204352992.png" alt="image-20220103204352992" loading="lazy"></p>
<p><code v-pre>RedisAutoConfiguration</code>类中存在两个Bean对象：</p>
<ul>
<li><code v-pre>RedisTemplate</code></li>
<li>``StringRedisTemplate`</li>
</ul>
<p>通过<code v-pre>RedisTemplate</code>和<code v-pre>StringRedisTemplate</code>对象可以分别操作<code v-pre>Redis</code>和<code v-pre>Redis</code>中的<code v-pre>String</code>数据类型。在<code v-pre>RedisProperties</code>中，说明了配置文件需要编写的内容：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220103204736745.png" alt="image-20220103204736745" loading="lazy"></p>
</li>
<li>
<p><code v-pre>RedisTemplate</code>类内部实现了对实体类对象的序列化方式：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220103214413587.png" alt="image-20220103214413587" loading="lazy"></p>
<p>默认的序列化方式为<code v-pre>JDK</code>序列器：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220103214812245.png" alt="image-20220103214812245" loading="lazy"></p>
<p><code v-pre>RedisSerializer</code>提供了多种序列化方案，可以在自定义RedisTemplate中设置：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220103215027555.png" alt="image-20220103215027555" loading="lazy"></p>
</li>
</ol>
<h2 id="springsecurity入门" tabindex="-1"><a class="header-anchor" href="#springsecurity入门" aria-hidden="true">#</a> SpringSecurity入门</h2>
<h3 id="springsecurity环境搭建" tabindex="-1"><a class="header-anchor" href="#springsecurity环境搭建" aria-hidden="true">#</a> SpringSecurity环境搭建</h3>
<p>1、新建<code v-pre>SpringBoot</code>项目<code v-pre>SpringSecurity-first-study</code>，选中<code v-pre>Spring Security</code>选项</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211217174539328.png" alt="image-20211217174539328" loading="lazy"></p>
<p><code v-pre>pom</code>文件会自动引入依赖包：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-security<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.security<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-security-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、导入静态资源文件，路径如下：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211221094343334.png" alt="image-20211221094343334" loading="lazy"></p>
<p>3、编写<code v-pre>Controller</code>类<code v-pre>RouterController</code>，测试代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RouterController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"/"</span><span class="token punctuation">,</span><span class="token string">"/index"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"index"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/level1/{id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">level1</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"views/level1/"</span><span class="token operator">+</span>id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/level2/{id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">level2</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"views/level2/"</span><span class="token operator">+</span>id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/level3/{id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">level3</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"views/level3/"</span><span class="token operator">+</span>id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、测试结果：</p>
<p>测试发现<code v-pre>SpringBoot</code>项目启动成功，访问任意URL路径都会跳转到一个登录页面：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211221094745654.png" alt="image-20211221094745654" loading="lazy"></p>
<p><code v-pre>SpringBoot</code>项目中使用了<code v-pre>SpringSecurity</code>，默认的<code v-pre>SpringSecurity</code>便生效了，此时的接口都是被保护的，我们需要通过验证通过才能正常的访问。<code v-pre>SpringSecurity</code>提供了一个默认的用户，用户名是user，而密码则是启动项目的时候自动生成的</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211221095224062.png" alt="image-20211221095224062" loading="lazy"></p>
<p>如果不需要验证访问，可以在项目中添加一个配置类，配置不需要登录验证功能，代码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableWebSecurity</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CloseSecurityConfig</span> <span class="token keyword">extends</span> <span class="token class-name">WebSecurityConfigurerAdapter</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        http<span class="token punctuation">.</span><span class="token function">csrf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//配置不需要登陆验证</span>
        http<span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终测试成功：
<img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211221101212513.png" alt="image-20211221101212513" loading="lazy"></p>
<h3 id="初识springsecurity" tabindex="-1"><a class="header-anchor" href="#初识springsecurity" aria-hidden="true">#</a> 初识SpringSecurity</h3>
<p><code v-pre>SpringSecurity</code>是针对<code v-pre>Spring</code>项目的安全框架，也是<code v-pre>SpringBoot</code>底层安全模块默认的技术选型，他可以实现强大的<code v-pre>Web</code>安全控制，对于安全控制，我们仅需要引入<code v-pre>spring-boot-starter-security</code>模块，进行少量的配置，即可实现强大的安全管理功能。</p>
<p><code v-pre>SpringSecurity</code>中几个重要的类：</p>
<ul>
<li>
<p><code v-pre>WebSecurityConfigurerAdapter</code>：自定义<code v-pre>Security</code>安全策略</p>
</li>
<li>
<p><code v-pre>AuthenticationManagerBuilder</code>：自定义认证策略</p>
</li>
<li>
<p><code v-pre>@EnableWebSecurity</code>：开启<code v-pre>WebSecurity</code>模式</p>
</li>
<li>
<p>类<code v-pre>WebSecurityConfigurerAdapter</code>中重要的方法：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    http<span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token doc-comment comment">/**<span class="token entity named-entity" title="&quot;">&amp;quot;</span>).hasRole(<span class="token entity named-entity" title="&quot;">&amp;quot;</span>USER<span class="token entity named-entity" title="&quot;">&amp;quot;</span>).and().formLogin()
	  				.usernameParameter(<span class="token entity named-entity" title="&quot;">&amp;quot;</span>username<span class="token entity named-entity" title="&quot;">&amp;quot;</span>) // default is username
	  				.passwordParameter(<span class="token entity named-entity" title="&quot;">&amp;quot;</span>password<span class="token entity named-entity" title="&quot;">&amp;quot;</span>) // default is password
	  				.loginPage(<span class="token entity named-entity" title="&quot;">&amp;quot;</span>/authentication/login<span class="token entity named-entity" title="&quot;">&amp;quot;</span>) // default is /login with an HTTP get
	  				.failureUrl(<span class="token entity named-entity" title="&quot;">&amp;quot;</span>/authentication/login?failed<span class="token entity named-entity" title="&quot;">&amp;quot;</span>) // default is /login?error
	  				.loginProcessingUrl(<span class="token entity named-entity" title="&quot;">&amp;quot;</span>/authentication/login/process<span class="token entity named-entity" title="&quot;">&amp;quot;</span>); // default is /login
	  																		// with an HTTP
	  																		// post
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p><code v-pre>SpringSecurity</code>的两个主要目标是 “认证” 和 “授权”（访问控制）</p>
<ul>
<li>
<p>“认证”（<code v-pre>Authentication</code>）</p>
<p>身份验证是关于验证身份的凭据，如用户名、用户<code v-pre>ID</code>和密码，以验证身份权限，身份验证通常通过用户名和密码完成，有时与身份验证因素结合使用</p>
</li>
<li>
<p>“授权” （<code v-pre>Authorization</code>）</p>
<p>授权发生在系统成功验证用户的身份后，最终会授予用户访问资源（如信息，文件，数据库，资金，位置，几乎任何内容）的完全权限</p>
</li>
</ul>
<h3 id="认证和授权" tabindex="-1"><a class="header-anchor" href="#认证和授权" aria-hidden="true">#</a> 认证和授权</h3>
<p>如果不同的用户登录可以访问不同的<code v-pre>Level</code>下的标签，如下图所示：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211221162851072.png" alt="image-20211221162851072" loading="lazy"></p>
<p>可以为每一个<code v-pre>Level</code>设置一个权限，并对每一个权限下绑定不同的用户，此时需要使用<code v-pre>SpringSecurity</code>中的认证和授权功能。</p>
<p>使用<code v-pre>SpringSecurity</code>环境搭建的项目进行认证和授权功能的实现，实现流程如下：</p>
<ol>
<li>
<p>引入<code v-pre>SpringSecurity</code>模块</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-security<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写<code v-pre>SpringSecurity</code>基础配置类</p>
<p>参考官网：<a href="https://spring.io/projects/spring-security" target="_blank" rel="noopener noreferrer">https://spring.io/projects/spring-security<ExternalLinkIcon/></a></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>web<span class="token punctuation">.</span>builders<span class="token punctuation">.</span></span><span class="token class-name">HttpSecurity</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>web<span class="token punctuation">.</span>configuration<span class="token punctuation">.</span></span><span class="token class-name">EnableWebSecurity</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>web<span class="token punctuation">.</span>configuration<span class="token punctuation">.</span></span><span class="token class-name">WebSecurityConfigurerAdapter</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@EnableWebSecurity</span> <span class="token comment">// 开启 WebSecurity 模式</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityConfig</span> <span class="token keyword">extends</span> <span class="token class-name">WebSecurityConfigurerAdapter</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211221104359440.png" alt="image-20211221104359440" loading="lazy"></p>
<p>此时需要将<code v-pre>CloseSecurityConfig</code>类中不需要登陆验证的代码也放在上述代码的<code v-pre>configure()</code>方法中，否则测试会报错</p>
</li>
<li>
<p>在<code v-pre>configure()</code>方法中定制请求的授权规则</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
     
    http<span class="token punctuation">.</span><span class="token function">csrf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//配置不需要登陆验证</span>
    http<span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    http<span class="token punctuation">.</span><span class="token function">authorizeHttpRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 首页所有人可以访问</span>
            <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">"/level1/**"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasRole</span><span class="token punctuation">(</span><span class="token string">"vip1"</span><span class="token punctuation">)</span> <span class="token comment">// 拥有 vip1 权限的角色可以访问 level1 下的页面</span>
            <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">"/level2/**"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasRole</span><span class="token punctuation">(</span><span class="token string">"vip2"</span><span class="token punctuation">)</span> <span class="token comment">// 拥有 vip2 权限的角色可以访问 level2 下的页面</span>
            <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">"/level3/**"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasRole</span><span class="token punctuation">(</span><span class="token string">"vip3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 拥有 vip3 权限的角色可以访问 level3 下的页面</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>测试</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211221110706100.png" alt="image-20211221110706100" loading="lazy"></p>
<p>进入首页点击<code v-pre>Level-1-1</code>等标签会发现出现以下<code v-pre>403</code>错误</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211221110756106.png" alt="image-20211221110756106" loading="lazy"></p>
<p>以上原因是因为我们没有设置登录的角色，请求执行时需要登录的角色拥有对应的权限才可以，例如角色<code v-pre>root</code>想访问<code v-pre>level1</code>页面下的资源文件，必须要拥有对应的访问权限<code v-pre>vip1</code></p>
</li>
<li>
<p>在<code v-pre>configure()</code>方法中加入以下配置，开启自动配置的登录功能</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 开启自动配置的登录功能</span>
<span class="token comment">// /login 请求来到登录页</span>
<span class="token comment">// /login?error 重定向到这里表示登录失败</span>
http<span class="token punctuation">.</span><span class="token function">formLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>再次测试，发现没有权限的时候，会跳转到登录的页面</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211221112728095.png" alt="image-20211221112728095" loading="lazy"></p>
</li>
<li>
<p>跳转到登录页面之后，可以定义认证规则，重写<code v-pre>configure(AuthenticationManagerBuilder auth)</code>方法</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//定义认证规则</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">AuthenticationManagerBuilder</span> auth<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

    auth<span class="token punctuation">.</span><span class="token function">inMemoryAuthentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withUser</span><span class="token punctuation">(</span><span class="token string">"wyj"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string">"123456"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token string">"vip2"</span><span class="token punctuation">,</span><span class="token string">"vip3"</span><span class="token punctuation">)</span><span class="token comment">//用户 wyj 具有权限 vip2 和 vip3</span>
                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withUser</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string">"123456"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token string">"vip1"</span><span class="token punctuation">,</span><span class="token string">"vip2"</span><span class="token punctuation">,</span><span class="token string">"vip3"</span><span class="token punctuation">)</span> 
                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withUser</span><span class="token punctuation">(</span><span class="token string">"guest"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string">"123456"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token string">"vip1"</span><span class="token punctuation">,</span><span class="token string">"vip2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>再次测试，输入设置的<code v-pre>Username</code>和对应<code v-pre>Password</code>之后，发现会报错</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211221113637778.png" alt="image-20211221113637778" loading="lazy"></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211221113708101.png" alt="image-20211221113708101" loading="lazy"></p>
<p>原因在于<code v-pre>SpringSecurity</code>要求要将前端传过来的密码进行某种方式加密，否则就无法登录，修改认证规则代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//定义认证规则</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">AuthenticationManagerBuilder</span> auth<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//Spring security 5.0中新增了多种加密方式，也改变了密码的格式。</span>
    <span class="token comment">//要想我们的项目还能够正常登陆，需要修改一下configure中的代码。我们要将前端传过来的密码进行某种方式加密</span>
    <span class="token comment">//spring security 官方推荐的是使用bcrypt加密方式。</span>

    auth<span class="token punctuation">.</span><span class="token function">inMemoryAuthentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">passwordEncoder</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">withUser</span><span class="token punctuation">(</span><span class="token string">"wyj"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token string">"123456"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token string">"vip2"</span><span class="token punctuation">,</span><span class="token string">"vip3"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">withUser</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token string">"123456"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token string">"vip1"</span><span class="token punctuation">,</span><span class="token string">"vip2"</span><span class="token punctuation">,</span><span class="token string">"vip3"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">withUser</span><span class="token punctuation">(</span><span class="token string">"guest"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token string">"123456"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token string">"vip1"</span><span class="token punctuation">,</span><span class="token string">"vip2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>再次测试，发现登录成功，并且每个角色只能访问自己认证下的规则</p>
</li>
</ol>
<h3 id="自动注销" tabindex="-1"><a class="header-anchor" href="#自动注销" aria-hidden="true">#</a> 自动注销</h3>
<p>可以为首页添加一个注销功能，步骤如下：</p>
<ol>
<li>
<p>在<code v-pre>configure(HttpSecurity http)</code>方法中开启自动配置的注销的功能</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//定制请求的授权规则</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//....</span>
    <span class="token comment">//开启自动配置的注销的功能</span>
    <span class="token comment">// 开启自动配置的注销的功能 /logout 为注销请求</span>
    http<span class="token punctuation">.</span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在前端<code v-pre>index.html</code>导航栏中，增加一个注销的按钮，注意注销请求的<code v-pre>URL</code>是<code v-pre>/logout</code></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/logout}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>address card icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span> 注销
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>点击<code v-pre>Level-2-1</code>进入<code v-pre>Level2</code>界面之后，在<code v-pre>Level2</code>界面点击注销直接退到登录界面，如果要跳转到首页，需要在<code v-pre>configure(HttpSecurity http)</code>方法中修改<code v-pre>http.logout()</code>方法</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211221164641589.png" alt="image-20211221164641589" loading="lazy"></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211221164610083.png" alt="image-20211221164610083" loading="lazy"></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//定制请求的授权规则</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//....</span>

    <span class="token comment">//开启自动配置的注销的功能</span>
    <span class="token comment">// 开启自动配置的注销的功能 /logout 为注销请求</span>
    <span class="token comment">//http.logout();</span>

    <span class="token comment">// .logoutSuccessUrl("/"); 注销成功来到首页</span>
    http<span class="token punctuation">.</span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">logoutSuccessUrl</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后，在点击注销按钮时，会退出到首页</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211221165543382.png" alt="image-20211221165543382" loading="lazy"></p>
</li>
</ol>
<h3 id="权限控制-整合thymeleaf" tabindex="-1"><a class="header-anchor" href="#权限控制-整合thymeleaf" aria-hidden="true">#</a> 权限控制：整合Thymeleaf</h3>
<p>如果用户<code v-pre>guest</code>只可以访问<code v-pre>Level1</code>和<code v-pre>Level2</code>，不希望用户<code v-pre>guest</code>登录之后看到<code v-pre>Level3</code>，并且用户登录之后隐藏登录按钮，用户注销之后隐藏注销按钮，如下所示</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211221172153275.png" alt="image-20211221172153275" loading="lazy"></p>
<p>以上需求需要结合<code v-pre>thymeleaf</code>中的功能，流程如下：</p>
<ol>
<li>
<p>引入<code v-pre>Maven</code>依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.thymeleaf.extras<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>thymeleaf-extras-springsecurity5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>首页<code v-pre>index.html</code>导入命名空间</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>xmlns:sec="http://www.thymeleaf.org/thymeleaf-extras-springsecurity5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>首页<code v-pre>index.html</code>修改导航栏，增加认证判断，进行测试</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--登录注销--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right menu<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--未登录, 显示登录按钮--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">sec:</span>authorize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!isAuthenticated()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/login}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>address card icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span> 登录
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!--已登录, 界面显示登陆的用户名--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">sec:</span>authorize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isAuthenticated()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>address card icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
            <span class="token comment">&lt;!--用户名：--></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name"><span class="token namespace">sec:</span>authentication</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>principal.username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
            <span class="token comment">&lt;!--角色：&lt;span sec:authentication="principal.authorities">&lt;/span>--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!--已登录, 显示注销按钮--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">sec:</span>authorize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isAuthenticated()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/logout}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>address card icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span> 注销
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后使用<code v-pre>URL</code>访问<code v-pre>http://localhost:8080/login</code> 登录请求，登录用户名为<code v-pre>guest</code>，登录成功后发现登录按钮消失，并显示出了登录的用户名，页面如下：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211221180704166.png" alt="image-20211221180704166" loading="lazy"></p>
<p>点击注销，会显示如下界面：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211222093338700.png" alt="image-20211222093338700" loading="lazy"></p>
<p>点击<code v-pre>Log Out</code>退出之后，显示首页，注销按钮消失</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211222093550604.png" alt="image-20211222093550604" loading="lazy"></p>
</li>
<li>
<p>如果点击注销按钮，出现<code v-pre>404</code>页面，是因为它默认防止<code v-pre>csrf</code>跨站请求伪造，因为会产生安全问题，可以将请求改为<code v-pre>post</code>表单提交，或者在<code v-pre>SpringSecurity</code>中关闭<code v-pre>csrf</code>功能，在<code v-pre>configure(HttpSecurity http)</code>方法中添加以下代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 关闭 csrf 功能: 跨站请求伪造, 默认只能通过 post 方式提交 logout 请求</span>
http<span class="token punctuation">.</span><span class="token function">csrf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>继续修改<code v-pre>index.html</code>内容，完善角色功能块权限控制，进行测试</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>column<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ui raised segment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- sec:authorize="hasRole('vip1')" --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ui<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">sec:</span>authorize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hasRole('vip1')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Level 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/level1/1}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bullhorn icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span> Level-1-1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/level1/2}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bullhorn icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span> Level-1-2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/level1/3}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bullhorn icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span> Level-1-3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>column<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ui raised segment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ui<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">sec:</span>authorize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hasRole('vip2')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Level 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/level2/1}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bullhorn icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span> Level-2-1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/level2/2}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bullhorn icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span> Level-2-2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/level2/3}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bullhorn icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span> Level-2-3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>column<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ui raised segment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ui<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">sec:</span>authorize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hasRole('vip3')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Level 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/level3/1}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bullhorn icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span> Level-3-1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/level3/2}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bullhorn icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span> Level-3-2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/level3/3}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bullhorn icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span> Level-3-3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code v-pre>sec:authorize=&quot;hasRole('vip1')&quot;</code>来控制界面需要显示内容</p>
<p>进行测试，使用<code v-pre>guest</code>登录，发现只显示<code v-pre>Level1</code>和<code v-pre>Level2</code></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211222095843139.png" alt="image-20211222095843139" loading="lazy"></p>
</li>
</ol>
<h3 id="记住我" tabindex="-1"><a class="header-anchor" href="#记住我" aria-hidden="true">#</a> 记住我</h3>
<p>如果要实现登录时记住密码的功能，登录之后，关闭浏览器，再次登录不需要输入用户名密码便可以直接登录成功，需要开启<code v-pre>记住我</code>功能。</p>
<p>**原理：**登录成功后，将<code v-pre>cookie</code>发送给浏览器保存，再次登录会带上该<code v-pre>cookie</code>信息，通过检查便可以免登录了；如果点击注销，则会删除该<code v-pre>cookie</code>信息</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//定制请求的授权规则</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token comment">//记住我</span>
    http<span class="token punctuation">.</span><span class="token function">rememberMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>选中<code v-pre>Remember me on this computer</code>，启动项目测试，发现登录界面出现以下内容：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211222102717480.png" alt="image-20211222102717480" loading="lazy"></p>
<p>登录成功之后，浏览器保存了<code v-pre>Cookies</code>信息（记住我功能的实现原理：保存登录<code v-pre>Cookie</code>信息）：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211222103156331.png" alt="image-20211222103156331" loading="lazy"></p>
<p>点击注销，<code v-pre>SpringSecurity</code>会自动删除该<code v-pre>Cookie</code>信息</p>
<h3 id="定制登录页" tabindex="-1"><a class="header-anchor" href="#定制登录页" aria-hidden="true">#</a> 定制登录页</h3>
<p>以上代码中看到的登录页面都是<code v-pre>SpringSecurity</code>默认提供的登录页面，用户也可以自定义自己的登录界面，步骤如下：</p>
<ol>
<li>
<p>类<code v-pre>RouterController</code>中写登录<code v-pre>Controller</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/toLogin"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"views/login"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>configure(HttpSecurity http)</code>方法中自定义登录页</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//http.formLogin();</span>
<span class="token comment">//自定义登录页面</span>
http<span class="token punctuation">.</span><span class="token function">formLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">loginPage</span><span class="token punctuation">(</span><span class="token string">"/toLogin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>前端首页<code v-pre>index.html</code>跳转到登录页面的路由指向自己定义的登录<code v-pre>URL</code></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--未登录, 显示登录按钮--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">sec:</span>authorize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!isAuthenticated()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/toLogin}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>address card icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span> 登录
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>之后进行测试，跳转到自定义的登录界面：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211222105222752.png" alt="image-20211222105222752" loading="lazy"></p>
</li>
<li>
<p>点击上图自定义登录界面的提交按钮，跳转到首页界面，需要修改<code v-pre>login.html</code>登录<code v-pre>form</code>表单的<code v-pre>th:action</code></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name"><span class="token namespace">th:</span>action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/toLogin}<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>field<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>Username<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ui left icon input<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Username<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>th:action</code>中的<code v-pre>URL</code>和<code v-pre>configure(HttpSecurity http)</code>配置的自定义登录页面<code v-pre>URL</code>需一致，都为<code v-pre>/toLogin</code>。此时，登录成功，便可以自动跳转到首页。</p>
<p>注意：在<code v-pre>th:action</code>中并没有配置跳转到首页<code v-pre>index.html</code>的<code v-pre>controller</code>，确可以完成跳转功能，也可以手动写一个<code v-pre>controller</code>实现跳转，<code v-pre>login.html</code>登录<code v-pre>form</code>表单的<code v-pre>th:action</code>如下：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name"><span class="token namespace">th:</span>action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/login}<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>field<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>Username<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ui left icon input<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Username<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应类<code v-pre>RouterController</code>添加<code v-pre>controller</code>如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/login"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"redirect:/index.html"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以不写上面的<code v-pre>controller</code>， 在<code v-pre>configure(HttpSecurity http)</code>配置的自定义登录页面代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 自定义登录页面</span>
http<span class="token punctuation">.</span><span class="token function">formLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">loginPage</span><span class="token punctuation">(</span><span class="token string">"/toLogin"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">loginProcessingUrl</span><span class="token punctuation">(</span><span class="token string">"/login"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>login.html</code>登录<code v-pre>form</code>表单提交到后台的用户名和密码需要进行权限认证，<code v-pre>formLogin()</code>方法对用户名和密码进行验证，查看其代码，可知默认接收的用户名和密码参数名为<code v-pre>username</code>和<code v-pre>password</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>http<span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token doc-comment comment">/**<span class="token entity named-entity" title="&quot;">&amp;quot;</span>).hasRole(<span class="token entity named-entity" title="&quot;">&amp;quot;</span>USER<span class="token entity named-entity" title="&quot;">&amp;quot;</span>).and().formLogin()
           .usernameParameter(<span class="token entity named-entity" title="&quot;">&amp;quot;</span>username<span class="token entity named-entity" title="&quot;">&amp;quot;</span>) // default is username
           .passwordParameter(<span class="token entity named-entity" title="&quot;">&amp;quot;</span>password<span class="token entity named-entity" title="&quot;">&amp;quot;</span>) // default is password
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果对登录<code v-pre>form</code>表单用户名<code v-pre>name</code>属性和密码<code v-pre>name</code>属性进行修改：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name"><span class="token namespace">th:</span>action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/toLogin}<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>field<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>Username<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ui left icon input<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Username<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>uname<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>field<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>Password<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ui left icon input<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pwd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lock icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ui blue submit button<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后台代码便接收不到提交的用户名和密码了，可以手动设置后台接收的用户名和参数名字：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 自定义登录页面</span>
http<span class="token punctuation">.</span><span class="token function">formLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">loginPage</span><span class="token punctuation">(</span><span class="token string">"/toLogin"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">usernameParameter</span><span class="token punctuation">(</span><span class="token string">"uname"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">passwordParameter</span><span class="token punctuation">(</span><span class="token string">"pwd"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在自定义登录页面再次实现<code v-pre>记住我</code>功能：</p>
<p>在登陆页添加记住我的多选框：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>field<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>remember<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 记住我
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端<code v-pre>configure(HttpSecurity http)</code>验证处理</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//定制记住我的参数</span>
http<span class="token punctuation">.</span><span class="token function">rememberMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rememberMeParameter</span><span class="token punctuation">(</span><span class="token string">"remember"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>name</code>属性要和<code v-pre>rememberMeParameter()</code>参数一样，测试如下：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211222172833884.png" alt="image-20211222172833884" loading="lazy"></p>
</li>
</ol>
<h2 id="shiro入门" tabindex="-1"><a class="header-anchor" href="#shiro入门" aria-hidden="true">#</a> Shiro入门</h2>
<h3 id="shiro-简介" tabindex="-1"><a class="header-anchor" href="#shiro-简介" aria-hidden="true">#</a> Shiro 简介</h3>
<p><code v-pre>Shiro</code>是一个功能强大和易于使用的<code v-pre>Java</code>安全框架，为开发人员提供一个直观而全面的解决方案的认证，授权，加密，会话管理</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211223110049792.png" alt="image-20211223110049792" loading="lazy"></p>
<p><strong>Shiro 四个主要的功能：</strong></p>
<ul>
<li>Authentication：身份认证/登录，验证用户是不是拥有相应的身份</li>
<li>Authorization：授权，即权限验证，判断某个已经认证过的用户是否拥有某些权限访问某些资源，一般授权会有角色授权和权限授权</li>
<li>Session Management：会话管理，即用户登录后就是一次会话，在没有退出之前，它的所有信息都在会话中；会话可以是普通JavaSE环境的，也可以是如Web环境的，web 环境中作用是和 HttpSession 是一样的</li>
<li>Cryptography：加密，保护数据的安全性，如密码加密存储到数据库，而不是明文存储</li>
</ul>
<p><strong>Shiro 的其它几个特点：</strong></p>
<ul>
<li>Web Support：Web支持，可以非常容易的集成到Web环境；</li>
<li>Caching：缓存，比如用户登录后，其用户信息、拥有的角色/权限不必每次去查，这样可以提高效率；</li>
<li>Concurrency：shiro支持多线程应用的并发验证，即如在一个线程中开启另一个线程，能把权限自动传播过去；</li>
<li>Testing：提供测试支持；</li>
<li>Run As：允许一个用户假装为另一个用户（如果他们允许）的身份进行访问；</li>
<li>Remember Me：记住我，这个是非常常见的功能，即一次登录后，下次再来的话不用登录了。</li>
</ul>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211223110812447.png" alt="image-20211223110812447" loading="lazy"></p>
<p>Shiro 的架构有 3 个主要概念：<code v-pre>Subject</code>， <code v-pre>SecurityManager</code>和<code v-pre>Realms</code></p>
<ul>
<li><code v-pre>Subject</code>：主体，相当于是请求过来的“用户”</li>
<li><code v-pre>SecurityManager</code>： 管理着所有 <code v-pre>Subject</code>，负责进行认证和授权、及会话、缓存的管理，是 <code v-pre>Shiro</code> 的心脏，所有具体的交互都通过 <code v-pre>SecurityManager</code> 进行拦截并控制</li>
<li><code v-pre>Realm</code>：一般我们都需要去实现自己的<code v-pre>Realm</code> ，可以有<code v-pre>1</code>个或多个 <code v-pre>Realm</code>，即当我们进行登录认证时所获取的安全数据来源(帐号/密码)</li>
</ul>
<p>学习参考：<a href="https://www.cnblogs.com/progor/p/10970971.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/progor/p/10970971.html<ExternalLinkIcon/></a></p>
<h3 id="springboot整合shiro环境搭建" tabindex="-1"><a class="header-anchor" href="#springboot整合shiro环境搭建" aria-hidden="true">#</a> SpringBoot整合Shiro环境搭建</h3>
<p>步骤如下：</p>
<ol>
<li>
<p>创建<code v-pre>SpringBoot</code>项目<code v-pre>springboot-shiro-first</code>，导入<code v-pre>Shiro</code>依赖包</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--SpringBoot 整合 Shiro--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.shiro<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>shiro-spring<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.4.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写简单的前端代码</p>
<p><code v-pre>index.html</code>：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span> <span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>th</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.thymeleaf.org<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${msg}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/user/add}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>add<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> |
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/user/update}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>update<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>add.html</code>：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>add<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>update.html</code>:</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>update<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写<code v-pre>controller</code>代码<code v-pre>MyController</code>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"/"</span><span class="token punctuation">,</span><span class="token string">"/index"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toIndex</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"msg"</span><span class="token punctuation">,</span><span class="token string">"hello, Shiro!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"index"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/user/add"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"user/add"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/user/update"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"user/update"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写<code v-pre>Shiro</code>配置类<code v-pre>ShiroConfig</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wyj<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>shiro<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>web<span class="token punctuation">.</span></span><span class="token class-name">ShiroFilterFactoryBean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>shiro<span class="token punctuation">.</span>web<span class="token punctuation">.</span>mgt<span class="token punctuation">.</span></span><span class="token class-name">DefaultWebSecurityManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Qualifier</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ShiroConfig</span> <span class="token punctuation">{</span>

    <span class="token comment">// ShiroFilterFactoryBean</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ShiroFilterFactoryBean</span> <span class="token function">getShiroFilterFactoryBean</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">"securityManager"</span><span class="token punctuation">)</span><span class="token class-name">DefaultWebSecurityManager</span> defaultWebSecurityManager<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ShiroFilterFactoryBean</span> bean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ShiroFilterFactoryBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置安全管理器</span>
        bean<span class="token punctuation">.</span><span class="token function">setSecurityManager</span><span class="token punctuation">(</span>defaultWebSecurityManager<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> bean<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// DefaultWebSecurityManager</span>
    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"securityManager"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">DefaultWebSecurityManager</span> <span class="token function">getDefaultWebSecurityManager</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">"userRealm"</span><span class="token punctuation">)</span> <span class="token class-name">UserRealm</span> userRealm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DefaultWebSecurityManager</span> securityManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultWebSecurityManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 关联 UserRealm</span>
        securityManager<span class="token punctuation">.</span><span class="token function">setRealm</span><span class="token punctuation">(</span>userRealm<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> securityManager<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 创建 realm 对象, 需要自定义类</span>
    <span class="token comment">// @Bean(name = "userRealm")</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">UserRealm</span> <span class="token function">userRealm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">UserRealm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p>
<ol>
<li>
<p>以上代码为<code v-pre>Shiro</code>配置类的固定写法，需要创建<code v-pre>ShiroFilterFactoryBean</code>过滤器对象、<code v-pre>DefaultWebSecurityManager</code>对象、自定义<code v-pre>Realm</code>对象</p>
</li>
<li>
<p>通过<code v-pre>@Qualifier</code>标签拿到<code v-pre>userRealm()</code>方法创建的<code v-pre>Bean</code>对象，绑定到<code v-pre>getDefaultWebSecurityManager()</code>方法中的参数<code v-pre>userRealm</code>上</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211224162145421.png" alt="image-20211224162145421" loading="lazy"></p>
</li>
</ol>
</li>
<li>
<p>编写自定义的<code v-pre>Realm</code>类，需要继承<code v-pre>AuthorizingRealm</code>抽象类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 自定义 UserRealm, 需要继承 AuthorizingRealm
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserRealm</span> <span class="token keyword">extends</span> <span class="token class-name">AuthorizingRealm</span> <span class="token punctuation">{</span>

    <span class="token comment">// 授权</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">AuthorizationInfo</span> <span class="token function">doGetAuthorizationInfo</span><span class="token punctuation">(</span><span class="token class-name">PrincipalCollection</span> principalCollection<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"执行了=>授权doGetAuthorizationInfo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 认证</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">AuthenticationInfo</span> <span class="token function">doGetAuthenticationInfo</span><span class="token punctuation">(</span><span class="token class-name">AuthenticationToken</span> authenticationToken<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">AuthenticationException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"执行了=>认证doGetAuthenticationInfo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>测试搭建环境</p>
<p>测试首页和<code v-pre>add</code>和<code v-pre>update</code>按钮正常跳转</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211227100533969.png" alt="image-20211227100533969" loading="lazy"></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211227100555318.png" alt="image-20211227100555318" loading="lazy"></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211227100620027.png" alt="image-20211227100620027" loading="lazy"></p>
</li>
</ol>
<h3 id="登录拦截" tabindex="-1"><a class="header-anchor" href="#登录拦截" aria-hidden="true">#</a> 登录拦截</h3>
<p>如果点击<code v-pre>add</code>、<code v-pre>update</code>时，要设置拦截功能：在进行页面跳转过程中首先会跳转到一个登录界面。<code v-pre>Shiro</code>可以通过拦截器链实现该功能，常见的拦截器有：</p>
<ul>
<li><code v-pre>anon</code>：任何人都可以访问</li>
<li><code v-pre>authc</code>：只有认证后才可以访问</li>
<li><code v-pre>logout</code>：只有登录后才可以访问</li>
<li><code v-pre>roles</code>[角色名]：只有拥有特定角色才能访问</li>
<li><code v-pre>perms</code>[&quot;行为&quot;]：只有拥有某种行为的才能访问</li>
</ul>
<p>代码实现步骤如下：</p>
<ol>
<li>
<p>手动创建拦截跳转页面，并编写相应<code v-pre>controller</code></p>
<p><code v-pre>login.html</code>：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>th</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.thymeleaf.org<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1, maximum-scale=1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--semantic-ui--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.bootcss.com/semantic-ui/2.4.1/semantic.min.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--主容器--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ui container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ui segment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span> center</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ui placeholder segment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ui column very relaxed stackable grid<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>column<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ui form<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name"><span class="token namespace">th:</span>action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/toLogin}<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>field<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>Username<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ui left icon input<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Username<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>uname<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>field<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>Password<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ui left icon input<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pwd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lock icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ui blue submit button<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name"><span class="token namespace">th:</span>src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/js/jquery-3.1.1.min.js}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name"><span class="token namespace">th:</span>src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/js/semantic.min.js}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>MyController.java</code>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/toLogin"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"login"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写登录拦截功能</p>
<p>登录拦截功能代码的实现需要在<code v-pre>ShiroConfig</code>类中<code v-pre>getShiroFilterFactoryBean(...)</code>添加以下代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">ShiroFilterFactoryBean</span> <span class="token function">getShiroFilterFactoryBean</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">"securityManager"</span><span class="token punctuation">)</span><span class="token class-name">DefaultWebSecurityManager</span> defaultWebSecurityManager<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>

    <span class="token comment">// (1)设置拦截器链 : anon authc logout roles perms</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> filterMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//filterMap.put("/user/add","authc");</span>
    <span class="token comment">//filterMap.put("/user/update","authc");</span>
    <span class="token comment">//</span>
    filterMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"/user/**"</span><span class="token punctuation">,</span><span class="token string">"authc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    bean<span class="token punctuation">.</span><span class="token function">setFilterChainDefinitionMap</span><span class="token punctuation">(</span>filterMap<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// (2)设置拦截登录的请求(拦截之后跳转的页面)</span>
    bean<span class="token punctuation">.</span><span class="token function">setLoginUrl</span><span class="token punctuation">(</span><span class="token string">"/toLogin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> bean<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>filterMap.put(&quot;/user/**&quot;,&quot;authc&quot;);</code>表示路径<code v-pre>user</code>下的所有请求必须通过认证才会跳转</li>
<li><code v-pre>bean.setLoginUrl(&quot;/toLogin&quot;);</code>表示路径<code v-pre>user</code>下的所有请求会跳转到<code v-pre>URL</code>为<code v-pre>/toLogin</code>的登录页面进行认证</li>
</ul>
</li>
<li>
<p>测试</p>
<p>点击<code v-pre>add</code>、<code v-pre>update</code>时，会跳转到登录界面(登录拦截)：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211227104718821.png" alt="image-20211227104718821" loading="lazy"></p>
<p>如果删除代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// (2)设置拦截登录的请求(拦截之后跳转的页面)</span>
bean<span class="token punctuation">.</span><span class="token function">setLoginUrl</span><span class="token punctuation">(</span><span class="token string">"/toLogin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>点击<code v-pre>add</code>、<code v-pre>update</code>时，跳转失败：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211227105005025.png" alt="image-20211227105005025" loading="lazy"></p>
</li>
</ol>
<h3 id="用户认证" tabindex="-1"><a class="header-anchor" href="#用户认证" aria-hidden="true">#</a> 用户认证</h3>
<p>用户在跳转页面时需要经过验证，否则不能跳转到界面里，登录拦截实现了拦截功能，此时需要在登录界面输入相应的用户名和密码进行验证，来判断输入的用户是否可以通过验证并进行界面跳转。步骤如下：</p>
<ol>
<li>
<p>前端登录界面输入用户名和密码跳转到相应的<code v-pre>controller</code>进行处理。编写一个对应的<code v-pre>controller</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/login"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token class-name">String</span> password<span class="token punctuation">,</span> <span class="token class-name">Model</span> model<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 获取当前用户</span>
    <span class="token class-name">Subject</span> subject <span class="token operator">=</span> <span class="token class-name">SecurityUtils</span><span class="token punctuation">.</span><span class="token function">getSubject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 封装用户的登录数据</span>
    <span class="token class-name">UsernamePasswordToken</span> token <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UsernamePasswordToken</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 执行登录方法</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        subject<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"index"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">UnknownAccountException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//用户名不存在</span>
        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"msg"</span><span class="token punctuation">,</span><span class="token string">"用户名错误"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"login"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IncorrectCredentialsException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 密码不存在</span>
        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"msg"</span><span class="token punctuation">,</span><span class="token string">"密码错误"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"login"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时进行登录测试会发现自动执行了<code v-pre>UserRealm</code>类中的<code v-pre>doGetAuthenticationInfo(...)</code>认证方法</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211227153805951.png" alt="image-20211227153805951" loading="lazy"></p>
</li>
<li>
<p>在<code v-pre>UserRealm</code>类补全的<code v-pre>doGetAuthenticationInfo(...)</code>认证方法代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 认证</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">protected</span> <span class="token class-name">AuthenticationInfo</span> <span class="token function">doGetAuthenticationInfo</span><span class="token punctuation">(</span><span class="token class-name">AuthenticationToken</span> token<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">AuthenticationException</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"执行了=>认证doGetAuthenticationInfo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 模拟获取数据库中的用户名和密码</span>
    <span class="token class-name">String</span> uname <span class="token operator">=</span> <span class="token string">"root"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> pwd <span class="token operator">=</span> <span class="token string">"123456"</span><span class="token punctuation">;</span>

    <span class="token class-name">UsernamePasswordToken</span> userToken <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">UsernamePasswordToken</span><span class="token punctuation">)</span> token<span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>userToken<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 验证用户名是否输入正确</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>userToken<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>uname<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 用户名输入错误, return null 表示抛出异常 UnknownAccountException</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 验证密码是否输入正确, 由 Shiro 自动完成</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SimpleAuthenticationInfo</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> pwd<span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>用户名密码输入错误，需要将错误信息显示在登录界面，在登录代码login.html中写一个错误信息标签</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>field<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">align-content</span><span class="token punctuation">:</span> center</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${msg}<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> red</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>测试</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211227163507053.png" alt="image-20211227163507053" loading="lazy"></p>
</li>
</ol>
<h3 id="整合mybatis-1" tabindex="-1"><a class="header-anchor" href="#整合mybatis-1" aria-hidden="true">#</a> 整合Mybatis</h3>
<p>整合MyBatis流程如下：</p>
<ol>
<li>
<p><code v-pre>pom</code>文件导入<code v-pre>jdbc</code>、<code v-pre>Druid</code>、<code v-pre>Mybatis</code>、<code v-pre>log4j</code>依赖包，<code v-pre>yaml</code>文件中配置数据源参数</p>
</li>
<li>
<p>编写<code v-pre>pojo</code>对象以及对应的<code v-pre>mapper</code>和<code v-pre>MapperXML</code>映射，<code v-pre>yaml</code>文件中整合<code v-pre>MyBatis</code></p>
</li>
<li>
<p>编写<code v-pre>service</code>层代码</p>
</li>
<li>
<p>重写<code v-pre>UserRealm</code>类中的认证方法<code v-pre>doGetAuthenticationInfo(...)</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 认证</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">protected</span> <span class="token class-name">AuthenticationInfo</span> <span class="token function">doGetAuthenticationInfo</span><span class="token punctuation">(</span><span class="token class-name">AuthenticationToken</span> token<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">AuthenticationException</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"执行了=>认证doGetAuthenticationInfo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 模拟获取数据库中的用户名和密码</span>
    <span class="token comment">//String uname = "root";</span>
    <span class="token comment">//String pwd = "123456";</span>

    <span class="token class-name">UsernamePasswordToken</span> userToken <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">UsernamePasswordToken</span><span class="token punctuation">)</span> token<span class="token punctuation">;</span>

    <span class="token comment">/*// 验证用户名是否输入正确
    if (!userToken.getUsername().equals(uname)) {
        // 用户名输入错误, return null 表示抛出异常 UnknownAccountException
        return null;
    }
    // 验证密码是否输入正确, 由 Shiro 自动完成
    return new SimpleAuthenticationInfo("", pwd, "");*/</span>

    <span class="token class-name">User</span> user <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">queryUserByName</span><span class="token punctuation">(</span>userToken<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 验证用户名是否输入正确</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 用户名输入错误, return null 表示抛出异常 UnknownAccountException</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 验证密码是否输入正确, 由 Shiro 自动完成</span>
    <span class="token comment">// user.getPwd() pwd 需要定义为 String 类型, 定义为 int 类型报错</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SimpleAuthenticationInfo</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getPwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<code v-pre>SimpleAuthenticationInfo()</code>中传入的密码需要<code v-pre>String</code>类型，传入<code v-pre>int</code>类型认证失败</p>
</li>
</ol>
<h3 id="用户授权" tabindex="-1"><a class="header-anchor" href="#用户授权" aria-hidden="true">#</a> 用户授权</h3>
<p>如果需要实现部分用户可以访问<code v-pre>add</code>页面，部分页面可以访问<code v-pre>update</code>页面，需要用到用户授权功能，实现步骤如下：</p>
<ol>
<li>
<p>在<code v-pre>ShiroConfig</code>配置类<code v-pre>getShiroFilterFactoryBean(...)</code>方法中添加如下代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 授权</span>
<span class="token comment">// 携带 user:add 字符串的用户才能有权限访问 user 文件夹下的 add 页面</span>
filterMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"/user/add"</span><span class="token punctuation">,</span><span class="token string">"perms[user:add]"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
filterMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"/user/update"</span><span class="token punctuation">,</span><span class="token string">"perms[user:update]"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表示如果想访问<code v-pre>/user</code>文件夹下的<code v-pre>add</code>资源，需要用户具有<code v-pre>user:add</code>权限</p>
<p>之后登录认证成功之后输入正确的用户名和密码发现报错未授权，错误<code v-pre>401</code></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211228101430154.png" alt="image-20211228101430154" loading="lazy"></p>
<p>此时执行了<code v-pre>UserRealm</code>类中的授权方法</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211228101621327.png" alt="image-20211228101621327" loading="lazy"></p>
<p>需要在<code v-pre>UserRealm</code>类中的授权方法编写授权代码</p>
</li>
<li>
<p>用户未授权可以跳转到自定义未授权页面，而不是<code v-pre>401</code>页面</p>
<p><code v-pre>ShiroConfig</code>类<code v-pre>getShiroFilterFactoryBean(...)</code>方法添加：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 设置未授权跳转页面</span>
bean<span class="token punctuation">.</span><span class="token function">setUnauthorizedUrl</span><span class="token punctuation">(</span><span class="token string">"/unauth"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>类<code v-pre>MyController</code>添加：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/unauth"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">unauth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"用户未授权访问权限!"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试如果用户未授权跳转到以下界面：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211228112034387.png" alt="image-20211228112034387" loading="lazy"></p>
</li>
<li>
<p>在<code v-pre>UserRealm</code>类中的授权方法编写授权代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 授权</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">protected</span> <span class="token class-name">AuthorizationInfo</span> <span class="token function">doGetAuthorizationInfo</span><span class="token punctuation">(</span><span class="token class-name">PrincipalCollection</span> principalCollection<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"执行了=>授权doGetAuthorizationInfo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">SimpleAuthorizationInfo</span> info <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleAuthorizationInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 为所有用户增加 user:add 权限</span>
    <span class="token comment">//info.addStringPermission("user:add");</span>

    <span class="token comment">// 获取当前登录用户</span>
    <span class="token class-name">Subject</span> subject <span class="token operator">=</span> <span class="token class-name">SecurityUtils</span><span class="token punctuation">.</span><span class="token function">getSubject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取认证方法中查到的当前登录用户信息 : User 对象</span>
    <span class="token class-name">User</span> currentUser <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">)</span> subject<span class="token punctuation">.</span><span class="token function">getPrincipal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取当前用户在数据库中查询到的拥有的权限, 并为当前用户设置该权限</span>
    info<span class="token punctuation">.</span><span class="token function">addStringPermission</span><span class="token punctuation">(</span>currentUser<span class="token punctuation">.</span><span class="token function">getPerms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> info<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>对象<code v-pre>subject</code>通过<code v-pre>getPrincipal()</code>方法获得当前<code v-pre>User</code>用户，<code v-pre>User</code>用户的信息是在认证代码中数据库查询到的，修改认证代码如下所示，通过<code v-pre>return</code>返回了一个<code v-pre>SimpleAuthenticationInfo</code>对象，将<code v-pre>user</code>对象作为<code v-pre>SimpleAuthenticationInfo</code>对象的第一个参数传入，之后授权代码便可以通过<code v-pre>getPrincipal()</code>方法获得当前<code v-pre>User</code>用户的信息了。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 认证</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">protected</span> <span class="token class-name">AuthenticationInfo</span> <span class="token function">doGetAuthenticationInfo</span><span class="token punctuation">(</span><span class="token class-name">AuthenticationToken</span> token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// ...</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SimpleAuthenticationInfo</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getPwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>通过<code v-pre>addStringPermission()</code>为当前<code v-pre>User</code>用户设置与数据库对应一致的权限，数据库表<code v-pre>usetest</code>增加权限字段<code v-pre>perms</code>，对应的User实体类也增加<code v-pre>perms</code>属性</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span> <span class="token comment">//Lombok标签</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token comment">//属性名称要与数据库对应表字段名称一致(不区分大小写)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> pwd<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> perms<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211228155246787.png" alt="image-20211228155246787" loading="lazy"></p>
</li>
</ul>
</li>
</ol>
<h3 id="整合thymeleaf" tabindex="-1"><a class="header-anchor" href="#整合thymeleaf" aria-hidden="true">#</a> 整合Thymeleaf</h3>
<p>当某一个用户没有<code v-pre>update</code>权限时，希望将<code v-pre>update</code>隐藏，需要整合<code v-pre>Thymeleaf</code>，流程如下：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211228170240378.png" alt="image-20211228170240378" loading="lazy"></p>
<ol>
<li>
<p>导入<code v-pre>Thymeleaf</code>与<code v-pre>Shiro</code>整合依赖包</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--thymeleaf整合shiro--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.github.theborakompanioni<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>thymeleaf-extras-shiro<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>Shiro</code>配置类<code v-pre>ShiroConfig</code>中进行配置</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 整合ShiroDialect : 用来整合 Shiro 和 Thymeleaf</span>
<span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">ShiroDialect</span> <span class="token function">getShiroDialect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ShiroDialect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>前端首页<code v-pre>index.html</code>代码导入命名空间</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>th</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.thymeleaf.org<span class="token punctuation">"</span></span>
      <span class="token attr-name"><span class="token namespace">xmlns:</span>shiro</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.thymeleaf.org/thymeleaf-extras-shiro<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>修改<code v-pre>index.html</code>代码</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${msg}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/toLogin}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">shiro:</span>hasPermission</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user:add<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/user/add}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>add<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">shiro:</span>hasPermission</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user:update<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/user/update}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>update<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211228172104304.png" alt="image-20211228172104304" loading="lazy"></p>
</li>
</ol>
<p>修改之后，测试发现，不具有<code v-pre>add</code>权限的用户登录，只显示<code v-pre>update</code>操作，此时已经登录成功，需要隐藏<code v-pre>登录</code>选项，通过获取用户<code v-pre>session</code>的操作来实现，步骤如下：</p>
<ol>
<li>
<p>认证方法中将已登录的用户信息保存在<code v-pre>session</code>中</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 认证</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">protected</span> <span class="token class-name">AuthenticationInfo</span> <span class="token function">doGetAuthenticationInfo</span><span class="token punctuation">(</span><span class="token class-name">AuthenticationToken</span> token<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">AuthenticationException</span> <span class="token punctuation">{</span> 
	<span class="token comment">// ...</span>
    
    <span class="token comment">// 获取当前 session, 并将当前用户信息存在 session 中</span>
    <span class="token class-name">Subject</span> currentSubject <span class="token operator">=</span> <span class="token class-name">SecurityUtils</span><span class="token punctuation">.</span><span class="token function">getSubject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Session</span> session <span class="token operator">=</span> currentSubject<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"loginUser"</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SimpleAuthenticationInfo</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getPwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>修改首页<code v-pre>index.html</code>代码，拿到<code v-pre>session</code>信息，判断该用户是否存在，存在表示已经登录，隐藏<code v-pre>登录</code>选项</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${session.loginUser==null}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/toLogin}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>最终测试发现登录成功之后，<code v-pre>登录</code>选项消失</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211228173448668.png" alt="image-20211228173448668" loading="lazy"></p>
<h2 id="swagger" tabindex="-1"><a class="header-anchor" href="#swagger" aria-hidden="true">#</a> Swagger</h2>
<h3 id="swagger简介" tabindex="-1"><a class="header-anchor" href="#swagger简介" aria-hidden="true">#</a> Swagger简介</h3>
<p><code v-pre>Swagger</code>是一个规范和完整的框架，用于生成、描述、调用和可视化 <code v-pre>RESTful</code> 风格的 <code v-pre>Web</code> 服务；总体目标是使客户端和文件系统作为服务器以同样的速度来更新；文件的方法，参数和模型紧密集成到服务器端的代码，允许<code v-pre>API</code>来始终保持同步。主要用来：</p>
<ul>
<li>接口文档在线自动生成</li>
<li>功能测试</li>
</ul>
<p><code v-pre>Swagger</code>是一组开源项目，其中主要要项目如下：</p>
<ul>
<li><code v-pre>Swagger-tools</code>：提供各种与<code v-pre>Swagger</code>进行集成和交互的工具。例如模式检验、<code v-pre>Swagger 1.2</code>文档转换成<code v-pre>Swagger 2.0</code>文档等功能</li>
<li><code v-pre>Swagger-core</code>：用于<code v-pre>Java/Scala</code>的的<code v-pre>Swagger</code>实现。与<code v-pre>JAX-RS</code>(<code v-pre>Jersey</code>、<code v-pre>Resteasy</code>、<code v-pre>CXF</code>...)、<code v-pre>Servlets</code>和<code v-pre>Play</code>框架进行集成</li>
<li><code v-pre>Swagger-js</code>：用于<code v-pre>JavaScript</code>的<code v-pre>Swagger</code>实现</li>
<li><code v-pre>Swagger-node-express</code>：<code v-pre>Swagger</code>模块，用于<code v-pre>node.js</code>的<code v-pre>Express web</code>应用框架</li>
<li><code v-pre>Swagger-ui</code>：一个无依赖的<code v-pre>HTML</code>、<code v-pre>JS</code>和<code v-pre>CSS</code>集合，可以为<code v-pre>Swagger</code>兼容<code v-pre>API</code>动态生成优雅文档</li>
<li><code v-pre>Swagger-codegen</code>：一个模板驱动引擎，通过分析用户<code v-pre>Swagger</code>资源声明以各种语言生成客户端代码</li>
</ul>
<h3 id="springboot集成swagger" tabindex="-1"><a class="header-anchor" href="#springboot集成swagger" aria-hidden="true">#</a> SpringBoot集成Swagger</h3>
<p>创建新的<code v-pre>SpringBoot</code>项目<code v-pre>springboot-swagger-first</code>，集成<code v-pre>Swagger</code>，步骤如下：</p>
<ol>
<li>
<p><code v-pre>pom</code>文件添加<code v-pre>Swagger</code>依赖，需要使用到<code v-pre>Springfox-swagger2</code>、springfox-swagger-ui两个<code v-pre>jar</code>包</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--Swagger--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>io.springfox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>springfox-swagger2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.9.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>io.springfox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>springfox-swagger-ui<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.9.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p>
<ul>
<li>要求<code v-pre>JDK1.8+</code>，否则<code v-pre>swagger2</code>无法运行</li>
<li><code v-pre>Swagger</code>依赖要求<code v-pre>2.9.2</code>版本之前</li>
</ul>
</li>
<li>
<p>编写一个简单的<code v-pre>controller</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/hello"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Hello, Swagger"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写<code v-pre>Swagger</code>配置类<code v-pre>SwaggerConfig</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>    <span class="token comment">// 配置类</span>
<span class="token annotation punctuation">@EnableSwagger2</span>   <span class="token comment">// 开启 swagger2 自动配置</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SwaggerConfig</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>访问测试：<a href="http://localhost:8080/swagger-ui.html" target="_blank" rel="noopener noreferrer">http://localhost:8080/swagger-ui.html<ExternalLinkIcon/></a></p>
<p><code v-pre>Swagger 3.0.0</code>版本访问：<a href="http://localhost:8080/swagger-ui/index.html" target="_blank" rel="noopener noreferrer">http://localhost:8080/swagger-ui/index.html<ExternalLinkIcon/></a></p>
<p>出现异常信息：<code v-pre>Failed to execute goal org.apache.maven.plugins:maven-surefire-plugin:2.22.2:test (default-test) on project springboot-swagger-first: There are test failures.</code></p>
</li>
</ol>
<h3 id="集成swagger可能存在的问题" tabindex="-1"><a class="header-anchor" href="#集成swagger可能存在的问题" aria-hidden="true">#</a> 集成Swagger可能存在的问题</h3>
<p>上述<code v-pre>SpringBoot</code>集成<code v-pre>Swagger</code>方式，可能会出现以下错误：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Error starting ApplicationContext. To display the conditions report re-run your application with 'debug' enabled.
2021-12-22 21:53:13.203 ERROR 29012 --- [           main] o.s.boot.SpringApplication               : Application run failed

org.springframework.context.ApplicationContextException: Failed to start bean 'documentationPluginsBootstrapper'; nested exception is java.lang.NullPointerException
	at org.springframework.context.support.DefaultLifecycleProcessor.doStart(DefaultLifecycleProcessor.java:181) ~[spring-context-5.3.14.jar:5.3.14]
	at org.springframework.context.support.DefaultLifecycleProcessor.access$200(DefaultLifecycleProcessor.java:54) ~[spring-context-5.3.14.jar:5.3.14]
	at org.springframework.context.support.DefaultLifecycleProcessor$LifecycleGroup.start(DefaultLifecycleProcessor.java:356) ~[spring-context-5.3.14.jar:5.3.14]
	at java.lang.Iterable.forEach(Iterable.java:75) ~[na:1.8.0_311]
	at org.springframework.context.support.DefaultLifecycleProcessor.startBeans(DefaultLifecycleProcessor.java:155) ~[spring-context-5.3.14.jar:5.3.14]
	at org.springframework.context.support.DefaultLifecycleProcessor.onRefresh(DefaultLifecycleProcessor.java:123) ~[spring-context-5.3.14.jar:5.3.14]
	at org.springframework.context.support.AbstractApplicationContext.finishRefresh(AbstractApplicationContext.java:935) ~[spring-context-5.3.14.jar:5.3.14]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:586) ~[spring-context-5.3.14.jar:5.3.14]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:145) ~[spring-boot-2.6.2.jar:2.6.2]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:730) [spring-boot-2.6.2.jar:2.6.2]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:412) [spring-boot-2.6.2.jar:2.6.2]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:302) [spring-boot-2.6.2.jar:2.6.2]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1301) [spring-boot-2.6.2.jar:2.6.2]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1290) [spring-boot-2.6.2.jar:2.6.2]
	at com.lin.swagger.SwaggerDemoApplication.main(SwaggerDemoApplication.java:13) [classes/:na]
Caused by: java.lang.NullPointerException: null
	at springfox.documentation.spi.service.contexts.Orderings$8.compare(Orderings.java:112) ~[springfox-spi-2.9.2.jar:null]
	at springfox.documentation.spi.service.contexts.Orderings$8.compare(Orderings.java:109) ~[springfox-spi-2.9.2.jar:null]
	at com.google.common.collect.ComparatorOrdering.compare(ComparatorOrdering.java:37) ~[guava-20.0.jar:na]
	at java.util.TimSort.countRunAndMakeAscending(TimSort.java:355) ~[na:1.8.0_311]
	at java.util.TimSort.sort(TimSort.java:220) ~[na:1.8.0_311]
	at java.util.Arrays.sort(Arrays.java:1438) ~[na:1.8.0_311]
	at com.google.common.collect.Ordering.sortedCopy(Ordering.java:855) ~[guava-20.0.jar:na]
	at springfox.documentation.spring.web.plugins.WebMvcRequestHandlerProvider.requestHandlers(WebMvcRequestHandlerProvider.java:57) ~[springfox-spring-web-2.9.2.jar:null]
	at springfox.documentation.spring.web.plugins.DocumentationPluginsBootstrapper$2.apply(DocumentationPluginsBootstrapper.java:138) ~[springfox-spring-web-2.9.2.jar:null]
	at springfox.documentation.spring.web.plugins.DocumentationPluginsBootstrapper$2.apply(DocumentationPluginsBootstrapper.java:135) ~[springfox-spring-web-2.9.2.jar:null]
	at com.google.common.collect.Iterators$7.transform(Iterators.java:750) ~[guava-20.0.jar:na]
	at com.google.common.collect.TransformedIterator.next(TransformedIterator.java:47) ~[guava-20.0.jar:na]
	at com.google.common.collect.TransformedIterator.next(TransformedIterator.java:47) ~[guava-20.0.jar:na]
	at com.google.common.collect.MultitransformedIterator.hasNext(MultitransformedIterator.java:52) ~[guava-20.0.jar:na]
	at com.google.common.collect.MultitransformedIterator.hasNext(MultitransformedIterator.java:50) ~[guava-20.0.jar:na]
	at com.google.common.collect.ImmutableList.copyOf(ImmutableList.java:249) ~[guava-20.0.jar:na]
	at com.google.common.collect.ImmutableList.copyOf(ImmutableList.java:209) ~[guava-20.0.jar:na]
	at com.google.common.collect.FluentIterable.toList(FluentIterable.java:614) ~[guava-20.0.jar:na]
	at springfox.documentation.spring.web.plugins.DocumentationPluginsBootstrapper.defaultContextBuilder(DocumentationPluginsBootstrapper.java:111) ~[springfox-spring-web-2.9.2.jar:null]
	at springfox.documentation.spring.web.plugins.DocumentationPluginsBootstrapper.buildContext(DocumentationPluginsBootstrapper.java:96) ~[springfox-spring-web-2.9.2.jar:null]
	at springfox.documentation.spring.web.plugins.DocumentationPluginsBootstrapper.start(DocumentationPluginsBootstrapper.java:167) ~[springfox-spring-web-2.9.2.jar:null]
	at org.springframework.context.support.DefaultLifecycleProcessor.doStart(DefaultLifecycleProcessor.java:178) ~[spring-context-5.3.14.jar:5.3.14]
	... 14 common frames omitted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提取关键错误信息：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Error starting ApplicationContext. To display the conditions report re-run your application with 'debug' enabled.
...
Caused by: java.lang.NullPointerException: null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原因是在<code v-pre>springboot2.6.0</code>中将<code v-pre>SpringMVC</code> 默认路径匹配策略从<code v-pre>AntPathMatcher</code> 更改为<code v-pre>PathPatternParser</code>，导致出错。可以在启动类上加上<code v-pre>@EnableWebMvc</code>注解或者在配置中切换为原先的<code v-pre>AntPathMatcher</code>：<code v-pre>spring.mvc.pathmatch.matching-strategy=ant_path_matcher</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableWebMvc</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringbootSwaggerFirstApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SpringbootSwaggerFirstApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加上以上配置后启动就不报错了，但是访问<a href="http://localhost:8080/swagger-ui/index.html%E6%8A%A5%60404%60" target="_blank" rel="noopener noreferrer">http://localhost:8080/swagger-ui/index.html报`404`<ExternalLinkIcon/></a></p>
<p>解决办法：把原来的<code v-pre>swagger2</code>和<code v-pre>swagger-ui</code>依赖删掉，改成<code v-pre>spring-boot-starter</code>依赖：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>io.springfox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>springfox-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211229154414504.png" alt="image-20211229154414504" loading="lazy"></p>
<h3 id="配置swagger" tabindex="-1"><a class="header-anchor" href="#配置swagger" aria-hidden="true">#</a> 配置Swagger</h3>
<p><code v-pre>Swagger</code>的实例<code v-pre>Bean</code>是一个<code v-pre>Docket</code>对象，所以通过配置<code v-pre>Docket</code>实例来配置<code v-pre>Swagger</code>，步骤如下：</p>
<ol>
<li>
<p><code v-pre>SwaggerConfig</code>配置类生成<code v-pre>Docket</code>实例</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">docket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">SWAGGER_2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>通过<code v-pre>apiInfo()</code>方法配置文档信息</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 配置文档信息</span>
<span class="token keyword">public</span> <span class="token class-name">ApiInfo</span> <span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// contact 联系人信息</span>
    <span class="token class-name">Contact</span> contact <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Contact</span><span class="token punctuation">(</span><span class="token string">"联系人名字"</span><span class="token punctuation">,</span> <span class="token string">"http://xxx.xxx.com/联系人访问链接"</span><span class="token punctuation">,</span> <span class="token string">"联系人邮箱"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ApiInfo</span><span class="token punctuation">(</span>
        <span class="token string">"Swagger学习"</span><span class="token punctuation">,</span> <span class="token comment">// 标题</span>
        <span class="token string">"学习演示如何配置Swagger"</span><span class="token punctuation">,</span> <span class="token comment">// 描述</span>
        <span class="token string">"v1.0"</span><span class="token punctuation">,</span> <span class="token comment">// 版本</span>
        <span class="token string">"http://terms.service.url/组织链接"</span><span class="token punctuation">,</span> <span class="token comment">// 组织链接</span>
        contact<span class="token punctuation">,</span> <span class="token comment">// 联系人信息</span>
        <span class="token string">"Apach 2.0 许可"</span><span class="token punctuation">,</span> <span class="token comment">// 许可</span>
        <span class="token string">"许可链接"</span><span class="token punctuation">,</span> <span class="token comment">// 许可连接</span>
        <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 扩展</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>修改<code v-pre>docket()</code>方法，<code v-pre>Docket</code> 实例关联<code v-pre>apiInfo()</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">docket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">SWAGGER_2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>最终测试结果如下：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211229160906753.png" alt="image-20211229160906753" loading="lazy"></p>
<p>部分源码解析：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span> documentationType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>documentationType <span class="token operator">=</span> documentationType<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DocumentationType</span> <span class="token keyword">extends</span> <span class="token class-name">SimplePluginMetadata</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">DocumentationType</span> <span class="token constant">SWAGGER_12</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DocumentationType</span><span class="token punctuation">(</span><span class="token string">"swagger"</span><span class="token punctuation">,</span> <span class="token string">"1.2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">DocumentationType</span> <span class="token constant">SWAGGER_2</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DocumentationType</span><span class="token punctuation">(</span><span class="token string">"swagger"</span><span class="token punctuation">,</span> <span class="token string">"2.0"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">DocumentationType</span> <span class="token constant">OAS_30</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DocumentationType</span><span class="token punctuation">(</span><span class="token string">"openApi"</span><span class="token punctuation">,</span> <span class="token string">"3.0"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ApiInfo</span><span class="token punctuation">(</span><span class="token class-name">String</span> title<span class="token punctuation">,</span> <span class="token class-name">String</span> description<span class="token punctuation">,</span> <span class="token class-name">String</span> version<span class="token punctuation">,</span> <span class="token class-name">String</span> termsOfServiceUrl<span class="token punctuation">,</span> <span class="token class-name">Contact</span> contact<span class="token punctuation">,</span> <span class="token class-name">String</span> license<span class="token punctuation">,</span> <span class="token class-name">String</span> licenseUrl<span class="token punctuation">,</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">VendorExtension</span><span class="token punctuation">></span></span> vendorExtensions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">=</span> title<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>description <span class="token operator">=</span> description<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>version <span class="token operator">=</span> version<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>termsOfServiceUrl <span class="token operator">=</span> termsOfServiceUrl<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>contact <span class="token operator">=</span> contact<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>license <span class="token operator">=</span> license<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>licenseUrl <span class="token operator">=</span> licenseUrl<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>vendorExtensions <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span>vendorExtensions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Contact</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> url<span class="token punctuation">,</span> <span class="token class-name">String</span> email<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> url<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> email<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置扫描接口" tabindex="-1"><a class="header-anchor" href="#配置扫描接口" aria-hidden="true">#</a> 配置扫描接口</h3>
<p><code v-pre>Swagger</code>可以指定配置需要扫描的接口，步骤如下：</p>
<ol>
<li>
<p>使用<code v-pre>select()</code>方法配置需要扫描的接口</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">docket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">SWAGGER_2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
		<span class="token comment">// 通过 .select() 方法去配置扫描接口, RequestHandlerSelectors 配置如何扫描接口</span>
        <span class="token function">apis</span><span class="token punctuation">(</span><span class="token class-name">RequestHandlerSelectors</span><span class="token punctuation">.</span><span class="token function">basePackage</span><span class="token punctuation">(</span><span class="token string">"com.swagger.first.controller"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>测试，发现<code v-pre>Swagger</code>仅仅扫描了包路径<code v-pre>com.swagger.first.controller</code>下的内容</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211229165140626.png" alt="image-20211229165140626" loading="lazy"></p>
</li>
<li>
<p>除了通过包路径配置扫描接口外，还可以通过配置其他方式扫描接口，配置方式如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">docket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">SWAGGER_2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token comment">// 通过 .select() 方法去配置扫描接口, RequestHandlerSelectors 配置如何扫描接口</span>
        <span class="token function">apis</span><span class="token punctuation">(</span><span class="token class-name">RequestHandlerSelectors</span><span class="token punctuation">.</span><span class="token function">basePackage</span><span class="token punctuation">(</span><span class="token string">"com.swagger.first.controller"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token comment">// apis(RequestHandlerSelectors.any()). // 扫描所有, 项目中的所有接口都会被扫描到</span>
        <span class="token comment">// apis(RequestHandlerSelectors.none()). // 不扫描接口</span>
        <span class="token comment">// 通过类上的注解扫描, Controller.class : 只扫描有 @Controller 注解的类</span>
        <span class="token comment">// apis(RequestHandlerSelectors.withClassAnnotation(Controller.class)).</span>
        <span class="token comment">// 通过方法上的注解扫描, GetMapping.class : 只扫描 get 请求, 方法上有注解 @GetMapping()</span>
        <span class="token comment">// apis(RequestHandlerSelectors.withMethodAnnotation(GetMapping.class)).</span>
        <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>可以配置接口扫描过滤：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">docket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">SWAGGER_2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token comment">// 配置通过 path 过滤, 即这里只扫描请求以 /hello 开头的接口</span>
        <span class="token function">paths</span><span class="token punctuation">(</span><span class="token class-name">PathSelectors</span><span class="token punctuation">.</span><span class="token function">ant</span><span class="token punctuation">(</span><span class="token string">"/hello/**"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// path 过滤 : paths(PathSelectors.ant("/hello/**")), HelloController 可以被扫描到</span>
<span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/hello"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Hello, Swagger"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果修改为：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token function">paths</span><span class="token punctuation">(</span><span class="token class-name">PathSelectors</span><span class="token punctuation">.</span><span class="token function">ant</span><span class="token punctuation">(</span><span class="token string">"/wyj/**"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于代码中没有<code v-pre>/wyj</code>请求，因此扫描不到任何接口信息：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211229171818976.png" alt="image-20211229171818976" loading="lazy"></p>
<p><code v-pre>PathSelectors</code>常用方法有：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 任何请求都扫描</span>
<span class="token function">none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 任何请求都不扫描</span>
<span class="token function">regex</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> pathRegex<span class="token punctuation">)</span> <span class="token comment">// 通过正则表达式控制</span>
<span class="token function">ant</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> antPattern<span class="token punctuation">)</span> <span class="token comment">// 通过ant()控制</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="配置swagger开关" tabindex="-1"><a class="header-anchor" href="#配置swagger开关" aria-hidden="true">#</a> 配置Swagger开关</h3>
<p>当项目在开发环境<code v-pre>dev</code>和测试环境<code v-pre>test</code>时，需要开启<code v-pre>swagger</code>，项目发布环境<code v-pre>pro</code>不需要显示<code v-pre>swagger</code>，可以通过配置<code v-pre>swagger</code>开关来实现，步骤如下：</p>
<ol>
<li>
<p>通过<code v-pre>enable()</code>方法配置是否启用<code v-pre>swagger</code>，如果是<code v-pre>false</code>，<code v-pre>swagger</code>将不能在浏览器中访问</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">docket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">SWAGGER_2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token comment">// 配置是否启用 swagger, 如果是 false, 浏览器将无法访问</span>
        <span class="token function">enable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">apis</span><span class="token punctuation">(</span><span class="token class-name">RequestHandlerSelectors</span><span class="token punctuation">.</span><span class="token function">basePackage</span><span class="token punctuation">(</span><span class="token string">"com.swagger.first.controller"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>测试</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211229172351726.png" alt="image-20211229172351726" loading="lazy"></p>
</li>
<li>
<p>调用<code v-pre>Docket</code>方法<code v-pre>docket(Environment environment)</code> 方法</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">docket</span><span class="token punctuation">(</span><span class="token class-name">Environment</span> environment<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 设置项目处于哪些环境时, 需要开启 swagger</span>
    <span class="token comment">// Profiles.of("dev", "test") 处于 dev test 环境 开启 swagger</span>
    <span class="token class-name">Profiles</span> of <span class="token operator">=</span> <span class="token class-name">Profiles</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">"dev"</span><span class="token punctuation">,</span> <span class="token string">"test"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 判断当前项目所处环境, 如果为 dev test 环境, 返回 true</span>
    <span class="token comment">// 通过 enable() 接收此参数判断并决定是否显示</span>
    <span class="token keyword">boolean</span> b <span class="token operator">=</span> environment<span class="token punctuation">.</span><span class="token function">acceptsProfiles</span><span class="token punctuation">(</span>of<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">SWAGGER_2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
            <span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
            <span class="token function">enable</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">.</span>
            <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
            <span class="token function">apis</span><span class="token punctuation">(</span><span class="token class-name">RequestHandlerSelectors</span><span class="token punctuation">.</span><span class="token function">basePackage</span><span class="token punctuation">(</span><span class="token string">"com.swagger.first.controller"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
            <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>为每一个测试环境写一个<code v-pre>yaml</code>文件</p>
<p><code v-pre>dev</code>环境<code v-pre>application-dev.yaml</code>：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8081</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>test</code>环境<code v-pre>application-test.yaml</code>：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8082</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>pro</code>环境<code v-pre>application-pro.yaml</code>：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>测试</p>
<p>在<code v-pre>application.yaml</code>中激活<code v-pre>dev</code>环境：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token comment"># 激活 dev 环境</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问<a href="http://localhost:8081/swagger-ui/index.html%EF%BC%8C%E5%8F%91%E7%8E%B0%E5%BC%80%E5%90%AF%E4%BA%86%60swagger%60%EF%BC%8C%E7%BB%93%E6%9E%9C%E5%A6%82%E4%B8%8B%EF%BC%9A" target="_blank" rel="noopener noreferrer">http://localhost:8081/swagger-ui/index.html，发现开启了`swagger`，结果如下：<ExternalLinkIcon/></a></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211230093534012.png" alt="image-20211230093534012" loading="lazy"></p>
<p>使用<code v-pre>pro</code>环境测试，发现<code v-pre>swagger</code>关闭：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211230093653564.png" alt="image-20211230093653564" loading="lazy"></p>
</li>
</ol>
<h3 id="配置api分组" tabindex="-1"><a class="header-anchor" href="#配置api分组" aria-hidden="true">#</a> 配置API分组</h3>
<p>如果多人协同开发一个项目，不同的开发者负责不同的接口，可以使用<code v-pre>Docket</code>中<code v-pre>groupName(groupName)</code>进行分组，创建多个<code v-pre>Docket</code>实例（每个实例代表一个分组）即可，流程如下：</p>
<ol>
<li>
<p>Swagger默认分组：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211230094031359.png" alt="image-20211230094031359" loading="lazy"></p>
</li>
<li>
<p>使用<code v-pre>groupName</code>修改分组名字：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">docket</span><span class="token punctuation">(</span><span class="token class-name">Environment</span> environment<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">// ...</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">SWAGGER_2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
            <span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
            <span class="token function">groupName</span><span class="token punctuation">(</span><span class="token string">"王宇"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
            <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211230094247348.png" alt="image-20211230094247348" loading="lazy"></p>
</li>
<li>
<p>创建多个分组，为每一个分组创建一个<code v-pre>Docket</code>实例即可：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">docket1</span><span class="token punctuation">(</span><span class="token class-name">Environment</span> environment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">SWAGGER_2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
            <span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
            <span class="token function">groupName</span><span class="token punctuation">(</span><span class="token string">"张宇"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">docket2</span><span class="token punctuation">(</span><span class="token class-name">Environment</span> environment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">SWAGGER_2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
            <span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
            <span class="token function">groupName</span><span class="token punctuation">(</span><span class="token string">"刘宇"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211230095335202.png" alt="image-20211230095335202" loading="lazy"></p>
</li>
</ol>
<h3 id="常用注解" tabindex="-1"><a class="header-anchor" href="#常用注解" aria-hidden="true">#</a> 常用注解</h3>
<p><code v-pre>Swagger</code>的所有注解定义在<code v-pre>io.swagger.annotations</code>包下，常用注解如下：</p>
<table>
<thead>
<tr>
<th style="text-align:left"><code v-pre>Swagger</code>注解</th>
<th>简单说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>@Api(tags = &quot;xxx模块说明&quot;)</code></td>
<td>作用在模块类上</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>@ApiOperation(&quot;xxx接口说明&quot;)</code></td>
<td>作用在接口方法上</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>@ApiModel(&quot;xxxPOJO说明&quot;)</code></td>
<td>作用在模型类上：如<code v-pre>VO</code>、<code v-pre>BO</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>@ApiModelProperty(value = &quot;xxx属性说明&quot;,hidden = true)</code></td>
<td>作用在类方法和属性上，<code v-pre>hidden</code>设置为<code v-pre>true</code>可以隐藏该属性</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>@ApiParam(&quot;xxx参数说明&quot;)</code></td>
<td>作用在参数、方法和字段上，类似<code v-pre>@ApiModelProperty</code></td>
</tr>
</tbody>
</table>
<p>测试如下：</p>
<ol>
<li>
<p>编写<code v-pre>User</code>实体类和接口<code v-pre>HelloController</code>相关方法（这里的接口表示一个<code v-pre>controller</code>类）</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/hello"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Hello, Swagger"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 只要接口中返回值中存在实体类, 就会被扫描到 Swagger 中</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/user"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">"Hello2控制接口"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/hello2"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello2</span><span class="token punctuation">(</span><span class="token annotation punctuation">@ApiParam</span><span class="token punctuation">(</span><span class="token string">"用户名"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> username<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"hello"</span> <span class="token operator">+</span> username<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Api</span>
<span class="token annotation punctuation">@ApiModel</span><span class="token punctuation">(</span><span class="token string">"用户实体类-User"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span><span class="token string">"用户名"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span><span class="token string">"密码"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span><span class="token string">"获取用户名"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> username<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUsername</span><span class="token punctuation">(</span> <span class="token annotation punctuation">@ApiParam</span><span class="token punctuation">(</span><span class="token string">"方法参数-用户名"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> username<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>username <span class="token operator">=</span> username<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> password<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>password <span class="token operator">=</span> password<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>测试</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211230111015060.png" alt="image-20211230111015060" loading="lazy"></p>
<p>在实体类<code v-pre>User</code>中，需要注意以下两点：</p>
<ul>
<li>
<p>并不是因为<code v-pre>@ApiModel</code>这个注解让实体显示在这里了，而是只要出现在接口方法的返回值上的实体都会显示在这里，而<code v-pre>@ApiModel</code>和<code v-pre>@ApiModelProperty</code>这两个注解只是为实体添加注释的</p>
</li>
<li>
<p><code v-pre>@ApiModelProperty</code>、<code v-pre>@ApiParam</code>不起作用，在<code v-pre>controller</code>接口中起作用，如下：</p>
</li>
</ul>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211230111041570.png" alt="image-20211230111041570" loading="lazy"></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211230111543667.png" alt="image-20211230111543667" loading="lazy"></p>
</li>
</ol>
<h2 id="任务" tabindex="-1"><a class="header-anchor" href="#任务" aria-hidden="true">#</a> 任务</h2>
<h3 id="异步任务" tabindex="-1"><a class="header-anchor" href="#异步任务" aria-hidden="true">#</a> 异步任务</h3>
<p>需求：在网站上发送邮件，后台会去发送邮件，此时前台会造成响应不动，造成响应不动，直到邮件发送完毕，响应才会成功，所以一般会采用多线程的方式去处理类似任务。创建新的项目<code v-pre>springboot-task-first</code>，实现异步任务，流程如下：</p>
<ol>
<li>
<p>编写<code v-pre>Service</code>类<code v-pre>AsyncService</code>，该类实现一个<code v-pre>hello()</code>方法，模拟进行处理数据，需要用时3秒</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AsyncService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"数据处理中...."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写<code v-pre>controller</code>类<code v-pre>AsyncController</code>，调用<code v-pre>Service</code>层<code v-pre>hello()</code>方法</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AsyncController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">AsyncService</span> asyncService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/hello"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        asyncService<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用方法, 等待 3 秒</span>
        <span class="token keyword">return</span> <span class="token string">"OK"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>测试</p>
<p>发现前端需要等待3秒才会相应，可以使用多线程的方式让用户先得到消息，之后后台线程对数据进行处理，通过<code v-pre>@Async</code>注解实现，代码如下：</p>
</li>
<li>
<p>在需要处理数据的代码上加上<code v-pre>@Async</code>注解，在主程序上添加一个注解<code v-pre>@EnableAsync</code> ，开启异步注解功能</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 异步方法</span>
<span class="token annotation punctuation">@Async</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"数据处理中...."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableAsync</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringbootTaskFirstApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SpringbootTaskFirstApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启测试，网页瞬间响应，后台代码在异步执行<code v-pre>hello()</code>方法</p>
</li>
</ol>
<h3 id="邮件任务" tabindex="-1"><a class="header-anchor" href="#邮件任务" aria-hidden="true">#</a> 邮件任务</h3>
<p><code v-pre>SpringBoot</code>发送邮件操作流程如下：</p>
<ol>
<li>
<p><code v-pre>pom</code>文件引入依赖：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-mail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>application.properties</code>配置文件：</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">spring.mail.username</span><span class="token punctuation">=</span><span class="token value attr-value">1013801973@qq.com</span>
<span class="token key attr-name">spring.mail.password</span><span class="token punctuation">=</span><span class="token value attr-value">bhhfkgvrzfuibaja</span>
<span class="token key attr-name">spring.mail.host</span><span class="token punctuation">=</span><span class="token value attr-value">smtp.qq.com</span>
<span class="token comment"># QQ 邮箱需要配置 ssl</span>
<span class="token key attr-name">spring.mail.properties.mail.smtp.ssl.enable</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>password</code>为自己邮箱开启<code v-pre>SMTP</code>服务的授权码，需要要个人邮箱开启服务</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211231094853736.png" alt="image-20211231094853736" loading="lazy"></p>
</li>
<li>
<p>测试</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">SpringbootTaskFirstApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">JavaMailSenderImpl</span> javaMailSender<span class="token punctuation">;</span>

    <span class="token comment">// 发送简单邮件</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SimpleMailMessage</span> mailMessage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleMailMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        mailMessage<span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span><span class="token string">"狂神，你好"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mailMessage<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">"谢谢你的狂神说Java系列课程"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        mailMessage<span class="token punctuation">.</span><span class="token function">setTo</span><span class="token punctuation">(</span><span class="token string">"1637317579@qq.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mailMessage<span class="token punctuation">.</span><span class="token function">setFrom</span><span class="token punctuation">(</span><span class="token string">"1013801973@qq.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        javaMailSender<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>mailMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 发送复杂邮件</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">MessagingException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建复杂邮件</span>
        <span class="token class-name">MimeMessage</span> mimeMessage <span class="token operator">=</span> javaMailSender<span class="token punctuation">.</span><span class="token function">createMimeMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 组装 true-表示是否支持多消息发送, 文本、附件、内联元素等...</span>
        <span class="token class-name">MimeMessageHelper</span> helper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MimeMessageHelper</span><span class="token punctuation">(</span>mimeMessage<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//正文 true-表示是否支持 html 内容文本发送</span>
        helper<span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span><span class="token string">"狂神，你好~plus"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        helper<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">"&lt;p style='color:red'>谢谢你的狂神说Java系列课程&lt;/p>"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//附件</span>
        helper<span class="token punctuation">.</span><span class="token function">addAttachment</span><span class="token punctuation">(</span><span class="token string">"1.jpg"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:\\Program Files\\workspace\\idea\\1.jpg"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        helper<span class="token punctuation">.</span><span class="token function">addAttachment</span><span class="token punctuation">(</span><span class="token string">"2.jpg"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:\\Program Files\\workspace\\idea\\2.jpg"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        helper<span class="token punctuation">.</span><span class="token function">setTo</span><span class="token punctuation">(</span><span class="token string">"1637317579@qq.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        helper<span class="token punctuation">.</span><span class="token function">setFrom</span><span class="token punctuation">(</span><span class="token string">"1013801973@qq.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        javaMailSender<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>mimeMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211231103203307.png" alt="image-20211231103203307" loading="lazy"></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211231103321612.png" alt="image-20211231103321612" loading="lazy"></p>
</li>
</ol>
<h3 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务" aria-hidden="true">#</a> 定时任务</h3>
<p>项目开发中经常需要执行一些定时任务，比如需要在每天凌晨分析一次前一天的日志信息，<code v-pre>Spring</code>提供了异步执行任务调度的方式来实现定时任务。需要使用到两个接口：</p>
<ul>
<li><code v-pre>TaskExecutor</code>接口：任务执行者</li>
<li><code v-pre>TaskScheduler</code>接口：任务调度者</li>
</ul>
<p>两个注解：</p>
<ul>
<li><code v-pre>@EnableScheduling</code>：开启定时功能</li>
<li><code v-pre>@Scheduled</code>：定义执行时间</li>
</ul>
<p><code v-pre>cron</code>表达式（定义定时任务执行规则，表达式生成器网址 <a href="http://www.bejson.com/othertools/cron/%EF%BC%89%EF%BC%9A" target="_blank" rel="noopener noreferrer">http://www.bejson.com/othertools/cron/）：<ExternalLinkIcon/></a></p>
<table>
<thead>
<tr>
<th style="text-align:center">字段</th>
<th style="text-align:center">允许值</th>
<th style="text-align:center">允许特殊字符</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">秒</td>
<td style="text-align:center">0-59</td>
<td style="text-align:center">, - * /</td>
</tr>
<tr>
<td style="text-align:center">分</td>
<td style="text-align:center">0-59</td>
<td style="text-align:center">, - * /</td>
</tr>
<tr>
<td style="text-align:center">小时</td>
<td style="text-align:center">0-23</td>
<td style="text-align:center">, - * /</td>
</tr>
<tr>
<td style="text-align:center">日期</td>
<td style="text-align:center">1-31</td>
<td style="text-align:center">, - * / ? L W C</td>
</tr>
<tr>
<td style="text-align:center">月份</td>
<td style="text-align:center">1-12</td>
<td style="text-align:center">, - * /</td>
</tr>
<tr>
<td style="text-align:center">星期</td>
<td style="text-align:center">0-1或SUN-SAT 0,7是SUN</td>
<td style="text-align:center">, - * / ? L W C</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">特殊字符</th>
<th style="text-align:center">代表含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">,</td>
<td style="text-align:center">枚举</td>
</tr>
<tr>
<td style="text-align:center">-</td>
<td style="text-align:center">区间</td>
</tr>
<tr>
<td style="text-align:center">*</td>
<td style="text-align:center">任意</td>
</tr>
<tr>
<td style="text-align:center">/</td>
<td style="text-align:center">步长</td>
</tr>
<tr>
<td style="text-align:center">?</td>
<td style="text-align:center">日/星期冲突匹配</td>
</tr>
<tr>
<td style="text-align:center">L</td>
<td style="text-align:center">最后</td>
</tr>
<tr>
<td style="text-align:center">W</td>
<td style="text-align:center">工作日</td>
</tr>
<tr>
<td style="text-align:center">C</td>
<td style="text-align:center">和calendar练习后计算过的值</td>
</tr>
<tr>
<td style="text-align:center">#</td>
<td style="text-align:center">星期，4#2 第二个星期三</td>
</tr>
</tbody>
</table>
<p>测试步骤如下：</p>
<ol>
<li>
<p>创建一个<code v-pre>ScheduledService</code>类，定义一个需要定时执行的<code v-pre>hello()</code>方法</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ScheduledService</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在一个特定的时间执行这个方法——Timer</span>
    <span class="token comment">// cron表达式</span>
    <span class="token comment">// 秒 分 时 日 月 周几</span>

    <span class="token comment">/*
        0 49 11 * * ?       每天的 11 点 49 分 00 秒执行
        0 0/5 11,12 * * ?   每天的 11 点和 12 点每个五分钟执行一次
        0 15 10 ? * 1-6     每个月的周一到周六的 10 点 15 分执行一次
        0/2 * * * * ?       每 2 秒执行一次
     */</span>
    <span class="token annotation punctuation">@Scheduled</span><span class="token punctuation">(</span>cron <span class="token operator">=</span> <span class="token string">"0/2 * * * * ?"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"hello,你被执行了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在主程序上增加<code v-pre>@EnableScheduling</code> 开启定时任务功能</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableAsync</span> <span class="token comment">//开启异步注解功能</span>
<span class="token annotation punctuation">@EnableScheduling</span> <span class="token comment">//开启基于注解的定时任务</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringbootTaskFirstApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SpringbootTaskFirstApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>测试，<code v-pre>hello()</code>方法每隔 2 秒被执行一次：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211231104900760.png" alt="image-20211231104900760" loading="lazy"></p>
</li>
<li>
<p>常用的表达式：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>（1）0/2 * * * * ?   表示每2秒 执行任务
（1）0 0/2 * * * ?   表示每2分钟 执行任务
（1）0 0 2 1 * ?   表示在每月的1日的凌晨2点调整任务
（2）0 15 10 ? * MON-FRI   表示周一到周五每天上午10:15执行作业
（3）0 15 10 ? 6L 2002-2006   表示2002-2006年的每个月的最后一个星期五上午10:15执行作
（4）0 0 10,14,16 * * ?   每天上午10点，下午2点，4点
（5）0 0/30 9-17 * * ?   朝九晚五工作时间内每半小时
（6）0 0 12 ? * WED   表示每个星期三中午12点
（7）0 0 12 * * ?   每天中午12点触发
（8）0 15 10 ? * *   每天上午10:15触发
（9）0 15 10 * * ?     每天上午10:15触发
（10）0 15 10 * * ?   每天上午10:15触发
（11）0 15 10 * * ? 2005   2005年的每天上午10:15触发
（12）0 * 14 * * ?     在每天下午2点到下午2:59期间的每1分钟触发
（13）0 0/5 14 * * ?   在每天下午2点到下午2:55期间的每5分钟触发
（14）0 0/5 14,18 * * ?     在每天下午2点到2:55期间和下午6点到6:55期间的每5分钟触发
（15）0 0-5 14 * * ?   在每天下午2点到下午2:05期间的每1分钟触发
（16）0 10,44 14 ? 3 WED   每年三月的星期三的下午2:10和2:44触发
（17）0 15 10 ? * MON-FRI   周一至周五的上午10:15触发
（18）0 15 10 15 * ?   每月15日上午10:15触发
（19）0 15 10 L * ?   每月最后一日的上午10:15触发
（20）0 15 10 ? * 6L   每月的最后一个星期五上午10:15触发
（21）0 15 10 ? * 6L 2002-2005   2002年至2005年的每月的最后一个星期五上午10:15触发
（22）0 15 10 ? * 6#3   每月的第三个星期五上午10:15触发
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="分布式入门" tabindex="-1"><a class="header-anchor" href="#分布式入门" aria-hidden="true">#</a> 分布式入门</h2>
<h3 id="分布式概述" tabindex="-1"><a class="header-anchor" href="#分布式概述" aria-hidden="true">#</a> 分布式概述</h3>
<p>分布式系统是由一组通过网络进行通信、为了完成共同的任务而协调工作的计算机节点组成的系统。分布式系统的出现是为了用廉价的、普通的机器完成单个计算机无法完成的计算、存储任务。其目的是<strong>利用更多的机器，处理更多的数据</strong>。</p>
<p>首先需要明确的是，只有当单个节点的处理能力无法满足日益增长的计算、存储任务的时候，且硬件的提升（加内存、加磁盘、使用更好的<code v-pre>CPU</code>）高昂到得不偿失的时候，应用程序也不能进一步优化的时候，我们才需要考虑分布式系统。因为，分布式系统要解决的问题本身就是和单机系统一样的，而由于分布式系统多节点、通过网络通信的拓扑结构，会引入很多单机系统没有的问题，为了解决这些问题又会引入更多的机制、协议，带来更多的问题。</p>
<p><strong>分布式与集群的区别</strong>：</p>
<ul>
<li>分布式：不同的业务模块部署在不同的服务器上或者同一个业务模块分拆多个子业务，部署在不同的服务器上，解决高并发的问题</li>
<li>集群：同一个业务部署在多台机器上，提高系统可用性</li>
</ul>
<h3 id="cap理论" tabindex="-1"><a class="header-anchor" href="#cap理论" aria-hidden="true">#</a> CAP理论</h3>
<p><strong>概述：</strong></p>
<p><code v-pre>CAP</code>理论是说对于分布式数据存储，最多只能同时满足一致性（<code v-pre>C</code>，<code v-pre>Consistency</code>）、可用性（<code v-pre>A</code>， <code v-pre>Availability</code>）、分区容错性（P，<code v-pre>Partition Tolerance</code>）中的两者。</p>
<ul>
<li>一致性：是指对于每一次读操作，要么都能够读到最新写入的数据，要么错误</li>
<li>可用性：是指对于每一次请求，都能够得到一个及时的、非错的响应，但是不保证请求的结果是基于最新写入的数据</li>
<li>分区容错性：是指由于节点之间的网络问题，即使一些消息对包或者延迟，整个系统能继续提供服务（提供一致性或者可用性）</li>
</ul>
<p><strong>适用场景：</strong></p>
<blockquote>
<p>在分布式系统中，围绕着<code v-pre>CAP</code>理论，主要关注点就是复制，一致性，容错性</p>
</blockquote>
<ol>
<li>
<p>复制：保证数据高可用性</p>
<p>为了保证系统的高可用和高可靠性，通过复制的方式，让数据在系统中存储多个副本。以服务实例多副本为例，当一个服务发生异常时，客户端就直接调用其他正常的副本。</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106085408294.png" alt="image-20220106085408294" loading="lazy"></p>
</li>
<li>
<p>一致性</p>
<p>在数据的复制中，由于存在多个数据副本，就会存在主数据与副本数据一致性的问题。在同一份数据的副本中，一般有一个副本为主副本，其他的备副本。在数据的复制过程中，复制的方式分为两种分别如下：</p>
<ul>
<li>强同步复制，数据的写操作需要同步到主副本和所有的备副本，并且全部写入成功后，才返回成功状态。这样，当系统出现异常时，切换到其他任何一个备份副本时，数据是一致的。但是，强同步复制性能不好，而且可用性比较差。如果，在复制过程中，如果某个备份节点出现故障，这时，会阻塞数据的正常写服务。</li>
<li>异步复制，当数据写入操作成功后，当数据成功复制到主副本时，甚至还没复制时，写操作就返回成功状态。这样，异步复制的性别比较好，但是，当主备出现故障时可能出现数据丢失</li>
</ul>
</li>
<li>
<p>容错性</p>
<p>分布式系统中，集群的规模越大发生错误的概率就也大。一般，分布式系统发生异常时，都能够自动容错，保证系统的高可用</p>
</li>
</ol>
<h3 id="rpc" tabindex="-1"><a class="header-anchor" href="#rpc" aria-hidden="true">#</a> RPC</h3>
<p><code v-pre>RPC</code>（<code v-pre>Remote Procedure  Call</code>）是指远程过程调用，是一种进程间通信方式，他是一种技术的思想，而不是规范。它允许程序调用另一个地址空间（通常是共享网络的另一台机器上）的过程或函数，而不用程序员显式编码这个远程调用的细节。即程序员无论是调用本地的还是远程的函数，本质上编写的调用代码基本相同。</p>
<p>也就是说两台服务器A，B，一个应用部署在A服务器上，想要调用B服务器上应用提供的函数/方法，由于不在一个内存空间，不能直接调用，需要通过网络来表达调用的语义和传达调用的数据。为什么要用RPC呢？就是无法在一个进程内，甚至一个计算机内通过本地调用的方式完成的需求，比如不同的系统间的通讯，甚至不同的组织间的通讯，由于计算能力需要横向扩展，需要在多台机器组成的集群上部署应用。RPC就是要像调用本地的函数一样去调远程函数。</p>
<p><strong>RPC基本原理：</strong></p>
<p>核心模块：通讯，序列化</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106094701589.png" alt="image-20220106094701589" loading="lazy"></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106102044853.png" alt="image-20220106102044853" loading="lazy"></p>
<p>参考文章：</p>
<p><a href="https://www.jianshu.com/p/2accc2840a1b" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/2accc2840a1b<ExternalLinkIcon/></a></p>
<p><a href="https://www.jianshu.com/p/b0343bfd216e" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/b0343bfd216e<ExternalLinkIcon/></a></p>
<h3 id="dubbo概述" tabindex="-1"><a class="header-anchor" href="#dubbo概述" aria-hidden="true">#</a> Dubbo概述</h3>
<h4 id="dubbo产生背景" tabindex="-1"><a class="header-anchor" href="#dubbo产生背景" aria-hidden="true">#</a> Dubbo产生背景</h4>
<p><code v-pre>Dubbo</code>官方文档：<a href="https://dubbo.apache.org/zh/" target="_blank" rel="noopener noreferrer">https://dubbo.apache.org/zh/<ExternalLinkIcon/></a></p>
<p>互联网的发展过程中，随着流量的增大，常规的垂直应用架构已无法应对应用场景，架构就发生了演变：</p>
<ul>
<li>单一的应用架构：网站流量很小，只需一个应用，将所有功能都部署在一起</li>
<li>应用和数据库单独部署</li>
<li>应用和数据库集群部署</li>
<li>数据库压力变大，读写分离</li>
<li>使用缓存技术加快速度</li>
<li>数据库分库分表</li>
<li>应用分为不同的类型拆分</li>
</ul>
<p>当应用架构发展到此阶段时，应用与应用之间的关系会变得十分复杂，随之出现以下几个问题：</p>
<ul>
<li>当服务越来越多时，服务 <code v-pre>URL</code> 配置管理变得非常困难，<code v-pre>F5</code> 硬件负载均衡器的单点压力也越来越大</li>
<li>当进一步发展，服务间依赖关系变得错踪复杂，甚至分不清哪个应用要在哪个应用之前启动，架构师都不能完整的描述应用的架构关系</li>
<li>接着，服务的调用量越来越大，服务的容量问题就暴露出来，这个服务需要多少机器支撑？什么时候该加机器？</li>
</ul>
<p>为了解决上述由于架构的演变所产生的问题几个问题，于是，<code v-pre>Dubbo</code> 随之产生。</p>
<h4 id="dubbo技术架构" tabindex="-1"><a class="header-anchor" href="#dubbo技术架构" aria-hidden="true">#</a> Dubbo技术架构</h4>
<p><code v-pre>Dubbo</code>服务架构如下图所示：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106091629679.png" alt="image-20220106091629679" loading="lazy"></p>
<p><strong>节点角色说明:</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">节点</th>
<th style="text-align:left">角色说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Provider</td>
<td style="text-align:left"><strong>暴露服务的服务提供方</strong>，服务提供者在启动时，向注册中心注册自己提供的服务</td>
</tr>
<tr>
<td style="text-align:left">Consumer</td>
<td style="text-align:left"><strong>调用远程服务的服务消费方</strong>，服务消费者在启动时，向注册中心订阅自己所需的服务，服务消费者，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用</td>
</tr>
<tr>
<td style="text-align:left">Registry</td>
<td style="text-align:left"><strong>服务注册与发现的注册中心</strong>，注册中心返回服务提供者地址列表给消费者，如果有变更，注册中心将基于长连接推送变更数据给消费者</td>
</tr>
<tr>
<td style="text-align:left">Monitor</td>
<td style="text-align:left">统计服务的调用次数和调用时间的监控中心</td>
</tr>
<tr>
<td style="text-align:left">Container</td>
<td style="text-align:left">服务运行容器</td>
</tr>
</tbody>
</table>
<p>类似<strong>生产者-消费者</strong>模型，在这种模型上，加上了<strong>注册中心和监控中心</strong>，用于管理提供方提供的<code v-pre>URL</code>，以及管理整个过程，<strong>流程如下</strong>：</p>
<ul>
<li>启动容器，加载，运行服务提供者</li>
<li>服务提供者在启动时，在注册中心<strong>发布注册</strong>自己提供的服务</li>
<li>服务消费者在启动时，在注册中心<strong>订阅</strong>自己所需的服务</li>
<li>注册中心返回服务提供者地址列表给消费者，如果有变更，注册中心将基于长连接推送变更数据给消费者</li>
<li>服务消费者，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用</li>
<li>服务消费者和提供者，在内存中累计调用次数和调用时间，定时每分钟发送一次统计数据到监控中心</li>
</ul>
<p><strong><code v-pre>Zookeeper</code>是<code v-pre>Dubbo</code>推荐的注册中心</strong></p>
<h3 id="zookeeper下载与安装" tabindex="-1"><a class="header-anchor" href="#zookeeper下载与安装" aria-hidden="true">#</a> Zookeeper下载与安装</h3>
<p><code v-pre>Zookeeper</code>是<code v-pre>Dubbo</code>推荐的注册中心，<code v-pre>Windows</code>下安装流程如下：</p>
<ol>
<li>
<p>官网：<a href="https://zookeeper.apache.org/releases.html" target="_blank" rel="noopener noreferrer">https://zookeeper.apache.org/releases.html<ExternalLinkIcon/></a>下载<code v-pre>bin.tar.gz</code>压缩包解压，经过编译的可以直接解压使用</p>
</li>
<li>
<p>进入解压目录conf文件夹，复制<code v-pre>zoo_sample.cfg</code>副本并重新命名为<code v-pre>zoo.cfg</code></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106145208296.png" alt="image-20220106145208296" loading="lazy"></p>
</li>
<li>
<p>以管理员身份运行<code v-pre>/bin/zkServer.cmd</code></p>
</li>
</ol>
<blockquote>
<p>初次运行可能报错，在/bin文件夹下打开<code v-pre>zkServer.cmd</code>末尾添加<code v-pre>pause</code>启动，观察报错原因并处理</p>
</blockquote>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106145535342.png" alt="image-20220106145535342" loading="lazy"></p>
<blockquote>
<p>添加<code v-pre>pause</code>指令仍然闪退，可能由于<code v-pre>JDK</code>版本过低，建议下载低版本<code v-pre>Zookeeper</code>，实测JDK1.8 <code v-pre>Zookeeper 3.5.9</code>可用</p>
</blockquote>
<ol start="4">
<li>
<p>修改<code v-pre>zoo.cfg</code>配置文件</p>
<p><code v-pre>zookeeper 3.5</code>之后有个内嵌的管理控制台是通过<code v-pre>Jetty</code>启动，会占用 8080 端口，需要修改配置文件：</p>
<div class="language-apl line-numbers-mode" data-ext="apl"><pre v-pre class="language-apl"><code>admin<span class="token dyadic-operator operator">.</span>serverPort<span class="token function">=</span><span class="token number">8888</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220105113449621.png" alt="image-20220105113449621" loading="lazy"><code v-pre>zoo.cfg</code>配置文件分析：</p>
<div class="language-apl line-numbers-mode" data-ext="apl"><pre v-pre class="language-apl"><code>tickTime<span class="token function">=</span><span class="token number">2000</span>  <span class="token comment"># Zookeeper 中最小的时间单位长度(ms)</span>

initLimit<span class="token function">=</span><span class="token number">10</span>  <span class="token comment"># follower 节点启动后与 leader 节点完成数据同步的时间</span>

syncLimit<span class="token function">=</span><span class="token number">5</span> <span class="token comment"># leader 节点和 follower 节点进行心跳检测的最大延时时间</span>

dataDir<span class="token function">=</span><span class="token monadic-operator operator">/</span>tmp<span class="token monadic-operator operator">/</span>zookeeper  <span class="token comment"># 表示 Zookeeper 服务器存储快照文件的目录</span>

dataLogDir <span class="token comment"># 表示配置 Zookeeper事务日志的存储路径, 默认指定在 dataDir 目录下 </span>

clientPort <span class="token comment"># 表示客户端和服务端建立连接的端口号： 2181</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220105102005854.png" alt="image-20220105102005854" loading="lazy"></p>
</li>
<li>
<p>启动cli.cmd测试</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220105101911556.png" alt="image-20220105101911556" loading="lazy"></p>
</li>
</ol>
<h3 id="安装dubbo-admin" tabindex="-1"><a class="header-anchor" href="#安装dubbo-admin" aria-hidden="true">#</a> 安装dubbo-admin</h3>
<p><code v-pre>dubbo-admin</code>是<code v-pre>Dubbo RPC</code>框架的管理端，可以对注册的服务(<code v-pre>provider</code>)和服务调用方(<code v-pre>comsumer</code>)进行服务治理，包括路由、监控、配置等功能，<strong>可以对注册到<code v-pre>zookeeper</code>注册中心的服务或服务消费者进行管理</strong>。安装流程如下：</p>
<ol>
<li>
<p>下载解压，<code v-pre>dubbo-admin</code>安装地址：<a href="https://github.com/apache/dubbo-admin/tree/master" target="_blank" rel="noopener noreferrer">https://github.com/apache/dubbo-admin/tree/master<ExternalLinkIcon/></a></p>
<blockquote>
<p>旧版本下载<code v-pre>git</code>命令： <code v-pre>git clone -b master.0.2.0 https://github.com/apache/dubbo-admin.git</code></p>
</blockquote>
</li>
<li>
<p>修改 <code v-pre>dubbo-admin\src\main\resources \application.properties</code> 指定<code v-pre>Zookeeper</code>地址</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">7001</span>
<span class="token key attr-name">spring.velocity.cache</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">spring.velocity.charset</span><span class="token punctuation">=</span><span class="token value attr-value">UTF-8</span>
<span class="token key attr-name">spring.velocity.layout-url</span><span class="token punctuation">=</span><span class="token value attr-value">/templates/default.vm</span>
<span class="token key attr-name">spring.messages.fallback-to-system-locale</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">spring.messages.basename</span><span class="token punctuation">=</span><span class="token value attr-value">i18n/message</span>
<span class="token key attr-name">spring.root.password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">spring.guest.password</span><span class="token punctuation">=</span><span class="token value attr-value">guest</span>

<span class="token key attr-name">dubbo.registry.address</span><span class="token punctuation">=</span><span class="token value attr-value">zookeeper://127.0.0.1:2181</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106152516905.png" alt="image-20220106152516905" loading="lazy"></p>
<blockquote>
<p>旧版本<code v-pre>dubbo-admin</code>启动端口号为7001，新版本为8080，新版本同时需要修改启动端口号</p>
</blockquote>
</li>
<li>
<p>在项目目录下窗口打包<code v-pre>dubbo-admin</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>mvn clean package -Dmaven.test.skip=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106153130974.png" alt="image-20220106153130974" loading="lazy"></p>
</li>
<li>
<p>打开<code v-pre>Zookeeper</code>服务，执行<code v-pre>dubbo-admin\target</code> 下的<code v-pre>dubbo-admin-0.0.1-SNAPSHOT.jar</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>java -jar dubbo-admin-0.0.1-SNAPSHOT.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>测试，访问<a href="http://localhost:7001/" target="_blank" rel="noopener noreferrer">http://localhost:7001/<ExternalLinkIcon/></a>，输入登录账户和密码，默认都为root</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106153509959.png" alt="image-20220106153509959" loading="lazy"></p>
</li>
</ol>
<h3 id="springboot整合dubbo-zookeeper" tabindex="-1"><a class="header-anchor" href="#springboot整合dubbo-zookeeper" aria-hidden="true">#</a> SpringBoot整合Dubbo+Zookeeper</h3>
<p><code v-pre>SpringBoot</code>整合<code v-pre>Dubbo</code>+<code v-pre>Zookeeper</code>流程如下：</p>
<ol>
<li>
<p><code v-pre>idea</code>创建一个空项目<code v-pre>dubbo-zookeeper</code>，空项目中分别创建两个<code v-pre>Mudules</code> -<code v-pre>Springboot</code>应用：<code v-pre>provider-server</code>、<code v-pre>consumer-server</code>：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106153838158.png" alt="image-20220106153838158" loading="lazy"></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106154117713.png" alt="image-20220106154117713" loading="lazy"></p>
</li>
<li>
<p>编写服务提供者代码并测试，移步<a href="#_link_2nd">服务提供者</a></p>
</li>
<li>
<p>编写服务消费者代码并测试，移步<a href="#_link_3rd">服务消费者</a></p>
</li>
</ol>
<h4 id="服务提供者" tabindex="-1"><a class="header-anchor" href="#服务提供者" aria-hidden="true">#</a> <a id=_link_2nd>服务提供者</a></h4>
<p><strong>将服务提供者注册到注册中心，需要整合Dubbo和Zookeeper包</strong>，服务提供者代码实现如下（举例卖票服务）：</p>
<ol>
<li>
<p>编写接口及其实现类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">TicketService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Component</span>  
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TicketServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">TicketService</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"服务商提供卖票服务"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>导入相关依赖包：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- Dubbo整合SpringBoot依赖包 dubbo-springboot--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.dubbo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dubbo-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.7.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- Zookeeper服务端依赖包 zkclient--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.github.sgroschupf<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>zkclient<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>0.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 引入新版Zookeeper依赖包时, 需要解决日志冲突, 剔除日志依赖 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.curator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>curator-framework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.12.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.curator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>curator-recipes<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.12.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.zookeeper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>zookeeper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.4.14<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--排除这个slf4j-log4j12--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.slf4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>slf4j-log4j12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>配置文件<code v-pre>application.properties</code>中配置<code v-pre>Dubbo</code>相关属性</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token comment"># SpringBoot 启动端口</span>
<span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">8081</span>

<span class="token comment"># 当前应用名字</span>
<span class="token key attr-name">dubbo.application.name</span><span class="token punctuation">=</span><span class="token value attr-value">provider-server</span>
<span class="token comment"># 注册中心地址</span>
<span class="token key attr-name">dubbo.registry.address</span><span class="token punctuation">=</span><span class="token value attr-value">zookeeper://127.0.0.1:2181</span>
<span class="token comment"># 扫描指定包下服务</span>
<span class="token key attr-name">dubbo.scan.base-packages</span><span class="token punctuation">=</span><span class="token value attr-value">com.wyj.service</span>

<span class="token comment"># dubbo 默认端口是20880,设置端口为-1表示 Dubbo 自动扫描并使用可用端口(从20880开始递增),避免端口冲突的问题</span>
<span class="token key attr-name">dubbo.protocol.port</span><span class="token punctuation">=</span><span class="token value attr-value">-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>对服务实现类<code v-pre>TicketServiceImpl</code>配置服务注解<code v-pre>@Service</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Service</span>    <span class="token comment">// 被注解的类可以被扫描到, 在项目一启动就自动注册到注册中心</span>
<span class="token annotation punctuation">@Component</span>  <span class="token comment">// 使用 Dubbo 后尽量不要用 Service 注解</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TicketServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">TicketService</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"服务商提供卖票服务"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>@Service</code> 是<code v-pre>org.apache.dubbo.config.annotation.Service</code>下的注解，启动应用，<strong>Dubbo就会扫描指定的包下带有@Service注解的服务，将它发布在指定的注册中心中</strong></p>
</blockquote>
</li>
<li>
<p>启动测试，在<code v-pre>dubbo-admin</code>控制台下观察注册信息：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220107093712151.png" alt="image-20220107093712151" loading="lazy"></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220107093754881.png" alt="image-20220107093754881" loading="lazy"></p>
</li>
</ol>
<h4 id="服务消费者" tabindex="-1"><a class="header-anchor" href="#服务消费者" aria-hidden="true">#</a> <a id=_link_3rd>服务消费者</a></h4>
<p>启动服务消费者应用，需要去注册中心订阅服务，代码如下：</p>
<ol>
<li>
<p>导入相关依赖，和服务提供者<code v-pre>provider-server</code>模块依赖包一样</p>
</li>
<li>
<p>配置文件<code v-pre>application.properties</code>中配置<code v-pre>Dubbo</code>相关属性</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token comment"># SpringBoot 启动端口</span>
<span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">8082</span>

<span class="token comment"># 当前应用名</span>
<span class="token key attr-name">dubbo.application.name</span><span class="token punctuation">=</span><span class="token value attr-value">consumer-server</span>
<span class="token comment"># 注册中心地址</span>
<span class="token key attr-name">dubbo.registry.address</span><span class="token punctuation">=</span><span class="token value attr-value">zookeeper://127.0.0.1:2181</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>将需要订阅的服务的接口<code v-pre>TicketService</code>拿过来，要求路径、名字和服务提供者定义的一样</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220107111413396.png" alt="image-20220107111413396" loading="lazy"></p>
<blockquote>
<p>如果不使用<code v-pre>Dubbo</code>+<code v-pre>Zookeeper</code>，实现以上功能需要将服务提供者的接口打包，然后用<code v-pre>pom</code>文件导入，这里只需要通过注册中心把服务提供者的接口拿过来</p>
</blockquote>
</li>
<li>
<p>编写消费者代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 订阅注册中心的服务, 使用买票的服务</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

    <span class="token comment">// 想拿到 provider-server 提供票的服务 getTicket(), 要去注册中心拿到服务</span>
    <span class="token comment">// 使用 @Reference 注解订阅注册中心的服务</span>
    <span class="token annotation punctuation">@Reference</span>
    <span class="token class-name">TicketService</span> ticket<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buyTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> tic <span class="token operator">=</span> ticket<span class="token punctuation">.</span><span class="token function">getTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"到注册中心"</span> <span class="token operator">+</span> tic<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>@Service</code> 是<code v-pre>org.springframework.stereotype.Service</code>下的注解</p>
</blockquote>
</li>
<li>
<p>启动服务提供者<code v-pre>Module</code></p>
</li>
<li>
<p>编写服务消费者测试代码，启动服务消费者<code v-pre>Module</code>，测试</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">ConsumerServerApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        userService<span class="token punctuation">.</span><span class="token function">buyTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p>
<img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220108125858662.png" align='left' alt="image-20220108125858662" style="zoom:70%;" />
<p>启动<code v-pre>dubbo-admin</code>观察情况：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220108131207319.png" alt="image-20220108131207319" loading="lazy"></p>
</li>
</ol>
<h2 id="常见springboot项目错误" tabindex="-1"><a class="header-anchor" href="#常见springboot项目错误" aria-hidden="true">#</a> 常见SpringBoot项目错误</h2>
<h3 id="maven打包异常" tabindex="-1"><a class="header-anchor" href="#maven打包异常" aria-hidden="true">#</a> maven打包异常</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Failed to execute goal org.apache.maven.plugins:maven-surefire-plugin:2.22.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>pom</code>文件指定<code v-pre>skipTests</code>为<code v-pre>true</code>，跳过单测：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.maven.plugins<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>maven-surefire-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.22.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>skipTests</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>skipTests</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.maven.plugins<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>maven-resources-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


