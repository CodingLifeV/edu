---
title: SpringBoot Web 开发
order: 2
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


### 静态资源导入

创建项目 `SpringBoot-Web-demo1`, 项目测试中`http://localhost:8080//hello` 不可使用, 暂时使用
`http://127.0.0.1:8080//hello` 启动 tomcat 访问 controller, 第二天后 localhost 可以使用了

测试 `controller` 代码: 

```java
@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello(){
        return "hello, world!";
    }
}
```

静态资源可以放在类路径 `resources` 下的 `static` 、`public` 、  `resources` 文件夹下, 文件夹下的内容通过 `http://localhost:8080/**` 即可访问, 例如 `static` 文件夹下有 `1.js`, 则直接通过 `http://localhost:8080/1.js` 便可访问成功

访问优先级别: `resources`> `static` > `public`

一般 `public` 放公共资源, `static` 放静态资源如图片, `resources` 下放上传文件


### 首页和图标定制

定制首页的 `index.html` 时, 可以将 `index.html` 文件放在类路径 resources 下的 `resources` 、 `static` 、 `public` 文件夹下, 此时便可以直接通过 `http://localhost:8080` 直接访问到 `index.html`链接

### 模板引擎 Thymeleaf

新建项目 `SpringBoot-Web-demo2`, 创建项目时候将 `Dependencies`-> `Template Engines` -> `Thymeleaf` 选上

**`Thymeleaf`** 用来开发 `Web`  和独立环境项目的服务器端的Java模版引擎, 代替传统的 `Jsp` 文件, 使用 `Thymeleaf` 的文件必须放在类路径 resources 下的 `templates` 文件夹下, `templates` 文件夹下的内容不能通过 
`http://localhost:8080` 直接访问, 必须要通过 controller 进行跳转

实现首页的跳转, controller 层源码:

```java
@Controller
public class IndexController {
    @RequestMapping("/index")
    public String index() {
        return "index";
    }
}
```

`templates` 文件夹下的 `index.html` 源码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>首页</title>
</head>
<body>
    使用thymeleaf
</body>
</html>
```

html 中使用模板引擎 thymeleaf 时, 首先要在 html 文件引入 thymeleaf 模板引擎, 首先要在 html 文件中引入头文件

```html
xmlns:th="http://www.thymeleaf.org" 
<html lang="en" xmlns:th="http://www.thymeleaf.org" >
```

引入头文件之后, 可以绑定 html 文件里的任何元素, 使用 **`th:元素名`** 的方式, 源码如下:


```java
@Controller
public class IndexThymeleafController {

    @RequestMapping("/index")
    public String index(Model model) {
        model.addAttribute("msg", "hello, thymeleaf");
        return "index";
    }

}
```


```html
<!DOCTYPE html >
<html lang="en" xmlns:th="http://www.thymeleaf.org" >
<head>
    <meta charset="UTF-8">
    <title>首页</title>
</head>
<body>
    使用thymeleaf
    <div th:text="${msg}"></div>
</body>
</html>
```

### Thymeleaf 语法

[`Thymeleaf`官方文档参考](https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.pdf)

**Thymeleaf 语法如下**:

| 属性          | 含义                                                         |
| ------------- | ------------------------------------------------------------ |
| `th:text`     | 文本替换                                                     |
| `th:utext`    | 支持 html 的文本替换                                         |
| `th:value`    | 属性赋值                                                     |
| `th:each`     | 遍历循环元素                                                 |
| `th:if`       | 判断条件, 类似的还有th:unless、th:switch、th:case            |
| `th:insert`   | 代码块引入,类似的还有th:replace, th:include 常用于公共代码块提取的场景 |
| `th:fragment` | 定义代码块, 方便被 th:insert 引用                            |
| `th:object`   | 声明变量, 一般和*{} 一起配合使用                             |
| `th:attr`     | 设置标签属性, 多个属性可以用逗号分隔                         |

源码演示:

```html
<!DOCTYPE html >
<html lang="en" xmlns:th="http://www.thymeleaf.org" >
<head>
    <meta charset="UTF-8">
    <title>首页</title>
</head>
<body>
    使用thymeleaf
    <div th:text="${msg}"></div>
    <h1 th:each="user:${users}" th:text="${user}"></h1>
</body>
</html>
```


```java
@Controller
public class IndexThymeleafController {
    @RequestMapping("/index")
    public String index(Model model) {
        model.addAttribute("msg", "hello, thymeleaf");
        model.addAttribute("users", Arrays.asList("wyj", "mary"));
        return "index";
    }
}
```

**Thymeleaf 表达式如下:**


| 表达式   | 含义           |
| -------- | -------------- |
| `${...}` | 变量表达式     |
| `@{...}` | 链接表达式     |
| `#{...}` | 消息表达式     |
| `~{...}` | 代码块表达式   |
| `*{...}` | 选择变量表达式 |


### 自定义 MVC  配置原理

(1)自定义SpringMVC 功能时, 需要自定义一个类并实现接口 `WebMvcConfigurer`

(2)自定义视图解析器需要创建一个类并实现接口 `ViewResolver`

源码如下:

```java
/**
 * 自定义SpringMVC功能, 扩展 SpringMVC
 */
@Configuration
public class MyMvcConfig implements WebMvcConfigurer {

    //取自定义视图解析器作为一个 Bean
    @Bean
    public ViewResolver myViewResolver() {
        return new MyViewResolver();
    }

    //自定义视图解析器
    public static class MyViewResolver implements ViewResolver {
        @Override
        public View resolveViewName(String viewName, Locale locale) throws Exception {
            return null;
        }
    }
}
```