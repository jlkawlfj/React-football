import React from 'react'
import ReactDOM from 'react-dom'
import './styles/App.scss'
import reportWebVitals from './reportWebVitals'
import MainRouter from './router/route'
import store from './redux/store'
import { Provider } from 'react-redux'
import './i18n/index.ts'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
