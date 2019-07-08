<template>
  <van-radio-group v-model="radio">
    <van-cell-group>
      <van-cell :title="$t('settings.chinese')" clickable @click="setLan('zh_CN','1')">
        <van-radio slot="right-icon" name="1" />
      </van-cell>
      <van-cell :title="$t('settings.english')" clickable @click="setLan('en_US','2')">
        <van-radio slot="right-icon" name="2" />
      </van-cell>
    </van-cell-group>
  </van-radio-group>
</template>


<script>
export default {
    layout:"app_layout",
    data() {
        return{
            radio: this.$store.state.locale == 'zh_CN' ? '1' : '2'
        }
    },
    methods: {
        setLan(value,radio){
            this.radio = radio
            this.$i18n.locale = value
            this.$store.commit("setLang",{value})
        }
    },
};
</script>