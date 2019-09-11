<template>
  <div>
    <search-bar></search-bar>
    <swiper></swiper>
  </div>
</template>

<script>
  import searchBar from './SearchBar'
  import swiper from './swiper'
  export default {
    name: 'ShoppingMall',
    data() {
      return {
        message: 'vant'
      }
    },
    components: {
      searchBar,
      swiper
    },
    methods: {
      getSourceData() {}
    }
  }
</script>

<style scoped>

</style>