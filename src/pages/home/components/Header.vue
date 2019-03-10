<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe617;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe65a;</span>
      Search by city's name...
    </div>
    <router-link to="/city">
      <div class="header-right" >
        {{this.city}} <!-- mapstate后的省略写法； this.$store.state.city，$store调用vuex公用存储，是前端存储数据 -->
        <span class="iconfont arrow-down">&#xe7ff;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']) // 将store中的city映射到computed的city
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .5rem
    .header-input
      flex: 1
      height: .62rem
      line-height: .62rem
      border-radius: .1rem
      padding-left: .2rem
      margin-top: .12rem
      margin-left: .2rem
      background: #fff
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-down
        position: relative
        top: -.04rem
        margin-left: -.08rem
</style>
