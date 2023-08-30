<template>
  <div>
    <van-nav-bar class="title" :title="time" />
    <div
      class="index-bg"
      :style="'backgroundImage: url(' + wallpaper +');' "
    >
      <van-grid class="index-grid" :gutter="0" :clickable="true" :border="false" :column-num="3">
        <van-grid-item
          class="index-grid-item"
          v-for="(app,index) in apps"
          :key="index"
          :to="{path:app.link,query:{title: $t(app.name)}}"
        >
          <AppIcon :app="app" />
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>
<script>
import AppIcon from "~/components/AppIcon";
import moment from "moment";
var Apps = require("~/assets/res/apps.json");
export default {
  components: {
    AppIcon
  },
  data: function() {
    return {
      apps: Apps,
      time: moment().format("A h:mm"),
      wallpaper: require("@/assets/wallpaper/wallpaper1.jpeg")
    };
  },
  computed: {
    
  },
  mounted() {
    console.log("mounted wallpaper", this.$store.state.wallpaper);
    console.log("mounted wallpaper", this.wallpaper);
    const wallpaperSeleted = this.$store.state.wallpaper;
    var initWallpaper = function(){
      return (function() {
      var temps = require
        .context("@/assets/wallpaper", false, /.(png|jpg|jpeg|gif|bmp|webp)$/)
        .keys();
        return temps.map(element => {
          return require("@/assets/wallpaper/" + element.replace("./", ""));
        });
      })();
    }
    if(this.$store.state.wallpaper == ""){
       this.wallpaper = require("@/assets/wallpaper/wallpaper1.jpeg");
    }else{
      try{
            this.wallpaper = (function() {
                require("@/assets/wallpaper/" + wallpaperSeleted);
              })();
          }catch(e){
            this.wallpaper = this.$store.state.wallpaper;
          }
    }
    // this.wallpaper = this.$store.state.wallpaper;
   
    // this.wallpaper = (function() {
    //   return require("@/assets/wallpaper/" + wallpaperSeleted);
    // })();
    setInterval(() => {
      this.time =  moment().format("A h:mm")
    }, 1000);
  }
};
</script>
<style>
.van-nav-bar__title {
  font-size: 20px;
}
.index-bg {
  width: 100%;
  bottom: 0px;
  top: 46px;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.index-grid {
  padding: 10%;
}
.index-grid-item {
  padding: 5px;
}

.index-grid-item div {
  background-color: #ffffff00;
}
</style>
