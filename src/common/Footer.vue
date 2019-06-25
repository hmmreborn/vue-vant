<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item name="list" icon="apps-o" replace to="/list">分类</van-tabbar-item>
      <van-tabbar-item name="shopping" icon="shopping-cart-o" replace to="/home">购物车</van-tabbar-item>
      <van-tabbar-item name="setting" icon="contact" replace to="/setting">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'CommonFooter',
  data () {
    return {
      active: 'home'
    }
  }
}
</script>

<style scoped lang="scss">
  .class-qr {
    padding: .625em 0
  }
  .text-center{
    text-align: center;
  }
</style>
