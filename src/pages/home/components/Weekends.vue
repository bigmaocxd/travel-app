<template>
  <div>
    <div class="title">
      <span class="iconfont heart">&#xe757;</span>
    Recommendations
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'HomeWeekends',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .title
    line-height: .9rem
    background: #eee
    text-indent: .2rem
    .heart
      color: #ff809f
  .item-img-wrapper
    width:100%
    height: 0
    padding-bottom: 37.09%
    overflow:hidden
    .item-img
      width: 100%
  .info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
