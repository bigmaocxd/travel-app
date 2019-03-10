// eslint-disable-next-line
let defaultCity = 'beijing'
try { // try catch包裹localStorage是为了避免用户关闭了本地存储而抛出错误
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: localStorage.city // 数据存储在state, home和city页公用city数据，默认当前地址
}
