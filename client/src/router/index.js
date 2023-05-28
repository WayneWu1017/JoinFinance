import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomePage.vue'
import About from '@/views/AboutPage.vue'
import Login from '@/views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/login', component: Login},
  ],  
})

export default router