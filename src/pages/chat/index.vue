<template>
  <div>
    <AppToolBar />
    <div>
      <ul>
        <li v-for="(item,index) in msgs" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import AppToolBar from "~/components/app_toolbar";
import {Component,Vue} from 'vue-property-decorator';
@Component({
layout: "app_layout",
  components: {
    AppToolBar
  },
})
export default class Chat extends Vue{
   msgs =  ["1", "1", "1", "1", "1"]
};
</script>

<style>
</style>
