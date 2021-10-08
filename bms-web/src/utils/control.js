import Vue from 'vue'

const Base64 = require('js-base64').Base64

const control = {
  // 中文编码
  chineseEncode(value) {
    return Base64.encode(Base64.encode(value))
  },

  // 中文解码
  chineseDecode(value) {
    return Base64.decode(Base64.decode(value))
  },

  // 对象数组按照某一属性排序
  sortBy(attr, rev) {
    if (rev === undefined) {
      rev = 1
    } else {
      rev = rev ? 1 : -1
    }
    return function(a, b) {
      a = a[attr]
      b = b[attr]
      return (a - b) * rev
    }
  },

  // 浏览器判断
  checkAgent(agent) {
    return navigator.userAgent.indexOf(agent) > -1
  }
}

export default control
Vue.prototype.$control = control
