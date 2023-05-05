import { createRouter, createWebHistory } from 'vue-router'
import ApiData from '../views/ApiData.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ApiData',
      component: ApiData
    },
    {
      path: '/PieView',
      name: 'PieView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PieView.vue')
    },
    {
      path: '/ApiData/:id',
      name: 'ApiData',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ApiData.vue')
    }
  ]
})

export default router
