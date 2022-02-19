import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes/routes'

import GlobalStyles from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
)
