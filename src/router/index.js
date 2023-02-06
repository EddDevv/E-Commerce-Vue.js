import { createRouter, createWebHistory } from 'vue-router'
import { store } from '../store'
import Home from '../views/Home.vue'
import SearchResultPage from "@/views/SearchResultPage.vue";

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
      path: "/cart",
      name: "cart",
      component: () => import('../views/Cart.vue'),
      meta: { layout: "MainLayout", isAuth: true },
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
    },
    {
      path: "/:pathMatch(.*)*",
      name: "errorPage",
      component: () => import('../views/404Page.vue'),
      meta: { layout: "MainLayout" }
    },
    {
      path: "/noAccess",
      name: "noAccess",
      component: () => import('../views/RouteErrorPage.vue'),
      meta: { layout: "AuthLayout" }
    },
    {
      path: "/search",
      name: "search",
      component: SearchResultPage,
      meta: { layout: "MainLayout" },
      props: true
    }
  ],
})

router.beforeEach((to, from, next) => {
  if (to.name === "cart" && !store.getters.isAuth) {
      next({ name: 'noAccess', query: { redirect: to.fullPath }})
  } else next()
})

export default router
