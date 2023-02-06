export const productsStore = {
  state: {
    products: [],
    sortedCategory: "allCategories",
    searchQuery: "",
    sortedPrice: "default",
    sortedAndSearchProducts: []
  },
  getters: {
    products: s => s.products,
    sortedCategory: s => s.sortedCategory,
    searchQuery: s => s.searchQuery,
    sortedPrice: s => s.sortedPrice,
    sortedAndSearchProducts: s => s.sortedAndSearchProducts
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setSortedCategory(state, sortedCategory) {
      state.sortedCategory = sortedCategory
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    },
    setSortedPrice(state, sortedPrice) {
      state.sortedPrice = sortedPrice
    },
    setSortedAndSearchProducts(state, sortedAndSearchProducts) {
      state.sortedAndSearchProducts = sortedAndSearchProducts
    }
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