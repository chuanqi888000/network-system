import * as types from '../type'

const state = {
    isLogin: false
}

const actions = {
    isLogin({ commit }, res) {
        commit(types.IS_LOGIN, res)
    }
}

const getters = {
    isLogin: state => state.isLogin,
}

const mutations = {
    [types.IS_LOGIN](state, res) {
        state.isLogin = res.isLogin
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
