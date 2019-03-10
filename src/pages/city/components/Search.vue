<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" class="search-input" placeholder="Enter city's name in lower case">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
        class="search-item border-bottom"
        v-for="item of list"
        :key="item.id"
        @click="handleBtnClick(item.spell)"
        >{{item.spell}}</li>
        <li class="search-item border-bottom" v-show="inputNotExist">city not found</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    inputNotExist () {
      return !this.list.length
    }
  },
  methods: {
    handleBtnClick (city) {
      this.$store.commit('changeCity', city) // commit换成dispatch在这里也可以，只是多走一步流程
      this.$router.push('/') // 编程式导航，跳转到首页
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) { // 解决清空输入内容后列表还在的问题
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
                value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width:100%
      height: .62rem
      line-heihgt: .62rem
      border-radius: .06rem
      text-align: center
      padding: 0 .1rem
      color: #666
  .search-content
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    z-index: 1
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      color: #666
      background: #fff
</style>
