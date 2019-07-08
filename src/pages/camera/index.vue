<template>
  <div>
    <device type="media" onchange="update(this.data)"></device>
    <video autoplay></video>
  </div>
</template>

<script>
export default {
  mounted() {
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