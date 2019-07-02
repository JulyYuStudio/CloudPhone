<template>
  <div>
    <van-nav-bar :title="this.$route.query.title" />
    <div>
      <nuxt />
    </div>
    <van-tabbar :route="false">
      <van-tabbar-item name="back" icon="arrow-left" :replace='true' to="/" >Back</van-tabbar-item>
      <van-tabbar-item name="home" icon="home-o" :replace='true' to="/">Home</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }

}
</script>
