<template>
  <div>
    <div>
      <div class="setting-menu-child">
        <van-cell-group>
          <van-cell :title='$t("settings.wallpaper")' is-link :to="{path:'/settings/setting_wallpaper',query:{title: $t('settings.wallpaper')}}"/>
          <van-cell :title='$t("settings.desktop")' is-link :to="{path:'/settings/setting_desktop',query:{title: $t('settings.desktop')}}"/>
          <van-cell :title='$t("settings.lanuage")' is-link :to="{path:'/settings/setting_lan',query:{title: $t('settings.lanuage')}}"/>
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
          <van-cell :title='$t("settings.system")' is-link :to="{path:'/settings/about_system',query:{title: $t('settings.system')}}"/>
          <van-cell :title='$t("settings.me")' is-link />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "app_layout",
  methods:{
    goTo(link,title){

    }
  }
};
</script>

