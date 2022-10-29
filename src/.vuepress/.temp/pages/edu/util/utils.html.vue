<template><div><h2 id="lombok使用" tabindex="-1"><a class="header-anchor" href="#lombok使用" aria-hidden="true">#</a> LomBok使用</h2>
<div class="custom-container info">
<p class="custom-container-title">Info</p>
<p>Lombok 可以通过注解的方式，在编译时自动为属性生成构造器， getter/setter、equals、hashcode、toString 方法</p>
</div>
<p>Lombok使用方法如下：</p>
<ol>
<li>
<p>idea安装 Lombok 插件</p>
<p><img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203171531277.png" alt="image-20220317153101187" loading="lazy"></p>
</li>
<li>
<p>项目中引入 Lombok 插件依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在实体类上使用相关注解，部分注解含义如下：</p>
<table>
<thead>
<tr>
<th>注解</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>@Data</td>
<td>生成所有字段的 getter、toString()、hashCode()、equals()、所有非 final 字段的 setter、构造器，相当于设置了 @Getter @Setter @RequiredArgsConstructor @ToString @EqualsAndHashCode</td>
</tr>
<tr>
<td>@AllArgsConstructor</td>
<td>生成包含所有字段的构造器</td>
</tr>
<tr>
<td>@NoArgsConstructor</td>
<td>生成无参数构造器</td>
</tr>
<tr>
<td>@EqualsAndHashCode</td>
<td>生成 hashCode()、equals()</td>
</tr>
<tr>
<td>@Getter</td>
<td>生成 getter、写在类上会生成该类下所有字段的 getter。写在某个字段上就作用与该字段</td>
</tr>
<tr>
<td>@NonNull</td>
<td>空检查</td>
</tr>
<tr>
<td>@Setter</td>
<td>生成Setter</td>
</tr>
<tr>
<td>@RequiredArgsConstructor</td>
<td>生成必须初始化字段的构造器，比如带final、@NonNull</td>
</tr>
</tbody>
</table>
</li>
</ol>
<p>参考文章：</p>
<ul>
<li><a href="https://segmentfault.com/a/1190000016111422" target="_blank" rel="noopener noreferrer">Lombok注解笔记<ExternalLinkIcon/></a></li>
</ul>
<h2 id="mybatis-plus代码生成器" tabindex="-1"><a class="header-anchor" href="#mybatis-plus代码生成器" aria-hidden="true">#</a> Mybatis-Plus代码生成器</h2>
<p>参考<a href="http://localhost:3000/#/codinglife/MybatisPlus?id=%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90%E5%99%A8" target="_blank" rel="noopener noreferrer">MybatisPlus—Mybatis开了外挂？再也不用手写Mapper了!<ExternalLinkIcon/></a></p>
<h2 id="统一返回结果" tabindex="-1"><a class="header-anchor" href="#统一返回结果" aria-hidden="true">#</a> 统一返回结果</h2>
<p>在项目开发中，我们往往会将响应的数据封装成 json 数据返回，并将所有的数据格式进行统一，使得前端对数据的操作更加简单容易，统一返回的数据格式可以根据实际情况来自定义，一般包括状态码，返回消息和数据三部分。</p>
<p>新建 SpringBoot 项目<code v-pre>springboot-commonresult</code>, 项目环境：SpringBoot 2.6.4，JDK17，统一返回结果代码演示如下：</p>
<ol>
<li>
<p><a id="_link_result1">准备相关测试数据</a>，数据库表 User</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">user</span>
<span class="token punctuation">(</span>
 id <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'主键ID'</span><span class="token punctuation">,</span>
 name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'姓名'</span><span class="token punctuation">,</span>
 age <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'年龄'</span><span class="token punctuation">,</span>
 email <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'邮箱'</span><span class="token punctuation">,</span>
 <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token keyword">user</span> <span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> email<span class="token punctuation">)</span> <span class="token keyword">VALUES</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'codeLifeVV'</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">'test1@baomidou.com'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">'test2@baomidou.com'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'Tom'</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token string">'test3@baomidou.com'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">'Sandy'</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token string">'test4@baomidou.com'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">'Billie'</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token string">'test5@baomidou.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><a id="_link_result2">编写项目所需代码</a>：</p>
<p><strong>pom.xml 所需依赖</strong>：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--Lombok--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--SpringBoot Web 依赖--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--MybatisPlus--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis-plus-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.5.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--mysql--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>1、我们使用了Mybatis-Plus来简化开发，Mybatis-Plus学习参考基础知识篇Mybatis—Plus—&gt;代码生成器</p>
<p>2、Lombok学习参考上述文章： LomBok 使用</p>
</div>
<p><strong>yaml.xml</strong>：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token comment"># 配置数据源</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/mybatis_plus<span class="token punctuation">?</span>serverTimezone=UTC<span class="token important">&amp;useUnicode=true&amp;characterEncoding=utf-</span><span class="token number">8</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">1234</span>

<span class="token comment"># mybatis-plus 日志</span>
<span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token key atrule">configuration</span><span class="token punctuation">:</span>
    <span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实体类User</strong>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>codinglife<span class="token punctuation">.</span>entity</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">NoArgsConstructor</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>mapper接口</strong>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Service接口及实现类</strong>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token keyword">extends</span> <span class="token class-name">IService</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserMapper</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>controller类</strong>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/user"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"listAll"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">CommonResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">"items"</span><span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@DeleteMapping</span><span class="token punctuation">(</span><span class="token string">"delete/{id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span> <span class="token function">deleteTeacherById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">boolean</span> result <span class="token operator">=</span>  userService<span class="token punctuation">.</span><span class="token function">removeById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">CommonResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">CommonResult</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>类<code v-pre>CommonResult</code>为统一返回结果处理类，步骤 3 会创建</p>
</div>
</li>
<li>
<p>编写统一返回结果处理类代码<code v-pre>ResultCode.java</code>和<code v-pre>CommonResult.java</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Getter</span>
<span class="token annotation punctuation">@AllArgsConstructor</span><span class="token punctuation">(</span>access <span class="token operator">=</span> <span class="token class-name">AccessLevel</span><span class="token punctuation">.</span><span class="token constant">PRIVATE</span><span class="token punctuation">)</span> <span class="token comment">// Lombok 所有参数构造器且私有</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">ResultCode</span> <span class="token punctuation">{</span>
    <span class="token function">SUCCESS</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token string">"操作成功"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">ERROR</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token string">"操作失败"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">VALIDATE_FAILED</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token number">404</span><span class="token punctuation">,</span> <span class="token string">"参数检验失败"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">UNAUTHORIZED</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token number">401</span><span class="token punctuation">,</span> <span class="token string">"暂未登录或token已经过期"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">FORBIDDEN</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token number">403</span><span class="token punctuation">,</span> <span class="token string">"没有相关权限"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">boolean</span> success<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> code<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> message<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CommonResult</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 是否成功
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> success<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 状态码
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> code<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 提示信息
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> message<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回数据
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span>  <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 成功返回结果
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">CommonResult</span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">CommonResult</span><span class="token punctuation">.</span><span class="token function">setCommonResult</span><span class="token punctuation">(</span><span class="token class-name">ResultCode</span><span class="token punctuation">.</span><span class="token constant">SUCCESS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 失败返回结果
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">CommonResult</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">CommonResult</span><span class="token punctuation">.</span><span class="token function">setCommonResult</span><span class="token punctuation">(</span><span class="token class-name">ResultCode</span><span class="token punctuation">.</span><span class="token constant">ERROR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 参数验证失败返回结果
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">CommonResult</span> <span class="token function">validateFailed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">CommonResult</span><span class="token punctuation">.</span><span class="token function">setCommonResult</span><span class="token punctuation">(</span><span class="token class-name">ResultCode</span><span class="token punctuation">.</span><span class="token constant">VALIDATE_FAILED</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 统一设置返回结果
     * <span class="token keyword">@param</span> <span class="token parameter">resultCode</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">CommonResult</span> <span class="token function">setCommonResult</span><span class="token punctuation">(</span><span class="token class-name">ResultCode</span> resultCode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">CommonResult</span> commonResult <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        commonResult<span class="token punctuation">.</span><span class="token function">setSuccess</span><span class="token punctuation">(</span>resultCode<span class="token punctuation">.</span><span class="token function">isSuccess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        commonResult<span class="token punctuation">.</span><span class="token function">setCode</span><span class="token punctuation">(</span>resultCode<span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        commonResult<span class="token punctuation">.</span><span class="token function">setMessage</span><span class="token punctuation">(</span>resultCode<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> commonResult<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 统一设置返回结果, 修改提示信息 message
     * <span class="token keyword">@param</span> <span class="token parameter">resultCode</span>
     * <span class="token keyword">@param</span> <span class="token parameter">message</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">CommonResult</span> <span class="token function">setCommonResult</span><span class="token punctuation">(</span><span class="token class-name">ResultCode</span> resultCode<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">CommonResult</span> commonResult <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        commonResult<span class="token punctuation">.</span><span class="token function">setSuccess</span><span class="token punctuation">(</span>resultCode<span class="token punctuation">.</span><span class="token function">isSuccess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        commonResult<span class="token punctuation">.</span><span class="token function">setCode</span><span class="token punctuation">(</span>resultCode<span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        commonResult<span class="token punctuation">.</span><span class="token function">setMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> commonResult<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回数据处理
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 返回数据 key 值
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 返回数据 value 值
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span>  <span class="token class-name">CommonResult</span> <span class="token function">data</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回数据处理
     * <span class="token keyword">@param</span> <span class="token parameter">map</span> 返回数据
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span> <span class="token function">data</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>测试 controller 类<code v-pre>UserController</code>方法<code v-pre>list()</code>和<code v-pre>deleteTeacherById()</code></p>
<p><code v-pre>list()</code>方法测试结果：</p>
<img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203051119944.png" alt="image-20220305105457979" width="600" />
<p><code v-pre>deleteTeacherById()</code>方法测试结果：</p>
<img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203051121081.png" alt="image-20220305105239314" width="600"  />
<p>可以看到最终请求的返回内容包含了统一返回结果处理类<code v-pre>CommonResult</code>封装的四个属性：<code v-pre>success</code>、<code v-pre>code</code>、<code v-pre>message</code>和<code v-pre>data</code></p>
</li>
</ol>
<h2 id="全局异常处理" tabindex="-1"><a class="header-anchor" href="#全局异常处理" aria-hidden="true">#</a> 全局异常处理</h2>
<p>我们在 SpringBoot 项目中，往往会写许多 Controler 接口类，由于 Controller 类接口中传递的参数各不相同，出现错误时抛出的异常以及异常的处理方式也不尽相同。SpringBoot 中与参数相关的异常主要有三个需要手动处理：</p>
<ul>
<li><code v-pre>org.springframework.validation.BindException</code></li>
<li><code v-pre>org.springframework.web.bind.MethodArgumentNotValidException</code></li>
<li><code v-pre>javax.validation.ConstraintViolationException</code></li>
</ul>
<p>我们可以设计一个全局异常处理类，方便统一处理异常错误信息，对项目<code v-pre>springboot-commonresult</code>代码进行扩充，增加全局异常处理的代码，步骤如下：</p>
<ol>
<li>
<p>重复统一返回结果<a href="#_link_result1">步骤1</a>，<a href="_link_result1">步骤2</a></p>
</li>
<li>
<p><code v-pre>xml</code>文件中新增数据校验注解依赖</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>&lt;<span class="token tag">!--</span>数据校验 SpringBoot 2.3 版本以上<span class="token punctuation">-</span><span class="token punctuation">-</span><span class="token punctuation">></span>
&lt;dependency<span class="token punctuation">></span>
    &lt;groupId<span class="token punctuation">></span>org.springframework.boot&lt;/groupId<span class="token punctuation">></span>
    &lt;artifactId<span class="token punctuation">></span>spring<span class="token punctuation">-</span>boot<span class="token punctuation">-</span>starter<span class="token punctuation">-</span>validation&lt;/artifactId<span class="token punctuation">></span>
&lt;/dependency<span class="token punctuation">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>1、SpringBoot 为我们提供了一系列参数校验的注解，这些注解可以直接作用在实体类的属性上，来对属性的值进行限制，不需要我们手动去写许多<code v-pre>if else</code>代码来对属性值进行判断，如：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token string">""</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、SpringBoot 2.3 以上版本需要添加<code v-pre>spring-boot-starter-validation</code>依赖，否则参数校验可能会失败，2.3 以下版本可以不添加，只需要添加<code v-pre>spring-boot-starter-web</code>依赖即可：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--SpringBoot Web 依赖--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<p><strong>常用校验注解如下：</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">注解</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>@NotEmpty</code></td>
<td>被注释的字符串的不能为 null 也不能为空，一般用在集合类上或者数组上</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>@NotBlank</code></td>
<td>被注释的字符串非 null，并且必须包含一个非空白字符，只能作用在接收的 String 类型上</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>@Null</code></td>
<td>被注释的元素必须为 null</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>@NotNull</code></td>
<td>被注释的元素必须不为 null，但可以为empty，一般用在 Integer 类型的基本数据类型的非空校验上</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>@AssertTrue</code></td>
<td>被注释的元素必须为 true</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>@AssertFalse</code></td>
<td>被注释的元素必须为 false</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>@Pattern(regex=,flag=)</code></td>
<td>被注释的元素必须符合指定的正则表达式</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>@Email</code></td>
<td>被注释的元素必须是 Email 格式</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>@Min(value)</code></td>
<td>被注释的元素必须是一个数字，其值必须大于等于指定的最小值</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>@Max(value)</code></td>
<td>被注释的元素必须是一个数字，其值必须小于等于指定的最大值</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>@DecimalMin(value)</code></td>
<td>被注释的元素必须是一个数字，其值必须大于等于指定的最小值</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>@DecimalMax(value)</code></td>
<td>被注释的元素必须是一个数字，其值必须小于等于指定的最大值</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>@Size(max=, min=)</code></td>
<td>被注释的元素的大小必须在指定的范围内</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>修改实体类<code v-pre>User</code>，对实体类属性增加数据校验注解</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@NotBlank</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">"名字不为空"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@NotBlank</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">"年龄不为空"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Email</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">"邮箱格式不正确"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写全局异常处理类代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@ControllerAdvice</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GlobalExceptionHandler</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     *
     * <span class="token keyword">@param</span> <span class="token parameter">e</span> BindException 表单绑定到 JavaBean 出错时,抛出 BindException 异常
     * <span class="token keyword">@return</span>
     * @ExceptionHandler 统一处理 BindException 异常
     */</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">BindException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span> <span class="token function">handleValidException</span><span class="token punctuation">(</span><span class="token class-name">BindException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">ObjectError</span> objectError <span class="token operator">:</span> e<span class="token punctuation">.</span><span class="token function">getAllErrors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>objectError <span class="token keyword">instanceof</span> <span class="token class-name">FieldError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">FieldError</span> fieldError <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">FieldError</span><span class="token punctuation">)</span> objectError<span class="token punctuation">;</span>
                map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"field"</span><span class="token punctuation">,</span> fieldError<span class="token punctuation">.</span><span class="token function">getField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"message"</span><span class="token punctuation">,</span> fieldError<span class="token punctuation">.</span><span class="token function">getDefaultMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"field"</span><span class="token punctuation">,</span> objectError<span class="token punctuation">.</span><span class="token function">getObjectName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"message"</span><span class="token punctuation">,</span> objectError<span class="token punctuation">.</span><span class="token function">getDefaultMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token class-name">CommonResult</span><span class="token punctuation">.</span><span class="token function">validateFailed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">"items"</span><span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *
     * <span class="token keyword">@param</span> <span class="token parameter">e</span> 将请求体解析并绑定到 JavaBean 出错时,抛出 MethodArgumentNotValidException 异常
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">MethodArgumentNotValidException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span> <span class="token function">handleValidException</span><span class="token punctuation">(</span><span class="token class-name">MethodArgumentNotValidException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">ObjectError</span> objectError <span class="token operator">:</span> e<span class="token punctuation">.</span><span class="token function">getAllErrors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 遍历所有错误</span>
            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>objectError <span class="token keyword">instanceof</span> <span class="token class-name">FieldError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>       <span class="token comment">// 是否为参数错误</span>
                <span class="token class-name">FieldError</span> fieldError <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">FieldError</span><span class="token punctuation">)</span> objectError<span class="token punctuation">;</span>
                map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"field"</span><span class="token punctuation">,</span> fieldError<span class="token punctuation">.</span><span class="token function">getField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"message"</span><span class="token punctuation">,</span> fieldError<span class="token punctuation">.</span><span class="token function">getDefaultMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"field"</span><span class="token punctuation">,</span> objectError<span class="token punctuation">.</span><span class="token function">getObjectName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"message"</span><span class="token punctuation">,</span> objectError<span class="token punctuation">.</span><span class="token function">getDefaultMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token class-name">CommonResult</span><span class="token punctuation">.</span><span class="token function">validateFailed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">"items"</span><span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>参考<a href="https://juejin.cn/post/6844904003684302861" target="_blank" rel="noopener noreferrer">Spring 参数校验的异常处理 - 掘金 (juejin.cn)<ExternalLinkIcon/></a></p>
</div>
</li>
<li>
<p>UserControler 类中添加方法 <code v-pre>addUser()</code> 接口</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"addUser"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">CommonResult</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Valid</span> <span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">boolean</span> result <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> <span class="token class-name">CommonResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span>
    	<span class="token keyword">return</span> <span class="token class-name">CommonResult</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>注解<code v-pre>@Valid</code>用来验证表单传递过来的数据是否符合参数校验，如果数据异常则会统一抛出异常，方便异常中心统一处理</p>
</div>
</li>
<li>
<p>测试<code v-pre>addUser()</code>接口</p>
<p>当 User 类属性 <code v-pre>name=&quot;&quot;</code>，属性<code v-pre>email</code>格式不正确时，输出内容如下：</p>
<img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20221023213515128.png" alt="image-20221023213515128" style="zoom:50%;" />
</li>
<li>
<p>我们也可以自定义异常，编写自定义异常类<code v-pre>CustomizeApiException</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>  <span class="token comment">//有参数构造器</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>   <span class="token comment">//生成无参数构造</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomizeApiException</span> <span class="token keyword">extends</span> <span class="token class-name">RuntimeException</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> code<span class="token punctuation">;</span>   <span class="token comment">// 状态码</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> msg<span class="token punctuation">;</span>     <span class="token comment">// 输出消息</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在全局异常处理类<code v-pre>GlobalExceptionHandler</code>添加对自定义异常的处理方法</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
* 自定义异常处理
* <span class="token keyword">@return</span>
*/</span>
<span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span><span class="token class-name">CustomizeApiException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">CommonResult</span> <span class="token function">handleCustomizeApiException</span><span class="token punctuation">(</span><span class="token class-name">CustomizeApiException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">CommonResult</span><span class="token punctuation">.</span><span class="token function">setCommonResult</span><span class="token punctuation">(</span><span class="token class-name">ResultCode</span><span class="token punctuation">.</span><span class="token constant">ERROR</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="统一日志处理" tabindex="-1"><a class="header-anchor" href="#统一日志处理" aria-hidden="true">#</a> 统一日志处理</h2>
<p>在项目开发中，往往会遇到各种错误，<strong>统一日志处理</strong>可以方便快速定位错误位置，便于程序调试。</p>
<div class="custom-container info">
<p class="custom-container-title">使用原则</p>
<p>阿里巴巴 Java 开发手册中建议：应用中不可直接使用日志系统（Log4j 、Logback）中的 API ，而应依赖使用日志框架 SLF4J 中的 API ，使用门面模式的日志框架，有利于维护和各个类的日志处理方式统一</p>
</div>
<p>SpringBoot 项目中使用<code v-pre>SLF4J+Log4j2</code>进行统一日志处理，流程如下：</p>
<ol>
<li>
<p><code v-pre>pom.xml</code> 文件中引入相关依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- log4j2日志依赖核心包 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.logging.log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>log4j-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.17.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.logging.log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>log4j-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.17.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--用于与 slf4j 保持桥接--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.logging.log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>log4j-slf4j-impl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.17.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- slf4j 日志框架核心包--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.slf4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>slf4j-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.7.32<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>resources 资源文件目录下新建日志配置文件<code v-pre>log4j2.xml</code></p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token comment">&lt;!--日志级别以及优先级排序: OFF > FATAL > ERROR > WARN > INFO > DEBUG > TRACE > ALL 跟踪、调试、信息、警告、错误和致命--></span>
<span class="token comment">&lt;!--status="WARN" :用于设置 log4j2 自身内部日志的信息输出级别，默认是OFF--></span>
<span class="token comment">&lt;!--monitorInterval="30"  :间隔秒数, 自动检测配置文件的变更和重新配置本身--></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>WARN<span class="token punctuation">"</span></span> <span class="token attr-name">monitorInterval</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>30<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!--变量配置--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Properties</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 格式化输出：%date表示日期, %thread表示线程名, %-5level: 级别从左显示 5 个字符宽度 %msg: 日志消息, %n是换行符--></span>
        <span class="token comment">&lt;!-- %logger{36} 表示 Logger 名字最长 36 个字符 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>LOG_PATTERN<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token comment">&lt;!-- 定义日志存储的路径, 不要配置相对路径 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>LOG_FILE_PATH<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>E:\logs\log4j2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>LOG_FILE_NAME<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edulog4j2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Properties</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!--appenders: 定义输出内容, 输出格式, 输出方式, 日志保存策略等, 常用其下三种标签[console, File, RollingFile]--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appenders</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--Appender 1. 输出到 Console 控制台, 指定输出格式和过滤器等级为 INFO --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>console</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Console<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SYSTEM_OUT<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token comment">&lt;!--日志输出的格式--></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PatternLayout</span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${LOG_PATTERN}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token comment">&lt;!--ThresholdFilter 指定日志消息的输出最低层次--></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ThresholdFilter</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">onMatch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ACCEPT<span class="token punctuation">"</span></span> <span class="token attr-name">onMismatch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DENY<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>console</span><span class="token punctuation">></span></span>

        <span class="token comment">&lt;!--File: 同步输出日志到本地文件--></span>
        <span class="token comment">&lt;!--append="false": 根据其下日志策略, 每次清空文件重新输入日志, 可用于测试--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>File</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Filelog<span class="token punctuation">"</span></span> <span class="token attr-name">fileName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${LOG_FILE_PATH}/test.log<span class="token punctuation">"</span></span> <span class="token attr-name">append</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PatternLayout</span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${LOG_PATTERN}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>File</span><span class="token punctuation">></span></span>

        <span class="token comment">&lt;!-- 打印出所有的 info 及以下级别的信息, 每次大小超过 size, 则这个 size 大小的日志会自动存入按年份-月份建立的文件夹下面并进行压缩, 作为存档--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RollingFile</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>RollingFileInfo<span class="token punctuation">"</span></span> <span class="token attr-name">fileName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${LOG_FILE_PATH}/info.log<span class="token punctuation">"</span></span> <span class="token attr-name">filePattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${LOG_FILE_PATH}/${LOG_FILE_NAME}-INFO-%d{yyyy-MM-dd}_%i.log.gz<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token comment">&lt;!--ThresholdFilter : 日志输出过滤--></span>
            <span class="token comment">&lt;!--level="info" : 日志级别; onMatch="ACCEPT" : 级别在 info 之上则接受; onMismatch="DENY" : 级别在 info 之下则拒绝--></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ThresholdFilter</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">onMatch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ACCEPT<span class="token punctuation">"</span></span> <span class="token attr-name">onMismatch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DENY<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PatternLayout</span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${LOG_PATTERN}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token comment">&lt;!-- Policies: 日志滚动策略--></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Policies</span><span class="token punctuation">></span></span>
                <span class="token comment">&lt;!-- TimeBasedTriggeringPolicy : 时间滚动策略, 默认0点产生新的文件,
                        interval="6" : 自定义文件滚动时间间隔, 每隔 6 小时产生新文件,
                        modulate="true" : 产生文件是否以 0 点偏移时间, 即6点, 12点, 18点, 0点--></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimeBasedTriggeringPolicy</span> <span class="token attr-name">interval</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span> <span class="token attr-name">modulate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
                <span class="token comment">&lt;!-- SizeBasedTriggeringPolicy : 文件大小滚动策略--></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SizeBasedTriggeringPolicy</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10MB<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Policies</span><span class="token punctuation">></span></span>
            <span class="token comment">&lt;!-- DefaultRolloverStrategy 属性如不设置, 则默认为最多同一文件夹下 7 个文件开始覆盖--></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DefaultRolloverStrategy</span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>15<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RollingFile</span><span class="token punctuation">></span></span>

        <span class="token comment">&lt;!-- 打印出所有的 warn 及以下级别的信息, 每次大小超过size, 则这个 size 大小的日志会自动存入按年份-月份建立的文件夹下面并进行压缩, 作为存档--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RollingFile</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>RollingFileWarn<span class="token punctuation">"</span></span> <span class="token attr-name">fileName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${LOG_FILE_PATH}/warn.log<span class="token punctuation">"</span></span> <span class="token attr-name">filePattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${LOG_FILE_PATH}/${LOG_FILE_NAME}-WARN-%d{yyyy-MM-dd}_%i.log.gz<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ThresholdFilter</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warn<span class="token punctuation">"</span></span> <span class="token attr-name">onMatch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ACCEPT<span class="token punctuation">"</span></span> <span class="token attr-name">onMismatch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DENY<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PatternLayout</span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${LOG_PATTERN}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Policies</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimeBasedTriggeringPolicy</span> <span class="token attr-name">interval</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SizeBasedTriggeringPolicy</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10MB<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Policies</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DefaultRolloverStrategy</span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>15<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RollingFile</span><span class="token punctuation">></span></span>

        <span class="token comment">&lt;!-- 打印出所有的 error及以下级别的信息, 每次大小超过size, 则这个 size 大小的日志会自动存入按年份-月份建立的文件夹下面并进行压缩, 作为存档--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RollingFile</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>RollingFileError<span class="token punctuation">"</span></span> <span class="token attr-name">fileName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${LOG_FILE_PATH}/error.log<span class="token punctuation">"</span></span> <span class="token attr-name">filePattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${LOG_FILE_PATH}/${LOG_FILE_NAME}-ERROR-%d{yyyy-MM-dd}_%i.log.gz<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ThresholdFilter</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span> <span class="token attr-name">onMatch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ACCEPT<span class="token punctuation">"</span></span> <span class="token attr-name">onMismatch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DENY<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PatternLayout</span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${LOG_PATTERN}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Policies</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimeBasedTriggeringPolicy</span> <span class="token attr-name">interval</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SizeBasedTriggeringPolicy</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10MB<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Policies</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DefaultRolloverStrategy</span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>15<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RollingFile</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appenders</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!--Logger节点用来单独指定日志的形式，比如要为指定包下的class指定不同的日志级别等。--></span>
    <span class="token comment">&lt;!-- 定义loggers, 只有定义了 logger 并引入的 appender, appender才会生效--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>loggers</span><span class="token punctuation">></span></span>

        <span class="token comment">&lt;!--过滤掉 spring 和 mybatis 的一些无用的 DEBUG 信息--></span>
        <span class="token comment">&lt;!--Logger 节点用来单独指定日志的形式, name为包路径, 比如要为 org.springframework 包下所有日志指定为 INFO 级别等 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>logger</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.springframework<span class="token punctuation">"</span></span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>INFO<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>logger</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>logger</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.mybatis<span class="token punctuation">"</span></span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>INFO<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>logger</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- Root节点用来指定项目的根日志, 如果没有单独指定 Logger, 那么就会默认使用该 Root 日志输出 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Console<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Filelog<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>RollingFileInfo<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>RollingFileWarn<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>RollingFileError<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--AsyncLogger : 异步日志, LOG4J 有三种日志模式: 全异步日志,混合模式,同步日志; 性能从高到底, 线程越多效率越高, 也可以避免日志卡死线程情况发生--></span>
        <span class="token comment">&lt;!--additivity="false" : additivity 设置事件是否在 root logger 输出, 为了避免重复输出, 可以在 Logger 标签下设置 additivity为 ”false” --></span>
        <span class="token comment">&lt;!--&lt;AsyncLogger name="AsyncLogger" level="trace" includeLocation="true" additivity="false">
            &lt;appender-ref ref="RollingFileError"/>
        &lt;/AsyncLogger>--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>loggers</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写测试代码并测试</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span> <span class="token comment">// @Slf4j 注解依赖包</span>

<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LogTest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testLog4j2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">trace</span><span class="token punctuation">(</span><span class="token string">"trace1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">"debug1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">"warn1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"info1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"error1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info">
<p class="custom-container-title">知识点</p>
<p>1、<strong>SLF4J</strong> 为简单日志门面，是日志框架的抽象，是对所有日志框架制定的一种规范、标准、接口，并不是一个框架的具体的实现，因为接口并不能独立使用，它需要和具体的日志框架来配合使用</p>
<p>2、<strong>Log4j2</strong> 是日志实现，SLF4J + Log4j2 作为统一日志处理的方式的好处在于，如果项目中希望使用到其它日志实现（如 Logback），更换日志框架时可以不改动代码，只需要把依赖的 jar 包替换掉就可以了。</p>
<p>3、注解<code v-pre>@Slf4j</code>可以替代以下代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">private</span>  <span class="token keyword">final</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span>当前类名<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用注解<code v-pre>@Slf4j</code>时我们需要在 pom.xml 文件中加入 Lombok 依赖：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--Lombok--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<p>测试结果：</p>
<p><img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203130908788.png" alt="image-20220313090845627" loading="lazy"></p>
</li>
</ol>
<p>参考文章：</p>
<ul>
<li><a href="https://segmentfault.com/a/1190000037598528" target="_blank" rel="noopener noreferrer">一篇文章搞懂Slf4j和Log4j2<ExternalLinkIcon/></a></li>
<li><a href="https://segmentfault.com/a/1190000015568449" target="_blank" rel="noopener noreferrer">SpringBoot集成slf4j+log4j2<ExternalLinkIcon/></a></li>
<li><a href="https://www.jianshu.com/p/d13c2e50a89c" target="_blank" rel="noopener noreferrer">LOG4J2 完整配置详解<ExternalLinkIcon/></a></li>
<li><a href="https://cloud.tencent.com/developer/article/1383510" target="_blank" rel="noopener noreferrer">web项目中如何选择日志组件（SLF4J、Log4J2、logback）<ExternalLinkIcon/></a></li>
</ul>
<h2 id="阿里云oss文件存储" tabindex="-1"><a class="header-anchor" href="#阿里云oss文件存储" aria-hidden="true">#</a> 阿里云OSS文件存储</h2>
<div class="custom-container tip">
<p class="custom-container-title">OSS概念</p>
<p>OSS（Object Storage Service）是阿里云提供的一种 Restful 对象存储服务，可以在任何应用、任何时间、任何地点存储和访问任意类型的数据。</p>
</div>
<p>我们新建一个 SpringBoot 项目 <code v-pre>springboot-oss-uploadfile</code>，来整合阿里云文件上传功能，项目环境：JDK17，SpringBoot 2.6.4，项目目录结构如下：</p>
<img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203171554428.png" alt="image-20220317155457344" width="400" />
<p><strong>阿里云文件上传代码实现步骤如下</strong>：</p>
<ol>
<li>
<p>登录阿里云，开通 OSS 服务，创建新的 Bucket，保存你 Bucket 的 Endpoint（地域节点）</p>
<p><img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203170950300.png" alt="image-20220317095004967" loading="lazy"></p>
<p>点击页面右上角头像，选择 AccessKey 管理，创建你的 AccessKey，并保存你的 <code v-pre>AccessKey ID</code> 和 <code v-pre>AccessKey Secret</code></p>
<div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>1、Endpoint：OSS对外服务的访问域名</p>
<p>2、Bucket：存储空间，用于存储对象(Object)的容器</p>
<p>3、AccessKey ID 和 AccessKey Secret：访问阿里云 API 的密钥，具有该账户完全的权限，OSS 通过使用 AccessKey ID 和AccessKey Secret 对称加密的方法来验证某个请求的发送者身份</p>
</div>
</li>
<li>
<p>创建 SpringBoot 项目，编写代码</p>
<p>配置文件<code v-pre>application.properties</code>内容：</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token comment">#阿里云Oss</span>
<span class="token key attr-name">aliyun.oss.endpoint</span><span class="token punctuation">=</span><span class="token value attr-value">你创建的Bucket的访问域名</span>
<span class="token key attr-name">aliyun.oss.accessKeyId</span><span class="token punctuation">=</span><span class="token value attr-value">你的AccessKey ID</span>
<span class="token key attr-name">aliyun.oss.accessKeySecret</span><span class="token punctuation">=</span><span class="token value attr-value">你的AccessKey Secret</span>
<span class="token key attr-name">aliyun.oss.bucketName</span><span class="token punctuation">=</span><span class="token value attr-value">你创建的Bucket</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>AliyunOSSConfigConstant</code> 类读取配置文件内容：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AliyunOSSConfigConstant</span> <span class="token keyword">implements</span> <span class="token class-name">InitializingBean</span> <span class="token punctuation">{</span>
    <span class="token comment">// 读取配置文件</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${aliyun.oss.endpoint}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> endpoint<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${aliyun.oss.accessKeyId}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> keyid<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${aliyun.oss.accessKeySecret}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> keysecret<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${aliyun.oss.bucketName}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> bucketname<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">END_POINT</span><span class="token punctuation">;</span> <span class="token comment">// OSS对外服务的访问域名</span>
    <span class="token comment">// OSS通过使用AccessKeyId和AccessKeySecret对称加密的方法来验证某个请求的发送者身份</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">ACCESS_KEYID</span><span class="token punctuation">;</span> <span class="token comment">//AccessKey ID</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">ACCESS_KEYSECRET</span><span class="token punctuation">;</span> <span class="token comment">//Access Key Secret</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">BUCKET_NAME</span><span class="token punctuation">;</span> <span class="token comment">// 存储空间, 用于存储对象(Object)的容器</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token constant">END_POINT</span> <span class="token operator">=</span> endpoint<span class="token punctuation">;</span>
        <span class="token constant">ACCESS_KEYID</span> <span class="token operator">=</span> keyid<span class="token punctuation">;</span>
        <span class="token constant">ACCESS_KEYSECRET</span> <span class="token operator">=</span> keysecret<span class="token punctuation">;</span>
        <span class="token constant">BUCKET_NAME</span> <span class="token operator">=</span> bucketname<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Service</code>层定义实现上传方法接口 <code v-pre>OssFileService</code> 与实现类 <code v-pre>OssFileServiceImpl</code>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">OssFileService</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 文件上传到阿里云
     * <span class="token keyword">@param</span> <span class="token parameter">file</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">String</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OssFileServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">OssFileService</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> bucketName <span class="token operator">=</span> <span class="token class-name">AliyunOSSConfigConstant</span><span class="token punctuation">.</span><span class="token constant">BUCKET_NAME</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> endpoint <span class="token operator">=</span> <span class="token class-name">AliyunOSSConfigConstant</span><span class="token punctuation">.</span><span class="token constant">END_POINT</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> accessKeyId <span class="token operator">=</span> <span class="token class-name">AliyunOSSConfigConstant</span><span class="token punctuation">.</span><span class="token constant">ACCESS_KEYID</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> accessKeySecret <span class="token operator">=</span> <span class="token class-name">AliyunOSSConfigConstant</span><span class="token punctuation">.</span><span class="token constant">ACCESS_KEYSECRET</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> uploadUrl<span class="token punctuation">;</span> <span class="token comment">// 上传URL</span>

        <span class="token comment">// 创建OSSClient实例</span>
        <span class="token class-name">OSS</span> ossClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OSSClientBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">,</span> accessKeyId<span class="token punctuation">,</span> accessKeySecret<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//判断oss实例是否存在, 不存在则创建</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ossClient<span class="token punctuation">.</span><span class="token function">doesBucketExist</span><span class="token punctuation">(</span>bucketName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//创建bucket</span>
                ossClient<span class="token punctuation">.</span><span class="token function">createBucket</span><span class="token punctuation">(</span>bucketName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// oss实例的访问权限:公共读</span>
                ossClient<span class="token punctuation">.</span><span class="token function">setBucketAcl</span><span class="token punctuation">(</span>bucketName<span class="token punctuation">,</span> <span class="token class-name">CannedAccessControlList<span class="token punctuation">.</span>PublicRead</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 上传文件字节输入流</span>
            <span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 构建日期路径</span>
            <span class="token class-name">String</span> fileUrl <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">getOriginalFilename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取文件名称</span>
            <span class="token class-name">String</span> uuid <span class="token operator">=</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"-"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 拼接uuid</span>
            <span class="token class-name">String</span> dateStr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">"yyyy/MM/dd"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 拼接时间</span>
            fileUrl <span class="token operator">=</span> dateStr <span class="token operator">+</span> <span class="token string">"/"</span> <span class="token operator">+</span> uuid <span class="token operator">+</span> fileUrl<span class="token punctuation">;</span>

            <span class="token comment">// 调用oss进行上传</span>
            <span class="token comment">// 参数分别为 BucketName, 上传到oss文件的路径和名称, 第三个文件输入流</span>
            ossClient<span class="token punctuation">.</span><span class="token function">putObject</span><span class="token punctuation">(</span>bucketName<span class="token punctuation">,</span> fileUrl<span class="token punctuation">,</span> inputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>

            uploadUrl <span class="token operator">=</span> <span class="token string">"http://"</span> <span class="token operator">+</span> bucketName <span class="token operator">+</span> <span class="token string">"."</span> <span class="token operator">+</span> endpoint <span class="token operator">+</span> <span class="token string">"/"</span> <span class="token operator">+</span> fileUrl<span class="token punctuation">;</span>
            <span class="token keyword">return</span> uploadUrl<span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">OSSException</span> oe<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>oe<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClientException</span> ce<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>ce<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> ie<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>ie<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>ossClient <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 最后要关闭 ossClient</span>
                ossClient<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Controller层实现接口：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/oss/file"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OssFileController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">OssFileService</span> fileService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"upload"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">"file"</span><span class="token punctuation">)</span> <span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> uploadUrl <span class="token operator">=</span> fileService<span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> uploadUrl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>测试上传功能，使用工具 ApiPost 进行接口测试</p>
<p>测试结果，上传成功之后返回上传 ULR：</p>
<p><img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203171512858.png" alt="image-20220317151226674" loading="lazy"></p>
</li>
</ol>
<p>参考文章：</p>
<ul>
<li><a href="https://segmentfault.com/a/1190000017273629" target="_blank" rel="noopener noreferrer">SpringBoot整合阿里云OSS存储服务<ExternalLinkIcon/></a></li>
<li><a href="https://segmentfault.com/a/1190000020963346" target="_blank" rel="noopener noreferrer">阿里云OSS文件上传（分页上传，断点续传）<ExternalLinkIcon/></a></li>
<li><a href="https://segmentfault.com/a/1190000023698805" target="_blank" rel="noopener noreferrer">SpringBoot OSS整合全过程<ExternalLinkIcon/></a></li>
</ul>
<h2 id="easyexcel-读取-excel-文件" tabindex="-1"><a class="header-anchor" href="#easyexcel-读取-excel-文件" aria-hidden="true">#</a> EasyExcel 读取 Excel 文件</h2>
<div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>EasyExcel 是阿里巴巴开源的一个 excel 处理框架，使用 EasyExcel 可以高效的将 Excel 表中的数据导入到数据库中</p>
</div>
<p>创建 SpringBoot 项目 <code v-pre>springboot-easyexcel</code>，读取“用户分类.xlsx” Excel 表中的数据到数据库User表，项目环境为 JDK 17，SpringBoot 2.6.4</p>
<p><img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20220409084517069.png" alt="image-20220409084517069" loading="lazy"></p>
<p>代码实现如下：</p>
<ol>
<li>
<p>导入项目所需依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--mysql--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--MybatisPlus--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis-plus-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.5.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--Lombok--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写项目所需代码</p>
<p><strong>实体类 User</strong>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>

    <span class="token comment">// id 是自增的,因此不需要使用@ExcelProperty注解</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@ExcelProperty</span><span class="token punctuation">(</span>index <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@ExcelProperty</span><span class="token punctuation">(</span>index <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@ExcelProperty</span><span class="token punctuation">(</span>index <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>需要使用注解 <code v-pre>@ExcelProperty</code>和 Excel 表需要读取的列对应，<code v-pre>index = 0</code>表示第一列，<code v-pre>index = 1</code>表示第二列，以此类推</p>
</div>
<p><strong>Service 接口及方法</strong>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token keyword">extends</span> <span class="token class-name">IService</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">batchImportUser</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">,</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserMapper</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">batchImportUser</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">,</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">InputStream</span> is <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// read(InputStream inputStream, Class head, ReadListener readListener)</span>
            <span class="token comment">// inputStream 输入流; head 需要导入excel表对应的实体类; readListener 事件监听器,用来监听处理读取到的每一条数据,读取excel表第一个sheet</span>
            <span class="token class-name">EasyExcel</span><span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>is<span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">UserExcelListener</span><span class="token punctuation">(</span>userService<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sheet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info">
<p class="custom-container-title">Info</p>
<p><code v-pre>UserServiceImpl</code> 类中调用 <code v-pre>EasyExcel.read(...)</code> 方法来读取 Excel 表中数据，需要自定义一个 Excel 监听器并实现 Excel 的分析监听器接口 <code v-pre>AnalysisEventListener</code></p>
</div>
</li>
<li>
<p>编写 Excel 监听器类 <code v-pre>UserExcelListener</code>代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserExcelListener</span> <span class="token keyword">extends</span> <span class="token class-name">AnalysisEventListener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> <span class="token constant">LOGGER</span> <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">UserExcelListener</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 每隔5条存储数据库，实际使用中可以3000条，然后清理list ，方便内存回收
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">BATCH_COUNT</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">UserExcelListener</span><span class="token punctuation">(</span><span class="token class-name">UserService</span> userService<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>userService <span class="token operator">=</span> userService<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">UserExcelListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">,</span> <span class="token class-name">AnalysisContext</span> analysisContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"解析到一条数据"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 达到BATCH_COUNT了，需要去存储一次数据库，防止数据几万条数据在内存，容易OOM</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token constant">BATCH_COUNT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 批量将数据存储在数据库中</span>
            userService<span class="token punctuation">.</span><span class="token function">saveBatch</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"存储数据库成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 存储完成清理 list</span>
            list<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 所有数据解析完成了 都会来调用
     * <span class="token keyword">@param</span> <span class="token parameter">analysisContext</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doAfterAllAnalysed</span><span class="token punctuation">(</span><span class="token class-name">AnalysisContext</span> analysisContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 这里也要保存数据，确保最后遗留的数据也存储到数据库</span>
        userService<span class="token punctuation">.</span><span class="token function">saveBatch</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"所有数据解析完成！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写 Controller 代码并使用 ApiPost 进行接口测试</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/user"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"addSubject"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">addCourseSubject</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">"file"</span><span class="token punctuation">)</span> <span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StaticComponentContainer<span class="token punctuation">.</span>Modules</span><span class="token punctuation">.</span><span class="token function">exportAllToAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 解决JDK17与easyexcel报错问题</span>
        userService<span class="token punctuation">.</span><span class="token function">batchImportUser</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> userService<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"OK"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger">
<p class="custom-container-title">Warning</p>
<p>JDK17 环境下使用 EasyExcel 会出现 <code v-pre>Caused by: java.lang.reflect.InaccessibleObjectException</code> 异常信息，需要在 pom 文件引入以下依赖：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.burningwave<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>9.5.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并且写入以下代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 解决JDK17与easyexcel报错问题</span>
<span class="token class-name">StaticComponentContainer<span class="token punctuation">.</span>Modules</span><span class="token punctuation">.</span><span class="token function">exportAllToAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div>
</li>
</ol>
<h2 id="nginx-配置后台多服务器" tabindex="-1"><a class="header-anchor" href="#nginx-配置后台多服务器" aria-hidden="true">#</a> nginx 配置后台多服务器</h2>
<div class="custom-container info">
<p class="custom-container-title">Info</p>
<p>使用 SpringBoot + Vue 技术栈开发的前后端分离的项目，可以使用 nginx 反向代理来配置后台多台服务器</p>
</div>
<p>以本文项目edu和edu-admin为例，使用nginx配置后台多台服务器过程如下：</p>
<ol>
<li>
<p>下载安装 nginx</p>
<Tabs id="686" :data='[{"title":"Windows"},{"title":"macOS"}]' :active="1">
<template #tab0="{ title, value, isActive }">
<!-- 此处，选项卡 1 的标题“标题 1”将用作值。 -->
<!-- tab 1 内容 -->
<p>下载后解压，<a href="http://nginx.org/en/download.html" target="_blank" rel="noopener noreferrer">下载地址<ExternalLinkIcon/></a>，建议下载稳定版 Stable version：</p>
<img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20220409152617452.png" alt="image-20220409152617452" width="500" />
</template>
<template #tab1="{ title, value, isActive }">
<!-- 这里，tab 2 的标题将是 “标题 2”，但它会使用 “值 2” 作为选项卡的值-->
<!-- tab 2 内容 -->
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>brew <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</Tabs>
</li>
<li>
<p>修改 nginx 配置文件内容</p>
<Tabs id="706" :data='[{"title":"Windows"},{"title":"macOS"}]' :active="1">
<template #tab0="{ title, value, isActive }">
<!-- 此处，选项卡 1 的标题“标题 1”将用作值。 -->
<!-- tab 1 内容 -->
<p>解压文件夹中找到 <code v-pre>nginx.conf</code> 文件</p>
</template>
<template #tab1="{ title, value, isActive }">
<!-- 这里，tab 2 的标题将是 “标题 2”，但它会使用 “值 2” 作为选项卡的值-->
<!-- tab 2 内容 -->
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /opt/homebrew/etc/nginx/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</Tabs>
<p>在 <code v-pre>http { }</code> 内新添加一个 <code v-pre>server{ }</code> ，用来配置项目 edu中对应的微服务服务器地址，修改后的配置文件内容如下：</p>
<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre v-pre class="language-nginx"><code><span class="token comment"># http服务器配置</span>
<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
  <span class="token comment"># 虚拟主机的配置</span>
  <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
      <span class="token comment"># 监听端口，nginx 默认为 80，可以自行修改</span>
    	<span class="token directive"><span class="token keyword">listen</span>       <span class="token number">81</span></span><span class="token punctuation">;</span>
      <span class="token comment"># 域名，可以有多个，用空格隔开</span>
    	<span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>
    	<span class="token comment"># ...</span>
  <span class="token punctuation">}</span>
  <span class="token comment"># ...</span>
  <span class="token comment"># 以下内容为新增</span>
  <span class="token comment"># 项目edu服务</span>
  <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8888</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>

        <span class="token comment"># edu 匹配请求 URL</span>
        <span class="token comment"># http://localhost:8080/edu/...</span>
        <span class="token directive"><span class="token keyword">location</span> ~/edu/</span> <span class="token punctuation">{</span> <span class="token comment"># 当客户端请求的 URL 有 /edu/ 时</span>
      			// 请求代理服务端口
            <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8001</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment"># http://localhost:8080/oss/...</span>
        <span class="token directive"><span class="token keyword">location</span> ~/oss/</span> <span class="token punctuation">{</span> <span class="token comment"># 当客户端请求的 URL 有 /oss/ 时</span>
      			// 请求代理服务端口
            <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8002</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>当后端有多个服务时，可以配置多个 location</p>
</div>
</li>
<li>
<p>启动 nginx</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning">
<p class="custom-container-title">Note</p>
<p>每次修改完 nginx 配置文件之后，需要重启 nginx，重启命令为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
</li>
<li>
<p>修改后端前台项目edu-admin服务端口为 nginx 文件配置的 listen 接口 8888，配置文件为<code v-pre>.env.development</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># VUE_APP_BASE_API = '/dev-api'
# 修改为后端 edu-service-edu 服务访问接口
VUE_APP_BASE_API = 'http://localhost:8888'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>当后端前台发送一个请求，如 <code v-pre>http://localhost:8888/edu/teacher/listByPageCondition/1/10</code>时，nginx 反向代理会请求后端服务 <code v-pre>http://localhost:8001/edu/teacher/listByPageCondition/1/10</code>，后端服务端口配置在<code v-pre>application.yaml</code>文件：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token comment"># 服务端口</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8001</span>

<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token comment"># 服务名称</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> edu<span class="token punctuation">-</span>service<span class="token punctuation">-</span>edu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
</li>
<li>
<p>后端代码解决跨域问题，使用<code v-pre>@CrossOrigin</code>注解</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/edu/teacher"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@CrossOrigin</span> <span class="token comment">// 解决跨域问题</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TeacherController</span> <span class="token punctuation">{</span>
		<span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"条件查询分页方法"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"listByPageCondition/{current}/{limit}"</span><span class="token punctuation">)</span>
  	<span class="token comment">// 后端服务应用接口 `http://localhost:8001/edu/teacher/listByPageCondition/1/10`，</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span> <span class="token function">listByPageCondition</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Long</span> current<span class="token punctuation">,</span>
                                   <span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Long</span> limit<span class="token punctuation">,</span>
                                   <span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">TeachQueryVo</span> teachQuery<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...省略</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>测试</p>
<p><img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20220409203216198.png" alt="image-20220409203216198" loading="lazy"></p>
</li>
</ol>
<h2 id="springboot-上传视频到阿里云平台" tabindex="-1"><a class="header-anchor" href="#springboot-上传视频到阿里云平台" aria-hidden="true">#</a> SpringBoot 上传视频到阿里云平台</h2>
<div class="custom-container info">
<p class="custom-container-title">Info</p>
<p>阿里云视频点播（VOD）是集音视频上传、自动化转码处理、媒体资源管理、分发加速于一体的全链路音视频点播服务。可以有效的保障视频内容的安全，不被盗链、非法下载和传播，广泛应用在音视频网站，短视频，在线教育等场景。</p>
</div>
<p>新建项目 SpringBoot 项目 <code v-pre>springboot-aliyun-vod</code>，项目环境为 JDK 17，SpringBoot 2.6.4，演示视频上传到阿里云平台，阿里云设置步骤如下：</p>
<ol>
<li>
<p>登陆阿里云官网，官网首页右上角进入控制台，点击头像-AccessKey管理，获取阿里云访问密钥，<code v-pre>AccessKeyId</code>和<code v-pre>AccessKeySecret</code></p>
<p><img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20220412214606032.png" alt="image-20220412214606032" loading="lazy"></p>
</li>
<li>
<p>开通阿里云视频点播服务，<a href="https://help.aliyun.com/document_detail/51512.html" target="_blank" rel="noopener noreferrer">参考网址<ExternalLinkIcon/></a></p>
<div class="custom-container warning">
<p class="custom-container-title">Note</p>
<p>仅演示视频上传功能无需进行域名注册功能</p>
</div>
</li>
<li>
<p>进入视频点播服务控制台，开启存储地址状态</p>
<p><img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20220413094429696.png" alt="image-20220413094429696" loading="lazy"></p>
</li>
</ol>
<p>之后便可以编写上传代码，参考官网<a href="https://help.aliyun.com/document_detail/53406.html" target="_blank" rel="noopener noreferrer">Java上传SDK<ExternalLinkIcon/></a>，步骤如下：</p>
<ol>
<li>
<p>pom 文件引入相关依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--阿里云 oss--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.aliyun.oss<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>aliyun-sdk-oss<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.10.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--阿里云视频点播服务--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>aliyun-java-sdk-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>4.5.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>aliyun-java-sdk-vod<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.15.11<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--Json 数据转换--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.json<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>json<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>20170516<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>fastjson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.2.28<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.google.code.gson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>gson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.8.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Idea-工程结构-Modules中手动引入依赖<code v-pre>aliyun-java-upload-1.4.14.jar</code>依赖</p>
<p><img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20220413100437672.png" alt="image-20220413100437672" loading="lazy"></p>
<div class="custom-container warning">
<p class="custom-container-title">Note</p>
<p>由于<code v-pre>aliyun-java-upload-1.4.14.jar</code>暂未开源，因此可以使用上述方式将其手动引入到项目依赖中，之后可以选择将其移动到工程库中或者resources文件夹下，防止工程移植时jar包丢失，或者可以<a href="https://blog.csdn.net/u012723673/article/details/107390612" target="_blank" rel="noopener noreferrer">加入到自己本地Maven仓库中<ExternalLinkIcon/></a>，在进行Maven依赖引入</p>
</div>
<div class="custom-container danger">
<p class="custom-container-title">Warning</p>
<p>步骤1、2中引入的 jar 包版本要注意对应，参考<a href="https://help.aliyun.com/document_detail/53406.html#section-we5-kov-5o0" target="_blank" rel="noopener noreferrer">集成Java上传SDK<ExternalLinkIcon/></a>，<a href="https://help.aliyun.com/document_detail/51992.htm?spm=a2c4g.11186623.0.0.67d44150SLpjlN#title-jq2-fre-l7l" target="_blank" rel="noopener noreferrer">demo示例参考<ExternalLinkIcon/></a></p>
</div>
</li>
<li>
<p>编写<code v-pre>application.properties</code>配置文件内容</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token comment"># 服务端口</span>
<span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">8003</span>

<span class="token comment"># 阿里云访问密钥</span>
<span class="token key attr-name">aliyun.vod.file.keyid</span><span class="token punctuation">=</span><span class="token value attr-value">你的AccessKeyId</span>
<span class="token key attr-name">aliyun.vod.file.keysecret</span><span class="token punctuation">=</span><span class="token value attr-value">你的AccessKeySecret</span>

<span class="token comment"># 上传大小限制</span>
<span class="token key attr-name">spring.servlet.multipart.max-file-size</span><span class="token punctuation">=</span><span class="token value attr-value">1024MB</span>
<span class="token key attr-name">spring.servlet.multipart.max-request-size</span><span class="token punctuation">=</span><span class="token value attr-value">1024MB</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>常量配置类<code v-pre>AliyunVodConfigConstant</code>读取配置文件 <code v-pre>AccessKeyId</code>、<code v-pre>AccessKeySecret</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AliyunVodConfigConstant</span> <span class="token keyword">implements</span> <span class="token class-name">InitializingBean</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${aliyun.vod.file.keyid}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> keyId<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${aliyun.vod.file.keysecret}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> keySecret<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">ACCESS_KEY_ID</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">ACCESS_KEY_SECRET</span><span class="token punctuation">;</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token constant">ACCESS_KEY_ID</span> <span class="token operator">=</span> keyId<span class="token punctuation">;</span>
        <span class="token constant">ACCESS_KEY_SECRET</span> <span class="token operator">=</span> keySecret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>视频点播工具类填入 AccessKey 信息，进行初始化，参考官方<a href="https://help.aliyun.com/document_detail/61062.html" target="_blank" rel="noopener noreferrer">初始化<ExternalLinkIcon/></a></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AliyunVodSDKUtils</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 填入AccessKey信息，进行初始化
     * <span class="token keyword">@param</span> <span class="token parameter">accessKeyId</span>
     * <span class="token keyword">@param</span> <span class="token parameter">accessKeySecret</span>
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">DefaultAcsClient</span> <span class="token function">initVodClient</span><span class="token punctuation">(</span><span class="token class-name">String</span> accessKeyId<span class="token punctuation">,</span> <span class="token class-name">String</span> accessKeySecret<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClientException</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> regionId <span class="token operator">=</span> <span class="token string">"cn-shanghai"</span><span class="token punctuation">;</span>  <span class="token comment">// 点播服务接入地域</span>
        <span class="token class-name">DefaultProfile</span> profile <span class="token operator">=</span> <span class="token class-name">DefaultProfile</span><span class="token punctuation">.</span><span class="token function">getProfile</span><span class="token punctuation">(</span>regionId<span class="token punctuation">,</span> accessKeyId<span class="token punctuation">,</span> accessKeySecret<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">DefaultAcsClient</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultAcsClient</span><span class="token punctuation">(</span>profile<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> client<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>VodServiceImpl</code> 类实现视频上传、删除服务</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">VodService</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">uploadVideo</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">removeVideo</span><span class="token punctuation">(</span><span class="token class-name">String</span> videoId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VodServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">VodService</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 上传视频到阿里云端
     * <span class="token keyword">@param</span> <span class="token parameter">file</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">uploadVideo</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//accessKeyId, accessKeySecret</span>
            <span class="token class-name">String</span> fileName <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">getOriginalFilename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//title：上传之后显示名称</span>
            <span class="token class-name">String</span> title <span class="token operator">=</span> fileName<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> fileName<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">UploadStreamRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UploadStreamRequest</span><span class="token punctuation">(</span><span class="token class-name">AliyunVodConfigConstant</span><span class="token punctuation">.</span><span class="token constant">ACCESS_KEY_ID</span><span class="token punctuation">,</span> <span class="token class-name">AliyunVodConfigConstant</span><span class="token punctuation">.</span><span class="token constant">ACCESS_KEY_SECRET</span><span class="token punctuation">,</span> title<span class="token punctuation">,</span> fileName<span class="token punctuation">,</span> inputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">UploadVideoImpl</span> uploader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UploadVideoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">UploadStreamResponse</span> response <span class="token operator">=</span> uploader<span class="token punctuation">.</span><span class="token function">uploadStream</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">String</span> videoId <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getVideoId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span><span class="token function">isSuccess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">String</span> errorMessage <span class="token operator">=</span> <span class="token string">"阿里云上传错误："</span> <span class="token operator">+</span> <span class="token string">"code："</span> <span class="token operator">+</span>
                        response<span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">", message："</span> <span class="token operator">+</span> response<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">ObjectUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>videoId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>errorMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">return</span> videoId<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">removeVideo</span><span class="token punctuation">(</span><span class="token class-name">String</span> videoId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//初始化对象</span>
            <span class="token class-name">DefaultAcsClient</span> client <span class="token operator">=</span> <span class="token class-name">AliyunVodSDKUtils</span><span class="token punctuation">.</span><span class="token function">initVodClient</span><span class="token punctuation">(</span>
                    <span class="token class-name">AliyunVodConfigConstant</span><span class="token punctuation">.</span><span class="token constant">ACCESS_KEY_ID</span><span class="token punctuation">,</span>
                    <span class="token class-name">AliyunVodConfigConstant</span><span class="token punctuation">.</span><span class="token constant">ACCESS_KEY_SECRET</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//创建删除视频的request对象</span>
            <span class="token class-name">DeleteVideoRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DeleteVideoRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//向request中设置videoId</span>
            request<span class="token punctuation">.</span><span class="token function">setVideoIds</span><span class="token punctuation">(</span>videoId<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//调用删除方法</span>
            <span class="token class-name">DeleteVideoResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">getAcsResponse</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"RequestId = "</span> <span class="token operator">+</span> response<span class="token punctuation">.</span><span class="token function">getRequestId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClientException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"视频删除失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写 Controller 代码并测试</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/video"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VodController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">VodService</span> vodService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"uploadVideo"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">uploadVideo</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> videoId <span class="token operator">=</span> vodService<span class="token punctuation">.</span><span class="token function">uploadVideo</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"视频上传成果，videoId"</span> <span class="token operator">+</span> videoId<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 ApiPost 测试上传功能：</p>
<p><img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20220413093036806.png" alt="image-20220413093036806" loading="lazy"></p>
<p>上传成功后回到阿里云视频点播控制台会看到上传的视频：</p>
<p><img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20220413093329811.png" alt="image-20220413093329811" loading="lazy"></p>
</li>
</ol>
<h2 id="springboot实现阿里云视频播放" tabindex="-1"><a class="header-anchor" href="#springboot实现阿里云视频播放" aria-hidden="true">#</a> SpringBoot实现阿里云视频播放</h2>
<div class="custom-container info">
<p class="custom-container-title">Info</p>
<p>上文讲解了如何将本地视频上传到阿里云平台，如果希望点播阿里云平台内的视频，需要项目中接入阿里云视频点播功能</p>
</div>
<p>以前端项目edu-front和后端项目edu为例，集成阿里云视频播放前端配置参考<a href="https://help.aliyun.com/document_detail/125570.html?spm=a2c4g.11186623.0.0.36f36515DQIzLs" target="_blank" rel="noopener noreferrer">Web播放器快速接入<ExternalLinkIcon/></a>，步骤如下：</p>
<ol>
<li>
<p>前端项目edu-front引入脚本文件和css文件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"https://g.alicdn.com/de/prismplayer/2.12.1/skins/default/aliplayer-min.css"</span> <span class="token operator">/</span><span class="token operator">></span>  <span class="token comment">//（可选）如果您的使用场景需要用到H5模式的播放器，则需引用此css文件。</span>
  <span class="token operator">&lt;</span>script charset<span class="token operator">=</span><span class="token string">"utf-8"</span> type<span class="token operator">=</span><span class="token string">"text/javascript"</span> src<span class="token operator">=</span><span class="token string">"https://g.alicdn.com/de/prismplayer/2.12.1/aliplayer-min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>  <span class="token comment">//（必须）引入js文件。</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>提供挂载元素</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>J_prismPlayer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>实例化播放器，参考<a href="https://help.aliyun.com/document_detail/125570.html?spm=a2c4g.11186623.0.0.36f36515DQIzLs#section-m6w-48u-jvw" target="_blank" rel="noopener noreferrer">点播播放方式<ExternalLinkIcon/></a>或者<a href="https://help.aliyun.com/document_detail/125570.html?spm=a2c4g.11186623.0.0.36f36515DQIzLs#section-ov3-t67-45x" target="_blank" rel="noopener noreferrer">直播视频播放<ExternalLinkIcon/></a></p>
<div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>上述代码在项目edu-front路径<code v-pre>pages/player/_vid.vue</code>下实现</p>
</div>
</li>
</ol>
<p>集成阿里云视频播放后端配置只需要<a href="https://help.aliyun.com/document_detail/61064.html" target="_blank" rel="noopener noreferrer">获取视频播放凭证<ExternalLinkIcon/></a>即可，步骤如下：</p>
<ol>
<li>
<p><a href="https://help.aliyun.com/document_detail/53045.htm?spm=a2c4g.11186623.0.0.3d393669b6yTjz#task-354412" target="_blank" rel="noopener noreferrer">获取AccessKey<ExternalLinkIcon/></a>，创建阿里云AccessKey常量类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AliyunVodConfigConstant</span> <span class="token keyword">implements</span> <span class="token class-name">InitializingBean</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${aliyun.vod.file.keyid}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> keyId<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${aliyun.vod.file.keysecret}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> keySecret<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">ACCESS_KEY_ID</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">ACCESS_KEY_SECRET</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token constant">ACCESS_KEY_ID</span> <span class="token operator">=</span> keyId<span class="token punctuation">;</span>
        <span class="token constant">ACCESS_KEY_SECRET</span> <span class="token operator">=</span> keySecret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token comment"># 你的accessKeyId # 你的AccessKey Secret</span>
<span class="token key attr-name">aliyun.vod.file.keyid</span><span class="token punctuation">=</span><span class="token value attr-value">你的accessKeyId</span>
<span class="token key attr-name">aliyun.vod.file.keysecret</span><span class="token punctuation">=</span><span class="token value attr-value">你的AccessKey Secret</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>创建阿里云视频点播服务工具类<code v-pre>AliyunVodSDKUtils</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AliyunVodSDKUtils</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">DefaultAcsClient</span> <span class="token function">initVodClient</span><span class="token punctuation">(</span><span class="token class-name">String</span> accessKeyId<span class="token punctuation">,</span> <span class="token class-name">String</span> accessKeySecret<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClientException</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> regionId <span class="token operator">=</span> <span class="token string">"cn-shanghai"</span><span class="token punctuation">;</span>  <span class="token comment">// 点播服务接入地域</span>
        <span class="token class-name">DefaultProfile</span> profile <span class="token operator">=</span> <span class="token class-name">DefaultProfile</span><span class="token punctuation">.</span><span class="token function">getProfile</span><span class="token punctuation">(</span>regionId<span class="token punctuation">,</span> accessKeyId<span class="token punctuation">,</span> accessKeySecret<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">DefaultAcsClient</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultAcsClient</span><span class="token punctuation">(</span>profile<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> client<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>获取视频播放凭证</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"getVideoPlayAuth/{id}"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">CommonResult</span> <span class="token function">getVideoPlayAuth</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"id:"</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//创建初始化对象</span>
        <span class="token class-name">DefaultAcsClient</span> client <span class="token operator">=</span> <span class="token class-name">AliyunVodSDKUtils</span><span class="token punctuation">.</span><span class="token function">initVodClient</span><span class="token punctuation">(</span><span class="token class-name">AliyunVodConfigConstant</span><span class="token punctuation">.</span><span class="token constant">ACCESS_KEY_ID</span><span class="token punctuation">,</span> <span class="token class-name">AliyunVodConfigConstant</span><span class="token punctuation">.</span><span class="token constant">ACCESS_KEY_SECRET</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//创建获取凭证的request和response对象</span>
        <span class="token class-name">GetVideoPlayAuthRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetVideoPlayAuthRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//向request对象中设置视频id</span>
        request<span class="token punctuation">.</span><span class="token function">setVideoId</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//调用方法获得凭证</span>
        <span class="token class-name">GetVideoPlayAuthResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">getAcsResponse</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> playAuth <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getPlayAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">CommonResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">"playAuth"</span><span class="token punctuation">,</span> playAuth<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClientException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">CustomizeApiException</span><span class="token punctuation">(</span><span class="token number">20001</span><span class="token punctuation">,</span><span class="token string">"视频playAuth获取失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="springboot-整合-redis" tabindex="-1"><a class="header-anchor" href="#springboot-整合-redis" aria-hidden="true">#</a> SpringBoot 整合 Redis</h2>
<div class="custom-container tip">
<p class="custom-container-title">Redis简介</p>
<p><a href="https://redis.io/docs/about/" target="_blank" rel="noopener noreferrer">Redis<ExternalLinkIcon/></a> 是一个开源、基于内存、使用 C 语言编写的key-value数据库，Redis 支持五种数据类型：string（字符串），list（列表），set（集合），hash（哈希）及 zset(sorted set：有序集合)。redis 中的数据都是字符串，redis 是单线程，不适合存储比较大的数据，主要可以用于数据库、缓存、分布式锁、消息队列等...</p>
</div>
<p>网站首页Banner往往变化不是很频繁且访问量相对较大，因此有必要使用Redis实现数据缓存，以便减少数据库压力和提高访问速度。新建SpringBoot项目<code v-pre>springboot-redis</code>，项目中集成Redis服务步骤如下：</p>
<ol>
<li>
<p><a href="https://redis.io/docs/getting-started/" target="_blank" rel="noopener noreferrer">安装并启动Redis服务<ExternalLinkIcon/></a></p>
</li>
<li>
<p><code v-pre>pom.xml</code>文件中添加项目依赖</p>
<div class="language-pom line-numbers-mode" data-ext="pom"><pre v-pre class="language-pom"><code>&lt;!-- redis --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.apache.commons&lt;/groupId&gt;
    &lt;artifactId&gt;commons-pool2&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>新建Redis配置类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>codinglife<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">JsonAutoDetect</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PropertyAccessor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">ObjectMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">PropertyNamingStrategy</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">SerializationFeature</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>datatype<span class="token punctuation">.</span>jsr310<span class="token punctuation">.</span></span><span class="token class-name">JavaTimeModule</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>datatype<span class="token punctuation">.</span>jsr310<span class="token punctuation">.</span>ser<span class="token punctuation">.</span></span><span class="token class-name">LocalDateTimeSerializer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cache<span class="token punctuation">.</span></span><span class="token class-name">CacheManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cache<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">EnableCaching</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>cache<span class="token punctuation">.</span></span><span class="token class-name">RedisCacheConfiguration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>cache<span class="token punctuation">.</span></span><span class="token class-name">RedisCacheManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>connection<span class="token punctuation">.</span></span><span class="token class-name">RedisConnectionFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RedisTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">SimpleDateFormat</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">Duration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">LocalDateTime</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span>format<span class="token punctuation">.</span></span><span class="token class-name">DateTimeFormatter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">TimeZone</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @Description: Redis配置类
 * <span class="token keyword">@author</span>: CodingLifeVV
 * <span class="token keyword">@date</span>: 2022.04.22
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableCaching</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisConfig</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">DateTimeFormatter</span> <span class="token constant">DATE_TIME_FORMATTER</span> <span class="token operator">=</span> <span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">DateTimeFormatter</span> <span class="token constant">DATE_FORMATTER</span> <span class="token operator">=</span> <span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">"yyyy-MM-dd"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">DateTimeFormatter</span> <span class="token constant">TIME_FORMATTER</span> <span class="token operator">=</span> <span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">"HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> <span class="token function">redisTemplate</span><span class="token punctuation">(</span><span class="token class-name">RedisConnectionFactory</span> redisConnectionFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> template <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        template<span class="token punctuation">.</span><span class="token function">setConnectionFactory</span><span class="token punctuation">(</span>redisConnectionFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * JSON序列化
         */</span>
        <span class="token class-name">Jackson2JsonRedisSerializer</span> serializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ObjectMapper</span> mapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//取消时间转换格式，默认是时间戳，同时需要设置要表现的时间格式</span>
        mapper<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">SerializationFeature</span><span class="token punctuation">.</span><span class="token constant">WRITE_DATES_AS_TIMESTAMPS</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mapper<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">SerializationFeature</span><span class="token punctuation">.</span><span class="token constant">WRITE_DURATIONS_AS_TIMESTAMPS</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mapper<span class="token punctuation">.</span><span class="token function">setDateFormat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">"yyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//默认序列化没有实现，反序列化有实现</span>
        <span class="token class-name">JavaTimeModule</span> javaTimeModule <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JavaTimeModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        javaTimeModule<span class="token punctuation">.</span><span class="token function">addSerializer</span><span class="token punctuation">(</span><span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">LocalDateTimeSerializer</span><span class="token punctuation">(</span><span class="token constant">DATE_TIME_FORMATTER</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        mapper<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span>javaTimeModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//设置时区</span>
        mapper<span class="token punctuation">.</span><span class="token function">setTimeZone</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//设置格式化输出</span>
        mapper<span class="token punctuation">.</span><span class="token function">setPropertyNamingStrategy</span><span class="token punctuation">(</span><span class="token class-name">PropertyNamingStrategy</span><span class="token punctuation">.</span><span class="token constant">SNAKE_CASE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mapper<span class="token punctuation">.</span><span class="token function">setVisibility</span><span class="token punctuation">(</span><span class="token class-name">PropertyAccessor</span><span class="token punctuation">.</span><span class="token constant">ALL</span><span class="token punctuation">,</span> <span class="token class-name">JsonAutoDetect<span class="token punctuation">.</span>Visibility</span><span class="token punctuation">.</span><span class="token constant">ANY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        serializer<span class="token punctuation">.</span><span class="token function">setObjectMapper</span><span class="token punctuation">(</span>mapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

        template<span class="token punctuation">.</span><span class="token function">setKeySerializer</span><span class="token punctuation">(</span>serializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        template<span class="token punctuation">.</span><span class="token function">setHashKeySerializer</span><span class="token punctuation">(</span>serializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        template<span class="token punctuation">.</span><span class="token function">setValueSerializer</span><span class="token punctuation">(</span>serializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        template<span class="token punctuation">.</span><span class="token function">setHashValueSerializer</span><span class="token punctuation">(</span>serializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> template<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">CacheManager</span> <span class="token function">cacheManager</span><span class="token punctuation">(</span><span class="token class-name">RedisConnectionFactory</span> factory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">RedisSerializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> redisSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Jackson2JsonRedisSerializer</span> jackson2JsonRedisSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//解决查询缓存转换异常的问题</span>
        <span class="token class-name">ObjectMapper</span> om <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        om<span class="token punctuation">.</span><span class="token function">setVisibility</span><span class="token punctuation">(</span><span class="token class-name">PropertyAccessor</span><span class="token punctuation">.</span><span class="token constant">ALL</span><span class="token punctuation">,</span> <span class="token class-name">JsonAutoDetect<span class="token punctuation">.</span>Visibility</span><span class="token punctuation">.</span><span class="token constant">ANY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        om<span class="token punctuation">.</span><span class="token function">enableDefaultTyping</span><span class="token punctuation">(</span><span class="token class-name">ObjectMapper<span class="token punctuation">.</span>DefaultTyping</span><span class="token punctuation">.</span><span class="token constant">NON_FINAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jackson2JsonRedisSerializer<span class="token punctuation">.</span><span class="token function">setObjectMapper</span><span class="token punctuation">(</span>om<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 配置序列化（解决乱码的问题）,过期时间600秒</span>
        <span class="token class-name">RedisCacheConfiguration</span> config <span class="token operator">=</span> <span class="token class-name">RedisCacheConfiguration</span><span class="token punctuation">.</span><span class="token function">defaultCacheConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">entryTtl</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofSeconds</span><span class="token punctuation">(</span><span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">serializeKeysWith</span><span class="token punctuation">(</span><span class="token class-name">RedisSerializationContext<span class="token punctuation">.</span>SerializationPair</span><span class="token punctuation">.</span><span class="token function">fromSerializer</span><span class="token punctuation">(</span>redisSerializer<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">serializeValuesWith</span><span class="token punctuation">(</span><span class="token class-name">RedisSerializationContext<span class="token punctuation">.</span>SerializationPair</span><span class="token punctuation">.</span><span class="token function">fromSerializer</span><span class="token punctuation">(</span>jackson2JsonRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">disableCachingNullValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">RedisCacheManager</span> cacheManager <span class="token operator">=</span> <span class="token class-name">RedisCacheManager</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">cacheDefaults</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> cacheManager<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>配置文件<code v-pre>application.properties</code>中添加Redis配置</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token comment"># redis 配置</span>
<span class="token key attr-name">spring.redis.host</span><span class="token punctuation">=</span><span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">spring.redis.port</span><span class="token punctuation">=</span><span class="token value attr-value">6379</span>
<span class="token key attr-name">spring.redis.database</span><span class="token punctuation">=</span> <span class="token value attr-value">0</span>
<span class="token key attr-name">spring.redis.timeout</span><span class="token punctuation">=</span><span class="token value attr-value">1800000</span>

<span class="token comment"># SpringBoot 2.x 使用了lettuce客户端</span>
<span class="token key attr-name">spring.redis.lettuce.pool.max-active</span><span class="token punctuation">=</span><span class="token value attr-value">20</span>
<span class="token key attr-name">spring.redis.lettuce.pool.max-wait</span><span class="token punctuation">=</span><span class="token value attr-value">-1</span>
<span class="token comment"># 最大阻塞等待时间(负数表示没限制)</span>
<span class="token key attr-name">spring.redis.lettuce.pool.max-idle</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">spring.redis.lettuce.pool.min-idle</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>服务类中使用SpringBoot缓存注解</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BannerServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">BannerService</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 查询所有banner
     * @Cacheable 根据方法对其返回结果进行缓存 value 缓存名 key 自定义缓存 key
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"banner"</span><span class="token punctuation">,</span>key <span class="token operator">=</span> <span class="token string">"'bannerList'"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Banner</span><span class="token punctuation">></span></span> <span class="token function">getAllBanner</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Banner</span><span class="token punctuation">></span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//查询数据库数据库代码</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 保存banner
     * <span class="token keyword">@param</span> <span class="token parameter">crmBanner</span>
     * @CacheEvict 清空指定的缓存。一般用在更新或者删除方法上 value 缓存名 allEntries 是否清空所有缓存
     */</span>
    <span class="token annotation punctuation">@CacheEvict</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"banner"</span><span class="token punctuation">,</span> allEntries<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">savaBanner</span><span class="token punctuation">(</span><span class="token class-name">Banner</span> crmBanner<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">//更新数据库数据代码</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@CacheEvict</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"banner"</span><span class="token punctuation">,</span> allEntries<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateBannerById</span><span class="token punctuation">(</span><span class="token class-name">Banner</span> crmBanner<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">//更新数据库数据代码</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@CacheEvict</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"banner"</span><span class="token punctuation">,</span> allEntries<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">removeBannerById</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">//删除数据库数据代码</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info">
<p class="custom-container-title">SpringBoot缓存注解</p>
<p>常用的SpringBoot缓存注解有<code v-pre>@Cacheable</code>、<code v-pre>@CacheEvit</code>、<code v-pre>@CachePut</code>，含义分别为：</p>
<p>1、<code v-pre>@Cacheable</code>：修饰方法或类，当我们访问它修饰的方法时，优先从缓存中获取，若缓存中存在，则直接获取缓存的值；缓存不存在时，执行方法，并将结果写入缓存，<code v-pre>value</code>表示缓存名，<code v-pre>key</code>表示自定义缓存key</p>
<p>2、<code v-pre>@CacheEvit</code>：删除缓存，一般用在更新或者删除方法上，<code v-pre>value</code>表示缓存名，<code v-pre>allEntries</code>表示是否清空所有缓存</p>
<p>3、<code v-pre>@CachePut</code>：不管缓存有没有，都将方法的返回结果写入缓存；适用于缓存更新</p>
</div>
</li>
</ol>
<p>参考文章：</p>
<ul>
<li>
<p><a href="https://segmentfault.com/a/1190000039341264" target="_blank" rel="noopener noreferrer">Spring boot 集成Redis<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://segmentfault.com/a/1190000040280838" target="_blank" rel="noopener noreferrer">Spring系列缓存注解@Cacheable @CacheEvit @CachePut 使用姿势介绍<ExternalLinkIcon/></a></p>
</li>
</ul>
<h2 id="springboot-整合-jwt" tabindex="-1"><a class="header-anchor" href="#springboot-整合-jwt" aria-hidden="true">#</a> SpringBoot 整合 JWT</h2>
<div class="custom-container info">
<p class="custom-container-title">JWT 概述</p>
<p>JSON Web Token（JWT）是目前最流行的跨域身份验证解决方案。例如服务端A在认证了用户身份后，颁发一个很短过期时间的JWT给客户端，客户端在向服务端B的请求中带上该JWT，则服务端B可以通过验证该JWT来判断用户是否有权执行服务端B上的相关操作。JWT 的学习参考文末参考文章。</p>
</div>
<p>项目edu整合了 JWT 跨域身份验证，步骤如下：</p>
<ol>
<li>
<p>子模块<code v-pre>edu-common</code>下的pom 文件中添加 JWT 依赖 edu-common-utils</p>
<div class="language-pom line-numbers-mode" data-ext="pom"><pre v-pre class="language-pom"><code>&lt;!-- JWT 跨越身份验证--&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.jsonwebtoken&lt;/groupId&gt;
    &lt;artifactId&gt;jjwt&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>子模块<code v-pre>edu-common</code>下模块<code v-pre>edu-common-utils</code>创建 JWT 工具类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>jsonwebtoken<span class="token punctuation">.</span></span><span class="token class-name">Claims</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>jsonwebtoken<span class="token punctuation">.</span></span><span class="token class-name">Jws</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>jsonwebtoken<span class="token punctuation">.</span></span><span class="token class-name">Jwts</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>jsonwebtoken<span class="token punctuation">.</span></span><span class="token class-name">SignatureAlgorithm</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @Description: JWT跨越身份验证工具类
 * JWT token的格式：header.payload.signature 头部.负载.签名
 * header的格式（算法、token的类型）,默认：<span class="token punctuation">{</span>"alg": "HS512","typ": "JWT"<span class="token punctuation">}</span> alg-签名算法 typ-令牌类型
 * payload的格式 设置：（用户信息、创建时间、生成时间）
 * signature的生成算法：
 * HMACSHA512(base64UrlEncode(header) + "." +base64UrlEncode(payload),secret)
 * <span class="token keyword">@author</span>: CodingLifeVV
 * <span class="token keyword">@date</span>: 2022.04.24
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JwtUtils</span> <span class="token punctuation">{</span>
  
    <span class="token doc-comment comment">/**
     * 主题
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">SUBJECT</span> <span class="token operator">=</span> <span class="token string">"edu-user"</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 过期时间，毫秒，一天
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> <span class="token constant">EXPIRE</span> <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 密钥
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">APP_SECRET</span> <span class="token operator">=</span> <span class="token string">"secretkeycodinglifevv"</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 创建 token 信息
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">createToken</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">,</span> <span class="token class-name">String</span> nickname<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> <span class="token class-name">JwtToken</span> <span class="token operator">=</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setHeaderParam</span><span class="token punctuation">(</span><span class="token string">"typ"</span><span class="token punctuation">,</span> <span class="token string">"JWT"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setHeaderParam</span><span class="token punctuation">(</span><span class="token string">"alg"</span><span class="token punctuation">,</span> <span class="token string">"HS256"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span><span class="token constant">SUBJECT</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setIssuedAt</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setExpiration</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token constant">EXPIRE</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">claim</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>    <span class="token comment">// 自定义参数声明值</span>
                <span class="token punctuation">.</span><span class="token function">claim</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> nickname<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">signWith</span><span class="token punctuation">(</span><span class="token class-name">SignatureAlgorithm</span><span class="token punctuation">.</span><span class="token constant">HS256</span><span class="token punctuation">,</span> <span class="token constant">APP_SECRET</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">compact</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token class-name">JwtToken</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getJwtToken</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">,</span> <span class="token class-name">String</span> username<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">String</span> <span class="token class-name">JwtToken</span> <span class="token operator">=</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setHeaderParam</span><span class="token punctuation">(</span><span class="token string">"typ"</span><span class="token punctuation">,</span> <span class="token string">"JWT"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setHeaderParam</span><span class="token punctuation">(</span><span class="token string">"alg"</span><span class="token punctuation">,</span> <span class="token string">"HS256"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span><span class="token constant">SUBJECT</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setIssuedAt</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 签发时间</span>
                <span class="token punctuation">.</span><span class="token function">setExpiration</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token constant">EXPIRE</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">claim</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span> <span class="token comment">// 自定义参数声明值</span>
                <span class="token punctuation">.</span><span class="token function">claim</span><span class="token punctuation">(</span><span class="token string">"nickname"</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">signWith</span><span class="token punctuation">(</span><span class="token class-name">SignatureAlgorithm</span><span class="token punctuation">.</span><span class="token constant">HS256</span><span class="token punctuation">,</span> <span class="token constant">APP_SECRET</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">compact</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">JwtToken</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 验证 token 是否存在且有效
     * <span class="token keyword">@param</span> <span class="token parameter">jwtToken</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">validateToken</span><span class="token punctuation">(</span><span class="token class-name">String</span> jwtToken<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>jwtToken<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">parser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSigningKey</span><span class="token punctuation">(</span><span class="token constant">APP_SECRET</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parseClaimsJws</span><span class="token punctuation">(</span>jwtToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 验证 token 是否存在且有效
     * <span class="token keyword">@param</span> <span class="token parameter">request</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">checkToken</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> jwtToken <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">"token"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>jwtToken<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">parser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSigningKey</span><span class="token punctuation">(</span><span class="token constant">APP_SECRET</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parseClaimsJws</span><span class="token punctuation">(</span>jwtToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 根据token获取会员id
     * <span class="token keyword">@param</span> <span class="token parameter">request</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getMemberIdByJwtToken</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> jwtToken <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">"token"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>jwtToken<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">;</span>
        <span class="token class-name">Jws</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Claims</span><span class="token punctuation">></span></span> claimsJws <span class="token operator">=</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">parser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSigningKey</span><span class="token punctuation">(</span><span class="token constant">APP_SECRET</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parseClaimsJws</span><span class="token punctuation">(</span>jwtToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Claims</span> claims <span class="token operator">=</span> claimsJws<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>claims<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>登陆业务使用 JWT 进行跨域身份验证，在 <code v-pre>edu-service-ucenter</code> 子模块Service服务类 <code v-pre>UcenterMemberServiceImpl.java</code> <code v-pre>login()</code> 方法中</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token class-name">UcenterMember</span> ucenterMember<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> phone <span class="token operator">=</span> ucenterMember<span class="token punctuation">.</span><span class="token function">getMobile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> password <span class="token operator">=</span> ucenterMember<span class="token punctuation">.</span><span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">ObjectUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>phone<span class="token punctuation">)</span><span class="token operator">||</span><span class="token class-name">ObjectUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">CustomizeApiException</span><span class="token punctuation">(</span><span class="token number">20001</span><span class="token punctuation">,</span><span class="token string">"手机号和密码为空"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token comment">//判断手机号是否正确</span>
    <span class="token comment">//...省略代码</span>

    <span class="token comment">//判断密码是否相等</span>
    <span class="token comment">//...省略代码</span>

    <span class="token comment">//判断用户是否被禁用</span>
    <span class="token comment">//...省略代码</span>

    <span class="token comment">//登录成功</span>
    <span class="token comment">//按照jwt生产token返回</span>
    <span class="token class-name">String</span> token <span class="token operator">=</span> <span class="token class-name">JwtUtils</span><span class="token punctuation">.</span><span class="token function">createToken</span><span class="token punctuation">(</span>mobileMember<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mobileMember<span class="token punctuation">.</span><span class="token function">getNickname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> token<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Controller层类<code v-pre>UcenterMemberController</code>调用Service层<code v-pre>login()</code>方法，返回token信息到前端</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 使用手机号和密码登陆
 * <span class="token keyword">@param</span> <span class="token parameter">ucenterMember</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"login"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">CommonResult</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">UcenterMember</span> ucenterMember<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> token <span class="token operator">=</span>ucenterMemberService<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>ucenterMember<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">CommonResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">"token"</span><span class="token punctuation">,</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>参考文章：</p>
<ul>
<li>
<p><a href="https://segmentfault.com/a/1190000021224288" target="_blank" rel="noopener noreferrer">基于JWT实现的Token身份认证<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://segmentfault.com/a/1190000038434077" target="_blank" rel="noopener noreferrer">JWT跨越认证详解及应用场景<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://segmentfault.com/a/1190000040003653" target="_blank" rel="noopener noreferrer">SpringBoot整合JWT<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.zhihu.com/question/19786827" target="_blank" rel="noopener noreferrer">Cookie 和 Session 的区别<ExternalLinkIcon/></a></p>
</li>
</ul>
<h2 id="springboot-整合阿里云短信服务" tabindex="-1"><a class="header-anchor" href="#springboot-整合阿里云短信服务" aria-hidden="true">#</a> SpringBoot 整合阿里云短信服务</h2>
<p>阿里云短信服务可用于验证码发送，短信通知以及推广短信等业务。阿里云短信服务需要开通短信服务，开通步骤如下：</p>
<ol>
<li>
<p>登陆<a href="https://www.aliyun.com/?utm_content=se_1008364713" target="_blank" rel="noopener noreferrer">阿里云官网<ExternalLinkIcon/></a>，选择<a href="https://www.aliyun.com/product/sms?spm=5176.19720258.J_3207526240.38.7b8176f4jD4U88" target="_blank" rel="noopener noreferrer">短信服务<ExternalLinkIcon/></a>中<strong>免费开通</strong>功能</p>
<p><img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20221021103639198.png" alt="image-20221021103639198" loading="lazy"></p>
</li>
<li>
<p>添加签名管理，选择<strong>国内消息-签名管理-添加签名</strong>，输入相关信息后提交</p>
<p><img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20221021104725962.png" alt="image-20221021104725962" loading="lazy"></p>
</li>
<li>
<p>添加模版管理，选择<strong>国内消息-模版管理-添加模版</strong>，输入相关信息后添加</p>
<img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20221021110428025.png" alt="image-20221021110428025" style="zoom:50%;" />
</li>
</ol>
<p>开通短信服务审核通过之后，便可以使用短信服务，edu项目中整合阿里云短信服务步骤如下：</p>
<ol>
<li>
<p>登陆阿里云，点击右上角头像AccessKey管理，创建你的AccessKey</p>
<img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20221021133614371.png" alt="image-20221021133614371" style="zoom:50%;" />
<p>之后记住你的<code v-pre>AccessKey ID</code> 和 <code v-pre>AccessKey Secret</code></p>
</li>
<li>
<p>创建短信发送模块<code v-pre>edu-service-msm</code>，<code v-pre>application.properies</code> 文件配置阿里云<code v-pre>AccessKey ID</code> 和 <code v-pre>AccessKey Secret</code></p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">aliyun.msm.file.keyid</span><span class="token punctuation">=</span><span class="token value attr-value">你的keyid</span>
<span class="token key attr-name">aliyun.msm.file.keysecret</span><span class="token punctuation">=</span><span class="token value attr-value">你的keysecret</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建配置工具类<code v-pre>AliyunMsmConfigConstant</code>获取配置文件<code v-pre>AccessKey ID</code> 和 <code v-pre>AccessKey Secret</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span></span><span class="token class-name">InitializingBean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AliyunMsmConfigConstant</span> <span class="token keyword">implements</span> <span class="token class-name">InitializingBean</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${aliyun.msm.file.keyid}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> keyId<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${aliyun.msm.file.keysecret}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> keySecret<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">ACCESS_KEY_ID</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">ACCESS_KEY_SECRET</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token constant">ACCESS_KEY_ID</span> <span class="token operator">=</span> keyId<span class="token punctuation">;</span>
        <span class="token constant">ACCESS_KEY_SECRET</span> <span class="token operator">=</span> keySecret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>pom文件中引入相关依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dysmsapi20170525<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.0.22<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>创建发送短信工具类<code v-pre>SendSmsUtils</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SendSmsUtils</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> param<span class="token punctuation">,</span> <span class="token class-name">String</span> phone<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Client</span> client <span class="token operator">=</span> <span class="token class-name">SendSmsUtils</span><span class="token punctuation">.</span><span class="token function">createClient</span><span class="token punctuation">(</span><span class="token class-name">AliyunMsmConfigConstant</span><span class="token punctuation">.</span><span class="token constant">ACCESS_KEY_ID</span><span class="token punctuation">,</span>
                <span class="token class-name">AliyunMsmConfigConstant</span><span class="token punctuation">.</span><span class="token constant">ACCESS_KEY_SECRET</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">SendSmsRequest</span> sendSmsRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SendSmsRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setSignName</span><span class="token punctuation">(</span><span class="token string">"阿里云短信测试"</span><span class="token punctuation">)</span>      <span class="token comment">// 短信签名名称</span>
                <span class="token punctuation">.</span><span class="token function">setTemplateCode</span><span class="token punctuation">(</span><span class="token string">"SMS_154950909"</span><span class="token punctuation">)</span> <span class="token comment">// 短信模版</span>
                <span class="token punctuation">.</span><span class="token function">setPhoneNumbers</span><span class="token punctuation">(</span>phone<span class="token punctuation">)</span>           <span class="token comment">// 接收短信的手机号</span>
                <span class="token punctuation">.</span><span class="token function">setTemplateParam</span><span class="token punctuation">(</span><span class="token class-name">JSONObject</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 短信模版对应的变量值</span>
        <span class="token comment">// 复制代码运行请自行打印 API 的返回值</span>
        <span class="token class-name">SendSmsResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">sendSms</span><span class="token punctuation">(</span>sendSmsRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">"OK"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 使用AK&amp;SK初始化账号Client
     * <span class="token keyword">@param</span> <span class="token parameter">accessKeyId</span>
     * <span class="token keyword">@param</span> <span class="token parameter">accessKeySecret</span>
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Client</span> <span class="token function">createClient</span><span class="token punctuation">(</span><span class="token class-name">String</span> accessKeyId<span class="token punctuation">,</span> <span class="token class-name">String</span> accessKeySecret<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Config</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Config</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// 您的AccessKey ID</span>
                <span class="token punctuation">.</span><span class="token function">setAccessKeyId</span><span class="token punctuation">(</span>accessKeyId<span class="token punctuation">)</span>
                <span class="token comment">// 您的AccessKey Secret</span>
                <span class="token punctuation">.</span><span class="token function">setAccessKeySecret</span><span class="token punctuation">(</span>accessKeySecret<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 访问的域名</span>
        config<span class="token punctuation">.</span>endpoint <span class="token operator">=</span> <span class="token string">"dysmsapi.aliyuncs.com"</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Client</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning">
<p class="custom-container-title">Note</p>
<p>以上代码为测试短信发送功能代码实现，参考<a href="https://next.api.aliyun.com/api/Dysmsapi/2017-05-25/SendSms?tab=DOC" target="_blank" rel="noopener noreferrer">测试专用签名模版<ExternalLinkIcon/></a>，如下图所示：</p>
<p><img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20221021145011912.png" alt="image-20221021145011912" loading="lazy"></p>
<p>具体短信发送功能见<a href="https://next.api.aliyun.com/api/Dysmsapi/2017-05-25/SendSms?spm=api-workbench.SDK%20Document.0.0.487d1e0fc7gK1e&amp;lang=JAVA" target="_blank" rel="noopener noreferrer">官方API<ExternalLinkIcon/></a>，上述<code v-pre>send()</code>方法中的<code v-pre>.setSignName()</code>和<code v-pre>.setTemplateCode()</code>需要传入个人提前申请的签名和模版名称</p>
</div>
</li>
<li>
<p>Controller层调用短信发送工具类短信发送<code v-pre>send()</code>方法</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"send/{phone}"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">CommonResult</span> <span class="token function">sendMsm</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">String</span> phone<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// 从redis中获取验证码，如果获取到直接返回</span>
    <span class="token class-name">String</span> code <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>phone<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">ObjectUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">CommonResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 如果redis获取不到，进行阿里云发送</span>
    <span class="token comment">// 生成四位随机数，作为短信模版对应的变量值，传递阿里云进行发送</span>
    code <span class="token operator">=</span> <span class="token class-name">RandomUtil</span><span class="token punctuation">.</span><span class="token function">getFourBitRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> param <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    param<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"code"</span><span class="token punctuation">,</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 调用 Service 发送短信服务</span>
    <span class="token keyword">boolean</span> isSend <span class="token operator">=</span> msmService<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>param<span class="token punctuation">,</span>phone<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isSend<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//阿里云发送成功，把发送成功的验证码放入redis缓存中</span>
        <span class="token comment">//设置有效时间</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>phone<span class="token punctuation">,</span>code<span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MINUTES</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">CommonResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span>
        <span class="token keyword">return</span> <span class="token class-name">CommonResult</span><span class="token punctuation">.</span><span class="token function">setCommonResult</span><span class="token punctuation">(</span><span class="token class-name">ResultCode</span><span class="token punctuation">.</span><span class="token constant">ERROR</span><span class="token punctuation">,</span> <span class="token string">"短信发送失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>上述代码中类<code v-pre>RandomUtil</code>定义在项目edu子模块<code v-pre>edu-common-utils</code>下，<code v-pre>code = RandomUtil.getFourBitRandom()</code>生成四位随机数，作为短信模版对应的变量值</p>
</div>
</li>
<li>
<p>调用接口<code v-pre>http://localhost:8005/edumsm/msm/send/13588825895</code>，最终测试结果如下</p>
<img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20221022191804319.png" alt="image-20221022191804319" style="zoom:20%;" />
</li>
</ol>
<p>参考文章：</p>
<ul>
<li>
<p><a href="https://dysms.console.aliyun.com/quickstart?spm=5176.25163407.domtextsigncreate-index-1ec3c_58c50_0.1.2c0bbb6evJyyEL" target="_blank" rel="noopener noreferrer">短信服务快速学习<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://next.api.aliyun.com/api-tools/sdk/Dysmsapi?version=2017-05-25&amp;language=java-tea" target="_blank" rel="noopener noreferrer">短信服务升级版SDK<ExternalLinkIcon/></a></p>
</li>
</ul>
<h2 id="springboot-整合跳转微信登录" tabindex="-1"><a class="header-anchor" href="#springboot-整合跳转微信登录" aria-hidden="true">#</a> SpringBoot 整合跳转微信登录</h2>
<p>如果你的应用需要通过跳转微信来实现登陆操作，首先需要在<a href="https://open.weixin.qq.com/" target="_blank" rel="noopener noreferrer">微信开放平台<ExternalLinkIcon/></a>注册账号并进行以下操作，步骤如下：</p>
<ol>
<li>
<p>注册账号并激活邮箱</p>
</li>
<li>
<p>完善开发者资料</p>
</li>
<li>
<p>开发者资料认证</p>
</li>
<li>
<p>创建网站应用，微信登陆流程参考<a href="https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&amp;t=resource/res_list&amp;verify=1&amp;id=open1419316505&amp;token=e547653f995d8f402704d5cb2945177dc8aa4e7e&amp;lang=zh_CN" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
</li>
</ol>
<p>之后便可以在后端接入微信登陆，参考<a href="https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&amp;t=resource/res_list&amp;verify=1&amp;id=open1419316505&amp;token=e547653f995d8f402704d5cb2945177dc8aa4e7e&amp;lang=zh_CN" target="_blank" rel="noopener noreferrer">授权微信登陆流程<ExternalLinkIcon/></a>，获取access_token时序图如下：</p>
<p><img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20221022193948734.png" alt="image-20221022193948734" loading="lazy"></p>
<p>项目edu在子模块<code v-pre>edu-service-ucenter</code>接入微信登陆功能，步骤如下：</p>
<p>首先要生成微信二维码，<strong>生成微信二维码</strong>步骤如下：</p>
<ol>
<li>
<p><code v-pre>application.properties</code>添加相关配置信息</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token comment"># 微信开放平台 appid</span>
<span class="token key attr-name">wx.open.app_id</span><span class="token punctuation">=</span><span class="token value attr-value">你的appid</span>
<span class="token comment"># 微信开放平台app_secret</span>
<span class="token key attr-name">wx.open.app_secret</span><span class="token punctuation">=</span><span class="token value attr-value">你的app_secret</span>
<span class="token comment"># 微信开放平台 重定向url</span>
<span class="token key attr-name">wx.open.redirect_url</span><span class="token punctuation">=</span><span class="token value attr-value">http://你的服务器名称/api/ucenter/wx/callback</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>如果你仅仅是为了学习使用，不希望注册认证微信开放平台，可以使用以下配置文件内容进行功能测试：</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">8160</span>
<span class="token comment"># 微信开放平台 appid</span>
<span class="token key attr-name">wx.open.app_id</span><span class="token punctuation">=</span><span class="token value attr-value">wxed9954c01bb89b47</span>
<span class="token comment"># 微信开放平台 appsecret</span>
<span class="token key attr-name">wx.open.app_secret</span><span class="token punctuation">=</span><span class="token value attr-value">a7482517235173ddb4083788de60b90e</span>
<span class="token comment"># 微信开放平台 重定向url</span>
<span class="token key attr-name">wx.open.redirect_url</span><span class="token punctuation">=</span><span class="token value attr-value">http://localhost:8160/api/ucenter/wx/callback</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实测有效，端口号必须为8160</p>
</div>
</li>
<li>
<p>创建微信开放平台常量配置类<code v-pre>ConstanWxtiesUtil</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConstanWxtiesUtil</span> <span class="token keyword">implements</span> <span class="token class-name">InitializingBean</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${wx.open.app_id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> appId<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${wx.open.app_secret}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> appSecret<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${wx.open.redirect_url}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> redirectUrl<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">WX_OPEN_APP_ID</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">WX_OPEN_APP_SECRET</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">WX_OPEN_REDIRECT_URL</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token constant">WX_OPEN_APP_ID</span> <span class="token operator">=</span> appId<span class="token punctuation">;</span>
        <span class="token constant">WX_OPEN_APP_SECRET</span> <span class="token operator">=</span> appSecret<span class="token punctuation">;</span>
        <span class="token constant">WX_OPEN_REDIRECT_URL</span> <span class="token operator">=</span> redirectUrl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>创建微信登陆Controller类<code v-pre>WxApiController</code>，生成微信扫码登陆二维码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@CrossOrigin</span>
<span class="token annotation punctuation">@Controller</span> <span class="token comment">// 只请求地址，不返回数据</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/api/ucenter/wx"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WxApiController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UcenterMemberService</span> ucenterMemberService<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 生成微信二维码
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"login"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getWxCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 微信开放平台授权baseUrl</span>
        <span class="token comment">//? %s相当于占位符，可以填充参数</span>
        <span class="token comment">// 生成微信二维码——第一步请求Code的链接</span>
        <span class="token class-name">String</span> baseUrl <span class="token operator">=</span> <span class="token string">"https://open.weixin.qq.com/connect/qrconnect"</span> <span class="token operator">+</span>
                <span class="token string">"?appid=%s"</span> <span class="token operator">+</span>
                <span class="token string">"&amp;redirect_uri=%s"</span> <span class="token operator">+</span>
                <span class="token string">"&amp;response_type=code"</span> <span class="token operator">+</span>
                <span class="token string">"&amp;scope=snsapi_login"</span> <span class="token operator">+</span>
                <span class="token string">"&amp;state=%s"</span> <span class="token operator">+</span>
                <span class="token string">"#wechat_redirect"</span><span class="token punctuation">;</span>
        <span class="token comment">//授权码需要传入加密过的URL,必须使用</span>
        <span class="token class-name">String</span> redirectUrl <span class="token operator">=</span> <span class="token class-name">ConstanWxtiesUtil</span><span class="token punctuation">.</span><span class="token constant">WX_OPEN_REDIRECT_URL</span><span class="token punctuation">;</span><span class="token comment">//获取业务服务器重定向地址</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redirectUrl <span class="token operator">=</span> <span class="token class-name">URLEncoder</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>redirectUrl<span class="token punctuation">,</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//url编码</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">UnsupportedEncodingException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//传递参数，向baseUrl中的占位符%s传递参数值</span>
        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>
                baseUrl<span class="token punctuation">,</span>
                <span class="token class-name">ConstanWxtiesUtil</span><span class="token punctuation">.</span><span class="token constant">WX_OPEN_APP_ID</span><span class="token punctuation">,</span>
                redirectUrl<span class="token punctuation">,</span>
                <span class="token string">"codinglife"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//请求微信地址,重定向的方式</span>
        <span class="token comment">//类似于："redirect:http://localhost:3000"</span>
        <span class="token keyword">return</span> <span class="token string">"redirect:"</span> <span class="token operator">+</span> url<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">代码理解</p>
<p><code v-pre>getWxCode()</code> 方法用于生成微信登陆二维码，代码中定义的<code v-pre>baseUrl</code>为<a href="https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&amp;t=resource/res_list&amp;verify=1&amp;id=open1419316505&amp;token=e547653f995d8f402704d5cb2945177dc8aa4e7e&amp;lang=zh_CN" target="_blank" rel="noopener noreferrer">授权微信登陆流程<ExternalLinkIcon/></a><strong>第一步：请求CODE</strong>的链接，如下图所示。</p>
<p><img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20221022194937799.png" alt="image-20221022194937799" loading="lazy"></p>
</div>
<p>测试结果：</p>
<img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20221022195551610.png" alt="image-20221022195551610" style="zoom:40%;" />
</li>
</ol>
<p>上述代码生成扫描二维码之后，微信用户使用微信扫描二维码并且确认登录后，PC端会跳转到配置好的域名地址：<code v-pre>http://回调地址/api/ucenter/wx/callback</code>（在<code v-pre>application.properties</code>配置的<code v-pre>wx.open.redirect_url</code>），为了方便在本地做测试，可以在<code v-pre>WxApiController</code>类中定义一个回调方法<code v-pre>callback()</code>，实际项目开发中无需做此操作，部署项目时会配置好回调地址，<code v-pre>callback()</code>方法如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@CrossOrigin</span>
<span class="token annotation punctuation">@Controller</span> <span class="token comment">// 只请求地址，不返回数据</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/api/ucenter/wx"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WxApiController</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 获取扫描人信息，添加数据
     * <span class="token keyword">@param</span> <span class="token parameter">code</span>
     * <span class="token keyword">@param</span> <span class="token parameter">state</span>
     * <span class="token keyword">@param</span> <span class="token parameter">session</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"callback"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token class-name">String</span> code<span class="token punctuation">,</span> <span class="token class-name">String</span> state<span class="token punctuation">,</span> <span class="token class-name">HttpSession</span> session<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//(1)得到授权临时票据code</span>

            <span class="token comment">//(2)拿着code请求微信开放平台的固定地址accessTokenUrl，得到两个值access_token【访问凭证】和openid【每个微信唯一凭证】</span>
            <span class="token class-name">String</span> baseAccessTokenUrl <span class="token operator">=</span> <span class="token string">"https://api.weixin.qq.com/sns/oauth2/access_token"</span> <span class="token operator">+</span>
                    <span class="token string">"?appid=%s"</span> <span class="token operator">+</span>
                    <span class="token string">"&amp;secret=%s"</span> <span class="token operator">+</span>
                    <span class="token string">"&amp;code=%s"</span> <span class="token operator">+</span>
                    <span class="token string">"&amp;grant_type=authorization_code"</span><span class="token punctuation">;</span>

            <span class="token class-name">String</span> accessTokenUrl <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>baseAccessTokenUrl<span class="token punctuation">,</span>
                    <span class="token class-name">ConstanWxtiesUtil</span><span class="token punctuation">.</span><span class="token constant">WX_OPEN_APP_ID</span><span class="token punctuation">,</span>
                    <span class="token class-name">ConstanWxtiesUtil</span><span class="token punctuation">.</span><span class="token constant">WX_OPEN_APP_SECRET</span><span class="token punctuation">,</span>
                    code<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//请求拼接好的地址accessTokenUrl【code加上appid和access_token】，返回两个值access_token和openid</span>
            <span class="token comment">//使用httpclient发送请求，HttpClient不需要通过浏览器进行地址请求，得到返回结果</span>
            <span class="token class-name">String</span> accessTokenInfo <span class="token operator">=</span> <span class="token class-name">HttpClientUtils</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>accessTokenUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//使用gson转换工具Gson</span>
            <span class="token class-name">Gson</span> gson <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Gson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">HashMap</span> mapAccessToken <span class="token operator">=</span> gson<span class="token punctuation">.</span><span class="token function">fromJson</span><span class="token punctuation">(</span>accessTokenInfo<span class="token punctuation">,</span> <span class="token class-name">HashMap</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">String</span> access_token <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>mapAccessToken<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"access_token"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> openid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>mapAccessToken<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"openid"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


            <span class="token comment">//判断该微信信息是否注册过</span>
            <span class="token class-name">UcenterMember</span> member <span class="token operator">=</span> ucenterMemberService<span class="token punctuation">.</span><span class="token function">getMemberByOperid</span><span class="token punctuation">(</span>openid<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>member <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//(3)拿着access_token和openid，再去请求微信提供的固定地址，获取扫描人信息</span>
                <span class="token comment">//访问微信的资源服务器，获取用户信息</span>
                <span class="token class-name">String</span> baseUserInfoUrl <span class="token operator">=</span> <span class="token string">"https://api.weixin.qq.com/sns/userinfo"</span> <span class="token operator">+</span>
                        <span class="token string">"?access_token=%s"</span> <span class="token operator">+</span>
                        <span class="token string">"&amp;openid=%s"</span><span class="token punctuation">;</span>

                <span class="token comment">//再次拼接微信地址</span>
                <span class="token class-name">String</span> userInfoUrl <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>baseUserInfoUrl<span class="token punctuation">,</span> access_token<span class="token punctuation">,</span> openid<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token class-name">String</span> userInfo <span class="token operator">=</span> <span class="token class-name">HttpClientUtils</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>userInfoUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">//获取的微信个人信息json信息进行转换</span>
                <span class="token class-name">HashMap</span> userInfoMap <span class="token operator">=</span> gson<span class="token punctuation">.</span><span class="token function">fromJson</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">,</span> <span class="token class-name">HashMap</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">String</span> nickname <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>userInfoMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"nickname"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//昵称</span>
                <span class="token class-name">String</span> headimgurl <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>userInfoMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"headimgurl"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//头像</span>

                <span class="token comment">//把微信信息注册到数据库中</span>
                member <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UcenterMember</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                member<span class="token punctuation">.</span><span class="token function">setNickname</span><span class="token punctuation">(</span>nickname<span class="token punctuation">)</span><span class="token punctuation">;</span>
                member<span class="token punctuation">.</span><span class="token function">setOpenid</span><span class="token punctuation">(</span>openid<span class="token punctuation">)</span><span class="token punctuation">;</span>
                member<span class="token punctuation">.</span><span class="token function">setAvatar</span><span class="token punctuation">(</span>headimgurl<span class="token punctuation">)</span><span class="token punctuation">;</span>
                ucenterMemberService<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>member<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">//使用jwt生成token字符串</span>
            <span class="token class-name">String</span> jwtToken <span class="token operator">=</span> <span class="token class-name">JwtUtils</span><span class="token punctuation">.</span><span class="token function">getJwtToken</span><span class="token punctuation">(</span>menber<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> menber<span class="token punctuation">.</span><span class="token function">getNickname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//返回首页面，该首页面为前端首页面</span>
            <span class="token keyword">return</span> <span class="token string">"redirect:http://localhost:3000?token="</span><span class="token operator">+</span>jwtToken<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">CustomizeApiException</span><span class="token punctuation">(</span><span class="token number">20001</span><span class="token punctuation">,</span><span class="token string">"登录失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info">
<p class="custom-container-title">Info</p>
<p>edu项目中子模块<code v-pre>edu-service-order</code>实现了微信支付功能整合，参考接入<a href="https://pay.weixin.qq.com/static/applyment_guide/applyment_detail_website.shtml" target="_blank" rel="noopener noreferrer">微信支付<ExternalLinkIcon/></a><a href="https://pay.weixin.qq.com/wiki/doc/apiv3/open/pay/chapter2_7_1.shtml" target="_blank" rel="noopener noreferrer">参考接入微信支付流程接入前准备<ExternalLinkIcon/></a></p>
</div>
<p>参考文章：</p>
<ul>
<li><a href="https://segmentfault.com/a/1190000022172575" target="_blank" rel="noopener noreferrer">实现 OAuth2 单点登录SSO—单点登录和OAuth2概述<ExternalLinkIcon/></a></li>
<li><a href="https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&amp;t=resource/res_list&amp;verify=1&amp;id=open1419316505&amp;token=e547653f995d8f402704d5cb2945177dc8aa4e7e&amp;lang=zh_CN" target="_blank" rel="noopener noreferrer">网站应用微信登录开发指南<ExternalLinkIcon/></a></li>
</ul>
</div></template>


