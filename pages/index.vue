<template>
  <div>
    <van-nav-bar title="标题" />
    <div class="index-bg">
      <van-grid class="index-grid" :gutter="0" :clickable="true" :border="true" :column-num="3">
        <van-grid-item class="index-grid-item" v-for="app in apps" :key="app._id" :to="{path:app.link,query:{title: app.name}}">
          <AppIcon  :app="app"/>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>
<script>
import AppIcon from "~/components/AppIcon";
var Apps  = require("~/assets/res/apps.json");
export default {
  components:{
      AppIcon
  },
  data: function() {
    return {
      apps: Apps
    };
  }
};
</script>
<style>
.index-bg {
  background-color: blanchedalmond;
}
.index-grid{
  padding: 10%;
}
.index-grid-item{
  padding: 5px;
  
}

.index-grid-item div{
  background-color: #ffffff00;
}
</style>
