---
title: SpringBoot与分布式入门
order: 9
category:
  - SpringBoot
tag:
  - SpringBoot
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
copyright: false
footer: MIT Licensed  <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">浙ICP备2022028662号-1</a> | Copyright © 2022-present <a href="https://github.com/CodingLifeVV" target="_blank">CodingLifeVV</a> </p> 内容创作不易，引用请注明出处，网站已备案，切勿侵权
---


### 分布式概述

分布式系统是由一组通过网络进行通信、为了完成共同的任务而协调工作的计算机节点组成的系统。分布式系统的出现是为了用廉价的、普通的机器完成单个计算机无法完成的计算、存储任务。其目的是**利用更多的机器，处理更多的数据**。

首先需要明确的是，只有当单个节点的处理能力无法满足日益增长的计算、存储任务的时候，且硬件的提升（加内存、加磁盘、使用更好的`CPU`）高昂到得不偿失的时候，应用程序也不能进一步优化的时候，我们才需要考虑分布式系统。因为，分布式系统要解决的问题本身就是和单机系统一样的，而由于分布式系统多节点、通过网络通信的拓扑结构，会引入很多单机系统没有的问题，为了解决这些问题又会引入更多的机制、协议，带来更多的问题。

**分布式与集群的区别**：

- 分布式：不同的业务模块部署在不同的服务器上或者同一个业务模块分拆多个子业务，部署在不同的服务器上，解决高并发的问题
- 集群：同一个业务部署在多台机器上，提高系统可用性

### CAP理论

**概述：**

`CAP`理论是说对于分布式数据存储，最多只能同时满足一致性（`C`，`Consistency`）、可用性（`A`， `Availability`）、分区容错性（P，`Partition Tolerance`）中的两者。

- 一致性：是指对于每一次读操作，要么都能够读到最新写入的数据，要么错误
- 可用性：是指对于每一次请求，都能够得到一个及时的、非错的响应，但是不保证请求的结果是基于最新写入的数据
- 分区容错性：是指由于节点之间的网络问题，即使一些消息对包或者延迟，整个系统能继续提供服务（提供一致性或者可用性）

**适用场景：**

>  在分布式系统中，围绕着`CAP`理论，主要关注点就是复制，一致性，容错性

1. 复制：保证数据高可用性

   为了保证系统的高可用和高可靠性，通过复制的方式，让数据在系统中存储多个副本。以服务实例多副本为例，当一个服务发生异常时，客户端就直接调用其他正常的副本。

   ![image-20220106085408294](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106085408294.png)

2. 一致性

   在数据的复制中，由于存在多个数据副本，就会存在主数据与副本数据一致性的问题。在同一份数据的副本中，一般有一个副本为主副本，其他的备副本。在数据的复制过程中，复制的方式分为两种分别如下：

   - 强同步复制，数据的写操作需要同步到主副本和所有的备副本，并且全部写入成功后，才返回成功状态。这样，当系统出现异常时，切换到其他任何一个备份副本时，数据是一致的。但是，强同步复制性能不好，而且可用性比较差。如果，在复制过程中，如果某个备份节点出现故障，这时，会阻塞数据的正常写服务。
   - 异步复制，当数据写入操作成功后，当数据成功复制到主副本时，甚至还没复制时，写操作就返回成功状态。这样，异步复制的性别比较好，但是，当主备出现故障时可能出现数据丢失

3. 容错性

   分布式系统中，集群的规模越大发生错误的概率就也大。一般，分布式系统发生异常时，都能够自动容错，保证系统的高可用

### RPC

`RPC`（`Remote Procedure  Call`）是指远程过程调用，是一种进程间通信方式，他是一种技术的思想，而不是规范。它允许程序调用另一个地址空间（通常是共享网络的另一台机器上）的过程或函数，而不用程序员显式编码这个远程调用的细节。即程序员无论是调用本地的还是远程的函数，本质上编写的调用代码基本相同。

也就是说两台服务器A，B，一个应用部署在A服务器上，想要调用B服务器上应用提供的函数/方法，由于不在一个内存空间，不能直接调用，需要通过网络来表达调用的语义和传达调用的数据。为什么要用RPC呢？就是无法在一个进程内，甚至一个计算机内通过本地调用的方式完成的需求，比如不同的系统间的通讯，甚至不同的组织间的通讯，由于计算能力需要横向扩展，需要在多台机器组成的集群上部署应用。RPC就是要像调用本地的函数一样去调远程函数。

