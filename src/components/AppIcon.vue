<template>
  <div >
    <van-image class="app-icon" :id="app._id" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
    <div class="app-text">{{app.name}}</div>
  </div>
</template>

<script>
// import { Component, Vue, Prop } from 'vue-property-decorator';
// @Component
//  class IndexMenu extends Vue

export default {
  props: {
    app: ""
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
  background: rgb(255, 255, 255)
}
</style>
