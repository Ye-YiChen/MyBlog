import { createRouter, createWebHistory } from 'vue-router'

import home from './home'
import category from './category'
import article from './article'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Redirect',
      redirect: '/home/1'
    },
    ...home,
    ...category,
    ...article
  ]
})

export default router
