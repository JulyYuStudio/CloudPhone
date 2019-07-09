<template>
  <div>
    <video id="video" autoplay style="width:640px;height:480px"></video>
    <canvas id="canvas" width="640" height="480"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    var video = document.getElementById("video");
    var errocb = function() {
      console.log("sth srong");
    };
    if (navigator.getUserMedia) {
      navigator.getUserMedia(
        { video: true },
        function(stream) {
          video.src = stream;
          video.play();
        },
        errocb
      );
    } else if (navigator.webkitGetUserMedia) {
      navigator.webkitGetUserMedia(
        { video: true },
        function(stream) {
          video.src = window.webkitURL.createObjectURL(stream);
          video.play();
        },
        errocb
      );
    }
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