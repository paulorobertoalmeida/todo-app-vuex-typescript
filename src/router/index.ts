import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import All from '../view/All.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'All',
    component: All
  },
  {
    path: '/active',
    name: 'Active',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../view/Active.vue')
  },
  {
    path: '/completed',
    name: 'Completed',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../view/Completed.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
