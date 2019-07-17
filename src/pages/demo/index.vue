<template >
  <div :style="{ fontSize: postFontSize + 'em' }" >
    <demo v-on:enlarge-text="postFontSize += 0.1" v-on:enlarge-text2="postFontSize += $event">
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
      <template v-slot:content="slotProps">
        <p>Content.{{slotProps.user.test}}</p>
      </template>
      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </demo>
    <van-uploader :before-read="beforeRead" :after-read="afterRead" />
    <input v-model.trim="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <div>HAHAHAHAHAH</div>
        <div v-if="this.$route.query.title == 'true'">SHOW ME</div>
     <nuxt-link to="/demo/test">Next</nuxt-link>
  </div>
</template>

<script>
import demo from "~/components/demo_slot";
import { Toast } from "vant";

export default {
  components: {
    demo
  },
  data() {
    return {
      checked: false,
      message: "333",
      postFontSize: 1,
    };
  },
  methods: {
    // 返回布尔值
    beforeRead(file) {
      if (file.type !== "image/jpeg") {
        Toast("请上传 jpg 格式图片");
        return false;
      }

      return true;
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    tip(){
      console.log("enlarge-text")
    },
    next(){

    }
  }
};
</script>