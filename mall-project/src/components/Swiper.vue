<template>
  <div class="swiper">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="slide in slides" :key="slide.goodsId">
        <img v-lazy="slide.image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: ['slides'],
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
</style>
