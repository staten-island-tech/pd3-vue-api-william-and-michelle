import { createRouter, createWebHistory } from 'vue-router'
import BarChartView from '../views/BarChartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'barchart',
      component: BarChartView
    },
    {
      path: '/doughnutchart',
      name: 'doughnutchart',
      component: () => import('../views/DoughnutChartView.vue')
    }
  ]
})

export default router
