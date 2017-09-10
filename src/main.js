import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import Buefy from 'buefy'
import  'buefy/lib/buefy.css'

//usamos VueRouter
Vue.use(VueRouter)
//instanciamos
const router = new VueRouter({
  routes, 
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
