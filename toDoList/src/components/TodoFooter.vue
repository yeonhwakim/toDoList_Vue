<template>
  <div v-if="items.length" class="clearAllContainer">
    <span class="clearAllBtn" @click="clearAll">Clear All</span>
  </div>
</template>

<script>
export default {
  props: ['items'],
  methods: {
    clearAll() {
      this.$emit('clearAll');
    }
  }
}
</script>

<style>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 0 auto;
  }
  .clearAllBtn{
    color: #e20303;
    display: block;
  }
</style>