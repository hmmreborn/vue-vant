<template>
  <div>
    <van-tabbar v-model="tabarActive">
      <van-tabbar-item name="home" icon="home-o" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item name="list" icon="apps-o" replace to="/list">分类</van-tabbar-item>
      <van-tabbar-item name="shopping" icon="shopping-cart-o" replace to="/shopping" info="5">购物车</van-tabbar-item>
      <van-tabbar-item name="setting" icon="contact" replace to="/setting">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      value: '',
      tabarActive: 'list',
      items: [
        {title: '京东超市'},
        {title: '数码电器'},
        {title: '京东服饰'},
        {title: '京东生鲜'},
        {title: '京东到家'},
        {title: '充值缴费'},
        {title: '领券'}
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
</style>
