<template>
  <div class="page-container">
    <model-viewer class='ar-index' v-if="isMounted" src='/Nuxt-Jay/models/GiftBox_gltf.gltf' shadow-intensity="1"
      camera-controls touch-action="pan-y" alt='test'>
    </model-viewer>
  </div>
</template>

<script>
// import AppToolBar from "~/components/app_toolbar";
// import '@google/model-viewer';
// import '@google/model-viewer/dist/model-viewer.min.js';
// import '@google/model-viewer';
/// src="~/assets/model/man/NeilArmstrong.glb" 
export default {
  layout: 'app_layout',
  name: "viewer-3d",
  data() {
    return {
      // modelSrc:require("@/assets/model/mini2/source/mini_2.glb"),
      isMounted: false,
      // src:require("~/assets/model/mini2/source/mini_2.glb")
    };
  },
  mounted() {
    this.isMounted = true;
  },
  computed: {
  }
}
</script>

<style>
.page-container {
  height: 100%;
}

.ar-index {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  bottom: 0px;
}
</style>

