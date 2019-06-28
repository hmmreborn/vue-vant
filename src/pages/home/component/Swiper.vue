<template>
  <div class="swiper-box">
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in list" :key="slide.id">
        <img class="swiper-img" :src="slide.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>
<style>
.swiper-box .swiper-pagination-bullet-active{
  background: #fff
}
</style>
<style scoped lang="scss">
.swiper-box{
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 48.8%;
  .swiper-img{
    width: 100%;
  }

}
</style>
