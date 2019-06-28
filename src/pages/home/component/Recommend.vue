<template>
    <div class="recommend">
      <ul>
        <router-link class="item" tag="li"
             :to="'/detail/'+item.id"
            v-for="item of list"
            :key="item.id">
            <div class="recommend-box">
              <img :src="item.imgUrl" alt="">
              <p class="desc">{{item.desc}}</p>
              <div class="price"><span>￥</span>{{item.price}}</div>
            </div>
        </router-link>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/styles/variables";
@import "../../../assets/styles/minxins";
.recommend{
  overflow: hidden;
  width: 100%;
  margin: .5rem 0;
  padding-bottom: 3.125rem;
  .item{
    width: 50%;
    float: left;
  }
}
.recommend-box{
  margin: 4px;
  padding: 4px;
  background-color: $bgWhite;
  .desc{
    box-sizing: border-box;
    height: 1.9375rem;
    font-size: 0.8125rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
    color: #232326;
    margin-top: .3125rem;
    line-height: 1rem;
    margin-bottom: .1875rem;
    padding: 0 .25rem;
  }
  .price{
    font-size: 1rem;
    color: #f23030;
    span{
      font-size: .5rem;
    }
  }
  img{
    width: 100%;
  }
}
</style>
