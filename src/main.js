import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueVirtualScroller from 'vue-virtual-scroller'
Vue.use(VueVirtualScroller);

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)

import Vuetify from "vuetify"
Vue.use(Vuetify)

Vue.config.productionTip = false

import axios from 'axios'

Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
  router,
  vuetify: new Vuetify({
    icons: {
      iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
  })
}).$mount('#app')
