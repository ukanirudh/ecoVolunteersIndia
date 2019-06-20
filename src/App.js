import React from 'react'
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import App from './home-page/homePageRoutes'
import setupStore from './store'

const ApplicationWrapper = () => {
  return (
    <HashRouter>
      <Provider store={setupStore()}>
        <App />
      </Provider>
    </HashRouter>
  )
}

export default ApplicationWrapper;
