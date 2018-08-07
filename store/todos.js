const state = () => ({
  list: []
})

const getters = { }

const mutations = {
  add (state, text) {
    state.list.push({
      text: text,
      done: false
    })
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}

const actions = { }

export default {
  state,
  getters,
  mutations,
  actions,
}
