import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import user from '@/views/exportUserList'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/user'
    },
    {
      path: '/user',
      name: '用户中心',
      component: user
    }
  ]
})
