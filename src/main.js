// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import Faves from './components/Faves.vue'


Vue.config.productionTip = false

Vue.component('header-bar', Header)
Vue.component('search', Search)
Vue.component('faves', Faves)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

