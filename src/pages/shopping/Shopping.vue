<template>
  <div class="shopping">
    <van-nav-bar title="购物车">
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="item in goods"
        :key="item.id"
        :name="item.id"
      >
        <van-card
          :title="item.title"
          :desc="item.desc"
          :num="item.num"
          :price="formatPrice(item.price)"
          :thumb="item.thumb"
        />
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
    <van-tabbar v-model="tabarActive">
      <van-tabbar-item name="home" icon="home-o" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item name="list" icon="apps-o" replace to="/list">分类</van-tabbar-item>
      <van-tabbar-item name="shopping" icon="shopping-cart-o" replace to="/shopping" info="5">购物车</van-tabbar-item>
      <van-tabbar-item name="setting" icon="contact" replace to="/setting">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from 'vant'
export default {
  name: 'Shopping',
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data () {
    return {
      tabarActive: 'shopping',
      checkedGoods: ['1'],
      goods: [{
        id: '1',
        title: '舒尔 Shure SE215SPE-B-BT1 入耳式耳机 无线蓝牙耳机 音乐耳机 耳挂式耳机 运动耳机 蓝色',
        desc: '0.138kg/件，蓝牙通话版 蓝色',
        price: 129800,
        num: 1,
        thumb: 'https://img10.360buyimg.com/mobilecms/s372x372_jfs/t7231/108/4477642032/95042/e55eda0b/5bc06c79N63a9d706.jpg!q70.dpg.webp'
      }]
    }
  },
  computed: {
    submitBarText () {
      const count = this.checkedGoods.length
      return '结算' + (count ? `(${count})` : '')
    },
    totalPrice () {
      return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0)
    }
  },
  methods: {
    formatPrice (price) {
      return (price / 100).toFixed(2)
    },
    onSubmit () {
      Toast('点击结算')
    }
  }
}
</script>
<style lang="scss" scoped>
  .shopping{
    background-color: #fafafa;
  }
  .van-submit-bar{
    bottom: 3.125rem;
  }
  .card-goods {
    padding:.625rem;
    &__item {
      position: relative;
      .van-checkbox__label {
        width: 100%;
        height: auto; // temp
        padding: 0 10px 0 15px;
        box-sizing: border-box;
      }
      .van-checkbox__icon {
        top: 50%;
        left: 10px;
        z-index: 1;
        position: absolute;
        margin-top: -10px;
      }
      .van-card__price {
        color: #f44;
      }
    }
  }
</style>
