import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/sass/color.scss'
import './assets/sass/function.scss'
import './assets/sass/globalSetting.scss'
import './plugins/vant.js'
import { List } from 'vant';

Vue.use(List);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
