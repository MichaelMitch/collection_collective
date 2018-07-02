import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'

import App from './components/App'
document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(
    <Router basename="/Collection_Collective">
      <div>
        <App />
      </div>
    </Router>,
    document.getElementById('app')
  )
})