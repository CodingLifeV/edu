---
title: SpringBoot 基础
order: 1
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


### 配置文件

初次创建`SpringBoot`项目之后，在`src/main/resources/`目录下存在配置文件 `application.properties`，一般不会使用，删掉创建
`application.yaml`文件

> `yaml`：专门用来写配置文件的语言，可以写普通的键值对、对象和数组，对空格的要求及其严格，一个空格表示一个层级关系，可以注入到配置类中

```yaml
## 普通的key-value
name: wyj

## 对象
student1:
  name: wyj
  age: 18

## 行内写法
student2: {name: wyj, age: 18}

## 数组
pets1:
  - cat
  - dog
  - pig

pets2: [cat,dog,pig]
```

### 使用 yaml 文件给实体类赋值

构建实体类 `Person` 和 `Dog` 类, 使用 `@Value` 可以为实体类的属性赋值, 如下 `Dog` 类

```java
@Component
public class Dog {
    @Value("旺柴")
    private String name;
    @Value("3")
    private Integer age;
    
}

@Component
public class Person {
    private String name;
    private Integer age;
    private boolean happy;
    private Date birth;
    private Map<String, Object> maps;
    private List<Object> lists;
    private Dog dog;
    
    //省略构造器、getter、setter方法
    //......
}
```

使用 `yaml` 文件对`Person`类进行赋值(不使用`@Value`) :

- 需要对 `Person` 类添加  `@ConfigurationProperties` 标签并与 `yaml` 文件中的 `person` 进行绑定
- `@ConfigurationProperties`: 将配置文件中的每一个属性的值, 映射到这个组件中
- 参数 `prefix = "person" `: 将配置文件中的 `person` 下面的属性一一对应


```java
@Component
@ConfigurationProperties(prefix = "person")
public class Person {
    private String name;
    private Integer age;
    private boolean happy;
    private Date birth;
    private Map<String, Object> maps;
    private List<Object> lists;
    private Dog dog;
    
    //省略构造器、getter、setter方法
    //......
}
```

`yaml` 文件:

```yaml
person:
  name: wyj
  age: 18
  happy: true
  birth: 2020/12/12
  maps: {k1: v1, k2: v2}
  lists:
    - music
    - girl
    - sport
  dog:
    name: 旺柴
    age: 3

```

测试输出:

```
Person{name='wyj', age=18, happy=true, birth=Sat Dec 12 00:00:00 CST 2020, maps={k1=v1, k2=v2}, lists=[music, girl, sport], dog=Dog{name='wangchai', age=3}}
```

拓展:  

- 也可以使用 `@ProPertySource` 来加载指定的配置文件  
- `yaml` 文件中可以使用占位符号 `${}` 随机生成内容

```yaml
dog:
    name: wangchai_${person.hello:hello}
    age: 3
```

测试输出:

```
dog=Dog{name='wangchai_hello', age=3}
```

**`yaml`**和**`@ConfigurationProperties`** :

- 配置 `yaml` 和 `@ConfigurationProperties` 都可以获取到值,推荐 `yaml`
- 某个业务中, 只需要获取某个配置文件中的某个值, 可以使用 `@Value`
- 针对 `JavaBean` 来和配置文件进行映射, 使用 `yaml` 配置


### JSR303校验

**`JSR303`校验**: 用来进行数据校验

若上述代码中类 `Person` 中的属性 `name` 需要输入邮箱格式, 则可以在类 `Person` 上加 `@Validated`, 在 `name` 属性上加上校验注解 `@Email()` 

```java
@Validated
public class Person {

    @Email(message = "用户名格式错误,请输入邮箱格式")
    private String name;
    private Integer age;
    private boolean happy;
    private Date birth;
    private Map<String, Object> maps;
    private List<Object> lists;
    private Dog dog;
    
    //省略构造器、getter、setter方法
    //......
}
```

yaml 文件:

```yaml
person:
  name: wyj@qq.com
  
  #省略其它属性
  #......
```



常用的校验注解包含: 

| 注解名称             | 功能                                                         |
| -------------------- | ------------------------------------------------------------ |
| @Null                | 检查该字段是否为空                                           |
| @NotNull             | 不能为空                                                     |
| @NotEmpty            | 不能为空, 多用于检查 list 是否 size 为 0                     |
| @Max                 | 该字段的值只能小于或等于该值                                 |
| @Min                 | 该字段的值只能大于或者等于改值                               |
| @Past                | 检查该字段的日期是在过去                                     |
| @Future              | 检查该字段的日期是将来的日期                                 |
| @Eamil               | 检查是否为一个有效的邮箱                                     |
| @Size(min =, max = ) | 检查该字段的 size 是否在 min 和 max 之间, 可以是字符串、数组、集合、Map等 |
| @Pattern             | 被注解的元素必须是指定的正则表达式                           |

**以上代码在 SpringBoot-demo 项目中**

### 多环境配置及配置文件位置

`yaml` 文件可以写在 

1. `file:./config` : 项目根目录下 ( 项目名称下 ) 的 config 文件夹下
2. `file:./` : 项目根目录
3. `classpath:/config` : 类路径 ( java 文件夹下或 resources 文件夹下) 下的 config 文件夹下
4. `classpath:/` : 类路径下

优先级逐渐降低

通过 `yaml` 配置文件进行多环境配置, 如下:

`application.yaml`:

```yaml
server:
  port: 8080
spring:
  profiles:
    active: dev

---

## 开发环境
server:
  port: 8081
spring:
  profiles: dev

---

## 测试环境
server:
  port: 8082
spring:
  profiles: test
  
```
**测试代码在 SpringBoot-demo1 项目中**