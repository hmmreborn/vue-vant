<template>
  <div>
    <van-image-preview
      v-model="show"
      :images="imgs"
      @change="onChange"
    >
    </van-image-preview>
  </div>
</template>
<script>
export default {
  name: 'Gallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    onChange (index) {
      this.index = index
    }
  }
}
</script>

<style scoped lang="css">

</style>
