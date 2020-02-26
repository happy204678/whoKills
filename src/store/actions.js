
import * as types from './mutation-types'
import store from 'storejs'

export const setUserName = ({ commit }, value) => {
  store.set('userName', value)
  commit(types.SET_USERNAME, value)
}
export const setIdentify = ({ commit }, value) => {
  store.set('identify', value)
  commit(types.SET_IDENTIFY, value)
}
export const setNight = ({ commit }, value) => {
  store.set('night', value)
  commit(types.SET_NIGHT, value)
}
export const setStep = ({ commit }, value) => {
  store.set('step', value)
  commit(types.SET_STEP, value)
}
export const setGameOver = ({ commit }) => {
  store.set('userName', [])
  store.set('step', 99)
  commit(types.SET_GAMEOVER)
}
