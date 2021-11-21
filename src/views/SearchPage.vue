<template>
  <ul>
    <li v-for="(city, index) in cities" :key="index">
      <router-link :to="`/ResultPage/${city}/${routeName}`">前往 {{ city + ' 和 ' + routeName}} 的搜尋結果</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      cities: [
        'Taipei',
        'NewTaipei',
        'Taoyuan',
        'Taichung',
        'Tainan',
        'Kaohsiung'
      ],
      routeName: '紅10'
    }
  }
}
</script>
