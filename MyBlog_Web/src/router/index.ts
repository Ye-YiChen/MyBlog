import { createRouter, createWebHistory } from 'vue-router'

import category from './category'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('page/Home/App.vue')
    },
    ...category
  ]
})

export default router
