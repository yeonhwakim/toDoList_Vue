<template>
  <div class="inputBox shadow">
    <input type="text" 
      v-model="newTodoItem" 
      placeholder="Type what you have to do"
      v-on:keyup.enter="addItem">
    <span class="addContainer" v-on:click="addItem">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addItem() {
      if(this.newTodoItem !== ""){
        const value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit('addItem', value);
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background-color: #ffffff;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox > input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer{
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn { 
    color: #ffffff;
    vertical-align: middle;
  }
</style>