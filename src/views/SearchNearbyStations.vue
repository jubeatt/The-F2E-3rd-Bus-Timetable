<template>
  <div v-if="isOnSearching" class="search-nearby">
    <header class="header">
      <div class="container">
        <div class="heading">
          <router-link to="/" class="link heading__logo">
            <PageLogo />
          </router-link>
          <h2 class="heading__text">
            <span class="icon-position"><i class="fas fa-map-marker-alt"></i></span
            >{{ currentCity }} / 我的附近
          </h2>
        </div>
      </div>
    </header>
    <!-- 內容 -->
    <main class="content">
      <div class="container">
        <template v-for="(station, index) in stations" :key="index">
          <router-link
            :to="`/Search-Nearby-Stations/${station.StationName.Zh_tw}`"
            class="card-info"
            @click="toStationPage"
          >
            <h3 class="card-info__title">{{ station.StationName.Zh_tw }}</h3>
            <p class="card-info__description">{{ renderStops(station.Stops) }}</p>
            <p class="estimated-info">
              <span class="icon-walk"><i class="fas fa-walking"></i></span
              >{{ station.distance }} 公尺
            </p>
          </router-link>
        </template>
      </div>
    </main>
  </div>
  <!-- 預估到站時間的頁面 -->
  <router-view
    v-if="!isOnSearching"
    :current-city="currentCityEn"
    @toPreviousPage="showNearbyPage"
  ></router-view>
  <!-- loading -->
  <Loader :isLoading="isLoading" />
</template>

<script>
import Loader from '../components/Loader.vue'
import { PageLogo } from '../icons'
import { getNearbyStation, getAddress } from '../api'
import { getLocation, calCulateDistance } from '../utils'
import { cityMappingCh } from '../constants'
import route from '../router'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'SearchNearby',
  data() {
    return {
      isLoading: true,
      stations: null,
      backupStations: null,
      currentCity: '',
      currentCityEn: '',
      distance: 1000,
      isOnSearching: true
    }
  },
  components: {
    Loader,
    PageLogo
  },
  methods: {
    async initData() {
      const { lat, lng } = await getLocation()
      const address = await getAddress(lat, lng)
      this.currentCity = address.city
      this.currentCityEn = cityMappingCh[address.city]
      this.backupStations = await getNearbyStation(this.currentCityEn, lat, lng, this.distance)
      const stations = this.backupStations.filter((_, index) => {
        if (index === 0) return true
        // only keep different station
        return (
          this.backupStations[index].StationName.Zh_tw !==
          this.backupStations[index - 1].StationName.Zh_tw
        )
      })
      // add distance info
      stations.map((station) => {
        const distance = calCulateDistance(
          lat,
          lng,
          station.StationPosition.PositionLat,
          station.StationPosition.PositionLon,
          'K'
        )
        station.distance = Math.ceil(distance * 1000)
      })
      // sort by ASC
      stations.sort((a, b) => (a.distance > b.distance ? 1 : -1))
      this.stations = stations
    },

    toStationPage() {
      this.isOnSearching = false
    },
    showNearbyPage() {
      this.isOnSearching = true
    },
    renderStops(stops) {
      const stopNames = stops.map((stop) => stop.RouteName.Zh_tw)
      // remove same stop
      const stopNamesSet = new Set(stopNames)
      return [...stopNamesSet].join(', ')
    }
  },
  created() {
    if (!navigator.geolocation) {
      alert('Sorry, 你的裝置不支援定位功能')
      route.push({ path: '/', replace: true })
      return
    }
    this.initData()
      .then(() => (this.isLoading = false))
      .catch((error) => {
        this.isLoading = false
        alert(error.message)
      })
  }
}
</script>
