import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import HomePage from './index'
import Gallery from '../gallery'
import Activities from '../activities'
import AboutUs from '../about-us'
import Volunteers from '../volunteers'

const HomePageRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/volunteers" component={Volunteers} />
      <Route path="/activities" component={Activities} />
    </Switch>
  )
}

export default HomePageRoutes;
