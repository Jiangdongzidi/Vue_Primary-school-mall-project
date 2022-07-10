import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage'
import DiscoverMusic from '../pages/DiscoverMusic'
import RankingList from '../pages/RankingList'
import Recommend from '../pages/discoverPages/recommend'
import My from '../pages/My'
import Follow from '../pages/Follow'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: HomePage,
    // redirect: '/discover',
    children: [
      {
        path: 'discover',
        component: DiscoverMusic,
        children: [
          {
            path: 'ranking',
            component: RankingList
          },
          {
            path: 'recommend',
            component: Recommend
          }
        ]
      },
      {
        path: 'my',
        component: My
      },
      {
        path: 'follow',
        component: Follow
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
