<template>
  <div class="spike">
    <div class="title">
      <div class="seckill-tit-img"></div>
    </div>
    <div>
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of list" :key="item.id">
          <div class="spike-box">
            <img :src="item.imgUrl" alt="">
            <p class="newprice"><span>￥</span>{{item.newprice}}</p>
            <s class="price">￥{{item.price}}</s>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSpike',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 10
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/styles/variables";
@import "../../../assets/styles/minxins";
.spike{
  margin: .625rem;
  background-color: $bgWhite;
  @include rounded-corners(4px 4px 0 0px);
  .title{
    overflow: hidden;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABYwAAACQBAMAAABZrTKvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUdwTOwQEOcLC+wVFewREfMUFOkNDewQEFoRRvUAAAAIdFJOUwBjfRIrfbNFQmFFfAAAA95JREFUeNrt3M+PEncYB+DdsJu9CsZyXSZdvdJA69UUzJwl2d6ryZ4ljpl/vzPAwOwFjfRFXvM8jfHQ28dP3nm/84Orq6P+eTr4eAUpPfWJAzUGNYYfZTdGjeES/Nar8b/iIKe/ejX+JA5yuu3V+F4c5HTTq/E7cZB+ObYa8wtsFXYK0hq87m63TYVBWte7Gr8QBYn9vWnx74IgtfL108cvYgAAAAAAAOB/crN+9WH8Tg5k9vZxw4NUErt73PksC7IavOpq/GEqDZL683HvpTTIPowfVxPjmJyuDy1eFS/kQUpfDztFUbyRByl3ikOLHx6KwlZBRnf9YVwUnyVCQreH1bgZxsW9REjo/b7F7TAufNhL6hNesWqL7IxHRt1d44ftNJ5IhMQ1Lgo1Jq3++a4lEdLWeFWs1JjsS8W+xZYK8ta4WynUmJS+9s53briR1Ptnw9jjD1K63T/A27iXCAnd9Q94Xg0ip8GzFntRk6RnvNWDEx7ZXfdmsY+YyLpVjHo9FgdJ/XFosQ/8yTuO94/wHPBI687dNn4Bb7ct9lOEpHazHk38MCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPw009lsIAVyG8xaciB/i6eCIHeN58vlwjgmfYvbHouCxGbLDWsFmVvc1rhSY3IvFc1OUdoqSD6N502Ly1KNSV7jZVWZxmSvcdVuFWpM+mlsqSD/btwM5MVUFlyuaePI/x50N9xMYy63xN96Y2LQPf6QFZdq+6j56BsT3cNoSwUX3OKyPF7STdNnWnxi0gOvbEee3+rW0c135n3j08eFCCPTXdbr4XDY9nhw/N/AMD6txfaywHjnZdvi4XBcLY5FrMUnXvRmm9XNPA4bxsOt2p2IONOmxc3mVnlLMKjGZVfjcSXiwBNIuW6uenXlSWjMTtG1uMl4ocZhNd5Ni9qsCIl3ud7XeLyU8E8+gfCjU6JX48oFL2ynqF3yAs2f1XghkOiL3thBOuRi12Y7Gk7av9Q4flqYFSH5Hk547QVPIFE13oesxlE3Kia7PxKOveipcfA0nuymsXdXAmPerm4ueVHTuGuyQREfsxqHLW2TdlI4fZxlNxZyzNK2Hm5LbG2LrvHIJS+Kxx9nnBamcViNd/flR81/tYfRkTFPNsPY44+ww8dke6ei9vZV/BnPw+iQfA9bhZevQreK2qtBoZc7r82fZVp4UTO0xvN6vQvYThEZc1l7bT5yTizr9Xo4HhvGwTHvPmKSRcycmH3HB/6cPo59Uho7J9qAK9+ex8fsA//Y652Az3LZ81sfoT3e/JiKl9vic5aBgAEAAOAs/gMMPUimfCFi9AAAAABJRU5ErkJggg==) no-repeat;
    background-size: contain;
    height: 2.125rem;
    line-height: 2.125rem;
    vertical-align: middle;
  }
  .seckill-tit-img{
    width: 69px;
    height: 27px;
    margin-top: 8px;
    margin-right: 6px;
    margin-left: .45rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAAeCAMAAAAsAgFtAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAABEEBAAAAAAAAAAAAAAAAAAAAPArMAAAAAAAAAAAAAAAAAAAAPErMPYzNfEtMfErMPErMPIsMPEsMWUSFAAAAOjBAnMAAAAcdFJOUwBEOb8tifjvCiYWcl/j/tKlT36YixMw37dJXlV6iql8AAADjUlEQVRIx5WX25arIAxAERHxgijW2nbx/995EiCAjnb15GEGRbNzxzKWhXOu2JV0nPfsVmhLjOOoLu6XctIvneOXOrVz1TVNLY1xUXXjnBPFXl0vJ9Osrn4jCufklfPC1vCKuyU6p212tJplMLzNAm/IdGFDPHEpy/tBDG7OzovsmYVbwhN7WEVHwvbsr/rB+Cv0yN1IeG282V2zSquCe30gupwB7xU4OvA1LILHNypjGOdv9th1BE2YrBVuqT9En7n0SspqdyNxVwhhgS+yFLs+9ZHYsgsi5NpEYKPYzwJ+1nd7kQiPmAuiGmtPa/2flcqKN1dS2AnPj5c4W6NCU8/BqDOxa4hE5Dr063VxDHku5Pr/67wXjav5TAy7Jg4FsQb88gOxwYiF9hruiDVWLxF1R2NDztgNHZYVhthEvUA06ii2VA7P2WtiNQyQx3UYcc8SsY4B0WYIq0jEcK0SVQzRh0KGQjmGacTyBHJzqmRfOWOwZozEVbHn26tPUzkRQVsXieIoTUG8DLouNnXviUuacu/p6WNTzrK0XgLxWx7r25GDM9BXoMLIcyTCwGOPadpiHm8Gy3eikle7S0px4Bss58ZpztRrmnZ2S/SN3S0kOCSXMUg6BFI5YeXQOvZjMBvKwGCmGtOzDYDTK5RJFQVDv8R19+P5yO66A48VKw3400LpKu/hND1O53lROaE3E5qIojCmgzU/EPGOiEQ/yRckUrkj0heOwsmlSmK6g6UxHogYrTn3v2sORAx+0L/OYa4KGISYoPfjw57kIk+PJR9NPCB1OpqI2Lk8u2tHoSaiavGg8JYpmuQt1Ax0xT49t/2TG8ceiTb4prL6lEdDOv1Sn/I4F4M2Eg0m4fVi03vbWC4rcSSKYIRIQc1Em3MtU/Ml4uJyhUUizJknNOK+q3Lo6nPlaJ+tJVuciOJgX3UiKpmPr0hkz/3BtsdjY+U4bs7EcCgMOWe5OzTprHJ8c3fMSRkRP1Chn+Mh35Kyfs6T3GtbSZHIRYLGWJrpa35vSEUxJ2Lb+cEGfb8dvk0pqD1OQq2SJz2a3pO5zvTpFJ4JXaWa1TxNPmo/aSJwfx/bnpOpmKGV3F/RJ01BhSaxKn+F1xHUKiLOfR4/kupDhcH22E4TapSyisTiQ5xLOcKPjThe4Mwqf2mECxH/s1oXn/Q9z9Nw2/86eBhp6+1HnP36QTfc/dR5fj5v9j/yD7jPekreIk5zAAAAAElFTkSuQmCC) no-repeat;
    background-size: contain;
  }
  img{
    width:$width
  }
  .spike-box{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 170%;
    text-align: center;
    .newprice{
      margin: 0;
      padding: 0;
      color: #e93b3d;
      font-size: 1rem;
      font-weight: 800;
      span{
        font-size: .75rem;
      }
    }
    .price{
      font-size: .75rem;
      color: #999;
    }
  }
}
</style>
