import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SearchNearby from '../views/SearchNearby.vue'
import SearchLocalBus from '../views/SearchLocalBus.vue'
import SearchGlobalBus from '../views/SearchGlobalBus.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Search-Nearby',
    name: 'Search-Nearby',
    component: SearchNearby
  },
  {
    path: '/Search-LocalBus',
    name: 'Search-LocalBus',
    component: SearchLocalBus
  },
  {
    path: '/Search-GlobalBus',
    name: 'Search-GlobalBus',
    component: SearchGlobalBus
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
