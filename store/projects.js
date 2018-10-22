import jsonData from './JSON/projects'

const state = () => ({
  list: jsonData
})

const getters = {
  projects(state) {
    return state.list
  }
}

const mutations = { }

const actions = { }

export default {
  state,
  getters,
  mutations,
  actions,
};
