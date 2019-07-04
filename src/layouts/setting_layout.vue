<template>
  <div>
    <AppToolBar :title="this.$route.query.title" />
    <nuxt />
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