## LomBok使用

::: info

Lombok 可以通过注解的方式，在编译时自动为属性生成构造器， getter/setter、equals、hashcode、toString 方法

:::

Lombok使用方法如下：

1. idea安装 Lombok 插件

   ![image-20220317153101187](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203171531277.png)

2. 项目中引入 Lombok 插件依赖

   ```xml
   <dependency>
       <groupId>org.projectlombok</groupId>
       <artifactId>lombok</artifactId>
   </dependency>
   ```

3. 在实体类上使用相关注解，部分注解含义如下：

   | 注解                     | 含义                                                         |
   | ------------------------ | ------------------------------------------------------------ |
   | @Data                    | 生成所有字段的 getter、toString()、hashCode()、equals()、所有非 final 字段的 setter、构造器，相当于设置了 @Getter @Setter @RequiredArgsConstructor @ToString @EqualsAndHashCode |
   | @AllArgsConstructor      | 生成包含所有字段的构造器                                     |
   | @NoArgsConstructor       | 生成无参数构造器                                             |
   | @EqualsAndHashCode       | 生成 hashCode()、equals()                                    |
   | @Getter                  | 生成 getter、写在类上会生成该类下所有字段的 getter。写在某个字段上就作用与该字段 |
   | @NonNull                 | 空检查                                                       |
   | @Setter                  | 生成Setter                                                   |
   | @RequiredArgsConstructor | 生成必须初始化字段的构造器，比如带final、@NonNull            |


参考文章：

