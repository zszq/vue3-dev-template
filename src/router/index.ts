import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/components/MainLayout.vue';
import Analyse from '@/views/analyse/analyse.vue';
import Login from '@/views/login/login.vue';

const Routes = [
  {
    path: '/',
    component: MainLayout,
    redirect: '/analyse',
    children: [
      {
        path: 'analyse',
        name: 'Analyse',
        component: Analyse,
        meta: {
          title: '法币分析'
        }
      },
      {
        path: 'result',
        name: 'Result',
        component: () => import('@/views/analyse/analyse.vue'),
        meta: {
          title: '分析结果'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/404/404.vue') }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Routes
});

export default router;
