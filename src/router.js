import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/UpdateHistory.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./views/detail/index.vue')
    },
    {
      path: '/book/:id/:chapterno',
      name: 'book',
      component: () => import('./views/Chapter.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/SearchResult.vue'),
    },
  ]
})
