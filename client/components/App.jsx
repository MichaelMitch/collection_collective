import React from 'react'
import {Route} from 'react-router-dom'
import Title from './Title'
import home from './home'
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
      <Route exact path="/" component={Title}/>
      <Route exact path="/home" component={home}/>
    </div>
    
  )
  }
}

export default App