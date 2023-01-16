---
title: SpringBoot整合Shiro
order: 6
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


### Shiro 简介

`Shiro`是一个功能强大和易于使用的`Java`安全框架，为开发人员提供一个直观而全面的解决方案的认证，授权，加密，会话管理

![image-20211223110049792](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211223110049792.png)

**Shiro 四个主要的功能：**

- Authentication：身份认证/登录，验证用户是不是拥有相应的身份
- Authorization：授权，即权限验证，判断某个已经认证过的用户是否拥有某些权限访问某些资源，一般授权会有角色授权和权限授权
- Session Management：会话管理，即用户登录后就是一次会话，在没有退出之前，它的所有信息都在会话中；会话可以是普通JavaSE环境的，也可以是如Web环境的，web 环境中作用是和 HttpSession 是一样的
- Cryptography：加密，保护数据的安全性，如密码加密存储到数据库，而不是明文存储

**Shiro 的其它几个特点：**

- Web Support：Web支持，可以非常容易的集成到Web环境；
- Caching：缓存，比如用户登录后，其用户信息、拥有的角色/权限不必每次去查，这样可以提高效率；
- Concurrency：shiro支持多线程应用的并发验证，即如在一个线程中开启另一个线程，能把权限自动传播过去；
- Testing：提供测试支持；
- Run As：允许一个用户假装为另一个用户（如果他们允许）的身份进行访问；
- Remember Me：记住我，这个是非常常见的功能，即一次登录后，下次再来的话不用登录了。

![image-20211223110812447](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211223110812447.png)

Shiro 的架构有 3 个主要概念：`Subject`， `SecurityManager`和`Realms`

- `Subject`：主体，相当于是请求过来的“用户”
- `SecurityManager`： 管理着所有 `Subject`，负责进行认证和授权、及会话、缓存的管理，是 `Shiro` 的心脏，所有具体的交互都通过 `SecurityManager` 进行拦截并控制
- `Realm`：一般我们都需要去实现自己的`Realm` ，可以有`1`个或多个 `Realm`，即当我们进行登录认证时所获取的安全数据来源(帐号/密码)

学习参考：https://www.cnblogs.com/progor/p/10970971.html

### SpringBoot整合Shiro环境搭建

步骤如下：

1. 创建`SpringBoot`项目`springboot-shiro-first`，导入`Shiro`依赖包

   ```xml
   <!--SpringBoot 整合 Shiro-->
   <dependency>
       <groupId>org.apache.shiro</groupId>
       <artifactId>shiro-spring</artifactId>
       <version>1.4.1</version>
   </dependency>
   ```

2. 编写简单的前端代码

   `index.html`：

   ```html
   <!DOCTYPE html >
   <html lang="en" xmlns:th="http://www.thymeleaf.org" >
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
   </head>
   <body>
       <h1>首页</h1>
       <p th:text="${msg}"></p>
       <a th:href="@{/user/add}">add</a> |
       <a th:href="@{/user/update}">update</a>
   </body>
   </html>
   ```

   `add.html`：

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
   </head>
   <body>
       <h1>add</h1>
   </body>
   </html>
   ```

   `update.html`:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
   </head>
   <body>
       <h1>update</h1>
   </body>
   </html>
   ```

3. 编写`controller`代码`MyController`：

   ```java
   @Controller
   public class MyController {
   
       @RequestMapping({"/","/index"})
       public String toIndex(Model model) {
           model.addAttribute("msg","hello, Shiro!");
           return "index";
       }
   
       @RequestMapping("/user/add")
       public String add() {
           return "user/add";
       }
   
       @RequestMapping("/user/update")
       public String update() {
           return "user/update";
       }
   }
   ```

