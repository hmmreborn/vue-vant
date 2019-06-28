<template>
  <div class="header">
    <van-nav-bar
      title="城市选择"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft('/')"
    />
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  data () {
    return {}
  },
  methods: {
    onClickLeft (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/styles/variables";
@import "../../../assets/styles/minxins";
.header{
  overflow: hidden;
  height: $headerHeight;
  margin-bottom: 1px;
  line-height: $headerHeight;
  text-align: center;
  @include box-shadow(0px 1px 2px #efefef)
}
</style>
