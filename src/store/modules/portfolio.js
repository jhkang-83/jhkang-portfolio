// import axios from 'axios'

const state = {
  projects: []
}

const getters = {
  projectList: state => state.projects
}

const actions = {
  async get_project_list ({ commit }) {
    const res = await fetch(`${process.env.VUE_APP_API_URI}/019dc5e2f4692fb2f63680a1a384e424/raw/308caf63d5f3b8662f3668c25e61fe12fd806acd/portfolio`)
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
  state,
  getters,
  actions,
  mutations
}

// export const initialState = () => ({
//   projectList: []
// })

// export const module = {
//   namespaced: true,
//   state: initialState(),

//   mutations: {
//     SET_PROJECT_LIST: (state, payload) => (
//       state.projects = payload.projectList || initialState().projectList
//     )
//   },

//   // getters: {
//   //   projectList: state => state.projects
//   // },

//   actions: {
//     async get_project_list ({ commit }) {
//       const res = await fetch(`${process.env.VUE_APP_API_URI}/019dc5e2f4692fb2f63680a1a384e424/raw/308caf63d5f3b8662f3668c25e61fe12fd806acd/portfolio`)

//       const json = await res.json()
//       return commit('SET_PROJECT_LIST', json.projects)
//     }
//   }
// }
