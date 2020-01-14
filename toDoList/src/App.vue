<template>
  <div id="app">
    <Todont v-bind:store="todont" 
      @addItem ="addItem" 
      @checkItem ="checkItem"
      @removeItem ="removeItem"
      @clearAll ="clearAll"/>
    <Todo v-bind:store="todo"
      @checkItem ="checkItem"
      @removeItem ="removeItem"
      @clearAll ="clearAll"/>
    <Done v-bind:store="done"/>
  </div>
</template>

<script>
import Todont from './block/Todont'
import Todo from './block/Todo'
import Done from './block/Done'

export default {
  data() {
    return {
      todont: {
        items: [],
        title: "To don't list!"
      },
      todo: {
        items: [],
        title: "To do list!!"
      },
      done: {
        items: [],
        title: "Done!!!"
      },
    }
  },
  created() {
    ['todont', 'todo', 'done'].map(l => {
      const items = localStorage.getItem(l)
      if(items && items.length){
        return items.split(',').map( v => this[l].items.push(v))
      }
      return 
    })
  },
  methods: {
    addItem(state, item) {
      this[state].items.unshift(item)
      localStorage.setItem(state, this[state].items)
    },
    checkItem(state, nextState, item, index) {
      const todoItems = localStorage.getItem('todo')
      const flag = nextState === 'todo' && todoItems && (todoItems.split(',').length === 3 || todoItems.split(',').length > 3)
      if(flag) {
        alert('이미 3가지 해야 할 일이 있습니다.')
        return
      }

      this[state].items.splice(index, 1)
      this[nextState].items.unshift(item)
      localStorage.setItem(state, this[state].items)
      localStorage.setItem(nextState, this[nextState].items)
    },
    removeItem(state, index) {
      this[state].items.splice(index, 1)
      localStorage.setItem(state, this[state].items)
    },
    clearAll(state){
      this[state].items = []
      localStorage.removeItem(state)
    }
  },
  components: {
    'Todont': Todont,
    'Todo': Todo,
    'Done': Done,
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }

  #app{
    display: flex;
    justify-content: space-around;
  }

  .wrapper{
    width: 33%;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow { 
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }
</style>