<template>
    <div id="videoBg" class="base-menu-child-box">
        <div id="videoSize" class="base-menu-child-cell">
            <video id="video" autoplay=""></video>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mediaStreamTrack: {}, // 退出时关闭摄像头
        }
    },
    beforeDestroy() {
        this.mediaStreamTrack && this.mediaStreamTrack.stop();
    },
    mounted() {
        this.canvasBox = document.getElementById("videoBg");
        this.canvasSize = document.getElementById("videoSize");
        var video = document.getElementById("video");
        this.canvasSize.style.paddingTop = 0;
        this.canvasSize.style.height = this.canvasSize.clientWidth + "px";


        this.canvasBox.style.paddingTop = 0;
        this.canvasBox.style.height = this.canvasSize.clientWidth + "px";
        video.height = this.canvasSize.clientWidth;
        video.width = this.canvasSize.clientWidth;

        
        var errocb = function (error) {
            console.log("sth srong" + error);
        };
        let constraints = {
            video: { width: 640, height: 480 },
            audio: false,
        };
        if (navigator.mediaDevices.getUserMedia) { // 标准的API
            var p = navigator.mediaDevices.getUserMedia({
                video: true
            });
            p.then((mediaStream) =>{
                try {
                    video.srcObject = mediaStream;
                    this.mediaStreamTrack = typeof mediaStream.stop === 'function' ? mediaStream : mediaStream.getTracks()[0];
                } catch (error) {
                    // video.src = window.URL.createObjectURL(mediaStream);
                    console.log(" .... " + error);
                }
                video.onloadedmetadata = function (e) {
                    video.play();
                };
            });
            p.catch(function (err) { console.log(err.name); });
        } else if (navigator.mediaDevices.webkitGetUserMedia) { // WebKit 
            var p = navigator.mediaDevices.webkitGetUserMedia({
                video: true
            });
            p.then((mediaStream) => {

                video.src = window.URL.createObjectURL(mediaStream);
                video.onloadedmetadata = function (e) {
                    video.play();
                };
                this.mediaStreamTrack = typeof mediaStream.stop === 'function' ? mediaStream : mediaStream.getTracks()[0];

            });
            p.catch(function (err) { console.log(err.name); });
        }



        // if (navigator.getUserMedia) {
        //     navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
        //       console.log("stream");
        //       video.src = stream;
        //       video.play();
        //     }).catch(errocb);
        // } else if (navigator.webkitGetUserMedia) {
        //   navigator.webkitGetUserMedia(
        //     { video: true },
        //     function(stream) {
        //       video.src = window.webkitURL.createObjectURL(stream);
        //       video.play();
        //     },
        //     errocb
        //   );
        // }
        // var constraints = {
        //   audio: true,
        //   video: true
        // };
        // window.navigator.mediaDevices.getUserMedia(constraints).then(
        //   () => {
        //     console.log("success");
        //   },
        //   () => {
        //     console.log("fail");
        //   }
        // );
    }
};
</script>

<style>
.base-menu-child-cell {
    border: 2px solid grey;
    padding: 2px;
    border-radius: 5px;
    margin-top: 20%;
    margin-left: 20%;
    margin-right: 20%;
    text-align: center;
    width: 60%;
    height: 0;
    padding-top: 60%;
}

.base-menu-child-box {
    background-color:rgb(64, 64, 64);
    margin-top: 20%;
    margin-left: 20%;
    margin-right: 20%;
    /* margin-top: 20px; */
    text-align: center;
    width: 60%;
    height: 0;
    padding-top: 60%;
}
</style>