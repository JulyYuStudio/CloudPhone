<template>
  <div>
    <AppToolBar/>
    <!-- <div class='index-bg'>
        <div class='index-bg' :style="'backgroundImage: url(' + wallpapers[0] + ')'" />
    </div>-->
    <div>
      <van-list>
        <van-cell style="height:300px;" v-for="(wallpaper,index) in wallpapers" :key="index">
          <div
            v-on:click="onSelectWallPaper(wallpaper)"
            class="wallpaper-cell"
            :click="onSelectWallPaper"
            :style="'backgroundImage: url(' + wallpaper + ')'"
          />
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import AppToolBar from "~/components/app_toolbar";
export default {
  layout: "app_layout",
  data() {
    return {
      wallpapers: []
    };
  },
  mounted() {
    this.wallpapers = (function() {
      var temps = require
        .context("@/assets/wallpaper", false, /.(png|jpg|jpeg|gif|bmp|webp)$/)
        .keys();
      return temps.map(element => {
        return require("@/assets/wallpaper/" + element.replace("./", ""));
      });
    })();
    console.log("wallpapers", this.wallpapers);
  },
  methods: {
    onSelectWallPaper(wallpaper) {
      console.log("onSelectWallPaper", wallpaper);
      this.$store
        .dispatch({
          type: "changeWallPaper",
          data: {
            wallpaper: wallpaper
          }
        })
        .then(() => {
          this.$router.replace("/");
        });
    }
  },
  components: {
    AppToolBar
  }
};
</script>

<style>
.wallpaper-cell {
  height: 300px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>
