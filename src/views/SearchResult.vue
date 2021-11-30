<template>
  <div class="container__search-result">
    <h2 class="heading"><i class="icon-position fas fa-map-marker-alt"></i>{{ transferToZhTw(cityName) }}</h2>
    <p v-if="routeName" class="search-text">搜尋：{{ routeName }}</p>
    <p v-if="noResultMsg">找不到搜尋結果</p>
    <template v-for="(item, index) of routeData" :key="index">
      <router-link :to="`/EstimatedTimeOfArrival/${cityName}/${item.RouteUID}`" class="card-info">
        <h3 class="card-info__title">{{ item.RouteName.Zh_tw }}</h3>
        <p class="card-info__text">{{ item.DepartureStopNameZh }}<span class="card-info__middle-text">往</span>{{ item.DestinationStopNameZh }}</p>
      </router-link>
    </template>
  </div>
  <!-- loading -->
  <loading
    :active="loader.isLoading"
    :loader="loader.style"
    :color="loader.color"
    :opacity="loader.opacity"
    :background-color="loader.background"
    :blur="loader.blur"
    :is-full-page="loader.fullPage"/>
</template>

<script>
import GetAuthorizationHeader from '../lib/Authorization.js'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  name: 'SearchResult',
  data () {
    return {
      loader: {
        style: 'dots',
        color: '#fcd42c',
        background: '#fff',
        opacity: 0.08,
        blur: null,
        isLoading: false,
        fullPage: true
      },
      noResultMsg: false,
      routeData: [],
      tempData: []
    }
  },
  components: {
    Loading
  },
  methods: {
    fetchRoute (cityName) {
      return fetch(`https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${cityName}?$format=JSON`, { headers: GetAuthorizationHeader() })
        .then((response) => response.json())
        .then((json) => json)
    },
    transferToZhTw (string) {
      let result = ''
      switch (string) {
        case 'Taipei':
          result = '台北市'
          break
        case 'NewTaipei':
          result = '新北市'
          break
        case 'Keelung':
          result = '基隆市'
          break
        case 'Taoyuan':
          result = '桃園市'
          break
        case 'Hsinchu':
          result = '新竹市'
          break
        case 'HsinchuCounty':
          result = '新竹縣'
          break
        case 'MiaoliCounty':
          result = '苗栗縣'
          break
        case 'Taichung':
          result = '台中市'
          break
        case 'NantouCounty':
          result = '南投縣'
          break
        case 'ChanghuaCounty':
          result = '彰化縣'
          break
        case 'YunlinCounty':
          result = '雲林縣'
          break
        case 'Chiayi':
          result = '嘉義市'
          break
        case 'ChiayiCounty':
          result = '嘉義縣'
          break
        case 'Tainan':
          result = '台南市'
          break
        case 'Kaohsiung':
          result = '高雄市'
          break
        case 'PingtungCounty':
          result = '屏東縣'
          break
        case 'TaitungCounty':
          result = '台東縣'
          break
        case 'HualienCounty':
          result = '花蓮縣'
          break
        case 'YilanCounty':
          result = '宜蘭縣'
          break
        case 'PenghuCounty':
          result = '澎湖縣'
          break
        case 'KinmenCounty':
          result = '金門縣'
          break
        case 'LienchiangCounty':
          result = '連江縣'
          break
      }
      return result
    },
    searchData (array, string) {
      return array.filter(function (item) {
        return item.RouteName.Zh_tw.includes(string)
      })
    }
  },
  computed: {
    cityName () {
      return this.$route.params.City
    },
    routeName () {
      return this.$route.query.RouteName
    },
    routeDataLength () {
      return this.routeData.length
    }
  },
  async created () {
    // 打開 loading 畫面
    this.loader.isLoading = true
    // 取得公車路線資料
    this.routeData = await this.fetchRoute(this.cityName)
    // 拷貝資料（過濾用）
    this.tempData = [...this.routeData]
    // 如果網址帶有路線參數，過濾資料
    if (this.routeName) {
      // 利用暫存資料做過濾，並更新顯示資料的內容
      this.routeData = this.searchData(this.tempData, this.routeName)
    }
    // 隱藏 loading 畫面
    this.loader.isLoading = false
  },
  watch: {
    // 當 cityName 改變時要做的處理
    cityName: async function (newVal) {
      // 打開 loading 畫面
      this.loader.isLoading = true
      // 發送新請求，更新資料值
      this.routeData = await this.fetchRoute(newVal)
      // 拷貝資料（過濾用）
      this.tempData = [...this.routeData]
      // === 測試用 loading ===
      // setTimeout(() => { this.loader.isLoading = false }, 3000)
      // 隱藏 loading 畫面
      this.loader.isLoading = false
    },
    // 當 routeName 改變時要做的處理
    routeName: function (newVal) {
      // 利用暫存資料做過濾，並更新顯示資料的內容
      this.routeData = this.searchData(this.tempData, newVal)
    },
    // 當資料改變時，檢查該資料的長度
    routeDataLength: function () {
      if (this.routeDataLength === 0) {
        // 顯示提示訊息
        this.noResultMsg = true
      } else {
        // 關閉提示訊息
        this.noResultMsg = false
      }
    }
  }
}
</script>
