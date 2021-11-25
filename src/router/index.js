import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SearchNearby from '../views/SearchNearby.vue'
import SearchLocalBus from '../views/SearchLocalBus.vue'
import SearchGlobalBus from '../views/SearchGlobalBus.vue'
import Users from '../views/Users.vue'
import User from '../views/User.vue'
import TestUser from '../views/TestUser.vue'

import button from '../components/button.vue'
import EstimatedTimeOfArrival from '../components/EstimatedTimeOfArrival.vue'
import Navigator from '../views/Navigator.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/button',
    name: 'button',
    component: button
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
