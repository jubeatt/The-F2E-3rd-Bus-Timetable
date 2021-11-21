<template>
  <!-- 取出動態產生的路由值 -->
  <h1>UserID: {{ $route.params.userId }}</h1>
  <pre>{{ userInfo }}</pre>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  computed: {
    userId () {
      // 假設網址是 user/1，$route.params.userId的值就是 1
      return this.$route.params.userId
    }
  },
  watch: {
    // 當 userId 改變時，執行這個 function
    // watch 會帶入兩個參數，第一個是更新後的值，第二個是更新前的值
    userId: async function (val) {
      console.log('userId 發生變更')
      // 根據值來發出 request，並將資料寫入實體的 data
      this.userInfo = await this.fetchUserInfo(val)
    }
  },
  methods: {
    async fetchUserInfo (id) {
      return await fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then((response) => response.json())
        .then((json) => json)
    }
  },
  async created () {
    // 實體建立完成時，用 computed 的 userId 去發送請求，並將資料寫入實體 data
    this.userInfo = await this.fetchUserInfo(this.userId)
  }
}
</script>
