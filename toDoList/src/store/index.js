import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
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

export default new Vuex.store({
  state,
})