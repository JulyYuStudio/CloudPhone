<template>
  <div>
    <AppToolBar :title="this.$route.query.title" />
    <div>
      <div class="setting-menu-child">
        <van-cell-group>
          <van-cell title="壁纸" is-link to="/settings/setting_wallpaper"/>
          <van-cell title="桌面" is-link />
          <van-cell title="Github" is-link />
        </van-cell-group>
      </div>
      <div class="setting-menu-child">
        <van-cell-group>
          <van-cell title="博客" is-link />
          <van-cell title="微博" is-link />
          <van-cell title="Github" is-link />
        </van-cell-group>
      </div>
      <div class="setting-menu-child">
        <van-cell-group>
          <van-cell title="关于系统" is-link to="/settings/about_system"/>
          <van-cell title="关于我" is-link />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
import AppToolBar from "~/components/app_toolbar";
export default {
  layout: "app_layout",
  components: {
    AppToolBar
  }
};
</script>

<style>
.setting-menu-child {
  border: 2px solid grey;
  padding: 2px;
  border-radius: 5px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 20px;
}
</style>
