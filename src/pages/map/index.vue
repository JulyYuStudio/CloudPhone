<template>
  <div class="amap-page-container">
    <el-amap vid="amap" :amap-manager="amapManager" :plugin="plugin" :zoom="zoom" class="amap"></el-amap>
  </div>
</template>

<style>

.amap-page-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  bottom: 0px;
}
</style>


<script>
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
  }
};
</script>