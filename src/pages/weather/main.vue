<template>
  <div class="weather">
    <div class="weather-title" v-if="weather">
      <strong>{{ weather.area[1][0] }}</strong>
    </div>
    <div style="margin-top:20px; margin-bottom:20px;width: 100%; height:1px;background-color:gray"></div>
    <van-swipe :loop="false" :show-indicators="false">
      <van-swipe-item>
        <div class="weather-box" v-if="weather">
          <div style="width:50%;">
            <!-- <van-icon v-bind:name="getWeatherIcon(weather.data[0].wea_img)"/> -->
            <!-- <van-icon name="~/assets/icon/weather/icon_haze.png"/> -->
            <!-- <img v-bind:src="getWeatherIcon(weather.data[0].wea_img)" /> -->
            <img class="weather-big-icon" :src="bigIcons[weatherType.findIndex(function (type) {
              return weather.realtime.weather.info.includes(type);
            })]" />
          </div>
          <div style="width:1%;" class="weather-line"></div>

          <div class="weather-today" v-if="weather">
            <div class="weather-air-level">{{ weather.realtime.date }}</div>
            <div class="weather-air-level">{{ weather.realtime.weather.temperature + '℃' }}</div>
            <br />
            <div style="font-size: 25px;">{{ weather.realtime.weather.feelslike_c }}</div>
            <div>{{ weather.pm25.advice }}</div>
            <br />
            <div>空气质量: {{ weather.pm25.quality }}</div>
            <br />
            <div>{{ weather.pm25.advice }}</div>
            <div>{{ weather.life.info.wuran[1] }}</div>
            <br />
            <div>{{ "运动:" }} {{ weather.life.info.yundong[1] }}</div>
            <div>{{ "带伞:" }} {{ weather.life.info.daisan[1] }}</div>
            <div>{{ "紫外线:" }} {{ weather.life.info.ziwaixian[1] }}</div>
          </div>

        </div>
      </van-swipe-item>

    </van-swipe>
    <van-row class="weather-item-box" type="flex" v-if="weather" justify="space-around">
      <van-col span="4" class="weather-item" v-for="(data, index) in weather.weather.slice(0, 5)" v-bind:key="index">
        <div>{{ data.date }}</div>
        <div>
          <img class="weather-small-icon" :src="smallIcons[weatherType.findIndex(function (type) {
            return data.info.day[1].includes(type);
          })]" />
        </div>
        <div>{{ data.info.day[1] }}</div>
        <div>
          <span>{{ data.info.night[2] + "℃ \~" }}</span>
          <span>{{ data.info.day[2] + '℃' }}</span>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  // src load error awalays show localhost
  layout: "app_layout",
  data: function () {
    return {
      weather: "",
      weatherType: [
        // "xue",
        // "lei",
        // "shachen",
        // "wu",
        // "bingbao",
        // "yun",
        // "yu",
        // "yin",
        // "qing"
        "雪",
        "雷",
        "沙尘",
        "雾",
        "冰雹",
        "云",
        "雨",
        "阴",
        "晴",
      ],
      today: Object,
      bigIcons: [],
      smallIcons: []
    };
  },
  mounted() {
    // this.$axios.$get("https://www.tianqiapi.com/api/?version=v1&appid=23035354&appsecret=8YvlPNrz").then(result => {
    //   this.weather = result;
    //   this.today = result.data[0];
    // });

    this.weatherType.forEach((element, index) => {
      this.bigIcons[index] = require("~/assets/icon/weather/" +
        this.getWeatherIcon(element) +
        ".png");
      this.smallIcons[index] = require("~/assets/icon/weather/little_" +
        this.getWeatherIcon(element) +
        ".png");
    });
    // this.loadRequest();

    this.$axios.$get("/360").then(
      result => {
          var content = result.replace("renderData(","");
          content = content.substr(0,content.length - 1);
          var json = eval("(" + content + ")");
          console.log("content", json.life);
          this.weather = json;
          this.today = json.life
      })



    //  this.$axios.$get("https://www.wanandroid.com/article/list/0/json").then(
    //   result => {
    //     console.log("content",result);
    //   })

    // let self = this
    // var xhr = this.createXmlHttpRequest();
    // xhr.open('GET', 'http://tq.360.cn/api/weatherquery/querys?app=tq360&code=101210106&t=1680931573567&c=1681032783673&_jsonp=renderData&_=1680931573568', true);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.onload = function () {
    //   let result = JSON.parse(this.response)
    //   self.urlData = result.data
    //   console.log("content",result);
    // }
    // xhr.send(null);

    // this.$axios({
    //   url: "http://tq.360.cn/api/weatherquery/querys?app=tq360&code=101210106&t=1680931573567&c=1681032783673&_jsonp=renderData&_=1680931573568",
    //   method: 'GET',
    //   jsonp: 'callback'
    // }).then(
    //   result => {
    //     var content = result.replace("renderData(", "");
    //     content = content.substr(0, content.length - 1);
    //     var json = eval("(" + content + ")");
    //     console.log("content", json.life);
    //     this.weather = json;
    //     this.today = json.life
    //   })

  },
  methods: {
    loadRequest() {
      $fetch("http://tq.360.cn/api/weatherquery/querys?app=tq360&code=101210106&t=1680931573567&c=1681032783673&_jsonp=renderData&_=1680931573568").then(
        result => {
          console.log(result);
        }
      );
    },
    createXmlHttpRequest() {
      if (window.ActiveXObject) { //如果是IE浏览器
        // eslint-disable-next-line no-undef
        return new ActiveXObject("Microsoft.XMLHTTP");
      } else if (window.XMLHttpRequest) { //非IE浏览器
        return new XMLHttpRequest();
      }
    },
    getWeatherIcon(type) {
      switch (type) {
        // case "xue":
        //   return "icon_snow";
        // case "lei":
        //   return "icon_thundershower";
        // case "shachen":
        //   return "icon_sandstorm";
        // case "wu":
        //   return "icon_foggy";
        // case "bingbao":
        //   return "icon_icerain";
        // case "yun":
        //   return "icon_cloudy";
        // case "yu":
        //   return "icon_heavyrain";
        // case "yin":
        //   return "icon_overcast";
        // case "qing":
        //   return "icon_sunny";
        // default:
        //   return "icon_thundershower";

        case "雪":
          return "icon_snow";
        case "雷":
          return "icon_thundershower";
        case "沙尘":
          return "icon_sandstorm";
        case "雾":
          return "icon_foggy";
        case "冰雹":
          return "icon_icerain";
        case "云":
          return "icon_cloudy";
        case "雨":
          return "icon_heavyrain";
        case "阴":
          return "icon_overcast";
        case "晴":
          return "icon_sunny";
        default:
          return "icon_thundershower";
      }
    }
  }
};
</script>

<style>
.weather-air-level {
  font-size: 25px;
}

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
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 10%;
}

.weather-small-icon {
  height: 50px;
  width: 50px;
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
