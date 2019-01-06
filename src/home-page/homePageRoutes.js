import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import HomePage from './index'
import Gallery from '../gallery'

const HomePageRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={HomePage} />
    </Switch>
  )
}

export default HomePageRoutes;
