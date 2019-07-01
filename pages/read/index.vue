<template>
   <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos () { return this.$store.state.read.list }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('read/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'read/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
