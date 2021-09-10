import portfolio from '@/api/portfolio'

export const initialState = () => ({
  projectList: []
})

export const module = {
  namespaced: true,
  state: initialState(),
  mutations: {
    SET_PROJECT_LIST (state, payload) {
      state.projectList = payload || initialState().projectList
    }
  },
  actions: {
    initProjectList (commit) {
      commit('SET_PROJECT_LIST', portfolio)
    }
  }
}
