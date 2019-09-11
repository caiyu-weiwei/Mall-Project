<template>
  <div>
    <search-bar></search-bar>
  </div>
</template>

<script>
  import searchBar from './SearchBar'
  export default {
    name: 'ShoppingMall',
    data() {
      return {
        message: 'vant'
      }
    },
    components: {
      searchBar
    },
    methods: {
      getSourceData() {}
    }
  }
</script>

<style scoped>

</style>