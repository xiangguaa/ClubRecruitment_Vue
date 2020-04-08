import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Join from '../views/Join.vue'
import Recruit from '../views/Recruit.vue'
import Joinchart from '../views/Joinchart.vue'
import Schedule from '../components/Schedule.vue'
import HelloWorld from '../components/HelloWorld.vue'


Vue.use(VueRouter)
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/recruit',
      name: 'Recruit',
      component: Recruit
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/joinchart/:clubName',
      name: 'joinchart',
      children:[
        {
          path: '',
          component: HelloWorld,
          name:'t'
        },
      ],
      components: {
        default:Joinchart,
        schedule:Schedule,
      },
      props: { default: true, schedule: true }

        
      // },
      // children: [
      //   {
      //     path: '',
      //     name: 'Schedule',
      //     component: Schedule 
      //   },

      // ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
