---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: 中国修仙小说
titleTemplate: 《凡人修仙传》《遮天》《仙逆》《满清条约》《诛仙》《斗破苍穹》《永生》《道诡异仙》《剑来》

hero:
  name: "中国修仙小说"
  text: ""
  tagline: 《凡人修仙传》《遮天》《仙逆》《满清条约》《诛仙》《斗破苍穹》《永生》《道诡异仙》《剑来》
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples
    - theme: alt
      text: GitHub
      link: https://github.com/fundgao/xiuxian

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<style>
:root {
  --vp-home-hero-name-color: transparent !important;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff) !important;

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%) !important;
  --vp-home-hero-image-filter: blur(44px) !important;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
