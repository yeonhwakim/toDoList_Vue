<template>
  <div id="app">
    <Todont></Todont>
    <Todo></Todo>
    <Done></Done>
  </div>
</template>

<script>
import Todont from './block/Todont'
import Todo from './block/Todo'
import Done from './block/Done'

export default {
  data() {
    return {
      todoItems: []
    }
  },
  methods: {

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