**RPC基本原理：**

核心模块：通讯，序列化

![image-20220106094701589](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106094701589.png)

![image-20220106102044853](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106102044853.png)

参考文章：

<https://www.jianshu.com/p/2accc2840a1b>

<https://www.jianshu.com/p/b0343bfd216e>

### Dubbo概述

#### Dubbo产生背景

`Dubbo`官方文档：<https://dubbo.apache.org/zh/>

互联网的发展过程中，随着流量的增大，常规的垂直应用架构已无法应对应用场景，架构就发生了演变：

- 单一的应用架构：网站流量很小，只需一个应用，将所有功能都部署在一起
- 应用和数据库单独部署
-  应用和数据库集群部署
- 数据库压力变大，读写分离
- 使用缓存技术加快速度
- 数据库分库分表
- 应用分为不同的类型拆分

当应用架构发展到此阶段时，应用与应用之间的关系会变得十分复杂，随之出现以下几个问题：

- 当服务越来越多时，服务 `URL` 配置管理变得非常困难，`F5` 硬件负载均衡器的单点压力也越来越大
-  当进一步发展，服务间依赖关系变得错踪复杂，甚至分不清哪个应用要在哪个应用之前启动，架构师都不能完整的描述应用的架构关系
- 接着，服务的调用量越来越大，服务的容量问题就暴露出来，这个服务需要多少机器支撑？什么时候该加机器？

为了解决上述由于架构的演变所产生的问题几个问题，于是，`Dubbo` 随之产生。

#### Dubbo技术架构

`Dubbo`服务架构如下图所示：

![image-20220106091629679](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106091629679.png)

**节点角色说明:**

| 节点      | 角色说明                                                     |
| :-------- | :----------------------------------------------------------- |
| Provider  | **暴露服务的服务提供方**，服务提供者在启动时，向注册中心注册自己提供的服务 |
| Consumer  | **调用远程服务的服务消费方**，服务消费者在启动时，向注册中心订阅自己所需的服务，服务消费者，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用 |
| Registry  | **服务注册与发现的注册中心**，注册中心返回服务提供者地址列表给消费者，如果有变更，注册中心将基于长连接推送变更数据给消费者 |
| Monitor   | 统计服务的调用次数和调用时间的监控中心                       |
| Container | 服务运行容器                                                 |

类似**生产者-消费者**模型，在这种模型上，加上了**注册中心和监控中心**，用于管理提供方提供的`URL`，以及管理整个过程，**流程如下**：

- 启动容器，加载，运行服务提供者
- 服务提供者在启动时，在注册中心**发布注册**自己提供的服务
- 服务消费者在启动时，在注册中心**订阅**自己所需的服务
- 注册中心返回服务提供者地址列表给消费者，如果有变更，注册中心将基于长连接推送变更数据给消费者
- 服务消费者，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用
- 服务消费者和提供者，在内存中累计调用次数和调用时间，定时每分钟发送一次统计数据到监控中心

**`Zookeeper`是`Dubbo`推荐的注册中心**

### Zookeeper下载与安装

`Zookeeper`是`Dubbo`推荐的注册中心，`Windows`下安装流程如下：

1. 官网：<https://zookeeper.apache.org/releases.html>下载`bin.tar.gz`压缩包解压，经过编译的可以直接解压使用

2. 进入解压目录conf文件夹，复制`zoo_sample.cfg`副本并重新命名为`zoo.cfg`

   ![image-20220106145208296](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106145208296.png)

3.  以管理员身份运行`/bin/zkServer.cmd` 

   > 初次运行可能报错，在/bin文件夹下打开`zkServer.cmd`末尾添加`pause`启动，观察报错原因并处理

   ![image-20220106145535342](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106145535342.png)

   > 添加`pause`指令仍然闪退，可能由于`JDK`版本过低，建议下载低版本`Zookeeper`，实测JDK1.8 `Zookeeper 3.5.9`可用

