import React from 'react'
import ReactDOM from 'react-dom'
import setupStore from './store'
import {TradingApp} from './App'
import { Provider } from 'react-redux'
import './trading.css'

const trading = () => {
  return (
    <Provider store={setupStore()}>
      <TradingApp />
    </Provider>
  )
}

export default trading;
