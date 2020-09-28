import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/app.css'
import Router from './routes'

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)