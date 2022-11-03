---
# This is the title of the article
title: 项目架构及功能概述
# This is the icon of the page
# icon: page
# This control sidebar order
order: 1
# Set author
author: Ms.Wyj
# Set writing time
date: 2022-11-01
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Page config
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
# You can customize footer content
copyright: false
footer: MIT Licensed  <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">浙ICP备2022028662号-1</a> | Copyright © 2022-present <a href="https://github.com/CodingLifeVV" target="_blank">CodingLifeVV</a> </p> 内容创作不易，引用请注明出处，网站已备案，切勿侵权
---

## edu项目简介

edu项目是一套类似[中国大学MOOC网](https://www.icourse163.org/)的在线教育学习平台，包括前台用户系统和后台管理系统，基于SpringBoot+SpringCloud实现。前台用户系统包括首页门户、课程学习、名师介绍、课程购买、会员登陆注册、课程购买等模块。后台管理系统包括教师管理、课程分类管理以及课程管理等模块。

## 后台管理系统使用到的技术

| 技术          | 版本          | 说明                                   |
| ------------- | ------------- | -------------------------------------- |
| SpringBoot    | 2.6.4         | Java 后端系统开发框架                  |
| MyBatis-Plus  | 3.5.1         | Mybatis 增强工具                       |
| Druid         | 1.2.8         | 阿里巴巴数据库连接池                   |
| Swagger       | 3.0.0         | 文档生成工具                           |
| slf4j+log4j2  | 1.7.32+2.17.1 | 日志实现                               |
| SpringCloud   | 2021.0.1      | 微服务解决方案                         |
| Redis         |   2.6.4       |  分布式缓存  |
| Nginx         |  1.21.6        |  静态资源服务器  |
| OSS           |  3.10.2        |  阿里云对象存储服务  |
| Lombok        |  1.18.22       |  简化对象封装工具  |
| Gateway       |  3.1.1   |  服务网关  |

## edu实现的功能概览

- 教师管理
  - 教师列表
  - 添加教师
- 课程分类管理
  - 课程分类管理
  - 添加课程管理
- 课程管理
  - 课程列表
  - 添加课程

项目截图如下：

![image-20221101112537512](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20221101112537512.png)



## edu数据库概览

::: info

edu项目目前有20张表，部分表相关的功能模块暂未开发：包括与权限管理模块相关的以`acl`开头的表以及数据统计模块相关的`statistics_daily`表

:::

![image-20221101112929137](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20221101112929137.png)

目前项目中使用到的数据库表及其表含义具体如下表：

| 数据库表               |    表含义    |
| :--------------------- | :----------: |
| crm_banner             |  首页banner  |
| edu_chapter            | 课程章节信息 |
| edu_comment            | 课程评论信息 |
| edu_course             |   课程信息   |
| edu_subject            |   课程类别   |
| edu_course_description | 课程详细描述 |
| edu_teacher            |   教师信息   |
| edu_video              | 课程视频信息 |
| t_order                |   订单信息   |
| t_pay_log              |   支付信息   |
| center_member          |   会员信息   |
