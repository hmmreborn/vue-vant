<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  a {
    @include link-colors(blue, red, green);
  }
  .shadow {
    @include box-shadow(0 4px 5px #666, 2px 6px 10px #999)
  }
  .primary {
    color: #fff;
    background-color: #007aff;
    border-color: #007aff;
  }
  $type: monster;
  p {
    @if $type == ocean {
      color: blue;
    } @else if $type == matador {
      color: red;
    } @else if $type == monster {
      color: green;
    } @else {
      color: black;
    }
  }
  @for $i from 1 through 3 {
    .item-#{$i} { width: 2em * $i; }
  }
</style>
