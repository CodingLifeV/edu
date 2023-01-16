---
title: SpringBoot简单任务实现
order: 8
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


### 异步任务

需求：在网站上发送邮件，后台会去发送邮件，此时前台会造成响应不动，造成响应不动，直到邮件发送完毕，响应才会成功，所以一般会采用多线程的方式去处理类似任务。创建新的项目`springboot-task-first`，实现异步任务，流程如下：

1. 编写`Service`类`AsyncService`，该类实现一个`hello()`方法，模拟进行处理数据，需要用时3秒

   ```java
   @Service
   public class AsyncService {
       public void hello(){
           try {
               Thread.sleep(3000);
           } catch (InterruptedException e) {
               e.printStackTrace();
           }
           System.out.println("数据处理中....");
       }
   }
   ```

2. 编写`controller`类`AsyncController`，调用`Service`层`hello()`方法

   ```java
   @RestController
   public class AsyncController {
   
       @Autowired
       AsyncService asyncService;
   
       @RequestMapping("/hello")
       public String hello(){
           asyncService.hello(); // 调用方法, 等待 3 秒
           return "OK";
       }
   }
   ```

3. 测试

   发现前端需要等待3秒才会相应，可以使用多线程的方式让用户先得到消息，之后后台线程对数据进行处理，通过`@Async`注解实现，代码如下：

4. 在需要处理数据的代码上加上`@Async`注解，在主程序上添加一个注解`@EnableAsync` ，开启异步注解功能

   ```java
   // 异步方法
   @Async
   public void hello(){
       try {
           Thread.sleep(3000);
       } catch (InterruptedException e) {
           e.printStackTrace();
       }
       System.out.println("数据处理中....");
   }
   ```

   ```java
   @SpringBootApplication
   @EnableAsync
   public class SpringbootTaskFirstApplication {
   
       public static void main(String[] args) {
           SpringApplication.run(SpringbootTaskFirstApplication.class, args);
       }
   
   }
   ```

   重启测试，网页瞬间响应，后台代码在异步执行`hello()`方法

### 邮件任务

`SpringBoot`发送邮件操作流程如下：

1. `pom`文件引入依赖：

   ```xml
   <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-mail</artifactId>
   </dependency>
   ```

2. `application.properties`配置文件：

   ```properties
   spring.mail.username=1013801973@qq.com
   spring.mail.password=bhhfkgvrzfuibaja
   spring.mail.host=smtp.qq.com
   # QQ 邮箱需要配置 ssl
   spring.mail.properties.mail.smtp.ssl.enable=true
   ```

   `password`为自己邮箱开启`SMTP`服务的授权码，需要要个人邮箱开启服务

   ![image-20211231094853736](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211231094853736.png)

3. 测试

   ```java
   @SpringBootTest
   class SpringbootTaskFirstApplicationTests {
   
       @Autowired
       JavaMailSenderImpl javaMailSender;
   
       // 发送简单邮件
       @Test
       void contextLoads() {
           SimpleMailMessage mailMessage = new SimpleMailMessage();
   
           mailMessage.setSubject("狂神，你好");
           mailMessage.setText("谢谢你的狂神说Java系列课程");
   
           mailMessage.setTo("1637317579@qq.com");
           mailMessage.setFrom("1013801973@qq.com");
           javaMailSender.send(mailMessage);
       }
   
       // 发送复杂邮件
       @Test
       void contextLoads2() throws MessagingException {
           // 创建复杂邮件
           MimeMessage mimeMessage = javaMailSender.createMimeMessage();
           // 组装 true-表示是否支持多消息发送, 文本、附件、内联元素等...
           MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
   
           //正文 true-表示是否支持 html 内容文本发送
           helper.setSubject("狂神，你好~plus");
           helper.setText("<p style='color:red'>谢谢你的狂神说Java系列课程</p>", true);
   
           //附件
           helper.addAttachment("1.jpg", new File("D:\\Program Files\\workspace\\idea\\1.jpg"));
           helper.addAttachment("2.jpg", new File("D:\\Program Files\\workspace\\idea\\2.jpg"));
   
           helper.setTo("1637317579@qq.com");
           helper.setFrom("1013801973@qq.com");
   
           javaMailSender.send(mimeMessage);
   
       }
   }
   ```

   ![image-20211231103203307](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211231103203307.png)

   ![image-20211231103321612](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211231103321612.png)

### 定时任务

项目开发中经常需要执行一些定时任务，比如需要在每天凌晨分析一次前一天的日志信息，`Spring`提供了异步执行任务调度的方式来实现定时任务。需要使用到两个接口：

