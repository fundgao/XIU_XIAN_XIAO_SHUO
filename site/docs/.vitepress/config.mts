import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "中国修仙小说",
  description: "中国修仙小说集合",
  /** 打包项目的根目录 */
  base: "/xiuxian/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "详情", link: "/markdown-examples" },
      {
        text: "关于我们",
        link: "/about/page",
      },
    ],
    sidebar: [
      {
        text: "Examples",
        items: [{ text: "Markdown Examples", link: "/markdown-examples" }],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/fundgao/xiuxian" },
    ],
    // 站点页脚配置
    footer: {
      copyright: "Copyright © 2024-present Fund Gao",
    },
    lastUpdatedText: "最后更新",
  },
});
