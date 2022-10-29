import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "基础学习", icon: "tool", link: "/base/" },
  { 
    text: "项目学习", 
    icon: "creative",
    prefix: "/edu/",
    children: [   
      {
        text: "项目概述",
        icon: "edit",
        prefix: "util/",
        children:[
          { text: "功能结构", icon: "edit", link: "" },
          { text: "数据库描述", icon: "edit", link: "" },
        ],
      },
      {
        text: "项目入门",
        icon: "edit",
        prefix: "util/",
        children:[
          { text: "工具篇", icon: "edit", link: "utils" },
        ],
      },
      {
        text: "项目进阶",
        icon: "edit",
        prefix: "springcloud/",
        children:[
          { text: "SpringCloud基础知识", icon: "edit", link: "springcloud-1" },
          { text: "SpringCloud项目相关", icon: "edit", link: "springcloud-2" },
        ],
      },
      {
        text: "前端",
        icon: "edit",
        prefix: "front/",
        children:[
          { text: "简单介绍", icon: "edit", link: "front-01" },
          { text: "功能实现", icon: "edit", link: "front-02" },
        ],
      }
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
]);
