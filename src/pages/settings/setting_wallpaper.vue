<template>
  <div>
    <AppToolBar :title="this.$route.query.title"/>
    <div class="setting-menu-child">
      <van-list>
        <van-cell style="height:300px;" v-for="(wallpaper,index) in wallpapers" :key="index">
          <div
            v-on:click="onSelectWallPaper(wallpaper)"
            class="wallpaper-cell"
            :click="onSelectWallPaper"
            :style="'backgroundImage: url(' + wallpaper + ')'"
          >
            <div class="wallpaper_current" v-if="currentWallpaper(wallpaper)">{{$t('settings.currentWallpaper')}}</div>
          </div>
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
          this.$toast("更换壁纸成功");
          this.$router.replace("/");
        });
    },
    currentWallpaper(wallpaper){
       return wallpaper.indexOf(this.$store.state.wallpaper) != -1
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
.wallpaper_current{
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 15px;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
