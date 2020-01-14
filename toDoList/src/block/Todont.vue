<template>
  <div class="wrapper">
    <TodoHeader  v-bind:title="title"></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '../components/TodoHeader'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import TodoFooter from '../components/TodoFooter'

export default {
  data() {
    return {
      todoItems: [],
      title: "To don't list!!!"
    }
  },
  methods: {

  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>

</style>