export default {
  state: {
    message: 'Hello World!',
    number: 1,
    totalNum: 100
  },
  mutations: {
  },
  actions: {
    addNumber({ state }) {
      state.totalNum = state.totalNum + 1;
    }
  },
  getters: {
    displayMessage(state) {
      return state.message;
    },
    totalNum(state) {
      return state.totalNum;
    },
  },
  modules: {
  }
}
