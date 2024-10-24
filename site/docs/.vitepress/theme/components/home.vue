<template>
  <div class="ui-home">
    <ul class="ui-project">
      <li class="item" v-for="v in siteData" :key="v.name">
        <a class="link" :href="v.link" target="_blank">
          <h3 :class="['title', v.className]">{{ v.name }}</h3>
          <p class="desc">{{ v.desc }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { siteData } from "../data/books.js";
</script>
<style lang="scss">
.color-pink1 {
  background: #90f;
}
.color-red {
  background: #b91d47;
}
.color-blue-deep4 {
  background: #3360a3;
}
.color-blue-light6 {
  background: #2db7f5;
}
.color-green-gradient1 {
  background: -webkit-linear-gradient(120deg, #86b91a 30%, #edd532);
  background: linear-gradient(120deg, #86b91a 30%, #edd532);
}
.color-green-gradient2 {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background: linear-gradient(315deg, #42d392 25%, #647eff);
}
.color-green-gradient3 {
  background: -webkit-linear-gradient(315deg, #51a256 25%, #f7d336);
  background: linear-gradient(315deg, #51a256 25%, #f7d336);
}
.color-pink-gradient {
  background: -webkit-linear-gradient(120deg, #bd44fe 35%, #42d1ff);
  background: linear-gradient(120deg, #bd44fe 35%, #42d1ff);
}

.ui-home {
  width: 1152px;
  margin: 0 auto 20px;
}
.ui-project {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
  justify-content: space-between;
  margin-top: 20px;
  .item,
  .link {
    height: 220px;
  }
  .item {
    margin-top: 0;
    .link {
      display: block;
      color: #333;
      background: #fff;
      border: 1px solid #f1f1f1;
      border-radius: 6px;
      transition: all 0.4s;
    }
    .link:hover {
      -webkit-filter: brightness(1.2);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      transform: rotateY(-0.1deg) scale(1.03) translateZ(0);
    }
    .title {
      height: 80px;
      padding-top: 25px;
      font-size: 24px;
      color: #fff;
      text-align: center;
      border-radius: 6px 6px 0 0;
      margin: 0;
    }
    .desc {
      line-height: 2;
      padding: 0 12px;
      margin-top: 14px;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
