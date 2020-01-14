<template>
  <section>
    <ul>
      <li class="shadow" v-for="(item, index) in items" v-bind:key="item">
        <span v-if="show" class="checkBtn" type="button" @click="checkItem(item, index)">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
        {{item}}
        <span v-if="show" class="removeBtn" type="button" @click="removeItem(item, index)">
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['items', 'show'],
  methods: {
    removeItem(item, index) {
      this.$emit('removeItem', item, index)
    },
    checkItem(item, index) {
      this.$emit('checkItem', item, index)
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    align-items: center;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background-color: #ffffff;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }
</style>