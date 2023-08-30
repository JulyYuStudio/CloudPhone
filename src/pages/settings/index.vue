<template>
  <div>
    <div>
      <div class="setting-menu-child">
        <van-cell-group>
          <van-cell :title='$t("settings.wallpaper")' is-link clickable="true" :to="{path:'/settings/setting_wallpaper',query:{title: $t('settings.wallpaper')}}"/>
          <van-cell :title='$t("settings.desktop")' is-link clickable="true" :to="{path:'/settings/setting_desktop',query:{title: $t('settings.desktop')}}"/>
          <van-cell :title='$t("settings.lanuage")' is-link clickable="true" :to="{path:'/settings/setting_lan',query:{title: $t('settings.lanuage')}}"/>
        </van-cell-group>
      </div>
      <div class="setting-menu-child">
        <van-cell-group>
          <van-cell :title='$t("settings.blog")' is-link clickable="true" url="https://blog.julyyu.cn/"/>
          <van-cell :title='$t("settings.juejin")' is-link clickable="true" url="https://juejin.cn/user/817692383122408"/>
          <van-cell :title='$t("settings.github")' is-link clickable="true" url="https://github.com/lifelikejuly"/>
        </van-cell-group>
      </div>
      <div class="setting-menu-child">
        <van-cell-group>
          <van-cell :title='$t("settings.system")' is-link clickable="true" :to="{path:'/settings/about_system',query:{title: $t('settings.system')}}"/>
          <van-cell :title='$t("settings.me")' is-link clickable="true" />
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

