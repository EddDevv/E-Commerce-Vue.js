export const productsStore = {
  state: {
    products: [],
    sortedMethod: "",
    searchQuery: "",
    sortedPrice: ""
  },
  getters: {
    products: s => s.products,
    sortedMethod: s => s.sortedMethod,
    searchQuery: s => s.searchQuery,
    sortedPrice: s => s.sortedPrice
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setSortedMethod(state, sortedMethod) {
      state.sortedMethod = sortedMethod
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    },
    setSortedPrice(state, sortedPrice) {
      state.sortedPrice = sortedPrice
    },
  },
  actions: {
    async fetchProducts({dispatch, commit}) {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const json = await res.json()
        if (json) {
          commit("setProducts", json)
        }
      } catch (e) {
        throw e
      }
    },
    async fetchProductsByCategory({dispatch, commit}, category) {
      if (category === "allCategories") {
        const res = await fetch(`https://fakestoreapi.com/products`)
        const json = await res.json()
        return json
      } else {
        try {
          const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
          const json = await res.json()
          return json
        } catch (e) {
          throw e
        }
      }
    }
  }
}