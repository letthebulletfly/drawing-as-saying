import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'rxjs'
import { BrowserRouter as Router } from 'react-router-dom'

import configureStore from './redux/index'
import App from './App'

let store = configureStore()

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)
