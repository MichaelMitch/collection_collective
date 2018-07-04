import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import Mix from  './Mix'
import {getMixes} from "../api/apiClient"


 class MixPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mixes: []
    }
    this.setMixes = this.setMixes.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  setMixes(){
    return getMixes()
    .then(mixes => {
      this.setState({mixes})
    })
  }
  componentDidMount(){
    this.setMixes()
  }
  render(){
    const mixes = this.state.mixes
  return (    
    <div className ="MixPage">
      <h2> Collection Collective </h2>
      <h3> Mixes </h3>
      {this.state.mixes.map(mix => {return <Mix key={mix.id} mix={mix}/>})}      
    </div>

  )
  }
}

export default MixPage