4. 编写`Shiro`配置类`ShiroConfig`

   ```java
   package com.wyj.config;
   
   import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
   import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
   import org.springframework.beans.factory.annotation.Qualifier;
   import org.springframework.context.annotation.Bean;
   import org.springframework.context.annotation.Configuration;
   
   @Configuration
   public class ShiroConfig {
   
       // ShiroFilterFactoryBean
       @Bean
       public ShiroFilterFactoryBean getShiroFilterFactoryBean(@Qualifier("securityManager")DefaultWebSecurityManager defaultWebSecurityManager) {
           ShiroFilterFactoryBean bean = new ShiroFilterFactoryBean();
           // 设置安全管理器
           bean.setSecurityManager(defaultWebSecurityManager);
           return bean;
       }
   
       // DefaultWebSecurityManager
       @Bean(name = "securityManager")
       public DefaultWebSecurityManager getDefaultWebSecurityManager(@Qualifier("userRealm") UserRealm userRealm) {
           DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
           // 关联 UserRealm
           securityManager.setRealm(userRealm);
           return securityManager;
       }
   
       // 创建 realm 对象, 需要自定义类
       // @Bean(name = "userRealm")
       @Bean
       public UserRealm userRealm() {
           return new UserRealm();
       }
   }
   ```

   注意：

   1. 以上代码为`Shiro`配置类的固定写法，需要创建`ShiroFilterFactoryBean`过滤器对象、`DefaultWebSecurityManager`对象、自定义`Realm`对象

   2. 通过`@Qualifier`标签拿到`userRealm()`方法创建的`Bean`对象，绑定到`getDefaultWebSecurityManager()`方法中的参数`userRealm`上

      ![image-20211224162145421](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211224162145421.png)

5. 编写自定义的`Realm`类，需要继承`AuthorizingRealm`抽象类

   ```java
   /**
    * 自定义 UserRealm, 需要继承 AuthorizingRealm
    */
   public class UserRealm extends AuthorizingRealm {
   
       // 授权
       @Override
       protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
           System.out.println("执行了=>授权doGetAuthorizationInfo");
           return null;
       }
   
       // 认证
       @Override
       protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
           System.out.println("执行了=>认证doGetAuthenticationInfo");
           return null;
       }
   }
   ```

6. 测试搭建环境

   测试首页和`add`和`update`按钮正常跳转

   ![image-20211227100533969](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211227100533969.png)

   ![image-20211227100555318](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211227100555318.png)

   ![image-20211227100620027](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211227100620027.png)

### 登录拦截

如果点击`add`、`update`时，要设置拦截功能：在进行页面跳转过程中首先会跳转到一个登录界面。`Shiro`可以通过拦截器链实现该功能，常见的拦截器有：

- `anon`：任何人都可以访问
- `authc`：只有认证后才可以访问
- `logout`：只有登录后才可以访问
- `roles`[角色名]：只有拥有特定角色才能访问
- `perms`["行为"]：只有拥有某种行为的才能访问

代码实现步骤如下：

1. 手动创建拦截跳转页面，并编写相应`controller`

   `login.html`：

   ```html
   <!DOCTYPE html>
   <html lang="en" xmlns:th="http://www.thymeleaf.org">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
       <title>登录</title>
       <!--semantic-ui-->
       <link href="https://cdn.bootcss.com/semantic-ui/2.4.1/semantic.min.css" rel="stylesheet">
   </head>
   <body>
   
   <!--主容器-->
   <div class="ui container">
   
       <div class="ui segment">
   
           <div style="text-align: center">
               <h1 class="header">登录</h1>
           </div>
   
           <div class="ui placeholder segment">
               <div class="ui column very relaxed stackable grid">
                   <div class="column">
                       <div class="ui form">
                           <form th:action="@{/toLogin}" method="post">
                               <div class="field">
                                   <label>Username</label>
                                   <div class="ui left icon input">
                                       <input type="text" placeholder="Username" name="uname">
                                       <i class="user icon"></i>
                                   </div>
                               </div>
                               <div class="field">
                                   <label>Password</label>
                                   <div class="ui left icon input">
                                       <input type="password" name="pwd">
                                       <i class="lock icon"></i>
                                   </div>
                               </div>
                               <input type="submit" class="ui blue submit button"/>
                           </form>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
   
   <script th:src="@{/js/jquery-3.1.1.min.js}"></script>
   <script th:src="@{/js/semantic.min.js}"></script>
   
   </body>
   </html>
   ```

   `MyController.java`：

   ```java
   @RequestMapping("/toLogin")
   public String toLogin() {
       return "login";
   }
   ```

