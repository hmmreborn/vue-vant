<template>
  <div class="goods">
    <van-cell-group>
      <van-cell>
        <div class="goods-title">名称</div>
        <div class="goods-price">价格</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：运费</van-col>
        <van-col span="14">剩余：剩余</van-col>
      </van-cell>
    </van-cell-group>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" @click="sorry">
        客服
      </van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">
        购物车
      </van-goods-action-icon>
      <van-goods-action-button type="warning" @click="sorry">
        加入购物车
      </van-goods-action-button>
      <van-goods-action-button type="danger" @click="sorry">
        立即购买
      </van-goods-action-button>
    </van-goods-action>
  </div>
</template>

<script>
import {
  Cell,
  CellGroup,
  Toast,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant'

export default {
  name: 'DetailGoods',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  methods: {
    onClickCart () {
      this.$router.push('cart')
    },
    sorry () {
      Toast('暂无后续逻辑~')
    }
  }
}
</script>

<style lang="scss" scoped>
  .goods{
    &-title {
      font-size: 16px;
    }
    &-price {
      color: #f44;
    }
    &-express {
      color: #999;
      font-size: 12px;
      padding: 5px 15px;
    }
  }
</style>
