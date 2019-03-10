<template>
  <div class="list" ref="wrapper">
    <div>

      <div class="area">
        <div class="title border-topbottom">Current City</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">Popular City</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleBtnClick(item.spell)"
          >
            <div class="button">{{item.spell}}</div>
          </div>
        </div>
      </div>

      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
          <div
            class="item-list"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleBtnClick(innerItem.spell)"
            >
            <div class="item border-bottom">{{innerItem.spell}}</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({ // ... ES6展开运算符
      currentCity: 'city'
    })
  },
  methods: {
    handleBtnClick (city) {
      this.$store.commit('changeCity', city) // commit换成dispatch在这里也可以，只是多走一步流程
      this.$router.push('/') // 编程式导航，跳转到首页
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables'
  .border-topbottom
    &:before
      border-color: #777
    &:after
      border-color: #777
  .border-bottom
    &:after
      border-color: #777
  .list
    position: absolute
    top: 1.585rem
    left: 0
    right: 0
    bottom: 0
    overflow:hidden
    .title
      background: #eee
      line-height: .44rem
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      padding: .1rem .6rem .1rem .1rem
      overflow: hidden
      .button-wrapper
        float: left
        width: 33.3%
        .button
          margin: .1rem
          border-radius: .06rem
          text-align: center
          padding: .1rem 0
          border: .02rem solid #ccc
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
        color: #666
</style>
