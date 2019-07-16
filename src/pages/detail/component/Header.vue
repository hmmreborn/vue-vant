<template>
 <div>
   <div class="header-abs" :style="backgroundStyle" @click="goBack"><van-icon name="arrow-left"/></div>
   <div class="header-more" :style="backgroundStyle"><van-icon name="ellipsis"></van-icon></div>
   <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
     <div type="flex" justify="space-around" class="detail_anchor">
       <div class="detail_anchor_item"
            v-for="(item,index) in itemList"
            :key="index"
            :class="activeClass == index ? 'cur':''"
            @click="getItem(index)"><span>{{item}}</span></div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      activeClass: false,
      itemList: ['商品', '评价', '详情', '推荐'],
      opacityStyle: {
        opacity: 0
      },
      backgroundStyle: {
        backgroundColor: 'rgba(0,0,0,.5)',
        color: '#fff'
      }
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    handleScroll () {
      const top = document.scrollingElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.backgroundStyle = {backgroundColor: 'transparent',
          color: '#666'}
        this.showAbs = false
      } else {
        this.backgroundStyle = {backgroundColor: 'rgba(0,0,0,.5)',
          color: '#fff'}
        this.showAbs = true
      }
    },
    getItem (index) {
      this.activeClass = index
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
.header-abs,.header-more{
  z-index: 2;
  position: fixed;
  top: .3rem;
  width: 1.875rem;
  height: 1.875rem;
  line-height: 1.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  color: #fff;
  font-size: 1.25rem;
  background: rgba(0,0,0,.5);
  transition: all .5s;
  .header-abs-back{
    color: #fff;
    font-size: .4rem
  }
}
.header-abs{
  left: .3rem;
}
.header-more{
  right: .3rem;
}
.header-fixed{
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2.75rem;
  line-height: 2.75rem;
  text-align: center;
  background: #fff;
  font-size: .32rem;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  .detail_anchor{
    display: flex;
    justify-content:space-around;
    padding: 0 4.375rem;
    height: 2.75rem;
    line-height: 2.75rem;
    .detail_anchor_item.cur{
      color: #e4393c;
      span{
        padding-left: .8125rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYBAMAAAABjmA/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURek7PUdwTO49Peg6Peo6Puc6Pek6POk6POg6POg7PeY8POg6POk6PApBjXgAAAANdFJOU/8ADttQPYvEqJYqW/KuifCQAAAAjklEQVQI10XOsRGCQBAF0D8eA6Imn4ERMh0tgDE2UDqgA2Ij7UA6gA6MjCnB0vzLBlxw92Z379+B/F7DgwQraI3C05AQc0ElfBCac40NOlzIE2LUuJM5gtpHMtPxc+yW1tuH15j8+hYHD1yhdPQoHO3yKG+GSNgbXsI81AocgNS+qlgLFwrrGNjFdFS9tj82HhIeoIR1QQAAAABJRU5ErkJggg==) no-repeat 0;
        background-size: 8px;
      }
    }
  }
}
</style>
