<template>
  <div>
    <div class="title">
      <span class="iconfont heart">&#xe757;</span>
    Most popular
    </div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      > <!-- 将把router-link渲染成li而不是a tag -->
        <img class="item-img" :src="item.imgUrl" />
        <div class="info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="more-info">details</button>
        </div>
      </router-link>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'HomeRecommend',
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
    margin-top: .2rem
    .heart
      color: #ff809f
  .item
    display: flex
    height: 1.9rem
    overflow: hidden
    .item-img
      height: 1.7rem
      width: 1.7rem
      padding: .1rem
    .info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .more-info
        margin-top: .2rem
        padding: 0 .2rem
        border-radius: .1rem
        background: #ffaa80
        color: #fff
</style>
