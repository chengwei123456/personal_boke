import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'




Vue.config.productionTip = false

Vue.prototype.$axios = axios;


// 全局过滤器
Vue.filter('Day',function(time){
  return time.split(' ')[0].split('-')[2]
});

Vue.filter('Year',function(time){
  return time.split(' ')[0].split('-')[0]
});

Vue.filter('Month',function(time){
  return time.split(' ')[0].split('-')[1]
});




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  
})
