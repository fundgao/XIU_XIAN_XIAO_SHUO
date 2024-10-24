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
                  { text: "韩立", link: "/hanli" },
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
              { text: "境界划分", link: "/jingjie" },
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
                  { text: "掌天瓶", link: "/page" },
                  { text: "青竹蜂云剑", link: "/page" },
                  { text: "虚天鼎", link: "/page" },
                  { text: "风雷翅", link: "/page" },
                  { text: "五子同心魔", link: "/page" },
                  { text: "破灭法目", link: "/page" },
                  { text: "阴阳极火", link: "/page" },
                  { text: "人形傀儡", link: "/page" },
                  { text: "八灵尺", link: "/page" },
                  { text: "元磁神山", link: "/page" },
                  { text: "玄天斩灵剑", link: "/page" },
                ],
              },
              {
                text: "功法",
                collapsed: true,
                items: [
                  { text: "长春功", link: "/page" },
                  { text: "眨眼剑法", link: "/page" },
                  { text: "青元剑诀", link: "/page" },
                  { text: "大衍诀", link: "/page" },
                  { text: "元磁神光", link: "/page" },
                  { text: "惊蛰十二变", link: "/page" },
                  { text: "梵圣真魔功", link: "/page" },
                  { text: "炼神术", link: "/page" },
                  { text: "大五行幻世诀", link: "/page" },
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
                  { text: "小极宫", link: "/page" },
                  { text: "广寒界", link: "/page" },
                  { text: "天渊大战", link: "/page" },
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
              {
                text: "人物",
                collapsed: true,
                items: [
                  { text: "叶凡", link: "/page" },
                  { text: "姬紫月", link: "/page" },
                  { text: "安妙依", link: "/page" },
                  { text: "晨曦", link: "/page" },
                  { text: "秦瑶", link: "/page" },
                  { text: "颜如玉", link: "/page" },
                  { text: "瑶池圣女", link: "/page" },
                  { text: "狠人大帝", link: "/page" },
                  { text: "老疯子", link: "/page" },
                  { text: "王腾", link: "/page" },
                  { text: "无始大帝", link: "/page" },
                  { text: "恒宇大帝", link: "/page" },
                  { text: "青帝", link: "/page" },
                  { text: "虚空大帝", link: "/page" },
                ],
              },
              { text: "境界划分", link: "/jingjie" },
              { text: "界面", link: "/" },
              {
                text: "极道帝兵",
                collapsed: true,
                items: [
                  { text: "天帝鼎", link: "/page" },
                  { text: "虚空镜", link: "/page" },
                  { text: "仙钟", link: "/page" },
                  { text: "吞天魔罐", link: "/page" },
                  { text: "混沌青莲", link: "/page" },
                  { text: "绿铜鼎", link: "/page" },
                  { text: "荒塔", link: "/page" },
                  { text: "无始钟", link: "/page" },
                  { text: "不死天刀", link: "/page" },
                ],
              },
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
