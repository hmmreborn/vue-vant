<template>
  <div>
    <van-button type="primary" @click="showPopup">展示弹出层</van-button>
    <van-popup v-model="show">内容</van-popup>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      show: false
    }
  },
  methods: {
    showPopup () {
      this.show = true
    }
  }
}
</script>

<style scoped>

</style>
