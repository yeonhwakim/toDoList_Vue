<template>
  <div class="wrapper">
    <TodoHeader v-bind:title="title"></TodoHeader>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '../components/TodoHeader'
import TodoList from '../components/TodoList'
import TodoFooter from '../components/TodoFooter'

export default {
  data() {
    return {
      todoItems: [],
      title: "Done!"
    }
  },
  methods: {

  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>

</style>