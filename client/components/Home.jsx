import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

 class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      placehold: ''
    }
  }
  
  render(){
  return ( 
    <div className ="Home">
      <p>rerngerk.jnsjkv ,rv,ksjnvreksjnvernvoqbjv.kj</p>
      <p>rerngerk.jnsjkv ,rv,ksjnvreksjnvernvoqbjv.kj</p>
      <p>rerngerk.jnsjkv ,rv,ksjnvreksjnvernvoqbjv.kj</p>
      <p>rerngerk.jnsjkv ,rv,ksjnvreksjnvernvoqbjv.kj</p>
      <p>rerngerk.jnsjkv ,rv,ksjnvreksjnvernvoqbjv.kj</p>
      <p>rerngerk.jnsjkv ,rv,ksjnvreksjnvernvoqbjv.kj</p>
    </div>
  )
  }
}

export default Home