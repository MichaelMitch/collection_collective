import React from 'react'
import ReactDom from 'react-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(
    <div>
    <App />
    </div>,
    document.getElementById('app')
  )
})