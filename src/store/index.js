import { createStore } from 'vuex'
import portfolio from '@/store/modules/portfolio'
import career from '@/store/modules/career'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    theme: 'light'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    portfolio,
    career
  },
  plugins: [
    createPersistedState()
  ]
})
