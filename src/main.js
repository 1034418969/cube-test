import Vue from 'vue'
import './cube-ui'
import Cube from 'cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import '@/font/iconfont.css'
import components from '@/components';
import "./assets/index.css";
import axios from 'axios'


Vue.use(components);
Vue.use(Cube);


// 请求拦截
axios.interceptors.request.use((config)=>{
  config.url = "/ele"+config.url;
  return config;
})

// 响应拦截
axios.interceptors.response.use(({data})=>{
  return data;
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
