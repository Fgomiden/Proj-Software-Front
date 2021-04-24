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
      path: '/painel-adm',
      name: 'painel-adm',
      component: () => import('@/views/PainelAdmin.vue')
    },
    {
      path: '/painel-cliente',
      name: 'painel-cliente',
      component: () => import('@/views/PainelCliente.vue')
    },
    {
      path: '/cadastro-imob',
      name: 'cadastro-imob',
      component: () => import('@/views/CadastroImob.vue')
    },
    {
      path: '/cadastro-imovel',
      name: 'cadastro-imovel',
      component: () => import('@/views/CadastroImovel.vue')
    },
    {
      path: '/detalhes-imovel',
      name: 'detalhes-imovel',
      component: () => import('@/views/DetalhesImovel.vue')
    },
    {
      path: '/listagem-imoveis',
      name: 'listagem-imoveis',
      component: () => import('@/views/ListagemImoveis.vue')
    },
    {
      path: '/contratos',
      name: 'contratos',
      component: () => import('@/views/Contratos.vue')
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