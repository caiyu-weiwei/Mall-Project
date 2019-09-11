<template>
  <div>
    <search-bar></search-bar>
    <swiper :slides="slides"></swiper>
  </div>
</template>

<script>
import axios from 'axios'
import URL from '@/serviceAPI.config'
import searchBar from './SearchBar'
import swiper from './swiper'
export default {
  name: 'ShoppingMall',
  data () {
    return {
      slides: []
    }
  },
  components: {
    searchBar,
    swiper
  },
  created () {
    this.getSourceData()
  },
  methods: {
    getSourceData () {
      axios({
        url: URL.shoppingMallUrl,
        method: 'get'
      })
        .then(res => {
          console.log('sourceData res', res)
          const { data, status } = res
          if (status === 200) {
            this.slides = data.data.slides
          } 
        })
    }
  }
}
</script>

<style scoped>

</style>
