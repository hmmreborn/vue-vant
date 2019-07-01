<template>
  <div class="top-search">
    <div class="header-nav">
      <van-row class="row-1">
        <van-col span="3" class="cols text-center">
          <van-icon name="scan" size="1.5em" class="class-qr" color="#fff" @click="redirects('/list')"/>
        </van-col>
        <van-col span="18" class="cols">
          <div style="position: relative">
            <router-link to="/city" class="city" tag="div">{{this.city}}</router-link>
            <van-search  placeholder="请输入搜索关键词" v-model="value" shape="round"/>
          </div>
        </van-col>
        <van-col span="3" class="cols text-center">
          <van-icon name="qr" size="1.5em" class="class-qr" color="#fff"/>
        </van-col>
      </van-row>
    </div>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  },
  data () {
    return {
      value: '',
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    redirects (url) {
      this.$router.push(url)
    },
    handleScroll () {
      const top = document.scrollingElement.scrollTop
      if (top > 44) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/styles/minxins";
.city{
  position: absolute;
  top: 12px;
  left: 14px;
  max-width: 30px;
  padding-right: 8px;
  font-size: .875rem;
  color: #666;
  border-right: 1px solid #ccc;
  @include ellipsis
}
.van-search__content{
  padding-left: 3.7rem;
}
.top-search{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  .van-search{
    background: transparent !important;
    padding: .3125em 0;
  }
}
.class-qr {
  padding: .625rem 0
}
.text-center{
  text-align: center;
}
.header-nav{
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.header-fixed{
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height:44px;
  line-height:44px;
  background: #e43130
}
</style>
