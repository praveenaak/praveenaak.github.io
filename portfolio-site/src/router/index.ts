// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ResumeView from '../views/ResumeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumeView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
