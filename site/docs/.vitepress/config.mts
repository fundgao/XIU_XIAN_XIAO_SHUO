import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "中国修仙小说",
  description: "中国修仙小说集合",
  base: "/xiuxian/",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      {
        text: "关于我们",
        link: "/about/page",
      },
    ],
    sidebar: {
      "/fanren/": {
        base: "/fanren/",
        items: [
          {
            text: "凡人修仙传",
            collapsed: false,
            base: "/fanren/",
            items: [
              {
                text: "人物",
                collapsed: true,
                items: [
                  { text: "韩立", link: "/page" },
                  { text: "南宫婉", link: "/page" },
                  { text: "紫灵", link: "/page" },
                  { text: "元瑶", link: "/page" },
                  { text: "银月", link: "/page" },
                  { text: "厉飞雨", link: "/page" },
                  { text: "张铁", link: "/page" },
                  { text: "墨大夫", link: "/page" },
                  { text: "墨彩环", link: "/page" },
                  { text: "陈巧倩", link: "/page" },
                ],
              },
              { text: "境界划分", link: "/" },
              {
                text: "界面",
                collapsed: true,
                items: [
                  { text: "人界", link: "/page" },
                  { text: "灵界", link: "/page" },
                  { text: "仙界", link: "/page" },
                ],
              },
              {
                text: "宝物",
                collapsed: true,
                items: [
                  { text: "韩立", link: "/page" },
                  { text: "南宫婉", link: "/page" },
                  { text: "紫灵", link: "/page" },
                  { text: "元瑶", link: "/page" },
                  { text: "银月", link: "/page" },
                  { text: "厉飞雨", link: "/page" },
                  { text: "张铁", link: "/page" },
                  { text: "墨大夫", link: "/page" },
                  { text: "墨彩环", link: "/page" },
                  { text: "陈巧倩", link: "/page" },
                ],
              },
              {
                text: "功法",
                collapsed: true,
                items: [
                  { text: "韩立", link: "/page" },
                  { text: "南宫婉", link: "/page" },
                  { text: "紫灵", link: "/page" },
                  { text: "元瑶", link: "/page" },
                  { text: "银月", link: "/page" },
                  { text: "厉飞雨", link: "/page" },
                  { text: "张铁", link: "/page" },
                  { text: "墨大夫", link: "/page" },
                  { text: "墨彩环", link: "/page" },
                  { text: "陈巧倩", link: "/page" },
                ],
              },
              {
                text: "副本",
                collapsed: true,
                items: [
                  { text: "血色禁地", link: "/page" },
                  { text: "虚天殿", link: "/page" },
                  { text: "慕兰草原", link: "/page" },
                  { text: "坠魔谷", link: "/page" },
                  { text: "昆吾山", link: "/page" },
                ],
              },
            ],
          },
        ],
      },
      "/zhetian/": {
        base: "/zhetian/",
        items: [
          {
            text: "遮天",
            collapsed: false,
            base: "/zhetian/",
            items: [
              { text: "人物", link: "" },
              { text: "境界划分", link: "/" },
              { text: "界面", link: "/" },
              { text: "宝物 & 功法", link: "/" },
            ],
          },
        ],
      },
    },
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
