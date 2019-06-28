import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('@/pages/home/Home')), 'home') // 首页
const Login = r => require.ensure([], () => r(require('@/pages/Login/Login')), 'login') // 登录页
const Register = r => require.ensure([], () => r(require('@/pages/register/Register')), 'register') // 注册
const DataResources = r => require.ensure([], () => r(require('@/pages/dataResources/dataResources')), 'dataResources') // 数据源
const UserManage = r => require.ensure([], () => r(require('@/pages/dataResources/userManage')), 'userManage') // 注册
const RoleManage = r => require.ensure([], () => r(require('@/pages/dataResources/roleManage')), 'roleManage') // 注册
import Category from '@/pages/JobCategory'
import Blog from '@/pages/BlogHome'
import BlogDetails from '@/pages/BlogDetails'
import JobSearch from '@/pages/JobSearch'
import JobSingle from '@/pages/JobSingle'
import PricingPlan from '@/pages/PricingPlan'
import Elements from '@/pages/Elements'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      // eslint-disable-next-line key-spacing
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      // eslint-disable-next-line key-spacing
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      // eslint-disable-next-line key-spacing
      path: '/dataResources',
      name: 'dataResources',
      component: DataResources,
      meta: { name: '数据资产' },
      children: [
        {
          path: 'userManage',
          component: UserManage,
          meta: { name: '数据资产/用户管理/用户管理' }
        },
        {
          path: 'roleManage',
          component: RoleManage,
          meta: { name: '数据资产/角色管理' }
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About
    // },
    // {
    //   path: '/category',
    //   name: 'category',
    //   component: Category
    // },
    // {
    //   path: '/blog',
    //   name: 'blog',
    //   component: Blog
    // },
    // {
    //   path: '/blogDetails',
    //   name: 'blogDetails',
    //   component: BlogDetails
    // },
    // {
    //   path: '/jobSearch',
    //   name: 'jobSearch',
    //   component: JobSearch
    // },
    // {
    //   path: '/jobSingle',
    //   name: 'jobSingle',
    //   component: JobSingle
    // },
    // {
    //   path: '/pricingPlan',
    //   name: 'pricingPlan',
    //   component: PricingPlan
    // },
    // {
    //   path: '/elements',
    //   name: 'elements',
    //   component: Elements
    // }
  ]
})
