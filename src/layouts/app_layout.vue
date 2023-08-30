<!-- 公共模版 头部【名称】 名称  底部【回退】【返回首页】-->
<template>
  <transition name="slide-fade">
    <div class="parent">
      <AppToolBar :title="this.$route.query.title" />
      <div class="content">
        <nuxt />
      </div>
      <van-tabbar :route="false" class="tabbar-bottom">
        <van-tabbar-item
          :name="$t('home.home')"
          icon="arrow-left"
          :replace="true"
          @click="back"
        >Back</van-tabbar-item>
        <van-tabbar-item
          :name="$t('home.back')"
          icon="home-o"
          @click="goHome"
          :replace="true"
          to="/"
        >Home</van-tabbar-item>
      </van-tabbar>
    </div>
  </transition>
</template>

<script>
import AppToolBar from "~/components/app_toolbar";
export default {
  props: {
    title: String
  },
  methods: {
    goHome() {
      this.$store.dispatch("gankio/resetAll").then(data => {});
    },
    back() {
      this.$router.go(-1);
    }
  },
   components: {
    AppToolBar
  }
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
.parent {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  overflow: auto;
  position: absolute;
  z-index: 10;
  top: 46px;
  bottom: 50px;
}
.tabbar-bottom {
  width: 100%;
  position: absolute;
  z-index: 200;
  bottom: 0;
}
</style>