4. 修改`zoo.cfg`配置文件

   `zookeeper 3.5`之后有个内嵌的管理控制台是通过`Jetty`启动，会占用 8080 端口，需要修改配置文件：

   ```apl
   admin.serverPort=8888
   ```

   ![image-20220105113449621](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220105113449621.png)`zoo.cfg`配置文件分析：

   ```apl
   tickTime=2000  # Zookeeper 中最小的时间单位长度(ms)
   
   initLimit=10  # follower 节点启动后与 leader 节点完成数据同步的时间
   
   syncLimit=5 # leader 节点和 follower 节点进行心跳检测的最大延时时间
   
   dataDir=/tmp/zookeeper  # 表示 Zookeeper 服务器存储快照文件的目录
   
   dataLogDir # 表示配置 Zookeeper事务日志的存储路径, 默认指定在 dataDir 目录下 
   
   clientPort # 表示客户端和服务端建立连接的端口号： 2181
   ```

   ![image-20220105102005854](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220105102005854.png)

5. 启动cli.cmd测试

   ![image-20220105101911556](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220105101911556.png)

###  安装dubbo-admin

`dubbo-admin`是`Dubbo RPC`框架的管理端，可以对注册的服务(`provider`)和服务调用方(`comsumer`)进行服务治理，包括路由、监控、配置等功能，**可以对注册到`zookeeper`注册中心的服务或服务消费者进行管理**。安装流程如下：

1. 下载解压，`dubbo-admin`安装地址：<https://github.com/apache/dubbo-admin/tree/master>

   > 旧版本下载`git`命令： `git clone -b master.0.2.0 https://github.com/apache/dubbo-admin.git`

2. 修改 `dubbo-admin\src\main\resources \application.properties` 指定`Zookeeper`地址

   ```properties
   server.port=7001
   spring.velocity.cache=false
   spring.velocity.charset=UTF-8
   spring.velocity.layout-url=/templates/default.vm
   spring.messages.fallback-to-system-locale=false
   spring.messages.basename=i18n/message
   spring.root.password=root
   spring.guest.password=guest
   
   dubbo.registry.address=zookeeper://127.0.0.1:2181
   ```

   ![image-20220106152516905](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106152516905.png)

   > 旧版本`dubbo-admin`启动端口号为7001，新版本为8080，新版本同时需要修改启动端口号

3. 在项目目录下窗口打包`dubbo-admin`

   ```
   mvn clean package -Dmaven.test.skip=true
   ```

   ![image-20220106153130974](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106153130974.png)

4. 打开`Zookeeper`服务，执行`dubbo-admin\target` 下的`dubbo-admin-0.0.1-SNAPSHOT.jar`

   ```
   java -jar dubbo-admin-0.0.1-SNAPSHOT.jar
   ```

5. 测试，访问<http://localhost:7001/>，输入登录账户和密码，默认都为root

   ![image-20220106153509959](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106153509959.png)

### SpringBoot整合Dubbo+Zookeeper

`SpringBoot`整合`Dubbo`+`Zookeeper`流程如下：

1. `idea`创建一个空项目`dubbo-zookeeper`，空项目中分别创建两个`Mudules` -`Springboot`应用：`provider-server`、`consumer-server`：

   ![image-20220106153838158](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106153838158.png)

   ![image-20220106154117713](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220106154117713.png)

