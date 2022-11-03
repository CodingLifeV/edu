---
# This is the title of the article
title: 数据库概述
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
copyright: false
footer: MIT Licensed  <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">浙ICP备2022028662号-1</a> | Copyright © 2022-present <a href="https://github.com/CodingLifeVV" target="_blank">CodingLifeVV</a> </p> 内容创作不易，引用请注明出处，网站已备案，切勿侵权
---





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
| ucenter_member         |   会员信息   |

每张表的含义及内容具体如下。



## 表 crm_banner

前台用户系统启动的时候，首页会出现Banner内容，如下图所示：

![image-20221102100414823](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20221102100414823.png)



`crm_banner`表SQL创建语句如下：

```sql
DROP TABLE IF EXISTS `crm_banner`;
CREATE TABLE `crm_banner` (
  `id` char(19) NOT NULL DEFAULT '' COMMENT 'ID',
  `title` varchar(20) DEFAULT '' COMMENT '标题',
  `image_url` varchar(500) NOT NULL DEFAULT '' COMMENT '图片地址',
  `link_url` varchar(500) DEFAULT '' COMMENT '链接地址',
  `sort` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '排序',
  `is_deleted` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '逻辑删除 1（true）已删除， 0（false）未删除',
  `gmt_create` datetime NOT NULL COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_name` (`title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='首页banner表';
```



## 表 edu_chapter 

`edu_chapter`表示相关课程的章节信息，`edu_chapter`表SQL创建语句如下：

```sql
DROP TABLE IF EXISTS `edu_chapter`;
CREATE TABLE `edu_chapter` (
  `id` char(19) NOT NULL COMMENT '章节ID',
  `course_id` char(19) NOT NULL COMMENT '课程ID',
  `title` varchar(50) NOT NULL COMMENT '章节名称',
  `sort` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '显示排序',
  `gmt_create` datetime NOT NULL COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_course_id` (`course_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='课程';
```

## 表 edu_course

`edu_course`表示课程的信息，`edu_course`表SQL创建语句如下：

```sql
DROP TABLE IF EXISTS `edu_course`;
CREATE TABLE `edu_course` (
  `id` char(19) NOT NULL COMMENT '课程ID',
  `teacher_id` char(19) NOT NULL COMMENT '授课教师D',
  `subject_id` char(19) NOT NULL COMMENT '课程专业ID',
  `subject_parent_id` varchar(40) CHARACTER SET utf8 DEFAULT NULL,
  `title` varchar(50) NOT NULL COMMENT '课程标题',
  `price` decimal(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '课程销售价格，设置为0则可免费观看',
  `lesson_num` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '总课时',
  `cover` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '课程封面图片路径',
  `buy_count` bigint(10) unsigned NOT NULL DEFAULT '0' COMMENT '销售数量',
  `view_count` bigint(10) unsigned NOT NULL DEFAULT '0' COMMENT '浏览数量',
  `version` bigint(20) unsigned NOT NULL DEFAULT '1' COMMENT '乐观锁',
  `status` varchar(10) NOT NULL DEFAULT 'Draft' COMMENT '课程状态 Draft未发布  Normal已发布',
  `is_deleted` tinyint(3) DEFAULT NULL COMMENT '逻辑删除 1（true）已删除， 0（false）未删除',
  `gmt_create` datetime NOT NULL COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_title` (`title`),
  KEY `idx_subject_id` (`subject_id`),
  KEY `idx_teacher_id` (`teacher_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='课程';
```



每一门课都有对应授课教师，对应表字段为`teacher_id`，`subject_parent_id` 和`subject_id` 分别表示该课程的一级类目和二级类目，类似下图网站界面：

![image-20221102155918191](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20221102155918191.png)

## 表 edu_comment

`edu_comment`定义会员（用户）对该课程的评价。该评价信息包含了评价人的昵称`nickname`，评价内容`content`，评价的课程id `course_id`以及课程对应的授课教师`teacher_id`

```sql
DROP TABLE IF EXISTS `edu_comment`;
CREATE TABLE `edu_comment` (
  `id` char(19) NOT NULL COMMENT '评论ID',
  `course_id` varchar(19) NOT NULL DEFAULT '' COMMENT '课程id',
  `teacher_id` char(19) NOT NULL DEFAULT '' COMMENT '授课教师id',
  `member_id` varchar(19) NOT NULL DEFAULT '' COMMENT '会员id',
  `nickname` varchar(50) DEFAULT NULL COMMENT '会员昵称',
  `avatar` varchar(255) DEFAULT NULL COMMENT '会员头像',
  `content` varchar(500) DEFAULT NULL COMMENT '评论内容',
  `is_deleted` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '逻辑删除 1（true）已删除， 0（false）未删除',
  `gmt_create` datetime NOT NULL COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_course_id` (`course_id`),
  KEY `idx_teacher_id` (`teacher_id`),
  KEY `idx_member_id` (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='评论';
```



## 表 edu_course_description 

`edu_course_description`定义了对该课程的详细介绍，`edu_course`描述课程的信息，但并没有将课程详细介绍内容放在表`edu_course`中，因为`edu_course_description`表的字段`description`内容过多，这里使用了分表的理念。

```sql
DROP TABLE IF EXISTS `edu_course_description`;
CREATE TABLE `edu_course_description` (
  `id` char(19) NOT NULL COMMENT '课程ID',
  `description` text COMMENT '课程简介',
  `gmt_create` datetime NOT NULL COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='课程简介';
```

## 表 edu_teacher

`edu_teacher`表示定义教师相关信息，创建该表的数据库SQL语句如下：

```sql
DROP TABLE IF EXISTS `edu_teacher`;
CREATE TABLE `edu_teacher` (
  `id` char(19) NOT NULL COMMENT '教师ID',
  `name` varchar(20) NOT NULL COMMENT '教师姓名',
  `intro` varchar(500) NOT NULL DEFAULT '' COMMENT '教师简介',
  `career` varchar(500) DEFAULT NULL COMMENT '教师资历,一句话说明讲师',
  `level` int(10) unsigned NOT NULL COMMENT '头衔 1教授 2副教授 3讲师 4助教',
  `avatar` varchar(255) DEFAULT NULL COMMENT '教师头像',
  `sort` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '排序',
  `is_deleted` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '逻辑删除 1（true）已删除， 0（false）未删除',
  `gmt_create` datetime NOT NULL COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='教师';
```



## 表 edu_video 

`edu_video`表示每一个课程中各个章节下的小节，每一个小节都是一个可以独立播放的视频，如下图所示：

![image-20221103083038500](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20221103083038500.png)

创建表的SQL语句如下。

```sql
DROP TABLE IF EXISTS `edu_video`;
CREATE TABLE `edu_video` (
  `id` char(19) NOT NULL COMMENT '视频ID',
  `course_id` char(19) NOT NULL COMMENT '课程ID',
  `chapter_id` char(19) NOT NULL COMMENT '章节ID',
  `title` varchar(50) NOT NULL COMMENT '节点名称',
  `video_source_id` varchar(100) DEFAULT NULL COMMENT '云端视频资源',
  `video_original_name` varchar(100) DEFAULT NULL COMMENT '原始文件名称',
  `sort` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '排序字段',
  `play_count` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '播放次数',
  `is_free` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否可以试听：0收费 1免费',
  `duration` float NOT NULL DEFAULT '0' COMMENT '视频时长（秒）',
  `status` varchar(20) NOT NULL DEFAULT 'Empty' COMMENT 'Empty未上传 Transcoding转码中  Normal正常',
  `size` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '视频源文件大小（字节）',
  `version` bigint(20) unsigned NOT NULL DEFAULT '1' COMMENT '乐观锁',
  `gmt_create` datetime NOT NULL COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_course_id` (`course_id`),
  KEY `idx_chapter_id` (`chapter_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='课程视频';
```

::: tip

视频资源存储在阿里云视频点播平台，`title`、`video_source_id`等字段表示视频的相关资源信息，字段`is_free`表示该视频是否免费，`is_free = 0`表示收费，会员（用户）点播该视频时需要进行付费

:::

## 表 t_order

`t_order`表为订单的详细信息，会员（用户）对收费课程点击“立即购买”，会创建针对该视频信息的订单，相关订单信息会存储在订单表`t_order`中，如下图所示：

<img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20221103084243734.png" alt="image-20221103084243734" style="zoom:50%;" />

创建订单，并跳转到：

![image-20221103084310613](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20221103084310613.png)

创建表的SQL语句如下：

```sql
DROP TABLE IF EXISTS `t_order`;
CREATE TABLE `t_order` (
  `id` char(19) NOT NULL DEFAULT '',
  `order_no` varchar(20) NOT NULL DEFAULT '' COMMENT '订单号',
  `course_id` varchar(19) NOT NULL DEFAULT '' COMMENT '课程id',
  `course_title` varchar(100) DEFAULT NULL COMMENT '课程名称',
  `course_cover` varchar(255) DEFAULT NULL COMMENT '课程封面',
  `teacher_name` varchar(20) DEFAULT NULL COMMENT '教师名称',
  `member_id` varchar(19) NOT NULL DEFAULT '' COMMENT '会员id',
  `nickname` varchar(50) DEFAULT NULL COMMENT '会员昵称',
  `mobile` varchar(11) DEFAULT NULL COMMENT '会员手机',
  `total_fee` decimal(10,2) DEFAULT '0.01' COMMENT '订单金额（分）',
  `pay_type` tinyint(3) DEFAULT NULL COMMENT '支付类型（1：微信 2：支付宝）',
  `status` tinyint(3) DEFAULT NULL COMMENT '订单状态（0：未支付 1：已支付）',
  `is_deleted` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '逻辑删除 1（true）已删除， 0（false）未删除',
  `gmt_create` datetime NOT NULL COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_order_no` (`order_no`),
  KEY `idx_course_id` (`course_id`),
  KEY `idx_member_id` (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='订单';
```

## 表 t_pay_log

会员（用户）对收费课程支付费用之后便可以进行视频学习，支付之后的相关信息存储在该表中，创建表的SQL语句如下：

```sql
DROP TABLE IF EXISTS `t_pay_log`;
CREATE TABLE `t_pay_log` (
  `id` char(19) NOT NULL DEFAULT '',
  `order_no` varchar(20) NOT NULL DEFAULT '' COMMENT '订单号',
  `pay_time` datetime DEFAULT NULL COMMENT '支付完成时间',
  `total_fee` decimal(10,2) DEFAULT '0.01' COMMENT '支付金额（分）',
  `transaction_id` varchar(30) DEFAULT NULL COMMENT '交易流水号',
  `trade_state` char(20) DEFAULT NULL COMMENT '交易状态',
  `pay_type` tinyint(3) NOT NULL DEFAULT '0' COMMENT '支付类型（1：微信 2：支付宝）',
  `attr` text COMMENT '其他属性',
  `is_deleted` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '逻辑删除 1（true）已删除， 0（false）未删除',
  `gmt_create` datetime NOT NULL COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_order_no` (`order_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='支付日志表';
```

## 表 ucenter_member 

`ucenter_member`表定义了会员（用户）的信息，会员学习课程，购买课程等都需要进行登陆操作，如图所示：

![image-20221103090023420](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20221103090023420.png)

创建表的SQL语句如下：

```sql
DROP TABLE IF EXISTS `ucenter_member`;
CREATE TABLE `ucenter_member` (
  `id` char(19) NOT NULL COMMENT '会员id',
  `openid` varchar(128) DEFAULT NULL COMMENT '微信openid',
  `mobile` varchar(11) DEFAULT '' COMMENT '手机号',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `nickname` varchar(50) DEFAULT NULL COMMENT '昵称',
  `sex` tinyint(2) unsigned DEFAULT NULL COMMENT '性别 1 女，2 男',
  `age` tinyint(3) unsigned DEFAULT NULL COMMENT '年龄',
  `avatar` varchar(255) DEFAULT NULL COMMENT '用户头像',
  `sign` varchar(100) DEFAULT NULL COMMENT '用户签名',
  `is_disabled` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否禁用 1（true）已禁用，  0（false）未禁用',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '逻辑删除 1（true）已删除， 0（false）未删除',
  `gmt_create` datetime NOT NULL COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='会员表';
```

::: tip

用户可以选择使用微信进行登陆，字段`openid`表示微信登陆的相关信息

:::



