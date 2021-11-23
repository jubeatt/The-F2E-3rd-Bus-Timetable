<template>
  <button @click="$emit('backToPrevious')">返回上一頁</button>
  <h1>我是{{ $route.params.City }} {{ $route.params.RouteName}} 的動態消息頁面</h1>
</template>

<script>
export default {
  name: 'Detail'
}
</script>
