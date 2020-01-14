<template>
  <div class="wrapper">
    <TodoHeader  v-bind:title="store.title"/>
    <TodoInput @addItem ="addTodont"/>
    <TodoList v-bind:show="true" 
      v-bind:items="store.items"  
      @checkItem ="checkTodo"
      @removeItem ="removeTodont"/>
    <TodoFooter  
      v-bind:items="store.items" 
      @clearAll ="clearAll"/>
  </div>
</template>

<script>
import TodoHeader from '../components/TodoHeader'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import TodoFooter from '../components/TodoFooter'

export default {
  props: ['store'],
  methods: {
    addTodont(todontItem) {
      this.$emit('addItem', 'todont', todontItem)
    },
    checkTodo(todoItem, index) {
      this.$emit('checkItem', 'todont', 'todo', todoItem, index)
    },
    removeTodont(index) {
      this.$emit('removeItem', 'todont', index)
    },
    clearAll(){
      this.$emit('clearAll', 'todont');
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