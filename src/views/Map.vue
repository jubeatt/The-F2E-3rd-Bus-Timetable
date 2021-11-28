<template>
  <button @click="draw">畫出座標</button>
  <div id="map">
    <h1>地圖</h1>
    <button @click="getData">取得資料</button>
  </div>
</template>

<script>
import GetAuthorizationHeader from '../lib/Authorization.js'
import L from 'leaflet'
let openStreetMap = {}
export default {
  name: 'Map',
  data () {
    return {
      data: [],
      routeUID: 'KHH114'
    }
  },
  methods: {
    async draw () {
      const data = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/Kaohsiung?$filter=RouteUID%20eq%20'${this.routeUID}'&$format=JSON`, { headers: GetAuthorizationHeader() })
      this.data = await data.json()
      this.data[0].Stops.forEach((item) => {
        L.marker([
          item.StopPosition.PositionLat,
          item.StopPosition.PositionLon
        ]).addTo(openStreetMap).bindPopup(`
        <p style="font-size: 20px;">205中華幹線</p>
        <p style="font-size: 16px color: #f00;">輕軌夢時代站</p>
        `)
      })
    }
  },
  async mounted () {
    openStreetMap = L.map('map', {
      center: [22.5949798, 120.3048368],
      zoom: 18
    })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 20
    }).addTo(openStreetMap)
  }
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 80vh;
  margin: auto;
  margin-top: 100px;
}
</style>
