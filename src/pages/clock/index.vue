<template>
    <div class="clock" id="clock">
    <div class="origin"></div>
    <div class="clock-line hour-line" id="hour-line"></div>
    <div class="clock-line minute-line" id="minute-line"></div>
    <div class="clock-line second-line" id="second-line"></div>
    <div class="date-info" id="date-info"></div>
    <div class="time-info" >
        <div class="time" id="hour-time"></div>
        <div class="time" id="minute-time"></div>
        <div class="time" id="second-time"></div>
    </div>
    <!-- https://juejin.cn/post/7078505345319960612 -->
</div>

</template>

<script>
export default {
    layout: 'app_layout',
    mounted(){
        window.onload=initNumXY(200, 160, 40,40);
    var hour_line = document.getElementById("hour-line");
    var minute_line = document.getElementById("minute-line");
    var second_line = document.getElementById("second-line");
    var date_info = document.getElementById("date-info");
    /*
    var week_day = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    */
    var week_day = [
        'Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sat.'
    ];
    var hour_time = document.getElementById("hour-time");
    var minute_time = document.getElementById("minute-time");
    var second_time = document.getElementById("second-time");
    function setTime(){
        var this_day = new Date();
        var hour = (this_day.getHours() >= 12) ?
            (this_day.getHours() - 12) : this_day.getHours();
        var minute = this_day.getMinutes();
        var second = this_day.getSeconds();
        var hour_rotate = (hour*30-90) + (Math.floor(minute / 12) * 6);
        var year = this_day.getFullYear();
        var month = ((this_day.getMonth() + 1) < 10 ) ?
            "0"+(this_day.getMonth() + 1) : (this_day.getMonth() + 1);
        var date = (this_day.getDate() < 10 ) ?
            "0"+this_day.getDate() : this_day.getDate();
        var day = this_day.getDay();
        hour_line.style.transform = 'rotate(' + hour_rotate + 'deg)';
        minute_line.style.transform = 'rotate(' + (minute*6 - 90) + 'deg)';
        second_line.style.transform = 'rotate(' + (second*6 - 90)+'deg)';
        date_info.innerHTML =
            year + "-" + month + "-" + date + " " + week_day[day];
        hour_time.innerHTML = (this_day.getHours() < 10) ?
            "0" + this_day.getHours() : this_day.getHours();
        minute_time.innerHTML = (this_day.getMinutes() < 10) ?
            "0" + this_day.getMinutes() : this_day.getMinutes();
        second_time.innerHTML = (this_day.getSeconds() < 10) ?
            "0" + this_day.getSeconds():this_day.getSeconds();
    }
    setInterval(setTime, 1000);
    function initNumXY(R, r, w, h){
        var numXY = [
            {
                "left" : R + 0.5 * r - 0.5 * w,
                "top" : R - 0.5 * r * 1.73205 - 0.5 * h
            },
            {
                "left" : R + 0.5 * r * 1.73205 - 0.5 * w,
                "top" : R - 0.5 * r - 0.5 * h
            },
            {
                "left" : R + r - 0.5 * w,
                "top" : R - 0.5 * h
            },
            {
                "left" : R + 0.5 * r * 1.73205 - 0.5 * w,
                "top" : R + 0.5 * r - 0.5 * h
            },
            {
                "left" : R + 0.5 * r - 0.5 * w,
                "top" : R + 0.5 * r * 1.732 - 0.5 * h
            },
            {
                "left" : R - 0.5 * w,
                "top" : R + r - 0.5 * h
            },
            {
                "left" : R - 0.5 * r - 0.5 * w,
                "top" : R + 0.5 * r * 1.732 - 0.5 * h
            },
            {
                "left" : R - 0.5 * r * 1.73205 - 0.5 * w,
                "top" : R + 0.5 * r - 0.5 * h
            },
            {
                "left" : R - r - 0.5 * w,
                "top" : R - 0.5 * h
            },
            {
                "left" : R - 0.5 * r * 1.73205 - 0.5 * w,
                "top" : R - 0.5 * r - 0.5 * h
            },
            {
                "left" : R - 0.5 * r - 0.5 * w,
                "top": R - 0.5 * r * 1.73205 - 0.5 * h
            },
            {
                "left" : R - 0.5 * w,
                "top" : R - r - 0.5 * h
            }
        ];
        var clock = document.getElementById("clock");
        for(var i = 1; i <= 12; i++){
            if(i%3 == 0) {
                clock.innerHTML += "<div class='clock-num em_num'>"+i+"</div>";
            } else {
                clock.innerHTML += "<div class='clock-num'>" + i + "</div>";
            }
        }
        var clock_num = document.getElementsByClassName("clock-num");
        for(var i = 0; i < clock_num.length; i++) {
            clock_num[i].style.left = numXY[i].left + 'px';
            clock_num[i].style.top = numXY[i].top + 'px';
        }
        for(var i = 0; i < 60; i++) {
            clock.innerHTML += "<div class='clock-scale'> " +
                "<div class='scale-hidden'></div>" +
                "<div class='scale-show'></div>" +
                "</div>";
        }
        var scale = document.getElementsByClassName("clock-scale");
        for(var i = 0; i < scale.length; i++) {
            scale[i].style.transform="rotate(" + (i * 6 - 90) + "deg)";
        }
    }
    }

}
</script>

