// import axios from 'axios'

const state = {
  projects: []
}

const getters = {
  projectList: state => state.projects
}

const actions = {
  async initProjectList ({ commit }) {
    const res = await fetch('https://gist.githubusercontent.com/jhkang-83/019dc5e2f4692fb2f63680a1a384e424/raw/ba82d8cca9016f638ea6a95db1e654360f507875/portfolio')
    const json = await res.json()
    return commit('SET_PROJECT_LIST', json.projects)
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
