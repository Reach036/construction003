
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import VueScrollLock from 'vue-scroll-lock'
import axios from "axios";
import qs from 'qs';
import base from './base';

import '../static/css/common.css';

Vue.use(base);
Vue.prototype.$axios = axios
// Vue.prototype.GLOBAL = base
Vue.prototype.$qs = qs;
Vue.use(VueScrollLock)
Vue.use(Element)
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})




