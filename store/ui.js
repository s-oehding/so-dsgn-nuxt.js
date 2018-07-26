const state = () => ({
  sidebar: {
    open: false
  }
})


const getters = {
  sidebarOpen: state => state.sidebar.open
}


const actions = {
  toggleSidebar ({ commit, state }) {
    commit('TOGGLE_SIDEBAR')
  }
}

const mutations = {

  TOGGLE_SIDEBAR (state) {
    state.sidebar.open = !state.sidebar.open
  }

}

export default {
  state,
  getters,
  mutations,
  actions,
};
