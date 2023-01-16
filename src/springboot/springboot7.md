---
title: SpringBoot整合Swagger
order: 7
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


### Swagger简介

`Swagger`是一个规范和完整的框架，用于生成、描述、调用和可视化 `RESTful` 风格的 `Web` 服务；总体目标是使客户端和文件系统作为服务器以同样的速度来更新；文件的方法，参数和模型紧密集成到服务器端的代码，允许`API`来始终保持同步。主要用来：

- 接口文档在线自动生成
- 功能测试

`Swagger`是一组开源项目，其中主要要项目如下：

- `Swagger-tools`：提供各种与`Swagger`进行集成和交互的工具。例如模式检验、`Swagger 1.2`文档转换成`Swagger 2.0`文档等功能
- `Swagger-core`：用于`Java/Scala`的的`Swagger`实现。与`JAX-RS`(`Jersey`、`Resteasy`、`CXF`...)、`Servlets`和`Play`框架进行集成
- `Swagger-js`：用于`JavaScript`的`Swagger`实现
- `Swagger-node-express`：`Swagger`模块，用于`node.js`的`Express web`应用框架
- `Swagger-ui`：一个无依赖的`HTML`、`JS`和`CSS`集合，可以为`Swagger`兼容`API`动态生成优雅文档
- `Swagger-codegen`：一个模板驱动引擎，通过分析用户`Swagger`资源声明以各种语言生成客户端代码

### SpringBoot集成Swagger

创建新的`SpringBoot`项目`springboot-swagger-first`，集成`Swagger`，步骤如下：

1. `pom`文件添加`Swagger`依赖，需要使用到`Springfox-swagger2`、springfox-swagger-ui两个`jar`包

   ```xml
   <!--Swagger-->
   <dependency>
       <groupId>io.springfox</groupId>
       <artifactId>springfox-swagger2</artifactId>
       <version>2.9.2</version>
   </dependency>
   
   <dependency>
       <groupId>io.springfox</groupId>
       <artifactId>springfox-swagger-ui</artifactId>
       <version>2.9.2</version>
   </dependency>
   ```

   注意：

   - 要求`JDK1.8+`，否则`swagger2`无法运行
   - `Swagger`依赖要求`2.9.2`版本之前

2. 编写一个简单的`controller`

   ```java
   @Controller
   public class HelloController {
   
       @RequestMapping("/hello")
       @ResponseBody
       public String hello() {
           return "Hello, Swagger";
       }
   }
   ```

3. 编写`Swagger`配置类`SwaggerConfig`

   ```java
   @Configuration    // 配置类
   @EnableSwagger2   // 开启 swagger2 自动配置
   public class SwaggerConfig {
   }
   ```

4. 访问测试：http://localhost:8080/swagger-ui.html

   `Swagger 3.0.0`版本访问：http://localhost:8080/swagger-ui/index.html

   出现异常信息：`Failed to execute goal org.apache.maven.plugins:maven-surefire-plugin:2.22.2:test (default-test) on project springboot-swagger-first: There are test failures.`

### 集成Swagger可能存在的问题

上述`SpringBoot`集成`Swagger`方式，可能会出现以下错误：

```text
Error starting ApplicationContext. To display the conditions report re-run your application with 'debug' enabled.
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
```

提取关键错误信息：

```text
Error starting ApplicationContext. To display the conditions report re-run your application with 'debug' enabled.
...
Caused by: java.lang.NullPointerException: null
```

原因是在`springboot2.6.0`中将`SpringMVC` 默认路径匹配策略从`AntPathMatcher` 更改为`PathPatternParser`，导致出错。可以在启动类上加上`@EnableWebMvc`注解或者在配置中切换为原先的`AntPathMatcher`：`spring.mvc.pathmatch.matching-strategy=ant_path_matcher`

```java
@SpringBootApplication
@EnableWebMvc
public class SpringbootSwaggerFirstApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringbootSwaggerFirstApplication.class, args);
    }
}
```

