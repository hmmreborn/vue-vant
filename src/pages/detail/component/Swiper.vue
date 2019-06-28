<template>
  <div class="swiper-box">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in galleryImgs" :key="index">
        <img :src="image" class="swipe-img" @click="swipeImgClick(index)"/>
      </van-swipe-item>
    </van-swipe>
    <van-image-preview
      v-model="show"
      :images="galleryImgs"
      @change="onChange"
    >
    </van-image-preview>
  </div>
</template>

<script>
import {ImagePreview} from 'vant'
export default {
  name: 'DetailSwiper',
  props: {
    galleryImgs: Array
  },
  data () {
    return {
      show: false,
      index: 0
    }
  },

  methods: {
    onChange (index) {
      this.index = index
    },
    swipeImgClick (index) {
      console.log(index)
      ImagePreview(this.galleryImgs)
    }
  }
}
</script>

<style scoped lang="scss">
.swipe-img{
  width: 100%;
}
</style>
