import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SearchNearbyStations from '../views/SearchNearbyStations.vue'
import SearchLocalBus from '../views/SearchLocalBus.vue'
import SearchGlobalBus from '../views/SearchGlobalBus.vue'
import SingleStation from '../views/SingleStation.vue'
import EstimatedTimeOfArrival from '../components/EstimatedTimeOfArrival.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Search-LocalBus',
    component: SearchLocalBus,
    children: [
      {
        path: 'EstimatedTimeOfArrival/:City/:RouteUID',
        component: EstimatedTimeOfArrival
      }
    ]
  },
  {
    path: '/Search-GlobalBus',
    component: SearchGlobalBus
  },
  {
    path: '/Search-Nearby-Stations',
    component: SearchNearbyStations,
    children: [
      {
        path: ':Station',
        component: SingleStation,
        children: [
          {
            path: 'EstimatedTimeOfArrival/:City/:RouteUID',
            component: EstimatedTimeOfArrival
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
