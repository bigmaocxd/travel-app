import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex) // vue使用插件的语法

export default new Vuex.Store({ // 创建数据公用区域，命名store
  state,
  /* actions: {
    changeCity (ctx, city) { //ctx = context, 用于使用commit方法，传参给mutations里的方法
      ctx.commit('changeCity', city)
    }
  }, */
  mutations
})
