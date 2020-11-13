import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import App from './App'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import { BrowserRouter as Router } from 'react-router-dom'

import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
      <ToastContainer autoClose={2000} />
    </Router>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
