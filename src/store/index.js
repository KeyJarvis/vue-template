import Vue from 'vue'
import Vuex from 'vuex'
import moduleStore from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ...moduleStore
  },
  state: {},
  mutations: {},
  actions: {}
})
