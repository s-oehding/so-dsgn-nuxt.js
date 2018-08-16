const state = () => ({})

const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('regions/getRegions')
    await dispatch('posts/getPosts')
  }
}

export default {
  state,
  actions
}
