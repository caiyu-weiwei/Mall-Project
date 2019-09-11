<template>
  <div class="search-bar">
    <van-row>
      <van-col span="3">
        <img class="search-icon" :src="searchIcon">
      </van-col>
      <van-col span="16">
        <input type="text" class="search-input">
      </van-col>
      <van-col span="5">
        <van-button class="search-button">查找</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchIcon: require('../assets/images/search.png')
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
.search-bar{
  height: 2.2rem;
  line-height: 2.2rem;
  background-color: #e5017d;
}
.search-icon{
  width: 50%;
  margin: .6rem 0 0 .5rem;
}
.search-input{
  height: 1.3rem;
  border: 0;
  background-color: #e5017d;
  color: #fff;
  border-bottom: 1px solid #ccc;
}
.search-button{
  height: 1.3rem;
  line-height: 1.3rem;
  background-color: #CDCACC;
  border-radius: .3rem;
  border: 1px solid #CDCACC;
}
</style>