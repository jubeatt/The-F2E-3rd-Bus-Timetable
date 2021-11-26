<template>
  <h1>測試Navigator</h1>
</template>

<script>
export default {
  name: 'Navigator',
  created () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
      }, (error) => {
        alert(`很抱歉，發生了一點錯誤。以下是錯誤訊息：\nERROR(${error.code}): ${error.message}`)
      })
    } else {
      alert('很抱歉，您的瀏覽器不支援地理定位功能')
    }
  }
}
</script>
