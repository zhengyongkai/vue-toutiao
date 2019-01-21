// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import $ from 'jquery'
import lazyimg from '@/assets/logo.png'
import 'mint-ui/lib/style.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "font-awesome/css/font-awesome.min.css";
import store from './store'

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
   
    loading:lazyimg
})

Vue.use(Mint);
Vue.use(ElementUI)


Vue.config.productionTip = false


const sess=window.sessionStorage


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
