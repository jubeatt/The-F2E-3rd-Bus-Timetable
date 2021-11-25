<template>
  <h1>測試Navigator</h1>
  <button @click="getPosition">取得座標</button>
</template>

<script>
export default {
  name: 'Navigator',
  methods: {
    async getPosition () {
      if (navigator.geolocation) {
        console.log('存在')
        await navigator.geolocation.getCurrentPosition((position) => {
          alert('顯示資料')
          console.log('成功取得資料')
          console.log('緯度：', position.coords.latitude)
          console.log('經度：', position.coords.longitude)
        })
      } else {
        alert('Sorry, 你的瀏覽器不支援定位功能')
      }
    }
  },
  created () {
    const success = (position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      console.log(latitude)
      console.log(longitude)
    }
    const error = (err) => {
      console.log(err)
    }
    // This will open permission popup
    navigator.geolocation.getCurrentPosition(success, error)
  }
}
</script>
