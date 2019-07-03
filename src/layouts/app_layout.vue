<template>
  <transition name="fade" mode="out-in">
    <div class="parent">
      <van-nav-bar :title="this.$route.query.title" />
      <div class="content">
        <nuxt />
      </div>
      <van-tabbar :route="false">
        <van-tabbar-item name="back" icon="arrow-left" :replace="true" to="/">Back</van-tabbar-item>
        <van-tabbar-item name="home" icon="home-o" @click="goHome" :replace="true" to="/">Home</van-tabbar-item>
      </van-tabbar>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: String
  },
  methods: {
    goHome() {
      this.$store.dispatch("gankio/resetAll").then(data => {});
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
.parent {
  width: 100%;
}
.content {
  width: 100%; /*必须*/
  bottom: 50px;
  top: 46px;
  position: absolute;
}
</style>

