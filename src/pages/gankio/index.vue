<template>
  <van-tabs>
    <van-tab title="Android">
      <techList category="Android" />
    </van-tab>
    <van-tab title="iOS">
      <techList category="iOS" />
    </van-tab>
    <van-tab title="Girls">
      <girlsList category="福利" />
    </van-tab>
  </van-tabs>
</template>
<script>
import techList from "./tech";
import girlsList from "./girls";
export default {
  layout: "app_layout",
  components: {
    techList,
    girlsList
  }
};
</script>