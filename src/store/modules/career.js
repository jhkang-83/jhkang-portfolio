const state = {
  careers: []
}

const getters = {
  careerList: state => state.careers
}

const actions = {
  async get_career_list ({ commit }) {
    const result = await fetch(`${process.env.VUE_APP_API_URI}/c4071596e85e67e8a9e9154c62b35984/raw/d2d5c32de7f64753a08e6b84de27115999944551/career`)
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
