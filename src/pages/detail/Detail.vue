<template>
    <div>
      <detail-header></detail-header>
      <detail-swiper :galleryImgs="galleryImgs"></detail-swiper>
      <detail-goods :sightName="sightName" :price="price"></detail-goods>
    </div>
</template>

<script>
import DetailHeader from './component/Header'
import DetailSwiper from './component/Swiper'
import DetailGoods from './component/Goods'
import api from '../../api'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailSwiper,
    DetailGoods
  },
  data () {
    return {
      galleryImgs: [],
      sightName: '',
      price: '',
      id: 0
    }
  },
  methods: {
    getDetailInfo: function () {
      api.get('detail', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data.detail[this.id]
        this.galleryImgs = data.galleryImgs
        this.sightName = data.sightName
        const formatPrice = data.price
        const newPrice = (formatPrice / 100).toFixed(2)
        this.price = newPrice
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  activated () {
    if (this.id !== this.$route.params.id) {
      this.id = this.$route.params.id
      this.getDetailInfo()
    }
  }
}
</script>

<style scoped lang="scss">

</style>
