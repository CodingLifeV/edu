import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "序章",
      icon: "launch",
      prefix: "edu/",
      collapsable: true,
      children:[
        { text: "项目架构及功能概述", icon: "", link: "guide/func" },
        { text: "学习路线", icon: "", link: "guide/knowledge" },
      ],
    },
    
    {
      text: "后端",
      icon: "frame",
      prefix: "edu/",
      collapsable: true,
      children:[
        { text: "技术要点篇", icon: "", link: "backend/key" },
        { text: "数据库概述", icon: "", link: "backend/sql" },
      ],
    },
    {
      text: "后端SpringCloud",
      icon: "class",
      prefix: "edu/",
      collapsable: true,
      children:[
        { text: "基础知识", icon: "", link: "springcloud/springcloud-1" },
        { text: "项目相关", icon: "", link: "springcloud/springcloud-2" },
      ],
    },
    {
      text: "后端前台",
      icon: "note",
      prefix: "edu/",
      collapsable: true,
      children:[
        { text: "简单介绍", icon: "", link: "front/front-01" },
        { text: "功能实现", icon: "", link: "front/front-02" },
      ],
    },
    {
      text: "工具篇",
      icon: "tool",
      prefix: "base/",
      collapsable: true,
      children:[
        { text: "Github 入门", icon: "github", link: "Github" },
        { text: "Git 入门", icon: "git", link: "Git" },
        { text: "MyBatisPlus 入门", icon: "edit", link: "MyBatisPlus" },
        { text: "Docker 入门", icon: "mysql", link: "Docker" },
      ],
    },
    { 
      text: "SpringBoot系列", 
      icon: "launch",
      prefix: "/springboot/",
      collapsable: true,
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
      text: "Java面试指南", 
      icon: "note",
      prefix: "/interview/",
      collapsable: true,
      children: [   
        { text: "Java基础", icon: "", link: "javaSE" },
        { text: "Java框架-SSM", icon: "", link: "javaEE" },
        { text: "数据库", icon: "", link: "database" },
        { text: "计算机网络", icon: "", link: "networks" },
        { text: "Redis", icon: "", link: "redis" },
        { text: "多线程", icon: "", link: "concurrent" },
        { text: "设计模式", icon: "", link: "designpattern" },
        { text: "Java虚拟机", icon: "", link: "Jvm" },
      ]
    },
  ],
});