加上以上配置后启动就不报错了，但是访问http://localhost:8080/swagger-ui/index.html报`404`

解决办法：把原来的`swagger2`和`swagger-ui`依赖删掉，改成`spring-boot-starter`依赖：

```xml
<dependency>
	<groupId>io.springfox</groupId>
	<artifactId>springfox-boot-starter</artifactId>
	<version>3.0.0</version>
</dependency>
```

![image-20211229154414504](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211229154414504.png)

### 配置Swagger

`Swagger`的实例`Bean`是一个`Docket`对象，所以通过配置`Docket`实例来配置`Swagger`，步骤如下：

1. `SwaggerConfig`配置类生成`Docket`实例

   ```java
   @Bean
   public Docket docket() {
       return new Docket(DocumentationType.SWAGGER_2);
   }
   ```

2. 通过`apiInfo()`方法配置文档信息

   ```java
   // 配置文档信息
   public ApiInfo apiInfo() {
       // contact 联系人信息
       Contact contact = new Contact("联系人名字", "http://xxx.xxx.com/联系人访问链接", "联系人邮箱"); 
       return new ApiInfo(
           "Swagger学习", // 标题
           "学习演示如何配置Swagger", // 描述
           "v1.0", // 版本
           "http://terms.service.url/组织链接", // 组织链接
           contact, // 联系人信息
           "Apach 2.0 许可", // 许可
           "许可链接", // 许可连接
           new ArrayList<>() // 扩展
       );
   }
   ```

3. 修改`docket()`方法，`Docket` 实例关联`apiInfo()`

   ```java
   @Bean
   public Docket docket() {
       return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo());
   }
   ```

最终测试结果如下：

![image-20211229160906753](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211229160906753.png)

部分源码解析：

```java
public Docket(DocumentationType documentationType) {
  this.documentationType = documentationType;
}
```

```java
public class DocumentationType extends SimplePluginMetadata {
  public static final DocumentationType SWAGGER_12 = new DocumentationType("swagger", "1.2");
  public static final DocumentationType SWAGGER_2 = new DocumentationType("swagger", "2.0");
  public static final DocumentationType OAS_30 = new DocumentationType("openApi", "3.0");
  // ...
}
```

```java
public ApiInfo(String title, String description, String version, String termsOfServiceUrl, Contact contact, String license, String licenseUrl, Collection<VendorExtension> vendorExtensions) {
    this.title = title;
    this.description = description;
    this.version = version;
    this.termsOfServiceUrl = termsOfServiceUrl;
    this.contact = contact;
    this.license = license;
    this.licenseUrl = licenseUrl;
    this.vendorExtensions = new ArrayList(vendorExtensions);
}
```

```java
public Contact(String name, String url, String email) {
    this.name = name;
    this.url = url;
    this.email = email;
}
```

### 配置扫描接口

`Swagger`可以指定配置需要扫描的接口，步骤如下：

1. 使用`select()`方法配置需要扫描的接口

   ```java
   @Bean
   public Docket docket() {
       return new Docket(DocumentationType.SWAGGER_2).
           apiInfo(apiInfo()).
           select().
   		// 通过 .select() 方法去配置扫描接口, RequestHandlerSelectors 配置如何扫描接口
           apis(RequestHandlerSelectors.basePackage("com.swagger.first.controller")).
           build();
   }
   ```

2. 测试，发现`Swagger`仅仅扫描了包路径`com.swagger.first.controller`下的内容

   ![image-20211229165140626](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211229165140626.png)

