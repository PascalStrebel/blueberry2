import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import Login from '../views/Login.vue'
import UserOverview from '../views/UserOverview.vue'
import AdminPage from '../views/AdminPage.vue'
import EditChildren from '../views/EditChildren.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'todo',
        component: () => import('@/views/Todo.vue')
      },
      {
        path: 'projects',
        component: () => import('@/views/Projects.vue')
      }, {
        path: 'useroverview',
        component: () => import('@/views/UserOverview.vue')
      }, {
        path: 'adminpage',
        component: () => import('@/views/AdminPage.vue')
      }, {
        path: 'editchildren',
        component: () => import('@/views/EditChildren.vue')
      },
      {
        path: 'timerecord',
        component: () => import('@/views/Timerecord.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
