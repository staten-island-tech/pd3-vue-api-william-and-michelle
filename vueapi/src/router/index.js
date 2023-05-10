import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import BarChartView from '../views/BarChartView.vue'

=======
import ApiData from '../views/ApiData.vue'
>>>>>>> linegraph
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'barchart',
      component: BarChartView
=======
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
>>>>>>> linegraph
    }
  ]
})

export default router
