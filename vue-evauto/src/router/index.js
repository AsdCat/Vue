import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import VotingPage from '@/components/VotingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/votingpage',
      name: 'votingpage',
      component: VotingPage
    }
  ]
})

export default router
