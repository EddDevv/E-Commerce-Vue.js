export const productsStore = {
  state: {
    products: [],
  },
  getters: {
    getProducts(state) {
      return state.products
    }
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products
    }
  },
  actions: {
    setProducts(context, products) {
      context.commit("updateProducts", products)
    }
  }
}