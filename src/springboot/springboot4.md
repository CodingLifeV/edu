---
title: SpringBoot整合数据库
order: 4
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

### 简介

- 对于数据访问层，无论是 `SQL`(关系型数据库) 还是 `NOSQL`(非关系型数据库)，`Spring Boot` 底层都是采用 `Spring Data` 的方式进行统一处理
- Spring Boot 底层都是采用 Spring Data [Sping Data 官网](https://gitee.com/link?target=https%3A%2F%2Fspring.io%2Fprojects%2Fspring-data)的方式进行统一处理各种数据库
- 数据库相关的启动器 ：可以参考[官方文档](https://gitee.com/link?target=https%3A%2F%2Fdocs.spring.io%2Fspring-boot%2Fdocs%2F2.2.5.RELEASE%2Freference%2Fhtmlsingle%2F%23using-boot-starter)

### 整合 JDBC

#### SQL 模块引入

新建项目 `springboot-jdbc-study` ，需要引入`SQL` 模块：

![image-20211213095112962](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211213095112962.png)

项目建好之后，在`pom`文件会自动为我们导入了如下的依赖包：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jdbc</artifactId>
</dependency>
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <scope>runtime</scope>
</dependency>
```

#### yaml 配置文件连接数据库

项目建好之后，使用`yaml` 配置文件连接数据库

```yaml
spring:
  datasource:
    username: root
    password: 1234
    # ?serverTimezone=UTC解决时区的报错
    url: jdbc:mysql://localhost:3306/tmall?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8
    driver-class-name: com.mysql.cj.jdbc.Driver
```

测试代码：

```java
@SpringBootTest
class DemoApplicationTests {
    
    @Autowired
    DataSource dataSource;
    
    @Test
    void contextLoads() throws SQLException {
        //看一下默认数据源
        System.out.println(dataSource.getClass());
        //获得连接
        Connection connection = dataSource.getConnection();
        System.out.println(connection);
        //关闭连接
        connection.close();
    }
}
```

结果：可以看到默认给项目配置的数据源为 : `class com.zaxxer.hikari.HikariDataSource` 

#### JDBCTemplate

有了数据源`com.zaxxer.hikari.HikariDataSource`，便可以拿到数据库连接`java.sql.Connection`，之后就可以使用原生的 `JDBC` 语句来操作数据库

**JdbcTemplate主要提供以下几类方法：**

- `execute`方法：可以用于执行任何`SQL`语句，一般用于执行`DDL`语句
- `update`方法及`batchUpdate`方法：`update`方法用于执行新增、修改、删除等语句；`batchUpdate`方法用于执行批处理相关语句
- `query`方法及`queryForXXX`方法：用于执行查询相关语句
- `call`方法：用于执行存储过程、函数相关语句

编写一个`Controller`，注入 `jdbcTemplate`，编写测试方法进行访问测试：

```java
@RestController
public class JDBCController {

    @Autowired
    JdbcTemplate jdbcTemplate;

    // 查询数据库表 user 的所有信息
    // 直接获取数据库的东西—Map
    @GetMapping("/userList")
    public List<Map<String,Object>> userList() {
        String sql = "select * from usertest";
        List<Map<String,Object>> maps = jdbcTemplate.queryForList(sql);
        return maps;
    }

    @GetMapping("/addAddress")
    public String addUser() {
        String sql = "insert into tmall.usertest(id, username, pwd) values(3, 'Alixs', 666789)";
        jdbcTemplate.update(sql);
        return "update-ok";
    }

    @GetMapping("/updateUser/{id}")
    public String updateUser(@PathVariable("id") int id) {
        String sql = "update tmall.usertest set username  = ?,pwd = ? where id = " + id;
        //封装
        Object[] objects = new Object[2];

        objects[0] = "Maryland";
        objects[1] = 444789;

        jdbcTemplate.update(sql,objects);
        return "update-ok";
    }

    @GetMapping("/deleteUser/{id}")
    public String deleteUser(@PathVariable("id") int id) {
        String sql = "delete from tmall.usertest where id = ?";
        jdbcTemplate.update(sql,id);
        return "update-ok";
    }
}
```

数据库表`usertest`如下：

```sql
DROP TABLE IF EXISTS `usertest`;
CREATE TABLE `usertest` (
  `id` char(6) CHARACTER  NOT NULL,
  `username` varchar(50) CHARACTER  NOT NULL,
  `pwd` char(6) CHARACTER  NOT NULL,
  PRIMARY KEY (`id`) 
) ;

-- ----------------------------
-- Records of usertest
-- ----------------------------
INSERT INTO `usertest` VALUES ('1', 'Maryland', '444789');
INSERT INTO `usertest` VALUES ('3', 'Alixs', '666789');

SET FOREIGN_KEY_CHECKS = 1;
```

### 集成 Druid

- Java程序很大一部分要操作数据库，为了提高性能操作数据库的时候，又不得不使用数据库连接池
- Druid 是阿里巴巴开源平台上一个数据库连接池实现，结合了 C3P0、DBCP 等 DB 池的优点，同时加入了日志监控
- `com.alibaba.druid.pool.DruidDataSource` 基本配置参数如下：

|           **配置**            |     **缺省值**     | **说明**                                                     |
| :---------------------------: | :----------------: | :----------------------------------------------------------- |
|             name              |                    | 配置这个属性的意义在于，如果存在多个数据源，监控的时候可以通过名字来区分开来。 如果没有配置，将会生成一个名字，格式是：“DataSource-” + System.identityHashCode(this) |
|            jdbcUrl            |                    | 连接数据库的url，不同数据库不一样。例如： mysql : jdbc:mysql://10.20.153.104:3306/druid2 oracle : jdbc:oracle:thin:@10.20.149.85:1521:ocnauto |
|           username            |                    | 连接数据库的用户名                                           |
|           password            |                    | 连接数据库的密码。如果你不希望密码直接写在配置文件中，可以使用ConfigFilter。详细看这里：[https://github.com/alibaba/druid/wiki/%E4%BD%BF%E7%94%A8ConfigFilter](https://gitee.com/link?target=https%3A%2F%2Fgithub.com%2Falibaba%2Fdruid%2Fwiki%2F%E4%BD%BF%E7%94%A8ConfigFilter) |
|        driverClassName        |  根据url自动识别   | 这一项可配可不配，如果不配置druid会根据url自动识别dbType，然后选择相应的driverClassName(建议配置下) |
|          initialSize          |         0          | 初始化时建立物理连接的个数。初始化发生在显示调用init方法，或者第一次getConnection时 |
|           maxActive           |         8          | 最大连接池数量                                               |
|            maxIdle            |         8          | 已经不再使用，配置了也没效果                                 |
|            minIdle            |                    | 最小连接池数量                                               |
|            maxWait            |                    | 获取连接时最大等待时间，单位毫秒。配置了maxWait之后，缺省启用公平锁，并发效率会有所下降，如果需要可以通过配置useUnfairLock属性为true使用非公平锁。 |
|    poolPreparedStatements     |       false        | 是否缓存preparedStatement，也就是PSCache。PSCache对支持游标的数据库性能提升巨大，比如说oracle。在mysql下建议关闭。 |
|   maxOpenPreparedStatements   |         -1         | 要启用PSCache，必须配置大于0，当大于0时，poolPreparedStatements自动触发修改为true。在Druid中，不会存在Oracle下PSCache占用内存过多的问题，可以把这个数值配置大一些，比如说100 |
|        validationQuery        |                    | 用来检测连接是否有效的sql，要求是一个查询语句。如果validationQuery为null，testOnBorrow、testOnReturn、testWhileIdle都不会其作用。 |
|    validationQueryTimeout     |                    | 单位:秒，检测连接是否有效的超时时间。底层调用jdbc Statement对象的void setQueryTimeout(int seconds)方法 |
|         testOnBorrow          |        true        | 申请连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能 |
|         testOnReturn          |       false        | 归还连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能 |
|         testWhileIdle         |       false        | 建议配置为true，不影响性能，并且保证安全性。申请连接的时候检测，如果空闲时间大于timeBetweenEvictionRunsMillis，执行validationQuery检测连接是否有效 |
| timeBetweenEvictionRunsMillis |  1分钟 ( 1.0.14 )  | 有两个含义： 1) Destroy线程会检测连接的间隔时间 2) testWhileIdle的判断依据，详细看testWhileIdle属性的说明 |
|    numTestsPerEvictionRun     |                    | 不再使用，一个DruidDataSource只支持一个EvictionRun           |
|  minEvictableIdleTimeMillis   | 30分钟 ( 1.0.14 )  | 连接保持空闲而不被驱逐的最长时间                             |
|      connectionInitSqls       |                    | 物理连接初始化的时候执行的sql                                |
|        exceptionSorter        | 根据dbType自动识别 | 当数据库抛出一些不可恢复的异常时，抛弃连接                   |
|            filters            |                    | 属性类型是字符串，通过别名的方式配置扩展插件，常用的插件有： 监控统计用的filter:stat日志用的filter:log4j防御sql注入的filter:wall |
|         proxyFilters          |                    | 类型是List<com.alibaba.druid.filter.Filter>，如果同时配置了filters和proxyFilters，是组合关系，并非替换关系 |

#### 配置 Druid 数据源

- `Druid` 数据源的使用需要在`pom`文件引入依赖

  ```xml
  <!--druid数据源-->
  <dependency>
      <groupId>com.alibaba</groupId>
      <artifactId>druid</artifactId>
      <version>1.1.23</version>
  </dependency>
  ```

- 之后在`yaml`文件中指定使用该数据源

  ```yaml
  spring:
    datasource:
      username: root
      password: 1234
      # ?serverTimezone=UTC解决时区的报错
      url: jdbc:mysql://localhost:3306/tmall?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8
      driver-class-name: com.mysql.cj.jdbc.Driver
      # 指定数据源
      type: com.alibaba.druid.pool.DruidDataSource
  ```

- 配置好数据源进行测试，数据源发生改变，如下图所示：

![image-20211214170658597](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211214170658597.png)

- 可以在`yaml`文件中设置数据源连接初始化大小、最大连接数、等待时间、最小连接数等设置项

  ```yaml
  # Druid 数据源专有配置
  initialSize: 5
  minIdle: 5
  maxActive: 20
  maxWait: 60000
  timeBetweenEvictionRunsMillis: 60000
  minEvictableIdleTimeMillis: 300000
  validationQuery: SELECT 1 FROM DUAL
  testWhileIdle: true
  testOnBorrow: false
  testOnReturn: false
  poolPreparedStatements: true
  
  # 配置监控统计拦截的 filters, stat:监控统计、log4j: 日志记录、wall: 防御 sql 注入
  # 如果允许时报错  java.lang.ClassNotFoundException: org.apache.log4j.Priority
  # 则导入 log4j 依赖即可, Maven 地址 : https://mvnrepository.com/artifact/log4j/log4j
  filters: stat,wall,log4j
  maxPoolPreparedStatementPerConnectionSize: 20
  useGlobalDataSourceStat: true
  connectionProperties: druid.stat.mergeSql=true;druid.stat.slowSqlMillis=500
  ```

- `yaml`文件中配置`log4j`日志记录之后需要在`pom`文件中引入依赖：

  ```xml
  <dependency>
      <groupId>log4j</groupId>
      <artifactId>log4j</artifactId>
      <version>1.2.17</version>
  </dependency>
  ```

- `yaml`文件中配置好`Druid`的全局参数之后，需要手动绑定为 `DruidDataSource` 参数并添加到容器中，创建`config`文件夹并创建类`DruidConfig`

  ```java
  @Configuration
  public class DruidConfig {
      @ConfigurationProperties(prefix = "spring.datasource")
      @Bean
      public DataSource druidDataSource() {
          return new DruidDataSource();
      }
  }
  ```

  `@ConfigurationProperties`将`yaml`文件中配置的数据源进行绑定

#### 配置 Druid 数据源监控

`Druid` 数据源具有监控的功能，并提供了一个 `web` 界面方便用户查看，需要设置 Druid 的后台管理页面，比如登录账号、密码等，在类`DruidConfig`添加源码如下

```java
//配置 Druid 监控管理后台的 Servlet
//内置 Servlet 容器时没有 web.xml 文件，所以使用 Spring Boot 的注册 Servlet 方式
@Bean
public ServletRegistrationBean statViewServlet() {
    ServletRegistrationBean bean = new ServletRegistrationBean(new StatViewServlet(), "/druid/*");

    // 这些参数可以在 com.alibaba.druid.support.http.StatViewServlet
    // 的父类 com.alibaba.druid.support.http.ResourceServlet 中找到
    Map<String, String> initParams = new HashMap<>();
    initParams.put("loginUsername", "root"); //后台管理界面的登录账号
    initParams.put("loginPassword", "admin"); //后台管理界面的登录密码

    //后台允许谁可以访问
    //initParams.put("allow", "localhost")：表示只有本机可以访问
    //initParams.put("allow", "")：为空或者为null时，表示允许所有访问
    initParams.put("allow", "");
    //deny: Druid 后台拒绝谁访问
    //initParams.put("kuangshen", "192.168.1.20");表示禁止此ip访问

    //设置初始化参数
    bean.setInitParameters(initParams);
    return bean;
}
```

注意以上代码中`loginUsername`、`loginPassword`是`Druid`中固定参数，自己不可以随意更改

配置完毕后，我们可以选择访问：http://localhost:8080/druid/login.html ，出现以下界面

![image-20211214215345159](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211214215345159.png)

输入代码配置好的用户名和密码，进入页面

![image-20211214215444358](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211214215444358.png)

测试输入http://localhost:8080/userList ，可以看到监控信息如下：

![image-20211214215648118](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211214215648118.png)

#### 配置 Druid web 监控 filter 过滤器

在类`DruidConfig`添加源码如下：

```java
//配置 Druid 监控 之  web 监控的 filter
//WebStatFilter : 用于配置Web和Druid数据源之间的管理关联监控统计
@Bean
public FilterRegistrationBean webStatFilter() {
    FilterRegistrationBean bean = new FilterRegistrationBean();
    bean.setFilter(new WebStatFilter());

    //exclusions：设置哪些请求进行过滤排除掉，从而不进行统计
    Map<String, String> initParams = new HashMap<>();
    initParams.put("exclusions", "*.js,*.css,/druid/*,/jdbc/*");
    bean.setInitParameters(initParams);

    //"/*" 表示过滤所有请求
    bean.setUrlPatterns(Arrays.asList("/*"));
    return bean;
}
```

### 整合Mybatis

`Mybatis`官方文档：http://mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/

创建项目`springboot-mybatis-study`，`SpringBoot`整合`Mybatis`需要以下步骤

1. `pom`文件中导入 `MyBatis` 所需要的依赖

   ```xml
   <!--Mybatis-->
   <dependency>
   	<groupId>org.mybatis.spring.boot</groupId>
   	<artifactId>mybatis-spring-boot-starter</artifactId>
   	<version>2.2.0</version>
   </dependency>
   ```

2. 配置数据库连接池，可以集成 `Druid`，建议配置好之后先进行测试，测试数据库是否连接成功

3. 创建实体类User，建议使用`Lombok`

   ```java
   @Data //Lombok标签
   @AllArgsConstructor
   @NoArgsConstructor
   public class User {
       //属性名称要与数据库对应表字段名称一致(不区分大小写)
       private int id;
       private String Username;
       private int pwd;
   }
   ```

4. 创建实体类`User`对应的`Mapper`接口`UserMapper`，在该接口中定义`User`类的相关方法

   ```java
   @Mapper
   @Repository
   public interface UserMapper {
       List<User> queryUserList();
   
       User queryUserById(Integer id);
   
       int addUser(User User);
   
       int updateUser(User user);
   
       int deleteUser(int id);
   }
   ```

5. 创建接口`UserMapper`对应的映射文件`UserMapper.xml`，建议统一将映射文件放在`resources/mybatis/mapper`路径下

   ```xml
   <?xml version="1.0" encoding="UTF-8" ?>
   <!DOCTYPE mapper
           PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
           "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
   
   <mapper namespace="com.springboot.mybatis.springbootmybatis.mapper.UserMapper">
       <select id="queryUserList" resultType="User">
           select * from tmall.usertest;
       </select>
   
       <select id="queryUserById" resultType="User">
           select * from tmall.usertest where id = #{id}
       </select>
   
       <insert id="addUser" parameterType="User">
           insert into tmall.usertest(id, username, pwd) values (#{id}, #{username}, #{pwd});
       </insert>
   
       <update id="updateUser" parameterType="User">
           update tmall.usertest set username=#{username},pwd = #{pwd} where id = #{id};
       </update>
   
       <delete id="deleteUser" parameterType="int">
           delete from tmall.usertest where id = #{id}
       </delete>
   </mapper>
   ```

6. 在`yaml`文件中整合`Mybatis`，将映射文件和实体类对应起来

   ```yaml
   # 整合 Mybatis
   mybatis:
     type-aliases-package: com.springboot.mybatis.springbootmybatis.pojo
     mapper-locations: classpath:mybatis/mapper/*.xml
   ```

7. 编写相对应的`Controller`，创建`UserController`类

   ```java
   @RestController
   public class UserController {
   
       @Autowired
       private UserMapper userMapper;
   
       // 查询员工列表所有信息
       @GetMapping("/queryUserList")
       public List<User> queryUserList() {
           List<User> userList = userMapper.queryUserList();
           for (User user : userList){
               System.out.println(user);
           }
           return userList;
       }
   
       // 通过 id 查询对应员工信息
       @GetMapping("/queryUserById/{id}")
       public User queryUserById(@PathVariable("id") Integer id) {
           User user = userMapper.queryUserById(id);
           return user;
       }
   
       // 添加一个用户
       @GetMapping("/addUser")
       public String addUser() {
           userMapper.addUser(new User(7,"Jack",123456));
           return "ok";
       }
   
       // 修改一个用户
       @GetMapping("/updateUser")
       public String updateUser() {
           userMapper.updateUser(new User(7,"JackSon",111456));
           return "ok";
       }
   
       // 删除一个 User
       @GetMapping("/deleteUser")
       public String deleteUser() {
           userMapper.deleteUser(7);
           return "ok";
       }
   }
   ```

项目最终结构图如下所示：

![image-20211215161718329](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211215161718329.png)

### 整合Redis

#### 整合方式

`SpringBoot`整合`Redis`步骤如下：

1. `pom`文件中导入`xml`文件

   ```xml
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-data-redis</artifactId>
       <version>2.6.1</version>
   </dependency>
   ```

2. 编写配置文件内容

   ```yaml
   spring:
     redis:
       host: 101.43.164.126
       port: 6379
       # password:
       jedis:
         pool:
           max-active: 8    # 控制一个 pool 可分配多少个 Jedis 实例
           max-wait: -1ms   # 获取一个 pool 中 Jedis 最大的等待时间
           max-idle: 500    # pool 中最大的空闲连接数
           min-idle: 0      # pool 中保持最小的空闲可用连接数, 这部分不被回收
       lettuce:
         shutdown-timeout: 0ms
   ```

3. 使用`RedisTemplate`

   ```java
   @SpringBootTest
   class Redis02SpringbootApplicationTests {
   
       @Autowired
       private RedisTemplate redisTemplate;
   
       @Test
       void contextLoads() {
           // redisTemplate 操作不同的数据类型
           // opsForValue 操作字符串,类似 String
           // opsForList 操作 List,类似 List
           // opsForHash 操作 Hash
   
           // 除了基本的操作,常用方法都可以直接通过redisTemplate操作,如事务和基本的CRUD
   
           // 获取连接对象
           //RedisConnection connection = redisTemplate.getConnectionFactory().getConnection();
           //connection.flushDb();
           //connection.flushAll();
   
           redisTemplate.opsForValue().set("mykey","wyj");
           System.out.println(redisTemplate.opsForValue().get("mykey"));
       }
   }
   ```

4. 测试结果：

   测试结果可以连接`Redis`并输出相应内容

#### 定制RedisTemplate

当`Redis`中存`Java`对象时，如创建一个`User`实体类：

```java
@Component
public class User {
    private String username;
    private String password;
}

User user = new User();
```

实际项目开发中`redisTemplate`不会直接存储实体类对象，例如以下代码：

```java
User user = new User("wyj", "123456");
redisTemplate.opsForValue().set("key1",user);
System.out.println(redisTemplate.opsForValue().get("key1"));
```

程序运行会报错：

![image-20220103211816970](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220103211816970.png)

错误提示`User`对象需要序列化，可以自定义`RedisTemplate`实现序列化，代码如下：

创建`Redis`配置类：

```java
@Configuration
@SuppressWarnings("all")  //抑制所有类型的警告
public class RedisConfig {

    /*RedisAutoConfiguration
    public RedisTemplate<Object, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {
        RedisTemplate<Object, Object> template = new RedisTemplate();
        template.setConnectionFactory(redisConnectionFactory);
        return template;
    }*/
    @Bean
    public RedisTemplate<String,Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {

        RedisTemplate<String,Object> template = new RedisTemplate();
        template.setConnectionFactory(redisConnectionFactory);

        // 序列化配置
        // 使用 Jackson 序列化任意对象类型数据
        Jackson2JsonRedisSerializer jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer(Object.class);
        ObjectMapper om = new ObjectMapper();
        om.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
        om.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
        jackson2JsonRedisSerializer.setObjectMapper(om);

        // String 序列化
        StringRedisSerializer stringRedisSerializer = new StringRedisSerializer();
        // key 采用 String的序列化方式
        template.setKeySerializer(stringRedisSerializer);
        // hash 的 key 也采用 String 的序列化方式
        template.setHashKeySerializer(stringRedisSerializer);
        // value 序列化方式采用 jackson
        template.setValueSerializer(jackson2JsonRedisSerializer);
        // hash 的 value 序列化方式采用 jackson
        template.setHashValueSerializer(jackson2JsonRedisSerializer);
        template.afterPropertiesSet();

        return template;
    }

}
```

#### 自定义Redis工具类

使用`RedisTemplate`需要频繁调用`.opForxxx`才能执行对应的操作，该方式代码效率低下，实际开发可以将常用的公共`API`抽取出来封装成为一个工具类，然后直接使用工具类来间接操作`Redis`

参考网址：<https://www.cnblogs.com/zeng1994/p/03303c805731afc9aa9c60dbbd32a323.html>

代码如下：

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;

@Component
public final class RedisUtil {

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    // =============================common============================
    /**
     * 指定缓存失效时间
     * @param key 键
     * @param time 时间(秒)
     * @return
     */
    public boolean expire(String key, long time) {
        try {
            if (time > 0) {
                redisTemplate.expire(key, time, TimeUnit.SECONDS);
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 根据key 获取过期时间
     * @param key 键 不能为null
     * @return 时间(秒) 返回0代表为永久有效
     */
    public long getExpire(String key) {
        return redisTemplate.getExpire(key, TimeUnit.SECONDS);
    }

    /**
     * 判断key是否存在
     * @param key 键
     * @return true 存在 false不存在
     */
    public boolean hasKey(String key) {
        try {
            return redisTemplate.hasKey(key);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 删除缓存
     * @param key 可以传一个值 或多个
     */
    @SuppressWarnings("unchecked")
    public void del(String... key) {
        if (key != null && key.length > 0) {
            if (key.length == 1) {
                redisTemplate.delete(key[0]);
            } else {
                redisTemplate.delete((Collection<String>) CollectionUtils.arrayToList(key));
            }
        }
    }

    // ============================String=============================
    /**
     * 普通缓存获取
     * @param key 键
     * @return 值
     */
    public Object get(String key) {
        return key == null ? null : redisTemplate.opsForValue().get(key);
    }

    /**
     * 普通缓存放入
     * @param key 键
     * @param value 值
     * @return true成功 false失败
     */
    public boolean set(String key, Object value) {
        try {
            redisTemplate.opsForValue().set(key, value);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }

    }

    /**
     * 普通缓存放入并设置时间
     * @param key 键
     * @param value 值
     * @param time 时间(秒) time要大于0 如果time小于等于0 将设置无限期
     * @return true成功 false 失败
     */
    public boolean set(String key, Object value, long time) {
        try {
            if (time > 0) {
                redisTemplate.opsForValue().set(key, value, time, TimeUnit.SECONDS);
            } else {
                set(key, value);
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 递增
     * @param key 键
     * @param delta 要增加几(大于0)
     * @return
     */
    public long incr(String key, long delta) {
        if (delta < 0) {
            throw new RuntimeException("递增因子必须大于0");
        }
        return redisTemplate.opsForValue().increment(key, delta);
    }

    /**
     * 递减
     * @param key 键
     * @param delta 要减少几(小于0)
     * @return
     */
    public long decr(String key, long delta) {
        if (delta < 0) {
            throw new RuntimeException("递减因子必须大于0");
        }
        return redisTemplate.opsForValue().increment(key, -delta);
    }

    // ================================Map=================================
    /**
     * HashGet
     * @param key 键 不能为null
     * @param item 项 不能为null
     * @return 值
     */
    public Object hget(String key, String item) {
        return redisTemplate.opsForHash().get(key, item);
    }

    /**
     * 获取hashKey对应的所有键值
     * @param key 键
     * @return 对应的多个键值
     */
    public Map<Object, Object> hmget(String key) {
        return redisTemplate.opsForHash().entries(key);
    }

    /**
     * HashSet
     * @param key 键
     * @param map 对应多个键值
     * @return true 成功 false 失败
     */
    public boolean hmset(String key, Map<String, Object> map) {
        try {
            redisTemplate.opsForHash().putAll(key, map);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * HashSet 并设置时间
     * @param key 键
     * @param map 对应多个键值
     * @param time 时间(秒)
     * @return true成功 false失败
     */
    public boolean hmset(String key, Map<String, Object> map, long time) {
        try {
            redisTemplate.opsForHash().putAll(key, map);
            if (time > 0) {
                expire(key, time);
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 向一张hash表中放入数据,如果不存在将创建
     * @param key 键
     * @param item 项
     * @param value 值
     * @return true 成功 false失败
     */
    public boolean hset(String key, String item, Object value) {
        try {
            redisTemplate.opsForHash().put(key, item, value);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 向一张hash表中放入数据,如果不存在将创建
     * @param key 键
     * @param item 项
     * @param value 值
     * @param time 时间(秒) 注意:如果已存在的hash表有时间,这里将会替换原有的时间
     * @return true 成功 false失败
     */
    public boolean hset(String key, String item, Object value, long time) {
        try {
            redisTemplate.opsForHash().put(key, item, value);
            if (time > 0) {
                expire(key, time);
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 删除hash表中的值
     * @param key 键 不能为null
     * @param item 项 可以使多个 不能为null
     */
    public void hdel(String key, Object... item) {
        redisTemplate.opsForHash().delete(key, item);
    }

    /**
     * 判断hash表中是否有该项的值
     * @param key 键 不能为null
     * @param item 项 不能为null
     * @return true 存在 false不存在
     */
    public boolean hHasKey(String key, String item) {
        return redisTemplate.opsForHash().hasKey(key, item);
    }

    /**
     * hash递增 如果不存在,就会创建一个 并把新增后的值返回
     * @param key 键
     * @param item 项
     * @param by 要增加几(大于0)
     * @return
     */
    public double hincr(String key, String item, double by) {
        return redisTemplate.opsForHash().increment(key, item, by);
    }

    /**
     * hash递减
     * @param key 键
     * @param item 项
     * @param by 要减少记(小于0)
     * @return
     */
    public double hdecr(String key, String item, double by) {
        return redisTemplate.opsForHash().increment(key, item, -by);
    }

    // ============================set=============================
    /**
     * 根据key获取Set中的所有值
     * @param key 键
     * @return
     */
    public Set<Object> sGet(String key) {
        try {
            return redisTemplate.opsForSet().members(key);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * 根据value从一个set中查询,是否存在
     * @param key 键
     * @param value 值
     * @return true 存在 false不存在
     */
    public boolean sHasKey(String key, Object value) {
        try {
            return redisTemplate.opsForSet().isMember(key, value);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 将数据放入set缓存
     * @param key 键
     * @param values 值 可以是多个
     * @return 成功个数
     */
    public long sSet(String key, Object... values) {
        try {
            return redisTemplate.opsForSet().add(key, values);
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }

    /**
     * 将set数据放入缓存
     * @param key 键
     * @param time 时间(秒)
     * @param values 值 可以是多个
     * @return 成功个数
     */
    public long sSetAndTime(String key, long time, Object... values) {
        try {
            Long count = redisTemplate.opsForSet().add(key, values);
            if (time > 0)
                expire(key, time);
            return count;
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }

    /**
     * 获取set缓存的长度
     * @param key 键
     * @return
     */
    public long sGetSetSize(String key) {
        try {
            return redisTemplate.opsForSet().size(key);
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }

    /**
     * 移除值为value的
     * @param key 键
     * @param values 值 可以是多个
     * @return 移除的个数
     */
    public long setRemove(String key, Object... values) {
        try {
            Long count = redisTemplate.opsForSet().remove(key, values);
            return count;
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }
    // ===============================list=================================

    /**
     * 获取list缓存的内容
     * @param key 键
     * @param start 开始
     * @param end 结束 0 到 -1代表所有值
     * @return
     */
    public List<Object> lGet(String key, long start, long end) {
        try {
            return redisTemplate.opsForList().range(key, start, end);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * 获取list缓存的长度
     * @param key 键
     * @return
     */
    public long lGetListSize(String key) {
        try {
            return redisTemplate.opsForList().size(key);
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }

    /**
     * 通过索引 获取list中的值
     * @param key 键
     * @param index 索引 index>=0时， 0 表头，1 第二个元素，依次类推；index<0时，-1，表尾，-2倒数第二个元素，依次类推
     * @return
     */
    public Object lGetIndex(String key, long index) {
        try {
            return redisTemplate.opsForList().index(key, index);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * 将list放入缓存
     * @param key 键
     * @param value 值
     * @param time 时间(秒)
     * @return
     */
    public boolean lSet(String key, Object value) {
        try {
            redisTemplate.opsForList().rightPush(key, value);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 将list放入缓存
     * @param key 键
     * @param value 值
     * @param time 时间(秒)
     * @return
     */
    public boolean lSet(String key, Object value, long time) {
        try {
            redisTemplate.opsForList().rightPush(key, value);
            if (time > 0)
                expire(key, time);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 将list放入缓存
     * @param key 键
     * @param value 值
     * @param time 时间(秒)
     * @return
     */
    public boolean lSet(String key, List<Object> value) {
        try {
            redisTemplate.opsForList().rightPushAll(key, value);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 将list放入缓存
     *
     * @param key 键
     * @param value 值
     * @param time 时间(秒)
     * @return
     */
    public boolean lSet(String key, List<Object> value, long time) {
        try {
            redisTemplate.opsForList().rightPushAll(key, value);
            if (time > 0)
                expire(key, time);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 根据索引修改list中的某条数据
     * @param key 键
     * @param index 索引
     * @param value 值
     * @return
     */
    public boolean lUpdateIndex(String key, long index, Object value) {
        try {
            redisTemplate.opsForList().set(key, index, value);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 移除N个值为value
     * @param key 键
     * @param count 移除多少个
     * @param value 值
     * @return 移除的个数
     */
    public long lRemove(String key, long count, Object value) {
        try {
            Long remove = redisTemplate.opsForList().remove(key, count, value);
            return remove;
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }
}
```

#### 部分源码讲解

1. `lettuce`和`Jedis`的定位都是`Redis`的客户端实现，可以直接连接`Redis`的服务端。`springboot 2.x`后 ，z `Jedis` 被 `lettuce` 替换。

   > `Jedis`：采用的直连，多个线程操作是不安全的，需要使用`Jedis pool`连接池保证其安全，类似于`BIO`模式
   >
   > `lettuce`：采用`netty`方式连接，实例可以在多个线程中共享，不存在线程不安全的情况，类似于`NIO`模式

2. `SpringBoot`整合一个组件时，一般都会有一个自动配置类`XxxAutoConfiguration`，并且对应一个配置属性类`XxxProperties`，`RedisAutoConfiguration`类部分源码如下：

   ![image-20220103204352992](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220103204352992.png)

   `RedisAutoConfiguration`类中存在两个Bean对象：

   - `RedisTemplate`
   - ``StringRedisTemplate`

   通过`RedisTemplate`和`StringRedisTemplate`对象可以分别操作`Redis`和`Redis`中的`String`数据类型。在`RedisProperties`中，说明了配置文件需要编写的内容：

   ![image-20220103204736745](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220103204736745.png)

3. `RedisTemplate`类内部实现了对实体类对象的序列化方式：

   ![image-20220103214413587](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220103214413587.png)

   默认的序列化方式为`JDK`序列器：

   ![image-20220103214812245](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220103214812245.png)

   `RedisSerializer`提供了多种序列化方案，可以在自定义RedisTemplate中设置：

   ![image-20220103215027555](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20220103215027555.png)
