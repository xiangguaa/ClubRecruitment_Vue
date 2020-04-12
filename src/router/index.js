import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Join from '../views/Join.vue'
import Recruit from '../views/Recruit.vue'
import Joinchart from '../views/Joinchart.vue'
import Schedule from '../components/Schedule.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Recruitchart from '../views/Recruitchart.vue'
import ChartSetting from '../components/ChartSetting.vue'
import RegistrationStatus from '../components/RegistrationStatus.vue'
import Login from '../views/Login.vue'


Vue.use(VueRouter)
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      // props: true,
    },
    {
      path: '/recruit',
      name: 'Recruit',
      component: Recruit
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      props: true
    },
    {
      path: '/recruitchart/:chartID',
      name: 'recruitchart',
      components: {
        default:Recruitchart,
      },

      // redirect: "ChartSetting",
      props: { default: true, schedule: true },
      children:[
        {
          path: 'ChartSetting',
          name: 'ChartSetting',
          component: ChartSetting

        },
        {
          path: 'RegistrationStatus',
          name: 'RegistrationStatus',
          component: RegistrationStatus

        }
      ]
    },
    {
      path: '/join',
      name: 'Join',
      component: Join,
      props: true,
    },
    {
      // path: '/joinchart/:clubName',
      path: '/joinchart/:chartID',
      name: 'joinchart',
      components: {
        default:Joinchart,
        // schedule:Schedule,
      },
      props: { default: true, schedule: true }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
