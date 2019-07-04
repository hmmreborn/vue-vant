<template>
    <div>
      <detail-header></detail-header>
      <detail-swiper :galleryImgs="galleryImgs"></detail-swiper>
      <detail-goods></detail-goods>
    </div>
</template>

<script>
import DetailHeader from './component/Header'
import DetailSwiper from './component/Swiper'
import DetailGoods from './component/Goods'
import axios from 'axios'
export default {
  name: 'Detail',
  props: {
    id: String
  },
  components: {
    DetailHeader,
    DetailSwiper,
    DetailGoods
  },
  data () {
    return {
      galleryImgs: []
    }
  },
  methods: {
    getDetailInfo: function () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.galleryImgs = data.galleryImgs
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style scoped lang="scss">

</style>
