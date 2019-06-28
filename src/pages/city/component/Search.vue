<template>
  <div>
    <div class="search">
      <van-search placeholder="请输入搜索城市" v-model="keyword" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
            v-for="item of list"
            :key="item.id"
            @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timmer: null
    }
  },
  methods: {
    handleCityClick (city) {
      this.CHANGECITY(city)
      this.$router.push('/')
    },
    ...mapMutations(['CHANGECITY'])
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timmer) {
        clearTimeout(this.timmer)
      }
      this.timmer = setTimeout(() => {
        const result = []
        if (!this.keyword) {
          this.list = []
          return
        }
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/styles/variables";
.search-content{
  z-index: 99;
  overflow: hidden;
  position: absolute;
  top: 6.25rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $bgColor;
  .search-item{
    padding-left: 1rem;
    line-height: 1.875rem;
    font-size: .875rem;
    color: #666;
  }
}
</style>
