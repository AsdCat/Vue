import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/component/HomeView.vue'
import WatchList from '@/components/WatchList.vue'
import NewWatch from '@/components/NewWatch.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/watchlist',
      name: 'watchlist',
      component: WatchList
    },
    {
      path: '/newwatch',
      name: 'newwatch',
      component: NewWatch
    },

  ]
})

export default router
