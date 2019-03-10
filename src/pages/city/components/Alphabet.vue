<template>
<ul class="list">
  <li
    class="item"
    v-for="item of letters"
    :key="item"
    :ref="item"
    @click="handleLetterClick"
    @touchstart.prevent="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouckEnd">{{item}}</li>
</ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters // 返回的是["A", "B", "C",...]由键值组成的数组
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop // A城市栏距离header底部的垂直距离
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('clickLetter', e.target.innerText) // 先将点击的letter信息传给city.vue，再转发到List.vue
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) { // 函数节流，设置timer，使执行步骤延迟16ms，if在16ms间重复执行touch操作，删除上一个timer
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79 // 点触位置到屏幕顶部的距离 - header height
          const index = Math.floor((touchY - this.startY) / 20) // A栏和点触位置的距离 / 字母高度
          if (index >= 0 && index < this.letters.length) {
            this.$emit('clickLetter', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouckEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
