<template>
  <div>
    <div>index {{this.$store.state.counter}}</div>
    <mu-button v-on:click='addCounter' >add</mu-button>
     <mu-button v-on:click='reduceCounter' >reduce</mu-button>
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
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
