import { createRouter, createWebHistory } from 'vue-router'
import Demos from '../views/demos/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/demos'
    },
    {
      path: '/demos',
      name: 'demos',
      component: Demos
    }
  ]
})

export default router
