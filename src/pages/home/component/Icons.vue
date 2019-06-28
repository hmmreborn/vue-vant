<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <img :src="item.imgUrl" alt="">
          <p>{{item.title}}</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 10)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/styles/variables";
@import "../../../assets/styles/minxins";
.icons >>> .swiper-container{
  height: 0;
  padding-bottom: 50%;
  background-color: $bgWhite;
}
.icon{
  overflow: hidden;
  width: 20%;
  padding-bottom: 20%;
  height: 0;
  margin-top: 1rem;
  box-sizing: border-box;
  float: left;
  text-align: center;
  img{
    width: 2.5rem;
  }
  p{
    padding: 0;
    margin: 6px 0 0;
    font-size: .6rem;
    color: #666;
    @include ellipsis
  }
}
</style>
