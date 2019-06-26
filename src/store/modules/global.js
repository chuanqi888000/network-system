/* 通用配置 */

import * as types from '../type'
import {Local} from '@/storage/index'
const state = {
  bgColor: Local.get('bgColor') || 'blue',
  token: Local.get('token') || ''
}

const actions = {
  setbgColor ({commit}, color) {
    commit(types.COLOR, color)
  },
  setToken ({commit}, token) {
    commit(types.TOKEN, token)
  }
}

const getters = {
  bgColor: state => state.bgColor,
  token: state => state.token
}

const mutations = {
  [types.COLOR] (state, color) {
    state.bgColor = color
    Local.set('bgColor', color)
  },
  [types.TOKEN] (state, token) {
    state.token = token
    Local.set('token', token)
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
