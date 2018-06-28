import React from 'react'
import ReactDom from 'react-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', function () {
  ReactDom.render(
    <App />,
    document.getElementById('app')
  )
})
