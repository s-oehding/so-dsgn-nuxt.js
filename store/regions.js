import ApiClient from '~/plugins/apiClient'

const state = () => ({
  list: null
})

const getters = {
  regions(state) {
    return state.list
  }
}

const mutations = {
  SET_REGIONS  ( state, data ) {
    state.list = data
  }
}

const actions = {
  async getRegions ({commit}) {
    console.log(data)
    commit('SET_REGIONS', data)
  },

}

export default {
  state,
  getters,
  mutations,
  actions,
};
