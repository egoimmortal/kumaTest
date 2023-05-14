import { createStore } from 'vuex'

export default createStore({
  state: {
    currentPage: ""
  },
  getters: {
  },
  mutations: {
    SetPageName(state, payload){
      state.currentPage = payload;
    }
  },
  actions: {
    UpdatePageName(state, payload){
      this.commit('SetPageName', payload);
    }
  },
  modules: {
  }
})
