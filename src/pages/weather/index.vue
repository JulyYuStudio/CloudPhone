<template>
  <div class="weather">
    <div class="weather-title">
      <strong>{{weather.city}}</strong>
    </div>
    <div style="margin-top:20px; margin-bottom:20px;width: 100%; height:1px;background-color:gray"></div>
    <div class="weather-box" v-if="weather.data">
      <div style="width:50%;">
        <!-- <van-icon v-bind:name="getWeatherIcon(weather.data[0].wea_img)"/> -->
         <img v-bind:src="getWeatherIcon(weather.data[0].wea_img)"/>
         <!-- <img src="~/assets/icon/weather/icon_haze.png"/>  -->
        </div>
      <div style="width:1%;" class="weather-line"></div>

      <div class="weather-today" v-if="weather.data">
        <div style="font-size: 25px;">{{weather.data[0].tem}}</div>
        <div>{{weather.data[0].wea}}</div>
        <div>{{weather.data[0].air}}</div>
        <div>{{weather.data[0].air_level}}</div>
      </div>
    </div>
    <van-row class="weather-item-box" type="flex" v-if="weather.data" justify="space-around">
      <van-col
        span="4"
        class="weather-item"
        v-for="(data,index) in weather.data.slice(0,5)"
        v-bind:key="index"
      >
        <div>{{index == 0 ? data.day.slice(3,4) : data.day.slice(0,2)}}</div>
        <div>{{data.wea_img}}</div>
        <div>
          <span>{{data.tem2.replace('℃','°')}}</span>
          <strong>{{data.tem1.replace('℃','°')}}</strong>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  layout: "app_layout",
  data: function() {
    return {
      weather: ""
    };
  },
  mounted() {
    this.$axios.$get("/tianqi/api/?version=v1").then(result => {
      this.weather = result;
    });
  },
  methods: {
    getWeatherIcon(type) {
      console.log("getWeatherIcon",type)
      switch (type) {
        case "xue":
          return "~/assets/icon/weather/icon_snow.png";
        case "lei":
          return "~/assets/icon/weather/icon_thundershower.png";
        case "shachen":
          return "~/assets/icon/weather/icon_sandstorm.png";
        case "wu":
          return "~/assets/icon/weather/icon_foggy.png";
        case "bingbao":
          return "~/assets/icon/weather/icon_icerain.png";
        case "yun":
          return "~/assets/icon/weather/icon_cloudy.png";
        case "yu":
          return "~/assets/icon/weather/icon_heavyrain.png";
        case "yin":
          return "~/assets/icon/weather/icon_overcast.png";
        case "qing":
          return "~/assets/icon/weather/icon_sunny.png";
        default:
          return "~/assets/icon/weather/icon_thundershower.png";
      }
    },
    getWeatherSmallIcon(type) {
      switch (type) {
        case "xue":
          return "~/assets/icon/weather/little/icon_snow.png";
        case "lei":
          return "~/assets/icon/weather/little/icon_thundershower.png";
        case "shachen":
          return "~/assets/icon/weather/little/icon_sandstorm.png";
        case "wu":
          return "~/assets/icon/weather/little/icon_foggy.png";
        case "bingbao":
          return "~/assets/icon/weather/little/icon_icerain.png";
        case "yun":
          return "~/assets/icon/weather/little/icon_cloudy.png";
        case "yu":
          return "~/assets/icon/weather/little/icon_heavyrain.png";
        case "yin":
          return "~/assets/icon/weather/little/icon_overcast.png";
        case "qing":
          return "~/assets/icon/weather/little/icon_sunny.png";
        default:
          return "~/assets/icon/weather/little/icon_thundershower.png";
      }
    }
  }
};
</script>

<style>
.weather {
  padding: 20px;
  height: 100%;
  background-color: rgb(236, 236, 236);
}
.weather-title {
  width: 100%;
  text-align: center;
  font-size: 25px;
}
.weather-line {
  background-color: gray;
  width: 1.5px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.weather-box {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  padding: 10px;
  border: 2px solid rgba(77, 74, 74, 0.144);
  border-radius: 5px;
}
.weather-today {
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 15px;
  width: 49%;
  font-size: 10px;
}

.weather-item-box {
  margin-top: 10px;
  padding: 10px;
  border: 2px solid rgba(77, 74, 74, 0.144);
  border-radius: 5px;
}

.weather-item {
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 7px;
  text-align: center;
}
.weather-item div:last-child {
  font-size: 2px;
}
</style>
