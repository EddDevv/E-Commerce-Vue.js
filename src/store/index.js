import { cartStore } from "@/store/cart/cart.store"
import { createStore } from 'vuex'
import { authStore } from './auth/auth.store'
import { categoriesStore } from './categories/categories.store'
import { infoStore } from './info/info.store'
import { productsStore } from './products/products.store'

export const store = createStore({
  state: {
    notifications: []
  },
  mutations: {
    setNotifications(state, notification) {
      state.notifications.push(notification)
    },
    removeNotification(state, id) {
      state.notifications = state.notifications.filter(t => t.id !== id)
    }
  },
  getters: {
    notifications: s => s.notifications
  },
  actions: {
    addNotification({ commit, dispatch }, notification) {
      commit("setNotifications", notification)
      setTimeout(() => { dispatch("removeNotification", notification.id) }, 2000)
    },
    removeNotification({ commit }, id) {
      commit("removeNotification", id)
    }
  },
  modules: {
    categories: categoriesStore,
    products: productsStore,
    auth: authStore,
    info: infoStore,
    cart: cartStore
  }
})