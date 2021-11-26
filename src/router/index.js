import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SearchNearby from '../views/SearchNearby.vue'
import SearchLocalBus from '../views/SearchLocalBus.vue'
import SearchGlobalBus from '../views/SearchGlobalBus.vue'
import EstimatedTimeOfArrival from '../views/EstimatedTimeOfArrival.vue'
import Navigator from '../views/Navigator.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Navigator',
    name: 'Navigator',
    component: Navigator
  },
  {
    path: '/Search-LocalBus',
    name: 'Search-LocalBus',
    component: SearchLocalBus,
    children: [
      {
        path: 'EstimatedTimeOfArrival/:City/:RouteUID',
        name: 'EstimatedTimeOfArrival',
        component: EstimatedTimeOfArrival
      }
    ]
  },
  {
    path: '/Search-GlobalBus',
    name: 'Search-GlobalBus',
    component: SearchGlobalBus
  },
  {
    path: '/Search-Nearby',
    name: 'Search-Nearby',
    component: SearchNearby
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
