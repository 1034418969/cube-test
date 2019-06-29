import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import shop from './shop'
import goods from './goods'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    home,
    shop,
    goods
  }
})
