import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Jigou from '@/components/Jigou'
import Xiangmu from '@/components/Xiangmu'
import Zhaobiao from '@/components/Zhaobiao'
import Zixun from '@/components/Zixun'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/components/Main'
    },{
      path: '/components/Main',
      name: 'Main',
      component: Main
    }, {
      path: '/components/Jigou',
      name: 'Jigou',
      component: Jigou
    }, {
      path: '/components/Xiangmu',
      name: 'Xiangmu',
      component: Xiangmu
    },
    {
      path: '/components/Zhaobiao',
      name: 'Zhaobiao',
      component: Zhaobiao
    },{
      path: '/components/Zixun',
      name: 'Zixun',
      component: Zixun
    }
  ]
})


