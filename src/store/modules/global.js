/* eslint-disable no-trailing-spaces */
/* 通用配置 */

import * as types from '../type'
import {Local} from '@/storage/index'
const state = {
  bgColor: Local.get('bgColor') || 'blue',
  token: Local.get('token') || '',
  defaultSystem: Local.get('defaultSystem') || true
}

const actions = {
  setbgColor ({commit}, color) {
    commit(types.COLOR, color)
  },
  setToken ({commit}, token) {
    commit(types.TOKEN, token)
  },
  setDefaultSystem ({commit}, defaultSystem) {
    commit(types.DEFAULTSYSTEM, defaultSystem)
  }
}

const getters = {
  bgColor: state => state.bgColor,
  token: state => state.token,
  defaultSystem: state => state.defaultSystem 
}

const mutations = {
  [types.COLOR] (state, color) {
    state.bgColor = color
    Local.set('bgColor', color)
  },
  [types.TOKEN] (state, token) {
    state.token = token
    Local.set('token', token)
  },
  [types.DEFAULTSYSTEM] (state, defaultSystem) {
    state.defaultSystem = defaultSystem
    Local.set('defaultSystem', defaultSystem)
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
