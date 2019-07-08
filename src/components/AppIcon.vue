<template>
  <div>
    <van-image class="app-icon" :id="app._id" :src="getIcon(app.icon)" />
    <div class="app-text">{{$t(`${app.name}`)}}</div>
  </div>
</template>

<script>
// import { Component, Vue, Prop } from 'vue-property-decorator';
// @Component
//  class IndexMenu extends Vue

export default {
  props: {
    app: ""
  },
  methods: {
    getIcon(icon) {
      if (icon != undefined) {
        return require("@/assets/icon/" + icon);
      } else {
        return "https://img.yzcdn.cn/vant/apple-1.jpg";
      }
    }
  }
};
</script>

<style>
.app-icon img {
  width: 60px;
  height: 60px;
  border-radius: 5px;
}
.app-text {
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  color: whitesmoke;
  background: rgb(255, 255, 255);
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.253);  
}
</style>
