<template>
  <div>
    <demo>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </demo>
  </div>
</template>

<script>
import demo from "~/components/demo_slot";
export default {
  components: {
    demo
  }
};
</script>