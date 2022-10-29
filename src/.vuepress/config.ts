import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/edu/",

  locales: {
    "/": {
      lang: "en-US",
      title: "编码人生",
      description: "以 Java 项目为主线, 记录学习过程中的知识点",
    },
    
  },

  theme,

  shouldPrefetch: false,
});
