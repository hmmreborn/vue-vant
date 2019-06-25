<template>
  <div>
    <van-row class="row-1">
      <van-col span="3" class="cols text-center">
        <van-icon name="wap-nav" size="1.5em" class="class-qr" color="#888" @click="redirects('/list')"/>
      </van-col>
      <van-col span="18" class="cols">
        <van-search placeholder="请输入搜索关键词" v-model="value" />
      </van-col>
      <van-col span="3" class="cols text-center">
        <van-icon name="qr" size="1.5em" class="class-qr" color="#888"/>
      </van-col>
    </van-row>
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
  name: 'Home',
  data () {
    return {
      value: '',
      tabarActive: 'home'
    }
  },
  methods: {
    redirects (url) {
      this.$router.push(url)
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
