<template>
  <div v-if="isOnSearching" class="search-local-bus">
    <div class="container">
      <!-- 側邊攔 -->
      <div class="sidebar container__sidebar">
        <header class="search-bar sidebar__search-bar">
          <router-link to="/" class="link">
            <PageLogo />
          </router-link>
          <form class="search-bar__input">
            <input
              class="input"
              type="text"
              placeholder="選擇路線或手動輸入關鍵字"
              v-model="userInput"
              ref="input"
              @keypress.enter.prevent=""
            />
          </form>
        </header>
        <!-- 輸入面板 -->
        <div v-if="panel.isShow" class="sidebar__pannel">
          <!-- main keys -->
          <div v-if="panel.type.isMain" class="main-board">
            <button @click="togglePanel('isCity', true)" class="button">
              <i class="icon-position fas fa-map-marker-alt"></i>選擇縣市
            </button>
            <button @click="focusOnInput" class="button text-color-main">手動輸入</button>
            <button @click="panel.isShow = false" class="button">
              <i class="fas fa-chevron-down"></i>
            </button>
            <button @click="userInput = '紅'" class="button text-color-main">紅</button>
            <button @click="userInput = '藍'" class="button text-color-main">藍</button>
            <button @click="userInput += '1'" class="button">1</button>
            <button @click="userInput += '2'" class="button">2</button>
            <button @click="userInput += '3'" class="button">3</button>
            <button @click="userInput = '綠'" class="button text-color-main">綠</button>
            <button @click="userInput = '棕'" class="button text-color-main">棕</button>
            <button @click="userInput += '4'" class="button">4</button>
            <button @click="userInput += '5'" class="button">5</button>
            <button @click="userInput += '6'" class="button">6</button>
            <button @click="userInput = '橘'" class="button text-color-main">橘</button>
            <button @click="userInput = '小'" class="button text-color-main">小</button>
            <button @click="userInput += '7'" class="button">7</button>
            <button @click="userInput += '8'" class="button">8</button>
            <button @click="userInput += '9'" class="button">9</button>
            <button @click="userInput = '幹線'" class="button text-color-main">幹線</button>
            <button @click="togglePanel('isMore', true)" class="button text-color-main">
              更多
            </button>
            <button @click="userInput = ''" class="button text-color-main">C</button>
            <button @click="userInput += '0'" class="button">0</button>
            <button
              @click="userInput ? (userInput = userInput.slice(0, -1)) : (userInput = '')"
              class="button"
            >
              <CancelKey />
            </button>
          </div>
          <!-- city keys -->
          <form v-if="panel.type.isCity" class="form-city">
            <template :key="key.key" v-for="key in panel.city.options">
              <input
                type="radio"
                class="hide"
                v-model="selectedCity"
                :value="key.value"
                :id="key.key"
              />
              <label
                :class="{ 'button--selected': selectedCity === key.value }"
                class="button button--small-text text-color-main"
                :for="key.key"
                >{{ key.label }}</label
              >
            </template>
            <button @click.prevent="onSearchCity" class="button button--small-text text-color-main">
              設定
            </button>
          </form>
          <!-- more keys -->
          <div v-if="panel.type.isMore" class="more-board">
            <button
              class="button text-color-main"
              v-for="key in panel.more.options"
              :key="key.key"
              @click="userInput = key.value"
            >
              {{ key.label }}
            </button>
            <button @click="togglePanel('isMain', true)" class="button text-color-main">
              回上一頁
            </button>
          </div>
        </div>
        <!-- 輸入面板開關 -->
        <button
          @click="panel.isShow = true"
          v-if="!panel.isShow"
          class="button button-keyboard-switch"
        >
          <i class="fas fa-keyboard"></i>
        </button>
      </div>
      <!-- 搜尋結果 -->
      <div class="container__search-result">
        <h2 class="heading">
          <i class="icon-position fas fa-map-marker-alt"></i
          >{{ selectedCity ? cityMappingEn[selectedCity] : '尚未選擇縣市' }}
        </h2>
        <p v-if="userInput" class="mb-s">搜尋：{{ userInput }}</p>
        <p v-if="errorMessage" class="hint-text">
          <span class="icon-warn"><i class="fas fa-exclamation-triangle"></i></span
          >{{ errorMessage }}
        </p>
        <!-- routes -->
        <template v-for="route of routes" :key="route.RouteUID">
          <router-link
            :to="`/Search-LocalBus/EstimatedTimeOfArrival/${this.selectedCity}/${route.RouteUID}`"
            class="card-info"
            @click="toNextPage"
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
  <!-- 預估到站時間的頁面 -->
  <router-view
    v-if="!isOnSearching"
    @backToPreviousPage="showSearchPage"
    :key="randomKey()"
  ></router-view>
  <!-- loading -->
  <Loader :isLoading="isLoading" />
</template>

<script>
import { PageLogo, CancelKey } from '../icons'
import { cityMappingEn, cityOptions, moreOptions } from '../constants'
import { getRoutes } from '../api'
import Loader from '../components/Loader.vue'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'SearchLocalBus',
  data() {
    return {
      panel: {
        isShow: true,
        type: {
          isMain: true,
          isCity: false,
          isMore: false
        },
        city: {
          options: cityOptions
        },
        more: {
          options: moreOptions
        }
      },
      cityMappingEn,
      isLoading: false,
      isOnSearching: true,
      errorMessage: null,
      routesSrc: null,
      routes: null,
      userInput: '',
      selectedCity: ''
    }
  },
  components: {
    Loader,
    PageLogo,
    CancelKey
  },
  methods: {
    togglePanel(name, clearInput = false) {
      if (clearInput) {
        this.userInput = ''
      }
      this.panel.type.isMain = false
      this.panel.type.isCity = false
      this.panel.type.isMore = false
      this.panel.type[name] = true
    },
    focusOnInput() {
      console.log(this.$refs.input)
      this.$refs.input.focus()
    },
    async onSearchCity() {
      if (!this.selectedCity) {
        this.errorMessage = '請先輸入縣市'
        return
      }
      this.isLoading = true
      this.errorMessage = null
      try {
        this.routesSrc = await getRoutes(this.selectedCity)
        this.routes = JSON.parse(JSON.stringify(this.routesSrc))
        this.togglePanel('isMain')
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        this.errorMessage = error.message
      }
    },
    toNextPage() {
      // 隱藏搜尋頁面
      this.isOnSearching = false
    },
    showSearchPage() {
      this.isOnSearching = true
    },
    randomKey() {
      // 回傳目前時間毫秒數（自1970）
      return Date.now()
    }
  },
  watch: {
    userInput: function (val) {
      if (!this.selectedCity) {
        this.errorMessage = '請先輸入縣市'
      } else {
        this.routes = this.routesSrc.filter((r) =>
          r.RouteName.Zh_tw.toLowerCase().includes(val.toLowerCase())
        )
      }
    },
    routes: function () {
      if (this.routes.length === 0) {
        this.errorMessage = '找不到搜尋結果'
      } else {
        this.errorMessage = null
      }
    }
  }
}
</script>
