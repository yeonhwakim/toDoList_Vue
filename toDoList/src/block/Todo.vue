<template>
  <div class="wrapper">
    <TodoHeader v-bind:title="title"></TodoHeader>
    <TodoList v-bind:show="true" v-bind:items="todoItems" @removeItem ="removeTodo" @checkItem ="checkDone"></TodoList>
    <TodoFooter @clearAll ="clearAll"></TodoFooter>
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
      title: "To do list!!"
    }
  },
  created() {
    localStorage.setItem('todo', 'e,f,g')
    const savedItems = localStorage.getItem('todo').split(',')
    savedItems.map( v => this.todoItems.push(v))
  },
  methods: {
    removeTodo(todoItem, index) {
      this.todoItems.splice(index, 1)
      localStorage.setItem('todo', this.todoItems)
    },
    checkDone(doneItem, index) {
      this.todoItems.splice(index, 1)
      localStorage.setItem('todo', this.todoItems)
      localStorage.setItem('done', doneItem)
    },
    clearAll(){
      this.todontItems = []
      localStorage.clear()
    }
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