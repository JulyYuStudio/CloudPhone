<template >
  <div :style="{ fontSize: postFontSize + 'em' }">testtesttesttest</div>
</template>

<script>
export default {
  layout: "app_layout",
  data() {
    return {
      checked: false,
      message: "333",
      postFontSize: 1
    };
  },
  methods: {}
};
</script>