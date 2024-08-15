import { createRouter, createWebHashHistory } from 'vue-router'

const Recommend = () => import('@/views/m-recommend.vue'/* webpackChunkName: "recommend" */)
const Singer = () => import('@/views/m-singer.vue'/* webpackChunkName: "singer" */)
const TopList = () => import('@/views/top-list.vue'/* webpackChunkName: "top-list" */)
const Search = () => import('@/views/m-search.vue'/* webpackChunkName: "search" */)
const UserCenter = () => import('@/views/user-center.vue'/* webpackChunkName: "user-center" */)

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend,
  },
  {
    path: '/singer',
    component: Singer,
  },
  {
    path: '/top-list',
    component: TopList,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/user',
    components: {
      user: UserCenter
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
