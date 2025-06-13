import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import LiveYearPage from '@/layout/LiveYearPage.vue'
import Label from '@/layout/Label.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('@/pages/Gallery.vue'),
    },
    {
      path: '/live',
      name: 'live',
      component: () => import('@/pages/Live.vue'),
    },
    {
      path: '/live/:year',
      name: 'liveyear',
      component: LiveYearPage,
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component: () => import('@/pages/Broadcast.vue'),
    },
    {
      path: '/cheer',
      name: 'cheer',
      component: () => import('@/pages/Cheer.vue'),
    },
    {
      path: '/cheer/:label',
      name: 'label',
      component: Label,
    },
    {
      path: '/streaming',
      name: 'streaming',
      component: () => import('@/pages/Streaming.vue'),
    },
  ],
})

export default router
