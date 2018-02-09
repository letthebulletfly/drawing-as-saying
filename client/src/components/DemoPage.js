import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DemoPage extends Component {
  render () {
    return <React.Fragment>
      <Link to='/demo/bullet'>讓子彈飛 Demo</Link>
    </React.Fragment>
  }
}

export default DemoPage
