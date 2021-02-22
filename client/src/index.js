import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppState } from 'context/AppState'
import App from 'App'
import reportWebVitals from 'reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'index.css'

ReactDOM.render(
  <BrowserRouter>
    <AppState>
      <App />
    </AppState>
  </BrowserRouter>,
  document.getElementById('root')
)

reportWebVitals()
