import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '../views/Portfolio.vue'  // Make sure this exists
import ProjectDetail from '../views/ProjectDetail.vue'  // Make sure this exists

const routes = [
  {
    path: '/',
    redirect: '/portfolio'  // Redirect root to portfolio
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetail',
    component: ProjectDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router