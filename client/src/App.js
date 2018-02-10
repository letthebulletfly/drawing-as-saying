import React, { Component } from 'react'
import Routers from './Routers'
import { injectGlobal } from 'styled-components'

injectGlobal`
  html, body, #root {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-size: 16px;
  }

  *, *:after, *:before {
    box-sizing: border-box;
  }
`

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Routers />
      </React.Fragment>
    )
  }
}

export default App
