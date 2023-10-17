import VueRouter from 'vue-router'
import Vue from "vue";
import HomePage from '@/views/HomePage.vue';
import MenuPage from '@/views/MenuPage.vue';


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      // name: 'HomePage',
      component: HomePage
      // meta: {
      //   title: 'Home Page',
      //   author: 'Your Name',
      //   description: 'This is the home page description.',
      // },
    },
    {
      path: '/menu',
      component: MenuPage
      // meta: {
      //   title: 'Menu Page',
      //   author: 'Your Name',
      //   description: 'This is the menu page description.',
      // },
    }
    // Other routes if you have them
  ],
  mode: 'history'
})


// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title;
//   const metaDescription = document.querySelector('meta[name="description"]');
//   if (metaDescription) {
//     metaDescription.setAttribute('content', to.meta.description);
//   }
//   next();
// });




export default router
