import ApiClient from '../helpers/apiClient'

const state = () => ({
  list: []
})

const getters = { }

const mutations = { }

const actions = {
  async GET_REGIONS ({ commit }) {
    const { data } = ApiClient.get('/regions/listRegions')
    commit('SET_REGIONS', data)
  },
  SET_REGIONS  ({ commit, data }) {
    this.state.list = data
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
};
