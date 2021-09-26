const state = {
  careers: []
}

const getters = {
  careerList: state => state.careers
}

const actions = {
  async get_career_list ({ commit }) {
    const result = await fetch(`${process.env.VUE_APP_API_URI}/c4071596e85e67e8a9e9154c62b35984/raw/839646eb24266d5f84b1ed196eade356c0e697b9/career`)
    const json = await result.json()

    return commit('SET_CAREER_LIST', json.careers)
  }
}

const mutations = {
  SET_CAREER_LIST: (state, payload) => (
    state.careers = payload || state.careers
  )
}

export default {
  state: {
    ...state
  },
  getters,
  actions,
  mutations
}
