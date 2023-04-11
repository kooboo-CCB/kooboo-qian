import { defineConfig } from "vitepress";
export default defineConfig({
  title: "Kooboo_docs",
  description: "Kooboo_docs",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "Kooboo模板语法", link: "/notes/Kooboo模板语法/" },
      { text: "KScript", link: "/notes/KScript/" },
      { text: "kooboo配置", link: "/notes/kooboo配置/" },
      { text: "特殊样式示例", link: "/examples/api-examples" },
    ],

    sidebar: {
      "/": [
        {
          text: "Examples",
          items: [
            { text: "Markdown Examples", link: "/examples/markdown-examples" },
            { text: "Runtime API Examples", link: "/examples/api-examples" },
          ],
        },
      ],
      "/notes/Kooboo模板语法/": [
        {
          items: [
            { text: "介绍", link: "/notes/Kooboo模板语法/" },
            {
              text: "内容",
              items: [
                {
                  text: "kooboo指令",
                  link: "/notes/Kooboo模板语法/kooboo指令",
                },
              ],
            },
          ],
        },
      ],
      "/notes/KScript/": [
       
      ],
      "/notes/kooboo配置/": [
        {
          items: [
            {
              text: "内容",
              items: [
                { text: "媒体库", link: "/notes/kooboo配置/媒体库" },
                { text: "页面", link: "/notes/kooboo配置/页面" },
                { text: "模块", link: "/notes/kooboo配置/模块" },
                { text: "系统", link: "/notes/kooboo配置/系统" },
                { text: "开发", link: "/notes/kooboo配置/开发" },
                { text: "内容", link: "/notes/kooboo配置/内容" },
                { text: "数据库", link: "/notes/kooboo配置/数据库" },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
