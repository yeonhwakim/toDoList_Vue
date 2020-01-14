<template>
  <div class="wrapper">
    <TodoHeader  v-bind:title="title"></TodoHeader>
    <TodoInput @addItem ="addTodont"></TodoInput>
    <TodoList v-bind:items="todontItems" @removeItem ="removeTodont" @checkItem ="checkTodo"></TodoList>
    <TodoFooter @clearAll ="clearAll"></TodoFooter>
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
      todontItems: [],
      title: "To don't list!!!"
    }
  },
  created() {
    const savedItems = localStorage.getItem('todont').split(',')
    savedItems.map( v => this.todontItems.push(v))
  },
  methods: {
    addTodont(todontItem) {
      this.todontItems.push(todontItem)
      localStorage.setItem('todont', this.todontItems)
    },
    removeTodont(todontItem, index) {
      this.todontItems.splice(index, 1)
      localStorage.setItem('todont', this.todontItems)
    },
    checkTodo(todoItem, index) {
      this.todontItems.splice(index, 1)
      localStorage.setItem('todont', this.todontItems)
      localStorage.setItem('todo', todoItem)
    },
    clearAll(){
      this.todontItems = []
      localStorage.clear()
    }
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