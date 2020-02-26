import * as types from './mutation-types'
import store from 'storejs' // store save as localStorage
// state
const state = {
  identify: store.get('identify') !== undefined ? store.get('identify') : '',
  userName: store.get('userName') !== undefined ? store.get('userName') : '',
  night: store.get('night') !== undefined ? store.get('night') : false,
  step: store.get('step') !== undefined ? store.get('step') : 0 // include morning and night
}

// mutations
const mutations = {
  // action 發出 commit 會對應到 mutation 使用的是 Object key 方式
  // 在 mutation 改變 state（只有 mutation 可以改變！）
  [types.SET_IDENTIFY] (state, payload) {
    state.identify = payload
  },
  [types.SET_USERNAME] (state, payload) {
    state.userName = payload
  },
  [types.SET_NIGHT] (state, payload) {
    state.night = payload
  },
  [types.SET_STEP] (state, payload) {
    state.step = payload
  }
}
export {
  state,
  mutations
}
