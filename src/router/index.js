import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      component: () => import('@/views/About/index.vue')
    },
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/map',
      component: () => import('@/views/Map/index.vue')
    },
    {
      path: '/ticket',
      component: () => import('@/views/Ticket/index.vue')
    },
    {
      path: '/product',
      component: () => import('@/views/Product/index.vue')
    },
    {
      path: '/:pathMatch(.*)',
      name: 'notFound',
      component: () => import('@/views/NotFound/index.vue')
    },
    {
      path: '/cart',
      component: () => import('@/views/Cart/index.vue')
    },
    {
      path: '/checkout',
      component: () => import('@/views/Checkout/index.vue')
    },

  ]
})

export default router