2. 编写登录拦截功能

   登录拦截功能代码的实现需要在`ShiroConfig`类中`getShiroFilterFactoryBean(...)`添加以下代码：

   ```java
   @Bean
   public ShiroFilterFactoryBean getShiroFilterFactoryBean(@Qualifier("securityManager")DefaultWebSecurityManager defaultWebSecurityManager) {
       // ...
   
       // (1)设置拦截器链 : anon authc logout roles perms
       Map<String, String> filterMap = new LinkedHashMap<>();
       //filterMap.put("/user/add","authc");
       //filterMap.put("/user/update","authc");
       //
       filterMap.put("/user/**","authc");
       bean.setFilterChainDefinitionMap(filterMap);
   
       // (2)设置拦截登录的请求(拦截之后跳转的页面)
       bean.setLoginUrl("/toLogin");
   
       return bean;
   }
   ```

   - `filterMap.put("/user/**","authc");`表示路径`user`下的所有请求必须通过认证才会跳转
   - `bean.setLoginUrl("/toLogin");`表示路径`user`下的所有请求会跳转到`URL`为`/toLogin`的登录页面进行认证

3. 测试

   点击`add`、`update`时，会跳转到登录界面(登录拦截)：

   ![image-20211227104718821](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211227104718821.png)

   如果删除代码：

   ```java
   // (2)设置拦截登录的请求(拦截之后跳转的页面)
   bean.setLoginUrl("/toLogin");
   ```

   点击`add`、`update`时，跳转失败：

   ![image-20211227105005025](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211227105005025.png)


### 用户认证

用户在跳转页面时需要经过验证，否则不能跳转到界面里，登录拦截实现了拦截功能，此时需要在登录界面输入相应的用户名和密码进行验证，来判断输入的用户是否可以通过验证并进行界面跳转。步骤如下：

1. 前端登录界面输入用户名和密码跳转到相应的`controller`进行处理。编写一个对应的`controller`

   ```java
   @RequestMapping("/login")
   public String login(String username, String password, Model model) {
   
       // 获取当前用户
       Subject subject = SecurityUtils.getSubject();
       // 封装用户的登录数据
       UsernamePasswordToken token = new UsernamePasswordToken(username, password);
       // 执行登录方法
       try {
           subject.login(token);
           return "index";
       } catch(UnknownAccountException e) { //用户名不存在
           model.addAttribute("msg","用户名错误");
           return "login";
       } catch (IncorrectCredentialsException e) { // 密码不存在
           model.addAttribute("msg","密码错误");
           return "login";
       }
   }
   ```

   此时进行登录测试会发现自动执行了`UserRealm`类中的`doGetAuthenticationInfo(...)`认证方法

   ![image-20211227153805951](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211227153805951.png)

2. 在`UserRealm`类补全的`doGetAuthenticationInfo(...)`认证方法代码

   ```java
   // 认证
   @Override
   protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
       System.out.println("执行了=>认证doGetAuthenticationInfo");
   
       // 模拟获取数据库中的用户名和密码
       String uname = "root";
       String pwd = "123456";
   
       UsernamePasswordToken userToken = (UsernamePasswordToken) token;
   
       System.out.println(userToken.getUsername());
   
       // 验证用户名是否输入正确
       if (!userToken.getUsername().equals(uname)) {
           // 用户名输入错误, return null 表示抛出异常 UnknownAccountException
           return null;
       }
   
       // 验证密码是否输入正确, 由 Shiro 自动完成
       return new SimpleAuthenticationInfo("", pwd, "");
   }
   ```

