import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DemoPage extends Component {
  render () {
    return <React.Fragment>
      <h1>Demo</h1>
      <Link to='/login'>登入頁面</Link>
      <hr />
      <Link to='/demo/bullet'>讓子彈飛 Demo</Link>
    </React.Fragment>
  }
}

export default DemoPage
