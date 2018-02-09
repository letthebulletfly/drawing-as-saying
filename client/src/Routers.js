import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import DemoPage from './components/DemoPage'
import BulletDemo from './components/BulletDemo'

const Routers = () => (
  <React.Fragment>
    <Redirect exact from='/' to='/demo' />
    <Route exact path='/demo' component={DemoPage} />
    <Route exact path='/demo/bullet' component={BulletDemo} />
  </React.Fragment>
)

export default Routers
