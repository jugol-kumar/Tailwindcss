import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MainPage from '@/pages/MainPage.vue'
import Landing1 from '@/pages/Landing1.vue'
import Login from '@/pages/Login.vue'
import FlexBox from '@/pages/FlexBox.vue'
import Grid from '@/pages/Grid.vue'
import Responsive from '@/pages/Responsive.vue'
import Filtering from '@/pages/Filtering.vue'
import DefaultLayout from "@/layouts/Default.vue"
import AdminLayout from "@/layouts/Admin.vue"
import TeliphoneInput from "@/pages/Modules/TeliphoneInput.vue"
import Protfollue from "@/pages/Protfollue/Index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:"Public",
      component:DefaultLayout,
      redirect:"/",
      children:[
        { path: '/', name: 'Home', component: MainPage },
        { path: '/landing-1', name: 'Landing-1', component: Landing1 },
        { path: '/login-form', name: 'login-form', component: Login },
        { path: '/flex-box', name: 'flex-box', component: FlexBox },
        { path: '/grid', name: 'grid', component: Grid },
        { path: '/responsive', name: 'responsive', component: Responsive },
        { path: '/filtering', name: 'filtering', component: Filtering },

        // load components
        { path: '/price-plan', name: 'pricePlan', component: () => import('@/pages/Modules/PricePlan.vue') },
        { path: '/quil-editor', name: 'quilEditor', component: () => import('@/pages/Modules/QuilEditor.vue') },
        { path: '/quil-editor', name: 'quilEditor', component: () => import('@/pages/Modules/QuilEditor.vue') },
        { path: '/geo-location', name: 'GeoLocation', component: () => import('@/pages/Modules/GeoLocation.vue') },
        
      ]
    },

    {
      path:'/admin1',
      name:"Admin1",
      component:AdminLayout,
      redirect:"/",
      children:[
        { path: '/admin1', name: 'Admin1', component: () => import('@/pages/Modules/Sidebar.vue') },
      ]
    },
    {
      path:'/admin2',
      name:"Admin2",
      component:AdminLayout,
      redirect:"/",
      children:[
        { path: '/admin2', name: 'Admin2', component: () => import('@/pages/Modules/FixedSidebarAndNavbar.vue') },
      ]
    },
    {
      path:'/chaldal',
      name:"chaldal",
      component: () => import("@/pages/Modules/Chaldal.vue")
    },
    {
      path:'/nav-sidebar',
      name:"navsidebar",
      component: () => import("@/pages/Modules/Nav&Sidebar.vue")
    },


    { path: '/first-landing', 
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/teliphone',
      name: 'Teliphone',
      component:TeliphoneInput,
    },
    {
      path: '/protfollue',
      name: 'Protfollue',
      component: Protfollue
    }
  ]
})

export default router