3. 除了通过包路径配置扫描接口外，还可以通过配置其他方式扫描接口，配置方式如下：

   ```java
   @Bean
   public Docket docket() {
       return new Docket(DocumentationType.SWAGGER_2).
           apiInfo(apiInfo()).
           select().
           // 通过 .select() 方法去配置扫描接口, RequestHandlerSelectors 配置如何扫描接口
           apis(RequestHandlerSelectors.basePackage("com.swagger.first.controller")).
           // apis(RequestHandlerSelectors.any()). // 扫描所有, 项目中的所有接口都会被扫描到
           // apis(RequestHandlerSelectors.none()). // 不扫描接口
           // 通过类上的注解扫描, Controller.class : 只扫描有 @Controller 注解的类
           // apis(RequestHandlerSelectors.withClassAnnotation(Controller.class)).
           // 通过方法上的注解扫描, GetMapping.class : 只扫描 get 请求, 方法上有注解 @GetMapping()
           // apis(RequestHandlerSelectors.withMethodAnnotation(GetMapping.class)).
           build();
   }
   ```

4. 可以配置接口扫描过滤：

   ```java
   @Bean
   public Docket docket() {
       return new Docket(DocumentationType.SWAGGER_2).
           apiInfo(apiInfo()).
           select().
           // 配置通过 path 过滤, 即这里只扫描请求以 /hello 开头的接口
           paths(PathSelectors.ant("/hello/**")).
           build();
   }
   
   // path 过滤 : paths(PathSelectors.ant("/hello/**")), HelloController 可以被扫描到
   @Controller
   public class HelloController {
   
       @RequestMapping("/hello")
       @ResponseBody
       public String hello() {
           return "Hello, Swagger";
       }
   }
   ```

   如果修改为：

   ```java
   paths(PathSelectors.ant("/wyj/**"))
   ```

   由于代码中没有`/wyj`请求，因此扫描不到任何接口信息：

   ![image-20211229171818976](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211229171818976.png)

   `PathSelectors`常用方法有：

   ```java
   any() // 任何请求都扫描
   none() // 任何请求都不扫描
   regex(final String pathRegex) // 通过正则表达式控制
   ant(final String antPattern) // 通过ant()控制
   ```

### 配置Swagger开关

当项目在开发环境`dev`和测试环境`test`时，需要开启`swagger`，项目发布环境`pro`不需要显示`swagger`，可以通过配置`swagger`开关来实现，步骤如下：

1. 通过`enable()`方法配置是否启用`swagger`，如果是`false`，`swagger`将不能在浏览器中访问

   ```java
   @Bean
   public Docket docket() {
       return new Docket(DocumentationType.SWAGGER_2).
           apiInfo(apiInfo()).
           // 配置是否启用 swagger, 如果是 false, 浏览器将无法访问
           enable(false).
           select().
           apis(RequestHandlerSelectors.basePackage("com.swagger.first.controller")).
           build();
   }
   ```

2. 测试

   ![image-20211229172351726](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211229172351726.png)

3. 调用`Docket`方法`docket(Environment environment)` 方法

   ```java
   @Bean
   public Docket docket(Environment environment) {
   
       // 设置项目处于哪些环境时, 需要开启 swagger
       // Profiles.of("dev", "test") 处于 dev test 环境 开启 swagger
       Profiles of = Profiles.of("dev", "test");
       // 判断当前项目所处环境, 如果为 dev test 环境, 返回 true
       // 通过 enable() 接收此参数判断并决定是否显示
       boolean b = environment.acceptsProfiles(of);
   
       return new Docket(DocumentationType.SWAGGER_2).
               apiInfo(apiInfo()).
               enable(b).
               select().
               apis(RequestHandlerSelectors.basePackage("com.swagger.first.controller")).
               build();
   }
   ```

4. 为每一个测试环境写一个`yaml`文件

   `dev`环境`application-dev.yaml`：

   ```yaml
   server:
     port: 8081
   ```

   `test`环境`application-test.yaml`：

   ```yaml
   server:
     port: 8082
   ```

   `pro`环境`application-pro.yaml`：

   ```yaml
   server:
     port: 8080
   ```

5. 测试

   在`application.yaml`中激活`dev`环境：

   ```yaml
   # 激活 dev 环境
   spring:
     profiles:
       active: dev
   ```

   访问http://localhost:8081/swagger-ui/index.html，发现开启了`swagger`，结果如下：

   ![image-20211230093534012](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211230093534012.png)

   使用`pro`环境测试，发现`swagger`关闭：

   ![image-20211230093653564](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211230093653564.png)

