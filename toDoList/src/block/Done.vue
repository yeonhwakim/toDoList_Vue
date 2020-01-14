<template>
  <div class="wrapper">
    <TodoHeader v-bind:title="store.title"/>
    <TodoList v-bind:items="store.items" v-bind:show="false"/>
  </div>
</template>

<script>
import TodoHeader from '../components/TodoHeader'
import TodoList from '../components/TodoList'
import TodoFooter from '../components/TodoFooter'

export default {
  props: ['store'],
  components: {
    'TodoHeader': TodoHeader,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>

</style>