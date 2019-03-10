<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img"  :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () { // 定义在swiper上，解决由于初始化时list为空造成的轮播图从最后一张开始展示的问题
      return this.list.length // 当list无数据，length=0，swiper不显示，全部list加载之后swiper显示
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper          // 解决swiper图片加载时没有高度的问题
    overflow:hidden
    width: 100%
    height: 0
    padding-bottom: 26%
    .swiper-img
      width: 100%
</style>
