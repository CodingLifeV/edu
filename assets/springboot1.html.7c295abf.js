import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.d388c1e6.js";const t={},p=e(`<h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><p>初次创建<code>SpringBoot</code>项目之后，在<code>src/main/resources/</code>目录下存在配置文件 <code>application.properties</code>，一般不会使用，删掉创建 <code>application.yaml</code>文件</p><blockquote><p><code>yaml</code>：专门用来写配置文件的语言，可以写普通的键值对、对象和数组，对空格的要求及其严格，一个空格表示一个层级关系，可以注入到配置类中</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">## 普通的key-value</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-yaml-文件给实体类赋值" tabindex="-1"><a class="header-anchor" href="#使用-yaml-文件给实体类赋值" aria-hidden="true">#</a> 使用 yaml 文件给实体类赋值</h3><p>构建实体类 <code>Person</code> 和 <code>Dog</code> 类, 使用 <code>@Value</code> 可以为实体类的属性赋值, 如下 <code>Dog</code> 类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;旺柴&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> happy<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> birth<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> maps<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> lists<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Dog</span> dog<span class="token punctuation">;</span>
    
    <span class="token comment">//省略构造器、getter、setter方法</span>
    <span class="token comment">//......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>yaml</code> 文件对<code>Person</code>类进行赋值(不使用<code>@Value</code>) :</p><ul><li>需要对 <code>Person</code> 类添加 <code>@ConfigurationProperties</code> 标签并与 <code>yaml</code> 文件中的 <code>person</code> 进行绑定</li><li><code>@ConfigurationProperties</code>: 将配置文件中的每一个属性的值, 映射到这个组件中</li><li>参数 <code>prefix = &quot;person&quot; </code>: 将配置文件中的 <code>person</code> 下面的属性一一对应</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;person&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> happy<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> birth<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> maps<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> lists<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Dog</span> dog<span class="token punctuation">;</span>
    
    <span class="token comment">//省略构造器、getter、setter方法</span>
    <span class="token comment">//......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>yaml</code> 文件:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">person</span><span class="token punctuation">:</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试输出:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Person{name=&#39;wyj&#39;, age=18, happy=true, birth=Sat Dec 12 00:00:00 CST 2020, maps={k1=v1, k2=v2}, lists=[music, girl, sport], dog=Dog{name=&#39;wangchai&#39;, age=3}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>拓展:</p><ul><li>也可以使用 <code>@ProPertySource</code> 来加载指定的配置文件</li><li><code>yaml</code> 文件中可以使用占位符号 <code>\${}</code> 随机生成内容</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">dog</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> wangchai_$<span class="token punctuation">{</span>person.hello<span class="token punctuation">:</span>hello<span class="token punctuation">}</span>
    <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试输出:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dog=Dog{name=&#39;wangchai_hello&#39;, age=3}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><code>yaml</code><strong>和</strong><code>@ConfigurationProperties</code></strong> :</p><ul><li>配置 <code>yaml</code> 和 <code>@ConfigurationProperties</code> 都可以获取到值,推荐 <code>yaml</code></li><li>某个业务中, 只需要获取某个配置文件中的某个值, 可以使用 <code>@Value</code></li><li>针对 <code>JavaBean</code> 来和配置文件进行映射, 使用 <code>yaml</code> 配置</li></ul><h3 id="jsr303校验" tabindex="-1"><a class="header-anchor" href="#jsr303校验" aria-hidden="true">#</a> JSR303校验</h3><p><strong><code>JSR303</code>校验</strong>: 用来进行数据校验</p><p>若上述代码中类 <code>Person</code> 中的属性 <code>name</code> 需要输入邮箱格式, 则可以在类 <code>Person</code> 上加 <code>@Validated</code>, 在 <code>name</code> 属性上加上校验注解 <code>@Email()</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Validated</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Email</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;用户名格式错误,请输入邮箱格式&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> happy<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> birth<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> maps<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> lists<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Dog</span> dog<span class="token punctuation">;</span>
    
    <span class="token comment">//省略构造器、getter、setter方法</span>
    <span class="token comment">//......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yaml 文件:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">person</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> wyj@qq.com
  
  <span class="token comment">#省略其它属性</span>
  <span class="token comment">#......</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用的校验注解包含:</p><table><thead><tr><th>注解名称</th><th>功能</th></tr></thead><tbody><tr><td>@Null</td><td>检查该字段是否为空</td></tr><tr><td>@NotNull</td><td>不能为空</td></tr><tr><td>@NotEmpty</td><td>不能为空, 多用于检查 list 是否 size 为 0</td></tr><tr><td>@Max</td><td>该字段的值只能小于或等于该值</td></tr><tr><td>@Min</td><td>该字段的值只能大于或者等于改值</td></tr><tr><td>@Past</td><td>检查该字段的日期是在过去</td></tr><tr><td>@Future</td><td>检查该字段的日期是将来的日期</td></tr><tr><td>@Eamil</td><td>检查是否为一个有效的邮箱</td></tr><tr><td>@Size(min =, max = )</td><td>检查该字段的 size 是否在 min 和 max 之间, 可以是字符串、数组、集合、Map等</td></tr><tr><td>@Pattern</td><td>被注解的元素必须是指定的正则表达式</td></tr></tbody></table><p><strong>以上代码在 SpringBoot-demo 项目中</strong></p><h3 id="多环境配置及配置文件位置" tabindex="-1"><a class="header-anchor" href="#多环境配置及配置文件位置" aria-hidden="true">#</a> 多环境配置及配置文件位置</h3><p><code>yaml</code> 文件可以写在</p><ol><li><code>file:./config</code> : 项目根目录下 ( 项目名称下 ) 的 config 文件夹下</li><li><code>file:./</code> : 项目根目录</li><li><code>classpath:/config</code> : 类路径 ( java 文件夹下或 resources 文件夹下) 下的 config 文件夹下</li><li><code>classpath:/</code> : 类路径下</li></ol><p>优先级逐渐降低</p><p>通过 <code>yaml</code> 配置文件进行多环境配置, 如下:</p><p><code>application.yaml</code>:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
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
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试代码在 SpringBoot-demo1 项目中</strong></p>`,38),l=[p];function c(i,o){return s(),a("div",null,l)}const r=n(t,[["render",c],["__file","springboot1.html.vue"]]);export{r as default};
