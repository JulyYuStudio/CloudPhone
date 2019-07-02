<template>
  <div>
    <!-- <van-pull-refresh :v-model="false" @refresh="onLoad"> -->
    <van-grid :column-num="2" :border="true">
      <van-grid-item v-for="girl in list" :key="girl._id">
        <van-image :src="girl.url" />
      </van-grid-item>
    </van-grid>
    <!-- </van-pull-refresh> -->
  </div>
</template>


<script>
export default {
  
  data() {
    return {
      loading: false,
      finished: false
    };
  },
  props: {
    category: String
  },
  computed: {
    list() {
      return this.$store.state.gankio.girls.datas;
    }
  },
  methods: {
    onLoad() {
      console.log("onLoad", "onLoad");
      //   this.loading = true;
      this.finished = true;
      this.loading = false;
      this.$store
        .dispatch({
          type: "gankio/loadTech",
          data: {
            category: "福利"
          }
        })
        .then(
          data => {},
          error => {
            //   this.finished = true;
            //   this.loading = false;
          }
        );
    }
  }
};
</script>