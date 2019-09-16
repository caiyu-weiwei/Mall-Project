<template>
  <div>
    <search-bar></search-bar>
    <swiper :slides="slides" class="swipe-area"></swiper>
  </div>
</template>

<script>
import axios from 'axios'
import URL from '@/serviceAPI.config'
import searchBar from '@/components/SearchBar'
import swiper from '@/components/swiper'
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
        .catch(err => {
          console.log('catch err', err)
        })
    }
  }
}
</script>

<style scoped>
.swipe-area{
  clear: both;
  max-height: 11rem;
  overflow: hidden;
}
</style>
