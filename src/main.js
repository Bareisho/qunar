// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from "fastclick"
import VueAwesomeSwiper from "vue-awesome-swiper"
import 'babel-polyfill'                          //使浏览器支持Promise等ES6新特性
import store from "./store"                       //导入公用数据
import "style/reset.css"
import "style/border.css"
import "style/iconfont.css"
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,                //router: router
  store,                 //根实例注册以后，可以使用全局this.$store
  components: { App },
  template: '<App/>'
})
