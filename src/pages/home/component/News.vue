<template>
  <div class="news-tip">
    <img src="https://m.360buyimg.com/mobilecms/jfs/t14752/82/2574581467/6535/c8158ace/5aa8935bN94e31ff6.jpg.dpg" alt="">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id" style="font-size: .5rem">
        <div class="tip">
          <span class="red">{{item.hot}}</span>{{item.decs}}
        </div>
      </swiper-slide>
    </swiper>
    <div class="more">更多</div>
  </div>
</template>

<script>
export default {
  name: 'HomeNews',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        direction: 'vertical'
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/styles/variables";
@import "../../../assets/styles/minxins";
.news-tip>>>.swiper-container{height: 20px;}
.news-tip{
  overflow: hidden;
  position: relative;
  padding-top: .5rem;
  background-color: $bgWhite;
  img{
    position: absolute;
    top: .5rem;
    left: 10px;
    width: 4.65rem;
  }
  .tip{
    padding-left: 5.5rem;
    padding-right: 3rem;
    margin-top: 1px;
    @include ellipsis
  }
  .more{
    position: absolute;
    top: .5rem;
    right: .5rem;
    padding-left: .3rem;
    font-size: .7rem;
    color: #181818;
    border-left: 1px solid #eee;
  }
}
.red{color: #e43130;
  padding: 0 .32rem;}
</style>
