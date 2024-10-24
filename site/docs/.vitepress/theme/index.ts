// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import { useData } from "vitepress";
import home from "./components/home.vue";
import DefaultTheme from "vitepress/theme";

export default {
  ...DefaultTheme,
  NotFound: () => "404",
  enhanceApp({ app }) {
    // 注册全局组件
    app.component("Home", home);
  },
  // 自定义布局配置
  Layout: () => {
    const props: any = {};
    // 获取 frontmatter
    const { frontmatter } = useData();
    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }
    return h(DefaultTheme.Layout, props);
  },
};
