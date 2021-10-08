import Vue from 'vue'

const components = {
  Breadcrumb: () => import(/* webpackChunkName: 'breadcrumb' */'./Breadcrumb/index.vue')
}

export default components
Object.keys(components).forEach(item => {
  Vue.component(item, components[item])
})

