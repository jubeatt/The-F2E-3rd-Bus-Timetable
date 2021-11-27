<template>
  <h1>顯示 {{ $route.params.Station }} 站牌會經過的公車</h1>
  <p>所在縣市 {{ currentCity }}</p>
  <button @click="backToPrevious">回上一頁</button>
  <template v-for="(stop, index) in stops" :key="index">
    <router-link
      to="#"
      class="card-info"
      >
      <h3 class="card-info__title">{{ stop.RouteName }}</h3>
      <p class="card-info__text">{{ stop.DepartureStops }}<span class="card-info__middle-text">往</span>{{ stop.DestinationStops }}</p>
    </router-link>
  </template>
</template>

<script>
import GetAuthorizationHeader from '../lib/Authorization.js'
import router from '../router'
export default {
  name: 'Station',
  data () {
    return {
      station: [],
      stops: [],
      routeLength: 0,
      routeNames: [],
      routeUIDs: [],
      departureStops: [],
      destinationStops: [],
      stationsInfo: []
    }
  },
  emits: ['toPreviousPage'],
  props: {
    currentCity: String
  },
  methods: {
    async getStation () {
      const data = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Bus/Station/City/${this.currentCity}?$filter=StationName%2FZh_tw%20eq%20%27${this.$route.params.Station}%27&$format=JSON`, { headers: GetAuthorizationHeader() })
      const json = await data.json()
      return json
    },
    async getRouteInfo (routeUID) {
      const data = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/Kaohsiung?$filter=RouteUID%20eq%20'${routeUID}'&$format=JSON`, { headers: GetAuthorizationHeader() })
      const json = await data.json()
      return json
    },
    backToPrevious () {
      router.push('/Search-Nearby')
    }
  },
  async created () {
    // 取得指定站點的資料
    this.station = await this.getStation()
    // 擷取出路線資料
    this.station[0].Stops.forEach((item, index, originalArray) => {
      if (index !== 0) {
        if (originalArray[index].RouteName.Zh_tw !== originalArray[index - 1].RouteName.Zh_tw) {
          // 暫存路線資料
          this.routeNames.push(item.RouteName.Zh_tw)
          // 暫存路線UID
          this.routeUIDs.push(item.RouteUID)
        }
      } else {
        // 暫存路線資料
        this.routeNames.push(item.RouteName.Zh_tw)
        // 暫存路線UID
        this.routeUIDs.push(item.RouteUID)
      }
    })
    // 儲存資料的數量
    this.routeLength = this.routeNames.length;
    (async () => {
      // 發送請求，取得每一個路線的資料（非同步）
      for (let i = 0; i < this.routeUIDs.length; i++) {
        const routeInfo = await this.getRouteInfo(this.routeUIDs[i])
        this.departureStops.push(routeInfo[0].DepartureStopNameZh)
        this.destinationStops.push(routeInfo[0].DestinationStopNameZh)
      }
      // 建立資料
      for (let i = 0; i < this.routeLength; i++) {
        this.stops.push({
          RouteName: this.routeNames[i],
          RouteUIDs: this.routeUIDs[i],
          DepartureStops: this.departureStops[i],
          DestinationStops: this.destinationStops[i]
        })
      }
    })()
  },
  beforeRouteLeave (to, from, next) {
    // 觸發父層事件
    this.$emit('toPreviousPage')
    next()
  }
}
</script>
