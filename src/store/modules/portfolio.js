// import axios from 'axios'

const state = {
  projects: []
}

const getters = {
  projectList: state => state.projects
}

const actions = {
  async initProjectList ({ commit }) {
    const res = await fetch(`${process.env.VUE_APP_API_URI}/019dc5e2f4692fb2f63680a1a384e424/raw/fe701376c583df19f74fa97185641b79f678a6ee/portfolio`)
    const json = await res.json()
    console.log('json >>>', json)
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
