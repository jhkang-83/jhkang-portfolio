import { createStore } from 'vuex'
import portfolio from '@/store/modules/portfolio'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    poc: ''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    portfolio
  },
  plugins: [
    createPersistedState()
  ]
})
