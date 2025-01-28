import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../components/Main.vue'
import Cheer from '../components/html/cheer.vue'
import Picture from '../components/html/picture.vue'
import Music from '../components/html/music.vue'
import Streaming from '../components/html/streaming.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/cheer',
    name: 'Cheer',
    component: Cheer
    },
  {
    path: '/picture',
    name: 'Picture',
    component: Picture
    },
  {
    path: '/music',
    name: 'Music',
    component: Music
    },
  {
    path: '/streaming',
    name: 'Streaming',
    component: Streaming
    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
