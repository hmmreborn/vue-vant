<template>
  <van-tabbar v-model="tabarActive">
    <van-tabbar-item name="home" icon="home-o" replace to="/">首页</van-tabbar-item>
    <van-tabbar-item name="list" icon="apps-o" replace to="/list">分类</van-tabbar-item>
    <van-tabbar-item name="shopping" icon="shopping-cart-o" replace to="/shopping" info="5">购物车</van-tabbar-item>
    <van-tabbar-item name="setting" icon="contact" replace to="/setting">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'HomeFooter',
  data () {
    return {
      tabarActive: 'home'
    }
  }
}
</script>

<style scoped lang="scss">

</style>
