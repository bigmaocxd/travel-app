<template>
<div class="header">
  <router-link to="/">
    <div class="iconfont back-icon">&#xe617;</div>
  </router-link>
  Cities
</div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables'
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .back-icon
      font-size: .5rem
      position: absolute
      text-align: center
      top: 0
      left: 0
      margin-left: 0.07rem
      color: #fff
</style>
