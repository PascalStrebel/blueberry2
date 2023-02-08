import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue';
import Login from '../views/Login.vue';
import Children from '../views/Children.vue';
import UserOverview from '../views/UserOverview.vue';
import AdminPage from '../views/AdminPage.vue';
import EditChildren from '../views/EditChildren.vue';
import ChildDetail from '../views/ChildDetail.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
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
        redirect: '/tabs/tab1',
      },
      {
        path: 'todo',
        component: () => import('@/views/Todo.vue'),
      },
      {
        path: 'children',
        component: () => import('@/views/Children.vue'),
      },
      {
        path: 'children/:id',
        component: () => import('@/views/ChildDetail.vue'),
      },
      {
        path: 'useroverview',
        component: () => import('@/views/UserOverview.vue'),
      },
      {
        path: 'adminpage',
        component: () => import('@/views/AdminPage.vue'),
      },
      {
        path: 'create/observation',
        component: () => import('@/views/CreateObservation.vue'),
      },
      {
        path: 'editchildren',
        component: () => import('@/views/EditChildren.vue'),
      },
      {
        path: 'timerecord',
        component: () => import('@/views/Timerecord.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
