import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,f as r,a as e,b as i,d as s,e as d,r as n}from"./app.a00c762e.js";const p={},h=d('<ul><li><a href="#%E4%B8%80redis-%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86">一、redis 基础知识</a><ul><li><a href="#%E4%BD%BF%E7%94%A8-redis-%E5%8E%9F%E5%9B%A0redis-%E7%9A%84%E5%A5%BD%E5%A4%84">使用 redis 原因？redis 的好处？</a></li><li><a href="#redis-%E9%9B%86%E7%BE%A4">Redis 集群</a></li><li><a href="#redis-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">redis 数据类型</a></li><li><a href="#redis-%E5%92%8C-memcached-%E7%9A%84%E5%8C%BA%E5%88%AB%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E7%94%A8-memcached">redis 和 memcached 的区别？为什么不用 memcached？</a></li><li><a href="#redis-%E6%8C%81%E4%B9%85%E5%8C%96%E6%96%B9%E6%A1%88">redis 持久化方案</a></li><li><a href="#redis-%E5%BA%95%E5%B1%82%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0redis-%E7%9A%84%E9%AB%98%E5%B9%B6%E5%8F%91%E5%92%8C%E5%BF%AB%E9%80%9F%E5%8E%9F%E5%9B%A0">redis 底层如何实现，Redis 的高并发和快速原因</a></li><li><a href="#redis-%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E6%95%B0%E6%8D%AE%E7%9A%84%E5%90%8C%E6%AD%A5%E4%B8%8E%E6%9B%B4%E6%96%B0">redis 如何实现数据的同步与更新？</a></li><li><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88-redis-%E9%9C%80%E8%A6%81%E6%8A%8A%E6%89%80%E6%9C%89%E6%95%B0%E6%8D%AE%E6%94%BE%E5%88%B0%E5%86%85%E5%AD%98%E4%B8%AD">为什么 redis 需要把所有数据放到内存中？</a></li><li><a href="#redis-%E5%B8%B8%E8%A7%81%E6%80%A7%E8%83%BD%E9%97%AE%E9%A2%98%E5%92%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88">redis 常见性能问题和解决方案</a></li><li><a href="#redis-%E5%B9%B6%E5%8F%91%E7%AB%9E%E4%BA%89%E9%97%AE%E9%A2%98%E4%BB%A5%E5%8F%8A%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88">Redis 并发竞争问题以及解决方案</a></li><li><a href="#redis-%E6%95%B0%E6%8D%AE%E6%B7%98%E6%B1%B0%E7%AD%96%E7%95%A5mysql-%E9%87%8C%E6%9C%89-2000w-%E6%95%B0%E6%8D%AEredis-%E4%B8%AD%E5%8F%AA%E5%AD%98-20w-%E7%9A%84%E6%95%B0%E6%8D%AE%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AF%81-redis-%E4%B8%AD%E7%9A%84%E6%95%B0%E6%8D%AE%E9%83%BD%E6%98%AF%E7%83%AD%E7%82%B9%E6%95%B0%E6%8D%AE">redis 数据淘汰策略？mySQL 里有 2000w 数据，redis 中只存 20w 的数据，如何保证 redis 中的数据都是热点数据？</a></li><li><a href="#redis-%E9%AB%98%E7%BA%A7%E4%BA%8B%E5%8A%A1">Redis 高级事务</a></li><li><a href="#%E5%A6%82%E4%BD%95%E5%88%A4%E6%96%AD-redis-%E9%87%8C%E9%9D%A2%E7%9A%84%E7%BC%93%E5%AD%98%E6%B7%BB%E5%8A%A0%E6%88%90%E5%8A%9F%E4%BA%86">如何判断 Redis 里面的缓存添加成功了</a></li><li><a href="#redis-%E7%BC%93%E5%AD%98redis%E5%92%8C%E6%95%B0%E6%8D%AE%E5%BA%93mysql%E9%97%B4%E7%9A%84%E6%95%B0%E6%8D%AE%E4%B8%80%E8%87%B4%E6%80%A7">Redis 缓存(Redis)和数据库（MySQL）间的数据一致性</a></li><li><a href="#redis-%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF">Redis 使用场景</a></li><li><a href="#redis-cluster-%E9%9B%86%E7%BE%A4%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1">Redis-Cluster 集群负载均衡</a></li><li><a href="#%E7%BC%93%E5%AD%98%E7%A9%BF%E9%80%8F%E7%BC%93%E5%AD%98%E5%87%BB%E7%A9%BF%E5%92%8C%E7%BC%93%E5%AD%98%E9%9B%AA%E5%B4%A9">缓存穿透、缓存击穿和缓存雪崩</a></li><li><a href="#%E4%B8%80%E8%87%B4%E6%80%A7-hash-%E7%AE%97%E6%B3%95">一致性 Hash 算法</a></li><li><a href="#redis-%E4%B8%BB%E4%BB%8E%E5%A4%8D%E5%88%B6%E4%B8%8E%E5%93%A8%E5%85%B5">Redis 主从复制与哨兵</a></li></ul></li><li><a href="#activemq">ActiveMQ</a><ul><li><a href="#%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AF%81%E6%B6%88%E6%81%AF%E4%B8%8D%E8%A2%AB%E9%87%8D%E5%A4%8D%E6%B6%88%E8%B4%B9">如何保证消息不被重复消费</a></li></ul></li><li><a href="#%E4%BA%8C%E5%88%86%E5%B8%83%E5%BC%8F%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86">二、分布式基础知识</a><ul><li><a href="#%E5%88%86%E5%B8%83%E5%BC%8F%E6%A6%82%E5%BF%B5">分布式概念</a></li><li><a href="#%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81">分布式锁</a></li></ul></li></ul>',1),c=e("h1",{id:"一、redis-基础知识",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一、redis-基础知识","aria-hidden":"true"},"#"),i(" 一、redis 基础知识")],-1),E={href:"https://www.cnblogs.com/jiahaoJAVA/p/6244278.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://blog.csdn.net/guchuanyun111/article/details/52064870",target:"_blank",rel:"noopener noreferrer"},u=d(`<h2 id="redis-和-mysql-分别处理什么数据" tabindex="-1"><a class="header-anchor" href="#redis-和-mysql-分别处理什么数据" aria-hidden="true">#</a> redis 和 Mysql 分别处理什么数据</h2><p>MySQL 处理实时性数据，例如金融数据、交易数据</p><p>Redis 处理实时性要求不高的数据，例如网站最热贴排行榜，好友列表等</p><h2 id="使用-redis-原因-redis-的好处" tabindex="-1"><a class="header-anchor" href="#使用-redis-原因-redis-的好处" aria-hidden="true">#</a> 使用 redis 原因？redis 的好处？</h2><ul><li>基于 redis 的特性：</li></ul><ol><li>性能极高：Redis 是基于内存的，故此具有较高的读写频率。（能支持超过每秒 10 万次读写操作）</li><li>丰富的数据类型：Redis 可以存储键和五种不同类型的值之间的映射，键的类型只能为字符串，值支持五种数据类型：字符串、列表、集合、散列表、有序集合。</li><li>原子性：Redis 的所有操作都是原子性的，同时 Redis 还支持对几个操作全并后的原子性执行</li><li>丰富的特性：Redis 还支持发布订阅（publish/subscribe）， 通知， 键的过期时间等特性</li><li>支持数据的持久化。redis 会周期性的把更新的数据写入磁盘或者把修改操作写入追加的记录文件，并且在此基础上实现了 master-slave(主从)同步</li></ol><ul><li><p>基于项目：</p><p>首页是系统的门户，也就是系统的入口，所以首页的访问量是这个系统最大的。如果每次展示首页都从数据库中查询首页的内容信息，那么势必会对数据库造成很大的压力，所以需要使用缓存来减轻数据库压力，redis 可以较好的实现缓存</p></li></ul><p>Redis 的主要缺点是数据库容量受到物理内存的限制，不能用作海量数据的高性能读写，因此 Redis 适合的场景主要局限在较小数据量的高性能操作和运算上</p><p>Redis 是基于内存的操作，CPU 不是 Redis 的瓶颈，Redis 的瓶颈最有可能是机器内存的大小或者网络带宽。</p><h2 id="redis-集群" tabindex="-1"><a class="header-anchor" href="#redis-集群" aria-hidden="true">#</a> Redis 集群</h2><ul><li>Redis 3.0 之后开始支持集群</li><li>Redis 集群没有统一的入口，客户端连接集群的时候连接集群中的任意节点即可，集群内部是通过 ping-pong 机制互相通信的</li></ul><p>判断 Redis 集群是否挂掉方式:</p><ol><li>Redis 集群有一个投票容错机制，如果集群中超过半数的节点投票认为某个结点挂了，那么这个结点就挂了</li><li>判断 Redis 集群是否挂了：如果集群中任意一个结点挂了，而且这个结点没有从结点 slave，那么这个集群就挂了，原因是：<br> 集群里内置了 16384 个 slot（哈希槽），并且把所有的物理结点都映射到这 16384 个 slot 上（0~16383），当 Redis 集群中存放一个数据时，Redis 会先对这个 key 进行 crc16 算法，然后得到一个结果对 16384 进行求余，从而决定这个结点存储到那个结点中。所有一旦某一个节点挂了，该节点得 slot 就无法使用了。</li></ol><h2 id="redis-数据类型" tabindex="-1"><a class="header-anchor" href="#redis-数据类型" aria-hidden="true">#</a> redis 数据类型</h2><p>Redis 支持五种数据类型：string（字符串），list（列表），set（集合），hash（哈希）及 zset(sorted set：有序集合)。redis 中的数据都是字符串，redis 是单线程，不适合存储比较大的数据</p><ul><li><p>string：存储字符串、整数、浮点数</p><ol><li>设置值：<code>set key value</code></li><li>获取值：<code>get key</code></li><li>删除键值：<code>del key</code></li><li>值加一：<code>incr key</code></li><li>值减一：<code>decr key</code></li></ol></li><li><p>list：数据结构中的：双链表+队列， 可作为链表 ，从左添加元素 也可以从右添加元素</p><ol><li>从右边添加元素: <code>rpush listKey value1 value2 ... valueN</code></li><li>从左边添加元素: <code>lpush listKey value1 value2 ... valueN</code></li><li>获取指定范围内元素：<code>lrange listKey 0 -1</code>（-1 代表最后一个元素，-2 代表倒数第二个元素，以此类推）</li><li>从左边取值，删除：<code>lpop listKey</code></li><li>从右边取值，删除：<code>rpop listKey</code></li></ol></li><li><p>set：无顺序，不能重复，集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是 O(1)</p><ol><li>添加元素：<code>sadd setKey value1 value2 ... valueN</code></li><li>查询元素：<code>smembers setKey</code></li><li>删除元素：<code>srem keySet value</code></li></ol></li><li><p>hash：相当于一个 key 对应一个 map (map 中又是 key-value)</p><ol><li>设置值：<code>hset hashKey sub-key value</code></li><li>获取值：<code>hget hashKey sub-key</code></li><li>获取所有值：<code>hgetall hashKey</code></li><li>删除值：<code>hdel hashKey sub-key</code></li></ol></li><li><p>zset：有顺序，不能重复</p><ol><li>添加元素： <code>zadd key score1 member1 [score2 member2]</code></li><li>查看分数： <ol><li>从小到大：<code>zrange key 0 -1 [withscores]</code>：</li><li>从大到小：<code>zrevrange key 0 -1 [withscores]</code></li></ol></li><li>对元素 member 增加 score：<code>zincrby key score member</code></li></ol></li></ul><h2 id="redis-和-memcached-的区别-为什么不用-memcached" tabindex="-1"><a class="header-anchor" href="#redis-和-memcached-的区别-为什么不用-memcached" aria-hidden="true">#</a> redis 和 memcached 的区别？为什么不用 memcached？</h2><ol><li>数据类型：Memcached 仅支持字符串类型，而 Redis 支持五种不同的数据类型，可以更灵活地解决问题。</li><li>数据持久化：Redis 支持 RDB 快照和 AOF 日志两种持久化策略，而 Memcached 不支持持久化。</li><li>分布式：Memcached 不支持分布式，Redis Cluster 实现了分布式的支持。</li><li>内存管理机制： <ol><li>在 Redis 中，并不是所有数据都一直存储在内存中，可以将一些很久没用的 value 交换到磁盘，而 Memcached 的数据则会一直在内存中。</li><li>Memcached 将内存分割成特定长度的块来存储数据，以完全解决内存碎片的问题。但是这种方式会使得内存的利用率不高。</li></ol></li></ol><h2 id="redis-持久化方案" tabindex="-1"><a class="header-anchor" href="#redis-持久化方案" aria-hidden="true">#</a> redis 持久化方案</h2><p>Redis 支持两种持久化策略：RDB 快照和 AOF 日志，而 Memcached 不支持持久化。redis 默认开启 RDB，同时开启两个持久化方案，则按照 AOF 的持久化放案恢复数据。</p><p><strong>RDB 快照：</strong></p><p>定期将当前时刻的数据保存磁盘中，会产生一个 dump.rdb 文件。特点是会存在数据丢失，性能较好，可以用于数据备份。</p><p>触发条件：</p><ol><li><p>手动触发</p><p>调用 <code>save</code>，<code>bgsave</code> 命令。</p><ol><li><code>save</code> 命令会阻塞Redis服务器进程，直到RDB文件创建完毕为止，在Redis服务器阻塞期间，服务器不能处理任何命令请求。</li><li><code>bgsave</code> 命令会创建一个子进程，由子进程来负责创建RDB文件，父进程(即Redis主进程)则继续处理请求</li></ol></li><li><p>自动触发</p><p><code>save m n</code></p><p>自动触发最常见的情况是在配置文件中通过 <code>save m n</code> ，指定当m秒内发生n次变化时，会触发 <code>bgsave</code>。Redis的默认配置文件(Linux下为Redis根目录下的redis.conf)，可以看到如下配置信息：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>save 900 1
save 300 10
save 60 10000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>save 900 1</code> 的含义是：当时间到 900 秒时，如果 Redis 数据发生了至少1次变化，则执行 <code>bgsave</code>；<code>save 300 10</code> 和 <code>save 60 10000</code> 同理。当三个save 条件满足任意一个时，都会引起 <code>bgsave</code> 的调用。</p></li></ol><p><strong>AOF 日志:</strong></p><p>RDB 持久化是将进程数据写入文件，而 AOF 持久化(即 Append Only File 持久化)，则是将 Redis 执行的每次写命令记录到单独的日志文件中（有点像 MySQL 的 binlog）；当 Redis 重启时再次执行 AOF 文件中的命令来恢复数据。</p><p>特点是每秒保存，数据比较完整，耗费性能。</p><p>AOF 开启设置：修改 redis.conf 文件，将 appendonly 设置为 yes，默认关闭，数据存在 appendonly.aof 文件中</p><h2 id="redis-底层如何实现-redis-的高并发和快速原因" tabindex="-1"><a class="header-anchor" href="#redis-底层如何实现-redis-的高并发和快速原因" aria-hidden="true">#</a> redis 底层如何实现，Redis 的高并发和快速原因</h2><p>Redis 内部维护一个 db 数组，每个 db 都是一个数据库，默认情况下 Redis 会创建 16 个数据库。我们可以通过 select 命令来切换数据库，如 select 1 切换到数据库号为 1 的数据库。select 实现是通过修改客户端的 db 指针，通过指针指向不同的数据库来实现数据库的切换操作的。</p><p>Redis 的高并发和快速原因：</p><ol><li><p>redis 是基于内存的，内存的读写速度非常快；</p></li><li><p>redis 是单线程的，省去了很多上下文切换线程的时间，不存在加锁释放锁操作，因为不会出现因为死锁而导致的性能消耗。</p></li><li><p>redis 使用多路复用技术，Redis 使用 I/O 多路复用程序来监听多个套接字，并将到达的事件发送给文件事件分派器，分配器根据套接字产生的事件类型调用相应的事件处理器</p><p>Redis 将所有的文件事件（读、写、异常）放在一个无序链表中，通过遍历查找已经到达的时间事件，并调用相应的事件处理器。</p><p>多路指的是多个 Socket 连接，复用指的是复用一个线程。</p></li></ol><h2 id="redis-如何实现数据的同步与更新" tabindex="-1"><a class="header-anchor" href="#redis-如何实现数据的同步与更新" aria-hidden="true">#</a> redis 如何实现数据的同步与更新？</h2><p>每次在键空间读取一个键之后，服务器会更新键的 LRU 时间，用于计算键的闲置时间。如果服务器在读取一个键时发现该键已经过期，那么服务器会先删除这个过期键，然后才执行后续操作。如果有客户端使用 watch 命令监视了某个键，那么服务器在对被监视的键进行修改之后，会将这个键标记为 dirty，从而让事务注意到这个键被修改过。服务器每次修改一个键之后，都会对键计数器的值+1，这个计数器用来触发服务器的持久化操作。如果服务器开启了数据库通知功能，那么在对键进行修改之后，服务器将按配置发送相应的数据库通知。</p><h2 id="为什么-redis-需要把所有数据放到内存中" tabindex="-1"><a class="header-anchor" href="#为什么-redis-需要把所有数据放到内存中" aria-hidden="true">#</a> 为什么 redis 需要把所有数据放到内存中？</h2><p>Redis 为了达到最快的读写速度将数据都读到内存中，并通过异步的方式将数据写入磁盘。所以 redis 具有快速和数据持久化的特征。如果不将数据放在内存中，磁盘 I/O 速度为严重影响 redis 的性能。在内存越来越便宜的今天，redis 将会越来越受欢迎。 如果设置了最大使用的内存，则数据已有记录数达到内存限值后不能继续插入新值。</p><h2 id="redis-常见性能问题和解决方案" tabindex="-1"><a class="header-anchor" href="#redis-常见性能问题和解决方案" aria-hidden="true">#</a> redis 常见性能问题和解决方案</h2><ol><li>Master 最好不要做任何持久化工作，如 RDB 内存快照和 AOF 日志文件。因为 Master 写内存快照，save 命令调度 rdbSave 函数，会阻塞主线程的工作，当快照比较大时对性能影响是非常大的</li><li>如果数据比较重要，某个 Slave 开启 AOF 备份数据，策略设置为每秒同步一次</li><li>为了主从复制的速度和连接的稳定性，Master 和 Slave 最好在同一个局域网内</li><li>尽量避免在压力很大的主库上增加从库</li><li>主从复制不要用图状结构，用单向链表结构更为稳定，即：Master &lt;- Slave1 &lt;- Slave2 &lt;- Slave3...。这样的结构方便解决单点故障问题，实现 Slave 对 Master 的替换。如果 Master 挂了，可以立刻启用 Slave1 做 Master，其他不变。</li></ol><h2 id="redis-并发竞争问题以及解决方案" tabindex="-1"><a class="header-anchor" href="#redis-并发竞争问题以及解决方案" aria-hidden="true">#</a> Redis 并发竞争问题以及解决方案</h2><p>Redis 为单进程单线程模式。采用并发模式将并发访问变为串行访问，因为本身没有锁的概念，所以并不存在资源竞争问题，但是在 Jedis 客户端对 Redis 并发访问会出现连接超时、数据转化错误、阻塞以及客户端关闭连接等问题。</p><p>解决方案：</p><ol><li>客户端：对连接进行池化，同时对客户端读写 Redis 操作使用内部锁 <code>synchronized</code></li></ol><h2 id="redis-数据淘汰策略-mysql-里有-2000w-数据-redis-中只存-20w-的数据-如何保证-redis-中的数据都是热点数据" tabindex="-1"><a class="header-anchor" href="#redis-数据淘汰策略-mysql-里有-2000w-数据-redis-中只存-20w-的数据-如何保证-redis-中的数据都是热点数据" aria-hidden="true">#</a> redis 数据淘汰策略？mySQL 里有 2000w 数据，redis 中只存 20w 的数据，如何保证 redis 中的数据都是热点数据？</h2><p>可以设置内存最大使用量，当内存使用量超出时，会施行数据淘汰策略。Reids 具体有 6 种淘汰策略：</p><table><thead><tr><th style="text-align:center;">策略</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>volatile-lru</code></td><td style="text-align:center;">从已设置过期时间的数据集中挑选最近最少使用的数据淘汰</td></tr><tr><td style="text-align:center;"><code>volatile-ttl</code></td><td style="text-align:center;">从已设置过期时间的数据集中挑选将要过期的数据淘汰</td></tr><tr><td style="text-align:center;"><code>volatile-random</code></td><td style="text-align:center;">从已设置过期时间的数据集中任意选择数据淘汰</td></tr><tr><td style="text-align:center;"><code>allkeys-lru</code></td><td style="text-align:center;">从所有数据集中挑选最近最少使用的数据淘汰</td></tr><tr><td style="text-align:center;"><code>allkeys-random</code></td><td style="text-align:center;">从所有数据集中任意选择数据进行淘汰</td></tr><tr><td style="text-align:center;"><code>noeviction</code></td><td style="text-align:center;">禁止驱逐数据</td></tr></tbody></table><p>限定 Redis 占用的内存，Redis 会根据自身数据淘汰策略，留下热数据到内存。所以，计算一下 20W 数据大约占用的内存，然后设置一下 Redis 内存限制即可，并将淘汰策略为 <code>volatile-lru</code> 或者 <code>allkeys-lru</code>。</p><p>为了提高缓存命中率，保证缓存数据都是热点数据，可以修改 redis 配置文件 redis.conf，将内存最大使用量设置为热点数据占用的内存量，配置指令为 <code>maxmemory</code>，然后启用 <code>allkeys-lru</code> 淘汰策略，将最近最少使用的数据淘汰，配置指令为<code>maxmemory-policy</code></p><h2 id="redis-高级事务" tabindex="-1"><a class="header-anchor" href="#redis-高级事务" aria-hidden="true">#</a> Redis 高级事务</h2><h2 id="如何判断-redis-里面的缓存添加成功了" tabindex="-1"><a class="header-anchor" href="#如何判断-redis-里面的缓存添加成功了" aria-hidden="true">#</a> 如何判断 Redis 里面的缓存添加成功了</h2><p>添加缓存加入判断机制</p><h2 id="redis-缓存-redis-和数据库-mysql-间的数据一致性" tabindex="-1"><a class="header-anchor" href="#redis-缓存-redis-和数据库-mysql-间的数据一致性" aria-hidden="true">#</a> Redis 缓存(Redis)和数据库（MySQL）间的数据一致性</h2>`,51),A={href:"https://blog.csdn.net/weixin_45132238/article/details/93490308",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.cnblogs.com/rjzheng/p/9041659.html",target:"_blank",rel:"noopener noreferrer"},m=d('<p>不管是先写 MySQL 数据库，再删除 Redis 缓存；还是先删除缓存，再写库，都有可能出现数据不一致的情况。</p><p><strong>方案：延时双删策略+设置缓存过期时间</strong></p><p>具体做法：</p><ul><li>先删除缓存</li><li>再写数据库</li><li>休眠 500 毫秒</li><li>再次删除缓存</li></ul><p>休眠的原因是可以将休眠期间造成的脏数据再次删除。休眠时间要结合项目的读数据业务逻辑的耗时，然后写数据的休眠时间则在读数据业务逻辑的耗时基础上，加几百 ms 即可。这么做的目的，就是<strong>确保读请求结束，写请求可以删除读请求造成的缓存脏数据</strong>。</p><p>设置缓存过期时间从理论上来说，给缓存设置过期时间，是保证最终一致性的解决方案。</p><p>缺点：结合双删策略+缓存超时设置，这样最差的情况就是在超时时间内数据存在不一致，而且又增加了写请求的耗时。</p><p>出现的问题以及解决方案：</p><ol><li><p>休眠导致写请求耗时，系统吞吐量降低</p><p>解决方案：将第二次删除作为异步操作——另起一个线程异步删除。这样，写的请求就不用沉睡一段时间后了，再返回。</p></li><li><p>第二次删除，如果删除仍旧会出现数据不一致问题</p></li></ol><p>强一致性的，那么就需要悲观锁，使得一致。</p><p>同时还有 延时双写/延时双删 等策略。其实都是为了根据自身业务来进行的操作。</p><h2 id="redis-使用场景" tabindex="-1"><a class="header-anchor" href="#redis-使用场景" aria-hidden="true">#</a> Redis 使用场景</h2><p><strong>1. 计数器</strong></p><p>MySQL 等累加往往扛不住高并发，所以需要原子性操作的 redis 来统计数量，例如统计点击数。可以对 String 进行自增自减运算，从而实现计数器功能。</p><p><strong>2. 缓存</strong></p><p>将热点数据放到内存中，设置内存的最大使用量以及淘汰策略来保证缓存的命中率。</p><p><strong>3. 消息队列</strong></p><p>List 是一个双向链表，可以通过 lpop 和 lpush 写入和读取消息。 不过最好使用 Kafka、RabbitMQ 等消息中间件。</p><p>由于 redis 把数据添加到队列是返回添加元素在队列的第几位，所以可以做判断用户是第几个访问这种业务的场景。</p><p><strong>4. 分布式锁的实现</strong></p><p>在分布式场景下，无法使用单机环境下的锁来对多个节点上的进程进行同步。 可以使用 Reids 自带的 <code>SETNX</code> 命令实现分布式锁，除此之外，还可以使用官方提供的 <code>RedLock</code> 分布式锁实现。</p><p><strong>5. 其它</strong></p><p>Set 可以实现交集、并集等操作，从而实现共同好友等功能。 ZSet 可以实现有序性操作，从而实现排行榜等功能。</p><h2 id="redis-cluster-集群负载均衡" tabindex="-1"><a class="header-anchor" href="#redis-cluster-集群负载均衡" aria-hidden="true">#</a> Redis-Cluster 集群负载均衡</h2>',24),R={href:"https://blog.csdn.net/weixin_43184769/article/details/91443577#RedisCluster_25",target:"_blank",rel:"noopener noreferrer"},y=d('<p><strong>概念：</strong></p><p>Redis-Cluster 是在 Redis3.0 后推出的官方集群方案。它的实现负载均衡的原理本质上也是通过对槽位的分配。</p><p><strong>设计结构：</strong></p><p>每个节点保存对应槽位的数据和整个集群的状态，并且每个节点和其他所有节点连接。直接连接任意一个集群节点就可以和整个集群通信了。</p><p><strong>高可用：</strong></p><p>Redis-Cluster 为了保证高可用性要求每一个服务器都至少有一个或多个从服务器，主服务器提供服务，从服务器只保证数据的备份，当主服务器宕机后会自动切换到从服务器，但是如果主从都宕机了那么整个集群将无法正确的提供服务。</p><p><strong>使用 Redis-Cluster 原因：</strong></p><ol><li>主从复制不能实现高可用</li><li>高并发下，主从复制中单机的 QPS 可能无法满足业务需求</li><li>数据量的考虑，现有服务器内存不能满足业务数据的需要时，单纯向服务器添加内存不能达到要求，此时需要考虑分布式需求，把数据分布到不同服务器上</li><li>网络流量需求：业务的流量已经超过服务器的网卡的上限值，可以考虑使用分布式来进行分流</li></ol><p><strong>数据分布方式：</strong></p><ol><li>顺序分布</li><li>哈希分布，可以使用一致性哈希算法代替普通哈希</li><li>虚拟槽分区，虚拟槽分区是 Redis Cluster 采用的分区方式</li></ol><p><strong>虚拟槽分区步骤：</strong></p><ol><li>把 16384 槽按照节点数量进行平均分配，由节点进行管理</li><li>对每个 key 按照 CRC16 规则进行 hash 运算</li><li>把 hash 结果对 16383 进行取余</li><li>把余数发送给 Redis 节点</li><li>节点接收到数据，验证是否在自己管理的槽编号的范围。如果在自己管理的槽编号范围内，则把数据保存到数据槽中，然后返回执行结果；如果在自己管理的槽编号范围外，则会把数据发送给正确的节点，由正确的节点来把数据保存在对应的槽中</li></ol><p><strong>meet 操作：</strong></p><p>节点之间会相互通信，<code>meet</code> 操作是节点之间完成相互通信的基础，<code>meet</code> 操作有一定的频率和规则</p><p><strong>moved 重定向：</strong></p><ol><li>每个节点通过通信都会共享 Redis Cluster 中槽和集群中对应节点的关系</li><li>客户端向 Redis Cluster 的任意节点发送命令，接收命令的节点会根据 CRC16 规则进行 hash 运算与 16383 取余，计算自己的槽和对应节点</li><li>如果保存数据的槽被分配给当前节点，则去槽中执行命令，并把命令执行结果返回给客户端</li><li>如果保存数据的槽不在当前节点的管理范围内，则向客户端返回 moved 重定向异常</li><li>客户端接收到节点返回的结果，如果是 moved 异常，则从 moved 异常中获取目标节点的信息</li><li>客户端向目标节点发送命令，获取命令执行结果</li></ol><p>需要注意的是：客户端不会自动找到目标节点执行命令</p><p><strong>ask 重定向：</strong></p><p>概念：</p><p>在对集群进行扩容和缩容时，需要对槽及槽中数据进行迁移；当客户端向某个节点发送命令，节点向客户端返回 moved 异常，告诉客户端数据对应的槽的节点信息。如果此时正在进行集群扩展或者缩空操作，当客户端向正确的节点发送命令时，槽及槽中数据已经被迁移到别的节点了，就会返回 ask，这就是 ask 重定向机制</p><p>步骤：</p><ol><li>客户端向目标节点发送命令，目标节点中的槽已经迁移支别的节点上了，此时目标节点会返回 ask 转向给客户端</li><li>客户端向新的节点发送 Asking 命令给新的节点，然后再次向新节点发送命令</li><li>新节点执行命令，把命令执行结果返回给客户端</li></ol><p><strong>多节点命令：</strong></p><blockquote><p>Redis Cluster 不支持使用 scan 命令扫描所有节点，多节点命令就是在在所有节点上都执行一条命令，批量操作优化</p></blockquote><ol><li><p>串行 meget：</p><p>定义 for 循环，遍历所有的 key，分别去所有的 Redis 节点中获取值并进行汇总，简单，但是效率不高，需要 n 次网络时间</p></li><li><p>串行 IO：</p><p>对串行 mget 进行优化，在客户端本地做内聚，对每个 key 进行 CRC16hash，然后与 16383 取余，就可以知道哪个 key 对应的是哪个槽；</p><p>本地已经缓存了槽与节点的对应关系，然后对 key 按节点进行分组，成立子集，然后使用 pipeline 把命令发送到对应的 node，需要 nodes 次网络时间，大大减少了网络时间开销</p></li><li><p>并行 IO：</p><p>并行 IO 是对串行 IO 的一个优化，把 key 分组之后，根据节点数量启动对应的线程数，根据多线程模式并行向 node 节点请求数据，只需要 1 次网络时间</p></li><li><p>hash_tag：</p><p>将 key 进行 hash_tag 的包装，然后把 tag 用大括号括起来，保证所有的 key 只向一个 node 请求数据，这样执行类似 mget 命令只需要去一个节点获取数据即可，效率更高</p></li></ol><p><strong>故障发现：</strong></p><p>包括主观下线和客观下线</p><p>主观下线流程：</p><ol><li>节点 1 定期发送 ping 消息给节点 2</li><li>如果发送成功，代表节点 2 正常运行，节点 2 会响应 PONG 消息给节点 1，节点 1 更新与节点 2 的最后通信时间</li><li>如果发送失败，则节点 1 与节点 2 之间的通信异常判断连接，在下一个定时任务周期时，仍然会与节点 2 发送 ping 消息</li><li>如果节点 1 发现与节点 2 最后通信时间超过 node-timeout，则把节点 2 标识为 pfail 状态</li></ol><p><strong>Redis-Cluster 缺点，常见问题：</strong></p><ol><li><p>集群完整性</p><p><code>cluster-require-full-coverage</code> 默认为 yes，即是否集群中的所有节点都是在线状态且 16384 个槽都处于服务状态时，集群才会提供服务。集群中 16384 个槽全部处于服务状态，保证集群完整性</p><p>当某个节点故障或者正在故障转移时获取数据会提示：(error)CLUSTERDOWN The cluster is down</p><p>建议把 cluster-require-full-coverage 设置为 no</p></li><li><p>宽带消耗</p><p>Redis Cluster 节点之间会定期交换 Gossip 消息，以及做一些心跳检测</p><p>官方建议 Redis Cluster 节点数量不要超过 1000 个，当集群中节点数量过多时，会产生不容忽视的带宽消耗</p></li><li><p>集群倾斜</p><p>集群倾斜也就是各个节点使用的内存不一致</p></li></ol><h2 id="缓存穿透、缓存击穿和缓存雪崩" tabindex="-1"><a class="header-anchor" href="#缓存穿透、缓存击穿和缓存雪崩" aria-hidden="true">#</a> 缓存穿透、缓存击穿和缓存雪崩</h2><h2 id="一致性-hash-算法" tabindex="-1"><a class="header-anchor" href="#一致性-hash-算法" aria-hidden="true">#</a> 一致性 Hash 算法</h2>',33),b={href:"https://www.cnblogs.com/study-everyday/p/8629100.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.cnblogs.com/kenwar/p/9264856.html",target:"_blank",rel:"noopener noreferrer"},v=d('<p><strong>原因：</strong></p><p>使用普通的 Hash 算法是对服务器数量进行取模，服务器数量变动的时候，缓存的位置都需要发生变化，缓存数据需要重新 hash 来确定其存储的具体服务器，因此出现一致性 hash 算法</p><p>一致性 Hash 算法主要是考虑到分布式系统每个节点都有可能失效，并且新的节点很可能动态的增加进来的情况，保证了当系统的节点数目发生变化的时候，我们的系统仍然能够对外提供良好的服务</p><p><strong>原理：</strong></p><p>一致性 hash 算法也是通过取模的方式，只是是对 2^32 取模，一致性 Hash 算法将整个哈希值空间组织成一个虚拟的 Hash 环，范围大小为 0-2^32-1</p><p>之后通过 hash 算法对服务器的 IP 地址或其他因子进行 hash 之后在对 2^32 取模，将不同服务器映射到 hash 环 0 到 2^32-1 之间</p><p>Redis 存数据时，将数据 key 使用相同的函数 Hash 计算出哈希值，并确定此数据在环上的位置，从此位置沿环顺时针“行走”，第一台遇到的服务器就是其应该定位到的服务</p><p>为什么是 2^32：</p><p>int 的最大值最小值范围设定是因为一个 int 占 4 个字节，一个字节占 8 位，二进制中刚好是 32 位。</p><p><strong>一致性 Hash 的容错性和可扩展性：</strong></p><ol><li>如果一台服务器不可用，则受影响的数据仅仅是此服务器到其环空间中前一台服务器（即沿着逆时针方向行走遇到的第一台服务器）之间数据，其它不会受到影响</li><li>如果增加一台服务器，则受影响的数据仅仅是新服务器到其环空间中前一台服务器（即沿着逆时针方向行走遇到的第一台服务器）之间数据，其它数据也不会受到影响。</li></ol><h2 id="redis-主从复制与哨兵" tabindex="-1"><a class="header-anchor" href="#redis-主从复制与哨兵" aria-hidden="true">#</a> Redis 主从复制与哨兵</h2>',12),k={href:"https://blog.csdn.net/weixin_43184769/article/details/90580474",target:"_blank",rel:"noopener noreferrer"},_=d('<p>特点：</p><ol><li>主服务器负责处理写请求</li><li>从服务器负责处理读请求</li><li>主从服务器的数据保持一致</li></ol><p>复制分为两部分：</p><ol><li>同步：将主服务器的数据全部同步到从服务器中</li><li>命令传播：当主服务器中执行写命令时，将写命令传输一份到从服务器执行，保证一致性。</li></ol><p>同步又可以分成两个情况：</p><ol><li>首次同步：这个从服务器还没有复制过任何主服务器，或从服务器此次复制的主服务器和上一次的不同。</li><li>部分同步：处于命令传播阶段的从服务器出现了问题导致了中断，在恢复正常后自动重连进行的同步。</li></ol><p>部分同步：</p><ul><li>主从服务器的复制偏移量：主从服务器上都会维护一个变量叫复制偏移量，主服务器每发送出 N 条命令它的偏移量就会+N，从服务器每接收到 M 条命令它的偏移量也会+M</li><li>服务器 ID：  服务器 ID 是用来判断请求同步的从服务器是新来的或者是断线重连的</li></ul><p><strong>哨兵 Sentinel：</strong></p><p>Redis 的哨兵模式用于为 Redis 实现高可用，在主从分离的模型中，如果主服务器宕机了，那么哨兵将会选举主服务器下的一台从服务器升级为主服务器提供服务。</p><p>判断服务器是否下线：</p><ol><li>主观下线： Sentinel 会每隔一秒向主从服务器以及其他 Sentinel 发送 Ping 命令，如果超过指定的时间没有回复，那么该 Sentinel 就会认为该服务器下线。</li><li>客观下线： 当一个 Sentinel 判断一个服务器下线后，它为了确定是否真的下线，会向其他 Sentinel 确认是否真的下线了，如果足够多的 Sentinel 认为该服务器下线了，那么就判断该服务器客观下线了，如果没有足够的 Sentinel 同意该服务器是下线的，那么 Master 的客观下线状态会被移除。</li></ol><p>故障转移：</p><ul><li>选举领头 Sentinel：当一个 master 被认为客观下线后，监视此 master 的 sentinel 会进行协商，选出一个领头 sentinel 进行故障转移。</li><li>主从切换：选出的领头 sentinel 会对已经下线的 master 执行转移操作：</li></ul><h1 id="activemq" tabindex="-1"><a class="header-anchor" href="#activemq" aria-hidden="true">#</a> ActiveMQ</h1><h2 id="如何保证消息不被重复消费" tabindex="-1"><a class="header-anchor" href="#如何保证消息不被重复消费" aria-hidden="true">#</a> 如何保证消息不被重复消费</h2><h1 id="二、分布式基础知识" tabindex="-1"><a class="header-anchor" href="#二、分布式基础知识" aria-hidden="true">#</a> 二、分布式基础知识</h1><h2 id="分布式概念" tabindex="-1"><a class="header-anchor" href="#分布式概念" aria-hidden="true">#</a> 分布式概念</h2><p>分布式结构就是将一个完整的系统，按照业务功能，拆分成一个个独立的子系统，在分布式结构中，每个子系统就被称为“服务”。这些子系统能够独立运行在 web 容器中，它们之间通过 RPC 方式通信。</p><h2 id="分布式锁" tabindex="-1"><a class="header-anchor" href="#分布式锁" aria-hidden="true">#</a> 分布式锁</h2><p><strong>使用原因：</strong></p><p>为了保证一个方法或属性在高并发情况下的同一时间只能被同一个线程执行，在传统单体应用单机部署的情况下，可以使用Java并发处理相关的 API(如 ReentrantLock 或Synchronized)进行互斥控制。</p><p>但是，随着业务发展的需要，原单体单机部署的系统被演化成分布式集群系统后，由于分布式系统多线程、多进程并且分布在不同机器上，这将使原单机部署情况下的并发控制锁策略失效，单纯的 Java API 并不能提供分布式锁的能力。为了解决这个问题就需要一种跨 JVM 的互斥机制来控制共享资源的访问，这就是分布式锁要解决的问题。</p><p><strong>有的时候，我们需要保证一个方法在同一时间内只能被同一个线程执行，因此使用到分布式锁</strong></p>',24),x={href:"https://app.yinxiang.com/fx/b38ebbb8-5c1c-48d6-b172-770de099b756",target:"_blank",rel:"noopener noreferrer"},D=d("<p><strong>实现方式：</strong></p><ul><li><p>基于数据库实现分布式锁</p><p>在数据库中创建一个表，表中包含方法名等字段，并在方法名字段上创建唯一索引，想要执行某个方法，就使用这个方法名向表中插入数据，成功插入则获取锁，执行完成后删除对应的行数据释放锁。</p><p>缺点：锁没有失效时间，不可重入</p></li><li><p>基于 redis 实现</p><p>使用 Redis 实现分布式锁的时候，主要会使用到三个命令：</p><blockquote><p>SETNX key val</p></blockquote><p>当且仅当 key 不存在时，set 一个 key，值为 val 的字符串，返回 1；若 key 存在，则什么都不做，返回 0；类似于数据库的唯一索引。</p><blockquote><p>expire key timeout</p></blockquote><p>为 key 设置一个过期时间，单位为 second，超过这个时间锁会自动释放，避免死锁。避免数据库唯一索引实现方式中释放锁失败的问题。</p><blockquote><p>delete key</p></blockquote><p>删除 key。</p><p><strong>思想：</strong></p><ol><li>获取锁的时候，使用 setnx 加锁，并使用 expire 命令为锁添加一个过期时间，超过该时间则自动释放锁，锁的 value 值为一个随机生成的 UUID，通过此在释放锁的时候进行判断。</li><li>获取锁的时候还设置一个获取的超时时间，若超过这个时间则放弃获取锁。</li><li>释放锁的时候，通过 UUID 判断是不是该锁，若是该锁，则执行 delete 进行锁释放。</li></ol></li><li><p>基于 ZooKeeper 的实现方式</p></li></ul>",2);function C(F,S){const l=n("ExternalLinkIcon");return t(),o("div",null,[r(" TOC "),h,r(" /TOC "),c,e("p",null,[e("a",E,[i("redis 面试总结"),s(l)])]),e("p",null,[e("a",B,[i("redis 详解（三）-- 面试题"),s(l)])]),u,e("p",null,[e("a",A,[i("Redis 和 mysql 数据怎么保持数据一致的？"),s(l)])]),e("p",null,[e("a",g,[i("分布式之数据库和缓存双写一致性方案解析"),s(l)])]),m,e("p",null,[e("a",R,[i("Redis 集群的负载均衡"),s(l)])]),y,e("p",null,[e("a",b,[i("一致性哈希(hash)算法"),s(l)])]),e("p",null,[e("a",f,[i("redis 一致性 hash 算法理解"),s(l)])]),v,e("p",null,[e("a",k,[i("Redis 主从复制与哨兵（原理篇）"),s(l)])]),_,e("p",null,[e("a",x,[i("分布式锁入门以及三种实现方式"),s(l)])]),D])}const q=a(p,[["render",C],["__file","redis.html.vue"]]);export{q as default};
