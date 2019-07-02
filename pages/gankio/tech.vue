<template>
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <van-cell v-for="item in list" :key="item._id" :title="item.desc" />
  </van-list>
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
      switch (this.category) {
        case "Android":
          return this.$store.state.gankio.android.datas;
          break;
        case "iOS":
          return this.$store.state.gankio.ios.datas;
          break;
        default:
          return this.$store.state.gankio.android.datas;
          break;
      }
    }
  },

  methods: {
    onLoad() {
      //   this.loading = true;
    //   console.log("onLoad", this.category);
      this.finished = true;
      this.loading = false;
      this.$store
        .dispatch({
          type: "gankio/loadTech",
          data: {
            category: this.category
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
