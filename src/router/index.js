import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SearchNearby from '../views/SearchNearby.vue'
import SearchLocalBus from '../views/SearchLocalBus.vue'
import SearchGlobalBus from '../views/SearchGlobalBus.vue'
import Users from '../views/Users.vue'
import User from '../views/User.vue'
import TestUser from '../views/TestUser.vue'
import SearchPage from '../views/SearchPage.vue'
import EstimatedTimeOfArrival from '../views/EstimatedTimeOfArrival.vue'
import SearchResult from '../views/SearchResult.vue'

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
    component: SearchLocalBus,
    children: [
      {
        path: ':City/:RouteName?',
        name: 'SearchResult',
        component: SearchResult
      }
    ]
  },
  {
    path: '/Search-GlobalBus',
    name: 'Search-GlobalBus',
    component: SearchGlobalBus
  },
  {
    path: '/SearchPage',
    component: SearchPage
  },
  {
    path: '/Users',
    name: 'Users',
    component: Users,
    children: [
      {
        path: ':userId',
        components: {
          default: User,
          Test: TestUser
        }
      }
    ]
  },
  {
    path: '/EstimatedTimeOfArrival/:City/:RouteName',
    component: EstimatedTimeOfArrival
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
