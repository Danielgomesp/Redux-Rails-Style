import React from 'react'

import { Provider } from 'react-redux'
import store from '../src/store'

import './App.css'
import Lista from './components/Lista'
import InputValue from './components/InputValue'

export default function App () {
  return (
    <Provider store={store}>
      <div style={
        {
          margin: '50px auto',
          width: 'fit-content'
        }
      }
      >
        <InputValue />
        <Lista />
      </div>
    </Provider>
  )
}
