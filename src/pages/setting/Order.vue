<template>
    <div class="order">
      <van-nav-bar
        title="订单"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
</template>

<script>
export default {
  name: 'Order',
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
