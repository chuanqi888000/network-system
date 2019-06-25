/*通用配置*/
import * as types from '../type'
import {Local} from '@/storage/index'
const state = {
 bgColor:  Local.get('bgColor') || "blue"
}

const actions = {
 setbgColor({commit}, color) {
  commit(types.COLOR,color)
 }
}


const getters = {
 bgColor: state => state.bgColor
}


const mutations = {
 [types.COLOR](state, color) {
        state.bgColor = color
        Local.set('bgColor',color)
    }
}


export default {
    state,
    actions,
    getters,
    mutations
}
