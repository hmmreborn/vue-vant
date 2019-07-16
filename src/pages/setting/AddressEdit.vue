<template>
  <div>
    <van-nav-bar
      title="地址"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import areaList from './area'
import {Toast} from 'vant'
export default {
  name: 'AddressEdit',
  data () {
    return {
      areaList,
      searchResult: []
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onSave () {
      Toast('保存')
    },
    onDelete () {
      Toast('delete')
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }]
      } else {
        this.searchResult = []
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
