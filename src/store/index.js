import { createStore } from 'vuex'
import { userStore } from './user/user.store'
import { categoriesStore } from './categories/categories.store'
import { productsStore } from './products/products.store'
import {authStore} from './auth/auth.store'

export const store = createStore({
  modules: {
    user: userStore,
    categories: categoriesStore,
    products: productsStore,
    auth: authStore
  }
})