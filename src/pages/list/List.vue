<template>
  <div class="class">
    <van-nav-bar title="分类"  left-arrow fixed @click-right="onClickRight" @click-left="onClickLeft">
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    dv
    <div class="main">
      <div class="wrapper" ref="wrapper">
        <ul class="content">
          <!-- 分类列表 -->
          <li class="border-bottom" v-for="(item,index) in classList" :key="index" @click="listClick(index)" :class="index===active?'active':''">{{item.list}}</li>
        </ul>
      </div>
      <div class="detialList_box" ref="dwrapper">
        <div class="dwrapper">
        <!-- 分类详情列表 -->
        <ul class="detialList clearfix" v-for="(item,index) in classList" v-show="index===active" :key="index">
          <li class="detial_title">{{item.list}}</li>
          <li v-for="(item,index) in item.detial" :key="index">
            <img :src="item.src" alt="">
            <p>{{item.text}}</p>
          </li>
        </ul>
        </div>
      </div>
    </div>
    <van-tabbar v-model="tabarActive">
      <van-tabbar-item name="home" icon="home-o" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item name="list" icon="apps-o" replace to="/list">分类</van-tabbar-item>
      <van-tabbar-item name="shopping" icon="shopping-cart-o" replace to="/shopping" info="1">购物车</van-tabbar-item>
      <van-tabbar-item name="setting" icon="contact" replace to="/setting">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import api from '../../api'
export default {
  name: 'List',
  data () {
    return {
      classList: [],
      active: 0,
      detialtext: '',
      tabarActive: 'list',
      scrollY: 0,
      rightLiTops: []
    }
  },
  methods: {
    listClick (index) {
      this.active = index
      this.detialtext = index
    },
    onClickLeft () {
      this.$router.push('/')
    },
    onClickRight () {
      console.log('sss')
    }
  },
  created () {
    api.get('list').then(res => {
      console.log(res.data.data)
      this.classList = res.data.data.classList
    })
  },
  mounted () {
    this.leftBscroll = new BScroll(this.$refs.wrapper)
    this.rightBscroll = new BScroll(this.$refs.dwrapper, {
      probeType: 3
    })
  }
}
</script>

<style scoped lang="scss">
  .class {
    .main {
      display: flex;
      position: absolute;
      top: 0px;
      left: 0;
      right: 0;
      bottom: 0;
      .wrapper {
        overflow: hidden;
        width: 5rem;
        height: 100%;
        background-color: #f8f8f8;
        .content {
          padding-top: 2.75rem;
          padding-bottom: 3.125rem;
          li {
            height: 2.5rem;
            width: 5rem;
            line-height: 2.5rem;
            padding-left: .625rem;
            font-size: .875rem;
            text-align: left;
            background-color: #f8f8f8;
          }
          .active {
            color: #e93b3d;
            background-color: #fff;
          }
        }
      }
      .detialList_box {
        flex: 1;
        overflow: hidden;
        height: 100%;
        background-color: #fff;
        .detialList {
          padding-bottom: 3.125rem;
          &:after{
            content:"";
            display: block;
            clear: both;
          }
          li {
            float: left;
            width: 32.8%;
            text-align: center;
            font-size: .75rem;
            img {
              width: 70%;
              height: 70%
            }
          }
          .detial_title{
            height: 2.5rem;
            width: 100%;
            padding-left: .625rem;
            line-height: 2.5rem;
            margin-top: 3rem;
            font-size: .875rem;
            font-weight: 800;
            text-align: left;
          }
        }
      }
    }
  }
</style>
