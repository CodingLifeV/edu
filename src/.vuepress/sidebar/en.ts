import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "后端",
      icon: "frame",
      prefix: "edu/",
      collapsable: true,
      children:[
        { text: "工具篇", icon: "config", link: "util/utils" },
      ],
    },
    {
      text: "后端SpringCloud",
      icon: "class",
      prefix: "edu/",
      collapsable: true,
      children:[
        { text: "基础知识", icon: "guide", link: "springcloud/springcloud-1" },
        { text: "项目相关", icon: "launch", link: "springcloud/springcloud-2" },
      ],
    },
    {
      text: "后端前台",
      icon: "note",
      prefix: "edu/",
      collapsable: true,
      children:[
        { text: "简单介绍", icon: "guide", link: "front/front-01" },
        { text: "功能实现", icon: "launch", link: "front/front-02" },
      ],
    },
    {
      text: "基础学习",
      icon: "computer",
      prefix: "base/",
      collapsable: true,
      children:[
        { text: "Github 入门", icon: "github", link: "Github" },
        { text: "Git 入门", icon: "git", link: "Git" },
        { text: "MyBatisPlus 入门", icon: "edit", link: "MyBatisPlus" },
        { text: "Docker 入门", icon: "mysql", link: "Docker" },
      ],
    },
    
  ],
});
