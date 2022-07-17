<template>
  <transition name="slide">
    <!-- 切換主題面板 -->
    <form v-if="isShowPannel" class="theme-select-box">
      <label class="radio">
        <input class="radio__input" type="radio" v-model="theme" value="1" />
        <span class="radio__text">主題一</span>
      </label>
      <label class="radio">
        <input class="radio__input" type="radio" v-model="theme" value="2" />
        <span class="radio__text">主題二</span>
      </label>
      <label class="radio">
        <input class="radio__input" type="radio" v-model="theme" value="3" />
        <span class="radio__text">主題三</span>
      </label>
      <label class="radio">
        <input class="radio__input" type="radio" v-model="theme" value="4" />
        <span class="radio__text">主題四</span>
      </label>
      <label class="radio">
        <input class="radio__input" type="radio" v-model="theme" value="5" />
        <span class="radio__text">主題五</span>
      </label>
      <label class="radio">
        <input class="radio__input" type="radio" v-model="theme" value="6" />
        <span class="radio__text">主題六</span>
      </label>
    </form>
  </transition>
  <!-- 主題面板開關按鈕 -->
  <transition name="fade-effect">
    <button v-if="!isShowPannel" @click.prevent="togglePannel" class="button-switch">
      <i class="fas fa-sliders-h"></i>
    </button>
  </transition>
  <!-- 導覽列選單 -->
  <main class="main" @click="closePannel">
    <h1 class="hide">全台公車動態時刻查詢應用服務</h1>
    <div class="logo">
      <MainLogo />
    </div>

    <nav>
      <ul>
        <li class="nav-nearby-station nav-item scale">
          <div class="circle circle--large circle--main">
            <div class="circle__bg"></div>
            <router-link class="circle__inner" to="/Search-Nearby-Stations">
              <div class="nav-item__content">
                <i class="nav-item__icon fas fa-map-marker-alt"></i>
                <p>附近公車站牌</p>
              </div>
            </router-link>
          </div>
        </li>
        <li class="nav-search-local-bus nav-item scale">
          <div class="circle circle--small circle--gray">
            <div class="circle__bg"></div>
            <router-link class="circle__inner" to="/Search-LocalBus">
              <div class="nav-item__content nav-item__content--left-side">
                <i class="nav-item__icon fas fa-search"></i>
                <p>查詢公車</p>
              </div>
            </router-link>
          </div>
        </li>
        <li class="nav-search-global-bus nav-item scale">
          <div class="circle circle--medium circle--yellow">
            <div class="circle__bg"></div>
            <router-link class="circle__inner" to="/Search-GlobalBus">
              <div class="nav-item__content nav-item__content--right-side">
                <i class="nav-item__icon fas fa-search"></i>
                <p>查詢客運</p>
              </div>
            </router-link>
          </div>
        </li>
      </ul>
    </nav>

    <span class="bubble-1"></span>
    <span class="bubble-2"></span>
    <span class="bubble-3"></span>
    <span class="bubble-4"></span>
    <span class="bubble-5"></span>
    <span class="bubble-6"></span>
  </main>
  <!-- 頁尾 -->
  <footer class="copyright">
    Taiwan Bus © Code:
    <a href="https://github.com/jubeatt/" target="_blank">PeaNu</a> / Design:
    <a href="https://www.behance.net/KT_Designer" target="_blank">KT</a>
  </footer>
</template>

<script>
import { MainLogo } from '../icons'

// 取得 <html>
const html = document.getElementsByTagName('html')[0]
export default {
  name: 'Home',
  data() {
    return {
      isShowPannel: false,
      theme: '1'
    }
  },
  components: { MainLogo },
  methods: {
    togglePannel() {
      // 收合主題設定面板
      this.isShowPannel = !this.isShowPannel
    },
    closePannel() {
      // 關閉主題設定面板
      this.isShowPannel = false
    }
  },
  watch: {
    theme: function (val) {
      switch (val) {
        case '1':
          // 設定 html 標籤的 class
          html.setAttribute('class', 'theme-1')
          break
        case '2':
          // 設定 html 標籤的 class
          html.setAttribute('class', 'theme-2')
          break
        case '3':
          // 設定 html 標籤的 class
          html.setAttribute('class', 'theme-3')
          break
        case '4':
          // 設定 html 標籤的 class
          html.setAttribute('class', 'theme-4')
          break
        case '5':
          // 設定 html 標籤的 class
          html.setAttribute('class', 'theme-5')
          break
        case '6':
          // 設定 html 標籤的 class
          html.setAttribute('class', 'theme-6')
          break
      }
    }
  }
}
</script>
