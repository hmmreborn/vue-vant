<template>
  <div class="home">
    <home-swiper :list="swiperList"></home-swiper>
    <home-header></home-header>
    <home-icons :list="iconList"></home-icons>
    <home-spike :list="spikeList"></home-spike>
    <home-news :list="newsList"></home-news>
    <home-recommend :list="recommendList"></home-recommend>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './component/Header'
import HomeSwiper from './component/Swiper'
import HomeIcons from './component/Icons'
import HomeNews from './component/News'
import HomeSpike from './component/Spike'
import HomeRecommend from './component/Recommend'
import HomeFooter from './component/Footer'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeSpike,
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeNews,
    HomeRecommend,
    HomeFooter
  },
  computed: {
    ...mapState(['city'])
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      newsList: [],
      spikeList: [],
      recommendList: [],
      lastCity: ''
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
        .catch(function (error) {
          console.log(error)
        })
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.newsList = data.newsList
        this.spikeList = data.spikeList
        this.recommendList = data.recommendList
      }
    }
  },
  mounted () {
    console.log('mounted')
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
    console.log('activated')
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables";
.home{
  background-color: $bgColor;
}
</style>
