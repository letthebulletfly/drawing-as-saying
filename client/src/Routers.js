import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import DemoPage from './components/DemoPage'
import LoginPage from './pages/LoginPage'
import BulletDemo from './components/BulletDemo'

const Routers = () => (
  <React.Fragment>
    <Route exact path='/' component={DemoPage} />
    <Route exact path='/login' component={LoginPage} />
    <Route exact path='/demo/bullet' component={BulletDemo} />
  </React.Fragment>
)

export default Routers
