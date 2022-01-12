const state = {
  projects: []
}

const getters = {
  projectList: state => state.projects
}

const actions = {
  async get_project_list ({ commit }) {
    const res = await fetch(`${process.env.VUE_APP_API_URI}/019dc5e2f4692fb2f63680a1a384e424/raw/efb7fb8b269d2ff3e1744798feea114f3db8bcca/portfolio`)
    const json = await res.json()

    return commit('SET_PROJECT_LIST', json.projects)
  }
}

const mutations = {
  SET_PROJECT_LIST: (state, payload) => (
    state.projects = payload || state.projects
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
