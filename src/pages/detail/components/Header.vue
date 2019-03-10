<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs">
      <div class="iconfont back-abs-icon">&#xe617;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont back-fixed-icon">&#xe617;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const scrollY = document.documentElement.scrollTop
      if (scrollY > 60) {
        let opacity = scrollY / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll) // window是全局对象，会影响其他组件
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll) // 离开页面时对全局事件进行解绑
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    text-align: center
    border-radius: .4rem
    background: rgba(0, 0, 0, .8)
    .back-abs-icon
      color: #fff
      font-size: .6rem
  .header-fixed
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    z-index: 2
    .back-fixed-icon
      font-size: .5rem
      position: absolute
      text-align: center
      top: 0
      left: 0
      margin-left: 0.07rem
      color: #fff
</style>
