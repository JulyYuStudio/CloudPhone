<template>
  <div>
    <div>
      <slot name="header"></slot>
    </div>
    <div>
      <slot></slot>
      <div>
        <slot name="content" v-bind:user="user">
          <p>{{user.lastName}}</p>
        </slot>
        <span v-pre>{{ this will not be compiled }}</span>
        <div v-cloak>{{ message }}</div>
        <button v-on:click="$emit('enlarge-text')"> click1</button>
        <button v-on:click="$emit('enlarge-text2',0.2)"> click2</button>
      </div>
    </div>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        lastName: "hahaha-lastName",
        firstName: "hahah-firstName",
        test: "hahha-test"
      },
      message:"message"
    };
  }
};
</script>
<style>
[v-cloak] {
  display: none;
  color: red;
}
</style>
