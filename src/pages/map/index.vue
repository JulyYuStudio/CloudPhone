<template>
  <div class="amap-page-container">
    <AppToolBar :title="$t(`${this.$route.query.title}`)" />
    <el-amap vid="amap" :amap-manager="amapManager" :plugin="plugin" :zoom="zoom" class="amap"></el-amap>
  </div>
</template>

<style>
.amap {
  height: 100%;
}
.amap-page-container {
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
    let self = this;
    return {
      zoom: 12,
      amapManager: amapManager,
      center: [121.59996, 31.197646],
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: [
        {
          pName: "Geolocation",
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  self.center = [self.lng, self.lat];
                  self.loaded = true;
                  self.$nextTick();
                }
              });
            }
          }
        }
      ]
    };
  },
  components: {
    AppToolBar
  }
};
</script>