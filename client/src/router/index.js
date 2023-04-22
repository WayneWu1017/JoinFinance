import Vue from 'vue'
import Router from 'vue-router'
import BackendTest from '@/components/BackendTest.vue'
import axios from 'axios'

axios.defaults.baseURL = '<http://localhost:3000>'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BackendTest',
      component: BackendTest
    }
  ]
})