- `TaskExecutor`接口：任务执行者
- `TaskScheduler`接口：任务调度者

两个注解：

- `@EnableScheduling`：开启定时功能
- `@Scheduled`：定义执行时间

`cron`表达式（定义定时任务执行规则，表达式生成器网址 http://www.bejson.com/othertools/cron/）：

| 字段 |        允许值         |  允许特殊字符   |
| :--: | :-------------------: | :-------------: |
|  秒  |         0-59          |     , - * /     |
|  分  |         0-59          |     , - * /     |
| 小时 |         0-23          |     , - * /     |
| 日期 |         1-31          | , - * / ? L W C |
| 月份 |         1-12          |     , - * /     |
| 星期 | 0-1或SUN-SAT 0,7是SUN | , - * / ? L W C |

| 特殊字符 |          代表含义          |
| :------: | :------------------------: |
|    ,     |            枚举            |
|    -     |            区间            |
|    *     |            任意            |
|    /     |            步长            |
|    ?     |      日/星期冲突匹配       |
|    L     |            最后            |
|    W     |           工作日           |
|    C     | 和calendar练习后计算过的值 |
|    #     |   星期，4#2 第二个星期三   |

测试步骤如下：

1. 创建一个`ScheduledService`类，定义一个需要定时执行的`hello()`方法

   ```java
   @Service
   public class ScheduledService {
       // 在一个特定的时间执行这个方法——Timer
       // cron表达式
       // 秒 分 时 日 月 周几
   
       /*
           0 49 11 * * ?       每天的 11 点 49 分 00 秒执行
           0 0/5 11,12 * * ?   每天的 11 点和 12 点每个五分钟执行一次
           0 15 10 ? * 1-6     每个月的周一到周六的 10 点 15 分执行一次
           0/2 * * * * ?       每 2 秒执行一次
        */
       @Scheduled(cron = "0/2 * * * * ?")
       public void hello() {
           System.out.println("hello,你被执行了");
       }
   }
   ```

2. 在主程序上增加`@EnableScheduling` 开启定时任务功能

   ```java
   @SpringBootApplication
   @EnableAsync //开启异步注解功能
   @EnableScheduling //开启基于注解的定时任务
   public class SpringbootTaskFirstApplication {
   
       public static void main(String[] args) {
           SpringApplication.run(SpringbootTaskFirstApplication.class, args);
       }
   }
   ```

3. 测试，`hello()`方法每隔 2 秒被执行一次：

   ![image-20211231104900760](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/springboot/image-20211231104900760.png)

4. 常用的表达式：

   ```text
   （1）0/2 * * * * ?   表示每2秒 执行任务
   （1）0 0/2 * * * ?   表示每2分钟 执行任务
   （1）0 0 2 1 * ?   表示在每月的1日的凌晨2点调整任务
   （2）0 15 10 ? * MON-FRI   表示周一到周五每天上午10:15执行作业
   （3）0 15 10 ? 6L 2002-2006   表示2002-2006年的每个月的最后一个星期五上午10:15执行作
   （4）0 0 10,14,16 * * ?   每天上午10点，下午2点，4点
   （5）0 0/30 9-17 * * ?   朝九晚五工作时间内每半小时
   （6）0 0 12 ? * WED   表示每个星期三中午12点
   （7）0 0 12 * * ?   每天中午12点触发
   （8）0 15 10 ? * *   每天上午10:15触发
   （9）0 15 10 * * ?     每天上午10:15触发
   （10）0 15 10 * * ?   每天上午10:15触发
   （11）0 15 10 * * ? 2005   2005年的每天上午10:15触发
   （12）0 * 14 * * ?     在每天下午2点到下午2:59期间的每1分钟触发
   （13）0 0/5 14 * * ?   在每天下午2点到下午2:55期间的每5分钟触发
   （14）0 0/5 14,18 * * ?     在每天下午2点到2:55期间和下午6点到6:55期间的每5分钟触发
   （15）0 0-5 14 * * ?   在每天下午2点到下午2:05期间的每1分钟触发
   （16）0 10,44 14 ? 3 WED   每年三月的星期三的下午2:10和2:44触发
   （17）0 15 10 ? * MON-FRI   周一至周五的上午10:15触发
   （18）0 15 10 15 * ?   每月15日上午10:15触发
   （19）0 15 10 L * ?   每月最后一日的上午10:15触发
   （20）0 15 10 ? * 6L   每月的最后一个星期五上午10:15触发
   （21）0 15 10 ? * 6L 2002-2005   2002年至2005年的每月的最后一个星期五上午10:15触发
   （22）0 15 10 ? * 6#3   每月的第三个星期五上午10:15触发
   ```
