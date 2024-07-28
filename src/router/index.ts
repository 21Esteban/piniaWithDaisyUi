import ProjectsLayout from '@/modules/projects/layout/ProjectsLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'projects' },
      component: ProjectsLayout,
      children: [
        {
          path: 'projects',
          name: 'projects',
          component: () => import('@/modules/projects/views/ProjectsView.vue')
        },
        {
          path: 'project/:id',
          name: 'project',
          //asi podemos pasar parametros de la ruta a nuestro componente 
          props:true,
          component: () => import('@/modules/projects/views/ProjectView.vue')
        }
      ]
    }
  ]
})

export default router
