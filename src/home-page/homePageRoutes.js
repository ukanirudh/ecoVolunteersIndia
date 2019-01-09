import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import HomePage from './index'
import Gallery from '../gallery'
import Activities from '../activities'

const HomePageRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={HomePage} />
      <Route path="/activities" component={Activities} />
    </Switch>
  )
}

export default HomePageRoutes;
