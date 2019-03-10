<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"  >
          </div>
          <p class="icon-text">{{item.text}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables'
@import '~styles/mixins'
  .icons >>> .swiper-container   // icons下面起作用的swiper-container样式发生改变，swiper-container自带overflow:hidden
    width: 100%
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      float: left
      position: relative
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        overflow:hidden
        position: absolute
        top: 0
        left: 0
        right: 0
        box-sizing: border-box
        padding: .1rem
        bottom: .44rem
        .icon-img-content
          height: 100%
          display: block
          margin: 0 auto
      .icon-text
        position: absolute
        left: 0
        right: 0
        bottom: 0
        text-align: center
        line-height: .4rem
        color:$darkTextColor
        ellipsis() //mixins.styl里定义的样式
</style>
