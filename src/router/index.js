import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import GetArticleByName from '@/components/GetArticleByName'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/api/user/sign_in',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/api/user/sign_up',
    name: 'signup',
    component: SignUp
  },
  {
    path :'/articles/GetArticlesByName',
    name: 'getarticlebyname',
    component: GetArticleByName
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
