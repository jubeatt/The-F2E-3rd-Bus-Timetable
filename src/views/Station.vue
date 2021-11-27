<template>
  <h1>顯示 {{ $route.params.Station }} 站牌會經過的公車</h1>
  <p>所在縣市 {{ currentCity }}</p>
</template>

<script>
export default {
  name: 'Station',
  data () {
    return {
      message: 'test',
      stationsInfo: []
    }
  },
  props: {
    currentCity: String
  },
  async created () {
    // 取得站位資料
    console.log(this.currentCity)
    // 發送請求
    const response = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Bus/Station/City/${this.currentCity}?$filter=StationName%2FZh_tw%20eq%20%27${this.$route.params.Station}%27&$format=JSON`)
    // 解析資料
    const data = await response.json()
    console.log(data)
    // 擷取所需資料（路線名稱）
    this.stationsInfo.push({ stops: data.stops })
  }
}
</script>
