import React from 'react'
import {Route} from 'react-router'

import Title from './Title'
import Home from './Home'
class App extends React.Component {


  render () {
    return (
      <div className ='app'>
        <Route exact path= '/' component={Title} />
        <Route exact path='/Home' component={Home}/>
      </div>
    )
  }
}

export default App
