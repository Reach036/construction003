import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Jigou from '@/components/Jigou'
import Xiangmu from '@/components/Xiangmu'
import Xiangmu_vip from '@/components/Xiangmu_vip'
import Xiangmu_shenpi from '@/components/Xiangmu_shenpi'
import Xiangmu_nizaijian from '@/components/Xiangmu_nizaijian'
import Xiangmu_ppp from '@/components/Xiangmu_ppp'
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
      component: Main,
      meta: {
        keepAlive: true
      }
    }, {
      path: '/components/Jigou',
      name: 'Jigou',
      component: Jigou,
      meta: {
        keepAlive: true
      }
    }, {
      path: '/components/Xiangmu',
      name: 'Xiangmu',
      component: Xiangmu,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/components/Zhaobiao',
      name: 'Zhaobiao',
      component: Zhaobiao,
      meta: {
        keepAlive: true
      }
    },{
      path: '/components/Zixun',
      name: 'Zixun',
      component: Zixun,
      meta: {
        keepAlive: true
      }
    },{
      path: '/components/Xiangmu/Xiangmu_vip',
      name: 'Xiangmu_vip',
      component: Xiangmu_vip,
      meta: {
        keepAlive: true
      }
    },{
      path: '/components/Xiangmu/Xiangmu_shenpi',
      name: 'Xiangmu_shenpi',
      component: Xiangmu_shenpi,
      meta: {
        keepAlive: true
      }
    },{
      path: '/components/Xiangmu/Xiangmu_nizaijian',
      name: 'Xiangmu_nizaijian',
      component: Xiangmu_nizaijian,
      meta: {
        keepAlive: true
      }
    },{
      path: '/components/Xiangmu/Xiangmu_ppp',
      name: 'Xiangmu_ppp',
      component: Xiangmu_ppp,
      meta: {
        keepAlive: true
      }
    }
  ]
})