2. 编写服务提供者代码并测试，移步[服务提供者](#_link_2nd)  

3. 编写服务消费者代码并测试，移步[服务消费者](#_link_3rd)

#### <a id=_link_2nd>服务提供者</a>

**将服务提供者注册到注册中心，需要整合Dubbo和Zookeeper包**，服务提供者代码实现如下（举例卖票服务）：

1. 编写接口及其实现类

   ```java
   public interface TicketService {
       public String getTicket();
   }
   
   @Component  
   public class TicketServiceImpl implements TicketService {
       @Override
       public String getTicket() {
           return "服务商提供卖票服务";
       }
   }
   ```

2. 导入相关依赖包：

   ```xml
   <!-- Dubbo整合SpringBoot依赖包 dubbo-springboot-->
   <dependency>
       <groupId>org.apache.dubbo</groupId>
       <artifactId>dubbo-spring-boot-starter</artifactId>
       <version>2.7.3</version>
   </dependency>
   
   <!-- Zookeeper服务端依赖包 zkclient-->
   <dependency>
       <groupId>com.github.sgroschupf</groupId>
       <artifactId>zkclient</artifactId>
       <version>0.1</version>
   </dependency>
   
   <!-- 引入新版Zookeeper依赖包时, 需要解决日志冲突, 剔除日志依赖 -->
   <dependency>
       <groupId>org.apache.curator</groupId>
       <artifactId>curator-framework</artifactId>
       <version>2.12.0</version>
   </dependency>
   <dependency>
       <groupId>org.apache.curator</groupId>
       <artifactId>curator-recipes</artifactId>
       <version>2.12.0</version>
   </dependency>
   <dependency>
       <groupId>org.apache.zookeeper</groupId>
       <artifactId>zookeeper</artifactId>
       <version>3.4.14</version>
       <!--排除这个slf4j-log4j12-->
       <exclusions>
           <exclusion>
               <groupId>org.slf4j</groupId>
               <artifactId>slf4j-log4j12</artifactId>
           </exclusion>
       </exclusions>
   </dependency>
   
   ```

3. 配置文件`application.properties`中配置`Dubbo`相关属性

   ```properties
   # SpringBoot 启动端口
   server.port=8081
   
   # 当前应用名字
   dubbo.application.name=provider-server
   # 注册中心地址
   dubbo.registry.address=zookeeper://127.0.0.1:2181
   # 扫描指定包下服务
   dubbo.scan.base-packages=com.wyj.service
   
   # dubbo 默认端口是20880,设置端口为-1表示 Dubbo 自动扫描并使用可用端口(从20880开始递增),避免端口冲突的问题
   dubbo.protocol.port=-1
   ```

4. 对服务实现类`TicketServiceImpl`配置服务注解`@Service`

   ```java
   @Service    // 被注解的类可以被扫描到, 在项目一启动就自动注册到注册中心
   @Component  // 使用 Dubbo 后尽量不要用 Service 注解
   public class TicketServiceImpl implements TicketService {
       @Override
       public String getTicket() {
           return "服务商提供卖票服务";
       }
   }
   ```

   > `@Service` 是`org.apache.dubbo.config.annotation.Service`下的注解，启动应用，**Dubbo就会扫描指定的包下带有@Service注解的服务，将它发布在指定的注册中心中**

5. 启动测试，在`dubbo-admin`控制台下观察注册信息：

   ![image-20220107093712151](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220107093712151.png)

   ![image-20220107093754881](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220107093754881.png)

#### <a id=_link_3rd>服务消费者</a>

启动服务消费者应用，需要去注册中心订阅服务，代码如下：

1. 导入相关依赖，和服务提供者`provider-server`模块依赖包一样

2. 配置文件`application.properties`中配置`Dubbo`相关属性

   ```properties
   # SpringBoot 启动端口
   server.port=8082
   
   # 当前应用名
   dubbo.application.name=consumer-server
   # 注册中心地址
   dubbo.registry.address=zookeeper://127.0.0.1:2181
   ```

3. 将需要订阅的服务的接口`TicketService`拿过来，要求路径、名字和服务提供者定义的一样

   ![image-20220107111413396](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220107111413396.png)

   > 如果不使用`Dubbo`+`Zookeeper`，实现以上功能需要将服务提供者的接口打包，然后用`pom`文件导入，这里只需要通过注册中心把服务提供者的接口拿过来

4. 编写消费者代码

   ```java
   // 订阅注册中心的服务, 使用买票的服务
   @Service
   public class UserService {
   
       // 想拿到 provider-server 提供票的服务 getTicket(), 要去注册中心拿到服务
       // 使用 @Reference 注解订阅注册中心的服务
       @Reference
       TicketService ticket;
   
       public void buyTicket() {
           String tic = ticket.getTicket();
           System.out.println("到注册中心" + tic);
       }
   
   }
   ```
   
   > `@Service` 是`org.springframework.stereotype.Service`下的注解
   
5. 启动服务提供者`Module`

6. 编写服务消费者测试代码，启动服务消费者`Module`，测试

   ```java
   @SpringBootTest
   class ConsumerServerApplicationTests {
   
       @Autowired
       UserService userService;
   
       @Test
       void contextLoads() {
           userService.buyTicket();
       }
   
   }
   ```

   输出结果：

   <img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220108125858662.png" align='left' alt="image-20220108125858662" style="zoom:70%;" />
   
   启动`dubbo-admin`观察情况：
   
   ![image-20220108131207319](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220108131207319.png)
   
   
   
   





## 常见SpringBoot项目错误

### maven打包异常

```text
Failed to execute goal org.apache.maven.plugins:maven-surefire-plugin:2.22.2
```

`pom`文件指定`skipTests`为`true`，跳过单测：

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>2.22.2</version>
            <configuration>
                <skipTests>true</skipTests>
            </configuration>
        </plugin>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-resources-plugin</artifactId>
            <version>3.1.0</version>
        </plugin>  
    </plugins>
</build>
```































