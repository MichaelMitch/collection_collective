import React from 'react'
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Home from './Home'

 class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      placehold: 'hello'
    }
  }
  
  render(){
  return (
    <div className ="app">
        <div className="mainPage">
          <h1 className="titlePg-title"> Collection Collective </h1>
          <p className="titlePg-intro"> Find those hard to ID tracks in your favourite DJ sets, mixes, or podcasts </p>
          <Link to='/'><button id="titlePg-Btn"> Enter </button></Link>
  
        </div>

    </div>
  )
  }
}

export default App