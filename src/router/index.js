import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home')
const CityChoose = () => import('@/views/CityChoose')
const Settings = () => import('@/views/Settings')
const Theme = () => import('@/views/Theme')
const About = () => import('@/views/About')


Vue.use(VueRouter)

const routes = [
  { path: '', redirect: '/Home' },
  { path: '/Home', component: Home },
  { path: '/CityChoose', component: CityChoose },
  { path: '/Settings', component: Settings },
  { path: '/Theme', component: Theme },
  { path: '/About', component: About }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