### 配置API分组

如果多人协同开发一个项目，不同的开发者负责不同的接口，可以使用`Docket`中`groupName(groupName)`进行分组，创建多个`Docket`实例（每个实例代表一个分组）即可，流程如下：

1. Swagger默认分组：

   ![image-20211230094031359](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211230094031359.png)

2. 使用`groupName`修改分组名字：

   ```java
   @Bean
   public Docket docket(Environment environment) {
   
   	// ...
       return new Docket(DocumentationType.SWAGGER_2).
               apiInfo(apiInfo()).
               groupName("王宇").
               // ...
   }
   ```

   测试：

   ![image-20211230094247348](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211230094247348.png)

3. 创建多个分组，为每一个分组创建一个`Docket`实例即可：

   ```java
   @Bean
   public Docket docket1(Environment environment) {
       return new Docket(DocumentationType.SWAGGER_2).
               apiInfo(apiInfo()).
               groupName("张宇");
   }
   
   @Bean
   public Docket docket2(Environment environment) {
       return new Docket(DocumentationType.SWAGGER_2).
               apiInfo(apiInfo()).
               groupName("刘宇");
   }
   ```

   测试结果：

   ![image-20211230095335202](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211230095335202.png)

### 常用注解

`Swagger`的所有注解定义在`io.swagger.annotations`包下，常用注解如下：

| `Swagger`注解                                            | 简单说明                                                 |
| :------------------------------------------------------- | -------------------------------------------------------- |
| `@Api(tags = "xxx模块说明")`                             | 作用在模块类上                                           |
| `@ApiOperation("xxx接口说明")`                           | 作用在接口方法上                                         |
| `@ApiModel("xxxPOJO说明")`                               | 作用在模型类上：如`VO`、`BO`                             |
| `@ApiModelProperty(value = "xxx属性说明",hidden = true)` | 作用在类方法和属性上，`hidden`设置为`true`可以隐藏该属性 |
| `@ApiParam("xxx参数说明")`                               | 作用在参数、方法和字段上，类似`@ApiModelProperty`        |

测试如下：

1. 编写`User`实体类和接口`HelloController`相关方法（这里的接口表示一个`controller`类）

   ```java
   @Controller
   public class HelloController {
   
       @GetMapping("/hello")
       @ResponseBody
       public String hello() {
           return "Hello, Swagger";
       }
   
       // 只要接口中返回值中存在实体类, 就会被扫描到 Swagger 中
       @PostMapping("/user")
       public User user() {
           return new User();
       }
   
       @ApiOperation("Hello2控制接口")
       @GetMapping("/hello2")
       public String hello2(@ApiParam("用户名") String username) {
           return "hello" + username;
       }
   
   }
   ```

   ```java
   @Api
   @ApiModel("用户实体类-User")
   public class User {
       @ApiModelProperty("用户名")
       private String username;
       @ApiModelProperty("密码")
       private String password;
   
       @ApiModelProperty("获取用户名")
       public String getUsername() {
           return username;
       }
   
       public void setUsername( @ApiParam("方法参数-用户名") String username) {
           this.username = username;
       }
   
       public String getPassword() {
           return password;
       }
   
       public void setPassword(String password) {
           this.password = password;
       }
   }
   ```

2. 测试

   ![image-20211230111015060](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211230111015060.png)

   在实体类`User`中，需要注意以下两点：

   - 并不是因为`@ApiModel`这个注解让实体显示在这里了，而是只要出现在接口方法的返回值上的实体都会显示在这里，而`@ApiModel`和`@ApiModelProperty`这两个注解只是为实体添加注释的

   - `@ApiModelProperty`、`@ApiParam`不起作用，在`controller`接口中起作用，如下：

   ![image-20211230111041570](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211230111041570.png)

   ![image-20211230111543667](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211230111543667.png)
