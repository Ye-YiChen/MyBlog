import { createRouter, createWebHistory } from 'vue-router'

import login from './login'
import home from './home'
import category from './category'
import article from './article'
import set from './set'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Redirect',
      redirect: '/login'
    },
    ...login,
    ...home,
    ...category,
    ...article,
    ...set
  ]
})

export default router
