import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: _ => import('@/views/home/Index.vue')
  },
  {
    path: '/detail',
    component: _ => import('@/views/home/Detail.vue')
  }
]
export default new VueRouter({ routes })