3. 用户名密码输入错误，需要将错误信息显示在登录界面，在登录代码login.html中写一个错误信息标签

   ```html
   <div class="field" style="align-content: center">
       <p th:text="${msg}" style="color: red"></p>
   </div>
   ```

4. 测试

   ![image-20211227163507053](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211227163507053.png)



### 整合Mybatis

整合MyBatis流程如下：

1. `pom`文件导入`jdbc`、`Druid`、`Mybatis`、`log4j`依赖包，`yaml`文件中配置数据源参数

2. 编写`pojo`对象以及对应的`mapper`和`MapperXML`映射，`yaml`文件中整合`MyBatis`

3. 编写`service`层代码

4. 重写`UserRealm`类中的认证方法`doGetAuthenticationInfo(...)`

   ```java
   // 认证
   @Override
   protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
       System.out.println("执行了=>认证doGetAuthenticationInfo");
       // 模拟获取数据库中的用户名和密码
       //String uname = "root";
       //String pwd = "123456";
   
       UsernamePasswordToken userToken = (UsernamePasswordToken) token;
   
       /*// 验证用户名是否输入正确
       if (!userToken.getUsername().equals(uname)) {
           // 用户名输入错误, return null 表示抛出异常 UnknownAccountException
           return null;
       }
       // 验证密码是否输入正确, 由 Shiro 自动完成
       return new SimpleAuthenticationInfo("", pwd, "");*/
   
       User user = userService.queryUserByName(userToken.getUsername());
   
       // 验证用户名是否输入正确
       if (user == null) {
           // 用户名输入错误, return null 表示抛出异常 UnknownAccountException
           return null;
       }
       // 验证密码是否输入正确, 由 Shiro 自动完成
       // user.getPwd() pwd 需要定义为 String 类型, 定义为 int 类型报错
       return new SimpleAuthenticationInfo("", user.getPwd(), "");
   }
   ```

   注意：`SimpleAuthenticationInfo()`中传入的密码需要`String`类型，传入`int`类型认证失败

### 用户授权

如果需要实现部分用户可以访问`add`页面，部分页面可以访问`update`页面，需要用到用户授权功能，实现步骤如下：

1. 在`ShiroConfig`配置类`getShiroFilterFactoryBean(...)`方法中添加如下代码：

   ```java
   // 授权
   // 携带 user:add 字符串的用户才能有权限访问 user 文件夹下的 add 页面
   filterMap.put("/user/add","perms[user:add]");
   filterMap.put("/user/update","perms[user:update]");
   ```

   表示如果想访问`/user`文件夹下的`add`资源，需要用户具有`user:add`权限

   之后登录认证成功之后输入正确的用户名和密码发现报错未授权，错误`401`

   ![image-20211228101430154](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211228101430154.png)

   此时执行了`UserRealm`类中的授权方法

   ![image-20211228101621327](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211228101621327.png)

   需要在`UserRealm`类中的授权方法编写授权代码

2. 用户未授权可以跳转到自定义未授权页面，而不是`401`页面

   `ShiroConfig`类`getShiroFilterFactoryBean(...)`方法添加：

   ```java
   // 设置未授权跳转页面
   bean.setUnauthorizedUrl("/unauth");
   ```

   类`MyController`添加：

   ```java
   @RequestMapping("/unauth")
   @ResponseBody
   public String unauth() {
       return "用户未授权访问权限!";
   }
   ```

   测试如果用户未授权跳转到以下界面：

   ![image-20211228112034387](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211228112034387.png)

