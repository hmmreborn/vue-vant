<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item of hotCities"
               :key="item.id"
               @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item, key) of cities"
           :key="key"
           :ref="key"
      >
        <div class="title">{{key}}</div>
        <div class="item-list">
          <div class="item  border-bottom"
               v-for="innerItem of item"
               :key="innerItem.id"
               @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      this.CHANGECITY(city)
      this.$router.push('/')
    },
    ...mapMutations(['CHANGECITY'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style scoped lang="scss">
.border-topbottom{
  &:before{border-color: #eee}
  &:after{border-color: #eee}
}
.list{
  overflow: hidden;
  position: absolute;
  top: 6.25rem;
  left: 0;
  right: 0;
  bottom: 0;
  .button-list{
    overflow: hidden;
    padding: .1rem .6rem .1rem .1rem;
    .button-wrapper{
      float: left;
      width: 33.33%;
      .button{
        margin: .3rem;
        padding: .3rem 0;
        text-align: center;
        font-size: .875rem;
        border: .06rem solid #eee;
        border-radius: .2rem;
      }
    }
  }
  .item-list{
    .item{
      line-height: 1.875rem;
      padding-left: .6rem;
      font-size: .875rem;
    }
    .border-bottom{
      &:before{
        border-color: #eee
      }
    }
  }
  .title{
    line-height: 1.5rem;
    height: 1.5rem;
    color: #666;
    padding-left: .6rem;
    font-size: .875rem;
    background-color: #f7f8f9;
  }
}
</style>
