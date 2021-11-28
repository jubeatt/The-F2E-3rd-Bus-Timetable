# The-F2E-3rd 修練精神時光屋第三屆－Week3 全台公車動態時刻查詢應用服務

這是來自[The-F2E-3rd](https://2021.thef2e.com/)的一個挑戰。The-F2E-3rd 是由[六角學院](https://www.hexschool.com/)主辦的一項競賽，主要是要提供給工程師、設計師一個可以練習專業技術的資源。目前 The-F2E 修練精神時光屋已經舉辦了三屆，有興趣的朋友也歡迎到連結中參考看看。

## 大綱

- [總覽](#總覽)
  - [關於這份挑戰](#關於這份挑戰)
  - [螢幕截圖](#螢幕截圖)
  - [網站連結](#網站連結)
- [使用的工具](#使用的工具)
- [開發紀錄](#開發紀錄)
- [關於作者](#關於作者)
- [致謝](#致謝)
- [參考資料](#參考資料)

## 總覽

### 關於這份挑戰

這份挑戰是要製作一個台灣公車動態時刻查詢的網站，使用者應該要能夠：

- 在各種裝置上都能夠瀏覽該網站（手機、平板、電腦）
- 透過動態時刻表，來得知公車大約什麼時候到站
- 透過路線時刻表，來查看公車的路線圖

### 螢幕截圖

**🖥 桌機版：**

**📱 手機版：**

### 網站連結

- The-F2E 挑戰連結：[靜候佳音](#)
- Demo 網站連結：[這裡](https://jubeatt.github.io/The-F2E-3rd-Bus-Timetable/)

### 使用的工具

- [Vue.js (3.0)](https://v3.vuejs.org/guide/introduction.html)
- [Loading Overlay](https://www.npmjs.com/package/vue-loading-overlay)
- [TDX API](https://ptx.transportdata.tw/MOTC)
- [Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview)
- [Distance Matrix API](https://developers.google.com/maps/documentation/distance-matrix/overview)
- CSS Flex-box
- CSS Grid-box
- SCSS
- BEM
- ES6
- RWD
- AJAX

## 開發紀錄

### 2021/11/17

1. 完成首頁 UI（RWD）

### 2021/11/19

1. 完成查詢公車頁面 UI（RWD）

### 2021/11/20

1. 完成輸入面板的 UI（RWD）

### 2021/11/21

1. 完成公車路線 API 串接、過濾資料

### 2021/11/22

1. 重新規劃路由設定
2. 新增 Loading 效果
3. 部分 UI 新增、修正
4. 修正 RWD 顯示問題

### 2021/11/23

1. 再次重新規劃路由設定
2. SCSS 檔案優化（原本是一個頁面對應一支檔案、現在統一整合在 main.scss 中）
3. 完成公車動態頁面 UI（RWD）
4. 公車動態 API 資料串接（尚未完成）

### 2021/11/24

1. 處理進入公車動態頁面的 Bug
   - Bug 點：每次進入頁面時會顯示上一筆動態資料，而不是當前的動態資料。
   - 解決方式：因為公車動態頁面是透過 `v-if` 來打開或隱藏畫面，而 `v-if` 會有節能機制的問題。為了確保每一次進入時都重新渲染，必須在該元件加上 `:key` 屬性來處理。（註：每一次 key 的值都必須不同）
2. 處理顯示公車狀態的 CSS（即將到站、進站中、預估時間等）
3. 完成公車動態 API 資料串接（去程、返程）
4. 公車動態部分修正（過長文字、優化動態判定，例如「尚未發車」或「顯示下一班時間」
5. 車種辨識問題無法解決。本來想用 `forEach` 發送查詢車種的請求，但會碰到「同步 / 非同步」之間的問題。目前是使用 `regexp` 來從資料字串中來辨識是否為無障礙車種。
6. 新增每 30 秒自動更新功能

### 2021/11/25

1. 公車動態 UI 介面優化（將內容更改為固定高度，超出的部分改用滾軸呈現）
2. 新增手動重新整理功能（有避免連續點擊）
3. 搜尋附近站牌 UI 完成
4. 搜尋附近站牌 API 串接（仍在處理）

### 2021/11/24

1. 處理進入公車動態頁面的 Bug
   - Bug 點：每次進入頁面時會顯示上一筆動態資料，而不是當前的動態資料。
   - 解決方式：因為公車動態頁面是透過 `v-if` 來打開或隱藏畫面，而 `v-if` 會有節能機制的問題。為了確保每一次進入時都重新渲染，必須在該元件加上 `:key` 屬性來處理。（註：每一次 key 的值都必須不同）
2. 處理顯示公車狀態的 CSS（即將到站、進站中、預估時間等）
3. 完成公車動態頁面（去程、返程）
4. 公車動態部分修正（過長文字、優化動態判定，例如「尚未發車」或「顯示下一班時間」
5. 車種辨識問題無法解決。本來想用 `forEach` 發送查詢車種的請求，但會碰到「同步 / 非同步」之間的問題。目前是使用 `regexp` 來從資料字串中來辨識是否為無障礙車種。
6. 新增每 30 秒自動更新功能

### 2021/11/25

1. 公車動態 UI 介面優化（將內容更改為固定高度，超出的部分改用滾軸呈現）
2. 新增手動重新整理功能（有避免連續點擊）
3. 搜尋附近站牌 UI 完成
4. 搜尋附近站牌 API 串接（仍在處理）
5. 使用 `geolocation` 要注意一些安全性的問題（詳情參考[這裡](https://kknews.cc/zh-tw/tech/4qgkxq2.html)）

### 2021/11/26

1. 處理 `setInterval` 的 Bug
   - Bug 點：點擊自製的返回按鈕時，URL 會停留在原本的狀態（`/Search-LocalBus/EstimatedTimeOfArrival/:City/:RouteUID`）。正確的情況應該要顯示 `/SearchLocalBus`。
     這個問題會跟直接按下「上一頁」時發生衝突，導致倒數計數器沒辦法正確的清除。
   - 原本的思路：按下返回鈕時，清除計數器，向父層傳遞事件。
   - 新的思路：按下返回鈕時，透過 `router.push()` 導向 `/SearchLocalBus`，此舉會觸發路由鉤子中的 `beforeRouteLeave` 事件，接著在藉由該 handler 做以下處理：
     - `window.clearInterval(timerId)`清除計數器
     - 向父層傳遞事件（為了更新元件的隱藏與顯示）
     - 執行`next()`（進行跳轉）
2. 做個筆記：使用 `v-if` 的元件，都會在隱藏的時候被摧毀。不希望元件被摧毀的話，可以改用 `v-show`（原理是透過更改`display`值來顯示或隱藏）

### 2021/11/27

1. 完成定位功能、顯示附近站牌
2. 程式碼優化（使用 async / await 改寫，使程式碼更易讀）
3. 完成附近站牌的公車路線頁面及資料串接（有夠搞剛）
4. 避免掉產生重複資料的 Bug（已進行過濾）

### 2021/11/28

1. 完成附近站牌的 UI
2. 新增附近站牌與使用者所在位置的距離
3. 程式碼優化（為避免在取得距離時出錯，在請求失敗時會採用備用資料）
4. 程式碼修正（因為 Distance Matrix API 不開放跨來源請求，故目前改用兩點直線距離公式來取代）
5. 修復 favicon 未正確顯示的問題（public/index.html 中的 href 位址沒寫好）
6. 完成附近站牌的預估到站頁面
7. 使用者體驗優化（輸入面板調整。當按下紅、藍等路線時，不是直接添加到輸入框，而是整筆覆寫。）

### 2021/11/29

1. 完成地圖功能（顯示該公車的路線地圖）
2. 部分樣式微調整

## 關於作者

- Website - [PeaNu's Paradise](https://jubeatt.github.io/)
- Facebook - [個人臉書](https://www.facebook.com/profile.php?id=100003593580513)

## 致謝

...

## 參考資料

- [The New CSS Reset](https://elad.medium.com/the-new-css-reset-53f41f13282e)
- [Vue.js 簡單登入頁面路由 part1](https://yuugou727.github.io/blog/2017/11/11/vue-login-practice/)
- [Leo Lin-Vue Router](https://linwei5316.medium.com/vue-router-4c2aad1cc352)
- [Vue.js - 使用 ESLint + Prettier 整理程式碼](https://ithelp.ithome.com.tw/articles/10231505)
- [input / button elements not shrinking in a flex container](https://stackoverflow.com/questions/42421361/input-button-elements-not-shrinking-in-a-flex-container)
- [在 JavaScript 中從字串中刪除最後一個字元](https://www.delftstack.com/zh-tw/howto/javascript/remove-last-character-from-javascript/)
- [colorhunt](https://colorhunt.co/palettes/popular)
- [Vue.js 操作或取得 DOM 的資訊-refs 用法](https://tools.wingzero.tw/article/sn/97)
- [Vue Loading Overlay Component](https://www.npmjs.com/package/vue-loading-overlay)
- [Using the Vue loading overlay plugin in your Vue apps](https://blog.logrocket.com/using-the-vue-loading-overlay-plugin-in-your-vue-apps/)
- [Router 基本入門 Day 9](https://ithelp.ithome.com.tw/articles/10223518)
- [emits 选项](https://v3.cn.vuejs.org/guide/migration/emits-option.html#_2-x-%E7%9A%84%E8%A1%8C%E4%B8%BA)
- [why component is not destroyed under v-if](https://stackoverflow.com/questions/53085722/why-component-is-not-destroyed-under-v-if/53085867)
- [遇到 async，別用 forEach](https://medium.com/@steven234/%E9%81%87%E5%88%B0-async-%E5%88%A5%E7%94%A8-foreach-7cea84f4242f)
- [使用 HTML5 地理位置定位到城市的方法及注意事項](https://kknews.cc/zh-tw/tech/4qgkxq2.html)
- [談談 JavaScript 的 setTimeout 與 setInterval](https://kuro.tw/posts/2019/02/23/%E8%AB%87%E8%AB%87-JavaScript-%E7%9A%84-setTimeout-%E8%88%87-setInterval/)
- [在 vue 中使用 setTimeout 與 setInterval](https://medium.com/%E5%86%8D%E4%B8%8D%E5%AF%AB%E5%B0%B1%E8%A6%81%E5%BF%98%E4%BA%86/%E5%9C%A8vue%E4%B8%AD%E4%BD%BF%E7%94%A8settimeout%E8%88%87setinterval-5b760e05ee2f)
- [經緯度查完整地理資訊 - Opencube - 開放資料平台](https://opencube.tw/location)
- [教學－如何使用 JavaScript Promise 簡化非同步流程](https://shubo.io/javascript-promise/)
- [Google Maps API 學習筆記 – 5：抓目前位置、計算到各點距離](https://www.letswrite.tw/google-map-api-distance-matrix/)
- [開發時的跨網域存取 - proxy-devServer](https://book.vue.tw/CH3/3-3-vue-dev-server-build.html#%E9%96%8B%E7%99%BC%E6%99%82%E7%9A%84%E8%B7%A8%E7%B6%B2%E5%9F%9F%E5%AD%98%E5%8F%96-proxy-devserver)
- [Vue Axios 開發環境、生產環境跨域問題解決](https://www.uj5u.com/qita/1309.html)
- [使用 javascript 計算兩個經緯度間的距離](https://tools.wingzero.tw/article/sn/72)
- [解決 Vue-cli 打包後，無法顯示 Favicon 的問題](https://smlpoints.com/notes-vue-cli-no-favicon-after-doing-webpack.html)
