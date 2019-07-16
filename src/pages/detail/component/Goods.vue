<template>
  <div class="goods">
    <div class="goods-pro">
      <van-cell-group>
        <van-cell>
          <div class="goods-price">￥<em>{{toprice}}</em>{{dotprice}}</div>
          <div class="goods-title">{{sightName}}</div>
        </van-cell>
      </van-cell-group>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="sorry"></van-goods-action-icon>
        <van-goods-action-icon icon="shop-o" text="店铺" @click="sorry"></van-goods-action-icon>
        <van-goods-action-icon icon="cart-o" text="购物车"  @click="onClickCart"></van-goods-action-icon>
        <van-goods-action-button type="warning" text="加入购物车"  @click="show = true"></van-goods-action-button>
        <van-goods-action-button type="danger" text="立即购买" @click="sorry"></van-goods-action-button>
      </van-goods-action>
    </div>
    <div class="goods-assess" style="height: 800px">
      评价
    </div>
    <div class="goods-detail">
      详情
    </div>
    <div class="goods-recommend">
      推荐
    </div>
    <van-sku
      v-model="show"
      :sku="skuData.sku"
      :goods="skuData.goods_info"
      :goods-id="skuData.goods_id"
      :hide-stock="skuData.sku.hide_stock"
      :quota="skuData.quota"
      :quota-used="skuData.quota_used"
      :initial-sku="initialSku"
      reset-stepper-on-hide
      reset-selected-sku-on-hide
      disable-stepper-input
      :close-on-click-overlay="closeOnClickOverlay"
      :custom-stepper-config="customStepperConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script>
import {
  Cell,
  CellGroup,
  Toast,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Sku
} from 'vant'
import skuData from '../data'
import { LIMIT_TYPE } from '../constants'
export default {
  name: 'DetailGoods',
  props: {
    sightName: String,
    price: String
  },
  data () {
    this.skuData = skuData
    return {
      show: false,
      closeOnClickOverlay: true,
      initialSku: {
        s1: '1216',
        s2: '1193',
        s3: '2193',
        selectedNum: 3
      },
      customStepperConfig: {
        quotaText: '单次限购100件',
        handleOverLimit: (data) => {
          const { action, limitType, quota } = data
          if (action === 'minus') {
            this.$toast('至少选择一件商品')
          } else if (action === 'plus') {
            if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
              this.$toast(`限购${quota}件`)
            } else {
              this.$toast('库存不够了')
            }
          }
        }
      }
    }
  },
  computed: {
    toprice () {
      return parseInt(this.price)
    },
    dotprice () {
      return this.price.substr(-3, 3)
    }
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [Sku.name]: Sku
  },
  methods: {
    onClickCart () {
      this.$router.push('/shopping')
    },
    sorry () {
      Toast('暂无后续逻辑~')
    },
    onBuyClicked (data) {
      this.$toast('buy:' + JSON.stringify(data))
    },
    onAddCartClicked (data) {
      this.$toast('add cart:' + JSON.stringify(data))
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
      em{
        font-style: normal;
        font-size: 1.5rem;
      }
    }
    &-express {
      color: #999;
      font-size: 12px;
      padding: 5px 15px;
    }
  }
</style>
