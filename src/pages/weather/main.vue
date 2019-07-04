<template>
  <div class="weather">
    <div class="weather-title">
      <strong>{{weather.city}}</strong>
    </div>
    <div style="margin-top:20px; margin-bottom:20px;width: 100%; height:1px;background-color:gray"></div>
    <van-swipe :loop="false" :show-indicators="false">
      <van-swipe-item>
        <div class="weather-box" v-if="weather.data">
          <div style="width:50%;">
            <!-- <van-icon v-bind:name="getWeatherIcon(weather.data[0].wea_img)"/> -->
            <!-- <van-icon name="~/assets/icon/weather/icon_haze.png"/> -->
            <!-- <img v-bind:src="getWeatherIcon(weather.data[0].wea_img)" /> -->
            <img
              class="weather-big-icon"
              :src="bigIcons[weatherType.indexOf(weather.data[0].wea_img)]"
            />
          </div>
          <div style="width:1%;" class="weather-line"></div>

          <div class="weather-today" v-if="weather.data">
            <div style="font-size: 25px;">{{weather.data[0].tem}}</div>
            <div>{{weather.data[0].wea}}</div>
            <div>空气质量 {{weather.data[0].air}}</div>
            <div class="weather-air-level">{{weather.data[0].air_level}}</div>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="weather-box" v-if="weather.data">
          <div class="weather-today" style="width: 100%;height: 100%">
            <div>{{today.air_tips}}</div>
            <div>{{today.index[0].title}} {{today.index[0].level}}</div>
            <div>{{today.index[0].desc}}</div>
            <div>{{today.index[5].title}} {{today.index[5].level}}</div>
            <div>{{today.index[5].desc}}</div>
            <div>{{today.win[0]}} {{today.win[1]}} {{today.win_speed}}</div>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
    <van-row class="weather-item-box" type="flex" v-if="weather.data" justify="space-around">
      <van-col
        span="4"
        class="weather-item"
        v-for="(data,index) in weather.data.slice(0,5)"
        v-bind:key="index"
      >
        <div>{{index == 0 ? data.day.slice(3,4) : data.day.slice(0,2)}}</div>
        <div>
          <img class="weather-small-icon" :src="smallIcons[weatherType.indexOf(data.wea_img)]" />
        </div>
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
  // src load error awalays show localhost
  layout: "app_layout",
  data: function() {
    return {
      weather: "",
      weatherType: [
        "xue",
        "lei",
        "shachen",
        "wu",
        "bingbao",
        "yun",
        "yu",
        "yin",
        "qing"
      ],
      today: Object,
      bigIcons: [],
      smallIcons: []
    };
  },
  mounted() {
    this.$axios.$get("/tianqi/api/?version=v1").then(result => {
      this.weather = result;
      this.today = result.data[0];
    });
    this.weatherType.forEach((element, index) => {
      this.bigIcons[index] = require("~/assets/icon/weather/" +
        this.getWeatherIcon(element) +
        ".png");
      this.smallIcons[index] = require("~/assets/icon/weather/little_" +
        this.getWeatherIcon(element) +
        ".png");
    });
    // console.log("mounted - mounted", this.weatherType.indexOf("yu"));
    // console.log(
    //   "mounted - mounted",
    //   this.bigIcons[this.weatherType.indexOf("yu")]
    // );
  },
  methods: {
    getWeatherIcon(type) {
      switch (type) {
        case "xue":
          return "icon_snow";
        case "lei":
          return "icon_thundershower";
        case "shachen":
          return "icon_sandstorm";
        case "wu":
          return "icon_foggy";
        case "bingbao":
          return "icon_icerain";
        case "yun":
          return "icon_cloudy";
        case "yu":
          return "icon_heavyrain";
        case "yin":
          return "icon_overcast";
        case "qing":
          return "icon_sunny";
        default:
          return "icon_thundershower";
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
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  width: 49%;
  font-size: 10px;
}

.weather-today div {
  width: 100%;
  text-align: left;
}

.weather-big-icon {
  height: 80%;
  width: 80%;
}

.weather-small-icon {
  height: 50px;
  width: 50px;
}
.weather-air-level {
}

.weather-item-box {
  margin-top: 10px;
  padding: 10px;
  border: 2px solid rgba(77, 74, 74, 0.144);
  border-radius: 10px;
}

.weather-item {
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 15px;
  text-align: center;
}
.weather-item div:last-child {
  font-size: 8px;
}
</style>
