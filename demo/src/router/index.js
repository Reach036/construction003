import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import satellite from '@/components/satellite'
import heatmap from '@/components/heatmap'
import city from '@/components/city'
import terrain from '@/components/terrain'
import depth from '@/components/depth'

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
      path: '/components/satellite',
      name: 'satellite',
      component: satellite,
      meta: {
        keepAlive: true
      }
    }, {
      path: '/components/heatmap',
      name: 'heatmap',
      component: heatmap,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/components/city',
      name: 'city',
      component: city,
      meta: {
        keepAlive: true
      }
    },{
      path: '/components/terrain',
      name: 'terrain',
      component: terrain,
      meta: {
        keepAlive: true
      }
    },{
      path: '/components/depth',
      name: 'depth',
      component: depth,
      meta: {
        keepAlive: true
      }
    },
  ]
})


