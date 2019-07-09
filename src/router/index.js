/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import { Loading, Message } from 'element-ui'
const Home = r => require.ensure([], () => r(require('@/pages/home/Home')), 'home') // 首页
const Login = r => require.ensure([], () => r(require('@/pages/Login/Login')), 'login') // 登录页
const Register = r => require.ensure([], () => r(require('@/pages/register/Register')), 'register') // 注册
const DataAssets = r => require.ensure([], () => r(require('@/pages/dataAssets/dataAssets')), 'dataAssets') // 数据源
const DictionaryManage = r => require.ensure([], () => r(require('@/pages/dataAssets/dictionaryManage')), 'dictionaryManage') // 字典管理
const AccountManage = r => require.ensure([], () => r(require('@/pages/dataAssets/accountManage')), 'accountManage') // 账号管理
const BusinessManage = r => require.ensure([], () => r(require('@/pages/dataAssets/businessManage')), 'businessManage') // 角色管理

const SecondCompont = r => require.ensure([], () => r(require('@/pages/dataAssets/secondCompont')), 'secondCompont') // 公共模块
const ModuleManage = r => require.ensure([], () => r(require('@/pages/dataAssets/systemManage/moduleManage')), 'moduleManage') // 系统管理/模块管理

const AttributeSettingManage = r => require.ensure([], () => r(require('@/pages/dataAssets/settingManage/attributeSettingManage')), 'attributeSettingManage') // 配置管理/属性配置

Vue.use(Router)

var router = new Router({
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
      path: '/dataAssets',
      name: 'dataAssets',
      component: DataAssets,
      meta: {
        name: '数据资产',
        requireAuth: false
      },
      children: [
        {
          path: 'dictionaryManage',
          component: DictionaryManage,
          meta: { name: '数据资产/字典管理' }
        },
        {
          path: 'accountManage',
          component: AccountManage,
          meta: { name: '数据资产/账号管理' }
        },
        {
          path: 'businessManage',
          component: BusinessManage,
          meta: { name: '数据资产/业务管理' }
        },
        {
          path: 'systemManage',
          component: SecondCompont,
          children: [{
            path: 'moduleManage',
            component: ModuleManage,
            meta: { name: '数据资产/系统管理/模块管理' }
          }]
        },
        {
          path: 'settingManage',
          component: SecondCompont,
          children: [{
            path: 'attributeSettingManage',
            component: AttributeSettingManage,
            meta: { name: '数据资产/配置管理/属性配置' }
          }]
        },
        {
          path: '*',
          redirect: to => {
            const { hash, params, query } = to
            console.log(hash)
            store.dispatch('setDefaultSystem', true)
            console.log(store.getters.defaultSystem)
            Message({
              type: 'warning',
              message: '暂时还没开通相关功能，敬请期待！'
            })
            return '/dataAssets'
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.name === 'dataAssets') {
    if (to.redirectedFrom) {
      next()
    } else {
      next()
    }
  } else {
    store.dispatch('setDefaultSystem', false)
    console.log(store.getters.defaultSystem)
    next()
  }
})

export default router
