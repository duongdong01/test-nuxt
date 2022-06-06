import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      current: 'home'
    },
    mutations: {
      changeCurrent (state, current) {
        state.current = current
      }
    },
    actions: {
      changeCurrent (vueContext, current) {
        vueContext.commit('changeCurrent', current)
      }
    },
    getters: {
      current (state) {
        return state.current
      }
    }
  })
}

export default createStore
