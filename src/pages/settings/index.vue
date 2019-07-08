<template>
  <div>
    <AppToolBar :title="$t('app.setting')" />
    <div>
      <div class="setting-menu-child">
        <van-cell-group>
          <van-cell :title='$t("settings.wallpaper")' is-link to="/settings/setting_wallpaper"/>
          <van-cell :title='$t("settings.desktop")' is-link />
          <van-cell :title='$t("settings.lanuage")' is-link to="/settings/setting_lan"/>
        </van-cell-group>
      </div>
      <div class="setting-menu-child">
        <van-cell-group>
          <van-cell :title='$t("settings.blog")' is-link />
          <van-cell :title='$t("settings.weibo")' is-link />
          <van-cell :title='$t("settings.github")' is-link />
        </van-cell-group>
      </div>
      <div class="setting-menu-child">
        <van-cell-group>
          <van-cell :title='$t("settings.system")' is-link to="/settings/about_system"/>
          <van-cell :title='$t("settings.me")' is-link />
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
