import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SearchNearby from '../views/SearchNearby.vue'
import SearchLocalBus from '../views/SearchLocalBus.vue'
import SearchGlobalBus from '../views/SearchGlobalBus.vue'
import EstimatedTimeOfArrival from '../views/EstimatedTimeOfArrival.vue'
import Station from '../views/Station.vue'
import EstimatedTimeOfArrivalFromNearbyStation from '../views/EstimatedTimeOfArrivalFromNearbyStation.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    component: SearchNearby,
    children: [
      {
        path: ':Station',
        name: 'Station',
        component: Station,
        children: [
          {
            path: ':City/:RouteUID',
            name: 'EstimatedTimeOfArrivalFromNearbyStation',
            component: EstimatedTimeOfArrivalFromNearbyStation
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
