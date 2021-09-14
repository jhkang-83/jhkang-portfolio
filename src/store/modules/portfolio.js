import axios from 'axios'

const state = {
  projects: []
}

const getters = {
  projectList: state => state.projects
}

const actions = {
  async initProjectList ({ commit }) {
    const res = await axios.get('http://localhost:3000/projects')
    commit('SET_PROJECT_LIST', res.data)
  }
}

const mutations = {
  SET_PROJECT_LIST: (state, payload) => (
    state.projects = payload
  )
}

export default {
  state,
  getters,
  actions,
  mutations
}
