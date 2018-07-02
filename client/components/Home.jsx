import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

 class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      placehold: 'hello'
    }
  }
  
  render(){
  return ( 
    <div className ="home">
      <h1> Collection Collective </h1> 
      <p>rerngerk.jnsjkv ,rv,ksjnvreksjnvernvoqbjv.kj</p>
    </div>
  )
  }
}

export default Home