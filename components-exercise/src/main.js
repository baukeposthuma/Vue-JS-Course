import Vue from 'vue'
import App from './App.vue'
import Header from './Components/Chrome/Header.vue'
import Servers from './Views/Servers/Servers.vue'
import Footer from './Components/Chrome/Footer.vue'

Vue.component('app-header', Header)
Vue.component('servers', Servers)
Vue.component('app-footer', Footer)

new Vue({
  el: '#app',
  render: h => h(App)
})
