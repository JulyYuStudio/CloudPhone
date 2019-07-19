<template>
  <div>
    <AppToolBar :title="$t(`${this.$route.query.title}`)" />
    <div class="chat">
      <ul>
        <li v-for="(item,index) in msgs" :key="index">{{item}}</li>
      </ul>
      <div class="chat-input">
        <input v-model="msg" :placeholder="$t('chat.input_placeholder')" @keypress="send"/>
        <van-icon name="close"  v-on:click="sendMsg()"/>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import AppToolBar from "~/components/app_toolbar";
import { Component, Vue } from "vue-property-decorator";
@Component({
  layout: "app_layout",
  components: {
    AppToolBar
  },
  methods:{
    send(e){
        if(e.keyCode === 13 && this.msg.length){
          this.sendMsg();
        }
    },
    sendMsg(){
      if(this.msg.length){
          this.msgs.push(this.msg)
          this.msg = ""
      }
        console.log("test")

    },
  }
})
export default class Chat extends Vue {
  msgs = ["1", "1", "1", "1", "1"];
  msg = "";
}
</script>

<style>
.chat {
 
}
.chat-input {
  display: flex;
  background-color: white;
  width: 100%;
}
.chat-input input {
  float: left;
  width: 100%;
  margin: 5px;
  padding: 10px;
  background-color: rgb(224, 224, 224);
  border: 1px rgb(224, 224, 224) solid;
  border-radius: 24px;
  color: gray;
}
</style>
