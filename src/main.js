import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Rankings from "./components/Rankings.vue";
import Statistics from "./components/Statistics.vue"
import Builds from "./components/Builds.vue"

Vue.use(VueRouter)

const router = new VueRouter ({
    routes: [
      {
        path: '/',
        name: 'Rankings',
        component: Rankings
      },
      {
        path: '/Rankings',
        name: 'Rankings',
        component: Rankings
      },
      {
        path: '/Statistics',
        name: 'Statistics',
        component: Statistics
      },
      {
        path: '/Builds',
        name: 'Builds',
        component: Builds
      }      
    
    ]
})



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')