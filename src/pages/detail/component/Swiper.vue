<template>
  <div class="swiper-box">
    <div class="swiper-ctx">
      <van-swipe>
        <van-swipe-item v-for="(image, index) in galleryImgs" :key="index">
          <img :src="image" class="swipe-img"/>
        </van-swipe-item>
        <div class="custom-indicator" slot="indicator" @click="componentCall">{{ current + 1 }}/{{galleryImgs.length}}</div>
      </van-swipe>
    </div>
    <fade-animation>
      <van-image-preview
        v-model="show"
        :images="galleryImgs"
      >
      </van-image-preview>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from '../../common/gallery/Gallery'
import FadeAnimation from '../../common/fade/Fade'
export default {
  name: 'DetailSwiper',
  props: {
    galleryImgs: Array
  },
  data () {
    return {
      current: 0,
      show: false
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
  },
  methods: {
    componentCall () {
      this.show = true
    }
  }
}
</script>

<style scoped lang="scss">
.swiper-ctx{
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}
.swipe-img{
  width: 100%;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  color: #fff;
  font-size: 12px;
  background: rgba(0, 0, 0, .1);
}
</style>
