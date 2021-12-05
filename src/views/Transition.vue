<template>
  <h1>測試</h1>
  <button @click.prevent="isShow = !isShow">showBox</button>
  <transition>
    <div v-if="isShow" class="box"></div>
  </transition>
</template>

<script>
export default {
  name: 'Transition',
  data () {
    return {
      isShow: false
    }
  }
}
</script>

<style lang="scss">
.box {
  width: 300px;
  height: 300px;
  background-color: red;
}
// // 進場前的樣式，退場後的樣式
// .v-enter-from,
// .v-leave-to {
//   left: -300px;
// }
// // 進場後的樣式，退場前的樣式
// .v-enter-to,
// .v-leave-from {
//   left: 0px;
// }
// // 進/退場的過程
// .v-enter-active,
// .v-leave-active {
//   transition: left 1s;
// }
</style>
