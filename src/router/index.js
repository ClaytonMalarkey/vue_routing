import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import MenuPage from '@/views/MenuPage.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/menu',
    name: 'MenuPage',
    component: MenuPage,
  },
  
]

const router = new VueRouter({
  routes
})

export default router
