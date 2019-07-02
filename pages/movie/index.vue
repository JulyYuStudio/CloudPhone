<template>
<div>
<!-- <mu-list @load="onload" >
    <mu-list-item v-for="todo in list" :key="todo.id">
      <span>{{ todo.desc }}</span>
    </mu-list-item>
  </mu-list>
  <mu-button color="warning" v-on:click='onload'>Warning</mu-button> -->
</div>
  
</template>

<script>
import { mapMutations } from "vuex";

export default {

  computed: {
    list() {
      return this.$store.state.movie.list
    }
  },
  methods: {
    onload() {
       console.log("onload")
      this.$store.dispatch("movie/fetchList").then(data => {});
    }
  }
};
</script>
