import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/cadastro-imob',
      name: 'cadastro-imob',
      component: () => import('@/views/CadastroImob.vue')
    }
  ]
})

export default router

/**
 * const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/default.vue"),
      meta: { requireAuth: true },
      children: [
        {
          path: "/",
          name: "dashboard",
          component: () => import("@/views/Dashboard.vue")
        },
        {
          path: "/financial-operations",
          name: "financial-operations",
          component: () => import("@/views/FinancialOperations")
        },
        {
          path: "/financial-reconciliation",
          name: "financial-reconciliation",
          component: () => import("@/views/Reconciliation")
        }
      ]
    },
    {
      path: "/login",
      component: () => import("@/layouts/unauthenticate.vue"),
      children: [
        {
          path: "/",
          name: "login",
          component: () => import("@/views/Login.vue")
        }
      ]
    }
  ]
});
 */