3. 在`UserRealm`类中的授权方法编写授权代码

   ```java
   // 授权
   @Override
   protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
       System.out.println("执行了=>授权doGetAuthorizationInfo");
   
       SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
       // 为所有用户增加 user:add 权限
       //info.addStringPermission("user:add");
   
       // 获取当前登录用户
       Subject subject = SecurityUtils.getSubject();
       // 获取认证方法中查到的当前登录用户信息 : User 对象
       User currentUser = (User) subject.getPrincipal();
       // 获取当前用户在数据库中查询到的拥有的权限, 并为当前用户设置该权限
       info.addStringPermission(currentUser.getPerms());
   
       return info;
   }
   ```

   - 对象`subject`通过`getPrincipal()`方法获得当前`User`用户，`User`用户的信息是在认证代码中数据库查询到的，修改认证代码如下所示，通过`return`返回了一个`SimpleAuthenticationInfo`对象，将`user`对象作为`SimpleAuthenticationInfo`对象的第一个参数传入，之后授权代码便可以通过`getPrincipal()`方法获得当前`User`用户的信息了。

     ```java
     // 认证
     @Override
     protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) {
     	// ...
         return new SimpleAuthenticationInfo(user, user.getPwd(), "");
     }
     ```

   - 通过`addStringPermission()`为当前`User`用户设置与数据库对应一致的权限，数据库表`usetest`增加权限字段`perms`，对应的User实体类也增加`perms`属性

     ```java
     @Data //Lombok标签
     @AllArgsConstructor
     @NoArgsConstructor
     public class User {
         //属性名称要与数据库对应表字段名称一致(不区分大小写)
         private int id;
         private String username;
         private String pwd;
         private String perms;
     }
     ```

     ![image-20211228155246787](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211228155246787.png)



### 整合Thymeleaf

当某一个用户没有`update`权限时，希望将`update`隐藏，需要整合`Thymeleaf`，流程如下：



![image-20211228170240378](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211228170240378.png)

1. 导入`Thymeleaf`与`Shiro`整合依赖包

   ```xml
   <!--thymeleaf整合shiro-->
   <dependency>
       <groupId>com.github.theborakompanioni</groupId>
       <artifactId>thymeleaf-extras-shiro</artifactId>
       <version>2.0.0</version>
   </dependency>
   ```

2. `Shiro`配置类`ShiroConfig`中进行配置

   ```java
   // 整合ShiroDialect : 用来整合 Shiro 和 Thymeleaf
   @Bean
   public ShiroDialect getShiroDialect() {
       return new ShiroDialect();
   }
   ```

3. 前端首页`index.html`代码导入命名空间

   ```xml
   <html lang="en" xmlns:th="http://www.thymeleaf.org"
         xmlns:shiro="http://www.thymeleaf.org/thymeleaf-extras-shiro">
   ```

4. 修改`index.html`代码

   ```html
   <body>
       <h1>首页</h1>
       <p th:text="${msg}"></p>
   
       <div>
           <a th:href="@{/toLogin}">登录</a>
       </div>
   
       <div shiro:hasPermission="user:add">
           <a th:href="@{/user/add}">add</a>
       </div>
       <div shiro:hasPermission="user:update">
           <a th:href="@{/user/update}">update</a>
       </div>
   </body>
   ```

   ![image-20211228172104304](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211228172104304.png)

修改之后，测试发现，不具有`add`权限的用户登录，只显示`update`操作，此时已经登录成功，需要隐藏`登录`选项，通过获取用户`session`的操作来实现，步骤如下：

1. 认证方法中将已登录的用户信息保存在`session`中

   ```java
   // 认证
   @Override
   protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException { 
   	// ...
       
       // 获取当前 session, 并将当前用户信息存在 session 中
       Subject currentSubject = SecurityUtils.getSubject();
       Session session = currentSubject.getSession();
       session.setAttribute("loginUser", user);
       
       return new SimpleAuthenticationInfo(user, user.getPwd(), "");
   }
   ```

2. 修改首页`index.html`代码，拿到`session`信息，判断该用户是否存在，存在表示已经登录，隐藏`登录`选项

   ```html
   <div th:if="${session.loginUser==null}">
       <a th:href="@{/toLogin}">登录</a>
   </div>
   ```

最终测试发现登录成功之后，`登录`选项消失

![image-20211228173448668](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211228173448668.png)
