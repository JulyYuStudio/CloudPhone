<template>
  <div class="phone-container">
    <div class="phone-frame">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileWrapper'
};
</script>

<style>
.phone-container {
  width: 375px;
  height: 667px;
  margin: 20px auto;
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 0 0 10px #333, 0 0 30px rgba(0,0,0,0.5);
}

.phone-frame {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
</style>