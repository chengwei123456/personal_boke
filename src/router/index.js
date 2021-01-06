import Vue from 'vue'
import Router from 'vue-router'


const Content = () => import("../component/Content/Content.vue")
const Home = () => import("../components/Home/Home.vue")
const Message = () => import("../components/Message/Message.vue")
const Read = () => import("../components/Message/Read.vue")
Vue.use(Router)

export default new Router({
  mode:'history',
  // 解决路由跳转时跳到新页面底部的办法。
  scrollBehavior(to, from, savedPosition){
    if (savedPosition){
      // savedPosition 会在你使用浏览器前进或后退按钮时候生效
       // 这个跟你使用 router.go() 或 router.back() 效果一致
      return savedPosition
    }else {
       // 如果不是通过上述行为切换组件，就会让页面回到顶部
      return {x:0,y:0}
    }
  },
  routes: [
     {
      path :'/index',
      redirect:'/'
     },
     //首页
    {
      path:'/',
      component: Home,
    },
    //博客页
    {
      path: '/article/:id',
      name: 'Content',
      component: Content,
      children:[
        {
          path:'read/:id', //需要加入参数，否则传参时刷新之后参数丢失。
          name: 'read',
          component:Read
        }
      ]
    },
    //留言页
    {
      path:'/message',
      component: Message,
    }
   
   
  ],
})
