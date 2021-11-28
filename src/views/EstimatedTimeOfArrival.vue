<template>
  <div class="estimated-time-of-arrival">
    <header class="header">
      <div class="container">
        <div class="main-buttons">
          <button @click="backToPrevious" class="main-buttons__button-prev"><i class="fas fa-chevron-left"></i></button>
          <router-link to="/">
            <svg
              width="93"
              height="39"
              viewBox="0 0 93 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="svg-logo"
            >
              <path
                class="svg-t"
                d="M1.472 7.4C1.152 7.4 0.96 7.592 0.96 7.912V11.112C0.96 11.432 1.152 11.624 1.472 11.624H5.184V32.488C5.184 32.84 5.376 33 5.696 33H9.024C9.376 33 9.536 32.84 9.536 32.488V11.624H13.248C13.6 11.624 13.76 11.432 13.76 11.112V7.912C13.76 7.592 13.6 7.4 13.248 7.4H1.472Z"
                fill="#1CC8EE"
              />
              <path
                d="M24.1148 33C24.3308 33 24.4208 32.892 24.3668 32.694L21.3788 20.652C21.3428 20.472 21.2348 20.4 21.0728 20.4H18.5708C18.4088 20.4 18.3008 20.472 18.2648 20.652L15.2768 32.694C15.2228 32.892 15.3127 33 15.5108 33H17.2748C17.4368 33 17.5268 32.91 17.5628 32.748L18.1208 30.48H21.5048L22.0808 32.748C22.1168 32.91 22.2068 33 22.3688 33H24.1148ZM20.9468 28.392H18.6788L19.8128 23.496L20.9468 28.392ZM26.1196 33C25.9216 33 25.8316 32.892 25.8316 32.712V20.688C25.8316 20.508 25.9216 20.4 26.1196 20.4H27.9916C28.1716 20.4 28.2796 20.508 28.2796 20.688V32.712C28.2796 32.892 28.1716 33 27.9916 33H26.1196ZM40.2735 20.4C40.0395 20.4 39.9315 20.508 39.8955 20.742L38.9775 28.266H38.8875L37.1235 20.706C37.0695 20.508 36.9435 20.4 36.7275 20.4H35.6295C35.4135 20.4 35.2875 20.508 35.2335 20.706L33.4695 28.266H33.3795L32.4975 20.742C32.4615 20.508 32.3355 20.4 32.1195 20.4H30.4275C30.1755 20.4 30.0495 20.544 30.0855 20.778L31.7415 32.658C31.7775 32.892 31.9035 33 32.1375 33H34.1175C34.3335 33 34.4595 32.892 34.5135 32.676L36.1875 25.296L37.8435 32.676C37.8975 32.892 38.0235 33 38.2395 33H40.1835C40.4175 33 40.5435 32.892 40.5795 32.676L42.3075 20.778C42.3435 20.544 42.2175 20.4 41.9655 20.4H40.2735ZM51.3081 33C51.5241 33 51.6141 32.892 51.5601 32.694L48.5721 20.652C48.5361 20.472 48.4281 20.4 48.2661 20.4H45.7641C45.6021 20.4 45.4941 20.472 45.4581 20.652L42.4701 32.694C42.4161 32.892 42.5061 33 42.7041 33H44.4681C44.6301 33 44.7201 32.91 44.7561 32.748L45.3141 30.48H48.6981L49.2741 32.748C49.3101 32.91 49.4001 33 49.5621 33H51.3081ZM48.1401 28.392H45.8721L47.0061 23.496L48.1401 28.392ZM58.731 20.4C58.533 20.4 58.443 20.508 58.443 20.688V27.51L55.059 20.634C54.987 20.472 54.897 20.4 54.735 20.4H53.313C53.133 20.4 53.025 20.508 53.025 20.688V32.712C53.025 32.892 53.133 33 53.313 33H55.005C55.203 33 55.293 32.892 55.293 32.712V25.89L58.677 32.766C58.749 32.928 58.839 33 59.001 33H60.423C60.603 33 60.711 32.892 60.711 32.712V20.688C60.711 20.508 60.603 20.4 60.423 20.4H58.731ZM74.2352 21.192C74.2352 19.5 73.3172 18.6 71.6252 18.6H67.3052C67.1252 18.6 67.0172 18.69 67.0172 18.888V32.712C67.0172 32.892 67.1252 33 67.3052 33H71.6252C73.3172 33 74.2352 32.1 74.2352 30.408V27.096C74.2352 26.43 73.7492 25.926 73.1012 25.818V25.782C73.7492 25.674 74.2352 25.17 74.2352 24.504V21.192ZM71.8412 23.91C71.8412 24.36 71.5892 24.612 71.1212 24.612H69.4832V20.976H71.1212C71.6072 20.976 71.8412 21.228 71.8412 21.696V23.91ZM71.8412 29.904C71.8412 30.39 71.5892 30.624 71.1212 30.624H69.4832V26.988H71.1212C71.6072 26.988 71.8412 27.24 71.8412 27.708V29.904ZM81.2188 20.4C81.0208 20.4 80.8588 20.562 80.8588 20.76V29.904C80.8588 30.39 80.6068 30.624 80.1388 30.624H79.2028C78.7348 30.624 78.4828 30.39 78.4828 29.904V20.76C78.4828 20.562 78.3208 20.4 78.1228 20.4H76.3948C76.1968 20.4 76.0348 20.562 76.0348 20.76V30.408C76.0348 32.1 76.9348 33 78.6268 33H80.6428C82.3348 33 83.2348 32.1 83.2348 30.408V20.76C83.2348 20.562 83.0728 20.4 82.8748 20.4H81.2188ZM87.451 20.4C85.777 20.4 84.859 21.3 84.859 22.992V26.106C84.859 26.448 85.021 26.664 85.345 26.772L89.665 28.176V29.994C89.665 30.48 89.413 30.714 88.945 30.714H87.973C87.523 30.714 87.253 30.48 87.253 29.994V29.238C87.253 29.04 87.163 28.95 86.965 28.95H85.147C84.967 28.95 84.859 29.04 84.859 29.238V30.408C84.859 32.1 85.777 33 87.451 33H89.467C91.159 33 92.059 32.1 92.059 30.408V27.024C92.059 26.682 91.897 26.466 91.591 26.358L87.235 24.954V23.424C87.235 22.956 87.505 22.704 87.955 22.704H88.945C89.431 22.704 89.665 22.956 89.665 23.424V24.18C89.665 24.36 89.773 24.468 89.953 24.468H91.771C91.969 24.468 92.059 24.36 92.059 24.18V22.992C92.059 21.3 91.159 20.4 89.467 20.4H87.451Z"
                fill="#F5F5F5"
              />
              <path
                d="M17 13.2632C17 14.0968 17.3656 14.8453 17.9375 15.3663V17.0526C17.9375 17.5737 18.3594 18 18.875 18H19.8125C20.3281 18 20.75 17.5737 20.75 17.0526V16.1053H28.25V17.0526C28.25 17.5737 28.6719 18 29.1875 18H30.125C30.6406 18 31.0625 17.5737 31.0625 17.0526V15.3663C31.6344 14.8453 32 14.0968 32 13.2632V3.78947C32 0.473684 28.6438 0 24.5 0C20.3562 0 17 0.473684 17 3.78947V13.2632ZM20.2812 14.2105C19.5031 14.2105 18.875 13.5758 18.875 12.7895C18.875 12.0032 19.5031 11.3684 20.2812 11.3684C21.0594 11.3684 21.6875 12.0032 21.6875 12.7895C21.6875 13.5758 21.0594 14.2105 20.2812 14.2105ZM28.7188 14.2105C27.9406 14.2105 27.3125 13.5758 27.3125 12.7895C27.3125 12.0032 27.9406 11.3684 28.7188 11.3684C29.4969 11.3684 30.125 12.0032 30.125 12.7895C30.125 13.5758 29.4969 14.2105 28.7188 14.2105ZM30.125 8.52632H18.875V3.78947H30.125V8.52632Z"
                fill="#F5F5F5"
              />
              <line
                x1="34.5"
                y1="16.5"
                x2="90.5"
                y2="16.5"
                stroke="#F5F5F5"
                stroke-linecap="round"
                stroke-dasharray="2 4"
              />
              <path
                d="M64.416 8.748H61.512V6.012H64.416V8.748ZM60.66 5.208V9.54H65.292V5.208H60.66ZM58.932 11.424V3.348H67.032V11.424H58.932ZM58.032 2.46V12.912H58.932V12.264H67.032V12.912H67.98V2.46H58.032ZM78.048 7.524H71.928V6.336H78.048V7.524ZM71.928 11.448V10.176H78.048V11.448H71.928ZM78.048 9.468H71.928V8.244H78.048V9.468ZM80.34 4.44V3.612H77.316C77.676 3.204 78.06 2.7 78.384 2.196L77.412 1.944C77.148 2.436 76.704 3.12 76.32 3.612H73.152L73.668 3.336C73.452 2.928 72.972 2.34 72.54 1.92L71.76 2.256C72.132 2.664 72.54 3.204 72.78 3.612H69.684V4.44H74.484C74.412 4.788 74.304 5.196 74.196 5.544H71.052V12.924H71.928V12.24H78.048V12.924H78.96V5.544H75.144C75.288 5.208 75.408 4.824 75.54 4.44H80.34ZM90.096 6.288H84.072V5.196H90.096V6.288ZM90.096 8.064H84.072V6.96H90.096V8.064ZM90.096 9.852H84.072V8.748H90.096V9.852ZM83.16 4.488V10.572H91.044V4.488H87.144C87.264 4.152 87.384 3.768 87.492 3.396H91.956V2.58H82.008V3.396H86.472C86.412 3.756 86.316 4.152 86.22 4.488H83.16ZM85.332 10.704C84.504 11.256 82.872 11.88 81.588 12.216C81.792 12.408 82.056 12.72 82.2 12.912C83.484 12.552 85.092 11.916 86.136 11.292L85.332 10.704ZM87.876 11.352C89.28 11.832 90.696 12.456 91.548 12.924L92.376 12.312C91.44 11.844 89.916 11.232 88.512 10.764L87.876 11.352Z"
                fill="#1CC8EE"
              />
            </svg>
          </router-link>
          <button @click="toggleMap" class="main-buttons__button-map"><i class="fas fa-map-marked-alt"></i></button>
        </div>
        <div class="heading">
          <h2 class="heading__text">{{ routeName }}</h2>
          <button @click="reLoading" class="heading__button-reload" :class="{ 'heading__button-reload--disabled' : !isClickable }">
            <span v-if="isClickable"><i class="fas fa-redo-alt"></i></span>
            <span v-if="!isClickable"><i class="fas fa-ban"></i></span>
          </button>
        </div>
        <div class="direction">
          <button
            class="direction__button"
            :class="{'direction__button--current' : direction }"
            @click="direction = 1">往 {{ destinationStop }}</button>
          <button
            class="direction__button"
            :class="{'direction__button--current' : !direction }"
            @click="direction = 0">往{{ departureStop }}</button>
        </div>
      </div>
    </header>
    <main class="content" :key="1">
      <div class="container">
        <!-- 地圖 -->
        <div
          id="map"
          ref="map"
          class="map"
          v-show="isShowMap"
          ></div>
        <!-- 去程 -->
        <div v-if="direction && !isShowMap" :key="1">
          <p class="update-msg text-color-blue">*於 {{ timer }} 秒後自動更新</p>
          <div class="stops">
            <template v-for="(stop, index) in goDistanceData" :key="index">
              <section class="stop">
                <h3 class="stop__name">{{ stop.StopName.Zh_tw }}</h3>
                <p
                  class="stop__status status-msg"
                  :class="{'status-msg--close' : statusStyleCheck(stop) === 0,
                           'status-msg--active' : statusStyleCheck(stop) === 1,
                           'status-msg--not-yet' : statusStyleCheck(stop) === 2,
                           'status-msg--last' : statusStyleCheck(stop) === 3,
                           'status-msg--traffic' : statusStyleCheck(stop) === 4,
                           'status-msg--driving' : statusStyleCheck(stop) === 5}">{{ statusMessage(stop) }}</p>
                <span v-if="statusStyleCheck(stop) === 1 &&  checkAccessibility" :key="index" class="stop__icon"><i class="fas fa-wheelchair"></i></span>
                <p v-if="statusStyleCheck(stop) === 1" :key="index" class="stop__plateNumb">{{ stop.PlateNumb }}</p>
                <span class="stop__dot" :class="{'stop__dot--on': statusStyleCheck(stop) === 1}"></span>
              </section>
            </template>
          </div>
        </div>
        <!-- 返程 -->
        <div v-if="!direction && !isShowMap" :key="2">
          <p class="update-msg text-color-blue">*於 {{ timer }} 秒後自動更新</p>
          <div class="stops">
            <template v-for="(stop, index) in backDistanceData" :key="index">
              <section class="stop">
                <h3 class="stop__name">{{ stop.StopName.Zh_tw }}</h3>
                <p
                  class="stop__status status-msg"
                  :class="{'status-msg--close' : statusStyleCheck(stop) === 0,
                           'status-msg--active' : statusStyleCheck(stop) === 1,
                           'status-msg--not-yet' : statusStyleCheck(stop) === 2,
                           'status-msg--last' : statusStyleCheck(stop) === 3,
                           'status-msg--traffic' : statusStyleCheck(stop) === 4,
                           'status-msg--driving' : statusStyleCheck(stop) === 5}">{{ statusMessage(stop) }}</p>
                <span v-if="statusStyleCheck(stop) === 1 && checkAccessibility" :key="index" class="stop__icon"><i class="fas fa-wheelchair"></i></span>
                <p v-if="statusStyleCheck(stop) === 1" :key="index" class="stop__plateNumb">{{ stop.PlateNumb }}</p>
                <span class="stop__dot" :class="{'stop__dot--on': statusStyleCheck(stop) === 1}"></span>
              </section>
            </template>
          </div>
        </div>
      </div>
    </main>
    <!-- loading -->
    <loading
      :active="loader.isLoading"
      :loader="loader.style"
      :color="loader.color"
      :opacity="loader.opacity"
      :background-color="loader.background"
      :blur="loader.blur"
      :is-full-page="loader.fullPage"/>
  </div>