<style>
*{
    margin:0;
    padding:0;
}
.clock{
    width:400px;
    height:400px;
    border:10px solid #333;
    box-shadow: 0px 0px 20px 3px #444 inset;
    border-radius:210px;
    position:relative;
    margin:5px auto;
    z-index:10;
    background-color:#f6f6f6;
}
/* clock num */
.clock-num{
    width:40px;
    height:40px;
    font-size:22px;
    text-align:center;
    line-height:40px;
    position:absolute;
    z-index:8;
    color:#555;
    font-family:fantasy, 'Trebuchet MS';
}
.em_num{
    font-size:28px;
}
/* clock line */
.clock-line{
    position:absolute;
    z-index:20;
}
.hour-line{width:100px;
    height:4px;
    top:198px;
    left:200px;
    background-color:#000;
    border-radius:2px;
    transform-origin:0 50%;
    box-shadow:1px -3px 8px 3px #aaa;
}
.minute-line{
    width:130px;
    height:2px;
    top:199px;
    left:190px;
    background-color:#000;
    transform-origin:7.692% 50%;
    box-shadow:1px -3px 8px 1px #aaa;
}
.second-line{
    width:170px;
    height:1px;
    top:199.5px;
    left:180px;
    background-color:#f60;
    transform-origin:11.765% 50%;
    box-shadow:1px -3px 7px 1px #bbb;
}
/* origin */
.origin{
    width:20px;
    height:20px;
    border-radius:10px;
    background-color:#000;
    position:absolute;
    top:190px;
    left:190px;
    z-index:14;
}
/* date-info */
.date-info{
    width:160px;
    height:28px;
    line-height:28px;
    text-align:center;
    position:absolute;
    top:230px;
    left:120px;
    z-index:11;
    color:#555;
    font-weight:bold;
}
.time-info{
    width:92px;
    height:30px;
    line-height:30px;
    text-align:center;
    position:absolute;
    top:270px;
    left:154px;
    z-index:11;
    background-color:#555;
    padding:0;
    box-shadow:0px 0px 9px 2px #222 inset;
}
.time{
    width:30px;
    height:30px;
    text-align:center;
    float:left;
    color:#fff;
    font-weight:bold;
}
#minute-time{
    border-left:1px solid #fff;
    border-right:1px solid #fff;
}
/* scale */
.clock-scale{
    width:195px;
    height:2px;
    transform-origin:0% 50%;
    z-index:7;
    position:absolute;
    top:199px;
    left:200px;
}
.scale-show{
    width:12px;
    height:2px;
    background-color:#555;
    float:left;
}
.scale-hidden{
    width:183px;
    height:2px;
    float:left;
}
</style>