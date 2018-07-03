import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import Mix from  './Mix'
import {getMixes} from "../api/apiClient"


 class MixPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mixes: [],

    }
  }
  setPeople(){
    return getMixes()
    .then(mixes => {
      this.setState({mixes: mixes.mixes})
    })
  }
  componentDidMount(){
    this.setMixes()
  }
  render(){
  return (
    <div className ="MixPage">
      <h2> Collection Collective </h2>
      <h3> Mixes </h3>
      {this.props.mixes.map(function (mix) {
            return <Mix mix={mix}/>
          })}      
    </div>

  )
  }
}

export default MixPage