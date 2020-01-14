<template>
  <div class="wrapper">
    <TodoHeader v-bind:title="store.title"/>
    <TodoList v-bind:show="true" 
      v-bind:items="store.items" 
      @checkItem ="checkDone"
      @removeItem ="removeTodo"/> 
    <TodoFooter
      v-bind:items="store.items" 
      @clearAll ="clearAll"/>
  </div>
</template>

<script>
import TodoHeader from '../components/TodoHeader'
import TodoList from '../components/TodoList'
import TodoFooter from '../components/TodoFooter'

export default {
  props: ['store'],
  methods: {
     checkDone(doneItem, index) {
      this.$emit('checkItem', 'todo', 'done', doneItem, index)
    },
    removeTodo(index) {
       this.$emit('removeItem', 'todo', index)
    },
    clearAll(){
      this.$emit('clearAll', 'todo');
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