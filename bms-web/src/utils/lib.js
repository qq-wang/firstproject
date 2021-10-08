import Vue from 'vue'

const local = {
  set: (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value))
  },
  get: key => {
    return JSON.parse(localStorage.getItem(key))
  },
  remove: key => {
    localStorage.removeItem(key)
  },
  clear: () => {
    localStorage.clear()
  }
}

const session = {
  set: (key, value) => {
    return sessionStorage.setItem(key, JSON.stringify(value))
  },
  get: key => {
    return JSON.parse(sessionStorage.getItem(key))
  }
}

export { local, session }

Vue.prototype.$local = local
Vue.prototype.$session = session
