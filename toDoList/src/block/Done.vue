<template>
  <div class="wrapper">
    <TodoHeader v-bind:title="title"></TodoHeader>
    <TodoList v-bind:items="doneItems" v-bind:show="false"></TodoList>
  </div>
</template>

<script>
import TodoHeader from '../components/TodoHeader'
import TodoList from '../components/TodoList'
import TodoFooter from '../components/TodoFooter'

export default {
  data() {
    return {
      doneItems: [],
      title: "Done!"
    }
  },
  created() {
    localStorage.setItem('done', 'i,j,k')
    const savedItems = localStorage.getItem('done').split(',')
    savedItems.map( v => this.doneItems.push(v))
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