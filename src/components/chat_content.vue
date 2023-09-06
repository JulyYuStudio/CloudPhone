<template>
  <div class="chat-item-other" v-if="type == item.type">
    <div class="chat-item-left-avatar">😀</div>
    <div class="chat-item-left">
      <div>
        {{ item.content }}
      </div>

        <van-image width="200" v-show='item.imgUrl' :src='item.imgUrl' />
    </div>

  </div>
  <div v-else class="chat-item chat-item-right">{{ item.content }}</div>
</template>

<script>
export default {
  props: {
    type: "",
    item: ""
  }
};
</script>


<style>
.chat-item {
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 15px;
  width: auto;
  white-space: normal;
  word-break: break-all;
  word-wrap: break-word;
  display: inline-block;
  *display: inline;
  *zoom: 1;
}

.chat-item-other {
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 15px;
  width: auto;
  white-space: normal;
  word-break: break-all;
  word-wrap: break-word;
  display: inline-block;
  *display: inline;
  *zoom: 1;
}

.chat-item-left-avatar {
  float: left;
  margin-left: 0px;
  background: gray;
  width: 35px;
  height: 35px;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 5px;
}

.chat-item-left {
  float: left;
  margin-left: 10px;
  padding: 10px;
  border-radius: 10px;
  font-size: 15px;
  border: 1px rgb(80, 210, 80) solid;
  background-color: rgb(80, 210, 80);
  margin-right: 40px;
}

.chat-item-right {
  float: right;
  border: 1px white solid;
  background-color: white;
  text-align: right;
  margin-left: 40px;
}</style>
