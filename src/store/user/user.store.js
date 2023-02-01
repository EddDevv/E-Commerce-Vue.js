export const userStore = {
  state: {
    isAuth: false,
    data: null
  },
  getters: {
    getIsAuth(state) {
      return state.isAuth
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.isAuth = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  }
}