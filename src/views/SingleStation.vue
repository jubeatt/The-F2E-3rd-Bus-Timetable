<template>
  <div v-if="isOnStationPage" class="station">
    <header class="header">
      <div class="container">
        <div class="top-nav">
          <button @click="backToPrevious" class="top-nav__button-prev">
            <i class="fas fa-chevron-left"></i>
          </button>
          <router-link to="/" class="top-nav__logo link">
            <PageLogo />
          </router-link>
        </div>
      </div>
    </header>

    <div class="content">
      <h2 class="heading">{{ $route.params.Station }}</h2>
      <div class="container">
        <!-- route list -->
        <template v-for="route in routes" :key="route.RouteUID">
          <router-link
            :to="`/Search-Nearby-Stations/${$route.params.Station}/EstimatedTimeOfArrival/${currentCity}/${route.RouteUID}`"
            @click="toNextPage"
            class="card-info"
          >
            <h3 class="card-info__title">{{ route.RouteName.Zh_tw }}</h3>
            <p class="card-info__text">
              {{ route.DepartureStopNameZh }}<span class="card-info__middle-text">往</span
              >{{ route.DestinationStopNameZh }}
            </p>
          </router-link>
        </template>
      </div>
    </div>
  </div>
  <!-- 預估到站的頁面 -->
  <router-view v-if="!isOnStationPage" @backToPreviousPage="showStationPage"></router-view>
  <!-- loading -->
  <Loader :isLoading="isLoading" />
</template>

<script>
import { getStation, getRouteInfo } from '../api'
import { PageLogo } from '../icons'
import Loader from '../components/Loader.vue'
import router from '../router'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'Station',
  data() {
    return {
      isLoading: true,
      isOnStationPage: true,
      station: [],
      routes: null
    }
  },
  components: {
    Loader,
    PageLogo
  },
  emits: ['toPreviousPage'],
  props: {
    currentCity: String
  },
  methods: {
    async initData() {
      const stationSrc = await getStation(this.currentCity, this.$route.params.Station)
      const stopUidsSet = new Set(stationSrc[0].Stops.map((stop) => stop.RouteUID))
      const stopUids = [...stopUidsSet]
      const result = []
      // get each route info
      for (const uid of stopUids) {
        const data = await getRouteInfo(this.currentCity, uid)
        result.push(data[0])
      }
      this.routes = result
    },
    backToPrevious() {
      router.back()
    },
    toNextPage() {
      this.isOnStationPage = false
    },
    showStationPage() {
      this.isOnStationPage = true
    }
  },
  created() {
    this.initData()
      .then(() => (this.isLoading = false))
      .catch((error) => {
        this.isLoading = false
        alert(error.message)
      })
  },
  beforeRouteLeave(to, from, next) {
    // 觸發父層事件
    this.$emit('toPreviousPage')
    next()
  }
}
</script>
