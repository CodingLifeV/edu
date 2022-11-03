<template><div><h2 id="mybatis-plus-概述" tabindex="-1"><a class="header-anchor" href="#mybatis-plus-概述" aria-hidden="true">#</a> Mybatis-Plus 概述</h2>
<p>MyBatis-Plus（简称 MP）是一个 MyBatis 的增强工具，使用 MyBatis-Plus 不再需要我们手写 SQL 与 Mapper 文件，极大的简化开发，提高效率。</p>
<ul>
<li>官方参考文档：<a href="https://baomidou.com/pages/24112f/" target="_blank" rel="noopener noreferrer">简介 | MyBatis-Plus (baomidou.com)<ExternalLinkIcon/></a></li>
</ul>
<h2 id="mybatis-plus-快速入门" tabindex="-1"><a class="header-anchor" href="#mybatis-plus-快速入门" aria-hidden="true">#</a> Mybatis-Plus 快速入门</h2>
<p>创建一个简单的 SpringBoot 项目<code v-pre>mybatisplus</code>来读取用户表 User 中的数据，项目工程结构如下：</p>
<img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202241034788.png" alt="image-20220224103427728" width="400" />
<p><strong>项目集成 Mybatis-Plus 步骤如下</strong>：</p>
<ol>
<li>
<p>创建数据库 <code v-pre>mybatis_plus</code></p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>DROP TABLE IF EXISTS user;
CREATE TABLE user
(
 id BIGINT(20) NOT NULL COMMENT '主键ID',
 name VARCHAR(30) NULL DEFAULT NULL COMMENT '姓名',
 age INT(11) NULL DEFAULT NULL COMMENT '年龄',
 email VARCHAR(50) NULL DEFAULT NULL COMMENT '邮箱',
 PRIMARY KEY (id)
);

DELETE FROM user;
INSERT INTO user (id, name, age, email) VALUES
(1, 'Jone', 18, 'test1@baomidou.com'),
(2, 'Jack', 20, 'test2@baomidou.com'),
(3, 'Tom', 28, 'test3@baomidou.com'),
(4, 'Sandy', 21, 'test4@baomidou.com'),
(5, 'Billie', 24, 'test5@baomidou.com');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>idea 初始化一个 SpringBoot 工程，SpringBoot 版本 <code v-pre>2.6.3</code>，<code v-pre>groupId</code> 为 <code v-pre>com.codinglife</code>，<code v-pre>artifactId</code> 为 <code v-pre>mybatisplus</code></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202271618467.png" alt="image-20220227161753347" loading="lazy"></p>
</li>
<li>
<p><code v-pre>pom.xml</code> 文件引入项目依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
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

<span class="token comment">&lt;!--Lombok--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lombok 注解参考<a href="">Lombok 注解</a></p>
</li>
<li>
<p><code v-pre>yaml</code> 文件<code v-pre>application.yaml</code>配置数据源和 mybatis 日志</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token comment"># 数据源</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/mybatis_plus<span class="token punctuation">?</span>serverTimezone=UTC<span class="token important">&amp;useUnicode=true&amp;characterEncoding=utf-</span><span class="token number">8</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">1234</span>

<span class="token comment"># mybatis 日志</span>
<span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token key atrule">configuration</span><span class="token punctuation">:</span>
    <span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>构建实体类 User</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span> <span class="token comment">// lombok 注解</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Integer</span> age<span class="token punctuation">,</span> <span class="token class-name">String</span> email<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> email<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写实体类 User 对应的 Mapper 接口</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>应用入口增加注解扫描 <code v-pre>@MapperScan</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">"com.codinglife.mapper"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisplusApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">MybatisplusApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写测试类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">"----- selectAll method test ------"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 查询 User 表所有数据</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> userList <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Assertions</span><span class="token punctuation">.</span><span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> userList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>测试结果输出</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202241021505.png" alt="image-20220224102059349" loading="lazy"></p>
