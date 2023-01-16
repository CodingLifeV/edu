import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { 
    text: "项目学习", 
    icon: "creative",
    prefix: "/edu/",
    children: [   
      {
        text: "序章",
        icon: "edit",
        prefix: "guide/",
        children:[
          { text: "项目架构及功能概述", icon: "", link: "func" },
          { text: "学习路线", icon: "", link: "knowledge" },
        ],
      },
      {
        text: "后端",
        icon: "frame",
        prefix: "backend/",
        children:[
          { text: "技术要点篇", icon: "", link: "key" },
          { text: "数据库概述", icon: "", link: "sql" },
        ],
      },
      {
        text: "项目进阶",
        icon: "edit",
        prefix: "springcloud/",
        children:[
          { text: "SpringCloud基础知识", icon: "", link: "springcloud-1" },
          { text: "SpringCloud项目相关", icon: "", link: "springcloud-2" },
        ],
      },
      {
        text: "前端",
        icon: "edit",
        prefix: "front/",
        children:[
          { text: "简单介绍", icon: "", link: "front-01" },
          { text: "功能实现", icon: "", link: "front-02" },
        ],
      }
    ]
  },
  { text: "工具篇", icon: "tool", link: "/base/" },
  { 
    text: "SpringBoot系列", 
    icon: "launch",
    prefix: "/springboot/",
    children: [   
      { text: "SpringBoot基础", icon: "", link: "springboot1" },
      { text: "SpringBoot Web开发", icon: "", link: "springboot2" },
      { text: "SpringBoot员工管理系统", icon: "", link: "springboot3" },
      { text: "SpringBoot整合数据库", icon: "", link: "springboot4" },
      { text: "SpringBoot整合SpringSecurity", icon: "", link: "springboot5" },
      { text: "SpringBoot整合Shiro", icon: "", link: "springboot6" },
      { text: "SpringBoot整合Swagger", icon: "", link: "springboot7" },
      { text: "SpringBoot简单任务实现", icon: "", link: "springboot8" },
      { text: "SpringBoot与分布式入门", icon: "", link: "springboot9" },
    ]
  },
  {
    text: "项目地址",
    icon: "github",
    children:[
      { text: "后端项目", link: "https://github.com/CodingLifeVV/edu" },
      { text: "后端前台项目", link: "https://github.com/CodingLifeVV/edu-admin" },
      { text: "前端项目", link: "https://github.com/CodingLifeVV/edu-front" },
    ],
  },
  {
    text: "学习资源",
    icon: "list",
    children:[
      { text: "mall学习教程", link: "https://www.macrozheng.com/" },
      { text: "Road To Coding", link: "https://www.r2coding.com/#/README" },
      { text: "JavaGuide", link: "https://javaguide.cn/" },
      { text: "CS-Notes", link: "http://www.cyc2018.xyz/" },
      { text: "bugstack 虫洞栈", link: "https://bugstack.cn/" },
      { text: "JavaGuide", link: "https://javaguide.cn/" },
    ],
  },
  {
    text: "敬请期待",
    icon: "hot",
    children:[
      { text: "MySQL与Redis", link: "#" },
      { text: "SSM系列", link: "#" },
      
      { text: "Java并发", link: "#" },
      { text: "JVM虚拟机", link: "#" },
      { text: "Spring源码解析", link: "#" },
      { text: "分布式/微服务", link: "#" },  
      { text: "面试指南", link: "#" },
    ],
  },
]);
