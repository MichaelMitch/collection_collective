import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
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
        <h1 className="titlePg-title mainPage"> Collection Collective </h1>
        <p className="titlePg-intro mainPage"> Find those hard to ID tracks in your favourite DJ sets, mixes, or podcasts </p>
        <Link to='Home'><button id="titlePg-Btn"> Enter </button></Link>
        <Route path="Home" Component="Home"/>
      </div>

    )
  }
}

export default App