</li>
</ol>
<h2 id="mapper-crud-接口" tabindex="-1"><a class="header-anchor" href="#mapper-crud-接口" aria-hidden="true">#</a> Mapper CRUD 接口</h2>
<p>当我们构建了一个简单的集成 Mybatis-Plus 的 SpringBoot 项目之后，便可以测试一系列数据库操作</p>
<h3 id="插入insert" tabindex="-1"><a class="header-anchor" href="#插入insert" aria-hidden="true">#</a> 插入insert</h3>
<p>针对 user 表插入一条数据，插入<code v-pre>insert</code>操作步骤如下：</p>
<ol>
<li>
<p>对需要插入数据的数据表设置主键自增</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202241545480.png" alt="image-20220224154501407" loading="lazy"></p>
<p>可以在创建表的时候使用<code v-pre>auto_increment</code> 设置主键自增</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">user</span>
<span class="token punctuation">(</span>
id <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">'主键ID'</span><span class="token punctuation">,</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用 <code v-pre>@TableId</code> 注解，对<code v-pre>user</code>表对应的 User 实体类设置主键自增策略，更改为<code v-pre>AUTO</code>（数据库 <code v-pre>ID</code> 自增）</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>

    <span class="token comment">//...省略</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>MyBatis-Plus 默认的主键策略是 <code v-pre>ID_WORKER</code>（全局唯一策略），如果不使用 <code v-pre>@TableId(type = IdType.AUTO)</code>，会自动生成一个全局唯一的ID：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202241616054.png" alt="image-20220224161612967" loading="lazy"></p>
</div>
</li>
<li>
<p>编写测试类代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testInsert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">"CodingLife"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">"wyj_program@163.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"影响的行数 : "</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>T</code>为实体对象，插入方法如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">T</span> entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202241702732.png" alt="image-20220224170230650" loading="lazy"></p>
</li>
</ol>
<h3 id="更新update" tabindex="-1"><a class="header-anchor" href="#更新update" aria-hidden="true">#</a> 更新Update</h3>
<p>通过<code v-pre>id</code>号，对<code v-pre>user</code>表的某一条数据进行更改，步骤如下：</p>
<ol>
<li>
<p>编写测试代码<code v-pre>updateById()</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testUpdateById</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 根据 ID 更新数据库表信息</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"影响的行数 : "</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法<code v-pre>updateById()</code>如下，<code v-pre>T</code>为实体对象</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 根据 ID 修改</span>
<span class="token keyword">int</span> <span class="token function">updateById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">ENTITY</span><span class="token punctuation">)</span> <span class="token class-name">T</span> entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="查询select" tabindex="-1"><a class="header-anchor" href="#查询select" aria-hidden="true">#</a> 查询Select</h3>
<ol>
<li>
<p>编写测试代码<code v-pre>testSelect()</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"查询表中所有数据: "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> userList <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    userList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">User</span> user <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"根据Id查询: "</span> <span class="token operator">+</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> users <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectBatchIds</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"批量查询: "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    users<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法列表：</p>
<table>
<thead>
<tr>
<th style="text-align:center"><strong>类型</strong></th>
<th style="text-align:center"><strong>参数名</strong></th>
<th style="text-align:left"><strong>描述</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">T</td>
<td style="text-align:center">entity</td>
<td style="text-align:left">实体对象 (set 条件值,可为 null)</td>
</tr>
<tr>
<td style="text-align:center">Wrapper</td>
<td style="text-align:center">updateWrapper</td>
<td style="text-align:left">实体对象封装操作类（可以为 null,里面的 entity 用于生成 where 语句）</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 根据 ID 查询</span>
<span class="token class-name">T</span> <span class="token function">selectById</span><span class="token punctuation">(</span><span class="token class-name">Serializable</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 根据 entity 条件，查询一条记录</span>
<span class="token class-name">T</span> <span class="token function">selectOne</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 查询（根据ID 批量查询）</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token function">selectBatchIds</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">COLLECTION</span><span class="token punctuation">)</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Serializable</span><span class="token punctuation">></span></span> idList<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 根据 entity 条件，查询全部记录</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token function">selectList</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 查询（根据 columnMap 条件）</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token function">selectByMap</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">COLUMN_MAP</span><span class="token punctuation">)</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> columnMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 根据 Wrapper 条件，查询全部记录</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token function">selectMaps</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 根据 Wrapper 条件，查询全部记录。注意： 只返回第一个字段的值</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> <span class="token function">selectObjs</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 根据 entity 条件，查询全部记录（并翻页）</span>
<span class="token class-name">IPage</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token function">selectPage</span><span class="token punctuation">(</span><span class="token class-name">IPage</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> page<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 根据 Wrapper 条件，查询全部记录（并翻页）</span>
<span class="token class-name">IPage</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token function">selectMapsPage</span><span class="token punctuation">(</span><span class="token class-name">IPage</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> page<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 根据 Wrapper 条件，查询总记录数</span>
<span class="token class-name">Integer</span> <span class="token function">selectCount</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="删除-delete" tabindex="-1"><a class="header-anchor" href="#删除-delete" aria-hidden="true">#</a> 删除 delete</h3>
<p>Mybatis-Plus提供了以下删除方法：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 根据 entity 条件，删除记录</span>
<span class="token keyword">int</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> wrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 删除（根据 ID 批量删除）</span>
<span class="token keyword">int</span> <span class="token function">deleteBatchIds</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">COLLECTION</span><span class="token punctuation">)</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Serializable</span><span class="token punctuation">></span></span> idList<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 根据 ID 删除</span>
<span class="token keyword">int</span> <span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token class-name">Serializable</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 根据 columnMap 条件，删除记录</span>
<span class="token keyword">int</span> <span class="token function">deleteByMap</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">COLUMN_MAP</span><span class="token punctuation">)</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> columnMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明：</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">类型</th>
<th style="text-align:center">参数名</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Wrapper</td>
<td style="text-align:center">wrapper</td>
<td style="text-align:center">实体对象封装操作类（可以为 null）</td>
</tr>
<tr>
<td style="text-align:center">Collection&lt;? extends Serializable&gt;</td>
<td style="text-align:center">idList</td>
<td style="text-align:center">主键 ID 列表(不能为 null 以及 empty)</td>
</tr>
<tr>
<td style="text-align:center">Serializable</td>
<td style="text-align:center">id</td>
<td style="text-align:center">主键 ID</td>
</tr>
<tr>
<td style="text-align:center">Map&lt;String, Object&gt;</td>
<td style="text-align:center">columnMap</td>
<td style="text-align:center">表字段 map 对象</td>
</tr>
</tbody>
</table>
<p>测试代码如下：</p>
<ol>
<li>
<p>测试<code v-pre>deleteById()</code>，根据 ID 删除记录</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDeleteByID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 删除 ID=6 的记录</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token number">6L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>测试<code v-pre>deleteBatchIds()</code>，根据 ID 批量删除记录</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDeleteBatchIds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 批量删除 ID=3, 4, 5 的记录</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">deleteBatchIds</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>测试<code v-pre>deleteByMap()</code>，根据条件查询删除</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDeleteByMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 删除 user 表 name=Jack, age=20 的记录</span>
    <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"Jack"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">deleteByMap</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="扩展与插件使用" tabindex="-1"><a class="header-anchor" href="#扩展与插件使用" aria-hidden="true">#</a> 扩展与插件使用</h2>
<h3 id="字段自动填充" tabindex="-1"><a class="header-anchor" href="#字段自动填充" aria-hidden="true">#</a> 字段自动填充</h3>
<p>有时候，数据库中的某一张表的某些字段，往往需要自动更新其信息，比如字段<code v-pre>createTime</code>，当我们插入一条数据时，需要自动生成创建时间；又例如字段<code v-pre>updateTime</code>，当我们对某一条数据进行更新时，需要自动更新该字段信息。</p>
<p>Mybatis-Plus 提供了字段自动填充，继续使用项目 mybatisplus ，对 user 表新增两个字段 <code v-pre>createTime</code>和<code v-pre>updateTime</code>来测试字段自动填充功能，步骤如下：</p>
<ol>
<li>
<p>对 user 表新增字段 <code v-pre>createTime</code>和<code v-pre>updateTime</code></p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>ALTER TABLE `user` ADD COLUMN `createTime` datetime;
ALTER TABLE `user` ADD COLUMN `updateTime` datetime
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>对实体类 <code v-pre>User</code> 新增属性  <code v-pre>createTime</code>和<code v-pre>updateTime</code>，并使用注解<code v-pre>@TableField</code>标明其自动填充方式</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>

    <span class="token comment">//...省略</span>
    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token class-name">FieldFill</span><span class="token punctuation">.</span><span class="token constant">INSERT</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token class-name">FieldFill</span><span class="token punctuation">.</span><span class="token constant">INSERT_UPDATE</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> updateTime<span class="token punctuation">;</span>

    <span class="token comment">//...省略</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>FieldFill 可选参数</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>DEFAULT</td>
<td>默认不处理</td>
</tr>
<tr>
<td>INSERT</td>
<td>插入时填充字段</td>
</tr>
<tr>
<td>UPDATE</td>
<td>更新时填充字段</td>
</tr>
<tr>
<td>INSERT_UPDATE</td>
<td>插入和更新时填充字段</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>编写自动填充配置类<code v-pre>AutoFillConfig</code>，实现接口<code v-pre>MetaObjectHandler</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AutoFillConfig</span> <span class="token keyword">implements</span> <span class="token class-name">MetaObjectHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> log <span class="token operator">=</span>
            <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">AutoFillConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insertFill</span><span class="token punctuation">(</span><span class="token class-name">MetaObject</span> metaObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"start insert fill ...."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 自动填充属性 createTime</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">strictInsertFill</span><span class="token punctuation">(</span>metaObject<span class="token punctuation">,</span> <span class="token string">"createTime"</span><span class="token punctuation">,</span> <span class="token class-name">Date</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateFill</span><span class="token punctuation">(</span><span class="token class-name">MetaObject</span> metaObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"start update fill ...."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">strictUpdateFill</span><span class="token punctuation">(</span>metaObject<span class="token punctuation">,</span> <span class="token string">"updateTime"</span><span class="token punctuation">,</span> <span class="token class-name">Date</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写测试代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAutoFill</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">"CodingLife"</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token string">"1013801973@qq.com"</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"插入时自动填充 createTime : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> userMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

    user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"更新时自动填充 updateTime : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>userMapper<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202272056247.png" alt="image-20220225161830034" loading="lazy"></p>
</li>
</ol>
<h3 id="逻辑删除" tabindex="-1"><a class="header-anchor" href="#逻辑删除" aria-hidden="true">#</a> 逻辑删除</h3>
<p>有时候，为了方便数据恢复和保护数据本身价值，我们并不会真正意义上的删除数据库表中的数据（物理删除），而是为数据库表增加一个字段<code v-pre>deleted</code>，当删除一行记录时，不执行 <code v-pre>DELETE</code> 操作，而是执行更新<code v-pre>UPDATE</code>操作，将该行记录的<code v-pre>deleted</code>字段设置为1，<code v-pre>deleted=1</code>的含义为该行记录被删除，这便是逻辑删除。</p>
<div class="custom-container info">
<p class="custom-container-title">知识点</p>
<p>1、逻辑删除只对自动注入的 SQL 起效：</p>
<ul>
<li>
<p>插入操作：不作限制</p>
</li>
<li>
<p>查找：追加 where 条件过滤掉已删除数据，且使用 wrapper.entity 生成的 where 条件会忽略该字段</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> id<span class="token punctuation">,</span>name<span class="token punctuation">,</span>deleted <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> deleted<span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>更新：追加 where 条件防止更新到已删除数据，且使用 wrapper.entity 生成的 where 条件会忽略该字段</p>
</li>
<li>
<p>删除：转变为更新</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">update</span> <span class="token keyword">user</span> <span class="token keyword">set</span> deleted<span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">and</span> deleted<span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<p>2、逻辑删除实际就是删除</p>
<p>3、支持所有数据类型(推荐使用 <code v-pre>Integer</code>,<code v-pre>Boolean</code>,<code v-pre>LocalDateTime</code>)</p>
</div>
<p><strong>逻辑删除使用步骤如下：</strong></p>
<ol>
<li>
<p>数据库中添加 <code v-pre>deleted</code> 字段</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>user<span class="token punctuation">`</span></span> <span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> <span class="token identifier"><span class="token punctuation">`</span>deleted<span class="token punctuation">`</span></span> <span class="token keyword">tinyint</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>数据库表对应实体类添加 <code v-pre>deleted</code> 属性，并使用 <code v-pre>@TableLogic</code>标明其为逻辑删除属性</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
    <span class="token annotation punctuation">@TableLogic</span>
    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token class-name">FieldFill</span><span class="token punctuation">.</span><span class="token constant">INSERT</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> deleted<span class="token punctuation">;</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>自动填充配置类<code v-pre>AutoFillConfig</code>中添加 <code v-pre>deleted</code> 属性插入操作的的默认值</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insertFill</span><span class="token punctuation">(</span><span class="token class-name">MetaObject</span> metaObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
    <span class="token comment">// 自动填充属性 deleted</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">strictInsertFill</span><span class="token punctuation">(</span>metaObject<span class="token punctuation">,</span> <span class="token string">"deleted"</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>application.yaml</code>文件中配置逻辑删除值</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token key atrule">global-config</span><span class="token punctuation">:</span>
    <span class="token key atrule">db-config</span><span class="token punctuation">:</span>
      <span class="token key atrule">logic-delete-field</span><span class="token punctuation">:</span> deleted <span class="token comment"># 全局逻辑删除的实体字段名</span>
      <span class="token key atrule">logic-delete-value</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 逻辑已删除值(默认为 1)</span>
      <span class="token key atrule">logic-not-delete-value</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token comment"># 逻辑未删除值(默认为 0)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>Mybatis-Plus 3.3.0 之后，如果配置了 <code v-pre>logic-delete-field</code>，则不需要在实体类上使用<code v-pre>@TableLogic</code>注解了</p>
</div>
</li>
<li>
<p>编写测试代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span>  <span class="token function">testLogicDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除前 <code v-pre>deleted=0</code>，删除后<code v-pre>deleted=1</code></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202281510062.png" alt="image-20220228151039966" loading="lazy"></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202281515262.png" alt="image-20220228151531171" loading="lazy"></p>
</li>
</ol>
<h3 id="乐观锁的实现—版本号机制" tabindex="-1"><a class="header-anchor" href="#乐观锁的实现—版本号机制" aria-hidden="true">#</a> 乐观锁的实现—版本号机制</h3>
<div class="custom-container tip">
<p class="custom-container-title">情景</p>
<p>假设有如下场景，有两处火车票售票点，同时读取某一趟列车车票数据库中车票余额为 X。两处售票点同时卖出一张车票，同时修改余额为 X -1写回数据库，这样就造成了实际卖出两张火车票而数据库中的记录却只少了一张。</p>
</div>
<p>产生这种情况的原因是因为两个事务读入同一数据并同时修改，其中一个事务提交的结果破坏了另一个事务提交的结果，导致其数据的修改被丢失，破坏了事务的隔离性。乐观锁的实现可以解决以上问题，而<strong>版本号机制</strong>是实现乐观锁的方式之一</p>
<div class="custom-container info">
<p class="custom-container-title">知识点</p>
<p>版本号机制的实现方式如下：</p>
<ul>
<li>取出记录时，获取当前 version</li>
<li>更新时，带上这个 version</li>
<li>执行更新时， set version = newVersion where version = oldVersion</li>
<li>如果 version 不对，就更新失败</li>
</ul>
</div>
<p>继续使用项目 mybatisplus ，使用版本号机制测试乐观锁的实现，具体步骤如下：</p>
<ol>
<li>
<p>对 <code v-pre>user</code>  表新增字段 version</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>ALTER TABLE `user` ADD COLUMN `version` INT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>对实体类 <code v-pre>User</code>新增属性 <code v-pre>version</code>，并使用 <code v-pre>@Version</code>注解来标注该字段为乐观锁字段</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token comment">//...省略</span>
    <span class="token annotation punctuation">@Version</span>
    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token class-name">FieldFill</span><span class="token punctuation">.</span><span class="token constant">UPDATE</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> version<span class="token punctuation">;</span>
    <span class="token comment">//...省略</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>自动填充配置类<code v-pre>AutoFillConfig</code>方法<code v-pre>updateFill(MetaObject)</code>中新增属性 <code v-pre>version</code>的更新时自动填充代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateFill</span><span class="token punctuation">(</span><span class="token class-name">MetaObject</span> metaObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token comment">// 自动填充属性 version</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">strictUpdateFill</span><span class="token punctuation">(</span>metaObject<span class="token punctuation">,</span> <span class="token string">"version"</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写 Mybatis-Plus 插件配置类 <code v-pre>MybatisPlusConfig</code>，添加乐观锁插件</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">"com.codinglife.mapper"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MybatisPlusInterceptor</span> interceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 乐观锁插件</span>
        interceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OptimisticLockerInnerInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> interceptor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写测试乐观锁代码并测试</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testOptimisticLocker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"codeLifeV"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 更新 user 表 ID=1 的记录的名字 </span>
    userMapper<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202280935640.png" alt="image-20220228093457486" loading="lazy"></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202280936285.png" alt="image-20220228093628200" loading="lazy"></p>
</li>
<li>
<p>修改测试代码，模拟更新数据时，当前版本号和数据库版本号不一致导致数据更新失败</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testOptimisticLocker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 拿到数据库 ID=1 的记录, 同时拿到当前记录的版本号 oldVersion = 1</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 更新该条记录的信息</span>
    user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"codeLifeV"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 模拟事务 X 对该条记录进行了修改, 并使当前数据库的版本号增 1, 此时 version = 2</span>
    <span class="token class-name">User</span> user2 <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user2<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"codeLifeVV"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    userMapper<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>user2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 当前事务更新数据, 发现 oldVersion 不等于 version</span>
    userMapper<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202281017590.png" alt="image-20220228101711490" loading="lazy"></p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202281020341.png" alt="image-20220228102022275" loading="lazy"></p>
</li>
</ol>
<h3 id="分页插件" tabindex="-1"><a class="header-anchor" href="#分页插件" aria-hidden="true">#</a> 分页插件</h3>
<p>当数据库表中的数据过多时，我们往往需要设置内容分页，MybatisPlus中集成了分页插件，具体使用步骤如下：</p>
<ol>
<li>
<p>Mybatis-Plus 插件配置类 <code v-pre>MybatisPlusConfig</code>下添加分页插件</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">"com.codinglife.mapper"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MybatisPlusInterceptor</span> interceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 省略</span>
        <span class="token comment">// 分页插件</span>
        interceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PaginationInnerInterceptor</span><span class="token punctuation">(</span><span class="token class-name">DbType</span><span class="token punctuation">.</span><span class="token constant">MYSQL</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> interceptor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>参数<code v-pre>DbType</code>为数据库类型</p>
</div>
</li>
<li>
<p>编写分页测试代码，测试方法 <code v-pre>selectPage()</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testPagePlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 根据 entity 条件, 分页查询获取全部数据</span>
    <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> page <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    userMapper<span class="token punctuation">.</span><span class="token function">selectPage</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    page<span class="token punctuation">.</span><span class="token function">getRecords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"获取分页信息: "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"总条数"</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"当前页码"</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">getCurrent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"总页码"</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">getPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"每页显示的条数"</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"是否有上一页"</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">hasPrevious</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"是否有下一页"</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>selectPage(...)</code>方法如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 根据 entity 条件，查询全部记录（并翻页）
 *
 * <span class="token keyword">@param</span> <span class="token parameter">page</span>         分页查询条件（可以为 RowBounds.DEFAULT）
 * <span class="token keyword">@param</span> <span class="token parameter">queryWrapper</span> 实体对象封装操作类（可以为 null）
 */</span>
<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">P</span> <span class="token keyword">extends</span> <span class="token class-name">IPage</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token class-name">P</span> <span class="token function">selectPage</span><span class="token punctuation">(</span><span class="token class-name">P</span> page<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写分页测试代码，测试方法 <code v-pre>selectMapsPage()</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testPagePlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 分页查询获取全部记录, 数据封装在 Map 集合中</span>
    <span class="token class-name">IPage</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span><span class="token punctuation">></span></span> page <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">IPage</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span><span class="token punctuation">></span></span> mapIPage <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectMapsPage</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    mapIPage<span class="token punctuation">.</span><span class="token function">getRecords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"获取分页信息: "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"总条数"</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"当前页码"</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">getCurrent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"总页码"</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">getPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"每页显示的条数"</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="条件构造器" tabindex="-1"><a class="header-anchor" href="#条件构造器" aria-hidden="true">#</a> 条件构造器</h2>
<p>使用条件构造器可以进行一些复杂的条件查询</p>
<p>参考官网地址：<a href="https://baomidou.com/pages/10c804/#abstractwrapper" target="_blank" rel="noopener noreferrer">条件构造器 | MyBatis-Plus (baomidou.com)<ExternalLinkIcon/></a></p>
<h2 id="代码生成器" tabindex="-1"><a class="header-anchor" href="#代码生成器" aria-hidden="true">#</a> 代码生成器</h2>
<p>使用 Mybatis-Plus 代码生成器可以自动为我们生成Controller相关类、实体类、Mapper接口和对应XML，以及Service相关类，我们只需要进行简单的配置一些规则即可。</p>
<p>创建SpringBoot项目<code v-pre>mybatisplus-generator</code>，项目的<code v-pre>groupId</code>为<code v-pre>com.codinglife</code>，<code v-pre>artifactId</code>为<code v-pre>mybatisplus-generator</code>，JDK 版本为17，演示代码生成器的使用过程：</p>
<ol>
<li>
<p>准备好需要生成代码的数据库表，此处演示使用代码生成器生成数据库<code v-pre>edu</code>下表<code v-pre>edu_teacher</code>对应的代码</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>edu_teacher<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'教师ID'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'教师姓名'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>intro<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">''</span> <span class="token keyword">COMMENT</span> <span class="token string">'教师简介'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>level<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'教师头衔 1-助教 2-讲师 3-副教授 4-教授'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>avatar<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'教师头像'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>sort<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">'0'</span> <span class="token keyword">COMMENT</span> <span class="token string">'排序'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>is_deleted<span class="token punctuation">`</span></span> <span class="token keyword">tinyint</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">'0'</span> <span class="token keyword">COMMENT</span> <span class="token string">'逻辑删除 1（true）已删除， 0（false）未删除'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>gmt_create<span class="token punctuation">`</span></span> <span class="token keyword">datetime</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'创建时间'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>gmt_modified<span class="token punctuation">`</span></span> <span class="token keyword">datetime</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'更新时间'</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>uk_name<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8mb4 <span class="token keyword">COMMENT</span><span class="token operator">=</span><span class="token string">'教师'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>pom.xml</code>文件引入相关依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--Mybatis-Plus--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis-plus-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.5.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--Mybatis-Plus 代码生成器--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis-plus-generator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.5.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- velocity 模板引擎, Mybatis Plus 代码生成器需要 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.velocity<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>velocity-engine-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--MySQL 数据库驱动--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>8.0.20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>yaml.xml</code>文件配置数据库连接</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token comment"># 数据库连接</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">1234</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/edu<span class="token punctuation">?</span>serverTimezone=UTC<span class="token important">&amp;useUnicode=true&amp;characterEncoding=utf-</span><span class="token number">8</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver

<span class="token comment"># mybatis-plus 日志</span>
<span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token key atrule">configuration</span><span class="token punctuation">:</span>
    <span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>创建代码生成器类<code v-pre>CodeGenerator</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CodeGenerator</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 全局配置 Builder
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">GlobalConfig<span class="token punctuation">.</span>Builder</span> globalConfigBuilder<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 包配置 Builder
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">PackageConfig<span class="token punctuation">.</span>Builder</span> packageConfigBuilder<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 策略配置 Builder
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">StrategyConfig<span class="token punctuation">.</span>Builder</span> strategyConfigBuilder<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 数据源配置
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">DataSourceConfig</span> <span class="token constant">DATA_SOURCE_CONFIG</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSourceConfig
            <span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span>
            <span class="token string">"jdbc:mysql://localhost:3306/edu?serverTimezone=UTC&amp;useUnicode=true&amp;characterEncoding=utf-8"</span><span class="token punctuation">,</span>
            <span class="token string">"root"</span><span class="token punctuation">,</span>
            <span class="token string">"1234"</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">CodeGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        globalConfigBuilder <span class="token operator">=</span> <span class="token function">globalConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        packageConfigBuilder <span class="token operator">=</span> <span class="token function">packageConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        strategyConfigBuilder <span class="token operator">=</span> <span class="token function">strategyConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 全局配置
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">GlobalConfig<span class="token punctuation">.</span>Builder</span> <span class="token function">globalConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">GlobalConfig<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">fileOverride</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                 <span class="token comment">//覆盖已生成文件</span>
                <span class="token punctuation">.</span><span class="token function">outputDir</span><span class="token punctuation">(</span><span class="token string">"D:\\Program Files\\workspace\\idea2\\edu\\edu-service\\edu-service-edu"</span> <span class="token operator">+</span> <span class="token string">"/src/main/java"</span><span class="token punctuation">)</span> <span class="token comment">//指定输出目录</span>
                <span class="token punctuation">.</span><span class="token function">author</span><span class="token punctuation">(</span><span class="token string">"CodingLife"</span><span class="token punctuation">)</span>           <span class="token comment">//作者名</span>
                <span class="token punctuation">.</span><span class="token function">enableSwagger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                <span class="token comment">//开启 Swagger 模式</span>
                <span class="token punctuation">.</span><span class="token function">dateType</span><span class="token punctuation">(</span><span class="token class-name">DateType</span><span class="token punctuation">.</span><span class="token constant">TIME_PACK</span><span class="token punctuation">)</span>   <span class="token comment">//时间策略</span>
                <span class="token punctuation">.</span><span class="token function">commentDate</span><span class="token punctuation">(</span><span class="token string">"yyyy-MM-dd"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//注释日期</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 包配置
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">PackageConfig<span class="token punctuation">.</span>Builder</span> <span class="token function">packageConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PackageConfig<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">parent</span><span class="token punctuation">(</span><span class="token string">"com.codinglife"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//父包名</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 策略配置
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">StrategyConfig<span class="token punctuation">.</span>Builder</span> <span class="token function">strategyConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StrategyConfig<span class="token punctuation">.</span>Builder</span> strategyConfigBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StrategyConfig<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        strategyConfigBuilder
                <span class="token punctuation">.</span><span class="token function">addInclude</span><span class="token punctuation">(</span><span class="token string">"edu_teacher"</span><span class="token punctuation">)</span>       <span class="token comment">// 设置需要生成的表名</span>
                <span class="token punctuation">.</span><span class="token function">addTablePrefix</span><span class="token punctuation">(</span><span class="token string">"edu_"</span><span class="token punctuation">,</span> <span class="token string">"is_"</span><span class="token punctuation">)</span>   <span class="token comment">// 增加过滤表前缀</span>
                <span class="token punctuation">.</span><span class="token function">enableCapitalMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">// 开启大写命名</span>
        <span class="token comment">// 实体策略配置</span>
        strategyConfigBuilder
                <span class="token punctuation">.</span><span class="token function">entityBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">enableLombok</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                 <span class="token comment">// 开启 Lombok</span>
                <span class="token punctuation">.</span><span class="token function">enableRemoveIsPrefix</span><span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment">// 开启 Boolean 类型字段移除 is 前缀</span>
                <span class="token punctuation">.</span><span class="token function">enableTableFieldAnnotation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 开启生成实体时生成字段注解</span>
                <span class="token punctuation">.</span><span class="token function">naming</span><span class="token punctuation">(</span><span class="token class-name">NamingStrategy</span><span class="token punctuation">.</span>underline_to_camel<span class="token punctuation">)</span>  <span class="token comment">// 数据库表映射到实体的命名策略, 默认下划线转驼峰命名: NamingStrategy.underline_to_camel</span>
                <span class="token punctuation">.</span><span class="token function">versionColumnName</span><span class="token punctuation">(</span><span class="token string">"version"</span><span class="token punctuation">)</span>   <span class="token comment">// 乐观锁字段名(数据库)</span>
                <span class="token punctuation">.</span><span class="token function">versionPropertyName</span><span class="token punctuation">(</span><span class="token string">"version"</span><span class="token punctuation">)</span> <span class="token comment">// 乐观锁属性名(实体)</span>
                <span class="token punctuation">.</span><span class="token function">logicDeleteColumnName</span><span class="token punctuation">(</span><span class="token string">"is_deleted"</span><span class="token punctuation">)</span>        <span class="token comment">// 逻辑删除字段名(数据库)</span>
                <span class="token punctuation">.</span><span class="token function">logicDeletePropertyName</span><span class="token punctuation">(</span><span class="token string">"deleted"</span><span class="token punctuation">)</span>         <span class="token comment">// 逻辑删除属性名(实体)</span>
                <span class="token punctuation">.</span><span class="token function">addTableFills</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Column</span><span class="token punctuation">(</span><span class="token string">"gmt_create"</span><span class="token punctuation">,</span> <span class="token class-name">FieldFill</span><span class="token punctuation">.</span><span class="token constant">INSERT</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 添加表字段填充</span>
                        <span class="token keyword">new</span> <span class="token class-name">Column</span><span class="token punctuation">(</span><span class="token string">"gmt_modified"</span><span class="token punctuation">,</span> <span class="token class-name">FieldFill</span><span class="token punctuation">.</span><span class="token constant">INSERT_UPDATE</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Service 策略配置</span>
        strategyConfigBuilder
                <span class="token punctuation">.</span><span class="token function">serviceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">formatServiceFileName</span><span class="token punctuation">(</span><span class="token string">"%sService"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// 去掉 Service 接口的首字母 I (默认)</span>
        <span class="token comment">//.formatServiceImplFileName("%sServiceImp"); // 去掉 Service 实现类的首字母 I</span>
        <span class="token keyword">return</span> strategyConfigBuilder<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">AutoGenerator</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token constant">DATA_SOURCE_CONFIG</span><span class="token punctuation">)</span>
                <span class="token comment">// 全局配置</span>
                <span class="token punctuation">.</span><span class="token function">global</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>globalConfigBuilder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token comment">// 包配置</span>
                <span class="token punctuation">.</span><span class="token function">packageInfo</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>packageConfigBuilder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token comment">// 策略配置</span>
                <span class="token punctuation">.</span><span class="token function">strategy</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>strategyConfigBuilder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token comment">// 执行</span>
                <span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>1、数据源配置 <code v-pre>DATA_SOURCE_CONFIG</code> 处修改为自己的数据库<code v-pre>url</code>、<code v-pre>username</code>和<code v-pre>password</code></p>
<p>2、全局配置方法<code v-pre>globalConfig()</code>中<code v-pre>outputDir()</code>指定生成的代码存放位置</p>
<p>3、以上代码是基于Mybatis-Plus文档 <a href="https://baomidou.com/pages/779a6e/" target="_blank" rel="noopener noreferrer">代码生成器（新） | MyBatis-Plus (baomidou.com)<ExternalLinkIcon/></a>，适用版本<code v-pre>mybatis-plus-generator 3.5.1</code> 及其以上版本，对历史版本不兼容！3.5.1 以下的请参考 <a href="https://baomidou.com/pages/d357af/" target="_blank" rel="noopener noreferrer">代码生成器旧<ExternalLinkIcon/></a></p>
<p>4、代码生成器的具体配置参数参考<a href="https://baomidou.com/pages/981406/#%E6%95%B0%E6%8D%AE%E5%BA%93%E9%85%8D%E7%BD%AE-datasourceconfig" target="_blank" rel="noopener noreferrer">代码生成器配置新 | MyBatis-Plus (baomidou.com)<ExternalLinkIcon/></a></p>
</div>
</li>
<li>
<p>编写测试代码并测试</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">MybatisplusGeneratorApplicationTest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testMybatisPlusGenarator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">CodeGenerator</span> codeGenerator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CodeGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        codeGenerator<span class="token punctuation">.</span><span class="token function">generator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>代码执行完成之后便会生成相应代码：</p>
<p>生成前：</p>
<img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202203022221812.png" width="400">
<p>生成后：</p>
<img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202203022222168.png" width="400" /></div></template>


