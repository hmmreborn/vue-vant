<template>
  <div class="home shadow">
    <p>count is {{count}}</p>
    <button @click="increment">加+1</button>
    <button @click="decrement">减-1</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      localCount: 2
    }
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['INCREMENT', 'DECREMENT']),
    ...mapActions(['increment', 'decrement'])
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/styles/variables";
  @import "../../assets/styles/minxins";
  .home {
    text-align: center;
    width: $width;
    height: $height;
    @include rounded-corners(6px);
    @include sexy-border(#eee);
  }
  .test{}
</style>
