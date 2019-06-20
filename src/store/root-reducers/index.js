import { combineReducers } from 'redux'
import trading from '../modules/trading'
import loginModule from '../modules/loginModule'

export default combineReducers({
  trading,
  loginModule
})
