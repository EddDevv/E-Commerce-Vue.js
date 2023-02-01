export const categoriesStore = {
  state: {
    categories: []
  },
  getters: {
    getCategories(state) {
      return state.categories
    }
  },
  mutations: {
    updateCategories(state, categories) {
      state.categories = categories
    }
  },
  actions: {
    setCategories(context, cat) {
     context.commit("updateCategories", cat)
    }
  }
}