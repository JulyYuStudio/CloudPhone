<template>
  <div>
    <AppToolBar :title="this.$route.query.title" />
    <div>
      <nuxt/>
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

</style>
