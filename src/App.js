import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import PageRoutes from './homePageRoutes'
import setupStore from './store'

const ApplicationWrapper = () => {
  return (
    <Router>
      <Provider store={setupStore}>
        <PageRoutes />
      </Provider>
    </Router>
  )
}

export default ApplicationWrapper;
