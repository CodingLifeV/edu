<template><div><!-- TOC -->
<ul>
<li><a href="#%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F">设计模式</a>
<ul>
<li><a href="#%E4%B8%80uml%E7%B1%BB%E5%9B%BE">一、UML类图</a>
<ul>
<li><a href="#1-%E6%B3%9B%E5%8C%96%E5%85%B3%E7%B3%BB">1. 泛化关系</a></li>
<li><a href="#2-%E5%AE%9E%E7%8E%B0%E5%85%B3%E7%B3%BB">2. 实现关系</a></li>
<li><a href="#3-%E4%BE%9D%E8%B5%96%E5%85%B3%E7%B3%BB">3. 依赖关系</a></li>
<li><a href="#4-%E8%81%9A%E5%90%88%E5%85%B3%E7%B3%BB">4. 聚合关系</a></li>
<li><a href="#5-%E5%85%B3%E8%81%94%E5%85%B3%E7%B3%BB">5. 关联关系</a></li>
</ul>
</li>
<li><a href="#%E4%BA%8C%E5%88%9B%E5%BB%BA%E5%9E%8B%E6%A8%A1%E5%BC%8F">二、创建型模式</a>
<ul>
<li><a href="#1-%E7%AE%80%E5%8D%95%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F">1. 简单工厂模式</a></li>
<li><a href="#2-%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F"><strong>2. 工厂方法模式</strong></a></li>
<li><a href="#3-%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F"><strong>3. 抽象工厂模式</strong></a></li>
<li><a href="#4-%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F"><strong>4. 单例模式</strong></a></li>
</ul>
</li>
<li><a href="#%E4%B8%89%E7%BB%93%E6%9E%84%E5%9E%8B%E6%A8%A1%E5%BC%8F">三、结构型模式</a>
<ul>
<li><a href="#1-%E9%80%82%E9%85%8D%E5%99%A8%E6%A8%A1%E5%BC%8F"><strong>1. 适配器模式</strong></a></li>
<li><a href="#2-%E8%A3%85%E9%A5%B0%E6%A8%A1%E5%BC%8F"><strong>2. 装饰模式</strong></a></li>
<li><a href="#3-%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F"><strong>3. 代理模式</strong></a></li>
</ul>
</li>
<li><a href="#%E5%9B%9B%E8%A1%8C%E4%B8%BA%E5%9E%8B%E6%A8%A1%E5%BC%8F">四、行为型模式</a>
<ul>
<li><a href="#1-%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F"><strong>1. 策略模式</strong></a></li>
<li><a href="#2-%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F"><strong>2. 观察者模式</strong></a></li>
</ul>
</li>
</ul>
</li>
</ul>
<!-- /TOC -->
<h1 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h1>
<p><a href="https://www.cnblogs.com/java-my-life/default.html?page=2" target="_blank" rel="noopener noreferrer">参考，有具体代码<ExternalLinkIcon/></a></p>
<p><a href="https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/proxy.html" target="_blank" rel="noopener noreferrer">Graphic Design Patterns<ExternalLinkIcon/></a></p>
<h2 id="一、uml类图" tabindex="-1"><a class="header-anchor" href="#一、uml类图" aria-hidden="true">#</a> 一、UML类图</h2>
<h3 id="_1-泛化关系" tabindex="-1"><a class="header-anchor" href="#_1-泛化关系" aria-hidden="true">#</a> 1. 泛化关系</h3>
<p>代码中，泛化关系表现为继承非抽象类。泛化关系用一条带空心箭头的直接表示，如下图表示A继承自B：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131235970.png" alt="image-20230120131235970" loading="lazy"></p>
<h3 id="_2-实现关系" tabindex="-1"><a class="header-anchor" href="#_2-实现关系" aria-hidden="true">#</a> 2. 实现关系</h3>
<p>代码中，实现关系表现为继承抽象类。实现关系用一条带空心箭头的虚线表示，如下图表示小汽车实现车：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131256196.png" alt="image-20230120131256196" loading="lazy"></p>
<h3 id="_3-依赖关系" tabindex="-1"><a class="header-anchor" href="#_3-依赖关系" aria-hidden="true">#</a> 3. 依赖关系</h3>
<p>依赖关系是用一套带箭头的虚线表示的，他描述一个对象在运行期间会用到另一个对象的关系，如下图表示A依赖于B：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131313051.png" alt="image-20230120131313051" loading="lazy"></p>
<h3 id="_4-聚合关系" tabindex="-1"><a class="header-anchor" href="#_4-聚合关系" aria-hidden="true">#</a> 4. 聚合关系</h3>
<p>聚合关系用一条带空心菱形箭头的直线表示，表示整体由部分构成的语义，如下图表示A聚合到B上：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131327563.png" alt="image-20230120131327563" loading="lazy"></p>
<h3 id="_5-关联关系" tabindex="-1"><a class="header-anchor" href="#_5-关联关系" aria-hidden="true">#</a> 5. 关联关系</h3>
<p>关联关系是用一条直线表示的，它描述不同类的对象之间的结构关系。在最终代码中，关联对象通常是以成员变量的形式实现的。如下图，表示A知道B，但 B不知道A：</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131341585.png" alt="image-20230120131341585" loading="lazy"></p>
<h2 id="二、创建型模式" tabindex="-1"><a class="header-anchor" href="#二、创建型模式" aria-hidden="true">#</a> 二、创建型模式</h2>
<h3 id="_1-简单工厂模式" tabindex="-1"><a class="header-anchor" href="#_1-简单工厂模式" aria-hidden="true">#</a> 1. 简单工厂模式</h3>
<p><strong>模式动机：</strong></p>
<p>多个类实现了一个基类，如果希望使用这些类的时候，不需要知道这些类的具体名字，只需要提供一个可以表示这个类的参数，并提供一个调用方便的方法，把该参数传入到相应的方法即可返回一个相应的具体类。</p>
<p><strong>定义：</strong></p>
<p>简单工厂模式中，可以根据参数的不同返回不同类的实例。简单工厂模式专门定义一个工厂类来负责创建其他类的实例，被创建的实例通常都具有共同的父类。</p>
<p><strong>模式结构：</strong></p>
<ul>
<li>Factory：工厂角色</li>
<li>Product：抽象产品角色</li>
<li>ConcreteProduct：具体产品角色</li>
</ul>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131356626.png" alt="image-20230120131356626" loading="lazy"></p>
<p>图中<code v-pre>&lt;&lt;abstract&gt;&gt;</code> 可改为 <code v-pre>&lt;&lt;interface&gt;&gt;</code></p>
<h3 id="_2-工厂方法模式" tabindex="-1"><a class="header-anchor" href="#_2-工厂方法模式" aria-hidden="true">#</a> <strong>2. 工厂方法模式</strong></h3>
<p><strong>模式动机：</strong></p>
<p>不在设计一个工厂类来统一负责所有产品类的创建，而是把具体产品类的创建过程交给专门的工厂子类去完成，定义了抽象的工厂类以及具体的工厂类。这种方式可以在不修改具体工厂类的情况下引进新的产品，更加符合”开闭原则“</p>
<p><strong>定义：</strong></p>
<p>工厂方法模式中，工厂父类负责定义创建产品对象的公共接口，而工厂子类则负责生成具体的产品对象，这样做的目的是将产品类的实例化操作延迟到工厂子类中完成，即通过工厂子类来确定究竟应该实例化哪一个具体产品类。</p>
<p><strong>模式结构：</strong></p>
<ul>
<li>Product：抽象产品</li>
<li>ConcreteProduct：具体产品</li>
<li>Factory：抽象工厂</li>
<li>ConcreteFactory：具体工厂</li>
</ul>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131411367.png" alt="image-20230120131411367" loading="lazy"></p>
<h3 id="_3-抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#_3-抽象工厂模式" aria-hidden="true">#</a> <strong>3. 抽象工厂模式</strong></h3>
<p><strong>模式动机：</strong></p>
<ul>
<li>
<p>有时候我们需要一个工厂可以提供多个产品对象，而不是单一的产品对象。</p>
<ul>
<li>产品等级结构：产品等级结构即产品的继承结构</li>
<li>产品族：在抽象工厂模式中，产品族是指由同一个工厂生产的，位于不同产品等级结构中的一组产品</li>
</ul>
</li>
<li>
<p>当系统所提供的工厂所需生产的具体产品并不是一个简单的对象，而是多个位于不同产品等级结构中属于不同类型的具体产品时需要使用抽象工厂模式</p>
</li>
<li>
<p>抽象工厂模式与工厂方法模式最大的区别在于，工厂方法模式针对的是一个产品等级结构，而抽象工厂模式则需要面对多个产品等级结构，</p>
</li>
</ul>
<p><strong>定义：</strong></p>
<p>提供一个创建一系列相关或相互依赖对象的接口，而无须指定它们具体的类。</p>
<p><strong>模式结构：</strong></p>
<ul>
<li>AbstractFactory：抽象工厂</li>
<li>ConcreteFactory：具体工厂</li>
<li>AbstractProduct：抽象产品</li>
<li>Product：具体产品</li>
</ul>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131425827.png" alt="image-20230120131425827" loading="lazy"></p>
<h3 id="_4-单例模式" tabindex="-1"><a class="header-anchor" href="#_4-单例模式" aria-hidden="true">#</a> <strong>4. 单例模式</strong></h3>
<p><strong>模式动机：</strong></p>
<p>对于系统中的某些类来说，只有一个实例很重要。如何保证一个类只有一个实例并且这个实例易于被访问呢？定义一个全局变量可以确保对象随时都可以被访问，但不能防止我们实例化多个对象。</p>
<p>一个更好的解决办法是让类自身负责保存它的唯一实例。</p>
<p><strong>定义：</strong></p>
<p>单例模式确保某一个类只有一个实例，而且自行实例化并向整个系统提供这个实例，这个类称为单例类，它提供全局访问的方法。</p>
<p><strong>模式结构：</strong></p>
<ul>
<li>
<p>Singleton：单例</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131440882.png" alt="image-20230120131440882" loading="lazy"></p>
<p>代码实现如下：</p>
<ol>
<li>
<p>双重检查</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
    <span class="token comment">//volatile</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token class-name">Singleton</span> singleton <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>singleton <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//synchronized</span>
            <span class="token keyword">synchronized</span><span class="token punctuation">(</span><span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>singleton <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    singleton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> singleton<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>静态内部类法。在jdk1.5版本前，双重检查锁形式的单例模式是无法保证线程安全的</p>
<p>由于编译器优化，在实际执行的时候可能与我们编写的顺序不同。编译器只保证程序执行结果与源代码相同，却不保证实际指令的顺序与源代码相同。这在单线程看起来没什么问题，然而一旦引入多线程，这种乱序就可能导致严重问题。volatile的第二层语义是禁止指令重排序优化，可以从语义上解决这个问题，但是很不幸，禁止指令重排优化这条语义直到jdk1.5以后才能正确工作。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Holder</span> <span class="token punctuation">{</span>
         <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> singleton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         
    <span class="token punctuation">}</span>
    
    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Holder</span><span class="token punctuation">.</span>singleton<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</li>
</ul>
<p><a href="https://www.cnblogs.com/andy-zhou/p/5363585.html" target="_blank" rel="noopener noreferrer">你真的会写单例模式吗-Java实现<ExternalLinkIcon/></a></p>
<h2 id="三、结构型模式" tabindex="-1"><a class="header-anchor" href="#三、结构型模式" aria-hidden="true">#</a> 三、结构型模式</h2>
<h3 id="_1-适配器模式" tabindex="-1"><a class="header-anchor" href="#_1-适配器模式" aria-hidden="true">#</a> <strong>1. 适配器模式</strong></h3>
<p><strong>模式动机：</strong></p>
<p>客户端可以通过目标类的接口访问它所提供的服务，有时，现有的类它所提供的接口不一定是客户类所期望的，现有的接口需要转化为客户类期望的接口</p>
<p><strong>定义：</strong></p>
<p>将一个接口转换成客户希望的另一个接口，适配器模式使接口不兼容的那些类可以一起工作，其别名为包装器(Wrapper)</p>
<p><strong>模式结构：</strong></p>
<p>适配器模式包含如下角色：</p>
<ul>
<li>Target：目标抽象类</li>
<li>Adapter：适配器类</li>
<li>Adaptee：适配者类</li>
<li>Client：客户类</li>
</ul>
<ol>
<li>
<p>对象适配器</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131503822.png" alt="image-20230120131503822" loading="lazy"></p>
</li>
<li>
<p>类适配器</p>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131525178.png" alt="image-20230120131525178" loading="lazy"></p>
</li>
</ol>
<h3 id="_2-装饰模式" tabindex="-1"><a class="header-anchor" href="#_2-装饰模式" aria-hidden="true">#</a> <strong>2. 装饰模式</strong></h3>
<p><strong>模式动机：</strong></p>
<p>实现给一个类或对象增加行为，装饰模式以对客户透明的方式动态地给一个对象附加上更多的责任，换言之，客户端并不会觉得对象在装饰前和装饰后有什么不同。装饰模式可以在不需要创造更多子类的情况下，将对象的功能加以扩展。</p>
<p><strong>定义：</strong></p>
<p>动态地给一个对象增加一些额外的职责(Responsibility)，就增加对象功能来说，装饰模式比生成子类实现更为灵活。其别名也可以称为包装器(Wrapper)，与适配器模式的别名相同，但它们适用于不同的场合。</p>
<p><strong>模式结构：</strong></p>
<ul>
<li>Component: 抽象构件</li>
<li>ConcreteComponent: 具体构件</li>
<li>Decorator: 抽象装饰类</li>
<li>ConcreteDecorator: 具体装饰类</li>
</ul>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131546284.png" alt="image-20230120131546284" loading="lazy"></p>
<h3 id="_3-代理模式" tabindex="-1"><a class="header-anchor" href="#_3-代理模式" aria-hidden="true">#</a> <strong>3. 代理模式</strong></h3>
<p><strong>模式动机：</strong></p>
<p>通过引入一个新的对象（如小图片和远程代理对象）来实现对真实对象的操作或者将新的对象作为真实对象的一个替身，这种实现机制即为代理模式，通过引入代理对象来间接访问一个对象，这就是代理模式的模式动机。</p>
<p><strong>定义：</strong></p>
<p>给某一个对象提供一个代 理，并由代理对象控制对原对象的引用。</p>
<p><strong>模式结构：</strong></p>
<ul>
<li>Subject（AbstractObject）: 抽象主题角色</li>
<li>Proxy（ProxyObject）: 代理主题角色</li>
<li>RealSubject: 真实主题角色</li>
</ul>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131602906.png" alt="image-20230120131602906" loading="lazy"></p>
<h2 id="四、行为型模式" tabindex="-1"><a class="header-anchor" href="#四、行为型模式" aria-hidden="true">#</a> 四、行为型模式</h2>
<h3 id="_1-策略模式" tabindex="-1"><a class="header-anchor" href="#_1-策略模式" aria-hidden="true">#</a> <strong>1. 策略模式</strong></h3>
<p><strong>模式动机：</strong></p>
<p>完成一项任务，往往可以有多种不同的方式，每一种方式称为一个策略，我们可以根据环境或者条件的不同选择不同的策略来完成该项任务。</p>
<p>在软件开发中也常常遇到类似的情况，实现某一个功能有多个途径，此时可以使用一种设计模式来使得系统可以灵活地选择解决途径，也能够方便地增加新的解决途径</p>
<p><strong>定义：</strong></p>
<p>定义一系列算法，将每一个算法封装起来，并让它们可以相互替换。策略模式让算法独立于使用它的客户而变化</p>
<p><strong>模式结构：</strong></p>
<ul>
<li>Context: 环境类，持有一个Strategy的引用</li>
<li>Strategy: 抽象策略类</li>
<li>ConcreteStrategy: 具体策略类</li>
</ul>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131620691.png" alt="image-20230120131620691" loading="lazy"></p>
<h3 id="_2-观察者模式" tabindex="-1"><a class="header-anchor" href="#_2-观察者模式" aria-hidden="true">#</a> <strong>2. 观察者模式</strong></h3>
<p><strong>模式动机：</strong></p>
<p>建立一种对象与对象之间的依赖关系，一个对象发生改变时将自动通知其他对象，其他对象将相应做出反应。在此，发生改变的对象称为观察目标，而被通知的对象称为观察者，一个观察目标可以对应多个观察者，而且这些观察者之间没有相互联系，可以根据需要增加和删除观察者，使得系统更易于扩展，这就是观察者模式的模式动机。</p>
<p><strong>定义：</strong></p>
<p>观察者模式(Observer Pattern)：定义对象间的一种一对多依赖关系，使得每当一个对象状态发生改变时，其相关依赖对象皆得到通知并被自动更新。观察者模式又叫做发布-订阅模式。</p>
<p><strong>模式结构：</strong></p>
<ul>
<li>Subject: 目标，把所有对观察者对象的引用保存在一个聚集（比如ArrayList对象）里</li>
<li>ConcreteSubject: 具体目标（具体被观察者）</li>
<li>Observer: 观察者</li>
<li>ConcreteObserver: 具体观察者</li>
</ul>
<p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131638231.png" alt="image-20230120131638231" loading="lazy"></p>
</div></template>


