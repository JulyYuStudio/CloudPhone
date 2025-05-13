<template>
  <mobile-wrapper>
    <div class="weather-index">
      <div class="weather-content">
        <div>
          <img src="~/assets/icon/weather/weather_icon.png" />
        </div>

        <span>July 天气通</span>
      </div>
    </div>
  </mobile-wrapper>
</template>

<script>
import MobileWrapper from '~/components/MobileWrapper';

export default {
  components: {
    MobileWrapper
  },
  mounted() {
    setTimeout(() => {
      this.$router.replace({
        path: "/weather/main",
        query:{title: "天气"}
      })
    }, 1000);
  }
};
</script>

<style>
.weather-index {
  background-color: grey;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  bottom: 0px;
}

.weather-content {
  color: whitesmoke;
  font-size: 25px;
  text-align: center;
  margin: 0 auto; /*水平居中*/
  position: relative;
  top: 50%; /*偏移*/
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.weather-content img {
  width: 150px;
  height: 150px;
}
</style>
