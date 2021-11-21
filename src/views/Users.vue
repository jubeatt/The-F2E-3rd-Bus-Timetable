<template>
  <h1>Users頁面</h1>
  <ul>
    <li v-for="i in 5" :key="i">
      <router-link :to="`/users/${i}`"> 在下面顯示 /users/{{ i }} 的資料</router-link>
    </li>
  </ul>
  <button @click="toggleTestUser">顯示測試用User</button>

  <!-- 顯示 users/i -->
  <router-view></router-view>
  <router-view v-if="DirectionA" name="Test"></router-view>
</template>

<script>
export default {
  data () {
    return {
      DirectionA: true
    }
  },
  methods: {
    toggleTestUser () {
      if (this.DirectionA) {
        this.DirectionA = !this.DirectionA
      } else {
        this.DirectionA = !this.DirectionA
      }
    }
  }
}
</script>
