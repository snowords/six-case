import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    number: '1234 5678 9101 1121',
  },
  mutations: {
    updateNumber(state, newNumber) {
      state.number = newNumber;
    },
  },
  actions: {
  },
  modules: {
  },
});
