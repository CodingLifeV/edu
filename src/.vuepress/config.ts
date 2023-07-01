import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "编码人生",
      description: "以 Java 项目为主线, 记录学习过程中的知识点",
    },
    
  },

  theme,
  
  // google 广告
  head: [
    // 其他的 <head> 配置项
    ["script", { src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=pub-6877368480585509", crossorigin: "anonymous", async: "true" }],
  ],

  shouldPrefetch: false,
});
