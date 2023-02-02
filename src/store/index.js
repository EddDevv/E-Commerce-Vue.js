import { createStore } from 'vuex'
import { categoriesStore } from './categories/categories.store'
import { productsStore } from './products/products.store'
import { authStore } from './auth/auth.store'
import { infoStore } from './info/info.store'

export const store = createStore({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    categories: categoriesStore,
    products: productsStore,
    auth: authStore,
    info: infoStore
  }
})