- [Lombok注解笔记](https://segmentfault.com/a/1190000016111422)

## Mybatis-Plus代码生成器

参考[MybatisPlus—Mybatis开了外挂？再也不用手写Mapper了!](http://localhost:3000/#/codinglife/MybatisPlus?id=代码生成器)



## 统一返回结果

在项目开发中，我们往往会将响应的数据封装成 json 数据返回，并将所有的数据格式进行统一，使得前端对数据的操作更加简单容易，统一返回的数据格式可以根据实际情况来自定义，一般包括状态码，返回消息和数据三部分。

新建 SpringBoot 项目`springboot-commonresult`, 项目环境：SpringBoot 2.6.4，JDK17，统一返回结果代码演示如下：

1. <a id="_link_result1">准备相关测试数据</a>，数据库表 User 

   ```sql
   DROP TABLE IF EXISTS user;
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
   (1, 'codeLifeVV', 18, 'test1@baomidou.com'),
   (2, 'Jack', 20, 'test2@baomidou.com'),
   (3, 'Tom', 28, 'test3@baomidou.com'),
   (4, 'Sandy', 21, 'test4@baomidou.com'),
   (5, 'Billie', 24, 'test5@baomidou.com');
   ```

2. <a id="_link_result2">编写项目所需代码</a>：

   **pom.xml 所需依赖**：

   ```xml
   <!--Lombok-->
   <dependency>
       <groupId>org.projectlombok</groupId>
       <artifactId>lombok</artifactId>
   </dependency>
   
   <!--SpringBoot Web 依赖-->
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-web</artifactId>
   </dependency>
   
   <!--MybatisPlus-->
   <dependency>
       <groupId>com.baomidou</groupId>
       <artifactId>mybatis-plus-boot-starter</artifactId>
       <version>3.5.1</version>
   </dependency>
   
   <!--mysql-->
   <dependency>
       <groupId>mysql</groupId>
       <artifactId>mysql-connector-java</artifactId>
   </dependency>
   ```

   ::: tip

   1、我们使用了Mybatis-Plus来简化开发，Mybatis-Plus学习参考基础知识篇Mybatis—Plus—>代码生成器

   2、Lombok学习参考上述文章： LomBok 使用

   :::

   **yaml.xml**：

   ```yaml
   # 配置数据源
   spring:
     datasource:
       driver-class-name: com.mysql.cj.jdbc.Driver
       url: jdbc:mysql://localhost:3306/mybatis_plus?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8
       username: root
       password: 1234
   
   # mybatis-plus 日志
   mybatis-plus:
     configuration:
       log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
   ```

   **实体类User**：

   ```java
   package com.codinglife.entity;
   
   import lombok.AllArgsConstructor;
   import lombok.Data;
   import lombok.NoArgsConstructor;
   
   @Data
   @NoArgsConstructor
   @AllArgsConstructor
   public class User {
       private Long id;
       private String name;
       private Integer age;
       private String email;
   }
   ```

   **mapper接口**：

   ```java
   public interface UserMapper extends BaseMapper<User> {
   
   }
   ```

   **Service接口及实现类**：

   ```java
   public interface UserService extends IService<User> {
   
   }
   
   @Service
   public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {
   
   }
   ```

   **controller类**：

   ```java
   @Controller
   @ResponseBody
   @RequestMapping("/user")
   public class UserController {
   
       @Autowired
       private UserService userService;
   
       @GetMapping("listAll")
       public CommonResult list(){
           List<User> list = userService.list(null);
           return CommonResult.success().data("items", list);
       }
   
       @DeleteMapping("delete/{id}")
       public CommonResult deleteTeacherById(@PathVariable String id) {
   
           boolean result =  userService.removeById(id);
           if (result) {
               return CommonResult.success();
           } else {
               return CommonResult.error();
           }
       }
   }
   ```

   ::: tip

   类`CommonResult`为统一返回结果处理类，步骤 3 会创建

   :::

3. 编写统一返回结果处理类代码`ResultCode.java`和`CommonResult.java`

   ```java
   @Getter
   @AllArgsConstructor(access = AccessLevel.PRIVATE) // Lombok 所有参数构造器且私有
   public enum ResultCode {
       SUCCESS(true,200, "操作成功"),
       ERROR(false,500, "操作失败"),
       VALIDATE_FAILED(false,404, "参数检验失败"),
       UNAUTHORIZED(false,401, "暂未登录或token已经过期"),
       FORBIDDEN(false,403, "没有相关权限");
   
       private boolean success;
       private long code;
       private String message;
   }
   ```

   ```java
   @Data
   @AllArgsConstructor
   public class CommonResult {
       /**
        * 是否成功
        */
       private boolean success;
   
       /**
        * 状态码
        */
       private long code;
   
       /**
        * 提示信息
        */
       private String message;
   
       /**
        * 返回数据
        */
       private Map<String, Object> data = new HashMap<String, Object>();
   
       private  CommonResult() {}
   
       /**
        * 成功返回结果
        * @return
        */
       public static CommonResult success() {
           return CommonResult.setCommonResult(ResultCode.SUCCESS);
       }
   
       /**
        * 失败返回结果
        * @return
        */
       public static CommonResult error() {
           return CommonResult.setCommonResult(ResultCode.ERROR);
       }
   
       /**
        * 参数验证失败返回结果
        * @return
        */
       public static CommonResult validateFailed() {
           return CommonResult.setCommonResult(ResultCode.VALIDATE_FAILED);
       }
   
       /**
        * 统一设置返回结果
        * @param resultCode
        * @return
        */
       public static CommonResult setCommonResult(ResultCode resultCode) {
           CommonResult commonResult = new CommonResult();
           commonResult.setSuccess(resultCode.isSuccess());
           commonResult.setCode(resultCode.getCode());
           commonResult.setMessage(resultCode.getMessage());
           return commonResult;
       }
   
       /**
        * 统一设置返回结果, 修改提示信息 message
        * @param resultCode
        * @param message
        * @return
        */
       public static CommonResult setCommonResult(ResultCode resultCode, String message) {
           CommonResult commonResult = new CommonResult();
           commonResult.setSuccess(resultCode.isSuccess());
           commonResult.setCode(resultCode.getCode());
           commonResult.setMessage(message);
           return commonResult;
       }
   
       /**
        * 返回数据处理
        * @param key 返回数据 key 值
        * @param value 返回数据 value 值
        * @return
        */
       public  CommonResult data(String key, Object value) {
           this.data.put(key, value);
           return this;
       }
   
       /**
        * 返回数据处理
        * @param map 返回数据
        * @return
        */
       public CommonResult data(Map<String, Object> map) {
           this.setData(map);
           return this;
       }
   }
   ```
   
4. 测试 controller 类`UserController`方法`list()`和`deleteTeacherById()`

   `list()`方法测试结果：

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203051119944.png" alt="image-20220305105457979" width="600" />

   `deleteTeacherById()`方法测试结果：

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203051121081.png" alt="image-20220305105239314" width="600"  />

   可以看到最终请求的返回内容包含了统一返回结果处理类`CommonResult`封装的四个属性：`success`、`code`、`message`和`data`

## 全局异常处理

我们在 SpringBoot 项目中，往往会写许多 Controler 接口类，由于 Controller 类接口中传递的参数各不相同，出现错误时抛出的异常以及异常的处理方式也不尽相同。SpringBoot 中与参数相关的异常主要有三个需要手动处理：

- `org.springframework.validation.BindException`
- `org.springframework.web.bind.MethodArgumentNotValidException`
- `javax.validation.ConstraintViolationException`

我们可以设计一个全局异常处理类，方便统一处理异常错误信息，对项目`springboot-commonresult`代码进行扩充，增加全局异常处理的代码，步骤如下：

1. 重复统一返回结果[步骤1](#_link_result1)，[步骤2](_link_result1)

2. `xml`文件中新增数据校验注解依赖

   ```yaml
   <!--数据校验 SpringBoot 2.3 版本以上-->
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-validation</artifactId>
   </dependency>
   ```

   ::: tip

   1、SpringBoot 为我们提供了一系列参数校验的注解，这些注解可以直接作用在实体类的属性上，来对属性的值进行限制，不需要我们手动去写许多`if else`代码来对属性值进行判断，如：

   ```java
   if (user.getName() == null || "".equals(user.getName()) {
               ......
   } else if(user.getAge() == null) {
    ......
   } else if(user.getUsername() == null) {
    ......
   } else {
    ......
   }
   ```

   2、SpringBoot 2.3 以上版本需要添加`spring-boot-starter-validation`依赖，否则参数校验可能会失败，2.3 以下版本可以不添加，只需要添加`spring-boot-starter-web`依赖即可：

   ```xml
   <!--SpringBoot Web 依赖-->
   <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
   </dependency>
   ```

   :::

   **常用校验注解如下：**

   | 注解                     | 含义                                                         |
   | :----------------------- | ------------------------------------------------------------ |
   | `@NotEmpty`              | 被注释的字符串的不能为 null 也不能为空，一般用在集合类上或者数组上 |
   | `@NotBlank`              | 被注释的字符串非 null，并且必须包含一个非空白字符，只能作用在接收的 String 类型上 |
   | `@Null`                  | 被注释的元素必须为 null                                      |
   | `@NotNull`               | 被注释的元素必须不为 null，但可以为empty，一般用在 Integer 类型的基本数据类型的非空校验上 |
   | `@AssertTrue`            | 被注释的元素必须为 true                                      |
   | `@AssertFalse`           | 被注释的元素必须为 false                                     |
   | `@Pattern(regex=,flag=)` | 被注释的元素必须符合指定的正则表达式                         |
   | `@Email`                 | 被注释的元素必须是 Email 格式                                |
   | `@Min(value)`            | 被注释的元素必须是一个数字，其值必须大于等于指定的最小值     |
   | `@Max(value)`            | 被注释的元素必须是一个数字，其值必须小于等于指定的最大值     |
   | `@DecimalMin(value)`     | 被注释的元素必须是一个数字，其值必须大于等于指定的最小值     |
   | `@DecimalMax(value)`     | 被注释的元素必须是一个数字，其值必须小于等于指定的最大值     |
   | `@Size(max=, min=)`      | 被注释的元素的大小必须在指定的范围内                         |

3. 修改实体类`User`，对实体类属性增加数据校验注解

   ```java
   @Data
   @NoArgsConstructor
   @AllArgsConstructor
   public class User {
       private Long id;
       @NotBlank(message = "名字不为空")
       private String name;
       @NotBlank(message = "年龄不为空")
       private Integer age;
       @Email(message = "邮箱格式不正确")
       private String email;
   }
   ```

4. 编写全局异常处理类代码

   ```java
   @Slf4j
   @ControllerAdvice
   public class GlobalExceptionHandler {
   
       /**
        *
        * @param e BindException 表单绑定到 JavaBean 出错时,抛出 BindException 异常
        * @return
        * @ExceptionHandler 统一处理 BindException 异常
        */
       @ResponseBody
       @ExceptionHandler(value = BindException.class)
       public CommonResult handleValidException(BindException e) {
           List<Map<String, String>> list = new ArrayList<>();
           for (ObjectError objectError : e.getAllErrors()) {
               Map<String, String> map = new HashMap<>();
               if (objectError instanceof FieldError) {
                   FieldError fieldError = (FieldError) objectError;
                   map.put("field", fieldError.getField());
                   map.put("message", fieldError.getDefaultMessage());
               } else {
                   map.put("field", objectError.getObjectName());
                   map.put("message", objectError.getDefaultMessage());
               }
               list.add(map);
           }
           return CommonResult.validateFailed().data("items", list);
       }
   
       /**
        *
        * @param e 将请求体解析并绑定到 JavaBean 出错时,抛出 MethodArgumentNotValidException 异常
        * @return
        */
       @ResponseBody
       @ExceptionHandler(value = MethodArgumentNotValidException.class)
       public CommonResult handleValidException(MethodArgumentNotValidException e) {
           List<Map<String, String>> list = new ArrayList<>();
           for (ObjectError objectError : e.getAllErrors()) { // 遍历所有错误
               Map<String, String> map = new HashMap<>();
               if (objectError instanceof FieldError) {       // 是否为参数错误
                   FieldError fieldError = (FieldError) objectError;
                   map.put("field", fieldError.getField());
                   map.put("message", fieldError.getDefaultMessage());
               } else {
                   map.put("field", objectError.getObjectName());
                   map.put("message", objectError.getDefaultMessage());
               }
               list.add(map);
           }
           return CommonResult.validateFailed().data("items", list);
       }
   ```

   ::: tip

   参考[Spring 参数校验的异常处理 - 掘金 (juejin.cn)](https://juejin.cn/post/6844904003684302861)

   :::

5. UserControler 类中添加方法 `addUser()` 接口

   ```java
   @PostMapping("addUser")
   public CommonResult addUser(@Valid @RequestBody User user) {
       boolean result = userService.save(user);
       if (result) {
       	return CommonResult.success();
       } else
       	return CommonResult.error();
   }
   ```

   ::: tip

   注解`@Valid`用来验证表单传递过来的数据是否符合参数校验，如果数据异常则会统一抛出异常，方便异常中心统一处理

   :::

6. 测试`addUser()`接口

   当 User 类属性 `name=""`，属性`email`格式不正确时，输出内容如下：

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20221023213515128.png" alt="image-20221023213515128" style="zoom:50%;" />

7. 我们也可以自定义异常，编写自定义异常类`CustomizeApiException`

   ```java
   @Data
   @AllArgsConstructor  //有参数构造器
   @NoArgsConstructor   //生成无参数构造
   public class CustomizeApiException extends RuntimeException {
       private Integer code;   // 状态码
       private String msg;     // 输出消息
   }
   ```

8. 在全局异常处理类`GlobalExceptionHandler`添加对自定义异常的处理方法

   ```java
   /**
   * 自定义异常处理
   * @return
   */
   @ExceptionHandler(CustomizeApiException.class)
   @ResponseBody
   public CommonResult handleCustomizeApiException(CustomizeApiException e) {
       log.error(e.getMessage());
       e.printStackTrace();
       return CommonResult.setCommonResult(ResultCode.ERROR, e.getMsg());
   }
   ```

   

## 统一日志处理

在项目开发中，往往会遇到各种错误，**统一日志处理**可以方便快速定位错误位置，便于程序调试。

::: info 使用原则

阿里巴巴 Java 开发手册中建议：应用中不可直接使用日志系统（Log4j 、Logback）中的 API ，而应依赖使用日志框架 SLF4J 中的 API ，使用门面模式的日志框架，有利于维护和各个类的日志处理方式统一

:::

SpringBoot 项目中使用`SLF4J+Log4j2`进行统一日志处理，流程如下：

1. `pom.xml` 文件中引入相关依赖

   ```xml
   <!-- log4j2日志依赖核心包 -->
   <dependency>
       <groupId>org.apache.logging.log4j</groupId>
       <artifactId>log4j-api</artifactId>
       <version>2.17.1</version>
   </dependency>
   <dependency>
       <groupId>org.apache.logging.log4j</groupId>
       <artifactId>log4j-core</artifactId>
       <version>2.17.1</version>
   </dependency>
   <!--用于与 slf4j 保持桥接-->
   <dependency>
       <groupId>org.apache.logging.log4j</groupId>
       <artifactId>log4j-slf4j-impl</artifactId>
       <version>2.17.1</version>
   </dependency>
   <!-- slf4j 日志框架核心包-->
   <dependency>
       <groupId>org.slf4j</groupId>
       <artifactId>slf4j-api</artifactId>
       <version>1.7.32</version>
   </dependency>
   ```

2. resources 资源文件目录下新建日志配置文件`log4j2.xml`

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <!--日志级别以及优先级排序: OFF > FATAL > ERROR > WARN > INFO > DEBUG > TRACE > ALL 跟踪、调试、信息、警告、错误和致命-->
   <!--status="WARN" :用于设置 log4j2 自身内部日志的信息输出级别，默认是OFF-->
   <!--monitorInterval="30"  :间隔秒数, 自动检测配置文件的变更和重新配置本身-->
   
   <configuration status="WARN" monitorInterval="30">
   
       <!--变量配置-->
       <Properties>
           <!-- 格式化输出：%date表示日期, %thread表示线程名, %-5level: 级别从左显示 5 个字符宽度 %msg: 日志消息, %n是换行符-->
           <!-- %logger{36} 表示 Logger 名字最长 36 个字符 -->
           <property name="LOG_PATTERN" value="%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n" />
           <!-- 定义日志存储的路径, 不要配置相对路径 -->
           <property name="LOG_FILE_PATH" value="E:\logs\log4j2" />
           <property name="LOG_FILE_NAME" value="edulog4j2" />
       </Properties>
   
       <!--appenders: 定义输出内容, 输出格式, 输出方式, 日志保存策略等, 常用其下三种标签[console, File, RollingFile]-->
       <appenders>
           <!--Appender 1. 输出到 Console 控制台, 指定输出格式和过滤器等级为 INFO -->
           <console name="Console" target="SYSTEM_OUT">
               <!--日志输出的格式-->
               <PatternLayout pattern="${LOG_PATTERN}"/>
               <!--ThresholdFilter 指定日志消息的输出最低层次-->
               <ThresholdFilter level="info" onMatch="ACCEPT" onMismatch="DENY"/>
           </console>
   
           <!--File: 同步输出日志到本地文件-->
           <!--append="false": 根据其下日志策略, 每次清空文件重新输入日志, 可用于测试-->
           <File name="Filelog" fileName="${LOG_FILE_PATH}/test.log" append="false">
               <PatternLayout pattern="${LOG_PATTERN}"/>
           </File>
   
           <!-- 打印出所有的 info 及以下级别的信息, 每次大小超过 size, 则这个 size 大小的日志会自动存入按年份-月份建立的文件夹下面并进行压缩, 作为存档-->
           <RollingFile name="RollingFileInfo" fileName="${LOG_FILE_PATH}/info.log" filePattern="${LOG_FILE_PATH}/${LOG_FILE_NAME}-INFO-%d{yyyy-MM-dd}_%i.log.gz">
               <!--ThresholdFilter : 日志输出过滤-->
               <!--level="info" : 日志级别; onMatch="ACCEPT" : 级别在 info 之上则接受; onMismatch="DENY" : 级别在 info 之下则拒绝-->
               <ThresholdFilter level="info" onMatch="ACCEPT" onMismatch="DENY"/>
               <PatternLayout pattern="${LOG_PATTERN}"/>
               <!-- Policies: 日志滚动策略-->
               <Policies>
                   <!-- TimeBasedTriggeringPolicy : 时间滚动策略, 默认0点产生新的文件,
                           interval="6" : 自定义文件滚动时间间隔, 每隔 6 小时产生新文件,
                           modulate="true" : 产生文件是否以 0 点偏移时间, 即6点, 12点, 18点, 0点-->
                   <TimeBasedTriggeringPolicy interval="6" modulate="true"/>
                   <!-- SizeBasedTriggeringPolicy : 文件大小滚动策略-->
                   <SizeBasedTriggeringPolicy size="10MB"/>
               </Policies>
               <!-- DefaultRolloverStrategy 属性如不设置, 则默认为最多同一文件夹下 7 个文件开始覆盖-->
               <DefaultRolloverStrategy max="15"/>
           </RollingFile>
   
           <!-- 打印出所有的 warn 及以下级别的信息, 每次大小超过size, 则这个 size 大小的日志会自动存入按年份-月份建立的文件夹下面并进行压缩, 作为存档-->
           <RollingFile name="RollingFileWarn" fileName="${LOG_FILE_PATH}/warn.log" filePattern="${LOG_FILE_PATH}/${LOG_FILE_NAME}-WARN-%d{yyyy-MM-dd}_%i.log.gz">
               <ThresholdFilter level="warn" onMatch="ACCEPT" onMismatch="DENY"/>
               <PatternLayout pattern="${LOG_PATTERN}"/>
               <Policies>
                   <TimeBasedTriggeringPolicy interval="1"/>
                   <SizeBasedTriggeringPolicy size="10MB"/>
               </Policies>
               <DefaultRolloverStrategy max="15"/>
           </RollingFile>
   
           <!-- 打印出所有的 error及以下级别的信息, 每次大小超过size, 则这个 size 大小的日志会自动存入按年份-月份建立的文件夹下面并进行压缩, 作为存档-->
           <RollingFile name="RollingFileError" fileName="${LOG_FILE_PATH}/error.log" filePattern="${LOG_FILE_PATH}/${LOG_FILE_NAME}-ERROR-%d{yyyy-MM-dd}_%i.log.gz">
               <ThresholdFilter level="error" onMatch="ACCEPT" onMismatch="DENY"/>
               <PatternLayout pattern="${LOG_PATTERN}"/>
               <Policies>
                   <TimeBasedTriggeringPolicy interval="1"/>
                   <SizeBasedTriggeringPolicy size="10MB"/>
               </Policies>
               <DefaultRolloverStrategy max="15"/>
           </RollingFile>
   
       </appenders>
   
       <!--Logger节点用来单独指定日志的形式，比如要为指定包下的class指定不同的日志级别等。-->
       <!-- 定义loggers, 只有定义了 logger 并引入的 appender, appender才会生效-->
       <loggers>
   
           <!--过滤掉 spring 和 mybatis 的一些无用的 DEBUG 信息-->
           <!--Logger 节点用来单独指定日志的形式, name为包路径, 比如要为 org.springframework 包下所有日志指定为 INFO 级别等 -->
           <logger name="org.springframework" level="INFO"></logger>
           <logger name="org.mybatis" level="INFO"></logger>
           <!-- Root节点用来指定项目的根日志, 如果没有单独指定 Logger, 那么就会默认使用该 Root 日志输出 -->
           <root level="info">
               <appender-ref ref="Console"/>
               <appender-ref ref="Filelog"/>
               <appender-ref ref="RollingFileInfo"/>
               <appender-ref ref="RollingFileWarn"/>
               <appender-ref ref="RollingFileError"/>
           </root>
           <!--AsyncLogger : 异步日志, LOG4J 有三种日志模式: 全异步日志,混合模式,同步日志; 性能从高到底, 线程越多效率越高, 也可以避免日志卡死线程情况发生-->
           <!--additivity="false" : additivity 设置事件是否在 root logger 输出, 为了避免重复输出, 可以在 Logger 标签下设置 additivity为 ”false” -->
           <!--<AsyncLogger name="AsyncLogger" level="trace" includeLocation="true" additivity="false">
               <appender-ref ref="RollingFileError"/>
           </AsyncLogger>-->
       </loggers>
   </configuration>
   ```

3. 编写测试代码并测试

   ```java
   import lombok.extern.slf4j.Slf4j; // @Slf4j 注解依赖包
   
   @Slf4j
   public class LogTest {
       @Test
       public void testLog4j2() {
           log.trace("trace1");
           log.debug("debug1");
           log.warn("warn1");
           log.info("info1");
           log.error("error1");
       }
   }
   ```
   
   ::: info 知识点
   
   1、**SLF4J** 为简单日志门面，是日志框架的抽象，是对所有日志框架制定的一种规范、标准、接口，并不是一个框架的具体的实现，因为接口并不能独立使用，它需要和具体的日志框架来配合使用
   
   2、**Log4j2** 是日志实现，SLF4J + Log4j2 作为统一日志处理的方式的好处在于，如果项目中希望使用到其它日志实现（如 Logback），更换日志框架时可以不改动代码，只需要把依赖的 jar 包替换掉就可以了。
   
   3、注解`@Slf4j`可以替代以下代码：
   
   ```java
   private  final Logger logger = LoggerFactory.getLogger(当前类名.class); 
   ```
   
   使用注解`@Slf4j`时我们需要在 pom.xml 文件中加入 Lombok 依赖：
   
   ```xml
   <!--Lombok-->
   <dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
   </dependency>
   ```
   
   :::
   
   测试结果：
   
   ![image-20220313090845627](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203130908788.png)

参考文章：

- [一篇文章搞懂Slf4j和Log4j2](https://segmentfault.com/a/1190000037598528)
- [SpringBoot集成slf4j+log4j2](https://segmentfault.com/a/1190000015568449)
- [LOG4J2 完整配置详解](https://www.jianshu.com/p/d13c2e50a89c)
- [web项目中如何选择日志组件（SLF4J、Log4J2、logback）](https://cloud.tencent.com/developer/article/1383510)

## 阿里云OSS文件存储

::: tip OSS概念

OSS（Object Storage Service）是阿里云提供的一种 Restful 对象存储服务，可以在任何应用、任何时间、任何地点存储和访问任意类型的数据。

:::

我们新建一个 SpringBoot 项目 `springboot-oss-uploadfile`，来整合阿里云文件上传功能，项目环境：JDK17，SpringBoot 2.6.4，项目目录结构如下：

<img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203171554428.png" alt="image-20220317155457344" width="400" />

**阿里云文件上传代码实现步骤如下**：

1. 登录阿里云，开通 OSS 服务，创建新的 Bucket，保存你 Bucket 的 Endpoint（地域节点）

   ![image-20220317095004967](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203170950300.png)

   点击页面右上角头像，选择 AccessKey 管理，创建你的 AccessKey，并保存你的 `AccessKey ID` 和 `AccessKey Secret`

   ::: tip

   1、Endpoint：OSS对外服务的访问域名

   2、Bucket：存储空间，用于存储对象(Object)的容器

   3、AccessKey ID 和 AccessKey Secret：访问阿里云 API 的密钥，具有该账户完全的权限，OSS 通过使用 AccessKey ID 和AccessKey Secret 对称加密的方法来验证某个请求的发送者身份

   :::

2. 创建 SpringBoot 项目，编写代码

   配置文件`application.properties`内容：

   ```properties
   #阿里云Oss
   aliyun.oss.endpoint=你创建的Bucket的访问域名
   aliyun.oss.accessKeyId=你的AccessKey ID
   aliyun.oss.accessKeySecret=你的AccessKey Secret
   aliyun.oss.bucketName=你创建的Bucket
   ```

   `AliyunOSSConfigConstant` 类读取配置文件内容：

   ```java
   @Configuration
   public class AliyunOSSConfigConstant implements InitializingBean {
       // 读取配置文件
       @Value("${aliyun.oss.endpoint}")
       private String endpoint;
       @Value("${aliyun.oss.accessKeyId}")
       private String keyid;
       @Value("${aliyun.oss.accessKeySecret}")
       private String keysecret;
       @Value("${aliyun.oss.bucketName}")
       private String bucketname;
   
       public static String END_POINT; // OSS对外服务的访问域名
       // OSS通过使用AccessKeyId和AccessKeySecret对称加密的方法来验证某个请求的发送者身份
       public static String ACCESS_KEYID; //AccessKey ID
       public static String ACCESS_KEYSECRET; //Access Key Secret
       public static String BUCKET_NAME; // 存储空间, 用于存储对象(Object)的容器
   
       @Override
       public void afterPropertiesSet() throws Exception {
           END_POINT = endpoint;
           ACCESS_KEYID = keyid;
           ACCESS_KEYSECRET = keysecret;
           BUCKET_NAME = bucketname;
       }
   }
   ```

   `Service`层定义实现上传方法接口 `OssFileService` 与实现类 `OssFileServiceImpl`：

   ```java
   public interface OssFileService {
       /**
        * 文件上传到阿里云
        * @param file
        * @return
        */
       String upload(MultipartFile file);
   }
   ```

   ```java
   @Slf4j
   @Service
   public class OssFileServiceImpl implements OssFileService {
       @Override
       public String upload(MultipartFile file) {
   
           String bucketName = AliyunOSSConfigConstant.BUCKET_NAME;
           String endpoint = AliyunOSSConfigConstant.END_POINT;
           String accessKeyId = AliyunOSSConfigConstant.ACCESS_KEYID;
           String accessKeySecret = AliyunOSSConfigConstant.ACCESS_KEYSECRET;
           String uploadUrl; // 上传URL
   
           // 创建OSSClient实例
           OSS ossClient = new OSSClientBuilder().build(endpoint, accessKeyId, accessKeySecret);
           try {
               //判断oss实例是否存在, 不存在则创建
               if (!ossClient.doesBucketExist(bucketName)) {
                   //创建bucket
                   ossClient.createBucket(bucketName);
                   // oss实例的访问权限:公共读
                   ossClient.setBucketAcl(bucketName, CannedAccessControlList.PublicRead);
               }
               // 上传文件字节输入流
               InputStream inputStream = file.getInputStream();
   
               // 构建日期路径
               String fileUrl = file.getOriginalFilename(); // 获取文件名称
               String uuid = UUID.randomUUID().toString().replace("-", ""); // 拼接uuid
               String dateStr = new DateTime().toString("yyyy/MM/dd"); // 拼接时间
               fileUrl = dateStr + "/" + uuid + fileUrl;
   
               // 调用oss进行上传
               // 参数分别为 BucketName, 上传到oss文件的路径和名称, 第三个文件输入流
               ossClient.putObject(bucketName, fileUrl, inputStream);
   
               uploadUrl = "http://" + bucketName + "." + endpoint + "/" + fileUrl;
               return uploadUrl;
   
           } catch (OSSException oe) { 
               log.error(oe.getMessage());
           } catch (ClientException ce) {
               log.error(ce.getMessage());
           } catch (IOException ie) {
               log.error(ie.getMessage());
           } finally {
               if (ossClient != null) { // 最后要关闭 ossClient
                   ossClient.shutdown();
               }
           }
           return null;
       }
   }
   ```

   Controller层实现接口：

   ```java
   @RestController
   @RequestMapping("/oss/file")
   public class OssFileController {
   
       @Autowired
       private OssFileService fileService;
   
       @PostMapping("upload")
       public String upload(@RequestParam("file") MultipartFile file) {
           String uploadUrl = fileService.upload(file);
           return uploadUrl;
       }
   }
   ```

3. 测试上传功能，使用工具 ApiPost 进行接口测试

   测试结果，上传成功之后返回上传 ULR：

   ![image-20220317151226674](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202203171512858.png)

参考文章：

- [SpringBoot整合阿里云OSS存储服务](https://segmentfault.com/a/1190000017273629)
- [阿里云OSS文件上传（分页上传，断点续传）](https://segmentfault.com/a/1190000020963346)
- [SpringBoot OSS整合全过程](https://segmentfault.com/a/1190000023698805)

## EasyExcel 读取 Excel 文件

::: tip 

EasyExcel 是阿里巴巴开源的一个 excel 处理框架，使用 EasyExcel 可以高效的将 Excel 表中的数据导入到数据库中

:::

创建 SpringBoot 项目 `springboot-easyexcel`，读取“用户分类.xlsx” Excel 表中的数据到数据库User表，项目环境为 JDK 17，SpringBoot 2.6.4

![image-20220409084517069](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20220409084517069.png)

代码实现如下：

1. 导入项目所需依赖

   ```xml
   <!--mysql-->
   <dependency>
       <groupId>mysql</groupId>
       <artifactId>mysql-connector-java</artifactId>
   </dependency>
   
   <!--MybatisPlus-->
   <dependency>
       <groupId>com.baomidou</groupId>
       <artifactId>mybatis-plus-boot-starter</artifactId>
       <version>3.5.1</version>
   </dependency>
   
   <!--Lombok-->
   <dependency>
       <groupId>org.projectlombok</groupId>
       <artifactId>lombok</artifactId>
   </dependency>
   ```

2. 编写项目所需代码

   **实体类 User**：

   ```java
   @Data
   @TableName("user")
   public class User {
   
       // id 是自增的,因此不需要使用@ExcelProperty注解
       private Long id;
       @ExcelProperty(index = 1)
       private String name;
       @ExcelProperty(index = 2)
       private Integer age;
       @ExcelProperty(index = 3)
       private String email;
   }
   ```

   ::: tip

   需要使用注解 `@ExcelProperty`和 Excel 表需要读取的列对应，`index = 0`表示第一列，`index = 1`表示第二列，以此类推

   :::

   **Service 接口及方法**：

   ```java
   public interface UserService extends IService<User> {
       void batchImportUser(MultipartFile file, UserService userService);
   }
   
   @Service
   public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {
       @Override
       public void batchImportUser(MultipartFile file, UserService userService) {
           try {
               InputStream is = file.getInputStream();
               // read(InputStream inputStream, Class head, ReadListener readListener)
               // inputStream 输入流; head 需要导入excel表对应的实体类; readListener 事件监听器,用来监听处理读取到的每一条数据,读取excel表第一个sheet
               EasyExcel.read(is, User.class, new UserExcelListener(userService)).sheet().doRead();
           } catch (IOException e) {
               e.printStackTrace();
           }
       }
   }
   ```

   ::: info

   `UserServiceImpl` 类中调用 `EasyExcel.read(...)` 方法来读取 Excel 表中数据，需要自定义一个 Excel 监听器并实现 Excel 的分析监听器接口 `AnalysisEventListener`

   :::

3. 编写 Excel 监听器类 `UserExcelListener`代码

   ```java
   public class UserExcelListener extends AnalysisEventListener<User> {
   
       private static final Logger LOGGER = LoggerFactory.getLogger(UserExcelListener.class);
       public UserService userService;
   
       /**
        * 每隔5条存储数据库，实际使用中可以3000条，然后清理list ，方便内存回收
        */
       private static final int BATCH_COUNT = 5;
       List<User> list = new ArrayList<User>();
   
       public UserExcelListener(UserService userService) {
           this.userService = userService;
       }
   
       public UserExcelListener() {
       }
   
       @Override
       public void invoke(User user, AnalysisContext analysisContext) {
           LOGGER.info("解析到一条数据");
           list.add(user);
           // 达到BATCH_COUNT了，需要去存储一次数据库，防止数据几万条数据在内存，容易OOM
           if (list.size() >= BATCH_COUNT) {
               // 批量将数据存储在数据库中
               userService.saveBatch(list);
               LOGGER.info("存储数据库成功！");
               // 存储完成清理 list
               list.clear();
           }
   
       }
   
       /**
        * 所有数据解析完成了 都会来调用
        * @param analysisContext
        */
       @Override
       public void doAfterAllAnalysed(AnalysisContext analysisContext) {
           // 这里也要保存数据，确保最后遗留的数据也存储到数据库
           userService.saveBatch(list);
           LOGGER.info("所有数据解析完成！");
       }
   }
   ```

4. 编写 Controller 代码并使用 ApiPost 进行接口测试

   ```java
   @RestController
   @RequestMapping("/user")
   public class UserController {
   
       @Autowired
       private UserService userService;
   
       @PostMapping("addSubject")
       public String addCourseSubject(@RequestParam("file") MultipartFile file) {
           StaticComponentContainer.Modules.exportAllToAll(); // 解决JDK17与easyexcel报错问题
           userService.batchImportUser(file, userService);
           return "OK";
       }
   }
   ```

   ::: danger

   JDK17 环境下使用 EasyExcel 会出现 `Caused by: java.lang.reflect.InaccessibleObjectException` 异常信息，需要在 pom 文件引入以下依赖：

   ```xml
   <dependency>
     <groupId>org.burningwave</groupId>
     <artifactId>core</artifactId>
     <version>9.5.2</version>
   </dependency>
   ```

   并且写入以下代码：

   ```java
   // 解决JDK17与easyexcel报错问题
   StaticComponentContainer.Modules.exportAllToAll(); 
   ```

   :::

## nginx 配置后台多服务器

::: info

使用 SpringBoot + Vue 技术栈开发的前后端分离的项目，可以使用 nginx 反向代理来配置后台多台服务器

:::

以本文项目edu和edu-admin为例，使用nginx配置后台多台服务器过程如下：

1. 下载安装 nginx

   ::: tabs

   @tab Windows

   <!-- 此处，选项卡 1 的标题“标题 1”将用作值。 -->

   <!-- tab 1 内容 -->

   下载后解压，[下载地址](http://nginx.org/en/download.html)，建议下载稳定版 Stable version：

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20220409152617452.png" alt="image-20220409152617452" width="500" />

   @tab:active macOS

   <!-- 这里，tab 2 的标题将是 “标题 2”，但它会使用 “值 2” 作为选项卡的值-->

   <!-- tab 2 内容 -->

   ```bash
   brew install nginx
   ```

   :::

2. 修改 nginx 配置文件内容

   ::: tabs

   @tab Windows

   <!-- 此处，选项卡 1 的标题“标题 1”将用作值。 -->

   <!-- tab 1 内容 -->

   解压文件夹中找到 `nginx.conf` 文件

   @tab:active macOS

   <!-- 这里，tab 2 的标题将是 “标题 2”，但它会使用 “值 2” 作为选项卡的值-->

   <!-- tab 2 内容 -->

   ```bash
   vim /opt/homebrew/etc/nginx/nginx.conf
   ```

   :::

   

   在 `http { }` 内新添加一个 `server{ }` ，用来配置项目 edu中对应的微服务服务器地址，修改后的配置文件内容如下：

   ```nginx
   # http服务器配置
   http {
     # 虚拟主机的配置
     server {
         # 监听端口，nginx 默认为 80，可以自行修改
       	listen       81;
         # 域名，可以有多个，用空格隔开
       	server_name  localhost;
       	# ...
     }
     # ...
     # 以下内容为新增
     # 项目edu服务
     server {
           listen       8888;
           server_name  localhost;
   
           # edu 匹配请求 URL
           # http://localhost:8080/edu/...
           location ~/edu/ { # 当客户端请求的 URL 有 /edu/ 时
         			// 请求代理服务端口
               proxy_pass http://localhost:8001;
           }
           # http://localhost:8080/oss/...
           location ~/oss/ { # 当客户端请求的 URL 有 /oss/ 时
         			// 请求代理服务端口
               proxy_pass http://localhost:8002;
           } 
       }
   }
   ```

   ::: tip

   当后端有多个服务时，可以配置多个 location

   :::

3. 启动 nginx

   ```bash
   nginx
   ```

   ::: warning

   每次修改完 nginx 配置文件之后，需要重启 nginx，重启命令为：

   ```bash
   nginx -s reload
   ```

   :::

4. 修改后端前台项目edu-admin服务端口为 nginx 文件配置的 listen 接口 8888，配置文件为`.env.development`

   ```
   # VUE_APP_BASE_API = '/dev-api'
   # 修改为后端 edu-service-edu 服务访问接口
   VUE_APP_BASE_API = 'http://localhost:8888'
   ```

   ::: tip

   当后端前台发送一个请求，如 `http://localhost:8888/edu/teacher/listByPageCondition/1/10`时，nginx 反向代理会请求后端服务 `http://localhost:8001/edu/teacher/listByPageCondition/1/10`，后端服务端口配置在`application.yaml`文件：

   ```yaml
   # 服务端口
   server:
     port: 8001
   
   spring:
     # 服务名称
     application:
       name: edu-service-edu
   ```

   :::

5. 后端代码解决跨域问题，使用`@CrossOrigin`注解

   ```java
   @RestController
   @RequestMapping("/edu/teacher")
   @CrossOrigin // 解决跨域问题
   public class TeacherController {
   		@ApiOperation(value = "条件查询分页方法")
       @PostMapping("listByPageCondition/{current}/{limit}")
     	// 后端服务应用接口 `http://localhost:8001/edu/teacher/listByPageCondition/1/10`，
       public CommonResult listByPageCondition(@PathVariable Long current,
                                      @PathVariable Long limit,
                                      @RequestBody TeachQueryVo teachQuery) {
         // ...省略
       }
   }
   ```

6. 测试

   ![image-20220409203216198](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20220409203216198.png)

## SpringBoot 上传视频到阿里云平台

::: info 

阿里云视频点播（VOD）是集音视频上传、自动化转码处理、媒体资源管理、分发加速于一体的全链路音视频点播服务。可以有效的保障视频内容的安全，不被盗链、非法下载和传播，广泛应用在音视频网站，短视频，在线教育等场景。

:::

新建项目 SpringBoot 项目 `springboot-aliyun-vod`，项目环境为 JDK 17，SpringBoot 2.6.4，演示视频上传到阿里云平台，阿里云设置步骤如下：

1. 登陆阿里云官网，官网首页右上角进入控制台，点击头像-AccessKey管理，获取阿里云访问密钥，`AccessKeyId`和`AccessKeySecret`

   ![image-20220412214606032](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20220412214606032.png)

2. 开通阿里云视频点播服务，[参考网址](https://help.aliyun.com/document_detail/51512.html)

   ::: warning

   仅演示视频上传功能无需进行域名注册功能

   :::

3. 进入视频点播服务控制台，开启存储地址状态

   ![image-20220413094429696](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20220413094429696.png)

之后便可以编写上传代码，参考官网[Java上传SDK](https://help.aliyun.com/document_detail/53406.html)，步骤如下：

1. pom 文件引入相关依赖

   ```xml
   <!--阿里云 oss-->
   <dependency>
       <groupId>com.aliyun.oss</groupId>
       <artifactId>aliyun-sdk-oss</artifactId>
       <version>3.10.2</version>
   </dependency>
   <!--阿里云视频点播服务-->
   <dependency>
       <groupId>com.aliyun</groupId>
       <artifactId>aliyun-java-sdk-core</artifactId>
       <version>4.5.1</version>
   </dependency>
   <dependency>
       <groupId>com.aliyun</groupId>
       <artifactId>aliyun-java-sdk-vod</artifactId>
       <version>2.15.11</version>
   </dependency>
   <!--Json 数据转换-->
   <dependency>
       <groupId>org.json</groupId>
       <artifactId>json</artifactId>
       <version>20170516</version>
   </dependency>
   <dependency>
       <groupId>com.alibaba</groupId>
       <artifactId>fastjson</artifactId>
       <version>1.2.28</version>
   </dependency>
   <dependency>
       <groupId>com.google.code.gson</groupId>
       <artifactId>gson</artifactId>
       <version>2.8.2</version>
   </dependency>
   ```

2. Idea-工程结构-Modules中手动引入依赖`aliyun-java-upload-1.4.14.jar`依赖

   ![image-20220413100437672](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20220413100437672.png)

   ::: warning

   由于`aliyun-java-upload-1.4.14.jar`暂未开源，因此可以使用上述方式将其手动引入到项目依赖中，之后可以选择将其移动到工程库中或者resources文件夹下，防止工程移植时jar包丢失，或者可以[加入到自己本地Maven仓库中](https://blog.csdn.net/u012723673/article/details/107390612)，在进行Maven依赖引入

   :::

   ::: danger

   步骤1、2中引入的 jar 包版本要注意对应，参考[集成Java上传SDK](https://help.aliyun.com/document_detail/53406.html#section-we5-kov-5o0)，[demo示例参考](https://help.aliyun.com/document_detail/51992.htm?spm=a2c4g.11186623.0.0.67d44150SLpjlN#title-jq2-fre-l7l)

   :::

3. 编写`application.properties`配置文件内容

   ```properties
   # 服务端口
   server.port=8003
   
   # 阿里云访问密钥
   aliyun.vod.file.keyid=你的AccessKeyId
   aliyun.vod.file.keysecret=你的AccessKeySecret
   
   # 上传大小限制
   spring.servlet.multipart.max-file-size=1024MB
   spring.servlet.multipart.max-request-size=1024MB
   ```

4. 常量配置类`AliyunVodConfigConstant`读取配置文件 `AccessKeyId`、`AccessKeySecret`

   ```java
   @Configuration
   public class AliyunVodConfigConstant implements InitializingBean {
   
       @Value("${aliyun.vod.file.keyid}")
       private String keyId;
       @Value("${aliyun.vod.file.keysecret}")
       private String keySecret;
   
       public static String ACCESS_KEY_ID;
       public static String ACCESS_KEY_SECRET;
   
   
       @Override
       public void afterPropertiesSet() throws Exception {
           ACCESS_KEY_ID = keyId;
           ACCESS_KEY_SECRET = keySecret;
       }
   }
   ```

5. 视频点播工具类填入 AccessKey 信息，进行初始化，参考官方[初始化](https://help.aliyun.com/document_detail/61062.html)

   ```java
   public class AliyunVodSDKUtils {
       /**
        * 填入AccessKey信息，进行初始化
        * @param accessKeyId
        * @param accessKeySecret
        * @return
        * @throws
        */
       public static DefaultAcsClient initVodClient(String accessKeyId, String accessKeySecret) throws ClientException {
           String regionId = "cn-shanghai";  // 点播服务接入地域
           DefaultProfile profile = DefaultProfile.getProfile(regionId, accessKeyId, accessKeySecret);
           DefaultAcsClient client = new DefaultAcsClient(profile);
           return client;
       }
   }
   ```

6. `VodServiceImpl` 类实现视频上传、删除服务

   ```java
   public interface VodService {
       String uploadVideo(MultipartFile file);
       void removeVideo(String videoId);
   }
   
   @Service
   public class VodServiceImpl implements VodService {
   
       /**
        * 上传视频到阿里云端
        * @param file
        * @return
        */
       @Override
       public String uploadVideo(MultipartFile file) {
           try {
               //accessKeyId, accessKeySecret
               String fileName = file.getOriginalFilename();
               //title：上传之后显示名称
               String title = fileName.substring(0, fileName.lastIndexOf("."));
               InputStream inputStream = file.getInputStream();
               UploadStreamRequest request = new UploadStreamRequest(AliyunVodConfigConstant.ACCESS_KEY_ID, AliyunVodConfigConstant.ACCESS_KEY_SECRET, title, fileName, inputStream);
   
               UploadVideoImpl uploader = new UploadVideoImpl();
               UploadStreamResponse response = uploader.uploadStream(request);
   
               String videoId = response.getVideoId();
               if (!response.isSuccess()) {
                   String errorMessage = "阿里云上传错误：" + "code：" +
                           response.getCode() + ", message：" + response.getMessage();
                   if(ObjectUtils.isEmpty(videoId)){
                       System.out.println(errorMessage);
                   }
               }
   
               return videoId;
           } catch (Exception e) {
               e.printStackTrace();
               return null;
           }
       }
   
       @Override
       public void removeVideo(String videoId) {
           try {
               //初始化对象
               DefaultAcsClient client = AliyunVodSDKUtils.initVodClient(
                       AliyunVodConfigConstant.ACCESS_KEY_ID,
                       AliyunVodConfigConstant.ACCESS_KEY_SECRET);
               //创建删除视频的request对象
               DeleteVideoRequest request = new DeleteVideoRequest();
               //向request中设置videoId
               request.setVideoIds(videoId);
               //调用删除方法
               DeleteVideoResponse response = client.getAcsResponse(request);
   
               System.out.println("RequestId = " + response.getRequestId() + "\n");
   
           } catch (ClientException e) {
               System.out.println("视频删除失败");
           }
       }
   }
   ```
   
7. 编写 Controller 代码并测试

   ```java
   @RequestMapping("/video")
   public class VodController {
       @Autowired
       private VodService vodService;
   
       @PostMapping("uploadVideo")
       public String uploadVideo(MultipartFile file) {
           String videoId = vodService.uploadVideo(file);
           return "视频上传成果，videoId" + videoId;
       }
   }
   ```

   使用 ApiPost 测试上传功能：

   ![image-20220413093036806](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20220413093036806.png)

   上传成功后回到阿里云视频点播控制台会看到上传的视频：

   ![image-20220413093329811](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20220413093329811.png)

## SpringBoot实现阿里云视频播放

::: info

上文讲解了如何将本地视频上传到阿里云平台，如果希望点播阿里云平台内的视频，需要项目中接入阿里云视频点播功能

:::

以前端项目edu-front和后端项目edu为例，集成阿里云视频播放前端配置参考[Web播放器快速接入](https://help.aliyun.com/document_detail/125570.html?spm=a2c4g.11186623.0.0.36f36515DQIzLs)，步骤如下：

1. 前端项目edu-front引入脚本文件和css文件

   ```javascript
   <head>
     <link rel="stylesheet" href="https://g.alicdn.com/de/prismplayer/2.12.1/skins/default/aliplayer-min.css" />  //（可选）如果您的使用场景需要用到H5模式的播放器，则需引用此css文件。
     <script charset="utf-8" type="text/javascript" src="https://g.alicdn.com/de/prismplayer/2.12.1/aliplayer-min.js"></script>  //（必须）引入js文件。
   </head>
   ```

2. 提供挂载元素

   ```xml
   <body>
     <div id="J_prismPlayer"></div>
   </body>
   ```

3. 实例化播放器，参考[点播播放方式](https://help.aliyun.com/document_detail/125570.html?spm=a2c4g.11186623.0.0.36f36515DQIzLs#section-m6w-48u-jvw)或者[直播视频播放](https://help.aliyun.com/document_detail/125570.html?spm=a2c4g.11186623.0.0.36f36515DQIzLs#section-ov3-t67-45x)

   ::: tip

   上述代码在项目edu-front路径`pages/player/_vid.vue`下实现

   :::

集成阿里云视频播放后端配置只需要[获取视频播放凭证](https://help.aliyun.com/document_detail/61064.html)即可，步骤如下：

1. [获取AccessKey](https://help.aliyun.com/document_detail/53045.htm?spm=a2c4g.11186623.0.0.3d393669b6yTjz#task-354412)，创建阿里云AccessKey常量类

   ```java
   @Configuration
   public class AliyunVodConfigConstant implements InitializingBean {
       
       @Value("${aliyun.vod.file.keyid}")
       private String keyId;
       @Value("${aliyun.vod.file.keysecret}")
       private String keySecret;
   
       public static String ACCESS_KEY_ID;
       public static String ACCESS_KEY_SECRET;
   
       @Override
       public void afterPropertiesSet() throws Exception {
           ACCESS_KEY_ID = keyId;
           ACCESS_KEY_SECRET = keySecret;
       }
   }
   ```

   ```properties
   # 你的accessKeyId # 你的AccessKey Secret
   aliyun.vod.file.keyid=你的accessKeyId
   aliyun.vod.file.keysecret=你的AccessKey Secret
   ```

2. 创建阿里云视频点播服务工具类`AliyunVodSDKUtils`

   ```java
   public class AliyunVodSDKUtils {
       public static DefaultAcsClient initVodClient(String accessKeyId, String accessKeySecret) throws ClientException {
           String regionId = "cn-shanghai";  // 点播服务接入地域
           DefaultProfile profile = DefaultProfile.getProfile(regionId, accessKeyId, accessKeySecret);
           DefaultAcsClient client = new DefaultAcsClient(profile);
           return client;
       }
   }
   ```

3. 获取视频播放凭证

   ```java
   @GetMapping("getVideoPlayAuth/{id}")
   public CommonResult getVideoPlayAuth(@PathVariable String id) {
       try {
           System.out.println("id:" + id);
           //创建初始化对象
           DefaultAcsClient client = AliyunVodSDKUtils.initVodClient(AliyunVodConfigConstant.ACCESS_KEY_ID, AliyunVodConfigConstant.ACCESS_KEY_SECRET);
           //创建获取凭证的request和response对象
           GetVideoPlayAuthRequest request = new GetVideoPlayAuthRequest();
           //向request对象中设置视频id
           request.setVideoId(id);
   
           //调用方法获得凭证
           GetVideoPlayAuthResponse response = client.getAcsResponse(request);
           String playAuth = response.getPlayAuth();
           return CommonResult.success().data("playAuth", playAuth);
       } catch (ClientException e) {
           e.printStackTrace();
           throw new CustomizeApiException(20001,"视频playAuth获取失败");
       }
   }
   ```

## SpringBoot 整合 Redis

::: tip Redis简介

[Redis](https://redis.io/docs/about/) 是一个开源、基于内存、使用 C 语言编写的key-value数据库，Redis 支持五种数据类型：string（字符串），list（列表），set（集合），hash（哈希）及 zset(sorted set：有序集合)。redis 中的数据都是字符串，redis 是单线程，不适合存储比较大的数据，主要可以用于数据库、缓存、分布式锁、消息队列等...

:::

网站首页Banner往往变化不是很频繁且访问量相对较大，因此有必要使用Redis实现数据缓存，以便减少数据库压力和提高访问速度。新建SpringBoot项目`springboot-redis`，项目中集成Redis服务步骤如下：

1. [安装并启动Redis服务](https://redis.io/docs/getting-started/)

2. `pom.xml`文件中添加项目依赖

   ```pom
   <!-- redis -->
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-data-redis</artifactId>
   </dependency>
   <dependency>
       <groupId>org.apache.commons</groupId>
       <artifactId>commons-pool2</artifactId>
   </dependency>
   ```

3. 新建Redis配置类

   ```java
   package com.codinglife.config;
   
   import com.fasterxml.jackson.annotation.JsonAutoDetect;
   import com.fasterxml.jackson.annotation.PropertyAccessor;
   import com.fasterxml.jackson.databind.ObjectMapper;
   import com.fasterxml.jackson.databind.PropertyNamingStrategy;
   import com.fasterxml.jackson.databind.SerializationFeature;
   import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
   import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
   import org.springframework.cache.CacheManager;
   import org.springframework.cache.annotation.EnableCaching;
   import org.springframework.context.annotation.Bean;
   import org.springframework.context.annotation.Configuration;
   import org.springframework.data.redis.cache.RedisCacheConfiguration;
   import org.springframework.data.redis.cache.RedisCacheManager;
   import org.springframework.data.redis.connection.RedisConnectionFactory;
   import org.springframework.data.redis.core.RedisTemplate;
   import org.springframework.data.redis.serializer.*;
   
   import java.text.SimpleDateFormat;
   import java.time.Duration;
   import java.time.LocalDateTime;
   import java.time.format.DateTimeFormatter;
   import java.util.TimeZone;
   
   /**
    * @Description: Redis配置类
    * @author: CodingLifeVV
    * @date: 2022.04.22
    */
   @Configuration
   @EnableCaching
   public class RedisConfig {
   
       private static final DateTimeFormatter DATE_TIME_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
       private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd");
       private static final DateTimeFormatter TIME_FORMATTER = DateTimeFormatter.ofPattern("HH:mm:ss");
   
   
       @Bean
       public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {
           RedisTemplate<String, Object> template = new RedisTemplate<>();
           template.setConnectionFactory(redisConnectionFactory);
   
           /**
            * JSON序列化
            */
           Jackson2JsonRedisSerializer serializer = new Jackson2JsonRedisSerializer(Object.class);
           ObjectMapper mapper = new ObjectMapper();
           //取消时间转换格式，默认是时间戳，同时需要设置要表现的时间格式
           mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
           mapper.configure(SerializationFeature.WRITE_DURATIONS_AS_TIMESTAMPS, false);
           mapper.setDateFormat(new SimpleDateFormat("yyy-MM-dd HH:mm:ss"));
   
           //默认序列化没有实现，反序列化有实现
           JavaTimeModule javaTimeModule = new JavaTimeModule();
           javaTimeModule.addSerializer(LocalDateTime.class, new LocalDateTimeSerializer(DATE_TIME_FORMATTER));
   
           mapper.registerModule(javaTimeModule);
           //设置时区
           mapper.setTimeZone(TimeZone.getDefault());
   
           //设置格式化输出
           mapper.setPropertyNamingStrategy(PropertyNamingStrategy.SNAKE_CASE);
           mapper.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
           serializer.setObjectMapper(mapper);
   
           template.setKeySerializer(serializer);
           template.setHashKeySerializer(serializer);
           template.setValueSerializer(serializer);
           template.setHashValueSerializer(serializer);
           return template;
       }
   
       @Bean
       public CacheManager cacheManager(RedisConnectionFactory factory) {
           RedisSerializer<String> redisSerializer = new StringRedisSerializer();
           Jackson2JsonRedisSerializer jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer(Object.class);
           //解决查询缓存转换异常的问题
           ObjectMapper om = new ObjectMapper();
           om.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
           om.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
           jackson2JsonRedisSerializer.setObjectMapper(om);
           // 配置序列化（解决乱码的问题）,过期时间600秒
           RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig()
                   .entryTtl(Duration.ofSeconds(600))
                   .serializeKeysWith(RedisSerializationContext.SerializationPair.fromSerializer(redisSerializer))
                   .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(jackson2JsonRedisSerializer))
                   .disableCachingNullValues();
           RedisCacheManager cacheManager = RedisCacheManager.builder(factory)
                   .cacheDefaults(config)
                   .build();
           return cacheManager;
       }
   }
   ```

4. 配置文件`application.properties`中添加Redis配置

   ```properties
   # redis 配置
   spring.redis.host=127.0.0.1
   spring.redis.port=6379
   spring.redis.database= 0
   spring.redis.timeout=1800000
   
   # SpringBoot 2.x 使用了lettuce客户端
   spring.redis.lettuce.pool.max-active=20
   spring.redis.lettuce.pool.max-wait=-1
   # 最大阻塞等待时间(负数表示没限制)
   spring.redis.lettuce.pool.max-idle=5
   spring.redis.lettuce.pool.min-idle=0
   ```

5. 服务类中使用SpringBoot缓存注解

   ```java
   public class BannerServiceImpl implements BannerService {
   
       /**
        * 查询所有banner
        * @Cacheable 根据方法对其返回结果进行缓存 value 缓存名 key 自定义缓存 key
        * @return
        */
       @Cacheable(value = "banner",key = "'bannerList'")
       @Override
       public List<Banner> getAllBanner(List<Banner> list) {
           //查询数据库数据库代码
           return list;
       }
   
       /**
        * 保存banner
        * @param crmBanner
        * @CacheEvict 清空指定的缓存。一般用在更新或者删除方法上 value 缓存名 allEntries 是否清空所有缓存
        */
       @CacheEvict(value = "banner", allEntries=true)
       @Override
       public void savaBanner(Banner crmBanner) {
   				//更新数据库数据代码
       }
   
       @CacheEvict(value = "banner", allEntries=true)
       @Override
       public void updateBannerById(Banner crmBanner) {
   				//更新数据库数据代码
       }
   
       @CacheEvict(value = "banner", allEntries=true)
       @Override
       public void removeBannerById(String id) {
   				//删除数据库数据代码
       }
   }
   ```

   ::: info SpringBoot缓存注解

   常用的SpringBoot缓存注解有`@Cacheable`、`@CacheEvit`、`@CachePut`，含义分别为：

   1、`@Cacheable`：修饰方法或类，当我们访问它修饰的方法时，优先从缓存中获取，若缓存中存在，则直接获取缓存的值；缓存不存在时，执行方法，并将结果写入缓存，`value`表示缓存名，`key`表示自定义缓存key

   2、`@CacheEvit`：删除缓存，一般用在更新或者删除方法上，`value`表示缓存名，`allEntries`表示是否清空所有缓存

   3、`@CachePut`：不管缓存有没有，都将方法的返回结果写入缓存；适用于缓存更新

   :::

参考文章：

- [Spring boot 集成Redis](https://segmentfault.com/a/1190000039341264)

- [Spring系列缓存注解@Cacheable @CacheEvit @CachePut 使用姿势介绍](https://segmentfault.com/a/1190000040280838)

## SpringBoot 整合 JWT

::: info JWT 概述

JSON Web Token（JWT）是目前最流行的跨域身份验证解决方案。例如服务端A在认证了用户身份后，颁发一个很短过期时间的JWT给客户端，客户端在向服务端B的请求中带上该JWT，则服务端B可以通过验证该JWT来判断用户是否有权执行服务端B上的相关操作。JWT 的学习参考文末参考文章。

:::

项目edu整合了 JWT 跨域身份验证，步骤如下：

1. 子模块`edu-common`下的pom 文件中添加 JWT 依赖 edu-common-utils 

   ```pom
   <!-- JWT 跨越身份验证-->
   <dependency>
       <groupId>io.jsonwebtoken</groupId>
       <artifactId>jjwt</artifactId>
   </dependency>
   ```

2. 子模块`edu-common`下模块`edu-common-utils`创建 JWT 工具类

   ```java
   import io.jsonwebtoken.Claims;
   import io.jsonwebtoken.Jws;
   import io.jsonwebtoken.Jwts;
   import io.jsonwebtoken.SignatureAlgorithm;
   import org.springframework.util.StringUtils;
   
   import javax.servlet.http.HttpServletRequest;
   import java.util.Date;
   
   /**
    * @Description: JWT跨越身份验证工具类
    * JWT token的格式：header.payload.signature 头部.负载.签名
    * header的格式（算法、token的类型）,默认：{"alg": "HS512","typ": "JWT"} alg-签名算法 typ-令牌类型
    * payload的格式 设置：（用户信息、创建时间、生成时间）
    * signature的生成算法：
    * HMACSHA512(base64UrlEncode(header) + "." +base64UrlEncode(payload),secret)
    * @author: CodingLifeVV
    * @date: 2022.04.24
    */
   
   public class JwtUtils {
     
       /**
        * 主题
        */
       public static final String SUBJECT = "edu-user";
   
       /**
        * 过期时间，毫秒，一天
        */
       public static final long EXPIRE = 1000 * 60 * 60 * 24;
   
       /**
        * 密钥
        */
       public static final String APP_SECRET = "secretkeycodinglifevv";
   
       /**
        * 创建 token 信息
        * @param id
        * @return
        */
       public static String createToken(String id, String nickname){
           String JwtToken = Jwts.builder()
                   .setHeaderParam("typ", "JWT")
                   .setHeaderParam("alg", "HS256")
                   .setSubject(SUBJECT)
                   .setIssuedAt(new Date())
                   .setExpiration(new Date(System.currentTimeMillis() + EXPIRE))
                   .claim("id", id)    // 自定义参数声明值
                   .claim("username", nickname)
                   .signWith(SignatureAlgorithm.HS256, APP_SECRET)
                   .compact();
   
           return JwtToken;
       }
   
       public static String getJwtToken(String id, String username){
   
           String JwtToken = Jwts.builder()
                   .setHeaderParam("typ", "JWT")
                   .setHeaderParam("alg", "HS256")
                   .setSubject(SUBJECT)
                   .setIssuedAt(new Date()) // 签发时间
                   .setExpiration(new Date(System.currentTimeMillis() + EXPIRE))
                   .claim("id", id) // 自定义参数声明值
                   .claim("nickname", username)
                   .signWith(SignatureAlgorithm.HS256, APP_SECRET)
                   .compact();
           return JwtToken;
       }
   
       /**
        * 验证 token 是否存在且有效
        * @param jwtToken
        * @return
        */
       public static boolean validateToken(String jwtToken) {
           if(StringUtils.isEmpty(jwtToken)) return false;
           try {
               Jwts.parser().setSigningKey(APP_SECRET).parseClaimsJws(jwtToken);
           } catch (Exception e) {
               e.printStackTrace();
               return false;
           }
           return true;
       }
   
       /**
        * 验证 token 是否存在且有效
        * @param request
        * @return
        */
       public static boolean checkToken(HttpServletRequest request) {
           try {
               String jwtToken = request.getHeader("token");
               if(StringUtils.isEmpty(jwtToken)) return false;
               Jwts.parser().setSigningKey(APP_SECRET).parseClaimsJws(jwtToken);
           } catch (Exception e) {
               e.printStackTrace();
               return false;
           }
           return true;
       }
   
       /**
        * 根据token获取会员id
        * @param request
        * @return
        */
       public static String getMemberIdByJwtToken(HttpServletRequest request) {
           String jwtToken = request.getHeader("token");
           if(StringUtils.isEmpty(jwtToken))
               return "";
           Jws<Claims> claimsJws = Jwts.parser().setSigningKey(APP_SECRET).parseClaimsJws(jwtToken);
           Claims claims = claimsJws.getBody();
           return (String)claims.get("id");
       }
   }
   ```

3. 登陆业务使用 JWT 进行跨域身份验证，在 `edu-service-ucenter` 子模块Service服务类 `UcenterMemberServiceImpl.java` `login()` 方法中

   ```java
   @Override
   public String login(UcenterMember ucenterMember) {
       String phone = ucenterMember.getMobile();
       String password = ucenterMember.getPassword();
   
       if (ObjectUtils.isEmpty(phone)||ObjectUtils.isEmpty(password)){
           throw new CustomizeApiException(20001,"手机号和密码为空");
       }
     
       //判断手机号是否正确
       //...省略代码
   
       //判断密码是否相等
       //...省略代码
   
       //判断用户是否被禁用
       //...省略代码
   
       //登录成功
       //按照jwt生产token返回
       String token = JwtUtils.createToken(mobileMember.getId(), mobileMember.getNickname());
       return token;
   }
   ```

   Controller层类`UcenterMemberController`调用Service层`login()`方法，返回token信息到前端

   ```java
   /**
    * 使用手机号和密码登陆
    * @param ucenterMember
    * @return
    */
   @PostMapping("login")
   public CommonResult login(@RequestBody UcenterMember ucenterMember){
       String token =ucenterMemberService.login(ucenterMember);
       return CommonResult.success().data("token",token);
   }
   ```



参考文章：

- [基于JWT实现的Token身份认证](https://segmentfault.com/a/1190000021224288)

- [JWT跨越认证详解及应用场景](https://segmentfault.com/a/1190000038434077)
- [SpringBoot整合JWT](https://segmentfault.com/a/1190000040003653)

- [Cookie 和 Session 的区别](https://www.zhihu.com/question/19786827)

## SpringBoot 整合阿里云短信服务

阿里云短信服务可用于验证码发送，短信通知以及推广短信等业务。阿里云短信服务需要开通短信服务，开通步骤如下：

1. 登陆[阿里云官网](https://www.aliyun.com/?utm_content=se_1008364713)，选择[短信服务](https://www.aliyun.com/product/sms?spm=5176.19720258.J_3207526240.38.7b8176f4jD4U88)中**免费开通**功能

   ![image-20221021103639198](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20221021103639198.png)

2. 添加签名管理，选择**国内消息-签名管理-添加签名**，输入相关信息后提交

   ![image-20221021104725962](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20221021104725962.png)

3. 添加模版管理，选择**国内消息-模版管理-添加模版**，输入相关信息后添加

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20221021110428025.png" alt="image-20221021110428025" style="zoom:50%;" />

开通短信服务审核通过之后，便可以使用短信服务，edu项目中整合阿里云短信服务步骤如下：

1. 登陆阿里云，点击右上角头像AccessKey管理，创建你的AccessKey

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20221021133614371.png" alt="image-20221021133614371" style="zoom:50%;" />

   之后记住你的`AccessKey ID` 和 `AccessKey Secret`

2. 创建短信发送模块`edu-service-msm`，`application.properies` 文件配置阿里云`AccessKey ID` 和 `AccessKey Secret`

   ```properties
   aliyun.msm.file.keyid=你的keyid
   aliyun.msm.file.keysecret=你的keysecret
   ```

   创建配置工具类`AliyunMsmConfigConstant`获取配置文件`AccessKey ID` 和 `AccessKey Secret`

   ```java
   import org.springframework.beans.factory.InitializingBean;
   import org.springframework.beans.factory.annotation.Value;
   import org.springframework.context.annotation.Configuration;
   
   @Configuration
   public class AliyunMsmConfigConstant implements InitializingBean {
   
       @Value("${aliyun.msm.file.keyid}")
       private String keyId;
       @Value("${aliyun.msm.file.keysecret}")
       private String keySecret;
   
       public static String ACCESS_KEY_ID;
       public static String ACCESS_KEY_SECRET;
   
       @Override
       public void afterPropertiesSet() throws Exception {
           ACCESS_KEY_ID = keyId;
           ACCESS_KEY_SECRET = keySecret;
       }
   }
   ```

3. pom文件中引入相关依赖

   ```xml
   <dependency>
     <groupId>com.aliyun</groupId>
     <artifactId>dysmsapi20170525</artifactId>
     <version>2.0.22</version>
   </dependency>
   ```

4. 创建发送短信工具类`SendSmsUtils`

   ```java
   public class SendSmsUtils {
       public static boolean send(Map<String, Object> param, String phone) throws Exception {
           Client client = SendSmsUtils.createClient(AliyunMsmConfigConstant.ACCESS_KEY_ID,
                   AliyunMsmConfigConstant.ACCESS_KEY_SECRET);
   
           SendSmsRequest sendSmsRequest = new SendSmsRequest()
                   .setSignName("阿里云短信测试")      // 短信签名名称
                   .setTemplateCode("SMS_154950909") // 短信模版
                   .setPhoneNumbers(phone)           // 接收短信的手机号
                   .setTemplateParam(JSONObject.toJSONString(param)); // 短信模版对应的变量值
           // 复制代码运行请自行打印 API 的返回值
           SendSmsResponse response = client.sendSms(sendSmsRequest);
   
           if (response.getBody().getCode().equals("OK")) {
               return true;
           }
           return false;
       }
   
       /**
        * 使用AK&SK初始化账号Client
        * @param accessKeyId
        * @param accessKeySecret
        * @return
        * @throws Exception
        */
       public static Client createClient(String accessKeyId, String accessKeySecret) throws Exception {
           Config config = new Config()
                   // 您的AccessKey ID
                   .setAccessKeyId(accessKeyId)
                   // 您的AccessKey Secret
                   .setAccessKeySecret(accessKeySecret);
           // 访问的域名
           config.endpoint = "dysmsapi.aliyuncs.com";
           return new Client(config);
       }
   }
   ```

   ::: warning

   以上代码为测试短信发送功能代码实现，参考[测试专用签名模版](https://next.api.aliyun.com/api/Dysmsapi/2017-05-25/SendSms?tab=DOC)，如下图所示：

   ![image-20221021145011912](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20221021145011912.png)

   具体短信发送功能见[官方API](https://next.api.aliyun.com/api/Dysmsapi/2017-05-25/SendSms?spm=api-workbench.SDK%20Document.0.0.487d1e0fc7gK1e&lang=JAVA)，上述`send()`方法中的`.setSignName()`和`.setTemplateCode()`需要传入个人提前申请的签名和模版名称

   :::

5. Controller层调用短信发送工具类短信发送`send()`方法

   ```java
   @GetMapping("send/{phone}")
   public CommonResult sendMsm(@PathVariable String phone) throws Exception {
       // 从redis中获取验证码，如果获取到直接返回
       String code = redisTemplate.opsForValue().get(phone);
       if (!ObjectUtils.isEmpty(code)){
           return CommonResult.success();
       }
   
       // 如果redis获取不到，进行阿里云发送
       // 生成四位随机数，作为短信模版对应的变量值，传递阿里云进行发送
       code = RandomUtil.getFourBitRandom();
       Map<String, Object> param = new HashMap<>();
       param.put("code",code);
       // 调用 Service 发送短信服务
       boolean isSend = msmService.send(param,phone);
       if (isSend) {
           //阿里云发送成功，把发送成功的验证码放入redis缓存中
           //设置有效时间
           redisTemplate.opsForValue().set(phone,code,5, TimeUnit.MINUTES);
           return CommonResult.success();
       }else
           return CommonResult.setCommonResult(ResultCode.ERROR, "短信发送失败");
   }
   ```

   ::: tip
   上述代码中类`RandomUtil`定义在项目edu子模块`edu-common-utils`下，`code = RandomUtil.getFourBitRandom()`生成四位随机数，作为短信模版对应的变量值

   :::

6. 调用接口`http://localhost:8005/edumsm/msm/send/13588825895`，最终测试结果如下

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20221022191804319.png" alt="image-20221022191804319" style="zoom:20%;" />

参考文章：

- [短信服务快速学习](https://dysms.console.aliyun.com/quickstart?spm=5176.25163407.domtextsigncreate-index-1ec3c_58c50_0.1.2c0bbb6evJyyEL)

- [短信服务升级版SDK](https://next.api.aliyun.com/api-tools/sdk/Dysmsapi?version=2017-05-25&language=java-tea)





## SpringBoot 整合跳转微信登录

如果你的应用需要通过跳转微信来实现登陆操作，首先需要在[微信开放平台](https://open.weixin.qq.com/)注册账号并进行以下操作，步骤如下：

1. 注册账号并激活邮箱

2. 完善开发者资料

3. 开发者资料认证

4. 创建网站应用，微信登陆流程参考[官方文档](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419316505&token=e547653f995d8f402704d5cb2945177dc8aa4e7e&lang=zh_CN)


之后便可以在后端接入微信登陆，参考[授权微信登陆流程](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419316505&token=e547653f995d8f402704d5cb2945177dc8aa4e7e&lang=zh_CN)，获取access_token时序图如下：

![image-20221022193948734](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20221022193948734.png)

项目edu在子模块`edu-service-ucenter`接入微信登陆功能，步骤如下：

首先要生成微信二维码，**生成微信二维码**步骤如下：

1. `application.properties`添加相关配置信息

   ```properties
   # 微信开放平台 appid
   wx.open.app_id=你的appid
   # 微信开放平台app_secret
   wx.open.app_secret=你的app_secret
   # 微信开放平台 重定向url
   wx.open.redirect_url=http://你的服务器名称/api/ucenter/wx/callback
   ```

   ::: tip

   如果你仅仅是为了学习使用，不希望注册认证微信开放平台，可以使用以下配置文件内容进行功能测试：

   ```properties
   server.port=8160
   # 微信开放平台 appid
   wx.open.app_id=wxed9954c01bb89b47
   # 微信开放平台 appsecret
   wx.open.app_secret=a7482517235173ddb4083788de60b90e
   # 微信开放平台 重定向url
   wx.open.redirect_url=http://localhost:8160/api/ucenter/wx/callback
   ```

   实测有效，端口号必须为8160

   :::

2. 创建微信开放平台常量配置类`ConstanWxtiesUtil`

   ```java
   @Component
   public class ConstanWxtiesUtil implements InitializingBean {
       @Value("${wx.open.app_id}")
       private String appId;
   
       @Value("${wx.open.app_secret}")
       private String appSecret;
   
       @Value("${wx.open.redirect_url}")
       private String redirectUrl;
   
       public static String WX_OPEN_APP_ID;
       public static String WX_OPEN_APP_SECRET;
       public static String WX_OPEN_REDIRECT_URL;
   
       @Override
       public void afterPropertiesSet() throws Exception {
           WX_OPEN_APP_ID = appId;
           WX_OPEN_APP_SECRET = appSecret;
           WX_OPEN_REDIRECT_URL = redirectUrl;
       }
   }
   ```

3. 创建微信登陆Controller类`WxApiController`，生成微信扫码登陆二维码

   ```java
   @CrossOrigin
   @Controller // 只请求地址，不返回数据
   @RequestMapping("/api/ucenter/wx")
   public class WxApiController {
   
       @Autowired
       private UcenterMemberService ucenterMemberService;
   
       /**
        * 生成微信二维码
        * @return
        */
       @GetMapping("login")
       public String getWxCode(){
           // 微信开放平台授权baseUrl
           //? %s相当于占位符，可以填充参数
           // 生成微信二维码——第一步请求Code的链接
           String baseUrl = "https://open.weixin.qq.com/connect/qrconnect" +
                   "?appid=%s" +
                   "&redirect_uri=%s" +
                   "&response_type=code" +
                   "&scope=snsapi_login" +
                   "&state=%s" +
                   "#wechat_redirect";
           //授权码需要传入加密过的URL,必须使用
           String redirectUrl = ConstanWxtiesUtil.WX_OPEN_REDIRECT_URL;//获取业务服务器重定向地址
           try {
               redirectUrl = URLEncoder.encode(redirectUrl,"utf-8");//url编码
           } catch (UnsupportedEncodingException e) {
               e.printStackTrace();
           }
   
           //传递参数，向baseUrl中的占位符%s传递参数值
           String url = String.format(
                   baseUrl,
                   ConstanWxtiesUtil.WX_OPEN_APP_ID,
                   redirectUrl,
                   "codinglife");
   
           //请求微信地址,重定向的方式
           //类似于："redirect:http://localhost:3000"
           return "redirect:" + url;
       }
   }
   ```

   ::: tip 代码理解

   `getWxCode()` 方法用于生成微信登陆二维码，代码中定义的`baseUrl`为[授权微信登陆流程](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419316505&token=e547653f995d8f402704d5cb2945177dc8aa4e7e&lang=zh_CN)**第一步：请求CODE**的链接，如下图所示。

   ![image-20221022194937799](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20221022194937799.png)

   :::

   测试结果：

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20221022195551610.png" alt="image-20221022195551610" style="zoom:40%;" />

上述代码生成扫描二维码之后，微信用户使用微信扫描二维码并且确认登录后，PC端会跳转到配置好的域名地址：`http://回调地址/api/ucenter/wx/callback`（在`application.properties`配置的`wx.open.redirect_url`），为了方便在本地做测试，可以在`WxApiController`类中定义一个回调方法`callback()`，实际项目开发中无需做此操作，部署项目时会配置好回调地址，`callback()`方法如下：

```java
@CrossOrigin
@Controller // 只请求地址，不返回数据
@RequestMapping("/api/ucenter/wx")
public class WxApiController {
    /**
     * 获取扫描人信息，添加数据
     * @param code
     * @param state
     * @param session
     * @return
     */
    @GetMapping("callback")
    public String callback(String code, String state, HttpSession session) throws Exception {
        try {
            //(1)得到授权临时票据code

            //(2)拿着code请求微信开放平台的固定地址accessTokenUrl，得到两个值access_token【访问凭证】和openid【每个微信唯一凭证】
            String baseAccessTokenUrl = "https://api.weixin.qq.com/sns/oauth2/access_token" +
                    "?appid=%s" +
                    "&secret=%s" +
                    "&code=%s" +
                    "&grant_type=authorization_code";

            String accessTokenUrl = String.format(baseAccessTokenUrl,
                    ConstanWxtiesUtil.WX_OPEN_APP_ID,
                    ConstanWxtiesUtil.WX_OPEN_APP_SECRET,
                    code);
            //请求拼接好的地址accessTokenUrl【code加上appid和access_token】，返回两个值access_token和openid
            //使用httpclient发送请求，HttpClient不需要通过浏览器进行地址请求，得到返回结果
            String accessTokenInfo = HttpClientUtils.get(accessTokenUrl);

            //使用gson转换工具Gson
            Gson gson = new Gson();
            HashMap mapAccessToken = gson.fromJson(accessTokenInfo, HashMap.class);

            String access_token = (String)mapAccessToken.get("access_token");
            String openid = (String)mapAccessToken.get("openid");


            //判断该微信信息是否注册过
            UcenterMember member = ucenterMemberService.getMemberByOperid(openid);
            if (member == null){
                //(3)拿着access_token和openid，再去请求微信提供的固定地址，获取扫描人信息
                //访问微信的资源服务器，获取用户信息
                String baseUserInfoUrl = "https://api.weixin.qq.com/sns/userinfo" +
                        "?access_token=%s" +
                        "&openid=%s";

                //再次拼接微信地址
                String userInfoUrl = String.format(baseUserInfoUrl, access_token, openid);

                String userInfo = HttpClientUtils.get(userInfoUrl);

                //获取的微信个人信息json信息进行转换
                HashMap userInfoMap = gson.fromJson(userInfo, HashMap.class);
                String nickname = (String)userInfoMap.get("nickname");//昵称
                String headimgurl = (String)userInfoMap.get("headimgurl");//头像

                //把微信信息注册到数据库中
                member = new UcenterMember();
                member.setNickname(nickname);
                member.setOpenid(openid);
                member.setAvatar(headimgurl);
                ucenterMemberService.save(member);
            }

            //使用jwt生成token字符串
            String jwtToken = JwtUtils.getJwtToken(menber.getId(), menber.getNickname());
            //返回首页面，该首页面为前端首页面
            return "redirect:http://localhost:3000?token="+jwtToken;
        } catch (Exception e) {
            e.printStackTrace();
            throw new CustomizeApiException(20001,"登录失败");
        }
    }
}
```

::: info

edu项目中子模块`edu-service-order`实现了微信支付功能整合，参考接入[微信支付](https://pay.weixin.qq.com/static/applyment_guide/applyment_detail_website.shtml)[参考接入微信支付流程接入前准备](https://pay.weixin.qq.com/wiki/doc/apiv3/open/pay/chapter2_7_1.shtml)

:::

参考文章：

- [实现 OAuth2 单点登录SSO—单点登录和OAuth2概述](https://segmentfault.com/a/1190000022172575)
- [网站应用微信登录开发指南](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419316505&token=e547653f995d8f402704d5cb2945177dc8aa4e7e&lang=zh_CN)























