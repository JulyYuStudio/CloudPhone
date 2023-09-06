<template>
  <div class="chat">
     <!-- <van-nav-bar
      @click-left="onClickLeft"
      :fixed="true"
      :title="$t(`${this.$route.query.title}`)"
      left-arrow
    />
    -->
    <ul class="chat-list">
      <li class="chat-list-item" v-for="(item,index) in msgs" :key="index">
        <ChatItemContent :type="'left'" :item="item" />
      </li>
      <!-- <li clss="chat-item-left" v-for="(item,index) in msgs" :key="index">{{item}}</li> -->
    </ul>
    <div class="chat-input">
      <input v-model="msg" :placeholder="$t('chat.input_placeholder')" @keypress="send" />
      <button class="chat-input-send" v-on:click="sendMsg()">▶️</button>
    </div>
  </div>
</template>

<script >
import ChatItemContent from "~/components/chat_content";
import { Component, Vue } from "vue-property-decorator";
export default {
     layout: 'app_layout',
  data() {
    return {
      msgs: [
        {
          content: "你好，我是图灵机器人。欢迎和我交流",
          type: "left"
        },
        {
          content: "有什么问题都可以问问我。",
          type: "left"
        },
        {
          content: "虽然有些问题我可能答不上来。",
          type: "left"
        },
        {
          content: "你好，我是JAY。",
          type: "right"
        },
        {
          content: "JAY，你好~ 初次见面请多多关照",
          type: "left"
        },
      ],
      msg: ""
    };
  },
  components: {
    ChatItemContent
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    send(e) {
      if (e.keyCode === 13 && this.msg.length) {
        this.sendMsg();
      }
    },
    sendErrorMsg(){
      // this.msgs.push({
      //           content:  "不好意思，好像网络出现问题，我无法正常和你交谈~",
      //           type: "left"
      //         });
      this.$axios.$get("https://fsh-api.inventionpro.repl.co/meme").then(result => {
        this.msgs.push({
                content:  "不好意思，好像网络出现问题，我无法正常和你交谈~ 不如送你一张图片吧",
                imgUrl:  result.link,
                type: "left"
              });
        });
    },
    sendMsg() {
      if (this.msg.length) {
        this.msgs.push({
          content: this.msg,
          type: "right"
        });
        this.$axios
          .$post("/chat", {
            reqType: 0,
            perception: {
              inputText: {
                text: this.msg
              }
            },
            userInfo: {
              apiKey: "27c16212222745aa9c39fc86bfdd1574",
              userId: "jay"
            }
          })
          .then(result => {
            if (result.results && result.results[0]) {
              this.msgs.push({
                content:  result.results[0].values.text,
                type: "left"
              });
            }else{
              this.sendErrorMsg();
            }
          }).catch((error) => {
            this.sendErrorMsg();
					});
        this.msg = "";
      }
      try {
        window.scrollTo(
          0,
          document.documentElement.scrollHeight -
            document.documentElement.clientHeight
        );
      } catch (error) {}
    }
  }
};
</script>

<style>
.chat {
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 50px;
  background: rgb(245, 240, 240);
}

.chat-list {
  background: rgb(245, 240, 240);
  list-style: none;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-top: 50px;
  padding-bottom: 65px;
  padding-left: 15px;
  padding-right: 15px;
  bottom: 0px;
  box-sizing: border-box;
}
.chat-list-item {
  overflow: hidden;
}

.chat-input {
  position: fixed;
  bottom: 50px;
  display: flex;
  background-color: white;
  width: 100%;
}
.chat-input input {
  flex: 9;
  margin: 5px;
  padding: 10px;
  background-color: rgb(224, 224, 224);
  border: 1px rgb(224, 224, 224) solid;
  border-radius: 24px;
  color: gray;
}
.chat-input-send {
  flex: 1;
  size: 50px;
  text-align: center;
  line-height: 1;
  vertical-align: middle;
  display: table-cell;
  color: white;
}
</style>
