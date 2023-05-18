import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainPage from '@/pages/MainPage.vue'
import Landing1 from '@/pages/Landing1.vue'
import Login from '@/pages/Login.vue'
import FlexBox from '@/pages/FlexBox.vue'
import Grid from '@/pages/Grid.vue'
import Responsive from '@/pages/Responsive.vue'
import Filtering from '@/pages/Filtering.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: MainPage },
    { path: '/landing-1', name: 'Landing-1', component: Landing1 },
    { path: '/login-form', name: 'login-form', component: Login },
    { path: '/flex-box', name: 'flex-box', component: FlexBox },
    { path: '/grid', name: 'grid', component: Grid },
    { path: '/responsive', name: 'responsive', component: Responsive },
    { path: '/filtering', name: 'filtering', component: Filtering },

    // load components
    { path: '/price-plan', name: 'pricePlan', component: () => import('@/pages/Modules/PricePlan.vue') },


    { path: '/first-landing', 
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
