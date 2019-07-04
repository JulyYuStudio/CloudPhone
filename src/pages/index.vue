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
          v-for="app in apps"
          :key="app._id"
          :to="{path:app.link,query:{title: app.name}}"
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
      time: moment().format("a h:mm"),
      wallpaper: ""
    };
  },
  computed: {
    
  },
  mounted() {
    console.log("mounted wallpaper", this.$store.state.wallpaper);
    console.log("mounted wallpaper", this.wallpaper);
    const wallpaperSeleted = this.$store.state.wallpaper;
    this.wallpaper = (function() {
      return require("~/assets/wallpaper/" + wallpaperSeleted);
    })();

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
