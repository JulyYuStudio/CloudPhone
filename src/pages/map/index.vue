<template>
  <div class="amap-page-container">
     <AppToolBar :title="$t(`${this.$route.query.title}`)" />
    <el-amap vid="amap"  :amap-manager="amapManager" :zoom="zoom" class="amap"></el-amap>
  </div>
</template>

<style>
.amap {
  height: 100%;
}
.amap-page-container{
   height: 100%;
}
</style>


<script>
import AppToolBar from "~/components/app_toolbar";
import { AMapManager } from "vue-amap";
let amapManager = new AMapManager();
export default {
  layout: "app_layout",
  data() {
    return {
      zoom: 12,
      amapManager: amapManager,
    };
  },
   components: {
    AppToolBar
  }
};
</script>