import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'


let store = createStore(todoApp)

render(
  // provider component is magical way to connect to redux store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
