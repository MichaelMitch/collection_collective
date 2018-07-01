import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
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
      <Router>
        <div className="mainPage">
        <Route path='home' component= {Home}/>
        </div>
      </Router>
    </div>
  )
  }
}

export default App