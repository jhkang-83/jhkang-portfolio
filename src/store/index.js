import { createStore } from 'vuex'
import portfolio from '@/store/modules/portfolio'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    poc: ''
  },
  mutations: {
    setPoc (state, { info }) {
      if (!info.os) {
        state.poc = 'PC'
      } else {
        state.poc = 'MWEB'
      }
    }
  },
  actions: {
  },
  modules: {
    portfolio
  },
  plugins: [
    createPersistedState({
      path: ['portfolio']
    })
  ]
})
