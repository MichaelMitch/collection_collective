import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import MixPage from './MixPage'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      placehold: 'hello'
    }
  }

  render () {
    return (
      <div className ="app">
        <MixPage />
      </div>

    )
  }
}

export default App
