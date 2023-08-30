<template>
  <div>
    <div class="setting-menu-child">
      <van-cell-group>
        <van-cell title="appCodeName" :value="navigator.appCodeName" />
        <van-cell title="appName" :value="navigator.appName" />
        <van-cell title="appVersion" :value="navigator.appVersion" />
        <van-cell title="product" :value="navigator.product" />
        <van-cell title="productSub" :value="navigator.productSub" />
        <van-cell title="platform" :value="navigator.platform" />
        <van-cell title="vendor" :value="navigator.vendor" />
        <van-cell title="userAgent" :value="navigator.userAgent" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import AppToolBar from "~/components/app_toolbar";
export default {
  layout: "app_layout",
  components: {
    AppToolBar
  },
  data() {
    return {
      navigator: ""
    };
  },
  mounted() {
    this.navigator = window.navigator;
    console.log(navigator);
  }
};
</script>

