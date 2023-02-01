import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { layout: "MainLayout" }
    },
    {
      path: "/card",
      name: "card",
      component: () => import('../views/Card.vue'),
      meta: { layout: "MainLayout", isAuth: true }
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import('../views/Product.vue'),
      meta: { layout: "MainLayout" },
      props: true
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import('../views/SignIn.vue'),
      meta: { layout: "AuthLayout" }
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import('../views/SignUp.vue'),
      meta: { layout: "AuthLayout" }
    }
  ]
})

export default router
