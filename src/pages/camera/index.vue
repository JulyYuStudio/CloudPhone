<template>
  <div style="background-color:gray">
    <video id="video" autoplay="" style="width:640px;height:480px"></video>
    <canvas id="canvas" width="640" height="480"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    var video = document.getElementById("video");
    var errocb = function(error) {
      console.log("sth srong" + error);
    };
    let constraints = {
        video: {width: 640, height: 480},
        audio: false,
    };

       if (navigator.mediaDevices.getUserMedia) { // 标准的API
            var p = navigator.mediaDevices.getUserMedia({
                video: true
            });
            p.then(function (mediaStream) {
                try{
                    video.srcObject = mediaStream;
                }catch(error){
                    video.src = window.URL.createObjectURL(mediaStream);
                }
                video.onloadedmetadata = function (e) {
                    video.play();
                };
            });
            p.catch(function(err) { console.log(err.name); });
        }else if (navigator.mediaDevices.webkitGetUserMedia) { // WebKit 
            var p = navigator.mediaDevices.webkitGetUserMedia({
                video: true
            });
            p.then(function (mediaStream) {
                video.src = window.URL.createObjectURL(mediaStream);
                video.onloadedmetadata = function (e) {
                    video.play();
                };
            });
            p.catch(function(err) { console.log(err.name); });

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