</template>

<script>
import router from '../router'
import GetAuthorizationHeader from '../lib/Authorization.js'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import L from 'leaflet'
let openStreetMap = {}
export default {
  name: 'EstimatedTimeOfArrival',
  emits: ['backToSearchPage'],
  data () {
    return {
      loader: {
        style: 'dots',
        color: '#1cc8ee',
        background: '#fff',
        opacity: 0.08,
        blur: null,
        isLoading: false,
        fullPage: true
      },
      map: {
        center: {
          lat: '',
          lon: ''
        },
        zoom: 15
      },
      isShowMap: false,
      isMapInit: false,
      direction: 1,
      timer: 30,
      timerID: '',
      isClickable: true,
      goDistanceData: [],
      backDistanceData: [],
      stopRouteData: [],
      routeName: '',
      departureStop: '',
      destinationStop: '',
      goDistanceVehicleData: [],
      backDistancevehicleData: []
    }
  },
  components: {
    Loading
  },
  methods: {
    // 取得去程資料
    async fetchGoDistanceData (city, routeUID) {
      // 送出請求
      const data = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${city}?$filter=RouteUID%20eq%20'${routeUID}'%20and%20Direction%20eq%200&$orderby=StopSequence&$format=JSON`, { headers: GetAuthorizationHeader() })
      // 解析資料
      const json = await data.json()
      // 回傳解析完成的資料
      return json
    },
    // 取得返程資料
    async fetchBackDistanceData (city, routeUID) {
      // 送出請求
      const data = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${city}?$filter=RouteUID%20eq%20'${routeUID}'%20and%20Direction%20eq%201&$orderby=StopSequence&$format=JSON`, { headers: GetAuthorizationHeader() })
      // 解析資料
      const json = await data.json()
      // 回傳解析完成的資料
      return json
    },
    // 取得路線資料
    async fetchStopRouteData (city, routeUID) {
      // 送出請求
      const data = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/${city}?$filter=RouteUID%20eq%20'${routeUID}'&$format=JSON`, { headers: GetAuthorizationHeader() })
      // 解析資料
      const json = await data.json()
      // 回傳解析完成的資料
      return json
    },
    // 設定狀態文字
    statusMessage (data) {
      switch (data.StopStatus) {
        // 正常
        case 0:
          // 預估時間為 0 時
          if (data.EstimateTime === 0) {
            return '進站中'
            // 預估時間小於等於三分鐘時
          } else if (Math.ceil(data.EstimateTime / 60) <= 2) {
            return '即將進站'
            // 大於三分鐘，回傳預估時間
          } else {
            return Math.ceil(data.EstimateTime / 60) + '分'
          }
        // 尚未發車
        case 1:
          // 檢查資料是否有 nextTime 或 NextBusTime
          if (data.nextTime) {
            // 建立時間物件
            const nextTime = new Date(data.nextTime)
            // 取得小時數
            const hours = nextTime.getHours()
            // 取得分鐘數
            const minutes = nextTime.getMinutes()
            // 回傳時間訊息
            return String(hours) + ':' + (minutes < 10 ? '0' + minutes : String(minutes))
          } else if (data.NextBusTime) {
            // 建立時間物件
            const nextTime = new Date(data.NextBusTime)
            // 取得小時數
            const hours = nextTime.getHours()
            // 取得分鐘數
            const minutes = nextTime.getMinutes()
            // 回傳時間訊息
            return String(hours) + ':' + (minutes < 10 ? '0' + minutes : String(minutes))
          } else {
            return '尚未發車'
          }
        // 交管不停靠
        case 2:
          return '交管不停'
        // 末班車已過
        case 3:
          return '末班駛離'
        // 今日未營運
        case 4:
          return '未營運'
      }
    },
    // 設定狀態樣式
    statusStyleCheck (data) {
      switch (data.StopStatus) {
        // 回傳值代碼
        // 0：未營運
        // 1：進站中 / 即將進站
        // 2：尚未發車
        // 3：末班車已過
        // 4：交管不停靠
        // 5：顯示時間
        // 狀態：正常
        case 0:
          // 預估時間小於等於兩分鐘時
          if (Math.ceil(data.EstimateTime / 60) <= 2) {
            return 1
          } else {
            return 5
          }
        // 狀態：尚未發車
        case 1:
          // 存在下一班公車的時間資料
          if (data.nextTime || data.NextBusTime) {
            return 5
          } else {
            return 2
          }
        // 狀態：交管不停靠
        case 2:
          return 4
        // 狀態：末班車已過
        case 3:
          return 3
        // 狀態：今日未營運
        case 4:
          return 0
      }
    },
    checkAccessibility (data) {
      // 根據車牌前後綴做檢查（僅限桃園、台中、高雄）
      if (/FT|FV|FR|FZ|FX|FY|FW|U5|U6|U7|U8|U9|V3|FAG|FAD|FAE|EAL|EAA|KKA/.test(data.PlateNumb)) {
        return 1
      } else {
        return 0
      }
    },
    // 設置倒數計時器
    setAutoReLoading () {
      // 每 1 秒執行一次
      this.timerID = window.setInterval(async () => {
        this.timer -= 1
        if (this.timer === 0) {
          // 顯示 loading 畫面
          this.loader.isLoading = true
          // 利用路由參數發送請求（去程資料）
          this.goDistanceData = await this.fetchGoDistanceData(this.$route.params.City, this.$route.params.RouteUID)
          // 利用路由參數發送請求（返程資料）
          this.backDistanceData = await this.fetchBackDistanceData(this.$route.params.City, this.$route.params.RouteUID)
          // 關閉 loading 畫面
          this.loader.isLoading = false
          // 重新設定秒數
          this.timer = 30
        }
      }, 1000)
    },
    // 重新整理功能
    async reLoading () {
      // 避免連續點擊
      if (this.isClickable) {
        // 禁用按鈕
        this.isClickable = false
        // 顯示 loading 畫面
        this.loader.isLoading = true
        // 利用路由參數發送請求（去程資料）
        this.goDistanceData = await this.fetchGoDistanceData(this.$route.params.City, this.$route.params.RouteUID)
        // 利用路由參數發送請求（返程資料）
        this.backDistanceData = await this.fetchBackDistanceData(this.$route.params.City, this.$route.params.RouteUID)
        // 關閉 loading 畫面
        this.loader.isLoading = false
        // 重新設定秒數
        this.timer = 30
        // 5 秒後進行按鈕初始化
        window.setTimeout(() => {
          this.isClickable = true
        }, 5000)
      } else {
        console.log('還不可以點擊...')
      }
    },
    toggleMap () {
      // 顯示地圖
      this.isShowMap = !this.isShowMap
      // 如果還沒初始化，進行地圖初始化
      if (!this.isMapInit) {
        // 等待 DOM 渲染完後才執行的動作
        this.$nextTick(() => {
          // 繪製地圖
          openStreetMap = L.map('map', {
            // 設定中心點
            center: [this.map.center.lat, this.map.center.lon],
            // 縮放比例
            zoom: this.map.zoom
          })
          // 設定圖資來源
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 20
          }).addTo(openStreetMap)
          // 指標（起始站）
          L.circleMarker([this.stopRouteData[0].Stops[0].StopPosition.PositionLat, this.stopRouteData[0].Stops[0].StopPosition.PositionLon], {
            radius: 15,
            color: '#B91646',
            className: 'custom-marker'
          }).addTo(openStreetMap).bindPopup(`<p style="font-size: 18px;">起始站：${this.stopRouteData[0].Stops[0].StopName.Zh_tw}</p>`)
          // 繪製出每個站牌的 Marker
          this.stopRouteData[0].Stops.forEach((item, index) => {
            if (index !== 0) {
              L.marker([
                item.StopPosition.PositionLat,
                item.StopPosition.PositionLon
              ]).addTo(openStreetMap).bindPopup(`
              <p style="font-size: 18px;">${item.StopName.Zh_tw}</p>
              `)
            }
          })
          // 繪製路線（暫存陣列）
          const tempArray = []
          this.stopRouteData[0].Stops.forEach((item) => {
            tempArray.push([item.StopPosition.PositionLat, item.StopPosition.PositionLon])
          })
          L.polyline([tempArray], {
            color: '#B91646',
            weight: 5
          }).addTo(openStreetMap)
          // 更新狀態（已進行初始化）
          this.isMapInit = true
        })
      }
    },
    // 重新導向
    backToPrevious () {
      // 回上一頁
      router.back()
    }
  },
  async created () {
    // 顯示 loading 畫面
    this.loader.isLoading = true
    // 利用路由參數發送請求（去程資料）
    this.goDistanceData = await this.fetchGoDistanceData(this.$route.params.City, this.$route.params.RouteUID)
    // 利用路由參數發送請求（返程資料）
    this.backDistanceData = await this.fetchBackDistanceData(this.$route.params.City, this.$route.params.RouteUID)
    // 利用路由參數發送請求（路線資料）
    this.stopRouteData = await this.fetchStopRouteData(this.$route.params.City, this.$route.params.RouteUID)
    // 儲存站牌名稱
    this.routeName = this.goDistanceData[0].RouteName.Zh_tw
    // 儲存起點站牌名稱
    this.departureStop = this.goDistanceData[0].StopName.Zh_tw
    // 儲存終點站牌名稱
    this.destinationStop = this.goDistanceData[this.goDistanceData.length - 1].StopName.Zh_tw
    // 設置中心點（預設值：該路線的起始站經緯度）
    this.map.center.lat = this.stopRouteData[0].Stops[0].StopPosition.PositionLat
    this.map.center.lon = this.stopRouteData[0].Stops[0].StopPosition.PositionLon
    // 啟動自動更新
    this.setAutoReLoading()
    // 關閉 loading 畫面
    this.loader.isLoading = false
    // ==== 查詢公車的車種（是否為無障礙的車子？）未完成 ====
    // // 查詢車種資料（去程）
    // this.goDistanceData.forEach((item) => {
    //   // console.log('去程車牌資料：', item.PlateNumb)
    //   // 沒有資料的話，在陣列中 push 0
    //   if (item.PlateNumb === '' || item.PlateNumb === undefined) {
    //     // console.log('沒有資料的數量（去程）')
    //     this.goDistancevehicleData.push(0)
    //   // 有資料的話，發送請求查詢車輛資訊
    //   } else {
    //     fetch(`https://ptx.transportdata.tw/MOTC/v2/Bus/Vehicle/City/${this.$route.params.City}?$filter=PlateNumb%20eq%20'${item.PlateNumb}'&$format=JSON`)
    //       .then((response) => response.json())
    //       .then((data) => {
    //         // 是否為無障礙車種
    //         if (data[0].VehicleType === 1) {
    //           // 是的話，在陣列中 push 1
    //           this.goDistancevehicleData.push(1)
    //         } else {
    //           // 不是的話，在陣列中 push 0
    //           this.goDistancevehicleData.push(0)
    //         }
    //       })
    //   }
    // })
    // // 查詢車種資料（返程）
    // this.asyncForEach(this.backDistanceData, (item, index) => {
    //   console.log(`第${index}筆資料的車牌資料：${item.PlateNumb}`)
    //   // 沒有資料的話，在陣列中 push 0
    //   if (item.PlateNumb === '' || item.PlateNumb === undefined) {
    //     console.log(`第${index}筆資料的車牌為空字串或不存在，資料值為：${item.PlateNumb}，準備在陣列推入 0 `)
    //     this.backDistancevehicleData.push(0)
    //     console.log('推入完畢')
    //   } else {
    //     console.log(`第${index}筆資料的車牌存在，準備發送請求`)
    //     fetch(`https://ptx.transportdata.tw/MOTC/v2/Bus/Vehicle/City/${this.$route.params.City}?$filter=PlateNumb%20eq%20'${item.PlateNumb}'&$format=JSON`)
    //       .then((response) => response.json())
    //       .then((json) => {
    //         console.log(`完成取得第${index}筆資料的請求，準備進行檢測`)
    //         console.log('取得的資料為：')
    //         console.log(json)
    //         // 是否為無障礙車種
    //         if (json[0].VehicleType === 1) {
    //           console.log(`第${index}筆資料的車種為：${json[0].VehicleType}，標註為無障礙`)
    //           // 是的話，在陣列中 push 1
    //           this.backDistancevehicleData.push(1)
    //           // 不是的話，在陣列中 push 0
    //         } else {
    //           this.backDistancevehicleData.push(0)
    //         }
    //       })
    //   }
    // })
  },
  beforeRouteLeave (to, from, next) {
    // 清除計數器
    window.clearInterval(this.timerID)
    // 觸發父層事件
    this.$emit('backToSearchPage')
    // 上面的事情都做完後，才進行頁面跳轉
    next()
  }
}
</script>
