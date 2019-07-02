<template>
  <div>
    <div>index {{this.$store.state.counter}}</div>
    <van-button v-on:click='addCounter' >add</van-button>
    <van-button v-on:click='reduceCounter' >reduce</van-button>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
// import { Layout, Menu, Icon } from 'antd';
// const { Header, Content, Footer, Sider } = Layout;
// import Logo from '~/components/Logo.vue'

// export default {
//   components: {
//     Logo
//   }
// }

export default{
  methods: {
    addCounter(){
      this.$store.commit('increment')
    },
    reduceCounter(){
      this.$store.commit('reduce')
    }
  }
}
</script>

<style>

</style>
