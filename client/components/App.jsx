import React from 'react'
import {Route} from 'react-router-dom'
import Launch from './Launch'
import Header from './Header'
import Mixes from './Mixes'
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
      <Route path="/" component={Header}/>
      <Route exact path="/" component={Launch}/>
      <Route path="/Mixes" component={Mixes}/>
    </div>
    
  )
  }
}

export default App