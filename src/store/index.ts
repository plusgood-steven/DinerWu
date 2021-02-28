import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogin: true,
  },
  mutations: {
    changeisLogin(state, value) {
      state.isLogin = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
