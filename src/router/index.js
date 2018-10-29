import Vue from 'vue'
import Router from 'vue-router'

const Index = ()=>import('@/views/Index.vue');
const First = ()=>import('@/views/index/First.vue');
const Follow = ()=>import('@/views/index/Follow.vue');
const Add = ()=>import('@/views/index/Add.vue');
const News = ()=>import('@/views/index/News.vue');
const My = ()=>import('@/views/index/My.vue');


const Recomd = ()=>import('@/views/index/first/Recomd.vue');
const Beijing = ()=>import('@/views/index/first/Beijing.vue');


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path:'/index',
      component: Index,
      children:[
        {
          path:'/index/first',
          component: First,
          redirect:'/index/first/recomd',
          children:[
            {
              path: '/index/first/recomd',
              component: Recomd
            },
            {
              path: '/index/first/beijing',
              component: Beijing
            }
          ]
        },
        {
          path:'/index/follow',
          component: Follow
        },
        {
          path:'/index/add',
          component: Add
        },
        {
          path:'/index/news',
          component: News
        },
        {
          path:'/index/my',
          component: My
        }
      ]
    },
    {
      path:'*',
      redirect: '/index/first/recomd'
    }
  ]
})

export default router;