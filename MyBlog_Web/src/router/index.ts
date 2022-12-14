import { createRouter, createWebHistory } from 'vue-router'

import set from './set'
import { checkToken } from './middleware/token';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Redirect',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('page/Login/App.vue')
    },
    {
      path: '/article/:article_id',
      name: 'Article',
      component: () => import('page/Article/App.vue')
    },
    {
      path: '/category/:category_id',
      name: 'Category',
      component: () => import('page/Category/App.vue')
    },
    {
      path: '/home/:user_id',
      name: 'Home',
      component: () => import('page/Home/App.vue')
    },
    {
      path: '/set/:user_id',
      name: 'Set',
      component: () => import('page/Set/App.vue'),
      redirect: { name: 'SetBiography' },
      children: [
        ...set
      ]
    }
  ]
})


router.beforeEach(checkToken)

export default router


